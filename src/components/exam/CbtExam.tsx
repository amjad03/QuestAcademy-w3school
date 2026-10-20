"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Bookmark, ChevronLeft, ChevronRight, Clock, Eraser, Flag, LayoutGrid, X } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import { Md, MdInline } from "@/components/Md";
import { useLearner, type MockResult } from "@/lib/store";
import { SUBJECT_META, assembleMock, scoreQuestion, type MockTest } from "@/lib/exam";
import { useHydrated } from "@/components/providers";
import { MockReport } from "./MockReport";

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

export function CbtExam({ test, pool }: { test: MockTest; pool: ExamQuestion[] }) {
  const hydrated = useHydrated();
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
        if (Date.now() - s.startedAt < test.minutes * 60_000 && s.ids.every((id) => byId.has(id))) setSession(s);
        else localStorage.removeItem(KEY(test.id));
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
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
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

  if (!hydrated) return <div data-world="exam" className="min-h-screen bg-bg" />;

  /* ---------------- INTRO ---------------- */
  if (phase === "intro") {
    const total = test.sections.reduce((a, s) => a + s.count, 0);
    return (
      <div data-world="exam" className="min-h-screen bg-bg text-ink">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Link href="/exam/mock" className="flex items-center gap-1 text-sm text-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> All mock tests
          </Link>
          <div className="card mt-6 overflow-hidden">
            <div className="border-b border-line bg-gradient-to-r from-accent/20 to-accent-2/10 p-8">
              <div className="text-5xl">{test.emoji}</div>
              <h1 className="mt-3 font-display text-3xl font-bold">{test.title}</h1>
              <p className="mt-1 text-muted">{test.blurb}</p>
            </div>
            <div className="grid gap-6 p-8 sm:grid-cols-3">
              <Info label="Questions" value={String(total)} />
              <Info label="Duration" value={`${test.minutes} min`} />
              <Info label="Max marks" value={String(total * test.marking.correct)} />
            </div>
            <div className="space-y-4 border-t border-line p-8 text-sm leading-7">
              <h2 className="font-semibold">Instructions</h2>
              <ul className="list-disc space-y-1 pl-5 text-muted">
                <li>Sections: {test.sections.map((s) => `${SUBJECT_META[s.subject].name} (${s.count})`).join(" · ")}.</li>
                <li>
                  Marking: <b className="text-good">+{test.marking.correct}</b> correct, <b className="text-bad">{test.marking.wrong}</b> wrong MCQ, {test.marking.numericWrong} wrong numerical, 0 unattempted.
                </li>
                <li>Use the palette to jump between questions. “Mark for review” flags a question to revisit — marked answers are still evaluated.</li>
                <li>The timer runs even if you refresh — your attempt is saved and resumes automatically. The test auto-submits at 00:00.</li>
              </ul>
              <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-5">
                {(["unvisited", "unanswered", "answered", "marked", "answered-marked"] as Status[]).map((s) => (
                  <span key={s} className="flex items-center gap-2 text-xs text-muted">
                    <PaletteDot status={s} /> {LEGEND[s]}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 border-t border-line p-8">
              {session ? (
                <>
                  <button className="btn-primary px-8" onClick={() => start(true)}>
                    Resume attempt ({Math.floor(remaining / 60)} min left)
                  </button>
                  <button className="btn-ghost" onClick={() => { localStorage.removeItem(KEY(test.id)); setSession(null); start(false); }}>
                    Start fresh
                  </button>
                </>
              ) : (
                <button className="btn-primary px-10 py-3 text-base" onClick={() => start(false)}>
                  I’m ready — begin test
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- RESULT ---------------- */
  if (phase === "result" && result) {
    return <MockReport test={test} result={result} questions={questions} onRetry={() => { setResult(null); setSession(null); setPhase("intro"); }} />;
  }

  if (!session || !current) return null;

  /* ---------------- TEST ---------------- */
  const sections = test.sections.map((s) => s.subject);
  const sectionStart = (sub: ExamSubject) => questions.findIndex((q) => q.subject === sub);
  const low = remaining < 300;
  const ans = session.answers[current.id];

  const palette = (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-2 gap-2 border-b border-line p-4 text-xs">
        {(["answered", "unanswered", "unvisited", "marked", "answered-marked"] as Status[]).map((s) => (
          <span key={s} className="flex items-center gap-2 text-muted">
            <PaletteDot status={s} label={String(counts[s])} /> {LEGEND[s]}
          </span>
        ))}
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {sections.map((sub) => (
          <div key={sub}>
            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">
              {SUBJECT_META[sub].emoji} {SUBJECT_META[sub].name}
            </div>
            <div className="grid grid-cols-6 gap-2">
              {questions.map((q, i) =>
                q.subject !== sub ? null : (
                  <button key={q.id} onClick={() => { commitDraft(); go(i); setPaletteOpen(false); }} className={clsx("rounded-lg", i === session.current && "ring-2 ring-accent ring-offset-2 ring-offset-surface")}>
                    <PaletteDot status={statusOf(q.id)} label={String(i + 1)} big />
                  </button>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line p-4">
        <button className="btn w-full bg-good text-white hover:brightness-110" onClick={() => setConfirm(true)}>
          <Flag className="h-4 w-4" /> Submit test
        </button>
      </div>
    </div>
  );

  return (
    <div data-world="exam" className="fixed inset-0 z-50 flex flex-col bg-bg text-ink">
      {/* top bar */}
      <header className="flex items-center gap-3 border-b border-line bg-surface px-4 py-2.5">
        <span className="text-2xl">{test.emoji}</span>
        <div className="min-w-0">
          <div className="truncate font-semibold">{test.title}</div>
          <div className="text-xs text-muted">Quest Academy CBT</div>
        </div>
        <div className={clsx("ml-auto flex items-center gap-2 rounded-xl px-3 py-1.5 font-mono text-lg font-bold", low ? "animate-pulse bg-bad/20 text-bad" : "bg-accent/15 text-accent")} aria-live="polite" aria-label="Time remaining">
          <Clock className="h-4 w-4" />
          {String(Math.floor(remaining / 3600)).padStart(2, "0")}:{String(Math.floor((remaining % 3600) / 60)).padStart(2, "0")}:{String(remaining % 60).padStart(2, "0")}
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-xl border border-line lg:hidden" onClick={() => setPaletteOpen(true)} aria-label="Question palette">
          <LayoutGrid className="h-5 w-5" />
        </button>
      </header>

      {/* section tabs */}
      <div className="flex gap-1 overflow-x-auto border-b border-line bg-surface/60 px-4">
        {sections.map((sub) => (
          <button
            key={sub}
            onClick={() => { commitDraft(); go(sectionStart(sub)); }}
            className={clsx("shrink-0 border-b-2 px-4 py-2.5 text-sm font-semibold transition", current.subject === sub ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink")}
          >
            {SUBJECT_META[sub].emoji} {SUBJECT_META[sub].name}
          </button>
        ))}
      </div>

      <div className="flex min-h-0 flex-1">
        {/* question */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-5 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-lg bg-surface-2 px-2.5 py-1 font-bold">Q {session.current + 1}</span>
                <span className="chip">{current.chapter}</span>
                <span className="chip">{current.kind === "numeric" ? "Numerical value" : "Single correct"}</span>
                <span className="chip !text-good">+{test.marking.correct}</span>
                <span className="chip !text-bad">{current.kind === "numeric" ? test.marking.numericWrong : test.marking.wrong}</span>
              </div>
              <div className="mt-5 text-lg leading-8">
                <Md text={current.q} className="space-y-3" />
              </div>
              <div className="mt-6">
                {current.kind === "mcq" ? (
                  <div className="space-y-3">
                    {current.options.map((o, i) => (
                      <button
                        key={i}
                        onClick={() => setAnswer(i)}
                        className={clsx("flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-left transition", ans === i ? "border-accent bg-accent/10" : "border-line bg-surface hover:border-accent/40")}
                      >
                        <span className={clsx("grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-sm font-bold", ans === i ? "border-accent bg-accent text-black" : "border-line text-muted")}>
                          {String.fromCharCode(65 + i)}
                        </span>
                        <MdInline text={o} />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div>
                    <label className="text-sm text-muted" htmlFor="num-answer">
                      Enter your numerical answer{current.unit ? ` (${current.unit})` : ""}
                    </label>
                    <input id="num-answer" value={draft} onChange={(e) => setDraft(e.target.value.replace(/[^0-9.\-]/g, ""))} onBlur={commitDraft} inputMode="decimal" className="input mt-2 h-14 max-w-xs font-mono text-2xl" placeholder="0" />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* action bar */}
          <div className="flex flex-wrap items-center gap-2 border-t border-line bg-surface p-3">
            <button className="btn-ghost" onClick={() => { commitDraft(); go(Math.max(0, session.current - 1)); }} disabled={session.current === 0}>
              <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">Previous</span>
            </button>
            <button className="btn-ghost" onClick={() => { setAnswer(null); setDraft(""); }}>
              <Eraser className="h-4 w-4" /> <span className="hidden sm:inline">Clear</span>
            </button>
            <button className="btn border border-violet-500/50 bg-violet-500/15 text-violet-300 hover:bg-violet-500/25" onClick={() => saveNext(true)}>
              <Bookmark className="h-4 w-4" /> <span className="hidden sm:inline">Mark for review &amp; next</span>
            </button>
            <button className="btn-primary ml-auto text-black" onClick={() => (session.current === questions.length - 1 ? (commitDraft(), setConfirm(true)) : saveNext(false))}>
              {session.current === questions.length - 1 ? "Save & submit" : "Save & next"} <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </main>

        <aside className="hidden w-80 shrink-0 border-l border-line bg-surface lg:block">{palette}</aside>
      </div>

      {/* mobile palette */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div className="fixed inset-0 z-[60] bg-black/60 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPaletteOpen(false)}>
            <motion.div className="absolute inset-y-0 right-0 w-[86%] max-w-sm bg-surface" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} onClick={(e) => e.stopPropagation()}>
              <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-xl hover:bg-surface-2" onClick={() => setPaletteOpen(false)} aria-label="Close">
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
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="card w-full max-w-md p-6" initial={{ scale: 0.9 }} animate={{ scale: 1 }} role="alertdialog" aria-modal="true">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-accent" />
                <h2 className="font-display text-xl font-bold">Submit your test?</h2>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <Info label="Answered" value={String(counts.answered + counts["answered-marked"])} />
                <Info label="Not answered" value={String(counts.unanswered + counts.unvisited + counts.marked)} />
                <Info label="Marked" value={String(counts.marked + counts["answered-marked"])} />
                <Info label="Time left" value={`${Math.floor(remaining / 60)}m ${remaining % 60}s`} />
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <button className="btn-ghost" onClick={() => setConfirm(false)}>
                  Keep going
                </button>
                <button className="btn bg-good text-white" onClick={submit}>
                  Submit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const LEGEND: Record<Status, string> = {
  unvisited: "Not visited",
  unanswered: "Not answered",
  answered: "Answered",
  marked: "Marked",
  "answered-marked": "Answered & marked",
};

function PaletteDot({ status, label, big }: { status: Status; label?: string; big?: boolean }) {
  return (
    <span
      className={clsx(
        "relative grid place-items-center font-bold",
        big ? "h-10 w-full text-sm" : "h-6 w-6 text-[10px]",
        status === "unvisited" && "rounded-lg border border-line bg-surface-2 text-muted",
        status === "unanswered" && "rounded-b-xl rounded-t-md bg-bad text-white",
        status === "answered" && "rounded-t-xl rounded-b-md bg-good text-black",
        status === "marked" && "rounded-full bg-violet-500 text-white",
        status === "answered-marked" && "rounded-full bg-violet-500 text-white",
      )}
    >
      {label}
      {status === "answered-marked" && <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-good" />}
    </span>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-surface-2 p-3">
      <div className="text-xs text-muted">{label}</div>
      <div className="font-display text-xl font-bold">{value}</div>
    </div>
  );
}
