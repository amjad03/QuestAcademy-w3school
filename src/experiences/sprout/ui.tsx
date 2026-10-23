"use client";

import Link from "next/link";
import { forwardRef, type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import { X as XIcon, type LucideIcon } from "lucide-react";
import { say } from "@/lib/voice";

/** Sunshine palette used for picture buttons (fill, darker base). */
export const SUN = {
  peach: ["#FF9E7A", "#E8785A"],
  butter: ["#FFC93C", "#E3A51C"],
  mint: ["#3CCB98", "#25A87B"],
  sky: ["#55B7F5", "#2F93D6"],
  berry: ["#F27BB0", "#D4588F"],
  lilac: ["#A98BF5", "#8467D9"],
} as const;

export type SunHue = keyof typeof SUN;

export function bubbleStyle(fill: string, shade: string, size?: number) {
  return {
    background: fill,
    boxShadow: `inset 0 -${size && size < 72 ? 5 : 8}px 0 ${shade}, 0 14px 26px -12px ${shade}`,
    ...(size ? { width: size, height: size } : null),
  };
}

interface BubbleBase {
  /** Spoken (and used as the accessible name). */
  label: string;
  /** What Questy says on tap (defaults to label). */
  speak?: string;
  icon: LucideIcon;
  hue?: SunHue;
  colors?: [string, string];
  size?: number;
  /** Small caption under the bubble, for grown-ups. */
  caption?: boolean;
  active?: boolean;
  className?: string;
  badge?: ReactNode;
  disabled?: boolean;
}

function BubbleFace({ icon: Icon, size = 96, hue = "butter", colors, active, badge }: BubbleBase) {
  const [fill, shade] = colors ?? SUN[hue];
  return (
    <span
      className={clsx("sprout-bubble relative grid shrink-0 place-items-center rounded-full text-white transition-transform", active && "sprout-bubble-on")}
      style={bubbleStyle(fill, shade, size)}
      aria-hidden
    >
      <Icon style={{ width: size * 0.46, height: size * 0.46 }} strokeWidth={2.6} className="-translate-y-[3px] drop-shadow-[0_2px_0_rgba(0,0,0,0.12)]" />
      {badge}
    </span>
  );
}

/** A giant round picture button that links somewhere and speaks its name. */
export function BubbleLink(p: BubbleBase & { href: string; current?: boolean; onTap?: () => void }) {
  return (
    <Link
      href={p.href}
      onClick={() => {
        say(p.speak ?? p.label);
        p.onTap?.();
      }}
      aria-label={p.label}
      aria-current={p.current ? "page" : undefined}
      className={clsx("sprout-press group flex flex-col items-center gap-1.5 rounded-full", p.className)}
    >
      <BubbleFace {...p} active={p.active ?? p.current} />
      {p.caption && <span className="sprout-caption">{p.label}</span>}
    </Link>
  );
}

/** A giant round picture button that runs an action and speaks its name. */
export const BubbleButton = forwardRef<HTMLButtonElement, BubbleBase & { onTap?: () => void; pressed?: boolean; silent?: boolean; autoFocus?: boolean }>(function BubbleButton(p, ref) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={p.disabled}
      autoFocus={p.autoFocus}
      onClick={() => {
        if (!p.silent) say(p.speak ?? p.label);
        p.onTap?.();
      }}
      aria-label={p.label}
      aria-pressed={p.pressed}
      className={clsx("sprout-press group flex flex-col items-center gap-1.5 rounded-full disabled:cursor-not-allowed disabled:opacity-45", p.className)}
    >
      <BubbleFace {...p} active={p.active ?? p.pressed} />
      {p.caption && <span className="sprout-caption">{p.label}</span>}
    </button>
  );
});

/* ------------------------------------------------------------------ */
/* Duolingo-style pieces: chunky pill buttons, the thick progress bar,  */
/* the quiet X.                                                         */
/* ------------------------------------------------------------------ */

export type ChunkyTone = "good" | "warn" | "peach" | "sky" | "quiet";

