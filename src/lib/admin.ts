import "server-only";
import type { User } from "@supabase/supabase-js";

/** Is this user an operator? ADMIN_EMAILS is a comma-separated list; empty means nobody. */
export function isAdmin(user: User | null): boolean {
  const email = user?.email?.toLowerCase();
  if (!email || !user?.email_confirmed_at) return false;
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
    .includes(email);
}
