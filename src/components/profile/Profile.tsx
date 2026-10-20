"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Cloud, CloudOff, Coins, Download, Lock, LogOut, Snowflake, Upload, Volume2, VolumeX } from "lucide-react";
import clsx from "clsx";
import { learnerSnapshot, mergeStates, useLearner, type LearnerState } from "@/lib/store";
import { AVATARS, BADGES, FRAMES, STREAK_FREEZE_PRICE, levelInfo } from "@/lib/gamification";
import { dailyGoals, learningStyles, stages, worlds } from "@/content/worlds";
import { useAuth, useHydrated } from "@/components/providers";
import { Avatar } from "@/components/shell/Avatar";
import { sfx } from "@/lib/sound";
import { useUi } from "@/lib/ui";

export function Profile() {
  const hydrated = useHydrated();
  const s = useLearner();
  const { enabled, user, signOut } = useAuth();
  const toast = useUi((u) => u.toast);
  const [name, setName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!hydrated) return <div className="mx-auto max-w-5xl px-4 py-12"><div className="h-96 animate-pulse rounded-4xl bg-surface-2" /></div>;

  const lvl = levelInfo(s.xp);
  const earned = BADGES.filter((b) => s.badges[b.id]);

  const buy = (id: string, price: number, apply: () => void) => {
    if (s.owned.includes(id)) return apply();
    if (s.buy(id, price)) {
      sfx("coin");
      apply();
      toast({ text: "Unlocked!" });
    } else {
      sfx("wrong");
      toast({ text: `You need ${price - s.coins} more coins` });
    }
  };

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
      toast({ text: "That file doesn’t look like Quest Academy progress" });
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      {/* header */}
      <section className="card relative overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-accent/25 via-accent-2/20 to-accent/10" />
        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-end">
          <Avatar emoji={s.profile.avatar} frame={s.profile.frame} size={112} />
          <div className="flex-1 text-center sm:text-left">
            {name === null ? (
              <button onClick={() => setName(s.profile.name)} className="font-display text-3xl font-bold hover:text-accent" title="Edit name">
                {s.profile.name || "Set your name"} ✎
              </button>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  s.setProfile({ name: name.trim() });
                  setName(null);
                }}
              >
                <input autoFocus value={name} onChange={(e) => setName(e.target.value)} onBlur={() => { s.setProfile({ name: name.trim() }); setName(null); }} className="input max-w-xs font-display text-2xl font-bold" maxLength={30} />
              </form>
            )}
            <p className="mt-1 text-muted">
              Level {lvl.level} {lvl.title} · {s.xp.toLocaleString()} XP · best streak {s.streak.best} days
            </p>
            <div className="mt-3 h-2 max-w-sm overflow-hidden rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2" style={{ width: `${lvl.progress * 100}%` }} />
            </div>
            <p className="mt-1 text-xs text-muted">
              {lvl.needed - lvl.into} XP to level {lvl.level + 1}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              [s.totals.lessons, "lessons"],
              [s.totals.correctAnswers, "correct"],
              [earned.length, "badges"],
            ].map(([n, l]) => (
              <div key={l as string} className="rounded-2xl bg-surface-2 px-4 py-3">
                <div className="font-display text-2xl font-bold">{n}</div>
                <div className="text-[11px] text-muted">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* badges */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-bold">
          Badges <span className="text-base font-medium text-muted">{earned.length}/{BADGES.length}</span>
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
          {BADGES.map((b) => {
            const got = s.badges[b.id];
            return (
              <div key={b.id} className={clsx("card flex flex-col items-center p-4 text-center", !got && "opacity-60")}>
                <span className={clsx("grid h-16 w-16 place-items-center rounded-full text-4xl", got ? "bg-gradient-to-br from-amber-200 to-orange-400 shadow-glow" : "bg-surface-2 grayscale")}>{got ? b.emoji : <Lock className="h-6 w-6 text-muted" />}</span>
                <span className="mt-2 text-sm font-semibold">{b.name}</span>
                <span className="text-[11px] leading-4 text-muted">{b.description}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* shop */}
      <section id="shop" className="mt-10 scroll-mt-24">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold">Quest shop</h2>
          <span className="flex items-center gap-1.5 font-display text-xl font-bold text-amber-500">
            <Coins className="h-5 w-5" /> {s.coins}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted">Earn coins from lessons, quests, challenges, mock tests and badges.</p>

        <div className="card mt-4 p-5">
          <h3 className="font-semibold">Avatars</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {AVATARS.map((a) => {
              const own = s.owned.includes(a.id);
              const active = s.profile.avatar === a.emoji;
              return (
                <button key={a.id} onClick={() => buy(a.id, a.price, () => s.setProfile({ avatar: a.emoji }))} className={clsx("flex flex-col items-center gap-1 rounded-2xl border-2 p-2 transition hover:-translate-y-0.5", active ? "border-accent bg-accent/10" : "border-line")}>
                  <span className={clsx("text-4xl", !own && "opacity-50")}>{a.emoji}</span>
                  <span className="text-[11px] font-bold text-muted">{active ? "Equipped" : own ? "Owned" : `🪙 ${a.price}`}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[2fr_1fr]">
          <div className="card p-5">
            <h3 className="font-semibold">Profile frames</h3>
            <div className="mt-3 flex flex-wrap gap-4">
              {FRAMES.map((f) => {
                const own = s.owned.includes(f.id);
                const active = s.profile.frame === f.id;
                return (
                  <button key={f.id} onClick={() => buy(f.id, f.price, () => s.setProfile({ frame: f.id }))} className="flex flex-col items-center gap-1">
                    <Avatar emoji={s.profile.avatar} frame={f.id} size={56} className={clsx(active && "ring-4 ring-accent/30")} />
                    <span className="text-xs font-medium">{f.name}</span>
                    <span className="text-[11px] text-muted">{active ? "Equipped" : own ? "Owned" : `🪙 ${f.price}`}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="card flex flex-col p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <Snowflake className="h-5 w-5 text-sky-500" /> Streak freeze
            </h3>
            <p className="mt-1 flex-1 text-sm text-muted">Protects your streak if you miss a day. You have {s.streak.freezes}/3.</p>
            <button
              className="btn-primary mt-4"
              disabled={s.streak.freezes >= 3}
              onClick={() => {
                if (s.buyFreeze()) {
                  sfx("coin");
                  toast({ text: "Streak freeze equipped ❄️" });
                } else toast({ text: `You need ${STREAK_FREEZE_PRICE} coins` });
              }}
            >
              Buy for 🪙 {STREAK_FREEZE_PRICE}
            </button>
          </div>
        </div>
      </section>

      {/* settings */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">Learning preferences</h2>
        <div className="card mt-4 divide-y divide-line">
          <Row label="Stage">
            <select value={s.profile.stage ?? ""} onChange={(e) => s.setProfile({ stage: (e.target.value || null) as LearnerState["profile"]["stage"] })} className="input !w-auto !py-2">
              <option value="">Not set</option>
              {stages.map((st) => (
                <option key={st.id} value={st.id}>
                  {st.emoji} {st.label} ({st.hint})
                </option>
              ))}
            </select>
          </Row>
          <Row label="Favourite worlds">
            <div className="flex flex-wrap justify-end gap-2">
              {worlds.map((w) => {
                const on = s.profile.worlds.includes(w.id);
                return (
                  <button key={w.id} onClick={() => s.setProfile({ worlds: on ? s.profile.worlds.filter((x) => x !== w.id) : [...s.profile.worlds, w.id] })} className={clsx("rounded-full border px-3 py-1 text-sm", on ? "border-accent bg-accent/10 text-accent" : "border-line text-muted")}>
                    {w.emoji} {w.short}
                  </button>
                );
              })}
            </div>
          </Row>
          <Row label="Learning style">
            <div className="flex flex-wrap justify-end gap-2">
              {learningStyles.map((l) => (
                <button key={l.id} onClick={() => s.setProfile({ style: l.id })} className={clsx("rounded-full border px-3 py-1 text-sm", s.profile.style === l.id ? "border-accent bg-accent/10 text-accent" : "border-line text-muted")}>
                  {l.emoji} {l.label}
                </button>
              ))}
            </div>
          </Row>
          <Row label="Daily goal">
            <div className="flex flex-wrap justify-end gap-2">
              {dailyGoals.map((g) => (
                <button key={g.xp} onClick={() => s.setProfile({ dailyGoal: g.xp })} className={clsx("rounded-full border px-3 py-1 text-sm", s.profile.dailyGoal === g.xp ? "border-accent bg-accent/10 text-accent" : "border-line text-muted")}>
                  {g.emoji} {g.xp} XP
                </button>
              ))}
            </div>
          </Row>
          <Row label="Theme">
            <div className="flex gap-2">
              {(["system", "light", "dark"] as const).map((t) => (
                <button key={t} onClick={() => s.setSettings({ theme: t })} className={clsx("rounded-full border px-3 py-1 text-sm capitalize", s.settings.theme === t ? "border-accent bg-accent/10 text-accent" : "border-line text-muted")}>
                  {t}
                </button>
              ))}
            </div>
          </Row>
          <Row label="Sound effects">
            <button onClick={() => s.setSettings({ sound: !s.settings.sound })} className="btn-ghost !py-1.5">
              {s.settings.sound ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />} {s.settings.sound ? "On" : "Off"}
            </button>
          </Row>
        </div>
      </section>

      {/* account */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">Account & data</h2>
        <div className="card mt-4 divide-y divide-line">
          <Row label={user ? `Signed in as ${user.email}` : "Cloud sync"}>
            {user ? (
              <button className="btn-ghost !py-1.5" onClick={() => void signOut()}>
                <LogOut className="h-4 w-4" /> Sign out
              </button>
            ) : enabled ? (
              <Link href="/auth" className="btn-primary !py-1.5">
                <Cloud className="h-4 w-4" /> Sign in to sync
              </Link>
            ) : (
              <span className="flex items-center gap-2 text-sm text-muted">
                <CloudOff className="h-4 w-4" /> Guest mode — progress saved on this device
              </span>
            )}
          </Row>
          <Row label="Backup">
            <div className="flex gap-2">
              <button className="btn-ghost !py-1.5" onClick={exportData}>
                <Download className="h-4 w-4" /> Export
              </button>
              <button className="btn-ghost !py-1.5" onClick={() => fileRef.current?.click()}>
                <Upload className="h-4 w-4" /> Import
              </button>
              <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && void importData(e.target.files[0])} />
            </div>
          </Row>
          <Row label="Start over">
            <button
              className="btn !py-1.5 border border-bad/40 text-bad hover:bg-bad/10"
              onClick={() => {
                if (confirm("Reset ALL progress, XP, badges and coins on this device? This cannot be undone.")) s.reset();
              }}
            >
              Reset progress
            </button>
          </Row>
        </div>
      </section>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </div>
  );
}
