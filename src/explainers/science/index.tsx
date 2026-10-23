"use client";

import type { Explainer } from "../types";
import { waterCycle } from "./water-cycle";
import { plants } from "./plants";
import { dayNight } from "./day-night";
import { seasons } from "./seasons";
import { statesOfMatter } from "./states-of-matter";
import { foodChains } from "./food-chains";
import { magnets } from "./magnets";
import { digestion } from "./digestion";

export const EXPLAINERS: Explainer[] = [waterCycle, plants, dayNight, seasons, statesOfMatter, foodChains, magnets, digestion];
