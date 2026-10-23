/**
 * Collects every `t("key", "English")` call in src/ into src/i18n/catalog.json
 * and reports, per locale, which keys have no translation yet.
 *
 *   npm run i18n:extract            # write the catalog, print missing counts
 *   npm run i18n:extract -- --missing hi   # print the missing keys for one locale as JSON
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const LOCALES = ["hi", "kn", "ta", "te", "mr", "bn"];

const LIT = String.raw`("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\`(?:[^\`\\$]|\\.)*\`)`;
const KEY = String.raw`"([a-z][\w-]*\.[\w.-]+)"`;
/** t("key", "English"), ["key", "English"] tuples and { key: "key", en: "English" } objects. */
const PATTERNS = [
  new RegExp(String.raw`\bt\(\s*"([\w.-]+)"\s*,\s*` + LIT, "g"),
  new RegExp(String.raw`\[\s*` + KEY + String.raw`\s*,\s*` + LIT + String.raw`\s*\]`, "g"),
  new RegExp(String.raw`\bkey:\s*` + KEY + String.raw`\s*,\s*en:\s*` + LIT, "g"),
];

function walk(dir: string, out: string[] = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?)$/.test(e.name)) out.push(p);
  }
  return out;
}

function unquote(lit: string) {
  const body = lit.slice(1, -1);
  return body.replace(/\\(["'`\\])/g, "$1").replace(/\\n/g, "\n");
}

const catalog: Record<string, string> = {};
const conflicts: string[] = [];
for (const file of walk(SRC)) {
  if (file.includes(`${path.sep}i18n${path.sep}messages${path.sep}`)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const m of PATTERNS.flatMap((re) => [...text.matchAll(re)])) {
    const [, key, lit] = m;
    const en = unquote(lit);
    if (catalog[key] !== undefined && catalog[key] !== en) conflicts.push(`${key}: "${catalog[key]}" vs "${en}" (${path.relative(ROOT, file)})`);
    catalog[key] ??= en;
  }
}

const sorted = Object.fromEntries(Object.entries(catalog).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(path.join(SRC, "i18n", "catalog.json"), JSON.stringify(sorted, null, 2) + "\n");

function translated(locale: string): Record<string, string> {
  const file = path.join(SRC, "i18n", "messages", `${locale}.ts`);
  if (!fs.existsSync(file)) return {};
  const text = fs.readFileSync(file, "utf8");
  const out: Record<string, string> = {};
  for (const m of text.matchAll(/^\s*"([\w.-]+)"\s*:/gm)) out[m[1]] = "";
  return out;
}

const want = process.argv.indexOf("--missing");
if (want !== -1) {
  const locale = process.argv[want + 1];
  const have = translated(locale);
  const missing = Object.fromEntries(Object.entries(sorted).filter(([k]) => !(k in have)));
  process.stdout.write(JSON.stringify(missing, null, 2) + "\n");
} else {
  console.log(`${Object.keys(sorted).length} strings in src/i18n/catalog.json`);
  for (const l of LOCALES) {
    const have = translated(l);
    console.log(`  ${l}: ${Object.keys(sorted).filter((k) => !(k in have)).length} missing`);
  }
  if (conflicts.length) console.warn(`\nSame key, different English:\n  ${conflicts.join("\n  ")}`);
}
