import type { ContentPage } from "./types";

/**
 * COMPLIANCE NOTES for this page specifically:
 *
 *  - Testosterone for women is a genuinely nuanced area. No testosterone
 *    formulation is currently approved by the FDA specifically for women in
 *    the United States, and professional societies have published guidance
 *    on off-label use. That is stated as attributed guidance, not as flat
 *    regulatory assertion, and definitely not as an offer.
 *  - This page must NOT imply Kim prescribes testosterone or that testosterone
 *    is part of her standard protocol. Nothing in docs/00-BUSINESS-FACTS.md
 *    establishes that.
 *  - Painful sex has physical causes with specific treatments. Routing that to
 *    "low libido" would be a disservice, so it is separated explicitly.
 */
export const lowLibido: ContentPage = {
  slug: "symptoms/low-libido",
  group: "Cycle & intimacy",
  titleSegment: "Low Libido & Hormones",
  description:
    "Why sexual desire commonly changes during perimenopause, how physical and non-hormonal factors contribute, and what the evidence says about treatment.",
  h1: "Changes in Libido During Perimenopause and Menopause",
  intro:
    "Reduced sexual desire is one of the more commonly reported and least commonly raised changes of the menopause transition. It rarely has a single cause: hormonal change, vaginal dryness and discomfort, sleep deprivation, stress, relationship context, mood, and medications can all contribute. Because the contributors differ so much in how they are addressed, this is an area where an honest conversation with a provider matters more than most.",

  sections: [
    {
      heading: "Why does desire change during perimenopause?",
      paragraphs: [
        "Desire is influenced by hormones, physical comfort, sleep, mood, and context together — which is why treating it as purely hormonal usually fails.",
        "Estrogen decline is associated with changes to vaginal tissue that can make sex uncomfortable, and discomfort reliably reduces desire regardless of hormone levels. Testosterone, present in women in smaller amounts, has a recognised role in desire. Alongside that, chronic sleep deprivation, stress, and low mood all independently reduce libido, and many women in this stage are experiencing several of those at once.",
      ],
    },
    {
      heading: "Is discomfort during sex the same issue as low desire?",
      paragraphs: [
        "No, and separating them matters, because physical discomfort has specific treatments that differ from anything aimed at desire.",
        "Vaginal dryness, thinning tissue, and pain during sex fall under what clinicians call genitourinary syndrome of menopause. These are physical changes with recognised treatment options, including local approaches that work differently from systemic hormone therapy. Someone whose desire dropped because sex became painful is describing a different problem from someone whose desire changed while everything else stayed comfortable — and the second is worth saying plainly to a provider rather than leaving to be inferred.",
      ],
    },
    {
      heading: "What non-hormonal factors matter?",
      paragraphs: [
        "Several of the strongest contributors to libido in midlife have nothing to do with hormone levels.",
        "This is worth knowing before an appointment, because a workup that only measures hormones can miss the actual driver. Antidepressants in particular are a well-recognised contributor, and that is a conversation to have with the prescribing provider rather than something to stop unilaterally.",
      ],
      bullets: [
        "Chronic sleep deprivation and fatigue",
        "Stress and elevated demands at work or home",
        "Depression and anxiety",
        "Certain medications, including some antidepressants and blood pressure medications",
        "Relationship context and communication",
        "Body image changes during the transition",
      ],
    },
    {
      heading: "What does the evidence say about testosterone for women?",
      paragraphs: [
        "This is an area where accuracy matters more than enthusiasm, and where a lot of marketing overstates the position.",
        "Professional societies including The Menopause Society have published guidance noting that no testosterone formulation is currently approved by the FDA specifically for women in the United States. Where testosterone is used in women it is prescribed off-label, and society guidance addresses appropriate monitoring and the limits of the evidence, particularly around dosing and long-term data. Anyone considering it should have that conversation with a provider who will discuss the evidence honestly, including what is not known.",
        "Whether any hormone therapy is appropriate for an individual depends on their full clinical picture. Some medical histories make it unsuitable.",
      ],
    },
    {
      heading: "How is this addressed in a consultation?",
      paragraphs: [
        "The evaluation looks at which contributors are actually present rather than assuming a hormonal explanation.",
        "That means history covering sleep, mood, medications, physical comfort, and context, alongside comprehensive testing across hormones, thyroid, and adrenal function. Kim Yadon, FNP-C addresses foundations first — sleep, stress, nutrition, movement — before considering a prescription. Raising this topic can feel awkward; it is a routine part of a hormone consultation and describing what actually changed, and when, is the most useful thing someone can bring.",
      ],
    },
  ],

  faqs: [
    {
      question: "Is reduced libido a normal part of menopause?",
      answer:
        "Changes in sexual desire are commonly reported during the menopause transition, but common does not mean there is nothing to investigate. Contributors include hormonal change, physical discomfort, sleep deprivation, stress, mood, and medications. Because those are addressed very differently, an evaluation is worthwhile rather than assuming it is simply expected.",
    },
    {
      question: "What is genitourinary syndrome of menopause?",
      answer:
        "It is the clinical term for physical changes to vaginal and urinary tissue associated with declining estrogen — including dryness, thinning tissue, discomfort during sex, and urinary symptoms. These are physical changes with recognised treatment options that differ from approaches aimed at desire, which is why the two are worth separating in conversation.",
    },
    {
      question: "Is testosterone prescribed to women?",
      answer:
        "Professional societies note that no testosterone formulation is currently FDA-approved specifically for women in the United States, so any use in women is off-label. Society guidance addresses monitoring and the limits of current evidence. It is a conversation to have with a provider who will discuss what the evidence does and does not establish.",
    },
    {
      question: "Could medication be causing this?",
      answer:
        "Yes. Several common medications affect libido, including some antidepressants and blood pressure medications. This is a well-recognised effect and worth raising with the prescribing provider, since alternatives sometimes exist. Nobody should stop or change a prescribed medication on their own based on information from a website.",
    },
    {
      question: "How does someone raise this in an appointment?",
      answer:
        "Directly is fine, and it is a routine part of a hormone consultation. The most useful thing to bring is a description of what changed and roughly when — whether discomfort is involved, whether sleep and mood changed at the same time, and what medications are being taken. Those details point toward the actual contributors.",
    },
    {
      question: "Are consultations private and virtual?",
      answer:
        "All visits with Kim Yadon, FNP-C are virtual, conducted by phone or video, and patients can take them from home. She is licensed in Utah and sees patients located in Utah. A free introductory call runs about 15 minutes; a full initial consultation is about 60 minutes and covers history, symptoms, and what testing makes sense.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — sex and menopause",
      url: "https://www.nia.nih.gov/health/menopause/sex-and-menopause-treatment-symptoms",
    },
    {
      label: "ACOG — experiencing vaginal dryness and other symptoms",
      url: "https://www.acog.org/womens-health/faqs/experiencing-vaginal-dryness-heres-what-you-need-to-know",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Menopause fatigue", href: "/symptoms/menopause-fatigue" },
    { label: "Bioidentical hormone therapy", href: "/services#bhrt" },
    { label: "BHRT vs traditional HRT", href: "/bhrt-vs-hrt" },
    { label: "All FAQs", href: "/faq" },
  ],
};
