# 12 — Citations & Directory Listings

Created 2026-08-28 · Owner: Dallin

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

**Highest value by a wide margin, free, ~15 minutes, and still not done.**
`bhrt near me` is already in the Search Console data, and that is a map-pack
query no amount of on-site work or ad spend wins as efficiently.

Full detail in [08-LOCAL-GBP.md](08-LOCAL-GBP.md#remaining-setup-steps). The four
fields that have drifted:

| Field | Currently | Change to |
|---|---|---|
| Photos | House exterior as lead image | **Delete it.** Zero ranking value, maximum privacy cost. Use logo or Kim's portrait |
| Hours | Opens 9:30am | **Mon–Fri 9:00am–5:00pm** |
| Website | `www.bhrtwithkim.com` | `https://bhrtwithkim.com` |
| Description | "Kim is a nurse practitioner offering…" | The verbatim description above |

Then add the **nine services** from
[00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md#services) — service lists feed
"near me" queries directly.

⚠️ **Do not change the category to hide the address.** That was tried and the
reasoning is recorded; `Home health care service` would unlock it and is a false
category.

## 2. Bing Webmaster Tools — 2 minutes

[bing.com/webmasters](https://www.bing.com/webmasters) → **Import from Google
Search Console**. Authorises in one click, no re-verification.

**This is an AI channel, not a second-tier search engine** — ChatGPT search runs
on Bing's index. Disproportionate value for the time.

## 3. Health directories — the ones NPI unlocked

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
auto-generated from NPPES data. Claiming an existing profile beats creating a
duplicate, and duplicates are actively harmful.

Use the NAP block, the verbatim description, and the four credentials. Specialty:
**Family Nurse Practitioner**. Focus: **bioidentical hormone replacement therapy,
perimenopause, postmenopause**.

## 4. Apple Business Connect

[businessconnect.apple.com](https://businessconnect.apple.com). Feeds Apple Maps
and Siri. Small volume, but the audience skews iPhone and it costs one session.

## 5. Reviews — the strongest local signal available

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

## Not doing, deliberately

- **Paid link building, guest-post networks, directory-submission services.**
  These are link schemes, they are detectable, and the penalty lands on a
  licensed provider's name. The listings above are legitimate because the
  practice genuinely belongs in them.
- **Listing under "NAET with Kim LLC."** Google wants the name customers
  encounter. Two names for one practice fractures the entity — the exact
  problem this file exists to prevent.
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
