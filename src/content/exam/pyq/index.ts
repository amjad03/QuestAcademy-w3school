import type { ExamQuestion } from "@/content/types";
import imported from "./imported.json";

/**
 * Genuine previous-year questions the owner has sourced and imported with scripts/import-pyq.ts
 * (docs/pyq-import.md). Each carries `pyq: { exam, year, shift?, source }`. Everything else in the exam
 * bank is original "PYQ pattern" practice and is never shown with a year.
 */
export const pyqQuestions = imported as unknown as ExamQuestion[];
