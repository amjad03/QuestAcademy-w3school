import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------ */
  /* Introduction to Three Dimensional Geometry (Class 11)          */
  /* ------------------------------------------------------------ */
  {
    slug: "intro-3d-geometry",
    title: "Introduction to Three Dimensional Geometry",
    icon: "🧊",
    description: "Axes, coordinate planes and octants in space, the distance formula and the section formula in three dimensions.",
    lessons: [
      {
        slug: "i3d-coordinates",
        title: "Coordinates of a point in space",
        summary: "Three mutually perpendicular axes, the three coordinate planes and the eight octants.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "text", md: "A drone hovering over Bengaluru needs three numbers to fix its position: how far east, how far north and how high. Space has three dimensions, so a point needs three coordinates $(x, y, z)$." },
          { type: "heading", text: "Axes and planes" },
          {
            type: "list",
            items: [
              "Three mutually perpendicular lines through the origin O: the x-, y- and z-axes (right-handed system).",
              "They define three coordinate planes: the **xy-plane** (z = 0), **yz-plane** (x = 0) and **zx-plane** (y = 0).",
              "The planes divide space into **eight octants**.",
            ],
          },
          { type: "illustration", emoji: "📦", caption: "Picture the corner of a room: two walls and the floor are the three coordinate planes; the corner is the origin." },
          {
            type: "table",
            headers: ["Octant", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"],
            rows: [
              ["x", "+", "−", "−", "+", "+", "−", "−", "+"],
              ["y", "+", "+", "−", "−", "+", "+", "−", "−"],
              ["z", "+", "+", "+", "+", "−", "−", "−", "−"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** $P(-3, 1, -2)$ has signs $(-, +, -)$, so it lies in **octant VI**. Its foot of perpendicular on the xy-plane is $(-3, 1, 0)$, on the yz-plane $(0, 1, -2)$ and on the zx-plane $(-3, 0, -2)$.`,
          },
          {
            type: "table",
            headers: ["Point lies on", "Form"],
            rows: [
              ["x-axis", "(x, 0, 0)"],
              ["y-axis", "(0, y, 0)"],
              ["z-axis", "(0, 0, z)"],
              ["xy-plane", "(x, y, 0)"],
              ["yz-plane", "(0, y, z)"],
              ["zx-plane", "(x, 0, z)"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`The distance of $P(x, y, z)$ from the **x-axis** is $\sqrt{y^2 + z^2}$, not $|x|$. The distance from the **yz-plane** is $|x|$. Students regularly swap "axis" and "plane".`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`In which octant does $(4, -2, -5)$ lie?`,
                options: ["IV", "V", "VII", "VIII"],
                answer: 3,
                explain: "Signs (+, −, −): octant VIII.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Three coordinates, three axes, three coordinate planes, eight octants.",
              "On the xy-plane z = 0; on the z-axis x = y = 0.",
              t`Distance from the x-axis: $\sqrt{y^2 + z^2}$; from the yz-plane: $|x|$.`,
              "Octants I–IV have z > 0, V–VIII have z < 0.",
            ],
          },
        ],
        flashcards: [
          { front: "Equation of the xy-plane", back: "z = 0" },
          { front: "Octant of (−, −, +)", back: "III" },
          { front: "Distance of (x, y, z) from the z-axis", back: t`$\sqrt{x^2 + y^2}$` },
          { front: "General point on the y-axis", back: "(0, y, 0)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The point $(-1, -2, 3)$ lies in octant:`,
            options: ["II", "III", "VI", "VII"],
            answer: 1,
            explain: "Signs (−, −, +): octant III.",
          },
          {
            kind: "numeric",
            q: t`Find the distance of $P(3, 4, 12)$ from the z-axis.`,
            answer: 5,
            explain: t`$\sqrt{3^2 + 4^2} = 5$.`,
          },
          {
            kind: "numeric",
            q: t`Find the distance of $P(3, 4, 12)$ from the origin.`,
            answer: 13,
            explain: t`$\sqrt{9 + 16 + 144} = \sqrt{169} = 13$.`,
          },
          {
            kind: "fill",
            q: "Every point on the yz-plane has x-coordinate equal to ___.",
            answer: ["0", "zero"],
            explain: "The yz-plane is x = 0.",
          },
          {
            kind: "truefalse",
            q: "The foot of the perpendicular from (2, −5, 7) on the zx-plane is (2, 0, 7).",
            answer: true,
            explain: "Dropping a perpendicular to the zx-plane sets y = 0.",
          },
        ],
      },
      {
        slug: "i3d-distance",
        title: "Distance formula in space",
        summary: "Distance between two points, collinearity and loci in three dimensions.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "text", md: "The 2-D distance formula gains one more term. Apply Pythagoras twice: once on the floor, once up the wall." },
          { type: "formula", tex: t`PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}` },
          { type: "formula", tex: t`OP = \sqrt{x^2 + y^2 + z^2}`, caption: "Distance from the origin" },
          {
            type: "text",
            md: t`**Worked example 1.** Distance between $(2, 3, 5)$ and $(4, 3, 1)$: $\sqrt{2^2 + 0^2 + (-4)^2} = \sqrt{20} = 2\sqrt5$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2 (collinearity).** $A(-2, 3, 5)$, $B(1, 2, 3)$, $C(7, 0, -1)$.
$AB = \sqrt{9 + 1 + 4} = \sqrt{14}$, $BC = \sqrt{36 + 4 + 16} = 2\sqrt{14}$, $AC = \sqrt{81 + 9 + 36} = 3\sqrt{14}$.
Since $AB + BC = AC$, the points are collinear.`,
          },
          {
            type: "text",
            md: t`**Worked example 3 (locus).** Points equidistant from $(1, 2, 3)$ and $(3, 2, -1)$:
$(x-1)^2 + (y-2)^2 + (z-3)^2 = (x-3)^2 + (y-2)^2 + (z+1)^2$.
Expanding and cancelling: $-2x - 6z + 10 = -6x + 2z + 10$, so $x - 2z = 0$. This locus is a plane.`,
          },
          {
            type: "table",
            headers: ["To show a triangle is…", "Check"],
            rows: [
              ["Isosceles", "Two sides equal"],
              ["Equilateral", "All three sides equal"],
              ["Right-angled", t`$a^2 + b^2 = c^2$ for the longest side c`],
              ["Degenerate (collinear points)", "Sum of two sides = third side"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Keep the square roots unsimplified until the end when checking collinearity, or write each as a multiple of the same surd (√14 above). Decimal approximations hide exact equality.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Distance between $(1, -3, 4)$ and $(-4, 1, 2)$, rounded to two decimals.`,
                answer: 6.71,
                tolerance: 0.01,
                explain: t`$\sqrt{25 + 16 + 4} = \sqrt{45} = 3\sqrt5 \approx 6.71$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "3-D distance: three squared differences under the root.",
              "Collinear: the two shorter distances add up to the longest.",
              "Equidistant from two fixed points: a plane (perpendicular bisector plane).",
              "Work with exact surds, not decimals.",
            ],
          },
        ],
        flashcards: [
          { front: "Distance between (x₁, y₁, z₁) and (x₂, y₂, z₂)", back: t`$\sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$` },
          { front: "Test for collinearity using distances", back: "AB + BC = AC" },
          { front: "Locus of points equidistant from two fixed points", back: "A plane" },
          { front: "Distance of (1, 2, 2) from the origin", back: "3" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the distance between $(2, -1, 3)$ and $(-2, 1, 3)$, rounded to two decimals.`,
            answer: 4.47,
            tolerance: 0.01,
            explain: t`$\sqrt{16 + 4 + 0} = \sqrt{20} \approx 4.47$.`,
          },
          {
            kind: "truefalse",
            q: "The points (0, 7, −10), (1, 6, −6) and (4, 9, −6) form an isosceles triangle.",
            answer: true,
            difficulty: 2,
            explain: t`$AB = \sqrt{1 + 1 + 16} = \sqrt{18}$, $BC = \sqrt{9 + 9 + 0} = \sqrt{18}$, $AC = \sqrt{16 + 4 + 16} = 6$. Two sides equal.`,
          },
          {
            kind: "mcq",
            q: t`If the distance between $(k, 0, 0)$ and $(0, 3, 4)$ is 13, then $k$ equals:`,
            options: [t`$\pm 12$`, t`$\pm 13$`, t`$12$ only`, t`$\pm 5$`],
            answer: 0,
            explain: t`$k^2 + 9 + 16 = 169 \Rightarrow k^2 = 144$.`,
          },
          {
            kind: "fill",
            q: "The locus of points equidistant from two fixed points in space is a ___.",
            answer: ["plane"],
            explain: "It is the plane that perpendicularly bisects the segment joining them.",
          },
          {
            kind: "numeric",
            q: t`Find $AC$ for $A(-2, 3, 5)$, $C(7, 0, -1)$ as a multiple of $\sqrt{14}$ (give the multiplier).`,
            answer: 3,
            explain: t`$\sqrt{126} = 3\sqrt{14}$.`,
          },
        ],
      },
      {
        slug: "i3d-section-formula",
        title: "Section formula, midpoint and centroid",
        summary: "Dividing a segment internally and externally in space, and the ratio in which a plane cuts it.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Syllabus note",
            md: "The rationalised CBSE Class 11 book dropped the 3-D section formula, but it is in ISC, Karnataka PUC and JEE, and it is used throughout Class 12 vectors.",
          },
          { type: "text", md: "The section formula works exactly as in 2-D, one coordinate at a time." },
          { type: "formula", tex: t`R = \left(\frac{mx_2 + nx_1}{m + n},\; \frac{my_2 + ny_1}{m + n},\; \frac{mz_2 + nz_1}{m + n}\right)`, caption: "R divides PQ internally in the ratio m : n" },
          { type: "formula", tex: t`R = \left(\frac{mx_2 - nx_1}{m - n},\; \frac{my_2 - ny_1}{m - n},\; \frac{mz_2 - nz_1}{m - n}\right)`, caption: "External division in m : n (m ≠ n)" },
          {
            type: "text",
            md: t`**Worked example 1.** The point dividing $P(1, -2, 3)$ and $Q(3, 4, -5)$ internally in $2 : 3$:
$\left(\frac{2(3) + 3(1)}{5}, \frac{2(4) + 3(-2)}{5}, \frac{2(-5) + 3(3)}{5}\right) = \left(\frac{9}{5}, \frac{2}{5}, -\frac{1}{5}\right)$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2.** In what ratio does the yz-plane divide the join of $(-2, 4, 7)$ and $(3, -5, 8)$? Take ratio $k : 1$. On the yz-plane $x = 0$: $\frac{3k - 2}{k + 1} = 0 \Rightarrow k = \frac{2}{3}$. Ratio $2 : 3$, internally (k is positive).`,
          },
          {
            type: "table",
            headers: ["Point", "Coordinates"],
            rows: [
              ["Midpoint of PQ", t`$\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}, \frac{z_1 + z_2}{2}\right)$`],
              ["Centroid of triangle ABC", t`$\left(\frac{\sum x}{3}, \frac{\sum y}{3}, \frac{\sum z}{3}\right)$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 3.** Centroid of $(1, 2, 3)$, $(4, 5, 6)$, $(-2, -1, 0)$: $\left(\frac{3}{3}, \frac{6}{3}, \frac{9}{3}\right) = (1, 2, 3)$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: "Use the k : 1 method when the ratio is unknown. A negative k means the division is **external**. Do not write a negative ratio as the final answer; state it as \"m : n externally\".",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Midpoint of $(2, -4, 6)$ and $(0, 8, -2)$:`,
                options: ["(1, 2, 2)", "(2, 4, 4)", "(1, −6, 4)", "(1, 2, 4)"],
                answer: 0,
                explain: t`$\left(\frac{2}{2}, \frac{4}{2}, \frac{4}{2}\right) = (1, 2, 2)$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Internal: (mx₂ + nx₁)/(m + n); external: (mx₂ − nx₁)/(m − n).",
              "Unknown ratio: use k : 1 and apply the condition (e.g. x = 0).",
              "Negative k → external division.",
              "Centroid = average of the three vertices.",
            ],
          },
        ],
        flashcards: [
          { front: "Ratio in which the xy-plane divides a segment", back: "Use k : 1 and set the z-coordinate to 0" },
          { front: "Centroid of a triangle in space", back: "Average of the vertices' coordinates" },
          { front: "Negative k in the k : 1 method", back: "The division is external" },
          { front: "Midpoint formula", back: "Average of each coordinate" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The point dividing $(2, 3, 4)$ and $(5, 6, 7)$ internally in $1 : 2$ is:`,
            options: ["(3, 4, 5)", "(4, 5, 6)", "(3.5, 4.5, 5.5)", "(1, 1, 1)"],
            answer: 0,
            explain: t`$\left(\frac{5 + 4}{3}, \frac{6 + 6}{3}, \frac{7 + 8}{3}\right) = (3, 4, 5)$.`,
          },
          {
            kind: "numeric",
            q: t`The xy-plane divides the join of $(1, 2, 3)$ and $(4, 5, -6)$ in the ratio $k : 1$. Find $k$.`,
            answer: 0.5,
            difficulty: 2,
            explain: t`$\frac{-6k + 3}{k + 1} = 0 \Rightarrow k = \frac12$, i.e. $1 : 2$ internally.`,
          },
          {
            kind: "truefalse",
            q: "The centroid of a triangle with vertices (3, 0, 0), (0, 6, 0) and (0, 0, 9) is (1, 2, 3).",
            answer: true,
            explain: "(3/3, 6/3, 9/3) = (1, 2, 3).",
          },
          {
            kind: "fill",
            q: "If the k : 1 method gives a negative k, the point divides the segment ___.",
            answer: ["externally"],
            explain: "Negative ratio means the point is outside the segment.",
          },
          {
            kind: "numeric",
            q: t`A vertex of a triangle is $(1, 1, 1)$, another is $(2, 3, 4)$ and the centroid is $(2, 2, 2)$. Find the x-coordinate of the third vertex.`,
            answer: 3,
            explain: t`$\frac{1 + 2 + x}{3} = 2 \Rightarrow x = 3$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Three Dimensional Geometry (Class 12)                          */
  /* ------------------------------------------------------------ */
  {
    slug: "three-d-geometry",
    title: "Three Dimensional Geometry",
    icon: "📐",
    description: "Direction cosines and ratios, equations of lines, angle and shortest distance between lines, and planes.",
    lessons: [
      {
        slug: "3d-direction-cosines",
        title: "Direction cosines and direction ratios",
        summary: "Describing the direction of a line in space, and finding the angle between two lines.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "text", md: "If a line makes angles $\\alpha, \\beta, \\gamma$ with the x-, y- and z-axes, its **direction cosines** are $l = \\cos\\alpha$, $m = \\cos\\beta$, $n = \\cos\\gamma$." },
          { type: "formula", tex: t`l^2 + m^2 + n^2 = 1` },
          {
            type: "text",
            md: t`**Direction ratios** $a, b, c$ are any numbers proportional to $l, m, n$. To get the cosines, divide by the magnitude:`,
          },
          { type: "formula", tex: t`l = \frac{a}{\sqrt{a^2 + b^2 + c^2}},\; m = \frac{b}{\sqrt{a^2 + b^2 + c^2}},\; n = \frac{c}{\sqrt{a^2 + b^2 + c^2}}` },
          {
            type: "text",
            md: t`**Worked example 1.** Direction ratios $2, -1, -2$: magnitude $\sqrt{4 + 1 + 4} = 3$. Direction cosines $\frac{2}{3}, -\frac{1}{3}, -\frac{2}{3}$.

**Worked example 2.** Line through $(-2, 4, -5)$ and $(1, 2, 3)$: direction ratios $3, -2, 8$; magnitude $\sqrt{77}$; direction cosines $\frac{3}{\sqrt{77}}, \frac{-2}{\sqrt{77}}, \frac{8}{\sqrt{77}}$.`,
          },
          { type: "heading", text: "Angle between two lines" },
          { type: "formula", tex: t`\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2 + b_1^2 + c_1^2}\,\sqrt{a_2^2 + b_2^2 + c_2^2}}` },
          {
            type: "table",
            headers: ["Lines are…", "Condition on direction ratios"],
            rows: [
              ["Perpendicular", t`$a_1a_2 + b_1b_2 + c_1c_2 = 0$`],
              ["Parallel", t`$\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 3.** Lines with direction ratios $(1, 1, 2)$ and $(\sqrt3 - 1, -\sqrt3 - 1, 4)$: numerator $= \sqrt3 - 1 - \sqrt3 - 1 + 8 = 6$; magnitudes $\sqrt6$ and $\sqrt{24}$. So $\cos\theta = \frac{6}{\sqrt{144}} = \frac12$ and $\theta = 60^\circ$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "Direction cosines are unique up to sign; direction ratios are not unique at all. If a question says \"find the direction cosines\", you must divide by the magnitude. Use the identity as a check: angles 45°, 60°, 120° are possible (1/2 + 1/4 + 1/4 = 1), but no line makes 45° with all three axes (1/2 + 1/2 + 1/2 = 3/2 ≠ 1).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "Lines with direction ratios (1, 2, 3) and (3, 0, −1) are perpendicular.",
                answer: true,
                explain: t`$3 + 0 - 3 = 0$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`$l^2 + m^2 + n^2 = 1$.`,
              "Direction ratios ÷ magnitude = direction cosines.",
              "Perpendicular: dot product of direction ratios = 0.",
              "Parallel: direction ratios proportional.",
            ],
          },
        ],
        flashcards: [
          { front: "Identity for direction cosines", back: t`$l^2 + m^2 + n^2 = 1$` },
          { front: "Direction cosines of the x-axis", back: "1, 0, 0" },
          { front: "Direction ratios of the line through P and Q", back: t`$x_2 - x_1,\; y_2 - y_1,\; z_2 - z_1$` },
          { front: "Condition for perpendicular lines", back: t`$a_1a_2 + b_1b_2 + c_1c_2 = 0$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`A line makes equal angles with the three axes. Its direction cosines are:`,
            options: [t`$\pm\frac{1}{\sqrt3}$ each`, t`$\frac13$ each`, t`$1$ each`, t`$\frac{1}{\sqrt2}$ each`],
            answer: 0,
            explain: t`$3l^2 = 1 \Rightarrow l = \pm\frac{1}{\sqrt3}$.`,
          },
          {
            kind: "numeric",
            q: t`A line has $l = \frac12$, $m = \frac12$. Find $n^2$.`,
            answer: 0.5,
            explain: t`$n^2 = 1 - \frac14 - \frac14 = \frac12$.`,
          },
          {
            kind: "numeric",
            q: t`Find $k$ if lines with direction ratios $(2, k, 1)$ and $(1, 2, -6)$ are perpendicular.`,
            answer: 2,
            explain: t`$2 + 2k - 6 = 0 \Rightarrow k = 2$.`,
          },
          {
            kind: "truefalse",
            q: "Direction ratios of a line are unique.",
            answer: false,
            explain: "Any non-zero multiple of a set of direction ratios is again a set of direction ratios.",
          },
          {
            kind: "numeric",
            q: t`Find the angle (in degrees) between lines with direction ratios $(1, 0, 0)$ and $(0, 1, 1)$.`,
            answer: 90,
            explain: "The dot product is 0.",
          },
        ],
      },
      {
        slug: "3d-lines",
        title: "Equation of a line, skew lines and shortest distance",
        summary: "Vector and Cartesian equations of a line, and the shortest distance between skew and parallel lines.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "text", md: "A line in space is fixed by one point on it (position vector $\\vec a$) and a direction $\\vec b$." },
          { type: "formula", tex: t`\vec r = \vec a + \lambda \vec b \qquad \frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c}`, caption: "Vector form and Cartesian (symmetric) form" },
          { type: "formula", tex: t`\vec r = \vec a + \lambda(\vec b - \vec a) \qquad \frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}`, caption: "Line through two points" },
          {
            type: "text",
            md: t`**Worked example 1.** Line through $(5, 2, -4)$ parallel to $3\hat i + 2\hat j - 8\hat k$:
$\vec r = (5\hat i + 2\hat j - 4\hat k) + \lambda(3\hat i + 2\hat j - 8\hat k)$, or $\frac{x - 5}{3} = \frac{y - 2}{2} = \frac{z + 4}{-8}$.`,
          },
          { type: "heading", text: "Shortest distance (SD)" },
          {
            type: "text",
            md: "**Skew lines** are neither parallel nor intersecting; they lie in different planes. The shortest distance is along their common perpendicular.",
          },
          { type: "formula", tex: t`d = \left|\frac{(\vec b_1 \times \vec b_2)\cdot(\vec a_2 - \vec a_1)}{|\vec b_1 \times \vec b_2|}\right| \qquad d_{\parallel} = \frac{|\vec b \times (\vec a_2 - \vec a_1)|}{|\vec b|}`, caption: "Skew lines (left) and parallel lines (right)" },
          {
            type: "text",
            md: t`**Worked example 2.** $\vec r = (\hat i + \hat j) + \lambda(2\hat i - \hat j + \hat k)$ and $\vec r = (2\hat i + \hat j - \hat k) + \mu(3\hat i - 5\hat j + 2\hat k)$.

- $\vec a_2 - \vec a_1 = \hat i - \hat k$
- $\vec b_1 \times \vec b_2 = \begin{vmatrix} \hat i & \hat j & \hat k \\ 2 & -1 & 1 \\ 3 & -5 & 2 \end{vmatrix} = 3\hat i - \hat j - 7\hat k$, with magnitude $\sqrt{59}$
- $(\vec b_1 \times \vec b_2)\cdot(\vec a_2 - \vec a_1) = 3 + 0 + 7 = 10$

So $d = \frac{10}{\sqrt{59}}$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: t`If $d = 0$ the lines **intersect** (they are coplanar). In Cartesian form, the denominators are the direction ratios only after the coefficients of $x, y, z$ are made 1: $\frac{2x - 1}{3}$ must be rewritten as $\frac{x - 1/2}{3/2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Direction ratios of the line $\frac{x - 1}{2} = \frac{3 - y}{4} = \frac{z + 1}{5}$ are:`,
                options: ["2, 4, 5", "2, −4, 5", "1, 3, −1", "−2, 4, −5 only"],
                answer: 1,
                difficulty: 2,
                explain: t`$\frac{3 - y}{4} = \frac{y - 3}{-4}$, so the ratios are $2, -4, 5$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`Line: $\vec r = \vec a + \lambda\vec b$.`,
              "Make coefficients of x, y, z equal to 1 before reading direction ratios.",
              t`Skew SD uses $\vec b_1 \times \vec b_2$; parallel SD uses $\vec b \times (\vec a_2 - \vec a_1)$.`,
              "SD = 0 means the lines intersect.",
            ],
          },
        ],
        flashcards: [
          { front: "Vector equation of a line", back: t`$\vec r = \vec a + \lambda\vec b$` },
          { front: "Skew lines", back: "Lines that are neither parallel nor intersecting" },
          { front: "SD between skew lines", back: t`$\dfrac{|(\vec b_1 \times \vec b_2)\cdot(\vec a_2 - \vec a_1)|}{|\vec b_1 \times \vec b_2|}$` },
          { front: "SD = 0 means", back: "The lines intersect" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The Cartesian equation of the line through $(1, 2, 3)$ parallel to $\hat i - \hat j + 2\hat k$ is:`,
            options: [t`$\frac{x - 1}{1} = \frac{y - 2}{-1} = \frac{z - 3}{2}$`, t`$\frac{x + 1}{1} = \frac{y + 2}{-1} = \frac{z + 3}{2}$`, t`$\frac{x - 1}{1} = \frac{y - 2}{1} = \frac{z - 3}{2}$`, t`$x - y + 2z = 5$`],
            answer: 0,
            explain: "Point (1, 2, 3), direction ratios 1, −1, 2.",
          },
          {
            kind: "numeric",
            q: t`Find the shortest distance between the x-axis and the line $\vec r = (2\hat k) + \mu\hat j$ (a line through (0, 0, 2) parallel to the y-axis).`,
            answer: 2,
            difficulty: 2,
            explain: t`$\vec b_1 \times \vec b_2 = \hat i \times \hat j = \hat k$; $\vec a_2 - \vec a_1 = 2\hat k$; $d = |2|/1 = 2$.`,
          },
          {
            kind: "truefalse",
            q: "If the shortest distance between two non-parallel lines is zero, they intersect.",
            answer: true,
            explain: "Non-parallel lines with zero distance meet at a point.",
          },
          {
            kind: "fill",
            q: "Lines in space that are neither parallel nor intersecting are called ___ lines.",
            answer: ["skew"],
            explain: "They lie in different planes.",
          },
          {
            kind: "order",
            q: "Order the steps to find the SD between skew lines.",
            items: [t`Write $\vec a_1, \vec b_1, \vec a_2, \vec b_2$`, t`Find $\vec a_2 - \vec a_1$`, t`Compute $\vec b_1 \times \vec b_2$ and its magnitude`, "Take the dot product and divide"],
            explain: "Identify, subtract, cross, then dot-and-divide.",
          },
        ],
      },
      {
        slug: "3d-planes",
        title: "Planes (ISC / JEE)",
        summary: "Equations of a plane, intercept form, angle between planes and distance of a point from a plane.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "callout",
            tone: "note",
            title: "Syllabus note",
            md: "The rationalised CBSE Class 12 syllabus no longer includes planes, but ISC, Karnataka PUC and JEE Main / Advanced do. JEE asks 1–2 questions on planes every year.",
          },
          { type: "text", md: "A plane is fixed by a point on it and a **normal** vector $\\vec n$ perpendicular to it." },
          {
            type: "table",
            headers: ["Form", "Equation"],
            rows: [
              ["General", t`$ax + by + cz + d = 0$, normal $\langle a, b, c\rangle$`],
              ["Point-normal", t`$a(x - x_1) + b(y - y_1) + c(z - z_1) = 0$`],
              ["Vector", t`$\vec r \cdot \vec n = d$`],
              ["Intercept", t`$\dfrac{x}{p} + \dfrac{y}{q} + \dfrac{z}{r} = 1$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** Intercepts of $2x + 3y + 4z = 12$: divide by 12: $\frac{x}{6} + \frac{y}{4} + \frac{z}{3} = 1$. Intercepts $6, 4, 3$.`,
          },
          { type: "formula", tex: t`\cos\theta = \frac{|\vec n_1 \cdot \vec n_2|}{|\vec n_1|\,|\vec n_2|}`, caption: "Angle between two planes = angle between their normals" },
          {
            type: "text",
            md: t`**Worked example 2.** $2x + y - 2z = 5$ and $3x - 6y - 2z = 7$: $\vec n_1 \cdot \vec n_2 = 6 - 6 + 4 = 4$; $|\vec n_1| = 3$, $|\vec n_2| = 7$. So $\cos\theta = \frac{4}{21}$.`,
          },
          { type: "formula", tex: t`D = \frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}`, caption: "Distance of (x₁, y₁, z₁) from ax + by + cz + d = 0" },
          {
            type: "text",
            md: t`**Worked example 3.** Distance of $(2, 5, -3)$ from $6x - 3y + 2z - 4 = 0$: $\frac{|12 - 15 - 6 - 4|}{\sqrt{36 + 9 + 4}} = \frac{13}{7}$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "JEE trap",
            md: t`The angle between a **line** and a **plane** uses **sine**, not cosine: $\sin\phi = \frac{|\vec b \cdot \vec n|}{|\vec b||\vec n|}$, because the normal is at $90^\circ$ to the plane. Also, the distance between parallel planes $ax + by + cz + d_1 = 0$ and $ax + by + cz + d_2 = 0$ is $\frac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}$; make the coefficients identical first.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Distance of the origin from $2x - y + 2z + 9 = 0$.`,
                answer: 3,
                explain: t`$\frac{9}{\sqrt{4 + 1 + 4}} = 3$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Coefficients of x, y, z in a plane's equation give its normal.",
              "Angle between planes: cosine of angle between normals.",
              "Angle between a line and a plane: sine formula.",
              t`Point–plane distance: $|ax_1 + by_1 + cz_1 + d|/\sqrt{a^2 + b^2 + c^2}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Normal to 3x − 4y + 5z = 7", back: "⟨3, −4, 5⟩" },
          { front: "Intercept form of a plane", back: t`$\frac{x}{p} + \frac{y}{q} + \frac{z}{r} = 1$` },
          { front: "Perpendicular planes", back: t`$a_1a_2 + b_1b_2 + c_1c_2 = 0$` },
          { front: "Angle between a line and a plane", back: t`$\sin\phi = \dfrac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`The plane $x + 2y + 3z = 6$ meets the z-axis at $(0, 0, k)$. Find $k$.`,
            answer: 2,
            explain: t`Put $x = y = 0$: $3z = 6$.`,
          },
          {
            kind: "mcq",
            q: t`The planes $2x - y + z = 1$ and $x + 3y + z = 4$ are:`,
            options: ["Parallel", "Perpendicular", "Identical", "Neither parallel nor perpendicular"],
            answer: 1,
            explain: t`$2 - 3 + 1 = 0$.`,
          },
          {
            kind: "numeric",
            q: t`Distance between the parallel planes $2x + 2y - z + 2 = 0$ and $4x + 4y - 2z + 5 = 0$.`,
            answer: 0.1667,
            tolerance: 0.002,
            difficulty: 3,
            explain: t`Rewrite the second as $2x + 2y - z + 2.5 = 0$. Distance $= \frac{|2.5 - 2|}{3} = \frac16 \approx 0.1667$.`,
          },
          {
            kind: "truefalse",
            q: t`The equation of the xy-plane is $z = 0$, and its normal is $\hat k$.`,
            answer: true,
            explain: "The xy-plane is perpendicular to the z-axis.",
          },
          {
            kind: "fill",
            q: "The angle between a line and a plane is found using the ___ of the angle in the dot-product formula.",
            answer: ["sine", "sin"],
            explain: "The normal makes 90° − φ with the line.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Vector Algebra                                                 */
  /* ------------------------------------------------------------ */
  {
    slug: "vector-algebra",
    title: "Vector Algebra",
    icon: "➡️",
    description: "Types of vectors, components and magnitude, addition, the dot and cross products, and the scalar triple product.",
    lessons: [
      {
        slug: "va-basics",
        title: "Vectors, components and addition",
        summary: "Types of vectors, position vectors, magnitude, unit vectors and the laws of addition.",
        minutes: 15,
        xp: 35,
        blocks: [
          { type: "text", md: "An IndiGo pilot needs more than \"fly 500 km\"; she needs *500 km towards the north-east*. A quantity with both magnitude and direction is a **vector**." },
          {
            type: "table",
            headers: ["Type", "Meaning"],
            rows: [
              ["Zero vector", "Magnitude 0, any direction"],
              ["Unit vector", t`Magnitude 1; $\hat a = \vec a / |\vec a|$`],
              ["Equal vectors", "Same magnitude and direction"],
              ["Collinear vectors", t`Parallel to the same line: $\vec b = \lambda\vec a$`],
              ["Co-initial vectors", "Same starting point"],
              ["Negative vector", t`$-\vec a$: same magnitude, opposite direction`],
            ],
          },
          { type: "formula", tex: t`\vec a = a_1\hat i + a_2\hat j + a_3\hat k, \qquad |\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}` },
          {
            type: "text",
            md: t`**Worked example 1.** $\vec a = 2\hat i + 3\hat j - 6\hat k$: $|\vec a| = \sqrt{4 + 9 + 36} = 7$, so $\hat a = \frac{1}{7}(2\hat i + 3\hat j - 6\hat k)$.

**Worked example 2.** $P(2, 3, 0)$ to $Q(-1, -2, -4)$: $\overrightarrow{PQ} = \vec q - \vec p = -3\hat i - 5\hat j - 4\hat k$, with $|\overrightarrow{PQ}| = \sqrt{50} = 5\sqrt2$.`,
          },
          { type: "heading", text: "Adding vectors" },
          {
            type: "list",
            items: [
              t`**Triangle law:** $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.`,
              "**Parallelogram law:** the sum of two co-initial vectors is the diagonal from their common start.",
              t`Addition is commutative and associative; $\vec a + (-\vec a) = \vec 0$.`,
            ],
          },
          { type: "formula", tex: t`\vec r = \frac{m\vec b + n\vec a}{m + n}`, caption: "Position vector of the point dividing AB internally in m : n" },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`$\overrightarrow{AB} = \vec b - \vec a$ (end minus start), not $\vec a - \vec b$. Also, "a vector of magnitude 5 in the direction of $\vec a$" is $5\hat a$; do not forget to divide by $|\vec a|$ first.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $|\vec a|$ for $\vec a = \hat i - 2\hat j + 2\hat k$.`,
                answer: 3,
                explain: t`$\sqrt{1 + 4 + 4} = 3$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Vector = magnitude + direction.",
              t`$|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$; $\hat a = \vec a/|\vec a|$.`,
              t`$\overrightarrow{AB} = \vec b - \vec a$.`,
              t`Collinear: $\vec b = \lambda\vec a$, i.e. proportional components.`,
            ],
          },
        ],
        flashcards: [
          { front: "Unit vector along a", back: t`$\hat a = \vec a / |\vec a|$` },
          { front: t`$\overrightarrow{AB}$ in position vectors`, back: t`$\vec b - \vec a$` },
          { front: "Triangle law", back: t`$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$` },
          { front: "Condition for collinear vectors", back: "Components are proportional" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`A unit vector along $3\hat i - 4\hat k$ is:`,
            options: [t`$\frac{3}{5}\hat i - \frac{4}{5}\hat k$`, t`$3\hat i - 4\hat k$`, t`$\frac{3}{7}\hat i - \frac{4}{7}\hat k$`, t`$\frac{1}{5}\hat i - \frac{1}{5}\hat k$`],
            answer: 0,
            explain: "Magnitude 5; divide each component by 5.",
          },
          {
            kind: "numeric",
            q: t`Find $\lambda$ if $2\hat i + 3\hat j - \hat k$ and $4\hat i + \lambda\hat j - 2\hat k$ are collinear.`,
            answer: 6,
            explain: t`Ratios $\frac{4}{2} = \frac{\lambda}{3} = \frac{-2}{-1} = 2$.`,
          },
          {
            kind: "truefalse",
            q: "Two vectors with equal magnitudes are always equal.",
            answer: false,
            explain: "Equal vectors also need the same direction.",
          },
          {
            kind: "numeric",
            q: t`A vector of magnitude 14 points in the direction of $2\hat i + 3\hat j - 6\hat k$. What is its $\hat i$-component?`,
            answer: 4,
            difficulty: 2,
            explain: t`$14 \cdot \frac{1}{7}(2\hat i + 3\hat j - 6\hat k) = 4\hat i + 6\hat j - 12\hat k$.`,
          },
          {
            kind: "fill",
            q: t`$\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} =$ ___.`,
            answer: ["0", "zero vector", "the zero vector"],
            explain: "Going round a closed triangle returns you to the start.",
          },
        ],
      },
      {
        slug: "va-dot-product",
        title: "Scalar (dot) product and projection",
        summary: "Definition, the angle between vectors, perpendicularity, projection and work done.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "formula", tex: t`\vec a \cdot \vec b = |\vec a||\vec b|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3`, caption: "The answer is a scalar" },
          {
            type: "list",
            items: [
              t`$\hat i \cdot \hat i = \hat j \cdot \hat j = \hat k \cdot \hat k = 1$; $\hat i \cdot \hat j = \hat j \cdot \hat k = \hat k \cdot \hat i = 0$.`,
              t`$\vec a \perp \vec b \iff \vec a \cdot \vec b = 0$ (non-zero vectors).`,
              t`$\vec a \cdot \vec a = |\vec a|^2$; $|\vec a + \vec b|^2 = |\vec a|^2 + |\vec b|^2 + 2\,\vec a \cdot \vec b$.`,
            ],
          },
          { type: "formula", tex: t`\text{Projection of } \vec a \text{ on } \vec b = \frac{\vec a \cdot \vec b}{|\vec b|}` },
          {
            type: "text",
            md: t`**Worked example 1.** $\vec a = \hat i + 2\hat j + 3\hat k$, $\vec b = 3\hat i - 2\hat j + \hat k$.
$\vec a \cdot \vec b = 3 - 4 + 3 = 2$; $|\vec a| = |\vec b| = \sqrt{14}$.
$\cos\theta = \frac{2}{14} = \frac17$; projection of $\vec a$ on $\vec b$ $= \frac{2}{\sqrt{14}}$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2.** Find $\lambda$ so that $2\hat i + \lambda\hat j + \hat k \perp \hat i - 2\hat j + 3\hat k$: $2 - 2\lambda + 3 = 0 \Rightarrow \lambda = \frac52$.`,
          },
          {
            type: "text",
            md: t`**Worked example 3 (work).** A force $\vec F = 3\hat i + 2\hat j$ N moves a trolley at a Mumbai station through $\vec d = 4\hat i + \hat j$ m. Work $= \vec F \cdot \vec d = 12 + 2 = 14$ J.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`$\vec a \cdot \vec b = 0$ does **not** force $\vec a = \vec 0$ or $\vec b = \vec 0$; they may simply be perpendicular. Also, projection is a scalar; the **projection vector** is $\left(\frac{\vec a \cdot \vec b}{|\vec b|^2}\right)\vec b$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$|\vec a| = 3$, $|\vec b| = 4$, $\vec a \cdot \vec b = 6$. Find $|\vec a + \vec b|^2$.`,
                answer: 37,
                explain: t`$9 + 16 + 2(6) = 37$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Dot product is a scalar; it is commutative.",
              "Zero dot product ⇒ perpendicular.",
              t`Projection of $\vec a$ on $\vec b$: $\vec a \cdot \hat b$.`,
              t`Work = $\vec F \cdot \vec d$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\vec a \cdot \vec b$ in components`, back: t`$a_1b_1 + a_2b_2 + a_3b_3$` },
          { front: t`$\hat i \cdot \hat j$`, back: "0" },
          { front: "Projection of a on b", back: t`$\dfrac{\vec a \cdot \vec b}{|\vec b|}$` },
          { front: t`$|\vec a - \vec b|^2$`, back: t`$|\vec a|^2 + |\vec b|^2 - 2\,\vec a \cdot \vec b$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $(2\hat i - \hat j + 3\hat k) \cdot (\hat i + 4\hat j + 2\hat k)$.`,
            answer: 4,
            explain: t`$2 - 4 + 6 = 4$.`,
          },
          {
            kind: "mcq",
            q: t`The angle between $\hat i + \hat j$ and $\hat j + \hat k$ is:`,
            options: ["30°", "45°", "60°", "90°"],
            answer: 2,
            explain: t`$\cos\theta = \frac{1}{\sqrt2\sqrt2} = \frac12$.`,
          },
          {
            kind: "numeric",
            q: t`Projection of $\vec a = 2\hat i + 3\hat j + 2\hat k$ on $\vec b = \hat i + 2\hat j + 2\hat k$.`,
            answer: 4,
            explain: t`$\frac{2 + 6 + 4}{3} = 4$.`,
          },
          {
            kind: "truefalse",
            q: t`If $\vec a \cdot \vec b = 0$, then one of the vectors must be zero.`,
            answer: false,
            explain: "They may be non-zero and perpendicular.",
          },
          {
            kind: "numeric",
            q: t`If $|\vec a + \vec b| = |\vec a - \vec b|$, find the angle between $\vec a$ and $\vec b$ in degrees.`,
            answer: 90,
            difficulty: 2,
            explain: t`Squaring: $4\,\vec a \cdot \vec b = 0$, so the vectors are perpendicular.`,
          },
        ],
      },
      {
        slug: "va-cross-product",
        title: "Vector (cross) product and the scalar triple product",
        summary: "Cross product by determinant, areas of parallelograms and triangles, and volumes with the box product.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "formula", tex: t`\vec a \times \vec b = |\vec a||\vec b|\sin\theta\;\hat n = \begin{vmatrix} \hat i & \hat j & \hat k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}`, caption: "The result is a vector perpendicular to both a and b" },
          {
            type: "list",
            items: [
              t`$\hat i \times \hat j = \hat k$, $\hat j \times \hat k = \hat i$, $\hat k \times \hat i = \hat j$ (cyclic); reversing the order flips the sign.`,
              t`$\vec a \times \vec b = -\,\vec b \times \vec a$ (not commutative); $\vec a \times \vec a = \vec 0$.`,
              t`$\vec a \parallel \vec b \iff \vec a \times \vec b = \vec 0$.`,
              t`Lagrange: $|\vec a \times \vec b|^2 + (\vec a \cdot \vec b)^2 = |\vec a|^2|\vec b|^2$.`,
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1.** $\vec a = \hat i + \hat j + \hat k$, $\vec b = 2\hat i - \hat j + 3\hat k$.
$\vec a \times \vec b = \hat i(3 + 1) - \hat j(3 - 2) + \hat k(-1 - 2) = 4\hat i - \hat j - 3\hat k$.
Check: $\vec a \cdot (4, -1, -3) = 0$ and $\vec b \cdot (4, -1, -3) = 8 + 1 - 9 = 0$.`,
          },
          {
            type: "table",
            headers: ["Area of", "Formula"],
            rows: [
              ["Parallelogram with sides a, b", t`$|\vec a \times \vec b|$`],
              ["Parallelogram with diagonals d₁, d₂", t`$\frac12|\vec d_1 \times \vec d_2|$`],
              ["Triangle ABC", t`$\frac12|\overrightarrow{AB} \times \overrightarrow{AC}|$`],
            ],
          },
          {
            type: "text",
            md: t`**Worked example 2.** Triangle $A(1, 1, 1)$, $B(1, 2, 3)$, $C(2, 3, 1)$: $\overrightarrow{AB} = \hat j + 2\hat k$, $\overrightarrow{AC} = \hat i + 2\hat j$.
$\overrightarrow{AB} \times \overrightarrow{AC} = -4\hat i + 2\hat j - \hat k$, magnitude $\sqrt{21}$. Area $= \frac{\sqrt{21}}{2}$.`,
          },
          { type: "heading", text: "Scalar triple product (ISC / JEE)" },
          { type: "formula", tex: t`[\vec a\;\vec b\;\vec c] = \vec a \cdot (\vec b \times \vec c) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}`, caption: "Volume of the parallelepiped on a, b, c; zero ⇔ coplanar" },
          {
            type: "text",
            md: t`**Worked example 3.** $\vec a = \hat i + \hat j$, $\vec b = \hat j + \hat k$, $\vec c = \hat k + \hat i$: $\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} = 1(1) - 1(0 - 1) + 0 = 2$. Volume $= 2$ cubic units.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: t`The middle term of the determinant carries a **minus** sign: $-\hat j(a_1b_3 - a_3b_1)$. Dropping it is the commonest arithmetic error. Always check that your answer is perpendicular to both vectors.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$|\vec a| = 2$, $|\vec b| = 5$, $\vec a \cdot \vec b = 6$. Find $|\vec a \times \vec b|$.`,
                answer: 8,
                explain: t`$|\vec a \times \vec b|^2 = 100 - 36 = 64$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Cross product: a vector, perpendicular to both, anti-commutative.",
              "Area of triangle = ½ |AB × AC|.",
              "Parallel vectors have zero cross product.",
              "Scalar triple product = volume; zero means coplanar.",
            ],
          },
        ],
        flashcards: [
          { front: t`$\hat j \times \hat i$`, back: t`$-\hat k$` },
          { front: "Area of triangle ABC (vectors)", back: t`$\frac12|\overrightarrow{AB} \times \overrightarrow{AC}|$` },
          { front: "Lagrange's identity", back: t`$|\vec a \times \vec b|^2 + (\vec a \cdot \vec b)^2 = |\vec a|^2|\vec b|^2$` },
          { front: "Condition for coplanar vectors", back: t`$[\vec a\;\vec b\;\vec c] = 0$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\hat k \times \hat j$ equals:`,
            options: [t`$\hat i$`, t`$-\hat i$`, t`$\hat j$`, t`$\vec 0$`],
            answer: 1,
            explain: t`$\hat j \times \hat k = \hat i$, so reversing gives $-\hat i$.`,
          },
          {
            kind: "numeric",
            q: t`Area of the parallelogram with adjacent sides $3\hat i$ and $4\hat j$.`,
            answer: 12,
            explain: t`$|3\hat i \times 4\hat j| = |12\hat k| = 12$.`,
          },
          {
            kind: "numeric",
            q: t`Find $\lambda$ if $\hat i + \hat j + \hat k$, $\hat i - \hat j + \hat k$ and $2\hat i + \lambda\hat k$ are coplanar.`,
            answer: 2,
            difficulty: 3,
            explain: t`$\begin{vmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 2 & 0 & \lambda \end{vmatrix} = 1(-\lambda) - 1(\lambda - 2) + 1(0 + 2) = -2\lambda + 4 = 0 \Rightarrow \lambda = 2$.`,
          },
          {
            kind: "truefalse",
            q: t`$\vec a \times \vec b = \vec b \times \vec a$ for all vectors.`,
            answer: false,
            explain: t`$\vec a \times \vec b = -\vec b \times \vec a$.`,
          },
          {
            kind: "fill",
            q: "The magnitude of the scalar triple product of three vectors equals the ___ of the parallelepiped they form.",
            answer: ["volume"],
            explain: "Base area × height = |b × c| × (component of a along the normal).",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Differential Equations                                         */
  /* ------------------------------------------------------------ */
  {
    slug: "differential-equations",
    title: "Differential Equations",
    icon: "📈",
    description: "Order and degree, general and particular solutions, and solving separable, homogeneous and linear first-order equations.",
    lessons: [
      {
        slug: "de-basics",
        title: "Order, degree and solutions",
        summary: "What a differential equation is, how to find its order and degree, and general vs particular solutions.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "text", md: "A **differential equation** (DE) relates a function to its derivatives. \"Population grows at a rate proportional to its size\" becomes $\\frac{dP}{dt} = kP$." },
          {
            type: "list",
            items: [
              "**Order**: the highest derivative present.",
              "**Degree**: the power of that highest derivative, once the equation is a polynomial in all its derivatives. If it is not (e.g. sin(y′) or e^(y″) appears), the degree is **not defined**.",
            ],
          },
          {
            type: "table",
            headers: ["Equation", "Order", "Degree"],
            rows: [
              [t`$\frac{dy}{dx} = \cos x$`, "1", "1"],
              [t`$\left(\frac{d^3y}{dx^3}\right)^2 + \left(\frac{d^2y}{dx^2}\right)^3 + y = 0$`, "3", "2"],
              [t`$\left(\frac{d^2y}{dx^2}\right)^3 + \left(\frac{dy}{dx}\right)^2 + \sin\left(\frac{dy}{dx}\right) + 1 = 0$`, "2", "Not defined"],
              [t`$y' = \sqrt{1 + (y'')^2}$`, "2", t`2 (square both sides first)`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`Clear radicals and fractions in the derivatives **before** reading off the degree. $y' = \sqrt{1 + (y'')^2}$ becomes $(y')^2 = 1 + (y'')^2$, so the degree is 2, not 1.`,
          },
          { type: "heading", text: "General and particular solutions" },
          {
            type: "text",
            md: t`The **general solution** contains as many arbitrary constants as the order. A **particular solution** fixes them using given conditions. For $y' = 2x$: general $y = x^2 + C$; with $y(0) = 3$, particular $y = x^2 + 3$.`,
          },
          {
            type: "text",
            md: t`**Worked example (forming a DE).** Eliminate $a, b$ from $y = ae^{3x} + be^{-2x}$. Differentiate twice: $y' = 3ae^{3x} - 2be^{-2x}$, $y'' = 9ae^{3x} + 4be^{-2x}$. Then $y'' - y' - 6y = (9 - 3 - 6)ae^{3x} + (4 + 2 - 6)be^{-2x} = 0$. So the DE is $y'' - y' - 6y = 0$ (order 2, matching 2 constants).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Order and degree of $\frac{d^2y}{dx^2} + 3\left(\frac{dy}{dx}\right)^4 = x$:`,
                options: ["2, 1", "2, 4", "1, 4", "4, 2"],
                answer: 0,
                explain: "Highest derivative y″ appears to power 1.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Order = highest derivative; degree = its power (polynomial form only).",
              "Degree is undefined if derivatives appear inside sin, log, e^, etc.",
              "Number of arbitrary constants in the general solution = order.",
              "Particular solution: use the given conditions to fix constants.",
            ],
          },
        ],
        flashcards: [
          { front: "Order of a DE", back: "The order of the highest derivative present" },
          { front: "When is the degree not defined?", back: "When the DE is not a polynomial in its derivatives (e.g. sin y′)" },
          { front: "Arbitrary constants in the general solution of a 3rd-order DE", back: "3" },
          { front: t`DE for $y = ae^{3x} + be^{-2x}$`, back: t`$y'' - y' - 6y = 0$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The degree of $\left(\frac{d^2y}{dx^2}\right)^2 + \cos\left(\frac{dy}{dx}\right) = 0$ is:`,
            options: ["2", "1", "0", "Not defined"],
            answer: 3,
            explain: "cos(y′) is not a polynomial in y′.",
          },
          {
            kind: "numeric",
            q: t`What is the order of $y''' + 2y'' + y' = 0$?`,
            answer: 3,
            explain: "Highest derivative is y‴.",
          },
          {
            kind: "numeric",
            q: "How many arbitrary constants are in the general solution of a DE of order 4?",
            answer: 4,
            explain: "Equal to the order.",
          },
          {
            kind: "truefalse",
            q: t`$y = Ce^x$ is the general solution of $y' = y$.`,
            answer: true,
            explain: t`$y' = Ce^x = y$, and it has one constant for a first-order DE.`,
          },
          {
            kind: "fill",
            q: "The DE of the family y = mx (lines through the origin) is x y′ − ___ = 0.",
            answer: ["y"],
            difficulty: 2,
            explain: t`$y' = m = y/x$, so $xy' - y = 0$.`,
          },
        ],
      },
      {
        slug: "de-separable-homogeneous",
        title: "Variable separable and homogeneous equations",
        summary: "Separating variables, and the substitution y = vx for homogeneous equations.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "heading", text: "Variable separable" },
          { type: "formula", tex: t`\frac{dy}{dx} = f(x)\,g(y) \;\Rightarrow\; \int \frac{dy}{g(y)} = \int f(x)\,dx + C` },
          {
            type: "text",
            md: t`**Worked example 1.** $\frac{dy}{dx} = \frac{1 + y^2}{1 + x^2}$: $\int \frac{dy}{1 + y^2} = \int \frac{dx}{1 + x^2}$, so $\tan^{-1}y = \tan^{-1}x + C$.`,
          },
          {
            type: "text",
            md: t`**Worked example 2 (particular solution).** $\frac{dy}{dx} = -4xy^2$, $y(0) = 1$. Separate: $-\frac{dy}{y^2} = 4x\,dx \Rightarrow \frac{1}{y} = 2x^2 + C$. At $x = 0$, $y = 1$: $C = 1$. So $y = \frac{1}{2x^2 + 1}$.`,
          },
          { type: "heading", text: "Homogeneous equations" },
          {
            type: "text",
            md: t`$\frac{dy}{dx} = F\!\left(\frac{y}{x}\right)$, i.e. the right side is homogeneous of degree 0. Substitute $y = vx$, so $\frac{dy}{dx} = v + x\frac{dv}{dx}$, and the equation becomes separable in $v$ and $x$.`,
          },
          {
            type: "text",
            md: t`**Worked example 3.** $\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$. With $y = vx$: $v + x\frac{dv}{dx} = \frac{1 + v^2}{2v}$, so $x\frac{dv}{dx} = \frac{1 - v^2}{2v}$.
Separate: $\frac{2v\,dv}{1 - v^2} = \frac{dx}{x} \Rightarrow -\ln|1 - v^2| = \ln|x| + c \Rightarrow x(1 - v^2) = C$.
Put $v = y/x$: $x^2 - y^2 = Cx$.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Testing homogeneity",
            md: t`Replace $x, y$ by $\lambda x, \lambda y$. If $F(\lambda x, \lambda y) = \lambda^0 F(x, y)$, the equation is homogeneous. $\frac{x^2 + y^2}{2xy}$ passes; $\frac{x + y + 1}{x}$ fails because of the constant 1.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: t`Do not forget the constant of integration, and apply the initial condition **after** integrating, not before. In homogeneous questions, substitute back $v = y/x$ at the end; leaving the answer in $v$ loses marks.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`For $y = \frac{1}{2x^2 + 1}$ (worked example 2), find $y(1)$ as a decimal.`,
                answer: 0.3333,
                tolerance: 0.001,
                explain: t`$\frac{1}{3} \approx 0.3333$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Separable: get all y on one side, all x on the other, integrate.",
              "Homogeneous: y = vx, dy/dx = v + x dv/dx.",
              "Always add + C, then use initial conditions.",
              "Substitute back v = y/x.",
            ],
          },
        ],
        flashcards: [
          { front: "Substitution for homogeneous DEs", back: t`$y = vx$, $\frac{dy}{dx} = v + x\frac{dv}{dx}$` },
          { front: t`Solve $\frac{dy}{dx} = \frac{y}{x}$`, back: t`$y = Cx$` },
          { front: t`General solution of $\frac{dy}{dx} = e^{x+y}$`, back: t`$-e^{-y} = e^x + C$, i.e. $e^x + e^{-y} = C$` },
          { front: "Homogeneity test", back: "F(λx, λy) = F(x, y)" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The general solution of $\frac{dy}{dx} = \frac{x}{y}$ is:`,
            options: [t`$y^2 - x^2 = C$`, t`$y^2 + x^2 = C$`, t`$y = Cx$`, t`$xy = C$`],
            answer: 0,
            explain: t`$y\,dy = x\,dx \Rightarrow \frac{y^2}{2} = \frac{x^2}{2} + c$.`,
          },
          {
            kind: "numeric",
            q: t`Solve $\frac{dy}{dx} = y$ with $y(0) = 2$, and find $y(\ln 3)$.`,
            answer: 6,
            explain: t`$y = 2e^x$, so $y(\ln 3) = 2 \times 3 = 6$.`,
          },
          {
            kind: "truefalse",
            q: t`$\frac{dy}{dx} = \frac{x + y + 1}{x}$ is a homogeneous differential equation.`,
            answer: false,
            explain: "The constant 1 breaks homogeneity.",
          },
          {
            kind: "numeric",
            q: t`For $x^2 - y^2 = Cx$ passing through $(2, 1)$, find $C$.`,
            answer: 1.5,
            difficulty: 2,
            explain: t`$4 - 1 = 2C \Rightarrow C = \frac32$.`,
          },
          {
            kind: "order",
            q: "Order the steps for solving a homogeneous DE.",
            items: ["Check that the DE is homogeneous", "Substitute y = vx and dy/dx = v + x dv/dx", "Separate v and x and integrate", "Replace v by y/x"],
            explain: "Check, substitute, separate, back-substitute.",
          },
        ],
      },
      {
        slug: "de-linear",
        title: "Linear first-order equations and applications",
        summary: "The integrating factor method, equations linear in x, and growth and decay models.",
        minutes: 18,
        xp: 45,
        blocks: [
          { type: "formula", tex: t`\frac{dy}{dx} + P(x)\,y = Q(x)`, caption: "Linear in y" },
          { type: "formula", tex: t`\text{IF} = e^{\int P\,dx}, \qquad y \cdot \text{IF} = \int Q \cdot \text{IF}\,dx + C`, caption: "Integrating factor method" },
          {
            type: "text",
            md: t`**Worked example 1.** $\frac{dy}{dx} + \frac{y}{x} = x^2$ ($x > 0$). $P = \frac1x$, so IF $= e^{\ln x} = x$.
$xy = \int x^3\,dx = \frac{x^4}{4} + C \Rightarrow y = \frac{x^3}{4} + \frac{C}{x}$.
Check: $y' + \frac{y}{x} = \frac{3x^2}{4} - \frac{C}{x^2} + \frac{x^2}{4} + \frac{C}{x^2} = x^2$.`,
          },
          {
            type: "table",
            headers: ["Equation", "P", "IF"],
            rows: [
              [t`$y' + 2y = e^x$`, "2", t`$e^{2x}$`],
              [t`$y' + (\tan x)\,y = \sec x$`, t`$\tan x$`, t`$\sec x$`],
              [t`$xy' - y = x^2$ → $y' - \frac{y}{x} = x$`, t`$-\frac1x$`, t`$\frac1x$`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: t`Make the coefficient of $\frac{dy}{dx}$ equal to 1 **before** reading off $P$: in $xy' - y = x^2$, $P = -\frac1x$, not $-1$. And if the equation is linear in $x$ rather than $y$, use $\frac{dx}{dy} + P_1(y)\,x = Q_1(y)$ with IF $= e^{\int P_1\,dy}$.`,
          },
          { type: "heading", text: "Growth and decay" },
          { type: "formula", tex: t`\frac{dA}{dt} = rA \;\Rightarrow\; A = A_0e^{rt}`, caption: "Continuous compounding, population growth (r > 0) or radioactive decay (r < 0)" },
          {
            type: "text",
            md: t`**Worked example 2.** ₹10,000 invested at 5% per year compounded continuously for 10 years: $A = 10\,000\,e^{0.05 \times 10} = 10\,000\,e^{0.5} \approx$ ₹16,487.`,
          },
          { type: "widget", widget: "compound-interest", caption: "Compare yearly compounding with the continuous model A = A₀eʳᵗ." },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The integrating factor of $\frac{dy}{dx} - \frac{2y}{x} = x$ is:`,
                options: [t`$x^2$`, t`$\frac{1}{x^2}$`, t`$e^{-2x}$`, t`$-2\ln x$`],
                answer: 1,
                explain: t`$e^{\int -2/x\,dx} = e^{-2\ln x} = x^{-2}$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              t`Standard form: $y' + Py = Q$ with coefficient of $y'$ equal to 1.`,
              t`IF $= e^{\int P\,dx}$; then $y \cdot \text{IF} = \int Q\cdot\text{IF}\,dx + C$.`,
              "If linear in x, swap roles of x and y.",
              t`Growth/decay: $A = A_0e^{rt}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`IF of $y' + Py = Q$`, back: t`$e^{\int P\,dx}$` },
          { front: t`IF of $y' + y\cot x = \csc x$`, back: t`$\sin x$` },
          { front: t`Solution of $\frac{dA}{dt} = rA$`, back: t`$A = A_0e^{rt}$` },
          { front: "Linear in x form", back: t`$\frac{dx}{dy} + P_1(y)\,x = Q_1(y)$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The integrating factor of $\frac{dy}{dx} + 3y = 5$ is:`,
            options: [t`$e^{3x}$`, t`$e^{-3x}$`, t`$3x$`, t`$e^{5x}$`],
            answer: 0,
            explain: t`$e^{\int 3\,dx} = e^{3x}$.`,
          },
          {
            kind: "numeric",
            q: t`The solution of $y' + y = 1$ with $y(0) = 0$ is $y = 1 - e^{-x}$. As $x \to \infty$, what value does $y$ approach?`,
            answer: 1,
            explain: t`$e^{-x} \to 0$.`,
          },
          {
            kind: "numeric",
            q: t`Bacteria grow as $N = N_0e^{kt}$ and double in 3 hours. How many hours to become 8 times?`,
            answer: 9,
            difficulty: 2,
            explain: t`$8 = 2^3$: three doubling periods of 3 hours each.`,
          },
          {
            kind: "truefalse",
            q: t`$\frac{dy}{dx} + y^2 = x$ is a linear differential equation.`,
            answer: false,
            explain: t`The term $y^2$ makes it non-linear in $y$.`,
          },
          {
            kind: "fill",
            q: t`For $y' + (\tan x)\,y = \sec x$, the integrating factor is ___ x.`,
            answer: ["sec"],
            explain: t`$e^{\int\tan x\,dx} = e^{\ln\sec x} = \sec x$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Linear Programming                                             */
  /* ------------------------------------------------------------ */
  {
    slug: "linear-programming",
    title: "Linear Programming",
    icon: "🏭",
    description: "Formulating optimisation problems, the corner point method, and bounded and unbounded feasible regions.",
    lessons: [
      {
        slug: "lp-formulation",
        title: "Formulating a linear programming problem",
        summary: "Decision variables, objective function, constraints and the feasible region.",
        minutes: 14,
        xp: 35,
        blocks: [
          { type: "text", md: "A furniture dealer in Jaipur has limited money and storage. How many tables and chairs should he stock to earn the most profit? **Linear programming** (LP) answers such questions." },
          {
            type: "table",
            headers: ["Term", "Meaning"],
            rows: [
              ["Decision variables", "The quantities you control, e.g. x tables, y chairs"],
              ["Objective function", t`The linear quantity to maximise or minimise: $Z = ax + by$`],
              ["Constraints", "Linear inequalities from the limits of the problem"],
              ["Non-negativity", t`$x \ge 0$, $y \ge 0$`],
              ["Feasible region", "The set of points satisfying all constraints"],
              ["Optimal solution", "A feasible point giving the best value of Z"],
            ],
          },
          {
            type: "text",
            md: t`**Worked example.** The dealer has ₹50,000 and space for 60 pieces. A table costs ₹2,500 and a chair ₹500. Profit: ₹250 per table, ₹75 per chair.

- Variables: $x$ tables, $y$ chairs.
- Objective: maximise $Z = 250x + 75y$.
- Space: $x + y \le 60$.
- Money: $2500x + 500y \le 50\,000$, i.e. $5x + y \le 100$.
- Non-negativity: $x, y \ge 0$.`,
          },
          { type: "illustration", emoji: "🪑", caption: "Every feasible stock plan is a point inside the region bounded by the lines x + y = 60, 5x + y = 100 and the axes." },
          {
            type: "list",
            ordered: true,
            items: [
              "Read the question twice and name the variables with units.",
              "Write the objective in words, then as Z = ….",
              "Turn each resource limit into an inequality.",
              "Add x ≥ 0, y ≥ 0.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "\"At least\" means ≥ and \"at most\" / \"not more than\" means ≤. Students lose a mark per constraint for reversing these, and many forget the non-negativity constraints altogether.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A diet must contain at least 8 units of vitamin A. Food P has 2 units per kg and food Q has 1 unit per kg. With x kg of P and y kg of Q, the constraint is:",
                options: [t`$2x + y \ge 8$`, t`$2x + y \le 8$`, t`$x + 2y \ge 8$`, t`$2x + y = 8$`],
                answer: 0,
                explain: "\"At least\" gives ≥, and P contributes 2 units per kg.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "LP: optimise a linear objective under linear constraints.",
              "Always include non-negativity.",
              "At least → ≥; at most → ≤.",
              "Simplify constraints by dividing through by common factors.",
            ],
          },
        ],
        flashcards: [
          { front: "Objective function", back: "The linear function Z = ax + by to be maximised or minimised" },
          { front: "Feasible region", back: "The common region of all constraints, including non-negativity" },
          { front: "\"Not more than\" translates to", back: "≤" },
          { front: "Simplify 2500x + 500y ≤ 50000", back: "5x + y ≤ 100" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A factory makes x bicycles and y scooters. Each bicycle needs 2 hours and each scooter 3 hours of machine time; 120 hours are available. The constraint is:",
            options: [t`$2x + 3y \le 120$`, t`$3x + 2y \le 120$`, t`$2x + 3y \ge 120$`, t`$x + y \le 120$`],
            answer: 0,
            explain: "Total machine time used cannot exceed 120 hours.",
          },
          {
            kind: "truefalse",
            q: "In an LPP, the objective function can contain x².",
            answer: false,
            explain: "Both the objective and the constraints must be linear.",
          },
          {
            kind: "fill",
            q: "The constraints x ≥ 0 and y ≥ 0 are called ___ constraints.",
            answer: ["non-negativity", "non negative", "non-negative"],
            explain: "Quantities produced or bought cannot be negative.",
          },
          {
            kind: "numeric",
            q: t`In the dealer example, what is the profit $Z$ for stocking 20 tables and 0 chairs?`,
            answer: 5000,
            explain: t`$250 \times 20 = 5000$.`,
          },
          {
            kind: "order",
            q: "Order the steps of formulating an LPP.",
            items: ["Identify decision variables", "Write the objective function", "Write the constraints", "Add non-negativity conditions"],
            explain: "Variables first, then objective, then constraints.",
          },
        ],
      },
      {
        slug: "lp-corner-point",
        title: "The corner point method",
        summary: "Solving LPPs graphically by evaluating Z at the vertices of the feasible region.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "callout",
            tone: "fact",
            title: "Corner point theorem",
            md: "If an optimal value exists, it occurs at a **corner point** (vertex) of the feasible region. If the region is bounded, both a maximum and a minimum exist.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Draw every constraint line and shade the feasible region.",
              "Find all corner points (solve pairs of boundary lines).",
              "Evaluate Z at each corner.",
              "Pick the largest (max) or smallest (min) value.",
            ],
          },
          {
            type: "text",
            md: t`**Worked example 1 (the Jaipur dealer).** Maximise $Z = 250x + 75y$ subject to $x + y \le 60$, $5x + y \le 100$, $x, y \ge 0$.
The lines $x + y = 60$ and $5x + y = 100$ meet where $4x = 40$, i.e. $(10, 50)$.`,
          },
          {
            type: "table",
            headers: ["Corner", "Z = 250x + 75y"],
            rows: [
              ["(0, 0)", "0"],
              ["(20, 0)", "5000"],
              ["(10, 50)", "**6250** (max)"],
              ["(0, 60)", "4500"],
            ],
          },
          {
            type: "text",
            md: "So he should stock **10 tables and 50 chairs** for a maximum profit of **₹6,250**.",
          },
          {
            type: "text",
            md: t`**Worked example 2.** Minimise and maximise $Z = 3x + 9y$ subject to $x + 3y \le 60$, $x + y \ge 10$, $x \le y$, $x, y \ge 0$.
Corners: $A(0, 10)$, $B(5, 5)$, $C(15, 15)$, $D(0, 20)$. Values: $Z_A = 90$, $Z_B = 60$, $Z_C = 180$, $Z_D = 180$.
Minimum $60$ at $(5, 5)$. Maximum $180$ at **both** $C$ and $D$, so every point on segment $CD$ is optimal.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board trap",
            md: "When two corners tie for the optimum, write that **every point on the segment joining them** is optimal. Writing only one of the corners loses the mark. Also, label the corners on the graph; examiners award a mark for the correct graph.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Maximise $Z = 3x + 2y$ over the region with corners $(0, 0)$, $(4, 0)$, $(2, 3)$, $(0, 4)$. Max $Z$?`,
                answer: 12,
                explain: t`Values: $0, 12, 12, 8$. Maximum 12, attained on the segment joining $(4, 0)$ and $(2, 3)$.`,
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Optimum (if it exists) is at a corner point.",
              "Bounded region: both max and min exist.",
              "Tied corners: the whole edge is optimal.",
              "Find corners by solving pairs of boundary equations.",
            ],
          },
        ],
        flashcards: [
          { front: "Corner point theorem", back: "An optimal value, if it exists, occurs at a vertex of the feasible region" },
          { front: "Bounded feasible region", back: "Z has both a maximum and a minimum" },
          { front: "Two corners give the same maximum", back: "Every point on the segment joining them is optimal" },
          { front: "Dealer example optimum", back: "10 tables, 50 chairs, ₹6,250" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the maximum of $Z = 5x + 3y$ subject to $x + y \le 4$, $x, y \ge 0$.`,
            answer: 20,
            explain: t`Corners $(0, 0), (4, 0), (0, 4)$: values $0, 20, 12$.`,
          },
          {
            kind: "numeric",
            q: t`Find the minimum of $Z = 3x + 9y$ in worked example 2.`,
            answer: 60,
            explain: "At (5, 5): 15 + 45 = 60.",
          },
          {
            kind: "mcq",
            q: t`The corner of $x + 2y \le 8$, $3x + y \le 9$, $x, y \ge 0$ where the two lines meet is:`,
            options: ["(2, 3)", "(3, 2)", "(2, 2)", "(4, 2)"],
            answer: 0,
            difficulty: 2,
            explain: t`From $3x + y = 9$: $y = 9 - 3x$. Then $x + 18 - 6x = 8 \Rightarrow x = 2$, $y = 3$.`,
          },
          {
            kind: "truefalse",
            q: "In an LPP with a bounded feasible region, the maximum of Z can occur at an interior point but not at any corner.",
            answer: false,
            explain: "If the maximum occurs anywhere, it also occurs at a corner.",
          },
          {
            kind: "order",
            q: "Order the steps of the corner point method.",
            items: ["Graph the constraints", "Identify the feasible region", "Find the corner points", "Evaluate Z at each corner", "Choose the optimum"],
            explain: "Graph, shade, corners, evaluate, choose.",
          },
        ],
      },
      {
        slug: "lp-unbounded",
        title: "Unbounded regions and types of LPP",
        summary: "Checking whether an optimum exists when the feasible region is unbounded; diet, manufacturing and transport problems.",
        minutes: 16,
        xp: 45,
        blocks: [
          { type: "text", md: "If the feasible region stretches to infinity, a maximum or minimum might not exist. The corner values alone are not enough; you must run one extra check." },
          {
            type: "callout",
            tone: "fact",
            title: "The open half-plane test",
            md: t`Suppose $M$ is the largest corner value. Draw $ax + by > M$. If this open half-plane has **no** point in common with the feasible region, $M$ is the maximum; otherwise Z has no maximum. For a minimum $m$, test $ax + by < m$ the same way.`,
          },
          {
            type: "text",
            md: t`**Worked example (diet problem).** A hostel mess in Hyderabad mixes two foods. Food P (₹50/kg) has 2 units of iron and 1 unit of protein per kg; food Q (₹70/kg) has 1 unit of iron and 2 units of protein per kg. The mix needs at least 8 units of iron and 10 of protein.

Minimise $Z = 50x + 70y$ subject to $2x + y \ge 8$, $x + 2y \ge 10$, $x, y \ge 0$.

The lines meet where $2x + y = 8$ and $x + 2y = 10$: $x = 2$, $y = 4$.`,
          },
          {
            type: "table",
            headers: ["Corner", "Z = 50x + 70y"],
            rows: [
              ["(0, 8)", "560"],
              ["(2, 4)", "**380**"],
              ["(10, 0)", "500"],
            ],
          },
          {
            type: "text",
            md: t`The region is unbounded (it lies above both lines). Check $50x + 70y < 380$: this half-plane lies below the line through $(2, 4)$ and has no point in common with the feasible region. So the minimum cost is **₹380**, with 2 kg of P and 4 kg of Q.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board / JEE trap",
            md: "For the same unbounded region, Z = 50x + 70y has **no maximum**: you can buy as much food as you like. Writing \"maximum = 560\" because it is the largest corner value is wrong. Always mention the half-plane check in an unbounded case.",
          },
          {
            type: "table",
            headers: ["Type of LPP", "Typical objective"],
            rows: [
              ["Manufacturing", "Maximise profit under machine-hour and labour limits"],
              ["Diet", "Minimise cost while meeting nutrient minimums"],
              ["Transportation", "Minimise shipping cost from depots to shops"],
              ["Allocation", "Best use of land, money or staff"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "If the feasible region is unbounded, the objective function never has a minimum.",
                answer: false,
                explain: "It may or may not; in the diet example the minimum ₹380 exists.",
              },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Empty region",
            md: "If no point satisfies all constraints (e.g. x + y ≤ 2 and x + y ≥ 5), the feasible region is empty and the LPP has no solution at all.",
          },
          {
            type: "keypoints",
            items: [
              "Unbounded region: corner values are only candidates.",
              "Use the open half-plane test to confirm a max or min.",
              "Diet problems usually minimise cost over an unbounded region.",
              "Empty feasible region → no solution.",
            ],
          },
        ],
        flashcards: [
          { front: "Test for a minimum m in an unbounded region", back: "Check whether ax + by < m meets the feasible region; if not, m is the minimum" },
          { front: "Diet problem optimum (example)", back: "₹380 at 2 kg P, 4 kg Q" },
          { front: "Infeasible LPP", back: "No point satisfies all the constraints" },
          { front: "Does Z = 50x + 70y have a max on the diet region?", back: "No, the region is unbounded in the increasing direction" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Minimise $Z = x + y$ subject to $x + 2y \ge 4$, $2x + y \ge 4$, $x, y \ge 0$. Give the minimum value as a decimal.`,
            answer: 2.6667,
            tolerance: 0.01,
            difficulty: 3,
            explain: t`Corners $(0, 4)$, $(\frac43, \frac43)$, $(4, 0)$ give $4, \frac83, 4$. The half-plane $x + y < \frac83$ misses the region, so the minimum is $\frac83 \approx 2.667$.`,
          },
          {
            kind: "mcq",
            q: "A feasible region is unbounded and the largest corner value of Z is 40. To confirm the maximum is 40, you check:",
            options: ["Whether Z > 40 has points in the region", "Whether Z < 40 has points in the region", "Only the origin", "Nothing more"],
            answer: 0,
            explain: "If the half-plane Z > 40 meets the region, there is no maximum.",
          },
          {
            kind: "truefalse",
            q: "The constraints x + y ≤ 2, x + y ≥ 5, x, y ≥ 0 give an empty feasible region.",
            answer: true,
            explain: "No point can satisfy both x + y ≤ 2 and x + y ≥ 5.",
          },
          {
            kind: "fill",
            q: "An LPP that minimises the cost of food while meeting nutrient requirements is called a ___ problem.",
            answer: ["diet"],
            explain: "Diet problems are the classic minimisation LPPs.",
          },
          {
            kind: "numeric",
            q: t`In the diet example, what is the cost (₹) at the corner $(10, 0)$?`,
            answer: 500,
            explain: t`$50 \times 10 = 500$.`,
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Introduction to Three Dimensional Geometry": "intro-3d-geometry",
  "Three Dimensional Geometry": "three-d-geometry",
  "Vector Algebra": "vector-algebra",
  Vectors: "vector-algebra",
  "Differential Equations": "differential-equations",
  "Linear Programming": "linear-programming",
};
