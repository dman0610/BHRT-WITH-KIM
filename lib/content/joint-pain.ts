import type { ContentPage } from "./types";

/**
 * COMPLIANCE NOTES for this page:
 *
 *  - Most midlife joint pain is NOT hormonal. Osteoarthritis and inflammatory
 *    arthritis are common in this age group and have their own treatments.
 *    A page that folds all joint pain into "hormones" would send people with
 *    rheumatoid arthritis to the wrong provider — and early treatment is what
 *    protects joints in that condition, so the delay does real damage.
 *  - The inflammatory red flags therefore sit in their own section rather than
 *    a footnote.
 *  - Hormone therapy is NOT presented as a treatment for joint pain or for
 *    arthritis. The evidence does not support that claim.
 *
 * Same differentiator that made the weight-gain page work: being the source
 * that declines to overclaim.
 */
export const jointPain: ContentPage = {
  slug: "symptoms/joint-pain",
  group: "Body & metabolism",
  titleSegment: "Joint Pain & Stiffness",
  description:
    "Why joint pain and stiffness are commonly reported around menopause, which causes are not hormonal, and what is worth ruling out before assuming hormones.",
  h1: "Joint Pain and Stiffness Around Menopause",
  intro:
    "Aching joints and morning stiffness are frequently reported during the menopause transition, and estrogen does appear to play a role in joint and connective tissue. That said, a great deal of midlife joint pain is not hormonal at all — osteoarthritis, inflammatory arthritis, thyroid dysfunction, and simple overuse all become more common at this age, and several of them have specific treatments that work best when started early. Attributing everything to hormones is the main way this symptom gets mishandled.",

  sections: [
    {
      heading: "Is joint pain related to menopause?",
      paragraphs: [
        "Joint aches and stiffness are commonly reported around the transition, and estrogen receptors are present in joint and connective tissue, which gives the association a plausible mechanism.",
        "What women often describe is generalised aching and stiffness that is worse in the morning or after sitting, affecting several joints rather than one, and appearing alongside other transitional symptoms. That pattern is worth mentioning to a provider. It is not, on its own, enough to conclude that hormones are the cause — which matters, because the alternatives are treated differently.",
      ],
    },
    {
      heading: "What causes joint pain that isn't hormonal?",
      paragraphs: [
        "Several conditions become more common in midlife and account for a substantial share of joint pain at this age.",
        "Osteoarthritis is the most common. It reflects cumulative changes to cartilage over time, typically affects the joints that have carried the most load, and is not caused by menopause even though the two often coincide. Inflammatory conditions such as rheumatoid arthritis are a different matter entirely and frequently begin in women during midlife — which is exactly why the next section exists.",
      ],
      bullets: [
        "Osteoarthritis, the most common cause of joint pain in this age group",
        "Inflammatory arthritis, including rheumatoid arthritis",
        "Thyroid dysfunction, which can cause joint and muscle aches",
        "Vitamin D deficiency",
        "Previous injury and cumulative overuse",
        "Reduced activity and loss of supporting muscle strength",
      ],
    },
    {
      heading: "Which symptoms suggest something other than hormonal change?",
      paragraphs: [
        "Certain features point toward an inflammatory condition and should be assessed rather than attributed to the transition.",
        "Rheumatoid arthritis and related conditions are frequently diagnosed in women in midlife, and their symptoms overlap enough with transitional aches to be mistaken for them. The distinction matters more here than almost anywhere else on this site: early treatment of inflammatory arthritis is what protects joints from lasting damage, so a delay caused by assuming hormones has a real cost.",
      ],
      bullets: [
        "Joints that are visibly swollen, warm, or red",
        "Morning stiffness lasting more than about an hour",
        "Symmetrical pain, affecting the same joints on both sides",
        "A single joint that is severely painful, swollen, or hot",
        "Fever, unexplained weight loss, or marked fatigue alongside joint pain",
        "Pain that is progressively worsening rather than fluctuating",
      ],
    },
    {
      heading: "Does hormone therapy treat joint pain?",
      paragraphs: [
        "Hormone therapy is not a treatment for arthritis and is not prescribed for joint pain.",
        "It is prescribed, where appropriate, for symptoms of the menopause transition. Some women report that generalised aches feel easier when other transitional symptoms improve, but the evidence on joint pain specifically is limited and no outcome should be expected or promised. Anyone whose main concern is joint pain deserves a proper assessment of what is actually causing it, which may well lead somewhere other than hormone care.",
      ],
    },
    {
      heading: "What does an evaluation cover?",
      paragraphs: [
        "It covers the alternatives as well as the hormonal picture, because ruling things out is most of the value here.",
        "Kim Yadon, FNP-C works through history and comprehensive testing across hormones and thyroid function — thyroid dysfunction and vitamin D deficiency both cause joint and muscle aches and both are straightforward to test for. Where the picture suggests inflammatory arthritis, the appropriate step is assessment by a provider who diagnoses and treats it, and that referral is the right outcome rather than a failure of the consultation.",
        "Strength training also matters here, since muscle supporting a joint reduces the load on it. That is one of the few factors in this list that responds directly to a specific action.",
      ],
    },
  ],

  faqs: [
    {
      question: "Is joint pain a symptom of menopause?",
      answer:
        "Joint aches and stiffness are commonly reported during the transition, and estrogen receptors are present in joint tissue. However, a substantial share of midlife joint pain has non-hormonal causes including osteoarthritis, inflammatory arthritis, thyroid dysfunction, and overuse. Reporting it is worthwhile; assuming hormones are responsible without evaluation is not.",
    },
    {
      question: "Which joint symptoms need medical evaluation?",
      answer:
        "Joints that are visibly swollen, warm, or red, morning stiffness lasting more than about an hour, symmetrical pain affecting both sides, a single severely painful joint, or joint pain with fever or unexplained weight loss. These features point toward inflammatory conditions that need assessment rather than being attributed to the menopause transition.",
    },
    {
      question: "Could this be arthritis rather than menopause?",
      answer:
        "It could. Osteoarthritis is the most common cause of joint pain in this age group, and inflammatory conditions such as rheumatoid arthritis frequently begin in women during midlife. Their symptoms overlap with transitional aches enough to be confused. Early treatment of inflammatory arthritis is what protects joints, so evaluation matters.",
    },
    {
      question: "Does hormone therapy help joint pain?",
      answer:
        "Hormone therapy is not a treatment for arthritis and is not prescribed for joint pain. It is used, where appropriate, for symptoms of the menopause transition. Some women report generalised aches feel easier when other symptoms improve, but evidence on joint pain specifically is limited and no outcome should be expected.",
    },
    {
      question: "Can thyroid problems or low vitamin D cause aching joints?",
      answer:
        "Both can. Thyroid dysfunction can produce joint and muscle aches alongside fatigue and temperature sensitivity, and vitamin D deficiency is associated with musculoskeletal aching. Both become more common with age, both overlap with perimenopausal symptoms, and both are straightforward to test for as part of a comprehensive workup.",
    },
    {
      question: "Does exercise help or make joint pain worse?",
      answer:
        "Appropriate movement generally helps, though what is appropriate depends on the cause. Strength training builds the muscle that supports a joint and reduces the load on it, which is one of the few factors here that responds directly to a specific action. Anyone with an undiagnosed inflammatory condition should get that assessed first.",
    },
  ],

  sources: [
    {
      label: "NIH NIAMS — osteoarthritis",
      url: "https://www.niams.nih.gov/health-topics/osteoarthritis",
    },
    {
      label: "NIH NIAMS — rheumatoid arthritis",
      url: "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
    },
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
  ],

  breadcrumb: [{ name: "Symptoms", path: "/symptoms" }],

  related: [
    { label: "Menopause fatigue and low energy", href: "/symptoms/menopause-fatigue" },
    { label: "Weight changes around menopause", href: "/symptoms/hormonal-weight-gain" },
    { label: "Exercise & movement", href: "/services#exercise" },
    { label: "All symptom topics", href: "/symptoms" },
  ],
};
