"use client";

import Link from "next/link";
import { POLICY_VERSION } from "@/lib/compliance";
import type { PersonalProfile } from "@/lib/personalise";
import { useT } from "@/i18n";

/** True when a guardian contact is given and the consent box is ticked. */
export const parentConsentReady = (p: PersonalProfile) => Boolean((p.parentEmail?.trim() || p.parentPhone?.trim()) && p.parentConsent?.at);

/**
 * Verifiable parental consent for learners under 18 (DPDP Act 2023, s. 9): a guardian's
 * contact plus an explicit declaration, saved with a timestamp. When the account is
 * signed in it is recorded server-side, and the guardian gets an email to confirm.
 */
export function ParentConsent({ value, onChange, young }: { value: PersonalProfile; onChange: (p: Partial<PersonalProfile>) => void; young: boolean }) {
  const t = useT();
  const checked = Boolean(value.parentConsent?.at);
  const hasContact = Boolean(value.parentEmail?.trim() || value.parentPhone?.trim());
  return (
    <div className="mt-4 space-y-2 rounded-2xl border border-line bg-surface-2 p-4">
      <label className="flex items-start gap-3 text-sm font-semibold">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 shrink-0"
          checked={checked}
          onChange={(e) => onChange({ parentConsent: e.target.checked ? { at: new Date().toISOString(), policyVersion: POLICY_VERSION } : null })}
        />
        <span>
          {young
            ? t("consent.parent.selfLabel", "I am this child’s parent or legal guardian. I have read the privacy policy and agree to Quest Academy saving their learning progress and, if they use it, the AI tutor.")
            : t("consent.parent.label", "My parent or guardian has read the privacy policy and agrees to Quest Academy saving my learning progress and, if I use it, the AI tutor.")}{" "}
          <Link href="/privacy" target="_blank" className="font-bold text-accent">
            {t("consent.parent.policy", "Privacy policy")}
          </Link>
        </span>
      </label>
      <p className="text-xs font-semibold text-muted">
        {!hasContact
          ? t("consent.parent.needContact", "Add a parent’s email or phone above so we can reach them.")
          : value.parentEmail?.trim()
            ? t("consent.parent.email", "If you have an account, we’ll email the parent to confirm. They can withdraw consent at any time.")
            : t("consent.parent.withdraw", "A parent can withdraw consent at any time by deleting the account in Settings.")}
      </p>
    </div>
  );
}
