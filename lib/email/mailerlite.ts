import type { EmailProvider, Lead, SubscribeResult } from "./provider";
import { noopProvider } from "./provider";

/**
 * MailerLite implementation.
 *
 * Server-only. The API key must never carry a NEXT_PUBLIC_ prefix — see
 * docs/06-EMAIL.md.
 *
 * Adding the subscriber to the configured group is what triggers the
 * automation; there is no separate "send" call. Scheduling, unsubscribes,
 * bounces, and complaint handling all live platform-side, which is the whole
 * reason for choosing a platform over a hand-rolled sender.
 */

const API = "https://connect.mailerlite.com/api/subscribers";

function mailerliteProvider(apiKey: string, groupId?: string): EmailProvider {
  return {
    name: "mailerlite",
    configured: true,

    async subscribe(lead: Lead): Promise<SubscribeResult> {
      const body = {
        email: lead.email,
        fields: {
          name: lead.name,
          // Health-adjacent, but this is the patient's own data going to the
          // email platform they consented to — NOT to an ad platform.
          // See the health data rule in docs/07-TRACKING.md.
          severity: lead.severity,
          top_services: lead.topServices.join(","),
          stage: lead.stage,
          utm_source: lead.utm.source ?? "",
          utm_medium: lead.utm.medium ?? "",
          utm_campaign: lead.utm.campaign ?? "",
          consent_at: lead.consentAt,
        },
        ...(groupId ? { groups: [groupId] } : {}),
      };

      try {
        const res = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(body),
          signal: AbortSignal.timeout(8000),
        });

        if (res.ok) return { ok: true };

        // Read the body for a useful log line, but never surface it to the client.
        const detail = await res.text().catch(() => "");
        return {
          ok: false,
          error: `MailerLite ${res.status}: ${detail.slice(0, 200)}`,
        };
      } catch (err) {
        return {
          ok: false,
          error: err instanceof Error ? err.message : "Unknown network error",
        };
      }
    },
  };
}

/**
 * The active provider.
 *
 * Falls back to the no-op when unconfigured, which makes the route handler use
 * its inbox fallback instead. That means quiz capture can ship and be tested
 * before the MailerLite account exists — leads reach Kim either way.
 */
export function getEmailProvider(): EmailProvider {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return noopProvider;
  return mailerliteProvider(apiKey, process.env.MAILERLITE_GROUP_ID);
}
