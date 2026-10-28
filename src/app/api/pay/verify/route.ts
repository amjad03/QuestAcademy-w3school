import { PASS_DAYS, paymentsEnabled, razorpaySignatureOk, signPass } from "@/lib/tutor/pass";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Verify Razorpay's checkout signature and hand back a signed tutor pass. */
export async function POST(req: Request) {
  if (!paymentsEnabled()) return Response.json({ error: "payments_unavailable" }, { status: 503 });
  const b = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const orderId = typeof b.razorpay_order_id === "string" ? b.razorpay_order_id : "";
  const paymentId = typeof b.razorpay_payment_id === "string" ? b.razorpay_payment_id : "";
  const signature = typeof b.razorpay_signature === "string" ? b.razorpay_signature : "";
  if (!razorpaySignatureOk(orderId, paymentId, signature)) return Response.json({ error: "bad_signature" }, { status: 400 });
  const until = new Date(Date.now() + PASS_DAYS() * 86_400_000);
  return Response.json({ tier: "premium", until: until.toISOString(), pass: signPass(until, paymentId), paymentId }, { headers: { "Cache-Control": "no-store" } });
}
