import { Quote } from "lucide-react";

const CARD_BGS = ["bg-white", "bg-lavender/20", "bg-peach/20", "bg-mist"] as const;

interface TestimonialCardProps {
  quote: string;
  name: string;
  context: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  name,
  context,
  index,
}: TestimonialCardProps) {
  const bg = CARD_BGS[index % CARD_BGS.length];

  return (
    <article
      className={`${bg} relative rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col`}
    >
      <Quote
        className="absolute top-4 right-4 size-7 text-sage/20"
        aria-hidden="true"
      />

      {/* TODO: Replace placeholder testimonials with real client quotes from Kim */}
      <blockquote className="relative z-10 flex flex-col flex-1">
        <p className="font-heading text-base italic leading-relaxed text-bark md:text-lg flex-1">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-5 flex items-center gap-3 pt-4 border-t border-bark/5">
          {/* TODO: Add real client photo */}
          <div className="w-10 h-10 rounded-full bg-lavender/60 flex items-center justify-center shrink-0">
            <span className="font-heading text-sm font-medium text-forest">
              {name[0]}
            </span>
          </div>
          <div>
            <p className="font-medium text-bark text-sm">{name}</p>
            <p className="text-xs text-clay">{context}</p>
          </div>
        </footer>
      </blockquote>
    </article>
  );
}
