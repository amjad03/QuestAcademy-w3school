import type { Question } from "@/content/types";

/** Plain description of a practice question for the tutor's context (never includes the answer key). */
export function questionForTutor(q: Question): string {
  const letters = "ABCDEFGHIJ";
  switch (q.kind) {
    case "mcq":
      return `${q.q}\nOptions (choose one):\n${q.options.map((o, i) => `${letters[i]}. ${o}`).join("\n")}`;
    case "multi":
      return `${q.q}\nOptions (choose all that apply):\n${q.options.map((o, i) => `${letters[i]}. ${o}`).join("\n")}`;
    case "truefalse":
      return `${q.q}\n(True or false?)`;
    case "numeric":
      return `${q.q}\n(Answer with a number${q.unit ? ` in ${q.unit}` : ""}.)`;
    case "fill":
      return `${q.q}\n(Fill in the blank.)`;
    case "order":
      return `${q.q}\nPut these in the correct order (shown shuffled): ${[...q.items].sort().join(" | ")}`;
  }
}
