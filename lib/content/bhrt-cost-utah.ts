import type { ContentPage } from "./types";
import { COSTS, OFFERINGS, SITE, usd } from "@/lib/site";

/**
 * What care costs — the page that owns cost queries.
 *
 * Rewritten 2026-11-05 for Kim's new structure (free call → New Patient
 * Package → flat-rate follow-ups) and for the lab and medication estimates she
 * supplied the same day, which reverse the earlier rule of publishing no lab
 * figure. Every number is read from lib/site.ts, so a price change is a
 * one-line edit there rather than a hunt through prose.
 */

const free = OFFERINGS.freeConsult;
const pkg = OFFERINGS.newPatient;
const fu = OFFERINGS.followUp;
const pkgPrice = usd(pkg.price ?? 0);
const fuPrice = usd(fu.price ?? 0);
const labs = `${usd(COSTS.labs.low)} to ${usd(COSTS.labs.high)}`;

/**
 * A first year at the usual cadence: the package (initial visit + 12-week
 * follow-up), then follow-ups every three months — weeks 24, 36 and 48. Pure
 * arithmetic on published figures, and stated as "typical", never promised.
 */
const firstYear = usd((pkg.price ?? 0) + 3 * (fu.price ?? 0));

const meds = COSTS.medications.items
  .map((m) => `${m.name}, about ${usd(m.estimate)}`)
  .join("; ");

