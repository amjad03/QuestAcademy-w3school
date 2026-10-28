/** Challenge of the week: a row in `challenges` for the week, else a rotating course challenge. */
import { weekKey } from "@/lib/gamification";

const ROTATION: { slug: string; title: string }[] = [
  { slug: "math-high", title: "Maths challenge" },
  { slug: "physics-school", title: "Physics challenge" },
  { slug: "chemistry-school", title: "Chemistry challenge" },
  { slug: "biology-school", title: "Biology challenge" },
  { slug: "math-middle", title: "Middle-school maths challenge" },
  { slug: "social-science", title: "Social science challenge" },
  { slug: "english", title: "English challenge" },
];

export interface WeekChallenge {
  id: string;
  title: string;
  href: string;
  completion_key: string;
  description: string | null;
  ends: Date;
}

export function defaultChallenge(now = new Date()): WeekChallenge {
  const id = weekKey(now);
  const n = Math.floor(new Date(`${id}T00:00:00Z`).getTime() / (7 * 86_400_000));
  const c = ROTATION[((n % ROTATION.length) + ROTATION.length) % ROTATION.length];
  const ends = new Date(`${id}T00:00:00`);
  ends.setDate(ends.getDate() + 7);
  return { id, title: c.title, href: `/session/${c.slug}/challenge`, completion_key: `${c.slug}:challenge`, description: "One attempt counts for your school. Schools are ranked by their students' average score.", ends };
}

export const STREAK_MILESTONES: { days: number; title: string; freezes: number; color: string }[] = [
  { days: 3, title: "3-day spark", freezes: 0, color: "#FF8A00" },
  { days: 7, title: "One-week streak", freezes: 1, color: "#FF4B4B" },
  { days: 14, title: "Fortnight focus", freezes: 1, color: "#7C4DFF" },
  { days: 30, title: "30-day streak", freezes: 2, color: "#E11D48" },
  { days: 50, title: "Half century", freezes: 2, color: "#2F6BFF" },
  { days: 100, title: "100-day legend", freezes: 3, color: "#FFB800" },
];
