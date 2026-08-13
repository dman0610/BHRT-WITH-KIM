/**
 * Content page data model.
 *
 * Symptom pages and commercial pages share one shape, per the template in
 * docs/05-CONTENT-STANDARDS.md. Keeping content as data rather than JSX means
 * the FAQ block and its `FAQPage` schema generate from the same source, so
 * schema can never describe something the page doesn't show — which is itself
 * a structured-data violation.
 *
 * Writing rules enforced by convention, not types:
 *  - Every `heading` is a QUESTION, phrased how people ask it.
 *  - Every section opens with a self-contained direct answer, then elaborates.
 *  - Third person about the population, never second person diagnosing the reader.
 *  - No timeline promises, no outcome guarantees, no unrecognized diagnoses.
 *  - Sources link to authoritative TOPIC pages, never invented deep links.
 */

export type ContentSection = {
  /** Rendered as an H2. Must be phrased as a question. */
  heading: string;
  /**
   * Paragraphs. The first should stand alone as a correct answer to the
   * heading — that is what gets extracted into an AI answer.
   */
  paragraphs: string[];
  /** Optional bullets rendered after the paragraphs. */
  bullets?: string[];
};

export type ContentFaq = {
  question: string;
  /** 40–80 words, self-contained. Assume it will be read in isolation. */
  answer: string;
};

export type ContentSource = {
  label: string;
  /** Authoritative topic page. Never a fabricated link to a specific paper. */
  url: string;
};

/**
 * Sections on the /symptoms hub.
 *
 * With ten symptom pages a flat list reads as a wall of links, which is the
 * exact clutter the hub exists to prevent. Grouping is presentation only — it
 * has no effect on routing, schema, or the sitemap.
 */
export const SYMPTOM_GROUPS = [
  "Sleep & energy",
  "Body & metabolism",
  "Mind & mood",
  "Cycle & intimacy",
] as const;

export type SymptomGroup = (typeof SYMPTOM_GROUPS)[number];

export type ContentPage = {
  slug: string;
  /** Hub section. Required on symptom pages; unused by guides and geo pages. */
  group?: SymptomGroup;
  /** Title segment only — the layout template appends the site name. 44 char budget. */
  titleSegment: string;
  /** 140–155 characters. */
  description: string;
  /** Single H1, containing the primary keyword in natural language. */
  h1: string;
  /**
   * The direct answer paragraph under the H1. Self-contained and quotable on
   * its own — this is the single most extractable passage on the page.
   */
  intro: string;
  sections: ContentSection[];
  faqs: ContentFaq[];
  sources?: ContentSource[];
  /** Breadcrumb trail above this page, e.g. [{ name: "Symptoms", path: "/symptoms" }]. */
  breadcrumb?: { name: string; path: string }[];
  /** Related internal links rendered near the end. */
  related?: { label: string; href: string }[];
  /** Show the shared "how care works" block (LabCorp, pharmacy, cadence). */
  showHowCareWorks?: boolean;
};

/**
 * A service-area page. Same rendering contract as a content page, plus the
 * city facts the hub listing and the `Service` schema need.
 *
 * The bar these have to clear is set in docs/02-KEYWORD-MAP.md: 400+ words
 * genuinely unique to the city, a real reason virtual care serves that area,
 * a city-specific FAQ block, and links to relevant symptom pages. A page that
 * could be produced by find-and-replacing the city name is a doorway page and
 * risks the whole domain — delete it rather than ship it.
 *
 * Two things every one of these must say plainly, because the search intent
 * ("BHRT <city>") implies a clinic and there isn't one:
 *   1. All visits are virtual. There is no office in this city.
 *   2. Kim is licensed in Utah, so the city matters for convenience, not eligibility.
 */
export type GeoPage = ContentPage & {
  city: string;
  county: string;
  /** One-line summary for the /service-areas hub listing. */
  hubBlurb: string;
};
