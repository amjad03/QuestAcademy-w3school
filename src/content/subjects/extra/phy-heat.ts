import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Thermal Properties of Matter                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "thermal-properties-of-matter",
    title: "Thermal Properties of Matter",
    icon: "🌡️",
    description: "Temperature scales, thermal expansion, calorimetry, latent heat and the three modes of heat transfer.",
    lessons: [
      {
        slug: "temperature-and-thermal-expansion",
        title: "Temperature and Thermal Expansion",
        summary: "Temperature scales and conversions, linear, area and volume expansion, and the anomalous expansion of water.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Railway tracks are laid with small gaps, overhead power lines sag more in May than in January, and a tight steel lid comes off a glass jar after a dip in hot water. All three are **thermal expansion**: most substances grow when heated.",
          },
          { type: "heading", text: "Temperature scales" },
          {
            type: "formula",
            tex: t`\frac{t_C}{100} = \frac{t_F - 32}{180} = \frac{T - 273.15}{100}`,
            caption: "Celsius, Fahrenheit and Kelvin share fixed points at ice (0 °C, 32 °F, 273.15 K) and steam (100 °C, 212 °F, 373.15 K)",
          },
          {
            type: "text",
            md: t`**Worked example.** On a 45 °C afternoon in Delhi: $t_F = \tfrac95(45) + 32 = 81 + 32 = 113$ °F, and $T = 45 + 273.15 = 318.15$ K. The two scales agree at $-40$: $\tfrac95(-40) + 32 = -40$.`,
          },
          { type: "heading", text: "Thermal expansion" },
          {
            type: "formula",
            tex: t`\Delta L = \alpha L\,\Delta T,\qquad \Delta A = \beta A\,\Delta T,\qquad \Delta V = \gamma V\,\Delta T,\qquad \alpha : \beta : \gamma = 1 : 2 : 3`,
            caption: "Linear, area and volume expansion of an isotropic solid",
          },
          {
            type: "table",
            headers: ["Material", t`$\alpha$ (K⁻¹, approx.)`],
            rows: [
              ["Aluminium", t`$2.4\times10^{-5}$`],
              ["Brass", t`$1.9\times10^{-5}$`],
              ["Copper", t`$1.7\times10^{-5}$`],
              ["Iron / steel", t`$1.2\times10^{-5}$`],
              ["Pyrex glass", t`$0.3\times10^{-5}$`],
              ["Invar (Fe–Ni alloy)", t`$0.1\times10^{-5}$ or less`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** A 12 m steel rail ($\alpha = 1.2\times10^{-5}$ K⁻¹) warms by 40 K from a winter night to a summer afternoon. $\Delta L = 1.2\times10^{-5}\times12\times40 = 5.76\times10^{-3}$ m $\approx 5.8$ mm. Without a gap, the rail would buckle.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`For an isotropic solid, the coefficient of volume expansion $\gamma$ is related to $\alpha$ by:`,
                options: [t`$\gamma = \alpha$`, t`$\gamma = 2\alpha$`, t`$\gamma = 3\alpha$`, t`$\gamma = \alpha/3$`],
                answer: 2,
                explain: t`$V = L^3 \Rightarrow \Delta V/V = 3\Delta L/L$, so $\gamma = 3\alpha$.`,
              },
            ],
          },
          { type: "heading", text: "Anomalous expansion of water" },
          {
            type: "text",
            md: "Water contracts when heated from 0 °C to 4 °C and expands only above 4 °C, so it is **densest at 4 °C**. In a cold lake the 4 °C water sinks, ice forms on top and insulates the water below, and fish survive the winter. In Ladakh's Pangong lake, the surface freezes while life continues beneath.",
          },
          { type: "illustration", emoji: "🧊", caption: "Lakes freeze from the top down because water is densest at 4 °C." },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "A **hole** in a metal plate gets **bigger** on heating, exactly as if it were made of the metal. Likewise a ring's inner radius grows. Options saying \"the hole shrinks\" are wrong.",
          },
          {
            type: "keypoints",
            items: [
              t`$t_C/100 = (t_F - 32)/180 = (T - 273.15)/100$.`,
              t`$\Delta L = \alpha L\Delta T$; $\beta = 2\alpha$, $\gamma = 3\alpha$.`,
              "Holes and cavities expand like the surrounding material.",
              "Water has maximum density at 4 °C; lakes freeze top-down.",
              "Bimetallic strips (thermostats, irons) bend because two metals have different α.",
            ],
          },
        ],
        flashcards: [
          { front: "Celsius to Fahrenheit", back: t`$t_F = \tfrac95t_C + 32$` },
          { front: "Temperature equal on both C and F scales", back: "−40" },
          { front: "Relation of α, β, γ", back: t`$\alpha:\beta:\gamma = 1:2:3$` },
          { front: "Temperature of maximum density of water", back: "4 °C" },
          { front: "Bimetallic strip", back: "Two metals with different α bonded together; bends on heating, used in thermostats." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Normal body temperature is 98.6 °F. In °C?",
            answer: 37,
            tolerance: 0.05,
            unit: "°C",
            explain: t`$t_C = \tfrac59(98.6 - 32) = \tfrac59(66.6) = 37$ °C.`,
          },
          {
            kind: "truefalse",
            q: "A hole drilled in a metal plate becomes smaller when the plate is heated.",
            answer: false,
            explain: "The hole expands as though it were filled with the same metal.",
          },
          {
            kind: "numeric",
            q: t`A 2 m brass rod ($\alpha = 2\times10^{-5}$ K⁻¹) is heated by 50 K. Increase in length, in mm?`,
            answer: 2,
            unit: "mm",
            explain: t`$\Delta L = 2\times10^{-5}\times2\times50 = 2\times10^{-3}$ m $= 2$ mm.`,
          },
          {
            kind: "fill",
            q: "Water has its maximum density at ___ °C.",
            answer: ["4"],
            explain: "Between 0 °C and 4 °C water contracts on heating.",
          },
          {
            kind: "mcq",
            q: "At what temperature do the Celsius and Fahrenheit scales show the same reading?",
            options: ["0", "−40", "40", "−32"],
            answer: 1,
            difficulty: 2,
            explain: t`$x = \tfrac95x + 32 \Rightarrow -\tfrac45x = 32 \Rightarrow x = -40$.`,
          },
          {
            kind: "numeric",
            q: t`A metal sheet's area increases by 0.2% when heated by 50 K. Its linear expansion coefficient, in units of $10^{-5}$ K⁻¹?`,
            answer: 2,
            difficulty: 3,
            explain: t`$\beta = 0.002/50 = 4\times10^{-5}$ K⁻¹, and $\alpha = \beta/2 = 2\times10^{-5}$ K⁻¹.`,
          },
        ],
      },
      {
        slug: "calorimetry-and-change-of-state",
        title: "Calorimetry and Change of State",
        summary: "Specific heat, heat capacity, the principle of mixtures, latent heat and the heating curve of water.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Coastal cities like Chennai and Mumbai have mild climates while Delhi swings from 5 °C to 45 °C. The reason is water's huge **specific heat**: the sea soaks up heat by day and releases it by night. Calorimetry is the bookkeeping of heat.",
          },
          { type: "formula", tex: t`Q = mc\,\Delta T, \qquad \text{heat capacity } S = mc, \qquad \text{molar specific heat } C = \frac{1}{\mu}\frac{\Delta Q}{\Delta T}`, caption: "c in J kg⁻¹ K⁻¹" },
          {
            type: "table",
            headers: ["Substance", "Specific heat c (J kg⁻¹ K⁻¹, approx.)"],
            rows: [
              ["Water", "4186"],
              ["Ice", "2100"],
              ["Aluminium", "900"],
              ["Iron", "450"],
              ["Copper", "387"],
              ["Mercury", "140"],
            ],
          },
          { type: "heading", text: "Principle of calorimetry" },
          {
            type: "text",
            md: t`In an insulated system, **heat lost by hot bodies = heat gained by cold bodies**. **Worked example:** 0.5 kg of iron ($c = 450$) at 200 °C is dropped into 2 kg of water ($c = 4200$) at 25 °C. $0.5(450)(200 - T) = 2(4200)(T - 25) \Rightarrow 45\,000 - 225T = 8400T - 210\,000 \Rightarrow T = 255\,000/8625 \approx 29.6$ °C.`,
          },
          { type: "heading", text: "Change of state and latent heat" },
          { type: "formula", tex: t`Q = mL`, caption: "Water: L_f = 3.34 × 10⁵ J/kg (fusion), L_v = 22.6 × 10⁵ J/kg (vaporisation)" },
          {
            type: "text",
            md: t`**Worked example.** Heat to turn 1 kg of ice at −10 °C into steam at 100 °C: ice to 0 °C: $1(2100)(10) = 21\,000$ J; melting: $334\,000$ J; water to 100 °C: $1(4186)(100) = 418\,600$ J; boiling: $2\,260\,000$ J. Total $\approx 3.03\times10^6$ J. Boiling alone takes about 75% of it.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Ice warms from −10 °C to 0 °C (temperature rises).",
              "Ice melts at 0 °C (flat: temperature constant).",
              "Water warms from 0 °C to 100 °C (temperature rises).",
              "Water boils at 100 °C (long flat: temperature constant).",
              "Steam warms above 100 °C.",
            ],
          },
          { type: "illustration", emoji: "♨️", caption: "Steam at 100 °C scalds worse than water at 100 °C: it releases 22.6 × 10⁵ J/kg of latent heat as it condenses on skin." },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How much heat, in kJ, raises 2 kg of water by 10 °C? (c = 4200 J kg⁻¹ K⁻¹)",
                answer: 84,
                unit: "kJ",
                explain: t`$Q = 2\times4200\times10 = 84\,000$ J $= 84$ kJ.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: t`When ice is mixed with water, **check first** whether there is enough heat to melt all the ice. 100 g of ice at 0 °C + 100 g of water at 40 °C ($c = 4200$, $L_f = 3.36\times10^5$): cooling the water to 0 °C releases 16 800 J, but melting all the ice needs 33 600 J. So only 50 g melts, and the final temperature is 0 °C, not some negative value from blind algebra.`,
          },
          {
            type: "text",
            md: "Boiling point rises with pressure, which is why a pressure cooker cooks dal faster, and falls at altitude. At the **triple point** of water (273.16 K, about 611 Pa) ice, water and vapour coexist in equilibrium.",
          },
          {
            type: "keypoints",
            items: [
              t`$Q = mc\Delta T$ for temperature change; $Q = mL$ for change of state at constant temperature.`,
              "Heat lost = heat gained in an isolated mixture.",
              "During melting and boiling, temperature stays constant.",
              "In ice–water problems, check whether all the ice can melt before solving.",
            ],
          },
        ],
        flashcards: [
          { front: "Specific heat of water", back: t`About 4186 J kg⁻¹ K⁻¹ (1 cal g⁻¹ °C⁻¹)` },
          { front: "Latent heat of fusion of ice", back: t`$3.34\times10^5$ J/kg (80 cal/g)` },
          { front: "Latent heat of vaporisation of water", back: t`$22.6\times10^5$ J/kg (540 cal/g)` },
          { front: "Principle of calorimetry", back: "Heat lost by hot bodies = heat gained by cold bodies." },
          { front: "Water equivalent of a calorimeter", back: "Mass of water with the same heat capacity as the calorimeter." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "While ice is melting at 0 °C, its temperature:",
            options: ["Rises steadily", "Falls", "Stays constant", "Rises then falls"],
            answer: 2,
            explain: "All the heat supplied goes into breaking the solid structure (latent heat).",
          },
          {
            kind: "truefalse",
            q: "The water equivalent of a calorimeter has the dimensions of mass.",
            answer: true,
            explain: "It is the mass of water with the same heat capacity, measured in kg or g.",
          },
          {
            kind: "numeric",
            q: t`How many grams of ice at 0 °C can be melted by 42 000 J of heat? ($L_f = 3.36\times10^5$ J/kg)`,
            answer: 125,
            unit: "g",
            difficulty: 2,
            explain: t`$m = 42\,000/336\,000 = 0.125$ kg $= 125$ g.`,
          },
          {
            kind: "fill",
            q: "Heat needed to change unit mass of a solid into liquid at constant temperature is the latent heat of ___.",
            answer: ["fusion"],
            explain: "Solid → liquid is fusion; liquid → gas is vaporisation.",
          },
          {
            kind: "order",
            q: "Arrange the stages of heating ice at −10 °C into steam at 110 °C.",
            items: ["Ice warms to 0 °C", "Ice melts at 0 °C", "Water warms to 100 °C", "Water boils at 100 °C", "Steam warms above 100 °C"],
            explain: "Two flat portions on the heating curve: melting and boiling.",
          },
          {
            kind: "numeric",
            q: "1 kg of water at 80 °C is mixed with 3 kg of water at 20 °C. Final temperature (no heat loss)?",
            answer: 35,
            unit: "°C",
            explain: t`$1(80 - T) = 3(T - 20) \Rightarrow 4T = 140 \Rightarrow T = 35$ °C.`,
          },
        ],
      },
      {
        slug: "heat-transfer",
        title: "Conduction, Convection and Radiation",
        summary: "Thermal conductivity, composite slabs, convection currents and the monsoon, Stefan's and Wien's laws, and Newton's law of cooling.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A steel spoon in hot chai warms your fingers (conduction), the hot air above a tandoor rises (convection), and you feel the Sun across 150 million km of empty space (radiation). Heat moves in three ways, each with its own law.",
          },
          { type: "heading", text: "Conduction" },
          { type: "formula", tex: t`H = \frac{dQ}{dt} = KA\frac{T_1 - T_2}{L}, \qquad R_{th} = \frac{L}{KA}`, caption: "K: thermal conductivity (W m⁻¹ K⁻¹); thermal resistances add in series" },
          {
            type: "table",
            headers: ["Material", "K (W m⁻¹ K⁻¹, approx.)"],
            rows: [
              ["Silver", "406"],
              ["Copper", "385"],
              ["Aluminium", "205"],
              ["Steel", "50"],
              ["Glass", "0.8"],
              ["Wood", "0.1–0.2"],
              ["Air", "0.024"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** Two slabs of equal area and thickness are joined. $K_1 = 4K_2$; the outer faces are at 100 °C and 0 °C. In steady state the same heat current passes through both: $4K_2(100 - T) = K_2(T - 0) \Rightarrow T = 80$ °C at the junction.`,
          },
          { type: "heading", text: "Convection" },
          {
            type: "text",
            md: "Warm fluid is less dense and rises, carrying heat with it. By day, land heats faster than the sea, warm air rises over land and a **sea breeze** blows in; at night the flow reverses (land breeze). On a giant scale, the summer heating of the Indian subcontinent draws moist ocean air inland: the **south-west monsoon**.",
          },
          { type: "heading", text: "Radiation" },
          {
            type: "formula",
            tex: t`H = e\sigma AT^4, \qquad \lambda_mT = b`,
            caption: "Stefan–Boltzmann law (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴) and Wien's displacement law (b = 2.9 × 10⁻³ m K)",
          },
          {
            type: "text",
            md: t`**Worked example.** Sunlight peaks near $\lambda_m = 500$ nm, so the Sun's surface temperature is $T = b/\lambda_m = 2.9\times10^{-3}/(5\times10^{-7}) = 5800$ K. Net radiation from a body at T to surroundings at $T_s$ is $e\sigma A(T^4 - T_s^4)$.`,
          },
          { type: "heading", text: "Newton's law of cooling" },
          {
            type: "formula",
            tex: t`\frac{dT}{dt} = -k(T - T_s), \qquad \frac{T_1 - T_2}{t} = k\left(\frac{T_1 + T_2}{2} - T_s\right)`,
            caption: "Rate of cooling ∝ excess temperature (small differences); the right form uses the average temperature",
          },
          {
            type: "text",
            md: t`**Worked example.** Tea cools from 80 °C to 60 °C in 5 min in a 20 °C room. $20/5 = k(70 - 20) \Rightarrow k = 0.08$ min⁻¹. In the next 5 min: $\frac{60 - x}{5} = 0.08\left(\frac{60 + x}{2} - 20\right) \Rightarrow 60 - x = 4 + 0.2x \Rightarrow x \approx 46.7$ °C. It cools more slowly as it nears room temperature.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "The absolute temperature of a black body doubles. By what factor does its radiated power increase?",
                answer: 16,
                explain: t`$H \propto T^4$: $2^4 = 16$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Stefan's and Wien's laws need temperature in **kelvin**: plugging in °C gives nonsense. Newton's law of cooling is valid only for **small** temperature differences; for large ones, use Stefan's law. In composite-slab questions, the **heat current** is the same in series slabs, not the temperature drop.",
          },
          {
            type: "keypoints",
            items: [
              t`Conduction: $H = KA\Delta T/L$; thermal resistance $L/KA$ adds in series.`,
              "Convection needs a fluid and gravity: sea breeze, land breeze, monsoon.",
              t`Radiation: $H = e\sigma AT^4$; $\lambda_mT = 2.9\times10^{-3}$ m K.`,
              "Newton's law: rate of cooling ∝ (T − Ts) for small differences.",
            ],
          },
        ],
        flashcards: [
          { front: "Rate of heat conduction", back: t`$H = KA(T_1 - T_2)/L$` },
          { front: "Stefan–Boltzmann law", back: t`$H = e\sigma AT^4$, $\sigma = 5.67\times10^{-8}$ W m⁻² K⁻⁴` },
          { front: "Wien's displacement law", back: t`$\lambda_mT = 2.9\times10^{-3}$ m K` },
          { front: "Newton's law of cooling", back: "Rate of cooling ∝ excess temperature over surroundings (for small differences)" },
          { front: "Sea breeze", back: "Daytime wind from sea to land, because land heats faster than water." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "During a sunny day at the coast, the breeze blows:",
            options: ["From land to sea", "From sea to land", "Parallel to the coast only", "Vertically downward"],
            answer: 1,
            explain: "Land heats faster; warm air rises over land and cooler sea air flows in.",
          },
          {
            kind: "numeric",
            q: t`A body at 2900 K radiates most strongly at which wavelength, in nm? ($b = 2.9\times10^{-3}$ m K)`,
            answer: 1000,
            unit: "nm",
            explain: t`$\lambda_m = 2.9\times10^{-3}/2900 = 10^{-6}$ m $= 1000$ nm (infrared).`,
          },
          {
            kind: "truefalse",
            q: "Stefan's law can be applied using temperatures in degrees Celsius.",
            answer: false,
            explain: "It needs absolute temperature (kelvin).",
          },
          {
            kind: "fill",
            q: "The SI unit of thermal conductivity is W m⁻¹ ___⁻¹.",
            answer: ["K", "kelvin"],
            explain: "From $K = HL/(A\\Delta T)$: W m⁻¹ K⁻¹.",
          },
          {
            kind: "numeric",
            q: "Two slabs of equal area and thickness are in series, with K₁ = 2K₂. The free face of slab 1 is at 90 °C and of slab 2 at 0 °C. Junction temperature?",
            answer: 60,
            unit: "°C",
            difficulty: 3,
            explain: t`$2K_2(90 - T) = K_2(T - 0) \Rightarrow 180 = 3T \Rightarrow T = 60$ °C.`,
          },
          {
            kind: "mcq",
            q: "Newton's law of cooling is a special case of which law, valid for small temperature differences?",
            options: ["Wien's law", "Stefan–Boltzmann law", "Kirchhoff's law", "Fourier's law"],
            answer: 1,
            difficulty: 2,
            explain: t`For small $\Delta T$, $T^4 - T_s^4 \approx 4T_s^3(T - T_s)$, so the radiated power ∝ excess temperature.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Thermodynamics                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "thermodynamics",
    title: "Thermodynamics",
    icon: "⚙️",
    description: "Zeroth and first laws, thermodynamic processes, heat engines, refrigerators, the second law and the Carnot cycle.",
    lessons: [
      {
        slug: "zeroth-and-first-law",
        title: "Zeroth and First Laws of Thermodynamics",
        summary: "Thermal equilibrium, internal energy, heat and work, the first law and molar specific heats of gases.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A pressure cooker on a gas stove takes in heat, its steam pushes the weight up (work), and the food inside gets hotter (internal energy). Thermodynamics tracks how heat, work and internal energy trade with each other, without worrying about individual molecules.",
          },
          { type: "heading", text: "Zeroth law" },
          {
            type: "text",
            md: "If systems A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other. This is what makes a thermometer meaningful, and it defines **temperature** as the quantity that is equal for bodies in thermal equilibrium.",
          },
          { type: "heading", text: "Heat, work and internal energy" },
          {
            type: "table",
            headers: ["Quantity", "Type", "Notes"],
            rows: [
              ["Internal energy U", "State function", "Depends only on the state (for an ideal gas, only on T)"],
              ["Heat Q", "Path function", "Energy transfer due to temperature difference"],
              ["Work W", "Path function", t`$W = \int p\,dV$ = area under the p–V curve`],
              ["p, V, T", "State variables", "Fix the equilibrium state"],
            ],
          },
          { type: "heading", text: "First law" },
          { type: "formula", tex: t`\Delta Q = \Delta U + \Delta W`, caption: "ΔQ: heat supplied to the system; ΔW: work done BY the system (NCERT convention)" },
          {
            type: "text",
            md: t`**Worked example 1.** A gas absorbs 500 J of heat and does 200 J of work on the piston. $\Delta U = 500 - 200 = 300$ J. **Worked example 2.** A gas expands at a constant $1\times10^5$ Pa from 2 L to 5 L: $W = p\Delta V = 10^5\times3\times10^{-3} = 300$ J.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A system absorbs 800 J of heat and does 300 J of work. Change in internal energy?",
                answer: 500,
                unit: "J",
                explain: t`$\Delta U = \Delta Q - \Delta W = 800 - 300 = 500$ J.`,
              },
            ],
          },
          { type: "heading", text: "Specific heats of an ideal gas" },
          { type: "formula", tex: t`C_p - C_v = R, \qquad \gamma = \frac{C_p}{C_v}`, caption: "Mayer's relation; γ = 5/3 for monatomic, 7/5 for diatomic gases" },
          {
            type: "text",
            md: "$C_p > C_v$ because at constant pressure part of the heat goes into doing work as the gas expands, so more heat is needed for the same rise in temperature.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Sign-convention trap",
            md: "Physics (NCERT) writes $\\Delta Q = \\Delta U + \\Delta W$ with W done **by** the gas. Chemistry writes $\\Delta U = q + w$ with w done **on** the system. Both are the same law; mixing the conventions in one problem flips the answer's sign.",
          },
          {
            type: "keypoints",
            items: [
              "Zeroth law defines temperature.",
              t`First law: $\Delta Q = \Delta U + \Delta W$, energy conservation.`,
              "U is a state function; Q and W depend on the path.",
              t`$W = \int p\,dV$: area under the p–V curve; in a cyclic process, $\Delta U = 0$.`,
              t`$C_p - C_v = R$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Zeroth law", back: "Two systems each in equilibrium with a third are in equilibrium with each other." },
          { front: "First law (NCERT form)", back: t`$\Delta Q = \Delta U + \Delta W$, W by the system` },
          { front: "Mayer's relation", back: t`$C_p - C_v = R$` },
          { front: "Work in a p–V diagram", back: "Area under the curve" },
          { front: "ΔU in a cyclic process", back: "Zero" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a path function?",
            options: ["Internal energy", "Temperature", "Heat", "Pressure"],
            answer: 2,
            explain: "Heat and work depend on the process; U, T, p are state quantities.",
          },
          {
            kind: "truefalse",
            q: "In a cyclic process, the change in internal energy of the system is zero.",
            answer: true,
            explain: "The system returns to its initial state and U is a state function.",
          },
          {
            kind: "numeric",
            q: t`A gas expands at constant pressure $2\times10^5$ Pa from 1 L to 4 L. Work done by the gas, in joules?`,
            answer: 600,
            unit: "J",
            explain: t`$W = 2\times10^5\times3\times10^{-3} = 600$ J.`,
          },
          {
            kind: "fill",
            q: "The zeroth law of thermodynamics leads to the concept of ___.",
            answer: ["temperature"],
            explain: "Bodies in thermal equilibrium share the same temperature.",
          },
          {
            kind: "mcq",
            q: t`The ratio $\gamma = C_p/C_v$ for a monatomic ideal gas is:`,
            options: ["7/5", "5/3", "4/3", "9/7"],
            answer: 1,
            explain: t`$C_v = \tfrac32R$, $C_p = \tfrac52R$, so $\gamma = 5/3$.`,
          },
          {
            kind: "numeric",
            q: "A gas is compressed by doing 400 J of work on it, and it loses 150 J of heat. Change in its internal energy?",
            answer: 250,
            unit: "J",
            difficulty: 2,
            explain: t`$\Delta Q = -150$ J, $\Delta W = -400$ J: $\Delta U = -150 - (-400) = 250$ J.`,
          },
        ],
      },
      {
        slug: "thermodynamic-processes",
        title: "Thermodynamic Processes",
        summary: "Isothermal, adiabatic, isobaric, isochoric and cyclic processes with their work, heat and p–V graphs.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A tyre pump gets hot because air is compressed quickly, with no time to lose heat: an **adiabatic** process. A gas compressed slowly in a cylinder dipped in a water bath stays at the same temperature: **isothermal**. Every process question begins by naming which quantity is held fixed.",
          },
          {
            type: "table",
            headers: ["Process", "Constant", "Work by gas", "First-law result"],
            rows: [
              ["Isothermal", "T", t`$nRT\ln(V_2/V_1)$`, t`$\Delta U = 0$, $Q = W$`],
              ["Adiabatic", "Q = 0", t`$\dfrac{nR(T_1 - T_2)}{\gamma - 1}$`, t`$\Delta U = -W$`],
              ["Isobaric", "p", t`$p(V_2 - V_1)$`, t`$Q = nC_p\Delta T$`],
              ["Isochoric", "V", "0", t`$Q = \Delta U = nC_v\Delta T$`],
              ["Cyclic", "returns to start", "Area enclosed", t`$\Delta U = 0$, $Q = W$`],
            ],
          },
          {
            type: "formula",
            tex: t`pV^\gamma = \text{const},\qquad TV^{\gamma - 1} = \text{const},\qquad p^{1-\gamma}T^\gamma = \text{const}`,
            caption: "Adiabatic relations for an ideal gas (quasi-static)",
          },
          {
            type: "text",
            md: t`**Worked example (isothermal).** 1 mol of ideal gas at 300 K expands isothermally to twice its volume. $W = nRT\ln2 = 1\times8.314\times300\times0.693 \approx 1.73\times10^3$ J. All 1.73 kJ comes in as heat, since $\Delta U = 0$.`,
          },
          {
            type: "text",
            md: t`**Worked example (adiabatic).** In a diesel engine, air ($\gamma = 1.4$) at 300 K is compressed quickly to 1/8 of its volume. $T_2 = T_1(V_1/V_2)^{\gamma - 1} = 300\times8^{0.4} \approx 300\times2.30 = 690$ K, hot enough to ignite the fuel without a spark plug.`,
          },
          { type: "heading", text: "Reading p–V graphs" },
          {
            type: "list",
            items: [
              t`Slope of an adiabat $= -\gamma p/V$; slope of an isotherm $= -p/V$. The adiabat is **steeper**.`,
              "Clockwise cycle on a p–V diagram: net work done **by** the gas is positive (engine). Anticlockwise: net work on the gas (refrigerator).",
              "For the same expansion from the same initial state, work done: isobaric > isothermal > adiabatic.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In an adiabatic process:",
                options: ["Temperature is constant", "No heat is exchanged", "Volume is constant", "Pressure is constant"],
                answer: 1,
                explain: "Adiabatic means Q = 0; any work comes from internal energy.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "In **free expansion** of an ideal gas into vacuum, Q = 0, W = 0 and so ΔU = 0: the temperature does not change. It is adiabatic but **not** quasi-static, so $pV^\\gamma$ = constant does **not** apply. Many students wrongly use the adiabatic relation and predict cooling.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Quick check",
            md: "Isochoric: no work. Isothermal: no change in U. Adiabatic: no heat. Write the zero first, then the first law gives the rest.",
          },
          {
            type: "keypoints",
            items: [
              t`Isothermal: $W = nRT\ln(V_2/V_1)$, $\Delta U = 0$.`,
              t`Adiabatic: $pV^\gamma$ = const, $W = nR(T_1 - T_2)/(\gamma - 1)$.`,
              t`Isobaric: $W = p\Delta V$; isochoric: $W = 0$.`,
              "Cyclic: net work = area enclosed; clockwise means engine.",
            ],
          },
        ],
        flashcards: [
          { front: "Work in isothermal expansion", back: t`$nRT\ln(V_2/V_1)$` },
          { front: "Work in adiabatic expansion", back: t`$\dfrac{nR(T_1 - T_2)}{\gamma - 1} = \dfrac{p_1V_1 - p_2V_2}{\gamma - 1}$` },
          { front: "Adiabatic relation", back: t`$pV^\gamma$ = constant` },
          { front: "Slope of adiabat vs isotherm", back: "Adiabat is γ times steeper" },
          { front: "Free expansion of an ideal gas", back: "Q = 0, W = 0, ΔU = 0, T unchanged" },
        ],
        quiz: [
          {
            kind: "truefalse",
            q: "On a p–V diagram, an adiabatic curve through a point is steeper than the isothermal curve through the same point.",
            answer: true,
            explain: t`Adiabatic slope $-\gamma p/V$ vs isothermal slope $-p/V$, with $\gamma > 1$.`,
          },
          {
            kind: "numeric",
            q: t`2 mol of a monatomic ideal gas are heated at constant volume by 10 K. Heat supplied, in joules? ($R = 8.314$)`,
            answer: 249.4,
            tolerance: 0.5,
            unit: "J",
            explain: t`$Q = nC_v\Delta T = 2\times\tfrac32(8.314)\times10 = 249.4$ J.`,
          },
          {
            kind: "fill",
            q: "In an isothermal process of an ideal gas, the change in internal energy is ___.",
            answer: ["zero", "0"],
            explain: "U of an ideal gas depends only on T.",
          },
          {
            kind: "numeric",
            q: "A monatomic ideal gas at 300 K is compressed adiabatically to 1/8 of its volume. Final temperature in kelvin?",
            answer: 1200,
            unit: "K",
            difficulty: 3,
            explain: t`$T_2 = 300\times8^{\gamma - 1} = 300\times8^{2/3} = 300\times4 = 1200$ K.`,
          },
          {
            kind: "order",
            q: "An ideal gas expands from V to 2V starting from the same state. Order the processes by work done by the gas, greatest first.",
            items: ["Isobaric", "Isothermal", "Adiabatic"],
            explain: "On a p–V diagram, the isobar lies highest and the adiabat lowest, so the areas under them follow that order.",
          },
          {
            kind: "mcq",
            q: "A gas is taken around a cycle that is traced clockwise on a p–V diagram. Then:",
            options: ["Net work is done on the gas", "Net work is done by the gas", "Net heat absorbed is zero", "Internal energy increases"],
            answer: 1,
            difficulty: 2,
            explain: "Clockwise cycle: expansion happens at higher pressure, so net work by the gas = enclosed area > 0.",
          },
        ],
      },
      {
        slug: "second-law-and-heat-engines",
        title: "Heat Engines, Refrigerators and the Second Law",
        summary: "Efficiency and COP, the Kelvin–Planck and Clausius statements, reversibility and the Carnot engine.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A coal power plant at Korba or a car's petrol engine turns heat into work, but never all of it: much is dumped into cooling towers or the exhaust. The **second law** explains why no engine can be 100% efficient.",
          },
          { type: "heading", text: "Heat engines and refrigerators" },
          {
            type: "formula",
            tex: t`\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1}, \qquad \beta = \frac{Q_2}{W} = \frac{Q_2}{Q_1 - Q_2}`,
            caption: "Engine efficiency (Q₁ from source, Q₂ to sink) and refrigerator coefficient of performance",
          },
          {
            type: "illustration",
            emoji: "🏭",
            caption: "Engine: source → working substance → work + heat rejected to sink. Refrigerator: work pumps heat from cold to hot.",
          },
          { type: "heading", text: "The second law" },
          {
            type: "list",
            items: [
              "**Kelvin–Planck:** no process is possible whose sole result is the absorption of heat from a reservoir and its complete conversion into work.",
              "**Clausius:** no process is possible whose sole result is the transfer of heat from a colder object to a hotter one.",
              "The two statements are equivalent: violating one lets you violate the other.",
            ],
          },
          {
            type: "text",
            md: "A process is **reversible** if it can be retraced so that both the system and surroundings return exactly to their original states. Friction, free expansion and heat flow across a finite temperature difference make real processes irreversible.",
          },
          { type: "heading", text: "Carnot engine" },
          {
            type: "list",
            ordered: true,
            items: [
              t`Isothermal expansion at $T_1$, absorbing $Q_1$.`,
              t`Adiabatic expansion, cooling from $T_1$ to $T_2$.`,
              t`Isothermal compression at $T_2$, rejecting $Q_2$.`,
              t`Adiabatic compression, heating back to $T_1$.`,
            ],
          },
          { type: "formula", tex: t`\eta_{Carnot} = 1 - \frac{T_2}{T_1}, \qquad \beta_{Carnot} = \frac{T_2}{T_1 - T_2}`, caption: "Carnot's theorem: no engine between the same two reservoirs beats this; it is independent of the working substance" },
          {
            type: "text",
            md: t`**Worked example 1.** An engine works between 500 K and 300 K. $\eta_{max} = 1 - 300/500 = 0.40$. From 1000 J of heat it can deliver at most 400 J of work. **Worked example 2.** A fridge keeps its freezer at −13 °C (260 K) in a 27 °C (300 K) kitchen. Ideal COP $= 260/(300 - 260) = 6.5$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Efficiency (in %) of a Carnot engine working between 127 °C and 27 °C?",
                answer: 25,
                unit: "%",
                explain: t`$T_1 = 400$ K, $T_2 = 300$ K: $\eta = 1 - 300/400 = 25\%$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET / JEE trap",
            md: "Always convert to **kelvin** before using $1 - T_2/T_1$; using °C (here $1 - 27/127$) gives a wrong 79%. Also, for a Carnot engine run in reverse, $\\beta = (1 - \\eta)/\\eta$. And a COP greater than 1 is normal; an efficiency of 1 is impossible.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Real numbers",
            md: "Indian coal-fired power stations convert only about 33–38% of the fuel's heat into electricity; the rest leaves through cooling towers and flue gases. Supercritical plants raise the steam temperature to push efficiency higher.",
          },
          {
            type: "keypoints",
            items: [
              t`Engine: $\eta = W/Q_1 = 1 - Q_2/Q_1 < 1$.`,
              t`Refrigerator: $\beta = Q_2/W$, can exceed 1.`,
              "Kelvin–Planck and Clausius statements are equivalent forms of the second law.",
              t`Carnot: $\eta = 1 - T_2/T_1$ (kelvin), the maximum possible, independent of working substance.`,
            ],
          },
        ],
        flashcards: [
          { front: "Efficiency of a heat engine", back: t`$\eta = W/Q_1 = 1 - Q_2/Q_1$` },
          { front: "COP of a refrigerator", back: t`$\beta = Q_2/W$` },
          { front: "Kelvin–Planck statement", back: "No engine can convert heat from a single reservoir completely into work." },
          { front: "Clausius statement", back: "Heat cannot flow by itself from a colder body to a hotter body." },
          { front: "Carnot efficiency", back: t`$1 - T_2/T_1$ (temperatures in kelvin)` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "\"No process is possible whose sole result is the complete conversion of heat from a reservoir into work.\" This is the:",
            options: ["Zeroth law", "First law", "Kelvin–Planck statement", "Clausius statement"],
            answer: 2,
            explain: "It is the Kelvin–Planck form of the second law.",
          },
          {
            kind: "truefalse",
            q: "The efficiency of a Carnot engine depends on the working substance used.",
            answer: false,
            explain: "It depends only on the source and sink temperatures.",
          },
          {
            kind: "numeric",
            q: "A refrigerator with COP 5 removes 500 J of heat from its cold compartment per cycle. Work input per cycle?",
            answer: 100,
            unit: "J",
            difficulty: 2,
            explain: t`$W = Q_2/\beta = 500/5 = 100$ J.`,
          },
          {
            kind: "order",
            q: "Arrange the four steps of a Carnot cycle, starting from the hot reservoir.",
            items: ["Isothermal expansion at T₁", "Adiabatic expansion from T₁ to T₂", "Isothermal compression at T₂", "Adiabatic compression from T₂ to T₁"],
            explain: "Two isotherms and two adiabats, alternating.",
          },
          {
            kind: "numeric",
            q: "A Carnot engine has efficiency 1/6. Lowering the sink temperature by 62 K raises it to 1/3. Source temperature in kelvin?",
            answer: 372,
            unit: "K",
            difficulty: 3,
            explain: t`$T_2 = \tfrac56T_1$ and $T_2 - 62 = \tfrac23T_1$. Subtracting: $\tfrac16T_1 = 62 \Rightarrow T_1 = 372$ K (sink 310 K).`,
          },
          {
            kind: "fill",
            q: "A process that can be retraced so that system and surroundings both return to their initial states is called ___.",
            answer: ["reversible"],
            explain: "Real processes with friction or finite temperature gaps are irreversible.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Kinetic Theory                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "kinetic-theory",
    title: "Kinetic Theory",
    icon: "🎈",
    description: "Ideal gas laws, the molecular picture of pressure and temperature, molecular speeds, equipartition and mean free path.",
    lessons: [
      {
        slug: "ideal-gas-and-postulates",
        title: "The Ideal Gas and Kinetic Postulates",
        summary: "The ideal gas equation, the gas laws, real-gas deviations and the assumptions of kinetic theory.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A balloon from a Diwali mela shrinks on a cold night and an LPG cylinder's pressure depends on the weather. Gases obey simple laws because their molecules are tiny and far apart. Kinetic theory explains those laws from molecules in motion.",
          },
          { type: "formula", tex: t`pV = nRT = Nk_BT`, caption: "R = 8.314 J mol⁻¹ K⁻¹, k_B = R/N_A = 1.38 × 10⁻²³ J/K, N_A = 6.022 × 10²³ mol⁻¹" },
          {
            type: "table",
            headers: ["Law", "Held constant", "Statement"],
            rows: [
              ["Boyle's law", "n, T", t`$pV$ = constant`],
              ["Charles' law", "n, p", t`$V \propto T$`],
              ["Gay-Lussac's law", "n, V", t`$p \propto T$`],
              ["Avogadro's law", "p, T", "Equal volumes contain equal numbers of molecules"],
              ["Dalton's law", "V, T", t`$p = p_1 + p_2 + \dots$ for non-reacting gases`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** Molar volume at STP: $V = RT/p = 8.314\times273.15/(1.013\times10^5) \approx 22.4\times10^{-3}$ m³ $= 22.4$ L. **Worked example 2.** Molecules in 1 m³ of air at 300 K and $10^5$ Pa: $N = pV/k_BT = 10^5/(1.38\times10^{-23}\times300) \approx 2.4\times10^{25}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A gas at 2 atm occupies 3 L. At constant temperature it is compressed to 1.5 L. New pressure in atm?",
                answer: 4,
                unit: "atm",
                explain: t`Boyle: $p_2 = 2\times3/1.5 = 4$ atm.`,
              },
            ],
          },
          { type: "heading", text: "Postulates of kinetic theory" },
          {
            type: "list",
            items: [
              "A gas consists of a very large number of identical molecules in random motion.",
              "Molecular size is negligible compared with the distance between molecules.",
              "Molecules exert no force on each other except during collisions.",
              "Collisions with each other and with the walls are perfectly elastic and take negligible time.",
              "Between collisions, molecules move in straight lines with constant speed.",
            ],
          },
          { type: "heading", text: "Real gases" },
          {
            type: "text",
            md: t`Real gases deviate from $pV = nRT$ at **high pressure** (molecular volume matters) and **low temperature** (attractions matter). The compressibility factor $Z = pV/nRT$ equals 1 only for an ideal gas. Real gases behave most ideally at low pressure and high temperature.`,
          },
          { type: "illustration", emoji: "🎈", caption: "A balloon shrinks in a freezer and swells again in sunlight: Charles' law at home." },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "Temperature in gas laws must be in **kelvin**. Doubling a temperature from 20 °C to 40 °C does **not** double the volume; it goes from 293 K to 313 K, an increase of only about 7%.",
          },
          {
            type: "keypoints",
            items: [
              t`$pV = nRT = Nk_BT$, with $k_B = R/N_A$.`,
              "Boyle, Charles, Gay-Lussac, Avogadro and Dalton are special cases of the ideal gas law.",
              "Kinetic theory assumes point molecules, no forces except in elastic collisions.",
              "Real gases approach ideal behaviour at low p and high T.",
            ],
          },
        ],
        flashcards: [
          { front: "Ideal gas equation", back: t`$pV = nRT = Nk_BT$` },
          { front: "Boltzmann constant", back: t`$k_B = R/N_A = 1.38\times10^{-23}$ J/K` },
          { front: "Molar volume at STP", back: "22.4 L" },
          { front: "Dalton's law", back: "Total pressure = sum of partial pressures of non-reacting gases" },
          { front: "When do real gases behave ideally?", back: "Low pressure and high temperature" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A gas occupies 2 L at 300 K. At constant pressure it is heated to 450 K. New volume in litres?",
            answer: 3,
            unit: "L",
            explain: t`Charles: $V_2 = 2\times450/300 = 3$ L.`,
          },
          {
            kind: "mcq",
            q: "Real gases behave most like an ideal gas at:",
            options: ["High pressure, low temperature", "Low pressure, high temperature", "High pressure, high temperature", "Low pressure, low temperature"],
            answer: 1,
            explain: "Molecules are then far apart and fast, so their volume and attractions matter least.",
          },
          {
            kind: "truefalse",
            q: "The Boltzmann constant equals the gas constant divided by Avogadro's number.",
            answer: true,
            explain: t`$k_B = R/N_A = 8.314/6.022\times10^{23} = 1.38\times10^{-23}$ J/K.`,
          },
          {
            kind: "numeric",
            q: t`A gas at $8.314\times10^4$ Pa occupies 0.03 m³ at 300 K. Number of moles? ($R = 8.314$)`,
            answer: 1,
            unit: "mol",
            difficulty: 2,
            explain: t`$n = pV/RT = (8.314\times10^4\times0.03)/(8.314\times300) = 2494.2/2494.2 = 1$ mol.`,
          },
          {
            kind: "fill",
            q: "The total pressure of a mixture of non-reacting ideal gases equals the sum of their partial pressures. This is ___'s law.",
            answer: ["Dalton", "Dalton's"],
            explain: "John Dalton's law of partial pressures.",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT a postulate of the kinetic theory of gases?",
            options: ["Molecules are in random motion", "Collisions are perfectly elastic", "Molecules attract each other strongly between collisions", "Molecular size is negligible"],
            answer: 2,
            explain: "Kinetic theory assumes no intermolecular forces except during collisions.",
          },
        ],
      },
      {
        slug: "pressure-temperature-and-molecular-speeds",
        title: "Pressure, Temperature and Molecular Speeds",
        summary: "Deriving gas pressure from molecular collisions, the kinetic meaning of temperature, and rms, average and most probable speeds.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "The air in your room presses on every square metre of wall with about 100 000 N. That push is the combined effect of trillions of molecules bouncing off the wall each second. Kinetic theory turns that picture into a formula.",
          },
          { type: "heading", text: "Pressure from collisions" },
          {
            type: "list",
            ordered: true,
            items: [
              t`A molecule of mass m moving with $v_x$ hits a wall of a cube of side l and rebounds: momentum change $= 2mv_x$.`,
              t`It returns to the same wall every $2l/v_x$, so the average force it exerts is $2mv_x\div(2l/v_x) = mv_x^2/l$.`,
              t`Summing over N molecules and using $\langle v_x^2\rangle = \tfrac13\langle v^2\rangle$ by symmetry gives the result below.`,
            ],
          },
          { type: "formula", tex: t`p = \frac13\,nm\langle v^2\rangle = \frac13\rho\,v_{rms}^2, \qquad pV = \frac23E_{trans}`, caption: "n = number density, ρ = density of the gas" },
          { type: "heading", text: "Kinetic meaning of temperature" },
          { type: "formula", tex: t`\overline{KE}_{trans} = \frac32k_BT \ \text{per molecule}`, caption: "Temperature measures the average translational kinetic energy" },
          {
            type: "text",
            md: t`**Worked example.** At 300 K, each molecule of any gas has average translational KE $= \tfrac32(1.38\times10^{-23})(300) = 6.21\times10^{-21}$ J, whether it is helium or oxygen.`,
          },
          { type: "heading", text: "Three molecular speeds" },
          {
            type: "formula",
            tex: t`v_{rms} = \sqrt{\frac{3RT}{M}},\qquad \bar v = \sqrt{\frac{8RT}{\pi M}},\qquad v_{mp} = \sqrt{\frac{2RT}{M}}`,
            caption: "M = molar mass in kg/mol. Ratio v_mp : v̄ : v_rms ≈ 1.41 : 1.60 : 1.73",
          },
          {
            type: "text",
            md: t`**Worked example.** For nitrogen ($M = 0.028$ kg/mol) at 300 K: $v_{rms} = \sqrt{3\times8.314\times300/0.028} = \sqrt{2.67\times10^5} \approx 517$ m/s, faster than a rifle bullet. Hydrogen molecules on Earth are about 3.7 times faster, and over time some reach the 11.2 km/s escape speed, which is why our atmosphere has almost no free hydrogen, and the Moon (escape speed 2.4 km/s) has no atmosphere at all.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "At what temperature (in K) will the rms speed of a gas be double its value at 27 °C?",
                answer: 1200,
                unit: "K",
                explain: t`$v_{rms} \propto \sqrt T$: doubling needs $4\times300 = 1200$ K (927 °C).`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: t`$v_{rms} \propto \sqrt{T/M}$. Doubling T multiplies $v_{rms}$ by $\sqrt2$, **not** 2. And at the same temperature all gases have the same average KE, but lighter gases have higher speeds: $v_{H_2}/v_{O_2} = \sqrt{32/2} = 4$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$p = \tfrac13\rho v_{rms}^2$; $pV = \tfrac23E$.`,
              t`Average translational KE per molecule $= \tfrac32k_BT$, the same for every gas at a given T.`,
              t`$v_{mp} < \bar v < v_{rms}$, all $\propto\sqrt{T/M}$.`,
              "Light gases escape planets with low escape speeds.",
            ],
          },
        ],
        flashcards: [
          { front: "Kinetic pressure of a gas", back: t`$p = \tfrac13\rho v_{rms}^2$` },
          { front: "Average KE per molecule", back: t`$\tfrac32k_BT$` },
          { front: "rms speed", back: t`$v_{rms} = \sqrt{3RT/M}$` },
          { front: "Order of molecular speeds", back: t`$v_{mp} < \bar v < v_{rms}$` },
          { front: "rms speed of N₂ at 300 K", back: "About 517 m/s" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For a gas at a given temperature, the correct order of molecular speeds is:",
            options: [t`$v_{rms} < \bar v < v_{mp}$`, t`$v_{mp} < \bar v < v_{rms}$`, t`$\bar v < v_{mp} < v_{rms}$`, t`$v_{mp} < v_{rms} < \bar v$`],
            answer: 1,
            explain: t`Coefficients $\sqrt2 < \sqrt{8/\pi} < \sqrt3$, i.e. 1.41 < 1.60 < 1.73.`,
          },
          {
            kind: "numeric",
            q: "Ratio of rms speeds of hydrogen to oxygen molecules at the same temperature?",
            answer: 4,
            explain: t`$\sqrt{M_{O_2}/M_{H_2}} = \sqrt{32/2} = 4$.`,
          },
          {
            kind: "truefalse",
            q: "At the same temperature, helium atoms and oxygen molecules have the same average translational kinetic energy.",
            answer: true,
            explain: t`Average translational KE $= \tfrac32k_BT$ depends only on T.`,
          },
          {
            kind: "fill",
            q: "The average translational kinetic energy of a gas molecule is (3/2)___T, where the blank is the Boltzmann constant.",
            answer: ["k", "kB", "k_B", "kb"],
            explain: t`$\overline{KE} = \tfrac32k_BT$.`,
          },
          {
            kind: "numeric",
            q: "A gas of density 1.2 kg/m³ has rms speed 500 m/s. Its pressure, in kPa?",
            answer: 100,
            unit: "kPa",
            difficulty: 3,
            explain: t`$p = \tfrac13\rho v_{rms}^2 = \tfrac13(1.2)(250\,000) = 10^5$ Pa $= 100$ kPa.`,
          },
          {
            kind: "mcq",
            q: "If the absolute temperature of a gas is doubled, its rms speed becomes:",
            options: ["Double", t`$\sqrt2$ times`, "Four times", "Half"],
            answer: 1,
            difficulty: 2,
            explain: t`$v_{rms} \propto \sqrt T$.`,
          },
        ],
      },
      {
        slug: "equipartition-and-mean-free-path",
        title: "Degrees of Freedom, Equipartition and Mean Free Path",
        summary: "Degrees of freedom, the law of equipartition, specific heats of gases and solids, and mean free path.",
        minutes: 18,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Why is γ for helium 1.67 but for air 1.40? A helium atom can only move; an oxygen molecule can also tumble. Counting the independent ways a molecule can store energy, its **degrees of freedom**, explains the specific heats of every ideal gas.",
          },
          { type: "heading", text: "Degrees of freedom" },
          {
            type: "table",
            headers: ["Molecule", "Translational", "Rotational", "Total f (no vibration)"],
            rows: [
              ["Monatomic (He, Ar)", "3", "0", "3"],
              ["Diatomic, rigid (O₂, N₂)", "3", "2", "5"],
              ["Non-linear polyatomic, rigid (NH₃, CH₄)", "3", "3", "6"],
            ],
          },
          {
            type: "text",
            md: "At high temperatures a diatomic molecule also vibrates, adding 2 more terms (kinetic and potential), so f = 7.",
          },
          { type: "heading", text: "Law of equipartition of energy" },
          {
            type: "formula",
            tex: t`\text{Energy per quadratic term} = \tfrac12k_BT, \qquad U = \frac f2RT\ \text{(per mole)}`,
            caption: "In thermal equilibrium energy is shared equally among all degrees of freedom",
          },
          {
            type: "formula",
            tex: t`C_v = \frac f2R,\qquad C_p = \left(\frac f2 + 1\right)R,\qquad \gamma = 1 + \frac2f`,
          },
          {
            type: "table",
            headers: ["Gas", t`$C_v$`, t`$C_p$`, t`$\gamma$`],
            rows: [
              ["Monatomic", t`$\tfrac32R$`, t`$\tfrac52R$`, "5/3 ≈ 1.67"],
              ["Diatomic (rigid)", t`$\tfrac52R$`, t`$\tfrac72R$`, "7/5 = 1.40"],
              ["Non-linear polyatomic (rigid)", t`$3R$`, t`$4R$`, "4/3 ≈ 1.33"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example: mixture.** 1 mol of helium is mixed with 1 mol of oxygen. $C_{v,mix} = \dfrac{1(\tfrac32R) + 1(\tfrac52R)}{2} = 2R$, $C_{p,mix} = 3R$, so $\gamma_{mix} = 1.5$. **Solids:** each atom vibrates in 3 directions with KE and PE, giving $3k_BT$ per atom and $C = 3R \approx 25$ J mol⁻¹ K⁻¹ (Dulong–Petit law).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The number of degrees of freedom of a rigid diatomic molecule is:",
                options: ["3", "5", "6", "7"],
                answer: 1,
                explain: "3 translational + 2 rotational (rotation about the bond axis does not count).",
              },
            ],
          },
          { type: "heading", text: "Mean free path" },
          {
            type: "formula",
            tex: t`\lambda = \frac{1}{\sqrt2\,\pi d^2n} = \frac{k_BT}{\sqrt2\,\pi d^2p}`,
            caption: "Average distance travelled between collisions (d = molecular diameter, n = number density)",
          },
          {
            type: "text",
            md: t`**Worked example.** For nitrogen at STP, $n \approx 2.7\times10^{25}$ m⁻³ and $d \approx 3\times10^{-10}$ m: $\lambda = 1/(1.414\times3.14\times9\times10^{-20}\times2.7\times10^{25}) \approx 9\times10^{-8}$ m, about 300 molecular diameters. This is why a smell spreads slowly across a room even though molecules move at hundreds of m/s.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "Equipartition is a **classical** result. At room temperature vibrations of O₂ and N₂ are \"frozen\", so use f = 5 and γ = 1.4 unless the question says the gas vibrates. In mixtures, average $C_v$ by moles, then find γ = $C_p/C_v$; never average the γ values directly.",
          },
          {
            type: "keypoints",
            items: [
              "Each quadratic energy term gets ½kT; a vibrational mode gets kT.",
              t`$C_v = \tfrac f2R$, $\gamma = 1 + 2/f$.`,
              "Solids: C ≈ 3R (Dulong–Petit), failing at low temperatures.",
              t`Mean free path $\lambda \propto 1/(nd^2)$, so it grows as pressure falls.`,
            ],
          },
        ],
        flashcards: [
          { front: "Law of equipartition", back: t`Each quadratic degree of freedom gets $\tfrac12k_BT$ on average.` },
          { front: "γ in terms of f", back: t`$\gamma = 1 + 2/f$` },
          { front: "Degrees of freedom of a rigid diatomic molecule", back: "5 (3 translational + 2 rotational)" },
          { front: "Dulong–Petit law", back: t`Molar heat capacity of solids $\approx 3R \approx 25$ J mol⁻¹ K⁻¹` },
          { front: "Mean free path", back: t`$\lambda = \dfrac{1}{\sqrt2\pi d^2n}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A gas has molecules with 6 degrees of freedom. Its γ (to two decimal places)?",
            answer: 1.33,
            tolerance: 0.01,
            explain: t`$\gamma = 1 + 2/6 = 4/3 \approx 1.33$.`,
          },
          {
            kind: "truefalse",
            q: "At constant temperature, the mean free path of gas molecules increases when the pressure is reduced.",
            answer: true,
            explain: t`$\lambda = k_BT/(\sqrt2\pi d^2p) \propto 1/p$.`,
          },
          {
            kind: "numeric",
            q: "2 mol of a monatomic gas are mixed with 1 mol of a rigid diatomic gas. γ of the mixture (two decimal places)?",
            answer: 1.55,
            tolerance: 0.01,
            difficulty: 3,
            explain: t`$C_v = \dfrac{2(1.5R) + 1(2.5R)}{3} = \dfrac{11}{6}R$, $C_p = \dfrac{17}{6}R$, $\gamma = 17/11 \approx 1.55$.`,
          },
          {
            kind: "fill",
            q: "The molar heat capacity of most solids at room temperature is about 3R; this is the law of Dulong and ___.",
            answer: ["Petit"],
            explain: "Dulong–Petit law: each atom has 6 quadratic terms, giving 3R per mole.",
          },
          {
            kind: "order",
            q: "Arrange these gases by γ, largest first.",
            items: ["Monatomic (He)", "Rigid diatomic (N₂)", "Rigid non-linear triatomic (H₂O vapour)"],
            explain: "γ = 1 + 2/f: f = 3, 5, 6 give 1.67, 1.40, 1.33.",
          },
          {
            kind: "mcq",
            q: "The internal energy of 1 mol of a rigid diatomic ideal gas at temperature T is:",
            options: [t`$\tfrac32RT$`, t`$\tfrac52RT$`, t`$\tfrac72RT$`, t`$3RT$`],
            answer: 1,
            difficulty: 2,
            explain: t`$U = \tfrac f2RT$ with $f = 5$.`,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Thermal Properties of Matter": "thermal-properties-of-matter",
  Calorimetry: "thermal-properties-of-matter",
  Thermodynamics: "thermodynamics",
  "Heat and Thermodynamics": "thermodynamics",
  "Kinetic Theory": "kinetic-theory",
  "Behaviour of Perfect Gases and Kinetic Theory of Gases": "kinetic-theory",
  "Kinetic Theory of Gases": "kinetic-theory",
};
