import type { ContentPage } from "./types";

/**
 * COMPLIANCE: fatigue has many causes, several of them serious. This page must
 * push toward evaluation rather than toward a hormonal explanation. No claim
 * that hormone therapy resolves fatigue, and no relief timeline.
 */
export const menopauseFatigue: ContentPage = {
  slug: "symptoms/menopause-fatigue",
  group: "Sleep & energy",
  titleSegment: "Menopause Fatigue & Low Energy",
  description:
    "Why fatigue is common during perimenopause, how sleep and thyroid function are involved, and what else is worth ruling out before assuming hormones.",
  h1: "Fatigue and Low Energy During Perimenopause",
  intro:
    "Persistent fatigue is one of the most common complaints during the menopause transition, and it usually has more than one cause. Disrupted sleep, thyroid function, iron levels, stress load, and hormonal fluctuation can each contribute, often at the same time. Because fatigue is such a non-specific symptom, it is one where evaluation matters more than assumption.",

  sections: [
    {
      heading: "Why is fatigue so common during perimenopause?",
      paragraphs: [
        "Fatigue during this stage is frequently a downstream effect of disrupted sleep rather than a direct hormonal effect.",
        "Night sweats and difficulty staying asleep both reduce the amount of restorative sleep someone gets, and the resulting daytime tiredness can be substantial even when total hours in bed look normal. Hormonal fluctuation may also affect energy through its influence on mood and on thyroid function, which is why a workup looks at several systems rather than one.",
        "The practical implication is that treating fatigue in isolation rarely works. If the underlying issue is that someone is waking four times a night, addressing the waking matters more than addressing the tiredness.",
      ],
    },
    {
      heading: "What else causes fatigue in midlife?",
      paragraphs: [
        "Several common and treatable conditions produce fatigue that looks identical to hormonal fatigue, and some of them are more urgent to identify.",
        "This is the strongest argument for testing rather than assuming. Fatigue attributed to menopause for two years, that turns out to be an underactive thyroid or low iron, is two years of an unaddressed and straightforward problem.",
      ],
      bullets: [
        "Thyroid dysfunction, particularly an underactive thyroid",
        "Iron deficiency or anemia, which heavy perimenopausal bleeding can contribute to",
        "Vitamin D and B12 deficiency",
        "Sleep apnea, frequently underdiagnosed in women",
        "Depression and anxiety, which commonly present with fatigue",
        "Certain medications, and blood sugar dysregulation",
      ],
    },
    {
      heading: "How is thyroid function connected?",
      paragraphs: [
        "Thyroid conditions become more common with age and share several symptoms with perimenopause, which makes them easy to mistake for one another.",
        "Fatigue, weight change, temperature sensitivity, hair changes, and low mood appear on both lists. Because the overlap is so substantial, thyroid assessment is a routine part of a comprehensive hormone workup rather than an optional extra. Kim's stated approach includes thyroid and adrenal function alongside sex hormones for this reason.",
      ],
    },
    {
      heading: "What does an evaluation actually look at?",
      paragraphs: [
        "A hormone evaluation for fatigue starts with history and comprehensive testing rather than with a prescription.",
        "That means going through the pattern of the tiredness — whether it is present on waking, builds through the day, or follows poor nights — alongside sleep quality, stress load, nutrition, and movement. Testing covers hormones, thyroid, and adrenal function, plus screening for underlying conditions. Where bioidentical hormone therapy is indicated by that picture, it is one part of a plan rather than the whole of it.",
        "Whether hormone therapy is appropriate for any individual is a clinical decision made after evaluation. Some medical histories make it unsuitable.",
      ],
    },
    {
      heading: "When should fatigue prompt a medical evaluation?",
      paragraphs: [
        "Fatigue that persists for weeks, does not improve with adequate rest, or interferes with normal functioning warrants a conversation with a provider.",
        "That is true regardless of age or menopausal status. Fatigue accompanied by unexplained weight change, shortness of breath, chest symptoms, or unusual bleeding should be raised promptly rather than monitored. Being told that tiredness is simply expected in midlife is common, and it is not a reason to stop asking what is causing it.",
      ],
    },
  ],

  faqs: [
    {
      question: "Is fatigue a normal part of menopause?",
      answer:
        "Fatigue is very commonly reported during the menopause transition, but common is not the same as unexplained. It frequently reflects disrupted sleep, thyroid changes, iron levels, or several factors together. Because those causes differ in how they are addressed, persistent fatigue is worth evaluating rather than accepting as simply expected.",
    },
    {
      question: "Can hormone changes cause fatigue even with enough sleep?",
      answer:
        "Hours in bed and restorative sleep are not the same thing. Someone can spend eight hours asleep and still wake unrefreshed if sleep is being fragmented by night sweats or by an untreated sleep disorder. This is one reason an evaluation asks about sleep quality and waking patterns, not only sleep duration.",
    },
    {
      question: "What tests are typically involved?",
      answer:
        "A comprehensive hormone workup generally covers sex hormones, thyroid function, and adrenal function, plus screening for underlying conditions that produce similar symptoms. Exactly which panels are ordered depends on history and presentation. Testing runs through LabCorp and is billed separately by the laboratory; costs vary by panel.",
    },
    {
      question: "Could thyroid problems be mistaken for menopause?",
      answer:
        "Yes, and it happens frequently. Thyroid conditions become more common with age and share symptoms with perimenopause — fatigue, weight change, temperature sensitivity, low mood, and hair changes appear on both lists. Because the overlap is substantial, thyroid assessment is a standard part of a comprehensive hormone evaluation rather than an optional addition.",
    },
    {
      question: "Does bioidentical hormone therapy help with fatigue?",
      answer:
        "Whether hormone therapy is appropriate depends entirely on what an evaluation finds and on the individual's medical history. Fatigue has many possible causes, and hormone therapy addresses only some of them. It is not suitable for everyone, and no responsible provider would recommend it for fatigue without first establishing what is driving the fatigue.",
    },
    {
      question: "How long is a first appointment?",
      answer:
        "The free introductory phone call with Kim Yadon, FNP-C runs about 15 minutes and is a chance to ask questions and see whether it is a fit. The paid initial consultation is about 60 minutes, covering full history, current symptoms, and what testing makes sense. Follow-up visits are typically every three months.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — menopause symptoms and relief",
      url: "https://www.nia.nih.gov/health/menopause/what-menopause",
    },
    {
      label: "Mayo Clinic — hypothyroidism",
      url: "https://www.mayoclinic.org/diseases-conditions/hypothyroidism/symptoms-causes/syc-20350284",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Sleep and insomnia", href: "/symptoms/sleep-insomnia" },
    { label: "Thyroid & adrenal health", href: "/services#thyroid-adrenal" },
    { label: "Comprehensive testing", href: "/services#testing" },
    { label: "All FAQs", href: "/faq" },
  ],
};
