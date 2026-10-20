"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, Check, ChevronRight, Dumbbell, FileText, FlaskConical, Layers, Lock, NotebookText, PlayCircle, Star, Trophy } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import type { Assessment, CourseLesson, CourseOutline, CourseUnit, ItemKind } from "@/content/course";
import { useLearner } from "@/lib/store";
import { itemDone, lessonProgress, courseProgress } from "@/lib/progress";
import { courseStyle, CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot, type MascotPose } from "@/components/brand/Mascot";
import { ProgressBar } from "@/components/ui/Progress";
import { MASTERY } from "@/lib/mastery";
import { sfx } from "@/lib/sound";

type Node =
  | { kind: "lesson"; key: string; lesson: CourseLesson; index: number }
  | { kind: "assessment"; key: string; a: Assessment }
  | { kind: "chest"; key: string; id: string };

const OFFSETS = [0, -48, -76, -48, 0, 48, 76, 48];

export const ITEM_ICON: Record<ItemKind, typeof PlayCircle> = {
  video: PlayCircle,
  article: FileText,
  practice: Dumbbell,
  cards: Layers,
  challenge: FlaskConical,
};

function unitNodes(u: CourseUnit): Node[] {
  const nodes: Node[] = [];
  const quizAfter = u.quiz ? Math.ceil(u.lessons.filter((l) => l.questions > 0).length / 2) : -1;
  u.lessons.forEach((l, i) => {
    nodes.push({ kind: "lesson", key: l.id, lesson: l, index: i });
    if (i + 1 === quizAfter && u.quiz) {
      nodes.push({ kind: "assessment", key: u.quiz.key, a: u.quiz });
      nodes.push({ kind: "chest", key: `chest:${u.href}`, id: `chest:${u.href}` });
    }
  });
  if (!u.quiz && u.lessons.length > 1) nodes.splice(Math.ceil(u.lessons.length / 2), 0, { kind: "chest", key: `chest:${u.href}`, id: `chest:${u.href}` });
  nodes.push({ kind: "assessment", key: u.test.key, a: u.test });
  return nodes;
}

