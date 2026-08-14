# 09 — Design System

Last updated: 2026-08-10 · Owner: Dallin

Documents what exists in [app/globals.css](../app/globals.css), plus the conversion patterns this project adds. **Tailwind CSS v4 with CSS-first config — there is no `tailwind.config.js`.** All tokens live in the `@theme inline` block.

---

## Palette

| Token | Hex | Role |
|---|---|---|
| `forest` | `#2D5A3D` | Primary. Hero bands, CTA sections, headers |
| `moss` | `#4A7C59` | Buttons, interactive |
| `sage` | `#7A9E7E` | Focus rings, accents |
| `mist` | `#E8EDE9` | Muted surfaces |
| `stone` | `#F5F2ED` | Page background |
| `bark` | `#3B3228` | Headings, primary text |
| `clay` | `#8B7D6B` | Body text — **see accessibility issue below** |
| `lavender` | `#E6DFF1` | Accent surfaces |
| `peach` | `#FADADD` | Accent surfaces |
| `bloom` | `#D4A0A0` | Accent |
| `sunlight` | `#E8C547` | Warning, highlight |
| `error` | `#C45B5B` | Errors |

The palette is genuinely good — warm, botanical, calm, and appropriate for the audience. It reads as a wellness practice without tipping into clinical or crunchy. Keep it.

---

## Accessibility issue: body text contrast

**Fixed 2026-08-07.** Recorded because the reasoning matters for future colour choices.

`text-clay` (`#8B7D6B`) on `stone` (`#F5F2ED`) measured **3.59:1**. WCAG AA requires 4.5:1 for normal-size text — it failed, and it was the default body colour across most of the site.

This was never a checkbox concern. The audience is women 40–65 — an age range where presbyopia and reduced contrast sensitivity are near-universal — reading on phones, frequently at night. The opacity variants (`text-clay/70`, `/60`) used for disclaimers and fine print failed considerably worse, which meant the legally significant text was the least readable on the page.

**Resolution:** `clay` is retained for decorative use; body copy moved to a dedicated token.

```css
--color-clay: #8B7D6B;       /* decorative, borders, large text only */
--color-clay-text: #7A6C5C;  /* body copy — 4.56:1 on stone, passes AA */
```

All `text-clay` and `text-clay/N` usages were migrated to `text-clay-text`.

**Measured ratios** (script in the Phase 1 verification):

| Pair | Ratio | AA normal |
|---|---|---|
| `clay-text` on `stone` | 4.56:1 | ✅ |
| `clay-text` on white | 5.09:1 | ✅ |
| `bark` on `stone` | 11.24:1 | ✅ |
| white on `forest` | 7.95:1 | ✅ |
| white on `moss` | 4.86:1 | ✅ |

**Rule going forward: never use `text-clay` for text meant to be read.** If a new colour is introduced, measure it against its actual background before shipping.

---

## Typography

- **Headings:** Cormorant Garamond (`--font-heading`), weights 400/500/600. Applied to all `h1`–`h6` via `@layer base`.
- **Body:** Source Sans 3 (`--font-sans`), weights 300/400/600.
- Both loaded via `next/font/google` with `display: "swap"` — correct, leave alone.

**Bug:** `--font-mono` points to `--font-geist-mono`, which no longer exists in this project. Remove or repoint.

**Body text minimum 16px.** Anything smaller is unreadable for this audience on a phone.

✅ **Audited 2026-08-11.** The rule was written and then not applied for a full phase. What the audit found and fixed:

- **`/services` pricing content at 14px** — every "what's included" line on the highest-stakes page on the site. Now base size.
- **"Medications and lab fees not included" at 12px**, on both pricing cards. That is a material term of the offer, and the smallest text on the page. It is the exact correction Kim asked for after the site implied labs were included, so it has to be legible. Now base size.
- **All four medical disclaimers at 12px** — footer, quiz results, content pages, articles. Now `text-sm`.
- **Quiz answer options at 14px** — the primary thing being read on that screen. Now base.
- **Footer disclaimer at `text-stone/50`**, which computes to roughly **3.95:1 against bark and fails AA.** The sitewide medical disclaimer was the least readable text on every page. Now `text-stone/75`; the legal nav went `/40` → `/70`.

