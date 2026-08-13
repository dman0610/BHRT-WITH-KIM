# 11 — Launch Runbook

Last updated: 2026-08-10 · Owner: Dallin

**Everything in Phases 1–6 is built and verified. None of it is live.** This file is the ordered procedure for changing that. [10-ROADMAP.md](10-ROADMAP.md) tracks *status*; this one is *what to actually do*, in order, with the reason each step sits where it does.

---

## The single most important fact in this document

**The production site currently tells buyers that lab work is included in both pricing tiers. It is not.**

That is a live misstatement of what a patient receives, from a licensed healthcare provider. It was the defect that started this whole project, it was fixed in code on 2026-08-07, and **it is still on the internet today** because nothing has been deployed.

Every other item here can wait. That one is why Step 1 is Step 1.

---

## Step 1 — Deploy

Nothing else in this file works until the code is live. Analytics has nothing to measure, Search Console has nothing to verify, and the pricing correction has not happened.

- [ ] Confirm `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set in Vercel — **the contact form and the quiz-lead fallback both silently fail without it.** This is the one variable that must exist before launch, not after.
- [ ] `npm run lint` and `npm run build` clean locally
- [ ] Merge to `main`, confirm the Vercel deployment succeeds
- [ ] Load the live site and verify by eye:
  - [ ] `/services` says **medications and lab fees are not included** on both options
  - [ ] No "12-Week Vitality Reset Program" anywhere
  - [ ] No lab dollar figures anywhere
  - [ ] `/book` H1 states the free call is **about 15 minutes**
  - [ ] Footer shows `bhrtwithkim@gmail.com`, not the personal address
  - [ ] The promo banner shows and the code copies
- [ ] Submit the contact form as a test and confirm it reaches the inbox

**If the deploy has to be rolled back, the pricing fix goes with it.** Prefer fixing forward.

---

## Step 2 — Baseline, before anything can move it

Do this the same day, before publicising anything. A near-zero baseline is a *good* baseline — it makes the delta unambiguous. Skipping it makes every later result arguable.

- [ ] Google Search Console — add the property, verify via the Vercel DNS you already control
- [ ] Submit `https://bhrtwithkim.com/sitemap.xml` (35 URLs)
- [ ] Record indexed page count (expect ~0)
- [ ] Record impressions and clicks (expect ~0 — **write it down anyway**)
- [ ] Record current Google review count and GBP views/searches/actions
- [ ] Run the five AI test prompts from [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md) and paste the answers verbatim into a dated note
- [ ] Confirm Vercel Analytics is receiving pageviews

The AI prompt baseline is the one people skip and later regret. It is the only evidence of the before-state for the entity-visibility work, and it cannot be reconstructed after the fact.

---

## Step 3 — Google Business Profile

The highest-leverage local work, and independent of everything else. Full rationale in [08-LOCAL-GBP.md](08-LOCAL-GBP.md).

- [ ] Confirm ownership of the existing listing
- [ ] **Hide the street address; enable service-area mode.** Kim works from home. Hiding costs no ranking — Google still uses the registered address for proximity — and a public home address on a service-area business is one of the most-reported suspension triggers.
- [ ] Set the service area to **Salt Lake County and Utah County**, not "Utah" statewide
- [ ] Name, phone, and website character-for-character identical to the site
- [ ] Description opens with the canonical entity statement from [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md)
- [ ] Hours — **blocked, unknown.** Do not guess.
- [ ] Then Bing Places and Apple Business Connect, same details

---

## Step 4 — Reviews

Real Google reviews are the trust signal that replaces the four unattributed testimonials.

- [ ] Agree the ask process with Kim — after care, in a separate conversation
- [ ] Target 10 in 90 days

**Two rules that cannot bend:**

1. **Never condition the discount, or anything of value, on leaving a review.** It violates Google's policies and FTC endorsement guidance and is a GBP suspension trigger. The 25% code brings someone in; they receive care; the review is asked for separately and unconditionally. Never both in one message.
2. **Kim must never confirm or deny that a reviewer is a patient** in a public reply. Not "thank you for trusting me with your care." A generic thank-you only.

---

## Step 5 — "How did you hear about Kim?" inside Healthie

Ten minutes, no code, and it closes the biggest measurement hole in the project.

Bookings complete inside Healthie's embedded booking widget. It runs on Healthie's servers, not ours, so **we cannot see when a booking finishes** — no pixel or analytics tool can. That means phone calls, word-of-mouth, and flyer scans are otherwise completely invisible.

The site's contact form already asks the question. Most people who book never touch that form, so the same question has to exist where the booking actually happens.

