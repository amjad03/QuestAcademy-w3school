"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { analyticsChoice, analyticsConfigured, setAnalyticsConsent } from "@/lib/analytics";
import { useT } from "@/i18n";

/**
 * Asks once whether we may use product analytics. Shown only when analytics is
 * configured; essential storage (progress, settings) needs no consent and is explained
 * in the privacy policy.
 */
export function ConsentBanner() {
  const t = useT();
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    if (!analyticsConfigured) return;
    const sync = () => setAsk(analyticsChoice() === null);
    sync();
    window.addEventListener("qa-consent", sync);
    return () => window.removeEventListener("qa-consent", sync);
  }, []);

  if (!ask) return null;
  return (
    <div role="dialog" aria-live="polite" aria-label={t("consent.title", "Privacy choice")} className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-line bg-surface p-4 shadow-lg sm:bottom-5">
      <p className="text-sm font-semibold">
        {t("consent.body", "Can we count how Quest Academy is used (which lessons are opened and finished) to make it better? We never see names or answers, and there are no ads.")}{" "}
        <Link href="/privacy#analytics" className="font-bold text-accent">
          {t("consent.more", "Learn more")}
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="btn-primary" onClick={() => setAnalyticsConsent(true)}>
          {t("consent.allow", "Allow")}
        </button>
        <button type="button" className="btn-ghost" onClick={() => setAnalyticsConsent(false)}>
          {t("consent.deny", "No thanks")}
        </button>
      </div>
    </div>
  );
}
