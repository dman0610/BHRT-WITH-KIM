# 10 — Roadmap

Last updated: 2026-08-10 · Owner: Dallin

**This is the living status doc.** Update checkboxes as work lands. Every other doc in `docs/` describes *how*; this one tracks *where we are*.

---

## Status

| Phase | Scope | Status |
|---|---|---|
| **0** | Documentation system | ✅ Complete |
| **1** | Kim's corrections + offer architecture + compliance | ✅ Complete |
| **2** | SEO foundations (metadata, schema, sitemap, llms.txt) | ✅ Complete |
| **3** | Information architecture | ✅ Complete |
| **4** | Email acquisition — capture built | 🟡 Code done, blocked on account |
| **5** | Content engine | ✅ Complete — 9 content pages + 5 geo pages + 2 hubs |
| **6** | Tracking, local, launch | 🟡 Code done, blocked on deployment + accounts |
| **7** | Symptom coverage + internal linking | ✅ Complete — 10 symptom pages, chips fixed |
| **8** | Full build audit | ✅ Complete — `npm run verify` green |

**Nothing has been deployed.** The production site still advertises labs as included in both pricing tiers — the live inaccuracy this project started with. The ordered fix-it procedure is [11-LAUNCH.md](11-LAUNCH.md).

**Phases 4 and 5 were swapped** so the build order matches the rationale below and in [01-STRATEGY.md](01-STRATEGY.md): email before content. Capture is ~60 lines and converts traffic the day it exists; content is the multi-week compounding play. With ads planned soon, capture needed to exist first.

### Why this order

1. **Accuracy and compliance before traffic.** ✅ Done. The site advertised labs as included when they weren't, and quiz copy called symptoms "very treatable" and named "adrenal fatigue" as a condition. Driving traffic to that was worse than driving none.
2. **Foundations before content.** ✅ Done in Phase 2.
3. **Architecture before content.** ✅ Done in Phase 3. Quiz results used to dead-end on broken `/services#bhrt` anchors — the leak is fixed before filling the bucket.
4. **Email before content.** Highest ROI per hour, and it compounds — every day without capture is permanently lost leads.
5. **Content last, and continuously.** Long game, never finishes.

---

## Phase 0 — Documentation

- [x] Archive original spec → `docs/archive/2026-08-original-spec.md`
- [x] `00-BUSINESS-FACTS.md`
- [x] `01-STRATEGY.md`
- [x] `02-KEYWORD-MAP.md`
- [x] `03-SEO-TECHNICAL.md`
- [x] `04-AI-VISIBILITY.md`
- [x] `05-CONTENT-STANDARDS.md`
- [x] `06-EMAIL.md`
- [x] `07-TRACKING.md`
- [x] `08-LOCAL-GBP.md`
- [x] `09-DESIGN-SYSTEM.md`
- [x] `10-ROADMAP.md`
- [x] `OPEN-QUESTIONS.md`
- [x] `README.md`, `AGENTS.md`, `CLAUDE.md` reworked

---

## Phase 1 — Kim's corrections & offer architecture ✅

Driven by Kim's emails of 2026-08-06. Completed 2026-08-07.

### 1a. Pricing corrections (live inaccuracy)
- [x] Option 1 lab-cost line → "Consultation with Kim Yadon, FNP-C — WorldLink trained provider"
- [x] Option 2 "labs included" claim removed
- [x] Both footers → "Medications and lab fees not included."
- [x] All 12-Week Vitality Reset Program mentions removed, incl. hero subtitle
- [x] Standing lab disclosure added; **no dollar figures published**

### 1b. Offer architecture
- [x] `lib/site.ts` with all four Healthie offerings
- [x] `/book` — free consultation, primary CTA target
- [x] `/book/[offering]` — three paid offerings, statically generated
- [x] `BookingEmbed` component; old `appt_type_ids` embed retired
- [x] `primary_color` normalized to brand green
- [x] Every sitewide CTA repointed to `/book`
- [x] `/contact#booking` anchor retained for old inbound links
- [x] Contradicting "Kim will text you" copy replaced

