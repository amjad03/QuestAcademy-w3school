import { addVoiceUsage, voiceAllowed, voiceBurstGuard } from "@/lib/tutor/guard";
import { SarvamError, VOICE_LANGS, sarvamConfigured, sarvamStt, wavSeconds } from "@/lib/tutor/sarvam";
import { logVoiceUsage } from "@/lib/ai-usage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
/** Run next to the students and Sarvam (India): saves an ocean round trip on every voice call. */
export const preferredRegion = "bom1";

/** 30 s of 16 kHz mono 16-bit WAV is ~960 KB. */
const MAX_BYTES = 1_200_000;
const MAX_SECONDS = 30;
const err = (status: number, error: string, extra?: Record<string, unknown>) => Response.json({ error, ...extra }, { status, headers: { "Cache-Control": "no-store" } });

/** POST multipart {file (wav/webm ≤ 30 s), lang} → {transcript} (Sarvam Saarika). 429 {error:"voice_cap"} once today's allowance is used. */
export async function POST(req: Request) {
  if (!sarvamConfigured() || process.env.SARVAM_STT_DISABLED === "1") return err(503, "voice_unavailable");
  if (Number(req.headers.get("content-length") || 0) > MAX_BYTES + 4000) return err(413, "too_large");
  const g = await voiceBurstGuard(req);
  if (g instanceof Response) return g;
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return err(400, "bad_request");
  }
  const file = form.get("file");
  if (!(file instanceof Blob) || file.size < 100 || file.size > MAX_BYTES) return err(400, "bad_request");
  const type = (file.type || "audio/wav").split(";")[0];
  if (!/^audio\/(wav|x-wav|wave|webm|ogg|mpeg|mp4)$/.test(type)) return err(415, "unsupported_type");
  const bytes = new Uint8Array(await file.arrayBuffer());
  // Seconds billed: from the WAV header, else estimated from size (~16 KB/s for compressed audio).
  const seconds = Math.max(1, Math.ceil(wavSeconds(bytes) ?? bytes.length / 16000));
  if (seconds > MAX_SECONDS + 1) return err(400, "too_long", { maxSeconds: MAX_SECONDS });
  const langRaw = String(form.get("lang") ?? "");
  const lang = (VOICE_LANGS as readonly string[]).includes(langRaw) ? langRaw : "unknown";

  const allow = await voiceAllowed("stt", g.user, g.ip, seconds);
  if (!allow.ok) return err(429, "voice_cap", { kind: "stt", cap: allow.cap });

  const t0 = Date.now();
  try {
    const ext = type.includes("webm") ? "webm" : type.includes("ogg") ? "ogg" : type.includes("mp") ? "mp4" : "wav";
    const r = await sarvamStt({ file: new Blob([bytes], { type }), filename: `clip.${ext}`, lang });
    addVoiceUsage("stt", g.user, g.ip, seconds);
    void logVoiceUsage({ kind: "stt", units: seconds, user: g.user, ip: g.ip });
    console.info(`[voice] engine=sarvam stt ms=${Date.now() - t0} seconds=${seconds} lang=${lang}`);
    return Response.json({ transcript: r.transcript, language: r.language ?? null, seconds }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    const status = e instanceof SarvamError ? e.status : 0;
    if (!(e instanceof SarvamError)) console.error("[voice] stt failed", e instanceof Error ? e.message : e);
    return err(502, "upstream_error", { status });
  }
}
