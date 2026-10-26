import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 12 Chemistry bank 2: The d- and f-Block Elements, Coordination Compounds,
 * Haloalkanes and Haloarenes. Original exam-style questions (JEE Main / Advanced, NEET, KCET, COMEDK).
 * `answer` is the 0-based option index (mcq) or the value (numeric).
 */

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

type Draft<T = ExamQuestion> = T extends unknown ? Omit<T, "id" | "subject" | "chapter" | "grade"> : never;

const ALL: ExamId[] = ["NEET", "JEE", "KCET", "COMEDK"];
const MAIN: ExamId[] = ["NEET", "JEE", "COMEDK"];
const ADV: ExamId[] = ["JEE", "JEE_ADV"];
const MULTI: ExamId[] = ["JEE_ADV"];

const build = (chapter: string, no: string, list: Draft[]): ExamQuestion[] =>
  list.map(
    (q, i) =>
      ({
        ...q,
        id: `che12-2-${no}-${String(i + 1).padStart(3, "0")}`,
        subject: "chemistry",
        chapter,
        grade: "12",
      }) as ExamQuestion,
  );

/* ================================================================== */
/* Chapter 4: The d- and f-Block Elements                              */
/* ================================================================== */
const dBlock: Draft[] = [
  /* ---------- difficulty 1 ---------- */
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "The ground-state electronic configuration of chromium (Z = 24) is:",
    options: ["[Ar] 3d⁴ 4s²", "[Ar] 3d⁵ 4s¹", "[Ar] 3d⁶", "[Ar] 3d⁵ 4s²"],
    answer: 1,
    explain:
      "Cr is an exception to the Aufbau order: one 4s electron moves into 3d so that both sub-shells are half-filled ($3d^5\\,4s^1$), which gives extra exchange-energy stabilisation. [Ar] 3d⁴ 4s² is what the plain Aufbau order predicts; [Ar] 3d⁵ 4s² has 25 electrons (that is Mn).",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: "A transition element is one that has an incompletely filled d sub-shell in its atom or in any of its common oxidation states. By this definition, which of the following is NOT a transition element?",
    options: ["Sc", "Cu", "Zn", "Ag"],
    answer: 2,
    explain:
      "Zn is $3d^{10}4s^2$ and its only common ion Zn²⁺ is $3d^{10}$, so the d sub-shell is never incomplete. Sc³⁺ is d⁰ but the Sc atom is $3d^1$; Cu²⁺ is $3d^9$; Ag forms Ag²⁺ ($4d^9$, e.g. in AgF₂). So Sc, Cu and Ag all qualify.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "The highest oxidation state shown by manganese (Z = 25) in its compounds is:",
    options: ["+4", "+6", "+7", "+8"],
    answer: 2,
    explain:
      "Mn has seven electrons beyond the argon core ($3d^5\\,4s^2$). Using all of them gives +7, as in KMnO₄ and Mn₂O₇. +6 occurs in manganate (K₂MnO₄) and +4 in MnO₂, but these are not the highest. +8 would need a core electron (it is seen for Os and Ru, not Mn).",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 30,
    q: "The most common and characteristic oxidation state of the lanthanoids is:",
    options: ["+2", "+3", "+4", "+5"],
    answer: 1,
    explain:
      "All lanthanoids show +3 (loss of the two 6s electrons and one 5d/4f electron). +2 (Eu, Yb, Sm) and +4 (Ce, Tb, Pr) appear only for a few elements, mostly where an f⁰, f⁷ or f¹⁴ configuration results.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "Because of the lanthanoid contraction, which pair of elements has almost identical atomic radii?",
    options: ["Ti and Zr", "Zr and Hf", "Sc and Y", "Cr and Mo"],
    answer: 1,
    explain:
      "Between Zr (4d) and Hf (5d) the fourteen 4f electrons are added. They shield poorly, so the expected size increase from 4d to 5d is cancelled: Zr ≈ 160 pm, Hf ≈ 159 pm. Ti→Zr, Sc→Y and Cr→Mo are 3d→4d steps with no f-filling in between, so the radius clearly increases.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "Which of the following ions is colourless in aqueous solution?",
    options: ["Ti³⁺", "V³⁺", "Sc³⁺", "Cr³⁺"],
    answer: 2,
    explain:
      "Colour in these aqua ions comes from d–d transitions, which need at least one d electron and a vacancy. Sc³⁺ is $3d^0$, so no d–d transition is possible and it is colourless. Ti³⁺ (d¹) is purple, V³⁺ (d²) green and Cr³⁺ (d³) violet.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: "Interstitial compounds such as TiC, Mn₄N and Fe₃H are formed when small atoms occupy voids in a metal lattice. Which statement about them is NOT correct?",
    options: [
      "Their melting points are higher than those of the pure metals",
      "They are very hard",
      "They retain metallic conductivity",
      "They are softer and more ductile than the parent metals",
    ],
    answer: 3,
    explain:
      "Small atoms (H, B, C, N) trapped in the voids lock the metal layers in place, so interstitial compounds are harder and more brittle, not softer. They do have high melting points, are very hard (some borides approach diamond), keep metallic conductivity and are chemically fairly inert.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 50,
    q: "Which pairing of industrial process and catalyst is INCORRECT?",
    options: [
      "Contact process (SO₂ → SO₃): V₂O₅",
      "Haber process (NH₃): finely divided Fe",
      "Ziegler–Natta polymerisation of ethene: TiCl₄ with Al(CH₃)₃",
      "Hydrogenation of vegetable oils: V₂O₅",
    ],
    answer: 3,
    explain:
      "Vegetable oils are hydrogenated over finely divided nickel, not V₂O₅. The other three pairings are correct: V₂O₅ in the contact process, iron (promoted by Mo/K₂O, Al₂O₃) in the Haber process and TiCl₄ with a trialkylaluminium in Ziegler–Natta polymerisation.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "Mischmetal (about 95% lanthanoid metals, 5% iron and traces of S, C, Ca, Al) is mainly used in:",
    options: [
      "Making lighter flints and Mg-based alloys for bullets and shells",
      "Galvanising iron sheets",
      "Electrical wiring",
      "Making stainless steel cutlery",
    ],
    answer: 0,
    explain:
      "Mischmetal sparks when struck, so it is used in lighter flints; alloyed with magnesium it is used in bullets, shells and tracer ammunition. Galvanising uses zinc, wiring uses copper and stainless steel is Fe–Cr–Ni.",
  },
  {
    kind: "numeric",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "How many unpaired electrons are present in the Fe³⁺ ion (Fe, Z = 26)?",
    answer: 5,
    explain:
      "Fe is [Ar] $3d^6 4s^2$. Removing the two 4s electrons and one 3d electron gives Fe³⁺ = [Ar] $3d^5$. By Hund's rule the five d electrons occupy the five d orbitals singly, so there are 5 unpaired electrons.",
  },
  {
    kind: "numeric",
    difficulty: 1,
    exams: ALL,
    idealTime: 50,
    q: "Calculate the spin-only magnetic moment of Mn²⁺ (Z = 25) in Bohr magnetons (BM). Give the answer to two decimal places.",
    answer: 5.92,
    tolerance: 0.03,
    unit: "BM",
    explain:
      "Mn²⁺ is $3d^5$ with $n = 5$ unpaired electrons. $\\mu = \\sqrt{n(n+2)} = \\sqrt{5 \\times 7} = \\sqrt{35} \\approx 5.92$ BM.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: "When dilute acid is added to a yellow solution of potassium chromate, the solution turns orange. This is because:",
    options: [
      "Cr is oxidised from +6 to +7",
      "Chromate is converted to dichromate; Cr stays in the +6 state",
      "Cr is reduced from +6 to +3",
      "Chromium(III) hydroxide precipitates",
    ],
    answer: 1,
    explain:
      "$2\\text{CrO}_4^{2-} + 2\\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} + \\text{H}_2\\text{O}$. This is an acid–base (condensation) equilibrium, not a redox change: Cr is +6 in both ions. Adding alkali reverses it. Cr³⁺ is green, and +7 does not exist for Cr.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "Among the 3d series, which metal has the lowest enthalpy of atomisation (and the lowest melting point)?",
    options: ["Mn", "Cu", "Zn", "Sc"],
    answer: 2,
    explain:
      "Metallic bonding in transition metals is strengthened by unpaired d electrons. Zn ($3d^{10}4s^2$) has no unpaired d electrons, so its metallic bonding is weakest: ΔₐH ≈ 126 kJ mol⁻¹, m.p. 419 °C. Mn is anomalously low compared to its neighbours, but still far above Zn.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "Which of the following ions is diamagnetic?",
    options: ["Cu²⁺", "Cu⁺", "Fe²⁺", "Ni²⁺"],
    answer: 1,
    explain:
      "Cu⁺ is $3d^{10}$: all electrons are paired, so it is diamagnetic (and its simple salts are colourless). Cu²⁺ is d⁹ (1 unpaired), Fe²⁺ is d⁶ (4 unpaired) and Ni²⁺ is d⁸ (2 unpaired).",
  },

  /* ---------- difficulty 2 ---------- */
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "What is the d-electron count of Mn in MnO₄⁻?",
    q: "The intense purple colour of KMnO₄ is due to:",
    options: [
      "d–d transitions of the Mn(VII) ion",
      "Ligand-to-metal charge transfer (O → Mn)",
      "The presence of unpaired electrons on Mn",
      "Metal-to-ligand charge transfer (Mn → O)",
    ],
    answer: 1,
    explain:
      "Mn in MnO₄⁻ is +7, i.e. $3d^0$: there are no d electrons, so no d–d transition and no unpaired electrons. The colour arises from charge transfer, in which an electron moves from an oxygen-based orbital to an empty Mn d orbital (LMCT). MLCT would need electrons on the metal, which Mn(VII) does not have.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "E° depends on atomisation, ionisation and hydration enthalpies together.",
    q: "Copper is the only 3d metal with a positive $E^\\circ(\\text{M}^{2+}/\\text{M})$ (+0.34 V). The best explanation is that:",
    options: [
      "Cu²⁺ has a d⁹ configuration",
      "The high enthalpy of atomisation plus ionisation of Cu is not balanced by the hydration enthalpy of Cu²⁺",
      "Cu has the lowest first ionisation enthalpy in the series",
      "Cu²⁺ has the most negative hydration enthalpy in the series",
    ],
    answer: 1,
    explain:
      "To form Cu²⁺(aq) from Cu(s) you pay ΔₐH + IE₁ + IE₂, and you get back ΔhydH. For Cu the cost is high (strong metallic bonding and a high IE₂) and the hydration enthalpy does not cover it, so the overall change is unfavourable and E° is positive. The d⁹ configuration alone explains nothing, and Cu does not have the lowest IE₁ or the most negative ΔhydH (Ni²⁺ does).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    hint: "Look for the ion that becomes a half-filled d⁵ on gaining an electron.",
    q: "Which of the following is the strongest oxidising agent in aqueous solution?",
    options: ["Mn³⁺", "Cr³⁺", "V³⁺", "Ti³⁺"],
    answer: 0,
    explain:
      "$E^\\circ(\\text{Mn}^{3+}/\\text{Mn}^{2+}) = +1.57$ V. Mn³⁺ (d⁴) gains an electron to become the very stable half-filled Mn²⁺ (d⁵). For Cr, V and Ti the M³⁺/M²⁺ potentials are negative (−0.41, −0.26, −0.37 V), so their M³⁺ ions are not good oxidants; Cr³⁺ (t₂g³) is especially stable.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "Assertion (A): Zinc salts are white. Reason (R): Zn²⁺ has a completely filled 3d sub-shell.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    explain:
      "Zn²⁺ is $3d^{10}$. A d–d transition needs a vacancy in the d set, and there is none, so no visible light is absorbed and the salts are white. R is true and is exactly why A holds.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Both ions are d⁴; ask where each would rather go.",
    q: "Statement I: Cr²⁺ is a reducing agent. Statement II: Mn³⁺ is an oxidising agent, although both Cr²⁺ and Mn³⁺ have a d⁴ configuration.",
    options: [
      "Both Statement I and Statement II are correct",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Both Statement I and Statement II are incorrect",
    ],
    answer: 0,
    explain:
      "Cr²⁺ (d⁴) loses an electron to become Cr³⁺ (d³, half-filled t₂g, very stable), so it is a reducing agent ($E^\\circ_{\\text{Cr}^{3+}/\\text{Cr}^{2+}} = -0.41$ V). Mn³⁺ (d⁴) gains an electron to become Mn²⁺ (d⁵, half-filled d), so it is an oxidising agent (+1.57 V). Both statements are correct.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "In a neutral or faintly alkaline medium, KMnO₄ oxidises iodide ions to:",
    options: ["I₂", "IO₃⁻", "IO₄⁻", "I₃⁻"],
    answer: 1,
    explain:
      "In neutral / faintly alkaline solution: $2\\text{MnO}_4^- + \\text{H}_2\\text{O} + \\text{I}^- \\rightarrow 2\\text{MnO}_2 + 2\\text{OH}^- + \\text{IO}_3^-$. Permanganate (→ MnO₂, a 3-electron change) oxidises I⁻ all the way to iodate. In acidic medium, by contrast, iodide is oxidised to I₂.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Write the disproportionation of MnO₄²⁻ and balance the electrons.",
    q: "Green potassium manganate disproportionates in neutral or acidic solution. The mole ratio of MnO₄⁻ to MnO₂ formed is:",
    options: ["1 : 1", "2 : 1", "1 : 2", "3 : 1"],
    answer: 1,
    explain:
      "$3\\text{MnO}_4^{2-} + 4\\text{H}^+ \\rightarrow 2\\text{MnO}_4^- + \\text{MnO}_2 + 2\\text{H}_2\\text{O}$. Two Mn(VI) each lose 1 e⁻ (→ +7) and one Mn(VI) gains 2 e⁻ (→ +4), so electrons balance with MnO₄⁻ : MnO₂ = 2 : 1.",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 90,
    hint: "Balance Fe, Cr, Na and C first, then count oxygen.",
    q: "Sodium chromate is made by fusing chromite ore with sodium carbonate in air: $a\\,\\text{FeCr}_2\\text{O}_4 + 8\\,\\text{Na}_2\\text{CO}_3 + b\\,\\text{O}_2 \\rightarrow 8\\,\\text{Na}_2\\text{CrO}_4 + c\\,\\text{Fe}_2\\text{O}_3 + 8\\,\\text{CO}_2$. What is the value of $b$?",
    answer: 7,
    explain:
      "Cr: 8 Na₂CrO₄ needs 8 Cr, so $a = 4$ FeCr₂O₄. Fe: 4 Fe gives $c = 2$ Fe₂O₃. Oxygen on the right: $8(4) + 2(3) + 8(2) = 32 + 6 + 16 = 54$. On the left: $4(4) + 8(3) + 2b = 40 + 2b$. So $2b = 14$, $b = 7$.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "Which ion has a spin-only magnetic moment of 3.87 BM?",
    options: ["Cr³⁺", "Ti³⁺", "Fe²⁺", "Ni²⁺"],
    answer: 0,
    explain:
      "$\\sqrt{n(n+2)} = 3.87$ gives $n = 3$ ($\\sqrt{15}$). Cr³⁺ is d³ with 3 unpaired electrons. Ti³⁺ (d¹) gives 1.73 BM, Fe²⁺ (d⁶, 4 unpaired) 4.90 BM and Ni²⁺ (d⁸, 2 unpaired) 2.83 BM.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 70,
    q: "Match the aqua ion with its colour. Column I: (a) Ti³⁺ (b) V⁴⁺ (c) Mn²⁺ (d) Ni²⁺. Column II: (i) green (ii) pale pink (iii) purple (iv) blue.",
    options: [
      "a-iii, b-iv, c-ii, d-i",
      "a-iv, b-iii, c-ii, d-i",
      "a-iii, b-i, c-ii, d-iv",
      "a-ii, b-iv, c-iii, d-i",
    ],
    answer: 0,
    explain:
      "Ti³⁺ (d¹) is purple, V⁴⁺ (VO²⁺, d¹) is blue, Mn²⁺ (d⁵, spin-forbidden transitions, so very weak) is pale pink and Ni²⁺ (d⁸) is green.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 45,
    hint: "Smaller M³⁺ holds OH⁻ more covalently.",
    q: "Which lanthanoid hydroxide is the most basic?",
    options: ["La(OH)₃", "Gd(OH)₃", "Yb(OH)₃", "Lu(OH)₃"],
    answer: 0,
    explain:
      "Across the series the M³⁺ radius shrinks (lanthanoid contraction), so the M–OH bond becomes more covalent and the hydroxides become less basic. La³⁺ is the largest, so La(OH)₃ is the most basic and Lu(OH)₃ the least.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    hint: "A half-filled 4f sub-shell is especially stable.",
    q: "The ground-state electronic configuration of gadolinium (Z = 64) is:",
    options: ["[Xe] 4f⁸ 6s²", "[Xe] 4f⁷ 5d¹ 6s²", "[Xe] 4f⁷ 6s² 6p¹", "[Xe] 4f⁸ 5d¹ 6s¹"],
    answer: 1,
    explain:
      "Gd keeps a half-filled 4f⁷ sub-shell and puts the extra electron in 5d: [Xe] $4f^7 5d^1 6s^2$. [Xe] 4f⁸ 6s² is the pattern of most neighbours (e.g. Tb is 4f⁹ 6s²) but is less stable here. 6p is far higher in energy, and 4f⁸ 5d¹ 6s¹ has 65 electrons.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    q: "Which statement about lanthanoid ions is INCORRECT?",
    options: [
      "Eu²⁺ (4f⁷) is a strong reducing agent",
      "Yb²⁺ (4f¹⁴) tends to change to Yb³⁺",
      "Ce⁴⁺ is a good reducing agent",
      "Ce⁴⁺ has the noble-gas configuration [Xe]",
    ],
    answer: 2,
    explain:
      "Ce⁴⁺ (f⁰) is a strong oxidising agent ($E^\\circ_{\\text{Ce}^{4+}/\\text{Ce}^{3+}} \\approx +1.74$ V); it reverts to the common +3 state by gaining an electron, so calling it a reducing agent is wrong. Eu²⁺ and Yb²⁺ are reducing agents because they go to the common +3 state, and Ce⁴⁺ is indeed [Xe].",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 45,
    hint: "Acidity of an oxide rises with the oxidation state of the metal.",
    q: "Which oxide of chromium is amphoteric?",
    options: ["CrO", "Cr₂O₃", "CrO₃", "None of them"],
    answer: 1,
    explain:
      "For one metal, the lower oxide is basic and the highest is acidic. CrO (+2) is basic, Cr₂O₃ (+3) is amphoteric (dissolves in acids and in alkalis) and CrO₃ (+6) is acidic (it gives chromic acid).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    q: "Assertion (A): The highest fluoride of manganese is MnF₄, whereas its highest oxide is Mn₂O₇. Reason (R): Oxygen can form multiple bonds with the metal.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    explain:
      "In Mn₂O₇ each Mn is bonded to oxygens through Mn=O double bonds (plus one Mn–O–Mn bridge), so a few O atoms can satisfy a +7 metal. Fluorine forms only single bonds, and fitting seven F atoms around Mn is not possible, so the highest fluoride is MnF₄. Oxygen's ability to form multiple bonds is the reason.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Compare the hydration enthalpies of a +1 and a +2 ion.",
    q: "Cu⁺ disproportionates in aqueous solution ($2\\text{Cu}^+ \\rightarrow \\text{Cu}^{2+} + \\text{Cu}$). This happens mainly because:",
    options: [
      "Cu⁺ has an unstable d¹⁰ configuration",
      "The much more negative hydration enthalpy of Cu²⁺ more than compensates for the second ionisation enthalpy of Cu",
      "Cu²⁺ has a half-filled d sub-shell",
      "Cu metal is a strong reducing agent",
    ],
    answer: 1,
    explain:
      "Cu⁺ (d¹⁰) is stable in the gas phase, but Cu²⁺ is smaller and doubly charged, so its hydration enthalpy is far more negative. In water this outweighs IE₂ and makes Cu²⁺(aq) + Cu(s) favourable. d¹⁰ is not unstable, Cu²⁺ is d⁹ (not half-filled), and Cu has a positive E°, so it is not a strong reductant.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "When KI solution is added to a solution of copper(II) sulphate, the products are:",
    options: ["CuI₂ only", "CuI and I₂", "Cu and I₂", "CuI₂ and I₂"],
    answer: 1,
    explain:
      "$2\\text{Cu}^{2+} + 4\\text{I}^- \\rightarrow \\text{Cu}_2\\text{I}_2 + \\text{I}_2$. Iodide is a good reducing agent and CuI is very insoluble, so Cu²⁺ is reduced to Cu(I) and I⁻ is oxidised to I₂. CuI₂ does not exist.",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 120,
    hint: "MnO₄⁻ gains 5 e⁻; each oxalate gives 2 e⁻.",
    q: "What mass (in g) of oxalic acid dihydrate, H₂C₂O₄·2H₂O (M = 126 g mol⁻¹), is oxidised by 20.0 mL of 0.0200 M KMnO₄ in acidic solution? Give the answer to three decimal places.",
    answer: 0.126,
    tolerance: 0.002,
    unit: "g",
    explain:
      "$2\\text{MnO}_4^- + 5\\text{C}_2\\text{O}_4^{2-} + 16\\text{H}^+ \\rightarrow 2\\text{Mn}^{2+} + 10\\text{CO}_2 + 8\\text{H}_2\\text{O}$. Moles of MnO₄⁻ $= 0.0200 \\times 0.0200 = 4.00 \\times 10^{-4}$. Moles of oxalic acid $= \\tfrac52 \\times 4.00\\times10^{-4} = 1.00 \\times 10^{-3}$. Mass $= 1.00\\times10^{-3} \\times 126 = 0.126$ g. (Using a 1 : 1 ratio gives 0.0504 g, a common slip.)",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 70,
    hint: "4.90 BM means 4 unpaired electrons: d⁴ or d⁶.",
    q: "A divalent ion M²⁺ of a 3d metal has a spin-only magnetic moment of 4.90 BM, and the M²⁺ ion has more than five d electrons. The metal M is:",
    options: ["Cr", "Mn", "Fe", "Co"],
    answer: 2,
    explain:
      "$\\sqrt{n(n+2)} = 4.90$ gives $n = 4$. A high-spin d⁴ or d⁶ ion has 4 unpaired electrons. With more than five d electrons it must be d⁶, i.e. Fe²⁺ (Z = 26). Cr²⁺ is d⁴ (also 4.90 BM but fewer than five d electrons), Mn²⁺ is d⁵ (5.92 BM) and Co²⁺ is d⁷ (3.87 BM).",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 80,
    hint: "Check for a d–d transition or a charge-transfer band.",
    q: "How many of the following species are coloured in aqueous solution? Sc³⁺, Ti⁴⁺, V³⁺, Cu⁺, Zn²⁺, Ni²⁺, Fe³⁺, MnO₄⁻",
    answer: 4,
    explain:
      "Coloured: V³⁺ (d², green), Ni²⁺ (d⁸, green), Fe³⁺ (d⁵, yellow) and MnO₄⁻ (charge transfer, purple), so 4. Colourless: Sc³⁺ and Ti⁴⁺ (d⁰, no charge-transfer band in the visible region for the aqua ions) and Cu⁺ and Zn²⁺ (d¹⁰).",
  },

  /* ---------- difficulty 3 ---------- */
  {
    kind: "mcq",
    difficulty: 3,
    exams: ["JEE", "JEE_ADV", "NEET"],
    idealTime: 90,
    hint: "Peroxide oxygen counts as −1.",
    q: "Acidified K₂Cr₂O₇ shaken with H₂O₂ and ether gives a blue colour in the ether layer due to CrO₅. The oxidation state of Cr and the number of peroxide (O–O) linkages in CrO₅ are respectively:",
    options: ["+10 and 0", "+6 and 2", "+6 and 1", "+8 and 1"],
    answer: 1,
    explain:
      "CrO₅ has one Cr=O oxygen and two η²-peroxo (O₂²⁻) groups (a 'butterfly' structure). Oxidation state: $x + (-2) + 2(-2) = 0$, so $x = +6$. Treating all five O as −2 gives the impossible +10; one peroxide gives +8, which Cr cannot reach.",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ADV,
    idealTime: 100,
    hint: "Ask which M²⁺ ions are extra-stable (d⁵) and which M³⁺ ions are extra-stable (t₂g³).",
    q: "Which order of standard electrode potentials $E^\\circ(\\text{M}^{3+}/\\text{M}^{2+})$ is correct?",
    options: ["Co > Mn > Fe > Cr", "Mn > Co > Fe > Cr", "Co > Fe > Mn > Cr", "Mn > Fe > Co > Cr"],
    answer: 0,
    explain:
      "Values: Co +1.97 V, Mn +1.57 V, Fe +0.77 V, Cr −0.41 V. Co³⁺ (d⁶) is a very strong oxidant in water; Mn³⁺ is strongly oxidising because Mn²⁺ is d⁵; Fe³⁺ is moderate (Fe³⁺ is itself d⁵, which lowers the value); Cr³⁺ (t₂g³) is so stable that Cr²⁺ is a reductant. Students who remember only the 'Mn³⁺ is special' idea pick Mn > Co.",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ADV,
    idealTime: 100,
    q: "Consider the statements about $E^\\circ(\\text{M}^{2+}/\\text{M})$ values in the 3d series. I: The value for Mn is more negative than the trend predicts because Mn²⁺ is d⁵. II: The value for Zn is more negative than the trend predicts because Zn²⁺ is d¹⁰. III: The value for Ni is more negative than expected because Ni²⁺ has the most negative hydration enthalpy. IV: The value for Cu is positive because Cu²⁺ has a half-filled configuration. The correct statements are:",
    options: ["I, II and III", "I and IV", "II, III and IV", "I, II, III and IV"],
    answer: 0,
    explain:
      "I, II and III are the standard explanations: the stability of Mn²⁺ (d⁵) and Zn²⁺ (d¹⁰), and the large negative ΔhydH of Ni²⁺, make those values more negative. IV is wrong: Cu²⁺ is d⁹, and the positive E° comes from the high ΔₐH + IE₂ of Cu not being balanced by hydration.",
  },
  {
    kind: "numeric",
    difficulty: 3,
    exams: ["JEE", "JEE_ADV", "NEET"],
    idealTime: 150,
    hint: "Both Fe²⁺ and C₂O₄²⁻ are oxidised.",
    q: "How many moles of KMnO₄ are needed to completely oxidise 1 mole of ferrous oxalate (FeC₂O₄) in acidic medium?",
    answer: 0.6,
    tolerance: 0.01,
    unit: "mol",
    explain:
      "Fe²⁺ → Fe³⁺ gives 1 e⁻ and C₂O₄²⁻ → 2CO₂ gives 2 e⁻, so 1 mol FeC₂O₄ supplies 3 mol e⁻. In acid, MnO₄⁻ → Mn²⁺ takes 5 e⁻. Moles of KMnO₄ $= 3/5 = 0.6$. Forgetting the Fe²⁺ gives 0.4; forgetting oxalate gives 0.2.",
  },
  {
    kind: "numeric",
    difficulty: 3,
    exams: ADV,
    idealTime: 120,
    hint: "Write the 4fⁿ count of each ion.",
    q: "How many of the following ions are diamagnetic? La³⁺, Ce⁴⁺, Ce³⁺, Eu²⁺, Gd³⁺, Yb²⁺, Lu³⁺",
    answer: 4,
    explain:
      "La³⁺ (4f⁰), Ce⁴⁺ (4f⁰), Yb²⁺ (4f¹⁴) and Lu³⁺ (4f¹⁴) have no unpaired electrons, so 4 are diamagnetic. Ce³⁺ (4f¹), Eu²⁺ (4f⁷) and Gd³⁺ (4f⁷) are paramagnetic.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    hint: "Count d electrons in Mn(VII) and Mn(VI).",
    q: "Which of the following statements is/are correct?",
    options: [
      "The permanganate ion is tetrahedral and diamagnetic",
      "The manganate ion is green and paramagnetic with one unpaired electron",
      "In acidic medium the equivalent mass of KMnO₄ is one-third of its molar mass",
      "π bonding in MnO₄⁻ involves overlap of oxygen p orbitals with manganese d orbitals",
    ],
    answers: [0, 1, 3],
    explain:
      "MnO₄⁻ is Mn(VII), d⁰: tetrahedral and diamagnetic (A). MnO₄²⁻ is Mn(VI), d¹: green and paramagnetic (B). Its π bonds are p(O)–d(Mn) overlaps (D). In acid MnO₄⁻ → Mn²⁺ is a 5-electron change, so the equivalent mass is M/5; M/3 applies to neutral medium (→ MnO₂), so C is wrong.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    q: "Which of the following is/are consequences or causes of the lanthanoid contraction?",
    options: [
      "Zr and Hf have almost the same atomic radius",
      "The basic strength of the hydroxides decreases from La(OH)₃ to Lu(OH)₃",
      "It is caused by the imperfect shielding of one 4f electron by another",
      "The 5d elements have much lower ionisation enthalpies than the 4d elements",
    ],
    answers: [0, 1, 2],
    explain:
      "4f electrons shield the nucleus poorly, so the effective nuclear charge rises across the series and the size falls (C). This makes Zr/Hf (and Nb/Ta, Mo/W) nearly the same size (A), and the smaller Ln³⁺ ions form more covalent, less basic hydroxides (B). Because the 5d atoms are no larger but have a much bigger nuclear charge, their ionisation enthalpies are generally higher, not lower, than those of the 4d elements, so D is wrong.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 110,
    q: "In which pair(s) do both species have the same spin-only magnetic moment?",
    options: ["Ti³⁺ and Cu²⁺", "V³⁺ and Ni²⁺", "Mn²⁺ and Fe³⁺", "Cr³⁺ and Fe²⁺"],
    answers: [0, 1, 2],
    explain:
      "Spin-only μ depends only on the number of unpaired electrons. Ti³⁺ (d¹) and Cu²⁺ (d⁹): 1 each. V³⁺ (d²) and Ni²⁺ (d⁸): 2 each. Mn²⁺ and Fe³⁺ (both d⁵): 5 each. Cr³⁺ (d³) has 3 but Fe²⁺ (d⁶, high spin) has 4, so D is not a match.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    q: "Which of the following statements about the actinoids is/are correct?",
    options: [
      "All actinoids are radioactive",
      "The contraction from element to element is greater in the actinoids than in the lanthanoids",
      "Like the lanthanoids, the actinoids show almost only the +3 oxidation state",
      "5f orbitals are less buried than 4f orbitals, so 5f electrons take part in bonding more readily",
    ],
    answers: [0, 1, 3],
    explain:
      "Every actinoid is radioactive (A). 5f electrons shield even more poorly than 4f, so the actinoid contraction per element is greater (B). 5f, 6d and 7s are close in energy and 5f orbitals extend further out (D), so actinoids show many oxidation states (up to +7 for Np and Pu): C is false.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 110,
    q: "Which of the following statements about potassium dichromate is/are correct?",
    options: [
      "It is an orange solid prepared industrially from chromite ore (FeCr₂O₄)",
      "Acidified K₂Cr₂O₇ oxidises H₂S to sulphur",
      "The oxidation state of Cr in K₂Cr₂O₇ is +7",
      "The chromate–dichromate interconversion depends on the pH of the solution",
    ],
    answers: [0, 1, 3],
    explain:
      "A: chromite → Na₂CrO₄ → Na₂Cr₂O₇ → K₂Cr₂O₇ (with KCl); the solid is orange. B: $\\text{Cr}_2\\text{O}_7^{2-} + 8\\text{H}^+ + 3\\text{H}_2\\text{S} \\rightarrow 2\\text{Cr}^{3+} + 3\\text{S} + 7\\text{H}_2\\text{O}$. D: acid favours dichromate, alkali favours chromate. C is wrong: $2(+1) + 2x + 7(-2) = 0$ gives $x = +6$.",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ["JEE", "JEE_ADV", "NEET"],
    idealTime: 80,
    hint: "The third electron is removed from M²⁺, which is 3dⁿ.",
    q: "Among V, Cr, Mn and Fe, which element has the highest third ionisation enthalpy?",
    options: ["V", "Cr", "Mn", "Fe"],
    answer: 2,
    explain:
      "The third electron is removed from the M²⁺ ion. Mn²⁺ is $3d^5$, a half-filled sub-shell, so removing an electron from it costs extra (IE₃ of Mn ≈ 3260 kJ mol⁻¹, against about 2830 for V, 2990 for Cr and 2960 for Fe). Fe has the higher nuclear charge, but removing an electron from Fe²⁺ (d⁶) produces the stable d⁵ Fe³⁺, so its IE₃ is lower.",
  },
];

/* ================================================================== */
/* Chapter 5: Coordination Compounds                                   */
/* ================================================================== */
const coordination: Draft[] = [];

/* ================================================================== */
/* Chapter 6: Haloalkanes and Haloarenes                               */
/* ================================================================== */
const haloalkanes: Draft[] = [];

/** Original exam-style questions (JEE Main / Advanced, NEET, KCET, COMEDK) for the chapters below. */
export const questions: ExamQuestion[] = [
  ...build("The d- and f-Block Elements", "04", dBlock),
  ...build("Coordination Compounds", "05", coordination),
  ...build("Haloalkanes and Haloarenes", "06", haloalkanes),
];

/** One formula / quick-revision sheet per chapter. */
export const formulas: FormulaSheet[] = [
  /* FORMULAS */
];
