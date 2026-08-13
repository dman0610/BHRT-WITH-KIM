# BHRT with Kim — Marketing Build Spec

**For:** Claude Code, working in the bhrtwithkim.com repo
**Owner:** Dallin
**Build window:** Jul 15 – Aug 15 2026

---

## 0. Core directive

Turn the existing site into a lead engine on three fronts:

1. **Google traffic** — rank for local hormone-health searches in Utah, feed the Google Business Profile.
2. **AI answer visibility** — be the source AI assistants name and cite when someone asks about hormone therapy in Utah.
3. **Email acquisition** — capture every quiz-taker and drop them into an automated sequence that ends in a booked consult.

Paid ads point at this site. The site does the converting. Everything else is secondary.

### Business context
- Kim: licensed provider, bioidentical hormone replacement therapy, virtual visits, serving Utah. Specialist practice — this is her focus, not a side service.
- Bookings run through the existing calendar link.
- Audience: women 40–65, symptom-aware, mostly not BHRT-aware.
- Ad landing page = the quiz page. Its headline must message-match the ad copy.
- `CREDENTIAL_TITLE` and the email platform are supplied in a separate step. Use placeholders, wire everything else.

---

## 0.5 Pending inputs — DO NOT SHIP WITHOUT

Two facts are not yet available. Build everything around them; do not invent, guess, or approximate either one.

| Placeholder | What it is | Status |
|---|---|---|
| `CREDENTIAL_TITLE` | Kim's exact licensed title, verbatim | **Pending — Dallin to supply** |
| `EMAIL_PROVIDER` / `EMAIL_API_KEY` | Email platform choice + key | **Pending — Dallin to supply** |

**Marker convention (mandatory).** Anywhere either value would appear in code, copy, schema, or config, leave a literal marker so it is greppable:

```
{/* TODO(CREDENTIAL): replace with CREDENTIAL_TITLE — do not ship */}
```

Rules:
- Never render a guessed credential to the page, `Person` schema, `/llms.txt`, `/about`, or email copy. Omit the credential entirely rather than approximating it.
- Where a credential would appear in visible copy, write around it — "Kim provides bioidentical hormone replacement therapy through virtual consultations across Utah" is publishable today; a fabricated title is not.
- Before any deploy, run `grep -rn "TODO(CREDENTIAL)\|TODO(EMAIL)" .` and report every hit to Dallin. Do not treat a build as done while hits remain.
- Add both items to the repo's task list so they survive across sessions.

Everything else in this spec is unblocked and can be built now.

### Hard constraints
- **Accuracy is the strategy.** Every fact published must be true and verifiable. This is not a compliance tax — it is the mechanism. Google's quality systems and AI retrieval both reward verifiable specificity and punish unverifiable puffery. Honest specifics outperform marketing adjectives.
- **Health compliance:** no prescription promises, no guaranteed outcomes, no second-person symptom claims ("Struggling with hot flashes?" → "Many women over 45 experience hot flashes"). Education plus a consultation CTA.
- **No hidden or cloaked content.** Nothing invisible to users, nothing served differently to crawlers, no keyword stuffing. Everything below works because it is visible and true.
- No medical advice. Educational content only.

---

## 1. Google traffic

### 1.1 Technical foundation
- Unique `<title>` + `meta description` per page. Pattern: `Primary Keyword | BHRT with Kim | Utah`. Title under 60 chars, description 140–155.
- One `<h1>` per page containing that page's target phrase.
- `app/sitemap.ts` and `app/robots.ts` (Next.js built-ins). Canonical URL on every page.
- OpenGraph + Twitter cards so ad clicks and shares render correctly.
- Descriptive `alt` text on every image.
- Core Web Vitals: `next/image` everywhere, zero layout shift, mobile LCP under 2.5s. This audience is on phones — verify on a real device viewport.

