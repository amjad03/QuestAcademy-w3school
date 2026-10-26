import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Vector Algebra (NCERT: CBSE, Karnataka II PUC) = Vectors (ISC)       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-vector-algebra",
    title: "Vector Algebra",
    icon: "➡️",
    description: "Vectors and their types, components, section formula, dot and cross products, projection, area, and the scalar triple product (ISC / JEE).",
    lessons: [
      {
        slug: "c12-vectors-basics",
        title: "Vectors: Types, Direction Cosines and Addition",
        summary: "Scalars and vectors, position vectors, direction cosines, the kinds of vectors, the triangle and parallelogram laws, and multiplying a vector by a scalar.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🧭",
            caption: "\"Walk 300 m\" is not enough to find the temple. \"Walk 300 m towards the north-east\" is. Direction turns a number into a vector.",
          },
          {
            type: "text",
            md: t`A **scalar** is a quantity fixed by one real number (with a unit): length, mass, time, speed, work, temperature. A **vector** has both a **magnitude** and a **direction**: displacement, velocity, acceleration, force, momentum.

We draw a vector as a **directed line segment**. The vector from the **initial point** A to the **terminal point** B is written $\overrightarrow{AB}$ or simply $\vec{a}$. Its length is the **magnitude** $|\overrightarrow{AB}|$ or $|\vec{a}|$, which is never negative.`,
          },
          {
            type: "text",
            md: t`Take the origin O and a point $P(x, y, z)$. The vector $\overrightarrow{OP} = \vec{r}$ is the **position vector** of P. Let $\alpha, \beta, \gamma$ be the angles $\vec{r}$ makes with the positive x-, y- and z-axes. Then $l = \cos\alpha$, $m = \cos\beta$, $n = \cos\gamma$ are the **direction cosines** of $\vec{r}$, and any three numbers proportional to them (such as $x, y, z$) are its **direction ratios**.`,
          },
          {
            type: "formula",
            tex: t`|\overrightarrow{OP}| = r = \sqrt{x^2 + y^2 + z^2}, \qquad l = \frac{x}{r},\; m = \frac{y}{r},\; n = \frac{z}{r}, \qquad l^2 + m^2 + n^2 = 1`,
            caption: "Squaring and adding x = lr, y = mr, z = nr gives x² + y² + z² = r²(l² + m² + n²), so the sum of the squares of the direction cosines is 1.",
          },
          {
            type: "example",
            title: "Direction cosines of a position vector",
            problem: t`Find the magnitude and the direction cosines of the position vector of $P(1, 2, -2)$.`,
            steps: [
              t`$r = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{9} = 3$.`,
              t`$l = \frac{1}{3}$, $m = \frac{2}{3}$, $n = \frac{-2}{3}$.`,
              t`Check: $\frac{1}{9} + \frac{4}{9} + \frac{4}{9} = 1$. ✓`,
            ],
            answer: t`$|\overrightarrow{OP}| = 3$; direction cosines $\frac{1}{3}, \frac{2}{3}, -\frac{2}{3}$. The negative $n$ means the vector makes an obtuse angle with the z-axis.`,
          },
          {
            type: "table",
            headers: ["Type", "Meaning"],
            rows: [
              ["Zero (null) vector", t`initial and terminal points coincide; magnitude 0, no fixed direction; written $\vec{0}$`],
              ["Unit vector", t`magnitude 1; the unit vector along $\vec{a}$ is $\hat{a}$`],
              ["Coinitial vectors", "two or more vectors with the same initial point"],
              ["Collinear (parallel) vectors", "vectors along the same line or parallel lines, whatever their magnitudes and senses"],
              ["Equal vectors", "same magnitude **and** same direction, whatever their initial points (free vectors)"],
              ["Negative of a vector", t`same magnitude, opposite direction: $\overrightarrow{BA} = -\overrightarrow{AB}$`],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Two vectors have the same magnitude and lie on parallel lines, but point in opposite senses. They are:",
                options: ["equal vectors", "collinear but not equal", "coinitial vectors", "not collinear"],
                answer: 1,
                explain: "Parallel lines make them collinear. Equal vectors need the same direction too, so these are collinear but not equal (one is the negative of the other).",
              },
            ],
          },
          {
            type: "text",
            md: t`**Triangle law.** If $\vec{a}$ is placed so that its terminal point is the initial point of $\vec{b}$, the vector from the initial point of $\vec{a}$ to the terminal point of $\vec{b}$ is $\vec{a} + \vec{b}$. In triangle ABC, $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$, and going all the way round, $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \vec{0}$.

**Parallelogram law.** If $\vec{a}$ and $\vec{b}$ are coinitial adjacent sides of a parallelogram, their sum is the diagonal through their common point. The two laws give the same result. Subtraction is adding the negative: $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$.`,
          },
          {
            type: "formula",
            tex: t`\vec{a} + \vec{b} = \vec{b} + \vec{a}, \qquad (\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c}), \qquad \vec{a} + \vec{0} = \vec{a}, \qquad \vec{a} + (-\vec{a}) = \vec{0}`,
            caption: "Vector addition is commutative and associative; the zero vector is the additive identity and −a is the additive inverse.",
          },
          {
            type: "text",
            md: t`**Multiplying by a scalar.** For a real number $\lambda$, $\lambda\vec{a}$ is collinear with $\vec{a}$, with magnitude $|\lambda|\,|\vec{a}|$. It points the same way as $\vec{a}$ if $\lambda > 0$ and the opposite way if $\lambda < 0$; $0\cdot\vec{a} = \vec{0}$. For any non-zero $\vec{a}$, the unit vector is $\hat{a} = \frac{1}{|\vec{a}|}\vec{a}$.`,
          },
          {
            type: "example",
            title: "The third direction angle",
            problem: t`A vector makes angles of $45^\circ$ and $60^\circ$ with the positive x- and y-axes. Find the angle it makes with the positive z-axis.`,
            steps: [
              t`Use $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.`,
              t`$\cos^2 45^\circ = \frac{1}{2}$ and $\cos^2 60^\circ = \frac{1}{4}$.`,
              t`So $\cos^2\gamma = 1 - \frac{1}{2} - \frac{1}{4} = \frac{1}{4}$, giving $\cos\gamma = \pm\frac{1}{2}$.`,
            ],
            answer: t`$\gamma = 60^\circ$ or $\gamma = 120^\circ$ (both are possible directions).`,
          },
          {
            type: "mistake",
            wrong: "Two vectors with the same magnitude are equal.",
            right: "Equal vectors must have the same magnitude **and** the same direction. Their initial points may differ.",
            why: "Magnitude is the part we can measure with a ruler, so it feels like the whole vector. A 5 N push to the east and a 5 N push to the north have very different effects.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Scalar or vector?",
              groups: ["Scalar", "Vector"],
              items: [
                { text: "Work done", group: 0, hint: "Work is a dot product of force and displacement, so it is a number." },
                { text: "Displacement", group: 1, hint: "It says how far and in which direction." },
                { text: "Speed", group: 0, hint: "Speed has no direction; velocity does." },
                { text: "Momentum", group: 1, hint: "p = mv, and v is a vector." },
                { text: "Temperature", group: 0, hint: "One number fixes it." },
                { text: "Force", group: 1, hint: "A push is always in some direction." },
                { text: "Time", group: 0, hint: "One number with a unit." },
                { text: "Acceleration", group: 1, hint: "The rate of change of velocity, which is a vector." },
              ],
              explain: "If one number (with a unit) says everything, it is a scalar. If you also need a direction, it is a vector.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "One-mark questions often ask for the direction cosines of a vector, or the third angle when two are given. Write the formula $l^2 + m^2 + n^2 = 1$ first, and give **both** signs when you take a square root unless the question rules one out.",
          },
          {
            type: "keypoints",
            items: [
              "A vector has magnitude and direction; a scalar has magnitude only.",
              t`Direction cosines of $x\hat{i} + y\hat{j} + z\hat{k}$ are $\frac{x}{r}, \frac{y}{r}, \frac{z}{r}$, with $l^2 + m^2 + n^2 = 1$.`,
              "Equal vectors: same magnitude and direction. Collinear vectors: parallel, any magnitude or sense.",
              t`Triangle law: $\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$; addition is commutative and associative.`,
              t`$\lambda\vec{a}$ has magnitude $|\lambda||\vec{a}|$ and is collinear with $\vec{a}$; $\hat{a} = \vec{a}/|\vec{a}|$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Position vector of P(x, y, z)", back: t`$\overrightarrow{OP} = x\hat{i} + y\hat{j} + z\hat{k}$, with magnitude $\sqrt{x^2 + y^2 + z^2}$.` },
          { front: "Direction cosines", back: t`$l = \cos\alpha, m = \cos\beta, n = \cos\gamma$, where $\alpha, \beta, \gamma$ are the angles with the positive axes.` },
          { front: t`$l^2 + m^2 + n^2 = ?$`, back: "1, for the direction cosines of any line or vector." },
          { front: "Equal vectors", back: "Same magnitude and same direction; initial points may differ." },
          { front: "Collinear vectors", back: "Vectors parallel to the same line, whatever their magnitudes or senses." },
          { front: "Triangle law of addition", back: t`$\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}$.` },
          { front: t`Magnitude of $\lambda\vec{a}$`, back: t`$|\lambda|\,|\vec{a}|$; same direction if $\lambda > 0$, opposite if $\lambda < 0$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The direction cosines of $\vec{r} = 2\hat{i} - 3\hat{j} + 6\hat{k}$ are:`,
            options: [t`$2, -3, 6$`, t`$\frac{2}{7}, -\frac{3}{7}, \frac{6}{7}$`, t`$\frac{2}{5}, -\frac{3}{5}, \frac{6}{5}$`, t`$\frac{2}{7}, \frac{3}{7}, \frac{6}{7}$`],
            answer: 1,
            explain: t`$|\vec{r}| = \sqrt{4 + 9 + 36} = 7$. Divide each component by 7 and keep the sign.`,
          },
          {
            kind: "truefalse",
            q: t`$\frac{1}{2}, \frac{1}{2}, \frac{1}{2}$ can be the direction cosines of a line.`,
            answer: false,
            explain: t`$\frac{1}{4} + \frac{1}{4} + \frac{1}{4} = \frac{3}{4} \neq 1$.`,
          },
          {
            kind: "mcq",
            q: t`In triangle ABC, $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA}$ equals:`,
            options: [t`$2\overrightarrow{AC}$`, t`$\overrightarrow{AC}$`, t`$\vec{0}$`, "the perimeter"],
            answer: 2,
            explain: "Going round the triangle brings you back to A, so the total displacement is the zero vector. The perimeter is a scalar, not a vector sum.",
          },
          {
            kind: "numeric",
            q: t`A vector makes angles $90^\circ$ and $60^\circ$ with the x- and y-axes and an acute angle $\gamma$ with the z-axis. Find $\gamma$ in degrees.`,
            answer: 30,
            explain: t`$\cos^2\gamma = 1 - 0 - \frac{1}{4} = \frac{3}{4}$, so $\cos\gamma = \frac{\sqrt{3}}{2}$ and $\gamma = 30^\circ$.`,
            unit: "°",
            difficulty: 2,
            hint: t`Use $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.`,
          },
          {
            kind: "mcq",
            q: t`If $|\vec{a}| = 4$, then $|-3\vec{a}|$ is:`,
            options: ["−12", "12", "4", "−4"],
            answer: 1,
            explain: t`$|\lambda\vec{a}| = |\lambda||\vec{a}| = 3 \times 4 = 12$. A magnitude is never negative; the minus sign only reverses the direction.`,
          },
          {
            kind: "multi",
            q: "Which of these are vector quantities?",
            options: ["Velocity", "Work", "Force", "Mass", "Displacement"],
            answers: [0, 2, 4],
            explain: "Velocity, force and displacement need a direction. Work and mass are scalars.",
          },
          {
            kind: "mcq",
            q: t`ABCD is a parallelogram. $\overrightarrow{AB} + \overrightarrow{AD}$ equals:`,
            options: [t`$\overrightarrow{AC}$`, t`$\overrightarrow{BD}$`, t`$\overrightarrow{DB}$`, t`$\overrightarrow{CA}$`],
            answer: 0,
            explain: t`By the parallelogram law the sum of coinitial sides is the diagonal through A, which is $\overrightarrow{AC}$. $\overrightarrow{BD} = \overrightarrow{AD} - \overrightarrow{AB}$ is the difference.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-vectors-components-section",
        title: "Components, Section Formula and Collinearity",
        summary: "Writing vectors with i, j, k; magnitude, unit vectors, the vector joining two points, the section formula (internal and external) and testing points for collinearity.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "📦",
            caption: "A drone climbs 6 m, flies 2 m east and 3 m north. Its displacement is one arrow, but it is easiest to handle as three separate pieces.",
          },
          {
            type: "text",
            md: t`Let $\hat{i}, \hat{j}, \hat{k}$ be unit vectors along the positive x-, y- and z-axes. The position vector of $P(x, y, z)$ is $\vec{r} = x\hat{i} + y\hat{j} + z\hat{k}$. This is the **component form**. The numbers $x, y, z$ are the **scalar components**, and $x\hat{i}, y\hat{j}, z\hat{k}$ are the **vector components** along the axes.`,
          },
          {
            type: "formula",
            tex: t`\vec{a} \pm \vec{b} = (a_1 \pm b_1)\hat{i} + (a_2 \pm b_2)\hat{j} + (a_3 \pm b_3)\hat{k}, \qquad \lambda\vec{a} = \lambda a_1\hat{i} + \lambda a_2\hat{j} + \lambda a_3\hat{k}`,
            caption: t`For $\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$ and $\vec{b} = b_1\hat{i} + b_2\hat{j} + b_3\hat{k}$. The vectors are equal exactly when $a_1 = b_1$, $a_2 = b_2$, $a_3 = b_3$.`,
          },
          {
            type: "example",
            title: "Unit vector and a vector of given length",
            problem: t`(a) Find the unit vector along $\vec{a} = 2\hat{i} + 3\hat{j} + 6\hat{k}$. (b) Find a vector of magnitude 5 along $\overrightarrow{PQ}$, where $P(1, 2, 3)$ and $Q(3, 4, 4)$.`,
            steps: [
              t`(a) $|\vec{a}| = \sqrt{4 + 9 + 36} = 7$, so $\hat{a} = \frac{1}{7}(2\hat{i} + 3\hat{j} + 6\hat{k})$.`,
              t`(b) $\overrightarrow{PQ} = (3 - 1)\hat{i} + (4 - 2)\hat{j} + (4 - 3)\hat{k} = 2\hat{i} + 2\hat{j} + \hat{k}$, with magnitude $\sqrt{4 + 4 + 1} = 3$.`,
              t`Unit vector along PQ: $\frac{1}{3}(2\hat{i} + 2\hat{j} + \hat{k})$. Multiply by 5.`,
            ],
            answer: t`(a) $\frac{2}{7}\hat{i} + \frac{3}{7}\hat{j} + \frac{6}{7}\hat{k}$; (b) $\frac{10}{3}\hat{i} + \frac{10}{3}\hat{j} + \frac{5}{3}\hat{k}$.`,
          },
          {
            type: "text",
            md: t`**Vector joining two points.** For $P_1(x_1, y_1, z_1)$ and $P_2(x_2, y_2, z_2)$, $\overrightarrow{P_1P_2} = \overrightarrow{OP_2} - \overrightarrow{OP_1} = (x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j} + (z_2 - z_1)\hat{k}$: always "terminal minus initial".

**Collinear vectors.** $\vec{b}$ is collinear with a non-zero $\vec{a}$ exactly when $\vec{b} = \lambda\vec{a}$ for some scalar $\lambda$, that is, when $\frac{b_1}{a_1} = \frac{b_2}{a_2} = \frac{b_3}{a_3}$ (read a zero denominator as "the matching numerator is also zero").`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`For which $p$ are $2\hat{i} - 3\hat{j} + 4\hat{k}$ and $-4\hat{i} + p\hat{j} - 8\hat{k}$ collinear?`,
                options: ["−6", "6", "3", "−3"],
                answer: 1,
                explain: t`The ratios must match: $\frac{-4}{2} = \frac{-8}{4} = -2$, so $\frac{p}{-3} = -2$ and $p = 6$.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Section formula",
          },
          {
            type: "formula",
            tex: t`\text{internal } m : n:\; \vec{r} = \frac{m\vec{b} + n\vec{a}}{m + n}, \qquad \text{external } m : n:\; \vec{r} = \frac{m\vec{b} - n\vec{a}}{m - n}, \qquad \text{mid-point: } \frac{\vec{a} + \vec{b}}{2}`,
            caption: t`A and B have position vectors $\vec{a}$ and $\vec{b}$; R divides AB in the ratio $m : n$, so $AR : RB = m : n$.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Let R divide AB internally with $\frac{AR}{RB} = \frac{m}{n}$, so $n\,\overrightarrow{AR} = m\,\overrightarrow{RB}$ (the two vectors point the same way).`,
              t`Write $\overrightarrow{AR} = \vec{r} - \vec{a}$ and $\overrightarrow{RB} = \vec{b} - \vec{r}$.`,
              t`Then $n(\vec{r} - \vec{a}) = m(\vec{b} - \vec{r})$, so $(m + n)\vec{r} = m\vec{b} + n\vec{a}$.`,
              t`Divide by $m + n$. For external division R lies outside AB, so $\overrightarrow{AR}$ and $\overrightarrow{BR}$ point the same way: $n(\vec{r} - \vec{a}) = m(\vec{r} - \vec{b})$, giving $\vec{r} = \frac{m\vec{b} - n\vec{a}}{m - n}$.`,
            ],
          },
          {
            type: "example",
            title: "Dividing a segment internally and externally",
            problem: t`A and B have position vectors $\hat{i} - 2\hat{j} + 3\hat{k}$ and $4\hat{i} + \hat{j} - 3\hat{k}$. Find the position vectors of the points dividing AB in the ratio $2 : 1$ (i) internally (ii) externally.`,
            steps: [
              t`$2\vec{b} = 8\hat{i} + 2\hat{j} - 6\hat{k}$ and $1\cdot\vec{a} = \hat{i} - 2\hat{j} + 3\hat{k}$.`,
              t`Internal: $\frac{2\vec{b} + \vec{a}}{3} = \frac{9\hat{i} + 0\hat{j} - 3\hat{k}}{3} = 3\hat{i} - \hat{k}$.`,
              t`External: $\frac{2\vec{b} - \vec{a}}{2 - 1} = 7\hat{i} + 4\hat{j} - 9\hat{k}$.`,
            ],
            answer: t`Internal point: $3\hat{i} - \hat{k}$; external point: $7\hat{i} + 4\hat{j} - 9\hat{k}$.`,
          },
          {
            type: "example",
            title: "Showing three points are collinear",
            problem: t`Show that $A(1, 2, 3)$, $B(2, 3, 5)$ and $C(4, 5, 9)$ are collinear.`,
            steps: [
              t`$\overrightarrow{AB} = \hat{i} + \hat{j} + 2\hat{k}$ and $\overrightarrow{BC} = 2\hat{i} + 2\hat{j} + 4\hat{k}$.`,
              t`$\overrightarrow{BC} = 2\overrightarrow{AB}$, so the two vectors are parallel, and they share the point B.`,
              t`Check with lengths: $|\overrightarrow{AB}| = \sqrt{6}$, $|\overrightarrow{BC}| = 2\sqrt{6}$, $|\overrightarrow{AC}| = |3\hat{i} + 3\hat{j} + 6\hat{k}| = 3\sqrt{6} = \sqrt{6} + 2\sqrt{6}$.`,
            ],
            answer: "A, B, C lie on one line (B lies between A and C).",
          },
          {
            type: "mistake",
            wrong: t`R divides AB in the ratio $m : n$, so $\vec{r} = \frac{m\vec{a} + n\vec{b}}{m + n}$.`,
            right: t`$\vec{r} = \frac{m\vec{b} + n\vec{a}}{m + n}$: the number $m$ goes with the **far** end B.`,
            why: "Writing m with a and n with b looks tidy, but it puts R closer to the wrong end. Test with m = 1, n = 0: R should be B, and only the correct formula gives b.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each vector with its magnitude.",
              pairs: [
                [t`$3\hat{i} + 4\hat{j}$`, "5"],
                [t`$\hat{i} + \hat{j} + \hat{k}$`, t`$\sqrt{3}$`],
                [t`$2\hat{i} - \hat{j} + 2\hat{k}$`, "3"],
                [t`$6\hat{i} + 2\hat{j} - 3\hat{k}$`, "7"],
              ],
              explain: t`Square every component (signs disappear), add, and take the square root: $|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "In section-formula questions, write the formula, then substitute. Marks are lost when students divide by m + n in an external division or forget to simplify. For collinearity, showing one vector is a scalar multiple of the other **and** saying the vectors share a point earns full marks.",
          },
          {
            type: "keypoints",
            items: [
              t`$\vec{a} = a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$ has $|\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$; add and scale component by component.`,
              t`$\overrightarrow{P_1P_2}$ = position vector of $P_2$ minus position vector of $P_1$.`,
              t`Collinear: $\vec{b} = \lambda\vec{a}$, i.e. components in the same ratio.`,
              t`Internal division $m : n$: $\frac{m\vec{b} + n\vec{a}}{m + n}$; external: $\frac{m\vec{b} - n\vec{a}}{m - n}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Magnitude of $a_1\hat{i} + a_2\hat{j} + a_3\hat{k}$`, back: t`$\sqrt{a_1^2 + a_2^2 + a_3^2}$` },
          { front: "Scalar vs vector components", back: t`Scalar components of $x\hat{i} + y\hat{j} + z\hat{k}$: $x, y, z$. Vector components: $x\hat{i}, y\hat{j}, z\hat{k}$.` },
          { front: "Vector from P₁ to P₂", back: t`$(x_2 - x_1)\hat{i} + (y_2 - y_1)\hat{j} + (z_2 - z_1)\hat{k}$` },
          { front: "Condition for a and b to be collinear", back: t`$\vec{b} = \lambda\vec{a}$, i.e. $\frac{b_1}{a_1} = \frac{b_2}{a_2} = \frac{b_3}{a_3}$.` },
          { front: "Internal section formula (m : n)", back: t`$\vec{r} = \frac{m\vec{b} + n\vec{a}}{m + n}$` },
          { front: "External section formula (m : n)", back: t`$\vec{r} = \frac{m\vec{b} - n\vec{a}}{m - n}$` },
          { front: "Mid-point of AB", back: t`$\frac{\vec{a} + \vec{b}}{2}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`The unit vector along $\hat{i} - 2\hat{j} + 2\hat{k}$ is:`,
            options: [t`$\hat{i} - 2\hat{j} + 2\hat{k}$`, t`$\frac{1}{3}(\hat{i} - 2\hat{j} + 2\hat{k})$`, t`$\frac{1}{9}(\hat{i} - 2\hat{j} + 2\hat{k})$`, t`$\frac{1}{5}(\hat{i} - 2\hat{j} + 2\hat{k})$`],
            answer: 1,
            explain: t`Magnitude $= \sqrt{1 + 4 + 4} = 3$, not 9 (that is the square) and not 5 (that is $1 + 2 + 2$).`,
          },
          {
            kind: "numeric",
            q: t`Find the magnitude of $\overrightarrow{AB}$ for $A(2, -1, 3)$ and $B(4, 1, 2)$.`,
            answer: 3,
            explain: t`$\overrightarrow{AB} = 2\hat{i} + 2\hat{j} - \hat{k}$, magnitude $\sqrt{4 + 4 + 1} = 3$.`,
          },
          {
            kind: "mcq",
            q: t`The mid-point of the segment joining the points with position vectors $2\hat{i} + 4\hat{j} - \hat{k}$ and $4\hat{i} - 2\hat{j} + 3\hat{k}$ is:`,
            options: [t`$3\hat{i} + \hat{j} + \hat{k}$`, t`$6\hat{i} + 2\hat{j} + 2\hat{k}$`, t`$\hat{i} - 3\hat{j} + 2\hat{k}$`, t`$3\hat{i} + 3\hat{j} + \hat{k}$`],
            answer: 0,
            explain: t`Add and halve: $\frac{6\hat{i} + 2\hat{j} + 2\hat{k}}{2} = 3\hat{i} + \hat{j} + \hat{k}$. Option 2 forgets to halve; option 3 is half the difference.`,
          },
          {
            kind: "numeric",
            q: t`$\vec{a} = 2\hat{i} + \hat{j} - 2\hat{k}$. Find $|3\vec{a} - \vec{a}|$.`,
            answer: 6,
            explain: t`$3\vec{a} - \vec{a} = 2\vec{a}$, and $|\vec{a}| = 3$, so the answer is 6.`,
            difficulty: 2,
            hint: "Simplify before you compute components.",
          },
          {
            kind: "mcq",
            q: t`R divides AB externally in the ratio $3 : 1$, with $\vec{a} = \hat{i}$ and $\vec{b} = \hat{j}$. Then $\vec{r}$ is:`,
            options: [t`$\frac{3\hat{j} + \hat{i}}{4}$`, t`$\frac{3\hat{j} - \hat{i}}{2}$`, t`$\frac{3\hat{i} - \hat{j}}{2}$`, t`$3\hat{j} - \hat{i}$`],
            answer: 1,
            explain: t`External: $\frac{m\vec{b} - n\vec{a}}{m - n} = \frac{3\hat{j} - \hat{i}}{2}$. Option 1 is the internal point; option 3 swaps $\vec{a}$ and $\vec{b}$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`The points with position vectors $\hat{i} + \hat{j}$, $2\hat{i} + 3\hat{j}$ and $3\hat{i} + 5\hat{j}$ are collinear.`,
            answer: true,
            explain: t`Successive differences are $\hat{i} + 2\hat{j}$ and $\hat{i} + 2\hat{j}$: equal, so the points are on one line.`,
          },
          {
            kind: "mcq",
            q: t`If $x\hat{i} + 2\hat{j} - z\hat{k} = 3\hat{i} + y\hat{j} + 4\hat{k}$, then $x + y + z$ is:`,
            options: ["9", "1", "−1", "5"],
            answer: 1,
            explain: t`Compare components: $x = 3$, $y = 2$, $-z = 4$ so $z = -4$. Then $3 + 2 - 4 = 1$.`,
          },
        ],
      },
      {
        slug: "c12-vectors-dot-product",
        title: "Scalar (Dot) Product and Projection",
        summary: "The dot product, its properties and component form, the angle between two vectors, perpendicularity, projection of one vector on another, and the triangle inequality.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🧳",
            caption: "Pulling a trolley bag at an angle: only the part of your pull along the floor moves it forward. The dot product measures exactly that part.",
          },
          {
            type: "text",
            md: t`The **scalar (dot) product** of two non-zero vectors $\vec{a}$ and $\vec{b}$ with angle $\theta$ between them ($0 \le \theta \le \pi$) is the **number** $\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|\cos\theta$. If either vector is $\vec{0}$, the product is 0.

The angle $\theta$ is measured between the vectors placed tail to tail. The sign of the dot product tells you the kind of angle: positive for acute, zero for a right angle, negative for obtuse.`,
          },
          {
            type: "formula",
            tex: t`\vec{a}\cdot\vec{b} = a_1b_1 + a_2b_2 + a_3b_3, \qquad \cos\theta = \frac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}, \qquad \vec{a}\cdot\vec{a} = |\vec{a}|^2`,
            caption: t`Because $\hat{i}\cdot\hat{i} = \hat{j}\cdot\hat{j} = \hat{k}\cdot\hat{k} = 1$ and $\hat{i}\cdot\hat{j} = \hat{j}\cdot\hat{k} = \hat{k}\cdot\hat{i} = 0$.`,
          },
          {
            type: "list",
            items: [
              t`**Commutative:** $\vec{a}\cdot\vec{b} = \vec{b}\cdot\vec{a}$.`,
              t`**Distributive:** $\vec{a}\cdot(\vec{b} + \vec{c}) = \vec{a}\cdot\vec{b} + \vec{a}\cdot\vec{c}$.`,
              t`**Scalars move out:** $(\lambda\vec{a})\cdot\vec{b} = \lambda(\vec{a}\cdot\vec{b}) = \vec{a}\cdot(\lambda\vec{b})$.`,
              t`**Perpendicular:** for non-zero vectors, $\vec{a}\cdot\vec{b} = 0 \iff \vec{a} \perp \vec{b}$.`,
              t`**Same / opposite direction:** $\theta = 0 \Rightarrow \vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|$; $\theta = \pi \Rightarrow \vec{a}\cdot\vec{b} = -|\vec{a}||\vec{b}|$.`,
            ],
          },
          {
            type: "example",
            title: "Angle between two vectors",
            problem: t`Find the angle between $\vec{a} = \hat{i} + 2\hat{j} + 2\hat{k}$ and $\vec{b} = 2\hat{i} - \hat{j} + 2\hat{k}$.`,
            steps: [
              t`$\vec{a}\cdot\vec{b} = (1)(2) + (2)(-1) + (2)(2) = 4$.`,
              t`$|\vec{a}| = \sqrt{1 + 4 + 4} = 3$ and $|\vec{b}| = \sqrt{4 + 1 + 4} = 3$.`,
              t`$\cos\theta = \frac{4}{3 \times 3} = \frac{4}{9}$.`,
            ],
            answer: t`$\theta = \cos^{-1}\left(\frac{4}{9}\right)$, an acute angle.`,
          },
          {
            type: "text",
            md: t`**Projection.** The (scalar) **projection** of $\vec{a}$ on $\vec{b}$ is the signed length of the shadow of $\vec{a}$ on the line of $\vec{b}$: $|\vec{a}|\cos\theta = \vec{a}\cdot\hat{b} = \frac{\vec{a}\cdot\vec{b}}{|\vec{b}|}$. The **projection vector** is $(\vec{a}\cdot\hat{b})\,\hat{b}$. Note the division is by $|\vec{b}|$, the vector you project **onto**.`,
          },
          {
            type: "example",
            title: "Projection and perpendicularity",
            problem: t`(a) Find the projection of $\vec{a} = 2\hat{i} + 3\hat{j} + 2\hat{k}$ on $\vec{b} = \hat{i} + 2\hat{j} + \hat{k}$. (b) Find $\lambda$ so that $2\hat{i} + \lambda\hat{j} + \hat{k}$ is perpendicular to $\hat{i} - 2\hat{j} + 3\hat{k}$.`,
            steps: [
              t`(a) $\vec{a}\cdot\vec{b} = 2 + 6 + 2 = 10$ and $|\vec{b}| = \sqrt{1 + 4 + 1} = \sqrt{6}$.`,
              t`Projection $= \frac{10}{\sqrt{6}} = \frac{10\sqrt{6}}{6} = \frac{5\sqrt{6}}{3}$.`,
              t`(b) Set the dot product to zero: $2(1) + \lambda(-2) + 1(3) = 0$, so $5 - 2\lambda = 0$.`,
            ],
            answer: t`(a) $\frac{5\sqrt{6}}{3}$; (b) $\lambda = \frac{5}{2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$|\vec{a}| = 3$, $|\vec{b}| = 4$ and $|\vec{a} + \vec{b}| = 5$. The angle between $\vec{a}$ and $\vec{b}$ is:`,
                options: [t`$0^\circ$`, t`$60^\circ$`, t`$90^\circ$`, t`$120^\circ$`],
                answer: 2,
                explain: t`$|\vec{a} + \vec{b}|^2 = |\vec{a}|^2 + 2\vec{a}\cdot\vec{b} + |\vec{b}|^2$ gives $25 = 9 + 2\vec{a}\cdot\vec{b} + 16$, so $\vec{a}\cdot\vec{b} = 0$.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Triangle inequality (a standard derivation)",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`$|\vec{a} + \vec{b}|^2 = (\vec{a} + \vec{b})\cdot(\vec{a} + \vec{b}) = |\vec{a}|^2 + 2\,\vec{a}\cdot\vec{b} + |\vec{b}|^2$.`,
              t`Since $\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|\cos\theta \le |\vec{a}||\vec{b}|$ (Cauchy–Schwarz), we get $|\vec{a} + \vec{b}|^2 \le |\vec{a}|^2 + 2|\vec{a}||\vec{b}| + |\vec{b}|^2$.`,
              t`The right side is $(|\vec{a}| + |\vec{b}|)^2$; both sides are non-negative, so take square roots.`,
              t`Result: $|\vec{a} + \vec{b}| \le |\vec{a}| + |\vec{b}|$, with equality only when $\vec{a}$ and $\vec{b}$ point the same way.`,
            ],
          },
          {
            type: "mistake",
            wrong: t`The projection of $\vec{a}$ on $\vec{b}$ is $\frac{\vec{a}\cdot\vec{b}}{|\vec{a}|}$.`,
            right: t`Projection of $\vec{a}$ **on** $\vec{b}$ is $\frac{\vec{a}\cdot\vec{b}}{|\vec{b}|}$. Divide by the length of the vector you project onto.`,
            why: t`The numerator is symmetric, so it is easy to grab the wrong magnitude. Think of it as $\vec{a}\cdot\hat{b}$: you need the unit vector of $\vec{b}$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`$\vec{a} \neq \vec{0}$ and $\vec{a}\cdot\vec{b} = \vec{a}\cdot\vec{c}$. Must $\vec{b} = \vec{c}$?`,
              emoji: "🤔",
              options: ["Yes, cancel a from both sides", "No, b − c only has to be perpendicular to a"],
              answer: 1,
              trap: 0,
              explain: t`$\vec{a}\cdot(\vec{b} - \vec{c}) = 0$ only says $\vec{b} - \vec{c} \perp \vec{a}$. Example: $\vec{a} = \hat{i}$, $\vec{b} = \hat{j}$, $\vec{c} = \hat{k}$ gives $0 = 0$ though $\vec{b} \neq \vec{c}$. There is no division by a vector.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`For "find the angle" answers, leave $\theta = \cos^{-1}(\ldots)$ if it is not a standard angle. In projection questions, state clearly which vector is projected on which; the marking scheme gives a step mark for $\hat{b}$ or $|\vec{b}|$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$, a scalar.`,
              t`Non-zero $\vec{a} \perp \vec{b} \iff \vec{a}\cdot\vec{b} = 0$; $\vec{a}\cdot\vec{a} = |\vec{a}|^2$.`,
              t`Projection of $\vec{a}$ on $\vec{b}$ = $\frac{\vec{a}\cdot\vec{b}}{|\vec{b}|}$; projection vector = $(\vec{a}\cdot\hat{b})\hat{b}$.`,
              t`$|\vec{a} \pm \vec{b}|^2 = |\vec{a}|^2 \pm 2\vec{a}\cdot\vec{b} + |\vec{b}|^2$ solves most magnitude questions.`,
            ],
          },
        ],
        flashcards: [
          { front: "Dot product (definition)", back: t`$\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|\cos\theta$, $0 \le \theta \le \pi$.` },
          { front: "Dot product (components)", back: t`$a_1b_1 + a_2b_2 + a_3b_3$` },
          { front: t`$\hat{i}\cdot\hat{i}$ and $\hat{i}\cdot\hat{j}$`, back: "1 and 0." },
          { front: "Perpendicular test", back: t`Non-zero $\vec{a} \perp \vec{b} \iff \vec{a}\cdot\vec{b} = 0$.` },
          { front: t`Projection of $\vec{a}$ on $\vec{b}$`, back: t`$\frac{\vec{a}\cdot\vec{b}}{|\vec{b}|}$` },
          { front: t`$|\vec{a} + \vec{b}|^2$`, back: t`$|\vec{a}|^2 + 2\vec{a}\cdot\vec{b} + |\vec{b}|^2$` },
          { front: "Triangle inequality", back: t`$|\vec{a} + \vec{b}| \le |\vec{a}| + |\vec{b}|$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $(\hat{i} - 2\hat{j} + 3\hat{k})\cdot(4\hat{i} + \hat{j} - \hat{k})$.`,
            answer: -1,
            explain: t`$4 - 2 - 3 = -1$.`,
          },
          {
            kind: "mcq",
            q: t`If $\vec{a}\cdot\vec{b} < 0$ for non-zero vectors, the angle between them is:`,
            options: ["acute", "a right angle", "obtuse", "zero"],
            answer: 2,
            explain: t`$\cos\theta < 0$ means $\frac{\pi}{2} < \theta \le \pi$.`,
          },
          {
            kind: "mcq",
            q: t`The projection of $\vec{a} = 3\hat{i} + 4\hat{k}$ on $\vec{b} = \hat{k}$ is:`,
            options: ["3", "4", "5", t`$\frac{4}{5}$`],
            answer: 1,
            explain: t`$\vec{a}\cdot\hat{k} = 4$ and $|\hat{k}| = 1$. Dividing by $|\vec{a}| = 5$ gives the wrong answer $\frac{4}{5}$.`,
          },
          {
            kind: "numeric",
            q: t`Find $\lambda$ if $\lambda\hat{i} + 2\hat{j} + \hat{k}$ is perpendicular to $4\hat{i} - 2\hat{j} - 2\hat{k}$.`,
            answer: 1.5,
            explain: t`$4\lambda - 4 - 2 = 0$ so $\lambda = \frac{6}{4} = 1.5$.`,
          },
          {
            kind: "mcq",
            q: t`$(\vec{a} + \vec{b})\cdot(\vec{a} - \vec{b}) = 0$ means:`,
            options: [t`$\vec{a} \perp \vec{b}$`, t`$|\vec{a}| = |\vec{b}|$`, t`$\vec{a} = \vec{b}$`, t`$\vec{a} \parallel \vec{b}$`],
            answer: 1,
            explain: t`Expanding gives $|\vec{a}|^2 - |\vec{b}|^2 = 0$. Geometrically, the diagonals of a rhombus are perpendicular.`,
            difficulty: 2,
            hint: "Expand using the distributive law; the cross terms cancel.",
          },
          {
            kind: "numeric",
            q: t`$|\vec{a}| = 2$, $|\vec{b}| = 3$ and the angle between them is $60^\circ$. Find $|\vec{a} - \vec{b}|^2$.`,
            answer: 7,
            explain: t`$\vec{a}\cdot\vec{b} = 2 \cdot 3 \cdot \frac{1}{2} = 3$. $|\vec{a} - \vec{b}|^2 = 4 - 6 + 9 = 7$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`$\vec{a}\cdot\vec{b}$ is a vector perpendicular to both $\vec{a}$ and $\vec{b}$.`,
            answer: false,
            explain: "The dot product is a scalar. The vector perpendicular to both is the cross product.",
          },
        ],
      },
      {
        slug: "c12-vectors-cross-triple",
        title: "Vector (Cross) Product, Area and the Scalar Triple Product",
        summary: "The cross product and the right-hand rule, its determinant form and properties, areas of parallelograms and triangles, and (for ISC and JEE) the scalar triple product, volume and coplanarity.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🔩",
            caption: "Turn a spanner clockwise and the bolt goes in; anticlockwise and it comes out. The cross product points the way the bolt moves.",
          },
          {
            type: "text",
            md: t`The **vector (cross) product** of non-zero vectors $\vec{a}$ and $\vec{b}$ with angle $\theta$ ($0 \le \theta \le \pi$) is $\vec{a} \times \vec{b} = |\vec{a}||\vec{b}|\sin\theta\,\hat{n}$, where $\hat{n}$ is the unit vector **perpendicular to both** $\vec{a}$ and $\vec{b}$ such that $\vec{a}, \vec{b}, \hat{n}$ form a **right-handed system** (curl the fingers of the right hand from $\vec{a}$ to $\vec{b}$; the thumb shows $\hat{n}$).

Unlike the dot product, the result is a **vector**. If $\vec{a}$ and $\vec{b}$ are parallel ($\theta = 0$ or $\pi$), $\vec{a} \times \vec{b} = \vec{0}$.`,
          },
          {
            type: "formula",
            tex: t`\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = (a_2b_3 - a_3b_2)\hat{i} - (a_1b_3 - a_3b_1)\hat{j} + (a_1b_2 - a_2b_1)\hat{k}`,
            caption: t`Built from $\hat{i}\times\hat{j} = \hat{k}$, $\hat{j}\times\hat{k} = \hat{i}$, $\hat{k}\times\hat{i} = \hat{j}$ and $\hat{i}\times\hat{i} = \hat{j}\times\hat{j} = \hat{k}\times\hat{k} = \vec{0}$.`,
          },
          {
            type: "list",
            items: [
              t`**Not commutative:** $\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$.`,
              t`**Distributive:** $\vec{a} \times (\vec{b} + \vec{c}) = \vec{a} \times \vec{b} + \vec{a} \times \vec{c}$.`,
              t`$\lambda(\vec{a} \times \vec{b}) = (\lambda\vec{a}) \times \vec{b} = \vec{a} \times (\lambda\vec{b})$.`,
              t`Non-zero $\vec{a} \parallel \vec{b} \iff \vec{a} \times \vec{b} = \vec{0}$; in particular $\vec{a} \times \vec{a} = \vec{0}$.`,
              t`**Area:** $|\vec{a} \times \vec{b}|$ is the area of the parallelogram with adjacent sides $\vec{a}, \vec{b}$; half of it is the area of the triangle. With diagonals $\vec{d_1}, \vec{d_2}$, the parallelogram's area is $\frac{1}{2}|\vec{d_1} \times \vec{d_2}|$.`,
            ],
          },
          {
            type: "example",
            title: "Cross product and a unit normal",
            problem: t`For $\vec{a} = \hat{i} + 2\hat{j} + 3\hat{k}$ and $\vec{b} = 2\hat{i} - \hat{j} + \hat{k}$, find $\vec{a} \times \vec{b}$ and a unit vector perpendicular to both.`,
            steps: [
              t`$\hat{i}$: $(2)(1) - (3)(-1) = 5$.`,
              t`$\hat{j}$: $-[(1)(1) - (3)(2)] = -(-5) = 5$.`,
              t`$\hat{k}$: $(1)(-1) - (2)(2) = -5$. So $\vec{a} \times \vec{b} = 5\hat{i} + 5\hat{j} - 5\hat{k}$, with magnitude $5\sqrt{3}$.`,
              t`Check: $(5, 5, -5)\cdot(1, 2, 3) = 5 + 10 - 15 = 0$ ✓ and $(5, 5, -5)\cdot(2, -1, 1) = 10 - 5 - 5 = 0$ ✓.`,
            ],
            answer: t`$\vec{a} \times \vec{b} = 5\hat{i} + 5\hat{j} - 5\hat{k}$; unit vectors $\pm\frac{1}{\sqrt{3}}(\hat{i} + \hat{j} - \hat{k})$.`,
          },
          {
            type: "example",
            title: "Area of a triangle",
            problem: t`Find the area of the triangle with vertices $A(1, 1, 1)$, $B(1, 2, 3)$ and $C(2, 3, 1)$.`,
            steps: [
              t`$\overrightarrow{AB} = \hat{j} + 2\hat{k}$ and $\overrightarrow{AC} = \hat{i} + 2\hat{j}$.`,
              t`$\overrightarrow{AB} \times \overrightarrow{AC}$: $\hat{i}(1\cdot0 - 2\cdot2) - \hat{j}(0\cdot0 - 2\cdot1) + \hat{k}(0\cdot2 - 1\cdot1) = -4\hat{i} + 2\hat{j} - \hat{k}$.`,
              t`Magnitude: $\sqrt{16 + 4 + 1} = \sqrt{21}$.`,
            ],
            answer: t`Area $= \frac{1}{2}\sqrt{21}$ square units.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\hat{k} \times \hat{j}$ equals:`,
                options: [t`$\hat{i}$`, t`$-\hat{i}$`, t`$\vec{0}$`, t`$1$`],
                answer: 1,
                explain: t`$\hat{j} \times \hat{k} = \hat{i}$ (cyclic order i → j → k). Reversing the order changes the sign.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: scalar triple product",
            md: "The scalar triple product is **not** in the current rationalised NCERT book (CBSE, Karnataka II PUC), but it is in the **ISC** Class 12 syllabus and is used in **JEE Advanced** and older KCET papers. CBSE and PUC students can treat the rest of this lesson as enrichment.",
          },
          {
            type: "formula",
            tex: t`[\vec{a}\;\vec{b}\;\vec{c}] = \vec{a}\cdot(\vec{b} \times \vec{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}`,
            caption: t`$|[\vec{a}\;\vec{b}\;\vec{c}]|$ is the volume of the parallelepiped with coterminous edges $\vec{a}, \vec{b}, \vec{c}$. Cyclic shifts keep the value: $[\vec{a}\,\vec{b}\,\vec{c}] = [\vec{b}\,\vec{c}\,\vec{a}] = [\vec{c}\,\vec{a}\,\vec{b}]$; swapping two vectors changes the sign; dot and cross can be exchanged: $\vec{a}\cdot(\vec{b}\times\vec{c}) = (\vec{a}\times\vec{b})\cdot\vec{c}$. Three vectors are **coplanar** exactly when $[\vec{a}\,\vec{b}\,\vec{c}] = 0$.`,
          },
          {
            type: "example",
            title: "Volume and coplanarity (ISC / JEE)",
            problem: t`(a) Find the volume of the parallelepiped with edges $\hat{i} + 2\hat{j} + 3\hat{k}$, $\hat{j} + 2\hat{k}$ and $\hat{i} + \hat{k}$. (b) Find $\lambda$ for which $\hat{i} + \hat{j} + \hat{k}$, $\hat{i} + 2\hat{j} + 3\hat{k}$ and $2\hat{i} + 3\hat{j} + \lambda\hat{k}$ are coplanar.`,
            steps: [
              t`(a) $\begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 2 \\ 1 & 0 & 1 \end{vmatrix} = 1(1 - 0) - 2(0 - 2) + 3(0 - 1) = 1 + 4 - 3 = 2$.`,
              t`(b) $\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 2 & 3 & \lambda \end{vmatrix} = 1(2\lambda - 9) - 1(\lambda - 6) + 1(3 - 4) = \lambda - 4$.`,
              t`Set $\lambda - 4 = 0$. Check: with $\lambda = 4$ the third vector is the sum of the first two, so it lies in their plane.`,
            ],
            answer: t`(a) Volume = 2 cubic units; (b) $\lambda = 4$.`,
          },
          {
            type: "mistake",
            wrong: t`$\vec{a} \times \vec{b} = \vec{b} \times \vec{a}$, just like the dot product.`,
            right: t`$\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$: same size, opposite direction.`,
            why: "Ordinary multiplication and the dot product are commutative, so the order seems not to matter. But the right-hand rule flips the thumb when you curl from b to a instead of from a to b.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each cross product with its value.",
              pairs: [
                [t`$\hat{i} \times \hat{j}$`, t`$\hat{k}$`],
                [t`$\hat{j} \times \hat{k}$`, t`$\hat{i}$`],
                [t`$\hat{k} \times \hat{i}$`, t`$\hat{j}$`],
                [t`$\hat{j} \times \hat{i}$`, t`$-\hat{k}$`],
                [t`$\hat{i} \times \hat{i}$`, t`$\vec{0}$`],
              ],
              explain: t`Write i, j, k round a circle. Going clockwise (i → j → k → i) gives the next vector with a plus sign; going the other way gives a minus sign. A vector crossed with itself is the zero vector.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Area questions carry 2–3 marks: one for the correct side vectors, one for the determinant expansion, one for the magnitude and the factor 1/2. The commonest slip is the sign of the middle (j) term of the determinant. Check your answer by dotting it with both vectors: you must get 0.",
          },
          {
            type: "keypoints",
            items: [
              t`$\vec{a} \times \vec{b} = |\vec{a}||\vec{b}|\sin\theta\,\hat{n}$, a vector perpendicular to both (right-hand rule).`,
              t`$\vec{b} \times \vec{a} = -\vec{a} \times \vec{b}$; parallel vectors give $\vec{0}$.`,
              t`Parallelogram area $|\vec{a} \times \vec{b}|$; triangle area $\frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$.`,
              t`ISC / JEE: $[\vec{a}\,\vec{b}\,\vec{c}]$ is a determinant; its modulus is a volume; zero means coplanar.`,
            ],
          },
        ],
        flashcards: [
          { front: "Cross product (definition)", back: t`$|\vec{a}||\vec{b}|\sin\theta\,\hat{n}$, with $\hat{n}$ perpendicular to both by the right-hand rule.` },
          { front: t`$\hat{i}\times\hat{j}$, $\hat{j}\times\hat{k}$, $\hat{k}\times\hat{i}$`, back: t`$\hat{k}$, $\hat{i}$, $\hat{j}$` },
          { front: t`$\vec{b} \times \vec{a}$ in terms of $\vec{a} \times \vec{b}$`, back: t`$-(\vec{a} \times \vec{b})$` },
          { front: "Area of triangle ABC (vectors)", back: t`$\frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|$` },
          { front: "Area of parallelogram from diagonals", back: t`$\frac{1}{2}|\vec{d_1} \times \vec{d_2}|$` },
          { front: "Condition for non-zero vectors to be parallel", back: t`$\vec{a} \times \vec{b} = \vec{0}$` },
          { front: "Scalar triple product (ISC / JEE)", back: t`$[\vec{a}\,\vec{b}\,\vec{c}] = \vec{a}\cdot(\vec{b}\times\vec{c})$, the 3 × 3 determinant of components; volume of parallelepiped.` },
          { front: "Coplanarity test", back: t`$[\vec{a}\,\vec{b}\,\vec{c}] = 0$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$(\hat{i} + \hat{j}) \times (\hat{i} - \hat{j})$ equals:`,
            options: [t`$2\hat{k}$`, t`$-2\hat{k}$`, t`$\vec{0}$`, t`$\hat{k}$`],
            answer: 1,
            explain: t`$\hat{i}\times\hat{i} - \hat{i}\times\hat{j} + \hat{j}\times\hat{i} - \hat{j}\times\hat{j} = 0 - \hat{k} - \hat{k} - 0 = -2\hat{k}$.`,
            difficulty: 2,
            hint: "Expand term by term and remember j × i = −k.",
          },
          {
            kind: "numeric",
            q: t`Find $|\vec{a} \times \vec{b}|$ if $|\vec{a}| = 2$, $|\vec{b}| = 5$ and the angle between them is $30^\circ$.`,
            answer: 5,
            explain: t`$2 \times 5 \times \sin 30^\circ = 10 \times \frac{1}{2} = 5$.`,
          },
          {
            kind: "numeric",
            q: t`Find the area of the parallelogram with adjacent sides $\vec{a} = 3\hat{i}$ and $\vec{b} = 2\hat{i} + 4\hat{j}$.`,
            answer: 12,
            explain: t`$\vec{a} \times \vec{b} = 3\hat{i} \times (2\hat{i} + 4\hat{j}) = 12\hat{k}$, magnitude 12.`,
          },
          {
            kind: "mcq",
            q: t`If $\vec{a} \times \vec{b} = \vec{0}$ and $\vec{a}\cdot\vec{b} = 0$, then:`,
            options: [t`$\vec{a} \perp \vec{b}$`, t`$\vec{a} \parallel \vec{b}$`, t`at least one of $\vec{a}, \vec{b}$ is $\vec{0}$`, t`$|\vec{a}| = |\vec{b}|$`],
            answer: 2,
            explain: t`Two non-zero vectors cannot be both parallel ($\sin\theta = 0$) and perpendicular ($\cos\theta = 0$), so one of them must be the zero vector.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`$\vec{a} \times \vec{b}$ is perpendicular to $\vec{a} + \vec{b}$.`,
            answer: true,
            explain: t`$\vec{a}\times\vec{b}$ is perpendicular to both $\vec{a}$ and $\vec{b}$, hence to every combination of them.`,
          },
          {
            kind: "numeric",
            q: t`(ISC / JEE) Find $[\hat{i}\;\hat{k}\;\hat{j}]$.`,
            answer: -1,
            explain: t`$[\hat{i}\,\hat{j}\,\hat{k}] = 1$; swapping $\hat{j}$ and $\hat{k}$ changes the sign. Directly: $\hat{i}\cdot(\hat{k}\times\hat{j}) = \hat{i}\cdot(-\hat{i}) = -1$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`The area of the triangle with $\overrightarrow{AB} = 2\hat{i} + \hat{j}$ and $\overrightarrow{AC} = \hat{j} + 2\hat{k}$ is:`,
            options: [t`$2\sqrt{6}$`, t`$\sqrt{6}$`, t`$12$`, t`$\frac{3}{2}$`],
            answer: 1,
            explain: t`$\overrightarrow{AB}\times\overrightarrow{AC} = \hat{i}(2 - 0) - \hat{j}(4 - 0) + \hat{k}(2 - 0) = 2\hat{i} - 4\hat{j} + 2\hat{k}$, magnitude $\sqrt{24} = 2\sqrt{6}$. Half of it, $\sqrt{6}$, is the triangle; $2\sqrt{6}$ is the parallelogram.`,
          },
        ],
      },
      {
        slug: "c12-vectors-exam-edge",
        title: "Exam edge: Vector Algebra",
        summary: "What JEE Main, JEE Advanced, KCET and COMEDK ask from vectors, the identities that save time, vector equations, triple products and the classic traps.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "table",
            headers: ["Exam", "What usually appears"],
            rows: [
              ["KCET / COMEDK", "direct one-step questions: unit vector, projection, angle, λ for perpendicular or collinear vectors, area of a triangle or parallelogram, direction cosines"],
              ["JEE Main", t`magnitude tricks with $|\vec{a} \pm \vec{b}|^2$, unit vectors adding to zero, cross product and area, angle conditions; vector equations such as $\vec{r} \times \vec{b} = \vec{c} \times \vec{b}$ (check the current syllabus for triple products)`],
              ["JEE Advanced", "scalar and vector triple products, linear independence, solving vector equations, multi-correct statements, geometry proved with vectors"],
            ],
          },
          {
            type: "formula",
            tex: t`|\vec{a} \times \vec{b}|^2 + (\vec{a}\cdot\vec{b})^2 = |\vec{a}|^2|\vec{b}|^2, \qquad |\vec{a} + \vec{b}|^2 + |\vec{a} - \vec{b}|^2 = 2\left(|\vec{a}|^2 + |\vec{b}|^2\right)`,
            caption: t`The first (Lagrange's identity) is just $\sin^2\theta + \cos^2\theta = 1$. The second is the parallelogram law for the diagonals.`,
          },
          {
            type: "list",
            items: [
              t`**Unit vectors:** for unit vectors at angle $\theta$, $|\hat{a} + \hat{b}| = 2\cos\frac{\theta}{2}$ and $|\hat{a} - \hat{b}| = 2\sin\frac{\theta}{2}$. Safe only when both vectors are unit vectors.`,
              t`$|\vec{a} + \vec{b}| = |\vec{a} - \vec{b}| \iff \vec{a}\cdot\vec{b} = 0$: the parallelogram is a rectangle.`,
              t`The internal bisector of the angle between $\vec{a}$ and $\vec{b}$ is along $\hat{a} + \hat{b}$ (not $\vec{a} + \vec{b}$, unless the magnitudes are equal).`,
              t`**Vector triple product (JEE Advanced):** $\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a}\cdot\vec{c})\vec{b} - (\vec{a}\cdot\vec{b})\vec{c}$, a vector in the plane of $\vec{b}$ and $\vec{c}$.`,
              t`$[\vec{a} + \vec{b}\;\; \vec{b} + \vec{c}\;\; \vec{c} + \vec{a}] = 2[\vec{a}\,\vec{b}\,\vec{c}]$ and $[\vec{a} \times \vec{b}\;\; \vec{b} \times \vec{c}\;\; \vec{c} \times \vec{a}] = [\vec{a}\,\vec{b}\,\vec{c}]^2$.`,
            ],
          },
          {
            type: "example",
            title: "KCET level: Lagrange's identity",
            problem: t`$|\vec{a}| = 2$, $|\vec{b}| = 3$ and $\vec{a}\cdot\vec{b} = 3$. Find $|\vec{a} \times \vec{b}|$ and the angle between the vectors.`,
            steps: [
              t`$|\vec{a} \times \vec{b}|^2 = |\vec{a}|^2|\vec{b}|^2 - (\vec{a}\cdot\vec{b})^2 = 36 - 9 = 27$.`,
              t`So $|\vec{a} \times \vec{b}| = 3\sqrt{3}$.`,
              t`$\cos\theta = \frac{3}{2 \times 3} = \frac{1}{2}$, so $\theta = 60^\circ$ (check: $6\sin 60^\circ = 3\sqrt{3}$ ✓).`,
            ],
            answer: t`$|\vec{a} \times \vec{b}| = 3\sqrt{3}$, $\theta = 60^\circ$.`,
          },
          {
            type: "example",
            title: "JEE Main level: three unit vectors adding to zero",
            problem: t`$\vec{a}, \vec{b}, \vec{c}$ are unit vectors with $\vec{a} + \vec{b} + \vec{c} = \vec{0}$. Find $\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}$ and the angle between any two of them.`,
            steps: [
              t`Square the magnitude: $|\vec{a} + \vec{b} + \vec{c}|^2 = 1 + 1 + 1 + 2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}) = 0$.`,
              t`So the sum of the dot products is $-\frac{3}{2}$.`,
              t`For one pair: $\vec{a} + \vec{b} = -\vec{c}$, so $|\vec{a} + \vec{b}|^2 = 1$, giving $2 + 2\vec{a}\cdot\vec{b} = 1$, $\vec{a}\cdot\vec{b} = -\frac{1}{2}$.`,
            ],
            answer: t`The sum is $-\frac{3}{2}$, and each pair is at $120^\circ$ (an equilateral triangle of arrows).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Unit vectors $\hat{a}$ and $\hat{b}$ satisfy $|\hat{a} + \hat{b}| = \sqrt{3}$. The angle between them is:`,
                options: [t`$30^\circ$`, t`$60^\circ$`, t`$90^\circ$`, t`$120^\circ$`],
                answer: 1,
                explain: t`$2 + 2\cos\theta = 3$ gives $\cos\theta = \frac{1}{2}$. Shortcut: $2\cos\frac{\theta}{2} = \sqrt{3}$ gives $\frac{\theta}{2} = 30^\circ$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: a vector equation",
            problem: t`Let $\vec{a} = \hat{i} + \hat{j} + \hat{k}$, $\vec{b} = \hat{i} + 2\hat{j}$ and $\vec{c} = 2\hat{i} - \hat{k}$. Find $\vec{r}$ such that $\vec{r} \times \vec{b} = \vec{c} \times \vec{b}$ and $\vec{r}\cdot\vec{a} = 0$.`,
            steps: [
              t`$(\vec{r} - \vec{c}) \times \vec{b} = \vec{0}$, so $\vec{r} - \vec{c}$ is parallel to $\vec{b}$: $\vec{r} = \vec{c} + \lambda\vec{b}$.`,
              t`Dot with $\vec{a}$: $\vec{c}\cdot\vec{a} + \lambda\,\vec{b}\cdot\vec{a} = 0$. Here $\vec{c}\cdot\vec{a} = 2 - 1 = 1$ and $\vec{b}\cdot\vec{a} = 3$, so $\lambda = -\frac{1}{3}$.`,
              t`$\vec{r} = 2\hat{i} - \hat{k} - \frac{1}{3}(\hat{i} + 2\hat{j}) = \frac{5}{3}\hat{i} - \frac{2}{3}\hat{j} - \hat{k}$.`,
              t`Check: $\vec{r}\cdot\vec{a} = \frac{5}{3} - \frac{2}{3} - 1 = 0$ ✓.`,
            ],
            answer: t`$\vec{r} = \frac{5}{3}\hat{i} - \frac{2}{3}\hat{j} - \hat{k}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: triple products",
            problem: t`(a) If $[\vec{a}\,\vec{b}\,\vec{c}] = 4$, find $[\vec{a} + \vec{b}\;\; \vec{b} + \vec{c}\;\; \vec{c} + \vec{a}]$. (b) Unit vectors satisfy $\vec{a} \times (\vec{b} \times \vec{c}) = \frac{1}{2}\vec{b}$, with $\vec{b}, \vec{c}$ not parallel. Find the angles of $\vec{a}$ with $\vec{b}$ and with $\vec{c}$.`,
            steps: [
              t`(a) $(\vec{b} + \vec{c}) \times (\vec{c} + \vec{a}) = \vec{b} \times \vec{c} + \vec{b} \times \vec{a} + \vec{c} \times \vec{a}$ (since $\vec{c} \times \vec{c} = \vec{0}$).`,
              t`Dot with $\vec{a} + \vec{b}$. Any triple product with a repeated vector is 0, leaving $\vec{a}\cdot(\vec{b} \times \vec{c}) + \vec{b}\cdot(\vec{c} \times \vec{a}) = [\vec{a}\,\vec{b}\,\vec{c}] + [\vec{b}\,\vec{c}\,\vec{a}] = 2 \times 4 = 8$.`,
              t`(b) Expand: $(\vec{a}\cdot\vec{c})\vec{b} - (\vec{a}\cdot\vec{b})\vec{c} = \frac{1}{2}\vec{b}$.`,
              t`$\vec{b}$ and $\vec{c}$ are not parallel, so compare coefficients: $\vec{a}\cdot\vec{c} = \frac{1}{2}$ and $\vec{a}\cdot\vec{b} = 0$.`,
            ],
            answer: t`(a) 8. (b) $\vec{a} \perp \vec{b}$ (angle $90^\circ$) and the angle between $\vec{a}$ and $\vec{c}$ is $60^\circ$.`,
          },
          {
            type: "mistake",
            wrong: t`$\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \times \vec{b}) \times \vec{c}$; brackets do not matter.`,
            right: t`The cross product is **not associative**. $\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a}\cdot\vec{c})\vec{b} - (\vec{a}\cdot\vec{b})\vec{c}$, but $(\vec{a} \times \vec{b}) \times \vec{c} = (\vec{a}\cdot\vec{c})\vec{b} - (\vec{b}\cdot\vec{c})\vec{a}$.`,
            why: t`Number multiplication is associative, so the brackets feel optional. Test: $(\hat{i} \times \hat{i}) \times \hat{j} = \vec{0}$, but $\hat{i} \times (\hat{i} \times \hat{j}) = \hat{i} \times \hat{k} = -\hat{j}$.`,
          },
          {
            type: "mistake",
            wrong: t`$|\vec{a} \times \vec{b}| = 3\sqrt{3}$ with $|\vec{a}||\vec{b}| = 6$, so $\sin\theta = \frac{\sqrt{3}}{2}$ and $\theta = 60^\circ$.`,
            right: t`$\sin\theta = \frac{\sqrt{3}}{2}$ allows $60^\circ$ **or** $120^\circ$. Use the sign of $\vec{a}\cdot\vec{b}$ to decide.`,
            why: t`$\theta$ lies in $[0, \pi]$, where sine is positive twice. Cosine is one-to-one there, so only the dot product fixes the angle.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each condition with what it tells you.",
              pairs: [
                [t`$|\vec{a} + \vec{b}| = |\vec{a} - \vec{b}|$`, "the vectors are perpendicular"],
                [t`$\vec{a} \times \vec{b} = \vec{0}$ (non-zero vectors)`, "the vectors are parallel"],
                [t`$[\vec{a}\,\vec{b}\,\vec{c}] = 0$`, "the three vectors are coplanar"],
                [t`$\vec{a}\cdot\vec{b} = |\vec{a}||\vec{b}|$`, "the vectors point the same way"],
                [t`$|\hat{a} + \hat{b}| = 2\cos\frac{\theta}{2}$`, "true for unit vectors only"],
              ],
              explain: "Each test turns a geometric fact into one line of algebra. Spotting them quickly is most of the speed in vector MCQs.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Speed strategy",
            md: t`When magnitudes and a dot product are given but no components, **square the magnitude** of whatever is asked: $|\vec{x}|^2 = \vec{x}\cdot\vec{x}$. When components are given, compute directly. In multi-correct JEE Advanced questions, test each statement with $\hat{i}, \hat{j}, \hat{k}$ first: one counter-example kills a false option.`,
          },
          {
            type: "keypoints",
            items: [
              t`$|\vec{a} \times \vec{b}|^2 + (\vec{a}\cdot\vec{b})^2 = |\vec{a}|^2|\vec{b}|^2$.`,
              t`Unit vectors: $|\hat{a} \pm \hat{b}|$ gives $2\cos\frac{\theta}{2}$ or $2\sin\frac{\theta}{2}$.`,
              t`$\vec{r} \times \vec{b} = \vec{c} \times \vec{b} \Rightarrow \vec{r} = \vec{c} + \lambda\vec{b}$; fix $\lambda$ with the other condition.`,
              t`$\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a}\cdot\vec{c})\vec{b} - (\vec{a}\cdot\vec{b})\vec{c}$; cross product is not associative.`,
              t`$[\vec{a}+\vec{b}\;\vec{b}+\vec{c}\;\vec{c}+\vec{a}] = 2[\vec{a}\,\vec{b}\,\vec{c}]$; a repeated vector makes a triple product zero.`,
            ],
          },
        ],
        flashcards: [
          { front: "Lagrange's identity", back: t`$|\vec{a} \times \vec{b}|^2 + (\vec{a}\cdot\vec{b})^2 = |\vec{a}|^2|\vec{b}|^2$` },
          { front: t`$|\hat{a} - \hat{b}|$ for unit vectors at angle θ`, back: t`$2\sin\frac{\theta}{2}$` },
          { front: "Unit vectors a, b, c with a + b + c = 0", back: t`$\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a} = -\frac{3}{2}$; each pair at $120^\circ$.` },
          { front: "Vector triple product", back: t`$\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a}\cdot\vec{c})\vec{b} - (\vec{a}\cdot\vec{b})\vec{c}$` },
          { front: t`$[\vec{a}+\vec{b}\;\vec{b}+\vec{c}\;\vec{c}+\vec{a}]$`, back: t`$2[\vec{a}\,\vec{b}\,\vec{c}]$` },
          { front: t`$[\vec{a}\times\vec{b}\;\vec{b}\times\vec{c}\;\vec{c}\times\vec{a}]$`, back: t`$[\vec{a}\,\vec{b}\,\vec{c}]^2$` },
          { front: "Direction of the internal angle bisector of a and b", back: t`$\hat{a} + \hat{b}$` },
          { front: t`Solve $\vec{r} \times \vec{b} = \vec{c} \times \vec{b}$`, back: t`$\vec{r} = \vec{c} + \lambda\vec{b}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Unit vectors $\hat{a}, \hat{b}$ satisfy $|\hat{a} - \hat{b}| = 1$. The angle between them is:`,
            options: [t`$30^\circ$`, t`$60^\circ$`, t`$90^\circ$`, t`$120^\circ$`],
            answer: 1,
            explain: t`$2 - 2\cos\theta = 1$ gives $\cos\theta = \frac{1}{2}$, so $\theta = 60^\circ$. ($2\sin\frac{\theta}{2} = 1$ gives the same.)`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`$|\vec{a}| = 3$, $|\vec{b}| = 4$ and $|\vec{a} \times \vec{b}| = 6$. Find $(\vec{a}\cdot\vec{b})^2$.`,
            answer: 108,
            explain: t`$(\vec{a}\cdot\vec{b})^2 = 9 \times 16 - 36 = 108$.`,
            difficulty: 2,
            hint: "Lagrange's identity.",
          },
          {
            kind: "multi",
            q: "Which statements are true for all vectors a, b, c?",
            options: [
              t`$\vec{a}\cdot(\vec{a} \times \vec{b}) = 0$`,
              t`$\vec{a} \times (\vec{b} \times \vec{c}) = (\vec{a} \times \vec{b}) \times \vec{c}$`,
              t`$|\vec{a} \times \vec{b}|^2 + (\vec{a}\cdot\vec{b})^2 = |\vec{a}|^2|\vec{b}|^2$`,
              t`$[\vec{a}\,\vec{b}\,\vec{c}] = -[\vec{b}\,\vec{a}\,\vec{c}]$`,
              t`$\vec{a}\cdot\vec{b} = \vec{a}\cdot\vec{c} \Rightarrow \vec{b} = \vec{c}$`,
            ],
            answers: [0, 2, 3],
            explain: t`(1) A triple product with a repeated vector is 0. (2) Fails for $\hat{i}, \hat{i}, \hat{j}$. (3) Lagrange's identity. (4) Swapping two vectors changes the sign. (5) Only $\vec{b} - \vec{c} \perp \vec{a}$ follows.`,
            difficulty: 3,
            hint: "Try i, j, k as counter-examples.",
          },
          {
            kind: "numeric",
            q: t`$|\vec{a}| = 3$ and $|\vec{b}| = 4$. Find $|\vec{a} + \vec{b}|^2 + |\vec{a} - \vec{b}|^2$.`,
            answer: 50,
            explain: t`The dot-product terms cancel: $2(9 + 16) = 50$, whatever the angle.`,
          },
          {
            kind: "mcq",
            q: t`Unit vectors $\vec{a}, \vec{b}$ are such that $\vec{a} + 2\vec{b}$ is perpendicular to $5\vec{a} - 4\vec{b}$. The angle between $\vec{a}$ and $\vec{b}$ is:`,
            options: [t`$30^\circ$`, t`$45^\circ$`, t`$60^\circ$`, t`$90^\circ$`],
            answer: 2,
            explain: t`$(\vec{a} + 2\vec{b})\cdot(5\vec{a} - 4\vec{b}) = 5 - 4\vec{a}\cdot\vec{b} + 10\vec{a}\cdot\vec{b} - 8 = 6\vec{a}\cdot\vec{b} - 3 = 0$, so $\vec{a}\cdot\vec{b} = \frac{1}{2}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`$[\vec{a} - \vec{b}\;\; \vec{b} - \vec{c}\;\; \vec{c} - \vec{a}]$ equals:`,
            options: ["0", t`$2[\vec{a}\,\vec{b}\,\vec{c}]$`, t`$[\vec{a}\,\vec{b}\,\vec{c}]$`, t`$-2[\vec{a}\,\vec{b}\,\vec{c}]$`],
            answer: 0,
            explain: t`The three vectors add to $\vec{0}$, so the third is minus the sum of the other two: they are coplanar and the triple product is 0. Option 2 is the result for the sums, not the differences.`,
            difficulty: 3,
            hint: "Add the three vectors.",
          },
          {
            kind: "numeric",
            q: t`$\vec{a} = \hat{i} + \hat{j} + \hat{k}$ and $\vec{b} = \hat{i} + 2\hat{j} + 3\hat{k}$. Find $|\vec{a} \times (\vec{a} \times \vec{b})|^2$.`,
            answer: 18,
            explain: t`$\vec{a} \times (\vec{a} \times \vec{b}) = (\vec{a}\cdot\vec{b})\vec{a} - (\vec{a}\cdot\vec{a})\vec{b} = 6\vec{a} - 3\vec{b} = 3\hat{i} + 0\hat{j} - 3\hat{k}$. Its square magnitude is $9 + 9 = 18$.`,
            difficulty: 3,
            hint: "Use the triple product expansion rather than two determinants.",
          },
          {
            kind: "mcq",
            q: t`The diagonals of a parallelogram are $3\hat{i} + \hat{j} - 2\hat{k}$ and $\hat{i} - 3\hat{j} + 4\hat{k}$. Its area is:`,
            options: [t`$5\sqrt{3}$`, t`$10\sqrt{3}$`, t`$5\sqrt{2}$`, "15"],
            answer: 0,
            explain: t`$\vec{d_1} \times \vec{d_2} = -2\hat{i} - 14\hat{j} - 10\hat{k}$, magnitude $\sqrt{300} = 10\sqrt{3}$. With diagonals the area is half of this: $5\sqrt{3}$.`,
            difficulty: 2,
            hint: "Area from diagonals carries a factor 1/2.",
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Vector Algebra": "c12-vector-algebra",
  "12:Vectors": ["c12-vector-algebra"],
};
