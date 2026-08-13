# 07 — Tracking & Attribution

Last updated: 2026-08-10 · Owner: Dallin

**Status: instrumentation built in Phase 6, 2026-08-10.** Vercel Analytics and Speed Insights are mounted sitewide. All five events fire. The Meta pixel is built but **deliberately dormant** until `NEXT_PUBLIC_META_PIXEL_ID` is set.

Nothing has been deployed, so there is still no data and still no baseline. **Record the baseline on the day of launch** — see below. Skipping it makes every later result arguable.

---

## The health data rule — read this first

**Never transmit quiz answers, symptom selections, severity buckets, or any health-adjacent data to an advertising platform. Not to the Meta pixel, not to Conversions API, not to GA4, not in a URL parameter that lands in an analytics tool.**

This is the hardest rule in this document and it overrides any optimization benefit.

Why it matters here specifically:

- Sending health-adjacent data to ad platforms has produced real litigation and regulatory action against health advertisers, and the exposure sits with the business, not the platform.
- Meta's own terms prohibit sending sensitive health data, and violations can terminate the ad account — losing the paid channel entirely.
- URL parameters get captured by every analytics tool on the page. A redirect to `/results?symptoms=hot-flashes,insomnia` leaks health data to every vendor at once.

**What this permits:** firing a `QuizComplete` event with no parameters. That the event happened is not health data. *What the person answered* is.

**Practical rules:**
- Quiz answers live in component state and go to MailerLite server-side. Nowhere else.
- No health data in URLs, page titles, or event parameters.
- Results render client-side without a query-string round trip.
- The severity bucket never leaves the server route.

### The rule is enforced in code, not by discipline

[lib/analytics.ts](../lib/analytics.ts) is the only path to any analytics destination. **Never call `fbq` or `va` directly.** `track()` applies three gates in order:

1. **Event names are a closed set.** An unknown name is dropped, so a new event cannot be invented at a call site without deliberately editing the taxonomy.
2. **Parameter keys are allowlisted per event.** Anything else is stripped. `QuizComplete` and `EmailCapture` allow *nothing*.
3. **Parameter values are scanned for health vocabulary.** One hit drops the **entire event**, not just the offending key — a payload containing a symptom name means the caller is confused about what it's sending, and the safe response is to send nothing.

In development every gate logs loudly; in production it fails closed and silent. A missing event is a rounding error, a leaked one is a legal problem.

**This is not theoretical.** The first version of `BookingIntent` labelled its source bucket `"symptom-page"` — which trips gate 3 on the word "symptom" and would have silently dropped every booking-intent click originating from a symptom page. A test caught it; the bucket is now `"topic-page"`. Any new bucket must be checked against the tripwire.

### The subtler leak: the URL itself

The Meta pixel's automatic `PageView` sends the current page URL. On this site, some URLs *are* health data:

```
/symptoms/low-libido
/symptoms/hormonal-weight-gain
/symptoms/brain-fog-memory
```

A PageView from one of those tells Meta that an identified browser read a page about that condition. No custom parameter is involved and nothing in `lib/analytics.ts` can prevent it, because the pixel sends it unasked.

**So the pixel does not load on `/symptoms/*` at all.** [components/analytics/MetaPixel.tsx](../components/analytics/MetaPixel.tsx). Consequences, stated so nobody "fixes" it later:

- Symptom-page traffic is invisible to Meta. **That is the intended outcome.**
- Ads point at `/quiz` and `/book`, which are not suppressed, so campaign optimization is unaffected.
- Vercel Analytics still measures symptom pages. It is first-party, cookieless, and not an ad business — the risk was never the measurement, it was handing condition-level data to an advertising company.
- There is deliberately **no PageView re-fire on client-side navigation**. The usual SPA "fix" would send every subsequent URL, including the suppressed ones.

---

## Stack

| Tool | Purpose | State |
|---|---|---|
| **Vercel Analytics** | Pageviews, referrers, custom events | ✅ mounted, cookieless |
| **Vercel Speed Insights** | Real-user Core Web Vitals | ✅ mounted — mobile LCP is a conversion metric here |
| **Google Search Console** | Impressions, queries, indexing | ⬜ needs a deployed URL |
| **Meta Pixel** | Ad measurement | ✅ built, **dormant** until `NEXT_PUBLIC_META_PIXEL_ID` is set |
| **Meta Conversions API** | Server-side match quality | ⬜ only if ads run and the pixel alone proves insufficient |
| **Google Business Profile Insights** | Local visibility | ⬜ needs GBP access |

**The pixel being absent rather than merely inactive matters.** While the env var is blank, no Meta script loads and no cookie is set — so "we haven't started ads" and "no third-party tracker is on the site" are the same state, not two facts someone has to keep in sync.

**Deliberately skipping GA4.** Vercel Analytics plus Search Console covers what's actually needed here, without cookie-consent obligations or the configuration burden GA4 carries. Revisit only if a specific question can't be answered otherwise.

