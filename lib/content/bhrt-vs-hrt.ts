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
    "Bioidentical means the hormone is structurally identical to what the human body produces. It is a description of molecular structure, not a regulatory category or a brand — and importantly, several bioidentical hormones are FDA-approved and commercially available. The more meaningful distinction for most people is not bioidentical versus traditional, but FDA-approved versus custom-compounded.",

  sections: [
    {
      heading: "What does bioidentical actually mean?",
      paragraphs: [
        "Bioidentical describes a hormone whose molecular structure matches the one the human body makes.",
        "Estradiol and micronized progesterone are bioidentical. Some older synthetic formulations use molecules that are structurally different, though they act on the same receptors. That is the whole of the technical distinction — it is a statement about chemistry, not a claim about safety, effectiveness, or quality.",
        "This matters because the word has been marketed as though it denotes a separate and superior category of treatment. It does not. Understanding that makes the rest of the comparison much clearer.",
      ],
    },
    {
      heading: "Are bioidentical hormones FDA-approved?",
      paragraphs: [
        "Some are. This is the single most commonly misunderstood point in the whole topic.",
        "FDA-approved products containing bioidentical estradiol and micronized progesterone are commercially available in several forms, including patches, gels, and capsules. These have been through the standard approval process, are manufactured to consistent dosing, and carry standardised labelling.",
        "Custom-compounded bioidentical preparations are different. They are mixed by a compounding pharmacy to a specific prescription and are not FDA-approved as products, which means they have not been through that same review for consistency, purity, and labelling.",
      ],
    },
    {
      heading: "What do professional societies say about compounded hormones?",
      paragraphs: [
        "Major professional societies have generally advised using FDA-approved products where a suitable one exists, reserving compounded preparations for specific clinical reasons.",
        "Those reasons do exist and are legitimate — an allergy to an ingredient in a commercial product, or a dose or combination not commercially available. The concerns raised about routine compounding centre on batch-to-batch consistency and on the absence of the standardised safety labelling that approved products carry. The Menopause Society and the Endocrine Society both publish current positions worth reading directly.",
        "A provider who can explain which category a given prescription falls into, and why, is demonstrating exactly the knowledge this decision requires.",
      ],
    },
    {
      heading: "Is one option safer than the other?",
      paragraphs: [
        "Safety depends far more on the individual, the specific hormone, the dose, the route, and the timing than on whether a preparation is labelled bioidentical.",
        "Hormone therapy carries real risks and real benefits, and understanding of both has been refined considerably over the past two decades — particularly around how age and time since menopause affect the balance. Some medical histories make hormone therapy unsuitable entirely. This is genuinely a decision to make with a provider who knows the full history, not one to resolve from a website, and anyone presenting bioidentical hormones as risk-free is not being straight.",
      ],
    },
    {
      heading: "What should someone ask a provider?",
      paragraphs: [
        "The most useful questions are the ones that reveal whether the provider is distinguishing between the categories above.",
        "A provider who answers these clearly is doing the job properly, regardless of which option they end up recommending.",
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
        "Kim Yadon, FNP-C works through history and comprehensive testing before considering any prescription, and addresses foundations such as sleep, nutrition, movement, and stress first.",
        "Where a prescription is part of a plan, it can be filled at any compounding pharmacy the patient chooses — patients are not routed to a pharmacy the practice has a relationship with. That distinction is worth checking with any hormone provider, since some telehealth services direct every prescription through a pharmacy they own.",
      ],
    },
  ],

  faqs: [
    {
      question: "What does bioidentical mean?",
      answer:
        "Bioidentical describes a hormone whose molecular structure is identical to the one the human body produces, such as estradiol or micronized progesterone. It is a description of chemistry, not a regulatory category or a brand, and by itself it makes no claim about safety or effectiveness compared with other formulations.",
    },
    {
      question: "Are bioidentical hormones FDA-approved?",
      answer:
        "Some are. FDA-approved products containing bioidentical estradiol and micronized progesterone are commercially available in several forms. Custom-compounded bioidentical preparations, mixed by a compounding pharmacy to an individual prescription, are not FDA-approved as products and have not been through that same review process.",
    },
    {
      question: "Is compounded hormone therapy ever appropriate?",
      answer:
        "Yes, for specific clinical reasons — an allergy to an ingredient in a commercial product, or a dose or combination that is not commercially available. Professional societies generally advise using an FDA-approved product where a suitable one exists. The useful question to ask a provider is what specific reason applies in your case.",
    },
    {
      question: "Is BHRT safer than traditional HRT?",
      answer:
        "Safety depends on the individual, the specific hormone, dose, route, and timing far more than on the bioidentical label. Hormone therapy carries genuine risks and benefits, and some medical histories make it unsuitable entirely. Any source presenting bioidentical hormones as risk-free is overstating what the evidence supports.",
    },
    {
      question: "Does Kim use compounded or FDA-approved hormones?",
      answer:
        "That depends on what an individual evaluation indicates, which is decided after history and testing rather than in advance. Where a prescription is part of a plan, it can be filled at any compounding pharmacy the patient chooses — patients are not routed through a pharmacy the practice has a financial relationship with.",
    },
    {
      question: "How can someone discuss options without committing?",
      answer:
        "The free introductory phone consultation exists for this. It runs about 15 minutes with Kim Yadon, FNP-C, costs nothing, and carries no obligation. It is a chance to ask about approach and options before deciding whether to proceed to a full evaluation.",
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
