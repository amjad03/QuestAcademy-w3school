import type { Topic } from "@/content/types";
import * as phyMech from "./phy-mech";
import * as phyHeat from "./phy-heat";
import * as phyMagnet from "./phy-magnet";
import * as phyModern from "./phy-modern";
import * as phyIcse10 from "./phy-icse10";
import * as chePhys from "./che-phys";
import * as cheInorg from "./che-inorg";
import * as cheOrg from "./che-org";
import * as cheIcse from "./che-icse";
import * as bioDiversity from "./bio-diversity";
import * as bioStructure from "./bio-structure";
import * as bioRepro from "./bio-repro";
import * as bioApplied from "./bio-applied";
import * as bioIcse10 from "./bio-icse10";
import * as bioBody from "./bio-body";
import * as bioIcse9 from "./bio-icse9";
import * as matAlgebra from "./mat-algebra";
import * as matCalcGeo from "./mat-calc-geo";
import * as matIcse10A from "./mat-icse10-a";
import * as matIcse10B from "./mat-icse10-b";
import * as mat9Geo from "./mat-9-geo";
import * as mat9Num from "./mat-9-num";
import * as socIndia from "./soc-india";
import * as socWorld from "./soc-world";
import * as socGeo from "./soc-geo";
import * as socCivics from "./soc-civics";
import * as socEcon from "./soc-econ";
import * as engGrammar from "./eng-grammar";
import * as engWriting from "./eng-writing";
import * as hin10 from "./hin-10";
import * as kan10 from "./kan-10";
import * as cmp10 from "./cmp-10";
import * as gk10 from "./gk-10";

/**
 * Chapters written to close syllabus gaps. Each batch file adds topics to one
 * course and maps syllabus chapter titles to them.
 */
const BATCHES: Batch[] = [phyMech, phyHeat, phyMagnet, phyModern, phyIcse10, chePhys, cheInorg, cheOrg, cheIcse, bioDiversity, bioStructure, bioRepro, bioApplied, bioIcse10, bioBody, bioIcse9, matAlgebra, matCalcGeo, matIcse10A, matIcse10B, mat9Geo, mat9Num, socIndia, socWorld, socGeo, socCivics, socEcon, engGrammar, engWriting, hin10, kan10, cmp10, gk10];

/** Extra topics per course slug, in batch order. */
export function extraTopics(course: string): Topic[] {
  return BATCHES.filter((b) => b.course === course).flatMap((b) => b.topics);
}

/** Subject family of a course slug, matching the syllabus topic-key prefix. */
const family = (course: string) => (course.startsWith("physics") ? "phy" : course.startsWith("chemistry") ? "che" : course.startsWith("biology") ? "bio" : "mat");

type Batch = { course: string; family?: string; topics: Topic[]; links: Record<string, string> };

/** `${family}|${syllabus chapter title}` → lesson ids written for it. */
export const CHAPTER_LESSONS: Record<string, string[]> = {};
for (const b of BATCHES) {
  for (const [title, slug] of Object.entries(b.links)) {
    const t = b.topics.find((x) => x.slug === slug);
    if (t) {
      const k = `${b.family ?? family(b.course)}|${title}`;
      CHAPTER_LESSONS[k] = [...(CHAPTER_LESSONS[k] ?? []), ...t.lessons.map((l) => `${b.course}/${t.slug}/${l.slug}`)];
    }
  }
}
