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
import * as matAp10 from "./mat-10-ap";
import * as phyCalorimetry from "./phy-calorimetry";
import * as soc9World from "./soc-9-world";
import * as soc9Ancient from "./soc-9-ancient";
import * as soc9Medieval from "./soc-9-medieval";
import * as soc9Econ from "./soc-9-econ";
import * as soc9IndiaGeo from "./soc-9-india-geo";
import * as soc9KaGeo from "./soc-9-ka-geo";
import * as soc9Earth from "./soc-9-earth";
import * as soc9Atmos from "./soc-9-atmos";
import * as soc9Democracy from "./soc-9-democracy";
import * as soc9Govt from "./soc-9-govt";
import * as eng9 from "./eng-9";
import * as hin9 from "./hin-9";
import * as cmp9It from "./cmp-9-it";
import * as cmp9Java from "./cmp-9-java";
import * as mat9Alg from "./mat-9-alg";
import * as mat9Eq from "./mat-9-eq";
import * as mat9Tri from "./mat-9-tri";
import * as mat9Mens from "./mat-9-mens";
import * as mat9Data from "./mat-9-data";
import * as che9Ncert from "./che-9-ncert";
import * as che9Icse from "./che-9-icse";
import * as phy9Ncert from "./phy-9-ncert";
import * as phy9Icse from "./phy-9-icse";
import * as bio9Ncert from "./bio-9-ncert";
import * as bio9Icse from "./bio-9-icse";
import * as phy12A from "./phy-12-a";
import * as phy12B from "./phy-12-b";
import * as phy12C from "./phy-12-c";
import * as phy12D from "./phy-12-d";
import * as phy12E from "./phy-12-e";
import * as phy12F from "./phy-12-f";
import * as che12A from "./che-12-a";
import * as che12B from "./che-12-b";
import * as che12C from "./che-12-c";
import * as che12D from "./che-12-d";
import * as mat12A from "./mat-12-a";
import * as mat12B from "./mat-12-b";
import * as mat12C from "./mat-12-c";
import * as mat12D from "./mat-12-d";
import * as mat12E from "./mat-12-e";
import * as mat12F from "./mat-12-f";
import * as bio12A from "./bio-12-a";
import * as bio12B from "./bio-12-b";
import * as bio12C from "./bio-12-c";
import * as bio12D from "./bio-12-d";
import * as bio12E from "./bio-12-e";
import * as bio12F from "./bio-12-f";
import * as ele12A from "./ele-12-a";
import * as ele12B from "./ele-12-b";
import * as cs12Cbse from "./cs-12-cbse";
import * as cs12Isc from "./cs-12-isc";
import * as ele11A from "./ele-11-a";
import * as ele11B from "./ele-11-b";
import * as cs11CbseA from "./cs-11-cbse-a";
import * as cs11CbseB from "./cs-11-cbse-b";
import * as cs11IscA from "./cs-11-isc-a";
import * as cs11IscB from "./cs-11-isc-b";
import * as cs12PucA from "./cs-12-puc-a";
import * as cs12PucB from "./cs-12-puc-b";
import * as phy11A from "./phy-11-a";
import * as phy11B from "./phy-11-b";
import * as phy11C from "./phy-11-c";
import * as phy11D from "./phy-11-d";
import * as phy11E from "./phy-11-e";
import * as phy11F from "./phy-11-f";
import * as che11A from "./che-11-a";
import * as che11B from "./che-11-b";
import * as che11C from "./che-11-c";
import * as che11D from "./che-11-d";
import * as che11E from "./che-11-e";
import * as mat11A from "./mat-11-a";
import * as mat11B from "./mat-11-b";
import * as mat11C from "./mat-11-c";
import * as mat11D from "./mat-11-d";
import * as mat11E from "./mat-11-e";
import * as bio11A from "./bio-11-a";
import * as bio11B from "./bio-11-b";
import * as bio11C from "./bio-11-c";
import * as bio11D from "./bio-11-d";
import * as bio11E from "./bio-11-e";
import * as bio11F from "./bio-11-f";

/**
 * Chapters written to close syllabus gaps. Each batch file adds topics to one
 * course and maps syllabus chapter titles to them.
 */
