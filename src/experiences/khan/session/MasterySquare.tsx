"use client";

import clsx from "clsx";
import { Crown } from "lucide-react";
import type { MasteryLevel } from "@/lib/mastery";
import { useT } from "@/i18n";

/** Khan-style mastery ramp: outline → attempted → light → mid → deep purple. */
export const KHAN_MASTERY: Record<MasteryLevel, { key: string; en: string; fill: string; border: string }> = {
  0: { key: "khan.mastery.notStarted", en: "Not started", fill: "transparent", border: "rgb(var(--line))" },
  1: { key: "khan.mastery.attempted", en: "Attempted", fill: "#FFF4E0", border: "#E8A33D" },
  2: { key: "khan.mastery.familiar", en: "Familiar", fill: "#C7B6FF", border: "#A48BFA" },
  3: { key: "khan.mastery.proficient", en: "Proficient", fill: "#8B63F6", border: "#7854F7" },
  4: { key: "khan.mastery.mastered", en: "Mastered", fill: "#4C27A8", border: "#4C27A8" },
};

export function MasterySquare({ level, size = 18, className, decorative }: { level: MasteryLevel; size?: number; className?: string; decorative?: boolean }) {
  const t = useT();
  const m = KHAN_MASTERY[level];
  return (
    <span
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : t(m.key, m.en)}
      title={t(m.key, m.en)}
      className={clsx("inline-grid shrink-0 place-items-center rounded-[4px] border-2", className)}
      style={{ width: size, height: size, background: m.fill, borderColor: m.border }}
    >
      {level === 4 && <Crown className="text-white" style={{ width: size * 0.6, height: size * 0.6 }} strokeWidth={2.6} aria-hidden />}
    </span>
  );
}

/** Square + level name. */
export function MasteryTag({ level }: { level: MasteryLevel }) {
  const t = useT();
  const m = KHAN_MASTERY[level];
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
      <MasterySquare level={level} size={16} decorative />
      <span>{t(m.key, m.en)}</span>
    </span>
  );
}
