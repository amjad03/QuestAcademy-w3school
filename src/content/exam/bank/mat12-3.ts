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
