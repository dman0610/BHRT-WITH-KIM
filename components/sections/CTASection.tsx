import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative bg-forest py-20 md:py-28 overflow-hidden grain-overlay">
      {/* Subtle texture pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="100%" height="100%">
          <pattern id="leaf-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Ready to Feel Like Yourself Again?
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Many women are told that exhaustion, brain fog, and sleepless nights
            are simply part of getting older. A conversation is a good place to
            start finding out what else might be going on.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/book">
              <Button className="bg-sunlight text-bark rounded-full px-8 py-3 text-base font-semibold hover:bg-white hover:text-forest transition-all duration-300 shadow-lg">
                Book a Free Consultation
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 text-base font-medium border-white/30 text-moss hover:bg-white/10 transition-all duration-300"
              >
                Take the Free Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
