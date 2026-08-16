import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, OFFERINGS, PAID_OFFERINGS, type OfferingKey } from "@/lib/site";
import BookingEmbed from "@/components/sections/BookingEmbed";
import HowCareWorks from "@/components/sections/HowCareWorks";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ offering: string }> };

/** Resolve a URL slug back to its offering key. Free consult lives at /book. */
function resolveOffering(slug: string): OfferingKey | null {
  const entry = (Object.keys(OFFERINGS) as OfferingKey[]).find(
    (key) => OFFERINGS[key].slug === slug && OFFERINGS[key].slug !== ""
  );
  return entry ?? null;
}

export function generateStaticParams() {
  return PAID_OFFERINGS.map((offering) => ({ offering: offering.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = resolveOffering((await params).offering);
  if (!key) return {};

  const { label, metaDescription, slug } = OFFERINGS[key];
  return {
    title: `Book ${label}`,
    description: metaDescription,
    alternates: { canonical: `/book/${slug}` },
  };
}

export default async function BookOfferingPage({ params }: Props) {
  const key = resolveOffering((await params).offering);
  if (!key) notFound();

  const { label, blurb, durationMinutes, price, slug, includes } = OFFERINGS[key];

  return (
    <>
      {/*
        `price` is null for the follow-up visit, which has no documented figure
        — serviceSchema omits the Offer entirely rather than inferring one from
        the $200 per-visit rate. A wrong price in schema gets quoted back by AI
        assistants, which is worse than no price at all.
      */}
      <JsonLd
        schema={[
          serviceSchema({
            name: label,
            description: blurb,
            ...(price !== null && { price }),
            path: `/book/${slug}`,
          }),
          breadcrumbSchema([
            { name: "Book a Consultation", path: "/book" },
            { name: label, path: `/book/${slug}` },
          ]),
        ]}
      />
      <ScrollAnimator />

      <section className="bg-forest pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            {label}
          </h1>
          {durationMinutes && (
            <p className="mt-4 text-sm font-medium tracking-[0.15em] uppercase text-white/70">
              About {durationMinutes} minutes
            </p>
          )}
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {blurb}
          </p>
        </div>
      </section>

      {/*
        Every line here traces to docs/00-BUSINESS-FACTS.md. These pages are
        the commercial end of the funnel and carried almost no server-rendered
        content — a hero, a shared process block and an iframe — which made
        them thin for search and near-invisible to AI retrieval.
      */}
      <section className="bg-stone py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="mb-4 font-heading text-2xl font-semibold text-bark sm:text-3xl">
              What this visit covers
            </h2>
            <ul className="space-y-2">
              {includes.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed text-clay-text">
                  <span className="shrink-0 font-bold text-forest">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 leading-relaxed text-clay-text">
              {price !== null && (
                <>
                  This visit is{" "}
                  <span className="font-medium text-bark">
                    {price === 0 ? "free" : `$${price.toLocaleString()}`}
                  </span>
                  .{" "}
                </>
              )}
              {SITE.labDisclosure} Medications are paid for at the pharmacy you
              choose. {SITE.contact.insurance}
            </p>
          </div>

          <div className="animate-on-scroll">
            <HowCareWorks />
          </div>
        </div>
      </section>

      <section id="booking" className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <BookingEmbed
            offering={key}
            title="Choose a Time"
            description="Select a time that works for you — secure online booking."
          />
          <p className="mt-6 text-center text-sm text-clay-text">
            Medications and lab fees not included. {SITE.labDisclosure}
          </p>
        </div>
      </section>

      <section className="bg-stone py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-semibold text-bark">
            Not sure this is the right fit?
          </h2>
          <p className="mt-3 text-clay-text leading-relaxed">
            Start with a free phone consultation instead — no cost, and a chance
            to ask questions before committing to anything.
          </p>
          <Link
            href="/book"
            className="mt-6 inline-block rounded-full bg-moss px-8 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-forest"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
