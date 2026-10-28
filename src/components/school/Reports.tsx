"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, Clock, Flame, MessageCircle, Target, ThumbsUp, TriangleAlert } from "lucide-react";
import { useT } from "@/i18n";
import { fetchReports, useSchool } from "@/lib/school/client";
import { KUDOS_EMOJI, KUDOS_LABEL } from "@/lib/school/report";
import type { WeeklyReportRow } from "@/lib/school/types";
import { DemoBanner, Empty, PageTitle, PageWrap, pct } from "./ui";

/** Weekly parent reports stored by the cron job (sent or not). */
export function Reports() {
  const t = useT();
  const demo = useSchool((s) => s.demo);
  const [rows, setRows] = useState<WeeklyReportRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(0);
  useEffect(() => {
    fetchReports().then(setRows, (e) => setError(e.message));
  }, [demo]);

  return (
    <PageWrap className="max-w-[820px]">
      <DemoBanner />
      <PageTitle eyebrow={t("reports.eyebrow", "Weekly reports")} title={t("reports.title", "Progress reports")} sub={t("reports.sub", "A summary every Sunday evening: learning time, strengths, topics to practise and teacher kudos.")} />
      {error && <p className="mb-4 rounded-2xl bg-bad-soft px-4 py-3 font-bold text-bad">{error}</p>}
      {!rows ? (
        <div className="h-72 animate-pulse rounded-2xl bg-surface-2" />
      ) : rows.length === 0 ? (
        <Empty title={t("reports.none", "No reports yet")} body={t("reports.noneBody", "The first report arrives on Sunday evening after a week of learning.")} />
      ) : (
        <div className="space-y-3">
          {rows.map((r, i) => (
            <ReportCard key={r.id} row={r} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      )}
    </PageWrap>
  );
}

function ReportCard({ row, open, onToggle }: { row: WeeklyReportRow; open: boolean; onToggle: () => void }) {
  const t = useT();
  const r = row.report;
  const delta = r.minutesPrev !== null ? r.minutes - r.minutesPrev : null;
  return (
    <article className="card overflow-hidden">
      <button className="flex w-full flex-wrap items-center gap-3 px-5 py-4 text-left" onClick={onToggle} aria-expanded={open}>
        <div className="min-w-0 flex-1">
          <p className="font-black">{r.student}</p>
          <p className="text-sm font-bold text-muted">
            {r.weekLabel}
            {r.className ? ` · ${r.className}` : ""}
          </p>
        </div>
        <span className={clsx("chip", row.status === "sent" ? "!bg-good-soft !text-good" : row.status === "failed" ? "!bg-bad-soft !text-bad" : "")}>
          {row.status === "sent" ? (
            <>
              <MessageCircle className="h-3.5 w-3.5" /> {row.channel === "email" ? t("reports.sentEmail", "Emailed") : t("reports.sentWa", "Sent on WhatsApp")}
            </>
          ) : row.status === "failed" ? (
            t("reports.failed", "Sending failed")
          ) : (
            t("reports.notSent", "Not sent (in app only)")
          )}
        </span>
      </button>
      {open && (
        <div className="space-y-5 border-t-2 border-line px-5 py-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Fact icon={Clock} label={t("reports.minutes", "Learning time")} value={t("reports.minutesV", "{n} min", { n: r.minutes })} hint={delta !== null ? (delta >= 0 ? t("reports.up", "+{n} vs last week", { n: delta }) : t("reports.down", "{n} vs last week", { n: delta })) : undefined} />
            <Fact icon={CheckCircle2} label={t("reports.chapters", "Chapters done")} value={`${r.chaptersDone}/${r.chaptersTotal}`} />
            <Fact icon={Flame} label={t("reports.streak", "Streak")} value={t("reports.days", "{n} days", { n: r.streak })} />
            <Fact icon={Target} label={t("reports.xp", "XP this week")} value={r.xp} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <List icon={ThumbsUp} tone="good" title={t("reports.strengths", "Strengths")} items={r.strengths} empty={t("reports.strengthsNone", "Building up")} />
            <List icon={TriangleAlert} tone="bad" title={t("reports.weak", "Needs practice")} items={r.weak} empty={t("reports.weakNone", "Nothing flagged")} />
          </div>
          {r.mocks.length > 0 && <List title={t("reports.mocks", "Mock tests")} items={r.mocks.map((m) => `${m.title}: ${pct(m.pct)}`)} empty="" />}
          {r.assignments.length > 0 && <List title={t("reports.assignments", "Assignments")} items={r.assignments.map((a) => `${a.done ? "✓" : "○"} ${a.title}${a.score !== null ? ` (${pct(a.score)})` : ""}`)} empty="" />}
          {r.kudos.length > 0 && (
            <div>
              <h3 className="mb-2 font-black">{t("reports.kudos", "Teacher kudos")}</h3>
              <ul className="space-y-1 text-sm font-semibold">
                {r.kudos.map((k, i) => (
                  <li key={i}>
                    {KUDOS_EMOJI[k.badge]} <b>{t(`school.kudos.${k.badge}`, KUDOS_LABEL[k.badge])}</b> · {k.from}
                    {k.message ? `: “${k.message}”` : ""}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="rounded-2xl bg-accent-soft p-4">
            <h3 className="mb-2 font-black text-accent">{t("reports.focus", "Next week's focus")}</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm font-semibold">
              {r.focus.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}

function Fact({ icon: Icon, label, value, hint }: { icon: typeof Clock; label: string; value: React.ReactNode; hint?: string }) {
  return (
    <div className="rounded-2xl bg-surface-2 p-3">
      <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-muted">
        <Icon className="h-3.5 w-3.5" aria-hidden /> {label}
      </p>
      <p className="mt-1 text-xl font-black">{value}</p>
      {hint && <p className="text-xs font-bold text-muted">{hint}</p>}
    </div>
  );
}

function List({ title, items, empty, icon: Icon, tone }: { title: string; items: string[]; empty: string; icon?: typeof Clock; tone?: "good" | "bad" }) {
  return (
    <div>
      <h3 className={clsx("mb-2 flex items-center gap-2 font-black", tone === "good" && "text-good", tone === "bad" && "text-bad")}>
        {Icon && <Icon className="h-4 w-4" aria-hidden />} {title}
      </h3>
      {items.length ? (
        <ul className="space-y-1 text-sm font-semibold">
          {items.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm font-semibold text-muted">{empty}</p>
      )}
    </div>
  );
}
