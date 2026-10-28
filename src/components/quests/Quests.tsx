"use client";

import { useMode } from "@/lib/useMode";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Coins, Flame, Snowflake } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { liveStreak, useLearner } from "@/lib/store";
import { badgeVisible } from "@/lib/classScope";
import { BADGES, dayKey, questsForDay } from "@/lib/gamification";
import { useHydrated } from "@/components/providers";
import { PageColumns } from "@/components/shell/AppShell";
import { LeagueCard, RailFooter, SaveProgressCard } from "@/components/shell/RailCards";
import { BadgeMedal, GameIcon } from "@/components/ui/GameIcon";
import { ProgressBar } from "@/components/ui/Progress";
import { Mascot } from "@/components/brand/Mascot";
import { badgeProgress } from "@/components/profile/badgeProgress";
import { useT } from "@/i18n";

export function Quests() {
  const t = useT();
  const hydrated = useHydrated();
  const s = useLearner();
  const [monthOffset, setMonthOffset] = useState(0);

  const young = useMode().young;
  // For young learners every rail card is hidden, so drop the empty column.
  const rail = young ? undefined : (
    <>
      <SaveProgressCard />
      <LeagueCard />
      <RailFooter />
    </>
  );

  if (!hydrated) return <PageColumns rail={rail}><div className="h-96 animate-pulse rounded-2xl bg-surface-2" /></PageColumns>;

  const today = dayKey();
  const data = s.daily[today];
  const quests = questsForDay(today, s.profile.worlds[0]);
  const claimed = s.questsClaimed[today] ?? [];
  const streak = liveStreak(s);
  const goalXp = data?.xp ?? 0;

  // hours left today
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  const hoursLeft = Math.ceil((end.getTime() - now.getTime()) / 3_600_000);

  // calendar
  const month = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const daysIn = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const lead = (month.getDay() + 6) % 7;
  const cells = [...Array(lead).fill(null), ...Array.from({ length: daysIn }, (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1))];
  const activeDays = cells.filter((d) => d && (s.daily[dayKey(d)]?.xp ?? 0) > 0).length;

  const nextBadges = BADGES.filter((b) => !s.badges[b.id] && badgeVisible(s.profile, b.id))
    .map((b) => ({ b, p: badgeProgress(b.id, s) }))
    .filter((x) => x.p)
    .sort((a, b) => b.p!.value / b.p!.target - a.p!.value / a.p!.target)
    .slice(0, 4);

  return (
    <PageColumns rail={rail}>
      {/* hero */}
      <section className="flex items-center gap-6 rounded-3xl bg-streak p-6 text-white" style={{ boxShadow: "inset 0 -6px 0 #D97000" }}>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-white/80">{t("quests.hero.eyebrow", "Daily quests")}</p>
          <h1 className="mt-1 text-3xl font-black">{t("quests.hero.title", "Complete quests to earn coins!")}</h1>
          <p className="mt-2 font-bold text-white/85">
            {hoursLeft === 1 ? t("quests.hero.reset.one", "New quests in {n} hour", { n: hoursLeft }) : t("quests.hero.reset.other", "New quests in {n} hours", { n: hoursLeft })}
          </p>
        </div>
        <Mascot pose="cheer" size={110} className="hidden sm:block" />
      </section>

      {/* daily quests */}
      <section className="card mt-6 divide-y-2 divide-line">
        {[{ id: "goal", title: t("quests.dailyGoal", "Earn {n} XP (daily goal)", { n: s.profile.dailyGoal }), icon: "zap", value: goalXp, target: s.profile.dailyGoal, coins: 0 }, ...quests.map((q) => ({ id: q.id, title: q.title, icon: q.icon, value: q.metric === "xp" ? goalXp : (data?.counters[q.metric] ?? 0), target: q.target, coins: q.coins }))].map((q) => {
          const done = q.value >= q.target;
          const isClaimed = claimed.includes(q.id);
          return (
            <div key={q.id} className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-warn/15 sm:h-14 sm:w-14">
                <GameIcon name={q.icon} className="h-7 w-7 text-warn-shade" />
              </span>
              <div className="min-w-0 flex-1">
                {/* Reward sits beside the title so every progress bar runs the full width. */}
                <div className="flex items-center justify-between gap-3">
                  <h3 className="min-w-0 text-base font-black leading-snug sm:text-lg">{q.title}</h3>
                  {q.coins > 0 &&
                    (isClaimed ? (
                      <span className="shrink-0 text-xs font-extrabold uppercase tracking-wide text-good">{t("quests.claimed", "Claimed")}</span>
                    ) : (
                      <button disabled={!done} onClick={() => s.claimQuest(q.id)} className={clsx("shrink-0 !px-3 !py-1.5 text-sm", done ? "btn-gold" : "btn-ghost !text-muted")}>
                        <Coins className="h-4 w-4" /> {q.coins}
                      </button>
                    ))}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <ProgressBar value={q.value / q.target} height={16} color="rgb(var(--warn))" />
                  <span className="shrink-0 text-right text-sm font-bold tabular-nums text-muted">
                    {Math.min(q.value, q.target)} / {q.target}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* streak calendar */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-black">{t("quests.streak.title", "Streak")}</h2>
          <Link href="/shop" className="text-sm font-extrabold uppercase tracking-wide text-accent">
            {t("quests.streak.getFreezes", "Get freezes")}
          </Link>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="card flex items-center gap-3 p-4">
            <Flame className={clsx("h-8 w-8", streak ? "fill-streak text-streak" : "text-line")} />
            <div>
              <div className="text-xl font-black">{streak}</div>
              <div className="text-sm font-bold text-muted">{t("quests.streak.current", "Current streak")}</div>
            </div>
          </div>
          <div className="card flex items-center gap-3 p-4">
            <Flame className="h-8 w-8 text-muted" />
            <div>
              <div className="text-xl font-black">{s.streak.best}</div>
              <div className="text-sm font-bold text-muted">{t("quests.streak.longest", "Longest streak")}</div>
            </div>
          </div>
          <div className="card flex items-center gap-3 p-4">
            <Snowflake className="h-8 w-8 text-[#1CB0F6]" />
            <div>
              <div className="text-xl font-black">{s.streak.freezes}</div>
              <div className="text-sm font-bold text-muted">{t("quests.streak.freezes", "Freezes equipped")}</div>
            </div>
          </div>
        </div>

        <div className="card mt-4 p-5">
          <div className="flex items-center justify-between">
            <button onClick={() => setMonthOffset((m) => m - 1)} className="grid h-9 w-9 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label={t("quests.calendar.prev", "Previous month")}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-center">
              <div className="font-black">{month.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</div>
              <div className="text-xs font-bold text-muted">{activeDays === 1 ? t("quests.calendar.active.one", "{n} day practised", { n: activeDays }) : t("quests.calendar.active.other", "{n} days practised", { n: activeDays })}</div>
            </div>
            <button onClick={() => setMonthOffset((m) => Math.min(0, m + 1))} disabled={monthOffset === 0} className="grid h-9 w-9 place-items-center rounded-xl text-muted hover:bg-surface-2 disabled:opacity-30" aria-label={t("quests.calendar.next", "Next month")}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1.5 text-center">
            {[
              t("quests.calendar.day.mon", "M"),
              t("quests.calendar.day.tue", "T"),
              t("quests.calendar.day.wed", "W"),
              t("quests.calendar.day.thu", "T"),
              t("quests.calendar.day.fri", "F"),
              t("quests.calendar.day.sat", "S"),
              t("quests.calendar.day.sun", "S"),
            ].map((d, i) => (
              <span key={i} className="text-xs font-extrabold text-muted">
                {d}
              </span>
            ))}
            {cells.map((d, i) => {
              if (!d) return <span key={i} />;
              const k = dayKey(d);
              const active = (s.daily[k]?.xp ?? 0) > 0;
              const isToday = k === today;
              return (
                <span
                  key={i}
                  title={active ? t("quests.calendar.xp", "{n} XP", { n: s.daily[k].xp }) : undefined}
                  className={clsx(
                    "mx-auto grid h-9 w-9 place-items-center rounded-full text-sm font-extrabold",
                    active ? "bg-streak text-white" : "text-muted",
                    isToday && !active && "ring-2 ring-streak",
                  )}
                >
                  {d.getDate()}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* badges in progress */}
      {nextBadges.length > 0 && (
        <section className="mt-10">
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-black">{t("quests.badges.title", "Almost there")}</h2>
            <Link href="/profile" className="text-sm font-extrabold uppercase tracking-wide text-accent">
              {t("quests.badges.all", "All achievements")}
            </Link>
          </div>
          <div className="card mt-4 divide-y-2 divide-line">
            {nextBadges.map(({ b, p }) => (
              <div key={b.id} className="flex items-center gap-4 p-4">
                <BadgeMedal icon={b.icon} color={b.color} size={52} locked />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="truncate font-black">{b.name}</h3>
                    <span className="shrink-0 text-sm font-bold text-muted">
                      {p!.value}/{p!.target}
                    </span>
                  </div>
                  <ProgressBar value={p!.value / p!.target} height={12} color="rgb(var(--warn))" className="mt-2" />
                  <p className="mt-1 text-sm font-semibold text-muted">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </PageColumns>
  );
}
