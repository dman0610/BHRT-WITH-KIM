import type { MetadataRoute } from "next";
import { SITE, PAID_OFFERINGS } from "@/lib/site";
import { SYMPTOM_PAGES, GUIDE_PAGES, SERVICE_AREA_PAGES } from "@/lib/content";
import { ARTICLES } from "@/lib/articles";
import CONTENT_DATES from "@/lib/content-dates.json";

/**
 * Generated from the route list rather than hand-maintained, so new booking
 * offerings and articles can't be forgotten.
 *
 * `priority` and `changeFrequency` are weak hints at best and Google has said
 * it ignores them. Don't over-tune them. `lastModified` is the field that
 * actually does work, and only while it stays honest.
 *
 * -------------------------------------------------------------------------
 * WHERE `lastModified` COMES FROM, AND THE TWO WAYS THIS HAS BEEN WRONG
 * -------------------------------------------------------------------------
 *
 * 1. It used `new Date()`. That told Google all 39 pages changed on every
 *    deploy, including deploys that touched a single CSS class. A date that
 *    always moves is one search engines learn to discount, so the field ended
 *    up worth nothing precisely when it was needed.
 *
 * 2. It was then pinned to a hand-maintained constant, with a comment asking
 *    whoever edited content to move it. Nobody did. The footer gained sitewide
 *    service-area links on 2026-08-28 and both schema entities gained social
 *    profiles on 2026-08-21 -- genuine changes to every page on the site --
 *    while the sitemap reported 2026-08-16 every day for five weeks. Google
 *    had no reason to recrawl anything, and 19 URLs sat in "Discovered -
 *    currently not indexed" without being fetched once.
 *
 * Dates now come from `lib/content-dates.json`, which `npm run stamp` writes
 * by fingerprinting each page's rendered text, links, alt text and JSON-LD.
 * Restyling does not move a date; changing copy or links does. `npm run
 * verify` fails the build when that file is stale, so the honest-date rule is
 * enforced rather than merely requested.
 *
 * `npm run verify` also still fails the build if `new Date()` reappears here.
 */

const DATES = CONTENT_DATES as Record<string, { hash: string; date: string }>;

/**
 * The floor date, used only if a route is somehow missing from the manifest.
 * Verify fails the build in that case, so this is a safety net that should
 * never be load-bearing -- deliberately old, so a gap can never masquerade as
 * fresh content.
 */
const FLOOR = "2026-08-16";

function lastModified(path: string): Date {
  const iso = DATES[path]?.date ?? FLOOR;
  return new Date(`${iso}T00:00:00Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.85, changeFrequency: "monthly" },
    { path: "/symptoms", priority: 0.85, changeFrequency: "monthly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service-areas", priority: 0.75, changeFrequency: "monthly" },
    { path: "/quiz", priority: 0.8, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/testimonials", priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  ];

  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => ({
    url: `${SITE.url}${path}`,
    lastModified: lastModified(path),
    changeFrequency,
    priority,
  });

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) =>
      entry(path, priority, changeFrequency)
    ),
    ...PAID_OFFERINGS.map((offering) =>
      entry(`/book/${offering.slug}`, 0.7, "monthly")
    ),
    // Symptom pages carry the search volume; guides carry the booking intent.
    ...[...SYMPTOM_PAGES, ...GUIDE_PAGES].map((page) =>
      entry(`/${page.slug}`, 0.8, "monthly")
    ),
    ...SERVICE_AREA_PAGES.map((page) => entry(`/${page.slug}`, 0.7, "monthly")),
    ...Object.keys(ARTICLES).map((slug) =>
      entry(`/resources/${slug}`, 0.6, "monthly")
    ),
  ];
}
