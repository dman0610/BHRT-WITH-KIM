import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export const metadata: Metadata = {
  title: "Services — BHRT with Kim",
  description:
    "Explore our holistic approach: bioidentical hormone therapy, nutrition, sleep optimization, stress reduction, detox support, and comprehensive testing.",
};

const SECTION_BGS = [
  "bg-stone",
  "bg-white",
  "bg-mist",
  "bg-stone",
  "bg-lavender/30",
  "bg-white",
  "bg-mist",
  "bg-stone",
  "bg-lavender/30",
];

export default function ServicesPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            A Whole-Body Approach to Feeling Whole
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just treat one symptom — we look at the complete picture.
            Every protocol is built around your unique body, your life, and your goals.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`${SECTION_BGS[index % SECTION_BGS.length]} py-16 md:py-24`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`animate-on-scroll flex flex-col items-start gap-8 md:flex-row md:items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-lavender/50 flex items-center justify-center">
                  <Icon name={service.icon} className="size-10 text-forest" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 max-w-2xl">
                <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl md:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-clay text-lg leading-relaxed">
                  {service.description}
                </p>
                <Link href="/contact" className="inline-block mt-6">
                  <Button className="bg-moss text-white rounded-full px-6 hover:bg-forest transition-colors">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
