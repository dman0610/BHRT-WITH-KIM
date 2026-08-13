import type { GeoPage } from "../types";

/**
 * Draper sits at the south end of Salt Lake County at Point of the Mountain,
 * where a large share of residents commute across a county line every day.
 *
 * Its distinct job: the time cost of care. This is the page that lays out what
 * a year of hormone care actually asks of a calendar — how many appointments,
 * how long each one runs — because that is the real objection for someone
 * whose day already includes two trips through the Point.
 */
export const draper: GeoPage = {
  slug: "service-areas/draper",
  city: "Draper",
  county: "Salt Lake County",
  titleSegment: "BHRT in Draper",
  description:
    "Bioidentical hormone therapy for women in Draper, Utah. Virtual visits with Kim Yadon, FNP-C fit around a commute — no drive, no waiting room.",
  h1: "Bioidentical Hormone Therapy in Draper, Utah",
  hubBlurb:
    "For commuters at Point of the Mountain — what a year of hormone care actually asks of a calendar.",
  intro:
    "Kim Yadon, FNP-C provides bioidentical hormone replacement therapy to women in Draper through virtual consultations. Draper sits at the south end of Salt Lake County at Point of the Mountain, and a lot of people who live there work on the other side of it. Because every visit is a scheduled phone or video call rather than a clinic appointment, hormone care does not add a third trip through that corridor. The only in-person step in the entire process is a blood draw at a LabCorp location.",

  sections: [
    {
      heading: "How much time does hormone care actually take?",
      paragraphs: [
        "Across a first year, it is roughly five appointments — not an ongoing commitment of weekly visits.",
        "The sequence is straightforward. A free phone consultation of about 15 minutes comes first. If testing makes sense, a lab order can be provided at no charge, and the patient schedules their own draw with LabCorp. A full initial consultation follows once results are back, running about 60 minutes at $200. After that, follow-up visits are typically every 3 months, or sooner if something needs attention.",
        "Nothing in that sequence requires a drive except the lab visit. For someone already spending an hour a day in traffic, that is the difference between care that fits and care that keeps getting postponed.",
      ],
    },
    {
      heading: "Does the appointment have to be on video?",
      paragraphs: [
        "The introductory consultation is a phone call, which means it does not require sitting in front of a camera.",
        "That matters more than it sounds. A 15-minute call can happen from a parked car, a quiet office, or a kitchen at the end of the day. It is a short conversation by design — a chance to ask questions, describe what has been going on, and work out whether this is a fit. It is not a full evaluation, and no treatment plan comes out of it.",
      ],
    },
    {
      heading: "Does living on the Salt Lake County side matter?",
      paragraphs: [
        "No. Kim is licensed by the state of Utah, so eligibility is a matter of being in Utah rather than being in any particular county.",
        "Draper straddles a boundary that matters for schools, taxes, and commutes, and matters not at all here. The same is true of the distance to South Jordan, where the practice is based. Because visits are virtual, proximity affects nothing about scheduling, cost, or care. What licensure does track is where the patient is located at the time of a visit, which is why appointments are for patients in Utah.",
      ],
    },
    {
      heading: "Where do Draper patients get lab work done?",
      paragraphs: [
        "At a LabCorp patient service center of their own choosing.",
        "The lab order arrives by email, the patient books directly with LabCorp, and the draw happens at whichever location works — near home, near the office, or somewhere along the route between them. Lab fees are billed by the laboratory rather than by the practice and vary depending on which panels are ordered, which is why no figure is published for them.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        "The introductory phone consultation is free. A full initial consultation is $200 for about 60 minutes, and a comprehensive package covering five visits over roughly a year is $1,500.",
        "Coaching sessions are available as an add-on at $75 each. Medications and lab fees are not included in any option and are billed separately.",
      ],
    },
  ],

  faqs: [
    {
      question: "How many appointments does a first year involve?",
      answer:
        "About five. A free 15-minute phone consultation, a 60-minute initial consultation once lab results are back, and follow-up visits typically every 3 months after that. The comprehensive package is built around exactly that cadence — five visits across roughly a year for $1,500.",
    },
    {
      question: "What times are appointments available?",
      answer:
        "Live availability appears in the online booking calendar rather than as published office hours, so what is shown is what is actually open. Booking is self-service, which means an appointment can be scheduled without a phone call or a wait for someone to return a message.",
    },
    {
      question: "Can an appointment happen during a work break?",
      answer:
        "The introductory consultation runs about 15 minutes by phone, which fits most breaks. The paid initial consultation is a full hour and deserves a quieter setting, since it covers history, symptoms, and lab results in detail. Follow-up visits are shorter than the initial appointment.",
    },
    {
      question: "What if a patient travels out of state?",
      answer:
        "Licensure follows the patient's location at the time of the visit, so appointments are scheduled for patients who are in Utah. Someone traveling would reschedule for a date they are back. This is standard for telehealth generally and is not specific to this practice.",
    },
    {
      question: "Is the lab draw the only in-person step?",
      answer:
        "Yes. Consultations happen by phone or video, prescriptions go to a compounding pharmacy of the patient's choosing, and follow-ups are virtual. The blood draw at a LabCorp patient service center is the only part of the process that requires being somewhere in person.",
    },
    {
      question: "Does the practice serve Utah County residents too?",
      answer:
        "Yes. Kim Yadon, FNP-C is licensed in Utah and sees patients across the state, including Utah County. For anyone on the south side of Point of the Mountain, the Lehi service area page covers the same ground from that direction.",
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
    { label: "Menopause fatigue and low energy", href: "/symptoms/menopause-fatigue" },
    { label: "Sleep and insomnia", href: "/symptoms/sleep-insomnia" },
    { label: "What BHRT costs in Utah", href: "/bhrt-cost-utah" },
    { label: "BHRT in Lehi", href: "/service-areas/lehi" },
  ],
};
