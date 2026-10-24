"use client";

import Link from "next/link";
import { useMemo } from "react";
import clsx from "clsx";
import { ArrowRight, Award, BookOpen, Briefcase, CalendarDays, Clock, Target } from "lucide-react";
import { getPathway, pathways, type Pathway } from "@/content/pathways";
import { useT } from "@/i18n";
import { useContentDict } from "@/i18n/content";
import { useLearner } from "@/lib/store";
import { dayKey } from "@/lib/gamification";
import { pathwayProgress } from "@/lib/plan-sources/pathway";
import { addDays, usePathwaySchedule, usePathwayState } from "@/components/pathways/hooks";
import { SectionHeader, useFmt } from "../ui";
import { Greeting, HomeFrame, LanguageNudge, MyCourses, SeeItCard, UpNextHero, WeeklyActivity } from "./common";

/** Professional: goals first — the pathway you're on, what's next, this week, and the skills you've shown. */
export function ProfessionalHome() {
  const t = useT();
  const plan = useLearner((s) => s.plan);
  const s = usePathwayState();
  const enrolled = useMemo(() => s.pathways.enrolled.map(getPathway).filter((p): p is Pathway => Boolean(p)), [s.pathways.enrolled]);
  const primary =
    enrolled.find((p) => plan?.scope.type === "pathway" && plan.scope.id === p.slug) ?? enrolled.find((p) => !s.pathways.certificates[p.slug]) ?? enrolled[0];

  return (
    <HomeFrame
      top={<Greeting sub={primary ? t("khan.pro.sub", "Your goal, your schedule, and the next practical step.") : t("khan.pro.subNew", "Set a goal and we'll build a route, a schedule and real-work assignments around it.")} />}
      rail={
        <>
          {primary && <SkillsProfile enrolled={enrolled} />}
          {primary && <Certificates enrolled={enrolled} />}
          <WeeklyActivity />
          <LanguageNudge />
          <section className="card p-5">
            <h2 className="font-bold">{t("khan.pro.addGoal", "Add a goal")}</h2>
            <p className="mt-1 text-sm text-muted">{t("khan.pro.morePathways", "{n} more career pathways available.", { n: pathways.length - enrolled.length })}</p>
            <Link href="/pathways" className="btn-ghost mt-3 w-full">
              {t("khan.careerPathways", "Career pathways")}
            </Link>
          </section>
        </>
      }
    >
      {primary ? <Goal primary={primary} /> : <PickGoal />}
      {primary && <ThisWeek primary={primary} />}
      {primary && enrolled.length > 1 && <OtherGoals enrolled={enrolled.filter((p) => p.slug !== primary.slug)} />}
      {!primary && <UpNextHero />}
      <MyCourses />
      <SeeItCard minAge={16} />
    </HomeFrame>
  );
}