**The rule this leaves behind:** `text-sm` is for captions, badges, and UI meta (progress counters, button labels). Anything a visitor reads to make a decision — prices, terms, disclaimers, quiz options — is content and gets base size.

---

## Radius & motion

`--radius: 0.75rem` with derived multipliers `--radius-sm` (0.6×) through `--radius-4xl` (2.6×). The generous rounding is part of the warm, non-clinical feel — keep it.

**Motion:** `.animate-on-scroll` with `.is-visible`, plus `.stagger-1` through `.stagger-4` (0/150/300/450ms). Driven by `useScrollAnimation()` via the `ScrollAnimator` component dropped into each page.

`prefers-reduced-motion` is properly handled — animations disabled, not just shortened. Good; preserve it in anything new.

**Caution on new pages:** scroll-triggered fade-ins start at `opacity: 0`. Content that begins invisible and depends on JS to appear is a risk for both crawlers and users with JS issues. It's in the HTML source so AI crawlers can read it — but never put critical content behind an animation that could fail to trigger.

---

## Known cruft

| Item | Status |
|---|---|
| `--font-mono` | ✅ Removed 2026-08-07 — pointed at a nonexistent variable. |
| `@custom-variant dark` | ✅ Removed 2026-08-11 — no dark palette existed and nothing toggled `.dark`. |
| `.section-over-video` | ✅ Removed 2026-08-11 — rule and all five usages. |
| `iconMap` `bone` entry | ✅ Removed 2026-08-11 — orphaned when the homepage chips were reworked. |
| `components.json` `@/hooks` alias | Directory doesn't exist; hooks live in `lib/`. Harmless, cosmetic. |

**`.section-over-video` was not a blind delete.** It applied `position: relative; z-index: 1`, which creates a stacking context, so removing it could have changed layering against the fixed navbar and promo banner. Checked first: `MissionPillars` and `CTASection` carry their own `relative`, and the absolutely-positioned children in `TestimonialSection` and `CTASection` are contained by their own `relative` parents — so nothing depended on the class. That check is the reason this was safe; do the same before removing the next one.

---

## Components

**UI primitives** (`components/ui/`) — shadcn "base-nova" style on `@base-ui/react`: `badge`, `button`, `card`, `dialog`, `input`, `label`, `textarea`, plus `Icon.tsx` (string→lucide mapping so constants can carry icon names) and `BotanicalDecor.tsx` (`LeafBranch`, `SeedMotif`, `FernCurl`, all `aria-hidden`).

**Deleted 2026-08-07** — all were dead code, imported nowhere: `HeroSection.tsx`, `MissionSection.tsx`, `VideoScrollExperience.tsx` (~550 lines), `lib/useFrameScrub.ts`, `lib/useMediaQuery.ts`, plus ~64 orphaned assets in `public/` (both MP4s, both poster frames, 60 scroll-scrub JPGs, five create-next-app SVGs). `public/` now holds 7 files.

**Client/server boundary — matters for AI visibility, not just performance.** ✅ Fixed in Phase 3. [components/layout/Footer.tsx](../components/layout/Footer.tsx) was `"use client"` solely to support a newsletter input, which put the NAP block — phone, service area, core entity facts — outside server HTML on every page. It is now a server component with [NewsletterForm](../components/layout/NewsletterForm.tsx) as a client child; `/resources` got the same treatment.

**The rule this leaves behind:** one interactive input never justifies marking its container `"use client"`. Push the interactivity into a small child. See [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md).

---

## New components

### Header — the backdrop is always on. Do not make it conditional again.

**Fixed 2026-08-14, after it shipped broken.** The header used to float transparently over the hero and pick its text colour at render time:

```ts
const isHome = pathname === "/";
const textClass = backdropVisible || isHome ? "text-bark" : "text-white";
```

In production that rendered **white links on the cream homepage** — invisible on a cold load. `usePathname()` has no value in Vercel's server render, so `isHome` was false in the prerendered HTML, while resolving correctly in a local build. That gap is why it survived to launch. The tell was the active-link underline missing from "Home" on the live page but present locally.

