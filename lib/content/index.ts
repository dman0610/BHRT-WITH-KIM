import type { ContentPage, GeoPage, SymptomGroup } from "./types";
import { SYMPTOM_GROUPS } from "./types";
import { hotFlashes } from "./hot-flashes";
import { sleepInsomnia } from "./sleep-insomnia";
import { menopauseFatigue } from "./menopause-fatigue";
import { brainFog } from "./brain-fog";
import { hormonalWeightGain } from "./hormonal-weight-gain";
import { lowLibido } from "./low-libido";
import { moodAnxiety } from "./mood-anxiety";
import { irregularPeriods } from "./irregular-periods";
import { vaginalDryness } from "./vaginal-dryness";
import { jointPain } from "./joint-pain";
import { bhrtCostUtah } from "./bhrt-cost-utah";
import { bhrtVsHrt } from "./bhrt-vs-hrt";
import { findAHormoneProvider } from "./find-a-hormone-provider";
import { southJordan } from "./areas/south-jordan";
import { saltLakeCity } from "./areas/salt-lake-city";
import { draper } from "./areas/draper";
import { sandy } from "./areas/sandy";
import { lehi } from "./areas/lehi";

/**
 * Symptom pages, served by /symptoms/[slug].
 *
 * Adding one means writing a data file and adding it here — route, metadata,
 * schema, breadcrumbs, and sitemap entry all follow automatically.
 *
 * Order here is the ship order from docs/02-KEYWORD-MAP.md. The /symptoms hub
 * groups by `group` rather than reading this order, so a new page lands in its
 * section wherever it is added — but keep the list tidy anyway.
 */
export const SYMPTOM_PAGES: ContentPage[] = [
  hotFlashes,
  sleepInsomnia,
  menopauseFatigue,
  brainFog,
  hormonalWeightGain,
  lowLibido,
  moodAnxiety,
  irregularPeriods,
  vaginalDryness,
  jointPain,
];

/**
 * Commercial-intent pages. Each has its own top-level route because the slug
 * is the keyword — `/bhrt-cost-utah` rather than `/guides/bhrt-cost-utah`.
 */
export const GUIDE_PAGES: ContentPage[] = [
  bhrtCostUtah,
  bhrtVsHrt,
  findAHormoneProvider,
];

/**
 * Service-area pages, served by /service-areas/[city].
 *
 * Ordered by map-pack realism, which is also the order they were built:
 * South Jordan (the anchor) first, then the rest of Salt Lake County, then the
 * Utah County anchor.
 *
 * Do NOT add a city by copying one of these and swapping the name. Each page
 * answers a question the others don't — that is the only thing separating a
 * service-area page from a doorway page. The bar is in docs/02-KEYWORD-MAP.md.
 */
export const SERVICE_AREA_PAGES: GeoPage[] = [
  southJordan,
  saltLakeCity,
  draper,
  sandy,
  lehi,
];

/** Everything, for the sitemap. */
export const ALL_CONTENT_PAGES: ContentPage[] = [
  ...SYMPTOM_PAGES,
  ...GUIDE_PAGES,
  ...SERVICE_AREA_PAGES,
];

/** Slug without the `symptoms/` prefix, for the dynamic route segment. */
export function symptomSlug(page: ContentPage): string {
  return page.slug.replace(/^symptoms\//, "");
}

export function getSymptomPage(slug: string): ContentPage | undefined {
  return SYMPTOM_PAGES.find((p) => symptomSlug(p) === slug);
}

/**
 * Symptom pages bucketed for the /symptoms hub, in SYMPTOM_GROUPS order.
 *
 * Empty groups are dropped, so removing the last page from a section removes
 * its heading rather than leaving an empty one on the page.
 */
export function groupedSymptomPages(): Array<{
  group: SymptomGroup;
  pages: ContentPage[];
}> {
  return SYMPTOM_GROUPS.map((group) => ({
    group,
    pages: SYMPTOM_PAGES.filter((p) => p.group === group),
  })).filter((section) => section.pages.length > 0);
}

/** Slug without the `service-areas/` prefix, for the dynamic route segment. */
export function areaSlug(page: GeoPage): string {
  return page.slug.replace(/^service-areas\//, "");
}

export function getServiceArea(slug: string): GeoPage | undefined {
  return SERVICE_AREA_PAGES.find((p) => areaSlug(p) === slug);
}
