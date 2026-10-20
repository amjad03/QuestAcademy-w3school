"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Coins, Flame, Gift, Play, Repeat, Snowflake, Sparkles, Trophy, Zap } from "lucide-react";
import { useMemo } from "react";
import clsx from "clsx";
import type { CatalogSubject } from "@/content";
import { stageById, worldById, worlds } from "@/content/worlds";
import { liveStreak, useLearner } from "@/lib/store";
import { dayKey, leagueFor, levelInfo, questsForDay, LEAGUES } from "@/lib/gamification";
import { useHydrated } from "@/components/providers";
import { Avatar } from "@/components/shell/Avatar";
import { ScoreRing } from "@/components/learn/Quiz";

function greeting() {
  const h = new Date().getHours();
  return h < 5 ? "Burning the midnight oil" : h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

export function Dashboard({ catalog }: { catalog: CatalogSubject[] }) {
  const hydrated = useHydrated();
  const s = useLearner();
  if (!hydrated) return <div className="mx-auto max-w-7xl px-4 py-10"><div className="h-64 animate-pulse rounded-4xl bg-surface-2" /></div>;

  const lvl = levelInfo(s.xp);
  const streak = liveStreak(s);
  const today = dayKey();
  const todayData = s.daily[today];
  const todayXp = todayData?.xp ?? 0;
  const goalPct = Math.min(1, todayXp / s.profile.dailyGoal);
  const quests = questsForDay(today, s.profile.worlds[0]);
  const claimed = s.questsClaimed[today] ?? [];
  const due = Object.values(s.cards).filter((c) => c.due <= today).length;
  const league = leagueFor(s.weekly.xp);
  const nextLeague = LEAGUES[LEAGUES.findIndex((l) => l.id === league.id) + 1];

  const allLessons = catalog.flatMap((c) => c.lessons.map((l) => ({ ...l, subject: c })));
  const last = s.lastLesson ? allLessons.find((l) => l.id === s.lastLesson) : undefined;
  const lastNextLesson = last && (s.lessons[last.id] ? last.subject.lessons.find((l) => !s.lessons[l.id]) : last);
  const lastNext = last && lastNextLesson ? { ...lastNextLesson, subject: last.subject } : undefined;

  const myWorlds = s.profile.worlds.length ? s.profile.worlds : worlds.map((w) => w.id);
  const recommended = catalog
    .filter((c) => myWorlds.includes(c.world))
    .map((c) => ({ c, done: c.lessons.filter((l) => s.lessons[l.id]).length, stageMatch: s.profile.stage ? c.stages.includes(s.profile.stage) : true }))
    .sort((a, b) => Number(b.stageMatch) - Number(a.stageMatch) || myWorlds.indexOf(a.c.world) - myWorlds.indexOf(b.c.world) || b.done - a.done)
    .slice(0, 6);

  // Last 7 days for the streak strip
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const k = dayKey(d);
    return { k, label: d.toLocaleDateString(undefined, { weekday: "narrow" }), active: (s.daily[k]?.xp ?? 0) > 0, today: k === today };
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {!s.profile.onboarded && (
        <Link href="/onboarding" className="mb-6 flex items-center gap-4 rounded-3xl border border-accent/30 bg-accent/10 p-4 transition hover:bg-accent/15">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="flex-1">
            <b>Personalise your quest</b> — tell us your stage and interests in 30 seconds.
          </span>
          <ArrowRight className="h-5 w-5 text-accent" />
        </Link>
      )}

      {/* header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex flex-1 items-center gap-4">
          <Avatar emoji={s.profile.avatar} frame={s.profile.frame} size={72} />
          <div>
            <p className="text-sm text-muted">{greeting()},</p>
            <h1 className="font-display text-3xl font-bold sm:text-4xl">{s.profile.name || "Explorer"} 👋</h1>
            <p className="mt-1 text-sm text-muted">
              Level {lvl.level} {lvl.title}
              {s.profile.stage && <> · {stageById[s.profile.stage].label}</>}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:w-[420px]">
          <Stat icon={<Flame className={clsx("h-5 w-5", streak ? "fill-orange-400 text-orange-500" : "text-muted")} />} value={streak} label="day streak" />
          <Stat icon={<Zap className="h-5 w-5 fill-accent text-accent" />} value={s.xp} label="total XP" />
          <Stat icon={<Coins className="h-5 w-5 text-amber-500" />} value={s.coins} label="coins" />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          {/* continue */}
          {lastNext ? (
            <Link href={lastNext.href} data-world={lastNext.subject.world} className="group relative block overflow-hidden rounded-4xl p-6 text-white shadow-soft sm:p-8" style={{ background: `linear-gradient(135deg, ${lastNext.subject.colors[0]}, ${lastNext.subject.colors[1]})` }}>
              <div className="dot-bg absolute inset-0 opacity-20" />
              <div className="relative flex items-center gap-5">
                <span className="hidden text-6xl sm:block">{lastNext.subject.icon}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">Continue · {lastNext.subject.title}</div>
                  <div className="mt-1 truncate font-display text-2xl font-bold sm:text-3xl">{lastNext.title}</div>
                  <div className="mt-1 text-sm opacity-85">
                    {lastNext.topicTitle} · {lastNext.minutes} min · +{lastNext.xp} XP
                  </div>
                </div>
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/20 backdrop-blur transition group-hover:scale-110">
                  <Play className="h-7 w-7 fill-white" />
                </span>
              </div>
            </Link>
          ) : (
            <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-accent to-accent-2 p-8 text-white">
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">Your first quest</div>
              <div className="mt-2 font-display text-3xl font-bold">Pick a subject and start lesson one.</div>
              {recommended[0] && (
                <Link href={recommended[0].c.lessons[0]?.href ?? `/learn/${recommended[0].c.slug}`} className="btn mt-5 bg-white text-ink hover:bg-white/90">
                  Start {recommended[0].c.title} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}

          {/* recommended */}
          <section>
            <div className="mb-4 flex items-end justify-between">
              <h2 className="font-display text-xl font-bold">Your subjects</h2>
              <Link href="/explore" className="text-sm font-medium text-accent">
                Browse all →
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {recommended.map(({ c, done }) => (
                <Link key={c.slug} href={`/learn/${c.slug}`} className="card group flex items-center gap-4 p-4 transition hover:-translate-y-0.5 hover:border-accent/40">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-3xl transition group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${c.colors[0]}, ${c.colors[1]})` }}>
                    {c.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">{c.title}</span>
                    <span className="block truncate text-xs text-muted">
                      {worldById[c.world].name} · {c.lessons.length} lessons
                    </span>
                    <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-surface-2">
                      <span className="block h-full rounded-full bg-gradient-to-r from-accent to-accent-2" style={{ width: `${(done / Math.max(1, c.lessons.length)) * 100}%` }} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* world shortcuts */}
          <section className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {worlds.map((w) => (
              <Link key={w.id} href={w.href} className="card flex flex-col items-center gap-2 p-4 text-center transition hover:-translate-y-0.5">
                <span className="text-3xl">{w.emoji}</span>
                <span className="text-xs font-semibold">{w.name}</span>
              </Link>
            ))}
          </section>

          <Heatmap daily={s.daily} />
        </div>

        {/* right column */}
        <div className="space-y-6">
          <div className="card p-5">
            <div className="flex items-center gap-4">
              <ScoreRing pct={goalPct} size={96} label={`${todayXp}`} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">Daily goal</div>
                <div className="font-display text-xl font-bold">{goalPct >= 1 ? "Goal smashed! 🎉" : `${s.profile.dailyGoal - todayXp} XP to go`}</div>
                <div className="text-sm text-muted">Target {s.profile.dailyGoal} XP / day</div>
              </div>
            </div>
            <div className="mt-5 flex justify-between">
              {week.map((d) => (
                <div key={d.k} className="flex flex-col items-center gap-1">
                  <span className={clsx("grid h-9 w-9 place-items-center rounded-full text-sm", d.active ? "bg-gradient-to-br from-orange-400 to-pink-500 text-white" : "bg-surface-2 text-muted", d.today && "ring-2 ring-accent ring-offset-2 ring-offset-surface")}>
                    {d.active ? <Flame className="h-4 w-4 fill-white" /> : ""}
                  </span>
                  <span className="text-[11px] text-muted">{d.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-2xl bg-sky-500/10 px-3 py-2 text-sm text-sky-600 dark:text-sky-300">
              <Snowflake className="h-4 w-4" /> {s.streak.freezes} streak freeze{s.streak.freezes === 1 ? "" : "s"} equipped · best streak {s.streak.best}
            </div>
          </div>

          <div className="card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-bold">Daily quests</h3>
              <span className="text-xs text-muted">resets at midnight</span>
            </div>
            <ul className="space-y-3">
              {quests.map((q) => {
                const value = q.metric === "xp" ? todayXp : (todayData?.counters[q.metric] ?? 0);
                const complete = value >= q.target;
                const isClaimed = claimed.includes(q.id);
                return (
                  <li key={q.id} className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface-2 text-xl">{q.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold">{q.title}</div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
                        <motion.div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500" initial={{ width: 0 }} animate={{ width: `${Math.min(1, value / q.target) * 100}%` }} />
                      </div>
                      <div className="mt-1 text-[11px] text-muted">
                        {Math.min(value, q.target)} / {q.target}
                      </div>
                    </div>
                    {isClaimed ? (
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-good/15 text-good">
                        <Check className="h-5 w-5" />
                      </span>
                    ) : (
                      <button disabled={!complete} onClick={() => s.claimQuest(q.id)} className={clsx("flex h-9 items-center gap-1 rounded-xl px-2.5 text-xs font-bold transition", complete ? "animate-pulse bg-amber-400 text-amber-950 hover:brightness-105" : "bg-surface-2 text-muted")}>
                        <Gift className="h-4 w-4" /> {q.coins}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <Link href="/review" className="card flex items-center gap-4 p-5 transition hover:border-accent/40">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-500">
              <Repeat className="h-6 w-6" />
            </span>
            <span className="flex-1">
              <span className="block font-semibold">Spaced review</span>
              <span className="text-sm text-muted">{due ? `${due} card${due === 1 ? "" : "s"} ready to strengthen` : Object.keys(s.cards).length ? "All caught up — come back tomorrow" : "Finish lessons to build your deck"}</span>
            </span>
            {due > 0 && <span className="rounded-full bg-violet-500 px-2.5 py-1 text-xs font-bold text-white">{due}</span>}
          </Link>

          <Link href="/leaderboard" className="card flex items-center gap-4 p-5 transition hover:border-accent/40">
            <span className="text-4xl">{league.emoji}</span>
            <span className="flex-1">
              <span className="block font-semibold">{league.name} League</span>
              <span className="text-sm text-muted">{s.weekly.xp} XP this week{nextLeague ? ` · ${nextLeague.min - s.weekly.xp} to ${nextLeague.name}` : " · top league!"}</span>
            </span>
            <Trophy className="h-5 w-5 text-amber-500" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="card p-3 text-center">
      <div className="flex items-center justify-center gap-1.5 font-display text-2xl font-bold">
        {icon}
        {value.toLocaleString()}
      </div>
      <div className="text-[11px] text-muted">{label}</div>
    </div>
  );
}

function Heatmap({ daily }: { daily: Record<string, { xp: number }> }) {
  const weeks = 18;
  const cells = useMemo(() => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - (weeks * 7 - 1) - ((end.getDay() + 6) % 7) + 6);
    const out: { k: string; xp: number }[] = [];
    for (let i = 0; i < weeks * 7; i++) {
      const d = new Date(end);
      d.setDate(end.getDate() - (weeks * 7 - 1 - i));
      const k = dayKey(d);
      out.push({ k, xp: daily[k]?.xp ?? 0 });
    }
    return out;
  }, [daily]);
  const total = cells.reduce((a, c) => a + c.xp, 0);
  const activeDays = cells.filter((c) => c.xp > 0).length;
  return (
    <section className="card p-5">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="font-display text-lg font-bold">Learning activity</h2>
        <span className="text-xs text-muted">
          {activeDays} active days · {total} XP
        </span>
      </div>
      <div className="grid auto-cols-[14px] grid-flow-col grid-rows-7 gap-1 overflow-x-auto">
        {cells.map((c) => (
          <span
            key={c.k}
            title={`${c.k}: ${c.xp} XP`}
            className="h-3.5 w-3.5 rounded-[4px]"
            style={{ background: c.xp === 0 ? "rgb(var(--surface-2))" : `rgb(var(--accent) / ${Math.min(1, 0.25 + c.xp / 120)})` }}
          />
        ))}
      </div>
    </section>
  );
}
