import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";
import { SITE } from "@/lib/site";
import { SERVICE_AREA_PAGES } from "@/lib/content";
import NewsletterForm from "@/components/layout/NewsletterForm";

function BotanicalAccent() {
  return (
    <svg
      className="absolute -top-12 right-0 w-48 h-48 opacity-10 text-sage"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 20 C100 20, 140 60, 140 100 C140 140, 100 180, 100 180 C100 180, 60 140, 60 100 C60 60, 100 20, 100 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M100 40 L100 180"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M100 70 C115 55, 130 60, 130 70"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M100 100 C85 85, 70 90, 70 100"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M100 130 C115 115, 130 120, 130 130"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

/**
 * Server component. The newsletter form is a client child so the NAP block
 * stays in server-rendered HTML on every page — see NewsletterForm.tsx.
 */
export default function Footer() {
  return (
    <footer className="relative bg-bark text-stone/90 overflow-hidden">
      <BotanicalAccent />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand / Mission */}
          <div>
            <Link href="/" className="font-heading text-2xl font-semibold text-white">
              BHRT with Kim
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone/70 max-w-xs">
              Empowering women to reclaim health, vitality, and purpose through holistic
              hormone support. Your body isn&apos;t broken — it&apos;s asking for support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone/70 hover:text-sunlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn — the main internal-link surface for content pages */}
          <div>
            <h3 className="font-heading text-lg font-medium text-white mb-4">Learn</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone/70 hover:text-sunlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-medium text-white mb-4">Stay Connected</h3>
            <div className="space-y-2 text-sm text-stone/80 mb-6">
              <p>
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {SITE.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${SITE.contact.phoneE164}`}
                  className="underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {SITE.contact.phone}
                </a>
              </p>
              <p>{SITE.contact.serviceAreaLine}</p>
            </div>

            <NewsletterForm />
          </div>
        </div>

        {/*
          Service areas, linked sitewide.

          The footer previously linked only the /service-areas HUB, so each city
          page had just two inbound internal links — and `bhrt salt lake city`
          is the site's top query. Internal link depth is a crawl-priority
          signal, and "reachable from one hub only" is the profile of a page
          Google discovers but defers crawling; 19 pages sat in "Discovered –
          currently not indexed" when this was added.

          Driven from SERVICE_AREA_PAGES so a new city appears here
          automatically and the list cannot drift from the routes.

          Kept to the five real city pages with plain city-name anchors. A
          footer stuffed with every route, or with keyword anchors like "best
          BHRT Salt Lake City", is the spam version of this and would earn the
          opposite result.
        */}
        <nav
          aria-label="Service areas"
          className="mt-12 pt-8 border-t border-stone/10"
        >
          <h3 className="font-heading text-lg font-medium text-white mb-3">
            Serving Utah
          </h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SERVICE_AREA_PAGES.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/${area.slug}`}
                  className="text-sm text-stone/70 hover:text-sunlight transition-colors"
                >
                  {area.city}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="text-sm text-stone/70 underline underline-offset-4 hover:text-sunlight transition-colors"
              >
                All service areas
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sitewide medical disclaimer — required on every page. */}
        <div className="mt-12 pt-8 border-t border-stone/10 space-y-4">
          {/*
            Was text-xs at text-stone/50 — 12px at roughly 3.95:1 against bark,
            which fails WCAG AA. The sitewide medical disclaimer was the least
            readable text on every page, which is precisely backwards. See
            docs/09-DESIGN-SYSTEM.md on opacity variants.
          */}
          <p className="text-sm leading-relaxed text-stone/75 max-w-3xl">
            The content on this site is for educational purposes only and is not
            medical advice. Using this site does not create a provider-patient
            relationship. Always consult a qualified healthcare provider about
            your own health.{" "}
            <Link
              href="/disclaimer"
              className="underline underline-offset-2 hover:text-stone/80 transition-colors"
            >
              Read the full disclaimer
            </Link>
            .
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-stone/70">
            <p>&copy; {new Date().getFullYear()} BHRT with Kim. All rights reserved.</p>
            <nav aria-label="Legal" className="flex gap-4">
              <Link href="/privacy" className="hover:text-stone/80 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="hover:text-stone/80 transition-colors">
                Medical Disclaimer
              </Link>
              <Link href="/contact" className="hover:text-stone/80 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
