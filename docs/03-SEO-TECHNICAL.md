# 03 — Technical SEO

Last updated: 2026-08-10 · Owner: Dallin

> **Next.js 16.2.2, App Router.** The APIs below were verified against `node_modules/next/dist/docs/` in this repo on 2026-08-07. Metadata and file conventions changed across recent majors — read the local docs before changing any of this, per [AGENTS.md](../AGENTS.md).

---

## Status — implemented 2026-08-07 (Phase 2)

| Item | State |
|---|---|
| `metadataBase` + `title.template` | ✅ [app/layout.tsx](../app/layout.tsx) |
| Per-page title / description / canonical | ✅ all routes |
| OpenGraph + Twitter cards | ✅ sitewide |
| OG image | ✅ [app/opengraph-image.tsx](../app/opengraph-image.tsx) |
| JSON-LD | ✅ [lib/schema.ts](../lib/schema.ts) + [components/seo/JsonLd.tsx](../components/seo/JsonLd.tsx) |
| `robots.txt` | ✅ [app/robots.ts](../app/robots.ts) |
| `sitemap.xml` | ✅ [app/sitemap.ts](../app/sitemap.ts), 16 URLs |
| `/llms.txt` | ✅ [app/llms.txt/route.ts](../app/llms.txt/route.ts) |
| Rich Results Test | ⬜ needs a deployed URL |

Verified at build: 19 JSON-LD blocks parse clean; no `Review`, `AggregateRating`, or `streetAddress` anywhere; all titles ≤52 chars with no duplicated site name; descriptions 121–149 chars.

The rest of this document is the **rules that govern changes to any of it.**

---

## Site config module

[lib/site.ts](../lib/site.ts) is the code mirror of [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md). Every business fact resolves through it — no page hardcodes a phone number, price, credential, or booking URL.

Shape (read the file for the current values):

```ts
export const SITE = {
  url, name,
  entityStatement,          // canonical identity — keep identical to /llms.txt and schema
  provider: {
    name: "Kim Yadon", postNominal: "FNP-C", fullName, jobTitle,
    credentials: [...],     // the four verified strings
    knowsAbout: [...],
  },
  contact: {
    phone, phoneE164, email,
    city: "South Jordan",   // publishable; the STREET address is not
    state, areaServed, serviceAreaLine,
  },
  focusCounties: ["Salt Lake County", "Utah County"],
  booking: { path: "/book", freeConsultNote },
  labDisclosure,
} as const;
```

Healthie offerings live alongside it as `OFFERINGS` / `PAID_OFFERINGS`, with `healthieEmbedUrl(key)` building the embed URL. The site uses the **offering** mechanism (`require_offering=true` + `offering_id`), not the retired `appt_type_ids` approach.

**No street address field.** Deliberate — see the address policy in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md).

---

## Metadata

### Root layout

Implemented in [app/layout.tsx](../app/layout.tsx): `metadataBase`, `title.default` + `title.template`, description, canonical, OpenGraph, Twitter, and `robots`.

Two things to preserve if you touch it:

- **`metadataBase` is what makes relative canonical and OG URLs resolve.** Without it they silently break — the most common cause of a site having OG tags that don't work.
- **The homepage description is NOT `SITE.entityStatement`.** The entity statement runs 226 characters because it's built for schema, which has no length limit. Meta descriptions target 140–155 and truncate badly past that. They're separate constants on purpose.

### Per page

Every page supplies only the title segment (44-char budget — see [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md)) and its own canonical:

```ts
export const metadata: Metadata = {
  title: "Hot Flashes & Night Sweats",
  description: "…140–155 characters…",
  alternates: { canonical: "/symptoms/hot-flashes-night-sweats" },
};
```

`generateMetadata` for dynamic routes. Note it is **Server Components only** — which is why `/resources` needs restructuring (below).

### Client-component trap — fixed in Phase 3

`generateMetadata` and the `metadata` export are **Server Components only**, so a `"use client"` page cannot carry its own metadata. `/resources` used to work around that with a pass-through layout whose only job was holding the export.

Both offenders were restructured rather than worked around:

