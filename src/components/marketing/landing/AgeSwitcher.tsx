"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { ArrowRight, Check, Flame, Lock, Star, Trophy } from "lucide-react";
import { MODE_LIST, type ModeId } from "@/lib/modes";
import { Mascot } from "@/components/brand/Mascot";

const HIGHLIGHTS: Record<ModeId, string[]> = {
  sprout: ["Everything is spoken aloud", "One giant button at a time", "Stickers, stars and gentle praise"],
  explore: ["A path of bite-sized lessons", "Treasure chests and daily quests", "No hearts, no penalties for mistakes"],
  adventure: ["Missions and unlockable challenges", "XP, badges and friendly leagues", "Experiments you can play with"],
  focus: ["Your exact board syllabus, chapter by chapter", "Exam countdown and a revision plan", "Chapter drills and full mock tests"],
  mastery: ["Semester-style dashboard", "Coding labs that run in the browser", "Competency tracking per topic"],
  research: ["Reading-first workspace", "Case studies and a research notebook", "No game elements, ever"],
  professional: ["Goal-based career pathways", "Workplace-style assignments", "Certificates of completion"],
};

const TINT: Record<ModeId, string> = {
  sprout: "#FF8A00",
  explore: "#2EBE70",
  adventure: "#7C4DFF",
  focus: "#2F6BFF",
  mastery: "#0EA5E9",
  research: "#334155",
  professional: "#14B8A6",
};

