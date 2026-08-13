import type { Metadata } from "next";
import Link from "next/link";
import { SYMPTOM_PAGES, groupedSymptomPages } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
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

/** Hub for the symptom pages. Also the breadcrumb parent each one points at. */
export default function SymptomsIndexPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Symptoms", path: "/symptoms" }])} />
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
