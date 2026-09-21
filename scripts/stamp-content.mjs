/**
 * Stamps lib/content-dates.json with the date each route's content last
 * genuinely changed.
 *
 *   npm run build && npm run stamp
 *
 * WHY THIS EXISTS
 * ---------------
 * The sitemap used to stamp every URL with `new Date()`, which told Google all
 * 39 pages changed on every deploy -- including deploys that touched one CSS
 * class. A date that always moves is a signal search engines learn to discount.
 *
 * The fix for that was a hand-maintained constant, and it failed the opposite
 * way: nobody moved it. The footer gained sitewide service-area links on
 * 2026-08-28 and the schema gained social profiles on 2026-08-21 -- real
 * changes to every page -- while the sitemap kept reporting 2026-08-16 every
 * day for five weeks. A sitemap that never changes gives Google no reason to
 * recrawl, and 19 pages sat in "Discovered - currently not indexed", never
 * fetched once.
 *
 * So neither "always now" nor "a constant someone remembers" works. The date
 * has to be derived from whether the content actually changed, which is what
 * the fingerprint in content-hash.mjs decides. `npm run verify` fails the
 * build when this file is stale, so it cannot be forgotten again.
 *
 * ORDERING
 * --------
 * The sitemap is generated during `next build` from this file, and this file
 * is written from the output of that build. So a content change takes:
 *
 *     npm run build     # sitemap still carries the old dates
 *     npm run stamp     # this script notices and updates them
 *     npm run build     # sitemap picks the new dates up
 *
 * `npm run verify` tells you when you are mid-loop rather than done.
 * Commit lib/content-dates.json -- Vercel builds from a clean checkout, so a
 * date that only exists on your machine never reaches production.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fingerprint } from "./content-hash.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP = path.join(ROOT, ".next/server/app");
const MANIFEST = path.join(ROOT, "lib/content-dates.json");

/* Next's internal shells. Not in the sitemap, so not dated. */
const NOT_PAGES = new Set(["/_global-error", "/_not-found"]);

export function routeOf(file) {
  const r = "/" + path.relative(APP, file).split(path.sep).join("/").replace(/\.html$/, "");
  return r === "/index" ? "/" : r;
}

export function walkHtml(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtml(p, out);
    else if (entry.name.endsWith(".html")) out.push(p);
  }
  return out;
}

/** Route -> fingerprint, for every real page in the current build. */
export function currentFingerprints() {
  const out = {};
  for (const file of walkHtml(APP)) {
    const route = routeOf(file);
    if (NOT_PAGES.has(route)) continue;
    out[route] = fingerprint(fs.readFileSync(file, "utf8"));
  }
  return out;
}

export function readManifest() {
  if (!fs.existsSync(MANIFEST)) return {};
  return JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
}

/* ---------------------------------------------------------------- CLI ---- */

if (import.meta.url === `file://${process.argv[1].split(path.sep).join("/")}` ||
    process.argv[1]?.endsWith("stamp-content.mjs")) {
  if (!fs.existsSync(APP)) {
    console.error("No build found at .next/server/app - run `npm run build` first.");
    process.exit(1);
  }

  const argDate = process.argv.indexOf("--date");
  const stampDate =
    argDate !== -1 && process.argv[argDate + 1]
      ? process.argv[argDate + 1]
      : new Date().toISOString().slice(0, 10);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(stampDate)) {
    console.error(`--date must be YYYY-MM-DD, got "${stampDate}"`);
    process.exit(1);
  }

  const current = currentFingerprints();
  const manifest = readManifest();
  const next = {};
  const changed = [];
  const added = [];

  for (const route of Object.keys(current).sort()) {
    const prev = manifest[route];
    if (prev && prev.hash === current[route]) {
      next[route] = prev;
      continue;
    }
    (prev ? changed : added).push(route);
    next[route] = { hash: current[route], date: stampDate };
  }

  const removed = Object.keys(manifest).filter((r) => !(r in current));

  fs.writeFileSync(MANIFEST, JSON.stringify(next, null, 2) + "\n");

  const report = (label, list) =>
    list.length && console.log(`  ${label} (${list.length}): ${list.join(", ")}`);

  if (!changed.length && !added.length && !removed.length) {
    console.log(`  no content changed - ${Object.keys(next).length} routes left as they were`);
  } else {
    console.log(`  stamped ${stampDate}`);
    report("content changed", changed);
    report("new routes", added);
    report("dropped from build", removed);
    console.log("\n  Run `npm run build` again so the sitemap picks these up, then commit");
    console.log("  lib/content-dates.json.");
  }
}
