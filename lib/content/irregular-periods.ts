import type { ContentPage } from "./types";

/**
 * SAFETY-CRITICAL PAGE.
 *
 * Written carelessly, a page about irregular bleeding delays cancer diagnoses.
 * "Irregular periods are normal in perimenopause" is true and is also exactly
 * the sentence that reassures someone out of getting postmenopausal bleeding
 * investigated.
 *
 * So the red-flag section comes FIRST — before the reassuring explanation, not
 * after it. Anyone who reads only the opening of this page must still come
 * away knowing which patterns need to be seen. Do not reorder these sections
 * for narrative flow.
 *
 * Bleeding after 12 months without a period is the single most important line
 * on the page and is stated more than once by design.
 */
export const irregularPeriods: ContentPage = {
  slug: "symptoms/irregular-periods",
  group: "Cycle & intimacy",
  titleSegment: "Irregular & Changing Periods",
  description:
    "Why menstrual cycles change during perimenopause, which bleeding patterns need prompt medical evaluation, and what a comprehensive hormone workup involves.",
  h1: "Irregular and Changing Periods in Perimenopause",
  intro:
    "A change in menstrual cycles is often the first noticeable sign of perimenopause — cycles becoming shorter or longer, periods skipped, flow heavier or lighter than usual. Most of that variability reflects ovulation becoming less predictable as the transition begins. Some bleeding patterns, however, are not part of a normal transition and need prompt medical evaluation rather than reassurance. Knowing which is which is the most useful thing on this page.",

  sections: [
    {
      heading: "Which bleeding patterns need medical evaluation?",
      paragraphs: [
        "Several patterns should be assessed by a healthcare provider rather than assumed to be perimenopause, because they can indicate conditions that are far more treatable when found early.",
        "The most important of these is any bleeding that occurs after menopause — meaning after twelve consecutive months with no period at all. Postmenopausal bleeding is never considered a normal part of the transition and always warrants evaluation, even if it is a single episode, light, or stops on its own.",
      ],
      bullets: [
        "Any bleeding after twelve consecutive months without a period",
        "Bleeding heavy enough to soak through a pad or tampon every hour for several hours in a row",
        "Bleeding that lasts longer than seven days",
        "Bleeding or spotting between periods",
        "Bleeding after sex",
        "Cycles consistently shorter than 21 days apart",
        "Passing large clots, or bleeding with dizziness or shortness of breath",
      ],
    },
    {
      heading: "How do periods normally change during perimenopause?",
      paragraphs: [
        "The typical pattern is increasing unpredictability rather than a gradual, orderly tapering off.",
        "Cycles commonly become shorter before they become longer, so periods may arrive closer together for a period of time. Skipped months become more frequent as the transition progresses, sometimes followed by a return to regular cycles for a while. Flow often changes as well, in either direction. Many women describe never quite knowing what to expect, which is itself characteristic of this stage.",
      ],
    },
    {
      heading: "Why do cycles become unpredictable?",
      paragraphs: [
        "Ovulation becomes irregular, and the hormone pattern that produces a predictable cycle depends on it.",
        "In a regular cycle, ovulation is followed by a rise in progesterone that stabilises the uterine lining before a period. When ovulation happens inconsistently, that progesterone rise becomes inconsistent too, while estrogen continues to fluctuate — often with swings that are larger than before rather than simply lower. That combination produces both the timing changes and the changes in flow that women notice.",
      ],
    },
    {
      heading: "When is someone considered postmenopausal?",
      paragraphs: [
        "Menopause is defined as twelve consecutive months without a menstrual period, and it is identified looking backward.",
        "Until that twelve-month mark is reached, someone is still in perimenopause — which has a practical consequence worth stating plainly: pregnancy remains possible during perimenopause, even with irregular cycles. Contraception is still relevant for anyone who does not want to become pregnant. After that twelve-month point, any bleeding at all should be evaluated.",
      ],
    },
    {
      heading: "What does an evaluation cover?",
      paragraphs: [
        "It starts with a detailed history of the bleeding pattern itself, alongside comprehensive testing.",
        "Kim Yadon, FNP-C works through history and testing across hormones, thyroid, and adrenal function, plus screening for underlying conditions — thyroid dysfunction in particular can affect cycles directly. Where the pattern suggests abnormal bleeding rather than expected transitional change, the appropriate next step involves gynecologic assessment, which may include a physical examination or imaging that a virtual consultation cannot provide. Being told clearly when to see someone in person is part of good care, not a limitation of it.",
        "Tracking dates, flow, and any spotting between periods for a few cycles before an appointment makes that conversation considerably more useful.",
      ],
    },
  ],

  faqs: [
    {
      question: "What counts as an irregular period in perimenopause?",
      answer:
        "Cycles that vary in length from month to month, periods that are skipped and then return, and changes in flow are all commonly reported during the transition. Cycles frequently become shorter before becoming longer. Variability itself is characteristic of this stage, though certain patterns still warrant evaluation rather than being attributed to perimenopause.",
    },
    {
      question: "Is bleeding after menopause ever normal?",
      answer:
        "No. Any bleeding after twelve consecutive months without a period should be evaluated by a healthcare provider, even if it happens once, is light, or stops on its own. Postmenopausal bleeding is not considered part of the normal transition. Most causes turn out to be treatable, and evaluating it early is what makes that true.",
    },
    {
      question: "How heavy is too heavy?",
      answer:
        "Bleeding that soaks through a pad or tampon every hour for several consecutive hours, lasts longer than seven days, or comes with large clots should be assessed. Bleeding accompanied by dizziness or shortness of breath needs prompt attention, as heavy blood loss can cause anemia. These patterns are worth evaluating rather than waiting out.",
    },
    {
      question: "Can someone still get pregnant during perimenopause?",
      answer:
        "Yes. Ovulation becomes unpredictable rather than stopping outright, so pregnancy remains possible until twelve consecutive months have passed without a period. Irregular cycles are not a reliable sign of infertility. Anyone who does not want to become pregnant should continue using contraception through the transition and discuss options with a provider.",
    },
    {
      question: "How long does perimenopause last?",
      answer:
        "Duration varies considerably from person to person. Some women notice changes for a few years, others for longer, and the pattern is rarely a steady progression — cycles often become irregular, settle again, and then change once more. Because it varies this much, no specific timeline can be promised for any individual.",
    },
    {
      question: "Can thyroid problems affect menstrual cycles?",
      answer:
        "Yes. Thyroid dysfunction can affect cycle length and flow directly, and it becomes more common with age. Because its other symptoms overlap with perimenopause, including fatigue and mood changes, it is easy to attribute everything to the transition. Thyroid assessment is a standard part of a comprehensive workup for this reason.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — menopause",
      url: "https://www.nia.nih.gov/health/menopause",
    },
    {
      label: "ACOG — women's health frequently asked questions",
      url: "https://www.acog.org/womens-health/faqs",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Hot flashes and night sweats", href: "/symptoms/hot-flashes-night-sweats" },
    { label: "Vaginal dryness and discomfort", href: "/symptoms/vaginal-dryness" },
    { label: "Comprehensive testing", href: "/services#testing" },
    { label: "All symptom topics", href: "/symptoms" },
  ],
};
