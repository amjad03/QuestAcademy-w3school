"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock, Flag, Flame, Target, X, Zap } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import type { Question, WorldId } from "@/content/types";
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import { MASTERY, type MasteryLevel } from "@/lib/mastery";
import { sfx, speak, stopSpeaking } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { plain, Md, MdInline } from "@/components/Md";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { useHydrated } from "@/components/providers";
import { useMode } from "@/lib/useMode";
import { say } from "@/lib/voice";
import { dayKey } from "@/lib/gamification";
import { awardExploreSticker } from "@/components/modes/explore/stickers";
import { ENCOURAGE, EXPLORE_LINES, PRAISE as VOICE_PRAISE } from "@/content/voice-lines";
import { QuestionInput, correctAnswerText, emptyAnswer, gradeAnswer, isAnswered, type Answer } from "@/components/learn/QuestionCard";

export interface SessionPayload {
  kind: "practice" | "quiz" | "test" | "challenge";
  key: string;
  title: string;
  count: number;
  pool: { lessonId: string; question: Question }[];
  exitHref: string;
  course: { slug: string; title: string };
  world: WorldId;
  lessons: { id: string; title: string }[];
}

type Item = { uid: string; lessonId: string; question: Question; retry?: boolean };

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

/** Spread picks across lessons: round-robin over shuffled per-lesson pools. */
function sample(pool: SessionPayload["pool"], count: number): Item[] {
  const by = new Map<string, SessionPayload["pool"]>();
  for (const p of shuffle(pool)) by.set(p.lessonId, [...(by.get(p.lessonId) ?? []), p]);
  const lists = shuffle([...by.values()]);
  const out: Item[] = [];
  let k = 0;
  while (out.length < count && lists.some((l) => l.length)) {
    const l = lists[k++ % lists.length];
    const p = l.shift();
    if (p) out.push({ uid: `${p.lessonId}#${out.length}`, lessonId: p.lessonId, question: p.question });
  }
  return out;
}

const PRAISE = ["Nice!", "Great job!", "Correct!", "Excellent!", "You got it!", "Amazing!"];

