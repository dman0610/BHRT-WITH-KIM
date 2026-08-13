# Open Questions

Last updated: 2026-08-10 · Owner: Dallin

Every unknown that affects the build. **Nothing here gets guessed** — see the never-invent-a-fact rule in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md). Where a fact is missing, the site writes around it or omits it.

Resolved items move to [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) and get struck through here.

---

## Blocking — work is stopped

### 1. MailerLite account
**Blocks:** the Phase 4 email sequence going live. The capture code is built and tested.
**Why it matters:** MailerLite manually reviews health and wellness signups and can decline. If they do, we switch to Kit — a one-file change through the adapter, but only if we know early.
**Ask:** create the account and confirm the review passes. Do this soon — it is the last thing standing between the built capture flow and a working list.

### 2. Physical mailing address for email footer
**Blocks:** the first email send.
**Why it matters:** CAN-SPAM requires a valid physical postal address in every commercial email. The address policy keeps Kim's home address unpublished — and this is not the place to make an exception, since it would appear in every email ever sent.
**Ask:** get a PO box or virtual mailbox. Roughly $20–100/year.

### 3. Sending address on bhrtwithkim.com
**Blocks:** the email sequence going live. The capture flow itself is already built and tested against its failure path.
**Why it matters:** `bhrtwithkim@gmail.com` solves *receiving*, not *sending*. A gmail.com From address relayed through MailerLite fails DMARC alignment, and providers block it outright.
**No longer blocked on access** — DNS is delegated to Vercel and Dallin already controls it. See the resolved section below.
**Remaining work (Dallin):** add MailerLite's SPF/DKIM TXT records plus a DMARC record at `_dmarc.bhrtwithkim.com` (`p=none` to start) in Vercel → Settings → Domains. Then create one From address on the domain with replies forwarding to `bhrtwithkim@gmail.com`. No second inbox to monitor.

### 4. Google Business Profile access
**Blocks:** all of [08-LOCAL-GBP.md](08-LOCAL-GBP.md).
**Why it matters:** the GBP is the highest-leverage local asset in the project, and the home address is currently public on it — a suspension risk that should be closed early.
**Ask:** who owns the listing? Can we get manager access?

### 5. Lead magnet
**Blocks:** email 1, and the quiz capture copy that promises it.
**Why it matters:** the opt-in says "Kim's hormone health guide." Promising an asset that doesn't exist is the fastest way to burn a new list.
**Ask:** does a guide exist? If not, Kim outlines it and we produce it — a 5–8 page PDF is enough.

---

## High value — not blocking, but worth more than most of the build

### 6. Utah license number / NPI
**Unlocks:** strong E-E-A-T signal, verifiability, health-directory listings.
**Why it matters:** now that the credential is confirmed as **FNP-C**, a license number and NPI make it independently checkable — the difference between a claimed credential and a verified one. NPI is public record and standard to publish.
**Ask:** Utah license number and NPI, and whether Kim is comfortable publishing them.

### 7. Is the credential list complete?
**Unlocks:** `Person.hasCredential` completeness and directory listings.
**Why it matters:** four credentials are published and verified. If Kim holds others — additional certifications, fellowship training, professional memberships (AANP, The Menopause Society) — each one is an independent trust signal, and Menopause Society membership in particular is highly relevant to this specialty.
**Ask Kim:** is the published list of four complete, or are there others? Any professional memberships?

### 8. Insurance
**Unlocks:** one of the top three pre-booking questions.
**Ask:** accepted, cash-pay only, or superbill provided for self-submission?

### 9. Article review decision
**Unlocks:** `/resources` as an E-E-A-T asset instead of a liability.
**Why it matters:** the five articles publicly state they were *"drafted with AI assistance"* — a direct contradiction of the expertise signal on YMYL health content.
**Ask Kim:** will she review and byline them? If not, we unpublish. Removing the disclosure without review is not an option.

---