/** "Pick an age" switcher: each profile with a small preview of its own design. */
export function AgeSwitcher() {
  const [id, setId] = useState<ModeId>("explore");
  const mode = MODE_LIST.find((m) => m.id === id)!;
  const tint = TINT[id];
  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Age profiles" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {MODE_LIST.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={m.id === id}
            onClick={() => setId(m.id)}
            className={clsx(
              "shrink-0 rounded-2xl border-2 px-4 py-2.5 text-left transition",
              m.id === id ? "border-transparent text-white shadow-lift" : "border-line bg-surface text-ink hover:border-ink/20",
            )}
            style={m.id === id ? { background: TINT[m.id] } : undefined}
          >
            <span className="block text-[15px] font-black leading-tight">{m.name}</span>
            <span className={clsx("block text-xs font-bold", m.id === id ? "text-white/80" : "text-muted")}>Ages {m.ages}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-8 overflow-hidden rounded-[30px] border border-line bg-surface p-5 sm:p-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12" role="tabpanel">
        <div className="min-w-0">
          <p className="text-sm font-black uppercase tracking-wide" style={{ color: tint }}>
            {mode.number} · {mode.audience}
          </p>
          <h3 className="mt-2 text-3xl font-black tracking-tight text-ink">{mode.name}</h3>
          <p className="mt-3 text-[17px] font-semibold leading-7 text-muted">{mode.summary}</p>
          <ul className="mt-5 space-y-2.5">
            {HIGHLIGHTS[id].map((h) => (
              <li key={h} className="flex items-start gap-2.5 font-bold text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white" style={{ background: tint }}>
                  <Check className="h-3 w-3" strokeWidth={4} />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <Link href="/onboarding" className="btn mt-7 text-white" style={{ background: tint, borderColor: `color-mix(in srgb, ${tint} 70%, black)` }}>
            Try {mode.name} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative min-w-0">
          <div className="absolute -inset-6 rounded-[36px] opacity-60 blur-2xl" style={{ background: `radial-gradient(60% 60% at 50% 50%, color-mix(in srgb, ${tint} 22%, transparent), transparent)` }} aria-hidden />
          <div className="relative">
            <Preview id={id} tint={tint} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Small, faithful sketches of each profile's home screen              */
/* ------------------------------------------------------------------ */

function Frame({ children, bg = "white", className }: { children: React.ReactNode; bg?: string; className?: string }) {
  return (
    <div className={clsx("overflow-hidden rounded-2xl border-2 border-line shadow-lift", className)} style={{ background: bg }} aria-hidden>
      <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      {children}
    </div>
  );
}

function Node({ color, icon, size = 52, dim }: { color: string; icon: React.ReactNode; size?: number; dim?: boolean }) {
  return (
    <span className="grid place-items-center rounded-full text-white" style={{ width: size, height: size, background: dim ? "#D7DEEA" : color, boxShadow: `0 5px 0 ${dim ? "#B8C2D3" : `color-mix(in srgb, ${color} 70%, black)`}` }}>
      {icon}
    </span>
  );
}

function Preview({ id, tint }: { id: ModeId; tint: string }) {
  switch (id) {
    case "sprout":
      return (
        <Frame bg="#FFF6EA">
          <div className="space-y-5 p-6">
            <div className="flex justify-center gap-3">
              {["🔤", "🔢", "🔺", "🌍"].map((e, i) => (
                <span key={e} className={clsx("grid h-14 w-14 place-items-center rounded-2xl bg-white text-2xl shadow-soft", i === 0 && "ring-4 ring-[#FF8A00]/40")}>
                  {e}
                </span>
              ))}
            </div>
            <div className="rounded-2xl bg-[#3FC98E] px-4 py-3 font-black text-white">Unit 1 · Letters A to Z</div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <Node color="#2EBE70" size={64} icon={<Star className="h-7 w-7 fill-current" />} />
                <Mascot pose="wave" size={64} animate={false} />
              </div>
              <span className="ml-16"><Node color="#2EBE70" dim icon={<Lock className="h-5 w-5" />} /></span>
              <Node color="#2EBE70" dim icon={<Lock className="h-5 w-5" />} />
            </div>
          </div>
        </Frame>
      );
    case "explore":
      return (
        <Frame bg="#EAF4FF">
          <div className="grid grid-cols-[minmax(0,1fr)_112px] gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_150px] sm:gap-4 sm:p-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-[#2EBE70] px-4 py-3 text-white shadow-[0_4px_0_#1F9B58]">
                <span className="font-black">Unit 1 · Let’s Count!</span>
                <span className="rounded-lg border-2 border-white/50 px-2 py-0.5 text-xs font-black">GUIDE</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <Node color="#2EBE70" size={58} icon={<Star className="h-6 w-6 fill-current" />} />
                  <Mascot pose="cheer" size={50} animate={false} />
                </div>
                <span className="ml-10 text-3xl">🧰</span>
                <Node color="#2EBE70" dim icon={<Trophy className="h-5 w-5" />} />
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl bg-white p-3 shadow-soft">
                <p className="text-xs font-black text-ink">My streak</p>
                <p className="mt-1 flex items-center gap-1 text-lg font-black text-[#FF8A00]">
                  <Flame className="h-5 w-5 fill-current" /> 5 days
                </p>
              </div>
              <div className="rounded-2xl bg-white p-3 shadow-soft">
                <p className="text-xs font-black text-ink">Daily quests</p>
                {[70, 40, 100].map((w, i) => (
                  <div key={i} className="mt-2 h-2 rounded-full bg-[#E3ECF8]">
                    <div className="h-full rounded-full bg-[#7C4DFF]" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Frame>
      );
    case "adventure":
      return (
        <Frame bg="#F6F3FF">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#5E35D9]">Mission 4 · Integers</span>
              <span className="rounded-full bg-[#FFB800] px-2.5 py-1 text-xs font-black text-[#1C2333]">⚡ 1,240 XP</span>
            </div>
            <div className="mt-3 h-3 rounded-full bg-[#E4DCFF]">
              <div className="h-full w-2/3 rounded-full bg-[#7C4DFF]" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["🧪 Lab", "🗺️ Map", "🏆 Boss"].map((x, i) => (
                <div key={x} className={clsx("rounded-2xl p-3 text-center text-sm font-black", i === 2 ? "bg-[#1C2333] text-white" : "bg-white text-ink shadow-soft")}>
                  <span className="text-2xl">{x.split(" ")[0]}</span>
                  <p className="mt-1">{x.split(" ")[1]}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              {["🥇", "🧠", "🔥", "🎯"].map((b) => (
                <span key={b} className="grid h-10 w-10 place-items-center rounded-xl bg-white text-lg shadow-soft">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </Frame>
      );
    case "focus":
      return (
        <Frame>
          <div className="p-5">
            <div className="rounded-xl bg-[#14214A] p-4 text-white">
              <p className="text-[11px] font-bold uppercase tracking-wider text-white/60">Up next in your syllabus</p>
              <p className="mt-1 text-lg font-bold">Chemical Reactions and Equations</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="rounded-full border border-white/30 px-2 py-0.5">Article · 15 min</span>
                <span className="rounded-full border border-white/30 px-2 py-0.5">Practice</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-bold text-ink">CBSE · Class 10</span>
              <span className="rounded-lg border border-line px-2 py-1 text-xs font-bold text-ink">📅 115 days to boards</span>
            </div>
            <ul className="mt-3 divide-y divide-line rounded-xl border border-line">
              {[["Acids, Bases and Salts", 3], ["Life Processes", 2], ["Electricity", 4]].map(([t, l]) => (
                <li key={t as string} className="flex items-center justify-between px-3 py-2.5 text-sm">
                  <span className="font-semibold text-ink">{t}</span>
                  <span className="flex gap-1">
                    {[1, 2, 3, 4].map((k) => (
                      <span key={k} className="h-3.5 w-3.5 rounded-[3px] border" style={{ background: k <= (l as number) ? tint : "transparent", borderColor: k <= (l as number) ? tint : "rgb(var(--line))" }} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Frame>
      );
    case "mastery":
      return (
        <Frame>
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[#0B1220] p-4 font-mono text-[12px] leading-5 text-[#C9D6F2]">
              <p><span className="text-[#7DD3FC]">def</span> binary_search(a, x):</p>
              <p className="pl-4">lo, hi = 0, len(a) - 1</p>
              <p className="pl-4"><span className="text-[#7DD3FC]">while</span> lo &lt;= hi:</p>
              <p className="pl-8">mid = (lo + hi) // 2</p>
              <p className="mt-2 text-[#4ADE80]">✓ 6/6 tests passed</p>
            </div>
            <div className="space-y-2.5">
              <p className="text-sm font-bold text-ink">Competencies</p>
              {[["Complexity", 90], ["Graphs", 55], ["DP", 35], ["Trees", 70]].map(([t, w]) => (
                <div key={t as string}>
                  <div className="flex justify-between text-xs font-semibold text-muted">
                    <span>{t}</span>
                    <span>{w}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-surface-2">
                    <div className="h-full rounded-full" style={{ width: `${w}%`, background: tint }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Frame>
      );
    case "research":
      return (
        <Frame bg="#FBFAF7">
          <div className="p-6 font-serif">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A8578]">Reading list · Machine learning</p>
            <ol className="mt-3 space-y-3">
              {["Bias–variance, revisited", "Why gradient descent converges", "Evaluating without leakage"].map((t, i) => (
                <li key={t} className="flex gap-3 border-b border-[#E8E4DA] pb-3">
                  <span className="text-[#8A8578]">{i + 1}.</span>
                  <span className="text-[17px] text-[#1C2333]">{t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 rounded-lg border-l-4 border-[#334155] bg-white px-3 py-2 text-sm italic text-[#4B5563]">Note: compare with the case study on credit scoring.</p>
          </div>
        </Frame>
      );
    case "professional":
      return (
        <Frame>
          <div className="p-5">
            <div className="rounded-xl border-2 p-4" style={{ borderColor: tint }}>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: tint }}>Your goal</p>
              <p className="mt-1 text-lg font-bold text-ink">Become a data analyst</p>
              <div className="mt-3 h-2 rounded-full bg-surface-2">
                <div className="h-full w-[42%] rounded-full" style={{ background: tint }} />
              </div>
              <p className="mt-1 text-xs font-semibold text-muted">Week 5 of 12 · next: SQL joins</p>
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1.5 text-center text-[11px] font-bold text-muted">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <div key={i}>
                  {d}
                  <div className="mt-1 h-9 rounded-lg" style={{ background: [0, 2, 5].includes(i) ? `color-mix(in srgb, ${tint} 25%, white)` : "rgb(var(--surface-2))" }} />
                </div>
              ))}
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm font-bold text-ink">🎓 2 certificates earned</p>
          </div>
        </Frame>
      );
  }
}
