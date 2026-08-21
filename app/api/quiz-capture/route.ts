import { NextResponse } from "next/server";
import { getEmailProvider } from "@/lib/email/mailerlite";
import { sendLeadToInbox } from "@/lib/email/fallback";
import type { Lead } from "@/lib/email/provider";

/**
 * Quiz email capture.
 *
 * Two rules govern this handler, both from docs/06-EMAIL.md:
 *
 *  1. CONSENT IS MANDATORY. A submission without explicit consent is rejected.
 *     Never infer it, never default it to true.
 *
 *  2. NEVER LOSE A LEAD. If the provider fails, retry once, then send the
 *     details to Kim's inbox. Always return 200 — the client shows quiz
 *     results regardless of what happens here, because a user who hands over
 *     an email and gets an error screen is lost twice.
 */

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = Partial<{
  email: string;
  name: string;
  consent: boolean;
  severity: string;
  topServices: string[];
  stage: string;
  utm: { source?: string; medium?: string; campaign?: string };
}>;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const name = (body.name ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  // Explicit consent only. No exceptions — pre-checked or assumed consent is
  // illegal in several jurisdictions and is the fastest route to complaints.
  if (body.consent !== true) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }

  const lead: Lead = {
    email,
    name: name || "there",
    severity: body.severity ?? "unknown",
    topServices: Array.isArray(body.topServices) ? body.topServices.slice(0, 3) : [],
    stage: body.stage ?? "unknown",
    utm: {
      source: body.utm?.source,
      medium: body.utm?.medium,
      campaign: body.utm?.campaign,
    },
    consentAt: new Date().toISOString(),
  };

  const provider = getEmailProvider();

  let result = await provider.subscribe(lead);
  if (!result.ok && provider.configured) {
    // One retry — transient network failures are the common case.
    result = await provider.subscribe(lead);
  }

  if (result.ok) {
    return NextResponse.json({ ok: true });
  }

  // Provider failed or isn't configured yet. The lead still reaches Kim.
  //
  // These are different events and the inbox email distinguishes them. An
  // unconfigured provider is the current interim design — Kim replies to
  // leads personally, which is what the quiz form promises. A *configured*
  // provider failing is a genuine bug.
  const reason = result.error ?? "unknown";
  const expected = !provider.configured;
  const delivered = await sendLeadToInbox(lead, reason, expected);

  if (expected) {
    console.info("[quiz-capture] no provider configured; lead sent to inbox", {
      fallbackDelivered: delivered,
    });
  } else {
    console.error("[quiz-capture] provider failed", {
      provider: provider.name,
      reason,
      fallbackDelivered: delivered,
    });
  }

  // Still 200: the client must render results either way.
  return NextResponse.json({ ok: true, queued: true });
}
