/**
 * JSON-LD schema builders.
 *
 * Every value here resolves through lib/site.ts, which mirrors
 * docs/00-BUSINESS-FACTS.md. Never hand-write a schema block in a page and
 * never put a fact in schema that isn't verified in the doc.
 *
 * Two standing prohibitions (see docs/03-SEO-TECHNICAL.md):
 *   1. No Review or AggregateRating. The site testimonials have no verifiable
 *      source or date, and self-serving review markup is a manual-action risk.
 *   2. No `address`. Kim works from home; areaServed without streetAddress is
 *      valid schema for a service-area business, not a degraded version of it.
 */

import { SITE } from "./site";

/** Stable @id values so entities link to each other instead of duplicating. */
export const ID = {
  practice: `${SITE.url}/#practice`,
  person: `${SITE.url}/#kim`,
  website: `${SITE.url}/#website`,
} as const;

export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": ID.practice,
    name: SITE.name,
    url: SITE.url,
    description: SITE.entityStatement,
    telephone: SITE.contact.phone,
    email: SITE.contact.email,
    medicalSpecialty: "Endocrine",
    priceRange: "$$",
    // Service-area business: no streetAddress by design.
    areaServed: [
      { "@type": "State", name: "Utah" },
      ...SITE.focusCounties.map((name) => ({
        "@type": "AdministrativeArea",
        name,
      })),
    ],
    availableService: {
      "@type": "MedicalTherapy",
      name: "Bioidentical Hormone Replacement Therapy",
    },
    employee: { "@id": ID.person },
    founder: { "@id": ID.person },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book a free phone consultation",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/book`,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ID.person,
    name: SITE.provider.name,
    honorificSuffix: SITE.provider.postNominal,
    jobTitle: SITE.provider.jobTitle,
    description: SITE.entityStatement,
    url: `${SITE.url}/about`,
    image: `${SITE.url}/kim-portrait.jpg`,
    worksFor: { "@id": ID.practice },
    knowsAbout: SITE.provider.knowsAbout,
    // Credential strings are the four verified in docs/00-BUSINESS-FACTS.md.
    hasCredential: SITE.provider.credentials.map((name) => ({
      "@type": "EducationalOccupationalCredential",
      name,
    })),
    areaServed: { "@type": "State", name: "Utah" },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ID.website,
    url: SITE.url,
    name: SITE.name,
    description: SITE.entityStatement,
    publisher: { "@id": ID.practice },
    inLanguage: "en-US",
  };
}

/** Breadcrumbs. Pass ordered [name, path] pairs; "Home" is prepended. */
export function breadcrumbSchema(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map(
      (crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: `${SITE.url}${crumb.path}`,
      })
    ),
  };
}

/**
 * A bookable service with its price.
 *
 * Published prices are a genuine asset — concrete, checkable figures are what
 * AI systems quote and what pre-empts the top pre-booking objection. Lab costs
 * are deliberately absent: Kim reports they vary by panel, and a wrong number
 * is worse than no number.
 */
export function serviceSchema({
  name,
  description,
  price,
  path,
}: {
  name: string;
  description: string;
  price?: number;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Bioidentical hormone replacement therapy",
    provider: { "@id": ID.practice },
    areaServed: { "@type": "State", name: "Utah" },
    url: `${SITE.url}${path}`,
    ...(price !== undefined && {
      offers: {
        "@type": "Offer",
        price: String(price),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE.url}${path}`,
      },
    }),
  };
}

/**
 * The service scoped to one city, for service-area pages.
 *
 * `areaServed` is a City rather than the State — that is the entire structured
 * -data justification for a city page existing. Still no `address`: naming a
 * city Kim serves is not the same as claiming premises there, and every one of
 * these pages says in prose that visits are virtual and there is no office.
 */
export function localServiceSchema({
  city,
  description,
  path,
}: {
  city: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Bioidentical hormone replacement therapy in ${city}, Utah`,
    description,
    serviceType: "Bioidentical hormone replacement therapy",
    provider: { "@id": ID.practice },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Utah" },
    },
    // Virtual delivery is the fact that keeps this honest.
    serviceOutput: "Virtual consultation",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE.url}/book`,
      servicePhone: SITE.contact.phone,
      availableLanguage: "en-US",
    },
    url: `${SITE.url}${path}`,
  };
}

/**
 * MedicalWebPage for educational content.
 *
 * `author`/`reviewedBy` point at the sitewide `#kim` Person rather than
 * repeating it, which is what links the content to a named, credentialed
 * entity — the signal both Google's quality systems and AI citation weight.
 */
export function medicalWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url: `${SITE.url}${path}`,
    inLanguage: "en-US",
    author: { "@id": ID.person },
    publisher: { "@id": ID.practice },
    about: {
      "@type": "MedicalTherapy",
      name: "Bioidentical Hormone Replacement Therapy",
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedGender: "female",
      geographicArea: { "@type": "State", name: "Utah" },
    },
  };
}

/**
 * Article, for the educational pieces under /resources.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * `author` is the PRACTICE, not Kim — and that is deliberate.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * These articles were drafted with AI assistance and Kim has not personally
 * reviewed them yet. The page says so in its disclosure, and the byline
 * deliberately reads "About the practice" rather than "Reviewed by".
 *
 * Naming Kim as `author` in schema would contradict all of that — it would
 * assert to Google and to AI systems that a named, credentialed clinician
 * wrote content she has not read. On health content that is misattribution,
 * and the entity trust it would borrow is exactly the thing this project
 * cannot afford to spend dishonestly.
 *
 * WHEN KIM REVIEWS THEM (OPEN-QUESTIONS.md item 9), change three things
 * together, never one alone:
 *   1. `author` here → `{ "@id": ID.person }`, and add `reviewedBy`
 *   2. Pass `reviewedOn` to <AuthorByline />
 *   3. Update the AI-drafting disclosure at the foot of the page
 *
 * `dateModified` is omitted rather than defaulted to the publish date. A
 * fabricated freshness signal is worse than no freshness signal.
 */
export function articleSchema({
  slug,
  headline,
  description,
  datePublished,
  image,
  citations,
}: {
  slug: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
  citations?: Array<{ title: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    // Google truncates headline handling past ~110 characters.
    headline: headline.slice(0, 110),
    description,
    datePublished,
    url: `${SITE.url}/resources/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE.url}/resources/${slug}`,
    },
    ...(image && { image: `${SITE.url}${image}` }),
    author: { "@id": ID.practice },
    publisher: { "@id": ID.practice },
    inLanguage: "en-US",
    about: {
      "@type": "MedicalTherapy",
      name: "Bioidentical Hormone Replacement Therapy",
    },
    // Outbound citation to authoritative sources is a trust signal, and these
    // articles already cite PubMed, NAMS, NIEHS, NCI and EWG on the page.
    ...(citations &&
      citations.length > 0 && {
        citation: citations.map((c) => ({
          "@type": "CreativeWork",
          name: c.title,
          url: c.url,
        })),
      }),
  };
}

/** FAQPage. Answers must also be visible on the page — schema-only content is a violation. */
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
