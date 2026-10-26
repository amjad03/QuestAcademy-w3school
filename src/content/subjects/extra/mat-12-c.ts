import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Continuity and Differentiability (NCERT Ch 5, ISC)                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-continuity-differentiability",
    title: "Continuity and Differentiability",
    icon: "📈",
    description: "Continuity at a point, differentiability, chain rule, implicit and inverse trigonometric derivatives, exponential and logarithmic functions, logarithmic and parametric differentiation, and second-order derivatives.",
    lessons: [
      /* ---------------- Board lesson 1: Continuity ---------------- */
      {
        slug: "c12-continuity",
        title: "Continuity of a Function",
        summary: "What it means for a function to be continuous at a point and on its domain, the standard continuous functions, finding constants, and the algebra and composition of continuous functions.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🖊️",
            caption: "If you can draw the graph near a point without lifting your pen, the function is continuous there. Calculus turns this picture into a test with limits.",
          },
          {
            type: "text",
            md: t`Let $f$ be a real function and let $c$ be a point in the **domain** of $f$. We say $f$ is **continuous at** $c$ if the limit of $f(x)$ as $x \to c$ exists and equals the value of the function there.

In practice we check three things: (1) $f(c)$ is defined, (2) the **left-hand limit** (LHL) and **right-hand limit** (RHL) at $c$ exist and are equal, and (3) this common limit equals $f(c)$. If any one of these fails, $f$ is **discontinuous** at $c$, and $c$ is called a point of discontinuity.`,
          },
          {
            type: "formula",
            tex: t`\lim_{x\to c^-} f(x) \;=\; \lim_{x\to c^+} f(x) \;=\; f(c)`,
            caption: "Continuity at x = c: LHL = RHL = value of the function.",
          },
          {
            type: "text",
            md: t`A **continuous function** is one that is continuous at **every point of its domain**. Continuity is only discussed at points where the function is defined. For example $f(x) = \frac{1}{x}$ has domain $\mathbb{R} - \{0\}$ and is continuous at every point of it, so it *is* a continuous function, even though its graph has a break at 0.

On a closed interval $[a, b]$, "$f$ is continuous" means: continuous at every point of $(a, b)$, **right-continuous** at $a$ ($\lim_{x\to a^+} f(x) = f(a)$) and **left-continuous** at $b$.`,
          },
          {
            type: "table",
            headers: ["Function", "Where it is continuous"],
            rows: [
              ["Constant, identity, every polynomial", t`all of $\mathbb{R}$`],
              [t`Rational function $\frac{p(x)}{q(x)}$`, t`every $x$ with $q(x) \neq 0$ (its whole domain)`],
              [t`$|x|$, $\sin x$, $\cos x$, $e^x$`, t`all of $\mathbb{R}$`],
              [t`$\tan x$, $\sec x$, $\cot x$, $\operatorname{cosec} x$`, "their whole domains"],
              [t`$\log x$`, t`$x > 0$`],
              [t`Greatest integer function $[x]$`, t`every non-integer; **discontinuous at every integer**`],
            ],
          },
          {
            type: "example",
            title: "The greatest integer function at an integer",
            problem: t`Show that $f(x) = [x]$ is discontinuous at every integer $c$ and continuous at every non-integer.`,
            steps: [
              t`Let $c$ be an integer. Just to the left of $c$ (for $c - 1 \le x < c$), $[x] = c - 1$, so LHL $= c - 1$.`,
              t`Just to the right (for $c \le x < c + 1$), $[x] = c$, so RHL $= c$.`,
              t`LHL $\neq$ RHL, so $\lim_{x \to c}[x]$ does not exist and $f$ is discontinuous at $c$.`,
              t`If $c$ is not an integer, $[x]$ is constant (equal to $[c]$) on a small interval around $c$, so the limit is $[c] = f(c)$.`,
            ],
            answer: t`$[x]$ jumps by 1 at each integer, and is continuous everywhere else.`,
          },
          {
            type: "example",
            title: "Finding a constant",
            problem: t`For what value of $k$ is $f(x) = \begin{cases} kx^2, & x \le 2 \\ 3x + 4, & x > 2 \end{cases}$ continuous at $x = 2$?`,
            steps: [
              t`$f(2) = k(2)^2 = 4k$. LHL $= \lim_{x\to 2^-} kx^2 = 4k$.`,
              t`RHL $= \lim_{x\to 2^+} (3x + 4) = 3(2) + 4 = 10$.`,
              t`Continuity needs LHL = RHL = $f(2)$: $4k = 10$.`,
            ],
            answer: t`$k = \frac{5}{2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`$f(x) = 3$ for $x \le 1$, $f(x) = ax + b$ for $1 < x < 4$, $f(x) = 12$ for $x \ge 4$. If $f$ is continuous on $\mathbb{R}$, find $a$.`,
                answer: 3,
                explain: t`At $x = 1$: $a + b = 3$. At $x = 4$: $4a + b = 12$. Subtracting, $3a = 9$, so $a = 3$ (and $b = 0$).`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Algebra of continuous functions.** If $f$ and $g$ are continuous at $c$, then $f + g$, $f - g$, $f \cdot g$ and $kf$ are continuous at $c$, and $\frac{f}{g}$ is continuous at $c$ provided $g(c) \neq 0$.

**Composition.** If $g$ is continuous at $c$ and $f$ is continuous at $g(c)$, then $f \circ g$ is continuous at $c$. So $\sin(x^2)$, $|1 - 2x|$, $e^{\cos x}$ and $|\sin x|$ are continuous on $\mathbb{R}$ without any limit work.`,
          },
          {
            type: "mistake",
            wrong: t`$f(x) = \frac{1}{x}$ has a break at $x = 0$, so it is not a continuous function.`,
            right: t`0 is not in the domain of $\frac{1}{x}$, so continuity at 0 is not even asked. At every point of its domain $\frac{1}{x}$ is continuous, so it **is** a continuous function.`,
            why: "The pen picture makes us look at the whole graph. The definition only looks at points where the function is defined; a gap in the domain is not a discontinuity.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is the function continuous at x = 0?",
              groups: ["Continuous at 0", "Not continuous at 0"],
              items: [
                { text: t`$|x|$`, group: 0, hint: "LHL = RHL = 0 = f(0)." },
                { text: t`$[x]$`, group: 1, hint: "LHL = −1 but f(0) = 0." },
                { text: t`$\frac{\sin x}{x}$ for $x \neq 0$, value 1 at 0`, group: 0, hint: "The limit is 1, and the value is 1." },
                { text: t`$\frac{\sin x}{x}$ for $x \neq 0$, value 0 at 0`, group: 1, hint: "The limit is 1, but the value is 0." },
                { text: t`$x \sin \frac{1}{x}$ for $x \neq 0$, value 0 at 0`, group: 0, hint: "Squeeze: |x sin(1/x)| ≤ |x| → 0." },
                { text: t`$\frac{x}{|x|}$ for $x \neq 0$, value 0 at 0`, group: 1, hint: "LHL = −1, RHL = 1." },
              ],
              explain: "A function is continuous at a point only when the left limit, the right limit and the value all agree. A wrong value (or a jump) at a single point is enough to break it.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "How continuity questions are marked",
            md: t`In a "find $k$" or "discuss continuity" question, write **LHL, RHL and $f(c)$ on separate lines**, each worked out, and then state the conclusion in words ("hence $f$ is continuous at $x = 2$"). Each of these usually carries a mark. For piecewise functions, check only the **joining points**; on each open piece the formula is a polynomial or other standard function and is continuous.`,
          },
          {
            type: "keypoints",
            items: [
              t`$f$ is continuous at $c$ iff $\lim_{x\to c^-} f(x) = \lim_{x\to c^+} f(x) = f(c)$.`,
              "A continuous function is continuous at every point of its domain; points outside the domain are not discontinuities.",
              t`Polynomials, $|x|$, $\sin x$, $\cos x$, $e^x$ are continuous on $\mathbb{R}$; $[x]$ is discontinuous exactly at the integers.`,
              t`Sums, differences, products, quotients (denominator $\neq 0$) and compositions of continuous functions are continuous.`,
            ],
          },
        ],
        flashcards: [
          { front: "Three conditions for continuity at x = c", back: "f(c) is defined; LHL and RHL exist and are equal; the limit equals f(c)." },
          { front: "What is a continuous function?", back: "A function that is continuous at every point of its domain." },
          { front: t`Is $\frac{1}{x}$ a continuous function?`, back: "Yes. 0 is not in its domain, and it is continuous at every point that is." },
          { front: t`Where is $[x]$ discontinuous?`, back: "At every integer (LHL = c − 1, RHL = c)." },
          { front: t`When is $\frac{f}{g}$ continuous at $c$?`, back: t`When $f$ and $g$ are continuous at $c$ and $g(c) \neq 0$.` },
          { front: t`Composition rule for continuity`, back: t`If $g$ is continuous at $c$ and $f$ is continuous at $g(c)$, then $f \circ g$ is continuous at $c$.` },
          { front: t`Continuous on $[a, b]$ means…`, back: "Continuous at each point of (a, b), right-continuous at a and left-continuous at b." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`How many points of discontinuity does $f(x) = [x]$ have in the open interval $(-2.5,\ 2.5)$?`,
            answer: 5,
            explain: t`The integers in $(-2.5, 2.5)$ are $-2, -1, 0, 1, 2$: five points.`,
          },
          {
            kind: "numeric",
            q: t`$f(x) = \frac{x^2 - 4}{x - 2}$ for $x \neq 2$ and $f(2) = k$. Find $k$ so that $f$ is continuous at 2.`,
            answer: 4,
            explain: t`For $x \neq 2$, $f(x) = x + 2$, so the limit at 2 is 4. Continuity needs $k = 4$.`,
          },
          {
            kind: "multi",
            q: t`Which functions are continuous at every real number?`,
            options: [t`$|x - 1|$`, t`$e^x$`, t`$[x]$`, t`$\frac{1}{x^2 + 1}$`, t`$\tan x$`],
            answers: [0, 1, 3],
            explain: t`$|x-1|$ and $e^x$ are continuous on $\mathbb{R}$; $\frac{1}{x^2+1}$ has a denominator that is never 0. $[x]$ breaks at integers, and $\tan x$ is not even defined at odd multiples of $\frac{\pi}{2}$.`,
          },
          {
            kind: "truefalse",
            q: t`$f(x) = \frac{1}{x}$ is a continuous function.`,
            answer: true,
            explain: "It is continuous at every point of its domain ℝ − {0}. The point 0 is outside the domain, so it does not count.",
          },
          {
            kind: "mcq",
            q: t`$f(x) = \frac{\sin 3x}{x}$ for $x \neq 0$ and $f(0) = k$. For $f$ to be continuous at 0, $k$ must be:`,
            options: ["1", "3", t`$\frac{1}{3}$`, "0"],
            answer: 1,
            explain: t`$\frac{\sin 3x}{x} = 3 \cdot \frac{\sin 3x}{3x} \to 3 \cdot 1 = 3$.`,
            difficulty: 2,
            hint: t`Use $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$ with $\theta = 3x$.`,
          },
          {
            kind: "fill",
            q: t`$f$ is continuous at $x = c$ when $\lim_{x\to c} f(x)$ = ___.`,
            answer: ["f(c)", "f (c)"],
            explain: "The limit must exist and equal the value of the function at c.",
          },
          {
            kind: "mcq",
            q: t`Why is $g(x) = |\cos x|$ continuous on $\mathbb{R}$?`,
            options: [
              t`It is a composition of two continuous functions, $|x|$ and $\cos x$`,
              t`It is never negative`,
              t`It is differentiable everywhere`,
              t`$\cos x$ is periodic`,
            ],
            answer: 0,
            explain: t`$\cos x$ is continuous everywhere and $|x|$ is continuous everywhere, so the composition $|\cos x|$ is continuous. (It is *not* differentiable where $\cos x = 0$.)`,
          },
        ],
      },

      /* ---------------- Board lesson 2: Differentiability, chain rule ---------------- */
      {
        slug: "c12-differentiability-chain-rule",
        title: "Differentiability, Chain Rule and Implicit Functions",
        summary: "Left and right derivatives, why differentiable implies continuous, the chain rule, implicit differentiation and the derivatives of inverse trigonometric functions.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`The **derivative** of $f$ at a point $c$ is the limit below, when it exists. Approaching from the left ($h \to 0^-$) gives the **left-hand derivative** (LHD); from the right ($h \to 0^+$) gives the **right-hand derivative** (RHD). $f$ is **differentiable at** $c$ exactly when LHD and RHD both exist and are equal. $f$ is differentiable on an interval when it is differentiable at every point of it.`,
          },
          {
            type: "formula",
            tex: t`f'(c) = \lim_{h\to 0} \frac{f(c+h) - f(c)}{h}`,
            caption: "LHD uses h → 0⁻, RHD uses h → 0⁺. Differentiable at c ⇔ LHD = RHD (both finite).",
          },
          {
            type: "example",
            title: "Differentiable ⇒ continuous, but not the other way",
            problem: t`(a) Prove: if $f$ is differentiable at $c$, then $f$ is continuous at $c$. (b) Show that $f(x) = |x|$ is continuous but not differentiable at 0.`,
            steps: [
              t`(a) For $x \neq c$, write $f(x) - f(c) = \frac{f(x) - f(c)}{x - c} \cdot (x - c)$.`,
              t`Take $x \to c$: the first factor tends to $f'(c)$ and the second to 0, so $\lim_{x\to c}[f(x) - f(c)] = f'(c) \cdot 0 = 0$, i.e. $\lim_{x \to c} f(x) = f(c)$.`,
              t`(b) $|x|$ is continuous at 0 (LHL = RHL = 0 = f(0)).`,
              t`RHD $= \lim_{h\to 0^+} \frac{|h| - 0}{h} = \frac{h}{h} = 1$; LHD $= \lim_{h\to 0^-} \frac{|h|}{h} = \frac{-h}{h} = -1$.`,
            ],
            answer: t`LHD $= -1 \neq 1 =$ RHD, so $|x|$ is not differentiable at 0, though it is continuous there. Every differentiable function is continuous; the converse is false.`,
          },
          {
            type: "heading",
            text: "The chain rule",
          },
          {
            type: "formula",
            tex: t`y = f(u),\; u = g(x) \;\Rightarrow\; \frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}`,
            caption: "Differentiate the outer function, keep the inside as it is, then multiply by the derivative of the inside.",
          },
          {
            type: "example",
            title: "A three-layer chain",
            problem: t`Differentiate $y = \sin^3(2x + 1)$.`,
            steps: [
              t`Layers from outside: cube $\to$ sine $\to$ $(2x + 1)$.`,
              t`Cube: $3\sin^2(2x+1)$. Sine: $\cos(2x + 1)$. Inside: $2$.`,
              t`Multiply: $\frac{dy}{dx} = 3\sin^2(2x+1)\cdot\cos(2x+1)\cdot 2$.`,
            ],
            answer: t`$\frac{dy}{dx} = 6\sin^2(2x+1)\cos(2x+1)$.`,
          },
          {
            type: "mistake",
            wrong: t`$\frac{d}{dx}\sin(x^2) = \cos(x^2)$.`,
            right: t`$\frac{d}{dx}\sin(x^2) = \cos(x^2) \cdot 2x = 2x\cos(x^2)$.`,
            why: t`The derivative of $\sin u$ is $\cos u$ only with respect to $u$. With respect to $x$ you must multiply by $\frac{du}{dx}$; forgetting this inner factor is the most common slip in board papers.`,
          },
          {
            type: "text",
            md: t`**Implicit functions.** Sometimes $y$ is not written as "$y = $ something in $x$", e.g. $x^2 + xy + y^2 = 7$. We still treat $y$ as a function of $x$: differentiate **every term** with respect to $x$, using the chain rule on terms in $y$ (so $\frac{d}{dx}y^2 = 2y\frac{dy}{dx}$), then solve for $\frac{dy}{dx}$.`,
          },
          {
            type: "example",
            title: "Implicit differentiation",
            problem: t`Find $\frac{dy}{dx}$ if $x^2 + xy + y^2 = 7$.`,
            steps: [
              t`Differentiate term by term: $2x + \left(y + x\frac{dy}{dx}\right) + 2y\frac{dy}{dx} = 0$ (product rule on $xy$).`,
              t`Collect the $\frac{dy}{dx}$ terms: $(x + 2y)\frac{dy}{dx} = -(2x + y)$.`,
            ],
            answer: t`$\frac{dy}{dx} = -\frac{2x + y}{x + 2y}$, where $x + 2y \neq 0$.`,
          },
          {
            type: "table",
            headers: ["Function", "Derivative", "Valid for"],
            rows: [
              [t`$\sin^{-1} x$`, t`$\frac{1}{\sqrt{1 - x^2}}$`, t`$-1 < x < 1$`],
              [t`$\cos^{-1} x$`, t`$-\frac{1}{\sqrt{1 - x^2}}$`, t`$-1 < x < 1$`],
              [t`$\tan^{-1} x$`, t`$\frac{1}{1 + x^2}$`, t`all real $x$`],
              [t`$\cot^{-1} x$`, t`$-\frac{1}{1 + x^2}$`, t`all real $x$`],
              [t`$\sec^{-1} x$`, t`$\frac{1}{|x|\sqrt{x^2 - 1}}$`, t`$|x| > 1$`],
              [t`$\operatorname{cosec}^{-1} x$`, t`$-\frac{1}{|x|\sqrt{x^2 - 1}}$`, t`$|x| > 1$`],
            ],
          },
          {
            type: "example",
            title: "Simplify first with a substitution",
            problem: t`Find $\frac{dy}{dx}$ if $y = \tan^{-1}\left(\frac{2x}{1 - x^2}\right)$, $-1 < x < 1$.`,
            steps: [
              t`Put $x = \tan\theta$ with $-\frac{\pi}{4} < \theta < \frac{\pi}{4}$ (because $-1 < x < 1$).`,
              t`Then $\frac{2x}{1 - x^2} = \frac{2\tan\theta}{1 - \tan^2\theta} = \tan 2\theta$, and $2\theta$ lies in $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, so $y = 2\theta = 2\tan^{-1}x$.`,
              t`Differentiate: $\frac{dy}{dx} = \frac{2}{1 + x^2}$.`,
            ],
            answer: t`$\frac{dy}{dx} = \frac{2}{1 + x^2}$ for $-1 < x < 1$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`For the circle $x^2 + y^2 = 25$, the value of $\frac{dy}{dx}$ at $(3, 4)$ is:`,
                options: [t`$-\frac{3}{4}$`, t`$\frac{3}{4}$`, t`$-\frac{4}{3}$`, t`$\frac{4}{3}$`],
                answer: 0,
                explain: t`$2x + 2y\frac{dy}{dx} = 0$ gives $\frac{dy}{dx} = -\frac{x}{y} = -\frac{3}{4}$.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each inverse function to its derivative.",
              pairs: [
                [t`$\sin^{-1} x$`, t`$\frac{1}{\sqrt{1 - x^2}}$`],
                [t`$\cos^{-1} x$`, t`$-\frac{1}{\sqrt{1 - x^2}}$`],
                [t`$\tan^{-1} x$`, t`$\frac{1}{1 + x^2}$`],
                [t`$\cot^{-1} x$`, t`$-\frac{1}{1 + x^2}$`],
                [t`$\sec^{-1} x$`, t`$\frac{1}{|x|\sqrt{x^2 - 1}}$`],
              ],
              explain: t`The "co" functions ($\cos^{-1}$, $\cot^{-1}$, $\operatorname{cosec}^{-1}$) have the same derivative as their partners with a minus sign, because $\sin^{-1}x + \cos^{-1}x = \frac{\pi}{2}$ and so on.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`Inverse-trig questions are usually 2–3 marks: the substitution ($x = \tan\theta$, $x = \sin\theta$, …) and the simplified form get the marks, so write the range of $\theta$ you used. In implicit differentiation, show the line where you collect the $\frac{dy}{dx}$ terms. Some books print the $\sec^{-1}x$ derivative as $\frac{1}{x\sqrt{x^2-1}}$; that form is right only for $x > 1$.`,
          },
          {
            type: "keypoints",
            items: [
              "f is differentiable at c when LHD and RHD exist and are equal.",
              t`Differentiable $\Rightarrow$ continuous; $|x|$ at 0 shows the converse is false.`,
              t`Chain rule: $\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$; never drop the derivative of the inside.`,
              t`Implicit: differentiate every term in $x$, write $\frac{d}{dx}y^n = ny^{n-1}\frac{dy}{dx}$, then solve for $\frac{dy}{dx}$.`,
              "Simplify inverse-trig expressions with a substitution before differentiating, and respect the range.",
            ],
          },
        ],
        flashcards: [
          { front: "Condition for differentiability at c", back: "LHD and RHD exist (finite) and are equal." },
          { front: "Does continuity imply differentiability?", back: "No. |x| is continuous at 0 but LHD = −1, RHD = 1." },
          { front: "Chain rule", back: t`$\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$` },
          { front: t`$\frac{d}{dx} y^2$ when $y$ is a function of $x$`, back: t`$2y\frac{dy}{dx}$` },
          { front: t`$\frac{d}{dx}\sin^{-1} x$`, back: t`$\frac{1}{\sqrt{1-x^2}}$, for $-1 < x < 1$` },
          { front: t`$\frac{d}{dx}\tan^{-1} x$`, back: t`$\frac{1}{1+x^2}$` },
          { front: t`$\frac{d}{dx}\sec^{-1} x$`, back: t`$\frac{1}{|x|\sqrt{x^2-1}}$, for $|x| > 1$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\frac{d}{dx}\sin(x^2)$ equals:`,
            options: [t`$\cos(x^2)$`, t`$2x\cos(x^2)$`, t`$2x\sin(x^2)$`, t`$\cos(2x)$`],
            answer: 1,
            explain: t`Outer derivative $\cos(x^2)$ times inner derivative $2x$.`,
          },
          {
            kind: "numeric",
            q: t`Find the value of $\frac{d}{dx}\tan^{-1}x$ at $x = 1$.`,
            answer: 0.5,
            explain: t`$\frac{1}{1 + 1^2} = \frac{1}{2} = 0.5$.`,
          },
          {
            kind: "truefalse",
            q: "If a function is continuous at a point, it must be differentiable there.",
            answer: false,
            explain: "|x| is continuous at 0 but not differentiable there. Only the reverse statement is true.",
          },
          {
            kind: "mcq",
            q: t`For $f(x) = |x - 2|$ at $x = 2$, the (LHD, RHD) are:`,
            options: ["(1, −1)", "(−1, 1)", "(0, 0)", "(1, 1)"],
            answer: 1,
            explain: t`Left of 2, $f(x) = 2 - x$ with slope $-1$; right of 2, $f(x) = x - 2$ with slope $1$.`,
          },
          {
            kind: "numeric",
            q: t`If $y = (3x + 1)^5$, find $\frac{dy}{dx}$ at $x = 0$.`,
            answer: 15,
            explain: t`$\frac{dy}{dx} = 5(3x+1)^4 \cdot 3 = 15(3x+1)^4$, which is 15 at $x = 0$.`,
          },
          {
            kind: "mcq",
            q: t`$\frac{d}{dx}\left(\sin^{-1}x + \cos^{-1}x\right)$ for $-1 < x < 1$ is:`,
            options: ["0", t`$\frac{2}{\sqrt{1-x^2}}$`, t`$\frac{\pi}{2}$`, "1"],
            answer: 0,
            explain: t`The sum is the constant $\frac{\pi}{2}$, so its derivative is 0. (Also the two derivatives cancel.)`,
          },
          {
            kind: "multi",
            q: "Which functions are differentiable at x = 0?",
            options: [t`$x^2$`, t`$|x|$`, t`$x|x|$`, t`$\sin x$`, t`$|\sin x|$`],
            answers: [0, 2, 3],
            explain: t`$x|x|$ equals $-x^2$ for $x<0$ and $x^2$ for $x \ge 0$; both one-sided derivatives at 0 are 0. $|x|$ and $|\sin x|$ have a corner at 0 (LHD $-1$, RHD $1$).`,
            difficulty: 2,
            hint: "Find the slope just left and just right of 0 for each.",
          },
          {
            kind: "mcq",
            q: t`If $xy = 4$, then $\frac{dy}{dx}$ equals:`,
            options: [t`$-\frac{y}{x}$`, t`$\frac{y}{x}$`, t`$-\frac{x}{y}$`, t`$\frac{4}{x}$`],
            answer: 0,
            explain: t`$y + x\frac{dy}{dx} = 0$, so $\frac{dy}{dx} = -\frac{y}{x}$ (which also equals $-\frac{4}{x^2}$).`,
          },
        ],
      },

      /* ---------------- Board lesson 3: exp, log, parametric, second order ---------------- */
      {
        slug: "c12-exp-log-parametric",
        title: "Exponential, Logarithmic and Parametric Derivatives",
        summary: "Derivatives of e^x, a^x and log x, logarithmic differentiation for powers like x^x, derivatives of parametric functions, and second-order derivatives.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`In NCERT, $\log x$ means the **natural logarithm** (base $e$), defined for $x > 0$. The exponential function $e^x$ is defined, continuous and positive for all real $x$, and it is the inverse of $\log x$. These two have the simplest derivatives in calculus.`,
          },
          {
            type: "table",
            headers: ["Function", "Derivative", "Note"],
            rows: [
              [t`$e^x$`, t`$e^x$`, "unchanged by differentiation"],
              [t`$a^x$ ($a > 0$)`, t`$a^x \log a$`, t`because $a^x = e^{x\log a}$`],
              [t`$\log x$`, t`$\frac{1}{x}$`, t`$x > 0$`],
              [t`$\log |x|$`, t`$\frac{1}{x}$`, t`$x \neq 0$`],
              [t`$\log_a x$`, t`$\frac{1}{x\log a}$`, "change of base"],
            ],
          },
          {
            type: "heading",
            text: "Logarithmic differentiation",
          },
          {
            type: "text",
            md: t`For a function like $y = [u(x)]^{v(x)}$, where both base and power change with $x$, neither the power rule nor the $a^x$ rule works. Take $\log$ of both sides (with $u(x) > 0$): $\log y = v(x)\log u(x)$. Now differentiate implicitly. The same trick turns long products and quotients into sums, which are easier to differentiate.`,
          },
          {
            type: "example",
            title: "A variable power",
            problem: t`Differentiate $y = x^{\sin x}$, $x > 0$.`,
            steps: [
              t`Take log: $\log y = \sin x \cdot \log x$.`,
              t`Differentiate: $\frac{1}{y}\frac{dy}{dx} = \cos x \log x + \sin x \cdot \frac{1}{x}$ (product rule).`,
              t`Multiply by $y$.`,
            ],
            answer: t`$\frac{dy}{dx} = x^{\sin x}\left(\cos x \log x + \frac{\sin x}{x}\right)$.`,
          },
          {
            type: "mistake",
            wrong: t`$\frac{d}{dx}x^x = x \cdot x^{x-1}$ (power rule), or $x^x\log x$ (exponential rule).`,
            right: t`$\log y = x\log x$, so $\frac{1}{y}y' = \log x + 1$ and $\frac{d}{dx}x^x = x^x(1 + \log x)$.`,
            why: t`The power rule needs a constant power and the $a^x$ rule needs a constant base. Here both vary, and the correct answer is in fact the **sum** of the two wrong answers.`,
          },
          {
            type: "example",
            title: "Products and quotients",
            problem: t`Find $\frac{dy}{dx}$ for $y = \frac{(x+1)^2(x+2)^3}{(x+3)^4}$, $x > -1$.`,
            steps: [
              t`$\log y = 2\log(x+1) + 3\log(x+2) - 4\log(x+3)$.`,
              t`$\frac{1}{y}\frac{dy}{dx} = \frac{2}{x+1} + \frac{3}{x+2} - \frac{4}{x+3}$.`,
            ],
            answer: t`$\frac{dy}{dx} = \frac{(x+1)^2(x+2)^3}{(x+3)^4}\left[\frac{2}{x+1} + \frac{3}{x+2} - \frac{4}{x+3}\right]$.`,
          },
          {
            type: "heading",
            text: "Parametric functions and second derivatives",
          },
          {
            type: "formula",
            tex: t`x = f(t),\; y = g(t) \;\Rightarrow\; \frac{dy}{dx} = \frac{dy/dt}{dx/dt}, \quad \frac{dx}{dt} \neq 0`,
            caption: t`The second derivative is the derivative of dy/dx with respect to x: d²y/dx² = [d/dt (dy/dx)] ÷ (dx/dt).`,
          },
          {
            type: "example",
            title: "Parametric first and second derivatives",
            problem: t`If $x = 2t^2$ and $y = 4t$, find $\frac{dy}{dx}$ and $\frac{d^2y}{dx^2}$ (for $t \neq 0$).`,
            steps: [
              t`$\frac{dx}{dt} = 4t$, $\frac{dy}{dt} = 4$, so $\frac{dy}{dx} = \frac{4}{4t} = \frac{1}{t}$.`,
              t`$\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{1}{t}\right) = \frac{d}{dt}\left(\frac{1}{t}\right)\cdot\frac{dt}{dx} = -\frac{1}{t^2}\cdot\frac{1}{4t}$.`,
            ],
            answer: t`$\frac{dy}{dx} = \frac{1}{t}$ and $\frac{d^2y}{dx^2} = -\frac{1}{4t^3}$.`,
          },
          {
            type: "example",
            title: "Proving a second-order relation",
            problem: t`If $y = 3e^{2x} + 2e^{3x}$, show that $\frac{d^2y}{dx^2} - 5\frac{dy}{dx} + 6y = 0$.`,
            steps: [
              t`$y' = 6e^{2x} + 6e^{3x}$ and $y'' = 12e^{2x} + 18e^{3x}$.`,
              t`Coefficient of $e^{2x}$ in $y'' - 5y' + 6y$: $12 - 30 + 18 = 0$.`,
              t`Coefficient of $e^{3x}$: $18 - 30 + 12 = 0$.`,
            ],
            answer: t`$y'' - 5y' + 6y = 0$, as required.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`If $x = t^2$ and $y = t^3$, find $\frac{dy}{dx}$ at $t = 2$.`,
                answer: 3,
                explain: t`$\frac{dy}{dx} = \frac{3t^2}{2t} = \frac{3t}{2} = 3$ at $t = 2$.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "For x = t², y = t³, what is d²y/dx²?",
              emoji: "🧮",
              options: [t`$\frac{3}{4t}$`, t`$3t$`, t`$\frac{3}{2}$`],
              answer: 0,
              trap: 1,
              explain: t`$\frac{dy}{dx} = \frac{3t}{2}$. Differentiate this with respect to $t$ and divide by $\frac{dx}{dt} = 2t$: $\frac{3/2}{2t} = \frac{3}{4t}$. Dividing $\frac{d^2y}{dt^2} = 6t$ by $\frac{d^2x}{dt^2} = 2$ gives the wrong $3t$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`State the condition you need ($x > 0$ before taking $\log$, $\frac{dx}{dt} \neq 0$ in parametric form). In "show that $y'' + \ldots = 0$" questions, examiners give marks for $y'$, for $y''$ and for the substitution; write all three lines. When $y = u + v$ with $u$ a variable power, find $\frac{du}{dx}$ by logs **separately**; do not take $\log$ of a sum.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\frac{d}{dx}e^x = e^x$, $\frac{d}{dx}a^x = a^x\log a$, $\frac{d}{dx}\log x = \frac{1}{x}$.`,
              t`For $y = u^v$ (both varying), take $\log$: $\frac{y'}{y} = v'\log u + \frac{v u'}{u}$.`,
              t`Parametric: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$.`,
              t`$\frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)$; in parametric form divide $\frac{d}{dt}\left(\frac{dy}{dx}\right)$ by $\frac{dx}{dt}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\frac{d}{dx}a^x$`, back: t`$a^x \log a$` },
          { front: t`$\frac{d}{dx}\log_a x$`, back: t`$\frac{1}{x\log a}$` },
          { front: t`$\frac{d}{dx}x^x$`, back: t`$x^x(1 + \log x)$` },
          { front: "When do we use logarithmic differentiation?", back: "For variable powers u(x)^v(x), and for long products or quotients." },
          { front: "Parametric derivative", back: t`$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$, with $\frac{dx}{dt} \neq 0$` },
          { front: "Parametric second derivative", back: t`$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{dx/dt}$` },
          { front: t`If $y = A\cos kx + B\sin kx$, then $y'' = $ ?`, back: t`$-k^2 y$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\frac{d}{dx}2^x$ equals:`,
            options: [t`$x \cdot 2^{x-1}$`, t`$2^x$`, t`$2^x \log 2$`, t`$\frac{2^x}{\log 2}$`],
            answer: 2,
            explain: t`$\frac{d}{dx}a^x = a^x\log a$ with $a = 2$.`,
          },
          {
            kind: "mcq",
            q: t`$\frac{d}{dx}x^x$ ($x > 0$) equals:`,
            options: [t`$x \cdot x^{x-1}$`, t`$x^x \log x$`, t`$x^x(1 + \log x)$`, t`$x^x$`],
            answer: 2,
            explain: t`$\log y = x\log x \Rightarrow \frac{y'}{y} = \log x + 1$.`,
          },
          {
            kind: "numeric",
            q: t`If $y = e^{3x}$, find $\frac{d^2y}{dx^2}$ at $x = 0$.`,
            answer: 9,
            explain: t`$y' = 3e^{3x}$, $y'' = 9e^{3x}$, which is 9 at $x = 0$.`,
          },
          {
            kind: "mcq",
            q: t`$\frac{d}{dx}\log(\sin x)$, for $0 < x < \pi$, is:`,
            options: [t`$\frac{1}{\sin x}$`, t`$\cot x$`, t`$\tan x$`, t`$\frac{\cos x}{x}$`],
            answer: 1,
            explain: t`$\frac{1}{\sin x}\cdot\cos x = \cot x$.`,
          },
          {
            kind: "truefalse",
            q: t`For a parametric curve, $\frac{d^2y}{dx^2} = \frac{d^2y/dt^2}{d^2x/dt^2}$.`,
            answer: false,
            explain: t`The correct rule is $\frac{d^2y}{dx^2} = \frac{d}{dt}\left(\frac{dy}{dx}\right) \div \frac{dx}{dt}$. The ratio of second derivatives is wrong in general.`,
          },
          {
            kind: "numeric",
            q: t`Find $\frac{d}{dx}\log_{10}x$ at $x = 1$, correct to 3 decimal places.`,
            answer: 0.434,
            tolerance: 0.001,
            explain: t`$\frac{1}{x\log 10} = \frac{1}{2.3026} \approx 0.434$ at $x = 1$.`,
            difficulty: 2,
            hint: t`Use $\frac{d}{dx}\log_a x = \frac{1}{x \log_e a}$ with $\log_e 10 \approx 2.3026$.`,
          },
          {
            kind: "mcq",
            q: t`If $y = A\cos 2x + B\sin 2x$, then $\frac{d^2y}{dx^2}$ equals:`,
            options: [t`$4y$`, t`$-4y$`, t`$-2y$`, t`$2y$`],
            answer: 1,
            explain: t`$y' = -2A\sin 2x + 2B\cos 2x$ and $y'' = -4A\cos 2x - 4B\sin 2x = -4y$.`,
          },
          {
            kind: "mcq",
            q: t`If $x = a\cos t$ and $y = a\sin t$, then $\frac{dy}{dx}$ is:`,
            options: [t`$\tan t$`, t`$-\cot t$`, t`$\cot t$`, t`$-\tan t$`],
            answer: 1,
            explain: t`$\frac{dy}{dt} = a\cos t$, $\frac{dx}{dt} = -a\sin t$, so $\frac{dy}{dx} = -\cot t$.`,
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-continuity-exam-edge",
        title: "Exam edge: Continuity, Differentiability, Rolle and Mean Value",
        summary: "What JEE Main, JEE Advanced, KCET and COMEDK ask from this chapter: counting non-differentiable points, constants for differentiability, substitution traps, functional equations, and Rolle's and Lagrange's mean value theorems.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What gets asked.** KCET and COMEDK: direct derivatives (chain, implicit, parametric, $x^x$-type), finding constants for continuity, and second-derivative relations. JEE Main: counting points where a function built from $|\cdot|$, $[\cdot]$, $\max$/$\min$ is not continuous or not differentiable, constants for differentiability, derivatives of inverse-trig expressions (with range traps) and derivative of one function with respect to another. JEE Advanced: functional equations, composite functions with $[x]$ or $|x|$, and existence arguments using Rolle's theorem or the mean value theorem.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: Rolle's theorem and the mean value theorem",
            md: "The rationalised NCERT book (CBSE and Karnataka II PUC) has dropped Rolle's theorem and Lagrange's mean value theorem, and they are not in the current JEE Main syllabus. They are still in the JEE Advanced syllabus and the ISC syllabus, so ISC students should treat the last part of this lesson as board work.",
          },
          {
            type: "table",
            headers: ["Shortcut", "When it is safe"],
            rows: [
              [t`$|f(x)|$ fails to be differentiable where $f(x) = 0$ and $f'(x) \neq 0$`, t`$f$ differentiable. At a repeated root ($f = f' = 0$), e.g. $|x^3|$ or $|(x-1)^2|$, there is **no** corner.`],
              [t`$|x - a|\,g(x)$ is differentiable at $a$ iff $g(a) = 0$`, t`$g$ continuous at $a$`],
              [t`$\max(f, g)$, $\min(f, g)$: check only where $f = g$; a corner if $f' \neq g'$ there`, "f, g differentiable"],
              [t`$x^n\sin\frac{1}{x}$ (value 0 at 0) is continuous at 0 for $n > 0$, differentiable at 0 for $n > 1$`, "n real"],
              [t`$(f^{-1})'(f(a)) = \frac{1}{f'(a)}$`, t`$f$ one-one and differentiable, $f'(a) \neq 0$`],
            ],
          },
          {
            type: "example",
            title: "1. Two constants (KCET / COMEDK level)",
            problem: t`$f(x) = x^2 + a$ for $x \le 1$ and $f(x) = bx + 3$ for $x > 1$. Find $a$ and $b$ if $f$ is differentiable at $x = 1$.`,
            steps: [
              t`Differentiable needs continuous first: $1 + a = b + 3$.`,
              t`Match slopes: LHD $= 2x|_{x=1} = 2$, RHD $= b$. So $b = 2$.`,
              t`Then $1 + a = 5$, so $a = 4$.`,
            ],
            answer: t`$a = 4$, $b = 2$.`,
          },
          {
            type: "example",
            title: "2. Counting corners of a max function (JEE Main level)",
            problem: t`Find the points where $f(x) = \max(x, x^2)$ is not differentiable.`,
            steps: [
              t`$x = x^2$ at $x = 0$ and $x = 1$. For $x < 0$ and $x > 1$, $x^2 > x$; for $0 < x < 1$, $x > x^2$.`,
              t`So $f = x^2$ on $(-\infty, 0]$, $f = x$ on $[0, 1]$, $f = x^2$ on $[1, \infty)$.`,
              t`At 0: slopes $2(0) = 0$ and $1$ differ. At 1: slopes $1$ and $2(1) = 2$ differ.`,
            ],
            answer: t`Not differentiable at exactly two points, $x = 0$ and $x = 1$ (continuous everywhere).`,
          },
          {
            type: "example",
            title: "3. Derivative of one function with respect to another (JEE Main level)",
            problem: t`Find the derivative of $u = \sin^{-1}\left(\frac{2x}{1 + x^2}\right)$ with respect to $v = \tan^{-1}x$, (a) for $|x| < 1$, (b) for $x > 1$.`,
            steps: [
              t`Put $x = \tan\theta$, $\theta = v$. Then $\frac{2x}{1+x^2} = \sin 2\theta$.`,
              t`(a) $|x| < 1 \Rightarrow 2\theta \in \left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$, so $u = 2\theta = 2v$ and $\frac{du}{dv} = 2$.`,
              t`(b) $x > 1 \Rightarrow 2\theta \in \left(\frac{\pi}{2}, \pi\right)$. The principal value is $\sin^{-1}(\sin 2\theta) = \pi - 2\theta$, so $u = \pi - 2v$.`,
            ],
            answer: t`$\frac{du}{dv} = 2$ for $|x| < 1$ and $\frac{du}{dv} = -2$ for $x > 1$.`,
          },
          {
            type: "example",
            title: "4. A functional equation (JEE Advanced level)",
            problem: t`$f$ is differentiable, $f(x + y) = f(x) + f(y) + 2xy$ for all real $x, y$, and $f'(0) = 3$. Find $f(x)$.`,
            steps: [
              t`Put $x = y = 0$: $f(0) = 2f(0)$, so $f(0) = 0$.`,
              t`$f'(x) = \lim_{h\to 0}\frac{f(x+h) - f(x)}{h} = \lim_{h\to 0}\frac{f(h) + 2xh}{h} = \lim_{h \to 0}\frac{f(h) - f(0)}{h} + 2x = f'(0) + 2x$.`,
              t`So $f'(x) = 3 + 2x$. Integrate: $f(x) = 3x + x^2 + C$, and $f(0) = 0$ gives $C = 0$.`,
            ],
            answer: t`$f(x) = x^2 + 3x$.`,
          },
          {
            type: "formula",
            tex: t`\textbf{Rolle: } f(a) = f(b) \Rightarrow f'(c) = 0; \qquad \textbf{LMVT: } f'(c) = \frac{f(b) - f(a)}{b - a}, \quad c \in (a, b)`,
            caption: "Both need f continuous on [a, b] and differentiable on (a, b). Geometrically: somewhere the tangent is parallel to the chord joining the end points (horizontal, in Rolle's case).",
          },
          {
            type: "example",
            title: "5. Rolle's theorem proves a root exists (JEE Advanced level)",
            problem: t`If $a + b + c + d = 0$, show that $4ax^3 + 3bx^2 + 2cx + d = 0$ has at least one root in $(0, 1)$.`,
            steps: [
              t`Look for a function whose derivative is the given cubic: $g(x) = ax^4 + bx^3 + cx^2 + dx$.`,
              t`$g$ is a polynomial, so it is continuous on $[0, 1]$ and differentiable on $(0, 1)$.`,
              t`$g(0) = 0$ and $g(1) = a + b + c + d = 0$, so $g(0) = g(1)$.`,
              t`By Rolle's theorem there is $c_0 \in (0, 1)$ with $g'(c_0) = 0$, i.e. $4ac_0^3 + 3bc_0^2 + 2cc_0 + d = 0$.`,
            ],
            answer: "The cubic has a root between 0 and 1.",
          },
          {
            type: "mistake",
            wrong: t`$f(x) = |x|$ on $[-1, 1]$ has $f(-1) = f(1)$, so by Rolle's theorem $f'(c) = 0$ for some $c$.`,
            right: t`$|x|$ is not differentiable at $0 \in (-1, 1)$, so Rolle's theorem does not apply. Indeed $f'(x) = \pm 1$, never 0.`,
            why: "Equal end values feel like the whole condition. Rolle needs all three hypotheses; when one fails, the conclusion may fail too.",
          },
          {
            type: "mistake",
            wrong: t`$|x^2 - 3x + 2|\,$ and $\,|(x - 1)^3|$ both have corners wherever the inside is zero.`,
            right: t`$|x^2 - 3x + 2|$ has corners at $x = 1, 2$ (simple roots). $|(x-1)^3|$ is differentiable at 1, with derivative 0, because the inside has a repeated root there.`,
            why: t`The corner comes from the slope of the inside flipping sign. At a repeated root the slope of the inside is already 0, so flipping it changes nothing.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $c$ given by the mean value theorem for $f(x) = x^2$ on $[1, 3]$.`,
                answer: 2,
                explain: t`$\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4 = 2c$, so $c = 2$ (for a quadratic, $c$ is always the midpoint).`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each function by its behaviour at x = 0.",
              groups: ["Differentiable at 0", "Continuous, not differentiable", "Not continuous at 0"],
              items: [
                { text: t`$x|x|$`, group: 0, hint: "Both one-sided slopes are 0." },
                { text: t`$|x|^3$`, group: 0, hint: "Repeated zero: no corner." },
                { text: t`$x^2\sin\frac{1}{x}$, value 0 at 0`, group: 0, hint: "n = 2 > 1, so f'(0) = 0." },
                { text: t`$|\sin x|$`, group: 1, hint: "Corner: slopes −1 and 1." },
                { text: t`$x\sin\frac{1}{x}$, value 0 at 0`, group: 1, hint: "n = 1: continuous, but (f(h) − f(0))/h = sin(1/h) has no limit." },
                { text: t`$x^{1/3}$`, group: 1, hint: "Vertical tangent: the derivative is infinite at 0." },
                { text: t`$[x]$`, group: 2, hint: "Jumps from −1 to 0." },
                { text: t`$\frac{|x|}{x}$, value 0 at 0`, group: 2, hint: "LHL −1, RHL 1." },
              ],
              explain: "Differentiable ⊂ continuous. Corners and vertical tangents keep a function continuous but not differentiable; jumps destroy continuity itself.",
            },
          },
          {
            type: "keypoints",
            items: [
              "For differentiability of a piecewise function, check continuity first, then match the one-sided derivatives.",
              t`$|f(x)|$ has corners only at simple zeros of $f$; $\max/\min$ functions have corners only where the pieces cross with different slopes.`,
              t`In inverse-trig substitution, the simplified form depends on the interval; outside it the sign of the answer can change.`,
              t`For functional equations, find $f(0)$ first, then write $f'(x)$ from the definition.`,
              "Rolle and LMVT need continuity on [a, b] and differentiability on (a, b); use Rolle on an antiderivative to prove a root exists.",
            ],
          },
        ],
        flashcards: [
          { front: t`Corners of $|f(x)|$`, back: t`At zeros of $f$ where $f' \neq 0$ (simple roots). No corner at repeated roots.` },
          { front: t`$|x - a|\,g(x)$ differentiable at $a$ when…`, back: t`$g(a) = 0$ (for continuous $g$).` },
          { front: t`$x^n\sin\frac{1}{x}$ at 0 (value 0)`, back: "Continuous if n > 0, differentiable if n > 1." },
          { front: "Rolle's theorem", back: "f continuous on [a, b], differentiable on (a, b), f(a) = f(b) ⇒ f'(c) = 0 for some c in (a, b)." },
          { front: "Lagrange's mean value theorem", back: "Same first two conditions ⇒ f'(c) = [f(b) − f(a)]/(b − a) for some c in (a, b)." },
          { front: "MVT point c for a quadratic on [a, b]", back: "c = (a + b)/2, the midpoint." },
          { front: "Derivative of the inverse", back: t`$(f^{-1})'(f(a)) = \frac{1}{f'(a)}$` },
          { front: t`$\frac{d}{dx}\sin^{-1}\frac{2x}{1+x^2}$ for $|x| < 1$ and $x > 1$`, back: t`$\frac{2}{1+x^2}$ and $-\frac{2}{1+x^2}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`How many points of $\mathbb{R}$ is $f(x) = |x^2 - 5x + 6| + |x|$ not differentiable at?`,
            answer: 3,
            explain: t`$x^2 - 5x + 6 = (x-2)(x-3)$ has simple roots 2 and 3; $|x|$ has a corner at 0. At each of these the other term is smooth, so there are 3 points.`,
            difficulty: 2,
            hint: "List the simple zeros of each expression inside a modulus.",
          },
          {
            kind: "mcq",
            q: t`$f(x) = ax^2 + b$ for $x < 2$ and $f(x) = \frac{4}{x}$ for $x \ge 2$ is differentiable at $x = 2$. Then $(a, b)$ is:`,
            options: [t`$\left(-\frac{1}{4}, 3\right)$`, t`$\left(\frac{1}{4}, 1\right)$`, t`$\left(-\frac{1}{2}, 4\right)$`, t`$\left(-1, 6\right)$`],
            answer: 0,
            explain: t`Slopes: $2a(2) = -\frac{4}{2^2} = -1$, so $a = -\frac{1}{4}$. Continuity: $4a + b = 2$, so $b = 3$.`,
            difficulty: 2,
            hint: "Match the slopes and the values at x = 2.",
          },
          {
            kind: "numeric",
            q: t`Find $c$ in Rolle's theorem for $f(x) = x^2 - 4x + 3$ on $[1, 3]$.`,
            answer: 2,
            explain: t`$f(1) = f(3) = 0$; $f'(c) = 2c - 4 = 0$ gives $c = 2$.`,
          },
          {
            kind: "numeric",
            q: t`Find $c$ given by the mean value theorem for $f(x) = x^3$ on $[0, 3]$, correct to 2 decimal places.`,
            answer: 1.73,
            tolerance: 0.01,
            explain: t`$\frac{27 - 0}{3} = 9 = 3c^2$, so $c = \sqrt{3} \approx 1.73$, which lies in $(0, 3)$.`,
          },
          {
            kind: "multi",
            q: "Select all true statements.",
            options: [
              "A function differentiable at c is continuous at c.",
              "A function continuous at c is differentiable at c.",
              t`$|x|^3$ is differentiable at 0.`,
              t`$[x]$ is continuous at $x = \frac{1}{2}$.`,
              t`$x|x|$ is not differentiable at 0.`,
            ],
            answers: [0, 2, 3],
            explain: t`Differentiable ⇒ continuous (not conversely). $|x|^3$ has derivative 0 at 0. $[x]$ is constant near $\frac{1}{2}$. $x|x|$ has both one-sided derivatives equal to 0.`,
          },
          {
            kind: "mcq",
            q: t`If $x = a(t - \sin t)$ and $y = a(1 - \cos t)$, then $\frac{dy}{dx}$ equals:`,
            options: [t`$\tan\frac{t}{2}$`, t`$\cot\frac{t}{2}$`, t`$\cot t$`, t`$-\cot\frac{t}{2}$`],
            answer: 1,
            explain: t`$\frac{dy}{dx} = \frac{a\sin t}{a(1 - \cos t)} = \frac{2\sin\frac{t}{2}\cos\frac{t}{2}}{2\sin^2\frac{t}{2}} = \cot\frac{t}{2}$.`,
          },
          {
            kind: "numeric",
            q: t`$f$ is differentiable, $f(x + y) = f(x)f(y)$ for all $x, y$, $f(0) \neq 0$ and $f'(0) = 2$. Find $f(1)$ to 2 decimal places.`,
            answer: 7.39,
            tolerance: 0.01,
            explain: t`$f(0) = f(0)^2$ gives $f(0) = 1$. Then $f'(x) = f(x)\lim_{h\to 0}\frac{f(h) - 1}{h} = 2f(x)$, so $f(x) = e^{2x}$ and $f(1) = e^2 \approx 7.39$.`,
            difficulty: 3,
            hint: t`Write $f(x+h) - f(x) = f(x)[f(h) - 1]$.`,
          },
          {
            kind: "mcq",
            q: t`For $x > 1$, $\frac{d}{dx}\sin^{-1}\left(\frac{2x}{1 + x^2}\right)$ equals:`,
            options: [t`$\frac{2}{1 + x^2}$`, t`$-\frac{2}{1 + x^2}$`, t`$\frac{1}{1 + x^2}$`, "0"],
            answer: 1,
            explain: t`For $x > 1$ the expression equals $\pi - 2\tan^{-1}x$, whose derivative is $-\frac{2}{1 + x^2}$.`,
            difficulty: 3,
            hint: t`With $x = \tan\theta$, where does $2\theta$ lie when $x > 1$?`,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Application of Derivatives (NCERT Ch 6) = Applications of Derivatives (ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-application-of-derivatives",
    title: "Application of Derivatives",
    icon: "🎯",
    description: "Rate of change, increasing and decreasing functions, local and absolute maxima and minima, and optimisation problems; plus tangents, normals and approximations for ISC and JEE.",
    lessons: [
      /* ---------------- Board lesson 1: rate of change, monotonic ---------------- */
      {
        slug: "c12-rate-of-change-monotonic",
        title: "Rate of Change and Increasing or Decreasing Functions",
        summary: "The derivative as a rate of change, related rates through time, marginal cost and revenue, and using the sign of f'(x) to find where a function increases or decreases.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎈",
            caption: "A balloon seller at a Dussehra fair pumps air in at a steady rate, yet the balloon's radius grows more slowly as it gets bigger. Derivatives explain why.",
          },
          {
            type: "text",
            md: t`If $y = f(x)$, then $\frac{dy}{dx}$ is the **rate of change of $y$ with respect to $x$**, and $\left.\frac{dy}{dx}\right|_{x = x_0}$ is that rate at $x = x_0$.

When both $x$ and $y$ change with time $t$, the chain rule links their rates: $\frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt}$. In economics, if $C(x)$ is the total cost and $R(x)$ the total revenue for $x$ units, then **marginal cost** $MC = \frac{dC}{dx}$ and **marginal revenue** $MR = \frac{dR}{dx}$: the approximate extra cost or revenue from one more unit.`,
          },
          {
            type: "example",
            title: "Related rates: a growing balloon",
            problem: t`The radius of a spherical balloon increases at 0.5 cm/s. How fast is its volume increasing when the radius is 10 cm?`,
            steps: [
              t`$V = \frac{4}{3}\pi r^3$, so $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$.`,
              t`Substitute $r = 10$ and $\frac{dr}{dt} = 0.5$ **after** differentiating: $\frac{dV}{dt} = 4\pi(100)(0.5)$.`,
            ],
            answer: t`$\frac{dV}{dt} = 200\pi \approx 628.3$ cm³/s.`,
          },
          {
            type: "example",
            title: "Marginal revenue",
            problem: t`A handloom unit in Varanasi earns total revenue $R(x) = 2x^2 + 50x + 10$ rupees from selling $x$ saris. Find the marginal revenue when $x = 8$.`,
            steps: [
              t`$MR = \frac{dR}{dx} = 4x + 50$.`,
              t`At $x = 8$: $MR = 32 + 50 = 82$.`,
            ],
            answer: "Marginal revenue is ₹82 per sari at x = 8.",
          },
          {
            type: "mistake",
            wrong: t`Put $r = 10$ into $V = \frac{4}{3}\pi r^3$ first, then differentiate with respect to $t$.`,
            right: t`Differentiate the general relation first, $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$, and substitute the instant's values only at the end.`,
            why: t`$r = 10$ is true only at one instant. Putting it in early makes $V$ a constant, so you would get $\frac{dV}{dt} = 0$, which is clearly wrong for a growing balloon.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`The edge of a cube increases at 3 cm/s. At what rate (in cm³/s) is its volume increasing when the edge is 10 cm?`,
                answer: 900,
                unit: "cm³/s",
                explain: t`$V = a^3$, $\frac{dV}{dt} = 3a^2\frac{da}{dt} = 3(100)(3) = 900$ cm³/s.`,
              },
            ],
          },
          {
            type: "heading",
            text: "Increasing and decreasing functions",
          },
          {
            type: "text",
            md: t`Let $I$ be an interval in the domain of $f$. $f$ is **increasing** on $I$ if $x_1 < x_2$ in $I$ implies $f(x_1) \le f(x_2)$, and **strictly increasing** if it implies $f(x_1) < f(x_2)$. **Decreasing** and **strictly decreasing** are defined with $\ge$ and $>$.

The sign of the derivative decides this. Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.`,
          },
          {
            type: "formula",
            tex: t`f'(x) > 0 \text{ on } (a,b) \Rightarrow f \text{ strictly increasing on } [a,b]; \quad f'(x) < 0 \Rightarrow \text{strictly decreasing}; \quad f'(x) = 0 \Rightarrow \text{constant}`,
            caption: "With ≥ 0 (or ≤ 0) in place of > 0 (or < 0), f is increasing (or decreasing).",
          },
          {
            type: "example",
            title: "Finding the intervals",
            problem: t`Find the intervals in which $f(x) = 2x^3 - 3x^2 - 36x + 7$ is strictly increasing or strictly decreasing.`,
            steps: [
              t`$f'(x) = 6x^2 - 6x - 36 = 6(x^2 - x - 6) = 6(x - 3)(x + 2)$.`,
              t`$f'(x) = 0$ at $x = -2$ and $x = 3$. These split the line into $(-\infty, -2)$, $(-2, 3)$, $(3, \infty)$.`,
              t`Test a point in each: $f'(-3) = 6(-6)(-1) > 0$; $f'(0) = -36 < 0$; $f'(4) = 6(1)(6) > 0$.`,
            ],
            answer: t`Strictly increasing on $(-\infty, -2]$ and $[3, \infty)$; strictly decreasing on $[-2, 3]$.`,
          },
          {
            type: "text",
            md: t`$f'(x) > 0$ is **sufficient** for strictly increasing, not necessary. $f(x) = x^3$ is strictly increasing on $\mathbb{R}$ even though $f'(0) = 0$: the derivative is zero only at an isolated point and positive on both sides.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "How does each function behave on all of ℝ?",
              groups: ["Strictly increasing", "Strictly decreasing", "Neither"],
              items: [
                { text: t`$e^x$`, group: 0, hint: t`$f'(x) = e^x > 0$.` },
                { text: t`$x^3$`, group: 0, hint: "f' = 3x² is zero only at x = 0." },
                { text: t`$x + \sin x$`, group: 0, hint: "f' = 1 + cos x ≥ 0, zero only at isolated points." },
                { text: t`$-2x + 5$`, group: 1, hint: "Slope −2." },
                { text: t`$e^{-x}$`, group: 1, hint: t`$f'(x) = -e^{-x} < 0$.` },
                { text: t`$x^2$`, group: 2, hint: "Falls on (−∞, 0], rises on [0, ∞)." },
                { text: t`$\sin x$`, group: 2, hint: "It goes up and down." },
              ],
              explain: "Look at the sign of f'(x) on the whole line. A derivative that touches 0 at isolated points does not stop a function from being strictly increasing.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: t`Write the factorised $f'(x)$, mark the critical points on a number line, and show the sign of $f'$ in each part, either as a small table or in words. Examiners give a mark for the sign test, not just the final intervals. Both closed and open end points ($[3, \infty)$ or $(3, \infty)$) are accepted for these intervals.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\frac{dy}{dx}$ is the rate of change of $y$ with respect to $x$; with time, $\frac{dy}{dt} = \frac{dy}{dx}\frac{dx}{dt}$.`,
              "Substitute values of the instant only after differentiating.",
              "Marginal cost and marginal revenue are dC/dx and dR/dx.",
              t`Sign of $f'$: positive → increasing, negative → decreasing, zero on an interval → constant.`,
            ],
          },
        ],
        flashcards: [
          { front: "Rate of change of y with respect to x", back: t`$\frac{dy}{dx}$` },
          { front: "Related rates rule", back: t`$\frac{dy}{dt} = \frac{dy}{dx}\cdot\frac{dx}{dt}$` },
          { front: "Marginal cost", back: "MC = dC/dx: the approximate cost of one more unit." },
          { front: "Strictly increasing on I", back: t`$x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$ for all $x_1, x_2$ in $I$.` },
          { front: t`If $f'(x) < 0$ on $(a, b)$…`, back: "f is strictly decreasing on [a, b] (given continuity on [a, b])." },
          { front: t`Is $x^3$ strictly increasing on $\mathbb{R}$?`, back: "Yes, even though f'(0) = 0." },
          { front: t`$\frac{dV}{dt}$ for a sphere`, back: t`$4\pi r^2\frac{dr}{dt}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`The radius of a circular ripple grows at 2 cm/s. When the radius is 5 cm, the area grows at $k\pi$ cm²/s. Find $k$.`,
            answer: 20,
            explain: t`$\frac{dA}{dt} = 2\pi r\frac{dr}{dt} = 2\pi(5)(2) = 20\pi$.`,
          },
          {
            kind: "mcq",
            q: t`On which interval is $f(x) = x^2 - 4x$ decreasing?`,
            options: [t`$(-\infty, 2]$`, t`$[2, \infty)$`, t`$(-\infty, 4]$`, t`$[0, 4]$`],
            answer: 0,
            explain: t`$f'(x) = 2x - 4 \le 0$ for $x \le 2$.`,
          },
          {
            kind: "truefalse",
            q: t`$f(x) = x^3$ is strictly increasing on $\mathbb{R}$ even though $f'(0) = 0$.`,
            answer: true,
            explain: t`$f'(x) = 3x^2 > 0$ for all $x \neq 0$; a single zero does not break strict increase.`,
          },
          {
            kind: "numeric",
            q: t`The total cost of making $x$ units is $C(x) = 0.01x^3 - 0.5x^2 + 40x + 2000$ rupees. Find the marginal cost (in ₹) when $x = 10$.`,
            answer: 33,
            explain: t`$C'(x) = 0.03x^2 - x + 40$; at $x = 10$: $3 - 10 + 40 = 33$.`,
          },
          {
            kind: "multi",
            q: t`Which functions are strictly decreasing on $\left(0, \frac{\pi}{2}\right)$?`,
            options: [t`$\cos x$`, t`$\sin x$`, t`$\cot x$`, t`$\tan x$`, t`$e^{-x}$`],
            answers: [0, 2, 4],
            explain: t`Derivatives: $-\sin x < 0$, $\cos x > 0$, $-\operatorname{cosec}^2 x < 0$, $\sec^2 x > 0$, $-e^{-x} < 0$.`,
          },
          {
            kind: "mcq",
            q: t`$f(x) = \sin x$ is strictly increasing on:`,
            options: [t`$\left[0, \frac{\pi}{2}\right]$`, t`$\left[\frac{\pi}{2}, \pi\right]$`, t`$\left[\pi, \frac{3\pi}{2}\right]$`, t`$[0, \pi]$`],
            answer: 0,
            explain: t`$f'(x) = \cos x > 0$ on $\left(0, \frac{\pi}{2}\right)$. On $\left(\frac{\pi}{2}, \frac{3\pi}{2}\right)$, $\cos x < 0$, and $[0, \pi]$ contains both kinds.`,
          },
          {
            kind: "mcq",
            q: t`A student puts $r = 10$ into $V = \frac{4}{3}\pi r^3$ and then differentiates with respect to $t$. What does she get for $\frac{dV}{dt}$?`,
            options: ["0", t`$400\pi$`, t`$4\pi r^2$`, t`$\frac{4000\pi}{3}$`],
            answer: 0,
            explain: t`After substitution $V$ is the constant $\frac{4000\pi}{3}$, whose derivative is 0. That is why values are substituted after differentiating.`,
            difficulty: 2,
          },
        ],
      },

      /* ---------------- Board lesson 2: local maxima and minima ---------------- */
      {
        slug: "c12-maxima-minima-tests",
        title: "Local Maxima and Minima: First and Second Derivative Tests",
        summary: "Maximum and minimum values, local extrema, critical points, the first derivative test, the second derivative test and points of inflection.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏔️",
            caption: "On a trek across the Western Ghats you pass many peaks and valleys. Each peak is a local maximum of height, even if a taller peak lies further on.",
          },
          {
            type: "text",
            md: t`$f$ has a **maximum value** on an interval $I$ at $c$ if $f(c) \ge f(x)$ for all $x \in I$ (similarly **minimum value**). $f$ has a **local maximum** at an interior point $c$ if there is some $h > 0$ with $f(c) \ge f(x)$ for all $x$ in $(c - h, c + h)$; $f(c)$ is then a **local maximum value**. Local minimum is defined the same way with $\le$.

**Theorem.** If $f$ has a local maximum or minimum at an interior point $c$ and $f$ is differentiable at $c$, then $f'(c) = 0$. A point where $f'(c) = 0$ or $f$ is not differentiable is a **critical point**. Extrema can occur only at critical points (or end points of the domain).`,
          },
          {
            type: "table",
            headers: ["Sign of f'(x) as x passes through c (left → right)", "Conclusion (first derivative test)"],
            rows: [
              ["+ → −", "local maximum at c"],
              ["− → +", "local minimum at c"],
              ["no change", "neither; c is a **point of inflection**"],
            ],
          },
          {
            type: "example",
            title: "First derivative test",
            problem: t`Find the local maxima and minima of $f(x) = x^3 - 6x^2 + 9x + 2$.`,
            steps: [
              t`$f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$, so the critical points are $x = 1, 3$.`,
              t`Near 1: $f' > 0$ just left (e.g. $x = 0$), $f' < 0$ just right (e.g. $x = 2$). Sign + → −: local maximum. $f(1) = 1 - 6 + 9 + 2 = 6$.`,
              t`Near 3: $f' < 0$ left, $f' > 0$ right (e.g. $x = 4$). Sign − → +: local minimum. $f(3) = 27 - 54 + 27 + 2 = 2$.`,
            ],
            answer: "Local maximum value 6 at x = 1; local minimum value 2 at x = 3.",
          },
          {
            type: "formula",
            tex: t`f'(c) = 0:\quad f''(c) < 0 \Rightarrow \text{local max}; \quad f''(c) > 0 \Rightarrow \text{local min}; \quad f''(c) = 0 \Rightarrow \text{test fails}`,
            caption: "Second derivative test (f twice differentiable at c). When it fails, go back to the first derivative test.",
          },
          {
            type: "example",
            title: "Second derivative test",
            problem: t`Find the local extrema of $f(x) = x^4 - 8x^2 + 3$.`,
            steps: [
              t`$f'(x) = 4x^3 - 16x = 4x(x - 2)(x + 2)$; critical points $x = 0, \pm 2$.`,
              t`$f''(x) = 12x^2 - 16$.`,
              t`$f''(0) = -16 < 0$: local max, $f(0) = 3$.`,
              t`$f''(\pm 2) = 48 - 16 = 32 > 0$: local min, $f(\pm 2) = 16 - 32 + 3 = -13$.`,
            ],
            answer: "Local maximum value 3 at x = 0; local minimum value −13 at x = 2 and at x = −2.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find the local minimum value of $f(x) = x^2 - 6x + 10$.`,
                answer: 1,
                explain: t`$f'(x) = 2x - 6 = 0$ at $x = 3$; $f''(x) = 2 > 0$, so minimum $f(3) = 9 - 18 + 10 = 1$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`A critical point need not have a derivative at all. $f(x) = |x|$ is not differentiable at 0, yet $f(0) = 0 \le |x|$ for every $x$, so 0 is a local (in fact absolute) minimum. The second derivative test cannot be used there; the first derivative test can ($f' = -1$ on the left, $+1$ on the right).`,
          },
          {
            type: "mistake",
            wrong: t`If $f'(c) = 0$ and $f''(c) = 0$, then $f$ has no maximum or minimum at $c$.`,
            right: t`When $f''(c) = 0$ the second derivative test simply gives no answer. Use the first derivative test: $x^4$ has a minimum at 0, $-x^4$ a maximum, and $x^3$ neither, though all have $f'(0) = f''(0) = 0$.`,
            why: "Students read \"the test fails\" as \"there is no extremum\". The test failing means only that this tool cannot decide.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the second derivative test steps in order.",
              items: [
                "Find f'(x)",
                "Solve f'(x) = 0 to get the critical points",
                "Find f''(x)",
                "Find the sign of f'' at each critical point",
                "Conclude max or min and compute f at that point",
              ],
              explain: "Critical points come first; f'' only tells you about points where f' = 0. Always finish by computing the actual local maximum or minimum value.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "Say which test you are using. Answers must give both the **point** (x) and the **value** f(x): \"local maximum value 6 at x = 1\". Writing only \"maximum at x = 1\" when the value is asked costs a mark.",
          },
          {
            type: "keypoints",
            items: [
              "Local maximum or minimum at an interior point where f is differentiable ⇒ f'(c) = 0.",
              "Critical points: f'(c) = 0 or f not differentiable at c.",
              "First derivative test: + → − is a max, − → + is a min, no change is a point of inflection.",
              "Second derivative test: f'' < 0 max, f'' > 0 min, f'' = 0 no conclusion.",
            ],
          },
        ],
        flashcards: [
          { front: "Local maximum at c", back: "f(c) ≥ f(x) for all x in some interval (c − h, c + h)." },
          { front: "Critical point", back: "A point where f'(c) = 0 or f is not differentiable." },
          { front: "First derivative test: + → −", back: "Local maximum." },
          { front: "First derivative test: no sign change", back: "Neither max nor min; a point of inflection." },
          { front: "Second derivative test", back: "f'(c) = 0 and f''(c) < 0 ⇒ max; f''(c) > 0 ⇒ min; f''(c) = 0 ⇒ test fails." },
          { front: t`Extremum of $|x|$ at 0?`, back: "Local (and absolute) minimum, though f'(0) does not exist." },
          { front: t`Does $f'(c) = 0$ always give an extremum?`, back: "No. x³ has f'(0) = 0 but no extremum at 0." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$f(x) = x^3 - 3x$ has a local maximum at:`,
            options: [t`$x = 1$`, t`$x = -1$`, t`$x = 0$`, t`$x = 3$`],
            answer: 1,
            explain: t`$f'(x) = 3(x^2 - 1) = 0$ at $\pm 1$; $f''(x) = 6x$ is negative at $x = -1$.`,
          },
          {
            kind: "truefalse",
            q: t`If $f'(c) = 0$, then $f$ has a local maximum or a local minimum at $c$.`,
            answer: false,
            explain: t`$f(x) = x^3$ has $f'(0) = 0$ but is strictly increasing through 0.`,
          },
          {
            kind: "mcq",
            q: t`$f'(c) = 0$ and $f''(c) = 0$. What can you conclude?`,
            options: ["c is a local maximum", "c is a local minimum", "c is not an extremum", "Nothing yet; use the first derivative test"],
            answer: 3,
            explain: "The second derivative test fails. x⁴, −x⁴ and x³ show all three outcomes are possible.",
          },
          {
            kind: "numeric",
            q: t`Find the local maximum value of $f(x) = -x^2 + 4x + 1$.`,
            answer: 5,
            explain: t`$f'(x) = -2x + 4 = 0$ at $x = 2$, $f''(x) = -2 < 0$; $f(2) = -4 + 8 + 1 = 5$.`,
          },
          {
            kind: "numeric",
            q: t`How many critical points does $f(x) = x^4 - 2x^2$ have?`,
            answer: 3,
            explain: t`$f'(x) = 4x^3 - 4x = 4x(x - 1)(x + 1)$, zero at $x = -1, 0, 1$.`,
          },
          {
            kind: "mcq",
            q: t`At $x = 0$, $f(x) = |x|$ has:`,
            options: ["a local minimum, though f'(0) does not exist", "no extremum, since f'(0) does not exist", "a local maximum", "a point of inflection"],
            answer: 0,
            explain: "|x| ≥ 0 = f(0) for every x. Points where f is not differentiable are critical points too.",
          },
          {
            kind: "multi",
            q: "Which functions have neither a local maximum nor a local minimum at x = 0?",
            options: [t`$x^3$`, t`$x^4$`, t`$x^5$`, t`$-x^2$`, t`$x|x|$`],
            answers: [0, 2, 4],
            explain: t`$x^3$, $x^5$ and $x|x|$ are strictly increasing through 0. $x^4$ has a minimum and $-x^2$ a maximum.`,
            difficulty: 2,
            hint: "Check whether f' changes sign at 0.",
          },
        ],
      },

      /* ---------------- Board lesson 3: absolute extrema, optimisation ---------------- */
      {
        slug: "c12-absolute-extrema-optimisation",
        title: "Absolute Maxima, Minima and Optimisation Problems",
        summary: "Finding the absolute maximum and minimum of a continuous function on a closed interval, and solving real-life optimisation problems step by step.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`**Theorem.** A function continuous on a **closed** interval $[a, b]$ always has an **absolute maximum** and an **absolute minimum** value on it. Each is reached either at a critical point inside $(a, b)$ or at an end point $a$ or $b$.

On an open interval this can fail: $f(x) = x$ on $(0, 1)$ has no largest or smallest value.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Find all critical points of $f$ in $(a, b)$.`,
              t`Add the end points $a$ and $b$.`,
              t`Compute $f$ at every point in the list.`,
              "The largest value is the absolute maximum; the smallest is the absolute minimum.",
            ],
          },
          {
            type: "example",
            title: "Absolute extrema on a closed interval",
            problem: t`Find the absolute maximum and minimum values of $f(x) = x^3 - 3x^2 - 9x + 5$ on $[-2, 4]$.`,
            steps: [
              t`$f'(x) = 3x^2 - 6x - 9 = 3(x - 3)(x + 1)$: critical points $x = -1, 3$, both in $(-2, 4)$.`,
              t`$f(-2) = -8 - 12 + 18 + 5 = 3$; $f(-1) = -1 - 3 + 9 + 5 = 10$.`,
              t`$f(3) = 27 - 27 - 27 + 5 = -22$; $f(4) = 64 - 48 - 36 + 5 = -15$.`,
            ],
            answer: "Absolute maximum 10 at x = −1; absolute minimum −22 at x = 3.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find the absolute maximum value of $f(x) = x^2$ on $[-1, 2]$.`,
                answer: 4,
                explain: t`Critical point 0 gives $f(0) = 0$; end points give $f(-1) = 1$, $f(2) = 4$. Largest is 4.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The absolute maximum on [a, b] is always at a point where f'(x) = 0.",
            right: t`The end points must also be checked. For $f(x) = x^3 - 3x$ on $[0, 3]$, the only critical point $x = 1$ gives $-2$ (the minimum), while the maximum $18$ is at the end point $x = 3$.`,
            why: "Practice with local maxima trains us to look only where the derivative is zero. At an end point the function can still be climbing.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Where is the absolute maximum of x³ − 3x on [0, 3]?",
              emoji: "📍",
              options: ["At x = 1, the critical point", "At x = 3, an end point", "At x = 0, an end point"],
              answer: 1,
              trap: 0,
              explain: "f(0) = 0, f(1) = −2 and f(3) = 18. The critical point is the absolute minimum; the maximum is at the end point x = 3.",
            },
          },
          {
            type: "heading",
            text: "Optimisation problems",
          },
          {
            type: "text",
            md: "Name the quantity to be made largest or smallest, and the variables. Use the given condition (the **constraint**) to write the quantity as a function of **one** variable, and write the allowed values of that variable. Then find the critical points, confirm max or min (usually with the second derivative test), and answer the question asked, with units.",
          },
          {
            type: "example",
            title: "The biggest open box",
            problem: t`A sheet-metal worker in Ludhiana cuts equal squares of side $x$ cm from the corners of a 24 cm × 24 cm sheet and folds up the sides to make an open box. Find $x$ for the largest volume, and that volume.`,
            steps: [
              t`Base is $(24 - 2x) \times (24 - 2x)$, height $x$, so $V = x(24 - 2x)^2 = 4x^3 - 96x^2 + 576x$, with $0 < x < 12$.`,
              t`$V'(x) = 12x^2 - 192x + 576 = 12(x - 4)(x - 12)$. In $(0, 12)$ the only critical point is $x = 4$.`,
              t`$V''(x) = 24x - 192$, so $V''(4) = -96 < 0$: a maximum.`,
              t`$V(4) = 4 \times 16^2 = 1024$.`,
            ],
            answer: "Cut 4 cm squares; the largest volume is 1024 cm³.",
          },
          {
            type: "example",
            title: "The cheapest closed tank",
            problem: t`A closed cylindrical water tank must hold a fixed volume $V$. Show that its total surface area is least when the height equals the diameter.`,
            steps: [
              t`$V = \pi r^2 h$, so $h = \frac{V}{\pi r^2}$. Surface area $S = 2\pi r^2 + 2\pi r h = 2\pi r^2 + \frac{2V}{r}$, $r > 0$.`,
              t`$S'(r) = 4\pi r - \frac{2V}{r^2} = 0 \Rightarrow V = 2\pi r^3$.`,
              t`$S''(r) = 4\pi + \frac{4V}{r^3} > 0$, so this is a minimum.`,
              t`Then $h = \frac{V}{\pi r^2} = \frac{2\pi r^3}{\pi r^2} = 2r$.`,
            ],
            answer: "Least surface area when h = 2r, i.e. height = diameter.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "How optimisation questions are marked",
            md: "These are often 5-mark questions. Marks typically go to: setting up the function in one variable (often 2 marks), the derivative and critical point, the second-derivative check, and the final answer with units. A correct answer with no check that it is a maximum (or minimum) loses a mark.",
          },
          {
            type: "keypoints",
            items: [
              "A continuous function on a closed interval has an absolute maximum and minimum.",
              "Compare f at the critical points inside and at both end points.",
              "In word problems, use the constraint to reduce to one variable and state its domain.",
              "Confirm max or min, then answer exactly what was asked, with units.",
            ],
          },
        ],
        flashcards: [
          { front: "Where can an absolute extremum on [a, b] occur?", back: "At a critical point in (a, b) or at an end point." },
          { front: "Does every continuous function on an open interval have a maximum?", back: "No. f(x) = x on (0, 1) has none." },
          { front: "Fixed sum, largest product of two positive numbers", back: "When the two numbers are equal." },
          { front: "Rectangle with fixed perimeter, largest area", back: "A square." },
          { front: "Closed cylinder of fixed volume, least surface area", back: "h = 2r (height = diameter)." },
          { front: "Open box from an a × a sheet, largest volume", back: "Cut squares of side a/6." },
          { front: "First step of any optimisation problem", back: "Write the quantity as a function of one variable using the constraint, with its domain." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the absolute minimum value of $f(x) = x^3 - 3x$ on $[0, 2]$.`,
            answer: -2,
            explain: t`Critical point $x = 1$: $f(1) = -2$. End points: $f(0) = 0$, $f(2) = 2$. Least is $-2$.`,
          },
          {
            kind: "numeric",
            q: "Two positive numbers add up to 20. What is the largest possible value of their product?",
            answer: 100,
            explain: t`$P = x(20 - x)$, $P' = 20 - 2x = 0$ at $x = 10$, $P'' = -2 < 0$; $P = 100$.`,
          },
          {
            kind: "mcq",
            q: "A rectangle has perimeter 36 cm. Its largest possible area is:",
            options: ["81 cm²", "80 cm²", "72 cm²", "324 cm²"],
            answer: 0,
            explain: t`$A = x(18 - x)$ is largest at $x = 9$: a square of side 9, area 81 cm².`,
          },
          {
            kind: "numeric",
            q: t`Find the absolute maximum value of $\sin x + \cos x$ on $\left[0, \frac{\pi}{2}\right]$, to 2 decimal places.`,
            answer: 1.41,
            tolerance: 0.01,
            explain: t`$f'(x) = \cos x - \sin x = 0$ at $\frac{\pi}{4}$, giving $\sqrt{2} \approx 1.41$; both end points give 1.`,
          },
          {
            kind: "truefalse",
            q: "A function continuous on an open interval always has an absolute maximum value on it.",
            answer: false,
            explain: "The guarantee is only for closed intervals. f(x) = x on (0, 1) never reaches a largest value.",
          },
          {
            kind: "mcq",
            q: "For a closed cylinder of fixed volume, the surface area is least when:",
            options: ["h = r", "h = 2r", t`$h = \frac{r}{2}$`, "h = 4r"],
            answer: 1,
            explain: t`$S = 2\pi r^2 + \frac{2V}{r}$ is least when $V = 2\pi r^3$, giving $h = 2r$.`,
          },
          {
            kind: "numeric",
            q: "Equal squares of side x cm are cut from the corners of a 24 cm × 24 cm sheet to make an open box. For what x (in cm) is the volume largest?",
            answer: 4,
            unit: "cm",
            explain: t`$V' = 12(x - 4)(x - 12)$; in $(0, 12)$ only $x = 4$, and $V''(4) < 0$.`,
            difficulty: 2,
            hint: "Write V(x) = x(24 − 2x)² and keep 0 < x < 12.",
          },
        ],
      },

      /* ---------------- Exam edge ---------------- */
      {
        slug: "c12-application-derivatives-exam-edge",
        title: "Exam edge: Monotonicity, Extrema, Tangents and Approximations",
        summary: "What JEE Main, JEE Advanced, KCET and COMEDK ask: monotonicity with a parameter, inequalities, counting real roots, distance optimisation, plus tangents, normals and approximations for ISC and JEE Advanced.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`**What gets asked.** KCET and COMEDK: intervals of increase and decrease, local maximum/minimum values, simple rate problems, and the maximum of $a\sin x + b\cos x$. JEE Main: a parameter that keeps a function monotonic, number of real roots of a cubic, standard optimisation results. JEE Advanced: proving inequalities with monotonicity, roots of equations with parameters, shortest distance from a point to a curve, and tangent and normal geometry.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note: tangents, normals and approximations",
            md: "The rationalised NCERT book (CBSE and Karnataka II PUC) has dropped tangents and normals and approximations, and the current JEE Main syllabus lists only rate of change, monotonicity and maxima/minima. JEE Advanced still lists tangents and normals; ISC students should check their year's syllabus, which has traditionally included them. KCET and COMEDK follow the PUC syllabus.",
          },
          {
            type: "formula",
            tex: t`\text{Tangent: } y - y_1 = f'(x_1)(x - x_1); \quad \text{Normal: } y - y_1 = -\frac{1}{f'(x_1)}(x - x_1); \quad f(x + \Delta x) \approx f(x) + f'(x)\,\Delta x`,
            caption: "If f'(x₁) = 0 the tangent is horizontal and the normal is the vertical line x = x₁.",
          },
          {
            type: "table",
            headers: ["Result", "When it is safe"],
            rows: [
              [t`$ax^3 + bx^2 + cx + d$ is monotonic on $\mathbb{R}$ iff $b^2 \le 3ac$`, t`$a \neq 0$; comes from discriminant of $f'$ being $\le 0$`],
              [t`$x^3 + px + q = 0$ has 3 distinct real roots iff $4p^3 + 27q^2 < 0$`, "real p, q"],
              [t`Max of $a\sin x + b\cos x$ is $\sqrt{a^2 + b^2}$, min is $-\sqrt{a^2 + b^2}$`, "x free over a full period"],
              [t`$e^x \ge 1 + x$; $\log(1 + x) < x$ for $x > 0$; $\sin x < x$ for $x > 0$`, "prove each by monotonicity"],
              [t`Open cylinder of fixed volume: least surface area when $h = r$`, "open at one end"],
            ],
          },
          {
            type: "example",
            title: "1. Monotonic for every x (KCET / JEE Main level)",
            problem: t`Find all $k$ for which $f(x) = x^3 + kx^2 + 12x + 1$ is increasing on $\mathbb{R}$.`,
            steps: [
              t`$f'(x) = 3x^2 + 2kx + 12$ must be $\ge 0$ for all $x$.`,
              t`An upward parabola is never negative iff its discriminant is $\le 0$: $4k^2 - 144 \le 0$.`,
              t`So $k^2 \le 36$.`,
            ],
            answer: t`$-6 \le k \le 6$. At $k = \pm 6$, $f'$ is zero only at one point, so $f$ is still (strictly) increasing.`,
          },
          {
            type: "example",
            title: "2. Tangent and normal (ISC / JEE Advanced)",
            problem: t`Find the tangent and normal to $y = x^3 - 2x + 3$ at the point where $x = 1$.`,
            steps: [
              t`$y(1) = 1 - 2 + 3 = 2$, so the point is $(1, 2)$.`,
              t`$\frac{dy}{dx} = 3x^2 - 2$, which is $1$ at $x = 1$.`,
              t`Tangent: $y - 2 = 1(x - 1)$. Normal slope $= -1$: $y - 2 = -(x - 1)$.`,
            ],
            answer: "Tangent y = x + 1; normal x + y = 3.",
          },
          {
            type: "example",
            title: "3. An inequality by monotonicity (JEE Main level)",
            problem: t`Prove that $\log(1 + x) < x$ for all $x > 0$.`,
            steps: [
              t`Let $g(x) = x - \log(1 + x)$ for $x \ge 0$. Then $g(0) = 0$.`,
              t`$g'(x) = 1 - \frac{1}{1 + x} = \frac{x}{1 + x} > 0$ for $x > 0$, so $g$ is strictly increasing on $[0, \infty)$.`,
              t`Hence $g(x) > g(0) = 0$ for $x > 0$.`,
            ],
            answer: t`$x - \log(1 + x) > 0$, i.e. $\log(1 + x) < x$ for $x > 0$.`,
          },
          {
            type: "example",
            title: "4. Counting real roots (JEE Advanced level)",
            problem: t`For which real $k$ does $x^3 - 3x + k = 0$ have three distinct real roots?`,
            steps: [
              t`$f(x) = x^3 - 3x + k$, $f'(x) = 3(x - 1)(x + 1)$: local max at $x = -1$, local min at $x = 1$.`,
              t`$f(-1) = -1 + 3 + k = k + 2$; $f(1) = 1 - 3 + k = k - 2$.`,
              t`The graph crosses the x-axis three times iff the local max is above it and the local min below it: $k + 2 > 0$ and $k - 2 < 0$.`,
            ],
            answer: t`$-2 < k < 2$. (Check with the table: $4(-3)^3 + 27k^2 < 0 \iff k^2 < 4$.)`,
          },
          {
            type: "example",
            title: "5. Shortest distance to a curve (JEE Advanced level)",
            problem: t`Find the point(s) on the parabola $y = x^2$ nearest to $(0, 2)$, and the least distance.`,
            steps: [
              t`Minimise $D = d^2 = x^2 + (x^2 - 2)^2 = x^4 - 3x^2 + 4$ (the square has the same minimiser).`,
              t`$D'(x) = 4x^3 - 6x = 2x(2x^2 - 3) = 0$: $x = 0$ or $x^2 = \frac{3}{2}$.`,
              t`$D''(x) = 12x^2 - 6$: $D''(0) = -6 < 0$ (a local max of distance); at $x^2 = \frac{3}{2}$, $D'' = 12 > 0$ (min).`,
              t`$D = \frac{9}{4} - \frac{9}{2} + 4 = \frac{7}{4}$, so $d = \frac{\sqrt{7}}{2}$.`,
            ],
            answer: t`Nearest points $\left(\pm\sqrt{\frac{3}{2}},\ \frac{3}{2}\right)$, least distance $\frac{\sqrt{7}}{2}$. The vertex $(0, 0)$, at distance 2, is not the nearest point.`,
          },
          {
            type: "mistake",
            wrong: t`For $f$ to be increasing on $\mathbb{R}$ we need $f'(x) > 0$ everywhere, so the discriminant must be strictly negative and $k = \pm 6$ are excluded.`,
            right: t`$f'(x) \ge 0$ with equality only at isolated points is enough. The discriminant condition is $\le 0$, and $k = \pm 6$ are included.`,
            why: t`The board theorem is stated with $f' > 0$, which is sufficient but not necessary, just as $x^3$ is strictly increasing though $f'(0) = 0$.`,
          },
          {
            type: "mistake",
            wrong: t`The slope of the normal is $\frac{1}{f'(x_1)}$ (or $-f'(x_1)$).`,
            right: t`Tangent and normal are perpendicular, so their slopes multiply to $-1$: normal slope $= -\frac{1}{f'(x_1)}$. If $f'(x_1) = 0$, the normal is $x = x_1$.`,
            why: "Remembering \"flip it\" or \"change the sign\" alone gives one half of the rule; perpendicular lines need both.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Use $f(x + \Delta x) \approx f(x) + f'(x)\Delta x$ with $f(x) = \sqrt{x}$ to approximate $\sqrt{25.3}$.`,
                answer: 5.03,
                tolerance: 0.005,
                explain: t`$x = 25$, $\Delta x = 0.3$, $f'(25) = \frac{1}{2\sqrt{25}} = \frac{1}{10}$: $\sqrt{25.3} \approx 5 + 0.03 = 5.03$.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each optimisation set-up to its best shape.",
              pairs: [
                ["Two positive numbers with a fixed sum, largest product", "the two numbers are equal"],
                ["Rectangle with fixed perimeter P, largest area", "a square of side P/4"],
                ["Rectangle inscribed in a circle of radius r, largest area", "a square of area 2r²"],
                ["Closed cylinder of fixed volume, least surface", "h = 2r"],
                ["Open-top cylinder of fixed volume, least surface", "h = r"],
              ],
              explain: "These standard answers come from one-variable calculus (or AM–GM). Use them to check answers quickly, but in board papers show the full derivative working.",
            },
          },
          {
            type: "keypoints",
            items: [
              t`Monotonic on $\mathbb{R}$: make $f'(x) \ge 0$ (or $\le 0$) for all $x$; for a quadratic $f'$ this is "discriminant $\le 0$".`,
              "Prove inequalities by forming g = difference, showing g is monotonic, and comparing with g at the end point.",
              "Roots of a cubic: look at the signs of the local maximum and local minimum values.",
              "Normal slope = −1/f'(x₁); approximation: Δy ≈ f'(x) Δx.",
              "Minimise the square of a distance instead of the distance itself.",
            ],
          },
        ],
        flashcards: [
          { front: "Cubic monotonic on ℝ", back: t`$ax^3 + bx^2 + cx + d$ with $b^2 \le 3ac$.` },
          { front: t`Three distinct real roots of $x^3 + px + q = 0$`, back: t`$4p^3 + 27q^2 < 0$` },
          { front: t`Range of $a\sin x + b\cos x$`, back: t`$\left[-\sqrt{a^2+b^2},\ \sqrt{a^2+b^2}\right]$` },
          { front: "Equation of the tangent at (x₁, y₁)", back: t`$y - y_1 = f'(x_1)(x - x_1)$` },
          { front: "Slope of the normal", back: t`$-\frac{1}{f'(x_1)}$; the normal is $x = x_1$ if $f'(x_1) = 0$.` },
          { front: "Linear approximation", back: t`$f(x + \Delta x) \approx f(x) + f'(x)\Delta x$` },
          { front: "Open-top cylinder of fixed volume, least surface area", back: "h = r" },
          { front: "Distance optimisation trick", back: "Minimise d² instead of d; it has the same minimiser." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$f(x) = xe^{-x}$ is increasing on:`,
            options: [t`$(-\infty, 1]$`, t`$[1, \infty)$`, t`$(-\infty, 0]$`, t`$\mathbb{R}$`],
            answer: 0,
            explain: t`$f'(x) = e^{-x}(1 - x) \ge 0$ iff $x \le 1$.`,
          },
          {
            kind: "numeric",
            q: t`Find the maximum value of $3\sin x + 4\cos x$.`,
            answer: 5,
            explain: t`$\sqrt{3^2 + 4^2} = 5$.`,
          },
          {
            kind: "numeric",
            q: t`Find the slope of the normal to $y = x^2 + 3x$ at $x = 1$.`,
            answer: -0.2,
            tolerance: 0.001,
            explain: t`Tangent slope $2(1) + 3 = 5$, so normal slope $-\frac{1}{5} = -0.2$.`,
          },
          {
            kind: "numeric",
            q: t`Approximate $\sqrt{49.5}$ using differentials, to 3 decimal places.`,
            answer: 7.036,
            tolerance: 0.002,
            explain: t`$7 + \frac{0.5}{2 \times 7} = 7 + 0.0357 \approx 7.036$.`,
          },
          {
            kind: "multi",
            q: t`Which functions are strictly increasing on $\mathbb{R}$?`,
            options: [t`$x^3$`, t`$x + \sin x$`, t`$e^x - x$`, t`$x^5 + x$`, t`$x^2 + 1$`],
            answers: [0, 1, 3],
            explain: t`$3x^2 \ge 0$, $1 + \cos x \ge 0$ and $5x^4 + 1 > 0$, each zero at most at isolated points. $e^x - 1 < 0$ for $x < 0$, and $x^2 + 1$ falls on $(-\infty, 0]$.`,
            difficulty: 2,
            hint: "Check where each derivative could be negative.",
          },
          {
            kind: "numeric",
            q: t`Find the largest value of $k$ for which $f(x) = x^3 - kx^2 + 27x$ is increasing on $\mathbb{R}$.`,
            answer: 9,
            explain: t`$f'(x) = 3x^2 - 2kx + 27 \ge 0$ for all $x$ iff $4k^2 - 324 \le 0$, i.e. $|k| \le 9$.`,
            difficulty: 2,
            hint: "Discriminant of f'(x) ≤ 0, with equality allowed.",
          },
          {
            kind: "mcq",
            q: t`How many real roots does $x^3 - 3x + 5 = 0$ have?`,
            options: ["one", "two", "three", "none"],
            answer: 0,
            explain: t`Local max $f(-1) = 7$ and local min $f(1) = 3$ are both positive, so the graph crosses the x-axis once (on the far left).`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Find the least value of $f(x) = x^2 + \frac{16}{x}$ for $x > 0$.`,
            answer: 12,
            explain: t`$f'(x) = 2x - \frac{16}{x^2} = 0 \Rightarrow x^3 = 8$, $x = 2$; $f''(2) = 2 + \frac{32}{8} > 0$; $f(2) = 4 + 8 = 12$.`,
            difficulty: 3,
            hint: "Solve f'(x) = 0 and check the sign of f''.",
          },
          {
            kind: "mcq",
            q: t`The tangent to $y = e^x$ at $(0, 1)$ is:`,
            options: [t`$y = x + 1$`, t`$y = ex$`, t`$y = 1 - x$`, t`$y = x$`],
            answer: 0,
            explain: t`Slope $e^0 = 1$: $y - 1 = x$. This is also why $e^x \ge 1 + x$: the curve lies above this tangent.`,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Continuity and Differentiability": "c12-continuity-differentiability",
  "12:Application of Derivatives": "c12-application-of-derivatives",
  "12:Applications of Derivatives": ["c12-application-of-derivatives"],
};
