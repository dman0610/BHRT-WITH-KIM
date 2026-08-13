"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/**
 * Error boundary for the app.
 *
 * Must be a client component — that is a Next.js requirement for error
 * boundaries, not a choice, and it is why this file carries "use client" when
 * almost nothing else in the project does.
 *
 * Two deliberate decisions:
 *
 *  1. The phone number is shown. If the site itself is broken, the person is
 *     still someone trying to reach a healthcare provider, and a working phone
 *     number is the one path that does not depend on the code that just failed.
 *  2. `error.message` is NOT rendered. Framework error text is meaningless to a
 *     patient and can leak internals. It goes to the console for debugging.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app error]", error);
  }, [error]);

  return (
    <section className="bg-stone pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
          Something went wrong on our end
        </h1>

        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-clay-text">
          This is a problem with the website, not with anything you did. Trying
          again usually works.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            className="rounded-full bg-moss px-8 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-forest"
          >
            Try again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              className="rounded-full border-forest/30 px-8 py-3 text-base font-medium text-forest transition-colors hover:bg-forest hover:text-white"
            >
              Go to the homepage
            </Button>
          </Link>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="font-heading text-lg font-medium text-bark">
            Need to reach Kim in the meantime?
          </h2>
          <p className="mt-2 leading-relaxed text-clay-text">
            Call{" "}
            <a
              href={`tel:${SITE.contact.phoneE164}`}
              className="font-medium text-forest underline underline-offset-4 transition-colors hover:text-moss"
            >
              {SITE.contact.phone}
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${SITE.contact.email}`}
              className="font-medium text-forest underline underline-offset-4 transition-colors hover:text-moss break-all"
            >
              {SITE.contact.email}
            </a>
            .
          </p>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-clay-text">
            Reference: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
