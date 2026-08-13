import type { Lead } from "./provider";

/**
 * Last-resort delivery when the email provider fails.
 *
 * Reuses Web3Forms, which already delivers the contact form to Kim's inbox, so
 * this adds no new service and no database. The requirement from docs/06-EMAIL.md
 * is simply that a lead is never lost to a failed API call — a lead sitting in
 * Kim's inbox is recoverable; one that vanished is not.
 *
 * The Web3Forms key is NEXT_PUBLIC_ because the contact form posts from the
 * browser by design. Reading it server-side here is fine — the value is the
 * same either way.
 */
export async function sendLeadToInbox(
  lead: Lead,
  reason: string
): Promise<boolean> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return false;

  const lines = [
    `A quiz lead could not be added to the email list, so it is being sent here instead.`,
    ``,
    `Name:  ${lead.name}`,
    `Email: ${lead.email}`,
    `Stage: ${lead.stage}`,
    `Consented at: ${lead.consentAt}`,
    lead.utm.source ? `Source: ${lead.utm.source}` : null,
    lead.utm.campaign ? `Campaign: ${lead.utm.campaign}` : null,
    ``,
    `Reason it failed: ${reason}`,
    ``,
    `Please add this person to the email list manually.`,
  ].filter(Boolean);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Quiz lead needs manual add — ${lead.name}`,
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
