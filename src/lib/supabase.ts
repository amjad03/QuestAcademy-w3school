"use client";

import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";
import { levelInfo, weekKey } from "./gamification";
import { learnerSnapshot, mergeStates, useLearner, type LearnerState } from "./store";
import { mergeNotebooks, notebookSnapshot, useNotebook, type NotebookData } from "./notebook-store";
import { useTutorPrefs } from "./tutor/store";
import { useParent, type ParentState } from "@/components/parent/store";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseEnabled = Boolean(url && anon);

let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient | null {
  if (!supabaseEnabled) return null;
  client ??= createClient(url!, anon!, { auth: { persistSession: true, autoRefreshToken: true } });
  return client;
}

/* ------------------------------------------------------------------------ */
/* Cloud sync: progress, notebook and settings travel with the account.     */
/* ------------------------------------------------------------------------ */

interface SettingsDoc {
  updatedAt: string;
  parent?: { timeLimit: ParentState["timeLimit"]; quietHours: ParentState["quietHours"] };
  tutor?: { tutorAllowed: boolean };
}

const META_KEY = "qa-sync-meta";

function readMeta(): { settingsAt?: string; userId?: string } {
  try {
    return JSON.parse(localStorage.getItem(META_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeMeta(patch: { settingsAt?: string; userId?: string }) {
  try {
    localStorage.setItem(META_KEY, JSON.stringify({ ...readMeta(), ...patch }));
  } catch {
    /* storage unavailable: sync still works for this session */
  }
}

/** Stamp a local settings change so the newer copy wins on the next sync. */
export const touchSettings = () => writeMeta({ settingsAt: new Date().toISOString() });

function settingsSnapshot(): SettingsDoc {
  const p = useParent.getState();
  return {
    updatedAt: readMeta().settingsAt ?? new Date(0).toISOString(),
    parent: { timeLimit: p.timeLimit, quietHours: p.quietHours },
    tutor: { tutorAllowed: useTutorPrefs.getState().tutorAllowed },
  };
}

function applySettings(doc: SettingsDoc) {
  if (doc.parent) useParent.setState({ timeLimit: doc.parent.timeLimit, quietHours: doc.parent.quietHours });
  if (doc.tutor) useTutorPrefs.setState({ tutorAllowed: doc.tutor.tutorAllowed });
  writeMeta({ settingsAt: doc.updatedAt });
}

let syncing: Promise<void> | null = null;

/**
 * Pull the cloud copy, merge it with this device, apply the result and push it
 * back. Runs on sign-in, when the tab regains focus and every few minutes.
 */
export function syncAccount(user: User): Promise<void> {
  syncing ??= (async () => {
    const sb = supabase();
    if (!sb) return;
    const { data, error } = await sb.from("learner_state").select("state, notebook, settings").eq("user_id", user.id).maybeSingle();
    if (error) {
      console.warn("[sync] pull failed", error.message);
      return;
    }

    // A different account signed in on this device: start from the cloud copy.
    const meta = readMeta();
    const switched = Boolean(meta.userId && meta.userId !== user.id);

    const local = learnerSnapshot();
    const cloudState = data?.state as LearnerState | undefined;
    const merged = cloudState ? (switched ? cloudState : mergeStates(local, cloudState)) : local;
    if (!merged.profile.name) {
      merged.profile = { ...merged.profile, name: (user.user_metadata?.full_name as string) || user.email?.split("@")[0] || "Learner" };
    }
    useLearner.getState().replaceState(merged);

    const cloudNotebook = (data?.notebook ?? {}) as Partial<NotebookData>;
    useNotebook.getState().replaceNotebook(switched ? mergeNotebooks({}, cloudNotebook) : mergeNotebooks(notebookSnapshot(), cloudNotebook));

    const cloudSettings = data?.settings as SettingsDoc | undefined;
    if (cloudSettings?.updatedAt && (switched || cloudSettings.updatedAt > settingsSnapshot().updatedAt)) applySettings(cloudSettings);

    writeMeta({ userId: user.id });
    await pushAccount(user.id);
  })().finally(() => {
    syncing = null;
  });
  return syncing;
}

/** Save this device's progress, notebook and settings to the account. */
export async function pushAccount(userId: string) {
  const sb = supabase();
  if (!sb) return;
  const state = learnerSnapshot();
  const lvl = levelInfo(state.xp);
  const week = weekKey();
  const now = new Date().toISOString();
  const results = await Promise.all([
    sb.from("learner_state").upsert({ user_id: userId, state, notebook: notebookSnapshot(), settings: settingsSnapshot(), updated_at: now }),
    sb.from("profiles").upsert({
      id: userId,
      display_name: state.profile.name || "Learner",
      avatar: state.profile.avatar,
      stage: state.profile.stage,
      xp: state.xp,
      level: lvl.level,
      streak: state.streak.count,
      weekly_xp: state.weekly.week === week ? state.weekly.xp : 0,
      week,
      updated_at: now,
    }),
  ]);
  for (const r of results) if (r.error) console.warn("[sync] push failed", r.error.message);
}

/** Forget everything stored on this device (used on sign-out). */
export function clearDeviceData() {
  useLearner.getState().reset();
  useNotebook.getState().resetNotebook();
  useParent.setState({ timeLimit: 0, quietHours: { enabled: false, start: "20:00", end: "07:00" } });
  useTutorPrefs.setState({ tutorAllowed: true });
  try {
    localStorage.removeItem(META_KEY);
  } catch {
    /* ignore */
  }
}

export interface LeaderRow {
  id: string;
  display_name: string;
  avatar: string;
  weekly_xp: number;
  xp: number;
  level: number;
  streak: number;
}

export async function fetchLeaderboard(): Promise<LeaderRow[] | null> {
  const sb = supabase();
  if (!sb) return null;
  const { data, error } = await sb
    .from("profiles")
    .select("id, display_name, avatar, weekly_xp, xp, level, streak")
    .eq("week", weekKey())
    .order("weekly_xp", { ascending: false })
    .limit(30);
  if (error) return null;
  return data as LeaderRow[];
}

/** Delete the signed-in account and everything stored for it. */
export async function deleteAccount(): Promise<{ ok: boolean; error?: string }> {
  const sb = supabase();
  const token = (await sb?.auth.getSession())?.data.session?.access_token;
  if (!sb || !token) return { ok: false, error: "Not signed in." };
  const res = await fetch("/api/account/delete", { method: "POST", headers: { Authorization: `Bearer ${token}` } }).catch(() => null);
  if (!res?.ok) return { ok: false, error: res?.status === 503 ? "Account deletion isn't set up on this site yet." : "Could not delete the account. Please try again." };
  await sb.auth.signOut();
  clearDeviceData();
  return { ok: true };
}
