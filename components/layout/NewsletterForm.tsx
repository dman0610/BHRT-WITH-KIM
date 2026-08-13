"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Newsletter signup, split out of Footer.
 *
 * The footer used to be a client component solely to hold this form, which
 * meant the NAP block — phone, email, service area — was client-rendered on
 * every page and invisible to crawlers that don't execute JavaScript. Keeping
 * the interactive part in its own child lets the footer stay a server
 * component. See docs/04-AI-VISIBILITY.md.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
      );
      formData.append("email", email.trim());
      formData.append("subject", `Newsletter Sign-Up — BHRT with Kim`);
      formData.append("message", `New newsletter subscriber: ${email.trim()}`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={handleNewsletter} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-bark border-stone/20 text-stone placeholder:text-stone/40 focus:border-sage rounded-full text-sm"
          aria-label="Email for newsletter"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="bg-moss text-white rounded-full px-4 hover:bg-forest transition-colors shrink-0 text-sm"
        >
          {status === "loading" ? "..." : "Join"}
        </Button>
      </form>
      <p className="mt-2 text-xs text-stone/50" role="status">
        {status === "success" && (
          <span className="text-sage">Welcome! You&apos;ll hear from us soon.</span>
        )}
        {status === "error" && (
          <span className="text-error">Something went wrong. Please try again.</span>
        )}
        {status !== "success" && status !== "error" && "Unsubscribe anytime."}
      </p>
    </>
  );
}
