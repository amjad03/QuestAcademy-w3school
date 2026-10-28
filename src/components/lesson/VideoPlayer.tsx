"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Play } from "lucide-react";
import { useHydrated } from "@/components/providers";
import { useDataSaver } from "@/lib/dataSaver";
import { useT } from "@/i18n";

interface YTPlayer {
  destroy: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
}
interface YTNamespace {
  Player: new (el: HTMLElement, opts: Record<string, unknown>) => YTPlayer;
  PlayerState: { ENDED: number; PLAYING: number };
}
declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<YTNamespace> | null = null;
function loadApi(): Promise<YTNamespace> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  apiPromise ??= new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT!);
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(s);
  });
  return apiPromise;
}

type Episode = { id: string; title: string };

/**
 * Lesson video. Google Drive files play in Drive's preview player (with an episode list when
 * the lesson has a chapter playlist); YouTube videos use the player below.
 */
export function VideoPlayer(p: {
  id: string;
  title: string;
  onWatched: () => void;
  watched: boolean;
  provider?: "youtube" | "drive";
  playlist?: Episode[];
}) {
  const saver = useDataSaver(useHydrated());
  const [tapped, setTapped] = useState(false);
  // Data saver: nothing (player script, iframe, thumbnail) loads until the learner taps play.
  if (saver && !tapped) return <TapToLoad title={p.title} onStart={() => setTapped(true)} watched={p.watched} onWatched={p.onWatched} />;
  if (p.provider === "drive") return <DrivePlayer {...p} />;
  return <YouTubePlayer {...p} />;
}

function TapToLoad({ title, onStart, watched, onWatched }: { title: string; onStart: () => void; watched: boolean; onWatched: () => void }) {
  const t = useT();
  return (
    <div>
      <button type="button" onClick={onStart} className="relative grid aspect-video w-full place-items-center overflow-hidden rounded-2xl bg-[#0F1420] text-white">
        <span className="flex flex-col items-center gap-3 px-6 text-center">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/15" aria-hidden>
            <Play className="h-8 w-8" />
          </span>
          <span className="font-extrabold">{t("lesson.video.tapToLoad", "Play video: {title}", { title })}</span>
          <span className="text-sm font-semibold text-white/70">{t("lesson.video.dataSaver", "Data saver is on. The video loads only when you tap.")}</span>
        </span>
      </button>
      <WatchedBar watched={watched} onWatched={onWatched} />
    </div>
  );
}

function WatchedBar({ watched, onWatched }: { watched: boolean; onWatched: () => void }) {
  const t = useT();
  return (
    <div className="mt-3 flex items-center justify-end">
      {watched ? (
        <span className="flex items-center gap-1.5 text-sm font-extrabold uppercase tracking-wide text-good">
          <Check className="h-4 w-4" strokeWidth={3.5} /> {t("lesson.video.watched", "Watched")}
        </span>
      ) : (
        <button onClick={onWatched} className="btn-flat">
          {t("lesson.video.markWatched", "Mark as watched")}
        </button>
      )}
    </div>
  );
}

function DrivePlayer({ id, title, onWatched, watched, playlist }: { id: string; title: string; onWatched: () => void; watched: boolean; playlist?: Episode[] }) {
  const t = useT();
  const episodes = playlist?.length ? playlist : [{ id, title }];
  const [current, setCurrent] = useState(0);
  const ep = episodes[Math.min(current, episodes.length - 1)];
  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0F1420]">
        <iframe
          key={ep.id}
          className="absolute inset-0 h-full w-full"
          src={`https://drive.google.com/file/d/${ep.id}/preview`}
          title={ep.title || title}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      {episodes.length > 1 && (
        <div className="mt-3">
          <div className="mb-1.5 text-xs font-extrabold uppercase tracking-wide text-muted">
            {t("lesson.video.chapterVideos", "Chapter videos")} · {current + 1}/{episodes.length}
          </div>
          <ol className="max-h-56 space-y-1 overflow-y-auto">
            {episodes.map((e, i) => (
              <li key={e.id}>
                <button
                  onClick={() => setCurrent(i)}
                  aria-current={i === current}
                  className={`w-full rounded-xl px-3 py-2 text-left text-sm font-bold ${i === current ? "bg-accent/15 text-accent" : "hover:bg-surface-2"}`}
                >
                  {e.title}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
      <WatchedBar watched={watched} onWatched={onWatched} />
    </div>
  );
}

/**
 * Privacy-enhanced YouTube embed. Reports "watched" when the video ends or the
 * learner passes 90% — so the lesson item ticks off automatically.
 */
function YouTubePlayer({ id, title, onWatched, watched }: { id: string; title: string; onWatched: () => void; watched: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const watchedRef = useRef(watched);
  watchedRef.current = watched;

  useEffect(() => {
    let player: YTPlayer | null = null;
    let timer: ReturnType<typeof setInterval> | undefined;
    let cancelled = false;
    const fallback = setTimeout(() => !player && setFailed(true), 8000);
    loadApi()
      .then((YT) => {
        if (cancelled || !host.current) return;
        const el = document.createElement("div");
        host.current.innerHTML = "";
        host.current.appendChild(el);
        player = new YT.Player(el, {
          videoId: id,
          host: "https://www.youtube-nocookie.com",
          width: "100%",
          height: "100%",
          playerVars: { rel: 0, modestbranding: 1, playsinline: 1 },
          events: {
            onStateChange: (e: { data: number }) => {
              if (e.data === YT.PlayerState.ENDED && !watchedRef.current) onWatched();
              if (e.data === YT.PlayerState.PLAYING && !timer)
                timer = setInterval(() => {
                  const d = player?.getDuration() ?? 0;
                  if (d && (player?.getCurrentTime() ?? 0) / d > 0.9 && !watchedRef.current) onWatched();
                }, 4000);
            },
          },
        });
      })
      .catch(() => setFailed(true));
    return () => {
      cancelled = true;
      clearTimeout(fallback);
      clearInterval(timer);
      player?.destroy();
    };
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#0F1420]">
        {failed ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div ref={host} className="absolute inset-0 [&>iframe]:h-full [&>iframe]:w-full" />
        )}
      </div>
      <WatchedBar watched={watched} onWatched={onWatched} />
    </div>
  );
}
