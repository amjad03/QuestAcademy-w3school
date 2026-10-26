import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 12 Maths — Relations and Functions, Inverse Trigonometric Functions, Matrices, Determinants.
 * Original exam-style questions (JEE Main / Advanced, KCET, COMEDK).
 * `answer` is the 0-based option index (mcq) or the value (numeric); `answers` lists every correct index (multi).
 */

const t = String.raw;

type D = 1 | 2 | 3;
type Body = { q: string; explain: string; hint?: string } & (
  | { kind: "mcq"; options: string[]; answer: number }
  | { kind: "multi"; options: string[]; answers: number[] }
  | { kind: "numeric"; answer: number; tolerance?: number }
);

const CH: Record<number, string> = {
  1: "Relations and Functions",
  2: "Inverse Trigonometric Functions",
  3: "Matrices",
  4: "Determinants",
};

/** Builds the questions of one chapter, numbering ids mat12-1-<ch>-<n>. */
function chapter(ch: number) {
  let n = 0;
  return (difficulty: D, exams: ExamId[], idealTime: number, body: Body): ExamQuestion =>
    ({
      id: `mat12-1-${String(ch).padStart(2, "0")}-${String(++n).padStart(3, "0")}`,
      subject: "maths",
      chapter: CH[ch],
      grade: "12",
      exams,
      difficulty,
      idealTime,
      ...body,
    }) as ExamQuestion;
}

const BASIC: ExamId[] = ["JEE", "KCET", "COMEDK"];
const MAIN: ExamId[] = ["JEE", "KCET", "COMEDK"];
const MAIN_ONLY: ExamId[] = ["JEE", "COMEDK"];
const ADV: ExamId[] = ["JEE_ADV", "JEE"];
const ADV_ONLY: ExamId[] = ["JEE_ADV"];

const AR = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];
const S12 = [
  "Both Statement I and Statement II are true",
  "Statement I is true but Statement II is false",
  "Statement I is false but Statement II is true",
  "Both Statement I and Statement II are false",
];

