"use client";

import { ModeSettings } from "@/components/modes/ModeSettings";
import { SkinPicker } from "@/components/settings/SkinPicker";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";
import { TutorToggle } from "@/components/tutor/TutorToggle";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMode } from "@/lib/useMode";
import { GrownUpGate } from "@/components/modes/ModeSettings";
import { deleteAccount, pushAccount } from "@/lib/supabase";
import { mergeNotebooks, notebookSnapshot, useNotebook, type NotebookData } from "@/lib/notebook-store";
import { useRef, useState } from "react";
import { Download, LogOut, Upload } from "lucide-react";
import clsx from "clsx";
import { learnerSnapshot, mergeStates, useLearner, type LearnerState } from "@/lib/store";
import { dailyGoals, learningStyles, stages } from "@/content/worlds";
import { useAuth, useHydrated } from "@/components/providers";
import { useUi } from "@/lib/ui";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";
import { useT } from "@/i18n";

import { PersonalSettings } from "@/components/personal/PersonalSettings";
import { ClassPicker, choiceFromProfile, stageForLevel } from "@/components/class/ClassPicker";

export function Settings() {
  const hydrated = useHydrated();
  const s = useLearner();
  const { enabled, user, signOut } = useAuth();
  const router = useRouter();
  const young = useMode().young;
  const [gatePassed, setGatePassed] = useState(false);
  const toast = useUi((u) => u.toast);
  const fileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string | null>(null);
  const t = useT();
  const stageLabel: Record<string, string> = {
    preprimary: t("onboard.stage.preprimary", "Pre-primary"),
    primary: t("onboard.stage.primary", "Primary"),
    middle: t("onboard.stage.middle", "Middle school"),
    secondary: t("onboard.stage.secondary", "High school"),
    aspirant: t("onboard.stage.aspirant", "NEET / JEE aspirant"),
    ug: t("onboard.stage.ug", "Undergraduate"),
    pg: t("onboard.stage.pg", "Postgraduate"),
    lifelong: t("onboard.stage.lifelong", "Lifelong learner"),
  };
  const stageHint: Record<string, string> = {
    preprimary: t("onboard.stage.preprimaryHint", "Ages 3–5"),
    primary: t("onboard.stage.primaryHint", "Grades 1–5"),
    middle: t("onboard.stage.middleHint", "Grades 6–8"),
    secondary: t("onboard.stage.secondaryHint", "Grades 9–12"),
    aspirant: t("onboard.stage.aspirantHint", "Competitive exams"),
    ug: t("onboard.stage.ugHint", "College / university"),
    pg: t("onboard.stage.pgHint", "Masters / PhD"),
    lifelong: t("onboard.stage.lifelongHint", "Professionals & the curious"),
  };
  const goalLabel: Record<number, string> = {
    20: t("onboard.goal.casual", "Casual"),
    50: t("onboard.goal.regular", "Regular"),
    100: t("onboard.goal.serious", "Serious"),
    200: t("onboard.goal.beast", "Beast mode"),
  };
  const styleLabel: Record<string, string> = {
    visual: t("onboard.style.visual", "Show me"),
    reading: t("onboard.style.reading", "Let me read"),
    doing: t("onboard.style.doing", "Let me try"),
    listening: t("onboard.style.listening", "Talk to me"),
  };

  const rail = (
    <>
      <RailCard title={t("settings.title", "Settings")}>
        <nav className="space-y-1 text-[15px] font-extrabold">
          {[
            ["#my-class", t("settings.section.myClass", "My class")],
            ["#my-plan", t("settings.section.myPlan", "My plan")],
            ["#preferences", t("settings.section.preferences", "Preferences")],
            ["#learning", t("settings.section.learning", "Learning")],
            ["#account", t("settings.section.account", "Account")],
            ["#data", t("settings.section.data", "Your data")],
          ].map(([h, l]) => (
            <a key={h} href={h} className="block rounded-xl px-3 py-2 text-muted hover:bg-surface-2 hover:text-ink">
              {l}
            </a>
          ))}
        </nav>
      </RailCard>
      <RailFooter />
    </>
  );

  if (!hydrated) return <PageColumns rail={rail}><div className="h-96 animate-pulse rounded-2xl bg-surface-2" /></PageColumns>;

  // Young learners' settings are for grown-ups: ask the gate question first.
  if (young && !gatePassed)
    return (
      <PageColumns>
        <GrownUpGate message={t("settings.gate", "Settings are for grown-ups. Please answer:")} onPass={() => setGatePassed(true)} onCancel={() => router.push("/learn")} />
      </PageColumns>
    );

  const exportData = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify({ ...learnerSnapshot(), notebook: notebookSnapshot() }, null, 2)], { type: "application/json" }));
    a.download = "quest-academy-progress.json";
    a.click();
  };

  const importData = async (f: File) => {
    try {
      const { notebook, ...data } = JSON.parse(await f.text()) as LearnerState & { notebook?: Partial<NotebookData> };
      if (!data.profile || typeof data.xp !== "number") throw new Error("bad file");
      s.replaceState(mergeStates(learnerSnapshot(), data));
      if (notebook) useNotebook.getState().replaceNotebook(mergeNotebooks(notebookSnapshot(), notebook));
      toast({ text: t("settings.data.imported", "Progress imported and merged") });
    } catch {
      toast({ text: t("settings.data.importBad", "That file isn’t Quest Academy progress") });
    }
  };

  return (
    <PageColumns rail={rail}>
      <h1 className="text-3xl font-black">{t("settings.title", "Settings")}</h1>

      <Section id="language" title="Language · भाषा · ಭಾಷೆ" bare>
        <LanguagePicker />
      </Section>

      {!["ug", "pg", "lifelong"].includes(s.profile.stage ?? "") && (
        <Section id="my-class" title={t("settings.section.myClass", "My class")} bare>
          <p className="mb-4 text-sm text-muted">{t("settings.myClass.intro", "You’ll see only your class’s subjects and chapters. Anything else is under “All classes & courses”.")}</p>
          <div className="card p-5">
            <ClassPicker
              value={choiceFromProfile(s.profile)}
              onChange={(c) => c.level && s.setProfile({ stage: stageForLevel(c.level), board: c.board, grade: c.grade, subjects: c.subjects })}
              compact
            />
          </div>
        </Section>
      )}

      {!["ug", "pg", "lifelong"].includes(s.profile.stage ?? "") && (
        <Section id="my-plan" title={t("settings.section.myPlan", "My plan")} bare>
          <p className="mb-4 text-sm text-muted">{t("settings.myPlan.intro", "Your answers from setup. Change any of them and your daily and weekly plan rebuilds.")}</p>
          <PersonalSettings />
        </Section>
      )}

      <Section id="design" title={t("settings.section.design", "Design")} bare>
        <SkinPicker />
      </Section>

      <Section id="experience" title={t("settings.section.experience", "Experience")} bare>
        <p className="mb-4 text-sm text-muted">{t("settings.experience.intro", "Quest Academy adapts its look, pace and rewards to you. Every course works in every mode.")}</p>
        <ModeSettings />
      </Section>

      <Section id="tutor" title={t("settings.section.tutor", "Ask Questy (AI tutor)")}>
        <TutorToggle className="flex cursor-pointer items-start justify-between gap-4 p-5" />
      </Section>

      <Section id="preferences" title={t("settings.section.preferences", "Preferences")}>
        <Row label={t("settings.name.label", "Name")} hint={t("settings.name.hint", "Shown on your profile and leaderboards")}>
          <input
            value={name ?? s.profile.name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (name !== null) s.setProfile({ name: name.trim() || t("settings.name.default", "Learner") });
              setName(null);
            }}
            maxLength={30}
            className="input sm:w-64"
            aria-label={t("settings.name.label", "Name")}
          />
        </Row>
        <Row label={t("settings.appearance.label", "Appearance")}>
          <Segmented value={s.settings.theme} options={[["light", t("settings.appearance.light", "Light")], ["dark", t("settings.appearance.dark", "Dark")], ["system", t("settings.appearance.system", "System")]]} onChange={(v) => s.setSettings({ theme: v as LearnerState["settings"]["theme"] })} />
        </Row>
        <Row label={t("settings.sound.label", "Sound effects")}>
          <Toggle on={s.settings.sound} onChange={(v) => s.setSettings({ sound: v })} label={t("settings.sound.label", "Sound effects")} />
        </Row>
      </Section>

      <Section id="learning" title={t("settings.section.learning", "Learning")}>
        <Row label={t("settings.stage.label", "I am a…")}>
          <select value={s.profile.stage ?? ""} onChange={(e) => s.setProfile({ stage: (e.target.value || null) as LearnerState["profile"]["stage"] })} className="input sm:w-64">
            <option value="">{t("settings.stage.notSet", "Not set")}</option>
            {stages.map((st) => (
              <option key={st.id} value={st.id}>
                {stageLabel[st.id] ?? st.label} ({stageHint[st.id] ?? st.hint})
              </option>
            ))}
          </select>
        </Row>
        <Row label={t("settings.goal.label", "Daily goal")}>
          <Segmented value={String(s.profile.dailyGoal)} options={dailyGoals.map((g) => [String(g.xp), t("settings.goal.option", "{label} · {xp} XP", { label: goalLabel[g.xp] ?? g.label, xp: g.xp })])} onChange={(v) => s.setProfile({ dailyGoal: Number(v) })} />
        </Row>
        <Row label={t("settings.style.label", "Learning style")} hint={t("settings.style.hint", "Sets the mode lessons open in")}>
          <Segmented value={s.profile.style} options={learningStyles.map((l) => [l.id, styleLabel[l.id] ?? l.label])} onChange={(v) => s.setProfile({ style: v as LearnerState["profile"]["style"] })} />
        </Row>
      </Section>

      <Section id="account" title={t("settings.section.account", "Account")}>
        <Row label={user ? t("settings.account.signedInAs", "Signed in as {email}", { email: user.email ?? "" }) : t("settings.account.cloudSync", "Cloud sync")} hint={user ? t("settings.account.syncing", "Your progress syncs across devices") : enabled ? t("settings.account.signInHint", "Sign in to sync progress and join live leagues") : t("settings.account.guest", "Guest mode — progress is saved on this device")}>
          {user ? (
            <button className="btn-ghost" onClick={() => void signOut()}>
              <LogOut className="h-4 w-4" /> {t("settings.account.signOut", "Sign out")}
            </button>
          ) : enabled ? (
            <Link href="/auth" className="btn-primary">
              {t("settings.account.signIn", "Sign in")}
            </Link>
          ) : null}
        </Row>
        {user && (
          <>
            <Row label={t("settings.account.password", "Password")} hint={t("settings.account.passwordHint", "Set or change the password for this account")}>
              <Link href="/auth/reset" className="btn-ghost">
                {t("settings.account.changePassword", "Change password")}
              </Link>
            </Row>
            <Row label={t("settings.account.delete", "Delete account")} hint={t("settings.account.deleteHint", "Permanently removes your account and the progress saved in it")}>
              <button
                className="btn-bad"
                onClick={async () => {
                  if (!confirm(t("settings.account.deleteConfirm", "Delete your account and all saved progress? This cannot be undone."))) return;
                  const r = await deleteAccount();
                  if (r.ok) router.push("/");
                  else alert(r.error);
                }}
              >
                {t("settings.account.deleteButton", "Delete account")}
              </button>
            </Row>
          </>
        )}
      </Section>

      <Section id="data" title={t("settings.section.data", "Your data")}>
        <Row label={t("settings.data.backup", "Backup")} hint={t("settings.data.backupHint", "Download or restore your progress, notes and doubts")}>
          <div className="flex gap-2">
            <button className="btn-ghost" onClick={exportData}>
              <Download className="h-4 w-4" /> {t("settings.data.export", "Export")}
            </button>
            <button className="btn-ghost" onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4" /> {t("settings.data.import", "Import")}
            </button>
            <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && void importData(e.target.files[0])} />
          </div>
        </Row>
        <Row label={t("settings.data.reset", "Reset progress")} hint={t("settings.data.resetHint", "Deletes XP, mastery, streaks, coins and badges on this device")}>
          <button
            className="btn-bad"
            onClick={() => {
              if (!confirm(user ? t("settings.data.resetConfirmAccount", "Reset ALL progress on this device and in your account? This cannot be undone.") : t("settings.data.resetConfirm", "Reset ALL progress on this device? This cannot be undone."))) return;
              s.reset();
              // Overwrite the cloud copy too, or the next sync would merge the old progress back.
              if (user) void pushAccount(user.id);
            }}
          >
            {t("settings.data.resetButton", "Reset")}
          </button>
        </Row>
      </Section>
    </PageColumns>
  );
}

