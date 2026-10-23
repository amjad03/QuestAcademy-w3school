"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import clsx from "clsx";
import { useMode } from "@/lib/useMode";
import { useUi } from "@/lib/ui";
import { useHydrated } from "@/components/providers";
import { useExperience } from "@/experiences";
import { isActivePath, moreFor, navFor } from "@/experiences/shared/nav";
import { StatsBar } from "./StatsBar";

/** Picks the app frame for the learner's experience profile. */
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const mode = useMode();
  const exp = useExperience();
  const setPalette = useUi((s) => s.setPalette);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette(true);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [setPalette]);

  // Before the learner's profile loads we don't know which frame to draw.
  if (!hydrated) return <main className="min-h-screen bg-bg">{children}</main>;

  const Shell = exp.Shell;
  return (
    <Shell pathname={pathname} nav={navFor(mode)} more={moreFor(mode)} isActive={(href) => isActivePath(pathname, href)} openSearch={() => setPalette(true)}>
      {children}
    </Shell>
  );
}

/** Two-column page body: main content + sticky right rail (≥1024px). */
export function PageColumns({ children, rail, wide }: { children: React.ReactNode; rail?: React.ReactNode; wide?: boolean }) {
  return (
    <div className={clsx("mx-auto flex gap-12 px-4 py-6 sm:px-6 lg:py-8", wide ? "max-w-[1180px]" : "max-w-[1060px]")}>
      <div className="min-w-0 flex-1">{children}</div>
      {rail && (
        <aside className="sticky top-6 hidden h-fit w-[340px] shrink-0 space-y-5 lg:block">
          <div className="hidden md:block">
            <StatsBar />
          </div>
          {rail}
        </aside>
      )}
    </div>
  );
}