## Lower priority

### 10. Business hours
Needed for GBP. Affects local ranking and conversion.

### 11. Legal entity name
Needed if the practice is an LLC — must match across GBP, directories, and the email footer.

### 12. Years in practice
Would strengthen `/about`. **Currently claimed nowhere, correctly** — do not add a figure until verified.

### 13. Testimonial provenance
The four testimonials have no source or date. Were they Google reviews? If so they can be linked, which is far stronger. If they came from elsewhere, confirm permission to publish.

### 14. Keyword volume validation
[02-KEYWORD-MAP.md](02-KEYWORD-MAP.md) deliberately contains no volume figures — no tool has been run on this market. Priority there is assigned by intent quality, which is knowable without data. Validate before the remaining Phase 5 content pages and revise.

### 15. Social profiles
Any existing accounts? Needed for cross-web NAP consistency and `sameAs` in schema.

### 16. Flyer QR destination
Kim's print flyer carries a QR code. Where does it currently point? It needs a UTM-tagged URL landing on `/book`, or print attribution is impossible and the free-consult CTA is wasted.

---

## Ask Kim — copy/paste

One message rather than a drip of questions. Ordered by what unblocks the most work. Nothing here gets guessed if it goes unanswered — the site writes around the gap instead.

**The four consult-process questions were answered 2026-08-10** and are recorded in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md). What remains:

> **Questions people ask before booking:**
> 1. Do you accept insurance, is it cash-pay only, or can you provide a superbill for someone to submit themselves?
> 2. Are the four credentials on the website the complete list, or do you hold others? Any professional memberships — AANP, The Menopause Society?
> 3. Are you comfortable publishing your Utah license number and NPI? Both are public record, and having them on the site makes your credentials independently verifiable, which helps a lot with Google and with health directories.
>
> **Business details:**
> 4. What hours should we list on your Google Business Profile?
> 5. Is the practice registered as an LLC or similar? If so, what's the exact legal name?
>
> **Two confirmations:**
> 6. The four testimonials on the site — do you know where they came from originally? If any were Google reviews we can link them, which counts for much more.
> 7. The five articles under Resources currently say at the bottom that they were drafted with AI help. On health content that works against you. Would you be willing to read through them and let us put your name on them as the reviewer? If not, we should take them down.

**Do not ask for:** years in practice (unnecessary, and if it's ever published it must be exact), or anything about the 12-Week Vitality Reset Program — she's already said it isn't ready.

---

## Resolved

### ~~Consult logistics~~ — resolved 2026-08-10
All four answered by Kim. Full detail and wording rules in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md):

- **Consultation length:** free phone consult **~15 minutes**; paid initial consultation **~60 minutes** *(corrected 2026-08-10 — an earlier note had both at 60)*
- **Labs:** LabCorp. Patient gets an email, schedules with LabCorp, visits a Patient Service Center. Cost varies, billed by the lab.
- **Prescriptions:** any compounding pharmacy the patient chooses
- **Follow-ups:** every 3 months, or sooner if needed

This was the highest-value content input available and it unblocks five FAQ answers plus the "what happens in a consultation" section of every symptom page.

### ~~Kim's full name and post-nominal~~ — resolved 2026-08-06
**Kim Yadon, FNP-C.** Confirmed by her own email signature and print flyer. Unblocks meaningful `Person` schema, entity disambiguation, and health-directory citations. More specific and more checkable than the generic "Board Certified Nurse Practitioner" previously published.

### ~~Free consultation~~ — resolved 2026-08-06
**It exists:** Healthie offering `258963`, "Free phone consultation with lab order." Kim's funnel is free consult → lab order → paid follow-up. Now the primary sitewide CTA. Note the wording trap: the consult and the lab *order* are free; the labs are not.

