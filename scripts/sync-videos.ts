/**
 * Pulls every video from the Quest Academy YouTube channel and matches them to lessons.
 *
 *   YOUTUBE_API_KEY=... YOUTUBE_CHANNEL=@QuestAcademy npm run sync-videos
 *   npm run sync-videos -- --offline      # re-match using the cached channel.json
 *
 * YOUTUBE_CHANNEL accepts a handle (@name), a channel id (UC…) or a channel URL.
 * Writes src/content/videos/channel.json (raw cache) and matches.json (used by the app).
 * Review results at /studio/videos and pin/override in src/content/videos/overrides.ts.
 */
import fs from "node:fs";
import path from "node:path";
import { allLessons } from "../src/content";
import { isoDuration, matchVideos, type LessonMeta, type VideoMeta } from "../src/lib/video-match";

const OUT_DIR = path.join(process.cwd(), "src/content/videos");
const CACHE = path.join(OUT_DIR, "channel.json");
const MATCHES = path.join(OUT_DIR, "matches.json");
const API = "https://www.googleapis.com/youtube/v3";

const key = process.env.YOUTUBE_API_KEY;
const channelInput = process.env.YOUTUBE_CHANNEL;
const offline = process.argv.includes("--offline");

async function api<T>(endpoint: string, params: Record<string, string>): Promise<T> {
  const qs = new URLSearchParams({ ...params, key: key! });
  const res = await fetch(`${API}/${endpoint}?${qs}`);
  if (!res.ok) throw new Error(`YouTube API ${endpoint} failed: ${res.status} ${await res.text()}`);
  return res.json() as Promise<T>;
}

async function paged<T>(endpoint: string, params: Record<string, string>): Promise<T[]> {
  const out: T[] = [];
  let pageToken: string | undefined;
  do {
    const r = await api<{ items: T[]; nextPageToken?: string }>(endpoint, { ...params, maxResults: "50", ...(pageToken ? { pageToken } : {}) });
    out.push(...r.items);
    pageToken = r.nextPageToken;
  } while (pageToken);
  return out;
}

function parseChannel(input: string) {
  const s = input.trim();
  const url = /youtube\.com\/(?:channel\/(UC[\w-]+)|(@[\w.-]+)|c\/([\w.-]+)|user\/([\w.-]+))/.exec(s);
  if (url) return url[1] ? { id: url[1] } : url[2] ? { handle: url[2] } : { handle: "@" + (url[3] ?? url[4]) };
  if (s.startsWith("UC")) return { id: s };
  return { handle: s.startsWith("@") ? s : "@" + s };
}

type ChannelItem = { id: string; snippet: { title: string; customUrl?: string }; contentDetails: { relatedPlaylists: { uploads: string } } };

async function fetchChannel() {
  const which = parseChannel(channelInput!);
  const res = await api<{ items?: ChannelItem[] }>("channels", { part: "snippet,contentDetails", ...("id" in which ? { id: which.id! } : { forHandle: which.handle! }) });
  const ch = res.items?.[0];
  if (!ch) throw new Error(`Channel not found for "${channelInput}"`);
  console.log(`📺 ${ch.snippet.title} (${ch.id})`);

  const uploads = await paged<{ contentDetails: { videoId: string } }>("playlistItems", { part: "contentDetails", playlistId: ch.contentDetails.relatedPlaylists.uploads });
  const ids = uploads.map((u) => u.contentDetails.videoId);
  console.log(`   ${ids.length} uploads`);

  const videos: VideoMeta[] = [];
  for (let i = 0; i < ids.length; i += 50) {
    const r = await api<{ items: { id: string; snippet: { title: string; description: string }; contentDetails: { duration: string } }[] }>("videos", { part: "snippet,contentDetails", id: ids.slice(i, i + 50).join(",") });
    for (const v of r.items) videos.push({ id: v.id, title: v.snippet.title, description: v.snippet.description, duration: isoDuration(v.contentDetails.duration), playlists: [] });
  }

  const playlists = await paged<{ id: string; snippet: { title: string } }>("playlists", { part: "snippet", channelId: ch.id });
  console.log(`   ${playlists.length} playlists`);
  const byId = new Map(videos.map((v) => [v.id, v]));
  for (const p of playlists) {
    const items = await paged<{ contentDetails: { videoId: string } }>("playlistItems", { part: "contentDetails", playlistId: p.id });
    for (const it of items) byId.get(it.contentDetails.videoId)?.playlists?.push(p.snippet.title);
  }

  const channel = { id: ch.id, title: ch.snippet.title, url: `https://www.youtube.com/${ch.snippet.customUrl ?? "channel/" + ch.id}` };
  fs.writeFileSync(CACHE, JSON.stringify({ fetchedAt: new Date().toISOString(), channel, videos }, null, 2));
  return { channel, videos };
}

async function main() {
  let data: { channel: { id: string; title: string; url: string }; videos: VideoMeta[] };
  if (offline) {
    if (!fs.existsSync(CACHE)) throw new Error("No channel.json cache yet — run once with YOUTUBE_API_KEY and YOUTUBE_CHANNEL.");
    data = JSON.parse(fs.readFileSync(CACHE, "utf8"));
  } else {
    if (!key || !channelInput) {
      console.error("Set YOUTUBE_API_KEY and YOUTUBE_CHANNEL (handle, channel id or URL). See README → Videos.");
      process.exit(1);
    }
    data = await fetchChannel();
  }

  const lessons: LessonMeta[] = allLessons().map((l) => ({
    id: l.id,
    title: l.lesson.title,
    topic: l.topic.title,
    subject: l.subject.title,
    context: [...l.subject.levels, l.subject.domain ?? ""],
  }));

  const { matches, candidates } = matchVideos(lessons, data.videos);
  const out = {
    generatedAt: new Date().toISOString(),
    channel: data.channel,
    videos: data.videos.length,
    matches: Object.fromEntries(matches.map((m) => [m.lessonId, { videoId: m.videoId, title: m.title, duration: m.duration, score: m.score }])),
    candidates,
  };
  fs.writeFileSync(MATCHES, JSON.stringify(out, null, 2));

  const strong = matches.filter((m) => m.score >= 0.34).length;
  console.log(`✅ ${matches.length} lessons matched (${strong} shown automatically, rest need review) out of ${lessons.length}.`);
  console.log(`   Unused videos: ${data.videos.length - matches.length}. Review at /studio/videos, pin choices in src/content/videos/overrides.ts`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
