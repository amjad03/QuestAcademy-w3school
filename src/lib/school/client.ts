"use client";

/**
 * Client access to the school layer. Every call goes through Supabase with the
 * signed-in user's session, so row-level security decides what comes back.
 * Without Supabase (or in preview mode) the same calls answer from demo data.
 */
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { supabase, supabaseEnabled } from "@/lib/supabase";
import { weekKey } from "@/lib/gamification";
import { DEMO_USER, demoSchool } from "./demo";
import type { Assignment, ClassLeaderEntry, ClassOverview, ClassRow, Kudos, KudosBadge, LeaderEntry, Membership, SchoolRankEntry, SchoolRow, Submission, SummaryRow, WeeklyReportRow } from "./types";

interface SchoolStore {
  /** Preview with sample data (only offered when Supabase isn't configured). */
  demo: boolean;
  memberships: Membership[];
  loadedFor: string | null;
  setDemo: (on: boolean) => void;
  setMemberships: (userId: string | null, m: Membership[]) => void;
}

export const useSchool = create<SchoolStore>()(
  persist(
    (set) => ({
      demo: false,
      memberships: [],
      loadedFor: null,
      setDemo: (demo) => set(demo ? { demo, memberships: demoSchool().memberships.filter((m) => m.user_id === DEMO_USER), loadedFor: DEMO_USER } : { demo, memberships: [], loadedFor: null }),
      setMemberships: (loadedFor, memberships) => set({ memberships, loadedFor }),
    }),
    { name: "qa-school", storage: createJSONStorage(() => localStorage), partialize: (s) => ({ demo: s.demo, memberships: s.memberships, loadedFor: s.loadedFor }) },
  ),
);

export const isDemo = () => useSchool.getState().demo;

/** Roles for navigation and page guards. */
export function rolesOf(ms: Membership[]) {
  return {
    student: ms.find((m) => m.role === "student") ?? null,
    teacherOf: ms.filter((m) => m.role === "teacher" && m.class_id),
    principalOf: ms.filter((m) => m.role === "principal"),
    parentOf: ms.filter((m) => m.role === "parent"),
    staff: ms.some((m) => m.role === "teacher" || m.role === "principal"),
  };
}

export function useRoles() {
  const ms = useSchool((s) => s.memberships);
  return rolesOf(ms);
}

const MEMBERSHIP_SELECT = "id, user_id, school_id, class_id, role, student_id, display_name, nickname, leaderboard_hidden, roll_no, last_seen_at, schools(id, name, city, board), classes(id, school_id, name, section, grade, board)";

/** Load the signed-in user's memberships (and link any parent invitations by email). */
export async function refreshMemberships(userId: string): Promise<Membership[]> {
  if (isDemo()) return useSchool.getState().memberships;
  const sb = supabase();
  if (!sb) return [];
  await sb.rpc("claim_parent_links").then(() => undefined, () => undefined);
  const { data, error } = await sb.from("memberships").select(MEMBERSHIP_SELECT).eq("user_id", userId);
  if (error) {
    // Migrations not run yet: behave as "no school".
    console.warn("[school] memberships", error.message);
    return [];
  }
  const ms = (data ?? []) as unknown as Membership[];
  useSchool.getState().setMemberships(userId, ms);
  void sb.rpc("touch_membership").then(() => undefined, () => undefined);
  return ms;
}

function need() {
  const sb = supabase();
  if (!sb) throw new Error("Accounts are not set up on this site.");
  return sb;
}

const fail = (e: { message: string } | null) => {
  if (e) throw new Error(friendly(e.message));
};

export function friendly(msg: string) {
  if (/invalid_code/.test(msg)) return "That code doesn't match any class. Check it with your teacher.";
  if (/invalid_invite/.test(msg)) return "This invitation has expired or was already used.";
  if (/not_signed_in/.test(msg)) return "Sign in first.";
  if (/duplicate key/.test(msg)) return "That already exists.";
  if (/row-level security/.test(msg)) return "You don't have permission to do that.";
  return msg;
}

/* ------------------------------ joining ------------------------------ */

