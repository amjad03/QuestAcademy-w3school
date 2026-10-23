"use client";

import clsx from "clsx";
import { Star, Volume2 } from "lucide-react";
import { say } from "@/lib/voice";

/** Bright primary palette used across Explore (fixed colours, readable on white text). */
export const EX = {
  blue: { c: "#2F80FF", s: "#1A5FD6" },
  red: { c: "#FF5A5F", s: "#D63A40" },
  yellow: { c: "#FFC21A", s: "#D99A00" },
  green: { c: "#2EBE70", s: "#1F9B58" },
  purple: { c: "#8B5CF6", s: "#6A3FD6" },
  orange: { c: "#FF8A00", s: "#D97000" },
  pink: { c: "#EC4899", s: "#C02677" },
  teal: { c: "#14B8A6", s: "#0E8C7E" },
} as const;

export const EX_ROTATION = [EX.blue, EX.orange, EX.green, EX.purple, EX.pink, EX.teal, EX.red];

/** Small round speaker button: Questy reads `text` aloud. */
export function ReadAloud({ text, label = "Read to me", size = "md", className, withWord }: { text: string; label?: string; size?: "sm" | "md" | "lg"; className?: string; withWord?: boolean }) {
  const dim = size === "lg" ? "h-14 min-w-14" : size === "sm" ? "h-9 min-w-9" : "h-11 min-w-11";
  const icon = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <button
      type="button"
      onClick={() => say(text)}
      aria-label={`${label}: ${text}`}
      title={label}
      className={clsx("ex-readaloud inline-flex shrink-0 items-center justify-center gap-2 rounded-full", dim, withWord ? "px-4" : "", className)}
    >
      <Volume2 className={icon} strokeWidth={2.6} aria-hidden />
      {withWord && <span className="text-sm font-black">{label}</span>}
    </button>
  );
}

/** A row of stars that fill as you go (quiz-show lights). */
export function StarRow({ filled, total, size = 22, className }: { filled: number; total: number; size?: number; className?: string }) {
  return (
    <div className={clsx("flex flex-wrap items-center gap-1", className)} aria-hidden>
      {Array.from({ length: total }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={clsx("transition-all duration-300", i < filled ? "scale-110 fill-[#FFC21A] text-[#D99A00]" : "fill-white/60 text-[rgb(var(--line))] dark:fill-white/10")}
          strokeWidth={2.4}
        />
      ))}
    </div>
  );
}

/** Chunky coloured 3D block (button look) with a fixed colour. */
export function chunky(color: { c: string; s: string }, depth = 5): React.CSSProperties {
  return { background: color.c, boxShadow: `inset 0 -${depth}px 0 ${color.s}` };
}
