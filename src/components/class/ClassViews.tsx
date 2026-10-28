"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Eye, Presentation, Check, ChevronRight, Clock, Crosshair, Layers, Sigma, Target, Trophy, Zap } from "lucide-react";
import clsx from "clsx";
import { useT } from "@/i18n";
import { useSharedText } from "@/i18n/content";
import { useContentDict } from "@/i18n/content";
import { useLearner } from "@/lib/store";
import { tutorEligible, tutorHref } from "@/lib/tutor/live";
import { useHydrated } from "@/components/providers";
import type { MasteryLevel } from "@/lib/mastery";
import type { ClassChapter, ClassSubject, MyClass } from "@/content/my-class";
import type { ChapterProgress } from "@/content/syllabus";
import { lessonHref } from "@/content/syllabus";
import type { ExamChapterIndex } from "@/content/exam/chapter-index";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useMyClass, chapterHref, subjectHref } from "@/lib/useMyClass";
import { MasteryBar, MasterySquare, useExplainerIndex, useFmt, useMasteryName } from "@/experiences/khan/ui";
import { isRelevant, useExplainerContext } from "@/explainers/relevance";
import { chapterSessionHrefs, useChapterTitle, useClassProgress, useLessonOutlines, useSubjectName, type OutlineLesson } from "./data";

/* ------------------------------------------------------------------ */
/* Shared bits                                                          */
/* ------------------------------------------------------------------ */

function useClassName() {
  const t = useT();
  const f = useFmt();
  const tx = useSharedText();
  return (c: MyClass) => (c.grade === "pre" ? t("class.pre", "Pre-primary") : c.boardName ? tx(c.name) : t("class.gradeN", "Class {n}", { n: f.n(Number(c.grade)) }));
}

