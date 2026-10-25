import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "math-high";
/** Syllabus family: chapter titles below are matched against `mat` rows in src/content/syllabus/. */
export const family = "mat";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* Number Systems (CBSE / Karnataka) = Rational and Irrational Numbers (ICSE) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-number-systems",
    title: "Number Systems: Real Numbers",
    icon: "🔢",
    description: "Rational and irrational numbers, decimal expansions, surds and rationalising, and laws of exponents for real numbers.",
    lessons: [
      {
        slug: "c9-rational-irrational",
        title: "Rational and Irrational Numbers",
        summary: "From natural numbers to real numbers: what makes a number irrational, how to place √2 on the number line, and the proof that √2 is irrational.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "📏",
            caption: t`A square tile of side 1 m has a diagonal of $\sqrt{2}$ m. No fraction gives this length exactly.`,
          },
          {
            type: "text",
            md: t`You already know several families of numbers. **Natural numbers** $\mathbb{N} = \{1, 2, 3, \ldots\}$. **Whole numbers** $\mathbb{W} = \{0, 1, 2, \ldots\}$. **Integers** $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$. Each family sits inside the next one.`,
          },
          {
            type: "text",
            md: t`A **rational number** is any number that can be written as $\frac{p}{q}$, where $p$ and $q$ are integers and $q \neq 0$. The set is written $\mathbb{Q}$ (from "quotient"). Every integer is rational, because $-5 = \frac{-5}{1}$. Between any two rational numbers there are **infinitely many** rational numbers.`,
          },
          {
            type: "table",
            headers: ["Set", "Symbol", "Examples"],
            rows: [
              ["Natural numbers", t`$\mathbb{N}$`, "1, 2, 3, 50"],
              ["Whole numbers", t`$\mathbb{W}$`, "0, 1, 2, 50"],
              ["Integers", t`$\mathbb{Z}$`, "−7, 0, 12"],
              ["Rational numbers", t`$\mathbb{Q}$`, t`$\frac{3}{4}$, $-2$, $0.25$, $0.\overline{3}$`],
              ["Irrational numbers", "—", t`$\sqrt{2}$, $\sqrt{5}$, $\pi$, $0.1010010001\ldots$`],
              ["Real numbers", t`$\mathbb{R}$`, "all rational and all irrational numbers"],
            ],
          },
          {
            type: "example",
            title: "Rational numbers between two fractions",
            problem: t`Find three rational numbers between $\frac{1}{3}$ and $\frac{1}{2}$.`,
            steps: [
              t`Use a common denominator: $\frac{1}{3} = \frac{2}{6}$ and $\frac{1}{2} = \frac{3}{6}$. There is no fraction with denominator 6 in between yet.`,
              t`We need 3 numbers, so multiply top and bottom by $3 + 1 = 4$: $\frac{2}{6} = \frac{8}{24}$ and $\frac{3}{6} = \frac{12}{24}$.`,
              t`Now pick the fractions in between: $\frac{9}{24}, \frac{10}{24}, \frac{11}{24}$.`,
              t`Simplify where you can: $\frac{9}{24} = \frac{3}{8}$ and $\frac{10}{24} = \frac{5}{12}$.`,
            ],
            answer: t`$\frac{3}{8}, \frac{5}{12}, \frac{11}{24}$ (many other answers are also correct).`,
          },
          {
            type: "text",
            md: t`An **irrational number** is a number that **cannot** be written as $\frac{p}{q}$ with integers $p, q$ and $q \neq 0$. Examples: $\sqrt{2}$, $\sqrt{3}$, $\sqrt{5}$, $\pi$. Square roots of numbers that are not perfect squares are irrational. But $\sqrt{9} = 3$ is rational.

Rational and irrational numbers together make the **real numbers** $\mathbb{R}$. Every real number is a unique point on the number line, and every point on the number line stands for a unique real number. That is why the number line is also called the **real number line**.`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              t`Draw a number line. On the segment from O (0) to 1, build a unit square OABC, with A at 1.`,
              t`By Pythagoras, the diagonal $OB = \sqrt{1^2 + 1^2} = \sqrt{2}$.`,
              t`With centre O and radius OB, draw an arc that cuts the number line at P.`,
              t`OP = OB, so P is the point $\sqrt{2}$. Repeat with a 1-unit perpendicular at B to get $\sqrt{2 + 1} = \sqrt{3}$ (the **square root spiral**).`,
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is irrational?",
                options: [t`$\sqrt{16}$`, t`$\frac{22}{7}$`, t`$\sqrt{5}$`, t`$0.\overline{3}$`],
                answer: 2,
                explain: t`$\sqrt{16} = 4$, $\frac{22}{7}$ is a fraction and $0.\overline{3} = \frac{1}{3}$. Only $\sqrt{5}$ cannot be written as $\frac{p}{q}$.`,
              },
              {
                kind: "truefalse",
                q: "Every integer is a rational number.",
                answer: true,
                explain: t`Any integer $n$ can be written as $\frac{n}{1}$.`,
              },
            ],
          },
          {
            type: "example",
            title: "Proof: √2 is irrational (by contradiction)",
            problem: t`Prove that $\sqrt{2}$ is irrational.`,
            steps: [
              t`Suppose $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{p}{q}$, where $p, q$ are integers, $q \neq 0$, and $p, q$ are **co-prime** (no common factor other than 1).`,
              t`Square both sides: $2 = \frac{p^2}{q^2}$, so $p^2 = 2q^2$. So $p^2$ is even, which means $p$ is even. Write $p = 2m$.`,
              t`Then $4m^2 = 2q^2$, so $q^2 = 2m^2$. So $q^2$ is even, and $q$ is even.`,
              t`Now $p$ and $q$ are both even, so 2 is a common factor. This contradicts "co-prime".`,
            ],
            answer: t`The assumption was false, so $\sqrt{2}$ is irrational. ∎`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: t`**ICSE** Class 9 asks you to prove that numbers like $\sqrt{2}$, $\sqrt{3}$ or $\sqrt{5}$ are irrational. **NCERT** Class 9 (CBSE, Karnataka) only states these facts; the proof comes in Class 10 *Real Numbers*. Learning it now does no harm.`,
          },
          {
            type: "mistake",
            wrong: t`$\pi = \frac{22}{7}$, so $\pi$ is a rational number.`,
            right: t`$\frac{22}{7}$ is only an **approximate** value of $\pi$. $\pi = 3.14159265\ldots$ is irrational; $\frac{22}{7} = 3.142857\ldots$ is rational.`,
            why: "We use 22/7 in sums so often that it feels like the exact value. The two numbers differ from the third decimal place onwards.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each number: rational or irrational?",
              groups: ["Rational", "Irrational"],
              items: [
                { text: t`$\sqrt{9}$`, group: 0, hint: t`$\sqrt{9} = 3$, an integer.` },
                { text: "0.75", group: 0, hint: t`$0.75 = \frac{3}{4}$.` },
                { text: t`$\sqrt{7}$`, group: 1, hint: "7 is not a perfect square." },
                { text: t`$\pi$`, group: 1, hint: "22/7 is only an approximation of π." },
                { text: t`$\frac{22}{7}$`, group: 0, hint: "It is already in the form p/q." },
                { text: "0.1010010001… (one more 0 each time)", group: 1, hint: "The digits never settle into a repeating block." },
                { text: "−5", group: 0, hint: "Every integer is rational: −5 = −5/1." },
                { text: t`$\sqrt{12} \div \sqrt{3}$`, group: 0, hint: t`$\sqrt{12 \div 3} = \sqrt{4} = 2$.` },
              ],
              explain: t`A square root is irrational only when the number under it is not a perfect square (after simplifying). $\frac{22}{7}$ is rational; $\pi$ is not.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "How the proof is marked",
            md: "In a 3-mark *prove irrational* question, marks go to: the assumption with **co-prime** p and q, squaring and showing p is even, showing q is even, and the **contradiction** sentence. Students who forget to say \"co-prime\" cannot reach a contradiction and lose a mark.",
          },
          {
            type: "keypoints",
            items: [
              t`Rational: can be written as $\frac{p}{q}$, $q \neq 0$. Irrational: cannot.`,
              t`$\mathbb{N} \subset \mathbb{W} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$; irrationals are also inside $\mathbb{R}$.`,
              "Between any two rational numbers there are infinitely many rational numbers.",
              t`$\sqrt{2}$ is located on the number line with a unit square and a compass.`,
              t`The proof that $\sqrt{2}$ is irrational uses contradiction with co-prime $p, q$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Rational number", back: t`A number of the form $\frac{p}{q}$, where $p, q$ are integers and $q \neq 0$.` },
          { front: "Irrational number", back: t`A real number that cannot be written as $\frac{p}{q}$; e.g. $\sqrt{2}$, $\pi$.` },
          { front: "Real numbers", back: "All rational numbers together with all irrational numbers." },
          { front: "Is π equal to 22/7?", back: "No. 22/7 is a rational approximation; π is irrational." },
          { front: "Co-prime", back: "Two integers whose only common factor is 1." },
          { front: "Rational numbers between any two rationals", back: "Infinitely many." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "How many rational numbers lie between 2 and 3?",
            options: ["None", "One", "Exactly 9", "Infinitely many"],
            answer: 3,
            explain: "We can always find another fraction between any two, for example by taking the average, so there are infinitely many.",
          },
          {
            kind: "truefalse",
            q: "Every real number is either rational or irrational.",
            answer: true,
            explain: "The real numbers are made of exactly these two groups, and no number is in both.",
          },
          {
            kind: "multi",
            q: "Select all the irrational numbers.",
            options: [t`$\sqrt{3}$`, t`$\sqrt{25}$`, t`$2 + \sqrt{5}$`, t`$\frac{\sqrt{8}}{\sqrt{2}}$`, t`$0.2020020002\ldots$`],
            answers: [0, 2, 4],
            explain: t`$\sqrt{25} = 5$ and $\frac{\sqrt{8}}{\sqrt{2}} = \sqrt{4} = 2$ are rational. A rational plus an irrational ($2 + \sqrt{5}$) is irrational.`,
            difficulty: 2,
          },
          {
            kind: "fill",
            q: t`In the proof that $\sqrt{2}$ is irrational, we assume $\sqrt{2} = \frac{p}{q}$ where $p$ and $q$ are ___ integers.`,
            answer: ["co-prime", "coprime", "relatively prime"],
            explain: "Co-prime means no common factor except 1. The proof shows both are even, which breaks this.",
          },
          {
            kind: "order",
            q: t`Put the steps for locating $\sqrt{2}$ on the number line in order.`,
            items: [
              "Draw a unit square on the segment from 0 to 1",
              t`Find the diagonal from 0: it is $\sqrt{1^2 + 1^2}$`,
              "Put the compass point at 0 with radius equal to the diagonal",
              t`Mark where the arc cuts the number line as $\sqrt{2}$`,
            ],
            explain: "The compass copies the diagonal length onto the number line.",
          },
          {
            kind: "mcq",
            q: t`What is $\sqrt{2} \times \sqrt{8}$?`,
            options: ["4, a rational number", t`$\sqrt{10}$, an irrational number`, t`$4\sqrt{2}$`, t`$\sqrt{16}$, which is irrational`],
            answer: 0,
            explain: t`$\sqrt{2} \times \sqrt{8} = \sqrt{16} = 4$. The product of two irrationals can be rational. ($\sqrt{10}$ is what you get by wrongly adding.)`,
            difficulty: 2,
            hint: t`Use $\sqrt{a}\sqrt{b} = \sqrt{ab}$.`,
          },
          {
            kind: "truefalse",
            q: "The sum of a rational number and an irrational number is always irrational.",
            answer: true,
            explain: t`If $r + x = s$ with $r, s$ rational, then $x = s - r$ would be rational, which is false. So the sum must be irrational.`,
            difficulty: 2,
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-decimal-expansions",
        title: "Decimal Expansions of Real Numbers",
        summary: "Terminating, recurring and non-recurring decimals; converting recurring decimals to p/q; finding irrational numbers between two numbers.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`Type $1 \div 8$ on a calculator: you get $0.125$ and it stops. Type $1 \div 3$: you get $0.33333\ldots$ and the 3s never stop. Why do some fractions stop and others go on for ever?`,
          },
          {
            type: "text",
            md: t`When you divide $p$ by $q$, every remainder is less than $q$. So only two things can happen. Either some remainder becomes 0 and the decimal **terminates** (stops). Or a remainder repeats, and from then on the same digits come back again and again. Then the decimal is **non-terminating recurring**. We draw a bar over the repeating block: $\frac{1}{3} = 0.\overline{3}$, $\frac{1}{7} = 0.\overline{142857}$.`,
          },
          {
            type: "table",
            headers: ["Number", "Decimal expansion", "Type"],
            rows: [
              [t`$\frac{3}{8}$`, "0.375", "Terminating"],
              [t`$\frac{7}{20}$`, "0.35", "Terminating"],
              [t`$\frac{2}{11}$`, t`$0.181818\ldots = 0.\overline{18}$`, "Non-terminating recurring"],
              [t`$\frac{5}{6}$`, t`$0.8333\ldots = 0.8\overline{3}$`, "Non-terminating recurring"],
              [t`$\sqrt{2}$`, t`$1.41421356\ldots$`, "Non-terminating non-recurring"],
              [t`$\pi$`, t`$3.14159265\ldots$`, "Non-terminating non-recurring"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "The big rule",
            md: "A number is **rational** if and only if its decimal expansion is **terminating** or **non-terminating recurring**. A number is **irrational** if and only if its decimal expansion is **non-terminating non-recurring**.",
          },
          {
            type: "example",
            title: "A pure recurring decimal",
            problem: t`Express $0.\overline{47}$ in the form $\frac{p}{q}$.`,
            steps: [
              t`Let $x = 0.474747\ldots$`,
              t`Two digits repeat, so multiply by 100: $100x = 47.474747\ldots$`,
              t`Subtract: $100x - x = 47.4747\ldots - 0.4747\ldots$, so $99x = 47$.`,
              t`$x = \frac{47}{99}$ (47 is prime and does not divide 99, so this is in lowest terms).`,
            ],
            answer: t`$0.\overline{47} = \frac{47}{99}$`,
          },
          {
            type: "example",
            title: "A mixed recurring decimal",
            problem: t`Express $0.4\overline{7}$ (that is, $0.47777\ldots$) in the form $\frac{p}{q}$.`,
            steps: [
              t`Let $x = 0.47777\ldots$ Only the 7 repeats.`,
              t`$10x = 4.7777\ldots$ and $100x = 47.7777\ldots$ (both now have the same repeating tail).`,
              t`Subtract: $100x - 10x = 47 - 4$, so $90x = 43$.`,
            ],
            answer: t`$0.4\overline{7} = \frac{43}{90}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: t`$0.\overline{9}$ is equal to 1.`,
                answer: true,
                explain: t`Let $x = 0.999\ldots$ Then $10x = 9.999\ldots$, so $9x = 9$ and $x = 1$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "mistake",
            wrong: t`$0.\overline{23} = \frac{23}{100}$`,
            right: t`$0.\overline{23} = \frac{23}{99}$. Let $x = 0.2323\ldots$; then $100x - x = 23$, so $99x = 23$.`,
            why: t`$\frac{23}{100}$ is $0.23$, which stops after two digits. A repeating block of 2 digits gives a denominator of 99, not 100.`,
          },
          {
            type: "example",
            title: "An irrational number between two rationals",
            problem: t`Find an irrational number between $\frac{1}{7}$ and $\frac{2}{7}$.`,
            steps: [
              t`Write the decimals: $\frac{1}{7} = 0.\overline{142857}$ and $\frac{2}{7} = 0.\overline{285714}$.`,
              t`Choose a decimal that starts between them, such as $0.15\ldots$`,
              t`Make it never end and never repeat: $0.150150015000150000\ldots$ (one more 0 each time).`,
            ],
            answer: t`$0.150150015000\ldots$ lies between $\frac{1}{7}$ and $\frac{2}{7}$ and is irrational.`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each decimal with its fraction.",
              pairs: [
                ["0.375", t`$\frac{3}{8}$`],
                [t`$0.\overline{3}$`, t`$\frac{1}{3}$`],
                [t`$0.\overline{18}$`, t`$\frac{2}{11}$`],
                [t`$0.1\overline{6}$`, t`$\frac{1}{6}$`],
                [t`$0.\overline{142857}$`, t`$\frac{1}{7}$`],
              ],
              explain: t`Terminating and recurring decimals are all rational. A pure recurring block of $n$ digits gives $n$ nines in the denominator before simplifying: $0.\overline{18} = \frac{18}{99} = \frac{2}{11}$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Show the multiplier",
            md: t`When converting, write *why* you multiply by 10, 100 or 1000 ("two digits repeat, so multiply by 100") and always reduce the answer to **lowest terms**: $0.\overline{36} = \frac{36}{99} = \frac{4}{11}$. Examiners give a step mark for the subtraction line.`,
          },
          {
            type: "keypoints",
            items: [
              "Dividing p by q gives a terminating or a non-terminating recurring decimal.",
              "Rational ⇔ terminating or recurring; irrational ⇔ non-terminating non-recurring.",
              t`For $n$ repeating digits, multiply by $10^n$ and subtract.`,
              t`$0.\overline{9} = 1$.`,
              "To find an irrational between two numbers, write a never-ending, never-repeating decimal between them.",
            ],
          },
        ],
        flashcards: [
          { front: "Terminating decimal", back: "A decimal that stops, e.g. 3/8 = 0.375." },
          { front: "Non-terminating recurring decimal", back: t`Goes on for ever with a repeating block, e.g. $\frac{2}{11} = 0.\overline{18}$.` },
          { front: "Decimal expansion of an irrational number", back: "Non-terminating and non-recurring." },
          { front: t`$0.\overline{ab}$ as a fraction`, back: t`$\frac{ab}{99}$ (then simplify).` },
          { front: t`$0.\overline{9}$`, back: "Exactly 1." },
          { front: t`$\frac{1}{7}$ as a decimal`, back: t`$0.\overline{142857}$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`What is the decimal expansion of $\frac{7}{8}$?`,
            options: ["0.875, terminating", t`$0.\overline{875}$, recurring`, t`$0.\overline{87}$, recurring`, "Non-terminating non-recurring"],
            answer: 0,
            explain: t`$7 \div 8 = 0.875$ exactly; the remainder becomes 0.`,
          },
          {
            kind: "mcq",
            q: "Which of these is irrational?",
            options: [t`$0.\overline{12}$`, "1.010010001… (one more 0 each time)", "0.125", t`$3.\overline{3}$`],
            answer: 1,
            explain: "Its digits never end and never form a repeating block, so it cannot be p/q.",
          },
          {
            kind: "numeric",
            q: t`Write $0.\overline{36}$ as $\frac{p}{q}$ in lowest terms. What is $q$?`,
            answer: 11,
            explain: t`$99x = 36$, so $x = \frac{36}{99} = \frac{4}{11}$.`,
            difficulty: 2,
            hint: "Divide 36 and 99 by their HCF, 9.",
          },
          {
            kind: "fill",
            q: "The decimal expansion of a rational number is either terminating or non-terminating ___.",
            answer: ["recurring", "repeating"],
            explain: "Long division can only stop or start repeating.",
          },
          {
            kind: "truefalse",
            q: t`$0.2\overline{3} = \frac{7}{30}$`,
            answer: true,
            explain: t`$x = 0.2333\ldots$: $100x - 10x = 23.33\ldots - 2.33\ldots = 21$, so $90x = 21$ and $x = \frac{21}{90} = \frac{7}{30}$.`,
            difficulty: 3,
            hint: "Multiply by 10 and by 100 so both have the same repeating tail.",
          },
          {
            kind: "multi",
            q: "Select all the rational numbers.",
            options: [t`$2.\overline{3}$`, "1.41421356… (decimal of √2)", "0.5", t`$\pi$`, "0.121212… (12 repeating)"],
            answers: [0, 2, 4],
            explain: t`Terminating (0.5) and recurring ($2.\overline{3}$, $0.\overline{12}$) decimals are rational; $\sqrt{2}$ and $\pi$ are not.`,
          },
          {
            kind: "order",
            q: t`Put the steps to write $0.\overline{45}$ as $\frac{p}{q}$ in order.`,
            items: [
              t`Let $x = 0.4545\ldots$`,
              t`Multiply by 100: $100x = 45.4545\ldots$`,
              t`Subtract: $99x = 45$`,
              t`Simplify: $x = \frac{45}{99} = \frac{5}{11}$`,
            ],
            explain: "Two digits repeat, so multiply by 100; subtracting removes the endless tail.",
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-surds-rationalising",
        title: "Operations on Real Numbers, Surds and Rationalising",
        summary: "Adding and multiplying irrational numbers, simplifying surds, identities with square roots, and rationalising denominators.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: t`Without a calculator, what is $\frac{1}{\sqrt{2}}$? Dividing 1 by $1.41421\ldots$ is painful. But $\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$, and $1.41421 \div 2 = 0.70711$ is easy. Making the denominator rational is called **rationalising**.`,
          },
          {
            type: "heading",
            text: "Operations on real numbers",
          },
          {
            type: "list",
            items: [
              t`rational + irrational = **irrational**: $2 + \sqrt{3}$.`,
              t`non-zero rational × irrational = **irrational**: $5\sqrt{2}$.`,
              t`irrational + irrational may be rational or irrational: $(2 + \sqrt{3}) + (2 - \sqrt{3}) = 4$, but $\sqrt{2} + \sqrt{3}$ is irrational.`,
              t`irrational × irrational may be rational or irrational: $\sqrt{3} \times \sqrt{12} = 6$, but $\sqrt{2} \times \sqrt{3} = \sqrt{6}$.`,
            ],
          },
          {
            type: "text",
            md: t`A **surd** is an irrational root of a positive rational number, such as $\sqrt{2}$ or $\sqrt[3]{5}$. In $\sqrt[n]{a}$, $n$ is the **order** and $a$ is the **radicand**. **Like surds** have the same irrational part, for example $3\sqrt{2}$ and $7\sqrt{2}$. Only like surds can be added into one term, just like $3x + 7x = 10x$.`,
          },
          {
            type: "formula",
            tex: t`\sqrt{ab} = \sqrt{a}\,\sqrt{b} \qquad \sqrt{\tfrac{a}{b}} = \tfrac{\sqrt{a}}{\sqrt{b}} \qquad (\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b`,
            caption: t`For positive real numbers $a$ and $b$.`,
          },
          {
            type: "formula",
            tex: t`(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b \qquad (\sqrt{a} + \sqrt{b})^2 = a + 2\sqrt{ab} + b`,
          },
          {
            type: "example",
            title: "Simplify using like surds",
            problem: t`Simplify $2\sqrt{12} + 3\sqrt{27} - \sqrt{75}$.`,
            steps: [
              t`Take out perfect squares: $\sqrt{12} = \sqrt{4 \times 3} = 2\sqrt{3}$, $\sqrt{27} = 3\sqrt{3}$, $\sqrt{75} = 5\sqrt{3}$.`,
              t`So the expression is $2(2\sqrt{3}) + 3(3\sqrt{3}) - 5\sqrt{3} = 4\sqrt{3} + 9\sqrt{3} - 5\sqrt{3}$.`,
              t`Add the like surds: $(4 + 9 - 5)\sqrt{3}$.`,
            ],
            answer: t`$8\sqrt{3}$`,
          },
          {
            type: "mistake",
            wrong: t`$\sqrt{9} + \sqrt{16} = \sqrt{25} = 5$`,
            right: t`$\sqrt{9} + \sqrt{16} = 3 + 4 = 7$. In general $\sqrt{a} + \sqrt{b} \neq \sqrt{a + b}$.`,
            why: t`The rule $\sqrt{a}\sqrt{b} = \sqrt{ab}$ works for **multiplying**, so it feels natural to do the same for adding. Testing with perfect squares shows it fails.`,
          },
          {
            type: "text",
            md: t`To **rationalise the denominator**, multiply the top and bottom by a **rationalising factor**. For $\sqrt{a}$ use $\sqrt{a}$. For $a + \sqrt{b}$ use its **conjugate** $a - \sqrt{b}$, because $(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$ has no root left.`,
          },
          {
            type: "example",
            title: "Rationalise and compare",
            problem: t`If $\frac{3 + \sqrt{2}}{3 - \sqrt{2}} = a + b\sqrt{2}$, find the rational numbers $a$ and $b$.`,
            steps: [
              t`Multiply top and bottom by the conjugate $3 + \sqrt{2}$: $\frac{(3 + \sqrt{2})^2}{(3 - \sqrt{2})(3 + \sqrt{2})}$.`,
              t`Denominator: $3^2 - 2 = 7$. Numerator: $9 + 6\sqrt{2} + 2 = 11 + 6\sqrt{2}$.`,
              t`So the value is $\frac{11}{7} + \frac{6}{7}\sqrt{2}$.`,
              "Compare rational parts and surd parts on both sides.",
            ],
            answer: t`$a = \frac{11}{7}$, $b = \frac{6}{7}$`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`What should you multiply by to rationalise $\frac{1}{5 - \sqrt{3}}$?`,
                options: [t`$\frac{5 + \sqrt{3}}{5 + \sqrt{3}}$`, t`$\frac{5 - \sqrt{3}}{5 - \sqrt{3}}$`, t`$\frac{\sqrt{3}}{\sqrt{3}}$`, t`$\frac{5}{5}$`],
                answer: 0,
                explain: t`Use the conjugate: $(5 - \sqrt{3})(5 + \sqrt{3}) = 25 - 3 = 22$.`,
              },
              {
                kind: "numeric",
                q: t`Find $(\sqrt{11} + \sqrt{7})(\sqrt{11} - \sqrt{7})$.`,
                answer: 4,
                explain: t`$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b}) = a - b = 11 - 7 = 4$.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Predict the value before you reveal it.",
              emoji: "🤔",
              options: [t`$\sqrt{2} + \sqrt{8} = \sqrt{10}$`, t`$\sqrt{2} + \sqrt{8} = 3\sqrt{2}$`, t`$\sqrt{2} + \sqrt{8} = 4$`, "They cannot be added"],
              answer: 1,
              trap: 0,
              explain: t`$\sqrt{8} = \sqrt{4 \times 2} = 2\sqrt{2}$, so $\sqrt{2} + 2\sqrt{2} = 3\sqrt{2}$. Simplify first; then like surds can be added.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`A final answer with a root in the denominator is treated as *not simplified*. In ICSE "find $a$ and $b$" questions, write the answer as (rational part) + (rational) × surd and then equate the two parts. NCERT and Karnataka papers also ask you to rationalise first and then substitute $\sqrt{2} \approx 1.414$.`,
          },
          {
            type: "keypoints",
            items: [
              "Rational + irrational is irrational; two irrationals can combine to give a rational.",
              t`Simplify surds by taking out perfect squares: $\sqrt{50} = 5\sqrt{2}$.`,
              t`$\sqrt{a} + \sqrt{b} \neq \sqrt{a + b}$, but $\sqrt{a}\sqrt{b} = \sqrt{ab}$.`,
              t`Rationalise $\frac{1}{a + \sqrt{b}}$ by multiplying by the conjugate $a - \sqrt{b}$.`,
            ],
          },
        ],
        flashcards: [
          { front: "Surd", back: t`An irrational root of a positive rational number, e.g. $\sqrt{3}$, $\sqrt[3]{2}$.` },
          { front: "Like surds", back: t`Surds with the same irrational part, e.g. $2\sqrt{5}$ and $-7\sqrt{5}$.` },
          { front: t`Conjugate of $a + \sqrt{b}$`, back: t`$a - \sqrt{b}$` },
          { front: t`$(\sqrt{a} + \sqrt{b})(\sqrt{a} - \sqrt{b})$`, back: t`$a - b$` },
          { front: t`$\frac{1}{\sqrt{2}}$ rationalised`, back: t`$\frac{\sqrt{2}}{2}$` },
          { front: t`$(\sqrt{a} + \sqrt{b})^2$`, back: t`$a + 2\sqrt{ab} + b$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Rationalise $\frac{1}{\sqrt{5} + 2}$.`,
            options: [t`$\sqrt{5} - 2$`, t`$\sqrt{5} + 2$`, t`$\frac{\sqrt{5} - 2}{9}$`, t`$\frac{\sqrt{5} - 2}{3}$`],
            answer: 0,
            explain: t`$\frac{\sqrt{5} - 2}{(\sqrt{5})^2 - 2^2} = \frac{\sqrt{5} - 2}{5 - 4} = \sqrt{5} - 2$. The 9 comes from wrongly adding $5 + 4$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`$\sqrt{9} + \sqrt{16} = \sqrt{25}$`,
            answer: false,
            explain: t`$3 + 4 = 7$, but $\sqrt{25} = 5$.`,
          },
          {
            kind: "numeric",
            q: t`Find the value of $(\sqrt{3} + \sqrt{2})(\sqrt{3} - \sqrt{2})$.`,
            answer: 1,
            explain: t`$3 - 2 = 1$.`,
          },
          {
            kind: "fill",
            q: t`In simplest form, $\sqrt{50} = $ ___ $\sqrt{2}$.`,
            answer: ["5"],
            explain: t`$\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}$.`,
          },
          {
            kind: "multi",
            q: "Select all the irrational numbers.",
            options: [t`$2 + \sqrt{3}$`, t`$(2 + \sqrt{3}) + (2 - \sqrt{3})$`, t`$\sqrt{3} \times \sqrt{12}$`, t`$3\sqrt{7}$`],
            answers: [0, 3],
            explain: t`$(2 + \sqrt{3}) + (2 - \sqrt{3}) = 4$ and $\sqrt{3} \times \sqrt{12} = \sqrt{36} = 6$ are rational.`,
            difficulty: 2,
          },
          {
            kind: "order",
            q: t`Put the steps to rationalise $\frac{6}{\sqrt{5} + \sqrt{3}}$ in order.`,
            items: [
              t`Find the conjugate of the denominator: $\sqrt{5} - \sqrt{3}$`,
              t`Multiply numerator and denominator by $\sqrt{5} - \sqrt{3}$`,
              t`The denominator becomes $5 - 3 = 2$`,
              t`Simplify: $\frac{6(\sqrt{5} - \sqrt{3})}{2} = 3\sqrt{5} - 3\sqrt{3}$`,
            ],
            explain: "Conjugate first, then the denominator becomes a whole number, then simplify.",
          },
          {
            kind: "numeric",
            q: t`Given $\sqrt{2} \approx 1.414$, find the value of $\frac{1}{\sqrt{2} + 1}$ to three decimal places.`,
            answer: 0.414,
            tolerance: 0.001,
            explain: t`$\frac{1}{\sqrt{2} + 1} \times \frac{\sqrt{2} - 1}{\sqrt{2} - 1} = \frac{\sqrt{2} - 1}{2 - 1} = \sqrt{2} - 1 \approx 0.414$.`,
            difficulty: 3,
            hint: "Rationalise first, then substitute.",
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-exponents-real",
        title: "Laws of Exponents for Real Numbers",
        summary: "Fractional exponents, the nth root, and the four laws of exponents used with real bases.",
        minutes: 13,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: t`You know that $2^3 \times 2^2 = 2^5$. But what could $8^{\frac{1}{3}}$ or $32^{\frac{2}{5}}$ mean? Fractional exponents are just another way of writing roots.`,
          },
          {
            type: "text",
            md: t`Let $a > 0$ be a real number and $n > 1$ a whole number. The **principal $n$th root** $\sqrt[n]{a}$ is the positive number $b$ with $b^n = a$. We write $a^{\frac{1}{n}} = \sqrt[n]{a}$. For example $8^{\frac{1}{3}} = 2$ because $2^3 = 8$.

For whole numbers $m$ and $n$ (with no common factor other than 1), $a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m = \sqrt[n]{a^m}$.`,
          },
          {
            type: "formula",
            tex: t`a^p \cdot a^q = a^{p+q} \qquad (a^p)^q = a^{pq} \qquad \frac{a^p}{a^q} = a^{p-q} \qquad a^p\, b^p = (ab)^p`,
            caption: t`For real $a, b > 0$ and rational $p, q$. Also $a^0 = 1$ and $a^{-p} = \frac{1}{a^p}$.`,
          },
          {
            type: "table",
            headers: ["Law", "Example"],
            rows: [
              [t`$a^p \cdot a^q = a^{p+q}$`, t`$2^{\frac{2}{3}} \cdot 2^{\frac{1}{3}} = 2^1 = 2$`],
              [t`$(a^p)^q = a^{pq}$`, t`$\left(3^{\frac{1}{3}}\right)^7 = 3^{\frac{7}{3}}$`],
              [t`$\frac{a^p}{a^q} = a^{p-q}$`, t`$\frac{7^{\frac{1}{5}}}{7^{\frac{1}{3}}} = 7^{\frac{1}{5} - \frac{1}{3}} = 7^{-\frac{2}{15}}$`],
              [t`$a^p\, b^p = (ab)^p$`, t`$13^{\frac{1}{5}} \cdot 17^{\frac{1}{5}} = 221^{\frac{1}{5}}$`],
            ],
          },
          {
            type: "example",
            title: "Evaluate fractional powers",
            problem: t`Find $32^{\frac{2}{5}}$, $9^{\frac{3}{2}}$ and $16^{-\frac{3}{4}}$.`,
            steps: [
              t`$32 = 2^5$, so $32^{\frac{2}{5}} = (2^5)^{\frac{2}{5}} = 2^2 = 4$.`,
              t`$9 = 3^2$, so $9^{\frac{3}{2}} = (3^2)^{\frac{3}{2}} = 3^3 = 27$.`,
              t`$16 = 2^4$, so $16^{-\frac{3}{4}} = 2^{-3} = \frac{1}{8}$.`,
            ],
            answer: t`$4$, $27$ and $\frac{1}{8}$`,
          },
          {
            type: "mistake",
            wrong: t`$64^{\frac{1}{2}} = 32$, because you multiply 64 by $\frac{1}{2}$.`,
            right: t`$64^{\frac{1}{2}} = \sqrt{64} = 8$. The power $\frac{1}{2}$ means the square root, not half.`,
            why: t`"Of" and "times" make $\frac{1}{2}$ look like a multiplier. An exponent tells how a number multiplies *itself*: $8 \times 8 = 64$, so $64^{\frac{1}{2}} = 8$.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $27^{\frac{2}{3}}$.`,
                answer: 9,
                explain: t`$27^{\frac{1}{3}} = 3$, and $3^2 = 9$.`,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each power with its value.",
              pairs: [
                [t`$8^{\frac{1}{3}}$`, "2"],
                [t`$9^{\frac{3}{2}}$`, "27"],
                [t`$32^{\frac{2}{5}}$`, "4"],
                [t`$16^{-\frac{1}{2}}$`, t`$\frac{1}{4}$`],
                [t`$81^{\frac{1}{4}}$`, "3"],
              ],
              explain: "Write the base as a prime power first, then multiply the exponents. A negative exponent gives a reciprocal.",
            },
          },
          {
            type: "example",
            title: "Simplify a bigger expression",
            problem: t`Simplify $\dfrac{25^{\frac{3}{2}} \times 243^{-\frac{3}{5}}}{16^{\frac{5}{4}} \times 8^{-\frac{4}{3}}}$.`,
            steps: [
              t`$25^{\frac{3}{2}} = 5^3 = 125$ and $243^{-\frac{3}{5}} = (3^5)^{-\frac{3}{5}} = 3^{-3} = \frac{1}{27}$.`,
              t`$16^{\frac{5}{4}} = 2^5 = 32$ and $8^{-\frac{4}{3}} = 2^{-4} = \frac{1}{16}$.`,
              t`Numerator $= \frac{125}{27}$. Denominator $= \frac{32}{16} = 2$.`,
              t`Value $= \frac{125}{27} \div 2 = \frac{125}{54}$.`,
            ],
            answer: t`$\frac{125}{54}$`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "In **NCERT** (CBSE, Karnataka) these laws are the last part of *Number Systems*. **ICSE** teaches them in a separate chapter, *Indices*, with more practice; ICSE students can treat this lesson as a short preview.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Always rewrite each base as a power of a prime (27 = $3^3$, 32 = $2^5$, 243 = $3^5$) before applying the laws. Most lost marks come from adding exponents of **different** bases, like writing $2^3 \times 3^2 = 6^5$.`,
          },
          {
            type: "keypoints",
            items: [
              t`$a^{\frac{1}{n}} = \sqrt[n]{a}$ and $a^{\frac{m}{n}} = (\sqrt[n]{a})^m$, for $a > 0$.`,
              t`Same base: multiply → add exponents; divide → subtract exponents.`,
              t`Power of a power: multiply exponents. Same exponent: $a^p b^p = (ab)^p$.`,
              t`$a^{-p} = \frac{1}{a^p}$ and $a^0 = 1$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$a^{\frac{1}{n}}$`, back: t`The principal $n$th root of $a$: $\sqrt[n]{a}$` },
          { front: t`$a^{\frac{m}{n}}$`, back: t`$(\sqrt[n]{a})^m = \sqrt[n]{a^m}$` },
          { front: t`$a^p \cdot a^q$`, back: t`$a^{p+q}$` },
          { front: t`$(a^p)^q$`, back: t`$a^{pq}$` },
          { front: t`$a^{-p}$`, back: t`$\frac{1}{a^p}$` },
          { front: t`$a^p b^p$`, back: t`$(ab)^p$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find $125^{\frac{1}{3}}$.`,
            answer: 5,
            explain: t`$5^3 = 125$.`,
          },
          {
            kind: "mcq",
            q: t`Simplify $7^{\frac{1}{2}} \cdot 8^{\frac{1}{2}}$.`,
            options: [t`$56^{\frac{1}{2}}$`, t`$15^{\frac{1}{2}}$`, "56", "15"],
            answer: 0,
            explain: t`Same exponent, different bases: multiply the bases, $a^p b^p = (ab)^p$. Adding the bases (15) is a common slip.`,
          },
          {
            kind: "truefalse",
            q: t`For $a > 0$, $a^{\frac{m}{n}} = \sqrt[n]{a^m}$.`,
            answer: true,
            explain: t`It also equals $(\sqrt[n]{a})^m$; both give the same value.`,
          },
          {
            kind: "fill",
            q: t`$9^{\frac{3}{2}} = $ ___`,
            answer: ["27"],
            explain: t`$\sqrt{9} = 3$ and $3^3 = 27$.`,
          },
          {
            kind: "numeric",
            q: t`If $16^{-\frac{3}{4}} = \frac{1}{k}$, find $k$.`,
            answer: 8,
            explain: t`$16^{\frac{3}{4}} = (2^4)^{\frac{3}{4}} = 2^3 = 8$, so $16^{-\frac{3}{4}} = \frac{1}{8}$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`Simplify $\frac{11^{\frac{1}{2}}}{11^{\frac{1}{4}}}$.`,
            options: [t`$11^{\frac{1}{4}}$`, t`$11^{\frac{1}{8}}$`, t`$11^{2}$`, t`$1^{\frac{1}{4}}$`],
            answer: 0,
            explain: t`Subtract exponents: $\frac{1}{2} - \frac{1}{4} = \frac{1}{4}$. Dividing the exponents gives the wrong $11^2$.`,
          },
          {
            kind: "multi",
            q: "Select all the expressions equal to 4.",
            options: [t`$64^{\frac{1}{3}}$`, t`$16^{\frac{1}{2}}$`, t`$8^{\frac{2}{3}}$`, t`$32^{\frac{1}{5}}$`, t`$2^{\frac{1}{2}} \cdot 2^{\frac{3}{2}}$`],
            answers: [0, 1, 2, 4],
            explain: t`$32^{\frac{1}{5}} = 2$. The others: $4^3 = 64$; $4^2 = 16$; $8^{\frac{2}{3}} = 2^2$; $2^{\frac{1}{2} + \frac{3}{2}} = 2^2$.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Polynomials (CBSE / Karnataka)                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-polynomials",
    title: "Polynomials: Degree, Zeroes and the Factor Theorem",
    icon: "🧮",
    description: "Terms, coefficients and degree, values and zeroes of a polynomial, and the remainder and factor theorems.",
    lessons: [
      {
        slug: "c9-polynomial-basics",
        title: "Polynomials, Degree and Zeroes",
        summary: "What a polynomial in one variable is, how to find its degree, its value at a point and its zeroes.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: t`A square garden in Mysuru has side $(x + 3)$ metres. Its area is $(x + 3)^2 = x^2 + 6x + 9$ square metres. Expressions like $x^2 + 6x + 9$ are **polynomials**, and they appear whenever we write areas, volumes or costs with an unknown.`,
          },
          {
            type: "text",
            md: t`A **polynomial in one variable** $x$ is a sum of terms of the form $a x^n$, where $a$ is a real number (the **coefficient**) and $n$ is a **whole number** (0, 1, 2, …). In $4x^3 - \sqrt{2}x + 7$, the terms are $4x^3$, $-\sqrt{2}x$ and $7$, and the coefficient of $x$ is $-\sqrt{2}$.

$x + \frac{1}{x}$ is **not** a polynomial, because $\frac{1}{x} = x^{-1}$ has a negative power. $\sqrt{x} + 3$ is not a polynomial either, because $\sqrt{x} = x^{\frac{1}{2}}$.`,
          },
          {
            type: "table",
            headers: ["Name", "Meaning", "Example"],
            rows: [
              ["**Degree**", "Highest power of the variable", t`degree of $5x^3 + 4x^4 + 7x$ is 4`],
              ["**Constant** polynomial", "Degree 0 (a non-zero number)", "7"],
              ["**Linear** polynomial", "Degree 1", t`$2x - 5$`],
              ["**Quadratic** polynomial", "Degree 2", t`$x^2 - 5x + 6$`],
              ["**Cubic** polynomial", "Degree 3", t`$x^3 - 1$`],
              ["Monomial / binomial / trinomial", "1 / 2 / 3 terms", t`$3y$; $y^2 + 1$; $y^2 + y + 1$`],
              ["**Zero polynomial**", "The number 0", "degree is not defined"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is a polynomial?",
                options: [t`$x^2 + \frac{1}{x}$`, t`$\sqrt{x} + 3$`, t`$4y^3 - \sqrt{2}y + 1$`, t`$t^{\frac{1}{2}} + 2$`],
                answer: 2,
                explain: t`Coefficients may be irrational ($\sqrt{2}$), but every power of the variable must be a whole number. $\frac{1}{x}$, $\sqrt{x}$ and $t^{\frac{1}{2}}$ break this.`,
              },
            ],
          },
          {
            type: "text",
            md: t`We write a polynomial as $p(x)$. The **value** of $p(x)$ at $x = a$, written $p(a)$, is what you get when you replace $x$ by $a$. If $p(a) = 0$, then $a$ is called a **zero** of the polynomial. For a linear polynomial $ax + b$ ($a \neq 0$) the only zero is $x = -\frac{b}{a}$.`,
          },
          {
            type: "example",
            title: "Values and zeroes",
            problem: t`For $p(x) = x^2 - 5x + 6$, find $p(0)$, $p(2)$, $p(3)$ and $p(-1)$. Which of 0, 2, 3, −1 are zeroes of $p(x)$?`,
            steps: [
              t`$p(0) = 0 - 0 + 6 = 6$`,
              t`$p(2) = 4 - 10 + 6 = 0$`,
              t`$p(3) = 9 - 15 + 6 = 0$`,
              t`$p(-1) = 1 + 5 + 6 = 12$`,
            ],
            answer: t`$p(2) = p(3) = 0$, so 2 and 3 are the zeroes. 0 and −1 are not.`,
          },
          {
            type: "list",
            items: [
              "A **non-zero constant** polynomial (like 7) has **no** zero.",
              "For the **zero polynomial**, every real number is a zero.",
              "A polynomial can have more than one zero; a polynomial of degree n has at most n zeroes.",
              "0 may or may not be a zero: it is a zero of x² − 2x, but not of x + 1.",
            ],
          },
          {
            type: "mistake",
            wrong: t`The zero of $2x + 3$ is $\frac{3}{2}$ (or: the zero of $p(x)$ is $p(0)$).`,
            right: t`Solve $2x + 3 = 0$: $x = -\frac{3}{2}$. A zero is the value of $x$ that makes $p(x) = 0$, not the value of $p$ at 0.`,
            why: t`The word "zero" makes students think of $p(0)$, and moving 3 across the equals sign without changing its sign gives $+\frac{3}{2}$. Checking $p\left(-\frac{3}{2}\right) = -3 + 3 = 0$ confirms the right answer.`,
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Polynomial or not a polynomial?",
              groups: ["Polynomial", "Not a polynomial"],
              items: [
                { text: t`$x^3 - 2x + 1$`, group: 0, hint: "All powers are whole numbers." },
                { text: t`$y + \frac{1}{y}$`, group: 1, hint: t`$\frac{1}{y} = y^{-1}$, a negative power.` },
                { text: t`$\sqrt{3}x^2 + 5$`, group: 0, hint: "An irrational coefficient is allowed." },
                { text: t`$\sqrt{x} + 4$`, group: 1, hint: t`$\sqrt{x} = x^{\frac{1}{2}}$.` },
                { text: "7", group: 0, hint: "A constant polynomial (degree 0)." },
                { text: t`$x^{-2} + 1$`, group: 1, hint: "−2 is not a whole number." },
                { text: t`$\frac{t^2}{2} - t$`, group: 0, hint: t`It is $\frac{1}{2}t^2 - t$; a fractional coefficient is fine.` },
                { text: t`$\frac{3}{x^2}$`, group: 1, hint: t`This is $3x^{-2}$.` },
              ],
              explain: "Look at the powers of the variable, not the coefficients. Coefficients can be any real numbers; powers must be 0, 1, 2, 3, …",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Find the degree only **after** simplifying: $(x^2 + 1)(x^3 - 2)$ has degree $2 + 3 = 5$. Writing "the degree of the zero polynomial is 0" is a frequent error; it is **not defined**. When asked to verify a zero, show the substitution line, e.g. $p(2) = 4 - 10 + 6 = 0$.`,
          },
          {
            type: "keypoints",
            items: [
              "In a polynomial, every power of the variable is a whole number.",
              "Degree = highest power; linear 1, quadratic 2, cubic 3.",
              t`$a$ is a zero of $p(x)$ when $p(a) = 0$.`,
              t`The zero of $ax + b$ is $-\frac{b}{a}$.`,
              "A non-zero constant has no zero; the zero polynomial has an undefined degree.",
            ],
          },
        ],
        flashcards: [
          { front: "Polynomial in one variable", back: t`A sum of terms $a x^n$ with real $a$ and whole-number $n$.` },
          { front: "Degree of a polynomial", back: "The highest power of the variable." },
          { front: "Quadratic polynomial", back: t`Degree 2, e.g. $x^2 - 5x + 6$.` },
          { front: "Zero of a polynomial", back: t`A number $a$ with $p(a) = 0$.` },
          { front: t`Zero of $ax + b$`, back: t`$-\frac{b}{a}$` },
          { front: "Degree of the zero polynomial", back: "Not defined." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`What is the degree of $5x^3 + 4x^4 + 7x$?`,
            options: ["3", "4", "7", "1"],
            answer: 1,
            explain: t`The highest power is $x^4$. The first term written is not always the highest.`,
          },
          {
            kind: "fill",
            q: "A polynomial of degree 2 is called a ___ polynomial.",
            answer: ["quadratic"],
            explain: "Degree 1 is linear, 2 quadratic, 3 cubic.",
          },
          {
            kind: "numeric",
            q: t`If $p(x) = x^3 - 2x + 1$, find $p(2)$.`,
            answer: 5,
            explain: t`$8 - 4 + 1 = 5$.`,
          },
          {
            kind: "truefalse",
            q: "A non-zero constant polynomial has no zero.",
            answer: true,
            explain: t`$p(x) = 7$ is 7 for every $x$, never 0.`,
          },
          {
            kind: "mcq",
            q: t`What is the zero of $3x - 2$?`,
            options: [t`$\frac{2}{3}$`, t`$-\frac{2}{3}$`, t`$\frac{3}{2}$`, "−2"],
            answer: 0,
            explain: t`$3x - 2 = 0$ gives $x = \frac{2}{3}$.`,
          },
          {
            kind: "multi",
            q: t`Select all the zeroes of $x^2 - 9$.`,
            options: ["3", "−3", "9", "0"],
            answers: [0, 1],
            explain: t`$3^2 - 9 = 0$ and $(-3)^2 - 9 = 0$. $p(0) = -9$ and $p(9) = 72$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The degree of the zero polynomial is 0.",
            answer: false,
            explain: "Its degree is not defined. Degree 0 belongs to non-zero constants such as 7.",
          },
          {
            kind: "order",
            q: "Arrange these polynomials from lowest to highest degree.",
            items: ["5", t`$2x + 1$`, t`$x^2 - 4$`, t`$x^3 + x$`],
            explain: "Constant (0), linear (1), quadratic (2), cubic (3).",
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-remainder-factor-theorem",
        title: "Remainder and Factor Theorems",
        summary: "Finding a remainder without long division, testing factors with p(a) = 0, and factorising cubic polynomials.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`Dividing $x^3 + 3x^2 + 3x + 1$ by $x + 1$ with long division takes many lines. There is a one-line shortcut: just work out one value of the polynomial.`,
          },
          {
            type: "text",
            md: t`**Remainder theorem.** If $p(x)$ has degree 1 or more and is divided by $x - a$, the remainder is $p(a)$.

Why? Division gives $p(x) = (x - a)\,q(x) + r$, where the remainder $r$ is a number. Put $x = a$: $p(a) = 0 \cdot q(a) + r = r$. For a divisor $ax + b$, the remainder is $p\left(-\frac{b}{a}\right)$.`,
          },
          {
            type: "example",
            title: "Remainder without dividing",
            problem: t`Find the remainder when $p(x) = x^3 + 3x^2 + 3x + 1$ is divided by (i) $x + 1$ (ii) $x - \frac{1}{2}$.`,
            steps: [
              t`(i) $x + 1 = x - (-1)$, so use $a = -1$: $p(-1) = -1 + 3 - 3 + 1 = 0$.`,
              t`(ii) $a = \frac{1}{2}$: $p\left(\frac{1}{2}\right) = \frac{1}{8} + \frac{3}{4} + \frac{3}{2} + 1$.`,
              t`Common denominator 8: $\frac{1 + 6 + 12 + 8}{8} = \frac{27}{8}$.`,
            ],
            answer: t`(i) 0 (ii) $\frac{27}{8}$`,
          },
          {
            type: "text",
            md: t`**Factor theorem.** If $p(x)$ has degree $n \geq 1$ and $a$ is a real number, then (i) $x - a$ is a factor of $p(x)$ if $p(a) = 0$, and (ii) $p(a) = 0$ if $x - a$ is a factor. In short: **remainder 0 means factor**.`,
          },
          {
            type: "callout",
            tone: "note",
            title: "Board note",
            md: "The current rationalised **NCERT** textbook (CBSE) keeps the **factor theorem** but no longer has a separate section on the remainder theorem; check whether your Karnataka textbook still has it. The remainder theorem is still the easiest way to *see* why the factor theorem works. **ICSE** studies both theorems in detail in Class 10.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find the remainder when $x^3 - 2x^2 + 4$ is divided by $x - 2$.`,
                answer: 4,
                explain: t`$p(2) = 8 - 8 + 4 = 4$.`,
              },
              {
                kind: "truefalse",
                q: t`$x + 1$ is a factor of $x^3 + x^2 + x + 1$.`,
                answer: true,
                explain: t`$p(-1) = -1 + 1 - 1 + 1 = 0$, so by the factor theorem $x + 1$ is a factor.`,
              },
            ],
          },
          {
            type: "example",
            title: "Find the unknown coefficient",
            problem: t`Find $k$ if $x - 1$ is a factor of $p(x) = kx^2 - 3x + k$.`,
            steps: [
              t`Since $x - 1$ is a factor, $p(1) = 0$.`,
              t`$p(1) = k - 3 + k = 2k - 3$.`,
              t`$2k - 3 = 0$, so $k = \frac{3}{2}$.`,
            ],
            answer: t`$k = \frac{3}{2}$`,
          },
          {
            type: "example",
            title: "Factorise a cubic",
            problem: t`Factorise $x^3 + 2x^2 - 5x - 6$.`,
            steps: [
              t`Try factors of the constant term −6: $\pm1, \pm2, \pm3, \pm6$. $p(1) = 1 + 2 - 5 - 6 = -8 \neq 0$.`,
              t`$p(-1) = -1 + 2 + 5 - 6 = 0$, so $x + 1$ is a factor.`,
              t`Divide (or compare coefficients): $x^3 + 2x^2 - 5x - 6 = (x + 1)(x^2 + x - 6)$.`,
              t`Split the middle term: $x^2 + x - 6 = (x + 3)(x - 2)$, since $3 \times (-2) = -6$ and $3 + (-2) = 1$.`,
            ],
            answer: t`$(x + 1)(x - 2)(x + 3)$`,
          },
          {
            type: "mistake",
            wrong: t`To test whether $x + 2$ is a factor, put $x = 2$.`,
            right: t`Put $x = -2$. The factor $x - a$ is tested with $a$, and $x + 2 = x - (-2)$.`,
            why: t`The "2" is in plain view, so the sign gets dropped. Ask: what value of $x$ makes the factor zero? $x + 2 = 0$ when $x = -2$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps to factorise a cubic polynomial.",
              items: [
                "List the factors of the constant term",
                "Substitute them one by one until p(a) = 0",
                "Write (x − a) as one factor",
                "Divide to get a quadratic quotient",
                "Factorise the quadratic by splitting the middle term",
              ],
              explain: "The factor theorem finds the first factor; the quadratic left over is split in the usual way.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Write the full line "$p(-1) = -1 + 2 + 5 - 6 = 0$, therefore by the factor theorem $(x + 1)$ is a factor of $p(x)$." The substitution and the reason each carry marks. Always check your final factors by multiplying back, at least the constant term: $1 \times (-2) \times 3 = -6$.`,
          },
          {
            type: "keypoints",
            items: [
              t`Remainder when $p(x)$ is divided by $x - a$ is $p(a)$.`,
              t`$x - a$ is a factor of $p(x)$ exactly when $p(a) = 0$.`,
              t`For $x + a$, substitute $x = -a$; for $ax + b$, substitute $x = -\frac{b}{a}$.`,
              "To factorise a cubic, try the factors of the constant term first.",
            ],
          },
        ],
        flashcards: [
          { front: "Remainder theorem", back: t`$p(x) \div (x - a)$ leaves remainder $p(a)$.` },
          { front: "Factor theorem", back: t`$x - a$ is a factor of $p(x)$ if and only if $p(a) = 0$.` },
          { front: t`Value to substitute for the factor $x + 3$`, back: t`$x = -3$` },
          { front: t`Value to substitute for the divisor $2x - 1$`, back: t`$x = \frac{1}{2}$` },
          { front: "Which numbers to try first for a cubic?", back: "Factors of the constant term (with + and − signs)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`Find the remainder when $4x^3 - 3x^2 + 2x - 4$ is divided by $x + 2$.`,
            answer: -52,
            explain: t`$p(-2) = 4(-8) - 3(4) + 2(-2) - 4 = -32 - 12 - 4 - 4 = -52$.`,
            difficulty: 2,
            hint: t`Substitute $x = -2$ and watch the signs of odd powers.`,
          },
          {
            kind: "mcq",
            q: t`Which is a factor of $x^2 - 5x + 6$?`,
            options: [t`$x - 2$`, t`$x + 2$`, t`$x + 3$`, t`$x - 6$`],
            answer: 0,
            explain: t`$p(2) = 4 - 10 + 6 = 0$. For $x + 2$, $p(-2) = 20 \neq 0$.`,
          },
          {
            kind: "numeric",
            q: t`Find $k$ if $x - 2$ is a factor of $x^2 + kx + 6$.`,
            answer: -5,
            explain: t`$p(2) = 4 + 2k + 6 = 0$, so $2k = -10$ and $k = -5$.`,
          },
          {
            kind: "truefalse",
            q: t`If $p(3) = 0$, then $x + 3$ is a factor of $p(x)$.`,
            answer: false,
            explain: t`$p(3) = 0$ means $x - 3$ is a factor.`,
          },
          {
            kind: "fill",
            q: t`When $p(x)$ is divided by $x - a$, the remainder is ___.`,
            answer: ["p(a)"],
            explain: t`$p(x) = (x - a)q(x) + r$; putting $x = a$ gives $r = p(a)$.`,
          },
          {
            kind: "mcq",
            q: t`What is the remainder when $x^3 + 1$ is divided by $x + 1$?`,
            options: ["0", "2", "1", "−2"],
            answer: 0,
            explain: t`$(-1)^3 + 1 = 0$. Substituting $x = 1$ by mistake gives 2.`,
          },
          {
            kind: "multi",
            q: t`Select all the factors of $x^3 - 6x^2 + 11x - 6$.`,
            options: [t`$x - 1$`, t`$x - 2$`, t`$x - 3$`, t`$x + 1$`, t`$x - 6$`],
            answers: [0, 1, 2],
            explain: t`$p(1) = p(2) = p(3) = 0$, so it equals $(x - 1)(x - 2)(x - 3)$. $p(-1) = -24$ and $p(6) = 60$.`,
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Algebraic identities (CBSE Polynomials) = Expansions (ICSE)         */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-algebraic-identities",
    title: "Algebraic Identities and Expansions",
    icon: "✖️",
    description: "Square, product and cube identities, (a + b + c)², and using them to expand, evaluate and find values like x² + 1/x².",
    lessons: [
      {
        slug: "c9-square-identities",
        title: "Square and Product Identities",
        summary: "(a ± b)², (a + b)(a − b), (x + a)(x + b) and (a + b + c)²: expanding and using them for quick calculations.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`Can you find $102^2$ in your head? Write it as $(100 + 2)^2 = 10000 + 400 + 4 = 10404$. That trick is an **algebraic identity** at work.`,
          },
          {
            type: "text",
            md: t`An **identity** is an equality that is true for **every** value of the variables. $(a + b)^2 = a^2 + 2ab + b^2$ is an identity. $x + 3 = 5$ is an **equation**: it is true only for $x = 2$. Using identities to multiply out brackets is called **expansion**.`,
          },
          {
            type: "formula",
            tex: t`(a + b)^2 = a^2 + 2ab + b^2 \qquad (a - b)^2 = a^2 - 2ab + b^2`,
          },
          {
            type: "formula",
            tex: t`(a + b)(a - b) = a^2 - b^2 \qquad (x + a)(x + b) = x^2 + (a + b)x + ab`,
          },
          {
            type: "example",
            title: "Expand and evaluate",
            problem: t`(i) Expand $(3x - 4y)^2$. (ii) Find $103 \times 97$ without multiplying directly.`,
            steps: [
              t`(i) Use $(a - b)^2$ with $a = 3x$, $b = 4y$: $(3x)^2 - 2(3x)(4y) + (4y)^2$.`,
              t`$= 9x^2 - 24xy + 16y^2$.`,
              t`(ii) $103 \times 97 = (100 + 3)(100 - 3) = 100^2 - 3^2$.`,
              t`$= 10000 - 9 = 9991$.`,
            ],
            answer: t`(i) $9x^2 - 24xy + 16y^2$ (ii) $9991$`,
          },
          {
            type: "mistake",
            wrong: t`$(a + b)^2 = a^2 + b^2$`,
            right: t`$(a + b)^2 = a^2 + 2ab + b^2$. Test with $a = 2, b = 3$: $(2 + 3)^2 = 25$, but $4 + 9 = 13$.`,
            why: t`Squaring looks like it should "go inside" the bracket, as it does for products: $(ab)^2 = a^2b^2$. For a sum, the two cross terms $ab + ba = 2ab$ are always there.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Use $(a - b)^2$ to find $99^2$.`,
                answer: 9801,
                explain: t`$(100 - 1)^2 = 10000 - 200 + 1 = 9801$.`,
              },
            ],
          },
          {
            type: "formula",
            tex: t`(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca`,
            caption: "Three squares plus twice every pair.",
          },
          {
            type: "example",
            title: "Three terms, with a minus sign",
            problem: t`Expand $(2x - y + 3z)^2$.`,
            steps: [
              t`Take $a = 2x$, $b = -y$, $c = 3z$ (keep the sign with the term).`,
              t`Squares: $4x^2 + y^2 + 9z^2$.`,
              t`Pairs: $2(2x)(-y) = -4xy$, $2(-y)(3z) = -6yz$, $2(3z)(2x) = 12zx$.`,
            ],
            answer: t`$4x^2 + y^2 + 9z^2 - 4xy - 6yz + 12zx$`,
          },
          {
            type: "example",
            title: "Using the identity backwards",
            problem: t`If $a + b + c = 9$ and $ab + bc + ca = 26$, find $a^2 + b^2 + c^2$.`,
            steps: [
              t`$(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)$.`,
              t`$81 = a^2 + b^2 + c^2 + 52$.`,
            ],
            answer: t`$a^2 + b^2 + c^2 = 29$`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each product with its expansion.",
              pairs: [
                [t`$(x + 4)^2$`, t`$x^2 + 8x + 16$`],
                [t`$(x - 4)^2$`, t`$x^2 - 8x + 16$`],
                [t`$(x + 4)(x - 4)$`, t`$x^2 - 16$`],
                [t`$(x + 4)(x + 2)$`, t`$x^2 + 6x + 8$`],
                [t`$(x - 4)(x + 2)$`, t`$x^2 - 2x - 8$`],
              ],
              explain: t`Look at the middle term and the sign of the constant. $(a - b)^2$ still ends in $+b^2$; only $(a + b)(a - b)$ has no middle term.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Write which identity you use and what $a$, $b$ (and $c$) stand for before expanding. In $(a + b + c)^2$ questions most marks are lost on the sign of a cross term when one term is negative. **ICSE** calls this chapter *Expansions*; **NCERT** lists these as identities inside *Polynomials*. The working is the same.`,
          },
          {
            type: "keypoints",
            items: [
              "An identity is true for all values; an equation only for some.",
              t`$(a \pm b)^2 = a^2 \pm 2ab + b^2$; $(a + b)(a - b) = a^2 - b^2$.`,
              t`$(x + a)(x + b) = x^2 + (a + b)x + ab$.`,
              t`$(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$.`,
              "Identities turn hard multiplications like 103 × 97 into easy ones.",
            ],
          },
        ],
        flashcards: [
          { front: t`$(a + b)^2$`, back: t`$a^2 + 2ab + b^2$` },
          { front: t`$(a - b)^2$`, back: t`$a^2 - 2ab + b^2$` },
          { front: t`$(a + b)(a - b)$`, back: t`$a^2 - b^2$` },
          { front: t`$(x + a)(x + b)$`, back: t`$x^2 + (a + b)x + ab$` },
          { front: t`$(a + b + c)^2$`, back: t`$a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$` },
          { front: "Identity vs equation", back: "An identity holds for all values of the variables; an equation only for particular values." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Expand $(x + 5)(x - 3)$.`,
            options: [t`$x^2 + 2x - 15$`, t`$x^2 - 2x - 15$`, t`$x^2 + 8x - 15$`, t`$x^2 + 2x + 15$`],
            answer: 0,
            explain: t`$a + b = 5 + (-3) = 2$ and $ab = -15$.`,
          },
          {
            kind: "numeric",
            q: t`Find $105 \times 95$ using an identity.`,
            answer: 9975,
            explain: t`$(100 + 5)(100 - 5) = 10000 - 25 = 9975$.`,
          },
          {
            kind: "truefalse",
            q: t`$(a - b)^2 = (b - a)^2$ for all $a$ and $b$.`,
            answer: true,
            explain: t`$b - a = -(a - b)$, and squaring removes the minus sign. Both equal $a^2 - 2ab + b^2$.`,
          },
          {
            kind: "fill",
            q: t`$(2x + 3)^2 = 4x^2 + $ ___ $x + 9$`,
            answer: ["12"],
            explain: t`$2 \times 2x \times 3 = 12x$.`,
          },
          {
            kind: "numeric",
            q: t`If $a + b = 7$ and $ab = 12$, find $a^2 + b^2$.`,
            answer: 25,
            explain: t`$a^2 + b^2 = (a + b)^2 - 2ab = 49 - 24 = 25$.`,
            difficulty: 2,
            hint: t`Start from $(a + b)^2$.`,
          },
          {
            kind: "numeric",
            q: t`What is the coefficient of $yz$ in the expansion of $(x + 2y - z)^2$?`,
            answer: -4,
            explain: t`The $yz$ term is $2(2y)(-z) = -4yz$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Select all the identities.",
            options: [t`$(a + b)^2 = a^2 + 2ab + b^2$`, t`$x + 3 = 5$`, t`$(a + b)(a - b) = a^2 - b^2$`, t`$(a - b)^2 = a^2 - b^2$`],
            answers: [0, 2],
            explain: t`$x + 3 = 5$ is an equation (true only for $x = 2$). $(a - b)^2 = a^2 - b^2$ is false, e.g. $a = 3, b = 1$ gives $4 \neq 8$.`,
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-cube-identities",
        title: "Cube Identities",
        summary: "(a ± b)³, a³ ± b³ and a³ + b³ + c³ − 3abc, with quick ways to cube numbers and evaluate sums of cubes.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🧊",
            caption: "Cut a cube of side (a + b) into pieces: one a³ cube, one b³ cube, three a²b slabs and three ab² rods.",
          },
          {
            type: "text",
            md: t`Multiply $(a + b)^2$ by $(a + b)$ once more and collect terms: you get $a^3 + 3a^2b + 3ab^2 + b^3$. Taking $3ab$ out of the middle terms gives the form most used in exams.`,
          },
          {
            type: "formula",
            tex: t`(a + b)^3 = a^3 + b^3 + 3ab(a + b) \qquad (a - b)^3 = a^3 - b^3 - 3ab(a - b)`,
          },
          {
            type: "formula",
            tex: t`a^3 + b^3 + c^3 - 3abc = (a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)`,
            caption: t`Special case: if $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$.`,
          },
          {
            type: "example",
            title: "Expand a cube",
            problem: t`Expand $(2x + 3y)^3$.`,
            steps: [
              t`$a = 2x$, $b = 3y$: $a^3 = 8x^3$, $b^3 = 27y^3$.`,
              t`$3ab(a + b) = 3(2x)(3y)(2x + 3y) = 18xy(2x + 3y) = 36x^2y + 54xy^2$.`,
              t`Add them in descending powers of $x$.`,
            ],
            answer: t`$8x^3 + 36x^2y + 54xy^2 + 27y^3$`,
          },
          {
            type: "example",
            title: "Cube a number quickly",
            problem: t`Find $99^3$ using an identity.`,
            steps: [
              t`$99^3 = (100 - 1)^3 = 100^3 - 1^3 - 3(100)(1)(100 - 1)$.`,
              t`$= 1000000 - 1 - 300 \times 99 = 1000000 - 1 - 29700$.`,
            ],
            answer: "970299",
          },
          {
            type: "mistake",
            wrong: t`$(a + b)^3 = a^3 + b^3$`,
            right: t`$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$. Check with $a = b = 1$: $2^3 = 8$, while $1 + 1 = 2$.`,
            why: "It is the same trap as squaring: the power does not go separately onto each term of a sum. The middle terms 3a²b and 3ab² are always there.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`Find $101^3$ using $(a + b)^3$.`,
                answer: 1030301,
                explain: t`$100^3 + 1 + 3(100)(1)(101) = 1000000 + 1 + 30300 = 1030301$.`,
              },
            ],
          },
          {
            type: "example",
            title: "When a + b + c = 0",
            problem: t`Without finding the cubes, find $(-10)^3 + 4^3 + 6^3$.`,
            steps: [
              t`Check the sum: $-10 + 4 + 6 = 0$.`,
              t`So $a^3 + b^3 + c^3 = 3abc = 3(-10)(4)(6)$.`,
            ],
            answer: t`$-720$ (check: $-1000 + 64 + 216 = -720$)`,
          },
          {
            type: "example",
            title: "Sum of cubes from a + b and ab",
            problem: t`If $a + b = 5$ and $ab = 6$, find $a^3 + b^3$.`,
            steps: [
              t`From $(a + b)^3 = a^3 + b^3 + 3ab(a + b)$: $a^3 + b^3 = (a + b)^3 - 3ab(a + b)$.`,
              t`$= 125 - 3(6)(5) = 125 - 90$.`,
            ],
            answer: t`$a^3 + b^3 = 35$`,
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "If x + y + z = 0, what is x³ + y³ + z³?",
              emoji: "🎲",
              options: ["0", "3xyz", "xyz", "(x + y + z)³"],
              answer: 1,
              trap: 0,
              explain: t`It is tempting to say 0 because the sum is 0, but cubes do not cancel like that: $(-2)^3 + 1^3 + 1^3 = -6 = 3(-2)(1)(1)$. The identity gives $3xyz$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Questions like "find $25^3 - 75^3 + 50^3$ without cubing" are worth 2 marks: 1 for noticing $a + b + c = 0$ and 1 for $3abc$. Write the check "$25 + (-75) + 50 = 0$" in your answer. NCERT also uses $a^3 + b^3 + c^3 - 3abc$ to factorise (see *Factorisation*).`,
          },
          {
            type: "keypoints",
            items: [
              t`$(a + b)^3 = a^3 + b^3 + 3ab(a + b)$.`,
              t`$(a - b)^3 = a^3 - b^3 - 3ab(a - b)$.`,
              t`$a^3 + b^3 = (a + b)^3 - 3ab(a + b)$ and $a^3 - b^3 = (a - b)^3 + 3ab(a - b)$.`,
              t`If $a + b + c = 0$, then $a^3 + b^3 + c^3 = 3abc$.`,
            ],
          },
        ],
        flashcards: [
          { front: t`$(a + b)^3$`, back: t`$a^3 + b^3 + 3ab(a + b) = a^3 + 3a^2b + 3ab^2 + b^3$` },
          { front: t`$(a - b)^3$`, back: t`$a^3 - b^3 - 3ab(a - b) = a^3 - 3a^2b + 3ab^2 - b^3$` },
          { front: t`$a^3 + b^3 + c^3 - 3abc$`, back: t`$(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$` },
          { front: t`If $a + b + c = 0$`, back: t`$a^3 + b^3 + c^3 = 3abc$` },
          { front: t`$a^3 + b^3$ in terms of $a + b$ and $ab$`, back: t`$(a + b)^3 - 3ab(a + b)$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Expand $(x - 2)^3$.`,
            options: [t`$x^3 - 6x^2 + 12x - 8$`, t`$x^3 - 8$`, t`$x^3 - 6x^2 - 12x - 8$`, t`$x^3 + 6x^2 + 12x - 8$`],
            answer: 0,
            explain: t`$x^3 - 3(x^2)(2) + 3(x)(4) - 8$. The signs alternate: $-, +, -$.`,
          },
          {
            kind: "numeric",
            q: t`If $a - b = 3$ and $ab = 10$, find $a^3 - b^3$.`,
            answer: 117,
            explain: t`$a^3 - b^3 = (a - b)^3 + 3ab(a - b) = 27 + 90 = 117$.`,
            difficulty: 2,
            hint: t`Rearrange $(a - b)^3 = a^3 - b^3 - 3ab(a - b)$.`,
          },
          {
            kind: "truefalse",
            q: t`$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$`,
            answer: true,
            explain: t`Multiply out: $a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3 = a^3 + b^3$.`,
          },
          {
            kind: "fill",
            q: t`If $a + b + c = 0$, then $a^3 + b^3 + c^3 = $ ___.`,
            answer: ["3abc"],
            explain: "From the identity, the bracket (a + b + c) becomes 0, so a³ + b³ + c³ − 3abc = 0.",
          },
          {
            kind: "numeric",
            q: t`Find $25^3 - 75^3 + 50^3$ without finding the cubes.`,
            answer: -281250,
            explain: t`$25 + (-75) + 50 = 0$, so the value is $3(25)(-75)(50) = -281250$.`,
            difficulty: 3,
            hint: "Add the three numbers first.",
          },
          {
            kind: "multi",
            q: t`Select all the expressions equal to $a^3 - b^3$.`,
            options: [t`$(a - b)(a^2 + ab + b^2)$`, t`$(a - b)^3 + 3ab(a - b)$`, t`$(a - b)(a^2 - ab + b^2)$`, t`$(a - b)^3$`],
            answers: [0, 1],
            explain: t`$(a - b)(a^2 - ab + b^2)$ has the wrong middle sign, and $(a - b)^3$ misses $3ab(a - b)$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`What is the coefficient of $x^2$ in $(x + 3)^3$?`,
            options: ["9", "3", "27", "6"],
            answer: 0,
            explain: t`$3a^2b = 3(x^2)(3) = 9x^2$.`,
          },
          {
            kind: "order",
            q: t`Write the terms of $(a + b)^3$ in descending powers of $a$.`,
            items: [t`$a^3$`, t`$3a^2b$`, t`$3ab^2$`, t`$b^3$`],
            explain: "The coefficients are 1, 3, 3, 1.",
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-identity-applications",
        title: "Using Identities: x ± 1/x and Special Products",
        summary: "Finding x² + 1/x², x³ + 1/x³ and similar values, linking a + b, a − b and ab, and expanding (x + a)(x + b)(x + c).",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: t`Some questions give you one value, like $x + \frac{1}{x} = 3$, and ask for another, like $x^2 + \frac{1}{x^2}$. You do not need to find $x$. Squaring or cubing the given value does the job.`,
          },
          {
            type: "text",
            md: t`Put $a = x$ and $b = \frac{1}{x}$ in the identities. Since $x \cdot \frac{1}{x} = 1$, the middle terms become plain numbers.`,
          },
          {
            type: "formula",
            tex: t`\left(x + \tfrac{1}{x}\right)^2 = x^2 + \tfrac{1}{x^2} + 2 \qquad \left(x - \tfrac{1}{x}\right)^2 = x^2 + \tfrac{1}{x^2} - 2`,
          },
          {
            type: "formula",
            tex: t`\left(x + \tfrac{1}{x}\right)^3 = x^3 + \tfrac{1}{x^3} + 3\left(x + \tfrac{1}{x}\right) \qquad \left(x - \tfrac{1}{x}\right)^3 = x^3 - \tfrac{1}{x^3} - 3\left(x - \tfrac{1}{x}\right)`,
          },
          {
            type: "example",
            title: "One value gives many",
            problem: t`If $x + \frac{1}{x} = 3$, find (i) $x^2 + \frac{1}{x^2}$ (ii) $x^4 + \frac{1}{x^4}$ (iii) $x^3 + \frac{1}{x^3}$.`,
            steps: [
              t`(i) Square: $9 = x^2 + \frac{1}{x^2} + 2$, so $x^2 + \frac{1}{x^2} = 7$.`,
              t`(ii) Square again: $49 = x^4 + \frac{1}{x^4} + 2$, so $x^4 + \frac{1}{x^4} = 47$.`,
              t`(iii) Cube: $27 = x^3 + \frac{1}{x^3} + 3(3)$, so $x^3 + \frac{1}{x^3} = 27 - 9 = 18$.`,
            ],
            answer: t`(i) 7 (ii) 47 (iii) 18`,
          },
          {
            type: "example",
            title: "Going back: watch the ±",
            problem: t`If $x^2 + \frac{1}{x^2} = 18$, find $x - \frac{1}{x}$.`,
            steps: [
              t`$\left(x - \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} - 2 = 18 - 2 = 16$.`,
              t`A square root has two signs: $x - \frac{1}{x} = \pm 4$.`,
            ],
            answer: t`$x - \frac{1}{x} = \pm 4$`,
          },
          {
            type: "mistake",
            wrong: t`If $x + \frac{1}{x} = 3$, then $x^2 + \frac{1}{x^2} = 3^2 = 9$.`,
            right: t`$x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2 = 9 - 2 = 7$.`,
            why: t`Squaring the sum also creates the middle term $2 \cdot x \cdot \frac{1}{x} = 2$. It is the same "$(a + b)^2 \neq a^2 + b^2$" trap in a new form.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: t`If $x + \frac{1}{x} = 4$, find $x^2 + \frac{1}{x^2}$.`,
                answer: 14,
                explain: t`$16 - 2 = 14$.`,
              },
            ],
          },
          {
            type: "text",
            md: t`Two more links are very useful: $(a + b)^2 - (a - b)^2 = 4ab$ and $(a + b)^2 + (a - b)^2 = 2(a^2 + b^2)$. For example, if $a + b = 7$ and $a - b = 3$, then $4ab = 49 - 9 = 40$, so $ab = 10$.`,
          },
          {
            type: "formula",
            tex: t`(x + a)(x + b)(x + c) = x^3 + (a + b + c)x^2 + (ab + bc + ca)x + abc`,
            caption: t`Example: $(x + 1)(x + 2)(x + 3) = x^3 + 6x^2 + 11x + 6$.`,
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Order the steps to find x³ + 1/x³ from x + 1/x = 5.",
              items: [
                "Write the identity for (x + 1/x)³",
                "Substitute: 125 = (x³ + 1/x³) + 3 × 5",
                "Simplify: 125 = (x³ + 1/x³) + 15",
                "Answer: x³ + 1/x³ = 110",
              ],
              explain: t`The middle part is $3\left(x + \frac{1}{x}\right)$, which you already know. Check: $5^3 - 3(5) = 110$.`,
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`**ICSE** *Expansions* papers often ask for $x^2 + \frac{1}{x^2}$ or $x^3 - \frac{1}{x^3}$ from one given value; each step (squaring, substituting, simplifying) earns a mark. When you go from a square back to $x - \frac{1}{x}$, write **±**; leaving out the minus sign loses a mark. NCERT exercises use the same identities.`,
          },
          {
            type: "keypoints",
            items: [
              t`$x^2 + \frac{1}{x^2} = \left(x + \frac{1}{x}\right)^2 - 2 = \left(x - \frac{1}{x}\right)^2 + 2$.`,
              t`$x^3 + \frac{1}{x^3} = \left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right)$.`,
              t`$x^3 - \frac{1}{x^3} = \left(x - \frac{1}{x}\right)^3 + 3\left(x - \frac{1}{x}\right)$.`,
              t`$(a + b)^2 - (a - b)^2 = 4ab$.`,
              "Taking a square root gives ± two answers.",
            ],
          },
        ],
        flashcards: [
          { front: t`$x^2 + \frac{1}{x^2}$ from $x + \frac{1}{x}$`, back: t`$\left(x + \frac{1}{x}\right)^2 - 2$` },
          { front: t`$x^2 + \frac{1}{x^2}$ from $x - \frac{1}{x}$`, back: t`$\left(x - \frac{1}{x}\right)^2 + 2$` },
          { front: t`$x^3 + \frac{1}{x^3}$`, back: t`$\left(x + \frac{1}{x}\right)^3 - 3\left(x + \frac{1}{x}\right)$` },
          { front: t`$x^3 - \frac{1}{x^3}$`, back: t`$\left(x - \frac{1}{x}\right)^3 + 3\left(x - \frac{1}{x}\right)$` },
          { front: t`$(a + b)^2 - (a - b)^2$`, back: t`$4ab$` },
          { front: t`$(x + a)(x + b)(x + c)$`, back: t`$x^3 + (a + b + c)x^2 + (ab + bc + ca)x + abc$` },
        ],
        quiz: [
          {
            kind: "numeric",
            q: t`If $x + \frac{1}{x} = 5$, find $x^2 + \frac{1}{x^2}$.`,
            answer: 23,
            explain: t`$25 - 2 = 23$.`,
          },
          {
            kind: "numeric",
            q: t`If $x - \frac{1}{x} = 3$, find $x^2 + \frac{1}{x^2}$.`,
            answer: 11,
            explain: t`$\left(x - \frac{1}{x}\right)^2 = x^2 + \frac{1}{x^2} - 2$, so $x^2 + \frac{1}{x^2} = 9 + 2 = 11$.`,
          },
          {
            kind: "numeric",
            q: t`If $x + \frac{1}{x} = 2$, find $x^3 + \frac{1}{x^3}$.`,
            answer: 2,
            explain: t`$2^3 - 3(2) = 8 - 6 = 2$. (Here $x = 1$, and $1 + 1 = 2$ checks out.)`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`If $x^2 + \frac{1}{x^2} = 27$, then $x - \frac{1}{x}$ is`,
            options: [t`$\pm 5$`, "5 only", t`$\pm\sqrt{29}$`, t`$\pm\sqrt{27}$`],
            answer: 0,
            explain: t`$\left(x - \frac{1}{x}\right)^2 = 27 - 2 = 25$, so $\pm 5$. Adding 2 instead gives the wrong $\sqrt{29}$.`,
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: t`$(a - b)^2 = (a + b)^2 - 4ab$`,
            answer: true,
            explain: t`$(a + b)^2 - 4ab = a^2 + 2ab + b^2 - 4ab = a^2 - 2ab + b^2$.`,
          },
          {
            kind: "fill",
            q: t`$(x + 2)(x + 3)(x + 4) = x^3 + 9x^2 + $ ___ $x + 24$`,
            answer: ["26"],
            explain: t`$ab + bc + ca = 6 + 12 + 8 = 26$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`Given $x + \frac{1}{x} = 3$, select all the correct statements.`,
            options: [t`$x^2 + \frac{1}{x^2} = 7$`, t`$x^3 + \frac{1}{x^3} = 18$`, t`$x^2 + \frac{1}{x^2} = 9$`, t`$x^3 + \frac{1}{x^3} = 27$`],
            answers: [0, 1],
            explain: t`$9 - 2 = 7$ and $27 - 3(3) = 18$. The values 9 and 27 forget the extra terms.`,
          },
          {
            kind: "numeric",
            q: t`If $a + b = 10$ and $a - b = 4$, find $ab$.`,
            answer: 21,
            explain: t`$4ab = 100 - 16 = 84$, so $ab = 21$ (indeed $a = 7$, $b = 3$).`,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  /* Factorisation (ICSE; also the factorising part of CBSE Polynomials) */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-factorisation",
    title: "Factorisation",
    icon: "🧩",
    description: "Common factors, grouping, difference of squares, splitting the middle term, and sum and difference of cubes.",
    lessons: [
      {
        slug: "c9-factor-common-grouping",
        title: "Common Factors, Grouping and Difference of Squares",
        summary: "Taking out the HCF, factorising by grouping, and using a² − b² = (a + b)(a − b).",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: t`Expanding turns $(x + 3)(x - 3)$ into $x^2 - 9$. **Factorisation** goes the other way: it writes an expression as a **product of factors**. It is the key step for simplifying fractions and solving equations later.`,
          },
          {
            type: "text",
            md: t`**Step 1 is always the common factor.** Find the HCF of all the terms and take it outside a bracket: $6x^2y - 9xy^2 = 3xy(2x - 3y)$. A whole bracket can be a common factor too: $a(x + y) - b(x + y) = (x + y)(a - b)$.`,
          },
          {
            type: "text",
            md: t`**Grouping.** When four terms have no common factor, group them in pairs so that each pair gives the **same bracket**: $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$.`,
          },
          {
            type: "example",
            title: "Factorise by grouping",
            problem: t`Factorise $x^3 - 3x^2 + x - 3$.`,
            steps: [
              t`Group: $(x^3 - 3x^2) + (x - 3)$.`,
              t`Take out factors: $x^2(x - 3) + 1(x - 3)$.`,
              t`The common bracket is $(x - 3)$.`,
            ],
            answer: t`$(x - 3)(x^2 + 1)$`,
          },
          {
            type: "formula",
            tex: t`a^2 - b^2 = (a + b)(a - b)`,
            caption: "Difference of two squares.",
          },
          {
            type: "example",
            title: "Difference of squares",
            problem: t`Factorise (i) $4x^2 - 25y^2$ (ii) $3x^3 - 12x$ (iii) $x^4 - 81$.`,
            steps: [
              t`(i) $(2x)^2 - (5y)^2 = (2x + 5y)(2x - 5y)$.`,
              t`(ii) Common factor first: $3x(x^2 - 4) = 3x(x + 2)(x - 2)$.`,
              t`(iii) $(x^2)^2 - 9^2 = (x^2 + 9)(x^2 - 9)$, and $x^2 - 9$ factorises again: $(x + 3)(x - 3)$.`,
            ],
            answer: t`(i) $(2x + 5y)(2x - 5y)$ (ii) $3x(x + 2)(x - 2)$ (iii) $(x^2 + 9)(x + 3)(x - 3)$`,
          },
          {
            type: "mistake",
            wrong: t`$x^4 - 16 = (x^2 + 4)(x^2 - 4)$, finished.`,
            right: t`Keep going: $x^2 - 4 = (x + 2)(x - 2)$, so $x^4 - 16 = (x^2 + 4)(x + 2)(x - 2)$. $x^2 + 4$ cannot be factorised further.`,
            why: "After one step the answer already looks like a product, so it feels complete. Always check every bracket again for a common factor or another difference of squares.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Factorise $9a^2 - 16$.`,
                options: [t`$(3a + 4)(3a - 4)$`, t`$(3a - 4)^2$`, t`$(9a + 4)(a - 4)$`, t`$(3a + 8)(3a - 2)$`],
                answer: 0,
                explain: t`$9a^2 = (3a)^2$ and $16 = 4^2$.`,
              },
              {
                kind: "truefalse",
                q: t`$ab - ac - b + c = (b - c)(a - 1)$`,
                answer: true,
                explain: t`$a(b - c) - 1(b - c) = (b - c)(a - 1)$.`,
                difficulty: 2,
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which method fits best first?",
              groups: ["Common factor", "Grouping", "Difference of squares"],
              items: [
                { text: t`$5x^2 - 10x$`, group: 0, hint: t`Both terms contain $5x$.` },
                { text: t`$x^2 - 49$`, group: 2, hint: t`$49 = 7^2$.` },
                { text: t`$ab + 2a + 3b + 6$`, group: 1, hint: t`$a(b + 2) + 3(b + 2)$.` },
                { text: t`$16 - y^2$`, group: 2, hint: t`$4^2 - y^2$.` },
                { text: t`$7p^2q + 14pq^2$`, group: 0, hint: t`The HCF is $7pq$.` },
                { text: t`$x^3 + x^2 + x + 1$`, group: 1, hint: t`$x^2(x + 1) + 1(x + 1)$.` },
                { text: t`$(a + b)^2 - c^2$`, group: 2, hint: t`A square minus a square: $(a + b + c)(a + b - c)$.` },
              ],
              explain: "Two terms that are both perfect squares with a minus between them: difference of squares. Four terms with no common factor: try grouping.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Examiners expect **complete** factorisation. Take out the common factor first (it makes the rest easier), and check the answer by expanding. A sum of two squares such as $x^2 + 9$ has **no** real factors; do not write $(x + 3)(x + 3)$.`,
          },
          {
            type: "keypoints",
            items: [
              "Always take out the HCF of the terms first.",
              "Grouping works when each pair gives the same bracket.",
              t`$a^2 - b^2 = (a + b)(a - b)$.`,
              "Factorise completely: check every bracket again.",
            ],
          },
        ],
        flashcards: [
          { front: "Factorisation", back: "Writing an expression as a product of its factors." },
          { front: "First step in any factorisation", back: "Take out the common factor (HCF of the terms)." },
          { front: t`$a^2 - b^2$`, back: t`$(a + b)(a - b)$` },
          { front: t`$ax + ay + bx + by$`, back: t`$(a + b)(x + y)$ by grouping` },
          { front: t`Can $x^2 + 9$ be factorised?`, back: "Not into real linear factors; a sum of two squares does not factorise this way." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Factorise $12a^2b - 18ab^2$ completely.`,
            options: [t`$6ab(2a - 3b)$`, t`$3ab(4a - 6b)$`, t`$6(2a^2b - 3ab^2)$`, t`$2ab(6a - 9b)$`],
            answer: 0,
            explain: t`The HCF of 12 and 18 is 6, and of $a^2b$ and $ab^2$ is $ab$. The other options leave a common factor inside the bracket.`,
          },
          {
            kind: "fill",
            q: t`$x^2 - 64 = (x + 8)(x - $ ___ $)$`,
            answer: ["8"],
            explain: t`$64 = 8^2$.`,
          },
          {
            kind: "truefalse",
            q: t`$x^2 + 25$ can be factorised as $(x + 5)(x - 5)$.`,
            answer: false,
            explain: t`$(x + 5)(x - 5) = x^2 - 25$, not $x^2 + 25$.`,
          },
          {
            kind: "mcq",
            q: t`Factorise $(a + b)^2 - (a - b)^2$.`,
            options: [t`$4ab$`, t`$2ab$`, t`$2b^2$`, "0"],
            answer: 0,
            explain: t`$[(a + b) + (a - b)][(a + b) - (a - b)] = (2a)(2b) = 4ab$.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`Select all the factors of $x^4 - 1$.`,
            options: [t`$x^2 + 1$`, t`$x + 1$`, t`$x - 1$`, t`$x^2 + 2$`],
            answers: [0, 1, 2],
            explain: t`$x^4 - 1 = (x^2 + 1)(x^2 - 1) = (x^2 + 1)(x + 1)(x - 1)$.`,
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: t`Use $a^2 - b^2$ to find $53^2 - 47^2$.`,
            answer: 600,
            explain: t`$(53 + 47)(53 - 47) = 100 \times 6 = 600$.`,
          },
          {
            kind: "order",
            q: t`Put the steps to factorise $2x^3 - 8x$ in order.`,
            items: [
              t`Take out the common factor: $2x(x^2 - 4)$`,
              t`Spot a difference of squares: $x^2 - 2^2$`,
              t`Write $2x(x + 2)(x - 2)$`,
              "Check by expanding",
            ],
            explain: "Common factor first, then the difference of squares, then check.",
          },
        ],
      },
      /* ---------------------------------------------------------------- */
      {
        slug: "c9-factor-trinomials-cubes",
        title: "Quadratic Trinomials and Sum or Difference of Cubes",
        summary: "Splitting the middle term of ax² + bx + c, factorising a³ ± b³, and (for NCERT) a³ + b³ + c³ − 3abc.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: t`A **quadratic trinomial** looks like $ax^2 + bx + c$. To factorise it by **splitting the middle term**, find two numbers $p$ and $q$ with $p + q = b$ and $pq = ac$. Write $bx$ as $px + qx$, then group.`,
          },
          {
            type: "example",
            title: "Splitting the middle term",
            problem: t`Factorise $6x^2 + 5x - 6$.`,
            steps: [
              t`$ac = 6 \times (-6) = -36$ and $b = 5$. We need $p + q = 5$, $pq = -36$: $9$ and $-4$.`,
              t`$6x^2 + 9x - 4x - 6$.`,
              t`Group: $3x(2x + 3) - 2(2x + 3)$.`,
            ],
            answer: t`$(2x + 3)(3x - 2)$`,
          },
          {
            type: "table",
            headers: ["Sign of b", "Sign of c (or ac)", "The two numbers p, q"],
            rows: [
              ["+", "+", "both positive"],
              ["−", "+", "both negative"],
              ["+ or −", "−", "opposite signs; the bigger one takes the sign of b"],
            ],
          },
          {
            type: "mistake",
            wrong: t`For $2x^2 + 7x + 3$, look for two numbers with sum 7 and product 3.`,
            right: t`Use product $ac = 2 \times 3 = 6$: the numbers are 6 and 1. $2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (x + 3)(2x + 1)$.`,
            why: t`When $a = 1$ the product really is $c$, so students carry that habit over. With $a \neq 1$ the product must be $ac$, or the grouping step will not give a common bracket.`,
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: t`Factorise $x^2 + x - 12$.`,
                options: [t`$(x + 4)(x - 3)$`, t`$(x - 4)(x + 3)$`, t`$(x + 6)(x - 2)$`, t`$(x + 12)(x - 1)$`],
                answer: 0,
                explain: t`$4 \times (-3) = -12$ and $4 + (-3) = 1$. $(x - 4)(x + 3)$ gives $-x$ in the middle.`,
              },
            ],
          },
          {
            type: "formula",
            tex: t`a^3 + b^3 = (a + b)(a^2 - ab + b^2) \qquad a^3 - b^3 = (a - b)(a^2 + ab + b^2)`,
            caption: "Sum and difference of two cubes.",
          },
          {
            type: "example",
            title: "Sum and difference of cubes",
            problem: t`Factorise (i) $8x^3 + 27$ (ii) $27a^3 - 64b^3$.`,
            steps: [
              t`(i) $8x^3 + 27 = (2x)^3 + 3^3$. With $a = 2x$, $b = 3$: $(2x + 3)(4x^2 - 6x + 9)$.`,
              t`(ii) $27a^3 - 64b^3 = (3a)^3 - (4b)^3 = (3a - 4b)(9a^2 + 12ab + 16b^2)$.`,
            ],
            answer: t`(i) $(2x + 3)(4x^2 - 6x + 9)$ (ii) $(3a - 4b)(9a^2 + 12ab + 16b^2)$`,
          },
          {
            type: "callout",
            tone: "tip",
            title: "Remember the signs: SOAP",
            md: t`In $a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$ the first sign is the **S**ame as in the question, the next is **O**pposite, and the last is **A**lways **P**ositive.`,
          },
          {
            type: "example",
            title: "NCERT extra: a³ + b³ + c³ − 3abc",
            problem: t`Factorise $8x^3 + y^3 + 27z^3 - 18xyz$.`,
            steps: [
              t`Write it as $a^3 + b^3 + c^3 - 3abc$ with $a = 2x$, $b = y$, $c = 3z$. Check: $3abc = 3(2x)(y)(3z) = 18xyz$.`,
              t`Use $(a + b + c)(a^2 + b^2 + c^2 - ab - bc - ca)$.`,
            ],
            answer: t`$(2x + y + 3z)(4x^2 + y^2 + 9z^2 - 2xy - 3yz - 6zx)$`,
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each expression with its factors.",
              pairs: [
                [t`$x^2 - 7x + 12$`, t`$(x - 3)(x - 4)$`],
                [t`$x^2 + 7x + 12$`, t`$(x + 3)(x + 4)$`],
                [t`$x^2 - x - 12$`, t`$(x - 4)(x + 3)$`],
                [t`$x^3 - 27$`, t`$(x - 3)(x^2 + 3x + 9)$`],
                [t`$x^3 + 27$`, t`$(x + 3)(x^2 - 3x + 9)$`],
              ],
              explain: "Check the constant term and the middle term by multiplying back. For cubes, use SOAP for the signs.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: t`Show the split clearly, e.g. "$5x = 9x - 4x$", before grouping; the split line carries a mark. The quadratic part $a^2 - ab + b^2$ of a sum of cubes does not factorise further, so stop there. **ICSE** lists $a^3 \pm b^3$ and splitting the middle term in *Factorisation*; **NCERT** adds the $a^3 + b^3 + c^3 - 3abc$ form.`,
          },
          {
            type: "keypoints",
            items: [
              t`Split $bx$ into $px + qx$ with $p + q = b$ and $pq = ac$.`,
              t`$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$.`,
              t`$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$.`,
              "Check by multiplying the factors back.",
            ],
          },
        ],
        flashcards: [
          { front: t`Splitting the middle term of $ax^2 + bx + c$`, back: t`Find $p, q$ with $p + q = b$ and $pq = ac$.` },
          { front: t`$a^3 + b^3$`, back: t`$(a + b)(a^2 - ab + b^2)$` },
          { front: t`$a^3 - b^3$`, back: t`$(a - b)(a^2 + ab + b^2)$` },
          { front: "SOAP", back: "Same, Opposite, Always Positive: the signs in the cube factorisations." },
          { front: t`$x^2 - 5x + 6$`, back: t`$(x - 2)(x - 3)$` },
        ],
        quiz: [
          {
            kind: "mcq",
            q: t`Factorise $2x^2 - 7x + 3$.`,
            options: [t`$(2x - 1)(x - 3)$`, t`$(2x + 1)(x + 3)$`, t`$(2x - 3)(x - 1)$`, t`$(2x + 1)(x - 3)$`],
            answer: 0,
            explain: t`$ac = 6$, $b = -7$: numbers $-6$ and $-1$. $2x^2 - 6x - x + 3 = 2x(x - 3) - 1(x - 3)$. $(2x - 3)(x - 1)$ gives $-5x$.`,
          },
          {
            kind: "fill",
            q: t`$x^3 - 8 = (x - 2)(x^2 + 2x + $ ___ $)$`,
            answer: ["4"],
            explain: t`$b = 2$, so $b^2 = 4$.`,
          },
          {
            kind: "truefalse",
            q: t`$a^3 + b^3 = (a + b)(a^2 + ab + b^2)$`,
            answer: false,
            explain: t`The middle sign is minus: $(a + b)(a^2 - ab + b^2)$.`,
          },
          {
            kind: "numeric",
            q: t`To split the middle term of $3x^2 + 10x + 8$, you need two numbers with sum 10 and product what?`,
            answer: 24,
            explain: t`$ac = 3 \times 8 = 24$. The numbers are 6 and 4, giving $(3x + 4)(x + 2)$.`,
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: t`Factorise $125 - x^3$.`,
            options: [t`$(5 - x)(25 + 5x + x^2)$`, t`$(5 - x)(25 - 5x + x^2)$`, t`$(5 + x)(25 - 5x + x^2)$`, t`$(5 - x)^3$`],
            answer: 0,
            explain: t`$5^3 - x^3 = (5 - x)(5^2 + 5x + x^2)$. For a difference, the middle sign of the second factor is plus.`,
            difficulty: 2,
          },
          {
            kind: "multi",
            q: t`Select all the factors of $x^2 - x - 20$.`,
            options: [t`$x - 5$`, t`$x + 4$`, t`$x + 5$`, t`$x - 4$`],
            answers: [0, 1],
            explain: t`$-5 \times 4 = -20$ and $-5 + 4 = -1$, so $(x - 5)(x + 4)$.`,
          },
          {
            kind: "order",
            q: t`Put the steps to factorise $6x^2 + 5x - 6$ in order.`,
            items: [
              t`Find $ac = -36$`,
              t`Choose 9 and −4 (sum 5, product −36)`,
              t`Split: $6x^2 + 9x - 4x - 6$`,
              t`Group: $3x(2x + 3) - 2(2x + 3)$`,
              t`Answer: $(2x + 3)(3x - 2)$`,
            ],
            explain: "Product ac, find the pair, split, group, take out the common bracket.",
          },
        ],
      },
    ],
  },
];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Number Systems": "c9-number-systems",
  "9:Rational and Irrational Numbers": "c9-number-systems",
  "9:Polynomials": ["c9-polynomials", "c9-algebraic-identities", "c9-factorisation"],
  "9:Expansions": "c9-algebraic-identities",
  "9:Factorisation": "c9-factorisation",
};