- [ ] Log in to Healthie (Kim's account — she owns it)
- [ ] Find the intake form attached to the free consultation offering
- [ ] Add one optional question: **"How did you hear about Kim?"**
- [ ] Use the same six options as the site so the answers can be pooled: Google search · Facebook or Instagram · Friend or family · Flyer or event · Another website · Other
- [ ] Book a test appointment and confirm the question appears and the answer reaches Kim

Keep it optional. A required field here costs bookings, and the answer is worth less than a booking.

---

## Step 6 — Ads

Only after `/privacy` is live (it is, once Step 1 lands) and the baseline exists.

- [ ] Set `NEXT_PUBLIC_META_PIXEL_ID` in Vercel
- [ ] Confirm the pixel fires on `/quiz` and `/book`
- [ ] **Confirm it does NOT fire on `/symptoms/*`** — this is deliberate, see [07-TRACKING.md](07-TRACKING.md). If it does fire there, something has been broken.
- [ ] Inspect the event payloads: **zero health data in any of them**
- [ ] Re-read `/privacy` and confirm it still describes reality

**Kim's print flyer will be rejected as-is.** "You don't have to push through" plus a second-person symptom list trips Meta's personal-attributes policy, the most common rejection reason for health advertisers. Rewrite to population framing before submitting — approved patterns in [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md).

Also: the flyer's "FREE PHONE CONSULTATION + LAB ORDER" reads as free labs. The site has been corrected to say labs are not included; repeating the ambiguity in paid media is a bait-and-switch complaint risk.

---

## Step 7 — Email, LAST

**Dallin's call, 2026-08-11: email goes last.** Everything above ships without it.

That ordering is defensible — the capture form already works and falls back to emailing leads to Kim's inbox, so no lead is lost while the sequence doesn't exist. The cost is that those leads get a personal reply instead of an automated sequence, which is fine at low volume and stops being fine as volume grows. **Revisit once the quiz produces more leads than Kim wants to answer by hand.**

⚠️ **The fallback that makes this safe depends on the Web3Forms key from Step 1.** If that key is missing, leads are lost silently — no error, no bounce, nothing in an inbox. Confirm it before relying on this ordering.

Detail in [06-EMAIL.md](06-EMAIL.md).

- [ ] MailerLite account; health/wellness review passed
- [ ] `Quiz Leads` group + the 7 custom fields
- [ ] `MAILERLITE_API_KEY` and `MAILERLITE_GROUP_ID` in Vercel
- [ ] Sending address on `bhrtwithkim.com` + SPF, DKIM, DMARC — **a gmail.com From relayed by an ESP fails DMARC alignment and will not be accepted**
- [ ] PO box for the CAN-SPAM footer — **not the home address**, which would undo Step 3
- [ ] Lead magnet — the capture screen already promises "Kim's hormone health guide"
- [ ] End-to-end: subscriber created with correct fields, email 1 lands in Gmail **Primary**, unsubscribe works

---

## Step 8 — Post-launch checks

**Run `npm run build && npm run verify` before every deploy.** Ten sections, no dependencies, fails the build on regressions — including the safety inclusions on the symptom pages (the 988 line, the postmenopausal-bleeding red flag) that must never be edited out.

- [ ] JS-disabled pass over `/`, `/services`, `/book`, `/faq`, a symptom page, a city page
- [ ] Mobile LCP under 2.5s on a real phone, not just Lighthouse — Speed Insights will show real-user numbers within a few days
- [ ] Rich Results Test on `/`, `/faq`, a symptom page, a city page
- [ ] Confirm `/llms.txt` and `/robots.txt` serve correctly
- [ ] Confirm the four security headers are present on the live origin
- [ ] **Book a test appointment** — confirm the Healthie iframe still loads with the headers applied

### Accessibility items that need a real browser

Static structure is verified by `npm run verify`; these need a keyboard and a screen reader and could not be closed pre-deploy:

- [ ] Tab through every page — focus visible on all interactive elements (`--ring` is `sage`)
- [ ] Tap targets ≥44×44px, especially the nav, now 8 items plus a CTA
- [ ] Form errors announced to assistive technology
- [ ] `axe` scan on `/`, `/services`, `/quiz`, a symptom page

### Next.js advisories — assessed, staying pinned at 16.2.2

Recorded so this is a decision rather than an oversight. `npm audit --omit=dev` reports Next advisories fixed in 16.3.x. Assessed as not applicable to this app:

| Advisory class | Why it doesn't apply |
|---|---|
| Middleware / proxy bypass | No middleware in this project |
| i18n routing bypass | No i18n |
| Server Actions DoS | No Server Actions |
| Custom-server SSRF | Vercel-managed, no custom server |
| Cache Components DoS | Cache Components not enabled |

Image Optimization DoS is the one with real surface, since `next/image` is used. Mitigated in practice by Vercel's own limits, and reduced further now that the largest source image is 86 KB rather than 7 MB.

**Revisit after the site is live and stable.** Upgrading a modified Next immediately before a first deploy risks breaking a build that is currently clean and fully verified — [AGENTS.md](../AGENTS.md) flags this as a Next with breaking changes versus upstream.

---

## Review cadence, once live

**Weekly (5 min):** bookings from Kim, quiz completions, subscribers added, anything broken.

**Monthly (30 min):** Search Console queries and impressions, top landing pages, email performance, GBP insights, AI prompt re-test, new review count.

**Quarterly:** what actually produced bookings, what to build next, what to kill.

The monthly Search Console query review is where the real insight lives. Actual searches that reached the site consistently differ from the keywords planned for, and that gap is the best content roadmap available.

---

## Still blocked on Kim

Each is simply absent from the site until answered. Absence is correct; approximation is not.

- Business hours *(blocks the GBP listing being complete)*
- Whether insurance is accepted *(a top-3 pre-booking FAQ, currently unanswerable)*
- Whether the four published credentials are the complete list
- Utah license number and NPI *(would strengthen `Person` schema and enable health-directory citations)*
- Legal business entity name
- Whether she will review the existing articles *(gates the `reviewedBy` byline)*
- Testimonial provenance *(they stay unmarked-up as schema regardless)*

Copy-pasteable list in [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).
