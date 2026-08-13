import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OFFERINGS } from "@/lib/site";

/**
 * Branded 404.
 *
 * Reachable today: `notFound()` is called from /symptoms/[slug],
 * /service-areas/[city], /resources/[slug] and /book/[offering]. Before this
 * page existed, a mistyped or stale URL rendered Next's bare default — no
 * navigation, no branding, no route back.
 *
 * That matters more here than on most sites. The whole strategy is inbound
 * links and AI citations, and both go stale: an assistant quoting a URL from a
 * cached crawl, a directory listing an old path, someone retyping a symptom
 * slug. Every one of those arrivals is a person looking for hormone care, and
 * a dead end loses them.
 *
 * So this is a routing surface, not an error page: it offers the three things
 * someone who mistyped a URL was most likely trying to reach.
 */
/*
  No `robots` here on purpose — Next already emits `noindex` for not-found and
  sends a real 404 status. Adding our own produced a duplicate robots meta tag.
*/
export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-stone pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-6xl font-semibold text-sage sm:text-7xl">
          404
        </p>

        <h1 className="mt-4 font-heading text-3xl font-semibold text-bark sm:text-4xl">
          We couldn&apos;t find that page
        </h1>

        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-clay-text">
          The link may be out of date, or the address may have a typo. Here are
          the pages people are usually looking for.
        </p>

        <div className="mt-10 grid gap-3 text-left sm:grid-cols-3">
          {[
            {
              href: "/symptoms",
              title: "Symptoms",
              blurb: "Hot flashes, sleep, fatigue, mood and more",
            },
            {
              href: "/services",
              title: "Services & Pricing",
              blurb: "What’s offered, and what it costs",
            },
            {
              href: "/faq",
              title: "Common Questions",
              blurb: "How virtual hormone care actually works",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <h2 className="font-heading text-lg font-medium text-bark">
                {card.title}
              </h2>
              <p className="mt-1 leading-relaxed text-clay-text">{card.blurb}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/book" className="inline-block">
            <Button className="rounded-full bg-moss px-8 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-forest">
              Book a Free {OFFERINGS.freeConsult.durationMinutes}-Minute Call
            </Button>
          </Link>
        </div>

        <p className="mt-8">
          <Link
            href="/"
            className="text-forest underline underline-offset-4 transition-colors hover:text-moss"
          >
            Return to the homepage
          </Link>
        </p>
      </div>
    </section>
  );
}
