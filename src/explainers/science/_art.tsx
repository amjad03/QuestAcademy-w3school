"use client";

/**
 * Shared illustration kit for the science explainers: a scene wrapper, a few
 * friendly characters (kids, a water drop, the Sun) and small drawing helpers
 * (arrows, labels, tags), plus the frame used by every "Try it" activity.
 *
 * Drawings use fixed colours and paint their own backgrounds, so they read the
 * same in light and dark mode.
 */

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

export const INK = "#1e293b";

/* ------------------------------------------------------------------ */
/* Scene wrappers                                                      */
/* ------------------------------------------------------------------ */

export function Scene({ label, children, vb = "0 0 400 260", max = 260 }: { label: string; children: ReactNode; vb?: string; max?: number }) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className="block h-auto w-full select-none" style={{ maxHeight: max }}>
      {children}
    </svg>
  );
}

/** Small artwork for comic panels and analogy figures. */
export function Panel({ label, children, vb = "0 0 240 160" }: { label: string; children: ReactNode; vb?: string }) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className="block h-auto w-full select-none" style={{ maxHeight: 170 }}>
      {children}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Drawing helpers                                                     */
/* ------------------------------------------------------------------ */

export function Label({ x, y, children, color = INK, size = 14, anchor = "middle" }: { x: number; y: number; children: ReactNode; color?: string; size?: number; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={900} fill={color} stroke="#fff" strokeWidth={4} strokeLinejoin="round" paintOrder="stroke" style={{ fontFamily: "inherit" }}>
      {children}
    </text>
  );
}

/** A rounded name-tag, e.g. "EVAPORATION". */
export function Tag({ x, y, text, color, size = 13, delay = 0.2 }: { x: number; y: number; text: string; color: string; size?: number; delay?: number }) {
  const w = text.length * size * 0.66 + 18;
  return (
    <motion.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.4 }}>
      <rect x={x - w / 2} y={y - size} width={w} height={size + 12} rx={(size + 12) / 2} fill={color} stroke="#fff" strokeWidth={2.5} />
      <text x={x} y={y + 2} textAnchor="middle" fontSize={size} fontWeight={900} fill="#fff" style={{ fontFamily: "inherit", letterSpacing: 0.5 }}>
        {text}
      </text>
    </motion.g>
  );
}

function head(x2: number, y2: number, a: number, h: number) {
  return `${x2},${y2} ${x2 - h * Math.cos(a - 0.5)},${y2 - h * Math.sin(a - 0.5)} ${x2 - h * Math.cos(a + 0.5)},${y2 - h * Math.sin(a + 0.5)}`;
}

/** Straight arrow; with `cx`/`cy` it curves through that control point. */
export function Arrow({ x1, y1, x2, y2, cx, cy, color = INK, w = 4, h = 12, dash, draw = true, delay = 0 }: { x1: number; y1: number; x2: number; y2: number; cx?: number; cy?: number; color?: string; w?: number; h?: number; dash?: boolean; draw?: boolean; delay?: number }) {
  const curved = cx !== undefined && cy !== undefined;
  const a = curved ? Math.atan2(y2 - cy!, x2 - cx!) : Math.atan2(y2 - y1, x2 - x1);
  const ex = x2 - Math.cos(a) * h * 0.6;
  const ey = y2 - Math.sin(a) * h * 0.6;
  const d = curved ? `M ${x1} ${y1} Q ${cx} ${cy} ${ex} ${ey}` : `M ${x1} ${y1} L ${ex} ${ey}`;
  return (
    <g>
      <motion.path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" strokeDasharray={dash ? "2 9" : undefined} initial={draw ? { pathLength: 0 } : false} animate={{ pathLength: 1 }} transition={{ duration: 0.8, delay }} />
      <motion.polygon points={head(x2, y2, a, h)} fill={color} initial={draw ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ delay: delay + 0.7 }} />
    </g>
  );
}

