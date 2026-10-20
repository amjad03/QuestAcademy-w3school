"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, ChevronRight, Dumbbell, Gamepad2, Layers, X } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import { dayKey, reviewCard } from "@/lib/gamification";
import { MASTERY } from "@/lib/mastery";
import { useHydrated } from "@/components/providers";
import { PageColumns } from "@/components/shell/AppShell";
import { LeagueCard, QuestsCard, RailFooter } from "@/components/shell/RailCards";
import { FlipCard } from "@/components/learn/Flashcards";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { MdInline } from "@/components/Md";
import { sfx } from "@/lib/sound";
import { burst } from "@/lib/confetti";

type CardData = { front: string; back: string; lesson: string; href: string; subject: string; icon: string; world: string };
type LessonInfo = { title: string; href: string; course: string; practice: string };

const GRADES = [
  { g: 0 as const, label: "Again", cls: "btn-bad", key: "1" },
  { g: 1 as const, label: "Hard", cls: "btn-gold", key: "2" },
  { g: 2 as const, label: "Good", cls: "btn-good", key: "3" },
  { g: 3 as const, label: "Easy", cls: "btn-primary", key: "4" },
];

export function PracticeHub() {
  const hydrated = useHydrated();
  const cards = useLearner((s) => s.cards);
  const mastery = useLearner((s) => s.mastery);
  const [data, setData] = useState<Record<string, CardData> | null>(null);
  const [lessons, setLessons] = useState<Record<string, LessonInfo> | null>(null);
  const [queue, setQueue] = useState<string[] | null>(null);

  useEffect(() => {
    fetch("/flashcards.json").then((r) => r.json()).then(setData).catch(() => setData({}));
    fetch("/lessons.json").then((r) => r.json()).then(setLessons).catch(() => setLessons({}));
  }, []);

  const today = dayKey();
  const ids = useMemo(() => Object.keys(cards).filter((id) => data?.[id]), [cards, data]);
  const due = ids.filter((id) => cards[id].due <= today);
  const weak = useMemo(
    () =>
      Object.entries(mastery)
        .filter(([id, l]) => l >= 1 && l <= 2 && lessons?.[id])
        .sort((a, b) => a[1] - b[1])
        .slice(0, 8),
    [mastery, lessons],
  );

  if (queue && data) return <ReviewSession queue={queue} data={data} onExit={() => setQueue(null)} />;

  const rail = (
    <>
      <QuestsCard />
      <LeagueCard />
      <RailFooter />
    </>
  );

  return (
    <PageColumns rail={rail}>
      <div className="flex items-center gap-5">
        <Mascot pose="read" size={96} />
        <div>
          <h1 className="text-3xl font-black">Practice</h1>
          <p className="mt-1 font-semibold text-muted">Strengthen what you’ve learned before it fades.</p>
        </div>
      </div>

      {/* spaced review */}
      <section className="card mt-8 overflow-hidden">
        <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-accent-2 text-white" style={{ boxShadow: "inset 0 -5px 0 rgb(var(--accent-2-shade))" }}>
            <Brain className="h-8 w-8" />
          </span>
          <div className="flex-1">
            <h2 className="text-xl font-black">Spaced review</h2>
            <p className="mt-1 font-semibold text-muted">
              {!hydrated || !data
                ? "Loading your deck…"
                : due.length
                  ? `${due.length} card${due.length === 1 ? "" : "s"} ready — review them right before you’d forget.`
                  : ids.length
                    ? "All caught up! Come back tomorrow."
                    : "Complete lessons to build your review deck."}
            </p>
          </div>
          <div className="flex gap-2">
            {ids.length > 0 && !due.length && (
              <button className="btn-ghost" onClick={() => setQueue([...ids].sort(() => Math.random() - 0.5).slice(0, 15))}>
                Practice anyway
              </button>
            )}
            {due.length > 0 && (
              <button className="btn-purple" onClick={() => setQueue([...due].sort(() => Math.random() - 0.5))}>
                Start review
              </button>
            )}
          </div>
        </div>
        {hydrated && ids.length > 0 && (
          <div className="grid grid-cols-3 border-t-2 border-line text-center">
            {[
              ["Due now", due.length],
              ["In deck", ids.length],
              ["Mastered", ids.filter((id) => cards[id].interval >= 21).length],
            ].map(([l, n]) => (
              <div key={l as string} className="border-r-2 border-line py-4 last:border-0">
                <div className="text-2xl font-black">{n as number}</div>
                <div className="text-xs font-bold text-muted">{l}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* weak skills */}
      <section className="mt-8">
        <h2 className="text-xl font-black">Level up your weakest skills</h2>
        <p className="mt-1 font-semibold text-muted">Skills you’ve started but haven’t made proficient yet.</p>
        {hydrated && weak.length > 0 ? (
          <ul className="card mt-4 divide-y-2 divide-line overflow-hidden">
            {weak.map(([id, level]) => {
              const l = lessons![id];
              return (
                <li key={id} className="flex items-center gap-4 px-5 py-3.5">
                  <CourseIcon slug={l.course} size={36} />
                  <div className="min-w-0 flex-1">
                    <Link href={l.href} className="block truncate font-extrabold hover:text-accent">
                      <MdInline text={l.title} />
                    </Link>
                    <span className="text-xs font-black" style={{ color: MASTERY[level].color }}>
                      {MASTERY[level].name}
                    </span>
                  </div>
                  <Link href={l.practice} className="btn-good !px-4 !py-2 text-xs">
                    <Dumbbell className="h-4 w-4" /> Practice
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="card mt-4 p-6 text-center font-semibold text-muted">Nothing to fix yet — practice a lesson and any shaky skills will show up here.</div>
        )}
      </section>

      {/* other */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link href="/kids/play" className="tile flex items-center gap-4 p-5">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#EC4899] text-white">
            <Gamepad2 className="h-6 w-6" />
          </span>
          <span className="flex-1">
            <span className="block font-black">Learning games</span>
            <span className="text-sm font-semibold text-muted">Quick games for early learners</span>
          </span>
          <ChevronRight className="h-5 w-5 text-muted" />
        </Link>
        <Link href="/exam/practice" className="tile flex items-center gap-4 p-5">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-bad text-white">
            <Layers className="h-6 w-6" />
          </span>
          <span className="flex-1">
            <span className="block font-black">Chapter drills</span>
            <span className="text-sm font-semibold text-muted">Adaptive NEET / JEE practice</span>
          </span>
          <ChevronRight className="h-5 w-5 text-muted" />
        </Link>
      </section>
    </PageColumns>
  );
}

function ReviewSession({ queue: initial, data, onExit }: { queue: string[]; data: Record<string, CardData>; onExit: () => void }) {
  const cards = useLearner((s) => s.cards);
  const gradeCard = useLearner((s) => s.gradeCard);
  const setFocusMode = useUi((s) => s.setFocusMode);
  const [queue, setQueue] = useState(initial);
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const current = queue[0];

  useEffect(() => {
    setFocusMode(true);
    return () => setFocusMode(false);
  }, [setFocusMode]);

  const grade = (g: 0 | 1 | 2 | 3) => {
    if (!current) return;
    sfx(g === 0 ? "wrong" : "correct");
    gradeCard(current, g);
    setReviewed((r) => r + 1);
    setFlipped(false);
    setQueue((q) => {
      const rest = q.slice(1);
      const next = g === 0 ? [...rest, current] : rest;
      if (!next.length) {
        burst();
        setFocusMode(false);
      }
      return next;
    });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!current) return;
      if (e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
      const g = GRADES.find((x) => x.key === e.key);
      if (g && flipped) grade(g.g);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-bg">
      <div className="mx-auto flex w-full max-w-[1000px] items-center gap-4 px-5 pt-6">
        <button onClick={onExit} className="grid h-10 w-10 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label="Exit review">
          <X className="h-7 w-7" strokeWidth={2.6} />
        </button>
        <ProgressBar value={reviewed / Math.max(1, reviewed + queue.length)} height={16} color="rgb(var(--accent-2))" />
      </div>
      <div className="mx-auto w-full max-w-[560px] flex-1 px-5 py-10">
        {current ? (
          <>
            <Link href={data[current].href} className="eyebrow hover:text-accent">
              {data[current].subject} · <MdInline text={data[current].lesson} />
            </Link>
            <div className="mt-4">
              <FlipCard card={data[current]} flipped={flipped} onFlip={() => { sfx("flip"); setFlipped((f) => !f); }} kids={data[current].world === "kids"} footer="Tap or press space to flip" />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center py-10 text-center">
            <Mascot pose="cheer" size={140} />
            <h2 className="mt-6 text-3xl font-black">Review complete!</h2>
            <p className="mt-2 font-semibold text-muted">{reviewed} cards strengthened. See you at the next review.</p>
          </div>
        )}
      </div>
      <div className="border-t-2 border-line">
        <div className="mx-auto w-full max-w-[1000px] px-5 py-5">
          <AnimatePresence mode="wait">
            {!current ? (
              <motion.div key="done" className="flex justify-end">
                <button className="btn-primary min-w-[160px]" onClick={onExit}>
                  Continue
                </button>
              </motion.div>
            ) : flipped ? (
              <motion.div key="g" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-4 gap-2 sm:gap-3">
                {GRADES.map(({ g, label, cls, key }) => (
                  <button key={g} onClick={() => grade(g)} className={clsx(cls, "flex-col !gap-0 !px-2 !py-2")}>
                    {label}
                    <span className="text-[11px] normal-case opacity-80">
                      {reviewCard(cards[current], g).interval}d · {key}
                    </span>
                  </button>
                ))}
              </motion.div>
            ) : (
              <motion.div key="f" className="flex justify-end">
                <button className="btn-primary w-full sm:w-auto sm:min-w-[160px]" onClick={() => setFlipped(true)}>
                  Show answer
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
