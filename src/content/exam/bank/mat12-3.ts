import type { ExamId, ExamQuestion, FormulaSheet } from "@/content/types";

/**
 * Class 12 Maths — Integrals, Application of Integrals, Differential Equations.
 * Original exam-style questions (JEE Main / Advanced, KCET, COMEDK).
 * `answer` is the 0-based option index (mcq) or the value (numeric).
 */

const t = String.raw;

type D = 1 | 2 | 3;
const INT = "Integrals";
const AOI = "Application of Integrals";
const DE = "Differential Equations";
const CH_NO: Record<string, string> = { [INT]: "07", [AOI]: "08", [DE]: "09" };
const counters: Record<string, number> = {};

/** Exam presets. */
const ALL: ExamId[] = ["JEE", "KCET", "COMEDK"];
const STATE: ExamId[] = ["KCET", "COMEDK"];
const MAIN: ExamId[] = ["JEE", "COMEDK"];
const ADV: ExamId[] = ["JEE_ADV"];
const JA: ExamId[] = ["JEE", "JEE_ADV"];

function base(ch: string, d: D, exams: ExamId[], idealTime: number) {
  const n = (counters[ch] = (counters[ch] ?? 0) + 1);
  return {
    id: `mat12-3-${CH_NO[ch]}-${String(n).padStart(3, "0")}`,
    subject: "maths" as const,
    chapter: ch,
    grade: "12" as const,
    exams,
    difficulty: d,
    idealTime,
  };
}

interface Body {
  q: string;
  explain: string;
  hint?: string;
}

function mcq(ch: string, d: D, exams: ExamId[], time: number, o: Body & { options: string[]; answer: number }): ExamQuestion {
  return { ...base(ch, d, exams, time), kind: "mcq", ...o };
}
function multi(ch: string, d: D, exams: ExamId[], time: number, o: Body & { options: string[]; answers: number[] }): ExamQuestion {
  return { ...base(ch, d, exams, time), kind: "multi", ...o };
}
function num(ch: string, d: D, exams: ExamId[], time: number, o: Body & { answer: number; tolerance?: number }): ExamQuestion {
  return { ...base(ch, d, exams, time), kind: "numeric", ...o };
}

/* ================================================================== */
/* Chapter 7 — Integrals                                               */
/* ================================================================== */

const integrals: ExamQuestion[] = [
  mcq(INT, 1, ALL, 45, {
    q: t`$\displaystyle\int \left(x^3 + 2x - \frac{1}{x}\right)dx$ equals:`,
    options: [
      t`$\dfrac{x^4}{4} + x^2 - \ln|x| + C$`,
      t`$3x^2 + 2 + \dfrac{1}{x^2} + C$`,
      t`$\dfrac{x^4}{4} + x^2 + \dfrac{1}{x^2} + C$`,
      t`$\dfrac{x^4}{4} + 2x^2 - \ln|x| + C$`,
    ],
    answer: 0,
    explain: t`Integrate term by term with the power rule: $\int x^3dx = x^4/4$, $\int 2x\,dx = x^2$, $\int \frac{1}{x}dx = \ln|x|$. So the answer is $\frac{x^4}{4} + x^2 - \ln|x| + C$. Check: its derivative is $x^3 + 2x - 1/x$. Option 2 is the derivative (not the integral), option 3 wrongly treats $1/x$ with the power rule ($n = -1$ is the exception), option 4 forgets to divide $2x^2$ by 2.`,
  }),
  mcq(INT, 1, ALL, 50, {
    q: t`$\displaystyle\int (\sin x + \cos x)^2\,dx$ is equal to:`,
    options: [
      t`$x + \dfrac{\cos 2x}{2} + C$`,
      t`$x - \dfrac{\cos 2x}{2} + C$`,
      t`$x - \dfrac{\sin 2x}{2} + C$`,
      t`$\dfrac{(\sin x + \cos x)^3}{3} + C$`,
    ],
    answer: 1,
    explain: t`Expand: $(\sin x + \cos x)^2 = 1 + 2\sin x\cos x = 1 + \sin 2x$. Then $\int (1 + \sin 2x)dx = x - \frac{\cos 2x}{2} + C$. Check: $\frac{d}{dx}\left(x - \frac{\cos 2x}{2}\right) = 1 + \sin 2x$. Option 1 has the sign of $\int\sin 2x$ wrong; option 4 uses the power rule on a non-linear inner function, which is invalid.`,
  }),
  mcq(INT, 1, ALL, 50, {
    q: t`$\displaystyle\int \frac{dx}{1 + \cos x}$ is:`,
    options: [
      t`$\cot\dfrac{x}{2} + C$`,
      t`$2\tan\dfrac{x}{2} + C$`,
      t`$\tan\dfrac{x}{2} + C$`,
      t`$-\cot\dfrac{x}{2} + C$`,
    ],
    answer: 2,
    explain: t`Use $1 + \cos x = 2\cos^2\frac{x}{2}$: the integrand is $\frac12\sec^2\frac{x}{2}$, and $\int \frac12\sec^2\frac{x}{2}dx = \frac12\cdot 2\tan\frac{x}{2} = \tan\frac{x}{2} + C$. Check: $\frac{d}{dx}\tan\frac x2 = \frac12\sec^2\frac x2 = \frac{1}{1 + \cos x}$. Option 2 forgets the $\frac12$ from the identity; $-\cot\frac x2$ is the answer for $\int\frac{dx}{1 - \cos x}$.`,
  }),
  mcq(INT, 1, ALL, 45, {
    q: t`$\displaystyle\int x\,e^{x^2}dx$ equals:`,
    options: [
      t`$e^{x^2} + C$`,
      t`$2e^{x^2} + C$`,
      t`$\dfrac{x^2}{2}e^{x^2} + C$`,
      t`$\dfrac{1}{2}e^{x^2} + C$`,
    ],
    answer: 3,
    explain: t`Put $u = x^2$, $du = 2x\,dx$: $\int x e^{x^2}dx = \frac12\int e^u du = \frac12 e^{x^2} + C$. Check: $\frac{d}{dx}\frac12 e^{x^2} = \frac12\cdot 2x e^{x^2} = xe^{x^2}$. $2e^{x^2}$ multiplies by $du/dx$ instead of dividing by it.`,
  }),
  mcq(INT, 1, ALL, 45, {
    q: t`$\displaystyle\int e^{x}(\sin x + \cos x)\,dx$ is:`,
    options: [
      t`$e^x\cos x + C$`,
      t`$e^x\sin x + C$`,
      t`$e^x(\sin x - \cos x) + C$`,
      t`$-e^x\cos x + C$`,
    ],
    answer: 1,
    explain: t`Use $\int e^x\big(f(x) + f'(x)\big)dx = e^x f(x) + C$ with $f = \sin x$, $f' = \cos x$. Answer $e^x\sin x + C$; differentiating gives $e^x\sin x + e^x\cos x$ ✓. With $f = \cos x$ we would need $f' = -\sin x$, which is not what is present.`,
  }),
  mcq(INT, 1, ALL, 40, {
    q: t`$\displaystyle\int \frac{dx}{x^2 + 9}$ equals:`,
    options: [
      t`$\tan^{-1}\dfrac{x}{3} + C$`,
      t`$\dfrac{1}{3}\tan^{-1}\dfrac{x}{3} + C$`,
      t`$\dfrac{1}{9}\tan^{-1}\dfrac{x}{3} + C$`,
      t`$\dfrac{1}{6}\ln\left|\dfrac{x - 3}{x + 3}\right| + C$`,
    ],
    answer: 1,
    explain: t`Standard form $\int\frac{dx}{x^2 + a^2} = \frac1a\tan^{-1}\frac xa + C$ with $a = 3$. Check: $\frac{d}{dx}\frac13\tan^{-1}\frac x3 = \frac13\cdot\frac{1/3}{1 + x^2/9} = \frac{1}{9 + x^2}$. The log form belongs to $\int\frac{dx}{x^2 - 9}$.`,
  }),
  mcq(INT, 1, STATE, 40, {
    q: t`$\displaystyle\int \frac{dx}{\sqrt{16 - x^2}}$ is:`,
    options: [
      t`$\dfrac14\sin^{-1}\dfrac{x}{4} + C$`,
      t`$\ln\left|x + \sqrt{16 - x^2}\right| + C$`,
      t`$\sin^{-1}\dfrac{x}{4} + C$`,
      t`$\sin^{-1}\dfrac{x}{16} + C$`,
    ],
    answer: 2,
    explain: t`$\int\frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\frac{x}{a} + C$, with $a = 4$ (not 16). Unlike the $\tan^{-1}$ form there is no $\frac1a$ factor: $\frac{d}{dx}\sin^{-1}\frac x4 = \frac{1/4}{\sqrt{1 - x^2/16}} = \frac{1}{\sqrt{16 - x^2}}$.`,
  }),
  mcq(INT, 1, ALL, 45, {
    q: t`$\displaystyle\int_0^{\pi/2}\sin^2 x\,dx$ equals:`,
    options: [t`$\dfrac{\pi}{2}$`, t`$\dfrac{\pi}{4}$`, t`$1$`, t`$\dfrac{\pi}{4} - \dfrac12$`],
    answer: 1,
    explain: t`$\sin^2x = \frac{1 - \cos 2x}{2}$, so $\int_0^{\pi/2}\sin^2x\,dx = \left[\frac x2 - \frac{\sin 2x}{4}\right]_0^{\pi/2} = \frac\pi4$. (Quick check: $\sin^2$ and $\cos^2$ have equal integrals on $[0, \pi/2]$ and they add to $\pi/2$.)`,
  }),
  mcq(INT, 1, ALL, 50, {
    q: t`$\displaystyle\int x\ln x\,dx$ is:`,
    options: [
      t`$\dfrac{x^2}{2}\ln x - \dfrac{x^2}{4} + C$`,
      t`$\dfrac{x^2}{2}\ln x - \dfrac{x^2}{2} + C$`,
      t`$\dfrac{x^2}{2}\ln x + \dfrac{x^2}{4} + C$`,
      t`$x\ln x - x + C$`,
    ],
    answer: 0,
    explain: t`By parts with $u = \ln x$ (L in ILATE), $dv = x\,dx$: $\int x\ln x\,dx = \frac{x^2}{2}\ln x - \int\frac{x^2}{2}\cdot\frac1x dx = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$. Differentiate: $x\ln x + \frac x2 - \frac x2 = x\ln x$ ✓. $x\ln x - x$ is $\int\ln x\,dx$.`,
  }),
  mcq(INT, 1, STATE, 40, {
    q: t`$\displaystyle\int\tan^2x\,dx$ equals:`,
    options: [
      t`$\dfrac{\tan^3x}{3} + C$`,
      t`$\tan x + x + C$`,
      t`$\sec^2x - x + C$`,
      t`$\tan x - x + C$`,
    ],
    answer: 3,
    explain: t`$\tan^2x = \sec^2x - 1$, so the integral is $\tan x - x + C$. Check: $\sec^2x - 1 = \tan^2x$ ✓. The power-rule answer $\tan^3x/3$ ignores the chain rule.`,
  }),
  num(INT, 1, ALL, 60, {
    q: t`Find the value of $\displaystyle\int_{-1}^{1}\left(x^3 + x^5\cos x + 3\right)dx$.`,
    answer: 6,
    explain: t`$x^3$ and $x^5\cos x$ are odd functions, so their integrals over $[-1, 1]$ vanish. Only the constant remains: $\int_{-1}^{1}3\,dx = 6$.`,
  }),
  num(INT, 1, STATE, 40, {
    q: t`Evaluate $\displaystyle\int_1^2(2x + 1)\,dx$.`,
    answer: 4,
    explain: t`$\int(2x + 1)dx = x^2 + x$. So $[x^2 + x]_1^2 = (4 + 2) - (1 + 1) = 4$.`,
  }),
  mcq(INT, 1, ALL, 50, {
    q: t`$\displaystyle\int\frac{dx}{x^2 - 4}$ is:`,
    options: [
      t`$\dfrac14\ln\left|\dfrac{x + 2}{x - 2}\right| + C$`,
      t`$\dfrac12\ln\left|\dfrac{x - 2}{x + 2}\right| + C$`,
      t`$\dfrac14\ln\left|\dfrac{x - 2}{x + 2}\right| + C$`,
      t`$\dfrac12\tan^{-1}\dfrac x2 + C$`,
    ],
    answer: 2,
    explain: t`$\int\frac{dx}{x^2 - a^2} = \frac{1}{2a}\ln\left|\frac{x - a}{x + a}\right| + C$; $a = 2$ gives $\frac14\ln\left|\frac{x - 2}{x + 2}\right|$. (Partial fractions: $\frac{1}{x^2 - 4} = \frac14\left(\frac{1}{x - 2} - \frac{1}{x + 2}\right)$.) Option 1 has the fraction upside down — that is the form for $\int\frac{dx}{a^2 - x^2}$.`,
  }),
  mcq(INT, 1, ALL, 50, {
    q: t`$\displaystyle\int\cos^3x\,dx$ equals:`,
    options: [
      t`$\dfrac{\cos^4x}{4} + C$`,
      t`$\sin x - \dfrac{\sin^3x}{3} + C$`,
      t`$\sin x + \dfrac{\sin^3x}{3} + C$`,
      t`$-\dfrac{\cos^4x}{4\sin x} + C$`,
    ],
    answer: 1,
    explain: t`Write $\cos^3x = (1 - \sin^2x)\cos x$ and put $u = \sin x$: $\int(1 - u^2)du = u - \frac{u^3}{3}$, i.e. $\sin x - \frac{\sin^3x}{3} + C$. Check: $\cos x - \sin^2x\cos x = \cos x(1 - \sin^2 x) = \cos^3x$ ✓.`,
  }),
  mcq(INT, 1, ALL, 50, {
    q: t`$\displaystyle\int_0^{\pi/2}\frac{\sin x}{\sin x + \cos x}\,dx$ equals:`,
    options: [t`$\dfrac\pi2$`, t`$\dfrac\pi4$`, t`$1$`, t`$0$`],
    answer: 1,
    explain: t`Call it $I$. Using $\int_0^a f(x)dx = \int_0^a f(a - x)dx$ with $a = \pi/2$ turns $\sin$ into $\cos$: $I = \int_0^{\pi/2}\frac{\cos x}{\cos x + \sin x}dx$. Adding the two forms, $2I = \int_0^{\pi/2}1\,dx = \frac\pi2$, so $I = \frac\pi4$.`,
  }),
  mcq(INT, 1, STATE, 40, {
    q: t`$\displaystyle\int\frac{dx}{x\ln x}$ ($x > 1$) is:`,
    options: [
      t`$\ln x + C$`,
      t`$\dfrac{(\ln x)^2}{2} + C$`,
      t`$\ln(\ln x) + C$`,
      t`$\dfrac{1}{\ln x} + C$`,
    ],
    answer: 2,
    explain: t`Put $u = \ln x$, $du = dx/x$: $\int\frac{du}{u} = \ln|u| = \ln(\ln x) + C$. Check: $\frac{d}{dx}\ln(\ln x) = \frac{1}{\ln x}\cdot\frac1x$ ✓. $(\ln x)^2/2$ is $\int\frac{\ln x}{x}dx$.`,
  }),
  mcq(INT, 1, ALL, 55, {
    q: t`For $0 < x < \dfrac\pi2$, $\displaystyle\int\sqrt{1 + \sin 2x}\,dx$ equals:`,
    options: [
      t`$\sin x + \cos x + C$`,
      t`$\sin x - \cos x + C$`,
      t`$\cos x - \sin x + C$`,
      t`$\dfrac{(1 + \sin 2x)^{3/2}}{3} + C$`,
    ],
    answer: 1,
    explain: t`$1 + \sin 2x = \sin^2x + \cos^2x + 2\sin x\cos x = (\sin x + \cos x)^2$, and $\sin x + \cos x > 0$ on this interval, so the integrand is $\sin x + \cos x$. Its integral is $-\cos x + \sin x + C$. Option 1 integrates $\cos x$ correctly but forgets $\int\sin x = -\cos x$.`,
  }),
  num(INT, 1, ALL, 50, {
    q: t`Evaluate $\displaystyle\int_0^2|x - 1|\,dx$.`,
    answer: 1,
    explain: t`Split at $x = 1$: $\int_0^1(1 - x)dx + \int_1^2(x - 1)dx = \frac12 + \frac12 = 1$. (Geometrically: two triangles of area $\frac12$.)`,
  }),
  mcq(INT, 1, STATE, 50, {
    q: t`$\displaystyle\int\frac{dx}{1 + e^{-x}}$ is:`,
    options: [
      t`$\ln(1 + e^{-x}) + C$`,
      t`$x - \ln(1 + e^{-x}) + C$`,
      t`$\ln(1 + e^{x}) + C$`,
      t`$-\ln(1 + e^{-x}) + C$`,
    ],
    answer: 2,
    explain: t`Multiply top and bottom by $e^x$: $\frac{1}{1 + e^{-x}} = \frac{e^x}{e^x + 1}$, which is $\frac{f'}{f}$ with $f = 1 + e^x$. So the integral is $\ln(1 + e^x) + C$; its derivative is $\frac{e^x}{1 + e^x}$ ✓. (Equivalently $x + \ln(1 + e^{-x})$; option 2 has the sign wrong, and option 1 is $\frac{f'}{f}$ applied to the wrong denominator — its derivative is $-\frac{e^{-x}}{1 + e^{-x}}$.)`,
  }),
];

