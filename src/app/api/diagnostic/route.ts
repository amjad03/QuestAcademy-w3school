import { lessonQuestions } from "@/content/course";
import type { Question } from "@/content/types";

/**
 * Diagnostic questions for onboarding: up to `n` (5–8) questions drawn from the lesson
 * quizzes and checkpoints of the given lessons, spread across lessons.
 *   GET /api/diagnostic?lessons=math-middle/integers/intro,…&n=6
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const ids = (url.searchParams.get("lessons") ?? "").split(",").filter((x) => /^[\w-]+\/[\w-]+\/[\w-]+$/.test(x)).slice(0, 80);
  const n = Math.min(8, Math.max(5, Number(url.searchParams.get("n")) || 6));
  // Self-checking kinds only (no ordering / free text), so scoring is unambiguous.
  const ok = (q: Question) => q.kind === "mcq" || q.kind === "truefalse" || q.kind === "numeric" || q.kind === "multi";
  const per = ids.map((id) => {
    const [s, u, l] = id.split("/");
    return lessonQuestions(s, u, l)
      .filter(ok)
      .map((question) => ({ lessonId: id, question }));
  });
  for (const list of per) list.sort(() => Math.random() - 0.5);
  const lists = per.filter((l) => l.length).sort(() => Math.random() - 0.5);
  const out: { lessonId: string; question: Question }[] = [];
  for (let k = 0; out.length < n && lists.some((l) => l.length); k++) {
    const q = lists[k % lists.length].shift();
    if (q) out.push(q);
  }
  // Shared briefly at the edge: a class starting onboarding together hits the CDN, not a cold function.
  return Response.json({ questions: out }, { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } });
}
