"use client";

import { Check } from "lucide-react";
import clsx from "clsx";
import type { Stage } from "@/content/types";
import type { Board } from "@/lib/modes";
import { BOARDS } from "@/lib/modes";
import { useT } from "@/i18n";
import { useSharedText } from "@/i18n/content";
import { SYLLABI, resolveBoardGrade } from "@/content/syllabus";
import { classFromSyllabus, defaultSubjects } from "@/content/my-class";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { useSubjectName } from "./data";

/** What the learner picked: their class, board (when the class has board syllabi) and subjects. */
export interface ClassChoice {
  /** "pre", "1"…"12", or "exam" for NEET / JEE. */
  level: string | null;
  board: Board | null;
  /** Board grade id ("10", "PUC-1", "NEET" …) or the plain grade for younger classes. */
  grade: string | null;
  subjects: string[] | null;
}

const LEVELS = ["pre", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "exam"];

/** Board grade id for a class number on a board (Karnataka PUC calls 11 / 12 "PUC-1" / "PUC-2"). */
function boardGrade(board: Board, level: string): string | null {
  const ids = SYLLABI[board].grades.map((g) => g.id);
  if (board === "pue") return level === "11" ? "PUC-1" : level === "12" ? "PUC-2" : null;
  if (board === "exam") return null;
  return ids.includes(level) ? level : null;
}

/** Boards that have a syllabus for this class. */
export function boardsFor(level: string | null): Board[] {
  if (!level) return [];
  if (level === "exam") return ["exam"];
  return BOARDS.map((b) => b.id).filter((b) => b !== "exam" && boardGrade(b, level));
}

/** Stage implied by a class. */
export function stageForLevel(level: string): Stage {
  if (level === "pre") return "preprimary";
  if (level === "exam") return "aspirant";
  const n = Number(level);
  return n <= 5 ? "primary" : n <= 8 ? "middle" : "secondary";
}

/** The class a profile is in, for preselecting the picker. */
export function choiceFromProfile(p: { stage?: Stage | null; board?: Board | null; grade?: string | null; subjects?: string[] | null; age?: number | null }): ClassChoice {
  if (p.board === "exam") return { level: "exam", board: "exam", grade: p.grade ?? "NEET", subjects: p.subjects ?? null };
  if (p.board && p.grade) {
    const level = p.grade === "PUC-1" ? "11" : p.grade === "PUC-2" ? "12" : p.grade;
    return { level, board: p.board, grade: p.grade, subjects: p.subjects ?? null };
  }
  if (p.stage === "secondary" || p.stage === "aspirant") {
    // No board picked yet: show the class the app is using for them.
    const r = resolveBoardGrade(p.board ?? null, p.grade ?? null, p.stage);
    return choiceFromProfile({ ...p, board: r.board, grade: r.grade, stage: null });
  }
  if (p.stage === "preprimary") return { level: "pre", board: null, grade: "pre", subjects: null };
  if (p.grade && /^\d+$/.test(p.grade)) return { level: p.grade, board: null, grade: p.grade, subjects: null };
  if (p.stage === "primary" || p.stage === "middle") {
    const level = levelForAge(p.age ?? (p.stage === "primary" ? 8 : 12));
    return { level, board: null, grade: level, subjects: null };
  }
  return { level: null, board: null, grade: null, subjects: null };
}

/** Guess the class from an age (used to preselect during onboarding). */
export function levelForAge(age: number | null): string | null {
  if (age === null) return null;
  if (age <= 5) return "pre";
  if (age > 18) return null;
  return String(Math.min(12, Math.max(1, age - 5)));
}

