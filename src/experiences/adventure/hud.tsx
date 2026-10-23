"use client";

import clsx from "clsx";
import { RANKS, rankFor } from "@/components/modes/adventure/Home";
import type { ItemKind } from "@/content/course";

/** Neon colour per rank (same XP ladder as the Adventure home, recoloured for the HUD). */
export const RANK_NEON = ["#94A3B8", "#A3E635", "#2DE2E6", "#60A5FA", "#A78BFA", "#FBBF24"];

export function rankInfo(xp: number) {
  const r = rankFor(xp);
  const span = r.next ? r.next.min - r.min : 1;
  return {
    name: r.name,
    index: r.index,
    color: RANK_NEON[r.index] ?? r.color,
    min: r.min,
    next: r.next ? { name: r.next.name, min: r.next.min, color: RANK_NEON[r.index + 1] ?? r.next.color } : null,
    /** 0–1 progress inside the current rank. */
    pct: r.next ? Math.min(1, Math.max(0, (xp - r.min) / span)) : 1,
    toNext: r.next ? r.next.min - xp : 0,
  };
}

export { RANKS };

/** What each lesson item is called on a mission. */
export const OBJECTIVE: Record<ItemKind, string> = {
  video: "Watch briefing",
  article: "Read intel",
  practice: "Drill",
  cards: "Flashcards",
  challenge: "Challenge",
};

/** Thin segmented-look progress bar used across the HUD. */
export function NeonBar({ value, color = "rgb(var(--accent))", className, label, height = 8 }: { value: number; color?: string; className?: string; label?: string; height?: number }) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <div
      className={clsx("adv-bar relative w-full overflow-hidden", className)}
      style={{ height }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label={label}
    >
      <div className="adv-bar-fill h-full transition-[width] duration-500" style={{ width: `${pct}%`, background: color, color }} />
    </div>
  );
}

/** Keyboard hint chip. */
export function Kbd({ children, className }: { children: React.ReactNode; className?: string }) {
  return <kbd className={clsx("adv-kbd", className)}>{children}</kbd>;
}

export function pad2(n: number) {
  return String(n).padStart(2, "0");
}
