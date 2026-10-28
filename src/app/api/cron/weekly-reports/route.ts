import { timingSafeEqual } from "node:crypto";
import { supabaseAdmin } from "@/lib/supabase-server";
import { json, pool } from "@/lib/school/server";
import { weekKey } from "@/lib/gamification";
import { buildWeeklyReport, previousWeek, reportText, whatsappParams } from "@/lib/school/report";
import { emailConfigured, sendEmail, sendWhatsApp, whatsappConfigured, type SendResult } from "@/lib/school/notify";
import type { Assignment, Kudos, Submission, SummaryRow } from "@/lib/school/types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

const CHUNK = 200;

function authorised(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const got = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? new URL(req.url).searchParams.get("secret") ?? "";
  const a = Buffer.from(got);
  const b = Buffer.from(secret);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * Weekly parent reports (Vercel cron, Sunday evening; see vercel.json).
 * Generates and stores a report for every student, then sends it to their guardians
 * over WhatsApp (or the email hook). Without a sender, reports are stored as "not_sent"
 * and stay viewable in the app (/reports).
 *   ?week=YYYY-MM-DD  report another week · ?force=1 resend reports already sent · ?school=<id> one school
 */
export async function GET(req: Request) {
  if (!process.env.CRON_SECRET) return json({ error: "cron_disabled", message: "Set CRON_SECRET to enable weekly reports." }, 503);
  if (!authorised(req)) return json({ error: "unauthorized" }, 401);
  const sb = supabaseAdmin();
  if (!sb) return json({ error: "accounts_unavailable", message: "SUPABASE_SERVICE_ROLE_KEY is not set." }, 503);

  const url = new URL(req.url);
  const week = url.searchParams.get("week") || weekKey(new Date(Date.now() - 12 * 3_600_000));
  const force = url.searchParams.get("force") === "1";
  const onlySchool = url.searchParams.get("school");
  const started = Date.now();
  const tally = { students: 0, generated: 0, sent: 0, not_sent: 0, failed: 0, skipped: 0 };
  const schools = new Map<string, string>();
  const classes = new Map<string, string>();

  for (let from = 0; ; from += CHUNK) {
    if (Date.now() - started > 270_000) return json({ ...tally, week, partial: true, next: from });
    let q = sb.from("memberships").select("user_id, school_id, class_id, display_name").eq("role", "student").order("id").range(from, from + CHUNK - 1);
    if (onlySchool) q = q.eq("school_id", onlySchool);
    const { data: students, error } = await q;
    if (error) return json({ error: "lookup_failed", message: error.message }, 500);
    if (!students?.length) break;
    tally.students += students.length;
    const ids = students.map((s) => s.user_id as string);
    const classIds = [...new Set(students.map((s) => s.class_id as string).filter(Boolean))];
    const since = new Date(new Date(`${week}T00:00:00Z`).getTime() - 7 * 86_400_000).toISOString();

    const [sum, snaps, kudos, asg, subs, guard, done, sch, cls] = await Promise.all([
      sb.from("student_summaries").select("*").in("user_id", ids),
      sb.from("progress_snapshots").select("user_id, minutes").eq("week", previousWeek(week)).in("user_id", ids),
      sb.from("kudos").select("*").in("to_id", ids).gte("created_at", since),
      classIds.length ? sb.from("assignments").select("*").in("class_id", classIds).gte("due_at", since) : Promise.resolve({ data: [] as Assignment[], error: null }),
      sb.from("assignment_submissions").select("*").in("user_id", ids),
      sb.from("guardians").select("student_id, phone, email, whatsapp_opt_in").in("student_id", ids),
      sb.from("weekly_reports").select("student_id, status").eq("week", week).in("student_id", ids),
      sb.from("schools").select("id, name").in("id", [...new Set(students.map((s) => s.school_id as string))]),
      classIds.length ? sb.from("classes").select("id, name, section").in("id", classIds) : Promise.resolve({ data: [] as { id: string; name: string; section: string }[], error: null }),
    ]);
    for (const s of sch.data ?? []) schools.set(s.id, s.name);
    for (const c of cls.data ?? []) classes.set(c.id, `${c.name} ${c.section}`);
    const summaries = new Map(((sum.data ?? []) as SummaryRow[]).map((s) => [s.user_id, s]));
    const prev = new Map((snaps.data ?? []).map((s) => [s.user_id as string, s.minutes as number]));
    const sentAlready = new Set((done.data ?? []).filter((r) => r.status === "sent").map((r) => r.student_id as string));

    await pool(students, 8, async (st) => {
      const uid = st.user_id as string;
      if (sentAlready.has(uid) && !force) return void tally.skipped++;
      const summary: SummaryRow = summaries.get(uid) ?? ({ user_id: uid, school_id: st.school_id, class_id: st.class_id, display_name: st.display_name, week: null, weekly_xp: 0, xp: 0, streak: 0, best_streak: 0, minutes_week: 0, minutes_total: 0, chapters_done: 0, chapters_total: 0, mock_avg: null, accuracy: null, last_active: null, summary: { chapters: {}, subjects: {}, weak: [], strong: [], mocks: [], doubts: [], recent: [], days: {} } } as SummaryRow);
      const doc = buildWeeklyReport({
        summary: { ...summary, display_name: (st.display_name as string) || summary.display_name },
        week,
        school: schools.get(st.school_id as string) ?? null,
        className: classes.get(st.class_id as string) ?? null,
        prevMinutes: prev.get(uid) ?? null,
        kudos: ((kudos.data ?? []) as Kudos[]).filter((k) => k.to_id === uid),
        assignments: ((asg.data ?? []) as Assignment[]).filter((a) => a.class_id === st.class_id),
        submissions: ((subs.data ?? []) as Submission[]).filter((s) => s.user_id === uid),
      });
      const text = reportText(doc);
      const contacts = (guard.data ?? []).filter((g) => g.student_id === uid);
      let result: SendResult = { channel: "none", status: "not_sent", detail: contacts.length ? "No sender configured (WhatsApp / email)" : "No parent contact on file" };
      const phones = contacts.filter((g) => g.phone && g.whatsapp_opt_in).map((g) => g.phone as string);
      const emails = contacts.filter((g) => g.email).map((g) => g.email as string);
      if (phones.length && whatsappConfigured()) {
        for (const p of phones) result = await sendWhatsApp(p, whatsappParams(doc));
      }
      if (result.status !== "sent" && emails.length && emailConfigured()) {
        for (const e of emails) result = await sendEmail(e, `Weekly report: ${doc.student} (${doc.weekLabel})`, text);
      }
      const { error: upErr } = await sb.from("weekly_reports").upsert({ student_id: uid, school_id: st.school_id, week, report: doc, text, channel: result.channel, status: result.status, detail: result.detail, sent_at: result.status === "sent" ? new Date().toISOString() : null }, { onConflict: "student_id,week" });
      if (upErr) return void tally.failed++;
      tally.generated++;
      tally[result.status]++;
      if (result.status === "not_sent") console.info(`[reports] ${uid} ${week}: not sent (${result.detail})`);
    });
    if (students.length < CHUNK) break;
  }
  return json({ ...tally, week });
}
