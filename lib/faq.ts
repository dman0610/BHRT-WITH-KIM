import { SITE, OFFERINGS } from "./site";

/**
 * FAQ content.
 *
 * Rules, from docs/05-CONTENT-STANDARDS.md and docs/04-AI-VISIBILITY.md:
 *
 *  - Every answer 40–80 words and SELF-CONTAINED. No "as mentioned above", no
 *    pronouns pointing outside the answer. Assume it will be read in complete
 *    isolation, because in an AI answer it will be.
 *  - Every factual claim traces to docs/00-BUSINESS-FACTS.md.
 *  - Third person about the population, not second person diagnosing the reader.
 *  - No outcome guarantees, no relief timelines, no unrecognized diagnoses.
 *
 * DELIBERATELY ABSENT — do not add without a verified source:
 *  - "How long until I feel better?" — a timeline promise, banned.
 *  - Insurance — unanswered (OPEN-QUESTIONS.md item 8).
 *  - Any lab price — Kim reports these vary by panel.
 */

export type FaqItem = { question: string; answer: string };
export type FaqCategory = { title: string; items: FaqItem[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "About bioidentical hormone therapy",
    items: [
      {
        question: "What is bioidentical hormone replacement therapy?",
        answer:
          "Bioidentical hormone replacement therapy, or BHRT, uses hormones that are structurally identical to the ones the human body produces. It is most often used to address symptoms associated with perimenopause and postmenopause. Whether it is appropriate for any individual depends on their history, symptoms, and lab work, and that determination is made by a licensed provider during an evaluation.",
      },
      {
        question:
          "What is the difference between bioidentical and synthetic hormones?",
        answer:
          "Bioidentical hormones have the same molecular structure as the hormones the body makes on its own. Synthetic hormones are structurally different, though they act on the same receptors. The distinction is chemical rather than a claim about safety or effectiveness. The Menopause Society and the Endocrine Society both publish current guidance on hormone therapy that is worth reading alongside any provider conversation.",
      },
      {
        question: "Who is bioidentical hormone therapy for?",
        answer:
          "Kim works with women in perimenopause and postmenopause — commonly those noticing changes in sleep, energy, mood, memory, weight, libido, or temperature regulation. It is not appropriate for everyone. Some medical histories make hormone therapy unsuitable, which is why an evaluation and lab work come before any prescription rather than after.",
      },
      {
        question: "What symptoms do women typically bring to a consultation?",
        answer:
          "The most commonly reported are hot flashes and night sweats, difficulty sleeping or staying asleep, persistent fatigue, brain fog and word-finding difficulty, changes in mood, weight changes, joint pain, and reduced libido. Many women also come in simply wanting to understand what is happening in their bodies before deciding whether to do anything about it.",
      },
    ],
  },
  {
    title: "Consultations and how care works",
    items: [
      {
        question: "Is the free consultation really free?",
        answer: `Yes. The free phone consultation with ${SITE.provider.fullName} costs nothing and carries no obligation. It runs about ${OFFERINGS.freeConsult.durationMinutes} minutes. If testing makes sense as a next step, a lab order can be provided at no charge as well. The laboratory fees themselves are separate and are billed by the lab, not by the practice.`,
      },
      {
        question: "How long is a consultation?",
        answer: `The free introductory phone call runs about ${OFFERINGS.freeConsult.durationMinutes} minutes — enough time to ask questions and see whether working together is a fit. The paid initial consultation is longer, about ${OFFERINGS.initial.durationMinutes} minutes, and covers full history, current symptoms, and what testing makes sense. Follow-up visits are scheduled after that.`,
      },
      {
        question: "How does lab work happen if visits are virtual?",
        answer: `Testing runs through ${SITE.process.labProvider}, which operates patient service centers across the country. The patient receives an email with the lab order, schedules an appointment with ${SITE.process.labProvider}, and goes to a nearby location for the draw. There is no need to travel to an office. Lab costs vary depending on which panels are ordered and are billed separately by the lab.`,
      },
      {
        question: "Where are prescriptions filled?",
        answer: `If a prescription is part of a treatment plan, it can be filled at ${SITE.process.pharmacy}. Patients are not tied to a single pharmacy chosen by the practice. This differs from some telehealth hormone services, which route every prescription through a pharmacy they own or have a financial relationship with.`,
      },
      {
        question: "How often are follow-up visits?",
        answer: `Follow-up visits are typically ${SITE.process.followUpCadence}. That cadence allows enough time to repeat lab work and see how a plan is working before adjusting it. The comprehensive package is built around this schedule, covering five visits over roughly twelve months.`,
      },
      {
        question: "What happens before a prescription is written?",
        answer:
          "Kim's stated approach is to start with history and comprehensive testing across hormones and thyroid function — then address foundations like sleep, nutrition, movement, stress, and detox support. Bioidentical hormones are considered when indicated by that picture, not as an automatic first step, and any plan is monitored and adjusted over time.",
      },
    ],
  },
  {
    title: "Cost and logistics",
    items: [
      {
        /*
          Confirmed by Kim 2026-08-12. This was a top-three pre-booking question
          the site could not answer for weeks — silence sent people to a free
          consultation only to discover it there.
        */
        question: "Do you take insurance?",
        answer:
          "No. This is a cash-pay practice, so visits are paid for directly rather than billed to insurance. A single visit is $200 and the comprehensive package is $950. Laboratory fees are billed separately by the lab, and prescriptions are paid for at the pharmacy you choose. Some patients use an HSA or FSA — check with your plan administrator.",
      },
      {
        question: "How much does it cost?",
        answer:
          "A single visit is $200. The comprehensive package is $950 and covers five visits, one every three months, plus two nutrition and exercise coaching sessions and two mindset coaching sessions. Health and mindset coaching can also be added to a single visit for $75 per session. Medications and laboratory fees are not included in either option.",
      },
      {
        /*
          Reframed from "Are lab costs included in the price?" — that exact
          question also lives on /bhrt-cost-utah, which owns cost queries.
          Two pages answering one question split the signal and can suppress
          both. This angle complements it instead of competing.
        */
        question: "What is not included in the price?",
        answer:
          "Three things. Laboratory fees are billed separately by the laboratory — a lab order can be provided at no charge during a consultation, but the testing itself is paid to the lab and varies by panel. Medications are paid for at whichever compounding pharmacy you choose. Coaching sessions beyond those in the comprehensive package are $75 each.",
      },
      {
        question: "Are medications included?",
        answer:
          "No. Medications are not included in the visit fee or in the comprehensive package. If a prescription is part of a plan, it is filled at a compounding pharmacy of the patient's choosing and paid for separately, at whatever that pharmacy charges.",
      },
      {
        question: "What areas does the practice serve?",
        answer: `${SITE.provider.fullName} is licensed in ${SITE.contact.state} and sees patients located in ${SITE.contact.state}. The practice is based in ${SITE.contact.city} with a concentration in ${SITE.focusCounties.join(" and ")}, but because all visits are virtual, patients anywhere in the state can be seen without travelling to an office.`,
      },
      {
        question: "Are visits in person or virtual?",
        answer: `All visits are virtual. Consultations happen by phone or video rather than in an office, which means patients across ${SITE.contact.state} — including areas without a local hormone specialist — can be seen. Laboratory work is the one in-person step, and that is handled at a ${SITE.process.labProvider} patient service center near the patient.`,
      },
    ],
  },
  {
    title: "About Kim",
    items: [
      {
        question: "What are Kim's credentials?",
        answer: `${SITE.provider.fullName} is a ${SITE.provider.jobTitle.toLowerCase()}. Her credentials are: ${SITE.provider.credentials.join("; ")}. She practices in ${SITE.contact.state} and focuses specifically on hormone health for women in perimenopause and postmenopause rather than offering it as one service among many.`,
      },
      {
        question: "Why does Kim specialize in hormone health?",
        answer:
          "Kim has written on the practice's About page about her own experience with perimenopause — years of joint pain and insomnia, several doctors, and multiple procedures before a combination of lifestyle changes and hormone replacement therapy made a difference for her. That experience is what led her to focus her practice on supporting other women through the same transition.",
      },
      {
        question: "How do I book an appointment?",
        answer: `Appointments are booked online. The free ${OFFERINGS.freeConsult.durationMinutes}-minute phone consultation is the usual starting point and can be scheduled at bhrtwithkim.com/book. Initial consultations, follow-up visits, and the comprehensive package can each be booked directly if you already know what you need. Booking is handled through Healthie, a secure scheduling platform.`,
      },
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);
