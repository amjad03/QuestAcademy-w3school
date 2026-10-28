"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { CalendarClock, Check, ChevronRight, ClipboardList, Flame, Heart } from "lucide-react";
import { useT } from "@/i18n";
import { useAuth } from "@/components/providers";
import { useLearner } from "@/lib/store";
import { DEMO_USER } from "@/lib/school/demo";
import { fetchKudosFor, fetchStudentSchool, useRoles, useSchool, type StudentSchoolData } from "@/lib/school/client";
import { detectResult, markStarted } from "@/lib/school/progress";
import { KUDOS_EMOJI, KUDOS_LABEL } from "@/lib/school/report";
import { STREAK_MILESTONES } from "@/lib/school/challenge";
import type { Kudos } from "@/lib/school/types";
import { pct, useAgo } from "./ui";

/** "Assigned by your teacher" on the My class home. Renders nothing for learners without a class. */
export function AssignedByTeacher() {
  const t = useT();
  const router = useRouter();
  const { user } = useAuth();
  const demo = useSchool((s) => s.demo);
  const { student } = useRoles();
  const uid = demo ? DEMO_USER : user?.id;
  const [data, setData] = useState<StudentSchoolData | null>(null);
  const items = useLearner((s) => s.items);
  const assessments = useLearner((s) => s.assessments);
  const mockResults = useLearner((s) => s.mockResults);
  const totals = useLearner((s) => s.totals);

  useEffect(() => {
    if (!uid || !student?.class_id) return;
    fetchStudentSchool(uid, student.class_id).then(setData, () => setData(null));
  }, [uid, student?.class_id]);

  const list = useMemo(() => {
    if (!data) return [];
    const subs = new Map(data.submissions.map((s) => [s.assignment_id, s]));
    return data.assignments
      .map((a) => {
        const sub = subs.get(a.id);
        const local = sub?.status === "done" ? null : detectResult(a, { items, assessments, mockResults, totals });
        return { a, done: sub?.status === "done" || Boolean(local), score: sub?.score ?? local?.score ?? null };
      })
      .sort((x, y) => Number(x.done) - Number(y.done) || (x.a.due_at ?? "9").localeCompare(y.a.due_at ?? "9"));
  }, [data, items, assessments, mockResults, totals]);

  if (!student || !data || !list.length) return null;
  const pending = list.filter((x) => !x.done);
  const teacher = student.classes ? `${student.classes.name} ${student.classes.section}` : "";

  return (
    <section aria-labelledby="assigned-title" className="card p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="assigned-title" className="kh-h2 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-accent" aria-hidden /> {t("student.assigned", "Assigned by your teacher")}
        </h2>
        <span className="text-sm font-bold text-muted">{pending.length ? t("student.pending", "{n} to do · {class}", { n: pending.length, class: teacher }) : t("student.allDone", "All done!")}</span>
      </div>
      <ul className="divide-y-2 divide-line">
        {list.slice(0, 6).map(({ a, done, score }) => {
          const due = a.due_at ? new Date(a.due_at) : null;
          const days = due ? Math.ceil((due.getTime() - Date.now()) / 86_400_000) : null;
          const late = days !== null && days < 0 && !done;
          return (
            <li key={a.id} className="flex items-center gap-3 py-3">
              <span className={clsx("grid h-9 w-9 shrink-0 place-items-center rounded-xl", done ? "bg-good-soft text-good" : late ? "bg-bad-soft text-bad" : "bg-accent-soft text-accent")} aria-hidden>
                {done ? <Check className="h-5 w-5" /> : <CalendarClock className="h-5 w-5" />}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-extrabold">{a.title}</p>
                <p className={clsx("truncate text-xs font-bold", late ? "text-bad" : "text-muted")}>
                  {done
                    ? t("student.doneScore", "Done · {pct}", { pct: pct(score) })
                    : days === null
                      ? t("student.noDue", "No due date")
                      : days < 0
                        ? t("student.overdue", "Overdue by {n} day(s)", { n: -days })
                        : days === 0
                          ? t("student.dueToday", "Due today")
                          : t("student.dueIn", "Due in {n} day(s)", { n: days })}
                  {a.note ? ` · ${a.note}` : ""}
                </p>
              </div>
              <button
                className={clsx("shrink-0 !py-2 text-sm", done ? "btn-ghost" : "btn-primary")}
                onClick={() => {
                  markStarted(a.id, useLearner.getState());
                  router.push(a.href);
                }}
              >
                {done ? t("student.redo", "Retry") : t("student.start", "Start")}
              </button>
            </li>
          );
        })}
      </ul>
      {data.kudos[0] && (
        <div className="mt-3 flex items-center gap-3 rounded-2xl bg-surface-2 px-3 py-2.5">
          <span className="text-2xl" aria-hidden>
            {KUDOS_EMOJI[data.kudos[0].badge]}
          </span>
          <p className="min-w-0 flex-1 text-sm font-semibold">
            <b>{t(`school.kudos.${data.kudos[0].badge}`, KUDOS_LABEL[data.kudos[0].badge])}</b> {t("student.kudosFrom", "from {name}", { name: data.kudos[0].from_name })}
            {data.kudos[0].message ? `: "${data.kudos[0].message}"` : ""}
          </p>
          <Link href="/profile#kudos" className="btn-flat !px-2" aria-label={t("student.allKudos", "See all kudos")}>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  );
}

/** Teacher kudos and streak milestone badges, for the student profile. */
export function KudosShelf() {
  const t = useT();
  const ago = useAgo();
  const { user } = useAuth();
  const demo = useSchool((s) => s.demo);
  const { student } = useRoles();
  const items = useLearner((s) => s.items);
  const [kudos, setKudos] = useState<Kudos[]>([]);
  const uid = demo ? DEMO_USER : user?.id;
  useEffect(() => {
    if (uid && student) void fetchKudosFor(uid).then(setKudos);
  }, [uid, student]);
  const streaks = STREAK_MILESTONES.filter((m) => items[`streak-reward:${m.days}`]);
  if (!kudos.length && !streaks.length) return null;

  const counts = new Map<string, number>();
  for (const k of kudos) counts.set(k.badge, (counts.get(k.badge) ?? 0) + 1);

  return (
    <section id="kudos" className="card p-5" aria-labelledby="kudos-title">
      <h2 id="kudos-title" className="flex items-center gap-2 text-xl font-black">
        <Heart className="h-5 w-5 text-bad" aria-hidden /> {t("kudos.title", "Recognition")}
      </h2>
      {counts.size > 0 && (
        <ul className="mt-4 flex flex-wrap gap-3">
          {[...counts].map(([b, n]) => (
            <li key={b} className="flex min-w-[96px] flex-col items-center rounded-2xl bg-surface-2 px-3 py-3 text-center">
              <span className="text-3xl" aria-hidden>
                {KUDOS_EMOJI[b as keyof typeof KUDOS_EMOJI]}
              </span>
              <span className="mt-1 text-xs font-extrabold">{t(`school.kudos.${b}`, KUDOS_LABEL[b as keyof typeof KUDOS_LABEL])}</span>
              {n > 1 && <span className="text-xs font-bold text-muted">×{n}</span>}
            </li>
          ))}
        </ul>
      )}
      {streaks.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {streaks.map((m) => (
            <li key={m.days} className="chip !text-sm" style={{ color: m.color }}>
              <Flame className="h-4 w-4" aria-hidden /> {t(`school.streak.m${m.days}`, m.title)}
            </li>
          ))}
        </ul>
      )}
      {kudos.length > 0 && (
        <ul className="mt-4 space-y-2">
          {kudos.slice(0, 5).map((k) => (
            <li key={k.id} className="text-sm font-semibold">
              {KUDOS_EMOJI[k.badge]} <b>{t(`school.kudos.${k.badge}`, KUDOS_LABEL[k.badge])}</b> · {k.from_name} · <span className="text-muted">{ago(k.created_at)}</span>
              {k.message && <p className="ml-6 text-muted">“{k.message}”</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
