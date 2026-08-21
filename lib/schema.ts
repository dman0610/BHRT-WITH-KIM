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
 *   2. NO `streetAddress`, ever. Kim works from home, and a published street
 *      address is both a Google Business Profile suspension trigger and a
 *      citation that propagates to scraper directories and cannot be retracted.
 *
 * Note the second rule was previously written as "no `address`" outright. That
 * was over-broad: locality, region and country are exactly what a service-area
 * business should publish, and Rich Results Test flags their absence. The line
 * is the STREET, not the address object. `npm run verify` fails the build if
 * `streetAddress` ever appears.
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
    image: `${SITE.url}/kim-portrait.jpg`,
    medicalSpecialty: "Endocrine",
    priceRange: "$$",
    /*
      Locality, region and country only — deliberately NO streetAddress.
      This is the correct shape for a service-area business: Google still uses
      the registered Google Business Profile address for proximity, so nothing
      is lost by withholding the street, and publishing Kim's home address
      would be both a suspension trigger and irretrievable once scraped.
    */
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.contact.city,
      addressRegion: "UT",
      addressCountry: "US",
    },
    /*
      Kim's words: "These hours are not when I have appointments, but people can
      reach me Monday - Friday 9 am to 5 pm." Schema has no way to express that
      distinction, so the CONTACT PAGE carries the caveat in prose. Do not let
      site copy present these as bookable slots.
    */
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SITE.contact.hours.days,
      opens: SITE.contact.hours.opens,
      closes: SITE.contact.hours.closes,
    },
    paymentAccepted: "Cash, credit card",
    /*
      The practice's own confirmed profiles. Distinct from the Person's
      `sameAs`: this resolves the BUSINESS entity — website, Google Business
      Profile, Facebook and Instagram as one practice — while the Person block
      resolves Kim herself against the NPI registry.

      Both matter, and they are what let a retrieval system tell this practice
      apart from a different Kim who already ranks on the brand query.
    */
    sameAs: [SITE.social.facebook, SITE.social.instagram],
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
    /*
      Public, checkable identifiers — NPI via NPPES, the licence via Utah DOPL.
      A verifiable identifier is worth more to entity trust than any adjective,
      and it is what lets health directories match this Person to their records.

      The licence TYPE is APRN. That is a category, never a post-nominal:
      "Kim Yadon, FNP-C" is the only authorized rendering of her name, and
      `npm run verify` fails the build if APRN is ever attached to it.
    */
    /*
      The NPPES registry entry for her NPI — verified live.

      `identifier` states the number; `sameAs` points at the authoritative
      record holding it. That is the difference between a claim on a website
      and a claim a retrieval system can resolve against a government source,
      and it is the strongest entity-disambiguation signal available here.
    */
    sameAs: [
      `https://npiregistry.cms.hhs.gov/provider-view/${SITE.provider.npi}`,
      SITE.social.facebook,
      SITE.social.instagram,
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "NPI",
        name: "National Provider Identifier",
        value: SITE.provider.npi,
      },
      {
        "@type": "PropertyValue",
        propertyID: `${SITE.provider.licenseState} ${SITE.provider.licenseType} license`,
        value: SITE.provider.licenseNumber,
      },
    ],
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

/**
 * ProfilePage for /about, declaring Kim as the subject of her own page.
 *
 * The `Person` entity is already emitted sitewide from the root layout, but as
 * a free-floating node — nothing says which page is *about* her. `mainEntity`
 * makes that explicit, which is what ties a named, credentialed individual to
 * the subject matter for both Google's quality systems and AI retrieval.
 *
 * Worth knowing: Rich Results Test will not report `Person` or `ProfilePage`,
 * because neither is a rich-result-eligible type. Absence from that tool is not
 * evidence the markup is missing — check the rendered HTML instead.
 */
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${SITE.provider.fullName} — ${SITE.provider.jobTitle}`,
    url: `${SITE.url}/about`,
    inLanguage: "en-US",
    mainEntity: { "@id": ID.person },
    about: { "@id": ID.person },
    publisher: { "@id": ID.practice },
  };
}

/**
 * A typed page wrapper for the pages that carried only the sitewide entity
 * graph — `/contact`, `/resources`, `/testimonials`.
 *
 * Untyped pages tell a crawler what the business is but nothing about what the
 * page is for. `ContactPage` and `CollectionPage` are cheap and specific, and
 * they are what stops these reading as generic.
 */
export function typedPageSchema({
  type,
  name,
  description,
  path,
}: {
  type: "ContactPage" | "CollectionPage" | "WebPage";
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${SITE.url}${path}`,
    inLanguage: "en-US",
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.practice },
    publisher: { "@id": ID.practice },
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
    /*
      Kim personally read and corrected this content on the date in
      SITE.contentReviewedOn. `reviewedBy` pointing at a named, credentialed
      clinician is the single strongest E-E-A-T signal a health page can carry.
      It is also a claim — only move the date when she has actually re-read.
    */
    reviewedBy: { "@id": ID.person },
    lastReviewed: SITE.contentReviewedOn,
    dateModified: SITE.contentReviewedOn,
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
 * `author` is the PRACTICE. `reviewedBy` is Kim. The distinction is the point.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * These articles were drafted with AI assistance. Kim read and corrected them
 * on 2026-08-12 and 2026-08-15 — several passages were removed or rewritten at
 * her instruction — so `reviewedBy` naming her is now true and is the strongest
 * credibility signal these pages can carry.
 *
 * She still did not WRITE them. Promoting her to `author` would assert that a
 * named, credentialed clinician authored content she reviewed, which is
 * misattribution on health content and spends entity trust dishonestly. Review
 * and authorship are different claims; the markup keeps them different.
 *
 * `dateModified` was omitted while there was no real modification date — a
 * fabricated freshness signal is worse than none. That changed on 2026-08-16:
 * Kim's corrections removed and rewrote whole passages, so the review date is
 * a genuine modification and the field is now true rather than invented.
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
    reviewedBy: { "@id": ID.person },
    lastReviewed: SITE.contentReviewedOn,
    dateModified: SITE.contentReviewedOn,
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
