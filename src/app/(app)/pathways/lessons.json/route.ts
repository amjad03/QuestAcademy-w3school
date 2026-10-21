import { lessonMetaFor } from "@/content/pathways/server";

export const dynamic = "force-static";

/** id → title/minutes/href for every lesson used by a pathway (used by the pathway planner on the client). */
export function GET() {
  return Response.json(lessonMetaFor());
}
