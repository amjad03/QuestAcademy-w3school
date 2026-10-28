import { supabaseAdmin } from "@/lib/supabase-server";
import { kinetixEnabled, verifyKinetixToken, type KinetixClaims } from "@/lib/school/jwt";
import { siteOrigin } from "@/lib/school/server";
import type { SupabaseClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Sign in with Kinetix (contract: docs/kinetix-sso.md).
 * Kinetix redirects the user to /api/auth/kinetix?token=<JWT>&next=/teach (or POSTs a form with `token`).
 * We verify the token, map or create the Supabase user and their school membership,
 * and hand the browser a one-time Supabase sign-in link that /auth/kinetix completes.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  if (url.searchParams.get("status") === "1") return Response.json({ enabled: kinetixEnabled() && Boolean(supabaseAdmin()) });
  return handle(req, url.searchParams.get("token"), url.searchParams.get("next"));
}

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  return handle(req, (form?.get("token") as string) ?? null, (form?.get("next") as string) ?? null);
}

function back(req: Request, error: string) {
  return Response.redirect(`${siteOrigin(req)}/auth?kinetix_error=${encodeURIComponent(error)}`, 303);
}

async function handle(req: Request, token: string | null, nextRaw: string | null) {
  const sb = supabaseAdmin();
  if (!kinetixEnabled() || !sb) return back(req, "disabled");
  if (!token) return back(req, "missing_token");
  let claims: KinetixClaims;
  try {
    claims = await verifyKinetixToken(token);
  } catch (e) {
    console.warn("[kinetix] rejected token:", (e as Error).message);
    return back(req, "invalid_token");
  }

  // One-time use: a token id can't be replayed.
  const used = await sb.from("sso_token_uses").insert({ jti: `kinetix:${claims.jti}`, expires_at: new Date(claims.exp * 1000).toISOString() });
  if (used.error) return back(req, /duplicate/i.test(used.error.message) ? "token_used" : "server_error");
  void sb.from("sso_token_uses").delete().lt("expires_at", new Date(Date.now() - 86_400_000).toISOString());

  try {
    const userId = await mapUser(sb, claims);
    await mapMembership(sb, userId, claims);
    const { data, error } = await sb.auth.admin.generateLink({ type: "magiclink", email: claims.email.toLowerCase() });
    if (error || !data.properties?.hashed_token) throw new Error(error?.message ?? "no_link");
    const next = nextRaw && nextRaw.startsWith("/") && !nextRaw.startsWith("//") ? nextRaw : defaultNext(claims.role);
    return Response.redirect(`${siteOrigin(req)}/auth/kinetix#token_hash=${encodeURIComponent(data.properties.hashed_token)}&next=${encodeURIComponent(next)}`, 303);
  } catch (e) {
    console.error("[kinetix] sign-in failed:", (e as Error).message);
    return back(req, "server_error");
  }
}

const defaultNext = (role?: string) => (role === "teacher" ? "/teach" : role === "principal" ? "/school" : role === "parent" ? "/reports" : "/learn");

async function mapUser(sb: SupabaseClient, c: KinetixClaims): Promise<string> {
  const email = c.email.toLowerCase();
  const linked = await sb.from("external_identities").select("user_id").eq("provider", "kinetix").eq("subject", c.sub).maybeSingle();
  if (linked.data?.user_id) {
    // Keep the email in step with Kinetix so the sign-in link targets the same account.
    const u = await sb.auth.admin.getUserById(linked.data.user_id);
    if (u.data.user && u.data.user.email?.toLowerCase() !== email) await sb.auth.admin.updateUserById(linked.data.user_id, { email, email_confirm: true });
    return linked.data.user_id;
  }
  let userId = ((await sb.rpc("admin_user_id_by_email", { p_email: email })).data as string | null) ?? null;
  if (!userId) {
    const { data, error } = await sb.auth.admin.createUser({ email, email_confirm: true, user_metadata: { full_name: c.name ?? email.split("@")[0], kinetix_sub: c.sub } });
    if (error || !data.user) throw new Error(error?.message ?? "create_failed");
    userId = data.user.id;
  }
  await sb.from("external_identities").upsert({ provider: "kinetix", subject: c.sub, user_id: userId });
  return userId;
}

async function mapMembership(sb: SupabaseClient, userId: string, c: KinetixClaims) {
  if (!c.org_id || !c.role || c.role === "parent") return;
  let school = (await sb.from("schools").select("id, board").eq("kinetix_org_id", c.org_id).maybeSingle()).data;
  if (!school) {
    if (process.env.KINETIX_AUTO_CREATE_SCHOOLS === "false") return;
    const ins = await sb.from("schools").insert({ name: c.org_name || "School", kinetix_org_id: c.org_id, board: c.board ?? null }).select("id, board").single();
    if (ins.error) school = (await sb.from("schools").select("id, board").eq("kinetix_org_id", c.org_id).maybeSingle()).data;
    else school = ins.data;
  }
  if (!school) return;
  const name = c.name ?? c.email.split("@")[0];
  if (c.role === "principal") {
    const has = await sb.from("memberships").select("id").eq("user_id", userId).eq("school_id", school.id).eq("role", "principal").maybeSingle();
    if (!has.data) await sb.from("memberships").insert({ user_id: userId, school_id: school.id, role: "principal", display_name: name });
    return;
  }
  if (!c.class_name) return;
  const section = c.section || "A";
  let cls = (await sb.from("classes").select("id").eq("school_id", school.id).eq("name", c.class_name).eq("section", section).maybeSingle()).data;
  if (!cls) {
    const ins = await sb.from("classes").insert({ school_id: school.id, name: c.class_name, section, grade: c.grade ?? /(\d{1,2})/.exec(c.class_name)?.[1] ?? null, board: c.board ?? school.board }).select("id").single();
    cls = ins.data ?? (await sb.from("classes").select("id").eq("school_id", school.id).eq("name", c.class_name).eq("section", section).maybeSingle()).data;
  }
  if (!cls) return;
  if (c.role === "student") await sb.from("memberships").delete().eq("user_id", userId).eq("school_id", school.id).eq("role", "student").neq("class_id", cls.id);
  const has = await sb.from("memberships").select("id").eq("user_id", userId).eq("class_id", cls.id).eq("role", c.role).maybeSingle();
  if (!has.data) await sb.from("memberships").insert({ user_id: userId, school_id: school.id, class_id: cls.id, role: c.role, display_name: name });
}
