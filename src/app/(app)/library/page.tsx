import { flatLessons, platformStats, searchIndex, subjects, subjectsInWorld } from "@/content";
import { pathways } from "@/content/pathways";
import { SYLLABI } from "@/content/syllabus";
import { BOARDS } from "@/lib/modes";
import { CLASS_GROUPS, classForGrade, subjectMatchesClass } from "@/components/library/classes";
import { LibraryHome, type LibraryHomeData } from "@/components/library/LibraryHome";

export const metadata = { title: "Library", description: "Browse Quest Academy by class, board or goal." };

export default function Page() {
  const classes = CLASS_GROUPS.map((g) => {
    const list = subjects.filter((s) => subjectMatchesClass(s, g));
    return { id: g.id, subjects: list.length, lessons: list.reduce((a, s) => a + flatLessons(s).length, 0), courses: list.map((s) => s.slug) };
  });

  const boards: LibraryHomeData["boards"] = BOARDS.map((b) => ({
    id: b.id,
    name: b.name,
    full: b.full,
    note: SYLLABI[b.id].note,
    grades: SYLLABI[b.id].grades.map((g) => {
      const chapters = g.subjects.flatMap((s) => s.chapters);
      return { id: g.id, name: g.name, chapters: chapters.length, withLessons: chapters.filter((c) => c.lessonIds.length).length, classId: classForGrade(b.id, g.id)?.id ?? null };
    }),
  }));

  const code = subjectsInWorld("code");
  const exam = subjectsInWorld("exam");
  const kids = subjectsInWorld("kids");
  const goals: LibraryHomeData["goals"] = [
    { id: "code", meta: `${code.length} languages · ${code.reduce((a, s) => a + flatLessons(s).filter((l) => l.lesson.challenge).length, 0)} graded challenges` },
    { id: "exam", meta: `${exam.length} subjects · NEET and JEE Main mock tests` },
    { id: "career", meta: `${pathways.length} pathways · ${pathways.reduce((a, p) => a + p.modules.length, 0)} assignments` },
    { id: "early", meta: `${kids.length} subjects · ${kids.reduce((a, s) => a + flatLessons(s).length, 0)} short lessons` },
  ];

  const search = searchIndex().map(({ kind, title, subtitle, href, course, keywords }) => ({ kind, title, subtitle, href, course, keywords }));
  const ps = platformStats();

  const data: LibraryHomeData = { classes, boards, goals, search, stats: { subjects: ps.subjects, lessons: ps.lessons, questions: ps.questions } };
  return <LibraryHome data={data} />;
}
