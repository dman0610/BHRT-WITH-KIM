import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export const metadata: Metadata = {
  title: "Services — BHRT with Kim",
  description:
    "Flexible pricing for BHRT consultations, labs, and coaching. Choose the plan that fits your journey.",
};

const INCLUDED_BADGE = "✓";

export default function ServicesPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Your Path to Feeling Well
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your life. Every option includes Kim&apos;s
            personalized care and the 12-Week Vitality Reset Program.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-stone py-20 md:py-28">
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
                  <span className="text-clay">/visit</span>
                </div>
                <p className="text-sm text-clay/80 mt-1">Focused on BHRT treatment</p>
              </div>

              <div className="border-t border-bark/10 pt-6 flex-1 space-y-3">
                <p className="text-sm font-semibold text-bark mb-4">What&apos;s included:</p>

                <div className="flex items-start gap-3">
                  <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-clay text-sm leading-relaxed">
                    <span className="font-medium text-bark">Lab costs:</span> $250 initial labs · $150 follow-up labs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-clay text-sm leading-relaxed">
                    12-Week Vitality Reset Program
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-clay text-sm leading-relaxed">
                    Health &amp; mindset coaching available as an add-on — $75/session
                  </p>
                </div>

                <p className="text-xs text-clay/60 pt-2 italic">Medications not included.</p>
              </div>

              <Link href="/contact#booking" className="mt-8 block">
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
                <p className="text-sm text-white/70 mt-1">5 visits · one every 3 months · BHRT-focused</p>
              </div>

              <div className="border-t border-white/20 pt-6 flex-1 space-y-3">
                <p className="text-sm font-semibold text-white mb-4">Everything in Option 1, plus:</p>

                <div className="flex items-start gap-3">
                  <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    12-Week Vitality Reset Program included
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    2 personal coaching sessions focused on nutrition &amp; exercise
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    2 mindset coaching sessions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Initial labs + follow-up labs every 3 months — included
                  </p>
                </div>

                <p className="text-xs text-white/50 pt-2 italic">Medications not included.</p>
              </div>

              <Link href="/contact#booking" className="mt-8 block">
                <Button className="w-full bg-white text-forest rounded-full py-3 hover:bg-stone transition-colors text-base font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Questions note */}
          <p className="text-center text-clay text-sm mt-10">
            Not sure which option is right for you?{" "}
            <Link href="/contact" className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium">
              Reach out — Kim is happy to help.
            </Link>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
