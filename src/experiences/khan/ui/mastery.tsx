"use client";

import Link from "next/link";
import clsx from "clsx";
import { useT } from "@/i18n";
import type { MasteryLevel } from "@/lib/mastery";

const NAMES: [string, string][] = [
  ["khan.mastery.notStarted", "Not started"],
  ["khan.mastery.attempted", "Attempted"],
  ["khan.mastery.familiar", "Familiar"],
  ["khan.mastery.proficient", "Proficient"],
  ["khan.mastery.mastered", "Mastered"],
];

/** Translated mastery level name. */
export function useMasteryName() {
  const t = useT();
  return (level: MasteryLevel) => t(NAMES[level][0], NAMES[level][1]);
}

/** CSS colour for a mastery level (Khan purple ramp; level 0 = line). */
export const masteryColor = (level: MasteryLevel) => (level === 0 ? "rgb(var(--line))" : level === 1 ? "rgb(var(--kh-m1))" : `rgb(var(--kh-m${level}))`);

/** One Khan-style skill square. */
export function MasterySquare({ level, size, className, title }: { level: MasteryLevel; size?: number; className?: string; title?: string }) {
  return <span className={clsx("kh-sq", level > 0 && `kh-m${level}`, className)} style={size ? { width: size, height: size } : undefined} title={title} aria-hidden={title ? undefined : true} />;
}

export interface Skill {
  id: string;
  title: string;
  level: MasteryLevel;
  href?: string;
}

/**
 * Row of skill squares, one per lesson. Squares link to their lesson when an
 * href is given; long courses collapse into "+N".
 */
export function SkillSquares({ skills, max = 60, size = 14, className, label }: { skills: Skill[]; max?: number; size?: number; className?: string; label?: string }) {
  const name = useMasteryName();
  const t = useT();
  const shown = skills.slice(0, max);
  const rest = skills.length - shown.length;
  return (
    <ul className={clsx("flex flex-wrap items-center gap-1", className)} aria-label={label ?? t("khan.skills.label", "Skills")}>
      {shown.map((s) => {
        const tip = `${s.title} · ${name(s.level)}`;
        return (
          <li key={s.id} className="flex">
            {s.href ? (
              <Link href={s.href} className={clsx("kh-sq", s.level > 0 && `kh-m${s.level}`)} style={{ width: size, height: size }} title={tip} aria-label={tip} />
            ) : (
              <span className={clsx("kh-sq", s.level > 0 && `kh-m${s.level}`)} style={{ width: size, height: size }} title={tip} role="img" aria-label={tip} />
            )}
          </li>
        );
      })}
      {rest > 0 && <li className="pl-1 text-xs font-semibold text-muted">{t("khan.skills.more", "+{n}", { n: rest })}</li>}
    </ul>
  );
}

/**
 * Khan's stacked course-mastery bar: one segment per level, widest at the
 * left (Mastered), with an accessible summary.
 */
export function MasteryBar({ levels, height = 10, className }: { levels: MasteryLevel[]; height?: number; className?: string }) {
  const name = useMasteryName();
  const t = useT();
  const total = levels.length || 1;
  const counts = [0, 0, 0, 0, 0];
  levels.forEach((l) => counts[l]++);
  const order: MasteryLevel[] = [4, 3, 2, 1];
  const summary = order
    .filter((l) => counts[l])
    .map((l) => `${counts[l]} ${name(l)}`)
    .join(", ");
  return (
    <div
      className={clsx("flex w-full overflow-hidden rounded-[3px] bg-surface-2", className)}
      style={{ height, boxShadow: "inset 0 0 0 1px rgb(var(--line))" }}
      role="img"
      aria-label={summary ? t("khan.mastery.summary", "Skills: {summary}", { summary }) : t("khan.mastery.none", "No skills started yet")}
    >
      {order.map((l) =>
        counts[l] ? (
          <span
            key={l}
            className="h-full transition-[width] duration-500"
            style={{
              width: `${(counts[l] / total) * 100}%`,
              background: l === 1 ? "rgb(var(--kh-m1-fill))" : masteryColor(l),
              boxShadow: l === 1 ? "inset 0 0 0 2px rgb(var(--kh-m1))" : undefined,
            }}
          />
        ) : null,
      )}
    </div>
  );
}

/** Legend for the mastery squares. */
export function MasteryLegend({ className }: { className?: string }) {
  const name = useMasteryName();
  return (
    <ul className={clsx("flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted", className)}>
      {([4, 3, 2, 1, 0] as MasteryLevel[]).map((l) => (
        <li key={l} className="flex items-center gap-1.5">
          <MasterySquare level={l} size={12} />
          {name(l)}
        </li>
      ))}
    </ul>
  );
}
