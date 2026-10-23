"use client";

import Link from "next/link";
import { BookOpenCheck, CalendarDays, Flame, PencilLine, Settings, ShieldHalf, Target, Zap } from "lucide-react";
import { useLearner } from "@/lib/store";
import { BADGES, leagueFor, levelInfo, weekKey } from "@/lib/gamification";
import { masteryPoints } from "@/lib/mastery";
import { useHydrated } from "@/components/providers";
import { Avatar } from "@/components/shell/Avatar";
import { PageColumns } from "@/components/shell/AppShell";
import { LeagueCard, QuestsCard, RailFooter, SaveProgressCard } from "@/components/shell/RailCards";
import { useCatalog } from "@/components/shell/CatalogContext";
import { CourseIcon, courseStyle } from "@/components/brand/CourseIcon";
import { BadgeMedal } from "@/components/ui/GameIcon";
import { ProgressBar } from "@/components/ui/Progress";
import { stageById } from "@/content/worlds";
import { useT } from "@/i18n";
import { badgeProgress } from "./badgeProgress";

export function Profile() {
  const t = useT();
  const hydrated = useHydrated();
  const s = useLearner();
  const catalog = useCatalog();

  const rail = (
    <>
      <SaveProgressCard />
      <LeagueCard />
      <QuestsCard limit={2} />
      <RailFooter />
    </>
  );

  if (!hydrated) return <PageColumns rail={rail}><div className="h-96 animate-pulse rounded-2xl bg-surface-2" /></PageColumns>;

  const lvl = levelInfo(s.xp);
  const league = leagueFor(s.weekly.week === weekKey() ? s.weekly.xp : 0);
  const myCourses = catalog.filter((c) => s.profile.course === c.slug || s.subjectsStarted.includes(c.slug));
  const allIds = myCourses.flatMap((c) => c.lessonIds);
  const mp = masteryPoints(allIds.map((id) => s.mastery[id]));
  const joined = new Date(s.profile.createdAt);

  const earned = BADGES.filter((b) => s.badges[b.id]);
  const inProgress = BADGES.filter((b) => !s.badges[b.id]);

  return (
    <PageColumns rail={rail}>
      {/* header */}
      <section className="flex flex-col gap-6 border-b-2 border-line pb-8 sm:flex-row sm:items-end">
        <Avatar name={s.profile.name} color={s.profile.avatar} frame={s.profile.frame} size={128} />
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-3xl font-black">{s.profile.name || t("profile.defaultName", "Learner")}</h1>
          <p className="mt-1 font-bold text-muted">
            {t("profile.level", "Level {n}", { n: lvl.level })} · {lvl.title}
            {s.profile.stage && ` · ${stageById[s.profile.stage].label}`}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-muted">
            <CalendarDays className="h-4 w-4" /> {t("profile.joined", "Joined {date}", { date: joined.toLocaleDateString(undefined, { month: "long", year: "numeric" }) })}
          </p>
          {myCourses.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {myCourses.map((c) => (
                <Link key={c.slug} href={c.href} title={c.title}>
                  <CourseIcon slug={c.slug} size={30} />
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          <Link href="/shop" className="btn-ghost !px-3" title={t("profile.editAvatar", "Edit avatar")}>
            <PencilLine className="h-5 w-5" />
          </Link>
          <Link href="/settings" className="btn-ghost !px-3" title={t("profile.settings", "Settings")}>
            <Settings className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* statistics */}
      <section className="mt-8">
        <h2 className="text-2xl font-black">{t("profile.stats.title", "Statistics")}</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <Stat icon={<Flame className="h-7 w-7 fill-streak text-streak" />} value={String(s.streak.count)} label={t("profile.stats.streak", "Day streak")} />
          <Stat icon={<Zap className="h-7 w-7 fill-warn text-warn" />} value={s.xp.toLocaleString()} label={t("profile.stats.xp", "Total XP")} />
          <Stat icon={<ShieldHalf className="h-7 w-7" style={{ color: league.color, fill: league.color }} strokeWidth={1.5} />} value={league.name} label={t("profile.stats.league", "Current league")} />
          <Stat icon={<BookOpenCheck className="h-7 w-7 text-good" />} value={String(s.totals.lessons)} label={t("profile.stats.lessons", "Lessons completed")} />
          <Stat icon={<Target className="h-7 w-7 text-accent-2" />} value={`${Math.round(mp.pct * 100)}%`} label={t("profile.stats.mastery", "Mastery (my courses)")} />
          <Stat icon={<Flame className="h-7 w-7 text-muted" />} value={String(s.streak.best)} label={t("profile.stats.longest", "Longest streak")} />
        </div>
      </section>

      {/* courses */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-black">{t("profile.courses.title", "My courses")}</h2>
          <Link href="/courses" className="text-sm font-extrabold uppercase tracking-wide text-accent">
            {t("profile.courses.add", "Add course")}
          </Link>
        </div>
        {myCourses.length === 0 ? (
          <p className="mt-4 font-semibold text-muted">{t("profile.courses.empty", "You haven’t started a course yet.")}</p>
        ) : (
          <div className="card mt-4 divide-y-2 divide-line">
            {myCourses.map((c) => {
              const cm = masteryPoints(c.lessonIds.map((id) => s.mastery[id]));
              const { color } = courseStyle(c.slug);
              return (
                <Link key={c.slug} href={c.href} className="flex items-center gap-4 p-4 transition hover:bg-surface-2">
                  <CourseIcon slug={c.slug} size={44} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate font-extrabold">{c.title}</div>
                    <div className="mt-2 flex items-center gap-3">
                      <ProgressBar value={cm.pct} height={10} color={color} />
                      <span className="w-10 shrink-0 text-right text-sm font-black" style={{ color }}>
                        {Math.round(cm.pct * 100)}%
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* achievements */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-black">{t("profile.badges.title", "Achievements")}</h2>
          <span className="text-sm font-bold text-muted">
            {t("profile.badges.count", "{n} of {total}", { n: earned.length, total: BADGES.length })}
          </span>
        </div>
        <div className="card mt-4 divide-y-2 divide-line">
          {[...earned, ...inProgress].map((b) => {
            const got = Boolean(s.badges[b.id]);
            const p = badgeProgress(b.id, s);
            return (
              <div key={b.id} className="flex items-center gap-4 p-4">
                <BadgeMedal icon={b.icon} color={b.color} size={60} locked={!got} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="truncate text-lg font-black">{b.name}</h3>
                    {got ? (
                      <span className="shrink-0 text-xs font-extrabold uppercase tracking-wide text-good">{t("profile.badges.unlocked", "Unlocked")}</span>
                    ) : p ? (
                      <span className="shrink-0 text-sm font-bold text-muted">
                        {p.value}/{p.target}
                      </span>
                    ) : null}
                  </div>
                  {!got && p && <ProgressBar value={p.value / p.target} height={12} color="rgb(var(--warn))" className="mt-2" />}
                  <p className="mt-1.5 text-sm font-semibold text-muted">{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageColumns>
  );
}

function Stat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="card flex items-center gap-3 p-4">
      {icon}
      <div className="min-w-0">
        <div className="truncate text-xl font-black">{value}</div>
        <div className="truncate text-sm font-bold text-muted">{label}</div>
      </div>
    </div>
  );
}
