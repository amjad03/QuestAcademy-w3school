/**
 * Weekly parent report: built from the student's summary, last week's snapshot,
 * teacher kudos and assignments. Pure, so the cron route and the in-app preview
 * produce the same report.
 */
import type { Assignment, Kudos, KudosBadge, Submission, SummaryRow, WeeklyReportDoc } from "./types";

export const KUDOS_LABEL: Record<KudosBadge, string> = {
  star: "Star of the week",
  effort: "Great effort",
  improver: "Most improved",
  helper: "Helpful classmate",
  streak: "Streak keeper",
  creative: "Creative thinker",
  champion: "Challenge champion",
};

export const KUDOS_EMOJI: Record<KudosBadge, string> = {
  star: "🌟",
  effort: "💪",
  improver: "📈",
  helper: "🤝",
  streak: "🔥",
  creative: "💡",
  champion: "🏆",
};

export function weekLabel(week: string) {
  const start = new Date(`${week}T00:00:00`);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const f = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  return `${f(start)} – ${f(end)}`;
}

/** The Monday week key before `week`. */
export function previousWeek(week: string) {
  const d = new Date(`${week}T00:00:00`);
  d.setDate(d.getDate() - 7);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export interface ReportInput {
  summary: SummaryRow;
  week: string;
  school: string | null;
  className: string | null;
  prevMinutes: number | null;
  kudos: Kudos[];
  assignments: Assignment[];
  submissions: Submission[];
}

export function buildWeeklyReport(i: ReportInput): WeeklyReportDoc {
  const s = i.summary;
  const doc = s.summary ?? ({} as SummaryRow["summary"]);
  const sameWeek = s.week === i.week;
  const weekStart = new Date(`${i.week}T00:00:00`).getTime();
  const weekEnd = weekStart + 7 * 86_400_000;
  const inWeek = (iso: string) => {
    const t = new Date(iso).getTime();
    return t >= weekStart && t < weekEnd;
  };
  const lessons = (doc.recent ?? []).filter((r) => inWeek(r.at)).length;
  const mocks = (doc.mocks ?? []).filter((m) => inWeek(m.date)).map((m) => ({ title: m.title, pct: m.pct }));
  const weak = (doc.weak ?? []).slice(0, 3).map((w) => `${w.title} (${w.subject})`);
  const strengths = (doc.strong ?? []).slice(0, 3).map((w) => `${w.title} (${w.subject})`);
  const due = i.assignments.filter((a) => a.due_at && new Date(a.due_at).getTime() >= weekStart);
  const subBy = new Map(i.submissions.map((x) => [x.assignment_id, x]));
  const assignments = due.map((a) => {
    const sub = subBy.get(a.id);
    return { title: a.title, done: sub?.status === "done", score: sub?.score ?? null };
  });
  const focus: string[] = [];
  for (const w of (doc.weak ?? []).slice(0, 2)) focus.push(`Revise ${w.title} and take its chapter practice.`);
  const pending = assignments.filter((a) => !a.done).length;
  if (pending) focus.push(`Finish ${pending} pending ${pending === 1 ? "assignment" : "assignments"} from the teacher.`);
  const minutes = sameWeek ? s.minutes_week : 0;
  if (minutes < 90) focus.push("Aim for 20 minutes of learning on at least 5 days.");
  if (!focus.length) focus.push("Keep the routine going and try a mock test this week.");

  return {
    student: s.display_name,
    school: i.school,
    className: i.className,
    week: i.week,
    weekLabel: weekLabel(i.week),
    minutes,
    minutesPrev: i.prevMinutes,
    lessons,
    chaptersDone: s.chapters_done,
    chaptersTotal: s.chapters_total,
    streak: s.streak,
    xp: sameWeek ? s.weekly_xp : 0,
    mocks,
    strengths,
    weak,
    focus: focus.slice(0, 3),
    kudos: i.kudos.filter((k) => inWeek(k.created_at)).map((k) => ({ badge: k.badge, from: k.from_name, message: k.message })),
    assignments,
  };
}

/** Plain-text version (email body, in-app view, and the WhatsApp fallback text). */
export function reportText(r: WeeklyReportDoc): string {
  const lines = [
    `Quest Academy weekly report for ${r.student}${r.className ? `, ${r.className}` : ""}`,
    `${r.weekLabel}${r.school ? ` · ${r.school}` : ""}`,
    "",
    `Learning time: about ${r.minutes} minutes${r.minutesPrev !== null ? ` (last week ${r.minutesPrev})` : ""}`,
    `Chapters completed: ${r.chaptersDone} of ${r.chaptersTotal} · Streak: ${r.streak} days · XP this week: ${r.xp}`,
  ];
  if (r.mocks.length) lines.push(`Mock tests: ${r.mocks.map((m) => `${m.title} ${Math.round(m.pct * 100)}%`).join(", ")}`);
  if (r.strengths.length) lines.push(`Strengths: ${r.strengths.join(", ")}`);
  if (r.weak.length) lines.push(`Needs practice: ${r.weak.join(", ")}`);
  if (r.assignments.length) lines.push(`Assignments: ${r.assignments.filter((a) => a.done).length} of ${r.assignments.length} done`);
  if (r.kudos.length) lines.push(`Teacher kudos: ${r.kudos.map((k) => `${KUDOS_LABEL[k.badge]} from ${k.from}${k.message ? ` ("${k.message}")` : ""}`).join("; ")}`);
  lines.push("", "Next week's focus:", ...r.focus.map((f) => `• ${f}`));
  return lines.join("\n");
}

/**
 * Body parameters for the WhatsApp template (see docs/school-setup.md):
 * {{1}} student, {{2}} week, {{3}} minutes, {{4}} chapters, {{5}} strengths, {{6}} weak topics, {{7}} focus, {{8}} kudos.
 */
export function whatsappParams(r: WeeklyReportDoc): string[] {
  const clean = (s: string) => s.replace(/[\n\t]+/g, " ").replace(/ {4,}/g, "   ").slice(0, 300) || "—";
  return [
    r.student,
    r.weekLabel,
    String(r.minutes),
    `${r.chaptersDone}/${r.chaptersTotal}`,
    r.strengths.join(", ") || "Building up",
    r.weak.join(", ") || "None this week",
    r.focus.join(" "),
    r.kudos.length ? r.kudos.map((k) => `${KUDOS_LABEL[k.badge]} (${k.from})`).join(", ") : "—",
  ].map(clean);
}
