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
    explain: t`Area $= 2\int_1^2\sqrt{4 - x^2}dx = 2\left[\frac x2\sqrt{4 - x^2} + 2\sin^{-1}\frac x2\right]_1^2 = 2\left[\pi - \left(\frac{\sqrt3}{2} + \frac\pi3\right)\right] = \frac{4\pi}{3} - \sqrt3$. Option 2 is the upper half only. The larger region is $4\pi - \left(\frac{4\pi}{3} - \sqrt3\right) = \frac{8\pi}{3} + \sqrt3$ (option 3); option 4 has the sign of $\sqrt3$ wrong.`,
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
    explain: t`$x^2 + 4x = 5 \Rightarrow x = 1$, $y = \pm2$. Upper half: parabola from 0 to 1, circle from 1 to $\sqrt5$. $\int_0^12\sqrt x\,dx = \frac43$. $\int_1^{\sqrt5}\sqrt{5 - x^2}dx = \left[\frac x2\sqrt{5 - x^2} + \frac52\sin^{-1}\frac{x}{\sqrt5}\right]_1^{\sqrt5} = \frac{5\pi}{4} - 1 - \frac52\sin^{-1}\frac1{\sqrt5}$. Doubling: $2\left(\frac13 + \frac{5\pi}{4} - \frac52\sin^{-1}\frac1{\sqrt5}\right) = \frac23 + \frac{5\pi}{2} - 5\sin^{-1}\frac{1}{\sqrt5} \approx 6.20$. Option 4 forgets the $-1$ (the term $\frac x2\sqrt{5 - x^2}$ at $x = 1$); option 2 is that same slip in the upper half only, not doubled.`,
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
    explain: t`For fixed $y \ge 1$, $y \le x^2$ means $x \ge \sqrt y$ and $xy \le 4$ means $x \le \frac4y$. This needs $\sqrt y \le \frac4y$, i.e. $y \le 4^{2/3}$ (where $y = x^2$ meets $xy = 4$ at $x = 4^{1/3}$). Area $= \int_1^{4^{2/3}}\left(\frac4y - \sqrt y\right)dy = 4\ln 4^{2/3} - \frac23(4 - 1) = \frac{16}{3}\ln 2 - 2 \approx 1.697$. Option 4 runs $y$ all the way to 4 without checking that $\sqrt y \le \frac4y$: $\int_1^4\left(\frac4y - \sqrt y\right)dy = 8\ln 2 - \frac{14}{3}$, which subtracts strips that are not in the region (above $y = 4^{2/3}$ the integrand is negative).`,
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
    explain: t`$x^4 + x^2 - 2 = 0 \Rightarrow (x^2 + 2)(x^2 - 1) = 0 \Rightarrow x = \pm1$. Area $= \int_{-1}^1\left(\frac{2}{1 + x^2} - x^2\right)dx = 2\left[\tan^{-1}x\right]_{-1}^{1} - \left[\frac{x^3}{3}\right]_{-1}^{1} = 2\cdot\frac\pi2 - \frac23 = \pi - \frac23$. Option 2 is just the half from 0 to 1.`,
  }),
  mcq(AOI, 2, MAIN, 80, {
    q: t`The area of the region inside the circle $x^2 + y^2 = 4$ and above both lines $y = \sqrt3\,x$ and $y = -\sqrt3\,x$ is:`,
    options: [t`$\dfrac{2\pi}{3}$`, t`$\dfrac{\pi}{3}$`, t`$\dfrac{4\pi}{3}$`, t`$\dfrac{2\pi}{3} - \sqrt3$`],
    answer: 0,
    hint: "Find the angles the two lines make with the x-axis.",
    explain: t`$y = \sqrt3x$ makes $60^\circ$ and $y = -\sqrt3x$ makes $120^\circ$ with the positive $x$-axis. The region is the sector between them, of angle $60^\circ = \frac\pi3$: area $= \frac12r^2\theta = \frac12\cdot4\cdot\frac\pi3 = \frac{2\pi}{3}$. By integration: $2\int_0^1\left(\sqrt{4 - x^2} - \sqrt3x\right)dx = 2\left(\frac{\sqrt3}{2} + \frac\pi3 - \frac{\sqrt3}{2}\right) = \frac{2\pi}{3}$ ✓. Option 4 wrongly subtracts a triangle that is not part of the region.`,
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

/* ================================================================== */
/* Chapter 9 — Differential Equations                                  */
/* ================================================================== */

const AR_OPTIONS = [
  "Both A and R are true and R is the correct explanation of A",
  "Both A and R are true but R is not the correct explanation of A",
  "A is true but R is false",
  "A is false but R is true",
];

const diffEq: ExamQuestion[] = [
  mcq(DE, 1, ALL, 40, {
    q: t`The order and degree of the differential equation $\left(\dfrac{d^2y}{dx^2}\right)^3 + \left(\dfrac{dy}{dx}\right)^4 + y = 0$ are:`,
    options: ["order 2, degree 4", "order 2, degree 3", "order 3, degree 2", "order 4, degree 2"],
    answer: 1,
    explain: t`Order = highest derivative present = 2 ($y''$). Degree = power of that highest derivative once the equation is a polynomial in derivatives = 3. The power 4 belongs to $y'$, which is not the highest derivative.`,
  }),
  mcq(DE, 1, ALL, 40, {
    q: t`The degree of the differential equation $\dfrac{d^2y}{dx^2} + \sin\left(\dfrac{dy}{dx}\right) = 0$ is:`,
    options: ["1", "2", "0", "not defined"],
    answer: 3,
    explain: t`Degree is defined only when the equation is a polynomial in its derivatives. $\sin(y')$ cannot be written as a polynomial in $y'$, so the degree is not defined (the order is 2).`,
  }),
  num(DE, 1, ALL, 45, {
    q: t`For the differential equation $\left(y'''\right)^2 + \left(y''\right)^3 + y' = x$, find (order + degree).`,
    answer: 5,
    explain: t`The highest derivative is $y'''$, so the order is 3. It appears squared, so the degree is 2. Order + degree $= 5$. (The cube on $y''$ does not decide the degree.)`,
  }),
  mcq(DE, 1, ALL, 45, {
    q: t`The general solution of $\dfrac{dy}{dx} = e^{x - y}$ is:`,
    options: [
      t`$e^{y} = e^{x} + C$`,
      t`$e^{-y} = e^{x} + C$`,
      t`$e^{x + y} = C$`,
      t`$y = x + C$`,
    ],
    answer: 0,
    explain: t`$\frac{dy}{dx} = \frac{e^x}{e^y}$, so $e^ydy = e^xdx$. Integrating: $e^y = e^x + C$. Option 2 has $e^{-y}$, which comes from mis-separating $e^{-y}$.`,
  }),
  mcq(DE, 1, ALL, 40, {
    q: t`The integrating factor of $\dfrac{dy}{dx} + \dfrac{y}{x} = x^2$ ($x > 0$) is:`,
    options: [t`$\ln x$`, t`$\dfrac1x$`, t`$x$`, t`$e^{x}$`],
    answer: 2,
    explain: t`For $y' + P(x)y = Q(x)$, IF $= e^{\int P\,dx}$. Here $P = \frac1x$, so IF $= e^{\ln x} = x$. $\frac1x$ would come from $P = -\frac1x$.`,
  }),
  mcq(DE, 1, ALL, 45, {
    q: t`The integrating factor of $\dfrac{dy}{dx} - y\tan x = \sec x$ $\left(|x| < \frac\pi2\right)$ is:`,
    options: [t`$\sec x$`, t`$\cos x$`, t`$e^{\tan x}$`, t`$\tan x$`],
    answer: 1,
    explain: t`$P = -\tan x$, so $\int P\,dx = -\ln\sec x = \ln\cos x$ and IF $= e^{\ln\cos x} = \cos x$. Missing the minus sign gives $\sec x$; $e^{\tan x}$ forgets to integrate $P$.`,
  }),
  mcq(DE, 1, STATE, 40, {
    q: t`The general solution of $x\,dy + y\,dx = 0$ is:`,
    options: [t`$x + y = C$`, t`$y = Cx$`, t`$xy = C$`, t`$x^2 + y^2 = C$`],
    answer: 2,
    explain: t`$x\,dy + y\,dx = d(xy)$, so $d(xy) = 0$ and $xy = C$. (Or separate: $\frac{dy}{y} = -\frac{dx}{x}$, $\ln|y| = -\ln|x| + c$.) $y = Cx$ solves $x\,dy - y\,dx = 0$.`,
  }),
  mcq(DE, 1, ALL, 40, {
    q: t`The differential equation of the family of lines $y = mx$ ($m$ arbitrary) is:`,
    options: [
      t`$\dfrac{dy}{dx} = m$`,
      t`$x\dfrac{dy}{dx} = y$`,
      t`$y\dfrac{dy}{dx} = x$`,
      t`$\dfrac{d^2y}{dx^2} = 0$`,
    ],
    answer: 1,
    explain: t`Differentiate: $y' = m$. Eliminate $m$ using $m = \frac yx$: $xy' = y$. Option 1 still contains the arbitrary constant. $y'' = 0$ is the equation of all lines $y = mx + c$ (two constants), not just those through the origin.`,
  }),
  mcq(DE, 1, ALL, 45, {
    q: t`The general solution of $\dfrac{dy}{dx} = \dfrac{1 + y^2}{1 + x^2}$ is:`,
    options: [
      t`$\tan^{-1}y = \tan^{-1}x + C$`,
      t`$\tan^{-1}y + \tan^{-1}x = C$`,
      t`$y = x + C$`,
      t`$\ln(1 + y^2) = \ln(1 + x^2) + C$`,
    ],
    answer: 0,
    explain: t`Separate: $\frac{dy}{1 + y^2} = \frac{dx}{1 + x^2}$, so $\tan^{-1}y = \tan^{-1}x + C$. (Equivalently $\frac{y - x}{1 + xy} = $ constant.) Option 4 integrates $\frac{1}{1 + y^2}$ as a log.`,
  }),
  mcq(DE, 1, ALL, 45, {
    q: "Which of the following is a homogeneous differential equation?",
    options: [
      t`$\dfrac{dy}{dx} = x + y^2$`,
      t`$\dfrac{dy}{dx} = \dfrac{x + 1}{y + 1}$`,
      t`$(x^2 + y^2)\,dx - 2xy\,dy = 0$`,
      t`$\dfrac{dy}{dx} = \dfrac yx + x$`,
    ],
    answer: 2,
    explain: t`$\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$ is $F(x, y)$ with $F(\lambda x, \lambda y) = F(x, y)$ (degree 0), i.e. a function of $\frac yx$ only. In the others the constant 1, the term $y^2$ beside $x$, or the extra $x$ breaks the homogeneity.`,
  }),
  mcq(DE, 1, ALL, 50, {
    q: t`The solution of $\dfrac{dy}{dx} + y = 1$ with $y(0) = 0$ is:`,
    options: [t`$y = e^{-x} - 1$`, t`$y = 1 - e^{-x}$`, t`$y = 1 + e^{-x}$`, t`$y = 1 - e^{x}$`],
    answer: 1,
    explain: t`IF $= e^x$: $(ye^x)' = e^x$, so $ye^x = e^x + C$, $y = 1 + Ce^{-x}$. $y(0) = 0$ gives $C = -1$: $y = 1 - e^{-x}$. Check: $y' + y = e^{-x} + 1 - e^{-x} = 1$ ✓.`,
  }),
  num(DE, 1, STATE, 30, {
    q: "How many arbitrary constants are there in the general solution of a differential equation of order 4?",
    answer: 4,
    explain: "The general solution of an n-th order differential equation contains exactly n independent arbitrary constants; a particular solution contains none.",
  }),
  mcq(DE, 1, ALL, 45, {
    q: t`$y = e^{2x}$ is a solution of which differential equation?`,
    options: [t`$y'' + 4y = 0$`, t`$y'' - 2y = 0$`, t`$y' + 2y = 0$`, t`$y'' - 4y = 0$`],
    answer: 3,
    explain: t`$y' = 2e^{2x}$, $y'' = 4e^{2x} = 4y$, so $y'' - 4y = 0$. For $y' + 2y$ we get $4e^{2x} \ne 0$; $y'' + 4y = 0$ has the oscillating solutions $\cos 2x$, $\sin 2x$.`,
  }),
  mcq(DE, 2, ALL, 60, {
    q: t`The differential equation of the family $y = A\cos 2x + B\sin 2x$ ($A, B$ arbitrary) is:`,
    options: [t`$y'' - 4y = 0$`, t`$y'' + 4y = 0$`, t`$y'' + 2y = 0$`, t`$y' + 2y = 0$`],
    answer: 1,
    hint: "Two constants — differentiate twice.",
    explain: t`$y' = -2A\sin 2x + 2B\cos 2x$, $y'' = -4A\cos 2x - 4B\sin 2x = -4y$. So $y'' + 4y = 0$ (order 2, matching the two constants).`,
  }),
  mcq(DE, 2, ALL, 90, {
    q: t`The differential equation of the family of circles that touch the $y$-axis at the origin is:`,
    options: [
      t`$2xy\dfrac{dy}{dx} = x^2 - y^2$`,
      t`$2xy\dfrac{dy}{dx} = y^2 - x^2$`,
      t`$x\dfrac{dy}{dx} = y$`,
      t`$2xy\dfrac{dy}{dx} = x^2 + y^2$`,
    ],
    answer: 1,
    hint: t`Centre on the $x$-axis: $x^2 + y^2 - 2ax = 0$.`,
    explain: t`Such a circle has centre $(a, 0)$ and radius $|a|$: $x^2 + y^2 = 2ax$. Differentiating: $2x + 2yy' = 2a = \frac{x^2 + y^2}{x}$. Multiply by $x$: $2x^2 + 2xyy' = x^2 + y^2$, i.e. $2xyy' = y^2 - x^2$. Option 1 is the family touching the $x$-axis at the origin.`,
  }),
  mcq(DE, 2, ALL, 80, {
    q: t`The solution of $\dfrac{dy}{dx} = \dfrac{x + y}{x}$ ($x > 0$) with $y(1) = 0$ is:`,
    options: [t`$y = x\ln x$`, t`$y = \ln x$`, t`$y = x\ln x + x$`, t`$y = x^2 - x$`],
    answer: 0,
    hint: t`Homogeneous: put $y = vx$.`,
    explain: t`$y = vx$: $v + xv' = 1 + v$, so $xv' = 1$, $v = \ln x + C$ and $y = x\ln x + Cx$. $y(1) = 0 \Rightarrow C = 0$: $y = x\ln x$. Check: $y' = \ln x + 1 = \frac{x + x\ln x}{x}$ ✓. (It is also linear: $y' - \frac yx = 1$.)`,
  }),
  mcq(DE, 2, MAIN, 90, {
    q: t`The general solution of $\dfrac{dy}{dx} = \dfrac yx + \tan\dfrac yx$ is:`,
    options: [
      t`$\cos\dfrac yx = Cx$`,
      t`$\sin\dfrac yx = Cx$`,
      t`$\tan\dfrac yx = Cx$`,
      t`$\sin\dfrac yx = Cy$`,
    ],
    answer: 1,
    hint: t`Put $y = vx$; you will need $\int\cot v\,dv$.`,
    explain: t`$v + xv' = v + \tan v \Rightarrow \cot v\,dv = \frac{dx}{x}$. Integrating, $\ln|\sin v| = \ln|x| + c$, so $\sin\frac yx = Cx$. Option 1 integrates $\cot v$ as $-\ln\cos v$ (that is $\int\tan v$).`,
  }),
  num(DE, 2, ALL, 80, {
    q: t`If $y(x)$ satisfies $\dfrac{dy}{dx} + 2y = e^{-x}$ and $y(0) = 1$, find $y(\ln 2)$.`,
    answer: 0.5,
    tolerance: 0.01,
    hint: t`IF $= e^{2x}$.`,
    explain: t`$(ye^{2x})' = e^{2x}e^{-x} = e^x$, so $ye^{2x} = e^x + C$. $y(0) = 1 \Rightarrow C = 0$, so $y = e^{-x}$ and $y(\ln 2) = \frac12$.`,
  }),
  mcq(DE, 2, ALL, 90, {
    q: t`If $x\dfrac{dy}{dx} + 2y = x^2$ ($x > 0$) and $y(1) = 1$, then $y(2)$ equals:`,
    options: [t`$\dfrac{19}{16}$`, t`$\dfrac54$`, t`$\dfrac{13}{16}$`, t`$\dfrac74$`],
    answer: 0,
    hint: t`Divide by $x$ first: $P = \frac2x$.`,
    explain: t`$y' + \frac2xy = x$, IF $= x^2$: $(x^2y)' = x^3$, so $x^2y = \frac{x^4}{4} + C$. $y(1) = 1 \Rightarrow C = \frac34$. So $y = \frac{x^2}{4} + \frac{3}{4x^2}$ and $y(2) = 1 + \frac{3}{16} = \frac{19}{16}$. Using $Q = x^2$ without dividing by $x$ gives a wrong answer.`,
  }),
  mcq(DE, 2, MAIN, 90, {
    q: t`The general solution of $\dfrac{dy}{dx} = \dfrac{y}{x + y^2}$ ($y > 0$) is:`,
    options: [
      t`$y = x^2 + Cx$`,
      t`$x = y^2 + Cy$`,
      t`$x = y^2 + C$`,
      t`$xy = y^3 + C$`,
    ],
    answer: 1,
    hint: t`Treat $x$ as the dependent variable: write $\frac{dx}{dy}$.`,
    explain: t`$\frac{dx}{dy} = \frac{x + y^2}{y} = \frac xy + y$, i.e. $\frac{dx}{dy} - \frac1yx = y$ — linear in $x$. IF $= e^{-\ln y} = \frac1y$: $\frac{d}{dy}\left(\frac xy\right) = 1$, so $\frac xy = y + C$ and $x = y^2 + Cy$. Check: $\frac{dx}{dy} = 2y + C = \frac{(y^2 + Cy) + y^2}{y}$ ✓.`,
  }),
  num(DE, 2, ALL, 90, {
    q: t`A bacterial population grows at a rate proportional to its size and doubles in 10 hours. In how many hours will it triple? (Answer to one decimal place.)`,
    answer: 15.8,
    tolerance: 0.1,
    hint: t`$P = P_0e^{kt}$.`,
    explain: t`$\frac{dP}{dt} = kP \Rightarrow P = P_0e^{kt}$. Doubling in 10 h: $e^{10k} = 2$, $k = \frac{\ln 2}{10}$. Tripling: $e^{kt} = 3 \Rightarrow t = \frac{10\ln 3}{\ln 2} = \frac{10(1.0986)}{0.6931} \approx 15.85$ h. (Not 15: growth is exponential, not linear.)`,
  }),
  num(DE, 2, ALL, 90, {
    q: t`A body at $80^\circ$C is placed in a room at $20^\circ$C. By Newton's law of cooling, $\frac{dT}{dt} = -k(T - 20)$. It cools to $50^\circ$C in 10 minutes. Find its temperature (in $^\circ$C) after 20 minutes.`,
    answer: 35,
    hint: "The excess over room temperature decays exponentially.",
    explain: t`$T - 20 = 60e^{-kt}$. At $t = 10$: $30 = 60e^{-10k}$, so $e^{-10k} = \frac12$. At $t = 20$: $T - 20 = 60\cdot\frac14 = 15$, so $T = 35^\circ$C. Assuming a linear drop (another $30^\circ$) would wrongly give $20^\circ$C.`,
  }),
  mcq(DE, 2, MAIN, 90, {
    q: t`The general solution of $\dfrac{dy}{dx} = (x + y + 1)^2$ is:`,
    options: [
      t`$\tan^{-1}(x + y + 1) = x + C$`,
      t`$\tan^{-1}(x + y + 1) = y + C$`,
      t`$\tan(x + y + 1) = x + C$`,
      t`$-\dfrac{1}{x + y + 1} = x + C$`,
    ],
    answer: 0,
    hint: t`Put $v = x + y + 1$.`,
    explain: t`$v = x + y + 1 \Rightarrow v' = 1 + y' = 1 + v^2$. Separating, $\frac{dv}{1 + v^2} = dx$, so $\tan^{-1}(x + y + 1) = x + C$. Option 4 forgets the $1$ in $v' = 1 + y'$ (it solves $v' = v^2$).`,
  }),
  mcq(DE, 2, MAIN, 90, {
    q: t`The general solution of $\dfrac{x\,dy - y\,dx}{x^2 + y^2} = dx$ is:`,
    options: [
      t`$\tan^{-1}\dfrac xy = x + C$`,
      t`$\ln(x^2 + y^2) = x + C$`,
      t`$\tan^{-1}\dfrac yx = x + C$`,
      t`$\dfrac yx = x + C$`,
    ],
    answer: 2,
    hint: "Recognise an exact differential.",
    explain: t`$d\left(\tan^{-1}\frac yx\right) = \frac{1}{1 + y^2/x^2}\cdot\frac{x\,dy - y\,dx}{x^2} = \frac{x\,dy - y\,dx}{x^2 + y^2}$. So the equation is $d\left(\tan^{-1}\frac yx\right) = dx$, giving $\tan^{-1}\frac yx = x + C$. Option 1 has the sign of the differential reversed ($d\tan^{-1}\frac xy = \frac{y\,dx - x\,dy}{x^2 + y^2}$).`,
  }),
  mcq(DE, 2, MAIN, 90, {
    q: t`The general solution of $x\,dy - y\,dx = x^2e^x\,dx$ ($x > 0$) is:`,
    options: [
      t`$y = e^x + Cx$`,
      t`$y = x^2e^x + C$`,
      t`$y = xe^x + C$`,
      t`$y = xe^x + Cx$`,
    ],
    answer: 3,
    hint: t`Divide by $x^2$: $\frac{x\,dy - y\,dx}{x^2} = d\left(\frac yx\right)$.`,
    explain: t`Dividing by $x^2$: $d\left(\frac yx\right) = e^xdx$, so $\frac yx = e^x + C$ and $y = xe^x + Cx$. Check: $xy' - y = x(e^x + xe^x + C) - xe^x - Cx = x^2e^x$ ✓. Option 3 forgets to multiply the constant by $x$.`,
  }),
  num(DE, 2, ALL, 60, {
    q: t`Find the order of the differential equation of the family of all parabolas $y = ax^2 + bx + c$ (with $a, b, c$ arbitrary).`,
    answer: 3,
    explain: t`Three independent arbitrary constants ⇒ the differential equation has order 3. Indeed $y''' = 0$ eliminates all three.`,
  }),
  mcq(DE, 2, ALL, 90, {
    q: t`The order and degree of the differential equation of all circles of a fixed radius $r$ (centre arbitrary) are:`,
    options: ["order 2, degree 2", "order 3, degree 1", "order 2, degree 1", "order 2, degree 3"],
    answer: 0,
    hint: t`$(x - h)^2 + (y - k)^2 = r^2$ has two arbitrary constants.`,
    explain: t`Two constants $h, k$ give order 2. Differentiating twice and eliminating gives $\left(1 + y'^2\right)^3 = r^2\left(y''\right)^2$, so the degree (power of $y''$) is 2. The equation $(1 + y'^2)^{3/2} = r y''$ has to be squared before reading the degree.`,
  }),
  mcq(DE, 2, MAIN, 100, {
    q: t`For $x > 0$, the general solution of $\dfrac{dy}{dx} + \dfrac yx = xy^2$ is:`,
    options: [
      t`$\dfrac{1}{xy} = C - x$`,
      t`$\dfrac{1}{xy} = C + x$`,
      t`$\dfrac{x}{y} = C - x$`,
      t`$xy = C - x$`,
    ],
    answer: 0,
    hint: t`Bernoulli equation: divide by $y^2$ and put $z = \frac1y$.`,
    explain: t`Divide by $y^2$: $y^{-2}y' + \frac{1}{x}y^{-1} = x$. With $z = y^{-1}$, $z' = -y^{-2}y'$: $-z' + \frac zx = x$, i.e. $z' - \frac zx = -x$. IF $= \frac1x$: $\left(\frac zx\right)' = -1$, so $\frac{z}{x} = -x + C$, i.e. $\frac{1}{xy} = C - x$. Missing the sign of $z'$ gives option 2.`,
  }),
  mcq(DE, 2, ALL, 60, {
    q: t`**Assertion (A):** The degree of the differential equation $\left(\dfrac{d^2y}{dx^2}\right)^{2/3} = 1 + \dfrac{dy}{dx}$ is 2.<br>**Reason (R):** The degree is read only after the equation is made free of fractional powers of the derivatives.`,
    options: AR_OPTIONS,
    answer: 0,
    explain: t`Cubing both sides: $\left(y''\right)^2 = \left(1 + y'\right)^3$, a polynomial in derivatives with highest derivative $y''$ raised to 2. So the degree is 2 — A is true, and R is exactly the rule used. (Reading $\frac23$ directly is the common mistake.)`,
  }),
  mcq(DE, 2, MAIN, 70, {
    q: t`**Statement I:** $y = cx + c^2$ is a solution of $y = x\dfrac{dy}{dx} + \left(\dfrac{dy}{dx}\right)^2$ for every constant $c$.<br>**Statement II:** $\dfrac{dy}{dx} + y = x^2$ is a homogeneous differential equation.`,
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true",
    ],
    answer: 2,
    explain: t`I: $y' = c$, so $xy' + y'^2 = cx + c^2 = y$ ✓. II: $\frac{dy}{dx} = x^2 - y$ is not a function of $\frac yx$ alone ($F(\lambda x, \lambda y) = \lambda^2x^2 - \lambda y \ne F(x, y)$); it is linear, not homogeneous. So I is true, II is false.`,
  }),
  mcq(DE, 2, ALL, 90, {
    q: t`Match each equation in List I with its type in List II.<br>(P) $\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$ (Q) $\frac{dy}{dx} + y\cos x = \sin 2x$ (R) $\frac{dy}{dx} = e^{x + y}$ (S) $\frac{dy}{dx} + \frac yx = y^2$<br>List II: (1) variables separable (2) homogeneous (3) linear (4) Bernoulli (reducible to linear)`,
    options: [
      "P-2, Q-3, R-1, S-4",
      "P-2, Q-4, R-1, S-3",
      "P-1, Q-3, R-2, S-4",
      "P-3, Q-2, R-1, S-4",
    ],
    answer: 0,
    explain: t`(P) is a function of $\frac yx$ → homogeneous (2). (Q) is $y' + P(x)y = Q(x)$ → linear (3). (R) $e^{x + y} = e^xe^y$ separates → (1). (S) has $y^2$ on the right, so it is Bernoulli; $z = 1/y$ makes it linear → (4).`,
  }),
  mcq(DE, 2, ALL, 70, {
    q: t`The solution of $\dfrac{dy}{dx} = y\cot x$ with $y\left(\frac\pi2\right) = 2$ is:`,
    options: [t`$y = 2\cos x$`, t`$y = 2\sin x$`, t`$y = 2\sec x$`, t`$y = \sin x + 1$`],
    answer: 1,
    explain: t`$\frac{dy}{y} = \cot x\,dx \Rightarrow \ln|y| = \ln|\sin x| + c \Rightarrow y = C\sin x$. $y(\pi/2) = C = 2$, so $y = 2\sin x$. $\sin x + 1$ also passes through the point but does not satisfy the equation ($y' = \cos x \ne (\sin x + 1)\cot x$).`,
  }),
  mcq(DE, 2, ALL, 80, {
    q: t`A radioactive substance decays at a rate proportional to the amount present; its half-life is 1600 years. The fraction of an initial sample remaining after 400 years is:`,
    options: [t`$\dfrac34$`, t`$2^{-1/4}$`, t`$\dfrac14$`, t`$2^{-4}$`],
    answer: 1,
    hint: t`$N = N_0\left(\frac12\right)^{t/T}$.`,
    explain: t`$\frac{dN}{dt} = -\lambda N \Rightarrow N = N_0e^{-\lambda t}$ and $e^{-\lambda T} = \frac12$ for $T = 1600$. So $\frac{N}{N_0} = \left(\frac12\right)^{400/1600} = 2^{-1/4} \approx 0.84$. $\frac34$ treats the decay as linear; $2^{-4}$ inverts the ratio $t/T$; $\frac14$ confuses the time ratio with the fraction left.`,
  }),
  mcq(DE, 2, ALL, 90, {
    q: t`A curve passes through $(0, 1)$ and its slope at every point $(x, y)$ equals $x + y$. Its equation is:`,
    options: [
      t`$y = 2e^x - x - 1$`,
      t`$y = e^x + x$`,
      t`$y = 2e^x + x - 1$`,
      t`$y = e^x - x$`,
    ],
    answer: 0,
    hint: t`Solve $y' - y = x$.`,
    explain: t`$y' - y = x$, IF $= e^{-x}$: $(ye^{-x})' = xe^{-x}$, so $ye^{-x} = -(x + 1)e^{-x} + C$, i.e. $y = Ce^x - x - 1$. Through $(0, 1)$: $C = 2$. So $y = 2e^x - x - 1$. Check: $y' = 2e^x - 1 = x + y$ ✓. Options 2 and 4 pass through $(0, 1)$ but fail the equation.`,
  }),
  mcq(DE, 3, JA, 150, {
    q: t`The solution of $\dfrac{dy}{dx} = \sin(x + y)$ is:`,
    options: [
      t`$\tan(x + y) + \sec(x + y) = x + C$`,
      t`$\tan(x + y) - \sec(x + y) = x + C$`,
      t`$\tan(x + y) - \sec(x + y) = y + C$`,
      t`$\sec(x + y) - \tan(x + y) = x + C$`,
    ],
    answer: 1,
    hint: t`Put $v = x + y$ and multiply $\frac{1}{1 + \sin v}$ by $\frac{1 - \sin v}{1 - \sin v}$.`,
    explain: t`$v = x + y$: $v' = 1 + \sin v$, so $\int\frac{dv}{1 + \sin v} = x + C$. $\frac{1}{1 + \sin v} = \frac{1 - \sin v}{\cos^2v} = \sec^2v - \sec v\tan v$, whose integral is $\tan v - \sec v$. Hence $\tan(x + y) - \sec(x + y) = x + C$. (Differentiating $\tan v - \sec v$ gives $\frac{1 - \sin v}{\cos^2v} = \frac{1}{1 + \sin v}$ ✓.) Option 4 is the same with the sign of the left side flipped, which would need $-x$.`,
  }),
  mcq(DE, 3, JA, 120, {
    q: t`If $(1 + x^2)\dfrac{dy}{dx} + 2xy = \dfrac{1}{1 + x^2}$ and $y(0) = 0$, then $y(1)$ equals:`,
    options: [t`$\dfrac\pi4$`, t`$\dfrac\pi8$`, t`$\dfrac{\pi}{2}$`, t`$\dfrac{\ln 2}{2}$`],
    answer: 1,
    hint: t`The left side is already $\frac{d}{dx}\big((1 + x^2)y\big)$.`,
    explain: t`$\frac{d}{dx}\left((1 + x^2)y\right) = \frac{1}{1 + x^2}$, so $(1 + x^2)y = \tan^{-1}x + C$; $y(0) = 0 \Rightarrow C = 0$. Then $y(1) = \frac{\pi/4}{2} = \frac\pi8$. Forgetting to divide by $1 + x^2 = 2$ gives $\frac\pi4$.`,
  }),
  mcq(DE, 3, JA, 180, {
    q: t`A differentiable function satisfies $f'(x) = f(x) + \displaystyle\int_0^1 f(t)\,dt$ and $f(0) = 1$. Then $\displaystyle\int_0^1 f(t)\,dt$ equals:`,
    options: [
      t`$\dfrac{e - 1}{3 - e}$`,
      t`$\dfrac{e + 1}{3 - e}$`,
      t`$e - 1$`,
      t`$\dfrac{2}{3 - e}$`,
    ],
    answer: 0,
    hint: t`Call the integral $k$ (a constant) and solve $f' - f = k$.`,
    explain: t`Let $k = \int_0^1f$. Then $f' - f = k \Rightarrow f = Ae^x - k$, and $f(0) = 1 \Rightarrow A = 1 + k$. Now $k = \int_0^1\big((1 + k)e^x - k\big)dx = (1 + k)(e - 1) - k$, so $2k - k(e - 1) = e - 1$, i.e. $k(3 - e) = e - 1$ and $k = \frac{e - 1}{3 - e}$. (Then $f(x) = \frac{2e^x - e + 1}{3 - e}$.) Option 4 is $A$, not $k$.`,
  }),
  mcq(DE, 3, JA, 160, {
    q: t`A curve in the first quadrant passes through $(1, 2)$. At every point $P(x, y)$ on it, the $y$-intercept of the tangent at $P$ equals the abscissa of $P$. The curve is:`,
    options: [
      t`$y = x(2 + \ln x)$`,
      t`$y = 2x - \ln x$`,
      t`$y = x(2 - \ln x)$`,
      t`$y = x^2 + 1$`,
    ],
    answer: 2,
    hint: t`The tangent $Y - y = y'(X - x)$ meets $X = 0$ at $Y = y - xy'$.`,
    explain: t`$y$-intercept $= y - xy' = x$, so $xy' - y = -x$, i.e. $y' - \frac yx = -1$. IF $= \frac1x$: $\left(\frac yx\right)' = -\frac1x$, so $\frac yx = -\ln x + C$. Through $(1, 2)$: $C = 2$, giving $y = x(2 - \ln x)$. Options 2 and 4 pass through $(1, 2)$ but fail the condition (for $y = x^2 + 1$ the intercept is $1 - x^2$).`,
  }),
  num(DE, 3, JA, 150, {
    q: t`Let $y(x)$ satisfy $\dfrac{dy}{dx} + y\tan x = 2x + x^2\tan x$ on $\left(-\frac\pi2, \frac\pi2\right)$ with $y(0) = 1$. Find $2y''\left(\frac\pi3\right)$.`,
    answer: 3,
    hint: t`IF $= \sec x$; notice $\frac{d}{dx}(x^2\sec x) = (2x + x^2\tan x)\sec x$.`,
    explain: t`IF $= e^{\int\tan x} = \sec x$. Then $(y\sec x)' = (2x + x^2\tan x)\sec x = \frac{d}{dx}(x^2\sec x)$, so $y\sec x = x^2\sec x + C$ and $y = x^2 + C\cos x$. $y(0) = 1 \Rightarrow C = 1$: $y = x^2 + \cos x$ (check: $2x - \sin x + (x^2 + \cos x)\tan x = 2x + x^2\tan x$ ✓). $y'' = 2 - \cos x$, so $y''\left(\frac\pi3\right) = 2 - \frac12 = \frac32$ and $2y''\left(\frac\pi3\right) = 3$.`,
  }),
  mcq(DE, 3, JA, 160, {
    q: t`The general solution of $\dfrac{dy}{dx} = \dfrac{x - y + 3}{x - y + 1}$ is:`,
    options: [
      t`$(x - y)^2 + 6x - 2y = C$`,
      t`$(x - y)^2 + 2x - 6y = C$`,
      t`$(x - y)^2 - 6x + 2y = C$`,
      t`$(x + y)^2 + 6x - 2y = C$`,
    ],
    answer: 0,
    hint: t`Put $v = x - y$, so $v' = 1 - y'$.`,
    explain: t`$v = x - y$: $v' = 1 - \frac{v + 3}{v + 1} = \frac{-2}{v + 1}$. So $(v + 1)dv = -2dx$ and $\frac{v^2}{2} + v = -2x + c$, i.e. $v^2 + 2v + 4x = C$: $(x - y)^2 + 2(x - y) + 4x = (x - y)^2 + 6x - 2y = C$. Check by implicit differentiation: $y' = -\frac{2(x - y) + 6}{-2(x - y) - 2} = \frac{x - y + 3}{x - y + 1}$ ✓.`,
  }),
  multi(DE, 3, ADV, 120, {
    q: t`For the differential equation $x\dfrac{dy}{dx} = y$ ($x > 0$), which of the following is/are correct?`,
    options: [
      "Its solution curves are (parts of) straight lines through the origin",
      "It is a homogeneous differential equation",
      "It is a linear differential equation",
      "The solution through (1, 2) is y = x + 1",
    ],
    answers: [0, 1, 2],
    explain: t`$\frac{dy}{y} = \frac{dx}{x} \Rightarrow y = Cx$: lines through the origin ✓. $\frac{dy}{dx} = \frac yx$ depends only on $\frac yx$ — homogeneous ✓; it is also $y' - \frac1xy = 0$ — linear ✓. Through $(1, 2)$: $y = 2x$; $y = x + 1$ passes through $(1, 2)$ but $xy' = x \ne x + 1$ ✗.`,
  }),
  multi(DE, 3, ADV, 140, {
    q: t`Consider the family $y = c_1e^{x} + c_2e^{-2x}$ ($c_1, c_2$ arbitrary). Which of the following is/are correct?`,
    options: [
      t`The family satisfies $y'' - y' - 2y = 0$`,
      t`The family satisfies $y'' + y' - 2y = 0$`,
      "The differential equation of the family has order 2",
      t`$y = 3e^{x}$ satisfies the differential equation of the family`,
    ],
    answers: [1, 2, 3],
    hint: t`$e^{mx}$ solves $y'' + py' + qy = 0$ when $m^2 + pm + q = 0$.`,
    explain: t`$e^{mx}$ with $m = 1, -2$ are roots of $(m - 1)(m + 2) = m^2 + m - 2 = 0$, so the family satisfies $y'' + y' - 2y = 0$ (B ✓, A ✗ — that has roots $2, -1$). Two arbitrary constants ⇒ order 2 (C ✓). $3e^x$ is the member $c_1 = 3$, $c_2 = 0$ (D ✓). Direct check of A on $e^{-2x}$: $4 + 2 - 2 = 4 \ne 0$.`,
  }),
  multi(DE, 3, ADV, 150, {
    q: t`Let $y(x)$ solve $\dfrac{dy}{dx} + y = e^{-x}$ with $y(0) = 0$. Which of the following is/are correct?`,
    options: [
      t`$y$ attains its maximum value at $x = 1$`,
      t`$y$ is increasing for all $x > 0$`,
      t`The maximum value of $y$ is $\dfrac1e$`,
      t`$y'(0) = 1$`,
    ],
    answers: [0, 2, 3],
    hint: t`IF $= e^x$ gives $(ye^x)' = 1$.`,
    explain: t`$(ye^x)' = 1 \Rightarrow ye^x = x + C$; $y(0) = 0 \Rightarrow y = xe^{-x}$. $y' = (1 - x)e^{-x}$: positive for $x < 1$, negative for $x > 1$, so the maximum is at $x = 1$ (A ✓, B ✗), with value $e^{-1}$ (C ✓). $y'(0) = 1$ (D ✓; also directly from the equation: $y'(0) = e^0 - y(0) = 1$).`,
  }),
  multi(DE, 3, ADV, 150, {
    q: t`The normal at every point of a curve passes through the origin, and the curve passes through $(3, 4)$. Which of the following is/are correct?`,
    options: [
      t`The curve satisfies $x + y\dfrac{dy}{dx} = 0$`,
      "The curve passes through (4, 4)",
      "The curve is a straight line through the origin",
      "The curve passes through (0, 5)",
    ],
    answers: [0, 3],
    hint: t`The normal at $(x, y)$ is $(X - x) + y'(Y - y) = 0$; put $X = Y = 0$.`,
    explain: t`The normal $(X - x) + y'(Y - y) = 0$ passes through $(0, 0)$ iff $-x - yy' = 0$, i.e. $x + yy' = 0$ (A ✓). Then $x^2 + y^2 = C$: circles centred at the origin, not lines (C ✗). Through $(3, 4)$: $x^2 + y^2 = 25$, which contains $(0, 5)$ (D ✓) but not $(4, 4)$ since $16 + 16 = 32$ (B ✗).`,
  }),
  multi(DE, 3, ADV, 160, {
    q: t`Let $y(x)$, $x > 0$, satisfy $x\dfrac{dy}{dx} - y = x^2\ln x$ with $y(1) = 0$. Which of the following is/are correct?`,
    options: [
      t`$y(e) = e$`,
      t`The integrating factor (after writing it as $y' + Py = Q$) is $\dfrac1x$`,
      t`$y(e^2) = 2e^4 + e^2$`,
      t`$y'(1) = 0$`,
    ],
    answers: [0, 1, 3],
    hint: t`Divide by $x$: $y' - \frac yx = x\ln x$.`,
    explain: t`$y' - \frac1xy = x\ln x$, IF $= e^{-\ln x} = \frac1x$ (B ✓). $\left(\frac yx\right)' = \ln x \Rightarrow \frac yx = x\ln x - x + C$; $y(1) = 0 \Rightarrow C = 1$. So $y = x^2\ln x - x^2 + x$. $y(e) = e^2 - e^2 + e = e$ (A ✓). $y(e^2) = 2e^4 - e^4 + e^2 = e^4 + e^2$, not $2e^4 + e^2$ (C ✗ — forgets the $-x^2$ term). $y' = 2x\ln x - x + 1$, so $y'(1) = 0$ (D ✓).`,
  }),
];

/* ================================================================== */
/* Formula sheets                                                      */
/* ================================================================== */

export const formulas: FormulaSheet[] = [
  {
    subject: "maths",
    chapter: INT,
    items: [
      { name: "Power rule", tex: t`\int x^n\,dx = \frac{x^{n+1}}{n+1} + C,\quad n \ne -1`, note: t`For $n = -1$: $\int\frac{dx}{x} = \ln|x| + C$.` },
      { name: "Exponential", tex: t`\int e^{ax}dx = \frac{e^{ax}}{a} + C,\qquad \int a^x dx = \frac{a^x}{\ln a} + C` },
      { name: "Basic trig", tex: t`\int\sin x = -\cos x,\ \int\cos x = \sin x,\ \int\sec^2x = \tan x,\ \int\csc^2x = -\cot x` },
      { name: "Trig logs", tex: t`\int\tan x = \ln|\sec x|,\ \int\cot x = \ln|\sin x|,\ \int\sec x = \ln|\sec x + \tan x|,\ \int\csc x = \ln|\csc x - \cot x|` },
      { name: "Linear substitution", tex: t`\int f(ax + b)\,dx = \frac1a F(ax + b) + C` },
      { name: "f'/f and f^n f'", tex: t`\int\frac{f'(x)}{f(x)}dx = \ln|f(x)| + C,\quad \int f^n f'\,dx = \frac{f^{n+1}}{n+1} + C` },
      { name: "Standard: sum of squares", tex: t`\int\frac{dx}{x^2 + a^2} = \frac1a\tan^{-1}\frac xa + C` },
      { name: "Standard: difference of squares", tex: t`\int\frac{dx}{x^2 - a^2} = \frac{1}{2a}\ln\left|\frac{x - a}{x + a}\right|,\quad \int\frac{dx}{a^2 - x^2} = \frac{1}{2a}\ln\left|\frac{a + x}{a - x}\right|` },
      { name: "Standard: square roots", tex: t`\int\frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\frac xa,\quad \int\frac{dx}{\sqrt{x^2 \pm a^2}} = \ln\left|x + \sqrt{x^2 \pm a^2}\right|` },
      { name: "Root of quadratic (integrand)", tex: t`\int\sqrt{a^2 - x^2}\,dx = \frac x2\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\frac xa + C`, note: t`$\int\sqrt{x^2 \pm a^2}\,dx = \frac x2\sqrt{x^2 \pm a^2} \pm \frac{a^2}{2}\ln\left|x + \sqrt{x^2 \pm a^2}\right| + C$.` },
      { name: "Linear over quadratic", tex: t`px + q = A\frac{d}{dx}(ax^2 + bx + c) + B`, note: "Then split into an f'/f part and a completed-square part." },
      { name: "Partial fractions", tex: t`\frac{px + q}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}`, note: t`Repeated factor $(x - a)^2$: use $\frac{A}{x - a} + \frac{B}{(x - a)^2}$; irreducible quadratic: $\frac{Cx + D}{x^2 + px + q}$. Divide first if the fraction is improper.` },
      { name: "Integration by parts", tex: t`\int u\,v\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx`, note: "Choose u by ILATE: Inverse trig, Log, Algebraic, Trig, Exponential." },
      { name: "e^x pattern", tex: t`\int e^x\big(f(x) + f'(x)\big)dx = e^xf(x) + C` },
      { name: "e^{ax} sin bx", tex: t`\int e^{ax}\sin bx\,dx = \frac{e^{ax}}{a^2 + b^2}(a\sin bx - b\cos bx) + C`, note: t`$\int e^{ax}\cos bx\,dx = \frac{e^{ax}}{a^2 + b^2}(a\cos bx + b\sin bx) + C$.` },
      { name: "Half-angle substitution", tex: t`t = \tan\frac x2:\ \sin x = \frac{2t}{1 + t^2},\ \cos x = \frac{1 - t^2}{1 + t^2},\ dx = \frac{2\,dt}{1 + t^2}`, note: t`For $\int\frac{dx}{a + b\cos x}$, $\int\frac{dx}{a + b\sin x}$.` },
      { name: "Fundamental theorem", tex: t`\int_a^b f(x)\,dx = F(b) - F(a),\quad F' = f` },
      { name: "Leibniz rule", tex: t`\frac{d}{dx}\int_{u(x)}^{v(x)}f(t)\,dt = f(v)\,v' - f(u)\,u'` },
      { name: "King's property", tex: t`\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx`, note: t`Special case $\int_0^a f(x)dx = \int_0^a f(a - x)dx$.` },
      { name: "Odd / even", tex: t`\int_{-a}^{a}f = \begin{cases}2\int_0^a f & f\ \text{even}\\ 0 & f\ \text{odd}\end{cases}` },
      { name: "Half-interval property", tex: t`\int_0^{2a}f = \begin{cases}2\int_0^a f & f(2a - x) = f(x)\\ 0 & f(2a - x) = -f(x)\end{cases}` },
      { name: "Periodic function", tex: t`\int_0^{nT}f(x)\,dx = n\int_0^Tf(x)\,dx\quad(\text{period } T)` },
      { name: "Wallis' formula", tex: t`\int_0^{\pi/2}\sin^nx\,dx = \int_0^{\pi/2}\cos^nx\,dx = \frac{(n - 1)(n - 3)\cdots}{n(n - 2)\cdots}\times\begin{cases}\frac\pi2 & n\ \text{even}\\ 1 & n\ \text{odd}\end{cases}` },
      { name: "Limit of a sum", tex: t`\lim_{n\to\infty}\frac1n\sum_{r=1}^{n}f\left(\frac rn\right) = \int_0^1f(x)\,dx`, note: t`If $r$ runs to $kn$, the upper limit becomes $k$.` },
      { name: "Useful results", tex: t`\int_0^{\pi/2}\ln\sin x\,dx = -\frac\pi2\ln 2,\qquad \int_0^{\pi/4}\ln(1 + \tan x)\,dx = \frac\pi8\ln 2` },
    ],
  },
  {
    subject: "maths",
    chapter: AOI,
    items: [
      { name: "Area under a curve (x-axis)", tex: t`A = \int_a^b|f(x)|\,dx`, note: "Split at the zeros of f; a signed integral can be 0 while the area is not." },
      { name: "Area w.r.t. y-axis", tex: t`A = \int_c^d|g(y)|\,dy\quad(x = g(y))` },
      { name: "Area between two curves", tex: t`A = \int_a^b\big(f(x) - g(x)\big)\,dx,\quad f \ge g\ \text{on}\ [a, b]`, note: "Limits are the x-coordinates of the intersection points; switch upper/lower curve where they cross." },
      { name: "Horizontal strips", tex: t`A = \int_c^d\big(x_{\text{right}}(y) - x_{\text{left}}(y)\big)\,dy` },
      { name: "Circle", tex: t`x^2 + y^2 = r^2:\quad A = \pi r^2`, note: t`Sector of angle $\theta$: $\frac12r^2\theta$.` },
      { name: "Ellipse", tex: t`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1:\quad A = \pi ab` },
      { name: "Ellipse and chord", tex: t`A_{\text{minor segment}} = \frac{\pi ab}{4} - \frac{ab}{2} = \frac{ab(\pi - 2)}{4}`, note: t`Chord $\frac xa + \frac yb = 1$.` },
      { name: "Parabola and latus rectum", tex: t`y^2 = 4ax,\ x = a:\quad A = \frac83a^2` },
      { name: "Two parabolas", tex: t`y^2 = 4ax\ \text{and}\ x^2 = 4by:\quad A = \frac{16ab}{3}` },
      { name: "Parabola and line", tex: t`A = \frac{|a|(\beta - \alpha)^3}{6}`, note: t`Area between $y = ax^2 + bx + c$ and a line meeting it at $x = \alpha, \beta$ (or the x-axis between its roots).` },
      { name: "y = x^2 and y = kx", tex: t`A = \frac{k^3}{6}` },
      { name: "Parabola and horizontal line", tex: t`y = x^2,\ y = k:\quad A = \frac43k^{3/2}` },
      { name: "One arch of sine", tex: t`\int_0^\pi\sin x\,dx = 2,\qquad \int_0^{\pi}|\cos x|\,dx = 2` },
      { name: "Log and exponential", tex: t`\int_1^a\ln x\,dx = a\ln a - a + 1,\qquad \int_0^{\ln a}e^xdx = a - 1` },
      { name: "Symmetry", tex: t`\text{Region symmetric about an axis} \Rightarrow A = 2\times(\text{one half})` },
      { name: "|x| + |y| = a", tex: t`A = 2a^2`, note: "A square with diagonals 2a." },
    ],
  },
  {
    subject: "maths",
    chapter: DE,
    items: [
      { name: "Order", tex: t`\text{order} = \text{highest derivative present}` },
      { name: "Degree", tex: t`\text{degree} = \text{power of the highest derivative}`, note: "Only after the equation is a polynomial in derivatives (clear radicals / fractional powers). Undefined if derivatives sit inside sin, e^, ln, etc." },
      { name: "Arbitrary constants", tex: t`n\ \text{constants} \Rightarrow \text{DE of order}\ n`, note: "General solution of an order-n DE has n constants; a particular solution has none." },
      { name: "Variables separable", tex: t`\frac{dy}{dx} = f(x)g(y) \Rightarrow \int\frac{dy}{g(y)} = \int f(x)\,dx + C` },
      { name: "Reducible by substitution", tex: t`\frac{dy}{dx} = f(ax + by + c):\quad v = ax + by + c,\ v' = a + b\,f(v)` },
      { name: "Homogeneous test", tex: t`F(\lambda x, \lambda y) = F(x, y) \iff \frac{dy}{dx} = g\left(\frac yx\right)` },
      { name: "Homogeneous: solving", tex: t`y = vx,\quad \frac{dy}{dx} = v + x\frac{dv}{dx}`, note: t`For $\frac{dx}{dy} = h\left(\frac xy\right)$ use $x = vy$.` },
      { name: "Linear first order", tex: t`\frac{dy}{dx} + P(x)y = Q(x),\quad \text{IF} = e^{\int P\,dx}` },
      { name: "Linear: solution", tex: t`y\cdot\text{IF} = \int Q\cdot\text{IF}\,dx + C` },
      { name: "Linear in x", tex: t`\frac{dx}{dy} + P_1(y)x = Q_1(y),\quad \text{IF} = e^{\int P_1dy}` },
      { name: "Bernoulli", tex: t`\frac{dy}{dx} + Py = Qy^n:\quad z = y^{1 - n} \Rightarrow \frac{dz}{dx} + (1 - n)Pz = (1 - n)Q` },
      { name: "Exact differentials", tex: t`x\,dy + y\,dx = d(xy),\ \frac{x\,dy - y\,dx}{x^2} = d\left(\frac yx\right),\ \frac{x\,dy - y\,dx}{x^2 + y^2} = d\left(\tan^{-1}\frac yx\right)` },
      { name: "More exact forms", tex: t`\frac{x\,dx + y\,dy}{x^2 + y^2} = \frac12 d\ln(x^2 + y^2),\quad \frac{y\,dx - x\,dy}{y^2} = d\left(\frac xy\right)` },
      { name: "Growth / decay", tex: t`\frac{dN}{dt} = kN \Rightarrow N = N_0e^{kt}`, note: t`Half-life $T = \frac{\ln 2}{\lambda}$; $N = N_0\left(\frac12\right)^{t/T}$.` },
      { name: "Newton's law of cooling", tex: t`\frac{dT}{dt} = -k(T - T_s) \Rightarrow T - T_s = (T_0 - T_s)e^{-kt}` },
      { name: "Tangent and normal facts", tex: t`\text{tangent: } Y - y = y'(X - x),\quad y\text{-intercept} = y - xy'`, note: t`Normal: $(X - x) + y'(Y - y) = 0$; normal through origin ⇒ $x + yy' = 0$.` },
      { name: "Second-order constant coefficients (forming DEs)", tex: t`y = c_1e^{m_1x} + c_2e^{m_2x} \Rightarrow y'' - (m_1 + m_2)y' + m_1m_2y = 0`, note: t`$y = A\cos kx + B\sin kx \Rightarrow y'' + k^2y = 0$.` },
      { name: "Clairaut form", tex: t`y = xy' + f(y') \Rightarrow y = cx + f(c)` },
    ],
  },
];

/** All questions in this bank. */
export const questions: ExamQuestion[] = [...integrals, ...integrals2, ...areas, ...diffEq];