/* ================================================================== */
/* Chapter 1 — Relations and Functions                                 */
/* ================================================================== */
const q1 = chapter(1);
const ch1: ExamQuestion[] = [
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`A set $A$ has 3 elements. The number of relations on $A$ is:`,
    options: [t`$9$`, t`$512$`, t`$64$`, t`$8$`],
    answer: 1,
    explain: t`A relation on $A$ is any subset of $A\times A$, which has $3^2 = 9$ elements. So there are $2^9 = 512$ relations. $64 = 2^6$ counts only the reflexive relations; $9$ is the size of $A\times A$, not the number of its subsets.`,
  }),
  q1(1, BASIC, 60, {
    kind: "mcq",
    q: t`On $A=\{1,2,3\}$ the relation $R=\{(1,1),(2,2),(3,3),(1,2)\}$ is:`,
    options: [
      "an equivalence relation",
      "reflexive and transitive but not symmetric",
      "reflexive and symmetric but not transitive",
      "symmetric and transitive but not reflexive",
    ],
    answer: 1,
    explain: t`All of $(1,1),(2,2),(3,3)$ are present, so $R$ is reflexive. $(1,2)\in R$ but $(2,1)\notin R$, so it is not symmetric. For transitivity the only chains are $(1,1),(1,2)\Rightarrow(1,2)$ and $(1,2),(2,2)\Rightarrow(1,2)$, both in $R$, so $R$ is transitive. Hence reflexive and transitive but not symmetric.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`On $\mathbb Z$, define $aRb$ if and only if $a-b$ is divisible by 5. The number of distinct equivalence classes of $R$ is:`,
    options: [t`$4$`, "infinitely many", t`$5$`, t`$10$`],
    answer: 2,
    explain: t`$R$ is congruence modulo 5, an equivalence relation. Two integers are related exactly when they leave the same remainder on division by 5, so the classes are $[0],[1],[2],[3],[4]$: five classes. Each class is infinite, but the number of classes is finite.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`The function $f:\mathbb R\to\mathbb R$, $f(x)=3x+2$ is:`,
    options: ["one-one but not onto", "onto but not one-one", "bijective", "neither one-one nor onto"],
    answer: 2,
    explain: t`One-one: $3x_1+2=3x_2+2\Rightarrow x_1=x_2$. Onto: for any $y\in\mathbb R$, $x=\frac{y-2}{3}\in\mathbb R$ gives $f(x)=y$. Hence $f$ is a bijection.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`The function $f:\mathbb R\to\mathbb R$, $f(x)=x^2$ is:`,
    options: ["one-one but not onto", "onto but not one-one", "bijective", "neither one-one nor onto"],
    answer: 3,
    explain: t`$f(-1)=f(1)=1$, so $f$ is not one-one. Its range is $[0,\infty)$; a negative number such as $-4$ has no pre-image in $\mathbb R$, so $f$ is not onto. (Restricting the domain and codomain to $[0,\infty)$ would make it bijective.)`,
  }),
  q1(1, BASIC, 50, {
    kind: "mcq",
    q: t`The number of reflexive relations on a set with 3 elements is:`,
    options: [t`$512$`, t`$8$`, t`$27$`, t`$64$`],
    answer: 3,
    explain: t`A reflexive relation must contain the 3 diagonal pairs $(a,a)$. Each of the other $n^2-n = 6$ ordered pairs may be in or out, giving $2^{6}=64$. $512 = 2^9$ counts all relations.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $|A| = 3$ and $|B| = 5$, the number of one-one functions from $A$ to $B$ is:`,
    options: [t`$125$`, t`$243$`, t`$60$`, t`$10$`],
    answer: 2,
    explain: t`The first element of $A$ has 5 possible images, the second 4, the third 3: ${}^5P_3 = 5\cdot4\cdot3 = 60$. $125 = 5^3$ counts all functions; $10={}^5C_3$ ignores the order in which images are assigned.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`The number of onto functions from $\{1,2,3\}$ to $\{a,b\}$ is:`,
    options: [t`$6$`, t`$8$`, t`$9$`, t`$2$`],
    answer: 0,
    explain: t`There are $2^3 = 8$ functions in all. Only the two constant functions (everything to $a$, or everything to $b$) miss an element of the codomain. So $8-2 = 6$ are onto.`,
  }),
  q1(1, BASIC, 60, {
    kind: "mcq",
    q: t`$f:\mathbb R-\{-2\}\to\mathbb R-\{1\}$ is given by $f(x)=\dfrac{x-1}{x+2}$. Then $f^{-1}(x)$ is:`,
    options: [t`$\dfrac{2x+1}{x-1}$`, t`$\dfrac{x+2}{x-1}$`, t`$\dfrac{1+2x}{1-x}$`, t`$\dfrac{1-2x}{1+x}$`],
    answer: 2,
    explain: t`Put $y=\frac{x-1}{x+2}$: $xy+2y = x-1\Rightarrow x(1-y) = 1+2y\Rightarrow x=\frac{1+2y}{1-y}$. So $f^{-1}(x)=\frac{1+2x}{1-x}$, defined on $\mathbb R-\{1\}$. Check: $f(0)=-\tfrac12$ and $f^{-1}(-\tfrac12)=0$. The first option has the sign of the denominator flipped.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $f(x)=x^2$ and $g(x)=2x+1$, then $(f\circ g)(x)-(g\circ f)(x)$ equals:`,
    options: [t`$0$`, t`$2x^2-4x$`, t`$2x^2+4x+2$`, t`$2x^2+4x$`],
    answer: 3,
    explain: t`$(f\circ g)(x) = f(2x+1) = 4x^2+4x+1$ and $(g\circ f)(x) = g(x^2) = 2x^2+1$. The difference is $2x^2+4x$. Composition is not commutative, so the answer is not $0$.`,
  }),
  q1(1, BASIC, 40, {
    kind: "mcq",
    q: t`For a non-empty set $A$, the identity relation $I_A=\{(a,a):a\in A\}$ is:`,
    options: [
      "an equivalence relation",
      "reflexive but not symmetric",
      "symmetric but not transitive",
      "transitive but not reflexive",
    ],
    answer: 0,
    explain: t`$I_A$ contains every $(a,a)$ (reflexive); $(a,a)$ reversed is itself (symmetric); $(a,a),(a,a)\Rightarrow(a,a)$ (transitive). It is the smallest equivalence relation on $A$, with every class a singleton.`,
  }),
  q1(1, BASIC, 45, {
    kind: "mcq",
    q: t`On the set of all lines in a plane, the relation "$L_1$ is perpendicular to $L_2$" is:`,
    options: ["reflexive and symmetric", "symmetric only", "an equivalence relation", "transitive only"],
    answer: 1,
    explain: t`No line is perpendicular to itself (not reflexive). $L_1\perp L_2\Rightarrow L_2\perp L_1$ (symmetric). $L_1\perp L_2$ and $L_2\perp L_3$ make $L_1\parallel L_3$, not perpendicular (not transitive). So it is symmetric only.`,
  }),
  q1(2, MAIN, 70, {
    kind: "mcq",
    q: t`The number of symmetric relations on a set with 3 elements is:`,
    options: [t`$2^3$`, t`$2^6$`, t`$2^9$`, t`$2^5$`],
    answer: 1,
    hint: t`Treat diagonal pairs and unordered pairs $\{a,b\}$, $a\ne b$, separately.`,
    explain: t`The 3 diagonal pairs can be chosen freely ($2^3$ ways). The 6 off-diagonal ordered pairs form 3 unordered pairs $\{(a,b),(b,a)\}$, and symmetry forces each to be taken both-or-neither ($2^3$ ways). Total $2^3\cdot2^3=2^6=64$. In general the count is $2^{n(n+1)/2}$.`,
  }),
  q1(2, MAIN, 90, {
    kind: "numeric",
    q: t`Find the number of equivalence relations on the set $\{1,2,3,4\}$.`,
    answer: 15,
    hint: "Equivalence relations correspond one-to-one with partitions of the set.",
    explain: t`Count partitions of a 4-element set by block sizes: $\{4\}$: 1; $\{3,1\}$: 4; $\{2,2\}$: 3; $\{2,1,1\}$: ${}^4C_2 = 6$; $\{1,1,1,1\}$: 1. Total $1+4+3+6+1 = 15$ (the Bell number $B_4$).`,
  }),
  q1(2, MAIN, 90, {
    kind: "numeric",
    q: t`Find the number of onto functions from a set with 4 elements to a set with 3 elements.`,
    answer: 36,
    hint: "Use inclusion–exclusion on the images that are missed.",
    explain: t`Total functions $3^4 = 81$. Subtract those missing a given element: $3\cdot2^4 = 48$; add back those missing two: $3\cdot1^4 = 3$. Onto functions $= 81-48+3 = 36$. (Check: split 4 elements into 3 non-empty blocks in 6 ways and assign the blocks in $3!$ ways: $6\cdot6 = 36$.)`,
  }),
  q1(2, MAIN, 80, {
    kind: "mcq",
    q: t`On $A=\{1,2,3\}$, $R=\{(1,2),(2,3)\}$. The minimum number of ordered pairs that must be added to $R$ to make it an equivalence relation is:`,
    options: [t`$5$`, t`$6$`, t`$7$`, t`$9$`],
    answer: 2,
    hint: "Any equivalence relation containing 1~2 and 2~3 puts all three elements in one class.",
    explain: t`Reflexivity needs $(1,1),(2,2),(3,3)$; symmetry needs $(2,1),(3,2)$; transitivity then forces $(1,3)$ and $(3,1)$. The result is all of $A\times A$ (9 pairs), so $9-2=7$ pairs are added. Stopping at 5 forgets the transitive pairs.`,
  }),
  q1(2, MAIN, 80, {
    kind: "mcq",
    q: t`The relation $R$ on $\mathbb R$ defined by $aRb \iff |a|\le b$ is:`,
    options: [
      "reflexive and transitive",
      "transitive but neither reflexive nor symmetric",
      "symmetric and transitive",
      "an equivalence relation",
    ],
    answer: 1,
    hint: "Test a negative number for reflexivity.",
    explain: t`Reflexive fails: $|-1| = 1\not\le -1$. Symmetric fails: $|1|\le 2$ but $|2|\not\le 1$. Transitive holds: $|a|\le b$ forces $b\ge0$, so $|b| = b$; then $|b|\le c$ gives $|a|\le b\le c$. So $R$ is transitive only.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`On $\mathbb R$, $aRb$ if and only if $a-b\in\mathbb Z$. The equivalence class $\left[\tfrac12\right]$ is:`,
    options: [t`$\left\{\tfrac12\right\}$`, t`$\left\{\tfrac n2 : n\in\mathbb Z\right\}$`, t`$\left\{n+\tfrac12 : n\in\mathbb Z\right\}$`, t`$\mathbb Z$`],
    answer: 2,
    hint: "Which reals differ from 1/2 by an integer?",
    explain: t`$x\in[\tfrac12]\iff x-\tfrac12\in\mathbb Z\iff x = n+\tfrac12$. The set $\{n/2\}$ wrongly includes integers such as $1$, whose difference from $\tfrac12$ is not an integer.`,
  }),
  q1(2, MAIN, 70, {
    kind: "mcq",
    q: t`$f:\mathbb N\to\mathbb N$ is defined by $f(n)=n+1$ if $n$ is odd and $f(n)=n-1$ if $n$ is even. Then $f$ is:`,
    options: ["bijective", "one-one but not onto", "onto but not one-one", "neither one-one nor onto"],
    answer: 0,
    hint: "Look at what f does to the pairs (1,2), (3,4), …",
    explain: t`$f$ swaps $1\leftrightarrow2$, $3\leftrightarrow4$, and so on. Every natural number is hit exactly once (odd $m$ comes from $m+1$, even $m$ from $m-1$). Also $f\circ f = I$, so $f$ is its own inverse and therefore bijective.`,
  }),
  q1(2, MAIN, 70, {
    kind: "mcq",
    q: t`The function $f:\mathbb R\to\mathbb R$, $f(x)=x|x|$ is:`,
    options: ["one-one but not onto", "bijective", "onto but not one-one", "neither one-one nor onto"],
    answer: 1,
    hint: "Write f piecewise for x ≥ 0 and x < 0.",
    explain: t`$f(x)=x^2$ for $x\ge0$ and $-x^2$ for $x<0$. Both pieces are strictly increasing and they meet at $0$, so $f$ is strictly increasing (one-one). It is continuous with $f\to\pm\infty$ as $x\to\pm\infty$, so its range is $\mathbb R$ (onto). Students who treat it like $x^2$ wrongly say "not one-one".`,
  }),
  q1(2, MAIN, 70, {
    kind: "mcq",
    q: t`The function $f:\mathbb R\to\mathbb R$, $f(x)=x^3-3x$ is:`,
    options: ["bijective", "one-one but not onto", "onto but not one-one", "neither one-one nor onto"],
    answer: 2,
    hint: "Find the zeros of f.",
    explain: t`$f(0)=f(\sqrt3)=f(-\sqrt3)=0$, so $f$ is not one-one. As a continuous cubic it tends to $\pm\infty$ at $\pm\infty$, so every real value is attained: onto. Hence onto but not one-one.`,
  }),
  q1(2, MAIN_ONLY, 90, {
    kind: "mcq",
    q: t`$f:\mathbb R\to(-1,1)$, $f(x)=\dfrac{x}{1+|x|}$ is a bijection. Its inverse is $f^{-1}(x)=$`,
    options: [t`$\dfrac{x}{1+|x|}$`, t`$\dfrac{x}{1-|x|}$`, t`$\dfrac{|x|}{1-x}$`, t`$\dfrac{1-|x|}{x}$`],
    answer: 1,
    hint: "f(x) has the same sign as x; solve the two cases separately.",
    explain: t`For $x\ge0$: $y=\frac{x}{1+x}\Rightarrow x = \frac{y}{1-y}$ with $y\ge0$. For $x<0$: $y = \frac{x}{1-x}\Rightarrow x=\frac{y}{1+y}$ with $y<0$. Both cases are $x = \frac{y}{1-|y|}$, so $f^{-1}(x)=\frac{x}{1-|x|}$ on $(-1,1)$.`,
  }),
  q1(2, MAIN, 70, {
    kind: "numeric",
    q: t`$A$ is a set with 4 elements. Find the number of functions from $A$ to $A$ that are **not** one-one.`,
    answer: 232,
    hint: "Total functions minus one-one functions.",
    explain: t`There are $4^4 = 256$ functions in all, and $4! = 24$ of them are one-one (on a finite set, one-one means a permutation). So $256-24 = 232$ are not one-one.`,
  }),
  q1(2, MAIN, 70, {
    kind: "mcq",
    q: t`If $f(x)=\dfrac{3x+2}{5x-3}$, $x\ne\tfrac35$, then $(f\circ f)(x)$ equals:`,
    options: [t`$x$`, t`$-x$`, t`$\dfrac1x$`, t`$\dfrac{3x+2}{5x-3}$`],
    answer: 0,
    hint: t`For $\frac{ax+b}{cx+d}$, look at $a+d$.`,
    explain: t`Numerator: $3\cdot\frac{3x+2}{5x-3}+2 = \frac{19x}{5x-3}$. Denominator: $5\cdot\frac{3x+2}{5x-3}-3=\frac{19}{5x-3}$. So $f(f(x)) = x$: $f$ is its own inverse. In general $\frac{ax+b}{cx+d}$ is self-inverse when $a+d = 0$ (here $3+(-3)=0$).`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`**Assertion (A):** $f:\mathbb R\to\mathbb R$, $f(x)=e^x$ is one-one but not onto.<br>**Reason (R):** The range of $e^x$ is $(0,\infty)$, a proper subset of $\mathbb R$.`,
    options: AR,
    answer: 0,
    hint: "Is e^x strictly monotonic? What values can it take?",
    explain: t`$e^x$ is strictly increasing, so it is one-one. It never takes the value $0$ or any negative value, so its range $(0,\infty)\ne\mathbb R$ and it is not onto. R is exactly why A's "not onto" part holds, so R correctly explains A.`,
  }),
  q1(2, MAIN, 90, {
    kind: "mcq",
    q: t`Match each function $\mathbb R\to\mathbb R$ in List-I with its type in List-II.<br>List-I: (P) $x^3$  (Q) $x^2$  (R) $e^x$  (S) $x^3-x$<br>List-II: (1) bijective  (2) one-one but not onto  (3) onto but not one-one  (4) neither one-one nor onto`,
    options: [
      "P-1, Q-4, R-3, S-2",
      "P-3, Q-4, R-2, S-1",
      "P-1, Q-4, R-2, S-3",
      "P-1, Q-2, R-4, S-3",
    ],
    answer: 2,
    hint: "Check monotonicity and the range of each function.",
    explain: t`$x^3$ is strictly increasing with range $\mathbb R$: bijective (P-1). $x^2$ is even with range $[0,\infty)$: neither (Q-4). $e^x$ is increasing with range $(0,\infty)$: one-one, not onto (R-2). $x^3-x$ vanishes at $0,\pm1$ but has range $\mathbb R$: onto, not one-one (S-3).`,
  }),
  q1(2, MAIN, 90, {
    kind: "numeric",
    q: t`Let $A = \{1,2,\dots,12\}$. On $A\times A$ define $(a,b)\,R\,(c,d)$ iff $ad = bc$. Find the number of elements in the equivalence class of $(2,3)$.`,
    answer: 4,
    hint: t`$(a,b)R(2,3)$ means $a/b = 2/3$.`,
    explain: t`$(a,b)R(2,3)\iff 3a = 2b\iff (a,b) = (2k,3k)$. With $3k\le12$ we get $k = 1,2,3,4$: $(2,3),(4,6),(6,9),(8,12)$. So the class has 4 elements.`,
  }),
  q1(2, MAIN, 60, {
    kind: "mcq",
    q: t`**Statement I:** Every one-one function from a finite set $A$ to itself is onto.<br>**Statement II:** If finite sets $A$ and $B$ have the same number of elements, a function $f:A\to B$ is one-one if and only if it is onto.`,
    options: S12,
    answer: 0,
    hint: "Count images: n distinct images inside an n-element set.",
    explain: t`If $|A|=|B|=n$ and $f$ is one-one, the $n$ images are distinct, so they fill all of $B$: onto. If $f$ is onto, all $n$ elements of $B$ are images of only $n$ elements, so no two can share an image: one-one. Statement I is the case $B = A$. Both are true. (This fails for infinite sets: $n\mapsto n+1$ on $\mathbb N$.)`,
  }),
  q1(2, MAIN_ONLY, 80, {
    kind: "mcq",
    q: t`The inverse of the bijection $f:\mathbb R\to\mathbb R$, $f(x)=\ln\left(x+\sqrt{x^2+1}\right)$ is:`,
    options: [
      t`$\dfrac{e^x+e^{-x}}{2}$`,
      t`$\dfrac{e^x-e^{-x}}{2}$`,
      t`$\ln\left(x-\sqrt{x^2+1}\right)$`,
      t`$\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$`,
    ],
    answer: 1,
    hint: t`Use $\left(\sqrt{x^2+1}+x\right)\left(\sqrt{x^2+1}-x\right)=1$.`,
    explain: t`Let $y = \ln(x+\sqrt{x^2+1})$, so $e^y = x+\sqrt{x^2+1}$ and $e^{-y} = \sqrt{x^2+1}-x$. Subtracting, $e^y-e^{-y} = 2x$, so $x = \frac{e^y-e^{-y}}{2}$ ($\sinh y$). The $\cosh$ option comes from adding the two equations instead of subtracting.`,
  }),
  q1(2, MAIN, 90, {
    kind: "mcq",
    q: t`A function $f:\mathbb R\to\mathbb R$ satisfies $f(x)+2f(1-x) = x^2+2$ for all real $x$. Then $f(5)$ equals:`,
    options: [t`$9$`, t`$3$`, t`$\dfrac{13}{3}$`, t`$\dfrac{11}{3}$`],
    answer: 1,
    hint: t`Replace $x$ by $1-x$ and solve the two equations for $f(x)$.`,
    explain: t`With $x\to1-x$: $f(1-x)+2f(x) = (1-x)^2+2$. Doubling this and subtracting the original gives $3f(x) = 2(1-x)^2+4-x^2-2 = x^2-4x+4$, so $f(x) = \frac{(x-2)^2}{3}$ and $f(5) = \frac{9}{3} = 3$. ($9$ forgets the factor $\tfrac13$.)`,
  }),
  q1(3, ADV_ONLY, 150, {
    kind: "multi",
    q: t`Which of the following functions $f:\mathbb R\to\mathbb R$ are bijective?`,
    options: [t`$f(x)=x^3+2x$`, t`$f(x)=x^3-2x$`, t`$f(x)=e^x-e^{-x}$`, t`$f(x)=2x+\sin x$`],
    answers: [0, 2, 3],
    hint: "A continuous function with a positive derivative everywhere and limits ±∞ is a bijection of R.",
    explain: t`(A) $f'=3x^2+2>0$ and $f\to\pm\infty$: bijective. (B) $f(0)=f(\sqrt2)=0$: not one-one. (C) $f' = e^x+e^{-x}>0$ and $f\to\pm\infty$: bijective. (D) $f' = 2+\cos x\ge1>0$ and $2x+\sin x\to\pm\infty$: bijective. Correct: A, C, D.`,
  }),
  q1(3, ADV_ONLY, 150, {
    kind: "multi",
    q: t`$R$ and $S$ are equivalence relations on a set $A$. Which of the following are **always** equivalence relations on $A$?`,
    options: [t`$R\cap S$`, t`$R\cup S$`, t`$R^{-1}$`, t`$R\circ S$`],
    answers: [0, 2],
    hint: "Try A = {1,2,3} with R joining 1~2 and S joining 2~3.",
    explain: t`$R\cap S$: each property passes to the intersection (if $(a,b),(b,c)$ lie in both, so does $(a,c)$). $R^{-1}=R$ for a symmetric $R$. Counterexample for the others: $A=\{1,2,3\}$, $R$ with classes $\{1,2\},\{3\}$ and $S$ with classes $\{1\},\{2,3\}$. $R\cup S$ has $(1,2),(2,3)$ but not $(1,3)$, so it is not transitive. $R\circ S$ contains $(1,3)$ but not $(3,1)$, so it is not symmetric. Correct: A, C.`,
  }),
  q1(3, ADV_ONLY, 160, {
    kind: "multi",
    q: t`For $f:\mathbb R\to\mathbb R$, $f(x)=\dfrac{x}{1+x^2}$, which of the following are true?`,
    options: [
      t`$f$ is not one-one`,
      t`$f$ is not onto`,
      t`$f$ restricted to $[-1,1]\to\left[-\tfrac12,\tfrac12\right]$ is a bijection`,
      t`The range of $f$ is $[-1,1]$`,
    ],
    answers: [0, 1, 2],
    hint: t`Compare $f(2)$ and $f(1/2)$; use AM–GM on $1+x^2\ge2|x|$.`,
    explain: t`$f(2)=f(\tfrac12)=\tfrac25$: not one-one. $1+x^2\ge2|x|$ gives $|f(x)|\le\tfrac12$, so the range is $[-\tfrac12,\tfrac12]$ and $f$ is not onto $\mathbb R$; (D) is false. On $[-1,1]$, $f'(x)=\frac{1-x^2}{(1+x^2)^2}\ge0$ with equality only at $\pm1$, so $f$ is strictly increasing from $-\tfrac12$ to $\tfrac12$: a bijection onto $[-\tfrac12,\tfrac12]$. Correct: A, B, C.`,
  }),
  q1(3, ADV_ONLY, 160, {
    kind: "multi",
    q: t`Let $A=\{1,2,3\}$. Which of the following are true?`,
    options: [
      "The number of relations on A that are both reflexive and symmetric is 8",
      "The number of equivalence relations on A is 5",
      "The number of bijections from A to A with no fixed point is 3",
      "The number of equivalence relations on A containing (1,2) is 3",
    ],
    answers: [0, 1],
    hint: "List the partitions of A; count derangements of 3 objects.",
    explain: t`(A) Diagonal forced; each of the 3 unordered pairs $\{a,b\}$ is in or out: $2^3 = 8$. True. (B) Partitions of a 3-set: $\{123\}$, $\{12|3\}$, $\{13|2\}$, $\{23|1\}$, $\{1|2|3\}$: 5. True. (C) Derangements of 3 objects: the two 3-cycles only, so 2. False. (D) Partitions with 1, 2 in the same block: $\{12|3\}$ and $\{123\}$, so 2. False. Correct: A, B.`,
  }),
  q1(3, ADV, 120, {
    kind: "numeric",
    q: t`Let $f(x)=\dfrac{1}{1-x}$ and $f^{(n)}$ denote $f\circ f\circ\cdots\circ f$ ($n$ times). Find $f^{(2026)}(2)$.`,
    answer: -1,
    hint: "Compute f∘f and f∘f∘f.",
    explain: t`$f(f(x)) = \frac{1}{1-\frac{1}{1-x}} = \frac{x-1}{x}$ and $f(f(f(x))) = x$, so the iterates repeat with period 3. Since $2026 = 3\cdot675+1$, $f^{(2026)} = f$ and $f^{(2026)}(2) = \frac{1}{1-2} = -1$.`,
  }),
  q1(3, ADV, 120, {
    kind: "numeric",
    q: t`Find the number of functions $f:\{1,2,3,4\}\to\{1,2,3,4\}$ satisfying $f(f(x)) = x$ for every $x$.`,
    answer: 10,
    hint: "Such f is a bijection made of fixed points and swaps.",
    explain: t`$f\circ f = I$ makes $f$ a bijection whose cycles have length 1 or 2. No swap: 1 (identity). One swap: ${}^4C_2 = 6$. Two swaps: $\frac{1}{2}{}^4C_2 = 3$. Total $1+6+3 = 10$.`,
  }),
  q1(3, ADV, 120, {
    kind: "mcq",
    q: t`The number of relations on $\{1,2,3\}$ that are reflexive and symmetric but **not** transitive is:`,
    options: [t`$5$`, t`$8$`, t`$3$`, t`$2$`],
    answer: 2,
    hint: "Count reflexive–symmetric relations, then subtract the equivalence relations.",
    explain: t`Reflexive and symmetric relations correspond to choosing any subset of the 3 unordered pairs $\{1,2\},\{1,3\},\{2,3\}$: 8. A choice is transitive exactly when it is $\emptyset$, a single pair, or all three (these are the 5 equivalence relations). The other choices are the 3 with exactly two pairs, e.g. $\{1,2\},\{2,3\}$ without $\{1,3\}$. Answer $8-5 = 3$.`,
  }),
  q1(3, ADV, 120, {
    kind: "mcq",
    q: t`The number of bijections $f:\{1,2,3,4,5\}\to\{1,2,3,4,5\}$ with $f(i)\ne i$ for every $i$ is:`,
    options: [t`$44$`, t`$120$`, t`$1024$`, t`$76$`],
    answer: 0,
    hint: "Inclusion–exclusion over the fixed points.",
    explain: t`Derangements: $D_5 = 5!\left(1-\frac1{1!}+\frac1{2!}-\frac1{3!}+\frac1{4!}-\frac1{5!}\right) = 120-120+60-20+5-1 = 44$. $1024 = 4^5$ counts all functions (not only bijections) avoiding fixed points; $76 = 120-44$ counts the permutations with at least one fixed point.`,
  }),
  q1(3, ADV, 150, {
    kind: "mcq",
    q: t`On $\mathbb R$, define $xRy$ iff $x-y+\sqrt2$ is irrational. Then $R$ is:`,
    options: [
      "an equivalence relation",
      "reflexive but neither symmetric nor transitive",
      "reflexive and symmetric but not transitive",
      "reflexive and transitive but not symmetric",
    ],
    answer: 1,
    hint: t`Try pairs built from $\sqrt2$ and integers.`,
    explain: t`Reflexive: $x-x+\sqrt2=\sqrt2$ is irrational. Not symmetric: $\sqrt2\,R\,0$ since $2\sqrt2$ is irrational, but $0-\sqrt2+\sqrt2=0$ is rational. Not transitive: $\sqrt2\,R\,1$ ($2\sqrt2-1$ irrational) and $1\,R\,2\sqrt2$ ($1-\sqrt2$ irrational), but $\sqrt2-2\sqrt2+\sqrt2 = 0$ is rational, so $\sqrt2\not R\,2\sqrt2$.`,
  }),
  q1(3, ADV, 150, {
    kind: "numeric",
    q: t`Find the number of onto functions $f:\{1,2,3,4,5\}\to\{a,b,c\}$ with $f(1) = a$.`,
    answer: 50,
    hint: "Fix f(1) = a; the other four elements must still cover b and c.",
    explain: t`The images of $2,3,4,5$ must include $b$ and $c$ ($a$ is already covered). Total $3^4 = 81$; missing $b$: $2^4 = 16$; missing $c$: 16; missing both: 1. So $81-32+1 = 50$. Check: all onto functions $5\to3$ number $3^5-3\cdot2^5+3 = 150$, and by symmetry one third have $f(1)=a$.`,
  }),
];
