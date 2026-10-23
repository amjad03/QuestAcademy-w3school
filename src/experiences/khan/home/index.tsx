"use client";

import { useMode } from "@/lib/useMode";
import { AdventureHome } from "./Adventure";
import { FocusHome } from "./Focus";
import { MasteryHome } from "./Mastery";
import { ResearchHome } from "./Research";
import { ProfessionalHome } from "./Professional";

/** "My learning": one Khan-style learner home, with a stage-tuned top section per profile. */
export function KhanHome() {
  const mode = useMode();
  switch (mode.id) {
    case "focus":
      return <FocusHome />;
    case "mastery":
      return <MasteryHome />;
    case "research":
      return <ResearchHome />;
    case "professional":
      return <ProfessionalHome />;
    default:
      return <AdventureHome />;
  }
}
