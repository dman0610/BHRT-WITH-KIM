import type { Metadata } from "next";
import Link from "next/link";
import { SITE, PAID_OFFERINGS, OFFERINGS } from "@/lib/site";
import BookingEmbed from "@/components/sections/BookingEmbed";
import HowCareWorks from "@/components/sections/HowCareWorks";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export const metadata: Metadata = {
  title: "Book a Free 15-Minute Consultation",
  // Sourced from lib/site.ts so the booking pages can't drift apart.
  description: OFFERINGS.freeConsult.metaDescription,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero */}
      <section className="bg-forest pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Book a Free 15-Minute Consultation
          </h1>
          {/*
            The 15 minutes is stated in the H1 and again below. Unqualified,
            "free consultation" reads as a full visit — and someone arriving
            expecting an hour has a bad first experience before paying anything.
            See docs/00-BUSINESS-FACTS.md.
          */}
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            A short phone call with Kim Yadon, FNP-C — no cost, no obligation.
            Virtual visits throughout Utah.
          </p>
        </div>
      </section>

      {/* What the free call covers */}
      <section className="bg-stone py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll rounded-3xl bg-white p-6 md:p-10 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-bark mb-2">
              What the free call covers
            </h2>
            <p className="text-sm text-clay-text mb-5">
              About {OFFERINGS.freeConsult.durationMinutes} minutes.
            </p>
            <ul className="space-y-3 text-clay-text leading-relaxed">
              <li className="flex gap-3">
                <span className="text-forest font-bold shrink-0">✓</span>
                A chance to ask questions about bioidentical hormone therapy and
                how Kim works
              </li>
              <li className="flex gap-3">
                <span className="text-forest font-bold shrink-0">✓</span>
                A quick look at what you&apos;ve been experiencing, to see
                whether working together is a fit
              </li>
              <li className="flex gap-3">
                <span className="text-forest font-bold shrink-0">✓</span>
                A lab order at no charge, if testing makes sense as a next step
              </li>
            </ul>

            {/*
              Sets the expectation honestly. The free call is a short intro, not
              a condensed version of the paid visit.
            */}
            <p className="mt-6 rounded-xl bg-mist px-4 py-3 text-sm text-clay-text leading-relaxed">
              <span className="font-medium text-bark">Good to know:</span> this
              is a short introductory call rather than a full appointment. A
              complete visit — history, symptoms, and a plan — is the{" "}
              <Link
                href="/book/initial-consultation"
                className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
              >
                {OFFERINGS.initial.durationMinutes}-minute initial consultation
              </Link>
              . The call and the lab order are free; {SITE.labDisclosure}
            </p>
          </div>
        </div>
      </section>

      {/* How care works */}
      <section className="bg-stone pb-12 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <HowCareWorks heading="If you decide to move forward" />
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BookingEmbed
            offering="freeConsult"
            title="Choose a Time"
            description="Select a time that works for you — secure online booking."
          />
        </div>
      </section>

      {/* Already know what you need */}
      <section className="bg-stone py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-bark">
            Already know what you need?
          </h2>
          <p className="mt-3 text-clay-text">
            Book a specific visit or package directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {PAID_OFFERINGS.map((offering) => (
              <Link
                key={offering.slug}
                href={`/book/${offering.slug}`}
                className="rounded-full border border-forest/25 bg-white px-5 py-2.5 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white"
              >
                {offering.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-clay-text">
            Not sure which is right for you?{" "}
            <Link
              href="/services"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              Compare packages and pricing
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
