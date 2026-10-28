import { cachedUser } from "@/lib/tutor/guard";
import { passUntil, tutorOpen } from "@/lib/tutor/pass";
import { supabaseAdmin } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** The signed-in learner's tutor pass, as the server sees it. `server: false` means no database (signed passes apply). */
export async function GET(req: Request) {
  const headers = { "Cache-Control": "no-store" };
  if (!supabaseAdmin()) return Response.json({ open: tutorOpen(), server: false, until: null }, { headers });
  const user = await cachedUser(req);
  const until = user ? await passUntil(user.id, true) : null;
  return Response.json({ open: tutorOpen(), server: true, signedIn: Boolean(user), until }, { headers });
}
