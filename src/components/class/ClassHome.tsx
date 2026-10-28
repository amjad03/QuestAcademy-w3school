"use client";

import Link from "next/link";
import { useMemo } from "react";
import { CalendarClock, ClipboardList, Compass, Eye, FlaskConical, NotebookPen, Settings2, Sigma } from "lucide-react";
import { useT } from "@/i18n";
import { useSharedText } from "@/i18n/content";
import { useLearner } from "@/lib/store";
import { useMode } from "@/lib/useMode";
import type { MasteryLevel } from "@/lib/mastery";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { LeagueCard, QuestsCard } from "@/components/shell/RailCards";
import { useMyClass, chapterHref, subjectHref } from "@/lib/useMyClass";
import { Greeting, HomeFrame, LanguageNudge, QuickLinks, SeeItCard, UpNextHero, WeeklyActivity } from "@/experiences/khan/home/common";
import { TodayPlan } from "@/experiences/khan/home/Focus";
import { MasteryBar, useExamCountdown, useFmt } from "@/experiences/khan/ui";
import { useClassProgress, useSubjectName } from "./data";
import { orderChapters, orderSubjects } from "@/lib/personalise";
import { CompleteProfileBanner, PlanReminder, TodayPlanCard, WeekPlanCard } from "@/components/personal/PersonalPlan";

/** "My class" home for school learners: continue, then their subjects, then plan and practice. */
export function ClassHome() {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  const mode = useMode();
  const mc = useMyClass()!;
  const { myClass } = mc;
  const personal = useLearner((s) => s.profile.personal ?? null);
  // Weak / low-level subjects and chapters first, so "continue" and the subject list follow the learner's needs.
  const subjects = useMemo(() => orderSubjects(mc.subjects, personal).map((s) => ({ ...s, chapters: orderChapters(s.id, s.chapters, personal) })), [mc.subjects, personal]);
  const progress = useClassProgress(subjects);
  const lastLesson = useLearner((s) => s.lastLesson);
  const lessons = useLearner((s) => s.lessons);
  const exam = useExamCountdown();
  const subjectName = useSubjectName();

  // Continue the last lesson if it belongs to the class and isn't finished; else the first unfinished chapter.
  const next = useMemo(() => {
    const find = (pred: (lessonId: string) => boolean) => {
      for (const s of subjects)
        for (const ch of s.chapters) {
          const p = progress.get(`${s.id}/${ch.slug}`)!;
          if (p.done) continue;
          const id = ch.lessonIds.find(pred);
          if (id) return { subject: s, chapter: ch, lessonId: p.nextLesson && ch.lessonIds.includes(p.nextLesson) && pred(p.nextLesson) ? p.nextLesson : id };
        }
      return null;
    };
    if (lastLesson) {
      const hit = find((id) => id === lastLesson);
      if (hit) return { ...hit, lessonId: lessons[lastLesson] ? (progress.get(`${hit.subject.id}/${hit.chapter.slug}`)!.nextLesson ?? lastLesson) : lastLesson };
    }
    return find((id) => !lessons[id]);
  }, [subjects, progress, lastLesson, lessons]);

  const title = myClass.boardName ? t("class.title", "{class} · {board}", { class: tx(myClass.name), board: tx(myClass.boardName) }) : myClass.grade === "pre" ? t("class.pre", "Pre-primary") : t("class.gradeN", "Class {n}", { n: f.n(Number(myClass.grade)) });
  const playful = mode.id === "adventure";

  return (
    <HomeFrame
      top={
        <Greeting
          sub={title}
          aside={
            exam && (
              <Link href="/plan" className="card flex items-center gap-3 px-4 py-3 hover:border-accent">
                <CalendarClock className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block text-xl font-bold tabular-nums leading-tight">{t("khan.daysShort", "{n} days", { n: f.n(exam.days) })}</span>
                  <span className="block text-xs text-muted">
                    {t("khan.focus.until", "until {exam}", { exam: tx(exam.name) })}
                    {exam.approx ? ` · ${t("khan.approx", "approx.")}` : ""}
                  </span>
                </span>
              </Link>
            )
          }
        />
      }
      rail={
        <>
          <WeekPlanCard />
          {mode.id === "focus" && <TodayPlan />}
          <WeeklyActivity energy={playful} />
          <LanguageNudge />
          {playful && <QuestsCard limit={3} />}
          {playful && <LeagueCard />}
          <QuickLinks
            title={t("class.tools", "Study tools")}
            links={[
              { href: "/practice", label: t("class.nav.practice", "Practice & tests"), icon: FlaskConical },
              { href: "/plan", label: t("nav.plan", "Study plan"), icon: ClipboardList },
              ...(mode.id === "focus" ? [{ href: "/exam/formulas", label: t("khan.focus.formulas", "Formula vault"), icon: Sigma }] : []),
              { href: "/notebook", label: t("nav.notebook", "Notebook"), icon: NotebookPen },
              { href: "/explain", label: t("class.nav.explainers", "Explainers"), icon: Eye },
            ]}
          />
        </>
      }
    >
      <PlanReminder />
      <CompleteProfileBanner />
      {next ? (
        <UpNextHero
          lessonId={next.lessonId}
          eyebrow={t("class.continue", "Continue learning")}
          context={t("class.chapterCtx", "{subject} · Chapter {n}: {title}", { subject: subjectName(next.subject), n: f.n(next.chapter.n), title: next.chapter.unit ? next.chapter.title : tx(next.chapter.title) })}
          secondary={{ href: chapterHref(next.subject, next.chapter), label: t("class.openChapter", "Open chapter") }}
          progressLabel={t("class.chapterProgress", "Chapter progress")}
        />
      ) : (
        <UpNextHero />
      )}

      <TodayPlanCard />

      <section aria-labelledby="class-subjects">
        <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="class-subjects" className="kh-h2">
            {t("class.mySubjects", "My subjects")}
          </h2>
          <Link href="/settings#my-class" className="kh-link inline-flex items-center gap-1.5 text-sm">
            <Settings2 className="h-4 w-4" aria-hidden /> {t("class.changeSubjects", "Change class or subjects")}
          </Link>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {subjects.map((s) => {
            const ps = s.chapters.map((ch) => progress.get(`${s.id}/${ch.slug}`)!);
            const done = ps.filter((p) => p.done).length;
            return (
              <li key={s.id}>
                <Link href={subjectHref(s)} className="card flex h-full items-center gap-4 p-4 transition hover:border-accent" data-subject={s.id}>
                  <CourseIcon slug={s.icon} size={48} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-snug">{subjectName(s)}</span>
                    <span className="mt-0.5 block text-xs text-muted">
                      {t("class.chaptersDone", "{done} of {total} chapters done", { done: f.n(done), total: f.n(s.chapters.length) })}
                      {s.parts.length > 1 && ` · ${t("class.partsN", "{n} parts", { n: f.n(s.parts.length) })}`}
                    </span>
                    <MasteryBar levels={ps.map((p) => p.level as MasteryLevel)} height={6} className="mt-2" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <SeeItCard minAge={mode.id === "focus" ? 14 : 11} />

      <p className="text-sm text-muted">
        <Link href="/library" className="kh-link inline-flex items-center gap-1.5">
          <Compass className="h-4 w-4" aria-hidden /> {t("class.exploreOther", "Explore other classes & courses")}
        </Link>
      </p>
    </HomeFrame>
  );
}
