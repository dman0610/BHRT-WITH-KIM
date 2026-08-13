# BHRT with Kim

Marketing site for **BHRT with Kim** — a virtual bioidentical hormone replacement therapy practice serving women throughout Utah.

**Production:** [bhrtwithkim.com](https://bhrtwithkim.com)

---

## What this project is

Not a brochure site. It's a lead engine with three jobs:

1. **Google traffic** — rank for local and symptom-based hormone health searches in Utah
2. **AI answer visibility** — be the source AI assistants name when asked about hormone therapy in Utah
3. **Email acquisition** — capture quiz-takers into an automated sequence that ends in a booked consult

Strategy and rationale: [docs/01-STRATEGY.md](docs/01-STRATEGY.md). Current status: [docs/10-ROADMAP.md](docs/10-ROADMAP.md).

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

Requires Node 18.18+.

### Environment

No `.env.example` is committed yet. Variables in use or planned:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=   # contact + newsletter forms (client-side, by design)
MAILERLITE_API_KEY=                 # server-only — never prefix NEXT_PUBLIC_
MAILERLITE_GROUP_ID=
```

---

## Stack

| | |
|---|---|
| Framework | Next.js **16.2.2**, App Router |
| React | 19.2.4 |
| Language | TypeScript |
| Styling | Tailwind CSS **v4** — CSS-first, no `tailwind.config.js` |
| Components | shadcn "base-nova" on `@base-ui/react` |
| Icons | lucide-react |
| Fonts | Cormorant Garamond (headings), Source Sans 3 (body) |
| Booking | Healthie, embedded iframe |
| Email | MailerLite *(Phase 4)* |

> ⚠️ **Next.js 16 differs from most training data and from older tutorials.** Read the relevant guide in `node_modules/next/dist/docs/` before writing code. See [AGENTS.md](AGENTS.md).

Design tokens live in [app/globals.css](app/globals.css) under `@theme inline` — documented in [docs/09-DESIGN-SYSTEM.md](docs/09-DESIGN-SYSTEM.md).

---

## Repo map

```
app/                    Routes (App Router)
  about/ services/ quiz/ contact/ resources/ testimonials/
  api/                  Route handlers
components/
  layout/               Navbar, Footer, ScrollAnimator
  quiz/                 QuizStepper — the 7-question assessment
  sections/             Page sections
  ui/                   shadcn primitives + Icon, BotanicalDecor
  blog/                 Article cards, category filter
lib/
  constants.ts          Content constants — nav, services, quiz, testimonials
  articles/             Article content
  utils.ts              cn() + hooks
docs/                   Marketing system — see below
public/                 Images, article art
```

---

## Documentation

`docs/` is the source of truth for this project. The site is a rendering of it.

| Doc | Contents |
|---|---|
| [00-BUSINESS-FACTS.md](docs/00-BUSINESS-FACTS.md) | **Canonical fact sheet.** Every published fact traces here. |
| [01-STRATEGY.md](docs/01-STRATEGY.md) | Positioning, audience, funnel model, definition of traction |
| [02-KEYWORD-MAP.md](docs/02-KEYWORD-MAP.md) | URL architecture, keyword targets, titles and meta |
| [03-SEO-TECHNICAL.md](docs/03-SEO-TECHNICAL.md) | Metadata, JSON-LD, sitemap, robots, Core Web Vitals |
| [04-AI-VISIBILITY.md](docs/04-AI-VISIBILITY.md) | `/llms.txt`, crawler access, writing for extraction |
| [05-CONTENT-STANDARDS.md](docs/05-CONTENT-STANDARDS.md) | Voice, health compliance, banned claims, templates |
| [06-EMAIL.md](docs/06-EMAIL.md) | Quiz capture, MailerLite runbook, sequence, deliverability |
| [07-TRACKING.md](docs/07-TRACKING.md) | Analytics, events, attribution, the health-data rule |
| [08-LOCAL-GBP.md](docs/08-LOCAL-GBP.md) | Google Business Profile, reviews, citations |
| [09-DESIGN-SYSTEM.md](docs/09-DESIGN-SYSTEM.md) | Tokens, components, accessibility |
| [10-ROADMAP.md](docs/10-ROADMAP.md) | **Phased tracker — start here** |
| [OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) | Unresolved inputs blocking work |

`docs/archive/` holds the superseded original spec.

---

## Two rules that override normal defaults

This is the marketing site for a **licensed healthcare provider**.

1. **Never invent a fact.** Credentials, pricing, location, process, hours — everything traces to [docs/00-BUSINESS-FACTS.md](docs/00-BUSINESS-FACTS.md). Missing facts get written around and logged in [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md), never approximated.

2. **No health claims.** No outcome guarantees, no efficacy promises, no relief timelines, no diagnosing the reader. Educational content plus a consultation CTA. Full rules in [docs/05-CONTENT-STANDARDS.md](docs/05-CONTENT-STANDARDS.md).

Full agent guidance in [AGENTS.md](AGENTS.md).
