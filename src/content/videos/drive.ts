/**
 * Teaching videos hosted in the Quest Academy Google Drive folder, mapped to lessons.
 *
 * `drive-files.json` is the raw folder listing (refresh it with `npm run sync-drive-videos`).
 * Each folder in the listing is a subject; episodes are numbered by their file-name prefix
 * ("Ep05-…", "ep05-…"). The map below says which episodes belong to which chapter and which
 * of them are the best fit for each lesson. Every lesson of a mapped chapter gets the whole
 * chapter playlist, starting with the episodes listed for that lesson.
 */
import listing from "./drive-files.json";

export interface DriveFile {
  path: string;
  name: string;
  id: string;
  mimeType: string;
}

export interface DriveEpisode {
  id: string;
  title: string;
}

const files = (listing as { files: DriveFile[] }).files;

/** "ep05-dalton-s-atomic-theory.mp4" → "Ep 5 · Dalton's atomic theory" */
function episodeTitle(name: string): string {
  const m = /^ep0*(\d+)[-_ ]?(.*?)(\.[a-z0-9]+)?$/i.exec(name);
  if (!m) return name.replace(/\.[a-z0-9]+$/i, "").split(" | ")[0].trim();
  const words = m[2].replace(/-s-/g, "'s ").replace(/[-_]+/g, " ").trim();
  const rest = words && words.toLowerCase() !== "video" ? words[0].toUpperCase() + words.slice(1) : "";
  return rest ? `Ep ${m[1]} · ${rest}` : `Episode ${m[1]}`;
}

function episodeNo(name: string): number | undefined {
  const m = /^ep0*(\d+)/i.exec(name);
  return m ? Number(m[1]) : undefined;
}

/** Folder → episode number (from "EpNN-" prefixes) and lower-cased file name → episode. */
const byFolder = new Map<string, Map<number | string, DriveEpisode>>();
for (const f of files) {
  if (!f.mimeType.startsWith("video/")) continue;
  const folder = byFolder.get(f.path) ?? new Map<number | string, DriveEpisode>();
  const ep = { id: f.id, title: episodeTitle(f.name) };
  const n = episodeNo(f.name);
  if (n !== undefined) folder.set(n, ep);
  folder.set(f.name.toLowerCase(), ep);
  byFolder.set(f.path, folder);
}

/** An episode is referenced by its number, or by the start of its file name (case-insensitive). */
type EpRef = number | string;
function resolve(folder: Map<number | string, DriveEpisode>, ref: EpRef): DriveEpisode | undefined {
  if (typeof ref === "number") return folder.get(ref);
  const prefix = ref.toLowerCase();
  for (const [k, ep] of folder) if (typeof k === "string" && k.startsWith(prefix)) return ep;
  return undefined;
}

const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

interface ChapterMap {
  folder: string;
  /** Every episode of the chapter, in playing order. */
  episodes: EpRef[];
  /** lessonId → episodes that fit that lesson best (played first). Missing lessons get the chapter in order. */
  lessons: Record<string, EpRef[]>;
}

