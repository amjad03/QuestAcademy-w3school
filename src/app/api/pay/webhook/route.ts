import { grantPass, webhookSignatureOk } from "@/lib/tutor/pass";
import { supabaseAdmin } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Razorpay webhook (event: payment.captured). Grants the pass even if the learner
 * closed the tab before the checkout handler ran. Idempotent with /api/pay/verify.
 */
export async function POST(req: Request) {
  if (!process.env.RAZORPAY_WEBHOOK_SECRET || !supabaseAdmin()) return Response.json({ error: "webhook_unavailable" }, { status: 503 });
  const raw = await req.text();
  if (!webhookSignatureOk(raw, req.headers.get("x-razorpay-signature"))) return Response.json({ error: "bad_signature" }, { status: 400 });
  let body: { event?: string; payload?: { payment?: { entity?: Record<string, unknown> } } };
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  if (body.event !== "payment.captured") return Response.json({ ok: true, ignored: body.event ?? null });
  const p = body.payload?.payment?.entity ?? {};
  const paymentId = typeof p.id === "string" ? p.id : "";
  const orderId = typeof p.order_id === "string" ? p.order_id : "";
  const notes = (p.notes ?? {}) as Record<string, unknown>;
  if (!paymentId || !orderId) return Response.json({ ok: true, ignored: "no_order" });
  if (notes.product && notes.product !== "ai-tutor") return Response.json({ ok: true, ignored: "other_product" });
  const userId = typeof notes.user_id === "string" && UUID.test(notes.user_id) ? notes.user_id : null;
  try {
    await grantPass({ orderId, paymentId, userId, amount: Number(p.amount) || 0, currency: typeof p.currency === "string" ? p.currency : "INR", source: "webhook" });
    return Response.json({ ok: true });
  } catch {
    // A 5xx makes Razorpay retry later.
    return Response.json({ error: "record_failed" }, { status: 500 });
  }
}
