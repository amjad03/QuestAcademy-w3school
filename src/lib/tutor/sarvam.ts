import "server-only";

/**
 * Sarvam AI (https://sarvam.ai) text-to-speech (Bulbul) and speech-to-text (Saarika), called only from
 * the server so the key never reaches the browser. Docs were not reachable when this was written, so
 * both request shapes Sarvam has used for TTS (`text` and the older `inputs: [text]`) are handled, and
 * any error body is logged.
 */

const BASE = process.env.SARVAM_API_BASE || "https://api.sarvam.ai";
export const sarvamConfigured = () => Boolean(process.env.SARVAM_API_KEY);
export const TTS_MODEL = () => process.env.SARVAM_TTS_MODEL || "bulbul:v3";
export const STT_MODEL = () => process.env.SARVAM_STT_MODEL || "saarika:v2.5";

/** Languages Bulbul/Saarika speak (BCP-47 with -IN). */
export const VOICE_LANGS = ["en-IN", "hi-IN", "kn-IN", "bn-IN", "ta-IN", "te-IN", "mr-IN", "gu-IN", "ml-IN", "pa-IN", "od-IN"] as const;
export type VoiceLang = (typeof VOICE_LANGS)[number];
export type VoiceGender = "female" | "male";

/** Warm teacher voices (bulbul:v3 speakers; v2 is deprecated). Override with SARVAM_SPEAKER_FEMALE / SARVAM_SPEAKER_MALE (one name, or "en-IN:priya,hi-IN:neha"). */
const SPEAKERS: Record<VoiceGender, Partial<Record<VoiceLang, string>> & { default: string }> = {
  female: { default: "priya", "en-IN": "priya", "hi-IN": "priya", "kn-IN": "priya" },
  male: { default: "rahul", "en-IN": "rahul", "hi-IN": "rahul", "kn-IN": "rahul" },
};

export function speakerFor(gender: VoiceGender, lang: VoiceLang): string {
  const env = process.env[gender === "male" ? "SARVAM_SPEAKER_MALE" : "SARVAM_SPEAKER_FEMALE"]?.trim();
  if (env) {
    if (!env.includes(":")) return env;
    const map = Object.fromEntries(env.split(",").map((p) => p.split(":").map((x) => x.trim())));
    if (map[lang]) return map[lang];
  }
  return SPEAKERS[gender][lang] ?? SPEAKERS[gender].default;
}

const headers = () => ({ "api-subscription-key": process.env.SARVAM_API_KEY ?? "" });

export class SarvamError extends Error {
  constructor(
    public status: number,
    public body: string,
  ) {
    super(`sarvam ${status}: ${body.slice(0, 300)}`);
  }
}

/** Text (≤ 500 chars) → WAV bytes. */
export async function sarvamTts(o: { text: string; lang: VoiceLang; speaker: string; pace: number }): Promise<Uint8Array> {
  const common = {
    language_code: o.lang,
    speaker: o.speaker,
    model: TTS_MODEL(),
    pace: o.pace,
    speech_sample_rate: 22050,
    enable_preprocessing: true,
  };
  const call = (body: Record<string, unknown>) =>
    fetch(`${BASE}/text-to-speech`, {
      method: "POST",
      headers: { ...headers(), "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(20000),
    });
  let res = await call({ text: o.text, ...common });
  if (!res.ok && (res.status === 400 || res.status === 422)) {
    // Older API versions took `inputs: [text]`.
    const first = await res.text().catch(() => "");
    console.warn("[voice] sarvam tts rejected `text` shape, retrying with `inputs`:", res.status, first.slice(0, 400));
    res = await call({ inputs: [o.text], ...common });
  }
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[voice] sarvam tts error", res.status, body.slice(0, 600));
    throw new SarvamError(res.status, body);
  }
  const j = (await res.json()) as { audios?: string[]; audio?: string };
  const b64 = j.audios?.[0] ?? j.audio;
  if (!b64) throw new SarvamError(502, "no audio in response");
  return Uint8Array.from(Buffer.from(b64, "base64"));
}

/** Audio clip (wav/webm, ≤ 30 s) → transcript. */
export async function sarvamStt(o: { file: Blob; filename: string; lang: string }): Promise<{ transcript: string; language?: string }> {
  const fd = new FormData();
  fd.append("file", o.file, o.filename);
  fd.append("model", STT_MODEL());
  fd.append("language_code", o.lang);
  const res = await fetch(`${BASE}/speech-to-text`, { method: "POST", headers: headers(), body: fd, signal: AbortSignal.timeout(25000) });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[voice] sarvam stt error", res.status, body.slice(0, 600));
    throw new SarvamError(res.status, body);
  }
  const j = (await res.json()) as { transcript?: string; language_code?: string };
  return { transcript: (j.transcript ?? "").trim(), language: j.language_code };
}

/** Duration of a PCM WAV from its header (null if it isn't one). */
export function wavSeconds(buf: Uint8Array): number | null {
  if (buf.length < 44 || String.fromCharCode(...buf.slice(0, 4)) !== "RIFF" || String.fromCharCode(...buf.slice(8, 12)) !== "WAVE") return null;
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const byteRate = dv.getUint32(28, true);
  return byteRate ? (buf.length - 44) / byteRate : null;
}
