"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Award, BookOpen, Check, ClipboardCopy, ClipboardCheck, Flame, GraduationCap, ScrollText, Target, TrendingUp } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useMode } from "@/lib/useMode";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";
import { ProgressBar } from "@/components/ui/Progress";
import { heatmap, milestones, pattern, skills, subjectInsights, summaryText, type HeatCell, type InsightState, type Milestone } from "./analytics";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fmtDate = (d: Date) => d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function Insights() {
  const hydrated = useHydrated();
  const mode = useMode();
  const s = useLearner();
  const friendly = mode.id === "explore";

  const data = useMemo(() => {
    const st: InsightState = s;
    return {
      heat: heatmap(st),
      subjects: subjectInsights(st),
      pattern: pattern(st, friendly),
      skills: skills(st),
      milestones: milestones(st),
    };
  }, [s, friendly]);

  if (!hydrated) {
    return (
      <PageColumns rail={<RailFooter />}>
        <div className="h-8 w-48 animate-pulse rounded-lg bg-line" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => <div key={i} className="card h-24 animate-pulse" aria-busy />)}
        </div>
        <div className="card mt-6 h-56 animate-pulse" aria-busy />
      </PageColumns>
    );
  }

  const lessonsDone = Object.keys(s.lessons).length;
  const badgeCount = Object.keys(s.badges).length;

  if (friendly) {
    return (
      <PageColumns rail={<RailFooter />}>
        <p className="eyebrow">My learning</p>
        <h1 className="text-2xl font-black">Look how far you have come</h1>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <BigNumber icon={BookOpen} value={lessonsDone} label="lessons finished" />
          <BigNumber icon={Flame} value={s.streak.count} label={`day streak · best ${s.streak.best}`} />
          <BigNumber icon={Target} value={data.heat.activeDays} label="days you learned lately" />
          <BigNumber icon={Award} value={badgeCount} label="badges collected" />
        </div>
        <section className="card mt-6 p-5">
          <h2 className="text-lg font-black">Your learning days</h2>
          <p className="mt-1 text-sm font-semibold text-muted">Every bright square is a day you learned something.</p>
          <HeatmapGrid heat={data.heat} />
          {data.pattern.sentence && <p className="mt-4 rounded-lg bg-accent-soft px-4 py-3 font-bold text-accent">{data.pattern.sentence}</p>}
          {!data.pattern.sentence && <p className="mt-4 text-sm font-semibold text-muted">Finish a few more lessons and we will show when you learn best.</p>}
        </section>
        <MilestonesList items={data.milestones} friendly />
        <div className="mt-6">
          <CopySummary s={s} friendly />
        </div>
      </PageColumns>
    );
  }

  const strongest = data.skills.strongest;
  const weakest = data.skills.weakest;

  return (
    <PageColumns
      rail={
        <>
          <RailCard title="Summary">
            <dl className="space-y-2 text-sm font-semibold">
              <Row k="Lessons completed" v={lessonsDone} />
              <Row k="Active days (12 wk)" v={data.heat.activeDays} />
              <Row k="Current streak" v={`${s.streak.count} days`} />
              <Row k="Best streak" v={`${s.streak.best} days`} />
              <Row k="Total XP" v={s.xp.toLocaleString()} />
              <Row k="Badges" v={badgeCount} />
            </dl>
            <div className="mt-4">
              <CopySummary s={s} />
            </div>
          </RailCard>
          <RailFooter />
        </>
      }
    >
      <p className="eyebrow">Learning insights</p>
      <h1 className="text-2xl font-black">Your progress at a glance</h1>
      <p className="mt-1 font-semibold text-muted">Activity, accuracy and mastery across everything you have studied. All figures are computed from your own records on this device.</p>

      {/* Activity */}
      <section className="card mt-6 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-black">Activity, last 12 weeks</h2>
          <span className="text-sm font-semibold text-muted">{data.heat.activeDays} active days · {data.heat.total} items</span>
        </div>
        <HeatmapGrid heat={data.heat} />
        <p className="mt-4 text-sm font-semibold text-muted">
          {data.pattern.sentence ?? "Not enough activity yet to spot a pattern. A few sessions in, this will show when you tend to learn."}
          {data.pattern.sentence && <span className="text-muted/80"> Based on {data.pattern.sample} dated learning items.</span>}
        </p>
      </section>

      {/* Accuracy + mastery */}
      <section className="card mt-5 p-5">
        <h2 className="text-lg font-black">Accuracy and mastery by subject</h2>
        {data.subjects.length === 0 ? (
          <EmptyNote text="Complete a few practice sets to see trends." href="/practice" cta="Go to practice" />
        ) : (
          <ul className="mt-4 space-y-4">
            {data.subjects.map((sub) => (
              <li key={sub.slug}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate font-black">{sub.title}</span>
                  <span className="shrink-0 text-xs font-semibold text-muted">{sub.assessments} assessment{sub.assessments === 1 ? "" : "s"} · {sub.lessonsTouched} lesson{sub.lessonsTouched === 1 ? "" : "s"}</span>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <Bar label="Accuracy" value={sub.accuracy} color={sub.color} />
                  <Bar label="Avg mastery" value={sub.mastery} color="rgb(var(--accent))" />
                </div>
              </li>
            ))}
            {data.subjects.every((x) => x.accuracy === null) && <li className="text-sm font-semibold text-muted">Complete a few practice sets to see accuracy trends.</li>}
          </ul>
        )}
      </section>

      {/* Skills */}
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <section className="card p-5">
          <h2 className="flex items-center gap-2 text-lg font-black"><TrendingUp size={18} className="text-good" /> Strongest skills</h2>
          {strongest.length === 0 ? (
            <p className="mt-3 text-sm font-semibold text-muted">Reach Proficient on a skill and it will appear here.</p>
          ) : (
            <ul className="mt-3 divide-y-2 divide-line">
              {strongest.map((r) => <SkillItem key={r.id} r={r} />)}
            </ul>
          )}
        </section>
        <section className="card p-5">
          <h2 className="flex items-center gap-2 text-lg font-black"><Target size={18} className="text-warn" /> Needs practice</h2>
          {weakest.length === 0 ? (
            <p className="mt-3 text-sm font-semibold text-muted">Nothing is lagging behind. Start a new lesson to keep building.</p>
          ) : (
            <ul className="mt-3 divide-y-2 divide-line">
              {weakest.map((r) => <SkillItem key={r.id} r={r} practice />)}
            </ul>
          )}
          <Link href="/practice" className="btn-ghost mt-4 w-full justify-center text-sm">Open practice</Link>
        </section>
      </div>

      <MilestonesList items={data.milestones} />
    </PageColumns>
  );
}

