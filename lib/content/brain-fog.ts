import type { ContentPage } from "./types";

/**
 * COMPLIANCE: the retired quiz copy called brain fog "often estrogen-related
 * and very treatable". Neither claim may reappear here in any form. Cognition
 * in menopause is an active research area — describe it as such rather than
 * asserting a settled mechanism, and never imply hormone therapy restores
 * cognitive function.
 *
 * Also handled carefully: cognitive symptoms frighten people who fear dementia.
 * The page addresses that directly and honestly rather than ignoring it.
 */
export const brainFog: ContentPage = {
  slug: "symptoms/brain-fog-memory",
  group: "Mind & mood",
  titleSegment: "Menopause Brain Fog & Memory",
  description:
    "Why word-finding trouble and memory lapses are commonly reported in perimenopause, what research does and does not show, and when to seek evaluation.",
  h1: "Brain Fog and Memory Changes in Perimenopause",
  intro:
    "Difficulty finding words, losing a train of thought mid-sentence, and trouble concentrating are commonly reported during perimenopause. Estrogen's role in cognition is an active area of research, and disrupted sleep and stress independently affect concentration. These symptoms are common and are worth discussing with a provider, particularly when they are affecting work or daily functioning.",

  sections: [
    {
      heading: "What does menopause brain fog actually feel like?",
      paragraphs: [
        "The most frequently described experiences are word-finding difficulty, losing the thread of a sentence or task, and needing to reread things that used to be straightforward.",
        "People often describe it as mental effort where there used to be none — following a meeting, holding a list in mind, or switching between tasks takes deliberate concentration. Many report noticing it at work before anywhere else, because that is where sustained focus is most demanded.",
      ],
    },
    {
      heading: "Is this connected to hormones?",
      paragraphs: [
        "Estrogen receptors are present in regions of the brain involved in memory and cognition, and the relationship between hormonal change and cognitive symptoms in midlife is an active area of research rather than a settled question.",
        "What is clearer is that the contributing factors rarely act alone. Disrupted sleep affects concentration and memory consolidation directly. Stress load affects working memory. Mood changes affect attention. Someone experiencing night sweats, broken sleep, and a demanding period at work has several plausible contributors at once, and untangling them is part of what an evaluation does.",
      ],
    },
    {
      heading: "Does brain fog mean an increased risk of dementia?",
      paragraphs: [
        "Cognitive complaints during the menopause transition are common and are generally distinct from the progressive memory loss seen in dementia — but any persistent or worsening change deserves proper evaluation rather than reassurance from a website.",
        "The distinction clinicians look at is broadly between difficulty retrieving information that is still there — the word on the tip of the tongue that arrives later — and losing information entirely, or difficulty with familiar tasks and routines. That distinction cannot be made by self-assessment. Anyone worried about their memory should raise it with a provider, and worry itself is a legitimate reason to ask.",
      ],
    },
    {
      heading: "What else can cause cognitive symptoms?",
      paragraphs: [
        "Several treatable conditions produce concentration and memory difficulties that overlap closely with what gets called brain fog.",
        "This is why a hormone workup screens more broadly. Attributing cognitive symptoms to menopause without checking these can mean a straightforward deficiency or an untreated thyroid condition goes unaddressed for years.",
      ],
      bullets: [
        "Thyroid dysfunction",
        "Vitamin B12 or vitamin D deficiency",
        "Anemia",
        "Sleep apnea and chronic sleep deprivation",
        "Depression and anxiety, which affect attention and working memory",
        "Certain medications, and alcohol use",
      ],
    },
    {
      heading: "What does an evaluation involve?",
      paragraphs: [
        "An evaluation starts by establishing what is contributing, which means history and comprehensive testing rather than a prescription.",
        "That covers the pattern of symptoms, sleep quality, stress, nutrition, and testing across hormones, thyroid, and adrenal function, plus screening for underlying conditions. Kim Yadon, FNP-C addresses foundations such as sleep and stress management before considering hormone therapy, and where it is indicated it forms one part of a plan rather than the whole of it.",
        "Whether hormone therapy is appropriate for any individual is decided after evaluation. Some medical histories make it unsuitable.",
      ],
    },
  ],

  faqs: [
    {
      question: "Is brain fog a recognised part of menopause?",
      answer:
        "Cognitive symptoms including word-finding difficulty and concentration problems are commonly reported during the menopause transition and are frequently raised with providers. The mechanisms are an active area of research. Because sleep disruption, stress, thyroid function, and nutrient deficiencies all independently affect cognition, evaluation looks at several contributors rather than assuming one.",
    },
    {
      question: "Should someone be worried about dementia?",
      answer:
        "Cognitive complaints in midlife are common and generally differ from progressive memory loss, but any persistent or worsening change should be evaluated by a provider rather than self-assessed. Difficulty with familiar routines, losing information entirely rather than retrieving it late, or symptoms that are getting worse are reasons to seek assessment promptly.",
    },
    {
      question: "Can poor sleep alone cause these symptoms?",
      answer:
        "Yes. Sleep is when memory consolidation happens, and chronic sleep disruption measurably affects concentration, word retrieval, and working memory. Someone being woken repeatedly by night sweats may be experiencing cognitive symptoms that stem primarily from fragmented sleep, which is why sleep quality is part of any thorough evaluation.",
    },
    {
      question: "What tests would be involved?",
      answer:
        "A comprehensive workup generally covers sex hormones, thyroid function, and adrenal function, alongside screening for deficiencies such as B12, vitamin D, and iron that can affect cognition. Which panels are ordered depends on history and presentation. Testing runs through LabCorp and is billed separately; costs vary by panel.",
    },
    {
      question: "Does hormone therapy improve memory?",
      answer:
        "The relationship between hormone therapy and cognition is an area of ongoing research rather than a settled question, and hormone therapy is not prescribed as a treatment for memory. Whether it is appropriate for any individual depends on their full clinical picture and history, and it is not suitable for everyone.",
    },
    {
      question: "Are visits available across Utah?",
      answer:
        "Yes. All visits with Kim Yadon, FNP-C are virtual, so patients anywhere in Utah can be seen without travelling to an office. The practice is based in South Jordan and concentrated in Salt Lake County and Utah County, but virtual visits reach the whole state. Laboratory work is handled at a LabCorp location near the patient.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — memory, forgetfulness and aging",
      url: "https://www.nia.nih.gov/health/memory-loss-and-forgetfulness/memory-forgetfulness-and-aging-whats-normal-and-whats-not",
    },
    {
      label: "Mayo Clinic — menopause",
      url: "https://www.mayoclinic.org/diseases-conditions/menopause/symptoms-causes/syc-20353397",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Sleep and insomnia", href: "/symptoms/sleep-insomnia" },
    { label: "Menopause fatigue", href: "/symptoms/menopause-fatigue" },
    { label: "Comprehensive testing", href: "/services#testing" },
    { label: "All FAQs", href: "/faq" },
  ],
};