const integrals2: ExamQuestion[] = [
  mcq(INT, 2, ALL, 75, {
    q: t`$\displaystyle\int\frac{x + 1}{(x + 2)(x + 3)}\,dx$ equals:`,
    options: [
      t`$\ln\left|\dfrac{(x + 3)^2}{x + 2}\right| + C$`,
      t`$\ln\left|\dfrac{(x + 2)^2}{x + 3}\right| + C$`,
      t`$\ln\left|\dfrac{x + 3}{(x + 2)^2}\right| + C$`,
      t`$\ln|(x + 2)(x + 3)| + C$`,
    ],
    answer: 0,
    hint: t`Write $\dfrac{x + 1}{(x + 2)(x + 3)} = \dfrac{A}{x + 2} + \dfrac{B}{x + 3}$ and use the cover-up rule.`,
    explain: t`$x + 1 = A(x + 3) + B(x + 2)$. At $x = -2$: $-1 = A$. At $x = -3$: $-2 = -B$, so $B = 2$. Hence the integral is $-\ln|x + 2| + 2\ln|x + 3| = \ln\left|\frac{(x + 3)^2}{x + 2}\right| + C$. Check: $-\frac{1}{x + 2} + \frac{2}{x + 3} = \frac{-(x + 3) + 2(x + 2)}{(x + 2)(x + 3)} = \frac{x + 1}{(x + 2)(x + 3)}$ ✓. Swapping $A$ and $B$ gives option 2.`,
  }),
  mcq(INT, 2, ALL, 60, {
    q: t`$\displaystyle\int\frac{dx}{x^2 + 4x + 13}$ is:`,
    options: [
      t`$\dfrac13\tan^{-1}\dfrac{x + 2}{3} + C$`,
      t`$\tan^{-1}\dfrac{x + 2}{3} + C$`,
      t`$\dfrac19\tan^{-1}\dfrac{x + 2}{9} + C$`,
      t`$\dfrac16\ln\left|\dfrac{x - 1}{x + 5}\right| + C$`,
    ],
    answer: 0,
    hint: "Complete the square in the denominator.",
    explain: t`$x^2 + 4x + 13 = (x + 2)^2 + 9 = (x + 2)^2 + 3^2$. So $\int\frac{dx}{(x + 2)^2 + 3^2} = \frac13\tan^{-1}\frac{x + 2}{3} + C$. Option 3 uses $a = 9$ instead of $a = 3$; the log form would need a difference of squares, but the discriminant $16 - 52 < 0$ means there are no real factors.`,
  }),
  mcq(INT, 2, ALL, 60, {
    q: t`$\displaystyle\int\frac{dx}{\sqrt{x^2 + 2x + 5}}$ equals:`,
    options: [
      t`$\ln\left|x + \sqrt{x^2 + 2x + 5}\right| + C$`,
      t`$\sin^{-1}\dfrac{x + 1}{2} + C$`,
      t`$\ln\left|x + 1 + \sqrt{x^2 + 2x + 5}\right| + C$`,
      t`$2\sqrt{x^2 + 2x + 5} + C$`,
    ],
    answer: 2,
    hint: t`Complete the square, then use $\int\frac{du}{\sqrt{u^2 + a^2}}$.`,
    explain: t`$x^2 + 2x + 5 = (x + 1)^2 + 2^2$. With $u = x + 1$: $\int\frac{du}{\sqrt{u^2 + 4}} = \ln\left|u + \sqrt{u^2 + 4}\right| + C = \ln\left|x + 1 + \sqrt{x^2 + 2x + 5}\right| + C$. Option 1 forgets to shift $x$ to $x + 1$; $\sin^{-1}$ belongs to $\frac{1}{\sqrt{a^2 - u^2}}$; option 4 would need $(2x + 2)$ in the numerator.`,
  }),
  mcq(INT, 2, ALL, 60, {
    q: t`$\displaystyle\int e^x\left(\frac1x - \frac{1}{x^2}\right)dx$ is:`,
    options: [
      t`$\dfrac{e^x}{x^2} + C$`,
      t`$\dfrac{e^x}{x} + C$`,
      t`$-\dfrac{e^x}{x} + C$`,
      t`$e^x\ln|x| + C$`,
    ],
    answer: 1,
    hint: t`Look for the pattern $e^x\big(f(x) + f'(x)\big)$.`,
    explain: t`With $f(x) = \frac1x$, $f'(x) = -\frac{1}{x^2}$, so the integrand is $e^x(f + f')$ and the integral is $e^x f(x) = \frac{e^x}{x} + C$. Check: $\frac{d}{dx}\frac{e^x}{x} = \frac{e^x x - e^x}{x^2} = e^x\left(\frac1x - \frac1{x^2}\right)$ ✓.`,
  }),
  mcq(INT, 2, ALL, 70, {
    q: t`$\displaystyle\int x^2e^x\,dx$ equals:`,
    options: [
      t`$e^x(x^2 + 2x + 2) + C$`,
      t`$e^x(x^2 - 2x) + C$`,
      t`$\dfrac{x^3e^x}{3} + C$`,
      t`$e^x(x^2 - 2x + 2) + C$`,
    ],
    answer: 3,
    hint: "Integrate by parts twice (or use the tabular method).",
    explain: t`Tabular method: differentiate $x^2 \to 2x \to 2 \to 0$, integrate $e^x$ repeatedly, alternate signs: $x^2e^x - 2xe^x + 2e^x = e^x(x^2 - 2x + 2) + C$. Check: derivative $= e^x(x^2 - 2x + 2) + e^x(2x - 2) = x^2e^x$ ✓. Option 1 misses the alternating sign; option 2 stops one step early.`,
  }),
  mcq(INT, 2, ALL, 60, {
    q: t`$\displaystyle\int_0^{\pi}x\sin x\,dx$ equals:`,
    options: [t`$2\pi$`, t`$0$`, t`$\pi$`, t`$\dfrac\pi2$`],
    answer: 2,
    hint: "By parts with u = x.",
    explain: t`$\int x\sin x\,dx = -x\cos x + \sin x$. So $[-x\cos x + \sin x]_0^\pi = (-\pi\cdot(-1) + 0) - 0 = \pi$. A common slip is $-\pi\cos\pi = -\pi$, giving a negative answer — but the integrand is non-negative on $[0, \pi]$, so the result must be positive.`,
  }),
  mcq(INT, 2, MAIN, 90, {
    q: t`The value of $\displaystyle\int_0^{\pi}\frac{x\sin x}{1 + \cos^2x}\,dx$ is:`,
    options: [t`$\dfrac{\pi^2}{2}$`, t`$\dfrac{\pi}{2}$`, t`$\dfrac{\pi^2}{8}$`, t`$\dfrac{\pi^2}{4}$`],
    answer: 3,
    hint: t`Use $x \to \pi - x$ to get rid of the factor $x$.`,
    explain: t`Let $I$ be the integral. Replacing $x$ by $\pi - x$ (sin unchanged, $\cos^2$ unchanged): $I = \int_0^\pi\frac{(\pi - x)\sin x}{1 + \cos^2x}dx$. Adding, $2I = \pi\int_0^\pi\frac{\sin x}{1 + \cos^2x}dx$. Put $u = \cos x$: $\int_{-1}^{1}\frac{du}{1 + u^2} = \frac\pi4 - \left(-\frac\pi4\right) = \frac\pi2$. So $2I = \frac{\pi^2}{2}$ and $I = \frac{\pi^2}{4}$. Forgetting to halve gives $\frac{\pi^2}{2}$.`,
  }),
  mcq(INT, 2, MAIN, 90, {
    q: t`$\displaystyle\int_0^{\pi/2}\ln(\sin x)\,dx$ equals:`,
    options: [
      t`$\dfrac{\pi}{2}\ln 2$`,
      t`$-\dfrac{\pi}{2}\ln 2$`,
      t`$-\pi\ln 2$`,
      t`$-\dfrac{\pi}{4}\ln 2$`,
    ],
    answer: 1,
    hint: t`$I = \int_0^{\pi/2}\ln\cos x\,dx$ too; add and use $\sin x\cos x = \frac12\sin 2x$.`,
    explain: t`$I = \int_0^{\pi/2}\ln\cos x\,dx$ by $x \to \frac\pi2 - x$. Adding: $2I = \int_0^{\pi/2}\ln\frac{\sin 2x}{2}dx = \int_0^{\pi/2}\ln\sin 2x\,dx - \frac\pi2\ln 2$. With $u = 2x$, $\int_0^{\pi/2}\ln\sin 2x\,dx = \frac12\int_0^\pi\ln\sin u\,du = \frac12\cdot 2I = I$. So $2I = I - \frac\pi2\ln 2$, i.e. $I = -\frac\pi2\ln 2$. It must be negative since $\ln\sin x \le 0$ on the interval.`,
  }),
  mcq(INT, 2, MAIN, 80, {
    q: t`$\displaystyle\int\frac{\sin x}{\sin(x - a)}\,dx$ is:`,
    options: [
      t`$x\sin a + \cos a\ln|\sin(x - a)| + C$`,
      t`$x\cos a + \sin a\ln|\sin(x - a)| + C$`,
      t`$x\cos a - \sin a\ln|\sin(x - a)| + C$`,
      t`$\cos a\ln|\sin(x - a)| + C$`,
    ],
    answer: 1,
    hint: t`Write $x = (x - a) + a$ inside the sine of the numerator.`,
    explain: t`$\sin x = \sin\big((x - a) + a\big) = \sin(x - a)\cos a + \cos(x - a)\sin a$. Dividing by $\sin(x - a)$: integrand $= \cos a + \sin a\cot(x - a)$. Integrating: $x\cos a + \sin a\ln|\sin(x - a)| + C$. Option 1 swaps $\sin a$ and $\cos a$ (expanding the wrong way).`,
  }),
  mcq(INT, 3, JA, 150, {
    q: t`For $x > 0$, $\displaystyle\int\frac{x^2 - 1}{(x^2 + 1)\sqrt{x^4 + 1}}\,dx$ equals:`,
    options: [
      t`$\sqrt2\sec^{-1}\left(\dfrac{x^2 + 1}{\sqrt2\,x}\right) + C$`,
      t`$\dfrac{1}{\sqrt2}\tan^{-1}\left(\dfrac{x^2 - 1}{\sqrt2\,x}\right) + C$`,
      t`$\dfrac{1}{\sqrt2}\sec^{-1}\left(\dfrac{x^2 + 1}{\sqrt2\,x}\right) + C$`,
      t`$\ln\left|x^2 + 1 + \sqrt{x^4 + 1}\right| + C$`,
    ],
    answer: 2,
    hint: t`Divide numerator and denominator by $x^2$ and put $u = x + \frac1x$.`,
    explain: t`Divide by $x^2$: integrand $= \dfrac{1 - 1/x^2}{\left(x + \frac1x\right)\sqrt{x^2 + \frac1{x^2}}}$. With $u = x + \frac1x$, $du = \left(1 - \frac1{x^2}\right)dx$ and $x^2 + \frac{1}{x^2} = u^2 - 2$. So $\int\frac{du}{u\sqrt{u^2 - 2}} = \frac{1}{\sqrt2}\sec^{-1}\frac{u}{\sqrt2} + C = \frac{1}{\sqrt2}\sec^{-1}\left(\frac{x^2 + 1}{\sqrt2 x}\right) + C$ (differentiating it back gives the integrand). Option 2 is the answer to $\int\frac{x^2 + 1}{x^4 + 1}dx$; option 1 has the constant $\sqrt2$ instead of $\frac1{\sqrt2}$.`,
  }),
  mcq(INT, 2, ALL, 50, {
    q: t`$\displaystyle\int_0^3\sqrt{9 - x^2}\,dx$ equals:`,
    options: [t`$\dfrac{9\pi}{2}$`, t`$\dfrac{3\pi}{4}$`, t`$\dfrac{9\pi}{4}$`, t`$9\pi$`],
    answer: 2,
    explain: t`$\int\sqrt{a^2 - x^2}dx = \frac x2\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\frac xa$. From 0 to 3: $0 + \frac92\cdot\frac\pi2 = \frac{9\pi}{4}$. Geometrically it is a quarter of a circle of radius 3: $\frac14\pi(3)^2$. $\frac{9\pi}{2}$ is the half-circle.`,
  }),
  mcq(INT, 2, ALL, 70, {
    q: t`$\displaystyle\lim_{n\to\infty}\sum_{r=1}^{n}\frac{n}{n^2 + r^2}$ equals:`,
    options: [t`$\dfrac\pi2$`, t`$\ln 2$`, t`$1$`, t`$\dfrac\pi4$`],
    answer: 3,
    hint: t`Pull out $\frac1n$ and write the term in $\frac rn$.`,
    explain: t`$\frac{n}{n^2 + r^2} = \frac1n\cdot\frac{1}{1 + (r/n)^2}$. As $n \to \infty$, $\frac1n\sum_{r=1}^{n}f\left(\frac rn\right) \to \int_0^1 f(x)dx$, so the limit is $\int_0^1\frac{dx}{1 + x^2} = \tan^{-1}1 = \frac\pi4$. $\ln 2$ would come from $\sum\frac{1}{n + r}$.`,
  }),
  mcq(INT, 2, MAIN, 90, {
    q: t`$\displaystyle\lim_{n\to\infty}\frac{1}{n}\sum_{r=1}^{2n}\frac{r}{\sqrt{n^2 + r^2}}$ equals:`,
    options: [t`$\sqrt2 - 1$`, t`$\sqrt5 - 1$`, t`$\dfrac{\sqrt5 - 1}{2}$`, t`$2(\sqrt5 - 1)$`],
    answer: 1,
    hint: t`The upper limit $r = 2n$ makes $x = r/n$ run up to 2.`,
    explain: t`$\frac{r}{\sqrt{n^2 + r^2}} = \frac{r/n}{\sqrt{1 + (r/n)^2}}$. With $x = r/n$ going from $0$ to $2n/n = 2$: limit $= \int_0^2\frac{x}{\sqrt{1 + x^2}}dx = \left[\sqrt{1 + x^2}\right]_0^2 = \sqrt5 - 1$. Taking the upper limit as 1 (out of habit) gives $\sqrt2 - 1$.`,
  }),
  mcq(INT, 2, ALL, 70, {
    q: t`For $x > 1$, $\dfrac{d}{dx}\displaystyle\int_{x^2}^{x^3}\frac{dt}{\ln t}$ equals:`,
    options: [
      t`$\dfrac{1}{3\ln x} - \dfrac{1}{2\ln x}$`,
      t`$\dfrac{3x^2 - 2x}{\ln x}$`,
      t`$\dfrac{x^2 - x}{\ln x}$`,
      t`$x(x - 1)\ln x$`,
    ],
    answer: 2,
    hint: t`Leibniz rule: $\frac{d}{dx}\int_{u(x)}^{v(x)}f(t)dt = f(v)v' - f(u)u'$.`,
    explain: t`$f(t) = \frac1{\ln t}$. Then $\frac{d}{dx} = \frac{1}{\ln x^3}\cdot 3x^2 - \frac{1}{\ln x^2}\cdot 2x = \frac{3x^2}{3\ln x} - \frac{2x}{2\ln x} = \frac{x^2 - x}{\ln x}$. Option 1 forgets the chain-rule factors $v', u'$; option 2 forgets that $\ln x^3 = 3\ln x$.`,
  }),
  mcq(INT, 2, MAIN, 100, {
    q: t`$\displaystyle\int_0^2[x^2]\,dx$, where $[\cdot]$ is the greatest integer function, equals:`,
    options: [
      t`$4 - \sqrt2 - \sqrt3$`,
      t`$5 - \sqrt2 - \sqrt3$`,
      t`$\sqrt2 + \sqrt3 - 1$`,
      t`$6 - \sqrt2 - \sqrt3$`,
    ],
    answer: 1,
    hint: t`$[x^2]$ jumps where $x^2$ is an integer: at $x = 1, \sqrt2, \sqrt3$.`,
    explain: t`$[x^2] = 0$ on $[0, 1)$, $1$ on $[1, \sqrt2)$, $2$ on $[\sqrt2, \sqrt3)$, $3$ on $[\sqrt3, 2)$. So the integral is $1(\sqrt2 - 1) + 2(\sqrt3 - \sqrt2) + 3(2 - \sqrt3) = -1 + 6 - \sqrt2 - \sqrt3 = 5 - \sqrt2 - \sqrt3 \approx 1.854$.`,
  }),
  num(INT, 2, MAIN, 90, {
    q: t`If $\displaystyle\int_0^1 x(1 - x)^9\,dx = \frac1k$, find $k$.`,
    answer: 110,
    hint: t`Use $\int_0^a f(x)dx = \int_0^a f(a - x)dx$ to swap $x$ and $1 - x$.`,
    explain: t`By $x \to 1 - x$: $\int_0^1(1 - x)x^9dx = \int_0^1(x^9 - x^{10})dx = \frac1{10} - \frac1{11} = \frac{1}{110}$. So $k = 110$. Expanding $(1 - x)^9$ directly works but is long.`,
  }),
  mcq(INT, 2, MAIN, 100, {
    q: t`$\displaystyle\int\frac{dx}{3 + 2\cos x}$ equals:`,
    options: [
      t`$\dfrac{2}{\sqrt5}\tan^{-1}\left(\dfrac{\tan(x/2)}{\sqrt5}\right) + C$`,
      t`$\dfrac{1}{\sqrt5}\tan^{-1}\left(\dfrac{\tan(x/2)}{\sqrt5}\right) + C$`,
      t`$\dfrac{2}{\sqrt5}\tan^{-1}\left(\sqrt5\tan\dfrac x2\right) + C$`,
      t`$-\dfrac12\ln|3 + 2\cos x| + C$`,
    ],
    answer: 0,
    hint: t`Substitute $u = \tan\frac x2$: $\cos x = \frac{1 - u^2}{1 + u^2}$, $dx = \frac{2\,du}{1 + u^2}$.`,
    explain: t`With $u = \tan\frac x2$: $3 + 2\cos x = \frac{3(1 + u^2) + 2(1 - u^2)}{1 + u^2} = \frac{5 + u^2}{1 + u^2}$. So the integral is $\int\frac{2\,du}{u^2 + 5} = \frac{2}{\sqrt5}\tan^{-1}\frac{u}{\sqrt5} + C$. Option 2 drops the factor 2 from $dx$; option 4 would need $\sin x$ in the numerator.`,
  }),
  mcq(INT, 2, ALL, 90, {
    q: t`$\displaystyle\int\frac{x + 3}{x^2 + 2x + 2}\,dx$ equals:`,
    options: [
      t`$\ln(x^2 + 2x + 2) + 2\tan^{-1}(x + 1) + C$`,
      t`$\dfrac12\ln(x^2 + 2x + 2) + 3\tan^{-1}(x + 1) + C$`,
      t`$\dfrac12\ln(x^2 + 2x + 2) + \tan^{-1}(x + 1) + C$`,
      t`$\dfrac12\ln(x^2 + 2x + 2) + 2\tan^{-1}(x + 1) + C$`,
    ],
    answer: 3,
    hint: t`Write the numerator as $\frac12(\text{derivative of denominator}) + \text{constant}$.`,
    explain: t`$x + 3 = \frac12(2x + 2) + 2$. So the integral is $\frac12\int\frac{2x + 2}{x^2 + 2x + 2}dx + 2\int\frac{dx}{(x + 1)^2 + 1} = \frac12\ln(x^2 + 2x + 2) + 2\tan^{-1}(x + 1) + C$. Option 2 keeps the original constant 3 instead of $3 - 1 = 2$.`,
  }),
  mcq(INT, 3, JA, 120, {
    q: t`$\displaystyle\lim_{n\to\infty}\left(\frac{(n + 1)(n + 2)\cdots(n + n)}{n^n}\right)^{1/n}$ equals:`,
    options: [t`$\dfrac{2}{e}$`, t`$\dfrac{4}{e}$`, t`$\dfrac{e}{4}$`, t`$4$`],
    answer: 1,
    hint: "Take logarithms to turn the product into a Riemann sum.",
    explain: t`Let $L$ be the limit. $\ln L = \lim\frac1n\sum_{r=1}^{n}\ln\left(1 + \frac rn\right) = \int_0^1\ln(1 + x)dx$. By parts, $\int_0^1\ln(1 + x)dx = [(1 + x)\ln(1 + x) - x]_0^1 = 2\ln 2 - 1$. So $L = e^{2\ln 2 - 1} = \frac{4}{e}$. Writing $\int\ln(1 + x) = x\ln(1 + x) - x$ (without the $+1$) gives $\ln 2 - 1$, i.e. $\frac2e$.`,
  }),
  mcq(INT, 3, JA, 150, {
    q: t`For $x > 0$, $\displaystyle\int\frac{x^2 + 1}{x^4 + 1}\,dx$ equals:`,
    options: [
      t`$\dfrac{1}{\sqrt2}\tan^{-1}\left(\dfrac{x^2 - 1}{\sqrt2\,x}\right) + C$`,
      t`$\dfrac{1}{\sqrt2}\tan^{-1}\left(\dfrac{x^2 + 1}{\sqrt2\,x}\right) + C$`,
      t`$\tan^{-1}(x^2) + C$`,
      t`$\sqrt2\tan^{-1}\left(\dfrac{x^2 - 1}{\sqrt2\,x}\right) + C$`,
    ],
    answer: 0,
    hint: t`Divide by $x^2$; the numerator becomes $1 + \frac1{x^2}$, the derivative of $x - \frac1x$.`,
    explain: t`Dividing by $x^2$: $\frac{1 + 1/x^2}{x^2 + 1/x^2}$. With $u = x - \frac1x$, $du = \left(1 + \frac1{x^2}\right)dx$ and $x^2 + \frac{1}{x^2} = u^2 + 2$. So $\int\frac{du}{u^2 + 2} = \frac1{\sqrt2}\tan^{-1}\frac{u}{\sqrt2} = \frac{1}{\sqrt2}\tan^{-1}\left(\frac{x^2 - 1}{\sqrt2x}\right) + C$. Using $u = x + \frac1x$ (option 2) is the substitution for the $x^2 - 1$ numerator; $\tan^{-1}(x^2)$ would need $2x$ on top.`,
  }),
  mcq(INT, 2, ALL, 70, {
    q: t`$\displaystyle\int e^x\sin x\,dx$ is:`,
    options: [
      t`$\dfrac{e^x}{2}(\sin x + \cos x) + C$`,
      t`$\dfrac{e^x}{2}(\sin x - \cos x) + C$`,
      t`$-e^x\cos x + C$`,
      t`$\dfrac{e^x}{2}(\cos x - \sin x) + C$`,
    ],
    answer: 1,
    hint: "Integrate by parts twice; the original integral reappears.",
    explain: t`Let $I = \int e^x\sin x\,dx = e^x\sin x - \int e^x\cos x\,dx = e^x\sin x - \left(e^x\cos x + \int e^x\sin x\,dx\right)$. So $2I = e^x(\sin x - \cos x)$ and $I = \frac{e^x}{2}(\sin x - \cos x) + C$. Check: derivative $= \frac{e^x}{2}(\sin x - \cos x + \cos x + \sin x) = e^x\sin x$ ✓. Option 1 is $\int e^x\cos x\,dx$.`,
  }),
  mcq(INT, 3, JA, 120, {
    q: t`A continuous function $f$ satisfies $\displaystyle\int_0^x f(t)\,dt = x^2 + \int_x^1 t^2f(t)\,dt$ for all $x$. Then $f\left(\tfrac12\right)$ equals:`,
    options: [t`$\dfrac25$`, t`$\dfrac45$`, t`$1$`, t`$\dfrac43$`],
    answer: 1,
    hint: "Differentiate both sides with respect to x.",
    explain: t`Differentiating (Leibniz rule; the lower limit $x$ of the second integral gives a minus sign): $f(x) = 2x - x^2f(x)$. So $f(x)(1 + x^2) = 2x$, $f(x) = \frac{2x}{1 + x^2}$ and $f\left(\frac12\right) = \frac{1}{5/4} = \frac45$. Taking $+x^2f(x)$ (wrong sign) gives $f = \frac{2x}{1 - x^2}$ and $\frac43$.`,
  }),
  mcq(INT, 2, ALL, 75, {
    q: t`$\displaystyle\int_0^1\tan^{-1}x\,dx$ equals:`,
    options: [
      t`$\dfrac\pi4 + \dfrac12\ln 2$`,
      t`$\dfrac\pi4 - \ln 2$`,
      t`$\dfrac\pi4 - \dfrac12\ln 2$`,
      t`$\dfrac\pi2 - \ln 2$`,
    ],
    answer: 2,
    hint: t`By parts with $u = \tan^{-1}x$, $dv = dx$.`,
    explain: t`$\int\tan^{-1}x\,dx = x\tan^{-1}x - \int\frac{x}{1 + x^2}dx = x\tan^{-1}x - \frac12\ln(1 + x^2)$. From 0 to 1: $\frac\pi4 - \frac12\ln 2 \approx 0.439$. Missing the $\frac12$ gives option 2.`,
  }),
  num(INT, 2, ALL, 60, {
    q: t`If $\displaystyle\int_0^{\pi/2}\sin^6x\,dx = \frac{k\pi}{32}$, find $k$.`,
    answer: 5,
    hint: "Wallis' formula for even powers.",
    explain: t`For even $n$, $\int_0^{\pi/2}\sin^nx\,dx = \frac{(n - 1)(n - 3)\cdots1}{n(n - 2)\cdots2}\cdot\frac\pi2$. For $n = 6$: $\frac{5\cdot3\cdot1}{6\cdot4\cdot2}\cdot\frac\pi2 = \frac{15}{48}\cdot\frac\pi2 = \frac{15\pi}{96} = \frac{5\pi}{32}$. So $k = 5$.`,
  }),
  num(INT, 2, ALL, 60, {
    q: t`Evaluate $\displaystyle\int_0^{10\pi}|\sin x|\,dx$.`,
    answer: 20,
    hint: t`$|\sin x|$ has period $\pi$.`,
    explain: t`$|\sin x|$ is periodic with period $\pi$, and $\int_0^\pi|\sin x|dx = \int_0^\pi\sin x\,dx = 2$. Over $10\pi$ there are 10 periods: $10 \times 2 = 20$. Without the modulus the integral would be 0.`,
  }),
  num(INT, 2, MAIN, 100, {
    q: t`Evaluate $\displaystyle\int_{-1}^{2}|x^2 - x|\,dx$ (correct to two decimal places).`,
    answer: 1.83,
    tolerance: 0.01,
    hint: t`$x^2 - x = x(x - 1)$ is negative only on $(0, 1)$.`,
    explain: t`Split at 0 and 1. $\int_{-1}^0(x^2 - x)dx = 0 - \left(-\frac13 - \frac12\right) = \frac56$. $\int_0^1(x - x^2)dx = \frac12 - \frac13 = \frac16$. $\int_1^2(x^2 - x)dx = \left(\frac83 - 2\right) - \left(\frac13 - \frac12\right) = \frac56$. Total $= \frac{11}{6} \approx 1.83$. Ignoring the modulus gives $\int_{-1}^2(x^2 - x)dx = \frac32$, the usual wrong answer.`,
  }),
  mcq(INT, 2, MAIN, 80, {
    q: t`$\displaystyle\int\frac{dx}{x(x^n + 1)}$ ($x > 0$, $n \ne 0$) equals:`,
    options: [
      t`$\ln\left(\dfrac{x^n}{x^n + 1}\right) + C$`,
      t`$\dfrac1n\ln\left(\dfrac{x^n + 1}{x^n}\right) + C$`,
      t`$\dfrac1n\ln\left(\dfrac{x^n}{x^n + 1}\right) + C$`,
      t`$\ln\left(\dfrac{x}{x^n + 1}\right) + C$`,
    ],
    answer: 2,
    hint: t`Multiply top and bottom by $x^{n - 1}$ and put $u = x^n$.`,
    explain: t`$\frac{x^{n - 1}}{x^n(x^n + 1)}$ with $u = x^n$, $du = nx^{n - 1}dx$: $\frac1n\int\frac{du}{u(u + 1)} = \frac1n\ln\frac{u}{u + 1} = \frac1n\ln\frac{x^n}{x^n + 1} + C$. Check: derivative $= \frac1n\left(\frac nx - \frac{nx^{n - 1}}{x^n + 1}\right) = \frac{1}{x(x^n + 1)}$ ✓. Option 2 has the fraction inverted (a sign error).`,
  }),
  mcq(INT, 2, ALL, 70, {
    q: t`$\displaystyle\int\sqrt{x^2 + 4}\,dx$ equals:`,
    options: [
      t`$\dfrac x2\sqrt{x^2 + 4} - 2\ln\left|x + \sqrt{x^2 + 4}\right| + C$`,
      t`$\dfrac x2\sqrt{x^2 + 4} + 2\ln\left|x + \sqrt{x^2 + 4}\right| + C$`,
      t`$\dfrac x2\sqrt{x^2 + 4} + 4\ln\left|x + \sqrt{x^2 + 4}\right| + C$`,
      t`$\dfrac{(x^2 + 4)^{3/2}}{3} + C$`,
    ],
    answer: 1,
    explain: t`$\int\sqrt{x^2 + a^2}dx = \frac x2\sqrt{x^2 + a^2} + \frac{a^2}{2}\ln\left|x + \sqrt{x^2 + a^2}\right| + C$. With $a^2 = 4$, the log coefficient is $\frac42 = 2$. The minus sign belongs to $\int\sqrt{x^2 - a^2}dx$; option 3 forgets to halve $a^2$; option 4 ignores the chain rule.`,
  }),
  mcq(INT, 2, MAIN, 60, {
    q: t`**Assertion (A):** $\displaystyle\int_{-1}^{1}\ln\left(\frac{2 - x}{2 + x}\right)dx = 0$.<br>**Reason (R):** $g(x) = \ln\left(\dfrac{2 - x}{2 + x}\right)$ satisfies $g(-x) = -g(x)$.`,
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 0,
    hint: "Check the parity of g first.",
    explain: t`$g(-x) = \ln\frac{2 + x}{2 - x} = -\ln\frac{2 - x}{2 + x} = -g(x)$, so $g$ is odd (and continuous on $[-1, 1]$). The integral of an odd function over a symmetric interval is 0. So R is true and is exactly why A holds.`,
  }),
  mcq(INT, 2, MAIN, 60, {
    q: t`**Statement I:** $\displaystyle\int_0^{2\pi}\sin^3x\,dx = 0$.<br>**Statement II:** $\displaystyle\int_0^{2\pi}\sin^4x\,dx = 0$.<br>Choose the correct option.`,
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ],
    answer: 2,
    explain: t`Use $\int_0^{2a}f = 0$ when $f(2a - x) = -f(x)$, and $= 2\int_0^a f$ when $f(2a - x) = f(x)$. $\sin^3(2\pi - x) = -\sin^3x$, so Statement I is true. $\sin^4x \ge 0$ and is not identically 0, so its integral is positive; in fact $\int_0^{2\pi}\sin^4x\,dx = 4\cdot\frac{3\cdot1}{4\cdot2}\cdot\frac\pi2 = \frac{3\pi}{4}$. Statement II is false.`,
  }),
  mcq(INT, 2, ALL, 90, {
    q: t`Match List I with List II.<br>(P) $\int_0^1xe^x\,dx$ (Q) $\int_0^{\pi/2}\cos^2x\,dx$ (R) $\int_1^e\frac{\ln x}{x}\,dx$ (S) $\int_0^1\frac{dx}{\sqrt{4 - x^2}}$<br>List II: (1) $\frac\pi6$ (2) $\frac12$ (3) $1$ (4) $\frac\pi4$`,
    options: [
      "P-3, Q-4, R-2, S-1",
      "P-3, Q-1, R-2, S-4",
      "P-2, Q-4, R-3, S-1",
      "P-4, Q-3, R-1, S-2",
    ],
    answer: 0,
    explain: t`(P) $[xe^x - e^x]_0^1 = 0 - (-1) = 1$ → 3. (Q) $\frac12\left[x + \frac{\sin 2x}{2}\right]_0^{\pi/2} = \frac\pi4$ → 4. (R) $\left[\frac{(\ln x)^2}{2}\right]_1^e = \frac12$ → 2. (S) $\left[\sin^{-1}\frac x2\right]_0^1 = \frac\pi6$ → 1.`,
  }),
  multi(INT, 3, ADV, 150, {
    q: t`Let $I_n = \displaystyle\int_0^{\pi/4}\tan^nx\,dx$ for integers $n \ge 0$. Which of the following is/are correct?`,
    options: [
      t`$I_n + I_{n - 2} = \dfrac{1}{n - 1}$ for $n \ge 2$`,
      t`$I_2 = 1 - \dfrac\pi4$`,
      t`$I_3 = \dfrac12 - \ln 2$`,
      t`$I_{n + 1} < I_n$ for all $n \ge 0$`,
    ],
    answers: [0, 1, 3],
    hint: t`$\tan^nx + \tan^{n - 2}x = \tan^{n - 2}x\sec^2x$.`,
    explain: t`(A) $I_n + I_{n - 2} = \int_0^{\pi/4}\tan^{n - 2}x\sec^2x\,dx = \left[\frac{\tan^{n - 1}x}{n - 1}\right]_0^{\pi/4} = \frac{1}{n - 1}$ ✓. (B) $I_0 = \frac\pi4$, so $I_2 = 1 - \frac\pi4$ ✓. (C) $I_1 = \int_0^{\pi/4}\tan x\,dx = \ln\sec\frac\pi4 = \frac12\ln 2$, so $I_3 = \frac12 - I_1 = \frac12 - \frac12\ln 2$, not $\frac12 - \ln 2$ ✗. (D) On $(0, \pi/4)$, $0 < \tan x < 1$ so $\tan^{n + 1}x < \tan^nx$, giving $I_{n + 1} < I_n$ ✓.`,
  }),
  multi(INT, 3, ADV, 150, {
    q: t`Let $f(x) = \displaystyle\int_0^x t(t - 1)(t - 2)\,dt$ for $x > 0$. Which of the following is/are correct?`,
    options: [
      t`$f$ has a local maximum at $x = 1$`,
      t`$f$ has a local minimum at $x = 2$`,
      t`$f(2) = 0$`,
      t`$f(x) < 0$ for some $x \in (0, 2)$`,
    ],
    answers: [0, 1, 2],
    hint: t`$f'(x) = x(x - 1)(x - 2)$ by the fundamental theorem; also compute $f$ explicitly.`,
    explain: t`$f'(x) = x(x - 1)(x - 2)$. For $x > 0$ it changes $+ \to -$ at 1 (local max) and $- \to +$ at 2 (local min): (A), (B) ✓. Explicitly $f(x) = \frac{x^4}{4} - x^3 + x^2 = \frac{x^2(x - 2)^2}{4}$, so $f(2) = 0$ ✓ and $f(x) \ge 0$ everywhere, hence (D) ✗.`,
  }),
  multi(INT, 3, ADV, 140, {
    q: "Which of the following definite integrals is/are equal to zero?",
    options: [
      t`$\displaystyle\int_{-1}^{1}x|x|\,dx$`,
      t`$\displaystyle\int_0^{\pi}\cos^3x\,dx$`,
      t`$\displaystyle\int_0^{2\pi}\sin^2x\,dx$`,
      t`$\displaystyle\int_0^{1}\ln\left(\frac{x}{1 - x}\right)dx$`,
    ],
    answers: [0, 1, 3],
    explain: t`(A) $x|x|$ is odd, so 0 ✓. (B) $\cos^3(\pi - x) = -\cos^3x$, so $\int_0^\pi = 0$ ✓. (C) $\sin^2x \ge 0$; the integral is $\pi$ ✗. (D) With $f(x) = \ln\frac{x}{1 - x}$, $f(1 - x) = \ln\frac{1 - x}{x} = -f(x)$; by $\int_0^1f(x)dx = \int_0^1f(1 - x)dx$ we get $I = -I$, so $I = 0$ ✓ (the improper integral converges since $\int_0^1\ln x\,dx = -1$ is finite).`,
  }),
  multi(INT, 3, ADV, 150, {
    q: t`On $\left(0, \dfrac\pi2\right)$, which of the following is/are antiderivatives of $\dfrac{\sin 2x}{\sin^4x + \cos^4x}$?`,
    options: [
      t`$\tan^{-1}(\tan^2x)$`,
      t`$-\tan^{-1}(\cot^2x)$`,
      t`$-\tan^{-1}(\cos 2x)$`,
      t`$\dfrac12\tan^{-1}(\tan^2x)$`,
    ],
    answers: [0, 1, 2],
    hint: t`Divide numerator and denominator by $\cos^4x$ and put $u = \tan^2x$.`,
    explain: t`Dividing by $\cos^4x$: $\frac{2\tan x\sec^2x}{\tan^4x + 1}$. With $u = \tan^2x$, $du = 2\tan x\sec^2x\,dx$: $\int\frac{du}{1 + u^2} = \tan^{-1}(\tan^2x) + C$ (A ✓). Antiderivatives may differ by constants: for $u > 0$, $\tan^{-1}u = \frac\pi2 - \tan^{-1}\frac1u$, so $-\tan^{-1}(\cot^2x)$ works (B ✓). Also $\tan^2x = \frac{1 - \cos 2x}{1 + \cos 2x}$, so $\tan^{-1}(\tan^2x) = \frac\pi4 - \tan^{-1}(\cos 2x)$ (C ✓). (D) has the wrong factor $\frac12$ ✗.`,
  }),
  multi(INT, 3, ADV, 120, {
    q: t`Let $I = \displaystyle\int_0^1\frac{dx}{1 + x^4}$. Which of the following is/are true?`,
    options: [t`$I > \dfrac\pi4$`, t`$I < 1$`, t`$I < \dfrac\pi4$`, t`$I > 0.9$`],
    answers: [0, 1],
    hint: t`Compare $x^4$ with $x^2$ on $[0, 1]$.`,
    explain: t`On $(0, 1)$, $x^4 < x^2$ so $\frac{1}{1 + x^4} > \frac{1}{1 + x^2}$; integrating, $I > \int_0^1\frac{dx}{1 + x^2} = \frac\pi4 \approx 0.785$ (A ✓, C ✗). Also $\frac{1}{1 + x^4} < 1$ on $(0, 1]$, so $I < 1$ (B ✓). For (D): $\frac{1}{1 + x^4} \le 1 - \frac{x^4}{2}$ on $[0,1]$ (since $(1 + x^4)(1 - x^4/2) = 1 + x^4/2 - x^8/2 \ge 1$), giving $I \le 1 - \frac1{10} = 0.9$; numerically $I \approx 0.867$ ✗.`,
  }),
  multi(INT, 3, ADV, 160, {
    q: t`For $x > 0$ let $f(x) = \displaystyle\int_1^x\frac{\ln t}{1 + t}\,dt$. Which of the following is/are correct?`,
    options: [
      t`$f(e) + f\left(\tfrac1e\right) = \tfrac12$`,
      t`$f'(x) = \dfrac{\ln x}{1 + x}$`,
      t`$f$ is decreasing on $(0, 1)$`,
      t`$f\left(\tfrac1x\right) = -f(x)$ for all $x > 0$`,
    ],
    answers: [0, 1, 2],
    hint: t`In $f(1/x)$ substitute $t = 1/u$.`,
    explain: t`$f(1/x) = \int_1^{1/x}\frac{\ln t}{1 + t}dt$; with $t = \frac1u$, $dt = -\frac{du}{u^2}$: $f(1/x) = \int_1^x\frac{\ln u}{u(u + 1)}du$. Adding, $f(x) + f(1/x) = \int_1^x\ln u\left(\frac{1}{1 + u} + \frac{1}{u(1 + u)}\right)du = \int_1^x\frac{\ln u}{u}du = \frac{(\ln x)^2}{2}$. At $x = e$: $\frac12$ (A ✓), and since this sum is not 0 in general, (D) ✗. (B) is the fundamental theorem ✓. (C) $f'(x) < 0$ for $0 < x < 1$ since $\ln x < 0$ ✓.`,
  }),
  num(INT, 3, JA, 150, {
    q: t`Let $I_n = \displaystyle\int_0^1x^ne^x\,dx$. If $I_3 = a + be$ with integers $a, b$, find $a - b$.`,
    answer: 8,
    hint: t`By parts: $I_n = e - nI_{n - 1}$.`,
    explain: t`$I_n = [x^ne^x]_0^1 - n\int_0^1x^{n - 1}e^xdx = e - nI_{n - 1}$. $I_0 = e - 1$, $I_1 = e - (e - 1) = 1$, $I_2 = e - 2$, $I_3 = e - 3(e - 2) = 6 - 2e$. So $a = 6$, $b = -2$ and $a - b = 8$.`,
  }),
  num(INT, 3, JA, 120, {
    q: t`If $L = \displaystyle\lim_{x\to0^+}\frac{1}{x^3}\int_0^{x^2}\sin\sqrt t\,dt$, find $6L$.`,
    answer: 4,
    hint: "0/0 form — use L'Hôpital with the Leibniz rule.",
    explain: t`The numerator $\to 0$. By L'Hôpital and Leibniz: $\frac{\sin\sqrt{x^2}\cdot 2x}{3x^2} = \frac{2x\sin x}{3x^2} = \frac23\cdot\frac{\sin x}{x} \to \frac23$ (for $x > 0$, $\sqrt{x^2} = x$). So $L = \frac23$ and $6L = 4$. Forgetting the factor $2x$ from the upper limit gives a divergent limit.`,
  }),
  mcq(INT, 3, JA, 150, {
    q: t`$\displaystyle\int_0^{\pi/4}\ln(1 + \tan x)\,dx$ equals:`,
    options: [
      t`$\dfrac\pi4\ln 2$`,
      t`$\dfrac\pi8\ln 2$`,
      t`$\dfrac\pi2\ln 2$`,
      t`$\dfrac\pi8$`,
    ],
    answer: 1,
    hint: t`Replace $x$ by $\frac\pi4 - x$ and use $\tan\left(\frac\pi4 - x\right) = \frac{1 - \tan x}{1 + \tan x}$.`,
    explain: t`$1 + \tan\left(\frac\pi4 - x\right) = 1 + \frac{1 - \tan x}{1 + \tan x} = \frac{2}{1 + \tan x}$. So $I = \int_0^{\pi/4}\left(\ln 2 - \ln(1 + \tan x)\right)dx = \frac\pi4\ln 2 - I$, giving $I = \frac\pi8\ln 2$. Forgetting to halve gives $\frac\pi4\ln 2$.`,
  }),
  mcq(INT, 3, JA, 150, {
    q: t`For $0 < x < \dfrac\pi2$, $\displaystyle\int\left(\sqrt{\tan x} + \sqrt{\cot x}\right)dx$ equals:`,
    options: [
      t`$\sqrt2\sin^{-1}(\sin x + \cos x) + C$`,
      t`$\dfrac{1}{\sqrt2}\sin^{-1}(\sin x - \cos x) + C$`,
      t`$\sqrt2\ln\left|\sin x + \cos x + \sqrt{\sin 2x}\right| + C$`,
      t`$\sqrt2\sin^{-1}(\sin x - \cos x) + C$`,
    ],
    answer: 3,
    hint: t`Combine into $\frac{\sin x + \cos x}{\sqrt{\sin x\cos x}}$ and put $u = \sin x - \cos x$.`,
    explain: t`$\sqrt{\tan x} + \sqrt{\cot x} = \frac{\sin x + \cos x}{\sqrt{\sin x\cos x}}$. With $u = \sin x - \cos x$: $du = (\cos x + \sin x)dx$ and $u^2 = 1 - 2\sin x\cos x$, so $\sin x\cos x = \frac{1 - u^2}{2}$. The integral becomes $\int\frac{\sqrt2\,du}{\sqrt{1 - u^2}} = \sqrt2\sin^{-1}(\sin x - \cos x) + C$. Option 3 (up to sign) is the result for $\sqrt{\tan x} - \sqrt{\cot x}$; option 2 puts $\sqrt2$ in the denominator.`,
  }),
];

