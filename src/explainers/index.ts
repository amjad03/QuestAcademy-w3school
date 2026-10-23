"use client";

import type { Explainer } from "./types";
import { EXPLAINERS as early } from "./early";
import { EXPLAINERS as science } from "./science";
import { EXPLAINERS as stem } from "./stem";
import { EXPLAINERS as coding } from "./coding";

export type { Explainer } from "./types";

export const EXPLAINERS: Explainer[] = [...early, ...science, ...stem, ...coding];

export const explainerById = (id: string) => EXPLAINERS.find((e) => e.id === id);

export const explainersForLesson = (lessonId: string) => EXPLAINERS.filter((e) => e.lessons.includes(lessonId));
