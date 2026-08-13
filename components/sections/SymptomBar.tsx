import Link from "next/link";
import { SYMPTOMS } from "@/lib/constants";
import { SYMPTOM_PAGES } from "@/lib/content";
import Icon from "@/components/ui/Icon";

export default function SymptomBar() {
  return (
    <section className="bg-mist py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
            Recognize Any of These?
          </h2>
          <p className="mt-3 text-clay-text max-w-xl mx-auto">
            These symptoms aren&apos;t &ldquo;just your age&rdquo; — they&apos;re
            your body asking for support.
          </p>
        </div>

        {/*
          Each chip goes to the page that answers it. These all pointed at
          /services previously, which meant clicking "Brain Fog" landed on a
          services list — see the note on SYMPTOMS in lib/constants.ts.
        */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-on-scroll stagger-2">
          {SYMPTOMS.map((symptom) => (
            <Link
              key={symptom.label}
              href={symptom.href}
              className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white text-bark shadow-sm border border-stone hover:border-sage hover:shadow-md hover:scale-[1.03] transition-all duration-200"
            >
              <Icon
                name={symptom.icon}
                className="size-4 text-sage group-hover:text-forest transition-colors"
              />
              <span className="text-sm font-medium">{symptom.label}</span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center animate-on-scroll">
          <Link
            href="/symptoms"
            className="text-sm font-medium text-forest underline underline-offset-4 transition-colors hover:text-moss"
          >
            See all {SYMPTOM_PAGES.length} symptom topics →
          </Link>
        </p>
      </div>
    </section>
  );
}
