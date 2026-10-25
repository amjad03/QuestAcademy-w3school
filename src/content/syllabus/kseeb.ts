/**
 * Karnataka School Examination and Assessment Board (KSEAB) · SSLC (Class 10).
 * Maths and science follow the NCERT-based state textbooks (with chapters CBSE has
 * dropped, such as Constructions and Sources of Energy).
 * Mapping based on known syllabi — check against the current official KSEAB syllabus
 * (reduced / deleted portions are notified yearly).
 */
import { subject } from "./build";
import * as X from "./class10";
import * as Y from "./class9";
import type { SyllabusBoard } from "./types";

export const KSEEB: SyllabusBoard = {
  id: "kseeb",
  name: "Karnataka SSLC",
  note: "Karnataka State Board · state textbooks; maths and science follow NCERT.",
  grades: [
    {
      id: "9",
      name: "Class 9",
      exam: { name: "Annual exams", month: 3, day: 1 },
      subjects: [
        subject("kseeb:9", "maths", "Mathematics", Y.KSEEB_MATHS_9),
        subject("kseeb:9", "science", "Science", Y.KSEEB_SCIENCE_9),
        subject("kseeb:9", "history", "History", Y.KSEEB_HISTORY_9),
        subject("kseeb:9", "politics", "Political Science", Y.KSEEB_POLITICS_9),
        subject("kseeb:9", "sociology", "Sociology", Y.KSEEB_SOCIOLOGY_9),
        subject("kseeb:9", "geography", "Geography", Y.KSEEB_GEOGRAPHY_9),
        subject("kseeb:9", "economics", "Economics", Y.KSEEB_ECONOMICS_9),
        subject("kseeb:9", "business", "Business Studies", Y.KSEEB_BUSINESS_9),
        subject("kseeb:9", "english", "English · Grammar and Writing", Y.KSEEB_ENGLISH_9),
        subject("kseeb:9", "kannada", "Kannada · Grammar and Writing", Y.KANNADA_9),
        subject("kseeb:9", "hindi", "Hindi · Grammar and Writing", Y.KSEEB_HINDI_9),
        subject("kseeb:9", "gk", "General Knowledge", Y.GK_9),
      ],
    },
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
