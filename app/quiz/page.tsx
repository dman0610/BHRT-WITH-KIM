import type { Metadata } from "next";
import Link from "next/link";
import QuizStepper from "@/components/quiz/QuizStepper";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import HowCareWorks from "@/components/sections/HowCareWorks";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema } from "@/lib/schema";
import { OFFERINGS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Hormone Symptom Quiz",
  description:
    "A free 2-minute educational assessment covering sleep, energy, mood, and physical symptoms commonly reported during perimenopause. Not a diagnosis.",
  alternates: { canonical: "/quiz" },
};

/**
 * FAQ for the assessment itself.
 *
 * 40–80 words, self-contained, rendered in <details> so every answer is in the
 * HTML rather than injected on click.
 */
const QUIZ_FAQS = [
  {
    question: "What does the assessment cover?",
    answer:
      "Seven questions across sleep, energy, mood and mental clarity, physical symptoms, current wellness habits, what you want to focus on, and where you are in the menopause transition. It takes about two minutes. Nothing is required to see your results — an email is offered afterwards, never before.",
  },
  {
    question: "Is this a medical diagnosis?",
    answer:
      "No. It is an educational tool that reflects the answers you give, and it cannot diagnose anything. Symptoms like fatigue, low mood and disrupted sleep have several possible causes, including thyroid dysfunction. Only a provider who has evaluated you can diagnose a condition, which is what a consultation is for.",
  },
  {
    question: "What happens to the answers?",
    answer:
      "They stay in your browser and are used to display your results. If you choose to have a copy emailed and tick the consent box, a summary is sent to the email provider so it can be delivered. Answers are never shared with advertising platforms. Skipping the email step keeps everything local.",
  },
  {
    question: "What do the results actually tell you?",
    answer:
      "Which topics your answers point toward, and which of the areas Kim works on are most relevant to them. It is a starting point for a conversation rather than a verdict. Two people with similar answers can have entirely different underlying causes, which is why testing follows rather than precedes an evaluation.",
  },
  {
    question: "What happens after the assessment?",
    answer:
      "Nothing automatic. You can read the symptom pages the results point to, or book a free 15-minute phone call with Kim Yadon, FNP-C to talk it through. That call is a conversation and a chance to ask questions — no treatment plan comes out of it, and there is no obligation.",
  },
];

export default function QuizPage() {
  return (
    <>
      {/*
        This is the ad landing page named in the original spec, and until now
        it rendered about fifty words of server-side content — everything
        meaningful lived inside a client component, invisible to crawlers and
        to AI retrieval. The prose below is what makes the page findable at all.

        Second person is permitted HERE specifically: the assessment is opt-in
        and the reader is answering about themselves. The copy still stops short
        of telling anyone what they have. See docs/05-CONTENT-STANDARDS.md.
      */}
      <JsonLd
        schema={[
          medicalWebPageSchema({
            name: "Free Hormone Symptom Assessment",
            description:
              "A free educational assessment covering sleep, energy, mood, and physical symptoms commonly reported during perimenopause.",
            path: "/quiz",
          }),
          faqSchema(QUIZ_FAQS),
          breadcrumbSchema([{ name: "Hormone Symptom Quiz", path: "/quiz" }]),
        ]}
      />

      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Free Hormone Symptom Assessment
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            A short, free assessment covering the symptoms women most often
            report during perimenopause — sleep, energy, mood, and physical
            changes. It takes about two minutes, results appear immediately, and
            no email is required to see them. It is educational, not a diagnosis.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="bg-stone py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <QuizStepper />
          </div>
        </div>
      </section>

      {/* Server-rendered context — the part crawlers and AI systems can read. */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="mb-4 font-heading text-2xl font-semibold text-bark sm:text-3xl">
              What does this assessment look at?
            </h2>
            <div className="space-y-4 leading-relaxed text-clay-text">
              <p>
                Seven questions across the areas that most often change together
                during the menopause transition. They are grouped this way
                because the symptoms rarely arrive one at a time — disrupted
                sleep worsens mood and concentration, night sweats disrupt sleep,
                and fatigue affects everything else.
              </p>
              <ul className="space-y-2">
                {[
                  "Sleep — falling asleep, staying asleep, and how rested mornings feel",
                  "Energy — whether tiredness is present on waking or builds through the day",
                  "Mood and mental clarity — irritability, anxiety, word-finding, focus",
                  "Physical symptoms — hot flashes, night sweats, weight and joint changes",
                  "Current habits — what is already in place around movement and nutrition",
                  "Where you are in the transition — cycles, or how long since they stopped",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-clay-text">
                    <span className="shrink-0 font-bold text-forest">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h2 className="mb-4 font-heading text-2xl font-semibold text-bark sm:text-3xl">
              What do the results mean?
            </h2>
            <div className="space-y-4 leading-relaxed text-clay-text">
              <p>
                The results reflect the answers given and point toward the topics
                most relevant to them — nothing more. They are a starting point
                for a conversation, not a verdict.
              </p>
              <p>
                This matters because the same symptoms have several possible
                causes. Thyroid dysfunction overlaps heavily with perimenopause,
                sharing fatigue, weight change, low mood and temperature
                sensitivity. Two people can answer almost identically and have
                entirely different underlying pictures, which is why an
                evaluation covers history and testing rather than a symptom list
                alone.
              </p>
              <p>
                Some patterns are worth raising with a provider promptly rather
                than working through a quiz. Bleeding after twelve months without
                a period, unusually heavy bleeding, and persistent or worsening
                low mood all warrant care in their own right. In the United
                States the 988 Suicide &amp; Crisis Lifeline is available 24
                hours a day by call or text.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll">
            <HowCareWorks heading="What happens if you decide to go further" />
          </div>

          {/* FAQ */}
          <div className="animate-on-scroll">
            <h2 className="mb-5 font-heading text-2xl font-semibold text-bark sm:text-3xl">
              Common questions
            </h2>
            <div className="space-y-3">
              {QUIZ_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-stone px-5 py-4 shadow-sm transition-shadow open:shadow-md"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-medium text-bark marker:content-none [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base leading-snug">{faq.question}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-forest transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-clay-text">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <p className="animate-on-scroll text-sm leading-relaxed text-clay-text">
            This assessment is general education, not medical advice, and taking
            it does not create a provider-patient relationship. A free{" "}
            {OFFERINGS.freeConsult.durationMinutes}-minute call with{" "}
            {SITE.provider.fullName} is the next step if you would like to talk
            it through.{" "}
            <Link
              href="/disclaimer"
              className="text-forest underline underline-offset-4 transition-colors hover:text-moss"
            >
              Read the full disclaimer
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
