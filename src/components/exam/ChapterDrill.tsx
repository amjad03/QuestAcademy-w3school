"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Gauge, RotateCcw } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import { SUBJECT_META } from "@/lib/exam";
import { useLearner } from "@/lib/store";
import { QuestionCard } from "@/components/learn/QuestionCard";
import { ScoreRing } from "@/components/learn/Quiz";
import { burst } from "@/lib/confetti";

const LENGTH = 8;

/**
 * Adaptive drill: starts at medium difficulty, steps up after a correct answer
 * and down after a miss, never repeating a question within the session.
 */
export function ChapterDrill({ pool }: { pool: ExamQuestion[] }) {
  const params = useSearchParams();
  const router = useRouter();
  const subject = (params.get("subject") as ExamSubject | null) ?? null;
  const chapter = params.get("chapter");
  const recordQuiz = useLearner((s) => s.recordQuiz);
  const recordAnswer = useLearner((s) => s.recordAnswer);

  const chapters = useMemo(() => {
    const m = new Map<ExamSubject, string[]>();
    for (const q of pool) {
      const list = m.get(q.subject) ?? [];
      if (!list.includes(q.chapter)) list.push(q.chapter);
      m.set(q.subject, list);
    }
    return m;
  }, [pool]);

  const set = useMemo(() => pool.filter((q) => (!subject || q.subject === subject) && (!chapter || q.chapter === chapter)), [pool, subject, chapter]);
  const [run, setRun] = useState(0);
  const [asked, setAsked] = useState<string[]>([]);
  const [results, setResults] = useState<boolean[]>([]);
  const [level, setLevel] = useState(2);

  const length = Math.min(LENGTH, set.length);
  const done = results.length >= length && length > 0;

  const current = useMemo(() => {
    if (done || !chapter) return undefined;
    const remaining = set.filter((q) => !asked.includes(q.id));
    if (!remaining.length) return undefined;
    // closest difficulty to the current level
    return [...remaining].sort((a, b) => Math.abs((a.difficulty ?? 2) - level) - Math.abs((b.difficulty ?? 2) - level) || a.id.localeCompare(b.id))[0];
  }, [set, asked, level, done, chapter]); // eslint-disable-line react-hooks/exhaustive-deps

  const answer = (ok: boolean) => {
    if (!current) return;
    recordAnswer(ok);
    const next = [...results, ok];
    setResults(next);
    setAsked((a) => [...a, current.id]);
    setLevel((l) => Math.max(1, Math.min(3, l + (ok ? 1 : -1))));
    if (next.length >= length) {
      const c = next.filter(Boolean).length;
      recordQuiz(c, length);
      if (c / length >= 0.75) burst();
    }
  };

  const restart = () => {
    setAsked([]);
    setResults([]);
    setLevel(2);
    setRun((r) => r + 1);
  };

  const correct = results.filter(Boolean).length;

  return (
    <div data-world="exam" className="min-h-screen bg-bg text-ink">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-4">
          <Link href="/exam" className="text-sm text-muted hover:text-ink">
            ← The Arena
          </Link>
          {[...chapters.entries()].map(([sub, list]) => (
            <div key={sub} className="card p-4">
              <div className="mb-2 font-semibold">
                {SUBJECT_META[sub].emoji} {SUBJECT_META[sub].name}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {list.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      router.push(`/exam/practice?subject=${sub}&chapter=${encodeURIComponent(c)}`);
                      restart();
                    }}
                    className={clsx("rounded-lg border px-2 py-1 text-[11px] font-medium transition", c === chapter && sub === subject ? "border-accent bg-accent text-black" : "border-line text-muted hover:text-ink")}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <main>
          {!chapter ? (
            <div className="card grid min-h-[400px] place-items-center p-10 text-center">
              <div>
                <div className="text-6xl">🎯</div>
                <h1 className="mt-4 font-display text-3xl font-bold">Pick a chapter to drill</h1>
                <p className="mt-2 text-muted">Adaptive {LENGTH}-question sets that get harder as you get them right.</p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="font-display text-3xl font-bold">{chapter}</h1>
                {subject && <span className="chip">{SUBJECT_META[subject].name}</span>}
                <span className="chip ml-auto">
                  <Gauge className="h-3.5 w-3.5" /> Difficulty: {["", "Easy", "Medium", "Hard"][level]}
                </span>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length }, (_, i) => (
                  <span key={i} className={clsx("h-2 flex-1 rounded-full", results[i] === true ? "bg-good" : results[i] === false ? "bg-bad" : i === results.length ? "bg-accent" : "bg-surface-2")} />
                ))}
              </div>
              <div className="card mt-6 p-6 sm:p-8">
                {done ? (
                  <div className="py-6 text-center">
                    <ScoreRing pct={correct / length} />
                    <h2 className="mt-4 font-display text-2xl font-bold">{correct === length ? "Chapter crushed! 🔥" : correct / length >= 0.6 ? "Solid work." : "Keep drilling — this is where marks hide."}</h2>
                    <p className="mt-1 text-muted">
                      {correct}/{length} correct · {correct * 4 - (length - correct)} marks on the +4/−1 scale
                    </p>
                    <button className="btn-primary mt-6 text-black" onClick={restart}>
                      <RotateCcw className="h-4 w-4" /> Another set
                    </button>
                  </div>
                ) : current ? (
                  <motion.div key={`${run}-${current.id}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <QuestionCard question={current} onDone={answer} index={results.length} total={length} continueLabel={results.length + 1 < length ? "Next question" : "See results"} />
                  </motion.div>
                ) : (
                  <p className="text-muted">No questions found for this chapter yet.</p>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
