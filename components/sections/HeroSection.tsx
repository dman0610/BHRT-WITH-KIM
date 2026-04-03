import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden grain-overlay">
      {/* Gradient placeholder background (forest-to-bark diagonal) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-forest via-moss/80 to-bark"
        aria-hidden="true"
      />

      {/* TODO: Add hero video when assets arrive */}
      {/*
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
      >
        <source src="/hero/hero-video.webm" type="video/webm" />
        <source src="/hero/hero-video.mp4" type="video/mp4" />
      </video>
      */}

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-bark/60 via-forest/30 to-transparent"
        aria-hidden="true"
      />

      {/* Hero content */}
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
              className="rounded-full px-8 py-3 text-base font-medium border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300"
            >
              Take the Health Quiz
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#mission"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to learn more"
      >
        <ChevronDown className="size-8" />
      </a>
    </section>
  );
}
