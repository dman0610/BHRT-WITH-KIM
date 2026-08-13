# 08 — Local SEO & Google Business Profile

Last updated: 2026-08-10 · Owner: Dallin

**The Google Business Profile is the single highest-leverage local asset in this project — higher than any page on the site.** For "hormone doctor near me"-type searches, the map pack sits above organic results, and a profile with real reviews outranks a better website with none.

---

## The address decision

**Kim works from home. The GBP is currently attached to that home address, publicly visible.**

**Action: keep the listing verified at the home address, enable service-area mode, and hide the street address.**

### Why this doesn't cost traffic

The intuitive worry is that hiding the address weakens local ranking. It doesn't.

**Google still uses the registered address for proximity calculation — it only stops displaying it.** Service-area businesses rank in the map pack for their registered city exactly as address-visible businesses do. The only thing lost is a street address on the listing, which no prospective patient needs for a virtual practice.

### Why leaving it public is a real risk

- **Guideline violation.** Google requires businesses that don't serve customers at their address to hide it. Home-based service businesses with visible addresses are among the most-reported listings, and any competitor can file the report.
- **Suspension costs everything.** A suspended profile removes the listing entirely and reinstatement is slow and uncertain. Losing the listing costs more local traffic than the entire on-site build produces.
- **Personal safety and privacy.** A home address published to a business audience, permanently.

There is no traffic upside to leaving it visible. Only downside.

### On the website

Never publish the street address — not in the footer, not in schema, not on `/contact`. A published address propagates to scraper directories and becomes very difficult to retract.

`MedicalBusiness` schema uses `areaServed` and omits `streetAddress`. That is valid schema for a service-area business, not a compromised version of it. See [03-SEO-TECHNICAL.md](03-SEO-TECHNICAL.md).

---

## GBP configuration

Blocked until profile access is confirmed — see [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

### Setup steps

1. **Claim/verify** ownership. Confirm who currently controls it.
2. **Set service-area mode:** enable "I deliver goods and services to my customers," then hide the address.
3. **Define the service area.** Kim is based in **South Jordan** (confirmed 2026-08-07) and serves all of Utah, concentrated in Salt Lake County then Utah County.

   Set the service area to **Salt Lake County and Utah County**, not "Utah" statewide. An overbroad area dilutes relevance, and proximity ranking is driven by the registered South Jordan address regardless of how wide the declared area is — listing the whole state buys nothing and costs specificity.

   Realistic map-pack reach from a South Jordan anchor: strong in South Jordan, West Jordan, Riverton, Herriman and Draper; moderate in Sandy and Midvale; weak in downtown Salt Lake City (~15 miles) and Utah County. That gradient is why the SLC and Lehi pages are organic plays rather than map-pack plays — see [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md).
4. **Categories.** Primary carries the most ranking weight; choose carefully.
   - Primary: *Nurse practitioner* (or *Women's health clinic* — pick the one matching how patients describe her, and don't change it later; category changes reset ranking history)
   - Secondary: *Wellness center*, *Medical clinic*
5. **NAP exactly as in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md)** — character for character with the website footer. "BHRT with Kim" ≠ "BHRT With Kim, LLC".
6. **Hours.** Currently unknown. Needed — hours affect both ranking and conversion.
7. **Description** (750 chars): open with the canonical entity statement from [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md). Same facts as `/llms.txt` and the homepage — consistency across sources is what AI systems cross-reference.
8. **Services:** list all nine from [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) with descriptions.
9. **Photos.** Weak signal individually, strong in aggregate. `kim-portrait.jpg` as the profile image; add a logo and any workspace shots that don't reveal the home location.
10. **Website link:** `https://bhrtwithkim.com` — no UTM on the main link (it interferes with Google's own attribution). UTMs are fine on Posts.

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
