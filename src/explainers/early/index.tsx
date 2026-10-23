"use client";

import type { Explainer } from "../types";
import { counting } from "./counting";
import { addition } from "./addition";
import { subtraction } from "./subtraction";
import { placeValue } from "./place-value";
import { multiplication } from "./multiplication";
import { fractions } from "./fractions";
import { tellingTime } from "./telling-time";
import { shapes } from "./shapes";

/** Early maths, told so a 5–8-year-old can follow from the pictures alone. */
export const EXPLAINERS: Explainer[] = [counting, addition, subtraction, placeValue, multiplication, fractions, tellingTime, shapes];
