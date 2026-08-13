"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Check, Copy } from "lucide-react";
import { PROMO, promoEndsLabel } from "@/lib/promo";

const STORAGE_KEY = `promo-dismissed:${PROMO.code}`;

/**
 * Dismissal lives in sessionStorage rather than React state so it survives
 * client-side navigation between pages. Read through useSyncExternalStore —
 * setting state from an effect body causes cascading renders and is what the
 * react-hooks/set-state-in-effect rule guards against.
 */
let listeners: Array<() => void> = [];

function subscribe(onChange: () => void) {
  listeners.push(onChange);
  return () => {
    listeners = listeners.filter((l) => l !== onChange);
  };
}

function isDismissed() {
  return sessionStorage.getItem(STORAGE_KEY) === "1";
}

/** Treat as dismissed during SSR so the bar never flashes before hydration. */
function isDismissedOnServer() {
  return true;
}

function dismissPromo() {
  sessionStorage.setItem(STORAGE_KEY, "1");
  listeners.forEach((l) => l());
}

/**
 * Fixed bottom promo bar.
 *
 * Sits at the bottom rather than the top because the navbar is `fixed top-0`
 * and every hero relies on `pt-32`/`pt-40` to clear it — a top strip would
 * require re-tuning that offset on every page.
 *
 * Dismissal is session-scoped: a limited-time offer should return on the next
 * visit, but should not nag within one.
 *
 * `active` is computed on the server (see lib/promo.ts) so the expiry date is
 * evaluated against request time, not build time.
 */
export default function PromoBanner({ active }: { active: boolean }) {
  const dismissed = useSyncExternalStore(
    subscribe,
    isDismissed,
    isDismissedOnServer
  );
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  /**
   * Suppressed on booking pages. The free consult is $0, so a discount code
   * there only invites "wait, do I need a code?" hesitation on the page with
   * the least tolerance for friction.
   */
  const onBookingPage = pathname?.startsWith("/book") ?? false;

  if (!active || dismissed || onBookingPage) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO.code);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure context or denied permission) — the code
      // is visible on screen, so selecting it manually still works.
    }
  };

  return (
    <div
      role="region"
      aria-label="Current promotion"
      className="fixed bottom-0 left-0 right-0 z-[60] bg-forest text-white shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pr-8 text-center sm:pr-10">
          <p className="text-sm font-medium sm:text-base">
            {PROMO.headline} — use code{" "}
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 font-semibold tracking-wide transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={`Copy promo code ${PROMO.code}`}
            >
              {PROMO.code}
              {copied ? (
                <Check className="size-3.5" aria-hidden="true" />
              ) : (
                <Copy className="size-3.5" aria-hidden="true" />
              )}
            </button>
            <span className="sr-only" role="status">
              {copied ? "Promo code copied" : ""}
            </span>
          </p>

          <p className="text-xs text-white/75 sm:text-sm">
            Through {promoEndsLabel()}
          </p>

          <Link
            href="/services"
            className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-forest transition-colors hover:bg-stone focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            View packages
          </Link>
        </div>
      </div>

      <button
        type="button"
        onClick={dismissPromo}
        aria-label="Dismiss promotion"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <X className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
