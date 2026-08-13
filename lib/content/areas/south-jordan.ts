import type { GeoPage } from "../types";

/**
 * The anchor page. South Jordan is where the practice is based and the only
 * city where map-pack ranking is genuinely realistic.
 *
 * Its distinct job among the five: answer "she's local to me — is there an
 * office I can walk into?" The honest answer is no, and saying so plainly up
 * front is better than letting someone discover it after booking.
 */
export const southJordan: GeoPage = {
  slug: "service-areas/south-jordan",
  city: "South Jordan",
  county: "Salt Lake County",
  titleSegment: "BHRT in South Jordan",
  description:
    "Bioidentical hormone therapy for women in South Jordan, Utah. Kim Yadon, FNP-C is based in South Jordan and sees patients by virtual visit statewide.",
  h1: "Bioidentical Hormone Therapy in South Jordan, Utah",
  hubBlurb:
    "Where the practice is based. Southwest Salt Lake Valley — and still a virtual visit, not an office appointment.",
  intro:
    "BHRT with Kim is based in South Jordan, Utah. Kim Yadon, FNP-C is a board-certified family nurse practitioner who provides bioidentical hormone replacement therapy to women throughout Utah, and every visit is virtual — a scheduled phone or video call rather than a trip to a clinic. There is no waiting room in South Jordan to walk into. The one in-person step is lab work, which runs through LabCorp at whichever patient service center is most convenient.",

  sections: [
    {
      heading: "Is there a hormone clinic in South Jordan to visit?",
      paragraphs: [
        "No. The practice is based in South Jordan but does not operate a walk-in office, and there is no address to visit for an appointment.",
        "This is worth stating plainly, because searching for a service and a city name usually turns up buildings. Consultations here happen by phone or video at a scheduled time. For most people that is the point rather than a compromise — an appointment can happen from a kitchen table in Daybreak or from a parked car between errands, without the drive, the parking, or the half day off work that an in-person visit usually costs.",
      ],
    },
    {
      heading: "What does being based in South Jordan actually change?",
      paragraphs: [
        "It means care comes from a Utah-licensed provider working in Utah, not from a national telehealth platform routing patients to whichever clinician happens to be available.",
        "Kim is licensed by the state of Utah and sees Utah patients. The practical differences show up in small ways: familiarity with where Utah patients actually get blood drawn, and prescriptions sent to a compounding pharmacy the patient chooses rather than one the practice owns. Many national hormone companies fill every prescription through a pharmacy they have a financial relationship with. That is a real distinction and it is worth asking any provider about.",
        "Anyone comparing options can verify a Utah license directly through the Utah Division of Professional Licensing, and that is a reasonable thing to do before booking with anyone.",
      ],
    },
    {
      heading: "How does a first appointment work?",
      paragraphs: [
        "It starts with a free phone consultation of about 15 minutes.",
        "That first call is short by design. It is a chance to ask questions, describe what has been going on, and find out whether working together makes sense — and Kim can provide a lab order at no charge if testing is the sensible next step. It is not a full evaluation and no treatment plan is delivered on that call. The full initial consultation is a separate appointment, about 60 minutes, at $200.",
      ],
    },
    {
      heading: "Where do South Jordan patients get lab work done?",
      paragraphs: [
        "Lab work runs through LabCorp, and the patient picks the location that suits them.",
        "After the order is placed, an email arrives with the details, the patient schedules with LabCorp directly, and the draw happens at a LabCorp patient service center. LabCorp operates locations across the Salt Lake Valley, so this is generally a short errand rather than a project. Lab fees are billed by the laboratory, not by the practice, and they vary depending on which panels are ordered.",
      ],
    },
    {
      heading: "What does hormone care cost here?",
      paragraphs: [
        "The introductory phone consultation is free. A full initial consultation is $200, and a comprehensive package of five visits across roughly a year is $1,500.",
        "Health and mindset coaching is available as an add-on at $75 per session. Medications and lab fees are not included in any option and are billed separately. Follow-up visits are typically every 3 months, or sooner if needed.",
      ],
    },
  ],

  faqs: [
    {
      question: "Does Kim have an office in South Jordan?",
      answer:
        "No. The practice is based in South Jordan, but all consultations are virtual and there is no clinic address to visit. Appointments happen by scheduled phone or video call. The only in-person step in the whole process is having blood drawn, which happens at a LabCorp patient service center the patient chooses.",
    },
    {
      question: "Can someone outside South Jordan still book?",
      answer:
        "Yes. Kim Yadon, FNP-C is licensed in Utah and sees patients anywhere in the state. Because visits are virtual, the distance between a patient and South Jordan makes no practical difference to scheduling or to care. Residency in Utah is what matters, not proximity to any particular city.",
    },
    {
      question: "Is virtual hormone care as thorough as an in-person visit?",
      answer:
        "A hormone evaluation rests on history and laboratory testing rather than a physical exam, and both happen the same way regardless of format. The initial consultation runs about 60 minutes, which is longer than many in-person appointments. Anyone who needs a hands-on examination should be seen in person for that part of their care.",
    },
    {
      question: "How soon after labs is the follow-up?",
      answer:
        "Follow-up happens once results are back from the laboratory, and turnaround depends on which panels were ordered. After treatment begins, visits are typically every 3 months, or sooner if something needs attention. The comprehensive package is built around that cadence, covering five visits across roughly a year.",
    },
    {
      question: "Which pharmacy fills the prescription?",
      answer:
        "Any compounding pharmacy the patient chooses, when a prescription is appropriate. Patients are not tied to a pharmacy selected by the practice. This differs from many national hormone services, which fill every prescription through a pharmacy they own or have a financial arrangement with.",
    },
    {
      question: "How is a Utah nurse practitioner license verified?",
      answer:
        "The Utah Division of Professional Licensing maintains public license records, and anyone can look up a provider before booking. Checking a license is a reasonable step with any hormone provider, particularly online services where the prescribing clinician is not named clearly on the website.",
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
    { label: "Hot flashes and night sweats", href: "/symptoms/hot-flashes-night-sweats" },
    { label: "What BHRT costs in Utah", href: "/bhrt-cost-utah" },
    { label: "Choosing a hormone provider", href: "/find-a-hormone-provider" },
    { label: "All service areas", href: "/service-areas" },
  ],
};
