import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { flatLessons, searchIndex, subjects } from "@/content";
import { SYLLABI } from "@/content/syllabus";
import { BOARDS } from "@/lib/modes";
import { CLASS_GROUPS, classById, isClassGroupId, levelsForClass, subjectMatchesClass } from "@/components/library/classes";
import { ClassView, type ClassViewData } from "@/components/library/ClassView";

type Params = { id: string };

export function generateStaticParams(): Params[] {
  return CLASS_GROUPS.map((g) => ({ id: g.id }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { id } = await params;
  if (!isClassGroupId(id)) return {};
  const g = classById[id];
  return { title: `${g.label} · Library`, description: g.description };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;
  if (!isClassGroupId(id)) notFound();
  const g = classById[id];

  const list = subjects.filter((s) => subjectMatchesClass(s, g));
  const slugs = new Set(list.map((s) => s.slug));

  const data: ClassViewData = {
    id: g.id,
    subjects: list.map((s) => {
      const fl = flatLessons(s);
      return {
        slug: s.slug,
        title: s.title,
        tagline: s.tagline,
        levels: levelsForClass(s.levels, g),
        domain: s.domain,
        topics: s.topics.length,
        lessons: fl.length,
        minutes: fl.reduce((a, l) => a + l.lesson.minutes, 0),
        challenges: fl.filter((l) => l.lesson.challenge).length,
        lessonIds: fl.map((l) => l.id),
      };
    }),
    boards: g.boards.map(({ board, grades }) => {
      const b = SYLLABI[board];
      return {
        id: board,
        name: BOARDS.find((x) => x.id === board)?.name ?? b.name,
        note: b.note,
        grades: b.grades
          .filter((gr) => grades.includes(gr.id))
          .map((gr) => ({
            id: gr.id,
            name: gr.name,
            subjects: gr.subjects.map((s) => ({ name: s.name, chapters: s.chapters.length, withLessons: s.chapters.filter((c) => c.lessonIds.length).length })),
          })),
      };
    }),
    search: searchIndex()
      .filter((i) => slugs.has(i.course))
      .map(({ kind, title, subtitle, href, course, keywords }) => ({ kind, title, subtitle, href, course, keywords })),
  };

  return (
    <Suspense>
      <ClassView data={data} />
    </Suspense>
  );
}