### 1.2 Structured data (JSON-LD)
- `MedicalBusiness` on the homepage: name, URL, telephone, `areaServed: Utah`, `medicalSpecialty`, booking URL as `potentialAction`.
- `Person` for Kim: name, `jobTitle` (CREDENTIAL_TITLE), `knowsAbout` (hormone therapy, menopause, perimenopause, hormone testing), linked to the business via `@id`.
- `FAQPage` on the FAQ page and on every symptom page.
- `WebSite` + `SearchAction` on the homepage.
- `Service` entities for each service offered, priced or scoped as accurate.
- Validate all of it in Google's Rich Results Test before shipping.

### 1.3 Content architecture
The homepage targets "BHRT Utah." Symptom pages capture the real volume — women search symptoms, not treatment names.

Build the template now; ship pages incrementally:
- `/symptoms/hot-flashes-night-sweats`
- `/symptoms/menopause-fatigue`
- `/symptoms/brain-fog-memory`
- `/symptoms/hormonal-weight-gain`
- `/symptoms/low-libido`
- `/symptoms/sleep-insomnia`

Each: 600–900 words. Structure — `H1 → direct answer paragraph → why hormones cause it → what BHRT addresses → what a consult involves → FAQ block → booking CTA`.

### 1.4 Local signals
- Consistent NAP in the sitewide footer, matching the Google Business Profile character for character.
- Utah / service-area language on homepage and contact page.
- Reviews component (static placeholder until reviews exist, then display real Google reviews).
- Search Console verification, sitemap submitted post-deploy.

---

## 2. AI answer visibility

When someone asks an AI assistant "who does bioidentical hormone therapy in Utah" or "what helps menopause night sweats," this site should be retrievable, parseable, and citable. AI systems can only represent Kim accurately if the site states plainly and verifiably what she does, who she serves, and what qualifies her. That is the entire job here.

