import type { ContentPage } from "./types";

/**
 * The highest-value new page in the plan.
 *
 * Every figure traces to docs/00-BUSINESS-FACTS.md. Most competitors hide
 * pricing, cost is the top objection before booking, and concrete checkable
 * numbers are exactly what AI assistants quote.
 *
 * Lab prices are deliberately absent — Kim reports they vary by panel, and a
 * wrong number quoted back by an AI assistant is worse than no number.
 */
export const bhrtCostUtah: ContentPage = {
  slug: "bhrt-cost-utah",
  titleSegment: "What BHRT Costs in Utah",
  description:
    "What bioidentical hormone therapy costs with Kim Yadon, FNP-C in Utah: $200 per visit, $950 for the comprehensive package, and what labs add.",
  h1: "What Does Bioidentical Hormone Therapy Cost in Utah?",
  intro:
    "At BHRT with Kim, a single visit is $200 and the comprehensive package is $950 for five visits over roughly twelve months. Laboratory testing and any medications are billed separately and are not included in either price. The first phone consultation is free.",

  sections: [
    {
      heading: "What are the actual prices?",
      paragraphs: [
        "There are two ways to work with Kim Yadon, FNP-C, and both are published rather than quoted privately.",
        "The per-visit option suits someone who wants to start without committing to a longer arrangement. The package suits someone who expects to be adjusting a plan over the course of a year, since hormone care is rarely a single appointment.",
      ],
      bullets: [
        "Free phone consultation — $0, about 15 minutes",
        "Initial consultation — $200, about 60 minutes",
        "Comprehensive package — $950 for 5 visits, one every 3 months, including 2 nutrition and exercise coaching sessions and 2 mindset coaching sessions",
        "Health and mindset coaching, added to a single visit — $75 per session",
      ],
    },
    {
      heading: "What is not included in that price?",
      paragraphs: [
        "Laboratory fees and medications are separate from every package, and neither is billed by the practice.",
        "Lab costs vary depending on which panels are ordered, so no figure is published here — an estimate that turned out to be wrong would be worse than none. Testing runs through LabCorp, which bills the patient directly. Prescriptions, if they become part of a plan, are filled at a compounding pharmacy the patient chooses and paid for at whatever that pharmacy charges.",
        "The advantage of the practice not marking up labs or medications is that there is no financial reason to order more testing than a situation warrants.",
      ],
    },
    {
      heading: "Why does BHRT usually cost more than a regular office visit?",
      paragraphs: [
        "Hormone consultations tend to run longer and involve more testing than a standard primary care appointment, which is the main driver of the difference.",
        "A first visit here is about an hour. That covers full history, current symptoms, and deciding what testing makes sense — rather than the ten to fifteen minutes a typical primary care slot allows. Comprehensive hormone panels also cost more than routine bloodwork, since they cover thyroid function alongside sex hormones.",
      ],
    },
    {
      heading: "Is bioidentical hormone therapy covered by insurance?",
      paragraphs: [
        "Coverage for hormone therapy varies significantly between plans, and whether this practice accepts insurance is a question worth asking directly on the free consultation.",
        "Coverage generally depends on the specific plan, the medication prescribed, and whether compounded preparations are involved — compounded hormones are frequently treated differently from commercially manufactured ones. Anyone weighing cost should ask their own insurer about both the visit and the prescription, since those are often handled under separate benefits.",
      ],
    },
    {
      heading: "How can someone find out the cost before committing?",
      paragraphs: [
        "The free 15-minute phone consultation exists for this, and it carries no cost or obligation.",
        "It is a short introductory call rather than a full appointment — a chance to ask what testing would likely be involved, roughly what that testing runs, and which option fits. If testing makes sense as a next step, Kim can provide a lab order at no charge during that call. The lab fees themselves are still billed separately by LabCorp.",
      ],
    },
  ],

  faqs: [
    {
      question: "How much is a BHRT consultation in Utah?",
      answer:
        "At BHRT with Kim, a single visit is $200 and runs about 60 minutes. A comprehensive package covering five visits over roughly twelve months is $950 and includes four coaching sessions. A free 15-minute phone consultation is available first, at no cost and with no obligation. Medications and laboratory fees are separate from both options.",
    },
    {
      question: "Are lab costs included in the price?",
      answer:
        "No. Laboratory fees are not included in any package and are billed directly by the laboratory rather than by the practice. Costs vary depending on which panels are ordered, so no figure is published. A lab order can be provided at no charge during a consultation, but the testing itself is a separate expense paid to LabCorp.",
    },
    {
      question: "Is the first consultation really free?",
      answer:
        "Yes. The introductory phone consultation with Kim Yadon, FNP-C costs nothing and carries no obligation. It runs about 15 minutes, which is enough time to ask questions and see whether working together is a fit. It is an introductory call rather than a full appointment, and a lab order can be started during it at no charge.",
    },
    {
      question: "What is the difference between the per-visit and package pricing?",
      answer:
        "Per-visit is $200 each time, suiting someone who wants to start without a longer commitment. The $950 comprehensive package covers five visits scheduled every three months, plus two nutrition and exercise coaching sessions and two mindset coaching sessions. The package works out lower per visit and matches the follow-up rhythm hormone care usually needs.",
    },
    {
      question: "Do prices differ depending on where in Utah someone lives?",
      answer:
        "No. All visits are virtual, so pricing is identical across Utah — whether someone is in Salt Lake County, Utah County, or a rural part of the state. The only cost that varies by location is laboratory testing, which is billed by LabCorp and can differ slightly between patient service centers.",
    },
    {
      question: "How often would someone pay for a follow-up?",
      answer:
        "Follow-up visits are typically every three months, or sooner if something needs attention earlier. That cadence allows enough time to repeat lab work and see how a plan is working before adjusting it. The comprehensive package is built around this schedule, covering five visits across roughly a year.",
    },
  ],

  related: [
    { label: "Services & pricing", href: "/services" },
    { label: "All FAQs", href: "/faq" },
    { label: "Meet Kim", href: "/about" },
  ],
};
