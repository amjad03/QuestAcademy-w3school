import { allLessons } from "@/content";
import matches from "@/content/videos/matches.json";
import { videoOverrides } from "@/content/videos/overrides";
import { AUTO_MATCH_THRESHOLD, lessonVideo, videoChannel, videoSyncInfo } from "@/content/videos";
import { CourseIcon } from "@/components/brand/CourseIcon";

export const metadata = { title: "Video mapping · Studio", robots: { index: false } };

type Cand = { videoId: string; title: string; score: number };

export default function Page() {
  const candidates = (matches as unknown as { candidates?: Record<string, Cand[]> }).candidates ?? {};
  const lessons = allLessons();
  const mapped = lessons.filter((l) => lessonVideo(l.id)).length;
  const bySubject = new Map<string, typeof lessons>();
  for (const l of lessons) bySubject.set(l.subject.slug, [...(bySubject.get(l.subject.slug) ?? []), l]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="eyebrow">Studio</p>
      <h1 className="mt-1 text-3xl font-black">Video mapping</h1>
      <p className="mt-2 max-w-3xl font-medium text-muted">
        Every lesson and the YouTube video attached to it. Run <code className="rounded bg-surface-2 px-1.5 font-mono text-sm">npm run sync-videos</code> to pull the channel and auto-match by title,
        then pin or fix any lesson in <code className="rounded bg-surface-2 px-1.5 font-mono text-sm">src/content/videos/overrides.ts</code>.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-4">
        <Stat label="Lessons with video" value={`${mapped} / ${lessons.length}`} />
        <Stat label="Videos in channel" value={String(videoSyncInfo.videos)} />
        <Stat label="Manual overrides" value={String(Object.keys(videoOverrides).length)} />
        <Stat label="Last sync" value={videoSyncInfo.generatedAt ? new Date(videoSyncInfo.generatedAt).toLocaleDateString() : "Never"} />
      </div>
      {videoChannel ? (
        <p className="mt-3 text-sm font-semibold text-muted">
          Channel: <a className="text-accent underline" href={videoChannel.url}>{videoChannel.title}</a>
        </p>
      ) : (
        <div className="card mt-6 p-5 text-sm font-medium leading-6 text-muted">
          <b className="text-ink">No channel synced yet.</b> Create a YouTube Data API key (Google Cloud Console → APIs → YouTube Data API v3), then run:
          <pre className="mt-3 overflow-x-auto rounded-xl bg-surface-2 p-3 font-mono text-[13px] text-ink">YOUTUBE_API_KEY=your-key YOUTUBE_CHANNEL=@YourChannelHandle npm run sync-videos</pre>
        </div>
      )}

      <div className="mt-10 space-y-8">
        {[...bySubject.entries()].map(([slug, ls]) => (
          <section key={slug} className="card overflow-hidden">
            <div className="flex items-center gap-3 border-b-2 border-line p-4">
              <CourseIcon slug={slug} size={36} />
              <h2 className="text-lg font-extrabold">{ls[0].subject.title}</h2>
              <span className="chip ml-auto">
                {ls.filter((l) => lessonVideo(l.id)).length}/{ls.length} mapped
              </span>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {ls.map((l) => {
                  const v = lessonVideo(l.id);
                  const c = candidates[l.id] ?? [];
                  const overridden = l.id in videoOverrides;
                  return (
                    <tr key={l.id} className="border-b border-line last:border-0 align-top">
                      <td className="w-[38%] p-3">
                        <div className="font-bold">{l.lesson.title}</div>
                        <div className="text-xs font-semibold text-muted">{l.topic.title}</div>
                      </td>
                      <td className="p-3">
                        {v ? (
                          <div className="flex items-start gap-3">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={v.thumbnail} alt="" className="h-12 w-20 shrink-0 rounded-lg bg-surface-2 object-cover" />
                            <div>
                              <div className="font-semibold">{v.title || v.id}</div>
                              <div className="text-xs font-bold text-muted">{v.source === "drive" ? `Google Drive · ${v.playlist?.length ?? 1} episode(s)` : overridden ? "Pinned override" : `Auto · confidence ${(v.score * 100).toFixed(0)}%`}</div>
                            </div>
                          </div>
                        ) : (
                          <span className="font-semibold text-muted">{overridden ? "Hidden by override" : "No video"}</span>
                        )}
                        {c.length > 0 && !overridden && (
                          <details className="mt-2">
                            <summary className="cursor-pointer text-xs font-bold text-accent">Other candidates ({c.length})</summary>
                            <ul className="mt-2 space-y-1">
                              {c.map((x) => (
                                <li key={x.videoId} className="font-mono text-[12px] text-muted">
                                  {(x.score * 100).toFixed(0)}% · {x.title} → <span className="select-all text-ink">{`"${l.id}": "${x.videoId}",`}</span>
                                  {x.score < AUTO_MATCH_THRESHOLD && " (below auto threshold)"}
                                </li>
                              ))}
                            </ul>
                          </details>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-4">
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs font-bold text-muted">{label}</div>
    </div>
  );
}