/** Two dots and a mouth. Centre is between the eyes. */
export function Face({ x = 0, y = 0, s = 1, mood = "happy", eye = INK }: { x?: number; y?: number; s?: number; mood?: Mood; eye?: string }) {
  const mouth =
    mood === "sad"
      ? <path d="M -6 9 Q 0 4 6 9" fill="none" stroke={eye} strokeWidth={2.2} strokeLinecap="round" />
      : mood === "wow"
        ? <ellipse cx={0} cy={8} rx={3.5} ry={4.5} fill={eye} />
        : mood === "sleep"
          ? <path d="M -4 8 h 8" stroke={eye} strokeWidth={2.2} strokeLinecap="round" />
          : <path d="M -7 5 Q 0 13 7 5" fill="none" stroke={eye} strokeWidth={2.4} strokeLinecap="round" />;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {mood === "sleep" ? (
        <>
          <path d="M -10 -1 q 3 3 6 0" fill="none" stroke={eye} strokeWidth={2} strokeLinecap="round" />
          <path d="M 4 -1 q 3 3 6 0" fill="none" stroke={eye} strokeWidth={2} strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx={-7} cy={-1} r={2.8} fill={eye} />
          <circle cx={7} cy={-1} r={2.8} fill={eye} />
          <circle cx={-6} cy={-2} r={0.9} fill="#fff" />
          <circle cx={8} cy={-2} r={0.9} fill="#fff" />
        </>
      )}
      {mouth}
      {mood === "happy" && (
        <>
          <circle cx={-12} cy={5} r={2.6} fill="#fb7185" opacity={0.45} />
          <circle cx={12} cy={5} r={2.6} fill="#fb7185" opacity={0.45} />
        </>
      )}
    </g>
  );
}

export type Mood = "happy" | "wow" | "sad" | "sleep";

/* ------------------------------------------------------------------ */
/* Characters and props                                                */
/* ------------------------------------------------------------------ */

/** The Sun with spinning rays and an optional face. Origin is its centre. */
export function Sun({ x, y, r = 26, face = true, spin = true, glow = false }: { x: number; y: number; r?: number; face?: boolean; spin?: boolean; glow?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {glow && (
        <motion.circle r={r * 1.8} fill="#FFE066" opacity={0.35} animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
      )}
      <motion.g animate={spin ? { rotate: 360 } : undefined} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return <line key={i} x1={Math.cos(a) * (r + 5)} y1={Math.sin(a) * (r + 5)} x2={Math.cos(a) * (r + (i % 2 ? 12 : 17))} y2={Math.sin(a) * (r + (i % 2 ? 12 : 17))} stroke="#F59F00" strokeWidth={4} strokeLinecap="round" />;
        })}
      </motion.g>
      <circle r={r} fill="#FFD43B" stroke="#F59F00" strokeWidth={3} />
      {face && <Face s={r / 24} y={r * 0.05} eye="#7c4a03" />}
    </g>
  );
}

/** Puffy cloud. Origin is the bottom-centre. */
export function Cloud({ x, y, s = 1, fill = "#ffffff", edge = "#c7d2e0", face, mood = "happy" }: { x: number; y: number; s?: number; fill?: string; edge?: string; face?: boolean; mood?: Mood }) {
  const puffs: [number, number, number][] = [
    [-30, -14, 15],
    [-10, -26, 20],
    [14, -24, 17],
    [32, -12, 13],
    [0, -10, 18],
  ];
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {puffs.map(([cx, cy, r], i) => (
        <circle key={`e${i}`} cx={cx} cy={cy} r={r + 2.5} fill={edge} />
      ))}
      <rect x={-42} y={-14} width={84} height={14} rx={7} fill={edge} />
      {puffs.map(([cx, cy, r], i) => (
        <circle key={`f${i}`} cx={cx} cy={cy} r={r} fill={fill} />
      ))}
      <rect x={-40} y={-12} width={80} height={10} rx={5} fill={fill} />
      {face && <Face y={-14} s={0.9} mood={mood} eye={fill === "#ffffff" ? INK : "#1f2937"} />}
    </g>
  );
}

export const DROP_PATH = "M 0 -22 C 9 -9 15 -1 15 8 A 15 15 0 1 1 -15 8 C -15 -1 -9 -9 0 -22 Z";

