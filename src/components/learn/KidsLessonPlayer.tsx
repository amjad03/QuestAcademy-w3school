"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import type { Block } from "@/content/types";
import { useLearner } from "@/lib/store";
import { speak, stopSpeaking, sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";
import { BlockView } from "./Blocks";
import { QuestionCard } from "./QuestionCard";
import { FlipCard } from "./Flashcards";
import { blockSpeech } from "./useNarration";
import type { LessonPayload } from "./types";

type Step = { kind: "block"; blocks: Block[] } | { kind: "cards" } | { kind: "quiz"; q: number } | { kind: "done" };

/** Groups small blocks (headings, short text) together so each screen feels like a story page. */
function paginate(blocks: Block[]): Block[][] {
  const pages: Block[][] = [];
  let cur: Block[] = [];
  for (const b of blocks) {
    const solo = b.type === "widget" || b.type === "checkpoint" || b.type === "illustration";
    if (solo) {
      if (cur.length) pages.push(cur);
      if (b.type === "illustration" && pages.length && pages[pages.length - 1].length === 1 && pages[pages.length - 1][0].type === "heading") {
        pages[pages.length - 1].push(b);
      } else pages.push([b]);
      cur = [];
      continue;
    }
    cur.push(b);
    if (b.type !== "heading" && cur.length >= 2) {
      pages.push(cur);
      cur = [];
    }
  }
  if (cur.length) pages.push(cur);
  return pages;
}

/**
 * Wonder Woods lesson: a story told one page at a time by Questy the owl,
 * read aloud, then flashcards, a big-button quiz and a sticker reward.
 */
export function KidsLessonPlayer(p: LessonPayload) {
  const { lesson } = p;
  const completeLesson = useLearner((s) => s.completeLesson);
  const recordAnswer = useLearner((s) => s.recordAnswer);
  const recordQuiz = useLearner((s) => s.recordQuiz);
  const visitLesson = useLearner((s) => s.visitLesson);
  const bump = useLearner((s) => s.bump);
  const [voice, setVoice] = useState(true);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [card, setCard] = useState(0);
  const [correct, setCorrect] = useState(0);

  const steps: Step[] = useMemo(() => {
    const s: Step[] = paginate(lesson.blocks).map((blocks) => ({ kind: "block", blocks }));
    if (lesson.flashcards?.length) s.push({ kind: "cards" });
    (lesson.quiz ?? []).forEach((_, q) => s.push({ kind: "quiz", q }));
    s.push({ kind: "done" });
    return s;
  }, [lesson]);
  const step = steps[i];

  useEffect(() => {
    visitLesson({ id: p.id, subject: p.subject.slug, world: "kids" });
    return () => stopSpeaking();
  }, [p.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Questy reads each page aloud.
  useEffect(() => {
    if (!voice) return stopSpeaking();
    if (step.kind === "block") {
      const text = step.blocks.map(blockSpeech).filter(Boolean).join(". ");
      if (text) speak(text, { rate: 0.92, pitch: 1.25 });
    } else if (step.kind === "cards") speak("Let's play flip cards! Tap the card to turn it over.", { rate: 0.95, pitch: 1.25 });
    else if (step.kind === "done") speak(`Hooray! You finished ${lesson.title}! You earned a shiny sticker!`, { rate: 0.95, pitch: 1.3 });
  }, [i, voice]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (step.kind !== "done") return;
    const total = lesson.quiz?.length ?? 0;
    if (total) recordQuiz(correct, total);
    completeLesson({ id: p.id, subject: p.subject.slug, world: "kids", xp: lesson.xp, flashcards: lesson.flashcards?.length ?? 0, quizScore: total ? Math.round((correct / total) * 100) : undefined });
    burst({ big: true });
    sfx("fanfare");
  }, [step.kind]); // eslint-disable-line react-hooks/exhaustive-deps

  const next = () => {
    sfx("pop");
    setFlipped(false);
    setI((x) => Math.min(steps.length - 1, x + 1));
  };
  const back = () => setI((x) => Math.max(0, x - 1));
  const mascotLine =
    step.kind === "block" ? ["Let’s explore!", "Ooh, look at this!", "You’re doing great!", "Wow, cool!", "Hoot hoot! Keep going!"][i % 5] : step.kind === "cards" ? "Tap to flip!" : step.kind === "quiz" ? "Your turn — you can do it!" : "You did it!";
  const stars = Math.round(((lesson.quiz?.length ? correct / lesson.quiz.length : 1) || 0) * 3);

  return (
    <div data-world="kids" className="min-h-screen bg-bg font-kids text-ink">
      <div className="dot-bg fixed inset-0 opacity-50" />
      <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col px-4 pb-8 pt-4">
        {/* top bar: home, progress path, voice */}
        <div className="flex items-center gap-3">
          <Link href={`/learn/${p.subject.slug}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface shadow-pop" aria-label="Back to map">
            <Home className="h-6 w-6" />
          </Link>
          <div className="flex flex-1 items-center gap-1">
            {steps.map((_, k) => (
              <span key={k} className={clsx("h-3 flex-1 rounded-full transition", k < i ? "bg-accent" : k === i ? "bg-accent-2" : "bg-surface-2")} />
            ))}
          </div>
          <button onClick={() => setVoice((v) => !v)} className={clsx("grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-pop", voice ? "bg-accent text-white" : "bg-surface")} aria-label={voice ? "Mute Questy" : "Let Questy read"}>
            {voice ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
          </button>
        </div>

        {/* mascot */}
        <div className="mt-5 flex items-end gap-3">
          <motion.span key={i} className="text-6xl" initial={{ y: 10, rotate: -10 }} animate={{ y: 0, rotate: 0 }} transition={{ type: "spring" }}>
            🦉
          </motion.span>
          <motion.div key={`b${i}`} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-6 rounded-3xl rounded-bl-none bg-surface px-4 py-2 text-lg font-semibold shadow-soft">
            {mascotLine}
          </motion.div>
          <span className="mb-7 ml-auto text-sm text-muted">{lesson.title}</span>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, x: 60, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} exit={{ opacity: 0, x: -60, rotate: -2 }} transition={{ type: "spring", stiffness: 200, damping: 24 }} className="rounded-4xl border-4 border-line bg-surface p-6 shadow-soft sm:p-8">
              {step.kind === "block" && (
                <div className="space-y-6">
                  {step.blocks.map((b, k) =>
                    b.type === "checkpoint" ? (
                      <KidsCheckpoint key={k} block={b} onDone={next} />
                    ) : (
                      <BlockView key={k} block={b} world="kids" id={`${p.id}-${i}-${k}`} />
                    ),
                  )}
                </div>
              )}
              {step.kind === "cards" && lesson.flashcards && (
                <div>
                  <FlipCard
                    card={lesson.flashcards[card]}
                    flipped={flipped}
                    kids
                    footer={`${card + 1} / ${lesson.flashcards.length}`}
                    onFlip={() => {
                      sfx("flip");
                      if (!flipped) bump("flashcards");
                      setFlipped((f) => !f);
                      if (!flipped && voice) speak(lesson.flashcards![card].back.replace(/[*`$]/g, ""), { pitch: 1.25 });
                    }}
                  />
                  <div className="mt-5 flex justify-center gap-3">
                    {lesson.flashcards.map((_, k) => (
                      <button
                        key={k}
                        onClick={() => {
                          setCard(k);
                          setFlipped(false);
                        }}
                        className={clsx("h-4 w-4 rounded-full", k === card ? "bg-accent" : "bg-surface-2")}
                        aria-label={`Card ${k + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
              {step.kind === "quiz" && lesson.quiz && (
                <QuestionCard
                  key={step.q}
                  question={lesson.quiz[step.q]}
                  variant="kids"
                  index={step.q}
                  total={lesson.quiz.length}
                  continueLabel="Next ➜"
                  onDone={(ok) => {
                    recordAnswer(ok);
                    if (ok) setCorrect((c) => c + 1);
                    next();
                  }}
                />
              )}
              {step.kind === "done" && (
                <div className="py-6 text-center">
                  <motion.div className="text-[7rem] leading-none" animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    {p.topic.icon}
                  </motion.div>
                  <div className="mt-4 text-6xl">{Array.from({ length: 3 }, (_, s) => (s < Math.max(1, stars) ? "⭐" : "☆")).join(" ")}</div>
                  <h2 className="mt-4 text-4xl font-bold">Super star!</h2>
                  <p className="mt-2 text-xl text-muted">
                    You got a <b className="text-accent">{p.topic.title}</b> sticker and {lesson.xp} XP!
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <button onClick={() => { setI(0); setCorrect(0); }} className="btn-ghost h-14 px-6 text-lg">
                      🔁 Play again
                    </button>
                    {p.next ? (
                      <Link href={p.next.href} className="btn-pop h-14 px-8 text-lg">
                        Next adventure ➜
                      </Link>
                    ) : (
                      <Link href="/kids" className="btn-pop h-14 px-8 text-lg">
                        Back to Wonder Woods 🌳
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {step.kind !== "quiz" && step.kind !== "done" && !(step.kind === "block" && step.blocks.some((b) => b.type === "checkpoint")) && (
          <div className="mt-6 flex items-center justify-between">
            <button onClick={back} disabled={i === 0} className="grid h-16 w-16 place-items-center rounded-3xl bg-surface shadow-pop disabled:opacity-30" aria-label="Back">
              <ArrowLeft className="h-7 w-7" />
            </button>
            <motion.button whileTap={{ scale: 0.92 }} onClick={next} className="btn-pop h-16 px-10 text-2xl">
              Next <ArrowRight className="h-7 w-7" />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}

function KidsCheckpoint({ block, onDone }: { block: Extract<Block, { type: "checkpoint" }>; onDone: () => void }) {
  const [k, setK] = useState(0);
  const recordAnswer = useLearner((s) => s.recordAnswer);
  return (
    <QuestionCard
      key={k}
      question={block.questions[k]}
      variant="kids"
      continueLabel="Next ➜"
      onDone={(ok) => {
        recordAnswer(ok);
        if (k + 1 < block.questions.length) setK(k + 1);
        else onDone();
      }}
    />
  );
}