export async function joinWithCode(code: string, displayName: string, nickname?: string) {
  if (isDemo()) return { role: code.toUpperCase().startsWith("T") ? "teacher" : "student" };
  const { data, error } = await need().rpc("join_with_code", { p_code: code.trim(), p_display_name: displayName, p_nickname: nickname ?? null });
  fail(error);
  return (data as { role: string }[])[0];
}

export async function acceptInvite(token: string, displayName: string) {
  if (isDemo()) return { role: "teacher" };
  const { data, error } = await need().rpc("accept_invite", { p_token: token, p_display_name: displayName });
  fail(error);
  return (data as { role: string }[])[0];
}

export async function createSchool(name: string, city: string, board: string, displayName: string) {
  if (isDemo()) return "demo-school";
  const { data, error } = await need().rpc("create_school", { p_name: name, p_city: city, p_board: board, p_display_name: displayName });
  fail(error);
  return data as string;
}

export async function createClass(schoolId: string, c: { name: string; section: string; grade: string | null; board: string | null }) {
  if (isDemo()) {
    const row: ClassRow = { id: `demo-class-${Date.now()}`, school_id: schoolId, ...c, student_code: "NEW123", teacher_code: "TNEW1234" };
    demoSchool().classes.push(row);
    return row;
  }
  const { data, error } = await need().from("classes").insert({ school_id: schoolId, ...c }).select("*").single();
  fail(error);
  return data as ClassRow;
}

export async function setLeaderboardPrefs(nickname: string, hidden: boolean) {
  if (isDemo()) return;
  const { error } = await need().rpc("set_leaderboard_prefs", { p_nickname: nickname, p_hidden: hidden });
  fail(error);
}

/* ------------------------------ teacher ------------------------------ */

export interface ClassData {
  cls: ClassRow;
  students: Membership[];
  summaries: SummaryRow[];
  assignments: Assignment[];
  submissions: Submission[];
  kudos: Kudos[];
}

export async function fetchClass(classId: string): Promise<ClassData> {
  if (isDemo()) {
    const d = demoSchool();
    return {
      cls: d.classes.find((c) => c.id === classId)!,
      students: d.memberships.filter((m) => m.class_id === classId && m.role === "student"),
      summaries: d.summaries.filter((s) => s.class_id === classId),
      assignments: d.assignments.filter((a) => a.class_id === classId).sort((a, b) => b.created_at.localeCompare(a.created_at)),
      submissions: d.submissions.filter((s) => s.class_id === classId),
      kudos: d.kudos.filter((k) => k.class_id === classId),
    };
  }
  const sb = need();
  const [c, m, s, a, sub, k] = await Promise.all([
    sb.from("classes").select("*").eq("id", classId).single(),
    sb.from("memberships").select("id, user_id, school_id, class_id, role, student_id, display_name, nickname, leaderboard_hidden, roll_no, last_seen_at").eq("class_id", classId).eq("role", "student").order("display_name"),
    sb.from("student_summaries").select("*").eq("class_id", classId),
    sb.from("assignments").select("*").eq("class_id", classId).order("created_at", { ascending: false }).limit(100),
    sb.from("assignment_submissions").select("*").eq("class_id", classId),
    sb.from("kudos").select("*").eq("class_id", classId).order("created_at", { ascending: false }).limit(200),
  ]);
  for (const r of [c, m, s, a, sub, k]) fail(r.error);
  return { cls: c.data as ClassRow, students: m.data as Membership[], summaries: s.data as SummaryRow[], assignments: a.data as Assignment[], submissions: sub.data as Submission[], kudos: k.data as Kudos[] };
}

export async function createAssignment(a: Omit<Assignment, "id" | "created_at" | "created_by">, userId: string) {
  if (isDemo()) {
    const row: Assignment = { ...a, id: `demo-a-${Date.now()}`, created_by: userId, created_at: new Date().toISOString() };
    demoSchool().assignments.unshift(row);
    return row;
  }
  const { data, error } = await need().from("assignments").insert({ ...a, created_by: userId }).select("*").single();
  fail(error);
  return data as Assignment;
}

