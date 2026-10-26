import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 11: Limits and Derivatives (NCERT, Karnataka I PUC, ISC)       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-mat-limits-derivatives",
    title: "Limits and Derivatives (Class 11)",
    icon: "📈",
    description: "Intuitive limits, left and right hand limits, algebra of limits, standard limits including sin x / x, the derivative from first principles and the rules of differentiation.",
    lessons: [
      {
        slug: "c11-mat-limits-intro",
        title: "Limits: the Idea and the Algebra of Limits",
        summary: "What a limit means, left and right hand limits, the algebra of limits, limits of polynomial and rational functions, and the standard limit of (xⁿ − aⁿ)/(x − a).",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚗",
            caption: "A car's speedometer shows the speed at one instant. To find speed at an instant, we look at average speeds over shorter and shorter time gaps. That idea is a limit.",
          },
          {
            type: "text",
            md: t`Take $f(x) = \dfrac{x^2 - 4}{x - 2}$. At $x = 2$ the formula gives $\frac{0}{0}$, so $f(2)$ is not defined. But we can still ask: **what value does $f(x)$ get close to when $x$ gets close to 2?** For $x \neq 2$, $f(x) = x + 2$, and the table below shows the values settling near 4.

We write $\lim_{x \to 2} f(x) = 4$ and read it as "the limit of $f(x)$ as $x$ tends to 2 is 4". The limit describes what happens **near** the point, not **at** the point.`,
          },
          {
            type: "table",
            headers: ["x (from the left)", "f(x)", "x (from the right)", "f(x)"],
            rows: [
              ["1.9", "3.9", "2.1", "4.1"],
              ["1.99", "3.99", "2.01", "4.01"],
              ["1.999", "3.999", "2.001", "4.001"],
              ["→ 2", "→ 4", "→ 2", "→ 4"],
            ],
          },
          {
            type: "text",
            md: t`**Left hand limit (LHL):** the value $f(x)$ approaches as $x$ approaches $a$ through values **less than** $a$, written $\lim_{x \to a^-} f(x)$.

**Right hand limit (RHL):** the value $f(x)$ approaches as $x$ approaches $a$ through values **greater than** $a$, written $\lim_{x \to a^+} f(x)$.

The limit $\lim_{x \to a} f(x)$ **exists** only when the LHL and RHL both exist and are equal; the common value is the limit. The value $f(a)$ itself plays no part: it may be different, or not defined at all.`,
          },
          {
            type: "example",
            title: "A piecewise function",
            problem: t`Let $f(x) = 2x + 1$ for $x < 1$, $f(1) = 5$, and $f(x) = x^2 + 2$ for $x > 1$. Find $\lim_{x \to 1} f(x)$, if it exists.`,
            steps: [
              t`LHL: for $x < 1$, $f(x) = 2x + 1$, so $\lim_{x \to 1^-} f(x) = 2(1) + 1 = 3$.`,
              t`RHL: for $x > 1$, $f(x) = x^2 + 2$, so $\lim_{x \to 1^+} f(x) = 1 + 2 = 3$.`,
              t`LHL = RHL = 3, so the limit exists and equals 3.`,
              t`Note that $f(1) = 5 \neq 3$. The value at the point does not change the limit.`,
            ],
            answer: t`$\lim_{x \to 1} f(x) = 3$.`,
          },
          {
            type: "formula",
            tex: t`\lim_{x\to a}[f \pm g] = \lim_{x\to a} f \pm \lim_{x\to a} g,\quad \lim_{x\to a}[f\,g] = \lim_{x\to a} f \cdot \lim_{x\to a} g,\quad \lim_{x\to a}\frac{f}{g} = \frac{\lim_{x\to a} f}{\lim_{x\to a} g}\ \ \Big(\lim_{x\to a} g \neq 0\Big)`,
            caption: "Algebra of limits: valid when both limits exist. Also lim [k f(x)] = k lim f(x) for any constant k.",
          },
          {
            type: "text",
            md: t`**Polynomials and rational functions.** For a polynomial $p(x)$, $\lim_{x \to a} p(x) = p(a)$: just substitute. For a rational function $\frac{p(x)}{q(x)}$ with $q(a) \neq 0$, the limit is $\frac{p(a)}{q(a)}$.

If substitution gives $\frac{0}{0}$, then $(x - a)$ is a factor of both $p$ and $q$ (factor theorem). Cancel it (allowed, because $x \neq a$ while $x \to a$) and substitute again. If the expression has a square root, **rationalise** first.`,
          },
          {
            type: "example",
            title: "Factorise, cancel, substitute",
            problem: t`Evaluate (a) $\lim_{x \to 3} \dfrac{x^2 - 9}{x^2 - 5x + 6}$ and (b) $\lim_{x \to 0} \dfrac{\sqrt{1 + x} - 1}{x}$.`,
            steps: [
              t`(a) Substitution gives $\frac{0}{0}$. Factorise: $\dfrac{(x - 3)(x + 3)}{(x - 3)(x - 2)} = \dfrac{x + 3}{x - 2}$ for $x \neq 3$.`,
              t`Now substitute: $\dfrac{3 + 3}{3 - 2} = 6$.`,
              t`(b) Multiply top and bottom by $\sqrt{1 + x} + 1$: $\dfrac{(1 + x) - 1}{x(\sqrt{1 + x} + 1)} = \dfrac{1}{\sqrt{1 + x} + 1}$.`,
              t`Substitute $x = 0$: $\dfrac{1}{1 + 1} = \dfrac{1}{2}$.`,
            ],
            answer: t`(a) 6. (b) $\frac{1}{2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $\lim_{x \to 1} \dfrac{x^3 - 1}{x - 1}$.`,
                answer: 3,
                explain: t`$x^3 - 1 = (x - 1)(x^2 + x + 1)$, so the limit is $1 + 1 + 1 = 3$.`,
              },
              {
                kind: "truefalse",
                q: t`For $\lim_{x \to a} f(x)$ to exist, $f(a)$ must be defined.`,
                answer: false,
                explain: t`The limit looks only at values near $a$. In $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$, the function is not defined at 2.`,
              },
            ],
          },
          {
            type: "formula",
            tex: t`\lim_{x \to a} \frac{x^n - a^n}{x - a} = n\,a^{\,n-1}`,
            caption: "True for every positive integer n; NCERT notes that it also holds for any rational n when a > 0.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`For a positive integer $n$: $x^n - a^n = (x - a)\left(x^{n-1} + x^{n-2}a + x^{n-3}a^2 + \cdots + a^{n-1}\right)$.`,
              t`For $x \neq a$, cancel $(x - a)$: $\dfrac{x^n - a^n}{x - a} = x^{n-1} + x^{n-2}a + \cdots + a^{n-1}$.`,
              t`This is a polynomial in $x$, so substitute $x = a$: every one of the $n$ terms becomes $a^{n-1}$.`,
              t`The sum is $n\,a^{n-1}$. ∎`,
            ],
          },
          {
            type: "example",
            title: "Using the standard limit",
            problem: t`Evaluate $\lim_{x \to 1} \dfrac{x^{15} - 1}{x^{10} - 1}$.`,
            steps: [
              t`Divide top and bottom by $x - 1$: $\dfrac{(x^{15} - 1^{15})/(x - 1)}{(x^{10} - 1^{10})/(x - 1)}$.`,
              t`Numerator $\to 15 \cdot 1^{14} = 15$; denominator $\to 10 \cdot 1^{9} = 10$.`,
              t`The denominator's limit is not 0, so the quotient rule applies: $\dfrac{15}{10}$.`,
            ],
            answer: t`$\frac{3}{2}$.`,
          },
          {
            type: "mistake",
            wrong: t`Substitution gave $\frac{0}{0}$, so the limit is 0 (or 1, or it does not exist).`,
            right: t`$\frac{0}{0}$ is an **indeterminate form**: it tells you nothing yet. Simplify (factorise, rationalise or use a standard limit) and then substitute again. The limit can turn out to be any number.`,
            why: t`"Zero over something" feels like zero and "something over itself" feels like one. Here both top and bottom shrink together, and the answer depends on how fast each one shrinks.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`What is $\lim_{x \to 0} \dfrac{|x|}{x}$?`,
              emoji: "↔️",
              options: ["1", "−1", "0", "It does not exist"],
              answer: 3,
              trap: 2,
              explain: t`For $x > 0$ the value is 1, so RHL = 1; for $x < 0$ it is −1, so LHL = −1. The one-sided limits differ, so the limit does not exist.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`For a piecewise function, write LHL and RHL separately, then a sentence: "LHL = RHL, so the limit exists" (or "LHL ≠ RHL, so the limit does not exist"). For $\frac{0}{0}$ forms, show the factorisation or rationalisation; writing only the final number usually earns 1 mark out of 2 or 3. Keep writing "$\lim$" in every line until you actually substitute.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\lim_{x \to a} f(x) = L$ means $f(x)$ gets as close to $L$ as we like when $x$ is close enough to $a$ (but not equal to $a$).`,
              "The limit exists exactly when LHL and RHL exist and are equal; the value f(a) does not matter.",
              "Limits of sums, differences, products and quotients are the sums, … of the limits (quotient: denominator limit not 0).",
              "Polynomials: substitute. A 0/0 form: factorise or rationalise first.",
              t`$\lim_{x \to a} \frac{x^n - a^n}{x - a} = n a^{n-1}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Left hand limit at x = a", back: t`$\lim_{x \to a^-} f(x)$: the value approached as $x \to a$ through values less than $a$.` },
          { front: "When does a limit exist?", back: "When the left hand and right hand limits both exist and are equal." },
          { front: "Does f(a) affect the limit at a?", back: "No. The limit depends only on values of f near a, not at a." },
          { front: "Limit of a polynomial", back: t`$\lim_{x \to a} p(x) = p(a)$.` },
          { front: t`$\lim_{x \to a} \dfrac{x^n - a^n}{x - a}$`, back: t`$n a^{n-1}$` },
          { front: "First move for a 0/0 rational form", back: "Factorise top and bottom, cancel (x − a), then substitute." },
          { front: "First move for a 0/0 form with a square root", back: "Rationalise: multiply by the conjugate." },
          { front: "Quotient rule for limits needs…", back: "the limit of the denominator to be non-zero." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to -2} \dfrac{x^3 + 8}{x + 2}$.`,
            answer: 12,
            explain: t`$\dfrac{x^3 - (-2)^3}{x - (-2)} \to 3(-2)^2 = 12$.`,
          },
          {
            kind: "mcq",
            q: t`$f(x) = x^2$ for $x \le 1$ and $f(x) = 2x - k$ for $x > 1$. For which $k$ does $\lim_{x \to 1} f(x)$ exist?`,
            options: ["k = 0", "k = 1", "k = 2", "k = 3"],
            answer: 1,
            explain: t`LHL $= 1$ and RHL $= 2 - k$. Equal when $k = 1$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to 4} \dfrac{\sqrt{x} - 2}{x - 4}$ (give a decimal).`,
            answer: 0.25,
            tolerance: 0.001,
            explain: t`$x - 4 = (\sqrt{x} - 2)(\sqrt{x} + 2)$, so the expression is $\frac{1}{\sqrt{x} + 2} \to \frac{1}{4}$.`,
          },
          {
            kind: "mcq",
            q: t`$[x]$ is the greatest integer function. What is $\lim_{x \to 0} [x]$?`,
            options: ["0", "−1", "1", "It does not exist"],
            answer: 3,
            difficulty: 2,
            hint: "Find the value just left of 0 and just right of 0.",
            explain: t`For $-1 \le x < 0$, $[x] = -1$, so LHL $= -1$; for $0 \le x < 1$, $[x] = 0$, so RHL $= 0$. They differ.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to 2} \dfrac{x^5 - 32}{x - 2}$.`,
            answer: 80,
            explain: t`$5 \cdot 2^4 = 80$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 1} \dfrac{x^2 + x - 2}{x^2 - 1}$ equals`,
            options: [t`$\frac{3}{2}$`, "1", "0", "It does not exist"],
            answer: 0,
            difficulty: 2,
            explain: t`$\dfrac{(x - 1)(x + 2)}{(x - 1)(x + 1)} = \dfrac{x + 2}{x + 1} \to \dfrac{3}{2}$.`,
          },
          {
            kind: "truefalse",
            q: t`If $\lim_{x \to a} f(x) = 6$ and $\lim_{x \to a} g(x) = 0$, then $\lim_{x \to a} f(x) g(x) = 0$.`,
            answer: true,
            explain: t`Both limits exist, so the product rule gives $6 \times 0 = 0$.`,
          },
          {
            kind: "fill",
            q: t`If $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L$, then $\lim_{x \to a} f(x) =$ ___.`,
            answer: ["L"],
            explain: "Equal one-sided limits give the limit.",
          },
        ],
      },
      {
        slug: "c11-mat-trig-limits",
        title: "Limits of Trigonometric Functions",
        summary: "The sandwich theorem, the proof that sin x / x → 1, the limit of (1 − cos x)/x, and how to reduce trigonometric limits to these standard results.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍕",
            caption: "Cut a very thin slice from a round pizza of radius 1. The curved edge (arc x) and the straight half-chord (sin x) become almost equal as the slice gets thinner.",
          },
          {
            type: "text",
            md: t`At most points, trigonometric limits are found by substitution: $\lim_{x \to a} \sin x = \sin a$ and $\lim_{x \to a} \cos x = \cos a$ for every real $a$, and $\lim_{x \to a} \tan x = \tan a$ wherever $\cos a \neq 0$. The interesting cases are the $\frac{0}{0}$ forms such as $\frac{\sin x}{x}$ at $x = 0$. To handle them we need one tool.

**Sandwich theorem.** If $f(x) \le g(x) \le h(x)$ for all $x$ near $a$ (except possibly at $a$), and $\lim_{x \to a} f(x) = \lim_{x \to a} h(x) = L$, then $\lim_{x \to a} g(x) = L$. The function in the middle is squeezed to the same limit.`,
          },
          {
            type: "formula",
            tex: t`f(x) \le g(x) \le h(x),\quad \lim_{x\to a} f = \lim_{x\to a} h = L \ \Longrightarrow\ \lim_{x\to a} g = L`,
            caption: "The sandwich (squeeze) theorem.",
          },
          {
            type: "text",
            md: t`**Proof that $\frac{\sin x}{x} \to 1$ (angles in radians).** Draw a circle of radius 1 with centre O. Let A be the point (1, 0), let C be the point on the circle with $\angle AOC = x$, where $0 < x < \frac{\pi}{2}$, and let the tangent at A meet OC extended at B. Then $AB = \tan x$, and the perpendicular from C to OA has length $\sin x$. Now compare three areas:

area of triangle OAC $<$ area of sector OAC $<$ area of triangle OAB.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Areas: $\frac{1}{2} \cdot 1 \cdot \sin x < \frac{1}{2} \cdot 1^2 \cdot x < \frac{1}{2} \cdot 1 \cdot \tan x$, so $\sin x < x < \tan x$.`,
              t`Divide by $\sin x$ (positive for $0 < x < \frac{\pi}{2}$): $1 < \dfrac{x}{\sin x} < \dfrac{1}{\cos x}$.`,
              t`Take reciprocals (this reverses the inequalities): $\cos x < \dfrac{\sin x}{x} < 1$.`,
              t`$\frac{\sin x}{x}$ and $\cos x$ are even functions, so the same inequality holds for $-\frac{\pi}{2} < x < 0$.`,
              t`As $x \to 0$, $\cos x \to 1$. By the sandwich theorem, $\lim_{x \to 0} \dfrac{\sin x}{x} = 1$. ∎`,
            ],
          },
          {
            type: "formula",
            tex: t`\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad \lim_{x \to 0} \frac{\tan x}{x} = 1, \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0`,
            caption: "x in radians. Useful companion: lim (1 − cos x)/x² = 1/2.",
          },
          {
            type: "example",
            title: "Deriving the other two",
            problem: t`Show that $\lim_{x \to 0} \dfrac{\tan x}{x} = 1$ and $\lim_{x \to 0} \dfrac{1 - \cos x}{x} = 0$.`,
            steps: [
              t`$\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \cdot \dfrac{1}{\cos x} \to 1 \cdot 1 = 1$.`,
              t`Use $1 - \cos x = 2\sin^2 \frac{x}{2}$: $\dfrac{1 - \cos x}{x} = \dfrac{2\sin^2 (x/2)}{x} = \dfrac{\sin (x/2)}{x/2} \cdot \sin \dfrac{x}{2}$.`,
              t`As $x \to 0$, $\frac{x}{2} \to 0$, so the first factor $\to 1$ and the second $\to \sin 0 = 0$.`,
            ],
            answer: t`$\lim \frac{\tan x}{x} = 1$ and $\lim \frac{1 - \cos x}{x} = 1 \times 0 = 0$.`,
          },
          {
            type: "example",
            title: "Make the angle match",
            problem: t`Evaluate (a) $\lim_{x \to 0} \dfrac{\sin 4x}{\sin 2x}$ and (b) $\lim_{x \to 0} \dfrac{1 - \cos 2x}{x^2}$.`,
            steps: [
              t`(a) Write $\dfrac{\sin 4x}{\sin 2x} = \dfrac{\sin 4x}{4x} \cdot \dfrac{2x}{\sin 2x} \cdot \dfrac{4x}{2x}$.`,
              t`The first two factors tend to 1, and $\frac{4x}{2x} = 2$. So the limit is 2.`,
              t`(b) $1 - \cos 2x = 2\sin^2 x$, so $\dfrac{1 - \cos 2x}{x^2} = 2\left(\dfrac{\sin x}{x}\right)^2 \to 2 \cdot 1^2$.`,
            ],
            answer: "(a) 2. (b) 2.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\lim_{x \to 0} \dfrac{\tan 2x}{x}$.`,
                answer: 2,
                explain: t`$\dfrac{\tan 2x}{2x} \cdot 2 \to 1 \cdot 2 = 2$.`,
              },
              {
                kind: "mcq",
                q: t`$\lim_{x \to 0} \dfrac{\sin 5x}{3x}$ equals`,
                options: [t`$\frac{5}{3}$`, t`$\frac{3}{5}$`, "1", "0"],
                answer: 0,
                explain: t`$\dfrac{\sin 5x}{5x} \cdot \dfrac{5}{3} \to \dfrac{5}{3}$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Shift the point to 0",
            problem: t`Evaluate $\lim_{x \to \pi/2} \dfrac{\tan 2x}{x - \frac{\pi}{2}}$.`,
            steps: [
              t`Put $y = x - \frac{\pi}{2}$. As $x \to \frac{\pi}{2}$, $y \to 0$, and $2x = 2y + \pi$.`,
              t`$\tan(2y + \pi) = \tan 2y$, because $\tan$ has period $\pi$.`,
              t`The limit becomes $\lim_{y \to 0} \dfrac{\tan 2y}{y} = \lim_{y \to 0} \dfrac{\tan 2y}{2y} \cdot 2 = 2$.`,
            ],
            answer: "2",
          },
          {
            type: "mistake",
            wrong: t`$\lim_{x \to 0} \dfrac{\sin 4x}{\sin 2x} = \dfrac{\sin 4}{\sin 2}$ (cancel the $x$), or $= 1$ because "sin over sin is 1".`,
            right: t`$\sin 4x$ is not $\sin 4 \times x$, so $x$ cannot be cancelled. Create $\frac{\sin 4x}{4x}$ and $\frac{2x}{\sin 2x}$, each tending to 1; what is left is $\frac{4x}{2x} = 2$.`,
            why: t`$\sin$ is a function, not a multiplier. The standard result needs the **same** quantity inside the sine and in the denominator, and that quantity must tend to 0.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps of the sin x / x proof in order.",
              items: [
                "Compare areas: triangle OAC < sector OAC < triangle OAB",
                "So sin x < x < tan x for 0 < x < π/2",
                "Divide by sin x: 1 < x / sin x < 1 / cos x",
                "Take reciprocals: cos x < sin x / x < 1",
                "Let x → 0 and use the sandwich theorem",
              ],
              explain: "The areas give an inequality; dividing and taking reciprocals traps sin x / x between cos x and 1, and both of those tend to 1.",
            },
          },
          {
            type: "callout",
            tone: "warning",
            title: "Radians only",
            md: t`$\lim_{x \to 0} \frac{\sin x}{x} = 1$ needs $x$ in **radians** (the sector area $\frac{1}{2}r^2 x$ uses radians). If $x$ is in degrees, $\sin x^\circ = \sin \frac{\pi x}{180}$ and the limit is $\frac{\pi}{180}$.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`CBSE and Karnataka PUC (rationalised NCERT) stop at trigonometric limits. **ISC** Class 11, JEE and KCET also use $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$, $\lim_{x \to 0} \frac{\log_e(1 + x)}{x} = 1$ and $\lim_{x \to 0} \frac{a^x - 1}{x} = \log_e a$; they appear in the Exam edge lesson.`,
          },
          {
            type: "keypoints",
            items: [
              "sin, cos (and tan where defined): limits by substitution.",
              "Sandwich theorem: a function trapped between two functions with the same limit has that limit too.",
              t`$\lim_{x \to 0} \frac{\sin x}{x} = 1$ (radians), proved by comparing areas: $\cos x < \frac{\sin x}{x} < 1$.`,
              t`$\lim_{x \to 0} \frac{\tan x}{x} = 1$ and $\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$.`,
              "Make the angle inside the sine match the denominator; for x → a, substitute y = x − a.",
            ],
          },
        ],
        flashcards: [
          { front: "Sandwich theorem", back: "If f ≤ g ≤ h near a and f, h have the same limit L at a, then g → L as well." },
          { front: t`$\lim_{x \to 0} \dfrac{\sin x}{x}$`, back: "1 (x in radians)." },
          { front: t`$\lim_{x \to 0} \dfrac{1 - \cos x}{x}$`, back: "0" },
          { front: t`$\lim_{x \to 0} \dfrac{1 - \cos x}{x^2}$`, back: t`$\frac{1}{2}$, since $1 - \cos x = 2\sin^2 \frac{x}{2}$.` },
          { front: t`$\lim_{x \to 0} \dfrac{\sin ax}{bx}$`, back: t`$\frac{a}{b}$` },
          { front: "Inequality used in the sin x / x proof", back: t`$\cos x < \frac{\sin x}{x} < 1$ for $0 < |x| < \frac{\pi}{2}$.` },
          { front: t`$\lim_{x \to 0} \dfrac{\sin x^\circ}{x}$ (degrees)`, back: t`$\frac{\pi}{180}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to 0} \dfrac{\sin 3x}{x}$.`,
            answer: 3,
            explain: t`$\dfrac{\sin 3x}{3x} \cdot 3 \to 3$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 0} \dfrac{1 - \cos 4x}{x^2}$ equals`,
            options: ["4", "8", "16", "2"],
            answer: 1,
            difficulty: 2,
            hint: t`$1 - \cos 4x = 2\sin^2 2x$.`,
            explain: t`$\dfrac{2\sin^2 2x}{x^2} = 2 \cdot 4 \cdot \left(\dfrac{\sin 2x}{2x}\right)^2 \to 8$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to 0} \dfrac{\sin 6x}{\sin 4x}$ (decimal).`,
            answer: 1.5,
            tolerance: 0.001,
            explain: t`$\dfrac{\sin 6x}{6x} \cdot \dfrac{4x}{\sin 4x} \cdot \dfrac{6}{4} \to \dfrac{3}{2}$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 0} x \cot x$ equals`,
            options: ["0", "1", "∞", "It does not exist"],
            answer: 1,
            explain: t`$x \cot x = \dfrac{x}{\sin x} \cdot \cos x \to 1 \cdot 1 = 1$.`,
          },
          {
            kind: "truefalse",
            q: t`$\lim_{x \to 0} \frac{\sin x}{x} = 1$ holds whether $x$ is measured in degrees or radians.`,
            answer: false,
            explain: t`In degrees the limit is $\frac{\pi}{180}$. The result needs radians.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to \pi} \dfrac{\sin x}{x - \pi}$.`,
            answer: -1,
            difficulty: 2,
            hint: t`Put $y = x - \pi$.`,
            explain: t`$\sin(y + \pi) = -\sin y$, so the limit is $\lim_{y \to 0} \frac{-\sin y}{y} = -1$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 0} \dfrac{\cos x - \cos 3x}{x^2}$ equals`,
            options: ["2", "4", "8", "0"],
            answer: 1,
            difficulty: 3,
            hint: t`$\cos A - \cos B = 2\sin\frac{A + B}{2}\sin\frac{B - A}{2}$.`,
            explain: t`$\cos x - \cos 3x = 2\sin 2x \sin x$. So the expression is $2 \cdot \dfrac{\sin 2x}{x} \cdot \dfrac{\sin x}{x} \to 2 \cdot 2 \cdot 1 = 4$.`,
          },
          {
            kind: "multi",
            q: t`Which of these limits (as $x \to 0$) equal 1?`,
            options: [t`$\frac{\sin x}{x}$`, t`$\frac{\tan x}{x}$`, t`$\frac{x}{\sin x}$`, t`$\frac{1 - \cos x}{x}$`],
            answers: [0, 1, 2],
            explain: t`The first three tend to 1 (the third is the reciprocal of the first). $\frac{1 - \cos x}{x} \to 0$.`,
          },
        ],
      },
      {
        slug: "c11-mat-derivatives",
        title: "Derivatives: First Principles and Rules",
        summary: "The derivative as a limit, its meaning as rate of change and slope, derivatives from first principles, the algebra of derivatives and the derivatives of polynomials and trigonometric functions.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🏏",
            caption: t`A ball dropped from a tall building falls $s = 4.9t^2$ metres in $t$ seconds (taking $g = 9.8$ m/s²). How fast is it moving at exactly $t = 2$ s?`,
          },
          {
            type: "text",
            md: t`Average speed from $t = 2$ to $t = 2 + h$ is $\dfrac{4.9(2 + h)^2 - 4.9(4)}{h} = \dfrac{4.9(4h + h^2)}{h} = 19.6 + 4.9h$. As $h \to 0$ this tends to **19.6 m/s**: the speed at the instant $t = 2$.

