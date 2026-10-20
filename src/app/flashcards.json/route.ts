import { allLessons } from "@/content";

export const dynamic = "force-static";

/** Every flashcard keyed by `${lessonId}#${index}` — fetched lazily by the review page. */
export function GET() {
  const cards: Record<string, { front: string; back: string; lesson: string; href: string; subject: string; icon: string; world: string }> = {};
  for (const l of allLessons()) {
    l.lesson.flashcards?.forEach((c, i) => {
      cards[`${l.id}#${i}`] = { ...c, lesson: l.lesson.title, href: l.href, subject: l.subject.title, icon: l.subject.icon, world: l.subject.world };
    });
  }
  return Response.json(cards);
}