export async function deleteAssignment(id: string) {
  if (isDemo()) {
    const d = demoSchool();
    d.assignments = d.assignments.filter((a) => a.id !== id);
    return;
  }
  const { error } = await need().from("assignments").delete().eq("id", id);
  fail(error);
}

export async function sendKudos(k: { school_id: string; class_id: string | null; to_id: string; badge: KudosBadge; message: string | null; from_id: string; from_name: string }) {
  if (isDemo()) {
    const row: Kudos = { ...k, id: `demo-k-${Date.now()}`, created_at: new Date().toISOString() };
    demoSchool().kudos.unshift(row);
    return row;
  }
  const { data, error } = await need().from("kudos").insert(k).select("*").single();
  fail(error);
  return data as Kudos;
}

/* ------------------------------ principal ------------------------------ */

export interface SchoolData {
  school: SchoolRow;
  classes: ClassRow[];
  overview: ClassOverview[];
  staff: Membership[];
  summaries: Pick<SummaryRow, "user_id" | "class_id" | "display_name" | "minutes_week" | "weekly_xp" | "chapters_done" | "chapters_total" | "mock_avg" | "accuracy" | "last_active" | "streak" | "week" | "summary">[];
  assignments: Pick<Assignment, "id" | "class_id" | "created_by" | "created_at" | "kind">[];
  kudos: Pick<Kudos, "id" | "from_id" | "created_at">[];
}

export async function fetchSchool(schoolId: string): Promise<SchoolData> {
  if (isDemo()) {
    const d = demoSchool();
    const overview: ClassOverview[] = d.classes.map((c) => {
      const ss = d.summaries.filter((s) => s.class_id === c.id);
      const avg = (xs: (number | null)[]) => {
        const v = xs.filter((x): x is number => x !== null);
        return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
      };
      return { class_id: c.id, school_id: c.school_id, name: c.name, section: c.section, grade: c.grade, board: c.board, students: ss.length, active_7d: ss.filter((s) => s.last_active && Date.now() - new Date(s.last_active).getTime() < 7 * 86_400_000).length, minutes_week: ss.reduce((a, s) => a + s.minutes_week, 0), completion: avg(ss.map((s) => (s.chapters_total ? s.chapters_done / s.chapters_total : null))), mock_avg: avg(ss.map((s) => s.mock_avg)), accuracy: avg(ss.map((s) => s.accuracy)) };
    });
    return { school: d.school, classes: d.classes, overview, staff: d.memberships.filter((m) => m.role === "teacher" || m.role === "principal"), summaries: d.summaries, assignments: d.assignments, kudos: d.kudos };
  }
  const sb = need();
  const [sc, c, o, st, s, a, k] = await Promise.all([
    sb.from("schools").select("id, name, city, board").eq("id", schoolId).single(),
    sb.from("classes").select("*").eq("school_id", schoolId).order("name").order("section"),
    sb.from("class_overview").select("*").eq("school_id", schoolId),
    sb.from("memberships").select("id, user_id, school_id, class_id, role, student_id, display_name, nickname, leaderboard_hidden, last_seen_at").eq("school_id", schoolId).in("role", ["teacher", "principal"]),
    sb.from("student_summaries").select("user_id, class_id, display_name, minutes_week, weekly_xp, chapters_done, chapters_total, mock_avg, accuracy, last_active, streak, week, summary").eq("school_id", schoolId).limit(5000),
    sb.from("assignments").select("id, class_id, created_by, created_at, kind").eq("school_id", schoolId).gte("created_at", new Date(Date.now() - 30 * 86_400_000).toISOString()),
    sb.from("kudos").select("id, from_id, created_at").eq("school_id", schoolId).gte("created_at", new Date(Date.now() - 30 * 86_400_000).toISOString()),
  ]);
  for (const r of [sc, c, o, st, s, a, k]) fail(r.error);
  return { school: sc.data as SchoolRow, classes: c.data as ClassRow[], overview: o.data as ClassOverview[], staff: st.data as Membership[], summaries: s.data as SchoolData["summaries"], assignments: a.data as SchoolData["assignments"], kudos: k.data as SchoolData["kudos"] };
}

