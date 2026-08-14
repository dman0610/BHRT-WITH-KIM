import type { Metadata } from "next";
import Link from "next/link";
import { SYMPTOM_PAGES, groupedSymptomPages } from "@/lib/content";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { Button } from "@/components/ui/button";
import { OFFERINGS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perimenopause Symptoms Explained",
  description:
    "Plain-language explanations of common perimenopause and menopause symptoms, what hormones have to do with each, and when evaluation is worth considering.",
  alternates: { canonical: "/symptoms" },
};

/**
 * Hub-level FAQ.
 *
 * Deliberately about the EVALUATION, not about any one symptom — the ten
 * individual pages already answer their own topics, and repeating them here
 * would put the same answer on two URLs competing for the same query.
 *
 * Answers are 40–80 words and self-contained, because in an AI answer they
 * will be read in isolation. Rendered as <details> so every answer sits in the
 * HTML rather than being injected on click; `npm run verify` fails the build
 * if a schema answer is ever missing from the markup.
 */
const HUB_FAQS = [
  {
    question: "How does someone know if symptoms are hormone-related?",
    answer:
      "Not from a symptom list alone. Fatigue, low mood, weight change and disrupted sleep all have several possible causes, and thyroid dysfunction in particular overlaps heavily with perimenopause. That is why an evaluation covers history plus testing across hormones, thyroid and adrenal function rather than assuming hormones from symptoms.",
  },
  {
    question: "What does hormone testing actually cover?",
    answer:
      "A comprehensive workup looks at sex hormones, thyroid and adrenal function, along with screening for underlying conditions that can mimic or worsen hormonal symptoms. Testing runs through LabCorp: the patient receives an emailed lab order, schedules their own appointment, and visits a patient service center. Lab fees are billed by the laboratory, not the practice.",
  },
  {
    question: "Is it normal to have several of these symptoms at once?",
    answer:
      "It is very common, and the overlap is part of the picture rather than a complication. Disrupted sleep worsens mood and concentration, night sweats disrupt sleep, and fatigue affects everything else. Because they compound, an evaluation looks at the pattern as a whole instead of treating each symptom as a separate problem.",
  },
  {
    question: "Which symptoms need prompt medical attention?",
    answer:
      "Any bleeding after twelve consecutive months without a period, unusually heavy bleeding, or bleeding between periods should be evaluated rather than attributed to perimenopause. Persistent or worsening low mood also warrants care in its own right. In the United States, the 988 Suicide and Crisis Lifeline is available 24 hours a day by call or text.",
  },
  {
    question: "Does hormone therapy treat all of these?",
    answer:
      "No, and any source suggesting otherwise is overstating it. Hormone therapy is prescribed for symptoms of the menopause transition where appropriate. It is not a treatment for depression, anxiety disorders, arthritis, or weight loss, all of which have their own established treatments. What is suitable depends on an individual's full medical history.",
  },
  {
    question: "What happens at a first consultation?",
    answer:
      "It starts with a free phone call of about 15 minutes with Kim Yadon, FNP-C — a chance to ask questions and see whether working together fits, and a lab order can be provided at no charge. A full initial consultation is separate, about 60 minutes at $200, once results are back.",
  },
];

/** Hub for the symptom pages. Also the breadcrumb parent each one points at. */
export default function SymptomsIndexPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Symptoms", path: "/symptoms" }]),
          faqSchema(HUB_FAQS),
        ]}
      />
      <ScrollAnimator />

      <section className="bg-forest pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl leading-tight">
            Perimenopause Symptoms, Explained
          </h1>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            Plain-language explanations of what many women experience during the
            menopause transition, what hormones have to do with each, and what
            else is worth ruling out. Educational only — not a diagnosis.
          </p>
        </div>
      </section>

      {/*
        Grouped rather than a flat list. Ten cards in one column reads as a
        wall of links; four labelled sections let someone scan to the part
        that matches what they're experiencing. Presentation only — grouping
        has no effect on routing, schema, or the sitemap.
      */}
      <section className="bg-stone py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {groupedSymptomPages().map(({ group, pages }) => (
            <div key={group} className="animate-on-scroll">
              <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-5">
                {group}
              </h2>
              <ul className="space-y-4">
                {pages.map((page) => (
                  <li key={page.slug}>
                    <Link
                      href={`/${page.slug}`}
                      className="block rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <h3 className="font-heading text-xl font-medium text-bark mb-2">
                        {page.h1}
                      </h3>
                      <p className="text-clay-text leading-relaxed">
                        {page.description}
                      </p>
                      <span className="mt-3 inline-block text-sm font-medium text-forest">
                        Read more →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Hub FAQ — answers live in the HTML, matching ContentPageLayout's pattern. */}
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-5">
              Common questions
            </h2>
            <div className="space-y-3">
              {HUB_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white px-5 py-4 shadow-sm open:shadow-md transition-shadow"
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
                  <p className="mt-3 text-clay-text leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <p className="text-center text-clay-text">
            {SYMPTOM_PAGES.length} topics, and more are being added.{" "}
            <Link
              href="/quiz"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              Take the free assessment
            </Link>{" "}
            to see which are most relevant.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl">
            Want to talk it through?
          </h2>
          <p className="mt-3 text-clay-text leading-relaxed max-w-xl mx-auto">
            A free {OFFERINGS.freeConsult.durationMinutes}-minute phone call with
            Kim Yadon, FNP-C. No cost, no obligation.
          </p>
          <Link href="/book" className="inline-block mt-6">
            <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
