import { subjects } from "@/content";
import { courseOutline } from "@/content/course";

export const dynamic = "force-static";

export function generateStaticParams() {
  return subjects.map((s) => ({ slug: s.slug }));
}

/** Course outline (units, lessons, items, assessments) as static JSON for the Learn path. */
export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const outline = courseOutline(slug);
  if (!outline) return Response.json({ error: "not found" }, { status: 404 });
  return Response.json(outline);
}
