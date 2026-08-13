/**
 * Analytics event layer.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * THE ONE RULE: no health data ever reaches an analytics or ad platform.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Not quiz answers, not symptom selections, not the severity bucket, not in a
 * parameter, not in a URL, not in a page title. Sending health-adjacent data to
 * ad platforms has produced real litigation and regulatory action against
 * health advertisers, and Meta's own terms prohibit it — a violation can
 * terminate the ad account outright.
 *
 * That a `QuizComplete` event happened is not health data. WHAT THE PERSON
 * ANSWERED is. The whole design follows from that distinction.
 *
 * This file enforces the rule in code rather than trusting future edits to
 * remember it. Three gates, in order:
 *
 *   1. Event names are a closed set. An unknown name is dropped.
 *   2. Parameter keys are allowlisted PER EVENT. Anything else is stripped.
 *   3. Parameter values are scanned for health vocabulary. One hit and the
 *      entire call is dropped, not just the offending key — a payload that
 *      contains a symptom name is evidence the caller is confused about what
 *      it's sending, and the safe response is to send nothing.
 *
 * In development, every gate logs loudly. In production it fails closed and
 * silent: a missing analytics event is a rounding error, a leaked one is a
 * legal problem.
 *
 * See docs/07-TRACKING.md.
 */

/** The complete event taxonomy. Keep it small — every event needs a decision attached. */
export const EVENT_PARAMS = {
  /** /quiz load. The event Meta campaigns actually optimize against. */
  LandingPageView: ["utm_source", "utm_medium", "utm_campaign"],
  /** First quiz question answered. */
  QuizStart: [],
  /** Results displayed. Deliberately parameterless — the answers stay server-side. */
  QuizComplete: [],
  /** Successful subscribe. No email address: hashing belongs on the server, in CAPI. */
  EmailCapture: [],
  /** Click toward booking. A proxy for bookings, never a count of them. */
  BookingIntent: ["source_page"],
} as const;

export type EventName = keyof typeof EVENT_PARAMS;

/**
 * Health vocabulary that must never appear in a parameter value.
 *
 * Not exhaustive and cannot be — it is a tripwire, not a filter. The real
 * protection is the per-event key allowlist above. This catches the case where
 * someone widens an allowlist without thinking it through.
 */
const HEALTH_TERMS =
  /hot.?flash|night.?sweat|insomnia|libido|menopaus|perimenopaus|hormone|estrogen|progesterone|testosterone|thyroid|adrenal|fatigue|brain.?fog|weight.?gain|symptom|severity|diagnos|depress|anxiet|mood/i;

type Params = Record<string, string | number | boolean | null>;

const isDev = process.env.NODE_ENV === "development";

function warn(message: string, detail?: unknown) {
  if (isDev) console.warn(`[analytics] ${message}`, detail ?? "");
}

/**
 * Strip a payload down to what is allowed to leave the browser.
 * Returns `null` when the whole call must be dropped.
 *
 * Exported for tests — this is the function worth testing, not the transport.
 */
export function sanitize(
  event: string,
  params: Params = {}
): { event: EventName; params: Params } | null {
  if (!Object.prototype.hasOwnProperty.call(EVENT_PARAMS, event)) {
    warn(`unknown event "${event}" dropped. Add it to EVENT_PARAMS first.`);
    return null;
  }
  const name = event as EventName;
  const allowed: readonly string[] = EVENT_PARAMS[name];
  const clean: Params = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined || value === "") continue;

    if (!allowed.includes(key)) {
      warn(`param "${key}" is not allowed on ${name} — stripped.`);
      continue;
    }
    if (typeof value === "string" && HEALTH_TERMS.test(value)) {
      warn(
        `param "${key}" on ${name} contains health vocabulary. ENTIRE EVENT DROPPED.`,
        value
      );
      return null;
    }
    clean[key] = value;
  }

  return { event: name, params: clean };
}

type Fbq = ((...args: unknown[]) => void) & { queue?: unknown[] };

declare global {
  interface Window {
    fbq?: Fbq;
    va?: (...args: unknown[]) => void;
  }
}

/**
 * Fire an event to every configured destination.
 *
 * Safe to call from anywhere, including during SSR (it no-ops on the server)
 * and when nothing is configured. Never throws — an analytics failure must not
 * break a page for a patient.
 */
export function track(event: EventName, params: Params = {}): void {
  if (typeof window === "undefined") return;

  const payload = sanitize(event, params);
  if (!payload) return;

  try {
    // Vercel Analytics. Cookieless; present only once <Analytics /> has mounted.
    window.va?.("event", { name: payload.event, data: payload.params });
  } catch (e) {
    warn("Vercel Analytics call failed", e);
  }

  try {
    // Meta. trackCustom rather than a standard event — none of the standard
    // ones describe what happened here, and mislabelling corrupts optimization.
    window.fbq?.("trackCustom", payload.event, payload.params);
  } catch (e) {
    warn("Meta pixel call failed", e);
  }
}

/**
 * Map a pathname to a coarse surface category for `BookingIntent.source_page`.
 *
 * Never send the raw pathname. `/symptoms/low-libido` as an event parameter
 * would tell an ad platform which condition someone was reading about — the
 * same leak `MetaPixel` suppresses at the PageView level.
 *
 * Every value returned here must survive `sanitize()`, which is stricter than
 * it looks: it matches the word "symptom", so the intuitive `"symptom-page"`
 * would silently drop every intent click from a symptom page. Hence
 * `"topic-page"`. Add a bucket, add a test.
 */
export function sourcePageBucket(pathname: string): string {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/symptoms")) return "topic-page";
  if (pathname.startsWith("/service-areas")) return "service-area";
  if (pathname.startsWith("/resources")) return "article";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/quiz")) return "quiz";
  if (pathname.startsWith("/faq")) return "faq";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/bhrt-") || pathname.startsWith("/find-a-hormone-provider"))
    return "guide";
  return "other";
}

/** Every bucket `sourcePageBucket` can return. Exported so tests can assert all of them pass `sanitize`. */
export const SOURCE_PAGE_BUCKETS = [
  "home",
  "topic-page",
  "service-area",
  "article",
  "services",
  "quiz",
  "faq",
  "about",
  "contact",
  "guide",
  "other",
] as const;

/**
 * Read UTM parameters from the current URL.
 *
 * Read on ENTRY, not at submit — by the time someone finishes a quiz the params
 * are usually gone from the URL, taking lead attribution with them.
 */
export function readUtms(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const sp = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
    const v = sp.get(key);
    if (v) out[key] = v.slice(0, 100);
  }
  return out;
}
