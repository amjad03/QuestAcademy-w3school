/**
 * Karnataka School Examination and Assessment Board (KSEAB) · SSLC (Class 10).
 * Maths and science follow the NCERT-based state textbooks (with chapters CBSE has
 * dropped, such as Constructions and Sources of Energy).
 * Mapping based on known syllabi — check against the current official KSEAB syllabus
 * (reduced / deleted portions are notified yearly).
 */
import { subject } from "./build";
import * as X from "./class10";
import type { SyllabusBoard } from "./types";

export const KSEEB: SyllabusBoard = {
  id: "kseeb",
  name: "Karnataka SSLC",
  note: "Karnataka State Board · state textbooks; maths and science follow NCERT.",
  grades: [
    {
      id: "10",
      name: "SSLC (Class 10)",
      exam: { name: "SSLC exams", month: 3, day: 21 },
      subjects: [
        subject("kseeb:10", "maths", "Mathematics", X.KSEEB_MATHS_10),
        subject("kseeb:10", "science", "Science", X.KSEEB_SCIENCE_10),
        subject("kseeb:10", "history", "History", X.KSEEB_HISTORY_10),
        subject("kseeb:10", "politics", "Political Science", X.KSEEB_POLITICS_10),
        subject("kseeb:10", "sociology", "Sociology", X.KSEEB_SOCIOLOGY_10),
        subject("kseeb:10", "geography", "Geography", X.KSEEB_GEOGRAPHY_10),
        subject("kseeb:10", "economics", "Economics", X.KSEEB_ECONOMICS_10),
        subject("kseeb:10", "business", "Business Studies", X.KSEEB_BUSINESS_10),
        subject("kseeb:10", "english", "English · Grammar and Writing", X.KSEEB_ENGLISH_10),
        subject("kseeb:10", "kannada", "Kannada · Grammar and Writing", X.KANNADA_10),
        subject("kseeb:10", "hindi", "Hindi · Grammar and Writing", X.KSEEB_HINDI_10),
        subject("kseeb:10", "gk", "General Knowledge", X.GK_10),
      ],
    },
  ],
};