/* ------------------------------------------------------------------ */
/* Pieces                                                              */
/* ------------------------------------------------------------------ */

function Row({ k, v }: { k: string; v: string | number }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted">{k}</dt>
      <dd className="font-black">{v}</dd>
    </div>
  );
}

function BigNumber({ icon: Icon, value, label }: { icon: typeof BookOpen; value: number; label: string }) {
  return (
    <div className="tile flex items-center gap-3 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"><Icon size={22} /></span>
      <span className="min-w-0">
        <span className="block text-3xl font-black leading-none">{value}</span>
        <span className="mt-1 block truncate text-xs font-bold text-muted">{label}</span>
      </span>
    </div>
  );
}

function Bar({ label, value, color }: { label: string; value: number | null; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs font-bold text-muted">
        <span>{label}</span>
        <span className="text-ink">{value === null ? "—" : `${Math.round(value * 100)}%`}</span>
      </div>
      <ProgressBar value={value ?? 0} height={10} color={color} label={label} />
    </div>
  );
}

function EmptyNote({ text, href, cta }: { text: string; href: string; cta: string }) {
  return (
    <div className="mt-4 rounded-xl border-2 border-dashed border-line px-4 py-6 text-center">
      <p className="font-bold text-muted">{text}</p>
      <Link href={href} className="btn-ghost mt-3 text-sm">{cta}</Link>
    </div>
  );
}

function SkillItem({ r, practice }: { r: ReturnType<typeof skills>["strongest"][number]; practice?: boolean }) {
  return (
    <li className="flex items-center gap-3 py-2.5">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: r.color }} aria-hidden />
      <span className="min-w-0 flex-1">
        <Link href={r.href} className="block truncate font-bold hover:text-accent">{r.title}</Link>
        <span className="block truncate text-xs font-semibold text-muted">{r.subject} · {r.levelName}{r.practice !== null ? ` · practice ${Math.round(r.practice * 100)}%` : ""}</span>
      </span>
      {practice && <Link href="/practice" className="btn-flat shrink-0 text-xs">Practise</Link>}
    </li>
  );
}

