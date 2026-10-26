import type { ExamQuestion, FormulaSheet } from "@/content/types";
import * as phy12_1 from "./phy12-1";
import * as phy12_2 from "./phy12-2";
import * as phy12_3 from "./phy12-3";
import * as phy12_4 from "./phy12-4";
import * as che12_1 from "./che12-1";
import * as che12_2 from "./che12-2";
import * as che12_3 from "./che12-3";
import * as mat12_1 from "./mat12-1";
import * as mat12_2 from "./mat12-2";
import * as mat12_3 from "./mat12-3";
import * as mat12_4 from "./mat12-4";
import * as bio12_1 from "./bio12-1";
import * as bio12_2 from "./bio12-2";
import * as bio12_3 from "./bio12-3";
import * as phy11_1 from "./phy11-1";
import * as phy11_2 from "./phy11-2";
import * as phy11_3 from "./phy11-3";
import * as phy11_4 from "./phy11-4";
import * as che11_1 from "./che11-1";
import * as che11_2 from "./che11-2";
import * as che11_3 from "./che11-3";
import * as mat11_1 from "./mat11-1";
import * as mat11_2 from "./mat11-2";
import * as mat11_3 from "./mat11-3";
import * as mat11_4 from "./mat11-4";
import * as bio11_1 from "./bio11-1";
import * as bio11_2 from "./bio11-2";
import * as bio11_3 from "./bio11-3";

type Bank = { questions?: ExamQuestion[]; formulas?: FormulaSheet[] };
const BANKS: Bank[] = [phy12_1, phy12_2, phy12_3, phy12_4, che12_1, che12_2, che12_3, mat12_1, mat12_2, mat12_3, mat12_4, bio12_1, bio12_2, bio12_3, phy11_1, phy11_2, phy11_3, phy11_4, che11_1, che11_2, che11_3, mat11_1, mat11_2, mat11_3, mat11_4, bio11_1, bio11_2, bio11_3];

/** Class 11–12 chapter question banks (questions carry `grade` and the NCERT chapter title). */
export const bankQuestions: ExamQuestion[] = BANKS.flatMap((b) => b.questions ?? []);
/** Chapter formula / quick-revision sheets from the banks. */
export const bankFormulas: FormulaSheet[] = BANKS.flatMap((b) => b.formulas ?? []);
