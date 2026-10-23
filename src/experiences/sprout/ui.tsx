"use client";

import Link from "next/link";
import { forwardRef, type ReactNode } from "react";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
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
