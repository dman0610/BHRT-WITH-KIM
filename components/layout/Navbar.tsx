"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Site header.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * THE BACKDROP IS ALWAYS ON. DO NOT MAKE IT CONDITIONAL AGAIN.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * This previously floated transparently over the hero and chose its text
 * colour at render time:
 *
 *     const isHome = pathname === "/";
 *     const textClass = backdropVisible || isHome ? "text-bark" : "text-white";
 *
 * That shipped white links on the cream homepage in production, where they
 * were invisible. `usePathname()` HAS NO VALUE IN VERCEL'S SERVER RENDER, so
 * `isHome` was false in the prerendered HTML — while resolving correctly in a
 * local build, which is why it never showed up before launch. The giveaway was
 * the active-link underline missing from "Home" on the live page.
 *
 * The lesson is not "fix isHome". It is that ANY design where contrast depends
 * on knowing the route, the scroll position, or hydration has an unsafe state,
 * and sooner or later it ships. A permanent backdrop has exactly one state:
 * bark on stone, 11.24:1, AA at every size, identical with JavaScript off.
 *
 * Scroll now only deepens the shadow. Nothing about legibility depends on it.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  /*
    Kept ONLY for the active-link underline, which is decorative. If it is
    momentarily wrong before hydration nobody is harmed — unlike contrast.
  */
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // One state, always safe. See the note above before changing this.
  const textClass = "text-bark";

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-forest focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      {/*
        Always rendered and always opaque. Scroll only deepens the shadow —
        legibility never depends on it, on JavaScript, or on the route.
      */}
      <div
        aria-hidden="true"
        className={`fixed top-0 left-0 right-0 z-[25] h-16 md:h-20 bg-stone/95 backdrop-blur-sm transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      />

      {/* Buttons layer — always visible and clickable */}
      <nav
        className="fixed top-0 left-0 right-0 z-[50]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`font-heading text-xl font-semibold tracking-wide transition-colors md:text-2xl ${textClass}`}
            >
              BHRT with Kim
            </Link>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${textClass} hover:text-moss ${
                      isActive
                        ? "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-moss after:rounded-full"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link href="/book" className="ml-3">
                <Button className="bg-moss text-white rounded-full px-5 hover:bg-forest transition-colors">
                  Book Free Consult
                </Button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`md:hidden p-2 ${textClass}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-bark/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-stone shadow-2xl transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-20 px-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 text-lg font-medium border-b border-bark/10 transition-colors ${
                    isActive ? "text-forest" : "text-bark hover:text-moss"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/book" className="mt-6" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-moss text-white rounded-full py-3 hover:bg-forest transition-colors">
                Book Free Consult
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
