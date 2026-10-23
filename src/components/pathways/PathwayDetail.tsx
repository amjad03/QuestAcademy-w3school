"use client";

import clsx from "clsx";
import { Award, Briefcase, CalendarClock, Check, ChevronRight, Circle, Clock, FileText, Target } from "lucide-react";
import Link from "next/link";
import type { Pathway } from "@/content/pathways";
import type { LessonMetaMap } from "@/lib/plan-sources/pathway";
import { assignmentHref, lessonDone } from "@/lib/plan-sources/pathway";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { ProgressBar } from "@/components/ui/Progress";
import { formatDate, usePathwayProgress, usePathwaySchedule, usePathwayState } from "./hooks";
import { ScheduleForm } from "./ScheduleForm";
import { useT } from "@/i18n";

export function PathwayDetail({ pathway: p, meta, hours }: { pathway: Pathway; meta: LessonMetaMap; hours: number }) {
  const t = useT();
  const hydrated = useHydrated();
  const enroll = useLearner((s) => s.enrollPathway);
  const s = usePathwayState();
  const progress = usePathwayProgress(p);
  const sched = usePathwaySchedule(p, meta);
  const enrolled = hydrated && progress?.enrolled;

  return (
    <div className="mx-auto max-w-[1060px] px-4 py-6 sm:px-6 lg:py-8">
      <Link href="/pathways" className="text-sm font-semibold text-muted hover:text-ink">
        ← {t("path.detail.back", "All pathways")}
      </Link>

      {/* Header */}
      <header className="mt-4 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
            <span className="eyebrow">{t("path.detail.eyebrow", "Career pathway")}</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{p.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{p.goal}</p>
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Fact icon={Clock} label={t("path.detail.fact.hours", "About {n} hours", { n: hours })} />
            <Fact icon={CalendarClock} label={t("path.detail.fact.weeks", "{n} weeks at your pace", { n: p.weeks })} />
            <Fact icon={FileText} label={t("path.detail.fact.assignments", "{n} practical assignments", { n: p.modules.length })} />
            <Fact icon={Award} label={t("path.detail.fact.certificate", "Certificate of completion")} />
          </dl>
        </div>

        <aside className="card h-fit p-5">
          {!hydrated ? (
            <div className="h-24" />
          ) : enrolled && progress ? (
            <>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-semibold text-muted">{t("path.detail.yourProgress", "Your progress")}</span>
                <span className="text-sm font-bold">{Math.round(progress.fraction * 100)}%</span>
              </div>
              <ProgressBar value={progress.fraction} height={8} color={p.color} className="mt-2" />
              <p className="mt-3 text-sm text-muted">
                {t("path.detail.progressCounts", "{lessonsDone}/{lessonsTotal} lessons · {assignmentsDone}/{assignmentsTotal} assignments", {
                  lessonsDone: progress.lessonsDone,
                  lessonsTotal: progress.lessonsTotal,
                  assignmentsDone: progress.assignmentsDone,
                  assignmentsTotal: progress.assignmentsTotal,
                })}
              </p>
              {sched && (
                <p className="mt-1 text-sm text-muted">
                  {sched.plan.finishDate ? (
                    <>
                      {t("path.detail.estimatedFinish", "Estimated finish")} <strong className="text-ink">{formatDate(sched.plan.finishDate)}</strong>
                    </>
                  ) : (
                    t("path.detail.allDone", "All coursework done")
                  )}
                  {sched.plan.finishDate && !sched.plan.onTrack && <span className="text-bad">{t("path.detail.extraHours", " · +{n} h/week to hit your date", { n: sched.plan.extraHoursNeeded })}</span>}
                </p>
              )}
              {progress.certificate ? (
                <Link href={`/certificate/${p.slug}`} className="btn-primary mt-4 w-full">{t("path.detail.viewCert", "View certificate")}</Link>
              ) : progress.eligible ? (
                <Link href={`/certificate/${p.slug}`} className="btn-primary mt-4 w-full">{t("path.detail.claimCert", "Claim your certificate")}</Link>
              ) : sched?.next ? (
                <Link href={sched.next.href} className="btn-primary mt-4 w-full">{t("path.detail.continue", "Continue: {title}", { title: sched.next.title.replace(/^Assignment: /, "") })}</Link>
              ) : (
                <Link href={`/certificate/${p.slug}`} className="btn-ghost mt-4 w-full">{t("path.detail.certRequirements", "Certificate requirements")}</Link>
              )}
            </>
          ) : (
            <>
              <p className="text-sm text-muted">{t("path.detail.selfPaced", "Self-paced. Learn the concepts, then prove them with real-world assignments.")}</p>
              <button onClick={() => enroll(p.slug)} className="btn-primary mt-4 w-full">{t("path.detail.start", "Start this pathway")}</button>
              <p className="mt-3 text-xs text-muted">{t("path.detail.free", "Free. Leave or pause at any time.")}</p>
            </>
          )}
        </aside>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        {/* Modules */}
        <section>
          <h2 className="text-xl font-bold">{t("path.detail.curriculum", "Curriculum")}</h2>
          <ol className="mt-4 space-y-4">
            {p.modules.map((m, i) => {
              const mp = progress?.modules[i];
              const a = m.assignment;
              const ap = progress?.assignments[i];
              return (
                <li key={m.title} className="card overflow-hidden">
                  <div className="flex items-start gap-4 p-5">
                    <span className={clsx("grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 text-sm font-bold", hydrated && mp?.complete ? "border-good bg-good text-white" : "border-line text-muted")}>
                      {hydrated && mp?.complete ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted">{m.why}</p>
                    </div>
                    {hydrated && mp && <span className="shrink-0 text-xs font-semibold text-muted">{mp.completed}/{mp.steps}</span>}
                  </div>
                  <ul className="border-t-2 border-line">
                    {m.lessonIds.map((id) => {
                      const done = hydrated && lessonDone(s, id);
                      return (
                        <li key={id}>
                          <Link href={meta[id]?.href ?? `/course/${id}`} className="flex items-center gap-3 px-5 py-2.5 text-sm hover:bg-surface-2">
                            {done ? <Check className="h-4 w-4 shrink-0 text-good" strokeWidth={3} /> : <Circle className="h-4 w-4 shrink-0 text-line" strokeWidth={2.5} />}
                            <span className="min-w-0 flex-1 truncate">{meta[id]?.title ?? id}</span>
                            <span className="hidden shrink-0 text-xs text-muted sm:inline">{meta[id]?.course}</span>
                            <span className="shrink-0 text-xs text-muted">{t("path.detail.minutes", "{n} min", { n: meta[id]?.minutes ?? 15 })}</span>
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link href={assignmentHref(p.slug, a.id)} className="flex items-center gap-3 bg-surface-2/60 px-5 py-3 text-sm hover:bg-surface-2">
                        <Briefcase className="h-4 w-4 shrink-0" style={{ color: p.color }} strokeWidth={2.5} />
                        <span className="min-w-0 flex-1">
                          <span className="font-semibold">{t("path.detail.assignment", "Assignment · {title}", { title: a.title })}</span>
                          {hydrated && ap?.submitted && (
                            <span className={clsx("ml-2 text-xs font-semibold", ap.passed ? "text-good" : "text-warn")}>{ap.passed
                                ? t("path.detail.submitted", "Submitted · {pct}%", { pct: Math.round(ap.score * 100) })
                                : t("path.detail.submittedBelow", "Submitted · {pct}% — revise to reach 70%", { pct: Math.round(ap.score * 100) })}</span>
                          )}
                        </span>
                        <span className="shrink-0 text-xs text-muted">{t("path.detail.hoursShort", "~{n} h", { n: a.estimatedHours })}</span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-muted" />
                      </Link>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Side info */}
        <aside className="space-y-6">
          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold"><Target className="h-4 w-4" /> {t("path.detail.skills", "Skills you’ll practise")}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.skills.map((k) => (
                <span key={k} className="chip">{k}</span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold"><Briefcase className="h-4 w-4" /> {t("path.detail.roles", "Roles this supports")}</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {p.roles.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold">{t("path.detail.prereqs", "Before you start")}</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {p.prerequisites.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border-2 border-dashed border-line p-4 text-xs text-muted">
            {t("path.detail.certNote", "Finish every lesson and submit each assignment, self-assessed at 70% or more of its rubric, to earn a certificate of completion. Quest Academy certificates show what you have practised; they are not an accredited qualification.")}
          </div>
        </aside>
      </div>

      {/* Schedule */}
      {hydrated && enrolled && sched && (
        <section id="schedule" className="mt-10 scroll-mt-6">
          <h2 className="text-xl font-bold">{t("path.detail.schedule", "Your study schedule")}</h2>
          <p className="mt-1 text-sm text-muted">
            {sched.schedule.custom
              ? t("path.detail.scheduleCustom", "Your plan updates automatically as you complete work.")
              : t("path.detail.scheduleSuggested", "Suggested: about {hours} hours a week to finish in {weeks} weeks. Adjust it to fit your life.", { hours: sched.schedule.hoursPerWeek, weeks: p.weeks })}
          </p>
          <div className="card mt-4 p-5">
            <ScheduleForm pathway={p} totalHours={sched.totalHours} />
          </div>
        </section>
      )}
    </div>
  );
}

function Fact({ icon: I, label }: { icon: typeof Clock; label: string }) {
  return (
    <div className="flex items-center gap-2 text-muted">
      <I className="h-4 w-4" strokeWidth={2.2} />
      <span>{label}</span>
    </div>
  );
}
