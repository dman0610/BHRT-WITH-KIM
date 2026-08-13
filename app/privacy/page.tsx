import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What information this site collects, why, how long it is kept, and how to have it removed. Contact form, hormone assessment, and analytics explained.",
  alternates: { canonical: "/privacy" },
};

/**
 * Describes what the site does TODAY.
 *
 * A privacy policy describing collection that isn't happening is as wrong as
 * one omitting collection that is — so the advertising section is written
 * conditionally ("if we are running ads"), which is accurate both before and
 * after the pixel is switched on. That is deliberate: the alternative is a
 * policy that silently becomes false the moment an env var is set in Vercel,
 * with nothing in the deploy to prompt anyone to update it.
 *
 * Re-read this page whenever an env var in .env.example changes.
 */
export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy" }])}
      />

      <section className="bg-forest pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-stone py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-6 md:p-10 shadow-sm space-y-8 text-clay-text leading-relaxed">
            <p className="text-sm text-clay-text">Last updated: August 10, 2026</p>

            <p>
              This policy explains what {SITE.name} collects through this
              website, why, and what you can do about it. It covers the website
              only — information you share during a consultation is protected
              health information and is handled under separate healthcare
              privacy obligations.
            </p>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                What we collect
              </h2>

              <h3 className="font-medium text-bark mt-5 mb-1">Contact form</h3>
              <p>
                Your name, email address, phone number if you provide one, the
                symptoms you check, your preferred contact method, how you heard
                about us if you tell us, and your message. This is used to
                respond to you and goes to our inbox — not to any advertising
                platform.
              </p>

              <h3 className="font-medium text-bark mt-5 mb-1">
                Newsletter signup
              </h3>
              <p>
                Your email address, used to send you updates you asked for. You
                can unsubscribe at any time.
              </p>

              <h3 className="font-medium text-bark mt-5 mb-1">
                Hormone assessment
              </h3>
              <p>
                Your answers stay in your browser and are used to display your
                results. Showing your results never requires an email address.
              </p>
              <p className="mt-3">
                If you choose to have a copy emailed to you and tick the consent
                box, we send your email address, first name, and a summary of
                your results — the overall pattern your answers point to, which
                topics were most relevant, and where you said you are in the
                menopause transition — to our email provider so we can send it.
                We also record the date you consented and, if you arrived from
                an ad or link, which one.
              </p>
              <p className="mt-3">
                <strong className="text-bark">
                  None of this is ever shared with advertising platforms.
                </strong>{" "}
                If you skip the email step, nothing about your answers leaves
                your browser at all.
              </p>

              <h3 className="font-medium text-bark mt-5 mb-1">
                Analytics and server logs
              </h3>
              <p>
                We use Vercel Analytics to collect aggregate information about
                which pages are visited and how quickly the site loads. It does
                not use cookies and does not identify you personally. Our
                hosting provider keeps standard server logs, including IP
                addresses, for security and reliability.
              </p>

              <h3 className="font-medium text-bark mt-5 mb-1">
                Advertising measurement
              </h3>
              <p>
                If we are running ads, this site may load the Meta (Facebook)
                pixel, which uses cookies to measure whether an ad led to a
                visit. When it is loaded, it records that a page was visited and
                whether you started the assessment, finished it, asked for your
                results by email, or clicked toward booking.
              </p>
              <p className="mt-3">
                <strong className="text-bark">
                  It never receives your answers, your symptoms, or your
                  results.
                </strong>{" "}
                We also deliberately do not load it at all on our symptom pages,
                because the address of those pages would itself reveal what you
                were reading about.
              </p>
              <p className="mt-3">
                Most browsers let you block these cookies in their settings, and
                Meta provides its own ad preference controls. Blocking them does
                not affect anything on this site.
              </p>

              <h3 className="font-medium text-bark mt-5 mb-1">Booking</h3>
              <p>
                Appointments are booked through Healthie, which is embedded on
                our booking pages. Information you enter there is collected by
                Healthie under their own privacy policy, not by this website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                What we never do
              </h2>
              <ul className="space-y-2 list-disc list-inside marker:text-forest">
                <li>Sell your information</li>
                <li>
                  Share your assessment answers or symptom selections with
                  advertising platforms
                </li>
                <li>Send you email you did not ask for</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Who else is involved
              </h2>
              <p>We use a small number of services to run this site:</p>
              <ul className="mt-3 space-y-2 list-disc list-inside marker:text-forest">
                <li>
                  <strong className="text-bark">Vercel</strong> — hosting and
                  cookieless, aggregate analytics
                </li>
                <li>
                  <strong className="text-bark">Meta</strong> — advertising
                  measurement, only while ads are running, and never on our
                  symptom pages
                </li>
                <li>
                  <strong className="text-bark">Web3Forms</strong> — delivers
                  contact form and newsletter submissions to our inbox
                </li>
                <li>
                  <strong className="text-bark">MailerLite</strong> — sends the
                  assessment results and follow-up emails, if you asked for them
                </li>
                <li>
                  <strong className="text-bark">Healthie</strong> — appointment
                  booking and scheduling
                </li>
                <li>
                  <strong className="text-bark">LabCorp</strong> — laboratory
                  testing, if testing is part of your care. LabCorp collects
                  your information directly under its own policies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                How long we keep it
              </h2>
              <p>
                Contact form messages are kept as long as needed to respond and
                maintain a record of the conversation. Newsletter subscriptions
                are kept until you unsubscribe. Assessment answers you did not
                submit are discarded as soon as you close or reload the page.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Your choices
              </h2>
              <p>
                You can ask us to tell you what we hold about you, correct it,
                or delete it. Email{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium break-all"
                >
                  {SITE.contact.email}
                </a>{" "}
                and we will take care of it. Every marketing email includes an
                unsubscribe link that works immediately.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Children
              </h2>
              <p>
                This site is intended for adults and is not directed at anyone
                under 18. We do not knowingly collect information from children.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Changes
              </h2>
              <p>
                If this policy changes, the date at the top will be updated.
                Material changes will be noted on this page.
              </p>
            </div>

            <div className="border-t border-bark/10 pt-8">
              <p>
                Questions? Email{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium break-all"
                >
                  {SITE.contact.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${SITE.contact.phoneE164}`}
                  className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
                >
                  {SITE.contact.phone}
                </a>
                . See also our{" "}
                <Link
                  href="/disclaimer"
                  className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
                >
                  Medical Disclaimer
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
