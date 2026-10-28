/**
 * Lists every file in the public Quest Academy Google Drive folder (recursing into subfolders)
 * and writes src/content/videos/drive-files.json. Lesson mapping lives in src/content/videos/drive.ts.
 *
 *   npm run sync-drive-videos
 *   DRIVE_FOLDER=<folder id> npm run sync-drive-videos
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.env.DRIVE_FOLDER ?? "1EnP3DKFFtdE4Nz7XW6SxDw9kwXjgCy_C";
const OUT = path.join(process.cwd(), "src/content/videos/drive-files.json");
const FOLDER_MIME = "application/vnd.google-apps.folder";

// Folder pages embed items as \x5b\x22<id>\x22,\x5b\x22<parent>\x22\x5d,\x22<name>\x22,\x22<mime>\x22
const ITEM = /\\x5b\\x22([\w-]{20,60})\\x22,\\x5b\\x22([\w-]{20,60})\\x22\\x5d,\\x22(.*?)\\x22,\\x22(.*?)\\x22/g;
const unescape = (s: string) => JSON.parse(`"${s.replace(/\\x([0-9a-f]{2})/gi, "\\u00$1").replace(/\\\//g, "/")}"`) as string;

type File = { path: string; name: string; id: string; mimeType: string };

async function crawl(id: string, trail: string[], out: File[], seen: Set<string>) {
  const res = await fetch(`https://drive.google.com/drive/folders/${id}`);
  if (!res.ok) throw new Error(`Drive folder ${id}: ${res.status}`);
  const html = await res.text();
  for (const m of html.matchAll(ITEM)) {
    const [, itemId, parent, rawName, rawMime] = m;
    if (parent !== id || seen.has(itemId)) continue;
    seen.add(itemId);
    const name = unescape(rawName);
    const mimeType = unescape(rawMime);
    if (mimeType === FOLDER_MIME) await crawl(itemId, [...trail, name], out, seen);
    else out.push({ path: trail.join("/"), name, id: itemId, mimeType });
  }
}

async function main() {
  const files: File[] = [];
  await crawl(ROOT, [], files, new Set());
  files.sort((a, b) => a.path.localeCompare(b.path) || a.name.localeCompare(b.name));
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), rootFolder: ROOT, files }, null, 1) + "\n");
  console.log(`Wrote ${files.length} files to ${path.relative(process.cwd(), OUT)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
