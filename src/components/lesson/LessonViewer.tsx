"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpenCheck, Check, ChevronDown, ChevronLeft, Headphones, Pause, Trophy } from "lucide-react";
import clsx from "clsx";
import type { Assessment, CourseItem, CourseLesson, ItemKind } from "@/content/course";
import type { Lesson, WorldId } from "@/content/types";
import type { LessonVideo } from "@/content/videos";
import { useLearner } from "@/lib/store";
import { EMPTY_PROGRESS, itemDone, lessonProgress } from "@/lib/progress";
import { MASTERY } from "@/lib/mastery";
import { useHydrated } from "@/components/providers";
import { CourseIcon } from "@/components/brand/CourseIcon";
import { Mascot } from "@/components/brand/Mascot";
import { ITEM_ICON } from "@/components/learn/LearnPath";
import { BlockView } from "@/components/learn/Blocks";
import { Flashcards } from "@/components/learn/Flashcards";
import { useNarration } from "@/components/learn/useNarration";
import { Challenge } from "@/components/code/Challenge";
import { KidsStory } from "./KidsStory";
import { currentMode } from "@/lib/useMode";
import { useUi } from "@/lib/ui";
import { awardExploreSticker } from "@/components/modes/explore/stickers";
import { VideoPlayer } from "./VideoPlayer";

export interface LessonViewerPayload {
  id: string;
  world: WorldId;
  course: { slug: string; title: string; href: string };
  unit: { slug: string; title: string; href: string; index: number; lessons: CourseLesson[]; quiz?: Assessment; test: Assessment };
  lesson: Lesson;
  items: CourseItem[];
  video: LessonVideo | null;
  channel: { id: string; title: string; url: string } | null;
  prev: { href: string; title: string } | null;
  next: { href: string; title: string } | null;
}

const TAB_LABEL: Record<ItemKind, string> = { video: "Video", article: "Lesson", practice: "Practice", cards: "Flashcards", challenge: "Challenge" };

