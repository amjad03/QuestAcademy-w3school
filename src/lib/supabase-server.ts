import "server-only";
import { createHash } from "node:crypto";
import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let admin: SupabaseClient | null = null;

/** Service-role client. Server only: it bypasses row-level security. */
export function supabaseAdmin(): SupabaseClient | null {
  if (!url || !serviceKey) return null;
  admin ??= createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
  return admin;
}

/** The signed-in user behind a request's `Authorization: Bearer <access token>`, if valid. */
export async function userFromRequest(req: Request): Promise<User | null> {
  const sb = supabaseAdmin();
  const token = req.headers.get("authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
  if (!sb || !token) return null;
  const { data, error } = await sb.auth.getUser(token);
  return error ? null : data.user;
}

/** Stable, non-reversible id for a guest's IP address. */
export function hashIp(ip: string) {
  return createHash("sha256")
    .update(`${process.env.SUPABASE_SERVICE_ROLE_KEY ?? "qa"}:${ip}`)
    .digest("hex")
    .slice(0, 32);
}
