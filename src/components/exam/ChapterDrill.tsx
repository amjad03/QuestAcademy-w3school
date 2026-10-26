"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Crosshair, Gauge, RotateCcw, SlidersHorizontal } from "lucide-react";
import clsx from "clsx";
import type { ExamId, ExamQuestion, ExamSubject } from "@/content/types";
import { EXAM_IDS, EXAM_META, MARK, SUBJECT_META, gradeOf } from "@/lib/exam";
import { useLearner } from "@/lib/store";
import { QuestionCard } from "@/components/learn/QuestionCard";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressRing } from "@/components/ui/Progress";
import { burst } from "@/lib/confetti";
import { useT } from "@/i18n";
import { SUBJECT_ICON } from "./icons";
import { signed, useExamNames, useSubjectNames } from "./labels";

const LENGTH = 8;
const SUBJECTS: ExamSubject[] = ["physics", "chemistry", "maths", "biology"];

const asExam = (v: string | null): ExamId | null => (v && (EXAM_IDS as string[]).includes(v) ? (v as ExamId) : null);
const asGrade = (v: string | null): "11" | "12" | null => (v === "11" || v === "12" ? v : null);
const asLevel = (v: string | null): 1 | 2 | 3 | null => (v === "1" || v === "2" || v === "3" ? (Number(v) as 1 | 2 | 3) : null);
const asSubject = (v: string | null): ExamSubject | null => (v && (SUBJECTS as string[]).includes(v) ? (v as ExamSubject) : null);

/**
 * Chapter drill. Deep links: `?exam=&subject=&chapter=&grade=&level=`.
 * Without a fixed level it is adaptive: starts at medium, steps up after a
 * correct answer and down after a miss, never repeating a question in a set.
 */
