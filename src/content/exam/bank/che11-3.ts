import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Chemistry — Redox Reactions; Organic Chemistry – Some Basic Principles and
 * Techniques; Hydrocarbons.
 * Original exam-style questions (JEE Main / Advanced, NEET, KCET, COMEDK).
 * `answer` is the 0-based option index (mcq) or the value (numeric); `answers` lists indexes (multi).
 */

const t = String.raw;

type Raw = ExamQuestion extends infer T
  ? T extends ExamQuestion
    ? Omit<T, "id" | "subject" | "chapter" | "grade">
    : never
  : never;

const chapter = (no: string, title: string, list: Raw[]): ExamQuestion[] =>
  list.map(
    (x, i) =>
      ({
        ...x,
        id: `che11-3-${no}-${String(i + 1).padStart(3, "0")}`,
        subject: "chemistry",
        chapter: title,
        grade: "11",
      }) as ExamQuestion,
  );

/** Board / KCET / COMEDK level and most JEE Main / NEET MCQs. */
const ALL: ExamId[] = ["NEET", "JEE", "KCET", "COMEDK"];
/** JEE Main / NEET level MCQs. */
const MAIN: ExamId[] = ["NEET", "JEE", "COMEDK"];
/** JEE Main numerical-value questions. */
const NUM: ExamId[] = ["JEE"];
/** JEE Main + Advanced. */
const ADV: ExamId[] = ["JEE", "JEE_ADV"];
/** JEE Advanced one-or-more-correct. */
const MULTI: ExamId[] = ["JEE_ADV"];

const AR_OPTS = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is NOT the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];

const S_OPTS = [
  "Both Statement I and Statement II are correct",
  "Both Statement I and Statement II are incorrect",
  "Statement I is correct but Statement II is incorrect",
  "Statement I is incorrect but Statement II is correct",
];