### 2.1 Crawler access
- In `robots.txt`, explicitly allow: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Claude-Web`, `Google-Extended`, `CCBot`, `Bingbot`, `Applebot-Extended`. Default configs often block these silently and kill the channel before it starts.
- No rate-limiting or bot-challenge middleware that blocks them.

### 2.2 Server-rendered content
Anything that only appears after client-side hydration is invisible to most AI crawlers. Audit every key page with JS disabled — if the content isn't in the HTML source, fix it. This is the single most common reason a site is absent from AI answers.

### 2.3 `/llms.txt`
Plaintext file at the root, structured for machine consumption:
- One-line identity statement (who, what, where)
- Kim's credential and specialization
- Services offered, in plain terms
- Service area and visit format (virtual, Utah)
- Conditions and symptoms addressed
- Booking URL
- Links to key pages with a one-line description of each

Keep it factual and current. No marketing voice.

### 2.4 Write for extraction
AI systems quote self-contained factual passages. Structure so any single paragraph stands alone as a correct answer:
- **Lead every section with a direct one-sentence answer**, then elaborate. "Bioidentical hormone replacement therapy uses hormones structurally identical to those the body produces. Kim provides it through virtual consultations throughout Utah."
- **Question-phrased `H2`/`H3` headings** matching how people actually ask: "How long does it take to feel better on BHRT?" not "Timeline."
- **Concrete, checkable facts win citations**; adjectives don't. Publish: what a first consult includes, how long it takes, how lab work is handled, how follow-ups work, what the virtual visit format is, which conditions are addressed, service area. Specificity is what makes a source quotable.
- **FAQ block, 15–20 questions**, each answer 40–80 words, self-contained (no "as mentioned above"), with `FAQPage` schema.
- **State the entity plainly and repeatedly in natural prose** — name, credential, specialty, location. AI retrieval depends on unambiguous entity association. Vague copy loses the association.

### 2.5 Expertise signals (E-E-A-T)
Both Google's quality systems and AI citation behavior weight demonstrated expertise. Make Kim's real qualifications machine-readable and human-visible:
- A dedicated `/about` page: credential, training, years in practice, why she specializes in hormone health, her approach. Written in third person, factual, no superlatives that can't be backed.
- Author attribution on every educational page: byline linked to `/about`, with `Person` schema.
- Cite reputable sources (Mayo Clinic, Endocrine Society, NAMS) where educational claims warrant it. Outbound citation to authoritative sources is a trust signal, not a leak.
- Publish/updated dates on educational content, kept honest.
- Never claim board certification, specialty designation, or credentials she doesn't hold — a single unverifiable claim undermines the entity trust everything else builds. Wait for `CREDENTIAL_TITLE`.

### 2.6 Cross-web consistency
Identical facts on the site, Google Business Profile, Bing Places, Healthgrades, Yelp, and social profiles. AI systems cross-reference; contradictions suppress confidence and cost citations.

---

## 3. Email acquisition

### 3.1 Quiz capture
- Email-capture step in the existing quiz, shown **before results**: "Enter your email to get your results plus Kim's hormone health guide."
- Consent checkbox, unchecked by default: "I agree to receive emails from BHRT with Kim. Unsubscribe anytime."
- Capture: email, first name, quiz answers, timestamp, UTM parameters from the session.
- **Show results immediately on-screen after capture.** Never gate the value behind the inbox — email is the follow-up, not the paywall.

### 3.2 Wiring
- Build a provider adapter behind an env-var config (`EMAIL_PROVIDER`, `EMAIL_API_KEY`) so the platform can be set in the later step without a refactor.
- POST from a server-side route handler only. API key never exposed client-side.
- Tag subscribers by quiz outcome so the sequence can branch later.
- Graceful failure: if the API call fails, still show results, log the error, persist the contact for retry. Never lose a lead to a failed request.

### 3.3 Deliverability
- SPF and DKIM records for the sending domain via DNS.
- Custom sending domain configured, not the platform's shared domain.
- End-to-end test into a real Gmail inbox — confirm Primary tab, not Promotions or Spam.

### 3.4 Sequence (copy supplied separately)
Five emails: quiz results + welcome → what BHRT actually is → myths and safety addressed honestly → Kim's story and approach → direct consult CTA. Educational tone, unsubscribe link in every one, plain-text friendly.

### 3.5 Required pages
- Privacy policy: what's collected, why, retention, unsubscribe.
- Medical disclaimer: educational content only, no doctor-patient relationship formed.
- Both footer-linked. Meta ad review checks for these.

---

## 4. Tracking

- Meta pixel + Conversions API sitewide; events on landing-page view and quiz completion. Meta classifies health domains and may restrict lower-funnel event optimization — campaigns optimize for landing-page views, so that event must be rock solid.
- Lightweight analytics (Vercel Analytics or GA4).
- "How did you hear about Kim?" field in the booking flow — the only reliable attribution for phone and direct bookings.
- UTM parameters preserved through the quiz into the email platform so lead source survives.

---

## 5. Definition of done

- [ ] Unique title, description, single keyworded H1, canonical on every page
- [ ] All JSON-LD validates clean in Rich Results Test
- [ ] sitemap.xml + robots.txt live, AI crawlers explicitly allowed, sitemap submitted
- [ ] Key content present in server-rendered HTML with JS disabled
- [ ] /llms.txt live and accurate
- [ ] FAQ block live, 15+ self-contained answers, schema validated
- [ ] /about page live with author attribution and Person schema on educational pages
- [ ] Symptom page template built, at least one page shipped
- [ ] Quiz captures email with consent; results still shown instantly
- [ ] Test submission lands in Gmail Primary; provider adapter swappable via env
- [ ] SPF/DKIM verified
- [ ] Privacy policy + medical disclaimer live and footer-linked
- [ ] Pixel verified firing in Events Manager
- [ ] "How did you hear about Kim?" live in booking flow
- [ ] Mobile LCP under 2.5s
- [ ] Zero unverifiable claims, zero hidden content, no credential stated until CREDENTIAL_TITLE is supplied
- [ ] `grep -rn "TODO(CREDENTIAL)\|TODO(EMAIL)" .` run and every remaining hit reported to Dallin
