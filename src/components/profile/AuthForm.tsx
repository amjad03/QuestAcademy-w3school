"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2, Mail, Wand2 } from "lucide-react";
import clsx from "clsx";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/components/providers";
import { LogoMark } from "@/components/shell/Logo";

export function AuthForm() {
  const { enabled, user } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup" | "magic">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    if (user) router.replace("/dashboard");
  }, [user, router]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sb = supabase();
    if (!sb) return;
    setBusy(true);
    setMsg(null);
    const redirect = `${window.location.origin}/dashboard`;
    const res =
      mode === "magic"
        ? await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: redirect } })
        : mode === "signup"
          ? await sb.auth.signUp({ email, password, options: { emailRedirectTo: redirect } })
          : await sb.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (res.error) setMsg({ ok: false, text: res.error.message });
    else if (mode === "magic") setMsg({ ok: true, text: "Check your inbox — we sent you a magic sign-in link ✨" });
    else if (mode === "signup" && !res.data.session) setMsg({ ok: true, text: "Almost there! Confirm your email to finish creating your account." });
  };

  const google = async () => {
    await supabase()?.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${window.location.origin}/dashboard` } });
  };

  return (
    <div className="relative grid min-h-[calc(100vh-4rem)] place-items-center overflow-hidden px-4 py-10">
      <div className="dot-bg absolute inset-0 opacity-50" />
      <div className="absolute left-1/2 top-10 h-80 w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div className="card relative w-full max-w-md p-8">
        <LogoMark className="mx-auto h-14 w-14" />
        <h1 className="mt-4 text-center font-display text-3xl font-bold">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
        <p className="mt-1 text-center text-sm text-muted">Sync progress across devices and join live leagues.</p>

        {!enabled ? (
          <div className="mt-6 rounded-2xl border border-line bg-surface-2 p-4 text-sm leading-6 text-muted">
            <b className="text-ink">Cloud accounts aren’t configured yet.</b> Add <code className="font-mono text-accent">NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
            <code className="font-mono text-accent">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to <code className="font-mono">.env.local</code> and run{" "}
            <code className="font-mono">supabase/schema.sql</code>. Until then you’re in guest mode — everything works and is saved on this device.
            <Link href="/dashboard" className="btn-primary mt-4 w-full">
              Continue as guest
            </Link>
          </div>
        ) : (
          <>
            <button onClick={() => void google()} className="btn-ghost mt-6 w-full py-3">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.9-5.5 3.9-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.3 14.6 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12s4.3 9.7 9.7 9.7c5.6 0 9.3-3.9 9.3-9.5 0-.6-.1-1.1-.2-1.6H12z" />
              </svg>
              Continue with Google
            </button>
            <div className="my-5 flex items-center gap-3 text-xs text-muted">
              <span className="h-px flex-1 bg-line" /> or <span className="h-px flex-1 bg-line" />
            </div>
            <div className="mb-4 grid grid-cols-3 rounded-2xl bg-surface-2 p-1 text-sm">
              {(["signin", "signup", "magic"] as const).map((m) => (
                <button key={m} onClick={() => { setMode(m); setMsg(null); }} className={clsx("rounded-xl py-1.5 font-medium transition", mode === m ? "bg-surface shadow-soft" : "text-muted")}>
                  {m === "signin" ? "Sign in" : m === "signup" ? "Sign up" : "Magic link"}
                </button>
              ))}
            </div>
            <form onSubmit={submit} className="space-y-3">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="input" autoComplete="email" />
              {mode !== "magic" && <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (6+ characters)" className="input" autoComplete={mode === "signup" ? "new-password" : "current-password"} />}
              <button className="btn-pop w-full py-3" disabled={busy}>
                {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : mode === "magic" ? <Wand2 className="h-4 w-4" /> : <Mail className="h-4 w-4" />}
                {mode === "signin" ? "Sign in" : mode === "signup" ? "Create account" : "Email me a link"}
              </button>
            </form>
            {msg && <p className={clsx("mt-4 rounded-2xl p-3 text-sm", msg.ok ? "bg-good/10 text-good" : "bg-bad/10 text-bad")}>{msg.text}</p>}
            <p className="mt-5 text-center text-xs text-muted">Your guest progress is merged into your account automatically when you sign in.</p>
          </>
        )}
      </div>
    </div>
  );
}
