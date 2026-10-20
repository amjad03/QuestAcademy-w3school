"use client";

import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { useLearner } from "@/lib/store";
import { pushState, supabase, supabaseEnabled, syncOnLogin } from "@/lib/supabase";

/** True after the first client render — use to avoid hydration mismatches with persisted state. */
export function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
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

  useEffect(() => {
    const sb = supabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
      if (data.session?.user) void syncOnLogin(data.session.user);
    });
    const { data: sub } = sb.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (event === "SIGNED_IN" && session?.user) void syncOnLogin(session.user);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // Debounced cloud save whenever progress changes.
  useEffect(() => {
    if (!user) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    const unsub = useLearner.subscribe((s, prev) => {
      if (s.updatedAt === prev.updatedAt && s.profile === prev.profile) return;
      clearTimeout(t);
      t = setTimeout(() => void pushState(user.id), 2500);
    });
    return () => {
      clearTimeout(t);
      unsub();
    };
  }, [user]);

  const signOut = async () => {
    await supabase()?.auth.signOut();
    setUser(null);
  };

  return <Auth.Provider value={{ enabled: supabaseEnabled, user, loading, signOut }}>{children}</Auth.Provider>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeSync />
      {children}
    </AuthProvider>
  );
}
