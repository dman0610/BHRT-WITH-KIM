# 08 — Local SEO & Google Business Profile

Last updated: 2026-08-10 · Owner: Dallin

**The Google Business Profile is the single highest-leverage local asset in this project — higher than any page on the site.** For "hormone doctor near me"-type searches, the map pack sits above organic results, and a profile with real reviews outranks a better website with none.

---

## The address decision — ⚠️ REVISED 2026-08-16

**The original plan was to hide the street address. Google will not allow it at Kim's categories. Do not spend another session retrying this — read the whole section first.**

### What we found

The profile already existed and Kim controls it. Categories were `Nurse practitioner` (primary), `Medical clinic`, `Wellness center`, `Women's health clinic`. Toggling **"Show business address to customers"** off returns:

> ⚠️ *Your business category requires a location customers can visit*

All four are **storefront categories**. Google requires a visitable address for them, and the toggle is disabled until the category changes.

### Why there is no clean way around it

Google's service-area definition is narrower than this doc previously assumed:

> "If your business doesn't have a storefront with clear signage but **travels to customers at their physical locations**, you're allowed one service-area Business Profile."
> — [Guidelines for representing your business](https://support.google.com/business/answer/3038177)

**Kim does not travel to customers. She is virtual-only.** She fits neither the storefront model nor the SAB model, which is precisely why the toggle is blocked. Healthcare is also held to a *higher* address standard than other verticals — Google treats a verified address as a trust signal for medical listings rather than an optional field.

### The workaround that exists, and why it was rejected

**`Home health care service` is SAB-eligible and would unlock the toggle.** Recorded here so nobody rediscovers it and assumes it was missed.

**Do not use it.** Kim does not visit patients at home, so it is a false category — category misrepresentation is itself a suspension trigger, and it would pull her into home-health-aide and elder-care queries that are wrong for a hormone practice. That trades a small risk for a larger one *and* degrades traffic quality.

### Decision: leave the address on GBP, remove the house photo

- Her categories **legitimately require** an address. She is not misrepresenting anything — she genuinely works there, and Google's practitioner guideline explicitly contemplates a provider who "can be contacted directly at the verified location during stated hours." That is her Mon–Fri 9–5 reachability exactly.
- The profile is **healthy** — verified, 5 weeks of history, 28 interactions, one 5.0 review. Category surgery on a healthy listing triggers re-review, and the risk would be spent reaching a state Google does not offer her.
- **The house photo came down instead.** The lead image was the front of the home: zero ranking value, maximum privacy cost. The map pin already shows the street; a photo of the front door is a different order of exposure. Replaced with a logo/portrait.

### What has NOT changed

**The website policy is untouched and still absolute.** The street address stays off bhrtwithkim.com, out of schema, and out of `/llms.txt`. Verified clean on the live site 2026-08-16 across `/`, `/about`, `/contact`, `/service-areas/south-jordan`.

The distinction is real: GBP is a Google-controlled surface with its own rules. The site becoming an independent citation source that propagates to scraper directories is the thing worth preventing, and it is prevented.

### One test still worth 60 seconds

Not yet run. Remove **`Medical clinic`** and **`Wellness center`** as secondaries, keep `Nurse practitioner` primary, retry the toggle. The warning says "category" singular, so the primary is the likely blocker — but if a *secondary* is the culprit, this yields a hidden address **and** the accurate primary. Cheap to test, fully reversible.

### On the website

Never publish the street address — not in the footer, not in schema, not on `/contact`. A published address propagates to scraper directories and becomes very difficult to retract.

`MedicalBusiness` schema uses `areaServed` and omits `streetAddress`. That is valid schema for a service-area business, not a compromised version of it. See [03-SEO-TECHNICAL.md](03-SEO-TECHNICAL.md).

---

## GBP configuration

**✅ UNBLOCKED 2026-08-16 — the profile exists, is verified, and Kim controls it.** This was the largest remaining blocker in the project and it turned out to be already solved. Access confirmed via the "You manage this Business Profile" badge.

### State as found, 2026-08-16

| Field | Value found | Correct? |
|---|---|---|
| Name | BHRT with Kim | ✅ matches NAP |
| Phone | (801) 573-0606 | ✅ matches `lib/site.ts` |
| Categories | Nurse practitioner *(primary)*, Medical clinic, Wellness center, Women's health clinic | ⚠️ blocks address hiding — see above |
| Address | *(home address, South Jordan — not recorded here)* | ⚠️ public on GBP, staying — see above |
| Hours | Opens **9:30am** | ❌ site publishes **9:00am** |
| Website | `www.bhrtwithkim.com` | ❌ canonical is the apex, no `www` |
| Description | "Kim is a nurse practitioner offering Bioidentical Hormone Replacement Therapy" | ❌ not the canonical entity statement |
| Social | Facebook `61592043292697`, Instagram `hormonereplacementwithkim` | ✅ verified — not yet in site `sameAs` |
| Reviews | 1 review, 5.0 | baseline |
| Interactions | 28 | baseline |

### Remaining setup steps

1. ~~**Claim/verify** ownership~~ — ✅ done, already owned.
2. ~~**Set service-area mode**~~ — ❌ **not possible.** See the address decision above. Do not retry without reading it.
3. **Define the service area.** Kim is based in **South Jordan** (confirmed 2026-08-07) and serves all of Utah, concentrated in Salt Lake County then Utah County.

   Set the service area to **Salt Lake County and Utah County**, not "Utah" statewide. An overbroad area dilutes relevance, and proximity ranking is driven by the registered South Jordan address regardless of how wide the declared area is — listing the whole state buys nothing and costs specificity.

   Realistic map-pack reach from a South Jordan anchor: strong in South Jordan, West Jordan, Riverton, Herriman and Draper; moderate in Sandy and Midvale; weak in downtown Salt Lake City (~15 miles) and Utah County. That gradient is why the SLC and Lehi pages are organic plays rather than map-pack plays — see [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md).
4. ~~**Categories**~~ — already set: `Nurse practitioner` primary, which is the right choice. **Do not change it**; category changes reset ranking history and trigger re-review. The only permitted experiment is the secondary-removal test described above.
5. **NAP exactly as in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md)** — character for character with the website footer. "BHRT with Kim" ≠ "BHRT With Kim, LLC". ✅ verified correct as found.
6. **Hours → fix to Mon–Fri 9:00am–5:00pm.** Found at 9:30am; `SITE.contact.hours` publishes 9:00. A site/GBP mismatch costs local confidence. Source of truth is `lib/site.ts` — change GBP, not the site.
7. **Description** → replace with the canonical entity statement from [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md), verbatim. Identical wording across GBP, `/llms.txt`, schema and the homepage is what raises AI entity confidence. Approved text:

   > Kim Yadon, FNP-C is a board-certified family nurse practitioner providing bioidentical hormone replacement therapy (BHRT) through virtual consultations to women throughout Utah, with a focus on perimenopause and postmenopause. Free 15-minute phone consultation. Cash pay; insurance is not accepted.

