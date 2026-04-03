"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function BotanicalAccent() {
  return (
    <svg
      className="absolute -top-12 right-0 w-48 h-48 opacity-10 text-sage"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M100 20 C100 20, 140 60, 140 100 C140 140, 100 180, 100 180 C100 180, 60 140, 60 100 C60 60, 100 20, 100 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M100 40 L100 180"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M100 70 C115 55, 130 60, 130 70"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M100 100 C85 85, 70 90, 70 100"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M100 130 C115 115, 130 120, 130 130"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
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
    <footer className="relative bg-bark text-stone/90 overflow-hidden section-over-video">
      <BotanicalAccent />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand / Mission */}
          <div>
            <Link href="/" className="font-heading text-2xl font-semibold text-white">
              BHRT with Kim
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone/70 max-w-xs">
              Empowering women to reclaim health, vitality, and purpose through holistic
              hormone support. Your body isn&apos;t broken — it&apos;s asking for support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone/70 hover:text-sunlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-medium text-white mb-4">Stay Connected</h3>
            <div className="space-y-2 text-sm text-stone/70 mb-6">
              <p>{FOOTER_LINKS.contact.email}</p>
              <p>{FOOTER_LINKS.contact.phone}</p>
              <p>{FOOTER_LINKS.contact.location}</p>
            </div>

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
            {status === "success" && (
              <p className="mt-2 text-sm text-sage">Welcome! You&apos;ll hear from us soon.</p>
            )}
            {status === "error" && (
              <p className="mt-2 text-sm text-error">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone/10 text-center text-xs text-stone/40">
          <p>&copy; {new Date().getFullYear()} BHRT with Kim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
