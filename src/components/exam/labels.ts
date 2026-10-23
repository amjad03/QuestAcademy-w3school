"use client";

import type { ExamSubject } from "@/content/types";
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
