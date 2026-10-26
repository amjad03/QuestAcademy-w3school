import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Class 11: Binomial Theorem (NCERT, Karnataka I PUC, ISC)            */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-binomial-theorem",
    title: "Binomial Theorem (Class 11)",
    icon: "🔺",
    description: "Pascal's triangle, the binomial theorem for positive integral indices, special cases, general and middle terms, and the JEE / KCET favourites: remainders, greatest term and binomial coefficient sums.",
    lessons: [
      {
        slug: "c11-binomial-statement",
        title: "Binomial Theorem for Positive Integral Indices",
        summary: "Expanding (a + b)^n without multiplying it out: Pascal's triangle, the statement of the theorem, its patterns, special cases and quick arithmetic with it.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🔺",
            caption: t`You know $(a+b)^2$ and $(a+b)^3$ by heart. Multiplying out $(a+b)^{10}$ by hand would take a page. The binomial theorem writes it in one line.`,
          },
          {
            type: "text",
            md: t`A **binomial** is an expression with two terms, such as $a + b$, $2x - 3$ or $x + \frac{1}{x}$. Look at the first few powers of $a + b$:

$(a+b)^0 = 1$, $(a+b)^1 = a + b$, $(a+b)^2 = a^2 + 2ab + b^2$, $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$, $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.

Three patterns appear. The power $n$ gives $n + 1$ terms. The power of $a$ falls by 1 from $n$ to 0 while the power of $b$ rises from 0 to $n$. Only the **coefficients** need work.`,
          },
          {
            type: "table",
            headers: ["Index n", "Coefficients (a row of Pascal's triangle)"],
            rows: [
              ["0", "1"],
              ["1", "1, 1"],
              ["2", "1, 2, 1"],
              ["3", "1, 3, 3, 1"],
              ["4", "1, 4, 6, 4, 1"],
              ["5", "1, 5, 10, 10, 5, 1"],
              ["6", "1, 6, 15, 20, 15, 6, 1"],
            ],
          },
          {
            type: "text",
            md: t`In this array, called **Pascal's triangle** (in India it was known much earlier as *Meru Prastara*, described by Pingala), each row starts and ends with 1, and every inner number is the **sum of the two numbers just above it**: $4 + 6 = 10$ in row 5.

The entries are exactly the combinations $\binom{n}{r} = \frac{n!}{r!\,(n-r)!}$ from the chapter on permutations and combinations. The rule "add the two above" is **Pascal's rule**: $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$.`,
          },
          {
            type: "formula",
            tex: t`(a+b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k`,
            caption: "Binomial theorem, n a positive integer. The numbers C(n, k) are the binomial coefficients.",
          },
          {
            type: "list",
            items: [
              t`There are $n + 1$ terms.`,
              t`In every term the indices of $a$ and $b$ add up to $n$.`,
              t`Coefficients equidistant from the two ends are equal, because $\binom{n}{r} = \binom{n}{n-r}$.`,
              t`Special cases: $(x - y)^n = \sum_{k=0}^{n}(-1)^k\binom{n}{k}x^{n-k}y^k$ (signs alternate), and $(1 + x)^n = \sum_{k=0}^{n}\binom{n}{k}x^k$.`,
              t`Putting $x = 1$ in $(1+x)^n$ gives $\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$.`,
            ],
          },
          {
            type: "example",
            title: "A full expansion",
            problem: t`Expand $(2x - 3)^4$.`,
            steps: [
              t`Here $a = 2x$, $b = -3$, $n = 4$; the coefficients are 1, 4, 6, 4, 1.`,
              t`$(2x)^4 + 4(2x)^3(-3) + 6(2x)^2(-3)^2 + 4(2x)(-3)^3 + (-3)^4$.`,
              t`Simplify each term: $16x^4$, $4 \cdot 8x^3 \cdot (-3) = -96x^3$, $6 \cdot 4x^2 \cdot 9 = 216x^2$, $4 \cdot 2x \cdot (-27) = -216x$, $81$.`,
              t`Check with $x = 1$: the left side is $(-1)^4 = 1$; the right side is $16 - 96 + 216 - 216 + 81 = 1$. ✓`,
            ],
            answer: t`$(2x-3)^4 = 16x^4 - 96x^3 + 216x^2 - 216x + 81$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`How many terms are there in the expansion of $(x + 2y)^{9}$?`,
                answer: 10,
                explain: t`A power $n$ gives $n + 1$ terms, so $9 + 1 = 10$.`,
              },
              {
                kind: "numeric",
                q: t`What is the coefficient of $x^2$ in $(1 + 2x)^5$?`,
                answer: 40,
                explain: t`The term is $\binom{5}{2}(2x)^2 = 10 \cdot 4x^2 = 40x^2$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Arithmetic with the theorem",
            problem: t`Find $99^5$ without long multiplication.`,
            steps: [
              t`Write $99 = 100 - 1$ and use $(x - y)^5$ with alternating signs.`,
              t`$(100-1)^5 = 100^5 - 5(100)^4 + 10(100)^3 - 10(100)^2 + 5(100) - 1$.`,
              t`$= 10\,000\,000\,000 - 500\,000\,000 + 10\,000\,000 - 100\,000 + 500 - 1$.`,
              t`Add step by step: $9\,500\,000\,000 \to 9\,510\,000\,000 \to 9\,509\,900\,000 \to 9\,509\,900\,500 \to 9\,509\,900\,499$.`,
            ],
            answer: t`$99^5 = 9\,509\,900\,499$`,
          },
          {
            type: "example",
            title: "A divisibility proof",
            problem: t`Show that $7^n - 6n - 1$ is divisible by 36 for every positive integer $n$.`,
            steps: [
              t`Write $7^n = (1 + 6)^n = 1 + \binom{n}{1}6 + \binom{n}{2}6^2 + \binom{n}{3}6^3 + \cdots + 6^n$.`,
              t`So $7^n - 6n - 1 = \binom{n}{2}6^2 + \binom{n}{3}6^3 + \cdots + 6^n$ (for $n = 1$ the right side is just 0).`,
              t`Every remaining term has a factor $6^2 = 36$: $7^n - 6n - 1 = 36\left[\binom{n}{2} + 6\binom{n}{3} + \cdots + 6^{n-2}\right]$.`,
              t`The bracket is an integer, because each binomial coefficient is an integer.`,
            ],
            answer: t`$7^n - 6n - 1$ is 36 times an integer, so 36 divides it. (Check: $n = 2$ gives $49 - 13 = 36$.)`,
          },
          {
            type: "mistake",
            wrong: t`In $(2x - 3)^4$ the second term is $4 \cdot 2x^3 \cdot (-3) = -24x^3$.`,
            right: t`The whole first term is raised to the power: $4(2x)^3(-3) = 4 \cdot 8x^3 \cdot (-3) = -96x^3$. Brackets around $2x$ and around $-3$ are essential.`,
            why: t`In $(a+b)^n$ students picture $a$ as a single letter, so they raise only the $x$. When $a$ itself is $2x$ (or $b$ is $-3$), its number and its sign must be powered too.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`What is the sum of the coefficients of $(3x - 2)^5$?`,
              emoji: "🤔",
              options: ["32, because the coefficients always add to 2^n", "1", "243", "0"],
              answer: 1,
              trap: 0,
              explain: t`The sum of coefficients is the value of the expression at $x = 1$: $(3 - 2)^5 = 1$. The rule $2^n$ is only for $(1 + x)^n$, where every coefficient is a plain $\binom{n}{r}$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tips",
            md: t`An expansion question usually carries 2–3 marks: one for writing the correct binomial coefficients, one for the powers with brackets, one for the simplified answer. Always keep the sign inside the bracket, write the terms in order of falling powers, and check by putting $x = 1$ before moving on.`,
          },
          {
            type: "keypoints",
            items: [
              t`$(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$ for a positive integer $n$; there are $n + 1$ terms.`,
              t`Pascal's triangle gives the coefficients; Pascal's rule is $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$.`,
              t`Coefficients are symmetric: $\binom{n}{r} = \binom{n}{n-r}$. In $(x - y)^n$ the signs alternate.`,
              t`Sum of coefficients of any expansion = its value at $x = 1$ (and $2^n$ for $(1+x)^n$).`,
              "Use the theorem for quick powers (99^5, 101^4) and for divisibility proofs.",
            ],
          },
        ],
        flashcards: [
          { front: "What is a binomial?", back: t`An algebraic expression with two terms, such as $a + b$ or $2x - \frac{1}{x}$.` },
          { front: t`State the binomial theorem.`, back: t`$(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$ for every positive integer $n$.` },
          { front: t`How many terms does $(a+b)^n$ have?`, back: t`$n + 1$.` },
          { front: "Pascal's rule", back: t`$\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$: each inner entry of Pascal's triangle is the sum of the two above it.` },
          { front: t`Row 6 of Pascal's triangle`, back: "1, 6, 15, 20, 15, 6, 1" },
          { front: "Sum of the coefficients of an expansion", back: t`Put every variable equal to 1. For $(1+x)^n$ it is $2^n$.` },
          { front: t`Sign pattern in $(x - y)^n$`, back: t`The $(k+1)$th term carries $(-1)^k$: signs go $+, -, +, -, \ldots$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`How many terms are there in $(2x - y)^{12}$?`,
            options: ["12", "13", "24", "11"],
            answer: 1,
            explain: t`$n + 1 = 13$ terms.`,
          },
          {
            kind: "mcq",
            q: t`Which term of $(x + 2)^6$ contains $x^3$, and what is it?`,
            options: [t`$160x^3$`, t`$20x^3$`, t`$120x^3$`, t`$80x^3$`],
            answer: 0,
            explain: t`$\binom{6}{3}x^3 \cdot 2^3 = 20 \cdot 8x^3 = 160x^3$. Forgetting to power the 2 gives $20x^3$.`,
          },
          {
            kind: "numeric",
            q: t`Use the binomial theorem to find $101^4$.`,
            answer: 104060401,
            explain: t`$(100 + 1)^4 = 10^8 + 4 \cdot 10^6 + 6 \cdot 10^4 + 4 \cdot 10^2 + 1 = 100\,000\,000 + 4\,000\,000 + 60\,000 + 400 + 1 = 104\,060\,401$.`,
          },
          {
            kind: "truefalse",
            q: t`$\binom{n}{r} = \binom{n}{n-r}$ for $0 \le r \le n$.`,
            answer: true,
            explain: t`Choosing $r$ objects to take is the same as choosing $n - r$ objects to leave, so the coefficients are symmetric.`,
          },
          {
            kind: "fill",
            q: t`In row $n = 5$ of Pascal's triangle (1, 5, ___, 10, 5, 1) the missing entry is ___.`,
            answer: ["10"],
            explain: t`$\binom{5}{2} = 10$; also $4 + 6 = 10$ from the row above.`,
          },
          {
            kind: "mcq",
            q: t`$(\sqrt{2} + 1)^4 + (\sqrt{2} - 1)^4 = ?$`,
            options: ["34", "17", "24", "68"],
            answer: 0,
            difficulty: 2,
            hint: "When you add the two expansions, the odd-numbered powers of 1 cancel.",
            explain: t`Terms with odd powers of 1 cancel; the rest double: $2\left[(\sqrt{2})^4 + 6(\sqrt{2})^2 + 1\right] = 2[4 + 12 + 1] = 34$.`,
          },
          {
            kind: "multi",
            q: t`Which statements are true for the expansion of $(a + b)^n$, $n$ a positive integer?`,
            options: [
              "It has n + 1 terms",
              "In each term the indices of a and b add up to n",
              "Coefficients equidistant from the ends are equal",
              "All the coefficients are different",
            ],
            answers: [0, 1, 2],
            explain: t`The first three are standard properties. The last is false: symmetry makes coefficients repeat, e.g. 1, 4, 6, 4, 1.`,
          },
          {
            kind: "numeric",
            q: t`The sum of the coefficients in the expansion of $(x + 1)^7$ is ___.`,
            answer: 128,
            explain: t`Put $x = 1$: $2^7 = 128$.`,
          },
        ],
      },
      {
        slug: "c11-binomial-general-middle",
        title: "General and Middle Terms",
        summary: "The (r + 1)th term formula, finding a given coefficient or the term independent of x, and the middle term(s) of an expansion.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🎯",
            caption: t`You need only the $x^6$ term of $(x^2 + \frac{3}{x})^9$. Writing all ten terms is a waste of time when one formula points straight to it.`,
          },
          {
            type: "text",
            md: t`In $(a+b)^n$ the first term has $b^0$, the second $b^1$, the third $b^2$. So the term with $b^r$ is the $(r+1)$th term. It is called the **general term** and is written $T_{r+1}$.

For $(a - b)^n$ write $b$ as $-b$; the general term then carries $(-1)^r$.`,
          },
          {
            type: "formula",
            tex: t`T_{r+1} = \binom{n}{r}\,a^{n-r}\,b^{r}, \qquad r = 0, 1, 2, \ldots, n`,
            caption: "General term of (a + b)^n. Note: the term number is one more than r.",
          },
          {
            type: "example",
            title: "A named term",
            problem: t`Find the 4th term of $\left(x^2 - \frac{2}{x}\right)^7$.`,
            steps: [
              t`4th term means $r + 1 = 4$, so $r = 3$. Here $a = x^2$, $b = -\frac{2}{x}$, $n = 7$.`,
              t`$T_4 = \binom{7}{3}(x^2)^{4}\left(-\frac{2}{x}\right)^3 = 35 \cdot x^8 \cdot \left(-\frac{8}{x^3}\right)$.`,
              t`$= -280x^5$.`,
            ],
            answer: t`$T_4 = -280x^5$`,
          },
          {
            type: "text",
            md: t`**Finding a given power of x.** Write $T_{r+1}$, collect every power of $x$ into a single exponent (a linear expression in $r$), set it equal to the power you want and solve for $r$. If $r$ is not a whole number between 0 and $n$, that power **does not occur**.

The **term independent of x** (the constant term) is the special case where the exponent of $x$ is 0.`,
          },
          {
            type: "example",
            title: "Coefficient of a given power",
            problem: t`Find the coefficient of $x^6$ in $\left(x^2 + \frac{3}{x}\right)^9$.`,
            steps: [
              t`$T_{r+1} = \binom{9}{r}(x^2)^{9-r}\left(\frac{3}{x}\right)^r = \binom{9}{r}3^r x^{18-2r-r} = \binom{9}{r}3^r x^{18-3r}$.`,
              t`Set $18 - 3r = 6$: $r = 4$, which is allowed ($0 \le 4 \le 9$).`,
              t`Coefficient $= \binom{9}{4}3^4 = 126 \times 81 = 10\,206$.`,
            ],
            answer: t`The coefficient of $x^6$ is $10\,206$ (it is the 5th term).`,
          },
          {
            type: "example",
            title: "Term independent of x",
            problem: t`Find the term independent of $x$ in $\left(x - \frac{1}{2x^2}\right)^9$.`,
            steps: [
              t`$T_{r+1} = \binom{9}{r}x^{9-r}\left(-\frac{1}{2x^2}\right)^r = \binom{9}{r}\left(-\frac{1}{2}\right)^r x^{9-3r}$.`,
              t`Independent of $x$: $9 - 3r = 0$, so $r = 3$.`,
              t`$T_4 = \binom{9}{3}\left(-\frac{1}{2}\right)^3 = 84 \times \left(-\frac{1}{8}\right) = -\frac{21}{2}$.`,
            ],
            answer: t`The 4th term, $-\frac{21}{2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Which term of $\left(x + \frac{1}{x}\right)^{10}$ is independent of $x$?`,
                options: ["5th", "6th", "10th", "There is none"],
                answer: 1,
                explain: t`$T_{r+1} = \binom{10}{r}x^{10-2r}$; $10 - 2r = 0$ gives $r = 5$, so the 6th term, $\binom{10}{5} = 252$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Middle terms.** $(a+b)^n$ has $n + 1$ terms.

If $n$ is **even**, $n + 1$ is odd and there is **one** middle term, the $\left(\frac{n}{2} + 1\right)$th.

If $n$ is **odd**, $n + 1$ is even and there are **two** middle terms, the $\left(\frac{n+1}{2}\right)$th and the $\left(\frac{n+3}{2}\right)$th.`,
          },
          {
            type: "table",
            headers: ["n", "Number of terms", "Middle term(s)"],
            rows: [
              ["6", "7", t`$T_4$`],
              ["7", "8", t`$T_4$ and $T_5$`],
              ["10", "11", t`$T_6$`],
              ["15", "16", t`$T_8$ and $T_9$`],
            ],
          },
          {
            type: "example",
            title: "Two middle terms",
            problem: t`Find the middle terms of $\left(2x - \frac{y}{2}\right)^7$.`,
            steps: [
              t`$n = 7$ is odd, so the middle terms are $T_4$ ($r = 3$) and $T_5$ ($r = 4$).`,
              t`$T_4 = \binom{7}{3}(2x)^4\left(-\frac{y}{2}\right)^3 = 35 \cdot 16x^4 \cdot \left(-\frac{y^3}{8}\right) = -70x^4y^3$.`,
              t`$T_5 = \binom{7}{4}(2x)^3\left(-\frac{y}{2}\right)^4 = 35 \cdot 8x^3 \cdot \frac{y^4}{16} = \frac{35}{2}x^3y^4$.`,
            ],
            answer: t`$-70x^4y^3$ and $\frac{35}{2}x^3y^4$`,
          },
          {
            type: "mistake",
            wrong: t`The 5th term of $(a+b)^n$ is $\binom{n}{5}a^{n-5}b^5$.`,
            right: t`The 5th term has $r = 4$: $T_5 = \binom{n}{4}a^{n-4}b^4$. Always subtract 1 from the term number to get $r$.`,
            why: t`The formula is labelled $T_{r+1}$, not $T_r$, because counting starts with $b^0$ in the first term. Plugging the term number straight in shifts every answer by one term.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for the constant term in order.",
              items: [
                "Write the general term T(r+1) with C(n, r)",
                "Collect all powers of x into one exponent in r",
                "Set that exponent equal to 0 and solve for r",
                "Check that r is a whole number from 0 to n",
                "Substitute r back to get the term's value",
              ],
              explain: "The method is the same for any required power of x; only the number on the right side of the exponent equation changes. If r is a fraction or out of range, the term does not exist.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`The rationalised NCERT book used by **CBSE** and **Karnataka I PUC** has shortened this chapter: the separate section on general and middle terms has been moved out of the main text, so check your current board syllabus before the exam. **ISC** Class 11 still teaches general and middle terms, and ISC also proves the theorem by **mathematical induction** (assume it for $n = k$, multiply by $(a + b)$ and use Pascal's rule). **JEE Main, KCET and COMEDK** ask general-term questions almost every year, so every aspirant needs this lesson.`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "How these questions are marked",
            md: t`Write $T_{r+1}$ in full first, then the single exponent of $x$ (one mark), then the value of $r$ (one mark), then the term (one mark). Give the term number as well as its value when asked "which term".`,
          },
          {
            type: "keypoints",
            items: [
              t`$T_{r+1} = \binom{n}{r}a^{n-r}b^r$; the term number is $r + 1$.`,
              t`For a required power of $x$, solve "exponent of $x$ = required power" for $r$; $r$ must be a whole number in $[0, n]$.`,
              "The term independent of x has exponent 0.",
              t`$n$ even: one middle term $T_{n/2+1}$. $n$ odd: two middle terms $T_{(n+1)/2}$ and $T_{(n+3)/2}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`General term of $(a+b)^n$`, back: t`$T_{r+1} = \binom{n}{r}a^{n-r}b^r$` },
          { front: t`General term of $(a-b)^n$`, back: t`$T_{r+1} = (-1)^r\binom{n}{r}a^{n-r}b^r$` },
          { front: t`Which $r$ gives the 7th term?`, back: t`$r = 6$ (term number minus 1).` },
          { front: t`Middle term of $(a+b)^n$, $n$ even`, back: t`The single term $T_{\frac{n}{2}+1}$.` },
          { front: t`Middle terms of $(a+b)^n$, $n$ odd`, back: t`$T_{\frac{n+1}{2}}$ and $T_{\frac{n+3}{2}}$.` },
          { front: "Term independent of x", back: t`The term whose power of $x$ is 0; find $r$ from "exponent = 0".` },
          { front: "When does a required power of x not occur?", back: t`When the $r$ you solve for is not a whole number from 0 to $n$.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the coefficient of $x^5$ in $(x + 3)^8$.`,
            answer: 1512,
            explain: t`$T_{r+1} = \binom{8}{r}x^{8-r}3^r$; $8 - r = 5$ gives $r = 3$: $\binom{8}{3}3^3 = 56 \times 27 = 1512$.`,
          },
          {
            kind: "mcq",
            q: t`The middle term of $\left(x - \frac{1}{x}\right)^{10}$ is`,
            options: ["−252", "252", "210", "−210"],
            answer: 0,
            explain: t`$n = 10$: middle term $T_6$, $r = 5$: $\binom{10}{5}x^5\left(-\frac{1}{x}\right)^5 = -252$.`,
          },
          {
            kind: "numeric",
            q: t`Find the term independent of $x$ in $\left(x^2 + \frac{2}{x}\right)^6$.`,
            answer: 240,
            explain: t`$T_{r+1} = \binom{6}{r}2^r x^{12-3r}$; $r = 4$: $\binom{6}{4}2^4 = 15 \times 16 = 240$.`,
          },
          {
            kind: "mcq",
            q: t`How many middle terms does $(a + b)^{15}$ have?`,
            options: ["One: the 8th", "Two: the 8th and 9th", "Two: the 7th and 8th", "One: the 9th"],
            answer: 1,
            explain: t`16 terms, so two middle terms: $T_{(15+1)/2} = T_8$ and $T_{(15+3)/2} = T_9$.`,
          },
          {
            kind: "truefalse",
            q: t`$\left(x + \frac{1}{x}\right)^7$ has a term independent of $x$.`,
            answer: false,
            explain: t`Exponent $7 - 2r = 0$ gives $r = 3.5$, not a whole number, so no such term.`,
          },
          {
            kind: "mcq",
            q: t`The 3rd term of $(1 - 2x)^6$ is`,
            options: [t`$60x^2$`, t`$-60x^2$`, t`$15x^2$`, t`$-160x^3$`],
            answer: 0,
            explain: t`$r = 2$: $\binom{6}{2}(-2x)^2 = 15 \times 4x^2 = 60x^2$. $-160x^3$ is the 4th term.`,
          },
          {
            kind: "numeric",
            q: t`In $(1 + ax)^4$, $a > 0$, the coefficient of $x^2$ is 24. Find $a$.`,
            answer: 2,
            difficulty: 2,
            hint: t`The $x^2$ term is $\binom{4}{2}(ax)^2$.`,
            explain: t`$\binom{4}{2}a^2 = 6a^2 = 24$, so $a^2 = 4$ and $a = 2$.`,
          },
          {
            kind: "fill",
            q: t`In $(a + b)^n$ the 10th term contains $b$ raised to the power ___.`,
            answer: ["9"],
            explain: t`$T_{r+1}$ has $b^r$; 10th term means $r = 9$.`,
          },
        ],
      },
