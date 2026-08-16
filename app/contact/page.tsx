import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, typedPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact & Book a Virtual Visit",
  description:
    "Contact Kim Yadon, FNP-C about bioidentical hormone therapy in Utah, or book a free 15-minute phone consultation. All visits are virtual, statewide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={[
          typedPageSchema({
            type: "ContactPage",
            name: "Contact BHRT with Kim",
            description:
              "Contact Kim Yadon, FNP-C about bioidentical hormone therapy in Utah, or book a free 15-minute phone consultation.",
            path: "/contact",
          }),
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
        ]}
      />
      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Let&apos;s Start the Conversation
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Whether you have questions, want to learn more, or are ready to book a
            consultation — I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-stone py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-10 shadow-sm">
              <h2 className="font-heading text-2xl font-semibold text-bark mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-lavender/30 rounded-3xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-medium text-bark mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Email</p>
                      <a
                        href={`mailto:${SITE.contact.email}`}
                        className="text-clay-text underline-offset-4 hover:text-forest hover:underline transition-colors break-all"
                      >
                        {SITE.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Phone</p>
                      <a
                        href={`tel:${SITE.contact.phoneE164}`}
                        className="text-clay-text underline-offset-4 hover:text-forest hover:underline transition-colors"
                      >
                        {SITE.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Location</p>
                      <p className="text-clay-text">
                        {SITE.contact.serviceAreaLine}
                      </p>
                    </div>
                  </div>
                  {/*
                    The caveat is not optional. Kim was explicit that these are
                    reachability hours, not appointment slots — someone who
                    books expecting a 4:30pm Friday visit because the site
                    implied it has a bad first experience before paying.
                  */}
                  <div className="flex items-start gap-3">
                    <Clock className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Hours</p>
                      <p className="text-clay-text">{SITE.contact.hours.label}</p>
                      <p className="mt-0.5 text-sm text-clay-text">
                        {SITE.contact.hours.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-peach/30 rounded-3xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-medium text-bark mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-clay-text leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-forest font-bold shrink-0">1.</span>
                    A free phone consultation to talk through what you&apos;ve
                    been experiencing and ask questions
                  </li>
                  <li className="flex gap-2">
                    <span className="text-forest font-bold shrink-0">2.</span>
                    A lab order at no charge, if testing makes sense as a next
                    step
                  </li>
                  <li className="flex gap-2">
                    <span className="text-forest font-bold shrink-0">3.</span>
                    A follow-up visit to review results and build a plan
                    together
                  </li>
                </ul>
                <Link
                  href="/book"
                  className="mt-5 inline-block rounded-full bg-moss px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Booking lives on /book (free consultation) and /book/<slug> for paid
        offerings. This anchor is kept so existing /contact#booking links from
        older pages, print material, and search results still land somewhere
        sensible rather than 404ing mid-page.
      */}
      <section id="booking" className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              Book Your Virtual Visit
            </h2>
            <p className="mt-4 text-clay-text text-lg leading-relaxed">
              Start with a free phone consultation — no cost, and a chance to
              ask questions before deciding on anything.
            </p>
            <Link href="/book" className="inline-block mt-8">
              <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
                Book a Free Consultation
              </Button>
            </Link>
            <p className="mt-6 text-sm text-clay-text">
              Already know what you need?{" "}
              <Link
                href="/services"
                className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
              >
                View packages and pricing
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
