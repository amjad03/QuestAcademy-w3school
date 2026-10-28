"use client";

import { useEffect } from "react";
import { analyticsAllowed, identify, startAnalytics, track } from "@/lib/analytics";
import { setMonitoringUser } from "@/lib/monitoring";
import { POLICY_VERSION, readLocalConsent } from "@/lib/compliance";
import { supabase } from "@/lib/supabase";
import { useLearner, type LearnerState } from "@/lib/store";
import { ConsentBanner } from "@/components/compliance/ConsentBanner";

const flag = (k: string) => {
  try {
    return localStorage.getItem(k) === "1";
  } catch {
    return true; // storage blocked: don't risk sending twice
  }
};
const setFlag = (k: string) => {
  try {
    localStorage.setItem(k, "1");
  } catch {
    /* ignore */
  }
};

async function postConsent(token: string, body: Record<string, unknown>) {
  const res = await fetch("/api/consent", { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(() => null);
  return Boolean(res?.ok);
}

/** Copy consent given on this device (possibly as a guest) into the account's consent records, once each. */
async function syncConsent(uid: string, token: string) {
  const p = useLearner.getState().profile;
  const pc = p.personal?.parentConsent;
  if (pc && !flag(`qa-consent-synced:${uid}:parental:${pc.at}`)) {
    const ok = await postConsent(token, { kind: "parental", granted: true, givenAt: pc.at, policyVersion: pc.policyVersion, parentEmail: p.personal?.parentEmail, parentPhone: p.personal?.parentPhone });
    if (ok) setFlag(`qa-consent-synced:${uid}:parental:${pc.at}`);
  }
  const a = readLocalConsent().analytics;
  if (a && !flag(`qa-consent-synced:${uid}:analytics:${a.at}`)) {
    const ok = await postConsent(token, { kind: "analytics", granted: a.granted, givenAt: a.at, policyVersion: a.v || POLICY_VERSION });
    if (ok) setFlag(`qa-consent-synced:${uid}:analytics:${a.at}`);
  }
}

/** Product events that can be read off the learner store without touching each screen. */
function storeEvents(s: LearnerState, prev: LearnerState) {
  if (s.profile.onboarded && !prev.profile.onboarded) track("onboarding_done", { stage: s.profile.stage, mode: s.profile.mode, board: s.profile.board, grade: s.profile.grade });
  // Exactly one new entry = a real action; bulk changes come from cloud sync or an import.
  if (s.lastLesson && s.lastLesson !== prev.lastLesson && s.lessons === prev.lessons) track("lesson_start", { lesson_id: s.lastLesson });
  if (s.lessons !== prev.lessons) {
    const added = Object.keys(s.lessons).filter((k) => !prev.lessons[k]);
    if (added.length === 1) track("lesson_complete", { lesson_id: added[0], quiz: s.lessons[added[0]].bestQuiz ?? null });
  }
}

/**
 * Wires monitoring and analytics to the session: identifies the account by id only,
 * records consent server-side after sign-in, and shows the consent banner.
 */
export function Monitoring() {
  useEffect(() => {
    startAnalytics();
    const unsub = useLearner.subscribe(storeEvents);
    const sb = supabase();
    const auth = sb?.auth.onAuthStateChange((event, session) => {
      const u = session?.user ?? null;
      if (event === "SIGNED_OUT") {
        identify(null);
        setMonitoringUser(null);
        return;
      }
      if (!u || (event !== "SIGNED_IN" && event !== "INITIAL_SESSION")) return;
      identify(u.id);
      setMonitoringUser(u.id);
      // A brand-new account (created in the last 10 minutes), counted once per device.
      if (Date.now() - Date.parse(u.created_at) < 10 * 60 * 1000 && !flag(`qa-signup-tracked:${u.id}`) && analyticsAllowed()) {
        setFlag(`qa-signup-tracked:${u.id}`);
        track("signup", { method: u.app_metadata?.provider ?? "email" });
      }
      // Outside the auth callback: Supabase warns against awaiting its own calls inside it.
      setTimeout(() => void syncConsent(u.id, session!.access_token), 0);
    });
    const onConsent = () => {
      void sb?.auth.getSession().then(({ data }) => data.session && syncConsent(data.session.user.id, data.session.access_token));
    };
    window.addEventListener("qa-consent", onConsent);
    return () => {
      unsub();
      auth?.data.subscription.unsubscribe();
      window.removeEventListener("qa-consent", onConsent);
    };
  }, []);

  return <ConsentBanner />;
}
