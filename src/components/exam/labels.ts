"use client";

import type { ExamId, ExamSubject } from "@/content/types";
import type { MockSection, QKind, SectionMarking, Txt } from "@/lib/exam";
import { markingFor } from "@/lib/exam";
import { useT } from "@/i18n";

/** Translated exam subject names, keyed by subject id. */
export function useSubjectNames(): Record<ExamSubject, string> {
  const t = useT();
  return {
    physics: t("exam.subject.physics", "Physics"),
    chemistry: t("exam.subject.chemistry", "Chemistry"),
    biology: t("exam.subject.biology", "Biology"),
    maths: t("exam.subject.maths", "Mathematics"),
  };
}

/** Short exam names for tabs and chips. */
export function useExamNames(): Record<ExamId | "Mixed", string> {
  const t = useT();
  return {
    JEE: t("exam.name.jeeMain", "JEE Main"),
    JEE_ADV: t("exam.name.jeeAdv", "JEE Advanced"),
    NEET: t("exam.name.neet", "NEET"),
    KCET: t("exam.name.kcet", "KCET"),
    COMEDK: t("exam.name.comedk", "COMEDK"),
    Mixed: t("exam.name.mixed", "All exams"),
  };
}

/** Translate a `{ key, en, vars }` label. */
export function useTxt() {
  const t = useT();
  const tr = (x: Txt): string => t(x.key, x.en, x.vars && Object.fromEntries(Object.entries(x.vars).map(([k, v]) => [k, typeof v === "object" ? tr(v) : v])));
  return tr;
}

export function useKindNames(): Record<QKind, string> {
  const t = useT();
  return {
    mcq: t("exam.kind.mcq", "Single correct"),
    multi: t("exam.kind.multi", "One or more correct"),
    numeric: t("exam.kind.numeric", "Numerical value"),
  };
}

/** "+4 correct · −1 wrong · 0 unattempted", with the partial rule for JEE Advanced multi-correct. */
export function useMarkingText() {
  const t = useT();
  const sign = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");
  return (m: SectionMarking) =>
    m.partial
      ? t("exam.marking.partial", "{c} if all correct options chosen · +3 / +2 / +1 for each correct option when no wrong one is chosen · {w} if any wrong option · 0 unattempted", { c: sign(m.correct), w: sign(m.wrong) })
      : m.wrong
        ? t("exam.marking.negative", "{c} correct · {w} wrong · 0 unattempted", { c: sign(m.correct), w: sign(m.wrong) })
        : t("exam.marking.noNegative", "{c} correct · no negative marking", { c: sign(m.correct) });
}

/** Marking for a section's kinds, de-duplicated (sprints mix kinds). */
export function sectionMarkings(sec: MockSection): { kinds: QKind[]; marking: SectionMarking }[] {
  const out: { kinds: QKind[]; marking: SectionMarking }[] = [];
  for (const k of sec.kinds) {
    const m = markingFor(sec, k);
    const hit = out.find((o) => o.marking.correct === m.correct && o.marking.wrong === m.wrong && Boolean(o.marking.partial) === Boolean(m.partial));
    if (hit) hit.kinds.push(k);
    else out.push({ kinds: [k], marking: m });
  }
  return out;
}

export const signed = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");
