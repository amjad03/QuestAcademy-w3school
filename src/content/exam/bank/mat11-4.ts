import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 11 Maths — Limits and Derivatives, Statistics, Probability.
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
  12: "Limits and Derivatives",
  13: "Statistics",
  14: "Probability",
};

/** Builds the questions of one chapter, numbering ids mat11-4-<ch>-<n>. */
function chapter(ch: number) {
  let n = 0;
  return (difficulty: D, exams: ExamId[], idealTime: number, body: Body): ExamQuestion =>
    ({
      id: `mat11-4-${ch}-${String(++n).padStart(3, "0")}`,
      subject: "maths",
      chapter: CH[ch],
      grade: "11",
      exams,
      difficulty,
      idealTime,
      ...body,
    }) as ExamQuestion;
}

/** Board / KCET / COMEDK level and JEE Main level MCQs. */
const BASIC: ExamId[] = ["JEE", "KCET", "COMEDK"];
const MAIN: ExamId[] = ["JEE", "KCET", "COMEDK"];
/** JEE Main numerical-value items (KCET / COMEDK have no numericals). */
const NUM: ExamId[] = ["JEE"];
const NUM_ADV: ExamId[] = ["JEE", "JEE_ADV"];
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
/* Chapter 12 — Limits and Derivatives                                 */
/* ================================================================== */
const q12 = chapter(12);
const ch12: ExamQuestion[] = [
  q12(1, BASIC, 45, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$ equals:`,
    options: [t`$0$`, t`$2$`, t`$4$`, "The limit does not exist"],
    answer: 2,
    explain: t`Direct substitution gives $\frac00$, so factor: $\frac{(x-2)(x+2)}{x-2} = x+2$ for $x\ne2$. Hence the limit is $2+2 = 4$. "Does not exist" confuses the undefined value $f(2)$ with the limit; $0$ comes from substituting only in the numerator.`,
  }),
  q12(1, BASIC, 45, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to1}\frac{x^{10}-1}{x-1}$ equals:`,
    options: [t`$10$`, t`$9$`, t`$1$`, t`$0$`],
    answer: 0,
    explain: t`Use $\displaystyle\lim_{x\to a}\frac{x^n-a^n}{x-a} = na^{n-1}$ with $n = 10$, $a = 1$: the limit is $10\cdot1^9 = 10$. The answer $9$ uses the exponent $n-1$ in place of the coefficient $n$.`,
  }),
  q12(1, BASIC, 45, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{\sin3x}{x}$ equals:`,
    options: [t`$1$`, t`$\frac13$`, t`$3$`, t`$0$`],
    answer: 2,
    explain: t`$\frac{\sin3x}{x} = 3\cdot\frac{\sin3x}{3x}\to3\cdot1 = 3$. Writing $\frac13$ inverts the factor; writing $1$ forgets to match the angle $3x$ in the denominator.`,
  }),
  q12(1, BASIC, 50, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{\tan5x}{\sin2x}$ equals:`,
    options: [t`$\frac25$`, t`$\frac52$`, t`$1$`, t`$10$`],
    answer: 1,
    explain: t`$\frac{\tan5x}{\sin2x} = \frac{\tan5x}{5x}\cdot\frac{2x}{\sin2x}\cdot\frac{5x}{2x}\to1\cdot1\cdot\frac52 = \frac52$. $\frac25$ inverts the ratio and $10$ multiplies the coefficients.`,
  }),
  q12(1, BASIC, 45, {
    kind: "mcq",
    q: t`If $f(x) = x^3$, then $f'(2)$ is:`,
    options: [t`$8$`, t`$6$`, t`$12$`, t`$4$`],
    answer: 2,
    explain: t`$f'(x) = 3x^2$, so $f'(2) = 3\cdot4 = 12$. $8$ is $f(2)$, not the derivative; $6$ comes from $3\cdot2$ (forgetting to square).`,
  }),
  q12(1, BASIC, 45, {
    kind: "mcq",
    q: t`$\dfrac{d}{dx}(x\sin x)$ equals:`,
    options: [t`$x\cos x$`, t`$\cos x+x\sin x$`, t`$\sin x-x\cos x$`, t`$\sin x+x\cos x$`],
    answer: 3,
    explain: t`Product rule $(uv)' = u'v+uv'$ with $u = x$, $v = \sin x$: $1\cdot\sin x+x\cos x$. The option $x\cos x$ differentiates only the second factor; $\cos x+x\sin x$ swaps the roles.`,
  }),
  q12(1, BASIC, 40, {
    kind: "mcq",
    q: t`The derivative of $\dfrac1x$ ($x\ne0$) is:`,
    options: [t`$-\dfrac1{x^2}$`, t`$\dfrac1{x^2}$`, t`$-\dfrac1x$`, t`$\log x$`],
    answer: 0,
    explain: t`$\frac1x = x^{-1}$, so by the power rule the derivative is $-1\cdot x^{-2} = -\frac1{x^2}$. Dropping the sign gives $\frac1{x^2}$; $\log x$ is an antiderivative, not a derivative.`,
  }),
  q12(1, BASIC, 50, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{(1+x)^5-1}{x}$ equals:`,
    options: [t`$1$`, t`$5$`, t`$0$`, t`$4$`],
    answer: 1,
    explain: t`Put $y = 1+x$; as $x\to0$, $y\to1$ and the limit becomes $\displaystyle\lim_{y\to1}\frac{y^5-1^5}{y-1} = 5\cdot1^4 = 5$. (Equivalently, it is the derivative of $(1+x)^5$ at $0$.)`,
  }),
  q12(1, BASIC, 45, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0^-}\frac{|x|}{x}$ equals:`,
    options: [t`$1$`, t`$0$`, t`$-1$`, "Does not exist"],
    answer: 2,
    explain: t`For $x<0$, $|x| = -x$, so $\frac{|x|}{x} = -1$ and the left-hand limit is $-1$. The two-sided limit does not exist (right-hand limit is $+1$), but the question asks only for the left-hand limit.`,
  }),
  q12(1, BASIC, 40, {
    kind: "mcq",
    q: t`$\dfrac{d}{dx}(\tan x)$ equals:`,
    options: [t`$\sec x\tan x$`, t`$-\csc^2x$`, t`$\cot x$`, t`$\sec^2x$`],
    answer: 3,
    explain: t`$\tan x = \frac{\sin x}{\cos x}$; the quotient rule gives $\frac{\cos^2x+\sin^2x}{\cos^2x} = \sec^2x$. $\sec x\tan x$ is the derivative of $\sec x$; $-\csc^2x$ is that of $\cot x$.`,
  }),
  q12(1, BASIC, 50, {
    kind: "mcq",
    q: t`$\dfrac{d}{dx}\left(\dfrac{x+1}{x-1}\right)$ ($x\ne1$) equals:`,
    options: [t`$\dfrac{2}{(x-1)^2}$`, t`$\dfrac{-2}{(x-1)^2}$`, t`$\dfrac{-2}{(x+1)^2}$`, t`$1$`],
    answer: 1,
    explain: t`Quotient rule: $\dfrac{(x-1)\cdot1-(x+1)\cdot1}{(x-1)^2} = \dfrac{-2}{(x-1)^2}$. Reversing the order in the numerator ($u'v-uv'$ written as $uv'-u'v$) gives the wrong sign.`,
  }),
  q12(1, BASIC, 50, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$ equals:`,
    options: [t`$1$`, t`$2$`, t`$\frac12$`, t`$0$`],
    answer: 2,
    explain: t`$1-\cos x = 2\sin^2\frac x2$, so $\dfrac{1-\cos x}{x^2} = \dfrac{2\sin^2(x/2)}{x^2} = \dfrac12\left(\dfrac{\sin(x/2)}{x/2}\right)^2\to\dfrac12$. Forgetting the half-angle gives $2$ or $1$.`,
  }),
  q12(1, NUM, 50, {
    kind: "numeric",
    q: t`Find $\displaystyle\lim_{x\to2}\frac{x^5-32}{x-2}$.`,
    answer: 80,
    explain: t`$32 = 2^5$, so the limit is $\displaystyle\lim_{x\to2}\frac{x^5-2^5}{x-2} = 5\cdot2^4 = 80$.`,
  }),
  q12(2, MAIN, 70, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{\sqrt{1+x}-\sqrt{1-x}}{x}$ equals:`,
    options: [t`$0$`, t`$\frac12$`, t`$2$`, t`$1$`],
    answer: 3,
    hint: "Rationalise the numerator.",
    explain: t`Multiply by $\sqrt{1+x}+\sqrt{1-x}$: the numerator becomes $(1+x)-(1-x) = 2x$, so the expression is $\dfrac{2}{\sqrt{1+x}+\sqrt{1-x}}\to\dfrac22 = 1$. $\frac12$ is the limit of $\frac{\sqrt{1+x}-1}{x}$, only half the expression.`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to\infty}\frac{3x^2+2x}{5x^2-1}$ equals:`,
    options: [t`$\frac35$`, t`$\frac53$`, t`$0$`, t`$-2$`],
    answer: 0,
    hint: t`Divide numerator and denominator by $x^2$.`,
    explain: t`$\dfrac{3+2/x}{5-1/x^2}\to\dfrac{3}{5}$. When the degrees are equal the limit is the ratio of leading coefficients. $-2$ is what you get by (wrongly) substituting $x = 0$.`,
  }),
  q12(2, MAIN, 75, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to\pi/2}\frac{1-\sin x}{\left(\frac\pi2-x\right)^2}$ equals:`,
    options: [t`$1$`, t`$\frac12$`, t`$\frac14$`, t`$0$`],
    answer: 1,
    hint: t`Put $h = \frac\pi2-x$.`,
    explain: t`With $h = \frac\pi2-x\to0$, $\sin x = \cos h$, so the limit is $\displaystyle\lim_{h\to0}\frac{1-\cos h}{h^2} = \frac12$. $\frac14$ comes from wrongly taking $1-\cos h\approx\frac{h^2}4$; $0$ if you stop at the numerator tending to $0$.`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`For $a+b\ne0$, $\displaystyle\lim_{x\to0}\frac{\sin ax+bx}{ax+\sin bx}$ equals:`,
    options: [t`$\frac ab$`, t`$\frac ba$`, t`$1$`, t`$0$`],
    answer: 2,
    hint: t`Divide numerator and denominator by $x$.`,
    explain: t`Dividing by $x$: $\dfrac{\frac{\sin ax}{x}+b}{a+\frac{\sin bx}{x}}\to\dfrac{a+b}{a+b} = 1$. $\frac ab$ comes from keeping only the sine in the numerator and only $ax$ in the denominator.`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`Let $f(x) = x+2$ for $x\le1$ and $f(x) = cx^2$ for $x>1$. If $\displaystyle\lim_{x\to1}f(x)$ exists, then $c$ equals:`,
    options: [t`$1$`, t`$3$`, t`$2$`, t`$-3$`],
    answer: 1,
    hint: "A limit exists only if the left- and right-hand limits are equal.",
    explain: t`LHL $= 1+2 = 3$; RHL $= c\cdot1^2 = c$. Equating, $c = 3$.`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`For $a>0$, $\displaystyle\lim_{x\to a}\frac{x^{2/3}-a^{2/3}}{x-a}$ equals:`,
    options: [t`$\frac23a^{-1/3}$`, t`$\frac23a^{1/3}$`, t`$\frac32a^{1/2}$`, t`$\frac23a^{-2/3}$`],
    answer: 0,
    hint: t`$\displaystyle\lim_{x\to a}\frac{x^n-a^n}{x-a} = na^{n-1}$ holds for rational $n$ too.`,
    explain: t`With $n = \frac23$: $na^{n-1} = \frac23a^{-1/3}$. $\frac23a^{1/3}$ adds 1 to the exponent instead of subtracting; $\frac23a^{-2/3}$ uses $-n$ as the new exponent.`,
  }),
  q12(2, NUM, 70, {
    kind: "numeric",
    q: t`If $n\in\mathbb N$ and $\displaystyle\lim_{x\to2}\frac{x^n-2^n}{x-2} = 80$, find $n$.`,
    answer: 5,
    hint: t`The limit is $n\cdot2^{n-1}$.`,
    explain: t`$n\cdot2^{n-1} = 80$. Trying values: $n = 4$ gives $32$, $n = 5$ gives $5\cdot16 = 80$. Since $n2^{n-1}$ increases with $n$, $n = 5$ is the only solution.`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{h\to0}\frac{\cos(x+h)-\cos x}{h}$ equals:`,
    options: [t`$\sin x$`, t`$-\cos x$`, t`$-\sin x$`, t`$0$`],
    answer: 2,
    hint: t`Use $\cos C-\cos D = -2\sin\frac{C+D}2\sin\frac{C-D}2$.`,
    explain: t`$\cos(x+h)-\cos x = -2\sin\left(x+\frac h2\right)\sin\frac h2$. Dividing by $h$: $-\sin\left(x+\frac h2\right)\cdot\frac{\sin(h/2)}{h/2}\to-\sin x$. This is the first-principles derivative of $\cos x$; forgetting the minus sign gives $\sin x$.`,
  }),
  q12(2, MAIN, 75, {
    kind: "mcq",
    q: t`$\dfrac{d}{dx}\left(\dfrac{\sin x}{1+\cos x}\right)$ equals:`,
    options: [t`$\dfrac{1}{1+\cos x}$`, t`$\dfrac{\cos x}{1+\cos x}$`, t`$\dfrac{-1}{1+\cos x}$`, t`$\sec^2\dfrac x2$`],
    answer: 0,
    hint: "Quotient rule, then use sin² + cos² = 1.",
    explain: t`$\dfrac{(1+\cos x)\cos x-\sin x(-\sin x)}{(1+\cos x)^2} = \dfrac{\cos x+1}{(1+\cos x)^2} = \dfrac1{1+\cos x}$. Check: $\frac{\sin x}{1+\cos x} = \tan\frac x2$, whose derivative is $\frac12\sec^2\frac x2 = \frac1{1+\cos x}$. The option $\sec^2\frac x2$ forgets the chain-rule factor $\frac12$.`,
  }),
  q12(2, NUM, 80, {
    kind: "numeric",
    q: t`Let $f(x) = x+\dfrac{x^2}2+\dfrac{x^3}3+\cdots+\dfrac{x^{10}}{10}$. Find $f'(2)$.`,
    answer: 1023,
    hint: t`Each term $\frac{x^k}k$ differentiates to $x^{k-1}$.`,
    explain: t`$f'(x) = 1+x+x^2+\cdots+x^9 = \dfrac{x^{10}-1}{x-1}$. At $x = 2$: $2^{10}-1 = 1023$.`,
  }),
  q12(2, MAIN, 70, {
    kind: "mcq",
    q: t`If $f(x) = (1+x)(1+2x)(1+3x)(1+4x)$, then $f'(0)$ equals:`,
    options: [t`$24$`, t`$1$`, t`$10$`, t`$0$`],
    answer: 2,
    hint: t`Only the linear term of $f(x)$ matters at $x = 0$.`,
    explain: t`Expanding, $f(x) = 1+(1+2+3+4)x+(\text{higher powers})$, so $f'(0) = 10$. Equivalently, by the product rule, $f'(0) = f(0)\left(1+2+3+4\right)$ with $f(0) = 1$. $24 = 1\cdot2\cdot3\cdot4$ multiplies the coefficients instead of adding them.`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`**Statement I:** $\displaystyle\lim_{x\to0}\frac{|x|}{x}$ does not exist.  
**Statement II:** The left-hand limit of $\frac{|x|}{x}$ at $0$ is $-1$ and the right-hand limit is $1$.`,
    options: S12,
    answer: 0,
    hint: "Compare the one-sided limits.",
    explain: t`For $x>0$ the expression is $1$; for $x<0$ it is $-1$. So RHL $= 1$, LHL $= -1$ (Statement II true), and since they differ the limit does not exist (Statement I true).`,
  }),
  q12(2, MAIN, 60, {
    kind: "mcq",
    q: t`**Assertion (A):** If $x$ is measured in degrees, $\displaystyle\lim_{x\to0}\frac{\sin x}{x} = 1$.  
**Reason (R):** $\displaystyle\lim_{\theta\to0}\frac{\sin\theta}{\theta} = 1$ when $\theta$ is in radians.`,
    options: AR,
    answer: 3,
    hint: t`$x^\circ = \frac{\pi x}{180}$ radians.`,
    explain: t`R is the standard limit (true). In degrees, $\sin x^\circ = \sin\frac{\pi x}{180}$, so $\displaystyle\lim_{x\to0}\frac{\sin(\pi x/180)}{x} = \frac{\pi}{180}\ne1$. So A is false.`,
  }),
  q12(2, MAIN, 90, {
    kind: "mcq",
    q: t`Match List I with List II.

| List I | List II |
|---|---|
| (P) $\displaystyle\lim_{x\to0}\frac{\sin2x}{x}$ | (1) $1$ |
| (Q) $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}$ | (2) $\frac12$ |
| (R) $\displaystyle\lim_{x\to1}\frac{x^3-1}{x-1}$ | (3) $2$ |
| (S) $\displaystyle\lim_{x\to0}\frac{\tan x}{x}$ | (4) $3$ |`,
    options: [
      "P-3, Q-2, R-4, S-1",
      "P-3, Q-1, R-4, S-2",
      "P-2, Q-3, R-4, S-1",
      "P-4, Q-2, R-3, S-1",
    ],
    answer: 0,
    hint: "Evaluate each limit using the standard results.",
    explain: t`(P) $2\cdot\frac{\sin2x}{2x}\to2$. (Q) $\frac12$ (half-angle). (R) $3\cdot1^2 = 3$. (S) $1$. So P-3, Q-2, R-4, S-1.`,
  }),
  q12(2, MAIN, 80, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{\tan x-\sin x}{x^3}$ equals:`,
    options: [t`$0$`, t`$1$`, t`$\frac16$`, t`$\frac12$`],
    answer: 3,
    hint: t`Factor: $\tan x-\sin x = \tan x(1-\cos x)$.`,
    explain: t`$\dfrac{\tan x(1-\cos x)}{x^3} = \dfrac{\tan x}{x}\cdot\dfrac{1-\cos x}{x^2}\to1\cdot\dfrac12 = \dfrac12$. Splitting into $\frac{\tan x}{x^3}-\frac{\sin x}{x^3}$ and "cancelling" each to $\frac1{x^2}$ wrongly gives $0$.`,
  }),
  q12(2, MAIN, 70, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{\cos ax-\cos bx}{x^2}$ equals:`,
    options: [t`$\dfrac{a^2-b^2}{2}$`, t`$\dfrac{b^2-a^2}{2}$`, t`$b^2-a^2$`, t`$\dfrac{b-a}{2}$`],
    answer: 1,
    hint: t`Write it as $\frac{(1-\cos bx)-(1-\cos ax)}{x^2}$.`,
    explain: t`$\dfrac{1-\cos bx}{x^2}\to\dfrac{b^2}2$ and $\dfrac{1-\cos ax}{x^2}\to\dfrac{a^2}2$. The given expression equals $\frac{1-\cos bx}{x^2}-\frac{1-\cos ax}{x^2}\to\frac{b^2-a^2}2$. The sign trap gives $\frac{a^2-b^2}2$.`,
  }),
  q12(2, MAIN, 80, {
    kind: "mcq",
    q: t`$\dfrac{d}{dx}\left(\dfrac{\sin x+\cos x}{\sin x-\cos x}\right)$ equals:`,
    options: [t`$\dfrac{2}{(\sin x-\cos x)^2}$`, t`$\dfrac{-1}{(\sin x-\cos x)^2}$`, t`$\dfrac{-2}{(\sin x-\cos x)^2}$`, t`$0$`],
    answer: 2,
    hint: t`$(s-c)^2+(s+c)^2 = 2$.`,
    explain: t`With $u = s+c$, $v = s-c$: $u' = c-s = -v$, $v' = c+s = u$. So $\dfrac{u'v-uv'}{v^2} = \dfrac{-v^2-u^2}{v^2} = \dfrac{-2}{(\sin x-\cos x)^2}$, using $(s-c)^2+(s+c)^2 = 2(s^2+c^2) = 2$.`,
  }),
  q12(2, MAIN, 70, {
    kind: "mcq",
    q: t`If $f(x) = x|x|$, then $f'(x)$ for all real $x$ is:`,
    options: [t`$2x$`, t`$|x|$`, t`$2|x|$`, t`$2x|x|$`],
    answer: 2,
    hint: "Treat x > 0, x < 0 and x = 0 separately.",
    explain: t`For $x>0$, $f = x^2$, $f' = 2x = 2|x|$. For $x<0$, $f = -x^2$, $f' = -2x = 2|x|$. At $0$: $\displaystyle\lim_{h\to0}\frac{h|h|}{h} = \lim|h| = 0 = 2|0|$. So $f'(x) = 2|x|$; $2x$ is wrong for negative $x$.`,
  }),
  q12(2, NUM, 70, {
    kind: "numeric",
    q: t`Find $\displaystyle\lim_{x\to0}\frac{x\tan2x}{1-\cos4x}$.`,
    answer: 0.25,
    tolerance: 0.01,
    hint: t`$1-\cos4x = 2\sin^22x$.`,
    explain: t`$\dfrac{x\tan2x}{2\sin^22x} = \dfrac{2x^2\cdot\frac{\tan2x}{2x}}{2\cdot4x^2\left(\frac{\sin2x}{2x}\right)^2}\to\dfrac{2}{8} = 0.25$.`,
  }),
  q12(2, MAIN, 80, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to1}\frac{x+x^2+x^3+\cdots+x^n-n}{x-1}$ equals:`,
    options: [t`$n$`, t`$\dfrac{n(n+1)}2$`, t`$\dfrac{n(n-1)}2$`, t`$n^2$`],
    answer: 1,
    hint: t`Split $-n$ as $-1$ taken $n$ times.`,
    explain: t`The expression is $\displaystyle\sum_{k=1}^n\frac{x^k-1}{x-1}\to\sum_{k=1}^nk = \frac{n(n+1)}2$. $\frac{n(n-1)}2$ comes from using $k-1$ in place of $k$.`,
  }),
  q12(3, ADV_ONLY, 120, {
    kind: "multi",
    q: "Which of the following limits equal 1?",
    options: [
      t`$\displaystyle\lim_{x\to0}\frac{\sin(x^2)}{x^2}$`,
      t`$\displaystyle\lim_{x\to0}\frac{1-\cos x}{x\sin x}$`,
      t`$\displaystyle\lim_{x\to0}\frac{\tan(\sin x)}{x}$`,
      t`$\displaystyle\lim_{x\to\infty}x\sin\frac1x$`,
    ],
    answers: [0, 2, 3],
    hint: t`In each, try to create the form $\frac{\sin u}{u}$ or $\frac{\tan u}{u}$ with $u\to0$.`,
    explain: t`(a) $u = x^2\to0$: $\frac{\sin u}u\to1$ ✓. (b) $\frac{1-\cos x}{x^2}\cdot\frac{x}{\sin x}\to\frac12\cdot1 = \frac12$ ✗. (c) $\frac{\tan(\sin x)}{\sin x}\cdot\frac{\sin x}{x}\to1\cdot1$ ✓. (d) $u = \frac1x\to0^+$: $\frac{\sin u}u\to1$ ✓.`,
  }),
  q12(3, ADV_ONLY, 100, {
    kind: "multi",
    q: t`Let $[x]$ denote the greatest integer $\le x$. Which of the following are true?`,
    options: [
      t`$\displaystyle\lim_{x\to2^-}[x] = 1$`,
      t`$\displaystyle\lim_{x\to2^+}[x] = 2$`,
      t`$\displaystyle\lim_{x\to2}[x]$ exists`,
      t`$\displaystyle\lim_{x\to2.5}[x] = 2$`,
    ],
    answers: [0, 1, 3],
    hint: "The greatest integer function jumps only at integers.",
    explain: t`Just left of 2 (e.g. 1.99), $[x] = 1$ ✓; just right of 2, $[x] = 2$ ✓. The one-sided limits differ, so the limit at 2 does not exist ✗. Near $2.5$ the function is constant $2$, so that limit is $2$ ✓.`,
  }),
  q12(3, NUM_ADV, 150, {
    kind: "numeric",
    q: t`If $\displaystyle\lim_{x\to0}\frac{x(2+a\cos x)-b\sin x}{x^3} = 2$, find $a+b$.`,
    answer: -8,
    hint: t`Use $\sin x\approx x-\frac{x^3}6$ and $\cos x\approx1-\frac{x^2}2$ near $0$; the coefficient of $x$ in the numerator must vanish.`,
    explain: t`Numerator $\approx 2x+ax\left(1-\frac{x^2}2\right)-b\left(x-\frac{x^3}6\right) = (2+a-b)x+\left(\frac b6-\frac a2\right)x^3$. For a finite limit, $2+a-b = 0$; then the limit is $\frac b6-\frac a2 = 2$, i.e. $b-3a = 12$. With $b = a+2$: $-2a+2 = 12\Rightarrow a = -5$, $b = -3$. So $a+b = -8$.`,
  }),
  q12(3, ADV, 120, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{\sin\left(\pi\cos^22x\right)}{x^2}$ equals:`,
    options: [t`$-4\pi$`, t`$\pi$`, t`$4\pi$`, t`$2\pi$`],
    answer: 2,
    hint: t`$\sin(\pi-\theta) = \sin\theta$ and $\cos^22x = 1-\sin^22x$.`,
    explain: t`$\sin(\pi\cos^22x) = \sin(\pi-\pi\sin^22x) = \sin(\pi\sin^22x)$. As $x\to0$, $u = \pi\sin^22x\to0$ and $\frac{\sin u}{x^2} = \frac{\sin u}{u}\cdot\frac{\pi\sin^22x}{x^2}\to1\cdot4\pi$. The answer $-4\pi$ comes from writing $\sin(\pi-\theta) = -\sin\theta$; $\pi$ forgets the factor $4$ from $\sin2x\approx2x$.`,
  }),
  q12(3, ADV, 120, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{1-\cos x\cos2x}{x^2}$ equals:`,
    options: [t`$\frac32$`, t`$\frac52$`, t`$2$`, t`$\frac12$`],
    answer: 1,
    hint: t`$\cos x\cos2x = \frac12(\cos3x+\cos x)$.`,
    explain: t`$1-\cos x\cos2x = \frac12\left[(1-\cos3x)+(1-\cos x)\right]$. Dividing by $x^2$: $\frac12\left[\frac92+\frac12\right] = \frac52$. $\frac32$ would be the answer with $\sqrt{\cos2x}$ in place of $\cos2x$; $\frac12$ ignores the $\cos2x$ factor.`,
  }),
  q12(3, ADV, 90, {
    kind: "mcq",
    q: t`If $f(x) = (x-1)(x-2)(x-3)\cdots(x-10)$, then $f'(1)$ equals:`,
    options: [t`$9!$`, t`$-9!$`, t`$10!$`, t`$0$`],
    answer: 1,
    hint: "In the product rule, every term except one still contains the factor (x − 1).",
    explain: t`$f'(x) = \sum_k\prod_{j\ne k}(x-j)$. At $x = 1$ every term containing $(x-1)$ vanishes, leaving $(1-2)(1-3)\cdots(1-10) = (-1)(-2)\cdots(-9) = (-1)^9\,9! = -9!$. $0$ comes from thinking that $f(1) = 0$ forces $f'(1) = 0$.`,
  }),
  q12(2, MAIN, 70, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to0}\frac{(1+x)^{1/3}-(1-x)^{1/3}}{x}$ equals:`,
    options: [t`$\frac13$`, t`$0$`, t`$\frac23$`, t`$\frac32$`],
    answer: 2,
    hint: t`Split into $\frac{(1+x)^{1/3}-1}{x}+\frac{1-(1-x)^{1/3}}{x}$.`,
    explain: t`Each piece is of the form $\frac{y^n-1}{y-1}$ with $n = \frac13$: the first tends to $\frac13$, the second (put $y = 1-x$) also to $\frac13$. Total $\frac23$. Getting $0$ means the sign of the second piece was mishandled.`,
  }),
  q12(3, NUM_ADV, 150, {
    kind: "numeric",
    q: t`Find $\displaystyle\lim_{x\to0}\frac{x\tan3x-3x\tan x}{(1-\cos2x)^2}$.`,
    answer: 2,
    hint: t`Use $\tan u\approx u+\frac{u^3}3$ and $1-\cos2x = 2\sin^2x$.`,
    explain: t`$\tan3x\approx3x+9x^3$, $\tan x\approx x+\frac{x^3}3$. Numerator $\approx(3x^2+9x^4)-(3x^2+x^4) = 8x^4$. Denominator $= 4\sin^4x\approx4x^4$. Limit $= \frac84 = 2$. Using only first-order terms gives $\frac00$ and no conclusion.`,
  }),
  q12(3, ADV, 100, {
    kind: "mcq",
    q: t`$\displaystyle\lim_{x\to\pi/4}\frac{\sqrt2-\cos x-\sin x}{\left(x-\frac\pi4\right)^2}$ equals:`,
    options: [t`$\sqrt2$`, t`$\dfrac1{2\sqrt2}$`, t`$0$`, t`$\dfrac1{\sqrt2}$`],
    answer: 3,
    hint: t`$\cos x+\sin x = \sqrt2\cos\left(x-\frac\pi4\right)$.`,
    explain: t`Put $h = x-\frac\pi4$: numerator $= \sqrt2(1-\cos h)$, so the limit is $\sqrt2\cdot\frac12 = \frac1{\sqrt2}$. $\sqrt2$ forgets the $\frac12$; $\frac1{2\sqrt2}$ halves twice.`,
  }),
  q12(3, ADV_ONLY, 120, {
    kind: "multi",
    q: t`Let $f(x) = x^2$ for $x\le1$ and $f(x) = ax+b$ for $x>1$. If $f$ is differentiable at $x = 1$, which of the following are true?`,
    options: [t`$a = 2$`, t`$b = -1$`, t`$a+b = 1$`, t`$ab = 2$`],
    answers: [0, 1, 2],
    hint: "Differentiable ⇒ continuous; then equate the left and right derivatives.",
    explain: t`Continuity at 1: $1 = a+b$. Left derivative $= 2x|_{1} = 2$; right derivative $= a$. So $a = 2$, $b = -1$; $a+b = 1$ ✓, but $ab = -2$, not $2$ ✗.`,
  }),
  q12(3, NUM_ADV, 120, {
    kind: "numeric",
    q: t`A function $f$ satisfies $f(x+y) = f(x)+f(y)+2xy$ for all real $x, y$, and $f'(0) = 3$. Find $f'(2)$.`,
    answer: 7,
    hint: t`Put $x = y = 0$ to get $f(0)$, then use the definition of the derivative.`,
    explain: t`$f(0) = 2f(0)\Rightarrow f(0) = 0$. $f'(x) = \displaystyle\lim_{h\to0}\frac{f(x+h)-f(x)}h = \lim\frac{f(h)+2xh}{h} = f'(0)+2x = 3+2x$ (using $\frac{f(h)}h = \frac{f(h)-f(0)}{h}\to f'(0)$). So $f'(2) = 7$.`,
  }),
  q12(3, ADV, 90, {
    kind: "mcq",
    q: t`For $n\in\mathbb N$, $\dfrac{d}{dx}\left(\sin^nx\cos nx\right)$ equals:`,
    options: [
      t`$n\sin^{n-1}x\cos(n-1)x$`,
      t`$n\sin^{n-1}x\cos(n+1)x$`,
      t`$n\sin^{n-1}x\sin(n+1)x$`,
      t`$-n\sin^nx\sin nx$`,
    ],
    answer: 1,
    hint: t`Product rule, then factor out $n\sin^{n-1}x$ and use $\cos(A+B)$.`,
    explain: t`$n\sin^{n-1}x\cos x\cos nx-n\sin^nx\sin nx = n\sin^{n-1}x(\cos x\cos nx-\sin x\sin nx) = n\sin^{n-1}x\cos(n+1)x$. $\cos(n-1)x$ follows from a sign slip; $-n\sin^nx\sin nx$ is only the second term.`,
  }),
  q12(2, ADV_ONLY, 90, {
    kind: "multi",
    q: "Which of the following are correct?",
    options: [
      t`$\dfrac{d}{dx}\sin^2x = \sin2x$`,
      t`$\dfrac{d}{dx}\cos^2x = -\sin2x$`,
      t`$\dfrac{d}{dx}\left(\sin^2x+\cos^2x\right) = 0$`,
      t`$\dfrac{d}{dx}\tan^2x = 2\tan x\sec x$`,
    ],
    answers: [0, 1, 2],
    explain: t`(a) $2\sin x\cos x = \sin2x$ ✓. (b) $2\cos x(-\sin x) = -\sin2x$ ✓. (c) the sum is the constant 1 ✓ (also (a)+(b)). (d) the chain rule gives $2\tan x\sec^2x$, not $2\tan x\sec x$ ✗.`,
  }),
  q12(2, MAIN, 50, {
    kind: "mcq",
    q: t`**Assertion (A):** If $f(x) = x^n$, then $f'(1) = n$.  
**Reason (R):** $\dfrac{d}{dx}x^n = nx^{n-1}$.`,
    options: AR,
    answer: 0,
    explain: t`R is the power rule. Substituting $x = 1$ gives $f'(1) = n\cdot1^{n-1} = n$, so A follows directly from R.`,
  }),
  q12(2, ADV_ONLY, 90, {
    kind: "multi",
    q: t`Which of the following functions have derivative equal to $0$ at $x = 0$?`,
    options: [t`$x^2$`, t`$\cos x$`, t`$\sin x$`, t`$x|x|$`],
    answers: [0, 1, 3],
    explain: t`$(x^2)' = 2x = 0$ at 0 ✓. $(\cos x)' = -\sin x = 0$ at 0 ✓. $(\sin x)' = \cos x = 1$ at 0 ✗. For $x|x|$: $\displaystyle\lim_{h\to0}\frac{h|h|}{h} = \lim|h| = 0$ ✓.`,
  }),
];
