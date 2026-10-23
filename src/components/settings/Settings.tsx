"use client";

import { ModeSettings } from "@/components/modes/ModeSettings";
import { SkinPicker } from "@/components/settings/SkinPicker";
import { LanguagePicker } from "@/components/i18n/LanguagePicker";

import Link from "next/link";
import { useRef, useState } from "react";
import { Download, LogOut, Upload } from "lucide-react";
import clsx from "clsx";
import { learnerSnapshot, mergeStates, useLearner, type LearnerState } from "@/lib/store";
import { dailyGoals, learningStyles, stages } from "@/content/worlds";
import { useAuth, useHydrated } from "@/components/providers";
import { useUi } from "@/lib/ui";
import { PageColumns } from "@/components/shell/AppShell";
import { RailCard, RailFooter } from "@/components/shell/RailCards";

export function Settings() {
  const hydrated = useHydrated();
  const s = useLearner();
  const { enabled, user, signOut } = useAuth();
  const toast = useUi((u) => u.toast);
  const fileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string | null>(null);

  const rail = (
    <>
      <RailCard title="Settings">
        <nav className="space-y-1 text-[15px] font-extrabold">
          {[
            ["#preferences", "Preferences"],
            ["#learning", "Learning"],
            ["#account", "Account"],
            ["#data", "Your data"],
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

  const exportData = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(learnerSnapshot(), null, 2)], { type: "application/json" }));
    a.download = "quest-academy-progress.json";
    a.click();
  };

  const importData = async (f: File) => {
    try {
      const data = JSON.parse(await f.text()) as LearnerState;
      if (!data.profile || typeof data.xp !== "number") throw new Error("bad file");
      s.replaceState(mergeStates(learnerSnapshot(), data));
      toast({ text: "Progress imported and merged" });
    } catch {
      toast({ text: "That file isn’t Quest Academy progress" });
    }
  };

  return (
    <PageColumns rail={rail}>
      <h1 className="text-3xl font-black">Settings</h1>

      <Section id="language" title="Language · भाषा · ಭಾಷೆ">
        <LanguagePicker />
      </Section>

      <Section id="design" title="Design">
        <SkinPicker />
      </Section>

      <Section id="experience" title="Experience">
        <p className="mb-4 text-sm font-semibold text-muted">Quest Academy adapts its look, pace and rewards to you. Every course works in every mode.</p>
        <ModeSettings />
      </Section>

      <Section id="preferences" title="Preferences">
        <Row label="Name" hint="Shown on your profile and leaderboards">
          <input
            value={name ?? s.profile.name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (name !== null) s.setProfile({ name: name.trim() || "Learner" });
              setName(null);
            }}
            maxLength={30}
            className="input sm:w-64"
            aria-label="Name"
          />
        </Row>
        <Row label="Appearance">
          <Segmented value={s.settings.theme} options={[["light", "Light"], ["dark", "Dark"], ["system", "System"]]} onChange={(v) => s.setSettings({ theme: v as LearnerState["settings"]["theme"] })} />
        </Row>
        <Row label="Sound effects">
          <Toggle on={s.settings.sound} onChange={(v) => s.setSettings({ sound: v })} label="Sound effects" />
        </Row>
      </Section>

      <Section id="learning" title="Learning">
        <Row label="I am a…">
          <select value={s.profile.stage ?? ""} onChange={(e) => s.setProfile({ stage: (e.target.value || null) as LearnerState["profile"]["stage"] })} className="input sm:w-64">
            <option value="">Not set</option>
            {stages.map((st) => (
              <option key={st.id} value={st.id}>
                {st.label} ({st.hint})
              </option>
            ))}
          </select>
        </Row>
        <Row label="Daily goal">
          <Segmented value={String(s.profile.dailyGoal)} options={dailyGoals.map((g) => [String(g.xp), `${g.label} · ${g.xp} XP`])} onChange={(v) => s.setProfile({ dailyGoal: Number(v) })} />
        </Row>
        <Row label="Learning style" hint="Sets the mode lessons open in">
          <Segmented value={s.profile.style} options={learningStyles.map((l) => [l.id, l.label])} onChange={(v) => s.setProfile({ style: v as LearnerState["profile"]["style"] })} />
        </Row>
      </Section>

      <Section id="account" title="Account">
        <Row label={user ? `Signed in as ${user.email}` : "Cloud sync"} hint={user ? "Your progress syncs across devices" : enabled ? "Sign in to sync progress and join live leagues" : "Guest mode — progress is saved on this device"}>
          {user ? (
            <button className="btn-ghost" onClick={() => void signOut()}>
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          ) : enabled ? (
            <Link href="/auth" className="btn-primary">
              Sign in
            </Link>
          ) : null}
        </Row>
      </Section>

      <Section id="data" title="Your data">
        <Row label="Backup" hint="Download or restore all your progress">
          <div className="flex gap-2">
            <button className="btn-ghost" onClick={exportData}>
              <Download className="h-4 w-4" /> Export
            </button>
            <button className="btn-ghost" onClick={() => fileRef.current?.click()}>
              <Upload className="h-4 w-4" /> Import
            </button>
            <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && void importData(e.target.files[0])} />
          </div>
        </Row>
        <Row label="Reset progress" hint="Deletes XP, mastery, streaks, coins and badges on this device">
          <button
            className="btn-bad"
            onClick={() => {
              if (confirm("Reset ALL progress on this device? This cannot be undone.")) s.reset();
            }}
          >
            Reset
          </button>
        </Row>
      </Section>
    </PageColumns>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-8 scroll-mt-6">
      <h2 className="text-xl font-black">{title}</h2>
      <div className="card mt-3 divide-y-2 divide-line">{children}</div>
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
