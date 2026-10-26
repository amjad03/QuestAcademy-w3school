import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "maths-senior";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Integrals (NCERT Ch 7, ISC Integrals)                               */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-integrals",
    title: "Integrals",
    icon: "∫",
    description: "Antiderivatives, standard forms, substitution, special integrals, partial fractions, integration by parts, definite integrals and their properties.",
    lessons: [
      {
        slug: "c12-int-standard-substitution",
        title: "Antiderivatives, Standard Forms and Substitution",
        summary: "Integration as the reverse of differentiation, the table of standard integrals, and the method of substitution with trigonometric identities.",
        minutes: 22,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🚗",
            caption: "A car's speedometer gives speed at every instant. Integration turns that speed back into the distance travelled.",
          },
          {
            type: "text",
            md: t`Differentiation takes a function and gives its rate of change. **Integration** runs this backwards. If $\frac{d}{dx}F(x) = f(x)$, then $F$ is called an **antiderivative** (or **primitive**) of $f$.

Since the derivative of a constant is 0, $x^3$, $x^3 + 5$ and $x^3 - \pi$ all have derivative $3x^2$. So we write the whole family at once as the **indefinite integral**
$\int 3x^2\,dx = x^3 + C$, where $C$ is the **constant of integration**. Here $3x^2$ is the **integrand** and $x$ is the **variable of integration**.`,
          },
          {
            type: "table",
            headers: ["Integral", "Result (+ C)"],
            rows: [
              [t`$\int x^n\,dx$, $n \neq -1$`, t`$\frac{x^{n+1}}{n+1}$`],
              [t`$\int \frac{1}{x}\,dx$`, t`$\log|x|$`],
              [t`$\int e^x\,dx$; $\int a^x\,dx$`, t`$e^x$; $\frac{a^x}{\log a}$`],
              [t`$\int \sin x\,dx$; $\int \cos x\,dx$`, t`$-\cos x$; $\sin x$`],
              [t`$\int \sec^2 x\,dx$; $\int \csc^2 x\,dx$`, t`$\tan x$; $-\cot x$`],
              [t`$\int \sec x \tan x\,dx$; $\int \csc x \cot x\,dx$`, t`$\sec x$; $-\csc x$`],
              [t`$\int \frac{dx}{\sqrt{1-x^2}}$; $\int \frac{dx}{1+x^2}$`, t`$\sin^{-1} x$; $\tan^{-1} x$`],
              [t`$\int \frac{dx}{x\sqrt{x^2-1}}$`, t`$\sec^{-1} x$`],
            ],
          },
          {
            type: "text",
            md: t`Two properties let us use the table term by term: $\int [f(x) \pm g(x)]\,dx = \int f(x)\,dx \pm \int g(x)\,dx$ and $\int k f(x)\,dx = k\int f(x)\,dx$ for a constant $k$.

**Geometric meaning:** the curves $y = F(x) + C$ for different $C$ are vertical shifts of one another. At any fixed $x$ they all have the same slope $f(x)$, so their tangents there are parallel. A condition such as "the curve passes through $(1, 2)$" picks out one member of the family.`,
          },
          {
            type: "example",
            title: "Term-by-term integration and finding C",
            problem: t`Find $f(x)$ if $f'(x) = 6x^2 - \frac{4}{x} + 2e^x$ for $x > 0$ and $f(1) = 2e$.`,
            steps: [
              t`Integrate each term: $\int 6x^2\,dx = 2x^3$, $\int \frac{4}{x}\,dx = 4\log x$ (as $x > 0$), $\int 2e^x\,dx = 2e^x$.`,
              t`So $f(x) = 2x^3 - 4\log x + 2e^x + C$.`,
              t`Use $f(1) = 2e$: $2 - 0 + 2e + C = 2e$, so $C = -2$.`,
            ],
            answer: t`$f(x) = 2x^3 - 4\log x + 2e^x - 2$.`,
          },
          {
            type: "text",
            md: t`**Integration by substitution.** If the integrand contains a function $g(x)$ together with its derivative $g'(x)$, put $t = g(x)$, so $dt = g'(x)\,dx$:

$\int f(g(x))\,g'(x)\,dx = \int f(t)\,dt.$

Integrate in $t$, then put $t = g(x)$ back. This is the chain rule read backwards. Using it, NCERT derives four results you must know.`,
          },
          {
            type: "formula",
            tex: t`\int \tan x\,dx = \log|\sec x| + C,\quad \int \cot x\,dx = \log|\sin x| + C,\quad \int \sec x\,dx = \log|\sec x + \tan x| + C,\quad \int \csc x\,dx = \log|\csc x - \cot x| + C`,
            caption: "Derived by substitution; learn the derivation of sec x for the board.",
          },
          {
            type: "example",
            title: "Deriving the integral of sec x",
            problem: t`Show that $\int \sec x\,dx = \log|\sec x + \tan x| + C$.`,
            steps: [
              t`Multiply and divide by $\sec x + \tan x$: $\int \frac{\sec x(\sec x + \tan x)}{\sec x + \tan x}\,dx = \int \frac{\sec^2 x + \sec x\tan x}{\sec x + \tan x}\,dx$.`,
              t`Put $t = \sec x + \tan x$. Then $dt = (\sec x \tan x + \sec^2 x)\,dx$, which is exactly the numerator.`,
              t`The integral becomes $\int \frac{dt}{t} = \log|t| + C$.`,
            ],
            answer: t`$\int \sec x\,dx = \log|\sec x + \tan x| + C$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\int \frac{e^{\tan^{-1} x}}{1 + x^2}\,dx$ equals`,
                options: [t`$e^{\tan^{-1} x} + C$`, t`$\frac{e^{\tan^{-1} x}}{1+x^2} + C$`, t`$e^{x}\tan^{-1} x + C$`, t`$\tan^{-1}(e^x) + C$`],
                answer: 0,
                explain: t`Put $t = \tan^{-1} x$, $dt = \frac{dx}{1+x^2}$. The integral becomes $\int e^t\,dt = e^t + C$.`,
              },
              {
                kind: "mcq",
                q: t`$\int \frac{dx}{3x + 2}$ equals`,
                options: [t`$\log|3x+2| + C$`, t`$\frac{1}{3}\log|3x+2| + C$`, t`$3\log|3x+2| + C$`, t`$-\frac{3}{(3x+2)^2} + C$`],
                answer: 1,
                explain: t`With $t = 3x + 2$, $dx = \frac{dt}{3}$, so the answer is $\frac{1}{3}\log|3x+2| + C$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Using trigonometric identities.** Powers and products of sines and cosines are first turned into sums:

$\sin^2 x = \frac{1 - \cos 2x}{2}$, $\cos^2 x = \frac{1 + \cos 2x}{2}$, $\sin^3 x = \frac{3\sin x - \sin 3x}{4}$, and $2\sin A\cos B = \sin(A+B) + \sin(A-B)$, $2\cos A\cos B = \cos(A+B) + \cos(A-B)$, $2\sin A\sin B = \cos(A-B) - \cos(A+B)$.`,
          },
          {
            type: "example",
            title: "Product to sum",
            problem: t`Find $\int \sin 3x \cos 2x\,dx$.`,
            steps: [
              t`$\sin 3x\cos 2x = \frac{1}{2}[\sin 5x + \sin x]$.`,
              t`$\int \sin 5x\,dx = -\frac{\cos 5x}{5}$ and $\int \sin x\,dx = -\cos x$.`,
              t`Multiply by $\frac{1}{2}$.`,
            ],
            answer: t`$-\frac{\cos 5x}{10} - \frac{\cos x}{2} + C$.`,
          },
          {
            type: "mistake",
            wrong: t`$\int \cos 4x\,dx = \sin 4x + C$, because the integral of $\cos$ is $\sin$.`,
            right: t`$\int \cos 4x\,dx = \frac{\sin 4x}{4} + C$. In general $\int f(ax+b)\,dx = \frac{1}{a}F(ax+b) + C$.`,
            why: t`Differentiate your answer to check: $\frac{d}{dx}\sin 4x = 4\cos 4x$, which is 4 times too big. The chain rule puts a factor $a$ in the derivative, so integration must divide by $a$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each integrand with its antiderivative.",
              pairs: [
                [t`$\sec^2 x$`, t`$\tan x$`],
                [t`$\tan x$`, t`$\log|\sec x|$`],
                [t`$\frac{1}{1+x^2}$`, t`$\tan^{-1} x$`],
                [t`$\csc x \cot x$`, t`$-\csc x$`],
                [t`$e^{2x}$`, t`$\frac{1}{2}e^{2x}$`],
              ],
              explain: t`Check any match by differentiating the right side. $\tan x$ and $\sec^2 x$ are often swapped: $\sec^2 x$ is the derivative of $\tan x$, not its integral.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Write "$+ C$" in every indefinite integral; examiners deduct for leaving it out in a final answer. Show the substitution line ($t = \ldots$, $dt = \ldots\,dx$) because it carries a step mark. Keep the modulus in $\log|x|$ unless the question says $x > 0$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\int f(x)\,dx = F(x) + C$ means $F'(x) = f(x)$; all antiderivatives differ by a constant.`,
              t`Standard table plus linearity handles sums of basic functions.`,
              t`Substitution: spot $g(x)$ with $g'(x)$, put $t = g(x)$.`,
              t`$\int f(ax+b)\,dx = \frac{1}{a}F(ax+b) + C$.`,
              t`Turn powers and products of sin/cos into sums before integrating.`,
            ],
          },
        ],
        flashcards: [
          { front: "Antiderivative of f", back: t`A function $F$ with $F'(x) = f(x)$.` },
          { front: t`$\int \frac{dx}{x}$`, back: t`$\log|x| + C$` },
          { front: t`$\int \tan x\,dx$`, back: t`$\log|\sec x| + C$ (or $-\log|\cos x| + C$)` },
          { front: t`$\int \sec x\,dx$`, back: t`$\log|\sec x + \tan x| + C$` },
          { front: t`$\int \csc x\,dx$`, back: t`$\log|\csc x - \cot x| + C$` },
          { front: t`$\int a^x\,dx$`, back: t`$\frac{a^x}{\log a} + C$` },
          { front: t`$\sin^3 x$ as a sum`, back: t`$\frac{3\sin x - \sin 3x}{4}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\int (2x + 3)^5\,dx$ equals`,
            options: [t`$\frac{(2x+3)^6}{6} + C$`, t`$\frac{(2x+3)^6}{12} + C$`, t`$10(2x+3)^4 + C$`, t`$\frac{(2x+3)^6}{3} + C$`],
            answer: 1,
            explain: t`$\int f(ax+b)\,dx = \frac{1}{a}F(ax+b)$: here $\frac{1}{2}\cdot\frac{(2x+3)^6}{6} = \frac{(2x+3)^6}{12}$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \frac{\log x}{x}\,dx$ equals`,
            options: [t`$\log(\log x) + C$`, t`$\frac{(\log x)^2}{2} + C$`, t`$\frac{1}{x} + C$`, t`$x\log x + C$`],
            answer: 1,
            explain: t`Put $t = \log x$, $dt = \frac{dx}{x}$: $\int t\,dt = \frac{t^2}{2} + C$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \cos^2 x\,dx$ equals`,
            options: [t`$\frac{\cos^3 x}{3} + C$`, t`$\frac{x}{2} + \frac{\sin 2x}{4} + C$`, t`$\frac{x}{2} - \frac{\sin 2x}{4} + C$`, t`$\sin^2 x + C$`],
            answer: 1,
            explain: t`$\cos^2 x = \frac{1 + \cos 2x}{2}$, so the integral is $\frac{x}{2} + \frac{\sin 2x}{4} + C$. The power rule does not apply to $\cos^2 x$.`,
          },
          {
            kind: "multi",
            q: t`Which are antiderivatives of $\sin 2x$? (Select all.)`,
            options: [t`$-\frac{\cos 2x}{2}$`, t`$\sin^2 x$`, t`$-\cos^2 x$`, t`$-\cos 2x$`],
            answers: [0, 1, 2],
            explain: t`$\frac{d}{dx}\sin^2 x = 2\sin x\cos x = \sin 2x$ and $\frac{d}{dx}(-\cos^2 x) = \sin 2x$ too. They differ from $-\frac{\cos 2x}{2}$ only by constants. $-\cos 2x$ has derivative $2\sin 2x$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`The curves $y = x^2 + C$ all have parallel tangents at $x = 3$.`,
            answer: true,
            explain: t`Each has slope $2x = 6$ at $x = 3$; they are vertical shifts of one another.`,
          },
          {
            kind: "numeric",
            q: t`If $f'(x) = 3x^2 + 2$ and $f(0) = 4$, find $f(2)$.`,
            answer: 16,
            explain: t`$f(x) = x^3 + 2x + 4$, so $f(2) = 8 + 4 + 4 = 16$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \frac{\sin x}{1 + \cos x}\,dx$ equals`,
            options: [t`$\log|1 + \cos x| + C$`, t`$-\log|1 + \cos x| + C$`, t`$\log|\sin x| + C$`, t`$-\frac{1}{(1+\cos x)^2} + C$`],
            answer: 1,
            explain: t`Put $t = 1 + \cos x$, $dt = -\sin x\,dx$: $-\int \frac{dt}{t} = -\log|1 + \cos x| + C$. The minus sign is the usual slip.`,
            difficulty: 2,
            hint: t`What is the derivative of the denominator?`,
          },
        ],
      },
      {
        slug: "c12-int-special-partial",
        title: "Special Integrals and Partial Fractions",
        summary: "The six special integrals, quadratic denominators by completing the square, and rational functions split into partial fractions.",
        minutes: 24,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Many integrals reduce to one of six **special forms**. NCERT proves each of them (the first two by partial fractions, the others by trigonometric substitutions such as $x = a\tan\theta$ or $x = a\sec\theta$). Learn them as a set; nearly every quadratic denominator ends up in one of them.`,
          },
          {
            type: "table",
            headers: ["Integral", "Result (+ C)"],
            rows: [
              [t`$\int \frac{dx}{x^2 - a^2}$`, t`$\frac{1}{2a}\log\left|\frac{x-a}{x+a}\right|$`],
              [t`$\int \frac{dx}{a^2 - x^2}$`, t`$\frac{1}{2a}\log\left|\frac{a+x}{a-x}\right|$`],
              [t`$\int \frac{dx}{x^2 + a^2}$`, t`$\frac{1}{a}\tan^{-1}\frac{x}{a}$`],
              [t`$\int \frac{dx}{\sqrt{x^2 - a^2}}$`, t`$\log\left|x + \sqrt{x^2 - a^2}\right|$`],
              [t`$\int \frac{dx}{\sqrt{a^2 - x^2}}$`, t`$\sin^{-1}\frac{x}{a}$`],
              [t`$\int \frac{dx}{\sqrt{x^2 + a^2}}$`, t`$\log\left|x + \sqrt{x^2 + a^2}\right|$`],
            ],
          },
          {
            type: "text",
            md: t`**Quadratic denominators.** For $\int \frac{dx}{ax^2 + bx + c}$ or $\int \frac{dx}{\sqrt{ax^2 + bx + c}}$, take out $a$ and **complete the square**: $x^2 + \frac{b}{a}x + \frac{c}{a} = \left(x + \frac{b}{2a}\right)^2 + \left(\frac{c}{a} - \frac{b^2}{4a^2}\right)$. Then use the table.

For $\int \frac{px + q}{ax^2 + bx + c}\,dx$, write the numerator as $px + q = A\frac{d}{dx}(ax^2 + bx + c) + B$. Find $A$ and $B$ by comparing coefficients. The $A$ part gives a logarithm; the $B$ part is a special integral.`,
          },
          {
            type: "example",
            title: "Linear over quadratic",
            problem: t`Find $\int \frac{x + 2}{2x^2 + 6x + 5}\,dx$.`,
            steps: [
              t`$\frac{d}{dx}(2x^2 + 6x + 5) = 4x + 6$. Write $x + 2 = A(4x + 6) + B$: comparing, $4A = 1$, $6A + B = 2$, so $A = \frac{1}{4}$, $B = \frac{1}{2}$.`,
              t`First part: $\frac{1}{4}\int \frac{4x+6}{2x^2+6x+5}\,dx = \frac{1}{4}\log(2x^2 + 6x + 5)$ (the quadratic is always positive).`,
              t`Second part: $2x^2 + 6x + 5 = 2\left[\left(x + \frac{3}{2}\right)^2 + \frac{1}{4}\right]$, so $\frac{1}{2}\int \frac{dx}{2x^2+6x+5} = \frac{1}{4}\int \frac{dx}{(x + \frac{3}{2})^2 + (\frac{1}{2})^2} = \frac{1}{4}\cdot 2\tan^{-1}(2x + 3)$.`,
              t`Add the two parts.`,
            ],
            answer: t`$\frac{1}{4}\log(2x^2 + 6x + 5) + \frac{1}{2}\tan^{-1}(2x + 3) + C$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\int \frac{dx}{x^2 + 4x + 13}$ equals`,
                options: [t`$\frac{1}{3}\tan^{-1}\frac{x+2}{3} + C$`, t`$\tan^{-1}\frac{x+2}{3} + C$`, t`$\frac{1}{6}\log\left|\frac{x-1}{x+5}\right| + C$`, t`$\frac{1}{13}\tan^{-1}\frac{x}{13} + C$`],
                answer: 0,
                explain: t`$x^2 + 4x + 13 = (x+2)^2 + 3^2$, so the answer is $\frac{1}{3}\tan^{-1}\frac{x+2}{3} + C$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Partial fractions.** A rational function $\frac{P(x)}{Q(x)}$ is **proper** if the degree of $P$ is less than the degree of $Q$. If it is improper, first divide, so that it becomes a polynomial plus a proper fraction. A proper fraction is then split according to the factors of $Q(x)$:`,
          },
          {
            type: "table",
            headers: ["Factor in the denominator", "Partial fraction form"],
            rows: [
              [t`$(x-a)(x-b)$, $a \neq b$`, t`$\frac{A}{x-a} + \frac{B}{x-b}$`],
              [t`$(x-a)^2$`, t`$\frac{A}{x-a} + \frac{B}{(x-a)^2}$`],
              [t`$(x-a)^2(x-b)$`, t`$\frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b}$`],
              [t`$(x-a)(x^2 + bx + c)$, quadratic not factorable`, t`$\frac{A}{x-a} + \frac{Bx + C}{x^2 + bx + c}$`],
            ],
          },
          {
            type: "example",
            title: "Distinct linear factors",
            problem: t`Find $\int \frac{x}{(x+1)(x+2)}\,dx$.`,
            steps: [
              t`Write $\frac{x}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$, so $x = A(x+2) + B(x+1)$.`,
              t`Put $x = -1$: $-1 = A$. Put $x = -2$: $-2 = -B$, so $B = 2$.`,
              t`Integrate: $-\log|x+1| + 2\log|x+2| + C$.`,
            ],
            answer: t`$\log\frac{(x+2)^2}{|x+1|} + C$.`,
          },
          {
            type: "example",
            title: "A non-factorable quadratic factor",
            problem: t`Find $\int \frac{dx}{x(x^2 + 1)}$.`,
            steps: [
              t`Write $\frac{1}{x(x^2+1)} = \frac{A}{x} + \frac{Bx + C}{x^2 + 1}$, so $1 = A(x^2 + 1) + (Bx + C)x$.`,
              t`Put $x = 0$: $A = 1$. Compare $x^2$: $A + B = 0$, so $B = -1$. Compare $x$: $C = 0$.`,
              t`So the integrand is $\frac{1}{x} - \frac{x}{x^2+1}$, and $\int \frac{x}{x^2+1}\,dx = \frac{1}{2}\log(x^2+1)$.`,
            ],
            answer: t`$\log|x| - \frac{1}{2}\log(x^2 + 1) + C$.`,
          },
          {
            type: "mistake",
            wrong: t`For $\frac{x^2 + 1}{(x-1)(x-2)}$, write $\frac{A}{x-1} + \frac{B}{x-2}$ straight away.`,
            right: t`The fraction is improper (degree 2 over degree 2). Divide first: $\frac{x^2 + 1}{x^2 - 3x + 2} = 1 + \frac{3x - 1}{(x-1)(x-2)}$, then split the proper part.`,
            why: t`Two simple fractions $\frac{A}{x-1} + \frac{B}{x-2}$ always add up to a proper fraction, so they can never equal an improper one. Comparing coefficients gives contradictory equations, or a wrong answer if you only substitute values.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which special form does each integral use?",
              groups: [t`$\tan^{-1}$ form`, t`$\log$ form`, t`$\sin^{-1}$ form`],
              items: [
                { text: t`$\int \frac{dx}{x^2 + 9}$`, group: 0, hint: t`Sum of squares in the denominator, no root.` },
                { text: t`$\int \frac{dx}{x^2 - 9}$`, group: 1, hint: t`Difference of squares gives $\frac{1}{2a}\log$.` },
                { text: t`$\int \frac{dx}{\sqrt{9 - x^2}}$`, group: 2, hint: t`$\sqrt{a^2 - x^2}$ in the denominator.` },
                { text: t`$\int \frac{dx}{\sqrt{x^2 + 9}}$`, group: 1, hint: t`$\log|x + \sqrt{x^2 + a^2}|$.` },
                { text: t`$\int \frac{dx}{x^2 + 2x + 5}$`, group: 0, hint: t`$(x+1)^2 + 2^2$.` },
                { text: t`$\int \frac{dx}{\sqrt{4x - x^2}}$`, group: 2, hint: t`$4x - x^2 = 4 - (x-2)^2$.` },
              ],
              explain: t`No root and a sum of squares gives $\tan^{-1}$. A root over $a^2 - x^2$ gives $\sin^{-1}$. Every other case (difference of squares, or a root over $x^2 \pm a^2$) gives a logarithm.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`In a partial-fraction answer, marks are given for (1) the correct form, (2) the constants, (3) the integration. Write the identity "$x = A(x+2) + B(x+1)$" clearly and say which values you substituted. A wrong form loses all three marks, so check the degree and the factor types first.`,
          },
          {
            type: "keypoints",
            items: [
              t`Six special integrals: $x^2 \pm a^2$, $a^2 - x^2$, with and without a square root.`,
              t`Complete the square for any quadratic in the denominator.`,
              t`Linear over quadratic: numerator $= A \cdot$(derivative of denominator) $+ B$.`,
              "Partial fractions need a proper fraction; divide first if it is improper.",
              t`A repeated factor $(x-a)^2$ needs both $\frac{A}{x-a}$ and $\frac{B}{(x-a)^2}$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\int \frac{dx}{x^2 - a^2}$`, back: t`$\frac{1}{2a}\log\left|\frac{x-a}{x+a}\right| + C$` },
          { front: t`$\int \frac{dx}{a^2 - x^2}$`, back: t`$\frac{1}{2a}\log\left|\frac{a+x}{a-x}\right| + C$` },
          { front: t`$\int \frac{dx}{x^2 + a^2}$`, back: t`$\frac{1}{a}\tan^{-1}\frac{x}{a} + C$` },
          { front: t`$\int \frac{dx}{\sqrt{x^2 + a^2}}$`, back: t`$\log|x + \sqrt{x^2 + a^2}| + C$` },
          { front: t`$\int \frac{dx}{\sqrt{a^2 - x^2}}$`, back: t`$\sin^{-1}\frac{x}{a} + C$` },
          { front: "Proper rational function", back: "Degree of numerator < degree of denominator." },
          { front: t`Partial fraction form for $\frac{1}{(x-a)^2(x-b)}$`, back: t`$\frac{A}{x-a} + \frac{B}{(x-a)^2} + \frac{C}{x-b}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\int \frac{dx}{\sqrt{x^2 - 2x + 5}}$ equals`,
            options: [t`$\log|x - 1 + \sqrt{x^2 - 2x + 5}| + C$`, t`$\sin^{-1}\frac{x-1}{2} + C$`, t`$\frac{1}{2}\tan^{-1}\frac{x-1}{2} + C$`, t`$\log|x + 1 + \sqrt{x^2 - 2x + 5}| + C$`],
            answer: 0,
            explain: t`$x^2 - 2x + 5 = (x-1)^2 + 2^2$, so use $\int \frac{dt}{\sqrt{t^2 + a^2}} = \log|t + \sqrt{t^2 + a^2}|$ with $t = x - 1$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \frac{dx}{9 - 4x^2}$ equals`,
            options: [t`$\frac{1}{12}\log\left|\frac{3+2x}{3-2x}\right| + C$`, t`$\frac{1}{6}\log\left|\frac{3+2x}{3-2x}\right| + C$`, t`$\frac{1}{6}\tan^{-1}\frac{2x}{3} + C$`, t`$\frac{1}{3}\sin^{-1}\frac{2x}{3} + C$`],
            answer: 0,
            explain: t`Put $t = 2x$: $\frac{1}{2}\int \frac{dt}{9 - t^2} = \frac{1}{2}\cdot\frac{1}{6}\log\left|\frac{3+t}{3-t}\right| = \frac{1}{12}\log\left|\frac{3+2x}{3-2x}\right|$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`If $\frac{3x + 5}{(x+1)(x+3)} = \frac{A}{x+1} + \frac{B}{x+3}$, find $B$.`,
            answer: 2,
            explain: t`$3x + 5 = A(x+3) + B(x+1)$. Put $x = -3$: $-4 = -2B$, so $B = 2$ (and $x = -1$ gives $A = 1$).`,
          },
          {
            kind: "truefalse",
            q: t`$\frac{x^3}{x^2 - 1}$ can be split directly as $\frac{A}{x-1} + \frac{B}{x+1}$.`,
            answer: false,
            explain: t`It is improper. Divide first: $\frac{x^3}{x^2-1} = x + \frac{x}{x^2-1}$.`,
          },
          {
            kind: "mcq",
            q: t`The correct partial fraction form of $\frac{2x+1}{(x-1)(x^2+4)}$ is`,
            options: [t`$\frac{A}{x-1} + \frac{B}{x^2+4}$`, t`$\frac{A}{x-1} + \frac{Bx + C}{x^2+4}$`, t`$\frac{A}{x-1} + \frac{B}{x-2} + \frac{C}{x+2}$`, t`$\frac{Ax + B}{x-1} + \frac{C}{x^2+4}$`],
            answer: 1,
            explain: t`$x^2 + 4$ has no real factors, so its numerator must be a general linear $Bx + C$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \frac{2x + 3}{x^2 + 3x + 7}\,dx$ equals`,
            options: [t`$\log(x^2 + 3x + 7) + C$`, t`$\tan^{-1}(x^2 + 3x + 7) + C$`, t`$\frac{1}{x^2 + 3x + 7} + C$`, t`$2\log(x^2 + 3x + 7) + C$`],
            answer: 0,
            explain: t`The numerator is exactly the derivative of the denominator, so $\int \frac{f'}{f} = \log|f|$. The quadratic is always positive (discriminant $9 - 28 < 0$).`,
          },
          {
            kind: "multi",
            q: t`Which integrals give an inverse sine? (Select all.)`,
            options: [t`$\int \frac{dx}{\sqrt{1 - 4x^2}}$`, t`$\int \frac{dx}{\sqrt{6x - x^2}}$`, t`$\int \frac{dx}{\sqrt{x^2 - 6x}}$`, t`$\int \frac{dx}{1 - x^2}$`],
            answers: [0, 1],
            explain: t`$6x - x^2 = 9 - (x-3)^2$, a root of $a^2 - t^2$. $x^2 - 6x = (x-3)^2 - 9$ gives a log; $\frac{1}{1-x^2}$ has no root and gives a log too.`,
            difficulty: 2,
            hint: "Complete the square and look for a root over (a² − t²).",
          },
        ],
      },
      {
        slug: "c12-int-by-parts",
        title: "Integration by Parts and Special Forms",
        summary: "The by-parts formula and the ILATE rule, the e^x[f(x) + f′(x)] result, cyclic integrals, and integrals of √(x² ± a²) and √(a² − x²).",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Substitution reverses the chain rule. **Integration by parts** reverses the product rule. If $u$ and $v$ are functions of $x$,

$\int u\,v\,dx = u\int v\,dx - \int\left[\frac{du}{dx}\int v\,dx\right]dx.$

In words: *first function* × integral of the *second*, minus the integral of (derivative of the first × integral of the second).`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Choose the first function $u$ by **ILATE**: Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential. The one that comes earlier is $u$.`,
              t`Integrate the second function $v$ (leave out the constant here).`,
              t`Apply the formula and integrate the new, simpler integral.`,
              t`Add $+C$ at the end.`,
            ],
          },
          {
            type: "example",
            title: "Algebraic × trigonometric",
            problem: t`Find $\int x\cos x\,dx$.`,
            steps: [
              t`By ILATE, $u = x$ (algebraic) and $v = \cos x$ (trigonometric).`,
              t`$\int x\cos x\,dx = x\sin x - \int 1\cdot\sin x\,dx$.`,
              t`$\int \sin x\,dx = -\cos x$, so the result is $x\sin x + \cos x$.`,
            ],
            answer: t`$x\sin x + \cos x + C$.`,
          },
          {
            type: "example",
            title: "A single function: take 1 as the second function",
            problem: t`Find $\int \tan^{-1} x\,dx$.`,
            steps: [
              t`Write it as $\int \tan^{-1} x \cdot 1\,dx$ with $u = \tan^{-1} x$, $v = 1$.`,
              t`$= x\tan^{-1} x - \int \frac{x}{1 + x^2}\,dx$.`,
              t`$\int \frac{x}{1+x^2}\,dx = \frac{1}{2}\log(1 + x^2)$.`,
            ],
            answer: t`$x\tan^{-1} x - \frac{1}{2}\log(1 + x^2) + C$. The same trick gives $\int \log x\,dx = x\log x - x + C$.`,
          },
          {
            type: "formula",
            tex: t`\int e^x\left[f(x) + f'(x)\right]dx = e^x f(x) + C`,
            caption: "Integrate e^x f(x) by parts and the e^x f′(x) part cancels.",
          },
          {
            type: "example",
            title: "Using the e^x rule",
            problem: t`Find $\int e^x\left(\frac{1}{x} - \frac{1}{x^2}\right)dx$.`,
            steps: [
              t`Take $f(x) = \frac{1}{x}$. Then $f'(x) = -\frac{1}{x^2}$.`,
              t`The bracket is $f(x) + f'(x)$, so the rule applies directly.`,
            ],
            answer: t`$\frac{e^x}{x} + C$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\int x e^x\,dx$ equals`,
                options: [t`$x e^x + C$`, t`$(x - 1)e^x + C$`, t`$(x + 1)e^x + C$`, t`$\frac{x^2}{2}e^x + C$`],
                answer: 1,
                explain: t`$u = x$, $v = e^x$: $x e^x - \int e^x\,dx = (x - 1)e^x + C$. Or note $e^x(x) = e^x[(x-1) + 1]$ with $f = x - 1$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Cyclic integrals.** For $\int e^{ax}\sin bx\,dx$ or $\int e^{ax}\cos bx\,dx$, apply parts twice. The original integral $I$ comes back on the right side; move it to the left and solve for $I$. For example, $\int e^x\sin x\,dx = \frac{e^x}{2}(\sin x - \cos x) + C$.

Integration by parts also gives three integrals NCERT lists as standard:`,
          },
          {
            type: "formula",
            tex: t`\begin{aligned}\int \sqrt{a^2 - x^2}\,dx &= \tfrac{x}{2}\sqrt{a^2 - x^2} + \tfrac{a^2}{2}\sin^{-1}\tfrac{x}{a} + C\\ \int \sqrt{x^2 + a^2}\,dx &= \tfrac{x}{2}\sqrt{x^2 + a^2} + \tfrac{a^2}{2}\log\left|x + \sqrt{x^2 + a^2}\right| + C\\ \int \sqrt{x^2 - a^2}\,dx &= \tfrac{x}{2}\sqrt{x^2 - a^2} - \tfrac{a^2}{2}\log\left|x + \sqrt{x^2 - a^2}\right| + C\end{aligned}`,
          },
          {
            type: "example",
            title: "Square root of a quadratic",
            problem: t`Find $\int \sqrt{x^2 + 2x + 5}\,dx$.`,
            steps: [
              t`Complete the square: $x^2 + 2x + 5 = (x+1)^2 + 2^2$. Put $t = x + 1$, $a = 2$.`,
              t`Use $\int \sqrt{t^2 + a^2}\,dt = \frac{t}{2}\sqrt{t^2 + a^2} + \frac{a^2}{2}\log|t + \sqrt{t^2 + a^2}|$.`,
              t`With $a^2 = 4$, $\frac{a^2}{2} = 2$.`,
            ],
            answer: t`$\frac{x+1}{2}\sqrt{x^2 + 2x + 5} + 2\log\left|x + 1 + \sqrt{x^2 + 2x + 5}\right| + C$.`,
          },
          {
            type: "mistake",
            wrong: t`For $\int x\log x\,dx$, take $u = x$ and $v = \log x$, because $x$ comes first in the product.`,
            right: t`By ILATE, $\log x$ (L) comes before $x$ (A), so $u = \log x$: $\int x\log x\,dx = \frac{x^2}{2}\log x - \int \frac{x^2}{2}\cdot\frac{1}{x}\,dx = \frac{x^2}{2}\log x - \frac{x^2}{4} + C$.`,
            why: t`The second function must be one you can integrate easily. With $v = \log x$ you would need $\int \log x\,dx$ and the new integral gets harder, not easier. The order in which the product is written does not matter.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the ILATE priority in order, first function first.",
              items: ["Inverse trigonometric", "Logarithmic", "Algebraic", "Trigonometric", "Exponential"],
              explain: t`Functions early in the list become simpler when differentiated (or have no easy integral), so they make a good $u$. Exponentials and sines are easy to integrate, so they make a good $v$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`State $u$ and $v$ before applying the formula. In cyclic integrals, call the integral $I$ and show the line where $I$ reappears; examiners give a mark for it. NCERT allows the $\sqrt{x^2 \pm a^2}$ and $\sqrt{a^2 - x^2}$ results to be quoted as standard.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\int uv\,dx = u\int v\,dx - \int (u'\int v\,dx)\,dx$; choose $u$ by ILATE.`,
              t`A lone $\log x$ or inverse trig function: use 1 as the second function.`,
              t`$\int e^x[f(x) + f'(x)]\,dx = e^x f(x) + C$.`,
              t`Cyclic integrals: parts twice, then solve for $I$.`,
              t`Know the three $\sqrt{\;}$ integrals with their $\frac{a^2}{2}$ terms.`,
            ],
          },
        ],
        flashcards: [
          { front: "By-parts formula", back: t`$\int uv\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx$` },
          { front: "ILATE", back: "Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential: earlier one is the first function u." },
          { front: t`$\int \log x\,dx$`, back: t`$x\log x - x + C$` },
          { front: t`$\int e^x[f(x) + f'(x)]\,dx$`, back: t`$e^x f(x) + C$` },
          { front: t`$\int e^x\sin x\,dx$`, back: t`$\frac{e^x}{2}(\sin x - \cos x) + C$` },
          { front: t`$\int \sqrt{a^2 - x^2}\,dx$`, back: t`$\frac{x}{2}\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\frac{x}{a} + C$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\int x\sin x\,dx$ equals`,
            options: [t`$-x\cos x + \sin x + C$`, t`$x\cos x - \sin x + C$`, t`$-x\cos x - \sin x + C$`, t`$\frac{x^2}{2}\sin x + C$`],
            answer: 0,
            explain: t`$u = x$: $-x\cos x + \int \cos x\,dx = -x\cos x + \sin x + C$.`,
          },
          {
            kind: "mcq",
            q: t`$\int e^x(\tan x + \sec^2 x)\,dx$ equals`,
            options: [t`$e^x\sec^2 x + C$`, t`$e^x\tan x + C$`, t`$e^x(\tan x + \sec x) + C$`, t`$e^x\sec x\tan x + C$`],
            answer: 1,
            explain: t`$f(x) = \tan x$ and $f'(x) = \sec^2 x$, so the result is $e^x\tan x + C$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \sqrt{4 - x^2}\,dx$ equals`,
            options: [t`$\frac{x}{2}\sqrt{4 - x^2} + 2\sin^{-1}\frac{x}{2} + C$`, t`$\frac{x}{2}\sqrt{4 - x^2} + 4\sin^{-1}\frac{x}{2} + C$`, t`$\sin^{-1}\frac{x}{2} + C$`, t`$\frac{x}{2}\sqrt{4 - x^2} + 2\log|x + \sqrt{4 - x^2}| + C$`],
            answer: 0,
            explain: t`$a = 2$ so $\frac{a^2}{2} = 2$; the root of $a^2 - x^2$ goes with $\sin^{-1}$.`,
          },
          {
            kind: "truefalse",
            q: t`In $\int x^2 e^{3x}\,dx$, the first function should be $x^2$.`,
            answer: true,
            explain: t`Algebraic comes before Exponential in ILATE. Apply parts twice to bring the power down to zero.`,
          },
          {
            kind: "mcq",
            q: t`$\int \frac{x e^x}{(1 + x)^2}\,dx$ equals`,
            options: [t`$\frac{e^x}{1 + x} + C$`, t`$\frac{x e^x}{1 + x} + C$`, t`$e^x(1 + x) + C$`, t`$\frac{e^x}{(1 + x)^2} + C$`],
            answer: 0,
            explain: t`$\frac{x}{(1+x)^2} = \frac{1}{1+x} - \frac{1}{(1+x)^2}$. With $f = \frac{1}{1+x}$, $f' = -\frac{1}{(1+x)^2}$, so the result is $\frac{e^x}{1+x} + C$.`,
            difficulty: 2,
            hint: t`Write $x = (1 + x) - 1$ in the numerator.`,
          },
          {
            kind: "numeric",
            q: t`$\int x\log x\,dx = \frac{x^2}{2}\log x - k x^2 + C$. Find $k$.`,
            answer: 0.25,
            explain: t`$\frac{x^2}{2}\log x - \int \frac{x}{2}\,dx = \frac{x^2}{2}\log x - \frac{x^2}{4}$, so $k = \frac{1}{4}$.`,
          },
          {
            kind: "multi",
            q: t`Which of these are solved most naturally with 1 as the second function? (Select all.)`,
            options: [t`$\int \log x\,dx$`, t`$\int \sin^{-1} x\,dx$`, t`$\int x e^x\,dx$`, t`$\int \tan^{-1} x\,dx$`],
            answers: [0, 1, 3],
            explain: t`Single functions whose integrals are not in the table (log and inverse trig) are written as (function) × 1. $\int x e^x\,dx$ already has two factors.`,
          },
        ],
      },
      {
        slug: "c12-int-definite-ftc",
        title: "Definite Integrals and the Fundamental Theorem",
        summary: "The definite integral as signed area, the area function, both fundamental theorems, substitution with new limits, and the definite integral as the limit of a sum.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "illustration",
            emoji: "📐",
            caption: "A farmer wants the area of a field with one curved edge. Thin strips under the curve, added up, give the exact area.",
          },
          {
            type: "text",
            md: t`For a function $f$ continuous on $[a, b]$, the **definite integral** $\int_a^b f(x)\,dx$ is a single number. Geometrically it is the area between $y = f(x)$, the $x$-axis and the lines $x = a$, $x = b$, with parts **below** the axis counted as **negative**. Here $a$ is the **lower limit** and $b$ the **upper limit**.

Define the **area function** $A(x) = \int_a^x f(t)\,dt$: the area from $a$ up to a moving right edge $x$.`,
          },
          {
            type: "text",
            md: t`**First fundamental theorem.** If $f$ is continuous on $[a, b]$, then $A'(x) = f(x)$ for every $x$ in $[a, b]$. So the area function is an antiderivative of $f$.

**Second fundamental theorem.** If $F$ is any antiderivative of $f$ on $[a, b]$, then the definite integral is the change in $F$. This links areas to the antiderivatives of the last three lessons. The constant $C$ cancels, so it is not written.`,
          },
          {
            type: "formula",
            tex: t`\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)`,
            caption: "Second fundamental theorem of integral calculus (f continuous on [a, b], F′ = f).",
          },
          {
            type: "example",
            title: "Using an identity",
            problem: t`Evaluate $\int_0^{\pi/2} \sin^2 x\,dx$.`,
            steps: [
              t`$\sin^2 x = \frac{1 - \cos 2x}{2}$, so an antiderivative is $\frac{x}{2} - \frac{\sin 2x}{4}$.`,
              t`At $x = \frac{\pi}{2}$: $\frac{\pi}{4} - \frac{\sin\pi}{4} = \frac{\pi}{4}$. At $x = 0$: $0$.`,
            ],
            answer: t`$\frac{\pi}{4}$.`,
          },
          {
            type: "example",
            title: "Partial fractions with limits",
            problem: t`Evaluate $\int_1^2 \frac{x}{(x+1)(x+2)}\,dx$.`,
            steps: [
              t`From the partial-fractions lesson, an antiderivative is $F(x) = -\log(x+1) + 2\log(x+2)$ (both brackets are positive on $[1, 2]$).`,
              t`$F(2) = -\log 3 + 2\log 4 = \log\frac{16}{3}$ and $F(1) = -\log 2 + 2\log 3 = \log\frac{9}{2}$.`,
              t`$F(2) - F(1) = \log\left(\frac{16}{3}\cdot\frac{2}{9}\right)$.`,
            ],
            answer: t`$\log\frac{32}{27}$.`,
          },
          {
            type: "text",
            md: t`**Substitution in a definite integral.** When you put $t = g(x)$, change the limits too: $x = a$ becomes $t = g(a)$ and $x = b$ becomes $t = g(b)$. Then finish in $t$; there is no need to go back to $x$.`,
          },
          {
            type: "example",
            title: "Changing the limits",
            problem: t`Evaluate $\int_0^1 \frac{\tan^{-1} x}{1 + x^2}\,dx$.`,
            steps: [
              t`Put $t = \tan^{-1} x$, $dt = \frac{dx}{1 + x^2}$.`,
              t`New limits: $x = 0 \Rightarrow t = 0$; $x = 1 \Rightarrow t = \frac{\pi}{4}$.`,
              t`$\int_0^{\pi/4} t\,dt = \frac{1}{2}\left(\frac{\pi}{4}\right)^2$.`,
            ],
            answer: t`$\frac{\pi^2}{32}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\int_0^1 (3x^2 + 2x)\,dx$.`,
                answer: 2,
                explain: t`$[x^3 + x^2]_0^1 = 1 + 1 = 2$.`,
              },
              {
                kind: "mcq",
                q: t`$\frac{d}{dx}\int_0^x \sqrt{1 + t^2}\,dt$ equals`,
                options: [t`$\sqrt{1 + x^2}$`, t`$\sqrt{1 + x^2} - 1$`, t`$\frac{x}{\sqrt{1 + x^2}}$`, "0"],
                answer: 0,
                explain: t`By the first fundamental theorem, the derivative of the area function is the integrand at the upper limit.`,
              },
            ],
          },
          {
            type: "text",
            md: t`**Definite integral as the limit of a sum.** Split $[a, b]$ into $n$ equal strips of width $h = \frac{b - a}{n}$. The rectangles on the left end-points have total area $h[f(a) + f(a + h) + \cdots + f(a + (n-1)h)]$. As $n \to \infty$ (so $h \to 0$), this sum tends to the exact area:

$\int_a^b f(x)\,dx = \lim_{h \to 0} h\left[f(a) + f(a+h) + \cdots + f(a + (n-1)h)\right].$`,
          },
          {
            type: "example",
            title: "Area as a limit of a sum",
            problem: t`Evaluate $\int_0^2 x^2\,dx$ as the limit of a sum.`,
            steps: [
              t`$a = 0$, $b = 2$, $h = \frac{2}{n}$, $f(rh) = r^2h^2$.`,
              t`Sum $= h\sum_{r=0}^{n-1} r^2h^2 = h^3\cdot\frac{(n-1)n(2n-1)}{6} = \frac{8}{n^3}\cdot\frac{(n-1)n(2n-1)}{6}$.`,
              t`$= \frac{8}{6}\left(1 - \frac{1}{n}\right)\left(2 - \frac{1}{n}\right) \to \frac{8}{6}\cdot 2$ as $n \to \infty$.`,
              t`Check with the theorem: $\left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3}$.`,
            ],
            answer: t`$\frac{8}{3}$.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "Evaluating integrals as limits of sums is no longer in the rationalised NCERT chapter, so CBSE and Karnataka PUC do not set it. JEE uses the idea (to turn a limit of a sum into an integral). ISC students should check the current year's specification.",
          },
          {
            type: "mistake",
            wrong: t`In $\int_0^1 \frac{\tan^{-1}x}{1+x^2}\,dx$ with $t = \tan^{-1} x$, write $\int_0^1 t\,dt = \frac{1}{2}$.`,
            right: t`The limits belong to $x$. In terms of $t$ they become $0$ and $\frac{\pi}{4}$, giving $\frac{\pi^2}{32}$.`,
            why: t`The new integral is written in $t$, so its limits must be values of $t$. Keeping the old limits mixes two variables and gives a different, wrong area.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`What is $\int_{-1}^{1} \frac{dx}{x^2}$?`,
              emoji: "⚠️",
              options: [t`$-2$`, "2", "It does not exist as a finite number"],
              answer: 2,
              trap: 0,
              explain: t`$[-\frac{1}{x}]_{-1}^{1} = -2$ looks fine, but $\frac{1}{x^2}$ is not continuous at $x = 0$, so the theorem cannot be used. A positive integrand can never give a negative area; the area near $x = 0$ is infinite.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Show the bracket $[F(x)]_a^b$, then the two substituted values, then the subtraction: three visible steps. In a substitution question, write the new limits in a separate line; it is a step mark and stops the most common error.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\int_a^b f(x)\,dx$ is signed area; parts below the $x$-axis count as negative.`,
              t`First FTC: $\frac{d}{dx}\int_a^x f(t)\,dt = f(x)$.`,
              t`Second FTC: $\int_a^b f\,dx = F(b) - F(a)$, valid when $f$ is continuous on $[a, b]$.`,
              "With substitution, change the limits as well.",
              t`Limit of a sum: $\int_a^b f\,dx = \lim_{h\to 0} h\sum_{r=0}^{n-1} f(a + rh)$, $nh = b - a$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Area function", back: t`$A(x) = \int_a^x f(t)\,dt$` },
          { front: "First fundamental theorem", back: t`If $f$ is continuous, $A'(x) = f(x)$.` },
          { front: "Second fundamental theorem", back: t`$\int_a^b f(x)\,dx = F(b) - F(a)$ where $F' = f$.` },
          { front: "Why no + C in a definite integral?", back: t`It cancels in $F(b) - F(a)$.` },
          { front: "Substitution in a definite integral", back: "Change the limits to the new variable; no need to return to x." },
          { front: "Limit of a sum, strip width", back: t`$h = \frac{b - a}{n}$, with $n \to \infty$.` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\int_0^{\pi/4} \sec^2 x\,dx$ equals`,
            options: ["1", t`$\frac{\pi}{4}$`, t`$\sqrt{2}$`, "2"],
            answer: 0,
            explain: t`$[\tan x]_0^{\pi/4} = 1 - 0 = 1$.`,
          },
          {
            kind: "mcq",
            q: t`$\int_0^1 x e^{x^2}\,dx$ equals`,
            options: [t`$e - 1$`, t`$\frac{e - 1}{2}$`, t`$\frac{e}{2}$`, t`$2(e - 1)$`],
            answer: 1,
            explain: t`Put $t = x^2$, $dt = 2x\,dx$; limits 0 to 1: $\frac{1}{2}\int_0^1 e^t\,dt = \frac{e-1}{2}$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\int_1^e \frac{dx}{x}$.`,
            answer: 1,
            explain: t`$[\log x]_1^e = 1 - 0 = 1$.`,
          },
          {
            kind: "truefalse",
            q: t`$\int_0^{2\pi} \sin x\,dx$ gives the total area between $y = \sin x$ and the $x$-axis on $[0, 2\pi]$.`,
            answer: false,
            explain: t`The integral is 0, because the part below the axis cancels the part above. The actual area is $\int_0^{2\pi}|\sin x|\,dx = 4$.`,
          },
          {
            kind: "numeric",
            q: t`Find $\lim_{n\to\infty} \frac{1}{n}\sum_{r=1}^{n} \frac{r}{n}$ by reading it as an integral.`,
            answer: 0.5,
            explain: t`It is $\int_0^1 x\,dx = \frac{1}{2}$ (strip width $\frac{1}{n}$, sample points $\frac{r}{n}$ from 0 to 1).`,
            difficulty: 2,
            hint: t`Strip width $\frac{1}{n}$; $\frac{r}{n}$ plays the role of $x$.`,
          },
          {
            kind: "mcq",
            q: t`$\int_0^{1} \frac{dx}{\sqrt{4 - x^2}}$ equals`,
            options: [t`$\frac{\pi}{6}$`, t`$\frac{\pi}{3}$`, t`$\frac{\pi}{2}$`, t`$\frac{1}{2}$`],
            answer: 0,
            explain: t`$[\sin^{-1}\frac{x}{2}]_0^1 = \sin^{-1}\frac{1}{2} = \frac{\pi}{6}$.`,
          },
          {
            kind: "mcq",
            q: t`$\int_0^{\pi/2} x\cos x\,dx$ equals`,
            options: [t`$\frac{\pi}{2} - 1$`, t`$\frac{\pi}{2} + 1$`, "1", t`$\frac{\pi}{2}$`],
            answer: 0,
            explain: t`$[x\sin x + \cos x]_0^{\pi/2} = \left(\frac{\pi}{2} + 0\right) - (0 + 1) = \frac{\pi}{2} - 1$.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-int-definite-properties",
        title: "Properties of Definite Integrals",
        summary: "The properties that make hard definite integrals easy: reversing limits, splitting the interval, f(a + b − x), f(2a − x), and even and odd functions.",
        minutes: 22,
        xp: 55,
        blocks: [
          {
            type: "text",
            md: t`Some definite integrals have no easy antiderivative, yet their value is simple. The properties below, all proved by substitution, are how we find them. The variable inside a definite integral is a "dummy": $\int_a^b f(x)\,dx = \int_a^b f(t)\,dt$.`,
          },
          {
            type: "table",
            headers: ["Property", "Statement"],
            rows: [
              ["Reverse the limits", t`$\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$; so $\int_a^a f = 0$`],
              ["Split the interval", t`$\int_a^b f = \int_a^c f + \int_c^b f$ for any $c$`],
              ["Reflect in the middle", t`$\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx$`],
              ["Special case", t`$\int_0^a f(x)\,dx = \int_0^a f(a - x)\,dx$`],
              ["Double interval", t`$\int_0^{2a} f(x)\,dx = \int_0^a f(x)\,dx + \int_0^a f(2a - x)\,dx$`],
              ["Symmetric about a", t`$\int_0^{2a} f = 2\int_0^a f$ if $f(2a - x) = f(x)$; $= 0$ if $f(2a - x) = -f(x)$`],
              ["Even / odd", t`$\int_{-a}^{a} f = 2\int_0^a f$ if $f$ is even; $= 0$ if $f$ is odd`],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`**Proof of** $\int_0^a f(x)\,dx = \int_0^a f(a - x)\,dx$. Put $t = a - x$, so $dx = -dt$.`,
              t`When $x = 0$, $t = a$; when $x = a$, $t = 0$. So $\int_0^a f(x)\,dx = -\int_a^0 f(a - t)\,dt$.`,
              t`Reversing the limits removes the minus sign: $= \int_0^a f(a - t)\,dt$.`,
              t`Rename the dummy variable $t$ as $x$: $= \int_0^a f(a - x)\,dx$. ∎`,
            ],
          },
          {
            type: "example",
            title: "Add the integral to its reflection",
            problem: t`Evaluate $I = \int_0^{\pi/2} \frac{\sqrt{\sin x}}{\sqrt{\sin x} + \sqrt{\cos x}}\,dx$.`,
            steps: [
              t`Replace $x$ by $\frac{\pi}{2} - x$: $\sin$ and $\cos$ swap, so $I = \int_0^{\pi/2} \frac{\sqrt{\cos x}}{\sqrt{\cos x} + \sqrt{\sin x}}\,dx$.`,
              t`Add the two forms: $2I = \int_0^{\pi/2} \frac{\sqrt{\sin x} + \sqrt{\cos x}}{\sqrt{\sin x} + \sqrt{\cos x}}\,dx = \int_0^{\pi/2} 1\,dx = \frac{\pi}{2}$.`,
            ],
            answer: t`$I = \frac{\pi}{4}$.`,
          },
          {
            type: "example",
            title: "Splitting at a corner",
            problem: t`Evaluate $\int_0^3 |x - 1|\,dx$.`,
            steps: [
              t`$|x - 1| = 1 - x$ for $x \le 1$ and $x - 1$ for $x \ge 1$. Split at $c = 1$.`,
              t`$\int_0^1 (1 - x)\,dx = \left[x - \frac{x^2}{2}\right]_0^1 = \frac{1}{2}$.`,
              t`$\int_1^3 (x - 1)\,dx = \left[\frac{x^2}{2} - x\right]_1^3 = \frac{3}{2} - \left(-\frac{1}{2}\right) = 2$.`,
            ],
            answer: t`$\frac{1}{2} + 2 = \frac{5}{2}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Evaluate $\int_2^8 \frac{\sqrt{x}}{\sqrt{x} + \sqrt{10 - x}}\,dx$.`,
                answer: 3,
                explain: t`With $a + b = 10$, replacing $x$ by $10 - x$ swaps the roots. Adding gives $2I = \int_2^8 1\,dx = 6$, so $I = 3$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "text",
            md: t`**Even and odd functions.** $f$ is **even** if $f(-x) = f(x)$ (graph symmetric about the $y$-axis, like $x^2$, $\cos x$, $|x|$). $f$ is **odd** if $f(-x) = -f(x)$ (symmetric about the origin, like $x^3$, $\sin x$, $\tan x$). On $[-a, a]$ the two halves of an odd function cancel, while the halves of an even function are equal.

Useful rules: odd × odd = even, odd × even = odd, even × even = even.`,
          },
          {
            type: "example",
            title: "Removing the odd part",
            problem: t`Evaluate $\int_{-\pi/2}^{\pi/2} (x^3 + x\cos x + 1)\,dx$.`,
            steps: [
              t`$x^3$ is odd. $x\cos x$ is odd × even = odd. Both integrate to 0 on $[-\frac{\pi}{2}, \frac{\pi}{2}]$.`,
              t`What is left: $\int_{-\pi/2}^{\pi/2} 1\,dx = \pi$.`,
            ],
            answer: t`$\pi$.`,
          },
          {
            type: "example",
            title: "Symmetry about the middle of the interval",
            problem: t`Evaluate $\int_0^{2\pi} \cos^5 x\,dx$.`,
            steps: [
              t`Here $2a = 2\pi$. $\cos^5(2\pi - x) = \cos^5 x$, so the integral is $2\int_0^{\pi}\cos^5 x\,dx$.`,
              t`Now $2a = \pi$: $\cos^5(\pi - x) = -\cos^5 x$, so $\int_0^{\pi}\cos^5 x\,dx = 0$.`,
            ],
            answer: "0",
          },
          {
            type: "mistake",
            wrong: t`$\int_{-1}^{1} (x^2 + x)\,dx = 0$, because the interval is symmetric.`,
            right: t`Only the odd part vanishes. $\int_{-1}^1 x\,dx = 0$ but $\int_{-1}^1 x^2\,dx = \frac{2}{3}$, so the answer is $\frac{2}{3}$.`,
            why: t`A symmetric interval alone proves nothing; the function must be odd. $x^2 + x$ is neither even nor odd, so split it into its even and odd parts first.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each function on [−a, a]: even, odd, or neither?",
              groups: ["Even", "Odd", "Neither"],
              items: [
                { text: t`$x^3\cos x$`, group: 1, hint: "odd × even = odd." },
                { text: t`$x\sin x$`, group: 0, hint: "odd × odd = even." },
                { text: t`$e^x$`, group: 2, hint: t`$e^{-x}$ is neither $e^x$ nor $-e^x$.` },
                { text: t`$\log\frac{1-x}{1+x}$`, group: 1, hint: t`Replacing $x$ by $-x$ flips the fraction, which changes the sign of the log.` },
                { text: t`$|x|$`, group: 0, hint: t`$|-x| = |x|$.` },
                { text: t`$x^2 + x$`, group: 2, hint: "An even part plus an odd part." },
                { text: t`$\sin^2 x$`, group: 0, hint: t`$(\sin(-x))^2 = \sin^2 x$.` },
              ],
              explain: t`Test by putting $-x$ for $x$. Only the odd ones give 0 on $[-a, a]$; for "neither", split into even and odd parts.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`When you use a property, name it in words ("using $\int_0^a f(x)\,dx = \int_0^a f(a - x)\,dx$") and write the new form of $I$ in full before adding. For modulus questions, show where the expression changes sign; the split is worth a mark.`,
          },
          {
            type: "keypoints",
            items: [
              t`$\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx$; add the two forms when the integrand "swaps".`,
              "Split the interval wherever a modulus or greatest-integer function changes form.",
              t`$\int_{-a}^a f = 0$ for odd $f$ and $2\int_0^a f$ for even $f$.`,
              t`$\int_0^{2a} f = 2\int_0^a f$ if $f(2a - x) = f(x)$, and 0 if $f(2a - x) = -f(x)$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$\int_a^b f(x)\,dx$ in terms of $a + b - x$`, back: t`$\int_a^b f(a + b - x)\,dx$` },
          { front: t`$\int_{-a}^a f$ for odd $f$`, back: "0" },
          { front: t`$\int_{-a}^a f$ for even $f$`, back: t`$2\int_0^a f(x)\,dx$` },
          { front: t`$\int_0^{2a} f$ when $f(2a - x) = f(x)$`, back: t`$2\int_0^a f(x)\,dx$` },
          { front: t`$\int_0^{\pi/2}\frac{\sin x}{\sin x + \cos x}\,dx$`, back: t`$\frac{\pi}{4}$` },
          { front: "Odd × even", back: "Odd" },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\int_{-1}^{1} (x^5 + x^2)\,dx$ (to 2 decimal places).`,
            answer: 0.67,
            tolerance: 0.01,
            explain: t`$x^5$ is odd and vanishes; $\int_{-1}^1 x^2\,dx = \frac{2}{3} \approx 0.67$.`,
          },
          {
            kind: "mcq",
            q: t`$\int_0^{\pi/2} \frac{\sin x}{\sin x + \cos x}\,dx$ equals`,
            options: [t`$\frac{\pi}{4}$`, t`$\frac{\pi}{2}$`, "1", "0"],
            answer: 0,
            explain: t`Replace $x$ by $\frac{\pi}{2} - x$ and add: $2I = \frac{\pi}{2}$.`,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\int_0^2 |x - 1|\,dx$.`,
            answer: 1,
            explain: t`Two triangles of area $\frac{1}{2}$ each: $\int_0^1 (1 - x)\,dx + \int_1^2 (x - 1)\,dx = 1$.`,
          },
          {
            kind: "truefalse",
            q: t`$\int_{-\pi}^{\pi} \sin^3 x\,dx = 0$.`,
            answer: true,
            explain: t`$\sin^3 x$ is odd, so its integral over a symmetric interval is 0.`,
          },
          {
            kind: "multi",
            q: "Which of these integrals equal 0? (Select all.)",
            options: [t`$\int_{-1}^{1} x|x|\,dx$`, t`$\int_0^{\pi}\cos x\,dx$`, t`$\int_{-1}^{1} x^2\,dx$`, t`$\int_0^{2\pi}\sin x\,dx$`],
            answers: [0, 1, 3],
            explain: t`$x|x|$ is odd. $\cos(\pi - x) = -\cos x$ and $\sin(2\pi - x) = -\sin x$, so those vanish. $x^2$ is even and gives $\frac{2}{3}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`$\int_0^{\pi} \frac{\cos^2 x}{1 + \sin^2 x}\cdot\sin x\cos x\,dx$ equals`,
            options: ["0", t`$\frac{\pi}{2}$`, "1", t`$\pi$`],
            answer: 0,
            explain: t`Replacing $x$ by $\pi - x$ leaves $\sin x$ and $\cos^2 x$ unchanged but turns $\cos x$ into $-\cos x$, so $f(\pi - x) = -f(x)$ and the integral is 0.`,
            difficulty: 2,
            hint: t`What happens to the integrand when $x \to \pi - x$?`,
          },
          {
            kind: "mcq",
            q: t`Which statement about $\int_0^a f(x)\,dx$ is always true?`,
            options: [t`It equals $\int_0^a f(a - x)\,dx$`, t`It equals $\int_0^a f(-x)\,dx$`, t`It equals $2\int_0^{a/2} f(x)\,dx$`, t`It equals $a f\left(\frac{a}{2}\right)$`],
            answer: 0,
            explain: t`Reflecting about the middle of $[0, a]$ never changes the area. The others need extra conditions on $f$.`,
          },
        ],
      },
      {
        slug: "c12-int-exam-indefinite",
        title: "Exam edge: Indefinite Integration",
        summary: "What JEE, KCET and COMEDK ask from indefinite integrals, the standard tricks for trigonometric and rational forms, and the classic traps.",
        minutes: 24,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Integral calculus is one of the heaviest units in JEE Main, KCET and COMEDK. Indefinite integrals appear as single-answer MCQs that reward spotting the right form quickly; JEE Advanced combines them with definite integrals and functional equations. Board methods are enough, but you must recognise the form within seconds.

The safest shortcut of all: **differentiate the options**. In an MCQ, the right antiderivative is the one whose derivative is the integrand.`,
          },
          {
            type: "table",
            headers: ["Form", "Trick"],
            rows: [
              [t`$e^x[f(x) + f'(x)]$`, t`Answer $e^x f(x)$; split the bracket to find $f$`],
              [t`$\frac{a\sin x + b\cos x}{c\sin x + d\cos x}$`, t`Numerator $= A(\text{Den}) + B(\text{Den})'$`],
              [t`$\frac{1}{a + b\cos x}$, $\frac{1}{a + b\sin x}$`, t`$t = \tan\frac{x}{2}$`],
              [t`$\frac{1}{a\sin^2 x + b\cos^2 x}$`, t`Divide by $\cos^2 x$, put $t = \tan x$`],
              [t`$\frac{x^2 \pm 1}{x^4 + kx^2 + 1}$`, t`Divide by $x^2$; $t = x \mp \frac{1}{x}$`],
              [t`$\frac{1}{x(x^n + 1)}$`, t`Multiply by $x^{n-1}$, put $t = x^n$`],
            ],
          },
          {
            type: "formula",
            tex: t`t = \tan\tfrac{x}{2}:\quad \sin x = \frac{2t}{1+t^2},\quad \cos x = \frac{1-t^2}{1+t^2},\quad dx = \frac{2\,dt}{1+t^2}`,
          },
          {
            type: "example",
            title: "KCET level: hidden e^x form",
            problem: t`Find $\int e^x\frac{x + 1}{(x + 2)^2}\,dx$.`,
            steps: [
              t`Write $x + 1 = (x + 2) - 1$: $\frac{x+1}{(x+2)^2} = \frac{1}{x+2} - \frac{1}{(x+2)^2}$.`,
              t`With $f(x) = \frac{1}{x+2}$, $f'(x) = -\frac{1}{(x+2)^2}$; the bracket is $f + f'$.`,
            ],
            answer: t`$\frac{e^x}{x + 2} + C$.`,
          },
          {
            type: "example",
            title: "JEE Main level: ratio of linear trig expressions",
            problem: t`Find $\int \frac{2\sin x + 3\cos x}{3\sin x + 4\cos x}\,dx$.`,
            steps: [
              t`Write $2\sin x + 3\cos x = A(3\sin x + 4\cos x) + B(3\cos x - 4\sin x)$.`,
              t`Compare: $\sin x$: $3A - 4B = 2$; $\cos x$: $4A + 3B = 3$.`,
              t`Solve: $25A = 18$ so $A = \frac{18}{25}$; then $3B = 3 - \frac{72}{25} = \frac{3}{25}$, so $B = \frac{1}{25}$.`,
              t`$\int [A + B\frac{(\text{Den})'}{\text{Den}}]\,dx = Ax + B\log|\text{Den}|$.`,
            ],
            answer: t`$\frac{18}{25}x + \frac{1}{25}\log|3\sin x + 4\cos x| + C$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\int \frac{dx}{5 + 4\cos x}$ equals`,
                options: [t`$\frac{2}{3}\tan^{-1}\left(\frac{1}{3}\tan\frac{x}{2}\right) + C$`, t`$\frac{1}{3}\tan^{-1}\left(\frac{1}{3}\tan\frac{x}{2}\right) + C$`, t`$\frac{2}{3}\tan^{-1}\left(3\tan\frac{x}{2}\right) + C$`, t`$\frac{1}{4}\log|5 + 4\cos x| + C$`],
                answer: 0,
                explain: t`With $t = \tan\frac{x}{2}$: $5 + 4\cos x = \frac{9 + t^2}{1 + t^2}$, so the integral is $\int \frac{2\,dt}{9 + t^2} = \frac{2}{3}\tan^{-1}\frac{t}{3} + C$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: divide by x²",
            problem: t`Find $\int \frac{x^2 + 1}{x^4 + 1}\,dx$.`,
            steps: [
              t`Divide top and bottom by $x^2$: $\int \frac{1 + \frac{1}{x^2}}{x^2 + \frac{1}{x^2}}\,dx$.`,
              t`Put $t = x - \frac{1}{x}$: $dt = \left(1 + \frac{1}{x^2}\right)dx$ and $x^2 + \frac{1}{x^2} = t^2 + 2$.`,
              t`$\int \frac{dt}{t^2 + (\sqrt{2})^2} = \frac{1}{\sqrt{2}}\tan^{-1}\frac{t}{\sqrt{2}}$.`,
            ],
            answer: t`$\frac{1}{\sqrt{2}}\tan^{-1}\left(\frac{x^2 - 1}{\sqrt{2}\,x}\right) + C$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: take the highest power out",
            problem: t`Find $\int \frac{dx}{x^2(x^4 + 1)^{3/4}}$.`,
            steps: [
              t`Take $x^4$ out of the bracket: $(x^4 + 1)^{3/4} = x^3(1 + x^{-4})^{3/4}$, so the integrand is $\frac{1}{x^5(1 + x^{-4})^{3/4}}$.`,
              t`Put $t = 1 + x^{-4}$: $dt = -4x^{-5}\,dx$, so $x^{-5}dx = -\frac{dt}{4}$.`,
              t`$-\frac{1}{4}\int t^{-3/4}\,dt = -\frac{1}{4}\cdot 4t^{1/4} = -t^{1/4}$.`,
            ],
            answer: t`$-\left(1 + \frac{1}{x^4}\right)^{1/4} + C$.`,
          },
          {
            type: "mistake",
            wrong: t`My answer $\frac{\sin^2 x}{2}$ for $\int \sin x\cos x\,dx$ does not match the option $-\frac{\cos 2x}{4}$, so I made an error.`,
            right: t`Both are correct: $\frac{\sin^2 x}{2} = \frac{1 - \cos 2x}{4} = -\frac{\cos 2x}{4} + \frac{1}{4}$. They differ by a constant, which is absorbed in $C$.`,
            why: t`Different substitutions give answers that look different. Before re-solving, differentiate the option or check whether the difference is a constant.`,
          },
          {
            type: "mistake",
            wrong: t`For $\int \frac{x^2 + 1}{x^4 + 1}\,dx$, put $t = x + \frac{1}{x}$.`,
            right: t`Match the sign: with numerator $x^2 + 1$ use $t = x - \frac{1}{x}$ (its derivative is $1 + \frac{1}{x^2}$). With numerator $x^2 - 1$ use $t = x + \frac{1}{x}$.`,
            why: t`The substitution only works if $dt$ is exactly the numerator after dividing by $x^2$. The wrong sign leaves an $x$ that cannot be removed.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each integrand with the best first move.",
              pairs: [
                [t`$\frac{1}{3 + 2\cos x}$`, t`$t = \tan\frac{x}{2}$`],
                [t`$\frac{1}{4\sin^2 x + 9\cos^2 x}$`, t`Divide by $\cos^2 x$; $t = \tan x$`],
                [t`$\frac{x^2 - 1}{x^4 + 1}$`, t`$t = x + \frac{1}{x}$`],
                [t`$\frac{1}{x(x^5 + 1)}$`, t`$t = x^5$ after multiplying by $x^4$`],
                [t`$e^x(\sin x + \cos x)$`, t`$e^x f(x)$ with $f = \sin x$`],
              ],
              explain: "Read the structure before you start. Each form has one move that makes it a standard integral in a line or two.",
            },
          },
          {
            type: "keypoints",
            items: [
              "In MCQs, differentiate the options; equivalent answers differ by a constant.",
              t`Linear trig ratio: numerator $= A\cdot$Den $+ B\cdot$Den$'$.`,
              t`$a + b\cos x$: half-angle substitution. $a\sin^2 + b\cos^2$: divide by $\cos^2 x$.`,
              t`$x^4 + 1$ type: divide by $x^2$, pick $t = x \mp \frac{1}{x}$ to match the numerator.`,
              "Powers of a binomial: take the highest power out, then substitute.",
            ],
          },
        ],
        flashcards: [
          { front: t`$t = \tan\frac{x}{2}$: $\cos x$ and $dx$`, back: t`$\cos x = \frac{1 - t^2}{1 + t^2}$, $dx = \frac{2\,dt}{1 + t^2}$` },
          { front: t`$\int \frac{x^2+1}{x^4+1}\,dx$`, back: t`$\frac{1}{\sqrt{2}}\tan^{-1}\frac{x^2 - 1}{\sqrt{2}x} + C$` },
          { front: t`$\int \frac{dx}{x(x^n+1)}$`, back: t`$\frac{1}{n}\log\left|\frac{x^n}{x^n + 1}\right| + C$` },
          { front: t`$\frac{a\sin x + b\cos x}{c\sin x + d\cos x}$`, back: "Write the numerator as A(Den) + B(Den)′; answer Ax + B log|Den|." },
          { front: t`$\int \frac{dx}{\sin^2 x\cos^2 x}$`, back: t`$\tan x - \cot x + C$` },
          { front: "Fastest MCQ check", back: "Differentiate each option and compare with the integrand." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`$\int \frac{dx}{\sin^2 x\cos^2 x}$ equals`,
            options: [t`$\tan x - \cot x + C$`, t`$\tan x + \cot x + C$`, t`$-\tan x\cot x + C$`, t`$2\tan 2x + C$`],
            answer: 0,
            explain: t`$\frac{1}{\sin^2 x\cos^2 x} = \frac{\sin^2 x + \cos^2 x}{\sin^2 x\cos^2 x} = \sec^2 x + \csc^2 x$, which integrates to $\tan x - \cot x$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`$\int e^x\frac{1 + \sin x}{1 + \cos x}\,dx$ equals`,
            options: [t`$e^x\tan\frac{x}{2} + C$`, t`$e^x\sec^2\frac{x}{2} + C$`, t`$e^x\cot\frac{x}{2} + C$`, t`$e^x(1 + \sin x) + C$`],
            answer: 0,
            explain: t`$\frac{1 + \sin x}{1 + \cos x} = \frac{1 + 2\sin\frac{x}{2}\cos\frac{x}{2}}{2\cos^2\frac{x}{2}} = \frac{1}{2}\sec^2\frac{x}{2} + \tan\frac{x}{2}$. This is $f + f'$ with $f = \tan\frac{x}{2}$.`,
            difficulty: 3,
            hint: "Use half-angle forms for 1 + cos x and sin x.",
          },
          {
            kind: "mcq",
            q: t`$\int \frac{x^2 - 1}{x^4 + 1}\,dx$ equals`,
            options: [
              t`$\frac{1}{2\sqrt{2}}\log\left|\frac{x^2 - \sqrt{2}x + 1}{x^2 + \sqrt{2}x + 1}\right| + C$`,
              t`$\frac{1}{\sqrt{2}}\tan^{-1}\frac{x^2 - 1}{\sqrt{2}x} + C$`,
              t`$\frac{1}{2\sqrt{2}}\log\left|\frac{x^2 + \sqrt{2}x + 1}{x^2 - \sqrt{2}x + 1}\right| + C$`,
              t`$\frac{1}{\sqrt{2}}\tan^{-1}\frac{x^2 + 1}{\sqrt{2}x} + C$`,
            ],
            answer: 0,
            explain: t`$t = x + \frac{1}{x}$, $x^2 + \frac{1}{x^2} = t^2 - 2$: $\int \frac{dt}{t^2 - 2} = \frac{1}{2\sqrt{2}}\log\left|\frac{t - \sqrt{2}}{t + \sqrt{2}}\right|$. Multiply top and bottom by $x$.`,
            difficulty: 3,
            hint: t`Which of $x \pm \frac{1}{x}$ has derivative $1 - \frac{1}{x^2}$?`,
          },
          {
            kind: "numeric",
            q: t`$\int \frac{\sin x}{\sin x + \cos x}\,dx = Ax + B\log|\sin x + \cos x| + C$. Find $A - B$.`,
            answer: 1,
            explain: t`$\sin x = A(\sin x + \cos x) + B(\cos x - \sin x)$: $A - B = 1$ and $A + B = 0$, so $A = \frac{1}{2}$, $B = -\frac{1}{2}$ and $A - B = 1$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`Which are antiderivatives of $\frac{1}{1 + x^2}$? (Select all.)`,
            options: [t`$\tan^{-1} x$`, t`$-\cot^{-1} x$`, t`$\cot^{-1} x$`, t`$\frac{\pi}{2} - \cot^{-1} x$`],
            answers: [0, 1, 3],
            explain: t`$\frac{d}{dx}\cot^{-1} x = -\frac{1}{1+x^2}$, so $-\cot^{-1} x$ works and $\cot^{-1} x$ does not. $\frac{\pi}{2} - \cot^{-1} x = \tan^{-1} x$.`,
          },
          {
            kind: "mcq",
            q: t`$\int \frac{dx}{x(x^4 + 1)}$ equals`,
            options: [t`$\frac{1}{4}\log\left|\frac{x^4}{x^4 + 1}\right| + C$`, t`$\log\left|\frac{x}{x^4 + 1}\right| + C$`, t`$\frac{1}{4}\log|x^4 + 1| + C$`, t`$4\log\left|\frac{x^4 + 1}{x^4}\right| + C$`],
            answer: 0,
            explain: t`Multiply by $\frac{x^3}{x^3}$ and put $t = x^4$: $\frac{1}{4}\int \frac{dt}{t(t+1)} = \frac{1}{4}\log\left|\frac{t}{t+1}\right| + C$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`$\int \frac{dx}{4 + 5\sin^2 x} = \frac{1}{k}\tan^{-1}\left(\frac{3}{2}\tan x\right) + C$. Find $k$.`,
            answer: 6,
            explain: t`Divide by $\cos^2 x$: $\int \frac{\sec^2 x\,dx}{4\sec^2 x + 5\tan^2 x} = \int \frac{dt}{4 + 9t^2}$ with $t = \tan x$. This is $\frac{1}{9}\cdot\frac{3}{2}\tan^{-1}\frac{3t}{2} = \frac{1}{6}\tan^{-1}\frac{3t}{2}$.`,
            difficulty: 2,
            hint: t`$\sec^2 x = 1 + \tan^2 x$.`,
          },
          {
            kind: "mcq",
            q: t`Which of these is **not** an antiderivative of $\sin x\cos x$?`,
            options: [t`$\frac{1}{2}\sin^2 x$`, t`$-\frac{1}{2}\cos^2 x$`, t`$-\frac{1}{4}\cos 2x$`, t`$\frac{1}{2}\sin 2x$`],
            answer: 3,
            explain: t`$\frac{d}{dx}\frac{1}{2}\sin 2x = \cos 2x$. The other three differ from each other only by constants.`,
          },
        ],
      },
      {
        slug: "c12-int-exam-definite",
        title: "Exam edge: Definite Integrals",
        summary: "Exam-level definite integrals: symmetry tricks, Wallis' formula, periodic and greatest-integer integrands, Leibniz rule and limits of sums.",
        minutes: 25,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Definite integrals are a favourite in every engineering entrance test because one property turns a long problem into two lines. Expect: the $a + b - x$ property, even/odd functions, modulus and greatest-integer integrands, limits of sums written as integrals (JEE), and derivatives of integrals with variable limits (Leibniz rule). JEE Advanced adds functional equations such as $f(x) = x + \int_0^1 t f(t)\,dt$.`,
          },
          {
            type: "table",
            headers: ["Result", "When it is safe"],
            rows: [
              [t`$\int_0^{\pi/2}\sin^n x\,dx = \int_0^{\pi/2}\cos^n x\,dx = \frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots$, times $\frac{\pi}{2}$ if $n$ is even, 1 if $n$ is odd`, t`Only on $[0, \frac{\pi}{2}]$, $n$ a positive integer (Wallis)`],
              [t`$\int_0^{nT} f(x)\,dx = n\int_0^T f(x)\,dx$`, t`$f$ periodic with period $T$, $n$ an integer`],
              [t`$\int_0^{\pi} x f(\sin x)\,dx = \frac{\pi}{2}\int_0^{\pi} f(\sin x)\,dx$`, t`Integrand is $x$ times a function of $\sin x$ only`],
              [t`$\int_0^{\pi/2}\log\sin x\,dx = -\frac{\pi}{2}\log 2$`, "Same value for log cos x"],
              [t`$\lim_{n\to\infty}\frac{1}{n}\sum_{r=1}^{pn} f\left(\frac{r}{n}\right) = \int_0^{p} f(x)\,dx$`, t`$f$ continuous; the upper limit is $\lim \frac{r}{n}$ at the last term`],
            ],
          },
          {
            type: "formula",
            tex: t`\frac{d}{dx}\int_{g(x)}^{h(x)} f(t)\,dt = f(h(x))\,h'(x) - f(g(x))\,g'(x)`,
            caption: "Leibniz rule (f continuous, g and h differentiable).",
          },
          {
            type: "example",
            title: "KCET level: an odd logarithm",
            problem: t`Evaluate $\int_{-1}^{1}\log\frac{2 - x}{2 + x}\,dx$.`,
            steps: [
              t`Let $f(x) = \log\frac{2-x}{2+x}$. Then $f(-x) = \log\frac{2+x}{2-x} = -f(x)$, so $f$ is odd.`,
              t`The integral of an odd function over $[-1, 1]$ is 0.`,
            ],
            answer: "0",
          },
          {
            type: "example",
            title: "JEE Main level: x times a function of sin x",
            problem: t`Evaluate $I = \int_0^{\pi}\frac{x\sin x}{1 + \cos^2 x}\,dx$.`,
            steps: [
              t`Replace $x$ by $\pi - x$: $\sin x$ and $\cos^2 x$ do not change, so $I = \int_0^{\pi}\frac{(\pi - x)\sin x}{1 + \cos^2 x}\,dx$.`,
              t`Add: $2I = \pi\int_0^{\pi}\frac{\sin x}{1 + \cos^2 x}\,dx$.`,
              t`Put $t = \cos x$, $dt = -\sin x\,dx$; limits $1$ to $-1$: $\int_{-1}^{1}\frac{dt}{1 + t^2} = \frac{\pi}{4} - \left(-\frac{\pi}{4}\right) = \frac{\pi}{2}$.`,
              t`So $2I = \frac{\pi^2}{2}$.`,
            ],
            answer: t`$I = \frac{\pi^2}{4}$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`$\int_0^{\pi/2}\sin^4 x\,dx$ equals`,
                options: [t`$\frac{3\pi}{16}$`, t`$\frac{3\pi}{8}$`, t`$\frac{\pi}{4}$`, t`$\frac{3}{8}$`],
                answer: 0,
                explain: t`Wallis: $\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2} = \frac{3\pi}{16}$ ($n = 4$ is even, so multiply by $\frac{\pi}{2}$).`,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: a limit of a sum",
            problem: t`Find $\lim_{n\to\infty}\sum_{r=1}^{n}\frac{n}{n^2 + r^2}$.`,
            steps: [
              t`Take $n^2$ out of the denominator: $\frac{n}{n^2 + r^2} = \frac{1}{n}\cdot\frac{1}{1 + (r/n)^2}$.`,
              t`Replace $\frac{1}{n}$ by $dx$ and $\frac{r}{n}$ by $x$. As $r$ runs from 1 to $n$, $\frac{r}{n}$ runs from near 0 to 1.`,
              t`The limit is $\int_0^1\frac{dx}{1 + x^2} = \tan^{-1} 1$.`,
            ],
            answer: t`$\frac{\pi}{4}$.`,
          },
          {
            type: "example",
            title: "JEE Main level: Leibniz rule in a limit",
            problem: t`Find $\lim_{x\to 0}\frac{1}{x^3}\int_0^{x}\sin(t^2)\,dt$.`,
            steps: [
              t`Both numerator and denominator tend to 0, so use L'Hôpital's rule.`,
              t`By the Leibniz rule, the derivative of the numerator is $\sin(x^2)$; the derivative of $x^3$ is $3x^2$.`,
              t`$\lim_{x\to 0}\frac{\sin x^2}{3x^2} = \frac{1}{3}$.`,
            ],
            answer: t`$\frac{1}{3}$.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: log sin x",
            problem: t`Show that $I = \int_0^{\pi/2}\log\sin x\,dx = -\frac{\pi}{2}\log 2$.`,
            steps: [
              t`By the $a - x$ property, $I = \int_0^{\pi/2}\log\cos x\,dx$. Add: $2I = \int_0^{\pi/2}\log(\sin x\cos x)\,dx = \int_0^{\pi/2}\log\sin 2x\,dx - \frac{\pi}{2}\log 2$.`,
              t`In $\int_0^{\pi/2}\log\sin 2x\,dx$ put $u = 2x$: it becomes $\frac{1}{2}\int_0^{\pi}\log\sin u\,du$.`,
              t`Since $\sin(\pi - u) = \sin u$, $\int_0^{\pi}\log\sin u\,du = 2I$, so that term equals $I$.`,
              t`Hence $2I = I - \frac{\pi}{2}\log 2$.`,
            ],
            answer: t`$I = -\frac{\pi}{2}\log 2$.`,
          },
          {
            type: "mistake",
            wrong: t`$[x^2] = [x]^2$, so $\int_0^2 [x^2]\,dx = \int_0^1 0\,dx + \int_1^2 1\,dx = 1$.`,
            right: t`$[x^2]$ jumps where $x^2$ is an integer: at $x = 1, \sqrt{2}, \sqrt{3}$. So $\int_0^2[x^2]\,dx = (\sqrt{2} - 1) + 2(\sqrt{3} - \sqrt{2}) + 3(2 - \sqrt{3}) = 5 - \sqrt{2} - \sqrt{3}$.`,
            why: t`The greatest integer is taken after squaring. For $x = 1.5$, $[x^2] = [2.25] = 2$ but $[x]^2 = 1$. Always find where the inside expression crosses an integer.`,
          },
          {
            type: "mistake",
            wrong: t`$\lim_{n\to\infty}\frac{1}{n}\sum_{r=1}^{2n}\frac{1}{1 + r/n} = \int_0^1\frac{dx}{1 + x} = \log 2$.`,
            right: t`The last term has $\frac{r}{n} = \frac{2n}{n} = 2$, so the upper limit is 2: the limit is $\int_0^2\frac{dx}{1+x} = \log 3$.`,
            why: t`"Sum to infinity, so integrate 0 to 1" is a habit from the common case $r = 1$ to $n$. The upper limit is always the value of $\frac{r}{n}$ at the last term.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each integral with its value.",
              pairs: [
                [t`$\int_0^{\pi/2}\cos^3 x\,dx$`, t`$\frac{2}{3}$`],
                [t`$\int_0^{10\pi}|\sin x|\,dx$`, "20"],
                [t`$\int_0^{\pi/4}\log(1 + \tan x)\,dx$`, t`$\frac{\pi}{8}\log 2$`],
                [t`$\int_{-2}^{2} x^3 e^{x^2}\,dx$`, "0"],
              ],
              explain: t`Wallis for $\cos^3$; $|\sin x|$ has period $\pi$ with $\int_0^{\pi} = 2$; the $a - x$ property turns $1 + \tan x$ into $\frac{2}{1 + \tan x}$; $x^3 e^{x^2}$ is odd.`,
            },
          },
          {
            type: "keypoints",
            items: [
              t`Look for symmetry first: odd/even, $a + b - x$, $2a - x$.`,
              t`Wallis works only on $[0, \frac{\pi}{2}]$; periodic integrals scale by the number of periods.`,
              t`Limit of a sum: $\frac{1}{n} \to dx$, $\frac{r}{n} \to x$, limits from the first and last values of $\frac{r}{n}$.`,
              t`Leibniz: $\frac{d}{dx}\int_g^h f = f(h)h' - f(g)g'$; pair it with L'Hôpital for limits.`,
              "Greatest-integer and modulus integrands: split where the inside crosses an integer or zero.",
            ],
          },
        ],
        flashcards: [
          { front: "Wallis, n even", back: t`$\int_0^{\pi/2}\sin^n x\,dx = \frac{n-1}{n}\cdot\frac{n-3}{n-2}\cdots\frac{1}{2}\cdot\frac{\pi}{2}$` },
          { front: t`$\int_0^{\pi/2}\log\sin x\,dx$`, back: t`$-\frac{\pi}{2}\log 2$` },
          { front: "Leibniz rule", back: t`$\frac{d}{dx}\int_{g(x)}^{h(x)} f(t)\,dt = f(h)h' - f(g)g'$` },
          { front: t`$\int_0^{\pi} x f(\sin x)\,dx$`, back: t`$\frac{\pi}{2}\int_0^{\pi} f(\sin x)\,dx$` },
          { front: t`$\int_0^{n\pi}|\sin x|\,dx$`, back: t`$2n$` },
          { front: t`$\lim \frac{1}{n}\sum_{r=1}^{n} f\left(\frac{r}{n}\right)$`, back: t`$\int_0^1 f(x)\,dx$` },
          { front: t`$\int_0^{\pi/4}\log(1 + \tan x)\,dx$`, back: t`$\frac{\pi}{8}\log 2$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Evaluate $\int_0^2 [x^2]\,dx$, where $[\cdot]$ is the greatest integer function (to 2 decimal places).`,
            answer: 1.85,
            tolerance: 0.01,
            explain: t`$= 5 - \sqrt{2} - \sqrt{3} \approx 5 - 1.414 - 1.732 = 1.854$.`,
            difficulty: 3,
            hint: t`$[x^2]$ changes value at $x = 1$, $\sqrt{2}$ and $\sqrt{3}$.`,
          },
          {
            kind: "mcq",
            q: t`$\lim_{n\to\infty}\sum_{r=1}^{n}\frac{1}{n + r}$ equals`,
            options: [t`$\log 2$`, "1", t`$\frac{1}{2}$`, t`$\log 3$`],
            answer: 0,
            explain: t`$\frac{1}{n + r} = \frac{1}{n}\cdot\frac{1}{1 + r/n}$; the limit is $\int_0^1\frac{dx}{1 + x} = \log 2$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Evaluate $\int_0^{10\pi}|\sin x|\,dx$.`,
            answer: 20,
            explain: t`$|\sin x|$ has period $\pi$ and $\int_0^{\pi}\sin x\,dx = 2$; there are 10 periods.`,
          },
          {
            kind: "multi",
            q: "Which statements are true? (Select all.)",
            options: [t`$\int_0^{\pi} x\sin x\,dx = \pi$`, t`$\int_{-1}^{1}|x|\,dx = 1$`, t`$\int_0^{\pi/2}\cos^3 x\,dx = \frac{2}{3}$`, t`$\int_0^{\pi}\sin^2 x\,dx = \frac{\pi}{4}$`],
            answers: [0, 1, 2],
            explain: t`$\int_0^{\pi} x\sin x\,dx = [-x\cos x + \sin x]_0^{\pi} = \pi$. $\int_{-1}^1 |x| = 2\cdot\frac{1}{2} = 1$. Wallis gives $\frac{2}{3}$. But $\int_0^{\pi}\sin^2 x\,dx = 2\cdot\frac{\pi}{4} = \frac{\pi}{2}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`If $F(x) = \int_x^{x^2}\log t\,dt$ for $x > 1$, then $F'(x)$ equals`,
            options: [t`$(4x - 1)\log x$`, t`$2x\log x$`, t`$\log x^2 - \log x$`, t`$(2x - 1)\log x$`],
            answer: 0,
            explain: t`Leibniz: $\log(x^2)\cdot 2x - \log x\cdot 1 = 4x\log x - \log x = (4x - 1)\log x$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`A continuous function satisfies $f(x) = x + \int_0^1 t f(t)\,dt$ for all $x$. Find $f(1)$ (to 2 decimal places).`,
            answer: 1.67,
            tolerance: 0.01,
            explain: t`The integral is a constant $k$, so $f(x) = x + k$. Then $k = \int_0^1 t(t + k)\,dt = \frac{1}{3} + \frac{k}{2}$, giving $k = \frac{2}{3}$ and $f(1) = \frac{5}{3} \approx 1.67$.`,
            difficulty: 3,
            hint: t`Call the definite integral $k$; it does not depend on $x$.`,
          },
          {
            kind: "mcq",
            q: t`$\int_0^{\pi/4}\log(1 + \tan x)\,dx$ equals`,
            options: [t`$\frac{\pi}{8}\log 2$`, t`$\frac{\pi}{4}\log 2$`, t`$-\frac{\pi}{8}\log 2$`, "0"],
            answer: 0,
            explain: t`Replace $x$ by $\frac{\pi}{4} - x$: $1 + \tan(\frac{\pi}{4} - x) = \frac{2}{1 + \tan x}$. Adding gives $2I = \frac{\pi}{4}\log 2$.`,
            difficulty: 3,
            hint: t`Expand $\tan\left(\frac{\pi}{4} - x\right)$.`,
          },
          {
            kind: "mcq",
            q: t`$\int_0^{\pi/2}\sin^5 x\,dx$ equals`,
            options: [t`$\frac{8}{15}$`, t`$\frac{8\pi}{30}$`, t`$\frac{4}{15}$`, t`$\frac{5\pi}{32}$`],
            answer: 0,
            explain: t`Wallis, $n = 5$ odd: $\frac{4}{5}\cdot\frac{2}{3}\cdot 1 = \frac{8}{15}$; no $\frac{\pi}{2}$ factor for odd $n$.`,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Application of Integrals (NCERT Ch 8) = Applications of Integrals (ISC) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c12-application-of-integrals",
    title: "Application of Integrals",
    icon: "📐",
    description: "Areas under simple curves (lines, circles, parabolas, ellipses) and areas between two curves using definite integrals.",
    lessons: [
      {
        slug: "c12-aoi-area-under-curves",
        title: "Area under Simple Curves",
        summary: "Areas bounded by a curve and an axis using vertical or horizontal strips, with the circle, parabola and ellipse in standard form.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "illustration",
            emoji: "🏟️",
            caption: "An athletics ground is often shaped like an ellipse. Its area comes from one definite integral.",
          },
          {
            type: "text",
            md: t`Take the region bounded by $y = f(x) \ge 0$, the $x$-axis and the lines $x = a$, $x = b$. Cut it into thin **vertical strips**. A typical strip has height $y$ and width $dx$, so its area is $dA = y\,dx$. Adding all the strips gives

$A = \int_a^b y\,dx = \int_a^b f(x)\,dx.$`,
          },
          {
            type: "text",
            md: t`Sometimes it is easier to use **horizontal strips**. For the region bounded by $x = g(y) \ge 0$, the $y$-axis and the lines $y = c$, $y = d$, a strip has length $x$ and width $dy$:

$A = \int_c^d x\,dy = \int_c^d g(y)\,dy.$

If the curve lies **below** the $x$-axis, $\int_a^b f(x)\,dx$ is negative; area is its absolute value. If the curve is partly above and partly below, split at the crossing points and add the absolute values.`,
          },
          {
            type: "formula",
            tex: t`\text{Area} = \int_a^b |f(x)|\,dx`,
            caption: "Area is always positive; split the interval where f changes sign.",
          },
          {
            type: "example",
            title: "Area of an ellipse",
            problem: t`Find the area enclosed by the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.`,
            steps: [
              t`By symmetry, area $= 4 \times$ (area in the first quadrant). There $y = \frac{b}{a}\sqrt{a^2 - x^2}$, for $0 \le x \le a$.`,
              t`Area $= 4\cdot\frac{b}{a}\int_0^a \sqrt{a^2 - x^2}\,dx$.`,
              t`$\int_0^a\sqrt{a^2 - x^2}\,dx = \left[\frac{x}{2}\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\frac{x}{a}\right]_0^a = \frac{a^2}{2}\cdot\frac{\pi}{2} = \frac{\pi a^2}{4}$.`,
              t`Area $= \frac{4b}{a}\cdot\frac{\pi a^2}{4}$.`,
            ],
            answer: t`$\pi ab$. With $a = b = r$ this gives the circle's area $\pi r^2$.`,
          },
          {
            type: "example",
            title: "Parabola cut off by its latus rectum",
            problem: t`Find the area of the region bounded by the parabola $y^2 = 12x$ and its latus rectum.`,
            steps: [
              t`$y^2 = 4ax$ with $4a = 12$, so $a = 3$; the latus rectum is the line $x = 3$.`,
              t`The region is symmetric about the $x$-axis: area $= 2\int_0^3 \sqrt{12x}\,dx = 2\cdot 2\sqrt{3}\int_0^3 x^{1/2}\,dx$.`,
              t`$\int_0^3 x^{1/2}\,dx = \frac{2}{3}\cdot 3^{3/2} = \frac{2}{3}\cdot 3\sqrt{3} = 2\sqrt{3}$.`,
              t`Area $= 4\sqrt{3}\cdot 2\sqrt{3} = 24$.`,
            ],
            answer: t`24 square units (in general $\frac{8}{3}a^2$).`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The area enclosed by $\frac{x^2}{16} + \frac{y^2}{9} = 1$ is`,
                options: [t`$12\pi$`, t`$7\pi$`, t`$144\pi$`, t`$25\pi$`],
                answer: 0,
                explain: t`$a = 4$, $b = 3$, so the area is $\pi ab = 12\pi$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Horizontal strips",
            problem: t`Find the area of the region bounded by $x^2 = 4y$ and the line $y = 4$.`,
            steps: [
              t`The parabola opens upward and meets $y = 4$ at $x = \pm 4$. It is symmetric about the $y$-axis.`,
              t`Use horizontal strips in the first quadrant: $x = 2\sqrt{y}$, $0 \le y \le 4$.`,
              t`Area $= 2\int_0^4 2\sqrt{y}\,dy = 4\cdot\frac{2}{3}\left[y^{3/2}\right]_0^4 = \frac{8}{3}\cdot 8$.`,
              t`Check with vertical strips: $\int_{-4}^{4}\left(4 - \frac{x^2}{4}\right)dx = 32 - \frac{32}{3} = \frac{64}{3}$.`,
            ],
            answer: t`$\frac{64}{3}$ square units.`,
          },
          {
            type: "example",
            title: "A curve that crosses the axis",
            problem: t`Find the area between $y = \sin x$ and the $x$-axis for $0 \le x \le 2\pi$.`,
            steps: [
              t`$\sin x \ge 0$ on $[0, \pi]$ and $\le 0$ on $[\pi, 2\pi]$. Split at $\pi$.`,
              t`$\int_0^{\pi}\sin x\,dx = [-\cos x]_0^{\pi} = 2$.`,
              t`$\int_{\pi}^{2\pi}\sin x\,dx = -2$; its absolute value is 2.`,
            ],
            answer: "4 square units (the plain integral over [0, 2π] would wrongly give 0).",
          },
          {
            type: "mistake",
            wrong: t`The area bounded by $y = x^3$, the $x$-axis and $x = -1$, $x = 1$ is $\int_{-1}^{1}x^3\,dx = 0$.`,
            right: t`Split at $x = 0$: area $= \left|\int_{-1}^0 x^3\,dx\right| + \int_0^1 x^3\,dx = \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.`,
            why: t`A definite integral is **signed** area, so the part below the axis cancels the part above. A region drawn on paper always has positive area, so sketch it and split where the curve crosses the axis.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the steps for finding an area in order.",
              items: [
                "Sketch the curves and shade the region",
                "Find the limits (intersection points)",
                "Choose vertical or horizontal strips",
                "Write and evaluate the definite integral",
                "Take absolute values for parts below the axis and add",
              ],
              explain: "The sketch decides everything else: the limits, the type of strip and whether the region must be split.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Area questions usually carry a mark for a neat sketch with the region shaded and the intersection points labelled. Use symmetry and say so (\"area = 2 × area in the first quadrant\"). Write the final answer with \"square units\".",
          },
          {
            type: "keypoints",
            items: [
              t`Vertical strips: $A = \int_a^b y\,dx$. Horizontal strips: $A = \int_c^d x\,dy$.`,
              t`Area is $\int |f(x)|\,dx$; split where the curve crosses the axis.`,
              t`Ellipse: $\pi ab$; circle: $\pi r^2$.`,
              t`Parabola $y^2 = 4ax$ and its latus rectum enclose $\frac{8}{3}a^2$.`,
              "Use symmetry to integrate over one part only.",
            ],
          },
        ],
        flashcards: [
          { front: "Area by vertical strips", back: t`$\int_a^b y\,dx$` },
          { front: "Area by horizontal strips", back: t`$\int_c^d x\,dy$` },
          { front: "Area of ellipse", back: t`$\pi ab$` },
          { front: t`Area between $y^2 = 4ax$ and its latus rectum`, back: t`$\frac{8}{3}a^2$` },
          { front: "Curve below the x-axis", back: "The integral is negative; area is its absolute value." },
          { front: t`$\int_0^a\sqrt{a^2 - x^2}\,dx$`, back: t`$\frac{\pi a^2}{4}$ (a quarter circle)` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the area bounded by $y = x^2$, the $x$-axis and the lines $x = 0$, $x = 3$.`,
            answer: 9,
            unit: "sq units",
            explain: t`$\int_0^3 x^2\,dx = \left[\frac{x^3}{3}\right]_0^3 = 9$.`,
          },
          {
            kind: "numeric",
            q: t`Find the area bounded by $y = x^3$, the $x$-axis and $x = -1$, $x = 1$.`,
            answer: 0.5,
            unit: "sq units",
            explain: t`$\frac{1}{4} + \frac{1}{4} = \frac{1}{2}$; the signed integral 0 is not the area.`,
          },
          {
            kind: "mcq",
            q: t`The area bounded by $y^2 = 4x$ and the line $x = 1$ is`,
            options: [t`$\frac{8}{3}$`, t`$\frac{4}{3}$`, t`$\frac{16}{3}$`, "2"],
            answer: 0,
            explain: t`$a = 1$: $2\int_0^1 2\sqrt{x}\,dx = 4\cdot\frac{2}{3} = \frac{8}{3}$.`,
          },
          {
            kind: "mcq",
            q: t`The area of the circle $x^2 + y^2 = 9$ lying in the first quadrant is`,
            options: [t`$\frac{9\pi}{4}$`, t`$9\pi$`, t`$\frac{3\pi}{4}$`, t`$\frac{9\pi}{2}$`],
            answer: 0,
            explain: t`Quarter of $\pi\cdot 3^2$: $\frac{9\pi}{4}$.`,
          },
          {
            kind: "truefalse",
            q: t`$\int_{0}^{2\pi}\cos x\,dx$ equals the area between $y = \cos x$ and the $x$-axis on $[0, 2\pi]$.`,
            answer: false,
            explain: t`The integral is 0, but the area is 4: the curve is below the axis on $(\frac{\pi}{2}, \frac{3\pi}{2})$.`,
          },
          {
            kind: "numeric",
            q: t`Find the area bounded by $y = \sqrt{x}$, the $y$-axis and the line $y = 2$ (to 2 decimal places).`,
            answer: 2.67,
            tolerance: 0.01,
            explain: t`Use horizontal strips: $x = y^2$, so area $= \int_0^2 y^2\,dy = \frac{8}{3} \approx 2.67$.`,
            difficulty: 2,
            hint: "The region lies between the curve and the y-axis, so use strips parallel to the x-axis.",
          },
          {
            kind: "mcq",
            q: t`The area enclosed by the ellipse $4x^2 + 25y^2 = 100$ is`,
            options: [t`$10\pi$`, t`$100\pi$`, t`$20\pi$`, t`$7\pi$`],
            answer: 0,
            explain: t`Divide by 100: $\frac{x^2}{25} + \frac{y^2}{4} = 1$, so $a = 5$, $b = 2$ and the area is $10\pi$.`,
            difficulty: 2,
          },
        ],
      },
      {
        slug: "c12-aoi-between-curves",
        title: "Area between Two Curves",
        summary: "Area of a region bounded by two curves: finding intersection points, top minus bottom, and splitting where the curves cross.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: t`If $f(x) \ge g(x)$ on $[a, b]$, a vertical strip between the curves has height $f(x) - g(x)$. So the area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ is the integral of **top minus bottom**. With horizontal strips it is the integral of **right minus left**.`,
          },
          {
            type: "formula",
            tex: t`A = \int_a^b \left[f(x) - g(x)\right]dx \quad (f \ge g),\qquad A = \int_c^d \left[x_{\text{right}} - x_{\text{left}}\right]dy`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Sketch both curves.",
              t`Solve the two equations together to find the intersection points; their $x$- (or $y$-) values are the limits.`,
              "Decide which curve is on top (or on the right) in each part.",
              "If the curves cross inside the interval, split there and add the pieces.",
            ],
          },
          {
            type: "example",
            title: "Parabola and line",
            problem: t`Find the area enclosed by $y = x^2$ and $y = x$.`,
            steps: [
              t`Intersections: $x^2 = x \Rightarrow x = 0, 1$.`,
              t`On $[0, 1]$, $x \ge x^2$ (try $x = \frac{1}{2}$), so the line is on top.`,
              t`$A = \int_0^1 (x - x^2)\,dx = \frac{1}{2} - \frac{1}{3}$.`,
            ],
            answer: t`$\frac{1}{6}$ square units.`,
          },
          {
            type: "example",
            title: "Two ways: vertical and horizontal strips",
            problem: t`Find the area enclosed by $y^2 = 4x$ and $y = 2x$.`,
            steps: [
              t`Intersections: $(2x)^2 = 4x \Rightarrow 4x(x - 1) = 0$, so $(0, 0)$ and $(1, 2)$.`,
              t`Vertical strips: top $y = 2\sqrt{x}$, bottom $y = 2x$. $A = \int_0^1 (2\sqrt{x} - 2x)\,dx = \frac{4}{3} - 1 = \frac{1}{3}$.`,
              t`Horizontal strips: right $x = \frac{y}{2}$, left $x = \frac{y^2}{4}$. $A = \int_0^2 \left(\frac{y}{2} - \frac{y^2}{4}\right)dy = 1 - \frac{2}{3} = \frac{1}{3}$.`,
            ],
            answer: t`$\frac{1}{3}$ square units, either way.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The area enclosed by $y = x^2$ and $y = 2x$ is`,
                options: [t`$\frac{4}{3}$`, t`$\frac{8}{3}$`, "4", t`$\frac{2}{3}$`],
                answer: 0,
                explain: t`Intersections $x = 0, 2$: $\int_0^2 (2x - x^2)\,dx = 4 - \frac{8}{3} = \frac{4}{3}$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Two parabolas",
            problem: t`Find the area enclosed by $y^2 = 4x$ and $x^2 = 4y$.`,
            steps: [
              t`From $x^2 = 4y$, $y = \frac{x^2}{4}$; then $\frac{x^4}{16} = 4x \Rightarrow x(x^3 - 64) = 0$, so $x = 0, 4$. The points are $(0,0)$ and $(4,4)$.`,
              t`On $[0, 4]$, $2\sqrt{x}$ is on top of $\frac{x^2}{4}$.`,
              t`$A = \int_0^4 \left(2\sqrt{x} - \frac{x^2}{4}\right)dx = \frac{4}{3}\cdot 8 - \frac{64}{12} = \frac{32}{3} - \frac{16}{3}$.`,
            ],
            answer: t`$\frac{16}{3}$ square units.`,
          },
          {
            type: "example",
            title: "Circle and line",
            problem: t`Find the area of the smaller region cut off from the circle $x^2 + y^2 = 4$ by the line $x + y = 2$.`,
            steps: [
              t`The line meets the circle at $(2, 0)$ and $(0, 2)$. The smaller region lies in the first quadrant, between the line (below) and the circle (above).`,
              t`$A = \int_0^2\left(\sqrt{4 - x^2} - (2 - x)\right)dx$.`,
              t`$\int_0^2\sqrt{4 - x^2}\,dx = \pi$ (a quarter circle of radius 2) and $\int_0^2 (2 - x)\,dx = 2$ (a triangle).`,
            ],
            answer: t`$\pi - 2$ square units.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The rationalised NCERT chapter (CBSE, Karnataka PUC) keeps only areas under simple curves; areas between two curves were removed from its exercises. ISC still asks for the area between two curves, and JEE, KCET and COMEDK need it, so learn this lesson whichever board you write.",
          },
          {
            type: "mistake",
            wrong: t`The area between $y = \sin x$ and $y = \cos x$ on $[0, \frac{\pi}{2}]$ is $\left|\int_0^{\pi/2}(\cos x - \sin x)\,dx\right| = 0$.`,
            right: t`The curves cross at $x = \frac{\pi}{4}$. Split: $\int_0^{\pi/4}(\cos x - \sin x)\,dx + \int_{\pi/4}^{\pi/2}(\sin x - \cos x)\,dx = (\sqrt{2} - 1) + (\sqrt{2} - 1) = 2\sqrt{2} - 2$.`,
            why: t`"Top minus bottom" only works while the same curve stays on top. When they swap, the two pieces cancel inside one integral. Find every crossing point before you integrate.`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: t`Area between $y = x^2$ and $y = x^3$ on $[0, 1]$?`,
              options: [t`$x^2$ is on top; area $\frac{1}{12}$`, t`$x^3$ is on top; area $\frac{1}{12}$`, t`$x^2$ is on top; area $\frac{7}{12}$`],
              answer: 0,
              trap: 1,
              explain: t`For $0 < x < 1$, a higher power is **smaller** ($0.5^3 < 0.5^2$), so $x^2$ is on top. Area $= \frac{1}{3} - \frac{1}{4} = \frac{1}{12}$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Show the working for the intersection points; they carry a mark. Name the upper and lower curves in words before writing the integral. If you use horizontal strips, write the curves as x in terms of y first.",
          },
          {
            type: "keypoints",
            items: [
              "Area between curves = integral of (top − bottom) or (right − left).",
              "Intersection points give the limits.",
              "Split wherever the curves cross inside the interval.",
              "Vertical and horizontal strips give the same area; choose the simpler one.",
            ],
          },
        ],
        flashcards: [
          { front: "Area between y = f(x) and y = g(x), f ≥ g", back: t`$\int_a^b (f - g)\,dx$` },
          { front: "How to find the limits", back: "Solve the two equations together (intersection points)." },
          { front: t`Area between $y = x^2$ and $y = x$`, back: t`$\frac{1}{6}$` },
          { front: t`Area between $y^2 = 4x$ and $x^2 = 4y$`, back: t`$\frac{16}{3}$` },
          { front: "If the curves cross inside the interval", back: "Split at the crossing and add the absolute areas." },
          { front: "On (0, 1), which is bigger: x² or x³?", back: "x² (higher powers are smaller there)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the area enclosed by $y = x^2$ and $y = 2 - x^2$ (to 2 decimal places).`,
            answer: 2.67,
            tolerance: 0.01,
            explain: t`Intersections $x = \pm 1$: $\int_{-1}^{1}(2 - 2x^2)\,dx = 4 - \frac{4}{3} = \frac{8}{3} \approx 2.67$.`,
          },
          {
            kind: "mcq",
            q: t`The area between $y = \sin x$ and $y = \cos x$ for $0 \le x \le \frac{\pi}{2}$ is`,
            options: [t`$2\sqrt{2} - 2$`, "0", t`$\sqrt{2} - 1$`, t`$2\sqrt{2}$`],
            answer: 0,
            explain: t`Split at $\frac{\pi}{4}$; each part is $\sqrt{2} - 1$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`The area enclosed by $y^2 = 8x$ and $x^2 = 8y$ is`,
            options: [t`$\frac{64}{3}$`, t`$\frac{16}{3}$`, t`$\frac{32}{3}$`, "64"],
            answer: 0,
            explain: t`They meet at $(0,0)$ and $(8,8)$: $\int_0^8\left(\sqrt{8x} - \frac{x^2}{8}\right)dx = \frac{128}{3} - \frac{64}{3} = \frac{64}{3}$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Using horizontal strips instead of vertical strips can change the area of a region.",
            answer: false,
            explain: "Area is a property of the region; both methods add up the same region, so they agree.",
          },
          {
            kind: "numeric",
            q: t`Find the total area enclosed by $y = x$ and $y = x^3$.`,
            answer: 0.5,
            explain: t`They meet at $x = -1, 0, 1$. Each loop has area $\int_0^1 (x - x^3)\,dx = \frac{1}{4}$, so the total is $\frac{1}{2}$.`,
            difficulty: 2,
            hint: "There are two loops; do not let them cancel.",
          },
          {
            kind: "mcq",
            q: t`The area of the region bounded by $y = |x|$ and $y = 2$ is`,
            options: ["4", "2", "8", "1"],
            answer: 0,
            explain: t`A triangle with vertices $(-2, 2)$, $(0, 0)$, $(2, 2)$: $\frac{1}{2}\cdot 4\cdot 2 = 4$.`,
          },
          {
            kind: "mcq",
            q: t`Which integral gives the area between $x = y^2$ and $x = 4$?`,
            options: [t`$\int_{-2}^{2}(4 - y^2)\,dy$`, t`$\int_0^4 (4 - y^2)\,dy$`, t`$\int_{-2}^{2}(y^2 - 4)\,dy$`, t`$\int_0^4 \sqrt{x}\,dx$`],
            answer: 0,
            explain: t`Right curve $x = 4$, left curve $x = y^2$, and they meet at $y = \pm 2$. (The last option is only the upper half.)`,
          },
        ],
      },
      {
        slug: "c12-aoi-exam",
        title: "Exam edge: Areas by Integration",
        summary: "What JEE, KCET and COMEDK ask about areas: regions given by inequalities and modulus curves, quick formulas for parabolas, and parameter problems.",
        minutes: 22,
        xp: 60,
        track: "exam",
        blocks: [
          {
            type: "text",
            md: t`Area questions appear in almost every JEE Main paper and regularly in KCET and COMEDK. CETs ask standard areas (ellipse, parabola with a line). JEE gives the region as a set of **inequalities**, such as $\{(x, y): x^2 \le y \le |x|\}$, or with modulus curves, and JEE Advanced asks for a parameter that makes the area take a given value.

The key skill is the **sketch**: once the region is drawn, the integral is routine.`,
          },
          {
            type: "table",
            headers: ["Region", "Area"],
            rows: [
              [t`Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$`, t`$\pi ab$`],
              [t`$y^2 = 4ax$ and $x^2 = 4by$`, t`$\frac{16ab}{3}$`],
              [t`$y^2 = 4ax$ and its latus rectum`, t`$\frac{8a^2}{3}$`],
              [t`Parabola $y = px^2 + qx + r$ and a line meeting it at $x = \alpha, \beta$`, t`$\frac{|p|(\beta - \alpha)^3}{6}$`],
              [t`$|x| + |y| = a$`, t`$2a^2$`],
            ],
          },
          {
            type: "formula",
            tex: t`\int_\alpha^\beta \left|p(x - \alpha)(x - \beta)\right|dx = \frac{|p|\,(\beta - \alpha)^3}{6}`,
            caption: "Safe only for a parabola (with vertical axis) and a straight line, or two such parabolas with different p (use the difference of the p's).",
          },
          {
            type: "example",
            title: "KCET level: the shortcut",
            problem: t`Find the area enclosed by $y = x^2 - 4x + 3$ and $y = x - 1$.`,
            steps: [
              t`Intersections: $x^2 - 4x + 3 = x - 1 \Rightarrow x^2 - 5x + 4 = 0 \Rightarrow x = 1, 4$.`,
              t`The difference is $(x - 1) - (x^2 - 4x + 3) = -(x - 1)(x - 4)$, so $|p| = 1$.`,
              t`Shortcut: $\frac{(4 - 1)^3}{6} = \frac{27}{6}$. (Direct: $\int_1^4 (-x^2 + 5x - 4)\,dx = -21 + \frac{75}{2} - 12 = \frac{9}{2}$.)`,
            ],
            answer: t`$\frac{9}{2}$ square units.`,
          },
          {
            type: "example",
            title: "JEE Main level: modulus curves",
            problem: t`Find the area enclosed by $y = |x - 1|$ and $y = 3 - |x|$.`,
            steps: [
              t`Intersections: for $x \ge 1$, $x - 1 = 3 - x \Rightarrow (2, 1)$; for $x \le 0$, $1 - x = 3 + x \Rightarrow (-1, 2)$. For $0 \le x \le 1$ the graphs ($1 - x$ and $3 - x$) are parallel.`,
              t`Top is $3 - |x|$, bottom is $|x - 1|$, for $-1 \le x \le 2$. Split at 0 and 1.`,
              t`$\int_{-1}^{0}(2 + 2x)\,dx = 1$, $\int_0^1 2\,dx = 2$, $\int_1^2 (4 - 2x)\,dx = 1$.`,
              t`Check: the region is a rectangle with vertices $(-1, 2), (0, 3), (2, 1), (1, 0)$ and sides $\sqrt{2}$ and $2\sqrt{2}$.`,
            ],
            answer: "4 square units.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`The area of $\{(x, y): x^2 + y^2 \le 4,\ y \ge |x|\}$ is`,
                options: [t`$\pi$`, t`$2\pi$`, t`$\frac{\pi}{2}$`, t`$4\pi$`],
                answer: 0,
                explain: t`$y \ge |x|$ is the wedge between the lines $y = \pm x$ above the origin: a $90°$ sector, a quarter of the circle: $\frac{4\pi}{4} = \pi$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "example",
            title: "JEE Main level: a circular segment",
            problem: t`Find the area of the part of the circle $x^2 + y^2 = 4$ to the right of the line $x = 1$.`,
            steps: [
              t`Area $= 2\int_1^2\sqrt{4 - x^2}\,dx = 2\left[\frac{x}{2}\sqrt{4 - x^2} + 2\sin^{-1}\frac{x}{2}\right]_1^2$.`,
              t`At 2: $0 + 2\cdot\frac{\pi}{2} = \pi$. At 1: $\frac{\sqrt{3}}{2} + 2\cdot\frac{\pi}{6} = \frac{\sqrt{3}}{2} + \frac{\pi}{3}$.`,
              t`Area $= 2\left(\frac{2\pi}{3} - \frac{\sqrt{3}}{2}\right)$.`,
              t`Check with the segment formula $\frac{r^2}{2}(\theta - \sin\theta)$, $\theta = \frac{2\pi}{3}$: $2\left(\frac{2\pi}{3} - \frac{\sqrt{3}}{2}\right)$.`,
            ],
            answer: t`$\frac{4\pi}{3} - \sqrt{3}$ square units.`,
          },
          {
            type: "example",
            title: "JEE Advanced level: find the parameter",
            problem: t`The line $y = mx$ ($0 < m < 2$) divides the region between $y = 2x - x^2$ and the $x$-axis into two parts of equal area. Find $m$.`,
            steps: [
              t`Whole region: $\int_0^2 (2x - x^2)\,dx = 4 - \frac{8}{3} = \frac{4}{3}$. Each part must be $\frac{2}{3}$.`,
              t`The line meets the parabola where $2x - x^2 = mx$, i.e. $x = 0$ and $x = 2 - m$.`,
              t`Area between them: the difference $(2 - m)x - x^2$ has $|p| = 1$, so it is $\frac{(2 - m)^3}{6}$.`,
              t`$\frac{(2 - m)^3}{6} = \frac{2}{3} \Rightarrow (2 - m)^3 = 4 \Rightarrow m = 2 - 4^{1/3}$.`,
            ],
            answer: t`$m = 2 - \sqrt[3]{4} \approx 0.413$.`,
          },
          {
            type: "mistake",
            wrong: t`For $\{(x, y): y \ge x^2,\ y \le 1\}$, shade the region under the parabola.`,
            right: t`$y \ge x^2$ means points **above** the parabola. The region is between $y = x^2$ (below) and $y = 1$ (above), with area $\int_{-1}^{1}(1 - x^2)\,dx = \frac{4}{3}$.`,
            why: t`Test a point: $(0, \frac{1}{2})$ satisfies $y \ge x^2$ and lies inside the parabola's "cup". Checking one point for each inequality avoids shading the wrong side.`,
          },
          {
            type: "mistake",
            wrong: t`The area between $y = x^3$ and $y = x$ on $[0, 1]$ is $\frac{(1 - 0)^3}{6}$ by the parabola formula.`,
            right: t`The $\frac{(\beta - \alpha)^3}{6}$ rule needs a quadratic difference. Here $\int_0^1 (x - x^3)\,dx = \frac{1}{4}$.`,
            why: t`The formula is derived from $\int_\alpha^\beta (x - \alpha)(\beta - x)\,dx$, which only holds when the difference of the two curves is a quadratic.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each region with its area.",
              pairs: [
                [t`$|x| + |y| \le 3$`, "18"],
                [t`$y^2 = 4x$ and $x^2 = 4y$`, t`$\frac{16}{3}$`],
                [t`$\frac{x^2}{9} + \frac{y^2}{4} \le 1$`, t`$6\pi$`],
                [t`$y = x^2$ and $y = 3x$`, t`$\frac{9}{2}$`],
              ],
              explain: t`$|x| + |y| = a$ is a square of area $2a^2$; two parabolas give $\frac{16ab}{3}$; the ellipse is $\pi ab$; parabola and line give $\frac{(\beta-\alpha)^3}{6} = \frac{27}{6}$.`,
            },
          },
          {
            type: "keypoints",
            items: [
              "Sketch first; test one point for each inequality.",
              "With modulus, split at the corners of each graph.",
              t`Parabola and line: $\frac{|p|(\beta - \alpha)^3}{6}$, only for a quadratic difference.`,
              t`$y^2 = 4ax$, $x^2 = 4by$: $\frac{16ab}{3}$; ellipse: $\pi ab$.`,
              "Parameter questions: write the area as a function of the parameter and solve.",
            ],
          },
        ],
        flashcards: [
          { front: "Parabola–line area shortcut", back: t`$\frac{|p|(\beta - \alpha)^3}{6}$` },
          { front: t`Area between $y^2 = 4ax$ and $x^2 = 4by$`, back: t`$\frac{16ab}{3}$` },
          { front: t`Area enclosed by $|x| + |y| = a$`, back: t`$2a^2$` },
          { front: t`Area of segment of a circle (central angle $\theta$)`, back: t`$\frac{r^2}{2}(\theta - \sin\theta)$` },
          { front: "Region y ≥ f(x)", back: "Points above the graph of f." },
          { front: t`Area between $y = x^2$ and $y = mx$, $m > 0$`, back: t`$\frac{m^3}{6}$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the area enclosed by $y = x^2 - 4x + 3$ and $y = x - 1$.`,
            answer: 4.5,
            explain: t`They meet at $x = 1, 4$ and the difference is quadratic with $|p| = 1$: $\frac{3^3}{6} = 4.5$.`,
          },
          {
            kind: "numeric",
            q: t`Find the area enclosed by $|x| + |y| = 2$.`,
            answer: 8,
            explain: t`A square with diagonals 4 and 4: area $\frac{1}{2}\cdot 4\cdot 4 = 8 = 2a^2$.`,
          },
          {
            kind: "mcq",
            q: t`The area enclosed by $y^2 = 4x$ and $x^2 = 32y$ is`,
            options: [t`$\frac{128}{3}$`, t`$\frac{64}{3}$`, t`$\frac{512}{3}$`, t`$\frac{32}{3}$`],
            answer: 0,
            explain: t`$a = 1$, $4b = 32 \Rightarrow b = 8$: $\frac{16\cdot 1\cdot 8}{3} = \frac{128}{3}$. They meet at $(16, 8)$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`Which regions have area $\frac{1}{6}$? (Select all.)`,
            options: [t`Between $y = x^2$ and $y = x$`, t`Between $y = x^2$ and $y = -x$`, t`Between $y = 2x^2$ and $y = 2x$`, t`Between $y = x - x^2$ and the $x$-axis`],
            answers: [0, 1, 3],
            explain: t`Each of the first, second and fourth has $|p| = 1$ and roots 1 apart: $\frac{1}{6}$. For $2x^2$ and $2x$, $|p| = 2$, giving $\frac{2}{6} = \frac{1}{3}$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Find the area enclosed by $4x^2 + 9y^2 = 36$ (to 2 decimal places).`,
            answer: 18.85,
            tolerance: 0.05,
            explain: t`$\frac{x^2}{9} + \frac{y^2}{4} = 1$: $\pi\cdot 3\cdot 2 = 6\pi \approx 18.85$.`,
          },
          {
            kind: "mcq",
            q: t`The area of $\{(x, y): 0 \le y \le x^2,\ y \le 2 - x,\ x \ge 0\}$ is`,
            options: [t`$\frac{5}{6}$`, t`$\frac{7}{6}$`, t`$\frac{1}{3}$`, t`$\frac{4}{3}$`],
            answer: 0,
            explain: t`$x^2 = 2 - x$ at $x = 1$. Below the parabola on $[0, 1]$: $\frac{1}{3}$; below the line on $[1, 2]$: $\frac{1}{2}$. Total $\frac{5}{6}$.`,
            difficulty: 3,
            hint: "The upper boundary is whichever of x² and 2 − x is smaller.",
          },
          {
            kind: "numeric",
            q: t`The line $x = k$ divides the area under $y = x^2$ from $x = 0$ to $x = 2$ into two equal parts. Find $k$ (to 2 decimal places).`,
            answer: 1.59,
            tolerance: 0.01,
            explain: t`$\frac{k^3}{3} = \frac{1}{2}\cdot\frac{8}{3} \Rightarrow k^3 = 4 \Rightarrow k = \sqrt[3]{4} \approx 1.587$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`For $m > 0$, the area between $y = x^2$ and $y = mx$ is $\frac{9}{2}$. Then $m$ is`,
            options: ["3", "27", t`$\frac{3}{2}$`, "9"],
            answer: 0,
            explain: t`Area $= \frac{m^3}{6} = \frac{9}{2} \Rightarrow m^3 = 27 \Rightarrow m = 3$.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {};
