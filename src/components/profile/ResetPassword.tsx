"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import clsx from "clsx";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/providers";
import { LogoMark } from "@/components/brand/Mascot";
import { useT } from "@/i18n";

/** Landing page for the password-reset email: the link signs the learner in, then they pick a new password. */
export function ResetPassword() {
  const t = useT();
  const router = useRouter();
  const { user, loading } = useAuth();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return setMsg({ ok: false, text: t("auth.reset.mismatch", "The two passwords don’t match.") });
    setBusy(true);
    const { error } = (await supabase()?.auth.updateUser({ password })) ?? { error: null };
    setBusy(false);
    if (error) return setMsg({ ok: false, text: error.message });
    setMsg({ ok: true, text: t("auth.reset.done", "Your password has been changed.") });
    setTimeout(() => router.replace("/learn"), 1200);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 py-10">
      <div className="w-full max-w-[380px]">
        <div className="flex justify-center">
          <LogoMark size={56} />
        </div>
        <h1 className="mt-6 text-center text-3xl font-black">{t("auth.reset.title", "Choose a new password")}</h1>
        {loading ? (
          <div className="mt-10 flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted" />
          </div>
        ) : !user ? (
          <div className="mt-8 space-y-4 text-center">
            <p className="font-semibold leading-7 text-muted">{t("auth.reset.expired", "This reset link has expired or was already used. Request a new one from the log-in page.")}</p>
            <Link href="/auth" className="btn-primary w-full">
              {t("auth.reset.back", "Back to log in")}
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 space-y-3">
            <p className="text-center text-sm font-semibold text-muted">{user.email}</p>
            <input type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={t("auth.passwordNew", "Password (8+ characters)")} aria-label={t("auth.reset.new", "New password")} className="input" autoComplete="new-password" />
            <input type="password" required minLength={8} value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder={t("auth.reset.confirm", "Repeat the new password")} aria-label={t("auth.reset.confirm", "Repeat the new password")} className="input" autoComplete="new-password" />
            <button className="btn-primary w-full" disabled={busy}>
              {busy && <Loader2 className="h-4 w-4 animate-spin" />}
              {t("auth.reset.save", "Save new password")}
            </button>
            {msg && <p className={clsx("rounded-2xl p-3 text-center text-sm font-bold", msg.ok ? "bg-good-soft text-good-shade" : "bg-bad-soft text-bad-shade")}>{msg.text}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