export function LearnPath({ outline }: { outline: CourseOutline }) {
  const s = useLearner();
  const [open, setOpen] = useState<string | null>(null);
  const { color, shade } = courseStyle(outline.slug);
  const cp = courseProgress(s, outline);
  const currentId = cp.next?.id;
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    currentRef.current?.scrollIntoView({ block: "center" });
  }, [outline.slug]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    const click = (e: MouseEvent) => !(e.target as HTMLElement).closest("[data-node]") && setOpen(null);
    window.addEventListener("keydown", close);
    window.addEventListener("mousedown", click);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("mousedown", click);
    };
  }, []);

  // Index of the current lesson across the whole course: nodes after it are "upcoming".
  const order = useMemo(() => outline.units.flatMap((u) => u.lessons.map((l) => l.id)), [outline]);
  const currentIdx = currentId ? order.indexOf(currentId) : order.length;

  return (
    <div>
      {/* course header */}
      <div className="mb-8 flex items-center gap-4">
        <CourseIcon slug={outline.slug} size={56} />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h1 className="truncate text-2xl font-black">{outline.title}</h1>
            <Link href={outline.href} className="shrink-0 text-sm font-extrabold uppercase tracking-wide text-accent">
              Course overview
            </Link>
          </div>
          <div className="mt-2 flex items-center gap-3">
            <ProgressBar value={cp.pct} height={12} color={color} label="Course mastery" />
            <span className="shrink-0 text-sm font-black" style={{ color }}>
              {Math.round(cp.pct * 100)}%
            </span>
          </div>
        </div>
      </div>

      {outline.units.map((u, ui) => {
        const nodes = unitNodes(u);
        let lessonCounter = 0;
        return (
          <section key={u.slug} className="mb-16">
            {/* unit banner */}
            <div className="sticky top-[60px] z-20 md:top-4">
              <div className="flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-white" style={{ background: color, boxShadow: `inset 0 -4px 0 ${shade}` }}>
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-white/75">Unit {ui + 1}</p>
                  <h2 className="truncate text-xl font-black">{u.title}</h2>
                </div>
                <Link href={u.href} className="flex shrink-0 items-center gap-2 rounded-xl border-2 border-b-4 border-white/30 px-3 py-2 text-sm font-extrabold uppercase tracking-wide hover:bg-white/10">
                  <NotebookText className="h-5 w-5" /> <span className="hidden sm:inline">Guidebook</span>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto mt-10 flex max-w-[420px] flex-col items-center gap-6">
              {nodes.map((n, ni) => {
                const off = OFFSETS[ni % OFFSETS.length];
                const lessonNum = n.kind === "lesson" ? ++lessonCounter : 0;
                const mascotHere = ni === 2 || (ni === 6 && nodes.length > 8);
                const chestUnlocked = nodes.slice(0, ni).every((x) => x.kind !== "lesson" || lessonProgress(s, x.lesson).complete);
                return (
                  <div key={n.key} className="relative" style={{ transform: `translateX(${off}px)`, zIndex: open === n.key ? 40 : 1 }} ref={n.kind === "lesson" && n.lesson.id === currentId ? currentRef : undefined}>
                    {mascotHere && (
                      <div className="pointer-events-none absolute top-1/2 -z-10 hidden -translate-y-1/2 sm:block" style={off <= 0 ? { left: 170 } : { right: 170 }}>
                        <Mascot pose={(["read", "think", "wave", "idle"] as MascotPose[])[(ui + ni) % 4]} size={110} />
                      </div>
                    )}
                    <PathNode
                      node={n}
                      color={color}
                      shade={shade}
                      open={open === n.key}
                      onToggle={() => {
                        sfx("tap");
                        setOpen(open === n.key ? null : n.key);
                      }}
                      currentId={currentId}
                      currentIdx={currentIdx}
                      order={order}
                      lessonNum={lessonNum}
                      lessonTotal={u.lessons.length}
                      chestUnlocked={chestUnlocked}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* course challenge */}
      <section className="card mx-auto mb-10 flex max-w-xl flex-col items-center gap-4 p-8 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-warn text-white" style={{ boxShadow: "inset 0 -5px 0 rgb(var(--warn-shade))" }}>
          <Trophy className="h-10 w-10" strokeWidth={2.4} />
        </span>
        <h2 className="text-2xl font-black">Course challenge</h2>
        <p className="max-w-sm font-semibold text-muted">Test your knowledge of the whole course. Correct answers level up skills — all the way to Mastered.</p>
        <Link href={outline.challenge.href} className="btn-gold">
          Start challenge · {outline.challenge.questions} questions
        </Link>
      </section>
    </div>
  );
}

function PathNode({
  node,
  color,
  shade,
  open,
  onToggle,
  currentId,
  currentIdx,
  order,
  lessonNum,
  lessonTotal,
  chestUnlocked,
}: {
  node: Node;
  color: string;
  shade: string;
  open: boolean;
  onToggle: () => void;
  currentId?: string;
  currentIdx: number;
  order: string[];
  lessonNum: number;
  lessonTotal: number;
  chestUnlocked: boolean;
}) {
  const s = useLearner();
  const markItem = useLearner((st) => st.markItem);
  const claimCoins = useLearner((st) => st.claimCoins);

  let status: "done" | "current" | "open" | "upcoming" = "upcoming";
  let ring = 0;
  let Icon = Star;
  if (node.kind === "lesson") {
    const p = lessonProgress(s, node.lesson);
    ring = p.itemsDone / Math.max(1, p.itemsTotal);
    if (p.complete) {
      status = "done";
      Icon = Check;
    } else if (node.lesson.id === currentId) status = "current";
    else status = order.indexOf(node.lesson.id) < currentIdx ? "open" : "upcoming";
    if (status !== "done" && node.lesson.items[0]?.kind === "video") Icon = PlayCircle;
  } else if (node.kind === "assessment") {
    const best = s.assessments[node.a.key];
    const coveredDone = node.a.covers.every((id) => order.indexOf(id) < currentIdx);
    status = best !== undefined ? "done" : coveredDone ? "open" : "upcoming";
    Icon = node.a.kind === "test" ? Trophy : BookOpenCheck;
  } else {
    const claimed = Boolean(s.items[node.id]);
    status = claimed ? "done" : chestUnlocked ? "open" : "upcoming";
  }

  const active = status === "done" || status === "current" || status === "open";
  const size = node.kind === "chest" ? 76 : 72;

  return (
    <div className="relative flex flex-col items-center" data-node>
      {status === "current" && (
        <motion.div
          className="absolute -top-12 z-10 whitespace-nowrap rounded-xl border-2 border-line bg-surface px-3 py-2 text-[15px] font-extrabold uppercase tracking-wide"
          style={{ color }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        >
          Start
          <span className="absolute -bottom-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-line bg-surface" />
        </motion.div>
      )}

      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-label={node.kind === "lesson" ? node.lesson.title : node.kind === "assessment" ? node.a.title : "Treasure chest"}
        className="relative grid place-items-center"
        style={{ width: size + 24, height: size + 24 }}
      >
        {status === "current" && (
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="rgb(var(--line))" strokeWidth="7" />
            <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeDasharray={289} strokeDashoffset={289 * (1 - Math.max(0.04, ring))} />
          </svg>
        )}
        {node.kind === "chest" ? (
          <Chest open={status === "done"} locked={status === "upcoming"} />
        ) : (
          <span
            className="grid place-items-center rounded-full transition active:translate-y-1"
            style={{
              width: size,
              height: size - 6,
              background: active ? (node.kind === "assessment" ? (node.a.kind === "test" ? "#FFB800" : "#7C4DFF") : color) : "rgb(var(--line))",
              boxShadow: `inset 0 -7px 0 ${active ? (node.kind === "assessment" ? (node.a.kind === "test" ? "#D99A00" : "#5E35D9") : shade) : "rgb(var(--muted) / 0.35)"}`,
            }}
          >
            <Icon className={clsx("h-8 w-8 -translate-y-0.5", active ? "text-white" : "text-muted/70")} strokeWidth={3} fill={Icon === Star && active ? "white" : "none"} />
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className="absolute top-full z-30 mt-2 w-[300px] rounded-2xl p-4"
            style={active ? { background: color, color: "white" } : { background: "rgb(var(--surface))", border: "2px solid rgb(var(--line))" }}
          >
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45" style={active ? { background: color } : { background: "rgb(var(--surface))", borderLeft: "2px solid rgb(var(--line))", borderTop: "2px solid rgb(var(--line))" }} />
            {node.kind === "lesson" && (
              <LessonPopover lesson={node.lesson} num={lessonNum} total={lessonTotal} active={active} color={color} />
            )}
            {node.kind === "assessment" && (
              <div className="relative">
                <h3 className="text-lg font-black">{node.a.kind === "test" ? "Unit test" : "Unit quiz"}</h3>
                <p className={clsx("mt-1 text-[15px] font-semibold", active ? "text-white/85" : "text-muted")}>
                  {node.a.questions} questions · Correct answers level up skills{node.a.kind === "test" ? " to Mastered" : " to Proficient"}.
                  {s.assessments[node.a.key] !== undefined && ` Best: ${Math.round(s.assessments[node.a.key] * 100)}%.`}
                </p>
                <Link href={node.a.href} className={clsx("btn mt-4 w-full", active ? "border-black/15 bg-white" : "border-line bg-surface-2 text-muted")} style={active ? { color } : undefined}>
                  {active ? (s.assessments[node.a.key] !== undefined ? "Retake" : "Start") : "Jump ahead"} +{node.a.questions * 3} XP
                </Link>
              </div>
            )}
            {node.kind === "chest" && (
              <div className="relative text-center">
                <h3 className="text-lg font-black">Treasure chest</h3>
                {status === "done" ? (
                  <p className="mt-1 text-[15px] font-semibold opacity-85">You already opened this chest.</p>
                ) : (
                  <ChestClaim
                    unlocked={chestUnlocked}
                    onClaim={() => {
                      markItem(node.id);
                      claimCoins(20, "Treasure chest");
                    }}
                    active={active}
                  />
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LessonPopover({ lesson, num, total, active, color }: { lesson: CourseLesson; num: number; total: number; active: boolean; color: string }) {
  const s = useLearner();
  const p = lessonProgress(s, lesson);
  return (
    <div className="relative">
      <h3 className="text-lg font-black leading-snug">{lesson.title}</h3>
      <p className={clsx("mt-1 text-[15px] font-semibold", active ? "text-white/85" : "text-muted")}>
        Lesson {num} of {total} · {MASTERY[p.level].name}
      </p>
      <ul className="mt-3 space-y-1.5">
        {lesson.items.map((it) => {
          const I = ITEM_ICON[it.kind];
          const done = itemDone(s, lesson.id, it);
          return (
            <li key={it.id}>
              <Link href={it.href} className={clsx("flex items-center gap-2.5 rounded-xl px-2 py-1.5 text-sm font-bold", active ? "hover:bg-white/15" : "hover:bg-surface-2")}>
                <I className="h-4 w-4 shrink-0 opacity-90" strokeWidth={2.6} />
                <span className="flex-1 truncate">{it.kind === "practice" ? "Practice" : it.kind === "article" ? "Read the lesson" : it.kind === "video" ? "Watch the video" : it.kind === "cards" ? "Flashcards" : "Coding challenge"}</span>
                {done ? <Check className="h-4 w-4" strokeWidth={3.5} /> : <ChevronRight className="h-4 w-4 opacity-60" />}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href={p.nextItem.href} className={clsx("btn mt-3 w-full", active ? "border-black/15 bg-white" : "border-line bg-surface-2 text-muted")} style={active ? { color } : undefined}>
        {p.complete ? "Review" : p.itemsDone ? "Continue" : active ? "Start" : "Jump here"} +{lesson.items.reduce((a, i) => a + i.xp, 0)} XP
      </Link>
    </div>
  );
}

function ChestClaim({ unlocked, onClaim, active }: { unlocked: boolean; onClaim: () => void; active: boolean }) {
  return unlocked ? (
    <button onClick={onClaim} className="btn-gold mt-3 w-full">
      Open · +20 coins
    </button>
  ) : (
    <p className={clsx("mt-1 flex items-center justify-center gap-1.5 text-[15px] font-semibold", active ? "text-white/85" : "text-muted")}>
      <Lock className="h-4 w-4" /> Complete the lessons above to unlock
    </p>
  );
}

function Chest({ open, locked }: { open: boolean; locked: boolean }) {
  return (
    <svg viewBox="0 0 80 72" width="76" height="68" aria-hidden className={clsx(locked && "opacity-60 grayscale")}>
      <rect x="6" y="30" width="68" height="38" rx="8" fill={open ? "rgb(var(--line))" : "#FF8A00"} />
      <rect x="6" y="58" width="68" height="10" rx="5" fill={open ? "rgb(var(--muted) / 0.3)" : "#D97000"} />
      {open ? <path d="M10 30 L18 8 H62 L70 30 Z" fill="rgb(var(--line))" /> : <path d="M6 30 C6 14 18 6 40 6 C62 6 74 14 74 30 Z" fill="#FFB800" />}
      <rect x="33" y="26" width="14" height="18" rx="4" fill={open ? "rgb(var(--muted) / 0.4)" : "#FFE08A"} />
    </svg>
  );
}
