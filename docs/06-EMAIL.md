# 06 — Email Acquisition

Last updated: 2026-08-10 · Owner: Dallin

**Current state: the capture flow is built and tested; the list is not connected yet.** The quiz collects email, name, consent, severity, service interest, stage, and UTMs, and posts them to `/api/quiz-capture`. Until MailerLite credentials exist, that route falls back to emailing each lead to Kim so nobody is lost. Connecting the account is the last step.

---

## Platform decision: MailerLite

**Decided 2026-08-07.** Recorded here so it isn't relitigated.

The original plan was Resend + a custom drip runner. That was reversed after weighing what running email actually involves for a first-time sender.

**What the platform does that we would otherwise have to build and operate:**

| Job | Why it matters |
|---|---|
| Scheduling the drip | The obvious one, and the least important |
| Unsubscribe handling | CAN-SPAM requires honoring within 10 days; penalties are per-email |
| Bounce processing | Keep mailing dead addresses and domain reputation degrades until *everything* lands in spam |
| Complaint handling | Gmail starts filtering above roughly a 0.3% complaint rate |
| Sending reputation | Managed pools and warmup |
| Open/click reporting | Without it you cannot tell a working sequence from a broken one |

**The failure mode is what decided it.** A hand-rolled sender doesn't error when it goes wrong — it just quietly lands in spam while every dashboard stays green. A first-time sender has no way to detect that. A platform surfaces it.

MailerLite specifically: automations are on the free tier rather than gated behind a paid plan (Kit historically gates sequences), free to roughly 1,000 subscribers, then about $10–15/mo. **Verify current pricing before committing** — email pricing changes constantly.

**Risk:** MailerLite manually reviews health and wellness signups and can be strict. If they decline, **Kit is the fallback** — and because everything goes through the adapter, that swap is one file.

**Not chosen and why:** Resend (no automation, no dashboard, we own deliverability); Kit (better builder, but sequences may cost ~$29/mo); building on Web3Forms (no list management, no unsubscribe, not a marketing tool).

---

## What we build vs. what we configure

**Built (Phase 4, 2026-08-10):**
- ✅ `lib/email/provider.ts` — adapter interface, `Lead` type, no-op provider
- ✅ `lib/email/mailerlite.ts` — implementation; returns the no-op when unconfigured
- ✅ `lib/email/fallback.ts` — emails the lead to Kim when the provider fails
- ✅ `app/api/quiz-capture/route.ts` — server-side route handler
- ✅ [`EmailCaptureStep`](../components/quiz/EmailCaptureStep.tsx) in the quiz

**Do not build:** lead database, cron job, drip runner, unsubscribe route, bounce/complaint webhooks, email templates in code. All of it is platform-side.

---

## Capture flow

```
Quiz Q7 answered
   ↓
Email capture step  ← the only new screen
   ↓
POST /api/quiz-capture  (fire and continue — never blocks)
   ↓
Results render immediately, regardless of API outcome
```

### The one inviolable rule

**Show results immediately after capture, always.** Email is the follow-up, never the paywall. If the API call fails, times out, or the user's connection drops, results still render. A user who gives an email and gets an error screen is lost twice — as a lead and as a patient.

### Capture screen spec

- **Headline:** "Where should we send your results?"
- **Subhead:** "Get your assessment plus Kim's hormone health guide."
- Fields: first name, email
- **Consent checkbox, unchecked by default:** "I agree to receive emails from BHRT with Kim. Unsubscribe anytime." Links to `/privacy`.
- Submit: "See My Results"
- **Skip link: "Show my results without email."** Required — gating results behind email violates the rule above and depresses quiz completion. Some leads are worth less than the trust.

### Data captured

