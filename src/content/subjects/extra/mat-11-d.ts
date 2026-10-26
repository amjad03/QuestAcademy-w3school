import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 11: Straight Lines (NCERT, Karnataka I PUC, ISC)              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-mat-straight-lines",
    title: "Straight Lines (Class 11)",
    icon: "📐",
    description: "Slope of a line, parallel and perpendicular lines, angle between two lines, every standard form of the equation of a line, distance of a point from a line and between parallel lines, with angle bisectors, families of lines and pairs of lines for JEE.",
    lessons: [
      {
        slug: "c11-mat-sl-slope",
        title: "Slope of a Line and the Angle Between Two Lines",
        summary: "Inclination and slope, slope from two points, conditions for parallel and perpendicular lines, the angle between two lines and collinearity of three points.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🛣️",
            caption: "A ghat road sign says \"gradient 1 in 10\": the road rises 1 m for every 10 m it runs. That number is the slope of the road.",
          },
          {
            type: "text",
            md: t`Coordinate geometry turns geometry into algebra. Three results from Class 10 are used all the time in this chapter:

- **Distance** between $P(x_1, y_1)$ and $Q(x_2, y_2)$: $PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.
- **Section formula**: the point dividing $PQ$ internally in the ratio $m : n$ is $\left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}\right)$.
- **Area of a triangle** with vertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$: $\frac{1}{2}\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right|$. If this area is zero, the three points are collinear.`,
          },
          {
            type: "text",
            md: t`A line makes an angle $\theta$ with the positive direction of the x-axis, measured **anticlockwise**. This $\theta$ is the **inclination** of the line, and $0^\circ \le \theta < 180^\circ$.

If $\theta \neq 90^\circ$, the **slope** (gradient) of the line is $m = \tan\theta$. A line parallel to the x-axis has $\theta = 0^\circ$ and slope 0. A line parallel to the y-axis has $\theta = 90^\circ$; $\tan 90^\circ$ is not defined, so a **vertical line has no slope** (its slope is undefined).

If the line passes through $(x_1, y_1)$ and $(x_2, y_2)$ with $x_1 \neq x_2$, a right triangle drawn under the segment shows that the rise divided by the run equals $\tan\theta$.`,
          },
          {
            type: "formula",
            tex: t`m = \tan\theta = \frac{y_2 - y_1}{x_2 - x_1}, \qquad x_1 \neq x_2`,
            caption: "Slope from the inclination, or from any two points on the line",
          },
          {
            type: "table",
            headers: ["Inclination θ", "Slope m = tan θ", "The line…"],
            rows: [
              [t`$\theta = 0^\circ$`, "0", "is horizontal"],
              [t`$0^\circ < \theta < 90^\circ$`, "positive", "rises from left to right"],
              [t`$\theta = 90^\circ$`, "not defined", "is vertical"],
              [t`$90^\circ < \theta < 180^\circ$`, "negative", "falls from left to right"],
            ],
          },
          {
            type: "example",
            title: "Slope and inclination from two points",
            problem: t`Find the slope of the line through $A(3, -2)$ and $B(-1, 4)$. Is its inclination acute or obtuse?`,
            steps: [
              t`$m = \dfrac{4 - (-2)}{-1 - 3} = \dfrac{6}{-4} = -\dfrac{3}{2}$.`,
              t`The slope is negative, so $\tan\theta < 0$ and $\theta$ lies between $90^\circ$ and $180^\circ$.`,
              t`Taking the points in the other order gives $\dfrac{-2 - 4}{3 - (-1)} = \dfrac{-6}{4}$, the same value. The order does not matter as long as it is the same on top and bottom.`,
            ],
            answer: t`$m = -\frac{3}{2}$; the inclination is obtuse.`,
          },
          {
            type: "text",
            md: t`**Parallel and perpendicular lines.** Two non-vertical lines with slopes $m_1$ and $m_2$ are

- **parallel** if and only if $m_1 = m_2$ (equal inclinations);
- **perpendicular** if and only if $m_1 m_2 = -1$, that is $m_2 = -\frac{1}{m_1}$. (Inclinations differ by $90^\circ$, and $\tan(\theta + 90^\circ) = -\cot\theta$.)

**Angle between two lines.** If the inclinations are $\theta_1$ and $\theta_2$, the angle between the lines is $\theta_2 - \theta_1$ (or its supplement). Using $\tan(\theta_2 - \theta_1) = \frac{\tan\theta_2 - \tan\theta_1}{1 + \tan\theta_1\tan\theta_2}$ and taking the modulus gives the **acute** angle $\theta$; the obtuse angle is $180^\circ - \theta$.`,
          },
          {
            type: "formula",
            tex: t`\tan\theta = \left|\frac{m_2 - m_1}{1 + m_1 m_2}\right|, \qquad 1 + m_1 m_2 \neq 0`,
            caption: "Acute angle θ between lines of slopes m₁ and m₂ (if 1 + m₁m₂ = 0 the lines are perpendicular)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`A line has slope $\frac{2}{5}$. What is the slope of a line perpendicular to it?`,
                options: [t`$\frac{2}{5}$`, t`$-\frac{2}{5}$`, t`$\frac{5}{2}$`, t`$-\frac{5}{2}$`],
                answer: 3,
                explain: t`For perpendicular lines $m_1 m_2 = -1$, so $m_2 = -\frac{1}{2/5} = -\frac{5}{2}$. Changing only the sign or only flipping the fraction is not enough.`,
              },
              {
                kind: "numeric",
                q: "Find the slope of the line through (−2, 1) and (4, 13).",
                answer: 2,
                explain: t`$m = \frac{13 - 1}{4 - (-2)} = \frac{12}{6} = 2$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Angle between two lines",
            problem: t`Find the acute angle between two lines whose slopes are $\frac{1}{2}$ and $3$.`,
            steps: [
              t`Take $m_1 = \frac{1}{2}$, $m_2 = 3$. Then $m_2 - m_1 = \frac{5}{2}$ and $1 + m_1 m_2 = 1 + \frac{3}{2} = \frac{5}{2}$.`,
              t`$\tan\theta = \left|\frac{5/2}{5/2}\right| = 1$.`,
              t`So $\theta = 45^\circ$. The obtuse angle between the lines is $135^\circ$.`,
            ],
            answer: t`$45^\circ$`,
          },
          {
            type: "example",
            title: "Collinearity using slopes",
            problem: t`Find $k$ so that the points $(1, k)$, $(3, 5)$ and $(-1, -3)$ lie on one line.`,
            steps: [
              t`Slope of the join of $(3, 5)$ and $(-1, -3)$: $\frac{-3 - 5}{-1 - 3} = \frac{-8}{-4} = 2$.`,
              t`Three points are collinear when the slope from $(1, k)$ to $(3, 5)$ is the same: $\frac{5 - k}{3 - 1} = 2$.`,
              t`So $5 - k = 4$, giving $k = 1$.`,
              t`Check with the area formula: $\frac{1}{2}|1(5 + 3) + 3(-3 - 1) + (-1)(1 - 5)| = \frac{1}{2}|8 - 12 + 4| = 0$.`,
            ],
            answer: t`$k = 1$`,
          },
          {
            type: "mistake",
            wrong: "A vertical line has slope 0, because it does not move left or right.",
            right: "A horizontal line has slope 0. A vertical line has no slope at all: its slope is undefined, because the run x₂ − x₁ is zero.",
            why: "Learners link \"zero\" with \"no movement\" and pick the wrong direction. Slope is rise ÷ run: a horizontal line has zero rise (0 ÷ run = 0), while a vertical line has zero run, and division by zero is not defined.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each inclination to the slope of the line.",
              pairs: [
                [t`$0^\circ$`, "0"],
                [t`$45^\circ$`, "1"],
                [t`$60^\circ$`, t`$\sqrt{3}$`],
                [t`$120^\circ$`, t`$-\sqrt{3}$`],
                [t`$135^\circ$`, "−1"],
                [t`$90^\circ$`, "not defined"],
              ],
              explain: t`Slope is $\tan\theta$. Angles past $90^\circ$ give negative slopes because $\tan(180^\circ - \alpha) = -\tan\alpha$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Write the formula before substituting: examiners give a mark for the correct formula even if the arithmetic slips. In angle questions, say whether your answer is the acute or the obtuse angle. When proving lines perpendicular, show the product of slopes equals −1; for collinearity, either equal slopes with a common point or zero area earns full marks.",
          },
          {
            type: "keypoints",
            items: [
              t`Inclination $\theta$ is measured anticlockwise from the positive x-axis, $0^\circ \le \theta < 180^\circ$; slope $m = \tan\theta$.`,
              t`Slope through two points is $\frac{y_2 - y_1}{x_2 - x_1}$; a vertical line has undefined slope, a horizontal line slope 0.`,
              t`Parallel: $m_1 = m_2$. Perpendicular: $m_1 m_2 = -1$.`,
              t`Acute angle between lines: $\tan\theta = \left|\frac{m_2 - m_1}{1 + m_1 m_2}\right|$.`,
              "Three points are collinear when the slopes between pairs are equal, or the triangle they form has zero area.",
            ],
          },
        ],
        flashcards: [
          { front: "Inclination of a line", back: "The angle θ (0° ≤ θ < 180°) the line makes with the positive x-axis, measured anticlockwise." },
          { front: "Slope through two points", back: t`$m = \frac{y_2 - y_1}{x_2 - x_1}$, provided $x_1 \neq x_2$.` },
          { front: "Slope of a vertical line", back: "Not defined (θ = 90°)." },
          { front: "Condition for perpendicular lines", back: t`$m_1 m_2 = -1$ (both lines non-vertical).` },
          { front: "Acute angle between two lines", back: t`$\tan\theta = \left|\frac{m_2 - m_1}{1 + m_1 m_2}\right|$` },
          { front: "Test for collinearity", back: "Equal slopes AB and BC, or area of triangle ABC = 0." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The slope of the line through (2, 3) and (5, −3) is",
            options: ["2", "−2", t`$-\frac{1}{2}$`, t`$\frac{1}{2}$`],
            answer: 1,
            explain: t`$m = \frac{-3 - 3}{5 - 2} = \frac{-6}{3} = -2$.`,
          },
          {
            kind: "truefalse",
            q: t`Lines with slopes $\frac{2}{3}$ and $-\frac{3}{2}$ are perpendicular.`,
            answer: true,
            explain: t`$\frac{2}{3} \times \left(-\frac{3}{2}\right) = -1$.`,
          },
          {
            kind: "numeric",
            q: t`Find, in degrees, the acute angle between lines with slopes $\sqrt{3}$ and $\frac{1}{\sqrt{3}}$.`,
            answer: 30,
            unit: "°",
            explain: t`$\tan\theta = \left|\frac{\frac{1}{\sqrt{3}} - \sqrt{3}}{1 + 1}\right| = \frac{2/\sqrt{3}}{2} = \frac{1}{\sqrt{3}}$, so $\theta = 30^\circ$. (Inclinations are $60^\circ$ and $30^\circ$.)`,
            difficulty: 2,
            hint: t`Here $m_1 m_2 = 1$, so the denominator is 2.`,
          },
          {
            kind: "fill",
            q: "A line with slope −1 has inclination ___ degrees.",
            answer: ["135", "135°"],
            explain: t`$\tan 135^\circ = -1$. ($-45^\circ$ is not allowed, as $0^\circ \le \theta < 180^\circ$.)`,
          },
          {
            kind: "mcq",
            q: "The line through (x, −1) and (2, 1) is parallel to the line through (3, 4) and (5, 8). Then x =",
            options: ["1", "3", "0", "−1"],
            answer: 0,
            explain: t`The second line has slope $\frac{8 - 4}{5 - 3} = 2$. So $\frac{1 - (-1)}{2 - x} = 2$, giving $2 - x = 1$ and $x = 1$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The area of the triangle with vertices (0, 0), (4, 0) and (0, 3) is",
            options: ["12", "7", "6", "3.5"],
            answer: 2,
            explain: t`$\frac{1}{2}|0(0 - 3) + 4(3 - 0) + 0(0 - 0)| = \frac{1}{2}(12) = 6$ square units.`,
          },
          {
            kind: "numeric",
            q: "A line is perpendicular to the line through (1, 2) and (4, 8). What is its slope? (Give a decimal.)",
            answer: -0.5,
            explain: t`The given line has slope $\frac{8 - 2}{4 - 1} = 2$, so a perpendicular line has slope $-\frac{1}{2} = -0.5$.`,
          },
          {
            kind: "multi",
            q: "Which statements are true?",
            options: [
              "A horizontal line has slope 0.",
              "The slope of a vertical line is not defined.",
              "The slope of the x-axis is 1.",
              t`$m = \tan\theta$ for $0^\circ \le \theta < 180^\circ$, $\theta \neq 90^\circ$.`,
            ],
            answers: [0, 1, 3],
            explain: "The x-axis is horizontal, so its slope is 0, not 1. The other three statements are the definitions.",
          },
        ],
      },
      {
        slug: "c11-mat-sl-forms",
        title: "Forms of the Equation of a Line",
        summary: "Horizontal and vertical lines, point-slope, two-point, slope-intercept and intercept forms, the normal form and the general equation Ax + By + C = 0.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`A line is fixed by **two conditions**: two points, or one point and a slope, or the two intercepts, and so on. Each choice gives a **form** of the equation. A point $P(x, y)$ is on the line exactly when its coordinates satisfy the equation.

**Horizontal and vertical lines.** A line parallel to the x-axis at distance $|a|$ from it is $y = a$. A line parallel to the y-axis is $x = b$. The x-axis itself is $y = 0$ and the y-axis is $x = 0$.

**Point-slope form.** Take a fixed point $P_0(x_0, y_0)$ and slope $m$. Any other point $P(x, y)$ is on the line if and only if the slope of $P_0P$ equals $m$: $\frac{y - y_0}{x - x_0} = m$.`,
          },
          {
            type: "table",
            headers: ["Form", "Given", "Equation"],
            rows: [
              ["Point-slope", t`point $(x_0, y_0)$, slope $m$`, t`$y - y_0 = m(x - x_0)$`],
              ["Two-point", t`points $(x_1, y_1)$, $(x_2, y_2)$`, t`$y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$`],
              ["Slope-intercept", t`slope $m$, y-intercept $c$`, t`$y = mx + c$`],
              ["Slope and x-intercept", t`slope $m$, x-intercept $d$`, t`$y = m(x - d)$`],
              ["Intercept", t`x-intercept $a$, y-intercept $b$ (both non-zero)`, t`$\frac{x}{a} + \frac{y}{b} = 1$`],
              ["Normal", t`perpendicular length $p$ from origin, angle $\omega$ of that perpendicular`, t`$x\cos\omega + y\sin\omega = p$`],
              ["General", "—", t`$Ax + By + C = 0$, $A$ and $B$ not both zero`],
            ],
          },
          {
            type: "formula",
            tex: t`y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}\,(x - x_1)`,
            caption: "Two-point form: point-slope form with m found from the two points",
          },
          {
            type: "example",
            title: "Point-slope form",
            problem: t`Find the equation of the line through $(-2, 3)$ with slope $-4$.`,
            steps: [
              t`$y - 3 = -4(x - (-2)) = -4(x + 2)$.`,
              t`$y - 3 = -4x - 8$.`,
              t`Bring all terms to one side: $4x + y + 5 = 0$.`,
            ],
            answer: t`$4x + y + 5 = 0$`,
          },
          {
            type: "example",
            title: "Two-point form",
            problem: t`Find the equation of the line through $(1, -1)$ and $(3, 5)$.`,
            steps: [
              t`Slope: $\frac{5 - (-1)}{3 - 1} = \frac{6}{2} = 3$.`,
              t`$y - (-1) = 3(x - 1)$, so $y + 1 = 3x - 3$.`,
              t`$3x - y - 4 = 0$. Check $(3, 5)$: $9 - 5 - 4 = 0$. ✓`,
            ],
            answer: t`$3x - y - 4 = 0$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The line with slope $\frac{1}{2}$ and y-intercept $-3$ is`,
                options: [t`$x - 2y - 6 = 0$`, t`$x - 2y + 6 = 0$`, t`$2x - y - 3 = 0$`, t`$x + 2y + 6 = 0$`],
                answer: 0,
                explain: t`$y = \frac{1}{2}x - 3$. Multiply by 2: $2y = x - 6$, i.e. $x - 2y - 6 = 0$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Intercept form",
            problem: t`A line passes through $(2, 2)$ and the sum of its intercepts on the axes is 9. Find the line(s).`,
            steps: [
              t`Let the intercepts be $a$ and $b$, so $\frac{x}{a} + \frac{y}{b} = 1$ with $a + b = 9$.`,
              t`$(2, 2)$ lies on it: $\frac{2}{a} + \frac{2}{b} = 1$, so $2(a + b) = ab$, giving $ab = 18$.`,
              t`$a$ and $b$ are roots of $z^2 - 9z + 18 = 0$, i.e. $(z - 3)(z - 6) = 0$. So $(a, b) = (3, 6)$ or $(6, 3)$.`,
              t`Lines: $\frac{x}{3} + \frac{y}{6} = 1 \Rightarrow 2x + y = 6$, and $\frac{x}{6} + \frac{y}{3} = 1 \Rightarrow x + 2y = 6$.`,
            ],
            answer: t`$2x + y - 6 = 0$ or $x + 2y - 6 = 0$`,
          },
          {
            type: "text",
            md: t`**Reading the general equation.** Every first-degree equation $Ax + By + C = 0$ is a straight line, and every line has such an equation.

- If $B \neq 0$: $y = -\frac{A}{B}x - \frac{C}{B}$, so slope $= -\frac{A}{B}$ and y-intercept $= -\frac{C}{B}$.
- If $A \neq 0$: x-intercept $= -\frac{C}{A}$.
- If $C \neq 0$, dividing by $-C$ gives intercept form with $a = -\frac{C}{A}$, $b = -\frac{C}{B}$.
- **Normal form**: divide by $\pm\sqrt{A^2 + B^2}$, choosing the sign so that the constant on the right, $p$, is positive. Then $\cos\omega = \frac{A}{\pm\sqrt{A^2 + B^2}}$, $\sin\omega = \frac{B}{\pm\sqrt{A^2 + B^2}}$.

Two lines $A_1x + B_1y + C_1 = 0$ and $A_2x + B_2y + C_2 = 0$ are parallel when $A_1B_2 = A_2B_1$ and perpendicular when $A_1A_2 + B_1B_2 = 0$.`,
          },
          {
            type: "example",
            title: "General equation to the other forms",
            problem: t`Write $\sqrt{3}x + y - 8 = 0$ in slope-intercept, intercept and normal forms.`,
            steps: [
              t`Slope-intercept: $y = -\sqrt{3}x + 8$, so $m = -\sqrt{3}$ and $c = 8$.`,
              t`Intercept: $\sqrt{3}x + y = 8 \Rightarrow \frac{x}{8/\sqrt{3}} + \frac{y}{8} = 1$; intercepts $\frac{8}{\sqrt{3}}$ and $8$.`,
              t`Normal: $\sqrt{A^2 + B^2} = \sqrt{3 + 1} = 2$. The constant $8$ is already on the right and positive, so divide by $+2$: $\frac{\sqrt{3}}{2}x + \frac{1}{2}y = 4$.`,
              t`That is $x\cos 30^\circ + y\sin 30^\circ = 4$, so $p = 4$ and $\omega = 30^\circ$.`,
            ],
            answer: t`$y = -\sqrt{3}x + 8$; $\frac{x}{8/\sqrt{3}} + \frac{y}{8} = 1$; $x\cos 30^\circ + y\sin 30^\circ = 4$`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The rationalised NCERT book (CBSE and Karnataka I PUC) teaches the horizontal, vertical, point-slope, two-point, slope-intercept and intercept forms, and uses Ax + By + C = 0 in the distance formula. The **normal form** and the separate section on reducing the general equation are taught in ISC and are needed for JEE, so learn them anyway.",
          },
          {
            type: "mistake",
            wrong: "The line 3x − 4y = 12 cuts the axes at 3 and 4.",
            right: "Divide by 12: x/4 + y/(−3) = 1. The x-intercept is 4 and the y-intercept is −3.",
            why: "The coefficients 3 and 4 look like intercepts, but in intercept form the intercepts are the denominators, and the right side must be exactly 1. Signs travel with the denominators, so a minus in front of y makes that intercept negative.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each description to its line.",
              pairs: [
                ["Slope 2, y-intercept −3", "y = 2x − 3"],
                ["Intercepts 2 on x-axis and −3 on y-axis", "3x − 2y = 6"],
                ["Through (1, 2) with slope −1", "x + y = 3"],
                ["Vertical, through (4, 1)", "x = 4"],
                ["Horizontal, through (4, 1)", "y = 1"],
              ],
              explain: "Turn each description into its form, then simplify. x/2 − y/3 = 1 becomes 3x − 2y = 6 after multiplying by 6; y − 2 = −(x − 1) becomes x + y = 3.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Give the final answer in the general form Ax + By + C = 0 with integer coefficients unless the question asks for a particular form. Always check the answer by substituting a given point. In intercept questions, say why you reject a case (for example a zero intercept), because intercept form cannot describe a line through the origin.",
          },
          {
            type: "keypoints",
            items: [
              t`Point-slope $y - y_0 = m(x - x_0)$ is the starting point for almost every line question.`,
              t`Slope-intercept $y = mx + c$; intercept $\frac{x}{a} + \frac{y}{b} = 1$; normal $x\cos\omega + y\sin\omega = p$ with $p > 0$.`,
              t`For $Ax + By + C = 0$: slope $-\frac{A}{B}$, x-intercept $-\frac{C}{A}$, y-intercept $-\frac{C}{B}$.`,
              t`Parallel: $A_1B_2 = A_2B_1$; perpendicular: $A_1A_2 + B_1B_2 = 0$.`,
              "Vertical lines x = b have no slope-intercept form; lines through the origin have no intercept form.",
            ],
          },
        ],
        flashcards: [
          { front: "Point-slope form", back: t`$y - y_0 = m(x - x_0)$` },
          { front: "Intercept form", back: t`$\frac{x}{a} + \frac{y}{b} = 1$, with x-intercept a and y-intercept b (both non-zero).` },
          { front: "Normal form", back: t`$x\cos\omega + y\sin\omega = p$, where $p > 0$ is the length of the perpendicular from the origin and $\omega$ its angle with the x-axis.` },
          { front: t`Slope of $Ax + By + C = 0$`, back: t`$-\frac{A}{B}$ (when $B \neq 0$)` },
          { front: t`y-intercept of $Ax + By + C = 0$`, back: t`$-\frac{C}{B}$` },
          { front: "Equation of the y-axis", back: "x = 0" },
          { front: "Lines perpendicular in general form", back: t`$A_1A_2 + B_1B_2 = 0$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The slope of 3x + 4y − 7 = 0 is",
            options: [t`$\frac{3}{4}$`, t`$-\frac{3}{4}$`, t`$\frac{4}{3}$`, t`$-\frac{4}{3}$`],
            answer: 1,
            explain: t`Slope $= -\frac{A}{B} = -\frac{3}{4}$.`,
          },
          {
            kind: "numeric",
            q: "Find the y-intercept of 2x − 5y + 10 = 0.",
            answer: 2,
            explain: t`$5y = 2x + 10 \Rightarrow y = \frac{2}{5}x + 2$. The y-intercept is 2. (Or $-\frac{C}{B} = -\frac{10}{-5} = 2$.)`,
          },
          {
            kind: "mcq",
            q: "A line passes through (2, 3) and makes equal non-zero intercepts on the axes. Its equation is",
            options: ["x − y + 1 = 0", "x + y = 5", "x + y = 1", "3x − 2y = 0"],
            answer: 1,
            explain: t`$\frac{x}{a} + \frac{y}{a} = 1 \Rightarrow x + y = a$. With $(2, 3)$: $a = 5$.`,
          },
          {
            kind: "truefalse",
            q: "The intercept form x/a + y/b = 1 cannot represent a line through the origin.",
            answer: true,
            explain: "A line through the origin has both intercepts 0, and division by 0 is not allowed. Such lines are written y = mx (or x = 0).",
          },
          {
            kind: "mcq",
            q: t`For $3x + 4y + 10 = 0$ written in normal form $x\cos\omega + y\sin\omega = p$, the value of $p$ is`,
            options: ["10", "−2", "2", "5"],
            answer: 2,
            explain: t`$\sqrt{9 + 16} = 5$. Write $-3x - 4y = 10$ and divide by 5: $-\frac{3}{5}x - \frac{4}{5}y = 2$. So $p = 2$ (always positive).`,
            difficulty: 2,
            hint: "Move the constant to the right first; it must end up positive.",
          },
          {
            kind: "numeric",
            q: "A line through (−1, 2) is perpendicular to 2x − y + 3 = 0. Find its y-intercept. (Give a decimal.)",
            answer: 1.5,
            explain: t`Given slope 2, so the required slope is $-\frac{1}{2}$: $y - 2 = -\frac{1}{2}(x + 1)$, i.e. $x + 2y - 3 = 0$. At $x = 0$, $y = 1.5$.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The line through the origin and (3, −6) is y = ___ x.",
            answer: ["-2", "−2"],
            explain: t`Slope $= \frac{-6 - 0}{3 - 0} = -2$, and the y-intercept is 0.`,
          },
          {
            kind: "multi",
            q: "Which lines are parallel to 2x − 3y + 1 = 0?",
            options: ["4x − 6y = 7", "3x + 2y = 0", t`$y = \frac{2}{3}x - 5$`, "2x + 3y = 1"],
            answers: [0, 2],
            explain: t`The given slope is $\frac{2}{3}$. $4x - 6y = 7$ has slope $\frac{4}{6} = \frac{2}{3}$ and $y = \frac{2}{3}x - 5$ has slope $\frac{2}{3}$. $3x + 2y = 0$ (slope $-\frac{3}{2}$) is perpendicular; $2x + 3y = 1$ has slope $-\frac{2}{3}$.`,
          },
        ],
      },
      {
        slug: "c11-mat-sl-distance",
        title: "Distance of a Point from a Line",
        summary: "Derive the perpendicular distance formula, find the distance between parallel lines, and locate the foot of the perpendicular and the image of a point in a line.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚜",
            caption: "A farmer at a well wants the shortest pipe to a straight canal. The shortest path is the perpendicular from the well to the canal.",
          },
          {
            type: "text",
            md: t`The **distance of a point from a line** is the length of the **perpendicular** from the point to the line. Any other segment from the point to the line is the hypotenuse of a right triangle, so it is longer.

Let the line be $L: Ax + By + C = 0$ and the point $P(x_1, y_1)$. NCERT derives the distance using areas, assuming $A, B, C$ are all non-zero (the other cases are easy to check directly).`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`$L$ meets the x-axis at $Q\left(-\frac{C}{A}, 0\right)$ and the y-axis at $R\left(0, -\frac{C}{B}\right)$.`,
              t`Area of $\triangle PQR$ from coordinates: $\frac{1}{2}\left|x_1\left(0 + \frac{C}{B}\right) - \frac{C}{A}\left(-\frac{C}{B} - y_1\right) + 0\right| = \frac{1}{2}\left|\frac{C}{AB}\right|\,|Ax_1 + By_1 + C|$.`,
              t`Length $QR = \sqrt{\frac{C^2}{A^2} + \frac{C^2}{B^2}} = \left|\frac{C}{AB}\right|\sqrt{A^2 + B^2}$.`,
              t`Area is also $\frac{1}{2} \times QR \times d$, where $d$ is the perpendicular from $P$ to $QR$.`,
              t`Equate the two areas and cancel $\frac{1}{2}\left|\frac{C}{AB}\right|$: $d\sqrt{A^2 + B^2} = |Ax_1 + By_1 + C|$.`,
            ],
          },
          {
            type: "formula",
            tex: t`d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}`,
            caption: "Perpendicular distance of (x₁, y₁) from Ax + By + C = 0",
          },
          {
            type: "example",
            title: "Distance of a point from a line",
            problem: t`Find the distance of $(3, -5)$ from $3x - 4y - 26 = 0$.`,
            steps: [
              t`$A = 3$, $B = -4$, $C = -26$, $\sqrt{A^2 + B^2} = 5$.`,
              t`$Ax_1 + By_1 + C = 9 + 20 - 26 = 3$.`,
              t`$d = \frac{|3|}{5} = \frac{3}{5}$.`,
            ],
            answer: t`$\frac{3}{5}$ unit`,
          },
          {
            type: "text",
            md: t`**Distance between two parallel lines.** Parallel lines have the same slope, so they can be written with the **same** $A$ and $B$: $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$. Take any point on the first line and use the formula above; the result does not depend on which point you take.`,
          },
          {
            type: "formula",
            tex: t`d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}`,
            caption: "Distance between Ax + By + C₁ = 0 and Ax + By + C₂ = 0 (same A and B)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the distance of the origin from 12x + 5y − 26 = 0.",
                answer: 2,
                explain: t`$d = \frac{|0 + 0 - 26|}{\sqrt{144 + 25}} = \frac{26}{13} = 2$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Parallel lines with different coefficients",
            problem: t`Find the distance between $6x + 8y - 5 = 0$ and $3x + 4y + 10 = 0$.`,
            steps: [
              t`Slopes: both $-\frac{3}{4}$, so the lines are parallel.`,
              t`Make $A$ and $B$ equal: multiply the second by 2 to get $6x + 8y + 20 = 0$.`,
              t`$d = \frac{|-5 - 20|}{\sqrt{36 + 64}} = \frac{25}{10} = \frac{5}{2}$.`,
            ],
            answer: t`$\frac{5}{2}$ units`,
          },
          {
            type: "text",
            md: t`**Foot of the perpendicular and image (ISC and JEE).** If $(h, k)$ is the foot of the perpendicular from $(x_1, y_1)$ to $Ax + By + C = 0$, then

$\frac{h - x_1}{A} = \frac{k - y_1}{B} = -\frac{Ax_1 + By_1 + C}{A^2 + B^2}$.

For the **image** (mirror reflection) of the point in the line, replace the right side by $-2\,\frac{Ax_1 + By_1 + C}{A^2 + B^2}$, because the line bisects the segment joining a point and its image at right angles.`,
          },
          {
            type: "example",
            title: "Foot of the perpendicular and image",
            problem: t`Find the foot of the perpendicular from $(2, 3)$ to $x + y - 1 = 0$, and the image of $(2, 3)$ in this line.`,
            steps: [
              t`$Ax_1 + By_1 + C = 2 + 3 - 1 = 4$ and $A^2 + B^2 = 2$.`,
              t`Foot: $\frac{h - 2}{1} = \frac{k - 3}{1} = -\frac{4}{2} = -2$, so $(h, k) = (0, 1)$. Check: $0 + 1 - 1 = 0$. ✓`,
              t`Image: $\frac{h - 2}{1} = \frac{k - 3}{1} = -2 \times 2 = -4$, so the image is $(-2, -1)$.`,
              t`Check: the midpoint of $(2, 3)$ and $(-2, -1)$ is $(0, 1)$, the foot. ✓`,
            ],
            answer: t`Foot $(0, 1)$; image $(-2, -1)$`,
          },
          {
            type: "mistake",
            wrong: "The distance between 3x + 4y = 5 and 6x + 8y = 1 is |5 − 1| ÷ 5 = 4/5.",
            right: "First make the coefficients equal: 6x + 8y − 10 = 0 and 6x + 8y − 1 = 0. Then d = |−10 − (−1)| ÷ √(36 + 64) = 9/10.",
            why: "The formula |C₁ − C₂| ÷ √(A² + B²) is only true when both lines use the same A and B. With different multiples, the constants are on different scales and subtracting them means nothing.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Distance between 2x + y = 4 and 4x + 2y = 3?",
              emoji: "📏",
              options: [t`$\frac{1}{\sqrt{5}}$`, t`$\frac{\sqrt{5}}{2}$`, t`$\frac{1}{2\sqrt{5}}$`],
              answer: 1,
              trap: 0,
              explain: t`Write both as $4x + 2y - 8 = 0$ and $4x + 2y - 3 = 0$. Then $d = \frac{5}{\sqrt{20}} = \frac{5}{2\sqrt{5}} = \frac{\sqrt{5}}{2}$. The trap $\frac{1}{\sqrt{5}}$ subtracts 4 and 3 without matching coefficients.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "The derivation of the distance formula is a common 4–5 mark question: draw the triangle PQR, write both expressions for its area and equate them. In numericals, put the line in the form Ax + By + C = 0 before reading A, B and C, and keep the modulus until the last step. When an answer has ± (for example, points at a given distance), give both values.",
          },
          {
            type: "keypoints",
            items: [
              t`Distance of $(x_1, y_1)$ from $Ax + By + C = 0$ is $\frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$.`,
              t`Parallel lines: make $A, B$ identical, then $d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$.`,
              t`Foot of perpendicular: $\frac{h - x_1}{A} = \frac{k - y_1}{B} = -\frac{Ax_1 + By_1 + C}{A^2 + B^2}$; for the image use $-2(\ldots)$.`,
              "The distance is zero exactly when the point lies on the line.",
            ],
          },
        ],
        flashcards: [
          { front: "Distance of a point from a line", back: t`$\frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$` },
          { front: "Distance between parallel lines", back: t`$\frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$, after making A and B the same in both equations.` },
          { front: "Distance of the origin from Ax + By + C = 0", back: t`$\frac{|C|}{\sqrt{A^2 + B^2}}$` },
          { front: "Foot of perpendicular (h, k)", back: t`$\frac{h - x_1}{A} = \frac{k - y_1}{B} = -\frac{Ax_1 + By_1 + C}{A^2 + B^2}$` },
          { front: "Image of a point in a line", back: t`Same as the foot formula with $-2\,\frac{Ax_1 + By_1 + C}{A^2 + B^2}$ on the right.` },
          { front: "Why is the perpendicular the shortest distance?", back: "Every other segment from the point to the line is the hypotenuse of a right triangle whose leg is the perpendicular." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the distance of (1, 1) from 3x + 4y − 2 = 0.",
            answer: 1,
            explain: t`$\frac{|3 + 4 - 2|}{5} = \frac{5}{5} = 1$.`,
          },
          {
            kind: "mcq",
            q: "The distance between 3x − 4y + 7 = 0 and 3x − 4y − 8 = 0 is",
            options: ["1/5", "3", "15", "1"],
            answer: 1,
            explain: t`Same $A, B$: $d = \frac{|7 - (-8)|}{5} = \frac{15}{5} = 3$.`,
          },
          {
            kind: "mcq",
            q: "The points on the x-axis at distance 3 from 5x − 12y + 4 = 0 are",
            options: ["(7, 0) and (−43/5, 0)", "(7, 0) only", "(−7, 0) and (43/5, 0)", "(3, 0) and (−3, 0)"],
            answer: 0,
            explain: t`For $(a, 0)$: $\frac{|5a + 4|}{13} = 3$, so $5a + 4 = \pm 39$, giving $a = 7$ or $a = -\frac{43}{5}$.`,
            difficulty: 2,
            hint: "Remove the modulus with ±.",
          },
          {
            kind: "truefalse",
            q: "The distance of a point from a line is zero if and only if the point lies on the line.",
            answer: true,
            explain: t`$d = 0$ exactly when $Ax_1 + By_1 + C = 0$, which is the condition for the point to be on the line.`,
          },
          {
            kind: "mcq",
            q: "The foot of the perpendicular from the origin to x + y = 2 is",
            options: ["(2, 0)", "(0, 2)", "(1, 1)", t`$(\sqrt{2}, \sqrt{2})$`],
            answer: 2,
            explain: t`$\frac{h}{1} = \frac{k}{1} = -\frac{0 + 0 - 2}{2} = 1$, so $(1, 1)$. By symmetry, the foot lies on $y = x$.`,
          },
          {
            kind: "numeric",
            q: "Find the distance between y = 2x + 3 and y = 2x − 2, correct to two decimal places.",
            answer: 2.24,
            tolerance: 0.01,
            explain: t`$2x - y + 3 = 0$ and $2x - y - 2 = 0$: $d = \frac{|3 - (-2)|}{\sqrt{5}} = \frac{5}{\sqrt{5}} = \sqrt{5} \approx 2.24$.`,
          },
          {
            kind: "multi",
            q: "Which lines are parallel to 3x + 4y = 0 and at distance 2 from the origin?",
            options: ["3x + 4y = 10", "3x + 4y = −10", "3x + 4y = 2", "4x + 3y = 10"],
            answers: [0, 1],
            explain: t`Lines parallel to $3x + 4y = 0$ are $3x + 4y = k$, at distance $\frac{|k|}{5}$ from the origin. So $|k| = 10$. $4x + 3y = 10$ is not parallel.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-mat-sl-exam",
        title: "Exam edge: Straight Lines for JEE, KCET and COMEDK",
        summary: "Reflections, families of lines through an intersection, angle bisectors (which one is acute, which contains the origin), concurrency and the basics of a pair of straight lines.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Straight Lines is the base of all coordinate geometry, and JEE Main usually has 1–2 questions on it directly plus several more hidden inside circles and conics. Typical items: image of a point, foot of a perpendicular, a line through the intersection of two lines, angle bisectors, concurrency, area and centres of a triangle, and locus. KCET and COMEDK ask quick formula questions (slope, distance, angle, intercepts). JEE Advanced combines these with families of lines and pairs of lines.

ISC Class 11 also lists **angle bisectors** and **families of lines** in its syllabus, so ISC students should study this lesson as board work.`,
          },
          {
            type: "table",
            headers: ["Result", "Statement", "Safe to use when"],
            rows: [
              ["Family through intersection", t`$L_1 + \lambda L_2 = 0$`, t`always, but it never gives $L_2$ itself`],
              ["Concurrency of three lines", t`$\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$`, "no two of the lines are parallel"],
              ["Image of a point", t`$\frac{h - x_1}{a} = \frac{k - y_1}{b} = \frac{-2(ax_1 + by_1 + c)}{a^2 + b^2}$`, "any line ax + by + c = 0"],
              ["Pair of lines through origin", t`$ax^2 + 2hxy + by^2 = 0$, angle $\tan\theta = \frac{2\sqrt{h^2 - ab}}{|a + b|}$`, t`equation is homogeneous of degree 2 and $h^2 \ge ab$`],
              ["Perpendicular pair", t`$a + b = 0$ (coefficient of $x^2$ + coefficient of $y^2$)`, "same homogeneous equation"],
              ["Same side of a line", t`$ax_1 + by_1 + c$ and $ax_2 + by_2 + c$ have the same sign`, "points not on the line"],
            ],
          },
          {
            type: "formula",
            tex: t`\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm\,\frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}`,
            caption: "The two bisectors of the angles between two lines: points equidistant from both lines",
          },
          {
            type: "text",
            md: t`**Which bisector is which?** First rewrite both lines so that $c_1 > 0$ and $c_2 > 0$.

- The bisector with the **+ sign** is the one of the angle that **contains the origin**.
- If $a_1a_2 + b_1b_2 < 0$, the origin lies in the **acute** angle, so the + bisector is the acute-angle bisector. If $a_1a_2 + b_1b_2 > 0$, the + bisector is the **obtuse**-angle bisector.

The two bisectors are always perpendicular to each other.`,
          },
          {
            type: "example",
            title: "KCET level: image of a point",
            problem: t`Find the image of $(1, 2)$ in the line $x - y + 3 = 0$.`,
            steps: [
              t`$ax_1 + by_1 + c = 1 - 2 + 3 = 2$; $a^2 + b^2 = 2$.`,
              t`$\frac{h - 1}{1} = \frac{k - 2}{-1} = \frac{-2 \times 2}{2} = -2$.`,
              t`$h = -1$, $k = 4$.`,
              t`Check: midpoint $(0, 3)$ lies on the line ($0 - 3 + 3 = 0$) and the join has slope $\frac{4 - 2}{-1 - 1} = -1$, perpendicular to the line's slope 1. ✓`,
            ],
            answer: t`$(-1, 4)$`,
          },
          {
            type: "example",
            title: "JEE Main level: family of lines",
            problem: t`Find the line through the intersection of $2x + y - 5 = 0$ and $x - y - 1 = 0$ that is perpendicular to $3x + 4y = 7$.`,
            steps: [
              t`Family: $(2x + y - 5) + \lambda(x - y - 1) = 0$, i.e. $(2 + \lambda)x + (1 - \lambda)y - (5 + \lambda) = 0$.`,
              t`Its slope is $-\frac{2 + \lambda}{1 - \lambda}$. Perpendicular to slope $-\frac{3}{4}$ means slope $\frac{4}{3}$.`,
              t`$-3(2 + \lambda) = 4(1 - \lambda) \Rightarrow -6 - 3\lambda = 4 - 4\lambda \Rightarrow \lambda = 10$.`,
              t`Line: $12x - 9y - 15 = 0$, i.e. $4x - 3y - 5 = 0$. Check: the lines meet at $(2, 1)$, and $8 - 3 - 5 = 0$. ✓`,
            ],
            answer: t`$4x - 3y - 5 = 0$`,
          },
          {
            type: "example",
            title: "JEE Main level: the bisector containing the origin",
            problem: t`For $3x - 4y + 7 = 0$ and $12x + 5y - 2 = 0$, find the bisector of the angle containing the origin and say whether it bisects the acute or obtuse angle.`,
            steps: [
              t`Make constants positive: $3x - 4y + 7 = 0$ and $-12x - 5y + 2 = 0$.`,
              t`+ bisector: $\frac{3x - 4y + 7}{5} = \frac{-12x - 5y + 2}{13}$.`,
              t`$39x - 52y + 91 = -60x - 25y + 10 \Rightarrow 99x - 27y + 81 = 0 \Rightarrow 11x - 3y + 9 = 0$.`,
              t`$a_1a_2 + b_1b_2 = 3(-12) + (-4)(-5) = -16 < 0$, so the origin is in the acute angle.`,
            ],
            answer: t`$11x - 3y + 9 = 0$, the bisector of the acute angle`,
          },
          {
            type: "example",
            title: "JEE Advanced basics: a pair of lines",
            problem: t`Show that $x^2 - 5xy + 6y^2 = 0$ is a pair of lines through the origin and find the acute angle between them.`,
            steps: [
              t`Factorise: $x^2 - 5xy + 6y^2 = (x - 2y)(x - 3y)$, so the lines are $x = 2y$ and $x = 3y$.`,
              t`Here $a = 1$, $2h = -5$ so $h = -\frac{5}{2}$, $b = 6$; $h^2 - ab = \frac{25}{4} - 6 = \frac{1}{4}$.`,
              t`$\tan\theta = \frac{2\sqrt{1/4}}{|1 + 6|} = \frac{1}{7}$.`,
              t`Check with slopes $\frac{1}{2}$ and $\frac{1}{3}$: $\left|\frac{1/2 - 1/3}{1 + 1/6}\right| = \frac{1/6}{7/6} = \frac{1}{7}$. ✓`,
            ],
            answer: t`$\theta = \tan^{-1}\frac{1}{7}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The pair $2x^2 + 7xy - 2y^2 = 0$ represents`,
                options: ["two parallel lines", "two perpendicular lines through the origin", "coincident lines", "lines inclined at 45°"],
                answer: 1,
                explain: t`Coefficient of $x^2$ + coefficient of $y^2$ $= 2 + (-2) = 0$, and $h^2 - ab = \frac{49}{4} + 4 > 0$, so they are real, perpendicular lines through the origin.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The bisector with the + sign is always the acute-angle bisector.",
            right: "With both constants made positive, the + bisector contains the origin. It is the acute bisector only when a₁a₂ + b₁b₂ < 0.",
            why: "The sign rule is about the origin, not about the size of the angle. Many solved examples happen to have the origin in the acute angle, which makes the wrong rule look true.",
          },
          {
            type: "mistake",
            wrong: "Every line through the intersection of L₁ = 0 and L₂ = 0 is L₁ + λL₂ = 0 for some λ.",
            right: "L₁ + λL₂ = 0 gives every such line except L₂ = 0 itself. Check L₂ separately when it might be the answer.",
            why: "To get L₂ you would need λ to be infinite. Questions that ask for \"a line through the intersection parallel to …\" sometimes have L₂ as the answer, and the λ method then gives no solution.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Lines 4x + 3y + 1 = 0 and 3x + 4y + 2 = 0: origin's angle?",
              emoji: "📐",
              options: ["The acute angle", "The obtuse angle", "Neither; the origin is on a bisector"],
              answer: 1,
              trap: 0,
              explain: t`Both constants are already positive. $a_1a_2 + b_1b_2 = 12 + 12 = 24 > 0$, so the origin is in the obtuse angle, and the + bisector $\frac{4x + 3y + 1}{5} = \frac{3x + 4y + 2}{5}$, i.e. $x - y - 1 = 0$, bisects the obtuse angle.`,
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they fail",
            md: "The tan formula always gives the acute angle; if a question wants the obtuse one, subtract from 180°. The bisector sign test needs both constants positive first. The pair-of-lines angle formula works only for a homogeneous second-degree equation (all terms of degree 2). For a reflection, check your answer with the midpoint: it must satisfy the line.",
          },
          {
            type: "keypoints",
            items: [
              t`Bisectors: $\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm\frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}$; with $c_1, c_2 > 0$ the + sign contains the origin.`,
              t`Family through the intersection: $L_1 + \lambda L_2 = 0$ (misses $L_2$).`,
              "Three lines are concurrent when the determinant of their coefficients is zero (and no two are parallel).",
              t`$ax^2 + 2hxy + by^2 = 0$: two lines through the origin, $\tan\theta = \frac{2\sqrt{h^2 - ab}}{|a + b|}$, perpendicular if $a + b = 0$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Angle bisectors of two lines", back: t`$\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm\frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}$` },
          { front: "Bisector containing the origin", back: "Make c₁, c₂ positive; take the + sign." },
          { front: "When is the + bisector the acute one?", back: "When a₁a₂ + b₁b₂ < 0 (after making c₁, c₂ positive)." },
          { front: "Lines through the intersection of L₁ = 0 and L₂ = 0", back: t`$L_1 + \lambda L_2 = 0$ (every such line except $L_2$).` },
          { front: t`Angle between the lines $ax^2 + 2hxy + by^2 = 0$`, back: t`$\tan\theta = \frac{2\sqrt{h^2 - ab}}{|a + b|}$; perpendicular if $a + b = 0$, coincident if $h^2 = ab$.` },
          { front: "Image of (x₁, y₁) in ax + by + c = 0", back: t`$\frac{h - x_1}{a} = \frac{k - y_1}{b} = \frac{-2(ax_1 + by_1 + c)}{a^2 + b^2}$` },
          { front: "Concurrency test", back: "Determinant of the three rows (a, b, c) equals zero." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "The image of (2, 1) in the line x + y − 5 = 0 is (h, k). Find h + k.",
            answer: 7,
            explain: t`$\frac{h - 2}{1} = \frac{k - 1}{1} = \frac{-2(2 + 1 - 5)}{2} = 2$, so the image is $(4, 3)$ and $h + k = 7$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The line through the intersection of x + 2y = 5 and 3x − y = 1 and parallel to the y-axis is",
            options: ["y = 2", "x = 1", "x = 2", "x + y = 3"],
            answer: 1,
            explain: t`From $3x - y = 1$, $y = 3x - 1$; then $x + 6x - 2 = 5$ gives $x = 1$, $y = 2$. A line parallel to the y-axis through $(1, 2)$ is $x = 1$.`,
          },
          {
            kind: "mcq",
            q: "The bisector of the acute angle between 4x + 3y − 6 = 0 and 5x + 12y + 9 = 0 is",
            options: ["7x + 9y − 3 = 0", "9x − 7y − 41 = 0", "9x + 7y − 3 = 0", "7x − 9y + 41 = 0"],
            answer: 0,
            explain: t`Make constants positive: $-4x - 3y + 6 = 0$ and $5x + 12y + 9 = 0$. Then $a_1a_2 + b_1b_2 = -20 - 36 < 0$, so the + bisector is acute: $13(-4x - 3y + 6) = 5(5x + 12y + 9)$ gives $77x + 99y - 33 = 0$, i.e. $7x + 9y - 3 = 0$. The other bisector is $9x - 7y - 41 = 0$.`,
            difficulty: 3,
            hint: "Fix the signs of the constants first, then test a₁a₂ + b₁b₂.",
          },
          {
            kind: "numeric",
            q: t`Find, in degrees, the acute angle between the lines $x^2 - 4xy + y^2 = 0$.`,
            answer: 60,
            unit: "°",
            explain: t`$a = b = 1$, $h = -2$: $\tan\theta = \frac{2\sqrt{4 - 1}}{2} = \sqrt{3}$, so $\theta = 60^\circ$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`Which are true for $3x^2 + 8xy - 3y^2 = 0$?`,
            options: ["The lines are perpendicular.", "Both lines pass through the origin.", "The lines are 3x − y = 0 and x + 3y = 0.", "The lines are parallel."],
            answers: [0, 1, 2],
            explain: t`$a + b = 3 - 3 = 0$, so perpendicular. $(3x - y)(x + 3y) = 3x^2 + 9xy - xy - 3y^2 = 3x^2 + 8xy - 3y^2$. A homogeneous equation gives lines through the origin, so they cannot be parallel.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The lines x + y = 1, 2x − y = 5 and kx + 3y = 4 are concurrent. Find k.",
            answer: 3.5,
            explain: t`The first two meet where $3x = 6$: $(2, -1)$. Then $2k - 3 = 4$, so $k = 3.5$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`For every real $\lambda$, the line $(1 + 2\lambda)x + (2 - \lambda)y - (4 + 3\lambda) = 0$ passes through the fixed point`,
            options: ["(1, 2)", "(2, 1)", "(4, 3)", "(−2, 1)"],
            answer: 1,
            explain: t`Rewrite as $(x + 2y - 4) + \lambda(2x - y - 3) = 0$. The fixed point solves $x + 2y = 4$ and $2x - y = 3$: $x = 2$, $y = 1$.`,
            difficulty: 3,
            hint: "Collect the terms with λ and the terms without λ.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 11: Circles (ISC chapter; NCERT covers the circle inside      */
  /* Conic Sections)                                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-mat-circles",
    title: "Circles (Class 11)",
    icon: "⭕",
    description: "The circle as ISC teaches it: standard, general, diameter and parametric forms, the circle through three points, position of a point, line and circle, tangency conditions and tangents, with chords, two circles and families of circles for JEE.",
    lessons: [
      {
        slug: "c11-mat-circle-equations",
        title: "Equation of a Circle: Standard, General and Diameter Forms",
        summary: "Centre-radius form, the general equation and when it is a real circle, the diameter form, the parametric form and the circle through three given points.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪢",
            caption: "To mark a round flower bed, tie a rope to a peg and walk around it with the rope tight. Every point you trace is the same distance from the peg.",
          },
          {
            type: "text",
            md: t`A **circle** is the set of all points in a plane that are at a fixed distance (the **radius** $r$) from a fixed point (the **centre** $C(h, k)$).

A point $P(x, y)$ is on the circle exactly when $CP = r$. By the distance formula, $\sqrt{(x - h)^2 + (y - k)^2} = r$. Squaring gives the **standard (centre-radius) form**. When the centre is the origin it becomes $x^2 + y^2 = r^2$.`,
          },
          {
            type: "formula",
            tex: t`(x - h)^2 + (y - k)^2 = r^2`,
            caption: "Circle with centre (h, k) and radius r",
          },
          {
            type: "text",
            md: t`**General form.** Expanding the standard form gives an equation of the type

$x^2 + y^2 + 2gx + 2fy + c = 0$.

Completing squares: $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$. So the centre is $(-g, -f)$ and the radius is $\sqrt{g^2 + f^2 - c}$:

- $g^2 + f^2 - c > 0$: a real circle;
- $g^2 + f^2 - c = 0$: a **point circle** (just the centre);
- $g^2 + f^2 - c < 0$: no real points (an imaginary circle).

A second-degree equation $ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$ is a circle only if $a = b \neq 0$ and $h = 0$ (no $xy$ term). Divide by $a$ first to make the coefficients of $x^2$ and $y^2$ equal to 1.`,
          },
          {
            type: "formula",
            tex: t`\text{centre } (-g, -f), \qquad r = \sqrt{g^2 + f^2 - c}`,
            caption: "For x² + y² + 2gx + 2fy + c = 0",
          },
          {
            type: "example",
            title: "Centre and radius from the general form",
            problem: t`Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.`,
            steps: [
              t`Compare: $2g = -6 \Rightarrow g = -3$; $2f = 4 \Rightarrow f = 2$; $c = -12$.`,
              t`Centre $(-g, -f) = (3, -2)$.`,
              t`$r = \sqrt{9 + 4 + 12} = \sqrt{25} = 5$.`,
              t`Check by completing squares: $(x - 3)^2 + (y + 2)^2 = 12 + 9 + 4 = 25$. ✓`,
            ],
            answer: t`Centre $(3, -2)$, radius 5`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the radius of 2x² + 2y² − 4x + 8y − 8 = 0.",
                answer: 3,
                explain: t`Divide by 2: $x^2 + y^2 - 2x + 4y - 4 = 0$, so $g = -1$, $f = 2$, $c = -4$ and $r = \sqrt{1 + 4 + 4} = 3$. Forgetting to divide by 2 first gives a wrong radius.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Diameter form.** If $A(x_1, y_1)$ and $B(x_2, y_2)$ are the ends of a diameter, then for any other point $P$ on the circle, $\angle APB = 90^\circ$ (angle in a semicircle). So slope of $PA$ × slope of $PB$ $= -1$, which simplifies to

$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$.

**Parametric form.** Every point of $(x - h)^2 + (y - k)^2 = r^2$ can be written as $x = h + r\cos\theta$, $y = k + r\sin\theta$, $0 \le \theta < 2\pi$, where $\theta$ is the angle the radius makes with the positive x-direction.`,
          },
          {
            type: "example",
            title: "Diameter form",
            problem: t`Find the circle on the segment joining $(2, -3)$ and $(-4, 5)$ as diameter.`,
            steps: [
              t`$(x - 2)(x + 4) + (y + 3)(y - 5) = 0$.`,
              t`$x^2 + 2x - 8 + y^2 - 2y - 15 = 0$, so $x^2 + y^2 + 2x - 2y - 23 = 0$.`,
              t`Check: centre $(-1, 1)$ is the midpoint of the ends ✓; radius $\sqrt{1 + 1 + 23} = 5$ and half the diameter is $\frac{1}{2}\sqrt{36 + 64} = 5$. ✓`,
            ],
            answer: t`$x^2 + y^2 + 2x - 2y - 23 = 0$`,
          },
          {
            type: "example",
            title: "Circle through three points",
            problem: t`Find the circle through $(1, 1)$, $(2, -1)$ and $(3, 2)$.`,
            steps: [
              t`Let it be $x^2 + y^2 + 2gx + 2fy + c = 0$. Substitute each point: $2 + 2g + 2f + c = 0$, $5 + 4g - 2f + c = 0$, $13 + 6g + 4f + c = 0$.`,
              t`Subtract the first from the other two: $3 + 2g - 4f = 0$ and $11 + 4g + 2f = 0$.`,
              t`From the first, $2g = 4f - 3$. Substitute in the second: $11 + 2(4f - 3) + 2f = 0 \Rightarrow 10f = -5 \Rightarrow f = -\frac{1}{2}$, so $g = -\frac{5}{2}$.`,
              t`$c = -2 - 2g - 2f = -2 + 5 + 1 = 4$. Check $(3, 2)$: $9 + 4 - 15 - 2 + 4 = 0$. ✓`,
            ],
            answer: t`$x^2 + y^2 - 5x - y + 4 = 0$, centre $\left(\frac{5}{2}, \frac{1}{2}\right)$, radius $\frac{\sqrt{10}}{2}$`,
          },
          {
            type: "mistake",
            wrong: "The centre of x² + y² + 4x − 6y − 3 = 0 is (4, −6).",
            right: "Halve the coefficients and change their signs: 2g = 4 gives g = 2, 2f = −6 gives f = −3, so the centre is (−g, −f) = (−2, 3) and r = √(4 + 9 + 3) = 4.",
            why: "The equation is written with 2g and 2f, not g and f, and the centre is (−g, −f). Reading the coefficients directly forgets both the halving and the sign change.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "What does each equation represent?",
              groups: ["Circle of positive radius", "Point circle", "Not a real circle"],
              items: [
                { text: "x² + y² − 2x − 4y + 1 = 0", group: 0, hint: "g² + f² − c = 1 + 4 − 1 = 4 > 0." },
                { text: "2x² + 2y² − 8x + 3 = 0", group: 0, hint: "Divide by 2: 4 + 0 − 1.5 = 2.5 > 0." },
                { text: "x² + y² − 6x + 9 = 0", group: 1, hint: "9 + 0 − 9 = 0: only the point (3, 0)." },
                { text: "x² + y² + 4y + 4 = 0", group: 1, hint: "0 + 4 − 4 = 0: only the point (0, −2)." },
                { text: "x² + y² + 2x + 5 = 0", group: 2, hint: "1 + 0 − 5 < 0: no real points." },
                { text: "x² + 2y² − 4 = 0", group: 2, hint: "x² and y² have different coefficients." },
                { text: "x² + y² + xy − 1 = 0", group: 2, hint: "A circle has no xy term." },
              ],
              explain: t`First check the shape: equal coefficients of $x^2$ and $y^2$, and no $xy$ term. Then the sign of $g^2 + f^2 - c$ decides between a real circle, a point circle and no real circle.`,
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "ISC Class 11 has Circles as its own chapter, including the diameter and parametric forms and the circle through three points. In NCERT (CBSE, Karnataka I PUC) the circle is one section of Conic Sections: standard form, and centre and radius from the general equation. The extra forms here are also needed for JEE and KCET.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Before reading off g and f, make the coefficients of x² and y² equal to 1. In a three-point question, label your three equations and show each subtraction; method marks are given for setting them up correctly even if the arithmetic slips. Finish by substituting one of the points as a check.",
          },
          {
            type: "keypoints",
            items: [
              t`Standard form $(x - h)^2 + (y - k)^2 = r^2$.`,
              t`General form $x^2 + y^2 + 2gx + 2fy + c = 0$: centre $(-g, -f)$, radius $\sqrt{g^2 + f^2 - c}$.`,
              t`Diameter form $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$; parametric form $(h + r\cos\theta, k + r\sin\theta)$.`,
              t`A second-degree equation is a circle only if the $x^2$ and $y^2$ coefficients are equal and there is no $xy$ term.`,
              "Three non-collinear points fix exactly one circle: substitute in the general form and solve for g, f, c.",
            ],
          },
        ],
        flashcards: [
          { front: "Standard equation of a circle", back: t`$(x - h)^2 + (y - k)^2 = r^2$` },
          { front: t`Centre and radius of $x^2 + y^2 + 2gx + 2fy + c = 0$`, back: t`Centre $(-g, -f)$, radius $\sqrt{g^2 + f^2 - c}$` },
          { front: "Point circle", back: t`$g^2 + f^2 - c = 0$: the circle shrinks to its centre.` },
          { front: "Diameter form", back: t`$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$` },
          { front: "Parametric form", back: t`$x = h + r\cos\theta$, $y = k + r\sin\theta$` },
          { front: "When is a second-degree equation a circle?", back: t`Coefficients of $x^2$ and $y^2$ equal (non-zero) and no $xy$ term.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The circle with centre (2, −3) and radius 4 is",
            options: ["x² + y² − 4x + 6y − 3 = 0", "x² + y² + 4x − 6y − 3 = 0", "x² + y² − 4x + 6y + 3 = 0", "x² + y² − 4x + 6y − 16 = 0"],
            answer: 0,
            explain: t`$(x - 2)^2 + (y + 3)^2 = 16 \Rightarrow x^2 + y^2 - 4x + 6y + 13 - 16 = 0$, i.e. constant $-3$.`,
          },
          {
            kind: "mcq",
            q: "The circle on the join of (0, 0) and (6, 8) as diameter is",
            options: ["x² + y² + 6x + 8y = 0", "x² + y² − 6x − 8y = 0", "x² + y² − 3x − 4y = 0", "x² + y² = 100"],
            answer: 1,
            explain: t`$(x - 0)(x - 6) + (y - 0)(y - 8) = 0 \Rightarrow x^2 + y^2 - 6x - 8y = 0$.`,
          },
          {
            kind: "truefalse",
            q: "x² + y² + 2x + 4y + 6 = 0 represents a real circle.",
            answer: false,
            explain: t`$g^2 + f^2 - c = 1 + 4 - 6 = -1 < 0$, so there are no real points.`,
          },
          {
            kind: "fill",
            q: "3x² + ky² + 6x − 2 = 0 is a circle only when k = ___.",
            answer: ["3"],
            explain: t`The coefficients of $x^2$ and $y^2$ must be equal.`,
          },
          {
            kind: "numeric",
            q: "A circle passes through (0, 0), (4, 0) and (0, 6). Find the square of its radius.",
            answer: 13,
            explain: t`Through the origin, $c = 0$. With $(4, 0)$: $16 + 8g = 0$, $g = -2$. With $(0, 6)$: $36 + 12f = 0$, $f = -3$. So $r^2 = 4 + 9 = 13$. (The right angle at the origin means the hypotenuse, of length $\sqrt{52}$, is a diameter.)`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`The curve $x = 1 + 3\cos\theta$, $y = -2 + 3\sin\theta$ is a circle with`,
            options: ["centre (1, −2), radius 3", "centre (−1, 2), radius 3", "centre (1, −2), radius 9", "centre (3, 3), radius 1"],
            answer: 0,
            explain: t`$(x - 1)^2 + (y + 2)^2 = 9(\cos^2\theta + \sin^2\theta) = 9$.`,
          },
          {
            kind: "multi",
            q: "Which are true for x² + y² − 8x + 6y = 0?",
            options: ["It passes through the origin.", "Its centre is (4, −3).", "Its radius is 5.", "It touches the x-axis."],
            answers: [0, 1, 2],
            explain: t`$c = 0$, so $(0, 0)$ is on it. Centre $(4, -3)$, $r = \sqrt{16 + 9} = 5$. To touch the x-axis the radius would have to equal $|{-3}| = 3$.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-mat-circle-tangents",
        title: "Line and Circle: Intersection, Tangency and Tangents",
        summary: "Position of a point with respect to a circle, when a line cuts, touches or misses a circle, the condition c² = a²(1 + m²), the tangent at a point and the length of a tangent.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚲",
            caption: "A cycle wheel rests on a flat road at exactly one point. The road is a tangent to the wheel, and the spoke to that point is perpendicular to the road.",
          },
          {
            type: "text",
            md: t`**Position of a point.** For the circle $S \equiv x^2 + y^2 + 2gx + 2fy + c = 0$, put $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$. $S_1$ equals $CP^2 - r^2$, so the point $P(x_1, y_1)$ is

- **inside** the circle if $S_1 < 0$,
- **on** the circle if $S_1 = 0$,
- **outside** the circle if $S_1 > 0$.`,
          },
          {
            type: "text",
            md: t`**Line and circle.** Let $d$ be the perpendicular distance from the centre to the line. Then the line

- cuts the circle in **two** points (a secant) if $d < r$,
- **touches** it at one point (a tangent) if $d = r$,
- does **not meet** it if $d > r$.

Algebraically, put $y = mx + c$ into $x^2 + y^2 = a^2$: $(1 + m^2)x^2 + 2mcx + (c^2 - a^2) = 0$. The line is a tangent when this quadratic has equal roots. The discriminant condition $4m^2c^2 - 4(1 + m^2)(c^2 - a^2) = 0$ simplifies to $c^2 = a^2(1 + m^2)$, the same as $\frac{|c|}{\sqrt{1 + m^2}} = a$.`,
          },
          {
            type: "formula",
            tex: t`c^2 = a^2(1 + m^2) \quad\Longleftrightarrow\quad y = mx \pm a\sqrt{1 + m^2} \text{ touches } x^2 + y^2 = a^2`,
            caption: "Condition of tangency and the tangents of slope m",
          },
          {
            type: "example",
            title: "Points where a line meets a circle",
            problem: t`Find where $y = x + 1$ meets $x^2 + y^2 = 25$.`,
            steps: [
              t`Substitute: $x^2 + (x + 1)^2 = 25 \Rightarrow 2x^2 + 2x - 24 = 0 \Rightarrow x^2 + x - 12 = 0$.`,
              t`$(x + 4)(x - 3) = 0$, so $x = 3$ or $x = -4$.`,
              t`Then $y = 4$ or $y = -3$. Check: $9 + 16 = 25$ and $16 + 9 = 25$. ✓`,
            ],
            answer: t`$(3, 4)$ and $(-4, -3)$`,
          },
          {
            type: "example",
            title: "Condition of tangency",
            problem: t`For what values of $c$ does $y = 2x + c$ touch $x^2 + y^2 = 5$?`,
            steps: [
              t`Here $m = 2$ and $a^2 = 5$.`,
              t`$c^2 = 5(1 + 4) = 25$.`,
              t`$c = \pm 5$. Check: distance of the origin from $2x - y + 5 = 0$ is $\frac{5}{\sqrt{5}} = \sqrt{5} = r$. ✓`,
            ],
            answer: t`$c = 5$ or $c = -5$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The point (1, 2) and the circle x² + y² − 4x + 2y − 11 = 0: the point lies",
                options: ["inside the circle", "on the circle", "outside the circle", "at the centre"],
                answer: 0,
                explain: t`$S_1 = 1 + 4 - 4 + 4 - 11 = -6 < 0$, so the point is inside. (The centre is $(2, -1)$, not $(1, 2)$.)`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Tangent at a point on the circle.** The tangent at $P(x_1, y_1)$ is perpendicular to the radius $CP$. For $x^2 + y^2 = a^2$ the radius has slope $\frac{y_1}{x_1}$, so the tangent has slope $-\frac{x_1}{y_1}$, and simplifying $y - y_1 = -\frac{x_1}{y_1}(x - x_1)$ with $x_1^2 + y_1^2 = a^2$ gives $xx_1 + yy_1 = a^2$.

For the general circle, the rule is: replace $x^2$ by $xx_1$, $y^2$ by $yy_1$, $2x$ by $x + x_1$ and $2y$ by $y + y_1$. The **normal** at $P$ is the line $CP$; it always passes through the centre.

**Length of the tangent** from an outside point $P(x_1, y_1)$ to the point of contact is $\sqrt{S_1}$ (from Pythagoras: $PT^2 = CP^2 - r^2$).`,
          },
          {
            type: "formula",
            tex: t`xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0`,
            caption: "Tangent at (x₁, y₁) on x² + y² + 2gx + 2fy + c = 0 (written T = 0)",
          },
          {
            type: "example",
            title: "Tangent at a point of a general circle",
            problem: t`Show that $(5, 1)$ lies on $x^2 + y^2 - 4x + 6y - 12 = 0$ and find the tangent there.`,
            steps: [
              t`$S_1 = 25 + 1 - 20 + 6 - 12 = 0$, so the point is on the circle.`,
              t`$g = -2$, $f = 3$, $c = -12$. Tangent: $5x + y - 2(x + 5) + 3(y + 1) - 12 = 0$.`,
              t`$3x + 4y - 19 = 0$.`,
              t`Check: the centre is $(2, -3)$; the radius to $(5, 1)$ has direction $(3, 4)$, which is the normal direction of $3x + 4y = 19$. ✓`,
            ],
            answer: t`$3x + 4y - 19 = 0$`,
          },
          {
            type: "mistake",
            wrong: "For any point (x₁, y₁), the tangent to x² + y² = a² is xx₁ + yy₁ = a².",
            right: "That formula is the tangent only when (x₁, y₁) is on the circle. From an outside point there are two tangents; then use y − y₁ = m(x − x₁) with the tangency condition. (For an outside point, xx₁ + yy₁ = a² is the chord of contact.)",
            why: "The derivation used x₁² + y₁² = a², which is true only for points on the circle. The same-looking equation for an outside point is a different line, the chord joining the two points of contact.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Does 3x + 4y = 10 cut, touch or miss x² + y² = 4?",
              emoji: "⭕",
              options: ["Cuts it in two points", "Touches it", "Misses it"],
              answer: 1,
              trap: 0,
              explain: t`Distance of the centre from the line: $\frac{|0 + 0 - 10|}{5} = 2$, equal to the radius 2, so the line is a tangent. A line need not pass near the centre to touch the circle; compare $d$ with $r$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "ISC asks for the condition c² = a²(1 + m²) by the discriminant method; show the quadratic in x and then set the discriminant to zero. For a tangent at a point, first verify that the point is on the circle (S₁ = 0) and say so. The perpendicular-distance check (d = r) is a quick way to confirm your answer.",
          },
          {
            type: "keypoints",
            items: [
              t`$S_1 < 0$ inside, $= 0$ on, $> 0$ outside.`,
              t`Line and circle: compare the distance $d$ of the centre from the line with $r$.`,
              t`$y = mx + c$ touches $x^2 + y^2 = a^2$ iff $c^2 = a^2(1 + m^2)$; tangents of slope $m$: $y = mx \pm a\sqrt{1 + m^2}$.`,
              t`Tangent at $(x_1, y_1)$: $T = 0$, i.e. $xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$.`,
              t`Length of a tangent from $(x_1, y_1)$: $\sqrt{S_1}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Meaning of the sign of $S_1$`, back: "S₁ < 0: inside; S₁ = 0: on; S₁ > 0: outside." },
          { front: "When does a line touch a circle?", back: "When the perpendicular distance from the centre equals the radius." },
          { front: t`Tangency condition for $y = mx + c$ and $x^2 + y^2 = a^2$`, back: t`$c^2 = a^2(1 + m^2)$` },
          { front: t`Tangent at $(x_1, y_1)$ to $x^2 + y^2 = a^2$`, back: t`$xx_1 + yy_1 = a^2$` },
          { front: "Length of the tangent from an external point", back: t`$\sqrt{S_1}$` },
          { front: "Normal to a circle at a point", back: "The line through the point and the centre." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the length of the tangent from (5, 3) to x² + y² − 2x − 4y − 4 = 0, to two decimal places.",
            answer: 2.83,
            tolerance: 0.01,
            explain: t`$S_1 = 25 + 9 - 10 - 12 - 4 = 8$, so the length is $\sqrt{8} = 2\sqrt{2} \approx 2.83$.`,
          },
          {
            kind: "mcq",
            q: "The tangents to x² + y² = 9 with slope 1 are",
            options: [t`$y = x \pm 3$`, t`$y = x \pm 3\sqrt{2}$`, t`$y = x \pm 9$`, t`$y = x \pm \sqrt{3}$`],
            answer: 1,
            explain: t`$y = mx \pm a\sqrt{1 + m^2} = x \pm 3\sqrt{2}$.`,
          },
          {
            kind: "numeric",
            q: "For c > 0, the line x + y = c touches x² + y² = 8. Find c.",
            answer: 4,
            explain: t`$\frac{|c|}{\sqrt{2}} = \sqrt{8} = 2\sqrt{2}$, so $c = 4$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The tangent at a point of a circle is perpendicular to the radius through that point.",
            answer: true,
            explain: "This is the basic property used to derive the tangent equation.",
          },
          {
            kind: "mcq",
            q: "The tangent to x² + y² = 13 at (2, −3) is",
            options: ["2x − 3y = 13", "3x + 2y = 0", "2x + 3y = 13", "2x − 3y = 0"],
            answer: 0,
            explain: t`$xx_1 + yy_1 = a^2$: $2x - 3y = 13$. ($3x + 2y = 0$ is the normal, through the centre.)`,
          },
          {
            kind: "multi",
            q: "For the line y = x + 2 and the circle x² + y² = 2, which are true?",
            options: ["The line touches the circle.", t`The distance of the centre from the line is $\sqrt{2}$.`, "The line meets the circle in two points.", "The point of contact is (−1, 1)."],
            answers: [0, 1, 3],
            explain: t`$d = \frac{|2|}{\sqrt{2}} = \sqrt{2} = r$, so it touches. The foot of the perpendicular from the origin to $x - y + 2 = 0$ is $(-1, 1)$, which is on both.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The line 4x − 3y + k = 0 does not meet x² + y² = 1 when",
            options: ["|k| < 5", "|k| = 5", "|k| > 5", "k = 0"],
            answer: 2,
            explain: t`It misses when $d > r$: $\frac{|k|}{5} > 1$, i.e. $|k| > 5$.`,
          },
        ],
      },
      {
        slug: "c11-mat-circle-exam",
        title: "Exam edge: Circles for JEE, KCET and COMEDK",
        summary: "Length of a chord, chord with a given midpoint, chord of contact, two circles and their common tangents, orthogonal circles and families of circles.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** JEE Main asks 1–2 questions on circles every year: chord lengths, tangents and normals, the position of two circles, common tangents, orthogonality and families of circles. KCET and COMEDK ask direct formula questions (centre, radius, tangent condition, chord length). JEE Advanced mixes circles with straight lines and loci.

Use the notation $S = x^2 + y^2 + 2gx + 2fy + c$, $S_1 = S(x_1, y_1)$ and $T = xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c$.`,
          },
          {
            type: "table",
            headers: ["Result", "Formula", "Notes"],
            rows: [
              ["Length of a chord", t`$2\sqrt{r^2 - d^2}$`, "d = distance of the centre from the chord"],
              ["Chord with midpoint (x₁, y₁)", t`$T = S_1$`, "the point must be inside the circle"],
              ["Chord of contact from (x₁, y₁)", t`$T = 0$`, "the point must be outside"],
              ["Common chord / radical axis", t`$S_1 - S_2 = 0$`, t`here $S_1, S_2$ name the two circles, each with $x^2, y^2$ coefficients 1`],
              ["Orthogonal circles", t`$2g_1g_2 + 2f_1f_2 = c_1 + c_2$`, t`equivalently $d^2 = r_1^2 + r_2^2$`],
              ["Family through S = 0 and L = 0", t`$S + \lambda L = 0$`, "circles through the two meeting points"],
            ],
          },
          {
            type: "table",
            headers: ["Distance between centres d", "Position", "Common tangents"],
            rows: [
              [t`$d > r_1 + r_2$`, "separate", "4"],
              [t`$d = r_1 + r_2$`, "touch externally", "3"],
              [t`$|r_1 - r_2| < d < r_1 + r_2$`, "intersect in two points", "2"],
              [t`$d = |r_1 - r_2|$`, "touch internally", "1"],
              [t`$d < |r_1 - r_2|$`, "one inside the other", "0"],
            ],
          },
          {
            type: "example",
            title: "KCET level: length of a chord",
            problem: t`Find the length of the chord cut from $x^2 + y^2 = 25$ by $3x + 4y = 15$.`,
            steps: [
              t`$d = \frac{|0 + 0 - 15|}{5} = 3$ and $r = 5$.`,
              t`Half-chord $= \sqrt{25 - 9} = 4$.`,
              t`Chord $= 2 \times 4 = 8$.`,
            ],
            answer: "8 units",
          },
          {
            type: "example",
            title: "JEE Main level: chord with a given midpoint",
            problem: t`Find the chord of $x^2 + y^2 - 4x + 6y - 3 = 0$ whose midpoint is $(1, -1)$.`,
            steps: [
              t`$S_1 = 1 + 1 - 4 - 6 - 3 = -11 < 0$, so $(1, -1)$ is inside. ✓`,
              t`$T = x(1) + y(-1) - 2(x + 1) + 3(y - 1) - 3 = -x + 2y - 8$.`,
              t`$T = S_1$: $-x + 2y - 8 = -11 \Rightarrow x - 2y - 3 = 0$.`,
              t`Check: centre $(2, -3)$ to $(1, -1)$ has direction $(-1, 2)$; the chord has direction $(2, 1)$; dot product $-2 + 2 = 0$, so the chord is perpendicular to that radius. ✓`,
            ],
            answer: t`$x - 2y - 3 = 0$`,
          },
          {
            type: "example",
            title: "JEE Main level: two circles",
            problem: t`How many common tangents do $x^2 + y^2 = 4$ and $x^2 + y^2 - 6x - 8y + 16 = 0$ have?`,
            steps: [
              t`First circle: centre $(0, 0)$, $r_1 = 2$. Second: centre $(3, 4)$, $r_2 = \sqrt{9 + 16 - 16} = 3$.`,
              t`$d = \sqrt{9 + 16} = 5 = r_1 + r_2$.`,
              "The circles touch externally: two direct common tangents and one transverse tangent at the point of contact.",
            ],
            answer: "3 common tangents",
          },
          {
            type: "example",
            title: "JEE Advanced level: family of circles",
            problem: t`Find the circle through the points where $x + y = 1$ meets $x^2 + y^2 = 9$ and which passes through the origin.`,
            steps: [
              t`Family: $x^2 + y^2 - 9 + \lambda(x + y - 1) = 0$. Every member passes through both meeting points.`,
              t`Through $(0, 0)$: $-9 - \lambda = 0$, so $\lambda = -9$.`,
              t`$x^2 + y^2 - 9 - 9x - 9y + 9 = 0$, i.e. $x^2 + y^2 - 9x - 9y = 0$.`,
              t`The line meets the circle because its distance from the centre is $\frac{1}{\sqrt{2}} < 3$, so the family is real.`,
            ],
            answer: t`$x^2 + y^2 - 9x - 9y = 0$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The chord of contact of tangents from (4, 2) to x² + y² = 10 is",
                options: ["2x + y = 5", "4x + 2y = 20", "x + 2y = 5", "2x − y = 5"],
                answer: 0,
                explain: t`$T = 0$: $4x + 2y = 10$, i.e. $2x + y = 5$. ($S_1 = 16 + 4 - 10 > 0$, so the point is outside.)`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "If d < r₁ + r₂, the two circles must cut each other.",
            right: "They intersect only if |r₁ − r₂| < d < r₁ + r₂. If d < |r₁ − r₂|, one circle lies inside the other and they do not meet.",
            why: "Picturing two circles side by side, a short distance between centres looks like overlap. A small circle sitting deep inside a big one also has a small d, yet no common point and no common tangent.",
          },
          {
            type: "mistake",
            wrong: "For the common chord, subtract 2x² + 2y² + … = 0 from x² + y² + … = 0 as given.",
            right: "Divide each equation so that the coefficients of x² and y² are 1, then subtract. Otherwise the squared terms do not cancel and the result is not a line.",
            why: "S₁ − S₂ = 0 is a line only because x² + y² cancels. With unequal leading coefficients, the subtraction leaves a circle, which cannot be the common chord.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the position of two circles to the common tangents.",
              pairs: [
                ["d > r₁ + r₂", "4 tangents"],
                ["d = r₁ + r₂", "3 tangents"],
                ["|r₁ − r₂| < d < r₁ + r₂", "2 tangents"],
                ["d = |r₁ − r₂|", "1 tangent"],
                ["d < |r₁ − r₂|", "No common tangent"],
              ],
              explain: "As the circles move closer, the transverse tangents disappear first (they merge at external touching and vanish once the circles cut), then the direct tangents merge at internal touching.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: "T = S₁ is safe only for an interior point; for an outside point there is no chord with that midpoint. For tangent length, √S₁ needs the coefficients of x² and y² to be 1. The orthogonality test 2g₁g₂ + 2f₁f₂ = c₁ + c₂ also needs both equations in that normalised form.",
          },
          {
            type: "keypoints",
            items: [
              t`Chord length $2\sqrt{r^2 - d^2}$; chord with midpoint $(x_1, y_1)$: $T = S_1$; chord of contact: $T = 0$.`,
              "Compare d with r₁ + r₂ and |r₁ − r₂| to place two circles and count common tangents (4, 3, 2, 1, 0).",
              t`Orthogonal: $2g_1g_2 + 2f_1f_2 = c_1 + c_2$. Common chord: $S_1 - S_2 = 0$.`,
              t`Circles through the meeting points of $S = 0$ and $L = 0$: $S + \lambda L = 0$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Length of a chord at distance d from the centre", back: t`$2\sqrt{r^2 - d^2}$` },
          { front: "Chord with given midpoint", back: t`$T = S_1$` },
          { front: "Chord of contact", back: t`$T = 0$` },
          { front: "Condition for orthogonal circles", back: t`$2g_1g_2 + 2f_1f_2 = c_1 + c_2$` },
          { front: "Circles touching externally", back: "d = r₁ + r₂; 3 common tangents." },
          { front: "Common chord of two intersecting circles", back: t`$S_1 - S_2 = 0$` },
          { front: "Family of circles through S = 0 and L = 0", back: t`$S + \lambda L = 0$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the length of the chord cut from x² + y² = 16 by the line y = 2, to two decimal places.",
            answer: 6.93,
            tolerance: 0.01,
            explain: t`$d = 2$, so the chord is $2\sqrt{16 - 4} = 2\sqrt{12} = 4\sqrt{3} \approx 6.93$.`,
          },
          {
            kind: "mcq",
            q: "The number of common tangents of x² + y² = 1 and x² + y² − 8x + 15 = 0 is",
            options: ["1", "2", "3", "4"],
            answer: 3,
            explain: t`Second circle: centre $(4, 0)$, $r = \sqrt{16 - 15} = 1$. $d = 4 > 1 + 1$, so the circles are separate: 4 tangents.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "Find k if x² + y² + 2kx + 4y + 1 = 0 cuts x² + y² − 4x + 2y − 3 = 0 orthogonally.",
            answer: 1.5,
            explain: t`$g_1 = k, f_1 = 2, c_1 = 1$; $g_2 = -2, f_2 = 1, c_2 = -3$. $2(k)(-2) + 2(2)(1) = 1 + (-3) \Rightarrow -4k + 4 = -2 \Rightarrow k = 1.5$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The common chord of x² + y² − 4x + 2y − 4 = 0 and x² + y² + 2x − 6y + 1 = 0 is",
            options: ["6x − 8y + 5 = 0", "6x + 8y − 5 = 0", "2x − 4y + 3 = 0", "x − y = 0"],
            answer: 0,
            explain: t`$S_1 - S_2 = -6x + 8y - 5 = 0$, i.e. $6x - 8y + 5 = 0$. The circles do meet: radii 3 and 3, $d = 5$, and $0 < 5 < 6$.`,
          },
          {
            kind: "numeric",
            q: "Find the length of the common chord of x² + y² = 25 and x² + y² − 12x + 11 = 0.",
            answer: 8,
            explain: t`Common chord: $S_1 - S_2 = 12x - 36 = 0$, i.e. $x = 3$. Its distance from the origin is 3, so the length is $2\sqrt{25 - 9} = 8$.`,
            difficulty: 3,
            hint: "Find the chord first, then use 2√(r² − d²) in either circle.",
          },
          {
            kind: "multi",
            q: "Which statements about x² + y² − 2x − 4y − 4 = 0 and the point (5, 3) are true?",
            options: ["The point is outside the circle.", "The length of the tangent from it is 2√2.", "The chord of contact is 4x + y − 17 = 0.", "The point is on the circle."],
            answers: [0, 1, 2],
            explain: t`$S_1 = 25 + 9 - 10 - 12 - 4 = 8 > 0$: outside, tangent length $\sqrt{8} = 2\sqrt{2}$. $T = 5x + 3y - (x + 5) - 2(y + 3) - 4 = 4x + y - 15$. So the chord of contact is $4x + y - 15 = 0$, not $4x + y - 17 = 0$.`,
            difficulty: 3,
            hint: "Build T carefully: g(x + x₁) with g = −1, f(y + y₁) with f = −2.",
          },
          {
            kind: "mcq",
            q: "A circle passes through the points where y = x meets x² + y² = 8 and also through (2, 0). Its equation is",
            options: ["x² + y² − 2x − 2y − 8 = 0", "x² + y² + 2x − 2y − 8 = 0", "x² + y² − 2x + 2y − 4 = 0", "x² + y² − 4 = 0"],
            answer: 1,
            explain: t`Family: $x^2 + y^2 - 8 + \lambda(x - y) = 0$. With $(2, 0)$: $4 - 8 + 2\lambda = 0$, so $\lambda = 2$: $x^2 + y^2 + 2x - 2y - 8 = 0$. Check $(2, 2)$: $4 + 4 + 4 - 4 - 8 = 0$ ✓; $(-2, -2)$: $8 - 4 + 4 - 8 = 0$ ✓.`,
            difficulty: 3,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 11: Conic Sections (NCERT, Karnataka I PUC, ISC)              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-mat-conic-sections",
    title: "Conic Sections (Class 11)",
    icon: "🔦",
    description: "Sections of a double cone, the circle, and the parabola, ellipse and hyperbola in standard form: focus, directrix, vertices, axes, eccentricity and latus rectum, with tangents, normals and focal chords for JEE.",
    lessons: [
      {
        slug: "c11-mat-conics-cone-circle",
        title: "Sections of a Cone and the Circle",
        summary: "How a plane cuts a double-napped cone to give a circle, ellipse, parabola, hyperbola or a degenerate conic, and the circle in standard and general form.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🔦",
            caption: "Shine a torch straight at a wall and the patch of light is a circle. Tilt the torch and it stretches into an ellipse, then a parabola, then one branch of a hyperbola.",
          },
          {
            type: "text",
            md: t`Take a fixed vertical line $l$ (the **axis**) and another line $m$ meeting it at a fixed point $V$ (the **vertex**) at an angle $\alpha$. Rotate $m$ about $l$, keeping the angle fixed. The surface traced is a **double-napped right circular cone**: two cones joined at the vertex, extending without end. Each position of $m$ is a **generator**, and $\alpha$ is the **semi-vertical angle**.

The curves obtained by cutting this cone with a plane are called **conic sections** (or conics). Let the cutting plane make an angle $\beta$ with the axis.`,
          },
          {
            type: "table",
            headers: ["Plane (not through the vertex)", "Section"],
            rows: [
              [t`$\beta = 90^\circ$ (plane perpendicular to the axis)`, "circle"],
              [t`$\alpha < \beta < 90^\circ$`, "ellipse"],
              [t`$\beta = \alpha$ (plane parallel to a generator)`, "parabola"],
              [t`$0^\circ \le \beta < \alpha$ (plane cuts both nappes)`, "hyperbola (two branches)"],
            ],
          },
          {
            type: "text",
            md: t`**Degenerate conics.** If the plane passes through the vertex $V$:

- $\alpha < \beta \le 90^\circ$: the section is just the **point** $V$;
- $\beta = \alpha$: the plane touches the cone along a generator, giving a **straight line** (a degenerate parabola);
- $0^\circ \le \beta < \alpha$: a **pair of intersecting straight lines** (a degenerate hyperbola).`,
          },
          {
            type: "text",
            md: t`**The circle** is the set of points in a plane at a fixed distance $r$ (radius) from a fixed point $(h, k)$ (centre). By the distance formula its equation is $(x - h)^2 + (y - k)^2 = r^2$. Expanding gives the general form $x^2 + y^2 + 2gx + 2fy + c = 0$ with centre $(-g, -f)$ and radius $\sqrt{g^2 + f^2 - c}$.`,
          },
          {
            type: "formula",
            tex: t`(x - h)^2 + (y - k)^2 = r^2 \qquad\qquad x^2 + y^2 = r^2 \ \text{(centre at the origin)}`,
            caption: "Standard equation of a circle",
          },
          {
            type: "example",
            title: "Writing the equation of a circle",
            problem: t`Find the equation of the circle with centre $(-3, 2)$ and radius 4.`,
            steps: [
              t`$(x + 3)^2 + (y - 2)^2 = 16$.`,
              t`Expand: $x^2 + 6x + 9 + y^2 - 4y + 4 = 16$.`,
              t`$x^2 + y^2 + 6x - 4y - 3 = 0$.`,
            ],
            answer: t`$x^2 + y^2 + 6x - 4y - 3 = 0$`,
          },
          {
            type: "example",
            title: "Centre and radius by completing squares",
            problem: t`Find the centre and radius of $x^2 + y^2 - 8x + 10y - 12 = 0$.`,
            steps: [
              t`Group: $(x^2 - 8x) + (y^2 + 10y) = 12$.`,
              t`Complete squares: $(x - 4)^2 - 16 + (y + 5)^2 - 25 = 12$.`,
              t`$(x - 4)^2 + (y + 5)^2 = 53$.`,
            ],
            answer: t`Centre $(4, -5)$, radius $\sqrt{53}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A plane, not through the vertex, is parallel to one generator of the cone. The section is",
                options: ["a circle", "an ellipse", "a parabola", "a hyperbola"],
                answer: 2,
                explain: t`Parallel to a generator means $\beta = \alpha$, which gives a parabola.`,
              },
              {
                kind: "numeric",
                q: "Find the radius of x² + y² − 2x + 4y − 20 = 0.",
                answer: 5,
                explain: t`$(x - 1)^2 + (y + 2)^2 = 20 + 1 + 4 = 25$, so $r = 5$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Circle through two points with centre on a line",
            problem: t`Find the circle through $(0, 2)$ and $(4, 0)$ whose centre lies on the line $y = x$.`,
            steps: [
              t`Let the centre be $(h, h)$. It is equidistant from both points: $h^2 + (h - 2)^2 = (h - 4)^2 + h^2$.`,
              t`$h^2 - 4h + 4 = h^2 - 8h + 16 \Rightarrow 4h = 12 \Rightarrow h = 3$.`,
              t`Centre $(3, 3)$; $r^2 = 3^2 + (3 - 2)^2 = 10$.`,
              t`$(x - 3)^2 + (y - 3)^2 = 10$, i.e. $x^2 + y^2 - 6x - 6y + 8 = 0$. Check $(4, 0)$: $16 - 24 + 8 = 0$. ✓`,
            ],
            answer: t`$x^2 + y^2 - 6x - 6y + 8 = 0$`,
          },
          {
            type: "mistake",
            wrong: "Any equation with both x² and y² in it is a circle.",
            right: "It is a circle only when x² and y² have equal coefficients and there is no xy term. x² + 4y² = 4 is an ellipse and x² − y² = 1 is a hyperbola.",
            why: "The circle is the most familiar curve with x² and y², so learners assume it. The ratio and signs of the coefficients decide which conic it is.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match the cutting plane to the conic section.",
              pairs: [
                ["β = 90°, not through the vertex", "Circle"],
                ["α < β < 90°, not through the vertex", "Ellipse"],
                ["β = α, not through the vertex", "Parabola"],
                ["β < α, not through the vertex", "Hyperbola"],
                ["α < β ≤ 90°, through the vertex", "A single point"],
              ],
              explain: "The section depends on how the angle β of the plane compares with the semi-vertical angle α, and on whether the plane passes through the vertex.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "A 1-mark question often asks which conic arises for a given β; learn the table with the words \"not through the vertex\". In circle questions, write the standard form first, then expand. If a circle touches an axis, its radius equals the distance of the centre from that axis (for example, touching the x-axis means r = |k|).",
          },
          {
            type: "keypoints",
            items: [
              "Conics are sections of a double-napped cone by a plane; the angle β between the plane and the axis decides the curve.",
              "β = 90°: circle; α < β < 90°: ellipse; β = α: parabola; β < α: hyperbola.",
              "Planes through the vertex give degenerate conics: a point, a line, or a pair of lines.",
              t`Circle: $(x - h)^2 + (y - k)^2 = r^2$; from $x^2 + y^2 + 2gx + 2fy + c = 0$, centre $(-g, -f)$, radius $\sqrt{g^2 + f^2 - c}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Double-napped cone: semi-vertical angle", back: "The fixed angle α between the generator and the axis." },
          { front: "Plane at β = α to the axis (not through vertex)", back: "Parabola" },
          { front: "Plane at β < α to the axis (not through vertex)", back: "Hyperbola (the plane cuts both nappes)." },
          { front: "Plane at α < β < 90°", back: "Ellipse" },
          { front: "Degenerate conics", back: "A point, a straight line, or a pair of intersecting lines (plane through the vertex)." },
          { front: "Circle with centre (h, k) and radius r", back: t`$(x - h)^2 + (y - k)^2 = r^2$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The circle with centre at the origin passing through (3, 4) is",
            options: ["x² + y² = 7", "x² + y² = 5", "x² + y² = 25", "x² + y² = 49"],
            answer: 2,
            explain: t`$r^2 = 9 + 16 = 25$.`,
          },
          {
            kind: "truefalse",
            q: "If the plane passes through the vertex and β = α, the section is a straight line.",
            answer: true,
            explain: "The plane then touches the cone along one generator. This is the degenerate case of the parabola.",
          },
          {
            kind: "fill",
            q: "The centre of (x − 1)² + (y + 2)² = 9 is (1, ___).",
            answer: ["-2", "−2"],
            explain: t`$(y + 2)^2 = (y - (-2))^2$, so $k = -2$.`,
          },
          {
            kind: "mcq",
            q: "The circle with centre (2, 3) that touches the x-axis is",
            options: ["(x − 2)² + (y − 3)² = 4", "(x − 2)² + (y − 3)² = 9", "(x + 2)² + (y + 3)² = 9", "(x − 2)² + (y − 3)² = 13"],
            answer: 1,
            explain: "Touching the x-axis means the radius equals the distance of the centre from it, which is 3.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which equations are circles?",
            options: ["x² + y² = 7", "2x² + 2y² − 3x = 0", "x² − y² = 4", "x² + y² + xy = 1"],
            answers: [0, 1],
            explain: t`$2x^2 + 2y^2 - 3x = 0$ becomes $x^2 + y^2 - \frac{3}{2}x = 0$: centre $(\frac{3}{4}, 0)$. $x^2 - y^2 = 4$ is a hyperbola; an $xy$ term rules out a circle.`,
          },
          {
            kind: "mcq",
            q: "When the plane cuts both nappes of the cone (and does not pass through the vertex), the section is",
            options: ["an ellipse", "a parabola", "a hyperbola", "a pair of lines"],
            answer: 2,
            explain: t`Cutting both nappes happens when $\beta < \alpha$, giving the two branches of a hyperbola.`,
          },
        ],
      },
      {
        slug: "c11-mat-conics-parabola",
        title: "The Parabola",
        summary: "Focus-directrix definition, derivation of y² = 4ax, the four standard parabolas, latus rectum and finding a parabola from given data.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "📡",
            caption: "A dish antenna and a car headlight reflector are parabolic: rays parallel to the axis bounce off the surface and all pass through one point, the focus.",
          },
          {
            type: "text",
            md: t`A **parabola** is the set of all points in a plane that are **equidistant** from a fixed line (the **directrix**) and a fixed point (the **focus**) not on that line.

- The line through the focus perpendicular to the directrix is the **axis** of the parabola.
- The point where the parabola meets its axis is the **vertex** (midway between focus and directrix).
- The chord through the focus perpendicular to the axis is the **latus rectum**.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Put the focus at $S(a, 0)$, $a > 0$, and the directrix $x = -a$, so the vertex is the origin.`,
              t`For $P(x, y)$ on the parabola, $PS = PM$, where $PM$ is the perpendicular distance to the directrix: $\sqrt{(x - a)^2 + y^2} = |x + a|$.`,
              t`Square: $x^2 - 2ax + a^2 + y^2 = x^2 + 2ax + a^2$.`,
              t`Simplify: $y^2 = 4ax$. Conversely, every point satisfying $y^2 = 4ax$ satisfies $PS = PM$, so this is exactly the parabola.`,
            ],
          },
          {
            type: "formula",
            tex: t`y^2 = 4ax, \quad a > 0: \quad \text{focus } (a, 0), \ \text{directrix } x = -a, \ \text{latus rectum } 4a`,
            caption: "Standard parabola opening to the right",
          },
          {
            type: "table",
            headers: ["Equation", "Focus", "Directrix", "Axis", "Opens"],
            rows: [
              [t`$y^2 = 4ax$`, t`$(a, 0)$`, t`$x = -a$`, t`$y = 0$`, "right"],
              [t`$y^2 = -4ax$`, t`$(-a, 0)$`, t`$x = a$`, t`$y = 0$`, "left"],
              [t`$x^2 = 4ay$`, t`$(0, a)$`, t`$y = -a$`, t`$x = 0$`, "upward"],
              [t`$x^2 = -4ay$`, t`$(0, -a)$`, t`$y = a$`, t`$x = 0$`, "downward"],
            ],
          },
          {
            type: "text",
            md: t`**Latus rectum.** For $y^2 = 4ax$, put $x = a$: $y^2 = 4a^2$, so $y = \pm 2a$. The ends are $(a, 2a)$ and $(a, -2a)$ and the length is $4a$. In every standard parabola the latus rectum is 4 times the distance from the vertex to the focus.

**Reading a parabola.** The parabola is symmetric about the axis of the variable that is **not** squared. The sign of the non-squared side tells the direction it opens.`,
          },
          {
            type: "example",
            title: "Reading y² = 12x",
            problem: t`Find the focus, axis, directrix and length of the latus rectum of $y^2 = 12x$.`,
            steps: [
              t`Compare with $y^2 = 4ax$: $4a = 12$, so $a = 3$.`,
              t`Focus $(3, 0)$; axis is the x-axis; directrix $x = -3$.`,
              t`Latus rectum $= 4a = 12$; its ends are $(3, \pm 6)$.`,
            ],
            answer: t`Focus $(3, 0)$, axis $y = 0$, directrix $x = -3$, latus rectum 12`,
          },
          {
            type: "example",
            title: "Reading x² = −16y",
            problem: t`Find the focus, directrix and latus rectum of $x^2 = -16y$.`,
            steps: [
              t`Compare with $x^2 = -4ay$: $4a = 16$, $a = 4$.`,
              t`The parabola is symmetric about the y-axis and opens downward.`,
              t`Focus $(0, -4)$; directrix $y = 4$; latus rectum 16.`,
            ],
            answer: t`Focus $(0, -4)$, directrix $y = 4$, latus rectum 16`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The focus of y² = −20x is",
                options: ["(5, 0)", "(−5, 0)", "(0, −5)", "(−20, 0)"],
                answer: 1,
                explain: t`$4a = 20$, $a = 5$; it opens left, so the focus is $(-5, 0)$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Parabola from given data",
            problem: t`Find the parabola with vertex at the origin, axis along the y-axis, passing through $(2, -3)$.`,
            steps: [
              t`Axis along the y-axis: the equation is $x^2 = ky$ for some $k$.`,
              t`Substitute $(2, -3)$: $4 = -3k$, so $k = -\frac{4}{3}$.`,
              t`$x^2 = -\frac{4}{3}y$, i.e. $3x^2 = -4y$. It opens downward, as it must to pass through a point below the x-axis.`,
            ],
            answer: t`$3x^2 + 4y = 0$`,
          },
          {
            type: "mistake",
            wrong: "In y² = 8x, a = 8, so the focus is (8, 0).",
            right: "Compare with y² = 4ax: 4a = 8, so a = 2 and the focus is (2, 0). The 8 is the length of the latus rectum, 4a.",
            why: "The coefficient on the right is 4a, not a. Skipping the comparison step is the most common slip in parabola questions.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each parabola to its focus.",
              pairs: [
                ["y² = 8x", "(2, 0)"],
                ["y² = −8x", "(−2, 0)"],
                ["x² = 8y", "(0, 2)"],
                ["x² = −8y", "(0, −2)"],
                ["y² = 2x", "(1/2, 0)"],
              ],
              explain: "Find a from 4a = coefficient. The focus lies on the axis of the non-squared variable, on the side given by the sign.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "The derivation of y² = 4ax is a standard 4-mark question: state the definition, place focus and directrix, equate PS and PM, square and simplify. When finding a parabola from data, first decide the form from the axis and the side the curve lies on, and draw a quick sketch.",
          },
          {
            type: "keypoints",
            items: [
              "A parabola is the locus of points equidistant from a focus and a directrix.",
              t`$y^2 = 4ax$: focus $(a, 0)$, directrix $x = -a$, axis the x-axis, vertex the origin.`,
              "Latus rectum = 4a; the vertex is midway between focus and directrix.",
              "The squared variable tells the axis of symmetry is the other axis; the sign tells the direction of opening.",
            ],
          },
        ],
        flashcards: [
          { front: "Definition of a parabola", back: "Set of points equidistant from a fixed point (focus) and a fixed line (directrix)." },
          { front: t`Focus and directrix of $y^2 = 4ax$`, back: t`Focus $(a, 0)$, directrix $x = -a$` },
          { front: t`Focus and directrix of $x^2 = -4ay$`, back: t`Focus $(0, -a)$, directrix $y = a$` },
          { front: "Length of latus rectum of a parabola", back: "4a" },
          { front: t`Ends of the latus rectum of $y^2 = 4ax$`, back: t`$(a, 2a)$ and $(a, -2a)$` },
          { front: "Vertex of a parabola", back: "The point where it meets its axis, midway between focus and directrix." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the length of the latus rectum of x² = 6y.",
            answer: 6,
            explain: t`$4a = 6$, and the latus rectum is $4a = 6$.`,
          },
          {
            kind: "mcq",
            q: "The directrix of x² = 10y is",
            options: ["y = 5/2", "y = −5/2", "x = −5/2", "y = −10"],
            answer: 1,
            explain: t`$4a = 10$, $a = \frac{5}{2}$. It opens upward, so the directrix is $y = -\frac{5}{2}$.`,
          },
          {
            kind: "mcq",
            q: "The parabola with focus (2, 0) and directrix x = −2 is",
            options: ["y² = 2x", "y² = 4x", "y² = 8x", "x² = 8y"],
            answer: 2,
            explain: t`$a = 2$, so $y^2 = 4ax = 8x$.`,
          },
          {
            kind: "truefalse",
            q: "Every point of a parabola is at the same distance from the focus as from the directrix.",
            answer: true,
            explain: "That is the definition of a parabola.",
          },
          {
            kind: "numeric",
            q: "A point on y² = 12x has x-coordinate 3. Find its distance from the focus.",
            answer: 6,
            explain: t`Distance from focus = distance from directrix $x = -3$, which is $3 + 3 = 6$. (Directly: the point is $(3, \pm 6)$ and the focus $(3, 0)$.)`,
            difficulty: 2,
            hint: "Use the definition: distance to the directrix.",
          },
          {
            kind: "multi",
            q: "Which are true for x² = −12y?",
            options: ["Focus is (0, −3).", "Directrix is y = 3.", "Latus rectum is 12.", "It opens upward."],
            answers: [0, 1, 2],
            explain: t`$4a = 12$, $a = 3$. The minus sign on $y$ makes it open downward.`,
          },
          {
            kind: "mcq",
            q: "The parabola with vertex (0, 0), axis along the x-axis, passing through (3, −6) is",
            options: ["y² = 12x", "y² = −12x", "x² = 12y", "y² = 6x"],
            answer: 0,
            explain: t`$y^2 = kx$: $36 = 3k$, so $k = 12$. The point has $x > 0$, so the parabola opens right.`,
          },
        ],
      },
      {
        slug: "c11-mat-conics-ellipse",
        title: "The Ellipse",
        summary: "Sum-of-distances definition, centre, axes and vertices, the relation a² = b² + c², derivation of x²/a² + y²/b² = 1, eccentricity and latus rectum.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪐",
            caption: "Fix two pins on a board, loop a thread around them and pull it tight with a pencil. As you move the pencil, the thread length stays fixed and the curve is an ellipse. Planets move on ellipses with the Sun at one focus.",
          },
          {
            type: "text",
            md: t`An **ellipse** is the set of all points in a plane the **sum** of whose distances from two fixed points (the **foci**) is a constant, greater than the distance between the foci.

- The midpoint of the segment joining the foci is the **centre**.
- The line through the foci meets the ellipse at the **vertices**; the segment between them is the **major axis**, length $2a$.
- The segment through the centre perpendicular to it is the **minor axis**, length $2b$.
- The distance between the foci is $2c$.

The constant sum equals $2a$: at a vertex, the two distances are $a - c$ and $a + c$.`,
          },
          {
            type: "text",
            md: t`**Relation between $a$, $b$, $c$.** Take $P$ at an end of the minor axis. It is equidistant from both foci, and the two distances add to $2a$, so each is $a$. The right triangle with legs $b$ and $c$ then gives $a^2 = b^2 + c^2$, i.e. $c = \sqrt{a^2 - b^2}$.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Foci $F_1(-c, 0)$ and $F_2(c, 0)$; for $P(x, y)$: $PF_1 + PF_2 = 2a$.`,
              t`$\sqrt{(x + c)^2 + y^2} = 2a - \sqrt{(x - c)^2 + y^2}$; square both sides and simplify to $\sqrt{(x - c)^2 + y^2} = a - \frac{c}{a}x$.`,
              t`Square again: $x^2 - 2cx + c^2 + y^2 = a^2 - 2cx + \frac{c^2}{a^2}x^2$.`,
              t`Rearrange: $x^2\left(1 - \frac{c^2}{a^2}\right) + y^2 = a^2 - c^2$, so $\frac{x^2}{a^2} + \frac{y^2}{a^2 - c^2} = 1$.`,
              t`With $b^2 = a^2 - c^2$: $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \quad a > b, \qquad c^2 = a^2 - b^2, \qquad e = \frac{c}{a} < 1`,
            caption: "Standard ellipse with major axis along the x-axis",
          },
          {
            type: "table",
            headers: ["Feature", t`$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($a > b$)`, t`$\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$ ($a > b$)`],
            rows: [
              ["Major axis", "along x-axis, length 2a", "along y-axis, length 2a"],
              ["Vertices", t`$(\pm a, 0)$`, t`$(0, \pm a)$`],
              ["Foci", t`$(\pm c, 0)$`, t`$(0, \pm c)$`],
              ["Minor axis ends", t`$(0, \pm b)$`, t`$(\pm b, 0)$`],
              ["Latus rectum", t`$\frac{2b^2}{a}$`, t`$\frac{2b^2}{a}$`],
            ],
          },
          {
            type: "text",
            md: t`**Eccentricity** $e = \frac{c}{a}$ measures how flat the ellipse is; $0 < e < 1$. As $c \to 0$ the foci merge, $b \to a$ and the ellipse becomes a circle ($e = 0$). As $e \to 1$ it flattens towards a segment.

**Latus rectum.** Putting $x = c$ in the equation gives $y^2 = b^2\left(1 - \frac{c^2}{a^2}\right) = \frac{b^4}{a^2}$, so $y = \pm\frac{b^2}{a}$ and the length is $\frac{2b^2}{a}$.

**Board note:** ISC (and JEE) also use the **directrices** $x = \pm\frac{a}{e}$ and the focus-directrix property $PS = e \cdot PM$. These are not in the rationalised NCERT text.`,
          },
          {
            type: "example",
            title: "Reading x²/25 + y²/9 = 1",
            problem: t`Find the foci, vertices, lengths of the axes, eccentricity and latus rectum of $\frac{x^2}{25} + \frac{y^2}{9} = 1$.`,
            steps: [
              t`The larger denominator is under $x^2$: major axis along the x-axis, $a = 5$, $b = 3$.`,
              t`$c = \sqrt{25 - 9} = 4$. Foci $(\pm 4, 0)$; vertices $(\pm 5, 0)$.`,
              t`Major axis 10, minor axis 6, $e = \frac{4}{5}$.`,
              t`Latus rectum $\frac{2b^2}{a} = \frac{18}{5}$.`,
            ],
            answer: t`Foci $(\pm 4, 0)$, vertices $(\pm 5, 0)$, axes 10 and 6, $e = \frac{4}{5}$, latus rectum $\frac{18}{5}$`,
          },
          {
            type: "example",
            title: "Major axis along the y-axis",
            problem: t`Find the foci, vertices, eccentricity and latus rectum of $16x^2 + 9y^2 = 144$.`,
            steps: [
              t`Divide by 144: $\frac{x^2}{9} + \frac{y^2}{16} = 1$. The larger denominator is under $y^2$, so $a = 4$, $b = 3$ and the major axis is vertical.`,
              t`$c = \sqrt{16 - 9} = \sqrt{7}$. Foci $(0, \pm\sqrt{7})$; vertices $(0, \pm 4)$.`,
              t`$e = \frac{\sqrt{7}}{4}$; latus rectum $\frac{2 \times 9}{4} = \frac{9}{2}$.`,
            ],
            answer: t`Foci $(0, \pm\sqrt{7})$, vertices $(0, \pm 4)$, $e = \frac{\sqrt{7}}{4}$, latus rectum $\frac{9}{2}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The eccentricity of x²/16 + y²/7 = 1 is",
                options: ["3/4", "7/16", "4/3", t`$\frac{\sqrt{7}}{4}$`],
                answer: 0,
                explain: t`$c^2 = 16 - 7 = 9$, $c = 3$, $e = \frac{c}{a} = \frac{3}{4}$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Ellipse from given data",
            problem: t`Find the ellipse with centre at the origin, foci $(0, \pm 2)$ and major axis of length 8.`,
            steps: [
              t`Foci on the y-axis, so the form is $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$.`,
              t`$2a = 8 \Rightarrow a = 4$; $c = 2$.`,
              t`$b^2 = a^2 - c^2 = 16 - 4 = 12$.`,
            ],
            answer: t`$\frac{x^2}{12} + \frac{y^2}{16} = 1$`,
          },
          {
            type: "mistake",
            wrong: "For an ellipse, c² = a² + b².",
            right: "For an ellipse c² = a² − b² (the foci are inside, so c < a). The relation c² = a² + b² belongs to the hyperbola.",
            why: "The two formulas look alike and are learnt together. Remember the minor-axis triangle: its hypotenuse is a, so a is the biggest of a, b, c in an ellipse.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "What happens to an ellipse as e approaches 0?",
              emoji: "🥚",
              options: ["It becomes a circle", "It becomes a straight segment", "It becomes a parabola"],
              answer: 0,
              trap: 2,
              explain: t`$e = \frac{c}{a} \to 0$ means the foci move together to the centre and $b \to a$, which is a circle. A parabola has $e = 1$, the opposite end; a nearly flat ellipse has $e$ close to 1.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Before reading a and b, put the equation in the form x²/□ + y²/□ = 1. The larger denominator is always a², and it tells you which axis is the major axis. List all six answers (foci, vertices, major axis, minor axis, e, latus rectum) in a neat table; each is usually worth a mark.",
          },
          {
            type: "keypoints",
            items: [
              "Ellipse: PF₁ + PF₂ = 2a (the length of the major axis).",
              t`$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ with $a > b$, $c^2 = a^2 - b^2$, foci $(\pm c, 0)$.`,
              t`Eccentricity $e = \frac{c}{a}$, $0 < e < 1$; latus rectum $\frac{2b^2}{a}$.`,
              t`The larger denominator is $a^2$ and decides the direction of the major axis.`,
            ],
          },
        ],
        flashcards: [
          { front: "Definition of an ellipse", back: "Set of points whose distances from two fixed points (foci) have a constant sum, greater than the distance between the foci." },
          { front: "Relation between a, b, c for an ellipse", back: t`$c^2 = a^2 - b^2$` },
          { front: "Eccentricity of an ellipse", back: t`$e = \frac{c}{a}$, with $0 < e < 1$` },
          { front: "Latus rectum of an ellipse", back: t`$\frac{2b^2}{a}$` },
          { front: t`Foci of $\frac{x^2}{b^2} + \frac{y^2}{a^2} = 1$ ($a > b$)`, back: t`$(0, \pm c)$, $c = \sqrt{a^2 - b^2}$` },
          { front: "Sum of focal distances of a point on an ellipse", back: "2a, the length of the major axis." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the length of the latus rectum of x²/16 + y²/7 = 1.",
            answer: 3.5,
            explain: t`$\frac{2b^2}{a} = \frac{2 \times 7}{4} = 3.5$.`,
          },
          {
            kind: "mcq",
            q: "The foci of x²/9 + y²/25 = 1 are",
            options: ["(±4, 0)", "(0, ±4)", "(0, ±5)", t`$(0, \pm\sqrt{34})$`],
            answer: 1,
            explain: t`The larger denominator 25 is under $y^2$: $a = 5$, $b = 3$, $c = 4$, foci on the y-axis.`,
          },
          {
            kind: "mcq",
            q: "The ellipse with vertices (±6, 0) and foci (±4, 0) is",
            options: ["x²/36 + y²/16 = 1", "x²/36 + y²/20 = 1", "x²/20 + y²/36 = 1", "x²/36 + y²/52 = 1"],
            answer: 1,
            explain: t`$a = 6$, $c = 4$, $b^2 = 36 - 16 = 20$.`,
          },
          {
            kind: "truefalse",
            q: "For any point on an ellipse, the sum of its distances from the foci equals the length of the major axis.",
            answer: true,
            explain: t`This is the definition, with the constant equal to $2a$.`,
          },
          {
            kind: "numeric",
            q: "Find the length of the minor axis of 4x² + y² = 100.",
            answer: 10,
            explain: t`$\frac{x^2}{25} + \frac{y^2}{100} = 1$: $a^2 = 100$ (y-direction), $b^2 = 25$, so the minor axis is $2b = 10$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are true for x²/49 + y²/24 = 1?",
            options: ["Foci are (±5, 0).", "e = 5/7", "Latus rectum = 48/7", "Major axis is along the y-axis."],
            answers: [0, 1, 2],
            explain: t`$a = 7$, $b^2 = 24$, $c = \sqrt{25} = 5$; $e = \frac{5}{7}$; latus rectum $\frac{48}{7}$. The larger denominator is under $x^2$, so the major axis is horizontal.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "An ellipse has major axis 10 and minor axis 8. Its eccentricity is",
            options: ["4/5", "3/5", "3/4", "5/4"],
            answer: 1,
            explain: t`$a = 5$, $b = 4$, $c = 3$, so $e = \frac{3}{5}$.`,
          },
        ],
      },
      {
        slug: "c11-mat-conics-hyperbola",
        title: "The Hyperbola",
        summary: "Difference-of-distances definition, transverse and conjugate axes, b² = c² − a², the standard equations, eccentricity, latus rectum and a comparison of all three conics.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏭",
            caption: "The waist of a cooling tower at a power station is curved like a hyperbola. Ships once found their position using the difference in arrival times of radio signals from two stations, which places them on a hyperbola.",
          },
          {
            type: "text",
            md: t`A **hyperbola** is the set of all points in a plane the **difference** of whose distances from two fixed points (the **foci**) is a constant, less than the distance between the foci.

- The midpoint of the foci is the **centre**; the line through the foci is the **transverse axis**, the perpendicular line through the centre is the **conjugate axis**.
- The hyperbola meets the transverse axis at the **vertices** $(\pm a, 0)$; the constant difference is $2a$.
- The distance between the foci is $2c$, and we define $b$ by $b^2 = c^2 - a^2$. Here $c > a$.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Foci $F_1(-c, 0)$, $F_2(c, 0)$; for $P(x, y)$ on the right branch, $PF_1 - PF_2 = 2a$.`,
              t`$\sqrt{(x + c)^2 + y^2} = 2a + \sqrt{(x - c)^2 + y^2}$; squaring and simplifying gives $\sqrt{(x - c)^2 + y^2} = \frac{c}{a}x - a$.`,
              t`Squaring again: $x^2\left(\frac{c^2}{a^2} - 1\right) - y^2 = c^2 - a^2$.`,
              t`So $\frac{x^2}{a^2} - \frac{y^2}{c^2 - a^2} = 1$, and with $b^2 = c^2 - a^2$: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. The left branch gives the same equation.`,
            ],
          },
          {
            type: "formula",
            tex: t`\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 + b^2, \qquad e = \frac{c}{a} > 1`,
            caption: "Standard hyperbola with transverse axis along the x-axis",
          },
          {
            type: "table",
            headers: ["Feature", t`$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$`, t`$\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$`],
            rows: [
              ["Transverse axis", "x-axis, length 2a", "y-axis, length 2a"],
              ["Vertices", t`$(\pm a, 0)$`, t`$(0, \pm a)$`],
              ["Foci", t`$(\pm c, 0)$`, t`$(0, \pm c)$`],
              ["Conjugate axis length", "2b", "2b"],
              ["Latus rectum", t`$\frac{2b^2}{a}$`, t`$\frac{2b^2}{a}$`],
            ],
          },
          {
            type: "text",
            md: t`**Eccentricity** $e = \frac{c}{a} = \sqrt{1 + \frac{b^2}{a^2}} > 1$. A larger $e$ means wider-open branches.

When $a = b$ the hyperbola $x^2 - y^2 = a^2$ is called **rectangular** (or equilateral); its eccentricity is $\sqrt{2}$.

**Board note:** ISC and JEE also use the **asymptotes** $y = \pm\frac{b}{a}x$ (lines the branches approach but never meet), the directrices $x = \pm\frac{a}{e}$ and the **conjugate hyperbola** $\frac{y^2}{b^2} - \frac{x^2}{a^2} = 1$. The NCERT text does not include these.`,
          },
          {
            type: "example",
            title: "Reading x²/16 − y²/9 = 1",
            problem: t`Find the foci, vertices, eccentricity and latus rectum of $\frac{x^2}{16} - \frac{y^2}{9} = 1$.`,
            steps: [
              t`The positive term has $x^2$: transverse axis along the x-axis, $a = 4$, $b = 3$.`,
              t`$c = \sqrt{16 + 9} = 5$. Foci $(\pm 5, 0)$; vertices $(\pm 4, 0)$.`,
              t`$e = \frac{5}{4}$; latus rectum $\frac{2 \times 9}{4} = \frac{9}{2}$.`,
            ],
            answer: t`Foci $(\pm 5, 0)$, vertices $(\pm 4, 0)$, $e = \frac{5}{4}$, latus rectum $\frac{9}{2}$`,
          },
          {
            type: "example",
            title: "Transverse axis along the y-axis",
            problem: t`Find the foci, vertices, eccentricity and latus rectum of $16y^2 - 9x^2 = 144$.`,
            steps: [
              t`Divide by 144: $\frac{y^2}{9} - \frac{x^2}{16} = 1$. The positive term has $y^2$: $a = 3$, $b = 4$.`,
              t`$c = \sqrt{9 + 16} = 5$. Foci $(0, \pm 5)$; vertices $(0, \pm 3)$.`,
              t`$e = \frac{5}{3}$; latus rectum $\frac{2 \times 16}{3} = \frac{32}{3}$.`,
            ],
            answer: t`Foci $(0, \pm 5)$, vertices $(0, \pm 3)$, $e = \frac{5}{3}$, latus rectum $\frac{32}{3}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The foci of y²/25 − x²/39 = 1 are",
                options: ["(±8, 0)", "(0, ±8)", t`$(0, \pm\sqrt{14})$`, "(0, ±5)"],
                answer: 1,
                explain: t`Positive $y^2$ term: foci on the y-axis. $c^2 = 25 + 39 = 64$, $c = 8$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Hyperbola from given data",
            problem: t`Find the hyperbola with foci $(0, \pm 6)$ and eccentricity $\frac{3}{2}$.`,
            steps: [
              t`Foci on the y-axis: $\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1$, with $c = 6$.`,
              t`$e = \frac{c}{a} = \frac{3}{2} \Rightarrow a = 4$.`,
              t`$b^2 = c^2 - a^2 = 36 - 16 = 20$.`,
            ],
            answer: t`$\frac{y^2}{16} - \frac{x^2}{20} = 1$`,
          },
          {
            type: "mistake",
            wrong: "In a hyperbola, a is always bigger than b, just like in an ellipse.",
            right: "In a hyperbola, a goes with the positive term, whatever its size. In x²/9 − y²/16 = 1, a = 3 and b = 4. The direction of the transverse axis comes from the sign, not from the bigger denominator.",
            why: "In an ellipse the larger denominator is a², so learners carry that rule over. For a hyperbola, c² = a² + b² makes c the largest, and a and b can be in either order.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each equation by the conic it represents.",
              groups: ["Parabola", "Ellipse", "Hyperbola"],
              items: [
                { text: "y² = 9x", group: 0, hint: "Only one variable is squared." },
                { text: "x² = −5y", group: 0, hint: "Only x is squared." },
                { text: "x²/9 + y²/4 = 1", group: 1, hint: "Both squares, both positive, unequal denominators." },
                { text: "4x² + 9y² = 36", group: 1, hint: "Divide by 36: x²/9 + y²/4 = 1." },
                { text: "x² + 4y² = 4", group: 1, hint: "x²/4 + y²/1 = 1." },
                { text: "x²/9 − y²/4 = 1", group: 2, hint: "The squares have opposite signs." },
                { text: "y² − x² = 1", group: 2, hint: "A rectangular hyperbola on the y-axis." },
                { text: "3x² − y² = 3", group: 2, hint: "x²/1 − y²/3 = 1." },
              ],
              explain: "One squared variable: parabola. Two squared terms with the same sign (and unequal coefficients): ellipse. Opposite signs: hyperbola.",
            },
          },
          {
            type: "table",
            headers: ["", "Parabola y² = 4ax", "Ellipse x²/a² + y²/b² = 1", "Hyperbola x²/a² − y²/b² = 1"],
            rows: [
              ["Defining property", "PS = PM", "PF₁ + PF₂ = 2a", "|PF₁ − PF₂| = 2a"],
              ["Relation", "—", t`$c^2 = a^2 - b^2$`, t`$c^2 = a^2 + b^2$`],
              ["Eccentricity", "e = 1", "0 < e < 1", "e > 1"],
              ["Foci", t`$(a, 0)$`, t`$(\pm c, 0)$`, t`$(\pm c, 0)$`],
              ["Latus rectum", "4a", t`$\frac{2b^2}{a}$`, t`$\frac{2b^2}{a}$`],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "For a hyperbola, the positive term decides the transverse axis. Write c² = a² + b² clearly; using the ellipse relation by mistake costs every later mark. In \"find the equation\" questions, state the form you are using (which axis the foci are on) before substituting.",
          },
          {
            type: "keypoints",
            items: [
              "Hyperbola: |PF₁ − PF₂| = 2a, the length of the transverse axis.",
              t`$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, $c^2 = a^2 + b^2$, foci $(\pm c, 0)$, $e = \frac{c}{a} > 1$.`,
              t`Latus rectum $\frac{2b^2}{a}$; rectangular hyperbola ($a = b$) has $e = \sqrt{2}$.`,
              "Parabola e = 1, ellipse e < 1, hyperbola e > 1.",
            ],
          },
        ],
        flashcards: [
          { front: "Definition of a hyperbola", back: "Set of points whose distances from two foci have a constant difference, less than the distance between the foci." },
          { front: "Relation between a, b, c for a hyperbola", back: t`$c^2 = a^2 + b^2$` },
          { front: "Eccentricity of a hyperbola", back: t`$e = \frac{c}{a} = \sqrt{1 + \frac{b^2}{a^2}} > 1$` },
          { front: "Latus rectum of a hyperbola", back: t`$\frac{2b^2}{a}$` },
          { front: "Rectangular hyperbola", back: t`$a = b$, e.g. $x^2 - y^2 = a^2$; $e = \sqrt{2}$.` },
          { front: "Which axis is transverse?", back: "The axis of the variable with the positive squared term." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The eccentricity of x²/9 − y²/16 = 1 is",
            options: ["5/4", "5/3", "4/3", t`$\frac{\sqrt{7}}{3}$`],
            answer: 1,
            explain: t`$a = 3$, $b = 4$, $c = 5$, $e = \frac{5}{3}$. ($\frac{\sqrt{7}}{3}$ comes from wrongly subtracting the squares, the ellipse habit.)`,
          },
          {
            kind: "numeric",
            q: "Find the length of the latus rectum of x²/4 − y²/12 = 1.",
            answer: 12,
            explain: t`$\frac{2b^2}{a} = \frac{2 \times 12}{2} = 12$.`,
          },
          {
            kind: "mcq",
            q: "The hyperbola with vertices (±2, 0) and foci (±3, 0) is",
            options: ["x²/4 − y²/5 = 1", "x²/4 − y²/9 = 1", "x²/4 + y²/5 = 1", "x²/9 − y²/4 = 1"],
            answer: 0,
            explain: t`$a = 2$, $c = 3$, $b^2 = 9 - 4 = 5$.`,
          },
          {
            kind: "truefalse",
            q: "The eccentricity of a hyperbola is less than 1.",
            answer: false,
            explain: t`$c > a$ for a hyperbola, so $e = \frac{c}{a} > 1$.`,
          },
          {
            kind: "numeric",
            q: "Find the eccentricity of x² − y² = 7, to three decimal places.",
            answer: 1.414,
            tolerance: 0.002,
            explain: t`$a^2 = b^2 = 7$, so $e = \sqrt{1 + 1} = \sqrt{2} \approx 1.414$.`,
          },
          {
            kind: "multi",
            q: t`Which are true for $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$?`,
            options: [t`$b^2 = c^2 - a^2$`, t`Latus rectum $= \frac{2b^2}{a}$`, t`$|PF_1 - PF_2| = 2a$ for every point P on it`, "Its foci lie on the y-axis."],
            answers: [0, 1, 2],
            explain: "The positive x² term puts the transverse axis, and hence the foci, on the x-axis.",
          },
          {
            kind: "mcq",
            q: "A hyperbola has transverse axis 8 and eccentricity 5/4, with foci on the x-axis. Its equation is",
            options: ["x²/16 − y²/9 = 1", "x²/64 − y²/36 = 1", "x²/16 − y²/25 = 1", "x²/9 − y²/16 = 1"],
            answer: 0,
            explain: t`$2a = 8 \Rightarrow a = 4$; $c = ae = 5$; $b^2 = 25 - 16 = 9$.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c11-mat-conics-exam",
        title: "Exam edge: Conic Sections for JEE, KCET and COMEDK",
        summary: "Parametric points, tangents and normals, tangency conditions, focal chords, asymptotes and the conjugate hyperbola: the conic results JEE and KCET test most.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Conic sections give 2–3 questions in JEE Main (parabola and ellipse most often, hyperbola about once a paper) and appear in almost every JEE Advanced paper. KCET and COMEDK ask quick reading questions (focus, e, latus rectum, directrix) and tangency conditions. Class 11 board books stop at the standard forms; the results below come from ISC, JEE and Class 12 calculus (the slope of a tangent is $\frac{dy}{dx}$).

ISC Class 11 includes the condition for $y = mx + c$ to touch a conic and the tangent at a point, so ISC students should treat the tangent rows of the table as board work.`,
          },
          {
            type: "table",
            headers: ["", t`Parabola $y^2 = 4ax$`, t`Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$`, t`Hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$`],
            rows: [
              ["Parametric point", t`$(at^2, 2at)$`, t`$(a\cos\theta, b\sin\theta)$`, t`$(a\sec\theta, b\tan\theta)$`],
              ["Tangent at (x₁, y₁)", t`$yy_1 = 2a(x + x_1)$`, t`$\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$`, t`$\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$`],
              ["y = mx + c touches when", t`$c = \frac{a}{m}$`, t`$c^2 = a^2m^2 + b^2$`, t`$c^2 = a^2m^2 - b^2$`],
              ["Tangent of slope m", t`$y = mx + \frac{a}{m}$`, t`$y = mx \pm \sqrt{a^2m^2 + b^2}$`, t`$y = mx \pm \sqrt{a^2m^2 - b^2}$`],
              ["Focal distance of P(x, y)", t`$x + a$`, t`$a \pm ex$`, t`$|ex \pm a|$`],
              ["Normal at parameter", t`$y = -tx + 2at + at^3$`, t`$\frac{ax}{\cos\theta} - \frac{by}{\sin\theta} = a^2 - b^2$`, t`$\frac{ax}{\sec\theta} + \frac{by}{\tan\theta} = a^2 + b^2$`],
            ],
          },
          {
            type: "formula",
            tex: t`t_1 t_2 = -1 \ \text{(focal chord of } y^2 = 4ax\text{)}, \qquad \text{length} = a\left(t + \frac{1}{t}\right)^2`,
            caption: "Ends (at₁², 2at₁) and (at₂², 2at₂) of a chord through the focus",
          },
          {
            type: "example",
            title: "KCET level: tangent of given slope to a parabola",
            problem: t`Find the tangent to $y^2 = 8x$ parallel to $y = x + 5$, and its point of contact.`,
            steps: [
              t`$4a = 8$, so $a = 2$; required slope $m = 1$.`,
              t`Tangent: $y = mx + \frac{a}{m} = x + 2$.`,
              t`Point of contact $\left(\frac{a}{m^2}, \frac{2a}{m}\right) = (2, 4)$. Check: $16 = 8 \times 2$ ✓, and the tangent at $(2, 4)$ is $4y = 4(x + 2)$, i.e. $y = x + 2$ ✓.`,
            ],
            answer: t`$y = x + 2$, touching at $(2, 4)$`,
          },
          {
            type: "example",
            title: "JEE Main level: tangents to an ellipse",
            problem: t`Find the tangents to $\frac{x^2}{16} + \frac{y^2}{9} = 1$ with slope 1.`,
            steps: [
              t`$a^2 = 16$, $b^2 = 9$, $m = 1$.`,
              t`$c^2 = a^2m^2 + b^2 = 16 + 9 = 25$, so $c = \pm 5$.`,
              t`Tangents: $y = x + 5$ and $y = x - 5$.`,
              t`Check $y = x + 5$: substituting gives $9x^2 + 16(x + 5)^2 = 144$, i.e. $25x^2 + 160x + 256 = 0$, whose discriminant is $160^2 - 4 \cdot 25 \cdot 256 = 0$ ✓.`,
            ],
            answer: t`$y = x \pm 5$`,
          },
          {
            type: "example",
            title: "JEE Main level: normal to a parabola",
            problem: t`Find the normal to $y^2 = 12x$ at $(3, 6)$.`,
            steps: [
              t`$a = 3$. The point is $(at^2, 2at)$ with $2at = 6$, so $t = 1$ (and $at^2 = 3$ ✓).`,
              t`Normal: $y = -tx + 2at + at^3 = -x + 6 + 3 = -x + 9$.`,
              t`Check: differentiating $y^2 = 12x$ gives $\frac{dy}{dx} = \frac{6}{y} = 1$ at $(3, 6)$, so the normal has slope $-1$ through $(3, 6)$: $y = -x + 9$ ✓.`,
            ],
            answer: t`$x + y = 9$`,
          },
          {
            type: "example",
            title: "JEE Main level: tangency to a hyperbola",
            problem: t`For what $c$ is $y = 2x + c$ a tangent to $\frac{x^2}{9} - \frac{y^2}{4} = 1$?`,
            steps: [
              t`$a^2 = 9$, $b^2 = 4$, $m = 2$.`,
              t`$c^2 = a^2m^2 - b^2 = 36 - 4 = 32$.`,
              t`$c = \pm 4\sqrt{2}$. A real tangent of slope $m$ exists only when $a^2m^2 > b^2$, i.e. $|m| > \frac{b}{a} = \frac{2}{3}$, which holds.`,
            ],
            answer: t`$c = \pm 4\sqrt{2}$`,
          },
          {
            type: "example",
            title: "JEE Advanced level: a focal chord",
            problem: t`One end of a focal chord of $y^2 = 4x$ is $(4, 4)$. Find the other end, the length of the chord, and check that the semi-latus rectum is the harmonic mean of the two focal segments.`,
            steps: [
              t`$a = 1$. $(4, 4) = (t^2, 2t)$ gives $t_1 = 2$. Focal chord: $t_2 = -\frac{1}{t_1} = -\frac{1}{2}$, so the other end is $\left(\frac{1}{4}, -1\right)$.`,
              t`Length $= a\left(t + \frac{1}{t}\right)^2 = \left(2 + \frac{1}{2}\right)^2 = \frac{25}{4}$.`,
              t`Focal distances: $SP = x + a = 5$ and $SQ = \frac{1}{4} + 1 = \frac{5}{4}$; their sum is $\frac{25}{4}$ ✓.`,
              t`Harmonic mean $= \frac{2 \cdot 5 \cdot \frac{5}{4}}{5 + \frac{5}{4}} = \frac{25/2}{25/4} = 2 = 2a$, the semi-latus rectum ✓.`,
            ],
            answer: t`Other end $\left(\frac{1}{4}, -1\right)$; length $\frac{25}{4}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find c if y = 3x + c touches y² = 12x.",
                answer: 1,
                explain: t`$a = 3$, $m = 3$: $c = \frac{a}{m} = 1$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "y = mx + c touches x²/a² − y²/b² = 1 when c² = a²m² + b², the same as for the ellipse.",
            right: "For the hyperbola the condition is c² = a²m² − b². The sign follows the sign of the y² term in the equation.",
            why: "The two conditions are learnt as a pair. Changing b² to −b² turns the ellipse equation into the hyperbola equation, and the condition changes the same way.",
          },
          {
            type: "mistake",
            wrong: "In the point (a cos θ, b sin θ) on an ellipse, θ is the angle the line from the centre to the point makes with the x-axis.",
            right: "θ is the eccentric angle: the angle for the corresponding point on the auxiliary circle x² + y² = a². The actual angle φ of the point satisfies tan φ = (b/a) tan θ.",
            why: "For a circle the two angles coincide, so the habit carries over. On an ellipse, squeezing the circle vertically changes the angle unless θ is 0° or 90°.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each curve to its tangency condition for y = mx + c.",
              pairs: [
                ["x² + y² = a²", "c² = a²(1 + m²)"],
                ["y² = 4ax", "c = a/m"],
                ["x²/a² + y²/b² = 1", "c² = a²m² + b²"],
                ["x²/a² − y²/b² = 1", "c² = a²m² − b²"],
              ],
              explain: "Each condition comes from substituting y = mx + c and setting the discriminant of the resulting quadratic to zero. Put b = a in the ellipse condition and you get the circle's.",
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: "The tangency conditions hold only for conics in standard position (centre or vertex at the origin, axes along the coordinate axes); for a shifted conic, shift the origin first. c = a/m is for y² = 4ax only; for x² = 4ay the condition is c = −am². The hyperbola has no tangent of slope m when |m| ≤ b/a. The conjugate hyperbola of x²/a² − y²/b² = 1 is y²/b² − x²/a² = 1, and the two eccentricities satisfy 1/e₁² + 1/e₂² = 1.",
          },
          {
            type: "keypoints",
            items: [
              t`Tangent at $(x_1, y_1)$: replace $y^2$ by $yy_1$, $x^2$ by $xx_1$ and $2x$ by $x + x_1$ in the equation.`,
              t`Tangency: parabola $c = \frac{a}{m}$; ellipse $c^2 = a^2m^2 + b^2$; hyperbola $c^2 = a^2m^2 - b^2$.`,
              t`Parabola: normal at $t$ is $y = -tx + 2at + at^3$; a focal chord has $t_1t_2 = -1$.`,
              t`Focal distances: parabola $x + a$; ellipse $a \pm ex$ (sum $2a$); hyperbola $|ex \pm a|$ (difference $2a$).`,
              t`Hyperbola asymptotes: $y = \pm\frac{b}{a}x$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`Tangent to $y^2 = 4ax$ at $(x_1, y_1)$`, back: t`$yy_1 = 2a(x + x_1)$` },
          { front: t`Tangent of slope m to $y^2 = 4ax$`, back: t`$y = mx + \frac{a}{m}$, touching at $\left(\frac{a}{m^2}, \frac{2a}{m}\right)$` },
          { front: "Tangency condition for an ellipse", back: t`$c^2 = a^2m^2 + b^2$` },
          { front: "Tangency condition for a hyperbola", back: t`$c^2 = a^2m^2 - b^2$` },
          { front: t`Normal to $y^2 = 4ax$ at parameter $t$`, back: t`$y = -tx + 2at + at^3$` },
          { front: "Focal chord of a parabola", back: t`$t_1t_2 = -1$; length $a\left(t + \frac{1}{t}\right)^2$` },
          { front: "Asymptotes of a hyperbola", back: t`$y = \pm\frac{b}{a}x$` },
          { front: "Eccentricities of a hyperbola and its conjugate", back: t`$\frac{1}{e_1^2} + \frac{1}{e_2^2} = 1$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The tangent to y² = 4x at (1, 2) is",
            options: ["y = x + 1", "y = 2x", "x + y = 3", "y = x − 1"],
            answer: 0,
            explain: t`$yy_1 = 2a(x + x_1)$ with $a = 1$: $2y = 2(x + 1)$, so $y = x + 1$.`,
          },
          {
            kind: "numeric",
            q: "y = 2x + c (c > 0) touches x²/4 + y²/9 = 1. Find c.",
            answer: 5,
            explain: t`Here $a^2 = 4$ (under $x^2$) and $b^2 = 9$: $c^2 = 4 \times 4 + 9 = 25$, so $c = 5$. The formula $c^2 = a^2m^2 + b^2$ uses $a^2$ as the denominator of $x^2$, even when it is the smaller one.`,
            difficulty: 2,
            hint: "Keep a² as the denominator of x², whatever its size.",
          },
          {
            kind: "mcq",
            q: "The eccentricity of the hyperbola conjugate to x²/16 − y²/9 = 1 is",
            options: ["5/4", "5/3", "4/3", "3/5"],
            answer: 1,
            explain: t`Conjugate: $\frac{y^2}{9} - \frac{x^2}{16} = 1$, so $e^2 = 1 + \frac{16}{9} = \frac{25}{9}$ and $e = \frac{5}{3}$. Check: $\frac{16}{25} + \frac{9}{25} = 1$ ✓.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "One end of a focal chord of y² = 8x is (2, 4). The other end is",
            options: ["(2, −4)", "(8, −8)", "(1/2, −2)", "(−2, 4)"],
            answer: 0,
            explain: t`$a = 2$; $(2, 4) = (2t^2, 4t)$ gives $t = 1$, so $t_2 = -1$ and the other end is $(2, -4)$. This focal chord is the latus rectum.`,
          },
          {
            kind: "multi",
            q: "Which are true for x²/9 − y²/4 = 1?",
            options: ["2x − 3y = 0 is an asymptote.", "2x + 3y = 0 is an asymptote.", "3x − 2y = 0 is an asymptote.", "Both asymptotes pass through the centre."],
            answers: [0, 1, 3],
            explain: t`Asymptotes $y = \pm\frac{b}{a}x = \pm\frac{2}{3}x$, i.e. $2x \mp 3y = 0$, both through the centre $(0, 0)$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The normal to y² = 4x at the point with parameter t = 2 meets the y-axis at (0, k). Find k.",
            answer: 12,
            explain: t`$a = 1$: normal $y = -2x + 2(1)(2) + (1)(8) = -2x + 12$. At $x = 0$, $y = 12$. (The point is $(4, 4)$, and $y = -2x + 12$ passes through it ✓.)`,
            difficulty: 3,
            hint: t`Use $y = -tx + 2at + at^3$.`,
          },
          {
            kind: "mcq",
            q: "For which slope m does x²/9 − y²/16 = 1 have no tangent of slope m?",
            options: ["m = 2", "m = 1", "m = −3", "m = 5"],
            answer: 1,
            explain: t`A tangent of slope $m$ needs $c^2 = 9m^2 - 16 > 0$, i.e. $|m| > \frac{4}{3}$. For $m = 1$, $9 - 16 < 0$, so there is none.`,
            difficulty: 3,
            hint: "c² must be positive.",
          },
        ],
      },
    ],
  },
  /* @@NEXT@@ */
];

export const links: Record<string, string | string[]> = {
  "11:Straight Lines": "c11-mat-straight-lines",
};
