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
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Factorise $p(x) = x^3 - 6x^2 + 11x - 6$.",
                "Try small integers that divide the constant 6: $p(1) = 1 - 6 + 11 - 6 = 0$, so $(x - 1)$ is a factor.",
                "Divide: $p(x) = (x - 1)(x^2 - 5x + 6)$.",
                "Factorise the quadratic: $x^2 - 5x + 6 = (x - 2)(x - 3)$.",
                "So $p(x) = (x - 1)(x - 2)(x - 3)$, with zeros 1, 2 and 3.",
              ],
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
              type: "list",
              ordered: true,
              items: [
                "Solve $2x^2 + 3x - 2 = 0$. Here $a = 2$, $b = 3$, $c = -2$.",
                "Discriminant: $D = b^2 - 4ac = 9 + 16 = 25$.",
                "$x = \\dfrac{-3 \\pm 5}{4}$.",
                "So $x = \\tfrac{1}{2}$ or $x = -2$.",
              ],
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
              type: "list",
              ordered: true,
              items: [
                "Find the line through $(1, 3)$ and $(4, 9)$.",
                "Slope: $m = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$.",
                "Substitute $(1, 3)$ into $y = 2x + c$: $3 = 2 + c$, so $c = 1$.",
                "Equation: $y = 2x + 1$.",
              ],
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
              type: "list",
              ordered: true,
              items: [
                "Find the point dividing $A(1, -2)$ to $B(7, 4)$ in the ratio $1 : 2$.",
                "Here $m = 1$, $n = 2$.",
                "$x = \\dfrac{1 \\cdot 7 + 2 \\cdot 1}{3} = 3$ and $y = \\dfrac{1 \\cdot 4 + 2 \\cdot (-2)}{3} = 0$.",
                "So $P = (3, 0)$, one third of the way from A to B.",
              ],
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
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "A right triangle has opposite side 3 and hypotenuse 5 for angle $\\theta$.",
                "Adjacent side by Pythagoras: $\\sqrt{25 - 9} = 4$.",
                "$\\sin\\theta = \\tfrac{3}{5}$, $\\cos\\theta = \\tfrac{4}{5}$, $\\tan\\theta = \\tfrac{3}{4}$.",
              ],
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
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Tower: you are 30 m from its base, elevation of the top is 60°.",
                "The height $h$ is opposite the angle; 30 m is adjacent. Use tan.",
                "$\\tan 60^\\circ = \\dfrac{h}{30} \\Rightarrow h = 30\\sqrt{3}$.",
                "$h \\approx 30 \\times 1.732 \\approx 51.96$ m.",
              ],
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
              type: "text",
              md: "Mean $= \\tfrac{210}{10} = 21$ marks.",
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
              type: "list",
              ordered: true,
              items: [
                "Data: 2, 4, 4, 4, 5, 5, 7, 9. Mean $= \\tfrac{40}{8} = 5$.",
                "Deviations squared: 9, 1, 1, 1, 0, 0, 4, 16. Sum = 32.",
                "Variance $= \\tfrac{32}{8} = 4$.",
                "Standard deviation $= \\sqrt{4} = 2$.",
              ],
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
              type: "heading",
              text: "Worked examples",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Two dice, sum 7.** There are $6 \\times 6 = 36$ outcomes. Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). So $P = \\tfrac{6}{36} = \\tfrac{1}{6}$.",
                "**King or heart** from 52 cards: $\\tfrac{4}{52} + \\tfrac{13}{52} - \\tfrac{1}{52} = \\tfrac{16}{52} = \\tfrac{4}{13}$. (Subtract the king of hearts, counted twice.)",
                "**At least one head** in two coin tosses: $1 - P(\\text{TT}) = 1 - \\tfrac{1}{4} = \\tfrac{3}{4}$.",
              ],
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
              type: "callout",
              tone: "warning",
              title: "Gambler's fallacy",
              md: "After five heads in a row, the next toss is **still** 50–50. Coins have no memory; independent events don't “balance out” in the short run.",
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
          ],
        },
      ],
    },
  ],
};
