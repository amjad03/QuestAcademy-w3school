# Interactives standard ("Try it")

Every hands-on activity is a **mission**: a few small guided steps that build to one idea.
A learner of the target age should never wonder what to do next.

The data shape is `Mission` in `src/explainers/types.ts`; `MissionPlayer` draws it.
`src/explainers/stem/electric-circuits.tsx` is the reference example.

## Rules

1. **One task per step.** The task is an action under ~10 words: "Close the switch."
   No goal lists, no free play with every control at once.
2. **At most one or two controls per step**, and only the ones the task needs.
   Prefer a single big button, tap or drag over sliders. Touch targets at least 48px.
3. **Predict first** when there is a common wrong idea. Put that wrong idea among the
   options; the result of the step then breaks it. Skip `predict` when there is nothing
   to guess.
4. **Explain right after**: one or two plain sentences saying what happened and why.
   Bold the key word. No new jargon without saying what it means.
5. **Hint** for anything that isn't obvious from the picture.
6. **Takeaway**: one sentence to remember, the same idea the lesson teaches.
7. **2–4 steps.** Each step changes one thing from the step before.
8. **Common mix-up**: every explainer sets `misconception: { myth, truth }`.
9. Scenes are self-contained: keep state inside the scene component, call `api.done()`
   exactly when the task is achieved, keep the result visible afterwards and disable
   the control once `api.complete` is true.
10. Keep words in the mission data (task, predict, hint, explain, goal, takeaway) so they
    can be translated. Labels drawn inside SVG scenes should be short (numbers, one-word
    labels) because they are not translated.

## By age

| Ages | Steps | Words | Interaction | Prediction options |
|---|---|---|---|---|
| 3–5 | 2–3 | Very short sentences, read aloud automatically | Tap one big thing | 2 options, picture-like ("🍎🍎" vs "🍎🍎🍎") |
| 6–10 | 2–3 | Short, friendly, everyday objects | Tap or drag one thing | 2–3 options |
| 11–14 | 3–4 | Plain, one new term at a time | One button or one simple drag | 2–3 options, include the usual mistake |
| 15–16 | 3–4 | Exact terms, defined in the explanation | One or two controls | 2–4 options, include the usual mistake |
