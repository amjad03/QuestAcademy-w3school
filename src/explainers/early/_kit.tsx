"use client";

/**
 * Shared picture-book kit for the early-maths explainers: a responsive SVG
 * stage, friendly drawn objects (apples, cookies, ducks, kids…), number
 * badges, and the one-tap step every guided mission is built from.
 */

import { useState, type ReactNode } from "react";
import { motion, type Transition } from "framer-motion";
import type { MissionApi } from "../types";
import { useLabel } from "../useLabel";

/* ------------------------------------------------------------------ */
/* Motion presets                                                      */
/* ------------------------------------------------------------------ */

export const spring: Transition = { type: "spring", stiffness: 380, damping: 20 };

/** Pop in from nothing after `delay` seconds. */
export const pop = (delay = 0) => ({
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { ...spring, delay },
});

/** Fade + rise in after `delay` seconds. */
export const rise = (delay = 0) => ({
  initial: { y: 14, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.45, delay, ease: "easeOut" as const },
});

export const INK = "#1c2333";
export const FONT = "ui-rounded, 'Nunito', system-ui, sans-serif";

/* ------------------------------------------------------------------ */
/* Stage                                                               */
/* ------------------------------------------------------------------ */

export function Stage({ label, children, vb = "0 0 400 260", maxH = 260 }: { label: string; children: ReactNode; vb?: string; maxH?: number }) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className="block h-auto w-full" style={{ maxHeight: maxH, fontFamily: FONT }}>
      {children}
    </svg>
  );
}

/** Big bold text in SVG. */
export function T({ x, y, children, size = 28, color = INK, weight = 900, anchor = "middle", ...rest }: { x: number; y: number; children: ReactNode; size?: number; color?: string; weight?: number; anchor?: "start" | "middle" | "end" } & Omit<React.SVGProps<SVGTextElement>, "x" | "y" | "children">) {
  return (
    <text x={x} y={y} fontSize={size} fill={color} fontWeight={weight} textAnchor={anchor} dominantBaseline="central" style={{ fontFamily: FONT }} {...rest}>
      {children}
    </text>
  );
}

/** Emoji drawn inside an SVG. */
export function Emo({ x, y, size = 32, children }: { x: number; y: number; size?: number; children: string }) {
  return (
    <text x={x} y={y} fontSize={size} textAnchor="middle" dominantBaseline="central">
      {children}
    </text>
  );
}