const CHAPTERS: ChapterMap[] = [
  // Physics · Units and Measurements (Ep 1–13)
  {
    folder: "Physics",
    episodes: range(1, 13),
    lessons: {
      "physics-senior/c11-units-measurements/c11-si-units": range(1, 5),
      "physics-senior/c11-units-measurements/c11-errors-significant-figures": range(11, 13),
      "physics-senior/c11-units-measurements/c11-dimensional-analysis": range(6, 10),
      "physics-senior/c11-units-measurements/c11-units-exam-edge": [],
      "physics-senior/units-and-measurements/si-units-and-dimensions": range(1, 10),
      "physics-senior/units-and-measurements/errors-and-significant-figures": range(11, 13),
      "physics-senior/units-and-measurements/measuring-instruments-and-experiments": [13],
    },
  },
  // Physics (ICSE Class 9) · Measurements: SI units only
  {
    folder: "Physics",
    episodes: range(1, 5),
    lessons: { "physics-school/icse9-measurements/icse9-si-units-vernier": [] },
  },
  // Chemistry · Some Basic Concepts of Chemistry (Ep 1–13)
  {
    folder: "Chemistry",
    episodes: range(1, 13),
    lessons: {
      "chemistry-senior/c11-basic-concepts/c11-bc-matter-measurement": range(1, 5),
      "chemistry-senior/c11-basic-concepts/c11-bc-laws-mole": range(6, 9),
      "chemistry-senior/c11-basic-concepts/c11-bc-stoichiometry-solutions": range(10, 13),
      "chemistry-senior/c11-basic-concepts/c11-bc-exam-edge": [],
    },
  },
  // Chemistry · exam prep and Class 9 lessons on the mole / laws of combination
  {
    folder: "Chemistry",
    episodes: range(8, 13),
    lessons: {
      "exam-chemistry/mole-concept/mole-concept-concept-crash": [],
      "exam-chemistry/mole-concept/mole-concept-problem-patterns": [],
    },
  },
  {
    folder: "Chemistry",
    episodes: range(6, 8),
    lessons: { "chemistry-school/c9-atoms-and-molecules/c9-laws-and-atomic-mass": [] },
  },
  // Biology · The Living World (Ep 1–9)
  {
    folder: "Biology",
    episodes: range(1, 9),
    lessons: {
      "biology-senior/c11-the-living-world/c11-diversity-nomenclature": [4, 5, 8],
      "biology-senior/c11-the-living-world/c11-taxonomic-categories": [6, 7],
      "biology-senior/c11-the-living-world/c11-living-characteristics-taxonomic-aids": [2, 3, 9],
      "biology-senior/c11-the-living-world/c11-living-world-exam-edge": [],
      "biology-senior/living-world/what-is-living": [1, 2, 3],
      "biology-senior/living-world/nomenclature-and-taxonomy": [4, 5, 8],
      "biology-senior/living-world/taxonomic-hierarchy": [6, 7, 9],
    },
  },
  // Biology · Biological Classification (Ep 10–13)
  {
    folder: "Biology",
    episodes: range(10, 13),
    lessons: {
      "biology-senior/c11-biological-classification/c11-five-kingdoms-monera": [],
      "biology-senior/c11-biological-classification/c11-kingdom-protista": [11, 12],
      "biology-senior/c11-biological-classification/c11-kingdom-fungi": [11, 12],
      "biology-senior/c11-biological-classification/c11-viruses-viroids-lichens": [11, 12],
      "biology-senior/c11-biological-classification/c11-biological-classification-exam-edge": [],
      "biology-senior/biological-classification/five-kingdoms-and-monera": [],
      "biology-senior/biological-classification/protista-and-fungi": [11, 12],
      "biology-senior/biological-classification/viruses-viroids-lichens": [11, 12],
    },
  },
  // Biology (Class 9) · Classification & the Five Kingdoms
  {
    folder: "Biology",
    episodes: [11, 12],
    lessons: { "biology-school/diversity-in-living-organisms/classification-and-five-kingdoms": [] },
  },
  // Mathematics · Sets (Ep 1–12)
  {
    folder: "Mathematics",
    episodes: range(1, 12),
    lessons: {
      "maths-senior/c11-sets/c11-sets-representation": range(2, 7),
      "maths-senior/c11-sets/c11-set-operations": range(8, 11),
      "maths-senior/c11-sets/c11-sets-exam-edge": [],
      "maths-senior/sets/sets-basics": range(2, 7),
      "maths-senior/sets/sets-operations": range(8, 11),
      "maths-senior/sets/sets-counting": [12, 8, 10],
    },
  },
  // Electronics · Introduction to Electronics
  {
    folder: "Electronics",
    episodes: [
      "What Is Electronics",
      "Vacuum Tubes vs Silicon",
      "A Computer on One Chip",
      "Real Uses of Electronics",
      "Electronics in Your Home",
      "Volts vs Amps",
      "DC vs AC",
      "Why Batteries Sag",
    ],
    lessons: {
      "electronics/c11-ele-introduction/c11-ele-what-is-electronics": [],
      "electronics/c11-ele-introduction/c11-ele-quantities-sources": ["Volts vs Amps", "DC vs AC", "Why Batteries Sag"],
      "electronics/c11-ele-introduction/c11-ele-introduction-practice": [],
    },
  },
  // Electronics · Passive Components (only the transformer has a video)
  {
    folder: "Electronics",
    episodes: ["How a Transformer Works"],
    lessons: {
      "electronics/c11-ele-passive-components/c11-ele-resistors-colour-code": [],
      "electronics/c11-ele-passive-components/c11-ele-capacitors": [],
      "electronics/c11-ele-passive-components/c11-ele-inductors-transformers": [],
      "electronics/c11-ele-passive-components/c11-ele-passive-practice": [],
    },
  },
  // Electronics · DC Circuits and Network Theorems
  {
    folder: "Electronics",
    episodes: ["Ohm's Law", "Series vs Parallel", "Kirchhoff's Laws", "Thevenin's Theorem"],
    lessons: {
      "electronics/c11-ele-dc-circuits-theorems/c11-ele-ohm-kirchhoff": [],
      "electronics/c11-ele-dc-circuits-theorems/c11-ele-thevenin-norton": ["Thevenin's Theorem"],
      "electronics/c11-ele-dc-circuits-theorems/c11-ele-superposition-mpt": ["Thevenin's Theorem"],
      "electronics/c11-ele-dc-circuits-theorems/c11-ele-dc-theorems-practice": [],
    },
  },
  // Electronics · AC Fundamentals
  {
    folder: "Electronics",
    episodes: ["DC vs AC", "AC Waveform", "RMS and Average Values", "Reactance of L and C", "Impedance and Resonance"],
    lessons: {
      "electronics/c11-ele-ac-fundamentals/c11-ele-ac-waveform-rms": ["AC Waveform", "RMS and Average Values"],
      "electronics/c11-ele-ac-fundamentals/c11-ele-reactance-impedance": ["Reactance of L and C", "Impedance and Resonance"],
      "electronics/c11-ele-ac-fundamentals/c11-ele-resonance": ["Impedance and Resonance"],
      "electronics/c11-ele-ac-fundamentals/c11-ele-ac-practice": [],
    },
  },
];

const lessonPlaylists = new Map<string, DriveEpisode[]>();
for (const ch of CHAPTERS) {
  const folder = byFolder.get(ch.folder);
  if (!folder) continue;
  for (const [lessonId, first] of Object.entries(ch.lessons)) {
    const order = [...first, ...ch.episodes.filter((n) => !first.includes(n))];
    const list = order.map((n) => resolve(folder, n)).filter((e): e is DriveEpisode => Boolean(e));
    if (list.length) lessonPlaylists.set(lessonId, list);
  }
}

/** The Drive episodes for a lesson, best fit first; undefined when none are mapped. */
export function driveLessonVideos(lessonId: string): DriveEpisode[] | undefined {
  return lessonPlaylists.get(lessonId);
}

export const driveVideoCount = files.filter((f) => f.mimeType.startsWith("video/")).length;
export const driveMappedLessons = lessonPlaylists.size;