In general, the **derivative of $f$ at $a$** is the limit below, if it exists. It is written $f'(a)$ or $\left.\frac{df}{dx}\right|_{x = a}$. It measures the **instantaneous rate of change** of $f$ at $a$, and geometrically it is the **slope of the tangent** to $y = f(x)$ at $(a, f(a))$. Doing this at every $x$ gives the **derivative function** $f'(x)$; finding it straight from the limit is called differentiating **from first principles**.`,
          },
          {
            type: "formula",
            tex: t`f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}, \qquad f'(x) = \frac{d}{dx}f(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}`,
            caption: "The derivative from first principles.",
          },
          {
            type: "example",
            title: "First principles: 1/x",
            problem: t`Find the derivative of $f(x) = \dfrac{1}{x}$ ($x \neq 0$) from first principles.`,
            steps: [
              t`$f(x + h) - f(x) = \dfrac{1}{x + h} - \dfrac{1}{x} = \dfrac{x - (x + h)}{x(x + h)} = \dfrac{-h}{x(x + h)}$.`,
              t`Divide by $h$: $\dfrac{f(x + h) - f(x)}{h} = \dfrac{-1}{x(x + h)}$.`,
              t`Let $h \to 0$: $f'(x) = \dfrac{-1}{x \cdot x} = -\dfrac{1}{x^2}$.`,
            ],
            answer: t`$\dfrac{d}{dx}\left(\dfrac{1}{x}\right) = -\dfrac{1}{x^2}$, which matches $n x^{n-1}$ with $n = -1$.`,
          },
          {
            type: "example",
            title: "First principles: sin x",
            problem: t`Find the derivative of $\sin x$ from first principles.`,
            steps: [
              t`$\sin(x + h) - \sin x = 2\cos\left(x + \frac{h}{2}\right)\sin\frac{h}{2}$ (using $\sin C - \sin D = 2\cos\frac{C + D}{2}\sin\frac{C - D}{2}$).`,
              t`So $\dfrac{\sin(x + h) - \sin x}{h} = \cos\left(x + \dfrac{h}{2}\right) \cdot \dfrac{\sin (h/2)}{h/2}$.`,
              t`As $h \to 0$: $\cos\left(x + \frac{h}{2}\right) \to \cos x$ and $\dfrac{\sin(h/2)}{h/2} \to 1$.`,
            ],
            answer: t`$\dfrac{d}{dx}(\sin x) = \cos x$.`,
          },
          {
            type: "table",
            headers: ["f(x)", "f′(x)", "f(x)", "f′(x)"],
            rows: [
              [t`$c$ (constant)`, "0", t`$\sin x$`, t`$\cos x$`],
              [t`$x^n$`, t`$n x^{n-1}$`, t`$\cos x$`, t`$-\sin x$`],
              [t`$x$`, "1", t`$\tan x$`, t`$\sec^2 x$`],
              [t`$\frac{1}{x}$`, t`$-\frac{1}{x^2}$`, t`$\sec x$`, t`$\sec x \tan x$`],
              [t`$\sqrt{x}$`, t`$\frac{1}{2\sqrt{x}}$`, t`$\csc x$`, t`$-\csc x \cot x$`],
              ["", "", t`$\cot x$`, t`$-\csc^2 x$`],
            ],
          },
          {
            type: "formula",
            tex: t`(u \pm v)' = u' \pm v', \qquad (uv)' = u'v + uv', \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}\ \ (v \neq 0)`,
            caption: "Algebra of derivatives: sum/difference, product (Leibnitz) rule and quotient rule. Also (cu)′ = c u′.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`If $f(x) = 3x^2 - 4x + 7$, find $f'(2)$.`,
                answer: 8,
                explain: t`$f'(x) = 6x - 4$, so $f'(2) = 12 - 4 = 8$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Product and quotient rules",
            problem: t`Differentiate (a) $(x^2 + 1)\sin x$ and (b) $\dfrac{x + 1}{x - 1}$.`,
            steps: [
              t`(a) $u = x^2 + 1$, $v = \sin x$: $u' = 2x$, $v' = \cos x$.`,
              t`$(uv)' = 2x\sin x + (x^2 + 1)\cos x$.`,
              t`(b) $u = x + 1$, $v = x - 1$: $u' = v' = 1$.`,
              t`$\left(\dfrac{u}{v}\right)' = \dfrac{1 \cdot (x - 1) - (x + 1) \cdot 1}{(x - 1)^2} = \dfrac{-2}{(x - 1)^2}$.`,
            ],
            answer: t`(a) $2x\sin x + (x^2 + 1)\cos x$. (b) $-\dfrac{2}{(x - 1)^2}$.`,
          },
          {
            type: "example",
            title: "Derivative of tan x by the quotient rule",
            problem: t`Use $\tan x = \dfrac{\sin x}{\cos x}$ to find $\dfrac{d}{dx}\tan x$.`,
            steps: [
              t`$u = \sin x$, $v = \cos x$; $u' = \cos x$, $v' = -\sin x$.`,
              t`$\dfrac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \dfrac{\cos^2 x + \sin^2 x}{\cos^2 x}$.`,
              t`$= \dfrac{1}{\cos^2 x} = \sec^2 x$.`,
            ],
            answer: t`$\dfrac{d}{dx}\tan x = \sec^2 x$ (for $\cos x \neq 0$).`,
          },
          {
            type: "mistake",
            wrong: t`The derivative of a product is the product of the derivatives: $\dfrac{d}{dx}(x^2 \sin x) = 2x \cos x$.`,
            right: t`Use the product rule: $(uv)' = u'v + uv'$, so $\dfrac{d}{dx}(x^2 \sin x) = 2x\sin x + x^2 \cos x$.`,
            why: t`Sums split term by term, so it is tempting to treat products the same way. Test it on $x \cdot x = x^2$: the "product of derivatives" gives $1 \cdot 1 = 1$, but the true derivative is $2x$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each function with its derivative.",
              pairs: [
                [t`$\cos x$`, t`$-\sin x$`],
                [t`$\tan x$`, t`$\sec^2 x$`],
                [t`$\sqrt{x}$`, t`$\frac{1}{2\sqrt{x}}$`],
                [t`$\cot x$`, t`$-\csc^2 x$`],
                [t`$x^{-2}$`, t`$-2x^{-3}$`],
              ],
              explain: t`The "co-" functions (cos, cot, cosec) all have a minus sign in their derivatives. Powers follow $n x^{n-1}$ for any rational $n$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`"From first principles" means the limit definition **must** be used: a correct answer from the rules gets no marks. Marks go to (1) writing $\lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$, (2) the algebra or trigonometric identity, (3) using a standard limit and (4) the result. For the quotient rule, keep the order $u'v - uv'$; swapping it changes the sign.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`Rationalised NCERT (CBSE, Karnataka PUC) differentiates polynomials and trigonometric functions using the sum, product and quotient rules; the chain rule comes in Class 12 *Continuity and Differentiability*. ISC Class 11 may go further (for example, composite functions); check your current ISC syllabus.`,
          },
          {
            type: "keypoints",
            items: [
              t`$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$: rate of change, and slope of the tangent.`,
              t`$\frac{d}{dx}x^n = n x^{n-1}$; $\frac{d}{dx}\sin x = \cos x$; $\frac{d}{dx}\cos x = -\sin x$; $\frac{d}{dx}\tan x = \sec^2 x$.`,
              t`Product rule $u'v + uv'$; quotient rule $\frac{u'v - uv'}{v^2}$.`,
              "Derivatives of the 'co-' functions carry a minus sign.",
              "'First principles' questions must use the limit definition.",
            ],
          },
        ],
        flashcards: [
          { front: "Derivative from first principles", back: t`$f'(x) = \lim_{h \to 0} \dfrac{f(x + h) - f(x)}{h}$` },
          { front: "Geometric meaning of f′(a)", back: "Slope of the tangent to y = f(x) at the point (a, f(a))." },
          { front: "Product rule", back: t`$(uv)' = u'v + uv'$` },
          { front: "Quotient rule", back: t`$\left(\frac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$` },
          { front: t`$\frac{d}{dx}\sec x$`, back: t`$\sec x \tan x$` },
          { front: t`$\frac{d}{dx}\csc x$`, back: t`$-\csc x \cot x$` },
          { front: t`$\frac{d}{dx}\sqrt{x}$`, back: t`$\frac{1}{2\sqrt{x}}$` },
          { front: "Identity used to differentiate sin x from first principles", back: t`$\sin C - \sin D = 2\cos\frac{C + D}{2}\sin\frac{C - D}{2}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`$f(x) = x^3 - 2x$. Find $f'(2)$.`,
            answer: 10,
            explain: t`$f'(x) = 3x^2 - 2$, so $f'(2) = 12 - 2 = 10$.`,
          },
          {
            kind: "mcq",
            q: t`$\dfrac{d}{dx}(\sin x \cos x)$ equals`,
            options: [t`$-\sin x \cos x$`, t`$\cos 2x$`, t`$\sin 2x$`, t`$1$`],
            answer: 1,
            explain: t`Product rule: $\cos x \cos x + \sin x(-\sin x) = \cos^2 x - \sin^2 x = \cos 2x$.`,
          },
          {
            kind: "mcq",
            q: t`$\dfrac{d}{dx}\left(\dfrac{1}{x^2}\right)$ equals`,
            options: [t`$-\frac{2}{x^3}$`, t`$\frac{2}{x^3}$`, t`$-\frac{1}{2x}$`, t`$-\frac{2}{x}$`],
            answer: 0,
            explain: t`$x^{-2} \to -2x^{-3}$.`,
          },
          {
            kind: "numeric",
            q: t`Find the derivative of $\dfrac{x^2}{x + 1}$ at $x = 1$ (decimal).`,
            answer: 0.75,
            tolerance: 0.001,
            difficulty: 2,
            explain: t`$\dfrac{2x(x + 1) - x^2}{(x + 1)^2}$ at $x = 1$: $\dfrac{4 - 1}{4} = 0.75$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{h \to 0} \dfrac{(2 + h)^3 - 8}{h}$ equals`,
            options: ["8", "12", "6", "0"],
            answer: 1,
            difficulty: 2,
            hint: "Recognise the definition of a derivative.",
            explain: t`It is $f'(2)$ for $f(x) = x^3$: $3 \cdot 2^2 = 12$.`,
          },
          {
            kind: "multi",
            q: "Which statements are true?",
            options: [t`$\frac{d}{dx}\sec x = \sec x \tan x$`, t`$\frac{d}{dx}\cot x = \csc^2 x$`, t`$\frac{d}{dx}\cos x = -\sin x$`, t`$\frac{d}{dx}x^{-1} = -x^{-2}$`],
            answers: [0, 2, 3],
            explain: t`$\frac{d}{dx}\cot x = -\csc^2 x$; the minus sign is missing in the second option.`,
          },
          {
            kind: "numeric",
            q: t`A stone falls $s = 4.9t^2$ m in $t$ s. Find its speed (m/s) at $t = 3$ s.`,
            answer: 29.4,
            tolerance: 0.01,
            unit: "m/s",
            explain: t`$\frac{ds}{dt} = 9.8t = 29.4$ m/s.`,
          },
          {
            kind: "truefalse",
            q: t`$\frac{d}{dx}[5 f(x)] = 5 f'(x)$ for any differentiable $f$.`,
            answer: true,
            explain: "A constant factor comes out of the limit, so (cf)′ = c f′.",
          },
        ],
      },
      {
        slug: "c11-mat-limits-exam-edge",
        title: "Exam edge: Limits and Derivatives",
        summary: "What JEE Main, JEE Advanced, KCET and COMEDK ask from limits: ∞/∞ and ∞ − ∞ forms, the 1^∞ form, limits built from the derivative definition and limits with the greatest integer function, all without L'Hôpital's rule.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** Limits are the doorway to Class 12 calculus, and almost every JEE Main paper has a limits question. **KCET** and **COMEDK** ask direct ones: standard limits, $\frac{0}{0}$ by factorising, $\frac{\infty}{\infty}$ by dividing by the highest power, and first-principles derivatives. **JEE Main** adds the $1^\infty$ form, $\infty - \infty$ forms and limits disguised as derivatives. **JEE Advanced** mixes limits with the greatest integer function and series expansions. There is no NEET Maths. Everything below works without L'Hôpital's rule, which is Class 12 material.`,
          },
          {
            type: "text",
            md: t`**Results worth remembering.**

1. $\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\tan x}{x} = 1$; $\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$.

2. $\lim_{x \to 0} \frac{e^x - 1}{x} = 1$; $\lim_{x \to 0} \frac{a^x - 1}{x} = \log_e a$; $\lim_{x \to 0} \frac{\log_e(1 + x)}{x} = 1$; $\lim_{x \to 0} (1 + x)^{1/x} = e$.

3. **∞/∞ (rational, x → ∞):** divide by the highest power of $x$. Equal degrees give the ratio of leading coefficients; a higher degree on the bottom gives 0.

4. **∞ − ∞:** combine into one fraction, or rationalise.

5. **Disguised derivative:** $\lim_{h \to 0} \frac{f(a + ph) - f(a + qh)}{h} = (p - q) f'(a)$ when $f$ is differentiable at $a$.`,
          },
          {
            type: "formula",
            tex: t`\text{If } f(x) \to 1 \text{ and } g(x) \to \infty, \text{ then } \lim f(x)^{g(x)} = e^{\lim\, g(x)\,[f(x) - 1]}`,
            caption: "The 1^∞ shortcut. Check first that the base really tends to 1 and the power to ±∞.",
          },
          {
            type: "example",
            title: "KCET level: ∞/∞ by the highest power",
            problem: t`Evaluate $\lim_{x \to \infty} \dfrac{3x^2 - 5x + 1}{2x^2 + 7}$.`,
            steps: [
              t`Divide top and bottom by $x^2$: $\dfrac{3 - \frac{5}{x} + \frac{1}{x^2}}{2 + \frac{7}{x^2}}$.`,
              t`As $x \to \infty$, every term with $x$ in the denominator tends to 0.`,
              t`The limit is $\dfrac{3}{2}$, the ratio of the leading coefficients.`,
            ],
            answer: t`$\frac{3}{2}$`,
          },
          {
            type: "example",
            title: "JEE Main level: ∞ − ∞ by rationalising",
            problem: t`Evaluate $\lim_{x \to \infty} \left(\sqrt{x^2 + 4x} - x\right)$.`,
            steps: [
              t`Multiply and divide by $\sqrt{x^2 + 4x} + x$: the expression becomes $\dfrac{(x^2 + 4x) - x^2}{\sqrt{x^2 + 4x} + x} = \dfrac{4x}{\sqrt{x^2 + 4x} + x}$.`,
              t`Divide top and bottom by $x$ (positive, so $\sqrt{x^2 + 4x} / x = \sqrt{1 + 4/x}$): $\dfrac{4}{\sqrt{1 + \frac{4}{x}} + 1}$.`,
              t`As $x \to \infty$: $\dfrac{4}{1 + 1} = 2$.`,
            ],
            answer: "2",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\lim_{x \to \infty} \dfrac{2x^3 + x}{5x^3 - 1}$ (decimal).`,
                answer: 0.4,
                tolerance: 0.001,
                explain: t`Equal degrees: ratio of leading coefficients $\frac{2}{5} = 0.4$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: the 1^∞ form",
            problem: t`Evaluate $\lim_{x \to 0} (\cos x)^{1/x^2}$.`,
            steps: [
              t`As $x \to 0$, $\cos x \to 1$ and $\frac{1}{x^2} \to \infty$: a $1^\infty$ form.`,
              t`Shortcut: limit $= e^{L}$ where $L = \lim_{x \to 0} \dfrac{1}{x^2}(\cos x - 1) = -\lim_{x \to 0}\dfrac{1 - \cos x}{x^2}$.`,
              t`$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$, so $L = -\frac{1}{2}$.`,
            ],
            answer: t`$e^{-1/2} = \dfrac{1}{\sqrt{e}}$.`,
          },
          {
            type: "example",
            title: "JEE Main level: a limit that is a derivative",
            problem: t`$f$ is differentiable with $f(2) = 3$ and $f'(2) = 5$. Find $\lim_{h \to 0} \dfrac{f(2 + 3h) - f(2 - h)}{h}$.`,
            steps: [
              t`Add and subtract $f(2)$: $\dfrac{f(2 + 3h) - f(2)}{h} + \dfrac{f(2) - f(2 - h)}{h}$.`,
              t`First part: $3 \cdot \dfrac{f(2 + 3h) - f(2)}{3h} \to 3f'(2)$.`,
              t`Second part: $\dfrac{f(2 - h) - f(2)}{-h} \to f'(2)$.`,
              t`Total: $3f'(2) + f'(2) = 4 \times 5 = 20$. (The value $f(2) = 3$ is not needed.)`,
            ],
            answer: "20",
          },
          {
            type: "example",
            title: "JEE Advanced level: split, then use standard limits",
            problem: t`Evaluate (a) $\lim_{x \to 0} \dfrac{1 - \cos x \cos 2x}{x^2}$ and (b) $\lim_{x \to 0} \left[\dfrac{\sin x}{x}\right]$, where $[\,\cdot\,]$ is the greatest integer function.`,
            steps: [
              t`(a) Write $1 - \cos x \cos 2x = (1 - \cos x) + \cos x\,(1 - \cos 2x)$.`,
              t`So the limit is $\lim \dfrac{1 - \cos x}{x^2} + \lim \cos x \cdot \dfrac{1 - \cos 2x}{x^2} = \dfrac{1}{2} + 1 \cdot 2 = \dfrac{5}{2}$.`,
              t`(b) From the area proof, $\cos x < \frac{\sin x}{x} < 1$ for $0 < |x| < \frac{\pi}{2}$. Near 0, $\cos x > 0$, so $0 < \frac{\sin x}{x} < 1$.`,
              t`Hence $\left[\frac{\sin x}{x}\right] = 0$ for every $x$ near 0 (not equal to 0), on both sides.`,
            ],
            answer: t`(a) $\frac{5}{2}$. (b) 0, not 1.`,
          },
          {
            type: "mistake",
            wrong: t`$\lim_{x \to 0}(1 + 3x)^{1/x}$: the base tends to 1 and $1^{\text{anything}} = 1$, so the limit is 1.`,
            right: t`$1^\infty$ is indeterminate. Using the shortcut, the limit is $e^{\lim \frac{1}{x}(3x)} = e^3$.`,
            why: t`The base is never exactly 1; it is slightly more than 1 and is raised to a huge power. The two effects balance to give $e^{(\text{something})}$, as in $(1 + \frac{1}{n})^n \to e$.`,
          },
          {
            type: "mistake",
            wrong: t`$\lim_{x \to 0}\left[\frac{\tan x}{x}\right] = [1] = 1$ and $\lim_{x \to 0}\left[\frac{\sin x}{x}\right] = [1] = 1$.`,
            right: t`You cannot move a limit inside $[\,\cdot\,]$. Check which side of 1 the inside lies on: $\frac{\sin x}{x} < 1$, giving 0; $\frac{\tan x}{x} > 1$ (since $\tan x > x$ for $0 < |x| < \frac{\pi}{2}$), giving 1.`,
            why: t`The greatest integer function jumps at every integer, so near an integer the answer depends on whether the inside approaches from above or below.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each form indeterminate or not?",
              groups: ["Indeterminate", "Not indeterminate"],
              items: [
                { text: "0 / 0", group: 0, hint: "Both shrink together; the ratio can be anything." },
                { text: "1^∞", group: 0, hint: t`$(1 + x)^{1/x} \to e$, $(1 + 2x)^{1/x} \to e^2$.` },
                { text: "∞ − ∞", group: 0, hint: "Two huge numbers can differ by anything." },
                { text: "0 × ∞", group: 0, hint: "Rewrite as 0/0 or ∞/∞ to decide." },
                { text: "∞ + ∞", group: 1, hint: "Two huge positive numbers add to a huge number: ∞." },
                { text: "0 / ∞", group: 1, hint: "Tiny top, huge bottom: the limit is 0." },
                { text: "(1/2)^∞", group: 1, hint: "A fixed base below 1 raised to a huge power tends to 0." },
              ],
              explain: "A form is indeterminate when knowing the limits of the parts is not enough to know the limit of the whole. Only then do you need algebra or a standard limit.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "When are the shortcuts safe?",
            md: t`The $1^\infty$ rule needs base $\to 1$ **and** power $\to \pm\infty$; if the base tends to 2, there is nothing to do. Replacing $\sin x$ by $x$ is safe only for whole **factors** (as in $\frac{\sin 3x \tan 2x}{x^2} \to 6$); inside a **difference** like $\tan x - \sin x$, it wrongly gives 0. For JEE Advanced, the series $\sin x = x - \frac{x^3}{6} + \cdots$ and $\cos x = 1 - \frac{x^2}{2} + \cdots$ settle such differences.`,
          },
          {
            type: "keypoints",
            items: [
              "Rational ∞/∞: divide by the highest power; equal degrees give the ratio of leading coefficients.",
              "∞ − ∞ with square roots: rationalise.",
              t`$1^\infty$: limit $= e^{\lim g(f - 1)}$.`,
              t`$\lim_{h \to 0} \frac{f(a + ph) - f(a + qh)}{h} = (p - q)f'(a)$.`,
              t`Greatest integer of a limit: decide which side of the integer the inside lies; $[\frac{\sin x}{x}] \to 0$, $[\frac{\tan x}{x}] \to 1$.`,
            ],
          },
        ],
        flashcards: [
          { front: "1^∞ shortcut", back: t`$\lim f^g = e^{\lim g(f - 1)}$ when $f \to 1$, $g \to \infty$.` },
          { front: t`$\lim_{x \to 0}(1 + x)^{1/x}$`, back: "e" },
          { front: t`$\lim_{x \to 0} \frac{e^x - 1}{x}$`, back: "1" },
          { front: t`$\lim_{x \to 0} \frac{a^x - 1}{x}$`, back: t`$\log_e a$` },
          { front: t`$\lim_{x \to 0} \frac{\log_e(1 + x)}{x}$`, back: "1" },
          { front: t`$\lim_{x \to \infty} \frac{p(x)}{q(x)}$ when deg p < deg q`, back: "0" },
          { front: t`$\lim_{h \to 0} \frac{f(a + ph) - f(a + qh)}{h}$`, back: t`$(p - q) f'(a)$` },
          { front: t`$\lim_{x \to 0}\left[\frac{\tan x}{x}\right]$`, back: t`1, because $\frac{\tan x}{x} > 1$ near 0.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to 0} (1 + 2x)^{1/x}$ (to 2 decimal places).`,
            answer: 7.39,
            tolerance: 0.01,
            difficulty: 2,
            explain: t`$1^\infty$ form: $e^{\lim \frac{1}{x}(2x)} = e^2 \approx 7.39$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to \infty} \left(1 + \dfrac{4}{x}\right)^x$ equals`,
            options: ["1", "4", t`$e^4$`, t`$e^{1/4}$`],
            answer: 2,
            explain: t`$e^{\lim x \cdot \frac{4}{x}} = e^4$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\lim_{x \to \infty} \left(\sqrt{x^2 + 6x} - x\right)$.`,
            answer: 3,
            difficulty: 2,
            explain: t`Rationalise: $\dfrac{6x}{\sqrt{x^2 + 6x} + x} = \dfrac{6}{\sqrt{1 + 6/x} + 1} \to 3$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 0} \dfrac{\tan x - \sin x}{x^3}$ equals`,
            options: ["0", "1", t`$\frac{1}{2}$`, t`$\frac{1}{6}$`],
            answer: 2,
            difficulty: 3,
            hint: t`Factor: $\tan x - \sin x = \tan x\,(1 - \cos x)$.`,
            explain: t`$\dfrac{\tan x}{x} \cdot \dfrac{1 - \cos x}{x^2} \to 1 \cdot \dfrac{1}{2}$. Replacing both by $x$ first would wrongly give 0.`,
          },
          {
            kind: "numeric",
            q: t`$f(1) = 2$ and $f'(1) = 3$. Find $\lim_{h \to 0} \dfrac{f(1 + 2h) - f(1)}{h}$.`,
            answer: 6,
            explain: t`$2 \cdot \dfrac{f(1 + 2h) - f(1)}{2h} \to 2f'(1) = 6$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 0}\left[\dfrac{\tan x}{x}\right]$, where $[\,\cdot\,]$ is the greatest integer function, equals`,
            options: ["0", "1", "2", "It does not exist"],
            answer: 1,
            difficulty: 3,
            hint: t`Is $\frac{\tan x}{x}$ a little above 1 or a little below 1?`,
            explain: t`$\tan x > x$ for $0 < x < \frac{\pi}{2}$ and $\frac{\tan x}{x}$ is even, so $1 < \frac{\tan x}{x} < 2$ near 0. Its greatest integer is 1 on both sides.`,
          },
          {
            kind: "multi",
            q: "Which limits equal e?",
            options: [t`$\lim_{x \to 0}(1 + x)^{1/x}$`, t`$\lim_{x \to \infty}\left(1 + \frac{1}{x}\right)^x$`, t`$\lim_{x \to 0}(1 + 2x)^{1/(2x)}$`, t`$\lim_{x \to 0}(1 + x)^{x}$`],
            answers: [0, 1, 2],
            difficulty: 2,
            explain: t`The first three are the standard limit in different clothes. The last is $1^0 = 1$, not an indeterminate form.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{x \to 0} \dfrac{1 - \cos 2x}{x \sin x}$ equals`,
            options: ["1", "2", "4", t`$\frac{1}{2}$`],
            answer: 1,
            explain: t`$\dfrac{2\sin^2 x}{x \sin x} = \dfrac{2\sin x}{x} \to 2$.`,
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Limits and Derivatives": "c11-mat-limits-derivatives",
};
