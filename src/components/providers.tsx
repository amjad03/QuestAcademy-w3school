"use client";

import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLearner } from "@/lib/store";
import { localeInfo } from "@/i18n/locales";
import { resolveMode } from "@/lib/modes";
import { clearDeviceData, pushAccount, supabase, supabaseEnabled, syncAccount, touchSettings } from "@/lib/supabase";
import { useNotebook } from "@/lib/notebook-store";
import { useTutorPrefs } from "@/lib/tutor/store";
import { useParent } from "@/components/parent/store";

/** True after the first client render — use to avoid hydration mismatches with persisted state. */
export function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/** Public marketing pages keep their own look, whatever design the learner picked in the app. */
const SITE_PAGES = new Set(["/", "/about", "/for-schools", "/privacy", "/terms"]);

function ModeSync() {
  const mode = useLearner((s) => resolveMode(s.profile));
  const chosen = useLearner((s) => s.settings.skin ?? "modes");
  const pathname = usePathname();
  const skin = SITE_PAGES.has(pathname) ? "site" : chosen;
  const locale = useLearner((s) => s.settings.locale ?? "en");
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    document.documentElement.dataset.skin = skin;
    // Marketing pages are written in English only, so declare them as English.
    document.documentElement.lang = skin === "site" ? "en-IN" : localeInfo(locale).bcp47;
  }, [mode, skin, locale]);
  return null;
}

function ThemeSync() {
  const theme = useLearner((s) => s.settings.theme);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && mq.matches);
      document.documentElement.classList.toggle("dark", dark);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme]);
  return null;
}

interface AuthCtx {
  enabled: boolean;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const Auth = createContext<AuthCtx>({ enabled: false, user: null, loading: false, signOut: async () => {} });

export const useAuth = () => useContext(Auth);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(supabaseEnabled);
  const router = useRouter();

  useEffect(() => {
    const sb = supabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
      if (data.session?.user) void syncAccount(data.session.user);
    });
    const { data: sub } = sb.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === "SIGNED_IN" && session?.user) void syncAccount(session.user);
      // The reset link signs the learner in; send them to choose a new password.
      if (event === "PASSWORD_RECOVERY") router.push("/auth/reset");
    });
    return () => sub.subscription.unsubscribe();
  }, [router]);

  // Token refreshes hand us a new user object; only a different account should restart sync.
  const userRef = useRef(user);
  userRef.current = user;
  const uid = user?.id;

  useEffect(() => {
    const user = userRef.current;
    if (!uid || !user) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      clearTimeout(t);
      t = setTimeout(() => void pushAccount(user.id), 2500);
    };
    // Debounced cloud save whenever progress, notes or settings change.
    const unsubs = [
      useLearner.subscribe((s, prev) => {
        if (s.updatedAt !== prev.updatedAt || s.profile !== prev.profile) schedule();
      }),
      useNotebook.subscribe((s, prev) => {
        if (s.notes !== prev.notes || s.bookmarks !== prev.bookmarks || s.doubts !== prev.doubts) schedule();
      }),
      useParent.subscribe((s, prev) => {
        if (s.timeLimit !== prev.timeLimit || s.quietHours !== prev.quietHours) (touchSettings(), schedule());
      }),
      useTutorPrefs.subscribe((s, prev) => {
        if (s.tutorAllowed !== prev.tutorAllowed) (touchSettings(), schedule());
      }),
    ];
    // Pick up work done on another device.
    // Throttled (tab switching shouldn't trigger a full sync each time) and jittered, so a
    // classroom that signs in together doesn't sync in lockstep.
    let last = Date.now();
    const pull = () => {
      if (document.visibilityState !== "visible" || Date.now() - last < 60_000) return;
      last = Date.now();
      void syncAccount(userRef.current ?? user);
    };
    document.addEventListener("visibilitychange", pull);
    const every = setInterval(pull, 3 * 60 * 1000 + Math.floor(Math.random() * 60_000));
    // Don't lose the last change when the tab closes.
    const flush = () => {
      if (t) void pushAccount(user.id);
    };
    window.addEventListener("pagehide", flush);
    return () => {
      clearTimeout(t);
      clearInterval(every);
      unsubs.forEach((u) => u());
      document.removeEventListener("visibilitychange", pull);
      window.removeEventListener("pagehide", flush);
    };
  }, [uid]);

  const signOut = async () => {
    const sb = supabase();
    if (user) await pushAccount(user.id);
    await sb?.auth.signOut();
    setUser(null);
    // Progress is safe in the account; don't leave it on a shared device.
    clearDeviceData();
    router.push("/");
  };

  return <Auth.Provider value={{ enabled: supabaseEnabled, user, loading, signOut }}>{children}</Auth.Provider>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeSync />
      <ModeSync />
      {children}
    </AuthProvider>
  );
}
