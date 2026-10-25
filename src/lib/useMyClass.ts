"use client";

import { useMemo } from "react";
import { useLearner } from "@/lib/store";
import { useCatalog } from "@/components/shell/CatalogContext";
import type { CourseCard } from "@/content/course";
import type { Stage } from "@/content/types";
import { EXTRA_TOPICS } from "@/content/subjects/extra";
import { boardClassOf, chosenSubjects, classFromSyllabus, type ClassChapter, type ClassSubject, type MyClass } from "@/content/my-class";

/** Grade of a learner without a board syllabus: the one they picked, else a guess from their age. */
export function gradeOf(profile: { stage?: Stage | null; grade?: string | null; age?: number | null }): string | null {
  if (profile.stage === "preprimary") return "pre";
  if (profile.stage !== "primary" && profile.stage !== "middle") return null;
  if (profile.grade && /^[1-8]$/.test(profile.grade)) return profile.grade;
  const age = profile.age ?? (profile.stage === "primary" ? 8 : 12);
  const g = Math.min(profile.stage === "primary" ? 5 : 8, Math.max(profile.stage === "primary" ? 1 : 6, age - 5));
  return String(g);
}

/** A class built from the school / early-learning courses for one grade (each course is a subject, each unit a chapter). */
export function classFromCourses(grade: string, catalog: CourseCard[]): MyClass {
  const fits = (c: CourseCard) => {
    if (grade === "pre") return c.world === "kids" && c.stages.includes("preprimary");
    if (c.world !== "kids" && c.world !== "school") return false;
    const grades = c.levels.map((l) => /^Grade (\d+)$/.exec(l)?.[1]).filter(Boolean);
    if (grades.length) return grades.includes(grade);
    return c.stages.includes(Number(grade) <= 5 ? "primary" : "middle");
  };
  const subjects: ClassSubject[] = catalog.filter(fits).map((c) => {
    const chapters: ClassChapter[] = c.unitList
      .filter(([topic]) => !EXTRA_TOPICS.has(`${c.slug}/${topic}`))
      .map(([topic, title], i) => ({ slug: topic, n: i + 1, title, part: null, lessonIds: c.lessonIds.filter((id) => id.split("/")[1] === topic), syllabus: null, unit: { course: c.slug, topic } }));
    return { id: c.slug, name: c.title, icon: c.slug, parts: [{ name: null, chapters }], chapters };
  });
  const name = grade === "pre" ? "Pre-primary" : `Class ${grade}`;
  return { key: `grade:${grade}`, board: null, grade, name, boardName: null, subjects };
}

/**
 * The learner's class and their chosen subjects, or null for learners without a class
 * (college, postgraduate, lifelong: they browse the full catalogue).
 */
export function useMyClass(): { myClass: MyClass; subjects: ClassSubject[] } | null {
  const profile = useLearner((s) => s.profile);
  const catalog = useCatalog();
  return useMemo(() => {
    const bg = boardClassOf(profile);
    let c: MyClass | null = bg ? classFromSyllabus(bg.board, bg.grade) : null;
    if (!c) {
      const g = gradeOf(profile);
      if (g) c = classFromCourses(g, catalog);
    }
    if (!c) return null;
    return { myClass: c, subjects: chosenSubjects(c, profile.subjects) };
  }, [profile, catalog]);
}

/** Where a lesson sits in the learner's class: subject, chapter and its neighbours. */
export function useLessonInClass(lessonId: string) {
  const mc = useMyClass();
  return useMemo(() => {
    if (!mc) return null;
    for (const s of mc.subjects)
      for (const ch of s.chapters) {
        const i = ch.lessonIds.indexOf(lessonId);
        if (i >= 0) return { myClass: mc.myClass, subject: s, chapter: ch, index: i, prev: ch.lessonIds[i - 1] ?? null, next: ch.lessonIds[i + 1] ?? null };
      }
    return null;
  }, [mc, lessonId]);
}

export const subjectHref = (s: { id: string }) => `/class/${s.id}`;
export const chapterHref = (s: { id: string }, ch: { slug: string }) => `/class/${s.id}/${ch.slug}`;
