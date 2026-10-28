import "server-only";
import { randomInt } from "node:crypto";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { supabaseAdmin, userFromRequest } from "@/lib/supabase-server";

export const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export interface StaffContext {
  sb: SupabaseClient;
  user: User;
  principal: boolean;
  /** Classes the caller teaches in this school. */
  classIds: Set<string>;
}

/** The caller must be principal of the school or teach in it. */
export async function staffFor(req: Request, schoolId: string): Promise<StaffContext | Response> {
  const sb = supabaseAdmin();
  if (!sb) return json({ error: "accounts_unavailable", message: "SUPABASE_SERVICE_ROLE_KEY is not set on the server." }, 503);
  const user = await userFromRequest(req);
  if (!user) return json({ error: "unauthorized", message: "Sign in again." }, 401);
  const { data, error } = await sb.from("memberships").select("role, class_id").eq("user_id", user.id).eq("school_id", schoolId).in("role", ["teacher", "principal"]);
  if (error) return json({ error: "lookup_failed", message: error.message }, 500);
  const principal = (data ?? []).some((m) => m.role === "principal");
  const classIds = new Set((data ?? []).filter((m) => m.role === "teacher" && m.class_id).map((m) => m.class_id as string));
  if (!principal && !classIds.size) return json({ error: "forbidden", message: "You are not staff at this school." }, 403);
  return { sb, user, principal, classIds };
}

const WORDS = ["tiger", "maple", "river", "comet", "lotus", "cedar", "pearl", "orbit", "falcon", "mango", "coral", "ember", "delta", "lunar", "piano", "quartz", "sunny", "violet", "willow", "zebra", "amber", "basil", "cobra", "daisy"];

/** Easy-to-type first password for a login slip (students change it after signing in). */
export function slipPassword() {
  const w = () => WORDS[randomInt(WORDS.length)];
  return `${w()}-${w()}-${randomInt(10, 99)}`;
}

export function slug(s: string) {
  return (
    s
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, ".")
      .replace(/^\.+|\.+$/g, "")
      .slice(0, 24) || "student"
  );
}

/** Run tasks with a small concurrency limit (Supabase admin API rate limits). */
export async function pool<T, R>(items: T[], n: number, fn: (x: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i], i);
      }
    }),
  );
  return out;
}

export function siteOrigin(req: Request) {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || new URL(req.url).origin;
}
