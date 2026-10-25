import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "math-high";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Heron's Formula (CBSE, Karnataka; also used in ICSE Mensuration)    */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-herons-formula",
    title: "Heron's Formula",
    icon: "🔺",
    description: "Find the area of any triangle from its three sides alone, then use it for real plots and quadrilaterals.",
    lessons: [
      {
        slug: "c9-heron-triangle-area",
        title: "Heron's Formula for a Triangle",
        summary: "Semi-perimeter, Heron's formula, and how to use it for scalene, isosceles and equilateral triangles.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: t`A farmer near Mysuru has a triangular field. He can walk along its three sides with a measuring tape, but he cannot easily find its **height** (the perpendicular from a corner to the opposite side). Can he still find its area? Yes — with a formula that needs only the three sides.`,
          },
          { type: "illustration", emoji: "🌾", caption: "Three sides measured with a tape: that is all Heron's formula needs." },
          {
            type: "text",
            md: t`You already know $\text{Area} = \frac{1}{2} \times \text{base} \times \text{height}$. This is easy when the height is given, or when the triangle is right-angled. For other triangles we usually do not know the height.

The Greek mathematician **Heron of Alexandria** (about the 1st century CE) wrote down a formula that uses only the three side lengths $a$, $b$ and $c$.`,
          },
          { type: "heading", text: "Semi-perimeter and the formula" },
          {
            type: "text",
            md: t`First find the **semi-perimeter** $s$. "Semi" means half, so $s$ is half the perimeter: $s = \frac{a+b+c}{2}$.

Then **Heron's formula** gives the area:`,
          },
          { type: "formula", tex: t`\text{Area} = \sqrt{s(s-a)(s-b)(s-c)}, \qquad s = \frac{a+b+c}{2}`, caption: "Heron's formula: works for every triangle." },
          {
            type: "example",
            title: "A scalene triangle",
            problem: t`Find the area of a triangle with sides 13 cm, 14 cm and 15 cm.`,
            steps: [
              t`$s = \frac{13+14+15}{2} = \frac{42}{2} = 21$ cm.`,
              t`$s-a = 21-13 = 8$, $\; s-b = 21-14 = 7$, $\; s-c = 21-15 = 6$.`,
              t`Area $= \sqrt{21 \times 8 \times 7 \times 6} = \sqrt{7056}$.`,
              t`Factorise to take the root: $21 \times 8 \times 7 \times 6 = (3 \times 7)(2^3)(7)(2 \times 3) = 2^4 \times 3^2 \times 7^2$, so the root is $2^2 \times 3 \times 7 = 84$.`,
            ],
            answer: t`Area $= 84\ \text{cm}^2$.`,
          },
          {
            type: "example",
            title: "Sides given as a ratio",
            problem: t`The sides of a triangle are in the ratio $2 : 3 : 4$ and its perimeter is 36 cm. Find its area.`,
            steps: [
              t`Let the sides be $2x, 3x, 4x$. Then $9x = 36$, so $x = 4$ and the sides are 8 cm, 12 cm, 16 cm.`,
              t`$s = 36 \div 2 = 18$; $\; s-a = 10$, $s-b = 6$, $s-c = 2$.`,
              t`Area $= \sqrt{18 \times 10 \times 6 \times 2} = \sqrt{2160} = \sqrt{144 \times 15} = 12\sqrt{15}$.`,
              t`Using $\sqrt{15} \approx 3.873$: area $\approx 46.48\ \text{cm}^2$.`,
            ],
            answer: t`Area $= 12\sqrt{15}\ \text{cm}^2 \approx 46.48\ \text{cm}^2$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`What is the semi-perimeter $s$ of a triangle with sides 7 cm, 8 cm and 9 cm?`,
                answer: 12,
                unit: "cm",
                explain: t`$s = \frac{7+8+9}{2} = \frac{24}{2} = 12$ cm. (Its area is $\sqrt{12 \times 5 \times 4 \times 3} = \sqrt{720} = 12\sqrt{5}$ cm².)`,
              },
            ],
          },
          {
            type: "table",
            headers: ["Triangle", "Sides", "s", "Area by Heron", "Check another way"],
            rows: [
              ["Right-angled", "24, 32, 40 m", "48", t`$\sqrt{48 \times 24 \times 16 \times 8} = 384$ m²`, t`$\frac{1}{2} \times 24 \times 32 = 384$ m²`],
              ["Isosceles", "5, 5, 6 cm", "8", t`$\sqrt{8 \times 3 \times 3 \times 2} = 12$ cm²`, t`height $= \sqrt{5^2 - 3^2} = 4$, so $\frac{1}{2} \times 6 \times 4 = 12$`],
              ["Equilateral", "6, 6, 6 cm", "9", t`$\sqrt{9 \times 3 \times 3 \times 3} = 9\sqrt{3}$ cm²`, t`$\frac{\sqrt{3}}{4} \times 6^2 = 9\sqrt{3}$`],
            ],
          },
          {
            type: "mistake",
            wrong: t`For sides 13, 14, 15, I put the whole perimeter 42 in place of $s$: $\sqrt{42 \times 29 \times 28 \times 27}$.`,
            right: t`Use the **semi**-perimeter: $s = 21$, so the area is $\sqrt{21 \times 8 \times 7 \times 6} = 84$.`,
            why: t`The word "perimeter" sticks in memory, so students forget to halve it. With the full perimeter the answer comes out about four times too big, which is a quick sign that something is wrong.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of Heron's formula in order.",
              items: [
                "Add the three sides to get the perimeter",
                "Halve it to get s",
                "Find s − a, s − b and s − c",
                "Multiply s(s − a)(s − b)(s − c)",
                "Take the square root and write the unit (square units)",
              ],
              explain: t`Halving comes **before** subtracting. A quick check: $(s-a) + (s-b) + (s-c)$ always equals $s$ (here $8 + 7 + 6 = 21$).`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "How marks are given",
            md: t`In board papers you usually get a mark for writing $s$ correctly, a mark for the formula with the values put in, and a mark for the final answer **with square units** (cm², m²). Break the product into prime factors before taking the root — it avoids long multiplication mistakes. If the question says "leave in surd form", stop at an answer like $12\sqrt{15}$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Semi-perimeter $s = \frac{a+b+c}{2}$ — half the perimeter.`,
              t`Heron's formula: Area $= \sqrt{s(s-a)(s-b)(s-c)}$, for **any** triangle.`,
              t`Check: $(s-a)+(s-b)+(s-c) = s$; each bracket must be positive, or the three lengths cannot make a triangle.`,
              "For sides in a ratio, write them as 2x, 3x, … and find x from the perimeter first.",
              "Always write the answer in square units.",
            ],
          },
        ],
        flashcards: [
          { front: "Semi-perimeter s", back: t`Half the perimeter: $s = \frac{a+b+c}{2}$` },
          { front: "Heron's formula", back: t`Area $= \sqrt{s(s-a)(s-b)(s-c)}$` },
          { front: "Who gave the formula?", back: "Heron of Alexandria (about the 1st century CE)" },
          { front: "Area of triangle with sides 13, 14, 15", back: t`$s = 21$; area $= \sqrt{21 \times 8 \times 7 \times 6} = 84$ square units` },
          { front: "Quick check on the brackets", back: t`$(s-a) + (s-b) + (s-c) = s$` },
          { front: "Area of an equilateral triangle of side a", back: t`$\frac{\sqrt{3}}{4}a^2$ (Heron's formula gives the same)` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What is the semi-perimeter of a triangle with sides 10 cm, 17 cm and 21 cm?",
            options: ["48 cm", "24 cm", "16 cm", "12 cm"],
            answer: 1,
            explain: t`$s = \frac{10+17+21}{2} = \frac{48}{2} = 24$ cm. 48 cm is the full perimeter.`,
          },
          {
            kind: "numeric",
            q: "Find the area of a triangle with sides 10 cm, 17 cm and 21 cm (in cm²).",
            answer: 84,
            unit: "cm²",
            difficulty: 2,
            hint: t`$s = 24$, so the brackets are 14, 7 and 3.`,
            explain: t`Area $= \sqrt{24 \times 14 \times 7 \times 3} = \sqrt{7056} = 84$ cm².`,
          },
          {
            kind: "fill",
            q: "In Heron's formula, s stands for the ___ of the triangle.",
            answer: ["semi-perimeter", "semi perimeter", "semiperimeter", "half perimeter", "half the perimeter"],
            explain: t`$s$ is the semi-perimeter, half of $a + b + c$.`,
          },
          {
            kind: "truefalse",
            q: "Heron's formula works only for right-angled triangles.",
            answer: false,
            explain: "It works for every triangle. For a right-angled triangle it gives the same answer as ½ × base × height.",
          },
          {
            kind: "mcq",
            q: "An isosceles triangle has sides 10 cm, 10 cm and 12 cm. Its area is",
            options: ["60 cm²", "120 cm²", "48 cm²", "96 cm²"],
            answer: 2,
            explain: t`$s = 16$; area $= \sqrt{16 \times 6 \times 6 \times 4} = \sqrt{2304} = 48$ cm². 60 comes from ½ × 12 × 10, using the slant side as if it were the height.`,
          },
          {
            kind: "numeric",
            q: "Find the area of an equilateral triangle of side 10 cm, correct to two decimal places (in cm²). Use √3 ≈ 1.732.",
            answer: 43.3,
            tolerance: 0.05,
            unit: "cm²",
            difficulty: 2,
            hint: t`$s = 15$, and each bracket is 5.`,
            explain: t`Area $= \sqrt{15 \times 5 \times 5 \times 5} = 25\sqrt{3} \approx 43.30$ cm². The same as $\frac{\sqrt{3}}{4} \times 100$.`,
          },
          {
            kind: "multi",
            q: "Which sets of lengths (in cm) can be the sides of a triangle, so that Heron's formula gives a real area?",
            options: ["3, 4, 5", "3, 4, 8", "6, 6, 6", "2, 3, 5"],
            answers: [0, 2],
            difficulty: 3,
            hint: "Each side must be shorter than the sum of the other two, so every bracket s − a is positive.",
            explain: t`For 3, 4, 8: $s = 7.5$ and $s - 8 < 0$, so no triangle. For 2, 3, 5: $s = 5$ and $s - 5 = 0$, giving area 0 — the "triangle" is flat. Only 3, 4, 5 and 6, 6, 6 work.`,
          },
          {
            kind: "order",
            q: "Order the working for sides 5, 5, 6.",
            items: ["Perimeter = 16", "s = 8", "Brackets: 3, 3, 2", "Product = 8 × 3 × 3 × 2 = 144", "Area = 12 square units"],
            explain: "Perimeter, then half, then the brackets, then the product and the square root.",
          },
        ],
      },
      {
        slug: "c9-heron-quadrilaterals",
        title: "Heron's Formula for Plots and Quadrilaterals",
        summary: "Split a four-sided plot along a diagonal, use Heron's formula twice, and work out costs.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: t`Most land plots are not triangles. A field in Punjab or a school ground in Chennai may have four sides. To find its area, surveyors use a simple trick: **draw a diagonal**. A diagonal splits any quadrilateral into two triangles, and Heron's formula handles each triangle.`,
          },
          { type: "illustration", emoji: "🗺️", caption: "One diagonal turns a four-sided plot into two triangles." },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`The current (rationalised) NCERT Class 9 book keeps Heron's formula for triangles in its exercises. Quadrilateral and cost problems are the same formula used twice; they appear in ICSE Mensuration and in many state-board and practice papers, so they are good practice for everyone.`,
          },
          {
            type: "text",
            md: t`Why do we need the diagonal? Because **four sides alone do not fix the shape** of a quadrilateral. Think of four sticks joined by loose nails: you can push the frame from a square into a thin rhombus. The sides stay the same, but the area changes. A triangle cannot be pushed out of shape — that is why bridges and roof trusses use triangles.`,
          },
          {
            type: "example",
            title: "Quadrilateral with a right angle",
            problem: t`In quadrilateral ABCD, AB = 9 m, BC = 40 m, CD = 28 m, DA = 15 m and $\angle ABC = 90^\circ$. Find its area.`,
            steps: [
              t`Draw diagonal AC. In right triangle ABC, $AC = \sqrt{9^2 + 40^2} = \sqrt{81 + 1600} = \sqrt{1681} = 41$ m.`,
              t`Area of $\triangle ABC = \frac{1}{2} \times 9 \times 40 = 180$ m².`,
              t`$\triangle ACD$ has sides 41, 28, 15: $s = \frac{84}{2} = 42$; brackets $1, 14, 27$.`,
              t`Area of $\triangle ACD = \sqrt{42 \times 1 \times 14 \times 27} = \sqrt{15876} = 126$ m².`,
              t`Total $= 180 + 126 = 306$ m².`,
            ],
            answer: t`Area of ABCD $= 306$ m².`,
          },
          {
            type: "example",
            title: "Parallelogram from sides and a diagonal",
            problem: t`A parallelogram has sides 30 cm and 14 cm, and one diagonal is 40 cm. Find its area.`,
            steps: [
              t`The diagonal makes two **congruent** triangles, each with sides 30, 14, 40.`,
              t`$s = \frac{30+14+40}{2} = 42$; brackets $12, 28, 2$.`,
              t`One triangle $= \sqrt{42 \times 12 \times 28 \times 2} = \sqrt{28224} = 168$ cm².`,
              t`Parallelogram $= 2 \times 168 = 336$ cm².`,
            ],
            answer: t`Area $= 336$ cm².`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "To find the area of a general quadrilateral with Heron's formula, what must you know?",
                options: ["Only the four sides", "The four sides and one diagonal", "Only the two diagonals", "Only the perimeter"],
                answer: 1,
                explain: "The diagonal splits it into two triangles whose three sides are all known.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`For a quadrilateral I take $s = \frac{a+b+c+d}{2}$ and use $\sqrt{s(s-a)(s-b)(s-c)(s-d)}$.`,
            right: "Draw a diagonal, find the area of each triangle with Heron's formula, then add the two areas.",
            why: t`Copying the triangle formula with one more bracket feels natural, but it is not a real formula (it does not even give square units). Four sides cannot fix the area, because the frame can flex; you need one more measurement, such as a diagonal.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Four 5 cm sticks make a frame. Is its area fixed?",
              emoji: "🪵",
              options: ["Yes, it is always 25 cm²", "No, it can be any value up to 25 cm²"],
              answer: 1,
              trap: 0,
              explain: t`As a square it encloses 25 cm². Push it into a rhombus and the area drops, although every side is still 5 cm. That is why the diagonal is needed.`,
            },
          },
          {
            type: "example",
            title: "Cost of levelling",
            problem: t`A triangular plot has sides 13 m, 14 m and 15 m. Levelling costs ₹20 per m². Find the total cost.`,
            steps: [t`Area $= 84$ m² (from $s = 21$ and $\sqrt{21 \times 8 \times 7 \times 6}$).`, t`Cost $= 84 \times 20 =$ ₹1680.`],
            answer: "The cost is ₹1680.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Draw a rough figure and label the diagonal — examiners give credit for it. Write the two triangle areas separately before adding. In cost questions, write "Cost = Area × Rate" and keep the units: m² × ₹ per m² = ₹.`,
          },
          {
            type: "keypoints",
            items: [
              "A diagonal splits any quadrilateral into two triangles.",
              "Four sides alone do not fix a quadrilateral's area; you need a diagonal (or an angle).",
              "A diagonal of a parallelogram makes two congruent triangles: area = 2 × one triangle.",
              "Cost = Area × Rate per square unit.",
            ],
          },
        ],
        flashcards: [
          { front: "How to find a quadrilateral's area with Heron's formula", back: "Draw a diagonal, use Heron's formula for both triangles, add." },
          { front: "Why can't four sides fix a quadrilateral?", back: "The frame can flex (square → rhombus) without changing side lengths." },
          { front: "A diagonal of a parallelogram divides it into…", back: "Two congruent triangles of equal area" },
          { front: "Cost of levelling or fencing", back: "Cost = area (or length) × rate" },
          { front: "Triangle with sides 41, 28, 15", back: t`$s = 42$; area $= \sqrt{42 \times 1 \times 14 \times 27} = 126$` },
        ],
        quiz: [
          {
            kind: "truefalse",
            q: "If you know the four sides of a quadrilateral, its area is fixed.",
            answer: false,
            explain: "A quadrilateral can flex; a diagonal or an angle is also needed.",
          },
          {
            kind: "numeric",
            q: "A parallelogram has sides 30 cm and 14 cm and a diagonal of 40 cm. Find its area in cm².",
            answer: 336,
            unit: "cm²",
            difficulty: 2,
            hint: "Find the area of one triangle with sides 30, 14, 40 and double it.",
            explain: t`One triangle: $s = 42$, area $= \sqrt{42 \times 12 \times 28 \times 2} = 168$. Twice that is 336 cm².`,
          },
          {
            kind: "fill",
            q: "A diagonal of a parallelogram divides it into two ___ triangles.",
            answer: ["congruent", "equal", "identical"],
            explain: "The two triangles are congruent (SSS), so each has half the area.",
          },
          {
            kind: "numeric",
            q: "A triangular plot has sides 13 m, 14 m and 15 m. Planting grass on it costs ₹15 per m². Find the total cost in ₹.",
            answer: 1260,
            unit: "₹",
            explain: t`Area $= 84$ m², so cost $= 84 \times 15 =$ ₹1260.`,
          },
          {
            kind: "mcq",
            q: "A rhombus has side 10 cm and one diagonal 12 cm. Its area is",
            options: ["120 cm²", "48 cm²", "96 cm²", "60 cm²"],
            answer: 2,
            difficulty: 2,
            hint: "The diagonal 12 cm makes two triangles with sides 10, 10, 12.",
            explain: t`Each triangle: $s = 16$, area $= \sqrt{16 \times 6 \times 6 \times 4} = 48$. The rhombus is $2 \times 48 = 96$ cm². 48 is only one triangle.`,
          },
          {
            kind: "mcq",
            q: "In quadrilateral ABCD, AB = 9 m, BC = 40 m and ∠B = 90°. What is AC?",
            options: ["49 m", "41 m", "31 m", "39 m"],
            answer: 1,
            explain: t`By Pythagoras, $AC = \sqrt{81 + 1600} = \sqrt{1681} = 41$ m. 49 is just 9 + 40.`,
          },
          {
            kind: "order",
            q: "Order the steps for the area of a quadrilateral plot.",
            items: ["Draw a diagonal", "Find s for each triangle", "Use Heron's formula for each triangle", "Add the two areas", "Multiply by the rate if a cost is asked"],
            explain: "Split, find each area, add, and only then work out the cost.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ICSE Mensuration: plane figures                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-plane-mensuration",
    title: "Area and Perimeter of Plane Figures",
    icon: "📏",
    description: "Triangles, quadrilaterals and circles: the area and perimeter formulas, paths, borders, rings and wheels.",
    lessons: [
      {
        slug: "c9-area-triangles-quadrilaterals",
        title: "Triangles and Quadrilaterals",
        summary: "Area and perimeter of triangles, rectangles, squares, parallelograms, rhombuses and trapeziums, with paths and costs.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`Before Diwali, a family wants to tile the floor and put a border of lights around a rangoli. Tiling needs the **area** (the space a flat shape covers, in square units). The border needs the **perimeter** (the total length around the shape, in units of length). Mixing up the two is the most common error in this chapter.`,
          },
          { type: "illustration", emoji: "🪔", caption: "Tiles cover the area; a string of lights goes along the perimeter." },
          { type: "heading", text: "The formulas you need" },
          {
            type: "table",
            headers: ["Figure", "Area", "Perimeter / other"],
            rows: [
              ["Triangle", t`$\frac{1}{2} \times b \times h$, or Heron's formula`, t`$a + b + c$`],
              ["Right triangle (legs p, q)", t`$\frac{1}{2}pq$`, t`hypotenuse $= \sqrt{p^2 + q^2}$`],
              ["Equilateral triangle (side a)", t`$\frac{\sqrt{3}}{4}a^2$`, t`height $= \frac{\sqrt{3}}{2}a$; perimeter $3a$`],
              ["Isosceles triangle (equal sides a, base b)", t`$\frac{b}{4}\sqrt{4a^2 - b^2}$`, t`$2a + b$`],
              ["Rectangle", t`$l \times b$`, t`$2(l + b)$; diagonal $\sqrt{l^2 + b^2}$`],
              ["Square (side a)", t`$a^2$, or $\frac{d^2}{2}$ from diagonal $d$`, t`$4a$; diagonal $a\sqrt{2}$`],
              ["Parallelogram", t`base × **perpendicular** height`, "2 × (sum of adjacent sides)"],
              ["Rhombus (diagonals d₁, d₂)", t`$\frac{1}{2}d_1 d_2$`, t`side $= \frac{1}{2}\sqrt{d_1^2 + d_2^2}$`],
              ["Trapezium (parallel sides a, b; height h)", t`$\frac{1}{2}(a + b)h$`, "sum of all four sides"],
            ],
          },
          {
            type: "text",
            md: t`The **height** (or altitude) of a triangle or parallelogram is always the **perpendicular** distance to the base — not a slanting side. In a rhombus the diagonals cut each other at right angles and bisect each other, which is where the side formula comes from.`,
          },
          {
            type: "example",
            title: "Rhombus from its diagonals",
            problem: t`The diagonals of a rhombus are 24 cm and 10 cm. Find its area and perimeter.`,
            steps: [
              t`Area $= \frac{1}{2} \times 24 \times 10 = 120$ cm².`,
              t`Half-diagonals are 12 cm and 5 cm and meet at 90°, so side $= \sqrt{12^2 + 5^2} = \sqrt{169} = 13$ cm.`,
              t`Perimeter $= 4 \times 13 = 52$ cm.`,
            ],
            answer: "Area = 120 cm², perimeter = 52 cm.",
          },
          {
            type: "example",
            title: "A path around a garden",
            problem: t`A rectangular garden 40 m by 25 m has a path 2.5 m wide all around it, outside. Find the area of the path and the cost of paving it at ₹40 per m².`,
            steps: [
              t`Outer rectangle: $(40 + 2 \times 2.5) \times (25 + 2 \times 2.5) = 45 \times 30 = 1350$ m².`,
              t`Garden: $40 \times 25 = 1000$ m².`,
              t`Path $= 1350 - 1000 = 350$ m².`,
              t`Cost $= 350 \times 40 =$ ₹14,000.`,
            ],
            answer: "Path area = 350 m²; cost = ₹14,000.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "The diagonal of a square is 10 cm. Find its area in cm².",
                answer: 50,
                unit: "cm²",
                explain: t`Area $= \frac{d^2}{2} = \frac{100}{2} = 50$ cm². (Side $= \frac{10}{\sqrt{2}} = 5\sqrt{2}$, and $(5\sqrt{2})^2 = 50$.)`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "A parallelogram with sides 8 cm and 5 cm has area 8 × 5 = 40 cm².",
            right: "Area = base × perpendicular height. With base 8 cm and height 4 cm, the area is 32 cm².",
            why: "It feels like a rectangle, where the side is the height. But a parallelogram leans, so its slanting side is longer than its height. Only when the angle is 90° (a rectangle) does side × side give the area.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each figure to its area formula.",
              pairs: [
                ["Equilateral triangle, side a", "√3⁄4 × a²"],
                ["Rhombus, diagonals d₁ and d₂", "½ × d₁ × d₂"],
                ["Trapezium", "½ × (sum of parallel sides) × height"],
                ["Parallelogram", "base × perpendicular height"],
                ["Square, diagonal d", "d² ⁄ 2"],
              ],
              explain: "A square is also a rhombus with equal diagonals, so ½ × d × d = d²⁄2 — two formulas, one answer.",
            },
          },
          {
            type: "example",
            title: "Working backwards",
            problem: t`An equilateral triangle has area $16\sqrt{3}$ cm². Find its perimeter.`,
            steps: [t`$\frac{\sqrt{3}}{4}a^2 = 16\sqrt{3}$, so $a^2 = 64$ and $a = 8$ cm.`, t`Perimeter $= 3 \times 8 = 24$ cm.`],
            answer: "Perimeter = 24 cm.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: t`Convert all lengths to the **same unit** before you multiply (e.g. 50 cm = 0.5 m). For paths, draw the outer and inner rectangles and subtract — adding the width only once (40 + 2.5 instead of 40 + 5) is the error examiners see most.`,
          },
          {
            type: "keypoints",
            items: [
              "Area is in square units; perimeter is in units of length.",
              "Triangle and parallelogram areas use the perpendicular height, never a slant side.",
              t`Rhombus: area $= \frac{1}{2}d_1 d_2$; its diagonals bisect each other at right angles.`,
              t`Equilateral triangle: area $\frac{\sqrt{3}}{4}a^2$, height $\frac{\sqrt{3}}{2}a$.`,
              "Path or border area = outer area − inner area.",
            ],
          },
        ],
        flashcards: [
          { front: "Area of a trapezium", back: t`$\frac{1}{2} \times$ (sum of parallel sides) $\times$ height` },
          { front: "Area of a rhombus", back: t`$\frac{1}{2}d_1 d_2$` },
          { front: "Height of an equilateral triangle of side a", back: t`$\frac{\sqrt{3}}{2}a$` },
          { front: "Diagonal of a rectangle", back: t`$\sqrt{l^2 + b^2}$` },
          { front: "Area of a square from its diagonal d", back: t`$\frac{d^2}{2}$` },
          { front: "Area of a path outside a rectangle", back: "Outer rectangle area − inner rectangle area (add the width on both sides)" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A trapezium has parallel sides 20 cm and 12 cm and the distance between them is 7 cm. Find its area in cm².",
            answer: 112,
            unit: "cm²",
            explain: t`$\frac{1}{2}(20 + 12) \times 7 = 16 \times 7 = 112$ cm².`,
          },
          {
            kind: "mcq",
            q: "A parallelogram has base 12 cm, a slant side of 7 cm and height 5 cm. Its area is",
            options: ["84 cm²", "60 cm²", "35 cm²", "38 cm²"],
            answer: 1,
            explain: t`Area = base × perpendicular height $= 12 \times 5 = 60$ cm². 84 uses the slant side; 38 is the perimeter.`,
          },
          {
            kind: "truefalse",
            q: "The diagonals of a rhombus bisect each other at right angles.",
            answer: true,
            explain: "That is why the side can be found from the half-diagonals by Pythagoras.",
          },
          {
            kind: "mcq",
            q: "A rectangle is 15 m long and 8 m wide. Its diagonal is",
            options: ["23 m", "17 m", "13 m", "√161 m"],
            answer: 1,
            explain: t`$\sqrt{15^2 + 8^2} = \sqrt{225 + 64} = \sqrt{289} = 17$ m. √161 comes from subtracting the squares.`,
          },
          {
            kind: "numeric",
            q: "A square lawn of side 20 m has a path 2 m wide all around it, outside. Find the area of the path in m².",
            answer: 176,
            unit: "m²",
            difficulty: 2,
            hint: "The outer square has side 20 + 2 + 2.",
            explain: t`Outer $= 24^2 = 576$, lawn $= 400$, path $= 176$ m². Using side 22 (adding 2 only once) wrongly gives 84.`,
          },
          {
            kind: "fill",
            q: "The area of an isosceles triangle with equal sides 5 cm and base 6 cm is ___ cm².",
            answer: ["12"],
            difficulty: 2,
            hint: "The height to the base splits it into two right triangles with hypotenuse 5 and base 3.",
            explain: t`Height $= \sqrt{25 - 9} = 4$, so area $= \frac{1}{2} \times 6 \times 4 = 12$ cm².`,
          },
          {
            kind: "multi",
            q: "Which of these are measured in square units?",
            options: ["Area of a floor to be tiled", "Length of a fence around a field", "Cloth needed to cover a table top", "Length of lace around a handkerchief"],
            answers: [0, 2],
            explain: "Tiling and covering are areas. Fencing and lace go around the edge, so they are perimeters (lengths).",
          },
          {
            kind: "numeric",
            q: "An equilateral triangle has perimeter 18 cm. Find its height in cm, to two decimal places. Use √3 ≈ 1.732.",
            answer: 5.2,
            tolerance: 0.01,
            unit: "cm",
            difficulty: 2,
            explain: t`Side $= 6$ cm, height $= \frac{\sqrt{3}}{2} \times 6 = 3\sqrt{3} \approx 5.196$, about 5.20 cm.`,
          },
        ],
      },
      {
        slug: "c9-circle-area-circumference",
        title: "Circles: Circumference and Area",
        summary: "Circumference, area, semicircles, quadrants, rings and wheels, using π = 22/7.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`A cycle wheel turns once and the cycle moves forward exactly the length of the tyre's rim. That length is the wheel's **circumference** — the perimeter of a circle. The flat space inside the circle is its **area**.`,
          },
          { type: "illustration", emoji: "🚲", caption: "One turn of the wheel = one circumference of road." },
          {
            type: "text",
            md: t`For every circle, circumference ÷ diameter is the same number, called **π** (pi). It is not exactly a fraction, so we use an approximate value. **In this lesson we take $\pi = \frac{22}{7}$** unless a question says $\pi = 3.14$. With $\frac{22}{7}$, choose radii that are multiples of 7 (or 3.5) and the 7 cancels neatly.`,
          },
          { type: "formula", tex: t`C = 2\pi r = \pi d, \qquad A = \pi r^2`, caption: "r = radius, d = diameter = 2r" },
          {
            type: "table",
            headers: ["Shape", "Area", "Perimeter"],
            rows: [
              ["Circle", t`$\pi r^2$`, t`$2\pi r$`],
              ["Semicircle", t`$\frac{1}{2}\pi r^2$`, t`$\pi r + 2r$ (curved part + diameter)`],
              ["Quadrant (quarter circle)", t`$\frac{1}{4}\pi r^2$`, t`$\frac{1}{2}\pi r + 2r$`],
              ["Ring (between circles of radii R and r)", t`$\pi(R^2 - r^2)$`, t`—`],
            ],
          },
          {
            type: "example",
            title: "From circumference to area",
            problem: "The circumference of a circle is 88 cm. Find its area.",
            steps: [
              t`$2\pi r = 88$, so $r = \frac{88 \times 7}{2 \times 22} = 14$ cm.`,
              t`Area $= \frac{22}{7} \times 14 \times 14 = 22 \times 2 \times 14 = 616$ cm².`,
            ],
            answer: "Area = 616 cm².",
          },
          {
            type: "example",
            title: "A wheel",
            problem: "A wheel of diameter 70 cm makes 500 revolutions. How far does it travel?",
            steps: [
              t`Circumference $= \pi d = \frac{22}{7} \times 70 = 220$ cm.`,
              t`Distance $= 500 \times 220 = 110\,000$ cm.`,
              t`$110\,000$ cm $= 1100$ m $= 1.1$ km.`,
            ],
            answer: "It travels 1.1 km.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the area of a circle of diameter 28 cm (in cm²). Take π = 22/7.",
                answer: 616,
                unit: "cm²",
                explain: t`Radius $= 14$ cm, so area $= \frac{22}{7} \times 196 = 616$ cm². Using 28 as the radius gives 2464 — four times too big.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`The perimeter of a semicircle of radius 7 cm is half of $2\pi r$, which is $\frac{22}{7} \times 7 = 22$ cm.`,
            right: t`Perimeter of a semicircle = curved part + diameter $= 22 + 14 = 36$ cm.`,
            why: "The shape is closed by its straight edge, the diameter. Halving the circle's perimeter gives only the curved arc, so the 2r must be added.",
          },
          {
            type: "example",
            title: "A circular ring",
            problem: "A circular park of radius 21 m has a track around it, inside, leaving a lawn of radius 14 m. Find the area of the track.",
            steps: [t`Track $= \pi(R^2 - r^2) = \frac{22}{7}(441 - 196)$.`, t`$= \frac{22}{7} \times 245 = 22 \times 35 = 770$ m².`],
            answer: "Area of the track = 770 m².",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "If a circle's radius doubles, what happens to its area?",
              emoji: "⭕",
              options: ["It doubles", "It becomes 4 times", "It becomes 8 times"],
              answer: 1,
              trap: 0,
              explain: t`Area $= \pi r^2$, so $(2r)^2 = 4r^2$: four times. The circumference ($2\pi r$) only doubles.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: t`Write "Take $\pi = \frac{22}{7}$" (or 3.14, as the question says) at the start. Read carefully whether the **radius** or the **diameter** is given. For ring problems, use $\pi(R^2 - r^2)$, **not** $\pi(R - r)^2$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Circumference $= 2\pi r$; area $= \pi r^2$. We used $\pi = \frac{22}{7}$.`,
              t`Semicircle perimeter $= \pi r + 2r$; quadrant perimeter $= \frac{\pi r}{2} + 2r$.`,
              t`Ring area $= \pi(R^2 - r^2)$.`,
              "Distance in one revolution of a wheel = its circumference.",
              "Doubling the radius doubles the circumference but multiplies the area by 4.",
            ],
          },
        ],
        flashcards: [
          { front: "Circumference of a circle", back: t`$2\pi r = \pi d$` },
          { front: "Area of a circle", back: t`$\pi r^2$` },
          { front: "Perimeter of a semicircle", back: t`$\pi r + 2r$` },
          { front: "Area of a ring", back: t`$\pi(R^2 - r^2)$` },
          { front: "Distance covered in n revolutions", back: "n × circumference" },
          { front: "Value of π used here", back: t`$\frac{22}{7}$ (or 3.14 when the question says so)` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the circumference of a circle of radius 3.5 cm (π = 22/7).",
            answer: 22,
            unit: "cm",
            explain: t`$2 \times \frac{22}{7} \times 3.5 = 22$ cm.`,
          },
          {
            kind: "numeric",
            q: "The area of a circle is 154 cm². Find its radius in cm (π = 22/7).",
            answer: 7,
            unit: "cm",
            explain: t`$r^2 = 154 \times \frac{7}{22} = 49$, so $r = 7$ cm.`,
          },
          {
            kind: "mcq",
            q: "The perimeter of a semicircular plate of radius 14 cm is",
            options: ["44 cm", "88 cm", "72 cm", "58 cm"],
            answer: 2,
            difficulty: 2,
            hint: "Curved part plus the straight diameter.",
            explain: t`$\pi r + 2r = 44 + 28 = 72$ cm. 44 cm is only the arc; 58 adds the radius instead of the diameter.`,
          },
          {
            kind: "truefalse",
            q: "If the radius of a circle is tripled, its circumference is also tripled.",
            answer: true,
            explain: t`Circumference $= 2\pi r$ is proportional to $r$. (The area would become 9 times.)`,
          },
          {
            kind: "fill",
            q: "The region between two circles with the same centre is called a ring or an ___.",
            answer: ["annulus"],
            explain: t`An annulus; its area is $\pi(R^2 - r^2)$.`,
          },
          {
            kind: "numeric",
            q: "A wheel of radius 35 cm covers 1.1 km. How many revolutions does it make? (π = 22/7)",
            answer: 500,
            difficulty: 2,
            hint: "Convert 1.1 km to centimetres first.",
            explain: t`Circumference $= 2 \times \frac{22}{7} \times 35 = 220$ cm; $1.1$ km $= 110\,000$ cm; $110\,000 \div 220 = 500$.`,
          },
          {
            kind: "mcq",
            q: "The circumference and the area of a circle are numerically equal. Its radius is",
            options: ["1 unit", "2 units", "4 units", "π units"],
            answer: 1,
            difficulty: 3,
            hint: t`Set $2\pi r = \pi r^2$.`,
            explain: t`$2\pi r = \pi r^2 \Rightarrow r = 2$ units.`,
          },
          {
            kind: "numeric",
            q: "Find the area of a quadrant of a circle of radius 14 cm, in cm² (π = 22/7).",
            answer: 154,
            unit: "cm²",
            explain: t`$\frac{1}{4} \times \frac{22}{7} \times 196 = \frac{616}{4} = 154$ cm².`,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Cuboid, cube, cylinder (ICSE; Karnataka older book; CBSE revision)  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-cuboid-cube-cylinder",
    title: "Cuboid, Cube and Cylinder",
    icon: "📦",
    description: "Lateral and total surface area, volume and capacity of cuboids, cubes and right circular cylinders.",
    lessons: [
      {
        slug: "c9-cuboid-cube",
        title: "Cuboid and Cube",
        summary: "Lateral surface area, total surface area, volume, diagonal and unit conversions for cuboids and cubes.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: t`A sweet shop in Kolkata packs rasgullas in cardboard boxes. The cardboard needed is a **surface area** (square units). The space inside the box is its **volume** (cubic units). For a container, the volume it can hold is also called its **capacity**, often in litres.`,
          },
          { type: "illustration", emoji: "📦", caption: "Cardboard = surface area. Space inside = volume." },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`**ICSE:** surface area and volume of the cube, cuboid and cylinder are part of Class 9 Mensuration. **Karnataka:** some editions of the state book include them in Surface Areas and Volumes — follow your textbook. **CBSE:** the current NCERT Class 9 chapter starts with the cone; treat this as quick revision from earlier classes.`,
          },
          {
            type: "text",
            md: t`A **cuboid** has length $l$, breadth $b$ and height $h$. It has 6 rectangular faces. The 4 side faces (walls) make the **lateral surface area (LSA)**, also called the curved or side surface area. All 6 faces together make the **total surface area (TSA)**. A **cube** is a cuboid with all edges equal to $a$.`,
          },
          {
            type: "table",
            headers: ["", "Cuboid", "Cube"],
            rows: [
              ["Lateral surface area", t`$2h(l + b)$`, t`$4a^2$`],
              ["Total surface area", t`$2(lb + bh + hl)$`, t`$6a^2$`],
              ["Volume", t`$l \times b \times h$`, t`$a^3$`],
              ["Diagonal", t`$\sqrt{l^2 + b^2 + h^2}$`, t`$a\sqrt{3}$`],
            ],
          },
          {
            type: "list",
            items: [
              t`$1\ \text{cm}^3 = 1\ \text{mL}$, so $1000\ \text{cm}^3 = 1$ litre.`,
              t`$1\ \text{m}^3 = 1000$ litres $= 10^6\ \text{cm}^3$.`,
            ],
          },
          {
            type: "example",
            title: "Painting a room",
            problem: "A room is 6 m long, 4.5 m wide and 3.5 m high. Find the cost of painting its four walls and ceiling at ₹30 per m² (ignore doors and windows).",
            steps: [
              t`Four walls $= 2h(l + b) = 2 \times 3.5 \times (6 + 4.5) = 7 \times 10.5 = 73.5$ m².`,
              t`Ceiling $= l \times b = 6 \times 4.5 = 27$ m².`,
              t`Total $= 73.5 + 27 = 100.5$ m².`,
              t`Cost $= 100.5 \times 30 =$ ₹3015.`,
            ],
            answer: "The cost is ₹3015.",
          },
          {
            type: "example",
            title: "Capacity of a tank",
            problem: "A water tank is 2.5 m long, 1.6 m wide and 1.2 m deep. How many litres can it hold?",
            steps: [t`Volume $= 2.5 \times 1.6 \times 1.2 = 4 \times 1.2 = 4.8$ m³.`, t`$4.8 \times 1000 = 4800$ litres.`],
            answer: "4800 litres.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the length of the longest rod that fits in a box 12 cm × 9 cm × 8 cm (in cm).",
                answer: 17,
                unit: "cm",
                explain: t`Diagonal $= \sqrt{144 + 81 + 64} = \sqrt{289} = 17$ cm.`,
              },
              {
                kind: "numeric",
                q: "A cube has total surface area 486 cm². Find its volume in cm³.",
                answer: 729,
                unit: "cm³",
                difficulty: 2,
                explain: t`$6a^2 = 486 \Rightarrow a^2 = 81 \Rightarrow a = 9$; volume $= 9^3 = 729$ cm³.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "If I double every edge of a cube, its volume doubles too.",
            right: t`Doubling every edge multiplies the surface area by $2^2 = 4$ and the volume by $2^3 = 8$.`,
            why: t`It feels like "double in, double out", but volume multiplies three lengths. $(2a)^3 = 8a^3$: you could fit 8 of the old cubes inside the new one.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the job about surface area or volume?",
              groups: ["Surface area", "Volume"],
              items: [
                { text: "Wrapping paper for a gift box", group: 0, hint: "Paper covers the outside faces." },
                { text: "Water a tank can hold", group: 1, hint: "This is the space inside: capacity." },
                { text: "Painting the walls of a room", group: 0, hint: "Paint covers faces: square metres." },
                { text: "Earth dug out for a pit", group: 1, hint: "The pit is a hollow space: cubic metres." },
                { text: "Tin sheet to make a closed box", group: 0, hint: "The sheet forms the faces." },
                { text: "Rice that fills a storage bin", group: 1, hint: "Filling is about space inside." },
              ],
              explain: "Covering, painting or making the outside is surface area (m², cm²). Filling, holding or digging out is volume (m³, cm³, litres).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: t`Read the words: "four walls" means LSA; "open box" means TSA minus the lid ($lb + 2h(l + b)$); "closed box" means full TSA. Convert all lengths to one unit first, and convert m³ to litres only at the end.`,
          },
          {
            type: "keypoints",
            items: [
              t`Cuboid: LSA $= 2h(l+b)$, TSA $= 2(lb+bh+hl)$, $V = lbh$.`,
              t`Cube: LSA $= 4a^2$, TSA $= 6a^2$, $V = a^3$, diagonal $= a\sqrt{3}$.`,
              t`$1000\ \text{cm}^3 = 1$ L and $1\ \text{m}^3 = 1000$ L.`,
              "Scaling every length by k multiplies area by k² and volume by k³.",
            ],
          },
        ],
        flashcards: [
          { front: "TSA of a cuboid", back: t`$2(lb + bh + hl)$` },
          { front: "LSA (four walls) of a cuboid", back: t`$2h(l + b)$` },
          { front: "Diagonal of a cuboid", back: t`$\sqrt{l^2 + b^2 + h^2}$` },
          { front: "TSA and volume of a cube", back: t`$6a^2$ and $a^3$` },
          { front: "1 m³ in litres", back: "1000 litres" },
          { front: "Open box (no lid) surface area", back: t`$lb + 2h(l + b)$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The total surface area of a cube of edge 5 cm is",
            options: ["100 cm²", "125 cm²", "150 cm²", "25 cm²"],
            answer: 2,
            explain: t`$6a^2 = 6 \times 25 = 150$ cm². 100 is the LSA ($4a^2$) and 125 is the volume.`,
          },
          {
            kind: "numeric",
            q: "Find the volume of a cuboid 10 cm × 8 cm × 5 cm (in cm³).",
            answer: 400,
            unit: "cm³",
            explain: t`$10 \times 8 \times 5 = 400$ cm³.`,
          },
          {
            kind: "truefalse",
            q: "If each edge of a cube is doubled, its volume becomes double.",
            answer: false,
            explain: t`It becomes $2^3 = 8$ times.`,
          },
          {
            kind: "fill",
            q: "1 m³ = ___ litres.",
            answer: ["1000", "1,000"],
            explain: t`$1\ \text{m}^3 = 100 \times 100 \times 100$ cm³ $= 10^6$ cm³, and 1000 cm³ make 1 litre.`,
          },
          {
            kind: "numeric",
            q: "How many bricks of size 20 cm × 10 cm × 7.5 cm are needed for a wall 5 m long, 0.3 m thick and 2 m high? (Ignore mortar.)",
            answer: 2000,
            difficulty: 2,
            hint: "Convert the wall to cm³, or the brick to m³, before dividing.",
            explain: t`Wall $= 5 \times 0.3 \times 2 = 3$ m³ $= 3\,000\,000$ cm³. Brick $= 1500$ cm³. Number $= 3\,000\,000 \div 1500 = 2000$.`,
          },
          {
            kind: "numeric",
            q: "An open box (no lid) is 10 cm long, 8 cm wide and 6 cm high. Find the area of cardboard needed, in cm².",
            answer: 296,
            unit: "cm²",
            difficulty: 2,
            hint: "Base + four walls; no top.",
            explain: t`$lb + 2h(l + b) = 80 + 2 \times 6 \times 18 = 80 + 216 = 296$ cm². The closed box would need 376 cm².`,
          },
          {
            kind: "multi",
            q: "Which of these are measured in cubic units?",
            options: ["Milk in a carton", "Paint for a wall", "Soil dug out for a well", "Paper to cover a book"],
            answers: [0, 2],
            explain: "Milk and soil fill a space (volume). Paint and paper cover a surface (area).",
          },
        ],
      },
      {
        slug: "c9-cylinder",
        title: "Right Circular Cylinder",
        summary: "Curved surface area, total surface area and volume of solid and hollow cylinders, with rollers and tanks.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`A steel glass, a gas cylinder and a road roller are all **right circular cylinders**: two equal circular ends, joined by a curved side that stands straight (at right angles) on the base. The cylinder has a **radius** $r$ and a **height** $h$.`,
          },
          { type: "illustration", emoji: "🥫", caption: "Unroll the label of a tin and you get a rectangle." },
          {
            type: "text",
            md: t`Peel the label off a tin and open it flat. It becomes a **rectangle**: one side is the height $h$, the other is the circumference of the base, $2\pi r$. So the **curved surface area (CSA)** is $2\pi r h$. Add the two circular ends to get the **total surface area (TSA)**. **We take $\pi = \frac{22}{7}$** in this lesson.`,
          },
          {
            type: "formula",
            tex: t`\text{CSA} = 2\pi r h, \quad \text{TSA} = 2\pi r(r + h), \quad V = \pi r^2 h`,
            caption: "Right circular cylinder of radius r and height h",
          },
          {
            type: "example",
            title: "All three at once",
            problem: "A closed cylinder has radius 7 cm and height 10 cm. Find its CSA, TSA and volume.",
            steps: [
              t`CSA $= 2 \times \frac{22}{7} \times 7 \times 10 = 440$ cm².`,
              t`TSA $= 2 \times \frac{22}{7} \times 7 \times (7 + 10) = 44 \times 17 = 748$ cm².`,
              t`Volume $= \frac{22}{7} \times 7 \times 7 \times 10 = 1540$ cm³ $= 1.54$ litres.`,
            ],
            answer: "CSA = 440 cm², TSA = 748 cm², volume = 1540 cm³.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the curved surface area of a cylinder with radius 3.5 cm and height 10 cm (in cm²).",
                answer: 220,
                unit: "cm²",
                explain: t`$2 \times \frac{22}{7} \times 3.5 \times 10 = 22 \times 10 = 220$ cm².`,
              },
            ],
          },
          {
            type: "table",
            headers: ["Object", "Which formula?"],
            rows: [
              ["Label on a tin, a pipe's outside", t`CSA $2\pi rh$`],
              ["Closed tin made of metal", t`TSA $2\pi r(r + h)$`],
              ["Tank open at the top", t`$\pi r^2 + 2\pi rh$ (one end only)`],
              ["Metal in a hollow pipe (outer R, inner r)", t`$\pi(R^2 - r^2)h$`],
              ["Area pressed by a roller in one turn", t`CSA $2\pi rh$`],
            ],
          },
          {
            type: "example",
            title: "A road roller",
            problem: "A roller has diameter 1.4 m and length 2 m. It makes 500 revolutions to level a playground. Find the area levelled.",
            steps: [
              t`$r = 0.7$ m. Area in one revolution $=$ CSA $= 2 \times \frac{22}{7} \times 0.7 \times 2 = 8.8$ m².`,
              t`Area $= 500 \times 8.8 = 4400$ m².`,
            ],
            answer: "4400 m².",
          },
          {
            type: "example",
            title: "A hollow pipe",
            problem: "A metal pipe is 14 cm long. Its outer radius is 5 cm and inner radius is 4 cm. Find the volume of metal.",
            steps: [t`$V = \pi(R^2 - r^2)h = \frac{22}{7} \times (25 - 16) \times 14$.`, t`$= 22 \times 9 \times 2 = 396$ cm³.`],
            answer: "396 cm³ of metal.",
          },
          {
            type: "mistake",
            wrong: t`A can has diameter 14 cm and height 10 cm, so $V = \frac{22}{7} \times 14^2 \times 10 = 6160$ cm³.`,
            right: t`Use the radius: $r = 7$, so $V = \frac{22}{7} \times 7^2 \times 10 = 1540$ cm³.`,
            why: "Questions often give the diameter because it is easy to measure. Squaring the diameter instead of the radius makes the answer 4 times too big. Halve it first.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "A 22 cm × 28 cm sheet is rolled into a tube two ways. Which holds more?",
              emoji: "📄",
              options: ["The tall, thin tube (height 28 cm)", "The short, wide tube (height 22 cm)", "Both hold the same"],
              answer: 1,
              trap: 2,
              explain: t`Both have the same CSA (616 cm²), but not the same volume. Tall: $r = 3.5$, $V = 1078$ cm³. Short: $2\pi r = 28$ gives $r = \frac{49}{11}$, $V = 1372$ cm³. A wider radius counts twice ($r^2$), height only once.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: t`Check whether the object is **open or closed**, **solid or hollow**, and whether the radius or diameter is given. Write $\pi = \frac{22}{7}$ in the first line. In cost questions, find the area first and multiply by the rate at the end.`,
          },
          {
            type: "keypoints",
            items: [
              t`CSA $= 2\pi rh$ (the unrolled rectangle).`,
              t`TSA $= 2\pi r(r + h)$; an open-top tank uses $\pi r^2 + 2\pi rh$.`,
              t`Volume $= \pi r^2 h$; hollow cylinder material $= \pi(R^2 - r^2)h$.`,
              "One revolution of a roller covers its curved surface area.",
            ],
          },
        ],
        flashcards: [
          { front: "CSA of a cylinder", back: t`$2\pi rh$` },
          { front: "TSA of a closed cylinder", back: t`$2\pi r(r + h)$` },
          { front: "Volume of a cylinder", back: t`$\pi r^2 h$` },
          { front: "Volume of metal in a hollow cylinder", back: t`$\pi(R^2 - r^2)h$` },
          { front: "Area covered by a roller in n turns", back: t`$n \times 2\pi rh$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the volume of a cylinder of radius 14 cm and height 5 cm (π = 22/7), in cm³.",
            answer: 3080,
            unit: "cm³",
            explain: t`$\frac{22}{7} \times 196 \times 5 = 616 \times 5 = 3080$ cm³.`,
          },
          {
            kind: "mcq",
            q: "The total surface area of a closed cylinder is",
            options: [t`$2\pi rh$`, t`$2\pi r(r + h)$`, t`$\pi r^2 h$`, t`$\pi r(r + 2h)$`],
            answer: 1,
            explain: t`CSA $2\pi rh$ plus two ends $2\pi r^2$ gives $2\pi r(r + h)$. $\pi r(r + 2h)$ has only one end (an open tank).`,
          },
          {
            kind: "numeric",
            q: "Find the curved surface area of a pillar of radius 7 cm and height 20 cm (π = 22/7), in cm².",
            answer: 880,
            unit: "cm²",
            explain: t`$2 \times \frac{22}{7} \times 7 \times 20 = 44 \times 20 = 880$ cm².`,
          },
          {
            kind: "truefalse",
            q: "Two cylinders made by rolling the same rectangular sheet in two different ways have the same curved surface area.",
            answer: true,
            explain: "The curved surface is the sheet itself. Their volumes are different, though.",
          },
          {
            kind: "fill",
            q: "A tin holds 1540 cm³. This is ___ litres.",
            answer: ["1.54"],
            explain: t`$1540 \div 1000 = 1.54$ L.`,
          },
          {
            kind: "mcq",
            q: "A can has diameter 14 cm and height 10 cm. Its volume (π = 22/7) is",
            options: ["6160 cm³", "1540 cm³", "440 cm³", "3080 cm³"],
            answer: 1,
            explain: t`$r = 7$: $\frac{22}{7} \times 49 \times 10 = 1540$ cm³. 6160 squares the diameter; 440 is the CSA.`,
          },
          {
            kind: "numeric",
            q: "A cylindrical tank open at the top has radius 3.5 m and height 4 m. Find the area of metal sheet needed, in m² (π = 22/7).",
            answer: 126.5,
            unit: "m²",
            difficulty: 3,
            hint: "One circular base plus the curved surface.",
            explain: t`Base $= \frac{22}{7} \times 12.25 = 38.5$; CSA $= 2 \times \frac{22}{7} \times 3.5 \times 4 = 88$. Total $= 126.5$ m².`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Cone, sphere, hemisphere (CBSE & Karnataka Class 9)                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-cone-sphere-hemisphere",
    title: "Cone, Sphere and Hemisphere",
    icon: "🍦",
    description: "Slant height, surface areas and volumes of right circular cones, spheres and hemispheres.",
    lessons: [
      {
        slug: "c9-cone-sphere-surface",
        title: "Surface Areas of Cone, Sphere and Hemisphere",
        summary: "Slant height, curved and total surface area of a cone, and surface areas of spheres and hemispheres.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`An ice-cream cone, a birthday cap and a tent in a mela are **right circular cones**. A football or a laddoo is a **sphere**, and a bowl is close to a **hemisphere** (half a sphere). This lesson finds how much material covers each one.`,
          },
          { type: "illustration", emoji: "🎉", caption: "A party cap is the curved surface of a cone." },
          {
            type: "text",
            md: t`A right circular cone has a circular base of radius $r$ and a pointed top called the **vertex**. The **height** $h$ is the straight-up distance from the vertex to the centre of the base. The **slant height** $l$ is the distance from the vertex to any point on the edge of the base. Radius, height and slant height make a right triangle, so $l^2 = r^2 + h^2$.

We take $\pi = \frac{22}{7}$ unless the question says $\pi = 3.14$.`,
          },
          {
            type: "table",
            headers: ["Solid", "Curved surface area", "Total surface area"],
            rows: [
              ["Cone", t`$\pi r l$`, t`$\pi r(l + r)$`],
              ["Sphere", t`$4\pi r^2$ (all of it is curved)`, t`$4\pi r^2$`],
              ["Hemisphere", t`$2\pi r^2$`, t`$3\pi r^2$ (solid: curved part + flat circle)`],
            ],
          },
          {
            type: "example",
            title: "A cone",
            problem: "A cone has radius 7 cm and height 24 cm. Find its slant height, CSA and TSA.",
            steps: [
              t`$l = \sqrt{7^2 + 24^2} = \sqrt{49 + 576} = \sqrt{625} = 25$ cm.`,
              t`CSA $= \pi rl = \frac{22}{7} \times 7 \times 25 = 550$ cm².`,
              t`TSA $= \pi r(l + r) = 22 \times (25 + 7) = 704$ cm².`,
            ],
            answer: "l = 25 cm, CSA = 550 cm², TSA = 704 cm².",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A cone has radius 5 cm and height 12 cm. Find its slant height in cm.",
                answer: 13,
                unit: "cm",
                explain: t`$l = \sqrt{25 + 144} = \sqrt{169} = 13$ cm.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`For the cone with $r = 7$, $h = 24$, the CSA is $\pi r h = \frac{22}{7} \times 7 \times 24 = 528$ cm².`,
            right: t`Use the slant height: CSA $= \pi r l = \frac{22}{7} \times 7 \times 25 = 550$ cm².`,
            why: t`The cylinder formula uses $h$, so students carry it over. But the cone's surface slopes; the paper of a cap runs along the slant edge, which is longer than the height.`,
          },
          {
            type: "example",
            title: "Sphere and hemisphere",
            problem: "Find (a) the surface area of a ball of radius 7 cm, (b) the inner curved surface of a bowl of radius 10.5 cm, (c) the TSA of a solid hemisphere of radius 7 cm.",
            steps: [
              t`(a) $4\pi r^2 = 4 \times \frac{22}{7} \times 49 = 616$ cm².`,
              t`(b) $2\pi r^2 = 2 \times \frac{22}{7} \times 110.25 = 693$ cm².`,
              t`(c) $3\pi r^2 = 3 \times \frac{22}{7} \times 49 = 462$ cm².`,
            ],
            answer: "616 cm², 693 cm² and 462 cm².",
          },
          {
            type: "example",
            title: "Canvas for a tent (π = 3.14)",
            problem: "A conical tent is 8 m high with base radius 6 m. How much canvas is needed? Take π = 3.14.",
            steps: [t`$l = \sqrt{36 + 64} = 10$ m.`, t`Canvas $=$ CSA $= 3.14 \times 6 \times 10 = 188.4$ m². (No canvas on the floor.)`],
            answer: "188.4 m² of canvas.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each surface to its formula.",
              pairs: [
                ["Curved surface of a cone", "πrl"],
                ["Total surface of a cone", "πr(l + r)"],
                ["Surface of a sphere", "4πr²"],
                ["Curved surface of a hemisphere", "2πr²"],
                ["Total surface of a solid hemisphere", "3πr²"],
              ],
              explain: "A hemisphere's curved part is half of 4πr², which is 2πr². A solid hemisphere also has a flat circle πr², giving 3πr².",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`If $h$ is given, find $l$ first and show the Pythagoras step — it carries a mark. Decide what the question wants: a tent or cap needs only the **curved** surface; a solid toy needs the **total** surface. Write the unit as cm² or m².`,
          },
          {
            type: "keypoints",
            items: [
              t`Slant height $l = \sqrt{r^2 + h^2}$.`,
              t`Cone: CSA $= \pi rl$, TSA $= \pi r(l + r)$.`,
              t`Sphere: $4\pi r^2$. Hemisphere: CSA $2\pi r^2$, solid TSA $3\pi r^2$.`,
              "Doubling the radius of a sphere multiplies its surface area by 4.",
            ],
          },
        ],
        flashcards: [
          { front: "Slant height of a cone", back: t`$l = \sqrt{r^2 + h^2}$` },
          { front: "CSA of a cone", back: t`$\pi rl$` },
          { front: "TSA of a cone", back: t`$\pi r(l + r)$` },
          { front: "Surface area of a sphere", back: t`$4\pi r^2$` },
          { front: "CSA and TSA of a hemisphere", back: t`$2\pi r^2$ and $3\pi r^2$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the curved surface area of a cone with radius 7 cm and slant height 10 cm (π = 22/7), in cm².",
            answer: 220,
            unit: "cm²",
            explain: t`$\frac{22}{7} \times 7 \times 10 = 220$ cm².`,
          },
          {
            kind: "mcq",
            q: "The surface area of a sphere of radius 14 cm (π = 22/7) is",
            options: ["616 cm²", "1232 cm²", "2464 cm²", "7392 cm²"],
            answer: 2,
            explain: t`$4 \times \frac{22}{7} \times 196 = 4 \times 616 = 2464$ cm². 616 is only $\pi r^2$; 1232 is the hemisphere's curved part.`,
          },
          {
            kind: "truefalse",
            q: "The total surface area of a solid hemisphere is 2πr².",
            answer: false,
            explain: t`$2\pi r^2$ is only the curved part. Add the flat circle $\pi r^2$: TSA $= 3\pi r^2$.`,
          },
          {
            kind: "fill",
            q: "A cone has radius 6 cm and height 8 cm. Its slant height is ___ cm.",
            answer: ["10"],
            explain: t`$\sqrt{36 + 64} = \sqrt{100} = 10$ cm.`,
          },
          {
            kind: "multi",
            q: "Which formulas use the slant height l?",
            options: ["CSA of a cone", "TSA of a cone", "Surface area of a sphere", "CSA of a cylinder"],
            answers: [0, 1],
            explain: "Only the cone has a slant height. The sphere uses r alone, and the cylinder uses r and h.",
          },
          {
            kind: "mcq",
            q: "The radii of two spheres are in the ratio 2 : 3. Their surface areas are in the ratio",
            options: ["2 : 3", "4 : 9", "8 : 27", "4 : 6"],
            answer: 1,
            difficulty: 2,
            hint: t`Surface area depends on $r^2$.`,
            explain: t`$4\pi(2)^2 : 4\pi(3)^2 = 4 : 9$. 8 : 27 would be the ratio of volumes.`,
          },
          {
            kind: "order",
            q: "Order the steps to find the TSA of a cone when r and h are given.",
            items: ["Find l = √(r² + h²)", "Find the CSA = πrl", "Find the base area = πr²", "Add CSA and base area"],
            explain: t`TSA $= \pi rl + \pi r^2 = \pi r(l + r)$.`,
          },
          {
            kind: "numeric",
            q: "Find the total surface area of a solid hemisphere of radius 7 cm (π = 22/7), in cm².",
            answer: 462,
            unit: "cm²",
            explain: t`$3 \times \frac{22}{7} \times 49 = 3 \times 154 = 462$ cm².`,
          },
        ],
      },
      {
        slug: "c9-cone-sphere-volume",
        title: "Volumes of Cone, Sphere and Hemisphere",
        summary: "Volume of a cone as one-third of a cylinder, volumes of spheres and hemispheres, capacity and scaling.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`After harvest, farmers in Haryana pile wheat into a cone-shaped heap. How much wheat is there? A juice seller wants to know how much a hemispherical bowl holds. Both are **volume** questions.`,
          },
          { type: "illustration", emoji: "🌾", caption: "A heap of grain is roughly a cone." },
          {
            type: "text",
            md: t`Take a hollow cone and a hollow cylinder with the **same base radius and the same height**. Fill the cone with sand and pour it into the cylinder. It takes exactly **three** cone-fuls to fill the cylinder. So the volume of a cone is one-third of $\pi r^2 h$.

A sphere's volume uses $r^3$, because volume is length × length × length. A hemisphere is half a sphere. We take $\pi = \frac{22}{7}$.`,
          },
          {
            type: "formula",
            tex: t`V_{\text{cone}} = \tfrac{1}{3}\pi r^2 h, \quad V_{\text{sphere}} = \tfrac{4}{3}\pi r^3, \quad V_{\text{hemisphere}} = \tfrac{2}{3}\pi r^3`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Same base, same height: how many cones of sand fill the cylinder?",
              emoji: "🥤",
              options: ["2", "3", "4"],
              answer: 1,
              trap: 0,
              explain: t`Three. Many guess 2 because a cone "looks like half". That is why the cone formula has $\frac{1}{3}$.`,
            },
          },
          {
            type: "example",
            title: "A cone",
            problem: "Find the volume of a cone of radius 7 cm and height 24 cm.",
            steps: [t`$V = \frac{1}{3} \times \frac{22}{7} \times 7 \times 7 \times 24$.`, t`$= 22 \times 7 \times 8 = 1232$ cm³.`],
            answer: "1232 cm³.",
          },
          {
            type: "example",
            title: "A heap of wheat",
            problem: "A conical heap of wheat has base diameter 14 m and height 3 m. Find its volume.",
            steps: [t`$r = 7$ m.`, t`$V = \frac{1}{3} \times \frac{22}{7} \times 49 \times 3 = 22 \times 7 = 154$ m³.`],
            answer: "154 m³ of wheat.",
          },
          {
            type: "mistake",
            wrong: t`Volume of a cone $= \pi r^2 h$, the same as a cylinder.`,
            right: t`Volume of a cone $= \frac{1}{3}\pi r^2 h$.`,
            why: t`The base and height are shared with the cylinder, so the formulas look alike. But the cone narrows to a point, so it holds much less — exactly one-third. Forgetting the $\frac{1}{3}$ makes the answer 3 times too big.`,
          },
          {
            type: "example",
            title: "Sphere and hemisphere",
            problem: "Find (a) the volume of a ball of radius 21 cm, (b) how many litres a hemispherical bowl of radius 21 cm can hold.",
            steps: [
              t`(a) $\frac{4}{3} \times \frac{22}{7} \times 21^3 = \frac{88}{21} \times 9261 = 88 \times 441 = 38\,808$ cm³.`,
              t`(b) Half of that: $\frac{2}{3}\pi r^3 = 19\,404$ cm³.`,
              t`$19\,404 \div 1000 = 19.404$ litres.`,
            ],
            answer: "(a) 38,808 cm³; (b) about 19.4 litres.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the volume of a hemisphere of radius 3 cm, to two decimal places (π = 22/7), in cm³.",
                answer: 56.57,
                tolerance: 0.05,
                unit: "cm³",
                difficulty: 2,
                explain: t`$\frac{2}{3} \times \frac{22}{7} \times 27 = \frac{396}{7} \approx 56.57$ cm³ (exactly $18\pi$).`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Cancel before you multiply: in $\frac{4}{3} \times \frac{22}{7} \times 21^3$, divide 21 by both 3 and 7 first. If a surface area is given, find $r$ first (e.g. $4\pi r^2 = 616 \Rightarrow r = 7$), then the volume $= \frac{4}{3} \times \frac{22}{7} \times 343 = 1437\frac{1}{3}$ cm³. Write units as cm³ or litres.`,
          },
          {
            type: "keypoints",
            items: [
              t`Cone: $\frac{1}{3}\pi r^2 h$ — one-third of the matching cylinder.`,
              t`Sphere: $\frac{4}{3}\pi r^3$. Hemisphere: $\frac{2}{3}\pi r^3$.`,
              t`$1000\ \text{cm}^3 = 1$ litre.`,
              "Doubling the radius of a sphere multiplies its volume by 8.",
            ],
          },
        ],
        flashcards: [
          { front: "Volume of a cone", back: t`$\frac{1}{3}\pi r^2 h$` },
          { front: "Volume of a sphere", back: t`$\frac{4}{3}\pi r^3$` },
          { front: "Volume of a hemisphere", back: t`$\frac{2}{3}\pi r^3$` },
          { front: "Cones to fill a cylinder of same base and height", back: "3" },
          { front: "Volume of a sphere of radius 7 cm", back: t`$1437\frac{1}{3}$ cm³ (π = 22/7)` },
          { front: "Radius doubled: effect on a sphere's volume", back: "8 times" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the volume of a cone of radius 3 cm and height 7 cm (π = 22/7), in cm³.",
            answer: 66,
            unit: "cm³",
            explain: t`$\frac{1}{3} \times \frac{22}{7} \times 9 \times 7 = 22 \times 3 = 66$ cm³.`,
          },
          {
            kind: "mcq",
            q: "The volume of a sphere of radius 7 cm (π = 22/7) is",
            options: [t`$1437\frac{1}{3}$ cm³`, "4312 cm³", "616 cm³", t`$718\frac{2}{3}$ cm³`],
            answer: 0,
            difficulty: 2,
            explain: t`$\frac{4}{3} \times \frac{22}{7} \times 343 = \frac{4312}{3} = 1437\frac{1}{3}$ cm³. 4312 forgets the 3; 616 is the surface area; $718\frac{2}{3}$ is a hemisphere.`,
          },
          {
            kind: "truefalse",
            q: "The volume of a cone is one-third of the volume of a cylinder with the same base radius and height.",
            answer: true,
            explain: t`$\frac{1}{3}\pi r^2 h$ versus $\pi r^2 h$.`,
          },
          {
            kind: "numeric",
            q: "How many litres of milk can a hemispherical bowl of radius 21 cm hold? (π = 22/7)",
            answer: 19.404,
            tolerance: 0.01,
            unit: "L",
            difficulty: 2,
            explain: t`$\frac{2}{3} \times \frac{22}{7} \times 9261 = 19\,404$ cm³ $= 19.404$ L.`,
          },
          {
            kind: "fill",
            q: "Volume of a hemisphere = ___ × πr³ (write the fraction).",
            answer: ["2/3", "⅔"],
            explain: t`Half of $\frac{4}{3}$ is $\frac{2}{3}$.`,
          },
          {
            kind: "numeric",
            q: "A metal sphere of radius 3 cm is melted and made into small spheres of radius 1 cm. How many small spheres are made?",
            answer: 27,
            difficulty: 3,
            hint: "The total volume stays the same; the common factor 4/3 π cancels.",
            explain: t`$\frac{\frac{4}{3}\pi(3)^3}{\frac{4}{3}\pi(1)^3} = 27$.`,
          },
          {
            kind: "mcq",
            q: "If the radius of a sphere is doubled, its volume becomes",
            options: ["2 times", "4 times", "8 times", "6 times"],
            answer: 2,
            explain: t`$(2r)^3 = 8r^3$. The surface area would become 4 times.`,
          },
        ],
      },
    ],
  },
];

/** Class 9 chapter title ("9:<title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Heron's Formula": "c9-herons-formula",
  "9:Surface Areas and Volumes": ["c9-cuboid-cube-cylinder", "c9-cone-sphere-hemisphere"],
  "9:Mensuration": ["c9-herons-formula", "c9-plane-mensuration", "c9-cuboid-cube-cylinder"],
};