The fix is not "make `isHome` work". It is that **any design where contrast depends on the route, the scroll position, or hydration has an unsafe state, and eventually it ships.** The backdrop is now permanent and links are always `text-bark` — 11.24:1 on stone, AA at every size, identical with JavaScript disabled. Scroll only deepens the shadow.

`usePathname()` is still used for the active-link underline. That is decorative; being briefly wrong before hydration harms nobody, unlike contrast.

`npm run verify` now asserts every page renders `text-bark` nav links pre-hydration, and that the backdrop never starts at `opacity-0`.

---

### Climbing side vines — added 2026-08-11

[components/ui/SideVines.tsx](../components/ui/SideVines.tsx). A vine running the full page height in the gutters either side of the 1280px content column, from a soft fade at the top down to the bottom edge. Desktop only (`xl` and up), decorative, `aria-hidden`, `pointer-events-none`.

Three things about it are load-bearing and will look like arbitrary details to whoever reads it next:

1. **The colour must be `sage`.** The vine crosses cream, forest, peach and brown as it descends. Sage `#7A9E7E` is mid-value — darker than the cream, lighter than the forest and the brown — so a single colour reads on every band at ~20% opacity. Moss or forest vanishes against the CTA section; a pale green vanishes against the hero. Blend modes were considered and rejected as fragile.
2. **The stem is a sine over exactly two periods per tile.** That makes x and dx/dy identical at the top and bottom of the tile, which is the only reason the repeat is invisible. The geometry was generated, not drawn by hand, for exactly this reason. Change the tile height or the period and a notch appears every 380px.
3. **Nothing sits within ~45px of the tile boundary.** `<pattern>` clips its contents; a leaf crossing the seam would be halved and repeat, which is the artefact that gives tiling away.

