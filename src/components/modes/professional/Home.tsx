"use client";

import clsx from "clsx";
import { ArrowRight, Award, BookOpen, Briefcase, CalendarDays, Clock, Target } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { getPathway, pathways, type Pathway } from "@/content/pathways";
import { dayKey } from "@/lib/gamification";
import { pathwayProgress } from "@/lib/plan-sources/pathway";
import { useLearner } from "@/lib/store";
import { ProgressBar } from "@/components/ui/Progress";
import { addDays, formatDate, usePathwaySchedule, usePathwayState } from "@/components/pathways/hooks";

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

/** Professional mode home: a goal-first dashboard built around the learner's pathways. */
export function ProfessionalHome() {
  const name = useLearner((s) => s.profile.name);
  const plan = useLearner((s) => s.plan);
  const s = usePathwayState();
  const enrolled = useMemo(() => s.pathways.enrolled.map(getPathway).filter((p): p is Pathway => Boolean(p)), [s.pathways.enrolled]);
  // The pathway on the learner's study plan leads; otherwise the first unfinished one.
  const primary =
    enrolled.find((p) => plan?.scope.type === "pathway" && plan.scope.id === p.slug) ??
    enrolled.find((p) => !s.pathways.certificates[p.slug]) ??
    enrolled[0];

  return (
    <div className="mx-auto max-w-[1120px] px-4 py-6 sm:px-6 lg:py-8">
      <p className="text-sm text-muted">{formatDate(dayKey(), { weekday: "long", day: "numeric", month: "long" })}</p>
      <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
        {greeting()}
        {name && name !== "Learner" ? `, ${name}` : ""}
      </h1>
      {primary ? <Dashboard primary={primary} enrolled={enrolled} /> : <EnrollPrompt />}
    </div>
  );
}

