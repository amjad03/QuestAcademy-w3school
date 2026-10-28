/** Shapes of the school-layer tables (see supabase/migrations/2026102800000*.sql). */

export type SchoolRole = "student" | "teacher" | "principal" | "parent";

export interface SchoolRow {
  id: string;
  name: string;
  city: string | null;
  board: string | null;
}

export interface ClassRow {
  id: string;
  school_id: string;
  name: string;
  section: string;
  grade: string | null;
  board: string | null;
  /** Only staff can read the codes. */
  student_code?: string;
  teacher_code?: string;
}

export interface Membership {
  id: string;
  user_id: string;
  school_id: string;
  class_id: string | null;
  role: SchoolRole;
  student_id: string | null;
  display_name: string;
  nickname: string | null;
  leaderboard_hidden: boolean;
  roll_no?: string | null;
  last_seen_at?: string | null;
  schools?: SchoolRow | null;
  classes?: ClassRow | null;
}

/** Per-chapter progress: t title, s subject, d lessons done, n lessons, m mastery 0–4, x best test 0–1. */
export interface ChapterStat {
  t: string;
  s: string;
  d: number;
  n: number;
  m: number;
  x?: number;
}

export interface TopicFlag {
  id: string;
  title: string;
  subject: string;
  /** 0–1: how well this topic is going (mastery and test scores). */
  level: number;
}

export interface SummaryDoc {
  /** chapter id → stats, in class order. */
  chapters: Record<string, ChapterStat>;
  /** Mastery per subject, 0–1. */
  subjects: Record<string, { name: string; mastery: number; done: number; total: number }>;
  weak: TopicFlag[];
  strong: TopicFlag[];
  mocks: { title: string; date: string; pct: number; testId: string }[];
  /** Questions the student asked Questy (AI tutor) or saved as doubts. */
  doubts: { at: string; text: string; source: "tutor" | "notebook" }[];
  /** Recent learning items: id and when. */
  recent: { id: string; at: string }[];
  /** Day key → estimated minutes, last 14 days. */
  days: Record<string, number>;
  className?: string;
}

export interface SummaryRow {
  user_id: string;
  school_id: string | null;
  class_id: string | null;
  display_name: string;
  week: string | null;
  weekly_xp: number;
  xp: number;
  streak: number;
  best_streak: number;
  minutes_week: number;
  minutes_total: number;
  chapters_done: number;
  chapters_total: number;
  mock_avg: number | null;
  accuracy: number | null;
  last_active: string | null;
  summary: SummaryDoc;
  updated_at?: string;
}

export type AssignmentKind = "practice" | "test" | "mock";

export interface Assignment {
  id: string;
  school_id: string;
  class_id: string;
  created_by: string | null;
  kind: AssignmentKind;
  ref: string;
  title: string;
  href: string;
  completion_key: string;
  note: string | null;
  due_at: string | null;
  created_at: string;
}

export interface Submission {
  assignment_id: string;
  user_id: string;
  class_id: string;
  status: "started" | "done";
  score: number | null;
  detail: Record<string, unknown>;
  started_at: string | null;
  completed_at: string | null;
}

export const KUDOS_BADGES = ["star", "effort", "improver", "helper", "streak", "creative", "champion"] as const;
export type KudosBadge = (typeof KUDOS_BADGES)[number];

export interface Kudos {
  id: string;
  school_id: string;
  class_id: string | null;
  from_id: string | null;
  from_name: string;
  to_id: string;
  badge: KudosBadge;
  message: string | null;
  created_at: string;
}

export interface WeeklyReportDoc {
  student: string;
  school: string | null;
  className: string | null;
  week: string;
  weekLabel: string;
  minutes: number;
  minutesPrev: number | null;
  lessons: number;
  chaptersDone: number;
  chaptersTotal: number;
  streak: number;
  xp: number;
  mocks: { title: string; pct: number }[];
  strengths: string[];
  weak: string[];
  focus: string[];
  kudos: { badge: KudosBadge; from: string; message: string | null }[];
  assignments: { title: string; done: boolean; score: number | null }[];
}

export interface WeeklyReportRow {
  id: string;
  student_id: string;
  school_id: string | null;
  week: string;
  report: WeeklyReportDoc;
  text: string;
  channel: "whatsapp" | "email" | "none" | null;
  status: "sent" | "not_sent" | "failed";
  detail: string | null;
  sent_at: string | null;
  created_at: string;
}

export interface LeaderEntry {
  user_id: string;
  nickname: string;
  weekly_xp: number;
  streak?: number;
  class_name?: string;
  is_me: boolean;
}

export interface ClassLeaderEntry {
  class_id: string;
  class_name: string;
  students: number;
  avg_xp: number;
  total_xp: number;
}

export interface SchoolRankEntry {
  school_id: string;
  school_name: string;
  entries: number;
  avg_score: number;
  is_mine: boolean;
}

export interface ClassOverview {
  class_id: string;
  school_id: string;
  name: string;
  section: string;
  grade: string | null;
  board: string | null;
  students: number;
  active_7d: number;
  minutes_week: number;
  completion: number | null;
  mock_avg: number | null;
  accuracy: number | null;
}
