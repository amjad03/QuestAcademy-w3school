import type { Lesson, Subject, Topic, WorldId } from "./types";

import { abcAdventures } from "./subjects/kids/abc-adventures";
import { numberLand } from "./subjects/kids/number-land";
import { shapesColors } from "./subjects/kids/shapes-colors";
import { myWorld } from "./subjects/kids/my-world";
import { mathMagic } from "./subjects/kids/math-magic";

import { mathMiddle } from "./subjects/school/math-middle";
import { mathHigh } from "./subjects/school/math-high";
import { physicsSchool } from "./subjects/school/physics-school";
import { chemistrySchool } from "./subjects/school/chemistry-school";
import { biologySchool } from "./subjects/school/biology-school";
import { english } from "./subjects/school/english";
import { socialStudies } from "./subjects/school/social-studies";
import { socialScience } from "./subjects/school/social-science";
import { hindi } from "./subjects/school/hindi";
import { kannada } from "./subjects/school/kannada";
import { computerApplications } from "./subjects/school/computer-applications";
import { generalKnowledge } from "./subjects/school/general-knowledge";
import { physicsSenior } from "./subjects/senior/physics-senior";
import { chemistrySenior } from "./subjects/senior/chemistry-senior";
import { biologySenior } from "./subjects/senior/biology-senior";
import { mathsSenior } from "./subjects/senior/maths-senior";
import { extraTopics } from "./subjects/extra";

import { examPhysics } from "./subjects/exam/exam-physics";
import { examChemistry } from "./subjects/exam/exam-chemistry";
import { examBiology } from "./subjects/exam/exam-biology";
import { examMaths } from "./subjects/exam/exam-maths";

import { html } from "./subjects/code/html";
import { css } from "./subjects/code/css";
import { javascript } from "./subjects/code/javascript";
import { python } from "./subjects/code/python";
import { sql } from "./subjects/code/sql";

import { dsa } from "./subjects/campus/dsa";
import { machineLearning } from "./subjects/campus/machine-learning";
import { electricalEngineering } from "./subjects/campus/electrical-engineering";
import { humanAnatomy } from "./subjects/campus/human-anatomy";
import { finance } from "./subjects/campus/finance";
import { economics } from "./subjects/campus/economics";
import { psychology } from "./subjects/campus/psychology";
import { uxDesign } from "./subjects/campus/ux-design";

export const subjects: Subject[] = [
  abcAdventures,
  numberLand,
  shapesColors,
  myWorld,
  mathMagic,
  mathMiddle,
  mathHigh,
  physicsSchool,
  chemistrySchool,
  biologySchool,
  english,
  socialStudies,
  socialScience,
  hindi,
  kannada,
  computerApplications,
  generalKnowledge,
  physicsSenior,
  chemistrySenior,
  biologySenior,
  mathsSenior,
  examPhysics,
  examChemistry,
  examBiology,
  examMaths,
  html,
  css,
  javascript,
  python,
  sql,
  dsa,
  machineLearning,
  electricalEngineering,
  humanAnatomy,
  finance,
  economics,
  psychology,
  uxDesign,
];

// Class 9–10 chapters written to close syllabus gaps join their school course.
for (const s of [mathHigh, physicsSchool, chemistrySchool, biologySchool, english]) s.topics = [...s.topics, ...extraTopics(s.slug)];

const bySlug = new Map(subjects.map((s) => [s.slug, s]));

export function getSubject(slug: string): Subject | undefined {
  return bySlug.get(slug);
}

export function subjectsInWorld(world: WorldId): Subject[] {
  return subjects.filter((s) => s.world === world);
}

/** Globally unique lesson id used for progress tracking. */
export function lessonId(subject: string, topic: string, lesson: string) {
  return `${subject}/${topic}/${lesson}`;
}

export function lessonHref(subject: string, topic: string, lesson: string) {
  return `/course/${subject}/${topic}/${lesson}`;
}

export interface LessonRef {
  id: string;
  href: string;
  subject: Subject;
  topic: Topic;
  lesson: Lesson;
  /** Position within the subject (0-based). */
  index: number;
}

const flatCache = new Map<string, LessonRef[]>();

export function flatLessons(subject: Subject): LessonRef[] {
  const cached = flatCache.get(subject.slug);
  if (cached) return cached;
  const list: LessonRef[] = [];
  for (const topic of subject.topics) {
    for (const lesson of topic.lessons) {
      list.push({
        id: lessonId(subject.slug, topic.slug, lesson.slug),
        href: lessonHref(subject.slug, topic.slug, lesson.slug),
        subject,
        topic,
        lesson,
        index: list.length,
      });
    }
  }
  flatCache.set(subject.slug, list);
  return list;
}