| Was | Now |
|---|---|
| `/resources` fully `"use client"` for a category filter | Server page + [`ArticleGrid`](../components/blog/ArticleGrid.tsx) client child; stub layout deleted |
| `Footer` `"use client"` for a newsletter input | Server component + [`NewsletterForm`](../components/layout/NewsletterForm.tsx) client child |

The footer one mattered most: it put the NAP block behind a client boundary on **every page**.

**The rule going forward:** before adding `"use client"`, ask whether the content needs to be in the HTML source. If it does, push the interactivity into a small child instead of marking the whole page. A client-rendered page is invisible to AI crawlers ([04-AI-VISIBILITY.md](04-AI-VISIBILITY.md)).

---

## Structured data

Per the Next 16 JSON-LD guide: render as a **native `<script>` tag**, not `next/script`, since JSON-LD is data rather than executable code. Escaping is mandatory — `JSON.stringify` does not sanitize for XSS.

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
  }}
/>
```

Builders live in `lib/schema.ts` and read from `lib/site.ts`. Never hand-write a schema block in a page.

### Entity graph

Use stable `@id` values so entities link rather than duplicate. This is what lets a search engine understand that the practice and the person are related, and it is the difference between four disconnected blobs and one coherent entity.

| `@id` | Type |
|---|---|
| `{url}/#practice` | `MedicalBusiness` |
| `{url}/#kim` | `Person` |
| `{url}/#website` | `WebSite` |

### Coverage map

| Page | Schema | State |
|---|---|---|
| **All pages** (root layout) | `MedicalBusiness`, `Person`, `WebSite` — `@id`-linked | ✅ |
| `/about` | `BreadcrumbList` | ✅ |
| `/services` | `Service` × 2 with `Offer` pricing, `BreadcrumbList` | ✅ |
| `/faq` | `FAQPage` | ✅ |
| `/resources/[slug]` | `Article` + `BreadcrumbList`, `author` → **`#practice`** | ✅ |
| `/symptoms/*`, guides | `MedicalWebPage`, `FAQPage`, `BreadcrumbList`, author ref | ✅ |
| `/service-areas` | `Service` (state-wide), `BreadcrumbList` | ✅ |
| `/service-areas/*` | `MedicalWebPage`, `FAQPage`, `BreadcrumbList`, `Service` with **City** `areaServed` | ✅ |
| `/quiz` | `MedicalWebPage`, `FAQPage`, `BreadcrumbList` | ✅ |
| `/book`, `/book/*` | `Service` + `Offer`, `BreadcrumbList` | ✅ |
| `/contact` | `ContactPage`, `BreadcrumbList` | ✅ |
| `/resources` | `CollectionPage`, `BreadcrumbList` | ✅ |
| `/testimonials` | `BreadcrumbList` only — **never `Review`/`AggregateRating`** | ✅ |

**Nine pages previously carried only the sitewide entity graph** — including the booking pages, which have prices. That describes the business but says nothing about the page. `npm run verify` now fails the build if any page but the homepage lacks page-level schema; the homepage is exempt because `WebSite` + `MedicalBusiness` + `Person` is the correct shape for a root.

**Follow-up visit `Offer` is deliberately absent.** No price is documented for it in `00-BUSINESS-FACTS.md`, so `OFFERINGS.followUp.price` is `null` and the schema omits the offer rather than inferring $200 from the per-visit rate. A wrong price gets quoted back by AI assistants; that is worse than no price.

### One question, one page — FAQ answers must not repeat across URLs

Google serves one page per query. The same question answered on two URLs splits the signal and can suppress both, and for AI retrieval it produces two competing passages where one authoritative one would do.

**Four pairs had drifted in before this was measured** — the lab-cost question on `/faq` and `/bhrt-cost-utah`, a GSM definition on two symptom pages, a boilerplate "available across Utah" on two more, and a LabCorp answer duplicated verbatim. None was visible without checking.

Each question now has a canonical home, and the other page either reframes to a genuinely different angle or points across in prose. `npm run verify` fails the build on any repeated question **or** answer text, which is what makes this hold as pages get added.

### `dateModified` — now honest, previously omitted

`Article` and `MedicalWebPage` deliberately shipped without `dateModified` because there was no real modification date, and a fabricated freshness signal is worse than none.