const MILESTONE_ICON: Record<Milestone["kind"], typeof BookOpen> = { lesson: BookOpen, test: Check, badge: Award, certificate: GraduationCap, streak: Flame };

function MilestonesList({ items, friendly }: { items: Milestone[]; friendly?: boolean }) {
  return (
    <section className="card mt-5 p-5">
      <h2 className="flex items-center gap-2 text-lg font-black"><ScrollText size={18} className="text-accent" /> {friendly ? "Things you have earned" : "Milestones"}</h2>
      {items.length === 0 ? (
        <p className="mt-3 text-sm font-semibold text-muted">{friendly ? "Finish your first lesson to start your collection." : "Your first lesson, unit test, badges and certificates will be recorded here."}</p>
      ) : (
        <ol className="mt-4 space-y-0">
          {items.map((m, i) => {
            const Icon = MILESTONE_ICON[m.kind];
            return (
              <li key={m.id} className="relative flex gap-3 pb-4 pl-1">
                {i < items.length - 1 && <span className="absolute left-[18px] top-8 h-[calc(100%-1.25rem)] w-0.5 bg-line" aria-hidden />}
                <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-line bg-surface text-accent"><Icon size={15} /></span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <span className="font-black">{m.title}</span>
                    <span className="text-xs font-semibold text-muted">{m.date ? fmtDate(m.date) : "ongoing"}</span>
                  </span>
                  <span className="block truncate text-sm font-semibold text-muted">{m.detail}</span>
                </span>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}

/** 12 × 7 activity grid, one column per week, with weekday and month labels. */
function HeatmapGrid({ heat }: { heat: ReturnType<typeof heatmap> }) {
  const cols = heat.weeks.length;
  const cell = (c: HeatCell) => {
    const title = c.future ? "" : `${fmtDate(c.date)}: ${c.count} item${c.count === 1 ? "" : "s"}`;
    return (
      <div
        key={c.key}
        title={title}
        aria-label={title || undefined}
        className={clsx("aspect-square w-full rounded-[3px]", c.future && "opacity-0")}
        style={{ background: c.level === 0 ? "rgb(var(--line))" : `rgb(var(--accent) / ${0.25 + c.level * 0.19})` }}
      />
    );
  };
  return (
    <div className="mt-4 overflow-x-auto">
      <div className="grid min-w-[420px] gap-1" style={{ gridTemplateColumns: `2.25rem repeat(${cols}, minmax(0, 1fr))` }}>
        <div />
        {heat.weeks.map((_, w) => {
          const m = heat.months.find((x) => x.col === w);
          return <div key={w} className="h-4 text-[10px] font-bold leading-4 text-muted">{m?.label ?? ""}</div>;
        })}
        {WEEKDAYS.map((label, d) => (
          <div key={label} className="contents">
            <div className="flex items-center text-[10px] font-bold leading-none text-muted">{d % 2 === 1 ? label : ""}</div>
            {heat.weeks.map((week) => cell(week[d]))}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-end gap-1 text-[10px] font-bold text-muted">
        <span className="mr-1">Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <span key={l} className="h-2.5 w-2.5 rounded-[2px]" style={{ background: l === 0 ? "rgb(var(--line))" : `rgb(var(--accent) / ${0.25 + l * 0.19})` }} />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
}

function CopySummary({ s, friendly }: { s: InsightState; friendly?: boolean }) {
  const [state, setState] = useState<"idle" | "done" | "failed">("idle");
  const copy = async () => {
    const text = summaryText(s, friendly);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
      }
      setState("done");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2200);
  };
  const Icon = state === "done" ? ClipboardCheck : ClipboardCopy;
  return (
    <button type="button" onClick={copy} className={clsx("w-full justify-center", state === "done" ? "btn-good" : "btn-primary")} aria-live="polite">
      <Icon size={16} className="mr-2" />
      {state === "done" ? "Copied" : state === "failed" ? "Could not copy" : friendly ? "Copy my progress" : "Copy progress summary"}
    </button>
  );
}
