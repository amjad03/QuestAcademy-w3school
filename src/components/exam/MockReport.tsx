"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, CheckCircle2, CircleDashed, Clock, Crosshair, Hourglass, MinusCircle, RotateCcw, Sigma, Target, TrendingDown, TrendingUp, XCircle } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import type { MockResult } from "@/lib/store";
import { CANDIDATES, SUBJECT_META, gradeOf, markingFor, mockQuestionCount, predictedPercentile, scoreQuestion, type MockAnswer, type MockTest, type ScoreStatus } from "@/lib/exam";
import { Md, MdInline } from "@/components/Md";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar, ProgressRing } from "@/components/ui/Progress";
import { useMyClass, chapterHref } from "@/lib/useMyClass";
import { useT } from "@/i18n";
import { SUBJECT_ICON } from "./icons";
import { signed, useSubjectNames, useTxt } from "./labels";

type Filter = "all" | ScoreStatus;

interface Row {
  q: ExamQuestion;
  n: number;
  answer: MockAnswer;
  status: ScoreStatus;
  marks: number;
  max: number;
  time: number;
  ideal: number;
}

const fmtSec = (s: number) => (s >= 60 ? `${Math.floor(s / 60)}m ${Math.round(s % 60)}s` : `${Math.round(s)}s`);

