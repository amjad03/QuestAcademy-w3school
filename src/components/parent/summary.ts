import { getSubject, getLessonById, flatLessons, type LessonRef } from "@/content";
import type { LearnerState } from "@/lib/store";

export const MINUTES_PER_LESSON = 15;

export interface WeekRange {
  start: Date;
  end: Date;
}

/** Monday 00:00 to next Monday 00:00 (local), matching the app's week key. */
export function currentWeek(now = new Date()): WeekRange {
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  return { start, end };
}

export function formatRange({ start, end }: WeekRange) {
  const last = new Date(end.getTime() - 1);
  const fmt = (d: Date) => d.toLocaleDateString(undefined, { day: "numeric", month: "short" });
  return `${fmt(start)} – ${fmt(last)} ${last.getFullYear()}`;
}

export interface SubjectProgress {
  slug: string;
  title: string;
  icon: string;
  colors: [string, string];
  done: number;
  total: number;
  thisWeek: number;
}

export interface WeekSummary {
  lessonsThisWeek: number;
  minutesThisWeek: number;
  /** 0–1, or null when no practice has been recorded. */
  accuracy: number | null;
  assessmentsCount: number;
  lessonsTotal: number;
  subjects: SubjectProgress[];
  recentLessons: LessonRef[];
}

const inRange = (iso: string, r: WeekRange) => {
  const t = new Date(iso).getTime();
  return t >= r.start.getTime() && t < r.end.getTime();
};

export function summarise(s: Pick<LearnerState, "lessons" | "assessments">, week: WeekRange): WeekSummary {
  const entries = Object.entries(s.lessons);
  const thisWeek = entries.filter(([, p]) => p?.completedAt && inRange(p.completedAt, week));

  const bySubject = new Map<string, { done: number; thisWeek: number }>();
  for (const [id, p] of entries) {
    const slug = id.split("/")[0];
    const cur = bySubject.get(slug) ?? { done: 0, thisWeek: 0 };
    cur.done += 1;
    if (p?.completedAt && inRange(p.completedAt, week)) cur.thisWeek += 1;
    bySubject.set(slug, cur);
  }
  const subjects: SubjectProgress[] = [];
  for (const [slug, v] of bySubject) {
    const subj = getSubject(slug);
    if (!subj) continue;
    subjects.push({ slug, title: subj.title, icon: subj.icon, colors: subj.colors, done: v.done, total: flatLessons(subj).length, thisWeek: v.thisWeek });
  }
  subjects.sort((a, b) => b.thisWeek - a.thisWeek || b.done - a.done);

  const scores = Object.values(s.assessments).filter((n) => typeof n === "number");
  const accuracy = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null;

  const recentLessons = entries
    .filter(([, p]) => p?.completedAt)
    .sort((a, b) => b[1].completedAt.localeCompare(a[1].completedAt))
    .map(([id]) => getLessonById(id))
    .filter((x): x is LessonRef => Boolean(x))
    .slice(0, 5);

  return {
    lessonsThisWeek: thisWeek.length,
    minutesThisWeek: thisWeek.length * MINUTES_PER_LESSON,
    accuracy,
    assessmentsCount: scores.length,
    lessonsTotal: entries.length,
    subjects,
    recentLessons,
  };
}

export interface RecentItem {
  id: string;
  at: string;
  label: string;
  kind: string;
  href: string | null;
}

/** Most recently completed learning item, described in parent-friendly words. */
export function latestItem(items: Record<string, string>): RecentItem | null {
  let best: [string, string] | null = null;
  for (const e of Object.entries(items)) if (!best || e[1] > best[1]) best = e;
  if (!best) return null;
  const [id, at] = best;
  const [path, suffix] = id.split(":");
  const kindMap: Record<string, string> = { article: "Reading", practice: "Practice", video: "Video", quiz: "Quiz", test: "Test", challenge: "Challenge" };
  const kind = kindMap[suffix ?? ""] ?? (id.startsWith("sticker") ? "Sticker" : id.includes("game") ? "Game" : "Activity");
  const ref = getLessonById(path);
  if (ref) return { id, at, kind, label: `${ref.lesson.title} (${ref.subject.title})`, href: ref.href };
  const subj = getSubject(path.split("/")[0]);
  if (subj) return { id, at, kind, label: `${path.split("/")[1]?.replace(/-/g, " ") ?? subj.title} (${subj.title})`, href: `/course/${subj.slug}` };
  return { id, at, kind, label: path.replace(/[-_]/g, " "), href: null };
}

export interface Suggestion {
  title: string;
  detail: string;
  href: string;
}

/** Three concrete next steps for the parent to encourage. */
export function suggestions(opts: { course: string | null; lessons: Record<string, unknown>; summary: WeekSummary; streak: number }): Suggestion[] {
  const out: Suggestion[] = [];
  const subj = opts.course ? getSubject(opts.course) : undefined;
  if (subj) {
    const next = flatLessons(subj).find((l) => !opts.lessons[l.id]);
    if (next) out.push({ title: `Next lesson: ${next.lesson.title}`, detail: `About ${next.lesson.minutes} minutes in ${subj.title}, topic "${next.topic.title}".`, href: next.href });
    else out.push({ title: `${subj.title} is complete`, detail: "Choose a new course together on the courses page.", href: "/courses" });
  } else {
    out.push({ title: "Choose a first course together", detail: "Explore works best with one course on the go at a time.", href: "/courses" });
  }
  const weakest = [...opts.summary.subjects].filter((s) => s.done < s.total).sort((a, b) => a.done / a.total - b.done / b.total)[0];
  if (weakest && weakest.slug !== opts.course) {
    out.push({ title: `Revisit ${weakest.title}`, detail: `${weakest.done} of ${weakest.total} lessons done. A short review keeps it fresh.`, href: `/course/${weakest.slug}` });
  }
  if (opts.summary.accuracy !== null && opts.summary.accuracy < 0.7) {
    out.push({ title: "Try a gentle practice session", detail: `Practice accuracy is ${Math.round(opts.summary.accuracy * 100)}%. Short, repeated practice helps more than long sessions.`, href: "/practice" });
  }
  if (out.length < 3) out.push({ title: opts.streak > 0 ? `Keep the ${opts.streak}-day streak going` : "Start a daily habit", detail: "One short lesson a day, ideally at the same time, builds the habit.", href: "/learn" });
  if (out.length < 3) out.push({ title: "Play a learning game", detail: "Games revisit letters, numbers and shapes in a playful way.", href: "/kids/play" });
  if (out.length < 3) out.push({ title: "Look at the sticker book together", detail: "Celebrate effort: stickers are earned for trying, not only for getting things right.", href: "/stickers" });
  return out.slice(0, 3);
}
