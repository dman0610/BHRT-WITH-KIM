import type { ContentPage } from "./types";

/**
 * HIGHEST COMPLIANCE RISK PAGE.
 *
 * Most competitor pages on this topic imply hormone therapy causes weight
 * loss. It must not be implied here in any form — not in a headline, not in a
 * FAQ, not by omission.
 *
 * The honest position, stated plainly: midlife weight change is driven largely
 * by age-related muscle loss and activity change, menopause is associated more
 * with fat REDISTRIBUTION than with total gain, and hormone therapy is not a
 * weight-loss treatment. Saying that clearly is both correct and a genuine
 * differentiator in a category full of the opposite claim.
 */
export const hormonalWeightGain: ContentPage = {
  slug: "symptoms/hormonal-weight-gain",
  group: "Body & metabolism",
  titleSegment: "Hormonal Weight Gain",
  description:
    "What actually drives weight change around menopause, why fat distribution shifts, and an honest answer on whether hormone therapy causes weight loss.",
  h1: "Weight Changes Around Menopause",
  intro:
    "Weight change during midlife is common, and the research picture is more nuanced than it is usually presented. Age-related muscle loss and reduced activity appear to drive most of the weight gain itself, while the menopause transition is more closely associated with a shift in where fat is stored — from hips and thighs toward the abdomen. Hormone therapy is not a weight-loss treatment, and any source presenting it as one is overstating what the evidence supports.",

  sections: [
    {
      heading: "Does menopause itself cause weight gain?",
      paragraphs: [
        "The evidence more strongly associates the menopause transition with a change in fat distribution than with total weight gain.",
        "Weight tends to increase gradually through midlife for reasons that apply regardless of menopausal status: muscle mass declines with age, which lowers resting energy expenditure, and activity levels commonly fall. What the hormonal transition appears to change is where fat is stored, with a shift toward the abdomen that many women notice as a change in shape even when the number on the scale has not moved much.",
        "This distinction matters practically. Someone whose clothes fit differently but whose weight is stable is describing redistribution, and that is a different conversation from steady weight gain.",
      ],
    },
    {
      heading: "Why does body shape change even without weight gain?",
      paragraphs: [
        "The shift toward abdominal fat storage is one of the more consistent findings associated with the menopause transition.",
        "Many women describe this as the most noticeable physical change of this period — waistbands fitting differently while overall weight is unchanged. It is a real, documented pattern rather than a matter of perception, and it is worth naming because being told 'the scale looks fine' does not address what someone is actually experiencing.",
      ],
    },
    {
      heading: "What else contributes to weight change in midlife?",
      paragraphs: [
        "Several factors compound during this period, and most of them are not hormonal.",
        "Sleep is one of the more underappreciated. Chronic sleep disruption affects appetite-regulating hormones and makes food choices harder, so someone being woken repeatedly by night sweats is facing a genuine physiological headwind, not a willpower problem. Thyroid dysfunction is also worth ruling out, since it becomes more common with age and directly affects metabolism.",
      ],
      bullets: [
        "Age-related loss of muscle mass, which lowers resting energy expenditure",
        "Reduced physical activity, often gradual and unnoticed",
        "Chronic sleep disruption, which affects appetite regulation",
        "Thyroid dysfunction",
        "Stress and elevated cortisol",
        "Certain medications",
      ],
    },
    {
      heading: "Is hormone therapy a treatment for weight loss?",
      paragraphs: [
        "No. Hormone therapy is not prescribed for weight loss, and it should not be presented as a weight-loss intervention.",
        "It is prescribed, when appropriate, for symptoms of the menopause transition. Some women find that addressing symptoms such as disrupted sleep or night sweats makes it more feasible to sustain the activity and eating patterns that do affect weight — but that is an indirect effect, and it is not a promise. Whether hormone therapy is suitable for any individual depends on their history and clinical picture, and it is not appropriate for everyone.",
        "Anyone being sold hormone therapy primarily as a weight-loss solution should treat that as a reason for caution.",
      ],
    },
    {
      heading: "What does an evaluation cover?",
      paragraphs: [
        "An evaluation looks at the contributing factors rather than treating weight as a single problem with a single cause.",
        "Kim Yadon, FNP-C works through history and comprehensive testing — hormones, thyroid, and adrenal function, plus screening for underlying conditions — and addresses foundations including sleep, nutrition, movement, and stress. Strength training in particular matters for the muscle-mass component, which is one of the few factors here that responds directly to a specific intervention.",
      ],
    },
  ],

  faqs: [
    {
      question: "Does menopause cause weight gain?",
      answer:
        "The relationship is more nuanced than usually presented. Research associates the menopause transition more strongly with a shift in fat distribution toward the abdomen than with total weight gain. The gradual weight increase common in midlife appears driven largely by age-related muscle loss and reduced activity, which occur regardless of menopausal status.",
    },
    {
      question: "Why does weight settle around the middle now?",
      answer:
        "A shift toward abdominal fat storage is one of the more consistent patterns associated with the menopause transition. Many women notice it as a change in how clothes fit even when overall weight is stable. It is a documented physical change rather than a matter of perception, and it is a common reason women seek evaluation.",
    },
    {
      question: "Will hormone therapy help someone lose weight?",
      answer:
        "Hormone therapy is not a weight-loss treatment and is not prescribed for that purpose. It is prescribed, where appropriate, for symptoms of the menopause transition. Some women find that improving sleep or reducing night sweats makes sustaining activity and eating patterns easier, but that is indirect and is not a promised outcome.",
    },
    {
      question: "Could a thyroid problem be responsible?",
      answer:
        "Thyroid dysfunction directly affects metabolism and becomes more common with age, so it is worth ruling out when weight changes unexpectedly. It shares several symptoms with perimenopause, including fatigue and temperature sensitivity, which makes the two easy to confuse. Thyroid assessment is a standard part of a comprehensive hormone workup.",
    },
    {
      question: "How does sleep affect weight?",
      answer:
        "Chronic sleep disruption affects the hormones that regulate appetite and satiety, and it makes consistent food choices measurably harder. Someone being woken repeatedly by night sweats is dealing with a physiological headwind rather than a discipline problem. This is one reason sleep is addressed early rather than treated as a separate issue.",
    },
    {
      question: "What does a first consultation cost?",
      answer:
        "The introductory phone consultation with Kim Yadon, FNP-C is free and runs about 15 minutes. A full initial consultation is $200 and about 60 minutes. A comprehensive package covering five visits over roughly a year is $1,500. Medications and laboratory fees are billed separately and are not included in either option.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "NIH National Institute on Aging — maintaining a healthy weight",
      url: "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/maintaining-healthy-weight",
    },
    {
      label: "Mayo Clinic — menopause weight gain",
      url: "https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menopause-weight-gain/art-20046058",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Sleep and insomnia", href: "/symptoms/sleep-insomnia" },
    { label: "Nutrition & hydration", href: "/services#nutrition" },
    { label: "Exercise & movement", href: "/services#exercise" },
    { label: "All FAQs", href: "/faq" },
  ],
};
