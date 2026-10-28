import { rateLimit } from "@/lib/tutor/rateLimit";
import { cachedUser, clientIp, fail } from "@/lib/tutor/guard";
import { PRICE_INR, paymentsEnabled } from "@/lib/tutor/pass";
import { supabaseAdmin } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Create a Razorpay order for the premium tutor pass, tied to the signed-in learner. */
export async function POST(req: Request) {
  if (!paymentsEnabled()) return Response.json({ error: "payments_unavailable" }, { status: 503 });
  const limited = rateLimit(`pay:${clientIp(req)}`);
  if (!limited.ok) return fail(429, "rate_limited", { retryAfter: limited.retryAfter });
  const sb = supabaseAdmin();
  const user = await cachedUser(req);
  // With a database the pass belongs to an account, so the buyer must be signed in.
  if (sb && !user) return Response.json({ error: "sign_in_required" }, { status: 401 });
  const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64");
  const amount = PRICE_INR() * 100;
  try {
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency: "INR", receipt: `tutor_${Date.now().toString(36)}`, notes: { product: "ai-tutor", ...(user ? { user_id: user.id } : {}) } }),
    });
    const j = (await res.json()) as { id?: string; amount?: number; currency?: string; error?: { description?: string } };
    if (!res.ok || !j.id) {
      console.error("[pay] order failed", res.status, j.error?.description);
      return Response.json({ error: "order_failed" }, { status: 502 });
    }
    if (sb && user) {
      const { error } = await sb.from("payments").insert({ order_id: j.id, user_id: user.id, amount: j.amount ?? amount, currency: j.currency ?? "INR", status: "created" });
      if (error) console.error("[pay] could not record order", error.message);
    }
    return Response.json({ orderId: j.id, amount: j.amount, currency: j.currency, keyId: process.env.RAZORPAY_KEY_ID }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[pay] order error", err instanceof Error ? err.message : err);
    return Response.json({ error: "order_failed" }, { status: 502 });
  }
}