/** Server routes that need the service role (CSV import, invites) are called with the user's token. */
export async function authedPost<T>(url: string, body: unknown): Promise<T> {
  if (isDemo()) throw new Error("Preview mode: connect Supabase to create real accounts.");
  const token = (await supabase()?.auth.getSession())?.data.session?.access_token;
  if (!token) throw new Error("Sign in first.");
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify(body) });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(json.message || json.error || `Request failed (${res.status})`);
  return json as T;
}

/* ------------------------------ student ------------------------------ */

export interface StudentSchoolData {
  assignments: Assignment[];
  submissions: Submission[];
  kudos: Kudos[];
}

export async function fetchStudentSchool(userId: string, classId: string): Promise<StudentSchoolData> {
  if (isDemo()) {
    const d = demoSchool();
    return { assignments: d.assignments.filter((a) => a.class_id === classId), submissions: d.submissions.filter((s) => s.user_id === DEMO_USER), kudos: d.kudos.filter((k) => k.to_id === DEMO_USER) };
  }
  const sb = need();
  const since = new Date(Date.now() - 45 * 86_400_000).toISOString();
  const [a, s, k] = await Promise.all([
    sb.from("assignments").select("*").eq("class_id", classId).gte("created_at", since).order("due_at", { ascending: true, nullsFirst: false }),
    sb.from("assignment_submissions").select("*").eq("user_id", userId),
    sb.from("kudos").select("*").eq("to_id", userId).order("created_at", { ascending: false }).limit(50),
  ]);
  for (const r of [a, s, k]) fail(r.error);
  return { assignments: a.data as Assignment[], submissions: s.data as Submission[], kudos: k.data as Kudos[] };
}

export async function fetchKudosFor(userId: string): Promise<Kudos[]> {
  if (isDemo()) return demoSchool().kudos.filter((k) => k.to_id === DEMO_USER);
  const sb = supabase();
  if (!sb) return [];
  const { data } = await sb.from("kudos").select("*").eq("to_id", userId).order("created_at", { ascending: false }).limit(50);
  return (data ?? []) as Kudos[];
}

export async function submitAssignment(sub: Omit<Submission, "detail" | "started_at"> & { detail?: Record<string, unknown> }) {
  if (isDemo()) {
    const d = demoSchool();
    d.submissions = [...d.submissions.filter((x) => !(x.assignment_id === sub.assignment_id && x.user_id === sub.user_id)), { detail: {}, started_at: null, ...sub }];
    return;
  }
  const { error } = await need().from("assignment_submissions").upsert({ detail: {}, ...sub });
  fail(error);
}

export async function upsertSummary(row: SummaryRow) {
  if (isDemo()) return;
  const sb = supabase();
  if (!sb) return;
  const now = new Date().toISOString();
  const res = await Promise.all([
    sb.from("student_summaries").upsert({ ...row, updated_at: now }),
    sb.from("progress_snapshots").upsert({ user_id: row.user_id, week: row.week ?? weekKey(), school_id: row.school_id, class_id: row.class_id, minutes: row.minutes_week, weekly_xp: row.weekly_xp, chapters_done: row.chapters_done, streak: row.streak, summary: { weak: row.summary.weak, strong: row.summary.strong, subjects: row.summary.subjects }, updated_at: now }),
  ]);
  for (const r of res) if (r.error) console.warn("[school] summary", r.error.message);
}

/* ------------------------------ leaderboards & challenge ------------------------------ */

export async function classLeaderboard(classId: string): Promise<LeaderEntry[]> {
  if (isDemo()) {
    const d = demoSchool();
    const ms = d.memberships.filter((m) => m.class_id === classId && m.role === "student");
    return ms
      .filter((m) => !m.leaderboard_hidden || m.user_id === DEMO_USER)
      .map((m) => {
        const s = d.summaries.find((x) => x.user_id === m.user_id);
        return { user_id: m.user_id, nickname: m.nickname || `Learner ${m.user_id.slice(-4).toUpperCase()}`, weekly_xp: s?.weekly_xp ?? 0, streak: s?.streak ?? 0, is_me: m.user_id === DEMO_USER };
      })
      .sort((a, b) => b.weekly_xp - a.weekly_xp);
  }
  const { data, error } = await need().rpc("leaderboard_class", { p_class: classId, p_week: weekKey() });
  fail(error);
  return data as LeaderEntry[];
}

