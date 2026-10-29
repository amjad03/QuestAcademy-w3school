// First Sarvam call: text to speech with bulbul:v3. Reads SARVAM_API_KEY from .env; saves sarvam-test.wav.
// Run: node --env-file=.env scripts/sarvam-first-call.mjs
import { writeFileSync } from "node:fs";
import { SarvamAIClient } from "sarvamai";

if (!process.env.SARVAM_API_KEY) {
  console.error("SARVAM_API_KEY is empty: paste your key into .env first.");
  process.exit(1);
}
const client = new SarvamAIClient({ apiSubscriptionKey: process.env.SARVAM_API_KEY });
const res = await client.textToSpeech.convert({
  text: "Namaste! I am Questy, your tutor. Let's learn something new today.",
  language_code: "en-IN",
  speaker: "priya",
  model: "bulbul:v3",
});
writeFileSync("sarvam-test.wav", Buffer.from(res.audios[0], "base64"));
console.log("OK: saved sarvam-test.wav, request id", res.request_id ?? "-");
