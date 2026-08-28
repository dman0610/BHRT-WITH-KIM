<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# BHRT with Kim — Project Rules

This is the marketing site for a licensed healthcare provider. Two consequences follow from that, and they override normal defaults.

## 1. Never invent a fact

Every factual claim published about this business — credentials, pricing, location, process, hours, years in practice — must trace to [docs/00-BUSINESS-FACTS.md](docs/00-BUSINESS-FACTS.md).

If a fact is needed and isn't there:
- **Do not** approximate, infer from context, or use a "reasonable default."
- **Do** write around the gap, and add the question to [docs/OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md).

"Kim provides bioidentical hormone replacement therapy through virtual consultations across Utah" is publishable. A guessed credential, invented consult duration, or plausible-sounding city is not.

This is not caution for its own sake. A fabricated detail about a licensed provider is a legal exposure, and because AI systems cross-reference sources, it becomes a permanent entity-trust problem.

## 2. Health compliance is not optional

Read [docs/05-CONTENT-STANDARDS.md](docs/05-CONTENT-STANDARDS.md) before writing any user-facing copy.

Never publish: outcome guarantees, efficacy promises, relief timelines, diagnoses of the reader, unrecognized conditions stated as fact, or unsourced statistics.

## 3. Single source of truth

Business facts live in `lib/site.ts`, which mirrors `docs/00-BUSINESS-FACTS.md`. **Never hardcode a phone number, price, credential, or booking URL into a page.** If the two disagree, the doc wins and the code is the bug.

## 4. Server-render anything that matters

Most AI crawlers don't execute JavaScript. Content behind `"use client"` is invisible to them, and AI citation is a primary goal of this project.

Before adding `"use client"`, ask whether the content needs to be in the HTML source. If it does, push interactivity into a small child component instead of marking the whole page or layout. See [docs/04-AI-VISIBILITY.md](docs/04-AI-VISIBILITY.md).

## 5. No hidden or cloaked content

Nothing invisible to users, nothing served differently to crawlers, no keyword stuffing, no text addressed to AI systems. This is cloaking, it risks the whole domain, and it doesn't work anyway. The strategy is to be the most factually specific verifiable source — see [docs/04-AI-VISIBILITY.md](docs/04-AI-VISIBILITY.md).

---

## Documentation map

| Doc | Read it when |
|---|---|
| [00-BUSINESS-FACTS.md](docs/00-BUSINESS-FACTS.md) | Publishing any fact. **Always.** |
| [01-STRATEGY.md](docs/01-STRATEGY.md) | Deciding what to build or why |
| [02-KEYWORD-MAP.md](docs/02-KEYWORD-MAP.md) | Adding a page, writing titles or meta |
| [03-SEO-TECHNICAL.md](docs/03-SEO-TECHNICAL.md) | Metadata, schema, sitemap, robots |
| [04-AI-VISIBILITY.md](docs/04-AI-VISIBILITY.md) | Structuring content, client/server splits |
| [05-CONTENT-STANDARDS.md](docs/05-CONTENT-STANDARDS.md) | Writing any copy. **Always.** |
| [06-EMAIL.md](docs/06-EMAIL.md) | Quiz capture, MailerLite, sequences |
| [07-TRACKING.md](docs/07-TRACKING.md) | Analytics, pixels, events |
| [08-LOCAL-GBP.md](docs/08-LOCAL-GBP.md) | Google Business Profile, reviews, local |
| [09-DESIGN-SYSTEM.md](docs/09-DESIGN-SYSTEM.md) | Components, tokens, accessibility |
| [10-ROADMAP.md](docs/10-ROADMAP.md) | Starting a session — current status |
| [11-LAUNCH.md](docs/11-LAUNCH.md) | Deploying, or doing anything that needs a live URL |
| [12-CITATIONS.md](docs/12-CITATIONS.md) | Off-site listings, directories, reviews — the link-authority gap |
| [OPEN-QUESTIONS.md](docs/OPEN-QUESTIONS.md) | Hitting an unknown |

## Stack

Next.js 16.2.2 (App Router) · React 19.2.4 · TypeScript · Tailwind CSS v4 (**CSS-first — no `tailwind.config.js`**; tokens are in `app/globals.css`) · shadcn "base-nova" on `@base-ui/react`.

## Conventions

- Content constants live in `lib/constants.ts`; business facts live in `lib/site.ts`.
- Content pages are data in `lib/content/`, rendered by `ContentPageLayout`. Adding one means writing a data file and registering it — route, metadata, schema, and sitemap entry follow automatically.
- **All analytics goes through `lib/analytics.ts`.** Never call `fbq` or `va` directly. It enforces the no-health-data rule in code; see [07-TRACKING.md](docs/07-TRACKING.md).
- Path alias `@/` → repo root.
- JSON-LD renders as a native `<script>` with `.replace(/</g, "\\u003c")`, never `next/script`.
- Update [10-ROADMAP.md](docs/10-ROADMAP.md) checkboxes as work lands.
