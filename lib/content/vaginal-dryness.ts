import type { ContentPage } from "./types";

/**
 * COMPLIANCE NOTES for this page:
 *
 *  - Treatment options are described as things a provider may discuss, never
 *    as things Kim prescribes. Nothing in docs/00-BUSINESS-FACTS.md establishes
 *    that she prescribes any specific product, and inventing that would be a
 *    fabricated business fact as well as a prescription promise.
 *  - This page overlaps /symptoms/low-libido deliberately but does not repeat
 *    it. That page is about DESIRE; this one is about the physical tissue
 *    changes. They cross-link rather than duplicate.
 *  - A physical examination cannot happen in a virtual visit. The page says so
 *    plainly rather than implying virtual care covers everything.
 *
 * Written clinically and directly. This topic is under-served precisely
 * because people avoid raising it, and coy writing would repeat the problem.
 */
export const vaginalDryness: ContentPage = {
  slug: "symptoms/vaginal-dryness",
  group: "Cycle & intimacy",
  titleSegment: "Vaginal Dryness & Discomfort",
  description:
    "Why vaginal dryness and discomfort happen after estrogen declines, how genitourinary syndrome of menopause is treated, and what an evaluation covers.",
  h1: "Vaginal Dryness and Discomfort After Menopause",
  intro:
    "Vaginal dryness, irritation and pain during sex are among the most common physical changes of menopause, and among the least often raised in an appointment. Clinicians group them under genitourinary syndrome of menopause: changes to vaginal and urinary tissue associated with declining estrogen. Hot flashes often ease with time; these changes usually persist or slowly progress without treatment, which is the main reason to bring them up instead of waiting.",

  sections: [
    {
      heading: "What is genitourinary syndrome of menopause?",
      paragraphs: [
        "It is the clinical term for changes in vaginal and urinary tissue that follow a fall in estrogen.",
        "Estrogen helps maintain the thickness, elasticity and natural lubrication of vaginal tissue. As levels drop, the tissue becomes thinner, drier and less elastic, and the local environment changes. Symptoms can include dryness, burning or itching, pain during sex, light bleeding after sex, and urinary problems such as urgency or recurrent infections. One term covers them all because the underlying change is the same.",
        "The condition used to be called vaginal atrophy. The newer name was adopted partly because it includes the urinary symptoms, which were often overlooked.",
      ],
    },
    {
      heading: "Why doesn't it improve on its own?",
      paragraphs: [
        "Because it reflects a lasting change in the tissue, not the fluctuating hormone levels behind symptoms such as hot flashes.",
        "That difference affects the decision to seek care. Many symptoms of the transition settle once the body adjusts after menopause, so waiting can be reasonable for them. Genitourinary symptoms generally do not follow that pattern; without treatment they tend to stay the same or slowly worsen. Waiting is unlikely to resolve them.",
      ],
    },
    {
      heading: "What options exist for treating it?",
      paragraphs: [
        "Several approaches exist, and they work in different ways, so a conversation with a provider is more useful than choosing a product off the shelf.",
        "Non-hormonal products are often the first step. A vaginal moisturizer is applied regularly, every few days, to keep tissue hydrated over time; a lubricant is used during sex to reduce friction. The two are often confused, and they do different jobs. Low-dose local estrogen, applied directly to the tissue, is a recognized option that professional societies distinguish from systemic hormone therapy because very little reaches the bloodstream. Systemic hormone therapy can also relieve these symptoms when it is being considered for other reasons.",
        "The right choice depends on the individual's symptoms and medical history, and some histories rule certain options out. That decision belongs with a provider who knows the whole picture.",
      ],
    },
    {
      heading: "Are urinary symptoms related?",
      paragraphs: [
        "They can be, and this connection is the one most often missed.",
        "The tissues of the urethra and bladder respond to estrogen much as vaginal tissue does. Urinary urgency, pain on urination and recurrent urinary tract infections are recognized parts of the same syndrome, not unrelated problems. Repeated urinary infections after menopause deserve evaluation in that light. Any suspected urinary infection still needs its own assessment and treatment.",
      ],
    },
    {
      heading: "What does an evaluation cover, and what needs an in-person visit?",
      paragraphs: [
        "A consultation covers the history in detail: the symptoms, when they began, what has been tried, and the relevant medical history.",
        "Kim Yadon, FNP-C sees patients virtually, by phone or video, and that format works well for history, testing decisions and treatment discussion. It cannot provide a physical examination. Bleeding, a lump, persistent pain not clearly linked to dryness, or symptoms that do not respond as expected need an in-person examination, and the right step in that case is a referral, not a virtual workaround.",
        "The topic can feel awkward to raise. It is a routine part of a menopause consultation, and describing the symptoms plainly leads to a useful answer sooner.",
      ],
    },
  ],

  faqs: [
    {
      question: "What is genitourinary syndrome of menopause?",
      answer:
        "It is the clinical term for changes in vaginal and urinary tissue associated with declining estrogen, including dryness, irritation, pain during sex, and urinary symptoms such as urgency or recurrent infections. It was formerly called vaginal atrophy. The newer term is used because it includes the urinary symptoms, which were often overlooked.",
    },
    {
      question: "Does vaginal dryness improve on its own?",
      answer:
        "Usually not. Hot flashes often ease as the body adjusts after menopause, but genitourinary symptoms reflect a lasting change in tissue and tend to stay the same or slowly worsen without treatment. That is the main practical reason to raise them with a provider instead of waiting to see whether they resolve.",
    },
    {
      question: "What is the difference between a lubricant and a moisturizer?",
      answer:
        "They do different jobs and are often confused. A vaginal moisturizer is used regularly, typically every few days, to keep tissue hydrated over time. A lubricant is used during sex to reduce friction and does not change the tissue itself. Some people use both, for different purposes.",
    },
    {
      question: "Is local estrogen the same as hormone replacement therapy?",
      answer:
        "Professional societies treat them as different. Low-dose local estrogen is applied directly to vaginal tissue, and very little is absorbed into the bloodstream, whereas systemic hormone therapy circulates through the whole body. Whether either is appropriate depends on individual medical history, and some histories rule certain options out.",
    },
    {
      question: "Can menopause cause recurrent urinary infections?",
      answer:
        "Urinary urgency, pain on urination and recurrent urinary tract infections are recognized parts of genitourinary syndrome of menopause, because urethral and bladder tissue responds to estrogen much as vaginal tissue does. Repeated infections after menopause deserve evaluation in that light. Any suspected infection still needs its own assessment and treatment.",
    },
    {
      question: "Can a virtual consultation address this?",
      answer:
        "History, testing decisions and treatment discussion all work well by phone or video. A physical examination does not. Bleeding, a lump, or persistent pain not clearly linked to dryness needs an in-person examination, and the right response in that situation is a referral, not a virtual substitute.",
    },
  ],

  sources: [
    {
      label: "ACOG — experiencing vaginal dryness and other symptoms",
      url: "https://www.acog.org/womens-health/faqs/experiencing-vaginal-dryness-heres-what-you-need-to-know",
    },
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — sex and menopause",
      url: "https://www.nia.nih.gov/health/menopause/sex-and-menopause-treatment-symptoms",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Changes in libido", href: "/symptoms/low-libido" },
    { label: "Irregular and changing periods", href: "/symptoms/irregular-periods" },
    { label: "BHRT vs traditional HRT", href: "/bhrt-vs-hrt" },
    { label: "All symptom topics", href: "/symptoms" },
  ],
};
