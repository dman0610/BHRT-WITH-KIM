import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import JsonLd from "@/components/seo/JsonLd";
import Icon from "@/components/ui/Icon";
import { SERVICES } from "@/lib/constants";
import { SITE, OFFERINGS } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { PROMO, isPromoActive } from "@/lib/promo";

export const metadata: Metadata = {
  title: "BHRT Services & Pricing",
  description:
    "Transparent pricing for bioidentical hormone therapy with Kim Yadon, FNP-C. Per-visit and comprehensive package options. Virtual visits across Utah.",
  alternates: { canonical: "/services" },
};

const INCLUDED_BADGE = "✓";

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Services & Pricing", path: "/services" }]),
          serviceSchema({
            name: "Bioidentical Hormone Therapy — Per Visit",
            description:
              "A single BHRT-focused visit with Kim Yadon, FNP-C. Medications and lab fees are not included.",
            price: 200,
            path: "/services",
          }),
          serviceSchema({
            name: "Bioidentical Hormone Therapy — Comprehensive Package",
            description:
              "Five BHRT-focused visits, one every three months, plus two nutrition and exercise coaching sessions and two mindset coaching sessions. Medications and lab fees are not included.",
            price: 1500,
            path: "/services",
          }),
        ]}
      />

      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Services &amp; Pricing
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            A whole-body approach to hormone health, with{" "}
            <Link
              href="#pricing"
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              transparent pricing
            </Link>
            . Every option includes personalized care from Kim Yadon, FNP-C.
          </p>
        </div>
      </section>

      {/*
        The nine service descriptions. Each carries a real `id` so the
        /services#bhrt-style anchors linked from the homepage cards and from
        every quiz result resolve — before this they pointed at fragments that
        did not exist, and every quiz completion dead-ended here.
      */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-2xl mb-14">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              What Kim works on
            </h2>
            <p className="mt-4 text-clay-text text-lg leading-relaxed">
              Hormones are the focus, but they don&apos;t work in isolation.
              These are the areas a plan may cover, depending on what your
              history and testing show.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                id={service.id}
                // scroll-mt clears the fixed navbar when an anchor link lands here
                className="scroll-mt-28 rounded-2xl border border-bark/10 bg-stone/60 p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-white">
                    <Icon name={service.icon} className="size-5 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-bark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-clay-text leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-clay-text">
            Not sure where you fit?{" "}
            <Link
              href="/quiz"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              Take the free assessment
            </Link>{" "}
            or{" "}
            <Link
              href="/book"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              book a free 15-minute call
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="scroll-mt-20 bg-stone py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Option 1 — Per Visit */}
            <div className="animate-on-scroll bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-bark/10 flex flex-col">
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-[0.15em] text-forest uppercase mb-2">
                  Option 1
                </p>
                <h2 className="font-heading text-3xl font-semibold text-bark mb-1">
                  Per Visit
                </h2>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="font-heading text-5xl font-semibold text-forest">$200</span>
                  <span className="text-clay-text">/visit</span>
                </div>
                <p className="text-clay-text mt-1">Focused on BHRT treatment</p>
              </div>

              <div className="border-t border-bark/10 pt-6 flex-1 space-y-3">
                <p className="text-sm font-semibold text-bark mb-4">What&apos;s included:</p>

                {/* The hour is the clearest justification for the price and was unstated. */}
                <div className="flex items-start gap-3">
                  <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-clay-text leading-relaxed">
                    <span className="font-medium text-bark">
                      About {OFFERINGS.initial.durationMinutes} minutes
                    </span>{" "}
                    with Kim
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-clay-text leading-relaxed">
                    Consultation with{" "}
                    <span className="font-medium text-bark">Kim Yadon, FNP-C</span> —
                    WorldLink trained provider
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-clay-text leading-relaxed">
                    Health &amp; mindset coaching available as an add-on — $75/session
                  </p>
                </div>

                {/*
                  A material term of the offer, not a caption — it was set at
                  12px, the smallest text on the highest-stakes page. Kim
                  specifically corrected the site because it previously implied
                  labs were included; the correction has to be legible.
                */}
                <p className="text-clay-text pt-2 italic">
                  Medications and lab fees not included.
                </p>
              </div>

              <Link href="/book/initial-consultation" className="mt-8 block">
                <Button className="w-full bg-moss text-white rounded-full py-3 hover:bg-forest transition-colors text-base">
                  Book a Visit
                </Button>
              </Link>
            </div>

            {/* Option 2 — Comprehensive Package */}
            <div className="animate-on-scroll stagger-2 bg-forest rounded-3xl p-8 md:p-10 shadow-lg flex flex-col relative overflow-hidden">
              {/* Best value ribbon */}
              <div className="absolute top-5 right-5 bg-white/20 text-white text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                Best Value
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold tracking-[0.15em] text-white/70 uppercase mb-2">
                  Option 2
                </p>
                <h2 className="font-heading text-3xl font-semibold text-white mb-1">
                  Comprehensive Package
                </h2>
                <div className="flex items-baseline gap-1 mt-3">
                  <span className="font-heading text-5xl font-semibold text-white">$1,500</span>
                </div>
                <p className="text-white/80 mt-1">5 visits · one every 3 months · BHRT-focused</p>
              </div>

              <div className="border-t border-white/20 pt-6 flex-1 space-y-3">
                <p className="text-sm font-semibold text-white mb-4">Everything in Option 1, plus:</p>

                <div className="flex items-start gap-3">
                  <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-white/90 leading-relaxed">
                    2 personal coaching sessions focused on nutrition &amp; exercise
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-white/90 leading-relaxed">
                    2 mindset coaching sessions
                  </p>
                </div>

                <p className="text-white/90 pt-2 italic">
                  Medications and lab fees not included.
                </p>
              </div>

              <Link href="/book/comprehensive-package" className="mt-8 block">
                <Button className="w-full bg-white text-forest rounded-full py-3 hover:bg-stone transition-colors text-base font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/*
            Lab costs are not included in any package and no dollar figures are
            published — Kim reports they vary greatly by panel.
            See docs/00-BUSINESS-FACTS.md.
          */}
          <p className="mt-8 rounded-2xl bg-white/60 px-5 py-4 text-center text-clay-text leading-relaxed">
            {SITE.labDisclosure} Labs are billed separately by the lab.
          </p>

          {isPromoActive() && (
            <p className="mt-4 text-center text-sm text-forest font-medium">
              Use code{" "}
              <span className="rounded-full bg-forest/10 px-2.5 py-1 font-semibold tracking-wide">
                {PROMO.code}
              </span>{" "}
              at checkout — {PROMO.terms}
            </p>
          )}

          {/* Not sure? Free consult is the lowest-friction next step. */}
          <div className="mt-10 rounded-3xl bg-mist px-6 py-8 text-center">
            <h2 className="font-heading text-2xl font-semibold text-bark">
              Not sure which option is right for you?
            </h2>
            <p className="mt-3 text-clay-text max-w-xl mx-auto leading-relaxed">
              Start with a free phone consultation. It costs nothing, and
              it&apos;s a chance to ask questions before deciding on anything.
            </p>
            <Link href="/book" className="inline-block mt-6">
              <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