/** "Class 10 › Maths › Triangles" */
export function ClassCrumbs({ items }: { items: { href?: string; label: string }[] }) {
  const t = useT();
  return (
    <nav aria-label={t("class.breadcrumb", "Breadcrumb")} className="flex min-w-0 flex-wrap items-center gap-1 text-sm">
      {items.map((it, i) => (
        <span key={i} className="flex min-w-0 items-center gap-1">
          {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />}
          {it.href ? (
            <Link href={it.href} className="truncate font-medium text-accent hover:underline">
              {it.label}
            </Link>
          ) : (
            <span className="truncate font-medium text-muted" aria-current="page">
              {it.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

function NotInClass() {
  const t = useT();
  return (
    <div className="mx-auto max-w-xl px-5 py-16 text-center">
      <h1 className="text-2xl font-bold">{t("class.notFound.title", "This isn’t in your class")}</h1>
      <p className="mt-2 text-muted">{t("class.notFound.body", "It may be a subject you haven’t chosen. You can change your class and subjects in Settings.")}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/learn" className="btn-primary">
          {t("class.backHome", "Back to my class")}
        </Link>
        <Link href="/settings#my-class" className="btn-ghost">
          {t("class.changeSubjects", "Change class or subjects")}
        </Link>
      </div>
    </div>
  );
}

function Loading() {
  return <div className="mx-auto h-64 max-w-[960px] animate-pulse px-5 py-10" aria-busy />;
}

/* ------------------------------------------------------------------ */
/* Subject page                                                         */
/* ------------------------------------------------------------------ */

export function SubjectView({ subjectId }: { subjectId: string }) {
  const t = useT();
  const f = useFmt();
  const hydrated = useHydrated();
  const mc = useMyClass();
  const className = useClassName();
  const subjectName = useSubjectName();
  const subject = mc?.subjects.find((s) => s.id === subjectId) ?? null;
  const progress = useClassProgress(subject ? [subject] : []);
  if (!hydrated) return <Loading />;
  if (!mc || !subject) return <NotInClass />;
  const ps = subject.chapters.map((ch) => progress.get(`${subject.id}/${ch.slug}`)!);
  const done = ps.filter((p) => p.done).length;

  return (
    <div className="mx-auto max-w-[960px] px-4 py-6 sm:px-6 sm:py-8">
      <ClassCrumbs items={[{ href: "/learn", label: className(mc.myClass) }, { label: subjectName(subject) }]} />
      <header className="mt-4 flex items-center gap-4">
        <CourseIcon slug={subject.icon} size={56} />
        <div className="min-w-0">
          <h1 className="text-[1.75rem] font-bold leading-tight">{subjectName(subject)}</h1>
          <p className="mt-1 text-sm text-muted">{t("class.chaptersDone", "{done} of {total} chapters done", { done: f.n(done), total: f.n(subject.chapters.length) })}</p>
        </div>
      </header>
      <MasteryBar levels={ps.map((p) => p.level as MasteryLevel)} height={10} className="mt-5" />

      <div className="mt-8 space-y-8">
        {subject.parts.map((part, pi) => (
          <section key={pi} aria-labelledby={part.name ? `part-${pi}` : undefined}>
            {part.name && (
              <h2 id={`part-${pi}`} className="mb-3 flex items-baseline justify-between gap-2 text-lg font-bold">
                <PartName name={part.name} />
                <span className="text-sm font-normal text-muted">
                  {f.n(part.chapters.filter((ch) => progress.get(`${subject.id}/${ch.slug}`)!.done).length)}/{f.n(part.chapters.length)}
                </span>
              </h2>
            )}
            <ol className="card divide-y divide-line overflow-hidden">
              {part.chapters.map((ch) => (
                <ChapterRow key={ch.slug} subject={subject} chapter={ch} p={progress.get(`${subject.id}/${ch.slug}`)!} />
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

function PartName({ name }: { name: string }) {
  const tx = useSharedText();
  return <span>{tx(name)}</span>;
}

function ChapterRow({ subject, chapter, p }: { subject: ClassSubject; chapter: ClassChapter; p: ChapterProgress }) {
  const t = useT();
  const f = useFmt();
  const name = useMasteryName();
  const title = useChapterTitle(chapter);
  const started = p.completed > 0 && !p.done;
  return (
    <li>
      <Link href={chapterHref(subject, chapter)} className="flex items-center gap-3 px-4 py-3.5 transition hover:bg-surface-2/60 sm:px-5" data-chapter={chapter.slug}>
        <span className="w-6 shrink-0 text-right text-sm font-semibold tabular-nums text-muted">{f.n(chapter.n)}</span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-snug">{title}</span>
          <span className="mt-1 flex items-center gap-2 text-xs text-muted">
            <MasterySquare level={p.level} size={11} />
            {p.done ? t("khan.focus.done", "Done") : started ? name(p.level) : t("class.lessonsN", "{n} lessons", { n: f.n(chapter.lessonIds.length) })}
            {started && <span aria-hidden>·</span>}
            {started && <span>{t("khan.focus.lessonsPct", "{pct} of lessons", { pct: f.pct(p.completed) })}</span>}
          </span>
        </span>
        {p.done ? <Check className="h-5 w-5 shrink-0 text-good" strokeWidth={3} aria-label={t("khan.focus.done", "Done")} /> : <ChevronRight className="h-5 w-5 shrink-0 text-muted" aria-hidden />}
      </Link>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Chapter page                                                         */
/* ------------------------------------------------------------------ */

export function ChapterView({ subjectId, chapterSlug, examIndex }: { subjectId: string; chapterSlug: string; examIndex?: ExamChapterIndex }) {
  const hydrated = useHydrated();
  const mc = useMyClass();
  const subject = mc?.subjects.find((s) => s.id === subjectId) ?? null;
  const chapter = subject?.chapters.find((c) => c.slug === chapterSlug) ?? null;
  if (!hydrated) return <Loading />;
  if (!mc || !subject || !chapter) return <NotInClass />;
  return <Chapter myClass={mc.myClass} subject={subject} chapter={chapter} examIndex={examIndex} />;
}

const EXAM_SUBJECTS = ["physics", "chemistry", "biology", "maths"];
const ENTRANCE = ["NEET", "JEE", "JEE_ADV", "KCET", "COMEDK"];

/** Exam-bank links for a class chapter: the chapter drill (when exam questions exist) and its formula sheet. */
function chapterExamLinks(myClass: MyClass, subject: ClassSubject, chapter: ClassChapter, index?: ExamChapterIndex) {
  if (!index || !EXAM_SUBJECTS.includes(subject.id)) return { drill: null as string | null, count: 0, formulas: null as string | null, sheet: null as string | null };
  // NCERT class of the chapter: entrance-exam syllabi carry it per chapter; boards from the class.
  const g = myClass.grade;
  const grade = chapter.syllabus?.grade ?? (g === "12" || g === "PUC-2" ? "12" : g === "11" || g === "PUC-1" ? "11" : null);
  const count = grade ? (index.questions[`${grade}|${subject.id}|${chapter.title}`] ?? 0) : 0;
  let drill: string | null = null;
  if (count && grade) {
    const p = new URLSearchParams({ subject: subject.id, chapter: chapter.title, grade });
    if (myClass.board === "exam" && ENTRANCE.includes(g)) p.set("exam", g);
    drill = `/exam/practice?${p}`;
  }
  const sheet = [chapter.title, chapter.syllabus?.formulaChapter].find((c): c is string => Boolean(c && index.formulas.includes(c)));
  const formulas = sheet ? `/exam/formulas?chapter=${encodeURIComponent(sheet)}` : chapter.syllabus?.formulaChapter ? "/exam/formulas" : null;
  return { drill, count, formulas, sheet: sheet ?? chapter.syllabus?.formulaChapter ?? null };
}

function Chapter({ myClass, subject, chapter, examIndex }: { myClass: MyClass; subject: ClassSubject; chapter: ClassChapter; examIndex?: ExamChapterIndex }) {
  const t = useT();
  const f = useFmt();
  const className = useClassName();
  const subjectName = useSubjectName();
  const title = useChapterTitle(chapter);
  const progress = useClassProgress([subject]);
  const p = progress.get(`${subject.id}/${chapter.slug}`)!;
  const lessonsDone = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const { lessons, ready } = useLessonOutlines(chapter.lessonIds);
  const boardLessons = lessons.filter((l) => l.track !== "exam");
  const examLessons = lessons.filter((l) => l.track === "exam");
  const sessions = chapterSessionHrefs(chapter);
  const idx = subject.chapters.indexOf(chapter);
  const prevCh = subject.chapters[idx - 1];
  const nextCh = subject.chapters[idx + 1];
  const doneCount = chapter.lessonIds.filter((id) => lessonsDone[id]).length;
  const firstCards = lessons.find((l) => l.items.some((i) => i.kind === "cards"));
  const examLinks = chapterExamLinks(myClass, subject, chapter, examIndex);
  const examCards = (
    <>
      {examLinks.drill && <ActionCard href={examLinks.drill} icon={Crosshair} title={t("class.examQuestions", "Exam questions")} hint={t("class.examQuestionsHint", "{n} JEE · NEET · CET-style questions on this chapter", { n: f.n(examLinks.count) })} />}
      {examLinks.formulas && <ActionCard href={examLinks.formulas} icon={Sigma} title={t("class.formulas", "Formula sheet")} hint={examLinks.sheet ?? undefined} />}
    </>
  );

  return (
    <div className="mx-auto max-w-[960px] px-4 py-6 sm:px-6 sm:py-8">
      <ClassCrumbs items={[{ href: "/learn", label: className(myClass) }, { href: subjectHref(subject), label: subjectName(subject) }, { label: title }]} />
      <header className="mt-4">
        <p className="eyebrow">{chapter.part ? `${t("class.chapterN", "Chapter {n}", { n: f.n(chapter.n) })} · ${chapter.part}` : t("class.chapterN", "Chapter {n}", { n: f.n(chapter.n) })}</p>
        <h1 className="mt-1 text-[1.75rem] font-bold leading-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted">{t("class.lessonsDone", "{done} of {total} lessons done", { done: f.n(doneCount), total: f.n(chapter.lessonIds.length) })}</p>
        <MasteryBar levels={chapter.lessonIds.map((id) => (mastery[id] ?? 0) as MasteryLevel)} height={8} className="mt-3 max-w-md" />
        {tutorEligible(myClass.grade) && (
          <Link href={tutorHref(`${subjectName(subject)}: ${title}`)} className="btn-ghost mt-3 inline-flex items-center gap-1.5 rounded-xl border-2 border-line px-3 py-1.5 text-sm font-extrabold hover:border-accent">
            <Presentation className="h-4 w-4 text-accent" /> {t("tutor.live.entry", "Learn this with the AI tutor")}
          </Link>
        )}
      </header>

      {chapter.lessonIds.length === 0 ? (
        <>
          <p className="card mt-6 p-5 text-muted">{t("khan.focus.soon", "Lessons coming soon")}</p>
          {(examLinks.drill || examLinks.formulas) && (
            <section aria-labelledby="ch-practise" className="mt-6">
              <h2 id="ch-practise" className="mb-3 text-lg font-bold">
                {t("class.practiseTitle", "Practise and test yourself")}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">{examCards}</div>
            </section>
          )}
        </>
      ) : (
        <>
          <section aria-labelledby="ch-lessons" className="mt-6">
            <h2 id="ch-lessons" className="sr-only">
              {t("class.lessons", "Lessons")}
            </h2>
            <ol className="card divide-y divide-line overflow-hidden">
              {ready
                ? boardLessons.map((l, i) => <LessonRow key={l.id} n={i + 1} lesson={l} done={Boolean(lessonsDone[l.id])} current={l.id === p.nextLesson && !p.done} />)
                : chapter.lessonIds.map((id) => <li key={id} className="h-[68px] animate-pulse" />)}
            </ol>
          </section>

          {ready && examLessons.length > 0 && (
            <section aria-labelledby="ch-exam" className="mt-6">
              <h2 id="ch-exam" className="flex flex-wrap items-baseline gap-x-2 text-lg font-bold">
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="h-5 w-5 text-accent" aria-hidden /> {t("class.examEdge", "Exam edge")}
                </span>
                <span className="text-sm font-semibold text-muted">{t("class.examEdgeSub", "JEE · NEET · KCET · COMEDK")}</span>
              </h2>
              <p className="mb-3 mt-1 text-sm text-muted">{t("class.examEdgeHint", "Entrance-level problems, shortcuts and traps for this chapter. Do the board lessons first.")}</p>
              <ol className="card divide-y divide-line overflow-hidden">
                {examLessons.map((l, i) => (
                  <LessonRow key={l.id} n={boardLessons.length + i + 1} lesson={l} done={Boolean(lessonsDone[l.id])} current={l.id === p.nextLesson && !p.done} />
                ))}
              </ol>
            </section>
          )}

          <section aria-labelledby="ch-practise" className="mt-6">
            <h2 id="ch-practise" className="mb-3 text-lg font-bold">
              {t("class.practiseTitle", "Practise and test yourself")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <ActionCard href={sessions.practice} icon={Target} title={t("class.practise", "Practise this chapter")} hint={t("class.practiseHint", "Questions from every lesson, with explanations")} />
              <ActionCard href={sessions.test} icon={Trophy} title={t("class.test", "Chapter test")} hint={t("class.testHint", "A timed-feel test of the whole chapter")} />
              {firstCards && <ActionCard href={`${firstCards.href}?item=cards`} icon={Layers} title={t("class.flashcards", "Flashcards")} hint={t("class.flashcardsHint", "Quick revision of key terms")} />}
              {examCards}
            </div>
          </section>
        </>
      )}

      <ChapterExplainers lessonIds={chapter.lessonIds} />

      <nav className="mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-5" aria-label={t("class.chapterNav", "Chapters")}>
        {prevCh ? <ChapterLink subject={subject} chapter={prevCh} dir="prev" /> : <span />}
        {nextCh ? <ChapterLink subject={subject} chapter={nextCh} dir="next" /> : <span />}
      </nav>
    </div>
  );
}

/** Visual explainers tied to this chapter's lessons and pitched at the learner (hidden when none). */
function ChapterExplainers({ lessonIds }: { lessonIds: string[] }) {
  const t = useT();
  const index = useExplainerIndex();
  const ctx = useExplainerContext();
  const dict = useContentDict("explainers");
  if (!index) return null;
  const set = new Set(lessonIds);
  const list = index.all.filter((e) => e.lessons.some((l) => set.has(l)) && (!ctx || isRelevant(e, ctx)));
  if (!list.length) return null;
  return (
    <section aria-labelledby="ch-seeit" className="mt-6">
      <h2 id="ch-seeit" className="mb-3 flex items-center gap-2 text-lg font-bold">
        <Eye className="h-5 w-5 text-accent" aria-hidden /> {t("class.seeIt", "See it: visual explainers")}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((e) => (
          <Link key={e.id} href={`/explain/${e.id}`} className="card flex min-w-0 items-center gap-3 p-4 transition hover:border-accent">
            <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: e.color }} aria-hidden />
            <span className="min-w-0">
              <span className="block truncate font-semibold">{dict?.[e.title] ?? e.title}</span>
              <span className="block truncate text-xs text-muted">{dict?.[e.tagline] ?? e.tagline}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function LessonRow({ n, lesson, done, current }: { n: number; lesson: OutlineLesson; done: boolean; current: boolean }) {
  const t = useT();
  const f = useFmt();
  const dict = useContentDict(lesson.course);
  return (
    <li>
      <Link href={lesson.href} className={clsx("flex items-center gap-3 px-4 py-3.5 transition hover:bg-surface-2/60 sm:px-5", current && "bg-accent-soft/50")} data-lesson={lesson.id}>
        <span className={clsx("grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black", done ? "bg-good text-white" : current ? "bg-accent text-white" : "bg-surface-2 text-muted")}>
          {done ? <Check className="h-4 w-4" strokeWidth={3} aria-hidden /> : f.n(n)}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-semibold leading-snug">{dict?.[lesson.title] ?? lesson.title}</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden /> {t("khan.minShort", "{n} min", { n: f.n(lesson.minutes) })}
            {done && <span className="font-semibold text-good-shade">· {t("khan.focus.done", "Done")}</span>}
            {current && !done && <span className="font-semibold text-accent">· {t("class.upNext", "Up next")}</span>}
          </span>
        </span>
        <BookOpen className="h-5 w-5 shrink-0 text-muted" aria-hidden />
      </Link>
    </li>
  );
}

function ActionCard({ href, icon: Icon, title, hint }: { href: string; icon: typeof Target; title: string; hint?: string }) {
  return (
    <Link href={href} className="card flex items-center gap-3 p-4 transition hover:border-accent">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold">{title}</span>
        {hint && <span className="block text-xs text-muted">{hint}</span>}
      </span>
    </Link>
  );
}

function ChapterLink({ subject, chapter, dir }: { subject: ClassSubject; chapter: ClassChapter; dir: "prev" | "next" }) {
  const t = useT();
  const title = useChapterTitle(chapter);
  return (
    <Link href={chapterHref(subject, chapter)} className={clsx("group flex max-w-[45%] flex-col", dir === "next" && "ml-auto items-end text-right")}>
      <span className="flex items-center gap-1 text-xs font-semibold text-muted">
        {dir === "prev" && <ArrowLeft className="h-3.5 w-3.5" aria-hidden />}
        {dir === "prev" ? t("class.prevChapter", "Previous chapter") : t("class.nextChapter", "Next chapter")}
        {dir === "next" && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
      </span>
      <span className="truncate font-semibold text-accent group-hover:underline">{title}</span>
    </Link>
  );
}

/** Lesson links by id (used by the lesson page's chapter navigation). */
export { lessonHref };

/* ------------------------------------------------------------------ */
/* Lesson page: chapter context                                          */
/* ------------------------------------------------------------------ */

/** Sidebar on a lesson opened from a class chapter: the chapter's lessons, then practice and the chapter test. */
export function ChapterNav({ subject, chapter, currentId }: { subject: ClassSubject; chapter: ClassChapter; currentId: string }) {
  const t = useT();
  const f = useFmt();
  const title = useChapterTitle(chapter);
  const done = useLearner((s) => s.lessons);
  const hydrated = useHydrated();
  const { lessons } = useLessonOutlines(chapter.lessonIds);
  const sessions = chapterSessionHrefs(chapter);
  return (
    <nav aria-label={t("class.chapterLessons", "Chapter lessons")}>
      <Link href={chapterHref(subject, chapter)} className="block">
        <p className="eyebrow">{t("class.chapterN", "Chapter {n}", { n: f.n(chapter.n) })}</p>
        <p className="mt-1 text-lg font-black leading-snug hover:text-accent">{title}</p>
      </Link>
      <ol className="mt-5 space-y-1">
        {lessons.map((l) => (
          <ChapterNavLesson key={l.id} lesson={l} current={l.id === currentId} done={hydrated && Boolean(done[l.id])} />
        ))}
      </ol>
      <div className="mt-4 space-y-1 border-t-2 border-line pt-4">
        <Link href={sessions.practice} className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-[15px] font-bold hover:bg-surface-2">
          <Target className="h-4 w-4 text-accent-2" aria-hidden /> {t("class.practise", "Practise this chapter")}
        </Link>
        <Link href={sessions.test} className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-[15px] font-bold hover:bg-surface-2">
          <Trophy className="h-4 w-4 text-warn" aria-hidden /> {t("class.test", "Chapter test")}
        </Link>
      </div>
    </nav>
  );
}

function ChapterNavLesson({ lesson, current, done }: { lesson: OutlineLesson; current: boolean; done: boolean }) {
  const dict = useContentDict(lesson.course);
  return (
    <li>
      <Link href={lesson.href} className={clsx("flex items-center gap-3 rounded-xl px-2.5 py-2 text-[15px] font-bold transition", current ? "bg-accent-soft text-accent" : "hover:bg-surface-2")} aria-current={current ? "page" : undefined}>
        <span className={clsx("grid h-4 w-4 shrink-0 place-items-center rounded", done ? "bg-good text-white" : "border-2 border-line")}>{done && <Check className="h-3 w-3" strokeWidth={3.5} aria-hidden />}</span>
        <span className="min-w-0 flex-1 truncate">{dict?.[lesson.title] ?? lesson.title}</span>
      </Link>
    </li>
  );
}

/** Class context for a lesson page: breadcrumb labels, sidebar and the chapter's previous / next lessons. */
export function useLessonClassContext(lessonId: string) {
  const t = useT();
  const f = useFmt();
  const mc = useMyClass();
  const subjectName = useSubjectName();
  const tx = useSharedText();
  const hit = (() => {
    if (!mc) return null;
    for (const s of mc.subjects)
      for (const ch of s.chapters) {
        const i = ch.lessonIds.indexOf(lessonId);
        if (i >= 0) return { subject: s, chapter: ch, i };
      }
    return null;
  })();
  const { lessons } = useLessonOutlines(hit ? hit.chapter.lessonIds : []);
  const dicts = { a: useContentDict(hit?.chapter.lessonIds[0]?.split("/")[0] ?? "") };
  if (!hit) return null;
  const { subject, chapter, i } = hit;
  const chTitle = chapter.unit ? (dicts.a?.[chapter.title] ?? chapter.title) : tx(chapter.title);
  const byId = new Map(lessons.map((l) => [l.id, l]));
  const name = (l: OutlineLesson) => dicts.a?.[l.title] ?? l.title;
  const prevL = byId.get(chapter.lessonIds[i - 1] ?? "");
  const nextL = byId.get(chapter.lessonIds[i + 1] ?? "");
  const sessions = chapterSessionHrefs(chapter);
  const done = (id: string) => Boolean(useLearner.getState().lessons[id]);
  return {
    course: { title: subjectName(subject), href: subjectHref(subject) },
    unit: { title: chTitle, href: chapterHref(subject, chapter), index: chapter.n - 1, label: t("class.chapterTitleN", "Chapter {n}: {title}", { n: f.n(chapter.n), title: chTitle }) },
    sidebar: <ChapterNav subject={subject} chapter={chapter} currentId={lessonId} />,
    prev: prevL ? { href: prevL.href, title: name(prevL) } : null,
    next: nextL ? { href: nextL.href, label: t("lesson.upNext.nextLesson", "Next lesson"), title: name(nextL) } : { href: sessions.test, label: t("class.test", "Chapter test"), title: chTitle },
    progress: { done: chapter.lessonIds.filter(done).length, total: chapter.lessonIds.length },
  };
}
