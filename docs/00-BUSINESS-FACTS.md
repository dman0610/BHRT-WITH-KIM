# 00 — Business Facts

**This file is the single source of truth for every fact published about this business.**

Last verified: 2026-08-10 · Owner: Dallin
Source of record: audit of live site + Kim Yadon emails of 2026-08-06

---

## How to use this file

Every factual claim on the website, in JSON-LD schema, in `/llms.txt`, in email copy, in the Google Business Profile, and on any third-party directory **must trace back to a row in this file**. Nothing gets published that isn't here.

Three rules, in priority order:

1. **Never invent a fact.** If something is needed and isn't in this file, it goes in [Unknowns](#unknowns) and gets asked. Not approximated, not inferred from context, not "reasonable defaults." A single fabricated detail about a licensed healthcare provider is both a legal exposure and — because AI systems cross-reference sources — a permanent entity-trust problem.
2. **Write around gaps rather than filling them.** "Kim provides bioidentical hormone replacement therapy through virtual consultations across Utah" is publishable today. A guessed city, license number, or year-founded is not.
3. **Change facts here first, then in code.** The code mirror is `lib/site.ts`. If they disagree, this file wins and the code is the bug.

**Accuracy is the marketing strategy, not a tax on it.** Google's quality systems and AI retrieval both reward verifiable specificity and both punish unverifiable puffery. Concrete checkable facts are what make a source quotable. Adjectives are not.

---

## Entity

| Field | Value | Status |
|---|---|---|
| Practice name | BHRT with Kim | Verified — used sitewide |
| Domain | `bhrtwithkim.com` | Verified |
| Provider name | **Kim Yadon** | Verified 2026-08-06 |
| Post-nominal | **FNP-C** | Verified 2026-08-06 |
| Legal business entity | **NAET with Kim LLC** | Verified 2026-08-12 — **not for publication.** See below |
| Specialty | Bioidentical hormone replacement therapy (BHRT) for women in perimenopause and postmenopause | Verified |
| Visit format | Virtual consultations | Verified |
| Service area | Utah | Verified |
| Founded | — | **UNKNOWN** |

### Canonical entity statement

The one-sentence identity used verbatim in `/llms.txt`, `MedicalBusiness` schema `description`, and the homepage opening. Keep these in sync — inconsistency across sources suppresses AI confidence.

> Kim Yadon, FNP-C is a board-certified family nurse practitioner providing bioidentical hormone replacement therapy (BHRT) through virtual consultations to women throughout Utah, with a focus on perimenopause and postmenopause.

---

## Credentials

**Status: verified by Dallin 2026-08-07; post-nominal confirmed by Kim 2026-08-06.** Cleared for publication, schema, and `/llms.txt`.

**Full professional name, use verbatim: `Kim Yadon, FNP-C`**

FNP-C is Family Nurse Practitioner–Certified (AANP board certification). Kim signs her own correspondence this way and it appears on her print flyer, so it is the authorized rendering.

Publish exactly as written. These four strings are the complete, authorized set:

1. `Board Certified Nurse Practitioner`
2. `Trained in BHRT through Worldlink Medical`
3. `Trained in Functional Medicine`
4. `Certified Diabetes Care and Education Specialist (CDCES)`

These live in `SITE.provider.credentials` in [lib/site.ts](../lib/site.ts) (moved out of JSX in Phase 1), so `/about`, `Person` schema, `/llms.txt`, and page bylines all read the same array. Edit them there and nowhere else.

- `Person.name`: **Kim Yadon**
- `Person.honorificSuffix`: **FNP-C**
- `jobTitle` for `Person` schema: **Board Certified Family Nurse Practitioner**
- **Do not** add "APRN", "DNP", or any post-nominal beyond FNP-C — none others verified.
- **Do not** claim board certification in a specialty beyond family practice.
- **Do not** state years of experience anywhere. No figure has been verified.

