"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { BookOpenCheck, Check, Headphones, Pause, Trophy } from "lucide-react";
import clsx from "clsx";
import type { Assessment, CourseItem, CourseLesson, ItemKind } from "@/content/course";
import type { Lesson, WorldId } from "@/content/types";
import type { LessonVideo } from "@/content/videos";
import { useLearner } from "@/lib/store";
import { EMPTY_PROGRESS, itemDone, lessonProgress } from "@/lib/progress";
import { MASTERY } from "@/lib/mastery";
import { useHydrated } from "@/components/providers";
import { Mascot } from "@/components/brand/Mascot";
import { ITEM_ICON } from "@/components/learn/LearnPath";
import { BlockView } from "@/components/learn/Blocks";
import { Flashcards } from "@/components/learn/Flashcards";
import { useNarration } from "@/components/learn/useNarration";
import { Challenge } from "@/components/code/Challenge";
import { KidsStory } from "./KidsStory";
import { currentMode, useMode } from "@/lib/useMode";
import { useUi } from "@/lib/ui";
import { awardExploreSticker } from "@/components/modes/explore/stickers";
import { VideoPlayer } from "./VideoPlayer";
import { NotebookDock } from "@/components/notebook/NotebookDock";
import { useExperience } from "@/experiences";
import type { LessonTab } from "@/experiences/types";
import dynamic from "next/dynamic";
import { AskQuesty } from "@/components/tutor/AskQuesty";

const LessonExplainers = dynamic(() => import("@/explainers/LessonExplainers"), { ssr: false });

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
  const exp = useExperience();

  const viewable = p.items.filter((i) => i.kind !== "practice");
  const requested = params.get("item") as ItemKind | null;
  const item = viewable.find((i) => i.kind === requested) ?? viewable[0];
  const st = hydrated ? s : EMPTY_PROGRESS;

  useEffect(() => {
    visitLesson({ id: p.id, subject: p.course.slug, world: p.world });
    if (!useLearner.getState().profile.course) setProfile({ course: p.course.slug });
    if (currentMode().young) {
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
    if (currentMode().young) awardExploreSticker("lesson-complete", p.id);
  };

  const sidebar = <UnitNav {...p} currentItem={item.id} onNavigate={() => {}} />;

  const tabs: LessonTab[] = p.items.map((it) => ({
    kind: it.kind,
    label: TAB_LABEL[it.kind],
    icon: ITEM_ICON[it.kind],
    active: it.id === item.id,
    done: itemDone(st, p.id, it),
    ...(it.kind === "practice" ? { href: it.href } : { onSelect: () => router.replace(`?item=${it.kind}`, { scroll: false }) }),
  }));

  const content = (
    <>
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
      {item.kind === "article" && <LessonExplainers lessonId={p.id} />}
      {item.kind === "article" &&
        (p.world === "kids" ? (
          <KidsStory lesson={p.lesson} id={p.id} onComplete={finishArticle} done={Boolean(st.lessons[p.id])} />
        ) : (
          <Article lesson={p.lesson} id={p.id} world={p.world} done={Boolean(st.lessons[p.id])} onComplete={finishArticle} endCard={!exp.ownsComplete} />
        ))}
      {item.kind === "cards" && p.lesson.flashcards && <Flashcards cards={p.lesson.flashcards} kids={p.world === "kids"} onAllSeen={() => markItem(item.id, item.xp)} />}
      {item.kind === "challenge" && p.lesson.challenge && <Challenge challenge={p.lesson.challenge} lessonId={p.id} />}
    </>
  );

  const Layout = exp.LessonLayout;
  return (
    <>
    <Layout
      world={p.world}
      course={p.course}
      unit={{ title: p.unit.title, href: p.unit.href, index: p.unit.index }}
      lesson={{ id: p.id, title: p.lesson.title, summary: p.lesson.summary, minutes: p.lesson.minutes, xp: p.lesson.xp }}
      tabs={tabs}
      content={content}
      unitNav={sidebar}
      notebook={<NotebookDock lessonId={p.id} title={p.lesson.title} href={`/course/${p.id}`} />}
      prev={p.prev}
      upNext={upNext}
      unitProgress={{ done: p.unit.lessons.filter((l) => Boolean(st.lessons[l.id])).length, total: p.unit.lessons.length }}
      onComplete={finishArticle}
      completed={Boolean(st.lessons[p.id])}
    />
    <AskQuesty placement="lesson" courseTitle={p.course.title} lessonTitle={p.lesson.title} lessonSummary={p.lesson.summary} />
    </>
  );
}

function Article({ lesson, id, world, done, onComplete, endCard }: { lesson: Lesson; id: string; world: WorldId; done: boolean; onComplete: () => void; endCard: boolean }) {
  const narration = useNarration(lesson.blocks);
  const rewards = useMode().rewards;
  const playful = rewards === "celebrate" || rewards === "playful";
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
      {endCard && (
        <div className="card mt-10 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left">
          {playful && <Mascot pose={done ? "cheer" : "read"} size={90} animate={false} />}
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
      )}
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
