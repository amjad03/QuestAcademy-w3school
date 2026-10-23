"use client";

import Link from "next/link";
import { Flame, Zap } from "lucide-react";
import { useT } from "@/i18n";
import { useLearner, liveStreak } from "@/lib/store";
import { BADGES, levelInfo } from "@/lib/gamification";
import { BadgeMedal } from "@/components/ui/GameIcon";
import { LeagueCard, QuestsCard } from "@/components/shell/RailCards";
import { useFmt } from "../ui";
import { CoursePathLink, Greeting, HomeFrame, LanguageNudge, MyCourses, SeeItCard, UpNextHero, WeeklyActivity } from "./common";

/** Adventure (11–14): Khan's learner home with light motivation — energy points, streak and badges. */
export function AdventureHome() {
  const t = useT();
  return (
    <HomeFrame
      top={<Greeting sub={t("khan.adventure.sub", "Pick up where you left off. Every lesson you finish earns energy points.")} />}
      rail={
        <>
          <WeeklyActivity energy />
          <LanguageNudge />
          <QuestsCard limit={3} />
          <LeagueCard />
        </>
      }
    >
      <UpNextHero secondary={{ href: "/learn?view=path", label: t("khan.coursePath", "Course path") }} />
      <Motivation />
      <MyCourses />
      <SeeItCard minAge={11} />
      <CoursePathLink />
    </HomeFrame>
  );
}

function Motivation() {
  const t = useT();
  const f = useFmt();
  const xp = useLearner((s) => s.xp);
  const streak = useLearner((s) => liveStreak(s));
  const best = useLearner((s) => s.streak.best);
  const earned = useLearner((s) => s.badges);
  const lvl = levelInfo(xp);
  const badges = BADGES.filter((b) => earned[b.id]).sort((a, b) => earned[b.id].localeCompare(earned[a.id]));
  const nextBadge = BADGES.find((b) => !earned[b.id]);

  return (
    <section aria-labelledby="kh-motivation" className="grid gap-4 md:grid-cols-3">
      <h2 id="kh-motivation" className="sr-only">
        {t("khan.adventure.progress", "Your progress")}
      </h2>
      <div className="card p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted">
          <Zap className="h-4 w-4 text-accent-2" aria-hidden /> {t("khan.energyPoints", "Energy points")}
        </p>
        <p className="mt-1 text-[1.75rem] font-bold tabular-nums leading-tight">{f.n(xp)}</p>
        <p className="mt-1 text-[0.8125rem] text-muted">{t("khan.adventure.level", "Level {n} · {title}", { n: f.n(lvl.level), title: lvl.title })}</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuenow={Math.round(lvl.progress * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={t("khan.adventure.toNext", "Progress to the next level")}>
          <div className="h-full rounded-full bg-accent-2" style={{ width: `${lvl.progress * 100}%` }} />
        </div>
        <p className="mt-1.5 text-xs text-muted">{t("khan.adventure.pointsToGo", "{n} points to level {next}", { n: f.n(lvl.needed - lvl.into), next: f.n(lvl.level + 1) })}</p>
      </div>
      <div className="card p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-muted">
          <Flame className="h-4 w-4 text-streak" aria-hidden /> {t("khan.streak", "Day streak")}
        </p>
        <p className="mt-1 text-[1.75rem] font-bold tabular-nums leading-tight">{f.n(streak)}</p>
        <p className="mt-1 text-[0.8125rem] text-muted">{streak ? t("khan.adventure.streakKeep", "Learn something today to keep it going.") : t("khan.adventure.streakStart", "Finish one lesson today to start a streak.")}</p>
        <p className="mt-3 text-xs text-muted">{t("khan.adventure.best", "Best: {n} days", { n: f.n(best) })}</p>
      </div>
      <div className="card p-5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm font-semibold text-muted">{t("khan.badges", "Badges")}</p>
          <Link href="/profile" className="kh-link text-sm">
            {t("khan.seeAll", "See all")}
          </Link>
        </div>
        <p className="mt-1 text-[1.75rem] font-bold tabular-nums leading-tight">
          {f.n(badges.length)}
          <span className="text-base font-semibold text-muted">/{f.n(BADGES.length)}</span>
        </p>
        {badges.length ? (
          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={t("khan.badgesEarned", "Badges earned")}>
            {badges.slice(0, 6).map((b) => (
              <li key={b.id} title={b.name}>
                <BadgeMedal icon={b.icon} color={b.color} size={32} />
                <span className="sr-only">{b.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          nextBadge && (
            <p className="mt-2 flex items-center gap-2 text-[0.8125rem] text-muted">
              <BadgeMedal icon={nextBadge.icon} color={nextBadge.color} size={28} locked />
              <span className="min-w-0">{t("khan.adventure.nextBadge", "Next: {name} — {desc}", { name: nextBadge.name, desc: nextBadge.description })}</span>
            </p>
          )
        )}
      </div>
    </section>
  );
}
