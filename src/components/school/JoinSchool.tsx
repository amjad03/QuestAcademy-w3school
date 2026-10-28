"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Building2, GraduationCap, KeyRound } from "lucide-react";
import { useT } from "@/i18n";
import { useAuth, useHydrated } from "@/components/providers";
import { useLearner } from "@/lib/store";
import { BOARDS, type Board } from "@/lib/modes";
import { acceptInvite, createSchool, demoAvailable, joinWithCode, refreshMemberships, useSchool } from "@/lib/school/client";
import { DemoBanner, PageWrap } from "./ui";

type Mode = "code" | "invite" | "school";

/** Join a class with a code, accept a teacher invitation, or set up a new school (principal). */
export function JoinSchool() {
  const t = useT();
  const router = useRouter();
  const hydrated = useHydrated();
  const { user, enabled, loading } = useAuth();
  const demo = useSchool((s) => s.demo);
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);
  const [mode, setMode] = useState<Mode>("code");
  const [invite, setInvite] = useState<string | null>(null);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [school, setSchool] = useState({ name: "", city: "", board: "cbse" });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const inv = q.get("invite");
    if (inv) (setInvite(inv), setMode("invite"));
    else if (q.get("new") === "school") setMode("school");
    if (q.get("code")) setCode(q.get("code")!.toUpperCase());
  }, []);
  useEffect(() => {
    if (hydrated && !name) setName(profile.name || (user?.user_metadata?.full_name as string) || "");
    if (hydrated && !nickname && profile.nickname) setNickname(profile.nickname);
  }, [hydrated, profile.name, profile.nickname, user]); // eslint-disable-line react-hooks/exhaustive-deps

  const after = async (role: string) => {
    if (user && !demo) {
      const ms = await refreshMemberships(user.id);
      // A student joining a board class gets that class's syllabus (unless they already chose one).
      const c = ms.find((m) => m.role === "student")?.classes;
      if (role === "student" && c?.board && c.grade && !profile.grade) setProfile({ board: c.board as Board, grade: c.grade });
    }
    router.push(role === "teacher" ? "/teach" : role === "principal" ? "/school" : "/learn");
  };

  const submit = async () => {
    setBusy(true);
    setError(null);
    try {
      if (mode === "school") {
        await createSchool(school.name.trim(), school.city.trim(), school.board, name.trim());
        await after("principal");
      } else if (mode === "invite" && invite) {
        const r = await acceptInvite(invite, name.trim());
        await after(r.role);
      } else {
        const r = await joinWithCode(code, name.trim(), nickname.trim() || undefined);
        if (nickname.trim()) setProfile({ nickname: nickname.trim() });
        await after(r.role);
      }
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  if (!hydrated || (enabled && loading)) return <PageWrap><div className="mx-auto h-80 max-w-md animate-pulse rounded-2xl bg-surface-2" /></PageWrap>;

  const needsAccount = !demo && (!enabled || !user);
  const isTeacherCode = code.trim().toUpperCase().startsWith("T") && code.trim().length >= 8;

  return (
    <PageWrap>
      <div className="mx-auto max-w-md">
        <DemoBanner />
        <p className="eyebrow">{t("join.eyebrow", "School")}</p>
        <h1 className="mt-1 text-3xl font-black">{mode === "school" ? t("join.schoolTitle", "Set up your school") : mode === "invite" ? t("join.inviteTitle", "You're invited to teach") : t("join.title", "Join your class")}</h1>
        <p className="mt-2 font-semibold text-muted">
          {mode === "school" ? t("join.schoolSub", "You'll be the principal. Then add classes, invite teachers and import students.") : mode === "invite" ? t("join.inviteSub", "Accept to see your school's classes and dashboards.") : t("join.sub", "Enter the code from your teacher. Teachers use the teacher code from the principal.")}
        </p>

        {needsAccount ? (
          <div className="card mt-6 p-5">
            <p className="font-bold">{enabled ? t("join.signInFirst", "Sign in or create an account first. Then come back to this page.") : t("join.noAccounts", "Accounts aren't switched on for this site yet.")}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {enabled ? (
                <Link href={`/auth?next=${encodeURIComponent("/join" + (typeof location !== "undefined" ? location.search : ""))}`} className="btn-primary">
                  {t("join.signIn", "Sign in")}
                </Link>
              ) : (
                demoAvailable && (
                  <button className="btn-primary" onClick={() => useSchool.getState().setDemo(true)}>
                    {t("school.gate.preview", "Preview with sample data")}
                  </button>
                )
              )}
            </div>
          </div>
        ) : (
          <form
            className="card mt-6 space-y-4 p-5"
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
          >
            {mode === "code" && (
              <label className="block">
                <span className="mb-1 flex items-center gap-2 text-sm font-extrabold">
                  <KeyRound className="h-4 w-4" aria-hidden /> {t("join.code", "Class code")}
                </span>
                <input className="input text-center font-mono text-2xl tracking-[0.3em]" autoCapitalize="characters" autoComplete="off" maxLength={10} required value={code} onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))} />
                {isTeacherCode && <span className="mt-1 block text-xs font-bold text-accent">{t("join.teacherCode", "This is a teacher code: you'll join as the class teacher.")}</span>}
              </label>
            )}
            {mode === "school" && (
              <>
                <label className="block">
                  <span className="mb-1 flex items-center gap-2 text-sm font-extrabold">
                    <Building2 className="h-4 w-4" aria-hidden /> {t("join.schoolName", "School name")}
                  </span>
                  <input className="input" required minLength={2} value={school.name} onChange={(e) => setSchool({ ...school, name: e.target.value })} />
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="block">
                    <span className="mb-1 block text-sm font-extrabold">{t("join.city", "City")}</span>
                    <input className="input" value={school.city} onChange={(e) => setSchool({ ...school, city: e.target.value })} />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-extrabold">{t("join.board", "Board")}</span>
                    <select className="input" value={school.board} onChange={(e) => setSchool({ ...school, board: e.target.value })}>
                      {BOARDS.filter((b) => b.id !== "exam").map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </>
            )}
            <label className="block">
              <span className="mb-1 flex items-center gap-2 text-sm font-extrabold">
                <GraduationCap className="h-4 w-4" aria-hidden /> {t("join.name", "Your name (as your teacher knows it)")}
              </span>
              <input className="input" required value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            {mode === "code" && !isTeacherCode && (
              <label className="block">
                <span className="mb-1 block text-sm font-extrabold">{t("join.nickname", "Leaderboard nickname (optional)")}</span>
                <input className="input" maxLength={24} value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder={t("join.nicknamePh", "e.g. Comet42")} />
                <span className="mt-1 block text-xs font-semibold text-muted">{t("join.nicknameHelp", "Classmates see only your nickname on leaderboards. You can hide yourself any time.")}</span>
              </label>
            )}
            {error && <p className="rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad">{error}</p>}
            <button className={clsx("btn-primary w-full")} disabled={busy || (mode === "code" && code.length < 6)}>
              {busy ? t("join.working", "Joining…") : mode === "school" ? t("join.createCta", "Create school") : mode === "invite" ? t("join.acceptCta", "Accept invitation") : t("join.cta", "Join")}
            </button>
          </form>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-bold">
          {mode !== "code" && (
            <button className="kh-link text-accent" onClick={() => setMode("code")}>
              {t("join.haveCode", "I have a class code")}
            </button>
          )}
          {mode !== "school" && (
            <button className="kh-link text-accent" onClick={() => setMode("school")}>
              {t("join.principal", "I'm a principal: set up a school")}
            </button>
          )}
        </div>
      </div>
    </PageWrap>
  );
}
