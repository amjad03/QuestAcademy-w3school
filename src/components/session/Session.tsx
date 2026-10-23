"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Flag } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Question, WorldId } from "@/content/types";
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import type { MasteryLevel } from "@/lib/mastery";
import { sfx, speak, stopSpeaking } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { plain, Md, MdInline } from "@/components/Md";
import { Mascot } from "@/components/brand/Mascot";
import { useHydrated } from "@/components/providers";
import { useMode } from "@/lib/useMode";
import { useExperience } from "@/experiences";
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
  const exp = useExperience();
  const explore = mode.young;
  const kids = p.world === "kids" || explore;
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
    const Results = exp.SessionResults;
    return (
      <Results
        kind={p.kind}
        title={p.title}
        course={p.course}
        accuracy={acc}
        correct={correctFirst}
        total={total}
        xp={xpEarned}
        seconds={elapsed}
        changes={changes}
        missed={missed.map((m) => ({
          uid: m.uid,
          question: <Md text={m.question.q} className="space-y-2" />,
          answer: <MdInline text={correctAnswerText(m.question)} />,
          explain: m.question.explain ? <Md text={m.question.explain} className="prose-quest space-y-1 !text-sm !leading-6" /> : null,
        }))}
        exitHref={p.exitHref}
        onRetry={() => window.location.reload()}
      />
    );
  }

  /* ---------------- QUESTION ---------------- */
  const Layout = exp.SessionLayout;
  return (
    <Layout
      kind={p.kind}
      title={p.title}
      course={p.course}
      progress={progress}
      index={idx}
      total={queue.length}
      combo={combo}
      retry={Boolean(current.retry)}
      question={
        <AnimatePresence mode="wait">
          <motion.div key={current.uid} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.18 }}>
            <QuestionInput question={current.question} answer={answer} onChange={setAnswer} result={result} big={kids} onSubmit={check} />
          </motion.div>
        </AnimatePresence>
      }
      feedback={
        result === null
          ? null
          : {
              correct: result,
              praise: PRAISE[idx % PRAISE.length],
              answer: <MdInline text={correctAnswerText(current.question)} />,
              explain: current.question.explain ? <Md text={current.question.explain} className="prose-quest space-y-2 !text-[0.96rem] !leading-7" /> : null,
            }
      }
      canCheck={isAnswered(current.question, answer)}
      onCheck={check}
      onSkip={skip}
      onContinue={next}
      onQuit={() => setQuit(true)}
      quitDialog={
        <AnimatePresence>
          {quit && (
            <motion.div className="fixed inset-0 z-50 grid place-items-end bg-ink/40 sm:place-items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setQuit(false)}>
              <motion.div initial={{ y: 40 }} animate={{ y: 0 }} exit={{ y: 40 }} onClick={(e) => e.stopPropagation()} className="w-full rounded-t-3xl bg-surface p-8 text-center sm:max-w-md sm:rounded-3xl" role="alertdialog" aria-modal="true">
                <div className="flex justify-center">
                  <Mascot pose="sad" size={110} animate={false} />
                </div>
                <h2 className="mt-4 text-2xl font-black">{explore ? "Wait, don’t go!" : "Leave this session?"}</h2>
                <p className="mt-2 font-semibold text-muted">You’ll lose your progress in this {p.kind === "practice" ? "practice" : "session"} if you quit now.</p>
                <button className="btn-primary mt-6 w-full" onClick={() => setQuit(false)} autoFocus>
                  Keep going
                </button>
                <button className="btn-flat mt-2 w-full !text-bad" onClick={() => router.push(p.exitHref)}>
                  <Flag className="h-4 w-4" /> End session
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      }
    />
  );
}
