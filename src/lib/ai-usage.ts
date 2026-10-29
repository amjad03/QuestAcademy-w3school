import "server-only";
import type { User } from "@supabase/supabase-js";
import { hashIp, supabaseAdmin } from "@/lib/supabase-server";

/**
 * Log one AI request (tokens in/out per model) to `ai_usage` for the admin cost page.
 * Never throws and never blocks the learner: without Supabase it does nothing.
 */

export interface UsageLike {
  input_tokens?: number | null;
  output_tokens?: number | null;
  cache_read_input_tokens?: number | null;
  cache_creation_input_tokens?: number | null;
}

/** USD per million tokens. Override with AI_PRICE_<MODEL>="in,out,cacheRead,cacheWrite" (model id upper-cased, dashes as underscores). */
const DEFAULT_PRICES: Record<string, [number, number, number, number]> = {
  "claude-haiku-5-5": [0.1, 0.5, 0.01, 0.125],
  "claude-sonnet-5-5": [2, 10, 0.2, 2.5],
  "claude-opus-5-5": [4, 20, 0.2, 5],
};

export function priceFor(model: string): [number, number, number, number] {
  const env = process.env[`AI_PRICE_${model.toUpperCase().replace(/[^A-Z0-9]/g, "_")}`];
  const parsed = env?.split(",").map(Number);
  if (parsed && parsed.length === 4 && parsed.every((n) => Number.isFinite(n) && n >= 0)) return parsed as [number, number, number, number];
  return DEFAULT_PRICES[model] ?? DEFAULT_PRICES["claude-haiku-5-5"];
}

export const usdToInr = () => {
  const n = Number(process.env.USD_INR);
  return Number.isFinite(n) && n > 0 ? n : 88;
};

const envNum = (name: string, fallback: number) => {
  const n = Number(process.env[name]);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
};

/** Sarvam voice: input_tokens holds TTS characters / STT seconds. Rates in INR (SARVAM_TTS_INR_PER_10K_CHARS, SARVAM_STT_INR_PER_HOUR). */
export const voiceCostInr = (model: string, units: number) =>
  model === "sarvam-tts" ? (units / 10000) * envNum("SARVAM_TTS_INR_PER_10K_CHARS", 15) : (units / 3600) * envNum("SARVAM_STT_INR_PER_HOUR", 30);

export function costInr(model: string, t: { input: number; output: number; cacheRead: number; cacheWrite: number }) {
  if (model.startsWith("sarvam-")) return voiceCostInr(model, t.input);
  const [i, o, cr, cw] = priceFor(model);
  return ((t.input * i + t.output * o + t.cacheRead * cr + t.cacheWrite * cw) / 1_000_000) * usdToInr();
}

/* School lookup, cached per instance: a learner's school rarely changes. */
const schoolCache = new Map<string, { id: string | null; at: number }>();
const SCHOOL_TTL = 10 * 60 * 1000;

async function schoolOf(userId: string): Promise<string | null> {
  const hit = schoolCache.get(userId);
  if (hit && Date.now() - hit.at < SCHOOL_TTL) return hit.id;
  const sb = supabaseAdmin();
  let id: string | null = null;
  if (sb) {
    const { data, error } = await sb.from("memberships").select("school_id").eq("user_id", userId).order("created_at").limit(1).maybeSingle();
    // The school tables may not be migrated yet; that just means "no school".
    if (!error) id = (data?.school_id as string | undefined) ?? null;
  }
  schoolCache.set(userId, { id, at: Date.now() });
  if (schoolCache.size > 5000) schoolCache.clear();
  return id;
}

export async function logAiUsage(o: { route: string; model: string; user: User | null; ip: string; usage: UsageLike | null | undefined }) {
  const sb = supabaseAdmin();
  if (!sb || !o.usage) return;
  try {
    const school_id = o.user ? await schoolOf(o.user.id) : null;
    const { error } = await sb.from("ai_usage").insert({
      route: o.route,
      model: o.model,
      user_id: o.user?.id ?? null,
      school_id,
      guest_key: o.user ? null : hashIp(o.ip),
      input_tokens: o.usage.input_tokens ?? 0,
      output_tokens: o.usage.output_tokens ?? 0,
      cache_read_tokens: o.usage.cache_read_input_tokens ?? 0,
      cache_write_tokens: o.usage.cache_creation_input_tokens ?? 0,
    });
    if (error) console.error("[ai-usage] insert failed", error.message);
  } catch (err) {
    console.error("[ai-usage] log failed", err instanceof Error ? err.message : err);
  }
}

/** Log one Sarvam voice call (kind tts/stt; units = characters or seconds, stored in input_tokens). */
export async function logVoiceUsage(o: { kind: "tts" | "stt"; units: number; user: User | null; ip: string }) {
  const sb = supabaseAdmin();
  if (!sb || !(o.units > 0)) return;
  try {
    const school_id = o.user ? await schoolOf(o.user.id) : null;
    const { error } = await sb.from("ai_usage").insert({
      route: `voice/${o.kind}`,
      model: `sarvam-${o.kind}`,
      user_id: o.user?.id ?? null,
      school_id,
      guest_key: o.user ? null : hashIp(o.ip),
      input_tokens: Math.ceil(o.units),
      output_tokens: 0,
    });
    if (error) console.error("[ai-usage] voice insert failed", error.message);
  } catch (err) {
    console.error("[ai-usage] voice log failed", err instanceof Error ? err.message : err);
  }
}
