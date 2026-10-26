import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "physics-senior";
/** Syllabus family: chapter titles below are matched against `phy` rows in src/content/syllabus/. */
export const family = "phy";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Units and Measurements (NCERT) = Physical World and Measurement (ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-units-measurements",
    title: "Units and Measurements",
    icon: "📏",
    description: "SI units and prefixes, errors in measurement, significant figures, and dimensional analysis with its uses and limits.",
    lessons: [
      {
        slug: "c11-si-units",
        title: "Physical Quantities and SI Units",
        summary: "What it means to measure, fundamental and derived quantities, the seven SI base units, prefixes and practical units of length, mass and time.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🛰️",
            caption: "In 1999 NASA lost the Mars Climate Orbiter: one team's software reported impulse in pound-force seconds, another read it as newton seconds. A unit mix-up destroyed a spacecraft.",
          },
          {
            type: "text",
            md: t`To **measure** a physical quantity is to compare it with a fixed, agreed reference called a **unit**. Every measurement is written as a number times a unit: a desk is $1.2\ \text{m}$ long, which means it is 1.2 times the length of the metre.

Change the unit and the number changes the other way. A bigger unit gives a smaller number, so the product stays the same.`,
          },
          {
            type: "formula",
            tex: t`Q = n_1 u_1 = n_2 u_2 \qquad\Rightarrow\qquad n \propto \frac{1}{u}`,
            caption: "The size of a quantity Q does not depend on the unit chosen; only the numerical value n does.",
          },
          {
            type: "text",
            md: t`A small set of quantities is chosen as **fundamental (base) quantities**. Their units, the **base units**, are defined on their own. Every other quantity is a **derived quantity**, and its unit is built from base units. Speed is length ÷ time, so its unit is $\text{m s}^{-1}$.

Older systems used three base units: **CGS** (centimetre, gram, second), **FPS** (foot, pound, second) and **MKS** (metre, kilogram, second). The **Système International d'Unités (SI)**, adopted in 1960 and extended later, has seven base units and is used in all science today.`,
          },
          {
            type: "table",
            headers: ["Base quantity", "SI unit", "Symbol"],
            rows: [
              ["Length", "metre", "m"],
              ["Mass", "kilogram", "kg"],
              ["Time", "second", "s"],
              ["Electric current", "ampere", "A"],
              ["Thermodynamic temperature", "kelvin", "K"],
              ["Amount of substance", "mole", "mol"],
              ["Luminous intensity", "candela", "cd"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Since 2019, units are fixed by constants of nature",
            md: t`The second is set by the caesium-133 clock frequency (9 192 631 770 Hz). The metre is set by fixing the speed of light at exactly $299\,792\,458\ \text{m s}^{-1}$. The kilogram is set by fixing Planck's constant, $h = 6.626\,070\,15 \times 10^{-34}\ \text{J s}$. The ampere, kelvin and mole fix the electron charge $e$, Boltzmann's constant $k_B$ and Avogadro's number $N_A$.`,
          },
          {
            type: "text",
            md: t`Two more SI units are **dimensionless**. The **radian** (rad) measures a plane angle: $d\theta = \dfrac{ds}{r}$ (arc ÷ radius). The **steradian** (sr) measures a solid angle: $d\Omega = \dfrac{dA}{r^2}$ (area on a sphere ÷ radius squared). A full circle is $2\pi$ rad and a full sphere is $4\pi$ sr.

Writing rules: unit symbols take no plural and no full stop ("5 kg", not "5 kgs."). A symbol named after a person is a capital letter (N, J, Pa, W), but the full name is written in small letters (newton, joule).`,
          },
          {
            type: "table",
            headers: ["Prefix", "Symbol", "Power of ten"],
            rows: [
              ["tera", "T", t`$10^{12}$`],
              ["giga", "G", t`$10^{9}$`],
              ["mega", "M", t`$10^{6}$`],
              ["kilo", "k", t`$10^{3}$`],
              ["centi", "c", t`$10^{-2}$`],
              ["milli", "m", t`$10^{-3}$`],
              ["micro", "μ", t`$10^{-6}$`],
              ["nano", "n", t`$10^{-9}$`],
              ["pico", "p", t`$10^{-12}$`],
              ["femto", "f", t`$10^{-15}$`],
            ],
          },
          {
            type: "list",
            items: [
              t`**Very small lengths:** 1 fermi (fm) $= 10^{-15}$ m (size of a nucleus); 1 ångström (Å) $= 10^{-10}$ m (size of an atom).`,
              t`**Very large lengths:** 1 astronomical unit (AU) $\approx 1.496 \times 10^{11}$ m (mean Earth–Sun distance); 1 light year (ly) $\approx 9.46 \times 10^{15}$ m; 1 parsec (pc) $\approx 3.08 \times 10^{16}$ m $\approx 3.26$ ly.`,
              t`**Small masses:** 1 unified atomic mass unit (u) $\approx 1.66 \times 10^{-27}$ kg, one-twelfth of the mass of a carbon-12 atom.`,
            ],
          },
          {
            type: "example",
            title: "Converting units",
            problem: t`(a) The Vande Bharat Express runs at 144 km/h on a stretch. Express this in $\text{m s}^{-1}$. (b) The density of water is $1\ \text{g cm}^{-3}$. Express it in SI units.`,
            steps: [
              t`(a) $1\ \text{km/h} = \dfrac{1000\ \text{m}}{3600\ \text{s}} = \dfrac{5}{18}\ \text{m s}^{-1}$.`,
              t`So $144\ \text{km/h} = 144 \times \dfrac{5}{18} = 40\ \text{m s}^{-1}$.`,
              t`(b) $1\ \text{g} = 10^{-3}$ kg and $1\ \text{cm}^3 = (10^{-2}\ \text{m})^3 = 10^{-6}\ \text{m}^3$.`,
              t`$1\ \text{g cm}^{-3} = \dfrac{10^{-3}\ \text{kg}}{10^{-6}\ \text{m}^3} = 10^{3}\ \text{kg m}^{-3}$.`,
            ],
            answer: t`(a) $40\ \text{m s}^{-1}$; (b) $1000\ \text{kg m}^{-3}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is NOT an SI base unit?",
                options: ["kelvin", "candela", "newton", "mole"],
                answer: 2,
                explain: t`The newton is a derived unit: $1\ \text{N} = 1\ \text{kg m s}^{-2}$. Kelvin, candela and mole are three of the seven base units.`,
              },
              {
                kind: "numeric",
                q: "How many metres are there in 2.5 light years? Give the answer as a multiple of 10¹⁶ m (use 1 ly = 9.46 × 10¹⁵ m).",
                answer: 2.365,
                tolerance: 0.01,
                unit: "× 10¹⁶ m",
                explain: t`$2.5 \times 9.46 \times 10^{15} = 23.65 \times 10^{15} = 2.365 \times 10^{16}$ m.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The SI unit of temperature is the degree Celsius, and a light year is a unit of time.",
            right: "The SI base unit of temperature is the kelvin (K). A light year is a unit of length: the distance light travels in one year.",
            why: "We use °C every day, and the word \"year\" sounds like time. But a temperature change of 1 °C equals 1 K, and only the kelvin is the base unit. A light year is a distance, about 9.46 × 10¹⁵ m.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each one an SI base unit or a derived unit?",
              groups: ["Base unit", "Derived unit"],
              items: [
                { text: "kilogram", group: 0, hint: "It is the only base unit with a prefix in its name." },
                { text: "coulomb", group: 1, hint: "1 C = 1 A s, so it is built from the ampere and the second." },
                { text: "ampere", group: 0, hint: "Electric current is a base quantity in SI." },
                { text: "joule", group: 1, hint: "1 J = 1 kg m² s⁻²." },
                { text: "mole", group: 0, hint: "Amount of substance is one of the seven base quantities." },
                { text: "pascal", group: 1, hint: "1 Pa = 1 N m⁻², a force per area." },
                { text: "candela", group: 0, hint: "Luminous intensity is a base quantity." },
                { text: "watt", group: 1, hint: "1 W = 1 J s⁻¹." },
              ],
              explain: "Learn the seven base units by heart: m, kg, s, A, K, mol, cd. Everything else, including charge (coulomb), is derived from them.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "One-mark questions often ask you to name base units or convert km/h to m/s. Write the unit symbol correctly (kg, not Kg; N, not n). In a numerical, a missing or wrong unit on the final answer usually costs the last mark.",
          },
          {
            type: "keypoints",
            items: [
              "A measurement is a number times a unit; the number varies inversely with the size of the unit (n₁u₁ = n₂u₂).",
              "SI has seven base units: metre, kilogram, second, ampere, kelvin, mole, candela.",
              "Radian (plane angle) and steradian (solid angle) are dimensionless SI units.",
              "Know the prefixes from femto (10⁻¹⁵) to tera (10¹²) and the practical units fermi, ångström, AU, light year and parsec.",
            ],
          },
        ],
        flashcards: [
          { front: "The seven SI base quantities", back: "Length, mass, time, electric current, thermodynamic temperature, amount of substance, luminous intensity." },
          { front: "1 km/h in m/s", back: "5/18 m/s. So 36 km/h = 10 m/s and 72 km/h = 20 m/s." },
          { front: "Radian", back: "Plane angle = arc length ÷ radius. A full circle is 2π rad. It is dimensionless." },
          { front: "Steradian", back: "Solid angle = area on a sphere ÷ (radius)². A full sphere is 4π sr." },
          { front: "1 light year", back: "Distance light travels in one year ≈ 9.46 × 10¹⁵ m. A unit of length." },
          { front: "1 parsec", back: "≈ 3.08 × 10¹⁶ m ≈ 3.26 light years." },
          { front: "1 unified atomic mass unit (u)", back: "1/12 of the mass of a carbon-12 atom ≈ 1.66 × 10⁻²⁷ kg." },
          { front: "How is the kilogram defined since 2019?", back: "By fixing the value of Planck's constant h = 6.626 070 15 × 10⁻³⁴ J s." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The SI unit of luminous intensity is the:",
            options: ["lumen", "candela", "lux", "watt"],
            answer: 1,
            explain: "The candela (cd) is the base unit. Lumen (luminous flux) and lux (illuminance) are derived units.",
          },
          {
            kind: "numeric",
            q: "A cheetah runs at 30 m/s. What is this speed in km/h?",
            answer: 108,
            unit: "km/h",
            explain: t`Multiply by $\tfrac{18}{5}$: $30 \times 3.6 = 108$ km/h.`,
          },
          {
            kind: "truefalse",
            q: "If the unit of length is changed from metre to centimetre, the numerical value of a given length becomes 100 times larger.",
            answer: true,
            explain: "n₁u₁ = n₂u₂. The centimetre is 100 times smaller than the metre, so the number is 100 times bigger (2 m = 200 cm).",
          },
          {
            kind: "fill",
            q: "The solid angle subtended by a whole sphere at its centre is ___ steradian.",
            answer: ["4π", "4pi", "4 pi"],
            explain: t`$\Omega = \dfrac{4\pi r^2}{r^2} = 4\pi$ sr.`,
          },
          {
            kind: "numeric",
            q: "Express 1 ångström in nanometres.",
            answer: 0.1,
            unit: "nm",
            explain: t`$1\ \text{Å} = 10^{-10}$ m and $1\ \text{nm} = 10^{-9}$ m, so $1\ \text{Å} = 0.1$ nm.`,
          },
          {
            kind: "mcq",
            q: "Which unit is a unit of length?",
            options: ["Light year", "Kilowatt hour", "Hertz", "Becquerel"],
            answer: 0,
            explain: "A light year is the distance light travels in a year. Kilowatt hour is energy, hertz is frequency, becquerel is activity.",
          },
          {
            kind: "multi",
            q: "Which of these are written correctly in SI style?",
            options: ["5 kg", "5 Kg", "20 N", "3 kgs."],
            answers: [0, 2],
            explain: "The kilogram symbol is lower-case kg; N is capital because it honours Newton. Symbols take no plural and no full stop.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A field in Punjab has an area of 2.0 km². What is this area in m²? Give the answer as a multiple of 10⁶ m².",
            answer: 2,
            unit: "× 10⁶ m²",
            explain: t`$1\ \text{km}^2 = (10^3\ \text{m})^2 = 10^6\ \text{m}^2$, so $2.0\ \text{km}^2 = 2.0 \times 10^6\ \text{m}^2$. Square the conversion factor, not just the number.`,
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Errors and significant figures ---------------- */
      {
        slug: "c11-errors-significant-figures",
        title: "Errors in Measurement and Significant Figures",
        summary: "Least count, accuracy and precision, kinds of error, absolute, relative and percentage error, how errors combine, and the rules of significant figures.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Board note: who needs the error part",
            md: "The rationalised NCERT book (CBSE and Karnataka PUC) keeps **significant figures** but has removed the section on errors. Errors in measurement are still in the **ISC** syllabus, in the **JEE Main** and **NEET** syllabi, and in your practical work (least count, vernier and screw gauge). Learn both parts.",
          },
          {
            type: "text",
            md: t`Every instrument has a **least count**: the smallest value it can read. A metre scale reads to 1 mm, a vernier calliper usually to 0.1 mm, a screw gauge to 0.01 mm.

**Accuracy** tells how close a measurement is to the true value. **Precision** tells how finely it is resolved, or how closely repeated readings agree. A thermometer that always reads 2 °C high can be very precise and still inaccurate.`,
          },
          {
            type: "table",
            headers: ["Kind of error", "Cause", "How to reduce it"],
            rows: [
              ["Systematic: instrumental", "faulty or badly calibrated instrument, zero error", "calibrate; apply zero correction"],
              ["Systematic: technique", "imperfect method, e.g. reading body temperature under the arm", "improve the method"],
              ["Systematic: personal", "observer bias, e.g. parallax while reading a scale", "train; look straight at the scale"],
              ["Random", "unpredictable changes in conditions or readings", "take many readings and average"],
              ["Least count error", "limited resolution of the instrument", "use a finer instrument"],
            ],
          },
          {
            type: "formula",
            tex: t`a_{\text{mean}} = \frac{1}{n}\sum a_i,\quad \Delta a_i = a_{\text{mean}} - a_i,\quad \Delta a_{\text{mean}} = \frac{1}{n}\sum |\Delta a_i|,\quad \delta a = \frac{\Delta a_{\text{mean}}}{a_{\text{mean}}}`,
            caption: "Absolute error of each reading, mean absolute error, and relative error. Percentage error = relative error × 100%. The result is written a = a_mean ± Δa_mean.",
          },
          {
            type: "example",
            title: "Mean absolute and percentage error",
            problem: "Priya times 20 oscillations of a pendulum five times and finds the period T = 1.95 s, 2.02 s, 1.98 s, 2.05 s and 2.00 s. Find the mean period, the mean absolute error and the percentage error.",
            steps: [
              t`Mean: $T = \dfrac{1.95 + 2.02 + 1.98 + 2.05 + 2.00}{5} = \dfrac{10.00}{5} = 2.00$ s.`,
              t`Absolute errors: $0.05, -0.02, 0.02, -0.05, 0.00$ s. Their magnitudes add to $0.14$ s.`,
              t`Mean absolute error: $\Delta T = 0.14/5 = 0.028 \approx 0.03$ s (round errors to the last decimal place of the readings).`,
              t`Percentage error: $\dfrac{0.03}{2.00} \times 100\% = 1.5\%$.`,
            ],
            answer: t`$T = 2.00 \pm 0.03$ s, a percentage error of about 1.5%.`,
          },
          {
            type: "table",
            headers: ["If Z is…", "Error in Z", "Rule in words"],
            rows: [
              [t`$Z = A + B$ or $Z = A - B$`, t`$\Delta Z = \Delta A + \Delta B$`, "absolute errors add, even for a difference"],
              [t`$Z = AB$ or $Z = A/B$`, t`$\dfrac{\Delta Z}{Z} = \dfrac{\Delta A}{A} + \dfrac{\Delta B}{B}$`, "relative errors add"],
              [t`$Z = A^p B^q / C^r$`, t`$\dfrac{\Delta Z}{Z} = p\dfrac{\Delta A}{A} + q\dfrac{\Delta B}{B} + r\dfrac{\Delta C}{C}$`, "each relative error is multiplied by its power"],
            ],
          },
          {
            type: "example",
            title: "Error in a resistance",
            problem: t`A student measures $V = 5.0 \pm 0.1$ V across a resistor and $I = 2.0 \pm 0.2$ A through it. Find $R = V/I$ with its error.`,
            steps: [
              t`$R = 5.0 / 2.0 = 2.5\ \Omega$.`,
              t`Relative errors: $\dfrac{0.1}{5.0} = 0.02$ (2%) and $\dfrac{0.2}{2.0} = 0.10$ (10%).`,
              t`For a quotient the relative errors add: $\dfrac{\Delta R}{R} = 0.02 + 0.10 = 0.12$ (12%).`,
              t`$\Delta R = 0.12 \times 2.5 = 0.3\ \Omega$.`,
            ],
            answer: t`$R = 2.5 \pm 0.3\ \Omega$ (12% error).`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "All non-zero digits are significant: 4.32 has 3.",
              "Zeros between non-zero digits are significant: 2005 has 4.",
              "Leading zeros in a number less than 1 are not significant: 0.00230 has 3 (2, 3 and the final 0).",
              "Trailing zeros after a decimal point are significant: 3.500 has 4.",
              "Trailing zeros in a whole number with no decimal point are not counted: 4500 has 2. Write 4.500 × 10³ if you mean 4.",
              "In scientific notation a × 10ᵇ, only the digits of a count; the power of ten is never significant. Exact numbers (counted items, the 2 in 2πr) have unlimited significant figures.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many significant figures are there in 0.020400?",
                answer: 5,
                explain: "Leading zeros 0.0 are not significant. 2, 0, 4, 0, 0 are: the middle zero is between non-zero digits and the trailing zeros come after the decimal point.",
              },
              {
                kind: "mcq",
                q: "Which reading is the most precise?",
                options: ["4.2 cm", "4.20 cm", "4.205 cm", "4 cm"],
                answer: 2,
                explain: "4.205 cm is resolved to 0.001 cm, the finest of the four. Precision is about the size of the smallest division recorded.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Arithmetic with significant figures.** In multiplication or division, keep as many significant figures as the factor with the **fewest significant figures**. In addition or subtraction, keep as many **decimal places** as the term with the fewest decimal places.

**Rounding.** If the dropped digit is more than 5, raise the last kept digit by 1; if less than 5, leave it. If it is exactly 5 (followed by nothing or zeros), NCERT's rule is: leave an even preceding digit unchanged and raise an odd one. So 2.745 becomes 2.74, but 2.735 becomes 2.74 as well.`,
          },
          {
            type: "example",
            title: "Arithmetic with significant figures",
            problem: "(a) A metal block of mass 5.74 g has volume 1.2 cm³. Find its density. (b) Three samples of rice weigh 436.32 g, 227.2 g and 0.301 g. Find the total mass.",
            steps: [
              "(a) 5.74 ÷ 1.2 = 4.7833… g cm⁻³.",
              "1.2 has only 2 significant figures, so the answer keeps 2: density = 4.8 g cm⁻³.",
              "(b) 436.32 + 227.2 + 0.301 = 663.821 g.",
              "227.2 has only one decimal place, so round to one decimal place: 663.8 g.",
            ],
            answer: "(a) 4.8 g cm⁻³; (b) 663.8 g.",
          },
          {
            type: "mistake",
            wrong: "When I subtract two measured lengths, I should subtract their errors too: (10.0 ± 0.2) − (6.0 ± 0.1) = 4.0 ± 0.1 cm.",
            right: "Absolute errors always add: (10.0 ± 0.2) − (6.0 ± 0.1) = 4.0 ± 0.3 cm.",
            why: "Subtracting the values feels like it should subtract the uncertainty. But each error can be in either direction, and in the worst case they push the result the same way. So the maximum possible error is the sum.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Four darts hit tightly together, far from the bullseye. They are:",
              emoji: "🎯",
              options: ["Accurate and precise", "Precise but not accurate", "Accurate but not precise", "Neither"],
              answer: 1,
              trap: 0,
              explain: "Tight grouping means the readings agree closely: high **precision**. Being far from the bullseye means they are far from the true value: low **accuracy**. A systematic error, like a zero error, does exactly this.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a significant-figure question, show the raw answer first, then state the rule you used to round (fewest significant figures, or fewest decimal places). In error questions, write the result as value ± error with both rounded to the same decimal place.",
          },
          {
            type: "keypoints",
            items: [
              "Accuracy is closeness to the true value; precision is the resolution or agreement of readings.",
              "Systematic errors have a fixed cause and direction; random errors are reduced by averaging many readings.",
              "Absolute errors add for sums and differences; relative errors add for products and quotients, multiplied by the powers.",
              "× and ÷: fewest significant figures. + and −: fewest decimal places.",
              "Leading zeros are never significant; trailing zeros after a decimal point are.",
            ],
          },
        ],
        flashcards: [
          { front: "Least count", back: "The smallest value an instrument can measure. Metre scale 1 mm, vernier calliper 0.1 mm, screw gauge 0.01 mm." },
          { front: "Accuracy vs precision", back: "Accuracy: how close to the true value. Precision: how fine the resolution, or how closely repeated readings agree." },
          { front: "Systematic error", back: "An error in one direction with a definite cause (zero error, faulty method, observer bias). Averaging does not remove it." },
          { front: "Relative error", back: "Mean absolute error ÷ mean value. Times 100 gives the percentage error." },
          { front: "Error in Z = A − B", back: "ΔZ = ΔA + ΔB. Absolute errors add even for a difference." },
          { front: "Error in Z = A^p B^q / C^r", back: "ΔZ/Z = p ΔA/A + q ΔB/B + r ΔC/C." },
          { front: "Significant figures in 4.500 × 10³", back: "4. The power of ten does not count; the trailing zeros after the decimal point do." },
          { front: "Rule for multiplying measured values", back: "Keep the same number of significant figures as the factor with the fewest." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many significant figures does 6.020 × 10²³ have?",
            answer: 4,
            explain: "Only the digits 6, 0, 2, 0 count. The trailing zero after the decimal point is significant; the power of ten is not.",
          },
          {
            kind: "mcq",
            q: "The sum 12.1 m + 0.346 m + 3.22 m, reported correctly, is:",
            options: ["15.666 m", "15.67 m", "15.7 m", "16 m"],
            answer: 2,
            explain: "The raw sum is 15.666 m. 12.1 has one decimal place, the fewest, so round to 15.7 m.",
          },
          {
            kind: "numeric",
            q: "The radius of a sphere is measured with an error of 1%. What is the percentage error in its volume?",
            answer: 3,
            unit: "%",
            explain: t`$V = \tfrac{4}{3}\pi r^3$, so $\dfrac{\Delta V}{V} = 3\dfrac{\Delta r}{r} = 3\%$. The constants $\tfrac{4}{3}\pi$ have no error.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Taking a large number of readings and averaging them reduces systematic error.",
            answer: false,
            explain: "Averaging reduces random error. A systematic error pushes every reading the same way, so the average is shifted too.",
          },
          {
            kind: "numeric",
            q: "Two resistors of (100 ± 3) Ω and (200 ± 4) Ω are joined in series. What is the absolute error in the total resistance (in Ω)?",
            answer: 7,
            unit: "Ω",
            explain: "In series R = R₁ + R₂ = 300 Ω, and for a sum the absolute errors add: 3 + 4 = 7 Ω.",
          },
          {
            kind: "fill",
            q: "Rounded to three significant figures by NCERT's rule, 8.635 becomes ___.",
            answer: ["8.64"],
            explain: "The dropped digit is exactly 5 and the digit before it (3) is odd, so raise it: 8.64.",
            difficulty: 2,
            hint: "Look at whether the digit before the 5 is odd or even.",
          },
          {
            kind: "mcq",
            q: "A rectangular sheet is 2.25 m long and 1.5 m wide. Its area, reported correctly, is:",
            options: ["3.375 m²", "3.38 m²", "3.4 m²", "3 m²"],
            answer: 2,
            explain: "2.25 × 1.5 = 3.375. The width 1.5 has 2 significant figures, so the area is 3.4 m².",
          },
          {
            kind: "multi",
            q: "Which of these are systematic errors?",
            options: ["Zero error of a screw gauge", "Parallax from always reading a scale from the same side", "Small unpredictable changes in mains voltage", "A stopwatch that runs slow"],
            answers: [0, 1, 3],
            explain: "Zero error, a consistent parallax habit and a slow clock all push readings one way. Unpredictable voltage changes cause random error.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Dimensions ---------------- */
      {
        slug: "c11-dimensional-analysis",
        title: "Dimensions and Dimensional Analysis",
        summary: "Dimensions of physical quantities, dimensional formulae and equations, and three uses of dimensional analysis with its limits.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`Every derived quantity can be written in terms of the base quantities. In mechanics we need only three: mass [M], length [L] and time [T]. The **dimensions** of a quantity are the powers to which these base quantities are raised to represent it.

Force = mass × acceleration = mass × length ÷ (time)². So force has dimensions 1 in mass, 1 in length and −2 in time.`,
          },
          {
            type: "formula",
            tex: t`[F] = [\text{M}\,\text{L}\,\text{T}^{-2}] \qquad [v] = [\text{M}^0\,\text{L}\,\text{T}^{-1}]`,
            caption: "The expression in square brackets is the dimensional formula. Writing [F] = [M L T⁻²] is a dimensional equation.",
          },
          {
            type: "table",
            headers: ["Quantity", "Defining relation", "Dimensional formula"],
            rows: [
              ["Acceleration", "velocity ÷ time", t`$[\text{L T}^{-2}]$`],
              ["Momentum, impulse", "mass × velocity", t`$[\text{M L T}^{-1}]$`],
              ["Work, energy, torque", "force × distance", t`$[\text{M L}^2\text{T}^{-2}]$`],
              ["Power", "work ÷ time", t`$[\text{M L}^2\text{T}^{-3}]$`],
              ["Pressure, stress, Young's modulus", "force ÷ area", t`$[\text{M L}^{-1}\text{T}^{-2}]$`],
              ["Gravitational constant G", t`$F r^2 / m_1 m_2$`, t`$[\text{M}^{-1}\text{L}^3\text{T}^{-2}]$`],
              ["Planck's constant h, angular momentum", t`$E/\nu$; $mvr$`, t`$[\text{M L}^2\text{T}^{-1}]$`],
              ["Frequency, angular speed", "1 ÷ time", t`$[\text{T}^{-1}]$`],
              ["Angle, strain, refractive index", "ratio of like quantities", "dimensionless"],
            ],
          },
          {
            type: "text",
            md: t`Some quantities have no dimensions: angle, strain, refractive index, relative density. They are **dimensionless**, though some (like angle in radians) still carry a unit.

A quantity like $G$ that has dimensions and a fixed value is a **dimensional constant**. Numbers such as $\pi$ or $\tfrac{1}{2}$ are **dimensionless constants**.

The **principle of homogeneity** says: every term in a correct physical equation must have the same dimensions. You can add or compare only like quantities, as you cannot add 5 kg to 3 s.`,
          },
          {
            type: "example",
            title: "Use 1: checking an equation",
            problem: t`Check whether $s = ut + \tfrac{1}{2}at^2$ is dimensionally correct.`,
            steps: [
              t`$[s] = [\text{L}]$.`,
              t`$[ut] = [\text{L T}^{-1}][\text{T}] = [\text{L}]$.`,
              t`$[\tfrac{1}{2}at^2] = [\text{L T}^{-2}][\text{T}^2] = [\text{L}]$; the $\tfrac{1}{2}$ has no dimensions.`,
              "All three terms have the dimensions of length, so the equation is homogeneous.",
            ],
            answer: "Dimensionally correct. (Dimensions cannot tell whether the factor ½ is right.)",
          },
          {
            type: "example",
            title: "Use 2: deducing a relation",
            problem: t`The period $T$ of a simple pendulum may depend on the bob's mass $m$, the length $l$ and $g$. Find the form of the relation.`,
            steps: [
              t`Assume $T = k\,m^a l^b g^c$, where $k$ is a dimensionless constant.`,
              t`Dimensions: $[\text{T}] = [\text{M}]^a [\text{L}]^b [\text{L T}^{-2}]^c = [\text{M}^a\,\text{L}^{b+c}\,\text{T}^{-2c}]$.`,
              t`Compare powers: M: $a = 0$; T: $-2c = 1$, so $c = -\tfrac{1}{2}$; L: $b + c = 0$, so $b = \tfrac{1}{2}$.`,
              t`So $T = k\sqrt{l/g}$. Experiment (or theory) gives $k = 2\pi$.`,
            ],
            answer: t`$T = k\sqrt{\dfrac{l}{g}}$; the period does not depend on the mass of the bob.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which two quantities have the same dimensions?",
                options: ["Work and power", "Torque and energy", "Momentum and force", "Pressure and force"],
                answer: 1,
                explain: t`Torque (force × perpendicular distance) and energy (force × distance) are both $[\text{M L}^2\text{T}^{-2}]$. They are different physical quantities with the same dimensions.`,
              },
            ],
          },
          {
            type: "example",
            title: "Use 3: converting units",
            problem: "Convert 1 joule into ergs (the CGS unit of energy).",
            steps: [
              t`$[E] = [\text{M L}^2\text{T}^{-2}]$, so $n_2 = n_1 \left(\dfrac{M_1}{M_2}\right)^1 \left(\dfrac{L_1}{L_2}\right)^2 \left(\dfrac{T_1}{T_2}\right)^{-2}$.`,
              t`Here $n_1 = 1$, $M_1/M_2 = 1\ \text{kg}/1\ \text{g} = 10^3$, $L_1/L_2 = 1\ \text{m}/1\ \text{cm} = 10^2$, $T_1/T_2 = 1$.`,
              t`$n_2 = 1 \times 10^3 \times (10^2)^2 \times 1 = 10^7$.`,
            ],
            answer: t`$1\ \text{J} = 10^7$ erg.`,
          },
          {
            type: "list",
            items: [
              "Dimensional analysis cannot find dimensionless constants such as 2π or ½.",
              "It cannot derive a relation that involves a sum or difference of terms, such as s = ut + ½at².",
              "It cannot handle trigonometric, exponential or logarithmic functions, whose arguments must be dimensionless.",
              "It fails when the quantity depends on more than three variables in mechanics (only three equations from M, L, T).",
              "A dimensionally correct equation is not always physically correct.",
            ],
          },
          {
            type: "mistake",
            wrong: "If an equation is dimensionally correct, it must be the right equation.",
            right: "Dimensional correctness is necessary but not sufficient. A wrong equation can still be dimensionally correct.",
            why: t`For example $s = ut + at^2$ passes the dimension check, but the true equation has $\tfrac{1}{2}at^2$. Dimensions only catch mistakes that mix unlike quantities; they cannot see pure numbers.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each quantity with its dimensional formula.",
              pairs: [
                ["Impulse", "[M L T⁻¹]"],
                ["Power", "[M L² T⁻³]"],
                ["Pressure", "[M L⁻¹ T⁻²]"],
                ["Gravitational constant G", "[M⁻¹ L³ T⁻²]"],
                ["Angular frequency", "[T⁻¹]"],
              ],
              explain: "Build each from its defining formula: impulse = force × time, power = work ÷ time, pressure = force ÷ area, G = Fr²/m₁m₂, and angular frequency = angle ÷ time with angle dimensionless.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Derivations by dimensional analysis carry 2–3 marks: write the assumed form with a constant k, the dimensional equation, the three equations from M, L and T, their solution, and the final relation. Always add one line saying dimensional analysis cannot give the value of k.",
          },
          {
            type: "keypoints",
            items: [
              "Dimensions are the powers of base quantities in a quantity; e.g. [F] = [M L T⁻²].",
              "Principle of homogeneity: every term of a correct equation has the same dimensions.",
              "Uses: checking equations, deducing relations, converting units between systems.",
              "Limits: no numerical constants, no sums, no trig/exp/log functions, and a correct dimension check does not prove an equation right.",
            ],
          },
        ],
        flashcards: [
          { front: "Dimensions of work or energy", back: "[M L² T⁻²]. Torque has the same dimensions." },
          { front: "Dimensions of pressure", back: "[M L⁻¹ T⁻²]. Same as stress and Young's modulus." },
          { front: "Dimensions of G", back: "[M⁻¹ L³ T⁻²], from G = F r²/(m₁ m₂)." },
          { front: "Dimensions of Planck's constant", back: "[M L² T⁻¹], the same as angular momentum." },
          { front: "Principle of homogeneity", back: "Every term on both sides of a correct physical equation has the same dimensions." },
          { front: "1 joule in erg", back: "10⁷ erg." },
          { front: "Three uses of dimensional analysis", back: "Checking equations, deducing relations between quantities, converting units." },
          { front: "Can dimensional analysis find the 2π in T = 2π√(l/g)?", back: "No. Dimensionless constants cannot be found from dimensions." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The dimensional formula of power is:",
            options: [t`$[\text{M L}^2\text{T}^{-2}]$`, t`$[\text{M L}^2\text{T}^{-3}]$`, t`$[\text{M L T}^{-2}]$`, t`$[\text{M L}^2\text{T}^{-1}]$`],
            answer: 1,
            explain: t`Power = work ÷ time = $[\text{M L}^2\text{T}^{-2}] / [\text{T}] = [\text{M L}^2\text{T}^{-3}]$. The first option is energy and the last is angular momentum.`,
          },
          {
            kind: "truefalse",
            q: "Strain has no dimensions.",
            answer: true,
            explain: "Strain is change in length ÷ original length, a ratio of two lengths, so it is dimensionless.",
          },
          {
            kind: "mcq",
            q: t`In the relation $v = at + \dfrac{b}{t + c}$, $v$ is velocity and $t$ is time. The dimensions of $b$ are:`,
            options: [t`$[\text{L T}^{-1}]$`, "[L]", t`$[\text{L T}^{-2}]$`, "[T]"],
            answer: 1,
            explain: t`$c$ is added to $t$, so $[c] = [\text{T}]$. Then $b/(t+c)$ must be a velocity: $[b] = [\text{L T}^{-1}][\text{T}] = [\text{L}]$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`The speed of sound in a gas is assumed to depend on pressure $P$ and density $\rho$ as $v = k P^a \rho^b$. Find the value of $a$.`,
            answer: 0.5,
            tolerance: 0.01,
            explain: t`$[\text{L T}^{-1}] = [\text{M L}^{-1}\text{T}^{-2}]^a [\text{M L}^{-3}]^b$. M: $a + b = 0$; T: $-2a = -1$ so $a = \tfrac{1}{2}$, $b = -\tfrac{1}{2}$. So $v = k\sqrt{P/\rho}$. (L check: $-a - 3b = -\tfrac12 + \tfrac32 = 1$.)`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The value of G is 6.67 × 10⁻¹¹ in SI units. What is its value in CGS units? Give the number that multiplies 10⁻⁸.",
            answer: 6.67,
            tolerance: 0.01,
            unit: "× 10⁻⁸",
            explain: t`$[G] = [\text{M}^{-1}\text{L}^3\text{T}^{-2}]$. $n_2 = 6.67 \times 10^{-11} \times (10^3)^{-1} \times (10^2)^3 = 6.67 \times 10^{-11} \times 10^{3} = 6.67 \times 10^{-8}$ dyne cm² g⁻².`,
            difficulty: 2,
            hint: "Mass ratio kg/g = 10³ with power −1; length ratio m/cm = 10² with power 3.",
          },
          {
            kind: "multi",
            q: "Dimensional analysis CANNOT be used to:",
            options: ["find the value of a dimensionless constant", "derive s = ut + ½at²", "check whether an equation is homogeneous", "convert a quantity from SI to CGS units"],
            answers: [0, 1],
            explain: "It can check homogeneity and convert units. It cannot find pure numbers, and it cannot derive an equation that is a sum of terms.",
          },
          {
            kind: "fill",
            q: "Quantities that have the same dimensions as momentum include ___ (a quantity equal to force × time).",
            answer: ["impulse"],
            explain: t`Impulse = force × time = $[\text{M L T}^{-2}][\text{T}] = [\text{M L T}^{-1}]$, the same as momentum.`,
          },
          {
            kind: "mcq",
            q: t`In $y = A\sin(\omega t - kx)$, $x$ is a distance. The dimensions of $k$ are:`,
            options: ["[L]", t`$[\text{L}^{-1}]$`, t`$[\text{T}^{-1}]$`, "dimensionless"],
            answer: 1,
            explain: t`The argument of a sine must be dimensionless, so $[kx] = 1$ and $[k] = [\text{L}^{-1}]$.`,
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-units-exam-edge",
        title: "Exam edge: Units, Errors and Dimensions",
        summary: "What JEE, NEET, KCET and COMEDK ask from this chapter, dimensions of common constants, error propagation, and dimensional tricks up to JEE Advanced level.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "This is a short chapter, but almost every entrance paper takes at least one question from it, and the same tools come back in every later chapter. JEE Main and NEET like **error propagation** (pendulum, Ohm's law, density) and **dimensions of strange constants**. KCET and COMEDK often ask direct **significant-figure** and **unit conversion** questions. JEE Advanced uses dimensions inside harder problems, for example to guess the form of an answer or to check one.",
          },
          {
            type: "table",
            headers: ["Exam", "Typical question from this chapter"],
            rows: [
              ["KCET / COMEDK", "significant figures in a product or sum; base vs derived units; dimensions of a common quantity"],
              ["NEET", "dimensions of a constant in a given formula; percentage error; same-dimension pairs"],
              ["JEE Main", "maximum percentage error in g, ρ or R; dimensions in a new unit system; vernier and screw-gauge readings"],
              ["JEE Advanced", "dimensions built from h, c, G, e; error estimation within a longer problem; matching quantities with dimensions"],
            ],
          },
          {
            type: "table",
            headers: ["Quantity", "Dimensions", "Quick route"],
            rows: [
              ["Charge q", "[A T]", "q = It"],
              [t`Permittivity $\varepsilon_0$`, t`$[\text{M}^{-1}\text{L}^{-3}\text{T}^4\text{A}^2]$`, t`$F = q^2/(4\pi\varepsilon_0 r^2)$`],
              [t`Permeability $\mu_0$`, t`$[\text{M L T}^{-2}\text{A}^{-2}]$`, t`$\mu_0\varepsilon_0 = 1/c^2$`],
              ["Magnetic field B", t`$[\text{M T}^{-2}\text{A}^{-1}]$`, "F = qvB"],
              ["RC, L/R, √(LC)", "[T]", "time constants"],
              [t`$E/B$, $1/\sqrt{\mu_0\varepsilon_0}$`, t`$[\text{L T}^{-1}]$`, "both are speeds"],
              [t`Boltzmann $k_B$`, t`$[\text{M L}^2\text{T}^{-2}\text{K}^{-1}]$`, t`energy $\sim k_B T$`],
            ],
          },
          {
            type: "formula",
            tex: t`Z = \frac{A^p B^q}{C^r} \;\Rightarrow\; \left(\frac{\Delta Z}{Z}\right)_{\max} = p\frac{\Delta A}{A} + q\frac{\Delta B}{B} + r\frac{\Delta C}{C}`,
            caption: "Safe whenever the formula is a product of powers. If Z contains a sum or difference (like A − B in the denominator), first find the absolute error of that sum, then its relative error.",
          },
          {
            type: "example",
            title: "KCET level: significant figures",
            problem: "The length and breadth of a laboratory bench are measured as 2.215 m and 0.62 m. Report the perimeter and the area with the correct significant figures.",
            steps: [
              "Perimeter = 2.215 + 0.62 + 2.215 + 0.62 = 5.670 m (add the four sides directly).",
              "Addition rule: 0.62 has only 2 decimal places, the fewest, so the perimeter is rounded to 5.67 m.",
              "Area = 2.215 × 0.62 = 1.3733 m².",
              "Multiplication rule: 0.62 has 2 significant figures, so area = 1.4 m².",
            ],
            answer: "Perimeter ≈ 5.67 m; area ≈ 1.4 m².",
          },
          {
            type: "example",
            title: "JEE Main level: error in g",
            problem: "In a pendulum experiment, the length L = 50.0 cm is measured to 1 mm, and the time for 50 oscillations is 70 s, measured with a resolution of 0.5 s. Find the percentage error in g.",
            steps: [
              t`$g = 4\pi^2 L / T^2$, so $\dfrac{\Delta g}{g} = \dfrac{\Delta L}{L} + 2\dfrac{\Delta T}{T}$.`,
              t`$\dfrac{\Delta L}{L} = \dfrac{0.1}{50.0} = 0.2\%$.`,
              t`Timing 50 oscillations: $\dfrac{\Delta T}{T} = \dfrac{0.5}{70} = 0.714\%$. (The same fraction holds for one period.)`,
              t`$\dfrac{\Delta g}{g} = 0.2 + 2 \times 0.714 = 1.63\%$.`,
            ],
            answer: "About 1.6%.",
          },
          {
            type: "mistake",
            wrong: "Timing 50 oscillations instead of 1 doesn't change the error, since the stopwatch least count is the same.",
            right: "The absolute error stays 0.5 s, but it is spread over 50 periods, so the error in one period is 0.5/50 = 0.01 s. The relative error falls 50 times.",
            why: "The reading error is in the total time, not in each swing. That is exactly why experiments time many oscillations. Always find ΔT/T from the total time and its error.",
          },
          {
            type: "example",
            title: "NEET level: a new set of base quantities",
            problem: "In a new system, velocity V, time T and force F are taken as base quantities. Find the dimensions of mass.",
            steps: [
              t`Write length in terms of the new bases: $L = VT$.`,
              t`Force: $F = M L T^{-2} = M (VT) T^{-2} = M V T^{-1}$.`,
              t`So $M = F T V^{-1}$.`,
            ],
            answer: t`$[M] = [F\,V^{-1}\,T]$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "The density of a cube is found from its mass and side. Mass has 1.5% error and side has 1% error. What is the maximum percentage error in density?",
                answer: 4.5,
                tolerance: 0.01,
                unit: "%",
                explain: t`$\rho = m/a^3$, so $\dfrac{\Delta\rho}{\rho} = 1.5 + 3 \times 1 = 4.5\%$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: constants in a gas equation",
            problem: t`The van der Waals equation for one mole of a real gas is $\left(P + \dfrac{a}{V^2}\right)(V - b) = RT$, where $V$ is molar volume. Find the dimensions of $a$ and $b$.`,
            steps: [
              t`$b$ is subtracted from $V$, so $[b] = [V] = [\text{L}^3]$ (per mole).`,
              t`$a/V^2$ is added to pressure, so $[a] = [P][V^2] = [\text{M L}^{-1}\text{T}^{-2}][\text{L}^6]$.`,
              t`$[a] = [\text{M L}^5\text{T}^{-2}]$ (per mole squared).`,
            ],
            answer: t`$[a] = [\text{M L}^5\text{T}^{-2}]$, $[b] = [\text{L}^3]$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: the Planck length",
            problem: t`Combine Planck's constant $h$, the speed of light $c$ and the gravitational constant $G$ to form a quantity with the dimensions of length.`,
            steps: [
              t`Let $l = h^a G^b c^d$ with $[h] = [\text{M L}^2\text{T}^{-1}]$, $[G] = [\text{M}^{-1}\text{L}^3\text{T}^{-2}]$, $[c] = [\text{L T}^{-1}]$.`,
              t`M: $a - b = 0$. L: $2a + 3b + d = 1$. T: $-a - 2b - d = 0$.`,
              t`With $b = a$: L gives $5a + d = 1$ and T gives $d = -3a$. So $2a = 1$, $a = b = \tfrac{1}{2}$, $d = -\tfrac{3}{2}$.`,
              t`Check T: $-\tfrac12 - 1 + \tfrac32 = 0$. ✓`,
            ],
            answer: t`$l = \sqrt{\dfrac{hG}{c^3}}$ (about $4 \times 10^{-35}$ m). Dividing by $c$ gives the Planck time $\sqrt{hG/c^5}$.`,
          },
          {
            type: "mistake",
            wrong: t`If $Z = A - B$, the percentage error in Z is the percentage error in A minus that in B.`,
            right: t`First add the absolute errors, $\Delta Z = \Delta A + \Delta B$, then divide by Z. When A and B are close, Z is small and its percentage error becomes very large.`,
            why: t`Percentage errors add only for products and quotients. For $A = 10.0 \pm 0.1$ and $B = 9.0 \pm 0.1$, $Z = 1.0 \pm 0.2$: a 20% error from two 1% readings.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each combination by its dimensions.",
              groups: ["Time", "Speed", "Dimensionless"],
              items: [
                { text: "RC", group: 0, hint: "The capacitor charging time constant." },
                { text: "L/R", group: 0, hint: "The time constant of an inductor circuit." },
                { text: "√(l/g)", group: 0, hint: "It sets the pendulum period." },
                { text: "E/B", group: 1, hint: "In F = qE = qvB, the ratio is a velocity." },
                { text: "1/√(μ₀ε₀)", group: 1, hint: "It equals the speed of light in vacuum." },
                { text: "Refractive index", group: 2, hint: "It is a ratio of two speeds." },
                { text: "Strain", group: 2, hint: "Change in length ÷ length." },
              ],
              explain: "Learn these pairings: RC, L/R and √(LC) are times; E/B and 1/√(μ₀ε₀) are speeds. Exams hide them inside options.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "When the shortcuts are safe",
            md: "The \"add p × percentage errors\" rule is for maximum error with small errors (a few percent). Constants like π and exact counts carry no error. In a dimension question, first spot terms that are **added** to known quantities or that sit inside **sin, exp or log**: those give the answer fastest.",
          },
          {
            type: "keypoints",
            items: [
              "Maximum relative error of a product of powers = sum of (power × relative error).",
              "For sums and differences add absolute errors; a small difference of close values has a large percentage error.",
              "Timing n oscillations divides the timing error by n.",
              "Terms added together share dimensions; arguments of sin, exp and log are dimensionless.",
              "To change base quantities, write the old bases in terms of the new ones and substitute.",
            ],
          },
        ],
        flashcards: [
          { front: "Dimensions of ε₀", back: "[M⁻¹ L⁻³ T⁴ A²]." },
          { front: "Dimensions of μ₀", back: "[M L T⁻² A⁻²]. And μ₀ε₀ = 1/c²." },
          { front: "Quantities with dimensions of time from circuits", back: "RC, L/R and √(LC)." },
          { front: "Planck length", back: "√(hG/c³). Planck time = √(hG/c⁵)." },
          { front: "Percentage error in g = 4π²L/T²", back: "ΔL/L + 2ΔT/T (as percentages)." },
          { front: "Dimensions of a in (P + a/V²)(V − b) = RT", back: "[M L⁵ T⁻²] per mole², and b has [L³] per mole." },
          { front: "Error in Z = A − B when A ≈ B", back: "ΔZ = ΔA + ΔB, so the percentage error in Z can be huge." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which pair of quantities has the same dimensions?",
            options: ["Impulse and force", "Torque and work", "Pressure and energy", "Power and energy"],
            answer: 1,
            explain: t`Torque and work are both $[\text{M L}^2\text{T}^{-2}]$. Impulse is force × time, pressure is energy per volume, power is energy per time.`,
          },
          {
            kind: "numeric",
            q: t`A quantity $Z = \dfrac{A^2 B}{\sqrt{C}}$. The percentage errors in A, B and C are 1%, 2% and 4%. What is the maximum percentage error in Z?`,
            answer: 6,
            unit: "%",
            explain: t`$2(1) + 1(2) + \tfrac{1}{2}(4) = 2 + 2 + 2 = 6\%$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "If the units of mass, length and time are each doubled, the new unit of energy is how many times the joule?",
            answer: 2,
            explain: t`Energy is $[\text{M L}^2\text{T}^{-2}]$: the new unit is $2 \times 2^2 \times 2^{-2} = 2$ J.`,
            difficulty: 2,
            hint: "Raise each scale factor to its power in [M L² T⁻²].",
          },
          {
            kind: "multi",
            q: "Which of these have the dimensions of time? (R resistance, L inductance, C capacitance, l length)",
            options: ["RC", "L/R", "R/L", "√(l/g)"],
            answers: [0, 1, 3],
            explain: "RC and L/R are circuit time constants, and √(l/g) sets a pendulum's period. R/L is the inverse of a time.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`A force is given by $F = a\sqrt{x} + bt^2$, where $x$ is distance and $t$ is time. The dimensions of $a/b$ are:`,
            options: [t`$[\text{L}^{-1/2}\text{T}^2]$`, t`$[\text{L}^{1/2}\text{T}^{-2}]$`, t`$[\text{M L}^{-1/2}\text{T}^{2}]$`, t`$[\text{L T}^{-2}]$`],
            answer: 0,
            explain: t`$[a] = [F]/[\text{L}^{1/2}] = [\text{M L}^{1/2}\text{T}^{-2}]$ and $[b] = [F]/[\text{T}^2] = [\text{M L T}^{-4}]$. So $[a/b] = [\text{L}^{-1/2}\text{T}^{2}]$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The side of a cube is measured as 2.00 cm with an error of 0.01 cm. What is the percentage error in its volume?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "%",
            explain: t`$\dfrac{\Delta a}{a} = \dfrac{0.01}{2.00} = 0.5\%$, so $\dfrac{\Delta V}{V} = 3 \times 0.5 = 1.5\%$.`,
          },
          {
            kind: "mcq",
            q: t`Which combination of $h$, $G$ and $c$ has the dimensions of time?`,
            options: [t`$\sqrt{hG/c^3}$`, t`$\sqrt{hG/c^5}$`, t`$\sqrt{hc/G}$`, t`$\sqrt{hc^5/G}$`],
            answer: 1,
            explain: t`$\sqrt{hG/c^3}$ is the Planck length. Dividing a length by $c$ gives a time: $\sqrt{hG/c^3}/c = \sqrt{hG/c^5}$. $\sqrt{hc/G}$ is the Planck mass.`,
            difficulty: 3,
            hint: "Start from the Planck length and think what turns a length into a time.",
          },
          {
            kind: "numeric",
            q: "Two lengths are measured as (25.0 ± 0.2) cm and (20.0 ± 0.2) cm. What is the percentage error in their difference?",
            answer: 8,
            unit: "%",
            explain: t`Difference $= 5.0$ cm, error $= 0.2 + 0.2 = 0.4$ cm. Percentage error $= 0.4/5.0 \times 100 = 8\%$, far bigger than either reading's error (under 1%).`,
            difficulty: 3,
            hint: "Find the absolute error of the difference first.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Motion in a Straight Line (NCERT) = Kinematics, part 1 (ISC)        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-motion-straight-line",
    title: "Motion in a Straight Line",
    icon: "🚆",
    description: "Position, displacement, speed and velocity, acceleration, motion graphs, the kinematic equations, free fall and relative velocity in one dimension.",
    lessons: [
      {
        slug: "c11-position-velocity",
        title: "Position, Displacement and Velocity",
        summary: "Frame of reference, path length versus displacement, average and instantaneous velocity and speed, and reading position–time graphs.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🚆",
            caption: "A passenger sits still in a train leaving Mysuru. To the person beside her she is at rest; to someone on the platform she is moving at 60 km/h. Motion depends on who is watching.",
          },
          {
            type: "text",
            md: t`To describe motion we first fix a **frame of reference**: an origin, a set of axes and a clock. Motion along a single line is called **rectilinear motion**. We treat the moving body as a **point object** when its size is small compared with the distance it covers.

On a straight line we take the $x$-axis along the path. The **position** of the body is its coordinate $x$: positive on one side of the origin, negative on the other.`,
          },
          {
            type: "text",
            md: t`**Path length** is the total length of the path actually covered. It is a scalar and is never negative.

**Displacement** is the change in position, $\Delta x = x_2 - x_1$. It has a sign: positive means it points along $+x$. If a body goes and comes back to where it started, its displacement is zero but its path length is not. The magnitude of displacement can equal the path length (one-way motion) but can never be larger.`,
          },
          {
            type: "formula",
            tex: t`\bar{v} = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1} \qquad \text{average speed} = \frac{\text{total path length}}{\text{total time}}`,
            caption: "Average velocity uses displacement and has a sign; average speed uses path length and is always positive.",
          },
          {
            type: "example",
            title: "Average speed and average velocity",
            problem: "A cyclist in Chandigarh rides 600 m east in 2 min, then turns and rides 200 m west in 1 min. Find the path length, displacement, average speed and average velocity.",
            steps: [
              "Path length = 600 + 200 = 800 m.",
              "Take east as +x. Displacement = +600 − 200 = +400 m, i.e. 400 m east.",
              "Total time = 3 min = 180 s. Average speed = 800 ÷ 180 ≈ 4.44 m/s.",
              "Average velocity = 400 ÷ 180 ≈ 2.22 m/s, directed east.",
            ],
            answer: "800 m; 400 m east; 4.44 m/s; 2.22 m/s east. Average speed is bigger because the cyclist turned back.",
          },
          {
            type: "text",
            md: t`Average velocity hides what happened in between. The **instantaneous velocity** is the velocity at one instant: the limit of the average velocity as the time interval shrinks to zero.

On a position–time ($x$–$t$) graph, average velocity is the slope of the chord joining two points, and instantaneous velocity is the **slope of the tangent** at a point. **Instantaneous speed** is the magnitude of instantaneous velocity. (For a finite interval, average speed and the magnitude of average velocity can differ; at an instant they are equal.)`,
          },
          {
            type: "formula",
            tex: t`v = \lim_{\Delta t \to 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt}`,
            caption: "Instantaneous velocity is the time derivative of position.",
          },
          {
            type: "example",
            title: "Velocity from a position formula",
            problem: t`A toy car moves along a straight track with $x = 5 + 12t - 2t^2$ (x in m, t in s). Find its velocity at $t = 4$ s, and its displacement, path length and average speed from $t = 0$ to $t = 4$ s.`,
            steps: [
              t`$v = \dfrac{dx}{dt} = 12 - 4t$. At $t = 4$ s, $v = 12 - 16 = -4$ m/s (moving towards $-x$).`,
              t`The car turns back when $v = 0$: $t = 3$ s. Positions: $x(0) = 5$ m, $x(3) = 5 + 36 - 18 = 23$ m, $x(4) = 5 + 48 - 32 = 21$ m.`,
              t`Displacement $= x(4) - x(0) = 16$ m, so average velocity $= 16/4 = 4$ m/s.`,
              t`Path length $= (23 - 5) + (23 - 21) = 18 + 2 = 20$ m, so average speed $= 20/4 = 5$ m/s.`,
            ],
            answer: t`$v(4) = -4$ m/s; displacement 16 m; path length 20 m; average speed 5 m/s.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Ravi walks 50 m east along a corridor, then 70 m west. What is his path length (in m)?",
                answer: 120,
                unit: "m",
                explain: "Path length adds the distances: 50 + 70 = 120 m.",
              },
              {
                kind: "mcq",
                q: "For the same walk (50 m east, then 70 m west), his displacement is:",
                options: ["120 m east", "20 m east", "20 m west", "zero"],
                answer: 2,
                explain: "Taking east as +x: +50 − 70 = −20 m, i.e. 20 m west of the starting point.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Shape of x–t graph", "What the motion is"],
            rows: [
              ["Horizontal line", "at rest (velocity zero)"],
              ["Straight line sloping up", "uniform velocity in +x direction"],
              ["Straight line sloping down", "uniform velocity in −x direction"],
              ["Curve getting steeper", "speeding up (accelerating)"],
              ["Curve getting flatter", "slowing down"],
            ],
          },
          {
            type: "mistake",
            wrong: "Average speed is just the magnitude of average velocity.",
            right: "Average speed = path length ÷ time; average velocity = displacement ÷ time. They are equal only if the body never turns back.",
            why: "At a single instant, speed does equal the magnitude of velocity, so it is tempting to extend that to averages. But over an interval with a reversal, the path length is longer than the displacement, so average speed is larger.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each position–time graph to the motion.",
              pairs: [
                ["Line parallel to the time axis", "Body at rest"],
                ["Straight line with positive slope", "Uniform motion along +x"],
                ["Curve whose slope keeps increasing", "Speeding up along +x"],
                ["Curve that rises, flattens, then falls", "Moves forward, stops, comes back"],
              ],
              explain: "The slope of an x–t graph is the velocity. Zero slope means rest; a growing slope means growing velocity; a slope that changes sign means the body turned around.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Always state the positive direction before writing a displacement or velocity. In graph questions, examiners check that you use the **slope** of the x–t graph for velocity. An x–t graph can never be a vertical line (infinite speed) and can never show two positions at one time.",
          },
          {
            type: "keypoints",
            items: [
              "Displacement Δx = x₂ − x₁ has a sign; path length is the total distance and is never less than |Δx|.",
              "Average velocity = Δx/Δt; average speed = path length/time.",
              "Instantaneous velocity v = dx/dt = slope of the tangent to the x–t graph.",
              "Instantaneous speed is the magnitude of instantaneous velocity.",
            ],
          },
        ],
        flashcards: [
          { front: "Frame of reference", back: "An origin, a set of axes and a clock, used to give the position of a body at each time." },
          { front: "Displacement vs path length", back: "Displacement is change in position (with direction). Path length is the total distance covered." },
          { front: "Average velocity", back: "Displacement ÷ time interval. It can be zero even if the body moved." },
          { front: "Average speed", back: "Total path length ÷ total time. Always ≥ magnitude of average velocity." },
          { front: "Instantaneous velocity", back: "v = dx/dt, the slope of the tangent to the x–t graph at that instant." },
          { front: "x–t graph is a horizontal line", back: "The body is at rest." },
          { front: "Why can't an x–t graph be vertical?", back: "That would mean a change of position in zero time: infinite speed." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "An athlete runs one full lap of a 400 m track in 80 s. Her average velocity for the lap is:",
            options: ["5 m/s", "0 m/s", "2.5 m/s", "10 m/s"],
            answer: 1,
            explain: "She ends where she started, so displacement is zero and average velocity is zero. Her average speed is 400/80 = 5 m/s.",
          },
          {
            kind: "numeric",
            q: t`A particle's position is $x = 3t^2 + 2t + 1$ (x in m, t in s). What is its velocity at $t = 2$ s?`,
            answer: 14,
            unit: "m/s",
            explain: t`$v = dx/dt = 6t + 2 = 6(2) + 2 = 14$ m/s.`,
          },
          {
            kind: "truefalse",
            q: "The magnitude of displacement can be greater than the path length.",
            answer: false,
            explain: "The straight line between two points is the shortest path, so |displacement| ≤ path length.",
          },
          {
            kind: "fill",
            q: "The slope of the tangent to a position–time graph gives the instantaneous ___.",
            answer: ["velocity"],
            explain: "v = dx/dt, which is the slope of the x–t curve.",
          },
          {
            kind: "numeric",
            q: "A car goes 30 km east in 30 min, then 10 km west in 10 min. What is its average velocity in km/h (eastward positive)?",
            answer: 30,
            unit: "km/h",
            explain: "Displacement = 30 − 10 = 20 km east; time = 40 min = 2/3 h. Average velocity = 20 ÷ (2/3) = 30 km/h east. (Average speed = 40 ÷ (2/3) = 60 km/h.)",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The x–t graph of a body is a straight line sloping downward. The body is:",
            options: ["slowing down", "moving with uniform velocity in the −x direction", "at rest", "speeding up"],
            answer: 1,
            explain: "A straight line has constant slope, so the velocity is constant. A negative slope means the velocity points along −x.",
          },
          {
            kind: "multi",
            q: "Which of these x–t graphs are impossible for a real body?",
            options: ["A vertical straight line", "A curve showing two different positions at the same time", "A horizontal straight line", "A curve whose slope keeps decreasing"],
            answers: [0, 1],
            explain: "A vertical line means infinite speed; two positions at one time means the body is in two places at once. The other two are rest and slowing down.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`For $x = 5 + 12t - 2t^2$ (SI units), at what time (in s) does the body momentarily stop?`,
            answer: 3,
            unit: "s",
            explain: t`$v = 12 - 4t = 0$ gives $t = 3$ s. After that the velocity becomes negative and the body moves back.`,
          },
        ],
      },
      /* ---------------- Acceleration and kinematic equations ---------------- */
      {
        slug: "c11-acceleration-kinematic-equations",
        title: "Acceleration, Kinematic Equations and Relative Velocity",
        summary: "Acceleration and velocity–time graphs, the three equations of uniformly accelerated motion by graph and by calculus, free fall, stopping distance and relative velocity in one dimension.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`**Acceleration** is the rate of change of velocity. Average acceleration $\bar{a} = \dfrac{v_2 - v_1}{t_2 - t_1}$; instantaneous acceleration is its limit as $\Delta t \to 0$. Its SI unit is $\text{m s}^{-2}$.

Acceleration has a sign too. A body **speeds up** when $v$ and $a$ have the same sign, and **slows down** when they have opposite signs. So a negative acceleration does not always mean slowing down.`,
          },
          {
            type: "formula",
            tex: t`a = \frac{dv}{dt} = \frac{d^2x}{dt^2}`,
            caption: "On a velocity–time graph, acceleration is the slope, and the area under the graph is the displacement.",
          },
          {
            type: "table",
            headers: ["v–t graph", "Acceleration", "Motion"],
            rows: [
              ["Horizontal line above the t-axis", "zero", "uniform velocity along +x"],
              ["Straight line rising, v > 0", "constant, positive", "speeding up along +x"],
              ["Straight line falling, v > 0", "constant, negative", "slowing down along +x"],
              ["Straight line falling, v < 0", "constant, negative", "speeding up along −x"],
              ["Line crossing the t-axis", "nonzero", "body stops and reverses at the crossing"],
            ],
          },
          {
            type: "formula",
            tex: t`v = u + at \qquad s = ut + \tfrac{1}{2}at^2 \qquad v^2 = u^2 + 2as`,
            caption: "The kinematic equations, valid only when acceleration a is constant. Here u is the velocity at t = 0 and s is the displacement in time t.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the graphical derivation of s = ut + ½at² in order.",
              items: [
                "Draw the v–t graph: a straight line from v = u at t = 0 to v = u + at at time t.",
                "Displacement = area under the graph between 0 and t.",
                "Split the area into a rectangle of height u and a triangle of height (v − u).",
                "Rectangle = ut and triangle = ½ t (v − u) = ½ t (at).",
                "Add the two areas: s = ut + ½at².",
              ],
              explain: "The area under a v–t graph is the displacement. For constant acceleration the graph is a straight line, so the area is a rectangle plus a triangle.",
            },
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**By calculus.** Start from $\dfrac{dv}{dt} = a$ with $a$ constant: $\displaystyle\int_u^v dv = \int_0^t a\,dt$ gives $v = u + at$.`,
              t`Then $\dfrac{dx}{dt} = u + at$: $\displaystyle\int_{x_0}^{x} dx = \int_0^t (u + at)\,dt$ gives $x - x_0 = ut + \tfrac12 at^2$.`,
              t`Write $a = \dfrac{dv}{dt} = \dfrac{dv}{dx}\dfrac{dx}{dt} = v\dfrac{dv}{dx}$: $\displaystyle\int_u^v v\,dv = \int_{x_0}^{x} a\,dx$ gives $v^2 = u^2 + 2a(x - x_0)$.`,
            ],
          },
          {
            type: "example",
            title: "A ball thrown straight up",
            problem: t`A ball is thrown vertically upward at 20 m/s from the ground. Take $g = 10\ \text{m s}^{-2}$ and ignore air resistance. Find (a) the maximum height, (b) the time to return, (c) its velocity and height at $t = 3$ s.`,
            steps: [
              t`Take up as positive: $u = +20$ m/s, $a = -g = -10\ \text{m s}^{-2}$.`,
              t`(a) At the top $v = 0$: $0 = 20^2 - 2(10)h$, so $h = 20$ m.`,
              t`(b) It returns when $s = 0$: $0 = 20t - 5t^2$, so $t = 4$ s (rise 2 s, fall 2 s).`,
              t`(c) $v = 20 - 10(3) = -10$ m/s, i.e. 10 m/s downward. Height $s = 20(3) - 5(9) = 15$ m.`,
            ],
            answer: "(a) 20 m; (b) 4 s; (c) 10 m/s downward, 15 m above the ground.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A stone is thrown straight up at 15 m/s. Taking g = 10 m/s², how high does it rise (in m)?",
                answer: 11.25,
                tolerance: 0.01,
                unit: "m",
                explain: t`$h = \dfrac{u^2}{2g} = \dfrac{225}{20} = 11.25$ m.`,
              },
              {
                kind: "mcq",
                q: "At the highest point of its flight, a ball thrown straight up has:",
                options: ["zero velocity and zero acceleration", "zero velocity and acceleration g downward", "maximum velocity", "acceleration g upward"],
                answer: 1,
                explain: "Velocity is zero for an instant, but gravity still acts, so the acceleration is g downward. That is why it starts falling back.",
              },
            ],
          },
          {
            type: "example",
            title: "Reaction time and stopping distance",
            problem: "A driver on the Mumbai–Pune expressway moving at 72 km/h sees a stalled truck. Her reaction time is 0.5 s, then the brakes give a deceleration of 5 m/s². How far does the car travel before stopping?",
            steps: [
              "72 km/h = 20 m/s.",
              "During the reaction time the car does not slow: 20 × 0.5 = 10 m.",
              t`Braking distance from $v^2 = u^2 + 2as$: $0 = 400 - 2(5)s$, so $s = 40$ m.`,
              "Total = 10 + 40 = 50 m.",
            ],
            answer: t`50 m. Note that braking distance $u^2/2a$ grows as the **square** of speed: at 144 km/h it would be 160 m.`,
          },
          {
            type: "text",
            md: t`**Relative velocity in one dimension.** If bodies A and B move along the same line with velocities $v_A$ and $v_B$, the velocity of B as seen from A is $v_{BA} = v_B - v_A$. Bodies moving the same way seem slow to each other; bodies moving opposite ways seem to rush past. If $v_A = v_B$, the gap between them stays fixed.`,
          },
          {
            type: "example",
            title: "Trains passing",
            problem: "Train A runs north at 54 km/h. Train B, 200 m long, runs on the next track at 90 km/h. How long does B take to pass a passenger sitting in A if B runs (a) south, (b) north?",
            steps: [
              "54 km/h = 15 m/s and 90 km/h = 25 m/s. Take north as positive.",
              t`(a) $v_{BA} = (-25) - (+15) = -40$ m/s. Time $= 200/40 = 5$ s.`,
              t`(b) $v_{BA} = 25 - 15 = 10$ m/s. Time $= 200/10 = 20$ s.`,
            ],
            answer: "(a) 5 s; (b) 20 s.",
          },
          {
            type: "mistake",
            wrong: "A negative acceleration always means the body is slowing down.",
            right: "A body slows down only when acceleration and velocity have opposite signs. A body moving in −x with negative acceleration is speeding up.",
            why: "In daily speech \"deceleration\" and \"negative acceleration\" mean the same. In physics the sign only tells the direction of a relative to the chosen +x axis, so you must compare it with the sign of v.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Derivations of the three equations (by the graphical method and, for full marks in some schools, by calculus) are standard 3–5 mark questions; draw and label the v–t graph. Fix the sign convention in the first line of every free-fall numerical. Relative velocity is in the ISC syllabus and is asked in JEE Main, NEET and other entrance exams; the current CBSE syllabus does not list it by name, so check with your teacher whether your board will ask it.",
          },
          {
            type: "keypoints",
            items: [
              "a = dv/dt; on a v–t graph, slope = acceleration and area = displacement.",
              "v = u + at, s = ut + ½at², v² = u² + 2as hold only for constant acceleration.",
              "In free fall a = g downward at every point, including the top.",
              "Stopping distance = reaction distance + u²/2a; braking distance grows as speed squared.",
              "Relative velocity in 1D: v_BA = v_B − v_A.",
            ],
          },
        ],
        flashcards: [
          { front: "Acceleration", back: "Rate of change of velocity, a = dv/dt. Unit m s⁻²." },
          { front: "Area under a v–t graph", back: "Displacement in that time." },
          { front: "Slope of a v–t graph", back: "Acceleration." },
          { front: "Three equations of motion", back: "v = u + at; s = ut + ½at²; v² = u² + 2as (constant a only)." },
          { front: "When does a body speed up?", back: "When its velocity and acceleration have the same sign (same direction)." },
          { front: "Maximum height for a ball thrown up at u", back: "H = u²/2g, reached in time u/g." },
          { front: "Braking distance", back: "u²/2a. Doubling speed makes it four times as long." },
          { front: "Relative velocity of B with respect to A", back: "v_BA = v_B − v_A." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The slope of a velocity–time graph gives:",
            options: ["displacement", "acceleration", "speed", "jerk"],
            answer: 1,
            explain: "Slope = Δv/Δt = acceleration. The area under it gives displacement.",
          },
          {
            kind: "numeric",
            q: "A scooter starts from rest and accelerates uniformly at 2 m/s² for 10 s. How far does it travel (in m)?",
            answer: 100,
            unit: "m",
            explain: t`$s = \tfrac12 at^2 = \tfrac12 (2)(100) = 100$ m.`,
          },
          {
            kind: "numeric",
            q: "A stone dropped from a cliff reaches the ground in 3 s. Taking g = 9.8 m/s², find the height of the cliff (in m).",
            answer: 44.1,
            tolerance: 0.05,
            unit: "m",
            explain: t`$h = \tfrac12 g t^2 = \tfrac12 (9.8)(9) = 44.1$ m.`,
          },
          {
            kind: "truefalse",
            q: "A body can have zero velocity and non-zero acceleration at the same instant.",
            answer: true,
            explain: "A ball at the top of its flight has v = 0 but a = g downward.",
          },
          {
            kind: "mcq",
            q: "A train moving at 20 m/s stops uniformly in 400 m. Its acceleration is:",
            options: [t`$-0.5\ \text{m s}^{-2}$`, t`$-1\ \text{m s}^{-2}$`, t`$-0.05\ \text{m s}^{-2}$`, t`$-2\ \text{m s}^{-2}$`],
            answer: 0,
            explain: t`$0 = 20^2 + 2a(400)$ gives $a = -400/800 = -0.5\ \text{m s}^{-2}$.`,
          },
          {
            kind: "numeric",
            q: "A bike's velocity rises uniformly from 0 to 10 m/s in 4 s and then stays at 10 m/s for 6 s. What is the total displacement (in m)?",
            answer: 80,
            unit: "m",
            explain: "Area under the v–t graph: triangle ½ × 4 × 10 = 20 m, plus rectangle 6 × 10 = 60 m. Total 80 m.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "In which cases is the body speeding up?",
            options: ["v > 0, a > 0", "v < 0, a < 0", "v > 0, a < 0", "v < 0, a > 0"],
            answers: [0, 1],
            explain: "Speed increases when v and a point the same way, whatever the sign convention.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A car at 60 km/h is 300 m behind a bus at 45 km/h on the same road, both moving the same way. How long (in s) does the car take to catch the bus?",
            answer: 72,
            unit: "s",
            explain: "Relative velocity = 60 − 45 = 15 km/h = 15 × 5/18 ≈ 4.167 m/s. Time = 300 ÷ 4.167 = 72 s.",
            difficulty: 2,
            hint: "Work in the bus's frame: the car closes the 300 m gap at the relative speed.",
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-straight-line-exam-edge",
        title: "Exam edge: Motion in a Straight Line",
        summary: "Graphs, variable acceleration, distance in the nth second, free-fall meeting problems and accelerate–decelerate motion, from KCET to JEE Advanced level.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Kinematics is the base of all of mechanics, so JEE Main, NEET, KCET and COMEDK each set questions on it every year, and JEE Advanced hides it inside harder mechanics problems. Exams love: **reading graphs** (x–t, v–t, a–t), **variable acceleration** given as a function of t, x or v, **free fall** and two-body meeting problems, **average speed** traps and **distance vs displacement** when the body reverses.",
          },
          {
            type: "table",
            headers: ["Result", "Formula", "Safe when"],
            rows: [
              [t`Displacement in the $n$th second`, t`$s_n = u + \tfrac{a}{2}(2n - 1)$`, "a is constant (it has units of metres, the 1 s is hidden)"],
              ["Distances in equal successive seconds from rest", "1 : 3 : 5 : 7 …", "starting from rest with constant a"],
              ["Average speed, equal distances at v₁ and v₂", t`$\dfrac{2v_1v_2}{v_1 + v_2}$`, "the two parts cover equal distances"],
              ["Average speed, equal times at v₁ and v₂", t`$\dfrac{v_1 + v_2}{2}$`, "the two parts last equal times"],
              ["Accelerate at α, then decelerate at β, total time t", t`$v_{\max} = \dfrac{\alpha\beta t}{\alpha + \beta}$, $s = \dfrac{\alpha\beta t^2}{2(\alpha + \beta)}$`, "starts and ends at rest"],
            ],
          },
          {
            type: "formula",
            tex: t`a = \frac{dv}{dt} = v\frac{dv}{dx} \qquad v = \int a\,dt \qquad x = \int v\,dt`,
            caption: "When a depends on time, integrate in t. When a (or v) is given as a function of x, use a = v dv/dx. The three equations of motion are NOT valid here.",
          },
          {
            type: "example",
            title: "KCET level: average speed",
            problem: "A bus covers the first half of the distance from Hubballi to Dharwad at 30 km/h and the second half at 60 km/h. Find its average speed.",
            steps: [
              t`Let each half be $d$. Time $= \dfrac{d}{30} + \dfrac{d}{60} = \dfrac{3d}{60} = \dfrac{d}{20}$ h.`,
              t`Average speed $= \dfrac{2d}{d/20} = 40$ km/h.`,
              t`Check with the shortcut: $\dfrac{2(30)(60)}{30 + 60} = \dfrac{3600}{90} = 40$ km/h.`,
            ],
            answer: "40 km/h (not 45 km/h).",
          },
          {
            type: "example",
            title: "NEET level: the nth second",
            problem: "A body starts with velocity 10 m/s and has a constant acceleration of 2 m/s² in the same direction. How far does it travel in the 5th second?",
            steps: [
              t`$s_n = u + \tfrac{a}{2}(2n - 1) = 10 + 1 \times (10 - 1) = 19$ m.`,
              t`Check: $s(5) = 50 + 25 = 75$ m and $s(4) = 40 + 16 = 56$ m; $75 - 56 = 19$ m. ✓`,
            ],
            answer: "19 m.",
          },
          {
            type: "mistake",
            wrong: "Average speed is always the average of the two speeds: (30 + 60)/2 = 45 km/h.",
            right: "That holds only for equal **times**. For equal **distances** use the harmonic mean, 2v₁v₂/(v₁ + v₂), which is always smaller.",
            why: "The body spends more time at the lower speed when the distances are equal, so the lower speed pulls the average down. Always go back to total distance ÷ total time if unsure.",
          },
          {
            type: "example",
            title: "JEE Main level: velocity given as a function of position",
            problem: t`A particle moves along $x$ with $v = 4\sqrt{x}$ (SI units), starting from $x = 0$. Find its acceleration and its position at $t = 2$ s.`,
            steps: [
              t`$a = v\dfrac{dv}{dx} = 4\sqrt{x} \cdot \dfrac{4}{2\sqrt{x}} = 8\ \text{m s}^{-2}$, a constant.`,
              t`At $x = 0$, $v = 0$, so it starts from rest with constant acceleration 8 m/s².`,
              t`$x = \tfrac12 (8)(2)^2 = 16$ m. Check: $v = at = 16$ m/s and $4\sqrt{16} = 16$ m/s. ✓`,
            ],
            answer: t`$a = 8\ \text{m s}^{-2}$; $x = 16$ m at $t = 2$ s.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A body starts from rest with constant acceleration and covers 27 m in the 5th second. What is its acceleration (in m/s²)?",
                answer: 6,
                unit: "m/s²",
                explain: t`$s_5 = 0 + \tfrac{a}{2}(2 \cdot 5 - 1) = 4.5a = 27$, so $a = 6\ \text{m s}^{-2}$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: two balls meet",
            problem: "A ball is dropped from the top of a 40 m tower. At the same instant another ball is thrown straight up from the foot of the tower at 20 m/s. When and where do they meet? (g = 10 m/s²)",
            steps: [
              "Work in the frame of the falling ball. Both balls have the same acceleration g, so their relative acceleration is zero.",
              "The relative velocity is 20 m/s (towards each other) and the gap is 40 m. Time = 40/20 = 2 s.",
              t`The dropped ball has fallen $\tfrac12(10)(2)^2 = 20$ m, so they meet 20 m above the ground.`,
              t`Check with the second ball: $20(2) - \tfrac12(10)(4) = 40 - 20 = 20$ m. ✓`,
            ],
            answer: "After 2 s, at a height of 20 m.",
          },
          {
            type: "example",
            title: "JEE Advanced level: accelerate, then brake",
            problem: "A metro train starts from rest, accelerates uniformly at 2 m/s², then immediately brakes uniformly at 3 m/s² until it stops. The whole trip takes 10 s. Find the maximum speed and the distance between the stations.",
            steps: [
              t`Let it accelerate for $t_1$ and brake for $t_2$. Top speed $v = 2t_1 = 3t_2$, and $t_1 + t_2 = 10$.`,
              t`$t_1 = 3t_2/2$, so $\tfrac{5}{2}t_2 = 10$, $t_2 = 4$ s, $t_1 = 6$ s, and $v = 12$ m/s.`,
              t`Shortcut check: $v = \dfrac{\alpha\beta t}{\alpha + \beta} = \dfrac{2 \cdot 3 \cdot 10}{5} = 12$ m/s. ✓`,
              t`Distance = area of the v–t triangle $= \tfrac12 (10)(12) = 60$ m.`,
            ],
            answer: "Maximum speed 12 m/s; distance 60 m.",
          },
          {
            type: "mistake",
            wrong: t`For $x = t^3 - 6t^2 + 9t$, the distance in the first 4 s is just $x(4) - x(0)$.`,
            right: t`Find when $v = 0$ first. Here $v = 3(t - 1)(t - 3)$, so the body turns at $t = 1$ s and $t = 3$ s. Add the distances of each leg.`,
            why: t`$x(4) - x(0)$ is the displacement (4 m). The distance is $|4 - 0| + |0 - 4| + |4 - 0| = 12$ m. Whenever the velocity changes sign, displacement and distance differ.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A balloon rises at 5 m/s. A stone is let go from it. Just after release, the stone:",
              emoji: "🎈",
              options: ["starts falling from rest", "moves up at 5 m/s, slowing down", "falls at 5 m/s", "stays still for a moment"],
              answer: 1,
              trap: 0,
              explain: "The stone shares the balloon's velocity, so it starts with 5 m/s **upward** and only then slows under gravity. Use u = +5 m/s, a = −g in the equations.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Graph shortcuts",
            md: "x–t slope → v. v–t slope → a, v–t area → displacement (signed); add |areas| for distance. a–t area → change in velocity. A body starting from rest that falls through h reaches speed √(2gh) whatever path the formula takes; time to fall is √(2h/g). Thrown up at u, it returns with the same speed u after 2u/g (no air resistance).",
          },
          {
            type: "keypoints",
            items: [
              "Equations of motion need constant a; otherwise integrate, using a = v dv/dx when a depends on x.",
              "s_n = u + a(2n − 1)/2; from rest, successive-second distances are in the ratio 1 : 3 : 5 …",
              "Equal distances → harmonic mean speed; equal times → arithmetic mean.",
              "Two bodies under the same gravity have zero relative acceleration: solve meeting problems with relative velocity.",
              "When v changes sign, distance ≠ |displacement|: split the motion at the turning points.",
            ],
          },
        ],
        flashcards: [
          { front: "Displacement in the nth second", back: "s_n = u + (a/2)(2n − 1)." },
          { front: "Ratio of distances in 1st, 2nd, 3rd second from rest", back: "1 : 3 : 5 (Galileo's law of odd numbers)." },
          { front: "Average speed for equal distances at v₁, v₂", back: "2v₁v₂/(v₁ + v₂)." },
          { front: "a when v is given as a function of x", back: "a = v dv/dx." },
          { front: "Accelerate α then decelerate β, total time t, from rest to rest", back: "v_max = αβt/(α + β); distance = αβt²/[2(α + β)]." },
          { front: "Relative acceleration of two freely falling bodies", back: "Zero, so their relative velocity is constant." },
          { front: "Area under an a–t graph", back: "Change in velocity." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A car covers the first half of a distance at 40 km/h and the second half at 60 km/h. Its average speed is:",
            options: ["50 km/h", "48 km/h", "45 km/h", "52 km/h"],
            answer: 1,
            explain: t`Equal distances: $\dfrac{2(40)(60)}{100} = 48$ km/h. 50 km/h would be right only for equal times.`,
          },
          {
            kind: "numeric",
            q: "A stone is dropped from a height of 80 m. How far does it fall in the last second of its fall? (g = 10 m/s²)",
            answer: 35,
            unit: "m",
            explain: t`Total time: $80 = 5t^2$ gives $t = 4$ s. In the first 3 s it falls $5 \times 9 = 45$ m, so in the last second it falls $80 - 45 = 35$ m. (Or $s_4 = 5(2 \cdot 4 - 1) = 35$ m.)`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`A particle moves so that $v^2 = 25 - 4x$ (SI units). Its acceleration is:`,
            options: [t`$-4\ \text{m s}^{-2}$`, t`$-2\ \text{m s}^{-2}$`, t`$+2\ \text{m s}^{-2}$`, "it varies with x"],
            answer: 1,
            explain: t`Compare with $v^2 = u^2 + 2ax$: $2a = -4$, so $a = -2\ \text{m s}^{-2}$. Or $a = \tfrac12 \dfrac{d(v^2)}{dx} = -2$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "A ball is thrown vertically up and air resistance is negligible. Which statements are true?",
            options: ["Its acceleration is g downward throughout", "Its velocity is zero at the top", "Time of rise equals time of fall to the launch point", "It returns with a smaller speed than it was thrown"],
            answers: [0, 1, 2],
            explain: "With no air resistance, motion is symmetric: rise time = fall time and it returns with the same speed. Acceleration is g downward all the time.",
          },
          {
            kind: "numeric",
            q: t`A particle moves with $x = t^3 - 6t^2 + 9t$ (x in m, t in s). Find the distance it travels from $t = 0$ to $t = 4$ s.`,
            answer: 12,
            unit: "m",
            explain: t`$v = 3(t-1)(t-3)$, zero at 1 s and 3 s. $x(0) = 0$, $x(1) = 4$, $x(3) = 0$, $x(4) = 4$. Distance $= 4 + 4 + 4 = 12$ m (displacement only 4 m).`,
            difficulty: 3,
            hint: "Find the times when v = 0 and add the distance of each leg.",
          },
          {
            kind: "numeric",
            q: "A car moving at 36 km/h stops in 20 m with the brakes fully on. With the same deceleration, in what distance (in m) will it stop from 72 km/h?",
            answer: 80,
            unit: "m",
            explain: t`Braking distance $= u^2/2a \propto u^2$. Doubling the speed gives $4 \times 20 = 80$ m.`,
          },
          {
            kind: "mcq",
            q: t`A boat's engine is cut off when it moves at $v_0$; water then gives it an acceleration $a = -kv$. The total distance it moves after the engine stops is:`,
            options: [t`$v_0/k$`, t`$v_0^2/2k$`, t`$v_0 k$`, "infinite, since it never stops"],
            answer: 0,
            explain: t`$a = v\dfrac{dv}{dx} = -kv$ gives $dv = -k\,dx$, so $v = v_0 - kx$. It stops when $x = v_0/k$. (Velocity falls as $v_0 e^{-kt}$, so it needs infinite time, but the distance is finite.)`,
            difficulty: 3,
            hint: "Use a = v dv/dx and cancel v.",
          },
          {
            kind: "numeric",
            q: "A body starts from rest and accelerates uniformly. The ratio of the distance covered in the 3rd second to the distance covered in the first 3 seconds is p/9. Find p.",
            answer: 5,
            explain: t`From rest: $s_3 = \tfrac{a}{2}(5)$ and $s(3) = \tfrac{a}{2}(9)$. Ratio $= 5/9$, so $p = 5$.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Motion in a Plane (NCERT) = Kinematics, part 2 (ISC)                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-motion-in-a-plane",
    title: "Motion in a Plane",
    icon: "🎯",
    description: "Scalars and vectors, vector addition and resolution, motion with constant acceleration in a plane, projectile motion, relative velocity in two dimensions and uniform circular motion.",
    lessons: [
      {
        slug: "c11-scalars-vectors",
        title: "Scalars, Vectors and Vector Algebra",
        summary: "Scalars and vectors, equality and multiplication by a number, triangle and parallelogram laws, subtraction, unit vectors, resolution into components and analytical addition.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧭",
            caption: "\"Walk 300 m\" is not enough to reach a friend's house in a new colony. You also need to know: which way? That extra piece of information is what makes a vector.",
          },
          {
            type: "text",
            md: t`A **scalar** has only magnitude: mass, time, temperature, speed, work, energy. Scalars add by ordinary arithmetic.

A **vector** has magnitude and direction **and** adds by the triangle (or parallelogram) law: displacement, velocity, acceleration, force, momentum. Electric current has a direction along a wire, but currents meeting at a junction add as plain numbers, so current is a scalar.

We write a vector in bold or with an arrow, $\vec{A}$, and its magnitude as $|\vec{A}|$ or $A$.`,
          },
          {
            type: "text",
            md: t`The **position vector** $\vec{r}$ of a point joins the origin to it. The **displacement vector** joins the initial position to the final one, whatever path was taken.

Two vectors are **equal** if they have the same magnitude and the same direction; they can sit anywhere in space. Multiplying $\vec{A}$ by a real number $\lambda$ gives a vector of magnitude $|\lambda| A$, in the same direction if $\lambda > 0$ and opposite if $\lambda < 0$. The **null (zero) vector** $\vec{0}$ has zero magnitude and no fixed direction; $\vec{A} + (-\vec{A}) = \vec{0}$.`,
          },
          {
            type: "formula",
            tex: t`R = \sqrt{A^2 + B^2 + 2AB\cos\theta} \qquad \tan\alpha = \frac{B\sin\theta}{A + B\cos\theta}`,
            caption: "Parallelogram (or triangle) law: θ is the angle between A and B placed tail to tail; α is the angle the resultant R makes with A.",
          },
          {
            type: "text",
            md: t`Vector addition is **commutative**, $\vec{A} + \vec{B} = \vec{B} + \vec{A}$, and **associative**, $(\vec{A} + \vec{B}) + \vec{C} = \vec{A} + (\vec{B} + \vec{C})$. **Subtraction** is addition of the negative: $\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$, so its magnitude is $\sqrt{A^2 + B^2 - 2AB\cos\theta}$.

The resultant of two vectors lies between $|A - B|$ (when $\theta = 180°$) and $A + B$ (when $\theta = 0°$). At $\theta = 90°$, $R = \sqrt{A^2 + B^2}$.`,
          },
          {
            type: "example",
            title: "Resultant of two forces",
            problem: "Two forces of 3 N and 4 N act on a ring with an angle of 60° between them. Find the magnitude and direction of the resultant.",
            steps: [
              t`$R^2 = 3^2 + 4^2 + 2(3)(4)\cos 60° = 9 + 16 + 12 = 37$, so $R = \sqrt{37} \approx 6.08$ N.`,
              t`$\tan\alpha = \dfrac{4\sin 60°}{3 + 4\cos 60°} = \dfrac{3.464}{5} = 0.693$.`,
              t`$\alpha \approx 34.7°$ from the 3 N force.`,
            ],
            answer: "About 6.08 N at 34.7° to the 3 N force.",
          },
          {
            type: "text",
            md: t`**Unit vectors** have magnitude 1 and only show direction. Along the axes we use $\hat{i}$, $\hat{j}$, $\hat{k}$. For any vector, $\hat{A} = \vec{A}/A$.

**Resolution** means splitting a vector into components along chosen directions. In a plane, if $\vec{A}$ makes angle $\theta$ with the $x$-axis:
$\vec{A} = A_x\hat{i} + A_y\hat{j}$, with $A_x = A\cos\theta$, $A_y = A\sin\theta$, $A = \sqrt{A_x^2 + A_y^2}$ and $\tan\theta = A_y/A_x$. In 3D, $A = \sqrt{A_x^2 + A_y^2 + A_z^2}$.

To add vectors **analytically**, add their components: $\vec{R} = (A_x + B_x)\hat{i} + (A_y + B_y)\hat{j}$.`,
          },
          {
            type: "example",
            title: "Adding by components",
            problem: "A drone flies 10 m at 30° north of east, then 4 m due west. Find its net displacement.",
            steps: [
              t`Take east as $\hat{i}$ and north as $\hat{j}$. First leg: $10\cos 30° = 8.66$ m east, $10\sin 30° = 5.00$ m north.`,
              t`Second leg: $-4\hat{i}$.`,
              t`$\vec{R} = (8.66 - 4)\hat{i} + 5.00\hat{j} = 4.66\hat{i} + 5.00\hat{j}$ m.`,
              t`$R = \sqrt{4.66^2 + 5.00^2} = \sqrt{46.7} \approx 6.83$ m; $\tan\theta = 5.00/4.66 = 1.073$, $\theta \approx 47°$ north of east.`,
            ],
            answer: "About 6.83 m at 47° north of east.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A rope pulls a cart with a force of 20 N at 60° above the horizontal. What is the horizontal component of the force (in N)?",
                answer: 10,
                unit: "N",
                explain: t`$F_x = 20\cos 60° = 20 \times 0.5 = 10$ N.`,
              },
              {
                kind: "mcq",
                q: "Two forces of 3 N and 4 N act on a body. Which of these can NOT be their resultant?",
                options: ["1 N", "5 N", "7 N", "8 N"],
                answer: 3,
                explain: "The resultant lies between 4 − 3 = 1 N and 4 + 3 = 7 N. 8 N is impossible.",
              },
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: scalar and vector products",
            md: t`The CBSE syllabus lists the scalar and vector products in this unit; NCERT develops them in later chapters (work and rotation), and ISC teaches them here.

**Scalar (dot) product:** $\vec{A}\cdot\vec{B} = AB\cos\theta = A_xB_x + A_yB_y + A_zB_z$; $\hat{i}\cdot\hat{i} = 1$, $\hat{i}\cdot\hat{j} = 0$. Example: work $W = \vec{F}\cdot\vec{s}$.

**Vector (cross) product:** $\vec{A}\times\vec{B} = AB\sin\theta\,\hat{n}$, with $\hat{n}$ given by the right-hand rule; $\hat{i}\times\hat{j} = \hat{k}$ and $\vec{B}\times\vec{A} = -\vec{A}\times\vec{B}$. Its magnitude is the area of the parallelogram formed by the two vectors. Example: torque $\vec{\tau} = \vec{r}\times\vec{F}$.`,
          },
          {
            type: "mistake",
            wrong: t`The magnitude of $\vec{A} + \vec{B}$ is always $A + B$, and of $\vec{A} - \vec{B}$ is $A - B$.`,
            right: t`That is true only when the vectors are parallel. In general $|\vec{A} + \vec{B}| = \sqrt{A^2 + B^2 + 2AB\cos\theta}$, which is at most $A + B$.`,
            why: "With scalars we always add the numbers, so the habit carries over. But vectors pointing in different directions partly cancel. Two 5 km walks, one east and one north, leave you only about 7.07 km from home.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Two vectors of equal size A have a resultant also of size A. The angle between them is:",
              emoji: "📐",
              options: ["60°", "90°", "120°", "0°"],
              answer: 2,
              trap: 0,
              explain: t`$A^2 = A^2 + A^2 + 2A^2\cos\theta$ gives $\cos\theta = -\tfrac12$, so $\theta = 120°$. (At 60° the resultant is $\sqrt{3}A$.) Three equal forces at 120° to each other balance.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a 3-mark question on the resultant of two vectors, draw the parallelogram, drop a perpendicular from the tip of R, and derive both the magnitude and direction formulas. State the special cases θ = 0°, 90° and 180° at the end.",
          },
          {
            type: "keypoints",
            items: [
              "A vector has magnitude and direction and obeys the triangle law; current has direction but is a scalar.",
              "R = √(A² + B² + 2AB cos θ); |A − B| ≤ R ≤ A + B.",
              "Unit vector Â = A/A; components A_x = A cos θ, A_y = A sin θ.",
              "Add vectors analytically by adding components.",
              "Dot product gives a scalar (AB cos θ); cross product gives a vector (AB sin θ n̂).",
            ],
          },
        ],
        flashcards: [
          { front: "Scalar vs vector", back: "A scalar has only magnitude. A vector has magnitude and direction and adds by the triangle law." },
          { front: "Is electric current a vector?", back: "No. It has a direction but currents add as numbers, not by the triangle law." },
          { front: "Resultant of A and B at angle θ", back: "R = √(A² + B² + 2AB cos θ); tan α = B sin θ/(A + B cos θ)." },
          { front: "Range of the resultant of A and B", back: "From |A − B| (θ = 180°) to A + B (θ = 0°)." },
          { front: "Unit vector along A", back: "Â = A/|A|, magnitude 1." },
          { front: "Components of A at angle θ to x-axis", back: "A_x = A cos θ, A_y = A sin θ." },
          { front: "Dot product", back: "A·B = AB cos θ = A_xB_x + A_yB_y + A_zB_z (a scalar)." },
          { front: "î × ĵ", back: "k̂. And ĵ × î = −k̂." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a vector quantity?",
            options: ["Work", "Electric current", "Displacement", "Speed"],
            answer: 2,
            explain: "Displacement has magnitude, direction and adds by the triangle law. Work and speed are scalars; current is a scalar despite having a direction.",
          },
          {
            kind: "numeric",
            q: t`What is the magnitude of $3\hat{i} + 4\hat{j}$?`,
            answer: 5,
            explain: t`$\sqrt{3^2 + 4^2} = 5$.`,
          },
          {
            kind: "numeric",
            q: "Two forces of 5 N and 12 N act at right angles. Find the magnitude of the resultant (in N).",
            answer: 13,
            unit: "N",
            explain: t`$R = \sqrt{25 + 144} = 13$ N.`,
          },
          {
            kind: "truefalse",
            q: t`$\vec{A} + \vec{B} = \vec{B} + \vec{A}$ for any two vectors.`,
            answer: true,
            explain: "Vector addition is commutative: both orders give the same diagonal of the parallelogram.",
          },
          {
            kind: "fill",
            q: "A vector whose magnitude is ___ is called a unit vector.",
            answer: ["1", "one", "unity"],
            explain: "A unit vector has magnitude 1 and only shows a direction.",
          },
          {
            kind: "numeric",
            q: t`Find $(2\hat{i} + 3\hat{j})\cdot(4\hat{i} - \hat{j})$.`,
            answer: 5,
            explain: t`$2(4) + 3(-1) = 8 - 3 = 5$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these could be the resultant of forces of 6 N and 8 N?",
            options: ["1 N", "2 N", "10 N", "15 N"],
            answers: [1, 2],
            explain: "The resultant must lie between 8 − 6 = 2 N and 8 + 6 = 14 N. 2 N (opposite) and 10 N (at right angles) are possible.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`The angle between $\vec{A} = \hat{i} + \hat{j}$ and $\vec{B} = \hat{i} - \hat{j}$ is:`,
            options: ["0°", "45°", "90°", "180°"],
            answer: 2,
            explain: t`$\vec{A}\cdot\vec{B} = 1 - 1 = 0$, so $\cos\theta = 0$ and $\theta = 90°$.`,
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Motion in a plane and projectiles ---------------- */
      {
        slug: "c11-plane-motion-projectile",
        title: "Motion in a Plane and Projectile Motion",
        summary: "Position, velocity and acceleration vectors, motion with constant acceleration in a plane, and the full analysis of projectile motion: trajectory, time of flight, maximum height and range.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏏",
            caption: "A lofted cricket shot, a javelin throw, water from a garden hose: each follows the same curve, a parabola, once it leaves the hand.",
          },
          {
            type: "text",
            md: t`In a plane, position is $\vec{r} = x\hat{i} + y\hat{j}$. If the body moves from $\vec{r}$ to $\vec{r}\,'$ in time $\Delta t$, its displacement is $\Delta\vec{r} = \vec{r}\,' - \vec{r}$ and its average velocity is $\Delta\vec{r}/\Delta t$.

The **instantaneous velocity** is the limit of this as $\Delta t \to 0$. Its direction is along the **tangent** to the path at that point, in the direction of motion. The acceleration is the rate of change of velocity, which can change in size, in direction, or both.`,
          },
          {
            type: "formula",
            tex: t`\vec{v} = \frac{d\vec{r}}{dt} = v_x\hat{i} + v_y\hat{j}, \quad v_x = \frac{dx}{dt},\ v_y = \frac{dy}{dt} \qquad \vec{a} = \frac{d\vec{v}}{dt}`,
            caption: t`Speed $v = \sqrt{v_x^2 + v_y^2}$ and the direction is $\tan\theta = v_y/v_x$.`,
          },
          {
            type: "text",
            md: t`If the acceleration $\vec{a}$ is constant, the vector forms of the equations of motion hold: $\vec{v} = \vec{v}_0 + \vec{a}t$ and $\vec{r} = \vec{r}_0 + \vec{v}_0t + \tfrac12\vec{a}t^2$.

The key idea is that **motion along x and motion along y are independent**. Each component obeys its own one-dimensional equations with $a_x$ and $a_y$; time is the only thing they share.`,
          },
          {
            type: "example",
            title: "Constant acceleration in a plane",
            problem: t`A particle starts at the origin with velocity $6\hat{i}$ m/s and has a constant acceleration $(-2\hat{i} + 4\hat{j})\ \text{m s}^{-2}$. Find its position and speed at $t = 2$ s.`,
            steps: [
              t`$x = 6t - t^2$ and $y = 2t^2$. At $t = 2$ s: $x = 12 - 4 = 8$ m, $y = 8$ m.`,
              t`$v_x = 6 - 2t = 2$ m/s and $v_y = 4t = 8$ m/s.`,
              t`Speed $= \sqrt{2^2 + 8^2} = \sqrt{68} \approx 8.25$ m/s.`,
            ],
            answer: t`$\vec{r} = 8\hat{i} + 8\hat{j}$ m; speed about 8.25 m/s.`,
          },
          {
            type: "text",
            md: t`A **projectile** is a body thrown into the air that then moves only under gravity. We ignore air resistance and take $g$ as constant. Launch it with speed $u$ at angle $\theta$ above the horizontal, with $x$ horizontal and $y$ vertically up:

$u_x = u\cos\theta$ stays constant, because $a_x = 0$. The vertical part has $u_y = u\sin\theta$ and $a_y = -g$. So $x = (u\cos\theta)t$ and $y = (u\sin\theta)t - \tfrac12 g t^2$.`,
          },
          {
            type: "formula",
            tex: t`y = x\tan\theta - \frac{g\,x^2}{2u^2\cos^2\theta}`,
            caption: "Eliminating t gives the equation of the trajectory: y = bx − cx², a parabola.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Time to reach the top:** $v_y = 0$ gives $t_m = \dfrac{u\sin\theta}{g}$.`,
              t`**Time of flight:** $y = 0$ again at $T = \dfrac{2u\sin\theta}{g} = 2t_m$.`,
              t`**Maximum height:** $v_y^2 = u^2\sin^2\theta - 2gH = 0$ gives $H = \dfrac{u^2\sin^2\theta}{2g}$.`,
              t`**Horizontal range:** $R = u\cos\theta \cdot T = \dfrac{2u^2\sin\theta\cos\theta}{g} = \dfrac{u^2\sin 2\theta}{g}$.`,
              t`**Maximum range:** $\sin 2\theta = 1$ at $\theta = 45°$, so $R_{\max} = u^2/g$. Angles $\theta$ and $90° - \theta$ give the same range.`,
            ],
          },
          {
            type: "example",
            title: "A football kick",
            problem: "A footballer in Kolkata kicks a ball at 20 m/s at 30° above the ground. Find the time of flight, maximum height and range. (g = 10 m/s²)",
            steps: [
              t`$u\sin\theta = 20 \times 0.5 = 10$ m/s; $u\cos\theta = 20 \times 0.866 = 17.32$ m/s.`,
              t`$T = \dfrac{2(10)}{10} = 2$ s.`,
              t`$H = \dfrac{(10)^2}{2(10)} = 5$ m.`,
              t`$R = \dfrac{(20)^2\sin 60°}{10} = 40 \times 0.866 \approx 34.6$ m (or $17.32 \times 2 = 34.6$ m).`,
            ],
            answer: "T = 2 s, H = 5 m, R ≈ 34.6 m.",
          },
          {
            type: "widget",
            widget: "projectile",
            caption: "Change the launch angle and speed. Check that 30° and 60° give the same range, and that 45° gives the largest.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "At the highest point of a projectile's path, its velocity is:",
                options: ["zero", t`$u\cos\theta$, horizontal`, t`$u\sin\theta$, vertical`, t`$u$, along the launch direction`],
                answer: 1,
                explain: "Only the vertical component becomes zero at the top. The horizontal component u cos θ never changes.",
              },
            ],
          },
          {
            type: "example",
            title: "Thrown horizontally from a height",
            problem: "A stone is thrown horizontally at 15 m/s from the top of a 45 m high cliff. Find the time to land, how far from the foot of the cliff it lands, and its speed on landing. (g = 10 m/s²)",
            steps: [
              t`Vertical: $u_y = 0$, so $45 = \tfrac12(10)t^2$ and $t = 3$ s.`,
              t`Horizontal: $x = 15 \times 3 = 45$ m.`,
              t`On landing $v_x = 15$ m/s and $v_y = 10 \times 3 = 30$ m/s downward.`,
              t`Speed $= \sqrt{15^2 + 30^2} = \sqrt{1125} \approx 33.5$ m/s, at $\tan^{-1}(30/15) \approx 63.4°$ below the horizontal.`,
            ],
            answer: "3 s; 45 m from the foot; about 33.5 m/s.",
          },
          {
            type: "mistake",
            wrong: "At the top of its path a projectile is momentarily at rest, and its acceleration there is zero.",
            right: "At the top only the vertical velocity is zero; it still moves horizontally at u cos θ. The acceleration is g downward everywhere on the path.",
            why: "For a ball thrown straight up, the top really is a point of rest, so the idea gets carried over. For an angled throw the horizontal motion carries on unchanged, and gravity never switches off.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each projectile quantity with its formula.",
              pairs: [
                ["Time of flight", "2u sin θ / g"],
                ["Maximum height", "u² sin² θ / 2g"],
                ["Horizontal range", "u² sin 2θ / g"],
                ["Velocity at the top", "u cos θ"],
                ["Maximum range (θ = 45°)", "u² / g"],
              ],
              explain: "Every result comes from treating the horizontal motion (constant velocity) and vertical motion (acceleration −g) separately, linked only by time.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "\"Show that the path of a projectile is a parabola\" and the derivations of T, H and R are frequent 3–5 mark questions. Write the x and y equations, eliminate t, and compare with y = bx − cx². State your assumptions: no air resistance and constant g.",
          },
          {
            type: "keypoints",
            items: [
              "Velocity is tangent to the path; with constant a, the x and y motions are independent.",
              "Projectile: u_x = u cos θ constant, a_y = −g.",
              "Trajectory y = x tan θ − gx²/(2u² cos² θ) is a parabola.",
              "T = 2u sin θ/g, H = u² sin² θ/2g, R = u² sin 2θ/g; R is maximum (u²/g) at 45°.",
              "Complementary angles (θ and 90° − θ) give the same range.",
            ],
          },
        ],
        flashcards: [
          { front: "Direction of instantaneous velocity in a plane", back: "Along the tangent to the path, in the direction of motion." },
          { front: "Projectile: horizontal acceleration", back: "Zero (no air resistance), so u cos θ stays constant." },
          { front: "Time of flight", back: "T = 2u sin θ / g." },
          { front: "Maximum height", back: "H = u² sin² θ / 2g." },
          { front: "Horizontal range", back: "R = u² sin 2θ / g; maximum u²/g at θ = 45°." },
          { front: "Equation of trajectory", back: "y = x tan θ − g x² / (2u² cos² θ): a parabola." },
          { front: "Which angles give equal ranges?", back: "θ and 90° − θ (for the same speed, on level ground)." },
          { front: "Velocity at the top of the path", back: "u cos θ, horizontal. The vertical part is zero." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A ball is thrown at 10 m/s at 45° to the horizontal. What is its range on level ground (in m)? (g = 10 m/s²)",
            answer: 10,
            unit: "m",
            explain: t`$R = \dfrac{u^2\sin 90°}{g} = \dfrac{100}{10} = 10$ m.`,
          },
          {
            kind: "numeric",
            q: "A projectile is fired at 30 m/s at 30° above the horizontal. What is its time of flight (in s)? (g = 10 m/s²)",
            answer: 3,
            unit: "s",
            explain: t`$T = \dfrac{2u\sin\theta}{g} = \dfrac{2(30)(0.5)}{10} = 3$ s.`,
          },
          {
            kind: "truefalse",
            q: "Two balls thrown with the same speed at 25° and 65° land at the same distance on level ground.",
            answer: true,
            explain: "25° + 65° = 90°, and sin 50° = sin 130°, so their ranges are equal.",
          },
          {
            kind: "numeric",
            q: "A ball is thrown at 20 m/s at 60° above the horizontal. What is its maximum height (in m)? (g = 10 m/s²)",
            answer: 15,
            unit: "m",
            explain: t`$H = \dfrac{u^2\sin^2\theta}{2g} = \dfrac{400 \times 0.75}{20} = 15$ m.`,
          },
          {
            kind: "mcq",
            q: "Neglecting air resistance, the path of a projectile launched at an angle is:",
            options: ["a straight line", "a circle", "a parabola", "a hyperbola"],
            answer: 2,
            explain: "The trajectory equation has the form y = bx − cx², which is a parabola.",
          },
          {
            kind: "numeric",
            q: "A marble rolls off a table 1.25 m high at 2 m/s. How far from the table edge (horizontally) does it land (in m)? (g = 10 m/s²)",
            answer: 1,
            unit: "m",
            explain: t`Fall time: $1.25 = 5t^2$, $t = 0.5$ s. Horizontal distance $= 2 \times 0.5 = 1$ m.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "For a projectile launched at an angle (no air resistance), which statements are true?",
            options: ["The horizontal velocity stays constant", "The acceleration is zero at the top", "The speed is least at the top", "The vertical velocity changes by g every second"],
            answers: [0, 2, 3],
            explain: "a = g downward throughout, so v_y changes by g each second while v_x is fixed. At the top v_y = 0, so the speed is least (u cos θ).",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A stone is dropped from a plane flying horizontally. Seen from the ground, its path is:",
            options: ["a vertical straight line", "a parabola", "a slanting straight line", "a circle"],
            answer: 1,
            explain: "The stone keeps the plane's horizontal velocity and falls under gravity, so from the ground it traces a parabola. From the plane it seems to fall straight down.",
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Relative velocity in 2D and circular motion ---------------- */
      {
        slug: "c11-relative-velocity-circular-motion",
        title: "Relative Velocity in Two Dimensions and Uniform Circular Motion",
        summary: "Relative velocity as vector subtraction (rain and umbrella, crossing a river), and uniform circular motion: angular speed, period, frequency and centripetal acceleration.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`In two dimensions, the velocity of A relative to B is the vector difference $\vec{v}_{AB} = \vec{v}_A - \vec{v}_B$. To find it, add $-\vec{v}_B$ to $\vec{v}_A$ by the triangle law. Note $\vec{v}_{BA} = -\vec{v}_{AB}$.

Two everyday cases: rain seen by a moving person (where to hold the umbrella), and a boat crossing a flowing river.`,
          },
          {
            type: "example",
            title: "Rain and umbrella",
            problem: "Rain falls vertically at 12 m/s. A girl cycles east at 5 m/s. At what angle should she tilt her umbrella?",
            steps: [
              t`Velocity of rain relative to her: $\vec{v}_{rg} = \vec{v}_r - \vec{v}_g = (-12\hat{j}) - (5\hat{i}) = -5\hat{i} - 12\hat{j}$ m/s.`,
              t`Magnitude $= \sqrt{25 + 144} = 13$ m/s.`,
              t`The rain seems to come from the east (from in front of her), at $\tan\alpha = 5/12$ to the vertical, $\alpha \approx 22.6°$.`,
            ],
            answer: "Tilt the umbrella forward (towards the east) by about 22.6° from the vertical.",
          },
          {
            type: "example",
            title: "Crossing a river",
            problem: "A river 120 m wide flows at 3 m/s. A boat moves at 5 m/s relative to the water. (a) Heading straight across, how long does it take and how far downstream does it land? (b) Which way should it head to land directly opposite, and how long does that take?",
            steps: [
              t`(a) Heading across, the across-component is 5 m/s: $t = 120/5 = 24$ s. The river carries it $3 \times 24 = 72$ m downstream.`,
              t`(b) To land opposite, the upstream component of the boat must cancel the river: $5\sin\theta = 3$, $\sin\theta = 0.6$, $\theta \approx 36.9°$ upstream from the straight-across line.`,
              t`Across-speed $= 5\cos\theta = \sqrt{25 - 9} = 4$ m/s, so $t = 120/4 = 30$ s.`,
            ],
            answer: "(a) 24 s, 72 m downstream (the shortest time). (b) Head 36.9° upstream; 30 s (the shortest path).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A swimmer swims at 4 m/s relative to water, heading straight across a 200 m wide river flowing at 3 m/s. How far downstream (in m) does she reach the other bank?",
                answer: 150,
                unit: "m",
                explain: t`Time $= 200/4 = 50$ s; drift $= 3 \times 50 = 150$ m.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Uniform circular motion (UCM)** is motion in a circle at constant speed. In time $\Delta t$ the radius turns through an **angular displacement** $\Delta\theta$ (in radians). The **angular speed** is $\omega = \dfrac{d\theta}{dt}$.

The **period** $T$ is the time for one revolution and the **frequency** $\nu$ is revolutions per second. The arc covered is $\Delta s = r\Delta\theta$, so the linear speed is $v = r\omega$.`,
          },
          {
            type: "formula",
            tex: t`\omega = \frac{2\pi}{T} = 2\pi\nu \qquad v = \omega r`,
          },
          {
            type: "text",
            md: t`In UCM the speed is constant, but the **direction** of velocity changes all the time, so the body **is accelerating**. This acceleration always points towards the centre: the **centripetal acceleration**.

It is derived by comparing two triangles: the one made by the position vectors at two nearby instants, and the one made by the velocity vectors at those instants.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the centripetal acceleration derivation in order.",
              items: [
                "Draw position vectors r and r′ at t and t + Δt; velocities v and v′ are perpendicular to them.",
                "Both triangles (r, r′, Δr) and (v, v′, Δv) are isosceles with the same angle Δθ, so they are similar.",
                "Hence |Δv| / v = |Δr| / r.",
                "Divide by Δt and let Δt → 0: |Δr|/Δt → v, so a = v²/r.",
                "As Δt → 0, Δv becomes perpendicular to v and points to the centre.",
              ],
              explain: "Similar triangles turn a change in direction into a size: the velocity rotates by the same angle the radius does, so the acceleration has magnitude v²/r, directed to the centre.",
            },
          },
          {
            type: "formula",
            tex: t`a_c = \frac{v^2}{r} = \omega^2 r = 4\pi^2\nu^2 r`,
            caption: "Centripetal acceleration: constant in magnitude, always directed towards the centre, so its direction keeps changing.",
          },
          {
            type: "example",
            title: "A stone on a string",
            problem: "A stone tied to a 0.5 m string is whirled in a horizontal circle at 2 revolutions per second. Find its angular speed, linear speed and centripetal acceleration.",
            steps: [
              t`$\omega = 2\pi\nu = 2\pi \times 2 = 4\pi \approx 12.57$ rad/s.`,
              t`$v = \omega r = 4\pi \times 0.5 = 2\pi \approx 6.28$ m/s.`,
              t`$a_c = \omega^2 r = 16\pi^2 \times 0.5 = 8\pi^2 \approx 79\ \text{m s}^{-2}$, towards the centre.`,
            ],
            answer: t`$\omega \approx 12.6$ rad/s, $v \approx 6.28$ m/s, $a_c \approx 79\ \text{m s}^{-2}$ (about 8g).`,
          },
          {
            type: "mistake",
            wrong: "In uniform circular motion the speed is constant, so the acceleration is zero.",
            right: "The velocity changes direction at every instant, so there is an acceleration v²/r towards the centre.",
            why: "In a straight line, constant speed does mean zero acceleration, so the idea feels safe. But acceleration is the rate of change of the velocity **vector**; turning is a change too.",
          },
          {
            type: "table",
            headers: ["In UCM", "Constant?"],
            rows: [
              ["Speed v, angular speed ω, period T", "yes"],
              ["Magnitude of centripetal acceleration", "yes"],
              ["Velocity vector", "no: direction changes"],
              ["Acceleration vector", "no: always turns to point at the centre"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "The derivation of a = v²/r is a standard 3-mark question: draw the circle with r, r′ and the velocity triangle, state that the triangles are similar, and take the limit. Always state the direction (towards the centre). ISC also expects you to know that a body speeding up on a circle has an extra tangential acceleration.",
          },
          {
            type: "keypoints",
            items: [
              "Relative velocity in 2D: v_AB = v_A − v_B (vector subtraction).",
              "Hold the umbrella along the rain's velocity relative to you.",
              "River: heading straight across gives the least time d/v_b; heading upstream at sin θ = v_r/v_b gives the shortest path.",
              "UCM: ω = 2π/T = 2πν, v = ωr.",
              "Centripetal acceleration a = v²/r = ω²r, always towards the centre.",
            ],
          },
        ],
        flashcards: [
          { front: "Relative velocity of A with respect to B", back: "v_AB = v_A − v_B (vector subtraction)." },
          { front: "Shortest time to cross a river of width d", back: "Head straight across: t = d/v_b. Drift = v_r d/v_b." },
          { front: "Shortest path across a river", back: "Head upstream at sin θ = v_r/v_b; time = d/√(v_b² − v_r²). Possible only if v_b > v_r." },
          { front: "Angular speed", back: "ω = dθ/dt = 2π/T = 2πν, in rad/s." },
          { front: "Relation between v and ω", back: "v = ωr." },
          { front: "Centripetal acceleration", back: "a = v²/r = ω²r, towards the centre." },
          { front: "Is UCM accelerated motion?", back: "Yes. Speed is constant but the direction of velocity changes." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In uniform circular motion the acceleration is directed:",
            options: ["along the tangent", "towards the centre", "away from the centre", "it is zero"],
            answer: 1,
            explain: "Centripetal means \"centre-seeking\": a = v²/r towards the centre.",
          },
          {
            kind: "numeric",
            q: "A car takes a circular turn of radius 100 m at a steady 20 m/s. What is its centripetal acceleration (in m/s²)?",
            answer: 4,
            unit: "m/s²",
            explain: t`$a = v^2/r = 400/100 = 4\ \text{m s}^{-2}$.`,
          },
          {
            kind: "numeric",
            q: "What is the angular speed of the seconds hand of a clock (in rad/s, to 3 decimal places)?",
            answer: 0.105,
            tolerance: 0.001,
            unit: "rad/s",
            explain: t`$T = 60$ s, so $\omega = 2\pi/60 \approx 0.105$ rad/s.`,
          },
          {
            kind: "truefalse",
            q: "In uniform circular motion, the velocity of the body is constant.",
            answer: false,
            explain: "The speed is constant, but the direction keeps changing, so the velocity vector is not constant.",
          },
          {
            kind: "mcq",
            q: "Rain falls vertically at 4 m/s. A man runs at 3 m/s. The rain appears to him to fall at:",
            options: ["5 m/s, tilted towards him from the front", "7 m/s vertically", "1 m/s, tilted from behind", "5 m/s vertically"],
            answer: 0,
            explain: t`$\vec{v}_{rain,man} = \vec{v}_{rain} - \vec{v}_{man}$ has a backward component 3 m/s and downward component 4 m/s: magnitude 5 m/s, at $\tan^{-1}(3/4) \approx 37°$ to the vertical, coming from in front.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A boat moves at 5 m/s in still water. It must cross a 100 m wide river flowing at 3 m/s and land directly opposite. How long (in s) does it take?",
            answer: 25,
            unit: "s",
            explain: t`Across-speed $= \sqrt{5^2 - 3^2} = 4$ m/s, so $t = 100/4 = 25$ s.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which of these stay constant in uniform circular motion?",
            options: ["Speed", "Angular speed", "Velocity", "Magnitude of acceleration"],
            answers: [0, 1, 3],
            explain: "Speed, ω and |a| = v²/r are constant. The velocity vector changes direction continuously.",
          },
          {
            kind: "numeric",
            q: "A particle moves in a circle of radius 2 m with a period of π seconds. What is its centripetal acceleration (in m/s²)?",
            answer: 8,
            unit: "m/s²",
            explain: t`$\omega = 2\pi/T = 2$ rad/s, so $a = \omega^2 r = 4 \times 2 = 8\ \text{m s}^{-2}$.`,
            difficulty: 2,
          },
        ],
      },
      /* ---------------- Exam edge ---------------- */
      {
        slug: "c11-plane-exam-edge",
        title: "Exam edge: Motion in a Plane",
        summary: "Projectile shortcuts, trajectory equations, closest approach, non-uniform circular motion and projectiles on an incline, from KCET to JEE Advanced level.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: "Projectile motion is one of the most asked topics in Class 11 kinematics. NEET and KCET test the T, H, R formulas and the trajectory equation; JEE Main adds relative motion (rain, river, closest approach) and circular motion with tangential acceleration; JEE Advanced asks projectiles on inclines, from moving platforms, and two-body problems. The same vector ideas return in laws of motion, rotation and electromagnetism.",
          },
          {
            type: "table",
            headers: ["Shortcut", "Result", "Safe when"],
            rows: [
              ["Range and height", t`$R = 4H\cot\theta$`, "level ground, same launch and landing height"],
              ["Time and height", t`$T^2 = 8H/g$`, "level ground"],
              ["Complementary angles θ and 90° − θ", t`same R; $H_1 + H_2 = \dfrac{u^2}{2g}$; $R = 4\sqrt{H_1H_2}$`, "same speed, level ground"],
              ["At maximum range (45°)", t`$H = R_{\max}/4$`, "level ground"],
              ["Non-uniform circular motion", t`$a = \sqrt{a_t^2 + (v^2/r)^2}$`, "any circular path; a_t = dv/dt"],
            ],
          },
          {
            type: "formula",
            tex: t`y = x\tan\theta\left(1 - \frac{x}{R}\right)`,
            caption: "Trajectory in terms of the range. Useful when a question gives the range or asks where the ball clears a wall.",
          },
          {
            type: "example",
            title: "KCET level: complementary angles",
            problem: "Two balls are thrown with the same speed at 30° and 60° to the horizontal. Compare their ranges, maximum heights and times of flight.",
            steps: [
              "Ranges: sin 60° = sin 120°, so they are equal.",
              t`Heights: $H \propto \sin^2\theta$, so $H_1 : H_2 = \tfrac14 : \tfrac34 = 1 : 3$.`,
              t`Times: $T \propto \sin\theta$, so $T_1 : T_2 = \tfrac12 : \tfrac{\sqrt{3}}{2} = 1 : \sqrt{3}$.`,
            ],
            answer: t`$R_1 = R_2$; $H_1 : H_2 = 1 : 3$; $T_1 : T_2 = 1 : \sqrt{3}$.`,
          },
          {
            type: "example",
            title: "NEET level: reading a trajectory equation",
            problem: t`A projectile follows $y = \sqrt{3}\,x - 0.2x^2$ (SI units, $g = 10\ \text{m s}^{-2}$). Find the launch angle, launch speed and range.`,
            steps: [
              t`Compare with $y = x\tan\theta - \dfrac{g x^2}{2u^2\cos^2\theta}$: $\tan\theta = \sqrt{3}$, so $\theta = 60°$.`,
              t`$\dfrac{g}{2u^2\cos^2\theta} = 0.2$: $\dfrac{10}{2u^2(0.25)} = 0.2$, so $u^2 = 100$, $u = 10$ m/s.`,
              t`Range: $y = 0$ at $x = \sqrt{3}/0.2 \approx 8.66$ m. Check: $\dfrac{u^2\sin 120°}{g} = \dfrac{100 \times 0.866}{10} = 8.66$ m. ✓`,
            ],
            answer: "θ = 60°, u = 10 m/s, R ≈ 8.66 m.",
          },
          {
            type: "mistake",
            wrong: "The range is always greatest at 45°.",
            right: "45° gives the greatest range only when the ball lands at the same height it was launched from. From a height (a shot put) the best angle is below 45°; up an incline it is 45° + α/2 measured from the horizontal.",
            why: "The 45° result comes from R = u² sin 2θ / g, which assumes level ground. Change the landing height and the formula, and the best angle, change.",
          },
          {
            type: "example",
            title: "JEE Main level: speeding up on a circle",
            problem: "A car moves on a circular track of radius 2 m. At one instant its speed is 4 m/s and increasing at 3 m/s². Find its total acceleration.",
            steps: [
              t`Centripetal part: $a_c = v^2/r = 16/2 = 8\ \text{m s}^{-2}$, towards the centre.`,
              t`Tangential part: $a_t = 3\ \text{m s}^{-2}$, along the velocity.`,
              t`They are perpendicular: $a = \sqrt{8^2 + 3^2} = \sqrt{73} \approx 8.54\ \text{m s}^{-2}$, at $\tan^{-1}(3/8) \approx 20.6°$ to the radius.`,
            ],
            answer: t`About $8.54\ \text{m s}^{-2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "For a projectile on level ground, the range equals 4 times the maximum height. What is the launch angle (in degrees)?",
                answer: 45,
                unit: "°",
                explain: t`$R = 4H\cot\theta$, so $R = 4H$ means $\cot\theta = 1$, $\theta = 45°$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: closest approach",
            problem: "Ship A is at the origin moving east at 4 m/s. Ship B is 100 m north of A, moving south at 3 m/s. Find the closest distance between them and when it occurs.",
            steps: [
              t`Work in A's frame. B's position relative to A at $t = 0$: $\vec{r} = 100\hat{j}$. Relative velocity: $\vec{v}_{BA} = -3\hat{j} - 4\hat{i}$, magnitude 5 m/s.`,
              t`B moves in a straight line in A's frame. The closest distance is the perpendicular from A to that line: $d = \dfrac{|\vec{r}\times\vec{v}_{BA}|}{|\vec{v}_{BA}|} = \dfrac{100 \times 4}{5} = 80$ m.`,
              t`Time: $t = \dfrac{-\vec{r}\cdot\vec{v}_{BA}}{|\vec{v}_{BA}|^2} = \dfrac{300}{25} = 12$ s.`,
              t`Check: at 12 s, A is at $(48, 0)$ and B at $(0, 64)$; distance $\sqrt{48^2 + 64^2} = 80$ m. ✓`,
            ],
            answer: "80 m, after 12 s.",
          },
          {
            type: "example",
            title: "JEE Advanced level: projectile up an incline",
            problem: "A ball is projected at 20 m/s from the foot of a 30° incline, at 60° above the horizontal (so 30° above the incline). Find its time of flight and range along the incline. (g = 10 m/s²)",
            steps: [
              t`Take axes along and perpendicular to the incline. Perpendicular: $u_\perp = u\sin 30° = 10$ m/s, $a_\perp = -g\cos 30° = -8.66\ \text{m s}^{-2}$.`,
              t`It lands when the perpendicular displacement is zero: $T = \dfrac{2u_\perp}{g\cos 30°} = \dfrac{20}{8.66} \approx 2.31$ s.`,
              t`Horizontal distance $= u\cos 60° \times T = 10 \times 2.31 = 23.1$ m.`,
              t`Range along the incline $= \dfrac{23.1}{\cos 30°} \approx 26.7$ m. Formula check: $\dfrac{2u^2\sin(\theta - \alpha)\cos\theta}{g\cos^2\alpha} = \dfrac{2(400)(0.5)(0.5)}{10(0.75)} = 26.7$ m. ✓`,
            ],
            answer: "T ≈ 2.31 s; range up the incline ≈ 26.7 m.",
          },
          {
            type: "mistake",
            wrong: "Hold the umbrella along the direction the rain actually falls.",
            right: "Hold it along the rain's velocity **relative to you**, v_rain − v_you. If you move, tilt it forward, into the direction you walk.",
            why: "Standing still the two are the same, so the habit is formed there. Once you move, the rain you meet has an extra velocity −v_you, which tilts it towards you from the front.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "On a train moving steadily, you toss a ball straight up. It lands:",
              emoji: "🚄",
              options: ["back in your hand", "behind you", "in front of you"],
              answer: 0,
              trap: 1,
              explain: "The ball keeps the train's horizontal velocity, just as you do, so in the train's frame it goes straight up and down. From the platform its path is a parabola, but it still lands in your hand.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "When the shortcuts are safe",
            md: "R = 4H cot θ, T² = 8H/g and the complementary-angle results all assume level ground and no air resistance. For an incline, rotate the axes along the slope (g has components g sin α and g cos α). For two moving bodies, always move to one body's frame first; both feel the same g, so relative motion is a straight line at constant velocity.",
          },
          {
            type: "keypoints",
            items: [
              "R = 4H cot θ; T² = 8H/g; complementary angles give equal R and H₁ + H₂ = u²/2g.",
              "Read u and θ from a trajectory by comparing with y = x tan θ − gx²/(2u² cos² θ).",
              "In non-uniform circular motion, a = √(a_t² + a_c²).",
              "Closest approach: in one body's frame, drop a perpendicular from it to the other's straight-line path.",
              "On an incline, take axes along and perpendicular to the slope.",
            ],
          },
        ],
        flashcards: [
          { front: "Range in terms of H and θ", back: "R = 4H cot θ." },
          { front: "Time of flight in terms of H", back: "T² = 8H/g." },
          { front: "Complementary angles: sum of heights", back: "H₁ + H₂ = u²/2g, and R = 4√(H₁H₂)." },
          { front: "Trajectory using range", back: "y = x tan θ (1 − x/R)." },
          { front: "Total acceleration on a circle with changing speed", back: "a = √(a_t² + (v²/r)²)." },
          { front: "Time of flight up an incline of angle α", back: "T = 2u sin(θ − α) / (g cos α), θ measured from the horizontal." },
          { front: "Change in momentum of a projectile over its whole flight", back: "2mu sin θ, vertically downward." },
          { front: "Range up an incline", back: "R = 2u² sin(θ − α) cos θ / (g cos² α)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For a projectile on level ground, the maximum height equals the range. The angle of projection is:",
            options: [t`$\tan^{-1}(4)$`, t`$\tan^{-1}(1/4)$`, "45°", "60°"],
            answer: 0,
            explain: t`$R = 4H\cot\theta$ with $R = H$ gives $\cot\theta = \tfrac14$, so $\tan\theta = 4$ (about 76°).`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "A ball is projected at 20 m/s at 60° above the horizontal. After how many seconds is its velocity perpendicular to its initial velocity? (g = 10 m/s², 2 decimal places)",
            answer: 2.31,
            tolerance: 0.02,
            unit: "s",
            explain: t`$\vec{u}\cdot\vec{v} = 0$: $u_x^2 + u_y(u_y - gt) = 0$, so $u^2 = g t\,u\sin\theta$ and $t = \dfrac{u}{g\sin\theta} = \dfrac{20}{8.66} \approx 2.31$ s. This is less than $T = 3.46$ s, so it happens in flight.`,
            difficulty: 3,
            hint: "Set the dot product of the initial and current velocity to zero.",
          },
          {
            kind: "numeric",
            q: "A 0.2 kg ball is thrown at 10 m/s at 30° above the horizontal. What is the magnitude of its change in momentum (in kg m/s) between launch and landing on level ground?",
            answer: 2,
            unit: "kg m/s",
            explain: t`Horizontal momentum is unchanged; the vertical component reverses: $\Delta p = 2mu\sin\theta = 2(0.2)(10)(0.5) = 2$ kg m/s, downward.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Two balls are thrown with the same speed at 30° and 60°. Which statements are true?",
            options: ["Their ranges are equal", "Their times of flight are equal", "Their maximum heights are in the ratio 1 : 3", "Their times of flight are in the ratio 1 : √3"],
            answers: [0, 2, 3],
            explain: "R depends on sin 2θ (equal), H on sin² θ (1 : 3) and T on sin θ (1 : √3).",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`A particle moves on a circle of radius 1 m with speed $v = 2t$ (SI units). What is the magnitude of its total acceleration at $t = 1$ s (in m/s², 2 decimal places)?`,
            answer: 4.47,
            tolerance: 0.02,
            unit: "m/s²",
            explain: t`$a_t = dv/dt = 2$; at $t = 1$, $v = 2$ so $a_c = 4/1 = 4$. $a = \sqrt{4 + 16} = \sqrt{20} \approx 4.47\ \text{m s}^{-2}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "A boat moves at 5 m/s relative to water in a river 60 m wide flowing at 4 m/s. The minimum time to cross is:",
            options: ["12 s", "20 s", "15 s", "60 s"],
            answer: 0,
            explain: "Head straight across: t = 60/5 = 12 s. The river's flow does not affect the across-component. (20 s would be the shortest-path time, 60/√(25 − 16) = 60/3.)",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "To a man walking east at 4 m/s, rain appears to fall vertically at 3 m/s. What is the actual speed of the rain (in m/s)?",
            answer: 5,
            unit: "m/s",
            explain: t`$\vec{v}_{rain} = \vec{v}_{rain,man} + \vec{v}_{man} = -3\hat{j} + 4\hat{i}$, so its speed is $\sqrt{9 + 16} = 5$ m/s.`,
            difficulty: 2,
            hint: "Actual velocity = relative velocity + velocity of the observer.",
          },
          {
            kind: "numeric",
            q: "A ball is projected at 10 m/s from the foot of a 30° incline, at 60° above the horizontal. What is its time of flight before it lands on the incline (in s, 2 decimal places)? (g = 10 m/s²)",
            answer: 1.15,
            tolerance: 0.02,
            unit: "s",
            explain: t`$T = \dfrac{2u\sin(\theta - \alpha)}{g\cos\alpha} = \dfrac{2(10)(0.5)}{10(0.866)} \approx 1.15$ s.`,
            difficulty: 3,
            hint: "Use axes along and perpendicular to the incline.",
          },
        ],
      },
    ],
  },
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Units and Measurements": "c11-units-measurements",
  "11:Motion in a Straight Line": "c11-motion-straight-line",
  "11:Motion in a Plane": "c11-motion-in-a-plane",
  "11:Physical World and Measurement": "c11-units-measurements",
  "11:Kinematics": ["c11-motion-straight-line", "c11-motion-in-a-plane"],
};