/** Class → board → subjects. Calls onChange with a complete choice whenever a step changes. */
export function ClassPicker({ value, onChange, compact }: { value: ClassChoice; onChange: (c: ClassChoice) => void; compact?: boolean }) {
  const t = useT();
  const tx = useSharedText();
  const subjectName = useSubjectName();
  const boards = boardsFor(value.level);
  const myClass = value.board && value.grade ? classFromSyllabus(value.board, value.grade) : null;
  const picked = value.subjects ?? (myClass ? defaultSubjects(myClass) : []);

  const pickLevel = (level: string) => {
    const bs = boardsFor(level);
    if (level === "exam") return onChange({ level, board: "exam", grade: value.grade === "JEE" ? "JEE" : "NEET", subjects: null });
    if (!bs.length) return onChange({ level, board: null, grade: level, subjects: null });
    const board = value.board && bs.includes(value.board) ? value.board : bs[0];
    onChange({ level, board, grade: boardGrade(board, level), subjects: null });
  };
  const pickBoard = (board: Board) => onChange({ ...value, board, grade: board === "exam" ? (value.grade ?? "NEET") : boardGrade(board, value.level!), subjects: null });
  const toggle = (id: string) => {
    const next = picked.includes(id) ? picked.filter((x) => x !== id) : [...picked, id];
    if (next.length) onChange({ ...value, subjects: next });
  };
  const levelLabel = (l: string) => (l === "pre" ? t("class.pre", "Pre-primary") : l === "exam" ? t("class.picker.exam", "NEET / JEE") : t("class.gradeN", "Class {n}", { n: l }));

  return (
    <div className="space-y-6">
      <fieldset>
        <legend className="mb-2 text-sm font-bold">{t("class.picker.class", "Your class")}</legend>
        <div className={clsx("grid gap-2", compact ? "grid-cols-3 sm:grid-cols-5" : "grid-cols-3 sm:grid-cols-5")}>
          {LEVELS.map((l) => (
            <button key={l} type="button" aria-pressed={value.level === l} onClick={() => pickLevel(l)} className={clsx("tile !rounded-xl px-3 py-2.5 text-sm font-bold", value.level === l && "!border-accent bg-accent-soft text-accent")} data-level={l}>
              {levelLabel(l)}
            </button>
          ))}
        </div>
      </fieldset>

      {boards.length > 0 && value.level !== "exam" && (
        <fieldset>
          <legend className="mb-2 text-sm font-bold">{t("class.picker.board", "Your board")}</legend>
          <div className="flex flex-wrap gap-2">
            {boards.map((b) => (
              <button key={b} type="button" aria-pressed={value.board === b} onClick={() => pickBoard(b)} className={clsx("tile !rounded-xl px-4 py-2.5 text-sm font-bold", value.board === b && "!border-accent bg-accent-soft text-accent")} data-board={b}>
                {tx(BOARDS.find((x) => x.id === b)!.name)}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {value.level === "exam" && (
        <fieldset>
          <legend className="mb-2 text-sm font-bold">{t("class.picker.examWhich", "Which exam?")}</legend>
          <div className="flex flex-wrap gap-2">
            {["NEET", "JEE"].map((g) => (
              <button key={g} type="button" aria-pressed={value.grade === g} onClick={() => onChange({ ...value, board: "exam", grade: g, subjects: null })} className={clsx("tile !rounded-xl px-4 py-2.5 text-sm font-bold", value.grade === g && "!border-accent bg-accent-soft text-accent")}>
                {g}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {myClass && myClass.subjects.length > 1 && (
        <fieldset>
          <legend className="mb-1 text-sm font-bold">{t("class.picker.subjects", "Your subjects")}</legend>
          <p className="mb-2 text-xs text-muted">{t("class.picker.subjectsHint", "Untick subjects you don’t take, such as a language you don’t study.")}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {myClass.subjects.map((s) => {
              const on = picked.includes(s.id);
              return (
                <button key={s.id} type="button" role="checkbox" aria-checked={on} onClick={() => toggle(s.id)} className={clsx("tile flex items-center gap-3 !rounded-xl px-3 py-2.5 text-left text-sm font-bold", on && "!border-accent")} data-subject={s.id}>
                  <CourseIcon slug={s.icon} size={28} />
                  <span className="min-w-0 flex-1">{subjectName(s)}</span>
                  <span className={clsx("grid h-5 w-5 place-items-center rounded-md border-2", on ? "border-accent bg-accent text-white" : "border-line")}>{on && <Check className="h-3.5 w-3.5" strokeWidth={3.5} aria-hidden />}</span>
                </button>
              );
            })}
          </div>
        </fieldset>
      )}
    </div>
  );
}

/** A complete choice for a class with its first board (used to preselect from an age). */
export function choiceForLevel(level: string | null): ClassChoice {
  if (!level) return { level: null, board: null, grade: null, subjects: null };
  if (level === "exam") return { level, board: "exam", grade: "NEET", subjects: null };
  const bs = boardsFor(level);
  if (!bs.length) return { level, board: null, grade: level, subjects: null };
  return { level, board: bs[0], grade: boardGrade(bs[0], level), subjects: null };
}
