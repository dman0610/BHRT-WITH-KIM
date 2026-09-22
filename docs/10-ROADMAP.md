# 10 — Roadmap

Last updated: 2026-09-22 · Owner: Dallin

**Where things stand and what comes next.** Keep this short. The full phase
history of the August build (Phases 0–13, every decision and measurement) is in
[archive/2026-08-build-log.md](archive/2026-08-build-log.md); the launch runbook
is in [archive/2026-08-launch-runbook.md](archive/2026-08-launch-runbook.md).

---

## Where things stand — 2026-09-22

Live at `https://bhrtwithkim.com` since 2026-08-16. 39 sitemap URLs.
`npm run verify` runs 23 guard sections and is green.

### Search Console, last 3 months (data through 2026-09-20)

| Clicks | Impressions | CTR | Avg position | Queries |
|---|---|---|---|---|
| 6 | 513 | 1.2% | 42 | 74 |

| Query | Impr. | Page that should win |
|---|---|---|
| bhrt salt lake city | 39 | `/service-areas/salt-lake-city` |
| bhrt draper ut · bhrt draper, ut · bhrt clinic draper ut | 24 | `/service-areas/draper` |
| bhrt utah | 14 | `/` |
| bhrt ogden | 9 | *no page — see "Decisions waiting on data"* |
| bhrt west ashley | 8 | none — South Carolina, irrelevant |
| bhrt sandy utah | 7 | `/service-areas/sandy` |
| womens health clinic | 6 | none — generic, not targeted |
| menopause tiredness | 5 | `/symptoms/menopause-fatigue` |

**The demand is almost entirely "BHRT + city".** That is local intent, where the
map pack sits above the organic results — so the Google Business Profile matters
as much as any page.

### Indexing

20 of 39 indexed; **19 "Discovered – currently not indexed"**, flat since
2026-08-17. The stale-sitemap fix deployed 2026-09-21. **Re-check around
2026-10-05.** Everything ruled out, with measurements, is in
[13-INDEXING.md](13-INDEXING.md) — read it before theorising.

### Google Business Profile

| Field | State |
|---|---|
| Hours Mon–Fri 9:00–5:00 | ✅ fixed (Dallin, confirmed 2026-09-22) |
| Website → `https://bhrtwithkim.com` | ✅ linked (confirmed 2026-09-22) |
| Description → canonical entity statement | ❓ unconfirmed — exact text in [12-CITATIONS.md](12-CITATIONS.md) |
| Nine services listed | ❓ unconfirmed |
| House-exterior photo removed | ❓ unconfirmed |
| Reviews | 1 as of 2026-08-16; current count unknown |

---

## What 2026 research says actually moves this business

Checked 2026-09-22. Sources are primary where they exist.

