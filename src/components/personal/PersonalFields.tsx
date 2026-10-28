"use client";

import clsx from "clsx";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { useT } from "@/i18n";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";
import { useSubjectName, useChapterTitle } from "@/components/class/data";
import type { ClassChapter, ClassSubject } from "@/content/my-class";
import type { GoalId, PersonalProfile, StudyStyle, TimeOfDay } from "@/lib/personalise";

/** One editable group of onboarding answers. Shared by the onboarding flow and Settings. */
export type FieldsProps = { value: PersonalProfile; onChange: (patch: Partial<PersonalProfile>) => void; young?: boolean };

export function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" aria-pressed={active} onClick={onClick} className={clsx("inline-flex items-center gap-1.5 rounded-xl border-2 px-3 py-2 text-sm font-bold transition", active ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface hover:bg-surface-2")}>
      {active && <Check className="h-4 w-4" strokeWidth={3} aria-hidden />}
      {children}
    </button>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  );
}

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-bold">{label}</legend>
      <div className="flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

export function AboutFields({ value, onChange, young, name, onName }: FieldsProps & { name: string; onName: (n: string) => void }) {
  const t = useT();
  return (
    <div className="grid gap-4">
      <Field label={young ? t("personal.about.childName", "Your child’s name") : t("personal.about.name", "Your name")}>
        <input value={name} onChange={(e) => onName(e.target.value)} maxLength={30} className="input" autoFocus />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={young ? t("personal.about.childSchool", "Their school") : t("personal.about.school", "School")} hint={t("personal.optional", "Optional")}>
          <input value={value.school ?? ""} onChange={(e) => onChange({ school: e.target.value })} maxLength={80} className="input" />
        </Field>
        <Field label={t("personal.about.city", "City or town")} hint={t("personal.optional", "Optional")}>
          <input value={value.city ?? ""} onChange={(e) => onChange({ city: e.target.value })} maxLength={60} className="input" />
        </Field>
      </div>
    </div>
  );
}

export function ExamFields({ value, onChange, level }: FieldsProps & { level: string | null }) {
  const t = useT();
  const options: [string, string][] = [
    ["", t("personal.exam.none", "No exam yet")],
    ...(level !== "exam" ? ([["BOARD", t("personal.exam.board", "Board exam")]] as [string, string][]) : []),
    ...(level === "exam" || level === "11" || level === "12"
      ? ([
          ["JEE", "JEE Main"],
          ["JEE_ADV", "JEE Advanced"],
          ["NEET", "NEET"],
          ["KCET", "KCET"],
          ["COMEDK", "COMEDK"],
        ] as [string, string][])
      : []),
  ];
  return (
    <div className="grid gap-4">
      <Group label={t("personal.exam.target", "Which exam are you preparing for?")}>
        {options.map(([id, label]) => (
          <Chip key={id || "none"} active={(value.targetExam ?? "") === id} onClick={() => onChange({ targetExam: id || null, ...(id ? {} : { examDate: null }) })}>
            {label}
          </Chip>
        ))}
      </Group>
      {value.targetExam && (
        <Field label={t("personal.exam.date", "Exam date")} hint={t("personal.exam.dateHint", "An approximate date is fine. Your week plan builds up to it.")}>
          <input type="date" value={value.examDate ?? ""} onChange={(e) => onChange({ examDate: e.target.value || null })} className="input sm:w-64" />
        </Field>
      )}
    </div>
  );
}

export function GoalFields({ value, onChange, young }: FieldsProps) {
  const t = useT();
  const goals: [GoalId, string, string][] = [
    ["pass", t("personal.goal.pass", "Pass comfortably"), t("personal.goal.passHint", "Feel sure of the basics")],
    ["80", t("personal.goal.80", "80% or more"), t("personal.goal.80Hint", "Strong in every subject")],
    ["95", t("personal.goal.95", "95% or more"), t("personal.goal.95Hint", "Near-perfect scores")],
    ["top", t("personal.goal.top", "Top rank"), t("personal.goal.topHint", "Aim for the top of the class or exam")],
  ];
  return (
    <div className="card divide-y-2 divide-line overflow-hidden">
      {goals.map(([id, label, hint]) => (
        <button key={id} type="button" aria-pressed={value.goal === id} onClick={() => onChange({ goal: id })} className={clsx("flex w-full items-center justify-between gap-3 px-5 py-4 text-left transition", value.goal === id ? "bg-accent-soft" : "hover:bg-surface-2")}>
          <span className={clsx("text-lg font-extrabold", value.goal === id && "text-accent")}>{label}</span>
          {!young && <span className="text-sm font-bold text-muted">{hint}</span>}
        </button>
      ))}
    </div>
  );
}

