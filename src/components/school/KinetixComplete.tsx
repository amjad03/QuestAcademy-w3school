"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useT } from "@/i18n";
import { supabase } from "@/lib/supabase";
import { Mascot } from "@/components/brand/Mascot";

/** Finishes "Sign in with Kinetix": exchanges the one-time link from /api/auth/kinetix for a session. */
export function KinetixComplete() {
  const t = useT();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(location.hash.slice(1));
    const tokenHash = params.get("token_hash");
    const next = params.get("next") || "/learn";
    history.replaceState(null, "", location.pathname);
    const sb = supabase();
    if (!sb || !tokenHash) return setError(t("kinetix.err.link", "This sign-in link is missing or has expired. Open Quest Academy from Kinetix again."));
    void sb.auth.verifyOtp({ token_hash: tokenHash, type: "magiclink" }).then(({ error }) => {
      if (error) setError(t("kinetix.err.verify", "We couldn't finish signing you in. Open Quest Academy from Kinetix again."));
      else router.replace(next.startsWith("/") && !next.startsWith("//") ? next : "/learn");
    });
  }, [router, t]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 text-center">
      <Mascot pose={error ? "think" : "wave"} size={120} />
      <h1 className="mt-6 text-2xl font-black">{error ? t("kinetix.failed", "Sign-in didn't work") : t("kinetix.signingIn", "Signing you in with Kinetix…")}</h1>
      {error && (
        <>
          <p className="mt-2 max-w-md font-semibold text-muted">{error}</p>
          <Link href="/auth" className="btn-primary mt-6">
            {t("kinetix.other", "Sign in another way")}
          </Link>
        </>
      )}
    </main>
  );
}
