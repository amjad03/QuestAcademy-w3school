"use client";

import { useEffect, useState } from "react";
import { useT } from "@/i18n";

const LOGIN_URL = process.env.NEXT_PUBLIC_KINETIX_LOGIN_URL;

/**
 * "Sign in with Kinetix" on the sign-in page. Shown only when NEXT_PUBLIC_KINETIX_LOGIN_URL is set;
 * Kinetix authenticates the user and redirects back to /api/auth/kinetix with a signed token.
 */
export function KinetixButton() {
  const t = useT();
  const [error, setError] = useState<string | null>(null);
  const [origin, setOrigin] = useState<string | null>(null);
  useEffect(() => {
    setOrigin(location.origin);
    const e = new URLSearchParams(location.search).get("kinetix_error");
    if (e)
      setError(
        e === "disabled"
          ? t("kinetix.err.disabled", "Sign in with Kinetix isn't switched on for this site.")
          : e === "token_used"
            ? t("kinetix.err.used", "That Kinetix sign-in link was already used. Open Quest Academy from Kinetix again.")
            : t("kinetix.err.generic", "Kinetix sign-in didn't work. Try again from Kinetix, or sign in below."),
      );
  }, [t]);
  if (!LOGIN_URL && !error) return null;
  const href = LOGIN_URL && origin ? `${LOGIN_URL}${LOGIN_URL.includes("?") ? "&" : "?"}redirect_uri=${encodeURIComponent(`${origin}/api/auth/kinetix`)}` : null;
  return (
    <div className="mt-8 space-y-3">
      {error && <p className="rounded-xl bg-bad-soft px-3 py-2 text-sm font-bold text-bad">{error}</p>}
      {href && (
        <a href={href} className="btn-ghost w-full">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-ink text-xs font-black text-surface" aria-hidden>
            K
          </span>
          {t("kinetix.button", "Sign in with Kinetix")}
        </a>
      )}
    </div>
  );
}
