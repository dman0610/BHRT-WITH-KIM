import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREA_PAGES } from "@/lib/content";
import { SITE, OFFERINGS } from "@/lib/site";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Utah Service Areas",
  description:
    "Kim Yadon, FNP-C provides bioidentical hormone therapy by virtual visit to women throughout Utah, including Salt Lake County and Utah County cities.",
  alternates: { canonical: "/service-areas" },
};

/**
 * Hub for the service-area pages, and the breadcrumb parent each one points at.
 *
 * The most important line on this page is the one saying the whole state is
 * covered and that a missing city page means nothing. City pages exist for
 * search, not to define eligibility, and implying otherwise would turn a
 * marketing decision into a factual claim about who can get care.
 */
export default function ServiceAreasIndexPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Service Areas", path: "/service-areas" }]),
          serviceSchema({
            name: "Virtual bioidentical hormone replacement therapy in Utah",
            description: SITE.entityStatement,
            path: "/service-areas",
          }),
        ]}
      />
      <ScrollAnimator />

      <section className="bg-forest pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl leading-tight">
            Where Kim Sees Patients in Utah
          </h1>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            Kim Yadon, FNP-C is licensed in Utah and sees patients anywhere in
            the state. Every visit is a scheduled phone or video call — there is
            no clinic to drive to, in any city. The one in-person step is a
            blood draw at a LabCorp patient service center the patient chooses.
          </p>
        </div>
      </section>

      <section className="bg-stone py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-4">
              Does the city matter?
            </h2>
            <div className="space-y-4 text-clay-text leading-relaxed">
              <p>
                For eligibility, no. Nurse practitioner licensure in Utah is
                issued by the state rather than by a county or city, so anyone
                located in Utah can book. The practice is based in{" "}
                {SITE.contact.city}, and because consultations are virtual, the
                distance from there changes nothing about scheduling, price, or
                care.
              </p>
              <p>
                The pages below exist because people search for hormone care the
                way they search for anything local — by adding a city name. Each
                one answers a different question. A city without a page is not
                outside the service area.
              </p>
            </div>
          </div>

          <ul className="mt-10 space-y-4">
            {SERVICE_AREA_PAGES.map((page) => (
              <li key={page.slug} className="animate-on-scroll">
                <Link
                  href={`/${page.slug}`}
                  className="block rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h2 className="font-heading text-xl font-medium text-bark">
                    {page.city}
                  </h2>
                  <p className="mt-1 text-sm text-forest">{page.county}</p>
                  <p className="mt-2 text-clay-text leading-relaxed">
                    {page.hubBlurb}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-forest">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 animate-on-scroll">
            <h2 className="font-heading text-2xl font-semibold text-bark sm:text-3xl mb-4">
              What about the rest of Utah?
            </h2>
            <div className="space-y-4 text-clay-text leading-relaxed">
              <p>
                Also served — St. George, Ogden, Logan, Park City, Tooele, Heber
                City, Cedar City, Vernal, Moab, and everywhere between. Virtual
                care is the reason a practice based in one corner of the state
                can work for someone four hours away, and rural Utah is where
                that matters most, since the alternative is often a long drive
                to the nearest provider who works in this area.
              </p>
              <p>
                LabCorp operates patient service centers across Utah, and
                prescriptions go to{" "}
                <span className="font-medium text-bark">
                  {SITE.process.pharmacy}
                </span>
                . Follow-up visits are typically{" "}
                {SITE.process.followUpCadence}.
              </p>
              <p>
                Care is limited to patients located in Utah. Licensure follows
                the patient&apos;s location at the time of a visit, so an
                appointment is scheduled for a date when the patient is in the
                state.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-clay-text">
            Not sure where to start?{" "}
            <Link
              href="/symptoms"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              Read about common perimenopause symptoms
            </Link>{" "}
            or{" "}
            <Link
              href="/bhrt-cost-utah"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
            >
              see what BHRT costs in Utah
            </Link>
            .
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
