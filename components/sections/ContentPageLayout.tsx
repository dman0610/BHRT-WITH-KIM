import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { ContentPage } from "@/lib/content/types";
import { OFFERINGS, SITE } from "@/lib/site";
import { breadcrumbSchema, faqSchema, medicalWebPageSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import HowCareWorks from "@/components/sections/HowCareWorks";
import AuthorByline from "@/components/sections/AuthorByline";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { Button } from "@/components/ui/button";

/**
 * Shared layout for symptom and commercial content pages.
 *
 * Structure follows docs/05-CONTENT-STANDARDS.md:
 *   H1 → direct answer → question H2s → how care works → FAQ → byline →
 *   disclaimer → CTA
 *
 * Everything renders server-side. FAQ answers use <details> so they collapse
 * visually while staying in the HTML — an accordion that injects text on click
 * would hide the most extractable content on the page from crawlers.
 */
export default function ContentPageLayout({
  page,
  extraSchema = [],
}: {
  page: ContentPage;
  /** Additional JSON-LD blocks, e.g. the city-scoped Service on geo pages. */
  extraSchema?: object[];
}) {
  const trail = [...(page.breadcrumb ?? []), { name: page.h1, path: `/${page.slug}` }];

  return (
    <>
      <JsonLd
        schema={[
          medicalWebPageSchema({
            name: page.h1,
            description: page.description,
            path: `/${page.slug}`,
          }),
          faqSchema(page.faqs),
          breadcrumbSchema(trail),
          ...extraSchema,
        ]}
      />

      <ScrollAnimator />

      <section className="bg-forest pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl leading-tight">
            {page.h1}
          </h1>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="bg-stone py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-12">
          {page.sections.map((section) => (
            <div key={section.heading} className="animate-on-scroll">
              <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-clay-text leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-clay-text leading-relaxed">
                      <span className="text-forest font-bold shrink-0">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {page.showHowCareWorks !== false && (
            <div className="animate-on-scroll">
              <HowCareWorks heading="What happens if you decide to move forward" />
            </div>
          )}

          {/* FAQ */}
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-5">
              Common questions
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
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

          {page.sources && page.sources.length > 0 && (
            <div className="animate-on-scroll">
              <h2 className="font-heading text-xl font-semibold text-bark mb-3">
                Sources
              </h2>
              <ul className="space-y-2 text-sm">
                {page.sources.map((s) => (
                  <li key={s.url}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-forest underline underline-offset-4 hover:text-moss transition-colors"
                    >
                      {s.label}
                      <ExternalLink className="size-3 shrink-0" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {page.related && page.related.length > 0 && (
            <div className="animate-on-scroll">
              <h2 className="font-heading text-xl font-semibold text-bark mb-3">
                Related
              </h2>
              <ul className="flex flex-wrap gap-2">
                {page.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="inline-block rounded-full border border-forest/25 bg-white px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="animate-on-scroll space-y-4">
            {/* Kim read and corrected this content — see SITE.contentReviewedOn. */}
            <AuthorByline reviewedOn={SITE.contentReviewedOn} />
            <p className="text-sm text-clay-text leading-relaxed">
              This page is general education, not medical advice, and reading it
              does not create a provider-patient relationship. What is
              appropriate varies from person to person.{" "}
              <Link
                href="/disclaimer"
                className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
              >
                Read the full disclaimer
              </Link>
              .
            </p>
          </div>
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