/** Drip the water drop. Origin is the centre of the round part. */
export function DropBuddy({ x, y, s = 1, mood = "happy", fill = "#38bdf8", ghost }: { x: number; y: number; s?: number; mood?: Mood; fill?: string; ghost?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} opacity={ghost ? 0.55 : 1}>
      <path d={DROP_PATH} fill={fill} stroke="#0369a1" strokeWidth={2.5} strokeDasharray={ghost ? "4 4" : undefined} />
      <ellipse cx={-6} cy={-2} rx={3} ry={6} fill="#fff" opacity={0.6} transform="rotate(20 -6 -2)" />
      <Face y={8} s={0.75} mood={mood} />
    </g>
  );
}

/** A plain raindrop / water particle. */
export function Drop({ x, y, s = 0.35, fill = "#38bdf8" }: { x: number; y: number; s?: number; fill?: string }) {
  return <path d={DROP_PATH} transform={`translate(${x} ${y}) scale(${s})`} fill={fill} stroke="#0284c7" strokeWidth={2 / s / 3} />;
}

/**
 * A child. Origin is between the feet; about 92 units tall at s = 1.
 * `arm` sets the right arm (viewer's right): down, up (waving), or out (holding).
 */
export function Kid({ x, y, s = 1, skin = "#F1C27D", hair = "#4a2c17", shirt = "#3b82f6", mood = "happy", arm = "down", flip, pyjamas, children }: { x: number; y: number; s?: number; skin?: string; hair?: string; shirt?: string; mood?: Mood; arm?: "down" | "up" | "out"; flip?: boolean; pyjamas?: boolean; children?: ReactNode }) {
  const armPath = arm === "up" ? "M 14 -48 L 28 -72" : arm === "out" ? "M 14 -48 L 34 -50" : "M 14 -48 L 22 -26";
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
      <path d="M -7 -22 L -9 0 M 7 -22 L 9 0" stroke={pyjamas ? shirt : "#334155"} strokeWidth={7} strokeLinecap="round" />
      <path d="M -12 -2 h 8 M 4 -2 h 8" stroke="#111827" strokeWidth={5} strokeLinecap="round" />
      <path d="M -14 -48 L -22 -26" stroke={skin} strokeWidth={6} strokeLinecap="round" />
      <path d={armPath} stroke={skin} strokeWidth={6} strokeLinecap="round" />
      <rect x={-15} y={-56} width={30} height={36} rx={11} fill={shirt} stroke="rgba(0,0,0,0.15)" strokeWidth={1.5} />
      {pyjamas && <path d="M -8 -48 l 3 3 m 6 5 l 3 3 m -10 6 l 3 3" stroke="#fff" strokeWidth={2} strokeLinecap="round" />}
      <circle cx={0} cy={-72} r={17} fill={skin} />
      <path d="M -17 -74 C -17 -94, 17 -94, 17 -74 C 12 -82, -4 -84, -17 -74 Z" fill={hair} />
      <g transform={flip ? "scale(-1 1)" : undefined}>
        <Face y={-71} s={0.75} mood={mood} />
      </g>
      {children}
    </g>
  );
}

/** Simple rounded tree. Origin is the base of the trunk. */
export function Tree({ x, y, s = 1, leaves = "#22c55e", bare, blossom, snow }: { x: number; y: number; s?: number; leaves?: string; bare?: boolean; blossom?: boolean; snow?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M -5 0 L -4 -40 L 4 -40 L 5 0 Z" fill="#92400e" />
      {bare ? (
        <path d="M 0 -36 L -16 -58 M 0 -40 L 14 -62 M -8 -48 L -20 -50 M 6 -52 L 20 -52 M 0 -42 L 0 -68" stroke="#92400e" strokeWidth={3.5} strokeLinecap="round" />
      ) : (
        <>
          <circle cx={-14} cy={-48} r={16} fill={leaves} />
          <circle cx={14} cy={-48} r={16} fill={leaves} />
          <circle cx={0} cy={-64} r={20} fill={leaves} />
          {blossom && [[-16, -52], [12, -44], [2, -72], [-6, -58], [18, -58], [-20, -42]].map(([bx, by], i) => <circle key={i} cx={bx} cy={by} r={3.5} fill="#f9a8d4" stroke="#fff" strokeWidth={1} />)}
        </>
      )}
      {snow && <path d={bare ? "M -18 -50 h 6 M 10 -60 h 7 M -4 -68 h 6" : "M -26 -54 q 12 -10 24 0 M 0 -80 q 10 -6 16 2"} stroke="#fff" strokeWidth={4} strokeLinecap="round" />}
    </g>
  );
}

