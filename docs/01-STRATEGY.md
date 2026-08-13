# 01 — Strategy

Last updated: 2026-08-10 · Owner: Dallin

---

## The thesis

A specialist practice serving a single state, in a category where buyers search symptoms rather than solutions, wins on **being the most specific, most verifiable answer** — not on being the loudest.

Three channels, one asset. The site is the converting surface; everything else routes into it.

| Channel | What it does | Primary asset |
|---|---|---|
| **Google organic + local** | Captures women searching symptoms and local hormone care | Symptom pages + Google Business Profile |
| **AI answer visibility** | Gets named when someone asks an assistant about hormone therapy in Utah | Verifiable entity facts, server-rendered, extraction-shaped |
| **Email** | Converts the 95%+ who aren't ready to book on first visit | Quiz capture → nurture sequence |

Paid ads point at the quiz page. The site does the converting.

---

## Positioning

**BHRT with Kim is a specialist virtual hormone practice for Utah women in perimenopause and postmenopause — not a general wellness clinic that happens to offer hormones.**

Specialization is the entire competitive advantage here, and it compounds across all three channels simultaneously: Google's quality systems reward topical depth, AI retrieval rewards unambiguous entity association, and buyers in a health category trust the specialist over the generalist. Every content decision should deepen the hormone focus rather than broaden the service menu.

The practical test for any new page: *does this make Kim more obviously the hormone person, or less?*

### What differentiates, in order of usefulness

1. **Virtual-first across all of Utah** — reaches rural and southern Utah women with no local option. This is a genuine access advantage, not a convenience feature.
2. **Test, don't guess** — comprehensive panels including thyroid, adrenals, and screening for underlying conditions.
3. **Lifestyle before prescription** — foundations first, hormones when indicated. Differentiates from prescribe-first telehealth.
4. **Lived experience** — Kim's own perimenopause account. First-hand experience is an explicit E-E-A-T signal, and it's real.
5. **Transparent pricing** — published rates. Rare in this category and disproportionately effective for both trust and AI citation.

### What we do not claim

No outcome guarantees, no symptom-relief promises, no "proven," no competitor comparisons we can't source, no credential beyond the four verified in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md). Full rules in [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md).

---

## Audience

Women roughly 40–65, symptom-aware, mostly **not** BHRT-aware. Mobile-first.

The critical insight: **they don't search for the solution, they search for the problem.** Almost nobody types "bioidentical hormone replacement therapy Utah." They type "why can't I sleep through the night anymore" and "menopause weight gain won't go away."

This is why symptom pages carry the volume and the homepage does not. A homepage optimized for "BHRT Utah" targets a term the audience doesn't know yet.

### The journey

| Stage | State of mind | What we owe them |
|---|---|---|
| Symptom search | "Is this normal? Am I crazy?" | Validation + explanation, no pitch |
| Cause discovery | "This might be hormonal" | Mechanism, plainly explained |
| Option research | "What are my choices?" | Honest comparison including risks |
| Provider evaluation | "Can I trust this person?" | Credentials, process, price, reviews |
| Booking | "What actually happens?" | Zero-friction, concrete expectations |

Most sites pitch at stage one and lose everyone not already at stage five. The email sequence exists to carry people from stage two to stage five over weeks, which is the realistic timeline for a health decision of this weight.

---

## Funnel model

**These are planning assumptions, not measured data.** Nothing is instrumented yet — the site has no analytics of any kind. Replace each figure with real numbers after 30 days of tracking. They are here to make the model explicit and falsifiable, not to forecast.

```
Ad / organic  →  Quiz page  →  Quiz complete  →  Email capture  →  Nurture  →  Booked consult
```

| Step | Planning assumption | Why it matters |
|---|---|---|
| Quiz start rate | 25–40% of landing page views | Message-match between ad and quiz H1 drives this |
| Quiz completion | 60–75% of starts | 7 questions is near the tolerable limit; do not add more |
| Email capture | 50–70% of completions | Capture before results, but show results regardless |
| Consult booking | 3–8% of subscribers over 90 days | The sequence's whole job |

**Where the leverage actually is:** capture rate was **0%** — the quiz computed a full lead profile and discarded it on page reload. The capture flow was built in Phase 4 and is waiting only on a MailerLite account. That single number is worth more than any ranking improvement in the first 90 days, because it monetizes traffic that already exists.

---

## Definition of traction

Reviewed at 30 / 60 / 90 days post-launch.

**Leading indicators — move first, watch these early**
- Pages indexed in Search Console
- Impressions on symptom keywords (movement before clicks)
- Email capture rate on completed quizzes
- Google Business Profile views and direction/call actions
- Site named by ChatGPT/Perplexity/Claude for the test prompts in [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md)

**Lagging indicators — the actual scoreboard**
- Organic sessions
- Quiz completions per week
- Subscribers added per week
- **Consults booked, attributed to source**
- Google reviews count

**The one number that matters: consults booked.** Everything else is a proxy. A ranking that produces no bookings is a vanity metric, and this plan should be judged against bookings alone.

### Honest timeline

SEO in a low-competition local niche is a 3–6 month curve, not a 30-day one. Sequenced by realistic payback:

| Window | What actually moves |
|---|---|
| Weeks 1–4 | Email capture (immediate), GBP visibility (fast), tracking baseline |
| Weeks 4–12 | Indexing, long-tail symptom impressions, first organic bookings |
| Months 3–6 | Competitive local rankings, AI citation appearance, compounding content |

If ads are running, they carry volume during the ramp. That's the argument for fixing quiz capture in Phase 4 rather than waiting for content — paid traffic is being wasted every day capture stays at zero.

---

## Sequencing rationale

The build order in [10-ROADMAP.md](10-ROADMAP.md) is not arbitrary:

1. **Compliance remediation before traffic.** ✅ Done in Phase 1. Live copy told users their symptoms were "very treatable" and named "adrenal fatigue" as a condition. Driving traffic to that would have been worse than driving none.
2. **Foundations before content.** ✅ Done. Publishing pages onto a site with no canonical tags, schema, or sitemap would have meant rebuilding every one of them.
3. **Architecture before content.** ✅ Done in Phase 3. Quiz results dead-ended on broken `/services#bhrt` anchors — the leak is fixed before filling the bucket.
4. **Email before content.** ✅ Built in Phase 4. Highest ROI per hour of work, and it compounds — every day of traffic without capture is permanently lost leads.
5. **Content last, and continuously.** It's the long game and it never finishes.

---

## Non-goals

Explicitly out of scope, so they don't get relitigated:

- **Social media as an acquisition channel.** No capacity, wrong channel for this decision weight.
- **Blogging for volume.** Nine excellent pages beat forty thin ones, especially in a YMYL health category.
- **Ranking outside Utah.** Licensure is state-bound. Traffic from Nevada is a cost, not an asset.
- **Broadening beyond hormone health.** Dilutes the specialist position, which is the whole advantage.
- **Paid ads strategy.** Ads land on the quiz page; this project makes that page convert. Campaign management is separate work.
