import { allLessons } from "@/content";
import { WIDGET_META } from "@/lib/catalog-server";

export const dynamic = "force-static";

/** Lessons that contain interactive simulations ("experiments"), keyed by lesson id. */
export function GET() {
  const out: Record<string, { title: string; href: string; course: string; widgets: { id: string; name: string }[] }> = {};
  for (const l of allLessons()) {
    const ws = Array.from(new Set(l.lesson.blocks.flatMap((b) => (b.type === "widget" ? [b.widget] : []))));
    if (ws.length) out[l.id] = { title: l.lesson.title, href: l.href, course: l.subject.slug, widgets: ws.map((w) => ({ id: w, name: WIDGET_META[w].name })) };
  }
  return Response.json(out);
}
