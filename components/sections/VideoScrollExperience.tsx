"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFrameScrub } from "@/lib/useFrameScrub";
import { useMediaQuery } from "@/lib/useMediaQuery";

// ─── Helpers ────────────────────────────────────────────────

/** Map a value within a range to 0–1, clamped */
function remap(value: number, low: number, high: number): number {
  return Math.max(0, Math.min(1, (value - low) / (high - low)));
}

// ─── Mobile / Reduced-motion fallback ───────────────────────

function MobileFallback() {
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = video2Ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero with autoplay Video 1 */}
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden grain-overlay">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/hero/hero-video-1.mp4" type="video/mp4" />
        </video>

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

        <a
          href="#mission-mobile"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to learn more"
        >
          <ChevronDown className="size-8" />
        </a>
      </section>

      {/* Mission heading with Video 2 background */}
      <section
        id="mission-mobile"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <video
          ref={video2Ref}
          muted
          playsInline
          poster="/hero/hero-final-frame.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
        >
          <source src="/hero/hero-video-2.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-t from-bark/40 via-forest/20 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 animate-on-scroll">
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl drop-shadow-lg">
            Your Health. Your Power. Your Life.
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg drop-shadow-md">
            Kim&apos;s approach is built on three pillars — because thriving
            means more than just treating symptoms.
          </p>
        </div>
      </section>
    </>
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
          <h2 className="font-heading text-3xl font-semibold text-bark sm:text-4xl md:text-5xl">
            Your Health. Your Power. Your Life.
          </h2>
          <p className="mt-4 text-clay max-w-2xl mx-auto text-lg">
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
              <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl drop-shadow-lg">
                Your Health. Your Power. Your Life.
              </h2>
              <p
                className="mt-4 text-white/90 max-w-2xl mx-auto text-lg drop-shadow-md"
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
  const isDesktop = useMediaQuery("(min-width: 768px) and (hover: hover)");
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  if (prefersReduced) return <ReducedMotionFallback />;
  if (!isDesktop) return <MobileFallback />;
  return <DesktopScrollExperience />;
}