/** A settings group. Rows sit in one card; `bare` sections bring their own cards (pickers). */
function Section({ id, title, children, bare }: { id: string; title: string; children: React.ReactNode; bare?: boolean }) {
  return (
    <section id={id} className="mt-8 scroll-mt-6">
      <h2 className="text-xl font-black">{title}</h2>
      {bare ? <div className="mt-3">{children}</div> : <div className="card mt-3 divide-y-2 divide-line">{children}</div>}
    </section>
  );
}

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="font-extrabold">{label}</div>
        {hint && <div className="text-sm font-semibold text-muted">{hint}</div>}
      </div>
      {children}
    </div>
  );
}

function Segmented({ value, options, onChange }: { value: string; options: string[][]; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(([v, l]) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={clsx("rounded-xl border-2 border-b-4 px-3 py-1.5 text-sm font-extrabold transition", value === v ? "border-accent bg-accent-soft text-accent" : "border-line text-muted hover:bg-surface-2")}
          aria-pressed={value === v}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button role="switch" aria-checked={on} aria-label={label} onClick={() => onChange(!on)} className={clsx("relative h-8 w-14 rounded-full transition", on ? "bg-good" : "bg-line")}>
      <span className={clsx("absolute top-1 h-6 w-6 rounded-full bg-white transition-all", on ? "left-7" : "left-1")} />
    </button>
  );
}
