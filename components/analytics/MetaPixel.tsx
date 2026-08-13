"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

/**
 * Meta pixel, suppressed on pages whose URL names a health condition.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * WHY THIS COMPONENT EXISTS AT ALL
 * ─────────────────────────────────────────────────────────────────────────
 *
 * docs/07-TRACKING.md bans sending health data to ad platforms and calls out
 * URL parameters specifically. There is a subtler version of the same problem
 * that is easy to miss: **the pixel's automatic PageView sends the current
 * page URL**, and on this site some URLs are themselves health data.
 *
 *   /symptoms/low-libido
 *   /symptoms/hormonal-weight-gain
 *   /symptoms/brain-fog-memory
 *
 * A PageView from one of those tells Meta that an identified browser read a
 * page about that condition. No custom parameter is involved — the leak is the
 * URL. This is the exact pattern behind real regulatory action against health
 * advertisers, and no amount of care in `lib/analytics.ts` prevents it, because
 * the pixel sends it without being asked.
 *
 * So the pixel simply does not load on those routes. Consequences, stated
 * plainly so nobody "fixes" this later by deleting it:
 *
 *  - Symptom-page traffic is invisible to Meta. That is the intended outcome.
 *  - Ads point at /quiz and /book, which are not suppressed, so campaign
 *    optimization is unaffected.
 *  - Vercel Analytics still records symptom pageviews. It is first-party,
 *    cookieless, and not an ad platform — the risk is not the measurement,
 *    it is handing condition-level data to an advertising business.
 *
 * Note also what is deliberately NOT here: no re-fire of PageView on client
 * navigation. The usual "fix" for SPA pixel tracking would send every
 * subsequent URL — including suppressed ones — to Meta.
 */

/** Route prefixes whose URLs name a condition or symptom. */
const SUPPRESSED_PREFIXES = ["/symptoms"];

export default function MetaPixel({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();

  if (SUPPRESSED_PREFIXES.some((p) => pathname?.startsWith(p))) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');fbq('track','PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