`FNP-C` is a meaningful upgrade over the generic "Board Certified Nurse Practitioner" the site published previously: it is specific, it is checkable against the AANP certification registry, and it enables NPI and health-directory citations that feed both local ranking and AI entity confidence.

### What backs the specialty claim

Kim's own perimenopause experience is published on `/about` in her voice and is a legitimate first-hand experience signal for E-E-A-T. It is a personal account, not a clinical outcome claim, and should stay framed that way.

---

## Contact / NAP

NAP (Name, Address, Phone) must match the Google Business Profile **character for character**. Any drift between site, GBP, and directories costs local ranking and AI citation confidence.

| Field | Value | Status |
|---|---|---|
| Name | BHRT with Kim | Verified |
| Phone | `(801) 573-0606` | Verified — [lib/constants.ts:629](../lib/constants.ts#L629) |
| Public email | `bhrtwithkim@gmail.com` | Verified 2026-08-07 — business inbox, **receiving only**. See below. |
| Street address | — | **Not for publication.** See below. |
| City | **South Jordan** | Verified 2026-08-07 — **GBP proximity anchor only, not for publication as an address** |
| State | Utah | Verified |
| Service area line | `Serving patients in Utah` | Verified — [lib/constants.ts:630](../lib/constants.ts#L630) |
| Business hours | **Monday–Friday, 9am–5pm** | Verified 2026-08-12 — **reachability, not appointment slots.** See below |
| Insurance | **Cash pay only — not accepted** | Verified 2026-08-12 |
| NPI | **1316718968** | Verified 2026-08-12 — public via NPPES |
| Utah licence | **APRN #308855-4405** | Verified 2026-08-12 — public via Utah DOPL |

### Service area

Licensed and serving **all of Utah**. Concentration, in order of priority:

1. **Salt Lake County** — home county, strongest proximity
2. **Utah County**
3. Rest of Utah (virtual, no proximity advantage)

South Jordan is the GBP proximity anchor. Naming the city in page copy ("based in South Jordan, serving all of Utah") is fine and useful; publishing the street address is not.

### Address policy — deliberate, not an omission

Kim works from home and the Google Business Profile is currently attached to that home address, publicly visible.

**Decision: hide the address on GBP; never publish it on the site.**

Rationale, because this will look like a missed opportunity to someone reviewing later:

- Hiding the address **does not reduce ranking.** Google still uses the registered address for proximity calculation; it only stops displaying it. There is no traffic upside to leaving it visible.
- A public home address on a service-area business is one of Google's most-reported suspension triggers, and any competitor can file the report. Losing the listing costs more local traffic than the entire on-site build produces.
- A street address published on the website becomes a citation that propagates to scraper directories and is very difficult to retract.

`LocalBusiness`/`MedicalBusiness` schema therefore uses `areaServed` and omits `streetAddress`. This is valid schema, not a degraded version of it.

Full procedure in [08-LOCAL-GBP.md](08-LOCAL-GBP.md).

### Email policy

There are **two separate jobs** here and one address cannot do both.

| Job | Address | Status |
|---|---|---|
| **Receiving** — published contact address, contact-form destination | `bhrtwithkim@gmail.com` | ✅ Live |
| **Sending** — the marketing sequence's From address | something `@bhrtwithkim.com` | ❌ Blocked on DNS |

**Receiving is solved.** Kim created `bhrtwithkim@gmail.com` on 2026-08-06. It replaced her personal `Kyadon300@gmail.com` sitewide on 2026-08-07 — the personal address should not appear anywhere public again.

**Sending is not, and a Gmail address cannot fix it.** Marketing email sent through a provider (MailerLite, Kit, anyone) must come From a domain you control:

- A `gmail.com` From address relayed by a third-party sender **fails DMARC alignment** — the sending server isn't authorized in Gmail's SPF record and can't sign with Gmail's DKIM key.
- Since Gmail and Yahoo tightened bulk-sender requirements in February 2024, authenticated sending domains are effectively mandatory for anyone mailing a list.
- Email providers enforce this themselves and will not let a free webmail address be a campaign sender.

**What's actually needed is smaller than a mailbox:** DNS access to `bhrtwithkim.com` to add SPF, DKIM, and DMARC records, plus a From address on that domain (`hello@`, `kim@`, whatever) with replies forwarded to `bhrtwithkim@gmail.com`. No separate inbox to check.

**Note:** `kim@bhrtwithkim.com` appears in earlier planning notes. **It is a proposal, not an existing address.** Do not publish it or any other `@bhrtwithkim.com` address until one is actually created.

✅ The last trace of it in code is gone. It lived in a commented-out example inside `app/api/contact/route.ts`, which was deleted on 2026-08-11 — that route had no caller, since the contact form posts directly to Web3Forms from the browser. Verified absent from every built page.

Tracked in [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

---

## Booking

Platform: **Healthie**. Provider/dietitian ID: **`4099018`**. Brand color param: **`4A9625`**.

### Offerings (packages) — supplied by Kim 2026-08-06

These use Healthie's **offering** mechanism (`require_offering=true` + `offering_id`), which is a different system from the `appt_type_ids` the site used previously. The old appointment-type embed is retired.

| Offering ID | What it is |
|---|---|
| `258963` | **Free phone consultation with lab order** |
| `258961` | Initial consultation |
| `258962` | Follow-up visit |
| `258966` | Comprehensive package |

Embed pattern:
```
https://secure.gethealthie.com/appointments/embed_appt
  ?dietitian_id=4099018
  &require_offering=true
  &offering_id=<ID>
  &hide_package_images=true
  &hide_embed_title=false
  &primary_color=4A9625
```

Kim's original snippets used `primary_color=000000`; normalize to brand green `4A9625`.

### The free consultation is the front door

**Offering `258963` is a free phone consultation at which Kim can also provide a lab order.** Her stated funnel: free consult → patient asks questions → lab order → paid follow-up once labs are back.

This is the primary sitewide CTA. It removes the price objection at first contact and is a stronger offer than any discount.

**Wording precision is mandatory.** The consultation is free and the lab *order* is free. The **labs themselves are billed separately by the lab and are not included.** The print flyer's "FREE PHONE CONSULTATION + LAB ORDER" can be misread as free labs — on-site copy must not repeat that ambiguity. Approved phrasing:

> Free phone consultation. Kim can provide a lab order at no charge — lab fees are billed separately and vary.

---

## Services

Nine services, defined at [lib/constants.ts:45-127](../lib/constants.ts#L45-L127). Descriptions are verified copy and may be edited for compliance but not for substance without Kim's input.

| id | Title | Featured |
|---|---|---|
| `bhrt` | Bioidentical Hormone Therapy | ✅ |
| `nutrition` | Nutrition & Hydration | ✅ |
| `stress` | Stress Reduction | ✅ |
| `sleep` | Sleep Optimization | ✅ |
| `exercise` | Exercise & Movement | |
| `detox` | Detox Support | |
| `natural-remedies` | Natural Remedies | |
| `thyroid-adrenal` | Thyroid & Adrenal Health | |
| `testing` | Comprehensive Testing | |

**Fixed in Phase 3.** All nine descriptions now render on `/services`, each with a working `#id` anchor, so the `/services#bhrt`-style links from the homepage cards and from quiz results resolve. Before that they pointed at fragments that did not exist and every quiz completion dead-ended.

**Copy defects — ✅ both fixed 2026-08-11** (wording only, no substance change):
- `stress` — used a hyphen where an em dash belonged and had no terminal period. Also softened "disrupts every hormone in your body" to "affects hormone balance", which was an overstatement.
- `sleep` — "Evidence-based 8-hour sleep protocols" implied a citable basis for a specific figure. Now "Sleep protocols that address common causes of insomnia and restless nights."

---

## Pricing

**Corrected by Kim 2026-08-06.** The previous version of this page advertised labs as *included* in both options. They are not. That was a live misstatement of what a buyer receives and was the highest-priority fix in Phase 1.

**Option 1 — Per Visit**
- $200 per visit, BHRT-focused
- Consultation with Kim Yadon, FNP-C — WorldLink trained provider
- Health & mindset coaching available as an add-on, $75/session
- **Medications and lab fees not included**

**Option 2 — Comprehensive Package**
- **$950** · 5 visits, one every 3 months, BHRT-focused
  - ⚠️ **Was $1,500 until 2026-08-16.** Kim caught the error herself: *"5 visits at $200 is $1000. The comprehensive package should be a better deal, but it's $1500."* The package was priced above buying the visits individually.
  - À-la-carte value is $1,300 — 5 visits ($1,000) plus 4 coaching sessions ($300). At $950 that is a 27% discount, and it survives the 25% promo stack at $712.
  - **`npm run verify` fails the build if `$1,500` reappears anywhere.** The figure lived in eight files; a stale one is a published price the practice does not honour.
- Everything in Option 1, plus:
- 2 personal coaching sessions (nutrition & exercise)
- 2 mindset coaching sessions
- **Medications and lab fees not included**

### Lab costs

**Not included in any package. Do not publish dollar figures.** Kim: costs vary greatly by panel/product. The prior `$250 initial / $150 follow-up` figures are withdrawn and must not appear anywhere on the site, in schema, or in `/llms.txt`.

Approved standing line beneath both pricing options:

> Lab costs are not included and vary depending on which panels are ordered.

This is a deliberate trade. Published pricing normally earns AI citations and pre-empts objections — but a wrong number is worse than no number, and Kim says the figures aren't stable.

### 12-Week Vitality Reset Program — removed

**Kim: not ready. Remove every mention**, including the `/services` hero subtitle and both pricing tiers. Do not reintroduce without her go-ahead.

**Unknown:** whether insurance is accepted. High-value FAQ answer, currently unanswerable.

---

## Promotions

### Public — `BHRTwithKim25`

| Field | Value |
|---|---|
| Code | `BHRTwithKim25` |
| Discount | 25% off any package |
| Valid through | **2026-09-15** |
| Placement | Sitewide banner, `/services`, ads |

Single source of truth is `lib/promo.ts`; `<PromoBanner />` reads it and **self-disables after the expiry date**. Pages are statically generated, so the root layout needs `revalidate` for the expiry to actually fire — a build-time date check would never expire. A stated deadline that silently passes is a false-advertising exposure.

### Private — never published on the site

| Code | Discount | Qty | Channel |
|---|---|---|---|
| `Welcome50` | 50% off initial consult | 20 | Email sequence |
| `ComprehensivePackage500` | $500 off | 10 | Post-consult follow-up |
| `Followup50` | 50% off follow-up | 10 | Existing patients, direct |

Public codes get scraped by coupon aggregators, permanently reset the reference price, and burn limited quantities on people who would have paid full price. In email, redemption is attributable.

### ⚠️ Never condition a discount on a review

The public discount is intended partly to generate Google reviews. **Offering anything of value in exchange for a review violates Google's policies and FTC endorsement guidance and is a GBP suspension trigger.**

Correct sequence: discount brings the client in → they receive care → Kim asks for a review, unconditionally, in a separate conversation. Never both in the same message. See [08-LOCAL-GBP.md](08-LOCAL-GBP.md).

**Open:** confirm `BHRTwithKim25` applies to paid packages only — the free consult is $0, so the terms line must not imply otherwise.

---

## Approach — publishable process facts

From `/about`. These are the "what actually happens" specifics that AI systems quote and that convert better than adjectives.

1. **Listen & Test** — full history, then comprehensive testing: hormones, thyroid, adrenals, and screening for underlying conditions.
2. **Lifestyle First** — before any prescription, optimize sleep, nutrition, movement, stress management, and detox support.
3. **Targeted BHRT** — when indicated, bioidentical hormones, monitored and adjusted.

---

## Process facts — verified 2026-08-10

**Supplied by Kim via Dallin.** These are the concrete, checkable specifics that AI systems quote and that convert better than any adjective on the site. Publish them plainly and often.

| Question | Answer |
|---|---|
| **Free phone consultation length** | **About 15 minutes** |
| **Paid initial consultation length** | **About 60 minutes** |
| **How does lab work happen?** | Through **LabCorp**. The patient receives an email, schedules an appointment with LabCorp, and goes to a LabCorp Patient Service Center for the draw. |
| **What do labs cost?** | Varies by panel. Billed by the lab, not by the practice. No figures published. |
| **How are prescriptions filled?** | At **any compounding pharmacy the patient chooses.** |
| **How often are follow-ups?** | **Every 3 months**, or sooner if needed. |

### Why each of these matters

- **The two durations do different jobs and the copy must not blur them.** The free 15-minute call is a short intro — a chance to ask questions, see whether it's a fit, and get a lab order started. The $200 visit is a full hour. **Someone who books the free call expecting an hour of medical guidance will have a bad first experience**, so on-site copy has to set the 15-minute expectation plainly rather than leaving it to be discovered.
- **A full hour for $200 is the stronger value statement** and it is currently unstated anywhere on the site. Say it on `/services` and `/book/initial-consultation`.
- **LabCorp answers the implicit objection** for a virtual practice — "how do I do labs if she isn't local?" LabCorp operates patient service centers nationwide, so "you go to a LabCorp near you" is concrete and reassuring.
- **Patient choice of compounding pharmacy is a real differentiator.** Many telehealth hormone companies route every prescription through a pharmacy they own. Say this plainly.
- **A 3-month cadence sets an honest expectation** and matches the Comprehensive Package (5 visits, one every 3 months) — the two facts corroborate each other, which is exactly the internal consistency AI retrieval rewards.

### Wording rules

- "About 15 minutes" and "about 60 minutes" — **never** a guaranteed duration.
- **Never let "free consultation" appear without its length nearby.** Unqualified, it implies a full visit.
- The free call is where a lab order can be *started*, not where a treatment plan is delivered.
- Never imply Kim performs the blood draw; LabCorp does.
- Never state or estimate a lab price.
- "Every 3 months, or sooner if needed" — keep the second clause; dropping it overstates rigidity.

---

## Testimonials

Four, at [lib/constants.ts:132-165](../lib/constants.ts#L132-L165): Natalie K., Allison G., Alyssa C., Beccah G.

- All have empty `context` fields, which render as blank lines.
- Source and date unknown. **Do not** mark up as `Review`/`AggregateRating` schema — Google requires reviews be genuinely collected and attributable, and self-serving review schema is a manual-action risk. `npm run verify` fails the build if that schema ever appears.
- ✅ **Duplication fixed 2026-08-11.** Beccah G. previously appeared on both `/` and `/testimonials`. `FEATURED_TESTIMONIAL` is now derived from `TESTIMONIALS` via a `featured` flag rather than being a hand-copied second string, and `/testimonials` renders the unfeatured entries — so each quote appears exactly once sitewide. With only four testimonials that leaves three on the listing page, which is the honest trade until real reviews exist.

Real Google reviews replace these as the trust signal. See [08-LOCAL-GBP.md](08-LOCAL-GBP.md).

---

## Audience

Women roughly 40–65, symptom-aware but mostly **not** BHRT-aware. They search their symptoms, not the treatment name. Primarily on mobile.

This drives two decisions: symptom pages carry the search volume, and mobile LCP is a conversion metric rather than a technical nicety.

---

## Kim's answers — 2026-08-12

Six long-standing unknowns closed in one reply. Detail on the three with consequences:

### Hours are reachability, not availability

Kim's words: *"These hours are not when I have appointments, but people can reach me Monday - Friday 9 am to 5 pm."*

**Site copy must never present these as bookable slots.** Someone who books expecting a 4:30pm Friday visit because the site implied it has a bad first experience before paying anything — the same expectation-mismatch problem as the free consultation's 15 minutes. `/contact` states the caveat in prose; schema has no way to express it, so the prose is the safeguard.

### NPI and licence — published on purpose

- **NPI 1316718968** — public via the NPPES registry
- **Utah APRN licence #308855-4405** — public via Utah DOPL

Both are public records, so publishing exposes nothing private, and a checkable identifier is worth more to entity trust than any adjective. They also unblock health-directory listings, which have been waiting on this.

⚠️ **APRN is the licence CATEGORY, not a post-nominal.** `Kim Yadon, FNP-C` remains the only authorized rendering. `npm run verify` fails the build if `Kim Yadon, APRN` ever appears.

### The LLC is "NAET with Kim" — and that is fine

Kim asked whether this causes problems. **No, provided the LLC name stays off the public site.**

Google wants the name customers actually encounter, which is "BHRT with Kim". A GBP listing does not need to match the LLC. Publishing "NAET with Kim" would fracture the entity across directories and undo the NAP consistency work — two names for one practice is exactly what suppresses local ranking and AI citation confidence.

So: **do not add `legalName` to schema, and do not surface it in any copy.** It becomes relevant in two places only — the CAN-SPAM footer when email launches, and the Lehi city licence she plans to switch to "BHRT with Kim".

### Content review

She read the resource articles on 2026-08-12 and 2026-08-15 and sent corrections that removed or rewrote several passages. **16 pages now carry `Reviewed by Kim Yadon, FNP-C`** — 5 articles, 10 symptom pages, the `/symptoms` hub — with `reviewedBy` → `#kim` in schema.

`author` stays the practice. She reviewed; she did not write. Review and authorship are different claims and the markup keeps them different. The date lives in `SITE.contentReviewedOn` — **only move it when she has actually re-read.**

---

## Scope of practice — narrowed 2026-08-12

Kim removed three things she does not currently offer:

| Removed | Her reason |
|---|---|
| Adrenal assessment | "I need to learn more about adrenal health" |
| Mold and Lyme testing | "I don't do that yet" |
| Broad screening for underlying conditions | Removed from the prescription answer |

**This reached much further than the two places she named.** The phrase "hormones, thyroid, and adrenal function, plus screening for underlying conditions" had been propagated into ~15 pages when the content engine was built — 37 occurrences of "adrenal", 16 of "underlying conditions". Fixing only the Services card and one FAQ would have left the site contradicting itself, with 50+ stale claims about a licensed provider's scope.

**41 replacements across 18 files.** Everything now reads *"comprehensive testing across hormones and thyroid function."* The service id changed `thyroid-adrenal` → `thyroid`, which also required updating the quiz's `serviceWeights` keys — miss those and quiz results silently stop resolving.

`npm run verify` now fails on any `adrenal`, `underlying conditions`, `mold` or `Lyme` claim in page copy. The `adrenal` entry in `lib/analytics.ts` is exempt — that is the health-vocabulary tripwire, not a claim.

---

## Unknowns

Blocking items live in [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md). Most of this list closed on 2026-08-12.

**Answered:**
- ✅ Utah licence number and NPI — published, see above
- ✅ Credentials are complete — Kim confirmed all four, no additions
- ✅ Legal business entity — NAET with Kim LLC, deliberately unpublished
- ✅ Business hours — Mon–Fri 9am–5pm, reachability only
- ✅ Insurance — cash pay only
- ✅ Article review — done, 16 pages carry her name

**Still open:**
- Years in practice — never asked; low value, and absence costs nothing
- Google Business Profile ownership and access — **now the largest remaining blocker.** Hours, insurance and the service-area configuration are all ready to go the moment access exists
- Testimonial provenance — the four quotes stay unmarked as `Review` schema regardless

Until answered, each is simply absent from the site. Absence is correct; approximation is not.
