"use client";

import { useEffect, useRef } from "react";
import { useAuth } from "@/components/providers";
import { liveStreak, useLearner } from "@/lib/store";
import { useNotebook } from "@/lib/notebook-store";
import { useMyClass } from "@/lib/useMyClass";
import { useUi } from "@/lib/ui";
import { burst } from "@/lib/confetti";
import { useT } from "@/i18n";
import { buildSummary } from "@/lib/school/summary";
import { detectResult } from "@/lib/school/progress";
import { defaultChallenge, STREAK_MILESTONES } from "@/lib/school/challenge";
import { fetchChallenge, fetchStudentSchool, refreshMemberships, rolesOf, submitAssignment, submitChallengeEntry, upsertSummary, useSchool } from "@/lib/school/client";

/** Keeps the school layer in step with the learner: memberships, summary, assignment results, challenge entry. */
export function SchoolSync() {
  const { user, loading } = useAuth();
  const demo = useSchool((s) => s.demo);
  const memberships = useSchool((s) => s.memberships);
  const loadedFor = useSchool((s) => s.loadedFor);
  const mc = useMyClass();
  const mcRef = useRef(mc);
  mcRef.current = mc;

  // Memberships follow the signed-in account.
  useEffect(() => {
    if (demo || loading) return;
    if (user) void refreshMemberships(user.id);
    else if (loadedFor) useSchool.getState().setMemberships(null, []);
  }, [user, loading, demo, loadedFor]);

  const student = rolesOf(memberships).student;
  const classId = student?.class_id ?? null;
  const schoolId = student?.school_id ?? null;
  const uid = user?.id;

  useEffect(() => {
    if (!uid || !classId || demo) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let last = 0;
    let busy = false;
    const run = async () => {
      if (busy) return;
      busy = true;
      last = Date.now();
      try {
        const state = useLearner.getState();
        const cur = mcRef.current;
        const base = buildSummary({ state, subjects: cur?.subjects ?? null, doubts: useNotebook.getState().doubts, className: student?.classes ? `${student.classes.name} ${student.classes.section}` : undefined });
        await upsertSummary({ ...base, display_name: student?.display_name || base.display_name, user_id: uid, school_id: schoolId, class_id: classId });

        // Results of assigned work go back to the teacher.
        const mine = await fetchStudentSchool(uid, classId);
        const done = new Set(mine.submissions.filter((x) => x.status === "done").map((x) => x.assignment_id));
        for (const a of mine.assignments) {
          if (done.has(a.id)) continue;
          const r = detectResult(a, state);
          if (r) await submitAssignment({ assignment_id: a.id, user_id: uid, class_id: classId, status: "done", score: Math.round(r.score * 1000) / 1000, completed_at: r.completedAt, detail: r.detail });
        }

        // Challenge of the week.
        const ch = (await fetchChallenge(defaultChallenge().id)) ?? defaultChallenge();
        const r = detectResult({ id: `challenge:${ch.id}`, completion_key: ch.completion_key, created_at: `${ch.id}T00:00:00` }, state);
        if (r) await submitChallengeEntry({ challenge_id: ch.id, user_id: uid, school_id: schoolId, class_id: classId, score: Math.min(1, Math.max(0, r.score)) });
      } catch (e) {
        console.warn("[school] sync", (e as Error).message);
      } finally {
        busy = false;
      }
    };
    const schedule = (ms: number) => {
      clearTimeout(timer);
      timer = setTimeout(() => void run(), Math.max(ms, 60_000 - (Date.now() - last)));
    };
    timer = setTimeout(() => void run(), 3000 + Math.random() * 4000);
    const unsub = useLearner.subscribe((s, p) => {
      if (s.updatedAt !== p.updatedAt) schedule(15_000);
    });
    return () => {
      clearTimeout(timer);
      unsub();
    };
  }, [uid, classId, schoolId, demo]); // eslint-disable-line react-hooks/exhaustive-deps

  return <StreakRewards />;
}

/** Streak milestones: a badge, free streak freezes and a celebration, once each. */
function StreakRewards() {
  const t = useT();
  const streak = useLearner((s) => liveStreak(s));
  useEffect(() => {
    const st = useLearner.getState();
    const due = STREAK_MILESTONES.filter((m) => streak >= m.days && !st.items[`streak-reward:${m.days}`]);
    if (!due.length) return;
    const top = due[due.length - 1];
    const freezes = due.reduce((a, m) => a + m.freezes, 0);
    const at = new Date().toISOString();
    useLearner.setState((s) => ({
      items: { ...s.items, ...Object.fromEntries(due.map((m) => [`streak-reward:${m.days}`, at])) },
      streak: { ...s.streak, freezes: Math.min(5, s.streak.freezes + freezes) },
      updatedAt: Date.now(),
    }));
    useUi.getState().celebrate({
      kind: "badge",
      title: t("school.streak.milestone", "{title}!", { title: t(`school.streak.m${top.days}`, top.title) }),
      subtitle: freezes ? t("school.streak.freezes", "{days}-day streak. You earned {n} streak freeze(s) to protect it.", { days: top.days, n: freezes }) : t("school.streak.keepGoing", "{days} days in a row. Keep it going!", { days: top.days }),
      badge: { icon: "flame", color: top.color },
    });
    burst({ big: top.days >= 7 });
  }, [streak, t]);
  return null;
}
