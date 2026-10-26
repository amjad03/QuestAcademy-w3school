import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Thermodynamics (NCERT / Karnataka PUC)                               */
  /* = thermodynamics part of "Heat and Thermodynamics" (ISC)             */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-phy-thermodynamics",
    title: "Thermodynamics",
    icon: "🔥",
    description:
      "Thermal equilibrium and the zeroth law, heat, work and internal energy, the first law, specific heats, thermodynamic processes, heat engines, refrigerators, the second law and the Carnot engine.",
    lessons: [
      /* ---------------- Lesson 1 ---------------- */
      {
        slug: "c11-phy-first-law",
        title: "Zeroth Law, Heat, Work and the First Law",
        summary:
          "Thermal equilibrium, the zeroth law and temperature, internal energy as a state variable, heat and work as modes of energy transfer, the first law of thermodynamics and specific heat capacities with Cp − Cv = R.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🫖",
            caption:
              "A steel tumbler of hot chai left on a table cools until it is at room temperature. After that, nothing about it changes any more: it has reached thermal equilibrium with the room.",
          },
          {
            type: "text",
            md: t`**Thermodynamics** studies heat, work and temperature using **macroscopic** quantities such as pressure, volume and temperature. It does not need a picture of molecules (that is the job of kinetic theory, the next chapter).

The part of the universe we study is the **system** (for example, a gas in a cylinder); everything else is the **surroundings**. A wall that stops heat flow is an **adiabatic wall**; a wall that lets heat flow is a **diathermic wall**.

A system is in **thermal equilibrium** when its macroscopic variables (P, V, T, mass, composition) no longer change with time. Two systems joined by a diathermic wall settle into thermal equilibrium with each other.`,
          },
          {
            type: "text",
            md: t`**Zeroth law of thermodynamics:** if two systems A and B are each in thermal equilibrium with a third system C, then A and B are in thermal equilibrium with each other.

The quantity that is the same for all bodies in thermal equilibrium is called **temperature**. This is exactly how a thermometer works: the thermometer is the system C. The law was named "zeroth" by R. H. Fowler in 1931 because it was stated after the first and second laws, yet logically comes before them.`,
          },
          {
            type: "heading",
            text: "Heat, work and internal energy",
          },
          {
            type: "text",
            md: t`The **internal energy U** of a system is the sum of the kinetic and potential energies of its molecules, measured in the frame in which the centre of mass of the system is at rest. So the bulk motion of a moving container is **not** part of U. U depends only on the state of the system, so it is a **state variable**. For an ideal gas, U depends only on temperature.

There are two ways to change U. **Heat** is energy that flows because of a temperature difference (a flame under a cylinder). **Work** is energy transferred by other means, such as pushing a piston. Heat and work are *modes of energy transfer*, not things a body contains, and the amount of each depends on the path taken between two states.`,
          },
          {
            type: "formula",
            tex: t`\Delta Q = \Delta U + \Delta W \qquad \text{with } \Delta W = P\,\Delta V \text{ (small quasi-static change)}`,
            caption:
              "First law of thermodynamics (energy conservation). NCERT convention: ΔQ is heat supplied TO the system, ΔW is work done BY the system. (Chemistry books write ΔU = q + w with w = work done ON the system; it is the same law.)",
          },
          {
            type: "table",
            headers: ["Quantity", "Positive when", "Negative when"],
            rows: [
              ["$\\Delta Q$", "heat is supplied to the system", "heat is given out by the system"],
              ["$\\Delta W$", "the system does work (gas expands)", "work is done on the system (gas is compressed)"],
              ["$\\Delta U$", "internal energy rises (ideal gas: T rises)", "internal energy falls (ideal gas: T falls)"],
            ],
          },
          {
            type: "example",
            title: "Using the sign convention",
            problem: t`(a) A gas absorbs 800 J of heat and does 500 J of work on its surroundings. Find $\Delta U$. (b) In another process, 200 J of work is done on a gas while it gives out 150 J of heat. Find $\Delta U$.`,
            steps: [
              t`(a) $\Delta Q = +800$ J, $\Delta W = +500$ J (work by the gas).`,
              t`$\Delta U = \Delta Q - \Delta W = 800 - 500 = +300$ J.`,
              t`(b) Heat given out: $\Delta Q = -150$ J. Work done ON the gas: $\Delta W = -200$ J.`,
              t`$\Delta U = (-150) - (-200) = +50$ J.`,
            ],
            answer: t`(a) U rises by 300 J. (b) U rises by 50 J: the work put in is more than the heat that leaks out.`,
          },
          {
            type: "example",
            title: "Boiling water at 1 atm",
            problem: t`10 g of water at 100 °C is turned into steam at 100 °C and 1 atm ($1.013\times10^5$ Pa). The volume changes from 10 cm³ to 16 700 cm³. Latent heat of vaporisation = 2256 J/g. Find the work done by the water and the change in its internal energy.`,
            steps: [
              t`Heat supplied: $\Delta Q = mL = 10 \times 2256 = 22\,560$ J.`,
              t`$\Delta V = 16\,700 - 10 = 16\,690$ cm³ $= 1.669\times10^{-2}$ m³.`,
              t`Work at constant pressure: $\Delta W = P\Delta V = 1.013\times10^5 \times 1.669\times10^{-2} \approx 1691$ J.`,
              t`$\Delta U = \Delta Q - \Delta W = 22\,560 - 1691 \approx 20\,870$ J.`,
            ],
            answer: t`Work done ≈ 1.69 kJ; internal energy rises by ≈ 20.9 kJ. Most of the latent heat goes into pulling the molecules apart, not into pushing back the atmosphere.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A gas absorbs 400 J of heat and its internal energy rises by 150 J. How much work (in J) does the gas do?",
                answer: 250,
                unit: "J",
                explain: t`$\Delta W = \Delta Q - \Delta U = 400 - 150 = 250$ J, done by the gas (it expands).`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A hot body contains a lot of heat, and heat and work are properties of a state, like temperature.",
            right: "A body contains internal energy. Heat and work are energy in transit, and their values depend on the path between two states.",
            why: "Everyday language says a stove 'holds heat', so heat feels like a stored quantity. But the same change of state (same ΔU) can be reached with different amounts of heat and work, so neither can be a property of the state.",
          },
          {
            type: "text",
            md: t`**Specific heat capacity** is the heat needed per unit mass per unit rise in temperature: $s = \dfrac{\Delta Q}{m\,\Delta T}$ (J kg⁻¹ K⁻¹). **Molar specific heat capacity** is per mole: $C = \dfrac{\Delta Q}{\mu\,\Delta T}$ (J mol⁻¹ K⁻¹). Water has a very large value, about 4186 J kg⁻¹ K⁻¹, which is why coastal cities like Mumbai and Chennai have mild temperature swings.

For a gas, the heat needed depends on what else happens during heating. Heating at constant volume gives $C_v$; heating at constant pressure gives $C_p$. Since at constant pressure the gas also does work in expanding, $C_p > C_v$.`,
          },
          {
            type: "example",
            title: "Derivation: Mayer's relation Cp − Cv = R",
            problem: t`Show that for one mole of an ideal gas, $C_p - C_v = R$.`,
            steps: [
              t`At constant volume no work is done, so $\Delta Q = \Delta U = \mu C_v\,\Delta T$. For an ideal gas U depends only on T, so $\Delta U = \mu C_v\,\Delta T$ for **any** process.`,
              t`At constant pressure, the first law gives $\mu C_p\,\Delta T = \Delta U + P\,\Delta V = \mu C_v\,\Delta T + P\,\Delta V$.`,
              t`From $PV = \mu RT$ at constant P: $P\,\Delta V = \mu R\,\Delta T$.`,
              t`So $\mu C_p\,\Delta T = \mu C_v\,\Delta T + \mu R\,\Delta T$, which gives $C_p - C_v = R$.`,
            ],
            answer: t`$C_p - C_v = R \approx 8.314$ J mol⁻¹ K⁻¹. Per unit mass, $c_p - c_v = R/M$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is it fixed by the state, or does it depend on the path?",
              groups: ["State variable", "Depends on the path"],
              items: [
                { text: "Internal energy", group: 0, hint: "It returns to its old value whenever the system returns to its old state." },
                { text: "Pressure", group: 0, hint: "You can read it off a gauge in any equilibrium state." },
                { text: "Temperature", group: 0, hint: "The zeroth law defines it for every equilibrium state." },
                { text: "Volume", group: 0, hint: "It is one of the coordinates of a point on a P–V diagram." },
                { text: "Heat supplied", group: 1, hint: "The same change of state can be made with different amounts of heat." },
                { text: "Work done by the gas", group: 1, hint: "It is the area under the P–V curve, which changes with the path." },
              ],
              explain: "U, P, V and T are **state variables**. Heat and work are **path dependent**; only their difference ΔQ − ΔW = ΔU is fixed by the end states.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State the sign convention in one line before using the first law; examiners give a mark for it. The derivation of $C_p - C_v = R$ is a frequent 2–3 mark question: write the first law at constant V, then at constant P, and use $P\Delta V = \mu R\Delta T$. Always convert to SI (cm³ to m³, kJ to J).`,
          },
          {
            type: "keypoints",
            items: [
              "Zeroth law: two systems each in equilibrium with a third are in equilibrium with each other; this defines temperature.",
              "Internal energy U is a state variable; heat and work are path-dependent modes of energy transfer.",
              t`First law: $\Delta Q = \Delta U + \Delta W$ (ΔQ to the system, ΔW by the system).`,
              t`For an ideal gas $\Delta U = \mu C_v \Delta T$ in every process, and $C_p - C_v = R$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Zeroth law of thermodynamics", back: "If A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. It defines temperature." },
          { front: "Adiabatic wall vs diathermic wall", back: "An adiabatic wall allows no heat flow; a diathermic wall allows heat flow." },
          { front: "Internal energy U", back: "Sum of molecular kinetic and potential energies in the centre-of-mass frame. A state variable; for an ideal gas it depends on T only." },
          { front: "First law (NCERT form)", back: "ΔQ = ΔU + ΔW, with ΔQ supplied to the system and ΔW done by the system." },
          { front: "Why is Cp greater than Cv?", back: "At constant pressure part of the heat is used for the work of expansion, so more heat is needed for the same rise in temperature." },
          { front: "Mayer's relation", back: "Cp − Cv = R for one mole of an ideal gas (per kg: cp − cv = R/M)." },
          { front: "Specific heat of water", back: "About 4186 J kg⁻¹ K⁻¹ (≈ 4.2 kJ kg⁻¹ K⁻¹), very high compared with most substances." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a state variable?",
            options: ["Heat absorbed", "Work done by the gas", "Internal energy", "Heat given out"],
            answer: 2,
            explain: "Internal energy depends only on the state. Heat and work depend on the path between two states.",
          },
          {
            kind: "numeric",
            q: "2 kJ of heat is supplied to a gas, which does 500 J of work on its surroundings. Find ΔU in joules.",
            answer: 1500,
            unit: "J",
            explain: t`$\Delta U = \Delta Q - \Delta W = 2000 - 500 = 1500$ J.`,
          },
          {
            kind: "numeric",
            q: "300 J of work is done ON a gas and its internal energy rises by 100 J. Find the heat supplied to the gas in joules (negative if heat is given out).",
            answer: -200,
            unit: "J",
            difficulty: 2,
            hint: "Work done on the gas means ΔW is negative in the NCERT convention.",
            explain: t`$\Delta Q = \Delta U + \Delta W = 100 + (-300) = -200$ J. The gas gives out 200 J of heat.`,
          },
          {
            kind: "truefalse",
            q: "The zeroth law of thermodynamics is what allows us to define temperature and use thermometers.",
            answer: true,
            explain: "Bodies in thermal equilibrium share one property, temperature; a thermometer is the third body C of the zeroth law.",
          },
          {
            kind: "numeric",
            q: "For nitrogen (M = 0.028 kg/mol), find cp − cv per kilogram in J kg⁻¹ K⁻¹. Take R = 8.314 J mol⁻¹ K⁻¹.",
            answer: 297,
            tolerance: 1,
            unit: "J/(kg K)",
            difficulty: 2,
            hint: "Divide the molar relation by the molar mass.",
            explain: t`$c_p - c_v = R/M = 8.314/0.028 \approx 297$ J kg⁻¹ K⁻¹.`,
          },
          {
            kind: "multi",
            q: "Select all the correct statements.",
            options: [
              "The internal energy of an ideal gas depends only on its temperature.",
              "Heat and work both depend on the path between two states.",
              "An adiabatic wall lets heat flow through it.",
              "The kinetic energy of a moving container of gas is part of the gas's internal energy.",
            ],
            answers: [0, 1],
            explain: "An adiabatic wall blocks heat flow. Internal energy is measured in the centre-of-mass frame, so bulk motion of the container is not included.",
          },
          {
            kind: "fill",
            q: "A wall that does not allow any heat to pass through it is called an ___ wall.",
            answer: ["adiabatic"],
            explain: "Adiabatic walls are perfect insulators; diathermic walls conduct heat.",
          },
          {
            kind: "mcq",
            q: "Why is Cp greater than Cv for a gas?",
            options: [
              "At constant pressure the gas also does work while expanding",
              "Molecules move faster at constant pressure",
              "Internal energy depends on pressure",
              "Heat is lost through the walls at constant pressure",
            ],
            answer: 0,
            explain: "At constant pressure the gas expands, so extra heat is needed for the work PΔV. For an ideal gas U depends on T only, not on pressure.",
          },
        ],
      },

      /* ---------------- Lesson 2 ---------------- */
      {
        slug: "c11-phy-processes",
        title: "State Variables and Thermodynamic Processes",
        summary:
          "State variables and the equation of state, quasi-static processes, and the isothermal, adiabatic, isochoric, isobaric and cyclic processes with the work done in each.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`The equilibrium state of a gas is fully described by a few **state variables**: pressure P, volume V, temperature T, mass and composition. The relation between them is the **equation of state**. For μ moles of an ideal gas it is $PV = \mu RT$.

State variables are of two kinds. **Extensive** variables scale with the size of the system: U, V and mass. **Intensive** variables do not: P, T and density. If you split a gas in equilibrium into two equal halves, each half has half the volume and half the internal energy, but the same pressure and temperature.`,
          },
          {
            type: "text",
            md: t`A **quasi-static process** is an idealised process that happens so slowly that the system passes through a continuous chain of equilibrium states. At every stage P, V and T have definite values, so the process can be drawn as a curve on a P–V diagram, and the work done equals the **area under that curve**. A piston moved very slowly, or a gas warmed by a reservoir only slightly hotter than itself, is close to quasi-static.`,
          },
          {
            type: "table",
            headers: ["Process", "What is fixed", "ΔU", "Work by gas", "First law gives"],
            rows: [
              ["Isothermal", "T constant", "0 (ideal gas)", t`$\mu RT\ln\dfrac{V_2}{V_1}$`, "ΔQ = ΔW"],
              ["Adiabatic", "no heat exchange", t`$\mu C_v\Delta T$`, t`$\dfrac{\mu R(T_1-T_2)}{\gamma-1}$`, "ΔU = −ΔW"],
              ["Isochoric", "V constant", t`$\mu C_v\Delta T$`, "0", "ΔQ = ΔU"],
              ["Isobaric", "P constant", t`$\mu C_v\Delta T$`, t`$P\Delta V = \mu R\Delta T$`, t`$\Delta Q = \mu C_p\Delta T$`],
              ["Cyclic", "returns to start", "0", "area enclosed by the loop", "ΔQ = ΔW"],
            ],
          },
          {
            type: "example",
            title: "Derivation: work in an isothermal process",
            problem: t`Find the work done by μ moles of an ideal gas that expands quasi-statically at constant temperature T from $V_1$ to $V_2$.`,
            steps: [
              t`At every stage $P = \dfrac{\mu RT}{V}$.`,
              t`$W = \displaystyle\int_{V_1}^{V_2} P\,dV = \mu RT\int_{V_1}^{V_2}\dfrac{dV}{V} = \mu RT\ln\dfrac{V_2}{V_1}$.`,
              t`T is constant, so $\Delta U = 0$ and the first law gives $\Delta Q = W$.`,
              t`For expansion ($V_2 > V_1$) W is positive and the gas absorbs heat; for compression W is negative and the gas gives out heat.`,
            ],
            answer: t`$W = \mu RT\ln(V_2/V_1) = 2.303\,\mu RT\log_{10}(V_2/V_1)$, and in an isothermal process all the heat absorbed becomes work.`,
          },
          {
            type: "example",
            title: "Derivation: PV^γ = constant for an adiabatic process",
            problem: t`Show that in a quasi-static adiabatic process of an ideal gas, $PV^{\gamma}$ stays constant, where $\gamma = C_p/C_v$.`,
            steps: [
              t`No heat flows: $0 = dU + dW$, so $\mu C_v\,dT + P\,dV = 0$.`,
              t`Differentiate $PV = \mu RT$: $P\,dV + V\,dP = \mu R\,dT$, so $\mu\,dT = (P\,dV + V\,dP)/R$.`,
              t`Substitute and use $R = C_p - C_v$: $C_v(P\,dV + V\,dP) + (C_p - C_v)P\,dV = 0$, which simplifies to $C_p P\,dV + C_v V\,dP = 0$.`,
              t`Divide by $C_v PV$: $\gamma\dfrac{dV}{V} + \dfrac{dP}{P} = 0$. Integrate: $\ln P + \gamma\ln V = $ constant.`,
            ],
            answer: t`$PV^{\gamma} = $ constant. Using $PV = \mu RT$ this also gives $TV^{\gamma-1} = $ constant and $P^{1-\gamma}T^{\gamma} = $ constant.`,
          },
          {
            type: "formula",
            tex: t`W_{\text{adiabatic}} = \int_{V_1}^{V_2} \frac{K}{V^{\gamma}}\,dV = \frac{P_1V_1 - P_2V_2}{\gamma - 1} = \frac{\mu R\,(T_1 - T_2)}{\gamma - 1}`,
            caption: "K = PV^γ is the constant of the process. In adiabatic expansion W > 0, so T falls (the gas cools); in adiabatic compression the gas heats up.",
          },
          {
            type: "example",
            title: "Isothermal expansion",
            problem: t`2 mol of an ideal gas at 300 K expands isothermally and slowly from 10 L to 20 L. Find the work done, the heat absorbed and ΔU. ($R = 8.314$ J mol⁻¹ K⁻¹, $\ln 2 = 0.693$.)`,
            steps: [
              t`$W = \mu RT\ln\dfrac{V_2}{V_1} = 2 \times 8.314 \times 300 \times \ln 2$.`,
              t`$= 4988.4 \times 0.693 \approx 3457$ J.`,
              t`T is constant, so $\Delta U = 0$ and $\Delta Q = W$.`,
            ],
            answer: t`W ≈ 3.46 kJ, heat absorbed ≈ 3.46 kJ, ΔU = 0.`,
          },
          {
            type: "example",
            title: "Adiabatic compression (the idea of a diesel engine)",
            problem: t`Air ($\gamma = 1.4$) at 300 K is compressed quickly (adiabatically) to $\tfrac{1}{32}$ of its volume. Find the final temperature and the factor by which the pressure rises.`,
            steps: [
              t`$TV^{\gamma-1} = $ constant, so $T_2 = T_1\left(\dfrac{V_1}{V_2}\right)^{\gamma-1} = 300 \times 32^{0.4}$.`,
              t`$32^{0.4} = (2^5)^{0.4} = 2^2 = 4$, so $T_2 = 1200$ K.`,
              t`$PV^{\gamma} = $ constant, so $\dfrac{P_2}{P_1} = 32^{1.4} = 32 \times 32^{0.4} = 32 \times 4 = 128$.`,
            ],
            answer: t`The air reaches about 1200 K (hot enough to ignite diesel fuel) and its pressure rises 128 times. An isothermal compression would raise the pressure only 32 times.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Adiabatic curves are steeper",
            md: t`At the same point on a P–V diagram, the isothermal slope is $\dfrac{dP}{dV} = -\dfrac{P}{V}$ while the adiabatic slope is $-\gamma\dfrac{P}{V}$. Since $\gamma > 1$, the adiabatic curve is **γ times steeper**. In compression the pressure rises faster because the gas also heats up.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In an isochoric process, 500 J of heat is supplied to a gas. What is ΔU?",
                options: ["0", "500 J", "−500 J", "It depends on γ"],
                answer: 1,
                explain: "Volume is constant, so ΔW = 0 and ΔU = ΔQ = 500 J.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In an adiabatic process the temperature stays constant, and in an isothermal process no heat is exchanged.",
            right: "Adiabatic means no heat exchange (Q = 0), so T changes. Isothermal means T is constant, so heat must flow in or out (Q = W).",
            why: "The two words are easy to swap because both describe 'something constant'. Remember: iso-THERMAL = same temperature; a-DIABATIC = heat cannot pass through.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each process with what the first law reduces to.",
              pairs: [
                ["Isothermal (ideal gas)", "ΔQ = ΔW"],
                ["Adiabatic", "ΔU = −ΔW"],
                ["Isochoric", "ΔQ = ΔU"],
                ["Isobaric", "ΔQ = μCpΔT"],
              ],
              explain: "Put the fixed quantity into ΔQ = ΔU + ΔW: T fixed makes ΔU = 0, no heat makes ΔQ = 0, fixed V makes ΔW = 0. A cyclic process also gives ΔQ = ΔW, because ΔU = 0 over a full cycle.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Derivations of isothermal work and adiabatic work are favourite long-answer questions. Show the integral, state the limits and say why ΔU = 0 (isothermal) or Q = 0 (adiabatic). Sketch an isotherm and an adiabat through the same point and label the steeper one.`,
          },
          {
            type: "keypoints",
            items: [
              "A quasi-static process passes through equilibrium states; work = area under its P–V curve.",
              t`Isothermal: $W = Q = \mu RT\ln(V_2/V_1)$, ΔU = 0.`,
              t`Adiabatic: $PV^{\gamma}$, $TV^{\gamma-1}$ constant; $W = \mu R(T_1-T_2)/(\gamma-1)$; the gas cools on expansion.`,
              "Isochoric: W = 0, Q = ΔU. Isobaric: W = PΔV, Q = μCpΔT. Cyclic: ΔU = 0.",
            ],
          },
        ],
        flashcards: [
          { front: "Quasi-static process", back: "An infinitely slow process in which the system passes through a series of equilibrium states, so it can be drawn on a P–V diagram." },
          { front: "Extensive vs intensive variables", back: "Extensive (U, V, mass) scale with system size; intensive (P, T, density) do not." },
          { front: "Work in isothermal expansion", back: "W = μRT ln(V₂/V₁); ΔU = 0, so Q = W." },
          { front: "Adiabatic relations", back: "PV^γ = constant, TV^(γ−1) = constant, P^(1−γ)T^γ = constant." },
          { front: "Work in adiabatic process", back: "W = (P₁V₁ − P₂V₂)/(γ − 1) = μR(T₁ − T₂)/(γ − 1)." },
          { front: "Slope of adiabat vs isotherm", back: "Adiabatic slope = γ × isothermal slope at the same point, so the adiabat is steeper." },
          { front: "Cyclic process", back: "The system returns to its initial state: ΔU = 0, and net heat absorbed = net work done = area enclosed on the P–V diagram." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For the isothermal expansion of an ideal gas:",
            options: ["ΔU = 0 and Q = W", "Q = 0 and ΔU = −W", "W = 0 and Q = ΔU", "ΔU = Q and W = Q"],
            answer: 0,
            explain: "Temperature is constant, so the internal energy of an ideal gas does not change; all heat absorbed becomes work.",
          },
          {
            kind: "numeric",
            q: "3 mol of an ideal gas at 350 K doubles its volume isothermally. Find the work done by the gas in joules. (R = 8.314 J mol⁻¹ K⁻¹, ln 2 = 0.693)",
            answer: 6051,
            tolerance: 15,
            unit: "J",
            difficulty: 2,
            explain: t`$W = 3 \times 8.314 \times 350 \times 0.693 \approx 6051$ J.`,
          },
          {
            kind: "numeric",
            q: "A monatomic ideal gas (γ = 5/3) at 250 K is compressed adiabatically to 1/8 of its volume. Find the final temperature in kelvin.",
            answer: 1000,
            unit: "K",
            difficulty: 2,
            hint: "Use TV^(γ−1) = constant with γ − 1 = 2/3.",
            explain: t`$T_2 = 250 \times 8^{2/3} = 250 \times 4 = 1000$ K.`,
          },
          {
            kind: "truefalse",
            q: "When an ideal gas expands adiabatically, its temperature falls.",
            answer: true,
            explain: "Q = 0 and W > 0, so ΔU = −W is negative, and T falls.",
          },
          {
            kind: "mcq",
            q: "2 mol of a diatomic ideal gas (Cp = 7R/2) is heated at constant pressure through 10 K. About how much heat is needed? (R = 8.314 J mol⁻¹ K⁻¹)",
            options: ["582 J", "416 J", "166 J", "291 J"],
            answer: 0,
            explain: t`$Q = \mu C_p\Delta T = 2 \times 3.5 \times 8.314 \times 10 \approx 582$ J. 416 J is $\mu C_v\Delta T$ (ΔU) and 166 J is the work $\mu R\Delta T$.`,
          },
          {
            kind: "multi",
            q: "Which statements about a quasi-static process are correct?",
            options: [
              "The system is in equilibrium at every stage.",
              "It can be drawn as a continuous curve on a P–V diagram.",
              "The sudden bursting of a balloon is a good example.",
              "It is an idealisation approached by very slow changes.",
            ],
            answers: [0, 1, 3],
            explain: "A bursting balloon is fast and far from equilibrium, so it is not quasi-static.",
          },
          {
            kind: "mcq",
            q: "At a given point on a P–V diagram, the ratio (slope of adiabat) / (slope of isotherm) for an ideal gas is:",
            options: ["γ", "1/γ", "γ − 1", "1"],
            answer: 0,
            explain: t`Adiabatic slope $= -\gamma P/V$, isothermal slope $= -P/V$; the ratio is γ.`,
          },
          {
            kind: "fill",
            q: "In an isochoric process, the work done by the gas is ___.",
            answer: ["zero", "0"],
            explain: "The volume does not change, so PΔV = 0.",
          },
        ],
      },

      /* ---------------- Lesson 3 ---------------- */
      {
        slug: "c11-phy-second-law-carnot",
        title: "Heat Engines, Refrigerators, Second Law and Carnot Engine",
        summary:
          "Heat engines and their efficiency, refrigerators and heat pumps, the Kelvin–Planck and Clausius statements of the second law, reversible and irreversible processes, and the Carnot cycle and Carnot's theorem.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`A **heat engine** turns heat into work again and again by taking a **working substance** (steam, air–fuel mixture) through a cycle. In each cycle it absorbs heat $Q_1$ from a hot reservoir (the **source**) at temperature $T_1$, does net work W on the surroundings, and rejects heat $Q_2$ to a cold reservoir (the **sink**) at $T_2$.

Over a full cycle ΔU = 0, so $W = Q_1 - Q_2$. A steam engine and a car's petrol engine are heat engines; in the first, heat is supplied from outside (external combustion), in the second inside the cylinder (internal combustion).`,
          },
          {
            type: "formula",
            tex: t`\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1}`,
            caption: "Efficiency of a heat engine. η = 1 would need Q₂ = 0, which the second law forbids.",
          },
          {
            type: "text",
            md: t`A **refrigerator** runs the cycle backwards: work W is done on the working substance so that it takes heat $Q_2$ from the cold inside and gives $Q_1 = Q_2 + W$ to the warmer room. Its **coefficient of performance** is $\alpha = \dfrac{Q_2}{W}$, which can be larger than 1. A **heat pump** is the same machine used to warm a room; its useful output is $Q_1$.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "Some recent CBSE editions of the NCERT book trim the separate sections on heat engines and refrigerators, but the ideas are needed to state the second law and to study the Carnot engine. ISC, KCET, JEE and NEET all ask questions on efficiency and coefficient of performance, so learn them.",
          },
          {
            type: "text",
            md: t`The first law allows any process that conserves energy, but nature does not. The **second law** sets the limit.

**Kelvin–Planck statement:** no process is possible whose *sole* result is the absorption of heat from a reservoir and its complete conversion into work. (No engine can have η = 1.)

**Clausius statement:** no process is possible whose *sole* result is the transfer of heat from a colder object to a hotter object. (A refrigerator needs work.) The two statements are equivalent: breaking one would let you break the other.`,
          },
          {
            type: "text",
            md: t`A process is **reversible** if it can be run backwards so that both the system and the surroundings return exactly to their original states. Real processes are **irreversible** for two reasons: they pass through non-equilibrium states (free expansion, a quick explosion, heat flowing across a finite temperature difference), and they have **dissipative effects** such as friction and viscosity. A quasi-static process with no dissipation is reversible, an ideal that real engines approach but never reach.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Isothermal expansion** at $T_1$ from $V_1$ to $V_2$: the gas absorbs $Q_1$ from the source.`,
              t`**Adiabatic expansion** from $V_2$ to $V_3$: the gas cools from $T_1$ to $T_2$.`,
              t`**Isothermal compression** at $T_2$ from $V_3$ to $V_4$: the gas rejects $Q_2$ to the sink.`,
              t`**Adiabatic compression** from $V_4$ back to $V_1$: the gas warms from $T_2$ to $T_1$.`,
            ],
          },
          {
            type: "example",
            title: "Derivation: efficiency of a Carnot engine",
            problem: t`Using an ideal gas as the working substance in the four steps above, show that $\eta = 1 - T_2/T_1$.`,
            steps: [
              t`Step 1 (isothermal at $T_1$): $Q_1 = \mu RT_1\ln\dfrac{V_2}{V_1}$. Step 3 (isothermal at $T_2$): heat rejected $Q_2 = \mu RT_2\ln\dfrac{V_3}{V_4}$.`,
              t`Step 2 (adiabatic): $T_1V_2^{\gamma-1} = T_2V_3^{\gamma-1}$. Step 4 (adiabatic): $T_1V_1^{\gamma-1} = T_2V_4^{\gamma-1}$.`,
              t`Divide the two adiabatic relations: $\left(\dfrac{V_2}{V_1}\right)^{\gamma-1} = \left(\dfrac{V_3}{V_4}\right)^{\gamma-1}$, so $\dfrac{V_2}{V_1} = \dfrac{V_3}{V_4}$.`,
              t`Hence $\dfrac{Q_2}{Q_1} = \dfrac{T_2}{T_1}$ and $\eta = 1 - \dfrac{Q_2}{Q_1} = 1 - \dfrac{T_2}{T_1}$.`,
            ],
            answer: t`$\eta_{\text{Carnot}} = 1 - \dfrac{T_2}{T_1}$ with T in kelvin. It depends only on the two reservoir temperatures.`,
          },
          {
            type: "formula",
            tex: t`\eta_{\text{Carnot}} = 1 - \frac{T_2}{T_1} \qquad \alpha_{\text{Carnot}} = \frac{T_2}{T_1 - T_2}`,
            caption: "Carnot's theorem: no engine working between T₁ and T₂ can be more efficient than a Carnot engine, and the efficiency of a reversible (Carnot) engine does not depend on the working substance.",
          },
          {
            type: "example",
            title: "Checking an inventor's claim",
            problem: t`An engine works between a boiler at 227 °C and a river at 27 °C. Its inventor claims that it does 2200 J of work for every 5000 J of heat taken from the boiler. Is this possible?`,
            steps: [
              t`Convert to kelvin: $T_1 = 500$ K, $T_2 = 300$ K.`,
              t`Maximum (Carnot) efficiency $= 1 - \dfrac{300}{500} = 0.4$.`,
              t`Maximum work from 5000 J $= 0.4 \times 5000 = 2000$ J.`,
              t`The claim of 2200 J (η = 44%) is more than the Carnot limit.`,
            ],
            answer: "Impossible: it would violate the second law. At most 2000 J of work can be obtained, with at least 3000 J rejected to the river.",
          },
          {
            type: "example",
            title: "An ideal freezer",
            problem: t`A freezer keeps its inside at −13 °C in a room at 27 °C. If it works as an ideal (Carnot) refrigerator, how much work is needed to remove 1300 J of heat from the inside, and how much heat goes into the room?`,
            steps: [
              t`$T_2 = 260$ K, $T_1 = 300$ K.`,
              t`$\alpha = \dfrac{T_2}{T_1 - T_2} = \dfrac{260}{40} = 6.5$.`,
              t`$W = \dfrac{Q_2}{\alpha} = \dfrac{1300}{6.5} = 200$ J.`,
              t`Heat to the room: $Q_1 = Q_2 + W = 1300 + 200 = 1500$ J.`,
            ],
            answer: "At least 200 J of work; 1500 J of heat is given to the room. (That is why the coils at the back of a fridge feel warm.)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A Carnot engine works between 600 K and 300 K and absorbs 1000 J from the source per cycle. How much work (in J) does it do per cycle?",
                answer: 500,
                unit: "J",
                explain: t`$\eta = 1 - 300/600 = 0.5$, so $W = 0.5 \times 1000 = 500$ J.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "For a Carnot engine between 100 °C and 0 °C, η = 1 − 0/100 = 100%.",
            right: "Temperatures must be in kelvin: η = 1 − 273/373 ≈ 0.27, or 27%.",
            why: "The Carnot formula comes from ratios of absolute temperatures in PV = μRT. Celsius has an arbitrary zero, so putting Celsius values in gives nonsense, here even the 'perfect engine' the second law forbids.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of a Carnot cycle in order, starting at the source.",
              items: [
                "Isothermal expansion at T₁, absorbing Q₁",
                "Adiabatic expansion, cooling from T₁ to T₂",
                "Isothermal compression at T₂, rejecting Q₂",
                "Adiabatic compression, warming from T₂ to T₁",
              ],
              explain: "Isothermal and adiabatic steps alternate: expand-expand, then compress-compress. Heat is exchanged only in the two isothermal steps.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`Write both statements of the second law in full: the words *sole result* carry the mark. In the Carnot derivation, show clearly why $V_2/V_1 = V_3/V_4$. In numericals, convert °C to K first and state whether you are finding efficiency (W/Q₁) or coefficient of performance (Q₂/W).`,
          },
          {
            type: "keypoints",
            items: [
              t`Heat engine: $\eta = W/Q_1 = 1 - Q_2/Q_1$. Refrigerator: $\alpha = Q_2/W$.`,
              "Kelvin–Planck: no engine with η = 1. Clausius: no heat flow from cold to hot without work. They are equivalent.",
              "Friction and non-equilibrium steps make real processes irreversible.",
              t`Carnot cycle: two isotherms and two adiabats; $\eta = 1 - T_2/T_1$ (kelvin), the maximum possible between $T_1$ and $T_2$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Efficiency of a heat engine", back: "η = W/Q₁ = 1 − Q₂/Q₁, where Q₁ is heat absorbed from the source and Q₂ heat rejected to the sink." },
          { front: "Coefficient of performance of a refrigerator", back: "α = Q₂/W, the heat removed from the cold body per unit work. It can exceed 1." },
          { front: "Kelvin–Planck statement", back: "No process is possible whose sole result is absorbing heat from a reservoir and converting it completely into work." },
          { front: "Clausius statement", back: "No process is possible whose sole result is transferring heat from a colder object to a hotter one." },
          { front: "Two causes of irreversibility", back: "Non-equilibrium (quick) changes such as free expansion or heat flow across a finite ΔT, and dissipative effects such as friction and viscosity." },
          { front: "Carnot efficiency", back: "η = 1 − T₂/T₁ (kelvin). Independent of the working substance." },
          { front: "Carnot's theorem", back: "No engine between two given temperatures is more efficient than a reversible (Carnot) engine; all reversible engines between them have the same efficiency." },
          { front: "COP of a Carnot refrigerator", back: "α = T₂/(T₁ − T₂)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which statement is the Kelvin–Planck form of the second law?",
            options: [
              "No engine can convert all the heat it absorbs from a reservoir into work, with no other effect",
              "Energy can neither be created nor destroyed",
              "Two bodies in equilibrium with a third are in equilibrium with each other",
              "Heat flows on its own from a cold body to a hot body",
            ],
            answer: 0,
            explain: "The second option is the first law, the third is the zeroth law, and the fourth is the opposite of the Clausius statement.",
          },
          {
            kind: "numeric",
            q: "Find the efficiency (in %) of a Carnot engine working between 127 °C and 27 °C.",
            answer: 25,
            unit: "%",
            explain: t`$\eta = 1 - 300/400 = 0.25 = 25\%$.`,
          },
          {
            kind: "mcq",
            q: "A Carnot engine works between T₁ and T₂. Which change increases its efficiency more?",
            options: [
              "Lowering T₂ by 10 K",
              "Raising T₁ by 10 K",
              "Both have exactly the same effect",
              "Neither changes the efficiency",
            ],
            answer: 0,
            difficulty: 2,
            hint: "Compare how η = 1 − T₂/T₁ changes with each temperature; T₂ is smaller than T₁.",
            explain: t`$d\eta/dT_2 = -1/T_1$ while $d\eta/dT_1 = T_2/T_1^2$. Since $T_2 < T_1$, the effect of lowering $T_2$ is larger. Example: 500 K/300 K gives 40%; lowering the sink to 290 K gives 42%, raising the source to 510 K gives about 41.2%.`,
          },
          {
            kind: "truefalse",
            q: "The efficiency of a Carnot engine depends on the working substance used.",
            answer: false,
            explain: "Carnot's theorem: the efficiency of a reversible engine depends only on the temperatures of the source and sink.",
          },
          {
            kind: "numeric",
            q: "A refrigerator with coefficient of performance 5 removes 600 J of heat from its inside per cycle. How much heat (in J) does it give to the room per cycle?",
            answer: 720,
            unit: "J",
            difficulty: 2,
            explain: t`$W = Q_2/\alpha = 600/5 = 120$ J; $Q_1 = Q_2 + W = 720$ J.`,
          },
          {
            kind: "multi",
            q: "Which of these make a process irreversible?",
            options: [
              "Friction between piston and cylinder",
              "Free expansion of a gas into vacuum",
              "Heat flowing from a body at 400 K to one at 300 K",
              "A frictionless, quasi-static isothermal expansion",
            ],
            answers: [0, 1, 2],
            explain: "The last one is the ideal reversible process. Friction is dissipative, and free expansion and heat flow across a finite temperature difference pass through non-equilibrium states.",
          },
          {
            kind: "fill",
            q: "An engine that turns all the heat it absorbs into work, with no other effect, would break the ___ law of thermodynamics.",
            answer: ["second", "2nd"],
            explain: "Energy would still be conserved (first law), but the Kelvin–Planck statement of the second law forbids it.",
          },
          {
            kind: "mcq",
            q: "In which steps of a Carnot cycle does the working substance exchange heat?",
            options: ["Only in the two isothermal steps", "Only in the two adiabatic steps", "In all four steps", "Only in the adiabatic compression"],
            answer: 0,
            explain: "Adiabatic steps have Q = 0 by definition. Heat Q₁ is absorbed at T₁ and Q₂ rejected at T₂.",
          },
        ],
      },
      /* @@THERMO_EXAM@@ */
    ],
  },
  /* @@KINETIC@@ */
];

export const links: Record<string, string | string[]> = {
  "11:Thermodynamics": "c11-phy-thermodynamics",
  "11:Heat and Thermodynamics": ["c11-phy-thermodynamics"],
};
