"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // gentle, consistent smoothing across devices
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true, // enable on touch devices for consistent behavior
      touchMultiplier: 1.6,
      direction: "vertical",
      wheelMultiplier: 1,
      gestureOrientation: "vertical",
      normalizeWheel: true,
      lerp: 0.08,
    });

    // Expose for debugging if needed
    window.lenis = lenis;

    let rafId = 0;
    const onRaf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(onRaf);
    };

    rafId = requestAnimationFrame(onRaf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      try { delete window.lenis; } catch (e) { }
    };
  }, []);

  return null;
}