import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_CATEGORIES, FAQ_ITEMS } from "@/lib/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { Button } from "@/components/ui/button";
import { OFFERINGS } from "@/lib/site";

export const metadata: Metadata = {
  title: "BHRT Questions Answered",
  description:
    "Common questions about bioidentical hormone therapy in Utah — what it is, what it costs, how lab work happens, and what a consultation involves.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "FAQ", path: "/faq" }]),
          faqSchema(FAQ_ITEMS),
        ]}
      />

      <ScrollAnimator />

      <section className="bg-forest pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            Questions About BHRT
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            What bioidentical hormone therapy is, what it costs, and how care
            works when visits are virtual.
          </p>
        </div>
      </section>

      <section className="bg-stone py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.title} className="animate-on-scroll">
              <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-5">
                {category.title}
              </h2>

              <div className="space-y-3">
                {category.items.map((item) => (
                  /*
                    <details> keeps every answer in the server-rendered HTML
                    while still collapsing visually. An accordion that injects
                    answer text on click would hide the single best
                    AI-citation asset on the site from crawlers entirely.
                    See docs/04-AI-VISIBILITY.md.
                  */
                  <details
                    key={item.question}
                    name={category.title}
                    className="group rounded-2xl bg-white px-5 py-4 shadow-sm open:shadow-md transition-shadow"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-medium text-bark marker:content-none [&::-webkit-details-marker]:hidden">
                      <h3 className="text-base leading-snug">{item.question}</h3>
                      <span
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-forest transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-clay-text leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Educational disclaimer — required on this surface type. */}
          <p className="rounded-2xl bg-mist px-5 py-4 text-sm text-clay-text leading-relaxed">
            These answers are general education, not medical advice, and they do
            not create a provider-patient relationship. What is appropriate
            varies from person to person.{" "}
            <Link
              href="/disclaimer"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              Read the full disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl">
            Still have a question?
          </h2>
          <p className="mt-3 text-clay-text leading-relaxed max-w-xl mx-auto">
            The free {OFFERINGS.freeConsult.durationMinutes}-minute call exists
            for exactly this. No cost, no obligation.
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
