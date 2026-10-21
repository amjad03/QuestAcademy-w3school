"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Swords } from "lucide-react";
import { useCatalog } from "@/components/shell/CatalogContext";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { validNickname } from "./SocialOptIn";

/** Landing page for a shared "beat my score" link: /challenge?course=&score=&by= */
export function FriendChallenge() {
  const params = useSearchParams();
  const catalog = useCatalog();
  const slug = params.get("course") ?? "";
  const course = catalog.find((c) => c.slug === slug);
  const raw = Number(params.get("score"));
  const score = Number.isFinite(raw) ? Math.max(0, Math.min(100, Math.round(raw))) : null;
  const byRaw = (params.get("by") ?? "").trim();
  // Only ever show a valid nickname from the link; anything else falls back.
  const by = byRaw && !validNickname(byRaw) ? byRaw : "An explorer";

  if (!course) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-5 py-16 text-center">
        <Mascot pose="think" size={110} />
        <h1 className="mt-6 text-2xl font-black">This challenge link looks broken</h1>
        <p className="mt-2 font-semibold text-muted">We couldn’t find that course. Pick one and set your own score to beat.</p>
        <Link href="/courses" className="btn-primary mt-8">
          Browse courses
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-5 py-16 text-center">
      <Mascot pose="cheer" size={120} />
      <section className="card mt-6 w-full p-6">
        <p className="eyebrow flex items-center justify-center gap-1.5 !text-accent">
          <Swords className="h-4 w-4" strokeWidth={2.6} /> Friend challenge
        </p>
        <div className="mt-4 flex items-center justify-center gap-3">
          <CourseIcon slug={course.slug} size={48} />
          <span className="text-left text-lg font-black leading-tight">{course.title}</span>
        </div>
        <h1 className="mt-5 text-2xl font-black leading-snug">
          {by} {score !== null ? <>scored <span className="text-accent">{score}%</span></> : "took"} on the {course.title} challenge — beat it!
        </h1>
        {score !== null && <p className="mt-2 font-semibold text-muted">Score {Math.min(100, score + 1)}% or more to win.</p>}
        <Link href={`/session/${course.slug}/challenge`} className="btn-primary mt-7 w-full">
          Start the challenge
        </Link>
        <Link href={`/learn`} className="btn-flat mt-2 w-full !text-muted">
          Maybe later
        </Link>
      </section>
    </div>
  );
}
