import { Atom, Building2, Dna, FlaskConical, GraduationCap, Pi, Rocket, Stethoscope, Timer, Wrench, type LucideIcon } from "lucide-react";
import type { ExamId, ExamSubject } from "@/content/types";
import type { MockTest } from "@/lib/exam";

export const SUBJECT_ICON: Record<ExamSubject, LucideIcon> = { physics: Atom, chemistry: FlaskConical, biology: Dna, maths: Pi };

export const EXAM_VISUAL: Record<ExamId, { icon: LucideIcon; color: string }> = {
  JEE: { icon: Wrench, color: "#2F6BFF" },
  JEE_ADV: { icon: Rocket, color: "#7C4DFF" },
  NEET: { icon: Stethoscope, color: "#2EBE70" },
  KCET: { icon: GraduationCap, color: "#FF8A00" },
  COMEDK: { icon: Building2, color: "#14B8A6" },
};

const SPRINT_COLOR: Record<ExamSubject, string> = { physics: "#1CB0F6", chemistry: "#14B8A6", biology: "#2EBE70", maths: "#7C4DFF" };

/** Icon + colour for a mock card / header. */
export function mockVisual(m: MockTest): { icon: LucideIcon; color: string } {
  if (m.kind === "sprint") {
    const s = m.sections[0].subject;
    return { icon: SUBJECT_ICON[s], color: SPRINT_COLOR[s] };
  }
  return m.exam === "Mixed" ? { icon: Timer, color: "#2F6BFF" } : EXAM_VISUAL[m.exam];
}
