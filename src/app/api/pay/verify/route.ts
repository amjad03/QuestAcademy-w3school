import { cachedUser } from "@/lib/tutor/guard";
import { PASS_DAYS, PRICE_INR, grantPass, paymentsEnabled, razorpaySignatureOk, signPass } from "@/lib/tutor/pass";
import { supabaseAdmin } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Verify Razorpay's checkout signature. With Supabase this records the payment and
 * extends the learner's pass on the server; without it, hands back a signed pass.
 */
export async function POST(req: Request) {
  if (!paymentsEnabled()) return Response.json({ error: "payments_unavailable" }, { status: 503 });
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const orderId = typeof b.razorpay_order_id === "string" ? b.razorpay_order_id : "";
  const paymentId = typeof b.razorpay_payment_id === "string" ? b.razorpay_payment_id : "";
  const signature = typeof b.razorpay_signature === "string" ? b.razorpay_signature : "";
  if (!razorpaySignatureOk(orderId, paymentId, signature)) return Response.json({ error: "bad_signature" }, { status: 400 });
  const headers = { "Cache-Control": "no-store" };

  if (supabaseAdmin()) {
    const user = await cachedUser(req);
    try {
      // The order row made at checkout already names the buyer; the signed-in user is a fallback.
      const until = await grantPass({ orderId, paymentId, userId: user?.id ?? null, amount: PRICE_INR() * 100, currency: "INR", source: "checkout" });
      if (!until) return Response.json({ error: "no_account", paymentId }, { status: 409, headers });
      return Response.json({ tier: "premium", until, paymentId }, { headers });
    } catch {
      return Response.json({ error: "record_failed", paymentId }, { status: 500, headers });
    }
  }

  const until = new Date(Date.now() + PASS_DAYS() * 86_400_000);
  return Response.json({ tier: "premium", until: until.toISOString(), pass: signPass(until, paymentId), paymentId }, { headers });
}
