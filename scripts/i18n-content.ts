/**
 * Lesson content translation status.
 *
 *   npm run i18n:content                         # strings per course, missing per language
 *   npm run i18n:content -- --strings <course>   # every translatable English string (JSON array)
 *   npm run i18n:content -- --missing <course> <locale>   # strings without a translation yet
 *   npm run i18n:content -- --check <course> <locale>     # unknown keys, $maths$ or **bold** that changed
 *
 * Translations live in public/i18n/<locale>/<course>.json as { "English": "translation" }.
 */
import fs from "node:fs";
import path from "node:path";
import { subjects } from "@/content";
import { SKIP_FIELDS, translatable } from "@/i18n/content-fields";
import { EXPLAINERS } from "@/explainers";
import { SYLLABI } from "@/content/syllabus";

const ROOT = path.resolve(__dirname, "..");
const LOCALES = ["hi", "kn", "ta", "te", "mr", "bn"];
/** Courses taught in English on purpose. */
const ENGLISH_ONLY = new Set(["english"]);

/**
 * Besides courses, three shared dictionaries: "explainers" (the visual
 * explainers), "syllabus" (board chapter lists) and "catalog" (course names,
 * taglines and descriptions shown on homes, menus and the catalog).
 */
const EXTRA_SKIP: Record<string, Set<string>> = {
  explainers: new Set(["lessons", "ages", "color"]),
  syllabus: new Set(["lessonIds", "examChapters", "examSubject", "formulaChapter", "board", "examId"]),
};
const SHARED = ["explainers", "syllabus", "catalog"];

function rootOf(course: string): unknown {
  if (course === "explainers") return EXPLAINERS;
  if (course === "syllabus") return SYLLABI;
  if (course === "catalog") return subjects.map((s) => ({ title: s.title, tagline: s.tagline, description: s.description, levels: s.levels, domain: s.domain }));
  return subjects.find((x) => x.slug === course);
}

function strings(course: string): string[] {
  const root = rootOf(course);
  if (!root) throw new Error(`No course "${course}"`);
  const out = new Set<string>();
  const walk = (v: unknown) => {
    if (typeof v === "string") return void (translatable(v) && out.add(v));
    if (Array.isArray(v)) return v.forEach(walk);
    // Skip React elements (explainer artwork) and components.
    if (v && typeof v === "object" && !("$$typeof" in v))
      for (const [k, x] of Object.entries(v)) if ((!SKIP_FIELDS.has(k) || (course === "catalog" && k === "domain")) && !EXTRA_SKIP[course]?.has(k)) walk(x);
  };
  walk(root);
  if (course === "explainers") for (const l of sceneLabels()) out.add(l);
  return [...out];
}

/** Button labels written inside mission scenes (see src/explainers/useLabel.ts). */
function sceneLabels(): string[] {
  const dir = path.join(ROOT, "src", "explainers");
  const files = fs.readdirSync(dir, { recursive: true }).map(String).filter((f) => f.endsWith(".tsx"));
  const out = new Set<string>();
  for (const f of files) {
    const src = fs.readFileSync(path.join(dir, f), "utf8");
    for (const m of src.matchAll(/<(ActionButton|MissionButton|StepButton)\b/g)) {
      // The opening tag ends at the first ">" outside {…} (attributes can hold arrows).
      let i = m.index! + m[0].length;
      for (let depth = 0; i < src.length; i++) {
        const c = src[i];
        if (c === "{") depth++;
        else if (c === "}") depth--;
        else if (c === ">" && depth === 0) break;
      }
      if (src[i - 1] === "/") continue; // self-closing
      const end = src.indexOf(`</${m[1]}>`, i);
      if (end < 0) continue;
      // Text between the tags, minus JSX expressions and icon elements.
      const text = src.slice(i + 1, end).replace(/\{[^{}]*\}/g, " ").replace(/<[^>]+\/>/g, " ").replace(/\s+/g, " ").trim();
      if (text && translatable(text)) out.add(text);
    }
    for (const m of src.matchAll(/\bbutton="([^"]+)"/g)) if (translatable(m[1])) out.add(m[1].trim());
  }
  return [...out];
}

function dict(locale: string, course: string): Record<string, string> {
  const f = path.join(ROOT, "public", "i18n", locale, `${course}.json`);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : {};
}

const tokens = (s: string, re: RegExp) => (s.match(re) ?? []).sort().join("\u0000");

const [cmd, course, locale] = process.argv.slice(2);
if (cmd === "--strings") {
  console.log(JSON.stringify(strings(course), null, 1));
} else if (cmd === "--missing") {
  const d = dict(locale, course);
  console.log(JSON.stringify(strings(course).filter((x) => !(x in d)), null, 1));
} else if (cmd === "--check") {
  const d = dict(locale, course);
  const all = new Set(strings(course));
  let bad = 0;
  for (const [en, tr] of Object.entries(d)) {
    const problems = [];
    if (!all.has(en)) problems.push("not in course");
    if (typeof tr !== "string" || !tr.trim()) problems.push("empty");
    else {
      if (tokens(en, /\$[^$]+\$/g) !== tokens(tr, /\$[^$]+\$/g)) problems.push("maths changed");
      if ((en.match(/\*\*/g) ?? []).length !== (tr.match(/\*\*/g) ?? []).length) problems.push("bold markers differ");
      if (tokens(en, /`[^`]+`/g) !== tokens(tr, /`[^`]+`/g)) problems.push("code changed");
    }
    if (problems.length) {
      bad++;
      console.log(`${problems.join(", ")} :: ${en.slice(0, 90)}`);
    }
  }
  const missing = [...all].filter((x) => !(x in d)).length;
  console.log(`${course} ${locale}: ${Object.keys(d).length} translated, ${missing} missing, ${bad} with problems`);
  process.exitCode = bad ? 1 : 0;
} else {
  for (const s of [...subjects, ...SHARED.map((slug) => ({ slug }))]) {
    if (ENGLISH_ONLY.has(s.slug)) continue;
    const all = strings(s.slug);
    const cols = LOCALES.map((l) => {
      const d = dict(l, s.slug);
      return `${l} ${all.filter((x) => x in d).length}`;
    });
    console.log(`${s.slug.padEnd(24)} ${String(all.length).padStart(5)} strings   ${cols.join("  ")}`);
  }
}