const BATCHES: Batch[] = [phyMech, phyHeat, phyMagnet, phyModern, phyIcse10, chePhys, cheInorg, cheOrg, cheIcse, bioDiversity, bioStructure, bioRepro, bioApplied, bioIcse10, bioBody, bioIcse9, matAlgebra, matCalcGeo, matIcse10A, matIcse10B, mat9Geo, mat9Num, socIndia, socWorld, socGeo, socCivics, socEcon, engGrammar, engWriting, hin10, kan10, cmp10, gk10, matAp10, phyCalorimetry, soc9World, soc9Ancient, soc9Medieval, soc9Econ, soc9IndiaGeo, soc9KaGeo, soc9Earth, soc9Atmos, soc9Democracy, soc9Govt, eng9, hin9, cmp9It, cmp9Java, mat9Alg, mat9Eq, mat9Tri, mat9Mens, mat9Data, che9Ncert, che9Icse, phy9Ncert, phy9Icse, bio9Ncert, bio9Icse, phy12A, phy12B, phy12C, phy12D, phy12E, phy12F, che12A, che12B, che12C, che12D, mat12A, mat12B, mat12C, mat12D, mat12E, mat12F, bio12A, bio12B, bio12C, bio12D, bio12E, bio12F, ele12A, ele12B, cs12Cbse, cs12Isc, ele11A, ele11B, cs11CbseA, cs11CbseB, cs11IscA, cs11IscB, cs12PucA, cs12PucB, phy11A, phy11B, phy11C, phy11D, phy11E, phy11F, che11A, che11B, che11C, che11D, che11E, mat11A, mat11B, mat11C, mat11D, mat11E, bio11A, bio11B, bio11C, bio11D, bio11E, bio11F];

/** Extra topics per course slug, in batch order. */
export function extraTopics(course: string): Topic[] {
  return BATCHES.filter((b) => b.course === course).flatMap((b) => b.topics ?? []);
}

/** Subject family of a course slug, matching the syllabus topic-key prefix. */
const family = (course: string) => (course.startsWith("physics") ? "phy" : course.startsWith("chemistry") ? "che" : course.startsWith("biology") ? "bio" : "mat");

type Batch = { course: string; family?: string; topics: Topic[]; links: Record<string, string | string[]> };

/** `${family}|${syllabus chapter title}` → lesson ids written for it. */
export const CHAPTER_LESSONS: Record<string, string[]> = {};
for (const b of BATCHES) {
  for (const [title, slugs] of Object.entries(b.links ?? {}))
    for (const slug of typeof slugs === "string" ? [slugs] : slugs) {
      const k = `${b.family ?? family(b.course)}|${title}`;
      // A full lesson id ("course/topic/lesson") links an existing lesson from any course.
      if (slug.split("/").length === 3) {
        CHAPTER_LESSONS[k] = [...(CHAPTER_LESSONS[k] ?? []), slug];
        continue;
      }
      const t = b.topics?.find((x) => x.slug === slug);
      if (!t) continue;
      CHAPTER_LESSONS[k] = [...(CHAPTER_LESSONS[k] ?? []), ...t.lessons.map((l) => `${b.course}/${t.slug}/${l.slug}`)];
    }
}

/* Class 9 Motion uses the school motion lessons without projectile motion (a Class 11 topic). */
for (const title of ["9:Motion", "9:Motion in One Dimension"]) CHAPTER_LESSONS[`phy|${title}`] = ["physics-school/motion/speed-and-velocity", "physics-school/motion/acceleration-equations"];

/* Karnataka I PUC teaches Functions (with the math/random/statistics modules) in Class 11; reuse the Class 12 CBSE lessons. */
CHAPTER_LESSONS["cmp|11:Functions"] = [...(CHAPTER_LESSONS["cmp|12:Functions"] ?? []), ...(CHAPTER_LESSONS["cmp|11:Python Modules"] ?? [])];

/** `${course}/${topic}` of every Class 9–12 board chapter added to a school course (not part of the course's own grade range). */
export const EXTRA_TOPICS = new Set(BATCHES.flatMap((b) => (b.topics ?? []).map((t) => `${b.course}/${t.slug}`)));
