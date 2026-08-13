/**
 * Email provider adapter.
 *
 * The only interface the rest of the app imports. Swapping MailerLite for Kit
 * (the fallback if MailerLite declines a health/wellness signup) means writing
 * one new implementation of `EmailProvider` and changing the export at the
 * bottom of this file — nothing else.
 *
 * See docs/06-EMAIL.md for the platform decision and its rationale.
 */

export type Lead = {
  email: string;
  name: string;
  /** Quiz severity bucket. Stored as a field so the sequence can branch later. */
  severity: string;
  /** Top 3 recommended service ids. */
  topServices: string[];
  /** Hormonal stage from quiz Q7. */
  stage: string;
  utm: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
  /** ISO timestamp. Proof of consent — required, never inferred. */
  consentAt: string;
};

export type SubscribeResult = { ok: boolean; error?: string };

export interface EmailProvider {
  readonly name: string;
  /** True when the provider has the credentials it needs to actually send. */
  readonly configured: boolean;
  subscribe(lead: Lead): Promise<SubscribeResult>;
}

/**
 * Used when no provider credentials are present.
 *
 * Deliberately reports `ok: false` rather than silently succeeding, so the
 * route handler falls through to the inbox fallback and the lead still reaches
 * Kim. A no-op that pretends to work is how leads disappear quietly.
 */
export const noopProvider: EmailProvider = {
  name: "noop",
  configured: false,
  async subscribe() {
    return { ok: false, error: "No email provider configured" };
  },
};