export function findLesson(subjectSlug: string, topicSlug: string, lessonSlug: string) {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;
  const list = flatLessons(subject);
  const i = list.findIndex((l) => l.topic.slug === topicSlug && l.lesson.slug === lessonSlug);
  if (i < 0) return undefined;
  return { ref: list[i], prev: list[i - 1], next: list[i + 1], all: list };
}

export function getLessonById(id: string): LessonRef | undefined {
  const [s, t, l] = id.split("/");
  return findLesson(s, t, l)?.ref;
}

export function allLessons(): LessonRef[] {
  return subjects.flatMap(flatLessons);
}

export function subjectStats(subject: Subject) {
  const lessons = flatLessons(subject);
  return {
    topics: subject.topics.length,
    lessons: lessons.length,
    minutes: lessons.reduce((a, l) => a + l.lesson.minutes, 0),
    xp: lessons.reduce((a, l) => a + l.lesson.xp, 0),
    challenges: lessons.filter((l) => l.lesson.challenge).length,
  };
}

export function platformStats() {
  const all = allLessons();
  return {
    subjects: subjects.length,
    lessons: all.length,
    questions: all.reduce((a, l) => a + (l.lesson.quiz?.length ?? 0), 0),
    flashcards: all.reduce((a, l) => a + (l.lesson.flashcards?.length ?? 0), 0),
    challenges: all.filter((l) => l.lesson.challenge).length,
  };
}

export interface SearchItem {
  kind: "subject" | "topic" | "lesson";
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  world: WorldId;
  /** Course slug (for the course icon). */
  course: string;
  keywords: string;
}

let searchCache: SearchItem[] | null = null;

export function searchIndex(): SearchItem[] {
  if (searchCache) return searchCache;
  const items: SearchItem[] = [];
  for (const s of subjects) {
    items.push({
      kind: "subject",
      title: s.title,
      subtitle: s.tagline,
      href: `/course/${s.slug}`,
      icon: s.icon,
      world: s.world,
      course: s.slug,
      keywords: [s.title, s.tagline, s.domain ?? "", ...s.levels].join(" ").toLowerCase(),
    });
    for (const t of s.topics) {
      items.push({
        kind: "topic",
        title: t.title,
        subtitle: s.title,
        href: `/course/${s.slug}/${t.slug}`,
        icon: t.icon,
        world: s.world,
        course: s.slug,
        keywords: [t.title, t.description, s.title].join(" ").toLowerCase(),
      });
      for (const l of t.lessons) {
        items.push({
          kind: "lesson",
          title: l.title,
          subtitle: `${s.title} · ${t.title}`,
          href: lessonHref(s.slug, t.slug, l.slug),
          icon: t.icon,
          world: s.world,
          course: s.slug,
          keywords: [l.title, l.summary, t.title, s.title].join(" ").toLowerCase(),
        });
      }
    }
  }
  searchCache = items;
  return items;
}

/* ------------------------------------------------------------------ */
/* Lightweight catalog (no lesson bodies) for client components        */
/* ------------------------------------------------------------------ */

export interface CatalogLesson {
  id: string;
  href: string;
  title: string;
  summary: string;
  minutes: number;
  xp: number;
  hasChallenge: boolean;
  topic: string;
  topicTitle: string;
  topicIcon: string;
}

export interface CatalogSubject {
  slug: string;
  title: string;
  world: WorldId;
  icon: string;
  colors: [string, string];
  tagline: string;
  levels: string[];
  stages: Subject["stages"];
  domain?: string;
  lessons: CatalogLesson[];
}

export function catalogSubject(s: Subject): CatalogSubject {
  return {
    slug: s.slug,
    title: s.title,
    world: s.world,
    icon: s.icon,
    colors: s.colors,
    tagline: s.tagline,
    levels: s.levels,
    stages: s.stages,
    domain: s.domain,
    lessons: flatLessons(s).map((l) => ({
      id: l.id,
      href: l.href,
      title: l.lesson.title,
      summary: l.lesson.summary,
      minutes: l.lesson.minutes,
      xp: l.lesson.xp,
      hasChallenge: Boolean(l.lesson.challenge),
      topic: l.topic.slug,
      topicTitle: l.topic.title,
      topicIcon: l.topic.icon,
    })),
  };
}

export function catalog(world?: WorldId): CatalogSubject[] {
  return (world ? subjectsInWorld(world) : subjects).map(catalogSubject);
}
