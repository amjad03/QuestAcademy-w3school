/**
 * Sample school used for previews when Supabase is not configured (and in tests).
 * Deterministic: the same week always produces the same school.
 */
import { classFromSyllabus, defaultSubjects } from "@/content/my-class";
import type { Board } from "@/lib/modes";
import { dayKey, weekKey } from "@/lib/gamification";
import { chapterId, chapterSessionHref, chapterCompletionKey } from "./summary";
import type { Assignment, ClassRow, Kudos, Membership, SchoolRow, Submission, SummaryRow, WeeklyReportRow, ChapterStat, TopicFlag } from "./types";
import { buildWeeklyReport, reportText } from "./report";

export const DEMO_USER = "demo-user";

const FIRST = ["Aarav", "Asha", "Diya", "Ishaan", "Kabir", "Meera", "Rohan", "Saanvi", "Tanvi", "Vivaan", "Zoya", "Arjun", "Nisha", "Pranav", "Riya", "Sahil", "Ananya", "Dev", "Farah", "Gautam", "Hema", "Imran", "Jiya", "Kiran", "Lakshmi", "Manav", "Neha", "Om", "Pooja", "Rahul", "Sneha", "Uday"];
const LAST = ["Sharma", "Rao", "Iyer", "Khan", "Patil", "Reddy", "Nair", "Gupta", "Shetty", "Das", "Menon", "Joshi"];
const NICK = ["Comet", "Falcon", "Nova", "Pixel", "Tiger", "Orbit", "Quasar", "Rocket", "Sparrow", "Blaze", "Echo", "Zephyr"];

