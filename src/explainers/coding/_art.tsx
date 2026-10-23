"use client";

/**
 * Shared drawing kit for the coding explainers: a responsive SVG stage and a
 * small cast (Bolt the robot, kids, boxes, routers, devices) drawn in plain
 * SVG so every scene stays crisp and theme-friendly.
 */

import type { ReactNode } from "react";
import { motion } from "framer-motion";

/** Ink that is always dark (for drawings on light comic / analogy panels). */
export const INK = "#1c2333";
/** Theme-aware ink for labels drawn straight onto the stage. */
export const STAGE_INK = "rgb(var(--ink))";
export const STAGE_MUTED = "rgb(var(--muted))";

export function Stage({ label, vb = "0 0 400 240", children, className }: { label: string; vb?: string; children: ReactNode; className?: string }) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className={className ?? "h-auto w-full"} style={{ maxHeight: 260 }} preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  );
}

/** Small art for comic panels and analogy figures (max ~150px tall). */
export function Art({ label, vb = "0 0 200 140", children }: { label: string; vb?: string; children: ReactNode }) {
  return (
    <svg viewBox={vb} role="img" aria-label={label} className="h-auto w-full" style={{ maxHeight: 160 }}>
      {children}
    </svg>
  );
}

/** A line of code drawn as a dark chip, centred at (x, y). */
export function CodeChip({ x, y, text, w, glow }: { x: number; y: number; text: string; w?: number; glow?: string }) {
  const width = w ?? Math.max(60, text.length * 8.4 + 22);
  return (
    <g>
      <rect x={x - width / 2} y={y - 14} width={width} height={28} rx={8} fill="#1f2937" stroke={glow ?? "#374151"} strokeWidth={glow ? 3 : 1.5} />
      <text x={x} y={y + 5} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize={14} fontWeight={700} fill="#f9fafb">
        {text}
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Bolt the robot                                                      */
/* ------------------------------------------------------------------ */

/** Bolt, centred on (0,0), about 60 units tall at s = 1. Wrap in a translated <g>. */
export function Robot({ color = "#3B82F6", s = 1, mood = "happy", wave }: { color?: string; s?: number; mood?: "happy" | "sad" | "wow" | "tired"; wave?: boolean }) {
  const mouth =
    mood === "happy" ? "M-7 -12 q7 6 14 0" : mood === "sad" ? "M-7 -8 q7 -6 14 0" : mood === "tired" ? "M-6 -10 h12" : "M-3 -11 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0";
  return (
    <g transform={`scale(${s})`}>
      {/* antenna */}
      <line x1={0} y1={-38} x2={0} y2={-46} stroke={INK} strokeWidth={2.5} />
      <circle cx={0} cy={-48} r={4} fill="#F59E0B" stroke={INK} strokeWidth={2} />
      {/* head */}
      <rect x={-17} y={-38} width={34} height={26} rx={8} fill="#E5E7EB" stroke={INK} strokeWidth={2.5} />
      <rect x={-12} y={-33} width={24} height={13} rx={5} fill="#0F172A" />
      {mood === "tired" ? (
        <>
          <line x1={-8} y1={-27} x2={-3} y2={-27} stroke="#67E8F9" strokeWidth={2.5} strokeLinecap="round" />
          <line x1={3} y1={-27} x2={8} y2={-27} stroke="#67E8F9" strokeWidth={2.5} strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx={-5.5} cy={-27} r={2.6} fill="#67E8F9" />
          <circle cx={5.5} cy={-27} r={2.6} fill="#67E8F9" />
        </>
      )}
      <path d={mouth} transform="translate(0 -4) scale(0.6)" fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {/* body */}
      <rect x={-15} y={-12} width={30} height={26} rx={7} fill={color} stroke={INK} strokeWidth={2.5} />
      <circle cx={0} cy={1} r={4.5} fill="#FDE68A" stroke={INK} strokeWidth={1.5} />
      {/* arms */}
      <line x1={-15} y1={-6} x2={-24} y2={wave ? -18 : 4} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      <line x1={15} y1={-6} x2={24} y2={4} stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {/* wheels */}
      <circle cx={-8} cy={17} r={5} fill="#374151" stroke={INK} strokeWidth={2} />
      <circle cx={8} cy={17} r={5} fill="#374151" stroke={INK} strokeWidth={2} />
    </g>
  );
}

/** A friendly kid, feet at (0,0). `h` is the height in units. */
export function Kid({ h = 70, shirt = "#EC4899", skin = "#F2C29B", hair = "#4B2E1E", bow, mood = "happy" }: { h?: number; shirt?: string; skin?: string; hair?: string; bow?: boolean; mood?: "happy" | "wow" | "sad" }) {
  const head = h * 0.17;
  const neckY = -h + head * 2;
  return (
    <g>
      {/* legs */}
      <line x1={-5} y1={0} x2={-5} y2={-h * 0.36} stroke="#334155" strokeWidth={6} strokeLinecap="round" />
      <line x1={5} y1={0} x2={5} y2={-h * 0.36} stroke="#334155" strokeWidth={6} strokeLinecap="round" />
      {/* body */}
      <rect x={-12} y={neckY} width={24} height={-h * 0.36 - neckY + 4} rx={8} fill={shirt} stroke={INK} strokeWidth={2} />
      {/* arms */}
      <line x1={-12} y1={neckY + 6} x2={-18} y2={neckY + (-h * 0.36 - neckY) * 0.8} stroke={skin} strokeWidth={5} strokeLinecap="round" />
      <line x1={12} y1={neckY + 6} x2={18} y2={neckY + (-h * 0.36 - neckY) * 0.8} stroke={skin} strokeWidth={5} strokeLinecap="round" />
      {/* head */}
      <circle cx={0} cy={-h + head} r={head} fill={skin} stroke={INK} strokeWidth={2} />
      <path d={`M${-head} ${-h + head * 0.9} a${head} ${head} 0 0 1 ${head * 2} 0 q${-head} ${-head * 0.5} ${-head * 2} 0 z`} fill={hair} />
      {bow && <path d={`M${head * 0.6} ${-h + 2} l7 -5 v10 z M${head * 0.6} ${-h + 2} l-7 -5 v10 z`} fill="#F43F5E" stroke={INK} strokeWidth={1.2} />}
      <circle cx={-head * 0.38} cy={-h + head * 1.05} r={1.8} fill={INK} />
      <circle cx={head * 0.38} cy={-h + head * 1.05} r={1.8} fill={INK} />
      {mood === "wow" ? (
        <circle cx={0} cy={-h + head * 1.5} r={2.4} fill={INK} />
      ) : (
        <path d={mood === "sad" ? `M${-head * 0.35} ${-h + head * 1.6} q${head * 0.35} ${-3} ${head * 0.7} 0` : `M${-head * 0.4} ${-h + head * 1.4} q${head * 0.4} ${4} ${head * 0.8} 0`} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      )}
    </g>
  );
}

/** An open-top box with a name tag, centred at x, top edge at y. */
export function LabelBox({ x, y, w = 96, h = 70, name, color = "#F97316", children, glow }: { x: number; y: number; w?: number; h?: number; name: string; color?: string; children?: ReactNode; glow?: boolean }) {
  return (
    <g>
      {glow && <rect x={x - w / 2 - 6} y={y - 6} width={w + 12} height={h + 12} rx={14} fill="none" stroke={color} strokeWidth={3} strokeDasharray="6 5" opacity={0.7} />}
      {/* back flap */}
      <path d={`M${x - w / 2} ${y} l12 -14 h${w - 24} l12 14 z`} fill={shade(color, -0.15)} stroke={INK} strokeWidth={2} />
      {children}
      <rect x={x - w / 2} y={y} width={w} height={h} rx={6} fill={color} stroke={INK} strokeWidth={2.5} />
      {/* name tag */}
      <rect x={x - w / 2 + 10} y={y + h / 2 - 13} width={w - 20} height={26} rx={6} fill="#FFFBEB" stroke={INK} strokeWidth={2} />
      <text x={x} y={y + h / 2 + 5} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize={14} fontWeight={800} fill={INK}>
        {name}
      </text>
    </g>
  );
}

/** A value token (round chip with text), centred at (0,0). */
export function Token({ text, color = "#FDE68A", r = 18 }: { text: string; color?: string; r?: number }) {
  const w = Math.max(r * 2, text.length * 9 + 16);
  return (
    <g>
      <rect x={-w / 2} y={-r} width={w} height={r * 2} rx={r} fill={color} stroke={INK} strokeWidth={2.5} />
      <text x={0} y={5} textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontSize={15} fontWeight={800} fill={INK}>
        {text}
      </text>
    </g>
  );
}

/** A network router (rounded box with antennae), centred at (0,0). */
export function RouterIcon({ off, label, active }: { off?: boolean; label?: string; active?: boolean }) {
  return (
    <g>
      <line x1={-10} y1={-12} x2={-14} y2={-24} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
      <line x1={10} y1={-12} x2={14} y2={-24} stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
      <rect x={-22} y={-12} width={44} height={24} rx={7} fill={off ? "#9CA3AF" : active ? "#FDE68A" : "#E0F2FE"} stroke={INK} strokeWidth={2.5} />
      {[-11, -3, 5].map((cx, k) => (
        <circle key={k} cx={cx} cy={0} r={2.6} fill={off ? "#4B5563" : k === 2 ? "#22C55E" : "#0EA5E9"} />
      ))}
      <rect x={10} y={-3} width={7} height={6} rx={1.5} fill={off ? "#4B5563" : "#0F172A"} />
      {off && <path d="M-12 -10 L12 10 M12 -10 L-12 10" stroke="#DC2626" strokeWidth={4} strokeLinecap="round" />}
      {label && (
        <text x={0} y={27} textAnchor="middle" fontSize={11} fontWeight={800} fill={STAGE_MUTED}>
          {label}
        </text>
      )}
    </g>
  );
}

export function Laptop({ screen = "#BAE6FD", children }: { screen?: string; children?: ReactNode }) {
  return (
    <g>
      <rect x={-28} y={-34} width={56} height={38} rx={4} fill="#1F2937" stroke={INK} strokeWidth={2} />
      <rect x={-24} y={-30} width={48} height={30} rx={2} fill={screen} />
      {children}
      <path d="M-36 6 h72 l-6 8 h-60 z" fill="#9CA3AF" stroke={INK} strokeWidth={2} />
    </g>
  );
}

export function Tablet({ screen = "#FEF3C7", children }: { screen?: string; children?: ReactNode }) {
  return (
    <g>
      <rect x={-24} y={-32} width={48} height={64} rx={7} fill="#111827" stroke={INK} strokeWidth={2} />
      <rect x={-20} y={-27} width={40} height={50} rx={3} fill={screen} />
      {children}
      <circle cx={0} cy={27} r={2.2} fill="#6B7280" />
    </g>
  );
}

/** A little picture (sun over hills) used as the "photo" being sent. */
export function Photo({ w = 40, h = 30, clipId }: { w?: number; h?: number; clipId: string }) {
  return (
    <g>
      <defs>
        <clipPath id={clipId}>
          <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={3} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect x={-w / 2} y={-h / 2} width={w} height={h} fill="#7DD3FC" />
        <circle cx={w * 0.22} cy={-h * 0.18} r={h * 0.18} fill="#FACC15" />
        <path d={`M${-w / 2} ${h / 2} L${-w * 0.2} ${-h * 0.05} L${w * 0.05} ${h * 0.25} L${w * 0.25} ${h * 0.05} L${w / 2} ${h / 2} z`} fill="#22C55E" />
      </g>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={3} fill="none" stroke={INK} strokeWidth={2} />
    </g>
  );
}

/** A numbered envelope-style packet, centred at (0,0). */
export function PacketIcon({ n, color = "#14B8A6", text }: { n: number | string; color?: string; text?: string }) {
  return (
    <g>
      <rect x={-17} y={-12} width={34} height={24} rx={4} fill="#FFFBEB" stroke={INK} strokeWidth={2} />
      <path d="M-17 -12 L0 2 L17 -12" fill="none" stroke={INK} strokeWidth={1.6} />
      <circle cx={12} cy={-12} r={8} fill={color} stroke={INK} strokeWidth={1.8} />
      <text x={12} y={-8.5} textAnchor="middle" fontSize={10} fontWeight={900} fill="#fff">
        {n}
      </text>
      {text && (
        <text x={-2} y={9} textAnchor="middle" fontSize={8} fontWeight={800} fontFamily="ui-monospace, Menlo, monospace" fill={INK}>
          {text}
        </text>
      )}
    </g>
  );
}

/** Raindrops falling across a region, looping forever. */
export function Rain({ x, y, w, h, n = 10 }: { x: number; y: number; w: number; h: number; n?: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, k) => {
        const dx = x + ((k * 37) % w);
        return (
          <motion.line
            key={k}
            x1={dx}
            x2={dx - 3}
            y1={y}
            y2={y + 9}
            stroke="#38BDF8"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, h], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: (k * 0.13) % 0.9, ease: "linear" }}
          />
        );
      })}
    </g>
  );
}

export function Cloud({ x, y, s = 1, grey }: { x: number; y: number; s?: number; grey?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-30 10 a14 14 0 0 1 4 -27 a18 18 0 0 1 33 -4 a14 14 0 0 1 23 13 a12 12 0 0 1 -2 18 z" fill={grey ? "#94A3B8" : "#F8FAFC"} stroke={INK} strokeWidth={2} />
    </g>
  );
}

export function Sun({ x, y, r = 16 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
        {Array.from({ length: 8 }, (_, k) => (
          <line key={k} x1={0} y1={r + 3} x2={0} y2={r + 10} stroke="#F59E0B" strokeWidth={3} strokeLinecap="round" transform={`rotate(${k * 45})`} />
        ))}
      </motion.g>
      <circle r={r} fill="#FACC15" stroke={INK} strokeWidth={2} />
    </g>
  );
}

/** Darken (amt < 0) or lighten (amt > 0) a #rrggbb colour. */
export function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const ch = (v: number) => Math.round(Math.min(255, Math.max(0, amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)));
  const r = ch((n >> 16) & 255);
  const g = ch((n >> 8) & 255);
  const b = ch(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
