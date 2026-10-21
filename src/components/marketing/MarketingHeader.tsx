"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";

export function MarketingHeader() {
  const hydrated = useHydrated();
  const onboarded = useLearner((s) => s.profile.onboarded);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center gap-6 px-5">
        <Logo />
        <nav className="ml-6 hidden items-center gap-1 md:flex">
          <Link href="/courses" className="btn-flat !text-muted hover:!text-accent">
            Courses
          </Link>
          <Link href="/exam" className="btn-flat !text-muted hover:!text-accent">
            Exam prep
          </Link>
          <Link href="/pathways" className="btn-flat !text-muted hover:!text-accent">
            Pathways
          </Link>
          <Link href="/for-schools" className="btn-flat !text-muted hover:!text-accent">
            For schools
          </Link>
          <Link href="/about" className="btn-flat !text-muted hover:!text-accent">
            About
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-3">
          {hydrated && onboarded ? (
            <Link href="/learn" className="btn-primary">
              Continue learning
            </Link>
          ) : (
            <>
              <Link href="/auth" className="btn-ghost hidden sm:inline-flex">
                Log in
              </Link>
              <Link href="/onboarding" className="btn-primary">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