export function ChapterDrill({ pool }: { pool: ExamQuestion[] }) {
  const t = useT();
  const subjectName = useSubjectNames();
  const examName = useExamNames();
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const exam = asExam(params.get("exam"));
  const subject = asSubject(params.get("subject"));
  const chapter = params.get("chapter");
  const grade = asGrade(params.get("grade"));
  const fixedLevel = asLevel(params.get("level"));
  const recordQuiz = useLearner((s) => s.recordQuiz);
  const recordAnswer = useLearner((s) => s.recordAnswer);

  const LEVELS: { id: 1 | 2 | 3; label: string }[] = [
    { id: 1, label: t("exam.drill.level.board", "Board / CET") },
    { id: 2, label: t("exam.drill.level.main", "Main / NEET") },
    { id: 3, label: t("exam.drill.level.advanced", "Advanced") },
  ];

  const href = (patch: Record<string, string | null>) => {
    const p = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(patch)) {
      if (v === null) p.delete(k);
      else p.set(k, v);
    }
    const s = p.toString();
    return s ? `${pathname}?${s}` : pathname;
  };
  const setParams = (patch: Record<string, string | null>) => router.replace(href(patch), { scroll: false });

  /** Pool after the exam and class filters (chapter list + counts). */
  const filtered = useMemo(() => pool.filter((q) => (!exam || q.exams.includes(exam)) && (!grade || gradeOf(q) === grade)), [pool, exam, grade]);

  const chapters = useMemo(() => {
    const m = new Map<ExamSubject, Map<string, { grade: string | null; n: number }>>();
    for (const q of filtered) {
      const list = m.get(q.subject) ?? new Map();
      const c = list.get(q.chapter) ?? { grade: gradeOf(q), n: 0 };
      c.n++;
      list.set(q.chapter, c);
      m.set(q.subject, list);
    }
    const order = exam ? EXAM_META[exam].subjects : SUBJECTS;
    return order.filter((s) => m.has(s)).map((s) => [s, [...m.get(s)!.entries()].sort((a, b) => (a[1].grade ?? "z").localeCompare(b[1].grade ?? "z") || a[0].localeCompare(b[0]))] as const);
  }, [filtered, exam]);

  const set = useMemo(() => filtered.filter((q) => (!subject || q.subject === subject) && (!chapter || q.chapter === chapter) && (!fixedLevel || (q.difficulty ?? 2) === fixedLevel)), [filtered, subject, chapter, fixedLevel]);
  const [run, setRun] = useState(0);
  const [asked, setAsked] = useState<string[]>([]);
  const [results, setResults] = useState<boolean[]>([]);
  const [level, setLevel] = useState<number>(fixedLevel ?? 2);

  const length = Math.min(LENGTH, set.length);
  const done = results.length >= length && length > 0;

  const restart = () => {
    setAsked([]);
    setResults([]);
    setLevel(fixedLevel ?? 2);
    setRun((r) => r + 1);
  };
  // A new deep link or filter starts a fresh set.
  const key = params.toString();
  useEffect(restart, [key]); // eslint-disable-line react-hooks/exhaustive-deps

  const current = useMemo(() => {
    if (done || !chapter) return undefined;
    const remaining = set.filter((q) => !asked.includes(q.id));
    if (!remaining.length) return undefined;
    // closest difficulty to the current level
    return [...remaining].sort((a, b) => Math.abs((a.difficulty ?? 2) - level) - Math.abs((b.difficulty ?? 2) - level) || a.id.localeCompare(b.id))[0];
  }, [set, asked, level, done, chapter]);

  const answer = (ok: boolean) => {
    if (!current) return;
    recordAnswer(ok);
    const next = [...results, ok];
    setResults(next);
    setAsked((a) => [...a, current.id]);
    if (!fixedLevel) setLevel((l) => Math.max(1, Math.min(3, l + (ok ? 1 : -1))));
    if (next.length >= length) {
      const c = next.filter(Boolean).length;
      recordQuiz(c, length);
      if (c / length >= 0.75) burst();
    }
  };

  const correct = results.filter(Boolean).length;
  const marking = exam === "KCET" || exam === "COMEDK" ? MARK.one : MARK.nta;
  const filtersOn = Boolean(exam || grade || fixedLevel);

  const chip = (active: boolean) => clsx("rounded-lg border-2 px-2.5 py-1 text-xs font-extrabold transition", active ? "border-accent bg-accent text-white" : "border-line bg-surface text-muted hover:bg-surface-2 hover:text-ink");

  return (
    <div className="mx-auto grid max-w-[1180px] gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[280px_1fr] lg:gap-8">
      <aside className="order-2 space-y-4 lg:order-1">
        <Link href="/exam" className="hidden items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent lg:flex">
          <ChevronLeft className="h-4 w-4" /> {t("exam.drill.back", "Exam prep")}
        </Link>
        {chapters.map(([sub, list]) => {
          const I = SUBJECT_ICON[sub];
          const groups = [...new Set(list.map(([, c]) => c.grade))];
          return (
            <div key={sub} className="card p-4">
              <div className="mb-3 flex items-center gap-2 font-black">
                <I className="h-4 w-4" style={{ color: SUBJECT_META[sub].color }} strokeWidth={2.5} /> {subjectName[sub]}
              </div>
              {groups.map((g) => (
                <div key={g ?? "other"} className="mb-2 last:mb-0">
                  {groups.length > 1 && <p className="mb-1.5 text-[11px] font-extrabold uppercase tracking-wider text-muted">{g ? t("exam.drill.classN", "Class {n}", { n: g }) : t("exam.drill.otherChapters", "Other")}</p>}
                  <div className="flex flex-wrap gap-1.5">
                    {list
                      .filter(([, c]) => c.grade === g)
                      .map(([c, info]) => {
                        const active = c === chapter && sub === subject;
                        return (
                          <Link
                            key={c}
                            href={href({ subject: sub, chapter: c })}
                            replace
                            scroll={false}
                            aria-current={active ? "page" : undefined}
                            className={clsx("rounded-lg border-2 px-2 py-1 text-xs font-bold transition", active ? "border-accent bg-accent text-white" : "border-line text-muted hover:bg-surface-2 hover:text-ink")}
                          >
                            {c} <span className={clsx("font-mono", active ? "text-white/80" : "text-muted")}>{info.n}</span>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
        {!chapters.length && <p className="card p-4 text-sm font-semibold text-muted">{t("exam.drill.noChaptersFiltered", "No chapters match these filters yet.")}</p>}
      </aside>

      <main className="order-1 min-w-0 lg:order-2">
        <Link href="/exam" className="mb-4 flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent lg:hidden">
          <ChevronLeft className="h-4 w-4" /> {t("exam.drill.back", "Exam prep")}
        </Link>
        {/* filters */}
        <section className="card mb-6 space-y-3 p-4" aria-label={t("exam.drill.filters", "Filters")}>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-muted">
            <SlidersHorizontal className="h-4 w-4" aria-hidden /> {t("exam.drill.filters", "Filters")}
            {filtersOn && (
              <button className="ml-auto text-accent hover:underline" onClick={() => setParams({ exam: null, grade: null, level: null })}>
                {t("exam.drill.clearFilters", "Clear filters")}
              </button>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={t("exam.drill.examFilter", "Exam")}>
            <button className={chip(!exam)} aria-pressed={!exam} onClick={() => setParams({ exam: null })}>
              {examName.Mixed}
            </button>
            {EXAM_IDS.map((e) => (
              <button key={e} className={chip(exam === e)} aria-pressed={exam === e} onClick={() => setParams({ exam: e })}>
                {examName[e]}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={t("exam.drill.classFilter", "Class")}>
            <button className={chip(!grade)} aria-pressed={!grade} onClick={() => setParams({ grade: null })}>
              {t("exam.drill.allClasses", "Classes 11 + 12")}
            </button>
            {(["11", "12"] as const).map((g) => (
              <button key={g} className={chip(grade === g)} aria-pressed={grade === g} onClick={() => setParams({ grade: g })}>
                {t("exam.drill.classN", "Class {n}", { n: g })}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label={t("exam.drill.levelFilter", "Difficulty")}>
            <button className={chip(!fixedLevel)} aria-pressed={!fixedLevel} onClick={() => setParams({ level: null })}>
              {t("exam.drill.level.adaptive", "Adaptive")}
            </button>
            {LEVELS.map((l) => (
              <button key={l.id} className={chip(fixedLevel === l.id)} aria-pressed={fixedLevel === l.id} onClick={() => setParams({ level: String(l.id) })}>
                {l.label}
              </button>
            ))}
          </div>
        </section>

        {!chapter ? (
          <div className="card grid min-h-[360px] place-items-center p-8 text-center sm:p-10">
            <div className="flex flex-col items-center">
              <Mascot pose="think" size={120} />
              <h1 className="mt-5 text-2xl font-black sm:text-3xl">{t("exam.drill.empty.title", "Pick a chapter to drill")}</h1>
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
                {subject && (
                  <p className="eyebrow">
                    {t("exam.drill.eyebrow", "{subject} · chapter drill", { subject: subjectName[subject] })}
                    {exam ? ` · ${examName[exam]}` : ""}
                    {grade ? ` · ${t("exam.drill.classN", "Class {n}", { n: grade })}` : ""}
                  </p>
                )}
                <h1 className="text-2xl font-black sm:text-3xl">{chapter}</h1>
              </div>
              <span className="chip !px-3 !py-1">
                <Gauge className="h-3.5 w-3.5" /> {LEVELS.find((l) => l.id === level)?.label}
                {!fixedLevel && ` · ${t("exam.drill.level.adaptive", "Adaptive")}`}
              </span>
            </div>
            {length > 0 && (
              <div className="mt-5 flex gap-1.5" aria-label={t("exam.drill.progressAria", "{n} of {total} answered", { n: results.length, total: length })}>
                {Array.from({ length }, (_, i) => (
                  <span key={i} className={clsx("h-3 flex-1 rounded-full", results[i] === true ? "bg-good" : results[i] === false ? "bg-bad" : i === results.length ? "bg-accent" : "bg-line")} />
                ))}
              </div>
            )}
            <div className="card mt-6 p-5 sm:p-8">
              {done ? (
                <div className="flex flex-col items-center py-6 text-center">
                  <ProgressRing value={correct / length} size={130} stroke={11} color={correct / length >= 0.75 ? "rgb(var(--good))" : correct / length >= 0.5 ? "rgb(var(--accent))" : "rgb(var(--bad))"}>
                    <span className="text-3xl font-black">{Math.round((correct / length) * 100)}%</span>
                  </ProgressRing>
                  <h2 className="mt-5 text-2xl font-black">
                    {correct === length ? t("exam.drill.result.perfect", "Chapter crushed!") : correct / length >= 0.6 ? t("exam.drill.result.good", "Solid work.") : t("exam.drill.result.low", "Keep drilling — this is where marks hide.")}
                  </h2>
                  <p className="mt-1 font-semibold text-muted">
                    {t("exam.drill.result.summaryScheme", "{correct}/{total} correct · {marks} marks at {c} / {w}", {
                      correct,
                      total: length,
                      marks: correct * marking.correct + (length - correct) * marking.wrong,
                      c: signed(marking.correct),
                      w: signed(marking.wrong),
                    })}
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
                <div className="text-center">
                  <p className="font-semibold text-muted">{filtersOn ? t("exam.drill.noQuestionsFiltered", "No questions for this chapter with these filters yet.") : t("exam.drill.noQuestions", "No questions for this chapter yet.")}</p>
                  {filtersOn && (
                    <button className="btn-ghost mt-4" onClick={() => setParams({ exam: null, grade: null, level: null })}>
                      {t("exam.drill.clearFilters", "Clear filters")}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
