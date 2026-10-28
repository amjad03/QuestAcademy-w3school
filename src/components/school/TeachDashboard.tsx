"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { AlertTriangle, CalendarClock, Check, ClipboardCopy, Clock, Flame, Heart, MessageCircleQuestion, Plus, Trash2, Upload, Users } from "lucide-react";
import { useT } from "@/i18n";
import { useAuth } from "@/components/providers";
import { useUi } from "@/lib/ui";
import { copyText } from "@/lib/clipboard";
import { MOCK_TESTS, txtEn } from "@/lib/exam";
import { weekKey } from "@/lib/gamification";
import { createAssignment, deleteAssignment, fetchClass, sendKudos, useRoles, useSchool, type ClassData } from "@/lib/school/client";
import { DEMO_USER } from "@/lib/school/demo";
import { atRisk, avg, cellLevel, chapterColumns, weakAreas, type RiskFlag } from "@/lib/school/analytics";
import { chapterCompletionKey, chapterSessionHref } from "@/lib/school/summary";
import { KUDOS_EMOJI, KUDOS_LABEL } from "@/lib/school/report";
import { KUDOS_BADGES, type Assignment, type AssignmentKind, type KudosBadge, type SummaryRow } from "@/lib/school/types";
import { Bar, DemoBanner, Drawer, Empty, PageTitle, PageWrap, Section, Stat, Tabs, daysSince, heat, pct, useAgo } from "./ui";
import { ImportStudents } from "./ImportStudents";

type Tab = "overview" | "progress" | "assignments" | "students";

export function TeachDashboard() {
  const t = useT();
  const roles = useRoles();
  const demo = useSchool((s) => s.demo);
  const classes = useMemo(() => roles.teacherOf.filter((m) => m.classes).map((m) => m.classes!), [roles.teacherOf]);
  const [classId, setClassId] = useState<string | null>(null);
  const [data, setData] = useState<ClassData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [student, setStudent] = useState<string | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(location.search).get("class");
    setClassId((cur) => cur ?? q ?? classes[0]?.id ?? null);
  }, [classes]);

  const load = useCallback(async () => {
    if (!classId) return;
    setError(null);
    try {
      setData(await fetchClass(classId));
    } catch (e) {
      setError((e as Error).message);
    }
  }, [classId]);
  useEffect(() => {
    setData(null);
    void load();
  }, [load, demo]);

  if (!classId)
    return (
      <PageWrap>
        <Empty title={t("teach.noClass", "No classes yet")} body={t("teach.noClassBody", "Ask your principal for your class's teacher code, then join it.")} action={<Link href="/join" className="btn-primary">{t("teach.join", "Join a class")}</Link>} />
      </PageWrap>
    );

  const cls = data?.cls ?? classes.find((c) => c.id === classId);
  return (
    <PageWrap>
      <DemoBanner />
      <PageTitle
        eyebrow={t("teach.eyebrow", "Teach")}
        title={cls ? t("teach.classTitle", "{name} · Section {section}", { name: cls.name, section: cls.section }) : t("teach.loading", "Loading class…")}
        sub={data ? t("teach.sub", "{n} students", { n: data.students.length }) : undefined}
        actions={
          classes.length > 1 && (
            <select aria-label={t("teach.pickClass", "Choose a class")} className="input !w-auto !py-2" value={classId} onChange={(e) => (setClassId(e.target.value), setTab("overview"))}>
              {classes.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} {c.section}
                </option>
              ))}
            </select>
          )
        }
      />
      {error && <p className="mb-4 rounded-2xl bg-bad-soft px-4 py-3 font-bold text-bad">{error}</p>}
      {!data ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl bg-surface-2" />
          ))}
        </div>
      ) : (
        <>
          <Tabs<Tab>
            value={tab}
            onChange={setTab}
            items={[
              { id: "overview", label: t("teach.tab.overview", "Overview") },
              { id: "progress", label: t("teach.tab.progress", "Progress") },
              { id: "assignments", label: t("teach.tab.assignments", "Assignments"), count: data.assignments.length },
              { id: "students", label: t("teach.tab.students", "Students"), count: data.students.length },
            ]}
          />
          {tab === "overview" && <Overview data={data} openStudent={setStudent} />}
          {tab === "progress" && <Heatmap data={data} openStudent={setStudent} />}
          {tab === "assignments" && <Assignments data={data} reload={load} />}
          {tab === "students" && <Students data={data} openStudent={setStudent} reload={load} />}
          <StudentDrawer data={data} userId={student} onClose={() => setStudent(null)} reload={load} />
        </>
      )}
    </PageWrap>
  );
}

