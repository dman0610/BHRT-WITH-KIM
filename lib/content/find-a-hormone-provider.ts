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
    "What to look for in a hormone provider in Utah, the questions that show the quality of care on offer, and the warning signs that warrant caution.",
  h1: "How to Choose a Hormone Provider in Utah",
  intro:
    "Four things can be checked about any hormone provider: whether they are licensed and credentialed, whether they test before prescribing, whether they explain risks as clearly as benefits, and whether they profit from what they prescribe. The questions below apply to any practice, and one conversation is usually enough to answer them.",

  sections: [
    {
      heading: "What credentials should a hormone provider have?",
      paragraphs: [
        "Start with an active license in the state where you are located. Telehealth is regulated by the patient's location, not the provider's.",
        "Physicians, nurse practitioners and physician assistants can all prescribe hormone therapy, within each state's scope of practice. The specific title matters less than training and ongoing focus in menopause and hormone health, a field where general training only goes so far. Credentials can be checked: state licensing boards and certification registries are public, and a provider should be comfortable being verified.",
      ],
    },
    {
      heading: "Does the provider test before prescribing?",
      paragraphs: [
        "Prescribing hormones without baseline testing and a full history skips the step that determines whether treatment is appropriate at all.",
        "A thorough assessment covers more than sex hormones. Thyroid disease shares many symptoms with menopause, and several non-hormonal conditions produce the same complaints. Testing also sets the baseline against which a plan is judged; without one, adjustments are guesswork.",
      ],
    },
    {
      heading: "How do they talk about risks?",
      paragraphs: [
        "A provider should explain the risks of hormone therapy as readily as the benefits, and say plainly that it is not suitable for everyone.",
        "The risks are real and vary with medical history, age, timing and formulation, and some histories rule hormone therapy out. A provider who presents it as universally safe, or brushes off questions about risk, is not taking informed consent seriously. That alone is reason to look elsewhere.",
      ],
    },
    {
      heading: "Is there a financial interest in what gets prescribed?",
      paragraphs: [
        "Ask whether prescriptions must go through a particular pharmacy, and whether the practice has a financial relationship with it.",
        "Some telehealth hormone services send every prescription to a pharmacy they own or profit from, an incentive that does not match the patient's interest. The same applies to supplements sold in the office and to lab work the practice marks up. Recommending a pharmacy is fine; requiring one is the problem.",
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
        "Most practices offer an introductory conversation, and a few direct questions reveal a great deal.",
        "How a provider engages with these questions matters more than any single answer. Vagueness about pricing, testing or risk is itself informative.",
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
        "Several patterns recur often enough to treat as reasons for caution.",
        "No single item proves poor care. Several together form a pattern.",
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
        "No. Physicians, nurse practitioners and physician assistants can all prescribe hormone therapy within their state's scope of practice. More important is whether the provider has training and ongoing focus in menopause and hormone health, and holds an active license in the state where the patient is located.",
    },
    {
      question: "Can a hormone provider be seen virtually?",
      answer:
        "Yes. Telehealth is regulated by where the patient is located, not where the provider is. Hormone care suits virtual visits because it consists mostly of conversation and lab review. Laboratory testing is the one in-person step, usually done at a patient service center near the patient.",
    },
    {
      question: "Why does the pharmacy question matter?",
      answer:
        "Some telehealth hormone services send every prescription to a pharmacy they own or profit from, which creates an incentive that may not match the patient's interest. Being free to fill a prescription at any pharmacy removes that conflict. The question is simple, and a provider's answer should be just as simple.",
    },
    {
      question: "How much should hormone care cost?",
      answer:
        "Prices vary widely, and many practices do not publish them, which makes comparison difficult. Before committing, ask for the full picture: the visit fees, whether lab testing is included or billed separately, medication costs, and how often follow-ups occur. A provider who is vague about total cost should be pressed for specifics.",
    },
    {
      question: "What credentials does Kim Yadon hold?",
      answer:
        "Kim Yadon, FNP-C is a board-certified family nurse practitioner licensed in Utah, with a Master of Science in Nursing from Indiana State University. She is a Certified Diabetes Care and Education Specialist and has completed bioidentical hormone therapy training through WorldLink Medical. Her license and National Provider Identifier are public records anyone can check. She sees patients located in Utah, and all visits are virtual.",
    },
    {
      question: "Is there a way to assess fit before paying?",
      answer:
        "Yes. A free introductory phone consultation with Kim Yadon, FNP-C lasts about 15 minutes, costs nothing and carries no obligation. It is a good time to ask the questions on this page. Most hormone practices offer something similar, and it is worth using wherever you are considering care.",
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
