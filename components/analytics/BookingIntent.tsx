"use client";

import { useEffect } from "react";
import { track, sourcePageBucket } from "@/lib/analytics";

/**
 * Fires `BookingIntent` when a visitor clicks anything pointing at booking.
 *
 * Implemented as ONE delegated listener rather than a `<BookingLink>` wrapper
 * around every CTA. Booking links live in the navbar, the footer, the promo
 * banner, every content page, the services page and the quiz results — wrapping
 * them would mean marking half the site `"use client"` to satisfy analytics,
 * which is exactly backwards for a project whose primary goal is being legible
 * to crawlers that don't run JavaScript. See AGENTS.md rule 4.
 *
 * `source_page` is a COARSE BUCKET, never the raw pathname. `/symptoms/low-libido`
 * as an event parameter would tell an ad platform what condition someone was
 * reading about — the same leak MetaPixel.tsx suppresses at the PageView level.
 * A bucket answers the question actually being asked ("which surfaces drive
 * booking intent?") without naming a condition.
 *
 * This is intent, not conversion. Bookings happen inside a cross-origin
 * Healthie iframe whose completion events we cannot see, so the gap between
 * these clicks and real bookings is UNKNOWN — not a conversion rate. The
 * honest primary metric stays Kim's calendar. See docs/07-TRACKING.md.
 */

export default function BookingIntent() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = e.target as Element | null;
      const link = el?.closest?.(
        'a[href^="/book"], a[href*="#booking"], a[href^="tel:"]'
      );
      if (!link) return;

      // Already on /book — the click is navigation within booking, not intent.
      if (window.location.pathname.startsWith("/book")) return;

      track("BookingIntent", {
        source_page: sourcePageBucket(window.location.pathname),
      });
    }

    // Capture phase, so it still records if a handler stops propagation.
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