| Surface | What decides it | Source |
|---|---|---|
| **Map pack** ("bhrt draper ut") | Primary GBP category, proximity to the searcher, keywords in the business name, **reviews** (rating, count, recency). Review signals rose to ~20% of local-pack weight | [Whitespark 2026 Local Search Ranking Factors](https://whitespark.ca/local-search-ranking-factors/) |
| **Local organic** | A dedicated page per service, geographic relevance of the content, link authority | same |
| **AI answers** (ChatGPT, Gemini, AI Mode) | Mostly **off-site**: named in curated "best of" lists, prominence on industry sites, unstructured mentions, authoritative review sites. GBP drops to a minor factor | same |
| **Google AI Overviews / AI Mode** | "No additional requirements… nor other special optimizations." No special markup or AI text files needed; normal SEO applies | [Google Search Central — AI features](https://developers.google.com/search/docs/appearance/ai-features) |

The practical reading: **the website is now close to as good as on-site work can
make it.** The remaining multipliers are reviews, the GBP, health-directory
listings and genuine third-party mentions. Another page or schema type will not
outrun those.

### Algorithm updates since launch

From [Google's Search Status Dashboard](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history):
March and May 2026 core updates; spam updates in March, June and **August
18–20** (two days after launch). **No core update since June.** Some SEO blogs
describe an "August core update, Aug 26–Sep 21" — it is not on Google's
dashboard; don't cite it. The August spam update hit sites with tens of
thousands of programmatic pages; the 19-page indexing plateau started 2026-08-17,
the day *before* it, so it is not the cause.

---

## Shipped 2026-09-22

Branch `seo-pass-2026-09-22`.

- **Homepage** now opens with the canonical entity statement — it never named
  Kim Yadon in visible text before, only in image alt — and has a
  server-rendered "How does virtual hormone care with Kim work?" section:
  provider and licence, all prices, statewide coverage with city links, and the
  LabCorp / pharmacy / follow-up process. 792 → 1,243 words, all of it facts.
- **Hero** no longer claims BHRT helps "Metabolism & Weight Management", which
  contradicted the site's own weight page.
- **/about** H1 is "Meet Kim Yadon, FNP-C", and a new visible section links her
  NPI record and the Utah licence lookup. Both numbers previously existed only in
  JSON-LD.
- **Schema**: `MedicalWebPage.author` is the practice, `reviewedBy` is Kim — it
  had named her author on 18 pages she reviewed but did not write.
- **Next.js 16.2.2 → 16.2.12** for security advisories.
- **verify** gained "Entity facts on the page" (23 sections).

---

## Next — in order of what moves bookings

| # | What | Who | Notes |
|---|---|---|---|
| 1 | **Deploy** `seo-pass-2026-09-22` | Dallin | Merge to `main`; Vercel deploys |
| 2 | **Request indexing** for the pages that matter, after deploy | Dallin | Search Console → search bar at the top ("Inspect any URL…") → paste the full URL → Enter → **Request indexing**. ~10 per day. Order: `/`, `/services`, `/about`, `/service-areas/salt-lake-city`, `/service-areas/draper`, `/bhrt-cost-utah`, `/faq`, `/service-areas/sandy`, `/service-areas/south-jordan`, `/symptoms/menopause-fatigue` |
| 3 | **GBP description + nine services** | Dallin / Kim | Exact text and click path in [12-CITATIONS.md](12-CITATIONS.md) |
| 4 | **Reviews** — Kim asks every patient after care, separately from any discount | Kim | The single largest local lever. Rules in [08-LOCAL-GBP.md](08-LOCAL-GBP.md#reviews--the-highest-priority-local-task) |
| 5 | **Health directories** — Healthgrades, WebMD Care, Vitals, Doximity | Dallin | Reopened 2026-09-22 (Dallin had not ruled them out). Fields pre-written in [12-CITATIONS.md](12-CITATIONS.md) |
| 6 | **NPPES practice location** | Kim | The federal NPI record lists her practice location as **Riverton** (mailing: South Jordan), last updated 2024-01-12. GBP says South Jordan. If Riverton is stale, Kim updates it at nppes.cms.hhs.gov — it is the government record `sameAs` points at |
| 7 | "How did you hear about Kim?" in the Healthie intake form | Kim | Biggest measurement hole; most bookers never touch the site's contact form |
| 8 | Re-check "Discovered – currently not indexed" | Dallin | ~2026-10-05. See [13-INDEXING.md](13-INDEXING.md#if-the-number-has-not-moved) |

### Decisions waiting on data

- **An Ogden / northern Utah page.** "bhrt ogden" had 9 impressions with no page.
  The `/service-areas` hub and the homepage already name Ogden in prose. Build a
  dedicated page only if the demand persists once the hub is indexed — and only
  with a genuinely distinct angle, per the doorway rules in
  [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md#the-doorway-page-line). A page that can't
  answer a question the other five don't should not exist.
- **Next.js 16.3.x.** Two advisories remain against 16.2.12, neither reachable
  here (Windows-hosted RCE; Image Optimization RCE via AVIF — no AVIF sources, no
  `remotePatterns`). Move to 16.3.x on its own branch, not bundled with content.

### Do not

- **Build a "best of" / review site that lists Kim.** A business-controlled site
  presented as independent reviews of its own category is prohibited outright by
  the FTC's rule on fake reviews, [16 CFR 465](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465),
  with civil penalties per violation. Disclosing ownership makes it legal and
  worthless — AI systems and Google weight *independent* sources.
- Bing Webmaster Tools or Bing Places — Dallin: "nobody uses bing."
- Trade anything of value for a review. See [08-LOCAL-GBP.md](08-LOCAL-GBP.md).

---

## Still blocked on a decision

| Item | Blocks | Owner |
|---|---|---|
| MailerLite account | The email *sequence*. Capture already works — leads reach Kim's inbox | Dallin |
| Sending domain + SPF/DKIM/DMARC | First send | Dallin |
| PO box / virtual address | First send (CAN-SPAM) | Dallin |
| Lead magnet | Email 1 | Dallin |
| `NEXT_PUBLIC_META_PIXEL_ID` | Paid ads. Verify zero health data in payloads and that it never fires on `/symptoms/*` | Dallin |
| Menopause Society (MSCP) certification | Nothing today — a real credential ChatGPT steers people toward | Kim |

---

## Definition of done — what is still open

- [ ] Sitemap-listed pages indexed (20 of 39 on 2026-09-21)
- [ ] GBP description, services and photo confirmed
- [ ] 10+ Google reviews
- [ ] "How did you hear about Kim?" live in Healthie
- [ ] Mobile LCP under 2.5s on a real device (Speed Insights has real-user data)
- [ ] Email: test send lands in Gmail Primary; SPF/DKIM/DMARC verified
- [ ] Pixel verified firing with **zero** health data
- [ ] Real-browser accessibility pass: keyboard focus, tap targets, `axe`
