"use client";

/**
 * Small building blocks shared by every interactive widget: defensive prop
 * readers, labelled sliders, steppers, segmented toggles, readouts and a
 * couple of animation / SVG pointer hooks.
 */

import { useEffect, useId, useRef, type PointerEvent as ReactPointerEvent, type ReactNode, type RefObject } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Prop readers                                                        */
/* ------------------------------------------------------------------ */

export type WidgetProps = { props?: Record<string, unknown> } & Record<string, unknown>;

/** Read the widget's props bag whether it was passed as `props` or spread. */
export function bag(input: Record<string, unknown> | undefined): Record<string, unknown> {
  if (!input) return {};
  const inner = input.props;
  if (inner && typeof inner === "object" && !Array.isArray(inner)) return inner as Record<string, unknown>;
  return input;
}

export function readNum(p: Record<string, unknown>, key: string, def: number, min = -Infinity, max = Infinity): number {
  const raw = p[key];
  const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : NaN;
  return Number.isFinite(n) ? clamp(n, min, max) : def;
}

export function readStr(p: Record<string, unknown>, key: string, def: string): string {
  const raw = p[key];
  return typeof raw === "string" && raw.trim() ? raw : def;
}

export function readOneOf<T extends string>(p: Record<string, unknown>, key: string, options: readonly T[], def: T): T {
  const raw = p[key];
  return typeof raw === "string" && (options as readonly string[]).includes(raw) ? (raw as T) : def;
}

export function readStrArray(p: Record<string, unknown>, key: string): string[] | undefined {
  const raw = p[key];
  if (!Array.isArray(raw)) return undefined;
  const out = raw.filter((x): x is string => typeof x === "string" && x.length > 0);
  return out.length ? out : undefined;
}

/* ------------------------------------------------------------------ */
/* Maths helpers                                                       */
/* ------------------------------------------------------------------ */

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function fmt(n: number, digits = 2): string {
  if (!Number.isFinite(n)) return "∞";
  const fixed = n.toFixed(digits);
  // trim trailing zeros but keep at least an integer
  return fixed.includes(".") ? fixed.replace(/\.?0+$/, "") : fixed;
}

export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

/* ------------------------------------------------------------------ */
/* Layout primitives                                                   */
/* ------------------------------------------------------------------ */

export function WidgetTitle({ icon, title, hint, right }: { icon?: ReactNode; title: string; hint?: string; right?: ReactNode }) {
  return (
    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div className="min-w-0">
        <h3 className="flex items-center gap-2 text-base font-bold text-ink sm:text-lg">
          {icon && <span className="text-accent">{icon}</span>}
          {title}
        </h3>
        {hint && <p className="mt-0.5 text-sm text-muted">{hint}</p>}
      </div>
      {right}
    </div>
  );
}

export function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  unit,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
  unit?: string;
  format?: (v: number) => string;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min || 1)) * 100;
  return (
    <div className="min-w-0">
      <div className="mb-1 flex items-baseline justify-between gap-2 text-sm">
        <label htmlFor={id} className="font-medium text-ink">
          {label}
        </label>
        <span className="font-mono text-accent">
          {format ? format(value) : fmt(value)}
          {unit ? <span className="ml-0.5 text-muted">{unit}</span> : null}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-[rgb(var(--accent))] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/25 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-surface [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:shadow-glow [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-surface [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-glow [&::-webkit-slider-thumb]:transition-transform active:[&::-webkit-slider-thumb]:scale-125"
        style={{
          background: `linear-gradient(90deg, rgb(var(--accent)) ${pct}%, rgb(var(--surface-2)) ${pct}%)`,
          touchAction: "none",
        }}
      />
    </div>
  );
}

export function Stepper({
  label,
  value,
  min,
  max,
  onChange,
  step = 1,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  step?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted">{label}</span>
      <div className="flex items-center rounded-2xl border border-line bg-surface-2 p-1">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(clamp(value - step, min, max))}
          className="grid h-9 w-9 place-items-center rounded-xl text-ink transition hover:bg-surface active:scale-90 disabled:opacity-40"
        >
          <Minus size={16} />
        </button>
        <motion.span
          key={value}
          initial={{ scale: 1.3, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-9 text-center font-mono text-lg font-bold text-ink"
          aria-live="polite"
        >
          {value}
        </motion.span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={value >= max}
          onClick={() => onChange(clamp(value + step, min, max))}
          className="grid h-9 w-9 place-items-center rounded-xl text-ink transition hover:bg-surface active:scale-90 disabled:opacity-40"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: readonly { value: T; label: ReactNode }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  const groupId = useId();
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex flex-wrap gap-1 rounded-2xl border border-line bg-surface-2 p-1">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.value)}
            className={`relative rounded-xl px-3 py-1.5 text-sm font-semibold transition ${
              active ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId={`seg-${groupId}`}
                className="absolute inset-0 rounded-xl bg-accent shadow-glow"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative">{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export function Readout({ label, value, unit, tone = "accent" }: { label: string; value: ReactNode; unit?: string; tone?: "accent" | "good" | "bad" | "warn" | "ink" }) {
  const toneCls = { accent: "text-accent", good: "text-good", bad: "text-bad", warn: "text-warn", ink: "text-ink" }[tone];
  return (
    <div className="rounded-2xl border border-line bg-surface-2 px-3 py-2">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-muted">{label}</div>
      <div className={`font-mono text-lg font-bold ${toneCls}`}>
        {value}
        {unit && <span className="ml-1 text-sm font-medium text-muted">{unit}</span>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */

/** Calls `cb(dtSeconds, elapsedSeconds)` every animation frame while `active`. */
export function useFrame(cb: (dt: number, t: number) => void, active = true) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let last = performance.now();
    const start = last;
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      cbRef.current(dt, (now - start) / 1000);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active]);
}

/** Convert a pointer event to the SVG's user coordinate space. */
export function svgPoint(svg: SVGSVGElement | null, clientX: number, clientY: number): { x: number; y: number } {
  if (!svg) return { x: 0, y: 0 };
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const pt = new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse());
  return { x: pt.x, y: pt.y };
}

/**
 * Pointer-drag helper for SVG handles. Returns props to spread on the handle.
 * `onMove` receives coordinates in SVG user space.
 */
export function useSvgDrag(svgRef: RefObject<SVGSVGElement | null>, onMove: (p: { x: number; y: number }) => void, onEnd?: () => void) {
  const moveRef = useRef(onMove);
  moveRef.current = onMove;
  const endRef = useRef(onEnd);
  endRef.current = onEnd;
  return {
    onPointerDown: (e: ReactPointerEvent<SVGElement>) => {
      e.preventDefault();
      (e.currentTarget as Element).setPointerCapture(e.pointerId);
      moveRef.current(svgPoint(svgRef.current, e.clientX, e.clientY));
    },
    onPointerMove: (e: ReactPointerEvent<SVGElement>) => {
      if (!(e.currentTarget as Element).hasPointerCapture(e.pointerId)) return;
      moveRef.current(svgPoint(svgRef.current, e.clientX, e.clientY));
    },
    onPointerUp: (e: ReactPointerEvent<SVGElement>) => {
      (e.currentTarget as Element).releasePointerCapture(e.pointerId);
      endRef.current?.();
    },
    style: { touchAction: "none" as const, cursor: "grab" },
  };
}

/** CSS colour from a design token, optionally with alpha. */
export const tok = (name: string, alpha?: number) => (alpha === undefined ? `rgb(var(--${name}))` : `rgb(var(--${name}) / ${alpha})`);
