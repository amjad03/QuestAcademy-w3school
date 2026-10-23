"use client";

import { MasteryHome as SemesterDashboard } from "@/components/modes/mastery/Home";

/** Semester dashboard: the Mastery home (competency radar, continue, workspace, reading queue, case study) inside the IDE frame. */
export function MasteryHome() {
  return (
    <div className="mx-home">
      <SemesterDashboard />
    </div>
  );
}
