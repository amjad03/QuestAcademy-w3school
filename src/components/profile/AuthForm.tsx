"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2, X } from "lucide-react";
import clsx from "clsx";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/providers";
import { LogoMark } from "@/components/brand/Mascot";
import { useT } from "@/i18n";

type Mode = "signin" | "signup" | "magic" | "forgot";

export function AuthForm() {
  const t = useT();
  const { enabled, user } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const [mode, setMode] = useState<Mode>(params.get("mode") === "signup" ? "signup" : "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    if (user) router.replace("/learn");
  }, [user, router]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = supabase();
    if (!sb) return;
    setBusy(true);
    setMsg(null);
    const origin = window.location.origin;
    const redirect = `${origin}/learn`;
    if (mode === "forgot") {
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: `${origin}/auth/reset` });
      setBusy(false);
      // Same message either way, so the form can't be used to find out who has an account.
      if (error && error.status !== 400) setMsg({ ok: false, text: friendly(error.message) });
      else setMsg({ ok: true, text: t("auth.msg.resetSent", "If an account exists for that email, we have sent a link to choose a new password.") });
      return;
    }
    const res =
      mode === "magic"
        ? await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect } })
        : mode === "signup"
          ? await sb.auth.signUp({ email, password, options: { emailRedirectTo: redirect } })
          : await sb.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (res.error) setMsg({ ok: false, text: friendly(res.error.message) });
    else if (mode === "magic") setMsg({ ok: true, text: t("auth.msg.magicSent", "Check your inbox — we sent you a sign-in link.") });
    else if (mode === "signup" && res.data.user && (res.data.user.identities?.length ?? 0) === 0) setMsg({ ok: false, text: t("auth.msg.exists", "An account with this email already exists. Log in instead, or reset your password.") });
    else if (mode === "signup" && !res.data.session) setMsg({ ok: true, text: t("auth.msg.confirmEmail", "Almost there! Confirm your email to finish creating your profile.") });
  };

  const friendly = (m: string) =>
    /invalid login credentials/i.test(m)
      ? t("auth.err.credentials", "That email and password don’t match. Check them, or reset your password.")
      : /email not confirmed/i.test(m)
        ? t("auth.err.unconfirmed", "Please confirm your email first. We sent you a link when you signed up.")
        : /rate limit|too many/i.test(m)
          ? t("auth.err.rate", "Too many attempts. Please wait a minute and try again.")
          : /password should be/i.test(m)
            ? t("auth.err.weak", "Choose a longer password (at least 8 characters).")
            : m;

  const title =
    mode === "signup" ? t("auth.title.signup", "Create your profile") : mode === "magic" ? t("auth.title.magic", "Sign in with email") : mode === "forgot" ? t("auth.title.forgot", "Reset your password") : t("auth.title.signin", "Log in");

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="flex items-center justify-between px-5 pt-6">
        <Link href="/" className="grid h-10 w-10 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label={t("auth.close", "Close")}>
          <X className="h-7 w-7" strokeWidth={2.6} />
        </Link>
        {enabled && (
          <button onClick={() => { setMode(mode === "signup" ? "signin" : "signup"); setMsg(null); }} className="btn-ghost">
            {mode === "signup" ? t("auth.switch.login", "Log in") : t("auth.switch.signup", "Sign up")}
          </button>
        )}
      </div>

      <div className="mx-auto flex w-full max-w-[380px] flex-1 flex-col justify-center px-5 py-10">
        <div className="flex justify-center">
          <LogoMark size={64} />
        </div>
        <h1 className="mt-6 text-center text-3xl font-black">{title}</h1>

        {!enabled ? (
          <div className="mt-8 space-y-4">
            <p className="text-center font-semibold leading-7 text-muted">
              {t("auth.disabled.body", "Accounts aren’t switched on for this site yet. You can keep learning as a guest — your progress is saved on this device.")}
            </p>
            <Link href="/learn" className="btn-primary w-full">
              {t("auth.disabled.guest", "Continue as guest")}
            </Link>
            {process.env.NODE_ENV !== "production" && <p className="text-center text-xs font-semibold text-muted">{t("auth.disabled.owner", "Site owner: add the Supabase keys described in the README to enable sign-in.")}</p>}
          </div>
        ) : (
          <>
            <form onSubmit={submit} className="mt-8 space-y-3">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("auth.email", "Email")} className="input" autoComplete="email" aria-label={t("auth.email", "Email")} />
              {(mode === "signin" || mode === "signup") && (
                <input
                  type="password"
                  required
                  minLength={mode === "signup" ? 8 : 1}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === "signup" ? t("auth.passwordNew", "Password (8+ characters)") : t("auth.password", "Password")}
                  className="input"
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                  aria-label={t("auth.password", "Password")}
                />
              )}
              <button className="btn-primary w-full" disabled={busy}>
                {busy && <Loader2 className="h-4 w-4 animate-spin" />}
                {mode === "signin" ? t("auth.submit.signin", "Log in") : mode === "signup" ? t("auth.submit.signup", "Create profile") : mode === "forgot" ? t("auth.submit.reset", "Send reset link") : t("auth.submit.magic", "Email me a link")}
              </button>
            </form>

            {msg && <p className={clsx("mt-4 rounded-2xl p-3 text-center text-sm font-bold", msg.ok ? "bg-good-soft text-good-shade" : "bg-bad-soft text-bad-shade")}>{msg.text}</p>}

            <div className="mt-4 flex flex-col items-center gap-1">
              {mode === "signin" && (
                <button type="button" onClick={() => { setMode("forgot"); setMsg(null); }} className="btn-flat text-sm">
                  {t("auth.toggle.forgot", "Forgot password?")}
                </button>
              )}
              {mode === "magic" || mode === "forgot" ? (
                <button type="button" onClick={() => { setMode("signin"); setMsg(null); }} className="btn-flat text-sm">
                  {t("auth.toggle.password", "Use a password instead")}
                </button>
              ) : (
                <button type="button" onClick={() => { setMode("magic"); setMsg(null); }} className="btn-flat text-sm">
                  {t("auth.toggle.magic", "Email me a sign-in link")}
                </button>
              )}
            </div>

            <p className="mt-8 text-center text-sm font-semibold leading-6 text-muted">{t("auth.mergeNote", "Your guest progress is merged into your profile automatically when you sign in.")}</p>
          </>
        )}
      </div>
    </div>
  );
}
