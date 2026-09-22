# 12 — Citations & Directory Listings

Created 2026-08-28 · Updated 2026-09-22 · Owner: Dallin

**This is the off-site work, in submission order, with every field pre-written.
Paste and submit — nothing here needs composing.**

---

## Why this file exists

The site has **content authority** and almost no **link authority**, and they
are different things that share a word.

| | Status |
|---|---|
| **Content authority (E-E-A-T)** — FNP-C credential, `reviewedBy` schema, NPI, Utah licence, citations to PubMed/NIH/NAMS | ✅ Maxed. Verified live. |
| **Link authority** — other credible sites referencing bhrtwithkim.com | ❌ Near zero. Domain is ~2 weeks old. |

Kim's credential is a strong résumé. Link authority is having people who vouch
for you. When fifty qualified providers compete for "bhrt salt lake city", the
résumé alone does not decide the order — which is why real queries sit at
**position 51–95** while nothing on the site is wrong.

**More pages, more keywords, or more schema will not fix this.** The only cures
are citations, GBP, reviews, and time. Realistic horizon for meaningful
movement: **6–12 weeks**.

### Why these listings specifically

**NPI 1316718968 and Utah APRN #308855-4405 were published in order to unlock
health-directory listings**, and nothing has been done with them yet. Those
directories are high-authority health domains, they are the citations Google's
local algorithm weighs most for medical practices, and they are also what AI
systems cross-reference when deciding whether a provider is real.

---

## ⚠️ The one rule that governs every entry below

**NAP must match character for character, everywhere.** Inconsistent citations
do not merely fail to help — they actively subtract, because they fracture the
entity across sources.

Copy from this block, never retype:

```
Business name:  BHRT with Kim
Provider name:  Kim Yadon, FNP-C
Phone:          (801) 573-0606
Email:          bhrtwithkim@gmail.com
Website:        https://bhrtwithkim.com
City/State:     South Jordan, Utah
Service area:   Serving patients in Utah
NPI:            1316718968
Utah licence:   APRN #308855-4405
Facebook:       https://www.facebook.com/profile.php?id=61592043292697
Instagram:      https://www.instagram.com/hormonereplacementwithkim/
```