function Goal({ primary }: { primary: Pathway }) {
  const t = useT();
  const f = useFmt();
  const s = usePathwayState();
  const sched = usePathwaySchedule(primary);
  const progress = pathwayProgress(primary, s);
  const next = sched?.next;
  const done = Boolean(progress.certificate) || progress.eligible || (sched && !next);
  const isAssignment = next?.id.startsWith("assignment:");
  const dict = useContentDict(next && !isAssignment ? next.id.split("/")[0] : "");

  return (
    <section className="kh-hero" aria-labelledby="kh-goal">
      <div className="relative p-5 sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="flex items-center gap-1.5 kh-keep-case text-xs font-bold uppercase tracking-[0.08em] text-white/70">
              <Target className="h-3.5 w-3.5" aria-hidden /> {t("khan.pro.currentGoal", "Current goal")}
            </p>
            <h2 id="kh-goal" className="mt-2 text-[1.5rem] font-bold leading-snug sm:text-[1.75rem]">
              {primary.title}
            </h2>
            <p className="kh-hero-muted mt-1 line-clamp-2 max-w-[62ch] text-[0.9375rem]">{primary.goal}</p>
          </div>
          <p className="shrink-0 text-[2rem] font-bold tabular-nums leading-none">{f.pct(progress.fraction)}</p>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-valuenow={Math.round(progress.fraction * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={t("khan.pro.goalProgress", "Goal progress")}>
          <div className="h-full rounded-full bg-white" style={{ width: `${progress.fraction * 100}%` }} />
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
          <HeroStat label={t("khan.pro.lessons", "Lessons")} value={`${f.n(progress.lessonsDone)}/${f.n(progress.lessonsTotal)}`} />
          <HeroStat label={t("khan.pro.assignments", "Assignments")} value={`${f.n(progress.assignmentsDone)}/${f.n(progress.assignmentsTotal)}`} />
          <HeroStat label={t("khan.pro.timeLeft", "Time left")} value={sched ? t("khan.pro.hours", "~{n} h", { n: f.n(Math.ceil(sched.plan.remainingMinutes / 60)) }) : "—"} />
          <HeroStat
            label={t("khan.pro.finish", "Est. completion")}
            value={progress.certificate ? t("khan.pro.completed", "Completed") : sched?.plan.finishDate ? f.date(sched.plan.finishDate, { day: "numeric", month: "short" }) : progress.eligible ? t("khan.pro.ready", "Ready") : "—"}
          />
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/15 pt-5">
          {done ? (
            <>
              <p className="min-w-0 flex-1 font-semibold">{progress.certificate ? t("khan.pro.certReady", "Pathway complete — your certificate is ready.") : progress.eligible ? t("khan.pro.allMet", "All requirements met.") : t("khan.pro.raise", "Everything submitted. Raise any assignment below 70% to finish.")}</p>
              <Link href={progress.certificate || progress.eligible ? `/certificate/${primary.slug}` : `/pathways/${primary.slug}`} className="btn-primary">
                {progress.certificate ? t("khan.pro.viewCert", "View certificate") : progress.eligible ? t("khan.pro.claim", "Claim certificate") : t("khan.pro.review", "Review assignments")}
              </Link>
            </>
          ) : next ? (
            <>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/10">{isAssignment ? <Briefcase className="h-5 w-5" aria-hidden /> : <BookOpen className="h-5 w-5" aria-hidden />}</span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-white/70">
                  {t("khan.pro.nextUp", "Next up")}
                  {next.group ? ` · ${next.group}` : ""}
                </p>
                <p className="truncate font-semibold">{dict?.[next.title] ?? next.title}</p>
                <p className="kh-hero-muted flex items-center gap-1.5 text-xs">
                  <Clock className="h-3.5 w-3.5" aria-hidden /> {t("khan.minShort", "{n} min", { n: f.n(next.minutes) })}
                </p>
              </div>
              <Link href={next.href} className="btn-primary">
                {isAssignment ? t("khan.pro.openAssignment", "Open assignment") : t("khan.continue", "Continue")} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </>
          ) : (
            <div className="h-10 w-full animate-pulse rounded bg-white/10" />
          )}
        </div>
        {sched && !progress.certificate && sched.plan.finishDate && (
          <p className="kh-hero-muted mt-4 text-sm">
            {sched.plan.onTrack
              ? t("khan.pro.onTrack", "On track for {date} at {h} h a week.", { date: f.date(sched.schedule.targetDate), h: f.n(sched.schedule.hoursPerWeek) })
              : t("khan.pro.behind", "About {n} more hours a week would get you there by {date} — or move your date.", { n: f.n(sched.plan.extraHoursNeeded), date: f.date(sched.schedule.targetDate) })}{" "}
            <Link href={`/pathways/${primary.slug}#schedule`} className="font-semibold text-white underline underline-offset-2">
              {sched.schedule.custom ? t("khan.pro.adjust", "Adjust schedule") : t("khan.pro.setSchedule", "Set your schedule")}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs text-white/70">{label}</dt>
      <dd className="mt-0.5 font-semibold tabular-nums">{value}</dd>
    </div>
  );
}

function ThisWeek({ primary }: { primary: Pathway }) {
  const t = useT();
  const f = useFmt();
  const sched = usePathwaySchedule(primary);
  const today = dayKey();
  const end = addDays(today, 6);
  const week = sched?.plan.days.filter((d) => d.date >= today && d.date <= end) ?? [];
  const minutes = week.reduce((a, d) => a + d.minutes, 0);
  return (
    <section aria-labelledby="kh-proweek">
      <SectionHeader
        id="kh-proweek"
        title={
          <span className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-accent" aria-hidden /> {t("khan.pro.week", "This week's schedule")}
          </span>
        }
        sub={minutes ? t("khan.pro.weekPlanned", "{n} h planned", { n: f.n(Math.round((minutes / 60) * 10) / 10) }) : undefined}
      />
      <div className="card divide-y divide-line overflow-hidden">
        {!sched ? (
          <div className="h-32 animate-pulse" />
        ) : week.length === 0 ? (
          <p className="p-5 text-sm text-muted">
            {t("khan.pro.noSessions", "No study sessions in the next 7 days.")}{" "}
            <Link href={`/pathways/${primary.slug}#schedule`} className="kh-link">
              {t("khan.pro.chooseDays", "Choose your study days")}
            </Link>
          </p>
        ) : (
          week.map((d) => (
            <div key={d.date} className={clsx("flex gap-4 p-4", d.date === today && "bg-accent-soft/50")}>
              <div className="w-16 shrink-0">
                <div className="text-xs font-semibold text-muted">{d.date === today ? t("khan.today", "Today") : f.date(d.date, { weekday: "short" })}</div>
                <div className="text-sm font-semibold">{f.date(d.date, { day: "numeric", month: "short" })}</div>
              </div>
              <ul className="min-w-0 flex-1 space-y-1.5">
                {d.tasks.map((task, i) => (
                  <li key={task.id + i}>
                    <Link href={task.href} className="flex items-center gap-3 text-sm hover:text-accent">
                      {task.id.startsWith("assignment:") ? <Briefcase className="h-4 w-4 shrink-0 text-muted" aria-hidden /> : <BookOpen className="h-4 w-4 shrink-0 text-muted" aria-hidden />}
                      <span className="min-w-0 flex-1 truncate">{task.kind === "learn" ? task.title : t("khan.pro.catchUp", "Review and catch up on this pathway")}</span>
                      <span className="shrink-0 text-xs text-muted">{t("khan.minShort", "{n} min", { n: f.n(task.minutes) })}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function OtherGoals({ enrolled }: { enrolled: Pathway[] }) {
  const t = useT();
  const f = useFmt();
  const s = usePathwayState();
  return (
    <section aria-labelledby="kh-othergoals">
      <SectionHeader id="kh-othergoals" title={t("khan.pro.otherGoals", "Other goals")} />
      <div className="grid gap-3 sm:grid-cols-2">
        {enrolled.map((p) => {
          const pr = pathwayProgress(p, s);
          return (
            <Link key={p.slug} href={`/pathways/${p.slug}`} className="tile block p-4">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate font-semibold">{p.title}</span>
                <span className="text-sm tabular-nums text-muted">{f.pct(pr.fraction)}</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full" style={{ width: `${pr.fraction * 100}%`, background: p.color }} />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function SkillsProfile({ enrolled }: { enrolled: Pathway[] }) {
  const t = useT();
  const s = usePathwayState();
  const rows = enrolled.flatMap((p) => pathwayProgress(p, s).modules.map((m) => ({ ...m, pathway: p })));
  const proven = rows.filter((r) => r.complete).length;
  return (
    <section className="card p-5" aria-labelledby="kh-skillsprof">
      <div className="flex items-baseline justify-between gap-3">
        <h2 id="kh-skillsprof" className="font-bold">
          {t("khan.pro.skills", "Skills profile")}
        </h2>
        <span className="text-xs text-muted">{t("khan.pro.demonstrated", "{n}/{total} demonstrated", { n: proven, total: rows.length })}</span>
      </div>
      <ul className="mt-4 space-y-3">
        {rows.slice(0, 8).map((r) => (
          <li key={r.pathway.slug + r.title}>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="truncate">{r.title}</span>
              <span className={clsx("shrink-0 text-xs font-semibold", r.complete ? "text-good-shade" : r.completed ? "text-ink" : "text-muted")}>
                {r.complete ? t("khan.pro.shown", "Demonstrated") : r.completed ? t("khan.pro.inProgress", "In progress") : t("khan.mastery.notStarted", "Not started")}
              </span>
            </div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full" style={{ width: `${r.fraction * 100}%`, background: r.pathway.color }} />
            </div>
          </li>
        ))}
      </ul>
      {rows.length > 8 && <p className="mt-3 text-xs text-muted">{t("khan.pro.moreSkills", "+{n} more across your goals", { n: rows.length - 8 })}</p>}
    </section>
  );
}

function Certificates({ enrolled }: { enrolled: Pathway[] }) {
  const t = useT();
  const f = useFmt();
  const s = usePathwayState();
  const certs = enrolled.filter((p) => s.pathways.certificates[p.slug]);
  return (
    <section className="card p-5" aria-labelledby="kh-certs">
      <h2 id="kh-certs" className="flex items-center gap-2 font-bold">
        <Award className="h-4 w-4 text-accent" aria-hidden /> {t("khan.pro.certs", "Certificates")}
      </h2>
      {certs.length ? (
        <ul className="mt-3 space-y-1">
          {certs.map((p) => (
            <li key={p.slug}>
              <Link href={`/certificate/${p.slug}`} className="kh-menuitem !px-2">
                <span className="min-w-0 flex-1 truncate font-semibold">{p.title}</span>
                <span className="shrink-0 text-xs text-muted">{f.date(s.pathways.certificates[p.slug].issuedAt, { month: "short", year: "numeric" })}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-muted">{t("khan.pro.certsEmpty", "Finish a pathway and its assignments to earn a certificate of completion.")}</p>
      )}
      <p className="mt-3 text-xs text-muted">{t("khan.pro.notAccredited", "Certificates of completion, not accredited qualifications.")}</p>
    </section>
  );
}

function PickGoal() {
  const t = useT();
  const enroll = useLearner((s) => s.enrollPathway);
  return (
    <section aria-labelledby="kh-pickgoal">
      <SectionHeader id="kh-pickgoal" title={t("khan.pro.pick", "What are you working towards?")} sub={t("khan.pro.pickSub", "Each pathway gives you a structured route, practical assignments based on real work, a weekly schedule and a certificate at the end.")} />
      <div className="grid gap-4 md:grid-cols-2">
        {pathways.map((p) => (
          <div key={p.slug} className="card flex flex-col p-5">
            <span className="h-1 w-10 rounded-full" style={{ background: p.color }} aria-hidden />
            <h3 className="mt-3 font-bold">{p.title}</h3>
            <p className="mt-1 line-clamp-3 text-sm text-muted">{p.goal}</p>
            <p className="mt-3 text-xs text-muted">{t("khan.pro.pathMeta", "{w} weeks · {n} assignments", { w: p.weeks, n: p.modules.length })}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              <button type="button" onClick={() => enroll(p.slug)} className="btn-primary flex-1 whitespace-nowrap">
                {t("khan.pro.startGoal", "Set as my goal")}
              </button>
              <Link href={`/pathways/${p.slug}`} className="btn-ghost flex-1">
                {t("khan.pro.details", "Details")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
