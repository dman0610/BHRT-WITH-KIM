import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { VALUES } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { SeedMotif } from "@/components/ui/BotanicalDecor";

export const metadata: Metadata = {
  title: "About Kim — BHRT with Kim",
  description:
    "Meet Kim — a holistic hormone health practitioner empowering women to reclaim vitality through bioidentical hormone therapy and lifestyle optimization.",
};

export default function AboutPage() {
  return (
    <>
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Meet Kim
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            The woman behind the mission — and the reason this practice exists.
          </p>
        </div>
      </section>

      {/* Kim's Story */}
      <section className="relative bg-stone py-20 md:py-28 overflow-hidden">
        <SeedMotif className="absolute bottom-8 left-4 w-16 h-24 text-sage opacity-[0.06] hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll grid gap-12 md:grid-cols-2 items-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/kim-portrait.jpg"
                alt="Kim — BHRT with Kim founder"
                width={600}
                height={750}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            <div>
              <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-clay text-lg leading-relaxed">
                <p>
                  I believe women are a powerful force for good. My purpose is to support women
                  during life&apos;s changes so they can feel good, nourish relationships, have
                  meaning and purpose in their life and continue to brighten the world.
                </p>
                <p>
                  I have experienced the challenges and discomfort due to peri-menopause and
                  after seeing several doctors, having multiple procedures and suffering for
                  years with joint pain and insomnia, I was amazed at the difference a
                  combination of improved lifestyle choices and hormone replacement therapy
                  could have. Since then, I have been on a mission to educate myself so I
                  could then help and guide other women on their own journey.
                </p>
                <p>
                  To help women navigate the challenges of fluctuating hormones it requires
                  looking at the whole picture — your hormones, your lifestyle, your stress,
                  your sleep, your nutrition. It means not guessing, but testing. And it means
                  building a plan that fits your life, not a one-size-fits-all protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach / Philosophy */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              The Holistic Framework
            </h2>
            <p className="mt-4 text-clay text-lg">
              My approach isn&apos;t just about hormones — it&apos;s about the whole you.
            </p>
          </div>

          <div className="animate-on-scroll stagger-2 grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl bg-mist">
              <div className="font-heading text-5xl font-semibold text-forest mb-3">1</div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                Listen &amp; Test
              </h3>
              <p className="text-clay text-sm leading-relaxed">
                We start by hearing your full story, then run comprehensive testing —
                hormones, thyroid, adrenals, and screening for underlying conditions
                like mold or Lyme.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-lavender/30">
              <div className="font-heading text-5xl font-semibold text-forest mb-3">2</div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                Lifestyle First
              </h3>
              <p className="text-clay text-sm leading-relaxed">
                Before reaching for any prescription, we optimize the foundations —
                sleep, nutrition, movement, stress management, and detox support.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-peach/30">
              <div className="font-heading text-5xl font-semibold text-forest mb-3">3</div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                Targeted BHRT
              </h3>
              <p className="text-clay text-sm leading-relaxed">
                When indicated, bioidentical hormones provide targeted support that
                works with your body&apos;s chemistry — not against it. Monitored and
                adjusted to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl mb-8">
              Credentials &amp; Training
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Board Certified Family Nurse Practitioner",
                "Advanced BHRT training and certification with A4M and Worldlink",
                "Certified Diabetes Care and Education Specialist (CDCES)",
                "Certified NAET practitioner",
              ].map((credential) => (
                <div
                  key={credential}
                  className="p-4 rounded-xl bg-white text-bark font-medium"
                >
                  {credential}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-stone py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              What I Stand For
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className={`animate-on-scroll stagger-${(index % 3) + 1} p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-lavender/50 flex items-center justify-center mb-4">
                  <Icon name={value.icon} className="size-6 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-medium text-bark mb-2">
                  {value.title}
                </h3>
                <p className="text-clay text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA at bottom */}
      <section className="bg-lavender/30 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-clay text-lg max-w-xl mx-auto">
              I&apos;d love to hear your story and explore how we can work together
              to help you feel like yourself again.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
