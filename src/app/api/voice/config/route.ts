import { STT_MODEL, TTS_MODEL, sarvamConfigured } from "@/lib/tutor/sarvam";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Is the server voice (Sarvam AI) configured? The browser then skips the in-browser Kokoro model. */
export function GET() {
  const on = sarvamConfigured() && process.env.SARVAM_DISABLED !== "1";
  return Response.json(
    { configured: on, tts: on, stt: on && process.env.SARVAM_STT_DISABLED !== "1", ttsModel: on ? TTS_MODEL() : null, sttModel: on ? STT_MODEL() : null, maxChars: 500, maxSeconds: 30 },
    { headers: { "Cache-Control": "public, max-age=60" } },
  );
}
