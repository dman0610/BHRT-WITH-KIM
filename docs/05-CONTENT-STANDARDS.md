# 05 — Content Standards

Last updated: 2026-08-10 · Owner: Dallin

**This file is loaded into every Claude session via [CLAUDE.md](../CLAUDE.md). Nothing gets published that violates it.**

---

## The core principle

**Accuracy is the marketing strategy, not a constraint on it.**

This is not a compliance tax grudgingly paid. Google's quality systems and AI retrieval both reward verifiable specificity and punish unverifiable puffery. "Initial consultations are $200 and labs run $250" outperforms "compassionate, expert care" on every channel in this plan, because the first can be quoted and checked and the second cannot.

Where a fact is missing, **write around the gap** rather than filling it. "Kim provides bioidentical hormone replacement therapy through virtual consultations across Utah" is publishable today. A guessed credential, a made-up consult duration, or an invented success rate is not.

---

## Health compliance rules

Kim is a licensed provider. Marketing copy for a licensed healthcare practice carries real regulatory exposure — FTC substantiation requirements for health claims, and state nursing board advertising rules.

### Never publish

| Rule | Why |
|---|---|
| No outcome guarantees or efficacy promises | Requires substantiation we don't have |
| No "cure", "fix", "eliminate", "reverse", "proven", "guaranteed" | Unsubstantiated efficacy claims |
| No specific timelines for relief | Varies per person; unverifiable as stated |
| No diagnosing the reader | Content is educational; diagnosis requires a clinical relationship |
| No unrecognized diagnoses stated as fact | "Adrenal fatigue" is not a recognized medical diagnosis |
| No prescription promises | Prescribing follows evaluation, never marketing |
| No success rates or statistics without a citation | Substantiation |
| No before/after or implied transformation claims | Same |
| No credential beyond the four verified in [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) | Entity trust |

### Second person — the nuance that matters

The rule is **not** "never say you." It's about *where*:

- **Marketing and content pages:** describe the population, not the reader. The reader hasn't been evaluated, so copy that tells them what they have is diagnosing a stranger.
  - ❌ "Struggling with hot flashes? Your estrogen is dropping."
  - ✅ "Many women in perimenopause experience hot flashes as estrogen levels fluctuate."
- **Quiz results:** the user opted in and answered questions about themselves, so addressing them directly is correct and normal. The line is between *reflecting their answers* and *diagnosing them*.
  - ❌ "You're experiencing significant hormonal disruption."
  - ✅ "Your answers point to patterns that many women in perimenopause describe."

Applying third person blanket-style to quiz results would make them incoherent. Applying second-person diagnosis to landing pages is a real liability. Know which surface you're writing.

---

## Remediation queue — ✅ fixed in code, ⚠️ still live on production

**Both halves of that are true and the distinction matters.** Every string below was rewritten in Phase 1 and machine-verified absent from all rendered HTML. But **nothing has been deployed**, so the production site still serves the original copy.

Do not re-do this work. Do not assume it's live either. The record below is kept as the reference for *why* each rewrite reads the way it does — future copy has to clear the same bar.

### `lib/constants.ts` — quiz callouts

