/**
 * Generate Board lessons (narrated smartboard "videos", one per chapter) with Claude.
 *
 *   ANTHROPIC_API_KEY=… npx tsx --tsconfig scripts/tsconfig.json scripts/gen-board-lessons.ts [options]
 *
 * Options:
 *   --grade 11|12          only this class            --subject physics|chemistry|maths|biology
 *   --only <id>            one chapter, e.g. 11-physics-motion-in-a-plane
 *   --limit <n>            stop after n new scripts   --model <id>   override the tutor model
 *   --force                regenerate even if the file exists
 *   --check                no API calls: validate every script in public/board-lessons and rebuild the manifest
 *
 * Resumable: chapters whose public/board-lessons/<id>.json already exists are skipped, and the manifest
 * (src/content/board-lessons/manifest.json) is rewritten after every new file. See docs/board-lessons.md.
 */
import fs from "node:fs";
import path from "node:path";
import Anthropic from "@anthropic-ai/sdk";
import { SYLLABI } from "@/content/syllabus";
import { getLessonById } from "@/content";
import { boardLessonId, type BoardLessonMeta } from "@/content/board-lessons";
import { checkScript, scriptMs, type BoardScript } from "@/components/board/script";
import { BOARD_H, BOARD_W } from "@/components/board/ops";

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "public/board-lessons");
const MANIFEST = path.join(ROOT, "src/content/board-lessons/manifest.json");
const SUBJECTS = ["physics", "chemistry", "maths", "biology"];
const MIN_WORDS = 600;
const MAX_WORDS = 1100;

const args = process.argv.slice(2);
const opt = (k: string) => {
  const i = args.indexOf(`--${k}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const flag = (k: string) => args.includes(`--${k}`);

/** The tutor route's model (read from source so the two never drift; guard.ts is server-only). */
function tutorModel() {
  const src = fs.readFileSync(path.join(ROOT, "src/lib/tutor/guard.ts"), "utf8");
  const m = src.match(/TUTOR_MODEL\s*=\s*"([^"]+)"/);
  if (!m) throw new Error("TUTOR_MODEL not found in src/lib/tutor/guard.ts");
  return m[1];
}

interface Chapter {
  id: string;
  grade: string;
  subject: string;
  title: string;
  lessons: string[];
}

/** Every Class 11–12 science/maths chapter, with its lesson ids from every board that teaches it. */
function chapters(): Chapter[] {
  const map = new Map<string, Chapter>();
  const gradeOf = (g: string, ch: { grade?: string }) => ch.grade ?? (g === "PUC-1" ? "11" : g === "PUC-2" ? "12" : g === "11" || g === "12" ? g : null);
  for (const board of Object.values(SYLLABI))
    for (const g of board.grades)
      for (const s of g.subjects) {
        if (!SUBJECTS.includes(s.id)) continue;
        for (const ch of s.chapters) {
          const grade = gradeOf(g.id, ch);
          if (!grade) continue;
          const id = boardLessonId(grade, s.id, ch.title);
          const c = map.get(id) ?? { id, grade, subject: s.id, title: ch.title, lessons: [] };
          c.lessons = [...new Set([...c.lessons, ...ch.lessonIds])];
          map.set(id, c);
        }
      }
  return [...map.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function writeManifest(all: Chapter[]) {
  const byId = new Map(all.map((c) => [c.id, c]));
  const out: BoardLessonMeta[] = [];
  for (const f of fs.readdirSync(OUT).filter((f) => f.endsWith(".json")).sort()) {
    const { script, errors } = checkScript(JSON.parse(fs.readFileSync(path.join(OUT, f), "utf8")));
    if (!script || errors.length) {
      console.warn(`! ${f}: ${errors.length} problem(s), left out of the manifest\n  ${errors.slice(0, 8).join("\n  ")}`);
      continue;
    }
    const ch = byId.get(script.id);
    out.push({ id: script.id, title: script.title, subject: script.subject, grade: script.grade, chapter: script.chapter, minutes: Math.max(1, Math.round(scriptMs(script) / 60_000)), steps: script.steps.length, lessons: ch?.lessons ?? [] });
  }
  fs.writeFileSync(MANIFEST, JSON.stringify(out, null, 2) + "\n");
  return out;
}

/** Lesson text for the prompt: titles, summaries and blocks, trimmed. */
function lessonContent(ids: string[]) {
  const parts: string[] = [];
  for (const id of ids) {
    const ref = getLessonById(id);
    if (!ref) continue;
    const l = ref.lesson;
    parts.push(`## ${l.title}\n${l.summary}\n${JSON.stringify(l.blocks).slice(0, 9000)}`);
  }
  return parts.join("\n\n").slice(0, 40_000);
}

const OPS_DOC = `Board: a ${BOARD_W} x ${BOARD_H} page, origin top-left. Elements without x/y flow down the page like notebook lines (about 10 lines per page).
Ops (JSON objects; every drawn element needs a unique "id"; colors: ink, blue, red, green, orange, purple):
  {"op":"text","id","text","x?","y?","size?(14-64, default 26)","color?"}
  {"op":"math","id","tex":"KaTeX","x?","y?","size?(default 30)","color?"}
  {"op":"line"|"arrow","id","from":[x,y],"to":[x,y],"color?","label?"}
  {"op":"rect","id","x","y","w","h","color?","label?"}   {"op":"circle","id","x","y","r","color?","label?"}
  {"op":"axes","id","x","y","w","h","xmin","xmax","ymin","ymax","xlabel?","ylabel?"}
  {"op":"plot","id","axes":"<axes id>","fn":"e.g. 1/x^2 or 2sin(x)","color?","label?"}   {"op":"point","id","axes","at":[x,y],"label?"}
  {"op":"highlight"|"underline","target":"<id drawn earlier on this page>","color?"}
  {"op":"laser","target":"<id>"}   {"op":"page"} (new blank page)`;