That changed on 2026-08-16: Kim's corrections removed and rewrote whole passages, so the review date is a genuine modification. All three date signals — `dateModified`, `lastReviewed`, and the sitemap — read from `SITE.contentReviewedOn`, so they cannot disagree.

### `Person.sameAs` → the NPI registry

`https://npiregistry.cms.hhs.gov/provider-view/1316718968` — verified live.

`identifier` states the NPI; `sameAs` points at the government record holding it. That is the difference between a claim on a website and a claim a retrieval system can resolve against an authoritative source, and it is the strongest entity-disambiguation signal available for a single practitioner.

### Sitemap `lastModified` must never come from `new Date()`

It did until 2026-08-16, which stamped every URL with the build time and told Google all 39 pages changed on every deploy — including deploys that touched one CSS class. **A date that always moves is a signal search engines learn to discount**, so the field ends up worth nothing exactly when it matters.

Dates now come from content: `SITE.contentReviewedOn` for reviewed pages, each article's own publication date (or the review date, whichever is later), and a hand-maintained `CONTENT_UPDATED` constant for static pages. `npm run verify` fails the build if `new Date()` reappears in `app/sitemap.ts`.

### Rich Results Test will not show you `Person` — that is not a defect

RRT only reports **rich-result-eligible** types: Breadcrumbs, FAQ, Local businesses, Organization, and so on. `Person`, `ProfilePage` and `MedicalWebPage` are none of those, so they will never appear in its output no matter how correct they are.

A verification pass on 2026-08-14 read "No Person entity detected on any page" and treated it as a bug. It wasn't — `Person` was live on all 39 pages with name, `FNP-C`, jobTitle, all four credentials and `worksFor` → `#practice`. **Check the rendered HTML, or `npm run verify`, before believing that tool about a non-rich type.**

What *did* come out of it: `/about` now emits `ProfilePage` with `mainEntity` → `#kim`, so Kim is the declared subject of her own page rather than a free-floating node, and `Person` carries an `image`.

**Article `author` is the practice, not Kim — deliberately.** These pieces were AI-drafted and Kim has not reviewed them. Naming a credentialed clinician as author of content she hasn't read is misattribution on health content, and it would spend entity trust dishonestly. When she reviews them, three things change together: `author` → `#kim` plus `reviewedBy`, `reviewedOn` passed to `<AuthorByline />`, and the AI-drafting disclosure updated. Never one without the others. `dateModified` is omitted rather than defaulted to the publish date — a fabricated freshness signal is worse than none.

**Geo pages emit `Service`, not a second `MedicalBusiness`.** Repeating the business entity per city — each one with a different `areaServed` — would present five entities where there is one, which is exactly the pattern that gets a service-area business flagged. `localServiceSchema()` scopes a single service to a `City` and links `provider` back to the one `#practice` `@id`. Still no `address`: naming a city Kim serves is not a claim of premises there.

The three sitewide entities are emitted once from the root layout rather than per page, so individual pages only add their own breadcrumb and page-type schema.

### MedicalBusiness

Built by `medicalBusinessSchema()`. Carries name, url, description (the entity statement), telephone, email, `medicalSpecialty: "Endocrine"`, `areaServed` (Utah + both focus counties), `availableService`, `employee`/`founder` → `#kim`, and a `ReserveAction` pointing at `/book`.

**No `streetAddress`, ever — but the `address` object stays.** ⚠️ **Corrected 2026-08-14.** This previously read "no `address` property" outright, which was over-broad and cost the entity a signal for no benefit: Rich Results Test flags the omission, and locality/region/country are exactly what a service-area business *should* publish.

The line is the **street**, not the address object:

```
address: { "@type": "PostalAddress",
           addressLocality: "South Jordan",
           addressRegion:   "UT",
           addressCountry:  "US" }
```

The street stays unpublished because Kim works from home — it is a Google Business Profile suspension trigger and a citation that propagates to scraper directories and cannot be retracted. Nothing is lost by withholding it: Google still uses the registered GBP address for proximity. `npm run verify` fails the build if `streetAddress` ever appears.

