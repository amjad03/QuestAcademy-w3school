import { json, siteOrigin, staffFor } from "@/lib/school/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * A principal invites a teacher. Always returns a join link to share; when the
 * email is new to the site, Supabase also emails an invitation with that link.
 */
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as { schoolId?: string; email?: string; classId?: string | null } | null;
  if (!body?.schoolId) return json({ error: "bad_request", message: "Send schoolId." }, 400);
  const ctx = await staffFor(req, body.schoolId);
  if (ctx instanceof Response) return ctx;
  if (!ctx.principal) return json({ error: "forbidden", message: "Only the principal can invite teachers." }, 403);
  const email = body.email?.trim().toLowerCase() || null;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "bad_email", message: "Check the email address." }, 400);

  const { data: invite, error } = await ctx.sb.from("invites").insert({ school_id: body.schoolId, class_id: body.classId || null, role: "teacher", email, created_by: ctx.user.id }).select("token").single();
  if (error) return json({ error: "invite_failed", message: error.message }, 500);
  const link = `${siteOrigin(req)}/join?invite=${invite.token}`;

  let emailed = false;
  if (email) {
    const r = await ctx.sb.auth.admin.inviteUserByEmail(email, { redirectTo: link, data: { invited_to_school: body.schoolId } });
    emailed = !r.error;
  }
  return json({ link, emailed });
}
