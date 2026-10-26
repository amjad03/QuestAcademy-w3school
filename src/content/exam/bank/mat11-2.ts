import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Maths — Linear Inequalities, Permutations and Combinations, Binomial Theorem,
 * Sequences and Series. Original exam-style questions (JEE Main / Advanced, KCET, COMEDK).
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
  5: "Linear Inequalities",
  6: "Permutations and Combinations",
  7: "Binomial Theorem",
  8: "Sequences and Series",
};

/** Builds the questions of one chapter, numbering ids mat11-2-<ch>-<n>. */
function chapter(ch: number) {
  let n = 0;
  return (difficulty: D, exams: ExamId[], idealTime: number, body: Body): ExamQuestion =>
    ({
      id: `mat11-2-${String(ch).padStart(2, "0")}-${String(++n).padStart(3, "0")}`,
      subject: "maths",
      chapter: CH[ch],
      grade: "11",
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
/* Chapter 5 — Linear Inequalities                                     */
/* ================================================================== */
const q5 = chapter(5);
const ch5: ExamQuestion[] = [
  q5(1, BASIC, 45, {
    kind: "mcq",
    q: t`The solution set of $3x - 7 < 5x + 3$, $x\in\mathbb R$, is:`,
    options: [t`$x < -5$`, t`$x > -5$`, t`$x > 5$`, t`$x < 5$`],
    answer: 1,
    explain: t`$3x - 5x < 3 + 7 \Rightarrow -2x < 10$. Dividing by the negative number $-2$ reverses the sign: $x > -5$. The option $x < -5$ is what you get if you forget to reverse the inequality.`,
  }),
  q5(1, BASIC, 45, {
    kind: "mcq",
    q: t`The solution set of $4x + 3 \le 23$ when $x$ is a natural number is:`,
    options: [t`$\{0,1,2,3,4,5\}$`, t`$\{1,2,3,4\}$`, t`$\{1,2,3,4,5\}$`, t`$\{1,2,3,4,5,6\}$`],
    answer: 2,
    explain: t`$4x \le 20 \Rightarrow x \le 5$. Natural numbers start at 1, so the set is $\{1,2,3,4,5\}$. Including 0 treats $x$ as a whole number; dropping 5 ignores the "equal to" part of $\le$.`,
  }),
  q5(1, BASIC, 60, {
    kind: "mcq",
    q: t`The solution of $-8 \le 5 - 3x < 7$ is:`,
    options: [t`$\left[-\tfrac23, \tfrac{13}{3}\right)$`, t`$\left(-\tfrac{13}{3}, \tfrac23\right]$`, t`$\left[-\tfrac23, \tfrac{13}{3}\right]$`, t`$\left(-\tfrac23, \tfrac{13}{3}\right]$`],
    answer: 3,
    explain: t`Subtract 5 throughout: $-13 \le -3x < 2$. Divide by $-3$ and reverse both signs: $\tfrac{13}{3} \ge x > -\tfrac23$, i.e. $x \in \left(-\tfrac23, \tfrac{13}{3}\right]$. Note which end is closed: the $\le$ attached to $-8$ becomes the closed end at $\tfrac{13}{3}$.`,
  }),
  q5(1, BASIC, 75, {
    kind: "mcq",
    q: t`The solution of $\dfrac{2x-1}{3} \ge \dfrac{3x-2}{4} - \dfrac{2-x}{5}$ is:`,
    options: [t`$x \ge 2$`, t`$x \le 2$`, t`$x \le -2$`, t`$x < 2$`],
    answer: 1,
    explain: t`Multiply by the LCM 60 (positive, so the sign stays): $20(2x-1) \ge 15(3x-2) - 12(2-x)$, i.e. $40x - 20 \ge 45x - 30 - 24 + 12x = 57x - 54$. So $-17x \ge -34$, and dividing by $-17$ gives $x \le 2$. The strict option drops the equality; $x \ge 2$ forgets to reverse the sign.`,
  }),
  q5(1, BASIC, 60, {
    kind: "numeric",
    q: t`How many integers $x$ satisfy both $3x - 2 > 4$ and $2x + 5 \le 21$?`,
    answer: 6,
    explain: t`$3x > 6 \Rightarrow x > 2$ and $2x \le 16 \Rightarrow x \le 8$. The common set is $(2, 8]$, whose integers are $3,4,5,6,7,8$ — six of them. (Counting 2 as well would give 7.)`,
  }),
  q5(1, BASIC, 60, {
    kind: "mcq",
    q: t`A student scored 62, 71 and 58 in three unit tests. The minimum score needed in the fourth test so that the average of the four is at least 65 is:`,
    options: [t`65`, t`70`, t`69`, t`74`],
    answer: 2,
    explain: t`$\dfrac{62+71+58+x}{4} \ge 65 \Rightarrow 191 + x \ge 260 \Rightarrow x \ge 69$. So the minimum is 69. Choosing 65 confuses the required average with the required score.`,
  }),
  q5(1, BASIC, 60, {
    kind: "mcq",
    q: t`The temperature of a liquid kept in a lab stays between $15^\circ$C and $40^\circ$C. Using $F = \tfrac95 C + 32$, its temperature in Fahrenheit lies between:`,
    options: [t`$59^\circ$F and $104^\circ$F`, t`$27^\circ$F and $72^\circ$F`, t`$59^\circ$F and $72^\circ$F`, t`$47^\circ$F and $104^\circ$F`],
    answer: 0,
    explain: t`$15 < C < 40 \Rightarrow 27 < \tfrac95 C < 72 \Rightarrow 59 < F < 104$. Stopping at $27$–$72$ forgets to add 32; the mixed options add 32 to only one end.`,
  }),
  q5(1, BASIC, 45, {
    kind: "mcq",
    q: t`The solution region of $2x + 3y \ge 6$ in the $xy$-plane is:`,
    options: [
      "the half-plane containing the origin, including the line 2x + 3y = 6",
      "the half-plane not containing the origin, including the line 2x + 3y = 6",
      "the half-plane not containing the origin, excluding the line 2x + 3y = 6",
      "the half-plane containing the origin, excluding the line 2x + 3y = 6",
    ],
    answer: 1,
    explain: t`Test the origin: $2(0) + 3(0) = 0 \ge 6$ is false, so the origin is not in the region — the region is the other side of the line. Because the sign is $\ge$, points on the line are included (drawn as a solid line).`,
  }),
  q5(1, BASIC, 45, {
    kind: "mcq",
    q: t`The solution set of $|x - 3| < 5$ is:`,
    options: [t`$(-8, 2)$`, t`$(-\infty, -2)\cup(8, \infty)$`, t`$[-2, 8]$`, t`$(-2, 8)$`],
    answer: 3,
    explain: t`$|x-3| < 5 \iff -5 < x - 3 < 5 \iff -2 < x < 8$. The union of rays is the solution of $|x-3| > 5$; the closed interval would need $\le$.`,
  }),
  q5(2, MAIN, 90, {
    kind: "mcq",
    q: t`The solution set of $\dfrac{2x-3}{x+1} \le 1$ is:`,
    options: [t`$(-1, 4]$`, t`$[-1, 4]$`, t`$(-\infty, -1)\cup[4, \infty)$`, t`$(-\infty, 4]$`],
    answer: 0,
    hint: t`Do not cross-multiply — the sign of $x+1$ is unknown. Bring everything to one side.`,
    explain: t`$\dfrac{2x-3}{x+1} - 1 \le 0 \Rightarrow \dfrac{x-4}{x+1} \le 0$. Critical points $-1$ and $4$; the fraction is $\le 0$ between them, with $x = 4$ allowed (value 0) and $x = -1$ excluded (undefined). So $(-1, 4]$. Cross-multiplying as if $x+1>0$ gives $x \le 4$, which wrongly includes $x < -1$.`,
  }),
  q5(2, MAIN, 60, {
    kind: "mcq",
    q: t`The solution set of $|2x - 5| \ge 3$ is:`,
    options: [t`$[1, 4]$`, t`$(-\infty, 1]\cup[4, \infty)$`, t`$(-\infty, -4]\cup[-1, \infty)$`, t`$[4, \infty)$`],
    answer: 1,
    hint: t`$|u| \ge a$ (with $a > 0$) means $u \ge a$ or $u \le -a$.`,
    explain: t`$2x - 5 \ge 3 \Rightarrow x \ge 4$, or $2x - 5 \le -3 \Rightarrow x \le 1$. So $x \in (-\infty, 1]\cup[4,\infty)$. $[1,4]$ solves $|2x-5| \le 3$ instead; keeping only $[4,\infty)$ drops the negative case.`,
  }),
  q5(2, MAIN, 75, {
    kind: "numeric",
    q: t`Find the number of integers $x$ satisfying $1 \le |x - 2| \le 4$.`,
    answer: 8,
    hint: "Solve |x − 2| ≤ 4 and then remove the points where |x − 2| < 1.",
    explain: t`$|x-2| \le 4$ gives $-2 \le x \le 6$; $|x-2| \ge 1$ removes $1 < x < 3$. So $x \in [-2, 1]\cup[3, 6]$. Integers: $-2,-1,0,1$ and $3,4,5,6$ — 8 in all. (Only $x = 2$ is removed among integers; $9 - 1 = 8$.)`,
  }),
  q5(2, MAIN, 75, {
    kind: "mcq",
    q: t`The solution of the system $2(x-1) < x + 5$ and $3(x+2) > 2 - x$ is:`,
    options: [t`$(-1, 7)$`, t`$(-\infty, 7)$`, t`$(-1, \infty)$`, t`$(1, 7)$`],
    answer: 0,
    hint: "Solve each inequality separately, then intersect.",
    explain: t`First: $2x - 2 < x + 5 \Rightarrow x < 7$. Second: $3x + 6 > 2 - x \Rightarrow 4x > -4 \Rightarrow x > -1$. A system needs both, so the solution is the intersection $(-1, 7)$. The single rays solve only one inequality each.`,
  }),
  q5(2, MAIN, 75, {
    kind: "mcq",
    q: t`Statement I: If $a < b$ and $c < 0$, then $\dfrac{a}{c} > \dfrac{b}{c}$.<br>Statement II: If $a < b$, then $a^2 < b^2$ for all real $a, b$.`,
    options: S12,
    answer: 1,
    hint: "Try a negative value of a in Statement II.",
    explain: t`Statement I: dividing both sides by a negative number reverses the inequality — true. Statement II: take $a = -3$, $b = 1$; then $a < b$ but $a^2 = 9 > 1 = b^2$. Squaring preserves order only when both numbers are non-negative. So I is true, II is false.`,
  }),
  q5(2, MAIN, 75, {
    kind: "mcq",
    q: t`Assertion (A): The system $x + 2 > 5$, $2x - 1 < 3$ has no real solution.<br>Reason (R): A system of linear inequalities in one variable has no solution when the solution intervals of its separate inequalities have no common point.`,
    options: AR,
    answer: 0,
    hint: "Solve both inequalities and compare the intervals.",
    explain: t`$x + 2 > 5 \Rightarrow x > 3$ and $2x - 1 < 3 \Rightarrow x < 2$. No number is both greater than 3 and less than 2, so A is true. R is the general rule (the solution of a system is the intersection of the individual solution sets) and it is exactly why A holds.`,
  }),
  q5(2, MAIN, 120, {
    kind: "mcq",
    q: t`A tank holds 600 L of a 12% acid solution. How many litres $x$ of a 30% acid solution must be added so that the acid content of the mixture is more than 15% but less than 18%?`,
    options: [t`$100 < x < 250$`, t`$120 < x < 250$`, t`$120 < x < 300$`, t`$150 < x < 300$`],
    answer: 2,
    hint: "Acid in the mixture = 0.12(600) + 0.30x; total volume = 600 + x.",
    explain: t`Acid $= 72 + 0.3x$, volume $= 600 + x$ (positive, so we may multiply). $72 + 0.3x > 0.15(600 + x) = 90 + 0.15x \Rightarrow 0.15x > 18 \Rightarrow x > 120$. $72 + 0.3x < 0.18(600 + x) = 108 + 0.18x \Rightarrow 0.12x < 36 \Rightarrow x < 300$. So $120 < x < 300$.`,
  }),
  q5(2, MAIN, 90, {
    kind: "numeric",
    q: t`Find the area (in square units) of the region given by $x \ge 0$, $y \ge 0$, $x + y \le 6$ and $y \le 4$.`,
    answer: 16,
    hint: "Start from the triangle cut off by x + y ≤ 6 and remove the part above y = 4.",
    explain: t`$x \ge 0, y \ge 0, x + y \le 6$ is the triangle with vertices $(0,0),(6,0),(0,6)$, area 18. The condition $y \le 4$ cuts off the small triangle $(0,4),(2,4),(0,6)$ of area $\tfrac12\cdot2\cdot2 = 2$. Area $= 18 - 2 = 16$. (The region is the quadrilateral $(0,0),(6,0),(2,4),(0,4)$.)`,
  }),
  q5(2, MAIN, 60, {
    kind: "mcq",
    q: t`Which of the following points lies in the solution region of the system $3x + 2y < 12$, $x - y > -2$?`,
    options: [t`$(4, 0)$`, t`$(0, 3)$`, t`$(1, 1)$`, t`$(3, 2)$`],
    answer: 2,
    hint: "Substitute each point into both inequalities.",
    explain: t`$(1,1)$: $3 + 2 = 5 < 12$ and $1 - 1 = 0 > -2$ — both hold. $(4,0)$: $12 < 12$ fails (it lies on the boundary, which is excluded). $(0,3)$: $0 - 3 = -3 > -2$ fails. $(3,2)$: $9 + 4 = 13 < 12$ fails.`,
  }),
  q5(2, MAIN, 60, {
    kind: "mcq",
    q: t`If $-3 \le x \le 2$, then $4 - 3x$ lies in:`,
    options: [t`$[-5, 13]$`, t`$[-2, 10]$`, t`$[-13, 2]$`, t`$[-2, 13]$`],
    answer: 3,
    hint: "Multiply by −3 first (reversing both signs), then add 4.",
    explain: t`Multiplying by $-3$ reverses the inequalities: $9 \ge -3x \ge -6$. Adding 4: $13 \ge 4 - 3x \ge -2$. So $4 - 3x \in [-2, 13]$. Using the endpoints without reversing gives a wrong interval like $[-13, 2]$.`,
  }),
  q5(2, MAIN, 75, {
    kind: "mcq",
    q: t`The solution set of $\dfrac{x}{x-1} > 2$ is:`,
    options: [t`$(1, 2)$`, t`$(-\infty, 2)$`, t`$(2, \infty)$`, t`$(-\infty, 1)\cup(2, \infty)$`],
    answer: 0,
    hint: "Subtract 2 and combine into one fraction.",
    explain: t`$\dfrac{x}{x-1} - 2 = \dfrac{x - 2x + 2}{x-1} = \dfrac{2 - x}{x - 1} > 0$. Numerator and denominator have the same sign only for $1 < x < 2$. Cross-multiplying as if $x - 1 > 0$ gives $x < 2$, which wrongly includes $x < 1$ (e.g. $x = 0$ gives $0 > 2$, false).`,
  }),
  q5(3, ADV, 120, {
    kind: "multi",
    q: t`Which of the following hold for all real numbers $x, y$?`,
    options: [
      t`$|x + y| \le |x| + |y|$`,
      t`$|x - y| \ge \big||x| - |y|\big|$`,
      t`$|x - y| \le |x| - |y|$`,
      t`If $|x| < 1$ and $|y| < 1$, then $|x - y| < 1$`,
    ],
    answers: [0, 1],
    hint: "Test small counterexamples such as x = 0, y = 1.",
    explain: t`(A) is the triangle inequality. (B) follows from it: $|x| = |(x-y) + y| \le |x-y| + |y|$, so $|x|-|y| \le |x-y|$, and by symmetry $|y|-|x| \le |x-y|$. (C) fails for $x = 0, y = 1$: $1 \le -1$ is false. (D) fails for $x = 0.9, y = -0.9$: $|x - y| = 1.8$. The correct bound there is $|x - y| < 2$. Correct: A, B.`,
  }),
  q5(3, ADV, 120, {
    kind: "numeric",
    q: t`Find the number of integers $x$ satisfying $|x - 3| + |x + 2| \le 9$.`,
    answer: 10,
    hint: "Split at x = −2 and x = 3.",
    explain: t`For $-2 \le x \le 3$ the sum is the distance between $-2$ and $3$, i.e. 5, which is $\le 9$. For $x > 3$: $(x-3)+(x+2) = 2x - 1 \le 9 \Rightarrow x \le 5$. For $x < -2$: $-(x-3)-(x+2) = 1 - 2x \le 9 \Rightarrow x \ge -4$. So $x \in [-4, 5]$, which has 10 integers.`,
  }),
  q5(3, ADV, 120, {
    kind: "mcq",
    q: t`The solution set of $\dfrac{|x| - 1}{|x| - 2} \ge 0$ is:`,
    options: [
      t`$(-\infty, -2]\cup[-1, 1]\cup[2, \infty)$`,
      t`$[-1, 1]\cup(2, \infty)$`,
      t`$(-\infty, -2)\cup[-1, 1]\cup(2, \infty)$`,
      t`$(-2, -1]\cup[1, 2)$`,
    ],
    answer: 2,
    hint: t`Put $t = |x| \ge 0$ and solve in $t$ first.`,
    explain: t`With $t = |x|$: $\dfrac{t-1}{t-2} \ge 0 \Rightarrow t \le 1$ or $t > 2$ ($t = 2$ makes the denominator zero). So $|x| \le 1$ or $|x| > 2$, i.e. $x \in (-\infty,-2)\cup[-1,1]\cup(2,\infty)$. Closing the brackets at $\pm 2$ includes points where the expression is undefined; $(-2,-1]\cup[1,2)$ is the set where it is $\le 0$; dropping the negative ray forgets that $|x| > 2$ includes $x < -2$.`,
  }),
  q5(3, ADV, 150, {
    kind: "multi",
    q: t`Let $R$ be the region of the plane given by $x \ge 0$, $y \ge 0$, $x + y \le 5$ and $x - y \ge -1$. Which of the following are true?`,
    options: [
      t`$R$ is bounded`,
      t`$(2, 3) \in R$`,
      t`$(0, 2) \in R$`,
      t`The area of $R$ is $8.5$ square units`,
    ],
    answers: [0, 1, 3],
    hint: "Find the corner points: x + y = 5 meets y = x + 1 at (2, 3).",
    explain: t`The corners are $(0,0)$, $(5,0)$, $(2,3)$ (where $x+y=5$ meets $y = x+1$) and $(0,1)$, so $R$ is a bounded quadrilateral. $(2,3)$: $5 \le 5$ and $-1 \ge -1$ — on the boundary, included. $(0,2)$: $0 - 2 = -2 \ge -1$ fails. Area by the shoelace formula: $\tfrac12|0 + 15 + 2 + 0| = 8.5$. Correct: A, B, D.`,
  }),
  q5(3, ADV, 120, {
    kind: "numeric",
    q: t`Find the number of ordered pairs $(x, y)$ of positive integers satisfying $2x + 3y \le 15$.`,
    answer: 14,
    hint: "Fix y = 1, 2, 3, … and count the allowed x.",
    explain: t`$y = 1$: $2x \le 12$, $x = 1..6$ (6). $y = 2$: $2x \le 9$, $x = 1..4$ (4). $y = 3$: $2x \le 6$, $x = 1..3$ (3). $y = 4$: $2x \le 3$, $x = 1$ (1). $y = 5$: $2x \le 0$, none. Total $6 + 4 + 3 + 1 = 14$.`,
  }),
  q5(3, ADV, 120, {
    kind: "mcq",
    q: t`The solution set of $|x + 1| - |x - 2| \ge 1$ is:`,
    options: [t`$[2, \infty)$`, t`$[1, \infty)$`, t`$(-\infty, 1]$`, t`$[1, 2]$`],
    answer: 1,
    hint: "Split the line at x = −1 and x = 2.",
    explain: t`$x \ge 2$: $(x+1)-(x-2) = 3 \ge 1$ — all such $x$ work. $-1 \le x < 2$: $(x+1)-(2-x) = 2x - 1 \ge 1 \Rightarrow x \ge 1$, giving $[1, 2)$. $x < -1$: $-(x+1)-(2-x) = -3 \ge 1$ — none. Union: $[1, \infty)$. $[1,2]$ forgets the whole ray $x \ge 2$; $[2,\infty)$ forgets the middle case.`,
  }),
];

/* ================================================================== */
/* Chapter 6 — Permutations and Combinations                           */
/* ================================================================== */
const q6 = chapter(6);
const ch6: ExamQuestion[] = [
  q6(1, BASIC, 40, {
    kind: "mcq",
    q: t`The value of $\dfrac{7!}{5!\,2!}$ is:`,
    options: [t`$42$`, t`$21$`, t`$7$`, t`$35$`],
    answer: 1,
    explain: t`$\dfrac{7!}{5!\,2!} = \dfrac{7\cdot 6}{2} = 21$ (this is $^7C_2$). $42 = 7\cdot6$ forgets the $2!$; $35 = {}^7C_3$.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $^nP_2 = 56$, then $n$ equals:`,
    options: [t`$7$`, t`$14$`, t`$8$`, t`$28$`],
    answer: 2,
    explain: t`$^nP_2 = n(n-1) = 56 = 8\cdot 7$, so $n = 8$ (the root $n = -7$ is rejected). Choosing 7 picks the wrong factor of 56.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`How many 3-digit numbers with all digits different can be formed using the digits 1, 2, 3, 4, 5?`,
    options: [t`$60$`, t`$125$`, t`$10$`, t`$120$`],
    answer: 0,
    explain: t`Fill the hundreds, tens and units places in $5\cdot4\cdot3 = 60$ ways ($= {}^5P_3$). $125 = 5^3$ allows repetition; $10 = {}^5C_3$ ignores order.`,
  }),
  q6(1, BASIC, 60, {
    kind: "mcq",
    q: t`How many even 4-digit numbers can be formed from the digits 0–9 if repetition of digits is allowed?`,
    options: [t`$5000$`, t`$4536$`, t`$4500$`, t`$2500$`],
    answer: 2,
    explain: t`Thousands place: 9 choices (not 0); hundreds and tens: 10 each; units: 5 even digits. Total $9\cdot10\cdot10\cdot5 = 4500$. $5000$ allows a leading zero; $4536$ is the count of 4-digit numbers with distinct digits.`,
  }),
  q6(1, BASIC, 50, {
    kind: "mcq",
    q: t`The number of distinct arrangements of all the letters of the word COOKBOOK is:`,
    options: [t`$1680$`, t`$840$`, t`$40320$`, t`$420$`],
    answer: 1,
    explain: t`8 letters with O repeated 4 times and K twice (C, B once each): $\dfrac{8!}{4!\,2!} = \dfrac{40320}{48} = 840$. Dividing only by $4!$ gives 1680; $8!$ ignores the repetitions altogether.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $^nC_8 = {}^nC_6$, then $^nC_2$ equals:`,
    options: [t`$91$`, t`$182$`, t`$14$`, t`$196$`],
    answer: 0,
    explain: t`$^nC_r = {}^nC_s$ with $r \ne s$ forces $r + s = n$, so $n = 14$. Then $^{14}C_2 = \dfrac{14\cdot13}{2} = 91$. $182 = {}^{14}P_2$.`,
  }),
  q6(1, BASIC, 50, {
    kind: "mcq",
    q: t`A committee of 3 is to be chosen from 6 men and 4 women. In how many ways can it be done if it must contain exactly one woman?`,
    options: [t`$120$`, t`$80$`, t`$20$`, t`$60$`],
    answer: 3,
    explain: t`Choose the woman in $^4C_1 = 4$ ways and the two men in $^6C_2 = 15$ ways: $4\cdot15 = 60$. $120 = {}^{10}C_3$ ignores the condition.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`The number of diagonals of a 12-sided convex polygon is:`,
    options: [t`$66$`, t`$54$`, t`$132$`, t`$42$`],
    answer: 1,
    explain: t`Any 2 vertices give a side or a diagonal: $^{12}C_2 = 66$; removing the 12 sides leaves $54$. Equivalently $\dfrac{n(n-3)}{2} = \dfrac{12\cdot 9}{2} = 54$.`,
  }),
  q6(1, BASIC, 45, {
    kind: "numeric",
    q: t`Eight points are marked on a circle. How many triangles have their vertices among these points?`,
    answer: 56,
    explain: t`No three points on a circle are collinear, so every choice of 3 points gives a triangle: $^8C_3 = \dfrac{8\cdot7\cdot6}{6} = 56$.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $(n+1)! = 12\,(n-1)!$, then $n$ equals:`,
    options: [t`$4$`, t`$2$`, t`$3$`, t`$5$`],
    answer: 2,
    explain: t`$(n+1)! = (n+1)n\,(n-1)!$, so $n(n+1) = 12 = 3\cdot4$, giving $n = 3$ ($n = -4$ is rejected).`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`In how many ways can 5 people sit in a row if two particular people must sit next to each other?`,
    options: [t`$24$`, t`$48$`, t`$120$`, t`$72$`],
    answer: 1,
    explain: t`Tie the two together as one unit: 4 units arrange in $4! = 24$ ways and the pair can swap in $2$ ways, giving $48$. $24$ forgets the internal swap; $72 = 120 - 48$ is the count when they are not together.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`How many arrangements of all the letters of PLANET begin with P and end with T?`,
    options: [t`$120$`, t`$48$`, t`$720$`, t`$24$`],
    answer: 3,
    explain: t`With P and T fixed at the ends, the 4 letters L, A, N, E fill the middle in $4! = 24$ ways. $120 = 5!$ fixes only one end.`,
  }),
  q6(1, BASIC, 50, {
    kind: "mcq",
    q: t`A student must answer 6 out of 9 questions, and Question 1 is compulsory. In how many ways can the student choose the questions?`,
    options: [t`$84$`, t`$56$`, t`$126$`, t`$70$`],
    answer: 1,
    explain: t`Question 1 is already in, so 5 more are chosen from the other 8: $^8C_5 = 56$. $84 = {}^9C_6$ ignores the compulsory question; $126 = {}^9C_5$ and $70 = {}^8C_4$ come from miscounting how many remain to be chosen.`,
  }),
  q6(1, BASIC, 45, {
    kind: "mcq",
    q: t`In how many ways can 4 different letters be posted in 3 letter boxes (any box may receive any number of letters)?`,
    options: [t`$64$`, t`$81$`, t`$12$`, t`$24$`],
    answer: 1,
    explain: t`Each letter independently chooses one of 3 boxes: $3^4 = 81$. $4^3 = 64$ wrongly lets each box choose a letter; $12$ and $24$ treat it as a selection or arrangement.`,
  }),
  q6(2, MAIN, 120, {
    kind: "mcq",
    q: t`In how many arrangements of the letters of EXAMINATION do all the vowels come together?`,
    options: [t`$129600$`, t`$32400$`, t`$64800$`, t`$4989600$`],
    answer: 2,
    hint: "Vowels: E, A, A, I, I, O. Treat them as one block, then arrange inside the block.",
    explain: t`Vowels E, A, A, I, I, O (6, with A and I repeated); consonants X, M, N, N, T (N repeated). The vowel block plus 5 consonants is 6 units with N twice: $\dfrac{6!}{2!} = 360$. Inside the block: $\dfrac{6!}{2!\,2!} = 180$. Total $360\cdot180 = 64800$. Forgetting the repeated N gives 129600; $4989600 = \dfrac{11!}{2!2!2!}$ is the unrestricted count.`,
  }),
  q6(2, MAIN, 120, {
    kind: "numeric",
    q: t`All arrangements of the letters of MOTHER are listed in dictionary order. Find the rank of the word MOTHER.`,
    answer: 309,
    hint: "Alphabetical order of the letters: E, H, M, O, R, T.",
    explain: t`Words starting with E or H: $2\cdot5! = 240$. Starting with M, the second letter before O can be E or H: $2\cdot4! = 48$ (total 288). Starting MO, third letter before T: E, H, R: $3\cdot3! = 18$ (306). Starting MOT, fourth letter before H: E: $1\cdot2! = 2$ (308). MOTH then E, R is the first of its two endings, so MOTHER is word $308 + 1 = 309$.`,
  }),
  q6(2, MAIN, 120, {
    kind: "mcq",
    q: t`How many 4-digit numbers divisible by 4 can be formed using the digits 0, 1, 2, 3, 4, 5 without repetition?`,
    options: [t`$96$`, t`$72$`, t`$60$`, t`$84$`],
    answer: 1,
    hint: "A number is divisible by 4 when its last two digits form a number divisible by 4.",
    explain: t`Possible endings with distinct digits: 04, 20, 40 (containing 0) and 12, 24, 32, 52. For an ending with 0, the first two places use the 4 remaining digits freely: $4\cdot3 = 12$ each, total 36. For an ending without 0, the first place cannot be 0: $3$ choices, then $3$ for the second: $9$ each, total 36. Answer $36 + 36 = 72$. Forgetting the leading-zero rule gives 96.`,
  }),
  q6(2, MAIN, 90, {
    kind: "mcq",
    q: t`A team of 5 is chosen from 7 boys and 5 girls. In how many ways can it be chosen if it must have at least 2 girls?`,
    options: [t`$596$`, t`$792$`, t`$350$`, t`$771$`],
    answer: 0,
    hint: "Total selections minus those with 0 girls and with exactly 1 girl.",
    explain: t`Total $^{12}C_5 = 792$. No girl: $^7C_5 = 21$. One girl: $5\cdot{}^7C_4 = 175$. At least 2 girls: $792 - 21 - 175 = 596$. $350 = {}^5C_2\cdot{}^7C_3$ is only "exactly 2 girls"; 771 subtracts only the no-girl case.`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`In how many ways can 6 people sit around a round table if two particular people must NOT sit next to each other?`,
    options: [t`$48$`, t`$120$`, t`$72$`, t`$96$`],
    answer: 2,
    hint: "Circular arrangements of n distinct people: (n − 1)!.",
    explain: t`All arrangements: $(6-1)! = 120$. With the two together: treat them as one unit, $(5-1)!\cdot 2 = 48$. Not together: $120 - 48 = 72$. 48 is the "together" count.`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`In how many ways can 8 identical balls be put into 3 distinct boxes so that no box is empty?`,
    options: [t`$45$`, t`$21$`, t`$56$`, t`$28$`],
    answer: 1,
    hint: "Positive integer solutions of a + b + c = 8.",
    explain: t`We need positive solutions of $a + b + c = 8$. By stars and bars this is $^{8-1}C_{3-1} = {}^7C_2 = 21$. $^{10}C_2 = 45$ counts non-negative solutions (empty boxes allowed); $3^8$-style answers treat the balls as distinct.`,
  }),
  q6(2, MAIN, 60, {
    kind: "numeric",
    q: t`Find the number of positive divisors of 1080.`,
    answer: 32,
    hint: "Write 1080 as a product of prime powers.",
    explain: t`$1080 = 2^3\cdot3^3\cdot5$. A divisor is $2^a3^b5^c$ with $0 \le a \le 3$, $0 \le b \le 3$, $0 \le c \le 1$: $4\cdot4\cdot2 = 32$ divisors.`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`Statement I: $^nC_r + {}^nC_{r-1} = {}^{n+1}C_r$ for $1 \le r \le n$.<br>Statement II: $^nP_r = r!\cdot{}^nC_r$.`,
    options: S12,
    answer: 0,
    hint: "Think of choosing r from n + 1 objects, according to whether one fixed object is chosen.",
    explain: t`Statement I (Pascal's rule): selections of $r$ from $n+1$ objects either exclude a fixed object ($^nC_r$) or include it ($^nC_{r-1}$). Statement II: each selection of $r$ objects can be arranged in $r!$ ways, so arrangements $= r!\cdot$ selections. Both true.`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`Assertion (A): The number of different necklaces that can be made with 5 distinct beads is 12.<br>Reason (R): When clockwise and anticlockwise arrangements are regarded as different, $n$ distinct objects can be arranged in a circle in $\dfrac{(n-1)!}{2}$ ways.`,
    options: AR,
    answer: 2,
    hint: "A necklace can be flipped over.",
    explain: t`Circular arrangements of 5 beads: $4! = 24$; a necklace can be turned over, so each arrangement and its mirror image are the same: $24/2 = 12$. A is true. R is false: when clockwise and anticlockwise are different the count is $(n-1)!$; the division by 2 applies only when they are the same (necklaces, garlands).`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`The number of rectangles (including squares) on an ordinary $8\times8$ chessboard is:`,
    options: [t`$204$`, t`$784$`, t`$1296$`, t`$1024$`],
    answer: 2,
    hint: "A rectangle is fixed by choosing 2 of the 9 horizontal lines and 2 of the 9 vertical lines.",
    explain: t`The board is drawn with 9 horizontal and 9 vertical lines. Choosing 2 of each fixes a rectangle: $^9C_2\cdot{}^9C_2 = 36\cdot36 = 1296$. $204 = 1^2 + 2^2 + \dots + 8^2$ counts only squares; $784 = 28^2$ uses 8 lines instead of 9.`,
  }),
  q6(2, MAIN, 90, {
    kind: "numeric",
    q: t`In how many ways can three distinct numbers be chosen from $\{1, 2, \dots, 20\}$ so that their sum is even?`,
    answer: 570,
    hint: "The sum is even when all three are even, or exactly two are odd.",
    explain: t`There are 10 odd and 10 even numbers. Even sum: all three even, $^{10}C_3 = 120$; or two odd and one even, $^{10}C_2\cdot10 = 450$. Total $570$. (Three odd numbers or one odd number give an odd sum.)`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`In how many ways can 10 students be split into two groups of 5 each (the groups are not labelled)?`,
    options: [t`$252$`, t`$126$`, t`$63$`, t`$120$`],
    answer: 1,
    hint: "Choosing group A automatically fixes group B — and the two groups can be swapped.",
    explain: t`Choosing 5 for one group fixes the other: $^{10}C_5 = 252$. But {group 1, group 2} and {group 2, group 1} are the same split since the groups are unlabelled and equal in size, so divide by $2!$: $126$. 252 is right only for two labelled teams.`,
  }),
  q6(2, MAIN, 90, {
    kind: "mcq",
    q: t`Match List I with List II.<br>List I: (P) arrangements of 4 boys in a row; (Q) selections of 2 objects from 6; (R) diagonals of a hexagon; (S) $^4P_2$.<br>List II: (1) 9; (2) 12; (3) 15; (4) 24.`,
    options: [
      "P-4, Q-3, R-1, S-2",
      "P-4, Q-1, R-3, S-2",
      "P-2, Q-3, R-1, S-4",
      "P-4, Q-3, R-2, S-1",
    ],
    answer: 0,
    hint: "Diagonals of an n-gon: n(n − 3)/2.",
    explain: t`(P) $4! = 24$. (Q) $^6C_2 = 15$. (R) $\dfrac{6\cdot3}{2} = 9$. (S) $^4P_2 = 4\cdot3 = 12$. So P-4, Q-3, R-1, S-2.`,
  }),
  q6(2, MAIN, 60, {
    kind: "mcq",
    q: t`In how many ways can 3 boys and 3 girls sit in a row so that boys and girls alternate?`,
    options: [t`$36$`, t`$144$`, t`$72$`, t`$720$`],
    answer: 2,
    hint: "The row may start with a boy or with a girl.",
    explain: t`Pattern BGBGBG or GBGBGB: 2 choices. In each, boys fill their seats in $3!$ ways and girls in $3!$ ways: $2\cdot6\cdot6 = 72$. $36$ forgets the second pattern.`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`Twelve points lie in a plane; exactly 5 of them are collinear and no other three are collinear. The number of distinct straight lines through pairs of these points is:`,
    options: [t`$66$`, t`$56$`, t`$47$`, t`$57$`],
    answer: 3,
    hint: "The 5 collinear points give only one line instead of C(5,2).",
    explain: t`If no three were collinear: $^{12}C_2 = 66$ lines. The 5 collinear points would have given $^5C_2 = 10$ lines but give only 1. So $66 - 10 + 1 = 57$. Forgetting to add back that one line gives 56.`,
  }),
  q6(2, MAIN, 60, {
    kind: "mcq",
    q: t`The number of non-negative integer solutions of $x + y + z = 10$ is:`,
    options: [t`$36$`, t`$66$`, t`$55$`, t`$78$`],
    answer: 1,
    hint: "Stars and bars: 10 stars, 2 bars.",
    explain: t`Arrange 10 stars and 2 bars in a row: $^{12}C_2 = 66$. $36 = {}^9C_2$ is the count of positive solutions; $55 = {}^{11}C_2$ uses one bar too few.`,
  }),
  q6(2, MAIN, 120, {
    kind: "numeric",
    q: t`If $^nC_{r-1} = 120$, $^nC_r = 210$ and $^nC_{r+1} = 252$, find $n + r$.`,
    answer: 14,
    hint: t`Use $\dfrac{^nC_r}{^nC_{r-1}} = \dfrac{n-r+1}{r}$.`,
    explain: t`$\dfrac{n-r+1}{r} = \dfrac{210}{120} = \dfrac74 \Rightarrow 4n + 4 = 11r$. $\dfrac{n-r}{r+1} = \dfrac{252}{210} = \dfrac65 \Rightarrow 5n = 11r + 6$. Subtracting: $5n - 4n - 4 = 6 \Rightarrow n = 10$, then $r = 4$. Check: $^{10}C_3 = 120$, $^{10}C_4 = 210$, $^{10}C_5 = 252$. So $n + r = 14$.`,
  }),
  q6(2, MAIN, 90, {
    kind: "mcq",
    q: t`In how many arrangements of the letters of BALLOON are the two L's not next to each other?`,
    options: [t`$1260$`, t`$360$`, t`$900$`, t`$1080$`],
    answer: 2,
    hint: "Total arrangements minus those with LL together.",
    explain: t`BALLOON has 7 letters with L and O each twice: total $\dfrac{7!}{2!\,2!} = 1260$. With LL as one block: 6 units with O twice, $\dfrac{6!}{2!} = 360$. Not together: $1260 - 360 = 900$.`,
  }),
  q6(2, MAIN, 75, {
    kind: "mcq",
    q: t`How many 3-digit numbers contain at least one digit 7?`,
    options: [t`$225$`, t`$648$`, t`$252$`, t`$271$`],
    answer: 2,
    hint: "Count the complement: 3-digit numbers with no 7.",
    explain: t`All 3-digit numbers: 900. With no 7: hundreds digit 8 choices (not 0, not 7), tens 9, units 9: $648$. At least one 7: $900 - 648 = 252$. $648$ is the complement itself.`,
  }),
  q6(2, MAIN, 90, {
    kind: "mcq",
    q: t`From 6 consonants and 3 vowels, how many 4-letter words (all letters different) can be formed that contain exactly 2 consonants and 2 vowels?`,
    options: [t`$45$`, t`$1080$`, t`$540$`, t`$2160$`],
    answer: 1,
    hint: "Select the letters first, then arrange the 4 chosen letters.",
    explain: t`Choose consonants: $^6C_2 = 15$; vowels: $^3C_2 = 3$; arrange the 4 letters: $4! = 24$. Total $15\cdot3\cdot24 = 1080$. $45$ counts only the selections.`,
  }),
  q6(3, ADV, 150, {
    kind: "multi",
    q: t`For integers $n \ge 2$ and $2 \le r \le n$, which of the following are true?`,
    options: [
      t`$^nC_r + 2\,{}^nC_{r-1} + {}^nC_{r-2} = {}^{n+2}C_r$`,
      t`$\dfrac{^nC_r}{^nC_{r-1}} = \dfrac{n-r}{r}$`,
      t`$^nP_r = n\cdot{}^{n-1}P_{r-1}$`,
      t`$^{2n}C_n$ is odd for every $n \ge 1$`,
    ],
    answers: [0, 2],
    hint: "Apply Pascal's rule twice for (A).",
    explain: t`(A) $(^nC_r + {}^nC_{r-1}) + (^nC_{r-1} + {}^nC_{r-2}) = {}^{n+1}C_r + {}^{n+1}C_{r-1} = {}^{n+2}C_r$ — true. (B) the ratio is $\dfrac{n-r+1}{r}$ — false. (C) $^nP_r = \dfrac{n!}{(n-r)!} = n\cdot\dfrac{(n-1)!}{((n-1)-(r-1))!}$ — true (choose the first place in $n$ ways). (D) $^{2}C_1 = 2$ is even — false. Correct: A, C.`,
  }),
  q6(3, ADV, 120, {
    kind: "numeric",
    q: t`In how many ways can 5 distinct balls be placed in 3 distinct boxes so that no box is empty?`,
    answer: 150,
    hint: "Inclusion–exclusion on the boxes left empty.",
    explain: t`All placements: $3^5 = 243$. Subtract those missing a given box: $3\cdot2^5 = 96$; add back those missing two boxes: $3\cdot1^5 = 3$. Total $243 - 96 + 3 = 150$. (Check by patterns: (3,1,1) gives $3\cdot{}^5C_3\cdot2 = 60$ and (2,2,1) gives $3\cdot5\cdot{}^4C_2 = 90$; sum 150.)`,
  }),
  q6(3, ADV, 120, {
    kind: "mcq",
    q: t`Five letters are written to five different people and their addressed envelopes are prepared. In how many ways can the letters be put into the envelopes (one each) so that no letter goes into its correct envelope?`,
    options: [t`$119$`, t`$44$`, t`$76$`, t`$53$`],
    answer: 1,
    hint: t`Derangements: $D_n = n!\left(1 - \frac1{1!} + \frac1{2!} - \cdots + \frac{(-1)^n}{n!}\right)$.`,
    explain: t`$D_5 = 120\left(1 - 1 + \tfrac12 - \tfrac16 + \tfrac1{24} - \tfrac1{120}\right) = 60 - 20 + 5 - 1 = 44$. $119 = 5! - 1$ only excludes "all correct"; $76 = 120 - 44$ counts arrangements with at least one letter correct.`,
  }),
  q6(3, ADV, 150, {
    kind: "multi",
    q: t`Four boys and three girls (all distinct) are to stand in a row. Which of the following counts are correct?`,
    options: [
      "No two girls together: 720 ways",
      "All three girls together: 720 ways",
      "Boys and girls alternate: 144 ways",
      "A particular boy stands at one of the two ends: 1440 ways",
    ],
    answers: [1, 2, 3],
    hint: "For 'no two girls together', place the boys first and put the girls in the gaps.",
    explain: t`(A) Boys in $4! = 24$ ways create 5 gaps; choose and fill 3: $^5P_3 = 60$; total $1440$, not 720 — false. (B) Girls as one block: $5!\cdot3! = 720$ — true. (C) Only the pattern BGBGBGB works: $4!\cdot3! = 144$ — true. (D) 2 ends for the boy, $6!$ for the rest: $1440$ — true. Correct: B, C, D.`,
  }),
  q6(3, ADV, 150, {
    kind: "numeric",
    q: t`How many 5-digit numbers divisible by 3 can be formed using the digits 0, 1, 2, 3, 4, 5 without repetition?`,
    answer: 216,
    hint: "The six digits add up to 15. Which single digit can be left out?",
    explain: t`A number is divisible by 3 when its digit sum is. The six digits sum to 15, so the omitted digit must be a multiple of 3: omit 0 or 3. Omit 0: digits 1–5, $5! = 120$ numbers. Omit 3: digits 0, 1, 2, 4, 5, with 0 not first: $5! - 4! = 96$. Total $216$.`,
  }),
  q6(3, ADV, 150, {
    kind: "mcq",
    q: t`The number of different selections of 4 letters that can be made from the letters of the word EXAMINATION is:`,
    options: [t`$70$`, t`$330$`, t`$136$`, t`$133$`],
    answer: 2,
    hint: "8 distinct letters; A, I, N occur twice. Split by how many pairs of alike letters are chosen.",
    explain: t`Distinct letters: E, X, A, M, I, N, T, O (8), with A, I, N available twice. All four different: $^8C_4 = 70$. One alike pair and two other different letters: $^3C_1\cdot{}^7C_2 = 63$. Two alike pairs: $^3C_2 = 3$. Total $136$. $330 = {}^{11}C_4$ treats all 11 letters as distinct.`,
  }),
  q6(3, ADV, 120, {
    kind: "numeric",
    q: t`Find the number of solutions of $x_1 + x_2 + x_3 = 15$ in which every $x_i$ is a positive odd integer.`,
    answer: 28,
    hint: t`Write $x_i = 2y_i + 1$ with $y_i \ge 0$.`,
    explain: t`With $x_i = 2y_i + 1$: $2(y_1 + y_2 + y_3) + 3 = 15 \Rightarrow y_1 + y_2 + y_3 = 6$, $y_i \ge 0$. Number of solutions: $^{8}C_2 = 28$.`,
  }),
  q6(3, ADV, 150, {
    kind: "multi",
    q: t`For a regular 10-sided polygon, which of the following are correct?`,
    options: [
      "Number of triangles with vertices at its vertices = 120",
      "Number of diagonals = 35",
      "Number of such triangles having no side in common with the polygon = 50",
      "Number of such triangles having exactly one side in common with the polygon = 50",
    ],
    answers: [0, 1, 2],
    hint: "For exactly one common side: pick the side, then a third vertex not adjacent to either end.",
    explain: t`(A) $^{10}C_3 = 120$. (B) $\dfrac{10\cdot7}{2} = 35$. (D) Exactly one side: choose the side (10 ways) and a third vertex not adjacent to its ends ($10 - 4 = 6$ ways): $60$, so D is false. Exactly two sides: 3 consecutive vertices, 10 ways. (C) None: $120 - 60 - 10 = 50$ — true. Correct: A, B, C.`,
  }),
  q6(3, ADV, 120, {
    kind: "mcq",
    q: t`In how many ways can 12 distinct books be distributed equally among 3 students?`,
    options: [t`$5775$`, t`$495$`, t`$34650$`, t`$3^{12}$`],
    answer: 2,
    hint: "The students are different people, so the three bundles are labelled.",
    explain: t`Give 4 books to the first student ($^{12}C_4$), 4 of the rest to the second ($^8C_4$) and the remaining 4 to the third: $495\cdot70\cdot1 = 34650 = \dfrac{12!}{(4!)^3}$. $5775 = \dfrac{12!}{(4!)^3\,3!}$ is the number of ways to split into three unlabelled bundles; $3^{12}$ ignores "equally".`,
  }),
  q6(3, ADV, 150, {
    kind: "multi",
    q: t`For $N = 7200$, which of the following are correct?`,
    options: [
      "N has 54 positive divisors",
      "N has 45 even positive divisors",
      "N has 18 positive divisors that are perfect squares",
      "N can be written as a product of two coprime positive factors (order ignored) in 4 ways",
    ],
    answers: [0, 1, 3],
    hint: t`$7200 = 2^5\cdot3^2\cdot5^2$.`,
    explain: t`$7200 = 2^5 3^2 5^2$. (A) $6\cdot3\cdot3 = 54$ — true. (B) even: exponent of 2 from 1 to 5, $5\cdot3\cdot3 = 45$ — true. (C) squares need even exponents: $\{0,2,4\}\times\{0,2\}\times\{0,2\}$, $3\cdot2\cdot2 = 12$, not 18 — false. (D) each prime power goes wholly to one factor: $2^3 = 8$ ordered ways, $8/2 = 4$ unordered — true. Correct: A, B, D.`,
  }),
  q6(3, ADV, 120, {
    kind: "mcq",
    q: t`In how many arrangements of the letters of SUCCESS are no two S's adjacent?`,
    options: [t`$420$`, t`$60$`, t`$120$`, t`$300$`],
    answer: 2,
    hint: "Arrange U, C, C, E first and put the three S's into the gaps.",
    explain: t`Arrange U, C, C, E: $\dfrac{4!}{2!} = 12$ ways. These create 5 gaps; choose 3 for the identical S's: $^5C_3 = 10$. Total $120$. $420 = \dfrac{7!}{3!\,2!}$ is the unrestricted count; using $^5P_3$ instead of $^5C_3$ would treat the S's as distinct.`,
  }),
];