Search Console is the most valuable tool on this list and it's free. It's the only place that shows what people searched before clicking — which directly feeds [02-KEYWORD-MAP.md](02-KEYWORD-MAP.md).

---

## Event taxonomy

Keep it small. Every event needs a decision attached to it.

| Event | Fires on | Parameters | Built |
|---|---|---|---|
| `LandingPageView` | `/quiz` mount | `utm_source`, `utm_medium`, `utm_campaign` | ✅ |
| `QuizStart` | First question answered | none | ✅ |
| `QuizComplete` | Results displayed — **whether or not an email was given** | none | ✅ |
| `EmailCapture` | Consent given and submit fired | none | ✅ |
| `BookingIntent` | Any click toward `/book`, `#booking`, or a `tel:` link | `source_page` | ✅ |

**Note what is absent from every parameter list: anything about the person's health.** `EmailCapture` does not even carry the email address — hashing an identifier for match quality belongs server-side in Conversions API, never in a browser event.

`BookingIntent` is one delegated listener in [components/analytics/BookingIntent.tsx](../components/analytics/BookingIntent.tsx), not a wrapper around every CTA. Booking links appear in the navbar, footer, promo banner, every content page, the services page and the quiz results — wrapping them would mean marking half the site `"use client"` to satisfy analytics, which is backwards for a project whose primary goal is being legible to crawlers that don't run JavaScript.

`source_page` is a **coarse bucket**, never a pathname:

`home` · `topic-page` · `service-area` · `article` · `services` · `quiz` · `faq` · `about` · `contact` · `guide` · `other`

### Meta specifics

Meta classifies health domains and restricts lower-funnel event optimization. Campaigns will optimize for **landing page views**, so `LandingPageView` must be rock solid — it's the event the ad algorithm actually uses.

Conversions API server-side improves match quality, but send only the standard identifiers (hashed email, IP, user agent) — never custom health parameters.

---

## Attribution

The hard part: bookings happen in a Healthie iframe, and **we cannot see inside it.** Cross-origin iframes don't expose completion events to the parent page. Any attribution model assuming we can track booking completion on-site is wrong.

Three layers, in order of reliability:

1. **"How did you hear about Kim?"** — unglamorous, self-reported, and still the most reliable attribution available for a practice this size. It's the only thing that catches phone calls, referrals, the print flyer, and direct traffic.

   ✅ **Live on the contact form** ([ContactForm.tsx](../components/sections/ContactForm.tsx)), optional by design — a required field costs more submissions than the answer is worth. Options are in `HEAR_ABOUT_OPTIONS`. The answer goes to Kim's inbox with the message and **never to an analytics or ad platform**.

   ⬜ **Still worth adding inside Healthie's intake**, where it catches people who book without ever using the contact form. That is configured in the Healthie dashboard, not in this codebase.
2. **UTM parameters** — preserved from ad click through the quiz into MailerLite as custom fields, so lead source survives into the email platform.
3. **`BookingIntent`** — clicks toward the booking anchor. A proxy for bookings, not a count of them. Treat the gap between intent clicks and actual bookings as unknown, not as a conversion rate.

Because of the iframe limitation, **the honest primary metric is bookings reported by Kim, reconciled against the "how did you hear" field.** A weekly number from her calendar is worth more than any dashboard here.

---

## Baseline — do this before launch

Snapshot on the day of launch, so improvement is provable:

- [ ] Search Console verified and connected
- [ ] Current indexed page count
- [ ] Current impressions/clicks (likely near zero — record it anyway)
- [ ] GBP views, searches, actions
- [ ] Existing Google review count
- [ ] The five AI test prompts from [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md), results logged
- [ ] Current quiz completions (unknown — nothing is instrumented)

**A near-zero baseline is a good baseline.** It makes the delta unambiguous. Skipping it makes every later result arguable.

---

## Review cadence

**Weekly (5 min):** bookings, quiz completions, subscribers added, anything broken.

**Monthly (30 min):** Search Console queries and impressions, top landing pages, email sequence performance, GBP insights, AI prompt re-test, new review count.

**Quarterly:** what content actually produced bookings, what to build next, what to kill.

The monthly Search Console query review is where the real insight lives — actual searches that reached the site consistently differ from the keywords planned for, and that gap is the best content roadmap available.

---

## Privacy obligations

- ✅ `/privacy` discloses Vercel Analytics and the Meta pixel, including the fact that the pixel is not loaded on symptom pages and why.
- Vercel Analytics is cookieless — no consent banner needed for it alone.
- **Adding the Meta pixel changes this.** It sets cookies and tracks across sites. `/privacy` is written conditionally ("if we are running ads") so it stays accurate on both sides of the switch — otherwise the policy would silently become false the moment an env var is set in Vercel, with nothing in the deploy to prompt an update.
- **Re-read `/privacy` whenever an env var in `.env.example` changes.** That is the trigger; there is no automated one.