export function MockReport({ test, result, questions, formulaChapters = [], onRetry }: { test: MockTest; result: MockResult; questions: ExamQuestion[]; formulaChapters?: string[]; onRetry: () => void }) {
  const t = useT();
  const tx = useTxt();
  const subjectName = useSubjectNames();
  const mc = useMyClass();
  const statusLabel: Record<Filter, string> = {
    all: t("exam.report.filter.all", "all"),
    wrong: t("exam.report.filter.wrong", "wrong"),
    skipped: t("exam.report.filter.skipped", "skipped"),
    correct: t("exam.report.filter.correct", "correct"),
    partial: t("exam.report.filter.partial", "partial"),
  };
  const [filter, setFilter] = useState<Filter>("wrong");

  const secById = useMemo(() => new Map(test.sections.map((s) => [s.id, s])), [test.sections]);
  // Pace when a question has no idealTime of its own: the paper's time per question.
  const pace = Math.round((test.minutes * 60) / Math.max(1, mockQuestionCount(test)));

  const rows: Row[] = useMemo(
    () =>
      questions.map((q, i) => {
        const sec = secById.get(result.sections?.[q.id] ?? "") ?? test.sections.find((s) => s.subject === q.subject && s.kinds.includes(q.kind)) ?? test.sections[0];
        const m = markingFor(sec, q.kind);
        const answer = result.answers[q.id] ?? null;
        const r = scoreQuestion(q, answer, m);
        return { q, n: i + 1, answer, status: r.status, marks: r.marks, max: m.correct, time: result.times?.[q.id] ?? 0, ideal: q.idealTime ?? pace };
      }),
    [questions, result, secById, test.sections, pace],
  );

  const frac = result.max ? result.score / result.max : 0;
  const exam = test.exam;
  const pct = predictedPercentile(frac, exam);
  const rank = Math.max(1, Math.round(((100 - pct) / 100) * CANDIDATES[exam]));
  const partialN = result.partial ?? rows.filter((r) => r.status === "partial").length;
  const attempted = result.correct + result.wrong + partialN;
  const accuracy = attempted ? (result.correct + partialN * 0.5) / attempted : 0;
  const negative = result.negative ?? rows.reduce((a, r) => a + (r.marks < 0 ? -r.marks : 0), 0);
  const showPartial = partialN > 0 || test.sections.some((s) => s.kinds.includes("multi") && markingFor(s, "multi").partial);
  const hasTimes = Boolean(result.times && Object.keys(result.times).length);

  /* per subject */
  const subjects = useMemo(() => {
    const m = new Map<ExamSubject, { score: number; max: number; correct: number; partial: number; wrong: number; skipped: number; negative: number; time: number; ideal: number; n: number }>();
    for (const r of rows) {
      const s = m.get(r.q.subject) ?? { score: 0, max: 0, correct: 0, partial: 0, wrong: 0, skipped: 0, negative: 0, time: 0, ideal: 0, n: 0 };
      s.score += r.marks;
      s.max += r.max;
      s[r.status]++;
      if (r.marks < 0) s.negative -= r.marks;
      s.time += r.time;
      s.ideal += r.ideal;
      s.n++;
      m.set(r.q.subject, s);
    }
    return [...m.entries()];
  }, [rows]);

  /* per chapter */
  const chapters = useMemo(() => {
    const m = new Map<string, { subject: ExamSubject; chapter: string; grade: string | null; correct: number; total: number; earned: number; max: number; negative: number; mistakes: number; attemptedMax: number }>();
    for (const r of rows) {
      const k = `${r.q.subject}|${r.q.chapter}`;
      const c = m.get(k) ?? { subject: r.q.subject, chapter: r.q.chapter, grade: gradeOf(r.q), correct: 0, total: 0, earned: 0, max: 0, negative: 0, mistakes: 0, attemptedMax: 0 };
      c.total++;
      if (r.status === "correct") c.correct++;
      if (r.status === "wrong" || r.status === "partial") c.mistakes++;
      if (r.status !== "skipped") c.attemptedMax += r.max;
      c.earned += r.marks;
      c.max += r.max;
      if (r.marks < 0) c.negative -= r.marks;
      m.set(k, c);
    }
    return [...m.values()].map((c) => ({ ...c, ratio: c.max ? Math.max(0, c.earned) / c.max : 0, lost: c.max - c.earned })).sort((a, b) => a.ratio - b.ratio || b.lost - a.lost);
  }, [rows]);

  // Mistakes first (marks lost on attempted questions, negative marks), then chapters left untouched.
  const mistaken = chapters.filter((c) => c.mistakes > 0).sort((a, b) => b.attemptedMax - b.earned - (a.attemptedMax - a.earned) || b.negative - a.negative);
  const revise = (mistaken.length ? mistaken : chapters.filter((c) => c.ratio < 0.6)).slice(0, 6);

  /** The learner's class chapter page for an exam chapter title, when their class has it. */
  const classLink = (subject: ExamSubject, chapter: string, grade: string | null) => {
    if (!mc) return null;
    for (const s of mc.subjects) {
      if (s.id !== subject) continue;
      const ch = s.chapters.find((c) => c.title === chapter && (!grade || !c.syllabus?.grade || c.syllabus.grade === grade));
      if (ch) return chapterHref(s, ch);
    }
    return null;
  };
  const drillLink = (subject: ExamSubject, chapter: string, grade: string | null) => {
    const p = new URLSearchParams({ subject, chapter });
    if (exam !== "Mixed") p.set("exam", exam);
    if (grade) p.set("grade", grade);
    return `/exam/practice?${p}`;
  };

  const slow = hasTimes ? rows.filter((r) => r.time > r.ideal * 1.5 && r.time >= 30).sort((a, b) => b.time / b.ideal - a.time / a.ideal).slice(0, 5) : [];
  const overIdeal = rows.filter((r) => r.time > r.ideal).length;

  const shown = rows.filter((r) => filter === "all" || r.status === filter);
  const ringColor = frac >= 0.7 ? "rgb(var(--good))" : frac >= 0.4 ? "rgb(var(--accent))" : "rgb(var(--bad))";
  const jump = (n: number) => {
    setFilter("all");
    setTimeout(() => document.getElementById(`sol-${n}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
  };

  return (
    <div className="min-h-screen bg-bg text-ink">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-5 sm:py-10">
        {/* header */}
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <Mascot pose={frac >= 0.5 ? "cheer" : "think"} size={100} />
          <div className="min-w-0 flex-1">
            <p className="eyebrow">{t("exam.report.eyebrow", "Scorecard")}</p>
            <h1 className="mt-1 text-2xl font-black sm:text-3xl">{tx(test.title)}</h1>
            <p className="mt-1 font-semibold text-muted">
              {frac >= 0.7
                ? t("exam.report.verdict.high", "Outstanding attempt — keep this momentum.")
                : frac >= 0.4
                  ? t("exam.report.verdict.mid", "Solid base. Fix the red chapters below to jump ahead.")
                  : t("exam.report.verdict.low", "Every topper started here. Start with the weakest chapters below.")}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button className="btn-ghost" onClick={onRetry}>
              <RotateCcw className="h-4 w-4" /> {t("exam.report.retake", "Retake")}
            </button>
            <Link href="/exam" className="btn-primary">
              {t("exam.report.done", "Done")}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
          <section className="card flex flex-col items-center gap-6 p-5 sm:flex-row sm:p-6">
            <ProgressRing value={Math.max(0, frac)} size={150} stroke={12} color={ringColor}>
              <span className="block text-center">
                <span className="block text-4xl font-black" data-testid="score">
                  {result.score}
                </span>
                <span className="block text-xs font-bold text-muted">{t("exam.report.ofMax", "of {max}", { max: result.max })}</span>
              </span>
            </ProgressRing>
            <div className="w-full flex-1">
              <div className="grid grid-cols-2 gap-2.5">
                <Kpi icon={<TrendingUp className="h-4 w-4 text-accent" />} label={t("exam.report.kpi.percentile", "Percentile*")} value={pct.toFixed(2)} />
                <Kpi icon={<Target className="h-4 w-4 text-accent-2" />} label={t("exam.report.kpi.rank", "Projected rank*")} value={`~${rank.toLocaleString()}`} />
                <Kpi icon={<CheckCircle2 className="h-4 w-4 text-good" />} label={t("exam.report.kpi.accuracy", "Accuracy")} value={`${Math.round(accuracy * 100)}%`} />
                <Kpi icon={<Clock className="h-4 w-4 text-muted" />} label={t("exam.report.kpi.time", "Time used")} value={t("exam.report.kpi.timeValue", "{m}m {s}s", { m: Math.floor(result.seconds / 60), s: result.seconds % 60 })} />
              </div>
              <p className="mt-3 text-[11px] font-semibold text-muted">{t("exam.report.disclaimer", "*Indicative estimate from a model of typical score distributions — not an official prediction.")}</p>
            </div>
          </section>

          <section className="card p-5 sm:p-6" aria-labelledby="sec-analysis">
            <h2 id="sec-analysis" className="text-lg font-black">
              {t("exam.report.sections", "Section analysis")}
            </h2>
            <div className="mt-4 space-y-5">
              {subjects.map(([sub, b]) => {
                const I = SUBJECT_ICON[sub];
                const att = b.correct + b.partial + b.wrong;
                return (
                  <div key={sub} data-subject={sub}>
                    <div className="flex items-center justify-between gap-2 text-sm font-extrabold">
                      <span className="flex items-center gap-2">
                        <I className="h-4 w-4" style={{ color: SUBJECT_META[sub].color }} /> {subjectName[sub]}
                      </span>
                      <span className="font-mono">
                        {b.score}/{b.max}
                      </span>
                    </div>
                    <div className="mt-2 flex h-3.5 overflow-hidden rounded-full bg-line" aria-hidden>
                      <span className="bg-good" style={{ width: `${(b.correct / b.n) * 100}%` }} />
                      <span className="bg-accent" style={{ width: `${(b.partial / b.n) * 100}%` }} />
                      <span className="bg-bad" style={{ width: `${(b.wrong / b.n) * 100}%` }} />
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-muted">
                      <span className="text-good-shade">{t("exam.report.section.correct", "{n} correct", { n: b.correct })}</span>
                      {b.partial > 0 && <span className="text-accent">{t("exam.report.section.partial", "{n} partial", { n: b.partial })}</span>}
                      <span className="text-bad-shade">{t("exam.report.section.wrong", "{n} wrong", { n: b.wrong })}</span>
                      <span>{t("exam.report.section.skipped", "{n} skipped", { n: b.skipped })}</span>
                      <span>{t("exam.report.section.accuracy", "{pct}% accuracy", { pct: att ? Math.round(((b.correct + b.partial * 0.5) / att) * 100) : 0 })}</span>
                      {b.negative > 0 && <span className="text-bad-shade">{t("exam.report.section.negative", "−{n} negative", { n: b.negative })}</span>}
                      {hasTimes && <span>{t("exam.report.section.pace", "{t}/question (ideal {i})", { t: fmtSec(b.time / b.n), i: fmtSec(b.ideal / b.n) })}</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className={clsx("mt-4 grid gap-4 sm:grid-cols-2", showPartial ? "lg:grid-cols-4" : "lg:grid-cols-3")}>
          <Tile icon={<CheckCircle2 className="h-7 w-7 text-good" />} n={result.correct} label={t("exam.report.tile.correct", "Correct")} sub={t("exam.report.tile.correctSub", "+{n} marks", { n: rows.filter((r) => r.status === "correct").reduce((a, r) => a + r.marks, 0) })} />
          {showPartial && <Tile icon={<CircleDashed className="h-7 w-7 text-accent" />} n={partialN} label={t("exam.report.tile.partial", "Partial")} sub={t("exam.report.tile.partialSub", "+{n} partial marks", { n: rows.filter((r) => r.status === "partial").reduce((a, r) => a + r.marks, 0) })} />}
          <Tile icon={<XCircle className="h-7 w-7 text-bad" />} n={result.wrong} label={t("exam.report.tile.wrong", "Incorrect")} sub={negative ? t("exam.report.tile.negativeSub", "−{n} marks lost to negative marking", { n: negative }) : t("exam.report.tile.noNegativeSub", "No marks lost to negative marking")} testId="negative" />
          <Tile icon={<MinusCircle className="h-7 w-7 text-muted" />} n={result.skipped} label={t("exam.report.tile.skipped", "Unattempted")} sub={t("exam.report.tile.skippedSub", "{n} marks left on the table", { n: rows.filter((r) => r.status === "skipped").reduce((a, r) => a + r.max, 0) })} />
        </div>

        {/* chapters to revise */}
        {revise.length > 0 && (
          <section className="card mt-4 p-5 sm:p-6" aria-labelledby="revise-title">
            <h2 id="revise-title" className="flex items-center gap-2 text-lg font-black">
              <TrendingDown className="h-5 w-5 text-bad" aria-hidden /> {t("exam.report.revise", "Chapters to revise")}
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted">{t("exam.report.reviseHint", "Where you lost the most marks. Re-learn the chapter, then drill it.")}</p>
            <ul className="mt-4 divide-y divide-line">
              {revise.map((c) => {
                const I = SUBJECT_ICON[c.subject];
                const learn = classLink(c.subject, c.chapter, c.grade);
                return (
                  <li key={c.subject + c.chapter} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:gap-4">
                    <span className="flex min-w-0 flex-1 items-center gap-2">
                      <I className="h-4 w-4 shrink-0" style={{ color: SUBJECT_META[c.subject].color }} aria-hidden />
                      <span className="min-w-0">
                        <span className="block truncate font-extrabold">{c.chapter}</span>
                        <span className="block text-xs font-bold text-muted">
                          {t("exam.report.reviseMeta", "{c}/{n} correct · {lost} marks lost", { c: c.correct, n: c.total, lost: c.lost })}
                          {c.negative > 0 && ` · ${t("exam.report.reviseNegative", "−{n} negative", { n: c.negative })}`}
                          {c.grade && ` · ${t("exam.report.classN", "Class {n}", { n: c.grade })}`}
                        </span>
                      </span>
                    </span>
                    <span className="flex flex-wrap gap-2">
                      {learn && (
                        <Link href={learn} className="btn-ghost !px-3 !py-1.5 text-xs">
                          <BookOpen className="h-3.5 w-3.5" /> {t("exam.report.openChapter", "Open chapter")}
                        </Link>
                      )}
                      <Link href={drillLink(c.subject, c.chapter, c.grade)} className="btn-primary !px-3 !py-1.5 text-xs">
                        <Crosshair className="h-3.5 w-3.5" /> {t("exam.report.drill", "Drill")}
                      </Link>
                      {formulaChapters.includes(c.chapter) && (
                        <Link href={`/exam/formulas?chapter=${encodeURIComponent(c.chapter)}`} className="btn-ghost !px-3 !py-1.5 text-xs">
                          <Sigma className="h-3.5 w-3.5" /> {t("exam.report.formulas", "Formulas")}
                        </Link>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* time analysis */}
        {hasTimes && (
          <section className="card mt-4 p-5 sm:p-6" aria-labelledby="time-title">
            <h2 id="time-title" className="flex items-center gap-2 text-lg font-black">
              <Hourglass className="h-5 w-5 text-accent" aria-hidden /> {t("exam.report.time", "Time per question")}
            </h2>
            <p className="mt-1 text-sm font-semibold text-muted">{t("exam.report.timeHint", "{n} of {total} questions took longer than their ideal time. Ideal time is the setter’s estimate, or the paper’s pace ({pace}) when there is none.", { n: overIdeal, total: rows.length, pace: fmtSec(pace) })}</p>
            {slow.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {slow.map((r) => (
                  <li key={r.q.id}>
                    <button onClick={() => jump(r.n)} className="flex w-full items-center gap-3 rounded-xl border-2 border-line px-3 py-2 text-left text-sm transition hover:bg-surface-2">
                      <span className="rounded-md bg-ink px-1.5 py-0.5 text-xs font-black text-bg">Q{r.n}</span>
                      <span className="min-w-0 flex-1 truncate font-bold">{r.q.chapter}</span>
                      <span className="shrink-0 font-mono text-xs font-black text-bad-shade">{fmtSec(r.time)}</span>
                      <span className="shrink-0 font-mono text-xs font-bold text-muted">/ {fmtSec(r.ideal)}</span>
                      <StatusChip status={r.status} marks={r.marks} label={statusLabel[r.status]} />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm font-bold text-good-shade">{t("exam.report.timeGood", "No question ran far over its ideal time — good pacing.")}</p>
            )}
          </section>
        )}

        <section className="card mt-4 p-5 sm:p-6" aria-labelledby="ch-title">
          <h2 id="ch-title" className="text-lg font-black">
            {t("exam.report.chapters", "Chapter breakdown")}
          </h2>
          <p className="mt-1 text-sm font-semibold text-muted">{t("exam.report.chaptersHint", "Weakest first — tap a chapter to drill it.")}</p>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c) => {
              const I = SUBJECT_ICON[c.subject];
              const color = c.ratio >= 0.75 ? "rgb(var(--good))" : c.ratio >= 0.4 ? "rgb(var(--warn))" : "rgb(var(--bad))";
              return (
                <Link key={c.subject + c.chapter} href={drillLink(c.subject, c.chapter, c.grade)} className="tile flex flex-col gap-2 p-3.5">
                  <span className="flex items-center gap-2">
                    <I className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                    <span className="min-w-0 flex-1 truncate text-sm font-extrabold">{c.chapter}</span>
                    <span className="font-mono text-sm font-black" style={{ color }}>
                      {Math.round(c.ratio * 100)}%
                    </span>
                  </span>
                  <ProgressBar value={c.ratio} height={8} color={color} label={c.chapter} />
                  <span className="text-[11px] font-bold text-muted">{t("exam.report.chapterMeta", "{c}/{n} correct · {e}/{m} marks", { c: c.correct, n: c.total, e: c.earned, m: c.max })}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="sol-title">
          <div className="flex flex-wrap items-center gap-2">
            <h2 id="sol-title" className="mr-auto text-2xl font-black">
              {t("exam.report.solutions", "Solutions")}
            </h2>
            {(["wrong", ...(partialN ? (["partial"] as const) : []), "skipped", "correct", "all"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={clsx("rounded-xl border-2 border-b-4 px-3.5 py-1.5 text-sm font-extrabold capitalize transition", filter === f ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2")}
              >
                {statusLabel[f]}
              </button>
            ))}
          </div>
          <div className="mt-5 space-y-4">
            {shown.map((r) => (
              <Solution key={r.q.id} row={r} label={statusLabel[r.status]} hasTimes={hasTimes} />
            ))}
            {shown.length === 0 && <p className="py-10 text-center font-bold text-muted">{filter === "wrong" ? t("exam.report.empty.wrong", "No mistakes — brilliant!") : t("exam.report.empty.other", "Nothing here — try another filter.")}</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatusChip({ status, marks, label }: { status: ScoreStatus; marks: number; label: string }) {
  return (
    <span
      className={clsx(
        "chip shrink-0 capitalize",
        status === "correct" ? "!bg-good-soft !text-good-shade" : status === "wrong" ? "!bg-bad-soft !text-bad-shade" : status === "partial" ? "!bg-accent-soft !text-accent" : "",
      )}
    >
      {label} · {signed(marks)}
    </span>
  );
}

function Solution({ row, label, hasTimes }: { row: Row; label: string; hasTimes: boolean }) {
  const t = useT();
  const { q, n, answer: a, status, marks } = row;
  const chosen = Array.isArray(a) ? a : typeof a === "number" && q.kind !== "numeric" ? [a] : [];
  return (
    <article id={`sol-${n}`} className="card scroll-mt-4 p-4 sm:p-5" data-status={status}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-lg bg-ink px-2 py-0.5 text-sm font-black text-bg">Q{n}</span>
        <span className="chip">{q.chapter}</span>
        <StatusChip status={status} marks={marks} label={label} />
        {hasTimes && (
          <span className={clsx("chip", row.time > row.ideal ? "!text-bad-shade" : "")}>
            <Clock className="h-3 w-3" aria-hidden /> {t("exam.report.timeChip", "{t} · ideal {i}", { t: fmtSec(row.time), i: fmtSec(row.ideal) })}
          </span>
        )}
      </div>
      <div className="mt-3 font-bold">
        <Md text={q.q} className="space-y-2 leading-7" />
      </div>
      {q.kind === "numeric" ? (
        <div className="mt-3 text-sm font-semibold">
          {t("exam.report.yourAnswer", "Your answer:")} <b className="font-mono">{typeof a === "number" ? a : "—"}</b> · {t("exam.report.correctAnswer", "Correct:")} <b className="font-mono text-good-shade">{q.answer}</b>
          {q.unit ? ` ${q.unit}` : ""}
        </div>
      ) : (
        <>
          {q.kind === "multi" && <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-muted">{t("exam.report.multiLegend", "One or more correct · green = correct option · ✓ = your pick")}</p>}
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {q.options.map((o, k) => {
              const right = q.kind === "mcq" ? k === q.answer : q.answers.includes(k);
              const picked = chosen.includes(k);
              return (
                <div
                  key={k}
                  className={clsx("flex items-start gap-2 rounded-xl border-2 px-3 py-2 text-sm font-semibold", right ? (picked || q.kind === "mcq" ? "border-good bg-good-soft" : "border-dashed border-good") : picked ? "border-bad bg-bad-soft" : "border-line")}
                  data-option={k}
                  data-picked={picked || undefined}
                  data-right={right || undefined}
                >
                  <b className="shrink-0">({String.fromCharCode(65 + k)})</b>
                  <span className="min-w-0 flex-1">
                    <MdInline text={o} />
                  </span>
                  {picked && <span className={clsx("shrink-0 text-xs font-black", right ? "text-good-shade" : "text-bad-shade")}>{right ? t("exam.report.pickRight", "✓ your pick") : t("exam.report.pickWrong", "✗ your pick")}</span>}
                  {!picked && right && q.kind === "multi" && <span className="shrink-0 text-xs font-black text-good-shade">{t("exam.report.missed", "missed")}</span>}
                </div>
              );
            })}
          </div>
        </>
      )}
      {q.explain && (
        <div className="mt-4 rounded-2xl bg-surface-2 p-4">
          <div className="eyebrow mb-1 !text-accent">{t("exam.report.solution", "Solution")}</div>
          <Md text={q.explain} className="prose-quest space-y-2 !text-[0.95rem]" />
        </div>
      )}
    </article>
  );
}

function Kpi({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface-2 p-3">
      <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wide text-muted">
        {icon} {label}
      </div>
      <div className="mt-1 text-xl font-black">{value}</div>
    </div>
  );
}

function Tile({ icon, n, label, sub, testId }: { icon: React.ReactNode; n: number; label: string; sub: string; testId?: string }) {
  return (
    <div className="card flex items-center gap-4 p-5" data-testid={testId}>
      {icon}
      <div className="min-w-0">
        <div className="text-2xl font-black">
          {n} <span className="text-base font-bold text-muted">{label}</span>
        </div>
        <div className="text-xs font-semibold text-muted">{sub}</div>
      </div>
    </div>
  );
}
