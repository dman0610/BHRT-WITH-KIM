import type { ContentPage } from "./types";

/**
 * Second-highest-volume symptom query.
 *
 * COMPLIANCE: the old quiz copy called sleep problems "very treatable" — that
 * exact claim was removed in Phase 1 and must not reappear here in another
 * form. No efficacy promise, no timeline, third person throughout.
 */
export const sleepInsomnia: ContentPage = {
  slug: "symptoms/sleep-insomnia",
  group: "Sleep & energy",
  titleSegment: "Menopause Insomnia & Sleep",
  description:
    "Why sleep changes during perimenopause, how estrogen and progesterone are involved, and what a hormone evaluation with a Utah nurse practitioner covers.",
  h1: "Menopause, Insomnia, and Disrupted Sleep",
  intro:
    "Sleep disruption is one of the most frequently reported changes during perimenopause and menopause. It shows up in several distinct patterns — difficulty falling asleep, waking repeatedly through the night, or waking early and being unable to return to sleep. Estrogen and progesterone both play a role in sleep regulation, and night sweats add a second, separate cause of waking.",

  sections: [
    {
      heading: "Why does sleep change during perimenopause?",
      paragraphs: [
        "Both estrogen and progesterone influence sleep, so the hormonal fluctuation of perimenopause can affect sleep through more than one route at once.",
        "Progesterone has a calming effect and is associated with sleep onset, so declining levels are often linked to more difficulty falling asleep. Estrogen is involved in temperature regulation and in the regulation of several neurotransmitters that affect sleep quality. Separately, night sweats cause waking directly — someone can be sleeping normally and still be woken repeatedly by vasomotor symptoms.",
        "This is why sleep complaints during this stage often do not respond to sleep hygiene advice alone. If waking is being driven by night sweats, the useful question is what is causing the night sweats.",
      ],
    },
    {
      heading: "What are the different patterns of sleep disruption?",
      paragraphs: [
        "Describing the specific pattern matters more than the general label of insomnia, because different patterns point toward different explanations.",
        "The distinction is worth noting before an appointment. Someone who falls asleep easily but wakes at 3am drenched is describing something different from someone who lies awake for two hours at bedtime, and those differences shape what is worth investigating.",
      ],
      bullets: [
        "Difficulty falling asleep, with the mind active at bedtime",
        "Waking repeatedly through the night, with or without sweating",
        "Waking early and being unable to return to sleep",
        "Sleeping a full night but waking unrefreshed",
      ],
    },
    {
      heading: "What else can disrupt sleep in midlife?",
      paragraphs: [
        "Hormonal change is a common explanation in midlife but far from the only one, which is why sleep complaints warrant evaluation rather than assumption.",
        "Thyroid dysfunction can affect sleep and energy and is part of a comprehensive hormone workup for that reason. Sleep apnea is frequently underdiagnosed in women and can present differently than the stereotype suggests. Anxiety, depression, certain medications, and alcohol all affect sleep architecture. Assuming a hormonal cause without looking at these can mean missing something more treatable.",
      ],
    },
    {
      heading: "What does a hormone evaluation cover?",
      paragraphs: [
        "A hormone evaluation looks at the wider picture rather than sex hormones alone, because several systems influence sleep.",
        "Kim Yadon, FNP-C works through full history and comprehensive testing — hormones, thyroid, and adrenal function, plus screening for underlying conditions — before considering any prescription. Foundations such as sleep timing, nutrition, movement, and stress management are addressed first. Where bioidentical hormone therapy is indicated by that picture, it is monitored and adjusted rather than set once.",
        "Whether hormone therapy is appropriate for any individual is a clinical decision made after evaluation. Some medical histories make it unsuitable.",
      ],
    },
    {
      heading: "Is disrupted sleep just a normal part of aging?",
      paragraphs: [
        "Sleep does change with age, but significant disruption that affects daily functioning is worth investigating rather than accepting without explanation.",
        "Many women report being told that poor sleep is simply expected at this stage. That framing is common, and it can mean a thyroid issue, sleep apnea, or a hormonal pattern goes unexamined for years. An evaluation is a way to find out which of those applies, without any obligation to pursue a particular treatment.",
      ],
    },
  ],

  faqs: [
    {
      question: "Why do many women wake at the same time every night?",
      answer:
        "Consistent night waking is commonly reported during perimenopause. It can relate to hormonal fluctuation affecting sleep regulation, to night sweats waking someone directly, or to other causes such as thyroid dysfunction or sleep apnea. The consistency of the timing does not by itself identify the cause, which is why an evaluation looks at several possibilities.",
    },
    {
      question: "Can night sweats happen without a noticeable hot flash?",
      answer:
        "Yes. Some people wake feeling overheated or damp without ever registering the sudden heat sensation associated with a daytime hot flash. Both are vasomotor symptoms driven by the same underlying mechanism. Someone may only realise sweating is involved when they notice bedding or sleepwear is damp on waking.",
    },
    {
      question: "Does sleep hygiene advice help with menopausal sleep problems?",
      answer:
        "Sleep timing, light exposure, and caffeine and alcohol habits all genuinely affect sleep and are worth addressing. But if waking is being driven by night sweats or by an untreated thyroid issue, behavioural changes alone will not resolve the underlying cause. That is why an evaluation looks at what is driving the disruption rather than starting with advice.",
    },
    {
      question: "What is the difference between insomnia and disrupted sleep?",
      answer:
        "Insomnia typically describes persistent difficulty falling or staying asleep despite adequate opportunity, causing daytime impairment. Disrupted sleep is broader and includes waking from night sweats or discomfort. The distinction matters clinically because it points toward different explanations, so describing the specific pattern is more useful than either label alone.",
    },
    {
      question: "How long is a first consultation?",
      answer:
        "The free introductory phone call with Kim Yadon, FNP-C runs about 15 minutes — enough to ask questions and see whether working together is a fit. The paid initial consultation is about 60 minutes and covers full history, current symptoms, and what testing makes sense. Follow-up visits are typically every three months, or sooner if needed.",
    },
    {
      question: "Are visits available across Utah?",
      answer:
        "Yes. All visits are virtual, so patients anywhere in Utah can be seen without travelling to an office — including areas with no local hormone specialist. Kim Yadon, FNP-C is licensed in Utah and sees patients located in Utah. Laboratory work is the only in-person step, handled at a LabCorp patient service center near the patient.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — sleep and menopause",
      url: "https://www.nia.nih.gov/health/menopause/sleep-problems-and-menopause-what-can-i-do",
    },
    {
      label: "Mayo Clinic — insomnia",
      url: "https://www.mayoclinic.org/diseases-conditions/insomnia/symptoms-causes/syc-20355167",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Hot flashes & night sweats", href: "/symptoms/hot-flashes-night-sweats" },
    { label: "Sleep optimization", href: "/services#sleep" },
    { label: "What BHRT costs", href: "/bhrt-cost-utah" },
    { label: "All FAQs", href: "/faq" },
  ],
};
