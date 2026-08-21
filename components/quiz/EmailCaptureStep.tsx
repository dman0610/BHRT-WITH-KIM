"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { track } from "@/lib/analytics";

export type QuizLeadPayload = {
  severity: string;
  topServices: string[];
  stage: string;
  utm: { source?: string; medium?: string; campaign?: string };
};

/**
 * Email capture, shown after the last question and before results.
 *
 * THE INVIOLABLE RULE (docs/06-EMAIL.md): results are shown immediately after
 * this step, always. `onDone` fires whether the request succeeded, failed, or
 * timed out — the network call is deliberately not awaited before continuing.
 * Email is the follow-up, never the paywall.
 *
 * The skip link is required for the same reason. Gating results behind an
 * email depresses completion and costs more trust than the addresses are worth.
 */
export default function EmailCaptureStep({
  payload,
  onDone,
}: {
  payload: QuizLeadPayload;
  onDone: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false); // unchecked by default, always
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubmitting(true);

    // Fire and continue. Results must not wait on this.
    void fetch("/api/quiz-capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), name: name.trim(), consent, ...payload }),
    }).catch(() => {
      // Swallowed on purpose — the server route has an inbox fallback, and a
      // failure here must never block the user from seeing their results.
    });

    /*
      Parameterless by design. Not the email address either: hashing an
      identifier for match quality belongs server-side in Conversions API,
      never in a browser event. See docs/07-TRACKING.md.
    */
    track("EmailCapture");

    onDone();
  };

  return (
    <div className="mx-auto max-w-md py-12">
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl">
          Where should we send your results?
        </h2>
        {/*
          INTERIM COPY — see docs/06-EMAIL.md.

          This previously promised "a copy along with Kim's hormone health
          guide". Both were unfulfillable: there is no authenticated sending
          domain (a Gmail From address relayed by a third party fails DMARC
          alignment), and the guide does not exist. Someone handing over an
          address and receiving nothing is worse than never asking.

          Deliberately carries NO timeline — "will follow up", never "within
          24 hours". docs/05-CONTENT-STANDARDS.md bans response and relief
          timelines, and a missed stated deadline is a real exposure.

          "Reviews your answers" is not a clinical claim. QUIZ_DISCLAIMER still
          renders on the results screen: educational, not diagnostic.

          Replace this when the sequence goes live — and only then.
        */}
        <p className="mt-3 text-clay-text leading-relaxed">
          Kim reviews every completed assessment personally and will follow up
          by email.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <Label htmlFor="quiz-name" className="text-bark">
            First name
          </Label>
          <Input
            id="quiz-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="given-name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="quiz-email" className="text-bark">
            Email
          </Label>
          <Input
            id="quiz-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="mt-1.5"
          />
        </div>

        <div className="flex items-start gap-3 pt-1">
          <input
            id="quiz-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 size-4 shrink-0 rounded border-bark/30 accent-forest"
          />
          <Label
            htmlFor="quiz-consent"
            className="text-sm font-normal leading-relaxed text-clay-text"
          >
            I agree to receive emails from BHRT with Kim. Unsubscribe anytime.
            See our{" "}
            <Link
              href="/privacy"
              className="text-forest underline underline-offset-4 hover:text-moss transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </Label>
        </div>

        <Button
          type="submit"
          disabled={!email || !consent || submitting}
          className="w-full bg-moss text-white rounded-full py-3 text-base font-medium hover:bg-forest transition-colors shadow-md disabled:opacity-50"
        >
          See My Results
        </Button>
      </form>

      <div className="mt-5 text-center">
        <button
          type="button"
          onClick={onDone}
          className="text-sm text-clay-text underline underline-offset-4 hover:text-bark transition-colors"
        >
          Show my results without email
        </button>
      </div>
    </div>
  );
}
