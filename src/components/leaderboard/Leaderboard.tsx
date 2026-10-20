"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Flame, Info } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { LEAGUES, leagueFor, weekKey } from "@/lib/gamification";
import { fetchLeaderboard, type LeaderRow } from "@/lib/supabase";
import { useAuth, useHydrated } from "@/components/providers";
import { Avatar } from "@/components/shell/Avatar";

const NAMES = ["Aarav", "Sofia", "Kenji", "Amara", "Lucas", "Priya", "Noah", "Zara", "Mateo", "Ishaan", "Chloe", "Omar", "Ananya", "Leo", "Fatima", "Ethan", "Meera", "Yuki", "Diego", "Sara", "Arjun", "Nia", "Felix", "Riya", "Kai", "Elif", "Tomás", "Aditi"];
const EMOJIS = ["🦊", "🐼", "🐯", "🦁", "🐨", "🐸", "🦄", "🐙", "🐧", "🦉", "🐲", "🤖", "👽", "🧙", "🚀"];

function rng(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** A believable practice league when cloud leaderboards aren't connected. */
function practiceLeague(myXp: number, week: string): LeaderRow[] {
  const r = rng(week);
  const tier = leagueFor(myXp);
  const base = Math.max(40, tier.min + 60);
  // progress through the week makes rivals' XP grow too
  const dow = ((new Date().getDay() + 6) % 7) + 1;
  return Array.from({ length: 19 }, (_, i) => ({
    id: `bot-${i}`,
    display_name: NAMES[Math.floor(r() * NAMES.length)] + " " + String.fromCharCode(65 + Math.floor(r() * 26)) + ".",
    avatar: EMOJIS[Math.floor(r() * EMOJIS.length)],
    weekly_xp: Math.round(base * (0.2 + r() * 1.6) * (dow / 7)),
    xp: 0,
    level: 1 + Math.floor(r() * 12),
    streak: Math.floor(r() * 30),
  }));
}

export function Leaderboard() {
  const hydrated = useHydrated();
  const { user, enabled } = useAuth();
  const profile = useLearner((s) => s.profile);
  const weekly = useLearner((s) => (s.weekly.week === weekKey() ? s.weekly.xp : 0));
  const streak = useLearner((s) => s.streak.count);
  const [remote, setRemote] = useState<LeaderRow[] | null>(null);

  useEffect(() => {
    if (user) void fetchLeaderboard().then(setRemote);
  }, [user]);

  const rows = useMemo(() => {
    const me: LeaderRow = { id: user?.id ?? "me", display_name: profile.name || "You", avatar: profile.avatar, weekly_xp: weekly, xp: 0, level: 0, streak };
    const others = remote ? remote.filter((r) => r.id !== me.id) : practiceLeague(weekly, weekKey());
    return [...others, me].sort((a, b) => b.weekly_xp - a.weekly_xp);
  }, [remote, weekly, profile, streak, user]);

  if (!hydrated) return <div className="mx-auto max-w-3xl px-4 py-12"><div className="h-96 animate-pulse rounded-4xl bg-surface-2" /></div>;

  const league = leagueFor(weekly);
  const myRank = rows.findIndex((r) => r.id === (user?.id ?? "me")) + 1;
  const end = new Date(weekKey() + "T00:00:00");
  end.setDate(end.getDate() + 7);
  const daysLeft = Math.ceil((end.getTime() - Date.now()) / 86_400_000);
  const top3 = rows.slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="text-center">
        <div className="flex justify-center gap-2 text-3xl">
          {LEAGUES.map((l) => (
            <span key={l.id} className={clsx("transition", l.id === league.id ? "scale-125" : "opacity-30 grayscale")} title={l.name}>
              {l.emoji}
            </span>
          ))}
        </div>
        <h1 className="mt-4 font-display text-4xl font-bold">{league.name} League</h1>
        <p className="mt-1 text-muted">
          Top 5 get promoted · {daysLeft} day{daysLeft === 1 ? "" : "s"} left this week · you’re <b className="text-ink">#{myRank}</b>
        </p>
      </div>

      {!remote && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-surface-2/60 p-4 text-sm text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            This is a <b>practice league</b> with simulated rivals.{" "}
            {enabled ? (
              <>
                <Link href="/auth" className="font-semibold text-accent">
                  Sign in
                </Link>{" "}
                to compete with real learners.
              </>
            ) : (
              <>Connect Supabase (see README) to enable live leagues with real learners.</>
            )}
          </span>
        </div>
      )}

      {/* podium */}
      <div className="mt-10 grid grid-cols-3 items-end gap-3">
        {[1, 0, 2].map((i) => {
          const r = top3[i];
          if (!r) return <div key={i} />;
          const h = ["h-36", "h-28", "h-20"][i];
          return (
            <motion.div key={r.id} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * (3 - i) }} className="flex flex-col items-center">
              <Avatar emoji={r.avatar} size={i === 0 ? 72 : 56} frame={i === 0 ? "gold" : "none"} />
              <div className="mt-2 max-w-full truncate text-sm font-semibold">{r.display_name}</div>
              <div className="font-mono text-xs text-muted">{r.weekly_xp} XP</div>
              <div className={clsx("mt-2 flex w-full items-start justify-center rounded-t-2xl pt-2 text-2xl", h, i === 0 ? "bg-gradient-to-b from-amber-300 to-amber-500" : i === 1 ? "bg-gradient-to-b from-slate-200 to-slate-400" : "bg-gradient-to-b from-orange-300 to-orange-500")}>
                {["🥇", "🥈", "🥉"][i]}
              </div>
            </motion.div>
          );
        })}
      </div>

      <ol className="card mt-0 divide-y divide-line overflow-hidden rounded-t-none">
        {rows.map((r, i) => {
          const me = r.id === (user?.id ?? "me");
          const zone = i < 5 ? "up" : i >= rows.length - 3 ? "down" : null;
          return (
            <li key={r.id} className={clsx("flex items-center gap-3 px-4 py-3", me && "bg-accent/10")}>
              <span className={clsx("w-7 text-center font-mono text-sm font-bold", i < 3 ? "text-amber-500" : "text-muted")}>{i + 1}</span>
              <Avatar emoji={r.avatar} size={36} />
              <span className="min-w-0 flex-1">
                <span className={clsx("block truncate font-medium", me && "font-bold text-accent")}>{me ? `${r.display_name} (you)` : r.display_name}</span>
                {r.streak > 0 && (
                  <span className="flex items-center gap-1 text-[11px] text-muted">
                    <Flame className="h-3 w-3 text-orange-500" /> {r.streak}-day streak
                  </span>
                )}
              </span>
              {zone === "up" && <ChevronUp className="h-4 w-4 text-good" aria-label="Promotion zone" />}
              {zone === "down" && <ChevronDown className="h-4 w-4 text-bad" aria-label="Demotion zone" />}
              <span className="w-20 text-right font-mono text-sm font-bold">{r.weekly_xp} XP</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
