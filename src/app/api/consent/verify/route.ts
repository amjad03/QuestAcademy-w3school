import { createHash } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const page = (title: string, body: string, status = 200) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head><body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1rem;line-height:1.5"><h1>${title}</h1><p>${body}</p><p><a href="/">Go to Quest Academy</a></p></body></html>`,
    { status, headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } },
  );

/** The link in the guardian's email: marks the parental consent as verified. */
export async function GET(req: Request) {
  const sb = supabaseAdmin();
  const token = new URL(req.url).searchParams.get("token") ?? "";
  if (!sb || !/^[A-Za-z0-9_-]{20,64}$/.test(token)) return page("Link not valid", "This confirmation link is not valid.", 400);
  const hash = createHash("sha256").update(token).digest("hex");
  const { data, error } = await sb.from("consent_records").update({ verified_at: new Date().toISOString() }).eq("verify_token_hash", hash).is("verified_at", null).select("id");
  if (error) return page("Something went wrong", "Please try the link again in a minute.", 500);
  if (!data?.length) return page("Already confirmed", "This consent has already been confirmed, or the link has expired.");
  return page("Thank you", "Your consent has been recorded. Your child can keep learning on Quest Academy. You can withdraw consent at any time by deleting the account from Settings or writing to our grievance officer (see the privacy policy).");
}
