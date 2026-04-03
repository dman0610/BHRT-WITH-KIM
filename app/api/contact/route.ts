import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, symptoms, contactMethod } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    /* TODO: Replace console.log with Resend email integration
     * Example:
     * import { Resend } from 'resend';
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: 'BHRT with Kim <noreply@bhrtwithkim.com>',
     *   to: 'kim@bhrtwithkim.com',
     *   subject: `New Contact: ${name}`,
     *   html: `...formatted email...`,
     * });
     */
    console.log("[Contact Form Submission]", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "Not provided",
      message: message.trim(),
      symptoms: symptoms || [],
      contactMethod: contactMethod || "Either",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