/** Round number tag (counting badge). */
export function Badge({ x, y, n, color = "#F97316", r = 13, delay, ring }: { x: number; y: number; n: number | string; color?: string; r?: number; delay?: number; ring?: boolean }) {
  const anim = delay === undefined ? {} : pop(delay);
  return (
    <motion.g {...anim}>
      {ring && <circle cx={x} cy={y} r={r + 4} fill="none" stroke={color} strokeWidth={3} opacity={0.4} />}
      <circle cx={x} cy={y} r={r} fill={color} stroke="white" strokeWidth={2.5} />
      <T x={x} y={y + 1} size={r * 1.25} color="white">
        {n}
      </T>
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/* Drawn things (all centred on x, y)                                  */
/* ------------------------------------------------------------------ */

export function Apple({ x, y, r = 18, color = "#EF4444" }: { x: number; y: number; r?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M0 ${-r * 0.7} C ${r * 0.9} ${-r * 1.25}, ${r * 1.35} ${-r * 0.1}, ${r * 0.9} ${r * 0.55} C ${r * 0.6} ${r * 1.05}, ${r * 0.2} ${r * 1.05}, 0 ${r * 0.85} C ${-r * 0.2} ${r * 1.05}, ${-r * 0.6} ${r * 1.05}, ${-r * 0.9} ${r * 0.55} C ${-r * 1.35} ${-r * 0.1}, ${-r * 0.9} ${-r * 1.25}, 0 ${-r * 0.7} Z`} fill={color} stroke="rgba(0,0,0,.18)" strokeWidth={1.5} />
      <ellipse cx={-r * 0.4} cy={-r * 0.25} rx={r * 0.16} ry={r * 0.28} fill="white" opacity={0.45} />
      <path d={`M0 ${-r * 0.7} q ${r * 0.05} ${-r * 0.35} ${r * 0.2} ${-r * 0.5}`} stroke="#7C4A1E" strokeWidth={r * 0.13} fill="none" strokeLinecap="round" />
      <path d={`M${r * 0.12} ${-r * 0.95} q ${r * 0.45} ${-r * 0.3} ${r * 0.7} ${-r * 0.05} q ${-r * 0.4} ${r * 0.25} ${-r * 0.7} ${r * 0.05} z`} fill="#22C55E" />
    </g>
  );
}

export function Cookie({ x, y, r = 14, bitten }: { x: number; y: number; r?: number; bitten?: boolean }) {
  const chips = [
    [-0.4, -0.3],
    [0.35, -0.4],
    [0.05, 0.1],
    [-0.35, 0.4],
    [0.45, 0.35],
  ];
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="#E2A458" stroke="#B9772F" strokeWidth={1.6} />
      <circle r={r * 0.8} fill="#EDB873" opacity={0.6} />
      {chips.map(([a, b], i) => (
        <ellipse key={i} cx={a * r} cy={b * r} rx={r * 0.14} ry={r * 0.11} fill="#5B3416" />
      ))}
      {bitten && <circle cx={r * 0.8} cy={-r * 0.6} r={r * 0.45} fill="white" />}
    </g>
  );
}

export function Plate({ x, y, rx = 46, ry = 18 }: { x: number; y: number; rx?: number; ry?: number }) {
  return (
    <g>
      <ellipse cx={x} cy={y + 3} rx={rx} ry={ry} fill="rgba(0,0,0,.08)" />
      <ellipse cx={x} cy={y} rx={rx} ry={ry} fill="#FFFFFF" stroke="#CBD5E1" strokeWidth={2} />
      <ellipse cx={x} cy={y} rx={rx * 0.72} ry={ry * 0.68} fill="#F1F5F9" />
    </g>
  );
}

export function Duck({ x, y, s = 1, color = "#FACC15", flip }: { x: number; y: number; s?: number; color?: string; flip?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <ellipse cx={0} cy={6} rx={20} ry={13} fill={color} stroke="rgba(0,0,0,.15)" strokeWidth={1.5} />
      <path d="M-18 2 q -8 -8 -4 -14 q 6 6 10 8 z" fill={color} />
      <circle cx={12} cy={-10} r={10} fill={color} stroke="rgba(0,0,0,.15)" strokeWidth={1.5} />
      <path d="M20 -11 l 10 3 l -10 4 z" fill="#F97316" />
      <circle cx={14} cy={-12} r={2.2} fill={INK} />
      <path d="M-6 4 q 8 8 16 0" stroke="rgba(0,0,0,.2)" strokeWidth={2} fill="none" strokeLinecap="round" />
    </g>
  );
}

export function Bird({ x, y, color = "#38BDF8", flap }: { x: number; y: number; color?: string; flap?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx={0} cy={0} rx={15} ry={12} fill={color} stroke="rgba(0,0,0,.15)" strokeWidth={1.5} />
      <circle cx={9} cy={-8} r={8} fill={color} stroke="rgba(0,0,0,.15)" strokeWidth={1.5} />
      <path d="M16 -9 l 7 2 l -7 3 z" fill="#F59E0B" />
      <circle cx={11} cy={-10} r={1.8} fill={INK} />
      {flap ? (
        <motion.path d="M-4 -4 q -10 -20 -20 -14 q 8 8 20 14 z" fill="rgba(0,0,0,.18)" animate={{ rotate: [0, -25, 0] }} transition={{ repeat: Infinity, duration: 0.25 }} />
      ) : (
        <path d="M-8 -2 q 6 10 16 4" stroke="rgba(0,0,0,.2)" strokeWidth={3} fill="none" strokeLinecap="round" />
      )}
      <path d="M-14 2 l -8 4 l 8 1 z" fill={color} />
      <path d="M-2 11 v 6 M4 11 v 6" stroke="#F59E0B" strokeWidth={2} strokeLinecap="round" />
    </g>
  );
}

export type Mood = "happy" | "sad" | "wow" | "think";

/** A little cartoon kid, standing; (x, y) is the middle of the feet. */
export function Kid({ x, y, s = 1, shirt = "#3B82F6", skin = "#F2C29B", hair = "#4B2E16", mood = "happy", bow, arms = "down" }: { x: number; y: number; s?: number; shirt?: string; skin?: string; hair?: string; mood?: Mood; bow?: boolean; arms?: "down" | "up" | "point" }) {
  const mouth =
    mood === "happy" ? <path d="M-7 -55 q 7 7 14 0" stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" /> : mood === "sad" ? <path d="M-6 -51 q 6 -6 12 0" stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" /> : mood === "wow" ? <ellipse cx={0} cy={-53} rx={4} ry={5} fill={INK} /> : <path d="M-5 -53 h 10" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />;
  const armL = arms === "up" ? "M-14 -30 l -14 -22" : "M-14 -30 l -10 22";
  const armR = arms === "up" ? "M14 -30 l 14 -22" : arms === "point" ? "M14 -30 l 22 -8" : "M14 -30 l 10 22";
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d={armL} stroke={skin} strokeWidth={7} strokeLinecap="round" />
      <path d={armR} stroke={skin} strokeWidth={7} strokeLinecap="round" />
      <path d="M-8 -6 v 6 M8 -6 v 6" stroke="#334155" strokeWidth={7} strokeLinecap="round" />
      <path d="M-15 -36 q 15 -6 30 0 l 4 32 h -38 z" fill={shirt} />
      <circle cx={0} cy={-60} r={19} fill={skin} />
      <path d="M-19 -62 q 2 -20 19 -20 q 17 0 19 20 q -8 -10 -19 -10 q -11 0 -19 10 z" fill={hair} />
      {bow && <path d="M10 -80 l 10 -6 v 12 z M10 -80 l -2 -9 l 12 3 z" fill="#EC4899" />}
      <circle cx={-7} cy={-62} r={2.6} fill={INK} />
      <circle cx={7} cy={-62} r={2.6} fill={INK} />
      <circle cx={-12} cy={-55} r={3} fill="#F87171" opacity={0.35} />
      <circle cx={12} cy={-55} r={3} fill="#F87171" opacity={0.35} />
      {mouth}
    </g>
  );
}

/** Pointing hand emoji that glides between points. */
export function Finger({ path, delay = 0, step = 0.7, size = 30 }: { path: { x: number; y: number }[]; delay?: number; step?: number; size?: number }) {
  if (!path.length) return null;
  const xs = path.map((p) => p.x + 4);
  const ys = path.map((p) => p.y + 26);
  return (
    <motion.g initial={{ x: xs[0], y: ys[0], opacity: 0 }} animate={{ x: xs, y: ys, opacity: 1 }} transition={{ delay, duration: Math.max(0.3, (path.length - 1) * step), ease: "easeInOut", opacity: { delay, duration: 0.2 } }}>
      <text fontSize={size} textAnchor="middle" dominantBaseline="central">
        👆
      </text>
    </motion.g>
  );
}

/* ------------------------------------------------------------------ */
/* Mission steps                                                       */
/* ------------------------------------------------------------------ */

/** The one big action button of a mission step (at least 56px tall). */
export function MissionButton({ color, onClick, disabled, children }: { color: string; onClick: () => void; disabled?: boolean; children: ReactNode }) {
  const tr = useLabel();
  return (
    <button type="button" onClick={onClick} disabled={disabled} className="mx-auto mt-3 flex min-h-[3.5rem] items-center justify-center gap-2 rounded-2xl border-2 border-b-4 px-7 text-xl font-black text-white transition active:translate-y-[2px] disabled:opacity-50" style={{ background: color, borderColor: `color-mix(in srgb, ${color} 70%, black)` }}>
      {tr(children)}
    </button>
  );
}

/**
 * A one-tap mission step: shows `render(false)`, and after the learner taps
 * the big button shows `render(true)` (kept on screen) and reports done.
 */
export function TapStep({ api, color, button, render }: { api: MissionApi; color: string; button: ReactNode; render: (on: boolean) => ReactNode }) {
  const [on, setOn] = useState(false);
  return (
    <div className="select-none">
      {render(on)}
      <MissionButton
        color={color}
        disabled={on || api.complete}
        onClick={() => {
          setOn(true);
          api.done();
        }}
      >
        {button}
      </MissionButton>
    </div>
  );
}

/** Artwork box for comic panels and analogy figures. */
export function Panel({ label, children, vb = "0 0 240 150" }: { label: string; children: ReactNode; vb?: string }) {
  return (
    <Stage label={label} vb={vb} maxH={180}>
      {children}
    </Stage>
  );
}

/** Rounded table top for comic scenes. */
export function Table({ y = 118, x = 10, w = 220 }: { y?: number; x?: number; w?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={10} rx={5} fill="#C08552" />
      <rect x={x + 14} y={y + 10} width={8} height={24} fill="#A0683A" />
      <rect x={x + w - 22} y={y + 10} width={8} height={24} fill="#A0683A" />
    </g>
  );
}
