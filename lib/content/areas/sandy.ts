import type { GeoPage } from "../types";

/**
 * Sandy — east-side Salt Lake County, close enough to the South Jordan anchor
 * for real proximity weight.
 *
 * Its distinct job: preparation and discretion. This is the page that answers
 * "what do I bring to a first call, and does anyone have to know I went?" —
 * questions the other four don't cover.
 *
 * Deliberately avoids technical privacy claims about any vendor platform. The
 * privacy point here is social (no clinic lobby), not a compliance assertion.
 */
export const sandy: GeoPage = {
  slug: "service-areas/sandy",
  city: "Sandy",
  county: "Salt Lake County",
  titleSegment: "BHRT in Sandy, Utah",
  description:
    "Bioidentical hormone therapy for women in Sandy, Utah. Virtual visits with Kim Yadon, FNP-C, plus what to have ready before a first consultation.",
  h1: "Bioidentical Hormone Therapy in Sandy, Utah",
  hubBlurb:
    "East-side Salt Lake County. What to have ready for a first call, and why a virtual visit is a quieter way to start.",
  intro:
    "Kim Yadon, FNP-C provides bioidentical hormone replacement therapy to women in Sandy through virtual consultations. Every visit is a scheduled phone or video call, which means care starts without a clinic lobby, a sign-in sheet, or an explanation to anyone about where the afternoon went. The first step is a free phone consultation of about 15 minutes, and a short amount of preparation makes that call considerably more useful.",

  sections: [
    {
      heading: "How private is a virtual consultation?",
      paragraphs: [
        "It happens wherever the patient decides to take the call, which is generally more discreet than a waiting room.",
        "Hormone symptoms are not something most women want to discuss in a shared reception area or explain to a colleague when asking for time off. A phone consultation removes that entirely. It can be taken from a home office with the door shut, from a car in a parking lot, or between school runs. What is shared during a consultation is medical information and is treated as such; how this website itself handles form submissions and email sign-ups is set out separately in the privacy policy.",
      ],
    },
    {
      heading: "What is worth having ready before the first call?",
      paragraphs: [
        "Fifteen minutes goes quickly, and a little preparation is the difference between a vague conversation and a useful one.",
        "Nothing here is required, and no one is turned away for arriving without it. But the questions Kim asks on a first call tend to be the same ones, and having the answers to hand means the time gets spent on what to do next rather than on reconstructing history.",
      ],
      bullets: [
        "A rough timeline — when symptoms started and whether they have changed",
        "Cycle history, including any recent changes in pattern",
        "A list of current medications and supplements, with doses",
        "Any hormone or thyroid lab results from the past year or two",
        "Relevant family history, particularly thyroid or hormone-related conditions",
        "The two or three questions that matter most, written down",
      ],
    },
    {
      heading: "What happens after that first conversation?",
      paragraphs: [
        "If testing makes sense, Kim can provide a lab order at no charge, and the paid evaluation happens once results are back.",
        "The free call is short and does not produce a treatment plan — that is what the full initial consultation is for, about 60 minutes at $200. Splitting it this way means no one pays for an evaluation before knowing whether the fit is right, and no one sits through a lab discussion before there are labs to discuss. Follow-up visits after that are typically every 3 months, or sooner if needed.",
      ],
    },
    {
      heading: "Where do Sandy patients get lab work done?",
      paragraphs: [
        "At a LabCorp patient service center the patient selects.",
        "The order arrives by email, the patient schedules directly with LabCorp, and the draw takes place at whichever location is convenient. LabCorp operates locations throughout the Salt Lake Valley. Lab fees are billed by the laboratory rather than the practice and vary depending on which panels are ordered, so no figure is published for them.",
      ],
    },
    {
      heading: "What does it cost?",
      paragraphs: [
        "The introductory phone consultation is free. A full initial consultation is $200 for about 60 minutes, and a comprehensive package covering five visits over roughly a year is $950.",
        "Health and mindset coaching is available as an add-on at $75 per session. Medications and lab fees are not included in any option.",
      ],
    },
  ],

  faqs: [
    {
      question: "What should someone have ready for a first consultation?",
      answer:
        "A rough timeline of symptoms, cycle history, a list of current medications and supplements with doses, and any hormone or thyroid labs from the past year or two. Writing down the two or three most important questions helps as well, since the introductory call runs about 15 minutes.",
    },
    {
      question: "Can lab results from another provider be used?",
      answer:
        "They are worth bringing to the consultation. Whether existing results are recent enough or cover the right markers is a clinical judgment made case by case, and sometimes additional testing is still needed. Either way, prior results add context that a new panel on its own would not provide.",
    },
    {
      question: "Does anyone need to know about the appointment?",
      answer:
        "A virtual consultation happens wherever the patient chooses to take it, so there is no clinic to be seen entering and no time off to account for. Information shared during a consultation is medical information. How this website handles contact forms and email sign-ups is described in the privacy policy.",
    },
    {
      question: "Is thyroid function part of a hormone evaluation?",
      answer:
        "Yes. Thyroid assessment is a standard part of a comprehensive workup here, alongside sex hormones, rather than an optional extra. Thyroid dysfunction shares several symptoms with perimenopause, including fatigue, weight change and temperature sensitivity, which makes evaluating both together considerably more informative than looking at either one alone.",
    },
    {
      question: "How long is the wait between the first call and treatment?",
      answer:
        "It depends on how quickly lab work is scheduled and how long the ordered panels take to return. The patient books the LabCorp draw themselves, so that part moves at their pace. The paid initial consultation is scheduled once results are available. No timeline is promised, because the variables differ per person.",
    },
    {
      question: "Is Sandy inside the service area?",
      answer:
        "Yes. Kim Yadon, FNP-C is licensed in Utah and sees patients anywhere in the state. The practice is based in South Jordan, but because all consultations are virtual, distance from there has no bearing on scheduling, cost, or the care itself.",
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
    { label: "Weight changes around menopause", href: "/symptoms/hormonal-weight-gain" },
    { label: "Hot flashes and night sweats", href: "/symptoms/hot-flashes-night-sweats" },
    { label: "Common questions about BHRT", href: "/faq" },
    { label: "BHRT in Salt Lake City", href: "/service-areas/salt-lake-city" },
  ],
};
