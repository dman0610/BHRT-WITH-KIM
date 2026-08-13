import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MetaPixel from "@/components/analytics/MetaPixel";
import BookingIntent from "@/components/analytics/BookingIntent";

/**
 * Sitewide analytics mount.
 *
 * Two tiers, deliberately:
 *
 *   Always on — Vercel Analytics and Speed Insights. Both are cookieless and
 *   first-party, so they carry no consent-banner obligation and can ship the
 *   day the site does. Speed Insights matters more than usual here: the
 *   audience is mostly on mobile, often late at night, so mobile LCP is a
 *   conversion metric for this practice rather than a technical nicety.
 *
 *   Off until configured — the Meta pixel. It sets cookies and tracks across
 *   sites, which requires disclosure in /privacy. It stays completely absent
 *   from the page until NEXT_PUBLIC_META_PIXEL_ID is set, so "ads haven't
 *   started" and "no third-party tracker is loaded" are the same state rather
 *   than two facts someone has to keep in sync by hand.
 *
 * GA4 is deliberately skipped — Vercel Analytics plus Search Console answers
 * the questions this project actually has, without the consent obligations.
 *
 * Events fire through lib/analytics.ts, which enforces the no-health-data
 * rule. Never call `fbq` or `va` directly. See docs/07-TRACKING.md.
 */
export default function Analytics() {
  const rawPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  /*
    Validated, not merely checked for existence, before it is interpolated into
    an inline script body. Meta pixel IDs are numeric; anything else is a
    misconfiguration and is safer treated as "no pixel" than as "run this".
  */
  const pixelId = /^\d{6,20}$/.test(rawPixelId ?? "") ? rawPixelId : undefined;

  return (
    <>
      <VercelAnalytics />
      <SpeedInsights />
      <BookingIntent />
      {pixelId && <MetaPixel pixelId={pixelId} />}
    </>
  );
}