### 1c. Promo system
- [x] `lib/promo.ts` single source; `BHRTwithKim25` through 2026-09-15
- [x] `<PromoBanner />` with copy-to-clipboard, session-scoped dismissal
- [x] `revalidate = 3600` on root layout so expiry fires at request time
- [x] Expiry boundaries tested (5/5 cases)

### 1d. Identity
- [x] Kim Yadon, FNP-C in `lib/site.ts`, `/about`, entity statement
- [x] Credentials array moved out of JSX into `lib/site.ts`
- [x] Phone/email now `tel:`/`mailto:` links

### 1e. Compliance remediation
- [x] `lib/constants.ts` — "very treatable" ×2, "adrenal fatigue", "work beautifully", 4 severity-message claims, "evidence-based 8-hour"
- [x] `HeroFlyer.tsx` — "Proven Care" → "Personalized Care"
- [x] `CTASection` — second-person symptom copy → population framing
- [x] Quiz disclaimer moved to appear **before** the assessment *(deferred to, and delivered in, Phase 3)*
- [x] Sitewide footer disclaimer *(deferred to, and delivered in, Phase 3, with `/disclaimer`)*

### 1f. Cleanup
- [x] Deleted `HeroSection`, `MissionSection`, `VideoScrollExperience`, `useFrameScrub`, `useMediaQuery`
- [x] Deleted ~64 orphaned assets + 5 scaffold SVGs (`public/` now 7 files)
- [x] Body text contrast `#8B7D6B` → `#7A6C5C` — verified 4.56:1, passes AA
- [x] Lint clean (0 errors, 0 warnings), build clean

---

## Phase 2 — SEO foundations ✅

Completed 2026-08-07.

- [x] `metadataBase` + `title.template` in root layout
- [x] Per-page title, description, canonical on all 9 static routes + 2 dynamic
- [x] OpenGraph + Twitter cards sitewide
- [x] `app/opengraph-image.tsx` via `ImageResponse`
- [x] `lib/schema.ts` builders + `components/seo/JsonLd.tsx`
- [x] `MedicalBusiness` + `WebSite` + `Person` in root layout, `@id`-linked
- [x] `BreadcrumbList` on `/about` and `/services`
- [x] `Service` + `Offer` on `/services` ($200, $1,500)
- [x] `app/robots.ts` — 9 AI crawlers explicitly allowed, `/api/` disallowed
- [x] `app/sitemap.ts` — 16 URLs, generated from routes + articles
- [x] `/llms.txt` as a **route handler** reading `lib/site.ts`, so it cannot drift
- [x] `--font-mono` dangling reference removed

**Verified:** 19 JSON-LD blocks parse clean, 0 failures. No `Review`,
`AggregateRating`, or `streetAddress` anywhere (the three standing
prohibitions). All titles ≤52 chars with no duplicated site name. All
descriptions 121–149 chars. `og:image` on every page.

- [ ] Schema submitted to Google's Rich Results Test *(needs a deployed URL)*

---

## Phase 3 — Information architecture ✅

Completed 2026-08-10.

### 3a. Consult lengths + process facts
- [x] `SITE.process` in `lib/site.ts` — LabCorp, pharmacy choice, 3-month cadence
- [x] `HowCareWorks` component, server-rendered, on `/book` and `/book/[offering]`
- [x] `/book` H1 states **15 minutes**; expectation note distinguishes it from the paid visit
- [x] `/services` Option 1 states **about 60 minutes** — previously unstated, and it's the price justification
- [x] `/llms.txt` gained a `## How care works` section

### 3b. `/services` rebuilt — dead quiz links fixed
- [x] All 9 descriptions rendered, each with a working `#id` anchor
- [x] `#pricing` anchor; pricing cards unchanged
- [x] Verified: all 9 anchors + all 9 descriptions present in server HTML

### 3c. Legal pages
- [x] `/privacy` — describes what the site does today, updated when pixel/MailerLite land
- [x] `/disclaimer` — educational only, no provider-patient relationship, emergency guidance
- [x] Footer: sitewide medical disclaimer + Privacy / Disclaimer / Contact links

### 3d. `/faq`
- [x] **18 questions** across 4 categories, `FAQPage` schema
- [x] Every answer 40–80 words, verified by script
- [x] `<details>` markup — all 18 answers in server HTML, **0 schema-only answers**
- [x] Insurance omitted (unanswered); no timeline promises

