/** Fields that hold code, ids, maths or settings rather than reader-facing text. */
export const SKIP_FIELDS = new Set(["id", "href", "slug", "key", "kind", "type", "tone", "lang", "tex", "code", "starter", "setup", "solution", "tests", "check", "widget", "props", "emoji", "icon", "world", "colors", "lessonId", "stages", "domain"]);

/** Strings worth translating: they contain letters and aren't a bare formula. */
export function translatable(s: string) {
  return /\p{L}{2}/u.test(s) && !/^\$[^$]*\$$/.test(s.trim());
}
