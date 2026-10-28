// Questy's voice: Kokoro-82M (kokoro-js 1.2.1, Apache-2.0) in a module worker.
// kokoro-js and the ONNX Runtime wasm (MIT) are served from this folder so a CDN
// outage can't silently drop the tutor back to the device voice. The model and
// voice files come from Hugging Face and are kept in Cache Storage
// ("transformers-cache", "kokoro-voices"), so later visits load without a download.

let KokoroTTS = null;
let tts = null;
let loading = null;
let cancelled = 0;
const queue = [];
let running = false;

const post = (m, t) => self.postMessage(m, t || []);
const msg = (e) => String((e && e.message) || e);

async function lib() {
  const local = new URL("./kokoro-1.2.1.web.js", import.meta.url).href;
  try {
    const m = await import(local);
    m.env.wasmPaths = new URL("./", import.meta.url).href;
    return m;
  } catch (e) {
    post({ type: "log", text: "local kokoro-js failed (" + msg(e) + "), trying CDN" });
    return import("https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/dist/kokoro.web.js");
  }
}

async function load({ model, voice }) {
  post({ type: "stage", stage: "download" });
  ({ KokoroTTS } = await lib());
  const files = new Map();
  let last = 0;
  const progress = (p) => {
    if (!p || !p.file) return;
    if (p.status === "progress" || p.status === "done") {
      const f = files.get(p.file) || { loaded: 0, total: 0 };
      if (p.total) f.total = p.total;
      f.loaded = p.status === "done" ? f.total || p.loaded || 0 : p.loaded || 0;
      files.set(p.file, f);
      const now = performance.now();
      if (now - last < 120 && p.status === "progress") return;
      last = now;
      let loaded = 0, total = 0;
      for (const v of files.values()) { loaded += v.loaded; total += v.total; }
      post({ type: "progress", loaded, total });
    }
  };
  // q8 on WASM: ~92 MB, works on every browser. (WebGPU needs the 326 MB fp32 model.)
  const m = await KokoroTTS.from_pretrained(model, { dtype: "q8", device: "wasm", progress_callback: progress });
  // kokoro-js only lists its English voices in a frozen table, and generate() rejects
  // anything else ("hf_alpha" threw here before, so the tutor fell back to the device
  // voice right after the download). The Hindi voices exist in the same model repo;
  // phonemise them as English ("en" = British/Indian-style espeak, not "en-us").
  m._validate_voice = (id) => {
    if (!/^[a-z][fm]_[a-z]+$/.test(id)) throw new Error("bad voice id " + id);
    return id[0] === "a" ? "a" : "b";
  };
  post({ type: "stage", stage: "warmup" });
  // First inference compiles kernels and fetches the voice file.
  await m.generate("Hello.", { voice });
  tts = m;
  post({ type: "ready" });
}

self.onmessage = (e) => {
  const d = e.data || {};
  if (d.type === "load") {
    loading ??= load(d).catch((err) => post({ type: "failed", error: msg(err) }));
    return;
  }
  if (d.type === "cancel") {
    cancelled = Math.max(cancelled, d.gen);
    return;
  }
  if (d.type === "say") {
    // A retry jumps the queue so the sentence being waited for comes next.
    if (d.urgent) queue.unshift(d);
    else queue.push(d);
    void pump();
  }
};

// One generate() at a time: ONNX Runtime sessions must not run concurrently.
async function pump() {
  if (running) return;
  running = true;
  while (queue.length) await speak(queue.shift());
  running = false;
}

async function speak(d) {
  if (d.gen <= cancelled) return post({ type: "audio", id: d.id, skipped: true });
  const t0 = performance.now();
  try {
    if (!tts) await loading;
    if (!tts) throw new Error("not loaded");
    if (!/[\p{L}\p{N}]/u.test(d.text || "")) throw new Error("nothing speakable");
    const a = await tts.generate(d.text, { voice: d.voice, speed: d.speed || 1 });
    // Copy into a fresh buffer we own, so transferring it can never detach memory kokoro-js still uses.
    const pcm = new Float32Array(a.audio);
    if (!pcm.length) throw new Error("empty audio");
    post({ type: "audio", id: d.id, pcm, rate: a.sampling_rate, ms: Math.round(performance.now() - t0) }, [pcm.buffer]);
  } catch (err) {
    post({ type: "audio", id: d.id, error: msg(err), ms: Math.round(performance.now() - t0) });
  }
}