/* ================================================================== */
/* Chapter 8 — Application of Integrals                                */
/* ================================================================== */

const areas: ExamQuestion[] = [
  mcq(AOI, 1, ALL, 45, {
    q: t`The area bounded by $y = x^2$, the $x$-axis and the lines $x = 0$, $x = 2$ is:`,
    options: [t`$4$`, t`$\dfrac83$`, t`$\dfrac43$`, t`$8$`],
    answer: 1,
    explain: t`Area $= \int_0^2x^2dx = \left[\frac{x^3}{3}\right]_0^2 = \frac83$ sq. units. $4$ is $\int_0^2 2x\,dx$ (integrating the derivative by mistake); $8$ forgets to divide by 3.`,
  }),
  mcq(AOI, 1, ALL, 45, {
    q: t`The area enclosed by the ellipse $\dfrac{x^2}{16} + \dfrac{y^2}{9} = 1$ is:`,
    options: [t`$7\pi$`, t`$144\pi$`, t`$12\pi$`, t`$25\pi$`],
    answer: 2,
    explain: t`Area of $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ is $\pi ab$; here $a = 4$, $b = 3$, so $12\pi$. (By integration: $4\int_0^4\frac34\sqrt{16 - x^2}dx = 3\cdot\frac{16\pi}{4} = 12\pi$.) $144\pi$ uses $a^2b^2$ instead of $ab$.`,
  }),
  num(AOI, 1, ALL, 45, {
    q: t`Find the area (in sq. units) bounded by $y = \sin x$ and the $x$-axis between $x = 0$ and $x = \pi$.`,
    answer: 2,
    explain: t`$\sin x \ge 0$ on $[0, \pi]$, so area $= \int_0^\pi\sin x\,dx = [-\cos x]_0^\pi = 1 + 1 = 2$.`,
  }),
  mcq(AOI, 1, ALL, 50, {
    q: t`The area of the region enclosed by $y = x$ and $y = x^2$ is:`,
    options: [t`$\dfrac12$`, t`$\dfrac13$`, t`$\dfrac16$`, t`$\dfrac56$`],
    answer: 2,
    explain: t`They meet where $x = x^2$: $x = 0, 1$. On $(0, 1)$, $x > x^2$, so area $= \int_0^1(x - x^2)dx = \frac12 - \frac13 = \frac16$. $\frac12$ and $\frac13$ are the areas under each curve separately.`,
  }),
  mcq(AOI, 1, STATE, 40, {
    q: t`The area of the part of the circle $x^2 + y^2 = 4$ lying in the first quadrant is:`,
    options: [t`$4\pi$`, t`$2\pi$`, t`$\dfrac{\pi}{2}$`, t`$\pi$`],
    answer: 3,
    explain: t`It is a quarter of a circle of radius 2: $\frac14\pi(2)^2 = \pi$. By integration, $\int_0^2\sqrt{4 - x^2}dx = \left[\frac x2\sqrt{4 - x^2} + 2\sin^{-1}\frac x2\right]_0^2 = 2\cdot\frac\pi2 = \pi$.`,
  }),
  mcq(AOI, 1, ALL, 55, {
    q: t`The area bounded by the parabola $y^2 = 4x$ and its latus rectum $x = 1$ is:`,
    options: [t`$\dfrac43$`, t`$\dfrac83$`, t`$\dfrac{16}{3}$`, t`$2$`],
    answer: 1,
    explain: t`The region is symmetric about the $x$-axis: area $= 2\int_0^1 2\sqrt x\,dx = 4\cdot\frac23 = \frac83$. Taking only the upper half gives $\frac43$.`,
  }),
  num(AOI, 1, ALL, 50, {
    q: t`Find the area of the region bounded by $y = |x|$ and the line $y = 2$.`,
    answer: 4,
    explain: t`$y = |x|$ meets $y = 2$ at $x = \pm2$. Area $= \int_{-2}^{2}(2 - |x|)dx = 2\int_0^2(2 - x)dx = 2(4 - 2) = 4$. (It is a triangle with base 4 and height 2.)`,
  }),
  mcq(AOI, 1, STATE, 50, {
    q: t`The area bounded by the curve $x = y^2$, the $y$-axis and the lines $y = 1$, $y = 2$ is:`,
    options: [t`$\dfrac73$`, t`$\dfrac83$`, t`$3$`, t`$\dfrac13$`],
    answer: 0,
    explain: t`Integrate with respect to $y$ (horizontal strips of length $x = y^2$): $\int_1^2y^2dy = \frac{8 - 1}{3} = \frac73$. $\frac83$ forgets the lower limit.`,
  }),
  mcq(AOI, 1, ALL, 45, {
    q: t`The area under $y = e^x$ from $x = 0$ to $x = \ln 3$ is:`,
    options: [t`$3$`, t`$\ln 3$`, t`$e^3 - 1$`, t`$2$`],
    answer: 3,
    explain: t`$\int_0^{\ln 3}e^xdx = e^{\ln 3} - e^0 = 3 - 1 = 2$. Forgetting $e^0 = 1$ gives 3.`,
  }),
  mcq(AOI, 1, STATE, 45, {
    q: t`The area bounded by the line $y = 2x + 1$, the $x$-axis and the lines $x = 1$ and $x = 3$ is:`,
    options: [t`$10$`, t`$12$`, t`$8$`, t`$14$`],
    answer: 0,
    explain: t`$\int_1^3(2x + 1)dx = [x^2 + x]_1^3 = 12 - 2 = 10$. (A trapezium with parallel sides $y(1) = 3$, $y(3) = 7$ and width 2: $\frac{3 + 7}{2}\cdot 2 = 10$.)`,
  }),
  mcq(AOI, 2, ALL, 70, {
    q: t`The area bounded by the parabola $y^2 = 4x$ and the line $y = 2x$ is:`,
    options: [t`$\dfrac23$`, t`$\dfrac13$`, t`$\dfrac43$`, t`$1$`],
    answer: 1,
    hint: "Find the intersection points first.",
    explain: t`$(2x)^2 = 4x \Rightarrow x = 0, 1$. On $(0, 1)$ the parabola's upper branch $y = 2\sqrt x$ lies above $y = 2x$. Area $= \int_0^1(2\sqrt x - 2x)dx = \frac43 - 1 = \frac13$.`,
  }),
  mcq(AOI, 2, ALL, 70, {
    q: t`The area of the region enclosed between $y = x^2$ and $y = 2 - x^2$ is:`,
    options: [t`$\dfrac43$`, t`$\dfrac{16}{3}$`, t`$\dfrac83$`, t`$4$`],
    answer: 2,
    hint: "Upper curve minus lower curve between the intersection points.",
    explain: t`$x^2 = 2 - x^2 \Rightarrow x = \pm1$. Area $= \int_{-1}^{1}\left((2 - x^2) - x^2\right)dx = \left[2x - \frac{2x^3}{3}\right]_{-1}^{1} = 2\left(2 - \frac23\right) = \frac83$. Integrating only from 0 to 1 gives $\frac43$.`,
  }),
  mcq(AOI, 2, ALL, 80, {
    q: t`The area enclosed between the parabolas $y^2 = 4ax$ and $x^2 = 4ay$ ($a > 0$) is:`,
    options: [t`$\dfrac{8a^2}{3}$`, t`$\dfrac{16a^2}{3}$`, t`$\dfrac{32a^2}{3}$`, t`$\dfrac{16a}{3}$`],
    answer: 1,
    hint: t`They meet at $(0, 0)$ and $(4a, 4a)$.`,
    explain: t`Intersection: $\left(\frac{x^2}{4a}\right)^2 = 4ax \Rightarrow x^3 = 64a^3 \Rightarrow x = 4a$. Area $= \int_0^{4a}\left(2\sqrt{ax} - \frac{x^2}{4a}\right)dx = \frac{4\sqrt a}{3}(4a)^{3/2} - \frac{(4a)^3}{12a} = \frac{32a^2}{3} - \frac{16a^2}{3} = \frac{16a^2}{3}$. Area is in square units, so an answer in $a$ (not $a^2$) cannot be right.`,
  }),
  mcq(AOI, 2, MAIN, 90, {
    q: t`The area of the smaller region cut off from the circle $x^2 + y^2 = 4$ by the line $x = 1$ is:`,
    options: [
      t`$\dfrac{4\pi}{3} - \sqrt3$`,
      t`$\dfrac{2\pi}{3} - \dfrac{\sqrt3}{2}$`,
      t`$\dfrac{8\pi}{3} + \sqrt3$`,
      t`$\dfrac{4\pi}{3} + \sqrt3$`,
    ],
    answer: 0,
    hint: "Use symmetry about the x-axis.",
    explain: t`Area $= 2\int_1^2\sqrt{4 - x^2}dx = 2\left[\frac x2\sqrt{4 - x^2} + 2\sin^{-1}\frac x2\right]_1^2 = 2\left[\pi - \left(\frac{\sqrt3}{2} + \frac\pi3\right)\right] = \frac{4\pi}{3} - \sqrt3$. Option 2 is the upper half only; option 4 is the larger region minus... (check: larger region $= 4\pi - \left(\frac{4\pi}{3} - \sqrt3\right) = \frac{8\pi}{3} + \sqrt3$, which is option 3).`,
  }),
  mcq(AOI, 2, ALL, 55, {
    q: t`The area bounded by $y = \ln x$, the $x$-axis and the line $x = e$ is:`,
    options: [t`$e$`, t`$1$`, t`$e - 1$`, t`$\dfrac1e$`],
    answer: 1,
    hint: t`$\ln x$ crosses the $x$-axis at $x = 1$.`,
    explain: t`The region lies over $1 \le x \le e$ (where $\ln x \ge 0$). $\int_1^e\ln x\,dx = [x\ln x - x]_1^e = (e - e) - (0 - 1) = 1$.`,
  }),
  mcq(AOI, 2, ALL, 75, {
    q: t`The area enclosed between $y = \sin x$ and $y = \cos x$ and the lines $x = 0$, $x = \dfrac\pi2$ is:`,
    options: [t`$\sqrt2 - 1$`, t`$0$`, t`$2\sqrt2$`, t`$2\sqrt2 - 2$`],
    answer: 3,
    hint: t`The curves cross at $x = \pi/4$; split there.`,
    explain: t`Area $= \int_0^{\pi/4}(\cos x - \sin x)dx + \int_{\pi/4}^{\pi/2}(\sin x - \cos x)dx = (\sqrt2 - 1) + (\sqrt2 - 1) = 2\sqrt2 - 2$. Integrating $(\cos x - \sin x)$ straight from 0 to $\pi/2$ gives the wrong answer 0 because the parts cancel.`,
  }),
  num(AOI, 2, ALL, 50, {
    q: t`Find the area (sq. units) of the region enclosed by $|x| + |y| = 2$.`,
    answer: 8,
    hint: "Draw it: a square with vertices on the axes.",
    explain: t`The curve is a square with vertices $(\pm2, 0)$, $(0, \pm2)$. Each quadrant contributes a triangle $\int_0^2(2 - x)dx = 2$, so the total is $4 \times 2 = 8$. (Diagonals 4 and 4: $\frac12 d_1d_2 = 8$.)`,
  }),
  num(AOI, 2, ALL, 70, {
    q: t`Find the area of the region $\{(x, y): x^2 \le y \le x + 2\}$.`,
    answer: 4.5,
    tolerance: 0.01,
    hint: t`Solve $x^2 = x + 2$ for the limits.`,
    explain: t`$x^2 = x + 2 \Rightarrow x = -1, 2$. Area $= \int_{-1}^{2}(x + 2 - x^2)dx = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2} = \frac{10}{3} + \frac76 = \frac92 = 4.5$. Shortcut: line–parabola area $= \frac{|a|(\beta - \alpha)^3}{6} = \frac{27}{6}$.`,
  }),
  mcq(AOI, 2, ALL, 60, {
    q: t`The area bounded by $y = x^3$, the $x$-axis and the lines $x = -1$, $x = 1$ is:`,
    options: [t`$0$`, t`$\dfrac14$`, t`$1$`, t`$\dfrac12$`],
    answer: 3,
    hint: "Area is never negative — handle the part below the axis separately.",
    explain: t`$\int_{-1}^1x^3dx = 0$, but that is a signed integral. The actual area is $\int_{-1}^{1}|x^3|dx = 2\int_0^1x^3dx = \frac12$.`,
  }),
  mcq(AOI, 2, MAIN, 80, {
    q: t`The area of the smaller region bounded by the ellipse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ and the chord $\dfrac xa + \dfrac yb = 1$ is:`,
    options: [
      t`$\dfrac{ab(\pi - 2)}{4}$`,
      t`$\dfrac{ab(\pi - 2)}{2}$`,
      t`$\dfrac{ab(\pi + 2)}{4}$`,
      t`$ab(\pi - 2)$`,
    ],
    answer: 0,
    hint: "Quarter-ellipse minus a triangle.",
    explain: t`The chord joins $(a, 0)$ and $(0, b)$. The region is the first-quadrant quarter-ellipse $\frac{\pi ab}{4}$ minus the triangle $\frac{ab}{2}$: $\frac{\pi ab}{4} - \frac{ab}{2} = \frac{ab(\pi - 2)}{4}$. Adding the triangle gives option 3.`,
  }),
  num(AOI, 2, MAIN, 90, {
    q: t`The area of the region enclosed by $y = x^2$ and the line $y = k$ ($k > 0$) is 36 sq. units. Find $k$.`,
    answer: 9,
    hint: t`Express the area in terms of $k$ first.`,
    explain: t`Area $= 2\int_0^{\sqrt k}(k - x^2)dx = 2\left(k^{3/2} - \frac{k^{3/2}}{3}\right) = \frac43k^{3/2}$. Setting $\frac43k^{3/2} = 36$: $k^{3/2} = 27$, $k = 9$.`,
  }),
  mcq(AOI, 2, MAIN, 60, {
    q: t`**Assertion (A):** The area bounded by $y = \sin 2x$ and the $x$-axis for $0 \le x \le \pi$ is 2 sq. units.<br>**Reason (R):** $\displaystyle\int_0^\pi\sin 2x\,dx = 0$.`,
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true",
    ],
    answer: 1,
    explain: t`$\sin 2x \ge 0$ on $[0, \pi/2]$ and $\le 0$ on $[\pi/2, \pi]$. Area $= \int_0^{\pi/2}\sin 2x\,dx + \left|\int_{\pi/2}^{\pi}\sin 2x\,dx\right| = 1 + 1 = 2$, so A is true. R is also true ($[-\frac12\cos 2x]_0^\pi = 0$), but a zero signed integral does not explain an area of 2 — it only shows why one must split at the zero.`,
  }),
  mcq(AOI, 2, ALL, 100, {
    q: t`Match the region in List I with its area in List II.<br>(P) between $y = x^2$ and $y = x$ (Q) under $y = \sqrt x$ from $x = 0$ to $4$ (R) inside $x^2 + y^2 = 9$ (S) under $y = \frac1x$ from $x = 1$ to $e^2$<br>List II: (1) $2$ (2) $\frac16$ (3) $9\pi$ (4) $\frac{16}{3}$`,
    options: [
      "P-2, Q-1, R-3, S-4",
      "P-2, Q-4, R-3, S-1",
      "P-4, Q-2, R-1, S-3",
      "P-1, Q-4, R-3, S-2",
    ],
    answer: 1,
    explain: t`(P) $\int_0^1(x - x^2)dx = \frac16$ → 2. (Q) $\int_0^4\sqrt x\,dx = \frac23\cdot 8 = \frac{16}{3}$ → 4. (R) $\pi r^2 = 9\pi$ → 3. (S) $\int_1^{e^2}\frac{dx}{x} = \ln e^2 = 2$ → 1.`,
  }),
  mcq(AOI, 2, MAIN, 70, {
    q: t`**Statement I:** The area bounded by $y = \cos x$ and the $x$-axis for $0 \le x \le \pi$ is 0.<br>**Statement II:** The area bounded by $y = e^x$, the $y$-axis and the line $y = e$ is 1 sq. unit.`,
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ],
    answer: 3,
    explain: t`I: the signed integral $\int_0^\pi\cos x\,dx$ is 0, but the area is $\int_0^\pi|\cos x|dx = 1 + 1 = 2$ — false. II: the region lies between $y = e^x$ (below) and $y = e$ (above) for $0 \le x \le 1$: $\int_0^1(e - e^x)dx = e - (e - 1) = 1$ — true. (Equivalently $\int_1^e\ln y\,dy = 1$.)`,
  }),
  mcq(AOI, 2, ALL, 60, {
    q: t`The area enclosed by the parabola $y = x^2 - 4x + 3$ and the $x$-axis is:`,
    options: [t`$\dfrac23$`, t`$\dfrac43$`, t`$-\dfrac43$`, t`$\dfrac83$`],
    answer: 1,
    hint: t`The roots are 1 and 3; the curve is below the axis between them.`,
    explain: t`$y = (x - 1)(x - 3) \le 0$ on $[1, 3]$. Area $= \int_1^3-(x^2 - 4x + 3)dx = -\left[\frac{x^3}{3} - 2x^2 + 3x\right]_1^3 = -\left(0 - \frac43\right) = \frac43$. Shortcut: $\frac{|a|(\beta - \alpha)^3}{6} = \frac{8}{6} = \frac43$. Area cannot be negative.`,
  }),
  mcq(AOI, 3, JA, 180, {
    q: t`The area of the region $\{(x, y): y^2 \le 4x,\ x^2 + y^2 \le 5\}$ is:`,
    options: [
      t`$\dfrac23 + \dfrac{5\pi}{2} - 5\sin^{-1}\dfrac{1}{\sqrt5}$`,
      t`$\dfrac43 + \dfrac{5\pi}{4} - \dfrac52\sin^{-1}\dfrac{1}{\sqrt5}$`,
      t`$\dfrac23 + \dfrac{5\pi}{2} + 5\sin^{-1}\dfrac{1}{\sqrt5}$`,
      t`$\dfrac83 + \dfrac{5\pi}{2} - 5\sin^{-1}\dfrac{1}{\sqrt5}$`,
    ],
    answer: 0,
    hint: t`The curves meet at $(1, \pm2)$. Take the upper half and split at $x = 1$.`,
    explain: t`$x^2 + 4x = 5 \Rightarrow x = 1$, $y = \pm2$. Upper half: parabola from 0 to 1, circle from 1 to $\sqrt5$. $\int_0^12\sqrt x\,dx = \frac43$. $\int_1^{\sqrt5}\sqrt{5 - x^2}dx = \left[\frac x2\sqrt{5 - x^2} + \frac52\sin^{-1}\frac{x}{\sqrt5}\right]_1^{\sqrt5} = \frac{5\pi}{4} - 1 - \frac52\sin^{-1}\frac1{\sqrt5}$. Doubling: $2\left(\frac13 + \frac{5\pi}{4} - \frac52\sin^{-1}\frac1{\sqrt5}\right) = \frac23 + \frac{5\pi}{2} - 5\sin^{-1}\frac{1}{\sqrt5} \approx 6.20$. Option 2 is the upper half only (it equals half of option 1 plus $\frac13 + ... $ — check: half of the area is $\frac13 + \frac{5\pi}{4} - \frac52\sin^{-1}\frac1{\sqrt5}$, so option 2 also forgets the $-1$).`,
  }),
  mcq(AOI, 3, JA, 180, {
    q: t`The area of the region $\{(x, y): xy \le 4,\ 1 \le y \le x^2,\ x \ge 0\}$ is:`,
    options: [
      t`$\dfrac{16}{3}\ln 2 - 2$`,
      t`$\dfrac{8}{3}\ln 2 - 2$`,
      t`$\dfrac{16}{3}\ln 2 + 2$`,
      t`$8\ln 2 - \dfrac{14}{3}$`,
    ],
    answer: 0,
    hint: t`Use horizontal strips: for each $y$, $x$ runs from $\sqrt y$ to $4/y$.`,
    explain: t`For fixed $y \ge 1$, $y \le x^2$ means $x \ge \sqrt y$ and $xy \le 4$ means $x \le \frac4y$. This needs $\sqrt y \le \frac4y$, i.e. $y \le 4^{2/3}$ (where $y = x^2$ meets $xy = 4$ at $x = 4^{1/3}$). Area $= \int_1^{4^{2/3}}\left(\frac4y - \sqrt y\right)dy = 4\ln 4^{2/3} - \frac23(4 - 1) = \frac{16}{3}\ln 2 - 2 \approx 1.697$. Option 4 wrongly runs $y$ up to 4 (where $xy = 4$ meets $y = x^2$ only if... it doesn't): $\int_1^4\frac4y - \int_1^4\sqrt y = 8\ln 2 - \frac{14}{3}$.`,
  }),
  num(AOI, 3, JA, 180, {
    q: t`The line $y = mx$ ($0 < m < 2$) divides the region between $y = 2x - x^2$ and the $x$-axis into two parts of equal area. Find $m$ (correct to two decimal places).`,
    answer: 0.41,
    tolerance: 0.01,
    hint: t`The area between $y = 2x - x^2$ and $y = mx$ is $\frac{(2 - m)^3}{6}$.`,
    explain: t`Total area $= \int_0^2(2x - x^2)dx = \frac43$. The line meets the parabola at $x = 0$ and $x = 2 - m$; the area between them is $\int_0^{2 - m}\left((2 - m)x - x^2\right)dx = \frac{(2 - m)^3}{6}$. Setting this equal to $\frac23$: $(2 - m)^3 = 4$, $m = 2 - 4^{1/3} \approx 2 - 1.587 = 0.41$.`,
  }),
  mcq(AOI, 3, JA, 160, {
    q: t`The area of the region enclosed by $y = |x^2 - 1|$ and $y = 1$ is:`,
    options: [
      t`$\dfrac{4(\sqrt2 - 1)}{3}$`,
      t`$\dfrac{8(\sqrt2 - 1)}{3}$`,
      t`$\dfrac{8\sqrt2}{3}$`,
      t`$\dfrac{8(\sqrt2 + 1)}{3}$`,
    ],
    answer: 1,
    hint: t`$|x^2 - 1| \le 1$ for $|x| \le \sqrt2$. Split at $x = 1$ and use symmetry.`,
    explain: t`For $0 \le x \le 1$: $1 - (1 - x^2) = x^2$, giving $\frac13$. For $1 \le x \le \sqrt2$: $1 - (x^2 - 1) = 2 - x^2$, giving $\left[2x - \frac{x^3}{3}\right]_1^{\sqrt2} = \frac{4\sqrt2}{3} - \frac53$. Right half $= \frac13 + \frac{4\sqrt2}{3} - \frac53 = \frac{4(\sqrt2 - 1)}{3}$; doubling gives $\frac{8(\sqrt2 - 1)}{3} \approx 1.105$. Option 1 is only the right half.`,
  }),
  mcq(AOI, 3, JA, 120, {
    q: t`The area of the region enclosed by $y = x^2$ and $y = \dfrac{2}{1 + x^2}$ is:`,
    options: [t`$\pi - \dfrac23$`, t`$\dfrac\pi2 - \dfrac13$`, t`$\pi + \dfrac23$`, t`$2\pi - \dfrac23$`],
    answer: 0,
    hint: t`Solve $x^2(1 + x^2) = 2$.`,
    explain: t`$x^4 + x^2 - 2 = 0 \Rightarrow (x^2 + 2)(x^2 - 1) = 0 \Rightarrow x = \pm1$. Area $= \int_{-1}^1\left(\frac{2}{1 + x^2} - x^2\right)dx = 2\left[\tan^{-1}x\right]_{-1}^{1} \cdot\frac12\cdot 2 - \frac23 = 2\cdot\frac\pi2 - \frac23 = \pi - \frac23$. Option 2 is just the half from 0 to 1.`,
  }),
  multi(AOI, 3, ADV, 150, {
    q: t`Let $R$ be the region bounded by $y = x^2$ and $y = 2x$. Which of the following is/are correct?`,
    options: [
      t`The area of $R$ is $\dfrac43$`,
      t`The line $x = 1$ divides $R$ into two parts of equal area`,
      t`The line $y = 2$ divides $R$ into two parts of equal area`,
      t`The area of $R$ is $\dfrac83$`,
    ],
    answers: [0, 1],
    hint: "Compute the part of R on each side of each line.",
    explain: t`Intersections at $x = 0, 2$. Area $= \int_0^2(2x - x^2)dx = 4 - \frac83 = \frac43$ (A ✓, D ✗ — $\frac83$ is the area under $y = x^2$). Left of $x = 1$: $\int_0^1(2x - x^2)dx = 1 - \frac13 = \frac23$, exactly half (B ✓; the parabola-chord region is symmetric about $x = 1$). Below $y = 2$, using horizontal strips $x \in [y/2, \sqrt y]$: $\int_0^2\left(\sqrt y - \frac y2\right)dy = \frac{4\sqrt2}{3} - 1 \approx 0.886 \ne \frac23$ (C ✗).`,
  }),
  multi(AOI, 3, ADV, 150, {
    q: t`Consider the ellipse $E: \dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$ and the circle $C: x^2 + y^2 = 9$. Which of the following is/are correct?`,
    options: [
      t`The area enclosed by $E$ is $6\pi$`,
      t`The area inside $C$ but outside $E$ is $3\pi$`,
      t`The area of the first-quadrant part of $E$ lying above the line $\dfrac x3 + \dfrac y2 = 1$ is $\dfrac{3\pi - 6}{2}$`,
      t`The area enclosed by $E$ is $36\pi$`,
    ],
    answers: [0, 1, 2],
    explain: t`(A) $\pi ab = \pi\cdot3\cdot2 = 6\pi$ ✓; (D) ✗. (B) $E$ lies inside $C$ (they touch at $(\pm3, 0)$), so the difference is $9\pi - 6\pi = 3\pi$ ✓. (C) Quarter-ellipse $\frac{6\pi}{4} = \frac{3\pi}{2}$ minus triangle $\frac12\cdot3\cdot2 = 3$: $\frac{3\pi}{2} - 3 = \frac{3\pi - 6}{2}$ ✓.`,
  }),
  multi(AOI, 3, ADV, 150, {
    q: t`Let $f(x) = |x - 1| + |x - 3|$. For the region bounded by $y = f(x)$ and $y = 4$, which of the following is/are correct?`,
    options: [
      "Its area is 6 sq. units",
      "It is symmetric about the line x = 2",
      "Its area is 8 sq. units",
      t`The part of it with $1 \le x \le 3$ has area 4 sq. units`,
    ],
    answers: [0, 1, 3],
    hint: t`$f = 4 - 2x$ for $x < 1$, $2$ on $[1, 3]$, $2x - 4$ for $x > 3$.`,
    explain: t`$f(x) = 4$ at $x = 0$ and $x = 4$. Area $= \int_0^4(4 - f)dx = \int_0^1 2x\,dx + \int_1^3 2\,dx + \int_3^4(8 - 2x)dx = 1 + 4 + 1 = 6$ (A ✓, C ✗). $f(4 - x) = f(x)$, so the region is symmetric about $x = 2$ (B ✓). The middle part is a $2 \times 2$ rectangle of area 4 (D ✓). (It is a trapezium with parallel sides 4 and 2 and height 2: $\frac{4 + 2}{2}\cdot2 = 6$.)`,
  }),
  multi(AOI, 3, ADV, 160, {
    q: t`For $a > 1$, let $A(a)$ be the area bounded by $y = \ln x$, the $x$-axis and the line $x = a$. Which of the following is/are correct?`,
    options: [
      t`$A(e) = 1$`,
      t`$A'(a) = \ln a$`,
      t`$A(e^2) = e^2 + 1$`,
      t`$A(a) < \dfrac{(a - 1)\ln a}{2}$ for all $a > 1$`,
    ],
    answers: [0, 1, 2],
    hint: t`$A(a) = \int_1^a\ln x\,dx$. For (D), compare with the chord from $(1, 0)$ to $(a, \ln a)$.`,
    explain: t`$A(a) = \int_1^a\ln x\,dx = a\ln a - a + 1$. (A) $e - e + 1 = 1$ ✓. (B) by the fundamental theorem ✓. (C) $2e^2 - e^2 + 1 = e^2 + 1$ ✓. (D) $\ln x$ is concave, so on $[1, a]$ its graph lies above the chord joining $(1, 0)$ and $(a, \ln a)$; the area under the chord is the triangle $\frac{(a - 1)\ln a}{2}$, so $A(a) > \frac{(a - 1)\ln a}{2}$ ✗ (e.g. $a = 5$: $A \approx 4.05 > 3.22$).`,
  }),
];
