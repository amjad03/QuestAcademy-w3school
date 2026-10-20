"use client";

import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";
import { levelInfo, weekKey } from "./gamification";
import { learnerSnapshot, mergeStates, useLearner, type LearnerState } from "./store";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseEnabled = Boolean(url && anon);

let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient | null {
  if (!supabaseEnabled) return null;
  client ??= createClient(url!, anon!, { auth: { persistSession: true, autoRefreshToken: true } });
  return client;
}

/** Pull the cloud state, merge it with local progress, then push the result. */
export async function syncOnLogin(user: User) {
  const sb = supabase();
  if (!sb) return;
  const { data } = await sb.from("learner_state").select("state").eq("user_id", user.id).maybeSingle();
  const local = learnerSnapshot();
  const merged = data?.state ? mergeStates(local, data.state as LearnerState) : local;
  if (!merged.profile.name) {
    merged.profile = { ...merged.profile, name: (user.user_metadata?.full_name as string) || user.email?.split("@")[0] || "Learner" };
  }
  useLearner.getState().replaceState(merged);
  await pushState(user.id, merged);
}

export async function pushState(userId: string, state: LearnerState = learnerSnapshot()) {
  const sb = supabase();
  if (!sb) return;
  const lvl = levelInfo(state.xp);
  const week = weekKey();
  await Promise.all([
    sb.from("learner_state").upsert({ user_id: userId, state, updated_at: new Date().toISOString() }),
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
      updated_at: new Date().toISOString(),
    }),
  ]);
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
