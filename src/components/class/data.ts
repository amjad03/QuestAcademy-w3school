"use client";

import { useEffect, useMemo, useState } from "react";
import type { CourseOutline } from "@/content/course";
import { chapterProgress, type ChapterProgress, type SyllabusChapter } from "@/content/syllabus";
import type { ClassChapter, ClassSubject } from "@/content/my-class";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useContentDict, useSharedText } from "@/i18n/content";
import { useT } from "@/i18n";

/** Progress of a class chapter (same rules as the board syllabus: lessons done + mastery, or ticked done). */
export function classChapterProgress(ch: ClassChapter, st: { lessons: Record<string, unknown>; mastery: Record<string, never> | Record<string, number>; planDone?: Record<string, string> }): ChapterProgress {
  const syl: SyllabusChapter = ch.syllabus ? { ...ch.syllabus, lessonIds: ch.lessonIds } : { id: `${ch.unit?.course}/${ch.slug}`, title: ch.title, lessonIds: ch.lessonIds, examChapters: [] };
  return chapterProgress(syl, st as Parameters<typeof chapterProgress>[1]);
}

/** Progress for every chapter of the given subjects, keyed by `${subject}/${chapter slug}`. */
export function useClassProgress(subjects: ClassSubject[]) {
  const hydrated = useHydrated();
  const lessons = useLearner((s) => s.lessons);
  const mastery = useLearner((s) => s.mastery);
  const planDone = useLearner((s) => s.planDone);
  return useMemo(() => {
    const st = hydrated ? { lessons, mastery, planDone } : { lessons: {}, mastery: {}, planDone: {} };
    const m = new Map<string, ChapterProgress>();
    for (const s of subjects) for (const ch of s.chapters) m.set(`${s.id}/${ch.slug}`, classChapterProgress(ch, st as never));
    return m;
  }, [subjects, hydrated, lessons, mastery, planDone]);
}

/** Subject names in the learner's language. */
export function useSubjectName() {
  const t = useT();
  const tx = useSharedText();
  return (s: { id: string; name: string }) => (s.id === "social" ? t("class.subject.social", "Social Science") : tx(s.name));
}

/** A chapter title in the learner's language (syllabus chapters, or a course unit title). */
export function useChapterTitle(ch: ClassChapter) {
  const tx = useSharedText();
  const dict = useContentDict(ch.unit?.course ?? "");
  return ch.unit ? (dict?.[ch.title] ?? ch.title) : tx(ch.title);
}

const cache = new Map<string, CourseOutline>();
const pending = new Map<string, Promise<CourseOutline | null>>();

function loadOutline(slug: string): Promise<CourseOutline | null> {
  if (cache.has(slug)) return Promise.resolve(cache.get(slug)!);
  if (!pending.has(slug)) {
    const p = (async () => {
      for (let attempt = 0; attempt < 4; attempt++) {
        try {
          const r = await fetch(`/course-data/${slug}`);
          if (r.ok) {
            const o = (await r.json()) as CourseOutline;
            cache.set(slug, o);
            return o;
          }
        } catch {
          /* retry */
        }
        await new Promise((res) => setTimeout(res, 600 * 2 ** attempt));
      }
      return null;
    })();
    pending.set(slug, p);
  }
  return pending.get(slug)!;
}

export type OutlineLesson = CourseOutline["units"][number]["lessons"][number] & { course: string };

/** Lesson outlines (title, minutes, items) for the given lesson ids, loaded per course. */
export function useLessonOutlines(lessonIds: string[]) {
  const slugs = useMemo(() => [...new Set(lessonIds.map((id) => id.split("/")[0]))], [lessonIds]);
  const [, bump] = useState(0);
  useEffect(() => {
    let live = true;
    for (const s of slugs) if (!cache.has(s)) void loadOutline(s).then(() => live && bump((n) => n + 1));
    return () => {
      live = false;
    };
  }, [slugs]);
  const map = new Map<string, OutlineLesson>();
  for (const s of slugs) {
    const o = cache.get(s);
    if (o) for (const u of o.units) for (const l of u.lessons) map.set(l.id, { ...l, course: s });
  }
  const ready = slugs.every((s) => cache.has(s));
  return { lessons: lessonIds.map((id) => map.get(id)).filter((x): x is OutlineLesson => Boolean(x)), ready };
}

/** Session links for a chapter: practice and a test across its lessons (see app/(focus)/session/chapter). */
export function chapterSessionHrefs(ch: ClassChapter) {
  const id = ch.syllabus ? ch.syllabus.id.replace(/:/g, "_") : `u.${ch.unit!.course}.${ch.unit!.topic}`;
  return { practice: `/session/chapter/${id}/practice`, test: `/session/chapter/${id}/test` };
}
