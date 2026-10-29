# Voice (Sarvam AI server voice)

The live tutor, the Ask Questy panel, board lessons and "Explain by voice" speak and listen through
`src/lib/tutor/speech.ts` and `src/lib/tutor/listen.ts`; the kids' Questy voice is `src/lib/voice.ts`.

## Engine order

1. **Sarvam AI** (server, `/api/voice/*`) when `GET /api/voice/config` reports `configured: true`.
   The 92 MB Kokoro model is never downloaded; the tutor shows a short "Connecting Questy's voice" step.
   - TTS: `POST /api/voice/tts` `{text ≤ 500 chars, lang, voice: "female"|"male", pace}` → `audio/wav`
     (Sarvam `POST https://api.sarvam.ai/text-to-speech`, model `bulbul:v3`). Speech goes sentence by
     sentence; sentence N+1 is synthesised while N plays. Clips are cached in memory (LRU) and in Cache
     Storage (`sarvam-tts-v1`), so a repeated sentence costs nothing.
   - STT: the browser records the mic (16 kHz WAV, energy voice-activity detection, end of speech after
     ~800 ms of silence, max 28 s) and sends it to `POST /api/voice/stt` (Sarvam `speech-to-text`, model
     `saarika:v2.5`). While the tutor is talking, the first ~0.9 s of student speech is transcribed early
     so barge-in works.
   - Teacher voice: "Didi" (female: priya) or "Bhaiya" (male: rahul;
     same voice in every language), chosen in the voice chip and remembered on the device.
2. **Kokoro** in the browser (as before) when Sarvam is not configured, fails twice in a row, or the
   learner's daily allowance is used up (it loads in the background; nothing waits for it mid-lesson).
3. **Device voice** / Web Speech API recognition meanwhile and as the last fallback.

Console logs: `[voice] chunk 1/3 engine=sarvam ms=…`, `[voice] engine=sarvam stt ms=…` (server logs the
same with `engine=sarvam tts ms=…`).

## Environment variables (server only — the key never reaches the browser)

| Variable | Default | Meaning |
| --- | --- | --- |
| `SARVAM_API_KEY` | — | Sarvam subscription key (sent as `api-subscription-key`). Unset = Sarvam off. |
| `SARVAM_TTS_MODEL` | `bulbul:v3` | TTS model (bulbul:v2 is deprecated). |
| `SARVAM_STT_MODEL` | `saarika:v2.5` | STT model. |
| `SARVAM_SPEAKER_FEMALE` / `SARVAM_SPEAKER_MALE` | see above | One speaker name, or per language: `en-IN:anushka,hi-IN:manisha`. |
| `SARVAM_DISABLED` / `SARVAM_STT_DISABLED` | — | `1` turns all / only STT off without removing the key. |
| `SARVAM_DAILY_TTS_CHARS` | `40000` | Per signed-in learner per day (IST). `0` = no cap. |
| `SARVAM_DAILY_STT_SECONDS` | `1200` | Per signed-in learner per day. |
| `SARVAM_GUEST_TTS_CHARS` / `SARVAM_GUEST_STT_SECONDS` | `8000` / `300` | Per guest (hashed IP) per day. |
| `SARVAM_TTS_INR_PER_10K_CHARS` | `15` | Price used for the admin cost estimate. |
| `SARVAM_STT_INR_PER_HOUR` | `30` | Price used for the admin cost estimate. |
| `VOICE_RATE_USER` / `VOICE_RATE_GUEST_IP` | `90` / `240` | Burst limit, requests per minute per instance. |

## Cost control

- Caps are checked before each Sarvam call (running totals per instance, re-seeded from `ai_usage` every
  minute so all instances agree). Over the cap the route answers `429 {error: "voice_cap"}`; the browser
  switches to Kokoro / the device voice and shows a gentle "back tomorrow" note.
- Every successful call is logged to `ai_usage` with `model` `sarvam-tts` / `sarvam-stt`, `route`
  `voice/tts` / `voice/stt`, and the units (characters / seconds) in `input_tokens`. `/admin/usage`
  prices those rows with the rates above, includes them in the cost totals and shows a voice summary line.
- Rough cost: a 30-minute live class speaks ~6–9k characters ≈ ₹9–14 TTS, plus a few minutes of STT ≈ ₹2.
  At the default caps a learner costs at most ≈ ₹60 TTS + ₹10 STT per day.

## Security

`SARVAM_API_KEY` is read only in `src/lib/tutor/sarvam.ts` (server-only). Routes validate sizes (TTS ≤ 500
chars, STT ≤ 1.2 MB / 30 s, audio types only), apply the per-user / per-IP burst limiter and the daily caps.
