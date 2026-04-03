import Link from "next/link";
import { FEATURED_SERVICES } from "@/lib/constants";
import Icon from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";

export default function ServicePreview() {
  return (
    <section className="bg-stone py-20 md:py-28 section-over-video">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl md:text-5xl">
            A Whole-Body Approach to Feeling Whole
          </h2>
          <p className="mt-4 text-clay max-w-2xl mx-auto text-lg">
            We don&apos;t just treat symptoms — we find the root causes and
            build a plan that supports your whole life.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_SERVICES.map((service, index) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className={`animate-on-scroll stagger-${index + 1} group block p-6 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-xl bg-lavender/60 flex items-center justify-center mb-5 group-hover:bg-lavender transition-colors">
                <Icon name={service.icon} className="size-6 text-forest" />
              </div>
              <h3 className="font-heading text-xl font-medium text-bark mb-2">
                {service.shortTitle}
              </h3>
              <p className="text-clay text-sm leading-relaxed line-clamp-3">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-moss group-hover:text-forest transition-colors">
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link href="/services">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 border-moss text-moss hover:bg-moss hover:text-white transition-all duration-300"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