export function Session(p: SessionPayload) {
  const hydrated = useHydrated();
  const router = useRouter();
  const setFocusMode = useUi((s) => s.setFocusMode);
  const mastery = useLearner((s) => s.mastery);
  const recordAnswer = useLearner((s) => s.recordAnswer);
  const recordQuiz = useLearner((s) => s.recordQuiz);
  const applyPractice = useLearner((s) => s.applyPractice);
  const applyAssessment = useLearner((s) => s.applyAssessment);
  const markItem = useLearner((s) => s.markItem);

  const [queue, setQueue] = useState<Item[]>([]);
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [first, setFirst] = useState<Record<string, boolean>>({});
  const [combo, setCombo] = useState(0);
  const [done, setDone] = useState(false);
  const [quit, setQuit] = useState(false);
  const [before, setBefore] = useState<Record<string, MasteryLevel>>({});
  const [startedAt] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [xpEarned, setXpEarned] = useState(0);
  const mode = useMode();
  const explore = mode.id === "explore";
  const kids = p.world === "kids" || explore;
  const calm = mode.rewards === "subtle" || mode.rewards === "minimal";
  const assessment = p.kind !== "practice";

  // Build the question queue on the client (randomised per attempt).
  useEffect(() => {
    const q = p.kind === "practice" ? sample(p.pool, p.pool.length) : sample(p.pool, p.count);
    setQueue(q);
    setAnswer(q[0] ? emptyAnswer(q[0].question) : null);
    setBefore(Object.fromEntries(p.lessons.map((l) => [l.id, useLearner.getState().mastery[l.id] ?? 0])) as Record<string, MasteryLevel>);
  }, [p]);

  useEffect(() => {
    setFocusMode(true);
    return () => {
      setFocusMode(false);
      stopSpeaking();
    };
  }, [setFocusMode]);

  const current = queue[idx];
  const total = queue.filter((q) => !q.retry).length;

  useEffect(() => {
    if ((kids || mode.autoVoice) && current) speak(plain(current.question.q), { rate: 0.92, pitch: 1.15 });
  }, [kids, current]);

  const check = useCallback(() => {
    if (!current || !answer || result !== null || !isAnswered(current.question, answer)) return;
    const ok = gradeAnswer(current.question, answer);
    setResult(ok);
    sfx(ok ? "correct" : "wrong");
    // Explore: Questy praises every answer and encourages after a miss.
    if (explore) say(ok ? VOICE_PRAISE[idx % VOICE_PRAISE.length] : ENCOURAGE[idx % ENCOURAGE.length]);
    setCombo((c) => (ok ? c + 1 : 0));
    if (!current.retry) {
      setFirst((f) => ({ ...f, [current.uid]: ok }));
      recordAnswer(ok);
    }
    // Practice: missed questions come back at the end (once).
    if (!ok && !assessment && !current.retry) setQueue((q) => [...q, { ...current, uid: current.uid + ":r", retry: true }]);
  }, [current, answer, result, assessment, recordAnswer]);

  const finish = useCallback(() => {
    const answers = queue.filter((q) => !q.retry).map((q) => ({ lessonId: q.lessonId, ok: Boolean(first[q.uid]) }));
    const correct = answers.filter((a) => a.ok).length;
    const xpBefore = useLearner.getState().xp;
    const bestBefore = useLearner.getState().assessments[p.key];
    recordQuiz(correct, answers.length);
    if (assessment) applyAssessment(p.key, p.kind as "quiz" | "test" | "challenge", answers);
    else {
      applyPractice(p.key, correct, answers.length);
      if (correct / Math.max(1, answers.length) >= 0.7) markItem(`${p.key}:practice`);
    }
    setXpEarned(useLearner.getState().xp - xpBefore);
    setElapsed(Math.round((Date.now() - startedAt) / 1000));
    setDone(true);
    setFocusMode(false);
    sfx("fanfare");
    if (mode.confetti && (explore || correct / Math.max(1, answers.length) >= 0.8)) burst({ big: true });
    if (explore) {
      // Stickers reward effort: improving, sticking with it after mistakes, finishing.
      const bestAfter = useLearner.getState().assessments[p.key];
      const sticker =
        (bestBefore !== undefined && bestAfter !== undefined && bestAfter > bestBefore && awardExploreSticker("improved", `${p.key}:${bestAfter}`, { silent: true })) ||
        (correct < answers.length && awardExploreSticker("brave-try", `${p.key}:${dayKey()}`, { silent: true })) ||
        awardExploreSticker("lesson-complete", p.key, { silent: true });
      if (sticker) useUi.getState().toast({ text: `New sticker: ${sticker.name}!` });
      say(sticker ? EXPLORE_LINES.lessonDone : VOICE_PRAISE[correct % VOICE_PRAISE.length]);
    }
  }, [queue, first, recordQuiz, assessment, applyAssessment, applyPractice, markItem, p.key, p.kind, startedAt, setFocusMode]);

  const next = useCallback(() => {
    if (result === null) return;
    if (idx + 1 >= queue.length) return finish();
    const n = idx + 1;
    setIdx(n);
    setAnswer(emptyAnswer(queue[n].question));
    setResult(null);
  }, [result, idx, queue, finish]);

  const skip = () => {
    if (!current || result !== null) return;
    setResult(false);
    sfx("wrong");
    setCombo(0);
    if (!current.retry) {
      setFirst((f) => ({ ...f, [current.uid]: false }));
      recordAnswer(false);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || done || quit) return;
      if ((e.target as HTMLElement).tagName === "BUTTON") return;
      e.preventDefault();
      if (result === null) check();
      else next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [result, check, next, done, quit]);

  const progress = useMemo(() => (queue.length ? (idx + (result !== null ? 1 : 0)) / queue.length : 0), [idx, result, queue.length]);
  const correctFirst = Object.values(first).filter(Boolean).length;

  if (!hydrated || !queue.length || !answer) return <div className="min-h-screen bg-bg" />;

  /* ---------------- RESULTS ---------------- */
  if (done) {
    const acc = total ? correctFirst / total : 0;
    const changes = p.lessons.map((l) => ({ ...l, from: before[l.id] ?? 0, to: (mastery[l.id] ?? 0) as MasteryLevel })).filter((c) => c.from !== c.to);
    const missed = queue.filter((q) => !q.retry && !first[q.uid]);
    return (
      <div className="flex min-h-screen flex-col bg-bg">
        <div className="mx-auto flex w-full max-w-[640px] flex-1 flex-col items-center px-5 py-12 text-center">
          <Mascot pose={acc >= 0.7 ? "cheer" : "think"} size={150} />
          <h1 className="mt-6 text-3xl font-black text-warn-shade">
            {explore
              ? acc === 1
                ? "Wow, all correct!"
                : acc >= 0.5
                  ? "Great job! You’re learning!"
                  : "You tried so hard — well done!"
              : acc === 1
                ? "Perfect!"
                : acc >= 0.7
                  ? `${p.kind === "practice" ? "Practice" : p.kind === "test" ? "Unit test" : p.kind === "quiz" ? "Quiz" : "Challenge"} complete!`
                  : "Good effort — keep going!"}
          </h1>
          <p className="mt-2 font-semibold text-muted">{p.title}</p>

          <div className="mt-8 grid w-full grid-cols-3 gap-3">
            <ResultStat label="Total XP" value={`${xpEarned}`} color="#FFB800" icon={<Zap className="h-5 w-5 fill-current" />} />
            <ResultStat label={acc >= 0.9 ? "Amazing" : acc >= 0.7 ? "Good" : "Accuracy"} value={`${Math.round(acc * 100)}%`} color="#2EBE70" icon={<Target className="h-5 w-5" />} />
            <ResultStat label="Time" value={`${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}`} color="#2F6BFF" icon={<Clock className="h-5 w-5" />} />
          </div>

          {changes.length > 0 && (
            <div className="card mt-6 w-full p-5 text-left">
              <p className="eyebrow">Skills updated</p>
              <ul className="mt-3 space-y-2.5">
                {changes.map((c) => (
                  <li key={c.id} className="flex items-center gap-3">
                    <span className="min-w-0 flex-1 truncate font-bold">{c.title}</span>
                    <LevelPill level={c.from} />
                    <span className="text-muted">→</span>
                    <LevelPill level={c.to} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {missed.length > 0 && (
            <details className="card mt-4 w-full p-5 text-left">
              <summary className="cursor-pointer font-extrabold text-accent">Review {missed.length} mistake{missed.length === 1 ? "" : "s"}</summary>
              <ul className="mt-4 space-y-4">
                {missed.map((m) => (
                  <li key={m.uid} className="border-t-2 border-line pt-4">
                    <Md text={m.question.q} className="space-y-2 font-bold" />
                    <p className="mt-1 text-sm font-bold text-good-shade">
                      Answer: <MdInline text={correctAnswerText(m.question)} />
                    </p>
                    {m.question.explain && <Md text={m.question.explain} className="prose-quest mt-1 space-y-1 !text-sm !leading-6 text-muted" />}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
        <div className="border-t-2 border-line">
          <div className="mx-auto flex w-full max-w-[1000px] flex-col-reverse gap-3 px-5 py-5 sm:flex-row sm:justify-between">
            <button onClick={() => window.location.reload()} className="btn-ghost">
              Try again
            </button>
            <Link href={p.exitHref} className="btn-primary sm:min-w-[160px]">
              Continue
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- QUESTION ---------------- */
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="mx-auto flex w-full max-w-[1000px] items-center gap-4 px-5 pt-6">
        <button onClick={() => setQuit(true)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label="Quit session">
          <X className="h-7 w-7" strokeWidth={2.6} />
        </button>
        <ProgressBar value={progress} height={16} color="rgb(var(--good))" label="Session progress" />
        <span className={clsx("flex shrink-0 items-center gap-1 text-lg font-black transition", combo >= 2 && !calm ? "text-streak" : "text-transparent")} aria-hidden={combo < 2 || calm}>
          <Flame className="h-6 w-6 fill-current" /> {combo}
        </span>
      </div>

      <div className="mx-auto w-full max-w-[640px] flex-1 px-5 pb-10 pt-8">
        <AnimatePresence>
          {combo >= 3 && result === true && (
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-3 text-sm font-black uppercase tracking-wide text-streak">
              {combo} in a row!
            </motion.p>
          )}
        </AnimatePresence>
        {current.retry && <p className="mb-3 text-sm font-black uppercase tracking-wide text-bad">Previous mistake</p>}
        <AnimatePresence mode="wait">
          <motion.div key={current.uid} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.18 }}>
            <QuestionInput question={current.question} answer={answer} onChange={setAnswer} result={result} big={kids} onSubmit={check} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* footer */}
      <div className={clsx("border-t-2 transition-colors", result === null ? "border-line bg-bg" : result ? "border-transparent bg-good-soft" : "border-transparent bg-bad-soft")}>
        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          {result === null ? (
            <>
              <button onClick={skip} className="btn-ghost hidden sm:inline-flex">
                Skip
              </button>
              <button onClick={check} disabled={!isAnswered(current.question, answer)} className="btn-good w-full sm:w-auto sm:min-w-[160px]">
                Check
              </button>
            </>
          ) : (
            <>
              <div className="flex min-w-0 items-start gap-4">
                <span className={clsx("hidden h-16 w-16 shrink-0 place-items-center rounded-full bg-surface sm:grid", result ? "text-good" : "text-bad")}>
                  {result ? <Check className="h-9 w-9" strokeWidth={4} /> : <X className="h-9 w-9" strokeWidth={4} />}
                </span>
                <div className="min-w-0">
                  <p className={clsx("text-2xl font-black", result ? "text-good-shade" : "text-bad-shade")}>{result ? PRAISE[idx % PRAISE.length] : "Correct solution:"}</p>
                  {!result && (
                    <p className="mt-1 font-bold text-bad-shade">
                      <MdInline text={correctAnswerText(current.question)} />
                    </p>
                  )}
                  {current.question.explain && (
                    <details className="mt-1">
                      <summary className={clsx("cursor-pointer text-sm font-extrabold uppercase tracking-wide", result ? "text-good-shade" : "text-bad-shade")}>Why?</summary>
                      <Md text={current.question.explain} className="prose-quest mt-2 max-h-48 space-y-2 overflow-y-auto !text-[0.96rem] !leading-7" />
                    </details>
                  )}
                </div>
              </div>
              <button onClick={next} autoFocus className={clsx("w-full shrink-0 sm:w-auto sm:min-w-[160px]", result ? "btn-good" : "btn-bad")}>
                Continue
              </button>
            </>
          )}
        </div>
      </div>

      {/* quit confirm */}
      <AnimatePresence>
        {quit && (
          <motion.div className="fixed inset-0 z-50 grid place-items-end bg-ink/40 sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setQuit(false)}>
            <motion.div initial={{ y: 40 }} animate={{ y: 0 }} exit={{ y: 40 }} onClick={(e) => e.stopPropagation()} className="w-full rounded-t-3xl bg-surface p-8 text-center sm:max-w-md sm:rounded-3xl" role="alertdialog" aria-modal="true">
              <div className="flex justify-center">
                <Mascot pose="sad" size={110} animate={false} />
              </div>
              <h2 className="mt-4 text-2xl font-black">Wait, don’t go!</h2>
              <p className="mt-2 font-semibold text-muted">You’ll lose your progress in this {p.kind === "practice" ? "practice" : "session"} if you quit now.</p>
              <button className="btn-primary mt-6 w-full" onClick={() => setQuit(false)} autoFocus>
                Keep learning
              </button>
              <button className="btn-flat mt-2 w-full !text-bad" onClick={() => router.push(p.exitHref)}>
                <Flag className="h-4 w-4" /> End session
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultStat({ label, value, color, icon }: { label: string; value: string; color: string; icon: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border-2" style={{ borderColor: color, background: color }}>
      <div className="py-1.5 text-xs font-black uppercase tracking-wide text-white">{label}</div>
      <div className="flex items-center justify-center gap-1.5 rounded-xl bg-surface py-4 text-xl font-black" style={{ color }}>
        {icon} {value}
      </div>
    </div>
  );
}

function LevelPill({ level }: { level: MasteryLevel }) {
  return (
    <span className="shrink-0 rounded-lg px-2 py-0.5 text-xs font-black" style={{ background: level ? MASTERY[level].color : "rgb(var(--surface-2))", color: level ? "white" : "rgb(var(--muted))" }}>
      {MASTERY[level].name}
    </span>
  );
}
