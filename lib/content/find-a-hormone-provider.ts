import type { ContentPage } from "./types";

/**
 * A genuinely useful checklist, not a disguised pitch.
 *
 * The criteria are ones a good provider anywhere would meet — several of which
 * Kim happens to meet, which is the point. A page that reverse-engineered its
 * criteria to describe only this practice would be transparent to readers and
 * useless to AI retrieval.
 */
export const findAHormoneProvider: ContentPage = {
  slug: "find-a-hormone-provider",
  titleSegment: "How to Choose a Hormone Provider",
  description:
    "What to look for in a hormone provider in Utah, which questions actually reveal the quality of care on offer, and the warning signs worth taking seriously.",
  h1: "How to Choose a Hormone Provider in Utah",
  intro:
    "Choosing someone to manage hormone care comes down to a few checkable things: whether they are licensed and credentialed, whether they test before prescribing, whether they explain risks as clearly as benefits, and whether they have a financial stake in what they prescribe. The questions below apply to any provider, and the answers are usually revealing within one conversation.",

  sections: [
    {
      heading: "What credentials should a hormone provider have?",
      paragraphs: [
        "Start with an active license in the state where you are located, since telehealth is regulated by the patient's location rather than the provider's.",
        "Physicians, nurse practitioners, and physician assistants can all prescribe hormone therapy depending on state scope of practice. What matters more than the specific credential is whether they have training and ongoing focus in menopause and hormone health specifically, since it is a field where general training goes only so far. Credentials are checkable — state licensing boards and certification registries are public, and a provider should be comfortable being verified.",
      ],
    },
    {
      heading: "Does the provider test before prescribing?",
      paragraphs: [
        "A provider who prescribes hormones without baseline testing and a full history is skipping the step that determines whether treatment is appropriate at all.",
        "Comprehensive assessment generally means more than sex hormones alone — thyroid function overlaps heavily with menopausal symptoms, and several non-hormonal conditions produce the same complaints. Testing also establishes a baseline for whether a plan is working, without which adjustment becomes guesswork.",
      ],
    },
    {
      heading: "How do they talk about risks?",
      paragraphs: [
        "A provider should be able to explain the risks of hormone therapy as fluently as the benefits, and should be clear that it is not suitable for everyone.",
        "Hormone therapy has genuine risks that vary by individual history, age, timing, and formulation. Some medical histories rule it out. A provider who presents it as universally safe, or who dismisses risk questions, is not giving informed consent its proper weight — and that is a reason to look elsewhere regardless of how good everything else looks.",
      ],
    },
    {
      heading: "Is there a financial interest in what gets prescribed?",
      paragraphs: [
        "Ask whether prescriptions must go through a specific pharmacy, and whether the practice has a financial relationship with it.",
        "Some telehealth hormone services route every prescription through a pharmacy they own or profit from, which creates an incentive that does not align with the patient's interest. The same question applies to supplements sold in-office and to lab work marked up by the practice. There is nothing wrong with a provider recommending a pharmacy — the issue is being required to use one.",
      ],
      bullets: [
        "Can I fill prescriptions at any pharmacy I choose?",
        "Does the practice profit from the pharmacy, supplements, or labs?",
        "Are lab costs billed by the lab or marked up by the practice?",
      ],
    },
    {
      heading: "What questions are worth asking on a first call?",
      paragraphs: [
        "Most practices offer some form of introductory conversation, and a handful of direct questions will tell you a great deal.",
        "The answers matter less than whether the provider engages with the questions directly. Vagueness on pricing, testing, or risk is itself information.",
      ],
      bullets: [
        "What testing do you do before prescribing anything?",
        "What does a full course of care typically cost, including labs?",
        "Are you prescribing FDA-approved products, compounded, or both — and why?",
        "How often are follow-ups, and what happens if something is not working?",
        "What are the risks given my history specifically?",
        "Who do I contact between appointments if there is a problem?",
      ],
    },
    {
      heading: "What are the warning signs?",
      paragraphs: [
        "A few patterns are consistent enough to treat as reasons for caution.",
        "None of these individually proves poor care, but several together are a pattern worth heeding.",
      ],
      bullets: [
        "Prescribing without baseline testing or a full history",
        "Guaranteeing specific outcomes or a specific timeline for relief",
        "Presenting hormone therapy as risk-free or universally appropriate",
        "Requiring prescriptions go through one pharmacy without a clinical reason",
        "Selling hormone therapy primarily as a weight-loss solution",
        "Reluctance to explain pricing, or costs that appear only after committing",
      ],
    },
  ],

  faqs: [
    {
      question: "Does a hormone provider need to be a physician?",
      answer:
        "No. Physicians, nurse practitioners, and physician assistants can all prescribe hormone therapy depending on state scope of practice. What matters more is whether the provider has training and ongoing focus in menopause and hormone health specifically, and whether they are actively licensed in the state where the patient is located.",
    },
    {
      question: "Can a hormone provider be seen virtually?",
      answer:
        "Yes, and telehealth is regulated by where the patient is located rather than where the provider is. Hormone care suits virtual visits well because it is primarily conversation and lab review. Laboratory work is the one in-person step, typically handled at a patient service center near the patient.",
    },
    {
      question: "Why does the pharmacy question matter?",
      answer:
        "Some telehealth hormone services route every prescription through a pharmacy they own or profit from, creating an incentive that may not align with the patient's interest. Being able to fill a prescription at a pharmacy of your choosing removes that conflict. It is a straightforward question and the answer should be straightforward too.",
    },
    {
      question: "How much should hormone care cost?",
      answer:
        "Pricing varies widely and many practices do not publish it, which makes comparison difficult. What matters is knowing the full picture before committing: the consultation fee, whether laboratory testing is included or billed separately, medication costs, and follow-up frequency. A provider who is vague about total cost is worth pressing.",
    },
    {
      question: "What credentials does Kim Yadon hold?",
      answer:
        "Kim Yadon, FNP-C is a board-certified family nurse practitioner licensed in Utah. Her published credentials are: Board Certified Nurse Practitioner; trained in BHRT through Worldlink Medical; trained in Functional Medicine; and Certified Diabetes Care and Education Specialist. She sees patients located in Utah, and all visits are virtual.",
    },
    {
      question: "Is there a way to assess fit before paying?",
      answer:
        "A free introductory phone consultation with Kim Yadon, FNP-C runs about 15 minutes, costs nothing, and carries no obligation. It is a reasonable point at which to ask the questions on this page. Most hormone practices offer something comparable, and it is worth using wherever you are considering care.",
    },
  ],

  sources: [
    {
      label: "The Menopause Society — menopause information for patients",
      url: "https://www.menopause.org/for-women",
    },
    {
      label: "Endocrine Society — menopause and hormone therapy",
      url: "https://www.endocrine.org/patient-engagement/endocrine-library/menopause",
    },
  ],

  related: [
    { label: "BHRT vs traditional HRT", href: "/bhrt-vs-hrt" },
    { label: "What BHRT costs", href: "/bhrt-cost-utah" },
    { label: "Meet Kim", href: "/about" },
    { label: "All FAQs", href: "/faq" },
  ],
};