**[:213](../lib/constants.ts#L213)**
> ❌ "…estrogen and progesterone directly regulate your sleep architecture. **This is very treatable.**"
> ✅ "…estrogen and progesterone both play a role in regulating sleep. Sleep changes are one of the most common things women bring to a hormone evaluation."

**[:250](../lib/constants.ts#L250)** — highest priority; states a non-diagnosis as fact *and* promises response
> ❌ "Relying on caffeine to function often signals **adrenal fatigue** or thyroid dysfunction — both of which **respond well to the right support.**"
> ✅ "Persistent reliance on caffeine is often worth evaluating alongside thyroid and adrenal function, which are part of a comprehensive hormone workup."

**[:287](../lib/constants.ts#L287)**
> ❌ "Brain fog isn't just stress — it's often estrogen-related and **very treatable.**"
> ✅ "Cognitive changes like word-finding difficulty are commonly reported during perimenopause, and estrogen's role in cognition is an active area of research."

**[:331](../lib/constants.ts#L331)** — efficacy claim plus a timeline promise
> ❌ "…approaches that **work beautifully for most women — often faster than expected.**"
> ✅ "Hot flashes and night sweats are among the most commonly reported perimenopausal symptoms, and there are both lifestyle and hormonal approaches worth discussing with a provider."

### `lib/constants.ts` — severity messages

**[:528](../lib/constants.ts#L528)**
> ❌ "Many women leave their first conversation with more clarity than they've had in years." *(unverifiable outcome statistic)*
> ✅ "A first conversation is mostly about understanding your history and what you've been noticing."

**[:532](../lib/constants.ts#L532)**
> ❌ "These patterns have root causes, and **those causes have solutions.**"
> ✅ "These patterns often have identifiable causes worth investigating."

**[:537](../lib/constants.ts#L537)**
> ❌ "…it's not inevitable, and there are **targeted approaches that work.**"
> ✅ "…and it's worth discussing with a provider who works in this area specifically."

**[:538](../lib/constants.ts#L538)**
> ❌ "Kim hears stories like yours every day, and **she's seen what's possible** when the right support is in place."
> ✅ "These are the conversations Kim has most often. A consultation is a chance to look at the full picture together."

### Elsewhere

**[lib/constants.ts:78](../lib/constants.ts#L78)** — "Evidence-based 8-hour sleep protocols" implies a citable basis for a specific figure. Either cite it or write "Sleep protocols addressing common causes of disrupted sleep."

**[components/sections/HeroFlyer.tsx:124](../components/sections/HeroFlyer.tsx#L124)** — "Trusted Education. **Proven Care.**" → "Trusted Education. Personalized Care."

**Keep as-is:** the severity *headlines* ("You Deserve to Feel Like Yourself Again") are aspirational rather than clinical, and `QUIZ_DISCLAIMER` at [:542](../lib/constants.ts#L542) is well-written — it explicitly says "not a medical diagnosis" and notes Kim reviewed the questions personally.

---

## Paid ad copy — stricter than the website

Meta enforces a **personal attributes** policy: ad copy may not imply knowledge of the viewer's personal characteristics, including health conditions. This is stricter than anything on the website and is the most common rejection reason for health advertisers.

Rejected patterns — direct second person about a condition:
- ❌ "You don't have to push through."
- ❌ "I can help you with: hot flashes, mood swings, low libido…"
- ❌ "Struggling with menopause weight gain?"

Approved patterns — third person about a population, or first person about the provider:
- ✅ "Many women in perimenopause experience hot flashes, disrupted sleep, and brain fog."
- ✅ "Kim Yadon, FNP-C provides virtual hormone care to women across Utah."
- ✅ "Bioidentical hormone therapy, explained."

**Kim's print flyer uses the rejected pattern** — "You don't have to push through" plus a second-person symptom list. Fine as print, where no platform policy applies. It must be reframed before becoming a Meta ad.

### Offer wording in ads

The free consultation includes a free lab *order*, not free labs. The flyer's "FREE PHONE CONSULTATION + LAB ORDER" can be read as free labs — and since Kim has explicitly corrected the site to state labs are not included, repeating that ambiguity in paid media is a bait-and-switch complaint risk.

Approved: *"Free phone consultation. Lab order provided at no charge — lab fees billed separately."*

Also: "evidence-based hormone care" appears on the flyer. If it migrates to the site or an ad, it needs a citation behind it.

---

## Disclaimers

| Surface | Requirement |
|---|---|
| Sitewide footer | One-line medical disclaimer + link to `/disclaimer` |
| `/disclaimer` | Full text: educational only, no physician-patient relationship formed, seek qualified care |
| Quiz — **before** starting | Short note that this is educational, not diagnostic. Currently only shown *after* the severity verdict. |
| Quiz results | Existing `QUIZ_DISCLAIMER`, keep |
| Every symptom page | Standard educational disclaimer block |
| Every article | Existing per-article disclaimer, keep |

Moving the quiz disclaimer to appear *before* the assessment is a small change with real weight: a disclaimer shown only after a graded verdict has already been delivered is doing very little work.

---

## Citations

Cite when making any factual claim about physiology, prevalence, or treatment.

**Acceptable sources:** Mayo Clinic, Cleveland Clinic, The Menopause Society (NAMS), Endocrine Society, ACOG, NIH/NIA, peer-reviewed literature via PubMed.

**Not acceptable:** supplement retailers, other clinics' marketing pages, wellness blogs, AI-generated summaries.

Link out directly. Outbound citation to authoritative sources is a trust signal, not lost link equity — and it's one of the clearest differentiators between content that gets cited by AI systems and content that doesn't.

The existing articles already cite PubMed, NAMS, NIEHS, NCI, and EWG. Keep that standard.

---

## Voice

Kim's voice on `/about` is first person and warm. Educational pages are third person and factual. Both are correct — don't homogenize them.

**Sound like:** a knowledgeable friend who happens to be a nurse practitioner. Direct, warm, specific, unhurried. Respects the reader's intelligence.

**Never sound like:** a supplement ad, a symptom checker, a pharmaceutical brochure, or a hype funnel.

| Do | Don't |
|---|---|
| "Estrogen fluctuates unpredictably during perimenopause, which is why symptoms come and go." | "Hormone chaos is wrecking your life!" |
| "A first visit covers your history, symptoms, and what testing makes sense." | "Discover the secret to unlocking your best self." |
| "Labs typically include a full thyroid panel." | "We use cutting-edge advanced diagnostics." |
| "Many women find…" | "You'll finally feel…" |

**Banned as filler:** *transformative, life-changing, revolutionary, breakthrough, secret, unlock, cutting-edge, game-changing, optimal wellness journey.* They add no information and actively hurt AI citability — there's nothing in them to quote.

**Reading level:** aim for grade 8–10. Not because the audience isn't smart — they are — but because they're reading on a phone, often at 2am, often tired.

---

## Page templates

### Symptom page (600–900 words)

```
H1: [Symptom] and Hormones
  → Direct answer paragraph. Self-contained. Quotable alone.
H2: What causes [symptom] during perimenopause?
  → Mechanism, plainly. Cite a source.
H2: How do hormones affect [symptom]?
H2: What does BHRT address?
  → What it is. What it does not promise.
H2: What happens in a consultation?
  → Concrete process facts. The highest-converting section on the page.
H2: Common questions about [symptom]
  → 4–6 Q&A, 40–80 words each, self-contained. FAQPage schema.
→ Author byline → /about
→ Educational disclaimer
→ Booking CTA
```

**Every H2 is a question, phrased how people ask it.** Every section opens with a one-sentence direct answer before elaborating. Full rationale in [04-AI-VISIBILITY.md](04-AI-VISIBILITY.md).

### FAQ answer

40–80 words. Self-contained — no "as mentioned above," no pronouns pointing outside the answer. Assume it will be read in complete isolation, because in an AI answer it will be.

---

## Pre-publish checklist

- [ ] Every factual claim traces to [00-BUSINESS-FACTS.md](00-BUSINESS-FACTS.md) or a cited source
- [ ] No banned phrase from the tables above
- [ ] No outcome guarantee, no timeline promise, no unrecognized diagnosis
- [ ] Second person used only where the surface permits it
- [ ] Every section opens with a self-contained direct answer
- [ ] H2s are questions
- [ ] Disclaimer present for the surface type
- [ ] Author byline + `Person` schema on educational pages
- [ ] Sources cited and links working
- [ ] Reads naturally aloud — no keyword stuffing