/* ================================================================== */
/* Chapter 7 — Redox Reactions                                         */
/* ================================================================== */
const redox: Raw[] = [
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: t`The oxidation number of chromium in $\text{K}_2\text{Cr}_2\text{O}_7$ is:`,
    options: ["+3", "+6", "+7", "+12"],
    answer: 1,
    explain: t`$2(+1) + 2x + 7(-2) = 0 \Rightarrow 2x = 12 \Rightarrow x = +6$. +12 is the total for both Cr atoms, not the value per atom; +3 is Cr in the reduced product $\text{Cr}^{3+}$.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    q: t`The oxidation number of sulphur in peroxodisulphuric acid, $\text{H}_2\text{S}_2\text{O}_8$, is:`,
    options: ["+7", "+6", "+8", "+5"],
    answer: 1,
    hint: "The molecule contains one peroxide (–O–O–) linkage.",
    explain: t`$\text{H}_2\text{S}_2\text{O}_8$ has one $-\text{O}-\text{O}-$ bridge: 6 O atoms are $-2$ and 2 are $-1$. So $2(+1) + 2x + 6(-2) + 2(-1) = 0 \Rightarrow x = +6$. Treating all eight O as $-2$ gives the impossible +7 (sulphur cannot exceed +6, its group valence).`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: t`The average oxidation number of iron in $\text{Fe}_3\text{O}_4$ is:`,
    options: ["+2", "+3", "+8/3", "+4/3"],
    answer: 2,
    explain: t`$3x + 4(-2) = 0 \Rightarrow x = +8/3$. A fractional value is only an average: $\text{Fe}_3\text{O}_4$ is really $\text{FeO}\cdot\text{Fe}_2\text{O}_3$, with one $\text{Fe}^{2+}$ and two $\text{Fe}^{3+}$.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    q: t`The average oxidation number of sulphur in sodium tetrathionate, $\text{Na}_2\text{S}_4\text{O}_6$, is:`,
    options: ["+2", "+2.5", "+3", "+5"],
    answer: 1,
    hint: "Find the average first; the actual structure has two kinds of S.",
    explain: t`$2(+1) + 4x + 6(-2) = 0 \Rightarrow 4x = 10 \Rightarrow x = +2.5$. In the structure $^-\text{O}_3\text{S}-\text{S}-\text{S}-\text{SO}_3^-$ the two terminal S are +5 and the two bridging S are 0, which average to +2.5. +5 is only the terminal S; +2 is S in thiosulphate.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: "Which of the following is a disproportionation reaction?",
    options: [
      t`$2\text{H}_2\text{O}_2 \rightarrow 2\text{H}_2\text{O} + \text{O}_2$`,
      t`$2\text{KClO}_3 \rightarrow 2\text{KCl} + 3\text{O}_2$`,
      t`$\text{CaCO}_3 \rightarrow \text{CaO} + \text{CO}_2$`,
      t`$\text{Zn} + \text{CuSO}_4 \rightarrow \text{ZnSO}_4 + \text{Cu}$`,
    ],
    answer: 0,
    explain: t`In disproportionation the same element in one oxidation state is both oxidised and reduced. In $\text{H}_2\text{O}_2$, O ($-1$) goes to $-2$ in $\text{H}_2\text{O}$ and to 0 in $\text{O}_2$. In $\text{KClO}_3$ decomposition, Cl is reduced but a different element (O) is oxidised. $\text{CaCO}_3$ decomposition is not redox at all, and Zn + $\text{CuSO}_4$ is a displacement reaction.`,
  },
  {
    kind: "numeric",
    difficulty: 1,
    exams: NUM,
    idealTime: 50,
    q: t`How many moles of $\text{Fe}^{2+}$ are oxidised to $\text{Fe}^{3+}$ by one mole of $\text{MnO}_4^-$ in acidic solution?`,
    answer: 5,
    explain: t`$\text{MnO}_4^- + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$ (Mn: +7 → +2). Each $\text{Fe}^{2+}$ gives one electron, so 1 mol $\text{MnO}_4^-$ oxidises 5 mol $\text{Fe}^{2+}$: $\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$.`,
  },
  {
    kind: "numeric",
    difficulty: 3,
    exams: NUM,
    idealTime: 120,
    q: t`How many moles of $\text{KMnO}_4$ are needed to completely oxidise 1 mol of ferrous oxalate, $\text{FeC}_2\text{O}_4$, in acidic medium?`,
    answer: 0.6,
    tolerance: 0.01,
    hint: "Both the cation and the anion are oxidised.",
    explain: t`$\text{Fe}^{2+} \rightarrow \text{Fe}^{3+}$ releases 1 e; $\text{C}_2\text{O}_4^{2-} \rightarrow 2\text{CO}_2$ (C: +3 → +4, two C) releases 2 e. Total 3 mol electrons per mol $\text{FeC}_2\text{O}_4$. $\text{MnO}_4^-$ accepts 5 e. Moles of $\text{KMnO}_4 = 3/5 = 0.6$. Students who count only the oxalate get 0.4; only the iron, 0.2.`,
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: NUM,
    idealTime: 90,
    q: t`When the equation $\text{Cr}_2\text{O}_7^{2-} + \text{I}^- + \text{H}^+ \rightarrow \text{Cr}^{3+} + \text{I}_2 + \text{H}_2\text{O}$ is balanced with the smallest whole-number coefficients, what is the coefficient of $\text{H}^+$?`,
    answer: 14,
    hint: "Balance electrons first: Cr gains 3 e each, I loses 1 e each.",
    explain: t`Two Cr go from +6 to +3: 6 e gained. Six $\text{I}^-$ lose 6 e to give $3\text{I}_2$. Balance O with $7\text{H}_2\text{O}$ and H with $14\text{H}^+$: $\text{Cr}_2\text{O}_7^{2-} + 6\text{I}^- + 14\text{H}^+ \rightarrow 2\text{Cr}^{3+} + 3\text{I}_2 + 7\text{H}_2\text{O}$. Charge check: $-2 - 6 + 14 = +6 = 2(+3)$.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: MAIN,
    idealTime: 50,
    q: t`In neutral or faintly alkaline solution, permanganate ion oxidises iodide ion to:`,
    options: [t`$\text{I}_2$`, t`$\text{IO}_3^-$`, t`$\text{IO}_4^-$`, t`$\text{I}_3^-$`],
    answer: 1,
    hint: "In acid the product is iodine; in neutral/alkaline solution iodine is oxidised further.",
    explain: t`$2\text{MnO}_4^- + \text{I}^- + \text{H}_2\text{O} \rightarrow 2\text{MnO}_2 + \text{IO}_3^- + 2\text{OH}^-$. Mn goes +7 → +4 (3 e each, 6 e total) and I goes $-1$ → +5 (6 e). $\text{I}_2$ is the product in acidic medium; $\text{IO}_4^-$ (I = +7) is not formed.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 45,
    q: "Which of the following can act both as an oxidising agent and as a reducing agent?",
    options: [t`$\text{H}_2\text{SO}_4$`, t`$\text{HNO}_3$`, t`$\text{SO}_2$`, t`$\text{KMnO}_4$`],
    answer: 2,
    hint: "Look for an element in an intermediate oxidation state.",
    explain: t`S in $\text{SO}_2$ is +4, between its minimum ($-2$) and maximum (+6), so it can be oxidised (to $\text{SO}_4^{2-}$) or reduced (to S). In $\text{H}_2\text{SO}_4$ (S +6), $\text{HNO}_3$ (N +5) and $\text{KMnO}_4$ (Mn +7) the central atom is in its highest state and can only be reduced.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: MAIN,
    idealTime: 50,
    q: t`**Assertion (A):** Sulphuric acid cannot act as a reducing agent.<br>**Reason (R):** Sulphur in $\text{H}_2\text{SO}_4$ is in its highest possible oxidation state, +6.`,
    options: AR_OPTS,
    answer: 0,
    hint: "A reducing agent must itself be oxidised.",
    explain: "To act as a reductant the S atom would have to be oxidised further, which is impossible beyond +6 (its group valence). So A is true and R is exactly the reason. Note that H₂SO₄ can still act as an oxidising agent (e.g. hot concentrated acid with Cu).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: MAIN,
    idealTime: 50,
    q: t`**Statement I:** In $\text{O}_2\text{F}_2$, oxygen has an oxidation number of +1.<br>**Statement II:** Fluorine, the most electronegative element, has an oxidation number of $-1$ in all its compounds.`,
    options: S_OPTS,
    answer: 0,
    explain: t`F is always $-1$ in compounds, so in $\text{O}_2\text{F}_2$: $2x + 2(-1) = 0 \Rightarrow x = +1$. In $\text{OF}_2$ oxygen is +2. These are the exceptions to oxygen's usual $-2$ (others: peroxides $-1$, superoxides $-1/2$).`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: t`Given $E^\circ$: $\text{Mg}^{2+}/\text{Mg} = -2.37$ V, $\text{Zn}^{2+}/\text{Zn} = -0.76$ V, $\text{Cu}^{2+}/\text{Cu} = +0.34$ V, $\text{Ag}^+/\text{Ag} = +0.80$ V. The strongest reducing agent is:`,
    options: ["Mg", "Zn", "Cu", "Ag"],
    answer: 0,
    explain: t`The more negative the reduction potential, the greater the tendency of the metal to lose electrons, i.e. the stronger the reducing agent. Mg ($-2.37$ V) is strongest. $\text{Ag}^+$ (most positive) is the strongest oxidising agent, and Ag metal the weakest reducing agent.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 50,
    q: t`Using $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0.76$ V and $E^\circ(\text{Ag}^+/\text{Ag}) = +0.80$ V, the standard emf of the cell $\text{Zn}\,|\,\text{Zn}^{2+}\,\|\,\text{Ag}^+\,|\,\text{Ag}$ is:`,
    options: ["1.56 V", "0.04 V", "1.10 V", "2.36 V"],
    answer: 0,
    explain: t`$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 0.80 - (-0.76) = 1.56$ V. 0.04 V comes from ignoring the sign of the zinc potential; 2.36 V from wrongly doubling the silver potential because the balanced equation has $2\text{Ag}^+$ (E° is intensive); 1.10 V is the Daniell (Zn–Cu) cell.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: t`Given $E^\circ(\text{Zn}^{2+}/\text{Zn}) = -0.76$ V, $E^\circ(\text{Fe}^{2+}/\text{Fe}) = -0.44$ V, $E^\circ(\text{Cu}^{2+}/\text{Cu}) = +0.34$ V and $E^\circ(\text{Ag}^+/\text{Ag}) = +0.80$ V, which reaction does NOT occur spontaneously?`,
    options: [
      t`$\text{Cu} + 2\text{Ag}^+ \rightarrow \text{Cu}^{2+} + 2\text{Ag}$`,
      t`$\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$`,
      t`$\text{Cu} + \text{Zn}^{2+} \rightarrow \text{Cu}^{2+} + \text{Zn}$`,
      t`$\text{Fe} + \text{Cu}^{2+} \rightarrow \text{Fe}^{2+} + \text{Cu}$`,
    ],
    answer: 2,
    explain: t`A metal displaces the ions of a metal with a higher (more positive) reduction potential. Cu (+0.34) cannot reduce $\text{Zn}^{2+}$ ($-0.76$): $E^\circ = -0.76 - 0.34 = -1.10$ V < 0. The other three have positive cell emf — Zn, Fe and Cu all lie below the metal whose ion they reduce.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: t`In the redox titration of $\text{Fe}^{2+}$ with acidified $\text{K}_2\text{Cr}_2\text{O}_7$, the indicator commonly used is:`,
    options: ["Phenolphthalein", "Diphenylamine", "Starch", "No indicator — the titrant is self-indicating"],
    answer: 1,
    explain: t`Dichromate is orange and $\text{Cr}^{3+}$ green, so the colour change is not sharp; diphenylamine gives an intense blue at the end point. $\text{KMnO}_4$ (not dichromate) is self-indicating. Starch is used in iodometric titrations; phenolphthalein is an acid–base indicator.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "In a Daniell cell, the salt bridge:",
    options: [
      "supplies electrons to the cathode",
      "completes the inner circuit and keeps both half-cell solutions electrically neutral",
      "allows the two solutions to mix freely",
      "acts as the anode",
    ],
    answer: 1,
    explain: t`The salt bridge (e.g. KCl or $\text{KNO}_3$ in agar) lets ions migrate so that charge does not build up in either beaker, completing the circuit without letting the solutions mix. Electrons flow only through the external wire; the anode is the Zn rod.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: t`In the reaction $2\text{H}_2\text{S} + \text{O}_2 \rightarrow 2\text{S} + 2\text{H}_2\text{O}$, according to the classical (hydrogen-removal) concept:`,
    options: [
      t`$\text{H}_2\text{S}$ is oxidised because hydrogen is removed from it`,
      t`$\text{H}_2\text{S}$ is reduced because sulphur is formed`,
      t`$\text{O}_2$ is oxidised because water is formed`,
      "The reaction is not a redox reaction",
    ],
    answer: 0,
    explain: t`Classically, removal of hydrogen from a substance is oxidation and addition of hydrogen is reduction. $\text{H}_2\text{S}$ loses H (oxidised; S goes $-2$ → 0) and $\text{O}_2$ gains H (reduced; O goes 0 → $-2$). The electronic and oxidation-number views agree.`,
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: "Which of the following decomposition reactions is NOT a redox reaction?",
    options: [
      t`$\text{CaCO}_3 \rightarrow \text{CaO} + \text{CO}_2$`,
      t`$2\text{H}_2\text{O} \rightarrow 2\text{H}_2 + \text{O}_2$`,
      t`$2\text{NaH} \rightarrow 2\text{Na} + \text{H}_2$`,
      t`$2\text{KClO}_3 \rightarrow 2\text{KCl} + 3\text{O}_2$`,
    ],
    answer: 0,
    explain: t`In $\text{CaCO}_3 \rightarrow \text{CaO} + \text{CO}_2$, Ca (+2), C (+4) and O ($-2$) keep their oxidation numbers. In the others: H +1 → 0 and O $-2$ → 0 in water; H $-1$ → 0 and Na +1 → 0 in NaH; Cl +5 → $-1$ and O $-2$ → 0 in $\text{KClO}_3$.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ["NEET", "JEE", "KCET", "COMEDK"],
    idealTime: 50,
    q: t`The equivalent mass of $\text{KMnO}_4$ (M = 158 g mol$^{-1}$) when it is reduced in acidic medium is:`,
    options: ["158", "52.7", "31.6", "79"],
    answer: 2,
    hint: "Equivalent mass = molar mass ÷ electrons gained per formula unit.",
    explain: t`In acid, $\text{MnO}_4^- \rightarrow \text{Mn}^{2+}$: 5 e gained, so $E = 158/5 = 31.6$. In neutral/weakly alkaline medium ($\rightarrow \text{MnO}_2$, 3 e) it is 52.7; in strongly alkaline medium ($\rightarrow \text{MnO}_4^{2-}$, 1 e) it is 158.`,
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: NUM,
    idealTime: 100,
    q: t`What volume (in mL) of 0.020 M $\text{KMnO}_4$ is required to oxidise 25.0 mL of 0.10 M oxalic acid in acidic solution?`,
    answer: 50,
    tolerance: 0.5,
    hint: t`$2\text{MnO}_4^- + 5\text{C}_2\text{O}_4^{2-} + 16\text{H}^+ \rightarrow \dots$`,
    explain: t`Moles of oxalic acid $= 0.025 \times 0.10 = 2.5 \times 10^{-3}$. From $2\text{MnO}_4^- + 5\text{H}_2\text{C}_2\text{O}_4 + 6\text{H}^+ \rightarrow 2\text{Mn}^{2+} + 10\text{CO}_2 + 8\text{H}_2\text{O}$, moles $\text{MnO}_4^- = \tfrac25 \times 2.5\times10^{-3} = 1.0 \times 10^{-3}$. $V = 1.0\times10^{-3}/0.020 = 0.050$ L = 50 mL. Using a 1:1 ratio gives 125 mL.`,
  },
  {
    kind: "numeric",
    difficulty: 3,
    exams: ADV,
    idealTime: 120,
    q: t`0.5 mol of hydrazine, $\text{N}_2\text{H}_4$, loses 3 mol of electrons to form a new compound Y in which all the nitrogen atoms are in the same oxidation state. What is the oxidation number of nitrogen in Y?`,
    answer: 1,
    hint: "Find electrons lost per N atom.",
    explain: t`In $\text{N}_2\text{H}_4$, N is $-2$. Electrons lost per mol $\text{N}_2\text{H}_4 = 3/0.5 = 6$, i.e. 3 per N atom. New oxidation number $= -2 + 3 = +1$ (as in $\text{N}_2\text{O}$). Dividing by moles but forgetting there are two N atoms gives +4.`,
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ADV,
    idealTime: 150,
    q: t`The reaction $\text{Cr(OH)}_3 + \text{IO}_3^- \rightarrow \text{CrO}_4^{2-} + \text{I}^-$ is balanced in basic medium. The coefficients of $\text{Cr(OH)}_3$, $\text{IO}_3^-$ and $\text{OH}^-$ respectively are:`,
    options: ["2, 1, 4", "1, 2, 4", "2, 1, 5", "3, 2, 4"],
    answer: 0,
    hint: "Cr: +3 → +6; I: +5 → −1.",
    explain: t`Cr loses 3 e, I gains 6 e, so 2 Cr(OH)₃ per $\text{IO}_3^-$. Then $2\text{Cr(OH)}_3 + \text{IO}_3^- + 4\text{OH}^- \rightarrow 2\text{CrO}_4^{2-} + \text{I}^- + 5\text{H}_2\text{O}$. Checks — O: 6 + 3 + 4 = 13 = 8 + 5; H: 6 + 4 = 10 = 10; charge: $-1 - 4 = -5 = -4 - 1$.`,
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    q: "Which of the following is/are disproportionation reactions?",
    options: [
      t`$\text{Cl}_2 + 2\text{OH}^- \rightarrow \text{Cl}^- + \text{ClO}^- + \text{H}_2\text{O}$`,
      t`$3\text{ClO}^- \rightarrow 2\text{Cl}^- + \text{ClO}_3^-$`,
      t`$4\text{ClO}_3^- \rightarrow 3\text{ClO}_4^- + \text{Cl}^-$`,
      t`$2\text{F}_2 + 2\text{OH}^- \rightarrow 2\text{F}^- + \text{OF}_2 + \text{H}_2\text{O}$`,
    ],
    answers: [0, 1, 2],
    hint: "In each case, is the same element both oxidised and reduced?",
    explain: t`(A) Cl: 0 → $-1$ and +1. (B) Cl: +1 → $-1$ and +5. (C) Cl: +5 → +7 and $-1$. All three are disproportionations. (D) F (0) is only reduced to $-1$ (in both $\text{F}^-$ and $\text{OF}_2$) while oxygen ($-2$ → +2) is oxidised — two different elements, so not disproportionation. Fluorine, the most electronegative element, cannot show a positive state, so it never disproportionates.`,
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    q: t`For the self-reduction step in copper extraction, $2\text{Cu}_2\text{O} + \text{Cu}_2\text{S} \rightarrow 6\text{Cu} + \text{SO}_2$, which statement(s) is/are correct?`,
    options: [
      "Copper is reduced from +1 to 0",
      "Sulphur changes from −2 to +4",
      t`$\text{Cu}_2\text{O}$ acts as the reducing agent`,
      t`Six moles of electrons are transferred per mole of $\text{SO}_2$ formed`,
    ],
    answers: [0, 1, 3],
    hint: "Track every element; oxygen's state does not change.",
    explain: t`All six Cu go from +1 to 0 (6 e gained); S goes from $-2$ to +4 (6 e lost) — so 6 mol electrons per mol $\text{SO}_2$. $\text{Cu}_2\text{O}$ only contains reducible Cu (O stays $-2$), so it is an oxidising agent, not a reducing agent. $\text{Cu}_2\text{S}$ is both oxidant (its Cu) and reductant (its S).`,
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    q: "In which of the following does the element named have an oxidation number of +5?",
    options: [
      t`N in $\text{N}_2\text{O}_5$`,
      t`Cr in $\text{CrO}_5$`,
      t`P in $\text{H}_4\text{P}_2\text{O}_7$`,
      t`S in $\text{H}_2\text{SO}_5$`,
    ],
    answers: [0, 2],
    hint: t`Two of these contain peroxide oxygen.`,
    explain: t`$\text{N}_2\text{O}_5$: $2x = 10$, x = +5. $\text{H}_4\text{P}_2\text{O}_7$: $4 + 2x - 14 = 0$, x = +5. $\text{CrO}_5$ has two peroxide groups (butterfly structure): $x + 4(-1) + (-2) = 0$, x = +6 (not +10). $\text{H}_2\text{SO}_5$ (Caro's acid) has one peroxide group: $2 + x - 6 - 2 = 0$, x = +6 (not +8).`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 75,
    q: t`Match the species in Column I with the oxidation number of the element named in Column II.<br>Column I: (P) S in $\text{S}_8$ (Q) O in $\text{KO}_2$ (R) O in $\text{BaO}_2$ (S) Os in $\text{OsO}_4$<br>Column II: (i) +8 (ii) −1 (iii) 0 (iv) −1/2`,
    options: [
      "P–iii, Q–iv, R–ii, S–i",
      "P–iii, Q–ii, R–iv, S–i",
      "P–iv, Q–iii, R–ii, S–i",
      "P–iii, Q–iv, R–i, S–ii",
    ],
    answer: 0,
    hint: "Superoxide is O₂⁻, peroxide is O₂²⁻.",
    explain: t`Elements in the free state are 0 ($\text{S}_8$). $\text{KO}_2$ is a superoxide ($\text{O}_2^-$): O = $-1/2$. $\text{BaO}_2$ is a peroxide ($\text{O}_2^{2-}$): O = $-1$. In $\text{OsO}_4$, $x = +8$, the highest oxidation state known. Swapping the peroxide and superoxide values is the usual slip.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: MAIN,
    idealTime: 60,
    q: t`**Assertion (A):** Hydrochloric acid is not used to acidify the solution when $\text{Fe}^{2+}$ is titrated against $\text{KMnO}_4$.<br>**Reason (R):** $\text{KMnO}_4$ oxidises $\text{Cl}^-$ ions to $\text{Cl}_2$, so extra permanganate is consumed.`,
    options: AR_OPTS,
    answer: 0,
    explain: t`$E^\circ(\text{MnO}_4^-/\text{Mn}^{2+}) = 1.51$ V exceeds $E^\circ(\text{Cl}_2/\text{Cl}^-) = 1.36$ V, so permanganate oxidises chloride, giving a falsely high titre. Dilute $\text{H}_2\text{SO}_4$ is used instead. Both statements are true and R explains A.`,
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ADV,
    idealTime: 120,
    q: t`White phosphorus reacts with hot aqueous NaOH: $\text{P}_4 + 3\text{OH}^- + 3\text{H}_2\text{O} \rightarrow \text{PH}_3 + 3\text{H}_2\text{PO}_2^-$. The ratio of P atoms oxidised to P atoms reduced is:`,
    options: ["1 : 3", "3 : 1", "1 : 1", "2 : 1"],
    answer: 1,
    hint: t`Oxidation numbers: P in $\text{PH}_3$ and in $\text{H}_2\text{PO}_2^-$.`,
    explain: t`P in $\text{P}_4$ is 0. In $\text{PH}_3$, P is $-3$ (reduced; 1 atom). In $\text{H}_2\text{PO}_2^-$: $2(+1) + x + 2(-2) = -1 \Rightarrow x = +1$ (oxidised; 3 atoms). Ratio oxidised : reduced = 3 : 1. Electron check: 3 × 1 lost = 1 × 3 gained. 1 : 3 is the reversed ratio.`,
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: NUM,
    idealTime: 90,
    q: t`What mass (in g) of $\text{K}_2\text{Cr}_2\text{O}_7$ (M = 294 g mol$^{-1}$) is needed to oxidise 0.60 mol of $\text{Fe}^{2+}$ to $\text{Fe}^{3+}$ in acidic solution?`,
    answer: 29.4,
    tolerance: 0.1,
    hint: t`One $\text{Cr}_2\text{O}_7^{2-}$ accepts 6 electrons.`,
    explain: t`$\text{Cr}_2\text{O}_7^{2-} + 6\text{Fe}^{2+} + 14\text{H}^+ \rightarrow 2\text{Cr}^{3+} + 6\text{Fe}^{3+} + 7\text{H}_2\text{O}$. Moles dichromate $= 0.60/6 = 0.10$; mass $= 0.10 \times 294 = 29.4$ g. Taking 3 e per dichromate (one Cr only) doubles the answer to 58.8 g.`,
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    q: t`Given $E^\circ(\text{Fe}^{3+}/\text{Fe}^{2+}) = +0.77$ V, $E^\circ(\text{I}_2/\text{I}^-) = +0.54$ V and $E^\circ(\text{Br}_2/\text{Br}^-) = +1.09$ V. Which statement is correct?`,
    options: [
      t`$\text{Fe}^{3+}$ oxidises both $\text{I}^-$ and $\text{Br}^-$`,
      t`$\text{Fe}^{3+}$ oxidises $\text{I}^-$ but not $\text{Br}^-$`,
      t`$\text{Fe}^{3+}$ oxidises $\text{Br}^-$ but not $\text{I}^-$`,
      t`$\text{I}_2$ oxidises $\text{Fe}^{2+}$ to $\text{Fe}^{3+}$`,
    ],
    answer: 1,
    hint: "An oxidant can oxidise the reduced form of any couple with a lower E°.",
    explain: t`$\text{Fe}^{3+} + \text{I}^-$: $E^\circ = 0.77 - 0.54 = +0.23$ V (spontaneous). $\text{Fe}^{3+} + \text{Br}^-$: $0.77 - 1.09 = -0.32$ V (not spontaneous; instead $\text{Br}_2$ oxidises $\text{Fe}^{2+}$). $\text{I}_2$ + $\text{Fe}^{2+}$: $0.54 - 0.77 < 0$, so it does not occur.`,
  },
];

/* ================================================================== */
/* Chapter 8 — Organic Chemistry – Some Basic Principles and Techniques */
/* ================================================================== */
const goc: Raw[] = [];

/* ================================================================== */
/* Chapter 9 — Hydrocarbons                                            */
/* ================================================================== */
const hydrocarbons: Raw[] = [];

export const questions: ExamQuestion[] = [
  ...chapter("07", "Redox Reactions", redox),
  ...chapter("08", "Organic Chemistry – Some Basic Principles and Techniques", goc),
  ...chapter("09", "Hydrocarbons", hydrocarbons),
];

export const formulas: FormulaSheet[] = [];
