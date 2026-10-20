"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, FlaskConical, List, Map as MapIcon, Play, Star } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import type { CatalogSubject } from "@/content";
import type { WorldMeta } from "@/content/types";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";

interface TopicMeta {
  slug: string;
  title: string;
  icon: string;
  description: string;
}

export function SubjectView({
  subject,
  description,
  topics,
  stats,
  world,
}: {
  subject: CatalogSubject;
  description: string;
  topics: TopicMeta[];
  stats: { topics: number; lessons: number; minutes: number; xp: number; challenges: number };
  world: WorldMeta;
}) {
  const hydrated = useHydrated();
  const done = useLearner((s) => s.lessons);
  const [view, setView] = useState<"map" | "index">(world.id === "code" || world.id === "campus" ? "index" : "map");

  useEffect(() => {
    try {
      const v = localStorage.getItem("qa-subject-view");
      if (v === "map" || v === "index") setView(v);
    } catch {
      /* ignore */
    }
  }, []);
  const setAndSave = (v: "map" | "index") => {
    setView(v);
    try {
      localStorage.setItem("qa-subject-view", v);
    } catch {
      /* ignore */
    }
  };

  const completedCount = hydrated ? subject.lessons.filter((l) => done[l.id]).length : 0;
  const nextLesson = (hydrated && subject.lessons.find((l) => !done[l.id])) || subject.lessons[0];
  const pct = subject.lessons.length ? completedCount / subject.lessons.length : 0;
  const kids = world.id === "kids";
  const titleFont = kids ? "font-kids" : world.id === "campus" ? "font-serif" : world.id === "code" ? "font-mono" : "font-display";

  return (
    <div data-world={world.id} className="min-h-screen bg-bg text-ink">
      {/* hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 opacity-[0.18]" style={{ background: `radial-gradient(ellipse at 20% 0%, ${subject.colors[0]}, transparent 60%), radial-gradient(ellipse at 90% 30%, ${subject.colors[1]}, transparent 55%)` }} />
        <div className={clsx("absolute inset-0", world.id === "code" ? "grid-bg opacity-40" : "dot-bg opacity-40")} />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Link href={world.href} className="chip hover:!text-ink">
            {world.emoji} {world.name}
          </Link>
          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end">
            <div className="flex-1">
              <div className="flex items-center gap-5">
                <motion.span
                  initial={{ scale: 0.6, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl text-5xl shadow-soft sm:h-24 sm:w-24"
                  style={{ background: `linear-gradient(135deg, ${subject.colors[0]}, ${subject.colors[1]})` }}
                >
                  {subject.icon}
                </motion.span>
                <div>
                  <h1 className={clsx("text-4xl font-bold tracking-tight sm:text-5xl", titleFont)}>{subject.title}</h1>
                  <p className="mt-1 text-lg text-accent">{subject.tagline}</p>
                </div>
              </div>
              <p className="mt-6 max-w-2xl leading-7 text-muted">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {subject.levels.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
                {subject.domain && <span className="chip">{subject.domain}</span>}
              </div>
            </div>
            <div className="card w-full p-5 md:w-80">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Your progress</span>
                <span className="font-mono text-muted">
                  {completedCount}/{subject.lessons.length}
                </span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-2">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2" initial={{ width: 0 }} animate={{ width: `${pct * 100}%` }} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-muted">
                <div>
                  <div className="font-display text-lg font-bold text-ink">{stats.lessons}</div>lessons
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-ink">{Math.round(stats.minutes / 6) / 10}h</div>to master
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-ink">{stats.xp}</div>XP
                </div>
              </div>
              {nextLesson && (
                <Link href={nextLesson.href} className="btn-pop mt-4 w-full">
                  <Play className="h-4 w-4 fill-white" /> {completedCount ? "Continue" : "Start"}: <span className="truncate">{nextLesson.title}</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* view toggle */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className={clsx("text-xl font-bold", titleFont)}>{stats.topics} chapters · {stats.lessons} lessons{stats.challenges ? ` · ${stats.challenges} challenges` : ""}</h2>
          <div className="flex rounded-2xl border border-line bg-surface p-1">
            {(["map", "index"] as const).map((v) => (
              <button key={v} onClick={() => setAndSave(v)} className={clsx("flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-sm font-medium transition", view === v ? "bg-accent text-white" : "text-muted hover:text-ink")}>
                {v === "map" ? <MapIcon className="h-4 w-4" /> : <List className="h-4 w-4" />}
                {v === "map" ? "Quest map" : "Index"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-6 sm:px-6">
        {view === "map" ? (
          <QuestMap subject={subject} topics={topics} done={hydrated ? done : {}} nextId={nextLesson?.id} kids={kids} />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {topics.map((t, ti) => {
              const ls = subject.lessons.filter((l) => l.topic === t.slug);
              const tDone = ls.filter((l) => hydrated && done[l.id]).length;
              return (
                <section key={t.slug} id={t.slug} className="card scroll-mt-24 overflow-hidden">
                  <div className="flex items-start gap-4 border-b border-line p-5">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-2xl">{t.icon}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted">Chapter {ti + 1}</div>
                      <h3 className={clsx("text-lg font-bold", titleFont)}>{t.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{t.description}</p>
                    </div>
                    <span className="chip shrink-0">
                      {tDone}/{ls.length}
                    </span>
                  </div>
                  <ul className="divide-y divide-line">
                    {ls.map((l) => (
                      <li key={l.id}>
                        <Link href={l.href} className="group flex items-center gap-3 px-5 py-3 transition hover:bg-surface-2">
                          {hydrated && done[l.id] ? <CheckCircle2 className="h-5 w-5 shrink-0 text-good" /> : <span className="h-5 w-5 shrink-0 rounded-full border-2 border-line" />}
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-medium group-hover:text-accent">{l.title}</span>
                            <span className="block truncate text-xs text-muted">{l.summary}</span>
                          </span>
                          {l.hasChallenge && <FlaskConical className="h-4 w-4 shrink-0 text-accent" />}
                          <span className="flex shrink-0 items-center gap-1 text-xs text-muted">
                            <Clock className="h-3 w-3" /> {l.minutes}m
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function QuestMap({ subject, topics, done, nextId, kids }: { subject: CatalogSubject; topics: TopicMeta[]; done: Record<string, unknown>; nextId?: string; kids: boolean }) {
  return (
    <div className="space-y-12">
      {topics.map((t, ti) => {
        const ls = subject.lessons.filter((l) => l.topic === t.slug);
        return (
          <section key={t.slug} id={t.slug} className="scroll-mt-24">
            <div className="mx-auto mb-8 flex max-w-xl items-center gap-4 rounded-3xl p-4 text-white shadow-soft" style={{ background: `linear-gradient(135deg, ${subject.colors[0]}, ${subject.colors[1]})` }}>
              <span className="text-4xl">{t.icon}</span>
              <div className="min-w-0">
                <div className="text-xs font-bold uppercase tracking-wider opacity-80">{kids ? `Island ${ti + 1}` : `Chapter ${ti + 1}`}</div>
                <div className={clsx("text-xl font-bold", kids && "font-kids text-2xl")}>{t.title}</div>
                <div className="truncate text-sm opacity-85">{t.description}</div>
              </div>
            </div>
            <div className="relative mx-auto flex max-w-md flex-col items-center gap-5">
              {ls.map((l, li) => {
                const isDone = Boolean(done[l.id]);
                const isNext = l.id === nextId;
                const offset = Math.sin((li + ti) * 1.25) * 90;
                return (
                  <motion.div
                    key={l.id}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: li * 0.04 }}
                    style={{ x: offset }}
                    className="relative flex flex-col items-center"
                  >
                    {isNext && (
                      <motion.span className="absolute -top-10 z-10 whitespace-nowrap rounded-xl border-2 border-accent bg-surface px-3 py-1 text-xs font-bold text-accent shadow-soft" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                        {isDone ? "Replay" : "START"}
                      </motion.span>
                    )}
                    <Link
                      href={l.href}
                      title={l.title}
                      className={clsx(
                        "group relative grid h-20 w-20 place-items-center rounded-full border-b-[6px] text-3xl transition active:translate-y-1 active:border-b-2",
                        isDone ? "border-black/20 text-white" : isNext ? "border-black/20 text-white ring-8 ring-accent/20" : "border-line bg-surface-2 text-muted hover:bg-surface",
                      )}
                      style={isDone || isNext ? { background: `linear-gradient(135deg, ${subject.colors[0]}, ${subject.colors[1]})` } : undefined}
                    >
                      {isDone ? <Star className="h-9 w-9 fill-white" /> : l.hasChallenge ? <FlaskConical className="h-8 w-8" /> : <span className="font-display text-2xl font-bold">{li + 1}</span>}
                    </Link>
                    <span className={clsx("mt-2 max-w-[180px] text-center text-sm font-medium leading-tight", kids && "font-kids text-base")}>{l.title}</span>
                  </motion.div>
                );
              })}
              <div className="flex items-center gap-2 text-sm text-muted">
                {ls.every((l) => done[l.id]) ? (
                  <>
                    <span className="text-3xl">🏆</span> <b className="text-good">Chapter conquered!</b>
                  </>
                ) : (
                  <>
                    <span className="text-3xl grayscale">🎁</span> Finish every lesson to open the chest
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