const SYSTEM = `You write "board lessons": a 4-7 minute narrated whiteboard video that teaches one NCERT chapter to Indian Class 11-12 students (CBSE / state boards, also preparing for JEE, NEET, KCET). A tutor speaks each step aloud while the board draws that step's ops.

Output ONLY a JSON object: {"v":1,"id","title","subject","grade","chapter","lang":"en","steps":[{"mark?":"chapter name","say":"narration","ops":[...]}]}

Rules:
- 12-18 steps, ${MIN_WORDS}-${MAX_WORDS} words of narration in total (about 150 words a minute). Each "say" is 2-5 spoken sentences in warm, clear Indian English.
- Narration is SPOKEN: no LaTeX, symbols or markdown in "say"; say "x squared", "one over four pi epsilon nought".
- Put formulas on the board with math ops (KaTeX). Use diagrams (rect, circle, arrow, line), graphs (axes + plot) and highlights wherever they help. Keep 3-8 elements per page and start each major section with {"op":"page"}.
- Set "mark" on the first step of each section (5-8 sections), starting with step 1; finish with a "Summary" section recapping 4-5 points on the board.
- Follow the NCERT chapter faithfully and only state facts you are sure of. No exam-year claims.
- highlight/underline/laser targets must be ids drawn earlier on the SAME page.

${OPS_DOC}`;

async function generate(client: Anthropic, model: string, ch: Chapter): Promise<BoardScript> {
  const user = `Chapter: Class ${ch.grade} ${ch.subject} — "${ch.title}". Use id "${ch.id}", subject "${ch.subject}", grade "${ch.grade}", chapter "${ch.title}", title "${ch.title}".\n\nThe app's lessons for this chapter (follow their scope and terminology):\n\n${lessonContent(ch.lessons) || "(no lesson text; follow the NCERT chapter)"}`;
  const messages: Anthropic.MessageParam[] = [{ role: "user", content: user }];
  for (let attempt = 1; attempt <= 3; attempt++) {
    const msg = await client.messages.stream({ model, max_tokens: 16000, system: SYSTEM, messages }).finalMessage();
    const text = msg.content.map((b) => (b.type === "text" ? b.text : "")).join("");
    let raw: unknown = null;
    try {
      raw = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
    } catch {
      /* reported below */
    }
    const { script, errors, words } = raw ? checkScript(raw) : { script: null, errors: ["output was not valid JSON"], words: 0 };
    if (script && (words < MIN_WORDS || words > MAX_WORDS)) errors.push(`narration is ${words} words; it must be ${MIN_WORDS}-${MAX_WORDS}`);
    if (script && script.id !== ch.id) errors.push(`id must be "${ch.id}"`);
    if (script && !errors.length) return script;
    console.warn(`  attempt ${attempt}: ${errors.length} problem(s): ${errors.slice(0, 5).join("; ")}`);
    messages.push({ role: "assistant", content: text }, { role: "user", content: `Fix these problems and output the whole corrected JSON again:\n- ${errors.slice(0, 30).join("\n- ")}` });
  }
  throw new Error("no valid script after 3 attempts");
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const all = chapters();
  if (flag("check")) {
    const m = writeManifest(all);
    console.log(`manifest: ${m.length} board lessons (${m.map((x) => `${x.id} ${x.minutes}min`).join(", ")})`);
    return;
  }
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) throw new Error("Set ANTHROPIC_API_KEY (see docs/board-lessons.md).");
  const model = opt("model") ?? tutorModel();
  const todo = all.filter((c) => (!opt("grade") || c.grade === opt("grade")) && (!opt("subject") || c.subject === opt("subject")) && (!opt("only") || c.id === opt("only")) && (flag("force") || !fs.existsSync(path.join(OUT, `${c.id}.json`))));
  const limit = Number(opt("limit") ?? Infinity);
  console.log(`${todo.length} chapter(s) to generate with ${model}${Number.isFinite(limit) ? ` (limit ${limit})` : ""}`);
  const client = new Anthropic();
  let made = 0;
  let failed = 0;
  for (const ch of todo) {
    if (made >= limit) break;
    process.stdout.write(`- ${ch.id} … `);
    try {
      const s = await generate(client, model, ch);
      fs.writeFileSync(path.join(OUT, `${ch.id}.json`), JSON.stringify(s, null, 1) + "\n");
      writeManifest(all);
      made++;
      console.log(`ok (${s.steps.length} steps, ${Math.round(scriptMs(s) / 60_000)} min)`);
    } catch (e) {
      failed++;
      console.log(`FAILED: ${e instanceof Error ? e.message : e}`);
    }
  }
  writeManifest(all);
  console.log(`done: ${made} new, ${failed} failed. Re-run to retry failures (existing files are skipped).`);
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
