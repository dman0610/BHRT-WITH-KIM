/**
 * Single source of truth for every business fact published on this site.
 *
 * Mirrors docs/00-BUSINESS-FACTS.md. If the two disagree, the doc wins and
 * this file is the bug.
 *
 * Nothing outside this file may hardcode a phone number, price, credential,
 * or booking URL. Never add a fact that isn't verified in the doc.
 */

const HEALTHIE_PROVIDER_ID = "4099018";
const BRAND_COLOR = "4A9625";

/**
 * Healthie "offerings" (packages). Supplied by Kim 2026-08-06.
 *
 * These use the offering mechanism (require_offering=true + offering_id),
 * which is a different system from the appt_type_ids the site used before.
 * The old appointment-type embed is retired.
 */
export const OFFERINGS = {
  freeConsult: {
    id: "258963",
    slug: "", // lives at /book — the primary CTA target
    label: "Free Phone Consultation",
    /**
     * Always state the 15 minutes. Unqualified, "free consultation" reads as a
     * full visit, and someone arriving expecting an hour of medical guidance
     * has a bad first experience before they've paid anything.
     */
    durationMinutes: 15,
    blurb:
      "A free 15-minute phone call to ask questions, see whether working together is a fit, and start a lab order if testing makes sense.",
    metaDescription:
      "Book a free 15-minute phone call with Kim Yadon, FNP-C. Virtual hormone care across Utah. A lab order can be provided at no charge; lab fees are separate.",
  },
  initial: {
    id: "258961",
    slug: "initial-consultation",
    label: "Initial Consultation",
    durationMinutes: 60,
    blurb:
      "A full hour with Kim to go through your history, symptoms, and what testing makes sense.",
    /*
      Written per offering rather than composed from `blurb` plus a shared
      suffix. The blurbs differ by 37 characters, so a single template put two
      of the three pages outside the 140–155 meta-description window.
    */
    metaDescription:
      "A full hour with Kim Yadon, FNP-C to go through your history, symptoms, and what testing makes sense. $200, by virtual visit, for women across Utah.",
  },
  followUp: {
    id: "258962",
    slug: "follow-up",
    label: "Follow-Up Visit",
    durationMinutes: null,
    blurb: "Ongoing visits to review labs and adjust your plan.",
    metaDescription:
      "Ongoing visits with Kim Yadon, FNP-C to review lab results and adjust your plan. Typically every 3 months, by virtual visit for women across Utah.",
  },
  comprehensive: {
    id: "258966",
    slug: "comprehensive-package",
    label: "Comprehensive Package",
    durationMinutes: null,
    blurb:
      "Five visits over twelve months, one every three months, plus coaching sessions.",
    metaDescription:
      "Five visits over twelve months, one every three months, plus coaching sessions. $1,500 with Kim Yadon, FNP-C, by virtual visit for women across Utah.",
  },
} as const;

export type OfferingKey = keyof typeof OFFERINGS;

/** The paid offerings, each bookable at /book/<slug>. */
export const PAID_OFFERINGS = [
  OFFERINGS.initial,
  OFFERINGS.followUp,
  OFFERINGS.comprehensive,
] as const;

/** Build a Healthie booking embed URL for a single offering. */
export function healthieEmbedUrl(offering: OfferingKey): string {
  const params = new URLSearchParams({
    dietitian_id: HEALTHIE_PROVIDER_ID,
    require_offering: "true",
    offering_id: OFFERINGS[offering].id,
    hide_package_images: "true",
    hide_embed_title: "false",
    primary_color: BRAND_COLOR,
  });
  return `https://secure.gethealthie.com/appointments/embed_appt?${params}`;
}

export const SITE = {
  url: "https://bhrtwithkim.com",
  name: "BHRT with Kim",

  /**
   * The canonical entity statement. Keep identical to /llms.txt, the
   * MedicalBusiness schema description, and the Google Business Profile
   * description — AI systems cross-reference these and contradictions
   * suppress citation confidence.
   */
  entityStatement:
    "Kim Yadon, FNP-C is a board-certified family nurse practitioner providing " +
    "bioidentical hormone replacement therapy (BHRT) through virtual consultations " +
    "to women throughout Utah, with a focus on perimenopause and postmenopause.",

  provider: {
    name: "Kim Yadon",
    postNominal: "FNP-C",
    /** Rendered name for bylines and schema. */
    fullName: "Kim Yadon, FNP-C",
    jobTitle: "Board Certified Family Nurse Practitioner",
    /** Verified 2026-08-07. Do not add post-nominals beyond FNP-C. */
    credentials: [
      "Board Certified Nurse Practitioner",
      "Trained in BHRT through Worldlink Medical",
      "Trained in Functional Medicine",
      "Certified Diabetes Care and Education Specialist (CDCES)",
    ],
    knowsAbout: [
      "Bioidentical hormone replacement therapy",
      "Menopause",
      "Perimenopause",
      "Hormone testing",
      "Thyroid health",
      "Functional medicine",
    ],
  },

  contact: {
    phone: "(801) 573-0606",
    phoneE164: "+18015730606",
    /**
     * Business inbox — replaces Kim's personal Gmail (Kyadon300@gmail.com),
     * which should no longer appear anywhere public.
     *
     * This is a RECEIVING address only. It cannot be used as the From address
     * for the marketing sequence: email providers require a sending domain you
     * control, and a gmail.com From sent through a third party fails DMARC
     * alignment. Bulk sending needs an address on bhrtwithkim.com, with
     * replies forwarded here. See docs/06-EMAIL.md.
     */
    email: "bhrtwithkim@gmail.com",
    /**
     * No street address by design. Kim works from home; the address stays
     * unpublished and hidden on the Google Business Profile. Hiding it costs
     * no ranking — Google still uses it for proximity. See docs/08-LOCAL-GBP.md.
     *
     * The CITY is publishable and useful; the street address is not.
     */
    city: "South Jordan",
    state: "Utah",
    areaServed: "Utah",
    serviceAreaLine: "Serving patients in Utah",
  },

  /**
   * Counties where Kim concentrates, in priority order. South Jordan is the
   * proximity anchor for Google Business Profile ranking.
   */
  focusCounties: ["Salt Lake County", "Utah County"],

  booking: {
    /** Primary CTA target sitewide — the free consultation. */
    path: "/book",
    /**
     * The consultation and the lab ORDER are free. The labs themselves are
     * billed separately. Never shorten this in a way that implies free labs.
     */
    freeConsultNote:
      "Kim can provide a lab order at no charge — lab fees are billed separately and vary.",
  },

  /** Lab costs are not included in any package. No dollar figures: Kim says they vary by panel. */
  labDisclosure:
    "Lab costs are not included and vary depending on which panels are ordered.",

  /**
   * How care actually works. Verified with Kim 2026-08-10.
   *
   * These concrete, checkable specifics are what AI assistants quote and what
   * answers the objection a virtual practice always faces — "how does this
   * work if she isn't local?" Publish them plainly and often.
   *
   * Wording rules: never a guaranteed duration; never imply Kim performs the
   * blood draw (LabCorp does); never estimate a lab price.
   */
  process: {
    labProvider: "LabCorp",
    labSteps: [
      "You receive an email with your lab order",
      "You schedule an appointment with LabCorp",
      "You visit a LabCorp Patient Service Center for the draw",
    ],
    pharmacy: "any compounding pharmacy you choose",
    followUpCadence: "every 3 months, or sooner if needed",
  },
} as const;
