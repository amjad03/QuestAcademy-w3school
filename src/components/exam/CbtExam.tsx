"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Atom, Bookmark, ChevronLeft, ChevronRight, Clock, Dna, Eraser, Flag, FlaskConical, LayoutGrid, Pi, Stethoscope, Timer, Wrench, X, type LucideIcon } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import { Md, MdInline } from "@/components/Md";
import { useLearner, type MockResult } from "@/lib/store";
import { SUBJECT_META, assembleMock, scoreQuestion, type MockTest } from "@/lib/exam";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";
import { MockReport } from "./MockReport";
import { useSubjectNames } from "./labels";

type Status = "unvisited" | "unanswered" | "answered" | "marked" | "answered-marked";

interface Session {
  testId: string;
  ids: string[];
  answers: Record<string, number | null>;
  marked: string[];
  visited: string[];
  startedAt: number;
  current: number;
}

const KEY = (id: string) => `qa-cbt:${id}`;

const SUBJECT_ICON: Record<ExamSubject, LucideIcon> = { physics: Atom, chemistry: FlaskConical, biology: Dna, maths: Pi };
const MOCK_ICON: Record<string, { icon: LucideIcon; color: string }> = {
  "neet-full": { icon: Stethoscope, color: "#2EBE70" },
  "jee-main": { icon: Wrench, color: "#2F6BFF" },
  "physics-sprint": { icon: Atom, color: "#1CB0F6" },
  "chemistry-sprint": { icon: FlaskConical, color: "#14B8A6" },
  "biology-sprint": { icon: Dna, color: "#2EBE70" },
  "maths-sprint": { icon: Pi, color: "#7C4DFF" },
};

