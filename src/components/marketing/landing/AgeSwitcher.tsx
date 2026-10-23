"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check } from "lucide-react";
import { MODE_LIST, type ModeId } from "@/lib/modes";
import { ProductShot } from "./ProductShot";

const HIGHLIGHTS: Record<ModeId, string[]> = {
  sprout: ["Everything is spoken aloud", "One large button at a time", "Stickers, stars and gentle praise"],
  explore: ["A path of short lessons", "Treasure chests and daily quests", "No penalties for mistakes"],
  adventure: ["Missions and unlockable challenges", "XP, badges and friendly leagues", "Experiments you can play with"],
  focus: ["Your board syllabus, chapter by chapter", "Exam countdown and a revision plan", "Chapter drills and full mock tests"],
  mastery: ["Semester-style dashboard", "Coding labs that run in the browser", "Competency tracking per topic"],
  research: ["Reading-first workspace", "Case studies and a research notebook", "No game elements"],
  professional: ["Goal-based career pathways", "Workplace-style assignments", "Certificates of completion"],
};

/** One tab per age profile, each showing a screenshot of that profile's home screen. */
export function AgeSwitcher() {
  const [id, setId] = useState<ModeId>("focus");
  const mode = MODE_LIST.find((m) => m.id === id)!;
  const strip = useRef<HTMLDivElement>(null);
  // On phones the tab strip scrolls sideways: keep the selected tab in view without moving the page.
  useEffect(() => {
    const el = strip.current;
    const tab = el?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (el && tab) el.scrollLeft = tab.offsetLeft - (el.clientWidth - tab.offsetWidth) / 2;
  }, [id]);
  return (
    <div className="mt-10">
      <div ref={strip} role="tablist" aria-label="Age profiles" className="relative -mx-5 flex gap-1 overflow-x-auto border-b border-line px-5 sm:mx-0 sm:px-0">
        {MODE_LIST.map((m) => (
          <button
            key={m.id}
            id={`profile-tab-${m.id}`}
            role="tab"
            aria-selected={m.id === id}
            aria-controls="profile-panel"
            onClick={() => setId(m.id)}
            className={clsx("-mb-px shrink-0 border-b-2 px-4 pb-3 pt-1 text-left transition", m.id === id ? "border-accent text-ink" : "border-transparent text-muted hover:text-ink")}
          >
            <span className="block text-[15px] font-bold leading-tight">{m.name}</span>
            <span className="block text-xs">Ages {m.ages}</span>
          </button>
        ))}
      </div>

      <div id="profile-panel" role="tabpanel" aria-labelledby={`profile-tab-${id}`} className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
        <div className="min-w-0 lg:pt-4">
          <h3 className="text-2xl font-bold tracking-tight text-ink">{mode.name}</h3>
          <p className="mt-3 text-[16px] leading-7 text-muted">{mode.summary}</p>
          <ul className="mt-5 space-y-2.5">
            {HIGHLIGHTS[id].map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[15px] text-ink">
                <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                {h}
              </li>
            ))}
          </ul>
          <Link href="/onboarding" className="mt-7 inline-flex items-center gap-1.5 font-bold text-accent hover:underline">
            Start as {mode.name} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="min-w-0">
          {MODE_LIST.map((m) => (
            <ProductShot
              key={m.id}
              src={`/landing/home-${m.id}.webp`}
              alt={`The ${m.name} home screen`}
              className={m.id === id ? "" : "hidden"}
              sizes="(min-width: 1200px) 760px, 100vw"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
