import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { SITE } from "@/lib/site";

const BHRT_BENEFITS = [
  { label: "Hot Flashes & Night Sweats", icon: "sun" },
  { label: "Sleep & Energy", icon: "moon" },
  { label: "Mood & Focus", icon: "brain" },
  { label: "Metabolism & Weight Management", icon: "scale" },
  { label: "Overall Wellness & Vitality", icon: "flower" },
] as const;

export default function HeroFlyer() {
  return (
    <>
      <section className="bg-stone overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12">

          {/* Leaf badge + tagline */}
          <div className="flex items-center gap-3 mb-8">
            <div className="shrink-0 border-2 border-forest rounded-full p-2.5">
              <Icon name="leaf" className="size-5 text-forest" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-bark/70 uppercase">
                Balance. Restore. Thrive.
              </p>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-px w-8 bg-bark/25" />
                <Icon name="leaf" className="size-3 text-forest opacity-50" />
                <div className="h-px w-8 bg-bark/25" />
              </div>
            </div>
          </div>

          {/* Two-column grid — image first on mobile, right on desktop */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">

            {/* Image — top on mobile, right column on desktop */}
            <div className="relative order-first md:order-last">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg max-w-xs mx-auto md:max-w-none">
                <Image
                  src="/kim-hero.jpg"
                  // Her full professional name, not a description of the photo.
                  // Doubles as an entity signal — see docs/04-AI-VISIBILITY.md.
                  alt={SITE.provider.fullName}
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-top"
                  priority
                />
                {/* Badge — inside image on mobile so it never overflows */}
                <div className="absolute bottom-4 right-4 bg-forest text-white rounded-full w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 shadow-xl">
                  <span className="text-[8px] md:text-[9px] font-medium tracking-wider uppercase leading-tight">Kim is</span>
                  <span className="font-heading text-sm md:text-lg italic font-semibold leading-snug">open now</span>
                  <span className="text-[8px] md:text-[9px] font-medium tracking-wider uppercase leading-tight">for</span>
                  <span className="text-[9px] md:text-xs font-bold tracking-wide leading-tight mt-0.5">VIRTUAL VISITS!</span>
                </div>
              </div>
            </div>

            {/* Text content — bottom on mobile, left column on desktop */}
            <div className="order-last md:order-first">
              {/*
                Reads "Bioidentical Hormone Replacement Therapy in Utah".
                The last line is set smaller so the stacked flyer look survives,
                but it is visible text and part of the accessible name — the H1
                previously omitted both the treatment word and the geography,
                which are the two terms the page is meant to rank for. Nothing
                here is hidden or offscreen; visible text and accessible name
                are identical by construction.
              */}
              <h1 className="font-heading leading-tight">
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold text-bark tracking-tight">
                  BIOIDENTICAL<br />HORMONE
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest tracking-tight">
                  REPLACEMENT
                </span>
                <span className="mt-1.5 block text-xl font-medium tracking-[0.14em] text-bark/75 sm:text-2xl lg:text-3xl">
                  THERAPY IN UTAH
                </span>
              </h1>

              <div className="flex items-center gap-2 my-5">
                <div className="h-px flex-1 bg-bark/20" />
                <Icon name="leaf" className="size-4 text-forest opacity-40" />
                <div className="h-px flex-1 bg-bark/20" />
              </div>

              {/* BHRT benefits — right after headline */}
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-[0.15em] text-bark/60 uppercase mb-4">
                  BHRT May Help With:
                </p>
                <div className="grid grid-cols-5 gap-2 md:gap-3">
                  {BHRT_BENEFITS.map(({ label, icon }) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-bark/20 bg-white flex items-center justify-center shrink-0">
                        <Icon name={icon} className="size-4 md:size-5 text-forest" />
                      </div>
                      <p className="text-[10px] md:text-xs text-clay-text leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-semibold text-bark text-lg mb-3">
                Support your body. Reclaim your life.
              </p>
              <p className="text-clay-text leading-relaxed mb-4">
                Bioidentical Hormone Replacement Therapy (BHRT) can help restore balance
                and relieve symptoms related to hormonal changes, so you can feel like
                yourself again.
              </p>
              <p className="text-clay-text text-sm italic leading-relaxed">
                Empowering mature women to reclaim health, vitality, and purpose through
                bioidentical hormone replacement therapy. Your body isn&apos;t broken —
                it&apos;s asking for support.
              </p>
            </div>
          </div>
        </div>

        {/* Worldlink Medical banner */}
        <div className="bg-forest py-7 px-4">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
              <span className="font-heading text-xl font-bold text-white">W</span>
            </div>
            <div>
              <p className="text-white/70 text-[11px] font-medium tracking-[0.15em] uppercase">
                Kim is trained through
              </p>
              <p className="font-heading text-xl md:text-2xl font-semibold text-white leading-tight">
                Worldlink Medical
              </p>
              <p className="text-white/60 text-xs md:text-sm">Trusted Education. Personalized Care.</p>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="bg-stone py-12 px-4 text-center">
          <p className="font-heading text-2xl md:text-3xl font-semibold italic text-bark mb-4">
            Expert care. Personalized for you.
          </p>
          <div className="flex items-center gap-3 justify-center mb-5">
            <div className="h-px w-16 bg-bark/20" />
            <Icon name="leaf" className="size-4 text-forest opacity-40" />
            <div className="h-px w-16 bg-bark/20" />
          </div>
          <p className="text-clay-text mb-1">Convenient. Confidential. Compassionate.</p>
          <p className="font-semibold text-bark mb-6">
            START WITH A FREE PHONE CONSULTATION
          </p>
          {/* Single primary CTA — the free consult is the lowest-friction entry point. */}
          <Link
            href="/book"
            className="inline-block bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-forest transition-colors shadow-md"
          >
            Book Your Free Consultation
          </Link>
          <p className="mt-4 text-sm text-clay-text max-w-md mx-auto leading-relaxed">
            No cost, no obligation. Kim can also provide a lab order at no
            charge — lab fees are billed separately and vary.
          </p>
        </div>
      </section>
    </>
  );
}
