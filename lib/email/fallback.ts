import type { Lead } from "./provider";
import { SERVICES } from "@/lib/constants";

/**
 * Lead delivery to Kim's inbox.
 *
 * Reuses Web3Forms, which already delivers the contact form, so this adds no
 * new service and no database. The requirement from docs/06-EMAIL.md is that a
 * lead is never lost to a failed API call — a lead sitting in Kim's inbox is
 * recoverable; one that vanished is not.
 *
 * TWO DIFFERENT SITUATIONS ARRIVE HERE and they must not look alike:
 *
 *   expected === true   No email provider is configured yet. This is the
 *                       interim design, not a failure — the inbox IS the
 *                       system until MailerLite exists. Kim replies personally,
 *                       which is what the quiz form now promises.
 *
 *   expected === false  A configured provider genuinely failed. That is a bug
 *                       worth chasing, and it has to stand out from the dozens
 *                       of normal leads or it will be scrolled past.
 *
 * The Web3Forms key is NEXT_PUBLIC_ because the contact form posts from the
 * browser by design. Reading it server-side here is fine — same value.
 */

/**
 * Quiz severity, rendered for a human.
 *
 * `getOverallSeverity` returns a bare bucket id. Kim should not have to
 * remember whether "significant" ranks above "moderate", so the ordinal is
 * spelled out.
 */
const SEVERITY_LABELS: Record<string, string> = {
  thriving: "Thriving (1 of 5 — few symptoms reported)",
  mild: "Mild (2 of 5)",
  moderate: "Moderate (3 of 5)",
  significant: "Significant (4 of 5)",
  severe: "Severe (5 of 5 — most symptoms reported)",
};

/**
 * Hormonal stage, from quiz Q7.
 *
 * Stored as bare option values (`peri`/`post`/`unsure`). Rendering them raw
 * makes Kim decode her own quiz, so they are spelled out here.
 */
const STAGE_LABELS: Record<string, string> = {
  peri: "Peri-menopause (still having periods, but things are changing)",
  post: "Post-menopause (periods have stopped for 12+ months)",
  unsure: "Not sure where she is",
  unknown: "Not answered",
};

/** Map service ids to their published titles, reusing SERVICES as the source. */
function serviceTitles(ids: string[]): string {
  if (ids.length === 0) return "—";
  return ids
    .map((id) => SERVICES.find((s) => s.id === id)?.title ?? id)
    .join(", ");
}

export async function sendLeadToInbox(
  lead: Lead,
  reason: string,
  expected: boolean
): Promise<boolean> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  /*
    The route defaults a blank name to "there" so the email sequence can greet
    someone as "Hi there". That default is wrong here — it makes Kim's subject
    line read "Quiz lead — there". Fall back to the address, which is the one
    thing always present.
  */
  const hasName = lead.name.trim() !== "" && lead.name.trim() !== "there";
  const label = hasName ? lead.name : lead.email;

  const consentedAt = new Date(lead.consentAt).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Denver",
  });

  const lines = [
    expected
      ? `Someone completed the hormone quiz and asked to hear from you.`
      : `⚠️ A quiz lead could not be added to the email list, so it is being sent here instead. Please add this person manually — and this failure is worth investigating.`,
    ``,
    hasName ? `Name:  ${lead.name}` : `Name:  (not given)`,
    `Email: ${lead.email}`,
    ``,
    `── Their quiz results ──`,
    `Overall:       ${SEVERITY_LABELS[lead.severity] ?? lead.severity}`,
    `Stage:         ${STAGE_LABELS[lead.stage] ?? lead.stage}`,
    `Top areas:     ${serviceTitles(lead.topServices)}`,
    ``,
    `Consented to email at ${consentedAt} (Mountain Time).`,
    lead.utm.source ? `Source:   ${lead.utm.source}` : null,
    lead.utm.medium ? `Medium:   ${lead.utm.medium}` : null,
    lead.utm.campaign ? `Campaign: ${lead.utm.campaign}` : null,
    ``,
    expected
      ? `Reply to them directly — the quiz told them you'd follow up personally.`
      : `Reason it failed: ${reason}`,
    ``,
    `This is an educational quiz result, not a clinical assessment.`,
    // Only drop the nulls. `.filter(Boolean)` would also strip every ""
    // spacer above and collapse the email into a wall of text.
  ].filter((line) => line !== null);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        /*
          Stable "Quiz lead — " prefix, deliberately.

          Today it gives Kim a Gmail filter. More importantly, when MailerLite
          goes live every lead captured during the interim has to be imported,
          and searching this prefix is the only way to recover them without
          rebuilding the list by hand. Do not change it casually.
        */
        subject: expected
          ? `Quiz lead — ${label}`
          : `Quiz lead — ${label} (NEEDS MANUAL ADD)`,
        from_name: "BHRT with Kim website",
        message: lines.join("\n"),
      }),
      signal: AbortSignal.timeout(8000),
    });
    return res.ok;
  } catch {
    return false;
  }
}
