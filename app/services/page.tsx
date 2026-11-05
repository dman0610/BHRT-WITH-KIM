import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/sections/CTASection";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import JsonLd from "@/components/seo/JsonLd";
import Icon from "@/components/ui/Icon";
import { SERVICES } from "@/lib/constants";
import { SITE, OFFERINGS, COSTS, usd } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { PROMO, isPromoActive } from "@/lib/promo";

export const metadata: Metadata = {
  title: "BHRT Services & Pricing",
  description:
    `BHRT pricing with Kim Yadon, FNP-C: a free 15-minute call, a ${usd(OFFERINGS.newPatient.price ?? 0)} New Patient Package covering two visits, and ${usd(OFFERINGS.followUp.price ?? 0)} follow-ups. Virtual care across Utah.`,
  alternates: { canonical: "/services" },
};

const INCLUDED_BADGE = "✓";

const { freeConsult, newPatient, followUp } = OFFERINGS;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Services & Pricing", path: "/services" }]),
          serviceSchema({
            name: `Bioidentical Hormone Therapy — ${OFFERINGS.newPatient.label}`,
            description: `${OFFERINGS.newPatient.blurb} Medications and lab fees are not included.`,
            price: OFFERINGS.newPatient.price ?? undefined,
            path: "/services",
          }),
          serviceSchema({
            name: `Bioidentical Hormone Therapy — ${OFFERINGS.followUp.label}`,
            description: `${OFFERINGS.followUp.blurb} Medications and lab fees are not included.`,
            price: OFFERINGS.followUp.price ?? undefined,
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

      {/*
        Pricing, restructured 2026-11-05 at Kim's request: free call, then a
        two-visit New Patient Package, then flat-rate follow-ups. Every figure
        below comes from OFFERINGS and COSTS in lib/site.ts — nothing on this
        page may hardcode a price (npm run verify enforces it).
      */}
      <section id="pricing" className="scroll-mt-20 bg-stone py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-3xl mb-12">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              What does care with Kim cost?
            </h2>
            <p className="mt-4 text-clay-text text-lg leading-relaxed">
              New patients start with a free {freeConsult.durationMinutes}-minute
              phone call. Care then begins with the {newPatient.label}, which
              covers the first two visits for {usd(newPatient.price ?? 0)}, and
              continues with follow-up visits at {usd(followUp.price ?? 0)} each.
              Hormone care works best with follow-through, which is why the
              first two visits are priced as one package. {SITE.contact.insurance}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Step 1 — free call */}
            <div className="animate-on-scroll bg-white rounded-3xl p-8 shadow-sm border border-bark/10 flex flex-col">
              <p className="text-xs font-semibold tracking-[0.15em] text-forest uppercase mb-2">Step 1</p>
              <h3 className="font-heading text-2xl font-semibold text-bark">
                {freeConsult.label}
              </h3>
              <p className="mt-3 font-heading text-5xl font-semibold text-forest">Free</p>
              <p className="mt-1 text-clay-text">About {freeConsult.durationMinutes} minutes, by phone</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-bark/10 pt-6">
                {freeConsult.includes.slice(1).map((item) => (
                  <li key={item} className="flex gap-3 text-clay-text leading-relaxed">
                    <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/book" className="mt-8 block">
                <Button className="w-full bg-moss text-white rounded-full py-3 hover:bg-forest transition-colors text-base">
                  Book the Free Call
                </Button>
              </Link>
            </div>

            {/* Step 2 — New Patient Package */}
            <div className="animate-on-scroll stagger-2 bg-forest rounded-3xl p-8 shadow-lg flex flex-col">
              <p className="text-xs font-semibold tracking-[0.15em] text-white/70 uppercase mb-2">Step 2</p>
              <h3 className="font-heading text-2xl font-semibold text-white">
                {newPatient.label}
              </h3>
              <p className="mt-3 font-heading text-5xl font-semibold text-white">
                {usd(newPatient.price ?? 0)}
              </p>
              <p className="mt-1 text-white/80">Your first two visits</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-white/20 pt-6">
                {newPatient.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-white/90 leading-relaxed">
                    <span className="text-white font-bold shrink-0">{INCLUDED_BADGE}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/book/${newPatient.slug}`} className="mt-8 block">
                <Button className="w-full bg-white text-forest rounded-full py-3 hover:bg-stone transition-colors text-base font-semibold">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Step 3 — follow-ups */}
            <div className="animate-on-scroll stagger-3 bg-white rounded-3xl p-8 shadow-sm border border-bark/10 flex flex-col">
              <p className="text-xs font-semibold tracking-[0.15em] text-forest uppercase mb-2">Step 3</p>
              <h3 className="font-heading text-2xl font-semibold text-bark">
                Ongoing {followUp.label}s
              </h3>
              <p className="mt-3 font-heading text-5xl font-semibold text-forest">
                {usd(followUp.price ?? 0)}
              </p>
              <p className="mt-1 text-clay-text">Per visit, once care has started</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-bark/10 pt-6">
                {followUp.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-clay-text leading-relaxed">
                    <span className="text-forest font-bold shrink-0">{INCLUDED_BADGE}</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={`/book/${followUp.slug}`} className="mt-8 block">
                <Button className="w-full bg-moss text-white rounded-full py-3 hover:bg-forest transition-colors text-base">
                  Book a Follow-Up
                </Button>
              </Link>
            </div>
          </div>

          {isPromoActive() && (
            <p className="mt-6 text-center text-sm text-forest font-medium">
              Use code{" "}
              <span className="rounded-full bg-forest/10 px-2.5 py-1 font-semibold tracking-wide">
                {PROMO.code}
              </span>{" "}
              at checkout — {PROMO.terms}
            </p>
          )}

          {/*
            What is NOT included. Kim supplied the lab range and medication
            estimates on 2026-11-05 — reversing the earlier no-figures rule.
            They are estimates and labelled as such; the lab and the pharmacy
            bill for them, never the practice.
          */}
          <div id="costs" className="scroll-mt-24 mt-14 animate-on-scroll rounded-3xl bg-white p-8 md:p-10 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl">
              What isn&apos;t included in the visit fee?
            </h2>
            <p className="mt-4 text-clay-text leading-relaxed">
              Lab work and medications are billed separately by the lab and the
              pharmacy, not as part of any visit fee.
            </p>

            <h3 className="mt-8 font-heading text-xl font-semibold text-bark">Labs</h3>
            <p className="mt-2 text-clay-text leading-relaxed">
              Typically {usd(COSTS.labs.low)} to {usd(COSTS.labs.high)}, depending
              on the lab and the tests ordered. Blood is drawn at a{" "}
              {SITE.process.labProvider} patient service center the patient chooses.
            </p>

            <h3 className="mt-8 font-heading text-xl font-semibold text-bark">Medications</h3>
            <p className="mt-2 text-clay-text leading-relaxed">
              Costs depend on which medications are prescribed and at what dose,
              and only apply if a prescription is part of the plan. Most are
              prepared by a compounding pharmacy, and prescriptions can be filled
              at {SITE.process.pharmacy}. Estimated costs for a{" "}
              {COSTS.medications.supplyDays}-day supply:
            </p>
            <table className="mt-5 w-full text-left text-clay-text">
              <thead>
                <tr className="border-b border-bark/15 text-sm text-bark">
                  <th scope="col" className="py-2 pr-4 font-semibold">Medication</th>
                  <th scope="col" className="py-2 font-semibold">
                    Estimated {COSTS.medications.supplyDays}-day cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {COSTS.medications.items.map((m) => (
                  <tr key={m.name} className="border-b border-bark/10">
                    <td className="py-2.5 pr-4">{m.name}</td>
                    <td className="py-2.5">about {usd(m.estimate)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-sm text-clay-text italic">{COSTS.medications.note}</p>
          </div>

          <div className="mt-10 animate-on-scroll rounded-3xl bg-mist px-6 py-8 text-center">
            <h2 className="font-heading text-2xl font-semibold text-bark">
              Why are visits virtual?
            </h2>
            <p className="mt-3 text-clay-text max-w-xl mx-auto leading-relaxed">
              Patients meet with Kim from home, anywhere in {SITE.contact.state},
              with no drive, no waiting room, and less time away from work.
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