### ~~Healthie appointment types~~ — resolved 2026-08-06
Superseded. Kim supplied four **offering** IDs (`258961` initial, `258962` follow-up, `258963` free consult, `258966` comprehensive) using `require_offering=true`, a different mechanism than the old `appt_type_ids`. Old embed retired.

### ~~12-Week Vitality Reset Program~~ — resolved 2026-08-06
Not ready. Kim asked for all mentions removed from both pricing options and the `/services` hero. Removed; do not reintroduce without her go-ahead.

### ~~Lab cost disclosure~~ — resolved 2026-08-07
Labs are **not included** in any package, and no dollar figures are published — Kim says costs vary greatly by panel. The prior `$250 / $150` figures are withdrawn. Standing line: "Lab costs are not included and vary depending on which panels are ordered."

### ~~Promo code placement~~ — resolved 2026-08-07
`BHRTwithKim25` public through 2026-09-15; all other codes private to email and direct outreach. Never conditioned on leaving a review. See [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md).

### ~~Who controls DNS for bhrtwithkim.com~~ — resolved 2026-08-07
**Vercel, and Dallin already has access.** Nameservers are `ns1.vercel-dns.com` / `ns2.vercel-dns.com`, so records are managed in Vercel → project → Settings → Domains regardless of which registrar the domain was bought from. Hosting and DNS are the same place here.

Confirmed by lookup: A records point to Vercel (`64.29.17.65`, `64.29.17.1`); **no MX, no TXT, no `_dmarc`** — nothing email-related exists on the domain yet, so this work adds records rather than changing any.

### ~~Web3Forms destination~~ — Dallin handling, 2026-08-07
"Send a Message" and the footer newsletter deliver through Web3Forms, whose destination address lives in the Web3Forms dashboard rather than this repo. Dallin is confirming it points at `bhrtwithkim@gmail.com` to match what the site now publishes.

### ~~Kim's business email~~ — resolved 2026-08-06
`bhrtwithkim@gmail.com`, created by Kim. Replaced the personal `Kyadon300@gmail.com` sitewide on 2026-08-07; the personal address no longer appears anywhere public. Receiving only — see item 3 for why it can't send campaigns.

### ~~Ad account status~~ — resolved 2026-08-07
Planned soon, not yet live. `/privacy` and `/disclaimer` must ship before the pixel. Flyer copy needs third-person reframing before it becomes a Meta ad — see [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md).

### ~~CREDENTIAL_TITLE~~ — resolved 2026-08-07
The original spec treated Kim's credential as a pending input requiring `TODO(CREDENTIAL)` markers. It was already published on `/about`. Dallin confirmed all four as verified and cleared for use. **The marker convention is retired.** See [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md).

### ~~Email platform~~ — resolved 2026-08-07
MailerLite, with Kit as fallback. Reversed an earlier Resend + custom-drip plan. Rationale in [06-EMAIL.md](06-EMAIL.md).

### ~~GBP address handling~~ — resolved 2026-08-07
Hide the street address, keep the listing verified, enable service-area mode. Hiding costs no ranking; leaving it public risks suspension. Rationale in [08-LOCAL-GBP.md](08-LOCAL-GBP.md).

### ~~Geo strategy~~ — resolved 2026-08-07
Statewide plus 5 genuinely distinct city pages, anchored on Kim's city. Not templated swaps. See [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md).

### ~~Kim's city~~ — resolved 2026-08-07
**South Jordan.** Serves all of Utah, concentrated in Salt Lake County then Utah County. This is the GBP proximity anchor and it is fine to name in copy — the *street address* stays unpublished. City page set fixed at South Jordan, Salt Lake City, Draper, Sandy, Lehi.

### ~~Does BHRTwithKim25 apply to the free consult?~~ — resolved 2026-08-07
Moot. 25% off $0 is $0, and no customer can be harmed by it, so the terms line needs no carve-out. Separately, the promo banner is suppressed on `/book` — a discount code on the free-consult page invites "do I need a code?" hesitation on the page with the least tolerance for friction.
