"use client";

import Link from "next/link";
import { useState } from "react";
import { Target, Trophy } from "lucide-react";
import clsx from "clsx";
import { useT } from "@/i18n";
import type { ClassChapter, ClassSubject } from "@/content/my-class";
import type { ChapterProgress } from "@/content/syllabus";
import { useMyClass, chapterHref } from "@/lib/useMyClass";
import { MasterySquare, useFmt } from "@/experiences/khan/ui";
import { chapterSessionHrefs, useChapterTitle, useClassProgress, useSubjectName } from "./data";

/** Practice & tests for the learner's class: pick a subject, then practise or test any chapter. */
export function ClassPractice() {
  const t = useT();
  const mc = useMyClass();
  const subjectName = useSubjectName();
  const [tab, setTab] = useState<string | null>(null);
  const subjects = mc?.subjects ?? [];
  const progress = useClassProgress(subjects);
  if (!mc || !subjects.length) return null;
  const subject = subjects.find((s) => s.id === tab) ?? subjects[0];
  const chapters = subject.chapters.filter((c) => c.lessonIds.length);

  return (
    <section aria-labelledby="class-practice" className="card mt-8 overflow-hidden">
      <div className="p-5 pb-0 sm:p-6 sm:pb-0">
        <h2 id="class-practice" className="text-xl font-black">
          {t("class.practice.title", "Practise by subject")}
        </h2>
        <p className="mt-1 text-sm font-semibold text-muted">{t("class.practice.sub", "Every chapter of your class has practice questions and a chapter test.")}</p>
      </div>
      <div className="mt-4 flex gap-5 overflow-x-auto border-b border-line px-5 sm:px-6" role="tablist" aria-label={t("class.mySubjects", "My subjects")}>
        {subjects.map((s) => (
          <button key={s.id} type="button" role="tab" aria-selected={s.id === subject.id} onClick={() => setTab(s.id)} className={clsx("shrink-0 border-b-2 py-2.5 text-sm font-bold transition", s.id === subject.id ? "border-accent text-accent" : "border-transparent text-muted hover:text-ink")}>
            {subjectName(s)}
          </button>
        ))}
      </div>
      <ol className="divide-y divide-line" role="tabpanel">
        {chapters.map((ch) => (
          <PracticeRow key={ch.slug} subject={subject} chapter={ch} p={progress.get(`${subject.id}/${ch.slug}`)!} />
        ))}
      </ol>
    </section>
  );
}

function PracticeRow({ subject, chapter, p }: { subject: ClassSubject; chapter: ClassChapter; p: ChapterProgress }) {
  const t = useT();
  const f = useFmt();
  const title = useChapterTitle(chapter);
  const s = chapterSessionHrefs(chapter);
  return (
    <li className="flex flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:px-6">
      <Link href={chapterHref(subject, chapter)} className="flex min-w-0 flex-1 items-center gap-3 hover:text-accent">
        <span className="w-6 shrink-0 text-right text-sm font-semibold tabular-nums text-muted">{f.n(chapter.n)}</span>
        <MasterySquare level={p.level} size={12} />
        <span className="min-w-0 truncate font-semibold">{title}</span>
      </Link>
      <span className="flex shrink-0 gap-2 pl-9 sm:pl-0">
        <Link href={s.practice} className="btn-ghost !min-h-[2.125rem] !px-3 !py-1 !text-sm">
          <Target className="h-4 w-4" aria-hidden /> {t("class.practiseShort", "Practise")}
        </Link>
        <Link href={s.test} className="btn-ghost !min-h-[2.125rem] !px-3 !py-1 !text-sm">
          <Trophy className="h-4 w-4" aria-hidden /> {t("class.testShort", "Test")}
        </Link>
      </span>
    </li>
  );
}

/** Lesson ids in the learner's class (null when they have no class). */
export function useClassLessonIds(): Set<string> | null {
  const mc = useMyClass();
  if (!mc) return null;
  return new Set(mc.subjects.flatMap((s) => s.chapters.flatMap((c) => c.lessonIds)));
}
