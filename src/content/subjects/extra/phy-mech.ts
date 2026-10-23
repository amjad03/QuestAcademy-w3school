import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Units and Measurements                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "units-and-measurements",
    title: "Units and Measurements",
    icon: "📏",
    description: "SI units, dimensional analysis, errors, significant figures and the instruments of the physics lab.",
    lessons: [
      {
        slug: "si-units-and-dimensions",
        title: "SI Units and Dimensional Analysis",
        summary: "The seven SI base units, dimensional formulas, and using dimensions to check, derive and convert.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "In 1999 NASA lost the Mars Climate Orbiter because one team worked in pound-force seconds and another in newton seconds. ISRO's Mangalyaan reached Mars on its first attempt in 2014, with every subsystem speaking one language: **SI units**. A measurement is a number *and* a unit, and physics starts by agreeing on the units.",
          },
          { type: "heading", text: "The seven SI base quantities" },
          {
            type: "table",
            headers: ["Base quantity", "SI unit", "Symbol", "Dimension"],
            rows: [
              ["Length", "metre", "m", "[L]"],
              ["Mass", "kilogram", "kg", "[M]"],
              ["Time", "second", "s", "[T]"],
              ["Electric current", "ampere", "A", "[A]"],
              ["Thermodynamic temperature", "kelvin", "K", "[K]"],
              ["Amount of substance", "mole", "mol", "[mol]"],
              ["Luminous intensity", "candela", "cd", "[cd]"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Units fixed by constants",
            md: "Since 2019 every SI unit is defined by fixing a constant of nature. The kilogram is set by Planck's constant, $h = 6.62607015 \\times 10^{-34}$ J s, exactly, so no metal cylinder in Paris is needed any more. Plane angle (radian) and solid angle (steradian) are dimensionless derived units.",
          },
          { type: "heading", text: "Dimensional formulas" },
          {
            type: "text",
            md: t`The **dimensions** of a quantity are the powers to which the base quantities are raised to represent it. Force is mass × acceleration, so $[F] = [M][LT^{-2}] = [MLT^{-2}]$.`,
          },
          {
            type: "table",
            headers: ["Quantity", "Formula used", "Dimensional formula", "SI unit"],
            rows: [
              ["Velocity", "s / t", t`$[LT^{-1}]$`, "m/s"],
              ["Force", "ma", t`$[MLT^{-2}]$`, "N"],
              ["Work, energy", "Fs", t`$[ML^2T^{-2}]$`, "J"],
              ["Power", "W / t", t`$[ML^2T^{-3}]$`, "W"],
              ["Pressure, stress, Y", "F / A", t`$[ML^{-1}T^{-2}]$`, "Pa"],
              ["Impulse, momentum", "Ft, mv", t`$[MLT^{-1}]$`, "N s"],
              ["Planck's constant, angular momentum", "E / ν, mvr", t`$[ML^2T^{-1}]$`, "J s"],
              ["Gravitational constant G", t`$Fr^2/m^2$`, t`$[M^{-1}L^3T^{-2}]$`, t`N m² kg⁻²`],
            ],
          },
          { type: "heading", text: "Worked example: deriving the pendulum formula" },
          {
            type: "list",
            ordered: true,
            items: [
              t`Assume the period depends on length, gravity and bob mass: $T = k\,l^a g^b m^c$.`,
              t`Dimensions: $[T] = [L]^a [LT^{-2}]^b [M]^c = [M^c L^{a+b} T^{-2b}]$.`,
              t`Equate powers: M: $c = 0$; T: $-2b = 1 \Rightarrow b = -\tfrac12$; L: $a + b = 0 \Rightarrow a = \tfrac12$.`,
              t`So $T = k\sqrt{l/g}$. Experiment gives $k = 2\pi$; dimensions can never supply it.`,
            ],
          },
          { type: "formula", tex: t`T = 2\pi\sqrt{\frac{l}{g}}`, caption: "Dimensions fix the form; the 2π comes from experiment or full theory" },
          {
            type: "text",
            md: t`**Converting units:** since $n_1u_1 = n_2u_2$, $1\ \text{N} = 1\ \text{kg m s}^{-2} = (1000\ \text{g})(100\ \text{cm})\,\text{s}^{-2} = 10^5$ dyne. Likewise $1\ \text{J} = 10^7$ erg.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Planck's constant has the same dimensions as:",
                options: ["Energy", "Linear momentum", "Angular momentum", "Power"],
                answer: 2,
                explain: t`$[h] = [E]/[\nu] = [ML^2T^{-2}]/[T^{-1}] = [ML^2T^{-1}]$, the same as $mvr$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board and JEE trap",
            md: "A dimensionally correct equation is **not** necessarily correct: $s = ut + at^2$ passes the dimension test but is wrong. Dimensional analysis also cannot find pure numbers like $2\\pi$ or $\\tfrac12$, and cannot derive relations containing sums of terms, $\\sin$, $\\log$ or $e^x$. Remember: the argument of $\\sin$, $e^x$ or $\\log$ must itself be dimensionless.",
          },
          {
            type: "keypoints",
            items: [
              "Seven SI base units: m, kg, s, A, K, mol, cd.",
              "Dimensions show how a quantity is built from M, L, T (and A, K, mol, cd).",
              "Uses: checking equations, deriving relations between quantities, converting units ($n_1u_1 = n_2u_2$).",
              "Limits: no dimensionless constants, no sums, trig, log or exponential relations.",
              "Strain, angle, refractive index and relative density are dimensionless.",
            ],
          },
        ],
        flashcards: [
          { front: "Dimensions of pressure (and stress, Young's modulus)", back: t`$[ML^{-1}T^{-2}]$` },
          { front: "Dimensions of G", back: t`$[M^{-1}L^3T^{-2}]$` },
          { front: "1 newton in dyne", back: t`$10^5$ dyne` },
          { front: "Principle of homogeneity", back: "Every term on both sides of a correct equation must have the same dimensions." },
          { front: "Quantity with the same dimensions as Planck's constant", back: "Angular momentum, $[ML^2T^{-1}]$" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The dimensional formula of pressure is:",
            options: [t`$[MLT^{-2}]$`, t`$[ML^{-1}T^{-2}]$`, t`$[ML^2T^{-2}]$`, t`$[ML^{-2}T^{-2}]$`],
            answer: 1,
            explain: t`$p = F/A = [MLT^{-2}]/[L^2] = [ML^{-1}T^{-2}]$.`,
          },
          {
            kind: "numeric",
            q: t`1 joule $= 10^n$ erg. Find $n$.`,
            answer: 7,
            explain: t`$1\ \text{J} = 1\ \text{kg m}^2\text{s}^{-2} = 10^3\ \text{g} \times 10^4\ \text{cm}^2\ \text{s}^{-2} = 10^7$ erg.`,
          },
          {
            kind: "truefalse",
            q: "If an equation is dimensionally correct, it must be physically correct.",
            answer: false,
            explain: t`Dimensional consistency is necessary but not sufficient: $s = ut + at^2$ is consistent but wrong.`,
          },
          {
            kind: "fill",
            q: "The SI unit of luminous intensity is the ___.",
            answer: ["candela", "cd"],
            explain: "Luminous intensity is measured in candela (cd).",
          },
          {
            kind: "order",
            q: "Put the steps of the dimensional method of deriving a relation in order.",
            items: [
              "Assume the quantity is a product of powers of the variables",
              "Write the dimensional formula of each side",
              "Equate the powers of M, L and T",
              "Solve for the powers and write the relation",
            ],
            explain: "This is the method used for the pendulum and Stokes' law derivations.",
          },
          {
            kind: "mcq",
            q: "If force F, velocity v and time T are taken as fundamental quantities, the dimensions of mass are:",
            options: [t`$[FvT]$`, t`$[Fv^{-1}T]$`, t`$[Fv^{-1}T^{-1}]$`, t`$[F^{-1}vT]$`],
            answer: 1,
            difficulty: 2,
            explain: t`$F = m\,v/T \Rightarrow m = FT/v = [F v^{-1} T]$.`,
          },
        ],
      },
      {
        slug: "errors-and-significant-figures",
        title: "Errors and Significant Figures",
        summary: "Systematic and random errors, absolute and percentage error, how errors combine, and significant-figure rules.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "No measurement is perfect. A cricket pitch is officially 20.12 m long, but a groundsman's tape, his eye and the temperature of the tape all add uncertainty. Physics reports a result as **value ± error**, and the error is as important as the value.",
          },
          { type: "heading", text: "Kinds of error" },
          {
            type: "list",
            items: [
              "**Systematic errors** push readings in one direction: instrumental (a zero error, a stretched tape), imperfect technique (taking body temperature from the armpit), or personal (parallax from viewing at an angle). They are reduced by better instruments and corrections.",
              "**Random errors** vary unpredictably from reading to reading. They are reduced by taking many readings and averaging.",
              "**Least-count error** comes from the resolution of the instrument and goes with every reading.",
            ],
          },
          { type: "heading", text: "Expressing the error" },
          {
            type: "formula",
            tex: t`a_{mean} = \frac{1}{n}\sum a_i,\quad \Delta a_i = a_{mean} - a_i,\quad \overline{\Delta a} = \frac{1}{n}\sum |\Delta a_i|,\quad \delta a = \frac{\overline{\Delta a}}{a_{mean}}\times 100\%`,
            caption: "Mean value, absolute error, mean absolute error, percentage error",
          },
          {
            type: "text",
            md: t`**Worked example.** Five readings of a pendulum's period: 2.63, 2.56, 2.42, 2.71, 2.80 s. Mean $= 13.12/5 = 2.624 \approx 2.62$ s. Absolute errors: 0.01, 0.06, 0.20, 0.09, 0.18 s; mean absolute error $= 0.54/5 \approx 0.11$ s. Result: $T = 2.62 \pm 0.11$ s, percentage error $= (0.11/2.62)\times 100 \approx 4\%$.`,
          },
          { type: "heading", text: "How errors combine" },
          {
            type: "table",
            headers: ["Operation", "Rule"],
            rows: [
              [t`$Z = A \pm B$`, t`$\Delta Z = \Delta A + \Delta B$ (absolute errors always add)`],
              [t`$Z = AB$ or $A/B$`, t`$\dfrac{\Delta Z}{Z} = \dfrac{\Delta A}{A} + \dfrac{\Delta B}{B}$`],
              [t`$Z = \dfrac{A^pB^q}{C^r}$`, t`$\dfrac{\Delta Z}{Z} = p\dfrac{\Delta A}{A} + q\dfrac{\Delta B}{B} + r\dfrac{\Delta C}{C}$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** In $g = 4\pi^2 L/T^2$, $L$ is measured to 1% and $T$ to 2%. Error in $g = 1\% + 2\times 2\% = 5\%$. The squared quantity dominates, which is why we time 20 oscillations, not one.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$Z = A^2B^3/C$. Percentage errors in A, B, C are 1%, 2% and 3%. Maximum percentage error in Z?`,
                answer: 11,
                unit: "%",
                explain: t`$2(1) + 3(2) + 1(3) = 11\%$.`,
              },
            ],
          },
          { type: "heading", text: "Significant figures" },
          {
            type: "table",
            headers: ["Number", "Significant figures", "Rule used"],
            rows: [
              ["6.032", "4", "Zeros between non-zero digits count"],
              ["0.00305", "3", "Leading zeros never count"],
              ["2.300", "4", "Trailing zeros after a decimal point count"],
              [t`$4.700\times10^3$`, "4", "Scientific notation removes ambiguity"],
              ["4700", "ambiguous", "Trailing zeros without a decimal point: write as powers of 10"],
            ],
          },
          {
            type: "text",
            md: "In **multiplication or division**, keep as many significant figures as the least precise factor: $4.237\\ \\text{g} / 2.51\\ \\text{cm}^3 = 1.688... \\to 1.69$ g/cm³. In **addition or subtraction**, keep the fewest decimal places: $436.32 + 227.2 + 0.301 = 663.821 \\to 663.8$.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "In subtraction, absolute errors still **add**: $(5.0 \\pm 0.1) - (3.0 \\pm 0.1) = 2.0 \\pm 0.2$. And when rounding a 5, NCERT's rule is: if the digit before it is even, drop the 5 (2.745 → 2.74); if odd, raise it (2.735 → 2.74).",
          },
          {
            type: "keypoints",
            items: [
              "Systematic errors have a direction; random errors average out.",
              "Report results as mean ± mean absolute error.",
              "Sums and differences: add absolute errors. Products, quotients and powers: add relative errors, multiplied by the powers.",
              "Multiplication/division: least number of significant figures. Addition/subtraction: least number of decimal places.",
            ],
          },
        ],
        flashcards: [
          { front: "Relative error of $Z = A^pB^q/C^r$", back: t`$p\frac{\Delta A}{A} + q\frac{\Delta B}{B} + r\frac{\Delta C}{C}$` },
          { front: "Absolute error in $A - B$", back: t`$\Delta A + \Delta B$` },
          { front: "Significant figures in 0.00305", back: "3 (leading zeros do not count)" },
          { front: "Rule for sig figs in multiplication", back: "Keep the least number of significant figures among the factors." },
          { front: "Random vs systematic error", back: "Random: unpredictable, reduced by averaging. Systematic: one direction, reduced by correction or better method." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "How many significant figures are there in 0.06900?",
            options: ["2", "3", "4", "5"],
            answer: 2,
            explain: "Leading zeros don't count; 6, 9 and the two trailing zeros after the decimal do: 4.",
          },
          {
            kind: "numeric",
            q: "A rectangle measures (5.0 ± 0.1) cm × (2.0 ± 0.1) cm. Percentage error in its area?",
            answer: 7,
            unit: "%",
            explain: t`$\frac{0.1}{5.0}\times100 + \frac{0.1}{2.0}\times100 = 2\% + 5\% = 7\%$.`,
          },
          {
            kind: "truefalse",
            q: "When two measured quantities are subtracted, their absolute errors are subtracted too.",
            answer: false,
            explain: "Errors combine in the worst case, so absolute errors add for both sums and differences.",
          },
          {
            kind: "fill",
            q: "Errors that always push readings in the same direction are called ___ errors.",
            answer: ["systematic"],
            explain: "Instrumental, technique and personal errors are systematic.",
          },
          {
            kind: "mcq",
            q: "A sheet measures 2.5 m × 1.25 m. Its area, to the correct number of significant figures, is:",
            options: ["3.125 m²", "3.13 m²", "3.1 m²", "3 m²"],
            answer: 2,
            difficulty: 2,
            explain: "2.5 has 2 significant figures, so 3.125 rounds to 3.1 m².",
          },
          {
            kind: "numeric",
            q: t`Kinetic energy $K = \tfrac12 mv^2$. If mass is measured with 2% error and speed with 3% error, the maximum percentage error in K is:`,
            answer: 8,
            unit: "%",
            difficulty: 2,
            explain: t`$2\% + 2\times3\% = 8\%$; the ½ is exact and adds no error.`,
          },
        ],
      },
      {
        slug: "measuring-instruments-and-experiments",
        title: "Vernier, Screw Gauge and Experimental Skills",
        summary: "Least count, zero error and readings for vernier calipers and screw gauge, plus the lab experiments NEET and JEE test.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A metre scale reads to 1 mm. To measure the diameter of a pencil, a wire or a ₹1 coin's thickness you need finer tools. Two instruments do this in every Indian school lab: the **vernier calipers** (to 0.1 mm) and the **screw gauge** (to 0.01 mm).",
          },
          { type: "illustration", emoji: "🔧", caption: "Vernier calipers measure to 0.1 mm; a screw gauge to 0.01 mm." },
          { type: "heading", text: "Vernier calipers" },
          {
            type: "formula",
            tex: t`\text{LC} = 1\ \text{MSD} - 1\ \text{VSD} = \frac{1\ \text{MSD}}{n}\quad(\text{when } n\ \text{VSD} = (n-1)\ \text{MSD})`,
            caption: "Least count of vernier calipers",
          },
          {
            type: "formula",
            tex: t`\text{Reading} = \text{MSR} + (\text{VSR}\times\text{LC}) - \text{zero error}`,
          },
          {
            type: "text",
            md: "**Worked example.** MSD = 1 mm and 10 VSD = 9 MSD, so LC = 0.1 mm = 0.01 cm. Main scale reads 2.3 cm and the 6th vernier division coincides. Zero error is +0.03 cm. Reading $= 2.3 + 6\\times0.01 - 0.03 = 2.33$ cm.",
          },
          { type: "heading", text: "Screw gauge" },
          {
            type: "formula",
            tex: t`\text{LC} = \frac{\text{pitch}}{\text{number of circular scale divisions}}`,
            caption: "Pitch = distance the spindle moves in one full rotation",
          },
          {
            type: "text",
            md: "**Worked example.** Pitch 0.5 mm, 50 circular divisions, so LC = 0.01 mm. Main scale 3.5 mm, circular scale 27 divisions, and zero error −0.03 mm (−3 divisions). Reading $= 3.5 + 27\\times0.01 - (-0.03) = 3.80$ mm.",
          },
          {
            type: "table",
            headers: ["Zero error", "Vernier calipers", "Screw gauge", "Correction"],
            rows: [
              ["Positive", "Vernier zero to the right of main-scale zero", "Circular-scale zero below the reference line", "Subtract it"],
              ["Negative", "Vernier zero to the left of main-scale zero", "Circular-scale zero above the reference line", "Add its magnitude"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In a vernier, 20 VSD coincide with 19 MSD, and 1 MSD = 1 mm. The least count is:",
                options: ["0.1 mm", "0.05 mm", "0.02 mm", "0.01 mm"],
                answer: 1,
                explain: t`LC = 1 MSD / n = 1/20 mm = 0.05 mm.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "Zero error is always **subtracted with its sign**: true reading = observed reading − (zero error). A negative zero error therefore gets *added*. Also, a screw gauge suffers **backlash error**; always turn the screw in one direction and use the ratchet.",
          },
          { type: "heading", text: "Experimental skills in the NEET and JEE syllabus" },
          {
            type: "table",
            headers: ["Experiment", "Quantity found", "Key relation"],
            rows: [
              ["Simple pendulum", "g", t`Slope of $L$–$T^2$ graph $= g/4\pi^2$`],
              ["Searle's apparatus", "Young's modulus", t`$Y = \dfrac{MgL}{\pi r^2\,\Delta L}$`],
              ["Capillary rise", "Surface tension", t`$S = \dfrac{rh\rho g}{2\cos\theta}$`],
              ["Terminal velocity of a ball", "Viscosity", t`$\eta = \dfrac{2r^2(\rho-\sigma)g}{9v_t}$`],
              ["Method of mixtures", "Specific heat", "Heat lost = heat gained"],
              ["Resonance tube", "Speed of sound", t`$v = 2f(l_2 - l_1)$`],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Graph, don't average",
            md: "In the pendulum experiment, plot $L$ against $T^2$. A straight line through the origin confirms $T \\propto \\sqrt{L}$, and $g = 4\\pi^2 \\times$ slope uses all readings at once.",
          },
          {
            type: "keypoints",
            items: [
              "Vernier LC = 1 MSD − 1 VSD; screw gauge LC = pitch / circular divisions.",
              "True reading = observed reading − zero error (with sign).",
              "Screw gauge: avoid backlash by turning in one direction only.",
              "Know each lab experiment's formula and which graph gives the answer.",
            ],
          },
        ],
        flashcards: [
          { front: "Least count of vernier calipers", back: "1 MSD − 1 VSD = 1 MSD / n" },
          { front: "Least count of a screw gauge", back: "Pitch ÷ number of circular-scale divisions" },
          { front: "Correcting a negative zero error", back: "Add its magnitude to the observed reading." },
          { front: "Backlash error", back: "Slack in the screw threads; avoided by always rotating in one direction." },
          { front: "Pendulum graph for g", back: t`$L$ vs $T^2$; $g = 4\pi^2\times$ slope` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A screw gauge has a pitch of 1 mm and 100 circular-scale divisions. Its least count in mm is:",
            answer: 0.01,
            tolerance: 0.0001,
            unit: "mm",
            explain: "LC = 1 mm / 100 = 0.01 mm.",
          },
          {
            kind: "mcq",
            q: "An instrument has a positive zero error. To get the true reading you must:",
            options: ["Add the zero error", "Subtract the zero error", "Double the reading", "Ignore it"],
            answer: 1,
            explain: "True reading = observed − zero error; a positive error is subtracted.",
          },
          {
            kind: "truefalse",
            q: "Backlash error in a screw gauge is avoided by always rotating the screw in the same direction.",
            answer: true,
            explain: "Reversing direction takes up slack in the threads before the spindle moves.",
          },
          {
            kind: "numeric",
            q: "Vernier calipers with LC 0.01 cm read MSR = 3.1 cm and VSR = 4. Zero error is −0.02 cm. True reading in cm?",
            answer: 3.16,
            tolerance: 0.001,
            unit: "cm",
            difficulty: 2,
            explain: t`$3.1 + 4\times0.01 - (-0.02) = 3.16$ cm.`,
          },
          {
            kind: "fill",
            q: "The smallest value an instrument can measure is called its ___.",
            answer: ["least count"],
            explain: "Least count sets the resolution and the least-count error of a reading.",
          },
          {
            kind: "order",
            q: "Order the steps for measuring a wire's diameter with a screw gauge.",
            items: [
              "Find the pitch and least count",
              "Close the studs and note the zero error",
              "Place the wire between the studs and turn the ratchet",
              "Read the main scale and circular scale",
              "Apply the zero correction and average several readings",
            ],
            explain: "Least count and zero error come first, then readings, then correction and averaging.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* System of Particles and Rotational Motion                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "rotational-motion",
    title: "System of Particles and Rotational Motion",
    icon: "🌀",
    description: "Centre of mass, torque, angular momentum, moment of inertia and rolling motion.",
    lessons: [
      {
        slug: "centre-of-mass",
        title: "Centre of Mass",
        summary: "Locating the centre of mass, its motion under external forces, and momentum conservation for a system.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Throw a cricket bat spinning into the air. Each point on it traces a messy curve, yet one special point follows a clean parabola as if all the mass were concentrated there. That point is the **centre of mass (COM)**.",
          },
          { type: "formula", tex: t`\vec R_{cm} = \frac{\sum m_i\vec r_i}{M}, \qquad x_{cm} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}`, caption: "Mass-weighted average position" },
          {
            type: "text",
            md: t`**Worked example (NCERT).** Masses 100 g, 150 g and 200 g sit at the corners of an equilateral triangle of side 0.5 m: (0, 0), (0.5, 0) and (0.25, 0.25$\sqrt3$) m. $x_{cm} = \frac{0 + 150(0.5) + 200(0.25)}{450} = \frac{125}{450} = \frac{5}{18}$ m. $y_{cm} = \frac{200(0.25\sqrt3)}{450} = \frac{\sqrt3}{9}$ m $\approx 0.19$ m.`,
          },
          { type: "heading", text: "COM of common bodies" },
          {
            type: "table",
            headers: ["Body (uniform)", "Position of COM"],
            rows: [
              ["Rod", "Midpoint"],
              ["Triangular lamina", "Centroid (meeting point of medians)"],
              ["Semicircular ring, radius R", t`$2R/\pi$ from the centre`],
              ["Semicircular disc", t`$4R/3\pi$ from the centre`],
              ["Solid hemisphere", t`$3R/8$ from the flat face`],
              ["Hollow hemisphere", t`$R/2$ from the flat face`],
              ["Solid cone, height h", t`$h/4$ from the base`],
            ],
          },
          { type: "heading", text: "Motion of the centre of mass" },
          { type: "formula", tex: t`M\vec a_{cm} = \vec F_{ext}, \qquad \vec P = M\vec v_{cm}`, caption: "Internal forces cancel in pairs (Newton's third law)" },
          {
            type: "text",
            md: "If a shell explodes at the top of its path, the fragments scatter, but their COM continues along the original parabola, because the explosion forces are internal. If $\\vec F_{ext} = 0$, $\\vec v_{cm}$ stays constant and total momentum is conserved.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A 2 kg block moves at +3 m/s and a 3 kg block at −2 m/s along the same line. Velocity of their centre of mass?",
                answer: 0,
                tolerance: 0.001,
                unit: "m/s",
                explain: t`$v_{cm} = \frac{2(3) + 3(-2)}{5} = 0$.`,
              },
            ],
          },
          {
            type: "text",
            md: "**Worked example: man on a boat.** A 60 kg man walks 4 m from one end of a 140 kg boat to the other on still water. With no external horizontal force, the COM stays put: $60(4 - x) = 140x \\Rightarrow x = 1.2$ m. The boat moves 1.2 m backwards and the man moves 2.8 m relative to the shore.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET / JEE trap",
            md: "The COM need not lie on the body: for a ring or a bangle it sits at the empty centre. In the boat problem, the man's 4 m is relative to the **boat**, not the ground; using 4 m as his ground displacement is the classic wrong option.",
          },
          {
            type: "keypoints",
            items: [
              t`$\vec R_{cm} = \sum m_i\vec r_i/M$; for continuous bodies replace the sum by $\int \vec r\,dm$.`,
              t`$M\vec a_{cm} = \vec F_{ext}$: internal forces cannot move the COM.`,
              "No external force means constant $\\vec v_{cm}$ and conserved momentum.",
              "Symmetry places the COM on axes of symmetry; it can lie outside the material.",
            ],
          },
        ],
        flashcards: [
          { front: "COM of two particles on a line", back: t`$x_{cm} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}$` },
          { front: "COM of a uniform semicircular ring", back: t`$2R/\pi$ from the centre` },
          { front: "COM of a solid hemisphere", back: t`$3R/8$ from the flat face` },
          { front: "Effect of internal forces on the COM", back: "None: only external forces change $\\vec v_{cm}$." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Masses of 2 kg at x = 0 and 3 kg at x = 5 m. Position of the centre of mass?",
            answer: 3,
            unit: "m",
            explain: t`$x_{cm} = \frac{2(0) + 3(5)}{5} = 3$ m.`,
          },
          {
            kind: "mcq",
            q: "The centre of mass of a uniform semicircular ring of radius R lies at a distance from the centre of:",
            options: [t`$R/2$`, t`$4R/3\pi$`, t`$2R/\pi$`, t`$3R/8$`],
            answer: 2,
            explain: t`For a semicircular **ring** it is $2R/\pi$; $4R/3\pi$ is for a semicircular disc.`,
          },
          {
            kind: "truefalse",
            q: "Internal forces between the particles of a system can change the velocity of its centre of mass.",
            answer: false,
            explain: "Internal forces cancel in action–reaction pairs, so they cannot accelerate the COM.",
          },
          {
            kind: "numeric",
            q: "A 50 kg man walks 6 m along a 250 kg boat at rest on still water. How far does the boat move (in m)?",
            answer: 1,
            unit: "m",
            difficulty: 2,
            explain: t`$x = \frac{m\,d}{m + M} = \frac{50\times6}{300} = 1$ m, opposite to the man.`,
          },
          {
            kind: "fill",
            q: "If no external force acts on a system, the velocity of its centre of mass remains ___.",
            answer: ["constant", "unchanged", "the same", "same"],
            explain: t`$\vec F_{ext} = 0 \Rightarrow \vec a_{cm} = 0$.`,
          },
          {
            kind: "mcq",
            q: "A projectile explodes into two pieces at the top of its flight. The centre of mass of the pieces:",
            options: ["Stops and falls vertically", "Continues along the original parabola", "Moves in a straight line", "Moves along a circle"],
            answer: 1,
            difficulty: 2,
            explain: "Only gravity acts externally, so the COM keeps the original trajectory (until a piece hits the ground).",
          },
        ],
      },
      {
        slug: "torque-and-angular-momentum",
        title: "Torque, Angular Momentum and Equilibrium",
        summary: "Torque as the turning effect of a force, angular momentum and its conservation, rigid-body equilibrium and rotational kinematics.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Door handles sit far from the hinges, and a mechanic in a Pune garage reaches for a long spanner to loosen a stuck nut. Both use the same idea: the turning effect of a force grows with how far from the axis it acts. That turning effect is **torque**.",
          },
          { type: "formula", tex: t`\vec\tau = \vec r\times\vec F, \qquad |\vec\tau| = rF\sin\theta`, caption: "Unit N m; direction by the right-hand rule" },
          { type: "formula", tex: t`\vec L = \vec r\times\vec p, \qquad \vec\tau_{ext} = \frac{d\vec L}{dt}, \qquad L = I\omega\ \text{(fixed axis)}`, caption: "Torque is the rate of change of angular momentum" },
          {
            type: "text",
            md: t`**Worked example.** A force $\vec F = (3\hat i + \hat j)$ N acts at $\vec r = (\hat i + 2\hat j)$ m. $\vec\tau = \vec r\times\vec F = (1\cdot1 - 2\cdot3)\hat k = -5\hat k$ N m, a clockwise torque of 5 N m about the z-axis.`,
          },
          { type: "heading", text: "Equilibrium of a rigid body" },
          {
            type: "text",
            md: t`A rigid body is in mechanical equilibrium when $\sum\vec F = 0$ (translational) **and** $\sum\vec\tau = 0$ (rotational). A **couple** (two equal, opposite, non-collinear forces) has zero net force but a non-zero torque, like turning a steering wheel. **Worked example:** a uniform metre rule balances at 50 cm. A 20 g mass hangs at 10 cm; where must a 40 g mass hang? Moments about 50 cm: $20(40) = 40\,d \Rightarrow d = 20$ cm, so at the 70 cm mark.`,
          },
          { type: "heading", text: "Linear vs rotational motion" },
          {
            type: "table",
            headers: ["Linear", "Rotational (fixed axis)"],
            rows: [
              ["Displacement x", t`Angular displacement $\theta$`],
              ["Velocity v", t`Angular velocity $\omega$`],
              ["Acceleration a", t`Angular acceleration $\alpha$`],
              ["Mass m", "Moment of inertia I"],
              ["Force F = ma", t`Torque $\tau = I\alpha$`],
              ["Momentum p = mv", t`Angular momentum $L = I\omega$`],
              [t`KE $= \tfrac12mv^2$`, t`KE $= \tfrac12I\omega^2$`],
              ["Power = Fv", t`Power $= \tau\omega$`],
            ],
          },
          { type: "formula", tex: t`\omega = \omega_0 + \alpha t,\quad \theta = \omega_0t + \tfrac12\alpha t^2,\quad \omega^2 = \omega_0^2 + 2\alpha\theta`, caption: "Valid for constant α" },
          {
            type: "text",
            md: t`**Worked example.** A ceiling fan turning at 600 rpm is switched off and stops uniformly in 20 s. $\omega_0 = 600\times2\pi/60 = 20\pi$ rad/s, so $\alpha = -20\pi/20 = -\pi$ rad/s² $\approx -3.14$ rad/s². Angle turned $= \omega_0^2/2|\alpha| = 400\pi^2/2\pi = 200\pi$ rad $= 100$ revolutions.`,
          },
          { type: "heading", text: "Conservation of angular momentum" },
          {
            type: "text",
            md: t`If $\tau_{ext} = 0$, then $I\omega$ stays constant. A Kathak dancer spinning on the spot pulls her arms in to spin faster; a diver tucks to somersault faster. Planets sweep equal areas in equal times (Kepler's second law) because gravity exerts no torque about the Sun.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A skater spins at 2 rad/s with I = 4 kg m². She pulls her arms in so I = 1 kg m². New angular speed?",
                answer: 8,
                unit: "rad/s",
                explain: t`$I_1\omega_1 = I_2\omega_2 \Rightarrow \omega_2 = 4\times2/1 = 8$ rad/s.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "When the skater pulls her arms in, $L$ is conserved but kinetic energy is **not**: $K = L^2/2I$ rises fourfold here. The extra energy comes from the work her muscles do. Options claiming \"KE is conserved\" are wrong.",
          },
          {
            type: "keypoints",
            items: [
              t`$\tau = rF\sin\theta$; maximum when the force is perpendicular to the lever arm.`,
              t`$\tau_{ext} = dL/dt$; with no external torque, $I\omega$ is constant.`,
              "Equilibrium needs both zero net force and zero net torque.",
              "Rotational kinematics mirrors linear kinematics with θ, ω, α.",
            ],
          },
        ],
        flashcards: [
          { front: "Torque", back: t`$\vec\tau = \vec r\times\vec F$, magnitude $rF\sin\theta$` },
          { front: "Rotational analogue of Newton's second law", back: t`$\tau = I\alpha$` },
          { front: "Condition for rotational equilibrium", back: "Net external torque about any point is zero." },
          { front: "Couple", back: "Equal, opposite, parallel forces with different lines of action: zero net force, non-zero torque." },
          { front: "KE in terms of angular momentum", back: t`$K = L^2/2I$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Torque has the same dimensions as:",
            options: ["Work", "Power", "Linear momentum", "Force"],
            answer: 0,
            explain: t`Both are $[ML^2T^{-2}]$, though torque is a vector and is not an energy.`,
          },
          {
            kind: "numeric",
            q: "A 10 N force is applied perpendicular to a spanner at 0.25 m from the nut. Torque in N m?",
            answer: 2.5,
            tolerance: 0.01,
            unit: "N m",
            explain: t`$\tau = rF = 0.25\times10 = 2.5$ N m.`,
          },
          {
            kind: "truefalse",
            q: "The angular momentum of a planet about the Sun is conserved.",
            answer: true,
            explain: "Gravity is a central force through the Sun, so its torque about the Sun is zero.",
          },
          {
            kind: "numeric",
            q: "A wheel starts from rest with angular acceleration 2 rad/s². Angle turned in 5 s, in radians?",
            answer: 25,
            unit: "rad",
            explain: t`$\theta = \tfrac12\alpha t^2 = \tfrac12(2)(25) = 25$ rad.`,
          },
          {
            kind: "fill",
            q: "The rotational analogue of mass is the ___.",
            answer: ["moment of inertia"],
            explain: "Moment of inertia measures resistance to angular acceleration.",
          },
          {
            kind: "mcq",
            q: "A star (uniform sphere) collapses to half its radius with no loss of mass. Its angular speed becomes:",
            options: ["2 times", "4 times", "1/4 times", "8 times"],
            answer: 1,
            difficulty: 3,
            explain: t`$I \propto R^2$ falls to 1/4, so $\omega = L/I$ becomes 4 times.`,
          },
        ],
      },
      {
        slug: "moment-of-inertia-and-rolling",
        title: "Moment of Inertia and Rolling Motion",
        summary: "Moment of inertia, radius of gyration, the parallel and perpendicular axis theorems, and rolling without slipping.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "A flywheel in a flour mill keeps turning smoothly because most of its mass sits on the rim. How hard it is to spin something depends not just on its mass but on **how that mass is spread from the axis**. This is the moment of inertia.",
          },
          { type: "formula", tex: t`I = \sum m_ir_i^2 = \int r^2\,dm, \qquad I = Mk^2`, caption: "k is the radius of gyration; I depends on the axis chosen" },
          { type: "heading", text: "Standard moments of inertia" },
          {
            type: "table",
            headers: ["Body", "Axis", "I"],
            rows: [
              ["Thin ring", "Through centre, ⊥ to plane", t`$MR^2$`],
              ["Thin ring", "Diameter", t`$\tfrac12MR^2$`],
              ["Disc", "Through centre, ⊥ to plane", t`$\tfrac12MR^2$`],
              ["Disc", "Diameter", t`$\tfrac14MR^2$`],
              ["Thin rod, length L", "Through centre, ⊥ to rod", t`$\tfrac1{12}ML^2$`],
              ["Thin rod, length L", "Through one end, ⊥ to rod", t`$\tfrac13ML^2$`],
              ["Solid cylinder", "Own axis", t`$\tfrac12MR^2$`],
              ["Solid sphere", "Diameter", t`$\tfrac25MR^2$`],
              ["Hollow sphere (thin shell)", "Diameter", t`$\tfrac23MR^2$`],
            ],
          },
          { type: "heading", text: "Two theorems" },
          {
            type: "formula",
            tex: t`I = I_{cm} + Md^2 \qquad\qquad I_z = I_x + I_y\ \text{(planar lamina only)}`,
            caption: "Parallel axis theorem (left) and perpendicular axis theorem (right)",
          },
          {
            type: "text",
            md: t`**Worked example.** Rod about one end: $I = \tfrac1{12}ML^2 + M(L/2)^2 = \tfrac13ML^2$. Disc about a tangent in its plane: $I = \tfrac14MR^2 + MR^2 = \tfrac54MR^2$. Disc about a diameter by the perpendicular axis theorem: $2I_d = \tfrac12MR^2 \Rightarrow I_d = \tfrac14MR^2$.`,
          },
          { type: "heading", text: "Rolling without slipping" },
          {
            type: "formula",
            tex: t`v_{cm} = R\omega,\qquad K = \tfrac12mv^2\left(1 + \frac{k^2}{R^2}\right),\qquad a = \frac{g\sin\theta}{1 + k^2/R^2}`,
            caption: "Rolling = translation of the COM + rotation about the COM; the contact point is momentarily at rest",
          },
          {
            type: "table",
            headers: ["Body", t`$k^2/R^2$`, "Acceleration down incline", "Rank in a race"],
            rows: [
              ["Solid sphere", "2/5", t`$\tfrac57g\sin\theta$`, "1st"],
              ["Disc / solid cylinder", "1/2", t`$\tfrac23g\sin\theta$`, "2nd"],
              ["Hollow sphere", "2/3", t`$\tfrac35g\sin\theta$`, "3rd"],
              ["Ring / hollow cylinder", "1", t`$\tfrac12g\sin\theta$`, "4th"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** A solid sphere rolls from rest down a 30° incline ($g = 9.8$ m/s²). $a = \tfrac57(9.8)(0.5) = 3.5$ m/s². After descending a height of 1.4 m: $v = \sqrt{\dfrac{2gh}{1 + 2/5}} = \sqrt{\dfrac{2(9.8)(1.4)}{1.4}} = \sqrt{19.6} \approx 4.4$ m/s.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A ring, a disc and a solid sphere are released together from the top of the same incline and roll without slipping. Which reaches the bottom first?",
                options: ["Ring", "Disc", "Solid sphere", "All together"],
                answer: 2,
                explain: t`The smallest $k^2/R^2$ (2/5) gives the largest acceleration.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE / NEET trap",
            md: "The rolling race result is **independent of mass and radius**: only the shape ($k^2/R^2$) matters. Static friction makes pure rolling possible but does **no work**, because the contact point does not slip. On a frictionless incline the bodies just slide, all with $g\\sin\\theta$.",
          },
          {
            type: "keypoints",
            items: [
              t`$I = \sum mr^2$ depends on mass distribution and axis; $I = Mk^2$.`,
              t`Parallel axis: $I = I_{cm} + Md^2$. Perpendicular axis: $I_z = I_x + I_y$ for laminas.`,
              t`Rolling KE $= \tfrac12mv^2(1 + k^2/R^2)$; $a = g\sin\theta/(1 + k^2/R^2)$.`,
              "Race down an incline: solid sphere > disc > hollow sphere > ring.",
            ],
          },
        ],
        flashcards: [
          { front: "MI of a solid sphere about a diameter", back: t`$\tfrac25MR^2$` },
          { front: "MI of a rod about one end", back: t`$\tfrac13ML^2$` },
          { front: "Parallel axis theorem", back: t`$I = I_{cm} + Md^2$` },
          { front: "Rolling acceleration down an incline", back: t`$a = \dfrac{g\sin\theta}{1 + k^2/R^2}$` },
          { front: "Fraction of KE that is rotational for a rolling disc", back: "1/3" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The moment of inertia of a uniform disc about a diameter is:",
            options: [t`$MR^2$`, t`$\tfrac12MR^2$`, t`$\tfrac14MR^2$`, t`$\tfrac25MR^2$`],
            answer: 2,
            explain: t`Perpendicular axis theorem: $2I_d = \tfrac12MR^2$.`,
          },
          {
            kind: "numeric",
            q: "A ring rolls without slipping. What percentage of its total kinetic energy is rotational?",
            answer: 50,
            unit: "%",
            difficulty: 2,
            explain: t`$\frac{k^2/R^2}{1 + k^2/R^2} = \frac{1}{2} = 50\%$.`,
          },
          {
            kind: "truefalse",
            q: "The perpendicular axis theorem applies to three-dimensional bodies such as a solid sphere.",
            answer: false,
            explain: "It holds only for planar bodies (laminas) lying in the x–y plane.",
          },
          {
            kind: "numeric",
            q: "A uniform rod of mass 2 kg and length 3 m. Its moment of inertia about an axis through one end, perpendicular to it (kg m²)?",
            answer: 6,
            unit: "kg m²",
            explain: t`$\tfrac13ML^2 = \tfrac13(2)(9) = 6$ kg m².`,
          },
          {
            kind: "order",
            q: "Bodies rolling down the same incline from rest: arrange from first to reach the bottom to last.",
            items: ["Solid sphere", "Solid cylinder", "Hollow sphere", "Ring"],
            explain: t`Order of increasing $k^2/R^2$: 2/5, 1/2, 2/3, 1.`,
          },
          {
            kind: "fill",
            q: "In pure rolling, the velocity of the point of contact relative to the ground is ___.",
            answer: ["zero", "0"],
            explain: t`$v_{contact} = v_{cm} - R\omega = 0$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Mechanical Properties of Solids                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "mechanical-properties-of-solids",
    title: "Mechanical Properties of Solids",
    icon: "🏗️",
    description: "Stress, strain, Hooke's law, elastic moduli, elastic energy and engineering applications.",
    lessons: [
      {
        slug: "stress-strain-hookes-law",
        title: "Stress, Strain and Hooke's Law",
        summary: "Types of stress and strain, Hooke's law, and reading the stress–strain curve of ductile and brittle materials.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Pull a rubber band and a steel wire. The rubber stretches far more, yet physicists call steel **more elastic**. Elasticity is about how strongly a body resists deformation and returns to shape, and steel needs a far larger stress for the same strain.",
          },
          { type: "formula", tex: t`\text{Stress} = \frac{F}{A}\ (\text{Pa}), \qquad \text{Strain} = \frac{\Delta L}{L}\ (\text{no unit})`, caption: "Stress is restoring force per unit area" },
          {
            type: "table",
            headers: ["Type", "Stress", "Strain"],
            rows: [
              ["Longitudinal (tensile or compressive)", "Normal force / area", t`$\Delta L/L$`],
              ["Shearing", "Tangential force / area", t`$\Delta x/L = \tan\theta \approx \theta$`],
              ["Volumetric (hydraulic)", "Pressure p", t`$\Delta V/V$`],
            ],
          },
          { type: "heading", text: "Hooke's law" },
          { type: "formula", tex: t`\text{stress} \propto \text{strain} \;\Rightarrow\; \text{stress} = k \times \text{strain}`, caption: "Valid up to the proportional limit; k is the modulus of elasticity" },
          {
            type: "text",
            md: t`**Worked example.** A rod of cross-section 2 cm² carries a tension of 4000 N and its 1.5 m length grows by 0.15 mm. Stress $= 4000/(2\times10^{-4}) = 2\times10^7$ Pa. Strain $= 0.15\times10^{-3}/1.5 = 1\times10^{-4}$. Modulus $= 2\times10^7/10^{-4} = 2\times10^{11}$ Pa, which is steel.`,
          },
          { type: "heading", text: "The stress–strain curve" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Proportional limit:** straight line, Hooke's law holds.",
              "**Elastic limit / yield point:** beyond this the body does not return to its original length.",
              "**Plastic region:** permanent set; a small extra stress gives a large strain.",
              "**Ultimate tensile strength:** the maximum stress the material can bear.",
              "**Fracture point:** the material breaks.",
            ],
          },
          { type: "illustration", emoji: "📈", caption: "Ductile metals (copper, mild steel) have a long plastic region; brittle ones (glass, cast iron) fracture soon after the elastic limit." },
          {
            type: "callout",
            tone: "fact",
            title: "Elastomers",
            md: "Rubber and the tissue of the aorta can be stretched to several times their length and still recover, but their stress–strain curve is never a straight line, so they have no single Young's modulus. They are called **elastomers**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is the most elastic?",
                options: ["Rubber", "Steel", "Clay", "Putty"],
                answer: 1,
                explain: "Steel shows the least strain for a given stress, so it has the higher modulus.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "\"Rubber is more elastic than steel\" is **false**. Elasticity is measured by the modulus, not by how much something stretches. Also note: stress has the units of pressure, but strain is a pure number.",
          },
          {
            type: "keypoints",
            items: [
              "Stress = restoring force / area (Pa); strain = fractional change (dimensionless).",
              "Hooke's law: stress ∝ strain up to the proportional limit.",
              "Curve: proportional limit → yield point → ultimate strength → fracture.",
              "Ductile materials have a large plastic region; brittle ones have almost none.",
            ],
          },
        ],
        flashcards: [
          { front: "Stress", back: "Restoring force per unit area, unit Pa" },
          { front: "Shearing strain", back: t`$\Delta x/L = \tan\theta$` },
          { front: "Ultimate tensile strength", back: "Maximum stress a material can bear before breaking" },
          { front: "Ductile vs brittle", back: "Ductile: large plastic deformation before fracture. Brittle: fractures soon after the elastic limit." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The SI unit of stress is the same as that of:",
            options: ["Force", "Pressure", "Energy", "Strain"],
            answer: 1,
            explain: "Both are force per unit area, N/m² = Pa.",
          },
          {
            kind: "numeric",
            q: t`A 4 m wire stretches by 2 mm. Its strain, in units of $10^{-4}$, is:`,
            answer: 5,
            explain: t`Strain $= 2\times10^{-3}/4 = 5\times10^{-4}$.`,
          },
          {
            kind: "truefalse",
            q: "Strain has no units.",
            answer: true,
            explain: "It is a ratio of two lengths (or volumes).",
          },
          {
            kind: "fill",
            q: "The maximum stress a material can withstand before breaking is called its ___ tensile strength.",
            answer: ["ultimate"],
            explain: "Beyond the ultimate tensile strength, the material heads to fracture.",
          },
          {
            kind: "order",
            q: "Order these points on the stress–strain curve of a ductile metal by increasing strain.",
            items: ["Proportional limit", "Yield point", "Ultimate tensile strength", "Fracture point"],
            explain: "Linear region first, then yielding, the peak stress, and finally fracture.",
          },
          {
            kind: "numeric",
            q: "A load of 300 N hangs from a wire of cross-section 1.5 mm². Stress in units of $10^8$ Pa?",
            answer: 2,
            difficulty: 2,
            explain: t`$300/(1.5\times10^{-6}) = 2\times10^8$ Pa.`,
          },
        ],
      },
      {
        slug: "elastic-moduli",
        title: "Young's, Bulk and Shear Moduli",
        summary: "The three elastic moduli, Poisson's ratio, typical values and the numericals built on them.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Engineers designing the Chenab rail bridge in Jammu & Kashmir, the world's highest railway arch, need to know exactly how much each steel member stretches, compresses or twists under load. Three numbers, the **elastic moduli**, capture that for any material.",
          },
          { type: "heading", text: "Young's modulus" },
          { type: "formula", tex: t`Y = \frac{F/A}{\Delta L/L} = \frac{FL}{A\,\Delta L}`, caption: "Longitudinal stress ÷ longitudinal strain" },
          {
            type: "text",
            md: t`**Worked example.** A steel wire 2 m long, radius 1 mm ($A = \pi\times10^{-6} \approx 3.14\times10^{-6}$ m²) carries 314 N. With $Y = 2\times10^{11}$ Pa: $\Delta L = \dfrac{FL}{AY} = \dfrac{314\times2}{3.14\times10^{-6}\times2\times10^{11}} = 1\times10^{-3}$ m $= 1$ mm.`,
          },
          { type: "heading", text: "Bulk and shear moduli" },
          {
            type: "formula",
            tex: t`B = -\frac{p}{\Delta V/V},\quad \text{compressibility } k = \frac1B, \qquad G = \frac{F/A}{\theta}`,
            caption: "The minus sign makes B positive, since volume falls when pressure rises",
          },
          {
            type: "text",
            md: t`**Worked example.** At 1000 m depth in the Arabian Sea, the extra pressure is about $\rho gh = 1000\times9.8\times1000 \approx 9.8\times10^6$ Pa. With $B_{water} = 2.2\times10^9$ Pa, $\Delta V/V = 9.8\times10^6/2.2\times10^9 \approx 4.5\times10^{-3}$, under half a percent. Water is nearly incompressible.`,
          },
          {
            type: "table",
            headers: ["Material", "Young's modulus Y (approx.)"],
            rows: [
              ["Steel", t`$2.0\times10^{11}$ Pa`],
              ["Iron", t`$1.9\times10^{11}$ Pa`],
              ["Copper", t`$1.2\times10^{11}$ Pa`],
              ["Aluminium", t`$0.7\times10^{11}$ Pa`],
              ["Glass", t`$0.65\times10^{11}$ Pa`],
              ["Bone (tension)", t`$0.16\times10^{11}$ Pa`],
            ],
          },
          { type: "heading", text: "Poisson's ratio" },
          {
            type: "formula",
            tex: t`\sigma = \frac{\text{lateral strain}}{\text{longitudinal strain}} = \frac{\Delta D/D}{\Delta L/L}`,
            caption: "Theoretically between −1 and 0.5; for real materials 0 to 0.5",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Which modulus applies?",
            md: "Solids have all three moduli. Liquids and gases have only a **bulk modulus**: they cannot resist a steady shear, so $G = 0$. Gases are the most compressible ($B$ is smallest).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Two wires of the same material carry the same load. Wire B is twice as long and has twice the radius of wire A. Ratio of extensions $\\Delta L_B/\\Delta L_A$?",
                answer: 0.5,
                tolerance: 0.01,
                explain: t`$\Delta L \propto L/r^2$: $\frac{2}{2^2} = \frac12$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Young's modulus is a property of the **material** only. Doubling a wire's length or thickness changes its extension, not its Y. Options like \"Y doubles when length is doubled\" are always wrong.",
          },
          {
            type: "keypoints",
            items: [
              t`$Y = FL/(A\Delta L)$; for a given material and load, $\Delta L \propto L/r^2$.`,
              t`$B = -p/(\Delta V/V)$; compressibility = $1/B$.`,
              t`$G$ = shear stress / shear strain; liquids and gases have $G = 0$.`,
              "Poisson's ratio = lateral strain / longitudinal strain, practically 0 to 0.5.",
            ],
          },
        ],
        flashcards: [
          { front: "Young's modulus", back: t`$Y = \frac{FL}{A\,\Delta L}$` },
          { front: "Bulk modulus", back: t`$B = -\frac{p}{\Delta V/V}$` },
          { front: "Compressibility", back: "Reciprocal of bulk modulus" },
          { front: "Young's modulus of steel", back: t`About $2\times10^{11}$ Pa` },
          { front: "Shear modulus of a liquid", back: "Zero: liquids cannot sustain static shear stress" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A wire 1 m long with cross-section 1 mm² and $Y = 10^{11}$ Pa carries 100 N. Extension in mm?`,
            answer: 1,
            unit: "mm",
            explain: t`$\Delta L = \frac{100\times1}{10^{-6}\times10^{11}} = 10^{-3}$ m $= 1$ mm.`,
          },
          {
            kind: "mcq",
            q: "Young's modulus of a perfectly rigid body is:",
            options: ["Zero", "One", "Infinite", "Equal to that of steel"],
            answer: 2,
            explain: t`A perfectly rigid body has zero strain for any stress, so $Y = \text{stress}/0 \to \infty$.`,
          },
          {
            kind: "truefalse",
            q: "Liquids have a non-zero shear modulus.",
            answer: false,
            explain: "Liquids flow under shear, so they have only a bulk modulus.",
          },
          {
            kind: "fill",
            q: "The reciprocal of bulk modulus is called ___.",
            answer: ["compressibility"],
            explain: t`$k = 1/B$.`,
          },
          {
            kind: "mcq",
            q: "The practical range of Poisson's ratio for real materials is:",
            options: ["0 to 0.5", "0.5 to 1", "−1 to 0", "1 to 2"],
            answer: 0,
            explain: "Theory allows −1 to 0.5; real materials lie between 0 and 0.5.",
          },
          {
            kind: "numeric",
            q: t`A copper wire ($Y = 1.2\times10^{11}$ Pa) of length 3 m and cross-section 2 mm² stretches by 1.5 mm. Load in newtons?`,
            answer: 120,
            unit: "N",
            difficulty: 3,
            explain: t`$F = \frac{YA\Delta L}{L} = \frac{1.2\times10^{11}\times2\times10^{-6}\times1.5\times10^{-3}}{3} = 120$ N.`,
          },
        ],
      },
      {
        slug: "elastic-energy-and-applications",
        title: "Elastic Energy and Applications",
        summary: "Energy stored in a stretched wire, thermal stress, and how elasticity shapes cranes, beams, rails and mountains.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A stretched catapult rubber or a bent bow stores energy that it can give back. A stretched wire does the same, and the amount stored decides how safely cranes, lifts and bridges behave.",
          },
          { type: "heading", text: "Elastic potential energy" },
          {
            type: "formula",
            tex: t`U = \tfrac12F\,\Delta L, \qquad u = \frac{U}{V} = \tfrac12\,\text{stress}\times\text{strain} = \tfrac12Y(\text{strain})^2 = \frac{(\text{stress})^2}{2Y}`,
            caption: "Energy and energy density stored in a stretched wire",
          },
          {
            type: "text",
            md: t`**Worked example.** A 100 N load stretches a wire by 1 mm. Energy stored $= \tfrac12\times100\times10^{-3} = 0.05$ J. If the load is doubled (within the elastic limit), extension doubles and energy becomes 4 times, 0.2 J.`,
          },
          { type: "heading", text: "Designing a crane rope" },
          {
            type: "text",
            md: t`A crane must lift 10 tonnes. Steel yields at about $3\times10^8$ Pa. Minimum area $A = mg/\sigma_y = 10^4\times9.8/(3\times10^8) \approx 3.3\times10^{-4}$ m², so $r \approx 1$ cm. With a safety factor of 10 on the load, $r$ grows by $\sqrt{10}$ to about 3 cm. Real cranes use many thin strands twisted together for flexibility.`,
          },
          { type: "heading", text: "Beams and bridges" },
          {
            type: "formula",
            tex: t`\delta = \frac{Wl^3}{4bd^3Y}`,
            caption: "Sag of a beam of length l, breadth b and depth d loaded at the centre",
          },
          {
            type: "list",
            items: [
              t`Since $\delta \propto 1/d^3$, increasing **depth** reduces sag far more than increasing breadth.`,
              "A deep beam can buckle sideways, so steel girders and Indian Railways rails use an **I-section**: deep, but light.",
              "Mountains cannot be much taller than about 10 km: the rock at the base would flow under the shear stress of the weight above.",
            ],
          },
          { type: "heading", text: "Thermal stress" },
          {
            type: "text",
            md: t`A rod clamped at both ends and heated cannot expand, so it develops stress $= Y\alpha\Delta T$. **Worked example:** a steel rail ($Y = 2\times10^{11}$ Pa, $\alpha = 1.2\times10^{-5}$ K⁻¹) heats by 20 K on a summer afternoon in Rajasthan. Stress $= 2\times10^{11}\times1.2\times10^{-5}\times20 = 4.8\times10^7$ Pa. That is why rails have expansion joints or are laid pre-stressed.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`A wire under stress $2\times10^8$ Pa has $Y = 2\times10^{11}$ Pa. Energy stored per unit volume, in units of $10^5$ J/m³?`,
                answer: 1,
                explain: t`$u = \frac{\text{stress}^2}{2Y} = \frac{4\times10^{16}}{4\times10^{11}} = 10^5$ J/m³.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Common trap",
            md: "Energy stored in the wire is $\\tfrac12F\\Delta L$, **not** $F\\Delta L$. When a load $mg$ descends by $\\Delta L$, gravity does $mg\\Delta L$ of work, but only half is stored as elastic energy; the other half is lost as heat and oscillation.",
          },
          {
            type: "keypoints",
            items: [
              t`$U = \tfrac12F\Delta L$; energy density $= \tfrac12\,$stress × strain.`,
              t`Thermal stress in a clamped rod $= Y\alpha\Delta T$.`,
              t`Beam sag $\propto l^3/(bd^3Y)$, so I-section beams are deep and light.`,
              "Safety factors make real ropes and beams several times stronger than the minimum.",
            ],
          },
        ],
        flashcards: [
          { front: "Elastic energy stored in a wire", back: t`$U = \tfrac12F\Delta L = \tfrac12\,\text{stress}\times\text{strain}\times\text{volume}$` },
          { front: "Thermal stress in a clamped rod", back: t`$Y\alpha\Delta T$` },
          { front: "Sag of a centrally loaded beam", back: t`$\delta = \frac{Wl^3}{4bd^3Y}$` },
          { front: "Why I-section beams?", back: "Large depth for stiffness with less material and weight." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A load of 200 N stretches a wire by 2 mm. Elastic energy stored, in joules?",
            answer: 0.2,
            tolerance: 0.001,
            unit: "J",
            explain: t`$U = \tfrac12(200)(2\times10^{-3}) = 0.2$ J.`,
          },
          {
            kind: "mcq",
            q: "Girders and rails have an I-shaped cross-section mainly to:",
            options: ["Look attractive", "Reduce weight while keeping resistance to bending", "Increase thermal expansion", "Increase Young's modulus"],
            answer: 1,
            explain: "Most of the bending resistance comes from the material far from the centre, so the web can be thin.",
          },
          {
            kind: "truefalse",
            q: "Doubling the depth of a beam reduces its sag more than doubling its breadth.",
            answer: true,
            explain: t`$\delta \propto 1/(bd^3)$: doubling $d$ cuts sag 8×; doubling $b$ only 2×.`,
          },
          {
            kind: "numeric",
            q: t`A rod clamped at both ends has $Y = 2\times10^{11}$ Pa, $\alpha = 10^{-5}$ K⁻¹ and is heated by 25 K. Thermal stress in units of $10^7$ Pa?`,
            answer: 5,
            difficulty: 2,
            explain: t`$Y\alpha\Delta T = 2\times10^{11}\times10^{-5}\times25 = 5\times10^7$ Pa.`,
          },
          {
            kind: "fill",
            q: "Elastic energy per unit volume of a stretched wire = ½ × stress × ___.",
            answer: ["strain"],
            explain: t`$u = \tfrac12\sigma\varepsilon$.`,
          },
          {
            kind: "mcq",
            q: "Within the elastic limit, the extension of a wire is doubled. The stored elastic energy becomes:",
            options: ["Same", "2 times", "4 times", "Half"],
            answer: 2,
            difficulty: 2,
            explain: t`$U = \tfrac12k(\Delta L)^2$, so doubling $\Delta L$ quadruples $U$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Mechanical Properties of Fluids                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "mechanical-properties-of-fluids",
    title: "Mechanical Properties of Fluids",
    icon: "💧",
    description: "Pressure, Pascal's law, Bernoulli's principle, viscosity, surface tension and capillarity.",
    lessons: [
      {
        slug: "pressure-and-pascals-law",
        title: "Pressure, Pascal's Law and Buoyancy",
        summary: "Hydrostatic pressure, gauge and absolute pressure, barometers, hydraulic machines and Archimedes' principle.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Your ears pop at the bottom of a deep pool and a camel's broad feet don't sink into the Thar sand. Both are about **pressure**, force spread over area. In a fluid at rest, pressure depends only on depth.",
          },
          { type: "formula", tex: t`p = \frac{F}{A}, \qquad p = p_a + \rho gh`, caption: "Pressure at depth h in a liquid of density ρ open to the atmosphere" },
          {
            type: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Absolute pressure", t`$p = p_a + \rho gh$, measured from vacuum`],
              ["Gauge pressure", t`$p - p_a = \rho gh$, what a tyre gauge reads`],
              ["Atmospheric pressure", t`$p_a = 1.013\times10^5$ Pa = 1 atm = 76 cm of Hg`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** At the bottom of a 10 m deep diving pool ($\rho = 1000$ kg/m³, $g = 9.8$): $p = 1.013\times10^5 + 1000\times9.8\times10 = 1.013\times10^5 + 0.98\times10^5 \approx 2.0\times10^5$ Pa, about 2 atm.`,
          },
          {
            type: "callout",
            tone: "fact",
            title: "Hydrostatic paradox",
            md: "Pressure at a given depth is the same whatever the shape of the vessel. A narrow tube and a wide tank filled to the same height have the same pressure at the base.",
          },
          { type: "heading", text: "Barometer" },
          {
            type: "text",
            md: t`A mercury barometer balances the atmosphere against a mercury column: $p_a = \rho_{Hg}gh = 13600\times9.8\times0.76 \approx 1.013\times10^5$ Pa. At Leh (about 3500 m), the column is only about two-thirds as tall, which is why water boils below 90 °C there.`,
          },
          { type: "heading", text: "Pascal's law and hydraulic machines" },
          {
            type: "text",
            md: "A change in pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and the container walls. In a hydraulic lift or the brakes of a car, a small force on a small piston produces a large force on a big piston.",
          },
          { type: "formula", tex: t`\frac{F_1}{A_1} = \frac{F_2}{A_2} \;\Rightarrow\; F_2 = F_1\frac{A_2}{A_1}` },
          {
            type: "text",
            md: t`**Worked example.** At a service station, pistons have radii 2 cm and 20 cm (area ratio 100). To lift a 1500 kg car (weight 14 700 N), the small piston needs only $14\,700/100 = 147$ N. But it must move 100 times further: energy is not multiplied.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A hydraulic press has piston area ratio 50 : 1. What force on the small piston lifts a 10 000 N load?",
                answer: 200,
                unit: "N",
                explain: t`$F_1 = 10\,000/50 = 200$ N.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Archimedes' principle:** a body in a fluid feels an upward buoyant force equal to the weight of fluid displaced, $F_B = \rho_{fluid}Vg$. A floating body displaces its own weight, so the fraction submerged equals $\rho_{body}/\rho_{fluid}$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / NEET trap",
            md: "A hydraulic lift multiplies **force**, never work or energy: $F_1d_1 = F_2d_2$. And in questions on gauge pressure, do not add $p_a$; in questions on absolute pressure, do.",
          },
          {
            type: "keypoints",
            items: [
              t`$p = p_a + \rho gh$; pressure depends on depth, not on the vessel's shape.`,
              "Gauge pressure = absolute − atmospheric.",
              "Pascal's law: pressure is transmitted undiminished in an enclosed fluid.",
              t`Buoyant force = weight of fluid displaced; fraction submerged = $\rho_{body}/\rho_{fluid}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Pressure at depth h", back: t`$p = p_a + \rho gh$` },
          { front: "1 atm", back: t`$1.013\times10^5$ Pa = 76 cm of mercury` },
          { front: "Pascal's law", back: "Pressure applied to an enclosed fluid is transmitted equally to all parts." },
          { front: "Archimedes' principle", back: "Buoyant force = weight of fluid displaced" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Gauge pressure at a depth of 5 m in water ($g = 10$ m/s²), in kPa?",
            answer: 50,
            unit: "kPa",
            explain: t`$\rho gh = 1000\times10\times5 = 5\times10^4$ Pa $= 50$ kPa.`,
          },
          {
            kind: "mcq",
            q: "The pressure at the bottom of a vessel of liquid does NOT depend on:",
            options: ["Depth of liquid", "Density of liquid", "Area of the base", "Acceleration due to gravity"],
            answer: 2,
            explain: t`$p = p_a + \rho gh$ has no area term (hydrostatic paradox).`,
          },
          {
            kind: "truefalse",
            q: "A barometer using water instead of mercury would need a column a little over 10 m tall.",
            answer: true,
            explain: t`$h = 1.013\times10^5/(1000\times9.8) \approx 10.3$ m.`,
          },
          {
            kind: "fill",
            q: "The SI unit of pressure is the ___.",
            answer: ["pascal", "Pa"],
            explain: "1 Pa = 1 N/m².",
          },
          {
            kind: "mcq",
            q: "A wooden block floats in water with three-quarters of its volume submerged. Its density is:",
            options: ["250 kg/m³", "500 kg/m³", "750 kg/m³", "1333 kg/m³"],
            answer: 2,
            difficulty: 2,
            explain: t`Fraction submerged $= \rho_b/\rho_w \Rightarrow \rho_b = 0.75\times1000 = 750$ kg/m³.`,
          },
        ],
      },
      {
        slug: "fluid-flow-and-bernoulli",
        title: "Fluid Flow and Bernoulli's Principle",
        summary: "Streamline flow, the equation of continuity, Bernoulli's equation, Torricelli's law and dynamic lift.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Pinch the end of a garden hose and the water shoots out faster. During a cyclone on the Odisha coast, tin roofs lift off even though the wind blows sideways. Both effects come from two equations for moving fluids.",
          },
          {
            type: "table",
            headers: ["Streamline (laminar) flow", "Turbulent flow"],
            rows: [
              ["Velocity at each point is steady", "Velocity changes randomly"],
              ["Streamlines never cross", "Eddies and swirls form"],
              ["Low speeds, viscous fluids", "High speeds, large pipes"],
            ],
          },
          { type: "heading", text: "Equation of continuity" },
          { type: "formula", tex: t`A_1v_1 = A_2v_2`, caption: "Conservation of mass for an incompressible fluid" },
          { type: "heading", text: "Bernoulli's equation" },
          { type: "formula", tex: t`p + \tfrac12\rho v^2 + \rho gh = \text{constant along a streamline}`, caption: "Conservation of energy per unit volume for steady, incompressible, non-viscous flow" },
          {
            type: "text",
            md: t`**Worked example.** Water flows at 1 m/s through a horizontal pipe that narrows from 4 cm² to 1 cm². Continuity: $v_2 = 4\times1 = 4$ m/s. Bernoulli: $p_1 - p_2 = \tfrac12\rho(v_2^2 - v_1^2) = \tfrac12(1000)(16 - 1) = 7500$ Pa. This pressure drop is what a **venturimeter** measures to find flow speed.`,
          },
          { type: "heading", text: "Torricelli's law" },
          { type: "formula", tex: t`v = \sqrt{2gh}`, caption: "Speed of efflux from a hole at depth h below the free surface" },
          {
            type: "text",
            md: t`**Worked example.** A village water tank has a leak 5 m below the water surface. $v = \sqrt{2\times9.8\times5} = \sqrt{98} \approx 9.9$ m/s, the same speed as a stone dropped from 5 m.`,
          },
          {
            type: "list",
            items: [
              "**Dynamic lift on wings:** air flows faster over the curved top of an aerofoil, so pressure there is lower.",
              "**Roofs in cyclones:** fast wind over the roof lowers the pressure above it; still air inside pushes the roof up.",
              "**Swing of a spinning ball (Magnus effect):** the spinning ball drags air faster on one side, creating a sideways pressure difference.",
              "**Atomisers and sprayers:** fast air over a tube lowers pressure and draws the liquid up.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Water flows at 2 m/s in a pipe. The pipe's radius then halves. New speed?",
                answer: 8,
                unit: "m/s",
                explain: t`Area falls to 1/4, so $v$ rises 4 times: 8 m/s.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE favourite",
            md: t`A tank of height H has a hole at depth h. The jet lands at horizontal distance $R = 2\sqrt{h(H - h)}$. R is greatest, equal to H, when $h = H/2$. Holes at depths h and $H - h$ give equal ranges. Remember Bernoulli holds only for ideal (non-viscous, incompressible), steady flow.`,
          },
          {
            type: "keypoints",
            items: [
              t`Continuity: $Av$ = constant; narrower pipe, faster flow.`,
              t`Bernoulli: $p + \tfrac12\rho v^2 + \rho gh$ = constant; faster flow, lower pressure.`,
              t`Torricelli: $v = \sqrt{2gh}$, independent of the liquid's density.`,
              "Lift, cyclone roofs, swing bowling and sprayers all use Bernoulli's principle.",
            ],
          },
        ],
        flashcards: [
          { front: "Equation of continuity", back: t`$A_1v_1 = A_2v_2$ (mass conservation)` },
          { front: "Bernoulli's equation", back: t`$p + \tfrac12\rho v^2 + \rho gh = $ constant` },
          { front: "Torricelli's law", back: t`$v = \sqrt{2gh}$` },
          { front: "Range of jet from hole at depth h in tank of height H", back: t`$R = 2\sqrt{h(H-h)}$, max $H$ at $h = H/2$` },
          { front: "Venturimeter", back: "Measures flow speed from the pressure drop at a constriction." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a cyclone, tin roofs are lifted off houses because:",
            options: ["Wind pushes them from below", "Air pressure above the roof falls due to the fast wind", "Rain makes them lighter", "Gravity decreases in storms"],
            answer: 1,
            explain: "Fast-moving air above the roof is at lower pressure than the still air inside.",
          },
          {
            kind: "numeric",
            q: "Water leaks from a hole 20 m below the free surface of a tank ($g = 10$ m/s²). Efflux speed?",
            answer: 20,
            unit: "m/s",
            explain: t`$v = \sqrt{2\times10\times20} = 20$ m/s.`,
          },
          {
            kind: "truefalse",
            q: "The speed of efflux from a hole in a tank does not depend on the density of the liquid.",
            answer: true,
            explain: t`$v = \sqrt{2gh}$ has no $\rho$.`,
          },
          {
            kind: "fill",
            q: "The equation of continuity expresses conservation of ___.",
            answer: ["mass"],
            explain: "Mass entering per second = mass leaving per second.",
          },
          {
            kind: "numeric",
            q: "In a horizontal pipe water speeds up from 2 m/s to 6 m/s. Pressure drop in pascals?",
            answer: 16000,
            unit: "Pa",
            difficulty: 2,
            explain: t`$\Delta p = \tfrac12(1000)(36 - 4) = 16\,000$ Pa.`,
          },
          {
            kind: "mcq",
            q: "A tank filled to height H has a small hole in its side. For the jet to land farthest from the tank, the hole should be at depth:",
            options: [t`$H/4$`, t`$H/3$`, t`$H/2$`, t`$3H/4$`],
            answer: 2,
            difficulty: 3,
            explain: t`$R = 2\sqrt{h(H - h)}$ is maximum at $h = H/2$.`,
          },
        ],
      },
      {
        slug: "viscosity-and-surface-tension",
        title: "Viscosity and Surface Tension",
        summary: "Viscous drag, Stokes' law, terminal velocity, Reynolds number, surface tension, excess pressure and capillary rise.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Honey pours slowly; water does not. Raindrops fall at a gentle few metres per second rather than as bullets. Water climbs a thin glass tube and mosquitoes walk on ponds. The first two are **viscosity**, the last two **surface tension**.",
          },
          { type: "heading", text: "Viscosity" },
          {
            type: "formula",
            tex: t`F = \eta A\frac{dv}{dx}`,
            caption: "Viscous force between layers; η is the coefficient of viscosity, unit Pa s (1 Pa s = 10 poise)",
          },
          { type: "formula", tex: t`F = 6\pi\eta rv, \qquad v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}`, caption: "Stokes' law and terminal velocity of a sphere (ρ body, σ fluid)" },
          {
            type: "text",
            md: t`**Worked example (NCERT).** A copper ball of radius 2 mm falls through oil at a terminal speed of 6.5 cm/s. $\rho_{Cu} = 8.9\times10^3$, $\sigma_{oil} = 1.5\times10^3$ kg/m³. $\eta = \dfrac{2r^2(\rho - \sigma)g}{9v_t} = \dfrac{2(4\times10^{-6})(7.4\times10^3)(9.8)}{9(0.065)} \approx 0.99$ Pa s.`,
          },
          {
            type: "text",
            md: t`**Reynolds number** $R_e = \rho vd/\eta$ predicts the type of flow: below about 1000 it is streamline, above about 2000 turbulent. Viscosity of liquids falls with temperature, while that of gases rises.`,
          },
          { type: "heading", text: "Surface tension" },
          {
            type: "text",
            md: "Molecules at a liquid's surface have neighbours only on one side, so the surface behaves like a stretched membrane. **Surface tension** S is the force per unit length along a line in the surface, or equally the extra energy per unit area of surface (N/m = J/m²). It falls as temperature rises.",
          },
          {
            type: "table",
            headers: ["Situation", "Excess pressure inside"],
            rows: [
              ["Liquid drop (one surface)", t`$2S/R$`],
              ["Air bubble inside a liquid (one surface)", t`$2S/R$`],
              ["Soap bubble in air (two surfaces)", t`$4S/R$`],
            ],
          },
          { type: "heading", text: "Angle of contact and capillarity" },
          { type: "formula", tex: t`h = \frac{2S\cos\theta}{\rho gr}`, caption: "Capillary rise (θ < 90°) or depression (θ > 90°)" },
          {
            type: "text",
            md: t`Water wets clean glass ($\theta \approx 0^\circ$) and rises; mercury ($\theta \approx 140^\circ$) is depressed. **Worked example:** in a glass tube of radius 0.5 mm, water ($S = 0.073$ N/m) rises $h = \dfrac{2(0.073)}{1000(9.8)(5\times10^{-4})} = \dfrac{0.146}{4.9} \approx 0.030$ m $= 3.0$ cm.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Excess pressure inside a soap bubble of radius 2 cm, if S = 0.03 N/m?",
                answer: 6,
                unit: "Pa",
                explain: t`$4S/R = 4(0.03)/0.02 = 6$ Pa.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "A soap bubble has **two** surfaces: excess pressure $4S/R$, and the work to blow it to radius R is $2\\times4\\pi R^2S = 8\\pi R^2S$. A liquid drop has one surface: $2S/R$ and $4\\pi R^2S$. Mixing these up is the most common error in this chapter.",
          },
          {
            type: "keypoints",
            items: [
              t`Stokes: $F = 6\pi\eta rv$; terminal speed $\propto r^2$.`,
              "Reynolds number: < 1000 streamline, > 2000 turbulent.",
              "Surface tension = force per length = surface energy per area.",
              t`Capillary rise $h = 2S\cos\theta/\rho gr$; narrower tube, higher rise (Jurin's law: $hr$ constant).`,
            ],
          },
        ],
        flashcards: [
          { front: "Stokes' law", back: t`$F = 6\pi\eta rv$` },
          { front: "Terminal velocity of a sphere", back: t`$v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}$` },
          { front: "Excess pressure in a soap bubble", back: t`$4S/R$` },
          { front: "Capillary rise", back: t`$h = \frac{2S\cos\theta}{\rho gr}$` },
          { front: "Effect of temperature on viscosity", back: "Liquids: decreases. Gases: increases." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "As temperature increases, the viscosity of a gas:",
            options: ["Decreases", "Increases", "Stays the same", "First rises then falls"],
            answer: 1,
            explain: "Faster molecules carry more momentum between layers, so gas viscosity rises.",
          },
          {
            kind: "truefalse",
            q: "The terminal velocity of a small sphere falling through a viscous fluid is proportional to the square of its radius.",
            answer: true,
            explain: t`$v_t = 2r^2(\rho - \sigma)g/9\eta$.`,
          },
          {
            kind: "numeric",
            q: "Water rises 3 cm in a capillary tube. How high (in cm) will it rise in a tube of half the radius?",
            answer: 6,
            unit: "cm",
            difficulty: 2,
            explain: t`$h \propto 1/r$: halving $r$ doubles $h$ to 6 cm.`,
          },
          {
            kind: "fill",
            q: "Mercury in a glass capillary tube shows capillary ___.",
            answer: ["depression", "fall"],
            explain: t`Its angle of contact is obtuse (~140°), so $\cos\theta < 0$.`,
          },
          {
            kind: "mcq",
            q: "Work done in blowing a soap bubble of radius R (surface tension S) is:",
            options: [t`$4\pi R^2S$`, t`$8\pi R^2S$`, t`$2\pi R^2S$`, t`$16\pi R^2S$`],
            answer: 1,
            difficulty: 2,
            explain: t`Two surfaces each of area $4\pi R^2$: $W = 8\pi R^2S$.`,
          },
          {
            kind: "numeric",
            q: "Excess pressure inside a liquid drop of radius 1 mm with S = 0.07 N/m, in pascals?",
            answer: 140,
            unit: "Pa",
            explain: t`$2S/R = 2(0.07)/10^{-3} = 140$ Pa.`,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Units and Measurements": "units-and-measurements",
  "Physical World and Measurement": "units-and-measurements",
  "Measurements and Experimentation": "units-and-measurements",
  "Experimental Skills": "units-and-measurements",
  "System of Particles and Rotational Motion": "rotational-motion",
  "Motion of System of Particles and Rigid Body": "rotational-motion",
  "Rotational Motion": "rotational-motion",
  "Mechanical Properties of Solids": "mechanical-properties-of-solids",
  "Properties of Solids and Liquids": "mechanical-properties-of-solids",
  "Properties of Bulk Matter": "mechanical-properties-of-solids",
  "Mechanical Properties of Fluids": "mechanical-properties-of-fluids",
  Fluids: "mechanical-properties-of-fluids",
};
