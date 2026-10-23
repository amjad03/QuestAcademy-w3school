"use client";

import Link from "next/link";
import { Coins, ShieldHalf } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { dayKey, leagueFor, LEAGUES, questsForDay, weekKey } from "@/lib/gamification";
import { useAuth, useHydrated } from "@/components/providers";
import { ProgressBar } from "@/components/ui/Progress";
import { GameIcon } from "@/components/ui/GameIcon";
import { Mascot } from "@/components/brand/Mascot";
import { useMode } from "@/lib/useMode";
import { SocialOptInCard } from "@/components/modes/adventure/SocialOptIn";
import { useT } from "@/i18n";

export function RailCard({ title, action, children, className }: { title?: string; action?: { href: string; label: string }; children: React.ReactNode; className?: string }) {
  return (
    <section className={clsx("card p-5", className)}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && <h2 className="text-lg font-black">{title}</h2>}
          {action && (
            <Link href={action.href} className="text-sm font-extrabold uppercase tracking-wide text-accent hover:brightness-110">
              {action.label}
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export function LeagueCard() {
  const hydrated = useHydrated();
  const mode = useMode();
  const optedIn = useLearner((s) => Boolean(s.profile.socialOptIn));
  const weekly = useLearner((s) => (s.weekly.week === weekKey() ? s.weekly.xp : 0));
  const t = useT();
  const leagueName: Record<string, string> = {
    bronze: t("shell.league.bronze", "Bronze"),
    silver: t("shell.league.silver", "Silver"),
    gold: t("shell.league.gold", "Gold"),
    sapphire: t("shell.league.sapphire", "Sapphire"),
    ruby: t("shell.league.ruby", "Ruby"),
    amethyst: t("shell.league.amethyst", "Amethyst"),
  };
  if (!hydrated) return null;
  // Explore: no leagues at all. Adventure: leagues are opt-in.
  if (mode.social === "off") return null;
  if (mode.social === "opt-in" && !optedIn) return <SocialOptInCard compact />;
  const league = leagueFor(weekly);
  const next = LEAGUES[LEAGUES.findIndex((l) => l.id === league.id) + 1];
  return (
    <RailCard title={t("shell.league.title", "{name} League", { name: leagueName[league.id] ?? league.name })} action={{ href: "/leaderboard", label: t("shell.league.view", "View league") }}>
      <div className="flex items-center gap-4">
        <ShieldHalf className="h-12 w-12 shrink-0" style={{ color: league.color, fill: league.color }} strokeWidth={1.5} />
        <p className="text-[15px] font-bold leading-6 text-muted">
          {weekly ? (
            <>
              {t("shell.league.earnedBefore", "You’ve earned")} <b className="text-ink">{t("shell.league.xp", "{n} XP", { n: weekly })}</b> {t("shell.league.earnedAfter", "this week.")}{" "}
              {next ? t("shell.league.toNext", "{n} more XP to reach {name}.", { n: next.min - weekly, name: leagueName[next.id] ?? next.name }) : t("shell.league.top", "You’re in the top league!")}
            </>
          ) : (
            t("shell.league.join", "Complete a lesson to join this week’s league and compete with other learners.")
          )}
        </p>
      </div>
    </RailCard>
  );
}

export function QuestsCard({ limit }: { limit?: number }) {
  const hydrated = useHydrated();
  const s = useLearner();
  const t = useT();
  if (!hydrated) return null;
  const today = dayKey();
  const data = s.daily[today];
  const quests = questsForDay(today, s.profile.worlds[0]).slice(0, limit);
  const claimed = s.questsClaimed[today] ?? [];
  return (
    <RailCard title={t("shell.quests.title", "Daily quests")} action={{ href: "/quests", label: t("shell.quests.viewAll", "View all") }}>
      <ul className="space-y-5">
        {quests.map((q) => {
          const value = q.metric === "xp" ? (data?.xp ?? 0) : (data?.counters[q.metric] ?? 0);
          const done = value >= q.target;
          const isClaimed = claimed.includes(q.id);
          return (
            <li key={q.id} className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-warn/15">
                <GameIcon name={q.icon} className="h-5 w-5 text-warn-shade" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 text-[15px] font-extrabold">{q.title}</div>
                <div className="flex items-center gap-2">
                  <ProgressBar value={value / q.target} height={14} color="rgb(var(--warn))" />
                  <span className="w-12 shrink-0 text-right text-xs font-bold text-muted">
                    {Math.min(value, q.target)}/{q.target}
                  </span>
                </div>
              </div>
              {done && !isClaimed ? (
                <button onClick={() => s.claimQuest(q.id)} className="btn-gold !px-3 !py-1.5 text-xs">
                  <Coins className="h-4 w-4" /> {q.coins}
                </button>
              ) : (
                <span className={clsx("grid h-9 w-9 place-items-center rounded-xl", isClaimed ? "bg-good-soft text-good" : "bg-surface-2 text-muted")}>
                  {isClaimed ? "✓" : <Coins className="h-4 w-4" />}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </RailCard>
  );
}

export function SaveProgressCard() {
  const { enabled, user } = useAuth();
  const hydrated = useHydrated();
  const t = useT();
  if (!hydrated || !enabled || user) return null;
  return (
    <RailCard>
      <div className="flex items-center gap-4">
        <Mascot pose="wave" size={64} animate={false} />
        <div>
          <h2 className="text-lg font-black">{t("shell.save.title", "Create a profile to save your progress!")}</h2>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        <Link href="/auth?mode=signup" className="btn-good w-full">
          {t("shell.save.create", "Create a profile")}
        </Link>
        <Link href="/auth" className="btn-ghost w-full">
          {t("shell.save.signIn", "Sign in")}
        </Link>
      </div>
    </RailCard>
  );
}

export function RailFooter() {
  const t = useT();
  return (
    <nav className="flex flex-wrap justify-center gap-x-4 gap-y-1 px-4 text-xs font-extrabold uppercase tracking-wide text-muted">
      <Link href="/" className="hover:text-accent">{t("shell.footer.about", "About")}</Link>
      <Link href="/courses" className="hover:text-accent">{t("shell.footer.courses", "Courses")}</Link>
      <Link href="/settings" className="hover:text-accent">{t("shell.footer.settings", "Settings")}</Link>
      <Link href="/studio/videos" className="hover:text-accent">{t("shell.footer.studio", "Studio")}</Link>
    </nav>
  );
}
