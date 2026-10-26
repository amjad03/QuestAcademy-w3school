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
  /* ------------------------------------------------------------------ */
  /* s-Block Elements (ISC Class 11)                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-che-s-block",
    title: "s-Block Elements",
    icon: "🧂",
    description: "Group 1 (alkali metals) and Group 2 (alkaline earth metals): electronic configuration, periodic trends, chemical reactivity, solutions in liquid ammonia, the anomalous behaviour of lithium and beryllium, diagonal relationships, important compounds of sodium and calcium, and the biological roles of Na, K, Mg and Ca.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-che-sb-alkali-metals",
        title: "Group 1: The Alkali Metals",
        summary: "Electronic configuration, atomic and ionic size, ionisation enthalpy, hydration enthalpy, physical properties and flame colours, reactions with air, water, hydrogen and halogens, reducing power and solutions in liquid ammonia.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "s-Block Elements was removed from the rationalised NCERT Class 11 book, so CBSE and Karnataka I PUC do not examine it. **ISC Class 11 keeps it.** JEE Advanced still lists alkali and alkaline earth metals and their important compounds.",
          },
          {
            type: "illustration",
            emoji: "🎆",
            caption: "The yellow of a street lamp and the yellow flash when salt falls into a gas flame come from the same sodium atoms. Diwali sparklers use lithium and strontium salts for crimson red and barium salts for green.",
          },
          {
            type: "text",
            md: t`The **s-block** contains Groups 1 and 2, in which the last electron enters an **s orbital**. Group 1 — lithium (Li), sodium (Na), potassium (K), rubidium (Rb), caesium (Cs) and francium (Fr, radioactive) — are the **alkali metals**, because their oxides and hydroxides dissolve in water to give strong alkalis. Their general configuration is **[noble gas] ns¹**.

With just one electron outside a noble-gas core, they lose it easily to form **M⁺** ions. They are never found free in nature; sodium and potassium are abundant (in rock salt, sea water and feldspar), while caesium and rubidium are rare.`,
          },
          {
            type: "table",
            headers: ["Property", "Li", "Na", "K", "Rb", "Cs", "Trend down the group"],
            rows: [
              ["Ionisation enthalpy (kJ mol⁻¹)", "520", "496", "419", "403", "376", "decreases (larger atoms)"],
              ["Hydration enthalpy of M⁺ (kJ mol⁻¹)", "506", "406", "330", "310", "276", "decreases (larger ions)"],
              ["Melting point (K)", "454", "371", "336", "312", "302", "decreases (weaker metallic bonding)"],
              [t`$E^\circ$ M⁺/M (V)`, "−3.04", "−2.71", "−2.93", "−2.93", "−2.93", "Li most negative"],
              ["Flame colour", "crimson red", "yellow", "violet (lilac)", "red-violet", "blue", "—"],
            ],
          },
          {
            type: "text",
            md: t`**Physical properties.** The alkali metals are silvery white, soft (they can be cut with a knife) and light; Li, Na and K are less dense than water. Their metallic bonding is weak because each atom gives only one electron to the "sea", so melting points are low. Density generally increases down the group, but potassium is lighter than sodium.

**Flame colours.** The heat of a flame excites the outer electron to a higher level; when it falls back, visible light of a definite wavelength is emitted. Because of this, alkali metals can be detected by **flame tests** and measured by **flame photometry**. Caesium and potassium lose electrons when light falls on them, so they are used in **photoelectric cells**.

**Hydration.** Small ions attract water molecules strongly. Li⁺ has the highest hydration enthalpy, so it carries the largest shell of water: in aqueous solution hydrated Li⁺ is the **largest** ion and moves the **slowest**. Lithium salts are often hydrated (LiCl·2H₂O), while sodium and potassium salts are usually anhydrous.`,
          },
          {
            type: "text",
            md: t`**Chemical properties.** Reactivity increases down the group as ionisation enthalpy falls.

- **With air:** they tarnish quickly and are stored under kerosene. On burning in excess air, lithium gives mainly the **monoxide** Li₂O, sodium the **peroxide** Na₂O₂, and K, Rb, Cs the **superoxides** MO₂. The large cations stabilise the large peroxide (O₂²⁻) and superoxide (O₂⁻) anions. Superoxides are paramagnetic and coloured (O₂⁻ has one unpaired electron); oxides and peroxides are colourless and diamagnetic.
- **With water:** they give hydroxide and hydrogen. Lithium has the most negative E° but reacts **less vigorously** than sodium; NCERT relates this to its small size and very high hydration enthalpy. Potassium reacts so fast that the hydrogen catches fire.
- **With hydrogen:** on heating they form ionic, high-melting hydrides **M⁺H⁻**.
- **With halogens:** ionic halides M⁺X⁻; lithium halides are somewhat covalent because the small Li⁺ ion polarises the anion.
- **Reducing power:** all are strong reducing agents; Li is the strongest **in water**, because its large hydration enthalpy outweighs its high ionisation enthalpy.`,
          },
          {
            type: "formula",
            tex: t`\begin{aligned} 4\text{Li} + \text{O}_2 &\to 2\text{Li}_2\text{O} \\ 2\text{Na} + \text{O}_2 &\to \text{Na}_2\text{O}_2 \\ \text{K} + \text{O}_2 &\to \text{KO}_2 \\ 2\text{M} + 2\text{H}_2\text{O} &\to 2\text{MOH} + \text{H}_2 \end{aligned}`,
            caption: "Burning in excess air, and the reaction with water. All equations balanced.",
          },
          {
            type: "example",
            title: "Why is Li the strongest reducing agent in water?",
            problem: "Lithium has the highest ionisation enthalpy in Group 1, yet the most negative standard electrode potential. Explain using an energy cycle.",
            steps: [
              "Converting M(s) to M⁺(aq) involves three steps: sublimation (energy taken in), ionisation (energy taken in) and hydration (energy released).",
              "Li needs more energy for sublimation and ionisation than the other metals.",
              "But Li⁺ is so small that its hydration enthalpy (about 506 kJ mol⁻¹) is far larger, and this more than repays the extra cost.",
              "The overall change M(s) → M⁺(aq) is therefore most favourable for Li, giving E° = −3.04 V.",
            ],
            answer: "The very large hydration enthalpy of the small Li⁺ ion makes Li the strongest reducing agent in aqueous solution.",
          },
          {
            type: "text",
            md: t`**Solutions in liquid ammonia.** Alkali metals dissolve in liquid ammonia to give **deep blue** solutions that conduct electricity:

$\text{M} + (x + y)\text{NH}_3 \to [\text{M(NH}_3)_x]^+ + [e(\text{NH}_3)_y]^-$

The blue colour is due to the **ammoniated electron**, which absorbs in the red region of visible light. Dilute solutions are **paramagnetic** (unpaired solvated electrons). On standing they slowly release hydrogen, forming the amide: $\text{M}^+ + e^- + \text{NH}_3 \to \text{MNH}_2 + \tfrac{1}{2}\text{H}_2$. In concentrated solutions the colour changes to **bronze** and the solution becomes **diamagnetic** (electrons pair up and metal-ion clusters form).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which alkali metal ion has the lowest ionic mobility in aqueous solution?",
                options: ["Li⁺", "Na⁺", "K⁺", "Cs⁺"],
                answer: 0,
                explain: "Li⁺ is most strongly hydrated; the hydrated ion is the largest and moves slowest.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Li⁺ is the smallest alkali metal ion, so it must move fastest through water and conduct best.",
            right: "The bare Li⁺ ion is smallest, but in water it carries the largest shell of water molecules. Hydrated Li⁺ is the biggest ion and has the lowest mobility; mobility order is Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺.",
            why: "It is natural to picture the bare ion. In solution the ion drags its hydration shell along, and the smallest ion grips water most tightly.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each metal to the main product when it burns in excess air.",
              pairs: [
                ["Lithium", "Li₂O (monoxide)"],
                ["Sodium", "Na₂O₂ (peroxide)"],
                ["Potassium", "KO₂ (superoxide)"],
                ["Caesium", "CsO₂ (superoxide)"],
              ],
              explain: "Bigger cations form stable lattices with bigger anions: Li⁺ fits O²⁻, Na⁺ fits O₂²⁻, and K⁺, Rb⁺, Cs⁺ fit O₂⁻.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ISC exam tips",
            md: "'Give reasons' questions dominate this chapter: Li is the strongest reducing agent; alkali metals are stored in kerosene; K and Cs are used in photoelectric cells; the blue colour of ammonia solutions. Answer each in one cause-and-effect sentence that names the property (size, ionisation enthalpy, hydration enthalpy).",
          },
          {
            type: "keypoints",
            items: [
              "Group 1 configuration ns¹; they form M⁺ ions and are strongly electropositive.",
              "Down the group: size increases, ionisation enthalpy, hydration enthalpy and melting point decrease.",
              "In excess air: Li → Li₂O, Na → Na₂O₂, K/Rb/Cs → MO₂ (superoxide).",
              "Li is the strongest reducing agent in water because of its very high hydration enthalpy.",
              "Solutions in liquid NH₃ are blue, conducting and paramagnetic (ammoniated electrons); concentrated ones are bronze and diamagnetic.",
            ],
          },
        ],
        flashcards: [
          { front: "General configuration of alkali metals", back: "[noble gas] ns¹" },
          { front: "Flame colours of Li, Na, K", back: "Li crimson red, Na yellow, K violet (lilac)." },
          { front: "Product of burning Na in excess air", back: "Sodium peroxide, Na₂O₂" },
          { front: "Why are superoxides paramagnetic?", back: "The O₂⁻ ion has one unpaired electron." },
          { front: "Strongest reducing agent among alkali metals in water", back: "Lithium (E° = −3.04 V), because of its very high hydration enthalpy." },
          { front: "Cause of blue colour of Na in liquid NH₃", back: "Ammoniated (solvated) electrons absorbing red light." },
          { front: "Why are alkali metals kept under kerosene?", back: "They react quickly with oxygen and moisture in air; kerosene keeps air out." },
          { front: "Ionic mobility order in water", back: "Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺ (hydrated Li⁺ is largest)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which alkali metal has the lowest melting point among Li, Na, K and Cs?",
            options: ["Cs", "Li", "Na", "K"],
            answer: 0,
            explain: "Metallic bonding weakens as atoms get bigger, so melting point falls down the group; Cs melts at about 302 K.",
          },
          {
            kind: "mcq",
            q: "Potassium superoxide reacts with water to give",
            options: ["KOH, H₂O₂ and O₂", "KOH and H₂", "K₂O and O₂", "KOH only"],
            answer: 0,
            explain: "2KO₂ + 2H₂O → 2KOH + H₂O₂ + O₂.",
            difficulty: 2,
            hint: "A superoxide gives both peroxide and oxygen with water.",
          },
          {
            kind: "truefalse",
            q: "Lithium reacts with water more vigorously than sodium because its standard electrode potential is more negative.",
            answer: false,
            explain: "Despite the more negative E°, lithium reacts less vigorously than sodium. E° measures how favourable the change is, not how fast it happens.",
          },
          {
            kind: "multi",
            q: "Which statements about a dilute solution of sodium in liquid ammonia are correct?",
            options: ["It is blue.", "It conducts electricity.", "It is paramagnetic.", "It is bronze and diamagnetic."],
            answers: [0, 1, 2],
            explain: "Bronze colour and diamagnetism are seen only in concentrated solutions.",
          },
          {
            kind: "mcq",
            q: "The hydride formed when sodium is heated in hydrogen is",
            options: ["ionic, Na⁺H⁻", "covalent, like CH₄", "metallic (interstitial)", "a polymer"],
            answer: 0,
            explain: "Alkali metals form saline (ionic) hydrides containing the H⁻ ion.",
          },
          {
            kind: "mcq",
            q: "Caesium is used in photoelectric cells because it",
            options: ["has the lowest ionisation enthalpy, so light can remove its electron", "has the highest melting point", "is the most abundant alkali metal", "forms a superoxide"],
            answer: 0,
            explain: "Cs holds its outer electron so weakly that visible light can eject it.",
          },
          {
            kind: "order",
            q: "Arrange in increasing order of hydration enthalpy (magnitude).",
            items: ["Cs⁺", "Rb⁺", "K⁺", "Na⁺", "Li⁺"],
            explain: "Smaller ions attract water more strongly, so hydration enthalpy rises from Cs⁺ to Li⁺.",
          },
        ],
      },
      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-che-sb-lithium-sodium-compounds",
        title: "Lithium's Anomalies and Compounds of Sodium",
        summary: "General features of alkali metal compounds, how lithium differs from the rest of Group 1, its diagonal relationship with magnesium, the preparation and uses of sodium carbonate, sodium chloride, sodium hydroxide and sodium hydrogencarbonate, and the biological importance of sodium and potassium.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🍞",
            caption: "The baking soda that makes a dhokla fluffy, the washing soda in a dhobi's bucket and the caustic soda used to make soap are all sodium compounds, made in huge amounts from common salt.",
          },
          {
            type: "text",
            md: t`**General compounds of alkali metals.** Their **oxides** react with water to give strong bases: $\text{M}_2\text{O} + \text{H}_2\text{O} \to 2\text{MOH}$; peroxides give hydrogen peroxide: $\text{M}_2\text{O}_2 + 2\text{H}_2\text{O} \to 2\text{MOH} + \text{H}_2\text{O}_2$. The **hydroxides** are white crystalline solids, strongly basic, dissolving in water with much heat; basic strength increases down the group.

**Halides** MX are high-melting ionic solids. For one metal, melting point falls F⁻ > Cl⁻ > Br⁻ > I⁻. LiF has low solubility in water (very high lattice enthalpy) and CsI also has low solubility (small hydration enthalpy of both ions).

**Salts of oxo-acids:** carbonates and hydrogencarbonates of Na, K, Rb and Cs are very stable to heat, and their thermal stability and solubility increase down the group. Li₂CO₃ is the exception: it decomposes on heating.`,
          },
          {
            type: "text",
            md: t`**Anomalous behaviour of lithium.** Lithium differs from the rest of Group 1 because of its **exceptionally small atom and ion** and its **high polarising power** (charge/size ratio).

1. Lithium is much harder, with higher melting and boiling points.
2. It is the least reactive alkali metal but the strongest reducing agent in water.
3. On burning in air it forms mainly Li₂O, and also the **nitride Li₃N** (no other alkali metal reacts directly with N₂).
4. LiCl is deliquescent and crystallises as LiCl·2H₂O; the other chlorides are anhydrous.
5. LiHCO₃ is not obtained as a solid, whereas the other hydrogencarbonates are solids.
6. Li₂CO₃ and LiNO₃ decompose on heating to Li₂O; other nitrates give nitrites.
7. LiF and Li₂O are much less soluble in water than the corresponding compounds of other alkali metals.
8. Lithium does not form an ethynide (acetylide) with ethyne, unlike sodium.`,
          },
          {
            type: "formula",
            tex: t`4\text{LiNO}_3 \xrightarrow{\Delta} 2\text{Li}_2\text{O} + 4\text{NO}_2 + \text{O}_2 \qquad 2\text{NaNO}_3 \xrightarrow{\Delta} 2\text{NaNO}_2 + \text{O}_2`,
            caption: "Lithium nitrate behaves like the Group 2 nitrates, not like sodium nitrate.",
          },
          {
            type: "text",
            md: "**Diagonal relationship of Li with Mg.** Lithium resembles magnesium (one period down, one group right) because their ions have similar sizes (Li⁺ 76 pm, Mg²⁺ 72 pm) and similar polarising power. Both metals are harder and lighter than their group members; LiOH and Mg(OH)₂ are weak bases that decompose on heating; both form nitrides (Li₃N, Mg₃N₂) by direct combination; neither forms a superoxide; their carbonates decompose to oxides and CO₂; neither forms a solid hydrogencarbonate; LiCl and MgCl₂ are deliquescent, crystallise as hydrates (LiCl·2H₂O, MgCl₂·8H₂O) and dissolve in ethanol.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "multi",
                q: "In which ways does lithium resemble magnesium?",
                options: ["Both form nitrides by direct combination with N₂.", "Their carbonates decompose on heating.", "Both form superoxides when burnt.", "Their chlorides dissolve in ethanol."],
                answers: [0, 1, 3],
                explain: "Neither Li nor Mg forms a superoxide; Li gives Li₂O and Mg gives MgO.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Sodium carbonate (washing soda, Na₂CO₃·10H₂O)** is made by the **Solvay (ammonia–soda) process**. Brine saturated with ammonia is treated with CO₂. Sodium hydrogencarbonate, which is only sparingly soluble in this solution, crystallises out and is heated to give the carbonate. Ammonia is recovered by heating the NH₄Cl solution with slaked lime, so the process is economical.

Washing soda effloresces (loses water) in air; on heating it loses water to form the monohydrate, and above 373 K it becomes anhydrous **soda ash**. Its aqueous solution is alkaline because the carbonate ion is hydrolysed. Uses: water softening, laundry, manufacture of glass, soap, borax and caustic soda, and as a laboratory reagent.

**Potassium carbonate cannot be made this way**, because KHCO₃ is too soluble to crystallise out.`,
          },
          {
            type: "formula",
            tex: t`\begin{aligned} \text{NH}_3 + \text{H}_2\text{O} + \text{CO}_2 &\to \text{NH}_4\text{HCO}_3 \\ \text{NaCl} + \text{NH}_4\text{HCO}_3 &\to \text{NaHCO}_3\downarrow + \text{NH}_4\text{Cl} \\ 2\text{NaHCO}_3 &\xrightarrow{\Delta} \text{Na}_2\text{CO}_3 + \text{CO}_2 + \text{H}_2\text{O} \\ 2\text{NH}_4\text{Cl} + \text{Ca(OH)}_2 &\to 2\text{NH}_3 + \text{CaCl}_2 + 2\text{H}_2\text{O} \end{aligned}`,
            caption: "Solvay process. CO₂ comes from heating limestone (CaCO₃ → CaO + CO₂); the CaO is slaked to give the Ca(OH)₂. The only by-product is CaCl₂.",
          },
          {
            type: "example",
            title: "Yield in the Solvay process",
            problem: "What is the maximum mass of anhydrous Na₂CO₃ that can be obtained from 117 g of NaCl by the Solvay process? (Na = 23, Cl = 35.5, C = 12, O = 16)",
            steps: [
              "Moles of NaCl = 117/58.5 = 2.0 mol.",
              "Each NaCl gives one NaHCO₃, so 2.0 mol NaHCO₃ forms.",
              "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O, so 2.0 mol NaHCO₃ gives 1.0 mol Na₂CO₃.",
              "Mass = 1.0 × 106 = 106 g.",
            ],
            answer: "106 g of Na₂CO₃",
          },
          {
            type: "table",
            headers: ["Compound", "How it is obtained", "Key properties and uses"],
            rows: [
              ["Sodium chloride, NaCl", "Evaporation of sea water (about 2.7–2.9% salt by mass). Crude salt contains CaSO₄, CaCl₂ and MgCl₂; pure NaCl crystallises when HCl gas is passed into its saturated solution (common-ion effect).", "Melts at 1081 K; table salt; raw material for Na₂CO₃, NaOH and Cl₂."],
              ["Sodium hydroxide (caustic soda), NaOH", "Electrolysis of brine in the **Castner–Kellner cell**: mercury cathode, carbon anode. Na forms an amalgam with Hg, which reacts with water to give NaOH and H₂; Cl₂ is released at the anode.", "White, translucent, deliquescent solid (m.p. 591 K); absorbs CO₂ from air to form Na₂CO₃. Used for soap, paper, rayon, petroleum refining and purifying bauxite."],
              ["Sodium hydrogencarbonate (baking soda), NaHCO₃", t`Saturate Na$_2$CO$_3$ solution with CO$_2$: Na$_2$CO$_3$ + H$_2$O + CO$_2$ → 2NaHCO$_3$.`, "Releases CO₂ on heating, so it makes dough rise; mild antiseptic for skin infections; used in fire extinguishers and as an antacid."],
            ],
          },
          {
            type: "formula",
            tex: t`\begin{aligned} \text{Cathode: } &\text{Na}^+ + e^- \xrightarrow{\text{Hg}} \text{Na-amalgam} \\ \text{Anode: } &\text{Cl}^- \to \tfrac{1}{2}\text{Cl}_2 + e^- \\ &2\text{Na-amalgam} + 2\text{H}_2\text{O} \to 2\text{NaOH} + 2\text{Hg} + \text{H}_2 \end{aligned}`,
            caption: "Castner–Kellner cell. Using a mercury cathode stops Na⁺ ions being reduced to H₂ instead; the amalgam is removed and decomposed with water separately.",
          },
          {
            type: "mistake",
            wrong: "Potassium carbonate can also be made by the Solvay process, using KCl instead of NaCl.",
            right: "The Solvay process works only because NaHCO₃ is sparingly soluble and crystallises out. KHCO₃ is much more soluble, so it does not precipitate and K₂CO₃ cannot be made this way.",
            why: "Na and K usually behave alike, so learners extend the process. The key step is a precipitation, which depends on solubility, and that is where Na and K differ.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the Solvay process in order.",
              items: [
                "Saturate brine with ammonia",
                "Pass CO₂ to form NH₄HCO₃",
                "NaHCO₃ crystallises and is filtered",
                "Heat NaHCO₃ to give Na₂CO₃",
                "Heat NH₄Cl with Ca(OH)₂ to recover NH₃",
              ],
              explain: "Ammonia and CO₂ are recycled; only NaCl and limestone are consumed, and CaCl₂ is the by-product.",
            },
          },
          {
            type: "text",
            md: "**Biological importance of Na and K.** A 70 kg adult contains about 90 g of sodium and 170 g of potassium. **Na⁺** ions are mainly outside cells (in blood plasma and the fluid around cells) and take part in nerve-signal transmission, water balance and the transport of sugars and amino acids into cells. **K⁺** ions are the main cations **inside** cells, where they activate many enzymes and help oxidise glucose to make ATP. The difference in concentration across the cell membrane is kept up by the **sodium–potassium pump**, which uses energy from ATP.",
          },
          {
            type: "keypoints",
            items: [
              "Lithium's anomalies come from its very small size and high polarising power; it resembles magnesium diagonally.",
              "Li₂CO₃ and LiNO₃ decompose to Li₂O; LiHCO₃ is not known as a solid; Li alone forms Li₃N.",
              "Solvay process: NaHCO₃ precipitates from ammoniated brine + CO₂, then is heated to Na₂CO₃; it cannot make K₂CO₃.",
              "NaOH is made in the Castner–Kellner cell with a mercury cathode.",
              "Na⁺ is mainly outside cells and K⁺ inside; the Na–K pump keeps the difference.",
            ],
          },
        ],
        flashcards: [
          { front: "Why is lithium anomalous in Group 1?", back: "Its atom and ion are exceptionally small, giving high polarising power and high ionisation enthalpy." },
          { front: "Diagonal partner of lithium", back: "Magnesium (similar ionic size and polarising power)." },
          { front: "Product of heating LiNO₃", back: "Li₂O, NO₂ and O₂ (other alkali nitrates give nitrite + O₂)." },
          { front: "Formula of washing soda", back: "Na₂CO₃·10H₂O" },
          { front: "Why can't K₂CO₃ be made by the Solvay process?", back: "KHCO₃ is too soluble to crystallise out of the solution." },
          { front: "By-product of the Solvay process", back: "Calcium chloride, CaCl₂" },
          { front: "Cathode in the Castner–Kellner cell", back: "Mercury; sodium forms an amalgam that is later decomposed with water." },
          { front: "Ions mainly inside and outside body cells", back: "K⁺ inside, Na⁺ outside; maintained by the Na–K pump." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which alkali metal combines directly with nitrogen?",
            options: ["Li", "Na", "K", "Cs"],
            answer: 0,
            explain: "6Li + N₂ → 2Li₃N. This is one of lithium's anomalous properties, shared with magnesium.",
          },
          {
            kind: "mcq",
            q: "An aqueous solution of sodium carbonate is",
            options: ["alkaline, because CO₃²⁻ is hydrolysed", "neutral, because it is a salt", "acidic, because CO₂ dissolves", "neutral, because Na⁺ is a spectator"],
            answer: 0,
            explain: "CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻; the OH⁻ makes the solution alkaline. (Na⁺ is indeed a spectator, but carbonate is not.)",
          },
          {
            kind: "numeric",
            q: "How many grams of NaHCO₃ must be heated to produce 2.2 g of CO₂? (Na = 23, H = 1, C = 12, O = 16)",
            answer: 8.4,
            tolerance: 0.05,
            unit: "g",
            explain: "2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O. 2.2 g CO₂ = 0.05 mol, so 0.10 mol NaHCO₃ = 0.10 × 84 = 8.4 g.",
            difficulty: 2,
            hint: "Two moles of NaHCO₃ give one mole of CO₂.",
          },
          {
            kind: "truefalse",
            q: "Pure sodium chloride can be crystallised from its saturated solution by passing HCl gas through it.",
            answer: true,
            explain: "The extra Cl⁻ ions (common-ion effect) push the solubility equilibrium back so that NaCl crystallises.",
          },
          {
            kind: "mcq",
            q: "Which is the correct reason for using a mercury cathode in the Castner–Kellner cell?",
            options: [
              "Sodium dissolves in mercury as an amalgam instead of H₂ being released at the cathode",
              "Mercury is a cheap metal",
              "Mercury reacts with chlorine to remove it",
              "Mercury makes NaOH insoluble",
            ],
            answer: 0,
            explain: "On mercury, Na⁺ is discharged as an amalgam (hydrogen evolution is suppressed on Hg); the amalgam then reacts with water in a separate chamber.",
          },
          {
            kind: "multi",
            q: "Which of these are anomalous properties of lithium compared with sodium?",
            options: ["LiCl crystallises as a hydrate", "LiHCO₃ is not known as a solid", "Li₂CO₃ decomposes on heating", "LiOH is a strong base that is stable to heat"],
            answers: [0, 1, 2],
            explain: "LiOH is a weaker base than NaOH and decomposes on strong heating to Li₂O, like Mg(OH)₂.",
          },
          {
            kind: "mcq",
            q: "The main cation inside body cells, which activates many enzymes, is",
            options: ["K⁺", "Na⁺", "Ca²⁺", "Mg²⁺"],
            answer: 0,
            explain: "K⁺ is the most abundant cation inside cells; Na⁺ is outside.",
          },
        ],
      },
      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-che-sb-alkaline-earth",
        title: "Group 2: The Alkaline Earth Metals and Calcium Compounds",
        summary: "Trends in Group 2, reactions with air, water, hydrogen and acids, trends in solubility and thermal stability of their compounds, the anomalous behaviour of beryllium and its diagonal relationship with aluminium, important calcium compounds including plaster of Paris and cement, and the biological roles of Mg and Ca.",
        minutes: 25,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏛️",
            caption: "The marble of the Taj Mahal, the chalk on a blackboard, the plaster cast on a broken arm and the cement in every building in India are all calcium compounds.",
          },
          {
            type: "text",
            md: t`Group 2 contains beryllium (Be), magnesium (Mg), calcium (Ca), strontium (Sr), barium (Ba) and radium (Ra, radioactive). They are called **alkaline earth metals** because their oxides and hydroxides are alkaline and are found in the earth's crust. The general configuration is **[noble gas] ns²**; they form **M²⁺** ions.

Compared with Group 1 neighbours, their atoms are smaller (greater nuclear charge), their first ionisation enthalpies are higher, and their metallic bonding is stronger (two electrons per atom), so they are harder and have higher melting points. Their **second** ionisation enthalpy is smaller than the second ionisation enthalpy of the Group 1 metals, because it removes an outer electron, not one from a noble-gas core. The high hydration and lattice enthalpies of the small, doubly charged M²⁺ ions more than pay for the energy needed to remove two electrons, so the compounds are ionic and contain M²⁺ (not M⁺).`,
          },
          {
            type: "table",
            headers: ["Property", "Be", "Mg", "Ca", "Sr", "Ba"],
            rows: [
              ["First ionisation enthalpy (kJ mol⁻¹)", "899", "737", "590", "549", "503"],
              ["Hydration enthalpy of M²⁺ (kJ mol⁻¹)", "2494", "1921", "1577", "1443", "1305"],
              [t`$E^\circ$ M²⁺/M (V)`, "−1.97", "−2.36", "−2.84", "−2.89", "−2.92"],
              ["Flame colour", "none", "none", "brick red", "crimson", "apple green"],
            ],
          },
          {
            type: "text",
            md: t`Be and Mg give no flame colour: their electrons are held too tightly for a flame to excite them.

**Chemical properties.** Reactivity increases down the group.

- **Air and water:** Be and Mg are kinetically inert because a thin oxide film forms on them. Powdered Be burns in air to BeO and Be₃N₂; Mg burns with a dazzling white light to MgO and Mg₃N₂. Mg reacts with hot water; Ca, Sr and Ba react with cold water to give the hydroxide and hydrogen.
- **Halogens:** all form MX₂ on heating. BeF₂ is best made by heating (NH₄)₂BeF₄.
- **Hydrogen:** all except Be form hydrides MH₂ on heating; BeH₂ is made indirectly: $2\text{BeCl}_2 + \text{LiAlH}_4 \to 2\text{BeH}_2 + \text{LiCl} + \text{AlCl}_3$.
- **Acids:** they react to release hydrogen: $\text{M} + 2\text{HCl} \to \text{MCl}_2 + \text{H}_2$.
- **Reducing nature:** strong reducing agents, though weaker than the alkali metals. Beryllium's E° is less negative than expected because of its large ionisation enthalpy and sublimation enthalpy.
- **Liquid ammonia:** like the alkali metals they dissolve to give deep blue-black solutions containing ammoniated electrons.`,
          },
          {
            type: "table",
            headers: ["Compound type", "Trend down the group", "Reason"],
            rows: [
              ["Hydroxides M(OH)₂: solubility and basic strength", "increase (Be(OH)₂ amphoteric, Ba(OH)₂ strongly basic)", "lattice enthalpy falls faster than hydration enthalpy"],
              ["Carbonates MCO₃: solubility", "decrease", "hydration enthalpy of M²⁺ falls faster than lattice enthalpy (large anion)"],
              ["Carbonates MCO₃: thermal stability", "increase (BeCO₃ is unstable; kept only under CO₂)", "small cations polarise and destabilise the large CO₃²⁻ ion"],
              ["Sulphates MSO₄: solubility", "decrease (BeSO₄, MgSO₄ soluble; CaSO₄ sparingly; BaSO₄ insoluble)", "very high hydration enthalpies of Be²⁺ and Mg²⁺ outweigh the lattice enthalpy"],
              ["Nitrates: on heating", t`all give oxide: 2M(NO$_3$)$_2$ → 2MO + 4NO$_2$ + O$_2$`, "same as LiNO₃"],
            ],
          },
          {
            type: "text",
            md: "**Anomalous behaviour of beryllium.** Beryllium's exceptionally small atom and ion, high ionisation enthalpy and high polarising power make its compounds largely **covalent** and easily hydrolysed. Having no d orbitals in its valence shell, it shows a **maximum covalency of 4**, whereas the other members can reach 6. Its oxide and hydroxide are **amphoteric**. BeCl₂ is a chain polymer in the solid; in the vapour it is a chloride-bridged dimer, which breaks into linear monomers above about 1200 K.\n\n**Diagonal relationship of Be with Al.** Be(OH)₂ and Al(OH)₃ are both amphoteric, dissolving in excess alkali (Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻). Both metals are protected from acids by an oxide film; both chlorides have bridged structures in the vapour, dissolve in organic solvents and are strong Lewis acids (used as Friedel–Crafts catalysts); and both ions form complexes such as [BeF₄]²⁻ and [AlF₆]³⁻.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which sulphate is most soluble in water?",
                options: ["BeSO₄", "CaSO₄", "SrSO₄", "BaSO₄"],
                answer: 0,
                explain: "Be²⁺ has the largest hydration enthalpy, which outweighs the lattice enthalpy. BaSO₄ is so insoluble that it is used in barium-meal X-rays.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Calcium compound", "Preparation", "Properties and uses"],
            rows: [
              ["Quicklime, CaO", "Heat limestone at 1070–1270 K: CaCO₃ ⇌ CaO + CO₂, removing CO₂ as it forms", "White, amorphous, m.p. 2870 K; basic oxide: CaO + SiO₂ → CaSiO₃, 6CaO + P₄O₁₀ → 2Ca₃(PO₄)₂. Used in cement, NaOH manufacture, purifying sugar, dyestuffs."],
              ["Slaked lime, Ca(OH)₂", "Add water to quicklime: CaO + H₂O → Ca(OH)₂ (slaking)", "Lime water turns milky with CO₂ (CaCO₃ forms) and clears with excess CO₂ (soluble Ca(HCO₃)₂). Milk of lime + Cl₂ gives bleaching powder. Used in mortar, whitewash, glass-making, tanning, as a disinfectant."],
              ["Calcium carbonate, CaCO₃", "Occurs as limestone, chalk, marble; made by passing CO₂ into slaked lime, or Na₂CO₃ + CaCl₂ → CaCO₃ + 2NaCl", "Decomposes to CaO and CO₂ at about 1200 K; releases CO₂ with dilute acids. Marble for building, flux in iron extraction, antacid, toothpaste, chewing gum filler."],
              ["Plaster of Paris, CaSO₄·½H₂O", "Heat gypsum at 393 K: 2(CaSO₄·2H₂O) → 2(CaSO₄)·H₂O + 3H₂O", "Mixed with water it sets to a hard mass of gypsum within minutes. Above 393 K anhydrous CaSO₄ forms (dead burnt plaster), which does not set. Used for casts on fractures, statues, dentistry, decorative work."],
            ],
          },
          {
            type: "formula",
            tex: t`\begin{aligned} \text{Ca(OH)}_2 + \text{CO}_2 &\to \text{CaCO}_3\downarrow + \text{H}_2\text{O} \\ \text{CaCO}_3 + \text{CO}_2 + \text{H}_2\text{O} &\to \text{Ca(HCO}_3)_2 \\ 2\text{Ca(OH)}_2 + 2\text{Cl}_2 &\to \text{CaCl}_2 + \text{Ca(OCl)}_2 + 2\text{H}_2\text{O} \end{aligned}`,
            caption: "The lime-water test for CO₂, and the formation of bleaching powder (the active part is calcium hypochlorite).",
          },
          {
            type: "text",
            md: "**Cement (Portland cement)** is made by heating limestone with clay (which supplies SiO₂, Al₂O₃ and Fe₂O₃) to give **clinker**, then grinding it with 2–3% gypsum to slow down setting. A typical composition is CaO 50–60%, SiO₂ 20–25%, Al₂O₃ 5–10%, MgO 2–3%, Fe₂O₃ 1–2% and SO₃ 1–2%. For good quality the ratio of SiO₂ to (Al₂O₃ + Fe₂O₃) should be between 2.5 and 4, and the ratio of CaO to (SiO₂ + Al₂O₃ + Fe₂O₃) close to 2. The main constituents of clinker are tricalcium silicate Ca₃SiO₅ (about 51%), dicalcium silicate Ca₂SiO₄ (26%) and tricalcium aluminate Ca₃Al₂O₆ (11%). Setting is due to hydration of these silicates and aluminates, which link into a hard network.\n\n**Biological importance of Mg and Ca.** An adult body has about 25 g of Mg and 1200 g of Ca. Enzymes that use ATP need Mg²⁺, and chlorophyll contains magnesium. About 99% of the body's calcium is in bones and teeth; Ca²⁺ is also needed for nerve and muscle function, blood clotting and membranes. Plasma calcium is held near 100 mg L⁻¹ by the hormones calcitonin and parathyroid hormone.",
          },
          {
            type: "example",
            title: "Water lost when making plaster of Paris",
            problem: "What percentage of the mass of gypsum (CaSO₄·2H₂O) is lost when it is converted completely into plaster of Paris? (Ca = 40, S = 32, O = 16, H = 1)",
            steps: [
              "Molar mass of CaSO₄·2H₂O = 136 + 36 = 172 g mol⁻¹, so 2 mol = 344 g.",
              "2(CaSO₄·2H₂O) → 2(CaSO₄)·H₂O + 3H₂O; the water lost is 3 × 18 = 54 g.",
              "Percentage loss = 54/344 × 100 = 15.7%.",
            ],
            answer: "About 15.7% of the mass is lost",
          },
          {
            type: "mistake",
            wrong: "Like the hydroxides, the sulphates of Group 2 become more soluble down the group.",
            right: "The trends are opposite: hydroxides become more soluble down the group, but sulphates (and carbonates) become less soluble. BeSO₄ is very soluble; BaSO₄ is almost insoluble.",
            why: "For a small anion like OH⁻ the lattice enthalpy falls quickly as the cation grows. For a large anion like SO₄²⁻ the lattice enthalpy hardly changes, so the falling hydration enthalpy decides the trend.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which way does each property change down Group 2?",
              groups: ["Increases down the group", "Decreases down the group"],
              items: [
                { text: "Solubility of hydroxides", group: 0, hint: "Ba(OH)₂ is fairly soluble; Mg(OH)₂ is milk of magnesia, a suspension." },
                { text: "Solubility of sulphates", group: 1, hint: "BaSO₄ is used in barium meals because it does not dissolve." },
                { text: "Thermal stability of carbonates", group: 0, hint: "Bigger cations polarise CO₃²⁻ less." },
                { text: "First ionisation enthalpy", group: 1, hint: "Outer electrons are further from the nucleus." },
                { text: "Basic strength of hydroxides", group: 0, hint: "Be(OH)₂ is amphoteric; Ba(OH)₂ is a strong base." },
                { text: "Hydration enthalpy of M²⁺", group: 1, hint: "Larger ions attract water less." },
              ],
              explain: "Size governs everything here: as M²⁺ grows, hydration enthalpy and polarising power fall, and lattice enthalpy falls most for small anions.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Group 2 configuration ns²; they form M²⁺; harder and less reactive than Group 1.",
              "Ca, Sr and Ba give brick red, crimson and apple green flames; Be and Mg give none.",
              "Down the group: hydroxide solubility and basicity rise; sulphate and carbonate solubility fall; carbonate stability rises.",
              "Be is anomalous (covalent compounds, maximum covalency 4, amphoteric oxide) and resembles Al diagonally.",
              "Gypsum at 393 K gives plaster of Paris CaSO₄·½H₂O; cement clinker is mainly calcium silicates and aluminate.",
            ],
          },
        ],
        flashcards: [
          { front: "General configuration of Group 2", back: "[noble gas] ns²" },
          { front: "Flame colours of Ca, Sr, Ba", back: "Brick red, crimson, apple green." },
          { front: "Why do Be and Mg not colour a flame?", back: "Their electrons are too strongly bound to be excited by the flame." },
          { front: "Maximum covalency of Be", back: "4 (no d orbitals in its valence shell)." },
          { front: "Diagonal partner of beryllium", back: "Aluminium" },
          { front: "Formula of plaster of Paris", back: "CaSO₄·½H₂O, made by heating gypsum at 393 K." },
          { front: "Dead burnt plaster", back: "Anhydrous CaSO₄, formed above 393 K; it does not set with water." },
          { front: "Why is gypsum added to cement clinker?", back: "To slow down the setting of cement." },
          { front: "Lime water with excess CO₂", back: "Milkiness (CaCO₃) disappears as soluble Ca(HCO₃)₂ forms." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which carbonate is thermally least stable?",
            options: ["BeCO₃", "MgCO₃", "CaCO₃", "BaCO₃"],
            answer: 0,
            explain: "The tiny Be²⁺ ion strongly polarises the carbonate ion, so BeCO₃ decomposes most easily.",
          },
          {
            kind: "mcq",
            q: "Which hydroxide is amphoteric?",
            options: ["Be(OH)₂", "Mg(OH)₂", "Ca(OH)₂", "Ba(OH)₂"],
            answer: 0,
            explain: "Be(OH)₂ dissolves in both acids and alkalis (forming [Be(OH)₄]²⁻), like Al(OH)₃.",
          },
          {
            kind: "truefalse",
            q: "Magnesium burnt in air gives a mixture of MgO and Mg₃N₂.",
            answer: true,
            explain: "Burning Mg reacts with both oxygen and nitrogen of the air.",
          },
          {
            kind: "numeric",
            q: "What volume of CO₂ at STP (22.4 L mol⁻¹) is released when 25 g of CaCO₃ is heated strongly? Give litres.",
            answer: 5.6,
            tolerance: 0.05,
            unit: "L",
            explain: "25/100 = 0.25 mol CaCO₃ gives 0.25 mol CO₂ = 0.25 × 22.4 = 5.6 L.",
          },
          {
            kind: "multi",
            q: "Which statements about plaster of Paris are correct?",
            options: [
              "It is CaSO₄·½H₂O.",
              "It is made by heating gypsum at about 393 K.",
              "When mixed with water it sets back into gypsum.",
              "Heating it above 393 K makes it set faster.",
            ],
            answers: [0, 1, 2],
            explain: "Above 393 K anhydrous 'dead burnt plaster' forms, which does not set with water.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The main constituent of Portland cement clinker is",
            options: ["tricalcium silicate, Ca₃SiO₅", "calcium sulphate", "calcium chloride", "magnesium oxide"],
            answer: 0,
            explain: "Ca₃SiO₅ makes up about half of clinker; gypsum (CaSO₄·2H₂O) is added only in small amounts.",
          },
          {
            kind: "mcq",
            q: "Chlorophyll contains which metal?",
            options: ["Mg", "Ca", "Fe", "Be"],
            answer: 0,
            explain: "A magnesium ion sits at the centre of the chlorophyll ring.",
          },
          {
            kind: "order",
            q: "Arrange the sulphates in decreasing order of solubility in water.",
            items: ["BeSO₄", "MgSO₄", "CaSO₄", "SrSO₄", "BaSO₄"],
            explain: "Hydration enthalpy falls down the group while the lattice enthalpy of the large sulphate salts stays nearly constant, so solubility falls.",
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-che-sb-exam-edge",
        title: "Exam edge: s-Block Elements",
        summary: "What JEE Advanced and other entrance exams ask from Groups 1 and 2: trend reversals and their reasons, peroxide and superoxide chemistry, liquid-ammonia solutions, Li and Be anomalies, stoichiometry of KO₂ and Solvay, and identify-the-compound puzzles.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "**Who needs this.** s-Block was removed from rationalised NCERT, and the current NEET, KCET and JEE Main syllabi follow that, so direct questions there are now rare. **JEE Advanced** still lists Groups 1 and 2 (reactivity, liquid-ammonia solutions, oxides, hydroxides, halides, oxo-acid salts, Li/Be anomalies, and compounds of Na and Ca), and ISC Class 11 examines it fully. The same reasoning (size, hydration enthalpy, lattice enthalpy, polarising power) also explains trends in p-block and coordination chemistry, so it repays the time. Always check the current information bulletin.\n\nThe favourites are: trend-ordering questions where the order **reverses** (mobility, reducing power in water, sulphate solubility), what superoxides and peroxides do with water and CO₂, statement-checking on liquid ammonia solutions, and short 'identify A, B, C' puzzles built on calcium and sodium compounds.",
          },
          {
            type: "table",
            headers: ["Trend", "Order", "The reason to quote"],
            rows: [
              ["Reducing power in water (Group 1)", "Li > Cs ≈ Rb ≈ K > Na", "hydration enthalpy of Li⁺"],
              ["Ionic mobility in water", "Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺", "hydrated size"],
              ["Solubility of Group 2 hydroxides / sulphates", "hydroxides ↑ down; sulphates ↓ down", "small vs large anion: lattice vs hydration"],
              ["Thermal stability of carbonates", "BeCO₃ < MgCO₃ < CaCO₃ < SrCO₃ < BaCO₃; Li₂CO₃ least stable in Group 1", "polarising power of cation"],
              ["Lattice enthalpy of LiX", "LiF > LiCl > LiBr > LiI", "smaller anion, closer ions"],
              ["Covalent character of Group 2 chlorides", "BeCl₂ > MgCl₂ > CaCl₂ > …", "Fajans' rules: small, highly charged cation"],
            ],
          },
          {
            type: "formula",
            tex: t`4\text{KO}_2 + 2\text{CO}_2 \to 2\text{K}_2\text{CO}_3 + 3\text{O}_2 \qquad 2\text{Na}_2\text{O}_2 + 2\text{CO}_2 \to 2\text{Na}_2\text{CO}_3 + \text{O}_2`,
            caption: "Why KO₂ (and Na₂O₂) can regenerate oxygen in closed spaces such as submarines and breathing apparatus.",
          },
          {
            type: "example",
            title: "NEET / KCET level: ordering with a reason",
            problem: "Arrange BeCO₃, MgCO₃, CaCO₃ and BaCO₃ in increasing order of decomposition temperature, and give the reason.",
            steps: [
              "Decomposition MCO₃ → MO + CO₂ is helped when the cation distorts (polarises) the carbonate ion.",
              "Polarising power is greatest for the smallest cation, Be²⁺, and falls as the cation grows.",
              "So the carbonate becomes more stable, and needs a higher temperature, down the group.",
            ],
            answer: "BeCO₃ < MgCO₃ < CaCO₃ < BaCO₃",
          },
          {
            type: "example",
            title: "JEE Main level: KO₂ in a breathing mask",
            problem: "How many grams of KO₂ are needed to release 48 g of O₂ by reaction with CO₂, and what mass of CO₂ is absorbed? (K = 39, O = 16, C = 12)",
            steps: [
              "4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂.",
              "48 g O₂ = 1.5 mol. From the equation, 3 mol O₂ needs 4 mol KO₂, so 1.5 mol O₂ needs 2.0 mol KO₂.",
              "Mass of KO₂ = 2.0 × 71 = 142 g.",
              "CO₂ absorbed = 1.0 mol (half the KO₂) = 44 g.",
            ],
            answer: "142 g KO₂; 44 g CO₂ absorbed",
          },
          {
            type: "example",
            title: "JEE Advanced level: identify the compounds",
            problem: "A white solid A gives a brick-red flame. On strong heating it loses mass, forming a white solid B and a gas C that turns lime water milky. B reacts with water with a hissing sound to give D. A suspension of D absorbs Cl₂ to give a bleaching agent E. Identify A to E and write the equations.",
            steps: [
              "Brick-red flame means calcium. A gas that turns lime water milky is CO₂, so A is CaCO₃ and C is CO₂.",
              "CaCO₃ → CaO + CO₂ on heating, so B is quicklime CaO.",
              "CaO + H₂O → Ca(OH)₂ (slaking, very exothermic: the hiss), so D is slaked lime.",
              "2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O; E is bleaching powder (active part Ca(OCl)₂).",
            ],
            answer: "A = CaCO₃, B = CaO, C = CO₂, D = Ca(OH)₂, E = bleaching powder (Ca(OCl)₂ with CaCl₂)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which alkali metal ion forms the most stable superoxide?",
                options: ["Cs⁺", "Li⁺", "Na⁺", "K⁺"],
                answer: 0,
                explain: "Large cations stabilise large anions; superoxide stability increases K < Rb < Cs. Li does not form one.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A more negative E° always means a faster reaction, so lithium must fizz most violently in water.",
            right: "E° tells how favourable (thermodynamics) the reaction is, not how fast (kinetics). Lithium reacts more slowly than sodium or potassium.",
            why: "Exams mix up 'strongest reducing agent' and 'most reactive'. Separate the energy argument (hydration enthalpy) from the rate observed.",
          },
          {
            type: "mistake",
            wrong: "Concentrated solutions of sodium in liquid ammonia are still blue and paramagnetic, just darker.",
            right: "Concentrated solutions are bronze-coloured and diamagnetic, because the solvated electrons pair up and metal-ion clusters form.",
            why: "Statement questions test this switch directly; learners remember only 'blue and paramagnetic'.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which is least soluble in water: LiF, LiI, CsF or NaCl?",
              emoji: "🧪",
              options: ["LiF", "LiI", "CsF", "NaCl"],
              answer: 0,
              trap: 1,
              explain: "LiF has the smallest ions of all, so a very high lattice enthalpy that hydration cannot overcome. LiI is very soluble: its lattice is weak because I⁻ is large.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Where marks are lost",
            md: "In assertion–reason items, check that the reason actually explains the assertion: 'Li is the strongest reducing agent' is explained by hydration enthalpy, **not** by low ionisation enthalpy (Li's is the highest in the group). In balancing, remember superoxides give H₂O₂ and O₂ with water.",
          },
          {
            type: "keypoints",
            items: [
              "Find the reason first (size, hydration, lattice, polarising power); the order follows from it.",
              "Small anion (OH⁻, F⁻): lattice enthalpy decides; large anion (SO₄²⁻, CO₃²⁻, I⁻): hydration enthalpy decides.",
              "KO₂ and Na₂O₂ absorb CO₂ and release O₂.",
              "Li and Be are anomalous; they resemble Mg and Al diagonally.",
              "Calcium puzzle chain: CaCO₃ → CaO → Ca(OH)₂ → CaCO₃ / Ca(HCO₃)₂ / bleaching powder.",
            ],
          },
        ],
        flashcards: [
          { front: "Reaction of KO₂ with CO₂", back: "4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂" },
          { front: "Reaction of Na₂O₂ with CO₂", back: "2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂" },
          { front: "Least soluble lithium halide", back: "LiF (very high lattice enthalpy)." },
          { front: "Most stable superoxide among alkali metals", back: "CsO₂ (largest cation)." },
          { front: "Group 2 hydroxide used as an antacid", back: "Mg(OH)₂ (milk of magnesia)." },
          { front: "Why is BaSO₄ used in barium-meal X-rays?", back: "It is insoluble (so non-toxic) and absorbs X-rays well." },
          { front: "Concentrated alkali metal in liquid NH₃", back: "Bronze coloured and diamagnetic." },
          { front: "Rule of thumb: lattice vs hydration", back: "For small anions lattice enthalpy controls solubility; for large anions hydration enthalpy controls it." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which order of thermal stability is correct?",
            options: ["Li₂CO₃ < Na₂CO₃ < K₂CO₃", "K₂CO₃ < Na₂CO₃ < Li₂CO₃", "Na₂CO₃ < Li₂CO₃ < K₂CO₃", "all are equally stable"],
            answer: 0,
            explain: "Li⁺ is small and polarising, so Li₂CO₃ decomposes on heating; stability increases down the group.",
          },
          {
            kind: "numeric",
            q: "Na₂O₂ is used to absorb CO₂ and release O₂ (2Na₂O₂ + 2CO₂ → 2Na₂CO₃ + O₂). How many grams of O₂ are released by 15.6 g of Na₂O₂? (Na = 23, O = 16)",
            answer: 3.2,
            tolerance: 0.05,
            unit: "g",
            explain: "M(Na₂O₂) = 78; 15.6/78 = 0.20 mol. 2 mol give 1 mol O₂, so 0.10 mol O₂ = 3.2 g.",
            difficulty: 2,
            hint: "Find moles of Na₂O₂ first.",
          },
          {
            kind: "multi",
            q: "Which statements are correct?",
            options: [
              "BeCl₂ is linear in the vapour above 1200 K.",
              "Mg forms a nitride by direct combination with N₂.",
              "CaSO₄ is more soluble than MgSO₄.",
              "Be(OH)₂ dissolves in excess NaOH.",
            ],
            answers: [0, 1, 3],
            explain: "MgSO₄ is readily soluble; CaSO₄ is only sparingly soluble.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Assertion: Lithium is the strongest reducing agent among alkali metals in aqueous solution. Reason: Lithium has the lowest ionisation enthalpy in Group 1.",
            options: [
              "Assertion true, reason false",
              "Both true and the reason explains the assertion",
              "Both true but the reason does not explain the assertion",
              "Both false",
            ],
            answer: 0,
            explain: "Li has the highest ionisation enthalpy in the group; its reducing power comes from its very large hydration enthalpy.",
            difficulty: 2,
            hint: "Check the ionisation enthalpy table.",
          },
          {
            kind: "mcq",
            q: "A metal X burns in excess air to give a yellow, paramagnetic solid. X is most likely",
            options: ["K", "Li", "Na", "Mg"],
            answer: 0,
            explain: "KO₂ (superoxide) is yellow and paramagnetic. Na₂O₂ is pale yellow but diamagnetic (O₂²⁻ has no unpaired electrons).",
            difficulty: 3,
            hint: "Which oxygen anion has an unpaired electron?",
          },
          {
            kind: "numeric",
            q: "In the electrolysis of brine, how many moles of NaOH form for every mole of Cl₂ released?",
            answer: 2,
            explain: "Overall: 2NaCl + 2H₂O → 2NaOH + Cl₂ + H₂, so 2 mol NaOH per mole of Cl₂.",
          },
          {
            kind: "mcq",
            q: "Which pair shows a diagonal relationship?",
            options: ["Be and Al", "Li and Na", "Mg and Ca", "Be and Mg"],
            answer: 0,
            explain: "Diagonal pairs are one period down and one group right: Li–Mg, Be–Al, B–Si.",
          },
          {
            kind: "mcq",
            q: "Lime water turns milky with CO₂ and then clears when more CO₂ is passed. The clear solution contains",
            options: ["Ca(HCO₃)₂", "CaCO₃", "CaO", "Ca(OH)₂ only"],
            answer: 0,
            explain: "CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂, which is soluble.",
          },
        ],
      },
    ],
  },
  /* END-SBLOCK */
];

export const links: Record<string, string | string[]> = {
  "11:States of Matter: Gaseous and Liquid States": "c11-che-states-of-matter",
  "11:s-Block Elements": "c11-che-s-block",
};