| Field | Source |
|---|---|
| `email`, `name` | Form |
| `severity` | `getOverallSeverity()` — [lib/constants.ts:471](../lib/constants.ts#L471) |
| `top_services` | `calculateQuizResults()` top 3 — [lib/constants.ts:450](../lib/constants.ts#L450) |
| `stage` | Quiz Q7 (peri / post / unsure / early) |
| `utm_source`, `utm_medium`, `utm_campaign` | URL params, read on quiz entry and held in state |
| `consent_at` | Timestamp — required proof of consent |

UTMs must be read when the user **lands** on the quiz and carried through, not read at submit — by then the params may be gone from the URL.

---

## Architecture

```ts
// lib/email/provider.ts — the only interface anything else imports
export interface EmailProvider {
  subscribe(lead: Lead): Promise<{ ok: boolean; error?: string }>;
}
```

`app/api/quiz-capture/route.ts`:
1. Validate email format and that consent is `true`. **Reject without consent** — no exceptions.
2. Call `provider.subscribe(lead)`.
3. On failure: retry once.
4. Still failing: send the lead details to Kim's inbox as a fallback, and log. **Nobody is lost.**
5. Return 200 either way. The client never blocks on this.

**The API key is server-side only.** No `NEXT_PUBLIC_` prefix, ever. Note that both existing forms use `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` client-side — acceptable for Web3Forms' design, not a pattern to copy here.

```
MAILERLITE_API_KEY=…       # server-only
MAILERLITE_GROUP_ID=…
```

### MailerLite structure

- **Group:** `Quiz Leads` — joining it triggers the automation
- **Custom fields:** `severity`, `top_services`, `stage`, `utm_source`, `utm_medium`, `utm_campaign`

Severity is stored as a field rather than a separate group so the sequence can branch later without restructuring the list.

---

## The three email systems, kept straight

Easy to conflate. They are unrelated.

| System | What it does | Where it's configured | Status |
|---|---|---|---|
| **Published contact address** | The address shown in the footer and on `/contact` | `lib/site.ts` | ✅ `bhrtwithkim@gmail.com` |
| **Web3Forms** | Delivers "Send a Message" and newsletter form submissions to Kim's inbox | **web3forms.com dashboard** — *not* in this repo | ⚠️ Destination needs checking |
| **MailerLite** | The 5-email nurture sequence for quiz leads | MailerLite account | ⚠️ Code ready, account not created |

**Web3Forms is the one people forget.** Both [ContactForm.tsx:58](../components/sections/ContactForm.tsx#L58) and [Footer.tsx:67](../components/layout/Footer.tsx#L67) `POST` to `api.web3forms.com` with `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. Web3Forms then emails the submission onward.

**The destination address lives in the Web3Forms dashboard, not in this codebase.** Changing where form submissions land means logging into Web3Forms — editing `lib/site.ts` will not do it. Grepping the repo for the destination will find nothing, because it isn't here.

It is also not a marketing tool: no list, no unsubscribe, no segmentation. It just forwards form submissions. MailerLite does not replace it and it does not replace MailerLite.

---

## Domain authentication

Do this **before** the first send. Sending from an unauthenticated domain is the fastest route to the spam folder, and reputation damage is far harder to undo than to avoid.

Three DNS records, in plain terms:

| Record | What it does |
|---|---|
| **SPF** | Lists who is allowed to send as your domain |
| **DKIM** | Cryptographically signs mail so it can't be forged |
| **DMARC** | Tells receivers what to do when SPF/DKIM fail |

MailerLite provides the exact SPF and DKIM values after adding the domain. DMARC is ours to add — start permissive and tighten later:

```
_dmarc.bhrtwithkim.com   TXT   "v=DMARC1; p=none; rua=mailto:dmarc@bhrtwithkim.com"
```

`p=none` monitors without rejecting. Move to `p=quarantine` after a few weeks of clean reports. **Do not start at `p=reject`** — a misconfiguration silently destroys all mail from the domain, including Kim's own.

### The From address cannot be a Gmail address

`bhrtwithkim@gmail.com` is the right **receiving** address and is already live sitewide. It cannot be the campaign **sender**.

A `gmail.com` From address relayed through MailerLite fails DMARC alignment — MailerLite's servers aren't in Gmail's SPF record and can't sign with Gmail's DKIM key. Since Gmail and Yahoo tightened bulk-sender rules in February 2024, this is enforced rather than merely advised, and providers block it at signup.

**What's needed is smaller than a mailbox:** DNS access to `bhrtwithkim.com`, the SPF/DKIM records MailerLite generates, a DMARC record, and a From address on the domain with replies forwarded to `bhrtwithkim@gmail.com`. No second inbox to monitor.

Until a sending address exists on the domain, the sequence cannot go live. Everything else in Phase 4 is built and tested — see `10-ROADMAP.md`.

---

## The sequence

Five emails, authored in MailerLite's editor. **Copy changes need no deploy** — that's the point of this architecture.

Follows [05-CONTENT-STANDARDS.md](05-CONTENT-STANDARDS.md) exactly: no outcome promises, no diagnosing the reader, no unrecognized conditions.

| # | Timing | Working subject | Job |
|---|---|---|---|
| 1 | Immediate | "Your hormone assessment results" | Deliver what was promised. Results recap + the guide. Minimal pitch. |
| 2 | Day 2 | "What bioidentical actually means" | Educate. Most subscribers don't know the term. |
| 3 | Day 5 | "The BHRT questions people actually ask" | Address risk and safety **honestly**, including what the evidence doesn't settle. Cite NAMS and the Endocrine Society. |
| 4 | Day 9 | "Why Kim does this work" | Kim's own perimenopause story. Trust, not pitch. |
| 5 | Day 14 | "What happens in a first visit" | The consult CTA. Concrete process + transparent pricing. |

**Email 3 is the most important one.** Safety is the single biggest objection in this category, and honestly addressing it — including uncertainty — converts better than avoiding it. Avoidance reads as evasion to an audience that has already been Googling.

**Email 1 must actually deliver the guide.** It doesn't exist yet. See [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

Every email: plain-text friendly, unsubscribe link, mobile-first, sent from an address on `bhrtwithkim.com` (not the Gmail — see above) with replies forwarding to `bhrtwithkim@gmail.com`.

---

## Deliverability rules

For a first-time sender, in priority order:

1. **Never buy or import a list.** One purchased list can permanently burn a domain.
2. **Warm up.** Don't send 500 emails on day one. Volume grows naturally here anyway, which is an advantage.
3. **Consent must be real.** Unchecked box, explicit action. Pre-checked consent is illegal in several jurisdictions and is the fastest way to generate complaints.
4. **Make unsubscribing easy.** Hard-to-find unsubscribe links convert into spam complaints, which are far more damaging.
5. **Prune non-openers** after ~6 months. Sending to dead addresses drags reputation down.
6. **Watch complaint rate above all.** Above 0.3% is a problem; above 0.5% is an emergency.

### Health-vertical specifics

- Avoid spam-trigger phrasing in subject lines: "cure", "miracle", "guaranteed", "doctor's secret".
- Don't put symptom lists in subject lines — filters treat that pattern as pharma spam.
- **Never include quiz answers or health details in the email subject or preheader.** These render in notification previews on a lock screen, potentially in front of someone else.

---

## Metrics

| Metric | Healthy | Act if |
|---|---|---|
| Capture rate (of completions) | 50–70% | Below 40% — form friction |
| Open rate, email 1 | 50%+ | Below 35% — deliverability |
| Open rate, emails 2–5 | 30–45% | Below 25% — subject lines or fatigue |
| Click rate | 3–8% | Below 2% — weak CTA |
| Unsubscribe rate | Under 0.5% | Above 1% — expectation mismatch |
| **Complaint rate** | Under 0.1% | **Above 0.3% — stop and diagnose** |
| Booking rate | 3–8% over 90 days | The actual scoreboard |

Email 1's open rate is the deliverability canary. It's the most-anticipated email in the sequence — if it underperforms, the problem is inbox placement, not copy.

---

## Legal

- **Consent:** explicit, unchecked by default, timestamped, with the consent language stored.
- **CAN-SPAM:** working unsubscribe honored within 10 days, valid physical postal address in every commercial email, accurate From and Subject lines.

**The postal address requirement is a genuine conflict.** CAN-SPAM requires a physical mailing address in commercial email, and the address policy in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) keeps Kim's home address unpublished. Resolve with a **PO box or virtual mailbox** before the first send — do not resolve it by publishing the home address. Tracked in [OPEN-QUESTIONS.md](OPEN-QUESTIONS.md).

- **`/privacy` must exist before capture goes live.** It's linked from the consent checkbox and checked during Meta ad review.
- **Health data:** quiz answers are health-adjacent. Never pass them to advertising platforms — see [07-TRACKING.md](07-TRACKING.md).

---

## Setup checklist

- [ ] MailerLite account created; health/wellness review passed
- [x] Business inbox exists — `bhrtwithkim@gmail.com` (receiving)
- [ ] Sending address created on `bhrtwithkim.com`, replies forwarded to the Gmail
- [ ] Domain added; SPF + DKIM verified; DMARC at `p=none`
- [ ] Custom sending domain configured
- [ ] PO box / virtual address obtained for the CAN-SPAM footer
- [ ] `Quiz Leads` group + 6 custom fields created
- [ ] `/privacy` live
- [ ] Lead magnet written
- [ ] Five emails drafted in MailerLite
- [ ] Capture step live with unchecked consent + skip link
- [ ] Test submission: subscriber appears with correct fields
- [ ] Email 1 lands in Gmail **Primary** (not Promotions, not Spam)
- [ ] Failure test: key removed → results still render, fallback reaches Kim
- [ ] Unsubscribe click actually removes the subscriber
