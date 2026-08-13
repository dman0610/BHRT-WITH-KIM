/**
 * Public promotion — single source of truth.
 *
 * Only ONE code is ever public. The others (Welcome50,
 * ComprehensivePackage500, Followup50) are limited-quantity and live in the
 * email sequence and direct outreach only — publishing them gets them scraped
 * by coupon aggregators, permanently resets the reference price, and burns the
 * limited quantities on people who would have paid full price.
 *
 * IMPORTANT: never condition a discount on leaving a review. Offering anything
 * of value in exchange for a review violates Google's policies and FTC
 * endorsement guidance and can get the Business Profile suspended.
 * See docs/00-BUSINESS-FACTS.md.
 */

export const PROMO = {
  /** Manual kill switch. Set false to pull the offer before its end date. */
  active: true,

  code: "BHRTwithKim25",
  headline: "25% off any package",

  /**
   * Last day the offer is valid, inclusive. Expiry is enforced at runtime, not
   * at build time — see isPromoActive().
   */
  endsOn: "2026-09-15",

  /**
   * The free consultation is $0, so the discount applies to paid packages only.
   * TODO: confirm with Kim before this goes into paid ads.
   */
  terms: "25% off any package. Valid through September 15, 2026.",
} as const;

/** Human-readable end date, e.g. "September 15, 2026". */
export function promoEndsLabel(): string {
  return new Date(`${PROMO.endsOn}T23:59:59`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Whether the promo should render right now.
 *
 * Pages are statically generated, so this must be evaluated against request
 * time rather than build time — the root layout sets `revalidate` so the
 * banner clears within an hour of the end date. Advertising a deadline and
 * then quietly leaving the offer up is a false-advertising exposure.
 */
export function isPromoActive(now: Date = new Date()): boolean {
  if (!PROMO.active) return false;
  // Inclusive of the whole final day.
  return now.getTime() <= new Date(`${PROMO.endsOn}T23:59:59`).getTime();
}
