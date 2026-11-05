import type { ContentPage } from "./types";

/**
 * This page must be genuinely balanced or it is worthless.
 *
 * The honest core of the topic — which most marketing pages blur — is that
 * "bioidentical" describes molecular structure, not a regulatory category.
 * Several bioidentical hormones ARE FDA-approved. Compounded preparations are
 * not, and professional societies generally advise approved products where
 * suitable, reserving compounding for specific clinical reasons.
 *
 * Stating that plainly does not undercut the practice: Kim's differentiator is
 * that patients choose their own pharmacy rather than being routed to one the
 * practice owns. A page that concluded "compounded is better" would be both
 * inaccurate and, per docs/02-KEYWORD-MAP.md, worthless to AI retrieval.
 *
 * WHI is referenced only as "understanding has been refined" with a pointer to
 * society guidance — characterising trial findings in detail is beyond what
 * can be sourced confidently here.
 */
export const bhrtVsHrt: ContentPage = {
  slug: "bhrt-vs-hrt",
  titleSegment: "BHRT vs Traditional HRT",
  description:
    "What bioidentical actually means, which bioidentical hormones are FDA-approved, how compounded preparations differ, and what professional societies advise.",
  h1: "BHRT vs Traditional HRT: What the Difference Actually Is",
  intro:
    "A bioidentical hormone has the same molecular structure as a hormone the human body produces. The term describes chemistry; it is not a regulatory category or a brand, and several bioidentical hormones are FDA-approved and sold commercially. For most patients the more useful distinction is between FDA-approved products and custom-compounded preparations.",

  sections: [
    {
      heading: "What does bioidentical actually mean?",
      paragraphs: [
        "Bioidentical describes a hormone whose molecular structure matches the one the human body makes.",
        "Estradiol and micronized progesterone are bioidentical. Some older synthetic formulations use structurally different molecules that act on the same receptors. That is the full extent of the technical difference. It concerns chemistry and says nothing on its own about safety, effectiveness or quality.",
        "The word is often marketed as if it named a separate, superior class of treatment. It does not, and the rest of the comparison is easier to follow once that is clear.",
      ],
    },
    {
      heading: "Are bioidentical hormones FDA-approved?",
      paragraphs: [
        "Some are, and this is the point most often misunderstood.",
        "FDA-approved products containing bioidentical estradiol and micronized progesterone are available as patches, gels and capsules, among other forms. They have completed the standard approval process, are manufactured to consistent doses, and carry standardized labeling.",
        "Custom-compounded bioidentical preparations differ. A compounding pharmacy mixes them to an individual prescription, and they are not FDA-approved as products, so they have not undergone the same review of consistency, purity and labeling.",
      ],
    },
    {
      heading: "What do professional societies say about compounded hormones?",
      paragraphs: [
        "Major professional societies generally advise using an FDA-approved product when a suitable one exists and reserving compounded preparations for specific clinical reasons.",
        "Those reasons are legitimate: an allergy to an ingredient in a commercial product, or a dose or combination that is not commercially available. Concerns about routine compounding center on batch-to-batch consistency and on the absence of the standardized safety labeling that approved products carry. The Menopause Society and the Endocrine Society both publish current positions, linked below.",
        "A provider who can say which category a prescription falls into, and why, is showing the knowledge this decision requires.",
      ],
    },
    {
      heading: "Is one option safer than the other?",
      paragraphs: [
        "Safety depends on the individual, the specific hormone, the dose, the route and the timing far more than on whether a preparation is called bioidentical.",
        "Hormone therapy has real risks and real benefits. Understanding of both has been refined considerably over the past two decades, particularly how age and time since menopause shift the balance. Some medical histories rule hormone therapy out entirely. The decision belongs with a provider who knows the full history, not with a website, and any source presenting bioidentical hormones as risk-free is overstating the evidence.",
      ],
    },
    {
      heading: "What should someone ask a provider?",
      paragraphs: [
        "The most useful questions show whether a provider distinguishes between the categories above.",
        "Clear answers to these indicate careful practice, whichever option the provider eventually recommends.",
      ],
      bullets: [
        "Is what you are prescribing FDA-approved, or compounded?",
        "If compounded, what is the specific clinical reason an approved product would not work?",
        "What are the risks given my particular history?",
        "How will this be monitored, and how often?",
        "Am I free to use any pharmacy, or only one you work with?",
      ],
    },
    {
      heading: "How does this practice approach it?",
      paragraphs: [
        "Kim Yadon, FNP-C takes a full history and orders testing before considering any prescription, and addresses sleep, nutrition, movement and stress first.",
        "When a prescription is part of a plan, the patient can fill it at any compounding pharmacy they choose. Patients are not routed to a pharmacy the practice has a relationship with. Some telehealth services send every prescription through a pharmacy they own, so the question is worth asking of any hormone provider.",
      ],
    },
  ],

  faqs: [
    {
      question: "What does bioidentical mean?",
      answer:
        "Bioidentical describes a hormone with the same molecular structure as one the human body produces, such as estradiol or micronized progesterone. The term describes chemistry. It is not a regulatory category or a brand, and on its own it makes no claim about safety or effectiveness compared with other formulations.",
    },
    {
      question: "Are bioidentical hormones FDA-approved?",
      answer:
        "Some are. FDA-approved products containing bioidentical estradiol and micronized progesterone are sold in several forms. Custom-compounded bioidentical preparations, which a compounding pharmacy mixes to an individual prescription, are not FDA-approved as products and have not undergone the same review for consistency, purity and labeling.",
    },
    {
      question: "Is compounded hormone therapy ever appropriate?",
      answer:
        "Yes, for specific clinical reasons, such as an allergy to an ingredient in a commercial product or a dose or combination that is not sold commercially. Professional societies generally advise an FDA-approved product when a suitable one exists, so the useful question for a provider is which specific reason applies in your case.",
    },
    {
      question: "Is BHRT safer than traditional HRT?",
      answer:
        "Safety depends on the individual, the specific hormone, the dose, the route and the timing far more than on the bioidentical label. Hormone therapy has real risks and benefits, and some medical histories rule it out entirely. A source presenting bioidentical hormones as risk-free is overstating what the evidence supports.",
    },
    {
      question: "Does Kim use compounded or FDA-approved hormones?",
      answer:
        "That depends on what an individual evaluation shows, and it is decided after history and testing, not in advance. When a prescription is part of a plan, the patient can fill it at any compounding pharmacy they choose. Patients are not routed through a pharmacy the practice has a financial relationship with.",
    },
    {
      question: "How can someone discuss options without committing?",
      answer:
        "Through the free introductory phone consultation. It lasts about 15 minutes with Kim Yadon, FNP-C, costs nothing and carries no obligation. It is a chance to ask about her approach and the available options before deciding whether to go ahead with a full evaluation.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "Endocrine Society — menopause and hormone therapy",
      url: "https://www.endocrine.org/patient-engagement/endocrine-library/menopause",
    },
    {
      label: "Mayo Clinic — bioidentical hormones",
      url: "https://www.mayoclinic.org/diseases-conditions/menopause/expert-answers/bioidentical-hormones/faq-20058460",
    },
  ],

  related: [
    { label: "What BHRT costs", href: "/bhrt-cost-utah" },
    { label: "How to choose a provider", href: "/find-a-hormone-provider" },
    { label: "Bioidentical hormone therapy", href: "/services#bhrt" },
    { label: "All FAQs", href: "/faq" },
  ],
};