### 3e. Server-rendered what crawlers need
- [x] `Footer` → server component; `NewsletterForm` client child. NAP now crawlable on every page.
- [x] `/resources` → server page; `ArticleGrid` client child. Stub layout deleted, metadata moved into the page.

### 3f. Compliance + attribution
- [x] Quiz disclaimer now shows **before** the assessment
- [x] `AuthorByline` on article pages — no `reviewedOn` date until Kim reviews
- [x] FAQ + nav: FAQ took the Testimonials nav slot; Testimonials moved to footer

**Verified:** lint clean, build clean (28 routes). 25 JSON-LD blocks parse, 0 failures. No `Review`/`AggregateRating`/`streetAddress`. All 8 previously-flagged compliance strings absent from every rendered page. 19 sitemap URLs.

### Deferred
- Article AI-disclosure decision — Kim's call, asked. Byline is in place but claims no review.
- Full nav redesign — only the FAQ/Testimonials swap was made.

---

## Phase 4 — Email acquisition 🟡

Code complete 2026-08-10. **Cannot go live until the MailerLite account exists**, but the build is done and tested against its failure path.

### Built
- [x] `lib/email/provider.ts` — `EmailProvider` interface + `Lead` type + no-op
- [x] `lib/email/mailerlite.ts` — implementation; returns the no-op when unconfigured
- [x] `lib/email/fallback.ts` — emails the lead to Kim via Web3Forms when the provider fails
- [x] `app/api/quiz-capture/route.ts` — consent gate, one retry, inbox fallback, always 200
- [x] `EmailCaptureStep` — unchecked consent, skip link, results never blocked
- [x] UTM capture on quiz **entry** (not at submit — params are often gone by then)
- [x] `/privacy` updated to describe exactly what the capture sends
- [x] `.env.example` documenting all three variables

### Verified
- [x] Consent omitted → 400 `consent_required`
- [x] Consent `false` → 400 `consent_required`
- [x] Invalid email → 400 `invalid_email`
- [x] Valid lead with no provider key → **200**, failure logged, fallback attempted
- [x] No health data in any URL or query string — only UTM params are read

