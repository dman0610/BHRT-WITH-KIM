import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { breadcrumbSchema, profilePageSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import ScrollAnimator from "@/components/layout/ScrollAnimator";
import { SeedMotif } from "@/components/ui/BotanicalDecor";

export const metadata: Metadata = {
  title: "Meet Kim Yadon, FNP-C",
  description:
    "Kim Yadon, FNP-C: board-certified family nurse practitioner (MSN), CDCES, with BHRT training through WorldLink Medical. Virtual hormone care across Utah.",
  alternates: { canonical: "/about" },
};

/** Completed training only — an unfinished course is not published. */
const training = SITE.provider.hormoneTraining.filter((t) => t.completed);

/** "the American Association of Nurse Practitioners, … and Rachel Rubin, MD" */
const others = [...new Set(training.map((t) => t.provider))].filter(
  (p) => p !== "WorldLink Medical"
);
const trainingProviders =
  others.length > 1
    ? `${others.slice(0, -1).join(", ")} and ${others[others.length - 1]}`
    : others.join("");

const [msn, bsn, adn] = SITE.provider.education;
const [cdces] = SITE.provider.certifications;

export default function AboutPage() {
  return (
    <>
      {/*
        The Person entity itself is emitted sitewide from the root layout and
        linked by @id, so this page only adds its breadcrumb trail.
      */}
      {/*
        ProfilePage declares Kim the subject of this page. The Person entity
        itself comes from the root layout; this is what connects the two.
      */}
      <JsonLd
        schema={[
          profilePageSchema(),
          breadcrumbSchema([{ name: "About Kim", path: "/about" }]),
        ]}
      />

      <ScrollAnimator />

      {/* Hero Banner */}
      <section className="bg-forest pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {/*
            Full name and credential in the H1. "Meet Kim" alone gave the page
            that most needs to identify her an H1 matching thousands of Kims.
          */}
          <h1 className="font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
            Meet {SITE.provider.fullName}
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            {SITE.entityStatement}
          </p>
          <p className="mt-4 text-base text-white/75 max-w-2xl mx-auto leading-relaxed">
            The woman behind the mission — and the reason this practice exists.
          </p>
        </div>
      </section>

      {/* Kim's Story */}
      <section className="relative bg-stone py-20 md:py-28 overflow-hidden">
        <SeedMotif className="absolute bottom-8 left-4 w-16 h-24 text-sage opacity-[0.06] hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll grid gap-12 md:grid-cols-2 items-center">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/kim-portrait.jpg"
                alt={SITE.provider.fullName}
                width={600}
                height={750}
                className="w-full h-full object-cover object-top"
                /*
                  Deliberately NOT preloaded. This sits in the second section,
                  below the fold — `priority` here told the browser to race it
                  against the actual above-the-fold content for bandwidth.
                  `priority` is also deprecated in Next 16; see HeroFlyer.tsx
                  for the LCP image that genuinely wants the priority hint.
                */
                sizes="(min-width: 768px) 600px, 100vw"
              />
            </div>

            <div>
              <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-clay-text text-lg leading-relaxed">
                <p>
                  I believe women are a powerful force for good. My purpose is to support women
                  during life&apos;s changes so they can feel good, live the life they want to
                  live, nourish relationships, fulfill their purpose and continue to brighten
                  the world.
                </p>
                <p>
                  I have experienced the challenges and discomfort due to peri-menopause and
                  after seeing several doctors, having multiple procedures and suffering for
                  years with joint pain and insomnia, I was amazed at the difference a
                  combination of improved lifestyle choices and hormone replacement therapy
                  could have. Since then, I have been on a mission to educate myself so I
                  could then help and guide other women on their own journey.
                </p>
                <p>
                  To help women navigate the challenges of fluctuating hormones it requires
                  looking at the whole picture — your hormones, your lifestyle, your stress,
                  your sleep, your nutrition. It means not guessing, but testing. And it means
                  building a plan that fits your life, not a one-size-fits-all protocol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach / Philosophy */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              How does Kim approach care?
            </h2>
            <p className="mt-4 text-clay-text text-lg">
              In three steps, and hormones are the last of them.
            </p>
          </div>

          <div className="animate-on-scroll stagger-2 grid gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl bg-mist">
              <div className="font-heading text-5xl font-semibold text-forest mb-3">1</div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                Listen &amp; Test
              </h3>
              <p className="text-clay-text text-sm leading-relaxed">
                Care starts with a full history, followed by lab testing of
                hormones and thyroid function.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-lavender/30">
              <div className="font-heading text-5xl font-semibold text-forest mb-3">2</div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                Lifestyle First
              </h3>
              <p className="text-clay-text text-sm leading-relaxed">
                Before any prescription, the plan addresses the foundations:
                sleep, nutrition, movement, stress, and detox support.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-peach/30">
              <div className="font-heading text-5xl font-semibold text-forest mb-3">3</div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                Targeted BHRT
              </h3>
              <p className="text-clay-text text-sm leading-relaxed">
                When hormone therapy is appropriate, Kim prescribes bioidentical
                hormones, then monitors and adjusts the dose over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
        Training and education, supplied by Kim 2026-11-05 and rendered from
        lib/site.ts. Before this the page carried four undated strings in a grid
        — Google crawled /about on 2026-09-22 and declined to index it, and
        assistants reported they could not find her WorldLink training. Dates,
        institutions and providers are what make a credential checkable.

        Headings are questions, and each section opens with a sentence that
        answers it outright: the passage shape search and AI answers lift.
      */}
      <section id="training" className="bg-mist py-20 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl mb-4">
              What training does Kim have in hormone therapy?
            </h2>
            <p className="text-clay-text text-lg leading-relaxed mb-8">
              {SITE.provider.fullName} has completed bioidentical hormone therapy
              training through WorldLink Medical&apos;s Optimal Medicine Training
              series, along with menopause and hormone education from{" "}
              {trainingProviders}. These are continuing-education programs,
              completed on top of her national board certification as a family
              nurse practitioner.
            </p>
            <ul className="divide-y divide-stone rounded-2xl bg-white px-6">
              {training.map((t) => (
                <li key={t.title} className="py-4 sm:grid sm:grid-cols-4 sm:gap-4">
                  <span className="text-sm font-medium text-forest">{t.date}</span>
                  <span className="mt-1 block text-clay-text sm:col-span-3 sm:mt-0">
                    <span className="font-medium text-bark">{t.title}</span>
                    <span className="block text-sm">{t.provider}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="bg-stone py-20 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl mb-4">
              Where did Kim study nursing?
            </h2>
            <p className="text-clay-text text-lg leading-relaxed mb-8">
              Kim earned her Master of Science in Nursing as a family nurse
              practitioner from {msn.institution} in {msn.year}, after nursing
              degrees from {bsn.institution} and {adn.institution}. She has
              also held the {cdces.name} credential since {cdces.since}.
            </p>
            <ul className="divide-y divide-bark/10 rounded-2xl bg-white px-6">
              {SITE.provider.education.map((e) => (
                <li key={e.credential} className="py-4 sm:grid sm:grid-cols-4 sm:gap-4">
                  <span className="text-sm font-medium text-forest">{e.year}</span>
                  <span className="mt-1 block text-clay-text sm:col-span-3 sm:mt-0">
                    <span className="font-medium text-bark">{e.credential}</span>
                    <span className="block text-sm">{e.institution}</span>
                  </span>
                </li>
              ))}
              {SITE.provider.certifications.map((c) => (
                <li key={c.name} className="py-4 sm:grid sm:grid-cols-4 sm:gap-4">
                  <span className="text-sm font-medium text-forest">{c.since}–present</span>
                  <span className="mt-1 block text-clay-text sm:col-span-3 sm:mt-0">
                    <span className="font-medium text-bark">{c.name}</span>
                    <span className="block text-sm">{c.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/*
        Licensure & verification. The NPI and licence number were published
        only in JSON-LD until 2026-09-22 — schema describing content the page
        did not show, and nothing for a patient to click. On a health site the
        ability to check a provider independently is the trust signal, for
        people and for search systems alike.

        Wording note: APRN is the licence CATEGORY and appears here only as
        such. It is never a post-nominal on her name — see lib/site.ts.
      */}
      <section id="verify" className="bg-white py-20 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl mb-4 text-center">
              How can I verify Kim&apos;s license?
            </h2>
            <p className="text-clay-text text-lg leading-relaxed text-center mb-10">
              Kim&apos;s license and National Provider Identifier are public
              records. Both can be checked directly with the agencies that issue
              them — no need to take this website&apos;s word for it.
            </p>
            <dl className="divide-y divide-stone rounded-2xl bg-mist px-6">
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-bark">Board certification</dt>
                <dd className="mt-1 text-clay-text sm:col-span-2 sm:mt-0">
                  Family Nurse Practitioner — Certified ({SITE.provider.postNominal})
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-bark">
                  {SITE.provider.licenseState} license
                </dt>
                <dd className="mt-1 text-clay-text sm:col-span-2 sm:mt-0">
                  Advanced practice registered nurse,{" "}
                  <span className="whitespace-nowrap">#{SITE.provider.licenseNumber}</span>.{" "}
                  <a
                    href={SITE.provider.licenseLookupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
                  >
                    Search the Utah license lookup
                  </a>
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-bark">NPI</dt>
                <dd className="mt-1 text-clay-text sm:col-span-2 sm:mt-0">
                  {SITE.provider.npi}.{" "}
                  <a
                    href={SITE.provider.npiRegistryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
                  >
                    View the record in the national NPI registry
                  </a>
                </dd>
              </div>
              {SITE.provider.certifications.map((c) => (
                <div key={c.name} className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-bark">CDCES</dt>
                  <dd className="mt-1 text-clay-text sm:col-span-2 sm:mt-0">
                    Certified since {c.since}.{" "}
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
                    >
                      Verify with the certification board
                    </a>
                  </dd>
                </div>
              ))}
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-bark">Where Kim practices</dt>
                <dd className="mt-1 text-clay-text sm:col-span-2 sm:mt-0">
                  Based in {SITE.contact.city}, {SITE.contact.state}. Every visit
                  is virtual, and the {SITE.provider.licenseState} license covers
                  patients anywhere in the state.{" "}
                  <Link
                    href="/service-areas"
                    className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
                  >
                    Areas served
                  </Link>
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-bark">Payment</dt>
                <dd className="mt-1 text-clay-text sm:col-span-2 sm:mt-0">
                  {SITE.contact.insurance}{" "}
                  <Link
                    href="/services#pricing"
                    className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
                  >
                    Published pricing
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA at bottom */}
      <section className="bg-lavender/30 py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-on-scroll">
            <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-clay-text text-lg max-w-xl mx-auto">
              I&apos;d love to hear your story and explore how we can work together
              to help you feel like yourself again.
            </p>
            <Link href="/book" className="inline-block mt-8">
              <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
