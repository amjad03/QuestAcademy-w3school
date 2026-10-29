import { addVoiceUsage, voiceAllowed, voiceBurstGuard } from "@/lib/tutor/guard";
import { SarvamError, VOICE_LANGS, sarvamConfigured, sarvamTts, speakerFor, type VoiceLang } from "@/lib/tutor/sarvam";
import { logVoiceUsage } from "@/lib/ai-usage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_CHARS = 500;
const err = (status: number, error: string, extra?: Record<string, unknown>) => Response.json({ error, ...extra }, { status, headers: { "Cache-Control": "no-store" } });

/** POST {text, lang, voice: "female"|"male", pace} → audio/wav (Sarvam Bulbul). 429 {error:"voice_cap"} once today's allowance is used. */
export async function POST(req: Request) {
  if (!sarvamConfigured()) return err(503, "voice_unavailable");
  if (Number(req.headers.get("content-length") || 0) > 4000) return err(413, "too_large");
  const g = await voiceBurstGuard(req);
  if (g instanceof Response) return g;
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return err(400, "bad_request");
  }
  const text = typeof body.text === "string" ? body.text.replace(/\s+/g, " ").trim() : "";
  if (!text || text.length > MAX_CHARS) return err(400, "bad_request", { maxChars: MAX_CHARS });
  const lang = (VOICE_LANGS as readonly string[]).includes(String(body.lang)) ? (body.lang as VoiceLang) : "en-IN";
  const gender = body.voice === "male" ? "male" : "female";
  const pace = Math.min(1.5, Math.max(0.6, Number(body.pace) || 1));

  const allow = await voiceAllowed("tts", g.user, g.ip, text.length);
  if (!allow.ok) return err(429, "voice_cap", { kind: "tts", cap: allow.cap });

  const t0 = Date.now();
  try {
    const wav = await sarvamTts({ text, lang, speaker: speakerFor(gender, lang), pace });
    addVoiceUsage("tts", g.user, g.ip, text.length);
    void logVoiceUsage({ kind: "tts", units: text.length, user: g.user, ip: g.ip });
    const ms = Date.now() - t0;
    console.info(`[voice] engine=sarvam tts ms=${ms} chars=${text.length} lang=${lang}`);
    return new Response(wav as unknown as BodyInit, { headers: { "Content-Type": "audio/wav", "Cache-Control": "private, max-age=86400", "X-Voice-Ms": String(ms) } });
  } catch (e) {
    const status = e instanceof SarvamError ? e.status : 0;
    if (!(e instanceof SarvamError)) console.error("[voice] tts failed", e instanceof Error ? e.message : e);
    return err(status === 429 ? 503 : 502, "upstream_error", { status });
  }
}
