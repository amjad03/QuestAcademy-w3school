"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Clock, FileText, Flame, Lock, Moon, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import clsx from "clsx";
import { useLearner, liveStreak } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useMode } from "@/lib/useMode";
import { useCatalog } from "@/components/shell/CatalogContext";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";
import { ProgressBar } from "@/components/ui/Progress";
import { GrownUpGate } from "@/components/modes/ModeSettings";
import { STICKERS, stickerById } from "@/components/modes/explore/stickers";
import { StickerTile } from "@/components/modes/explore/StickerTile";
import { useParent, TIME_LIMITS, type TimeLimit } from "./store";
import { currentWeek, formatRange, latestItem, summarise, suggestions, type Translate } from "./summary";
import { useT } from "@/i18n";
import { WeeklyReport } from "./WeeklyReport";

const GATE_KEY = "qa-parent-unlocked";

/** Parent dashboard for Explore / Adventure learners: this week's learning, progress, achievements and controls. */
export function ParentDashboard() {
  const hydrated = useHydrated();
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const t = useT();

  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem(GATE_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const pass = () => {
    try {
      sessionStorage.setItem(GATE_KEY, "1");
    } catch {
      /* storage blocked: unlock for this render only */
    }
    setUnlocked(true);
  };

  if (!hydrated || unlocked === null) {
    return (
      <PageColumns>
        <div className="h-8 w-48 animate-pulse rounded-lg bg-surface-2" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-2xl bg-surface-2" />
          ))}
        </div>
      </PageColumns>
    );
  }

  if (!unlocked) {
    return (
      <PageColumns>
        <div className="card mx-auto mt-10 max-w-md p-8 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-surface-2 text-muted">
            <Lock className="h-7 w-7" />
          </span>
          <h1 className="mt-4 text-2xl font-black">{t("parent.title", "Parent dashboard")}</h1>
          <p className="mt-2 text-sm font-semibold text-muted">{t("parent.gate.body", "A quick check keeps this page for grown-ups. You will stay unlocked until you close this tab.")}</p>
          <div className="mt-6 flex justify-center gap-2">
            <Link href="/learn" className="btn-ghost">
              {t("parent.gate.back", "Back to learning")}
            </Link>
            <GateButton onPass={pass} />
          </div>
        </div>
      </PageColumns>
    );
  }

  return <Dashboard />;
}

