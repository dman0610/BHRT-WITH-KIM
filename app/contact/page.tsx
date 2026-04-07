import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { FOOTER_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollAnimator from "@/components/layout/ScrollAnimator";

export const metadata: Metadata = {
  title: "Contact — BHRT with Kim",
  description:
    "Ready to start your journey? Reach out to Kim for a consultation about holistic hormone health and bioidentical hormone therapy.",
};

export default function ContactPage() {
  return (
    <>
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
                  {/* TODO: Replace with Kim's real contact info */}
                  <div className="flex items-start gap-3">
                    <Mail className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Email</p>
                      <p className="text-clay">{FOOTER_LINKS.contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Phone</p>
                      <p className="text-clay">{FOOTER_LINKS.contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="size-5 text-forest mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-bark">Location</p>
                      <p className="text-clay">{FOOTER_LINKS.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-peach/30 rounded-3xl p-6 md:p-8">
                <h3 className="font-heading text-xl font-medium text-bark mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-clay text-sm leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-forest font-bold shrink-0">1.</span>
                    Kim reviews your message within 1-2 business days
                  </li>
                  <li className="flex gap-2">
                    <span className="text-forest font-bold shrink-0">2.</span>
                    A brief discovery call to understand your needs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-forest font-bold shrink-0">3.</span>
                    A personalized plan tailored to your health goals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              Prefer to Book Directly?
            </h2>
            <p className="mt-4 text-clay text-lg">
              Skip the form and schedule your consultation directly.
            </p>
            <div className="mt-8">
              <a
                href="sms:+18015730606"
                className="inline-flex flex-col items-center gap-1 group"
                aria-label="Text Kim at 801-573-0606"
              >
                <span className="text-xl font-semibold text-forest group-hover:text-moss transition-colors underline underline-offset-4">
                  Text Kim
                </span>
                <span className="text-clay text-lg">801-573-0606</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
