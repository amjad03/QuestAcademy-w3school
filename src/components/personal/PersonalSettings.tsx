"use client";

import { useState, type ReactNode } from "react";
import { useT } from "@/i18n";
import { useLearner } from "@/lib/store";
import { useMyClass } from "@/lib/useMyClass";
import { goalXpForMinutes, hasExamStep, isYoungLevel, type PersonalProfile, type StudyStyle } from "@/lib/personalise";
import { choiceFromProfile } from "@/components/class/ClassPicker";
import { useSubjectName } from "@/components/class/data";
import { AboutFields, ExamFields, GoalFields, HabitsFields, LevelsFields, ParentFields, WeakFields } from "./PersonalFields";
import { Diagnostic } from "./Diagnostic";

const STYLE_TO = { video: "visual", reading: "reading", practice: "doing" } as const satisfies Record<StudyStyle, string>;

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="p-5">
      <h3 className="mb-3 font-extrabold">{title}</h3>
      {children}
    </div>
  );
}

/** Every onboarding answer, editable. The plan on the class home rebuilds from these on change. */
export function PersonalSettings() {
  const t = useT();
  const profile = useLearner((s) => s.profile);
  const setProfile = useLearner((s) => s.setProfile);
  const mc = useMyClass();
  const subjectName = useSubjectName();
  const [diag, setDiag] = useState(false);
  const p: PersonalProfile = profile.personal ?? {};
  const level = choiceFromProfile(profile).level;
  const young = isYoungLevel(level);
  const subjects = mc?.subjects ?? [];
  const onChange = (patch: Partial<PersonalProfile>) => {
    const next = { ...p, ...patch };
    setProfile({
      personal: next,
      ...(patch.dailyMinutes ? { dailyGoal: goalXpForMinutes(patch.dailyMinutes) } : {}),
      ...(patch.studyStyle ? { style: STYLE_TO[patch.studyStyle] } : {}),
    });
  };
  const weak = subjects.filter((s) => p.weakSubjects?.includes(s.id));

  return (
    <div className="card divide-y-2 divide-line">
      <Block title={t("personal.settings.about", "About you")}>
        <AboutFields value={p} onChange={onChange} young={young} name={profile.name} onName={(name) => setProfile({ name })} />
      </Block>
      {hasExamStep(level) && (
        <Block title={t("personal.settings.exam", "Target exam")}>
          <ExamFields value={p} onChange={onChange} level={level} />
        </Block>
      )}
      {!young && (
        <Block title={t("personal.settings.goal", "Goal")}>
          <GoalFields value={p} onChange={onChange} />
        </Block>
      )}
      {!young && subjects.length > 0 && (
        <Block title={t("personal.settings.levels", "Current level per subject")}>
          <LevelsFields value={p} onChange={onChange} subjects={subjects} />
        </Block>
      )}
      <Block title={t("personal.settings.habits", "Study time and reminders")}>
        <HabitsFields value={p} onChange={onChange} young={young} language={false} />
      </Block>
      {!young && subjects.length > 0 && (
        <Block title={t("personal.settings.weak", "Hard subjects and chapters")}>
          <WeakFields value={p} onChange={onChange} subjects={subjects} />
          {weak.length > 0 && (
            <div className="mt-4">
              {diag ? (
                <Diagnostic
                  subjects={weak}
                  personal={p}
                  onDone={(r) => {
                    onChange({ diagnostic: { ...(p.diagnostic ?? {}), ...r } });
                    setDiag(false);
                  }}
                />
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <button type="button" className="btn-ghost" onClick={() => setDiag(true)}>
                    {p.diagnostic && Object.keys(p.diagnostic).length ? t("personal.settings.retake", "Retake the quick quiz") : t("personal.settings.take", "Take the quick quiz")}
                  </button>
                  {weak
                    .filter((s) => p.diagnostic?.[s.id])
                    .map((s) => (
                      <span key={s.id} className="text-sm text-muted">
                        {t("personal.settings.diagScore", "{subject}: {c}/{n}", { subject: subjectName(s), c: p.diagnostic![s.id].correct, n: p.diagnostic![s.id].total })}
                      </span>
                    ))}
                </div>
              )}
            </div>
          )}
        </Block>
      )}
      <Block title={t("personal.settings.parent", "Parent contact")}>
        <ParentFields value={p} onChange={onChange} young={young} />
      </Block>
    </div>
  );
}
