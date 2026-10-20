import matches from "./matches.json";
import { videoOverrides } from "./overrides";

export interface LessonVideo {
  id: string;
  title: string;
  /** Duration in seconds, when known. */
  duration?: number;
  /** Match confidence 0–1 (1 for manual overrides). */
  score: number;
  source: "override" | "auto";
}

type MatchFile = {
  generatedAt: string | null;
  channel: { id: string; title: string; url: string } | null;
  videos: number;
  matches: Record<string, { videoId: string; title: string; duration?: number; score: number }>;
};

const data = matches as MatchFile;

/** Minimum auto-match confidence to show a video without a manual override. */
export const AUTO_MATCH_THRESHOLD = 0.34;

export function lessonVideo(lessonId: string): LessonVideo | undefined {
  if (lessonId in videoOverrides) {
    const id = videoOverrides[lessonId];
    if (!id) return undefined;
    const auto = Object.values(data.matches).find((m) => m.videoId === id);
    return { id, title: auto?.title ?? "", duration: auto?.duration, score: 1, source: "override" };
  }
  const m = data.matches[lessonId];
  if (!m || m.score < AUTO_MATCH_THRESHOLD) return undefined;
  return { id: m.videoId, title: m.title, duration: m.duration, score: m.score, source: "auto" };
}

export const videoChannel = data.channel;
export const videoSyncInfo = { generatedAt: data.generatedAt, videos: data.videos };
export const allVideoMatches = data.matches;
