"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { EyeOff, Flame, School, Swords, Trophy } from "lucide-react";
import { useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useUi } from "@/lib/ui";
import { challengeRanking, classLeaderboard, fetchChallenge, schoolLeaderboard, setLeaderboardPrefs, useRoles, useSchool } from "@/lib/school/client";
import { defaultChallenge, type WeekChallenge } from "@/lib/school/challenge";
import { detectResult, markStarted } from "@/lib/school/progress";
import type { ClassLeaderEntry, LeaderEntry, SchoolRankEntry } from "@/lib/school/types";
import { DemoBanner, PageTitle, PageWrap, Section, Tabs, pct } from "./ui";

type Tab = "class" | "school" | "challenge";

export function Compete() {
  const t = useT();
  const { student } = useRoles();
  const demo = useSchool((s) => s.demo);
  const [tab, setTab] = useState<Tab>("class");
  const [cls, setCls] = useState<LeaderEntry[] | null>(null);
  const [sch, setSch] = useState<{ students: LeaderEntry[]; classes: ClassLeaderEntry[] } | null>(null);
  const [challenge, setChallenge] = useState<WeekChallenge>(() => defaultChallenge());
  const [ranking, setRanking] = useState<SchoolRankEntry[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!student?.class_id) return;
    classLeaderboard(student.class_id).then(setCls, (e) => setError(e.message));
    schoolLeaderboard(student.school_id).then(setSch, () => setSch({ students: [], classes: [] }));
    const base = defaultChallenge();
    fetchChallenge(base.id).then((row) => {
      const ch = row ? { ...base, ...row } : base;
      setChallenge(ch);
      challengeRanking(ch.id).then(setRanking, () => setRanking([]));
    });
  }, [student?.class_id, student?.school_id, demo]);

  if (!student) return null;
  const className = student.classes ? `${student.classes.name} ${student.classes.section}` : "";

  return (
    <PageWrap className="max-w-[880px]">
      <DemoBanner />
      <PageTitle eyebrow={t("compete.eyebrow", "Class league")} title={t("compete.title", "This week's leaderboard")} sub={t("compete.sub", "Weekly XP from lessons, practice and tests. Resets every Monday.")} />
      {error && <p className="mb-4 rounded-2xl bg-bad-soft px-4 py-3 font-bold text-bad">{error}</p>}
      <Tabs<Tab>
        value={tab}
        onChange={setTab}
        items={[
          { id: "class", label: className || t("compete.tab.class", "My class") },
          { id: "school", label: t("compete.tab.school", "My school") },
          { id: "challenge", label: t("compete.tab.challenge", "Challenge of the week") },
        ]}
      />
      {tab === "class" && (
        <div className="space-y-5">
          <Board rows={cls} streaks />
          <PrivacyCard />
        </div>
      )}
      {tab === "school" && (
        <div className="space-y-5">
          <Section title={t("compete.classes", "Class vs class (average XP)")}>
            {!sch ? (
              <div className="h-24 animate-pulse rounded-xl bg-surface-2" />
            ) : (
              <ol className="space-y-2">
                {sch.classes.map((c, i) => (
                  <li key={c.class_id} className={clsx("flex items-center gap-3 rounded-2xl px-3 py-2", c.class_id === student.class_id && "bg-accent-soft")}>
                    <Rank i={i} />
                    <span className="min-w-0 flex-1 truncate font-extrabold">{c.class_name}</span>
                    <span className="text-sm font-bold text-muted">{t("compete.avgXp", "{n} XP avg", { n: Math.round(c.avg_xp) })}</span>
                  </li>
                ))}
              </ol>
            )}
          </Section>
          <Section title={t("compete.topSchool", "Top students in the school")}>
            <Board rows={sch?.students ?? null} showClass bare />
          </Section>
        </div>
      )}
      {tab === "challenge" && <ChallengeTab challenge={challenge} ranking={ranking} />}
    </PageWrap>
  );
}

function Rank({ i }: { i: number }) {
  return <span className={clsx("w-7 shrink-0 text-center text-lg font-black", i === 0 ? "text-[#E0A100]" : i === 1 ? "text-[#94A3B8]" : i === 2 ? "text-[#C2773A]" : "text-muted")}>{i + 1}</span>;
}

function Board({ rows, streaks, showClass, bare }: { rows: LeaderEntry[] | null; streaks?: boolean; showClass?: boolean; bare?: boolean }) {
  const t = useT();
  const body = !rows ? (
    <div className="h-48 animate-pulse rounded-xl bg-surface-2" />
  ) : rows.length === 0 ? (
    <p className="font-semibold text-muted">{t("compete.empty", "No XP yet this week. Be the first!")}</p>
  ) : (
    <ol className="space-y-1">
      {rows.map((r, i) => (
        <li key={r.user_id} className={clsx("flex items-center gap-3 rounded-2xl px-3 py-2.5", r.is_me && "bg-accent-soft")}>
          <Rank i={i} />
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-2 font-black" aria-hidden>
            {r.nickname[0]?.toUpperCase()}
          </span>
          <span className="min-w-0 flex-1">
            <span className={clsx("block truncate font-extrabold", r.is_me && "text-accent")}>{r.is_me ? t("compete.you", "{name} (you)", { name: r.nickname }) : r.nickname}</span>
            {showClass && r.class_name && <span className="block truncate text-xs font-semibold text-muted">{r.class_name}</span>}
          </span>
          {streaks && (r.streak ?? 0) > 0 && (
            <span className="inline-flex items-center gap-0.5 text-sm font-bold text-streak">
              <Flame className="h-4 w-4" aria-hidden />
              {r.streak}
            </span>
          )}
          <span className="w-20 shrink-0 text-right font-bold tabular-nums text-muted">{t("board.xp", "{n} XP", { n: r.weekly_xp })}</span>
        </li>
      ))}
    </ol>
  );
  return bare ? body : <section className="card p-3 sm:p-4">{body}</section>;
}

