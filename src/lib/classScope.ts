/**
 * What a learner's class should see. Class 8–12 students get a focused
 * product (their subjects, practice, exams); kids' games, stickers, coding
 * (unless they take Computer Science), the shop and leagues move out of the
 * main navigation and stay reachable from "Explore other classes & courses".
 */
import type { Stage } from "@/content/types";
import type { Board } from "@/lib/modes";
import { boardClassOf, chosenSubjects, classFromSyllabus } from "@/content/my-class";
import { gradeOf } from "@/lib/useMyClass";

type ProfileLike = { stage?: Stage | null; board?: Board | null; grade?: string | null; age?: number | null; subjects?: string[] | null };

/** Class number 1–12 (PUC-1 = 11, PUC-2 / NEET / JEE = 12), or null for learners without a class. */
export function classNumber(p: ProfileLike): number | null {
  const bg = boardClassOf(p);
  const g = bg ? bg.grade : gradeOf(p);
  if (!g || g === "pre") return null;
  if (g === "PUC-1") return 11;
  if (/^\d+$/.test(g)) return Number(g);
  return 12; // PUC-2 and entrance-exam tracks
}

/** Class 8–12 learner: gets the focused senior product. */
export function isSeniorClass(p: ProfileLike): boolean {
  const n = classNumber(p);
  return n !== null && n >= 8;
}

const COMPUTING = new Set(["cs", "computers", "ip", "informatics"]);

/** Whether Computer Science / Computer Applications is one of the learner's subjects. */
export function takesComputing(p: ProfileLike): boolean {
  const bg = boardClassOf(p);
  if (!bg) return false;
  const c = classFromSyllabus(bg.board, bg.grade);
  return Boolean(c && chosenSubjects(c, p.subjects).some((s) => COMPUTING.has(s.id)));
}

/** Destinations taken out of a senior student's navigation (still reachable from the library). */
export function hiddenDestinations(p: ProfileLike): Set<string> {
  if (!isSeniorClass(p)) return new Set();
  const hide = new Set(["/kids/play", "/stickers", "/shop", "/leaderboard", "/quests", "/courses", "/pathways"]);
  if (!takesComputing(p)) hide.add("/code/playground");
  return hide;
}

const CODE_BADGES = new Set(["hello-world", "code-ninja"]);
const GAME_BADGES = new Set(["player-one"]);

/** Badges worth showing to this learner (no game badges for seniors, no coding badges without CS). */
export function badgeVisible(p: ProfileLike, id: string): boolean {
  if (!isSeniorClass(p)) return true;
  if (GAME_BADGES.has(id)) return false;
  if (CODE_BADGES.has(id)) return takesComputing(p);
  return true;
}