/* ------------------------------ overview ------------------------------ */

function useReason() {
  const t = useT();
  return (r: string) => {
    const [k, v] = r.split(":");
    if (k === "inactive") return v === "never" ? t("teach.risk.never", "Not started yet") : t("teach.risk.inactive", "Inactive {n} days", { n: v });
    if (k === "low-time") return t("teach.risk.lowTime", "Under 30 min this week");
    if (k === "accuracy") return t("teach.risk.accuracy", "Accuracy {n}%", { n: v });
    if (k === "mock") return t("teach.risk.mock", "Mock average {n}%", { n: v });
    if (k === "overdue") return t("teach.risk.overdue", "{n} overdue", { n: v });
    return r;
  };
}

function Overview({ data, openStudent }: { data: ClassData; openStudent: (id: string) => void }) {
  const t = useT();
  const reason = useReason();
  const s = data.summaries;
  const week = weekKey();
  const active = s.filter((x) => daysSince(x.last_active) < 7).length;
  const minutes = avg(s.map((x) => (x.week === week ? x.minutes_week : 0)));
  const completion = avg(s.map((x) => (x.chapters_total ? x.chapters_done / x.chapters_total : null)));
  const risk = useMemo(() => atRisk(s, data.assignments, data.submissions), [s, data.assignments, data.submissions]);
  const weak = useMemo(() => weakAreas(s, 8), [s]);
  const top = [...s].sort((a, b) => (b.week === week ? b.weekly_xp : 0) - (a.week === week ? a.weekly_xp : 0)).slice(0, 5);
  const notSynced = data.students.length - s.length;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <Stat label={t("teach.stat.students", "Students")} value={data.students.length} hint={notSynced > 0 ? t("teach.stat.notSynced", "{n} not started", { n: notSynced }) : undefined} />
        <Stat label={t("teach.stat.active", "Active this week")} value={`${active}/${s.length || 0}`} tone={active / Math.max(1, s.length) < 0.5 ? "bad" : "good"} />
        <Stat label={t("teach.stat.minutes", "Avg minutes / week")} value={minutes === null ? "–" : Math.round(minutes)} />
        <Stat label={t("teach.stat.completion", "Chapters done")} value={pct(completion)} />
        <Stat label={t("teach.stat.mock", "Mock average")} value={pct(avg(s.map((x) => x.mock_avg)))} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Section title={t("teach.atRisk", "Students who need attention")} action={<span className="chip">{risk.length}</span>}>
          {risk.length === 0 ? (
            <p className="font-semibold text-muted">{t("teach.atRiskNone", "Everyone is on track this week.")}</p>
          ) : (
            <ul className="divide-y-2 divide-line">
              {risk.slice(0, 8).map((r) => (
                <li key={r.userId}>
                  <button className="flex w-full items-start gap-3 py-2.5 text-left hover:opacity-80" onClick={() => openStudent(r.userId)}>
                    <AlertTriangle className={clsx("mt-0.5 h-4 w-4 shrink-0", r.score >= 3 ? "text-bad" : "text-warn-shade")} aria-hidden />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-extrabold">{r.name}</span>
                      <span className="mt-1 flex flex-wrap gap-1">
                        {r.reasons.map((x) => (
                          <span key={x} className="chip">
                            {reason(x)}
                          </span>
                        ))}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <Section title={t("teach.weakClass", "Weak topics in this class")}>
          {weak.length === 0 ? (
            <p className="font-semibold text-muted">{t("teach.weakNone", "No weak topics yet. They appear once students practise.")}</p>
          ) : (
            <ul className="space-y-3">
              {weak.map((w) => (
                <li key={w.id} className="flex items-center gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-extrabold">{w.title}</p>
                    <p className="truncate text-xs font-semibold text-muted">
                      {w.subject} · {t("teach.weakStudents", "{n} students struggling", { n: w.students })}
                    </p>
                  </div>
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: heat(w.avgLevel) }} aria-hidden />
                </li>
              ))}
            </ul>
          )}
        </Section>
      </div>

      <Section title={t("teach.topWeek", "Top of the class this week")} action={<Link className="btn-flat" href="/compete">{t("teach.leagueLink", "Class league")}</Link>}>
        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-5">
          {top.map((x, i) => (
            <li key={x.user_id} className="rounded-2xl bg-surface-2 p-3">
              <p className="text-xs font-extrabold text-muted">#{i + 1}</p>
              <button className="block w-full truncate text-left font-extrabold hover:text-accent" onClick={() => openStudent(x.user_id)}>
                {x.display_name}
              </button>
              <p className="text-sm font-bold text-muted">{t("teach.xp", "{n} XP", { n: x.week === week ? x.weekly_xp : 0 })}</p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}

/* ------------------------------ heatmap ------------------------------ */

function Heatmap({ data, openStudent }: { data: ClassData; openStudent: (id: string) => void }) {
  const t = useT();
  const cols = useMemo(() => chapterColumns(data.cls, data.summaries), [data.cls, data.summaries]);
  const [subject, setSubject] = useState(cols[0]?.id ?? "");
  const subj = cols.find((c) => c.id === subject) ?? cols[0];
  const rows = useMemo(() => {
    const byUser = new Map(data.summaries.map((s) => [s.user_id, s]));
    return data.students.map((m) => ({ m, s: byUser.get(m.user_id) ?? null }));
  }, [data]);

  if (!subj) return <Empty title={t("teach.heat.empty", "No chapter data yet")} body={t("teach.heat.emptyBody", "The heatmap fills in as students learn. Each student's progress is saved when they use the app while signed in.")} />;

  return (
    <Section
      title={t("teach.heat.title", "Class progress by chapter")}
      action={
        <select aria-label={t("teach.heat.subject", "Subject")} className="input !w-auto !py-2 text-sm" value={subj.id} onChange={(e) => setSubject(e.target.value)}>
          {cols.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      }
    >
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold text-muted">
        <span>{t("teach.heat.legend", "Mastery:")}</span>
        {[
          [null, t("teach.heat.none", "Not started")],
          [0.2, t("teach.heat.low", "Struggling")],
          [0.5, t("teach.heat.mid", "Getting there")],
          [0.8, t("teach.heat.good", "Good")],
          [1, t("teach.heat.mastered", "Mastered")],
        ].map(([v, l]) => (
          <span key={String(l)} className="inline-flex items-center gap-1">
            <span className="h-3 w-3 rounded border border-line" style={{ background: heat(v as number | null) }} /> {l}
          </span>
        ))}
      </div>
      <div className="-mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
        <table className="border-separate border-spacing-[3px] text-sm">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 min-w-[140px] bg-surface pr-2 text-left text-xs font-extrabold uppercase text-muted">{t("teach.heat.student", "Student")}</th>
              {subj.chapters.map((c) => (
                <th key={c.id} title={c.title} className="w-8 min-w-8 text-center text-xs font-extrabold text-muted">
                  {c.n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ m, s }) => (
              <tr key={m.user_id}>
                <th scope="row" className="sticky left-0 z-10 max-w-[180px] truncate bg-surface pr-2 text-left font-bold">
                  <button className="max-w-full truncate hover:text-accent" onClick={() => openStudent(m.user_id)}>
                    {m.display_name}
                  </button>
                </th>
                {subj.chapters.map((c) => {
                  const cell = s?.summary?.chapters?.[c.id];
                  const lvl = cellLevel(cell);
                  return (
                    <td key={c.id} className="h-7 w-8 rounded-md border border-line/60" style={{ background: heat(lvl) }} title={`${m.display_name} · ${c.title}${cell ? ` · ${cell.d}/${cell.n} ${t("teach.heat.lessons", "lessons")}${cell.x !== undefined ? ` · ${t("teach.heat.test", "test")} ${pct(cell.x)}` : ""}` : ""}`}>
                      <span className="sr-only">{lvl === null ? t("teach.heat.none", "Not started") : pct(lvl)}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ol className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1 text-xs font-semibold text-muted sm:grid-cols-2 lg:grid-cols-3">
        {subj.chapters.map((c) => (
          <li key={c.id} className="truncate">
            <span className="font-extrabold">{c.n}.</span> {c.title}
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------ assignments ------------------------------ */

function Assignments({ data, reload }: { data: ClassData; reload: () => Promise<void> }) {
  const t = useT();
  const { user } = useAuth();
  const demo = useSchool((s) => s.demo);
  const toast = useUi((s) => s.toast);
  const cols = useMemo(() => chapterColumns(data.cls, data.summaries), [data.cls, data.summaries]);
  const [kind, setKind] = useState<AssignmentKind>("practice");
  const [ref, setRef] = useState("");
  const [due, setDue] = useState(() => {
    const d = new Date(Date.now() + 3 * 86_400_000);
    return d.toISOString().slice(0, 10);
  });
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const mocks = useMemo(() => MOCK_TESTS.filter((m) => m.kind !== "full" || true), []);

  const create = async () => {
    if (!ref) return;
    setBusy(true);
    try {
      let title: string;
      let href: string;
      let key: string;
      if (kind === "mock") {
        const m = MOCK_TESTS.find((x) => x.id === ref)!;
        title = txtEn(m.title);
        href = `/exam/mock/${m.id}`;
        key = `mock:${m.id}`;
      } else {
        const ch = cols.flatMap((c) => c.chapters).find((c) => c.id === ref)!;
        title = kind === "test" ? `Chapter test: ${ch.title}` : `Practice: ${ch.title}`;
        href = chapterSessionHref(ref, kind);
        key = chapterCompletionKey(ref, kind);
      }
      await createAssignment({ school_id: data.cls.school_id, class_id: data.cls.id, kind, ref, title, href, completion_key: key, note: note.trim() || null, due_at: due ? new Date(`${due}T23:59:00`).toISOString() : null }, user?.id ?? DEMO_USER);
      setNote("");
      setRef("");
      toast({ text: demo ? t("teach.assign.demo", "Assigned (preview only)") : t("teach.assign.done", "Assigned to the class") });
      await reload();
    } catch (e) {
      toast({ text: (e as Error).message });
    } finally {
      setBusy(false);
    }
  };

  const subs = (a: Assignment) => data.submissions.filter((s) => s.assignment_id === a.id && s.status === "done");
  const names = new Map(data.students.map((m) => [m.user_id, m.display_name]));

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
      <Section title={t("teach.assign.title", "Assign work")}>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-1 rounded-2xl bg-surface-2 p-1" role="radiogroup" aria-label={t("teach.assign.kind", "Type")}>
            {(["practice", "test", "mock"] as AssignmentKind[]).map((k) => (
              <button key={k} role="radio" aria-checked={kind === k} onClick={() => (setKind(k), setRef(""))} className={clsx("rounded-xl px-2 py-2 text-sm font-extrabold", kind === k ? "bg-surface text-accent shadow-sm" : "text-muted")}>
                {k === "practice" ? t("teach.assign.practice", "Practice") : k === "test" ? t("teach.assign.test", "Chapter test") : t("teach.assign.mock", "Mock test")}
              </button>
            ))}
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-extrabold">{kind === "mock" ? t("teach.assign.whichMock", "Mock test") : t("teach.assign.chapter", "Chapter")}</span>
            <select className="input" value={ref} onChange={(e) => setRef(e.target.value)}>
              <option value="">{t("teach.assign.choose", "Choose…")}</option>
              {kind === "mock"
                ? mocks.map((m) => (
                    <option key={m.id} value={m.id}>
                      {txtEn(m.title)} · {m.minutes} min
                    </option>
                  ))
                : cols.map((c) => (
                    <optgroup key={c.id} label={c.name}>
                      {c.chapters.map((ch) => (
                        <option key={ch.id} value={ch.id}>
                          {ch.n}. {ch.title}
                        </option>
                      ))}
                    </optgroup>
                  ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-extrabold">{t("teach.assign.due", "Due date")}</span>
            <input type="date" className="input" value={due} onChange={(e) => setDue(e.target.value)} />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-extrabold">{t("teach.assign.note", "Note for students (optional)")}</span>
            <textarea className="input min-h-[72px]" maxLength={280} value={note} onChange={(e) => setNote(e.target.value)} />
          </label>
          <button className="btn-primary w-full" disabled={!ref || busy} onClick={create}>
            <Plus className="h-4 w-4" /> {t("teach.assign.cta", "Assign to class")}
          </button>
        </div>
      </Section>

      <Section title={t("teach.assign.list", "Assigned work")}>
        {data.assignments.length === 0 ? (
          <p className="font-semibold text-muted">{t("teach.assign.none", "Nothing assigned yet.")}</p>
        ) : (
          <ul className="divide-y-2 divide-line">
            {data.assignments.map((a) => {
              const s = subs(a);
              const overdue = a.due_at && new Date(a.due_at).getTime() < Date.now();
              return (
                <li key={a.id} className="py-3">
                  <div className="flex flex-wrap items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="font-extrabold">{a.title}</p>
                      <p className="mt-0.5 flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
                        <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                        {a.due_at ? t("teach.assign.dueOn", "Due {date}", { date: new Date(a.due_at).toLocaleDateString(undefined, { day: "numeric", month: "short" }) }) : t("teach.assign.noDue", "No due date")}
                        {overdue && <span className="chip !bg-bad-soft !text-bad">{t("teach.assign.closed", "Past due")}</span>}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-black tabular-nums">
                        {s.length}/{data.students.length}
                      </p>
                      <p className="text-xs font-bold text-muted">{t("teach.assign.avg", "avg {pct}", { pct: pct(avg(s.map((x) => x.score))) })}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Bar value={s.length / Math.max(1, data.students.length)} color="rgb(var(--good))" />
                  </div>
                  <div className="mt-2 flex gap-1">
                    <button className="btn-flat !px-2 !py-1 text-xs" onClick={() => setOpen(open === a.id ? null : a.id)}>
                      {open === a.id ? t("teach.assign.hide", "Hide results") : t("teach.assign.show", "See results")}
                    </button>
                    <button
                      className="btn-flat !px-2 !py-1 text-xs !text-bad"
                      onClick={async () => {
                        if (!confirm(t("teach.assign.confirmDelete", "Remove this assignment and its results?"))) return;
                        await deleteAssignment(a.id).catch((e) => toast({ text: (e as Error).message }));
                        await reload();
                      }}
                    >
                      <Trash2 className="h-3.5 w-3.5" /> {t("teach.assign.delete", "Remove")}
                    </button>
                  </div>
                  {open === a.id && (
                    <table className="mt-2 w-full text-sm">
                      <tbody>
                        {data.students.map((m) => {
                          const sub = s.find((x) => x.user_id === m.user_id);
                          return (
                            <tr key={m.user_id} className="border-t border-line">
                              <td className="truncate py-1.5 font-semibold">{names.get(m.user_id)}</td>
                              <td className="py-1.5 text-right font-bold tabular-nums">{sub ? pct(sub.score) : <span className="text-muted">{t("teach.assign.pending", "Not yet")}</span>}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </Section>
    </div>
  );
}

/* ------------------------------ students ------------------------------ */

function Students({ data, openStudent, reload }: { data: ClassData; openStudent: (id: string) => void; reload: () => Promise<void> }) {
  const t = useT();
  const ago = useAgo();
  const toast = useUi((s) => s.toast);
  const [showImport, setShowImport] = useState(false);
  const by = new Map(data.summaries.map((s) => [s.user_id, s]));
  const week = weekKey();
  return (
    <div className="space-y-5">
      <Section
        title={t("teach.students.title", "Students")}
        action={
          <div className="flex flex-wrap gap-2">
            {data.cls.student_code && (
              <button className="btn-ghost !py-2 text-sm" onClick={() => copyText(data.cls.student_code!).then(() => toast({ text: t("teach.codeCopied", "Class code copied") }))}>
                <ClipboardCopy className="h-4 w-4" /> {t("teach.code", "Code {code}", { code: data.cls.student_code })}
              </button>
            )}
            <button className="btn-ghost !py-2 text-sm" onClick={() => setShowImport((v) => !v)}>
              <Upload className="h-4 w-4" /> {t("teach.import", "Import CSV")}
            </button>
          </div>
        }
      >
        {showImport && (
          <div className="mb-5">
            <ImportStudents schoolId={data.cls.school_id} classes={[data.cls]} onDone={reload} />
          </div>
        )}
        {data.students.length === 0 ? (
          <p className="font-semibold text-muted">{t("teach.students.none", "No students yet. Share the class code or import a CSV.")}</p>
        ) : (
          <div className="-mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="text-left text-xs font-extrabold uppercase text-muted">
                <tr>
                  <th className="py-2">{t("teach.col.name", "Name")}</th>
                  <th>{t("teach.col.active", "Last active")}</th>
                  <th className="text-right">{t("teach.col.minutes", "Min / wk")}</th>
                  <th className="text-right">{t("teach.col.streak", "Streak")}</th>
                  <th className="w-32">{t("teach.col.chapters", "Chapters")}</th>
                  <th>{t("teach.col.weak", "Weak topic")}</th>
                </tr>
              </thead>
              <tbody>
                {data.students.map((m) => {
                  const s = by.get(m.user_id);
                  return (
                    <tr key={m.user_id} className="border-t-2 border-line">
                      <td className="py-2.5">
                        <button className="font-extrabold hover:text-accent" onClick={() => openStudent(m.user_id)}>
                          {m.display_name}
                        </button>
                      </td>
                      <td className={clsx("font-semibold", daysSince(s?.last_active) >= 5 ? "text-bad" : "text-muted")}>{ago(s?.last_active)}</td>
                      <td className="text-right font-bold tabular-nums">{s && s.week === week ? s.minutes_week : 0}</td>
                      <td className="text-right font-bold tabular-nums">{s?.streak ?? 0}</td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Bar value={s && s.chapters_total ? s.chapters_done / s.chapters_total : 0} />
                          <span className="w-10 text-right text-xs font-bold tabular-nums text-muted">
                            {s?.chapters_done ?? 0}/{s?.chapters_total ?? 0}
                          </span>
                        </div>
                      </td>
                      <td className="max-w-[200px] truncate font-semibold text-muted">{s?.summary?.weak?.[0]?.title ?? "–"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Section>
    </div>
  );
}

/* ------------------------------ student drill-in ------------------------------ */

function StudentDrawer({ data, userId, onClose, reload }: { data: ClassData; userId: string | null; onClose: () => void; reload: () => Promise<void> }) {
  const t = useT();
  const ago = useAgo();
  const m = data.students.find((x) => x.user_id === userId);
  const s: SummaryRow | undefined = data.summaries.find((x) => x.user_id === userId);
  const kudos = data.kudos.filter((k) => k.to_id === userId);
  const days = Object.entries(s?.summary?.days ?? {});
  const maxDay = Math.max(30, ...days.map(([, v]) => v));
  return (
    <Drawer open={Boolean(userId && m)} onClose={onClose} title={m?.display_name ?? ""}>
      {m && (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-2">
            <Stat label={t("teach.d.minutes", "Min this week")} value={s?.week === weekKey() ? s.minutes_week : 0} />
            <Stat label={t("teach.d.streak", "Streak")} value={<span className="inline-flex items-center gap-1"><Flame className="h-5 w-5 text-streak" aria-hidden />{s?.streak ?? 0}</span>} />
            <Stat label={t("teach.d.accuracy", "Accuracy")} value={pct(s?.accuracy)} />
          </div>
          <p className="flex items-center gap-2 text-sm font-semibold text-muted">
            <Clock className="h-4 w-4" aria-hidden /> {t("teach.d.lastActive", "Last active: {when}", { when: ago(s?.last_active) })}
          </p>

          <div>
            <h3 className="mb-2 font-black">{t("teach.d.activity", "Activity, last 14 days")}</h3>
            {days.length ? (
              <div className="flex h-24 items-end gap-1" role="img" aria-label={t("teach.d.activityAria", "Minutes per day")}>
                {days.map(([d, v]) => (
                  <div key={d} className="flex flex-1 flex-col items-center justify-end" title={`${d}: ${v} min`}>
                    <div className="w-full rounded-t-md bg-accent" style={{ height: `${Math.max(v ? 6 : 2, (v / maxDay) * 100)}%`, opacity: v ? 1 : 0.2 }} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-semibold text-muted">{t("teach.d.noActivity", "No activity synced yet.")}</p>
            )}
          </div>

          <div>
            <h3 className="mb-2 font-black">{t("teach.d.mastery", "Mastery by subject")}</h3>
            <ul className="space-y-2">
              {Object.entries(s?.summary?.subjects ?? {}).map(([id, v]) => (
                <li key={id}>
                  <div className="mb-1 flex justify-between text-sm font-bold">
                    <span>{v.name}</span>
                    <span className="text-muted">{pct(v.mastery)}</span>
                  </div>
                  <Bar value={v.mastery} color={heat(v.mastery)} />
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TopicList title={t("teach.d.weak", "Weak topics")} items={s?.summary?.weak ?? []} empty={t("teach.d.weakNone", "None flagged")} />
            <TopicList title={t("teach.d.strong", "Strengths")} items={s?.summary?.strong ?? []} empty={t("teach.d.strongNone", "Building up")} />
          </div>

          <div>
            <h3 className="mb-2 font-black">{t("teach.d.mocks", "Mock tests")}</h3>
            {s?.summary?.mocks?.length ? (
              <ul className="space-y-1 text-sm">
                {s.summary.mocks.map((x, i) => (
                  <li key={i} className="flex justify-between gap-3 font-semibold">
                    <span className="truncate">{x.title}</span>
                    <span className="shrink-0 font-black tabular-nums">{pct(x.pct)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-semibold text-muted">{t("teach.d.noMocks", "No mock tests taken.")}</p>
            )}
          </div>

          <div>
            <h3 className="mb-2 flex items-center gap-2 font-black">
              <MessageCircleQuestion className="h-4 w-4" aria-hidden /> {t("teach.d.doubts", "Doubts asked")}
            </h3>
            {s?.summary?.doubts?.length ? (
              <ul className="space-y-2">
                {s.summary.doubts.map((d, i) => (
                  <li key={i} className="rounded-xl bg-surface-2 px-3 py-2 text-sm">
                    <p className="font-semibold">{d.text}</p>
                    <p className="mt-0.5 text-xs font-bold text-muted">
                      {d.source === "tutor" ? t("teach.d.viaTutor", "Asked Questy (AI tutor)") : t("teach.d.viaNotebook", "Saved in notebook")} · {ago(d.at)}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-semibold text-muted">{t("teach.d.noDoubts", "No doubts asked yet.")}</p>
            )}
          </div>

          <div>
            <h3 className="mb-2 font-black">{t("teach.d.assignments", "Assignments")}</h3>
            <ul className="space-y-1 text-sm">
              {data.assignments.map((a) => {
                const sub = data.submissions.find((x) => x.assignment_id === a.id && x.user_id === m.user_id && x.status === "done");
                return (
                  <li key={a.id} className="flex items-center justify-between gap-3 font-semibold">
                    <span className="truncate">{a.title}</span>
                    {sub ? (
                      <span className="inline-flex shrink-0 items-center gap-1 font-black text-good">
                        <Check className="h-4 w-4" aria-hidden /> {pct(sub.score)}
                      </span>
                    ) : (
                      <span className="shrink-0 text-muted">{t("teach.assign.pending", "Not yet")}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <KudosForm data={data} toId={m.user_id} toName={m.display_name} reload={reload} />
          {kudos.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {kudos.map((k) => (
                <li key={k.id} className="chip !text-sm">
                  {KUDOS_EMOJI[k.badge]} {t(`school.kudos.${k.badge}`, KUDOS_LABEL[k.badge])} · {ago(k.created_at)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Drawer>
  );
}

function TopicList({ title, items, empty }: { title: string; items: { id: string; title: string; subject: string; level: number }[]; empty: string }) {
  return (
    <div>
      <h3 className="mb-2 font-black">{title}</h3>
      {items.length ? (
        <ul className="space-y-1.5">
          {items.slice(0, 5).map((w) => (
            <li key={w.id} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: heat(w.level) }} aria-hidden />
              <span className="min-w-0 flex-1 truncate font-semibold">{w.title}</span>
              <span className="shrink-0 text-xs font-bold text-muted">{w.subject}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm font-semibold text-muted">{empty}</p>
      )}
    </div>
  );
}

function KudosForm({ data, toId, toName, reload }: { data: ClassData; toId: string; toName: string; reload: () => Promise<void> }) {
  const t = useT();
  const { user } = useAuth();
  const roles = useRoles();
  const toast = useUi((s) => s.toast);
  const [badge, setBadge] = useState<KudosBadge>("star");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const me = roles.teacherOf.find((x) => x.class_id === data.cls.id) ?? roles.principalOf[0];
  return (
    <div className="rounded-2xl border-2 border-line p-4">
      <h3 className="mb-3 flex items-center gap-2 font-black">
        <Heart className="h-4 w-4 text-bad" aria-hidden /> {t("teach.kudos.title", "Send kudos to {name}", { name: toName.split(" ")[0] })}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {KUDOS_BADGES.map((b) => (
          <button key={b} onClick={() => setBadge(b)} aria-pressed={badge === b} className={clsx("rounded-xl border-2 px-2.5 py-1.5 text-sm font-bold", badge === b ? "border-accent bg-accent-soft text-accent" : "border-line")}>
            {KUDOS_EMOJI[b]} {t(`school.kudos.${b}`, KUDOS_LABEL[b])}
          </button>
        ))}
      </div>
      <input className="input mt-3" maxLength={280} placeholder={t("teach.kudos.message", "Add a short note (optional)")} value={message} onChange={(e) => setMessage(e.target.value)} />
      <button
        className="btn-good mt-3 w-full"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          try {
            await sendKudos({ school_id: data.cls.school_id, class_id: data.cls.id, to_id: toId, badge, message: message.trim() || null, from_id: user?.id ?? DEMO_USER, from_name: me?.display_name ?? "Your teacher" });
            setMessage("");
            toast({ text: t("teach.kudos.sent", "Kudos sent to {name}", { name: toName.split(" ")[0] }) });
            await reload();
          } catch (e) {
            toast({ text: (e as Error).message });
          } finally {
            setBusy(false);
          }
        }}
      >
        <Users className="h-4 w-4" /> {t("teach.kudos.send", "Send kudos")}
      </button>
    </div>
  );
}

export type { RiskFlag };
