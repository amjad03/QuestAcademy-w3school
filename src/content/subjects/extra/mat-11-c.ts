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
            md: t`In this array, called **Pascal's triangle** (known in ancient India as *Meru Prastara*, from the tradition of Pingala's work on poetic metres), each row starts and ends with 1, and every inner number is the **sum of the two numbers just above it**: $4 + 6 = 10$ in row 5.

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
            q: t`The term containing $x^3$ in $(x + 2)^6$ is`,
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
            q: t`Row $n = 5$ of Pascal's triangle reads 1, 5, ___, 10, 5, 1.`,
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
      {
        slug: "c11-binomial-exam-terms",
        title: "Exam edge: terms, remainders and the greatest term",
        summary: "What JEE, KCET and COMEDK ask from the general term: rational terms, remainders, last digits, the greatest term, coefficients in products and the integral-part trick.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "exam",
            title: "What the exams ask",
            md: t`**JEE Main** has about one binomial question in most shifts: a coefficient or constant term, the number of rational terms, a remainder, or a coefficient sum (next lesson). **JEE Advanced** mixes binomial coefficients with series or with the integral part of $(a + \sqrt{b})^n$. **KCET** and **COMEDK** ask direct general-term and middle-term questions that reward speed. Everything starts from $T_{r+1}$.`,
          },
          {
            type: "text",
            md: t`**Consecutive-term ratio.** Dividing two neighbouring general terms of $(a + b)^n$ gives

$\dfrac{T_{r+1}}{T_r} = \dfrac{n - r + 1}{r}\cdot\dfrac{b}{a}$.

The terms keep growing while this ratio is more than 1. That gives the **greatest term**. For $(1 + x)^n$ with $x > 0$, compute $m = \dfrac{(n+1)x}{1 + x}$. If $m$ is an integer, $T_m$ and $T_{m+1}$ are equal and both greatest. If not, the greatest term is $T_{[m]+1}$, where $[m]$ is the integer part. For $(a + b)^n$, take out $a^n$ first and use $x = b/a$.`,
          },
          {
            type: "formula",
            tex: t`\frac{T_{r+1}}{T_r} = \frac{n-r+1}{r}\cdot\frac{b}{a} \qquad m = \frac{(n+1)\,x}{1+x}`,
            caption: "Greatest term of (1 + x)^n, x > 0. Use |x| when x is negative (sizes of terms only).",
          },
          {
            type: "text",
            md: t`**Greatest coefficient** is a different question: the coefficients $\binom{n}{r}$ alone are largest in the middle, $\binom{n}{n/2}$ for even $n$, and $\binom{n}{(n-1)/2} = \binom{n}{(n+1)/2}$ for odd $n$. The greatest **term** also depends on the value of $x$.

**Remainders.** Write the base as (multiple of the divisor) ± 1, expand, and keep only the last one or two terms; every other term is a multiple of the divisor.`,
          },
          {
            type: "example",
            title: "KCET level: rational terms",
            problem: t`How many rational terms are there in the expansion of $\left(\sqrt{3} + 2^{1/4}\right)^{12}$?`,
            steps: [
              t`$T_{r+1} = \binom{12}{r}3^{(12-r)/2}\,2^{r/4}$.`,
              t`The term is rational when both exponents are whole numbers: $\frac{r}{4}$ needs $r$ to be a multiple of 4, and $\frac{12-r}{2}$ needs $r$ even.`,
              t`Multiples of 4 from 0 to 12 are $0, 4, 8, 12$, and all are even.`,
            ],
            answer: "4 rational terms (r = 0, 4, 8, 12).",
          },
          {
            type: "example",
            title: "JEE Main level: a remainder",
            problem: t`Find the remainder when $7^{103}$ is divided by 25.`,
            steps: [
              t`$7^2 = 49 = 50 - 1$, so $7^{103} = 7 \cdot (49)^{51} = 7(50 - 1)^{51}$.`,
              t`$(50 - 1)^{51} = 50^{51} - \binom{51}{1}50^{50} + \cdots + \binom{51}{50}50 - 1 = 50k - 1$ for some integer $k$ (51 is odd, so the last term is $-1$).`,
              t`$7^{103} = 350k - 7$. Now $350k$ is a multiple of 25, so $7^{103} \equiv -7 \pmod{25}$.`,
              t`A remainder cannot be negative: $-7 + 25 = 18$.`,
            ],
            answer: t`The remainder is 18. (Check: $7^4 = 2401 = 96 \times 25 + 1$, and $7^{103} = (7^4)^{25}\cdot 7^3$, with $7^3 = 343 = 13 \times 25 + 18$.)`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find the remainder when $5^{99}$ is divided by 13.`,
                answer: 8,
                hint: t`$5^2 = 25 = 26 - 1$.`,
                explain: t`$5^{99} = 5 \cdot 25^{49} = 5(26 - 1)^{49} = 5(26k - 1) = 130k - 5 \equiv -5 \equiv 8 \pmod{13}$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: the greatest term",
            problem: t`Find the greatest term in the expansion of $(3 + 2x)^9$ when $x = 1$.`,
            steps: [
              t`$(3 + 2x)^9 = 3^9\left(1 + \frac{2x}{3}\right)^9$; at $x = 1$ the inner $x$ is $\frac{2}{3}$.`,
              t`$m = \frac{(n+1)x}{1+x} = \frac{10 \cdot \frac{2}{3}}{\frac{5}{3}} = 4$, an integer.`,
              t`So $T_4$ and $T_5$ are equal and greatest. $T_4 = \binom{9}{3}3^6 2^3 = 84 \times 729 \times 8 = 489\,888$.`,
              t`Check: $T_5 = \binom{9}{4}3^5 2^4 = 126 \times 243 \times 16 = 489\,888$. ✓`,
            ],
            answer: t`$T_4 = T_5 = 489\,888$ are the greatest terms.`,
          },
          {
            type: "example",
            title: "JEE Main level: coefficient in a trinomial",
            problem: t`Find the coefficient of $x^4$ in $(1 + x + x^2)^4$.`,
            steps: [
              t`Group as a binomial: $(1 + x(1 + x))^4 = \sum_{k=0}^{4}\binom{4}{k}x^k(1 + x)^k$.`,
              t`From the $k$th piece we need $x^{4-k}$ from $(1+x)^k$, i.e. $\binom{k}{4-k}$; this needs $4 - k \le k$, so $k = 2, 3, 4$.`,
              t`$k = 2$: $\binom{4}{2}\binom{2}{2} = 6$. $k = 3$: $\binom{4}{3}\binom{3}{1} = 12$. $k = 4$: $\binom{4}{4}\binom{4}{0} = 1$.`,
              t`Total $6 + 12 + 1 = 19$.`,
            ],
            answer: t`19`,
          },
          {
            type: "example",
            title: "JEE Advanced level: the integral-part trick",
            problem: t`Let $(5 + 2\sqrt{6})^n = I + f$, where $n$ is a positive integer, $I$ is an integer and $0 < f < 1$. Show that $(I + f)(1 - f) = 1$.`,
            steps: [
              t`Let $f' = (5 - 2\sqrt{6})^n$. Since $0 < 5 - 2\sqrt{6} < 1$ (it is about 0.10), $0 < f' < 1$.`,
              t`Add the two expansions: the terms with odd powers of $2\sqrt{6}$ cancel, so $I + f + f' = 2\left[5^n + \binom{n}{2}5^{n-2}\cdot 24 + \cdots\right]$, an even integer.`,
              t`Hence $f + f'$ is an integer. As $0 < f + f' < 2$, it must be 1, so $1 - f = f'$.`,
              t`$(I + f)(1 - f) = (5 + 2\sqrt{6})^n(5 - 2\sqrt{6})^n = (25 - 24)^n = 1$.`,
            ],
            answer: t`$(I+f)(1-f) = 1$. Also, $I = \text{even} - 1$ is odd.`,
          },
          {
            type: "mistake",
            wrong: t`The greatest term of $(1 + x)^n$ is always the middle term.`,
            right: t`The middle term has the greatest **coefficient**. The greatest **term** depends on $x$: use $m = \frac{(n+1)x}{1+x}$. For $(1 + x)^{10}$ at $x = \frac{1}{2}$ it is $T_4$, not the middle term $T_6$.`,
            why: t`For $x = 1$ the two questions have the same answer, which makes the shortcut feel general. A small $x$ shrinks the later terms, so the peak moves towards the start.`,
          },
          {
            type: "mistake",
            wrong: t`$7^{103} \equiv -7 \pmod{25}$, so the remainder is $-7$.`,
            right: "A remainder must lie between 0 and divisor − 1. Add the divisor: −7 + 25 = 18.",
            why: "The (multiple ± 1) trick naturally produces negative leftovers. Options in MCQs often include the negative value or its absolute value, 7, as traps.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`Which is the greatest term of $(1 + x)^{10}$ at $x = \frac{1}{2}$?`,
              emoji: "📈",
              options: [t`$T_6$, the middle term`, t`$T_4$`, t`$T_1$`, t`$T_{11}$`],
              answer: 1,
              trap: 0,
              explain: t`$m = \frac{11 \cdot \frac{1}{2}}{\frac{3}{2}} = \frac{11}{3} \approx 3.67$, not an integer, so the greatest term is $T_{[m]+1} = T_4 = \binom{10}{3}\left(\frac{1}{2}\right)^3 = 15$. Its neighbours are $T_3 = 11.25$ and $T_5 = 13.125$.`,
            },
          },
          {
            type: "callout",
            tone: "tip",
            title: "Shortcuts and when they are safe",
            md: t`Last two digits of $9^k$, $11^k$, $21^k$ and the like: expand about 10 and keep two terms. The ratio test for the greatest term needs $x > 0$ in $(1 + x)^n$; for negative $x$ use $|x|$ to find the term of greatest **size**. The "add the conjugate" trick works only when the conjugate lies strictly between 0 and 1 (or between −1 and 0, where you subtract instead).`,
          },
          {
            type: "keypoints",
            items: [
              t`Rational terms: make every exponent in $T_{r+1}$ a whole number; count the allowed $r$.`,
              "Remainders: write the base as (multiple of the divisor) ± 1; correct a negative leftover by adding the divisor.",
              t`Greatest term of $(1 + x)^n$: $m = \frac{(n+1)x}{1+x}$; integer $m$ gives two equal greatest terms $T_m$, $T_{m+1}$, otherwise $T_{[m]+1}$.`,
              "Greatest coefficient is always the middle one; greatest term depends on x.",
              t`$(a + \sqrt{b})^n + (a - \sqrt{b})^n$ is an integer: the base of every integral-part question.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\frac{T_{r+1}}{T_r}$ in $(a + b)^n$`, back: t`$\frac{n - r + 1}{r}\cdot\frac{b}{a}$` },
          { front: t`Greatest term of $(1+x)^n$, $x > 0$`, back: t`$m = \frac{(n+1)x}{1+x}$: if integer, $T_m = T_{m+1}$ both greatest; else $T_{[m]+1}$.` },
          { front: "Greatest binomial coefficient", back: t`$\binom{n}{n/2}$ for even $n$; $\binom{n}{(n\pm1)/2}$ for odd $n$.` },
          { front: "Rational terms in a surd expansion", back: t`Values of $r$ that make every fractional exponent in $T_{r+1}$ a whole number.` },
          { front: "Remainder trick", back: t`Base = (multiple of divisor) ± 1; e.g. $7^2 = 50 - 1$ for division by 25.` },
          { front: t`$(a+\sqrt b)^n + (a-\sqrt b)^n$`, back: t`An integer (twice the sum of the odd-numbered terms), the key to integral-part problems.` },
          { front: t`Coefficient of $x^k$ in $(1 + x + x^2)^n$`, back: t`Write it as $(1 + x(1+x))^n$ and expand twice, or use the trinomial row.` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`How many rational terms are there in $\left(2^{1/2} + 3^{1/5}\right)^{20}$?`,
            answer: 3,
            difficulty: 2,
            hint: t`$r$ must be a multiple of 5 and $20 - r$ must be even.`,
            explain: t`$T_{r+1} = \binom{20}{r}2^{(20-r)/2}3^{r/5}$. $r$ must be a multiple of 5 and even, so a multiple of 10: $r = 0, 10, 20$, giving 3 terms.`,
          },
          {
            kind: "mcq",
            q: t`The greatest term in $(1 + x)^{10}$ at $x = \frac{1}{2}$ is`,
            options: [t`$T_4 = 15$`, t`$T_6 = \frac{63}{8}$`, t`$T_5 = \frac{105}{8}$`, t`$T_3 = \frac{45}{4}$`],
            answer: 0,
            difficulty: 2,
            explain: t`$m = \frac{11/2}{3/2} = \frac{11}{3}$, so $T_4 = \binom{10}{3}\frac{1}{8} = 15$. The middle term $T_6 = \frac{252}{32} = \frac{63}{8}$ is smaller.`,
          },
          {
            kind: "numeric",
            q: t`Find the coefficient of $x^3$ in $(1 + x + x^2)^3$.`,
            answer: 7,
            explain: t`$(1 + x(1+x))^3$: $k = 2$ gives $\binom{3}{2}\binom{2}{1} = 6$; $k = 3$ gives $\binom{3}{3}\binom{3}{0} = 1$. Total 7.`,
          },
          {
            kind: "multi",
            q: t`Let $(2 + \sqrt{3})^n = I + f$, with $n$ a positive integer, $I$ an integer and $0 < f < 1$. Which are true?`,
            options: [t`$I$ is odd`, t`$(I + f)(1 - f) = 1$`, t`$f + (2 - \sqrt{3})^n = 1$`, t`$I$ is even`],
            answers: [0, 1, 2],
            difficulty: 3,
            hint: t`$0 < 2 - \sqrt{3} < 1$, and the sum of the two powers is an even integer.`,
            explain: t`With $f' = (2-\sqrt3)^n$, $I + f + f'$ is an even integer and $0 < f + f' < 2$, so $f + f' = 1$ and $I$ = even − 1 is odd. Then $(I+f)(1-f) = (2+\sqrt3)^n(2-\sqrt3)^n = 1$.`,
          },
          {
            kind: "mcq",
            q: t`The term independent of $x$ in $\left(x^2 - \frac{1}{x}\right)^9$ is`,
            options: ["84", "−84", "126", "There is no such term"],
            answer: 0,
            explain: t`$T_{r+1} = \binom{9}{r}(-1)^r x^{18-3r}$; $r = 6$: $\binom{9}{6}(+1) = 84$. The sign is + because $r$ is even.`,
          },
          {
            kind: "numeric",
            q: t`Find the coefficient of $x^4$ in $(1 + x)^5(1 - x)^5$.`,
            answer: 10,
            difficulty: 2,
            hint: "Multiply the bases before expanding.",
            explain: t`$(1+x)^5(1-x)^5 = (1 - x^2)^5$. The $x^4$ term is $\binom{5}{2}(-x^2)^2 = 10x^4$.`,
          },
          {
            kind: "mcq",
            q: t`The last two digits of $3^{100}$ are`,
            options: ["01", "81", "49", "41"],
            answer: 0,
            difficulty: 2,
            explain: t`$3^{100} = 9^{50} = (10 - 1)^{50} = 1 - 50 \cdot 10 + (\text{multiples of } 100) = 1 - 500 + \ldots \equiv 1 \pmod{100}$. Last two digits 01.`,
          },
          {
            kind: "numeric",
            q: t`Find the remainder when $2^{31}$ is divided by 9.`,
            answer: 2,
            difficulty: 2,
            hint: t`$2^3 = 9 - 1$.`,
            explain: t`$2^{31} = 2 \cdot 8^{10} = 2(9 - 1)^{10} = 2(9k + 1) = 18k + 2$, so the remainder is 2.`,
          },
        ],
      },
      {
        slug: "c11-binomial-exam-coefficients",
        title: "Exam edge: binomial coefficient sums and identities",
        summary: "Substituting values of x, the identity r·C(n, r) = n·C(n − 1, r − 1), sums of squares and products of coefficients (Vandermonde), and the number of terms in a multinomial.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "callout",
            tone: "exam",
            title: "What the exams ask",
            md: t`Coefficient sums are a JEE Main favourite and appear in JEE Advanced as one step of a longer problem. KCET and COMEDK ask the basic sums ($2^n$, $2^{n-1}$) directly. Write $C_r$ for $\binom{n}{r}$ throughout, and start from $(1 + x)^n = C_0 + C_1x + C_2x^2 + \cdots + C_nx^n$.`,
          },
          {
            type: "text",
            md: t`**Substitution.** Put $x = 1$: $C_0 + C_1 + \cdots + C_n = 2^n$. Put $x = -1$: $C_0 - C_1 + C_2 - \cdots = 0$.

Adding and subtracting these two results: $C_0 + C_2 + C_4 + \cdots = C_1 + C_3 + C_5 + \cdots = 2^{n-1}$.

**Absorption identity.** $r\binom{n}{r} = r\cdot\frac{n!}{r!(n-r)!} = n\cdot\frac{(n-1)!}{(r-1)!(n-r)!} = n\binom{n-1}{r-1}$. It turns a weighted sum into a plain one, with no calculus needed. Similarly $\frac{1}{r+1}\binom{n}{r} = \frac{1}{n+1}\binom{n+1}{r+1}$.`,
          },
          {
            type: "formula",
            tex: t`\sum_{r=0}^{n} C_r = 2^n \qquad \sum_{r=0}^{n}(-1)^r C_r = 0 \qquad \sum_{r=1}^{n} r\,C_r = n\,2^{n-1}`,
            caption: "The three most used sums (C_r = C(n, r), n ≥ 1).",
          },
          {
            type: "example",
            title: "KCET level: a weighted sum",
            problem: t`Evaluate $\sum_{r=1}^{10} r\binom{10}{r}$.`,
            steps: [
              t`Absorb: $r\binom{10}{r} = 10\binom{9}{r-1}$.`,
              t`So the sum is $10\sum_{r=1}^{10}\binom{9}{r-1} = 10\sum_{s=0}^{9}\binom{9}{s} = 10 \cdot 2^9$.`,
            ],
            answer: t`$10 \times 512 = 5120$`,
          },
          {
            type: "text",
            md: t`**Vandermonde's identity.** Compare the coefficient of $x^r$ on both sides of $(1+x)^m(1+x)^n = (1+x)^{m+n}$:

$\sum_{k}\binom{m}{k}\binom{n}{r-k} = \binom{m+n}{r}$.

With $m = n$ and $r = n$, and $\binom{n}{n-k} = \binom{n}{k}$, this gives the sum of squares: $C_0^2 + C_1^2 + \cdots + C_n^2 = \binom{2n}{n}$.`,
          },
          {
            type: "formula",
            tex: t`\sum_{r=0}^{n} C_r^{\,2} = \binom{2n}{n} \qquad \sum_{r=0}^{n-1} C_r\,C_{r+1} = \binom{2n}{n-1}`,
            caption: "Both come from comparing coefficients in (1 + x)^n · (1 + x)^n.",
          },
          {
            type: "example",
            title: "JEE Main level: sum of squares",
            problem: t`Find $C_0^2 + C_1^2 + \cdots + C_5^2$ for $n = 5$.`,
            steps: [
              t`By the identity it equals $\binom{10}{5} = 252$.`,
              t`Check directly: $1 + 25 + 100 + 100 + 25 + 1 = 252$. ✓`,
            ],
            answer: "252",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`For $n = 11$, $C_1 + C_3 + C_5 + \cdots + C_{11} = ?$`,
                options: ["1024", "2048", "512", "1023"],
                answer: 0,
                explain: t`The odd-index coefficients add to $2^{n-1} = 2^{10} = 1024$.`,
              },
              {
                kind: "numeric",
                q: t`How many terms are there in the expansion of $(a + b + c)^8$?`,
                answer: 45,
                explain: t`Terms $a^pb^qc^s$ with $p + q + s = 8$: $\binom{8+2}{2} = 45$.`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: dividing by r + 1",
            problem: t`Evaluate $\sum_{r=0}^{5}\frac{\binom{5}{r}}{r+1}$.`,
            steps: [
              t`Use $\frac{1}{r+1}\binom{5}{r} = \frac{1}{6}\binom{6}{r+1}$.`,
              t`The sum becomes $\frac{1}{6}\left[\binom{6}{1} + \binom{6}{2} + \cdots + \binom{6}{6}\right] = \frac{1}{6}(2^6 - 1)$.`,
              t`$= \frac{63}{6} = \frac{21}{2}$. Direct check: $1 + \frac{5}{2} + \frac{10}{3} + \frac{10}{4} + \frac{5}{5} + \frac{1}{6} = 10.5$. ✓`,
            ],
            answer: t`$\frac{21}{2}$; in general $\sum_{r=0}^{n}\frac{C_r}{r+1} = \frac{2^{n+1} - 1}{n+1}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: a product sum",
            problem: t`Prove that $C_0C_1 + C_1C_2 + \cdots + C_{n-1}C_n = \binom{2n}{n-1}$, and check it for $n = 4$.`,
            steps: [
              t`Rewrite each product with symmetry: $C_rC_{r+1} = \binom{n}{r}\binom{n}{n-r-1}$.`,
              t`In $(1+x)^n(1+x)^n$, the coefficient of $x^{n-1}$ collects exactly $\sum_r \binom{n}{r}\binom{n}{n-1-r}$.`,
              t`On the other side it is the coefficient of $x^{n-1}$ in $(1+x)^{2n}$, which is $\binom{2n}{n-1}$.`,
              t`For $n = 4$: $1\cdot4 + 4\cdot6 + 6\cdot4 + 4\cdot1 = 56$, and $\binom{8}{3} = 56$. ✓`,
            ],
            answer: t`$\sum_{r=0}^{n-1}C_rC_{r+1} = \binom{2n}{n-1}$`,
          },
          {
            type: "mistake",
            wrong: t`$C_0^2 + C_1^2 + \cdots + C_n^2 = (2^n)^2 = 4^n$.`,
            right: t`The sum of squares is $\binom{2n}{n}$. For $n = 2$: $1 + 4 + 1 = 6 = \binom{4}{2}$, not $4^2 = 16$.`,
            why: "Squaring the sum adds all the cross products C_iC_j as well. Always test a remembered identity with n = 2 before trusting it.",
          },
          {
            type: "mistake",
            wrong: t`$(a + b + c)^n$ has $n + 1$ terms, just like a binomial.`,
            right: t`It has $\binom{n+2}{2} = \frac{(n+1)(n+2)}{2}$ terms, one for each solution of $p + q + s = n$ in whole numbers.`,
            why: "The n + 1 rule counts only two-letter terms. With three letters the exponents can be shared out in many more ways.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each sum with its value.",
              pairs: [
                [t`$\sum C_r$`, t`$2^n$`],
                [t`$\sum (-1)^r C_r$`, "0"],
                [t`$\sum r\,C_r$`, t`$n\,2^{n-1}$`],
                [t`$\sum C_r^{\,2}$`, t`$\binom{2n}{n}$`],
                [t`$C_0 + C_2 + C_4 + \cdots$`, t`$2^{n-1}$`],
              ],
              explain: t`All five come from $(1+x)^n$: substitute $x = \pm 1$, absorb with $r\binom{n}{r} = n\binom{n-1}{r-1}$, or compare coefficients in $(1+x)^{2n}$.`,
            },
          },
          {
            type: "keypoints",
            items: [
              t`$x = 1$ gives $\sum C_r = 2^n$; $x = -1$ gives $\sum(-1)^rC_r = 0$; even and odd parts are each $2^{n-1}$.`,
              t`$r\binom{n}{r} = n\binom{n-1}{r-1}$ and $\frac{1}{r+1}\binom{n}{r} = \frac{1}{n+1}\binom{n+1}{r+1}$ turn weighted sums into plain ones.`,
              t`Products of coefficients: compare coefficients in $(1+x)^m(1+x)^n = (1+x)^{m+n}$ (Vandermonde); $\sum C_r^2 = \binom{2n}{n}$.`,
              t`Sum of coefficients of any polynomial expression = its value when every variable is 1.`,
              "Test any remembered identity with n = 2 or n = 3.",
            ],
          },
        ],
        flashcards: [
          { front: t`$C_0 + C_1 + \cdots + C_n$`, back: t`$2^n$` },
          { front: t`$C_0 + C_2 + C_4 + \cdots$`, back: t`$2^{n-1}$ (same as the odd-index sum)` },
          { front: "Absorption identity", back: t`$r\binom{n}{r} = n\binom{n-1}{r-1}$` },
          { front: t`$\sum r\,C_r$`, back: t`$n\,2^{n-1}$` },
          { front: t`$\sum C_r^{\,2}$`, back: t`$\binom{2n}{n}$` },
          { front: "Vandermonde's identity", back: t`$\sum_k \binom{m}{k}\binom{n}{r-k} = \binom{m+n}{r}$` },
          { front: t`Number of terms in $(a + b + c)^n$`, back: t`$\binom{n+2}{2}$` },
          { front: t`$\sum_{r=0}^{n}\frac{C_r}{r+1}$`, back: t`$\frac{2^{n+1}-1}{n+1}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the sum of the coefficients in the expansion of $(2x - 3)^5$.`,
            answer: -1,
            explain: t`Put $x = 1$: $(2 - 3)^5 = (-1)^5 = -1$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\sum_{r=1}^{8} r\binom{8}{r}$.`,
            answer: 1024,
            explain: t`$n2^{n-1} = 8 \times 2^7 = 1024$.`,
          },
          {
            kind: "mcq",
            q: t`For $n = 6$, $C_0^2 + C_1^2 + \cdots + C_6^2 = ?$`,
            options: ["924", "4096", "64", "462"],
            answer: 0,
            explain: t`$\binom{12}{6} = 924$. 4096 is the trap $(2^6)^2$.`,
          },
          {
            kind: "multi",
            q: t`Which are true for $n \ge 1$, with $C_r = \binom{n}{r}$?`,
            options: [
              t`$\sum_{r=0}^{n}(-1)^rC_r = 0$`,
              t`$\sum_{r=0}^{n}C_r$ is odd`,
              t`$\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$`,
              t`$r\binom{n}{r} = n\binom{n-1}{r-1}$`,
            ],
            answers: [0, 2, 3],
            explain: t`$\sum C_r = 2^n$ is even for $n \ge 1$, so the second is false. The others are the alternating sum, Pascal's rule and the absorption identity.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\sum_{r=0}^{9}\frac{(-1)^r\binom{9}{r}}{r+1}$.`,
            answer: 0.1,
            tolerance: 0.001,
            difficulty: 3,
            hint: t`Use $\frac{1}{r+1}\binom{9}{r} = \frac{1}{10}\binom{10}{r+1}$.`,
            explain: t`The sum is $\frac{1}{10}\sum_{r=0}^{9}(-1)^r\binom{10}{r+1} = \frac{1}{10}\left[-\sum_{s=1}^{10}(-1)^s\binom{10}{s}\right] = \frac{1}{10}[-(0 - 1)] = \frac{1}{10}$.`,
          },
          {
            kind: "numeric",
            q: t`For $n = 5$, evaluate $C_0C_1 + C_1C_2 + C_2C_3 + C_3C_4 + C_4C_5$.`,
            answer: 210,
            difficulty: 3,
            explain: t`$\binom{2n}{n-1} = \binom{10}{4} = 210$. Directly: $5 + 50 + 100 + 50 + 5 = 210$.`,
          },
          {
            kind: "mcq",
            q: t`$\binom{10}{0}\binom{8}{4} + \binom{10}{1}\binom{8}{3} + \binom{10}{2}\binom{8}{2} + \binom{10}{3}\binom{8}{1} + \binom{10}{4}\binom{8}{0}$ equals`,
            options: [t`$\binom{18}{4}$`, t`$\binom{18}{8}$`, t`$\binom{80}{4}$`, t`$2^{18}$`],
            answer: 0,
            difficulty: 2,
            explain: t`Vandermonde with $m = 10$, $n = 8$, $r = 4$: the sum is the coefficient of $x^4$ in $(1+x)^{18}$, i.e. $\binom{18}{4}$.`,
          },
          {
            kind: "numeric",
            q: t`In $(1 + x)^{n}$ the sum of the even-index coefficients $C_0 + C_2 + \cdots$ is 256. Find $n$.`,
            answer: 9,
            explain: t`$2^{n-1} = 256 = 2^8$, so $n = 9$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Class 11: Sequences and Series (NCERT, Karnataka I PUC, ISC)        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c11-sequences-series",
    title: "Sequences and Series (Class 11)",
    icon: "🪜",
    description: "Sequences, series and sigma notation, arithmetic and geometric progressions, AM, GM and the AM–GM inequality, sums of special series, and the JEE tools: AGP, telescoping and the method of differences.",
    lessons: [
      {
        slug: "c11-sequences-ap",
        title: "Sequences, Series and Arithmetic Progressions",
        summary: "A sequence as a list with a rule, finite and infinite series, sigma notation, the nth term and sum of an AP, arithmetic means, and getting a_n from S_n.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🪙",
            caption: "Meera saves ₹50 in the first week and ₹10 more each week after that: 50, 60, 70, 80, … How much has she saved after a year? Sequences and series answer this in one line.",
          },
          {
            type: "text",
            md: t`A **sequence** is an ordered list of numbers $a_1, a_2, a_3, \ldots$ in which there is a first term, a second term and so on. Formally it is a function whose domain is the natural numbers $\{1, 2, 3, \ldots\}$ (an **infinite sequence**) or $\{1, 2, \ldots, n\}$ (a **finite sequence**). The term $a_n$ is the **nth term** or **general term**.

Some sequences have a formula, like $a_n = n^2 + 1$: 2, 5, 10, 17, … Others are given by a **recurrence**, where each term is built from earlier ones, like the Fibonacci sequence $a_1 = a_2 = 1$, $a_n = a_{n-1} + a_{n-2}$. Some, like the primes 2, 3, 5, 7, 11, …, have no simple formula at all.`,
          },
          {
            type: "example",
            title: "Terms from a rule",
            problem: t`Write the first five terms of (a) $a_n = \frac{(-1)^{n}n}{n+1}$ and (b) $a_1 = 1$, $a_n = 2a_{n-1} + 1$ for $n \ge 2$.`,
            steps: [
              t`(a) Put $n = 1, 2, 3, 4, 5$: $-\frac{1}{2}, \frac{2}{3}, -\frac{3}{4}, \frac{4}{5}, -\frac{5}{6}$.`,
              t`(b) $a_2 = 2(1) + 1 = 3$, $a_3 = 2(3) + 1 = 7$, $a_4 = 15$, $a_5 = 31$.`,
            ],
            answer: t`(a) $-\frac{1}{2}, \frac{2}{3}, -\frac{3}{4}, \frac{4}{5}, -\frac{5}{6}$ (b) 1, 3, 7, 15, 31`,
          },
          {
            type: "text",
            md: t`If $a_1, a_2, a_3, \ldots$ is a sequence, the expression $a_1 + a_2 + a_3 + \cdots$ is the associated **series**. It is finite or infinite as the sequence is. With the Greek letter sigma, $a_1 + a_2 + \cdots + a_n = \sum_{k=1}^{n}a_k$. A series means the indicated sum, not just its value.

An **arithmetic progression (AP)** is a sequence in which each term after the first is obtained by adding the same number $d$, the **common difference**: $a, a + d, a + 2d, \ldots$ Its nth term is $a_n = a + (n-1)d$.`,
          },
          {
            type: "text",
            md: t`**Sum of n terms of an AP.** Write the sum forwards and backwards:

$S_n = a + (a + d) + \cdots + [a + (n-1)d]$
$S_n = [a + (n-1)d] + [a + (n-2)d] + \cdots + a$

Add the two lines term by term. Each of the $n$ pairs adds to $2a + (n-1)d$, so $2S_n = n[2a + (n-1)d]$.`,
          },
          {
            type: "formula",
            tex: t`a_n = a + (n-1)d \qquad S_n = \frac{n}{2}\left[2a + (n-1)d\right] = \frac{n}{2}(a + l)`,
            caption: "a = first term, d = common difference, l = last (nth) term.",
          },
          {
            type: "example",
            title: "Sum of a block of an AP",
            problem: "Find the sum of all two-digit multiples of 7.",
            steps: [
              t`The multiples are $14, 21, \ldots, 98$: an AP with $a = 14$, $d = 7$, $l = 98$.`,
              t`Number of terms: $98 = 14 + (n-1)7$ gives $n - 1 = 12$, so $n = 13$.`,
              t`$S_{13} = \frac{13}{2}(14 + 98) = \frac{13}{2} \times 112 = 13 \times 56$.`,
            ],
            answer: "728",
          },
          {
            type: "text",
            md: t`**Properties.** Adding, subtracting, multiplying or dividing every term of an AP by the same non-zero constant gives another AP. Three numbers $a, b, c$ are in AP exactly when $2b = a + c$.

The **arithmetic mean (AM)** of $a$ and $b$ is $A = \frac{a + b}{2}$; then $a, A, b$ is an AP. To insert $n$ numbers $A_1, \ldots, A_n$ between $a$ and $b$ so that all $n + 2$ numbers form an AP, note that $b$ is term number $n + 2$: $b = a + (n+1)d$, so $d = \frac{b - a}{n + 1}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Insert 4 arithmetic means between 3 and 23. The means are",
                options: ["7, 11, 15, 19", "5, 10, 15, 20", "8, 13, 18, 23", "7, 12, 17, 22"],
                answer: 0,
                explain: t`$d = \frac{23 - 3}{4 + 1} = 4$, so the means are 7, 11, 15, 19.`,
              },
            ],
          },
          {
            type: "example",
            title: "From the sum to the nth term",
            problem: t`The sum of the first $n$ terms of a sequence is $S_n = 3n^2 + 2n$. Find $a_n$ and show the sequence is an AP.`,
            steps: [
              t`For $n \ge 2$: $a_n = S_n - S_{n-1} = 3n^2 + 2n - [3(n-1)^2 + 2(n-1)]$.`,
              t`$= 3[n^2 - (n-1)^2] + 2 = 3(2n - 1) + 2 = 6n - 1$.`,
              t`Check $n = 1$ separately: $a_1 = S_1 = 5 = 6(1) - 1$. ✓`,
              t`$a_n - a_{n-1} = 6$ for every $n \ge 2$, a constant.`,
            ],
            answer: t`$a_n = 6n - 1$; the sequence 5, 11, 17, … is an AP with $d = 6$.`,
          },
          {
            type: "mistake",
            wrong: t`If $S_n = 3n^2 + 2n$, then the nth term is also $3n^2 + 2n$.`,
            right: t`$S_n$ is the total of $n$ terms, not the $n$th term. Use $a_n = S_n - S_{n-1}$ for $n \ge 2$ and $a_1 = S_1$.`,
            why: t`Both are written with a subscript $n$, so they look alike. Mixing them up gives a wrong common difference straight away.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps of the AP sum derivation.",
              items: [
                "Write S(n) from the first term to the last",
                "Write S(n) again from the last term to the first",
                "Add the two lines pair by pair",
                "Each of the n pairs equals 2a + (n − 1)d",
                "Divide by 2: S(n) = n/2 [2a + (n − 1)d]",
              ],
              explain: "Reversing the sum makes every pair equal. This idea (a famous trick for 1 + 2 + … + 100) is the whole derivation.",
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "In the rationalised NCERT Class 11 chapter (CBSE, Karnataka I PUC) arithmetic progressions are treated as revision of Class 10, and the full AP section has been trimmed; the AM appears with the AM–GM inequality. ISC Class 11 teaches AP in full. KCET, COMEDK and JEE assume all of it, so learn this lesson whichever board you write.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tips",
            md: t`State the formula before substituting; marks are given for it. In "how many terms" questions, $n$ must be a positive integer: reject a negative or fractional root and say why. For three numbers in AP with a given sum, take them as $a - d$, $a$, $a + d$.`,
          },
          {
            type: "keypoints",
            items: [
              "A sequence is a function on the natural numbers; a series is the sum of its terms.",
              t`AP: $a_n = a + (n-1)d$, $S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a + l)$.`,
              t`$a, b, c$ in AP $\iff 2b = a + c$; the AM of $a$ and $b$ is $\frac{a+b}{2}$.`,
              t`$n$ means between $a$ and $b$: $d = \frac{b-a}{n+1}$.`,
              t`$a_n = S_n - S_{n-1}$ for $n \ge 2$, with $a_1 = S_1$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Sequence", back: "An ordered list of numbers; formally a function with domain N (infinite) or {1, 2, …, n} (finite)." },
          { front: "Series", back: t`The sum $a_1 + a_2 + a_3 + \cdots$ of the terms of a sequence.` },
          { front: "nth term of an AP", back: t`$a_n = a + (n-1)d$` },
          { front: "Sum of n terms of an AP", back: t`$S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a + l)$` },
          { front: "Arithmetic mean of a and b", back: t`$\frac{a + b}{2}$` },
          { front: t`Common difference when inserting $n$ AMs between $a$ and $b$`, back: t`$d = \frac{b - a}{n + 1}$` },
          { front: t`nth term from $S_n$`, back: t`$a_n = S_n - S_{n-1}$ ($n \ge 2$), $a_1 = S_1$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the 20th term of the AP 7, 11, 15, …",
            answer: 83,
            explain: t`$a_{20} = 7 + 19 \times 4 = 83$.`,
          },
          {
            kind: "numeric",
            q: "Find the sum of the first 25 odd natural numbers.",
            answer: 625,
            explain: t`$S_{25} = \frac{25}{2}[2 + 24 \times 2] = \frac{25}{2} \times 50 = 625$; in general the first $n$ odd numbers add to $n^2$.`,
          },
          {
            kind: "mcq",
            q: t`If $S_n = 2n^2 + 3n$, the common difference of the AP is`,
            options: ["4", "2", "5", "3"],
            answer: 0,
            explain: t`$a_n = S_n - S_{n-1} = 4n + 1$, so $d = 4$. (Quick rule: $S_n = An^2 + Bn$ gives $d = 2A$.)`,
          },
          {
            kind: "numeric",
            q: "How many terms are there in the AP 5, 9, 13, …, 201?",
            answer: 50,
            explain: t`$201 = 5 + (n-1)4$ gives $n - 1 = 49$, so $n = 50$.`,
          },
          {
            kind: "truefalse",
            q: "Every sequence can be described by an explicit formula for its nth term.",
            answer: false,
            explain: "The prime numbers 2, 3, 5, 7, 11, … form a sequence, but no simple formula gives the nth prime.",
          },
          {
            kind: "fill",
            q: t`If $a, b, c$ are in AP, then $2b = $ ___.`,
            answer: ["a + c", "a+c", "c + a", "c+a"],
            explain: t`$b - a = c - b$, so $2b = a + c$.`,
          },
          {
            kind: "numeric",
            q: "The 7th term of an AP is 12 and its 12th term is 7. Find its 19th term.",
            answer: 0,
            difficulty: 2,
            hint: "Subtract the two equations to get d.",
            explain: t`$a + 6d = 12$, $a + 11d = 7$, so $d = -1$ and $a = 18$. $a_{19} = 18 - 18 = 0$.`,
          },
          {
            kind: "mcq",
            q: "Meera saves ₹50 in week 1 and ₹10 more each week. What has she saved after 52 weeks?",
            options: ["₹15,860", "₹13,260", "₹2,600", "₹16,120"],
            answer: 0,
            explain: t`$S_{52} = \frac{52}{2}[2(50) + 51(10)] = 26 \times 610 = 15\,860$, so ₹15,860.`,
          },
        ],
      },
      {
        slug: "c11-geometric-progressions",
        title: "Geometric Progressions and the AM–GM Inequality",
        summary: "The nth term and sum of a GP, the sum to infinity, geometric means, and the proof that AM ≥ GM for two positive numbers.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "🦠",
            caption: "A bacterial culture doubles every hour: 1000, 2000, 4000, 8000, … Each term is the previous one multiplied by the same number. That is a geometric progression.",
          },
          {
            type: "text",
            md: t`A sequence of non-zero numbers is a **geometric progression (GP)** if the ratio of each term to the one before it is a constant $r$, the **common ratio**: $\frac{a_{k+1}}{a_k} = r$. With first term $a$, the GP is $a, ar, ar^2, ar^3, \ldots$ and its nth term is $a_n = ar^{n-1}$.

**Sum of n terms.** Let $S_n = a + ar + \cdots + ar^{n-1}$. Multiply by $r$: $rS_n = ar + ar^2 + \cdots + ar^n$. Subtracting, every middle term cancels: $S_n - rS_n = a - ar^n$, so $S_n(1 - r) = a(1 - r^n)$.`,
          },
          {
            type: "formula",
            tex: t`a_n = ar^{n-1} \qquad S_n = \frac{a(r^n - 1)}{r - 1} = \frac{a(1 - r^n)}{1 - r} \;\; (r \ne 1), \qquad S_n = na \;\; (r = 1)`,
            caption: "Use the (r^n − 1)/(r − 1) form when r > 1 to avoid negative signs.",
          },
          {
            type: "example",
            title: "Term and sum",
            problem: "For the GP 3, 6, 12, …, find the 10th term and the sum of the first 10 terms.",
            steps: [
              t`$a = 3$, $r = 2$. $a_{10} = 3 \cdot 2^9 = 3 \times 512 = 1536$.`,
              t`$S_{10} = \frac{3(2^{10} - 1)}{2 - 1} = 3 \times 1023 = 3069$.`,
            ],
            answer: t`$a_{10} = 1536$, $S_{10} = 3069$`,
          },
          {
            type: "example",
            title: "How many terms?",
            problem: "How many terms of the GP 2 + 6 + 18 + … add up to 728?",
            steps: [
              t`$a = 2$, $r = 3$: $S_n = \frac{2(3^n - 1)}{3 - 1} = 3^n - 1$.`,
              t`$3^n - 1 = 728$ gives $3^n = 729 = 3^6$.`,
            ],
            answer: t`$n = 6$ (check: $2 + 6 + 18 + 54 + 162 + 486 = 728$).`,
          },
          {
            type: "text",
            md: t`**Sum to infinity.** If $|r| < 1$, then $r^n \to 0$ as $n$ grows, so $S_n = \frac{a(1 - r^n)}{1 - r}$ gets as close as we like to $\frac{a}{1 - r}$. This value is the **sum to infinity** $S_\infty$. If $|r| \ge 1$ the terms do not shrink and the infinite GP has no finite sum.

(NCERT places infinite series in an appendix rather than the main chapter; ISC, KCET, COMEDK and JEE use $S_\infty$ freely.)`,
          },
          {
            type: "formula",
            tex: t`S_\infty = \frac{a}{1 - r}, \qquad |r| < 1`,
          },
          {
            type: "example",
            title: "A recurring decimal as a fraction",
            problem: t`Write $0.\overline{45} = 0.454545\ldots$ as a fraction.`,
            steps: [
              t`$0.4545\ldots = \frac{45}{100} + \frac{45}{100^2} + \frac{45}{100^3} + \cdots$, a GP with $a = \frac{45}{100}$, $r = \frac{1}{100}$.`,
              t`$S_\infty = \frac{45/100}{1 - 1/100} = \frac{45/100}{99/100} = \frac{45}{99}$.`,
            ],
            answer: t`$\frac{5}{11}$`,
          },
          {
            type: "text",
            md: t`**Geometric mean (GM).** For positive $a$ and $b$, $G = \sqrt{ab}$ makes $a, G, b$ a GP. To insert $n$ GMs between $a$ and $b$, note that $b$ is term $n + 2$: $b = ar^{n+1}$, so $r = \left(\frac{b}{a}\right)^{\frac{1}{n+1}}$. Three numbers $a, b, c$ are in GP exactly when $b^2 = ac$.

**Example.** Inserting 3 GMs between 2 and 162: $r^4 = 81$, so $r = 3$ and the means are 6, 18, 54.`,
          },
          {
            type: "formula",
            tex: t`A - G = \frac{a + b}{2} - \sqrt{ab} = \frac{(\sqrt{a} - \sqrt{b})^2}{2} \ge 0 \quad\Longrightarrow\quad \frac{a+b}{2} \ge \sqrt{ab}`,
            caption: "AM ≥ GM for positive a, b, with equality only when a = b.",
          },
          {
            type: "example",
            title: "Numbers from their AM and GM",
            problem: "The AM and GM of two positive numbers are 10 and 8. Find the numbers.",
            steps: [
              t`$\frac{a + b}{2} = 10$ gives $a + b = 20$; $\sqrt{ab} = 8$ gives $ab = 64$.`,
              t`$a$ and $b$ are the roots of $x^2 - 20x + 64 = 0$, i.e. $(x - 16)(x - 4) = 0$.`,
              t`Check: AM $= 10$ ✓, GM $= \sqrt{64} = 8$ ✓, and $10 \ge 8$ as AM–GM says.`,
            ],
            answer: "16 and 4",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Find the geometric mean of 4 and 25.",
                answer: 10,
                explain: t`$G = \sqrt{4 \times 25} = \sqrt{100} = 10$.`,
              },
              {
                kind: "mcq",
                q: t`The sum to infinity of $6 - 3 + \frac{3}{2} - \frac{3}{4} + \cdots$ is`,
                options: ["4", "12", "2", "It does not exist"],
                answer: 0,
                explain: t`$a = 6$, $r = -\frac{1}{2}$: $S_\infty = \frac{6}{1 + \frac{1}{2}} = 4$. 12 comes from forgetting the minus sign in $r$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`The nth term of a GP is $ar^n$, so the 10th term of 3, 6, 12, … is $3 \cdot 2^{10} = 3072$.`,
            right: t`The first term already is $ar^0$, so $a_n = ar^{n-1}$: $a_{10} = 3 \cdot 2^9 = 1536$.`,
            why: "Counting the multiplications instead of the terms: to reach the 10th term you multiply by r only 9 times. The same off-by-one error hits the AP formula.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each sequence an AP, a GP or neither?",
              groups: ["AP", "GP", "Neither"],
              items: [
                { text: "2, 6, 18, 54", group: 1, hint: "Each term is 3 times the one before." },
                { text: "5, 8, 11, 14", group: 0, hint: "The difference is always 3." },
                { text: "1, 4, 9, 16", group: 2, hint: "Differences 3, 5, 7 and ratios 4, 2.25, 1.78 both change." },
                { text: "3, −3, 3, −3", group: 1, hint: "The common ratio is −1." },
                { text: "1/2, 1/4, 1/8, 1/16", group: 1, hint: "The ratio is 1/2." },
                { text: "10, 6, 2, −2", group: 0, hint: "The difference is −4; a negative d is fine." },
                { text: "1, 1/2, 1/3, 1/4", group: 2, hint: "The reciprocals form an AP (this is a harmonic progression), but the terms do not." },
              ],
              explain: "Test the differences for an AP and the ratios for a GP. Squares and reciprocals of an AP are usually neither.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board-exam tips",
            md: t`The derivation of $S_n$ (multiply by $r$ and subtract) and the proof of AM ≥ GM are standard 3–4 mark questions. For three numbers in GP take $\frac{a}{r}, a, ar$, so their product is $a^3$. Before using $S_\infty$, write "$|r| < 1$" to show the sum exists.`,
          },
          {
            type: "keypoints",
            items: [
              t`GP: $a_n = ar^{n-1}$, $S_n = \frac{a(r^n - 1)}{r - 1}$ ($r \ne 1$), $S_n = na$ ($r = 1$).`,
              t`If $|r| < 1$, $S_\infty = \frac{a}{1 - r}$; otherwise no finite sum.`,
              t`GM of positive $a$, $b$: $\sqrt{ab}$; $n$ GMs need $r = (b/a)^{1/(n+1)}$; $a, b, c$ in GP $\iff b^2 = ac$.`,
              t`AM ≥ GM for positive numbers, because $A - G = \frac{(\sqrt a - \sqrt b)^2}{2}$; equality iff $a = b$.`,
            ],
          },
        ],
        flashcards: [
          { front: "nth term of a GP", back: t`$ar^{n-1}$` },
          { front: "Sum of n terms of a GP", back: t`$\frac{a(r^n - 1)}{r - 1}$, $r \ne 1$; $na$ if $r = 1$.` },
          { front: "Sum to infinity of a GP", back: t`$\frac{a}{1 - r}$, only when $|r| < 1$.` },
          { front: "Geometric mean of a and b (positive)", back: t`$\sqrt{ab}$` },
          { front: t`Condition for $a, b, c$ in GP`, back: t`$b^2 = ac$` },
          { front: "AM–GM inequality", back: t`$\frac{a+b}{2} \ge \sqrt{ab}$ for $a, b > 0$; equality iff $a = b$.` },
          { front: "Three numbers in GP: how to choose them", back: t`$\frac{a}{r}, a, ar$ (product $a^3$).` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "Find the 8th term of the GP 5, 10, 20, …",
            answer: 640,
            explain: t`$5 \cdot 2^7 = 5 \times 128 = 640$.`,
          },
          {
            kind: "numeric",
            q: "Find the sum of the first 6 terms of 1 + 3 + 9 + …",
            answer: 364,
            explain: t`$\frac{3^6 - 1}{3 - 1} = \frac{728}{2} = 364$.`,
          },
          {
            kind: "truefalse",
            q: t`If $a, b, c$ are in GP then $b^2 = ac$.`,
            answer: true,
            explain: t`$\frac{b}{a} = \frac{c}{b}$ gives $b^2 = ac$.`,
          },
          {
            kind: "mcq",
            q: t`For $x > 0$, the least value of $x + \frac{9}{x}$ is`,
            options: ["6", "9", "3", "10"],
            answer: 0,
            explain: t`AM ≥ GM: $\frac{x + 9/x}{2} \ge \sqrt{9} = 3$, so $x + \frac{9}{x} \ge 6$, with equality at $x = 3$.`,
          },
          {
            kind: "numeric",
            q: "The 4th term of a GP is 24 and the 7th term is 192. Find the first term.",
            answer: 3,
            explain: t`$\frac{ar^6}{ar^3} = r^3 = 8$, so $r = 2$ and $a = \frac{24}{8} = 3$.`,
          },
          {
            kind: "multi",
            q: "Which infinite series have a finite sum?",
            options: [
              t`$1 + \frac{1}{3} + \frac{1}{9} + \cdots$`,
              t`$4 - 2 + 1 - \cdots$`,
              t`$1 + 1 + 1 + \cdots$`,
              t`$2 - 3 + 4.5 - \cdots$`,
            ],
            answers: [0, 1],
            explain: t`The ratios are $\frac{1}{3}$, $-\frac{1}{2}$, $1$ and $-\frac{3}{2}$. Only $|r| < 1$ gives a sum to infinity: $\frac{3}{2}$ and $\frac{8}{3}$.`,
          },
          {
            kind: "mcq",
            q: "Three geometric means are inserted between 1 and 256. The middle one is",
            options: ["16", "64", "4", "128"],
            answer: 0,
            difficulty: 2,
            hint: "The middle mean is the GM of 1 and 256.",
            explain: t`$r^4 = 256$ gives $r = 4$: means 4, 16, 64. The middle one is $\sqrt{1 \times 256} = 16$.`,
          },
          {
            kind: "numeric",
            q: t`Write $0.\overline{36}$ as a fraction $\frac{p}{q}$ in lowest terms and give $p + q$.`,
            answer: 15,
            difficulty: 2,
            explain: t`$\frac{36/100}{1 - 1/100} = \frac{36}{99} = \frac{4}{11}$, so $p + q = 15$.`,
          },
        ],
      },
      {
        slug: "c11-special-series",
        title: "Sum to n Terms of Special Series",
        summary: "Sigma rules, the sums of the first n natural numbers, their squares and their cubes, with the derivation boards ask for, and how to sum any series whose nth term is a polynomial in n.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🍊",
            caption: "A fruit seller stacks oranges in a square pyramid: 1 on top, then 4, 9, 16, … How many oranges are in a stack 10 layers high? You need 1² + 2² + … + 10².",
          },
          {
            type: "text",
            md: t`Sigma notation follows three simple rules, all because a finite sum can be regrouped:

$\sum_{k=1}^{n}(a_k \pm b_k) = \sum_{k=1}^{n}a_k \pm \sum_{k=1}^{n}b_k$, $\quad\sum_{k=1}^{n}c\,a_k = c\sum_{k=1}^{n}a_k$, $\quad\sum_{k=1}^{n}c = nc$.

So once we know $\sum k$, $\sum k^2$ and $\sum k^3$, we can add up any series whose $k$th term is a polynomial of degree at most 3 in $k$. The first one is an AP sum.`,
          },
          {
            type: "formula",
            tex: t`\sum_{k=1}^{n} k = 1 + 2 + \cdots + n = \frac{n(n+1)}{2}`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Start from the identity $(k+1)^3 - k^3 = 3k^2 + 3k + 1$.`,
              t`Write it for $k = 1, 2, \ldots, n$: $2^3 - 1^3$, $3^3 - 2^3$, …, $(n+1)^3 - n^3$.`,
              t`Add all $n$ lines. On the left everything cancels except $(n+1)^3 - 1$.`,
              t`On the right: $3\sum k^2 + 3\cdot\frac{n(n+1)}{2} + n$.`,
              t`So $3\sum k^2 = (n+1)^3 - 1 - \frac{3n(n+1)}{2} - n = \frac{n(n+1)(2n+1)}{2}$, which gives the formula below.`,
            ],
          },
          {
            type: "formula",
            tex: t`\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}`,
            caption: "Derived above. The same method with (k + 1)^4 − k^4 gives the sum of cubes.",
          },
          {
            type: "formula",
            tex: t`\sum_{k=1}^{n} k^3 = \left[\frac{n(n+1)}{2}\right]^2 = \left(\sum_{k=1}^{n} k\right)^2`,
            caption: "The sum of the first n cubes is the square of the sum of the first n natural numbers.",
          },
          {
            type: "example",
            title: "The orange pyramid",
            problem: t`Find $1^2 + 2^2 + \cdots + 10^2$, and then $11^2 + 12^2 + \cdots + 20^2$.`,
            steps: [
              t`$\sum_{k=1}^{10}k^2 = \frac{10 \cdot 11 \cdot 21}{6} = 385$ oranges.`,
              t`$\sum_{k=1}^{20}k^2 = \frac{20 \cdot 21 \cdot 41}{6} = 2870$.`,
              t`A block that does not start at 1: subtract. $\sum_{11}^{20}k^2 = 2870 - 385$.`,
            ],
            answer: "385 oranges; and 2485.",
          },
          {
            type: "example",
            title: "A product series",
            problem: t`Find the sum to $n$ terms of $1\cdot2 + 2\cdot3 + 3\cdot4 + \cdots$.`,
            steps: [
              t`The $k$th term is $a_k = k(k+1) = k^2 + k$.`,
              t`$S_n = \sum k^2 + \sum k = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}$.`,
              t`Take out $\frac{n(n+1)}{6}$: $S_n = \frac{n(n+1)}{6}[(2n+1) + 3] = \frac{n(n+1)(2n+4)}{6}$.`,
              t`Check $n = 2$: $2 + 6 = 8$ and $\frac{2\cdot3\cdot4}{3} = 8$. ✓`,
            ],
            answer: t`$S_n = \frac{n(n+1)(n+2)}{3}$`,
          },
          {
            type: "example",
            title: "Squares of odd numbers",
            problem: t`Find $1^2 + 3^2 + 5^2 + \cdots$ to $n$ terms.`,
            steps: [
              t`$a_k = (2k - 1)^2 = 4k^2 - 4k + 1$.`,
              t`$S_n = 4\cdot\frac{n(n+1)(2n+1)}{6} - 4\cdot\frac{n(n+1)}{2} + n$.`,
              t`$= \frac{n}{3}\left[2(n+1)(2n+1) - 6(n+1) + 3\right] = \frac{n}{3}(4n^2 + 6n + 2 - 6n - 6 + 3) = \frac{n(4n^2 - 1)}{3}$.`,
              t`Check $n = 3$: $1 + 9 + 25 = 35$ and $\frac{3 \cdot 35}{3} = 35$. ✓`,
            ],
            answer: t`$S_n = \frac{n(2n-1)(2n+1)}{3}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $1^3 + 2^3 + \cdots + 10^3$.`,
                answer: 3025,
                explain: t`$\left(\frac{10 \cdot 11}{2}\right)^2 = 55^2 = 3025$.`,
              },
              {
                kind: "numeric",
                q: t`Find $\sum_{k=1}^{20} k$.`,
                answer: 210,
                explain: t`$\frac{20 \cdot 21}{2} = 210$.`,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$\sum k^2 = \left(\sum k\right)^2$, so $1^2 + 2^2 + 3^2 = 6^2 = 36$.`,
            right: t`$1^2 + 2^2 + 3^2 = 14 = \frac{3 \cdot 4 \cdot 7}{6}$. It is the sum of **cubes** that equals $(\sum k)^2$: $1 + 8 + 27 = 36$.`,
            why: t`The cube formula is so neat that students carry it over to squares. Squaring a sum also adds cross terms like $2 \cdot 1 \cdot 2$, so it cannot equal the sum of squares.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each sum (k = 1 to n) with its formula.",
              pairs: [
                [t`$\sum k$`, t`$\frac{n(n+1)}{2}$`],
                [t`$\sum k^2$`, t`$\frac{n(n+1)(2n+1)}{6}$`],
                [t`$\sum k^3$`, t`$\left[\frac{n(n+1)}{2}\right]^2$`],
                [t`$\sum 1$`, t`$n$`],
                [t`$\sum (2k - 1)$`, t`$n^2$`],
              ],
              explain: t`$\sum(2k-1) = 2\cdot\frac{n(n+1)}{2} - n = n^2$: the first $n$ odd numbers add up to a perfect square.`,
            },
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`The section on sums of special series ($\sum n$, $\sum n^2$, $\sum n^3$) has been dropped from the rationalised NCERT chapter used by **CBSE** and **Karnataka I PUC**; check your current syllabus. **ISC** Class 11 lists these sums explicitly, and **JEE Main, KCET and COMEDK** use them all the time (and in Class 12 integration as limits of sums).`,
          },
          {
            type: "callout",
            tone: "exam",
            title: "Exam tips",
            md: t`Find the $k$th term first and write it as a polynomial in $k$; then split the sum with the sigma rules. Factor out common pieces like $\frac{n(n+1)}{6}$ early. Always check your final formula with $n = 1$ and $n = 2$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\sum k = \frac{n(n+1)}{2}$, $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$, $\sum k^3 = \left[\frac{n(n+1)}{2}\right]^2$.`,
              t`$\sum k^2$ comes from adding $(k+1)^3 - k^3 = 3k^2 + 3k + 1$ for $k = 1$ to $n$.`,
              t`For a series, find $a_k$ as a polynomial in $k$, then use $\sum(a_k \pm b_k)$ and $\sum c\,a_k$.`,
              t`For a block from $m$ to $n$, compute $S_n - S_{m-1}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\sum_{k=1}^{n} k$`, back: t`$\frac{n(n+1)}{2}$` },
          { front: t`$\sum_{k=1}^{n} k^2$`, back: t`$\frac{n(n+1)(2n+1)}{6}$` },
          { front: t`$\sum_{k=1}^{n} k^3$`, back: t`$\left[\frac{n(n+1)}{2}\right]^2$` },
          { front: t`Identity used to derive $\sum k^2$`, back: t`$(k+1)^3 - k^3 = 3k^2 + 3k + 1$, summed for $k = 1$ to $n$.` },
          { front: t`$\sum_{k=1}^{n} k(k+1)$`, back: t`$\frac{n(n+1)(n+2)}{3}$` },
          { front: t`Sum from $k = m$ to $n$`, back: t`$S_n - S_{m-1}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $1^2 + 2^2 + \cdots + 12^2$.`,
            answer: 650,
            explain: t`$\frac{12 \cdot 13 \cdot 25}{6} = 650$.`,
          },
          {
            kind: "numeric",
            q: t`Find $1^3 + 2^3 + \cdots + 15^3$.`,
            answer: 14400,
            explain: t`$\left(\frac{15 \cdot 16}{2}\right)^2 = 120^2 = 14\,400$.`,
          },
          {
            kind: "numeric",
            q: "Find 2 + 4 + 6 + … + 100.",
            answer: 2550,
            explain: t`$2(1 + 2 + \cdots + 50) = 2 \cdot \frac{50 \cdot 51}{2} = 2550$.`,
          },
          {
            kind: "truefalse",
            q: t`$1^3 + 2^3 + \cdots + n^3 = (1 + 2 + \cdots + n)^2$ for every natural number $n$.`,
            answer: true,
            explain: t`Both equal $\left[\frac{n(n+1)}{2}\right]^2$.`,
          },
          {
            kind: "mcq",
            q: t`$1^2 + 3^2 + 5^2 + \cdots$ to $n$ terms equals`,
            options: [t`$\frac{n(2n-1)(2n+1)}{3}$`, t`$\frac{n(n+1)(2n+1)}{6}$`, t`$n^2$`, t`$\frac{n(2n+1)(4n+1)}{6}$`],
            answer: 0,
            explain: t`$\sum(2k-1)^2 = \sum(4k^2 - 4k + 1) = \frac{n(4n^2 - 1)}{3}$. Check $n = 2$: $1 + 9 = 10 = \frac{2 \cdot 3 \cdot 5}{3}$.`,
          },
          {
            kind: "numeric",
            q: "Find the sum of the first 10 terms of the series whose nth term is n(n + 1).",
            answer: 440,
            difficulty: 2,
            explain: t`$\frac{n(n+1)(n+2)}{3}$ at $n = 10$: $\frac{10 \cdot 11 \cdot 12}{3} = 440$.`,
          },
          {
            kind: "numeric",
            q: t`Find $11^2 + 12^2 + \cdots + 20^2$.`,
            answer: 2485,
            difficulty: 2,
            hint: "Subtract the sum up to 10 from the sum up to 20.",
            explain: t`$2870 - 385 = 2485$.`,
          },
          {
            kind: "mcq",
            q: t`$\sum_{k=1}^{n}(k^2 + 1)$ equals`,
            options: [t`$\frac{n(n+1)(2n+1)}{6} + n$`, t`$\frac{n(n+1)(2n+1)}{6} + 1$`, t`$\frac{n(n+1)(2n+1)}{6}$`, t`$\frac{n(n+1)}{2} + n$`],
            answer: 0,
            explain: t`$\sum 1 = n$, not 1: the constant is added once for each of the $n$ terms.`,
          },
        ],
      },