export async function schoolLeaderboard(schoolId: string): Promise<{ students: LeaderEntry[]; classes: ClassLeaderEntry[] }> {
  if (isDemo()) {
    const d = demoSchool();
    const students = d.memberships
      .filter((m) => m.role === "student" && (!m.leaderboard_hidden || m.user_id === DEMO_USER))
      .map((m) => ({ user_id: m.user_id, nickname: m.nickname || `Learner ${m.user_id.slice(-4).toUpperCase()}`, class_name: `${m.classes?.name} ${m.classes?.section}`, weekly_xp: d.summaries.find((x) => x.user_id === m.user_id)?.weekly_xp ?? 0, is_me: m.user_id === DEMO_USER }))
      .sort((a, b) => b.weekly_xp - a.weekly_xp)
      .slice(0, 50);
    const classes = d.classes
      .map((c) => {
        const ss = d.summaries.filter((s) => s.class_id === c.id);
        const total = ss.reduce((a, s) => a + s.weekly_xp, 0);
        return { class_id: c.id, class_name: `${c.name} ${c.section}`, students: ss.length, avg_xp: Math.round((total / Math.max(1, ss.length)) * 10) / 10, total_xp: total };
      })
      .sort((a, b) => b.avg_xp - a.avg_xp);
    return { students, classes };
  }
  const sb = need();
  const [s, c] = await Promise.all([sb.rpc("leaderboard_school", { p_school: schoolId, p_week: weekKey() }), sb.rpc("leaderboard_school_classes", { p_school: schoolId, p_week: weekKey() })]);
  fail(s.error);
  fail(c.error);
  return { students: s.data as LeaderEntry[], classes: c.data as ClassLeaderEntry[] };
}

export interface ChallengeRow {
  id: string;
  title: string;
  href: string;
  completion_key: string;
  description: string | null;
}

export async function fetchChallenge(week: string): Promise<ChallengeRow | null> {
  if (isDemo()) return null;
  const sb = supabase();
  if (!sb) return null;
  const { data } = await sb.from("challenges").select("id, title, href, completion_key, description").eq("id", week).maybeSingle();
  return (data as ChallengeRow) ?? null;
}

export async function challengeRanking(challengeId: string): Promise<SchoolRankEntry[]> {
  if (isDemo()) {
    const names = ["Sunrise Public School", "Green Valley School", "St. Mary's Convent", "Vidya Niketan", "Lakeside Academy", "Delhi Public School North"];
    const r = names.map((n, i) => ({ school_id: `s${i}`, school_name: n, entries: 40 - i * 5, avg_score: Math.round((0.82 - i * 0.045 + (i === 0 ? -0.07 : 0)) * 1000) / 1000, is_mine: i === 0 }));
    return r.sort((a, b) => b.avg_score - a.avg_score);
  }
  const { data, error } = await need().rpc("challenge_school_ranking", { p_challenge: challengeId });
  fail(error);
  return data as SchoolRankEntry[];
}

export async function submitChallengeEntry(e: { challenge_id: string; user_id: string; school_id: string | null; class_id: string | null; score: number }) {
  if (isDemo()) return;
  const { error } = await need().from("challenge_entries").upsert({ ...e, completed_at: new Date().toISOString() });
  fail(error);
}

/* ------------------------------ reports ------------------------------ */

export async function fetchReports(studentId?: string): Promise<WeeklyReportRow[]> {
  if (isDemo()) return demoSchool().reports;
  const sb = need();
  let q = sb.from("weekly_reports").select("*").order("week", { ascending: false }).limit(30);
  if (studentId) q = q.eq("student_id", studentId);
  const { data, error } = await q;
  fail(error);
  return data as WeeklyReportRow[];
}

export const demoAvailable = !supabaseEnabled;
