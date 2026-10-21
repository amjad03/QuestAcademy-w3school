"use client";

import { Printer, X } from "lucide-react";
import type { WeekSummary } from "./summary";

export interface ReportData {
  childName: string;
  range: string;
  summary: WeekSummary;
  streak: number;
  streakBest: number;
  stickers: number;
  stickersTotal: number;
  courseTitle: string | null;
  timeLimit: number;
  quietHours: string | null;
}

/** Printable one-page weekly report. Uses an inline stylesheet so it prints cleanly without the app shell. */
export function WeeklyReport({ data, onClose }: { data: ReportData; onClose: () => void }) {
  const { summary } = data;
  const pct = (n: number, d: number) => (d ? Math.round((n / d) * 100) : 0);
  return (
    <div className="qa-report fixed inset-0 z-[80] overflow-y-auto bg-bg">
      <style>{`
        .qa-report { color: rgb(var(--ink)); }
        .qa-report .sheet { max-width: 760px; margin: 0 auto; padding: 32px 24px 64px; }
        .qa-report table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .qa-report th, .qa-report td { text-align: left; padding: 8px 6px; border-bottom: 1px solid rgb(var(--line)); }
        .qa-report th { font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: rgb(var(--muted)); }
        .qa-report .num { text-align: right; font-variant-numeric: tabular-nums; }
        @media print {
          @page { margin: 16mm; }
          body * { visibility: hidden; }
          .qa-report, .qa-report * { visibility: visible; }
          .qa-report { position: static; overflow: visible; background: #fff; color: #111; }
          .qa-report .no-print { display: none !important; }
          .qa-report .sheet { max-width: none; padding: 0; }
          .qa-report .stat { border: 1px solid #ddd; }
          .qa-report th, .qa-report td { border-bottom-color: #ddd; }
          .qa-report th { color: #555; }
        }
      `}</style>
      <div className="no-print sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-line bg-surface px-4 py-3 sm:px-6">
        <p className="text-sm font-extrabold text-muted">Weekly report preview</p>
        <div className="flex gap-2">
          <button className="btn-primary !py-2 text-sm" onClick={() => window.print()}>
            <Printer className="mr-1.5 inline h-4 w-4" /> Print or save as PDF
          </button>
          <button className="btn-ghost !py-2 text-sm" onClick={onClose} aria-label="Close report">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="sheet">
        <p className="text-xs font-extrabold uppercase tracking-wide text-muted">Quest Academy · Weekly report</p>
        <h1 className="mt-1 text-3xl font-black">{data.childName || "Your learner"}</h1>
        <p className="mt-1 text-sm font-semibold text-muted">
          {data.range}
          {data.courseTitle ? ` · Current course: ${data.courseTitle}` : ""}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["Lessons completed", String(summary.lessonsThisWeek)],
            ["Estimated minutes", String(summary.minutesThisWeek)],
            ["Practice accuracy", summary.accuracy === null ? "—" : `${Math.round(summary.accuracy * 100)}%`],
            ["Streak", `${data.streak} day${data.streak === 1 ? "" : "s"}`],
          ].map(([k, v]) => (
            <div key={k} className="stat rounded-2xl border border-line bg-surface p-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted">{k}</p>
              <p className="mt-1 text-2xl font-black tabular-nums">{v}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-8 text-lg font-black">Progress by subject</h2>
        {summary.subjects.length === 0 ? (
          <p className="mt-2 text-sm font-semibold text-muted">No lessons completed yet.</p>
        ) : (
          <table className="mt-3">
            <thead>
              <tr>
                <th>Subject</th>
                <th className="num">This week</th>
                <th className="num">Completed</th>
                <th className="num">Course</th>
              </tr>
            </thead>
            <tbody>
              {summary.subjects.map((s) => (
                <tr key={s.slug}>
                  <td className="font-bold">{s.title}</td>
                  <td className="num">{s.thisWeek}</td>
                  <td className="num">
                    {s.done} / {s.total}
                  </td>
                  <td className="num">{pct(s.done, s.total)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <h2 className="mt-8 text-lg font-black">Recently completed</h2>
        {summary.recentLessons.length === 0 ? (
          <p className="mt-2 text-sm font-semibold text-muted">Nothing yet. The first lesson will appear here.</p>
        ) : (
          <ul className="mt-2 space-y-1 text-sm font-semibold">
            {summary.recentLessons.map((l) => (
              <li key={l.id}>
                {l.lesson.title} <span className="text-muted">· {l.subject.title}</span>
              </li>
            ))}
          </ul>
        )}

        <h2 className="mt-8 text-lg font-black">Achievements and settings</h2>
        <ul className="mt-2 space-y-1 text-sm font-semibold">
          <li>
            Stickers earned: {data.stickers} of {data.stickersTotal}
          </li>
          <li>Best streak: {data.streakBest} days</li>
          <li>Daily time limit: {data.timeLimit ? `${data.timeLimit} minutes` : "off"}</li>
          <li>Quiet hours: {data.quietHours ?? "off"}</li>
          <li>Leagues and social features: off (Explore mode)</li>
        </ul>

        <p className="mt-10 text-xs font-semibold text-muted">
          Minutes are estimated at 15 per completed lesson. Practice accuracy is the average best score across quizzes and tests. Generated{" "}
          {new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}.
        </p>
      </div>
    </div>
  );
}
