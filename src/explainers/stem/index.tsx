"use client";

import type { Explainer } from "../types";
import { negativeNumbers } from "./negative-numbers";
import { balanceEquations } from "./balance-equations";
import { ratioProportion } from "./ratio-proportion";
import { pythagoras } from "./pythagoras";
import { electricCircuits } from "./electric-circuits";
import { gravityFalling } from "./gravity-falling";
import { atomsReactions } from "./atoms-reactions";

export const EXPLAINERS: Explainer[] = [negativeNumbers, balanceEquations, ratioProportion, pythagoras, electricCircuits, gravityFalling, atomsReactions];
