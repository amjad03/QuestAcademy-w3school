"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Bookmark, Check, ChevronLeft, ChevronRight, Clock, Delete, Eraser, Flag, Info as InfoIcon, LayoutGrid, Lock, X } from "lucide-react";
import clsx from "clsx";
import type { ExamQuestion, ExamSubject } from "@/content/types";
import { Md, MdInline } from "@/components/Md";
import { useLearner, type MockResult } from "@/lib/store";
import {
  SUBJECT_META,
  assembleMock,
  blockMinutes,
  chapterKey,
  gradeOf,
  isAttempted,
  markingFor,
  mockMaxMarks,
  mockQuestionCount,
  mockSubjects,
  scoreQuestion,
  type MockAnswer,
  type MockScope,
  type MockSection,
  type MockTest,
  type SectionFill,
} from "@/lib/exam";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";
import { MockReport } from "./MockReport";
import { SUBJECT_ICON, mockVisual } from "./icons";
import { sectionMarkings, signed, useExamNames, useKindNames, useMarkingText, useSubjectNames, useTxt } from "./labels";

type Status = "unvisited" | "unanswered" | "answered" | "marked" | "answered-marked";

interface Session {
  v: 2;
  testId: string;
  ids: string[];
  /** Section id per question (parallel to ids). */
  sec: string[];
  answers: Record<string, MockAnswer>;
  marked: string[];
  visited: string[];
  startedAt: number;
  current: number;
  /** Seconds spent per question. */
  times: Record<string, number>;
  /** When the current question was opened. */
  enteredAt: number;
  scope: MockScope;
  strict: boolean;
  fill: SectionFill[];
  /** Sectional timing (KCET): current subject block, when it started, seconds used by finished blocks. */
  block: number;
  blockStartedAt: number;
  spent: number;
}

const KEY = (id: string) => `qa-cbt:${id}`;
const STATUSES: Status[] = ["answered", "unanswered", "unvisited", "marked", "answered-marked"];

/** Numeric drafts that are a complete number ("-", "." and "" are not). */
const parseNumeric = (s: string): number | null => (/^-?(\d+\.?\d*|\.\d+)$/.test(s) ? Number(s) : null);

const scopeName = (s: MockScope) => (s.kind === "chapters" ? "chapters" : s.kind);

