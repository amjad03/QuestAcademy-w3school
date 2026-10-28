/**
 * Consent under India's Digital Personal Data Protection Act 2023.
 * Shared by the browser (consent banner, onboarding) and the server routes.
 */

/** Bump when the privacy policy or terms change in a way that needs fresh consent. */
export const POLICY_VERSION = "2026-10-28";

export type ConsentKind = "analytics" | "parental" | "terms";

export interface ParentalConsent {
  /** When the guardian ticked the box (ISO). */
  at: string;
  parentEmail?: string;
  parentPhone?: string;
  policyVersion: string;
}

const KEY = "qa-consent";

export interface LocalConsent {
  analytics?: { granted: boolean; at: string; v: string };
}

export function readLocalConsent(): LocalConsent {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") as LocalConsent;
  } catch {
    return {};
  }
}

export function writeLocalConsent(patch: LocalConsent) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...readLocalConsent(), ...patch }));
  } catch {
    /* storage blocked: the choice lasts for this page view */
  }
}

/** Under-18s need a parent or guardian’s consent (DPDP Act s. 9). Unknown age, and the "17–18" group, count as children. */
export const needsParentalConsent = (age: number | null | undefined) => age == null || age <= 18;

/** Grievance officer shown on the privacy page (DPDP Act s. 8(10)). Set these before launch. */
export const GRIEVANCE = {
  name: process.env.NEXT_PUBLIC_GRIEVANCE_OFFICER_NAME || "[Grievance Officer name]",
  email: process.env.NEXT_PUBLIC_GRIEVANCE_EMAIL || "privacy@[your-domain]",
  address: process.env.NEXT_PUBLIC_GRIEVANCE_ADDRESS || "[Registered office address, India]",
};
