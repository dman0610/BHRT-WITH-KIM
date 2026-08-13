import type { ContentPage } from "./types";

/**
 * Highest-volume symptom query.
 *
 * COMPLIANCE: third person about the population throughout — "many women
 * experience", never "your estrogen is dropping". No timeline for relief, no
 * efficacy promise, no claim that BHRT resolves anything.
 *
 * Sources link to authoritative topic pages, not invented deep links to
 * specific papers. Where a precise prevalence figure could not be sourced with
 * confidence, the copy is written around it rather than inventing a number.
 */
export const hotFlashes: ContentPage = {
  slug: "symptoms/hot-flashes-night-sweats",
  group: "Body & metabolism",
  titleSegment: "Hot Flashes & Night Sweats",
  description:
    "Why hot flashes and night sweats happen during perimenopause, what estrogen has to do with it, and what a hormone evaluation in Utah involves.",
  h1: "Hot Flashes and Night Sweats During Perimenopause",
  intro:
    "Hot flashes and night sweats are among the most commonly reported symptoms of perimenopause and menopause. Clinically they are called vasomotor symptoms, and they are linked to the way fluctuating estrogen affects the part of the brain that regulates body temperature. They are extremely common, they vary enormously between individuals, and they are one of the most frequent reasons women seek out a hormone evaluation.",

  sections: [
    {
      heading: "What causes hot flashes during perimenopause?",
      paragraphs: [
        "Current understanding links vasomotor symptoms to changes in how the brain's temperature-regulating center responds as estrogen levels fluctuate.",
        "The hypothalamus maintains body temperature within a narrow comfortable range. As estrogen levels shift during perimenopause, that range appears to narrow, so a smaller change in core temperature is enough to trigger a cooling response — flushing, sweating, and the sudden heat sensation people recognise as a hot flash. Night sweats are the same mechanism occurring during sleep.",
        "This is why hot flashes often arrive before periods stop entirely. Perimenopause involves fluctuation rather than a steady decline, and it is the variability, not simply low estrogen, that appears to matter.",
      ],
    },
    {
      heading: "How long do hot flashes usually last?",
      paragraphs: [
        "Duration varies widely between individuals, and research on menopause symptoms consistently finds a wide range rather than a predictable timeline.",
        "Some women experience vasomotor symptoms for a relatively short period around the menopause transition; others report them persisting for years afterward. Because the range is so broad, no honest answer applies to everyone, and any source promising a specific timeline is overstating what the evidence supports. The Menopause Society and the NIH National Institute on Aging both publish current overviews worth reading.",
      ],
    },
    {
      heading: "What else can cause hot flashes?",
      paragraphs: [
        "Hormonal change is the most common explanation in midlife, but it is not the only one, which is why evaluation matters before assuming a cause.",
        "Thyroid dysfunction, certain medications, some infections, and other medical conditions can produce similar symptoms. This is one reason a hormone workup typically screens more broadly than sex hormones alone. Treating a symptom as menopausal when something else is driving it delays finding the real explanation.",
      ],
      bullets: [
        "Thyroid conditions, which can mimic several perimenopausal symptoms",
        "Some prescription medications",
        "Anxiety and panic symptoms, which can overlap in presentation",
        "Less commonly, other underlying medical conditions",
      ],
    },
    {
      heading: "What does bioidentical hormone therapy address?",
      paragraphs: [
        "Bioidentical hormone replacement therapy uses hormones structurally identical to those the body produces, and hormone therapy in general is one of the recognised approaches discussed for vasomotor symptoms.",
        "Whether it is appropriate for any individual depends on their health history, their symptoms, and their lab work — that determination belongs to a licensed provider after an evaluation, not to a website. Some medical histories make hormone therapy unsuitable. Both The Menopause Society and the Endocrine Society publish clinical guidance that is worth reading alongside a provider conversation.",
        "Kim Yadon, FNP-C works through history and comprehensive testing first — hormones, thyroid, and adrenal function, plus screening for underlying conditions — and addresses foundations like sleep, nutrition, movement and stress before considering a prescription.",
      ],
    },
    {
      heading: "When is it worth talking to a provider?",
      paragraphs: [
        "It is reasonable to seek an evaluation whenever symptoms are affecting daily life, sleep, or work — there is no threshold of severity that has to be met first.",
        "Many women delay because they have been told these changes are simply part of aging and nothing can be done. Being told that is common, and it is not a reason to stop asking questions. A consultation is an opportunity to understand what is happening and what the options are, without any obligation to pursue treatment.",
      ],
    },
  ],

  faqs: [
    {
      question: "Are hot flashes and night sweats the same thing?",
      answer:
        "They share the same underlying mechanism. Both are classed as vasomotor symptoms, linked to changes in how the brain's temperature regulation responds as estrogen fluctuates. A hot flash is the daytime experience; a night sweat is the same event occurring during sleep, which is why it frequently disrupts rest and gets reported separately.",
    },
    {
      question: "Can hot flashes start before periods stop?",
      answer:
        "Yes, and this is common. Perimenopause is characterised by fluctuating rather than steadily declining hormone levels, and vasomotor symptoms frequently begin while cycles are still occurring. Many women are surprised by this because menopause is often described as though symptoms only begin once periods have ended entirely.",
    },
    {
      question: "Do hot flashes mean someone is in menopause?",
      answer:
        "Not necessarily. Menopause is defined as twelve consecutive months without a period, and vasomotor symptoms often begin well before that point during perimenopause. Other conditions, including thyroid dysfunction and certain medications, can also produce similar symptoms — which is why an evaluation looks at more than one possible explanation.",
    },
    {
      question: "Does treatment have to involve hormones?",
      answer:
        "No. Approaches to vasomotor symptoms include both lifestyle and hormonal options, and what is appropriate depends on the individual's history and preferences. Kim's stated approach is to address foundations such as sleep, nutrition, movement and stress management before considering a prescription, and hormone therapy is not suitable for everyone.",
    },
    {
      question: "How does a virtual consultation handle testing?",
      answer:
        "Testing runs through LabCorp, which operates patient service centers across the country. The patient receives an email with the lab order, schedules an appointment with LabCorp, and goes to a nearby location for the draw. There is no need to travel to an office. Lab costs vary by panel and are billed separately by the laboratory.",
    },
    {
      question: "Who does Kim Yadon see?",
      answer:
        "Kim Yadon, FNP-C is a board-certified family nurse practitioner licensed in Utah, seeing patients located in Utah. All visits are virtual, so women anywhere in the state can be seen — including areas without a local hormone specialist. The practice is based in South Jordan, with a concentration in Salt Lake County and Utah County.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — hot flashes and menopause",
      url: "https://www.nia.nih.gov/health/menopause/hot-flashes-what-can-i-do",
    },
    {
      label: "Mayo Clinic — hot flashes",
      url: "https://www.mayoclinic.org/diseases-conditions/hot-flashes/symptoms-causes/syc-20352790",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Sleep and insomnia", href: "/symptoms/sleep-insomnia" },
    { label: "What BHRT costs", href: "/bhrt-cost-utah" },
    { label: "Bioidentical hormone therapy", href: "/services#bhrt" },
    { label: "All FAQs", href: "/faq" },
  ],
};
