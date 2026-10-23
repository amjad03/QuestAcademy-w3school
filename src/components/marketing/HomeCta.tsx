"use client";

import Link from "next/link";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";
import { useT } from "@/i18n";

export function HomeCta() {
  const hydrated = useHydrated();
  const onboarded = useLearner((s) => s.profile.onboarded);
  const t = useT();
  return (
    <div className="mx-auto mt-9 flex w-full max-w-sm flex-col gap-3 lg:mx-0">
      {hydrated && onboarded ? (
        <Link href="/learn" className="btn-primary w-full py-4 text-base">
          {t("site.cta.continue", "Continue learning")}
        </Link>
      ) : (
        <>
          <Link href="/onboarding" className="btn-primary w-full py-4 text-base">
            {t("site.cta.getStarted", "Get started")}
          </Link>
          <Link href="/auth" className="btn-ghost w-full py-4 text-base">
            {t("site.cta.haveAccount", "I already have an account")}
          </Link>
        </>
      )}
    </div>
  );
}
