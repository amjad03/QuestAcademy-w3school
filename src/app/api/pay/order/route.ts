import { rateLimit } from "@/lib/tutor/rateLimit";
import { clientIp, fail } from "@/lib/tutor/guard";
import { PRICE_INR, paymentsEnabled } from "@/lib/tutor/pass";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Create a Razorpay order for the premium tutor pass. */
export async function POST(req: Request) {
  if (!paymentsEnabled()) return Response.json({ error: "payments_unavailable" }, { status: 503 });
  const limited = rateLimit(`pay:${clientIp(req)}`);
  if (!limited.ok) return fail(429, "rate_limited", { retryAfter: limited.retryAfter });
  const auth = Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString("base64");
  const amount = PRICE_INR() * 100;
  try {
    const res = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency: "INR", receipt: `tutor_${Date.now().toString(36)}`, notes: { product: "ai-tutor" } }),
    });
    const j = (await res.json()) as { id?: string; amount?: number; currency?: string; error?: { description?: string } };
    if (!res.ok || !j.id) {
      console.error("[pay] order failed", res.status, j.error?.description);
      return Response.json({ error: "order_failed" }, { status: 502 });
    }
    return Response.json({ orderId: j.id, amount: j.amount, currency: j.currency, keyId: process.env.RAZORPAY_KEY_ID }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[pay] order error", err instanceof Error ? err.message : err);
    return Response.json({ error: "order_failed" }, { status: 502 });
  }
}
