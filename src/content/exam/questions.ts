import type { ExamQuestion } from "@/content/types";
import { physicsQuestions } from "./questions-physics";
import { chemistryQuestions } from "./questions-chemistry";
import { biologyQuestions } from "./questions-biology";
import { mathsQuestions } from "./questions-maths";
import { bankQuestions } from "./bank";

export { physicsQuestions, chemistryQuestions, biologyQuestions, mathsQuestions };

/** Full NEET/JEE practice bank used by mock tests and chapter practice. */
export const examQuestions: ExamQuestion[] = [
  ...physicsQuestions,
  ...chemistryQuestions,
  ...biologyQuestions,
  ...mathsQuestions,
  ...bankQuestions,
];