export const bhrtCostUtah: ContentPage = {
  slug: "bhrt-cost-utah",
  titleSegment: "What BHRT Costs in Utah",
  description: `What BHRT costs with Kim Yadon, FNP-C in Utah: a free call, a ${pkgPrice} New Patient Package for two visits, ${fuPrice} follow-ups, labs and medications.`,
  h1: "What Does Bioidentical Hormone Therapy Cost in Utah?",
  intro: `At BHRT with Kim, care starts with a free ${free.durationMinutes}-minute phone call. The ${pkg.label} is ${pkgPrice} and covers the first two visits, and each follow-up after that is ${fuPrice}. Lab work, which typically runs ${labs}, and any medications are billed separately by the lab and the pharmacy.`,

  sections: [
    {
      heading: "What are the actual prices?",
      paragraphs: [
        `Every fee is published, and there are three of them.`,
        `The first two visits are sold together because hormone care depends on follow-through: the initial visit sets a plan, and the follow-up about 12 weeks later is where results and labs are reviewed and the plan is adjusted. Pricing them as one package removes the decision about whether to come back.`,
      ],
      bullets: [
        `${free.label}: free, about ${free.durationMinutes} minutes by phone`,
        `${pkg.label}: ${pkgPrice} for a ${pkg.durationMinutes}-minute initial visit, a follow-up about 12 weeks later, and messaging through the secure patient portal between them`,
        `${fu.label}s after that: ${fuPrice} each, typically ${SITE.process.followUpCadence}`,
      ],
    },
    {
      heading: "What does a typical first year cost?",
      paragraphs: [
        `At the usual cadence, a first year of visit fees comes to about ${firstYear}: the ${pkg.label} at ${pkgPrice}, then three follow-ups at ${fuPrice} each.`,
        `That figure covers visits only. Labs and medications are added on top, and the number of follow-ups can be higher or lower depending on how a plan is going. Some people need an earlier check-in; the cadence is a guide, not a contract.`,
      ],
    },
    {
      heading: "What do labs and medications cost?",
      paragraphs: [
        `Labs typically cost ${labs}, depending on the lab and the tests ordered. Testing runs through ${SITE.process.labProvider}, which bills the patient directly; the practice does not charge for lab work or mark it up.`,
        `Medication costs depend on what is prescribed and at what dose, and only apply if a prescription is part of the plan. Most are prepared by a compounding pharmacy, and prescriptions can be filled at ${SITE.process.pharmacy}. Estimated ${COSTS.medications.supplyDays}-day costs: ${meds}. ${COSTS.medications.note}`,
        "Because the practice does not sell labs or medications, there is no financial reason to order more testing or prescribe more than a situation warrants.",
      ],
    },
    {
      heading: "Why does BHRT usually cost more than a regular office visit?",
      paragraphs: [
        "Hormone visits run longer and involve more testing than a standard primary care appointment, which accounts for most of the difference.",
        `The initial visit here is about ${pkg.durationMinutes} minutes. It covers a full history, current symptoms and goals, and a care plan, compared with the ten to fifteen minutes a typical primary care slot allows. Hormone panels also cost more than routine bloodwork, since they cover thyroid function alongside sex hormones.`,
      ],
    },
    {
      heading: "Is bioidentical hormone therapy covered by insurance?",
      paragraphs: [
        `Not at this practice. ${SITE.contact.insurance} Visits are paid for directly, at the published prices.`,
        "Insurance coverage for hormone therapy elsewhere varies by plan and by medication, and compounded preparations are often treated differently from commercially manufactured ones. Some patients pay visit and pharmacy costs from a health savings or flexible spending account; the plan administrator is the one to confirm eligibility.",
      ],
    },
    {
      heading: "How can someone find out the cost before committing?",
      paragraphs: [
        `The free ${free.durationMinutes}-minute phone consultation is the place to ask, and it carries no cost or obligation.`,
        `The call is a short introduction, not a full appointment: time to ask which tests are likely and which plan fits. If testing makes sense, Kim can provide a lab order at no charge on that call. The lab fees themselves are still billed separately by ${SITE.process.labProvider}.`,
      ],
    },
  ],

  faqs: [
    {
      question: "How much is a BHRT consultation in Utah?",
      answer: `At BHRT with Kim, the first phone call is free and lasts about ${free.durationMinutes} minutes. Care then begins with the ${pkg.label}: ${pkgPrice} for a ${pkg.durationMinutes}-minute initial visit and a follow-up about 12 weeks later, with portal messaging in between. Follow-up visits after that are ${fuPrice} each. Medications and laboratory fees are billed separately by the pharmacy and the lab.`,
    },
    {
      question: "Are lab costs included in the price?",
      answer: `No. Laboratory fees are billed directly by the laboratory, not by the practice, and typically run ${labs} depending on the tests ordered. A lab order can be provided at no charge during a consultation, but the testing itself is a separate expense paid to ${SITE.process.labProvider}. No visit fee includes lab work.`,
    },
    {
      question: "Is the first consultation really free?",
      answer: `Yes. The introductory phone consultation with Kim Yadon, FNP-C costs nothing and carries no obligation. It runs about ${free.durationMinutes} minutes, which is enough time to ask questions and see whether working together is a fit. It is an introductory call rather than a full appointment, and a lab order can be started during it at no charge.`,
    },
    {
      question: "Why are the first two visits sold as a package?",
      answer: `Because hormone care depends on follow-through. The initial visit sets a plan, and the follow-up about 12 weeks later is where labs and results are reviewed and the plan is adjusted. Packaging both for ${pkgPrice} means the second visit is already in place, and portal messaging covers questions in between.`,
    },
    {
      question: "Do prices differ depending on where in Utah someone lives?",
      answer: `No. All visits are virtual, so pricing is identical across Utah, whether someone is in Salt Lake County, Utah County, or a rural part of the state. The only cost that varies by location is laboratory testing, which is billed by ${SITE.process.labProvider} and can differ slightly between patient service centers.`,
    },
    {
      question: "How often would someone pay for a follow-up?",
      answer: `Follow-up visits are typically ${SITE.process.followUpCadence}, at ${fuPrice} each. The first follow-up is already part of the ${pkg.label}. That cadence leaves enough time to repeat lab work and see how a plan is working before adjusting it, which is why a typical first year comes to about ${firstYear} in visit fees.`,
    },
  ],

  related: [
    { label: "Services & pricing", href: "/services" },
    { label: "All FAQs", href: "/faq" },
    { label: "Meet Kim", href: "/about" },
  ],
};