8. **Services:** list all nine from [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) with descriptions. Service lists feed "near me" queries directly. Not yet done.
9. **Photos.** ⚠️ **Delete the house-exterior photo first** — see the address decision. Then `kim-portrait.jpg` as the profile image, plus a logo. No workspace shots that reveal the home.
10. **Website link → change `www.bhrtwithkim.com` to `https://bhrtwithkim.com`.** The `www` host 307-redirects to the apex, so it works, but the canonical should be pointed at directly. No UTM on the main link (it interferes with Google's own attribution). UTMs are fine on Posts.

---

## Reviews — the highest-priority local task

Reviews are the strongest local ranking factor after proximity and relevance, and they are simultaneously the strongest trust signal for a health decision and a heavy input to AI recommendations.

**Current state:** four testimonials in `lib/constants.ts` with no attribution, no dates, and no source. Google review count is unknown.

Testimonials on a website are worth very little. Google reviews are worth a great deal. **Converting the former into the latter is the single most valuable non-technical task in this project.**

### The ask

The four existing testimonial authors — Natalie K., Allison G., Alyssa C., Beccah G. — already wrote positive things and are the obvious first asks.

**Process:**
1. Kim requests a review directly after a positive visit. Personal ask, not automated — response rates aren't comparable.
2. Send the GBP short review link by text. One tap.
3. Follow up once, a week later. Once only.
4. Kim responds to **every** review, positive or negative. Response rate is itself a ranking signal, and how a provider handles criticism is read closely by prospective patients.

**Target: 10 reviews in 90 days.** That is enough to clear the threshold where the star rating displays and starts influencing clicks.

### Rules

- **Never incentivize reviews.** Offering anything of value violates Google's policies and FTC guidance. Removal and possible suspension.
- **Never gate.** Asking only happy patients (review-gating) violates policy.
- **Never write or edit a review.** Obvious, and it happens.
- **No `Review`/`AggregateRating` schema for the site testimonials.** See [03-SEO-TECHNICAL.md](03-SEO-TECHNICAL.md).
- **HIPAA caution:** Kim must not confirm, deny, or reference anyone's patient status or clinical details in a public review response — including in response to a negative review that discloses it themselves. A patient may share their own information; the provider may not. Safe template: *"Thank you for taking the time to share feedback. Please contact the office directly so we can discuss your experience."*

That last rule is the one most commonly violated by well-meaning providers, and it carries the largest penalty of anything on this page.

---

## Citations & directories

Consistent NAP across the web is a local ranking factor, and contradictions between sources suppress AI citation confidence.

**Priority order:**
1. Google Business Profile
2. Bing Places
3. Apple Business Connect
4. Healthgrades, Vitals, WebMD Care — health-specific, high trust for this vertical
5. Yelp
6. Utah local directories, chamber of commerce

**Every listing:** identical name, identical phone, service-area (no street address), same website URL, same description opening.

Check for duplicate or unclaimed listings first — duplicates split ranking signals and are common for home-based practices that were auto-generated from data aggregators.

---

## GBP Posts

Posts are a weak ranking signal but a genuinely useful visibility surface, and most competitors ignore them.

- Roughly every 1–2 weeks
- Link to new symptom pages as they ship, seasonal hormone-health topics, FAQ answers
- Same compliance rules as the site — [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md) applies verbatim
- UTM-tag Post links so the traffic is attributable

Also worth using: the **Q&A** section. Anyone can ask, and anyone can answer — including competitors. Kim should seed it with the real questions from `/faq` and monitor it.

---

## City pages

Covered in [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md). The essential point repeated here because it's the biggest risk in the local workstream:

**A city page that could be produced by find-and-replace is a doorway page.** Five genuinely distinct pages beat twenty templated ones, and twenty templated ones can cost the whole domain. Each needs 400+ unique words, a city-specific FAQ, and a real reason virtual care serves that area.

✅ **Shipped 2026-08-10** — South Jordan, Salt Lake City, Draper, Sandy, Lehi, plus a `/service-areas` hub. Each answers a question the other four don't; worst pairwise text overlap between any two is 14.4%, measured by script. Breakdown in [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md).

**The site pages and the GBP are not substitutes for each other.** The GBP earns map-pack placement from the registered South Jordan address; the city pages compete in organic blue links and feed AI retrieval. Salt Lake City in particular will not reach the map pack from South Jordan, and the page is built for organic on that basis. Expecting a city page to produce map results is the most common way this work gets misread as failing.

**Do not add cities to chase the map pack.** Proximity comes from the registered address, so a page for a city 40 miles away cannot manufacture it. Provo and Ogden stay unbuilt until the first five earn traffic.

---

## Checklist

- [ ] GBP ownership confirmed
- [ ] Service-area mode on; **street address hidden**
- [ ] Service area set around Kim's city + Utah
- [ ] Primary category chosen
- [ ] NAP matches website character for character
- [ ] Hours set
- [ ] Description uses the canonical entity statement
- [ ] All nine services listed
- [ ] Photos uploaded
- [ ] Bing Places + Apple Business Connect claimed
- [ ] Duplicate listings found and merged
- [ ] Review request process running; 10 reviews in 90 days
- [ ] Kim responding to every review
- [ ] Q&A seeded from `/faq`
