"use client";

import confetti from "canvas-confetti";

export function burst(opts: { big?: boolean; emoji?: boolean } = {}) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const colors = ["#2F6BFF", "#2EBE70", "#FFB800", "#FF8A00", "#7C4DFF"];
  if (opts.big) {
    const end = Date.now() + 900;
    const frame = () => {
      confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0, y: 0.7 }, colors });
      confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1, y: 0.7 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  } else {
    confetti({ particleCount: 90, spread: 80, startVelocity: 38, origin: { y: 0.65 }, colors, scalar: 0.9 });
  }
}
