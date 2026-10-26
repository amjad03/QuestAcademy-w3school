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
            emoji: "🪨",
            caption: t`A stone dropped from a tall building falls $s = 4.9t^2$ metres in $t$ seconds (taking $g = 9.8$ m/s²). How fast is it moving at exactly $t = 2$ s?`,
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
  /* ------------------------------------------------------------------ */
  /* Class 11: Statistics (NCERT, Karnataka I PUC, ISC)                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-mat-statistics",
    title: "Statistics (Class 11)",
    icon: "📊",
    description: "Measures of dispersion: range, mean deviation about the mean and the median, variance and standard deviation for ungrouped, discrete and continuous data, and the coefficient of variation.",
    lessons: [
      {
        slug: "c11-mat-mean-deviation",
        title: "Dispersion, Range and Mean Deviation",
        summary: "Why an average is not enough, the range, and mean deviation about the mean and about the median for ungrouped, discrete and continuous data.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏏",
            caption: "Two batters both average 40 runs. One scores 38, 41, 40, 42, 39; the other scores 0, 95, 5, 90, 10. The averages match, but the batters are very different.",
          },
          {
            type: "text",
            md: t`Mean, median and mode tell us where the data is **centred**. They say nothing about how **spread out** it is. The spread of data around a central value is called **dispersion** (or variability). Measures of dispersion in this chapter: the **range**, the **mean deviation** and the **standard deviation** (with its square, the **variance**).

The simplest measure is the **range** $=$ maximum value $-$ minimum value. For the second batter above, the range is $95 - 0 = 95$; for the first, $42 - 38 = 4$. But the range uses only two values and ignores everything in between.`,
          },
          {
            type: "text",
            md: t`A better idea: measure how far **each** value is from a central value $a$. The deviations $x_i - a$ are positive and negative, and about the mean they always add up to 0: $\sum (x_i - \bar{x}) = 0$. So we take **absolute values**. The **mean deviation about $a$** is the mean of the absolute deviations $|x_i - a|$. We usually take $a$ = the mean $\bar{x}$ or the median $M$.`,
          },
          {
            type: "formula",
            tex: t`\text{M.D.}(a) = \frac{1}{n}\sum_{i=1}^{n} |x_i - a| \quad\text{(ungrouped)}, \qquad \text{M.D.}(a) = \frac{1}{N}\sum_{i=1}^{n} f_i\,|x_i - a|,\ \ N = \sum f_i \quad\text{(frequency data)}`,
            caption: "For continuous (class-interval) data, x_i is the mid-point of each class.",
          },
          {
            type: "example",
            title: "Ungrouped data: about the mean",
            problem: "Find the mean deviation about the mean of 4, 7, 8, 9, 10, 12, 13, 17.",
            steps: [
              t`Mean: $\bar{x} = \frac{80}{8} = 10$.`,
              t`Absolute deviations $|x_i - 10|$: 6, 3, 2, 1, 0, 2, 3, 7. Their sum is 24.`,
              t`M.D.$(\bar{x}) = \frac{24}{8} = 3$.`,
            ],
            answer: "3",
          },
          {
            type: "example",
            title: "Ungrouped data: about the median",
            problem: "Find the mean deviation about the median of 3, 9, 5, 3, 12, 10, 18, 4, 7, 19, 21.",
            steps: [
              "Arrange in order: 3, 3, 4, 5, 7, 9, 10, 12, 18, 19, 21. There are 11 values, so the median is the 6th value: M = 9.",
              t`$|x_i - 9|$: 6, 6, 5, 4, 2, 0, 1, 3, 9, 10, 12. Sum $= 58$.`,
              t`M.D.$(M) = \frac{58}{11} \approx 5.27$.`,
            ],
            answer: "About 5.27",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the mean deviation about the mean of 2, 4, 6, 8, 10.",
                answer: 2.4,
                tolerance: 0.001,
                explain: t`Mean 6; deviations 4, 2, 0, 2, 4 add to 12; $\frac{12}{5} = 2.4$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Discrete frequency data: about the mean",
            problem: t`Find the mean deviation about the mean: $x$: 2, 5, 6, 8, 10 with frequencies $f$: 4, 6, 5, 3, 2.`,
            steps: [
              t`$N = 20$ and $\sum f_i x_i = 8 + 30 + 30 + 24 + 20 = 112$, so $\bar{x} = \frac{112}{20} = 5.6$.`,
              t`$|x_i - 5.6|$: 3.6, 0.6, 0.4, 2.4, 4.4.`,
              t`$f_i|x_i - 5.6|$: 14.4, 3.6, 2.0, 7.2, 8.8. Sum $= 36$.`,
              t`M.D.$(\bar{x}) = \frac{36}{20} = 1.8$.`,
            ],
            answer: "1.8",
          },
          {
            type: "example",
            title: "Continuous data: about the median",
            problem: "Find the mean deviation about the median. Classes 0–10, 10–20, 20–30, 30–40, 40–50 with frequencies 5, 8, 15, 7, 5.",
            steps: [
              t`Cumulative frequencies: 5, 13, 28, 35, 40. $N = 40$, $\frac{N}{2} = 20$, so the median class is 20–30 (first c.f. $\ge 20$).`,
              t`Median $M = l + \dfrac{\frac{N}{2} - C}{f} \times h = 20 + \dfrac{20 - 13}{15} \times 10 = 20 + 4.67 = 24.67$ (exactly $\frac{74}{3}$).`,
              t`Mid-points 5, 15, 25, 35, 45; $|x_i - M|$: 19.67, 9.67, 0.33, 10.33, 20.33.`,
              t`$f_i|x_i - M|$: 98.33, 77.33, 5.00, 72.33, 101.67. Sum $= 354.67$ (exactly $\frac{1064}{3}$).`,
              t`M.D.$(M) = \frac{354.67}{40} \approx 8.87$.`,
            ],
            answer: "About 8.87",
          },
          {
            type: "mistake",
            wrong: t`Mean deviation about the mean $= \frac{1}{n}\sum (x_i - \bar{x})$. For 2, 4, 6, 8, 10 this is $\frac{-4 - 2 + 0 + 2 + 4}{5} = 0$, so there is no spread.`,
            right: t`Use **absolute** deviations: $\frac{1}{n}\sum |x_i - \bar{x}| = \frac{4 + 2 + 0 + 2 + 4}{5} = 2.4$.`,
            why: t`Deviations above the mean exactly cancel those below it, so $\sum (x_i - \bar{x}) = 0$ for every data set. Only the size of each deviation measures spread.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps for M.D. about the median (classes).",
              items: [
                "Write cumulative frequencies and find N/2",
                "Locate the median class and compute M = l + (N/2 − C) h / f",
                "Find the mid-point x of each class",
                "Compute |x − M| and multiply by f",
                "Divide the total by N",
              ],
              explain: "The median comes from the cumulative frequency column; the deviations are always measured from the class mid-points.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Limitations of mean deviation",
            md: t`Mean deviation is easy to understand, but the absolute value $|x_i - a|$ is awkward in algebra, so it is hard to combine two groups or prove general results. Mean deviation about the **median** is the smallest of all mean deviations, but the median itself can be a poor representative when data varies a lot. These limits lead us to the standard deviation.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Mean deviation questions carry 4–5 marks and are marked on the **table**. Use columns: x, f, fx (or c.f.), |x − a|, f|x − a|. Show the mean or median calculation separately, keep two decimal places all the way, and write the formula before substituting. In class-interval data, the most common slip is using class limits instead of mid-points.",
          },
          {
            type: "keypoints",
            items: [
              "Dispersion = spread of data about a central value. Range = max − min.",
              t`$\sum (x_i - \bar{x}) = 0$ always, so mean deviation uses absolute values.`,
              t`M.D.$(a) = \frac{1}{N}\sum f_i|x_i - a|$, with $a = \bar{x}$ or $M$; class data uses mid-points.`,
              "Mean deviation is least when taken about the median.",
            ],
          },
        ],
        flashcards: [
          { front: "Dispersion", back: "The spread or scatter of data values about a central value." },
          { front: "Range", back: "Maximum value − minimum value." },
          { front: t`$\sum (x_i - \bar{x})$`, back: "Always 0, for any data." },
          { front: "Mean deviation about a (ungrouped)", back: t`$\frac{1}{n}\sum |x_i - a|$` },
          { front: "Mean deviation about a (frequency data)", back: t`$\frac{1}{N}\sum f_i|x_i - a|$, $N = \sum f_i$` },
          { front: "Median of continuous data", back: t`$M = l + \dfrac{\frac{N}{2} - C}{f} \times h$ (C = c.f. before the median class).` },
          { front: "About which value is mean deviation least?", back: "The median." },
          { front: "x_i for class-interval data", back: "The class mid-point (class mark)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the range of 23, 7, 41, 15, 30.",
            answer: 34,
            explain: t`$41 - 7 = 34$.`,
          },
          {
            kind: "numeric",
            q: "Find the mean deviation about the mean of 1, 3, 5, 7, 9, 11.",
            answer: 3,
            explain: t`Mean $= 6$; deviations 5, 3, 1, 1, 3, 5 add to 18; $\frac{18}{6} = 3$.`,
          },
          {
            kind: "numeric",
            q: "Find the mean deviation about the median of 10, 2, 8, 6, 4.",
            answer: 2.4,
            tolerance: 0.001,
            explain: t`In order: 2, 4, 6, 8, 10; median 6. Deviations 4, 2, 0, 2, 4 add to 12; $\frac{12}{5} = 2.4$.`,
          },
          {
            kind: "truefalse",
            q: t`For any data, $\sum (x_i - \bar{x}) = 0$.`,
            answer: true,
            explain: t`$\sum x_i - n\bar{x} = n\bar{x} - n\bar{x} = 0$.`,
          },
          {
            kind: "mcq",
            q: "The mean deviation of a data set is smallest when it is taken about the",
            options: ["mean", "median", "mode", "largest value"],
            answer: 1,
            explain: "Among all values a, the sum of |x − a| is least when a is the median.",
          },
          {
            kind: "mcq",
            q: t`In the formula $\frac{1}{N}\sum f_i|x_i - \bar{x}|$ for class-interval data, $x_i$ is the`,
            options: ["upper class limit", "lower class limit", "class mid-point", "cumulative frequency"],
            answer: 2,
            explain: "Each class is represented by its mid-point.",
          },
          {
            kind: "numeric",
            q: t`Values $x$: 1, 2, 3 with frequencies 2, 6, 2. Find the mean deviation about the mean.`,
            answer: 0.4,
            tolerance: 0.001,
            difficulty: 2,
            explain: t`Mean $= \frac{2 + 12 + 6}{10} = 2$. $\sum f|x - 2| = 2(1) + 6(0) + 2(1) = 4$; $\frac{4}{10} = 0.4$.`,
          },
          {
            kind: "mcq",
            q: "If 5 is added to every observation, the mean deviation about the mean",
            options: ["increases by 5", "is unchanged", "is multiplied by 5", "decreases by 5"],
            answer: 1,
            difficulty: 2,
            explain: "The mean also rises by 5, so every deviation x − x̄ is unchanged.",
          },
        ],
      },
      {
        slug: "c11-mat-variance-sd",
        title: "Variance and Standard Deviation",
        summary: "Variance and standard deviation for ungrouped, discrete and continuous data, the computational formula, and the step-deviation (shortcut) method.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Mean deviation removes signs with absolute values. A neater way is to **square** the deviations: squares are never negative, and they behave well in algebra.

The **variance** $\sigma^2$ is the mean of the squared deviations from the mean. The **standard deviation** $\sigma$ is the positive square root of the variance. $\sigma$ is in the **same unit** as the data (cm, ₹, runs); $\sigma^2$ is in square units. NCERT divides by $n$ (the number of observations).`,
          },
          {
            type: "formula",
            tex: t`\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2 = \frac{1}{n}\sum x_i^2 - \bar{x}^{\,2}, \qquad \sigma = \sqrt{\sigma^2}`,
            caption: "Ungrouped data. The second form ('mean of squares minus square of mean') avoids decimals in the deviations.",
          },
          {
            type: "example",
            title: "Ungrouped data, both ways",
            problem: "Find the variance and standard deviation of 6, 8, 10, 12, 14.",
            steps: [
              t`Mean: $\bar{x} = \frac{50}{5} = 10$. Deviations: $-4, -2, 0, 2, 4$; squares 16, 4, 0, 4, 16. Sum $= 40$.`,
              t`$\sigma^2 = \frac{40}{5} = 8$.`,
              t`Check with the second form: $\sum x_i^2 = 36 + 64 + 100 + 144 + 196 = 540$; $\frac{540}{5} - 10^2 = 108 - 100 = 8$.`,
              t`$\sigma = \sqrt{8} = 2\sqrt{2} \approx 2.83$.`,
            ],
            answer: t`Variance 8; standard deviation $2\sqrt{2} \approx 2.83$.`,
          },
          {
            type: "formula",
            tex: t`\sigma^2 = \frac{1}{N}\sum f_i (x_i - \bar{x})^2 = \frac{1}{N^2}\left[N\sum f_i x_i^2 - \left(\sum f_i x_i\right)^2\right]`,
            caption: "Discrete and continuous frequency data (x_i = mid-points for classes), N = Σ f_i.",
          },
          {
            type: "example",
            title: "Discrete frequency data",
            problem: t`Find the variance and standard deviation: $x$: 2, 4, 6, 8, 10 with $f$: 1, 4, 6, 4, 1.`,
            steps: [
              t`$N = 16$, $\sum f_i x_i = 2 + 16 + 36 + 32 + 10 = 96$, so $\bar{x} = 6$.`,
              t`$(x_i - 6)^2$: 16, 4, 0, 4, 16. Times $f_i$: 16, 16, 0, 16, 16. Sum $= 64$.`,
              t`$\sigma^2 = \frac{64}{16} = 4$, so $\sigma = 2$.`,
            ],
            answer: "Variance 4; standard deviation 2.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the variance of 1, 2, 3, 4, 5.",
                answer: 2,
                explain: t`Mean 3; squared deviations 4, 1, 0, 1, 4 add to 10; $\frac{10}{5} = 2$.`,
              },
              {
                kind: "truefalse",
                q: "If all observations are equal, the standard deviation is 0.",
                answer: true,
                explain: "Every deviation from the mean is 0, so the variance and SD are 0.",
              },
            ],
          },
          {
            type: "text",
            md: t`**Shortcut (step-deviation) method.** With large mid-points, choose an **assumed mean** $A$ (a central mid-point) and the class width $h$, and put $y_i = \dfrac{x_i - A}{h}$. The $y_i$ are small integers. Then $\bar{x} = A + h\,\bar{y}$ and $\sigma_x = h\,\sigma_y$: shifting the origin does not change the spread, and scaling by $h$ multiplies the SD by $h$ (the variance by $h^2$).`,
          },
          {
            type: "formula",
            tex: t`\sigma_x^2 = h^2\left[\frac{\sum f_i y_i^2}{N} - \left(\frac{\sum f_i y_i}{N}\right)^2\right], \qquad y_i = \frac{x_i - A}{h}`,
            caption: "Step-deviation formula for variance.",
          },
          {
            type: "example",
            title: "Continuous data by step deviation",
            problem: "Find the mean, variance and SD. Classes 0–10, 10–20, 20–30, 30–40, 40–50 with frequencies 4, 6, 10, 6, 4.",
            steps: [
              t`Mid-points 5, 15, 25, 35, 45. Take $A = 25$, $h = 10$: $y_i = -2, -1, 0, 1, 2$.`,
              t`$N = 30$; $\sum f_i y_i = -8 - 6 + 0 + 6 + 8 = 0$, so $\bar{x} = 25 + 10 \times 0 = 25$.`,
              t`$\sum f_i y_i^2 = 16 + 6 + 0 + 6 + 16 = 44$.`,
              t`$\sigma^2 = 10^2\left[\frac{44}{30} - 0^2\right] = \frac{4400}{30} \approx 146.67$; $\sigma \approx 12.11$.`,
            ],
            answer: "Mean 25; variance ≈ 146.67; SD ≈ 12.11.",
          },
          {
            type: "mistake",
            wrong: t`With $y = \frac{x - A}{h}$, the variance of $x$ is $h \times$ (variance of $y$), and $A$ must be added back.`,
            right: t`$\sigma_x^2 = h^2\,\sigma_y^2$ and $\sigma_x = h\,\sigma_y$. The assumed mean $A$ is added back **only** to the mean, never to the variance or SD.`,
            why: t`Variance is built from **squared** deviations, so a scale factor $h$ appears squared. Adding a constant moves every value and the mean together, so the deviations do not change.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Add 10 to every observation. What happens to the variance?",
              emoji: "➕",
              options: ["It increases by 10", "It increases by 100", "It does not change", "It is multiplied by 10"],
              answer: 2,
              trap: 0,
              explain: "The mean also increases by 10, so every deviation from the mean stays the same. Variance and SD measure spread, not position.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`State the method you use. In the step-deviation table, use columns x, f, y, fy, fy², and do not forget the factor $h^2$ at the end. Give the SD to two decimal places, and check: the SD cannot exceed half the range, and it cannot be negative. Rationalised NCERT focuses on the direct formulas; the shortcut method is still the fastest way to handle mid-points like 125, 135, … and is accepted in every board.`,
          },
          {
            type: "keypoints",
            items: [
              t`Variance $\sigma^2 = \frac{1}{N}\sum f_i (x_i - \bar{x})^2$; SD $\sigma = \sqrt{\sigma^2}$.`,
              t`Computational form: $\sigma^2 = \frac{\sum f_i x_i^2}{N} - \bar{x}^2$ (mean of squares minus square of mean).`,
              t`Step deviation: $y = \frac{x - A}{h}$, $\bar{x} = A + h\bar{y}$, $\sigma_x = h\sigma_y$.`,
              "SD has the unit of the data; variance has square units; both are ≥ 0.",
              "Adding a constant does not change variance or SD.",
            ],
          },
        ],
        flashcards: [
          { front: "Variance (ungrouped)", back: t`$\sigma^2 = \frac{1}{n}\sum (x_i - \bar{x})^2$` },
          { front: "Standard deviation", back: "The positive square root of the variance." },
          { front: "Computational formula for variance", back: t`$\frac{1}{n}\sum x_i^2 - \bar{x}^2$` },
          { front: "Variance of frequency data", back: t`$\frac{1}{N^2}\left[N\sum f_i x_i^2 - (\sum f_i x_i)^2\right]$` },
          { front: t`If $y = \frac{x - A}{h}$, then $\sigma_x =$`, back: t`$h\,\sigma_y$ (and $\sigma_x^2 = h^2 \sigma_y^2$).` },
          { front: "Unit of the standard deviation", back: "The same as the unit of the data." },
          { front: "SD of 7, 7, 7, 7", back: "0" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the variance of 2, 4, 6, 8, 10.",
            answer: 8,
            explain: t`Mean 6; squared deviations 16, 4, 0, 4, 16 add to 40; $\frac{40}{5} = 8$.`,
          },
          {
            kind: "numeric",
            q: t`For 10 observations, $\sum x_i = 60$ and $\sum x_i^2 = 440$. Find the variance.`,
            answer: 8,
            difficulty: 2,
            explain: t`$\bar{x} = 6$; $\sigma^2 = \frac{440}{10} - 36 = 8$.`,
          },
          {
            kind: "mcq",
            q: "The standard deviation of a data set is 4. Its variance is",
            options: ["2", "8", "16", "4"],
            answer: 2,
            explain: t`$\sigma^2 = 4^2 = 16$.`,
          },
          {
            kind: "mcq",
            q: t`$y = \frac{x - 30}{5}$ and $\sigma_y = 2$. Then $\sigma_x$ is`,
            options: ["2", "10", "40", "32"],
            answer: 1,
            explain: t`$\sigma_x = h\sigma_y = 5 \times 2 = 10$. The 30 does not affect spread.`,
          },
          {
            kind: "truefalse",
            q: "The variance of a data set can be negative.",
            answer: false,
            explain: "Variance is a mean of squares, so it is at least 0.",
          },
          {
            kind: "numeric",
            q: t`$x$: 0, 1, 2 with frequencies 1, 2, 1. Find the variance.`,
            answer: 0.5,
            tolerance: 0.001,
            explain: t`Mean $= \frac{0 + 2 + 2}{4} = 1$; $\sum f(x - 1)^2 = 1 + 0 + 1 = 2$; $\frac{2}{4} = 0.5$.`,
          },
          {
            kind: "multi",
            q: "Which statements are true?",
            options: [
              "The SD has the same unit as the data.",
              "The variance is never negative.",
              "Multiplying every value by 3 leaves the SD unchanged.",
              "Variance = mean of the squares − square of the mean.",
            ],
            answers: [0, 1, 3],
            difficulty: 2,
            explain: "Multiplying every value by 3 multiplies the SD by 3 (and the variance by 9).",
          },
          {
            kind: "numeric",
            q: t`Classes 10–20, 20–30, 30–40 have frequencies 2, 6, 2. Using $A = 25$ and $h = 10$, find the variance.`,
            answer: 40,
            difficulty: 2,
            hint: t`$y$ = −1, 0, 1.`,
            explain: t`$\sum fy = -2 + 0 + 2 = 0$, $\sum fy^2 = 2 + 0 + 2 = 4$, $N = 10$. $\sigma^2 = 10^2\left(\frac{4}{10} - 0^2\right) = 40$.`,
          },
        ],
      },
      {
        slug: "c11-mat-coefficient-variation",
        title: "Coefficient of Variation and Comparing Distributions",
        summary: "The coefficient of variation, comparing the consistency of two distributions, the effect of change of origin and scale, and problems on missing or wrongly copied observations.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "⚖️",
            caption: "A tea stall in Mysuru sells about 300 cups a day, give or take 30. A sweet shop in Kolkata earns about ₹20,000 a day, give or take ₹1,500. Which business is steadier? The numbers are in different units and sizes.",
          },
          {
            type: "text",
            md: t`The standard deviation measures spread in the units of the data. To compare two distributions with **different means** or **different units**, we compare the spread **relative to the mean**. The **coefficient of variation** (C.V.) is the SD as a percentage of the mean. It has **no unit**.

The distribution with the **greater C.V.** is **more variable** (less consistent, less stable); the one with the smaller C.V. is more consistent. When two distributions have the **same mean**, comparing C.V. is the same as comparing SDs.`,
          },
          {
            type: "formula",
            tex: t`\text{C.V.} = \frac{\sigma}{\bar{x}} \times 100, \qquad \bar{x} \neq 0`,
            caption: "Coefficient of variation (a percentage).",
          },
          {
            type: "example",
            title: "Which batter is more consistent?",
            problem: "Over a season, batter A has mean score 60 with SD 18; batter B has mean 35 with SD 14. Who is more consistent?",
            steps: [
              t`C.V.(A) $= \frac{18}{60} \times 100 = 30$.`,
              t`C.V.(B) $= \frac{14}{35} \times 100 = 40$.`,
              "A has the smaller C.V., so A's scores vary less relative to the average, even though A's SD is larger.",
            ],
            answer: "Batter A is more consistent (C.V. 30 against 40).",
          },
          {
            type: "example",
            title: "Different units",
            problem: "In a class, heights have mean 160 cm and SD 8 cm; weights have mean 50 kg and SD 6 kg. Which shows more variation?",
            steps: [
              t`The SDs (8 cm and 6 kg) cannot be compared directly: different units.`,
              t`C.V.(height) $= \frac{8}{160} \times 100 = 5$; C.V.(weight) $= \frac{6}{50} \times 100 = 12$.`,
            ],
            answer: "Weights vary more (C.V. 12 against 5).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A distribution has mean 40 and SD 6. Find its coefficient of variation.",
                answer: 15,
                explain: t`$\frac{6}{40} \times 100 = 15$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Change of origin and scale.** If every observation is changed by $y_i = a x_i + b$ ($a$, $b$ constants), then the mean changes the same way, but the spread feels only the scale $a$. Adding $b$ shifts all values together; multiplying by $a$ stretches the gaps by $|a|$. These facts check answers quickly and power many exam questions.`,
          },
          {
            type: "formula",
            tex: t`y = ax + b \ \Longrightarrow\ \bar{y} = a\bar{x} + b,\quad \sigma_y = |a|\,\sigma_x,\quad \sigma_y^2 = a^2\sigma_x^2,\quad \text{M.D.}_y = |a|\,\text{M.D.}_x`,
            caption: "Mean follows the change; spread ignores b and scales by |a|.",
          },
          {
            type: "example",
            title: "Correcting a wrongly copied value",
            problem: "The mean and SD of 20 observations are 10 and 2. Later it is found that one observation, 8, was copied as 12. Find the correct mean and SD.",
            steps: [
              t`Wrong $\sum x = 20 \times 10 = 200$. Correct $\sum x = 200 - 12 + 8 = 196$, so correct mean $= 9.8$.`,
              t`From $\sigma^2 = \frac{\sum x^2}{n} - \bar{x}^2$: wrong $\sum x^2 = 20(4 + 100) = 2080$.`,
              t`Correct $\sum x^2 = 2080 - 12^2 + 8^2 = 2080 - 144 + 64 = 2000$.`,
              t`Correct $\sigma^2 = \frac{2000}{20} - 9.8^2 = 100 - 96.04 = 3.96$, so $\sigma = \sqrt{3.96} \approx 1.99$.`,
            ],
            answer: "Correct mean 9.8; correct SD ≈ 1.99.",
          },
          {
            type: "example",
            title: "Finding two missing observations",
            problem: "Five observations have mean 6 and variance 9.2. Three of them are 2, 5 and 9. Find the other two.",
            steps: [
              t`Let the others be $a$ and $b$. Sum: $2 + 5 + 9 + a + b = 30$, so $a + b = 14$.`,
              t`$\sum x^2 = 5(\sigma^2 + \bar{x}^2) = 5(9.2 + 36) = 226$. So $4 + 25 + 81 + a^2 + b^2 = 226$ and $a^2 + b^2 = 116$.`,
              t`$2ab = (a + b)^2 - (a^2 + b^2) = 196 - 116 = 80$, so $ab = 40$.`,
              t`$a$ and $b$ are roots of $t^2 - 14t + 40 = 0$, that is $(t - 4)(t - 10) = 0$.`,
            ],
            answer: "The missing observations are 4 and 10.",
          },
          {
            type: "mistake",
            wrong: "Series A has SD 12 and series B has SD 9, so A is always the more variable series.",
            right: "Compare SDs directly only when the means (and units) are the same. Otherwise compare coefficients of variation: if A has mean 120 (C.V. 10) and B has mean 45 (C.V. 20), B is more variable.",
            why: "An SD of 12 is large for values near 20 but tiny for values near 1000. Variability must be judged relative to the size of the values.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does this change the standard deviation?",
              groups: ["SD changes", "SD stays the same"],
              items: [
                { text: "Add 5 to every value", group: 1, hint: "A shift moves the mean too; gaps do not change." },
                { text: "Multiply every value by 2", group: 0, hint: "All gaps double, so the SD doubles." },
                { text: "Subtract the mean from every value", group: 1, hint: "This is a shift by a constant." },
                { text: "Divide every value by 4", group: 0, hint: "The SD is divided by 4." },
                { text: "Write the values in reverse order", group: 1, hint: "The same values give the same SD." },
                { text: "Replace every x by 10 − x", group: 1, hint: "Here a = −1, and |a| = 1." },
              ],
              explain: t`For $y = ax + b$, $\sigma_y = |a|\sigma_x$: only the scale factor matters, and its sign does not.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: t`In "which is more consistent" questions, show both C.V. values and finish with a sentence naming the series and the reason ("smaller C.V., hence more consistent"). In correction problems, recompute **both** $\sum x$ and $\sum x^2$ before finding the new mean and SD; marks are given for each of these steps.`,
          },
          {
            type: "keypoints",
            items: [
              t`C.V. $= \frac{\sigma}{\bar{x}} \times 100$, a pure number.`,
              "Greater C.V. means more variability, less consistency.",
              "Same means: comparing SDs is enough.",
              t`$y = ax + b$: $\bar{y} = a\bar{x} + b$, $\sigma_y = |a|\sigma_x$.`,
              t`Correcting data: fix $\sum x$ and $\sum x^2$ first, using $\sum x^2 = n(\sigma^2 + \bar{x}^2)$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Coefficient of variation", back: t`$\frac{\sigma}{\bar{x}} \times 100$` },
          { front: "Greater C.V. means…", back: "more variability, less consistency." },
          { front: "Unit of C.V.", back: "None: it is a pure number (a percentage)." },
          { front: t`If $y = ax + b$, then $\sigma_y =$`, back: t`$|a|\,\sigma_x$` },
          { front: t`If $y = ax + b$, then $\bar{y} =$`, back: t`$a\bar{x} + b$` },
          { front: t`$\sum x^2$ from $n$, $\bar{x}$ and $\sigma$`, back: t`$n(\sigma^2 + \bar{x}^2)$` },
          { front: "When can SDs be compared directly?", back: "When the two distributions have the same mean and unit." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Mean 25, SD 5. Find the coefficient of variation.",
            answer: 20,
            explain: t`$\frac{5}{25} \times 100 = 20$.`,
          },
          {
            kind: "mcq",
            q: "Series A has C.V. 18 and series B has C.V. 24. Which statement is correct?",
            options: ["A is more consistent", "B is more consistent", "Both are equally consistent", "It cannot be decided without the means"],
            answer: 0,
            explain: "Smaller C.V. means more consistent.",
          },
          {
            kind: "numeric",
            q: "A distribution has mean 20 and coefficient of variation 15. Find its SD.",
            answer: 3,
            explain: t`$\sigma = \frac{15 \times 20}{100} = 3$.`,
          },
          {
            kind: "mcq",
            q: t`$\sigma_x = 2$ and $y = 3x - 4$. Then $\sigma_y$ is`,
            options: ["2", "6", "12", "−6"],
            answer: 1,
            explain: t`$\sigma_y = |3| \times 2 = 6$; the $-4$ has no effect.`,
          },
          {
            kind: "numeric",
            q: t`Variance of $x$ is 5 and $y = -2x + 7$. Find the variance of $y$.`,
            answer: 20,
            difficulty: 2,
            explain: t`$\sigma_y^2 = (-2)^2 \times 5 = 20$.`,
          },
          {
            kind: "numeric",
            q: "The mean of 10 observations is 15. One value, 25, was copied as 52. Find the correct mean.",
            answer: 12.3,
            tolerance: 0.001,
            difficulty: 2,
            explain: t`Correct $\sum x = 150 - 52 + 25 = 123$; mean $= 12.3$.`,
          },
          {
            kind: "truefalse",
            q: "The coefficient of variation has the same unit as the data.",
            answer: false,
            explain: "It is SD divided by the mean, so the units cancel.",
          },
          {
            kind: "multi",
            q: "Every observation is multiplied by −1. Which statements are true?",
            options: [t`The mean becomes $-\bar{x}$`, t`The SD becomes $-\sigma$`, "The variance is unchanged", "The range is unchanged"],
            answers: [0, 2, 3],
            difficulty: 2,
            explain: t`$\sigma_y = |-1|\sigma_x = \sigma_x$; an SD is never negative. The largest and smallest values swap and change sign, so the range is the same.`,
          },
        ],
      },
      {
        slug: "c11-mat-statistics-exam-edge",
        title: "Exam edge: Statistics",
        summary: "What JEE Main, KCET and COMEDK ask from statistics: variance of natural numbers and APs, combined mean and variance, coded sums, mean deviation of patterned data and bounds on the SD.",
        minutes: 22,
        xp: 55,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** **KCET** and **COMEDK** ask direct calculations: mean deviation, variance from sums, C.V. comparisons and the effect of $ax + b$. **JEE Main** almost always has a question on mean and variance: missing or wrongly copied observations, combined groups, coded sums like $\sum (x_i - 5)$, and patterned data such as $a, 2a, \ldots, na$. JEE Advanced asks statistics rarely, mostly as bounds or as a part of probability. Speed comes from a few standard results.`,
          },
          {
            type: "text",
            md: t`**Results worth remembering.**

1. First $n$ natural numbers: mean $\frac{n + 1}{2}$, variance $\frac{n^2 - 1}{12}$.

2. An AP of $n$ terms with common difference $d$: variance $\frac{d^2(n^2 - 1)}{12}$ (shift and scale of $1, 2, \ldots, n$).

3. Two numbers $a, b$: mean $\frac{a + b}{2}$, SD $\frac{|a - b|}{2}$.

4. Coded sums: if $\sum (x_i - c) = S_1$ and $\sum (x_i - c)^2 = S_2$, then $\bar{x} = c + \frac{S_1}{n}$ and $\sigma^2 = \frac{S_2}{n} - \left(\frac{S_1}{n}\right)^2$.

5. Bound: if every value lies in $[m, M]$, then $\sigma \le \frac{M - m}{2}$.`,
          },
          {
            type: "formula",
            tex: t`\sigma^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}, \qquad d_i = \bar{x}_i - \bar{x}, \quad \bar{x} = \frac{n_1\bar{x}_1 + n_2\bar{x}_2}{n_1 + n_2}`,
            caption: "Combined variance of two groups. Safe only when both group variances use the same (divide-by-n) definition.",
          },
          {
            type: "example",
            title: "KCET level: natural numbers",
            problem: "(a) Find the variance of the first 10 natural numbers. (b) The variance of the first n natural numbers is 10. Find n.",
            steps: [
              t`(a) $\frac{n^2 - 1}{12} = \frac{100 - 1}{12} = \frac{99}{12} = 8.25$.`,
              t`(b) $\frac{n^2 - 1}{12} = 10$ gives $n^2 = 121$, so $n = 11$.`,
            ],
            answer: "(a) 8.25. (b) n = 11.",
          },
          {
            type: "example",
            title: "JEE Main level: combining two groups",
            problem: "Group 1 has 10 observations with mean 12 and variance 4. Group 2 has 15 observations with mean 17 and variance 9. Find the mean and variance of all 25 together.",
            steps: [
              t`Combined mean $= \frac{10(12) + 15(17)}{25} = \frac{120 + 255}{25} = 15$.`,
              t`$d_1 = 12 - 15 = -3$, $d_2 = 17 - 15 = 2$.`,
              t`$\sigma^2 = \frac{10(4 + 9) + 15(9 + 4)}{25} = \frac{130 + 195}{25} = 13$.`,
            ],
            answer: "Mean 15, variance 13.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the standard deviation of the two numbers 3 and 7.",
                answer: 2,
                explain: t`$\frac{|7 - 3|}{2} = 2$. (Mean 5; deviations ±2.)`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: coded sums",
            problem: t`For 10 observations, $\sum (x_i - 5) = 10$ and $\sum (x_i - 5)^2 = 40$. Find the mean and variance.`,
            steps: [
              t`Let $u_i = x_i - 5$. Then $\bar{u} = \frac{10}{10} = 1$, so $\bar{x} = 5 + 1 = 6$.`,
              t`$\sigma_u^2 = \frac{40}{10} - 1^2 = 3$.`,
              t`Shifting by 5 does not change variance: $\sigma_x^2 = 3$.`,
            ],
            answer: "Mean 6, variance 3.",
          },
          {
            type: "example",
            title: "JEE Main level: patterned data",
            problem: t`The mean deviation about the median of $a, 2a, 3a, \ldots, 20a$ is 30. Find $|a|$.`,
            steps: [
              t`Take $a > 0$ (for $a < 0$ the order reverses but the deviations are the same in size). 20 values: median $= \frac{10a + 11a}{2} = 10.5a$.`,
              t`Deviations $|k - 10.5|\,a$ for $k = 1, \ldots, 20$: the numbers $9.5, 8.5, \ldots, 0.5$ appear twice.`,
              t`$0.5 + 1.5 + \cdots + 9.5 = 50$ (10 terms, average 5), so the total is $100a$.`,
              t`M.D. $= \frac{100a}{20} = 5a = 30$, so $a = 6$.`,
            ],
            answer: "|a| = 6",
          },
          {
            type: "example",
            title: "JEE Advanced level: the largest possible SD",
            problem: "Ten observations all lie between 2 and 10 (inclusive). What is the greatest possible standard deviation, and when is it reached?",
            steps: [
              t`For any constant $c$: $\sigma^2 = \frac{1}{n}\sum (x_i - c)^2 - (\bar{x} - c)^2$. Take $c = 6$, the middle of $[2, 10]$.`,
              t`Each $|x_i - 6| \le 4$, so $\frac{1}{n}\sum (x_i - 6)^2 \le 16$, and $(\bar{x} - 6)^2 \ge 0$. Hence $\sigma^2 \le 16$, $\sigma \le 4$.`,
              t`Equality needs every $|x_i - 6| = 4$ (each value is 2 or 10) and $\bar{x} = 6$: five 2s and five 10s. Check: mean 6, every deviation ±4, $\sigma = 4$.`,
            ],
            answer: "The greatest SD is 4, with five values equal to 2 and five equal to 10.",
          },
          {
            type: "mistake",
            wrong: t`Variance $= \frac{1}{n - 1}\sum (x_i - \bar{x})^2$, as on a calculator's "sample SD" key.`,
            right: t`NCERT, the boards, JEE and KCET use $\sigma^2 = \frac{1}{n}\sum (x_i - \bar{x})^2$. The $n - 1$ version is the sample variance from higher statistics.`,
            why: t`Many calculators and spreadsheets default to dividing by $n - 1$. For small data sets the two answers differ a lot, and options are set with the $\frac{1}{n}$ value.`,
          },
          {
            type: "mistake",
            wrong: "After correcting a wrong observation, keep the old Σx² and only use the new mean in the variance formula.",
            right: t`Correct **both** sums: new $\sum x = $ old $- $ wrong $+$ right, and new $\sum x^2 =$ old $- (\text{wrong})^2 + (\text{right})^2$. Then $\sigma^2 = \frac{\sum x^2}{n} - \bar{x}^2$.`,
            why: "The wrong value sits inside Σx² as well. Fixing only the mean leaves the old error in the variance.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each data set with its variance.",
              pairs: [
                ["1, 2, 3, 4, 5", "2"],
                ["2, 4, 6, 8, 10", "8"],
                ["7, 7, 7", "0"],
                ["1, 2, 3, 4, 5, 6, 7", "4"],
                ["−1, 1", "1"],
              ],
              explain: t`Use $\frac{n^2 - 1}{12}$ for $1, \ldots, n$ and multiply by $d^2$ for an AP: $2, 4, \ldots, 10$ is $1, \ldots, 5$ doubled, so $4 \times 2 = 8$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "When are the shortcuts safe?",
            md: t`$\frac{n^2 - 1}{12}$ is only for **consecutive** integers (or an AP, with $d^2$); it fails for 1, 2, 4, 8. The combined-variance formula needs each group's own mean and variance; do not just average the two variances. For mean deviation of $a, 2a, \ldots$, use $|a|$ at the end, since a mean deviation is never negative.`,
          },
          {
            type: "keypoints",
            items: [
              t`Variance of $1, 2, \ldots, n$ is $\frac{n^2 - 1}{12}$; of an AP, $\frac{d^2(n^2 - 1)}{12}$.`,
              t`Combined variance: $\frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$.`,
              t`Coded sums: $\bar{x} = c + \frac{S_1}{n}$, $\sigma^2 = \frac{S_2}{n} - \left(\frac{S_1}{n}\right)^2$.`,
              t`Values in $[m, M]$: $\sigma \le \frac{M - m}{2}$.`,
              "Always divide by n, and correct both Σx and Σx².",
            ],
          },
        ],
        flashcards: [
          { front: "Variance of the first n natural numbers", back: t`$\frac{n^2 - 1}{12}$` },
          { front: "Variance of an AP with n terms, difference d", back: t`$\frac{d^2(n^2 - 1)}{12}$` },
          { front: "SD of two numbers a and b", back: t`$\frac{|a - b|}{2}$` },
          { front: "Combined variance of two groups", back: t`$\frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}$, $d_i = \bar{x}_i - \bar{x}$` },
          { front: t`Mean from $\sum (x_i - c) = S_1$`, back: t`$c + \frac{S_1}{n}$` },
          { front: t`Variance from coded sums $S_1, S_2$`, back: t`$\frac{S_2}{n} - \left(\frac{S_1}{n}\right)^2$` },
          { front: "Largest possible SD for values in [m, M]", back: t`$\frac{M - m}{2}$ (half the values at each end, when n is even).` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the variance of the first 20 natural numbers.",
            answer: 33.25,
            tolerance: 0.001,
            explain: t`$\frac{400 - 1}{12} = \frac{399}{12} = 33.25$.`,
          },
          {
            kind: "numeric",
            q: t`For 8 observations, $\sum (x_i - 4) = 16$ and $\sum (x_i - 4)^2 = 48$. Find the variance.`,
            answer: 2,
            difficulty: 2,
            explain: t`$\bar{u} = 2$; $\sigma^2 = \frac{48}{8} - 2^2 = 6 - 4 = 2$ (and the mean is 6).`,
          },
          {
            kind: "mcq",
            q: "20 observations have mean 10 and another 30 observations have mean 15. The combined mean is",
            options: ["12.5", "13", "12", "14"],
            answer: 1,
            explain: t`$\frac{200 + 450}{50} = 13$. Simply averaging 10 and 15 ignores the group sizes.`,
          },
          {
            kind: "numeric",
            q: "Two groups of 5 observations each have means 4 and 8, and each has variance 2. Find the variance of all 10 observations.",
            answer: 6,
            difficulty: 2,
            hint: "Combined mean 6, so d = ±2.",
            explain: t`$\frac{5(2 + 4) + 5(2 + 4)}{10} = 6$.`,
          },
          {
            kind: "mcq",
            q: "The variance of 3, 6, 9, …, 30 is",
            options: ["74.25", "8.25", "24.75", "82.5"],
            answer: 0,
            difficulty: 2,
            explain: t`10 terms with $d = 3$: $\frac{9(100 - 1)}{12} = \frac{891}{12} = 74.25$.`,
          },
          {
            kind: "numeric",
            q: "The standard deviation of the two numbers 4 and x is 3, with x > 4. Find x.",
            answer: 10,
            explain: t`$\frac{x - 4}{2} = 3$, so $x = 10$.`,
          },
          {
            kind: "mcq",
            q: t`The mean deviation about the median of $a, 2a, \ldots, 10a$ is 10. Then $|a|$ is`,
            options: ["2", "4", "5", "6"],
            answer: 1,
            difficulty: 3,
            hint: "Median is 5.5a; list the distances from 5.5.",
            explain: t`Distances $4.5, 3.5, 2.5, 1.5, 0.5$ appear twice: total $25|a|$. M.D. $= \frac{25|a|}{10} = 2.5|a| = 10$, so $|a| = 4$.`,
          },
          {
            kind: "truefalse",
            q: "If every observation is multiplied by 3 and then 4 is added, the variance becomes 9 times the old variance.",
            answer: true,
            explain: t`$\sigma_y^2 = a^2\sigma_x^2 = 9\sigma_x^2$; adding 4 has no effect.`,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Class 11: Probability (NCERT, Karnataka I PUC, ISC)                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-mat-probability",
    title: "Probability (Class 11)",
    icon: "🎲",
    description: "Random experiments, sample spaces, events and the algebra of events, mutually exclusive and exhaustive events, and the axiomatic approach to probability with the addition rule.",
    lessons: [
      {
        slug: "c11-mat-sample-space-events",
        title: "Random Experiments, Sample Spaces and Events",
        summary: "Random experiments and their outcomes, sample spaces, events and their occurrence, types of events, the algebra of events, and mutually exclusive and exhaustive events.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪙",
            caption: "Before a cricket match, the umpire tosses a coin. Everyone knows it will land heads or tails, but nobody can say which. That is a random experiment.",
          },
          {
            type: "text",
            md: t`An **experiment** is an action with an observable result. It is a **random experiment** if (i) it has **more than one possible outcome**, and (ii) the outcome **cannot be predicted** in advance. Tossing a coin, rolling a die and drawing a card from a shuffled pack are random experiments.

Each possible result is an **outcome**. The set of all possible outcomes is the **sample space**, written $S$; each element of $S$ is a **sample point**. Write $S$ carefully: everything else in probability is counted from it.`,
          },
          {
            type: "table",
            headers: ["Random experiment", "Sample space S", "n(S)"],
            rows: [
              ["Toss a coin twice", "{HH, HT, TH, TT}", "4"],
              ["Roll a die", "{1, 2, 3, 4, 5, 6}", "6"],
              ["Roll two dice", t`$\{(i, j) : i, j = 1, 2, \ldots, 6\}$`, "36"],
              ["Toss three coins", "{HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}", "8"],
              ["Toss a coin until a head appears", "{H, TH, TTH, TTTH, …}", "infinite"],
            ],
          },
          {
            type: "example",
            title: "A two-stage experiment",
            problem: "A die is rolled. If it shows an even number, a coin is tossed. If it shows an odd number, the die is rolled again. Write the sample space and count its points.",
            steps: [
              "Even first roll (2, 4 or 6), then a coin: 2H, 2T, 4H, 4T, 6H, 6T. That is 3 × 2 = 6 points.",
              "Odd first roll (1, 3 or 5), then a second roll: 11, 12, …, 16, 31, …, 36, 51, …, 56. That is 3 × 6 = 18 points.",
              "S is the union of these two lists.",
            ],
            answer: "S has 6 + 18 = 24 sample points.",
          },
          {
            type: "text",
            md: t`An **event** is any **subset** of the sample space. We say an event $E$ **has occurred** if the outcome of the experiment belongs to $E$. For a die, "an even number" is $E = \{2, 4, 6\}$; if a 4 shows up, $E$ has occurred.

**Types of events.** The **impossible event** is $\phi$ (no outcome is in it). The **sure event** is $S$ itself. A **simple event** has exactly one sample point; a **compound event** has more than one.`,
          },
          {
            type: "table",
            headers: ["In words", "Set notation", "Meaning"],
            rows: [
              ["not A (complement)", t`$A'$ or $S - A$`, "the outcome is not in A"],
              ["A or B", t`$A \cup B$`, "the outcome is in A, in B, or in both"],
              ["A and B", t`$A \cap B$`, "the outcome is in both A and B"],
              ["A but not B", t`$A - B = A \cap B'$`, "the outcome is in A and not in B"],
            ],
          },
          {
            type: "example",
            title: "Algebra of events with a die",
            problem: t`A die is rolled. $A$: a prime number; $B$: an odd number; $C$: a number greater than 4. Find $A \cup B$, $A \cap B$, $A - C$, $B'$ and $A \cap B \cap C$.`,
            steps: [
              t`$S = \{1, 2, 3, 4, 5, 6\}$, $A = \{2, 3, 5\}$, $B = \{1, 3, 5\}$, $C = \{5, 6\}$.`,
              t`$A \cup B = \{1, 2, 3, 5\}$ and $A \cap B = \{3, 5\}$.`,
              t`$A - C = \{2, 3\}$ (remove 5) and $B' = \{2, 4, 6\}$.`,
              t`$A \cap B \cap C = \{5\}$.`,
            ],
            answer: t`$\{1, 2, 3, 5\}$, $\{3, 5\}$, $\{2, 3\}$, $\{2, 4, 6\}$, $\{5\}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "How many sample points are there when three coins are tossed?",
                answer: 8,
                explain: t`Each coin has 2 outcomes: $2^3 = 8$.`,
              },
              {
                kind: "mcq",
                q: "A die is rolled. The event 'a number less than 7' is",
                options: ["impossible", "simple", "sure", "empty"],
                answer: 2,
                explain: "Every outcome 1–6 is less than 7, so the event is S itself: a sure event.",
              },
            ],
          },
          {
            type: "text",
            md: t`Events $A$ and $B$ are **mutually exclusive** if they cannot happen together: $A \cap B = \phi$. Events $E_1, E_2, \ldots, E_n$ are **exhaustive** if between them they cover the whole sample space: $E_1 \cup E_2 \cup \cdots \cup E_n = S$, so at least one of them must occur. Events that are both are called **mutually exclusive and exhaustive**: exactly one of them occurs. The simple events of a sample space are mutually exclusive and exhaustive, and so are $A$ and $A'$.`,
          },
          {
            type: "example",
            title: "Two dice: which events overlap?",
            problem: "Two dice are rolled. E: the sum is 7. F: both dice show the same number. G: the sum is at least 10. Which pairs are mutually exclusive?",
            steps: [
              "E = {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}; F = {(1,1), (2,2), …, (6,6)}.",
              "A double always has an even sum, never 7. So E ∩ F = φ: E and F are mutually exclusive.",
              "G = {(4,6), (5,5), (6,4), (5,6), (6,5), (6,6)}. E and G: the sums 7 and ≥ 10 never match, so E ∩ G = φ.",
              "F ∩ G = {(5,5), (6,6)} ≠ φ, so F and G are not mutually exclusive.",
            ],
            answer: "E, F mutually exclusive; E, G mutually exclusive; F, G not.",
          },
          {
            type: "mistake",
            wrong: "If A and B are mutually exclusive, then B must be 'not A'.",
            right: "Complementary events are mutually exclusive, but mutually exclusive events need not be complements. For a die, {1, 2} and {5, 6} never happen together, yet neither is the complement of the other (3 and 4 are left out).",
            why: "Complements must be both mutually exclusive and exhaustive. Mutually exclusive alone says only that the events do not overlap.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "A die is rolled. Sort each event by type.",
              groups: ["Impossible", "Simple", "Compound"],
              items: [
                { text: "A 7 appears", group: 0, hint: "No face shows 7: the event is φ." },
                { text: "A 4 appears", group: 1, hint: "Exactly one sample point: {4}." },
                { text: "An even number appears", group: 2, hint: "{2, 4, 6} has three points." },
                { text: "A number both even and odd appears", group: 0, hint: "No number is both." },
                { text: "An even prime appears", group: 1, hint: "Only 2 is an even prime." },
                { text: "A multiple of 3 appears", group: 2, hint: "{3, 6} has two points." },
                { text: "A number at most 6 appears", group: 2, hint: "This is S itself: a sure event with six points." },
              ],
              explain: "Write the event as a set first. Its number of sample points (0, 1 or more) decides the type. The sure event S is also a compound event.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Always write the sample space as a set, and say n(S). In two-stage experiments, draw a tree (first stage, then the second) so that no outcome is missed. When asked 'are A and B mutually exclusive?', compute A ∩ B and state the conclusion; when asked about exhaustive events, show the union is S.",
          },
          {
            type: "keypoints",
            items: [
              "A random experiment has more than one outcome, and the outcome cannot be predicted.",
              "Sample space S = set of all outcomes; an event is any subset of S.",
              "Impossible event φ, sure event S, simple (one point), compound (more than one).",
              t`not A $= A'$, A or B $= A \cup B$, A and B $= A \cap B$, A but not B $= A \cap B'$.`,
              t`Mutually exclusive: $A \cap B = \phi$. Exhaustive: union is S.`,
            ],
          },
        ],
        flashcards: [
          { front: "Random experiment", back: "An experiment with more than one possible outcome whose outcome cannot be predicted in advance." },
          { front: "Sample space", back: "The set S of all possible outcomes of a random experiment." },
          { front: "Event", back: "Any subset of the sample space." },
          { front: "When has event E occurred?", back: "When the outcome of the experiment is an element of E." },
          { front: "Simple vs compound event", back: "Simple: exactly one sample point. Compound: more than one." },
          { front: "A but not B", back: t`$A - B = A \cap B'$` },
          { front: "Mutually exclusive events", back: t`$A \cap B = \phi$: they cannot occur together.` },
          { front: "Exhaustive events", back: "Their union is S: at least one of them must occur." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "A die is rolled twice. How many sample points does the sample space have?",
            answer: 36,
            explain: t`$6 \times 6 = 36$ ordered pairs.`,
          },
          {
            kind: "numeric",
            q: "A coin is tossed 4 times. How many outcomes are there?",
            answer: 16,
            explain: t`$2^4 = 16$.`,
          },
          {
            kind: "mcq",
            q: "A die is rolled. A = {1, 2} and B = {3, 4}. A and B are",
            options: ["mutually exclusive and exhaustive", "mutually exclusive but not exhaustive", "exhaustive but not mutually exclusive", "neither"],
            answer: 1,
            explain: "A ∩ B = φ, but A ∪ B = {1, 2, 3, 4} ≠ S.",
          },
          {
            kind: "truefalse",
            q: "The simple events of a sample space are mutually exclusive.",
            answer: true,
            explain: "Two different single outcomes can never happen in the same trial.",
          },
          {
            kind: "mcq",
            q: "The event 'A but not B' is",
            options: [t`$A \cap B$`, t`$A \cup B'$`, t`$A \cap B'$`, t`$A' \cap B$`],
            answer: 2,
            explain: t`Outcomes in A and not in B: $A \cap B'$, also written $A - B$.`,
          },
          {
            kind: "numeric",
            q: "Three coins are tossed. How many outcomes have at least two heads?",
            answer: 4,
            explain: "HHH, HHT, HTH, THH.",
          },
          {
            kind: "multi",
            q: "A die is rolled. A = {1, 3, 5}, B = {2, 4, 6}, C = {1, 2, 3}. Which statements are true?",
            options: ["A and B are mutually exclusive", "A and B are exhaustive", "A and C are mutually exclusive", "B ∩ C = {2}"],
            answers: [0, 1, 3],
            difficulty: 2,
            explain: "A ∩ B = φ and A ∪ B = S; A ∩ C = {1, 3} ≠ φ; B ∩ C = {2}.",
          },
          {
            kind: "mcq",
            q: "A coin is tossed until a head appears, but at most three times. How many sample points are there?",
            options: ["3", "4", "8", "Infinitely many"],
            answer: 1,
            difficulty: 2,
            hint: "Stop as soon as a head appears.",
            explain: "S = {H, TH, TTH, TTT}: 4 points.",
          },
        ],
      },
      {
        slug: "c11-mat-axiomatic-probability",
        title: "Axiomatic Approach to Probability",
        summary: "The three axioms of probability, assigning probabilities to outcomes, equally likely outcomes, the addition rule, the probability of 'not A', and counting with combinations.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`In Class 9 and 10 you met probability as $\frac{\text{favourable outcomes}}{\text{total outcomes}}$. That works only when all outcomes are equally likely. The **axiomatic approach** (due to A. N. Kolmogorov) works for every sample space. It says: probability is a rule $P$ that gives each event $E$ a number $P(E)$, obeying three axioms.`,
          },
          {
            type: "formula",
            tex: t`\text{(i) } P(E) \ge 0 \qquad \text{(ii) } P(S) = 1 \qquad \text{(iii) } E \cap F = \phi \Rightarrow P(E \cup F) = P(E) + P(F)`,
            caption: "The axioms of probability. They imply P(φ) = 0 and 0 ≤ P(E) ≤ 1.",
          },
          {
            type: "text",
            md: t`For a finite sample space $S = \{\omega_1, \omega_2, \ldots, \omega_n\}$, it is enough to assign each outcome a number $P(\omega_i)$ with $0 \le P(\omega_i) \le 1$ and $\sum P(\omega_i) = 1$. Then for any event $E$, $P(E)$ is the **sum of the probabilities of the sample points in $E$**.

If all $n$ outcomes are **equally likely**, each has probability $\frac{1}{n}$, and $P(E) = \frac{n(E)}{n(S)}$. This is the classical formula, now a consequence of the axioms.`,
          },
          {
            type: "example",
            title: "Is this a valid assignment?",
            problem: t`$S = \{\omega_1, \omega_2, \omega_3, \omega_4\}$. Which assignments are valid? (a) 0.1, 0.2, 0.3, 0.4 (b) 0.5, 0.6, −0.2, 0.1 (c) 0.3, 0.3, 0.3, 0.3.`,
            steps: [
              "(a) Every value is between 0 and 1, and 0.1 + 0.2 + 0.3 + 0.4 = 1. Valid.",
              "(b) The sum is 1, but −0.2 is negative. Not valid (breaks axiom (i)).",
              "(c) Every value is between 0 and 1, but the sum is 1.2 ≠ 1. Not valid.",
            ],
            answer: "Only (a) is valid.",
          },
          {
            type: "formula",
            tex: t`P(A \cup B) = P(A) + P(B) - P(A \cap B), \qquad P(A') = 1 - P(A), \qquad P(A \cap B') = P(A) - P(A \cap B)`,
            caption: "Addition rule ('A or B'), complement rule ('not A') and 'A but not B'. For mutually exclusive A, B: P(A ∪ B) = P(A) + P(B).",
          },
          {
            type: "example",
            title: "Cards: king or heart",
            problem: "One card is drawn at random from a well-shuffled pack of 52. Find the probability that it is a king or a heart.",
            steps: [
              t`$P(K) = \frac{4}{52}$, $P(H) = \frac{13}{52}$. The king of hearts is in both: $P(K \cap H) = \frac{1}{52}$.`,
              t`$P(K \cup H) = \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52}$.`,
            ],
            answer: t`$\frac{16}{52} = \frac{4}{13}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$P(A) = 0.5$, $P(B) = 0.4$ and $P(A \cap B) = 0.2$. Find $P(A \cup B)$.`,
                answer: 0.7,
                tolerance: 0.001,
                explain: t`$0.5 + 0.4 - 0.2 = 0.7$.`,
              },
              {
                kind: "numeric",
                q: t`With the same data, find $P(\text{not } A)$.`,
                answer: 0.5,
                tolerance: 0.001,
                explain: t`$1 - 0.5 = 0.5$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Choosing a group",
            problem: "A team of 3 is chosen at random from 5 boys and 4 girls. Find the probability that it has exactly 2 girls, and the probability that it has at least one girl.",
            steps: [
              t`$n(S) = \binom{9}{3} = 84$.`,
              t`Exactly 2 girls: $\binom{4}{2}\binom{5}{1} = 6 \times 5 = 30$, so $P = \frac{30}{84} = \frac{5}{14}$.`,
              t`No girl: $\binom{5}{3} = 10$, so $P(\text{no girl}) = \frac{10}{84}$.`,
              t`At least one girl $= 1 - \frac{10}{84} = \frac{74}{84} = \frac{37}{42}$.`,
            ],
            answer: t`$\frac{5}{14}$ and $\frac{37}{42}$.`,
          },
          {
            type: "example",
            title: "Two dice: or",
            problem: "Two dice are rolled. Find the probability that the sum is at least 10 or the dice show a double.",
            steps: [
              t`G (sum $\ge 10$) has 6 outcomes and F (double) has 6. $F \cap G = \{(5,5), (6,6)\}$ has 2.`,
              t`$P(F \cup G) = \frac{6}{36} + \frac{6}{36} - \frac{2}{36} = \frac{10}{36}$.`,
            ],
            answer: t`$\frac{5}{18}$`,
          },
          {
            type: "mistake",
            wrong: "P(king or heart) = 4/52 + 13/52 = 17/52.",
            right: "The king of hearts was counted twice. Subtract the overlap: 4/52 + 13/52 − 1/52 = 16/52 = 4/13.",
            why: t`$P(A \cup B) = P(A) + P(B)$ only for **mutually exclusive** events. Always ask: can both happen at once?`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "P(A) = 0.6 and P(B) = 0.7. Can A and B be mutually exclusive?",
              emoji: "🤔",
              options: ["Yes", "No", "Only if A ∪ B = S"],
              answer: 1,
              trap: 0,
              explain: t`If they were, $P(A \cup B) = 0.6 + 0.7 = 1.3 > 1$, which breaks the axioms. In fact $P(A \cap B) \ge 0.6 + 0.7 - 1 = 0.3$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board exam tips",
            md: "Name the events with letters, write n(S), then n(E), then P(E) in lowest terms. For 'at least one', use 1 − P(none). Any answer above 1 or below 0 is a sure sign of an error. Card questions assume a standard pack: 4 suits of 13, with 12 face cards (J, Q, K) and 4 aces.",
          },
          {
            type: "keypoints",
            items: [
              "Axioms: P(E) ≥ 0, P(S) = 1, and P(E ∪ F) = P(E) + P(F) for mutually exclusive E, F.",
              "Finite S: assign each outcome a value in [0, 1] with total 1; P(E) = sum over E.",
              "Equally likely outcomes: P(E) = n(E) / n(S).",
              t`$P(A \cup B) = P(A) + P(B) - P(A \cap B)$; $P(A') = 1 - P(A)$.`,
              "Use combinations to count n(S) and n(E) when choosing groups.",
            ],
          },
        ],
        flashcards: [
          { front: "Axioms of probability", back: "P(E) ≥ 0; P(S) = 1; P(E ∪ F) = P(E) + P(F) if E ∩ F = φ." },
          { front: "P(φ)", back: "0" },
          { front: "Valid assignment on a finite S", back: "Each P(ωᵢ) in [0, 1] and the values add to 1." },
          { front: "Equally likely outcomes", back: t`$P(E) = \frac{n(E)}{n(S)}$` },
          { front: "Addition rule", back: t`$P(A \cup B) = P(A) + P(B) - P(A \cap B)$` },
          { front: "P(not A)", back: t`$1 - P(A)$` },
          { front: "P(A but not B)", back: t`$P(A) - P(A \cap B)$` },
          { front: "P(at least one)", back: "1 − P(none)" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`$P(A) = 0.42$, $P(B) = 0.48$, $P(A \cap B) = 0.16$. Find $P(A \cup B)$.`,
            answer: 0.74,
            tolerance: 0.001,
            explain: t`$0.42 + 0.48 - 0.16 = 0.74$.`,
          },
          {
            kind: "numeric",
            q: t`With the same data, find $P(\text{neither A nor B})$.`,
            answer: 0.26,
            tolerance: 0.001,
            difficulty: 2,
            explain: t`$P(A' \cap B') = 1 - P(A \cup B) = 1 - 0.74 = 0.26$.`,
          },
          {
            kind: "mcq",
            q: "A card is drawn from a pack of 52. The probability that it is red or a queen is",
            options: [t`$\frac{15}{26}$`, t`$\frac{7}{13}$`, t`$\frac{1}{2}$`, t`$\frac{8}{13}$`],
            answer: 1,
            explain: t`$\frac{26 + 4 - 2}{52} = \frac{28}{52} = \frac{7}{13}$ (two red queens counted twice).`,
          },
          {
            kind: "mcq",
            q: "Three coins are tossed. The probability of at least one head is",
            options: [t`$\frac{1}{8}$`, t`$\frac{3}{8}$`, t`$\frac{7}{8}$`, t`$\frac{1}{2}$`],
            answer: 2,
            explain: t`$1 - P(\text{TTT}) = 1 - \frac{1}{8} = \frac{7}{8}$.`,
          },
          {
            kind: "truefalse",
            q: t`It is possible to have $P(A) = 0.5$, $P(B) = 0.3$ and $P(A \cap B) = 0.4$.`,
            answer: false,
            explain: t`$A \cap B \subset B$, so $P(A \cap B) \le P(B) = 0.3$.`,
          },
          {
            kind: "numeric",
            q: "Two dice are rolled. Find the probability that the sum is 8 (to 3 decimal places).",
            answer: 0.139,
            tolerance: 0.001,
            explain: t`(2,6), (3,5), (4,4), (5,3), (6,2): $\frac{5}{36} \approx 0.139$.`,
          },
          {
            kind: "mcq",
            q: t`$P(E) = \frac{2}{7}$. Then $P(\text{not } E)$ is`,
            options: [t`$\frac{2}{7}$`, t`$\frac{5}{7}$`, t`$\frac{7}{2}$`, t`$-\frac{2}{7}$`],
            answer: 1,
            explain: t`$1 - \frac{2}{7} = \frac{5}{7}$.`,
          },
          {
            kind: "numeric",
            q: "A letter is chosen at random from the word KARNATAKA. Find the probability that it is a vowel (to 3 decimal places).",
            answer: 0.444,
            tolerance: 0.002,
            explain: t`9 letters, and the only vowel is A, which occurs 4 times: $\frac{4}{9} \approx 0.444$.`,
          },
          {
            kind: "multi",
            q: t`$S = \{a, b, c\}$. Which are valid probability assignments $(P(a), P(b), P(c))$?`,
            options: ["(0.2, 0.3, 0.5)", "(1/3, 1/3, 1/3)", "(0.6, 0.6, −0.2)", "(0.5, 0.4, 0.2)"],
            answers: [0, 1],
            difficulty: 2,
            explain: "The third has a negative value; the fourth adds to 1.1.",
          },
        ],
      },
      {
        slug: "c11-mat-probability-exam-edge",
        title: "Exam edge: Probability",
        summary: "What JEE Main, KCET and COMEDK ask from Class 11 probability: counting with permutations and combinations, 'exactly one' and 'at least one', bounds on P(A ∩ B), three-event addition and selections from 1 to n.",
        minutes: 22,
        xp: 55,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What the exams ask.** **KCET** and **COMEDK** ask direct questions on dice, coins, cards and letters, and the addition rule. **JEE Main** usually combines probability with *Permutations and Combinations* (arrangements, selections, numbers from 1 to n). Class 12 probability (conditional probability, independence, Bayes' theorem, distributions) builds directly on this chapter, so JEE Advanced questions use these ideas inside harder problems. There is no NEET Maths.`,
          },
          {
            type: "text",
            md: t`**Results worth remembering.**

1. $P(\text{exactly one of } A, B) = P(A) + P(B) - 2P(A \cap B)$.

2. $P(\text{neither}) = 1 - P(A \cup B)$; $P(\text{at least one}) = 1 - P(\text{none})$.

3. Bounds: $\max\{0,\ P(A) + P(B) - 1\} \le P(A \cap B) \le \min\{P(A), P(B)\}$ and $\max\{P(A), P(B)\} \le P(A \cup B) \le \min\{1,\ P(A) + P(B)\}$.

4. Two numbers chosen from $1, \ldots, n$ without replacement: compare $\binom{n}{2}$ with the count of pairs having the property (both even, both odd, one of each …).`,
          },
          {
            type: "formula",
            tex: t`P(A \cup B \cup C) = \sum P(A) - \sum P(A \cap B) + P(A \cap B \cap C)`,
            caption: "Addition rule for three events: P(A) + P(B) + P(C) − P(A∩B) − P(B∩C) − P(A∩C) + P(A∩B∩C).",
          },
          {
            type: "example",
            title: "KCET level: product of two dice",
            problem: "Two dice are rolled. Find the probability that the product of the numbers is a prime.",
            steps: [
              "A product of two whole numbers is prime only if one factor is 1 and the other is prime.",
              "Favourable: (1,2), (1,3), (1,5), (2,1), (3,1), (5,1): 6 outcomes.",
              t`$P = \frac{6}{36}$.`,
            ],
            answer: t`$\frac{1}{6}$`,
          },
          {
            type: "example",
            title: "JEE Main level: arrangements",
            problem: "Five people, including Asha and Bilal, sit in a row in random order. Find the probability that Asha and Bilal sit next to each other.",
            steps: [
              t`$n(S) = 5! = 120$.`,
              t`Tie Asha and Bilal into one unit: 4 units in $4!$ ways, and the pair inside in $2!$ ways: $48$.`,
              t`$P = \frac{48}{120}$.`,
            ],
            answer: t`$\frac{2}{5}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$P(A) = 0.5$, $P(B) = 0.4$, $P(A \cap B) = 0.1$. Find the probability that exactly one of A, B occurs.`,
                answer: 0.7,
                tolerance: 0.001,
                explain: t`$0.5 + 0.4 - 2(0.1) = 0.7$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: bounds on an overlap",
            problem: t`$P(A) = 0.7$ and $P(B) = 0.6$. Find the least and greatest possible values of $P(A \cap B)$.`,
            steps: [
              t`$P(A \cup B) \le 1$, so $P(A \cap B) = 0.7 + 0.6 - P(A \cup B) \ge 0.3$.`,
              t`$A \cap B \subset B$, so $P(A \cap B) \le 0.6$, reached when $B \subset A$.`,
            ],
            answer: t`$0.3 \le P(A \cap B) \le 0.6$.`,
          },
          {
            type: "example",
            title: "JEE Main level: three events",
            problem: t`$P(A) = 0.5$, $P(B) = 0.4$, $P(C) = 0.3$, $P(A \cap B) = 0.2$, $P(B \cap C) = 0.1$, $P(A \cap C) = 0.15$, $P(A \cap B \cap C) = 0.05$. Find the probability that none of A, B, C occurs.`,
            steps: [
              t`$\sum P(A) = 1.2$ and $\sum P(A \cap B) = 0.2 + 0.1 + 0.15 = 0.45$.`,
              t`$P(A \cup B \cup C) = 1.2 - 0.45 + 0.05 = 0.8$.`,
              t`$P(\text{none}) = 1 - 0.8 = 0.2$.`,
            ],
            answer: "0.2",
          },
          {
            type: "example",
            title: "JEE Advanced style: two numbers from 1 to 20",
            problem: "Two different numbers are chosen at random from 1, 2, …, 20. Find the probability that (a) their sum is even, (b) their product is even.",
            steps: [
              t`$n(S) = \binom{20}{2} = 190$. There are 10 odd and 10 even numbers.`,
              t`(a) The sum is even when both are even or both are odd: $\binom{10}{2} + \binom{10}{2} = 45 + 45 = 90$. $P = \frac{90}{190} = \frac{9}{19}$.`,
              t`(b) The product is odd only when both are odd: $\binom{10}{2} = 45$. So $P(\text{even product}) = 1 - \frac{45}{190} = \frac{145}{190} = \frac{29}{38}$.`,
            ],
            answer: t`(a) $\frac{9}{19}$. (b) $\frac{29}{38}$.`,
          },
          {
            type: "mistake",
            wrong: "P(at least one head in 3 tosses) = P(head on 1st) + P(head on 2nd) + P(head on 3rd) = 3/2.",
            right: "Use the complement: 1 − P(no head) = 1 − 1/8 = 7/8.",
            why: "'Head on 1st' and 'head on 2nd' can happen together, so their probabilities cannot simply be added. An answer above 1 is the warning sign.",
          },
          {
            type: "mistake",
            wrong: "Two dice give sums 2, 3, …, 12: eleven outcomes, so P(sum = 7) = 1/11.",
            right: "The 11 sums are not equally likely. Count ordered pairs: 6 of the 36 give 7, so P = 1/6, while P(sum = 2) = 1/36.",
            why: t`$P(E) = \frac{n(E)}{n(S)}$ needs a sample space of **equally likely** outcomes. The 36 ordered pairs are equally likely; the 11 sums are not.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each phrase with its event.",
              pairs: [
                ["At least one of A, B", t`$A \cup B$`],
                ["Neither A nor B", t`$A' \cap B'$`],
                ["A only", t`$A \cap B'$`],
                ["Exactly one of A, B", t`$(A \cap B') \cup (A' \cap B)$`],
                ["Not both A and B", t`$(A \cap B)'$`],
              ],
              explain: t`Translate words into sets before using any formula. "Neither" is $(A \cup B)'$, and "not both" is $(A \cap B)' = A' \cup B'$; they are different events.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "When are the shortcuts safe?",
            md: t`$P(A \cup B) = P(A) + P(B)$ only for mutually exclusive events. The formula $\frac{n(E)}{n(S)}$ only for equally likely outcomes: use ordered pairs for dice and count selections with $\binom{n}{r}$ consistently (both $n(S)$ and $n(E)$ as selections, or both as arrangements, never mixed). For bounds questions, the answer must also lie in $[0, 1]$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Exactly one: $P(A) + P(B) - 2P(A \cap B)$. At least one: $1 - P(\text{none})$.`,
              t`$\max\{0, P(A) + P(B) - 1\} \le P(A \cap B) \le \min\{P(A), P(B)\}$.`,
              t`Three events: $\sum P(A) - \sum P(A \cap B) + P(A \cap B \cap C)$.`,
              "Count both n(S) and n(E) the same way (selections or arrangements).",
              "Use a sample space of equally likely outcomes.",
            ],
          },
        ],
        flashcards: [
          { front: "P(exactly one of A, B)", back: t`$P(A) + P(B) - 2P(A \cap B)$` },
          { front: "Least possible P(A ∩ B)", back: t`$\max\{0,\ P(A) + P(B) - 1\}$` },
          { front: "Greatest possible P(A ∩ B)", back: t`$\min\{P(A), P(B)\}$` },
          { front: "Three-event addition rule", back: t`$\sum P(A) - \sum P(A \cap B) + P(A \cap B \cap C)$` },
          { front: "Neither A nor B", back: t`$A' \cap B' = (A \cup B)'$` },
          { front: "Not both A and B", back: t`$(A \cap B)' = A' \cup B'$` },
          { front: "P(two chosen persons sit together, n in a row)", back: t`$\frac{2(n - 1)!}{n!} = \frac{2}{n}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`A and B are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.5$. Find $P(\text{neither})$.`,
            answer: 0.2,
            tolerance: 0.001,
            explain: t`$P(A \cup B) = 0.8$, so $P(\text{neither}) = 0.2$.`,
          },
          {
            kind: "mcq",
            q: "Six people sit in a row at random. The probability that two particular people do not sit together is",
            options: [t`$\frac{1}{3}$`, t`$\frac{2}{3}$`, t`$\frac{1}{6}$`, t`$\frac{5}{6}$`],
            answer: 1,
            difficulty: 2,
            explain: t`Together: $\frac{2 \cdot 5!}{6!} = \frac{1}{3}$. Not together: $1 - \frac{1}{3} = \frac{2}{3}$.`,
          },
          {
            kind: "numeric",
            q: "Two different numbers are chosen from 1, 2, …, 10. Find the probability that their sum is odd (to 3 decimal places).",
            answer: 0.556,
            tolerance: 0.002,
            difficulty: 2,
            hint: "An odd sum needs one odd and one even number.",
            explain: t`$\frac{5 \times 5}{\binom{10}{2}} = \frac{25}{45} = \frac{5}{9} \approx 0.556$.`,
          },
          {
            kind: "mcq",
            q: t`$P(A) = 0.4$ and $P(B) = 0.7$. The least possible value of $P(A \cap B)$ is`,
            options: ["0", "0.1", "0.3", "0.4"],
            answer: 1,
            explain: t`$0.4 + 0.7 - 1 = 0.1$.`,
          },
          {
            kind: "multi",
            q: t`$P(A) = 0.6$ and $P(B) = 0.5$. Which values are possible?`,
            options: [t`$P(A \cup B) = 0.9$`, t`$P(A \cap B) = 0.05$`, t`$P(A \cap B) = 0.5$`, t`$P(A \cup B) = 0.5$`],
            answers: [0, 2],
            difficulty: 3,
            hint: t`Find the range of $P(A \cap B)$ and of $P(A \cup B)$.`,
            explain: t`$0.1 \le P(A \cap B) \le 0.5$ and $0.6 \le P(A \cup B) \le 1$. So 0.9 (with $P(A \cap B) = 0.2$) and 0.5 (with $B \subset A$) are possible; 0.05 and a union of 0.5 are not.`,
          },
          {
            kind: "numeric",
            q: t`$P(A) = 0.4$, $P(B) = 0.3$, $P(C) = 0.2$, $P(A \cap B) = 0.1$, $P(B \cap C) = 0.05$, $P(A \cap C) = 0.08$, $P(A \cap B \cap C) = 0.02$. Find $P(A \cup B \cup C)$.`,
            answer: 0.69,
            tolerance: 0.001,
            difficulty: 2,
            explain: t`$0.9 - 0.23 + 0.02 = 0.69$.`,
          },
          {
            kind: "mcq",
            q: "The probability that a leap year chosen at random has 53 Sundays is",
            options: [t`$\frac{1}{7}$`, t`$\frac{2}{7}$`, t`$\frac{3}{7}$`, t`$\frac{53}{366}$`],
            answer: 1,
            difficulty: 2,
            explain: "366 days = 52 weeks + 2 days. The 2 extra days are one of 7 equally likely pairs (Sun–Mon, Mon–Tue, …, Sat–Sun); 2 of these pairs contain a Sunday.",
          },
          {
            kind: "numeric",
            q: "A number is chosen at random from 1 to 100. Find the probability that it is divisible by 2 or 3.",
            answer: 0.67,
            tolerance: 0.001,
            explain: t`$\frac{50 + 33 - 16}{100} = \frac{67}{100}$ (16 multiples of 6 counted twice).`,
          },
        ],
      },
    ],
  },
];

export const links: Record<string, string | string[]> = {
  "11:Limits and Derivatives": "c11-mat-limits-derivatives",
  "11:Statistics": "c11-mat-statistics",
  "11:Probability": "c11-mat-probability",
};
