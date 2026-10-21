/**
 * Smart study planner (Focus revision plans, Professional schedules).
 *
 * Given what's left to learn, a target date and the learner's weekly hours,
 * it lays tasks onto study days:
 *   - weakest / highest-priority items first (but keeping syllabus order among equals)
 *   - a revision day every 6th study day, and a mock/review block near the end
 *   - the last ~15% of the window reserved for revision and practice tests
 * Because the plan is always rebuilt from "today" using live progress, it
 * re-plans automatically when the learner falls behind or races ahead.
 */
import { dayKey } from "./gamification";

export interface PlanItem {
  id: string;
  title: string;
  /** Estimated minutes to complete. */
  minutes: number;
  href: string;
  done: boolean;
  /** Higher = schedule sooner. Use e.g. chapter weightage × (1 − mastery). */
  priority?: number;
  /** Group label shown in the UI (subject, module…). */
  group?: string;
}

export interface PlanTask {
  id: string;
  title: string;
  minutes: number;
  href: string;
  kind: "learn" | "revise" | "mock";
  group?: string;
}

export interface PlanDay {
  date: string; // YYYY-MM-DD
  tasks: PlanTask[];
  minutes: number;
}

export interface PlanResult {
  days: PlanDay[];
  /** Date the last learning task is scheduled. */
  finishDate: string | null;
  onTrack: boolean;
  /** Learning minutes still to do vs minutes available before the target. */
  remainingMinutes: number;
  availableMinutes: number;
  /** Extra hours per week needed to finish on time (0 when on track). */
  extraHoursNeeded: number;
  totalItems: number;
  doneItems: number;
}

export interface PlanInput {
  items: PlanItem[];
  targetDate: string;
  hoursPerWeek: number;
  studyDays: number[];
  /** Defaults to today. */
  startDate?: string;
  /** Href for revision / mock tasks. */
  reviseHref?: string;
  mockHref?: string;
}

function addDays(d: string, n: number) {
  const x = new Date(d + "T00:00:00");
  x.setDate(x.getDate() + n);
  return dayKey(x);
}

