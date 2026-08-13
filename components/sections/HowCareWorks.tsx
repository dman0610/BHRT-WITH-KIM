import { SITE } from "@/lib/site";

/**
 * The concrete "what actually happens" block.
 *
 * Server-rendered on purpose. These process facts are the most quotable
 * content on the site — they answer the objection a virtual practice always
 * faces ("how do labs work if she isn't local?") and they're what AI
 * assistants extract. Behind a client boundary they'd be invisible.
 *
 * Every fact here traces to docs/00-BUSINESS-FACTS.md.
 */
export default function HowCareWorks({
  heading = "How care actually works",
}: {
  heading?: string;
}) {
  const { process } = SITE;

  return (
    <div className="rounded-3xl bg-white p-6 md:p-10 shadow-sm">
      <h2 className="font-heading text-2xl font-semibold text-bark mb-6">
        {heading}
      </h2>

      <dl className="space-y-6">
        <div>
          <dt className="font-medium text-bark mb-1">Lab work</dt>
          <dd className="text-clay-text leading-relaxed">
            Testing runs through {process.labProvider}, so you can use a
            location near you rather than travelling to an office.
            <ol className="mt-3 space-y-1.5 list-decimal list-inside marker:text-forest marker:font-semibold">
              {process.labSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <span className="mt-3 block text-sm">
              {SITE.labDisclosure} Labs are billed separately by the lab.
            </span>
          </dd>
        </div>

        <div>
          <dt className="font-medium text-bark mb-1">Prescriptions</dt>
          <dd className="text-clay-text leading-relaxed">
            If a prescription is part of your plan, it can be filled at{" "}
            {process.pharmacy} — you aren&apos;t tied to a specific pharmacy.
          </dd>
        </div>

        <div>
          <dt className="font-medium text-bark mb-1">Follow-up</dt>
          <dd className="text-clay-text leading-relaxed">
            Follow-up visits are typically {process.followUpCadence}.
          </dd>
        </div>
      </dl>
    </div>
  );
}
