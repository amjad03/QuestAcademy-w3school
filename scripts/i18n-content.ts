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

const ROOT = path.resolve(__dirname, "..");
const LOCALES = ["hi", "kn", "ta", "te", "mr", "bn"];
/** Courses taught in English on purpose. */
const ENGLISH_ONLY = new Set(["english"]);

/** The visual explainers are translated like one more course, "explainers". */
const EXPLAINER_SKIP = new Set(["lessons", "ages", "color"]);

function strings(course: string): string[] {
  const root = course === "explainers" ? EXPLAINERS : subjects.find((x) => x.slug === course);
  if (!root) throw new Error(`No course "${course}"`);
  const out = new Set<string>();
  const walk = (v: unknown) => {
    if (typeof v === "string") return void (translatable(v) && out.add(v));
    if (Array.isArray(v)) return v.forEach(walk);
    // Skip React elements (explainer artwork) and components.
    if (v && typeof v === "object" && !("$$typeof" in v))
      for (const [k, x] of Object.entries(v)) if (!SKIP_FIELDS.has(k) && !(course === "explainers" && EXPLAINER_SKIP.has(k))) walk(x);
  };
  walk(root);
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
  for (const s of [...subjects, { slug: "explainers" }]) {
    if (ENGLISH_ONLY.has(s.slug)) continue;
    const all = strings(s.slug);
    const cols = LOCALES.map((l) => {
      const d = dict(l, s.slug);
      return `${l} ${all.filter((x) => x in d).length}`;
    });
    console.log(`${s.slug.padEnd(24)} ${String(all.length).padStart(5)} strings   ${cols.join("  ")}`);
  }
}