export function LessonViewer(p: LessonViewerPayload) {
  const params = useSearchParams();
  const router = useRouter();
  const hydrated = useHydrated();
  const s = useLearner();
  const visitLesson = useLearner((st) => st.visitLesson);
  const markItem = useLearner((st) => st.markItem);
  const completeLesson = useLearner((st) => st.completeLesson);
  const setProfile = useLearner((st) => st.setProfile);
  const [navOpen, setNavOpen] = useState(false);

  const viewable = p.items.filter((i) => i.kind !== "practice");
  const requested = params.get("item") as ItemKind | null;
  const item = viewable.find((i) => i.kind === requested) ?? viewable[0];
  const st = hydrated ? s : EMPTY_PROGRESS;

  useEffect(() => {
    visitLesson({ id: p.id, subject: p.course.slug, world: p.world });
    if (!useLearner.getState().profile.course) setProfile({ course: p.course.slug });
    if (currentMode().id === "explore") {
      const sticker = awardExploreSticker("first-try", p.id, { silent: true });
      if (sticker) useUi.getState().toast({ text: `New sticker: ${sticker.name}!` });
    }
  }, [p.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => window.scrollTo({ top: 0 }), [item.kind, p.id]);

  // Next step after the current item: next item in this lesson, else the next lesson.
  const upNext = useMemo(() => {
    const i = p.items.findIndex((x) => x.id === item.id);
    const after = p.items[i + 1];
    if (after) return { href: after.href, label: after.kind === "practice" ? "Practice" : TAB_LABEL[after.kind], title: after.kind === "practice" ? `Practice · ${p.lesson.quiz?.length ?? 0}+ questions` : after.title };
    if (p.next) return { href: p.next.href, label: "Next lesson", title: p.next.title };
    return { href: p.unit.test.href, label: "Unit test", title: p.unit.title };
  }, [p, item]);

  const finishArticle = () => {
    completeLesson({ id: p.id, subject: p.course.slug, world: p.world, xp: p.lesson.xp, flashcards: p.lesson.flashcards?.length ?? 0 });
    markItem(`${p.id}:article`);
    if (currentMode().id === "explore") awardExploreSticker("lesson-complete", p.id);
  };

  const sidebar = <UnitNav {...p} currentItem={item.id} onNavigate={() => setNavOpen(false)} />;

  return (
    <div className="mx-auto flex max-w-[1240px]">
      <aside className="sticky top-0 hidden h-screen w-[300px] shrink-0 overflow-y-auto border-r-2 border-line px-4 py-6 xl:block">{sidebar}</aside>

      <div className="min-w-0 flex-1 px-4 py-6 sm:px-8 lg:py-8">
        <div className="mx-auto max-w-[760px]">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-extrabold text-muted">
            <Link href={p.course.href} className="flex items-center gap-2 hover:text-accent">
              <CourseIcon slug={p.course.slug} size={24} /> <span className="hidden sm:inline">{p.course.title}</span>
            </Link>
            <span>/</span>
            <Link href={p.unit.href} className="truncate hover:text-accent">
              Unit {p.unit.index + 1}: {p.unit.title}
            </Link>
            <button onClick={() => setNavOpen((o) => !o)} className="ml-auto flex items-center gap-1 rounded-xl border-2 border-line px-3 py-1.5 text-xs uppercase tracking-wide xl:hidden">
              Lessons <ChevronDown className={clsx("h-4 w-4 transition", navOpen && "rotate-180")} />
            </button>
          </div>
          {navOpen && <div className="card mt-3 p-4 xl:hidden">{sidebar}</div>}

          <h1 className="mt-5 text-3xl font-black leading-tight sm:text-[2.4rem]">{p.lesson.title}</h1>
          <p className="mt-2 text-lg font-semibold text-muted">{p.lesson.summary}</p>

          {/* item tabs */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {p.items.map((it) => {
              const I = ITEM_ICON[it.kind];
              const active = it.id === item.id;
              const done = itemDone(st, p.id, it);
              const cls = clsx(
                "flex shrink-0 items-center gap-2 rounded-xl border-2 border-b-4 px-3.5 py-2 text-sm font-extrabold transition active:translate-y-[2px] active:border-b-2",
                active ? "border-accent bg-accent-soft text-accent" : "border-line bg-surface text-muted hover:bg-surface-2",
              );
              const inner = (
                <>
                  <I className="h-[18px] w-[18px]" strokeWidth={2.6} />
                  {TAB_LABEL[it.kind]}
                  {done && <Check className="h-4 w-4 text-good" strokeWidth={3.5} />}
                </>
              );
              return it.kind === "practice" ? (
                <Link key={it.id} href={it.href} className={cls}>
                  {inner}
                </Link>
              ) : (
                <button key={it.id} onClick={() => router.replace(`?item=${it.kind}`, { scroll: false })} className={cls} aria-pressed={active}>
                  {inner}
                </button>
              );
            })}
          </div>

          {/* content */}
          <div className="mt-8">
            {item.kind === "video" && p.video && (
              <div>
                <VideoPlayer id={p.video.id} title={p.video.title || p.lesson.title} watched={itemDone(st, p.id, item)} onWatched={() => markItem(item.id, item.xp)} />
                <h2 className="mt-4 text-xl font-black">{p.video.title || p.lesson.title}</h2>
                {p.channel && (
                  <a href={p.channel.url} target="_blank" rel="noreferrer" className="mt-1 inline-block text-sm font-bold text-muted hover:text-accent">
                    {p.channel.title} on YouTube
                  </a>
                )}
              </div>
            )}

            {item.kind === "article" &&
              (p.world === "kids" ? (
                <KidsStory lesson={p.lesson} id={p.id} onComplete={finishArticle} done={Boolean(st.lessons[p.id])} />
              ) : (
                <Article lesson={p.lesson} id={p.id} world={p.world} done={Boolean(st.lessons[p.id])} onComplete={finishArticle} />
              ))}

            {item.kind === "cards" && p.lesson.flashcards && <Flashcards cards={p.lesson.flashcards} kids={p.world === "kids"} onAllSeen={() => markItem(item.id, item.xp)} />}

            {item.kind === "challenge" && p.lesson.challenge && <Challenge challenge={p.lesson.challenge} lessonId={p.id} />}
          </div>

          {/* up next */}
          <div className="mt-12 flex flex-col gap-3 border-t-2 border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            {p.prev ? (
              <Link href={p.prev.href} className="flex items-center gap-2 text-sm font-extrabold text-muted hover:text-accent">
                <ChevronLeft className="h-4 w-4" /> {p.prev.title}
              </Link>
            ) : (
              <span />
            )}
            <Link href={upNext.href} className="btn-primary">
              Up next: {upNext.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Article({ lesson, id, world, done, onComplete }: { lesson: Lesson; id: string; world: WorldId; done: boolean; onComplete: () => void }) {
  const narration = useNarration(lesson.blocks);
  return (
    <div>
      {narration.supported && (
        <button onClick={() => (narration.playing ? narration.stop() : narration.play())} className="btn-ghost mb-6 !py-2 text-xs">
          {narration.playing ? <Pause className="h-4 w-4" /> : <Headphones className="h-4 w-4" />} {narration.playing ? "Stop reading" : "Listen to this lesson"}
        </button>
      )}
      <div className="space-y-7">
        {lesson.blocks.map((b, i) => (
          <div key={i} className={clsx("rounded-2xl transition", narration.current === i && "bg-accent-soft ring-8 ring-accent-soft")}>
            <BlockView block={b} world={world} id={`${id}-${i}`} />
          </div>
        ))}
      </div>
      <div className="card mt-10 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
        <Mascot pose={done ? "cheer" : "read"} size={90} animate={false} />
        <div className="flex-1">
          <h3 className="text-xl font-black">{done ? "Lesson complete" : "Finished reading?"}</h3>
          <p className="mt-1 font-semibold text-muted">{done ? "Now lock it in with practice — that’s what builds mastery." : `Mark it complete to earn ${lesson.xp} XP and unlock practice.`}</p>
        </div>
        {!done && (
          <button onClick={onComplete} className="btn-good">
            Mark complete
          </button>
        )}
      </div>
    </div>
  );
}

function UnitNav(p: LessonViewerPayload & { currentItem: string; onNavigate: () => void }) {
  const hydrated = useHydrated();
  const s = useLearner();
  const st = hydrated ? s : EMPTY_PROGRESS;
  return (
    <nav aria-label="Unit lessons">
      <Link href={p.unit.href} className="block" onClick={p.onNavigate}>
        <p className="eyebrow">Unit {p.unit.index + 1}</p>
        <p className="mt-1 text-lg font-black leading-snug hover:text-accent">{p.unit.title}</p>
      </Link>
      <ol className="mt-5 space-y-1">
        {p.unit.lessons.map((l) => {
          const lp = lessonProgress(st, l);
          const current = l.id === p.id;
          return (
            <li key={l.id}>
              <Link href={l.href} onClick={p.onNavigate} className={clsx("flex items-center gap-3 rounded-xl px-2.5 py-2 text-[15px] font-bold transition", current ? "bg-accent-soft text-accent" : "hover:bg-surface-2")}>
                <span className="h-3.5 w-3.5 shrink-0 rounded" style={{ background: lp.level ? MASTERY[lp.level].color : "transparent", border: lp.level ? undefined : "2px solid rgb(var(--line))" }} title={MASTERY[lp.level].name} />
                <span className="min-w-0 flex-1 truncate">{l.title}</span>
              </Link>
              {current && (
                <ul className="mb-2 ml-6 mt-1 space-y-0.5 border-l-2 border-line pl-3">
                  {l.items.map((it) => {
                    const I = ITEM_ICON[it.kind];
                    const done = itemDone(st, l.id, it);
                    return (
                      <li key={it.id}>
                        <Link href={it.href} onClick={p.onNavigate} className={clsx("flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm font-bold", it.id === p.currentItem ? "text-accent" : "text-muted hover:text-ink")}>
                          <I className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                          <span className="flex-1 truncate">{it.kind === "practice" ? "Practice" : TAB_LABEL[it.kind]}</span>
                          {done && <Check className="h-3.5 w-3.5 text-good" strokeWidth={3.5} />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
      <div className="mt-4 space-y-1 border-t-2 border-line pt-4">
        {p.unit.quiz && (
          <Link href={p.unit.quiz.href} className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-[15px] font-bold hover:bg-surface-2">
            <BookOpenCheck className="h-4 w-4 text-accent-2" /> Quiz 1
          </Link>
        )}
        <Link href={p.unit.test.href} className="flex items-center gap-3 rounded-xl px-2.5 py-2 text-[15px] font-bold hover:bg-surface-2">
          <Trophy className="h-4 w-4 text-warn" /> Unit test
        </Link>
      </div>
    </nav>
  );
}