function GateButton({ onPass }: { onPass: () => void }) {
  const [open, setOpen] = useState(true);
  const t = useT();
  return (
    <>
      <button className="btn-primary" onClick={() => setOpen(true)}>
        {t("parent.gate.continue", "Continue")}
      </button>
      <AnimatePresence>{open && <GrownUpGate onPass={onPass} onCancel={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}

function Dashboard() {
  const profile = useLearner((s) => s.profile);
  const lessons = useLearner((s) => s.lessons);
  const assessments = useLearner((s) => s.assessments);
  const items = useLearner((s) => s.items);
  const stickers = useLearner((s) => s.stickers);
  const streak = useLearner((s) => liveStreak(s));
  const streakBest = useLearner((s) => s.streak.best);
  const mode = useMode();
  const catalog = useCatalog();
  const timeLimit = useParent((s) => s.timeLimit);
  const quietHours = useParent((s) => s.quietHours);
  const [report, setReport] = useState(false);
  const t = useT();
  const modeName: Record<string, string> = {
    sprout: t("shell.mode.sprout", "Sprout"),
    explore: t("shell.mode.explore", "Explore"),
    adventure: t("shell.mode.adventure", "Adventure"),
    focus: t("shell.mode.focus", "Focus"),
    mastery: t("shell.mode.mastery", "Mastery"),
    research: t("shell.mode.research", "Research"),
    professional: t("shell.mode.professional", "Professional"),
  };

  const week = useMemo(() => currentWeek(), []);
  const summary = useMemo(() => summarise({ lessons, assessments }, week), [lessons, assessments, week]);
  const recent = useMemo(() => latestItem(items, t), [items, t]);
  const steps = useMemo(() => suggestions({ course: profile.course, lessons, summary, streak }, t), [profile.course, lessons, summary, streak, t]);
  const courseTitle = catalog.find((c) => c.slug === profile.course)?.title ?? null;
  const earned = useMemo(
    () =>
      Object.entries(stickers)
        .sort((a, b) => b[1].localeCompare(a[1]))
        .map(([id]) => stickerById[id])
        .filter(Boolean),
    [stickers],
  );
  const firstName = profile.name ? profile.name.split(" ")[0] : t("parent.yourLearner", "your learner");
  const range = formatRange(week);
  const accuracyLabel = summary.accuracy === null ? "—" : `${Math.round(summary.accuracy * 100)}%`;

  return (
    <>
      <PageColumns rail={<ParentRail />}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t("parent.title", "Parent dashboard")}</p>
            <h1 className="mt-1 text-2xl font-black">{t("parent.heading", "How {name} is doing", { name: firstName })}</h1>
            <p className="mt-1 text-sm font-semibold text-muted">
              {t("parent.weekOf", "Week of {range} · {mode} mode", { range, mode: modeName[mode.id] ?? mode.name })}
            </p>
          </div>
          <button className="btn-ghost" onClick={() => setReport(true)}>
            <FileText className="mr-1.5 inline h-4 w-4" /> {t("parent.weeklyReport", "Weekly report")}
          </button>
        </div>

        {/* This week */}
        <section className="mt-6" aria-label={t("parent.thisWeek.label", "This week's learning")}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Stat icon={BookOpen} label={t("parent.stat.lessons", "Lessons this week")} value={String(summary.lessonsThisWeek)} hint={t("parent.stat.lessonsHint", "{n} completed overall", { n: summary.lessonsTotal })} />
            <Stat icon={Clock} label={t("parent.stat.minutes", "Estimated minutes")} value={String(summary.minutesThisWeek)} hint={t("parent.stat.minutesHint", "About 15 minutes per lesson")} />
            <Stat icon={Target} label={t("parent.stat.accuracy", "Practice accuracy")} value={accuracyLabel} hint={summary.assessmentsCount ? (summary.assessmentsCount === 1 ? t("parent.stat.accuracyHint.one", "Across {n} quiz and tests", { n: summary.assessmentsCount }) : t("parent.stat.accuracyHint.other", "Across {n} quizzes and tests", { n: summary.assessmentsCount })) : t("parent.stat.accuracyNone", "No practice recorded yet")} />
            <Stat icon={Flame} label={t("parent.stat.streak", "Streak")} value={streak === 1 ? t("parent.days.one", "{n} day", { n: streak }) : t("parent.days.other", "{n} days", { n: streak })} hint={t("parent.stat.streakBest", "Best so far: {n}", { n: streakBest })} tone={streak > 0 ? "good" : undefined} />
          </div>
        </section>

        {/* Working on now */}
        <section className="card mt-6 p-5" aria-label={t("parent.now.title", "Working on now")}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-black">{t("parent.now.title", "Working on now")}</h2>
            {profile.course && (
              <Link href={`/course/${profile.course}`} className="text-sm font-extrabold text-accent hover:underline">
                {t("parent.now.openCourse", "Open course")}
              </Link>
            )}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-surface-2 p-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted">{t("parent.now.currentCourse", "Current course")}</p>
              <p className="mt-1 text-base font-black">{courseTitle ?? t("parent.now.noCourse", "No course chosen yet")}</p>
              {!courseTitle && <p className="mt-1 text-sm font-semibold text-muted">{t("parent.now.chooseCourse", "Choose one together from the courses page.")}</p>}
            </div>
            <div className="rounded-2xl bg-surface-2 p-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-muted">{t("parent.now.recent", "Most recent activity")}</p>
              {recent ? (
                <>
                  <p className="mt-1 text-base font-black">
                    <span className="chip mr-2 align-middle">{recent.kind}</span>
                    {recent.href ? (
                      <Link href={recent.href} className="hover:underline">
                        {recent.label}
                      </Link>
                    ) : (
                      recent.label
                    )}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-muted">{relativeTime(recent.at, t)}</p>
                </>
              ) : (
                <p className="mt-1 text-sm font-semibold text-muted">{t("parent.now.nothing", "Nothing yet. Activity shows up here as soon as a lesson, video or game is finished.")}</p>
              )}
            </div>
          </div>
        </section>

        {/* Progress by subject */}
        <section className="card mt-6 p-5" aria-label={t("parent.progress.title", "Progress by subject")}>
          <h2 className="text-lg font-black">{t("parent.progress.title", "Progress by subject")}</h2>
          {summary.subjects.length === 0 ? (
            <p className="mt-2 text-sm font-semibold text-muted">{t("parent.progress.empty", "No lessons completed yet. Progress will appear here after the first one.")}</p>
          ) : (
            <ul className="mt-4 space-y-4">
              {summary.subjects.map((s) => (
                <li key={s.slug}>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <Link href={`/course/${s.slug}`} className="flex min-w-0 items-center gap-2 font-extrabold hover:underline">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl text-base" style={{ background: `linear-gradient(135deg, ${s.colors[0]}, ${s.colors[1]})` }} aria-hidden>
                        {s.icon}
                      </span>
                      <span className="truncate">{s.title}</span>
                    </Link>
                    <span className="shrink-0 font-bold tabular-nums text-muted">
                      {s.done} / {s.total}
                      {s.thisWeek > 0 && <span className="ml-2 text-good">{t("parent.progress.thisWeek", "+{n} this week", { n: s.thisWeek })}</span>}
                    </span>
                  </div>
                  <ProgressBar value={s.total ? s.done / s.total : 0} height={10} className="mt-2" color={s.colors[0]} label={t("parent.progress.barLabel", "{subject} progress", { subject: s.title })} />
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Suggested next steps */}
        <section className="card mt-6 p-5" aria-label={t("parent.next.title", "Suggested next steps")}>
          <h2 className="text-lg font-black">{t("parent.next.title", "Suggested next steps")}</h2>
          <ol className="mt-3 divide-y divide-line">
            {steps.map((st, i) => (
              <li key={st.title}>
                <Link href={st.href} className="group flex items-center gap-4 py-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-black text-accent">{i + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-extrabold group-hover:underline">{st.title}</span>
                    <span className="block text-sm font-semibold text-muted">{st.detail}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        {/* Stickers */}
        <section className="card mt-6 p-5" aria-label={t("parent.stickers.label", "Stickers and achievements")}>
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-black">{t("parent.stickers.title", "Stickers earned")}</h2>
            <span className="text-sm font-bold text-muted">
              {t("parent.stickers.count", "{n} of {total}", { n: earned.length, total: STICKERS.length })}
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-muted">{t("parent.stickers.note", "Stickers reward trying, finishing and improving, not only right answers.")}</p>
          {earned.length === 0 ? (
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-surface-2 p-4 text-sm font-semibold text-muted">
              <Sparkles className="h-5 w-5 shrink-0" /> {t("parent.stickers.empty", "The first sticker is earned by opening any lesson.")}
            </div>
          ) : (
            <div className="mt-4 flex flex-wrap gap-3">
              {earned.slice(0, 12).map((st) => (
                <StickerTile key={st.id} sticker={st} owned size={64} label />
              ))}
            </div>
          )}
          <Link href="/stickers" className="mt-4 inline-block text-sm font-extrabold text-accent hover:underline">
            {t("parent.stickers.seeAll", "See the whole sticker book")}
          </Link>
        </section>

        {/* Controls, shown inline below lg where the rail is hidden */}
        <div className="mt-6 lg:hidden">
          <ControlsCard />
        </div>
      </PageColumns>

      {report && (
        <WeeklyReport
          onClose={() => setReport(false)}
          data={{
            childName: profile.name,
            range,
            summary,
            streak,
            streakBest,
            stickers: earned.length,
            stickersTotal: STICKERS.length,
            courseTitle,
            timeLimit,
            quietHours: quietHours.enabled ? `${quietHours.start} – ${quietHours.end}` : null,
          }}
        />
      )}
    </>
  );
}

function Stat({ icon: Icon, label, value, hint, tone }: { icon: typeof BookOpen; label: string; value: string; hint?: string; tone?: "good" }) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-muted">
        <Icon className={clsx("h-4 w-4", tone === "good" && "text-good")} /> {label}
      </div>
      <p className="mt-2 text-2xl font-black tabular-nums">{value}</p>
      {hint && <p className="mt-0.5 text-xs font-semibold text-muted">{hint}</p>}
    </div>
  );
}

function ParentRail() {
  const t = useT();
  return (
    <>
      <ControlsCard />
      <RailCard title={t("parent.about.title", "About this page")}>
        <p className="text-sm font-semibold text-muted">{t("parent.about.body", "Numbers come from lessons, quizzes and games on this device. Minutes are an estimate of 15 per completed lesson.")}</p>
        <Link href="/settings" className="mt-3 inline-block text-sm font-extrabold text-accent hover:underline">
          {t("parent.about.changeMode", "Change the learning mode")}
        </Link>
      </RailCard>
      <RailFooter />
    </>
  );
}

function ControlsCard() {
  const timeLimit = useParent((s) => s.timeLimit);
  const quietHours = useParent((s) => s.quietHours);
  const setTimeLimit = useParent((s) => s.setTimeLimit);
  const setQuietHours = useParent((s) => s.setQuietHours);
  const t = useT();
  const mode = useMode();
  const joined = useLearner((s) => s.profile.socialOptIn);
  const nickname = useLearner((s) => s.profile.nickname);
  return (
    <RailCard title={t("parent.controls.title", "Parent controls")}>
      <div className="space-y-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-extrabold" htmlFor="qa-time-limit">
            <Clock className="h-4 w-4 text-muted" /> {t("parent.controls.timeLimit", "Daily time limit")}
          </label>
          <select id="qa-time-limit" className="input mt-2 !py-2 text-sm" value={timeLimit} onChange={(e) => setTimeLimit(Number(e.target.value) as TimeLimit)}>
            {TIME_LIMITS.map((m) => (
              <option key={m} value={m}>
                {m === 0 ? t("parent.controls.off", "Off") : t("parent.controls.minutes", "{n} minutes", { n: m })}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs font-semibold text-muted">{t("parent.controls.timeLimitNote", "Saved on this device. Shown here for now; a reminder inside lessons is coming.")}</p>
        </div>

        <div>
          <div className="flex items-center justify-between gap-2">
            <label className="flex items-center gap-2 text-sm font-extrabold" htmlFor="qa-quiet">
              <Moon className="h-4 w-4 text-muted" /> {t("parent.controls.quiet", "Quiet hours")}
            </label>
            <input id="qa-quiet" type="checkbox" className="h-5 w-5 accent-[rgb(var(--accent))]" checked={quietHours.enabled} onChange={(e) => setQuietHours({ enabled: e.target.checked })} />
          </div>
          <div className={clsx("mt-2 grid grid-cols-2 gap-2", !quietHours.enabled && "opacity-50")}>
            <label className="text-xs font-bold text-muted">
              {t("parent.controls.from", "From")}
              <input type="time" className="input mt-1 !py-2 text-sm" value={quietHours.start} disabled={!quietHours.enabled} onChange={(e) => setQuietHours({ start: e.target.value })} />
            </label>
            <label className="text-xs font-bold text-muted">
              {t("parent.controls.until", "Until")}
              <input type="time" className="input mt-1 !py-2 text-sm" value={quietHours.end} disabled={!quietHours.enabled} onChange={(e) => setQuietHours({ end: e.target.value })} />
            </label>
          </div>
        </div>

        {mode.social === "off" ? (
          <div className="flex items-start gap-3 rounded-2xl bg-good-soft p-3 text-sm">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-good" />
            <div>
              <p className="font-extrabold">{t("parent.controls.socialOff", "Leagues and social are off")}</p>
              <p className="mt-0.5 text-xs font-semibold text-muted">
                <Users className="mr-1 inline h-3 w-3" />
                {t("parent.controls.socialOffBodyMode", "{mode} never shows leaderboards, chat or other learners.", { mode: mode.name })}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3 rounded-2xl bg-surface-2 p-3 text-sm">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
            <div>
              <p className="font-extrabold">
                {joined && nickname ? t("parent.controls.leaguesJoined", "Leagues: joined as {name}", { name: nickname }) : t("parent.controls.leaguesNotJoined", "Leagues: not joined")}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-muted">
                {t("parent.controls.leaguesBody", "Weekly leagues show a nickname and points only. There is no chat.")}{" "}
                <Link href="/leaderboard" className="font-bold text-accent hover:underline">
                  {t("parent.controls.leaguesLink", "View leagues")}
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </RailCard>
  );
}

function relativeTime(iso: string, t: Translate) {
  const diff = Date.now() - new Date(iso).getTime();
  if (!Number.isFinite(diff)) return "";
  const m = Math.round(diff / 60_000);
  if (m < 1) return t("parent.time.justNow", "Just now");
  if (m < 60) return t("parent.time.minAgo", "{n} min ago", { n: m });
  const h = Math.round(m / 60);
  if (h < 24) return h === 1 ? t("parent.time.hourAgo.one", "{n} hour ago", { n: h }) : t("parent.time.hourAgo.other", "{n} hours ago", { n: h });
  const d = Math.round(h / 24);
  if (d < 7) return d === 1 ? t("parent.time.dayAgo.one", "{n} day ago", { n: d }) : t("parent.time.dayAgo.other", "{n} days ago", { n: d });
  return new Date(iso).toLocaleDateString(undefined, { day: "numeric", month: "short" });
}
