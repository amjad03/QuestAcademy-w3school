"use client";

/**
 * Shared drawing + UI pieces for the STEM explainers: an SVG stage, a
 * simple comic character, big touch buttons, a reset header and a
 * feedback line. Scene colours use theme tokens so they work in dark mode;
 * comic / analogy art sits on a light panel and uses fixed colours.
 */

import type { ReactNode, Ref } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import clsx from "clsx";

export const INK = "rgb(var(--ink))";
export const MUTED = "rgb(var(--muted))";
export const LINE = "rgb(var(--line))";
export const SURF = "rgb(var(--surface))";
export const SURF2 = "rgb(var(--surface-2))";
/** Ink for art drawn on the always-light comic / analogy panels. */
export const DARK = "#1c2333";

export function Svg({
  label,
  vb = "0 0 400 260",
  maxH = 260,
  children,
  svgRef,
  className,
}: {
  label: string;
  vb?: string;
  maxH?: number;
  children: ReactNode;
  svgRef?: Ref<SVGSVGElement>;
  className?: string;
}) {
  return (
    <svg ref={svgRef} viewBox={vb} role="img" aria-label={label} className={clsx("block h-auto w-full select-none", className)} style={{ maxHeight: maxH }} preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  );
}

export type Mood = "happy" | "surprised" | "thinking" | "sad";
export type Pose = "down" | "wave" | "point" | "cheer" | "hold";

/** A friendly cartoon kid. (x, y) is where the feet touch the ground; about 92 units tall at s = 1. */
export function Kid({
  x,
  y,
  s = 1,
  shirt = "#3b82f6",
  hair = "#3b2a1a",
  skin = "#f2c9a0",
  mood = "happy",
  pose = "down",
  flip = false,
  longHair = false,
}: {
  x: number;
  y: number;
  s?: number;
  shirt?: string;
  hair?: string;
  skin?: string;
  mood?: Mood;
  pose?: Pose;
  flip?: boolean;
  longHair?: boolean;
}) {
  const arm = (side: 1 | -1) => {
    const up = pose === "cheer" || (pose === "wave" && side === 1);
    const point = pose === "point" && side === 1;
    const hold = pose === "hold";
    const end = up ? `${side * 26},-82` : point ? `${side * 34},-52` : hold ? `${side * 8},-36` : `${side * 20},-24`;
    return <polyline points={`${side * 13},-50 ${up ? `${side * 22},-66` : point ? `${side * 24},-50` : hold ? `${side * 20},-38` : `${side * 18},-36`} ${end}`} fill="none" stroke={skin} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />;
  };
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      {/* legs */}
      <line x1="-7" y1="-20" x2="-9" y2="-1" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
      <line x1="7" y1="-20" x2="9" y2="-1" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
      {arm(-1)}
      {arm(1)}
      {/* body */}
      <rect x="-15" y="-56" width="30" height="40" rx="10" fill={shirt} stroke={DARK} strokeWidth="2" />
      {/* head */}
      {longHair && <path d="M -18 -72 Q -20 -50 -12 -48 L 12 -48 Q 20 -50 18 -72 Z" fill={hair} />}
      <circle cx="0" cy="-72" r="16" fill={skin} stroke={DARK} strokeWidth="2" />
      <path d="M -16 -75 Q -14 -92 0 -90 Q 14 -92 16 -75 Q 8 -84 0 -82 Q -8 -84 -16 -75 Z" fill={hair} />
      {/* eyes */}
      {mood === "surprised" ? (
        <>
          <circle cx="-6" cy="-73" r="2.8" fill="white" stroke={DARK} strokeWidth="1.5" />
          <circle cx="6" cy="-73" r="2.8" fill="white" stroke={DARK} strokeWidth="1.5" />
          <circle cx="-6" cy="-73" r="1.2" fill={DARK} />
          <circle cx="6" cy="-73" r="1.2" fill={DARK} />
        </>
      ) : (
        <>
          <circle cx="-6" cy="-73" r="2" fill={DARK} />
          <circle cx="6" cy="-73" r="2" fill={DARK} />
        </>
      )}
      {mood === "thinking" && <line x1="2" y1="-80" x2="10" y2="-82" stroke={DARK} strokeWidth="1.8" strokeLinecap="round" />}
      {/* mouth */}
      {mood === "happy" && <path d="M -6 -66 Q 0 -60 6 -66" fill="none" stroke={DARK} strokeWidth="2" strokeLinecap="round" />}
      {mood === "surprised" && <ellipse cx="0" cy="-64" rx="3" ry="4" fill={DARK} />}
      {mood === "thinking" && <line x1="-4" y1="-64" x2="5" y2="-65" stroke={DARK} strokeWidth="2" strokeLinecap="round" />}
      {mood === "sad" && <path d="M -6 -62 Q 0 -68 6 -62" fill="none" stroke={DARK} strokeWidth="2" strokeLinecap="round" />}
      <circle cx="-11" cy="-67" r="2.5" fill="#f87171" opacity="0.35" />
      <circle cx="11" cy="-67" r="2.5" fill="#f87171" opacity="0.35" />
    </g>
  );
}

/** Header for a "Try it" activity, with a big reset button. */
export function TryShell({ title, hint, onReset, children }: { title: string; hint?: string; onReset: () => void; children: ReactNode }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h4 className="text-lg font-black leading-tight">{title}</h4>
          {hint && <p className="mt-0.5 text-sm font-semibold text-muted">{hint}</p>}
        </div>
        <button type="button" onClick={onReset} className="btn-ghost h-11 shrink-0 !px-4" aria-label="Reset activity">
          <RotateCcw className="h-4 w-4" /> Reset
        </button>
      </div>
      {children}
    </div>
  );
}

/** A big, chunky touch button. */
export function Pad({
  onClick,
  children,
  disabled,
  color = "rgb(var(--accent))",
  solid,
  label,
  className,
}: {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  color?: string;
  solid?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={clsx("inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-1.5 rounded-2xl border-2 px-3 text-sm font-extrabold transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-40", className)}
      style={{ borderColor: color, color: solid ? "white" : color, background: solid ? color : `color-mix(in srgb, ${color} 10%, transparent)`, touchAction: "manipulation" }}
    >
      {children}
    </button>
  );
}

/** Live feedback line. `k` re-triggers the pop animation when the message changes. */
export function Feedback({ tone, k, children }: { tone: "good" | "bad" | "info" | "warn"; k: string; children: ReactNode }) {
  const cls = {
    good: "border-good/40 bg-good/10 text-good-shade",
    bad: "border-bad/40 bg-bad/10 text-bad-shade",
    warn: "border-warn/50 bg-warn/10 text-ink",
    info: "border-line bg-surface-2 text-ink",
  }[tone];
  return (
    <div role="status" aria-live="polite">
      <motion.p key={k} initial={{ opacity: 0, y: 4, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} className={clsx("rounded-2xl border-2 px-4 py-2.5 text-[15px] font-bold leading-snug", cls)}>
        {children}
      </motion.p>
    </div>
  );
}

/** Ground strip for comic panels. */
export function Ground({ y = 140, color = "#bbf7d0", w = 240 }: { y?: number; color?: string; w?: number }) {
  return <rect x="0" y={y} width={w} height="20" fill={color} />;
}
