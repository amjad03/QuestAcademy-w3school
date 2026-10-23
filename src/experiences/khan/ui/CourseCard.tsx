"use client";

import Link from "next/link";
import { useMemo } from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import type { CourseCard as CourseMeta, CourseOutline } from "@/content/course";
import { useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { courseProgress, lessonProgress } from "@/lib/progress";
import { useOutline } from "@/components/learn/LearnHome";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { MasteryBar, SkillSquares, type Skill } from "./mastery";
import { useFmt } from "./hooks";

/** Learner progress for one course outline (null while the outline loads). */
export function useCourseState(outline: CourseOutline | null) {
  const items = useLearner((s) => s.items);
  const lessons = useLearner((s) => s.lessons);
  const challengesPassed = useLearner((s) => s.challengesPassed);
  const mastery = useLearner((s) => s.mastery);
  return useMemo(() => {
    if (!outline) return null;
    const st = { items, lessons, challengesPassed, mastery };
    const cp = courseProgress(st, outline);
    const all = outline.units.flatMap((u) => u.lessons);
    const next = cp.next ?? all[0];
    const unit = outline.units.find((u) => u.slug === next?.unitSlug) ?? outline.units[0];
    const nextItem = next ? lessonProgress(st, next).nextItem : null;
    const skills: Skill[] = all.map((l) => ({ id: l.id, title: l.title, level: cp.levels[l.id] ?? 0, href: l.href }));
    return { cp, next, unit, nextItem, skills, started: all.some((l) => (cp.levels[l.id] ?? 0) > 0), st };
  }, [outline, items, lessons, challengesPassed, mastery]);
}

/** Khan-style course card: icon, title, stacked mastery bar, skill squares and a Continue link. */
export function CourseCard({ course, current, className }: { course: CourseMeta; current?: boolean; className?: string }) {
  const t = useT();
  const f = useFmt();
  const outline = useOutline(course.slug);
  const state = useCourseState(outline);
  const setProfile = useLearner((s) => s.setProfile);

  return (
    <article className={clsx("card flex min-w-0 flex-col p-5", className)}>
      <div className="flex items-start gap-3">
        <CourseIcon slug={course.slug} size={40} flat />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold leading-snug">
            <Link href={course.href} className="hover:text-accent hover:underline hover:underline-offset-2">
              {course.title}
            </Link>
          </h3>
          <p className="mt-0.5 text-[0.8125rem] text-muted">
            {t("khan.course.meta", "{units} units · {lessons} lessons", { units: f.n(course.units), lessons: f.n(course.lessons) })}
          </p>
        </div>
        {current && <span className="chip shrink-0 !text-[0.6875rem]">{t("khan.course.current", "Current")}</span>}
      </div>

      {!state ? (
        <div className="mt-4 space-y-2" aria-busy>
          <div className="h-2.5 animate-pulse rounded bg-surface-2" />
          <div className="h-3.5 w-2/3 animate-pulse rounded bg-surface-2" />
        </div>
      ) : (
        <>
          <div className="mt-4 flex items-baseline justify-between gap-3 text-[0.8125rem]">
            <span className="font-semibold">{t("khan.course.masteryPct", "{pct} mastery", { pct: f.pct(state.cp.pct) })}</span>
            <span className="text-muted">{t("khan.course.points", "{earned}/{possible} mastery points", { earned: f.n(state.cp.earned), possible: f.n(state.cp.possible) })}</span>
          </div>
          <MasteryBar levels={state.skills.map((s) => s.level)} className="mt-1.5" />
          <div className="mt-3 flex-1">
            <SkillSquares skills={state.skills} max={36} size={12} label={t("khan.course.skillsOf", "Skills in {course}", { course: course.title })} />
          </div>
          {state.next && state.nextItem && (
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-4">
              <p className="min-w-0 flex-1 text-[0.8125rem] text-muted">
                <span className="eyebrow block !text-[0.6875rem]">{t("khan.course.upNext", "Up next")}</span>
                <span className="line-clamp-1 font-medium text-ink">{state.next.title}</span>
              </p>
              <Link href={state.nextItem.href} className="btn-ghost !min-h-[2.25rem] !px-3 !py-1.5 !text-sm" onClick={() => !current && setProfile({ course: course.slug })}>
                {state.started ? t("khan.continue", "Continue") : t("khan.start", "Start")} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          )}
        </>
      )}
    </article>
  );
}