export function LevelsFields({ value, onChange, subjects }: FieldsProps & { subjects: ClassSubject[] }) {
  const t = useT();
  const subjectName = useSubjectName();
  const rating = [t("personal.level.1", "Struggling"), t("personal.level.2", "Below average"), t("personal.level.3", "Okay"), t("personal.level.4", "Good"), t("personal.level.5", "Excellent")];
  return (
    <ul className="grid gap-3">
      {subjects.map((s) => (
        <li key={s.id} className="card p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <span className="font-extrabold">{subjectName(s)}</span>
            <label className="flex items-center gap-2 text-xs font-bold text-muted">
              {t("personal.level.marks", "Recent marks %")}
              <input
                type="number"
                min={0}
                max={100}
                inputMode="numeric"
                value={value.marks?.[s.id] ?? ""}
                onChange={(e) => {
                  const marks = { ...(value.marks ?? {}) };
                  if (e.target.value === "") delete marks[s.id];
                  else marks[s.id] = Math.max(0, Math.min(100, Number(e.target.value)));
                  onChange({ marks });
                }}
                className="input !w-20 !py-1.5"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {rating.map((label, i) => (
              <Chip key={i} active={value.selfLevel?.[s.id] === i + 1} onClick={() => onChange({ selfLevel: { ...(value.selfLevel ?? {}), [s.id]: i + 1 } })}>
                {label}
              </Chip>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export const MINUTE_OPTIONS = [10, 15, 20, 30, 45, 60, 90];

export function HabitsFields({ value, onChange, young, language = true }: FieldsProps & { language?: boolean }) {
  const t = useT();
  const times: [TimeOfDay, string][] = [
    ["morning", t("personal.time.morning", "Morning")],
    ["afternoon", t("personal.time.afternoon", "Afternoon")],
    ["evening", t("personal.time.evening", "Evening")],
    ["night", t("personal.time.night", "Night")],
  ];
  const styles: [StudyStyle, string][] = [
    ["video", t("personal.style.video", "Watching videos")],
    ["reading", t("personal.style.reading", "Reading notes")],
    ["practice", t("personal.style.practice", "Solving questions")],
  ];
  const mins = young ? MINUTE_OPTIONS.slice(0, 4) : MINUTE_OPTIONS;
  return (
    <div className="grid gap-5">
      <Group label={young ? t("personal.habits.minutesChild", "How long can your child study each day?") : t("personal.habits.minutes", "How long can you study each day?")}>
        {mins.map((m) => (
          <Chip key={m} active={value.dailyMinutes === m} onClick={() => onChange({ dailyMinutes: m })}>
            {t("personal.habits.min", "{n} min", { n: m })}
          </Chip>
        ))}
      </Group>
      <Group label={t("personal.habits.time", "Best time of day")}>
        {times.map(([id, label]) => (
          <Chip key={id} active={value.timeOfDay === id} onClick={() => onChange({ timeOfDay: id })}>
            {label}
          </Chip>
        ))}
      </Group>
      {!young && (
        <Group label={t("personal.habits.style", "I learn best by…")}>
          {styles.map(([id, label]) => (
            <Chip key={id} active={value.studyStyle === id} onClick={() => onChange({ studyStyle: id })}>
              {label}
            </Chip>
          ))}
        </Group>
      )}
      <Field label={t("personal.habits.reminder", "Daily reminder time")} hint={t("personal.habits.reminderHint", "We’ll nudge you in the app if today’s plan isn’t done by then. Leave empty for no reminder.")}>
        <input type="time" value={value.reminderTime ?? ""} onChange={(e) => onChange({ reminderTime: e.target.value })} className="input sm:w-48" />
      </Field>
      {language && (
        <div>
          <span className="mb-2 block text-sm font-bold">{t("personal.habits.language", "Language")}</span>
          <LanguagePicker compact />
        </div>
      )}
    </div>
  );
}

function ChapterChip({ chapter, active, onClick }: { chapter: ClassChapter; active: boolean; onClick: () => void }) {
  const title = useChapterTitle(chapter);
  return (
    <Chip active={active} onClick={onClick}>
      <span className="max-w-[16rem] truncate">{title}</span>
    </Chip>
  );
}

export function WeakFields({ value, onChange, subjects }: FieldsProps & { subjects: ClassSubject[] }) {
  const t = useT();
  const subjectName = useSubjectName();
  const weak = value.weakSubjects ?? [];
  const toggle = (id: string) => onChange({ weakSubjects: weak.includes(id) ? weak.filter((x) => x !== id) : [...weak, id] });
  return (
    <div className="grid gap-5">
      <Group label={t("personal.weak.subjects", "Which subjects feel hardest?")}>
        {subjects.map((s) => (
          <Chip key={s.id} active={weak.includes(s.id)} onClick={() => toggle(s.id)}>
            {subjectName(s)}
          </Chip>
        ))}
      </Group>
      {subjects
        .filter((s) => weak.includes(s.id) && s.chapters.length)
        .map((s) => {
          const picked = value.weakChapters?.[s.id] ?? [];
          return (
            <Group key={s.id} label={t("personal.weak.chapters", "Hard chapters in {subject} (optional)", { subject: subjectName(s) })}>
              {s.chapters.map((ch) => (
                <ChapterChip
                  key={ch.slug}
                  chapter={ch}
                  active={picked.includes(ch.slug)}
                  onClick={() => onChange({ weakChapters: { ...(value.weakChapters ?? {}), [s.id]: picked.includes(ch.slug) ? picked.filter((x) => x !== ch.slug) : [...picked, ch.slug] } })}
                />
              ))}
            </Group>
          );
        })}
    </div>
  );
}

export function ParentFields({ value, onChange, young }: FieldsProps) {
  const t = useT();
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label={young ? t("personal.parent.email", "Your email") : t("personal.parent.emailStudent", "Parent’s email")} hint={t("personal.optional", "Optional")}>
        <input type="email" value={value.parentEmail ?? ""} onChange={(e) => onChange({ parentEmail: e.target.value })} maxLength={120} className="input" autoComplete="email" />
      </Field>
      <Field label={young ? t("personal.parent.phone", "Your phone (WhatsApp)") : t("personal.parent.phoneStudent", "Parent’s phone (WhatsApp)")} hint={t("personal.parent.hint", "Optional. Used only for progress updates once they’re available.")}>
        <input type="tel" value={value.parentPhone ?? ""} onChange={(e) => onChange({ parentPhone: e.target.value.replace(/[^\d+ -]/g, "") })} maxLength={20} className="input" autoComplete="tel" />
      </Field>
    </div>
  );
}
