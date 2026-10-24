import type { Subject } from "@/content/types";
import { extraTopics } from "../extra";

export const kannada: Subject = {
  slug: "kannada",
  title: "Kannada · Grammar and Writing",
  world: "school",
  icon: "📜",
  colors: ["#dc2626", "#ca8a04"],
  tagline: "Kannada grammar and writing at second and third language level, explained simply.",
  description:
    "Kannada grammar and writing for Karnataka SSLC, CBSE and ICSE: sandhi, samasa, case suffixes, tenses, figures of speech, proverbs, letters, essays and unseen passages, explained in simple English with Kannada examples and practice.",
  levels: ["Grade 10"],
  stages: ["secondary"],
  topics: extraTopics("kannada"),
};