export function buildPlan(input: PlanInput): PlanResult {
  const start = input.startDate ?? dayKey();
  const studyDays = input.studyDays.length ? input.studyDays : [1, 2, 3, 4, 5, 6];
  const perDay = Math.max(15, Math.round((input.hoursPerWeek * 60) / studyDays.length));

  // Study dates between start and target (inclusive), capped at 400 days.
  const dates: string[] = [];
  for (let d = start, i = 0; d <= input.targetDate && i < 400; d = addDays(d, 1), i++) {
    if (studyDays.includes(new Date(d + "T00:00:00").getDay())) dates.push(d);
  }

  const remaining = input.items.filter((i) => !i.done);
  // Stable sort by priority (desc) — ties keep syllabus order.
  const queue = remaining.map((it, idx) => ({ it, idx })).sort((a, b) => (b.it.priority ?? 0) - (a.it.priority ?? 0) || a.idx - b.idx).map((x) => x.it);

  const remainingMinutes = remaining.reduce((a, i) => a + i.minutes, 0);
  const reviseShare = 0.15;
  const learnDates = dates.length ? dates.slice(0, Math.max(1, Math.ceil(dates.length * (1 - reviseShare)))) : [];
  const tailDates = dates.slice(learnDates.length);
  const availableMinutes = dates.length * perDay;

  const days: PlanDay[] = [];
  let qi = 0;
  let carry: PlanItem | null = null;
  let carryLeft = 0;
  let learnDay = 0;

  const pushLearn = (date: string) => {
    const day: PlanDay = { date, tasks: [], minutes: 0 };
    learnDay++;
    // Every 6th study day: a lighter revision session of what was learnt.
    if (learnDay % 6 === 0) {
      day.tasks.push({ id: `revise:${date}`, title: "Revision: review this week’s chapters", minutes: Math.round(perDay * 0.5), href: input.reviseHref ?? "/practice", kind: "revise" });
      day.minutes += Math.round(perDay * 0.5);
    }
    while (day.minutes < perDay && (carry || qi < queue.length)) {
      const it = carry ?? queue[qi++];
      const need = carry ? carryLeft : it.minutes;
      const take = Math.min(need, perDay - day.minutes);
      day.tasks.push({ id: it.id, title: take < need || carry ? `${it.title}${carry ? " (continued)" : ""}` : it.title, minutes: take, href: it.href, kind: "learn", group: it.group });
      day.minutes += take;
      if (take < need) {
        carry = it;
        carryLeft = need - take;
      } else {
        carry = null;
        carryLeft = 0;
      }
      if (take === 0) break;
    }
    // Everything scheduled already: keep the habit with light revision.
    if (!day.tasks.length) {
      const m = Math.round(perDay * 0.5);
      day.tasks.push({ id: `revise:${date}`, title: "Light revision: flashcards & weak skills", minutes: m, href: input.reviseHref ?? "/practice", kind: "revise" });
      day.minutes = m;
    }
    days.push(day);
  };

  for (const d of learnDates) pushLearn(d);
  // Anything not yet placed spills into the reserved tail (behind schedule) …
  let ti = 0;
  while ((carry || qi < queue.length) && ti < tailDates.length) pushLearn(tailDates[ti++]);
  // … and beyond the target date if there still isn't room.
  let overflow = input.targetDate;
  let guard = 0;
  while ((carry || qi < queue.length) && guard++ < 365) {
    overflow = addDays(overflow, 1);
    if (studyDays.includes(new Date(overflow + "T00:00:00").getDay())) pushLearn(overflow);
  }
  const lastLearn = [...days].reverse().find((d) => d.tasks.some((t) => t.kind === "learn"));
  // Remaining tail days: revision + mock tests.
  for (let i = ti; i < tailDates.length; i++) {
    const date = tailDates[i];
    const mock = (tailDates.length - i) % 3 === 1;
    days.push({
      date,
      minutes: perDay,
      tasks: [
        mock
          ? { id: `mock:${date}`, title: "Full practice test + review your mistakes", minutes: perDay, href: input.mockHref ?? input.reviseHref ?? "/practice", kind: "mock" }
          : { id: `revise:${date}`, title: "Revision: weakest skills & flashcards", minutes: perDay, href: input.reviseHref ?? "/practice", kind: "revise" },
      ],
    });
  }
  days.sort((a, b) => a.date.localeCompare(b.date));

  const finishDate = lastLearn?.date ?? null;
  const onTrack = !finishDate || finishDate <= input.targetDate;
  const learnCapacity = learnDates.length * perDay + tailDates.length * perDay;
  const weeksLeft = Math.max(1, dates.length / studyDays.length);
  const shortfall = Math.max(0, remainingMinutes - learnCapacity);
  return {
    days,
    finishDate,
    onTrack,
    remainingMinutes,
    availableMinutes,
    extraHoursNeeded: onTrack ? 0 : Math.ceil(shortfall / 60 / weeksLeft),
    totalItems: input.items.length,
    doneItems: input.items.length - remaining.length,
  };
}

/** iCalendar export of the plan (all-day events with the day's tasks). */
export function planToIcs(plan: PlanResult, title = "Quest Academy study plan", origin = "") {
  const esc = (s: string) => s.replace(/[\\,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Quest Academy//Study Plan//EN", "CALSCALE:GREGORIAN", `X-WR-CALNAME:${esc(title)}`];
  for (const d of plan.days) {
    if (!d.tasks.length) continue;
    const date = d.date.replace(/-/g, "");
    const end = addDays(d.date, 1).replace(/-/g, "");
    lines.push(
      "BEGIN:VEVENT",
      `UID:${date}-${d.tasks[0].id.replace(/[^a-z0-9]/gi, "")}@questacademy`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${date}`,
      `DTEND;VALUE=DATE:${end}`,
      `SUMMARY:${esc(`Study · ${d.minutes} min`)}`,
      `DESCRIPTION:${esc(d.tasks.map((t) => `• ${t.title} (${t.minutes} min)${origin ? " " + origin + t.href : ""}`).join("\n"))}`,
      "END:VEVENT",
    );
  }
  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}
