"use client";

import Link from "next/link";
import { KinetixButton } from "@/components/school/KinetixButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff, Loader2, X } from "lucide-react";
import clsx from "clsx";
import { supabase, syncAccount } from "@/lib/supabase";
import { useLearner } from "@/lib/store";
import { useAuth } from "@/components/providers";
import { LogoMark } from "@/components/brand/Mascot";
import { useT } from "@/i18n";

type Mode = "signin" | "signup" | "magic" | "forgot";
type Msg = { ok: boolean; text: string; resend?: boolean };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RESEND_COOLDOWN = 60;

/** Only same-site paths are allowed as a post-login destination. */
function safeNext(raw: string | null) {
  return raw && raw.startsWith("/") && !raw.startsWith("//") && !raw.startsWith("/auth") ? raw : null;
}

/** Errors Supabase puts in the URL when an email link is used (expired, already used…). */
function linkError() {
  if (typeof window === "undefined") return null;
  const read = (s: string) => new URLSearchParams(s.replace(/^[#?]/, ""));
  const h = read(window.location.hash);
  const q = read(window.location.search);
  const code = h.get("error_code") || q.get("error_code") || h.get("error") || q.get("error");
  return code ? { code, description: h.get("error_description") || q.get("error_description") || "" } : null;
}

export function AuthForm() {
  const t = useT();
  const { enabled, user } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const next = safeNext(params.get("next"));
  const [mode, setMode] = useState<Mode>(params.get("mode") === "signup" ? "signup" : "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [routing, setRouting] = useState(false);
  const [touched, setTouched] = useState(false);
  const [msg, setMsg] = useState<Msg | null>(null);
  const [cooldown, setCooldown] = useState(0);
  const inflight = useRef(false);

  // An expired or reused email link lands here with the reason in the URL.
  useEffect(() => {
    const e = linkError();
    if (!e) return;
    setMsg({
      ok: false,
      text: /expired|otp_expired|invalid/i.test(e.code + e.description)
        ? t("auth.err.linkExpired", "That email link has expired or was already used. Log in below, or ask for a new link.")
        : t("auth.err.link", "That email link didn’t work. Log in below, or ask for a new link."),
    });
    window.history.replaceState(null, "", window.location.pathname + window.location.search.replace(/[?&]error[^&]*/g, ""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Signed in (here, or by an email link): load the cloud copy first, then go to onboarding or home.
  useEffect(() => {
    if (!user) return;
    let live = true;
    setRouting(true);
    const go = () => live && router.replace(next ?? (useLearner.getState().profile.onboarded ? "/learn" : "/onboarding"));
    // Never strand the learner here if the sync is slow.
    const timer = setTimeout(go, 6000);
    syncAccount(user)
      .catch(() => {})
      .finally(() => {
        clearTimeout(timer);
        go();
      });
    return () => {
      live = false;
      clearTimeout(timer);
    };
  }, [user, router, next]);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [cooldown]);

  const cleanEmail = email.trim().toLowerCase();
  const needsPassword = mode === "signin" || mode === "signup";
  const emailError = !cleanEmail ? t("auth.val.emailRequired", "Enter your email address.") : !EMAIL_RE.test(cleanEmail) ? t("auth.val.email", "That email address doesn’t look right. Check for typos.") : null;
  const passwordError = !needsPassword
    ? null
    : !password
      ? t("auth.val.passwordRequired", "Enter your password.")
      : mode === "signup" && password.length < 8
        ? t("auth.err.weak", "Choose a longer password (at least 8 characters).")
        : mode === "signup" && password.trim().toLowerCase() === cleanEmail
          ? t("auth.val.passwordEmail", "Your password can’t be the same as your email.")
          : null;

  const friendly = (err: { message?: string; code?: string; status?: number; name?: string }): Msg => {
    const m = `${err.code ?? ""} ${err.message ?? ""}`;
    if ((err.name === "AuthRetryableFetchError" && !((err.status ?? 0) >= 500)) || err.status === 0 || /failed to fetch|network|load failed|fetch failed/i.test(m))
      return { ok: false, text: t("auth.err.network", "We can’t reach the server. Check your internet connection and try again.") };
    if (/user_already_exists|already registered|already been registered/i.test(m)) return { ok: false, text: t("auth.msg.exists", "An account with this email already exists. Log in instead, or reset your password.") };
    if (/invalid_credentials|invalid login credentials/i.test(m)) return { ok: false, text: t("auth.err.credentials", "That email and password don’t match. Check them, or reset your password.") };
    if (/email_not_confirmed|email not confirmed/i.test(m)) return { ok: false, text: t("auth.err.unconfirmed", "Please confirm your email first. We sent you a link when you signed up."), resend: true };
    if (/over_email_send_rate_limit|email rate limit/i.test(m))
      return { ok: false, text: t("auth.err.emailRate", "So many people are signing up that our email service is busy. Please wait a few minutes and try again.") };
    if (err.status === 429 || /rate limit|too many|over_request_rate_limit/i.test(m)) return { ok: false, text: t("auth.err.rate", "Too many attempts. Please wait a minute and try again.") };
    if (/weak_password|password should|weak|pwned|leaked/i.test(m)) return { ok: false, text: t("auth.err.weakKnown", "That password is too easy to guess. Use 8+ characters with a mix of letters and numbers.") };
    if (/email_address_invalid|invalid.*email|email.*invalid/i.test(m)) return { ok: false, text: t("auth.val.email", "That email address doesn’t look right. Check for typos.") };
    if (/signup_disabled|signups not allowed/i.test(m)) return { ok: false, text: t("auth.err.signupOff", "New sign-ups are switched off right now. Please ask your teacher.") };
    if ((err.status ?? 0) >= 500) return { ok: false, text: t("auth.err.server", "Our sign-in service is busy. Please try again in a moment.") };
    return { ok: false, text: err.message || t("auth.err.generic", "Something went wrong. Please try again.") };
  };

  const switchMode = (m: Mode) => {
    if (busy) return;
    setMode(m);
    setMsg(null);
    setTouched(false);
  };

  const resend = async () => {
    const sb = supabase();
    if (!sb || cooldown > 0 || busy) return;
    setBusy(true);
    try {
      const { error } = await sb.auth.resend({ type: "signup", email: cleanEmail, options: { emailRedirectTo: redirectUrl() } });
      setMsg(error ? friendly(error) : { ok: true, text: t("auth.msg.resent", "Sent again. Check your inbox and spam folder.") });
      if (!error) setCooldown(RESEND_COOLDOWN);
    } catch (e) {
      setMsg(friendly(e as Error));
    } finally {
      setBusy(false);
    }
  };

  const redirectUrl = () => `${window.location.origin}/auth${next ? `?next=${encodeURIComponent(next)}` : ""}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = supabase();
    if (!sb || inflight.current) return;
    setTouched(true);
    if (emailError || passwordError) return;
    inflight.current = true;
    setBusy(true);
    setMsg(null);
    try {
      if (mode === "forgot") {
        const { error } = await sb.auth.resetPasswordForEmail(cleanEmail, { redirectTo: `${window.location.origin}/auth/reset` });
        // Same message either way, so the form can't be used to find out who has an account.
        if (error && error.status !== 400) setMsg(friendly(error));
        else setMsg({ ok: true, text: t("auth.msg.resetSent", "If an account exists for that email, we have sent a link to choose a new password.") });
        return;
      }
      const res =
        mode === "magic"
          ? await sb.auth.signInWithOtp({ email: cleanEmail, options: { emailRedirectTo: redirectUrl() } })
          : mode === "signup"
            ? await sb.auth.signUp({ email: cleanEmail, password, options: { emailRedirectTo: redirectUrl() } })
            : await sb.auth.signInWithPassword({ email: cleanEmail, password });
      if (res.error) setMsg(friendly(res.error));
      else if (mode === "magic") setMsg({ ok: true, text: t("auth.msg.magicSent", "Check your inbox — we sent you a sign-in link.") });
      else if (mode === "signup" && res.data.user && (res.data.user.identities?.length ?? 0) === 0) setMsg({ ok: false, text: t("auth.msg.exists", "An account with this email already exists. Log in instead, or reset your password.") });
      else if (mode === "signup" && !res.data.session) {
        setMsg({ ok: true, text: t("auth.msg.confirmEmail", "Almost there! Confirm your email to finish creating your profile."), resend: true });
        setCooldown(RESEND_COOLDOWN);
      }
    } catch (err) {
      setMsg(friendly(err as Error));
    } finally {
      inflight.current = false;
      setBusy(false);
    }
  };

  const title =
    mode === "signup" ? t("auth.title.signup", "Create your profile") : mode === "magic" ? t("auth.title.magic", "Sign in with email") : mode === "forgot" ? t("auth.title.forgot", "Reset your password") : t("auth.title.signin", "Log in");
  const busyLabel = mode === "signup" ? t("auth.busy.signup", "Creating your profile…") : mode === "signin" ? t("auth.busy.signin", "Logging in…") : t("auth.busy.send", "Sending…");
  const showEmailErr = touched && emailError;
  const showPwErr = touched && passwordError;

  if (routing)
    return (
      <div className="grid min-h-screen place-items-center bg-bg px-5" role="status" aria-live="polite">
        <div className="flex flex-col items-center gap-4 text-center">
          <LogoMark size={56} />
          <p className="flex items-center gap-2 font-bold text-muted">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> {t("auth.loadingProfile", "Getting your profile ready…")}
          </p>
        </div>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <div className="flex items-center justify-between px-5 pt-6">
        <Link href="/" className="grid h-10 w-10 place-items-center rounded-xl text-muted hover:bg-surface-2" aria-label={t("auth.close", "Close")}>
          <X className="h-7 w-7" strokeWidth={2.6} />
        </Link>
        {enabled && (
          <button type="button" onClick={() => switchMode(mode === "signup" ? "signin" : "signup")} disabled={busy} className="btn-ghost">
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
            <KinetixButton />
            <form onSubmit={submit} noValidate className="mt-8 space-y-3" aria-busy={busy}>
              <div>
                <input
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("auth.email", "Email")}
                  className={clsx("input", showEmailErr && "!border-bad")}
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  aria-label={t("auth.email", "Email")}
                  aria-invalid={Boolean(showEmailErr)}
                  aria-describedby={showEmailErr ? "auth-email-err" : undefined}
                  disabled={busy}
                />
                {showEmailErr && (
                  <p id="auth-email-err" className="mt-1 px-1 text-sm font-bold text-bad-shade">
                    {emailError}
                  </p>
                )}
              </div>
              {needsPassword && (
                <div>
                  <div className="relative">
                    <input
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={mode === "signup" ? t("auth.passwordNew", "Password (8+ characters)") : t("auth.password", "Password")}
                      className={clsx("input !pr-12", showPwErr && "!border-bad")}
                      autoComplete={mode === "signup" ? "new-password" : "current-password"}
                      aria-label={t("auth.password", "Password")}
                      aria-invalid={Boolean(showPwErr)}
                      aria-describedby={showPwErr ? "auth-pw-err" : undefined}
                      disabled={busy}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-muted hover:bg-surface-2"
                      aria-label={showPw ? t("auth.hidePassword", "Hide password") : t("auth.showPassword", "Show password")}
                      aria-pressed={showPw}
                    >
                      {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {showPwErr ? (
                    <p id="auth-pw-err" className="mt-1 px-1 text-sm font-bold text-bad-shade">
                      {passwordError}
                    </p>
                  ) : (
                    mode === "signup" && <p className="mt-1 px-1 text-xs font-semibold text-muted">{t("auth.pwHint", "At least 8 characters. Mix letters and numbers.")}</p>
                  )}
                </div>
              )}
              <button type="submit" className="btn-primary w-full" disabled={busy}>
                {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                {busy
                  ? busyLabel
                  : mode === "signin"
                    ? t("auth.submit.signin", "Log in")
                    : mode === "signup"
                      ? t("auth.submit.signup", "Create profile")
                      : mode === "forgot"
                        ? t("auth.submit.reset", "Send reset link")
                        : t("auth.submit.magic", "Email me a link")}
              </button>
            </form>

            <div aria-live="polite">
              {msg && (
                <div className={clsx("mt-4 rounded-2xl p-3 text-center text-sm font-bold", msg.ok ? "bg-good-soft text-good-shade" : "bg-bad-soft text-bad-shade")} role={msg.ok ? "status" : "alert"}>
                  <p>{msg.text}</p>
                  {msg.resend && (
                    <button type="button" onClick={resend} disabled={busy || cooldown > 0} className="mt-2 underline disabled:no-underline disabled:opacity-70">
                      {cooldown > 0 ? t("auth.resendIn", "Resend email in {n}s", { n: cooldown }) : t("auth.resend", "Resend confirmation email")}
                    </button>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-col items-center gap-1">
              {mode === "signin" && (
                <button type="button" onClick={() => switchMode("forgot")} className="btn-flat text-sm">
                  {t("auth.toggle.forgot", "Forgot password?")}
                </button>
              )}
              {mode === "magic" || mode === "forgot" ? (
                <button type="button" onClick={() => switchMode("signin")} className="btn-flat text-sm">
                  {t("auth.toggle.password", "Use a password instead")}
                </button>
              ) : (
                <button type="button" onClick={() => switchMode("magic")} className="btn-flat text-sm">
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