function Dashboard({ primary, enrolled }: { primary: Pathway; enrolled: Pathway[] }) {
  const s = usePathwayState();
  const sched = usePathwaySchedule(primary);
  const progress = pathwayProgress(primary, s);
  const today = dayKey();
  const weekEnd = addDays(today, 6);
  const week = sched?.plan.days.filter((d) => d.date >= today && d.date <= weekEnd) ?? [];
  const weekMinutes = week.reduce((t, d) => t + d.minutes, 0);
  const others = enrolled.filter((p) => p.slug !== primary.slug);
  const certs = enrolled.filter((p) => s.pathways.certificates[p.slug]);

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
      <div className="min-w-0 space-y-6">
        {/* Goal */}
        <section className="card p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <span className="eyebrow flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Current goal</span>
              <h2 className="mt-2 text-xl font-bold">{primary.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-muted">{primary.goal}</p>
            </div>
            <span className="shrink-0 text-3xl font-bold tabular-nums">{Math.round(progress.fraction * 100)}%</span>
          </div>
          <ProgressBar value={progress.fraction} height={8} color={primary.color} className="mt-5" />
          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <Stat label="Lessons" value={`${progress.lessonsDone}/${progress.lessonsTotal}`} />
            <Stat label="Assignments" value={`${progress.assignmentsDone}/${progress.assignmentsTotal}`} />
            <Stat label="Time left" value={sched ? `~${Math.ceil(sched.plan.remainingMinutes / 60)} h` : "—"} />
            <Stat
              label="Est. completion"
              value={progress.certificate ? "Completed" : sched?.plan.finishDate ? formatDate(sched.plan.finishDate, { day: "numeric", month: "short" }) : progress.eligible ? "Ready" : "—"}
              tone={sched && sched.plan.finishDate && !sched.plan.onTrack ? "bad" : undefined}
            />
          </dl>
          {sched && !progress.certificate && (
            <p className="mt-4 text-sm text-muted">
              {sched.plan.finishDate
                ? sched.plan.onTrack
                  ? `On track for ${formatDate(sched.schedule.targetDate)} at ${sched.schedule.hoursPerWeek} h a week.`
                  : `About ${sched.plan.extraHoursNeeded} more hour${sched.plan.extraHoursNeeded === 1 ? "" : "s"} a week would get you there by ${formatDate(sched.schedule.targetDate)} — or move your date.`
                : "All coursework is done."}{" "}
              <Link href={`/pathways/${primary.slug}#schedule`} className="font-semibold text-accent hover:underline">
                {sched.schedule.custom ? "Adjust schedule" : "Set your schedule"}
              </Link>
            </p>
          )}
        </section>

        {/* Next up */}
        <NextUp primary={primary} next={sched?.next} eligible={progress.eligible} certified={Boolean(progress.certificate)} />

        {/* This week */}
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="flex items-center gap-2 font-bold"><CalendarDays className="h-4 w-4" /> This week</h2>
            <span className="text-sm text-muted">{weekMinutes ? `${Math.round((weekMinutes / 60) * 10) / 10} h planned` : ""}</span>
          </div>
          <div className="card mt-3 divide-y-2 divide-line overflow-hidden">
            {!sched ? (
              <div className="h-32 animate-pulse" />
            ) : week.length === 0 ? (
              <p className="p-5 text-sm text-muted">No study sessions in the next 7 days. <Link href={`/pathways/${primary.slug}#schedule`} className="font-semibold text-accent hover:underline">Choose your study days</Link></p>
            ) : (
              week.map((d) => (
                <div key={d.date} className={clsx("flex gap-4 p-4", d.date === today && "bg-accent-soft/40")}>
                  <div className="w-14 shrink-0">
                    <div className="text-xs font-semibold uppercase text-muted">{d.date === today ? "Today" : formatDate(d.date, { weekday: "short" })}</div>
                    <div className="text-sm font-semibold">{formatDate(d.date, { day: "numeric", month: "short" })}</div>
                  </div>
                  <ul className="min-w-0 flex-1 space-y-1.5">
                    {d.tasks.map((t, i) => (
                      <li key={t.id + i}>
                        <Link href={t.href} className="flex items-center gap-3 text-sm hover:text-accent">
                          {t.id.startsWith("assignment:") ? <Briefcase className="h-4 w-4 shrink-0 text-muted" /> : <BookOpen className="h-4 w-4 shrink-0 text-muted" />}
                          <span className="min-w-0 flex-1 truncate">{t.kind === "learn" ? t.title : "Review and catch up on this pathway"}</span>
                          <span className="shrink-0 text-xs text-muted">{t.minutes} min</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </section>

        {others.length > 0 && (
          <section>
            <h2 className="font-bold">Other pathways</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {others.map((p) => {
                const pr = pathwayProgress(p, s);
                return (
                  <Link key={p.slug} href={`/pathways/${p.slug}`} className="card block p-4 hover:border-ink/20">
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate font-semibold">{p.title}</span>
                      <span className="text-sm text-muted">{Math.round(pr.fraction * 100)}%</span>
                    </div>
                    <ProgressBar value={pr.fraction} height={5} color={p.color} className="mt-3" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <aside className="space-y-6">
        <SkillsProfile enrolled={enrolled} />

        <section className="card p-5">
          <h2 className="flex items-center gap-2 font-bold"><Award className="h-4 w-4" /> Certificates</h2>
          {certs.length ? (
            <ul className="mt-3 space-y-2">
              {certs.map((p) => (
                <li key={p.slug}>
                  <Link href={`/certificate/${p.slug}`} className="flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm hover:bg-surface-2">
                    <span className="truncate font-semibold">{p.title}</span>
                    <span className="shrink-0 text-xs text-muted">{formatDate(s.pathways.certificates[p.slug].issuedAt, { month: "short", year: "numeric" })}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-sm text-muted">Finish a pathway and its assignments to earn a certificate of completion.</p>
          )}
          <p className="mt-3 text-xs text-muted">Not accredited qualifications.</p>
        </section>

        <section className="card p-5">
          <h2 className="font-bold">Add a goal</h2>
          <p className="mt-1 text-sm text-muted">{pathways.length - enrolled.length} more career pathways available.</p>
          <Link href="/pathways" className="btn-ghost mt-3 w-full">Browse pathways</Link>
          <Link href="/courses" className="mt-2 block text-center text-sm font-semibold text-muted hover:text-ink">or explore individual courses</Link>
        </section>
      </aside>
    </div>
  );
}

function NextUp({ primary, next, eligible, certified }: { primary: Pathway; next?: { title: string; href: string; minutes: number; group?: string; id: string }; eligible: boolean; certified: boolean }) {
  if (certified || eligible || !next) {
    return (
      <section className="card flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <span className="eyebrow">Next up</span>
          <p className="mt-1 font-semibold">{certified ? "Pathway complete — your certificate is ready." : eligible ? "All requirements met." : "Everything submitted. Raise any assignment below 70% to finish."}</p>
        </div>
        <Link href={certified || eligible ? `/certificate/${primary.slug}` : `/pathways/${primary.slug}`} className="btn-primary">
          {certified ? "View certificate" : eligible ? "Claim certificate" : "Review assignments"}
        </Link>
      </section>
    );
  }
  const isAssignment = next.id.startsWith("assignment:");
  return (
    <section className="card flex flex-wrap items-center gap-4 p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: primary.color }}>
        {isAssignment ? <Briefcase className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
      </span>
      <div className="min-w-0 flex-1">
        <span className="eyebrow">Next up · {next.group}</span>
        <p className="mt-0.5 truncate font-semibold">{next.title}</p>
        <p className="flex items-center gap-1.5 text-sm text-muted"><Clock className="h-3.5 w-3.5" /> {next.minutes >= 60 ? `About ${Math.round((next.minutes / 60) * 10) / 10} h` : `${next.minutes} min`}</p>
      </div>
      <Link href={next.href} className="btn-primary">
        {isAssignment ? "Open assignment" : "Continue"} <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

/** Competencies = pathway modules; status from lessons + assignment evidence. */
function SkillsProfile({ enrolled }: { enrolled: Pathway[] }) {
  const s = usePathwayState();
  const rows = enrolled.flatMap((p) => pathwayProgress(p, s).modules.map((m) => ({ ...m, pathway: p })));
  const proven = rows.filter((r) => r.complete).length;
  return (
    <section className="card p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="font-bold">Skills profile</h2>
        <span className="text-xs text-muted">{proven}/{rows.length} demonstrated</span>
      </div>
      <ul className="mt-4 space-y-3">
        {rows.slice(0, 10).map((r) => (
          <li key={r.pathway.slug + r.title}>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="truncate">{r.title}</span>
              <span className={clsx("shrink-0 text-xs font-semibold", r.complete ? "text-good" : r.completed ? "text-ink" : "text-muted")}>
                {r.complete ? "Demonstrated" : r.completed ? "In progress" : "Not started"}
              </span>
            </div>
            <ProgressBar value={r.fraction} height={4} color={r.pathway.color} className="mt-1.5" />
          </li>
        ))}
      </ul>
      {rows.length > 10 && <p className="mt-3 text-xs text-muted">+{rows.length - 10} more across your pathways</p>}
    </section>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "bad" }) {
  return (
    <div>
      <dt className="text-xs text-muted">{label}</dt>
      <dd className={clsx("mt-0.5 font-semibold", tone === "bad" && "text-bad")}>{value}</dd>
    </div>
  );
}

function EnrollPrompt() {
  const enroll = useLearner((s) => s.enrollPathway);
  return (
    <div className="mt-6">
      <section className="card p-6 sm:p-8">
        <span className="eyebrow">Set a goal</span>
        <h2 className="mt-2 text-xl font-bold sm:text-2xl">What are you working towards?</h2>
        <p className="mt-2 max-w-2xl text-muted">
          Pick a pathway to get a structured route, practical assignments based on real work, a weekly schedule that fits your time, and a certificate of completion at the end.
        </p>
      </section>
      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pathways.map((p) => (
          <div key={p.slug} className="card flex flex-col p-5">
            <span className="h-1 w-8 rounded-full" style={{ background: p.color }} />
            <h3 className="mt-3 font-bold">{p.title}</h3>
            <p className="mt-1 line-clamp-3 text-sm text-muted">{p.goal}</p>
            <p className="mt-3 text-xs text-muted">{p.weeks} weeks · {p.modules.length} assignments</p>
            <div className="mt-auto flex gap-2 pt-4">
              <button onClick={() => enroll(p.slug)} className="btn-primary flex-1 py-2 text-sm">Start</button>
              <Link href={`/pathways/${p.slug}`} className="btn-ghost flex-1 py-2 text-sm">Details</Link>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">
        Prefer to dip in? <Link href="/courses" className="font-semibold text-accent hover:underline">Browse all courses</Link>
      </p>
    </div>
  );
}
