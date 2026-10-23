"use client";

import { Printer, X } from "lucide-react";
import type { WeekSummary } from "./summary";
import { useT } from "@/i18n";

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
  const t = useT();
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
        <p className="text-sm font-extrabold text-muted">{t("parent.report.preview", "Weekly report preview")}</p>
        <div className="flex gap-2">
          <button className="btn-primary !py-2 text-sm" onClick={() => window.print()}>
            <Printer className="mr-1.5 inline h-4 w-4" /> {t("parent.report.print", "Print or save as PDF")}
          </button>
          <button className="btn-ghost !py-2 text-sm" onClick={onClose} aria-label={t("parent.report.close", "Close report")}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="sheet">
        <p className="text-xs font-extrabold uppercase tracking-wide text-muted">{t("parent.report.eyebrow", "Quest Academy · Weekly report")}</p>
        <h1 className="mt-1 text-3xl font-black">{data.childName || t("parent.report.yourLearner", "Your learner")}</h1>
        <p className="mt-1 text-sm font-semibold text-muted">
          {data.range}
          {data.courseTitle ? ` · ${t("parent.report.currentCourse", "Current course: {title}", { title: data.courseTitle })}` : ""}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            [t("parent.report.lessons", "Lessons completed"), String(summary.lessonsThisWeek)],
            [t("parent.stat.minutes", "Estimated minutes"), String(summary.minutesThisWeek)],
            [t("parent.stat.accuracy", "Practice accuracy"), summary.accuracy === null ? "—" : `${Math.round(summary.accuracy * 100)}%`],
            [t("parent.stat.streak", "Streak"), data.streak === 1 ? t("parent.days.one", "{n} day", { n: data.streak }) : t("parent.days.other", "{n} days", { n: data.streak })],
          ].map(([k, v]) => (
            <div key={k} className="stat rounded-2xl border border-line bg-surface p-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted">{k}</p>
              <p className="mt-1 text-2xl font-black tabular-nums">{v}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-8 text-lg font-black">{t("parent.progress.title", "Progress by subject")}</h2>
        {summary.subjects.length === 0 ? (
          <p className="mt-2 text-sm font-semibold text-muted">{t("parent.report.noLessons", "No lessons completed yet.")}</p>
        ) : (
          <table className="mt-3">
            <thead>
              <tr>
                <th>{t("parent.report.subject", "Subject")}</th>
                <th className="num">{t("parent.report.thisWeek", "This week")}</th>
                <th className="num">{t("parent.report.completed", "Completed")}</th>
                <th className="num">{t("parent.report.course", "Course")}</th>
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

        <h2 className="mt-8 text-lg font-black">{t("parent.report.recent", "Recently completed")}</h2>
        {summary.recentLessons.length === 0 ? (
          <p className="mt-2 text-sm font-semibold text-muted">{t("parent.report.recentEmpty", "Nothing yet. The first lesson will appear here.")}</p>
        ) : (
          <ul className="mt-2 space-y-1 text-sm font-semibold">
            {summary.recentLessons.map((l) => (
              <li key={l.id}>
                {l.lesson.title} <span className="text-muted">· {l.subject.title}</span>
              </li>
            ))}
          </ul>
        )}

        <h2 className="mt-8 text-lg font-black">{t("parent.report.achievements", "Achievements and settings")}</h2>
        <ul className="mt-2 space-y-1 text-sm font-semibold">
          <li>
            {t("parent.report.stickers", "Stickers earned: {n} of {total}", { n: data.stickers, total: data.stickersTotal })}
          </li>
          <li>{t("parent.report.bestStreak", "Best streak: {n} days", { n: data.streakBest })}</li>
          <li>{t("parent.report.timeLimit", "Daily time limit: {value}", { value: data.timeLimit ? t("parent.controls.minutes", "{n} minutes", { n: data.timeLimit }) : t("parent.report.off", "off") })}</li>
          <li>{t("parent.report.quietHours", "Quiet hours: {value}", { value: data.quietHours ?? t("parent.report.off", "off") })}</li>
          <li>{t("parent.report.social", "Leagues and social features: off (Explore mode)")}</li>
        </ul>

        <p className="mt-10 text-xs font-semibold text-muted">
          {t("parent.report.footnote", "Minutes are estimated at 15 per completed lesson. Practice accuracy is the average best score across quizzes and tests. Generated {date}.", { date: new Date().toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" }) })}
        </p>
      </div>
    </div>
  );
}
