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

Older systems used three base units: **CGS** (centimetre, gram, second), **FPS** (foot, pound, second) and **MKS** (metre, kilogram, second). The **Système Internationale d'Unités (SI)**, adopted in 1960 and extended later, has seven base units and is used in all science today.`,
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
];

/** Class 11 chapter title ("11:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "11:Units and Measurements": "c11-units-measurements",
};
