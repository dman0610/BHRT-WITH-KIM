import { healthieEmbedUrl, type OfferingKey } from "@/lib/site";

/**
 * Healthie booking embed for a single offering.
 *
 * Server component on purpose — the surrounding heading and copy stay in the
 * server-rendered HTML so crawlers can read what is bookable here, even though
 * the iframe contents themselves are opaque to them.
 */
export default function BookingEmbed({
  offering,
  title,
  description,
}: {
  offering: OfferingKey;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-clay-text text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <iframe
        src={healthieEmbedUrl(offering)}
        style={{ width: "100%", minHeight: "600px", border: 0 }}
        title={`Book: ${title}`}
        loading="lazy"
      />

      <p className="mt-3 text-sm text-clay-text text-center">
        Booking provided by{" "}
        <a
          href="https://gethealthie.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-forest transition-colors"
        >
          Healthie
        </a>
      </p>
    </div>
  );
}
