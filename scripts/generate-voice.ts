/**
 * Pre-renders Questy's voice (Kokoro-82M, af_heart) for every Explore-mode
 * sentence into public/voice/<key>.mp3 and writes public/voice/manifest.json.
 *
 *   npm i --no-save kokoro-js     # one-time, ~90 MB model downloads on first run
 *   npm run generate-voice        # only renders clips that are missing
 *   npm run generate-voice -- --prune   # also deletes clips no longer used
 *
 * Needs ffmpeg on PATH for MP3 encoding.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { voiceCorpus } from "./voice-corpus";
import { VOICE_ID, voiceKey } from "../src/lib/voice";

const OUT = path.join(process.cwd(), "public/voice");

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const lines = voiceCorpus();
  const wanted = new Map(lines.map((t) => [voiceKey(t), t]));
  const missing = [...wanted].filter(([k]) => !fs.existsSync(path.join(OUT, `${k}.mp3`)));
  console.log(`${wanted.size} lines, ${missing.length} to render`);

  if (missing.length) {
    // Optional dependency, so it is resolved at run time only.
    const pkg = "kokoro-js";
    let KokoroTTS;
    try {
      ({ KokoroTTS } = await import(pkg));
    } catch {
      console.error("kokoro-js is not installed. Run: npm i --no-save kokoro-js");
      process.exit(1);
    }
    const tts = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", { dtype: "q8", device: "cpu" });
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "qa-voice-"));
    let n = 0;
    for (const [key, text] of missing) {
      const audio = await tts.generate(text, { voice: VOICE_ID, speed: 0.95 });
      const wav = path.join(tmp, `${key}.wav`);
      await audio.save(wav);
      execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", wav, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-ac", "1", "-ar", "24000", "-b:a", "40k", path.join(OUT, `${key}.mp3`)]);
      fs.rmSync(wav);
      if (++n % 25 === 0) console.log(`${n}/${missing.length}`);
    }
  }

  const present = fs.readdirSync(OUT).filter((f) => f.endsWith(".mp3")).map((f) => f.slice(0, -4));
  if (process.argv.includes("--prune")) {
    for (const k of present) if (!wanted.has(k)) fs.rmSync(path.join(OUT, `${k}.mp3`));
  }
  const keys = present.filter((k) => wanted.has(k) || !process.argv.includes("--prune")).sort();
  fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify({ voice: VOICE_ID, keys }));
  console.log(`manifest: ${keys.length} clips`);
}

main();
