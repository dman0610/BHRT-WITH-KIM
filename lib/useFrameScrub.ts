"use client";

import { useEffect, useRef, useState, useCallback, type RefObject } from "react";

interface FrameScrubConfig {
  wrapperRef: RefObject<HTMLDivElement | null>;
  canvasRef: RefObject<HTMLCanvasElement | null>;
  frames1: string[];
  frames2: string[];
  /** Point in scroll progress (0–1) where we switch from sequence 1 to sequence 2. Default 0.45 */
  transitionPoint?: number;
}

interface FrameScrubState {
  progress: number;
  isReady: boolean;
}

export function useFrameScrub({
  wrapperRef,
  canvasRef,
  frames1,
  frames2,
  transitionPoint = 0.45,
}: FrameScrubConfig): FrameScrubState {
  const [isReady, setIsReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Loaded image elements, keyed by URL
  const imagesRef = useRef<Map<string, HTMLImageElement>>(new Map());
  // Last drawn frame URL to avoid redundant draws
  const lastDrawnRef = useRef<string>("");

  // Draw a pre-loaded image to canvas (object-fit: cover)
  const drawImage = useCallback(
    (img: HTMLImageElement) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = rect.width * dpr;
      const h = rect.height * dpr;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }

      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      if (iw === 0 || ih === 0) return;

      const canvasAspect = w / h;
      const imgAspect = iw / ih;

      let sx = 0, sy = 0, sw = iw, sh = ih;
      if (imgAspect > canvasAspect) {
        // Image is wider — crop sides
        sw = ih * canvasAspect;
        sx = (iw - sw) / 2;
      } else {
        // Image is taller — crop top/bottom
        sh = iw / canvasAspect;
        sy = (ih - sh) / 2;
      }

      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
    },
    [canvasRef],
  );

  // Pick and draw the correct frame for current scroll progress
  const updateFrame = useCallback(() => {
    const p = progressRef.current;
    const allUrls = [...frames1, ...frames2];

    let url: string;
    if (p <= transitionPoint) {
      const localProgress = transitionPoint > 0 ? p / transitionPoint : 0;
      const idx = Math.min(Math.floor(localProgress * frames1.length), frames1.length - 1);
      url = frames1[idx];
    } else {
      const localProgress = (p - transitionPoint) / (1 - transitionPoint);
      const idx = Math.min(Math.floor(localProgress * frames2.length), frames2.length - 1);
      url = frames2[idx];
    }

    if (!url || url === lastDrawnRef.current) return;

    const img = imagesRef.current.get(url);
    if (!img || !img.complete) return;

    drawImage(img);
    lastDrawnRef.current = url;
  }, [frames1, frames2, transitionPoint, drawImage]);

  // Preload all frames; signal ready when complete
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReady(true);
      return;
    }

    const allUrls = [...frames1, ...frames2];
    let loaded = 0;

    const onLoad = () => {
      loaded++;
      if (loaded === allUrls.length) {
        setIsReady(true);
        // Draw the first frame immediately
        const first = imagesRef.current.get(frames1[0]);
        if (first) drawImage(first);
      }
    };

    allUrls.forEach((url) => {
      if (imagesRef.current.has(url)) {
        // Already loaded from a previous render
        loaded++;
        return;
      }
      const img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad; // don't block on a bad frame
      img.src = url;
      imagesRef.current.set(url, img);
    });

    // Handle case where all images were already cached
    if (loaded === allUrls.length) {
      setIsReady(true);
      const first = imagesRef.current.get(frames1[0]);
      if (first) drawImage(first);
    }
  }, [frames1, frames2, drawImage]);

  // Scroll tracking
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      rafRef.current = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) {
          ticking = false;
          return;
        }

        const raw = (-rect.top / scrollable) * 1.25;
        const clamped = Math.max(0, Math.min(1, raw));
        progressRef.current = clamped;
        setProgress(clamped);
        updateFrame();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [wrapperRef, updateFrame]);

  // Redraw on resize
  useEffect(() => {
    if (!isReady) return;

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lastDrawnRef.current = ""; // force redraw
        updateFrame();
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [isReady, updateFrame]);

  return { progress, isReady };
}
