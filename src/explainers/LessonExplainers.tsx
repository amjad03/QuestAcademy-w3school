"use client";

import { explainersForLesson } from "./index";
import { ExplainerView } from "./ExplainerView";

/** The visual explainers attached to a lesson (none for most lessons). */
export default function LessonExplainers({ lessonId }: { lessonId: string }) {
  const list = explainersForLesson(lessonId);
  if (!list.length) return null;
  return (
    <div className="mb-8 space-y-6">
      {list.map((e) => (
        <ExplainerView key={e.id} explainer={e} />
      ))}
    </div>
  );
}
