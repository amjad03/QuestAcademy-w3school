"use client";

import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronDown, Clock, FlaskConical, Headphones, Layers, ListTree, Pause, Target, Zap } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import { tex, MdInline, truncateMd } from "@/components/Md";
import { useHydrated } from "@/components/providers";
import { Challenge } from "@/components/code/Challenge";
import { BlockView } from "./Blocks";
import { Flashcards } from "./Flashcards";
import { Quiz } from "./Quiz";
import { useNarration } from "./useNarration";
import type { LessonPayload } from "./types";

type Mode = "learn" | "cards" | "quiz" | "challenge";

export function LessonPlayer(p: LessonPayload) {
  const { lesson, world } = p;
  const style = useLearner((s) => s.profile.style);
  const completed = useLearner((s) => Boolean(s.lessons[p.id]));
  const visitLesson = useLearner((s) => s.visitLesson);
  const completeLesson = useLearner((s) => s.completeLesson);
  const celebrate = useUi((s) => s.celebrate);
  const hydrated = useHydrated();
  const [mode, setMode] = useState<Mode>("learn");
  const [outlineOpen, setOutlineOpen] = useState(false);
  const narration = useNarration(lesson.blocks);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    visitLesson({ id: p.id, subject: p.subject.slug, world });
    if (style === "doing" && lesson.challenge) setMode("challenge");
    window.scrollTo({ top: 0 });
    return () => narration.stop();
  }, [p.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (narration.current !== null) blockRefs.current[narration.current]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [narration.current]);

  const finish = (quizScore?: number) => {
    const first = completeLesson({ id: p.id, subject: p.subject.slug, world, xp: lesson.xp, flashcards: lesson.flashcards?.length ?? 0, quizScore });
    if (first) celebrate({ kind: "lesson", title: "Lesson complete!", subtitle: `+${lesson.xp} XP · ${lesson.flashcards?.length ?? 0} cards added to your review deck`, emoji: p.topic.icon });
  };

  const modes: { id: Mode; label: string; icon: typeof BookOpen; count?: number }[] = [
    { id: "learn", label: "Learn", icon: BookOpen },
    ...(lesson.flashcards?.length ? [{ id: "cards" as const, label: "Flashcards", icon: Layers, count: lesson.flashcards.length }] : []),
    ...(lesson.quiz?.length ? [{ id: "quiz" as const, label: world === "exam" ? "Timed drill" : "Quiz", icon: Target, count: lesson.quiz.length }] : []),
    ...(lesson.challenge ? [{ id: "challenge" as const, label: "Challenge", icon: FlaskConical }] : []),
  ];

  const formulas = useMemo(() => lesson.blocks.filter((b) => b.type === "formula"), [lesson]);
  const examTips = useMemo(() => lesson.blocks.filter((b) => b.type === "callout" && b.tone === "exam"), [lesson]);
  const headings = useMemo(() => lesson.blocks.map((b, i) => ({ b, i })).filter(({ b }) => b.type === "heading"), [lesson]);
  const rail = world === "exam" ? formulas.length + examTips.length > 0 : world === "campus" || world === "school" ? headings.length > 1 : false;

  const fontTitle = world === "campus" ? "font-serif" : world === "code" ? "font-mono" : "font-display";

  return (
    <div data-world={world} className="min-h-screen bg-bg text-ink">
      <motion.div className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-accent to-accent-2" style={{ scaleX: progress }} />

      <div className="mx-auto flex max-w-[1400px] gap-8 px-4 sm:px-6">
        {/* ---------- Outline (w3schools-style sidebar) ---------- */}
        <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto border-r border-line py-6 pr-4 lg:block">
          <Outline {...p} />
        </aside>

        <div className="min-w-0 flex-1 py-6">
          {/* breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link href={`/learn/${p.subject.slug}`} className="flex items-center gap-1.5 hover:text-ink">
              <ArrowLeft className="h-4 w-4" /> {p.subject.icon} {p.subject.title}
            </Link>
            <span>/</span>
            <span className="truncate">{p.topic.title}</span>
            <button className="ml-auto flex items-center gap-1 rounded-xl border border-line px-3 py-1.5 text-xs lg:hidden" onClick={() => setOutlineOpen((o) => !o)}>
              <ListTree className="h-4 w-4" /> Lessons <ChevronDown className={clsx("h-3 w-3 transition", outlineOpen && "rotate-180")} />
            </button>
          </div>
          <AnimatePresence>
            {outlineOpen && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden lg:hidden">
                <div className="card mt-3 max-h-[60vh] overflow-y-auto p-4">
                  <Outline {...p} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex gap-8">
            <article className="min-w-0 max-w-3xl flex-1">
              {/* header */}
              <header className="mt-6">
                <span className="chip">
                  {p.topic.icon} {p.topic.title} · Lesson {p.position.index + 1} of {p.position.total}
                </span>
                <h1 className={clsx("mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl", fontTitle)}>{lesson.title}</h1>
                <p className="mt-3 text-lg leading-8 text-muted">{lesson.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
                  <span className="chip">
                    <Clock className="h-3.5 w-3.5" /> {lesson.minutes} min
                  </span>
                  <span className="chip !text-accent">
                    <Zap className="h-3.5 w-3.5" /> {lesson.xp} XP
                  </span>
                  {hydrated && completed && (
                    <span className="chip !border-good/40 !bg-good/10 !text-good">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                    </span>
                  )}
                  {narration.supported && mode === "learn" && (
                    <button
                      onClick={() => (narration.playing ? narration.stop() : narration.play())}
                      className={clsx("chip transition hover:!text-ink", (style === "listening" || narration.playing) && "!border-accent/50 !bg-accent/10 !text-accent")}
                    >
                      {narration.playing ? <Pause className="h-3.5 w-3.5" /> : <Headphones className="h-3.5 w-3.5" />}
                      {narration.playing ? "Stop reading" : "Read it to me"}
                    </button>
                  )}
                </div>
              </header>

              {/* mode tabs */}
              {modes.length > 1 && (
                <div className="sticky top-16 z-20 -mx-4 mt-6 border-b border-line bg-bg/95 px-4 backdrop-blur-xl sm:mx-0 sm:px-0">
                  <div className="flex gap-1 overflow-x-auto py-2" role="tablist">
                    {modes.map((m) => (
                      <button
                        key={m.id}
                        role="tab"
                        aria-selected={mode === m.id}
                        onClick={() => {
                          setMode(m.id);
                          narration.stop();
                        }}
                        className={clsx(
                          "relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
                          mode === m.id ? "text-accent" : "text-muted hover:bg-surface-2 hover:text-ink",
                        )}
                      >
                        {mode === m.id && <motion.span layoutId="mode-pill" className="absolute inset-0 rounded-xl bg-accent/10" />}
                        <m.icon className="relative h-4 w-4" />
                        <span className="relative">{m.label}</span>
                        {m.count !== undefined && <span className="relative rounded-md bg-surface-2 px-1.5 text-[11px]">{m.count}</span>}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                {mode === "learn" && (
                  <div className="space-y-7">
                    {lesson.blocks.map((b, i) => (
                      <div
                        key={i}
                        ref={(el) => {
                          blockRefs.current[i] = el;
                        }}
                        className={clsx("rounded-3xl transition", narration.current === i && "bg-accent/[0.07] ring-4 ring-accent/20 ring-offset-8 ring-offset-bg")}
                      >
                        <BlockView block={b} world={world} id={`${p.id}-${i}`} />
                      </div>
                    ))}

                    <EndCard
                      completed={hydrated && completed}
                      hasQuiz={Boolean(lesson.quiz?.length)}
                      hasChallenge={Boolean(lesson.challenge)}
                      next={p.next}
                      onComplete={() => finish()}
                      onQuiz={() => {
                        setMode("quiz");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      onChallenge={() => {
                        setMode("challenge");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  </div>
                )}
                {mode === "cards" && lesson.flashcards && <Flashcards cards={lesson.flashcards} />}
                {mode === "quiz" && lesson.quiz && (
                  <div className="space-y-6">
                    <Quiz questions={lesson.quiz} variant={world === "exam" ? "exam" : "default"} onFinish={(c, t) => finish(Math.round((c / t) * 100))} />
                    {p.next && (
                      <Link href={p.next.href} className="card flex items-center justify-between p-5 transition hover:border-accent/50">
                        <span>
                          <span className="block text-xs uppercase tracking-wider text-muted">Up next</span>
                          <span className="font-semibold">{p.next.title}</span>
                        </span>
                        <ArrowRight className="h-5 w-5 text-accent" />
                      </Link>
                    )}
                  </div>
                )}
                {mode === "challenge" && lesson.challenge && <Challenge challenge={lesson.challenge} lessonId={p.id} />}
              </div>

              {/* prev / next */}
              <nav className="mt-14 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                {p.prev ? (
                  <Link href={p.prev.href} className="card group p-4 transition hover:border-accent/50">
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <ArrowLeft className="h-3 w-3" /> Previous
                    </span>
                    <span className="mt-1 block font-semibold group-hover:text-accent">{p.prev.title}</span>
                  </Link>
                ) : (
                  <span />
                )}
                {p.next && (
                  <Link href={p.next.href} className="card group p-4 text-right transition hover:border-accent/50">
                    <span className="flex items-center justify-end gap-1 text-xs text-muted">
                      Next <ArrowRight className="h-3 w-3" />
                    </span>
                    <span className="mt-1 block font-semibold group-hover:text-accent">{p.next.title}</span>
                  </Link>
                )}
              </nav>
            </article>

            {/* ---------- Right rail: world-specific ---------- */}
            {rail && mode === "learn" && (
              <aside className="sticky top-32 hidden h-fit max-h-[calc(100vh-9rem)] w-72 shrink-0 space-y-4 overflow-y-auto pt-6 xl:block">
                {world === "exam" ? (
                  <>
                    {formulas.length > 0 && (
                      <div className="card p-4">
                        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">⚡ Formula quick-ref</div>
                        <div className="space-y-3">
                          {formulas.map((f, i) => (
                            <div key={i} className="overflow-x-auto rounded-2xl bg-surface-2 px-3 py-1 text-[13px]" dangerouslySetInnerHTML={{ __html: tex(f.type === "formula" ? f.tex : "", true) }} />
                          ))}
                        </div>
                      </div>
                    )}
                    {examTips.length > 0 && (
                      <div className="card p-4">
                        <div className="mb-3 text-xs font-bold uppercase tracking-wider text-accent">🎯 Exam insights</div>
                        <ul className="space-y-2 text-sm leading-6">
                          {examTips.map((t, i) =>
                            t.type === "callout" ? (
                              <li key={i} className="rounded-2xl bg-surface-2 p-3">
                                <b className="block text-accent">{t.title ?? "Exam insight"}</b>
                                <span className="text-muted">
                                  <MdInline text={truncateMd(t.md, 220)} />
                                </span>
                              </li>
                            ) : null,
                          )}
                        </ul>
                      </div>
                    )}
                    <Link href="/exam/practice" className="btn-primary w-full">
                      Drill this chapter →
                    </Link>
                  </>
                ) : (
                  <div className="card p-4">
                    <div className="mb-3 text-xs font-bold uppercase tracking-wider text-muted">On this page</div>
                    <ul className="space-y-1 text-sm">
                      {headings.map(({ b, i }) => (
                        <li key={i}>
                          <button onClick={() => blockRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" })} className="w-full rounded-lg px-2 py-1 text-left text-muted hover:bg-surface-2 hover:text-ink">
                            {b.type === "heading" && b.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Outline(p: LessonPayload) {
  const lessons = useLearner((s) => s.lessons);
  const hydrated = useHydrated();
  return (
    <nav aria-label="Course outline">
      <Link href={`/learn/${p.subject.slug}`} className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl text-xl" style={{ background: `linear-gradient(135deg, ${p.subject.colors[0]}, ${p.subject.colors[1]})` }}>
          {p.subject.icon}
        </span>
        <span className="font-semibold leading-tight">{p.subject.title}</span>
      </Link>
      {p.outline.map((t) => (
        <div key={t.slug} className="mb-4">
          <div className="mb-1 flex items-center gap-2 px-2 text-[11px] font-bold uppercase tracking-wider text-muted">
            <span>{t.icon}</span> {t.title}
          </div>
          <ul>
            {t.lessons.map((l) => {
              const active = l.id === p.id;
              const done = hydrated && lessons[l.id];
              return (
                <li key={l.id}>
                  <Link
                    href={l.href}
                    className={clsx("flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm transition", active ? "bg-accent text-white" : "text-ink/80 hover:bg-surface-2")}
                  >
                    {done ? <CheckCircle2 className={clsx("h-4 w-4 shrink-0", active ? "text-white" : "text-good")} /> : <span className={clsx("h-4 w-4 shrink-0 rounded-full border-2", active ? "border-white" : "border-line")} />}
                    <span className="truncate">{l.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function EndCard({
  completed,
  hasQuiz,
  hasChallenge,
  next,
  onComplete,
  onQuiz,
  onChallenge,
}: {
  completed: boolean;
  hasQuiz: boolean;
  hasChallenge: boolean;
  next?: { href: string; title: string };
  onComplete: () => void;
  onQuiz: () => void;
  onChallenge: () => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-accent/30 bg-gradient-to-br from-accent/10 via-surface to-accent-2/10 p-6 sm:p-8">
      <div className="text-4xl">{completed ? "🏆" : "🏁"}</div>
      <h3 className="mt-3 font-display text-2xl font-bold">{completed ? "You’ve mastered this lesson" : "You reached the end!"}</h3>
      <p className="mt-1 text-muted">
        {completed ? "Lock it in with the quiz or move on to the next adventure." : "Claim your XP, then prove it with a quick quiz — that’s what makes it stick."}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        {!completed && (
          <button className="btn-pop" onClick={onComplete}>
            <CheckCircle2 className="h-4 w-4" /> Mark complete
          </button>
        )}
        {hasQuiz && (
          <button className={completed ? "btn-pop" : "btn-ghost"} onClick={onQuiz}>
            <Target className="h-4 w-4" /> Take the quiz
          </button>
        )}
        {hasChallenge && (
          <button className="btn-ghost" onClick={onChallenge}>
            <FlaskConical className="h-4 w-4" /> Coding challenge
          </button>
        )}
        {next && completed && (
          <Link href={next.href} className="btn-ghost">
            Next: <MdInline text={next.title} /> <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
