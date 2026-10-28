"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ClipboardCopy, Download, FileText, Mail, Plus } from "lucide-react";
import { useT } from "@/i18n";
import { useUi } from "@/lib/ui";
import { copyText } from "@/lib/clipboard";
import { BOARDS } from "@/lib/modes";
import { weekKey } from "@/lib/gamification";
import { authedPost, createClass, fetchSchool, isDemo, useRoles, useSchool, type SchoolData } from "@/lib/school/client";
import { avg, weakAreas } from "@/lib/school/analytics";
import { Bar, DemoBanner, Empty, PageTitle, PageWrap, Section, Stat, Tabs, daysSince, downloadCsv, heat, pct, useAgo } from "./ui";
import { ImportStudents } from "./ImportStudents";

type Tab = "overview" | "classes" | "teachers" | "setup";

export function PrincipalDashboard() {
  const t = useT();
  const roles = useRoles();
  const demo = useSchool((s) => s.demo);
  const schoolId = roles.principalOf[0]?.school_id ?? null;
  const [data, setData] = useState<SchoolData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("overview");

  const load = useCallback(async () => {
    if (!schoolId) return;
    try {
      setData(await fetchSchool(schoolId));
    } catch (e) {
      setError((e as Error).message);
    }
  }, [schoolId]);
  useEffect(() => void load(), [load, demo]);

  if (!schoolId) return <PageWrap><Empty title={t("school.none", "No school yet")} action={<Link className="btn-primary" href="/join?new=school">{t("school.create", "Set up your school")}</Link>} /></PageWrap>;

  return (
    <PageWrap>
      <DemoBanner />
      <PageTitle
        eyebrow={t("school.eyebrow", "My school")}
        title={data?.school.name ?? roles.principalOf[0]?.schools?.name ?? t("school.loading", "Loading…")}
        sub={data ? t("school.sub", "{classes} classes · {students} students · week of {week}", { classes: data.classes.length, students: data.summaries.length, week: new Date(`${weekKey()}T00:00:00`).toLocaleDateString(undefined, { day: "numeric", month: "short" }) }) : undefined}
        actions={
          data && (
            <>
              <button className="btn-ghost !py-2 text-sm" onClick={() => exportCsv(data)}>
                <Download className="h-4 w-4" /> CSV
              </button>
              <button className="btn-ghost !py-2 text-sm" onClick={() => window.print()}>
                <FileText className="h-4 w-4" /> PDF
              </button>
            </>
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
          <div className="print:hidden">
            <Tabs<Tab>
              value={tab}
              onChange={setTab}
              items={[
                { id: "overview", label: t("school.tab.overview", "Overview") },
                { id: "classes", label: t("school.tab.classes", "Classes"), count: data.classes.length },
                { id: "teachers", label: t("school.tab.teachers", "Teachers"), count: data.staff.filter((s) => s.role === "teacher").length },
                { id: "setup", label: t("school.tab.setup", "Setup") },
              ]}
            />
          </div>
          <div className="print-area">
            {(tab === "overview" || tab === "classes") && <Overview data={data} detailed={tab === "classes"} />}
            {tab === "teachers" && <Teachers data={data} />}
            {tab === "setup" && <Setup data={data} reload={load} />}
          </div>
        </>
      )}
    </PageWrap>
  );
}

function exportCsv(d: SchoolData) {
  const cls = new Map(d.classes.map((c) => [c.id, `${c.name} ${c.section}`]));
  const week = weekKey();
  downloadCsv(`${d.school.name.replace(/\W+/g, "-")}-${week}.csv`, [
    ["Student", "Class", "Last active", "Minutes this week", "Weekly XP", "Streak", "Chapters done", "Chapters total", "Completion %", "Mock average %", "Accuracy %", "Weak topics"],
    ...d.summaries.map((s) => [
      s.display_name,
      cls.get(s.class_id ?? "") ?? "",
      s.last_active?.slice(0, 10) ?? "",
      s.week === week ? s.minutes_week : 0,
      s.week === week ? s.weekly_xp : 0,
      s.streak,
      s.chapters_done,
      s.chapters_total,
      s.chapters_total ? Math.round((s.chapters_done / s.chapters_total) * 100) : "",
      s.mock_avg === null ? "" : Math.round(s.mock_avg * 100),
      s.accuracy === null ? "" : Math.round(s.accuracy * 100),
      (s.summary?.weak ?? []).slice(0, 3).map((w) => w.title).join("; "),
    ]),
  ]);
}

