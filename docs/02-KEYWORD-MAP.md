# 02 — Keyword Map & URL Architecture

Last updated: 2026-08-10 · Owner: Dallin

---

## Rules

- **One page, one primary keyword.** Two pages targeting the same term compete with each other and neither wins.
- **Title pattern:** the root layout sets `title.template: "%s | BHRT with Kim"`. Each page supplies only the segment. Budget: **44 characters**, because `" | BHRT with Kim"` costs 16 of the 60-character limit.
- **Description:** 140–155 characters. Written to earn the click, never to make a claim. Descriptions are not a ranking factor; they are ad copy.
- **One `<h1>` per page** containing the primary keyword in natural language. The H1 does not have to match the title tag.
- Every page gets a canonical URL. No exceptions.

**Search volumes are deliberately absent.** No keyword tool has been run against this market yet. Inventing volume figures would make this document confidently wrong. Priority below is assigned by *intent quality* and *competitive realism*, which are knowable without a tool. Phase 5 shipped its full set on that basis. Validate volumes before adding a **sixth city or a seventh symptom page**, and revise priority accordingly — see [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

---

## Intent tiers

| Tier | Meaning | Converts | Volume | Build priority |
|---|---|---|---|---|
| **Commercial** | Ready to choose a provider | High | Low | 1 |
| **Local** | Looking for care nearby | High | Low–mid | 2 |
| **Symptom** | Problem-aware, solution-unaware | Low per visit | **High** | 3 (highest total value) |
| **Educational** | Researching the category | Low | Mid | 4 |

Symptom pages are ranked third by *urgency* but represent the largest total opportunity. They feed the email list; email converts them later. Commercial pages are built first only because they're few, fast, and pay back immediately.

---

## Existing pages

| URL | Primary keyword | Tier | Title segment | Status |
|---|---|---|---|---|
| `/` | bioidentical hormone therapy Utah | Commercial | *(default title, not template)* | ✅ |
| `/about` | Utah hormone nurse practitioner | Commercial | `Meet Kim Yadon, FNP-C` | ✅ |
| `/services` | BHRT services and pricing | Commercial | `BHRT Services & Pricing` | ✅ rebuilt, anchors fixed |
| `/book` | book BHRT consultation Utah | Commercial | `Book a Free 15-Minute Consultation` | ✅ new in Phase 1 |
| `/book/[offering]` | per-package booking | Commercial | `Book <offering>` | ✅ new in Phase 1 |
| `/faq` | BHRT questions | Commercial | `BHRT Questions Answered` | ✅ new in Phase 3 |
| `/quiz` | hormone symptom quiz | Symptom | `Free Hormone Symptom Quiz` | ✅ capture added Phase 4 |
| `/contact` | book hormone consultation Utah | Commercial | `Contact & Book a Virtual Visit` | ✅ |
| `/resources` | hormone health articles | Educational | `Hormone Health Resources` | ✅ server-rendered Phase 3 |
| `/resources/[slug]` | per-article | Educational | *(from article title)* | ✅ byline added; `Article` schema pending |
| `/testimonials` | — | — | `Client Experiences` | ✅ moved out of nav to footer |
| `/privacy`, `/disclaimer` | — | — | `Privacy Policy`, `Medical Disclaimer` | ✅ new in Phase 3 |

### Homepage

- **Title:** `Bioidentical Hormone Therapy in Utah | BHRT with Kim` *(52)*
- **H1:** Bioidentical Hormone Replacement Therapy in Utah
- **Description:** *Kim is a Board Certified Nurse Practitioner offering bioidentical hormone replacement therapy through virtual visits across Utah. Transparent pricing.* *(151)*

✅ **Fixed 2026-08-10.** The H1 was the stacked words "BIOIDENTICAL / HORMONE / REPLACEMENT" across coloured spans — visually striking, but missing both "therapy" and "Utah", the two terms the page exists to rank for. A fourth line, "THERAPY IN UTAH", now sits below at a smaller size, so the flyer look survives and the H1 reads **"Bioidentical Hormone Replacement Therapy in Utah"**.

Deliberately **not** solved with a visually-hidden span. Visible text and accessible name are identical by construction, which is the only version of this that is safe — see [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md) on hidden content.

---

## Commercial intent — ✅ all shipped

Low volume, high booking intent, low competition. These pay back fastest.

| URL | Primary keyword | Title segment *(len)* | State |
|---|---|---|---|
| `/bhrt-cost-utah` | how much does BHRT cost | `What BHRT Costs in Utah` *(23)* | ✅ 645 words |
| `/bhrt-vs-hrt` | BHRT vs traditional HRT | `BHRT vs Traditional HRT` *(23)* | ✅ 763 words |
| `/find-a-hormone-provider` | how to choose a hormone doctor | `How to Choose a Hormone Provider` *(32)* | ✅ 778 words |

**`/bhrt-cost-utah` is the single highest-value new page.** Published pricing already exists ([00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md)), most competitors hide theirs, cost is the top objection before booking, and concrete prices are exactly what AI assistants quote. Build this one first.

**`/bhrt-vs-hrt` must be genuinely balanced** — including honest coverage of risks and of what the evidence does and doesn't show. A comparison page that concludes "ours is better" is transparent to readers and worthless to AI retrieval. Cite NAMS, the Endocrine Society, and Mayo Clinic.

---

## Symptom pages — ✅ all ten shipped

Template and structure in [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md). `FAQPage` + `MedicalWebPage` + `BreadcrumbList` schema on each.

All ten live under `/symptoms/[slug]`, with a `/symptoms` hub as their breadcrumb parent. The hub groups them into four sections — ten flat cards reads as a wall of links, which is the clutter the hub exists to prevent.

| URL | Primary keyword | Title segment *(len)* | Hub group |
|---|---|---|---|
| `/symptoms/hot-flashes-night-sweats` | hot flashes and night sweats | `Hot Flashes & Night Sweats` *(26)* | Body & metabolism |
| `/symptoms/sleep-insomnia` | menopause insomnia | `Menopause Insomnia & Sleep` *(26)* | Sleep & energy |
| `/symptoms/menopause-fatigue` | menopause fatigue | `Menopause Fatigue & Low Energy` *(30)* | Sleep & energy |
| `/symptoms/brain-fog-memory` | menopause brain fog | `Menopause Brain Fog & Memory` *(28)* | Mind & mood |
| `/symptoms/hormonal-weight-gain` | hormonal weight gain | `Hormonal Weight Gain` *(20)* | Body & metabolism |
| `/symptoms/low-libido` | low libido menopause | `Low Libido & Hormones` *(21)* | Cycle & intimacy |
| `/symptoms/mood-changes-anxiety` | perimenopause mood swings anxiety | `Mood Changes & Anxiety` *(22)* | Mind & mood |
| `/symptoms/irregular-periods` | irregular periods perimenopause | `Irregular & Changing Periods` *(28)* | Cycle & intimacy |
| `/symptoms/vaginal-dryness` | vaginal dryness menopause | `Vaginal Dryness & Discomfort` *(28)* | Cycle & intimacy |
| `/symptoms/joint-pain` | menopause joint pain | `Joint Pain & Stiffness` *(22)* | Body & metabolism |

**The last four closed a gap the site had created for itself.** The homepage chips offered "Anxiety" and "Joint Pain", the contact form offered both, and `/llms.txt` told AI systems Kim addresses "mood changes, joint pain" — with no page behind any of it. Someone searching "perimenopause anxiety Utah" found nothing.

Depth is consistent: rendered page prose runs 1,126–1,203 words for the original six and 1,193–1,350 for the new four, **+8% on average** — measured with one script across both sets, because "consistent quality" is a claim worth checking rather than asserting.

Adding an eleventh means writing one data file in `lib/content/` and registering it in `lib/content/index.ts` — route, metadata, schema, breadcrumbs, hub placement and sitemap entry all follow. **Give it a `group`**, or it will not appear on the hub.

### Safety content that must never be edited out

These four pages carry inclusions that exist to prevent specific harm, not to hit a word count. A verification script asserts each one is present in the rendered HTML:

| Page | Non-negotiable |
|---|---|
| Mood & anxiety | The **988 Suicide & Crisis Lifeline**; explicit statement that hormone therapy does **not** treat depression or anxiety; instruction not to stop psychiatric medication based on a website |
| Irregular periods | **Bleeding after twelve months without a period always warrants evaluation** — stated before the reassuring explanation, not after it; heavy-bleeding thresholds; pregnancy still possible during perimenopause |
| Vaginal dryness | A physical examination cannot happen virtually; moisturizer vs lubricant distinction; no product Kim prescribes is named |
| Joint pain | Explicit statement that hormone therapy does not treat arthritis; inflammatory red flags; rheumatoid arthritis named |

The bleeding one is the sharpest. "Irregular periods are normal in perimenopause" is true, and it is also the exact sentence that talks someone out of getting postmenopausal bleeding investigated. That is why the red flags lead the page.

Sample description for `/symptoms/hot-flashes-night-sweats`:
> *Why hot flashes and night sweats happen during perimenopause, what hormones have to do with it, and what a virtual consultation with Kim involves.* *(146)*

**Compliance note that applies to all six:** these pages describe symptoms in the third person about a population — "many women in perimenopause experience…" — never in the second person about the reader. Rules in [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md).

---

## Local / geo — ✅ all shipped

**Proximity anchor: South Jordan** (confirmed 2026-08-07). Service focus is Salt Lake County then Utah County, with statewide virtual coverage.

| URL | Primary keyword | Title segment | Map-pack realism | State |
|---|---|---|---|---|
| `/service-areas` | BHRT Utah service areas | `Utah Service Areas` *(18)* | — | ✅ hub |
| `/service-areas/south-jordan` | BHRT South Jordan | `BHRT in South Jordan` *(20)* | **Strong** — home city | ✅ |
| `/service-areas/salt-lake-city` | BHRT Salt Lake City | `BHRT in Salt Lake City` *(22)* | Weak — organic play | ✅ |
| `/service-areas/draper` | BHRT Draper | `BHRT in Draper` *(14)* | Good | ✅ |
| `/service-areas/sandy` | BHRT Sandy Utah | `BHRT in Sandy, Utah` *(19)* | Good | ✅ |
| `/service-areas/lehi` | BHRT Lehi | `BHRT in Lehi` *(12)* | Moderate — Utah County anchor | ✅ |

Adding a city means writing a data file in `lib/content/areas/` and registering it in `lib/content/index.ts` — route, metadata, `Service` schema, breadcrumb, and sitemap entry all follow. **That ease is the trap.** Read the doorway-page section below before adding one.

### Why these five

- **South Jordan** is the anchor and the only city where map-pack ranking is genuinely strong. Build it first.
- **Salt Lake City** carries the most search volume in the state but sits ~15 miles from the anchor, so it will compete in organic blue links rather than the map pack. Worth building for volume; don't expect map results.
- **Draper and Sandy** are close enough for real proximity weight and skew to the demographic that pays cash for hormone care.
- **Lehi** anchors Utah County — high growth, right age and income band. Chosen over Provo/Orem deliberately: those markets skew young because of BYU, which is the wrong demographic for perimenopause content.

Provo and Ogden are candidates for a later round if the first five earn traffic. Do not build them on spec.

### The doorway-page line

City pages are a real ranking mechanism and also the easiest way to get a site classified as spam. The difference is entirely whether each page is genuinely distinct.

**Required on every city page — no exceptions:**
- 400+ words of content unique to that city, not template text with the name swapped
- A reason virtual care specifically serves that area (commute reality, local provider scarcity, drive time to the nearest in-person hormone clinic)
- A city-specific FAQ block with genuinely different questions
- Internal links to relevant symptom pages

**If a city page can be generated by find-and-replace, delete it.** Five real pages beat twenty templated ones, and twenty templated ones can cost the whole domain.

### How the five clear that bar

Each answers a question the other four don't. Local trivia dressing would not have been enough — the differentiator has to be the *substance* of what's asked and answered.

| Page | Its distinct job |
|---|---|
| South Jordan | "She's local to me — is there an office?" Answered no, up front, because the search intent implies a clinic and there isn't one |
| Salt Lake City | The one market with real in-person alternatives, so the page **compares** rather than pitches — including who should be seen in person instead |
| Draper | The time cost of care: what a first year actually asks of a calendar (~5 appointments), for commuters at Point of the Mountain |
| Sandy | Preparation and discretion — what to have ready for a first call, and why virtual is a quieter way to start |
| Lehi | The county-line question, and pharmacy choice versus national telehealth companies that own the pharmacy |

**Overlap is measured, not assumed.** The verification script computes pairwise 8-gram Jaccard similarity across the five rendered pages; worst pair is **14.4%**, well under the 25% threshold that would flag templating. Re-run it before adding a sixth city.

### What every geo page must state

Enforced by script, because the search intent ("BHRT *city*") implies a clinic that does not exist:

- All visits are virtual; **there is no office in that city**
- Licensure is statewide, so the city affects convenience, not eligibility
- LabCorp does the draw — the only in-person step
- The free consultation's **15 minutes**, wherever "free consultation" appears
- Medications and lab fees are not included

Schema is `MedicalWebPage` + `FAQPage` + `BreadcrumbList` + a city-scoped `Service` whose `areaServed` is a `City`. Still **no `address`** — naming a city Kim serves is not a claim of premises there.

---

## Trust & legal — ✅ shipped in Phase 3

| URL | Purpose | Title segment | Indexed |
|---|---|---|---|
| `/faq` | 15–20 Q&A, `FAQPage` schema | `BHRT Questions Answered` *(23)* | Yes |
| `/privacy` | Required for Meta ad review and email consent | `Privacy Policy` *(14)* | Yes |
| `/disclaimer` | Medical disclaimer, no doctor-patient relationship | `Medical Disclaimer` *(18)* | Yes |

`/faq` is not a legal page — it's one of the strongest AI-visibility assets available, because self-contained 40–80 word answers are the exact format retrieval systems extract. Treat it as a content page with schema, not a footer afterthought.

---

## Internal linking

Link structure signals topical authority. Current site has almost none of this.

```
/  →  /symptoms/*  →  /services#bhrt  →  /book
                  ↘  /faq
                  ↘  /quiz  →  (capture)  →  /services#bhrt
/service-areas  →  /service-areas/[city]  →  /symptoms/*  ↘  /bhrt-cost-utah
                                          ↘  /find-a-hormone-provider
/resources/[slug]  →  /symptoms/*  →  /about (byline)
footer "Learn" column  →  every hub and guide page
```

Rules:
- **Every homepage symptom chip links to the page that answers it.** Until Phase 7 all six pointed at `/services`, so clicking "Brain Fog" landed on a services list — the largest relevance leak on the site and the reason six well-written pages went unread. A script asserts no chip resolves to a 404.
- Six chips, not ten. The row stays one clean line on desktop; the rest live on the hub, which the section links to.
- Every symptom page links to `/services#bhrt`, `/faq`, and at least two sibling symptom pages.
- Every geo page links to at least two symptom or guide pages, and no two geo pages link to the same set — the link graph is part of what makes them distinct.
- Every educational page carries an author byline linking to `/about`.
- **Descriptive anchor text.** "hormonal causes of insomnia", never "click here" or "learn more".
- ✅ **Fixed in Phase 3:** `/services#bhrt` and the other eight service anchors now exist. Quiz results and homepage cards previously linked into that void. A script checks every fragment target against the rendered HTML — 13 currently resolve, 0 broken.

---

## Deliberately not targeted

- **"hormone replacement therapy near me"** — dominated by in-person clinics with physical addresses. GBP is the right tool for this query, not a page.
- **Any non-Utah geography.** Licensure is state-bound.
- **"testosterone therapy for men"** — different audience, dilutes the specialist position.
- **Supplement and product terms** — no products sold, and the category attracts regulatory attention.
- **Condition names Kim doesn't treat.** Ranking for something we can't serve is a bounce, not a win.