/** Speech/thought bubble drawn inside an SVG. */
export function Bubble({ x, y, w, text, size = 11, tail = "left" }: { x: number; y: number; w: number; text: string; size?: number; tail?: "left" | "right" }) {
  const h = size + 14;
  const tx = tail === "left" ? x + 14 : x + w - 14;
  return (
    <g>
      <path d={`M ${tx - 6} ${y + h - 1} L ${tx + (tail === "left" ? -8 : 8)} ${y + h + 10} L ${tx + 6} ${y + h - 1} Z`} fill="#fff" stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <rect x={x} y={y} width={w} height={h} rx={h / 2} fill="#fff" stroke={INK} strokeWidth={1.8} />
      <rect x={tx - 5} y={y + h - 3} width={10} height={4} fill="#fff" />
      <text x={x + w / 2} y={y + h / 2 + size / 2.8} textAnchor="middle" fontSize={size} fontWeight={800} fill={INK} style={{ fontFamily: "inherit" }}>
        {text}
      </text>
    </g>
  );
}

/** Deterministic pseudo-random numbers so drawings match on server and client. */
export function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

/* ------------------------------------------------------------------ */
/* "Try it" frame                                                      */
/* ------------------------------------------------------------------ */

export function TryShell({ title, hint, onReset, status, color, children, done }: { title: string; hint: string; onReset: () => void; status?: ReactNode; color: string; children: ReactNode; done?: boolean }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h4 className="text-lg font-black leading-tight">{title}</h4>
          <p className="mt-0.5 text-sm font-semibold text-muted">{hint}</p>
        </div>
        <button type="button" onClick={onReset} className="btn-ghost h-12 !px-4">
          <RotateCcw className="h-5 w-5" /> Try again
        </button>
      </div>
      {children}
      {status !== undefined && (
        <motion.p
          key={typeof status === "string" ? status : undefined}
          initial={{ opacity: 0.4, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          aria-live="polite"
          className="mt-3 rounded-2xl border-2 px-4 py-3 text-base font-extrabold leading-snug"
          style={{ background: `color-mix(in srgb, ${color} ${done ? 22 : 10}%, transparent)`, borderColor: `color-mix(in srgb, ${color} 40%, transparent)` }}
        >
          {status}
        </motion.p>
      )}
    </div>
  );
}

/** Big, chunky, touch-friendly button in the explainer colour. */
export function BigButton({ onClick, color, children, active, disabled, label }: { onClick: () => void; color: string; children: ReactNode; active?: boolean; disabled?: boolean; label?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active}
      className="btn min-h-[52px] !px-4 !normal-case disabled:opacity-40"
      style={active ? { background: color, borderColor: `color-mix(in srgb, ${color} 70%, black)`, color: "#fff" } : { background: `color-mix(in srgb, ${color} 12%, rgb(var(--surface)))`, borderColor: `color-mix(in srgb, ${color} 45%, rgb(var(--line)))`, color: "rgb(var(--ink))" }}
    >
      {children}
    </button>
  );
}

/** Large range slider with emoji ends, for little fingers. */
export function BigSlider({ label, value, min, max, step = 1, onChange, left, right, color }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void; left: ReactNode; right: ReactNode; color: string }) {
  const pct = ((value - min) / (max - min || 1)) * 100;
  return (
    <label className="flex items-center gap-3 rounded-2xl border-2 border-line bg-surface-2 px-3 py-2">
      <span className="text-2xl" aria-hidden>
        {left}
      </span>
      <span className="sr-only">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-3 min-w-0 flex-1 cursor-pointer appearance-none rounded-full [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[var(--thumb)] [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[var(--thumb)] [&::-webkit-slider-thumb]:shadow-md"
        style={{ background: `linear-gradient(90deg, ${color} ${pct}%, rgb(var(--line)) ${pct}%)`, ["--thumb" as string]: color, touchAction: "none" }}
      />
      <span className="text-2xl" aria-hidden>
        {right}
      </span>
    </label>
  );
}
