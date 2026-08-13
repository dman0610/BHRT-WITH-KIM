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
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...PAID_OFFERINGS.map((offering) => ({
      url: `${SITE.url}/book/${offering.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Symptom pages carry the search volume; guides carry the booking intent.
    ...[...SYMPTOM_PAGES, ...GUIDE_PAGES].map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICE_AREA_PAGES.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...Object.keys(ARTICLES).map((slug) => ({
      url: `${SITE.url}/resources/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
