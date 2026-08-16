import type { GeoPage } from "../types";

/**
 * Highest search volume of the five, weakest map-pack realism — Salt Lake City
 * sits well away from the South Jordan proximity anchor, so this page competes
 * organically or not at all. See docs/02-KEYWORD-MAP.md.
 *
 * Its distinct job: Salt Lake City is the one market in the state with plenty
 * of in-person alternatives, so the honest page is a comparison rather than a
 * pitch. Someone who needs hands-on care should be told that here.
 */
export const saltLakeCity: GeoPage = {
  slug: "service-areas/salt-lake-city",
  city: "Salt Lake City",
  county: "Salt Lake County",
  titleSegment: "BHRT in Salt Lake City",
  description:
    "Bioidentical hormone therapy for women in Salt Lake City. Virtual visits with Kim Yadon, FNP-C, and an honest comparison with in-person clinics.",
  h1: "Bioidentical Hormone Therapy in Salt Lake City",
  hubBlurb:
    "The one market with real in-person alternatives — so this page compares virtual care with them rather than assuming it wins.",
  intro:
    "Kim Yadon, FNP-C provides bioidentical hormone replacement therapy to women in Salt Lake City through virtual consultations. Salt Lake City has more in-person hormone and women's health options than anywhere else in Utah, so the useful question is not whether care is available but which format fits. Virtual visits suit people who want scheduling flexibility and published pricing; anyone who needs a hands-on physical examination is better served in person, and that is worth saying before booking rather than after.",

  sections: [
    {
      heading: "Is virtual hormone care a good fit in a city with clinics?",
      paragraphs: [
        "It depends on what someone is looking for, and the honest answer is that it is not the right format for everyone.",
        "A hormone evaluation is built on two things: a detailed history and laboratory testing. Neither requires being in the same room, which is why this care translates well to a video or phone visit. What does not translate is a physical examination, and there are legitimate reasons to want one — a pelvic exam, a breast exam, or anything that needs to be looked at directly. Those belong with an in-person clinician, and a virtual hormone consultation does not replace them.",
      ],
    },
    {
      heading: "What does virtual care change day to day?",
      paragraphs: [
        "It removes the parts of an appointment that have nothing to do with the appointment.",
        "Downtown parking, the drive in from the Avenues or Sugar House, sitting in a waiting room past the scheduled time, and taking a half day off work for a conversation that takes an hour — none of that applies. Appointments happen at a set time from wherever someone happens to be. For a condition that involves several visits across a year rather than one, that difference compounds.",
      ],
      bullets: [
        "No commute, no parking, no waiting room",
        "A full 60-minute initial consultation, longer than many in-person slots",
        "Prices published up front rather than quoted after the visit",
        "Lab work at whichever LabCorp location is closest",
        "Prescriptions filled at any compounding pharmacy the patient chooses",
      ],
    },
    {
      heading: "Can someone keep their existing primary care doctor?",
      paragraphs: [
        "Yes, and most people should.",
        "Hormone care through this practice is focused rather than comprehensive — it addresses hormone and thyroid concerns and the lifestyle factors around them. It is not a replacement for a primary care relationship, for gynecological care, or for the screening that goes with both. Patients commonly keep the clinicians they already have and add a provider who works specifically in this area. Sharing lab results and treatment details with an existing physician is straightforward and generally a good idea.",
      ],
    },
    {
      heading: "Where do Salt Lake City patients get lab work done?",
      paragraphs: [
        "Lab testing runs through LabCorp, at whichever patient service center the patient prefers.",
        "The process is the same regardless of city: the lab order arrives by email, the patient schedules with LabCorp, and the draw happens at a LabCorp location. Lab fees are billed by the laboratory, not the practice, and they vary depending on which panels are ordered. No dollar figure is published for that reason.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        "The introductory phone consultation is free and runs about 15 minutes. A full initial consultation is $200 for about 60 minutes, and a comprehensive package covering five visits over roughly a year is $950.",
        "Coaching sessions are $75 each as an add-on. Medications and lab fees are not included in any option. Published pricing is deliberate — cost is the most common question before booking, and quoting it only after a consultation makes comparison harder than it needs to be.",
      ],
    },
  ],

  faqs: [
    {
      question: "Why choose a virtual provider over a Salt Lake City clinic?",
      answer:
        "Mainly scheduling and transparency. A hormone evaluation rests on history and lab work, so it translates well to a video visit, and the initial appointment runs a full 60 minutes with pricing published in advance. Anyone who needs a physical examination should be seen in person for that, and virtual care does not replace it.",
    },
    {
      question: "Can a virtual provider order the same lab tests?",
      answer:
        "Yes. Lab orders go through LabCorp, and the patient schedules the draw at a patient service center of their choosing. The testing itself is identical to what an in-person clinician would order — hormone panels and thyroid function. Results are reviewed together at the follow-up consultation rather than sent without explanation.",
    },
    {
      question: "Does this replace an OB-GYN or primary care doctor?",
      answer:
        "No. This practice focuses on hormone and thyroid concerns and the lifestyle factors around them. It does not replace primary care, gynecological care, or routine screening. Most patients keep the clinicians they already see and add a provider who works specifically in hormone care.",
    },
    {
      question: "What if an in-person examination turns out to be needed?",
      answer:
        "Anything requiring a physical examination gets referred to an in-person clinician. A virtual consultation is not the right setting for it, and a provider who suggests otherwise is overreaching. Salt Lake City has substantial in-person options, which makes this straightforward to arrange.",
    },
    {
      question: "How long does the whole process take to get started?",
      answer:
        "The free 15-minute phone call can be booked directly online. If testing makes sense, a lab order can be provided at no charge on that call, and the patient schedules the LabCorp draw themselves. The paid initial consultation follows once results are available. Turnaround depends on which panels were ordered.",
    },
    {
      question: "Is Kim licensed to see patients in Salt Lake City?",
      answer:
        "Yes. Kim Yadon, FNP-C is a board-certified family nurse practitioner licensed in Utah, which covers patients anywhere in the state including Salt Lake City. Licensure is state-level rather than city-level, so no separate credential is involved. Utah licenses can be verified publicly through the Division of Professional Licensing.",
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
    { label: "How to choose a hormone provider", href: "/find-a-hormone-provider" },
    { label: "BHRT vs traditional HRT", href: "/bhrt-vs-hrt" },
    { label: "Menopause brain fog", href: "/symptoms/brain-fog-memory" },
    { label: "BHRT in South Jordan", href: "/service-areas/south-jordan" },
  ],
};
