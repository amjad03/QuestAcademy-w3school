import { createHash, randomBytes } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-server";
import { cachedUser, clientIp } from "@/lib/tutor/guard";
import { rateLimit } from "@/lib/tutor/rateLimit";
import { POLICY_VERSION, type ConsentKind } from "@/lib/compliance";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KINDS: ConsentKind[] = ["analytics", "parental", "terms"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Ask the guardian to confirm by email (only when an email provider is configured). */
async function sendVerification(to: string, token: string) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONSENT_EMAIL_FROM;
  if (!key || !from) return false;
  const link = `${SITE_URL}/api/consent/verify?token=${token}`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      subject: "Please confirm your child's Quest Academy account",
      text: `Hello,\n\nYour child has created a Quest Academy account and named you as their parent or guardian. Under India's Digital Personal Data Protection Act 2023, we need your consent before we process their learning data.\n\nIf you agree, open this link:\n${link}\n\nIf you did not expect this email, ignore it and the account will stay unconfirmed. You can read what we store at ${SITE_URL}/privacy.\n\nQuest Academy`,
    }),
  }).catch(() => null);
  if (!res?.ok) console.error("[consent] verification email failed", res?.status);
  return Boolean(res?.ok);
}

/** Record a consent choice for the signed-in user (append-only). */
export async function POST(req: Request) {
  const sb = supabaseAdmin();
  if (!sb) return Response.json({ error: "unavailable" }, { status: 503 });
  const user = await cachedUser(req);
  if (!user) return Response.json({ error: "unauthorized" }, { status: 401 });
  const limited = rateLimit(`consent:${user.id}:${clientIp(req)}`, 20);
  if (!limited.ok) return Response.json({ error: "rate_limited" }, { status: 429 });
  const b = ((await req.json().catch(() => null)) ?? {}) as Record<string, unknown>;
  const kind = KINDS.find((k) => k === b.kind);
  if (!kind || typeof b.granted !== "boolean") return Response.json({ error: "bad_request" }, { status: 400 });
  const givenAt = typeof b.givenAt === "string" && !Number.isNaN(Date.parse(b.givenAt)) && Date.parse(b.givenAt) <= Date.now() ? new Date(b.givenAt).toISOString() : new Date().toISOString();
  const row: Record<string, unknown> = { user_id: user.id, kind, granted: b.granted, policy_version: str(b.policyVersion, 20) || POLICY_VERSION, given_at: givenAt };
  let token: string | null = null;
  if (kind === "parental") {
    const email = str(b.parentEmail, 120);
    const phone = str(b.parentPhone, 20).replace(/[^\d+ -]/g, "");
    if (!email && !phone) return Response.json({ error: "parent_contact_required" }, { status: 400 });
    if (email && !EMAIL_RE.test(email)) return Response.json({ error: "bad_email" }, { status: 400 });
    row.parent_email = email || null;
    row.parent_phone = phone || null;
    row.method = "guardian_declaration";
    if (email && b.granted) {
      token = randomBytes(24).toString("base64url");
      row.verify_token_hash = createHash("sha256").update(token).digest("hex");
    }
  }
  const { error } = await sb.from("consent_records").insert(row);
  if (error) {
    console.error("[consent] insert failed", error.message);
    return Response.json({ error: "record_failed" }, { status: 500 });
  }
  const emailed = token && typeof row.parent_email === "string" ? await sendVerification(row.parent_email, token) : false;
  return Response.json({ ok: true, verificationSent: emailed }, { headers: { "Cache-Control": "no-store" } });
}
