import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Content on this site is educational and does not create a physician-patient relationship. Always consult a qualified provider about your own health.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Medical Disclaimer", path: "/disclaimer" },
        ])}
      />

      <section className="bg-forest pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl">
            Medical Disclaimer
          </h1>
        </div>
      </section>

      <section className="bg-stone py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-6 md:p-10 shadow-sm space-y-8 text-clay-text leading-relaxed">
            <p className="text-sm text-clay-text">Last updated: August 10, 2026</p>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                This site is educational
              </h2>
              <p>
                Everything published on {SITE.url.replace("https://", "")} —
                including articles, symptom explanations, the hormone
                assessment, and any answers in the FAQ — is provided for general
                educational purposes. It is not medical advice, and it is not a
                substitute for evaluation by a qualified healthcare provider who
                knows your history.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                No physician-patient relationship is formed
              </h2>
              <p>
                Reading this site, completing the assessment, subscribing to
                emails, or contacting the practice does not create a
                physician-patient or provider-patient relationship. That
                relationship begins only after a consultation in which{" "}
                {SITE.provider.fullName} evaluates you directly and agrees to
                provide care.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                The assessment is not a diagnosis
              </h2>
              <p>
                The hormone assessment on this site is an educational tool that
                reflects the answers you provide. It does not diagnose any
                condition, it is not a screening test, and its results should
                not be used to start, stop, or change any treatment. Only a
                qualified provider who has evaluated you can diagnose a medical
                condition.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Individual results vary
              </h2>
              <p>
                Hormone health is highly individual. Nothing on this site
                guarantees any particular outcome, and no timeline for
                improvement is promised or implied. What is appropriate for one
                person may be inappropriate or unsafe for another.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Do not delay care
              </h2>
              <p>
                Never disregard professional medical advice or delay seeking it
                because of something you read here.{" "}
                <strong className="text-bark">
                  If you think you may have a medical emergency, call 911 or go
                  to your nearest emergency department immediately.
                </strong>
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Scope of practice
              </h2>
              <p>
                {SITE.provider.fullName} is licensed in {SITE.contact.state} and
                provides care to patients located in {SITE.contact.state} only.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-bark mb-3">
                Outside links
              </h2>
              <p>
                This site links to outside sources such as PubMed, The Menopause
                Society, and the Mayo Clinic to support educational claims.
                Those organizations are not affiliated with this practice and we
                are not responsible for their content.
              </p>
            </div>

            <div className="border-t border-bark/10 pt-8">
              <p>
                Questions about this disclaimer?{" "}
                <Link
                  href="/contact"
                  className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
                >
                  Get in touch
                </Link>
                . See also our{" "}
                <Link
                  href="/privacy"
                  className="text-forest underline underline-offset-4 hover:text-moss transition-colors font-medium"
                >
                  Privacy Policy
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
