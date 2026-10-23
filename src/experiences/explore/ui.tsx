"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Star, Volume2, X } from "lucide-react";
import { say } from "@/lib/voice";
import { useT } from "@/i18n";
import { useHydrated } from "@/components/providers";
import { useLearner, liveStreak } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { stickerById, type Sticker } from "@/components/modes/explore/stickers";

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

export type Col = { c: string; s: string };

export const EX_ROTATION: Col[] = [EX.green, EX.purple, EX.blue, EX.orange, EX.pink, EX.teal, EX.red];

/** Small round speaker button: Questy reads `text` aloud. */
export function ReadAloud({ text, label, size = "md", className, withWord }: { text: string; label?: string; size?: "sm" | "md" | "lg"; className?: string; withWord?: boolean }) {
  const t = useT();
  const name = label ?? t("explore.readToMe", "Read to me");
  const dim = size === "lg" ? "h-14 min-w-14" : size === "sm" ? "h-9 min-w-9" : "h-11 min-w-11";
  const icon = size === "lg" ? "h-7 w-7" : size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        say(text);
      }}
      aria-label={`${name}: ${text}`}
      title={name}
      className={clsx("ex-readaloud inline-flex shrink-0 items-center justify-center gap-2 rounded-full", dim, withWord ? "px-4" : "", className)}
    >
      <Volume2 className={icon} strokeWidth={2.6} aria-hidden />
      {withWord && <span className="text-sm font-black">{name}</span>}
    </button>
  );
}

/** A row of stars that fill as you go. */
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
export function chunky(color: Col, depth = 5): React.CSSProperties {
  return { background: color.c, boxShadow: `inset 0 -${depth}px 0 ${color.s}` };
}

/** Thick Duolingo-style progress bar with a shine stripe. */
export function FatBar({ value, color = EX.green, height = 18, className, label }: { value: number; color?: Col; height?: number; className?: string; label?: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={clsx("ex-fatbar relative w-full overflow-hidden rounded-full", className)}
      style={{ height }}
      role={label ? "progressbar" : undefined}
      aria-label={label}
      aria-valuemin={label ? 0 : undefined}
      aria-valuemax={label ? 100 : undefined}
      aria-valuenow={label ? Math.round(pct) : undefined}
    >
      <div className="relative h-full rounded-full transition-[width] duration-500 ease-out" style={{ width: `${pct}%`, minWidth: pct > 0 ? height : 0, background: color.c }}>
        <span className="absolute left-[8px] right-[8px] top-[22%] h-[26%] rounded-full bg-white/35" aria-hidden />
      </div>
    </div>
  );
}

/** Learner numbers for the frame and home, safe before the store hydrates. */
export function useExploreStats() {
  const hydrated = useHydrated();
  const s = useLearner();
  if (!hydrated) return { ready: false, streak: 0, stars: 0, xp: 0, todayXp: 0, goal: 50, stickers: 0, newest: undefined as Sticker | undefined, coins: 0, lastDay: null as string | null };
  const today = dayKey();
  const newestId = Object.entries(s.stickers).sort((a, b) => b[1].localeCompare(a[1]))[0]?.[0];
  return {
    ready: true,
    streak: liveStreak(s),
    stars: Object.keys(s.lessons).length,
    xp: s.xp,
    todayXp: s.daily[today]?.xp ?? 0,
    goal: s.profile.dailyGoal || 50,
    stickers: Object.keys(s.stickers).length,
    newest: newestId ? stickerById[newestId] : undefined,
    coins: s.coins,
    lastDay: s.streak.lastDay,
  };
}

/** Friendly centred dialog with a coloured header; closes on Escape or backdrop tap. */
export function KidDialog({ open, onClose, title, color = EX.blue, children, footer, eyebrow, labelledBy }: { open: boolean; onClose: () => void; title: ReactNode; color?: Col; children: ReactNode; footer?: ReactNode; eyebrow?: ReactNode; labelledBy: string }) {
  const t = useT();
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      prev?.focus?.();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#0b2a55]/45 p-0 sm:items-center sm:p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            initial={{ y: 60, scale: 0.97 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 60, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            onClick={(e) => e.stopPropagation()}
            className="ex-dialog flex max-h-[92vh] w-full max-w-[560px] flex-col overflow-hidden"
          >
            <div className="flex items-start gap-3 px-5 pb-4 pt-5 text-white" style={{ background: color.c, boxShadow: `inset 0 -6px 0 ${color.s}` }}>
              <div className="min-w-0 flex-1">
                {eyebrow && <p className="text-sm font-black text-white/85">{eyebrow}</p>}
                <h2 id={labelledBy} className="text-2xl font-black leading-tight">
                  {title}
                </h2>
              </div>
              <button ref={closeRef} type="button" onClick={onClose} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/25 hover:bg-white/35" aria-label={t("explore.close", "Close")}>
                <X className="h-6 w-6" strokeWidth={3} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">{children}</div>
            {footer && <div className="border-t-[3px] border-line px-5 py-4">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Little treasure chest drawing (closed, or open with a glow). */
export function Chest({ size = 64, open = false, grey = false }: { size?: number; open?: boolean; grey?: boolean }) {
  const wood = grey ? "#B8C4D6" : "#C7772A";
  const woodDark = grey ? "#97A5BA" : "#9E5A1C";
  const lid = grey ? "#CBD5E3" : "#E08E3C";
  const gold = grey ? "#DDE4EE" : "#FFC21A";
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 132 112" aria-hidden>
      {open && !grey && <circle cx="66" cy="44" r="40" fill="#FFE27A" opacity="0.55" />}
      <ellipse cx="66" cy="104" rx="52" ry="7" fill="rgb(0 0 0 / 0.1)" />
      <rect x="12" y="46" width="108" height="56" rx="10" fill={wood} />
      <rect x="12" y="88" width="108" height="14" rx="7" fill={woodDark} />
      {open ? <path d="M12 46 L26 10 L134 10 L120 46 Z" fill={lid} opacity="0.95" transform="translate(-6 -4)" /> : <path d="M12 50 C12 18 120 18 120 50 Z" fill={lid} />}
      <rect x="12" y="44" width="108" height="10" fill={gold} />
      {!open && <rect x="56" y="40" width="20" height="28" rx="5" fill={gold} />}
      {!open && <circle cx="66" cy="54" r="4" fill={woodDark} />}
      <rect x="26" y="54" width="8" height="48" fill={gold} opacity="0.85" />
      <rect x="98" y="54" width="8" height="48" fill={gold} opacity="0.85" />
    </svg>
  );
}
