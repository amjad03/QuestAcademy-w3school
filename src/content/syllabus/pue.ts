/**
 * Karnataka PUC (Department of Pre-University Education) · I and II PUC science.
 * Karnataka PUE adopted NCERT textbooks for Physics, Chemistry, Mathematics and
 * Biology, so chapter lists follow NCERT Class 11 / 12. KCET draws on the I & II PUC
 * syllabus, so these chapters double as KCET prep.
 * Mapping based on known syllabi — check against the current official PUE
 * syllabus (reduced / deleted portions are notified yearly).
 */
import { subject } from "./build";
import * as N from "./ncert";
import * as S from "./senior-extra";
import type { SyllabusBoard } from "./types";

export const PUE: SyllabusBoard = {
  id: "pue",
  name: "Karnataka PUC",
  note: "NCERT textbooks · the same chapters are tested in KCET.",
  grades: [
    {
      id: "PUC-1",
      name: "I PUC",
      exam: { name: "I PUC annual exams", month: 3, day: 1 },
      subjects: [
        subject("pue:PUC-1", "physics", "Physics", N.PHYSICS_11),
        subject("pue:PUC-1", "chemistry", "Chemistry", N.CHEMISTRY_11),
        subject("pue:PUC-1", "maths", "Mathematics", N.MATHS_11),
        subject("pue:PUC-1", "biology", "Biology", N.BIOLOGY_11),
        subject("pue:PUC-1", "electronics", "Electronics", S.ELECTRONICS_11),
        subject("pue:PUC-1", "cs", "Computer Science", S.CS_CBSE_11),
      ],
    },
    {
      id: "PUC-2",
      name: "II PUC",
      exam: { name: "II PUC board exams", month: 3, day: 1 },
      subjects: [
        subject("pue:PUC-2", "physics", "Physics", N.PHYSICS_12),
        subject("pue:PUC-2", "chemistry", "Chemistry", N.CHEMISTRY_12),
        subject("pue:PUC-2", "maths", "Mathematics", N.MATHS_12),
        subject("pue:PUC-2", "biology", "Biology", N.BIOLOGY_12),
        subject("pue:PUC-2", "electronics", "Electronics", S.ELECTRONICS_12),
        subject("pue:PUC-2", "cs", "Computer Science", S.CS_CBSE_12),
      ],
    },
  ],
};
