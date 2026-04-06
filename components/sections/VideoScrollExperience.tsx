"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFrameScrub } from "@/lib/useFrameScrub";

// ─── Helpers ────────────────────────────────────────────────

/** Map a value within a range to 0–1, clamped */
function remap(value: number, low: number, high: number): number {
  return Math.max(0, Math.min(1, (value - low) / (high - low)));
}

// ─── Mobile video fallback ──────────────────────────────────
//
// All four background layers (poster, video1, video2, final-frame) stay
// mounted at all times so nothing flashes on transition. Crossfades are
// handled with CSS opacity transitions. Two video refs allow video2 to
// preload silently while video1 is playing, eliminating the mid-sequence flash.

function MobileFallback() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<"poster" | "playing" | "final">("poster");
  const [videoIndex, setVideoIndex] = useState<1 | 2>(1);
  // Delay showing video1 until it has buffered enough to play without a blank frame
  const [video1Ready, setVideo1Ready] = useState(false);
  const touchStartY = useRef<number>(0);

  // Lock body scroll while poster/playing; unlock when final
  useEffect(() => {
    document.body.style.overflow = phase === "final" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  // Watch video1 readiness so we can crossfade from poster without a black frame
  useEffect(() => {
    const v = video1Ref.current;
    if (!v) return;
    if (v.readyState >= 3) { setVideo1Ready(true); return; }
    const onReady = () => setVideo1Ready(true);
    v.addEventListener("canplaythrough", onReady);
    return () => v.removeEventListener("canplaythrough", onReady);
  }, []);

  // Start video1 when phase switches to playing
  useEffect(() => {
    if (phase !== "playing") return;
    const v = video1Ref.current;
    if (!v) return;
    v.play().catch(() => {
      setPhase("final");
      window.dispatchEvent(new CustomEvent("hero-anim-complete"));
    });
  }, [phase]);

  // Wire video1 ended → switch to video2
  useEffect(() => {
    const v = video1Ref.current;
    if (!v) return;
    const onEnded = () => setVideoIndex(2);
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  // When videoIndex flips to 2, start video2 (already preloaded)
  useEffect(() => {
    if (videoIndex !== 2 || phase !== "playing") return;
    const v = video2Ref.current;
    if (!v) return;
    v.play().catch(() => {
      setPhase("final");
      window.dispatchEvent(new CustomEvent("hero-anim-complete"));
    });
  }, [videoIndex, phase]);

  // Wire video2 ended → final
  useEffect(() => {
    const v = video2Ref.current;
    if (!v) return;
    const onEnded = () => {
      setPhase("final");
      window.dispatchEvent(new CustomEvent("hero-anim-complete"));
    };
    v.addEventListener("ended", onEnded);
    return () => v.removeEventListener("ended", onEnded);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (phase !== "poster") return;
    const deltaY = touchStartY.current - e.touches[0].clientY;
    if (deltaY > 20) setPhase("playing");
  };

  // Derived opacity values — CSS transitions handle the actual crossfades
  const showPoster = phase === "poster" || (phase === "playing" && !video1Ready);
  const showVideo1 = phase === "playing" && video1Ready && videoIndex === 1;
  const showVideo2 = phase === "playing" && videoIndex === 2;
  const showFinal  = phase === "final";

  return (
    <section
      className="relative h-svh overflow-hidden grain-overlay"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* ── Background layers (always mounted, opacity-crossfaded) ── */}

      {/* Poster */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: showPoster ? 1 : 0 }}
      >
        <Image
          src="/hero/hero-poster.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Video 1 — preload="auto" so it buffers before the swipe */}
      <video
        ref={video1Ref}
        muted
        playsInline
        preload="auto"
        src="/hero/hero-video-1.mp4"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: showVideo1 ? 1 : 0 }}
      />

      {/* Video 2 — preloads silently while video 1 plays */}
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        src="/hero/hero-video-2.mp4"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: showVideo2 ? 1 : 0 }}
      />

      {/* Final frame */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: showFinal ? 1 : 0 }}
      >
        <Image
          src="/hero/hero-final-frame.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* ── Shared gradient overlay ── */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-bark/60 via-forest/30 to-transparent pointer-events-none"
        style={{ zIndex: 10 }}
        aria-hidden="true"
      />

      {/* ── Poster text (fades out when video starts) ── */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 pointer-events-none"
        style={{ opacity: phase === "poster" ? 1 : 0, zIndex: 20 }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-5xl font-semibold leading-tight text-white">
            From Seed to Strength
          </h1>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/90 max-w-2xl mx-auto">
            Empowering women to reclaim health, vitality, and purpose through
            holistic hormone support. Your body isn&apos;t broken — it&apos;s
            asking for support.
          </p>
        </div>
      </div>

      {/* Scroll hint chevron */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-300"
        style={{ opacity: phase === "poster" ? 1 : 0, zIndex: 20 }}
        aria-hidden="true"
      >
        <ChevronDown className="size-8 text-white/60 animate-bounce" />
      </div>

      {/* ── Final text + buttons (fades in after video 2 ends) ── */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        style={{
          opacity: showFinal ? 1 : 0,
          zIndex: 20,
          pointerEvents: showFinal ? "auto" : "none",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold leading-tight text-stone">
            Your Health. Your Power. Your Life.
          </h2>
          <p className="mt-4 text-lg font-normal leading-relaxed text-stone/90 max-w-2xl mx-auto">
            Kim&apos;s approach is built on three pillars — because thriving
            means more than just treating symptoms.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Link href="/contact">
              <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-sunlight hover:text-bark transition-all duration-300 shadow-lg hover:shadow-xl">
                Begin Your Journey
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 text-base font-medium border-white/40 text-moss hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                Take the Health Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reduced Motion fallback ────────────────────────────────

function ReducedMotionFallback() {
  return (
    <>
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden grain-overlay">
        <Image
          src="/hero/hero-poster.jpg"
          alt="Seed in a dramatic landscape"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-bark/60 via-forest/30 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
            From Seed to Strength
          </h1>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/90 max-w-2xl mx-auto sm:text-xl">
            Empowering women to reclaim health, vitality, and purpose through
            holistic hormone support. Your body isn&apos;t broken — it&apos;s
            asking for support.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-sunlight hover:text-bark transition-all duration-300 shadow-lg hover:shadow-xl">
                Begin Your Journey
              </Button>
            </Link>
            <Link href="/quiz">
              <Button
                variant="outline"
                className="rounded-full px-8 py-3 text-base font-medium border-white/40 text-moss hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                Take the Health Quiz
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="relative bg-stone py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-bark sm:text-5xl md:text-6xl">
            Your Health. Your Power. Your Life.
          </h2>
          <p className="mt-4 text-bark/80 max-w-2xl mx-auto text-lg">
            Kim&apos;s approach is built on three pillars — because thriving
            means more than just treating symptoms.
          </p>
        </div>
      </section>
    </>
  );
}

// ─── Frame URL lists (module-level so they're stable across renders) ────────

const FRAMES_1 = Array.from({ length: 30 }, (_, i) =>
  `/frames/video-one/frame-${String(i + 1).padStart(3, "0")}.jpg`
);
const FRAMES_2 = Array.from({ length: 30 }, (_, i) =>
  `/frames/video-two/frame-${String(i + 1).padStart(3, "0")}.jpg`
);

// ─── Desktop scroll-driven experience ───────────────────────

function DesktopScrollExperience() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [revealed, setRevealed] = useState(false);

  const { progress, isReady } = useFrameScrub({
    wrapperRef,
    canvasRef,
    frames1: FRAMES_1,
    frames2: FRAMES_2,
    transitionPoint: 0.45,
  });

  // Trigger clip-path reveal once first frame is drawn
  useEffect(() => {
    if (!isReady) return;
    const t = setTimeout(() => setRevealed(true), 80);
    return () => clearTimeout(t);
  }, [isReady]);

  // Content opacity/transform calculations based on scroll progress
  const chevronOpacity = 1 - remap(progress, 0.01, 0.03);
  const ctaOpacity = 1 - remap(progress, 0.02, 0.10);
  const descOpacity = 1 - remap(progress, 0.03, 0.12);
  const h1Opacity = 1 - remap(progress, 0.05, 0.15);
  const overlayOpacity = 0.6 - 0.4 * remap(progress, 0.15, 0.30);
  const missionH2Opacity = remap(progress, 0.80, 0.90);
  const missionSubOpacity = remap(progress, 0.85, 0.95);

  // Slight upward drift for hero text as it fades
  const heroYOffset = remap(progress, 0.02, 0.15) * -30;
  // Mission text rises into view
  const missionYOffset = (1 - remap(progress, 0.78, 0.90)) * 30;

  // Notify Navbar when animation completes / resets
  const animCompleteRef = useRef(false);
  useEffect(() => {
    const complete = progress >= 0.99;
    if (complete !== animCompleteRef.current) {
      animCompleteRef.current = complete;
      window.dispatchEvent(new CustomEvent(complete ? "hero-anim-complete" : "hero-anim-reset"));
    }
  }, [progress]);

  return (
    <>
      {/* Scroll wrapper — tall container that drives the video scrub */}
      <div ref={wrapperRef} className="relative" style={{ height: "200vh" }}>
        {/* Sticky viewport — stays pinned while the wrapper scrolls */}
        <div className="sticky top-0 h-dvh w-full overflow-hidden">
          {/* Gradient placeholder — visible until frames preload */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-forest via-moss/80 to-bark transition-opacity duration-[1400ms]"
            style={{ opacity: isReady ? 0 : 1 }}
            aria-hidden="true"
          />

          {/* Canvas — clip-path reveal: opens from centered crop to full viewport on load */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: revealed
                ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                : "polygon(12% 10%, 88% 10%, 88% 90%, 12% 90%)",
              transform: revealed ? "scale(1)" : "scale(1.08)",
              transition:
                "clip-path 1.3s cubic-bezier(0.4, 0, 0.2, 1), transform 1.3s cubic-bezier(0.4, 0, 0.2, 1)",
              opacity: isReady ? 1 : 0,
            }}
          >
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              role="img"
              aria-label="Cinematic animation of a seed growing into a strong tree, representing the journey from struggle to vitality"
            />
          </div>

          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-bark/60 via-forest/30 to-transparent pointer-events-none"
            style={{ opacity: Math.max(0.2, overlayOpacity) }}
            aria-hidden="true"
          />

          {/* Grain texture */}
          <div className="absolute inset-0 grain-overlay pointer-events-none" aria-hidden="true" />

          {/* ── Hero content layer ── */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              opacity: h1Opacity,
              transform: `translateY(${heroYOffset}px)`,
              pointerEvents: progress > 0.15 ? "none" : "auto",
            }}
          >
            <div className="mx-auto max-w-4xl px-4 text-center">
              <h1 className="font-heading text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
                From Seed to Strength
              </h1>
              <p
                className="mt-6 text-lg font-light leading-relaxed text-white/90 max-w-2xl mx-auto sm:text-xl"
                style={{ opacity: descOpacity }}
              >
                Empowering women to reclaim health, vitality, and purpose
                through holistic hormone support. Your body isn&apos;t broken —
                it&apos;s asking for support.
              </p>
              <div
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                style={{ opacity: ctaOpacity }}
              >
                <Link href="/contact">
                  <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-sunlight hover:text-bark transition-all duration-300 shadow-lg hover:shadow-xl">
                    Begin Your Journey
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-3 text-base font-medium border-white/40 text-moss hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                  >
                    Take the Health Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            style={{
              opacity: chevronOpacity,
              pointerEvents: progress > 0.05 ? "none" : "auto",
            }}
          >
            <a
              href="#hero-scroll-end"
              className="text-white/60 hover:text-white transition-colors animate-bounce block"
              aria-label="Scroll to learn more"
            >
              <ChevronDown className="size-8" />
            </a>
          </div>

          {/* ── Mission content layer ── */}
          <div
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{
              opacity: missionH2Opacity,
              transform: `translateY(${missionYOffset}px)`,
              pointerEvents: progress < 0.80 ? "none" : "auto",
            }}
          >
            <div className="text-center px-4">
              <h2 className="font-heading text-4xl font-bold text-stone sm:text-5xl md:text-6xl drop-shadow-lg">
                Your Health. Your Power. Your Life.
              </h2>
              <p
                className="mt-4 text-stone/95 max-w-2xl mx-auto text-lg font-normal drop-shadow-md"
                style={{ opacity: missionSubOpacity }}
              >
                Kim&apos;s approach is built on three pillars — because thriving
                means more than just treating symptoms.
              </p>
              <div
                className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
                style={{ opacity: missionSubOpacity }}
              >
                <Link href="/contact">
                  <Button className="bg-moss text-white rounded-full px-8 py-3 text-base font-medium hover:bg-sunlight hover:text-bark transition-all duration-300 shadow-lg hover:shadow-xl">
                    Begin Your Journey
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-3 text-base font-medium border-white/40 text-moss hover:bg-white/10 hover:border-white/60 transition-all duration-300"
                  >
                    Take the Health Quiz
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed final frame background — persists behind subsequent sections */}
      <div
        className="fixed inset-0 w-full h-dvh"
        style={{ zIndex: -1 }}
        aria-hidden="true"
      >
        <Image
          src="/hero/hero-final-frame.jpg"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-bark/20" />
      </div>

      {/* Sentinel: Navbar watches this to know when hero animation is fully past */}
      <div id="hero-scroll-end" aria-hidden="true" />
    </>
  );
}

// ─── Main export ────────────────────────────────────────────

export default function VideoScrollExperience() {
  // null = not yet determined (before JS runs)
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    // Detect mobile on page load — touch capability OR narrow viewport
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // Gradient placeholder while JS determines the appropriate variant
  if (isMobile === null) {
    return (
      <section className="relative h-dvh overflow-hidden grain-overlay">
        <div
          className="absolute inset-0 bg-gradient-to-br from-forest via-moss/80 to-bark"
          aria-hidden="true"
        />
      </section>
    );
  }

  if (prefersReduced) return <ReducedMotionFallback />;
  if (isMobile) return <MobileFallback />;
  return <DesktopScrollExperience />;
}