function rng(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export interface DemoSchool {
  school: SchoolRow;
  classes: ClassRow[];
  memberships: Membership[];
  summaries: SummaryRow[];
  assignments: Assignment[];
  submissions: Submission[];
  kudos: Kudos[];
  reports: WeeklyReportRow[];
}

let cache: DemoSchool | null = null;

export function demoSchool(): DemoSchool {
  if (cache) return cache;
  const week = weekKey();
  const r = rng(week);
  const school: SchoolRow = { id: "demo-school", name: "Sunrise Public School", city: "Bengaluru", board: "cbse" };
  const spec: [string, string, Board, string, number][] = [
    ["Class 10", "A", "cbse", "10", 0.75],
    ["Class 10", "B", "cbse", "10", 0.55],
    ["Class 9", "A", "cbse", "9", 0.65],
  ];
  const classes: ClassRow[] = spec.map(([name, section, board, grade], i) => ({ id: `demo-class-${i + 1}`, school_id: school.id, name, section, grade, board, student_code: ["QX7K2P", "M4RT9B", "H8WZ3N"][i], teacher_code: ["TQ7Z4K2M", "TR9B3H7P", "TW2N8C4X"][i] }));
  const teachers = ["Mrs. Lakshmi Rao", "Mr. Arvind Menon", "Ms. Farah Khan"];
  const memberships: Membership[] = [];
  const summaries: SummaryRow[] = [];
  const now = new Date();

  // The demo viewer is the principal, teaches 10 A, and is also a student in 10 A (to preview every view).
  memberships.push({ id: "m-p", user_id: DEMO_USER, school_id: school.id, class_id: null, role: "principal", student_id: null, display_name: "Dr. Sunita Iyer", nickname: null, leaderboard_hidden: false, schools: school, classes: null });
  classes.forEach((c, i) => {
    const uid = i === 0 ? DEMO_USER : `demo-teacher-${i}`;
    memberships.push({ id: `m-t${i}`, user_id: uid, school_id: school.id, class_id: c.id, role: "teacher", student_id: null, display_name: teachers[i], nickname: null, leaderboard_hidden: false, last_seen_at: new Date(now.getTime() - (i * 2 + 1) * 3_600_000 * (i === 2 ? 30 : 1)).toISOString(), schools: school, classes: c });
  });

  classes.forEach((c, ci) => {
    const myClass = classFromSyllabus(c.board as Board, c.grade!)!;
    const subjectIds = defaultSubjects(myClass);
    const subjects = myClass.subjects.filter((s) => subjectIds.includes(s.id)).slice(0, 5);
    const pace = spec[ci][4];
    for (let k = 0; k < 30; k++) {
      const isMe = ci === 0 && k === 1;
      const uid = isMe ? DEMO_USER : `demo-s-${ci}-${k}`;
      const name = `${FIRST[(k + ci * 7) % FIRST.length]} ${LAST[(k * 5 + ci) % LAST.length]}`;
      const ability = Math.min(1, Math.max(0.05, pace + (r() - 0.5) * 0.9));
      const active = r() < 0.15 + ability;
      const chapters: Record<string, ChapterStat> = {};
      const flags: TopicFlag[] = [];
      let done = 0;
      let total = 0;
      const subjStats: SummaryRow["summary"]["subjects"] = {};
      for (const s of subjects) {
        let ms = 0;
        let sd = 0;
        const list = s.chapters.filter((ch) => ch.lessonIds.length);
        list.forEach((ch, chi) => {
          const id = chapterId(ch, s.id);
          const reach = ability * list.length * 1.1;
          const d = chi < reach - 1 ? ch.lessonIds.length : chi < reach ? Math.floor(ch.lessonIds.length * r()) : 0;
          const m = d ? Math.min(4, Math.round((ability * 3 + r() * 1.6) * 10) / 10) : 0;
          const x = d && r() < 0.6 ? Math.round(Math.min(1, ability * 0.8 + r() * 0.35) * 100) / 100 : undefined;
          chapters[id] = { t: ch.title, s: s.name, d, n: ch.lessonIds.length, m, ...(x !== undefined ? { x } : {}) };
          total += 1;
          if (d === ch.lessonIds.length) (done += 1, (sd += 1));
          ms += m;
          if (d) flags.push({ id, title: ch.title, subject: s.name, level: Math.round((x !== undefined ? (m / 4 + x) / 2 : m / 4) * 100) / 100 });
        });
        subjStats[s.id] = { name: s.name, mastery: Math.round((ms / Math.max(1, list.length) / 4) * 100) / 100, done: sd, total: list.length };
      }
      const minutes = active ? Math.round(40 + ability * 260 * r() + 30) : Math.round(r() * 20);
      const mocks = ability > 0.4 && r() < 0.7 ? [{ title: "NEET mini mock", date: new Date(now.getTime() - r() * 6 * 86_400_000).toISOString(), pct: Math.round(Math.min(0.95, ability * 0.75 + r() * 0.2) * 1000) / 1000, testId: "neet-mini-1" }] : [];
      const days: Record<string, number> = {};
      for (let d = 13; d >= 0; d--) {
        const dt = new Date(now);
        dt.setDate(dt.getDate() - d);
        days[dayKey(dt)] = active && r() < 0.3 + ability * 0.6 ? Math.round(10 + r() * 50) : 0;
      }
      const streak = active ? Math.floor(r() * 20 * ability) : 0;
      const lastActive = active ? new Date(now.getTime() - r() * 2 * 86_400_000) : new Date(now.getTime() - (5 + r() * 12) * 86_400_000);
      summaries.push({
        user_id: uid,
        school_id: school.id,
        class_id: c.id,
        display_name: isMe ? "Asha (you)" : name,
        week,
        weekly_xp: active ? Math.round(minutes * (1.5 + r())) : Math.round(r() * 15),
        xp: Math.round(ability * 6000 + r() * 800),
        streak,
        best_streak: streak + Math.floor(r() * 10),
        minutes_week: minutes,
        minutes_total: Math.round(minutes * (6 + r() * 6)),
        chapters_done: done,
        chapters_total: total,
        mock_avg: mocks.length ? mocks[0].pct : null,
        accuracy: Math.round(Math.min(0.97, 0.35 + ability * 0.55 + r() * 0.1) * 1000) / 1000,
        last_active: lastActive.toISOString(),
        summary: {
          chapters,
          subjects: subjStats,
          weak: flags.filter((f) => f.level < 0.45).sort((a, b) => a.level - b.level).slice(0, 6),
          strong: flags.filter((f) => f.level >= 0.8).sort((a, b) => b.level - a.level).slice(0, 6),
          mocks,
          doubts: active && r() < 0.6 ? [{ at: new Date(now.getTime() - r() * 4 * 86_400_000).toISOString(), text: ["Why does the image form behind the mirror?", "How do I balance this redox equation?", "What is the difference between speed and velocity?", "Can you explain the quadratic formula again?"][Math.floor(r() * 4)], source: "tutor" }] : [],
          recent: [],
          days,
          className: `${c.name} ${c.section}`,
        },
      });
      memberships.push({ id: `m-s-${ci}-${k}`, user_id: uid, school_id: school.id, class_id: c.id, role: "student", student_id: null, display_name: isMe ? "Asha Rao" : name, nickname: r() < 0.8 ? `${NICK[k % NICK.length]}${10 + Math.floor(r() * 89)}` : null, leaderboard_hidden: !isMe && r() < 0.08, schools: school, classes: c });
    }
  });

  const firstChapter = (c: ClassRow) => {
    const mc = classFromSyllabus(c.board as Board, c.grade!)!;
    const s = mc.subjects[0];
    const ch = s.chapters.filter((x) => x.lessonIds.length);
    return ch.slice(0, 3).map((x) => ({ id: chapterId(x, s.id), title: x.title }));
  };
  const assignments: Assignment[] = [];
  const submissions: Submission[] = [];
  classes.forEach((c, ci) => {
    const [a, b] = firstChapter(c);
    const due = (d: number) => new Date(now.getTime() + d * 86_400_000).toISOString();
    const list: Assignment[] = [
      { id: `demo-a-${ci}-1`, school_id: school.id, class_id: c.id, created_by: ci === 0 ? DEMO_USER : `demo-teacher-${ci}`, kind: "practice", ref: a.id, title: `Practice: ${a.title}`, href: chapterSessionHref(a.id, "practice"), completion_key: chapterCompletionKey(a.id, "practice"), note: "Do this before Friday's class.", due_at: due(2), created_at: due(-3) },
      { id: `demo-a-${ci}-2`, school_id: school.id, class_id: c.id, created_by: ci === 0 ? DEMO_USER : `demo-teacher-${ci}`, kind: "test", ref: b.id, title: `Chapter test: ${b.title}`, href: chapterSessionHref(b.id, "test"), completion_key: chapterCompletionKey(b.id, "test"), note: null, due_at: due(5), created_at: due(-1) },
    ];
    assignments.push(...list);
    for (const s of summaries.filter((x) => x.class_id === c.id))
      list.forEach((asg, ai) => {
        const p = s.minutes_week / 300;
        if (r() < p + (ai ? 0.1 : 0.35)) submissions.push({ assignment_id: asg.id, user_id: s.user_id, class_id: c.id, status: "done", score: Math.round(Math.min(1, (s.accuracy ?? 0.5) + (r() - 0.5) * 0.3) * 100) / 100, detail: {}, started_at: null, completed_at: due(-r() * 2) });
      });
  });

  const kudos: Kudos[] = [
    { id: "k1", school_id: school.id, class_id: classes[0].id, from_id: DEMO_USER, from_name: "Mrs. Lakshmi Rao", to_id: DEMO_USER, badge: "improver", message: "Your chapter test score jumped 20 points!", created_at: new Date(now.getTime() - 86_400_000).toISOString() },
    { id: "k2", school_id: school.id, class_id: classes[0].id, from_id: DEMO_USER, from_name: "Mrs. Lakshmi Rao", to_id: DEMO_USER, badge: "streak", message: null, created_at: new Date(now.getTime() - 9 * 86_400_000).toISOString() },
  ];

  const me = summaries.find((s) => s.user_id === DEMO_USER)!;
  const doc = buildWeeklyReport({ summary: me, week, school: school.name, className: "Class 10 A", prevMinutes: 140, kudos, assignments: assignments.filter((a) => a.class_id === classes[0].id), submissions: submissions.filter((s) => s.user_id === DEMO_USER) });
  const reports: WeeklyReportRow[] = [{ id: "r1", student_id: DEMO_USER, school_id: school.id, week, report: doc, text: reportText(doc), channel: "none", status: "not_sent", detail: "WhatsApp is not configured", sent_at: null, created_at: now.toISOString() }];

  cache = { school, classes, memberships, summaries, assignments, submissions, kudos, reports };
  return cache;
}
