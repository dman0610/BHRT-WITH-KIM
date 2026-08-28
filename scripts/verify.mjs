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

// ── 4b. FAQ duplication across pages ───────────────────────────────────────
section("FAQ uniqueness");
{
  /*
    Google serves one page per query. The same question answered on two URLs
    splits the signal and can suppress both, and for AI retrieval it produces
    two competing passages where one authoritative one would do.

    Four pairs had drifted in by the time this was written — the cost question
    on /faq and /bhrt-cost-utah, a GSM definition on two symptom pages, a
    boilerplate "available across Utah" on two more, and a LabCorp answer
    duplicated verbatim. All were invisible until measured, which is why this
    check exists rather than a convention.
  */
  const questions = new Map();
  const answers = new Map();
  for (const route of pages) {
    for (const o of schemaObjects(html.get(route), route)) {
      if (o["@type"] !== "FAQPage") continue;
      for (const q of o.mainEntity) {
        const qKey = q.name.toLowerCase().replace(/[^a-z ]/g, "").trim();
        const aKey = q.acceptedAnswer.text.slice(0, 90);
        if (!questions.has(qKey)) questions.set(qKey, []);
        if (!answers.has(aKey)) answers.set(aKey, []);
        questions.get(qKey).push(route);
        answers.get(aKey).push(route);
      }
    }
  }
  for (const [q, routes] of questions) {
    if (routes.length > 1)
      fail("FAQ", `question on ${routes.length} pages — "${q.slice(0, 52)}" (${routes.join(", ")})`);
  }
  for (const [, routes] of answers) {
    if (routes.length > 1)
      fail("FAQ", `identical answer text on ${routes.join(", ")}`);
  }
  console.log(`  ${questions.size} distinct questions, no duplicate question or answer text`);
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
  /*
    Non-page routes that legitimately appear in href/src attributes. These are
    generated image and metadata routes with no extension, so the file-type
    skip below doesn't catch them and they'd read as broken page links.
  */
  const routes = new Set([
    ...pages,
    "/",
    "/llms.txt",
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
    "/apple-icon",
    "/icon",
    "/manifest.webmanifest",
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

// ── 2b. page-level schema ──────────────────────────────────────────────────
section("Page-level schema");
{
  /*
    Every page carries the sitewide entity graph from the root layout. That
    describes the BUSINESS. A page with nothing else tells a crawler what the
    practice is but nothing about what the page is for, which is how nine pages
    ended up generic — including the booking pages, which have prices.

    The homepage is exempt: WebSite + MedicalBusiness + Person is the correct
    shape for a root, and a breadcrumb there would be noise.
  */
  const PAGE_LEVEL = [
    "MedicalWebPage",
    "Article",
    "FAQPage",
    "ProfilePage",
    "ContactPage",
    "CollectionPage",
    "Service",
    "BreadcrumbList",
  ];
  let typed = 0;
  for (const route of pages) {
    if (route === "/index" || route === "/") continue;
    const types = [...html.get(route).matchAll(/"@type":"([A-Za-z]+)"/g)].map((m) => m[1]);
    if (types.some((t) => PAGE_LEVEL.includes(t))) typed++;
    else fail(route, "carries only the sitewide entity graph — no page-level schema");
  }
  console.log(`  ${typed} pages carry page-level schema (homepage exempt)`);
}

// ── 2c. thin pages ─────────────────────────────────────────────────────────
section("Content depth");
{
  /*
    /quiz shipped with ~50 words of server-rendered content while being the
    designated ad landing page — invisible to search and to AI, because
    everything lived inside a client component. This floor catches that class
    of page before it ships again.
  */
  const FLOOR = 250;

  /*
    Exempt by function, not by convenience. These three rank on what they DO,
    not on prose, and padding them would be worse than the word count:

      /contact      — a form and contact details; nobody wants an essay here
      /resources    — an index; the article cards carry the content
      /testimonials — three quotes, and inventing more is out of the question

    "Thin content" means little value RELATIVE TO PURPOSE. A short contact page
    is not thin. A 50-word ad landing page was.
  */
  const EXEMPT = new Set(["/contact", "/resources", "/testimonials"]);

  let thinnest = Infinity;
  let thinnestRoute = "";
  for (const route of pages) {
    const words = prose(html.get(route)).split(/\s+/).filter(Boolean).length;
    if (EXEMPT.has(route)) continue;
    if (words < thinnest) {
      thinnest = words;
      thinnestRoute = route;
    }
    if (words < FLOOR) fail(route, `only ${words} rendered words (floor ${FLOOR})`);
  }
  console.log(
    `  all content pages ≥ ${FLOOR} words; thinnest is ${thinnestRoute} at ${thinnest} (${EXEMPT.size} utility pages exempt)`
  );
}

// ── 2d. sitemap dates ──────────────────────────────────────────────────────
section("Sitemap date honesty");
{
  /*
    `new Date()` here stamps every URL with the build time, telling Google all
    39 pages changed on every deploy — a signal search engines learn to
    discount precisely because it always moves.
  */
  const src = fs.readFileSync(path.join(ROOT, "app/sitemap.ts"), "utf8");
  const body = src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
  if (/new Date\(\)/.test(body))
    fail("app/sitemap.ts", "uses new Date() — lastModified must come from content");
  console.log("  lastModified derives from content dates, not build time");
}

// ── 6b. nav contrast at first paint ────────────────────────────────────────
section("Nav contrast (pre-hydration)");
{
  /*
    The header shipped white links on the cream homepage in production because
    its colour depended on `usePathname()`, which HAS NO VALUE in Vercel's
    server render. It resolved correctly in local builds, so nothing caught it
    before launch — this check is that missing net.

    Assert on the PRERENDERED html, which is what a visitor sees before
    hydration and all a JS-disabled visitor ever sees.
  */
  let checked = 0;
  for (const route of pages) {
    const s = html.get(route);
    const navLinks = [
      ...s.matchAll(/class="relative px-3 py-2 text-sm font-medium transition-colors ([a-z-]+)/g),
    ].map((m) => m[1]);
    if (navLinks.length === 0) continue;
    checked++;
    for (const cls of new Set(navLinks)) {
      if (cls !== "text-bark")
        fail(route, `nav link renders "${cls}" pre-hydration — must be text-bark`);
    }
    // The backdrop must not be conditionally transparent.
    if (/z-\[25\][^"]*opacity-0/.test(s))
      fail(route, "nav backdrop starts transparent — contrast depends on scroll again");
  }
  console.log(`  ${checked} pages render nav links dark-on-cream before hydration`);
}

// ── 6bb. scope of practice ─────────────────────────────────────────────────
section("Scope of practice");
{
  /*
    Kim narrowed what she offers on 2026-08-12: thyroid assessment only (not
    adrenal), no mold or Lyme testing, and no broad "screening for underlying
    conditions". Those phrases had been propagated to ~15 pages when the content
    engine was built, so a partial fix would have left the site contradicting
    its own Services page — and every stale sentence is an inaccurate claim
    about a licensed provider's scope.

    These are claims, not vocabulary: the tripwire list in lib/analytics.ts
    still contains "adrenal" on purpose and is not page copy.
  */
  const OUT_OF_SCOPE = [
    [/\badrenal\b/i, "adrenal assessment — Kim does not offer this yet"],
    [/screening for underlying conditions/i, "broad underlying-condition screening"],
    [/mold exposure/i, "mold testing"],
    [/\bLyme\b/i, "Lyme testing"],
  ];
  for (const route of pages) {
    const text = prose(html.get(route));
    for (const [re, label] of OUT_OF_SCOPE) {
      const m = text.match(re);
      if (m) fail(route, `out-of-scope claim (${label}): "${m[0]}"`);
    }
  }
  console.log(`  ${pages.length} pages — no out-of-scope testing claims`);
}

// ── 6bc. price consistency ─────────────────────────────────────────────────
section("Price consistency");
{
  /*
    The package price lives in copy, Offer schema, the FAQ, /llms.txt and
    bhrt-cost-utah. Kim caught the last error herself — 5 visits at $200 was
    $1,000 while the package was priced at $1,500. A stale figure anywhere is a
    published price the practice does not honour.
  */
  let mentions = 0;
  for (const route of pages) {
    const text = prose(html.get(route));
    if (/\$1,?500/.test(text)) fail(route, "stale $1,500 package price");
    if (/\$950/.test(text)) mentions++;
  }
  const home = html.get("/index") ?? html.get("/");
  if (home && /"price":\s*"1500"/.test(home)) fail("/", "stale price in Offer schema");
  console.log(`  no stale $1,500 anywhere; $950 stated on ${mentions} pages`);
}

// ── 6c. clinical titles ────────────────────────────────────────────────────
section("Clinical titles");
{
  /*
    Kim is a nurse practitioner. "Dr.", "MD", "physician" or "doctor" attached
    to her name would be a false credential claim about a licensed provider —
    the single most damaging thing this site could publish.

    Matches only titles bound TO HER. "physician-patient relationship" in the
    disclaimer and "primary care doctor" describing a patient's other clinicians
    are correct usage and must not trip this.
  */
  const FORBIDDEN_TITLE = [
    /\bDr\.?\s+Kim\b/i,
    /\bKim\s+Yadon,?\s*(MD|M\.D\.|DO|PhD)\b/i,
    /Kim[^.]{0,40}\bis a (physician|doctor|medical doctor)\b/i,
    /\b(our|your)\s+(physician|doctor)\s+Kim\b/i,
    /*
      APRN is her LICENCE CATEGORY, not a post-nominal. The licence number is
      published, which makes "Kim Yadon, APRN" an easy slip — and every other
      source renders her as FNP-C, so the inconsistency would fracture the
      entity exactly where it is meant to be verifiable.
    */
    /\bKim\s+Yadon,?\s*APRN\b/i,
  ];
  for (const route of pages) {
    const text = prose(html.get(route));
    for (const re of FORBIDDEN_TITLE) {
      const m = text.match(re);
      if (m) fail(route, `clinical title attached to Kim: "${m[0]}"`);
    }
  }
  console.log(`  ${pages.length} pages — no physician/doctor/Dr./MD title on Kim`);
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

// ── 11. deliverable promises ───────────────────────────────────────────────
section("Email capture promises");
{
  /*
    The quiz capture form must not promise something the site cannot deliver.

    It previously said "We'll email you a copy along with Kim's hormone health
    guide" — while there was no authenticated sending domain and no guide. A
    visitor handed over an address and received nothing, which is worse than
    never asking.

    This is exactly the kind of defect that comes back: the guide gets written,
    the copy gets updated to match, the PDF gets renamed or moved, and the
    promise silently breaks again. So the check is mechanical — if the copy
    offers a downloadable, one has to exist.

    The guard disables itself the moment a real PDF lands in public/.
  */
  const src = path.join(ROOT, "components/quiz/EmailCaptureStep.tsx");
  const copy = fs.existsSync(src) ? fs.readFileSync(src, "utf8") : "";

  // Strip comments — the rationale above mentions the old wording on purpose.
  const visible = copy
    .replace(/\/\*[\s\S]*?\*\//g, " ")
    .replace(/^\s*\/\/.*$/gm, " ");

  const walk = (dir) =>
    !fs.existsSync(dir)
      ? []
      : fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
          const p = path.join(dir, e.name);
          return e.isDirectory() ? walk(p) : [p];
        });
  const pdfs = walk(path.join(ROOT, "public")).filter((f) => f.endsWith(".pdf"));

  const before = failures;
  const promisesDownload = /\bguide\b|\bdownload\b|\bebook\b|\bworkbook\b|\bchecklist\b/i.test(visible);

  if (promisesDownload && pdfs.length === 0) {
    fail("EmailCaptureStep", "promises a guide/download but no PDF exists in public/");
  }

  // Timelines are banned outright by docs/05-CONTENT-STANDARDS.md — a stated
  // response deadline the practice may miss is a real exposure.
  const timeline = visible.match(/within \d+\s*(hours?|days?|business days?)|in \d+\s*(hours?|days?)/i);
  if (timeline) fail("EmailCaptureStep", `states a response timeline: "${timeline[0]}"`);

  if (failures === before) {
    console.log(
      `  capture copy makes no unfulfillable promise (${pdfs.length} PDF${pdfs.length === 1 ? "" : "s"} in public/)`
    );
  }
}

// ── 12. internal link reachability ─────────────────────────────────────────
section("Internal link reachability");
{
  /*
    Every page in the sitemap must be reachable by following links from another
    page. A page listed in the sitemap but linked from nowhere is an orphan:
    Google will discover it and then deprioritise crawling it, which is exactly
    the "Discovered – currently not indexed" state 19 pages sat in.

    The threshold is deliberately 1, not an arbitrary "healthy" number. Pages
    have legitimately different importance — /book/follow-up is for existing
    patients and having one inbound link is correct, not a defect. Demanding
    four would mean manufacturing links to satisfy a script, which is the
    behaviour this file exists to prevent elsewhere.

    What this catches is the real regression: a page added to the sitemap and
    then linked from nothing.
  */
  // The homepage is built as /index but linked as "/" everywhere. Same
  // normalisation the sitemap section uses.
  const norm = (r) => (r === "/index" ? "/" : r);

  const inbound = Object.create(null);
  for (const route of pages) inbound[norm(route)] = 0;

  for (const route of pages) {
    const doc = html.get(route);
    if (!doc) continue;
    const from = norm(route);
    const targets = new Set(
      [...doc.matchAll(/href="(\/[^"#?]*)"/g)].map(
        (m) => m[1].replace(/\/$/, "") || "/"
      )
    );
    for (const t of targets) {
      if (t !== from && t in inbound) inbound[t]++;
    }
  }

  const orphans = Object.entries(inbound).filter(([, n]) => n === 0);
  for (const [route] of orphans) {
    fail(route, "orphan — in the sitemap but no page links to it");
  }

  const counts = Object.values(inbound);
  const min = Math.min(...counts);
  const median = counts.sort((a, b) => a - b)[Math.floor(counts.length / 2)];
  if (orphans.length === 0) {
    console.log(
      `  ${pages.length} pages, all reachable; fewest inbound ${min}, median ${median}`
    );
  }
}

// ── result ─────────────────────────────────────────────────────────────────
console.log("\n" + "=".repeat(60));
if (failures === 0) {
  console.log("ALL CHECKS PASSED");
  process.exit(0);
}
console.log(`${failures} FAILURE${failures === 1 ? "" : "S"}`);
process.exit(1);
