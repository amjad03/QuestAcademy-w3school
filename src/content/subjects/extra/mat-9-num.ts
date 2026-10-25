import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "math-high";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "indices-exponents",
    title: "Indices",
    icon: "🔢",
    description: "Laws of indices, zero, negative and fractional exponents, simplification and exponential equations.",
    lessons: [
      {
        slug: "laws-of-indices",
        title: "Laws of Indices",
        summary: "The product, quotient and power laws, and what zero, negative and fractional indices mean.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "India's population is about $1.4 \\times 10^9$, and a red blood cell is about $7 \\times 10^{-6}$ m across. Powers like $10^9$ and $10^{-6}$ let us write huge and tiny numbers compactly. In $a^n$, $a$ is the **base** and $n$ is the **index** (or exponent, or power).",
          },
          { type: "heading", text: "The laws (a, b > 0; m, n rational)" },
          {
            type: "table",
            headers: ["Law", "Rule", "Example"],
            rows: [
              ["Product", t`$a^m \cdot a^n = a^{m+n}$`, t`$2^3 \cdot 2^4 = 2^7 = 128$`],
              ["Quotient", t`$a^m \div a^n = a^{m-n}$`, t`$5^6 \div 5^4 = 5^2 = 25$`],
              ["Power of a power", t`$(a^m)^n = a^{mn}$`, t`$(3^2)^3 = 3^6 = 729$`],
              ["Power of a product", t`$(ab)^n = a^n b^n$`, t`$(2\cdot5)^3 = 8 \cdot 125 = 1000$`],
              ["Power of a quotient", t`$\left(\tfrac ab\right)^n = \tfrac{a^n}{b^n}$`, t`$\left(\tfrac23\right)^2 = \tfrac49$`],
            ],
          },
          { type: "heading", text: "Zero, negative and fractional indices" },
          {
            type: "formula",
            tex: t`a^0 = 1 \;(a \ne 0) \qquad a^{-n} = \frac{1}{a^n} \qquad a^{1/n} = \sqrt[n]{a} \qquad a^{p/q} = \left(\sqrt[q]{a}\right)^p = \sqrt[q]{a^p}`,
          },
          {
            type: "text",
            md: t`**Why $a^0 = 1$?** By the quotient law, $a^3 \div a^3 = a^{0}$, but any non-zero number divided by itself is 1. **Why $a^{-n} = 1/a^n$?** Because $a^{-n} \cdot a^n = a^0 = 1$.`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Fractional indices: root first",
            md: t`For $a^{p/q}$, take the $q$-th root **first**, then raise to the power $p$. The numbers stay small: $32^{3/5} = (\sqrt[5]{32})^3 = 2^3 = 8$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each value less than 1, equal to 1, or more than 1?",
              groups: ["Less than 1", "Equal to 1", "More than 1"],
              items: [
                { text: t`$2^{-3}$`, group: 0, hint: t`A negative index means a reciprocal: $2^{-3} = \tfrac18$.` },
                { text: t`$7^{0}$`, group: 1, hint: t`Any non-zero base to the power 0 is 1.` },
                { text: t`$9^{1/2}$`, group: 2, hint: t`$9^{1/2} = \sqrt9 = 3$.` },
                { text: t`$\left(\tfrac12\right)^{-2}$`, group: 2, hint: t`Flip the fraction: $\left(\tfrac12\right)^{-2} = 2^2 = 4$.` },
                { text: t`$16^{-1/4}$`, group: 0, hint: t`$16^{1/4} = 2$, so $16^{-1/4} = \tfrac12$.` },
                { text: t`$(-5)^{0}$`, group: 1, hint: t`The base is not zero, so the value is 1.` },
                { text: t`$8^{2/3}$`, group: 2, hint: t`Cube root of 8 is 2, and $2^2 = 4$.` },
              ],
              explain: t`A **negative index** gives a reciprocal (small for a base above 1), a **zero index** always gives 1, and a **fractional index** means a root. None of them makes the answer negative.`,
            },
          },
          {
            type: "example",
            title: "Evaluating with fractional and negative indices",
            problem: t`Evaluate (a) $27^{2/3}$ and (b) $\left(\tfrac{16}{81}\right)^{-3/4}$.`,
            steps: [
              t`(a) Write 27 as a power of a prime: $27 = 3^3$.`,
              t`(a) Power of a power: $(3^3)^{2/3} = 3^{3 \times \frac23} = 3^2 = 9$.`,
              t`(b) A negative index flips the fraction: $\left(\tfrac{16}{81}\right)^{-3/4} = \left(\tfrac{81}{16}\right)^{3/4}$.`,
              t`(b) $\tfrac{81}{16} = \left(\tfrac32\right)^4$, so the value is $\left(\tfrac32\right)^{3} = \tfrac{27}{8}$.`,
            ],
            answer: t`(a) $9$ (b) $\tfrac{27}{8}$`,
          },
          {
            type: "example",
            title: "Simplifying with a common base",
            problem: t`Simplify (a) $8^{2/3} \times 16^{-3/4}$ and (b) $\dfrac{2^{n+2} - 2^{n}}{2^{n}}$.`,
            steps: [
              t`(a) Use base 2: $8 = 2^3$ and $16 = 2^4$.`,
              t`(a) $(2^3)^{2/3} \times (2^4)^{-3/4} = 2^2 \times 2^{-3} = 2^{2-3} = 2^{-1} = \tfrac12$.`,
              t`(b) Take out the smaller power $2^n$ from the top: $2^{n+2} - 2^n = 2^n(2^2 - 1) = 3 \cdot 2^n$.`,
              t`(b) Cancel $2^n$: $\dfrac{3 \cdot 2^n}{2^n} = 3$.`,
            ],
            answer: t`(a) $\tfrac12$ (b) $3$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $125^{2/3}$.`,
                answer: 25,
                explain: t`$\sqrt[3]{125} = 5$, and $5^2 = 25$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: t`Laws of indices work for **products**, not sums: $a^m + a^n \ne a^{m+n}$ and $(a + b)^2 \ne a^2 + b^2$. Also, $(-1)^{\text{even}} = 1$ but $-1^{2} = -1$ (the power binds before the minus).`,
          },
          {
            type: "mistake",
            wrong: t`A negative index makes the number negative, so $2^{-3} = -8$.`,
            right: t`A negative index means a **reciprocal**: $2^{-3} = \dfrac{1}{2^3} = \dfrac18$.`,
            why: t`The minus sign sits in the index, not in front of the number, so it changes "multiply" into "divide". $2^{-3} \times 2^3 = 2^0 = 1$, which only works if $2^{-3} = \tfrac18$.`,
          },
          {
            type: "illustration",
            emoji: "🧫",
            caption: "Bacteria doubling every hour: after n hours, 1 cell becomes 2ⁿ. After 10 hours, 2¹⁰ = 1024 cells.",
          },
          {
            type: "keypoints",
            items: [
              t`Same base, multiply → add indices; divide → subtract indices.`,
              t`$(a^m)^n = a^{mn}$; $(ab)^n = a^nb^n$.`,
              t`$a^0 = 1$ for $a \ne 0$; $a^{-n} = 1/a^n$.`,
              t`$a^{p/q}$ = $q$-th root, then $p$-th power.`,
              "Always rewrite numbers as powers of a common prime base (2, 3, 5 …) before simplifying.",
            ],
          },
        ],
        flashcards: [
          { front: "Product law", back: t`$a^m \cdot a^n = a^{m+n}$` },
          { front: "Zero index", back: t`$a^0 = 1$ for every $a \ne 0$` },
          { front: "Negative index", back: t`$a^{-n} = \dfrac{1}{a^n}$` },
          { front: "Fractional index", back: t`$a^{p/q} = (\sqrt[q]{a})^p$` },
          { front: t`$(a^m)^n$`, back: t`$a^{mn}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $64^{-1/3}$ as a decimal.`,
            answer: 0.25,
            tolerance: 0.001,
            explain: t`$64^{1/3} = 4$, so $64^{-1/3} = \tfrac14 = 0.25$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $5^0 + 5^{-1}$ as a decimal.`,
            answer: 1.2,
            tolerance: 0.001,
            explain: t`$1 + \tfrac15 = 1.2$.`,
          },
          {
            kind: "mcq",
            q: t`$(32)^{0.2}$ equals:`,
            options: ["6.4", "2", "0.2", "16"],
            answer: 1,
            explain: t`$0.2 = \tfrac15$ and $\sqrt[5]{32} = 2$.`,
          },
          {
            kind: "truefalse",
            q: t`$2^3 + 2^4 = 2^7$.`,
            answer: false,
            explain: t`$8 + 16 = 24$, but $2^7 = 128$. Indices add only when the powers are **multiplied**.`,
          },
          {
            kind: "fill",
            q: t`By the power-of-a-power law, $(x^3)^4 = x^n$, where $n$ = ___.`,
            answer: ["12"],
            explain: t`$(x^3)^4 = x^{3\times4} = x^{12}$.`,
          },
          {
            kind: "order",
            q: "Arrange in increasing order of value.",
            items: [t`$2^{-2}$`, t`$4^{0}$`, t`$8^{1/3}$`, t`$9^{1/2}$`, t`$16^{3/4}$`],
            explain: "Values: 0.25, 1, 2, 3, 8.",
            difficulty: 2,
            hint: t`Work out each value first: $16^{3/4} = (\sqrt[4]{16})^3$.`,
          },
          {
            kind: "mcq",
            q: t`Simplify $\dfrac{3^{n+1} + 3^{n}}{3^{n}}$.`,
            options: ["4", t`$3^{n+1}$`, "3", t`$3^{2n+1}$`],
            answer: 0,
            explain: t`Take out $3^n$: $3^n(3 + 1) = 4 \cdot 3^n$, and $\dfrac{4 \cdot 3^n}{3^n} = 4$.`,
            difficulty: 3,
            hint: "Factor out the smallest power from the numerator first.",
          },
        ],
      },
      {
        slug: "exponential-equations",
        title: "Simplification and Exponential Equations",
        summary: "Proving identities with indices and solving equations where the unknown sits in the exponent.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "In an **exponential equation** the unknown is in the index, like $2^{x+1} = 32$. The key idea: if two powers of the **same base** are equal, their indices are equal.",
          },
          {
            type: "formula",
            tex: t`a^m = a^n \;\Rightarrow\; m = n \qquad (a > 0,\; a \ne 1)`,
            caption: "Base 1 is excluded because 1 raised to anything is 1",
          },
          { type: "heading", text: "Method" },
          {
            type: "list",
            ordered: true,
            items: [
              "Write both sides as powers of the same prime base.",
              "Use the laws of indices to collect each side into a single power.",
              "Equate the indices and solve the resulting linear (or quadratic) equation.",
              "Check the answer by substituting back.",
            ],
          },
          {
            type: "example",
            title: "Same base on both sides",
            problem: t`Solve (a) $2^{x+1} = 32$ and (b) $9^{x} = 27$.`,
            steps: [
              t`(a) $32 = 2^5$, so $2^{x+1} = 2^5$.`,
              t`(a) Equate indices: $x + 1 = 5$, so $x = 4$.`,
              t`(b) Use base 3: $9^x = (3^2)^x = 3^{2x}$ and $27 = 3^3$.`,
              t`(b) Equate indices: $2x = 3$, so $x = \tfrac32$.`,
            ],
            answer: t`(a) $x = 4$ (b) $x = \tfrac32$`,
          },
          {
            type: "example",
            title: "A sum of powers",
            problem: t`Solve $2^{x} + 2^{x+1} = 48$.`,
            steps: [
              t`Write $2^{x+1} = 2 \cdot 2^x$.`,
              t`Take out the smallest power: $2^{x}(1 + 2) = 48$.`,
              t`So $3 \cdot 2^x = 48$, giving $2^x = 16 = 2^4$.`,
              t`Equate indices: $x = 4$. Check: $16 + 32 = 48$ ✓.`,
            ],
            answer: t`$x = 4$`,
          },
          {
            type: "example",
            title: "Two different bases",
            problem: t`Solve $5^{x-2} \times 3^{2x-3} = 135$.`,
            steps: [
              t`Break 135 into primes: $135 = 5 \times 27 = 5^1 \times 3^3$.`,
              t`Compare the powers of 5: $x - 2 = 1$, so $x = 3$.`,
              t`Compare the powers of 3: $2x - 3 = 3$, so $x = 3$.`,
              t`Both give the same value, so the answer is consistent.`,
            ],
            answer: t`$x = 3$`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each equation to its solution.",
              pairs: [
                [t`$2^{x} = \tfrac18$`, t`$x = -3$`],
                [t`$9^{x} = 27$`, t`$x = \tfrac32$`],
                [t`$3^{x+1} = 81$`, t`$x = 3$`],
                [t`$7^{2x} = 1$`, t`$x = 0$`],
                [t`$4^{x} = 32$`, t`$x = \tfrac52$`],
              ],
              explain: t`Every time, the move is the same: write both sides with **one prime base**, then equate the indices. $\tfrac18 = 2^{-3}$, $1 = 7^0$, and $4^x = 2^{2x}$, $32 = 2^5$.`,
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Solve $3^{2x-1} = 243$.`,
                answer: 3,
                explain: t`$243 = 3^5$, so $2x - 1 = 5$ and $x = 3$.`,
              },
            ],
          },
          { type: "heading", text: "Proving identities" },
          {
            type: "text",
            md: t`**Prove:** $\left(\dfrac{x^a}{x^b}\right)^{a+b} \left(\dfrac{x^b}{x^c}\right)^{b+c} \left(\dfrac{x^c}{x^a}\right)^{c+a} = 1$. The total index is $(a-b)(a+b) + (b-c)(b+c) + (c-a)(c+a) = (a^2 - b^2) + (b^2 - c^2) + (c^2 - a^2) = 0$, and $x^0 = 1$. ∎`,
          },
          {
            type: "callout",
            tone: "fact",
            title: "Chain result",
            md: t`If $a^x = b$, $b^y = c$ and $c^z = a$, then $xyz = 1$. Substitute: $a = c^z = (b^y)^z = ((a^x)^y)^z = a^{xyz}$, so $xyz = 1$.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: t`Never equate indices unless the bases are the same: $2^x = 3^x$ only gives $x = 0$. And never equate indices across a **sum**: in $2^x + 2^{x+1} = 48$ there is no single power on the left until you factor.`,
          },
          {
            type: "mistake",
            wrong: t`$2^x + 2^x = 4^x$ (or $2^{2x}$).`,
            right: t`$2^x + 2^x = 2 \cdot 2^x = 2^{x+1}$.`,
            why: t`Adding two equal things doubles them; it does not multiply the indices or the bases. Try $x = 3$: $8 + 8 = 16 = 2^4$, but $4^3 = 64$. When a sum of powers appears, **take out the smallest power as a common factor** first.`,
          },
          {
            type: "keypoints",
            items: [
              "Equal powers of the same base (not 0 or 1) have equal indices.",
              "Convert every number to a prime base first: 32 = 2⁵, 243 = 3⁵, 625 = 5⁴.",
              "For sums of powers, factor out the smallest power.",
              "To prove an identity, add up all indices and show the total is 0 (so the value is 1).",
              "If aˣ = b, bʸ = c, cᶻ = a, then xyz = 1.",
            ],
          },
        ],
        flashcards: [
          { front: t`If $a^m = a^n$ ($a > 0, a \ne 1$)`, back: "m = n" },
          { front: "First step in an exponential equation", back: "Write both sides as powers of the same prime base" },
          { front: t`$2^x + 2^x$`, back: t`$2^{x+1}$` },
          { front: t`$a^x = b,\ b^y = c,\ c^z = a$`, back: "xyz = 1" },
          { front: "625 as a power of 5", back: t`$5^4$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Solve $4^{x} = \tfrac{1}{16}$.`,
            answer: -2,
            explain: t`$\tfrac1{16} = 4^{-2}$, so $x = -2$.`,
          },
          {
            kind: "numeric",
            q: t`Solve $2^{x-3} = 1$.`,
            answer: 3,
            explain: t`$1 = 2^0$, so $x - 3 = 0$.`,
          },
          {
            kind: "numeric",
            q: t`Solve $3^{x} + 3^{x+2} = 270$.`,
            answer: 3,
            explain: t`$3^x(1 + 9) = 270 \Rightarrow 3^x = 27 \Rightarrow x = 3$.`,
            difficulty: 2,
            hint: t`$3^{x+2} = 9 \cdot 3^x$. Take out $3^x$.`,
          },
          {
            kind: "mcq",
            q: t`If $8^{x} = 32$, then $x$ =`,
            options: ["4", t`$\tfrac53$`, t`$\tfrac35$`, "2"],
            answer: 1,
            explain: t`$2^{3x} = 2^5 \Rightarrow x = \tfrac53$.`,
            difficulty: 2,
            hint: "Write both 8 and 32 as powers of 2.",
          },
          {
            kind: "truefalse",
            q: t`$\left(\dfrac{x^a}{x^b}\right)^{a+b}\left(\dfrac{x^b}{x^c}\right)^{b+c}\left(\dfrac{x^c}{x^a}\right)^{c+a}$ always equals 1 (for $x \ne 0$).`,
            answer: true,
            explain: t`The indices add to $(a^2-b^2)+(b^2-c^2)+(c^2-a^2) = 0$.`,
          },
          {
            kind: "fill",
            q: t`If $5^{2x+1} = 125$, then $x$ = ___.`,
            answer: ["1"],
            explain: t`$125 = 5^3$, so $2x + 1 = 3$ and $x = 1$.`,
          },
          {
            kind: "mcq",
            q: t`Which is the correct first step for $2^{x} + 2^{x} = 64$?`,
            options: [t`$4^{x} = 64$`, t`$2^{2x} = 64$`, t`$2 \cdot 2^{x} = 64$, so $2^{x+1} = 2^6$`, t`$x + x = 6$`],
            answer: 2,
            explain: t`Adding two equal powers doubles them: $2^{x+1} = 2^6$, so $x = 5$. Check: $32 + 32 = 64$.`,
            difficulty: 2,
            hint: "What do you get when you add a number to itself?",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "logarithms-9",
    title: "Logarithms",
    icon: "📊",
    description: "Logarithms as the inverse of indices, converting forms, the laws of logarithms, expansion and simple log equations.",
    lessons: [
      {
        slug: "logarithm-basics",
        title: "What Is a Logarithm?",
        summary: "Exponential and logarithmic forms, conditions on base and number, and evaluating simple logarithms.",
        minutes: 15,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "The 2001 Bhuj earthquake in Gujarat had a magnitude of about **7.7**, while a minor tremor in Delhi might measure 4.7. That 3-point difference means the shaking amplitude was $10^3 = 1000$ times larger. The Richter scale, decibels and pH are all **logarithmic**: they count the power of 10.",
          },
          { type: "heading", text: "Definition" },
          {
            type: "formula",
            tex: t`a^x = N \iff \log_a N = x \qquad (a > 0,\; a \ne 1,\; N > 0)`,
            caption: "The logarithm of N to base a is the index to which a must be raised to get N",
          },
          {
            type: "table",
            headers: ["Exponential form", "Logarithmic form"],
            rows: [
              [t`$2^5 = 32$`, t`$\log_2 32 = 5$`],
              [t`$10^3 = 1000$`, t`$\log_{10} 1000 = 3$`],
              [t`$3^{-2} = \tfrac19$`, t`$\log_3 \tfrac19 = -2$`],
              [t`$81^{1/4} = 3$`, t`$\log_{81} 3 = \tfrac14$`],
            ],
          },
          { type: "heading", text: "Basic facts" },
          {
            type: "list",
            items: [
              t`$\log_a 1 = 0$, because $a^0 = 1$.`,
              t`$\log_a a = 1$, because $a^1 = a$.`,
              t`$a^{\log_a N} = N$.`,
              "The logarithm of zero or a negative number is **not defined** (no real power of a positive base gives 0 or a negative number).",
              t`$\log N$ with no base written means $\log_{10} N$ (common logarithm) in ICSE Class 9.`,
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each logarithm defined or not defined?",
              groups: ["Defined", "Not defined"],
              items: [
                { text: t`$\log_2 0$`, group: 1, hint: "No power of 2 gives 0. The number must be positive." },
                { text: t`$\log_{10}(-100)$`, group: 1, hint: "The number inside a log cannot be negative." },
                { text: t`$\log_{10} 0.01$`, group: 0, hint: t`$10^{-2} = 0.01$, so the value is $-2$. A log can be negative.` },
                { text: t`$\log_1 5$`, group: 1, hint: "Base 1 is not allowed: every power of 1 is 1." },
                { text: t`$\log_{1/2} 8$`, group: 0, hint: t`A base between 0 and 1 is fine: $(\tfrac12)^{-3} = 8$.` },
                { text: t`$\log_{-2} 4$`, group: 1, hint: "The base must be positive." },
                { text: t`$\log_5 1$`, group: 0, hint: t`$5^0 = 1$, so the value is 0.` },
              ],
              explain: t`Check two things: the **base** is positive and not 1, and the **number** is positive. The **value** of the log may be anything, even 0 or negative.`,
            },
          },
          {
            type: "example",
            title: "Evaluating a logarithm",
            problem: t`Evaluate (a) $\log_{\sqrt3} 81$ and (b) $\log_{10} 0.001$.`,
            steps: [
              t`(a) Let $\log_{\sqrt3} 81 = x$. Then $(\sqrt3)^x = 81$.`,
              t`(a) Write both sides with base 3: $3^{x/2} = 3^4$, so $\tfrac{x}{2} = 4$ and $x = 8$.`,
              t`(b) $0.001 = \tfrac{1}{1000} = 10^{-3}$, so $\log_{10} 0.001 = -3$.`,
            ],
            answer: t`(a) $8$ (b) $-3$`,
          },
          {
            type: "example",
            title: "Finding the base or the number",
            problem: t`Find $x$ if (a) $\log_x 125 = 3$ and (b) $\log_8 x = \tfrac23$.`,
            steps: [
              t`(a) Change to exponential form: $x^3 = 125 = 5^3$, so $x = 5$.`,
              t`(b) Change to exponential form: $x = 8^{2/3}$.`,
              t`(b) Root first: $\sqrt[3]{8} = 2$, then $2^2 = 4$.`,
            ],
            answer: t`(a) $x = 5$ (b) $x = 4$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\log_5 625$.`,
                answer: 4,
                explain: t`$5^4 = 625$.`,
              },
            ],
          },
          { type: "illustration", emoji: "🌍", caption: "Richter scale: each step of 1 means 10 times the shaking amplitude." },
          {
            type: "callout",
            tone: "fact",
            title: "A short history",
            md: "John Napier published logarithms in 1614 to turn long multiplications into additions. Before calculators, Indian engineering students carried printed **log tables** and slide rules into exam halls for exactly this reason.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: t`Logarithms can be **negative** ($\log_{10} 0.01 = -2$), but the **number** inside the log must be positive and the base must be positive and not 1.`,
          },
          {
            type: "mistake",
            wrong: t`$\log_x 16 = 2$ means $x^2 = 16$, so $x = \pm 4$.`,
            right: t`$x = 4$ only. A **base** of a logarithm must be positive and not 1, so $x = -4$ is rejected.`,
            why: t`The algebra step $x^2 = 16$ does have two roots, which is why $\pm 4$ feels right. But a log base cannot be negative, so always check the root against the conditions $a > 0$, $a \ne 1$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\log_a N = x$ means $a^x = N$.`,
              "Base > 0 and ≠ 1; number > 0.",
              t`$\log_a 1 = 0$ and $\log_a a = 1$.`,
              t`To evaluate $\log_a N$, write $N$ as a power of $a$.`,
              "Logarithms can be negative or fractional; log of 0 or a negative number is undefined.",
            ],
          },
        ],
        flashcards: [
          { front: "Definition of logarithm", back: t`$\log_a N = x \iff a^x = N$` },
          { front: t`$\log_a 1$`, back: "0" },
          { front: t`$\log_a a$`, back: "1" },
          { front: "Conditions on base and number", back: "a > 0, a ≠ 1, N > 0" },
          { front: t`$\log_{10} 0.001$`, back: "−3" },
          { front: "Who introduced logarithms?", back: "John Napier, 1614" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\log_{1/2} 8$.`,
            answer: -3,
            explain: t`$(1/2)^{-3} = 2^3 = 8$.`,
            difficulty: 2,
            hint: t`Which power of $\tfrac12$ gives 8? Flipping the fraction needs a negative index.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\log_3 \tfrac{1}{27}$.`,
            answer: -3,
            explain: t`$3^{-3} = \tfrac1{27}$.`,
          },
          {
            kind: "mcq",
            q: t`The logarithmic form of $7^2 = 49$ is:`,
            options: [t`$\log_2 49 = 7$`, t`$\log_{49} 7 = 2$`, t`$\log_7 49 = 2$`, t`$\log_7 2 = 49$`],
            answer: 2,
            explain: "Base 7, number 49, index 2.",
          },
          {
            kind: "truefalse",
            q: t`$\log_{10}(-100)$ is equal to $-2$.`,
            answer: false,
            explain: "The logarithm of a negative number is not defined in real numbers.",
          },
          {
            kind: "fill",
            q: t`For any valid base $a$, $\log_a a$ = ___.`,
            answer: ["1", "one"],
            explain: t`$a^1 = a$.`,
          },
          {
            kind: "numeric",
            q: t`If $\log_x 0.25 = -2$, find $x$.`,
            answer: 2,
            explain: t`$x^{-2} = \tfrac14 \Rightarrow x^2 = 4 \Rightarrow x = 2$ (base must be positive).`,
            difficulty: 2,
            hint: t`Write it as $x^{-2} = 0.25 = \tfrac14$, then flip both sides.`,
          },
        ],
      },
      {
        slug: "logarithm-laws",
        title: "Laws of Logarithms",
        summary: "Product, quotient and power laws, change of base, expansion and simplification, and solving log equations.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Because logarithms are indices, the laws of indices turn into laws of logarithms. Multiplication becomes addition, division becomes subtraction, and powers become multiplication.",
          },
          { type: "heading", text: "The three laws (same base, m, n > 0)" },
          {
            type: "formula",
            tex: t`\log_a(mn) = \log_a m + \log_a n \qquad \log_a\!\left(\frac mn\right) = \log_a m - \log_a n \qquad \log_a m^n = n\log_a m`,
          },
          {
            type: "text",
            md: t`**Proof of the product law:** let $\log_a m = x$ and $\log_a n = y$, so $m = a^x$, $n = a^y$. Then $mn = a^{x+y}$, so $\log_a(mn) = x + y$. ∎`,
          },
          { type: "heading", text: "Change of base" },
          {
            type: "formula",
            tex: t`\log_b a = \frac{\log a}{\log b} \qquad \log_b a \times \log_a b = 1`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each statement a true law or a false one?",
              groups: ["True law", "Not a law"],
              items: [
                { text: t`$\log(mn) = \log m + \log n$`, group: 0, hint: "This is the product law." },
                { text: t`$\log(m + n) = \log m + \log n$`, group: 1, hint: "There is no law for the log of a sum." },
                { text: t`$\log m^3 = 3\log m$`, group: 0, hint: "This is the power law." },
                { text: t`$\log\tfrac mn = \dfrac{\log m}{\log n}$`, group: 1, hint: t`The quotient law gives $\log m - \log n$, a difference, not a fraction.` },
                { text: t`$(\log m)^2 = 2\log m$`, group: 1, hint: t`The power law needs the power **inside** the log: $\log m^2 = 2\log m$.` },
                { text: t`$\log_b a \times \log_a b = 1$`, group: 0, hint: "This follows from change of base." },
              ],
              explain: t`The laws only turn **products, quotients and powers inside** a log into sums, differences and multiples. Sums inside a log, and logs divided by logs, have no shortcut.`,
            },
          },
          {
            type: "example",
            title: "Using given values",
            problem: t`Given $\log 2 = 0.3010$ and $\log 3 = 0.4771$, find $\log 12$, $\log 5$ and $\log 1.5$.`,
            steps: [
              t`$\log 12 = \log(2^2 \cdot 3) = 2\log 2 + \log 3 = 2(0.3010) + 0.4771 = 1.0791$.`,
              t`$\log 5 = \log\tfrac{10}{2} = \log 10 - \log 2 = 1 - 0.3010 = 0.6990$.`,
              t`$\log 1.5 = \log\tfrac32 = \log 3 - \log 2 = 0.4771 - 0.3010 = 0.1761$.`,
            ],
            answer: t`$\log 12 = 1.0791$, $\log 5 = 0.6990$, $\log 1.5 = 0.1761$`,
          },
          {
            type: "example",
            title: "Simplify",
            problem: t`Simplify $2\log 5 + \log 8 - \tfrac12\log 4$.`,
            steps: [
              t`Power law first: $2\log 5 = \log 25$ and $\tfrac12\log 4 = \log 4^{1/2} = \log 2$.`,
              t`Now the expression is $\log 25 + \log 8 - \log 2$.`,
              t`Product and quotient laws: $\log\dfrac{25 \times 8}{2} = \log 100$.`,
              t`$\log 100 = \log 10^2 = 2$.`,
            ],
            answer: "2",
          },
          {
            type: "example",
            title: "Solve a log equation",
            problem: t`Solve $\log_{10} x + \log_{10}(x - 3) = 1$.`,
            steps: [
              t`Combine with the product law: $\log_{10}[x(x-3)] = 1$.`,
              t`Exponential form: $x(x - 3) = 10^1$, so $x^2 - 3x - 10 = 0$.`,
              t`Factor: $(x - 5)(x + 2) = 0$, so $x = 5$ or $x = -2$.`,
              t`$x = -2$ makes $\log x$ undefined, so reject it.`,
            ],
            answer: t`$x = 5$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\log 8 + \log 125$ (base 10).`,
                answer: 3,
                explain: t`$\log(8 \times 125) = \log 1000 = 3$.`,
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: t`$\dfrac{\log m}{\log n} \ne \log m - \log n$, and $(\log m)^2 \ne 2\log m$. After solving any log equation, **reject** roots that make a number inside a log zero or negative.`,
          },
          {
            type: "mistake",
            wrong: t`$\log(m + n) = \log m + \log n$.`,
            right: t`There is **no** law for $\log(m + n)$. The product law is $\log(mn) = \log m + \log n$.`,
            why: t`The two look alike, so students mix them up. Test it: $\log(2 + 5) = \log 7 \approx 0.845$, but $\log 2 + \log 5 = \log 10 = 1$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\log(mn) = \log m + \log n$; $\log(m/n) = \log m - \log n$; $\log m^n = n\log m$.`,
              t`Expand: $\log\dfrac{a^3b^2}{c} = 3\log a + 2\log b - \log c$.`,
              t`Change of base: $\log_b a = \log a / \log b$.`,
              t`$\log 2 + \log 5 = \log 10 = 1$ is a frequent shortcut.`,
              "Always check solutions of log equations against the domain.",
            ],
          },
        ],
        flashcards: [
          { front: "Product law", back: t`$\log_a(mn) = \log_a m + \log_a n$` },
          { front: "Power law", back: t`$\log_a m^n = n\log_a m$` },
          { front: "Change of base", back: t`$\log_b a = \dfrac{\log a}{\log b}$` },
          { front: t`$\log_b a \times \log_a b$`, back: "1" },
          { front: t`$\log 5$ given $\log 2 = 0.3010$`, back: "1 − 0.3010 = 0.6990" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\log 2 + \log 5$ (base 10).`,
            answer: 1,
            explain: t`$\log 10 = 1$.`,
          },
          {
            kind: "numeric",
            q: t`Given $\log 2 = 0.3010$ and $\log 3 = 0.4771$, find $\log 18$.`,
            answer: 1.2552,
            tolerance: 0.0005,
            explain: t`$\log(2 \cdot 3^2) = 0.3010 + 2(0.4771) = 1.2552$.`,
            difficulty: 2,
            hint: t`$18 = 2 \times 3^2$.`,
          },
          {
            kind: "mcq",
            q: t`$\log_2 8 \times \log_8 2$ equals:`,
            options: ["0", "1", "3", t`$\tfrac13$`],
            answer: 1,
            explain: t`$\log_b a \times \log_a b = 1$ (here $3 \times \tfrac13$).`,
          },
          {
            kind: "truefalse",
            q: t`$\log(m + n) = \log m + \log n$.`,
            answer: false,
            explain: t`The product law is $\log(mn) = \log m + \log n$; there is no rule for a sum.`,
          },
          {
            kind: "numeric",
            q: t`Solve $\log_4 x + \log_4(x - 6) = 2$.`,
            answer: 8,
            explain: t`$x(x-6) = 16 \Rightarrow x^2 - 6x - 16 = 0 \Rightarrow (x-8)(x+2) = 0$. Reject $-2$; $x = 8$.`,
            difficulty: 3,
            hint: t`Combine the logs, then use $4^2 = 16$. Check both roots.`,
          },
          {
            kind: "order",
            q: t`Arrange the steps to solve $\log x + \log(x - 3) = 1$.`,
            items: [
              t`Combine using the product law: $\log[x(x-3)] = 1$`,
              t`Convert to exponential form: $x(x-3) = 10$`,
              t`Solve the quadratic: $x = 5$ or $x = -2$`,
              t`Reject $x = -2$ since $\log x$ must be defined`,
            ],
            explain: "Combine, convert, solve, check the domain.",
            difficulty: 2,
            hint: "You cannot solve while there are two logs. Join them first.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  Indices: "indices-exponents",
  Logarithms: "logarithms-9",
};
