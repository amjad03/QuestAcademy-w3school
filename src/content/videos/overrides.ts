/**
 * Manual video assignments. These always win over the auto-matched videos in
 * `matches.json` (produced by `npm run sync-videos`).
 *
 *   "subject/topic/lesson": "YOUTUBE_VIDEO_ID"   → use this video
 *   "subject/topic/lesson": null                 → never show a video here
 *
 * Tip: open /studio/videos to see every lesson, its matched video and copy-ready lines.
 */
export const videoOverrides: Record<string, string | null> = {};
