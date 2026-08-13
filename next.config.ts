import type { NextConfig } from "next";

/**
 * Security headers.
 *
 * Applied to every route. These are the four that carry real benefit without
 * risking the third-party integrations this site depends on.
 *
 * DELIBERATELY NO Content-Security-Policy. The site embeds the Healthie
 * booking iframe, loads Vercel Analytics, and conditionally loads the Meta
 * pixel — a script-src/frame-src policy written blind would either break
 * booking (the single most important action on the site) or be permissive
 * enough to add nothing. That belongs as its own task against the deployed
 * page, where each origin can be observed rather than guessed.
 * See docs/11-LAUNCH.md.
 *
 * Note X-Frame-Options: SAMEORIGIN stops OTHER sites framing us. It does not
 * affect us embedding Healthie — that is frame-src, which is unset.
 */
const securityHeaders = [
  {
    // Stops browsers guessing a response's type, which is how a stray upload
    // becomes an executable script.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Send the full URL only to same-origin destinations. Matters here: page
    // paths on this site name health conditions (/symptoms/low-libido), and
    // leaking those as a Referer to third parties is the same class of problem
    // MetaPixel.tsx suppresses at the PageView level.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Nothing on this site needs these. Camera and microphone are left alone
    // rather than blocked, in case a telehealth video visit is added later.
    key: "Permissions-Policy",
    value: "geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
