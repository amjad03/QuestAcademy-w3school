import type { Subject } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

export const examMaths: Subject = {
  slug: "exam-maths",
  title: "Mathematics for JEE",
  world: "exam",
  icon: "📐",
  colors: ["#dc2626", "#f97316"],
  tagline: "Shortcuts, standard results and pattern-spotting for JEE Main & Advanced.",
  description:
    "High-yield JEE mathematics. Each chapter opens with a compact concept crash of must-know results, then drills the problem patterns that repeat across JEE papers — with worked examples, exam traps and time-saving tricks.",
  levels: ["JEE Main", "JEE Adv"],
  stages: ["aspirant"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "quadratic-equations",
      title: "Quadratic Equations",
      icon: "🎯",
      description: "Roots, discriminant, symmetric functions and location of roots.",
      lessons: [
        {
          slug: "quadratic-equations-concept-crash",
          title: "Concept crash: Quadratic Equations",
          summary: "Roots, nature, sum/product and the sign of a quadratic.",
          minutes: 13,
          xp: 30,
          blocks: [
            { type: "text", md: "A quadratic is a parabola in disguise. Most JEE quadratic questions are really asking: *where does this parabola sit relative to the x-axis?*" },
            { type: "formula", tex: t`x = \frac{-b \pm \sqrt{D}}{2a}, \qquad D = b^2 - 4ac` },
            { type: "formula", tex: t`\alpha + \beta = -\frac ba, \qquad \alpha\beta = \frac ca` },
            {
              type: "table",
              headers: ["Discriminant", "Roots"],
              rows: [
                ["D > 0", "Real and distinct"],
                ["D = 0", "Real and equal"],
                ["D < 0", "Complex conjugates"],
                ["D a perfect square (a, b, c rational)", "Rational"],
              ],
            },
            { type: "widget", widget: "function-plot", props: { kind: "quadratic" }, caption: "Slide a, b, c — watch the parabola cross, touch, or miss the x-axis." },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "$ax^2 + bx + c > 0$ for all real x needs **both** $a > 0$ and $D < 0$. Forgetting the condition on a is a classic slip.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "mcq", q: "Roots of $x^2 - 5x + 6 = 0$:", options: ["1, 6", "2, 3", "−2, −3", "−1, 6"], answer: 1, explain: "(x − 2)(x − 3) = 0." }],
            },
          ],
          flashcards: [
            { front: "Sum and product of roots", back: t`$-b/a$, $c/a$` },
            { front: "Always positive condition", back: "a > 0 and D < 0" },
            { front: "Quadratic with roots α, β", back: t`$x^2 - (\alpha+\beta)x + \alpha\beta = 0$` },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "For $2x^2 - 3x + 1 = 0$, the sum and product of roots are:",
              options: ["3/2, 1/2", "−3/2, 1/2", "3, 1", "1/2, 3/2"],
              answer: 0,
              explain: t`Sum $= 3/2$, product $= 1/2$.`,
            },
            { kind: "numeric", q: t`If α, β are roots of $x^2 - 5x + 6 = 0$, find $\alpha^2 + \beta^2$.`, answer: 13, explain: t`$(\alpha+\beta)^2 - 2\alpha\beta = 25 - 12$.` },
            { kind: "truefalse", q: "$x^2 + x + 1 > 0$ for every real x.", answer: true, explain: "a = 1 > 0 and D = −3 < 0." },
            { kind: "mcq", q: "$x^2 + kx + 9 = 0$ has equal roots when k =", options: ["±3", "±6", "±9", "±18"], answer: 1, explain: "$k^2 - 36 = 0$." },
          ],
        },
        {
          slug: "quadratic-equations-problem-patterns",
          title: "Problem-solving patterns: Quadratic Equations",
          summary: "Min/max, symmetric expressions, transformed roots and root location.",
          minutes: 16,
          xp: 40,
          blocks: [
            { type: "text", md: "Four patterns generate most quadratic MCQs in JEE Main." },
            { type: "heading", text: "Pattern 1 — Extreme value" },
            { type: "formula", tex: t`\text{Vertex at } x = -\frac{b}{2a}, \qquad y_{ext} = -\frac{D}{4a}` },
            { type: "heading", text: "Pattern 2 — Symmetric functions" },
            { type: "formula", tex: t`\alpha^3 + \beta^3 = (\alpha+\beta)^3 - 3\alpha\beta(\alpha+\beta)` },
            { type: "heading", text: "Pattern 3 — Transformed roots" },
            {
              type: "table",
              headers: ["New roots", "Replace x by"],
              rows: [
                ["1/α, 1/β", "1/x (reverse coefficients)"],
                ["α + k, β + k", "x − k"],
                ["kα, kβ", "x/k"],
                ["−α, −β", "−x"],
              ],
            },
            { type: "heading", text: "Pattern 4 — Both roots greater than k" },
            {
              type: "list",
              items: ["D ≥ 0", "a·f(k) > 0", "−b/2a > k"],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Shortcut",
              md: "If a + b + c = 0, then x = 1 is a root and the other root is c/a.",
            },
          ],
          flashcards: [
            { front: "Minimum of ax² + bx + c (a > 0)", back: t`$-D/4a$` },
            { front: t`$\alpha^3+\beta^3$`, back: t`$(\alpha+\beta)^3 - 3\alpha\beta(\alpha+\beta)$` },
            { front: "Roots reciprocal", back: "Reverse the coefficients" },
            { front: "a + b + c = 0 means", back: "x = 1 is a root" },
          ],
          quiz: [
            { kind: "numeric", q: "Minimum value of $x^2 - 4x + 7$?", answer: 3, explain: "$(x-2)^2 + 3$." },
            { kind: "numeric", q: t`Roots of $x^2 - 3x + 2 = 0$ are α, β. Find $\alpha^3 + \beta^3$.`, answer: 9, explain: "27 − 3·2·3 = 9." },
            {
              kind: "mcq",
              q: "The equation whose roots are reciprocals of the roots of $2x^2 - 5x + 3 = 0$ is:",
              options: ["$3x^2 - 5x + 2 = 0$", "$2x^2 + 5x + 3 = 0$", "$3x^2 + 5x + 2 = 0$", "$2x^2 - 3x + 5 = 0$"],
              answer: 0,
              explain: "Reverse the coefficients.",
            },
            {
              kind: "mcq",
              q: "Both roots of $x^2 - 2kx + k^2 - 1 = 0$ lie in (−2, 4). Then k lies in:",
              options: ["(−1, 3)", "(−2, 4)", "(−3, 5)", "(0, 2)"],
              answer: 0,
              explain: "Roots are k ± 1, so k − 1 > −2 and k + 1 < 4.",
            },
            { kind: "truefalse", q: "If a + b + c = 0 for $ax^2 + bx + c = 0$, then 1 is a root.", answer: true, explain: "f(1) = a + b + c = 0." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "sequences-series",
      title: "Sequences & Series",
      icon: "🔢",
      description: "AP, GP, means, standard sums and AM–GM optimisation.",
      lessons: [
        {
          slug: "sequences-series-concept-crash",
          title: "Concept crash: Sequences & Series",
          summary: "AP, GP, the three means and Σ formulas.",
          minutes: 13,
          xp: 30,
          blocks: [
            { type: "text", md: "Young Gauss summed 1 to 100 in seconds by pairing terms. That pairing trick is the AP sum formula." },
            {
              type: "table",
              headers: ["", "AP", "GP"],
              rows: [
                ["nth term", t`$a + (n-1)d$`, t`$ar^{n-1}$`],
                ["Sum of n", t`$\tfrac n2[2a + (n-1)d]$`, t`$a\dfrac{r^n - 1}{r - 1}$`],
                ["Infinite sum", "—", t`$\dfrac{a}{1-r},\ |r|<1$`],
              ],
            },
            { type: "formula", tex: t`\sum n = \frac{n(n+1)}{2}, \quad \sum n^2 = \frac{n(n+1)(2n+1)}{6}, \quad \sum n^3 = \left[\frac{n(n+1)}{2}\right]^2` },
            { type: "formula", tex: t`\text{AM} \ge \text{GM} \ge \text{HM}, \qquad \text{GM}^2 = \text{AM}\cdot\text{HM}\ \ (\text{two numbers})` },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "AM–GM–HM inequality needs **positive** numbers. Equality holds only when all numbers are equal.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "Sum of the first 20 natural numbers?", answer: 210, explain: "20·21/2." }],
            },
          ],
          flashcards: [
            { front: "Sum of GP to infinity", back: t`$a/(1-r)$, $|r|<1$` },
            { front: t`$\sum n^2$`, back: t`$n(n+1)(2n+1)/6$` },
            { front: "Relation of AM, GM, HM (two numbers)", back: "GM² = AM × HM" },
          ],
          quiz: [
            { kind: "numeric", q: "Sum to infinity of 1 + 1/2 + 1/4 + …", answer: 2, explain: "1/(1 − 1/2)." },
            { kind: "mcq", q: "Harmonic mean of 4 and 16:", options: ["6", "6.4", "8", "10"], answer: 1, explain: "HM = GM²/AM = 64/10." },
            { kind: "truefalse", q: "For positive numbers, AM ≥ GM.", answer: true, explain: "Equality when the numbers are equal." },
            { kind: "numeric", q: "The 10th term of the AP 3, 7, 11, … is", answer: 39, explain: "3 + 9·4 = 39." },
          ],
        },
        {
          slug: "sequences-series-problem-patterns",
          title: "Problem-solving patterns: Sequences & Series",
          summary: "Smart term choice, AM–GM minima and splitting sums.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "The right choice of variables halves the algebra." },
            {
              type: "table",
              headers: ["Three terms in", "Choose"],
              rows: [
                ["AP", "a − d, a, a + d (sum = 3a)"],
                ["GP", "a/r, a, ar (product = a³)"],
              ],
            },
            { type: "heading", text: "AM–GM for minimum values" },
            { type: "formula", tex: t`x + \frac{k}{x} \ge 2\sqrt k \quad (x > 0)` },
            { type: "heading", text: "Split the general term" },
            { type: "formula", tex: t`\sum_{k=1}^{n} k(k+1) = \sum k^2 + \sum k` },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Telescoping: $\\dfrac{1}{k(k+1)} = \\dfrac1k - \\dfrac{1}{k+1}$, so $\\sum_{k=1}^{n} \\dfrac{1}{k(k+1)} = \\dfrac{n}{n+1}$.",
            },
          ],
          flashcards: [
            { front: "Three numbers in AP", back: "a − d, a, a + d" },
            { front: "Min of x + k/x (x>0)", back: t`$2\sqrt k$` },
            { front: t`$\sum 1/(k(k+1))$ to n terms`, back: "n/(n+1)" },
          ],
          quiz: [
            { kind: "numeric", q: "Minimum value of $x + 9/x$ for x > 0?", answer: 6, explain: t`$2\sqrt9 = 6$ at x = 3.` },
            { kind: "numeric", q: t`$\sum_{k=1}^{10} k^2 = $ ?`, answer: 385, explain: "10·11·21/6 = 385." },
            { kind: "mcq", q: "Three numbers in AP have sum 15 and product 80. They are:", options: ["1, 5, 9", "2, 5, 8", "3, 5, 7", "4, 5, 6"], answer: 1, explain: "a = 5, (25 − d²)·5 = 80 → d = 3." },
            { kind: "numeric", q: "Evaluate 1·2 + 2·3 + 3·4 + … + 10·11.", answer: 440, explain: "385 + 55 = 440." },
            { kind: "fill", q: "If a, b, c are in GP, then b² = ___.", answer: ["ac", "ca"], explain: "Ratio b/a = c/b." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "coordinate-geometry",
      title: "Coordinate Geometry",
      icon: "📍",
      description: "Lines, circles and conics — the highest-weightage unit in JEE Main maths.",
      lessons: [
        {
          slug: "coordinate-geometry-concept-crash",
          title: "Concept crash: Coordinate Geometry",
          summary: "Lines, circles and standard conics in one sweep.",
          minutes: 16,
          xp: 30,
          blocks: [
            { type: "text", md: "Coordinate geometry turns pictures into algebra. In JEE Main it often contributes 4–5 questions — the single largest unit." },
            {
              type: "callout",
              tone: "exam",
              title: "Weightage",
              md: "Straight lines + circles + conics ≈ 15–18% of JEE Main maths.",
            },
            { type: "formula", tex: t`d = \frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}`, caption: "Distance of a point from a line" },
            { type: "formula", tex: t`x^2 + y^2 + 2gx + 2fy + c = 0:\quad \text{centre } (-g,-f),\ r = \sqrt{g^2 + f^2 - c}` },
            {
              type: "table",
              headers: ["Conic", "Standard form", "Key facts"],
              rows: [
                ["Parabola", "$y^2 = 4ax$", "Focus (a, 0); latus rectum 4a"],
                ["Ellipse", t`$\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$`, t`$e = \sqrt{1 - b^2/a^2}$; LR $= 2b^2/a$`],
                ["Hyperbola", t`$\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$`, t`$e = \sqrt{1 + b^2/a^2}$; LR $= 2b^2/a$`],
              ],
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "Distance of (1, 2) from $3x + 4y - 1 = 0$?", answer: 2, explain: "|3 + 8 − 1|/5 = 2." }],
            },
            {
              type: "keypoints",
              items: ["Perpendicular lines: $m_1m_2 = -1$.", "Ellipse: 0 < e < 1; parabola: e = 1; hyperbola: e > 1.", "Rectangular hyperbola: $e = \\sqrt2$."],
            },
          ],
          flashcards: [
            { front: "Point-line distance", back: t`$|ax_1+by_1+c|/\sqrt{a^2+b^2}$` },
            { front: "Circle centre and radius (general form)", back: t`$(-g,-f)$, $\sqrt{g^2+f^2-c}$` },
            { front: "Latus rectum of y² = 4ax", back: "4a" },
            { front: "Eccentricity of ellipse", back: t`$\sqrt{1 - b^2/a^2}$` },
          ],
          quiz: [
            { kind: "mcq", q: "Centre and radius of $x^2 + y^2 - 4x + 6y - 3 = 0$:", options: ["(2, −3), 4", "(−2, 3), 4", "(2, −3), 16", "(−2, 3), 2"], answer: 0, explain: t`$r = \sqrt{4 + 9 + 3} = 4$.` },
            { kind: "numeric", q: "Length of the latus rectum of $y^2 = 12x$?", answer: 12, explain: "4a with a = 3." },
            { kind: "mcq", q: "Eccentricity of $\\dfrac{x^2}{25} + \\dfrac{y^2}{16} = 1$:", options: ["3/5", "4/5", "3/4", "5/3"], answer: 0, explain: t`$\sqrt{1 - 16/25} = 3/5$.` },
            { kind: "truefalse", q: "A rectangular hyperbola has eccentricity √2.", answer: true, explain: "a = b gives e = √2." },
          ],
        },
        {
          slug: "coordinate-geometry-problem-patterns",
          title: "Problem-solving patterns: Coordinate Geometry",
          summary: "Tangency conditions, area by determinant and line relations.",
          minutes: 16,
          xp: 40,
          blocks: [
            { type: "text", md: "\"Find c so that the line touches the curve\" is JEE's favourite conic question. Memorise one condition per curve." },
            {
              type: "table",
              headers: ["Curve", "y = mx + c is a tangent if"],
              rows: [
                ["Circle $x^2 + y^2 = a^2$", t`$c^2 = a^2(1 + m^2)$`],
                ["Parabola $y^2 = 4ax$", "$c = a/m$"],
                [t`Ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$`, t`$c^2 = a^2m^2 + b^2$`],
                [t`Hyperbola $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$`, t`$c^2 = a^2m^2 - b^2$`],
              ],
            },
            { type: "formula", tex: t`\text{Area} = \frac12\left|\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}\right|` },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Focal chord of $y^2 = 4ax$ with ends $t_1, t_2$: $t_1t_2 = -1$. Tangents at ends of a focal chord meet at right angles on the directrix.",
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "For the circle condition, both signs of c work — two parallel tangents exist for each slope.",
            },
          ],
          flashcards: [
            { front: "Tangent condition, parabola y² = 4ax", back: "c = a/m" },
            { front: "Tangent condition, circle", back: t`$c^2 = a^2(1+m^2)$` },
            { front: "Focal chord parameters", back: t`$t_1t_2 = -1$` },
          ],
          quiz: [
            { kind: "mcq", q: "Tangent to $y^2 = 8x$ with slope 2:", options: ["y = 2x + 1", "y = 2x + 2", "y = 2x + 4", "y = 2x − 1"], answer: 0, explain: "a = 2, c = a/m = 1." },
            { kind: "numeric", q: "Area of triangle with vertices (0, 0), (4, 0), (0, 3)?", answer: 6, explain: "½·4·3." },
            { kind: "numeric", q: "Positive value of k for which y = x + k touches $x^2 + y^2 = 8$?", answer: 4, explain: t`$k^2 = 8(1 + 1) = 16$.` },
            { kind: "mcq", q: "Lines 2x + 3y = 5 and 3x − 2y = 7 are:", options: ["Parallel", "Perpendicular", "Coincident", "Inclined at 45°"], answer: 1, explain: "Slopes −2/3 and 3/2, product −1." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "integration",
      title: "Integration",
      icon: "📈",
      description: "Standard integrals, by parts, definite-integral properties and area.",
      lessons: [
        {
          slug: "integration-concept-crash",
          title: "Concept crash: Integration",
          summary: "Standard results, substitution, ILATE and core properties.",
          minutes: 16,
          xp: 30,
          blocks: [
            { type: "text", md: "Integration is reverse differentiation plus pattern recognition. In JEE, recognising the pattern is 90% of the job." },
            {
              type: "table",
              headers: ["Integrand", "Integral (+C)"],
              rows: [
                ["$x^n$ (n ≠ −1)", t`$\dfrac{x^{n+1}}{n+1}$`],
                ["$1/x$", t`$\ln|x|$`],
                [t`$\dfrac{1}{1+x^2}$`, t`$\tan^{-1}x$`],
                [t`$\dfrac{1}{\sqrt{1-x^2}}$`, t`$\sin^{-1}x$`],
                [t`$\dfrac{1}{x^2 - a^2}$`, t`$\dfrac{1}{2a}\ln\left|\dfrac{x-a}{x+a}\right|$`],
              ],
            },
            { type: "formula", tex: t`\int u\,v\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx`, caption: "By parts — choose u by ILATE: Inverse, Log, Algebraic, Trig, Exponential" },
            { type: "formula", tex: t`\int_0^a f(x)\,dx = \int_0^a f(a-x)\,dx`, caption: "King's property" },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: t`$\int_{-a}^{a} f(x)\,dx = 0$ only for **odd** f. For even f it is $2\int_0^a f(x)\,dx$.`,
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: t`$\int_0^1 x^2\,dx = $ ? (decimal)`, answer: 0.333, tolerance: 0.01, explain: "1/3." }],
            },
          ],
          flashcards: [
            { front: "ILATE", back: "Inverse, Log, Algebraic, Trig, Exponential — order to pick u" },
            { front: t`$\int dx/(1+x^2)$`, back: t`$\tan^{-1}x + C$` },
            { front: "King's property", back: t`$\int_0^a f(x)dx = \int_0^a f(a-x)dx$` },
          ],
          quiz: [
            { kind: "mcq", q: t`$\int \dfrac{dx}{1+x^2} = $`, options: [t`$\ln(1+x^2) + C$`, t`$\tan^{-1}x + C$`, t`$\sin^{-1}x + C$`, t`$\dfrac{1}{1+x^2} + C$`], answer: 1, explain: "Standard result." },
            { kind: "truefalse", q: t`$\int_{-a}^{a} f(x)\,dx = 0$ whenever f is odd.`, answer: true, explain: "Areas cancel symmetrically." },
            { kind: "mcq", q: t`$\int x e^x\,dx = $`, options: ["$xe^x + C$", "$e^x(x - 1) + C$", "$e^x(x + 1) + C$", "$x^2e^x/2 + C$"], answer: 1, explain: "By parts with u = x." },
            { kind: "numeric", q: t`$\int_0^{\pi} \sin x\,dx = $ ?`, answer: 2, explain: t`$[-\cos x]_0^\pi = 1 + 1$.` },
          ],
        },
        {
          slug: "integration-problem-patterns",
          title: "Problem-solving patterns: Integration",
          summary: "King's trick, the eˣ(f + f′) pattern and area between curves.",
          minutes: 17,
          xp: 45,
          blocks: [
            { type: "text", md: "Three tricks crack most JEE definite-integral questions without a single substitution." },
            { type: "heading", text: "Trick 1 — Add I to itself (King's property)" },
            { type: "formula", tex: t`I = \int_0^{\pi/2}\frac{\sin x}{\sin x + \cos x}dx \;\Rightarrow\; 2I = \int_0^{\pi/2}1\,dx \;\Rightarrow\; I = \frac{\pi}{4}` },
            { type: "heading", text: "Trick 2 — The eˣ pattern" },
            { type: "formula", tex: t`\int e^x\big(f(x) + f'(x)\big)dx = e^x f(x) + C` },
            { type: "heading", text: "Trick 3 — Area between curves" },
            { type: "formula", tex: t`A = \int_a^b \big(y_{upper} - y_{lower}\big)\,dx` },
            { type: "text", md: t`**Worked:** $y = x$ and $y = x^2$ meet at 0 and 1. $A = \int_0^1 (x - x^2)dx = \tfrac12 - \tfrac13 = \tfrac16$.` },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: t`Any $\int_0^{\pi/2}\dfrac{f(\sin x)}{f(\sin x) + f(\cos x)}dx = \dfrac{\pi}{4}$ — instantly.`,
            },
          ],
          flashcards: [
            { front: t`$\int e^x(f + f')dx$`, back: t`$e^x f(x) + C$` },
            { front: t`$\int_0^{\pi/2}\frac{\sin^n x}{\sin^n x+\cos^n x}dx$`, back: t`$\pi/4$` },
            { front: "Area between y = x and y = x²", back: "1/6" },
          ],
          quiz: [
            { kind: "numeric", q: t`$\int_0^{\pi/2}\dfrac{\sqrt{\sin x}}{\sqrt{\sin x}+\sqrt{\cos x}}dx$ ≈ ? (decimal)`, answer: 0.785, tolerance: 0.01, explain: "π/4 by King's property." },
            { kind: "numeric", q: "Area enclosed between $y = x^2$ and $y = x$ (decimal)?", answer: 0.1667, tolerance: 0.005, explain: "1/2 − 1/3 = 1/6." },
            { kind: "mcq", q: t`$\int e^x(\sin x + \cos x)\,dx = $`, options: [t`$e^x\cos x + C$`, t`$e^x\sin x + C$`, t`$-e^x\sin x + C$`, t`$e^x(\sin x - \cos x) + C$`], answer: 1, explain: t`f = sin x, f′ = cos x.` },
            { kind: "truefalse", q: t`$\int_0^{2a} f(x)\,dx = 2\int_0^{a} f(x)\,dx$ if $f(2a - x) = f(x)$.`, answer: true, explain: "The graph is symmetric about x = a." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "probability",
      title: "Probability",
      icon: "🎲",
      description: "Addition and conditional rules, Bayes' theorem and binomial distribution.",
      lessons: [
        {
          slug: "probability-concept-crash",
          title: "Concept crash: Probability",
          summary: "The rules that every probability question uses.",
          minutes: 14,
          xp: 30,
          blocks: [
            { type: "text", md: "Probability is counting with confidence. Get the sample space right and the rest is arithmetic." },
            { type: "formula", tex: t`P(A\cup B) = P(A) + P(B) - P(A\cap B)` },
            { type: "formula", tex: t`P(A\mid B) = \frac{P(A\cap B)}{P(B)}, \qquad \text{independent: } P(A\cap B) = P(A)P(B)` },
            { type: "formula", tex: t`P(X = r) = \binom{n}{r}p^r q^{n-r}, \qquad \mu = np,\ \sigma^2 = npq` },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "Mutually exclusive ≠ independent. If P(A), P(B) > 0 and A, B are mutually exclusive, then P(A∩B) = 0 ≠ P(A)P(B), so they are **dependent**.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: "Two fair dice are rolled. Probability that the sum is 7 (decimal)?", answer: 0.1667, tolerance: 0.005, explain: "6/36 = 1/6." }],
            },
          ],
          flashcards: [
            { front: "Addition rule", back: t`$P(A)+P(B)-P(A\cap B)$` },
            { front: "Binomial mean and variance", back: "np and npq" },
            { front: "Independence test", back: t`$P(A\cap B) = P(A)P(B)$` },
          ],
          quiz: [
            { kind: "mcq", q: "A and B are independent with P(A) = 0.5, P(B) = 0.4. P(A ∪ B) =", options: ["0.9", "0.7", "0.2", "0.6"], answer: 1, explain: "0.5 + 0.4 − 0.2." },
            { kind: "truefalse", q: "Two mutually exclusive events with non-zero probabilities are independent.", answer: false, explain: "P(A∩B) = 0 ≠ P(A)P(B)." },
            { kind: "numeric", q: "Binomial with n = 10, p = 0.4. Variance?", answer: 2.4, tolerance: 0.01, explain: "10 × 0.4 × 0.6." },
            { kind: "numeric", q: "In a 52-card deck, how many cards are a king or a heart (so P = n/52)?", answer: 16, explain: "13 + 4 − 1 = 16." },
          ],
        },
        {
          slug: "probability-problem-patterns",
          title: "Problem-solving patterns: Probability",
          summary: "Complement trick, Bayes tables and binomial counting.",
          minutes: 16,
          xp: 40,
          blocks: [
            { type: "text", md: "When you see \"at least one\", flip it. When you see \"given that the result was…\", reach for Bayes." },
            { type: "formula", tex: t`P(\text{at least one}) = 1 - P(\text{none})` },
            { type: "formula", tex: t`P(E_i\mid A) = \frac{P(E_i)P(A\mid E_i)}{\sum_j P(E_j)P(A\mid E_j)}`, caption: "Bayes' theorem" },
            {
              type: "table",
              headers: ["Bag", "Prior", "P(red | bag)", "Product"],
              rows: [
                ["I (3R, 2B)", "1/2", "3/5", "3/10"],
                ["II (2R, 3B)", "1/2", "2/5", "2/10"],
              ],
            },
            { type: "text", md: "A red ball is drawn. P(bag I | red) = (3/10) ÷ (5/10) = **3/5**." },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Given binomial mean and variance: q = variance/mean, then p = 1 − q and n = mean/p.",
            },
          ],
          flashcards: [
            { front: "At least one success", back: "1 − P(no success)" },
            { front: "Bayes in words", back: "Prior × likelihood ÷ total" },
            { front: "Binomial q from mean & variance", back: "q = variance ÷ mean" },
          ],
          quiz: [
            { kind: "numeric", q: "Probability of at least one head in 3 tosses of a fair coin (decimal)?", answer: 0.875, tolerance: 0.001, explain: "1 − 1/8." },
            {
              kind: "mcq",
              q: "Machine A makes 60% of items (2% defective); machine B makes 40% (3% defective). A random item is defective. P(it came from B)?",
              options: ["0.4", "0.5", "0.6", "0.3"],
              answer: 1,
              explain: "0.012 / (0.012 + 0.012) = 0.5.",
            },
            { kind: "numeric", q: "P(exactly 2 heads in 4 tosses) (decimal)?", answer: 0.375, tolerance: 0.001, explain: "C(4,2)/16 = 6/16." },
            { kind: "mcq", q: "A binomial variable has mean 4 and variance 2. Then (n, p) =", options: ["(8, 1/2)", "(16, 1/4)", "(6, 2/3)", "(4, 1)"], answer: 0, explain: "q = 2/4 = 1/2, p = 1/2, n = 4/(1/2) = 8." },
            { kind: "truefalse", q: "P(A | B) = P(A ∩ B) / P(B), provided P(B) > 0.", answer: true, explain: "Definition of conditional probability." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "matrices-determinants",
      title: "Matrices & Determinants",
      icon: "🧮",
      description: "Determinant properties, adjoint, inverse and systems of equations.",
      lessons: [
        {
          slug: "matrices-determinants-concept-crash",
          title: "Concept crash: Matrices & Determinants",
          summary: "Properties of determinants, adjoint and inverse.",
          minutes: 14,
          xp: 30,
          blocks: [
            { type: "text", md: "Matrices & Determinants is one of the most predictable JEE chapters: almost every question uses the same 6 properties." },
            { type: "formula", tex: t`A^{-1} = \frac{\operatorname{adj}A}{|A|}, \qquad |A| \neq 0` },
            {
              type: "table",
              headers: ["Property (A is n×n)", "Result"],
              rows: [
                ["|kA|", t`$k^n|A|$`],
                ["|adj A|", t`$|A|^{n-1}$`],
                ["|adj(adj A)|", t`$|A|^{(n-1)^2}$`],
                ["|A⁻¹|", "1/|A|"],
                ["(AB)ᵀ", "BᵀAᵀ"],
                ["(AB)⁻¹", "B⁻¹A⁻¹"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam trap",
              md: "$|kA| = k^n|A|$, **not** $k|A|$. For a 3×3 matrix, |2A| = 8|A|.",
            },
            {
              type: "checkpoint",
              questions: [{ kind: "numeric", q: t`$\begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = $ ?`, answer: 5, explain: "8 − 3." }],
            },
          ],
          flashcards: [
            { front: "|kA| for n×n", back: t`$k^n|A|$` },
            { front: "|adj A|", back: t`$|A|^{n-1}$` },
            { front: "(AB)ᵀ", back: "BᵀAᵀ (order reverses)" },
          ],
          quiz: [
            { kind: "numeric", q: "A is 3×3 with |A| = 4. |adj A| = ?", answer: 16, explain: "$4^2$." },
            { kind: "numeric", q: "A is 3×3 with |A| = 3. |2A| = ?", answer: 24, explain: "$2^3 \\times 3$." },
            { kind: "truefalse", q: "(AB)ᵀ = AᵀBᵀ for all conformable matrices.", answer: false, explain: "(AB)ᵀ = BᵀAᵀ." },
            { kind: "truefalse", q: "A square matrix is invertible if and only if its determinant is non-zero.", answer: true, explain: "A⁻¹ = adj A/|A| needs |A| ≠ 0." },
          ],
        },
        {
          slug: "matrices-determinants-problem-patterns",
          title: "Problem-solving patterns: Matrices & Determinants",
          summary: "Cramer's rule cases, skew-symmetric facts and Cayley–Hamilton.",
          minutes: 15,
          xp: 40,
          blocks: [
            { type: "text", md: "Systems of equations and power-of-matrix questions are where this chapter earns marks." },
            {
              type: "table",
              headers: ["Cramer's rule condition", "System has"],
              rows: [
                ["D ≠ 0", "Unique solution"],
                ["D = 0, some Dᵢ ≠ 0", "No solution"],
                ["D = 0, all Dᵢ = 0", "Infinitely many or none (check further)"],
              ],
            },
            { type: "heading", text: "Cayley–Hamilton for 2×2" },
            { type: "formula", tex: t`A^2 - (\operatorname{tr}A)\,A + |A|\,I = O` },
            { type: "text", md: t`**Worked:** $A = \begin{pmatrix}1&2\\3&4\end{pmatrix}$: tr = 5, |A| = −2, so $A^2 - 5A - 2I = O$.` },
            {
              type: "callout",
              tone: "exam",
              title: "PYQ pattern",
              md: "Determinant of an **odd-order skew-symmetric** matrix is always 0. Every diagonal element of a skew-symmetric matrix is 0.",
            },
          ],
          flashcards: [
            { front: "D ≠ 0 in Cramer's rule", back: "Unique solution" },
            { front: "Odd-order skew-symmetric determinant", back: "0" },
            { front: "Cayley–Hamilton (2×2)", back: t`$A^2 - (\text{tr}A)A + |A|I = O$` },
          ],
          quiz: [
            { kind: "numeric", q: "A is 3×3 with |A| = 2. |adj(adj A)| = ?", answer: 16, explain: t`$|A|^{(n-1)^2} = 2^4$.` },
            { kind: "mcq", q: "Determinant of any 3×3 skew-symmetric matrix:", options: ["1", "0", "−1", "Cannot be determined"], answer: 1, explain: "|A| = |Aᵀ| = |−A| = −|A|." },
            { kind: "mcq", q: "A linear system has coefficient determinant D ≠ 0. It has:", options: ["No solution", "Unique solution", "Infinitely many solutions", "Exactly two solutions"], answer: 1, explain: "Cramer's rule applies." },
            { kind: "numeric", q: t`For $A = \begin{pmatrix}1&2\\3&4\end{pmatrix}$, $A^2 - 5A + kI = O$. Find k.`, answer: -2, explain: "k = |A| = 4 − 6 = −2." },
          ],
        },
      ],
    },
  ],
};
