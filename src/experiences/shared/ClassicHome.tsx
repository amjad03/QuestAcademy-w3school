"use client";

import { ExploreHome } from "@/components/modes/explore/Home";
import { AdventureHome } from "@/components/modes/adventure/Home";
import { FocusHome } from "@/components/modes/focus/Home";
import { MasteryHome } from "@/components/modes/mastery/Home";
import { ProfessionalHome } from "@/components/modes/professional/Home";
import { useMode } from "@/lib/useMode";

/** The original per-mode homes (the two newer profiles reuse their nearest sibling). */
export function ClassicHome() {
  const mode = useMode();
  switch (mode.id) {
    case "sprout":
    case "explore":
      return <ExploreHome />;
    case "adventure":
      return <AdventureHome />;
    case "focus":
      return <FocusHome />;
    case "mastery":
    case "research":
      return <MasteryHome />;
    case "professional":
      return <ProfessionalHome />;
  }
}