**`MedicalBusiness` also carries `image`** (Kim's portrait), added the same day — RRT flagged it as a missing optional.

### Person

Built by `personSchema()`. `name: "Kim Yadon"`, `honorificSuffix: "FNP-C"`, `jobTitle`, `worksFor` → `#practice`, `knowsAbout`, `image`, and `hasCredential` entries for all four verified credentials.

The full name plus a specific certification is what makes entity disambiguation work — "Kim" alone was nearly useless for linking the person across sources. **Do not add post-nominals beyond FNP-C**; nothing else is verified.

Remaining upgrade available: a Utah license number and NPI would make the credential independently checkable. See [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

### Schema prohibitions

- **No `Review` or `AggregateRating`.** The four testimonials have no verifiable source or date. Self-serving review markup is a manual-action risk, and the payoff (star snippets) is not worth losing the domain.
- **No `MedicalCondition` claiming treatment efficacy.**
- **Nothing in schema that isn't visible on the page.** Schema describing invisible content is a structured-data violation.

Validate every block in the [Rich Results Test](https://search.google.com/test/rich-results) and [validator.schema.org](https://validator.schema.org/) before shipping.

---

## robots.ts

`app/robots.ts`, typed `MetadataRoute.Robots`. Rules can be an array to address specific agents.

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "PerplexityBot", "ClaudeBot", "Claude-Web",
  "Google-Extended", "CCBot", "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
```

**`Google-Extended` and `Applebot-Extended` are AI-training opt-out tokens, and allowing them is a deliberate choice.** Allowing means this content can be used to ground Gemini and Apple Intelligence answers. For a business whose entire strategy includes being cited by AI, that is the point. Blocking them protects content from training use but removes the site from those answer surfaces. We are opting in.

Note that most of these agents are allowed by default anyway — listing them explicitly is insurance against a future blanket `Disallow` and makes the intent auditable.

---

## sitemap.ts

`app/sitemap.ts`, typed `MetadataRoute.Sitemap`. Generate from the route list plus article slugs so new content can't be forgotten.

```ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    // …symptom pages at 0.8, legal at 0.3
  ];
}
```

`priority` is a weak hint at best — don't over-tune it. Accurate `lastModified` matters more, and only if it's honest.

Submit to Search Console after deploy.

---

## OG images

`app/opengraph-image.tsx` using `ImageResponse` from `next/og`, 1200×630. Deeper files override shallower ones, so a route-specific image beats the root default.

Constraints worth knowing before designing: **flexbox only — `display: grid` is not supported**, and only a subset of CSS works.

Priority: root default, then `/quiz` (the ad landing page, so it's the most-shared URL by a wide margin), then symptom pages.

---

## Core Web Vitals

Audience is mobile-first, so **mobile LCP under 2.5s is a conversion metric**, not a technical nicety.

- `next/image` everywhere with explicit `width`/`height` to prevent layout shift
- `priority` on the LCP image only — currently `kim-hero.jpg` on `/` and `kim-portrait.jpg` on `/about`
- Fonts already use `display: "swap"` via `next/font/google` — correct, leave alone
- Verify on a real device viewport, not a desktop browser resized

**Cleanup:** ✅ done 2026-08-07. Three dead components and ~64 orphaned assets removed; `public/` went from ~71 files to 7.

---

## Pre-deploy checklist

- [x] Unique title, description, canonical on every page
- [x] All JSON-LD parses clean (19 blocks, 0 failures)
- [x] No page hardcodes a business fact — all resolve via `lib/site.ts`
- [ ] Single keyworded H1 per page — audit as Phase 5 content ships
- [ ] `/robots.txt`, `/sitemap.xml`, `/llms.txt` resolve on the **deployed** domain
- [x] Key content present in server-rendered HTML **with JS disabled** — Footer NAP and `/resources` fixed in Phase 3
- [ ] JSON-LD through Rich Results Test *(needs deployed URL)*
- [ ] OG image renders in a real share preview
- [ ] Mobile LCP under 2.5s on a real device
- [ ] Search Console verified, sitemap submitted

**Note:** none of the Phase 1–4 work is deployed yet. The live site still shows the pre-correction pricing and the old credential block.
