import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import type { User } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/lib/supabase-server";

/**
 * Premium tutor access. With Supabase configured, a verified Razorpay payment
 * writes a `payments` row and extends the learner's row in `tutor_passes`, and
 * the live tutor checks that row on the server. Without Supabase the server
 * signs a small pass ({until}) with RAZORPAY_KEY_SECRET instead, which the
 * client sends with each live-tutor request.
 */

export const paymentsEnabled = () => Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
/** Testing switch: everyone gets the tutor. */
export const tutorOpen = () => process.env.NEXT_PUBLIC_TUTOR_PREMIUM !== "1";

export const PRICE_INR = () => {
  const n = Number(process.env.TUTOR_PRICE_INR);
  return Number.isFinite(n) && n >= 1 ? Math.round(n) : 299;
};
export const PASS_DAYS = () => {
  const n = Number(process.env.TUTOR_PASS_DAYS);
  return Number.isFinite(n) && n >= 1 ? Math.round(n) : 30;
};

const b64 = (s: string) => Buffer.from(s).toString("base64url");
const hmac = (data: string, secret: string) => createHmac("sha256", secret).update(data).digest();

export function signPass(until: Date, paymentId: string): string | null {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret) return null;
  const body = b64(JSON.stringify({ until: until.toISOString(), pid: paymentId }));
  return `${body}.${hmac(`pass:${body}`, secret).toString("base64url")}`;
}

/** The pass's expiry when it is genuine and still valid, else null. */
export function verifyPass(pass: string | null | undefined): string | null {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret || !pass) return null;
  const [body, sig] = pass.split(".");
  if (!body || !sig) return null;
  const want = hmac(`pass:${body}`, secret);
  const got = Buffer.from(sig, "base64url");
  if (got.length !== want.length || !timingSafeEqual(got, want)) return null;
  try {
    const { until } = JSON.parse(Buffer.from(body, "base64url").toString()) as { until?: string };
    return until && Date.parse(until) > Date.now() ? until : null;
  } catch {
    return null;
  }
}

/** Razorpay's checkout signature: HMAC_SHA256(order_id|payment_id, key_secret). */
export function razorpaySignatureOk(orderId: string, paymentId: string, signature: string): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!secret || !orderId || !paymentId || !/^[0-9a-f]{64}$/i.test(signature)) return false;
  const want = createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest();
  return timingSafeEqual(want, Buffer.from(signature, "hex"));
}

/* ---------------------------------------------------------------------- */
/* Server-verified pass (Supabase `tutor_passes`), the source of truth when */
/* the database is configured. The signed pass above remains the fallback   */
/* for deployments without Supabase.                                        */
/* ---------------------------------------------------------------------- */

const passCache = new Map<string, { until: string | null; at: number }>();
const PASS_TTL = 60 * 1000;

/** When the learner's pass runs out (ISO), or null if they have none / it has expired. */
export async function passUntil(userId: string, fresh = false): Promise<string | null> {
  const sb = supabaseAdmin();
  if (!sb) return null;
  const hit = passCache.get(userId);
  if (!fresh && hit && Date.now() - hit.at < PASS_TTL) return hit.until && Date.parse(hit.until) > Date.now() ? hit.until : null;
  const { data, error } = await sb.from("tutor_passes").select("valid_until").eq("user_id", userId).maybeSingle();
  if (error) console.error("[pass] lookup failed", error.message);
  const until = (data?.valid_until as string | undefined) ?? null;
  passCache.set(userId, { until, at: Date.now() });
  if (passCache.size > 5000) passCache.clear();
  return until && Date.parse(until) > Date.now() ? until : null;
}

export const forgetPass = (userId: string) => passCache.delete(userId);

/** May this caller use the premium tutor? Open mode, a pass in the database, or (without a database) a signed pass. */
export async function hasTutorAccess(user: User | null, signedPass: string | null): Promise<boolean> {
  if (tutorOpen()) return true;
  if (supabaseAdmin()) return user ? Boolean(await passUntil(user.id)) : false;
  return Boolean(verifyPass(signedPass));
}

/** Record a captured payment and extend the payer's pass once per payment id. Returns the new expiry. */
export async function grantPass(o: { orderId: string; paymentId: string; userId: string | null; amount: number; currency: string; source: "checkout" | "webhook" }): Promise<string | null> {
  const sb = supabaseAdmin();
  if (!sb) return null;
  const { data, error } = await sb.rpc("grant_tutor_pass", {
    p_order: o.orderId,
    p_payment: o.paymentId,
    p_user: o.userId,
    p_amount: o.amount,
    p_currency: o.currency,
    p_days: PASS_DAYS(),
    p_source: o.source,
  });
  if (error) {
    console.error("[pass] grant failed", error.message);
    throw new Error("grant_failed");
  }
  const until = (data as string | null) ?? null;
  if (o.userId) forgetPass(o.userId);
  return until;
}

/** Razorpay webhook signature: HMAC_SHA256(raw body, webhook secret), hex. */
export function webhookSignatureOk(rawBody: string, signature: string | null): boolean {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret || !signature || !/^[0-9a-f]{64}$/i.test(signature)) return false;
  const want = createHmac("sha256", secret).update(rawBody).digest();
  return timingSafeEqual(want, Buffer.from(signature, "hex"));
}