function Overview({ data, detailed }: { data: SchoolData; detailed: boolean }) {
  const t = useT();
  const week = weekKey();
  const s = data.summaries;
  const active = s.filter((x) => daysSince(x.last_active) < 7).length;
  const minutes = s.reduce((a, x) => a + (x.week === week ? x.minutes_week : 0), 0);
  const weak = useMemo(() => weakAreas(s, 10), [s]);

  // Subject mastery per class (columns: subjects seen in summaries).
  const subjects = useMemo(() => {
    const m = new Map<string, string>();
    for (const x of s) for (const [id, v] of Object.entries(x.summary?.subjects ?? {})) m.set(id, v.name);
    return [...m].slice(0, 8);
  }, [s]);
  const rows = data.classes.map((c) => {
    const ss = s.filter((x) => x.class_id === c.id);
    const o = data.overview.find((x) => x.class_id === c.id);
    return {
      c,
      n: ss.length,
      active: ss.filter((x) => daysSince(x.last_active) < 7).length,
      minutes: avg(ss.map((x) => (x.week === week ? x.minutes_week : 0))),
      completion: o?.completion ?? avg(ss.map((x) => (x.chapters_total ? x.chapters_done / x.chapters_total : null))),
      mock: o?.mock_avg ?? avg(ss.map((x) => x.mock_avg)),
      subj: Object.fromEntries(subjects.map(([id]) => [id, avg(ss.map((x) => x.summary?.subjects?.[id]?.mastery ?? null))])),
    };
  });
  const maxMin = Math.max(1, ...rows.map((r) => r.minutes ?? 0));

  return (
    <div className="space-y-5">
      {!detailed && (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          <Stat label={t("school.stat.students", "Students")} value={s.length} />
          <Stat label={t("school.stat.active", "Active this week")} value={`${active}`} hint={pct(active / Math.max(1, s.length))} tone={active / Math.max(1, s.length) < 0.5 ? "bad" : "good"} />
          <Stat label={t("school.stat.minutes", "Learning hours")} value={Math.round(minutes / 60)} hint={t("school.stat.minutesHint", "{n} min per student", { n: Math.round(minutes / Math.max(1, s.length)) })} />
          <Stat label={t("school.stat.completion", "Chapters done")} value={pct(avg(s.map((x) => (x.chapters_total ? x.chapters_done / x.chapters_total : null))))} />
          <Stat label={t("school.stat.mock", "Mock average")} value={pct(avg(s.map((x) => x.mock_avg)))} />
        </div>
      )}

      <Section title={t("school.compare", "Class comparison")}>
        <div className="-mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="text-left text-xs font-extrabold uppercase text-muted">
              <tr>
                <th className="py-2">{t("school.col.class", "Class")}</th>
                <th className="text-right">{t("school.col.students", "Students")}</th>
                <th className="text-right">{t("school.col.active", "Active")}</th>
                <th className="w-40">{t("school.col.minutes", "Avg min / week")}</th>
                <th className="text-right">{t("school.col.completion", "Completion")}</th>
                <th className="text-right">{t("school.col.mock", "Mock avg")}</th>
                {detailed && subjects.map(([id, name]) => <th key={id} className="text-center">{name}</th>)}
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.c.id} className="border-t-2 border-line">
                  <td className="py-2.5 font-extrabold">
                    {r.c.name} {r.c.section}
                  </td>
                  <td className="text-right font-bold tabular-nums">{r.n}</td>
                  <td className="text-right font-bold tabular-nums">{r.active}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Bar value={(r.minutes ?? 0) / maxMin} />
                      <span className="w-8 text-right text-xs font-bold tabular-nums text-muted">{Math.round(r.minutes ?? 0)}</span>
                    </div>
                  </td>
                  <td className="text-right font-bold tabular-nums">{pct(r.completion)}</td>
                  <td className="text-right font-bold tabular-nums">{pct(r.mock)}</td>
                  {detailed &&
                    subjects.map(([id]) => (
                      <td key={id} className="px-1 text-center">
                        <span className="inline-block min-w-[44px] rounded-lg px-1.5 py-0.5 text-xs font-black text-white" style={{ background: heat(r.subj[id]) }}>
                          {pct(r.subj[id])}
                        </span>
                      </td>
                    ))}
                  <td className="text-right print:hidden">
                    <Link className="btn-flat !px-2 !py-1 text-xs" href={`/teach?class=${r.c.id}`}>
                      {t("school.open", "Open")}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {detailed && <p className="mt-3 text-xs font-semibold text-muted">{t("school.subjectNote", "Subject columns show average mastery across the class's chapters.")}</p>}
      </Section>

      {!detailed && (
        <Section title={t("school.weak", "Weak areas across the school")}>
          {weak.length === 0 ? (
            <p className="font-semibold text-muted">{t("school.weakNone", "Weak areas show up once students practise.")}</p>
          ) : (
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
              {weak.map((w) => (
                <li key={w.id} className="flex items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: heat(w.avgLevel) }} aria-hidden />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-extrabold">{w.title}</span>
                    <span className="block truncate text-xs font-semibold text-muted">{w.subject}</span>
                  </span>
                  <span className="chip shrink-0">{t("school.weakN", "{n} students", { n: w.students })}</span>
                </li>
              ))}
            </ul>
          )}
        </Section>
      )}
    </div>
  );
}

