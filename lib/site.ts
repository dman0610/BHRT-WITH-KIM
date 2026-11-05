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
const NPI = "1316718968";
const BRAND_COLOR = "4A9625";

/** "$300" — every price on the site is rendered through this. */
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

/**
 * Healthie "offerings" (packages).
 *
 * Restructured 2026-11-05 at Kim's request. The previous structure — $200 per
 * visit, a $950 five-visit Comprehensive Package, and $75 coaching add-ons —
 * is retired in full. What replaces it, in Kim's words: "Getting started with
 * BHRT, simply and transparently. Hormone care works best with follow-through,
 * so I offer a starter package that covers your first two visits for one clear
 * price." The free 15-minute phone call stays as the front door (Dallin,
 * 2026-11-05).
 *
 * The retired /book/initial-consultation and /book/comprehensive-package
 * routes redirect to /book/new-patient-package — see next.config.ts.
 *
 * `id` is the Healthie offering id, or `null` when Kim has not yet created the
 * offering in Healthie. A null id renders the package page without an embed
 * and routes booking through the free call, which is the funnel anyway.
 */
export const OFFERINGS = {
  freeConsult: {
    id: "258963" as string | null,
    slug: "", // lives at /book — the primary CTA target
    label: "Free Phone Consultation",
    /**
     * Price in USD, or `null` where none is documented. `null` means NOT
     * PUBLISHED, not free.
     */
    price: 0 as number | null,
    /**
     * Always state the 15 minutes. Unqualified, "free consultation" reads as a
     * full visit, and someone arriving expecting an hour of medical guidance
     * has a bad first experience before they've paid anything.
     */
    durationMinutes: 15 as number | null,
    includes: [
      "About 15 minutes by phone with Kim Yadon, FNP-C",
      "A chance to ask questions and describe what has been going on",
      "Working out whether this is the right fit, with no obligation",
      "A lab order at no charge if testing is the sensible next step",
    ],
    blurb:
      "A free 15-minute phone call to ask questions, see whether working together is a fit, and start a lab order if testing makes sense.",
    metaDescription:
      "Book a free 15-minute phone call with Kim Yadon, FNP-C. Virtual hormone care across Utah. A lab order can be provided at no charge; lab fees are separate.",
  },
  newPatient: {
    // Not yet created in Healthie — ask Kim for the id. See OPEN-QUESTIONS.
    id: null as string | null,
    slug: "new-patient-package",
    label: "New Patient Package",
    price: 300 as number | null,
    /** Length of the initial visit inside the package. */
    durationMinutes: 60 as number | null,
    includes: [
      "An initial virtual visit of about 60 minutes: your history, symptoms, goals, and a personalized care plan",
      "A follow-up virtual visit about 12 weeks later: a review of your response and your labs, and any adjustments to the plan",
      "Messaging between visits through the secure patient portal, at no extra charge",
    ],
    blurb:
      "Your first two visits for one price: a 60-minute initial visit and a follow-up about 12 weeks later, with portal messaging in between.",
    metaDescription:
      "The New Patient Package with Kim Yadon, FNP-C: a 60-minute initial visit and a 12-week follow-up for $300, by virtual visit for women across Utah.",
  },
  followUp: {
    id: "258962" as string | null,
    slug: "follow-up",
    label: "Follow-Up Visit",
    price: 100 as number | null,
    // Kim: follow-ups are "shorter". No figure given, so none is published.
    durationMinutes: null as number | null,
    includes: [
      "Review of your lab results together, not sent without explanation",
      "Adjustments to your plan based on results and how you feel",
      "Typically every 3 months, or sooner if something needs attention",
    ],
    blurb:
      "Ongoing visits once care has started. Follow-ups are shorter than the first visit and priced to make staying on track easy.",
    metaDescription:
      "Follow-up visits with Kim Yadon, FNP-C are $100, typically every 3 months, to review labs and adjust your plan. Virtual visits for women across Utah.",
  },
};

export type OfferingKey = keyof typeof OFFERINGS;

/** The paid offerings, each with a page at /book/<slug>. */
export const PAID_OFFERINGS = [OFFERINGS.newPatient, OFFERINGS.followUp];

