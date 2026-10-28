/**
 * Import genuine previous-year exam questions (that you have the right to use) into the exam bank.
 *
 *   npx tsx --tsconfig scripts/tsconfig.json scripts/import-pyq.ts <file.json|file.csv> [--source "…"] [--dry]
 *
 * Each row: exam, year, shift, subject, chapter, question, options, answer, solution
 *   (optional: grade, source, difficulty, kind). See docs/pyq-import.md for the exact format.
 *
 * Rows are validated, given a stable id (re-importing the same question updates it instead of duplicating),
 * and merged into src/content/exam/pyq/imported.json, which the drill, mocks and "Previous-year pattern"
 * mode read. Only these rows ever show an exam year in the app.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import type { ExamId, ExamQuestion, ExamSubject } from "@/content/types";
import { EXAM_IDS } from "@/lib/exam";
import { examQuestions } from "@/content/exam/questions";

const OUT = path.resolve(__dirname, "../src/content/exam/pyq/imported.json");
const SUBJECTS: ExamSubject[] = ["physics", "chemistry", "maths", "biology"];
const ALIASES: Record<string, ExamId> = { "JEE MAIN": "JEE", JEE: "JEE", "JEE_MAIN": "JEE", "JEE ADVANCED": "JEE_ADV", "JEE_ADV": "JEE_ADV", "JEE ADV": "JEE_ADV", NEET: "NEET", "NEET UG": "NEET", "NEET-UG": "NEET", KCET: "KCET", COMEDK: "COMEDK" };
const SUBJECT_ALIASES: Record<string, ExamSubject> = { physics: "physics", chemistry: "chemistry", maths: "maths", math: "maths", mathematics: "maths", biology: "biology", botany: "biology", zoology: "biology" };

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--source");
const opt = (k: string) => (args.includes(`--${k}`) ? args[args.indexOf(`--${k}`) + 1] : undefined);
const dry = args.includes("--dry");

/** Minimal RFC 4180 CSV parser (quoted fields, "" escapes, newlines inside quotes). */
function parseCsv(text: string): Record<string, string>[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') (cell += '"'), i++;
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") row.push(cell), (cell = "");
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      if (row.some((x) => x.trim())) rows.push(row);
      row = [];
      cell = "";
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x.trim())) rows.push(row);
  const [head, ...body] = rows;
  const keys = head.map((h) => h.trim().toLowerCase());
  return body.map((r) => Object.fromEntries(keys.map((k, i) => [k, (r[i] ?? "").trim()])));
}

type Row = Record<string, unknown>;
const str = (v: unknown) => (v === undefined || v === null ? "" : String(v).trim());
const letter = (s: string) => (/^[A-Ha-h]$/.test(s) ? s.toUpperCase().charCodeAt(0) - 65 : /^\d+$/.test(s) ? Number(s) - 1 : -1);

/** Chapter titles already in the bank, per subject, with their class. */
const KNOWN = new Map<string, { title: string; grade?: "11" | "12" }>();
for (const q of examQuestions) KNOWN.set(`${q.subject}|${q.chapter.toLowerCase()}`, { title: q.chapter, grade: q.grade });

