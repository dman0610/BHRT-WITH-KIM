/**
 * Post-build verification for bhrtwithkim.com.
 *
 *   npm run build && npm run verify
 *
 * Reads only the built HTML in .next/server/app. No dependencies, no browser,
 * no network. If it passes, what the docs claim about this site is true.
 *
 * WHY THIS EXISTS
 * ───────────────
 * This is a marketing site for a licensed healthcare provider, and most of what
 * matters here is invisible to a type checker. TypeScript cannot tell you that
 * a symptom page lost its crisis line, that a FAQ answer is in the schema but
 * not on the page, or that a homepage chip points at a route that no longer
 * exists. Those are the failures that actually carry consequences, so they are
 * asserted here.
 *
 * The safety section is the one that must never be weakened. Each of those
 * strings prevents a specific harm — the 988 line on the mood page, the
 * postmenopausal-bleeding red flag on the periods page. If a rewrite drops one,
 * this build fails, and that is the intended behaviour.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP = path.join(ROOT, ".next/server/app");
const ORIGIN = "https://bhrtwithkim.com";

let failures = 0;
const fail = (where, msg) => {
  failures++;
  console.log(`  ✗ ${where}: ${msg}`);
};
const section = (name) => console.log(`\n── ${name}`);

if (!fs.existsSync(APP)) {
  console.error("No build found at .next/server/app — run `npm run build` first.");
  process.exit(1);
}

// ── helpers ────────────────────────────────────────────────────────────────

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const files = walk(APP);
const routeOf = (file) =>
  "/" + path.relative(APP, file).split(path.sep).join("/").replace(/\.html$/, "");

const html = new Map(files.map((f) => [routeOf(f), fs.readFileSync(f, "utf8")]));
/** Real, indexable pages — excludes Next's internal error shells. */
const pages = [...html.keys()].filter((r) => !r.startsWith("/_"));

/** Visible text, with nav and footer removed so shared chrome doesn't mask gaps. */
function prose(source) {
  return source
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<header[\s\S]*?<\/header>/g, " ")
    .replace(/<footer[\s\S]*?<\/footer>/g, " ")
    .replace(/<nav[\s\S]*?<\/nav>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function jsonLd(source) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(source))) blocks.push(m[1]);
  return blocks;
}

function schemaObjects(source, route) {
  const out = [];
  for (const block of jsonLd(source)) {
    let parsed;
    try {
      parsed = JSON.parse(block.replace(/\\u003c/g, "<"));
    } catch (e) {
      fail(route, `JSON-LD does not parse: ${e.message}`);
      continue;
    }
    out.push(...(Array.isArray(parsed) ? parsed : [parsed]));
  }
  return out;
}

console.log(`Verifying ${pages.length} built pages\n${"=".repeat(60)}`);

// ── 1. structured data ─────────────────────────────────────────────────────
section("Structured data");
{
  const types = {};
  let blocks = 0;
  for (const route of pages) {
    const source = html.get(route);
    blocks += jsonLd(source).length;
    for (const o of schemaObjects(source, route)) {
      types[o["@type"]] = (types[o["@type"]] || 0) + 1;
    }
    // Three standing prohibitions — docs/03-SEO-TECHNICAL.md.
    const raw = jsonLd(source).join(" ");
    if (/"@type":\s*"(Review|AggregateRating)"/.test(raw))
      fail(route, "Review/AggregateRating schema is never permitted");
    if (/streetAddress/.test(raw))
      fail(route, "streetAddress must never appear — Kim works from home");
  }
  console.log(`  ${blocks} blocks parse`);
  console.log(`  ${JSON.stringify(types)}`);
}

