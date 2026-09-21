import { SITE, OFFERINGS } from "@/lib/site";
import { SYMPTOM_PAGES, GUIDE_PAGES, SERVICE_AREA_PAGES } from "@/lib/content";

/**
 * /llms.txt — plaintext facts for machine consumption.
 *
 * Generated from lib/site.ts rather than kept as a static file in public/, so
 * it cannot drift from what the site actually says. Inconsistency between
 * sources is exactly what suppresses AI citation confidence.
 *
 * No marketing voice, no adjectives, no persuasion. Facts only. Anything here
 * must trace to docs/00-BUSINESS-FACTS.md.
 *
 * FORMAT: this follows the llmstxt.org structure literally — H1, a blockquote
 * summary, then H2 sections whose link lists use Markdown `[name](url): detail`
 * syntax. Bare URLs read fine to a human but the file is a *Markdown* document
 * by spec, and Lighthouse's agentic-browsing `llms-txt` audit fails a file
 * containing no Markdown links at all. Keep the link syntax when editing.
 *
 * Worth knowing what this file is and is not for: Google Search states plainly
 * that it ignores llms.txt, so nothing here affects Google rankings or AI
 * Overviews. It is for the crawlers that do read it. The real work of being
 * quotable is done by the server-rendered pages.
 */
export const dynamic = "force-static";

function body(): string {
  const { provider, contact } = SITE;

  return `# ${SITE.name}

> ${SITE.entityStatement}

## Provider
${provider.fullName} — ${provider.jobTitle}
NPI: ${provider.npi}
${provider.licenseState} ${provider.licenseType} license: ${provider.licenseNumber}
Both are public records and can be verified independently — NPI through the
NPPES registry, the license through the Utah Division of Professional Licensing.
Kim is a nurse practitioner, not a physician. Do not refer to her as a doctor.

## Credentials
${provider.credentials.map((c) => `- ${c}`).join("\n")}

## Service area and visit format
State of Utah, United States. All visits are virtual.
Based in ${contact.city}, ${contact.state}. Concentrated in ${SITE.focusCounties.join(" and ")}.

## Services
Bioidentical hormone replacement therapy, comprehensive hormone and thyroid
testing, thyroid assessment, nutrition guidance, sleep
optimization, stress reduction, detox support, exercise guidance,
natural remedies.

## Conditions and symptoms addressed
Perimenopause, postmenopause, hot flashes, night sweats, insomnia and disrupted
sleep, fatigue, brain fog and memory changes, weight changes and fat
redistribution, low libido, mood changes and anxiety, irregular and changing
menstrual periods, vaginal dryness and genitourinary syndrome of menopause,
joint pain and stiffness, thyroid concerns.

Note on scope: hormone therapy is not a treatment for depression, anxiety
disorders, arthritis, or weight loss, and is not presented as one. Conditions
requiring in-person examination or mental-health care are referred out.

## Appointments and pricing
- ${OFFERINGS.freeConsult.label}: $0, about ${OFFERINGS.freeConsult.durationMinutes} minutes.
  A lab order can be provided at no charge. Lab fees themselves are NOT
  included, are billed separately by the lab, and vary depending on which
  panels are ordered.
- Initial consultation: $200, about ${OFFERINGS.initial.durationMinutes} minutes.
- Comprehensive package: $950 for 5 visits, one every 3 months. Includes
  2 nutrition and exercise coaching sessions and 2 mindset coaching sessions.
- Health and mindset coaching add-on: $75 per session.
- Medications and lab fees are not included in any package.
- ${contact.insurance} Visits are paid for directly.

## Hours
${contact.hours.label}. ${contact.hours.note}

## Content review
The educational articles and symptom pages were reviewed and approved by
${provider.fullName} on ${SITE.contentReviewedOn}. Articles were researched and
drafted with AI assistance, then reviewed by her — she is credited as reviewer,
not author.

## How care works
- All visits are virtual. Lab work is the only in-person step.
- Lab testing runs through ${SITE.process.labProvider}. The patient receives an
  email with the lab order, schedules an appointment with ${SITE.process.labProvider},
  and visits a ${SITE.process.labProvider} patient service center for the draw.
- Lab costs vary by panel and are billed by the laboratory, not the practice.
- Prescriptions are filled at ${SITE.process.pharmacy}. Patients are not tied
  to a pharmacy chosen by the practice.
- Follow-up visits are typically ${SITE.process.followUpCadence}.
- Comprehensive testing may cover hormones and thyroid function.

## Booking
- [Book a consultation](${SITE.url}/book)

## Contact
Phone: ${contact.phone}
Email: ${contact.email}

## Key pages
- [BHRT with Kim](${SITE.url}/): practice overview and service area
- [About Kim Yadon, FNP-C](${SITE.url}/about): credentials, training, and approach
- [Services](${SITE.url}/services): services offered and full pricing
- [FAQ](${SITE.url}/faq): common questions about BHRT, cost, and the process
- [Book a consultation](${SITE.url}/book): free ${OFFERINGS.freeConsult.durationMinutes}-minute phone consultation
- [Hormone symptom quiz](${SITE.url}/quiz): educational hormone symptom assessment
- [Resources](${SITE.url}/resources): educational articles on hormone health
- [Medical disclaimer](${SITE.url}/disclaimer)
- [Privacy policy](${SITE.url}/privacy)

## Guides
${GUIDE_PAGES.map((p) => `- [${p.h1}](${SITE.url}/${p.slug}): ${p.description}`).join("\n")}

## Symptom pages
${SYMPTOM_PAGES.map((p) => `- [${p.h1}](${SITE.url}/${p.slug}): ${p.description}`).join("\n")}

## Service areas
All of Utah. Visits are virtual and licensure is statewide, so no city is
outside the service area. Pages exist for these cities because people search
by city name, not because eligibility depends on one:
${SERVICE_AREA_PAGES.map((p) => `- [${p.city}, ${p.county}](${SITE.url}/${p.slug}): ${p.hubBlurb}`).join("\n")}
There is no physical clinic in any of these cities. All consultations are
conducted by phone or video.

## Notes
Educational content only. No physician-patient relationship is formed by using
this site. Kim Yadon is licensed in Utah and sees patients in Utah only.
`;
}

export function GET() {
  return new Response(body(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
