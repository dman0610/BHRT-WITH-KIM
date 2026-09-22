import Link from "next/link";
import { OFFERINGS, SITE } from "@/lib/site";
import { SERVICE_AREA_PAGES, areaSlug } from "@/lib/content";
import HowCareWorks from "@/components/sections/HowCareWorks";

/**
 * The homepage's factual core: who, what it costs, where, and how.
 *
 * Added 2026-09-22. Before this the homepage — the page the Google Business
 * Profile links to, and the one Search Console shows earning impressions for
 * "bhrt utah" and "bhrt salt lake city" — never named Kim Yadon in visible text,
 * never mentioned South Jordan or any county outside the footer, and published
 * no price. Every answer a searcher at that stage actually wants lived one
 * click away, and none of it was on the page they landed on.
 *
 * Server-rendered and built entirely from lib/site.ts, so nothing here can
 * drift from /services, /llms.txt or the schema. Headings are questions and
 * each block opens with a direct answer — the passage shape AI answers lift.
 */
export default function PracticeFacts() {
  const { provider, contact } = SITE;
  const { freeConsult, initial, comprehensive } = OFFERINGS;

  return (
    <section id="how-it-works" className="bg-mist py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
            How does virtual hormone care with Kim work?
          </h2>
          <p className="mt-4 text-clay-text text-lg leading-relaxed">
            Kim is based in {contact.city} and sees patients anywhere in{" "}
            {contact.state} by virtual visit — there is no office to drive to.
            The only in-person step is a blood draw at a{" "}
            {SITE.process.labProvider} location the patient chooses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="animate-on-scroll stagger-1 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-bark mb-3">
              Who provides the care?
            </h3>
            <p className="text-clay-text leading-relaxed">
              {provider.fullName}, a board-certified family nurse practitioner
              trained in BHRT through Worldlink Medical. Her {provider.licenseState}{" "}
              license (<span className="whitespace-nowrap">#{provider.licenseNumber}</span>) and NPI ({provider.npi}) are
              public records anyone can check.
            </p>
            <Link
              href="/about#verify"
              className="mt-4 inline-block text-sm font-medium text-forest underline underline-offset-4 hover:text-moss transition-colors"
            >
              Kim&apos;s credentials and how to verify them
            </Link>
          </div>

          <div className="animate-on-scroll stagger-2 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-bark mb-3">
              What does it cost?
            </h3>
            <p className="text-clay-text leading-relaxed">
              The first step is a free phone consultation of about{" "}
              {freeConsult.durationMinutes} minutes. An initial consultation is $
              {initial.price} for about {initial.durationMinutes} minutes, and the
              Comprehensive Package is ${comprehensive.price} for five visits over
              roughly a year plus four coaching sessions.
            </p>
            <p className="mt-3 text-sm text-clay-text leading-relaxed">
              {contact.insurance} Medications and lab fees are not included.
            </p>
            <Link
              href="/bhrt-cost-utah"
              className="mt-4 inline-block text-sm font-medium text-forest underline underline-offset-4 hover:text-moss transition-colors"
            >
              What BHRT costs in Utah, in full
            </Link>
          </div>

          <div className="animate-on-scroll stagger-3 rounded-2xl bg-white p-6 md:p-8 shadow-sm">
            <h3 className="font-heading text-xl font-semibold text-bark mb-3">
              Does Kim see patients in my area?
            </h3>
            <p className="text-clay-text leading-relaxed">
              Yes, anywhere in {contact.state}. Kim is licensed statewide and
              every visit is virtual, so a patient in Ogden, Provo, St. George or
              Logan follows exactly the same process as one in {contact.city}.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREA_PAGES.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${areaSlug(area)}`}
                    className="inline-block rounded-full border border-forest/25 bg-stone px-3 py-1.5 text-sm text-forest transition-colors hover:bg-forest hover:text-white"
                  >
                    BHRT in {area.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="inline-block rounded-full border border-forest/25 bg-stone px-3 py-1.5 text-sm text-forest transition-colors hover:bg-forest hover:text-white"
                >
                  All of Utah
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 animate-on-scroll">
          <HowCareWorks heading="What happens after the free call?" />
        </div>

        <p className="mt-10 text-center animate-on-scroll">
          <Link
            href={SITE.booking.path}
            className="inline-block bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md"
          >
            Book the free {freeConsult.durationMinutes}-minute call
          </Link>
        </p>
      </div>
    </section>
  );
}
