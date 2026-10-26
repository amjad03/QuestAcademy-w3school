import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "chemistry-senior";
/** Syllabus family: chapter titles below are matched against `che` rows in src/content/syllabus/. */
export const family = "che";

/*
 * ISC Class 11 Chemistry chapters that are NOT in the rationalised NCERT books
 * (so CBSE and Karnataka I PUC do not examine them): States of Matter, s-Block,
 * p-Block (Groups 13 and 14) and Environmental Chemistry.
 */

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* States of Matter: Gaseous and Liquid States (ISC Class 11)           */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-states-of-matter",
    title: "States of Matter: Gaseous and Liquid States",
    icon: "🎈",
    description: "Intermolecular forces, the gas laws, the ideal gas equation, Dalton's law of partial pressures, Graham's law of diffusion, the kinetic molecular theory, real gases and the van der Waals equation, liquefaction and critical constants, and the liquid state: vapour pressure, surface tension and viscosity.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-som-gas-laws",
        title: "Intermolecular Forces and the Gas Laws",
        summary: "Why matter exists as solid, liquid or gas; the types of intermolecular forces; Boyle's, Charles', Gay-Lussac's and Avogadro's laws; the ideal gas equation and its uses for density and molar mass.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "This chapter was removed from the rationalised NCERT Class 11 book, so CBSE and Karnataka I PUC do not examine it. **ISC Class 11 keeps it in full.** Gas laws and the kinetic theory are still needed for JEE (Advanced lists the gaseous state; the ideal gas equation is used in thermodynamics, equilibrium and solutions everywhere).",
          },
          {
            type: "illustration",
            emoji: "🎈",
            caption: "A balloon left in a hot car on a summer afternoon in Chennai swells and may burst. The air inside has not changed in amount, only in temperature. The gas laws tell us exactly how much it swells.",
          },
          {
            type: "text",
            md: t`Whether a substance is a solid, a liquid or a gas depends on a contest between two things: the **intermolecular forces** that pull particles together, and the **thermal energy** (the energy of random motion, which rises with temperature) that pushes them apart. Strong forces and low temperature give a solid; weak forces and high temperature give a gas.

Intermolecular forces are attractions between whole molecules (not the bonds inside a molecule). Together they are often called **van der Waals forces**. **Hydrogen bonding** is a specially strong dipole–dipole attraction and is usually listed separately.`,
          },
          {
            type: "table",
            headers: ["Force", "Between", "Strength depends on", "Example"],
            rows: [
              ["Dispersion (London) forces", "all molecules, even non-polar ones (momentary dipoles)", "size and number of electrons; falls as 1/r⁶", "He, Cl₂, CH₄"],
              ["Dipole–dipole", "polar molecules with permanent dipoles", "dipole moments; falls as 1/r³ (fixed) or 1/r⁶ (rotating)", "HCl, SO₂"],
              ["Dipole–induced dipole", "a polar molecule and a non-polar one", "dipole moment and polarisability; 1/r⁶", "HCl with Ar"],
              ["Hydrogen bond", "H attached to F, O or N and a lone pair on F, O or N", "electronegativity of F, O, N", "H₂O, HF, NH₃"],
            ],
          },
          {
            type: "text",
            md: t`Gases are the simplest state to describe, because their particles are far apart. Four measurable quantities fix the state of a gas: **pressure** P (SI unit pascal; 1 bar = 10⁵ Pa; 1 atm = 101 325 Pa = 760 mm Hg), **volume** V, **temperature** T (always in kelvin, T = t °C + 273.15) and **amount** n (moles). The gas laws link them two at a time.`,
          },
          {
            type: "table",
            headers: ["Law", "Held constant", "Statement", "Graph"],
            rows: [
              ["Boyle's law (1662)", "n, T", t`$P \propto 1/V$, so $P_1V_1 = P_2V_2$`, "P vs V: rectangular hyperbola (isotherm); P vs 1/V: straight line through origin"],
              ["Charles' law (1787)", "n, P", t`$V \propto T$, so $V_1/T_1 = V_2/T_2$`, "V vs T: straight line (isobar) meeting V = 0 at 0 K (−273.15 °C)"],
              ["Gay-Lussac's law", "n, V", t`$P \propto T$, so $P_1/T_1 = P_2/T_2$`, "P vs T: straight line (isochore)"],
              ["Avogadro's law (1811)", "P, T", t`$V \propto n$`, "equal volumes of all gases at the same P and T hold equal numbers of molecules"],
            ],
          },
          {
            type: "text",
            md: t`Charles found that a gas expands by 1/273.15 of its volume at 0 °C for every 1 °C rise: $V_t = V_0\left(1 + \dfrac{t}{273.15}\right)$. Extending the straight line backwards, every gas would reach zero volume at −273.15 °C. This temperature is called **absolute zero**, the zero of the kelvin scale. (Real gases liquefy long before that.)

Combining the four laws gives the **ideal gas equation**. A gas that obeys it exactly at all P and T is an **ideal gas**; real gases come close at low pressure and high temperature.`,
          },
          {
            type: "formula",
            tex: t`PV = nRT \qquad \frac{P_1V_1}{T_1} = \frac{P_2V_2}{T_2} \qquad d = \frac{PM}{RT}`,
            caption: "R = 8.314 J mol⁻¹ K⁻¹ = 0.08314 L bar mol⁻¹ K⁻¹ = 0.0821 L atm mol⁻¹ K⁻¹. At 273.15 K and 1 bar one mole occupies 22.71 L; at 273.15 K and 1 atm, 22.41 L. d = density, M = molar mass.",
          },
          {
            type: "example",
            title: "Using the ideal gas equation",
            problem: "Find the mass of oxygen gas in a 5.0 L cylinder at 27 °C and 2.0 bar. (R = 0.08314 L bar mol⁻¹ K⁻¹, O = 16)",
            steps: [
              "Convert temperature: T = 27 + 273 = 300 K.",
              t`$n = \dfrac{PV}{RT} = \dfrac{2.0 \times 5.0}{0.08314 \times 300} = \dfrac{10}{24.94} = 0.401$ mol.`,
              t`Mass $= n \times M = 0.401 \times 32 = 12.8$ g.`,
            ],
            answer: "About 12.8 g of O₂",
          },
          {
            type: "example",
            title: "Molar mass from density",
            problem: "A gas has a density of 1.25 g L⁻¹ at 273 K and 1 atm. Find its molar mass. (R = 0.0821 L atm mol⁻¹ K⁻¹)",
            steps: [
              t`Rearrange $d = PM/RT$ to $M = dRT/P$.`,
              t`$M = 1.25 \times 0.0821 \times 273 / 1 = 1.25 \times 22.41 = 28.0$ g mol$^{-1}$.`,
            ],
            answer: "M ≈ 28 g mol⁻¹ (it could be N₂ or CO)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A gas occupies 300 mL at 27 °C. At constant pressure it is heated to 127 °C. What is its new volume in mL?",
                answer: 400,
                unit: "mL",
                explain: "Use kelvin: V₂ = V₁ × T₂/T₁ = 300 × 400/300 = 400 mL. Using °C (127/27) would give a wrong answer.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "If the temperature doubles from 20 °C to 40 °C, the volume of a gas doubles at constant pressure.",
            right: "Gas laws use absolute temperature. 20 °C = 293 K and 40 °C = 313 K, so the volume rises only by 313/293, about 7%.",
            why: "The Celsius zero is just the freezing point of water, not zero energy. Only the kelvin scale starts at the true zero, so only kelvin values can be put in a ratio.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each law with what it keeps constant.",
              pairs: [
                ["Boyle's law", "amount and temperature"],
                ["Charles' law", "amount and pressure"],
                ["Gay-Lussac's law", "amount and volume"],
                ["Avogadro's law", "pressure and temperature"],
              ],
              explain: "Each law changes two variables and freezes the other two; the ideal gas equation puts all four together.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC exam tips",
            md: "Always convert to kelvin first and write the units of R you chose; mixing L atm with bar costs marks. Graph questions are common: know that a P–V isotherm is a hyperbola, a V–T isobar is a straight line, and that a higher isotherm means a higher temperature.",
          },
          {
            type: "keypoints",
            items: [
              "The state of matter is a balance between intermolecular forces and thermal energy.",
              "Boyle: PV constant; Charles: V/T constant; Gay-Lussac: P/T constant; Avogadro: V ∝ n.",
              "PV = nRT combines them; R = 8.314 J mol⁻¹ K⁻¹ = 0.0821 L atm mol⁻¹ K⁻¹.",
              "Density of a gas d = PM/RT, so molar mass can be found from density.",
              "Always use kelvin in gas calculations.",
            ],
          },
        ],
        flashcards: [
          { front: "Boyle's law", back: "At constant n and T, the pressure of a gas is inversely proportional to its volume: P₁V₁ = P₂V₂." },
          { front: "Charles' law", back: "At constant n and P, the volume of a gas is directly proportional to its absolute temperature: V₁/T₁ = V₂/T₂." },
          { front: "Gay-Lussac's law", back: "At constant n and V, pressure is directly proportional to absolute temperature." },
          { front: "Avogadro's law", back: "At the same P and T, equal volumes of all gases contain equal numbers of molecules (V ∝ n)." },
          { front: "Absolute zero", back: "−273.15 °C (0 K), the temperature at which an ideal gas would have zero volume by Charles' law." },
          { front: "Value of R", back: "8.314 J mol⁻¹ K⁻¹ = 0.08314 L bar mol⁻¹ K⁻¹ = 0.0821 L atm mol⁻¹ K⁻¹." },
          { front: "Density form of the ideal gas equation", back: "d = PM/RT" },
          { front: "Which intermolecular force acts between all molecules?", back: "Dispersion (London) forces, caused by momentary dipoles." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A plot of P against 1/V for a fixed amount of gas at constant temperature is",
            options: ["a straight line through the origin", "a rectangular hyperbola", "a straight line parallel to the 1/V axis", "a parabola"],
            answer: 0,
            explain: "P = k(1/V), so P against 1/V is a straight line through the origin. The hyperbola is the P against V graph.",
          },
          {
            kind: "numeric",
            q: "A gas at 1.2 bar occupies 2.5 L. At the same temperature it is compressed to 0.80 L. Find the new pressure in bar.",
            answer: 3.75,
            tolerance: 0.02,
            unit: "bar",
            explain: "P₂ = P₁V₁/V₂ = 1.2 × 2.5/0.80 = 3.75 bar.",
          },
          {
            kind: "mcq",
            q: "Which gas law explains why a tyre's pressure rises on a long hot drive (volume nearly constant)?",
            options: ["Gay-Lussac's law", "Boyle's law", "Charles' law", "Avogadro's law"],
            answer: 0,
            explain: "At constant volume and amount, pressure rises in proportion to absolute temperature.",
          },
          {
            kind: "numeric",
            q: "How many moles of gas occupy 8.21 L at 300 K and 3.0 atm? (R = 0.0821 L atm mol⁻¹ K⁻¹)",
            answer: 1,
            tolerance: 0.01,
            unit: "mol",
            explain: "n = PV/RT = 3.0 × 8.21/(0.0821 × 300) = 24.63/24.63 = 1.0 mol.",
          },
          {
            kind: "multi",
            q: "Which of these molecules can form hydrogen bonds with each other?",
            options: ["HF", "CH₄", "NH₃", "HCl"],
            answers: [0, 2],
            explain: "Hydrogen bonding needs H bonded to F, O or N. CH₄ has C–H, and Cl is too large and not electronegative enough for normal hydrogen bonding.",
          },
          {
            kind: "truefalse",
            q: "At the same temperature and pressure, 1 L of hydrogen and 1 L of carbon dioxide contain the same number of molecules.",
            answer: true,
            explain: "This is Avogadro's law; it does not depend on the identity of the gas.",
          },
          {
            kind: "mcq",
            q: "Two gases A and B at the same T and P have densities in the ratio 1 : 2. The ratio of their molar masses M_A : M_B is",
            options: ["1 : 2", "2 : 1", "1 : 4", "1 : √2"],
            answer: 0,
            explain: "d = PM/RT, so at equal P and T density is proportional to molar mass.",
            difficulty: 2,
            hint: "Write d = PM/RT for both and divide.",
          },
        ],
      },
      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-som-dalton-graham-kmt",
        title: "Dalton's Law, Graham's Law and the Kinetic Theory",
        summary: "Partial pressures and mole fractions, gas collected over water, diffusion and effusion rates, the postulates of the kinetic molecular theory, kinetic energy and temperature, and the three molecular speeds.",
        minutes: 23,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🌸",
            caption: "Light an agarbatti in one corner of a room and within minutes it is smelt in the far corner. The scent molecules diffuse through the air; lighter molecules spread faster.",
          },
          {
            type: "text",
            md: t`**Dalton's law of partial pressures (1801):** in a mixture of gases that do not react, the total pressure equals the sum of the **partial pressures** of the gases. The partial pressure of a gas is the pressure it would exert if it alone filled the whole container at the same temperature.

Since each gas obeys $p_i = n_iRT/V$, dividing by $P_\text{total} = n_\text{total}RT/V$ gives $p_i = x_i P_\text{total}$, where $x_i$ is the **mole fraction** of that gas.`,
          },
          {
            type: "formula",
            tex: t`P_\text{total} = p_1 + p_2 + p_3 + \dots \qquad p_i = x_i\,P_\text{total}, \quad x_i = \frac{n_i}{n_\text{total}}`,
            caption: "Gas collected over water: p(dry gas) = P(total) − aqueous tension (the vapour pressure of water at that temperature).",
          },
          {
            type: "example",
            title: "Partial pressures in a mixture",
            problem: "A vessel contains 3.2 g of O₂ and 0.60 g of H₂ at a total pressure of 2.0 bar. Find the partial pressure of each gas. (O = 16, H = 1)",
            steps: [
              "Moles: O₂ = 3.2/32 = 0.10 mol; H₂ = 0.60/2 = 0.30 mol; total = 0.40 mol.",
              "Mole fractions: x(O₂) = 0.10/0.40 = 0.25; x(H₂) = 0.75.",
              "p(O₂) = 0.25 × 2.0 = 0.50 bar; p(H₂) = 0.75 × 2.0 = 1.50 bar.",
            ],
            answer: "p(O₂) = 0.50 bar, p(H₂) = 1.50 bar (they add to 2.0 bar)",
          },
          {
            type: "text",
            md: t`**Graham's law of diffusion (1829):** at the same temperature and pressure, the rate of diffusion (or **effusion**, escape through a tiny hole) of a gas is inversely proportional to the square root of its density, and so to the square root of its molar mass.

For equal volumes escaping, time is inversely proportional to rate, so $t \propto \sqrt{M}$.`,
          },
          {
            type: "formula",
            tex: t`\frac{r_1}{r_2} = \sqrt{\frac{d_2}{d_1}} = \sqrt{\frac{M_2}{M_1}} \qquad \frac{t_1}{t_2} = \sqrt{\frac{M_1}{M_2}}\ \ (\text{equal volumes})`,
            caption: "Valid at the same T and P. Rate = volume (or moles) effused per unit time.",
          },
          {
            type: "example",
            title: "Molar mass by effusion",
            problem: "Under the same conditions a gas X effuses at half the rate of methane (CH₄). Find the molar mass of X.",
            steps: [
              t`$r_X/r_{\text{CH}_4} = 1/2 = \sqrt{M_{\text{CH}_4}/M_X}$.`,
              t`Square both sides: $1/4 = 16/M_X$, so $M_X = 64$ g mol$^{-1}$.`,
            ],
            answer: "M = 64 g mol⁻¹ (for example SO₂)",
          },
          {
            type: "text",
            md: t`**Kinetic molecular theory of gases** explains these laws from a simple model. Its postulates:

1. A gas is made of a very large number of tiny particles whose own volume is negligible compared with the volume of the container.
2. There are **no attractive forces** between the particles.
3. Particles move randomly in straight lines and keep colliding with each other and with the walls; collisions with the walls cause pressure.
4. Collisions are **perfectly elastic**: total kinetic energy is conserved.
5. At any moment particles have different speeds, but the distribution of speeds stays constant at a given temperature.
6. The **average kinetic energy** of the particles is proportional to the absolute temperature.

Postulates 1 and 2 are exactly the ones that fail for real gases at high pressure and low temperature.`,
          },
          {
            type: "formula",
            tex: t`PV = \tfrac{1}{3}\,m N u_\text{rms}^2 \qquad \overline{E}_k = \tfrac{3}{2}RT\ (\text{per mole}) = \tfrac{3}{2}k_BT\ (\text{per molecule})`,
            caption: "m = mass of one molecule, N = number of molecules, k_B = R/N_A = 1.38 × 10⁻²³ J K⁻¹. Average KE depends only on T, not on the gas.",
          },
          {
            type: "formula",
            tex: t`u_\text{mp} = \sqrt{\frac{2RT}{M}} \quad < \quad u_\text{av} = \sqrt{\frac{8RT}{\pi M}} \quad < \quad u_\text{rms} = \sqrt{\frac{3RT}{M}}`,
            caption: "Most probable : average : root-mean-square = 1 : 1.128 : 1.224. Use M in kg mol⁻¹ and R = 8.314 J mol⁻¹ K⁻¹ to get m s⁻¹.",
          },
          {
            type: "example",
            title: "rms speed of nitrogen",
            problem: "Calculate the root-mean-square speed of N₂ molecules at 300 K. (R = 8.314 J mol⁻¹ K⁻¹)",
            steps: [
              "M must be in kg mol⁻¹: M = 28 g mol⁻¹ = 0.028 kg mol⁻¹.",
              t`$u_\text{rms} = \sqrt{3RT/M} = \sqrt{3 \times 8.314 \times 300 / 0.028} = \sqrt{2.67 \times 10^{5}}$.`,
              t`$u_\text{rms} \approx 517$ m s$^{-1}$.`,
            ],
            answer: "About 517 m s⁻¹",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "At the same temperature, which gas has the greatest average kinetic energy per molecule: H₂, O₂ or CO₂?",
                options: ["H₂", "O₂", "CO₂", "All have the same"],
                answer: 3,
                explain: "Average KE = (3/2)k_BT depends only on temperature. H₂ moves fastest, but its smaller mass exactly balances the higher speed.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Hydrogen molecules move faster than oxygen molecules at the same temperature, so they have more kinetic energy.",
            right: "They do move faster (four times faster in rms speed), but their mass is 16 times smaller, so ½mu² comes out the same. Average kinetic energy depends only on absolute temperature.",
            why: "Speed and energy feel like the same thing. Kinetic energy includes mass, and the speed rises only as the square root of 1/M.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which effuses faster through a pinhole: H₂ or O₂, and how much?",
              emoji: "🕳️",
              options: ["H₂, 4 times faster", "H₂, 16 times faster", "O₂, because it is heavier and pushes harder", "Both at the same rate"],
              answer: 0,
              trap: 1,
              explain: "Rate goes as 1/√M: √(32/2) = √16 = 4. The ratio of masses is 16, but the rate ratio is its square root.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC exam tips",
            md: "Derivation-style questions ask you to show that the kinetic gas equation PV = ⅓mNu² leads to Boyle's, Charles' and Avogadro's laws (use KE ∝ T). In numericals, the most common slip is using M in g mol⁻¹ with R in J: speeds then come out √1000 times too small.",
          },
          {
            type: "keypoints",
            items: [
              "Dalton: P(total) = Σ pᵢ and pᵢ = xᵢP(total); subtract aqueous tension for gas collected over water.",
              "Graham: rate ∝ 1/√M at the same T and P; time for equal volumes ∝ √M.",
              "Kinetic theory: negligible molecular volume, no attractions, elastic collisions, average KE ∝ T.",
              "Average KE = (3/2)RT per mole, the same for every gas at a given T.",
              "u(mp) < u(av) < u(rms), in the ratio 1 : 1.128 : 1.224.",
            ],
          },
        ],
        flashcards: [
          { front: "Dalton's law of partial pressures", back: "The total pressure of a mixture of non-reacting gases equals the sum of their partial pressures." },
          { front: "Partial pressure from mole fraction", back: "pᵢ = xᵢ × P(total)" },
          { front: "Aqueous tension", back: "The vapour pressure of water at a given temperature; subtract it from total pressure to get the pressure of a dry gas collected over water." },
          { front: "Graham's law", back: "At the same T and P, rate of diffusion ∝ 1/√(density) ∝ 1/√M." },
          { front: "Effusion", back: "Escape of a gas through a tiny hole into a vacuum or lower-pressure region." },
          { front: "Kinetic gas equation", back: "PV = ⅓ m N u(rms)²" },
          { front: "Average KE of one mole of gas", back: "(3/2)RT, independent of the nature of the gas." },
          { front: "Ratio of the three molecular speeds", back: "u(mp) : u(av) : u(rms) = √2 : √(8/π) : √3 ≈ 1 : 1.128 : 1.224" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A gas collected over water at 25 °C has a total pressure of 740.0 mm Hg. The aqueous tension at 25 °C is 23.8 mm Hg. What is the pressure of the dry gas in mm Hg?",
            answer: 716.2,
            tolerance: 0.2,
            unit: "mm Hg",
            explain: "p(dry gas) = 740.0 − 23.8 = 716.2 mm Hg.",
          },
          {
            kind: "mcq",
            q: "Equal masses of methane and oxygen are mixed in an empty container. The fraction of the total pressure exerted by oxygen is",
            options: ["1/3", "1/2", "2/3", "1/4"],
            answer: 0,
            explain: "Take 32 g of each: CH₄ = 2 mol, O₂ = 1 mol. x(O₂) = 1/3, so p(O₂) = P/3.",
            difficulty: 2,
            hint: "Pick a convenient mass such as 32 g and count moles.",
          },
          {
            kind: "numeric",
            q: "Under identical conditions 100 mL of O₂ effuses in 40 s. How many seconds will 100 mL of H₂ take?",
            answer: 10,
            unit: "s",
            explain: "t ∝ √M: t(H₂) = 40 × √(2/32) = 40 × 1/4 = 10 s.",
          },
          {
            kind: "multi",
            q: "Which postulates of the kinetic theory are not true for real gases at high pressure?",
            options: [
              "The volume of the molecules is negligible.",
              "There are no forces of attraction between molecules.",
              "Molecules are in random motion.",
              "Average kinetic energy depends on temperature.",
            ],
            answers: [0, 1],
            explain: "At high pressure molecules are crowded, so their own volume and their mutual attractions both matter. Random motion and KE ∝ T still hold.",
          },
          {
            kind: "mcq",
            q: "If the absolute temperature of a gas is made four times, its rms speed becomes",
            options: ["2 times", "4 times", "16 times", "√2 times"],
            answer: 0,
            explain: "u(rms) ∝ √T, so √4 = 2 times.",
          },
          {
            kind: "numeric",
            q: "Calculate the average kinetic energy of 1 mol of argon at 300 K, in kJ (R = 8.314 J mol⁻¹ K⁻¹). Give two decimal places.",
            answer: 3.74,
            tolerance: 0.02,
            unit: "kJ",
            explain: "KE = (3/2)RT = 1.5 × 8.314 × 300 = 3741 J ≈ 3.74 kJ.",
          },
          {
            kind: "mcq",
            q: "For a gas at a given temperature, which order of speeds is correct?",
            options: ["u(mp) < u(av) < u(rms)", "u(rms) < u(av) < u(mp)", "u(av) < u(mp) < u(rms)", "all three are equal"],
            answer: 0,
            explain: "The constants under the root are 2, 8/π ≈ 2.55 and 3, in that order.",
          },
        ],
      },
      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-som-real-gases-liquids",
        title: "Real Gases, Liquefaction and the Liquid State",
        summary: "Deviation from ideal behaviour, the compressibility factor, the van der Waals equation, Andrews' isotherms and critical constants, liquefaction of gases, and the properties of liquids: vapour pressure, boiling point, surface tension and viscosity.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🧯",
            caption: "Squeeze carbon dioxide hard enough at room temperature and it turns into a liquid, which is why a CO₂ fire extinguisher sloshes. Squeeze it at 40 °C and it never liquefies, however hard you push.",
          },
          {
            type: "text",
            md: t`Real gases follow PV = nRT only at **low pressure and high temperature**. The size of the deviation is measured by the **compressibility factor**:

$Z = \dfrac{PV}{nRT} = \dfrac{V_\text{real}}{V_\text{ideal}}$

For an ideal gas Z = 1 at all pressures. If **Z < 1** the gas is more compressible than ideal (attractions dominate; seen for CO₂, CH₄ at moderate pressure). If **Z > 1** it is less compressible (the volume of the molecules dominates; seen for H₂ and He at all pressures at room temperature, and for every gas at very high pressure).`,
          },
          {
            type: "text",
            md: t`Two assumptions of the kinetic theory fail:

1. **Molecules attract each other.** A molecule about to hit the wall is pulled back by its neighbours, so the observed pressure is less than the ideal pressure. The correction is $an^2/V^2$ (it grows with the square of concentration because both the hitting molecule and the pulling molecules are counted).
2. **Molecules have volume.** The space free for motion is less than V. The correction is $nb$, where b (the excluded volume per mole) is about four times the actual volume of one mole of molecules.

Putting both corrections into the ideal equation gives the **van der Waals equation**.`,
          },
          {
            type: "formula",
            tex: t`\left(P + \frac{a n^2}{V^2}\right)(V - nb) = nRT`,
            caption: "a (units L² atm mol⁻² or Pa m⁶ mol⁻²) measures attractive forces; b (L mol⁻¹) measures molecular size. Easily liquefied gases (NH₃, CO₂) have large a.",
          },
          {
            type: "example",
            title: "Is the gas behaving ideally?",
            problem: "1.0 mol of a gas occupies 0.50 L at 300 K and 40 atm. Find Z and say which effect dominates. (R = 0.0821 L atm mol⁻¹ K⁻¹)",
            steps: [
              t`$Z = \dfrac{PV}{nRT} = \dfrac{40 \times 0.50}{1.0 \times 0.0821 \times 300} = \dfrac{20}{24.63}$.`,
              "Z = 0.81, which is less than 1.",
              "The gas is more compressible than an ideal gas: attractive forces dominate at this pressure.",
            ],
            answer: "Z ≈ 0.81; attractions dominate",
          },
          {
            type: "text",
            md: t`**Andrews' isotherms (1869) and the critical state.** Thomas Andrews compressed CO₂ at different temperatures. Above 30.98 °C the gas never liquefied; the isotherm was a smooth curve. Below it, compression first raised the pressure, then liquid appeared and the pressure stayed constant (a flat portion where gas and liquid coexist) until all the gas had liquefied, after which the pressure shot up steeply because liquids are hard to compress.

The **critical temperature** $T_c$ is the highest temperature at which a gas can be liquefied by pressure alone. The pressure needed at $T_c$ is the **critical pressure** $P_c$, and the molar volume there is the **critical volume** $V_c$. For CO₂, $T_c$ = 30.98 °C and $P_c$ ≈ 73.9 bar. Above $T_c$ the substance is a gas (strictly a supercritical fluid); below $T_c$ the gas phase is called a **vapour**.`,
          },
          {
            type: "formula",
            tex: t`T_c = \frac{8a}{27Rb} \qquad P_c = \frac{a}{27b^2} \qquad V_c = 3b \qquad T_B = \frac{a}{Rb}`,
            caption: "Critical constants and the Boyle temperature T_B (where a real gas behaves ideally over a range of low pressures) predicted by the van der Waals equation.",
          },
          {
            type: "text",
            md: "**Liquefaction of gases.** To liquefy a gas it must first be cooled below its critical temperature and then compressed. Gases such as NH₃ and CO₂ have critical temperatures above or near room temperature and are liquefied easily; O₂, N₂, H₂ and He have very low critical temperatures, so they are first cooled by expansion (the Joule–Thomson effect, used in the Linde process) before compression.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A gas has a large van der Waals constant a and a high critical temperature. It is",
                options: ["easily liquefied", "hard to liquefy", "an ideal gas", "always above its Boyle temperature"],
                answer: 0,
                explain: "Large a means strong attractions, so the gas liquefies at a relatively high temperature.",
              },
            ],
          },
          {
            type: "text",
            md: t`**The liquid state.** In liquids the molecules are close enough for intermolecular forces to hold them together, but they can still slide past one another. Liquids have a definite volume but no definite shape.

**Vapour pressure** is the pressure of the vapour in equilibrium with its liquid in a closed vessel at a given temperature. It rises with temperature. When it equals the external pressure, the liquid **boils**. At 1 atm the boiling point is the **normal boiling point** (water: 100 °C); at 1 bar it is the **standard boiling point** (water: 99.6 °C). This is why water boils below 100 °C at hill stations such as Shimla, and above it in a pressure cooker.

**Surface tension** (γ) is the force acting per unit length perpendicular to a line drawn on the surface (N m⁻¹); equivalently, the energy needed to increase the surface area by one unit (J m⁻²). Molecules at the surface feel a net inward pull, so liquids try to have the least surface area: drops are spherical. Surface tension explains capillary rise and the rounded edges of fire-polished glass. It **decreases with rising temperature**.

**Viscosity** (η) is the internal resistance to flow between layers of a liquid. For laminar flow, $F = \eta A \dfrac{dv}{dz}$, where dv/dz is the velocity gradient. The SI unit is N s m⁻² (Pa s); the cgs unit is the poise, 1 poise = 0.1 Pa s. Strong intermolecular forces (as in glycerol or honey) mean high viscosity. The viscosity of liquids **decreases with rising temperature**.`,
          },
          {
            type: "example",
            title: "Viscous force",
            problem: t`Water ($\eta = 1.0 \times 10^{-3}$ Pa s) flows between two layers of area 0.010 m² with a velocity gradient of 50 s⁻¹. Find the viscous force.`,
            steps: [
              t`$F = \eta A\,\dfrac{dv}{dz} = 1.0 \times 10^{-3} \times 0.010 \times 50$.`,
              t`$F = 5.0 \times 10^{-4}$ N.`,
            ],
            answer: "5.0 × 10⁻⁴ N",
          },
          {
            type: "mistake",
            wrong: "Any gas can be turned into a liquid if you apply a large enough pressure.",
            right: "Pressure alone liquefies a gas only below its critical temperature. Above Tc no pressure, however large, produces a separate liquid phase.",
            why: "Pressure pushes molecules together, but above Tc their kinetic energy is too large for attractions to hold them as a liquid. Cooling must come first.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does this increase or decrease when temperature rises?",
              groups: ["Increases", "Decreases"],
              items: [
                { text: "Vapour pressure of a liquid", group: 0, hint: "More molecules have enough energy to escape." },
                { text: "Surface tension of a liquid", group: 1, hint: "Faster molecules weaken the inward pull at the surface." },
                { text: "Viscosity of a liquid", group: 1, hint: "Molecules slip past each other more easily." },
                { text: "rms speed of gas molecules", group: 0, hint: "u(rms) ∝ √T." },
                { text: "Volume of a gas at constant pressure", group: 0, hint: "Charles' law." },
              ],
              explain: "Heating gives molecules more kinetic energy, which overcomes intermolecular forces: properties that depend on those forces (surface tension, viscosity) fall.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC exam tips",
            md: "Explain the two van der Waals corrections in words and say why the pressure correction has n²/V². When drawing Andrews' isotherms, label the critical point, the horizontal liquid–vapour region and the steep liquid region. State units of a and b if asked.",
          },
          {
            type: "keypoints",
            items: [
              "Z = PV/nRT; Z < 1 when attractions dominate, Z > 1 when molecular volume dominates.",
              "van der Waals: (P + an²/V²)(V − nb) = nRT; a for attraction, b for size.",
              "A gas can be liquefied only below its critical temperature; for CO₂ Tc = 30.98 °C.",
              "A liquid boils when its vapour pressure equals the external pressure.",
              "Surface tension and viscosity of liquids both decrease as temperature rises.",
            ],
          },
        ],
        flashcards: [
          { front: "Compressibility factor Z", back: "Z = PV/nRT; equals 1 for an ideal gas." },
          { front: "van der Waals equation", back: "(P + an²/V²)(V − nb) = nRT" },
          { front: "What do a and b measure?", back: "a: strength of intermolecular attraction; b: excluded volume (size) of the molecules per mole." },
          { front: "Critical temperature", back: "The highest temperature at which a gas can be liquefied by applying pressure alone." },
          { front: "Tc, Pc, Vc in terms of a and b", back: "Tc = 8a/27Rb, Pc = a/27b², Vc = 3b" },
          { front: "Boyle temperature", back: "T_B = a/Rb; a real gas behaves nearly ideally over a range of low pressures at this temperature." },
          { front: "Normal vs standard boiling point of water", back: "100 °C at 1 atm (normal); 99.6 °C at 1 bar (standard)." },
          { front: "SI unit of viscosity", back: "N s m⁻² (Pa s); 1 poise = 0.1 Pa s." },
          { front: "Surface tension", back: "Force per unit length acting perpendicular to a line on the surface (N m⁻¹)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Real gases behave most nearly ideally at",
            options: ["low pressure and high temperature", "high pressure and low temperature", "high pressure and high temperature", "low pressure and low temperature"],
            answer: 0,
            explain: "At low pressure the molecular volume is negligible, and at high temperature attractions are unimportant compared with kinetic energy.",
          },
          {
            kind: "mcq",
            q: "The units of the van der Waals constant b are",
            options: ["L mol⁻¹", "L² atm mol⁻²", "atm L⁻¹", "mol L⁻¹"],
            answer: 0,
            explain: "nb is subtracted from V, so nb has volume units; b is volume per mole.",
          },
          {
            kind: "numeric",
            q: "For CO₂, a = 3.59 L² atm mol⁻² and b = 0.0427 L mol⁻¹. Using Tc = 8a/27Rb with R = 0.0821 L atm mol⁻¹ K⁻¹, find Tc in kelvin (to the nearest 1 K).",
            answer: 303,
            tolerance: 2,
            unit: "K",
            explain: "Tc = 8 × 3.59/(27 × 0.0821 × 0.0427) = 28.72/0.09465 ≈ 303 K, close to the measured 304 K.",
            difficulty: 2,
            hint: "Work out the denominator 27Rb first.",
          },
          {
            kind: "truefalse",
            q: "The viscosity of a liquid increases when it is heated.",
            answer: false,
            explain: "Heating weakens the effect of intermolecular forces, so the liquid flows more easily: viscosity decreases. (For gases, viscosity rises with temperature.)",
          },
          {
            kind: "mcq",
            q: "Water boils at a lower temperature on a mountain because",
            options: [
              "the external pressure is lower, so the vapour pressure equals it at a lower temperature",
              "the air is colder",
              "surface tension is lower at altitude",
              "the vapour pressure of water is higher on mountains",
            ],
            answer: 0,
            explain: "Boiling happens when vapour pressure equals external pressure; lower air pressure is reached at a lower temperature.",
          },
          {
            kind: "multi",
            q: "Which statements about a gas with Z > 1 at room temperature (like H₂) are true?",
            options: [
              "It is less compressible than an ideal gas.",
              "The effect of molecular volume outweighs attraction.",
              "Its molar volume is smaller than the ideal value at that P and T.",
              "Its attractive forces are stronger than those in an ideal gas would allow.",
            ],
            answers: [0, 1],
            explain: "Z > 1 means V(real) > V(ideal), so the third statement is false. H₂ has very weak attractions (small a), so the molecular-size effect (b) dominates.",
            difficulty: 2,
            hint: "Z = V(real)/V(ideal).",
          },
          {
            kind: "mcq",
            q: "Liquid drops are spherical because",
            options: ["surface tension makes the liquid take the least surface area", "viscosity resists flow", "gravity pulls equally in all directions", "vapour pressure is equal on all sides"],
            answer: 0,
            explain: "For a given volume a sphere has the least surface area, the shape of lowest surface energy.",
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-che-som-exam-edge",
        title: "Exam edge: Gaseous State",
        summary: "What JEE Main, JEE Advanced, NEET, KCET and COMEDK ask about gases: gas-law shortcuts, open-vessel and balloon problems, effusion of mixtures, molecular speeds, compressibility factor and critical constants from van der Waals.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**Who needs this.** States of Matter was dropped from rationalised NCERT, so NEET and KCET (which follow the rationalised books) no longer set separate questions on it, and the current JEE Main syllabus has also trimmed it. It still matters because: (1) **JEE Advanced** lists the gaseous state (gas laws, kinetic theory, Graham's law, Dalton's law, real gases and van der Waals) in its syllabus; (2) PV = nRT and partial pressures are used in thermodynamics, Kp, solutions and mole-concept questions in every exam; (3) ISC Class 11 examines it in full. Check the current year's information bulletin for each exam.

The favourite question types are: ratio problems from the gas laws, gas escaping from an open vessel, Graham's law with mixtures, ratios of molecular speeds, and Z / van der Waals reasoning (which term dominates, critical constants).`,
          },
          {
            type: "table",
            headers: ["Result", "When it is safe to use"],
            rows: [
              [t`Open vessel heated: $n_1T_1 = n_2T_2$; fraction expelled $= 1 - T_1/T_2$`, "P and V fixed (vessel open to air, volume unchanged)"],
              [t`$r \propto \dfrac{P}{\sqrt{M}}$`, "Effusion at the same T but different partial pressures"],
              [t`$u_\text{rms} \propto \sqrt{T/M}$; same speed when $T_1/M_1 = T_2/M_2$`, "Ideal gas behaviour"],
              [t`Low P: $Z \approx 1 + \left(b - \dfrac{a}{RT}\right)\dfrac{P}{RT}$`, "Low pressures; shows Z < 1 below T_B and Z > 1 above T_B"],
              [t`$b = \dfrac{RT_c}{8P_c}$, $a = \dfrac{27R^2T_c^2}{64P_c}$`, "Getting van der Waals constants from critical data"],
            ],
          },
          {
            type: "formula",
            tex: t`\frac{r_1}{r_2} = \frac{P_1}{P_2}\sqrt{\frac{M_2}{M_1}} \qquad \frac{u_1}{u_2} = \sqrt{\frac{T_1 M_2}{T_2 M_1}} \qquad Z_c = \frac{P_cV_c}{RT_c} = \frac{3}{8}`,
            caption: "The three relations behind most gaseous-state MCQs. Real gases have Zc nearer 0.27–0.30, which shows the van der Waals equation is only approximate near the critical point.",
          },
          {
            type: "example",
            title: "KCET / NEET level: open vessel",
            problem: "An open flask contains air at 27 °C. It is heated to 477 °C. What fraction of the air originally present is expelled?",
            steps: [
              "P (atmospheric) and V (the flask) stay fixed, so n ∝ 1/T: n₁T₁ = n₂T₂.",
              "T₁ = 300 K, T₂ = 750 K, so n₂/n₁ = 300/750 = 0.4.",
              "Fraction expelled = 1 − 0.4 = 0.6.",
            ],
            answer: "3/5 (60%) of the air is expelled",
          },
          {
            type: "example",
            title: "JEE Main level: speeds and temperature",
            problem: "At what temperature will the rms speed of SO₂ molecules equal the rms speed of O₂ molecules at 27 °C?",
            steps: [
              t`$u_\text{rms} = \sqrt{3RT/M}$, so equal speeds need $T_1/M_1 = T_2/M_2$.`,
              "T(SO₂)/64 = 300/32.",
              "T(SO₂) = 600 K (327 °C).",
            ],
            answer: "600 K",
          },
          {
            type: "example",
            title: "JEE Main level: effusion of a mixture",
            problem: "A 1 : 1 molar mixture of He and CH₄ is placed in a container with a pinhole. What is the mole ratio He : CH₄ in the gas that first escapes?",
            steps: [
              t`Partial pressures are equal, so $r \propto 1/\sqrt{M}$.`,
              t`$r_\text{He}/r_{\text{CH}_4} = \sqrt{16/4} = 2$.`,
              "The first escaping gas is enriched in the lighter gas.",
            ],
            answer: "He : CH₄ = 2 : 1",
          },
          {
            type: "example",
            title: "JEE Advanced level: van der Waals constants from critical data",
            problem: t`A gas has $T_c$ = 150 K and $P_c$ = 48 atm. Find its van der Waals constants a and b, and the Boyle temperature. (R = 0.0821 L atm mol⁻¹ K⁻¹)`,
            steps: [
              t`From $T_c = 8a/27Rb$ and $P_c = a/27b^2$: dividing gives $T_c/P_c = 8b/R$, so $b = \dfrac{RT_c}{8P_c} = \dfrac{0.0821 \times 150}{8 \times 48} = \dfrac{12.32}{384} = 0.0321$ L mol$^{-1}$.`,
              t`$a = 27P_cb^2 = 27 \times 48 \times (0.0321)^2 = 1296 \times 1.030 \times 10^{-3} = 1.33$ L$^2$ atm mol$^{-2}$ (same as $27R^2T_c^2/64P_c$).`,
              t`$T_B = \dfrac{a}{Rb} = \dfrac{27}{8}T_c = 3.375 \times 150 = 506$ K.`,
            ],
            answer: "b ≈ 0.032 L mol⁻¹, a ≈ 1.33 L² atm mol⁻², T_B ≈ 506 K (these are close to argon's values)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "For a gas at its Boyle temperature, at low pressure",
                options: ["Z ≈ 1 because the a and b effects cancel", "Z < 1 because attraction dominates", "Z > 1 because size dominates", "the gas liquefies"],
                answer: 0,
                explain: "At T_B, b = a/RT, so the bracket (b − a/RT) is zero and Z ≈ 1 over a range of low pressures.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "For Graham's law, the rates are in the ratio of molar masses: H₂ effuses 16 times faster than O₂.",
            right: "Rates are in the inverse ratio of the square roots of molar masses: √(32/2) = 4 times.",
            why: "The 1/√M comes from KE = ½mu² being equal for all gases at the same T, so speed varies as 1/√m.",
          },
          {
            type: "mistake",
            wrong: "When a gas is at constant pressure in a closed balloon that is heated, I can use n₁T₁ = n₂T₂.",
            right: "n₁T₁ = n₂T₂ applies only when both P and V are fixed and gas can leave (an open vessel). A closed balloon keeps n fixed; its volume grows (V/T constant).",
            why: "Students memorise the open-vessel shortcut and apply it whenever T changes. First ask which two of P, V, n are fixed.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "At 0 °C and very low pressure, CO₂ shows Z slightly below 1. Why?",
              emoji: "📉",
              options: [
                "0 °C is below its Boyle temperature, so the a term dominates",
                "CO₂ molecules are large, so the b term dominates",
                "CO₂ has become a liquid",
                "Z is always below 1 for every gas",
              ],
              answer: 0,
              trap: 1,
              explain: "Below T_B, a/RT exceeds b, so the first correction to Z is negative. The size term wins only at high pressure or above T_B.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Before any gas-law ratio, list which of P, V, n, T are fixed.",
              "Open vessel: n ∝ 1/T; fraction expelled = 1 − T₁/T₂.",
              "Graham: rate ∝ P/√M; enrichment favours the lighter gas.",
              "u(rms) ∝ √(T/M); average KE depends only on T.",
              "Critical data give b = RTc/8Pc and a = 27Pc b²; T_B = 27Tc/8 for a van der Waals gas.",
            ],
          },
        ],
        flashcards: [
          { front: "Open-vessel heating shortcut", back: "n₁T₁ = n₂T₂ (P, V fixed); fraction expelled = 1 − T₁/T₂." },
          { front: "Rate of effusion with different pressures", back: "r ∝ P/√M at the same temperature." },
          { front: "Condition for equal rms speeds of two gases", back: "T₁/M₁ = T₂/M₂" },
          { front: "Z at low pressure (van der Waals)", back: "Z ≈ 1 + (b − a/RT)P/RT" },
          { front: "b from critical constants", back: "b = RTc/(8Pc)" },
          { front: "a from critical constants", back: "a = 27R²Tc²/(64Pc) = 27Pc b²" },
          { front: "Boyle temperature vs critical temperature", back: "T_B = a/Rb = (27/8)Tc for a van der Waals gas." },
          { front: "Critical compressibility factor", back: "Zc = PcVc/RTc = 3/8 = 0.375 for a van der Waals gas." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "An open vessel at 27 °C is heated until 25% of the air originally in it escapes. Find the final temperature in kelvin.",
            answer: 400,
            unit: "K",
            explain: "n₂ = 0.75n₁ and n₁T₁ = n₂T₂, so T₂ = 300/0.75 = 400 K.",
            difficulty: 2,
            hint: "If 25% escapes, 75% remains.",
          },
          {
            kind: "mcq",
            q: "The ratio of rms speeds of H₂ at 50 K to O₂ at 800 K is",
            options: ["1 : 1", "1 : 4", "4 : 1", "2 : 1"],
            answer: 0,
            explain: "T/M: 50/2 = 25 and 800/32 = 25, equal, so the speeds are equal.",
            difficulty: 2,
            hint: "Compare T/M for both.",
          },
          {
            kind: "numeric",
            q: "Using the van der Waals result Zc = PcVc/RTc, give the value of Zc to three decimal places.",
            answer: 0.375,
            tolerance: 0.001,
            explain: "Pc = a/27b², Vc = 3b, Tc = 8a/27Rb: PcVc/RTc = (a/27b²)(3b)/(8a/27b) = 3/8 = 0.375.",
            difficulty: 3,
            hint: "Substitute all three expressions and cancel a and b.",
          },
          {
            kind: "multi",
            q: "Which statements are correct for a van der Waals gas?",
            options: [
              "Gases with larger a are liquefied more easily.",
              "At very high pressure every gas has Z > 1.",
              "Above its critical temperature a gas cannot be liquefied by pressure alone.",
              "b equals the actual volume of one mole of molecules.",
            ],
            answers: [0, 1, 2],
            explain: "b is the excluded volume, about four times the actual molecular volume, so the last statement is false.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Equal masses of H₂ and He are mixed. The fraction of the total pressure due to H₂ is",
            options: ["2/3", "1/2", "1/3", "4/5"],
            answer: 0,
            explain: "Take 4 g each: H₂ = 2 mol, He = 1 mol. x(H₂) = 2/3.",
          },
          {
            kind: "numeric",
            q: "A gas X diffuses 1.25 times slower than O₂ under identical conditions. Find the molar mass of X in g mol⁻¹.",
            answer: 50,
            tolerance: 0.1,
            unit: "g mol⁻¹",
            explain: "r(O₂)/r(X) = 1.25 = √(M_X/32), so M_X = 32 × 1.5625 = 50 g mol⁻¹.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "At a given temperature, for which gas is the van der Waals correction 'a' largest?",
            options: ["NH₃", "He", "H₂", "Ne"],
            answer: 0,
            explain: "NH₃ is polar and hydrogen-bonded, with strong attractions; it is the most easily liquefied of these gases.",
          },
          {
            kind: "mcq",
            q: "A gas obeys P(V − nb) = nRT (only the b correction). Its Z is",
            options: ["always greater than 1", "always less than 1", "equal to 1", "less than 1 at low pressure, greater at high"],
            answer: 0,
            explain: "Z = PV/nRT = 1 + Pb/RT, which is greater than 1 for any positive P.",
            difficulty: 3,
            hint: "Rearrange to PV = nRT + nPb.",
          },
        ],
      },
    ],
  },
  /* END-STATES */
];

export const links: Record<string, string | string[]> = {
  "11:States of Matter: Gaseous and Liquid States": "c11-che-states-of-matter",
};
