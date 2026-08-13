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
    "Vaginal dryness, irritation, and discomfort during sex are among the most common physical changes of menopause and among the least often raised in an appointment. They fall under what clinicians call genitourinary syndrome of menopause, a set of changes to vaginal and urinary tissue associated with declining estrogen. Unlike hot flashes, which often ease with time, these changes tend to persist or gradually progress without treatment — which is the main reason they are worth mentioning rather than waiting out.",

  sections: [
    {
      heading: "What is genitourinary syndrome of menopause?",
      paragraphs: [
        "It is the clinical term for changes to the vaginal and urinary tissues that follow declining estrogen levels.",
        "Estrogen helps maintain the thickness, elasticity, and natural lubrication of vaginal tissue. As levels fall, that tissue becomes thinner, drier, and less elastic, and the local environment changes. The result can include dryness, burning or itching, discomfort or pain during sex, light bleeding after sex, and urinary symptoms such as urgency or recurrent infections. The term covers all of it because the underlying change is the same.",
        "The older name was vaginal atrophy. The newer term was adopted partly because it includes the urinary symptoms, which were frequently overlooked.",
      ],
    },
    {
      heading: "Why doesn't it improve on its own?",
      paragraphs: [
        "Because it reflects an ongoing change in tissue rather than the fluctuating hormone levels that drive symptoms like hot flashes.",
        "This is a genuine difference and it matters for decision-making. Many transitional symptoms ease as the body settles after menopause, which makes waiting a reasonable strategy for them. Genitourinary symptoms generally do not follow that pattern — left unaddressed they tend to stay the same or slowly progress. Someone deciding whether to raise this with a provider should know that waiting is unlikely to resolve it.",
      ],
    },
    {
      heading: "What options exist for treating it?",
      paragraphs: [
        "There are several distinct approaches, and they work differently from one another, which is why a conversation with a provider is more useful than picking something off a shelf.",
        "Non-hormonal options are often the starting point. Vaginal moisturizers are used regularly, every few days, to maintain tissue hydration over time; lubricants are used at the time of sex to reduce friction. They are frequently confused with each other and they do different jobs. Beyond those, low-dose local estrogen delivered directly to the tissue is a recognised option that professional societies distinguish from systemic hormone therapy, since very little is absorbed into the bloodstream. Systemic hormone therapy may address these symptoms as well when it is being considered for other reasons.",
        "Which of these is appropriate depends on an individual's symptoms and medical history, and some histories make certain options unsuitable. That is a decision for a provider who knows the full picture, not a website.",
      ],
    },
    {
      heading: "Are urinary symptoms related?",
      paragraphs: [
        "They can be, and this is the part most often missed.",
        "The tissues of the urethra and bladder respond to estrogen in a similar way to vaginal tissue. Urinary urgency, discomfort when passing urine, and recurrent urinary tract infections are recognised parts of the same syndrome rather than separate coincidental problems. Someone experiencing repeated urinary infections after menopause is describing something worth evaluating in this context. Any suspected urinary infection still needs assessment and treatment in its own right.",
      ],
    },
    {
      heading: "What does an evaluation cover, and what needs an in-person visit?",
      paragraphs: [
        "A consultation covers the history in detail — what the symptoms are, when they started, what has been tried, and what medical history is relevant.",
        "Kim Yadon, FNP-C sees patients virtually, by phone or video, and that format handles history, testing decisions, and treatment discussion well. What it cannot do is a physical examination. Symptoms including bleeding, a lump, persistent pain that is not clearly related to dryness, or anything not responding as expected need to be examined in person, and the right advice in that situation is a referral rather than a virtual workaround.",
        "Raising this topic can feel uncomfortable. It is a routine part of a menopause consultation, and describing the symptoms directly gets to a useful answer faster than approaching them sideways.",
      ],
    },
  ],

  faqs: [
    {
      question: "What is genitourinary syndrome of menopause?",
      answer:
        "It is the clinical term for changes to vaginal and urinary tissue associated with declining estrogen, including dryness, irritation, discomfort during sex, and urinary symptoms such as urgency or recurrent infections. It was previously called vaginal atrophy. The newer term is used because it includes the urinary symptoms, which were commonly overlooked.",
    },
    {
      question: "Does vaginal dryness improve on its own?",
      answer:
        "Usually not. Unlike hot flashes, which often ease as the body settles after menopause, genitourinary symptoms reflect an ongoing tissue change and tend to stay the same or gradually progress without treatment. This is the main practical reason to raise them with a provider rather than waiting to see whether they resolve.",
    },
    {
      question: "What is the difference between a lubricant and a moisturizer?",
      answer:
        "They do different jobs and are commonly confused. A vaginal moisturizer is used regularly, typically every few days, to maintain tissue hydration over time. A lubricant is used at the time of sex to reduce friction and is not intended to change the tissue itself. Some people use both for different purposes.",
    },
    {
      question: "Is local estrogen the same as hormone replacement therapy?",
      answer:
        "Professional societies distinguish between them. Low-dose local estrogen is delivered directly to vaginal tissue and very little is absorbed into the bloodstream, whereas systemic hormone therapy circulates throughout the body. Whether either is appropriate depends on individual medical history, and some histories make certain options unsuitable.",
    },
    {
      question: "Can menopause cause recurrent urinary infections?",
      answer:
        "Urinary urgency, discomfort, and recurrent urinary tract infections are recognised parts of genitourinary syndrome of menopause, because urethral and bladder tissue responds to estrogen much as vaginal tissue does. Repeated infections after menopause are worth evaluating in this context. Any suspected infection still needs assessment and treatment on its own.",
    },
    {
      question: "Can a virtual consultation address this?",
      answer:
        "History, testing decisions, and treatment discussion all work well by phone or video. A physical examination does not. Symptoms including bleeding, a lump, or persistent pain that is not clearly related to dryness need an in-person examination, and the appropriate response in that situation is a referral rather than a virtual substitute.",
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
