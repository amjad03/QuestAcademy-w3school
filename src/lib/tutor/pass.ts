import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Premium tutor access. After a verified Razorpay payment the server signs a
 * small pass ({until}) with RAZORPAY_KEY_SECRET; the client keeps it on the
 * profile and sends it with every live-tutor request. No database needed.
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
