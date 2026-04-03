import { FEATURED_TESTIMONIAL } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-peach/40 py-20 md:py-28 section-over-video">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
            Women Who Found Their Way Back
          </h2>
        </div>

        <div className="animate-on-scroll stagger-2 relative bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <Quote
            className="absolute top-6 left-6 size-10 text-peach/60"
            aria-hidden="true"
          />

          {/* TODO: Replace with real testimonial from Kim's clients */}
          <blockquote className="relative z-10">
            <p className="font-heading text-xl italic leading-relaxed text-bark md:text-2xl">
              &ldquo;{FEATURED_TESTIMONIAL.quote}&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3">
              {/* TODO: Add real client photo */}
              <div className="w-12 h-12 rounded-full bg-lavender flex items-center justify-center">
                <span className="font-heading text-lg font-medium text-forest">
                  {FEATURED_TESTIMONIAL.name[0]}
                </span>
              </div>
              <div>
                <p className="font-medium text-bark">{FEATURED_TESTIMONIAL.name}</p>
                <p className="text-sm text-clay">{FEATURED_TESTIMONIAL.context}</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