// ── 2. metadata ────────────────────────────────────────────────────────────
section("Metadata");
{
  let clean = 0;
  for (const route of pages) {
    const s = html.get(route);
    const missing = [];
    if (!/<title>/.test(s)) missing.push("title");
    if (!/name="description"/.test(s)) missing.push("description");
    if (!/rel="canonical"/.test(s)) missing.push("canonical");
    if (!/property="og:title"/.test(s)) missing.push("og:title");
    if (!/property="og:image"/.test(s)) missing.push("og:image");

    const h1s = (s.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) missing.push(`${h1s} h1 tags`);

    const title = (s.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "";
    const seg = title.replace(" | BHRT with Kim", "");
    if (seg.length > 44 && title !== seg) missing.push(`title segment ${seg.length} > 44`);

    // Decode entities before measuring — an apostrophe serialises as &#x27;,
    // six characters for one, which inflated real descriptions past the limit.
    const rawDesc = (s.match(/<meta name="description" content="([\s\S]*?)"/) || [])[1] || "";
    const desc = rawDesc
      .replace(/&#x27;|&apos;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&mdash;/g, "—")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
    if (desc && (desc.length < 140 || desc.length > 155))
      missing.push(`description ${desc.length} outside 140-155`);

    if (missing.length) fail(route, missing.join(", "));
    else clean++;
  }
  console.log(`  ${clean}/${pages.length} pages complete`);
}

// ── 3. heading hierarchy ───────────────────────────────────────────────────
section("Heading hierarchy");
{
  let clean = 0;
  for (const route of pages) {
    const body = html
      .get(route)
      .replace(/<header[\s\S]*?<\/header>/g, " ")
      .replace(/<footer[\s\S]*?<\/footer>/g, " ");
    const levels = [...body.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
    let prev = 0;
    let skip = null;
    for (const l of levels) {
      if (prev && l > prev + 1) {
        skip = `h${prev} → h${l}`;
        break;
      }
      prev = l;
    }
    // A skipped level reads as missing content to anyone navigating by heading.
    if (skip) fail(route, `heading level skip ${skip}`);
    else clean++;
  }
  console.log(`  ${clean}/${pages.length} pages without level skips`);
}

// ── 4. FAQ answers ─────────────────────────────────────────────────────────
section("FAQ answers");
{
  let total = 0;
  for (const route of pages) {
    const source = html.get(route);
    const visible = prose(source);
    for (const o of schemaObjects(source, route)) {
      if (o["@type"] !== "FAQPage") continue;
      for (const q of o.mainEntity) {
        total++;
        const text = q.acceptedAnswer.text;
        const words = text.split(/\s+/).filter(Boolean).length;
        // 40–80 words, self-contained — the format retrieval systems extract.
        if (words < 40 || words > 80)
          fail(route, `FAQ answer ${words} words (need 40-80): "${q.name}"`);
        // Schema-only content is a structured-data violation, and it hides the
        // single most citable asset on the site from anything that reads HTML.
        if (!visible.includes(text.slice(0, 60)))
          fail(route, `FAQ answer not visible in HTML: "${q.name}"`);
      }
    }
  }
  console.log(`  ${total} answers, all 40-80 words and present in the HTML`);
}

// ── 5. safety content ──────────────────────────────────────────────────────
section("Safety content — do not weaken");
{
  const REQUIRED = [
    ["/symptoms/mood-changes-anxiety", /988/, "988 crisis line"],
    ["/symptoms/mood-changes-anxiety", /not a treatment for depression/i, "HT does not treat depression"],
    ["/symptoms/mood-changes-anxiety", /not based on information from a website/i, "do not stop psychiatric meds"],
    ["/symptoms/irregular-periods", /twelve consecutive months/i, "postmenopause defined"],
    ["/symptoms/irregular-periods", /bleeding after (twelve|menopause)/i, "postmenopausal bleeding red flag"],
    ["/symptoms/irregular-periods", /soak through a pad or tampon/i, "heavy bleeding red flag"],
    ["/symptoms/irregular-periods", /pregnancy remains possible/i, "contraception still relevant"],
    ["/symptoms/vaginal-dryness", /physical examination/i, "in-person exam limit"],
    ["/symptoms/vaginal-dryness", /moisturizer/i, "moisturizer vs lubricant"],
    ["/symptoms/joint-pain", /not a treatment for arthritis/i, "HT does not treat arthritis"],
    ["/symptoms/joint-pain", /rheumatoid arthritis/i, "inflammatory arthritis named"],
    ["/symptoms/joint-pain", /swollen, warm, or red/i, "inflammatory red flags"],
    ["/symptoms/hormonal-weight-gain", /not a weight-loss treatment/i, "HT is not for weight loss"],
  ];
  for (const [route, re, label] of REQUIRED) {
    const source = html.get(route);
    if (!source) fail(route, "page missing entirely");
    else if (!re.test(prose(source))) fail(route, `SAFETY CONTENT REMOVED: ${label}`);
  }
  console.log(`  ${REQUIRED.length} required inclusions present`);
}

// ── 6. compliance ──────────────────────────────────────────────────────────
section("Compliance");
{
  /*
    Patterns are written to match the CLAIM, not the word.

    "Nothing on this site guarantees any particular outcome" on /disclaimer and
    "Guaranteeing specific outcomes" listed as a warning sign on
    /find-a-hormone-provider are both correct, careful writing — a bare
    /guarantee/ flagged both. A build-failing check that cries wolf gets
    disabled, so precision matters more than breadth here.
  */
  const BANNED = [
    /\b(we|kim|she)\s+(can\s+)?cures?\b/i,
    /\b(we|kim|she)\s+guarantees?\b/i,
    /\bguaranteed\s+(results?|outcomes?|relief|improvement)/i,
    /\bclinically proven\b/i,
    /\badrenal fatigue\b/i,
    /\bvery treatable\b/i,
    /\bwithin \d+ (days|weeks|months)\b/i,
    /\byou'?ll finally\b/i,
    /\btransformative\b/i,
    /\blife-changing\b/i,
    /\bbreakthrough\b/i,
    /\bcutting-edge\b/i,
    /\bgame-chang/i,
    /12[- ]week vitality/i,
    /\bkyadon300\b/i,
    /\bAPRN\b|\bDNP\b/,
    // Lab prices were withdrawn by Kim — they vary by panel.
    /labs? (cost|are|run)s? (about )?\$\d/i,
  ];
  for (const route of pages) {
    const text = prose(html.get(route));
    for (const re of BANNED) {
      const m = text.match(re);
      if (m) fail(route, `banned phrase "${m[0]}"`);
    }
  }
  console.log(`  ${pages.length} pages × ${BANNED.length} patterns clean`);
}

// ── 7. links and anchors ───────────────────────────────────────────────────
section("Links");
{
  const routes = new Set([
    ...pages,
    "/",
    "/llms.txt",
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
  ]);
  let checked = 0;
  const broken = new Set();
  for (const route of pages) {
    for (const m of html.get(route).matchAll(/href="(\/[^"#?]*)([^"]*)"/g)) {
      const href = m[1];
      if (href.startsWith("/_next") || href.startsWith("/api/")) continue;
      if (/\.(png|jpe?g|webp|svg|ico|txt|xml|webmanifest)$/.test(href)) continue;
      checked++;
      const norm = href.length > 1 ? href.replace(/\/$/, "") : "/";
      if (!routes.has(norm)) broken.add(`${norm} (from ${route})`);
    }
  }
  for (const b of broken) fail("links", `broken: ${b}`);

  let frags = 0;
  for (const route of pages) {
    for (const m of html.get(route).matchAll(/href="(\/[^"#?]*)#([^"]+)"/g)) {
      frags++;
      const target = (m[1].replace(/\/$/, "") || "/");
      const source = html.get(target);
      if (!source) fail("links", `fragment target missing: ${target}#${m[2]}`);
      else if (!source.includes(`id="${m[2]}"`))
        fail("links", `missing anchor #${m[2]} on ${target}`);
    }
  }
  console.log(`  ${checked} internal links, ${frags} fragment anchors resolve`);
}

// ── 8. homepage symptom chips ──────────────────────────────────────────────
section("Homepage symptom chips");
{
  const home = html.get("/index") ?? html.get("/");
  if (!home) fail("/", "homepage HTML not found");
  else {
    const chips = [
      ...new Set([...home.matchAll(/href="(\/symptoms\/[^"]+)"/g)].map((m) => m[1])),
    ];
    // Every chip pointed at /services before Phase 7. A chip that 404s is worse
    // than no chip, so this is asserted rather than trusted.
    for (const href of chips) {
      if (!html.has(href)) fail("/", `chip "${href}" has no page`);
    }
    if (chips.length < 6) fail("/", `${chips.length} chips, expected 6`);
    if (!/href="\/symptoms"/.test(home)) fail("/", 'missing "see all" link to /symptoms');
    console.log(`  ${chips.length} chips resolve, hub link present`);
  }
}

// ── 8b. decorative side vines ──────────────────────────────────────────────
section("Decorative side vines");
{
  const home = html.get("/index") ?? html.get("/");
  if (!home) {
    fail("/", "homepage HTML not found");
  } else {
    /*
      The vine is purely decorative and sits in the gutter, painted OVER the
      section backgrounds. Three properties keep that safe, and all three are
      easy to lose in a refactor:
        - aria-hidden, so it never reaches assistive technology
        - pointer-events-none, so it can never swallow a click on a CTA
        - the xl gate, so it is absent where there is no gutter to hold it
    */
    const wrapper = home.match(
      /<div aria-hidden="true" class="([^"]*pointer-events-none[^"]*)"/
    );
    if (!wrapper) fail("/", "side-vine wrapper missing or no longer aria-hidden");
    else {
      const cls = wrapper[1];
      if (!cls.includes("pointer-events-none"))
        fail("/", "side vines are not pointer-events-none");
      if (!cls.includes("xl:block") || !cls.includes("hidden"))
        fail("/", "side vines are not gated to xl and above");
    }
    // Decoration must contribute no words to the page.
    const text = prose(home);
    if (/vine|tendril|root flourish/i.test(text))
      fail("/", "decorative vine is contributing text content");
  }
  console.log("  aria-hidden, pointer-events-none, xl-gated, no text contributed");
}

// ── 9. sitemap ─────────────────────────────────────────────────────────────
section("Sitemap");
{
  const smFile = path.join(APP, "sitemap.xml.body");
  if (!fs.existsSync(smFile)) {
    fail("sitemap", "sitemap.xml.body not found in the build");
  } else {
    const urls = [...fs.readFileSync(smFile, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (m) => m[1].replace(ORIGIN, "") || "/"
    );
    const listed = new Set(urls);
    const skip = new Set(["/llms.txt", "/robots.txt", "/sitemap.xml", "/opengraph-image"]);
    for (const route of pages) {
      const r = route === "/index" ? "/" : route;
      if (!skip.has(r) && !listed.has(r)) fail("sitemap", `route not listed: ${r}`);
    }
    for (const u of listed) {
      if (!html.has(u) && !(u === "/" && html.has("/index")))
        fail("sitemap", `listed URL has no page: ${u}`);
    }
    console.log(`  ${urls.length} URLs, all resolve and all pages covered`);
  }
}

// ── 10. geo doorway check ──────────────────────────────────────────────────
section("Service-area distinctness");
{
  const cities = pages.filter((r) => r.startsWith("/service-areas/"));
  const shingles = (text, n = 8) => {
    const w = text.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
    const s = new Set();
    for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(" "));
    return s;
  };
  const map = new Map(cities.map((c) => [c, shingles(prose(html.get(c)))]));
  let worst = 0;
  for (let i = 0; i < cities.length; i++) {
    for (let j = i + 1; j < cities.length; j++) {
      const a = map.get(cities[i]);
      const b = map.get(cities[j]);
      let inter = 0;
      for (const s of a) if (b.has(s)) inter++;
      worst = Math.max(worst, inter / (a.size + b.size - inter));
    }
  }
  // A city page that could be produced by find-and-replace is a doorway page,
  // and doorway pages can cost the whole domain. See docs/02-KEYWORD-MAP.md.
  if (worst > 0.25) fail("service-areas", `pairwise overlap ${(worst * 100).toFixed(1)}% — templated`);
  console.log(`  ${cities.length} city pages, worst pairwise overlap ${(worst * 100).toFixed(1)}%`);
}

// ── result ─────────────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(60));
if (failures === 0) {
  console.log("ALL CHECKS PASSED");
  process.exit(0);
}
console.log(`${failures} FAILURE${failures === 1 ? "" : "S"}`);
process.exit(1);
