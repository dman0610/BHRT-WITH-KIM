import type { ContentPage } from "./types";

/**
 * HIGHEST-RISK PAGE ON THE SITE.
 *
 * Mood symptoms in midlife overlap with major depression and anxiety
 * disorders, which are serious conditions with their own treatments. Three
 * rules govern every line here:
 *
 *  1. NEVER position hormone therapy as a treatment for depression or anxiety.
 *     It is not, no professional society says it is, and implying otherwise
 *     could lead someone to delay real psychiatric care.
 *  2. NEVER tell a reader which of the two they have. The page describes how
 *     the two differ and says who to ask — it does not diagnose.
 *  3. The 988 crisis line is non-negotiable and must stay visible. A page about
 *     mood on a healthcare site that omits it is negligent, and no future edit
 *     for length or tone may remove it.
 *
 * The page also must not discourage anyone from mental-health care, including
 * medication they are already taking.
 */
export const moodAnxiety: ContentPage = {
  slug: "symptoms/mood-changes-anxiety",
  group: "Mind & mood",
  titleSegment: "Mood Changes & Anxiety",
  description:
    "Why mood changes and anxiety are commonly reported during perimenopause, how they differ from depression and anxiety disorders, and when to seek care.",
  h1: "Mood Changes and Anxiety During Perimenopause",
  intro:
    "Irritability, low mood, tearfulness, and a sense of anxiety that feels new are among the most commonly reported experiences of the menopause transition. Fluctuating estrogen, disrupted sleep, and the life circumstances that often coincide with this stage all contribute. These changes overlap heavily with depression and anxiety disorders, which are distinct conditions requiring their own care — so the useful step is an evaluation that considers both, rather than assuming hormones explain everything.",

  sections: [
    {
      heading: "Why does mood change during perimenopause?",
      paragraphs: [
        "Estrogen fluctuates unpredictably during the transition, and estrogen interacts with the brain systems involved in mood regulation.",
        "The pattern many women describe is not a steady low but a volatility that feels unfamiliar — reacting more strongly than a situation warrants, then feeling fine again. Sleep is a major amplifier here. Someone being woken repeatedly by night sweats is running on fragmented sleep, and fragmented sleep independently worsens mood and emotional regulation in anyone. The two problems compound each other, which is one reason sleep is usually addressed early.",
        "Life stage matters too. This period often coincides with teenagers, aging parents, career pressure, and changes in identity. Those are real stressors, not imagined ones, and acknowledging them is not the same as dismissing the biology.",
      ],
    },
    {
      heading: "How is this different from depression or an anxiety disorder?",
      paragraphs: [
        "The symptoms overlap enough that they cannot be reliably told apart from a description alone — which is exactly why it is worth asking a professional rather than deciding alone.",
        "As a broad distinction, mood changes associated with the transition tend to fluctuate and often track alongside other symptoms such as sleep disruption and hot flashes. Major depression tends to be more persistent, lasting most of the day nearly every day for weeks, and commonly involves loss of interest in things that were previously enjoyed, changes in appetite, and difficulty functioning. Anxiety disorders similarly involve worry that is persistent and interferes with daily life. A history of depression or postpartum depression also raises the likelihood that what is happening now is more than a hormonal shift.",
        "None of that is a checklist for self-diagnosis. Someone whose symptoms are persistent, worsening, or affecting their ability to work or care for people should speak to a healthcare provider or a mental-health professional. That is true regardless of what hormone levels show.",
        "If anyone is having thoughts of harming themselves, help is available right now: the 988 Suicide & Crisis Lifeline can be reached in the United States by calling or texting 988, 24 hours a day.",
      ],
    },
    {
      heading: "What else contributes to mood changes in midlife?",
      paragraphs: [
        "Several contributors are neither hormonal nor psychiatric, and each is worth ruling out because each is addressed differently.",
        "Thyroid dysfunction deserves particular attention, since it becomes more common with age and can produce both low mood and anxiety-like symptoms that are indistinguishable from other causes without testing.",
      ],
      bullets: [
        "Thyroid dysfunction, which can mimic both depression and anxiety",
        "Chronic sleep deprivation, often from night sweats",
        "Anemia or nutritional deficiencies",
        "Alcohol use, which disrupts sleep and worsens mood",
        "Certain medications",
        "Sustained life stress and caregiving demands",
      ],
    },
    {
      heading: "Does hormone therapy treat depression or anxiety?",
      paragraphs: [
        "No. Hormone therapy is not a treatment for depression or for anxiety disorders, and it should not be presented as one.",
        "It is prescribed, where appropriate, for symptoms of the menopause transition. Some women find that when disrupted sleep and night sweats improve, mood becomes easier to manage — but that is an indirect effect and not a promised outcome, and it is a different claim from treating a psychiatric condition. Depression and anxiety disorders have their own established treatments, and someone who has them deserves those treatments rather than a substitute.",
        "Anyone already taking an antidepressant or anxiety medication should not stop or change it based on anything read on a website. That conversation belongs with the prescriber.",
      ],
    },
    {
      heading: "What does an evaluation cover?",
      paragraphs: [
        "A useful evaluation looks at the hormonal picture and the alternative explanations together, rather than choosing one in advance.",
        "Kim Yadon, FNP-C works through history and comprehensive testing across hormones and thyroid function, and addresses the foundations that affect mood directly — sleep, nutrition, movement, and stress. Where symptoms point toward depression or an anxiety disorder, the appropriate step is care from a provider who treats those conditions, and hormone care does not replace it. The two can run alongside each other.",
      ],
    },
  ],

  faqs: [
    {
      question: "Are mood swings a normal part of perimenopause?",
      answer:
        "Irritability and mood changes are among the most commonly reported experiences of the transition, often described as reacting more strongly than usual and then feeling fine again. Common does not mean nothing can be done, and it does not rule out depression or an anxiety disorder. Persistent or worsening symptoms are worth discussing with a provider.",
    },
    {
      question: "How can someone tell perimenopause from depression?",
      answer:
        "Not reliably on their own, because the symptoms overlap substantially. Broadly, transition-related mood change tends to fluctuate alongside symptoms like disrupted sleep, while depression tends to persist most of the day nearly every day for weeks and often involves losing interest in things once enjoyed. A professional evaluation is the appropriate way to distinguish them.",
    },
    {
      question: "Does hormone therapy treat anxiety or depression?",
      answer:
        "No. Hormone therapy is not a treatment for depression or anxiety disorders and is not prescribed for them. It is used, where appropriate, for symptoms of the menopause transition. Some women find mood easier to manage once sleep and night sweats improve, but that is indirect and is not a substitute for mental-health care.",
    },
    {
      question: "Can a thyroid problem cause mood changes?",
      answer:
        "Yes. Thyroid dysfunction can produce low mood, irritability, and anxiety-like symptoms, and it becomes more common with age. Because it is indistinguishable from other causes without testing, thyroid assessment is a standard part of a comprehensive hormone workup rather than an optional extra.",
    },
    {
      question: "Should someone stop their antidepressant during perimenopause?",
      answer:
        "Not based on information from a website. Stopping or changing a psychiatric medication is a decision for the prescribing provider, and stopping abruptly can cause withdrawal effects or a return of symptoms. Anyone wondering whether their medication is still the right fit should raise that question with their prescriber directly.",
    },
    {
      question: "Where can someone get help in a crisis?",
      answer:
        "In the United States, the 988 Suicide & Crisis Lifeline is available 24 hours a day by calling or texting 988. It is free and confidential, and it is for anyone in emotional distress, not only those in immediate danger. For a medical emergency, call 911. This website is educational and is not a substitute for urgent care.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute of Mental Health — depression",
      url: "https://www.nimh.nih.gov/health/topics/depression",
    },
    {
      label: "NIH National Institute of Mental Health — anxiety disorders",
      url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Sleep and insomnia", href: "/symptoms/sleep-insomnia" },
    { label: "Menopause brain fog", href: "/symptoms/brain-fog-memory" },
    { label: "Stress reduction", href: "/services#stress" },
    { label: "Sleep and hormone health", href: "/resources/sleep-hormones" },
  ],
};