function PrivacyCard() {
  const t = useT();
  const { student } = useRoles();
  const toast = useUi((s) => s.toast);
  const [nick, setNick] = useState(student?.nickname ?? "");
  const [hidden, setHidden] = useState(student?.leaderboard_hidden ?? false);
  const save = async (n: string, h: boolean) => {
    try {
      await setLeaderboardPrefs(n, h);
      useSchool.setState((s) => ({ memberships: s.memberships.map((m) => (m.role === "student" ? { ...m, nickname: n || null, leaderboard_hidden: h } : m)) }));
      toast({ text: t("compete.saved", "Saved") });
    } catch (e) {
      toast({ text: (e as Error).message });
    }
  };
  return (
    <Section title={t("compete.privacy", "Your leaderboard name")}>
      <p className="mb-3 text-sm font-semibold text-muted">{t("compete.privacyHelp", "Classmates only ever see your nickname, never your real name.")}</p>
      <form
        className="flex flex-wrap gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          void save(nick.trim(), hidden);
        }}
      >
        <input className="input min-w-0 flex-1" maxLength={24} value={nick} onChange={(e) => setNick(e.target.value)} placeholder={t("join.nicknamePh", "e.g. Comet42")} aria-label={t("compete.nickname", "Nickname")} />
        <button className="btn-primary">{t("compete.save", "Save")}</button>
      </form>
      <label className="mt-4 flex cursor-pointer items-center gap-3 font-bold">
        <input
          type="checkbox"
          className="h-5 w-5 accent-[rgb(var(--accent))]"
          checked={hidden}
          onChange={(e) => {
            setHidden(e.target.checked);
            void save(nick.trim(), e.target.checked);
          }}
        />
        <EyeOff className="h-4 w-4 text-muted" aria-hidden />
        {t("compete.hide", "Hide me from leaderboards")}
      </label>
    </Section>
  );
}

function ChallengeTab({ challenge, ranking }: { challenge: WeekChallenge; ranking: SchoolRankEntry[] | null }) {
  const t = useT();
  const router = useRouter();
  const items = useLearner((s) => s.items);
  const assessments = useLearner((s) => s.assessments);
  const mockResults = useLearner((s) => s.mockResults);
  const totals = useLearner((s) => s.totals);
  const mine = useMemo(() => detectResult({ id: `challenge:${challenge.id}`, completion_key: challenge.completion_key, created_at: `${challenge.id}T00:00:00` }, { items, assessments, mockResults, totals }), [challenge, items, assessments, mockResults, totals]);
  const daysLeft = Math.max(0, Math.ceil((challenge.ends.getTime() - Date.now()) / 86_400_000));
  return (
    <div className="space-y-5">
      <section className="card overflow-hidden">
        <div className="bg-accent px-5 py-6 text-white">
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] opacity-90">
            <Swords className="h-4 w-4" aria-hidden /> {t("compete.ch.eyebrow", "Inter-school challenge")}
          </p>
          <h2 className="mt-2 text-2xl font-black">{challenge.title}</h2>
          <p className="mt-1 font-semibold opacity-90">{challenge.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 px-5 py-4">
          <p className="min-w-0 flex-1 font-bold text-muted">{mine ? t("compete.ch.done", "Your score: {pct}. It counts for your school.", { pct: pct(mine.score) }) : t("compete.ch.left", "{n} day(s) left this week", { n: daysLeft })}</p>
          <button
            className={mine ? "btn-ghost" : "btn-gold"}
            onClick={() => {
              markStarted(`challenge:${challenge.id}`, useLearner.getState());
              router.push(challenge.href);
            }}
          >
            <Trophy className="h-4 w-4" /> {mine ? t("compete.ch.again", "Try again") : t("compete.ch.start", "Take the challenge")}
          </button>
        </div>
      </section>
      <Section title={t("compete.ch.ranking", "School ranking")} action={<School className="h-5 w-5 text-muted" aria-hidden />}>
        {!ranking ? (
          <div className="h-32 animate-pulse rounded-xl bg-surface-2" />
        ) : ranking.length === 0 ? (
          <p className="font-semibold text-muted">{t("compete.ch.noRanking", "Schools appear here once 3 of their students have taken the challenge.")}</p>
        ) : (
          <ol className="space-y-1">
            {ranking.map((r, i) => (
              <li key={r.school_id} className={clsx("flex items-center gap-3 rounded-2xl px-3 py-2.5", r.is_mine && "bg-accent-soft")}>
                <Rank i={i} />
                <span className={clsx("min-w-0 flex-1 truncate font-extrabold", r.is_mine && "text-accent")}>{r.school_name}</span>
                <span className="hidden text-xs font-bold text-muted sm:inline">{t("compete.ch.entries", "{n} students", { n: r.entries })}</span>
                <span className="w-14 shrink-0 text-right font-black tabular-nums">{pct(r.avg_score)}</span>
              </li>
            ))}
          </ol>
        )}
      </Section>
    </div>
  );
}
