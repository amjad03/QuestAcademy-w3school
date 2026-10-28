import { PASS_DAYS, PRICE_INR, paymentsEnabled, tutorOpen } from "@/lib/tutor/pass";

export const dynamic = "force-dynamic";

/** What the paywall needs to know: are payments live, is the tutor open for testing, and the price. */
export function GET() {
  const enabled = paymentsEnabled();
  return Response.json(
    { payments: enabled, open: tutorOpen(), keyId: enabled ? process.env.RAZORPAY_KEY_ID : null, priceInr: PRICE_INR(), days: PASS_DAYS() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
