"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import clsx from "clsx";
import { useLearner } from "@/lib/store";
import { useHydrated } from "@/components/providers";

export function HeroCta({ center }: { center?: boolean }) {
  const hydrated = useHydrated();
  const onboarded = useLearner((s) => s.profile.onboarded);
  const name = useLearner((s) => s.profile.name);
  const returning = hydrated && onboarded;
  return (
    <div className={clsx("mt-8 flex flex-wrap gap-3", center && "justify-center")}>
      <Link href={returning ? "/dashboard" : "/onboarding"} className="btn-pop px-7 py-3.5 text-base">
        {returning ? `Continue, ${name.split(" ")[0] || "explorer"}` : "Start your quest"} <ArrowRight className="h-5 w-5" />
      </Link>
      <Link href="/explore" className="btn-ghost px-6 py-3.5 text-base">
        <Compass className="h-5 w-5" /> Explore all subjects
      </Link>
    </div>
  );
}
