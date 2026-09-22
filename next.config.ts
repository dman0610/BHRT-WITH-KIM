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
 * See docs/archive/2026-08-launch-runbook.md.
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

/*
 * `experimental.inlineCss` was trialled 2026-09-21 and deliberately left OFF.
 * Recorded so it isn't re-derived from scratch next time Lighthouse flags
 * "Render-blocking requests" — that audit does clear with it enabled.
 *
 * Measured at brotli-11 on the real homepage:
 *   external CSS (today) : 14.6KB HTML + 11.5KB CSS = 26.1KB, TWO sequential
 *                          requests — the browser must parse the HTML and
 *                          discover the <link> before it can ask for the CSS
 *   inlineCss            : 27.8KB HTML, ONE request
 *
 * So it costs ~1.7KB to remove a round trip, which for first-time mobile
 * visitors arriving from search is a good trade and is exactly the case the
 * Next docs recommend it for (atomic CSS, first-load priority).
 *
 * It is off anyway for two reasons. It is still flagged experimental, and a
 * rendering fault on a licensed provider's site is a worse outcome than
 * ~120ms. And it could not be verified here: `next start` serves uncompressed,
 * so a local Lighthouse run sees 373KB of inline CSS rather than the 28KB
 * Vercel would actually send, and reports FCP as *worse*. Judging it needs a
 * preview deployment, not a localhost run.
 *
 * To trial it: add `experimental: { inlineCss: true }` below, deploy to a
 * preview URL, and compare PageSpeed mobile against production.
 */
/**
 * Every deployment is reachable at two hostnames, not one: the real domain and
 * the `*.vercel.app` alias. The alias served a full HTTP 200 copy of all 39
 * pages, with `Allow: /` in robots.txt and no noindex anywhere, so the entire
 * site existed twice as far as a crawler was concerned.
 *
 * The self-referencing canonical on each page points at bhrtwithkim.com, but a
 * canonical is a hint Google may overrule, not a directive. Meanwhile the
 * duplicate host is crawled on its own account — and on a domain this young,
 * crawl allowance is the scarce resource. Nineteen real pages have been sitting
 * in "Discovered - currently not indexed", never fetched; spending any of that
 * budget re-reading the same pages under a second hostname is pure waste.
 *
 * `X-Robots-Tag: noindex, nofollow` is the directive version of what the
 * canonical was only suggesting. `nofollow` matters as much as `noindex` here:
 * without it the alias stays a discovery surface, feeding Google more
 * duplicate URLs to queue.
 *
 * Deliberately a header and not a redirect. Redirecting the alias would take
 * away the fallback for reaching production when DNS on the custom domain is
 * broken, which is exactly when you need it. This costs nothing and keeps it.
 *
 * The regex covers preview deployments too (`bhrt-with-kim-<hash>.vercel.app`),
 * so a shared preview link can never be indexed either.
 *
 * NOTE this cannot fix the `www` host. That redirect is served by Vercel's edge
 * before the app runs — verified by the absence of any of the security headers
 * below on a www response — so it is a dashboard setting, not code.
 */
const NON_CANONICAL_HOSTS = "(?<noncanonical>.*\.vercel\.app)";

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/:path*",
        has: [{ type: "host", value: NON_CANONICAL_HOSTS }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
