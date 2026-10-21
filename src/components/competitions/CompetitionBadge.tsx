import { Award, GraduationCap, Landmark, Medal, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { CompetitionKind } from "@/content/competitions";

const KIND_STYLE: Record<CompetitionKind, { icon: LucideIcon; color: string; shade: string }> = {
  olympiad: { icon: Medal, color: "#FFB800", shade: "#D99A00" },
  entrance: { icon: GraduationCap, color: "#2F6BFF", shade: "#1E50D6" },
  scholarship: { icon: Award, color: "#2EBE70", shade: "#1F9B58" },
  service: { icon: Landmark, color: "#7C4DFF", shade: "#5E35D9" },
};

/** Solid tile per competition kind, matching the CourseIcon language. */
export function CompetitionBadge({ kind, size = 48, className }: { kind: CompetitionKind; size?: number; className?: string }) {
  const { icon: Icon, color, shade } = KIND_STYLE[kind];
  return (
    <span
      className={clsx("inline-grid shrink-0 place-items-center rounded-[28%] text-white", className)}
      style={{ width: size, height: size, background: color, boxShadow: `inset 0 -${Math.max(2, Math.round(size / 14))}px 0 ${shade}` }}
      aria-hidden
    >
      <Icon style={{ width: size * 0.52, height: size * 0.52 }} strokeWidth={2.4} />
    </span>
  );
}
