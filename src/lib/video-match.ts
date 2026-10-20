/**
 * Matches YouTube videos to lessons by title similarity, boosted by topic,
 * subject and playlist context. Pure functions so it can be tested offline.
 */

export interface VideoMeta {
  id: string;
  title: string;
  description?: string;
  playlists?: string[];
  duration?: number;
}

export interface LessonMeta {
  id: string;
  title: string;
  topic: string;
  subject: string;
  /** Extra subject words, e.g. levels ("Grade 6", "NEET") or domain. */
  context?: string[];
}

export interface Match {
  lessonId: string;
  videoId: string;
  title: string;
  duration?: number;
  score: number;
}

const STOP = new Set(
  "a an the of and or in on to for with by from at as is are be what why how when where which who your you our we it its this that these those into vs part ep episode lecture lesson video class chapter full complete explained explanation intro introduction basics basic easy simple quick tutorial learn learning guide quest academy shorts short hindi english new best one minute minutes"
    .split(" "),
);

export function tokens(s: string): string[] {
  return (s ?? "")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/#\w+/g, " ")
    .replace(/[^a-z0-9+]+/g, " ")
    .split(" ")
    .filter((t) => t.length > 1 && !STOP.has(t) && !/^\d+$/.test(t))
    .map((t) => (t.length > 4 && t.endsWith("ies") ? t.slice(0, -3) + "y" : t.length > 4 && t.endsWith("es") && !t.endsWith("ses") ? t.slice(0, -2) : t.length > 3 && t.endsWith("s") && !t.endsWith("ss") ? t.slice(0, -1) : t));
}

function dice(a: Set<string>, b: Set<string>) {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  return (2 * inter) / (a.size + b.size);
}

function coverage(needles: Set<string>, hay: Set<string>) {
  if (!needles.size) return 0;
  let hit = 0;
  for (const t of needles) if (hay.has(t)) hit++;
  return hit / needles.size;
}

export function scorePair(lesson: LessonMeta, video: VideoMeta) {
  const lt = new Set(tokens(lesson.title));
  const vt = new Set(tokens(video.title));
  const title = dice(lt, vt);
  if (title === 0) return 0;
  const vctx = new Set([...vt, ...tokens(video.description?.slice(0, 300) ?? ""), ...(video.playlists ?? []).flatMap(tokens)]);
  const topic = coverage(new Set(tokens(lesson.topic)), vctx);
  const subject = coverage(new Set([...tokens(lesson.subject), ...(lesson.context ?? []).flatMap(tokens)]), vctx);
  return Math.min(1, 0.68 * title + 0.2 * topic + 0.12 * subject);
}

/**
 * Greedy one-to-one assignment: the best-scoring (lesson, video) pairs win and
 * each video is used at most once.
 */
export function matchVideos(lessons: LessonMeta[], videos: VideoMeta[], minScore = 0.2): { matches: Match[]; candidates: Record<string, { videoId: string; title: string; score: number }[]> } {
  const pairs: { l: LessonMeta; v: VideoMeta; s: number }[] = [];
  const candidates: Record<string, { videoId: string; title: string; score: number }[]> = {};
  for (const l of lessons) {
    const list: { videoId: string; title: string; score: number }[] = [];
    for (const v of videos) {
      const s = scorePair(l, v);
      if (s >= minScore) {
        pairs.push({ l, v, s });
        list.push({ videoId: v.id, title: v.title, score: +s.toFixed(3) });
      }
    }
    if (list.length) candidates[l.id] = list.sort((a, b) => b.score - a.score).slice(0, 5);
  }
  pairs.sort((a, b) => b.s - a.s);
  const usedL = new Set<string>();
  const usedV = new Set<string>();
  const matches: Match[] = [];
  for (const p of pairs) {
    if (usedL.has(p.l.id) || usedV.has(p.v.id)) continue;
    usedL.add(p.l.id);
    usedV.add(p.v.id);
    matches.push({ lessonId: p.l.id, videoId: p.v.id, title: p.v.title, duration: p.v.duration, score: +p.s.toFixed(3) });
  }
  return { matches, candidates };
}

/** "PT1H2M10S" → 3730 */
export function isoDuration(iso: string | undefined) {
  const m = /P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso ?? "");
  if (!m) return undefined;
  const [, d, h, mi, s] = m.map((x) => Number(x ?? 0));
  return d * 86400 + h * 3600 + mi * 60 + s;
}
