import { MISSION_PILLARS } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { LeafBranch } from "@/components/ui/BotanicalDecor";

export default function MissionSection() {
  return (
    <section id="mission" className="relative bg-stone py-20 md:py-28 overflow-hidden">
      <LeafBranch className="absolute -top-8 right-0 w-28 h-44 text-sage opacity-[0.07] hidden md:block" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl md:text-5xl">
            Your Health. Your Power. Your Life.
          </h2>
          <p className="mt-4 text-clay max-w-2xl mx-auto text-lg">
            Kim&apos;s approach is built on three pillars — because thriving
            means more than just treating symptoms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {MISSION_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll stagger-${index + 1} text-center p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-mist flex items-center justify-center mb-6">
                <Icon name={pillar.icon} className="size-7 text-forest" />
              </div>
              <h3 className="font-heading text-2xl font-medium text-bark mb-3">
                {pillar.title}
              </h3>
              <p className="text-clay leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