**Never publish the street address.** See
[00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md#address-policy--revised-2026-08-16).
If a directory requires one to verify, use it for verification and **hide it
from display**. If it cannot be hidden, skip that directory.

**Never render her name as "Kim Yadon, APRN".** APRN is the licence *category*,
not a post-nominal. `Kim Yadon, FNP-C` is the only authorized form, and
`npm run verify` fails the build if the other appears.

### The description — use verbatim

> Kim Yadon, FNP-C is a board-certified family nurse practitioner providing bioidentical hormone replacement therapy (BHRT) through virtual consultations to women throughout Utah, with a focus on perimenopause and postmenopause. Free 15-minute phone consultation. Cash pay; insurance is not accepted.

Identical wording across every source is the point. It is what lets a retrieval
system resolve all of them to one entity.

### Short version, where there is a character limit

> Kim Yadon, FNP-C provides bioidentical hormone replacement therapy by virtual visit to women across Utah. Free 15-minute phone consultation. Cash pay.

### Credentials — these four, exactly, and no others

```
Board Certified Nurse Practitioner
Trained in BHRT through Worldlink Medical
Trained in Functional Medicine
Certified Diabetes Care and Education Specialist (CDCES)
```

**Do not add** "APRN", "DNP", "MD", "physician", "doctor", or any menopause
certification. Kim does not hold a Menopause Society (MSCP/NCMP) credential —
see the note at the end.

---

## 1. Google Business Profile — do this first

For "bhrt draper ut"-type searches the map pack sits above every organic result,
and it is ranked from the profile, not the website.

### Status — 2026-09-22

| Field | State |
|---|---|
| Hours Mon–Fri 9:00am–5:00pm | ✅ done |
| Website `https://bhrtwithkim.com` | ✅ done |
| Description | ❓ **unconfirmed** — replace with the text below |
| Nine services | ❓ **unconfirmed** — list below |
| House-exterior photo | ❓ unconfirmed — delete it if it is still there |

### Description — click path and exact text

Path from [Google's help page](https://support.google.com/business/answer/3039617):
on a computer, signed in to the Google account that manages the profile, search
Google for **BHRT with Kim** → the management panel appears above the results →
**Edit profile** → **Business information** → **About** → **Description**
(pencil) → paste → **Save**.

⚠️ **Google rejects descriptions that contain prices, promotions or URLs**, and
the limit is 750 characters. The earlier version of this text ended with "Free
15-minute phone consultation", which risks rejection. This one is 662 characters
and contains none of the three:

> Kim Yadon, FNP-C is a board-certified family nurse practitioner providing bioidentical hormone replacement therapy (BHRT) through virtual consultations to women throughout Utah, with a focus on perimenopause and postmenopause. Kim is based in South Jordan and works with patients across Salt Lake County, Utah County and the rest of the state. Care starts with a detailed history and lab testing: lab work is drawn at a LabCorp patient service center the patient chooses, and prescriptions can be filled at any compounding pharmacy the patient chooses. Follow-up visits are typically every 3 months, or sooner if needed. Cash pay only; insurance is not accepted.

The first sentence is the canonical entity statement, verbatim — identical
wording across GBP, the site, schema and `/llms.txt` is what lets a retrieval
system resolve them to one entity.

**Do not add** "there is no office" or anything like it here. The listing uses
storefront categories that require a visitable location (see
[08-LOCAL-GBP.md](08-LOCAL-GBP.md)); the website explains the virtual model,
and the profile should not argue with its own category.

### Services — click path and exact text

From [Google's help page](https://support.google.com/business/answer/9455399):
Business Profile → **Edit services** → **Add custom service** for each name
below → open the service → add the description → **Save**. Service names must
not contain prices or phone numbers.

| Service name | Description (paste) |
|---|---|
| Bioidentical Hormone Therapy | Personalized estrogen, progesterone, and testosterone balancing using bioidentical hormones that mirror your body's own chemistry. We start with comprehensive testing and tailor your protocol to your unique needs. |
| Comprehensive Testing | Comprehensive hormone and thyroid panels, so decisions rest on what your levels actually show rather than on symptoms alone. |
| Thyroid Assessment | Assessment of thyroid function — a system that profoundly impacts energy, weight, mood, and hormonal balance, and one whose symptoms overlap heavily with perimenopause. |
| Sleep Optimization | Sleep protocols that address common causes of insomnia and restless nights. Quality sleep is when your body repairs, restores, and rebalances hormones. |
| Stress Reduction | Increased focus on mindfulness, breathwork, spirituality and social connections help calm the nervous system. Chronic stress affects hormone balance — managing it is part of every plan we build. |
| Nutrition & Hydration | Whole-food, anti-inflammatory dietary guidance designed to support hormonal balance from the inside out. Proper hydration and nutrient-dense eating are foundational to every protocol we build. |
| Exercise & Movement | Cardiovascular fitness, strength training, and brain-oxygenating movement tailored to your energy levels and goals. The right exercise at the right intensity makes all the difference. |
| Detox Support | Support your body's natural elimination pathways through sweat, digestion, and reducing toxic exposure. |
| Natural Remedies | Herbs, targeted supplements, and outdoor time prescriptions that work alongside your body's natural healing processes. Nature provides powerful tools when you know how to use them. |

These are the verified descriptions from `SERVICES` in `lib/constants.ts` — the
same text as `/services`. If one changes there, change it here.

⚠️ **Do not change the category to hide the address.** That was tried and the
reasoning is recorded; `Home health care service` would unlock it and is a false
category.

## 2. Health directories — the ones NPI unlocked

**Reopened 2026-09-22.** An earlier note recorded Dallin as having declined
these; he hadn't. They are the closest thing to the off-site mentions that
2026 research ranks highest for AI visibility.

Free listings. Each is a high-authority health domain citing the practice, which
is exactly the signal currently missing. Expect identity verification against the
licence — that is why these carry weight.

| Directory | Where | Notes |
|---|---|---|
| **Healthgrades** | `healthgrades.com` → "Update your free profile" | Largest. Claim via NPI. Highest priority of the five |
| **Vitals** | `vitals.com` | Feeds several other directories downstream |
| **WebMD Care** | `doctor.webmd.com` | Strong domain authority |
| **Doximity** | `doximity.com` | Verifies against the licence; NP profiles supported |
| **CareDash** | `caredash.com` | Lower authority; do it last, skip if time is short |

For each: search the NPI first — **a profile may already exist** and be
auto-generated from NPPES data. ⚠️ That record currently lists Kim's practice
location as **Riverton**, not South Jordan; if a directory pre-fills Riverton,
correct it to match the GBP, and ask Kim to update NPPES (see
[OPEN-QUESTIONS.md](OPEN-QUESTIONS.md)). Claiming an existing profile beats creating a
duplicate, and duplicates are actively harmful.

Use the NAP block, the verbatim description, and the four credentials. Specialty:
**Family Nurse Practitioner**. Focus: **bioidentical hormone replacement therapy,
perimenopause, postmenopause**.

## 3. Apple Business Connect

[businessconnect.apple.com](https://businessconnect.apple.com). Feeds Apple Maps
and Siri. Small volume, but the audience skews iPhone and it costs one session.

## 4. Reviews — the strongest local signal available

Reviews outrank almost everything else in local ranking, and Kim currently has
one. Target **10 in 90 days**.

**Two rules, both non-negotiable:**

⚠️ **Never condition a discount on a review.** Offering anything of value for a
review violates Google's policies and FTC endorsement guidance, and is a GBP
suspension trigger. The correct sequence: discount brings someone in → they
receive care → Kim asks for a review, unconditionally, in a **separate**
conversation. Never both in one message.

⚠️ **Kim must never confirm or deny that a reviewer is a patient** in a public
reply. Not "thank you for trusting me with your care", not "I'm sorry your visit
disappointed you". A public acknowledgement of a treatment relationship is a
privacy disclosure regardless of who posted first. Safe reply shape:

> Thank you for taking the time to share this. If you'd like to discuss anything
> further, please call the office at (801) 573-0606.

Detail in [08-LOCAL-GBP.md](08-LOCAL-GBP.md#reviews--the-highest-priority-local-task).

---

## 5. Earned mentions — legitimate, and what AI systems weigh most

Health directories are listings. The other off-site signal is being *mentioned*:
a local news piece, a podcast episode, a community talk that gets written up, a
Utah women's-health roundup written by someone independent. One well-indexed
third-party mention can be the difference between absent and present in AI
answers.

Angles that are true and newsworthy, from documented facts only:

- A nurse practitioner who went through perimenopause herself — Kim's own
  account on `/about`, in her words
- Virtual hormone care reaching rural and southern Utah, where the nearest
  in-person provider can be hours away
- Published pricing in a category where most clinics quote only after a visit
- Why "bioidentical" describes molecular structure, not a regulatory category —
  the honest explainer on `/bhrt-vs-hrt`

Whatever runs must be written by the outlet. Kim can be interviewed; she cannot
write her own coverage and present it as independent.

⚠️ **Never create or fund a "best of" or review site that includes Kim.** A
business-controlled site presented as independent reviews of its own category is
prohibited outright by the FTC's rule on consumer reviews,
[16 CFR 465](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-D/part-465)
([FTC announcement](https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials)),
with civil penalties per violation. Disclosing the ownership makes it legal and
worthless — the value of a mention is that someone else chose to make it.

## Not doing, deliberately

- **Paid link building, guest-post networks, directory-submission services.**
  These are link schemes, they are detectable, and the penalty lands on a
  licensed provider's name. The listings above are legitimate because the
  practice genuinely belongs in them.
- **Listing under "NAET with Kim LLC."** Google wants the name customers
  encounter. Two names for one practice fractures the entity — the exact
  problem this file exists to prevent.
- **Bing Webmaster Tools and Bing Places.** Dallin, 2026-09-22: "nobody uses bing."
- **Yelp**, unless Kim wants it. It requires an address more insistently than
  the others and its health-category value is modest.

---

## Open, worth raising with Kim

**Menopause Society certification (MSCP, formerly NCMP).** ChatGPT surfaced this
unprompted in the AI baseline as the credential it steers people toward, and it
named U of U's NAMS-certified practitioners as the more conventional option.

Kim does not hold it, so **it must not appear anywhere** until she does. But it
is a real, achievable credential that would slot straight into
`SITE.provider.credentials` — worth raising as a genuine investment rather than
a marketing tweak.

---

## Measuring whether this worked

Do not judge by position for at least 6 weeks. Earlier signals, in order of how
soon they move:

1. **"Discovered – currently not indexed" falls** (was 19) — internal linking and
   the sitemap should move this within 1–2 weeks
2. **Indexed page count rises** (was 20 of 39)
3. **Impressions rise** before positions improve — appearing more often comes first
4. **Positions cross under 50**, then under 30
5. **Clicks**, last

Re-run the three AI baseline prompts verbatim at the 90-day mark. Protocol is in
the local `_records/` folder — **never commit that directory**.
