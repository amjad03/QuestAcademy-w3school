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