function toQuestion(r: Row, n: number, fallbackSource?: string): { q?: ExamQuestion; error?: string; warn?: string } {
  const exam = ALIASES[str(r.exam).toUpperCase().replace(/\s+/g, " ")];
  if (!exam || !EXAM_IDS.includes(exam)) return { error: `row ${n}: unknown exam "${str(r.exam)}" (use JEE Main, JEE Advanced, NEET, KCET or COMEDK)` };
  const year = Number(str(r.year));
  if (!Number.isInteger(year) || year < 1978 || year > new Date().getFullYear()) return { error: `row ${n}: year "${str(r.year)}" is not a valid exam year` };
  const subject = SUBJECT_ALIASES[str(r.subject).toLowerCase()];
  if (!subject) return { error: `row ${n}: unknown subject "${str(r.subject)}"` };
  const question = str(r.question);
  if (!question) return { error: `row ${n}: empty question` };
  const source = str(r.source) || fallbackSource || "";
  if (!source) return { error: `row ${n}: no source (add a "source" column or pass --source, e.g. "NTA official paper, 2024-01-27 shift 1")` };
  const known = KNOWN.get(`${subject}|${str(r.chapter).toLowerCase()}`);
  const chapter = known?.title ?? str(r.chapter);
  if (!chapter) return { error: `row ${n}: empty chapter` };
  const warn = known ? undefined : `row ${n}: chapter "${chapter}" is not in the ${subject} bank yet (it will get its own chapter chip; check the spelling against the NCERT title)`;
  const gradeRaw = str(r.grade);
  const grade = gradeRaw === "11" || gradeRaw === "12" ? gradeRaw : known?.grade;
  const options = Array.isArray(r.options) ? r.options.map(str) : str(r.options) ? str(r.options).split("|").map((s) => s.trim()) : [];
  const answer = Array.isArray(r.answer) ? r.answer.map(str).join(",") : str(r.answer);
  const shift = str(r.shift) || undefined;
  const difficulty = [1, 2, 3].includes(Number(r.difficulty)) ? (Number(r.difficulty) as 1 | 2 | 3) : exam === "JEE_ADV" ? 3 : 2;
  const id = `pyq-${exam.toLowerCase()}-${year}-${crypto.createHash("sha1").update(`${exam}|${year}|${shift ?? ""}|${question}`).digest("hex").slice(0, 10)}`;
  const base = { id, exams: [exam], subject, chapter, ...(grade ? { grade } : {}), q: question, explain: str(r.solution) || undefined, difficulty, pyq: { exam, year, ...(shift ? { shift } : {}), source } };
  const kind = str(r.kind).toLowerCase();
  if (options.length === 0 || kind === "numeric") {
    const v = Number(answer);
    if (!Number.isFinite(v)) return { error: `row ${n}: numeric question needs a number as the answer, got "${answer}"` };
    return { q: { ...base, kind: "numeric", answer: v } as ExamQuestion, warn };
  }
  if (options.length < 2) return { error: `row ${n}: needs at least 2 options (separate them with |)` };
  const picks = answer.split(/[,;\s]+/).filter(Boolean).map(letter);
  if (!picks.length || picks.some((i) => i < 0 || i >= options.length)) return { error: `row ${n}: answer "${answer}" must be option letter(s) A–${String.fromCharCode(64 + options.length)} or numbers 1–${options.length}` };
  if (picks.length > 1 || kind === "multi") return { q: { ...base, kind: "multi", options, answers: [...new Set(picks)].sort() } as ExamQuestion, warn };
  return { q: { ...base, kind: "mcq", options, answer: picks[0] } as ExamQuestion, warn };
}

function main() {
  if (!file) throw new Error("Usage: scripts/import-pyq.ts <file.json|file.csv> [--source \"…\"] [--dry]");
  const text = fs.readFileSync(file, "utf8");
  const rows: Row[] = file.toLowerCase().endsWith(".csv") ? parseCsv(text) : (JSON.parse(text) as Row[]);
  if (!Array.isArray(rows)) throw new Error("JSON must be an array of rows");
  const current = JSON.parse(fs.readFileSync(OUT, "utf8")) as ExamQuestion[];
  const byId = new Map(current.map((q) => [q.id, q]));
  let added = 0;
  let updated = 0;
  const errors: string[] = [];
  rows.forEach((r, i) => {
    const { q, error, warn } = toQuestion(r, i + 1, opt("source"));
    if (warn) console.warn("warn:", warn);
    if (error || !q) return errors.push(error ?? `row ${i + 1}: invalid`);
    if (byId.has(q.id)) updated++;
    else added++;
    byId.set(q.id, q);
  });
  for (const e of errors) console.error("skip:", e);
  const out = [...byId.values()].sort((a, b) => a.id.localeCompare(b.id));
  if (!dry) fs.writeFileSync(OUT, JSON.stringify(out, null, 1) + "\n");
  console.log(`${dry ? "[dry run] " : ""}${added} added, ${updated} updated, ${errors.length} skipped; ${out.length} imported PYQs in total.`);
  if (errors.length) process.exitCode = 1;
}

main();
