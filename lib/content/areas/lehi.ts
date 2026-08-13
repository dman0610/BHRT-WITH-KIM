import type { GeoPage } from "../types";

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
  titleSegment: "BHRT in Lehi",
  description:
    "Bioidentical hormone therapy for women in Lehi and across Utah County. Kim Yadon, FNP-C is licensed statewide and sees patients by virtual visit.",
  h1: "Bioidentical Hormone Therapy in Lehi, Utah",
  hubBlurb:
    "The Utah County anchor. Why the county line is irrelevant, and why patients choose their own compounding pharmacy.",
  intro:
    "Kim Yadon, FNP-C provides bioidentical hormone replacement therapy to women in Lehi and across Utah County through virtual consultations. The practice is based in South Jordan, on the other side of Point of the Mountain, and that makes no practical difference: licensure in Utah is statewide, and every visit is a scheduled phone or video call. Lab work happens at a LabCorp location the patient chooses, and prescriptions are filled at any compounding pharmacy the patient chooses.",

  sections: [
    {
      heading: "Does a Salt Lake County provider serve Utah County?",
      paragraphs: [
        "Yes. Nurse practitioner licensure in Utah is issued by the state, not by a county, so a Utah-licensed provider can see patients anywhere in Utah.",
        "The county line matters for schools, for local government, and for the drive at 5pm. It does not affect eligibility for care, scheduling, or price. Because visits are virtual, someone in Lehi has exactly the same access as someone two streets from where the practice is based — and does not spend forty minutes in the Point of the Mountain corridor to get it.",
      ],
    },
    {
      heading: "Where do Lehi patients get lab work done?",
      paragraphs: [
        "At a LabCorp patient service center of their choosing, and LabCorp operates locations in Utah County as well as the Salt Lake Valley.",
        "The process is the same statewide: the lab order arrives by email, the patient schedules the appointment with LabCorp directly, and the draw happens at whichever location suits. This is the only in-person step in the entire process. Lab fees are billed by the laboratory rather than the practice and vary depending on which panels are ordered, which is why no dollar figure is published for them.",
      ],
    },
    {
      heading: "Which pharmacy fills the prescription?",
      paragraphs: [
        "Any compounding pharmacy the patient chooses, when a prescription is appropriate.",
        "This is a bigger deal than it sounds. Many national telehealth hormone companies route every prescription through a pharmacy they own or have a financial relationship with, which means the entity recommending treatment also profits from dispensing it. Here the patient picks the pharmacy — including one nearby in Utah County if that is easier than driving north.",
        "A compounding pharmacy prepares a medication to a specific prescription rather than dispensing a pre-manufactured product. Worth knowing: not all bioidentical hormones are compounded, and several bioidentical formulations are available as FDA-approved products. The difference between the two is covered in more detail on the BHRT and traditional HRT comparison.",
      ],
    },
    {
      heading: "What does a first appointment involve?",
      paragraphs: [
        "A free phone consultation of about 15 minutes, booked directly online.",
        "It is a short conversation to ask questions, describe what has been going on, and work out whether this is a fit — and Kim can provide a lab order at no charge if testing is the sensible next step. No treatment plan comes out of that call. The full initial consultation is a separate, longer appointment, about 60 minutes at $200, scheduled once results are back. Follow-up visits after that are typically every 3 months, or sooner if needed.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        "The introductory phone consultation is free. A full initial consultation is $200 for about 60 minutes, and a comprehensive package covering five visits over roughly a year is $1,500.",
        "Health and mindset coaching is available as an add-on at $75 per session. Medications and lab fees are not included in any option and are billed separately.",
      ],
    },
  ],

  faqs: [
    {
      question: "Can a Utah County resident book with a provider in Salt Lake County?",
      answer:
        "Yes. Nurse practitioner licensure in Utah is issued at state level, so a Utah-licensed provider sees patients anywhere in the state. Because consultations are virtual, the physical distance between Lehi and South Jordan has no effect on scheduling, cost, or the care itself.",
    },
    {
      question: "Are there LabCorp locations in Utah County?",
      answer:
        "LabCorp operates patient service centers across Utah, including Utah County. After a lab order is placed, the patient receives an email and schedules the draw with LabCorp directly, choosing whichever location is most convenient. LabCorp's own location finder lists current sites and available appointment times.",
    },
    {
      question: "What is a compounding pharmacy?",
      answer:
        "A pharmacy that prepares a medication to fit a specific prescription rather than dispensing a pre-manufactured product. Patients here choose their own, including one local to Utah County. Not all bioidentical hormones are compounded — several bioidentical formulations are available as FDA-approved manufactured products.",
    },
    {
      question: "Does the practice have a financial stake in the pharmacy?",
      answer:
        "No. The patient selects the compounding pharmacy. This differs from many national hormone services, where prescriptions are filled through a pharmacy the company owns or has an arrangement with. It is a fair question to ask any hormone provider before starting treatment, online or in person.",
    },
    {
      question: "Are other Utah County cities served?",
      answer:
        "Yes. Kim Yadon, FNP-C sees patients throughout Utah, which includes American Fork, Alpine, Highland, Saratoga Springs, Eagle Mountain, Pleasant Grove, Orem, and Provo. Service area pages exist for a handful of cities, but the absence of a page for a city does not mean the city is outside the service area.",
    },
    {
      question: "Is a drive to Salt Lake County ever required?",
      answer:
        "No. Consultations are by phone or video, prescriptions go to a pharmacy of the patient's choosing, and follow-ups are virtual. The only in-person step is the blood draw, which happens at a LabCorp patient service center the patient picks — including locations in Utah County.",
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
