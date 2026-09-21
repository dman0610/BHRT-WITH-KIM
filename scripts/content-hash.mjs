/**
 * Content fingerprinting for honest sitemap dates.
 *
 * Shared by scripts/stamp-content.mjs (which writes the dates) and
 * scripts/verify.mjs (which fails the build when they are stale).
 *
 * WHAT COUNTS AS A CONTENT CHANGE
 * -------------------------------
 * `<lastmod>` is a promise to Google that the page changed. Google uses it to
 * schedule recrawls and -- per its own sitemap documentation -- only keeps
 * trusting it while it stays verifiably accurate. So the fingerprint has to
 * track what a reader would call the content, and nothing else:
 *
 *   IN   visible text, alt text, the set of internal links, the JSON-LD graph,
 *        and the <title>/meta description -- those two are the page as it
 *        appears IN the search result, so changing them is a change Google
 *        should be told about
 *   OUT  class names, inline styles, build ids, `/_next/` asset URLs, and
 *        React's flight payload (which restates the page text with a
 *        per-build id attached, so hashing it makes every build look like a
 *        content change)
 *
 * That distinction is the entire point. Restyling a button must not tell
 * Google that 39 pages changed; adding links to the footer genuinely did
 * change them, and must say so.
 *
 * Regexes here are literals on purpose. Building them from strings invites
 * the escaping bug where "[\s\S]" silently becomes the character class
 * [sS] and the stripping quietly stops working.
 */

import crypto from "node:crypto";

const SCRIPTS = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const STYLES = /<style\b[^>]*>[\s\S]*?<\/style>/gi;
const SVGS = /<svg\b[^>]*>[\s\S]*?<\/svg>/gi;
const COMMENTS = /<!--[\s\S]*?-->/g;
const LD_JSON = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
const HREFS = /href="(\/[^"]*)"/g;
const ALTS = /alt="([^"]*)"/g;
const TITLE = /<title>([\s\S]*?)<\/title>/i;
const META_DESC = /<meta name="description" content="([^"]*)"/i;
const META_ROBOTS = /<meta name="robots" content="([^"]*)"/i;
const CANONICAL = /<link rel="canonical" href="([^"]*)"/i;
const TAGS = /<[^>]+>/g;
const ENTITIES = /&[a-z]+;|&#\d+;/gi;

export function fingerprint(html) {
  /* Keep the JSON-LD graph; it is content, and it carries nothing volatile. */
  const ld = [...html.matchAll(LD_JSON)].map((m) => m[1]).join("\n");

  /*
    The head fields that are themselves the search result, plus the two that
    decide whether there is one at all. A rewritten title or an accidental
    noindex both need to move the date.
  */
  const head = [TITLE, META_DESC, META_ROBOTS, CANONICAL]
    .map((re) => html.match(re)?.[1] ?? "")
    .join("\n");

  const body = html
    .replace(SCRIPTS, " ")
    .replace(STYLES, " ")
    .replace(SVGS, " ")
    .replace(COMMENTS, " ");

  /* Internal page links only -- `/_next/` assets and icon cache-busting
     query strings both change on every build without the page changing. */
  const links = [...body.matchAll(HREFS)]
    .map((m) => m[1].split("?")[0])
    .filter((h) => !h.startsWith("/_next/"))
    .sort();

  /* Alt text is content, and for some readers it is the only text. */
  const alts = [...body.matchAll(ALTS)].map((m) => m[1]).sort();

  const text = body
    .replace(TAGS, " ")
    .replace(ENTITIES, " ")
    .replace(/\s+/g, " ")
    .trim();

  return crypto
    .createHash("sha256")
    .update([head, text, links.join("\n"), alts.join("\n"), ld].join("\n\u0000\n"))
    .digest("hex")
    .slice(0, 16);
}
