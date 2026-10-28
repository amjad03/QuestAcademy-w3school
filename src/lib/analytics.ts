"use client";

import type { PostHog } from "posthog-js";
import { POLICY_VERSION, readLocalConsent, writeLocalConsent } from "./compliance";

/**
 * Product analytics (PostHog). Silent unless NEXT_PUBLIC_POSTHOG_KEY is set AND the
 * learner (or their parent) has said yes in the consent banner. Events carry the
 * account id at most: never names, emails, phone numbers or free text.
 */

export type AnalyticsEvent =
  | "signup"
  | "onboarding_done"
  | "lesson_start"
  | "lesson_complete"
  | "practice_done"
  | "mock_submit"
  | "tutor_session_start"
  | "tutor_session_end"
  | "voice_engine"
  | "assignment_done";

type Props = Record<string, string | number | boolean | null | undefined>;

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

export const analyticsConfigured = Boolean(KEY);

let ph: PostHog | null = null;
let loading: Promise<PostHog | null> | null = null;
let pendingId: string | null = null;

export const analyticsAllowed = () => analyticsConfigured && readLocalConsent().analytics?.granted === true;
/** null = not asked yet. */
export const analyticsChoice = (): boolean | null => readLocalConsent().analytics?.granted ?? null;

function load(): Promise<PostHog | null> {
  if (!analyticsAllowed()) return Promise.resolve(null);
  if (ph) return Promise.resolve(ph);
  loading ??= import("posthog-js")
    .then(({ default: posthog }) => {
      posthog.init(KEY!, {
        api_host: HOST,
        person_profiles: "identified_only",
        capture_pageview: "history_change",
        autocapture: false,
        disable_session_recording: true,
        disable_surveys: true,
        persistence: "localStorage",
        // Drop anything that could identify a person beyond the account id.
        property_denylist: ["$ip", "$current_url_search", "$referrer", "$initial_referrer"],
        sanitize_properties: (props) => {
          for (const k of ["$current_url", "$pathname"]) if (typeof props[k] === "string") props[k] = String(props[k]).split(/[?#]/)[0];
          return props;
        },
      });
      if (posthog.has_opted_out_capturing()) posthog.opt_in_capturing();
      ph = posthog;
      if (pendingId) posthog.identify(pendingId);
      return posthog;
    })
    .catch(() => null);
  return loading;
}

export function track(event: AnalyticsEvent, props?: Props) {
  if (!analyticsAllowed()) return;
  void load().then((p) => p?.capture(event, props));
}

export function identify(userId: string | null) {
  pendingId = userId;
  if (!analyticsAllowed()) return;
  void load().then((p) => (userId ? p?.identify(userId) : p?.reset()));
}

/** Save the analytics choice on this device; turning it off stops capture at once. */
export function setAnalyticsConsent(granted: boolean) {
  writeLocalConsent({ analytics: { granted, at: new Date().toISOString(), v: POLICY_VERSION } });
  if (granted) void load();
  else if (ph) {
    ph.opt_out_capturing();
    ph.reset();
    ph = null;
    loading = null;
  }
  if (typeof window !== "undefined") window.dispatchEvent(new Event("qa-consent"));
}

/** Start PostHog on page load if the learner already agreed. */
export function startAnalytics() {
  if (analyticsAllowed()) {
    void load();
  }
}