export function CbtExam({ test, pool, formulaChapters = [] }: { test: MockTest; pool: ExamQuestion[]; formulaChapters?: string[] }) {
  const hydrated = useHydrated();
  const t = useT();
  const tx = useTxt();
  const subjectName = useSubjectNames();
  const examName = useExamNames();
  const kindName = useKindNames();
  const markingText = useMarkingText();
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
  const [confirm, setConfirm] = useState<null | "submit" | "block">(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [notice, setNotice] = useState<string | null>(null);
  const [scope, setScope] = useState<MockScope>({ kind: "all" });
  // A Class 11 student hasn't met Class 12 chapters yet: start them on Class 11 questions (they can still pick the full syllabus).
  const grade = useLearner((s) => s.profile.grade);
  useEffect(() => {
    if (grade === "11" || grade === "PUC-1") setScope((sc) => (sc.kind === "all" ? { kind: "11" } : sc));
  }, [grade]);
  const [strict, setStrict] = useState(false);

  const byId = useMemo(() => new Map(pool.map((q) => [q.id, q])), [pool]);
  const secById = useMemo(() => new Map(test.sections.map((s) => [s.id, s])), [test.sections]);
  const blocks = useMemo(() => mockSubjects(test), [test]);
  const sectional = test.timing.mode === "sectional";
  const blockLen = blockMinutes(test) * 60;

  // Resume an in-progress attempt (refresh-safe).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY(test.id));
      if (!raw) return;
      const s = JSON.parse(raw) as Session;
      if (s.v !== 2 || !s.ids.every((id) => byId.has(id))) {
        localStorage.removeItem(KEY(test.id));
        return;
      }
      setSession(s);
      setScope(s.scope);
      setStrict(s.strict);
      // Time ran out while the tab was closed: open the attempt so the timer moves on / submits, as at 00:00.
      const over = sectional ? Date.now() - s.blockStartedAt >= blockLen * 1000 : Date.now() - s.startedAt >= test.minutes * 60_000;
      if (over) setPhase("test");
    } catch {
      /* ignore */
    }
  }, [test.id, test.minutes, byId, sectional, blockLen]);

  useEffect(() => {
    if (!session || phase !== "test") return;
    try {
      localStorage.setItem(KEY(test.id), JSON.stringify(session));
    } catch {
      /* storage full or blocked: the attempt still runs in memory */
    }
  }, [session, phase, test.id]);

  useEffect(() => {
    if (phase !== "test") return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [phase]);

  const questions = useMemo(() => session?.ids.map((id) => byId.get(id)!) ?? [], [session?.ids, byId]); // eslint-disable-line react-hooks/exhaustive-deps
  const current = session ? questions[session.current] : undefined;
  const currentSection = session && current ? secById.get(session.sec[session.current]) : undefined;
  const remaining = !session
    ? (sectional ? blockLen : test.minutes * 60)
    : sectional
      ? Math.min(blockLen, Math.max(0, blockLen - Math.floor((now - session.blockStartedAt) / 1000)))
      : Math.max(0, test.minutes * 60 - Math.floor((now - session.startedAt) / 1000));
  const activeSubject: ExamSubject | undefined = sectional && session ? blocks[session.block] : current?.subject;

  useEffect(() => {
    if (current?.kind === "numeric") {
      const a = session?.answers[current.id];
      setDraft(typeof a === "number" ? String(a) : "");
    }
  }, [current?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  /* -------- availability for the chosen scope (intro) -------- */
  const preview = useMemo(() => assembleMock(test, pool, { scope, strictTags: strict, rnd: () => 0.5 }), [test, pool, scope, strict]);
  const wanted = mockQuestionCount(test);
  const available = preview.questions.length;
  const borrowed = preview.fill.reduce((a, f) => a + f.borrowed, 0);

  const chapterOptions = useMemo(() => {
    const subjects = new Set(test.sections.map((s) => s.subject));
    const kinds = new Set(test.sections.flatMap((s) => s.kinds));
    const m = new Map<string, { subject: ExamSubject; chapter: string; grade: string | null; n: number }>();
    for (const q of pool) {
      if (!subjects.has(q.subject) || !kinds.has(q.kind)) continue;
      const k = chapterKey(q);
      const e = m.get(k) ?? { subject: q.subject, chapter: q.chapter, grade: gradeOf(q), n: 0 };
      e.n++;
      m.set(k, e);
    }
    return [...m.entries()].sort((a, b) => (a[1].grade ?? "z").localeCompare(b[1].grade ?? "z") || a[1].chapter.localeCompare(b[1].chapter));
  }, [pool, test.sections]);

  const firstOfBlock = (qs: ExamQuestion[], subject: ExamSubject) => Math.max(0, qs.findIndex((q) => q.subject === subject));

  const start = (resume: boolean) => {
    if (!resume || !session) {
      const a = assembleMock(test, pool, { scope, strictTags: strict });
      if (!a.questions.length) return;
      const ts = Date.now();
      setSession({
        v: 2,
        testId: test.id,
        ids: a.questions.map((q) => q.id),
        sec: a.sectionOf,
        answers: {},
        marked: [],
        visited: [a.questions[0].id],
        startedAt: ts,
        current: 0,
        times: {},
        enteredAt: ts,
        scope,
        strict,
        fill: a.fill,
        block: 0,
        blockStartedAt: ts,
        spent: 0,
      });
    } else {
      setSession((s) => (s ? { ...s, enteredAt: Date.now() } : s));
    }
    setNow(Date.now());
    setPhase("test");
    document.documentElement.requestFullscreen?.().catch(() => {});
  };

  /** Time on the open question, added to its total. */
  const withTime = (s: Session, at = Date.now()): Session => {
    const id = s.ids[s.current];
    const add = Math.max(0, Math.min((at - s.enteredAt) / 1000, blockLen));
    return { ...s, times: { ...s.times, [id]: (s.times[id] ?? 0) + add }, enteredAt: at };
  };

  const submit = useCallback(() => {
    if (!session) return;
    const s = withTime(session);
    const bySubject: MockResult["bySubject"] = {};
    let score = 0;
    let max = 0;
    let correct = 0;
    let wrong = 0;
    let skipped = 0;
    let partial = 0;
    let negative = 0;
    questions.forEach((q, i) => {
      const sec = secById.get(s.sec[i])!;
      const m = markingFor(sec, q.kind);
      const r = scoreQuestion(q, s.answers[q.id], m);
      const b = (bySubject[q.subject] ??= { correct: 0, wrong: 0, skipped: 0, partial: 0, score: 0, max: 0 });
      b.max += m.correct;
      b.score += r.marks;
      if (r.status === "partial") b.partial = (b.partial ?? 0) + 1;
      else b[r.status] += 1;
      score += r.marks;
      max += m.correct;
      if (r.marks < 0) negative -= r.marks;
      if (r.status === "correct") correct++;
      else if (r.status === "wrong") wrong++;
      else if (r.status === "partial") partial++;
      else skipped++;
    });
    const seconds = sectional ? Math.round(s.spent + Math.min(blockLen, (Date.now() - s.blockStartedAt) / 1000)) : Math.min(test.minutes * 60, Math.round((Date.now() - s.startedAt) / 1000));
    const res: MockResult = {
      id: `${test.id}-${s.startedAt}`,
      testId: test.id,
      title: tx(test.title),
      date: new Date().toISOString(),
      score,
      max,
      correct,
      wrong,
      skipped,
      partial,
      negative,
      seconds,
      bySubject,
      answers: Object.fromEntries(questions.map((q) => [q.id, s.answers[q.id] ?? null])),
      times: Object.fromEntries(Object.entries(s.times).map(([k, v]) => [k, Math.round(v)])),
      sections: Object.fromEntries(questions.map((q, i) => [q.id, s.sec[i]])),
      scope: scopeName(s.scope),
    };
    recordMock(res);
    try {
      localStorage.removeItem(KEY(test.id));
    } catch {
      /* ignore */
    }
    setSession(s);
    setResult(res);
    setPhase("result");
    setConfirm(null);
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }, [session, questions, test, recordMock, secById, sectional, blockLen]); // eslint-disable-line react-hooks/exhaustive-deps

  /** Sectional timing: close this subject and open the next one (no going back). */
  const nextBlock = useCallback(
    (auto: boolean) => {
      setSession((s) => {
        if (!s) return s;
        const at = Date.now();
        const x = withTime(s, at);
        const used = Math.min(blockLen, (at - s.blockStartedAt) / 1000);
        // On a timeout the next block starts when this one ended (catches up after a closed tab).
        const startNext = auto ? s.blockStartedAt + blockLen * 1000 : at;
        const block = s.block + 1;
        const idx = firstOfBlock(questions, blocks[block]);
        const id = s.ids[idx];
        return { ...x, block, blockStartedAt: startNext, spent: s.spent + used, current: idx, enteredAt: at, visited: s.visited.includes(id) ? s.visited : [...s.visited, id] };
      });
      setConfirm(null);
      setPaletteOpen(false);
      if (auto) setNotice(t("exam.cbt.blockTimeUp", "Time is up for that subject — the next one has started."));
    },
    [questions, blocks, blockLen, t], // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(() => {
    if (phase !== "test" || !session || remaining > 0) return;
    if (sectional && session.block < blocks.length - 1) nextBlock(true);
    else submit();
  }, [phase, remaining, submit, nextBlock, sectional, session, blocks.length]);

  useEffect(() => {
    if (!notice) return;
    const id = setTimeout(() => setNotice(null), 6000);
    return () => clearTimeout(id);
  }, [notice]);

  const statusOf = (id: string): Status => {
    if (!session) return "unvisited";
    const answered = isAttempted(session.answers[id]);
    const marked = session.marked.includes(id);
    if (answered && marked) return "answered-marked";
    if (marked) return "marked";
    if (answered) return "answered";
    return session.visited.includes(id) ? "unanswered" : "unvisited";
  };

  const canOpen = (i: number) => !sectional || !session || questions[i]?.subject === blocks[session.block];

  const go = (i: number) => {
    if (!canOpen(i)) return;
    setSession((s) => {
      if (!s || i === s.current) return s;
      const x = withTime(s);
      return { ...x, current: i, visited: x.visited.includes(x.ids[i]) ? x.visited : [...x.visited, x.ids[i]] };
    });
  };

  const setAnswer = (val: MockAnswer) => setSession((s) => (s && current ? { ...s, answers: { ...s.answers, [current.id]: val } } : s));

  const editDraft = (v: string) => {
    const clean = v.replace(/[^0-9.\-]/g, "").replace(/(?!^)-/g, "").replace(/(\..*)\./g, "$1").slice(0, 12);
    setDraft(clean);
    setAnswer(parseNumeric(clean));
  };

  const toggleOption = (i: number) => {
    if (!current) return;
    if (current.kind === "mcq") setAnswer(i);
    else if (current.kind === "multi") {
      const a = session?.answers[current.id];
      const list = Array.isArray(a) ? a : [];
      setAnswer(list.includes(i) ? list.filter((x) => x !== i) : [...list, i].sort((x, y) => x - y));
    }
  };

  const lastInBlock = (() => {
    if (!session) return false;
    if (!sectional) return session.current === questions.length - 1;
    const sub = blocks[session.block];
    return !questions.slice(session.current + 1).some((q) => q.subject === sub);
  })();

  const saveNext = (mark = false) => {
    if (!session || !current) return;
    setSession((s) => {
      if (!s) return s;
      const marked = mark ? Array.from(new Set([...s.marked, current.id])) : s.marked.filter((x) => x !== current.id);
      const x = withTime({ ...s, marked });
      const nextI = lastInBlock ? s.current : Math.min(s.ids.length - 1, s.current + 1);
      return { ...x, current: nextI, visited: x.visited.includes(x.ids[nextI]) ? x.visited : [...x.visited, x.ids[nextI]] };
    });
  };

  // Keyboard: 1–9 or A–D pick / toggle options (not while typing in an input).
  useEffect(() => {
    if (phase !== "test" || !current || (current.kind !== "mcq" && current.kind !== "multi") || confirm) return;
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      const n = /^[1-9]$/.test(k) ? Number(k) - 1 : /^[a-h]$/.test(k) ? k.charCodeAt(0) - 97 : -1;
      if (n >= 0 && n < current.options.length) {
        e.preventDefault();
        toggleOption(n);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  const countsFor = (pred: (q: ExamQuestion, i: number) => boolean) => {
    const c: Record<Status, number> = { unvisited: 0, unanswered: 0, answered: 0, marked: 0, "answered-marked": 0 };
    questions.forEach((q, i) => pred(q, i) && c[statusOf(q.id)]++);
    return c;
  };

  if (!hydrated) return <div className="min-h-screen bg-bg" />;

  const { icon: TestIcon, color } = mockVisual(test);
  const sectionTitle = (sec: MockSection) => (sec.label ? `${subjectName[sec.subject]} · ${tx(sec.label)}` : subjectName[sec.subject]);

  /* ---------------- INTRO ---------------- */
  if (phase === "intro") {
    const total = wanted;
    const short = available < total;
    const scopes: { id: MockScope["kind"]; label: string }[] = [
      { id: "all", label: t("exam.scope.all", "Full syllabus") },
      { id: "12", label: t("exam.scope.12", "Class 12 only") },
      { id: "11", label: t("exam.scope.11", "Class 11 only") },
      { id: "chapters", label: t("exam.scope.chapters", "Chosen chapters") },
    ];
    const chosen = scope.kind === "chapters" ? scope.chapters : [];
    const toggleChapter = (k: string) => setScope({ kind: "chapters", chapters: chosen.includes(k) ? chosen.filter((x) => x !== k) : [...chosen, k] });
    return (
      <div className="min-h-screen bg-bg text-ink">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-5">
          <Link href="/exam/mock" className="flex items-center gap-1 text-sm font-extrabold uppercase tracking-wide text-muted hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> {t("exam.cbt.allMocks", "All mock tests")}
          </Link>
          <div className="mt-8 flex items-center gap-4 sm:gap-5">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white sm:h-16 sm:w-16" style={{ background: color }}>
              <TestIcon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{t("exam.cbt.eyebrow", "Mock test · {exam}", { exam: test.exam === "Mixed" ? "NEET · JEE" : examName[test.exam] })}</p>
              <h1 className="mt-1 text-2xl font-black sm:text-3xl">{tx(test.title)}</h1>
              <p className="mt-1 font-semibold text-muted">{tx(test.blurb)}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            <Info label={t("exam.cbt.info.questions", "Questions")} value={String(total)} />
            <Info label={t("exam.cbt.info.duration", "Duration")} value={t("exam.cbt.minutes", "{n} min", { n: test.minutes })} />
            <Info label={t("exam.cbt.info.maxMarks", "Max marks")} value={String(mockMaxMarks(test))} />
          </div>
          {test.pair && (
            <p className="mt-3 text-sm font-semibold text-muted">
              {test.kind === "half" ? t("exam.cbt.pairFull", "Have three hours?") : t("exam.cbt.pairHalf", "Short on time?")}{" "}
              <Link href={`/exam/mock/${test.pair}`} className="font-extrabold text-accent hover:underline">
                {test.kind === "half" ? t("exam.cbt.pairFullLink", "Take the full-length paper") : t("exam.cbt.pairHalfLink", "Take the half-length version")}
              </Link>
            </p>
          )}

          {/* marking scheme */}
          <section className="card mt-6 p-5 sm:p-6" aria-labelledby="scheme-title">
            <h2 id="scheme-title" className="text-lg font-black">
              {t("exam.cbt.scheme", "Pattern and marking scheme")}
            </h2>
            <p className="mt-1 text-xs font-semibold text-muted">{t("exam.cbt.schemeNote", "Based on recent papers — the official pattern can change from year to year.")}</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-line text-xs font-extrabold uppercase tracking-wide text-muted">
                    <th className="py-2 pr-3">{t("exam.cbt.col.section", "Section")}</th>
                    <th className="py-2 pr-3">{t("exam.cbt.col.type", "Type")}</th>
                    <th className="py-2 pr-3 text-right">{t("exam.cbt.col.questions", "Qs")}</th>
                    <th className="py-2">{t("exam.cbt.col.marking", "Marking")}</th>
                  </tr>
                </thead>
                <tbody>
                  {test.sections.map((sec) => {
                    const f = preview.fill.find((x) => x.section === sec.id);
                    return (
                      <tr key={sec.id} className="border-b border-line align-top last:border-0">
                        <td className="py-2.5 pr-3 font-extrabold">{sectionTitle(sec)}</td>
                        <td className="py-2.5 pr-3 font-semibold text-muted">{sec.kinds.map((k) => kindName[k]).join(" / ")}</td>
                        <td className="py-2.5 pr-3 text-right font-mono font-black">
                          {f && f.got < sec.count ? (
                            <span className="text-warn-shade" title={t("exam.cbt.availableTitle", "{got} of {n} available", { got: f.got, n: sec.count })}>
                              {f.got}/{sec.count}
                            </span>
                          ) : (
                            sec.count
                          )}
                        </td>
                        <td className="py-2.5 font-semibold">
                          {sectionMarkings(sec).map((m, i) => (
                            <span key={i} className="block">
                              {sec.kinds.length > 1 && m.kinds.length < sec.kinds.length && <b>{m.kinds.map((k) => kindName[k]).join(" / ")}: </b>}
                              {markingText(m.marking)}
                            </span>
                          ))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {sectional && (
              <p className="mt-4 flex gap-2 rounded-xl bg-surface-2 p-3 text-sm font-semibold">
                <Info2 />
                {t("exam.cbt.sectionalNote", "Each subject is timed separately ({n} min), one after another, as in the real exam. When a subject’s time ends — or you finish it early — the next one opens and you can’t go back.", { n: blockMinutes(test) })}
              </p>
            )}
          </section>

          {/* scope */}
          <section className="card mt-4 p-5 sm:p-6" aria-labelledby="scope-title">
            <h2 id="scope-title" className="text-lg font-black">
              {t("exam.cbt.scope", "What to include")}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-labelledby="scope-title">
              {scopes.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="radio"
                  aria-checked={scope.kind === s.id}
                  onClick={() => setScope(s.id === "chapters" ? { kind: "chapters", chapters: chosen } : ({ kind: s.id } as MockScope))}
                  className={clsx("rounded-xl border-2 border-b-4 px-3.5 py-2 text-sm font-extrabold transition", scope.kind === s.id ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2")}
                >
                  {s.label}
                </button>
              ))}
            </div>
            {scope.kind === "chapters" && (
              <div className="mt-4 space-y-4">
                {blocks.map((sub) => {
                  const list = chapterOptions.filter(([, c]) => c.subject === sub);
                  if (!list.length) return null;
                  const I = SUBJECT_ICON[sub];
                  return (
                    <fieldset key={sub}>
                      <legend className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-muted">
                        <I className="h-4 w-4" style={{ color: SUBJECT_META[sub].color }} /> {subjectName[sub]}
                      </legend>
                      <div className="flex flex-wrap gap-1.5">
                        {list.map(([k, c]) => {
                          const on = chosen.includes(k);
                          return (
                            <button key={k} type="button" role="checkbox" aria-checked={on} onClick={() => toggleChapter(k)} className={clsx("flex items-center gap-1.5 rounded-lg border-2 px-2 py-1 text-xs font-bold transition", on ? "border-accent bg-accent text-white" : "border-line text-muted hover:bg-surface-2 hover:text-ink")}>
                              {on && <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden />}
                              {c.chapter}
                              <span className={clsx("font-mono", on ? "text-white/80" : "text-muted")}>
                                {c.grade ? `· ${c.grade}` : ""} · {c.n}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  );
                })}
                {!chapterOptions.length && <p className="text-sm font-semibold text-muted">{t("exam.cbt.noChapters", "No chapters available yet.")}</p>}
              </div>
            )}
            {test.exam !== "Mixed" && (
              <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm font-semibold">
                <input type="checkbox" checked={strict} onChange={(e) => setStrict(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[rgb(var(--accent))]" />
                <span>
                  {t("exam.cbt.strict", "Only questions tagged for {exam}", { exam: examName[test.exam] })}
                  <span className="block text-xs text-muted">{t("exam.cbt.strictHint", "Off: gaps are filled from similar exams’ banks (e.g. JEE Main questions in a KCET paper).")}</span>
                </span>
              </label>
            )}
            <div className={clsx("mt-4 flex gap-2 rounded-xl p-3 text-sm font-semibold", short ? "bg-warn/15 text-ink" : "bg-good-soft")} role="status">
              {short ? <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warn-shade" /> : <Check className="mt-0.5 h-4 w-4 shrink-0 text-good" strokeWidth={3} />}
              <span>
                {short
                  ? available === 0
                    ? t("exam.cbt.noneAvailable", "No questions match this scope yet. Try a wider scope.")
                    : t("exam.cbt.shortNote", "{got} of {n} questions available for this scope — the test runs with what we have (max marks adjust to match). More questions are being added.", { got: available, n: total })
                  : t("exam.cbt.fullNote", "All {n} questions available.", { n: total })}
                {borrowed > 0 && <span className="block text-xs text-muted">{t("exam.cbt.borrowedNote", "{n} of them come from similar exams’ banks.", { n: borrowed })}</span>}
              </span>
            </div>
          </section>

          <div className="card mt-4 p-5 sm:p-6">
            <h2 className="text-lg font-black">{t("exam.cbt.instructions", "Instructions")}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-semibold leading-7 text-muted">
              <li>{t("exam.cbt.rule.palette", "Use the palette to jump between questions. “Mark for review” flags a question to revisit — marked answers are still evaluated.")}</li>
              <li>{t("exam.cbt.rule.numeric", "Numerical answers: type the value or use the on-screen keypad. Single-correct: pick one option. One-or-more-correct: tick every option you think is right. Keys 1–4 or A–D choose options.")}</li>
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
                  disabled={available === 0}
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
              <button className="btn-primary sm:min-w-[240px]" disabled={available === 0} onClick={() => start(false)}>
                {short && available > 0 ? t("exam.cbt.beginShort", "Begin with {n} questions", { n: available }) : t("exam.cbt.begin", "Begin test")}
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
        formulaChapters={formulaChapters}
        onRetry={() => {
          setResult(null);
          setSession(null);
          setPhase("intro");
        }}
      />
    );
  }

  if (!session || !current || !currentSection) return null;

  /* ---------------- TEST ---------------- */
  const low = remaining < 300;
  const ans = session.answers[current.id];
  const subjSections = test.sections.filter((s) => s.subject === current.subject && session.sec.includes(s.id));
  const marking = markingFor(currentSection, current.kind);
  const counts = countsFor((q) => q.subject === current.subject);
  const allCounts = countsFor(() => true);
  const blockIdx = session.block;
  const fmtTime = (sec: number) => `${String(Math.floor(sec / 3600)).padStart(2, "0")}:${String(Math.floor((sec % 3600) / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;

  const palette = (
    <div className="flex h-full flex-col">
      <div className="grid grid-cols-2 gap-2.5 border-b-2 border-line p-4 pr-12 text-xs lg:pr-4">
        {STATUSES.map((st) => (
          <span key={st} className="flex items-center gap-2 font-bold text-muted">
            <PaletteDot status={st} label={String(counts[st])} /> {LEGEND[st]}
          </span>
        ))}
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto p-4">
        {subjSections.map((sec) => (
          <div key={sec.id}>
            <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-muted">
              {(() => {
                const I = SUBJECT_ICON[sec.subject];
                return <I className="h-4 w-4 shrink-0" style={{ color: SUBJECT_META[sec.subject].color }} />;
              })()}
              <span className="min-w-0 truncate">{sectionTitle(sec)}</span>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {questions.map((q, i) =>
                session.sec[i] !== sec.id ? null : (
                  <button
                    key={q.id}
                    onClick={() => {
                      go(i);
                      setPaletteOpen(false);
                    }}
                    className={clsx("rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent", i === session.current && "ring-2 ring-ink ring-offset-2 ring-offset-surface")}
                    aria-label={t("exam.cbt.paletteItem", "Question {n}: {status}", { n: i + 1, status: LEGEND[statusOf(q.id)] })}
                    aria-current={i === session.current ? "true" : undefined}
                  >
                    <PaletteDot status={statusOf(q.id)} label={String(i + 1)} big />
                  </button>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-2 border-t-2 border-line p-4">
        {sectional && blockIdx < blocks.length - 1 && (
          <button className="btn-ghost w-full" onClick={() => setConfirm("block")}>
            {t("exam.cbt.finishBlock", "Finish {subject} & continue", { subject: subjectName[blocks[blockIdx]] })} <ChevronRight className="h-4 w-4" />
          </button>
        )}
        <button className="btn-good w-full" onClick={() => setConfirm("submit")}>
          <Flag className="h-4 w-4" /> {t("exam.cbt.submitTest", "Submit test")}
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-bg text-ink">
      {/* top bar */}
      <header className="flex items-center gap-2 border-b-2 border-line bg-surface px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
        <span className="hidden h-10 w-10 shrink-0 place-items-center rounded-xl text-white sm:grid" style={{ background: color }}>
          <TestIcon className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-black sm:text-base">{tx(test.title)}</div>
          <div className="truncate text-xs font-bold text-muted">
            {t("exam.cbt.progress", "Question {n} of {total}", { n: session.current + 1, total: questions.length })}
            {sectional && <> · {t("exam.cbt.blockOf", "Subject {n} of {total}", { n: blockIdx + 1, total: blocks.length })}</>}
          </div>
        </div>
        <div
          className={clsx("flex shrink-0 items-center gap-1.5 rounded-xl border-2 px-2.5 py-1.5 font-mono text-base font-black sm:gap-2 sm:px-3 sm:text-lg", low ? "animate-pulse border-bad bg-bad-soft text-bad" : "border-line bg-surface-2 text-ink")}
          role="timer"
          aria-label={sectional ? t("exam.cbt.timeRemainingSubject", "Time remaining for {subject}", { subject: subjectName[blocks[blockIdx]] }) : t("exam.cbt.timeRemaining", "Time remaining")}
        >
          <Clock className="h-4 w-4" aria-hidden />
          {fmtTime(remaining)}
        </div>
        <button className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-line lg:hidden" onClick={() => setPaletteOpen(true)} aria-label={t("exam.cbt.palette", "Question palette")}>
          <LayoutGrid className="h-5 w-5" />
        </button>
      </header>

      {/* subject tabs */}
      <div className="flex gap-1 overflow-x-auto border-b-2 border-line bg-surface px-2 sm:px-4" role="tablist" aria-label={t("exam.cbt.subjects", "Subjects")}>
        {blocks.map((sub, bi) => {
          const I = SUBJECT_ICON[sub];
          const active = activeSubject === sub && current.subject === sub;
          const locked = sectional && bi !== blockIdx;
          const done = sectional && bi < blockIdx;
          const c = countsFor((q) => q.subject === sub);
          const n = questions.filter((q) => q.subject === sub).length;
          if (!n) return null;
          return (
            <button
              key={sub}
              role="tab"
              aria-selected={active}
              aria-disabled={locked || undefined}
              disabled={locked}
              onClick={() => go(firstOfBlock(questions, sub))}
              className={clsx(
                "-mb-[2px] flex shrink-0 items-center gap-2 border-b-4 px-3 py-3 text-sm font-extrabold uppercase tracking-wide transition sm:px-4",
                active ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink",
                locked && "cursor-not-allowed opacity-60 hover:text-muted",
              )}
            >
              {done ? <Check className="h-4 w-4 text-good" strokeWidth={3} aria-hidden /> : locked ? <Lock className="h-4 w-4" aria-hidden /> : <I className="h-4 w-4" aria-hidden />} {subjectName[sub]}
              <span className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[11px] text-muted">
                {c.answered + c["answered-marked"]}/{n}
              </span>
            </button>
          );
        })}
      </div>

      {/* section strip + marking */}
      <div className="flex flex-col gap-1.5 border-b-2 border-line bg-surface-2 px-3 py-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 sm:px-4">
        {subjSections.length > 1 && (
          <div className="-mx-3 flex gap-2 overflow-x-auto px-3 sm:mx-0 sm:px-0">
          {subjSections.map((sec) => {
            const idx = session.sec.indexOf(sec.id);
            return (
              <button key={sec.id} onClick={() => go(idx)} aria-pressed={sec.id === currentSection.id} className={clsx("shrink-0 whitespace-nowrap rounded-lg border-2 px-2.5 py-1 text-xs font-extrabold transition", sec.id === currentSection.id ? "border-accent bg-accent text-white" : "border-line bg-surface text-muted hover:text-ink")}>
                {sec.label ? tx(sec.label) : subjectName[sec.subject]} · {sec.kinds.map((k) => kindName[k]).join(" / ")}
              </button>
            );
          })}
          </div>
        )}
        <span className="flex min-w-0 items-center gap-1.5 text-xs font-bold text-muted">
          <InfoIcon className="h-3.5 w-3.5 shrink-0" aria-hidden /> <span>{markingText(marking)}</span>
        </span>
      </div>

      {notice && (
        <div className="flex items-center gap-2 border-b-2 border-warn bg-warn/15 px-4 py-2 text-sm font-bold" role="status">
          <AlertTriangle className="h-4 w-4 shrink-0 text-warn-shade" /> {notice}
        </div>
      )}

      <div className="flex min-h-0 flex-1">
        {/* question */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto p-4 sm:p-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-ink px-2.5 py-1 text-sm font-black text-bg">Q{session.current + 1}</span>
                <span className="chip">{current.chapter}</span>
                <span className="chip">{kindName[current.kind]}</span>
                <span className="chip !bg-good-soft !text-good-shade">{signed(marking.correct)}</span>
                {marking.partial && <span className="chip !bg-accent-soft !text-accent">{t("exam.cbt.partialChip", "Partial marks")}</span>}
                <span className={clsx("chip", marking.wrong ? "!bg-bad-soft !text-bad-shade" : "")}>{marking.wrong ? signed(marking.wrong) : t("exam.cbt.noNegative", "No negative")}</span>
              </div>
              <div className="mt-6 text-lg font-bold leading-8 sm:text-xl sm:leading-9">
                <Md text={current.q} className="space-y-3" />
              </div>
              <div className="mt-7">
                {current.kind === "mcq" || current.kind === "multi" ? (
                  <div className="space-y-3" role={current.kind === "mcq" ? "radiogroup" : "group"} aria-label={current.kind === "multi" ? t("exam.cbt.multiHint", "One or more options may be correct") : t("exam.cbt.singleHint", "Choose one option")}>
                    {current.kind === "multi" && <p className="text-sm font-extrabold text-accent">{t("exam.cbt.multiHint", "One or more options may be correct")}</p>}
                    {current.options.map((o, i) => {
                      const on = current.kind === "mcq" ? ans === i : Array.isArray(ans) && ans.includes(i);
                      const multi = current.kind === "multi";
                      return (
                        <button
                          key={i}
                          role={multi ? "checkbox" : "radio"}
                          aria-checked={on}
                          onClick={() => toggleOption(i)}
                          className={clsx(
                            "flex w-full items-center gap-3 rounded-2xl border-2 border-b-4 p-3.5 text-left text-base font-bold transition active:translate-y-[2px] active:border-b-2 sm:gap-4 sm:p-4 sm:text-[17px]",
                            on ? "border-accent bg-accent-soft" : "border-line bg-surface hover:bg-surface-2",
                          )}
                        >
                          <span className={clsx("grid h-8 w-8 shrink-0 place-items-center border-2 text-sm font-black", multi ? "rounded-md" : "rounded-full", on ? "border-accent bg-accent text-white" : "border-line text-muted")}>
                            {multi && on ? <Check className="h-4 w-4" strokeWidth={3.5} aria-hidden /> : String.fromCharCode(65 + i)}
                          </span>
                          <span className="min-w-0 flex-1">
                            {multi && <span className="sr-only">{String.fromCharCode(65 + i)}. </span>}
                            <MdInline text={o} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <label className="eyebrow" htmlFor="num-answer">
                      {t("exam.cbt.numericLabel", "Enter your numerical answer")}
                      {current.unit && <span className="normal-case"> ({current.unit})</span>}
                    </label>
                    <input
                      id="num-answer"
                      value={draft}
                      onChange={(e) => editDraft(e.target.value)}
                      inputMode="decimal"
                      autoComplete="off"
                      className="input mt-2 max-w-xs py-4 font-mono text-2xl"
                      placeholder="0"
                      aria-describedby="num-hint"
                    />
                    <p id="num-hint" className="mt-2 text-xs font-semibold text-muted">
                      {draft && parseNumeric(draft) === null ? t("exam.cbt.numericIncomplete", "Not a complete number yet — it won’t be saved.") : t("exam.cbt.numericHint", "Type or use the keypad. Decimals and negatives allowed.")}
                    </p>
                    <Keypad
                      onKey={(k) => editDraft(k === "back" ? draft.slice(0, -1) : k === "clear" ? "" : k === "-" ? (draft.startsWith("-") ? draft.slice(1) : "-" + draft) : draft + k)}
                      labels={{ back: t("exam.cbt.keypad.back", "Backspace"), clear: t("exam.cbt.keypad.clear", "Clear all"), minus: t("exam.cbt.keypad.minus", "Plus or minus") }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* action bar */}
          <div className="flex flex-wrap items-center gap-2 border-t-2 border-line bg-surface px-3 py-3 sm:px-4">
            <button className="btn-ghost !px-3 sm:!px-4" onClick={() => go(Math.max(0, session.current - 1))} disabled={session.current === 0 || !canOpen(session.current - 1)} aria-label={t("exam.cbt.previousAria", "Previous question")}>
              <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">{t("exam.cbt.previous", "Previous")}</span>
            </button>
            <button
              className="btn-ghost !px-3 sm:!px-4"
              onClick={() => {
                setAnswer(null);
                setDraft("");
              }}
              aria-label={t("exam.cbt.clearAria", "Clear response")}
            >
              <Eraser className="h-4 w-4" /> <span className="hidden sm:inline">{t("exam.cbt.clear", "Clear")}</span>
            </button>
            <button className="btn-purple !px-3 sm:!px-4" onClick={() => saveNext(true)} aria-label={t("exam.cbt.markNextAria", "Mark for review and next")}>
              <Bookmark className="h-4 w-4" /> <span className="hidden sm:inline">{t("exam.cbt.markNext", "Mark & next")}</span>
            </button>
            <button
              className="btn-primary ml-auto"
              onClick={() => {
                if (!lastInBlock) return saveNext(false);
                saveNext(false);
                setConfirm(sectional && blockIdx < blocks.length - 1 ? "block" : "submit");
              }}
            >
              {lastInBlock ? (sectional && blockIdx < blocks.length - 1 ? t("exam.cbt.saveFinishSubject", "Save & finish subject") : t("exam.cbt.saveSubmit", "Save & submit")) : t("exam.cbt.saveNext", "Save & next")} <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </main>

        <aside className="hidden w-80 shrink-0 border-l-2 border-line bg-surface lg:block" aria-label={t("exam.cbt.palette", "Question palette")}>
          {palette}
        </aside>
      </div>

      {/* mobile palette */}
      <AnimatePresence>
        {paletteOpen && (
          <motion.div className="fixed inset-0 z-[60] bg-[rgb(11_17_33/0.5)] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPaletteOpen(false)}>
            <motion.div className="absolute inset-y-0 right-0 w-[88%] max-w-sm bg-surface" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={t("exam.cbt.palette", "Question palette")}>
              <button className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-xl hover:bg-surface-2" onClick={() => setPaletteOpen(false)} aria-label={t("exam.cbt.close", "Close")} autoFocus>
                <X className="h-5 w-5" />
              </button>
              {palette}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* submit / finish-subject confirm */}
      <AnimatePresence>
        {confirm && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-[rgb(11_17_33/0.5)] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onKeyDown={(e) => e.key === "Escape" && setConfirm(null)}
          >
            <motion.div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-surface p-5 sm:p-7" initial={{ scale: 0.92 }} animate={{ scale: 1 }} role="alertdialog" aria-modal="true" aria-labelledby="submit-title">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 shrink-0 text-warn-shade" />
                <h2 id="submit-title" className="text-xl font-black">
                  {confirm === "block" ? t("exam.cbt.confirm.blockTitle", "Finish {subject}?", { subject: subjectName[blocks[blockIdx]] }) : t("exam.cbt.confirm.title", "Submit your test?")}
                </h2>
              </div>
              {confirm === "block" && <p className="mt-2 text-sm font-semibold text-muted">{t("exam.cbt.confirm.blockBody", "{next} opens next with its own {n}-minute timer. You can’t come back to {subject}.", { next: subjectName[blocks[blockIdx + 1]] ?? "", n: blockMinutes(test), subject: subjectName[blocks[blockIdx]] })}</p>}
              <div className="mt-5 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-line text-left text-[11px] font-extrabold uppercase tracking-wide text-muted">
                      <th className="py-2 pr-2">{t("exam.cbt.col.section", "Section")}</th>
                      <th className="px-1 py-2 text-right">{LEGEND.answered}</th>
                      <th className="px-1 py-2 text-right">{LEGEND.unanswered}</th>
                      <th className="px-1 py-2 text-right">{LEGEND.marked}</th>
                      <th className="py-2 pl-1 text-right">{LEGEND.unvisited}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {test.sections
                      .filter((sec) => session.sec.includes(sec.id) && (confirm !== "block" || sec.subject === blocks[blockIdx]))
                      .map((sec) => {
                        const c = countsFor((_, i) => session.sec[i] === sec.id);
                        return (
                          <tr key={sec.id} className="border-b border-line last:border-0">
                            <td className="py-2 pr-2 font-bold">{sectionTitle(sec)}</td>
                            <td className="px-1 py-2 text-right font-mono font-black text-good-shade">{c.answered + c["answered-marked"]}</td>
                            <td className="px-1 py-2 text-right font-mono font-black text-bad-shade">{c.unanswered}</td>
                            <td className="px-1 py-2 text-right font-mono font-black text-accent-2">{c.marked + c["answered-marked"]}</td>
                            <td className="py-2 pl-1 text-right font-mono font-black text-muted">{c.unvisited}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm font-semibold text-muted">
                {t("exam.cbt.timeLeftLine", "Time left: {m}m {s}s", { m: Math.floor(remaining / 60), s: remaining % 60 })}
                {confirm === "submit" && sectional && blockIdx < blocks.length - 1 && <> · {t("exam.cbt.confirm.skipBlocks", "Subjects not yet opened will score 0.")}</>}
                {confirm === "submit" && !sectional && allCounts.unvisited > 0 && <> · {t("exam.cbt.confirm.unvisited", "{n} questions not visited.", { n: allCounts.unvisited })}</>}
              </p>
              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button className="btn-ghost" onClick={() => setConfirm(null)} autoFocus>
                  {t("exam.cbt.keepGoing", "Keep going")}
                </button>
                {confirm === "block" ? (
                  <button className="btn-primary" onClick={() => nextBlock(false)}>
                    {t("exam.cbt.confirm.blockGo", "Finish & open {next}", { next: subjectName[blocks[blockIdx + 1]] ?? "" })}
                  </button>
                ) : (
                  <button className="btn-good" onClick={submit}>
                    {t("exam.cbt.submit", "Submit")}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** NTA-style virtual keypad for numerical answers. */
function Keypad({ onKey, labels }: { onKey: (k: string) => void; labels: { back: string; clear: string; minus: string } }) {
  const keys = ["7", "8", "9", "back", "4", "5", "6", "clear", "1", "2", "3", "-", "0", ".", "", ""];
  return (
    <div className="mt-4 grid max-w-[280px] grid-cols-4 gap-2">
      {keys.map((k, i) =>
        k === "" ? (
          <span key={i} />
        ) : (
          <button
            key={k}
            type="button"
            onClick={() => onKey(k)}
            aria-label={k === "back" ? labels.back : k === "clear" ? labels.clear : k === "-" ? labels.minus : k}
            className={clsx(
              "grid h-12 place-items-center rounded-xl border-2 border-b-4 font-mono text-lg font-black transition active:translate-y-[2px] active:border-b-2",
              k === "back" || k === "clear" ? "border-line bg-surface-2 text-muted" : "border-line bg-surface hover:bg-surface-2",
              k === "0" && "col-span-2",
            )}
          >
            {k === "back" ? <Delete className="h-5 w-5" aria-hidden /> : k === "clear" ? "C" : k === "-" ? "±" : k}
          </button>
        ),
      )}
    </div>
  );
}

function Info2() {
  return <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />;
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
    <div className="rounded-2xl border-2 border-line bg-surface p-3 sm:p-3.5">
      <div className="text-[11px] font-extrabold uppercase tracking-wide text-muted sm:text-xs">{label}</div>
      <div className="mt-0.5 text-lg font-black sm:text-xl">{value}</div>
    </div>
  );
}
