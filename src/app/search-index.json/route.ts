import { searchIndex } from "@/content";

export const dynamic = "force-static";

export function GET() {
  return Response.json(searchIndex());
}
