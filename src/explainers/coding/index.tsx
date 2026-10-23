"use client";

import type { Explainer } from "../types";
import { variablesExplainer } from "./variables";
import { loopsExplainer } from "./loops";
import { ifElseExplainer } from "./ifelse";
import { binaryExplainer } from "./binary";
import { sortingExplainer } from "./sorting";
import { internetExplainer } from "./internet";
import { bigOExplainer } from "./bigo";

export const EXPLAINERS: Explainer[] = [variablesExplainer, loopsExplainer, ifElseExplainer, binaryExplainer, sortingExplainer, internetExplainer, bigOExplainer];