export function CbtExam({ test, pool }: { test: MockTest; pool: ExamQuestion[] }) {
  const hydrated = useHydrated();
  const t = useT();
  const subjectName = useSubjectNames();
  const LEGEND: Record<Status, string> = {
    unvisited: t("exam.cbt.legend.unvisited", "Not visited"),
    unanswered: t("exam.cbt.legend.unanswered", "Not answered"),
    answered: t("exam.cbt.legend.answered", "Answered"),
    marked: t("exam.cbt.legend.marked", "Marked"),
    "answered-marked": t("exam.cbt.legend.answeredMarked", "Answered & marked"),
  };
  const recordMock = useLearner((s) => s.recordMock);
  const [phase, setPhase] = useState<"intro" | "test" | "result">("intro");
  const [session, setSession] = useState<Session | null>(null);
  const [result, setResult] = useState<MockResult | null>(null);
  const [now, setNow] = useState(Date.now());
  const [confirm, setConfirm] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const byId = useMemo(() => new Map(pool.map((q) => [q.id, q])), [pool]);

  // Resume an in-progress attempt (refresh-safe).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY(test.id));
      if (raw) {
        const s = JSON.parse(raw) as Session;
        if (!s.ids.every((id) => byId.has(id))) localStorage.removeItem(KEY(test.id));
        else {
          setSession(s);
          // Time ran out while the tab was closed: open the attempt so the timer submits it, as at 00:00.
          if (Date.now() - s.startedAt >= test.minutes * 60_000) setPhase("test");
        }
      }
    } catch {
      /* ignore */
    }
  }, [test.id, test.minutes, byId]);

  useEffect(() => {
    if (session && phase === "test") localStorage.setItem(KEY(test.id), JSON.stringify(session));
  }, [session, phase, test.id]);

  useEffect(() => {
    if (phase !== "test") return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [phase]);

  const questions = useMemo(() => session?.ids.map((id) => byId.get(id)!) ?? [], [session, byId]);
  const current = session ? questions[session.current] : undefined;
  const remaining = session ? Math.max(0, test.minutes * 60 - Math.floor((now - session.startedAt) / 1000)) : test.minutes * 60;

  useEffect(() => {
    if (current?.kind === "numeric") {
      const a = session?.answers[current.id];
      setDraft(a === null || a === undefined ? "" : String(a));
    }
  }, [current?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const start = (resume: boolean) => {
    if (!resume || !session) {
      const qs = assembleMock(test, pool);
      setSession({ testId: test.id, ids: qs.map((q) => q.id), answers: {}, marked: [], visited: [qs[0].id], startedAt: Date.now(), current: 0 });
    }
    setNow(Date.now());
    setPhase("test");
    document.documentElement.requestFullscreen?.().catch(() => {});
  };

  const submit = useCallback(() => {
    if (!session) return;
    const bySubject: MockResult["bySubject"] = {};
    let score = 0;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    for (const q of questions) {
      const r = scoreQuestion(q, session.answers[q.id], test.marking);
      const b = (bySubject[q.subject] ??= { correct: 0, wrong: 0, skipped: 0, score: 0, max: 0 });
      b.max += test.marking.correct;
      b.score += r.marks;
      b[r.status] += 1;
      score += r.marks;
      if (r.status === "correct") correct++;
      else if (r.status === "wrong") wrong++;
      else skipped++;
    }
    const res: MockResult = {
      id: `${test.id}-${session.startedAt}`,
      testId: test.id,
      title: test.title,
      date: new Date().toISOString(),
      score,
      max: questions.length * test.marking.correct,
      correct,
      wrong,
      skipped,
      seconds: Math.min(test.minutes * 60, Math.round((Date.now() - session.startedAt) / 1000)),
      bySubject,
      answers: Object.fromEntries(questions.map((q) => [q.id, session.answers[q.id] ?? null])),
    };
    recordMock(res);
    localStorage.removeItem(KEY(test.id));
    setResult(res);
    setPhase("result");
    setConfirm(false);
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }, [session, questions, test, recordMock]);

  useEffect(() => {
    if (phase === "test" && remaining === 0) submit();
  }, [phase, remaining, submit]);

  const statusOf = (id: string): Status => {
    if (!session) return "unvisited";
    const ans = session.answers[id];
    const answered = ans !== null && ans !== undefined;
    const marked = session.marked.includes(id);
    if (answered && marked) return "answered-marked";
    if (marked) return "marked";
    if (answered) return "answered";
    return session.visited.includes(id) ? "unanswered" : "unvisited";
  };

  const go = (i: number) =>
    setSession((s) => (s ? { ...s, current: i, visited: s.visited.includes(s.ids[i]) ? s.visited : [...s.visited, s.ids[i]] } : s));

  const setAnswer = (val: number | null) => setSession((s) => (s && current ? { ...s, answers: { ...s.answers, [current.id]: val } } : s));

  const commitDraft = () => {
    if (current?.kind === "numeric") {
      const v = draft.trim() === "" ? null : Number(draft);
      setAnswer(v === null || Number.isNaN(v) ? null : v);
    }
  };

  const saveNext = (mark = false) => {
    if (!session || !current) return;
    commitDraft();
    setSession((s) => {
      if (!s) return s;
      const marked = mark ? Array.from(new Set([...s.marked, current.id])) : s.marked.filter((x) => x !== current.id);
      const nextI = Math.min(s.ids.length - 1, s.current + 1);
      return { ...s, marked, current: nextI, visited: s.visited.includes(s.ids[nextI]) ? s.visited : [...s.visited, s.ids[nextI]] };
    });
  };

  const counts = useMemo(() => {
    const c: Record<Status, number> = { unvisited: 0, unanswered: 0, answered: 0, marked: 0, "answered-marked": 0 };
    for (const q of questions) c[statusOf(q.id)]++;
    return c;
  }, [questions, session]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!hydrated) return <div className="min-h-screen bg-bg" />;

  const meta = MOCK_ICON[test.id] ?? { icon: Timer, color: "#2F6BFF" };
  const TestIcon = meta.icon;

  /* ---------------- INTRO ---------------- */
  if (phase === "intro") {
    const total = test.sections.reduce((a, s) => a + s.count, 0);
    return (
      <div className="min-h-screen bg-bg text-ink">
        <div className="mx-auto max-w-3xl px-5 py-8">
          <Link href="/exam/mock" className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> {t("exam.cbt.allMocks", "All mock tests")}
          </Link>
          <div className="mt-8 flex items-center gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-white" style={{ background: meta.color }}>
              <TestIcon className="h-8 w-8" strokeWidth={2.5} />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{t("exam.cbt.eyebrow", "Mock test · {exam}", { exam: test.exam === "Mixed" ? "NEET · JEE" : test.exam })}</p>
              <h1 className="mt-1 text-3xl font-black">{test.title}</h1>
              <p className="mt-1 font-semibold text-muted">{test.blurb}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <Info label={t("exam.cbt.info.questions", "Questions")} value={String(total)} />
            <Info label={t("exam.cbt.info.duration", "Duration")} value={t("exam.cbt.minutes", "{n} min", { n: test.minutes })} />
            <Info label={t("exam.cbt.info.maxMarks", "Max marks")} value={String(total * test.marking.correct)} />
          </div>

          <div className="card mt-6 p-6">
            <h2 className="text-lg font-black">{t("exam.cbt.instructions", "Instructions")}</h2>
            <ul className="mt-3 space-y-2 font-semibold leading-7 text-muted">
              <li>
                <b className="text-ink">{t("exam.cbt.sections", "Sections:")}</b> {test.sections.map((s) => `${subjectName[s.subject]} (${s.count})`).join(" · ")}
              </li>
              <li>
                <b className="text-ink">{t("exam.cbt.marking", "Marking:")}</b> <span className="font-black text-good">+{test.marking.correct}</span> {t("exam.cbt.marking.correct", "correct,")}{" "}
                <span className="font-black text-bad">{test.marking.wrong}</span> {t("exam.cbt.marking.wrongMcq", "wrong MCQ,")}{" "}
                {t("exam.cbt.marking.rest", "{n} wrong numerical, 0 unattempted.", { n: test.marking.numericWrong })}
              </li>
              <li>{t("exam.cbt.rule.palette", "Use the palette to jump between questions. “Mark for review” flags a question to revisit — marked answers are still evaluated.")}</li>
              <li>{t("exam.cbt.rule.timer", "The timer keeps running if you refresh; your attempt is saved and resumes automatically. The test auto-submits at 00:00.")}</li>
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t-2 border-line pt-5 sm:grid-cols-3">
              {(["unvisited", "unanswered", "answered", "marked", "answered-marked"] as Status[]).map((st) => (
                <span key={st} className="flex items-center gap-2 text-sm font-bold text-muted">
                  <PaletteDot status={st} /> {LEGEND[st]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {session ? (
              <>
                <button className="btn-primary sm:min-w-[240px]" onClick={() => start(true)}>
                  {t("exam.cbt.resume", "Resume · {n} min left", { n: Math.floor(remaining / 60) })}
                </button>
                <button
                  className="btn-ghost"
                  onClick={() => {
                    localStorage.removeItem(KEY(test.id));
                    setSession(null);
                    start(false);
                  }}
                >
                  {t("exam.cbt.startFresh", "Start fresh")}
                </button>
              </>
            ) : (
              <button className="btn-primary sm:min-w-[240px]" onClick={() => start(false)}>
                {t("exam.cbt.begin", "Begin test")}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- RESULT ---------------- */
  if (phase === "result" && result) {
    return (
      <MockReport
        test={test}
        result={result}
        questions={questions}
        onRetry={() => {
          setResult(null);
          setSession(null);
          setPhase("intro");
        }}
      />
    );
  }

  if (!session || !current) return null;

  /* ---------------- TEST ---------------- */
  const sections = test.sections.map((s) => s.subject);
  const sectionStart = (sub: ExamSubject) => questions.findIndex((q) => q.subject === sub);
  const low = remaining < 300;
  const ans = session.answers[current.id];

  const palette = (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-2 gap-2.5 border-b-2 border-line p-4 text-xs">
        {(["answered", "unanswered", "unvisited", "marked", "answered-marked"] as Status[]).map((st) => (
          <span key={st} className="flex items-center gap-2 font-bold text-muted">
            <PaletteDot status={st} label={String(counts[st])} /> {LEGEND[st]}
          </span>
        ))}
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto p-4">
        {sections.map((sub) => {
          const I = SUBJECT_ICON[sub];
          return (
            <div key={sub}>
              <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-muted">
                <I className="h-4 w-4" style={{ color: SUBJECT_META[sub].color }} /> {subjectName[sub]}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {questions.map((q, i) =>
                  q.subject !== sub ? null : (
                    <button
                      key={q.id}
                      onClick={() => {
                        commitDraft();
                        go(i);
                        setPaletteOpen(false);
                      }}
                      className={clsx("rounded-lg", i === session.current && "ring-2 ring-ink ring-offset-2 ring-offset-surface")}
                      aria-label={t("exam.cbt.paletteItem", "Question {n}: {status}", { n: i + 1, status: LEGEND[statusOf(q.id)] })}
                    >
                      <PaletteDot status={statusOf(q.id)} label={String(i + 1)} big />
                    </button>
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-line p-4">
        <button className="btn-good w-full" onClick={() => setConfirm(true)}>
          <Flag className="h-4 w-4" /> {t("exam.cbt.submitTest", "Submit test")}
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-bg text-ink">
      {/* top bar */}
      <header className="flex items-center gap-3 border-b-2 border-line bg-surface px-4 py-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white" style={{ background: meta.color }}>
          <TestIcon className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <div className="min-w-0">
          <div className="truncate font-black">{test.title}</div>
          <div className="text-xs font-bold text-muted">
            {t("exam.cbt.progress", "Question {n} of {total}", { n: session.current + 1, total: questions.length })}
          </div>
        </div>
        <div
          className={clsx("ml-auto flex items-center gap-2 rounded-xl border-2 px-3 py-1.5 font-mono text-lg font-black", low ? "animate-pulse border-bad bg-bad-soft text-bad" : "border-line bg-surface-2 text-ink")}
          aria-live="polite"
          aria-label={t("exam.cbt.timeRemaining", "Time remaining")}
        >
          <Clock className="h-4 w-4" />
          {String(Math.floor(remaining / 3600)).padStart(2, "0")}:{String(Math.floor((remaining % 3600) / 60)).padStart(2, "0")}:{String(remaining % 60).padStart(2, "0")}
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-xl border-2 border-line lg:hidden" onClick={() => setPaletteOpen(true)} aria-label={t("exam.cbt.palette", "Question palette")}>
          <LayoutGrid className="h-5 w-5" />
        </button>
      </header>

      {/* section tabs */}
      <div className="flex gap-1 overflow-x-auto border-b-2 border-line bg-surface px-4" role="tablist">
        {sections.map((sub) => {
          const I = SUBJECT_ICON[sub];
          const active = current.subject === sub;
          return (
            <button
              key={sub}
              role="tab"
              aria-selected={active}
              onClick={() => {
                commitDraft();
                go(sectionStart(sub));
              }}
              className={clsx("-mb-[2px] flex shrink-0 items-center gap-2 border-b-4 px-4 py-3 text-sm font-extrabold uppercase tracking-wide transition", active ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink")}
            >
              <I className="h-4 w-4" /> {subjectName[sub]}
            </button>
          );
        })}
      </div>

      <div className="flex min-h-0 flex-1">
        {/* question */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-5 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-ink px-2.5 py-1 text-sm font-black text-bg">Q{session.current + 1}</span>
                <span className="chip">{current.chapter}</span>
                <span className="chip">{current.kind === "numeric" ? t("exam.cbt.kind.numeric", "Numerical value") : t("exam.cbt.kind.single", "Single correct")}</span>
                <span className="chip !bg-good-soft !text-good-shade">+{test.marking.correct}</span>
                <span className="chip !bg-bad-soft !text-bad-shade">{current.kind === "numeric" ? test.marking.numericWrong : test.marking.wrong}</span>
              </div>
              <div className="mt-6 text-xl font-bold leading-9">
                <Md text={current.q} className="space-y-3" />
              </div>
              <div className="mt-7">
                {current.kind === "mcq" ? (
                  <div className="space-y-3">
                    {current.options.map((o, i) => (
                      <button
                        key={i}
                        onClick={() => setAnswer(i)}
                        aria-pressed={ans === i}
                        className={clsx(
                          "flex w-full items-center gap-4 rounded-2xl border-2 border-b-4 p-4 text-left text-[17px] font-bold transition active:translate-y-[2px] active:border-b-2",
                          ans === i ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2",
                        )}
                      >
                        <span className={clsx("grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 text-sm font-black", ans === i ? "border-accent bg-accent text-white" : "border-line text-muted")}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="min-w-0 flex-1">
                          <MdInline text={o} />
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <label className="eyebrow" htmlFor="num-answer">
                      {t("exam.cbt.numericLabel", "Enter your numerical answer")}{current.unit ? ` (${current.unit})` : ""}
                    </label>
                    <input
                      id="num-answer"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value.replace(/[^0-9.\-]/g, ""))}
                      onBlur={commitDraft}
                      inputMode="decimal"
                      className="input mt-2 max-w-xs py-4 font-mono text-2xl"
                      placeholder="0"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* action bar */}
          <div className="flex flex-wrap items-center gap-2 border-t-2 border-line bg-surface px-4 py-3">
            <button
              className="btn-ghost !px-4"
              onClick={() => {
                commitDraft();
                go(Math.max(0, session.current - 1));
              }}
              disabled={session.current === 0}
              aria-label={t("exam.cbt.previousAria", "Previous question")}
            >
              <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">{t("exam.cbt.previous", "Previous")}</span>
            </button>
            <button
              className="btn-ghost !px-4"
              onClick={() => {
                setAnswer(null);
                setDraft("");
              }}
              aria-label={t("exam.cbt.clearAria", "Clear response")}
            >
              <Eraser className="h-4 w-4" /> <span className="hidden sm:inline">{t("exam.cbt.clear", "Clear")}</span>
            </button>
            <button className="btn-purple !px-4" onClick={() => saveNext(true)} aria-label={t("exam.cbt.markNextAria", "Mark for review and next")}>
              <Bookmark className="h-4 w-4" /> <span className="hidden sm:inline">{t("exam.cbt.markNext", "Mark & next")}</span>
            </button>
            <button className="btn-primary ml-auto" onClick={() => (session.current === questions.length - 1 ? (commitDraft(), setConfirm(true)) : saveNext(false))}>
              {session.current === questions.length - 1 ? t("exam.cbt.saveSubmit", "Save & submit") : t("exam.cbt.saveNext", "Save & next")} <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </main>

        <aside className="hidden w-80 shrink-0 border-l-2 border-line bg-surface lg:block">{palette}</aside>
      </div>

      {/* mobile palette */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div className="fixed inset-0 z-[60] bg-ink/40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPaletteOpen(false)}>
            <motion.div className="absolute inset-y-0 right-0 w-[86%] max-w-sm bg-surface" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} onClick={(e) => e.stopPropagation()}>
              <button className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-xl hover:bg-surface-2" onClick={() => setPaletteOpen(false)} aria-label={t("exam.cbt.close", "Close")}>
                <X className="h-5 w-5" />
              </button>
              {palette}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* submit confirm */}
      <AnimatePresence>
        {confirm && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-ink/40 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="w-full max-w-md rounded-3xl bg-surface p-7" initial={{ scale: 0.92 }} animate={{ scale: 1 }} role="alertdialog" aria-modal="true" aria-labelledby="submit-title">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-warn-shade" />
                <h2 id="submit-title" className="text-xl font-black">
                  {t("exam.cbt.confirm.title", "Submit your test?")}
                </h2>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <Info label={t("exam.cbt.legend.answered", "Answered")} value={String(counts.answered + counts["answered-marked"])} />
                <Info label={t("exam.cbt.legend.unanswered", "Not answered")} value={String(counts.unanswered + counts.unvisited + counts.marked)} />
                <Info label={t("exam.cbt.legend.marked", "Marked")} value={String(counts.marked + counts["answered-marked"])} />
                <Info label={t("exam.cbt.timeLeft", "Time left")} value={t("exam.cbt.timeLeftValue", "{m}m {s}s", { m: Math.floor(remaining / 60), s: remaining % 60 })} />
              </div>
              <div className="mt-7 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button className="btn-ghost" onClick={() => setConfirm(false)} autoFocus>
                  {t("exam.cbt.keepGoing", "Keep going")}
                </button>
                <button className="btn-good" onClick={submit}>
                  {t("exam.cbt.submit", "Submit")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PaletteDot({ status, label, big }: { status: Status; label?: string; big?: boolean }) {
  return (
    <span
      className={clsx(
        "relative grid place-items-center font-black",
        big ? "h-10 w-full text-sm" : "h-6 w-6 shrink-0 text-[10px]",
        status === "unvisited" && "rounded-lg border-2 border-line bg-surface text-muted",
        status === "unanswered" && "rounded-b-xl rounded-t-md bg-bad text-white",
        status === "answered" && "rounded-t-xl rounded-b-md bg-good text-white",
        (status === "marked" || status === "answered-marked") && "rounded-full bg-accent-2 text-white",
      )}
    >
      {label}
      {status === "answered-marked" && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-good" />}
    </span>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border-2 border-line bg-surface p-3.5">
      <div className="text-xs font-extrabold uppercase tracking-wide text-muted">{label}</div>
      <div className="mt-0.5 text-xl font-black">{value}</div>
    </div>
  );
}