const TONE: Record<ChunkyTone, [string, string, string]> = {
  // fill, base, text
  good: ["#3CCB98", "#25A87B", "#ffffff"],
  warn: ["#FFB547", "#E08E1B", "#ffffff"],
  peach: ["#FF9E7A", "#E8785A", "#ffffff"],
  sky: ["#55B7F5", "#2F93D6", "#ffffff"],
  quiet: ["rgb(var(--surface))", "rgb(var(--line))", "rgb(var(--muted))"],
};

interface ChunkyBase {
  tone?: ChunkyTone;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  /** Spoken on tap (optional). */
  speak?: string;
  wide?: boolean;
}

function chunkyProps({ tone = "good", wide, className }: ChunkyBase) {
  const [fill, base, text] = TONE[tone];
  return {
    className: clsx(
      "sprout-chunky inline-flex min-h-[64px] items-center justify-center gap-3 rounded-[1.6rem] px-7 py-3 text-center text-[1.35rem] font-extrabold leading-tight transition-[transform,filter] disabled:cursor-not-allowed",
      wide && "w-full",
      className,
    ),
    style: { background: fill, color: text, ["--chunky-base" as string]: base } as CSSProperties,
  };
}

/** A big 3D pill button ("Start", "Check", "Continue"). */
export const ChunkyButton = forwardRef<HTMLButtonElement, ChunkyBase & { onTap?: () => void; disabled?: boolean; autoFocus?: boolean; label?: string }>(function ChunkyButton(p, ref) {
  const Icon = p.icon;
  return (
    <button
      ref={ref}
      type="button"
      disabled={p.disabled}
      autoFocus={p.autoFocus}
      aria-label={p.label}
      onClick={() => {
        if (p.speak) say(p.speak);
        p.onTap?.();
      }}
      {...chunkyProps(p.disabled ? { ...p, tone: "quiet" } : p)}
    >
      <span className="min-w-0 break-words">{p.children}</span>
      {Icon && <Icon className="h-7 w-7 shrink-0" strokeWidth={3} aria-hidden />}
    </button>
  );
});

export function ChunkyLink(p: ChunkyBase & { href: string; label?: string; onTap?: () => void; autoFocus?: boolean }) {
  const Icon = p.icon;
  return (
    <Link
      href={p.href}
      aria-label={p.label}
      autoFocus={p.autoFocus}
      onClick={() => {
        if (p.speak) say(p.speak);
        p.onTap?.();
      }}
      {...chunkyProps(p)}
    >
      <span className="min-w-0 break-words">{p.children}</span>
      {Icon && <Icon className="h-7 w-7 shrink-0" strokeWidth={3} aria-hidden />}
    </Link>
  );
}

/** Thick green progress bar with a shine (0–1). */
export function ProgressBar({ value, label, className }: { value: number; label: string; className?: string }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div
      className={clsx("sprout-progress relative h-5 min-w-0 flex-1 overflow-hidden rounded-full sm:h-6", className)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
    >
      <span className="sprout-progress-fill absolute inset-y-0 left-0 rounded-full" style={{ width: `${Math.max(pct, pct > 0 ? 8 : 0)}%` }}>
        <span className="sprout-progress-shine" aria-hidden />
      </span>
    </div>
  );
}

/** The quiet grey X that leaves a full-screen lesson. */
export function CloseX({ href, onTap, label, speak }: { href?: string; onTap?: () => void; label: string; speak?: string }) {
  const cls = "sprout-x grid h-14 w-14 shrink-0 place-items-center rounded-full text-[rgb(var(--muted))] transition hover:bg-[rgb(var(--surface-2))] hover:text-[rgb(var(--ink))]";
  const icon = <XIcon className="h-9 w-9" strokeWidth={3} aria-hidden />;
  const tap = () => {
    if (speak) say(speak);
    onTap?.();
  };
  return href ? (
    <Link href={href} onClick={tap} aria-label={label} className={cls}>
      {icon}
    </Link>
  ) : (
    <button type="button" onClick={tap} aria-label={label} className={cls}>
      {icon}
    </button>
  );
}