### Blocked on Dallin
- [ ] MailerLite account; health/wellness review passed
- [ ] `Quiz Leads` group + 7 custom fields (`name`, `severity`, `top_services`, `stage`, `utm_*`, `consent_at`)
- [ ] `MAILERLITE_API_KEY` + `MAILERLITE_GROUP_ID` in Vercel
- [ ] Confirm `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set in Vercel — **the lead fallback depends on it**
- [ ] Sending address on `bhrtwithkim.com`; SPF + DKIM + DMARC
- [ ] PO box for the CAN-SPAM footer
- [ ] Lead magnet — the capture screen promises "Kim's hormone health guide"
- [ ] 5 emails drafted in MailerLite
- [ ] End-to-end: subscriber created with correct fields; email 1 lands in Gmail **Primary**; unsubscribe works

---

## Phase 5 — Content ✅

Completed 2026-08-10. Template plus the first three pages shipped first, and the build **paused there deliberately for review** — writing fifteen pages before anyone reads one is how you get fifteen pages needing rework. The remaining eleven followed.

### Shipped
- [x] `lib/content/types.ts` — content as data, so FAQ schema and rendered FAQ come from one source
- [x] `ContentPageLayout` — serves symptom and commercial pages both
- [x] `medicalWebPageSchema()` added to `lib/schema.ts`
- [x] `/symptoms` hub + `/symptoms/[slug]` dynamic route (new pages = one data file + registry entry)
- [x] `/bhrt-cost-utah` — 645 prose words
- [x] `/symptoms/hot-flashes-night-sweats` — 712 prose words
- [x] `/symptoms/sleep-insomnia` — 676 prose words

**Verified:** lint + build clean (33 routes). Prose 645–712 words, inside the 600–900 spec, with FAQ blocks on top. One H1 per page; titles 39–46 chars; descriptions 142–152. 33 JSON-LD blocks parse, 0 failures. All 18 new FAQ answers present in HTML — **0 schema-only**. 52 internal links and anchors resolve. Compliance sweep clean across 14 banned patterns × 25 pages. No second-person diagnosis in any new page copy.

### Also shipped
- [x] `/symptoms/menopause-fatigue` — 672 words
- [x] `/symptoms/brain-fog-memory` — 647 words
- [x] `/symptoms/hormonal-weight-gain` — 702 words
- [x] `/symptoms/low-libido` — 696 words
- [x] `/bhrt-vs-hrt` — 763 words
- [x] `/find-a-hormone-provider` — 778 words

**All nine content pages verified together:** prose 645–778 words (spec 600–900), one H1 each, titles ≤50 chars, descriptions 140–155, canonicals correct. 45 JSON-LD blocks parse, 0 failures. **72 FAQ answers — 0 schema-only, 0 outside 40–80 words.** 373 internal links resolve sitewide. Compliance sweep clean across 15 patterns × 31 pages. 29 sitemap URLs.

### Three pages that needed particular care
- **`/symptoms/hormonal-weight-gain`** — most competitor pages imply hormone therapy causes weight loss. This one states plainly that it is not a weight-loss treatment, and that midlife gain is driven largely by age-related muscle loss while menopause is associated more with fat *redistribution*. Honest and a genuine differentiator.
- **`/symptoms/low-libido`** — separates painful sex (genitourinary syndrome of menopause, which has specific treatments) from desire. States that no testosterone formulation is FDA-approved specifically for women in the US, attributed to society guidance, and does **not** imply Kim prescribes it.
- **`/bhrt-vs-hrt`** — leads with the distinction most marketing blurs: "bioidentical" is molecular structure, not a regulatory category, and several bioidentical hormones *are* FDA-approved. Notes societies advise approved products where suitable. This doesn't undercut the practice — Kim's differentiator is patient choice of pharmacy, not compounding itself.

### Geo ✅

- [x] `GeoPage` type + `localServiceSchema()` — `areaServed` is a **City**, still no address
- [x] `/service-areas` hub — states plainly that the whole state is covered and a missing city page means nothing
- [x] `/service-areas/south-jordan` ← home city, strongest map-pack shot
- [x] `/service-areas/salt-lake-city` ← highest volume, organic play
- [x] `/service-areas/draper`
- [x] `/service-areas/sandy`
- [x] `/service-areas/lehi` ← Utah County anchor
- [x] Footer "Learn" column links the hub; `/llms.txt` lists every content and geo page

**Each city page answers a question the other four don't** — that is the only thing separating a service-area page from a doorway page:

| Page | Its distinct job |
|---|---|
| South Jordan | "She's local to me — is there an office?" Answer: no, and said up front |
| Salt Lake City | The one market with real in-person alternatives, so the page **compares** rather than pitches, and says who should be seen in person |
| Draper | The time cost — what a year of hormone care actually asks of a calendar |
| Sandy | Preparation and discretion — what to have ready for a first call |
| Lehi | The county-line question, and pharmacy choice vs. national telehealth |

**Verified:** lint + build clean (45 routes). 57 JSON-LD blocks parse sitewide, 0 failures. Every city page ≥400 unique words. **Worst pairwise 8-gram overlap between any two city pages: 14.4%** — measured, not asserted, because "genuinely distinct" is the whole doorway-page test. 30 geo FAQ answers, 0 schema-only, all 40–80 words. 1,402 internal links and 13 fragment anchors resolve. No `Review`, `AggregateRating`, or `streetAddress` anywhere. 35 sitemap URLs.

Every city page is checked by script for the disclosures that keep it honest: visits are virtual, licensure is statewide, LabCorp does the draw, the free consult's **15 minutes** appears wherever "free consultation" does, and labs/medications are not included.

### Deliberately not built
- Provo and Ogden — candidates only if the first five earn traffic. Do not build on spec.
- Any city page that could be produced by find-and-replace. Five real pages beat twenty templated ones, and twenty templated ones can cost the domain.

---

## Phase 6 — Tracking, local, launch 🟡

Code complete 2026-08-10. **Everything remaining needs a deployed URL or an account** — see [11-LAUNCH.md](11-LAUNCH.md) for the ordered procedure.

### Built

- [x] Vercel Analytics + Speed Insights, mounted sitewide, cookieless
- [x] `lib/analytics.ts` — the only path to any analytics destination
- [x] All five events wired: `LandingPageView`, `QuizStart`, `QuizComplete`, `EmailCapture`, `BookingIntent`
- [x] `BookingIntent` as one delegated listener, so no CTA had to become a client component
- [x] Meta pixel built and **dormant** until `NEXT_PUBLIC_META_PIXEL_ID` is set — absent from the page, not merely inactive
- [x] Pixel suppressed on `/symptoms/*` — its automatic PageView would send a URL that names a condition
- [x] "How did you hear about Kim?" on the contact form, optional, inbox-only
- [x] `/privacy` describes analytics and the pixel, written to stay accurate on both sides of the switch
- [x] `.env.example` documents `NEXT_PUBLIC_META_PIXEL_ID` and why it stays blank
- [x] `shadcn` CLI moved to `devDependencies` — it was pulling a vulnerable transitive tree into production installs and nothing imports it at runtime

### The no-health-data rule is now enforced by code

Three gates in `sanitize()`: closed event-name set → per-event key allowlist → health-vocabulary tripwire that drops the **whole event**, not just the offending key.

**44/44 tests pass, and they caught a real bug.** The first `BookingIntent` labelled its source bucket `"symptom-page"` — which trips the tripwire on the word "symptom" and would have silently dropped every intent click from a symptom page. The bucket is now `"topic-page"`, and a test asserts every bucket survives.

### Audit follow-ups, closed 2026-08-11

- [x] `Article` + `BreadcrumbList` on `/resources/[slug]` — the last page type with no schema. `author` → `#practice`, with citations carried through from the sources block. 62 JSON-LD blocks sitewide now, up from 57.
- [x] Portrait `alt` text on `/` and `/about` → `Kim Yadon, FNP-C`, sourced from `lib/site.ts` rather than hardcoded. Was "Kim — BHRT with Kim practitioner/founder", which described neither the person nor the entity usefully.

**Checked against the original spec and deliberately not built:** `WebSite` + `SearchAction`. There is no site search, so declaring one would be false schema, and Google retired the sitelinks searchbox result in late 2024. `Bingbot` is not in the explicit AI-crawler list but is allowed by the `*` rule.

---

## Phase 7 — Symptom coverage + internal linking ✅

Completed 2026-08-11. Prompted by Dallin asking whether the symptom set was actually comprehensive. It wasn't.

### The gap the site had created for itself
The homepage chips offered **Anxiety** and **Joint Pain**, the contact form offered both, `/llms.txt` told AI systems Kim addresses "mood changes, joint pain", and the quiz has an entire `mood` question — with **no page behind any of it**.

### Four new pages
- [x] `/symptoms/mood-changes-anxiety` — highest-risk page on the site
- [x] `/symptoms/irregular-periods` — safety-critical; red flags lead, reassurance follows
- [x] `/symptoms/vaginal-dryness` — GSM, deliberately frank; under-served because people avoid asking
- [x] `/symptoms/joint-pain` — says plainly that much midlife joint pain is not hormonal

Safety inclusions per page are listed in [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md) and asserted by script. **Do not edit them out for length or tone.**

### The linking bug this exposed
- [x] **All six homepage chips pointed at `/services`.** Clicking "Brain Fog" landed on a services list, not the brain fog page. Six carefully written pages were effectively unreachable from the homepage. Chips now link to their pages, `SYMPTOMS` carries an `href`, and a script asserts none resolves to a 404.
- [x] Chip set reworked to the six highest-volume topics — **Hot Flashes was missing entirely** despite being the most-searched symptom and having a page since Phase 5
- [x] "See all 10 symptom topics →" link added beneath the row
- [x] **"Symptoms" added to the nav** as an 8th item. It was reachable only from the footer and one line on the service-areas hub.
- [x] `/symptoms` hub grouped into four sections via a `group` field — ten flat cards is the wall-of-links problem the hub exists to prevent
- [x] Footer deliberately unchanged; `learnLinks` stays hub-level

### Also fixed
- [x] `Icon` returned `null` silently for unmapped names, so the new `flame` icon shipped a chip with no icon through a clean lint and build. Added `flame`, plus a development-mode warning so the next one is noticed.

**Verified:** lint + build clean, **49 routes**. 70 JSON-LD blocks parse, 0 failures. 24 new FAQ answers, all 40–80 words, 0 schema-only. All 12 safety inclusions present. 10 symptom pages × 9 forbidden-phrase patterns clean. 1,651 internal links and 16 fragment anchors resolve. 39 sitemap URLs. Depth consistent at **+8%** vs the original six, measured with one script across both sets.

---

---

## Phase 8 — Full build audit ✅

Completed 2026-08-11. Read-only audit against the **built output**, not against intentions.

**Three of the defects were already written down in this project's own docs and had simply never been actioned** — the `stress` copy defects and duplicated testimonial in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md), the 14px body copy and dead `.section-over-video` in [09-DESIGN-SYSTEM.md](09-DESIGN-SYSTEM.md). An audit that only re-checked remembered work would have missed all of them.

### Performance
- [x] **Article images 36 MB → 764 KB (99.1% smaller).** Five PNGs at 2816×1536 (~7 MB each) rendered at 33vw in a card grid → 1600px WebP, 30–86 KB each. Next optimizes on delivery, so this was repo weight, deploy size, Vercel transformation cost and first-request latency.

### Correctness
- [x] **Branded 404 + error boundary.** `notFound()` is reachable from four dynamic routes; visitors previously got Next's bare default with no nav and no way back. The error page shows the phone number — if the site is broken, that is the one path that doesn't depend on the code that failed.
- [x] `/llms.txt` conditions list was stale — missing irregular periods and GSM since Phase 7. Added, plus an explicit scope note that hormone therapy does not treat depression, anxiety, arthritis or obesity.
- [x] **Article title tags ran to 86 characters** and were truncated mid-phrase. Added `titleSegment` per article (≤44). Also gave each an explicit `metaDescription` — intros run 134–180 chars, so no truncation rule could put all five in the 140–155 window.
- [x] Eight other pages had descriptions outside 140–155. Booking descriptions now live per-offering in `lib/site.ts` rather than being composed from a shared suffix.

### Design and accessibility
- [x] **Heading skips on `/` and `/resources`** (`h1 → h3`). `MissionPillars` and `BlogCard` promoted to `h2`. All 39 pages now clean.
- [x] **Body copy at 14px, and disclaimers at 12px.** Details in [09-DESIGN-SYSTEM.md](09-DESIGN-SYSTEM.md). The worst case: "Medications and lab fees not included" — a material term Kim specifically asked for — was the smallest text on the pricing page.
- [x] **Footer disclaimer at `text-stone/50` ≈ 3.95:1, failing AA.** The sitewide medical disclaimer was the least readable text on every page. Now `/75`.
- [x] Removed `.section-over-video` (dead since Phase 1, still on five sections) and `@custom-variant dark`. Checked stacking contexts first rather than deleting blind.

### Hardening
- [x] **Security headers** in `next.config.ts`, which was empty. `Referrer-Policy: strict-origin-when-cross-origin` matters specifically here — page paths name health conditions. **No CSP yet**, deliberately: written blind it would break the Healthie iframe. Post-launch task.
- [x] **`npm run verify`** — [scripts/verify.mjs](../scripts/verify.mjs), 10 sections, no dependencies. The docs claimed "a script asserts this" while the scripts lived in a temp folder; now the claim is true and regressions fail the build.
- [x] `Bingbot` added to the explicit crawler list — ChatGPT search leans on Bing's index.

**Verified:** lint, `tsc --noEmit`, build all clean at **49 routes**. `npm run verify` all green: 69 JSON-LD blocks · 39/39 metadata complete · 39/39 no heading skips · 126 FAQ answers 40–80 words, 0 schema-only · 13 safety inclusions · 39 pages × 17 compliance patterns · 1,615 links + 16 anchors · 39 sitemap URLs · geo overlap 14.4%.

**Deliberately not done:** Next.js upgrade (staying pinned at 16.2.2 — advisories assessed in [11-LAUNCH.md](11-LAUNCH.md)); `SearchAction` (no site search exists); CSP (needs the deployed page).

### Audit gap found afterwards — closed 2026-08-11

- [x] **Deleted `app/api/contact/` and `app/api/newsletter/`.** Neither had a caller — `ContactForm` and `NewsletterForm` both post directly to Web3Forms from the browser. They shipped as live serverless endpoints that only logged to the console, carried stale `TODO: integrate Resend` notes for a provider never adopted, and one held the commented-out `kim@bhrtwithkim.com` example that [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) flags as a proposal rather than a real address. Route count 49 → 47. `app/api/quiz-capture/` stays; it is genuinely used.

**The audit checked pages, schema, links and copy — it never checked whether API routes were reachable.** Worth naming as a gap in the audit rather than a new defect. If `scripts/verify.mjs` grows again, an "every route handler has a caller" check is the obvious addition.

---

### Blocked on a deployed URL

- [ ] Search Console verified; sitemap submitted (35 URLs)
- [ ] Baseline snapshot recorded — [07-TRACKING.md](07-TRACKING.md)
- [ ] AI test prompts baselined — [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md)
- [ ] Rich Results Test on `/`, `/faq`, a symptom page, a city page
- [ ] Mobile LCP under 2.5s on a real device
- [ ] JS-disabled audit of every key page

### Blocked on accounts

- [ ] `NEXT_PUBLIC_META_PIXEL_ID` set; **verify no health data in any payload, and that the pixel does not fire on `/symptoms/*`**
- [ ] "How did you hear about Kim?" added inside Healthie's intake — dashboard config, not code
- [ ] GBP: address hidden, service area set, categories, hours, description
- [ ] Bing Places + Apple Business Connect
- [ ] Duplicate listings merged
- [ ] Review request process live — target 10 in 90 days

---

## Blocked

**Nothing blocks Phase 6 itself** — but almost everything below is now on its critical path, and the largest item is that *nothing has been deployed at all*.

| Blocker | Blocks | Owner | Status |
|---|---|---|---|
| **Deployment** | Everything. Production still advertises labs as included. | Dallin | **Not started** |
| Consult logistics (duration, labs, prescriptions, follow-up) | 5+ FAQ answers, every symptom page | Kim | ✅ Answered 2026-08-10 |
| Insurance answer | Top-3 pre-booking FAQ | Kim | Asked |
| Article review decision | `/resources` E-E-A-T | Kim | Asked |
| MailerLite account | Phase 4 go-live | Dallin | — |
| PO box / virtual address | First email send (CAN-SPAM) | Dallin | — |
| Lead magnet | Email 1 | Dallin | — |
| GBP access | All of local (Phase 6) | Dallin | — |
| Sending address on the domain | Email sequence going live | Dallin | DNS access confirmed |
| Web3Forms destination | Form delivery matching published address | Dallin | In progress |

DNS is **no longer a blocker** — nameservers are delegated to Vercel and Dallin controls them. The records simply haven't been added yet.

Full detail, plus a copy/paste list of what to ask Kim, in [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

---

## Definition of done

- [ ] Unique title, description, keyworded H1, canonical on every page
- [ ] All JSON-LD validates clean
- [ ] `robots.txt` + `sitemap.xml` live, AI crawlers allowed, sitemap submitted
- [ ] Key content in server-rendered HTML with JS disabled
- [ ] `/llms.txt` live and accurate
- [ ] FAQ live, 15+ self-contained answers, schema validated
- [ ] `/about` live with author attribution and `Person` schema
- [ ] Symptom template built, at least one page shipped
- [ ] Quiz captures email with consent; results still shown instantly
- [ ] Test email lands in Gmail Primary; provider swappable via adapter
- [ ] SPF/DKIM/DMARC verified
- [ ] `/privacy` + `/disclaimer` live and footer-linked
- [ ] Pixel verified firing, **carrying zero health data**
- [ ] "How did you hear about Kim?" live
- [ ] Mobile LCP under 2.5s
- [ ] Body text passes WCAG AA
- [ ] GBP address hidden, service area configured
- [ ] Zero unverifiable claims, zero hidden content
- [ ] No business fact hardcoded outside `lib/site.ts`
