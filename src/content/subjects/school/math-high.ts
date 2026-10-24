import type { Subject } from "@/content/types";

export const mathHigh: Subject = {
  slug: "math-high",
  title: "High School Maths",
  world: "school",
  icon: "📈",
  colors: ["#7c3aed", "#ec4899"],
  tagline: "From parabolas to probability: the maths that powers science and tech.",
  description:
    "A Grade 9–12 route through polynomials and quadratics, coordinate geometry, trigonometry, a first taste of calculus, and statistics and probability. Built around the concepts in CBSE/ICSE and Common Core high-school maths, with live graphs, worked examples and exam-style practice.",
  levels: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
  stages: ["secondary"],
  topics: [
    /* ------------------------------------------------------------------ */
    {
      slug: "polynomials-quadratics",
      title: "Polynomials & Quadratics",
      icon: "🎢",
      description: "Polynomial expressions, their zeros, and the quadratic equations behind every parabola.",
      lessons: [
        {
          slug: "polynomials",
          title: "Polynomials",
          summary: "Degree and terms, zeros, the remainder and factor theorems, and algebraic identities.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Engineers model a roller-coaster track, an economist models profit, a game engine models a smooth camera path. Very often, the model is a **polynomial**: a sum of terms like $ax^n$ where $n$ is a whole number.",
            },
            {
              type: "formula",
              tex: "p(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0",
              caption: "The highest power n (with a_n ≠ 0) is the degree.",
            },
            {
              type: "table",
              headers: ["Degree", "Name", "Example"],
              rows: [
                ["0", "Constant", "$7$"],
                ["1", "Linear", "$3x - 2$"],
                ["2", "Quadratic", "$x^2 - 5x + 6$"],
                ["3", "Cubic", "$x^3 - 6x^2 + 11x - 6$"],
              ],
            },
            {
              type: "heading",
              text: "Zeros, remainders and factors",
            },
            {
              type: "text",
              md: "A **zero** of $p(x)$ is a value $k$ with $p(k) = 0$. Graphically it is where the curve meets the $x$-axis. Two theorems connect zeros with division:",
            },
            {
              type: "list",
              items: [
                "**Remainder theorem:** dividing $p(x)$ by $(x - a)$ leaves remainder $p(a)$.",
                "**Factor theorem:** $(x - a)$ is a factor of $p(x)$ exactly when $p(a) = 0$.",
              ],
            },
            {
              type: "example",
              title: "Factorising a cubic",
              problem: "Factorise $p(x) = x^3 - 6x^2 + 11x - 6$.",
              steps: [
                "Try small integers that divide the constant 6: $p(1) = 1 - 6 + 11 - 6 = 0$, so $(x - 1)$ is a factor (**factor theorem**).",
                "Divide: $p(x) = (x - 1)(x^2 - 5x + 6)$.",
                "Factorise the quadratic: $x^2 - 5x + 6 = (x - 2)(x - 3)$.",
              ],
              answer: "$p(x) = (x - 1)(x - 2)(x - 3)$, with zeros 1, 2 and 3.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Is $(x - 2)$ a factor? Put $x = 2$ and check.",
                groups: ["Factor", "Not a factor"],
                items: [
                  { text: "$x^2 - 4$", group: 0, hint: "$p(2) = 4 - 4 = 0$." },
                  { text: "$x^2 - 5x + 6$", group: 0, hint: "$p(2) = 4 - 10 + 6 = 0$." },
                  { text: "$x^3 - 8$", group: 0, hint: "$p(2) = 8 - 8 = 0$." },
                  { text: "$x^3 - 2x^2 + x - 2$", group: 0, hint: "$p(2) = 8 - 8 + 2 - 2 = 0$." },
                  { text: "$x^2 + 4$", group: 1, hint: "$p(2) = 4 + 4 = 8$, not 0." },
                  { text: "$x^2 + x - 2$", group: 1, hint: "$p(2) = 4 + 2 - 2 = 4$. Its factors are $(x + 2)(x - 1)$." },
                  { text: "$x^2 - 2x + 1$", group: 1, hint: "$p(2) = 4 - 4 + 1 = 1$. It is $(x - 1)^2$." },
                ],
                explain: "By the **factor theorem**, $(x - 2)$ is a factor exactly when $p(2) = 0$. Any other value of $p(2)$ is the **remainder**.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Find the remainder when $x^2 + 3x - 5$ is divided by $(x - 2)$.",
                  answer: 5,
                  explain: "$p(2) = 4 + 6 - 5 = 5$.",
                },
              ],
            },
            {
              type: "mistake",
              wrong: "To find the remainder when $p(x)$ is divided by $(x + 1)$, I put $x = 1$.",
              right: "Put $x = -1$: the remainder is $p(-1)$. Always use the value that makes the divisor zero.",
              why: "The plus sign makes $+1$ look natural. But the theorem is about dividing by $(x - a)$, and $x + 1 = x - (-1)$, so $a = -1$.",
            },
            {
              type: "heading",
              text: "Identities worth memorising",
            },
            {
              type: "formula",
              tex: "(a+b)^2 = a^2 + 2ab + b^2 \\qquad (a-b)^2 = a^2 - 2ab + b^2 \\qquad a^2 - b^2 = (a+b)(a-b)",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Mental maths trick",
              md: "$103^2 = (100 + 3)^2 = 10\\,000 + 600 + 9 = 10\\,609$, and $47 \\times 53 = (50 - 3)(50 + 3) = 2500 - 9 = 2491$. Identities make big calculations easy.",
            },
            {
              type: "keypoints",
              items: [
                "Degree = highest power with a non-zero coefficient.",
                "Zero of p: p(k) = 0, where the graph crosses the x-axis.",
                "Remainder of p(x) ÷ (x − a) is p(a).",
                "(x − a) is a factor ⇔ p(a) = 0.",
              ],
            },
          ],
          flashcards: [
            { front: "Degree of $4x^5 - x^2 + 7$", back: "5" },
            { front: "Remainder theorem", back: "When $p(x)$ is divided by $(x - a)$, the remainder is $p(a)$." },
            { front: "Factor theorem", back: "$(x - a)$ is a factor of $p(x)$ if and only if $p(a) = 0$." },
            { front: "$a^2 - b^2$", back: "$(a + b)(a - b)$" },
            { front: "Zero of a polynomial", back: "A value $k$ with $p(k) = 0$; the graph meets the x-axis at $x = k$." },
            { front: "Most zeros a polynomial of degree $n$ can have", back: "$n$ (a quadratic at most 2, a cubic at most 3)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is the degree of $4x^5 - x^2 + 7$?",
              options: ["2", "4", "5", "7"],
              answer: 2,
              explain: "The highest power of $x$ is 5.",
            },
            {
              kind: "numeric",
              q: "Find the remainder when $2x^3 - x + 4$ is divided by $(x + 1)$.",
              answer: 3,
              explain: "Use $a = -1$: $2(-1)^3 - (-1) + 4 = -2 + 1 + 4 = 3$.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "$(x - 3)$ is a factor of $x^2 - 9$.",
              answer: true,
              explain: "$3^2 - 9 = 0$, and indeed $x^2 - 9 = (x - 3)(x + 3)$.",
            },
            {
              kind: "mcq",
              q: "Expand $(x + 5)^2$.",
              options: ["$x^2 + 25$", "$x^2 + 5x + 25$", "$x^2 + 10x + 25$", "$2x + 10$"],
              answer: 2,
              explain: "$(a + b)^2 = a^2 + 2ab + b^2$ with $2ab = 10x$.",
            },
            {
              kind: "numeric",
              q: "$(x - 2)$ is a factor of $x^3 + kx - 10$. Find $k$.",
              answer: 1,
              explain: "Factor theorem: $p(2) = 8 + 2k - 10 = 0$, so $2k = 2$ and $k = 1$.",
              difficulty: 3,
            },
            {
              kind: "mcq",
              q: "The remainder when $x^3 + 2x + 1$ is divided by $(x + 2)$ is:",
              options: ["$13$", "$-11$", "$-3$", "$5$"],
              answer: 1,
              explain: "Use $x = -2$: $-8 - 4 + 1 = -11$. Putting $x = 2$ (giving 13) is the common sign slip.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "quadratic-equations",
          title: "Quadratic Equations & Parabolas",
          summary: "Solving by factorising and by formula, the discriminant, and the shape of y = ax² + bx + c.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Throw a ball, and its path is a parabola. Ask “when does it hit the ground?” and you are solving a **quadratic equation** $ax^2 + bx + c = 0$ with $a \\neq 0$.",
            },
            {
              type: "widget",
              widget: "function-plot",
              props: { kind: "quadratic" },
              caption: "Slide a, b and c. Watch the parabola flip, stretch and slide, and where it crosses the x-axis.",
            },
            {
              type: "heading",
              text: "Method 1: factorising",
            },
            {
              type: "text",
              md: "$x^2 - 5x + 6 = 0$. Find two numbers that multiply to $6$ and add to $-5$: they are $-2$ and $-3$. So $(x - 2)(x - 3) = 0$, giving $x = 2$ or $x = 3$.",
            },
            {
              type: "heading",
              text: "Method 2: the quadratic formula",
            },
            {
              type: "formula",
              tex: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
              caption: "Works for every quadratic.",
            },
            {
              type: "example",
              title: "Using the quadratic formula",
              problem: "Solve $2x^2 + 3x - 2 = 0$.",
              steps: [
                "Read off the coefficients: $a = 2$, $b = 3$, $c = -2$.",
                "**Discriminant:** $D = b^2 - 4ac = 9 - 4(2)(-2) = 9 + 16 = 25$.",
                "$x = \\dfrac{-3 \\pm \\sqrt{25}}{2 \\times 2} = \\dfrac{-3 \\pm 5}{4}$.",
              ],
              answer: "$x = \\tfrac{1}{2}$ or $x = -2$.",
            },
            {
              type: "mistake",
              wrong: "$x^2 = 3x$, so I divide both sides by $x$ and get $x = 3$.",
              right: "Bring everything to one side: $x^2 - 3x = 0$, so $x(x - 3) = 0$ and $x = 0$ or $x = 3$.",
              why: "Dividing by $x$ looks like simplifying, but you cannot divide by $x$ if $x$ might be 0. That step silently throws away the root $x = 0$. A quadratic can have two roots, so look for both.",
            },
            {
              type: "heading",
              text: "The discriminant tells the story",
            },
            {
              type: "table",
              headers: ["$D = b^2 - 4ac$", "Roots", "Graph"],
              rows: [
                ["$D > 0$", "two distinct real roots", "crosses the x-axis twice"],
                ["$D = 0$", "one repeated real root", "touches the x-axis"],
                ["$D < 0$", "no real roots", "never meets the x-axis"],
              ],
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Work out $D = b^2 - 4ac$. Sort by the nature of roots.",
                groups: ["Two distinct real roots", "Two equal real roots", "No real roots"],
                items: [
                  { text: "$x^2 - 5x + 4 = 0$", group: 0, hint: "$D = 25 - 16 = 9 > 0$." },
                  { text: "$x^2 - 2 = 0$", group: 0, hint: "$b = 0$: $D = 0 - 4(1)(-2) = 8 > 0$." },
                  { text: "$x^2 - 6x + 9 = 0$", group: 1, hint: "$D = 36 - 36 = 0$." },
                  { text: "$4x^2 - 4x + 1 = 0$", group: 1, hint: "$D = 16 - 16 = 0$." },
                  { text: "$x^2 + x + 1 = 0$", group: 2, hint: "$D = 1 - 4 = -3 < 0$." },
                  { text: "$2x^2 + 3x + 5 = 0$", group: 2, hint: "$D = 9 - 40 = -31 < 0$." },
                ],
                explain: "The sign of the **discriminant** decides: $D > 0$ two distinct real roots, $D = 0$ two equal roots, $D < 0$ no real roots. You do not need to solve the equation to know this.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Find the discriminant of $x^2 + 4x + 5$.",
                  answer: -4,
                  explain: "$16 - 20 = -4$, so there are no real roots.",
                },
              ],
            },
            {
              type: "heading",
              text: "Vertex and roots",
            },
            {
              type: "list",
              items: [
                "The axis of symmetry is $x = -\\tfrac{b}{2a}$; the vertex lies on it. For $y = x^2 - 4x + 1$: $x = 2$, $y = 4 - 8 + 1 = -3$, so the vertex is $(2, -3)$.",
                "If $a > 0$ the parabola opens up (vertex is a minimum); if $a < 0$ it opens down (maximum).",
                "Sum of roots $= -\\tfrac{b}{a}$, product of roots $= \\tfrac{c}{a}$.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Satellite dishes and car headlights are parabolic. A parabola reflects every incoming parallel ray to one point, the **focus**, which is exactly where the receiver or bulb sits.",
            },
            {
              type: "keypoints",
              items: [
                "Standard form: $ax^2 + bx + c = 0$, $a \\neq 0$.",
                "Formula: $x = \\frac{-b \\pm \\sqrt{D}}{2a}$, $D = b^2 - 4ac$.",
                "Vertex at $x = -b/2a$.",
                "Sum of roots $-b/a$; product $c/a$.",
              ],
            },
          ],
          flashcards: [
            { front: "Quadratic formula", back: "$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$" },
            { front: "$D < 0$ means…", back: "No real roots; the parabola never meets the x-axis." },
            { front: "Axis of symmetry of $y = ax^2 + bx + c$", back: "$x = -\\dfrac{b}{2a}$" },
            { front: "Sum and product of roots", back: "Sum $= -b/a$, product $= c/a$." },
            { front: "$D = 0$ means…", back: "Two equal real roots, $x = -\\dfrac{b}{2a}$; the parabola just touches the x-axis." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Find the larger root of $x^2 - 7x + 10 = 0$.",
              answer: 5,
              explain: "$(x - 2)(x - 5) = 0$, so the roots are 2 and 5.",
            },
            {
              kind: "mcq",
              q: "The equation $x^2 + 4x + 5 = 0$ has…",
              options: ["two distinct real roots", "one repeated root", "no real roots", "infinitely many roots"],
              answer: 2,
              explain: "$D = 16 - 20 = -4 < 0$.",
            },
            {
              kind: "numeric",
              q: "What is the sum of the roots of $3x^2 - 12x + 5 = 0$?",
              answer: 4,
              explain: "Sum $= -b/a = 12/3 = 4$.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "If $a < 0$, the parabola $y = ax^2 + bx + c$ opens downward.",
              answer: true,
              explain: "A negative leading coefficient flips the U into an ∩, so the vertex is a maximum.",
            },
            {
              kind: "numeric",
              q: "Find the x-coordinate of the vertex of $y = 2x^2 - 8x + 3$.",
              answer: 2,
              explain: "$x = -b/2a = 8/4 = 2$.",
            },
            {
              kind: "mcq",
              q: "The roots of $x^2 = 3x$ are:",
              options: ["$3$ only", "$0$ and $3$", "$-3$ and $3$", "$0$ only"],
              answer: 1,
              explain: "$x^2 - 3x = 0 \\Rightarrow x(x - 3) = 0$, so $x = 0$ or $3$. Dividing by $x$ loses the root 0.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "For what value of $k$ does $x^2 - 6x + k = 0$ have two equal roots?",
              answer: 9,
              explain: "Equal roots need $D = 0$: $36 - 4k = 0$, so $k = 9$.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "coordinate-geometry",
      title: "Lines & Coordinate Geometry",
      icon: "📍",
      description: "Straight-line graphs, slope, simultaneous equations, and the distance, midpoint and section formulas.",
      lessons: [
        {
          slug: "linear-graphs",
          title: "Straight Lines & Linear Equations",
          summary: "Slope, intercepts, y = mx + c, parallel and perpendicular lines, and solving pairs of equations.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A mobile plan costs ₹99 per month plus ₹10 per GB. Plot cost against data and you get a **straight line**. Lines are the simplest graphs, and they describe a huge amount of the real world.",
            },
            {
              type: "formula",
              tex: "y = mx + c",
              caption: "m is the slope (steepness), c is the y-intercept (where the line crosses the y-axis).",
            },
            {
              type: "widget",
              widget: "function-plot",
              props: { kind: "linear" },
              caption: "Drag m to tilt the line and c to slide it up and down.",
            },
            {
              type: "heading",
              text: "Slope between two points",
            },
            {
              type: "formula",
              tex: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}",
            },
            {
              type: "example",
              title: "Line through two points",
              problem: "Find the equation of the line through $(1, 3)$ and $(4, 9)$.",
              steps: [
                "Slope: $m = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$.",
                "Substitute $(1, 3)$ into $y = 2x + c$: $3 = 2 + c$, so $c = 1$.",
                "Check with the other point: $2(4) + 1 = 9$. ✓",
              ],
              answer: "$y = 2x + 1$.",
            },
            {
              type: "list",
              items: [
                "**Parallel** lines have equal slopes: $m_1 = m_2$.",
                "**Perpendicular** lines have slopes multiplying to $-1$: $m_1 m_2 = -1$.",
                "The **x-intercept** is found by setting $y = 0$.",
              ],
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Compare the slopes. How are the two lines related?",
                groups: ["Parallel", "Perpendicular", "Neither"],
                items: [
                  { text: "$y = 2x + 1$ and $y = 2x - 3$", group: 0, hint: "Both slopes are 2." },
                  { text: "$y = -2x$ and $y = 4 - 2x$", group: 0, hint: "Both slopes are $-2$." },
                  { text: "$y = 3x$ and $y = -\\tfrac{1}{3}x + 2$", group: 1, hint: "$3 \\times (-\\tfrac{1}{3}) = -1$." },
                  { text: "$y = x + 4$ and $y = -x + 1$", group: 1, hint: "$1 \\times (-1) = -1$." },
                  { text: "$y = 2x$ and $y = -2x$", group: 2, hint: "$2 \\times (-2) = -4$, not $-1$. Changing only the sign is not enough." },
                  { text: "$y = \\tfrac{1}{2}x + 1$ and $y = 2x$", group: 2, hint: "$\\tfrac{1}{2} \\times 2 = 1$, not $-1$. You need the sign flip too." },
                ],
                explain: "Equal slopes mean **parallel**. Slopes whose product is $-1$ (flip the fraction **and** change the sign) mean **perpendicular**.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Find the slope of the line through $(2, -1)$ and $(6, 7)$.",
                  answer: 2,
                  explain: "$\\dfrac{7 - (-1)}{6 - 2} = \\dfrac{8}{4} = 2$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Pairs of linear equations",
            },
            {
              type: "text",
              md: "Two lines usually meet at exactly one point, and that point satisfies **both** equations. Solve $x + y = 10$ and $x - y = 2$ by **elimination**: adding gives $2x = 12$, so $x = 6$ and $y = 4$. The lines cross at $(6, 4)$.",
            },
            {
              type: "mistake",
              wrong: "A line perpendicular to slope $\\tfrac{2}{3}$ has slope $-\\tfrac{2}{3}$.",
              right: "Flip **and** change the sign: the perpendicular slope is $-\\tfrac{3}{2}$, because $\\tfrac{2}{3} \\times (-\\tfrac{3}{2}) = -1$.",
              why: "Changing the sign feels like \"turning\" the line, but $y = \\tfrac{2}{3}x$ and $y = -\\tfrac{2}{3}x$ are only mirror images. For a right angle the product of the slopes must be exactly $-1$.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Plan A: ₹200 + ₹5/GB. Plan B: ₹100 + ₹10/GB. Setting $200 + 5g = 100 + 10g$ gives $g = 20$. Below 20 GB, Plan B is cheaper; above it, Plan A wins. That crossing point is a business decision.",
            },
            {
              type: "keypoints",
              items: [
                "$y = mx + c$: slope m, intercept c.",
                "Slope = rise ÷ run between two points.",
                "Parallel: equal slopes. Perpendicular: product −1.",
                "Solution of two equations = intersection point of their lines.",
              ],
            },
          ],
          flashcards: [
            { front: "Slope formula", back: "$m = \\dfrac{y_2 - y_1}{x_2 - x_1}$" },
            { front: "Condition for perpendicular lines", back: "$m_1 m_2 = -1$" },
            { front: "y-intercept of $y = -3x + 4$", back: "4" },
            { front: "What does the solution of two linear equations represent?", back: "The point where their graphs intersect." },
            { front: "When does $a_1x + b_1y + c_1 = 0$, $a_2x + b_2y + c_2 = 0$ have no solution?", back: "When $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} \\neq \\dfrac{c_1}{c_2}$: the lines are parallel (**inconsistent**)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is the y-intercept of $y = -3x + 4$?",
              options: ["$-3$", "$4$", "$\\tfrac{4}{3}$", "$-4$"],
              answer: 1,
              explain: "In $y = mx + c$, the intercept is $c = 4$.",
            },
            {
              kind: "numeric",
              q: "A line has slope $\\tfrac{2}{3}$. What is the slope of a line perpendicular to it? (decimal)",
              answer: -1.5,
              tolerance: 0.01,
              explain: "$m_2 = -1/m_1 = -\\tfrac{3}{2} = -1.5$.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "The lines $y = 2x + 1$ and $y = 2x - 5$ are parallel.",
              answer: true,
              explain: "Both have slope 2 but different intercepts, so they never meet.",
            },
            {
              kind: "fill",
              q: "The line $y = 2x - 6$ crosses the x-axis at $x =$ ___.",
              answer: ["3"],
              explain: "Set $y = 0$: $2x = 6$, so $x = 3$.",
            },
            {
              kind: "numeric",
              q: "Solve $x + y = 10$ and $x - y = 2$. What is $y$?",
              answer: 4,
              explain: "Adding gives $x = 6$, then $y = 10 - 6 = 4$.",
            },
            {
              kind: "mcq",
              q: "What is the slope of a line perpendicular to $y = 4x - 1$?",
              options: ["$4$", "$-4$", "$\\tfrac{1}{4}$", "$-\\tfrac{1}{4}$"],
              answer: 3,
              explain: "$m_2 = -\\tfrac{1}{4}$ because $4 \\times (-\\tfrac{1}{4}) = -1$. $-4$ only changes the sign.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "The pair $x + 2y = 3$ and $2x + 4y = 7$ has:",
              options: ["exactly one solution", "no solution", "infinitely many solutions", "two solutions"],
              answer: 1,
              explain: "$\\tfrac{1}{2} = \\tfrac{2}{4} \\neq \\tfrac{3}{7}$, so the lines are parallel and never meet.",
              difficulty: 3,
            },
          ],
        },
        {
          slug: "distance-midpoint-section",
          title: "Distance, Midpoint & Area",
          summary: "The distance formula, midpoint and section formulas, and the area of a triangle from coordinates.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A delivery drone sits at $(1, 2)$ on a city grid (in km) and must fly straight to $(4, 6)$. How far is that? Coordinate geometry answers with pure algebra, no ruler needed.",
            },
            {
              type: "heading",
              text: "Distance formula",
            },
            {
              type: "formula",
              tex: "d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}",
              caption: "Pythagoras' theorem on the coordinate grid.",
            },
            {
              type: "text",
              md: "Drone: $d = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = 5$ km.",
            },
            {
              type: "heading",
              text: "Midpoint and section formulas",
            },
            {
              type: "formula",
              tex: "M = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right) \\qquad P = \\left(\\frac{m x_2 + n x_1}{m + n},\\ \\frac{m y_2 + n y_1}{m + n}\\right)",
              caption: "P divides the segment from (x₁, y₁) to (x₂, y₂) internally in the ratio m : n.",
            },
            {
              type: "example",
              title: "Section formula",
              problem: "Find the point P that divides the segment from $A(1, -2)$ to $B(7, 4)$ internally in the ratio $1 : 2$.",
              steps: [
                "Here $m = 1$ (the part next to A) and $n = 2$ (the part next to B).",
                "$x = \\dfrac{m x_2 + n x_1}{m + n} = \\dfrac{1 \\cdot 7 + 2 \\cdot 1}{3} = \\dfrac{9}{3} = 3$.",
                "$y = \\dfrac{m y_2 + n y_1}{m + n} = \\dfrac{1 \\cdot 4 + 2 \\cdot (-2)}{3} = \\dfrac{0}{3} = 0$.",
                "Sense check: a $1 : 2$ split puts P one third of the way from A, so P should be closer to A. It is.",
              ],
              answer: "$P = (3, 0)$.",
            },
            {
              type: "mistake",
              wrong: "In the section formula, $m$ multiplies the first point: $x = \\dfrac{m x_1 + n x_2}{m + n}$.",
              right: "It is a cross-over: $x = \\dfrac{m x_2 + n x_1}{m + n}$. The ratio number next to A multiplies B's coordinate.",
              why: "Pairing $m$ with $x_1$ looks neat, but it gives the point that divides in $n : m$, which sits nearer B. Check your answer: a $1 : 2$ point must be closer to A.",
            },
            {
              type: "activity",
              activity: {
                kind: "match",
                prompt: "Match each description to its point.",
                pairs: [
                  ["Midpoint of $(2, 4)$ and $(8, 6)$", "$(5, 5)$"],
                  ["Midpoint of $(-2, 3)$ and $(4, -1)$", "$(1, 1)$"],
                  ["Divides $(0, 0)$ to $(6, 9)$ in $1 : 2$", "$(2, 3)$"],
                  ["Divides $(0, 0)$ to $(6, 9)$ in $2 : 1$", "$(4, 6)$"],
                ],
                explain: "The midpoint is the $1 : 1$ case, so you just average. For $m : n$, the point is $\\tfrac{m}{m+n}$ of the way from the first point, so $1 : 2$ is one third of the way and $2 : 1$ is two thirds.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What is the midpoint of $(-2, 3)$ and $(6, -5)$?",
                  options: ["$(4, -2)$", "$(2, -1)$", "$(2, 1)$", "$(-4, 4)$"],
                  answer: 1,
                  explain: "$\\left(\\tfrac{-2 + 6}{2}, \\tfrac{3 - 5}{2}\\right) = (2, -1)$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Area of a triangle",
            },
            {
              type: "formula",
              tex: "\\text{Area} = \\tfrac{1}{2}\\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\\right|",
            },
            {
              type: "text",
              md: "If this area comes out as **0**, the three points lie on one straight line: they are **collinear**.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "GPS apps and game engines compute distances between coordinates millions of times per second with exactly this formula (in 3D they simply add a $(z_2 - z_1)^2$ term).",
            },
            {
              type: "keypoints",
              items: [
                "Distance = √(Δx² + Δy²).",
                "Midpoint = average of the coordinates.",
                "Section formula weights the far endpoint by m and the near one by n.",
                "Zero area ⇔ collinear points.",
              ],
            },
          ],
          flashcards: [
            { front: "Distance formula", back: "$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$" },
            { front: "Midpoint formula", back: "$\\left(\\tfrac{x_1 + x_2}{2}, \\tfrac{y_1 + y_2}{2}\\right)$" },
            { front: "How can you test whether three points are collinear?", back: "Their triangle area is 0 (or the slopes between pairs are equal)." },
            { front: "Distance from origin to $(x, y)$", back: "$\\sqrt{x^2 + y^2}$" },
            { front: "Section formula (internal, ratio $m : n$)", back: "$\\left(\\dfrac{m x_2 + n x_1}{m + n}, \\dfrac{m y_2 + n y_1}{m + n}\\right)$" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Find the distance from the origin to $(5, 12)$.",
              answer: 13,
              explain: "$\\sqrt{25 + 144} = \\sqrt{169} = 13$.",
            },
            {
              kind: "mcq",
              q: "What is the midpoint of $(3, 7)$ and $(9, 1)$?",
              options: ["$(6, 4)$", "$(12, 8)$", "$(3, 3)$", "$(6, 3)$"],
              answer: 0,
              explain: "$\\left(\\tfrac{12}{2}, \\tfrac{8}{2}\\right) = (6, 4)$.",
            },
            {
              kind: "numeric",
              q: "Find the area of the triangle with vertices $(1, 1)$, $(4, 1)$ and $(1, 5)$.",
              answer: 6,
              unit: "sq units",
              explain: "It is a right triangle with legs 3 and 4, so area $= \\tfrac{1}{2} \\times 3 \\times 4 = 6$.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "The points $(0, 0)$, $(1, 1)$ and $(2, 2)$ are collinear.",
              answer: true,
              explain: "All lie on $y = x$; the area formula gives 0.",
            },
            {
              kind: "numeric",
              q: "Find the x-coordinate of the point that divides the join of $(-1, 7)$ and $(4, -3)$ in the ratio $2 : 3$.",
              answer: 1,
              explain: "$x = \\dfrac{2 \\cdot 4 + 3 \\cdot (-1)}{5} = \\dfrac{5}{5} = 1$ (and $y = \\dfrac{2(-3) + 3(7)}{5} = 3$).",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "The points $(1, 2)$, $(3, k)$ and $(5, 6)$ are collinear. Find $k$.",
              answer: 4,
              explain: "Area $= \\tfrac{1}{2}|1(k - 6) + 3(6 - 2) + 5(2 - k)| = \\tfrac{1}{2}|16 - 4k| = 0$, so $k = 4$.",
              difficulty: 3,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "trigonometry",
      title: "Trigonometry",
      icon: "📐",
      description: "Ratios in right triangles, identities, heights and distances, and the waves of the sine graph.",
      lessons: [
        {
          slug: "trig-ratios",
          title: "Trigonometric Ratios",
          summary: "Sine, cosine and tangent in a right triangle, plus the standard-angle values.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Around 240 BCE, Eratosthenes estimated the size of the Earth using shadows and angles. Trigonometry, literally “triangle measuring”, lets you find lengths you can never reach with a tape.",
            },
            {
              type: "text",
              md: "In a right triangle, pick an acute angle $\\theta$. Name the sides relative to it: **opposite**, **adjacent** and **hypotenuse** (the longest side, facing the right angle).",
            },
            {
              type: "formula",
              tex: "\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}} \\qquad \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}} \\qquad \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} = \\frac{\\sin\\theta}{\\cos\\theta}",
              caption: "Remember SOH-CAH-TOA.",
            },
            {
              type: "text",
              md: "The reciprocals are $\\csc\\theta = \\tfrac{1}{\\sin\\theta}$, $\\sec\\theta = \\tfrac{1}{\\cos\\theta}$ and $\\cot\\theta = \\tfrac{1}{\\tan\\theta}$.",
            },
            {
              type: "example",
              title: "All ratios from two sides",
              problem: "In a right triangle, the side opposite angle $\\theta$ is 3 and the hypotenuse is 5. Find $\\sin\\theta$, $\\cos\\theta$ and $\\tan\\theta$.",
              steps: [
                "Find the adjacent side by Pythagoras: $\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4$.",
                "$\\sin\\theta = \\tfrac{\\text{opp}}{\\text{hyp}} = \\tfrac{3}{5}$ and $\\cos\\theta = \\tfrac{\\text{adj}}{\\text{hyp}} = \\tfrac{4}{5}$.",
                "$\\tan\\theta = \\tfrac{\\text{opp}}{\\text{adj}} = \\tfrac{3}{4}$.",
              ],
              answer: "$\\sin\\theta = \\tfrac{3}{5}$, $\\cos\\theta = \\tfrac{4}{5}$, $\\tan\\theta = \\tfrac{3}{4}$.",
            },
            {
              type: "heading",
              text: "Standard angles",
            },
            {
              type: "table",
              headers: ["", "0°", "30°", "45°", "60°", "90°"],
              rows: [
                ["sin", "$0$", "$\\tfrac{1}{2}$", "$\\tfrac{1}{\\sqrt{2}}$", "$\\tfrac{\\sqrt{3}}{2}$", "$1$"],
                ["cos", "$1$", "$\\tfrac{\\sqrt{3}}{2}$", "$\\tfrac{1}{\\sqrt{2}}$", "$\\tfrac{1}{2}$", "$0$"],
                ["tan", "$0$", "$\\tfrac{1}{\\sqrt{3}}$", "$1$", "$\\sqrt{3}$", "undefined"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Memory hook",
              md: "Write $\\sqrt{0}, \\sqrt{1}, \\sqrt{2}, \\sqrt{3}, \\sqrt{4}$ and divide each by 2: that is the sine row for 0°, 30°, 45°, 60°, 90°. Read it backwards for cosine.",
            },
            {
              type: "activity",
              activity: {
                kind: "match",
                prompt: "Match each ratio to its exact value.",
                pairs: [
                  ["$\\sin 30^\\circ$", "$\\tfrac{1}{2}$"],
                  ["$\\cos 30^\\circ$", "$\\tfrac{\\sqrt{3}}{2}$"],
                  ["$\\tan 30^\\circ$", "$\\tfrac{1}{\\sqrt{3}}$"],
                  ["$\\tan 45^\\circ$", "$1$"],
                  ["$\\tan 60^\\circ$", "$\\sqrt{3}$"],
                  ["$\\cos 90^\\circ$", "$0$"],
                ],
                explain: "Build the sine row as $\\tfrac{\\sqrt{0}}{2}, \\tfrac{\\sqrt{1}}{2}, \\ldots, \\tfrac{\\sqrt{4}}{2}$, read it backwards for cosine, and get tan as $\\sin \\div \\cos$.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "If $\\sin\\theta = \\tfrac{5}{13}$ and $\\theta$ is acute, what is $\\cos\\theta$?",
                  options: ["$\\tfrac{12}{13}$", "$\\tfrac{8}{13}$", "$\\tfrac{5}{12}$", "$\\tfrac{13}{12}$"],
                  answer: 0,
                  explain: "The adjacent side is $\\sqrt{169 - 25} = 12$, so $\\cos\\theta = \\tfrac{12}{13}$.",
                },
              ],
            },
            {
              type: "mistake",
              wrong: "$\\sin(A + B) = \\sin A + \\sin B$, so $\\sin 90^\\circ = \\sin 30^\\circ + \\sin 60^\\circ$.",
              right: "$\\sin$ is not a number multiplied by the angle, so it does not split over a sum. $\\sin 90^\\circ = 1$, but $\\sin 30^\\circ + \\sin 60^\\circ = \\tfrac{1 + \\sqrt{3}}{2} \\approx 1.37$.",
              why: "$\\sin\\theta$ looks like \"sin times θ\", so learners split it like $a(x + y) = ax + ay$. It is really a ratio of sides that depends on the angle, so you must work it out for the whole angle.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Wheelchair ramp guidelines limit the slope to about 1 : 12. That means $\\tan\\theta \\approx \\tfrac{1}{12}$, an angle of only about 4.8°.",
            },
            {
              type: "keypoints",
              items: [
                "SOH-CAH-TOA.",
                "$\\tan\\theta = \\sin\\theta / \\cos\\theta$.",
                "Know the 0°, 30°, 45°, 60°, 90° table by heart.",
                "csc, sec, cot are reciprocals of sin, cos, tan.",
              ],
            },
          ],
          flashcards: [
            { front: "$\\sin 30^\\circ$", back: "$\\tfrac{1}{2}$" },
            { front: "$\\cos 45^\\circ$", back: "$\\tfrac{1}{\\sqrt{2}} \\approx 0.707$" },
            { front: "$\\tan 60^\\circ$", back: "$\\sqrt{3} \\approx 1.732$" },
            { front: "What does SOH-CAH-TOA stand for?", back: "Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj." },
            { front: "Reciprocal ratios", back: "$\\csc\\theta = \\tfrac{1}{\\sin\\theta}$, $\\sec\\theta = \\tfrac{1}{\\cos\\theta}$, $\\cot\\theta = \\tfrac{1}{\\tan\\theta}$." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "$\\sin 30^\\circ = ?$",
              options: ["$\\tfrac{\\sqrt{3}}{2}$", "$\\tfrac{1}{2}$", "$1$", "$\\tfrac{1}{\\sqrt{2}}$"],
              answer: 1,
              explain: "Standard value: $\\sin 30^\\circ = \\tfrac{1}{2}$.",
            },
            {
              kind: "numeric",
              q: "$\\tan 45^\\circ = ?$",
              answer: 1,
              explain: "At 45° the opposite and adjacent sides are equal.",
            },
            {
              kind: "numeric",
              q: "$\\cos 60^\\circ = ?$ (decimal)",
              answer: 0.5,
              tolerance: 0.001,
              explain: "$\\cos 60^\\circ = \\tfrac{1}{2}$.",
            },
            {
              kind: "fill",
              q: "$\\tan\\theta = \\sin\\theta \\div$ ___",
              answer: ["cos θ", "cos", "cosθ", "cos theta", "cos(θ)"],
              explain: "$\\tfrac{\\text{opp}/\\text{hyp}}{\\text{adj}/\\text{hyp}} = \\tfrac{\\text{opp}}{\\text{adj}}$.",
            },
            {
              kind: "truefalse",
              q: "$\\sin(30^\\circ + 60^\\circ) = \\sin 30^\\circ + \\sin 60^\\circ$",
              answer: false,
              explain: "Left side $= \\sin 90^\\circ = 1$. Right side $= \\tfrac{1}{2} + \\tfrac{\\sqrt{3}}{2} \\approx 1.37$. Trig ratios do not split over a sum.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "If $\\tan A = \\tfrac{3}{4}$ and $A$ is acute, find $\\sin A + \\cos A$ (decimal).",
              answer: 1.4,
              tolerance: 0.001,
              explain: "Sides 3 and 4 give hypotenuse 5, so $\\sin A + \\cos A = \\tfrac{3}{5} + \\tfrac{4}{5} = \\tfrac{7}{5} = 1.4$.",
              difficulty: 3,
            },
          ],
        },
        {
          slug: "identities-heights-distances",
          title: "Identities, Heights & Distances",
          summary: "The Pythagorean identities and using angles of elevation and depression.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "You stand 30 m from the foot of a tower and look up to its top at 60°. Without climbing it, you can find its height in one line. First, a few identities that make trig algebra smooth.",
            },
            {
              type: "formula",
              tex: "\\sin^2\\theta + \\cos^2\\theta = 1 \\qquad 1 + \\tan^2\\theta = \\sec^2\\theta \\qquad 1 + \\cot^2\\theta = \\csc^2\\theta",
              caption: "All three come from Pythagoras: divide a² + b² = c² by c², a² or b².",
            },
            {
              type: "text",
              md: "These hold for **every** angle, which is why $\\sin^2 37^\\circ + \\cos^2 37^\\circ$ is exactly 1 even without a calculator.",
            },
            {
              type: "heading",
              text: "Elevation and depression",
            },
            {
              type: "list",
              items: [
                "**Angle of elevation:** from the horizontal **up** to an object above you.",
                "**Angle of depression:** from the horizontal **down** to an object below you.",
                "Both are measured from a horizontal line at the observer's eye.",
              ],
            },
            {
              type: "example",
              title: "Height of a tower",
              problem: "You stand 30 m from the base of a tower. The angle of elevation of its top is 60°. Find the height of the tower.",
              steps: [
                "Sketch: the tower is the vertical side, the 30 m ground is the horizontal side, and the line of sight is the hypotenuse.",
                "The height $h$ is opposite the 60° angle; 30 m is adjacent. Use tan.",
                "$\\tan 60^\\circ = \\dfrac{h}{30} \\Rightarrow h = 30\\sqrt{3}$.",
                "$h \\approx 30 \\times 1.732 \\approx 51.96$ m.",
              ],
              answer: "$h = 30\\sqrt{3} \\approx 51.96$ m.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Which ratio links the side you know and the side you want?",
                groups: ["tan", "sin", "cos"],
                items: [
                  { text: "Distance from the base known; find the tower's height", group: 0, hint: "Height is opposite, distance is adjacent: opp/adj." },
                  { text: "Sun's elevation and shadow length known; find the pole's height", group: 0, hint: "Pole is opposite, shadow is adjacent." },
                  { text: "Tower's height known; find how far away the boat is", group: 0, hint: "Height is opposite, the distance is adjacent." },
                  { text: "Ladder length known; find how high up the wall it reaches", group: 1, hint: "Ladder is the hypotenuse, height is opposite: opp/hyp." },
                  { text: "Kite string length known; find the kite's height", group: 1, hint: "String is the hypotenuse, height is opposite." },
                  { text: "Ramp length known; find its horizontal run", group: 2, hint: "Ramp is the hypotenuse, the run is adjacent: adj/hyp." },
                ],
                explain: "Name the two sides in play. No hypotenuse involved → **tan**. Hypotenuse with the opposite side → **sin**; with the adjacent side → **cos**.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A 10 m pole casts a shadow when the sun's elevation is 45°. How long is the shadow?",
                  answer: 10,
                  unit: "m",
                  explain: "$\\tan 45^\\circ = 1 = \\tfrac{10}{s}$, so $s = 10$ m.",
                },
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Exam habit",
              md: "Always sketch the triangle, mark the right angle, label the known side and angle, then pick the ratio that links the known and unknown sides.",
            },
            {
              type: "mistake",
              wrong: "From the top of a tower, the angle of depression of a car is the angle between the tower and my line of sight.",
              right: "The **angle of depression** is measured from the **horizontal** at your eye, down to the line of sight. It equals the angle of elevation of the tower top seen from the car.",
              why: "The tower is the only line you can see in the sketch, so learners measure from it. But that gives $90^\\circ$ minus the true angle. The horizontal through the eye is parallel to the ground, so the two angles are **alternate angles** and are equal.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Surveyors use an instrument called a theodolite to measure angles of elevation; combined with one measured distance, they map mountains, plan roads and set out skyscrapers.",
            },
            {
              type: "keypoints",
              items: [
                "$\\sin^2\\theta + \\cos^2\\theta = 1$ for all θ.",
                "$\\sec^2\\theta - \\tan^2\\theta = 1$.",
                "Elevation looks up, depression looks down, both from the horizontal.",
                "Choose the ratio linking the two sides you care about.",
              ],
            },
          ],
          flashcards: [
            { front: "Fundamental Pythagorean identity", back: "$\\sin^2\\theta + \\cos^2\\theta = 1$" },
            { front: "$1 + \\tan^2\\theta = ?$", back: "$\\sec^2\\theta$" },
            { front: "Angle of depression", back: "The angle below the horizontal from the observer's eye to an object below." },
            { front: "Height from distance d and elevation θ", back: "$h = d \\tan\\theta$" },
            { front: "Angle of depression from A to B vs angle of elevation from B to A", back: "Equal (alternate angles between parallel horizontals)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "$\\sin^2 37^\\circ + \\cos^2 37^\\circ = ?$",
              answer: 1,
              explain: "The identity holds for every angle.",
            },
            {
              kind: "numeric",
              q: "A 10 m ladder makes a 60° angle with the ground. How high up the wall does it reach? (2 decimal places)",
              answer: 8.66,
              tolerance: 0.05,
              unit: "m",
              explain: "$h = 10 \\sin 60^\\circ = 10 \\times \\tfrac{\\sqrt{3}}{2} \\approx 8.66$ m.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "$\\sec^2\\theta - \\tan^2\\theta = 1$",
              answer: true,
              explain: "Rearrange $1 + \\tan^2\\theta = \\sec^2\\theta$.",
            },
            {
              kind: "mcq",
              q: "An angle of depression is measured from…",
              options: [
                "the vertical line through the observer",
                "the horizontal line at the observer's eye",
                "the ground at the object",
                "the line joining observer and object",
              ],
              answer: 1,
              explain: "Both elevation and depression are measured from the observer's horizontal.",
            },
            {
              kind: "numeric",
              q: "From the top of a 50 m cliff, the angle of depression of a boat is 30°. How far is the boat from the foot of the cliff? (1 decimal place)",
              answer: 86.6,
              tolerance: 0.1,
              unit: "m",
              explain: "The angle of elevation of the cliff top from the boat is also 30°. $\\tan 30^\\circ = \\tfrac{50}{d}$, so $d = 50\\sqrt{3} \\approx 86.6$ m.",
              difficulty: 3,
            },
            {
              kind: "mcq",
              q: "Simplify $(1 - \\sin^2\\theta)\\sec^2\\theta$.",
              options: ["$0$", "$1$", "$\\tan^2\\theta$", "$\\cos^2\\theta$"],
              answer: 1,
              explain: "$1 - \\sin^2\\theta = \\cos^2\\theta$, and $\\cos^2\\theta \\times \\sec^2\\theta = 1$.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "trig-graphs",
          title: "Radians & the Sine Wave",
          summary: "Radian measure, the unit circle and graphs of y = A sin(Bx).",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Sound, ocean tides, alternating current and the bob of a spring all rise and fall in the same smooth pattern: the **sine wave**. To graph it properly we need a new way to measure angles.",
            },
            {
              type: "heading",
              text: "Radians",
            },
            {
              type: "text",
              md: "One **radian** is the angle that cuts off an arc equal in length to the radius. A full turn is $2\\pi$ radians, so:",
            },
            {
              type: "formula",
              tex: "180^\\circ = \\pi \\text{ rad} \\qquad 1 \\text{ rad} \\approx 57.3^\\circ \\qquad 60^\\circ = \\frac{\\pi}{3}",
            },
            {
              type: "heading",
              text: "From the unit circle to the wave",
            },
            {
              type: "text",
              md: "Walk around a circle of radius 1. At angle $\\theta$ your height is $\\sin\\theta$ and your horizontal position is $\\cos\\theta$. Plot height against angle and the circle unrolls into a wave.",
            },
            {
              type: "widget",
              widget: "function-plot",
              props: { kind: "sine" },
              caption: "Change amplitude and frequency. Taller wave = bigger A; squashed wave = bigger B.",
            },
            {
              type: "table",
              headers: ["Feature of $y = A\\sin(Bx)$", "Value"],
              rows: [
                ["Amplitude (height of a peak)", "$|A|$"],
                ["Period (length of one cycle)", "$\\dfrac{2\\pi}{B}$"],
                ["Range", "$-|A| \\le y \\le |A|$"],
              ],
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Describe $y = 3\\sin 2x$.",
                "Amplitude: $|A| = 3$, so it swings between $-3$ and $3$.",
                "Period: $\\dfrac{2\\pi}{2} = \\pi$, so it repeats twice as often as $\\sin x$.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "How many degrees is $\\tfrac{\\pi}{6}$ radians?",
                  answer: 30,
                  unit: "°",
                  explain: "$\\tfrac{180^\\circ}{6} = 30^\\circ$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Mains electricity in India alternates at 50 Hz: the voltage follows a sine wave with period $\\tfrac{1}{50}$ s, peaking at about 325 V for a 230 V supply.",
            },
            {
              type: "keypoints",
              items: [
                "$\\pi$ rad = 180°.",
                "sin θ is the height on the unit circle.",
                "Amplitude |A|, period 2π/B.",
                "sin x always lies between −1 and 1.",
              ],
            },
          ],
          flashcards: [
            { front: "Convert 180° to radians", back: "$\\pi$" },
            { front: "Period of $\\sin x$", back: "$2\\pi$" },
            { front: "Amplitude of $y = 5\\sin 3x$", back: "5" },
            { front: "Period of $y = \\sin(Bx)$", back: "$\\dfrac{2\\pi}{B}$" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the amplitude of $y = -4\\sin x$?",
              answer: 4,
              explain: "Amplitude is $|A| = |-4| = 4$; the minus sign just flips the wave.",
            },
            {
              kind: "mcq",
              q: "What is the period of $y = \\sin 3x$?",
              options: ["$3\\pi$", "$\\tfrac{2\\pi}{3}$", "$6\\pi$", "$\\tfrac{\\pi}{3}$"],
              answer: 1,
              explain: "Period $= \\tfrac{2\\pi}{B} = \\tfrac{2\\pi}{3}$.",
            },
            {
              kind: "numeric",
              q: "Convert 90° to radians (2 decimal places).",
              answer: 1.57,
              tolerance: 0.01,
              unit: "rad",
              explain: "$90^\\circ = \\tfrac{\\pi}{2} \\approx 1.571$.",
            },
            {
              kind: "truefalse",
              q: "The maximum value of $\\sin x$ is 1.",
              answer: true,
              explain: "On the unit circle the greatest height is the radius, 1.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "intro-calculus",
      title: "Introduction to Calculus",
      icon: "♾️",
      description: "Limits and derivatives: the mathematics of change.",
      lessons: [
        {
          slug: "limits",
          title: "Limits",
          summary: "What it means for f(x) to approach a value, and techniques for evaluating limits.",
          minutes: 20,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Your speedometer shows 60 km/h *right now*. But speed is distance ÷ time, and “right now” has zero time. How can that make sense? The answer is the **limit**, the key idea of calculus.",
            },
            {
              type: "formula",
              tex: "\\lim_{x \\to a} f(x) = L",
              caption: "As x gets closer and closer to a (without having to equal it), f(x) gets closer and closer to L.",
            },
            {
              type: "heading",
              text: "A limit where f(a) is undefined",
            },
            {
              type: "text",
              md: "Let $f(x) = \\dfrac{x^2 - 1}{x - 1}$. At $x = 1$ we get $\\tfrac{0}{0}$, which is undefined. But look close by:",
            },
            {
              type: "table",
              headers: ["$x$", "0.9", "0.99", "0.999", "1.001", "1.01", "1.1"],
              rows: [["$f(x)$", "1.9", "1.99", "1.999", "2.001", "2.01", "2.1"]],
            },
            {
              type: "text",
              md: "The values home in on 2. Algebra confirms it: for $x \\neq 1$, $\\dfrac{(x - 1)(x + 1)}{x - 1} = x + 1$, so the limit is $1 + 1 = 2$.",
            },
            {
              type: "heading",
              text: "Toolkit",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Direct substitution:** if it gives a real number, that is the limit. $\\lim_{x \\to 2}(3x + 1) = 7$.",
                "**Factorise and cancel** when you get $\\tfrac{0}{0}$.",
                "**Limits at infinity:** divide by the highest power. $\\lim_{x \\to \\infty} \\dfrac{2x + 1}{x} = \\lim_{x \\to \\infty} \\left(2 + \\tfrac{1}{x}\\right) = 2$.",
              ],
            },
            {
              type: "formula",
              tex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\quad (x \\text{ in radians})",
              caption: "A famous standard limit.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Evaluate $\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$.",
                  answer: 6,
                  explain: "Factorise: $\\tfrac{(x-3)(x+3)}{x-3} = x + 3 \\to 6$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Zeno's paradox says you can never cross a room because you must first go halfway, then half the rest, and so on. Limits resolve it: $\\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{8} + \\cdots$ has limit exactly 1.",
            },
            {
              type: "keypoints",
              items: [
                "A limit describes behaviour near a point, not at it.",
                "Try substitution first.",
                "0/0 means: simplify, then try again.",
                "$\\lim_{x \\to \\infty} 1/x = 0$.",
              ],
            },
          ],
          flashcards: [
            { front: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$", back: "1" },
            { front: "$\\lim_{x \\to \\infty} \\dfrac{1}{x}$", back: "0" },
            { front: "What should you do if substitution gives 0/0?", back: "Simplify (factorise, cancel or rationalise), then substitute again." },
            { front: "Can a limit exist where f(a) is undefined?", back: "Yes. The limit only depends on values near a." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Evaluate $\\lim_{x \\to 2}(3x + 1)$.",
              answer: 7,
              explain: "Direct substitution: $3(2) + 1 = 7$.",
            },
            {
              kind: "mcq",
              q: "$\\lim_{x \\to 0} \\dfrac{\\sin x}{x} = ?$",
              options: ["0", "1", "∞", "Does not exist"],
              answer: 1,
              explain: "This is a standard limit (with x in radians).",
            },
            {
              kind: "truefalse",
              q: "A limit can exist at $x = a$ even when $f(a)$ is undefined.",
              answer: true,
              explain: "Example: $\\tfrac{x^2 - 1}{x - 1}$ has limit 2 at $x = 1$.",
            },
            {
              kind: "numeric",
              q: "Evaluate $\\lim_{x \\to \\infty} \\dfrac{2x + 1}{x}$.",
              answer: 2,
              explain: "$2 + \\tfrac{1}{x} \\to 2 + 0 = 2$.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "derivatives",
          title: "Derivatives",
          summary: "Slope of a tangent, the derivative from first principles, the power rule, and applications to speed and optimisation.",
          minutes: 22,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "A curve's steepness changes from point to point. The **derivative** gives the exact slope at any single point: the instantaneous rate of change. It is how physicists get velocity from position and how companies find the price that maximises profit.",
            },
            {
              type: "formula",
              tex: "f'(x) = \\frac{dy}{dx} = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}",
              caption: "Slope of a tiny chord, shrunk to a tangent.",
            },
            {
              type: "heading",
              text: "First principles: f(x) = x²",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "$f(x + h) - f(x) = (x + h)^2 - x^2 = 2xh + h^2$.",
                "Divide by $h$: $2x + h$.",
                "Let $h \\to 0$: $f'(x) = 2x$.",
                "So the slope of $y = x^2$ at $x = 3$ is $6$.",
              ],
            },
            {
              type: "heading",
              text: "Rules that save time",
            },
            {
              type: "table",
              headers: ["Function", "Derivative"],
              rows: [
                ["$c$ (constant)", "$0$"],
                ["$x^n$", "$n x^{n-1}$"],
                ["$c \\cdot f(x)$", "$c \\cdot f'(x)$"],
                ["$f(x) + g(x)$", "$f'(x) + g'(x)$"],
                ["$\\sin x$", "$\\cos x$"],
              ],
            },
            {
              type: "text",
              md: "Example: $\\dfrac{d}{dx}\\left(3x^4 - 5x^2 + 7\\right) = 12x^3 - 10x$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "If $f(x) = 4x^3 - 2x$, find $f'(1)$.",
                  answer: 10,
                  explain: "$f'(x) = 12x^2 - 2$, so $f'(1) = 10$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Applications",
            },
            {
              type: "list",
              items: [
                "**Velocity:** if position is $s = t^3 - 6t^2$ m, then $v = \\tfrac{ds}{dt} = 3t^2 - 12t$. At $t = 5$ s, $v = 75 - 60 = 15$ m/s.",
                "**Optimisation:** at a maximum or minimum, the tangent is flat, so $f'(x) = 0$. A rectangle with perimeter 20 has area $A = x(10 - x)$; $A' = 10 - 2x = 0$ gives $x = 5$, a 5 × 5 square with area 25.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Machine-learning models are trained by **gradient descent**: compute the derivative of the error and step the opposite way, repeating millions of times. Every AI model you use was shaped by derivatives.",
            },
            {
              type: "keypoints",
              items: [
                "Derivative = slope of the tangent = instantaneous rate of change.",
                "Power rule: $(x^n)' = nx^{n-1}$.",
                "Constants differentiate to 0.",
                "Max/min occur where $f'(x) = 0$.",
              ],
            },
          ],
          flashcards: [
            { front: "Power rule", back: "$\\dfrac{d}{dx} x^n = n x^{n-1}$" },
            { front: "Derivative of a constant", back: "0" },
            { front: "Derivative of $\\sin x$", back: "$\\cos x$" },
            { front: "How do you find a maximum or minimum?", back: "Solve $f'(x) = 0$ and check the nature of the point." },
            { front: "Velocity from position", back: "$v = \\dfrac{ds}{dt}$" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is the derivative of $x^5$?",
              options: ["$5x^4$", "$x^4$", "$5x^5$", "$\\tfrac{x^6}{6}$"],
              answer: 0,
              explain: "Bring down the power and reduce it by one.",
            },
            {
              kind: "numeric",
              q: "Find the slope of $y = x^2$ at $x = 3$.",
              answer: 6,
              explain: "$y' = 2x = 6$.",
            },
            {
              kind: "truefalse",
              q: "The derivative of a constant function is zero.",
              answer: true,
              explain: "A horizontal line has slope 0 everywhere.",
            },
            {
              kind: "numeric",
              q: "What is the minimum value of $y = x^2 - 6x + 11$?",
              answer: 2,
              explain: "$y' = 2x - 6 = 0$ at $x = 3$; then $y = 9 - 18 + 11 = 2$.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "A particle's position is $s = t^3 - 6t^2$ m. What is its velocity at $t = 5$ s?",
              answer: 15,
              unit: "m/s",
              explain: "$v = 3t^2 - 12t = 75 - 60 = 15$ m/s.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "statistics-probability",
      title: "Statistics & Probability",
      icon: "🎲",
      description: "Summarising data with averages and spread, and measuring chance.",
      lessons: [
        {
          slug: "statistics",
          title: "Averages & Spread",
          summary: "Mean of frequency data, median, mode, variance and standard deviation.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Two batters both average 40 runs. One scores 38–42 every match; the other swings between 0 and 100. Same average, very different players. To tell them apart we need a measure of **spread**.",
            },
            {
              type: "heading",
              text: "Mean of a frequency table",
            },
            {
              type: "formula",
              tex: "\\bar{x} = \\frac{\\sum f_i x_i}{\\sum f_i}",
            },
            {
              type: "table",
              headers: ["Marks $x$", "Students $f$", "$fx$"],
              rows: [
                ["10", "2", "20"],
                ["20", "5", "100"],
                ["30", "3", "90"],
                ["**Total**", "**10**", "**210**"],
              ],
            },
            {
              type: "example",
              title: "Mean from a frequency table",
              problem: "Find the mean mark from the table above (marks 10, 20, 30 scored by 2, 5 and 3 students).",
              steps: [
                "Multiply each mark by its frequency: $10 \\times 2 = 20$, $20 \\times 5 = 100$, $30 \\times 3 = 90$.",
                "Add the products: $\\sum f x = 20 + 100 + 90 = 210$.",
                "Add the frequencies (the number of students): $\\sum f = 2 + 5 + 3 = 10$.",
                "Mean $= \\dfrac{\\sum f x}{\\sum f} = \\dfrac{210}{10}$.",
              ],
              answer: "Mean = 21 marks.",
            },
            {
              type: "mistake",
              wrong: "Mean of the table $= \\dfrac{10 + 20 + 30}{3} = 20$ marks.",
              right: "Weight each mark by its frequency: $\\dfrac{\\sum f x}{\\sum f} = \\dfrac{210}{10} = 21$ marks.",
              why: "Adding the $x$ column feels like \"adding the data\", but the table has 10 students, not 3. Five students scored 20, so 20 must count five times. Divide by $\\sum f$, not by the number of rows.",
            },
            {
              type: "heading",
              text: "Variance and standard deviation",
            },
            {
              type: "formula",
              tex: "\\sigma^2 = \\frac{1}{n}\\sum (x_i - \\bar{x})^2 \\qquad \\sigma = \\sqrt{\\sigma^2}",
              caption: "Average squared distance from the mean, then its square root.",
            },
            {
              type: "example",
              title: "Standard deviation",
              problem: "Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.",
              steps: [
                "Mean $= \\tfrac{40}{8} = 5$.",
                "Squared deviations from 5: 9, 1, 1, 1, 0, 0, 4, 16. Sum = 32.",
                "Variance $= \\tfrac{32}{8} = 4$.",
              ],
              answer: "Standard deviation $= \\sqrt{4} = 2$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is the standard deviation of 3, 3, 3, 3?",
                  answer: 0,
                  explain: "Every value equals the mean, so there is no spread at all.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Which average?",
              md: "The **mean** uses every value but is dragged by outliers. The **median** resists outliers. The **mode** works even for non-numbers (most popular shoe size). For moderately skewed data, Mode ≈ 3 Median − 2 Mean.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Which average fits each job best?",
                groups: ["Mean", "Median", "Mode"],
                items: [
                  { text: "Comparing the average marks of two sections", group: 0, hint: "Every student's mark should count, and there are no wild outliers." },
                  { text: "Average daily rainfall in Mumbai in July", group: 0, hint: "You want total rain shared equally over the days." },
                  { text: "Typical house price on a street with one mansion", group: 1, hint: "One huge value would drag the mean up." },
                  { text: "Typical salary in a firm where the owner earns crores", group: 1, hint: "The median ignores how big the outlier is." },
                  { text: "Which shoe size a shop should stock most", group: 2, hint: "You need the most popular size." },
                  { text: "The most common blood group in a school", group: 2, hint: "Blood groups are not numbers; only the mode works." },
                ],
                explain: "Use the **mean** when every value should count, the **median** when outliers would mislead, and the **mode** for the most popular value (it even works for categories).",
              },
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Factories use standard deviation for quality control: if bolt lengths drift more than about $3\\sigma$ from the target, the machine is stopped and checked.",
            },
            {
              type: "keypoints",
              items: [
                "Frequency mean: Σfx ÷ Σf.",
                "Variance = mean of squared deviations.",
                "SD = √variance, in the same units as the data.",
                "Mean is sensitive to outliers; median is robust.",
              ],
            },
          ],
          flashcards: [
            { front: "Formula for mean of frequency data", back: "$\\bar{x} = \\dfrac{\\sum f x}{\\sum f}$" },
            { front: "Relationship between variance and SD", back: "SD = √variance (variance = SD²)." },
            { front: "Which average is most affected by outliers?", back: "The mean." },
            { front: "Empirical relation", back: "Mode ≈ 3 Median − 2 Mean" },
            { front: "Median of $n$ sorted values ($n$ odd)", back: "The $\\left(\\tfrac{n + 1}{2}\\right)$th value." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Values 1, 2, 3, 4 occur with frequencies 4, 3, 2, 1. Find the mean.",
              answer: 2,
              explain: "$\\Sigma fx = 4 + 6 + 6 + 4 = 20$, $\\Sigma f = 10$, mean $= 2$.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "Which measure is most affected by an extreme outlier?",
              options: ["Median", "Mode", "Mean", "None of them"],
              answer: 2,
              explain: "The mean adds every value, so one huge value pulls it strongly.",
            },
            {
              kind: "numeric",
              q: "Find the median of 12, 15, 11, 18, 20, 14, 16.",
              answer: 15,
              explain: "Sorted: 11, 12, 14, 15, 16, 18, 20. The 4th value is 15.",
            },
            {
              kind: "truefalse",
              q: "Variance is the square of the standard deviation.",
              answer: true,
              explain: "$\\sigma^2$ is variance; $\\sigma$ is the SD.",
            },
            {
              kind: "mcq",
              q: "Marks 5, 10 and 15 are scored by 6, 3 and 1 students. The mean mark is:",
              options: ["$10$", "$7.5$", "$25$", "$3.33$"],
              answer: 1,
              explain: "$\\sum fx = 30 + 30 + 15 = 75$ and $\\sum f = 10$, so mean $= 7.5$. Answering 10 ignores the frequencies.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "The mean of 5 numbers is 18. When one number is removed, the mean of the rest is 16. What number was removed?",
              answer: 26,
              explain: "Total before $= 5 \\times 18 = 90$. Total after $= 4 \\times 16 = 64$. Removed number $= 90 - 64 = 26$.",
              difficulty: 3,
            },
          ],
        },
        {
          slug: "probability",
          title: "Probability",
          summary: "Equally likely outcomes, complements, the addition rule and independent events.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "A weather app says “70% chance of rain.” A board game asks you to roll a 6. Probability puts a number on uncertainty, from 0 (impossible) to 1 (certain).",
            },
            {
              type: "formula",
              tex: "P(E) = \\frac{\\text{number of favourable outcomes}}{\\text{total number of equally likely outcomes}}",
            },
            {
              type: "list",
              items: [
                "$0 \\le P(E) \\le 1$ always.",
                "**Complement:** $P(\\text{not } E) = 1 - P(E)$.",
                "**Addition rule:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
                "**Independent events:** $P(A \\cap B) = P(A) \\times P(B)$.",
              ],
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Sort each event by its probability.",
                groups: ["0 (impossible)", "Between 0 and 1", "1 (sure)"],
                items: [
                  { text: "Rolling a 7 on an ordinary die", group: 0, hint: "A die only shows 1 to 6." },
                  { text: "A month having 32 days", group: 0, hint: "No month has more than 31 days." },
                  { text: "Drawing a king from a full deck", group: 1, hint: "$\\tfrac{4}{52} = \\tfrac{1}{13}$." },
                  { text: "Getting a head when a coin is tossed", group: 1, hint: "$\\tfrac{1}{2}$." },
                  { text: "Rolling a number less than 7 on a die", group: 2, hint: "Every face, 1 to 6, is less than 7." },
                  { text: "Getting a head or a tail when a coin is tossed", group: 2, hint: "One of the two must happen." },
                ],
                explain: "An **impossible event** has probability 0 and a **sure event** has probability 1. Every other event lies strictly between them.",
              },
            },
            {
              type: "example",
              title: "Two dice",
              problem: "Two fair dice are rolled. Find the probability that the sum is 7.",
              steps: [
                "Total equally likely outcomes: $6 \\times 6 = 36$.",
                "Favourable pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). That is 6 outcomes. (3,4) and (4,3) are different outcomes.",
                "$P = \\tfrac{6}{36}$.",
              ],
              answer: "$P(\\text{sum } 7) = \\tfrac{1}{6}$.",
            },
            {
              type: "example",
              title: "King or heart",
              problem: "A card is drawn from a well-shuffled deck of 52. Find P(king or heart).",
              steps: [
                "$P(\\text{king}) = \\tfrac{4}{52}$ and $P(\\text{heart}) = \\tfrac{13}{52}$.",
                "The king of hearts is in both, so subtract it once: $P(\\text{king and heart}) = \\tfrac{1}{52}$.",
                "$\\tfrac{4}{52} + \\tfrac{13}{52} - \\tfrac{1}{52} = \\tfrac{16}{52}$.",
              ],
              answer: "$P(\\text{king or heart}) = \\tfrac{4}{13}$.",
            },
            {
              type: "example",
              title: "Using the complement",
              problem: "Two coins are tossed. Find the probability of at least one head.",
              steps: [
                "Outcomes: HH, HT, TH, TT (4 equally likely).",
                "\"At least one head\" fails only for TT, so $P(\\text{no head}) = \\tfrac{1}{4}$.",
                "$P(\\text{at least one head}) = 1 - \\tfrac{1}{4}$.",
              ],
              answer: "$\\tfrac{3}{4}$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A fair die is rolled. What is the probability of a prime number? (decimal)",
                  answer: 0.5,
                  tolerance: 0.001,
                  explain: "Primes on a die are 2, 3 and 5: $\\tfrac{3}{6} = 0.5$.",
                },
              ],
            },
            {
              type: "mistake",
              wrong: "After five heads in a row, a tail is now more likely. It is \"due\".",
              right: "The next toss is **still** 50–50: $P(\\text{tail}) = \\tfrac{1}{2}$.",
              why: "This is the **gambler's fallacy**. Over thousands of tosses heads and tails come out close to half each, so it feels as if the coin must \"balance out\" soon. But each toss is independent: the coin has no memory of earlier tosses.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "In a room of just 23 people, there is about a 50% chance two share a birthday. Using the complement (“nobody shares”) makes this surprising result easy to compute.",
            },
            {
              type: "keypoints",
              items: [
                "P = favourable ÷ total (equally likely outcomes).",
                "P(not E) = 1 − P(E).",
                "Or: add, then subtract the overlap.",
                "And (independent): multiply.",
              ],
            },
          ],
          flashcards: [
            { front: "Range of any probability", back: "From 0 to 1 inclusive." },
            { front: "Complement rule", back: "$P(\\text{not } E) = 1 - P(E)$" },
            { front: "Addition rule", back: "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$" },
            { front: "Number of outcomes for two dice", back: "36" },
            { front: "Impossible event and sure event", back: "$P(\\text{impossible}) = 0$, $P(\\text{sure}) = 1$." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Two coins are tossed. What is the probability of at least one head?",
              options: ["$\\tfrac{1}{4}$", "$\\tfrac{1}{2}$", "$\\tfrac{3}{4}$", "$1$"],
              answer: 2,
              explain: "Only TT has no head: $1 - \\tfrac{1}{4} = \\tfrac{3}{4}$.",
            },
            {
              kind: "numeric",
              q: "What is the probability of **not** rolling a 6 with a fair die? (decimal)",
              answer: 0.833,
              tolerance: 0.01,
              explain: "$1 - \\tfrac{1}{6} = \\tfrac{5}{6} \\approx 0.833$.",
            },
            {
              kind: "truefalse",
              q: "An event can have probability 1.2.",
              answer: false,
              explain: "Probabilities never exceed 1.",
            },
            {
              kind: "mcq",
              q: "A card is drawn from a standard 52-card deck. P(red card) = ?",
              options: ["$\\tfrac{1}{4}$", "$\\tfrac{1}{2}$", "$\\tfrac{1}{13}$", "$\\tfrac{3}{4}$"],
              answer: 1,
              explain: "26 of the 52 cards are red (hearts and diamonds).",
            },
            {
              kind: "numeric",
              q: "Two dice are rolled. What is P(sum = 12)? (decimal, 3 places)",
              answer: 0.028,
              tolerance: 0.002,
              explain: "Only (6, 6) works: $\\tfrac{1}{36} \\approx 0.028$.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "A fair coin shows heads five times in a row. On the sixth toss, a tail is more likely than a head.",
              answer: false,
              explain: "Tosses are independent, so $P(\\text{tail})$ is still $\\tfrac{1}{2}$. Believing otherwise is the gambler's fallacy.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
  ],
};