function Teachers({ data }: { data: SchoolData }) {
  const t = useT();
  const ago = useAgo();
  const cls = new Map(data.classes.map((c) => [c.id, `${c.name} ${c.section}`]));
  const byUser = new Map<string, { name: string; classes: string[]; lastSeen: string | null; principal: boolean }>();
  for (const m of data.staff) {
    const cur = byUser.get(m.user_id) ?? { name: m.display_name, classes: [], lastSeen: m.last_seen_at ?? null, principal: false };
    if (m.class_id) cur.classes.push(cls.get(m.class_id) ?? "");
    if (m.role === "principal") cur.principal = true;
    if (m.last_seen_at && (!cur.lastSeen || m.last_seen_at > cur.lastSeen)) cur.lastSeen = m.last_seen_at;
    byUser.set(m.user_id, cur);
  }
  const list = [...byUser].filter(([, v]) => v.classes.length);
  return (
    <Section title={t("school.teachers", "Teacher activity (last 30 days)")}>
      {list.length === 0 ? (
        <p className="font-semibold text-muted">{t("school.teachersNone", "No teachers have joined yet. Invite them from Setup.")}</p>
      ) : (
        <div className="-mx-4 overflow-x-auto px-4 sm:-mx-5 sm:px-5">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="text-left text-xs font-extrabold uppercase text-muted">
              <tr>
                <th className="py-2">{t("school.col.teacher", "Teacher")}</th>
                <th>{t("school.col.classes", "Classes")}</th>
                <th>{t("school.col.lastSeen", "Last seen")}</th>
                <th className="text-right">{t("school.col.assigned", "Assignments")}</th>
                <th className="text-right">{t("school.col.kudos", "Kudos sent")}</th>
              </tr>
            </thead>
            <tbody>
              {list.map(([uid, v]) => (
                <tr key={uid} className="border-t-2 border-line">
                  <td className="py-2.5 font-extrabold">{v.name}</td>
                  <td className="font-semibold text-muted">{v.classes.join(", ")}</td>
                  <td className={daysSince(v.lastSeen) > 7 ? "font-semibold text-bad" : "font-semibold text-muted"}>{ago(v.lastSeen)}</td>
                  <td className="text-right font-bold tabular-nums">{data.assignments.filter((a) => a.created_by === uid).length}</td>
                  <td className="text-right font-bold tabular-nums">{data.kudos.filter((k) => k.from_id === uid).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Section>
  );
}

function Setup({ data, reload }: { data: SchoolData; reload: () => Promise<void> }) {
  const t = useT();
  const toast = useUi((s) => s.toast);
  const [name, setName] = useState("");
  const [section, setSection] = useState("A");
  const [grade, setGrade] = useState("");
  const [board, setBoard] = useState(data.school.board ?? "cbse");
  const [email, setEmail] = useState("");
  const [inviteClass, setInviteClass] = useState("");
  const [link, setLink] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const copy = (s: string) => copyText(s).then(() => toast({ text: t("school.copied", "Copied") }));

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <Section title={t("school.setup.classes", "Classes and join codes")} className="lg:col-span-2">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {data.classes.map((c) => (
            <li key={c.id} className="rounded-2xl bg-surface-2 p-3">
              <p className="font-extrabold">
                {c.name} {c.section}
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                <button className="chip !text-sm" onClick={() => copy(c.student_code ?? "")} title={t("school.setup.studentCode", "Student code")}>
                  <ClipboardCopy className="h-3.5 w-3.5" /> {t("school.setup.students", "Students")}: <b className="font-mono">{c.student_code}</b>
                </button>
                <button className="chip !text-sm" onClick={() => copy(c.teacher_code ?? "")} title={t("school.setup.teacherCode", "Teacher code")}>
                  <ClipboardCopy className="h-3.5 w-3.5" /> {t("school.setup.teachers", "Teachers")}: <b className="font-mono">{c.teacher_code}</b>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <form
          className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_90px_110px_150px_auto]"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!name.trim()) return;
            try {
              await createClass(data.school.id, { name: name.trim(), section: section.trim() || "A", grade: grade.trim() || /(\d{1,2})/.exec(name)?.[1] || null, board });
              setName("");
              toast({ text: t("school.setup.classAdded", "Class added") });
              await reload();
            } catch (err) {
              toast({ text: (err as Error).message });
            }
          }}
        >
          <input className="input" placeholder={t("school.setup.className", "Class name, e.g. Class 10")} value={name} onChange={(e) => setName(e.target.value)} aria-label={t("school.setup.className", "Class name, e.g. Class 10")} />
          <input className="input" placeholder={t("school.setup.section", "Section")} value={section} onChange={(e) => setSection(e.target.value)} aria-label={t("school.setup.section", "Section")} />
          <input className="input" placeholder={t("school.setup.grade", "Grade")} value={grade} onChange={(e) => setGrade(e.target.value)} aria-label={t("school.setup.grade", "Grade")} />
          <select className="input" value={board} onChange={(e) => setBoard(e.target.value)} aria-label={t("school.setup.board", "Board")}>
            {BOARDS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </select>
          <button className="btn-primary" type="submit">
            <Plus className="h-4 w-4" /> {t("school.setup.add", "Add")}
          </button>
        </form>
      </Section>

      <Section title={t("school.setup.invite", "Invite a teacher")}>
        <p className="mb-3 text-sm font-semibold text-muted">{t("school.setup.inviteHelp", "Send an invitation link, or share a class's teacher code.")}</p>
        <div className="space-y-2">
          <input className="input" type="email" placeholder={t("school.setup.email", "teacher@school.edu")} value={email} onChange={(e) => setEmail(e.target.value)} aria-label={t("school.setup.emailLabel", "Teacher's email")} />
          <select className="input" value={inviteClass} onChange={(e) => setInviteClass(e.target.value)} aria-label={t("school.setup.inviteClass", "Class (optional)")}>
            <option value="">{t("school.setup.anyClass", "No class yet (they join with a code)")}</option>
            {data.classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} {c.section}
              </option>
            ))}
          </select>
          <button
            className="btn-primary w-full"
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              try {
                if (isDemo()) setLink(`${location.origin}/join?invite=demo-invite`);
                else {
                  const r = await authedPost<{ link: string; emailed: boolean }>("/api/school/invite", { schoolId: data.school.id, email, classId: inviteClass || null });
                  setLink(r.link);
                  toast({ text: r.emailed ? t("school.setup.emailed", "Invitation emailed") : t("school.setup.linkReady", "Invitation link ready") });
                }
              } catch (err) {
                toast({ text: (err as Error).message });
              } finally {
                setBusy(false);
              }
            }}
          >
            <Mail className="h-4 w-4" /> {t("school.setup.inviteCta", "Create invitation")}
          </button>
          {link && (
            <button className="w-full break-all rounded-xl bg-surface-2 px-3 py-2 text-left font-mono text-xs font-bold" onClick={() => copy(link)}>
              {link}
            </button>
          )}
        </div>
      </Section>

      <Section title={t("school.setup.import", "Import students")}>
        <ImportStudents schoolId={data.school.id} classes={data.classes} onDone={reload} />
      </Section>
    </div>
  );
}
