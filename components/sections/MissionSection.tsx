import { MISSION_PILLARS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { LeafBranch } from "@/components/ui/BotanicalDecor";

export default function MissionSection() {
  return (
    <section id="mission" className="relative bg-stone py-20 md:py-32 overflow-hidden">
      <LeafBranch className="absolute -top-8 right-0 w-28 h-44 text-sage opacity-[0.07] hidden md:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header — layered typographic treatment */}
        <div className="text-center mb-16 md:mb-20 animate-on-scroll">

          {/* Eyebrow label */}
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-moss mb-5">
            Kim&apos;s Approach
          </p>

          {/* Primary heading — large, commanding */}
          <h2 className="font-heading font-semibold text-bark leading-tight
            text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Your Health.{" "}
            <span className="italic text-forest">Your Power.</span>{" "}
            Your Life.
          </h2>

          {/* Organic divider */}
          <div className="flex items-center justify-center gap-3 my-6">
            <span className="block h-px w-12 bg-sage/40" />
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-moss fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C9 6 4 8 4 13a8 8 0 0 0 16 0c0-5-5-7-8-11z" />
            </svg>
            <span className="block h-px w-12 bg-sage/40" />
          </div>

          {/* Subtitle — clearly distinct from the heading */}
          <p className="font-sans text-base sm:text-lg text-clay leading-relaxed max-w-xl mx-auto">
            Because thriving means more than just treating symptoms.
          </p>
        </div>

        {/* Pillar cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {MISSION_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll stagger-${index + 1} group flex flex-col items-center text-center
                p-8 md:p-10 rounded-2xl bg-white shadow-sm
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-16 h-16 rounded-full bg-mist flex items-center justify-center mb-6
                group-hover:bg-moss/10 transition-colors duration-300">
                <Icon name={pillar.icon} className="size-7 text-forest" />
              </div>

              <h3 className="font-heading text-2xl sm:text-[1.6rem] font-semibold text-bark mb-3 leading-snug">
                {pillar.title}
              </h3>

              {/* Subtle rule under pillar title */}
              <span className="block w-8 h-0.5 bg-moss/30 mb-4 rounded-full" />

              <p className="font-sans text-[0.95rem] sm:text-base text-clay leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