**A root flourish at the footer was built and then removed** (2026-08-11, Dallin's call — it looked wrong). Worth recording why, so it isn't attempted again the same way: the pattern starts at the top of the document, so the stem's horizontal position where it met the footer shifted with every page's height. The roots had to be a wide spreading mass to catch the stem wherever it landed, and that width is exactly what made them read as a separate drawing rather than the same plant. The vine simply running off the bottom edge needs no such guesswork and looks cleaner.

It also **paints over section backgrounds rather than behind them** — every section here is opaque, so there is no layer behind the page to occupy. It stays in the gutter, and `pointer-events-none` guarantees it can never intercept a click where it overlaps. `npm run verify` asserts the aria-hidden, pointer-events and breakpoint gate.

**Its `z-20` is load-bearing.** Several sections are `position: relative` with `z-index: auto` — `MissionPillars`, `CTASection`, the `Footer`, and the `/about` and `/testimonials` heroes. Positioned elements sharing an effective z-index paint in DOM order, and all of those come after `SideVines`, so at `z-0` they covered it. The forest CTA band and the footer hid it outright, which meant the roots never rendered at all.

Anything above 0 beats `z-index: auto`; 20 was chosen to stay below every fixed layer, so the vine slides under the chrome rather than across it:

| Layer | z |
|---|---|
| Side vines | **20** |
| Navbar backdrop | 25 |
| Mobile drawer | 40 |
| Navbar | 50 |
| Promo banner | 60 |
| Skip link | 100 |

**Do not raise it above 25.** Putting the vine in front of everything would drag it across the logo, the nav and the promo bar, where it reads as a rendering fault rather than decoration — and over body text wherever the gutter narrows, which matters for an audience with reduced contrast sensitivity.

Width is `clamp(0px, calc((100% - 1280px) / 2), 150px)` with `overflow: hidden`, so the vine clips progressively as the gutter narrows instead of popping at a breakpoint. Percentages are relative to `<body>`, not `100vw`, so the scrollbar can't cause horizontal overflow.

**The artwork anchors to the INNER edge, and that is deliberate.** It was anchored to the outer edge first, which between roughly 1280px and 1580px sliced the vine down its inner side — a hard vertical cut through the middle of leaves, sitting in open space where the eye lands. Anchoring to the edge facing the content trims from the *outside* instead, so the vine stays whole where it is looked at and runs off the edge of the screen. Bleeding past a viewport reads as natural; being sliced mid-page reads as a bug. Note the anchors are inverted against their parent's — the left column's inner edge is its right side.

---

**What was actually built** — this table previously listed planned names that were never used. Reconciled 2026-08-11.

| Component | Purpose | State |
|---|---|---|
| `JsonLd` | Renders schema as a native escaped `<script>` | ✅ |
| `ContentPageLayout` | The template from [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md) — serves all 10 symptom pages, 3 guides and 5 service-area pages | ✅ *(planned as `SymptomPageLayout`)* |
| FAQ block | Inline `<details>`/`<summary>` inside `ContentPageLayout` and `/faq` | ✅ *(planned as `FaqAccordion`)* |
| `AuthorByline` | Kim + credential + link to `/about` on every educational page | ✅ |
| `HowCareWorks` | LabCorp, pharmacy choice, follow-up cadence | ✅ |
| `EmailCaptureStep` | Quiz capture screen — [06-EMAIL.md](06-EMAIL.md) | ✅ |
| `BookingEmbed` | Healthie offering iframe | ✅ |
| `PromoBanner` | Self-expiring promo bar | ✅ |
| Medical disclaimer | Inline in `ContentPageLayout`, the footer and article pages — never became a shared component, and hasn't needed to | — |
| `ReviewsBlock` | Real Google reviews, once they exist | ⬜ not built |

**The FAQ pattern is the one to keep right.** A collapsed accordion that only injects answer text into the DOM on click makes every FAQ answer invisible to crawlers — destroying the single best AI-citation asset on the site. `<details>`/`<summary>` renders all 126 answers into the HTML and collapses them with CSS. `npm run verify` asserts every schema answer is also present in the markup, so this cannot regress silently.

---

## Conversion patterns

**One primary CTA per screen.** The homepage hero currently offers "Book Your Virtual Visit" alongside an inline "KIM TODAY!" link into the same destination — two CTAs competing for one action.

**Booking friction is the biggest conversion problem on the site.** Every CTA sitewide routes to `/contact#booking`, which means every booking requires a page load, a scroll, and an iframe load. Consider surfacing the Healthie embed on high-intent pages directly, or at minimum making the anchor land accurately.

**Mobile-first, always.** The nav is seven items plus a CTA — crowded on a phone. Tap targets minimum 44×44px. Phone and email in the footer are currently plain `<p>` text; make them `tel:` and `mailto:` links, which matters more on mobile than anywhere else.

**Trust placement.** Credentials, pricing, and reviews should appear near booking CTAs, not siloed on `/about`. The moment of hesitation is at the CTA — that's where the reassurance needs to be.

---

## Accessibility baseline

- [x] Body text meets 4.5:1 — fixed Phase 1 (`clay-text`), footer opacity variants fixed in the 2026-08-11 audit
- [x] Body text ≥16px — audited 2026-08-11, see Typography
- [x] Every image has descriptive `alt` — both portraits now read `Kim Yadon, FNP-C`; the byline portrait is decorative and correctly `alt=""`
- [x] One `<h1>` per page; heading levels don't skip — **asserted by `npm run verify` across all 39 pages**
- [x] `prefers-reduced-motion` respected — animations disabled, not shortened
- [x] Skip link present ([Navbar.tsx](../components/layout/Navbar.tsx))
- [ ] Focus visible on all interactive elements (`--ring` is `sage`) — **not yet verified by keyboard**
- [ ] Tap targets ≥44×44px — **not measured**; the nav is now 8 items plus a CTA
- [ ] Forms have real `<label>`s, and errors are announced — labels exist; error announcement unverified
- [ ] Keyboard-navigable throughout — **not tested**
- [ ] `axe` scan — needs a browser, so it belongs in [11-LAUNCH.md](11-LAUNCH.md)

The unticked items all need a real browser and a keyboard, which is why they are listed as launch checks rather than quietly marked done.

For this audience, accessibility and conversion are the same work.
