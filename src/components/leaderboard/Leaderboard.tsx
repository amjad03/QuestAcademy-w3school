"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Info, ShieldHalf } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { AVATARS, LEAGUES, leagueFor, weekKey } from "@/lib/gamification";
import { fetchLeaderboard, type LeaderRow } from "@/lib/supabase";
import { useAuth, useHydrated } from "@/components/providers";
import { Avatar } from "@/components/shell/Avatar";
import { PageColumns } from "@/components/shell/AppShell";
import { QuestsCard, RailCard, RailFooter, SaveProgressCard } from "@/components/shell/RailCards";
import { Mascot } from "@/components/brand/Mascot";
import { useMode } from "@/lib/useMode";
import { SocialOptInCard } from "@/components/modes/adventure/SocialOptIn";
import { useT } from "@/i18n";

const NAMES = ["Aarav", "Sofia", "Kenji", "Amara", "Lucas", "Priya", "Noah", "Zara", "Mateo", "Ishaan", "Chloe", "Omar", "Ananya", "Leo", "Fatima", "Ethan", "Meera", "Yuki", "Diego", "Sara", "Arjun", "Nia", "Felix", "Riya", "Kai", "Elif", "Tomás", "Aditi"];
const COLORS = AVATARS.map((a) => a.id);
const PROMOTE = 5;
const DEMOTE = 3;

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
  const dow = ((new Date().getDay() + 6) % 7) + 1;
  return Array.from({ length: 19 }, (_, i) => ({
    id: `bot-${i}`,
    display_name: NAMES[Math.floor(r() * NAMES.length)] + " " + String.fromCharCode(65 + Math.floor(r() * 26)) + ".",
    avatar: COLORS[Math.floor(r() * COLORS.length)],
    weekly_xp: Math.round(base * (0.2 + r() * 1.6) * (dow / 7)),
    xp: 0,
    level: 1 + Math.floor(r() * 12),
    streak: Math.floor(r() * 30),
  }));
}

