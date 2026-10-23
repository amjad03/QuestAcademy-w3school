"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Atom, ChevronLeft, Crosshair, Dna, FlaskConical, Gauge, Pi, RotateCcw, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import { SUBJECT_META } from "@/lib/exam";
import { useLearner } from "@/lib/store";
import { QuestionCard } from "@/components/learn/QuestionCard";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressRing } from "@/components/ui/Progress";
import { burst } from "@/lib/confetti";
import { useT } from "@/i18n";
import { useSubjectNames } from "./labels";

const LENGTH = 8;

const SUBJECT_ICON: Record<ExamSubject, LucideIcon> = { physics: Atom, chemistry: FlaskConical, biology: Dna, maths: Pi };

/**
 * Adaptive drill: starts at medium difficulty, steps up after a correct answer
 * and down after a miss, never repeating a question within the session.
 */
export function ChapterDrill({ pool }: { pool: ExamQuestion[] }) {
  const t = useT();
  const subjectName = useSubjectNames();
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
    <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[280px_1fr]">
      <aside className="space-y-4">
        <Link href="/exam" className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent">
          <ChevronLeft className="h-4 w-4" /> {t("exam.drill.back", "Exam prep")}
        </Link>
        {[...chapters.entries()].map(([sub, list]) => {
          const I = SUBJECT_ICON[sub];
          return (
            <div key={sub} className="card p-4">
              <div className="mb-3 flex items-center gap-2 font-black">
                <I className="h-4 w-4" style={{ color: SUBJECT_META[sub].color }} strokeWidth={2.5} /> {subjectName[sub]}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {list.map((c) => {
                  const active = c === chapter && sub === subject;
                  return (
                    <button
                      key={c}
                      onClick={() => {
                        router.push(`/exam/practice?subject=${sub}&chapter=${encodeURIComponent(c)}`);
                        restart();
                      }}
                      aria-pressed={active}
                      className={clsx("rounded-lg border-2 px-2 py-1 text-xs font-bold transition", active ? "border-accent bg-accent text-white" : "border-line text-muted hover:bg-surface-2 hover:text-ink")}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </aside>

      <main className="min-w-0">
        {!chapter ? (
          <div className="card grid min-h-[420px] place-items-center p-10 text-center">
            <div className="flex flex-col items-center">
              <Mascot pose="think" size={120} />
              <h1 className="mt-5 text-3xl font-black">{t("exam.drill.empty.title", "Pick a chapter to drill")}</h1>
              <p className="mt-2 max-w-sm font-semibold text-muted">{t("exam.drill.empty.body", "Adaptive {n}-question sets that get harder as you get them right — and easier when you need a reset.", { n: LENGTH })}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-white">
                <Crosshair className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <div className="min-w-0 flex-1">
                {subject && <p className="eyebrow">{t("exam.drill.eyebrow", "{subject} · chapter drill", { subject: subjectName[subject] })}</p>}
                <h1 className="text-2xl font-black sm:text-3xl">{chapter}</h1>
              </div>
              <span className="chip !px-3 !py-1">
                <Gauge className="h-3.5 w-3.5" /> {["", t("exam.drill.level.easy", "Easy"), t("exam.drill.level.medium", "Medium"), t("exam.drill.level.hard", "Hard")][level]}
              </span>
            </div>
            <div className="mt-5 flex gap-1.5" aria-label={t("exam.drill.progressAria", "{n} of {total} answered", { n: results.length, total: length })}>
              {Array.from({ length }, (_, i) => (
                <span key={i} className={clsx("h-3 flex-1 rounded-full", results[i] === true ? "bg-good" : results[i] === false ? "bg-bad" : i === results.length ? "bg-accent" : "bg-line")} />
              ))}
            </div>
            <div className="card mt-6 p-6 sm:p-8">
              {done ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <ProgressRing value={correct / length} size={130} stroke={11} color={correct / length >= 0.75 ? "rgb(var(--good))" : correct / length >= 0.5 ? "rgb(var(--accent))" : "rgb(var(--bad))"}>
                    <span className="text-3xl font-black">{Math.round((correct / length) * 100)}%</span>
                  </ProgressRing>
                  <h2 className="mt-5 text-2xl font-black">{correct === length
                      ? t("exam.drill.result.perfect", "Chapter crushed!")
                      : correct / length >= 0.6
                        ? t("exam.drill.result.good", "Solid work.")
                        : t("exam.drill.result.low", "Keep drilling — this is where marks hide.")}</h2>
                  <p className="mt-1 font-semibold text-muted">
                    {t("exam.drill.result.summary", "{correct}/{total} correct · {marks} marks on the +4 / −1 scale", { correct, total: length, marks: correct * 4 - (length - correct) })}
                  </p>
                  <button className="btn-primary mt-6" onClick={restart}>
                    <RotateCcw className="h-4 w-4" /> {t("exam.drill.anotherSet", "Another set")}
                  </button>
                </div>
              ) : current ? (
                <motion.div key={`${run}-${current.id}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <QuestionCard question={current} onDone={answer} index={results.length} total={length} continueLabel={results.length + 1 < length ? t("exam.drill.nextQuestion", "Next question") : t("exam.drill.seeResults", "See results")} />
                </motion.div>
              ) : (
                <p className="font-semibold text-muted">{t("exam.drill.noQuestions", "No questions for this chapter yet.")}</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
