import type { Metadata } from "next";
import { UNFEATURED_TESTIMONIALS } from "@/lib/constants";
import TestimonialCard from "@/components/sections/TestimonialCard";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { FernCurl } from "@/components/ui/BotanicalDecor";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Client Experiences",
  // "Real stories of transformation" removed — an implied transformation claim.
  // See docs/05-CONTENT-STANDARDS.md.
  description:
    "What women have said about working with Kim Yadon, FNP-C on hormone health in Utah, in their own words. Virtual bioidentical hormone therapy statewide.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      {/*
        Breadcrumb ONLY. No Review or AggregateRating markup, ever — these
        quotes have no verifiable source or date, and self-serving review
        schema is a manual-action risk. `npm run verify` fails the build if
        either type appears. See docs/03-SEO-TECHNICAL.md.
      */}
      <JsonLd
        schema={breadcrumbSchema([{ name: "Client Experiences", path: "/testimonials" }])}
      />
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Women Who Found Their Way Back
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every woman&apos;s journey is unique — but the feeling of coming back
            to yourself is something they all share.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="relative bg-stone py-16 md:py-24 overflow-hidden">
        <FernCurl className="absolute top-12 left-4 w-20 h-20 text-sage opacity-[0.06] hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {UNFEATURED_TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`animate-on-scroll stagger-${(index % 3) + 1}`}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  context={testimonial.context}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
