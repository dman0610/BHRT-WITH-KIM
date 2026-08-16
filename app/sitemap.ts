import type { MetadataRoute } from "next";
import { SITE, PAID_OFFERINGS } from "@/lib/site";
import { SYMPTOM_PAGES, GUIDE_PAGES, SERVICE_AREA_PAGES } from "@/lib/content";
import { ARTICLES } from "@/lib/articles";

/**
 * Generated from the route list rather than hand-maintained, so new booking
 * offerings and articles can't be forgotten.
 *
 * `priority` is a weak hint at best — don't over-tune it. Honest `lastModified`
 * matters more, and only if it's actually honest.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * NEVER USE `new Date()` HERE.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * This previously stamped every URL with the build time, which told Google all
 * 39 pages changed on every deploy — including deploys that touched a single
 * CSS class. A date that always moves is a signal search engines learn to
 * discount, so the field ends up worth nothing precisely when you need it.
 *
 * Dates now come from the content itself: the clinician review date for
 * reviewed pages, each article's own publication date, and a fixed constant
 * for pages whose content is stable. Move CONTENT_UPDATED by hand when
 * something on those pages actually changes.
 *
 * `npm run verify` fails the build if `new Date()` reappears in this file.
 */

/** Bump by hand when static page copy genuinely changes. */
const CONTENT_UPDATED = "2026-08-16";

export default function sitemap(): MetadataRoute.Sitemap {
  const stable = new Date(`${CONTENT_UPDATED}T00:00:00Z`);
  /* Symptom, guide and geo pages all carry Kim's review date. */
  const reviewed = new Date(`${SITE.contentReviewedOn}T00:00:00Z`);

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

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE.url}${path}`,
      lastModified: stable,
      changeFrequency,
      priority,
    })),
    ...PAID_OFFERINGS.map((offering) => ({
      url: `${SITE.url}/book/${offering.slug}`,
      lastModified: stable,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Symptom pages carry the search volume; guides carry the booking intent.
    ...[...SYMPTOM_PAGES, ...GUIDE_PAGES].map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICE_AREA_PAGES.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    /*
      Articles use the LATER of their publication date and Kim's review date —
      she read and corrected them, which is a genuine modification, but a
      pre-review article should not claim a date it did not earn.
    */
    ...Object.entries(ARTICLES).map(([slug, article]) => ({
      url: `${SITE.url}/resources/${slug}`,
      lastModified:
        new Date(article.date) > reviewed ? new Date(article.date) : reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