export function Leaderboard() {
  const t = useT();
  const hydrated = useHydrated();
  const { user, enabled } = useAuth();
  const profile = useLearner((s) => s.profile);
  const weekly = useLearner((s) => (s.weekly.week === weekKey() ? s.weekly.xp : 0));
  const streak = useLearner((s) => s.streak.count);
  const [remote, setRemote] = useState<LeaderRow[] | null>(null);

  useEffect(() => {
    if (user) void fetchLeaderboard().then(setRemote);
  }, [user]);

  const mode = useMode();
  const meId = user?.id ?? "me";
  // Adventure learners appear by nickname only — never their real name.
  const publicName = mode.id === "adventure" ? profile.nickname || t("board.defaultNickname", "Explorer") : profile.name || t("board.defaultName", "You");
  const rows = useMemo(() => {
    const me: LeaderRow = { id: meId, display_name: publicName, avatar: profile.avatar, weekly_xp: weekly, xp: 0, level: 0, streak };
    const others = remote ? remote.filter((r) => r.id !== me.id) : practiceLeague(weekly, weekKey());
    return [...others, me].sort((a, b) => b.weekly_xp - a.weekly_xp);
  }, [remote, weekly, profile, streak, meId, publicName]);

  const rail = (
    <>
      <SaveProgressCard />
      {mode.social === "opt-in" && profile.socialOptIn && <SocialOptInCard />}
      <RailCard title={t("board.how.title", "How leagues work")}>
        <ul className="space-y-2 text-sm font-semibold leading-6 text-muted">
          <li>{t("board.how.earn", "Earn XP from lessons, practice and tests to climb the board.")}</li>
          <li>{t("board.how.promote", "The top {n} move up a league when the week ends on Sunday.", { n: PROMOTE })}</li>
          <li>{t("board.how.demote", "The bottom {n} drop down a league.", { n: DEMOTE })}</li>
        </ul>
      </RailCard>
      <QuestsCard limit={2} />
      <RailFooter />
    </>
  );

  if (!hydrated) return <PageColumns rail={rail}><div className="h-96 animate-pulse rounded-2xl bg-surface-2" /></PageColumns>;

  if (mode.social === "off")
    return (
      <PageColumns rail={rail}>
        <div className="mx-auto flex max-w-md flex-col items-center py-10 text-center">
          <Mascot pose="wave" size={140} />
          <h1 className="mt-6 text-3xl font-black">{t("board.off.title", "Leagues are for older explorers")}</h1>
          <p className="mt-2 font-semibold text-muted">{t("board.off.body", "Here, every star you earn is just for you. Keep learning and filling your sticker book!")}</p>
          <Link href="/learn" className="btn-primary mt-8">
            {t("board.off.back", "Back to learning")}
          </Link>
        </div>
      </PageColumns>
    );

  if (mode.social === "opt-in" && !profile.socialOptIn)
    return (
      <PageColumns rail={rail}>
        <div className="mx-auto max-w-md py-6">
          <div className="mb-6 flex justify-center">
            <ShieldHalf className="h-20 w-20 fill-warn text-warn" strokeWidth={1.4} />
          </div>
          <h1 className="text-center text-3xl font-black">{t("board.optIn.title", "Weekly leagues")}</h1>
          <p className="mt-2 text-center font-semibold text-muted">{t("board.optIn.body", "Leagues are optional. Join with a nickname to race other explorers for the top spot each week.")}</p>
          <SocialOptInCard className="mt-8" />
        </div>
      </PageColumns>
    );

  const league = leagueFor(weekly);
  const end = new Date(weekKey() + "T00:00:00");
  end.setDate(end.getDate() + 7);
  const daysLeft = Math.max(1, Math.ceil((end.getTime() - Date.now()) / 86_400_000));

  return (
    <PageColumns rail={rail}>
      <div className="mx-auto max-w-[600px]">
        {/* league shields */}
        <div className="flex items-end justify-center gap-2 sm:gap-4">
          {LEAGUES.map((l) => {
            const current = l.id === league.id;
            const reached = weekly >= l.min;
            return (
              <ShieldHalf
                key={l.id}
                className={clsx("shrink-0 transition", current ? "h-16 w-16" : "h-10 w-10")}
                style={{ color: reached ? l.color : "rgb(var(--line))", fill: reached ? l.color : "rgb(var(--line))" }}
                strokeWidth={1.4}
                aria-label={l.name}
              />
            );
          })}
        </div>
        <h1 className="mt-5 text-center text-3xl font-black">{t("board.leagueTitle", "{name} League", { name: league.name })}</h1>
        <p className="mt-1 text-center font-bold text-muted">
          {t("board.advance", "Top {n} advance to the next league", { n: PROMOTE })} ·{" "}
          {daysLeft === 1 ? t("board.daysLeft.one", "{n} day left", { n: daysLeft }) : t("board.daysLeft.other", "{n} days left", { n: daysLeft })}
        </p>

        {!remote && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-surface-2 p-4 text-sm font-semibold text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              {t("board.practice.note", "This is a practice league with simulated learners.")}{" "}
              {enabled ? (
                <>
                  <Link href="/auth" className="font-extrabold text-accent">
                    {t("board.practice.signIn", "Sign in")}
                  </Link>{" "}
                  {t("board.practice.compete", "to compete with real learners.")}
                </>
              ) : (
                t("board.practice.connect", "Connect Supabase (see README) to enable live leagues.")
              )}
            </span>
          </div>
        )}

        <ol className="mt-6">
          {rows.map((r, i) => {
            const me = r.id === meId;
            const zone = i < PROMOTE ? "up" : i >= rows.length - DEMOTE ? "down" : null;
            return (
              <li key={r.id}>
                {i === PROMOTE && <ZoneDivider label={t("board.zone.promotion", "Promotion zone")} color="rgb(var(--good))" />}
                {i === rows.length - DEMOTE && <ZoneDivider label={t("board.zone.demotion", "Demotion zone")} color="rgb(var(--bad))" />}
                <div className={clsx("flex items-center gap-4 rounded-2xl px-4 py-3", me && "bg-accent-soft")}>
                  <span className={clsx("w-7 text-center text-lg font-black", i === 0 ? "text-[#E0A100]" : i === 1 ? "text-[#94A3B8]" : i === 2 ? "text-[#C2773A]" : zone === "up" ? "text-good" : zone === "down" ? "text-bad" : "text-muted")}>{i + 1}</span>
                  <Avatar name={r.display_name} color={r.avatar} size={44} />
                  <span className={clsx("min-w-0 flex-1 truncate text-[17px] font-extrabold", me && "text-accent")}>{me ? t("board.you", "{name} (you)", { name: r.display_name }) : r.display_name}</span>
                  {zone === "up" && <ChevronUp className="h-5 w-5 shrink-0 text-good" aria-label={t("board.zone.promotion", "Promotion zone")} />}
                  {zone === "down" && <ChevronDown className="h-5 w-5 shrink-0 text-bad" aria-label={t("board.zone.demotion", "Demotion zone")} />}
                  <span className="w-20 shrink-0 text-right font-bold text-muted">{t("board.xp", "{n} XP", { n: r.weekly_xp })}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </PageColumns>
  );
}

function ZoneDivider({ label, color }: { label: string; color: string }) {
  return (
    <div className="my-2 flex items-center gap-3 px-4 text-xs font-extrabold uppercase tracking-wide" style={{ color }}>
      <span className="h-0.5 flex-1" style={{ background: color, opacity: 0.4 }} />
      {label}
      <span className="h-0.5 flex-1" style={{ background: color, opacity: 0.4 }} />
    </div>
  );
}
