/**
 * What the student wants when they cut in: "wait", "I didn't get this",
 * "explain again", "give an example", "slower", "faster", "in Hindi"…
 * Recognised on the device (English, Hindi, Hinglish, Kannada) so "wait" can
 * pause instantly without a round trip, and the rest reach the tutor as an
 * explicit tag instead of free text it has to guess at.
 */

import type { TutorLanguage } from "./live";

export type Intent = "wait" | "continue" | "confused" | "repeat" | "example" | "slower" | "faster" | "simpler" | "exam" | "hint" | "solution" | "language";

export interface DetectedIntent {
  intent: Intent;
  language?: TutorLanguage;
}

const RULES: [Intent, RegExp][] = [
  ["wait", /^(please\s+)?(wait|hold on|stop|pause|one (sec|second|minute)|ek (minute|second)|ruko|ruk(o|iye)? ?(zara)?|ಒಂದು ನಿಮಿಷ|ರುಕೋ|रुको|एक मिनट)\b[.!]*$/i],
  ["continue", /^(ok(ay)?|go on|continue|carry on|next|got it|yes,? go on|aage (badho|chalo)|chalo|theek hai|ಮುಂದುವರಿಸಿ|आगे)\b[.!]*$/i],
  ["confused", /\b(didn'?t (get|understand)|don'?t (get|understand)|not (clear|getting)|confus|lost me|samajh (nahi|nhi|me nahi)|samjha nahi|nahi samjha|ಅರ್ಥ ಆಗಲಿಲ್ಲ|अर्थ नहीं|समझ नहीं)/i],
  ["repeat", /\b(explain (it |that )?again|say (it |that )?again|repeat|once more|one more time|phir se|fir se|dobara|ಮತ್ತೆ ಹೇಳಿ|फिर से|दोबारा)\b/i],
  ["example", /\b(give (me )?(an? )?(another )?example|example (please|do)|for example\?|show (me )?an example|udaharan|udaaharan|ಉದಾಹರಣೆ|उदाहरण)\b/i],
  ["slower", /\b(slow(er)?( down)?|too fast|go slow|dheere|dhire|aaram se|ನಿಧಾನ|धीरे)\b/i],
  ["faster", /\b(faster|speed (it )?up|go fast|too slow|hurry|jaldi|i know this|skip (this|it)|ಬೇಗ|जल्दी)\b/i],
  ["simpler", /\b(simpler|more simply|easier|easy words|like (i'?m|i am|to) (a )?(kid|child|10|ten)|simple (words|language)|aasan|asaan|ಸುಲಭ|आसान)\b/i],
  ["exam", /\b(exam level|board (exam )?level|jee level|neet level|harder (question|one)?|tough(er)?|exam (style|question)|marking scheme)\b/i],
  ["solution", /\b(full solution|show (me )?the (full )?(solution|answer)|just tell me the answer|solve it)\b/i],
  ["hint", /\b(hint|clue|help me start|how do i start|kaise shuru|ಸುಳಿವು|संकेत)\b/i],
];

const LANGS: [TutorLanguage, RegExp][] = [
  ["Hindi", /\b(in hindi|hindi (me|mein|mai|please)|हिंदी में|हिन्दी में)\b/i],
  ["Kannada", /\b(in kannada|kannada(dalli| please)|ಕನ್ನಡದಲ್ಲಿ)\b/i],
  ["Hinglish", /\b(in hinglish|hinglish (me|mein|please))\b/i],
  ["English", /\b(in english|english (me|mein|please)|अंग्रेज़ी में|ಇಂಗ್ಲಿಷ್)\b/i],
];

// `\b` only knows ASCII words; rebuild each rule with Unicode-aware boundaries so Devanagari/Kannada match too.
const LB = "(?<![\\p{L}\\p{M}\\p{N}])";
const LA = "(?![\\p{L}\\p{M}\\p{N}])";
const uni = (re: RegExp) => new RegExp(re.source.replace(/\\b/g, (_m, off: number) => (off === 0 ? LB : LA)), "iu");
const U_RULES = RULES.map(([i, re]) => [i, uni(re)] as const);
const U_LANGS = LANGS.map(([l, re]) => [l, uni(re)] as const);

/** The student's intent, or null for an ordinary answer/question. Only short, request-like utterances count. */
export function detectIntent(text: string): DetectedIntent | null {
  const s = text.trim();
  if (!s || s.length > 140) return null;
  for (const [language, re] of U_LANGS) if (re.test(s)) return { intent: "language", language };
  for (const [intent, re] of U_RULES) if (re.test(s)) return { intent };
  return null;
}
