# 13 — Indexing & Crawl

Created 2026-09-21 · Owner: Dallin

**Read this before touching `app/sitemap.ts`, `next.config.ts` host rules, or
anything that claims to explain why a page is not indexed.**

---

## The state that prompted this

Search Console, 2026-09-21. Site launched 2026-08-16.

| | Count |
|---|---|
| Indexed | 20 |
| Discovered – currently not indexed | **19** |
| Crawled – currently not indexed | 1 (`/apple-icon`, an icon — ignore) |
| Page with redirect | 3 (see below — working as intended) |

All 19 showed **`Last crawled: N/A`** — Google had never fetched them once — and
the count was a **flat line from 2026-08-17 to 2026-09-21**. Not decaying, not
growing. Five weeks, no movement.

---

## What it was NOT — each ruled out by measurement

Record these so nobody re-runs the same dead ends.

| Suspected cause | Measured | Verdict |
|---|---|---|
| `noindex` / `X-Robots-Tag` | all 39 pages `index, follow` | ruled out |
| Bad canonicals | all 39 self-referencing and correct | ruled out |
| robots.txt blocking | only `/api/` disallowed | ruled out |
| Client-rendered links | nav/footer are real server-rendered `<a href>` | ruled out |
| Weak internal linking | `/about`, `/services`, `/faq`, `/contact` each have **39 inbound links** and are *not* indexed; `/book/follow-up` has **1** and *is* | ruled out, decisively |
| Server too slow (Google throttles) | TTFB **86–250ms**, `x-vercel-cache: HIT` on every page | ruled out |
| No compression | brotli active, 124KB → 19KB | ruled out |
| Invalid structured data | parsed all 39 pages, **0 invalid JSON-LD blocks** | ruled out |
| Thin content | `/faq` **1,274 unique words, not indexed**; `/resources` **260, indexed**. No correlation | ruled out |

**The internal-link and word-count rows are the two that matter most.** They are
the theories that sound most plausible and both are false here. Do not
"fix" indexing by adding links or padding word counts.

---

## What it actually was

`app/sitemap.ts` pinned `lastModified` to a hardcoded constant:

```ts
const CONTENT_UPDATED = "2026-08-16";   // "move this by hand when content changes"
```

Nobody moved it. `git log` after that date:

```
2026-08-28  ad117af  Link service-area pages sitewide  → components/layout/Footer.tsx (+48)
2026-08-21  a3fcc7d  Add social profiles to sameAs     → lib/schema.ts, lib/site.ts
```

The footer and the schema render on **all 39 pages**. Every page on the site
genuinely changed twice, and the sitemap reported `2026-08-16` every day
throughout — including to the crawler that was reading it roughly daily
(Search Console showed sitemap `Last read: 2026-09-20`).

For a URL Google has **never fetched**, `lastmod` is the only freshness signal
that exists. It said "nothing here has changed" for five weeks, so nothing was
rescheduled. That is the flat line.

### Both previous approaches were wrong in opposite directions

1. **`new Date()`** — every URL claimed to change on every deploy, including
   CSS-only ones. A date that always moves gets discounted.
2. **A hand-maintained constant** — never moved. A date that never moves says
   nothing ever changed.

### The fix

Dates derive from whether content *actually* changed:

- `scripts/content-hash.mjs` — fingerprints rendered text, internal links, alt
  text, JSON-LD, and the `<title>`/description/robots/canonical. Excludes class
  names, build ids, `/_next/` URLs and React's flight payload.
- `lib/content-dates.json` — committed manifest of `route → { hash, date }`.
- `npm run stamp` — bumps the date only for routes whose fingerprint moved.
- `npm run verify` — **fails the build** when the manifest is stale, naming the
  routes and printing the fix.

Behaviour verified rather than assumed:

```
stable across two clean rebuilds ....... 0 of 41 routes drift
adding a Tailwind class ................ 0 routes flagged
changing one word of footer copy ....... 40 routes flagged (it is sitewide)
changing one page's meta description ... 1 route flagged, by name
```

Seeded at **2026-08-28** — the date content truly last changed. Stamping "today"
would have been the same dishonesty pointing the other way.

⚠️ **Commit `lib/content-dates.json`.** Vercel builds from a clean checkout, so a
date that only exists locally never ships.

---

## The duplicate host

`bhrt-with-kim.vercel.app` served a full **HTTP 200 copy of all 39 pages**, with
`Allow: /` in robots.txt and no `noindex` — a second complete crawlable site,
protected only by a canonical, which Google may overrule.

Fixed in `next.config.ts` with a host-matched `X-Robots-Tag: noindex, nofollow`
(regex covers preview deployments too). A **header, not a redirect**, so the
alias stays usable as a fallback when DNS on the custom domain breaks.

This was fixable in code because **the app actually runs for that host** —
confirmed by this project's security headers appearing on the response.

---

## Things that look broken and are not

### "Page with redirect" × 3 — correct, ignore permanently

`http://`, `http://www` and `https://www` all redirect to the apex. They are
*supposed* to be excluded. Validation will never "pass" because they will always
redirect. This is not a defect and there is nothing to fix.

### The `www` 307 — Vercel's default, not a misconfiguration

`https://www.bhrtwithkim.com/faq` → `307` → `https://bhrtwithkim.com/faq`.

A 308 would be marginally better, **but there is no setting to change.** DNS:

```
bhrtwithkim.com      NS → ns1/ns2.vercel-dns.com    ← Vercel runs the DNS
www.bhrtwithkim.com  A  → 64.29.17.65, 216.198.79.1 ← Vercel edge
```

Vercel auto-provisions the `www` record and its edge serves a built-in redirect
for a hostname that has no project assigned. There is **no `www` entry in the
project's Domains list** — searching for one returns nothing.

Getting a 308 would mean *creating* the entry, whose default option
("Connect to an environment") would serve a duplicate site if saved wrong.
**Decision: left alone.** Real downside risk, negligible upside — the redirect
already preserves paths and Google consolidates across it.

⚠️ Do not "fix" this. It has been investigated twice.

### `experimental.inlineCss` — trialled, deliberately off

Clears the render-blocking audit. Measured at brotli-11: 26.1KB in two
sequential requests today vs 27.8KB in one. Left off because it is experimental
and could not be validated locally (`next start` serves uncompressed, so
Lighthouse sees 373KB of inline CSS and reports FCP *worse*). Full reasoning is
in `next.config.ts`. Judging it needs a preview deployment.

---

## If the number has not moved

Check Search Console → Pages. If "Discovered – currently not indexed" is still 19
two weeks after 2026-09-21, the sitemap signal was not the constraint.

**Do not** re-suggest Bing Webmaster Tools — Dallin has ruled it out. *(Health
directories are a separate channel and were never declined — corrected
2026-09-22. They are an authority lever, not an indexing fix.)*

Worth investigating instead:

1. Did Google actually refetch? Sitemaps → **Last read** should be past
   2026-09-21.
2. Settings → **Crawl stats** — host status, response codes, crawl-rate anomalies.
3. Whether the 19 share any property the indexed 20 do not. Word count and
   internal-link depth are both already ruled out above, with numbers.

Crawl allowance on a young domain is Google's call. What is true either way is
that a genuinely broken signal is now fixed.
