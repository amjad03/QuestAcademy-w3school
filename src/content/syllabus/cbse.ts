/**
 * CBSE · Class 9–12 (NCERT textbooks).
 * Mapping based on known syllabi — check against the current official CBSE
 * curriculum and NCERT editions; deleted / merged chapters change year to year.
 */
import { subject } from "./build";
import * as N from "./ncert";
import type { SyllabusBoard } from "./types";

const BOARD_EXAM = { name: "CBSE board exams", month: 2, day: 15 };

export const CBSE: SyllabusBoard = {
  id: "cbse",
  name: "CBSE",
  note: "NCERT textbooks · Science is one subject in Class 9–10.",
  grades: [
    {
      id: "9",
      name: "Class 9",
      exam: { name: "Annual exams", month: 3, day: 1 },
      subjects: [subject("cbse:9", "science", "Science", N.SCIENCE_9), subject("cbse:9", "maths", "Mathematics", N.MATHS_9)],
    },
    {
      id: "10",
      name: "Class 10",
      exam: BOARD_EXAM,
      subjects: [subject("cbse:10", "science", "Science", N.SCIENCE_10), subject("cbse:10", "maths", "Mathematics", N.MATHS_10)],
    },
    {
      id: "11",
      name: "Class 11",
      exam: { name: "Annual exams", month: 3, day: 1 },
      subjects: [
        subject("cbse:11", "physics", "Physics", N.PHYSICS_11),
        subject("cbse:11", "chemistry", "Chemistry", N.CHEMISTRY_11),
        subject("cbse:11", "biology", "Biology", N.BIOLOGY_11),
        subject("cbse:11", "maths", "Mathematics", N.MATHS_11),
      ],
    },
    {
      id: "12",
      name: "Class 12",
      exam: BOARD_EXAM,
      subjects: [
        subject("cbse:12", "physics", "Physics", N.PHYSICS_12),
        subject("cbse:12", "chemistry", "Chemistry", N.CHEMISTRY_12),
        subject("cbse:12", "biology", "Biology", N.BIOLOGY_12),
        subject("cbse:12", "maths", "Mathematics", N.MATHS_12),
      ],
    },
  ],
};
