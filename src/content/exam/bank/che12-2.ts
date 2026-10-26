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
const coordination: Draft[] = [
  /* ---------- difficulty 1 ---------- */
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "The coordination number and the oxidation state of iron in K₃[Fe(CN)₆] are respectively:",
    options: ["6 and +2", "6 and +3", "3 and +3", "9 and +3"],
    answer: 1,
    explain:
      "Six CN⁻ ligands are bonded to Fe, so the coordination number is 6. Charge balance: $3(+1) + x + 6(-1) = 0$ gives $x = +3$. +2 is the value in K₄[Fe(CN)₆]; 3 is the number of K⁺ counter-ions, not ligands.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "Which of the following is an ambidentate ligand?",
    options: ["NH₃", "NO₂⁻", "C₂O₄²⁻", "H₂NCH₂CH₂NH₂"],
    answer: 1,
    explain:
      "An ambidentate ligand has two different donor atoms but uses only one at a time. NO₂⁻ binds through N (nitrito-N) or through O (nitrito-O). NH₃ has only one donor atom; oxalate and ethane-1,2-diamine are bidentate (both donor atoms bind together, forming a chelate).",
  },
  {
    kind: "numeric",
    difficulty: 1,
    exams: ALL,
    idealTime: 50,
    q: "One mole of CoCl₃·5NH₃ is treated with excess AgNO₃ solution at room temperature. How many moles of AgCl precipitate?",
    answer: 2,
    unit: "mol",
    explain:
      "Co(III) has a coordination number of 6. Five NH₃ and one Cl⁻ fill the inner sphere: [Co(NH₃)₅Cl]Cl₂. Only the two ionisable (counter-ion) Cl⁻ react with Ag⁺, so 2 mol AgCl form. Answering 3 counts the coordinated chloride as well.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
    options: [
      "Pentaamminechloridocobalt(III) chloride",
      "Chloridopentaamminecobalt(III) chloride",
      "Pentaamminechloridocobalt(II) chloride",
      "Pentaamminechloridocobaltate(III) chloride",
    ],
    answer: 0,
    explain:
      "Ligands are named in alphabetical order ignoring multiplying prefixes: ammine (a) before chlorido (c). Oxidation state: $x + 0 - 1 = +2$ (the complex cation is 2+), so $x = +3$. The '-ate' ending is used only for anionic complexes.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 30,
    q: "The ethylenediaminetetraacetate ion (EDTA⁴⁻) is a:",
    options: ["Bidentate ligand", "Tetradentate ligand", "Hexadentate ligand", "Monodentate ligand"],
    answer: 2,
    explain:
      "EDTA⁴⁻ binds through two N atoms and four carboxylate O atoms, so it is hexadentate. Students often say tetradentate by counting only the four acetate groups and forgetting the two nitrogens.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "Which ligand forms a chelate ring with a metal ion?",
    options: ["Cl⁻", "H₂O", "Ethane-1,2-diamine", "CO"],
    answer: 2,
    explain:
      "A chelate forms when one ligand binds through two or more donor atoms, closing a ring with the metal. Ethane-1,2-diamine (en) binds through both N atoms and makes a five-membered ring. Cl⁻, H₂O and CO are monodentate.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "Which of the following is a homoleptic complex?",
    options: ["[Co(NH₃)₄Cl₂]⁺", "[Co(NH₃)₆]³⁺", "[Pt(NH₃)₂Cl₂]", "[Co(en)₂Cl₂]⁺"],
    answer: 1,
    explain:
      "A homoleptic complex has only one kind of ligand. [Co(NH₃)₆]³⁺ has six NH₃ only. The other three contain two kinds of ligand (heteroleptic).",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "In the spectrochemical series, which ligand produces the smallest crystal-field splitting?",
    options: ["F⁻", "H₂O", "I⁻", "CN⁻"],
    answer: 2,
    explain:
      "The series runs I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO. Iodide is the weakest-field ligand; CN⁻ (and CO) are the strongest.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "Wilkinson's catalyst, used for the homogeneous hydrogenation of alkenes, is:",
    options: ["[RhCl(PPh₃)₃]", "[PtCl₂(NH₃)₂]", "TiCl₄ + Al(C₂H₅)₃", "[Ni(CO)₄]"],
    answer: 0,
    explain:
      "Wilkinson's catalyst is chloridotris(triphenylphosphine)rhodium(I), [RhCl(PPh₃)₃]. cis-[PtCl₂(NH₃)₂] is cisplatin (an anticancer drug), TiCl₄ + AlEt₃ is the Ziegler–Natta catalyst and [Ni(CO)₄] is the volatile carbonyl used in the Mond process.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "Match the biologically important compound with its central metal. (a) Chlorophyll (b) Haemoglobin (c) Vitamin B₁₂ (d) Cisplatin; (i) Co (ii) Pt (iii) Mg (iv) Fe",
    options: [
      "a-iii, b-iv, c-i, d-ii",
      "a-iv, b-iii, c-i, d-ii",
      "a-iii, b-i, c-iv, d-ii",
      "a-ii, b-iv, c-i, d-iii",
    ],
    answer: 0,
    explain:
      "Chlorophyll is a magnesium complex, haemoglobin contains iron (haem), vitamin B₁₂ (cyanocobalamin) contains cobalt and cisplatin is a platinum(II) complex.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "[Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄ are an example of:",
    options: ["Linkage isomerism", "Ionisation isomerism", "Coordination isomerism", "Geometrical isomerism"],
    answer: 1,
    explain:
      "The two compounds swap a ligand inside the coordination sphere with the counter-ion outside it, so they give different ions in solution (one gives Br⁻, the other SO₄²⁻). That is ionisation isomerism. Linkage isomerism needs an ambidentate ligand; coordination isomerism needs both cation and anion to be complexes.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 35,
    q: "Which complex can show linkage isomerism?",
    options: ["[Co(NH₃)₆]Cl₃", "[Co(NH₃)₅(NO₂)]Cl₂", "[Pt(NH₃)₂Cl₂]", "[Cr(H₂O)₆]Cl₃"],
    answer: 1,
    explain:
      "NO₂⁻ is ambidentate: it can bind through N (nitro, yellow) or through O (nitrito, red), so [Co(NH₃)₅(NO₂)]Cl₂ has linkage isomers. The other complexes contain no ambidentate ligand.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 45,
    q: "For the same metal, ligands and metal–ligand distances, the tetrahedral splitting Δₜ is related to the octahedral splitting Δₒ by:",
    options: ["Δₜ = (4/9) Δₒ", "Δₜ = (9/4) Δₒ", "Δₜ = Δₒ", "Δₜ = (2/3) Δₒ"],
    answer: 0,
    explain:
      "With only four ligands, none of which points straight at a d orbital, the splitting is smaller: $\\Delta_t = \\tfrac49\\Delta_o$. Because Δₜ is usually smaller than the pairing energy, tetrahedral complexes are almost always high spin.",
  },
  {
    kind: "mcq",
    difficulty: 1,
    exams: ALL,
    idealTime: 40,
    q: "According to Werner's theory, the secondary valence of the metal in a complex corresponds to its:",
    options: [
      "Oxidation state, satisfied by negative ions",
      "Coordination number, satisfied by ligands and directed in space",
      "Number of counter-ions",
      "Number of unpaired electrons",
    ],
    answer: 1,
    explain:
      "Werner's primary valence is ionisable and equals the oxidation state; it is satisfied by negative ions. The secondary valence is non-ionisable, equals the coordination number, is satisfied by neutral molecules or negative ions, and is directed in space, which gives the complex its definite geometry.",
  },

  /* ---------- difficulty 2 ---------- */
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "CN⁻ is a strong-field ligand; Ni²⁺ is d⁸.",
    q: "The hybridisation and magnetic behaviour of [Ni(CN)₄]²⁻ are:",
    options: ["sp³, paramagnetic", "dsp², diamagnetic", "sp³, diamagnetic", "dsp², paramagnetic"],
    answer: 1,
    explain:
      "Ni²⁺ is $3d^8$. Strong-field CN⁻ pairs the eight electrons into four 3d orbitals, leaving one 3d orbital empty. That 3d with 4s and two 4p orbitals gives dsp² hybrids: square planar, no unpaired electrons, so diamagnetic. [NiCl₄]²⁻, with weak-field Cl⁻, is the sp³, paramagnetic case.",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 70,
    hint: "Cl⁻ is weak-field; work out the geometry first.",
    q: "Calculate the spin-only magnetic moment (in BM) of the tetrahedral complex [NiCl₄]²⁻. Give the answer to two decimal places.",
    answer: 2.83,
    tolerance: 0.03,
    unit: "BM",
    explain:
      "Ni²⁺ is d⁸. Weak-field Cl⁻ does not force pairing, so the complex is sp³ (tetrahedral) with 2 unpaired electrons (e⁴ t₂⁴ in crystal-field terms). $\\mu = \\sqrt{2(2+2)} = \\sqrt8 \\approx 2.83$ BM.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Outer-orbital complexes use the 4d orbitals (sp³d²).",
    q: "Which of the following is an outer-orbital (high-spin) octahedral complex?",
    options: ["[Co(NH₃)₆]³⁺", "[Fe(CN)₆]³⁻", "[CoF₆]³⁻", "[Fe(CN)₆]⁴⁻"],
    answer: 2,
    explain:
      "F⁻ is a weak-field ligand. In [CoF₆]³⁻ the six d electrons of Co³⁺ stay spread out (4 unpaired), so the inner 3d orbitals are not free and the complex uses sp³d² (4s, 4p, 4d) hybrids: outer orbital, high spin. NH₃ and CN⁻ pair the electrons, so the other three use d²sp³ (inner orbital).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Fill t₂g first when Δₒ > P; each t₂g electron is −0.4 Δₒ.",
    q: "Ignoring pairing energy, the crystal-field stabilisation energy (CFSE) of a low-spin d⁶ octahedral complex is:",
    options: ["−0.4 Δₒ", "−1.2 Δₒ", "−2.4 Δₒ", "−1.8 Δₒ"],
    answer: 2,
    explain:
      "Low-spin d⁶ is $t_{2g}^6 e_g^0$. CFSE $= 6(-0.4\\Delta_o) + 0(+0.6\\Delta_o) = -2.4\\Delta_o$. The high-spin arrangement $t_{2g}^4 e_g^2$ would give $-1.6 + 1.2 = -0.4\\Delta_o$.",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 80,
    hint: "High-spin d⁴ is t₂g³ e_g¹.",
    q: "The CFSE of a high-spin d⁴ octahedral complex is $-x\\,\\Delta_o$ (ignoring pairing energy). Find $x$.",
    answer: 0.6,
    tolerance: 0.01,
    explain:
      "High spin d⁴: $t_{2g}^3 e_g^1$. CFSE $= 3(-0.4) + 1(+0.6) = -1.2 + 0.6 = -0.6\\,\\Delta_o$, so $x = 0.6$. The low-spin form $t_{2g}^4$ would give −1.6 Δₒ.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Think of the facial and meridional arrangements.",
    q: "The number of geometrical isomers of the octahedral complex [Co(NH₃)₃Cl₃] is:",
    options: ["1", "2", "3", "4"],
    answer: 1,
    explain:
      "An octahedral [MA₃B₃] complex has two geometrical isomers: fac (the three A on one triangular face) and mer (the three A in a plane passing through the metal, like a meridian). Neither is chiral.",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 90,
    hint: "Count trans and cis, then check whether either is chiral.",
    q: "What is the total number of stereoisomers (geometrical + optical) of [Co(en)₂Cl₂]⁺?",
    answer: 3,
    explain:
      "There are two geometrical isomers. trans-[Co(en)₂Cl₂]⁺ has a mirror plane, so it is optically inactive. cis-[Co(en)₂Cl₂]⁺ has no mirror plane and exists as a pair of enantiomers. Total $= 1 + 2 = 3$.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "[Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆] are:",
    options: ["Ionisation isomers", "Coordination isomers", "Linkage isomers", "Hydrate isomers"],
    answer: 1,
    explain:
      "Both the cation and the anion are complexes, and the ligands are exchanged between the two metal centres. This is coordination isomerism. No counter-ion is swapped (ionisation), no ambidentate ligand changes its donor atom (linkage) and no water moves (hydrate).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Only Cl⁻ outside the square bracket reacts with Ag⁺.",
    q: "Three hydrate isomers of CrCl₃·6H₂O are known. Which one gives 1 mol of AgCl per mole of complex with excess AgNO₃?",
    options: ["[Cr(H₂O)₆]Cl₃", "[Cr(H₂O)₅Cl]Cl₂·H₂O", "[Cr(H₂O)₄Cl₂]Cl·2H₂O", "[Cr(H₂O)₃Cl₃]·3H₂O"],
    answer: 2,
    explain:
      "Precipitated AgCl equals the number of ionisable Cl⁻. [Cr(H₂O)₆]Cl₃ gives 3, [Cr(H₂O)₅Cl]Cl₂·H₂O gives 2 and [Cr(H₂O)₄Cl₂]Cl·2H₂O gives 1. [Cr(H₂O)₃Cl₃]·3H₂O would have no ionisable chloride and give 0.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "The violet colour of [Ti(H₂O)₆]³⁺ is due to:",
    options: [
      "Transfer of an electron from H₂O to Ti³⁺",
      "Promotion of the single d electron from t₂g to e_g",
      "Promotion of an electron from e_g to t₂g",
      "Absorption of violet light",
    ],
    answer: 1,
    explain:
      "Ti³⁺ is d¹; in the octahedral field the electron sits in t₂g. It absorbs light (around 498 nm, blue-green) to jump to e_g. The colour seen is the complementary colour, violet. So the complex absorbs blue-green, not violet, light; e_g → t₂g would be emission, and charge transfer is not the cause here.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "Which order of ligand field strength is correct?",
    options: [
      "Cl⁻ < H₂O < NH₃ < CN⁻",
      "H₂O < Cl⁻ < NH₃ < CN⁻",
      "Cl⁻ < NH₃ < H₂O < CN⁻",
      "CN⁻ < NH₃ < H₂O < Cl⁻",
    ],
    answer: 0,
    explain:
      "From the spectrochemical series: halides are weak, then O-donors (H₂O), then N-donors (NH₃, en), and C-donors (CN⁻, CO) are strongest. So Cl⁻ < H₂O < NH₃ < CN⁻.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Back-donation fills an antibonding orbital of CO.",
    q: "Compared with free carbon monoxide, the C–O bond in a metal carbonyl is:",
    options: [
      "Shorter, because CO donates its lone pair",
      "Longer, because the metal back-donates electrons into the π* orbital of CO",
      "Unchanged, because the bonding is purely σ",
      "Shorter, because the metal removes electrons from π*",
    ],
    answer: 1,
    explain:
      "Synergic bonding: CO donates its carbon lone pair to an empty metal orbital (σ bond) and the filled metal d orbitals donate back into the empty π* orbital of CO (π back-bond). Filling π* lowers the C–O bond order, so the C–O bond is longer and its stretching frequency is lower than in free CO.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "The geometry and magnetic nature of [Ni(CO)₄] are:",
    options: [
      "Square planar, diamagnetic",
      "Tetrahedral, paramagnetic",
      "Tetrahedral, diamagnetic",
      "Square planar, paramagnetic",
    ],
    answer: 2,
    explain:
      "Ni is in the 0 oxidation state ($3d^8 4s^2$). Strong-field CO pushes the 4s electrons into 3d, giving $3d^{10}$; the empty 4s and 4p orbitals form sp³ hybrids. So [Ni(CO)₄] is tetrahedral with all electrons paired (diamagnetic).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 45,
    q: "The shape of iron pentacarbonyl, [Fe(CO)₅], is:",
    options: ["Square pyramidal", "Trigonal bipyramidal", "Octahedral", "Tetrahedral"],
    answer: 1,
    explain:
      "[Fe(CO)₅] has five CO ligands arranged trigonal bipyramidally around Fe(0) (dsp³). Octahedral is [Cr(CO)₆] and tetrahedral is [Ni(CO)₄]. Square pyramidal is the other five-coordinate shape, but it is not the one adopted by Fe(CO)₅.",
  },
  {
    kind: "numeric",
    difficulty: 2,
    exams: ALL,
    idealTime: 70,
    hint: "β₄ = K₁K₂K₃K₄, so logs add.",
    q: "The stepwise formation constants for [Cu(NH₃)₄]²⁺ have log K₁ = 4.0, log K₂ = 3.2, log K₃ = 2.7 and log K₄ = 2.0. What is log β₄, the overall formation constant? Give one decimal place.",
    answer: 11.9,
    tolerance: 0.05,
    explain:
      "$\\beta_4 = K_1K_2K_3K_4$, so $\\log\\beta_4 = 4.0 + 3.2 + 2.7 + 2.0 = 11.9$. (Multiplying the log values, or averaging them, are common slips.) The steady fall from K₁ to K₄ is normal: each step has fewer water sites left to replace.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "The IUPAC name of K₃[Fe(C₂O₄)₃] is:",
    options: [
      "Potassium trioxalatoiron(III)",
      "Potassium trioxalatoferrate(III)",
      "Potassium trioxalatoferrate(II)",
      "Tripotassium oxalatoferrate(III)",
    ],
    answer: 1,
    explain:
      "The complex is an anion, so the metal takes its Latin '-ate' name: ferrate. Oxidation state: $3(+1) + x + 3(-2) = 0$, so $x = +3$. The number of K⁺ ions is not stated in the name.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    hint: "Alphabetical order of ligand names; specify the donor atom of NO₂⁻.",
    q: "The IUPAC name of [Pt(NH₃)₂Cl(NO₂)] (NO₂⁻ bonded through N) is:",
    options: [
      "Diamminechloridonitrito-N-platinum(II)",
      "Chloridodiamminenitrito-N-platinum(II)",
      "Diamminechloridonitrito-N-platinate(II)",
      "Diamminechloridonitrito-N-platinum(IV)",
    ],
    answer: 0,
    explain:
      "Ligands go in alphabetical order of their names, ignoring 'di': ammine, chlorido, nitrito-N. The complex is neutral, so the metal keeps its normal name (platinum, not platinate). Oxidation state: $x + 0 - 1 - 1 = 0$, so $x = +2$.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    q: "The correct formula of tetraamminediaquacobalt(III) chloride is:",
    options: ["[Co(NH₃)₄(H₂O)₂]Cl₂", "[Co(NH₃)₄(H₂O)₂]Cl₃", "[Co(NH₃)₄(H₂O)Cl]Cl₂", "[Co(H₂O)₄(NH₃)₂]Cl₃"],
    answer: 1,
    explain:
      "Four NH₃ and two H₂O are neutral, so the cation carries the +3 charge of Co(III) and needs three Cl⁻: [Co(NH₃)₄(H₂O)₂]Cl₃. The Cl₂ option would mean Co(II); the last option swaps the counts of NH₃ and H₂O.",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 50,
    hint: "Count the ions each compound gives in water.",
    q: "Which aqueous solution (same concentration) has the highest molar conductivity?",
    options: ["[Co(NH₃)₃Cl₃]", "[Co(NH₃)₄Cl₂]Cl", "[Co(NH₃)₅Cl]Cl₂", "[Co(NH₃)₆]Cl₃"],
    answer: 3,
    explain:
      "Molar conductivity rises with the number of ions produced: [Co(NH₃)₆]Cl₃ gives 4 ions, [Co(NH₃)₅Cl]Cl₂ gives 3, [Co(NH₃)₄Cl₂]Cl gives 2 and [Co(NH₃)₃Cl₃] gives none (non-electrolyte).",
  },
  {
    kind: "mcq",
    difficulty: 2,
    exams: ALL,
    idealTime: 60,
    q: "Assertion (A): [Fe(H₂O)₆]²⁺ is paramagnetic, whereas [Fe(CN)₆]⁴⁻ is diamagnetic. Reason (R): CN⁻ is a strong-field ligand and causes pairing of the d electrons of Fe²⁺.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    explain:
      "Fe²⁺ is d⁶. With weak-field H₂O it is high spin ($t_{2g}^4 e_g^2$, 4 unpaired, paramagnetic). With strong-field CN⁻, Δₒ exceeds the pairing energy and all six electrons pair in t₂g ($t_{2g}^6$, diamagnetic). R explains A.",
  },

  /* ---------- difficulty 3 ---------- */
  {
    kind: "numeric",
    difficulty: 3,
    exams: ADV,
    idealTime: 150,
    hint: "Ask, for each pair of like ligands, whether it is cis or trans.",
    q: "How many geometrical isomers are possible for an octahedral complex of the type [Ma₂b₂c₂] (a, b, c are monodentate)?",
    answer: 5,
    explain:
      "Label each pair cis (C) or trans (T). Possible combinations: (T,T,T); (T,C,C), (C,T,C), (C,C,T) — one pair trans, other two cis; and (C,C,C) — all cis. (T,T,C)-type combinations are impossible, because if two pairs are trans the third must also be trans. Total geometrical isomers = 5. Only the all-cis isomer is chiral, so there are 6 stereoisomers in all.",
  },
  {
    kind: "numeric",
    difficulty: 3,
    exams: ADV,
    idealTime: 180,
    hint: "en must span cis positions. Place a₂ and b₂ in the four remaining sites.",
    q: "What is the total number of stereoisomers (including optical isomers) of [Co(en)(NH₃)₂Cl₂]⁺?",
    answer: 4,
    explain:
      "en occupies two cis sites. Of the remaining four, two are trans to the en donors and two are trans to each other (axial). (1) Both NH₃ axial (trans), both Cl trans to en: has a mirror plane. (2) Both Cl axial (trans): has a mirror plane. (3) NH₃ cis and Cl cis (one of each axial): no mirror plane, so it exists as two enantiomers. Total = 2 + 2 = 4 (three geometrical isomers).",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 120,
    hint: "Co³⁺ is d⁶; compare NH₃ and F⁻.",
    q: "Which of the following statements is/are correct?",
    options: [
      "[Co(NH₃)₆]³⁺ is an inner-orbital (d²sp³) complex and is diamagnetic",
      "[CoF₆]³⁻ is an outer-orbital (sp³d²) complex with four unpaired electrons",
      "Both [Co(NH₃)₆]³⁺ and [CoF₆]³⁻ are inner-orbital complexes",
      "The spin-only magnetic moment of [CoF₆]³⁻ is about 4.90 BM",
    ],
    answers: [0, 1, 3],
    explain:
      "Co³⁺ is d⁶. NH₃ pairs the electrons ($t_{2g}^6$), freeing two 3d orbitals for d²sp³: inner orbital, diamagnetic (A). F⁻ is weak-field: 4 unpaired electrons remain, so sp³d² (outer orbital) is used (B), and $\\mu = \\sqrt{4 \\times 6} = 4.90$ BM (D). C contradicts B.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 110,
    q: "Which of the following species is/are optically active?",
    options: ["cis-[Co(en)₂Cl₂]⁺", "trans-[Co(en)₂Cl₂]⁺", "[Co(en)₃]³⁺", "cis-[Pt(NH₃)₂Cl₂]"],
    answers: [0, 2],
    explain:
      "cis-[Co(en)₂Cl₂]⁺ and [Co(en)₃]³⁺ lack any mirror plane or centre of symmetry and are chiral (Δ and Λ forms). trans-[Co(en)₂Cl₂]⁺ has a mirror plane. Square planar cis-[Pt(NH₃)₂Cl₂] lies in a plane, which is itself a mirror plane, so it is achiral.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 110,
    q: "Which of the following statements about metal carbonyls is/are correct?",
    options: [
      "The M–C bond has both σ and π character",
      "Back-donation from the metal strengthens the C–O bond",
      "[Cr(CO)₆] is octahedral",
      "[Mn₂(CO)₁₀] contains a Mn–Mn bond",
    ],
    answers: [0, 2, 3],
    explain:
      "Synergic bonding gives the M–C bond σ (C → M) and π (M → CO π*) character (A). Back-donation into π* weakens the C–O bond, so B is wrong. [Cr(CO)₆] is octahedral (C). [Mn₂(CO)₁₀] is two square-pyramidal Mn(CO)₅ units joined by a Mn–Mn bond (D).",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 110,
    hint: "d⁸ ions with strong-field ligands, and Pt(II), tend to be square planar.",
    q: "Which of the following complexes is/are square planar?",
    options: ["[Ni(CN)₄]²⁻", "[PtCl₄]²⁻", "[NiCl₄]²⁻", "[Cu(NH₃)₄]²⁺"],
    answers: [0, 1, 3],
    explain:
      "[Ni(CN)₄]²⁻ is dsp² square planar. Pt(II) (5d⁸) has a large Δ and is square planar even with Cl⁻. [Cu(NH₃)₄]²⁺ is square planar (dsp² in VBT). [NiCl₄]²⁻ is tetrahedral (sp³) because Cl⁻ is weak-field.",
  },
  {
    kind: "multi",
    difficulty: 3,
    exams: MULTI,
    idealTime: 110,
    q: "Which of the following is/are diamagnetic?",
    options: ["[Fe(CN)₆]⁴⁻", "[Co(NH₃)₆]³⁺", "[Fe(H₂O)₆]²⁺", "[Ni(CO)₄]"],
    answers: [0, 1, 3],
    explain:
      "[Fe(CN)₆]⁴⁻ and [Co(NH₃)₆]³⁺ are low-spin d⁶ ($t_{2g}^6$): no unpaired electrons. [Ni(CO)₄] is Ni(0) rearranged to 3d¹⁰: diamagnetic. [Fe(H₂O)₆]²⁺ is high-spin d⁶ with 4 unpaired electrons (4.90 BM).",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ["JEE", "JEE_ADV", "NEET"],
    idealTime: 90,
    hint: "Which configurations give equal numbers of +0.6 and −0.4 contributions?",
    q: "Which of the following octahedral complexes has zero CFSE?",
    options: ["[Fe(H₂O)₆]³⁺ (high spin)", "[Fe(CN)₆]³⁻", "[Cr(H₂O)₆]³⁺", "[Co(NH₃)₆]³⁺"],
    answer: 0,
    explain:
      "High-spin d⁵ is $t_{2g}^3 e_g^2$: CFSE $= 3(-0.4) + 2(+0.6) = 0$. Low-spin [Fe(CN)₆]³⁻ ($t_{2g}^5$) has −2.0 Δₒ, [Cr(H₂O)₆]³⁺ ($t_{2g}^3$) has −1.2 Δₒ and [Co(NH₃)₆]³⁺ ($t_{2g}^6$) has −2.4 Δₒ.",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ["JEE", "JEE_ADV", "NEET"],
    idealTime: 120,
    hint: "Δₒ per mole = N_A h c / λ.",
    q: "[Ti(H₂O)₆]³⁺ shows its d–d absorption maximum at 498 nm. Taking $h = 6.626 \\times 10^{-34}$ J s, $c = 3.0 \\times 10^8$ m s⁻¹ and $N_A = 6.022 \\times 10^{23}$ mol⁻¹, Δₒ is about:",
    options: ["240 kJ mol⁻¹", "120 kJ mol⁻¹", "24.0 kJ mol⁻¹", "480 kJ mol⁻¹"],
    answer: 0,
    explain:
      "For d¹ the single band corresponds directly to Δₒ. $E = \\dfrac{N_A h c}{\\lambda} = \\dfrac{6.022\\times10^{23} \\times 6.626\\times10^{-34} \\times 3.0\\times10^{8}}{498\\times10^{-9}} \\approx 2.40 \\times 10^5$ J mol⁻¹ = 240 kJ mol⁻¹. Dividing by 2 or misplacing a power of ten gives the distractors.",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ADV,
    idealTime: 100,
    hint: "Valence electrons of M(0) + 2 per CO.",
    q: "Which of the following neutral mononuclear carbonyls obeys the 18-electron rule?",
    options: ["[V(CO)₆]", "[Fe(CO)₅]", "[Co(CO)₄]", "[Mn(CO)₅]"],
    answer: 1,
    explain:
      "Count metal valence electrons plus 2 per CO. Fe: 8 + 10 = 18. V: 5 + 12 = 17; Co: 9 + 8 = 17; Mn: 7 + 10 = 17. The 17-electron Co(CO)₄ and Mn(CO)₅ fragments reach 18 by dimerising (Co₂(CO)₈, Mn₂(CO)₁₀ with an M–M bond); V(CO)₆ is a rare stable 17-electron, paramagnetic carbonyl.",
  },
  {
    kind: "mcq",
    difficulty: 3,
    exams: ["JEE", "JEE_ADV", "NEET"],
    idealTime: 100,
    q: "Statement I: [Ni(NH₃)₆]²⁺ is an outer-orbital (sp³d²) complex. Statement II: Low-spin tetrahedral complexes are rarely observed because Δₜ is usually smaller than the pairing energy.",
    options: [
      "Both Statement I and Statement II are correct",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Both Statement I and Statement II are incorrect",
    ],
    answer: 0,
    explain:
      "Ni²⁺ is d⁸: even with pairing, eight electrons fill four 3d orbitals and leave only one empty, but d²sp³ needs two. So the six-coordinate complex must use 4d orbitals (sp³d², 2 unpaired electrons): Statement I is correct. Δₜ = (4/9)Δₒ is nearly always below the pairing energy, so tetrahedral complexes are high spin: Statement II is correct.",
  },
];

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