/** Build a Healthie booking embed URL, or null if the offering has no id yet. */
export function healthieEmbedUrl(offering: OfferingKey): string | null {
  const id = OFFERINGS[offering].id;
  if (!id) return null;
  const params = new URLSearchParams({
    dietitian_id: HEALTHIE_PROVIDER_ID,
    require_offering: "true",
    offering_id: id,
    hide_package_images: "true",
    hide_embed_title: "false",
    primary_color: BRAND_COLOR,
  });
  return `https://secure.gethealthie.com/appointments/embed_appt?${params}`;
}

/**
 * What labs and medications cost — supplied by Kim 2026-11-05 and confirmed
 * by her as her own figures (via Dallin).
 *
 * This REVERSES the 2026-08-07 rule of publishing no lab figure at all ("costs
 * vary greatly by panel"). Kim now gives a typical range. Both remain billed
 * by the lab and the pharmacy, never by the practice.
 */
export const COSTS = {
  labs: { low: 100, high: 150 },
  medications: {
    supplyDays: 90,
    items: [
      { name: "Estradiol 1 mg (compounded)", estimate: 100 },
      { name: "Progesterone 200 mg (compounded)", estimate: 125 },
      { name: "Testosterone 20 mg (compounded)", estimate: 59 },
    ],
    note: "These are estimates. Actual cost depends on the prescription, the dose, and the pharmacy used.",
  },
};

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
    /**
     * Headline credentials, for short lists (/llms.txt, directory listings).
     * Verified 2026-08-07; WorldLink's spelling corrected 2026-11-05 — the
     * company writes "WorldLink Medical", and an inconsistent name is one
     * reason a search system fails to connect a credential to its source.
     * Do not add post-nominals beyond FNP-C.
     */
    credentials: [
      "Board Certified Family Nurse Practitioner (FNP-C)",
      "Master of Science in Nursing, Family Nurse Practitioner — Indiana State University",
      "Certified Diabetes Care and Education Specialist (CDCES)",
      "Trained in BHRT through WorldLink Medical",
      "Trained in Functional Medicine",
    ],

    /** Supplied by Kim 2026-11-05. Rendered on /about and as `alumniOf`. */
    education: [
      {
        credential: "Master of Science in Nursing, Family Nurse Practitioner",
        institution: "Indiana State University",
        year: 2023,
      },
      { credential: "Bachelor's degree in Nursing", institution: "Brigham Young University–Idaho", year: 2017 },
      { credential: "Associate degree in Nursing", institution: "Salt Lake Community College", year: 2015 },
      {
        credential:
          "Bachelor of Science in Parks, Recreation and Tourism, emphasis in Therapeutic Recreation",
        institution: "University of Utah",
        year: 1999,
      },
    ],

    /** Supplied by Kim 2026-11-05. */
    certifications: [
      {
        name: "Certified Diabetes Care and Education Specialist (CDCES)",
        issuer: "Certification Board for Diabetes Care and Education",
        since: 2024,
        verifyUrl: "https://www.cbdce.org/verify",
      },
    ],

    /**
     * Hormone and menopause continuing education, supplied by Kim 2026-11-05,
     * titles as she gave them. These are TRAINING, not certifications —
     * WorldLink's certification is a separate exam she has not taken, so the
     * site must never say "WorldLink certified".
     *
     * `completed: false` items are not rendered. Part III finishes the weekend
     * of 2026-11-07 — flip it then, and run `npm run stamp`.
     */
    hormoneTraining: [
      { provider: "WorldLink Medical", title: "Optimal Medicine Training: Building the BHRT Foundation", date: "May 2026", completed: true },
      { provider: "WorldLink Medical", title: "Optimal Medicine Training: Navigate Hormone Complexities", date: "October 2026", completed: true },
      { provider: "WorldLink Medical", title: "Optimal Medicine Training: Resolve Chronic Disease", date: "November 2026", completed: false },
      { provider: "Rachel Rubin, MD", title: "Hormone Therapy Summer Series", date: "September 2026", completed: true },
      { provider: "American Association of Nurse Practitioners", title: "Hormones for Vasomotor Symptoms of Menopause: A Primer for the Primary Care Providers", date: "October 2025", completed: true },
      { provider: "The Elite Nurse Practitioner", title: "Beyond Medication: Hashimoto's Through the Lens of Functional Medicine", date: "October 2025", completed: true },
      { provider: "American Academy of Anti-Aging Medicine (A4M)", title: "Endocrine Balance & BHRT Symposium", date: "September 2025", completed: true },
    ],
    knowsAbout: [
      "Bioidentical hormone replacement therapy",
      "Menopause",
      "Perimenopause",
      "Hormone testing",
      "Thyroid health",
      "Functional medicine",
    ],

    /**
     * Public professional identifiers, confirmed by Kim 2026-08-12.
     *
     * Both are public records — NPI via the NPPES registry, the licence via
     * Utah's Division of Professional Licensing — so publishing them exposes
     * nothing private. They are the most valuable entity signal available:
     * a checkable identifier is what lets health directories list her and what
     * gives an AI system something it can verify rather than take on trust.
     *
     * ⚠️ The licence TYPE is APRN. That is not a post-nominal and must never be
     * rendered as one. "Kim Yadon, FNP-C" remains the only authorized form —
     * `npm run verify` fails the build if APRN ever attaches to her name.
     */
    npi: NPI,
    licenseState: "Utah",
    licenseType: "APRN",
    licenseNumber: "308855-4405",

    /**
     * Where each identifier can be checked. Both verified to resolve
     * 2026-09-22; the NPPES record returns Kim's name, licence number and a
     * Family nurse practitioner taxonomy.
     *
     * These render VISIBLY on /about#verify. Until 2026-09-22 the NPI and
     * licence existed only inside JSON-LD — which is structured data describing
     * content the page does not show, and gave a patient checking her out
     * nothing to click.
     */
    npiRegistryUrl: `https://npiregistry.cms.hhs.gov/provider-view/${NPI}`,
    licenseLookupUrl: "https://secure.utah.gov/llv/search/index.html",
  },

  /**
   * Official social profiles, confirmed 2026-08-16 from the Google Business
   * Profile admin view — i.e. from an account Kim controls, not guessed from
   * a search.
   *
   * These feed `sameAs` on both the practice and the person. `sameAs` is how a
   * retrieval system resolves "BHRT with Kim" the GBP listing, "BHRT with Kim"
   * the website, and "Kim Yadon" the NPI record to ONE entity rather than three
   * loosely-related strings. That disambiguation is the whole job.
   *
   * It matters more than usual here: a different Kim, of Serotonin Centers,
   * already ranks on the brand query. Corroborating profiles are what separate
   * them.
   *
   * ⚠️ Only add a profile that has been confirmed from an account Kim controls.
   * A wrong or dead URL in `sameAs` actively degrades entity confidence — it is
   * worse than an absent one.
   */
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592043292697",
    instagram: "https://www.instagram.com/hormonereplacementwithkim/",
  },

  /**
   * Date Kim personally reviewed the educational content — the 5 resource
   * articles, the 10 symptom pages and the /symptoms hub.
   *
   * Read from here by every page that shows "Reviewed by", so all 16 carry one
   * date. Only move this forward when she has ACTUALLY re-read them: it is a
   * claim about a named clinician on health content, and the whole value of
   * the signal is that it is true.
   */
  contentReviewedOn: "2026-08-16",

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

    /**
     * Confirmed by Kim 2026-08-12, with an important qualification in her own
     * words: "These hours are not when I have appointments, but people can
     * reach me Monday - Friday 9 am to 5 pm."
     *
     * So this is REACHABILITY, not availability. Copy must never present it as
     * appointment slots — someone who books expecting a 4:30pm Friday visit
     * because the site implied it has a bad first experience before paying
     * anything. Appointment times live in the booking calendar.
     */
    hours: {
      label: "Monday–Friday, 9am–5pm",
      note: "These are the hours Kim can be reached. Appointment times are shown when you book.",
      /** For schema. Days are schema.org DayOfWeek short forms. */
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },

    /**
     * Confirmed by Kim 2026-08-12: "no cash pay only."
     *
     * This was a top-three pre-booking question that the site could not answer
     * for weeks. Saying it plainly is better than silence — someone who needs
     * insurance finds out now rather than after a consultation.
     */
    insurance: "Cash pay only — insurance is not accepted.",
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

  /** Lab costs are never included in a visit fee. Range supplied by Kim 2026-11-05 — see COSTS. */
  labDisclosure:
    `Lab work is billed separately by the lab and typically costs ${usd(COSTS.labs.low)} to ${usd(COSTS.labs.high)}, depending on the lab and the tests ordered.`,

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
