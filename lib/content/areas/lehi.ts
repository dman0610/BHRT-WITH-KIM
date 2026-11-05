import type { GeoPage } from "../types";
import { OFFERINGS, SITE, usd } from "@/lib/site";

/**
 * The Utah County anchor. Chosen over Provo and Orem deliberately — those
 * markets skew young because of BYU, which is the wrong demographic for
 * perimenopause content. See docs/02-KEYWORD-MAP.md.
 *
 * Its distinct job: the county-line question ("does a Salt Lake County
 * provider cover me?") and the pharmacy question, which is where this practice
 * differs most sharply from national telehealth hormone companies.
 */
export const lehi: GeoPage = {
  slug: "service-areas/lehi",
  city: "Lehi",
  county: "Utah County",
  titleSegment: "BHRT in Lehi, Utah — Virtual Care",
  description:
    "Bioidentical hormone therapy for women in Lehi and across Utah County. Kim Yadon, FNP-C is licensed statewide and sees patients by virtual visit.",
  h1: "Bioidentical Hormone Therapy in Lehi, Utah",
  hubBlurb:
    "The Utah County anchor. Why the county line is irrelevant, and why patients choose their own compounding pharmacy.",
  intro:
    "Kim Yadon, FNP-C provides bioidentical hormone replacement therapy to women in Lehi and across Utah County through virtual consultations. The practice is based in South Jordan, on the other side of Point of the Mountain, and for patients that makes no practical difference: Utah licensure is statewide, and every visit is a scheduled phone or video call. Lab work is done at a LabCorp location the patient chooses, and prescriptions are filled at any compounding pharmacy the patient chooses.",

  sections: [
    {
      heading: "Does a Salt Lake County provider serve Utah County?",
      paragraphs: [
        "Yes. Utah issues nurse practitioner licenses at the state level, not by county, so a Utah-licensed provider can see patients anywhere in the state.",
        "The county line matters for schools, local government and the drive home at 5 p.m. It does not affect eligibility, scheduling or price. Because every visit is virtual, a patient in Lehi has the same access as one two streets from the practice, without forty minutes in the Point of the Mountain corridor.",
      ],
    },
    {
      heading: "Where do Lehi patients get lab work done?",
      paragraphs: [
        "At a LabCorp patient service center of their choosing. LabCorp has locations in Utah County as well as the Salt Lake Valley.",
        `The process is the same across the state. The lab order arrives by email, the patient books directly with LabCorp, and the blood is drawn at whichever location is convenient. It is the only in-person step. ${SITE.labDisclosure}`,
      ],
    },
    {
      heading: "Which pharmacy fills the prescription?",
      paragraphs: [
        "Any compounding pharmacy the patient chooses, when a prescription is appropriate.",
        "That matters more than it might seem. Many national telehealth hormone companies send every prescription to a pharmacy they own or have a financial arrangement with, so the company recommending treatment also profits from dispensing it. Here the patient picks the pharmacy, including one in Utah County if that is easier than driving north.",
        "A compounding pharmacy prepares a medication to an individual prescription instead of dispensing a manufactured product. Not every bioidentical hormone is compounded; several are available as FDA-approved products. The comparison of BHRT and traditional HRT covers the difference in detail.",
      ],
    },
    {
      heading: "What does a first appointment involve?",
      paragraphs: [
        "A free phone consultation of about 15 minutes, booked online.",
        `The call is a chance to ask questions, describe what has been happening, and decide whether to work together. Kim can provide a lab order at no charge if testing is the sensible next step. No treatment plan comes out of that call. The full initial visit is a separate appointment of about 60 minutes, scheduled once results are back as the first half of the ${OFFERINGS.newPatient.label}. Follow-up visits are typically every 3 months, or sooner if needed.`,
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        `The introductory phone consultation is free. The ${OFFERINGS.newPatient.label} costs ${usd(OFFERINGS.newPatient.price ?? 0)} and includes both the initial visit and a follow-up about 12 weeks later, with portal messaging in between.`,
        `Follow-up visits after the package are ${usd(OFFERINGS.followUp.price ?? 0)} each. Medications and lab fees are not included in any option and are billed separately.`,
      ],
    },
  ],

  faqs: [
    {
      question: "Can a Utah County resident book with a provider in Salt Lake County?",
      answer:
        "Yes. Utah issues nurse practitioner licenses at the state level, so a Utah-licensed provider can see patients anywhere in the state. Because consultations are virtual, the distance between Lehi and South Jordan has no effect on scheduling, cost or the care itself.",
    },
    {
      question: "Are there LabCorp locations in Utah County?",
      answer:
        "LabCorp operates patient service centers across Utah, including Utah County. Once a lab order is placed, the patient receives an email and books the draw with LabCorp directly, at whichever location is most convenient. LabCorp's location finder lists current sites and open appointment times.",
    },
    {
      question: "What is a compounding pharmacy?",
      answer:
        "A pharmacy that prepares a medication to fit an individual prescription instead of dispensing a manufactured product. Patients of this practice choose their own, including one in Utah County. Not all bioidentical hormones are compounded; several bioidentical formulations are sold as FDA-approved manufactured products.",
    },
    {
      question: "Does the practice have a financial stake in the pharmacy?",
      answer:
        "No. The patient chooses the compounding pharmacy. Many national hormone services work differently, filling prescriptions through a pharmacy the company owns or has an arrangement with. It is a fair question to put to any hormone provider before starting treatment, whether online or in person.",
    },
    {
      question: "Are other Utah County cities served?",
      answer:
        "Yes. Kim Yadon, FNP-C sees patients throughout Utah, including American Fork, Alpine, Highland, Saratoga Springs, Eagle Mountain, Pleasant Grove, Orem and Provo. The site has pages for a handful of cities, but a city without a page is still inside the service area.",
    },
    {
      question: "Is a drive to Salt Lake County ever required?",
      answer:
        "No. Consultations are by phone or video, prescriptions go to a pharmacy the patient chooses, and follow-ups are virtual. The only in-person step is the blood draw, at a LabCorp patient service center the patient picks, including locations in Utah County.",
    },
  ],

  sources: [
    {
      label: "LabCorp — find a patient service center",
      url: "https://www.labcorp.com/labs-and-appointments",
    },
    {
      label: "Utah Division of Professional Licensing — verify a provider license",
      url: "https://dopl.utah.gov/",
    },
  ],

  breadcrumb: [{ name: "Service Areas", path: "/service-areas" }],

  related: [
    { label: "BHRT vs traditional HRT", href: "/bhrt-vs-hrt" },
    { label: "Low libido and hormones", href: "/symptoms/low-libido" },
    { label: "What BHRT costs in Utah", href: "/bhrt-cost-utah" },
    { label: "BHRT in Draper", href: "/service-areas/draper" },
  ],
};
