import type { Subject } from "@/content/types";

export const mathMiddle: Subject = {
  slug: "math-middle",
  title: "Middle School Maths",
  world: "school",
  icon: "🧭",
  colors: ["#2563eb", "#14b8a6"],
  tagline: "Numbers, shapes and patterns, mapped out one quest at a time.",
  description:
    "A Grade 6–8 expedition through integers, fractions and decimals, ratios and percentages, first steps in algebra, geometry and data handling. Concepts follow the CBSE/ICSE and Common Core sequence, but every idea is explained from scratch with worked examples, interactive widgets and quick checkpoints.",
  levels: ["Grade 6", "Grade 7", "Grade 8"],
  stages: ["middle"],
  topics: [
    /* ------------------------------------------------------------------ */
    {
      slug: "integers",
      title: "Integers",
      icon: "🌡️",
      description: "Numbers below zero: what they mean, how to compare them and how to calculate with them.",
      lessons: [
        {
          slug: "meet-the-integers",
          title: "Meet the Integers",
          summary: "Positive and negative whole numbers, the number line, comparing and absolute value.",
          minutes: 12,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "In Leh, a winter night can drop to **−20 °C**, while a summer afternoon in Delhi can hit **+45 °C**. To describe both on one scale we need numbers on *both sides* of zero. Welcome to the integers.",
            },
            {
              type: "text",
              md: "**Integers** are the whole numbers together with their negatives:\n\n$\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$\n\nZero is neither positive nor negative. Every positive integer has an **opposite** at the same distance on the other side of zero: the opposite of $7$ is $-7$.",
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: -10, max: 10 },
              caption: "Hop left and right. Left means smaller, right means bigger.",
            },
            {
              type: "heading",
              text: "Comparing integers",
            },
            {
              type: "list",
              items: [
                "On a number line, a number is **greater** than every number to its left.",
                "Any positive number is greater than any negative number: $2 > -100$.",
                "For two negatives, the one *closer to zero* is bigger: $-2 > -7$.",
              ],
            },
            {
              type: "example",
              title: "Coldest to warmest",
              problem: "One January morning the temperatures were: Leh $-20$ °C, Shimla $-3$ °C, Srinagar $-7$ °C, Delhi $12$ °C. Arrange them from coldest to warmest.",
              steps: [
                "The only positive number, $12$, is the warmest.",
                "Among the negatives, the one furthest from zero is the smallest: $-20$ is furthest, then $-7$, then $-3$.",
                "Check on a number line: $-20$ is furthest left, then $-7$, $-3$ and $12$.",
              ],
              answer: "$-20 < -7 < -3 < 12$: Leh, Srinagar, Shimla, Delhi.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Is each number greater or less than $-3$?",
                groups: ["Greater than −3", "Less than −3"],
                items: [
                  { text: "$-2$", group: 0, hint: "$-2$ is closer to zero, so it is to the right of $-3$." },
                  { text: "$0$", group: 0, hint: "Zero is to the right of every negative number." },
                  { text: "$1$", group: 0, hint: "Any positive number beats any negative number." },
                  { text: "$-4$", group: 1, hint: "$-4$ is one step further left than $-3$." },
                  { text: "$-7$", group: 1, hint: "7 is bigger than 3, but $-7$ is further from zero on the left." },
                  { text: "$-10$", group: 1, hint: "$-10$ is far to the left of $-3$." },
                ],
                explain: "On the number line, **right means greater**. A negative number with a bigger digit is further left, so it is **smaller**.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which is greater: $-3$ or $-8$?",
                  options: ["$-3$", "$-8$", "They are equal"],
                  answer: 0,
                  explain: "$-3$ sits to the right of $-8$ on the number line, so it is greater.",
                },
              ],
            },
            {
              type: "mistake",
              wrong: "$-7$ is greater than $-2$, because 7 is greater than 2.",
              right: "$-2 > -7$. For negative numbers, the one **closer to zero** is greater.",
              why: "We are used to bigger digits meaning bigger numbers. But a minus sign means \"below zero\": $-7$ °C is colder than $-2$ °C, and owing ₹7 is worse than owing ₹2.",
            },
            {
              type: "heading",
              text: "Absolute value",
            },
            {
              type: "text",
              md: "The **absolute value** of a number is its distance from zero, so it is never negative. We write it with bars: $|-9| = 9$ and $|9| = 9$.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "A submarine at $-150$ m and a hill at $+150$ m are the *same distance* from sea level: $|-150| = |150| = 150$. Banks show overdrafts as negative balances, and lift buttons show basements as B1, B2 (really $-1$, $-2$).",
            },
            {
              type: "keypoints",
              items: [
                "Integers: …, −2, −1, 0, 1, 2, …",
                "Further right on the number line = greater.",
                "Opposites are the same distance from 0 on opposite sides.",
                "Absolute value = distance from 0, always ≥ 0.",
              ],
            },
          ],
          flashcards: [
            { front: "What are integers?", back: "All whole numbers and their negatives: …, −2, −1, 0, 1, 2, …" },
            { front: "Is 0 positive or negative?", back: "Neither. It separates the positives from the negatives." },
            { front: "What is $|-14|$?", back: "$14$, because absolute value is distance from zero." },
            { front: "Which is bigger, −1 or −10?", back: "−1, because it is closer to zero (further right)." },
            { front: "What is $|0|$?", back: "$0$. Zero is no distance from itself." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Arrange from smallest to largest.",
              items: ["−6", "−2", "0", "3", "5"],
              explain: "Read the number line from left to right.",
            },
            {
              kind: "truefalse",
              q: "$|-9| = -9$",
              answer: false,
              explain: "Absolute value is a distance, so $|-9| = 9$.",
            },
            {
              kind: "fill",
              q: "The opposite of 12 is ___.",
              answer: ["-12", "−12"],
              explain: "Opposites sit at the same distance from zero: $12$ and $-12$.",
            },
            {
              kind: "mcq",
              q: "A diver is at −18 m and a bird is at +5 m. Who is further from sea level?",
              options: ["The bird", "The diver", "Both are equally far"],
              answer: 1,
              explain: "$|-18| = 18$ is more than $|5| = 5$.",
            },
            {
              kind: "mcq",
              q: "Which is the greatest: $-15$, $-4$, $-9$, $-20$?",
              options: ["$-15$", "$-4$", "$-9$", "$-20$"],
              answer: 1,
              explain: "$-4$ is closest to zero, so it is furthest right. Choosing $-20$ treats the negatives as if they were positive.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "Find $|-7| + |3|$.",
              answer: 10,
              explain: "$|-7| = 7$ and $|3| = 3$, so the sum is 10.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "integer-operations",
          title: "Calculating with Integers",
          summary: "Adding, subtracting, multiplying and dividing positive and negative numbers.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "At 6 a.m. it is $-4$ °C in Shimla. By noon the temperature rises $11$ degrees. What is it now? Integer arithmetic answers questions like this in seconds.",
            },
            {
              type: "heading",
              text: "Adding and subtracting",
            },
            {
              type: "list",
              items: [
                "**Same signs:** add the sizes and keep the sign. $(-5) + (-3) = -8$",
                "**Different signs:** subtract the smaller size from the larger, keep the sign of the larger. $(-8) + 5 = -3$",
                "**Subtracting** is the same as adding the opposite: $4 - (-6) = 4 + 6 = 10$",
              ],
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: -12, max: 12 },
              caption: "Try $-4 + 11$: start at −4 and hop 11 steps right.",
            },
            {
              type: "heading",
              text: "Multiplying and dividing",
            },
            {
              type: "table",
              headers: ["Signs", "Result", "Example"],
              rows: [
                ["(+) × (+)", "positive", "$3 \\times 4 = 12$"],
                ["(−) × (−)", "positive", "$(-3) \\times (-7) = 21$"],
                ["(+) × (−)", "negative", "$5 \\times (-2) = -10$"],
                ["(−) ÷ (+)", "negative", "$(-24) \\div 6 = -4$"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Why is negative × negative positive?",
              md: "Look at the pattern $(-3)\\times 2 = -6$, $(-3)\\times 1 = -3$, $(-3)\\times 0 = 0$. Each step adds 3, so the next one, $(-3)\\times(-1)$, must be $+3$.",
            },
            {
              type: "heading",
              text: "Worked example",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Evaluate $(-2) \\times 5 - (-12) \\div 4$.",
                "Multiply and divide first: $(-2)\\times 5 = -10$ and $(-12)\\div 4 = -3$.",
                "Now $-10 - (-3) = -10 + 3$.",
                "Answer: $-7$.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "The Shimla temperature: $-4 + 11 = ?$ (°C)",
                  answer: 7,
                  unit: "°C",
                  explain: "Start at −4 and move 11 right: you land on 7.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Golf scores use integers: −3 means three strokes *under* par. A player who scores −3, +1 and −2 over three rounds is at $-3 + 1 - 2 = -4$ overall.",
            },
            {
              type: "keypoints",
              items: [
                "Subtract = add the opposite.",
                "Same signs multiply/divide to positive; different signs give negative.",
                "Order of operations still applies: × and ÷ before + and −.",
              ],
            },
          ],
          flashcards: [
            { front: "$a - (-b)$ equals…", back: "$a + b$. Subtracting a negative adds." },
            { front: "Sign of (−) × (−)?", back: "Positive." },
            { front: "Sign of (−) ÷ (+)?", back: "Negative." },
            { front: "$(-8) + 5$", back: "$-3$ (8 − 5 = 3, keep the sign of the larger size)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "$-12 + 7 = ?$",
              answer: -5,
              explain: "Different signs: $12 - 7 = 5$, and the larger size (12) is negative.",
            },
            {
              kind: "numeric",
              q: "$(-5) \\times (-6) = ?$",
              answer: 30,
              explain: "Two negatives multiply to a positive.",
            },
            {
              kind: "mcq",
              q: "$(-36) \\div (-4) = ?$",
              options: ["$-9$", "$9$", "$-32$", "$40$"],
              answer: 1,
              explain: "Same signs give a positive: $36 \\div 4 = 9$.",
            },
            {
              kind: "truefalse",
              q: "Subtracting a negative number gives the same result as adding its opposite.",
              answer: true,
              explain: "For example $3 - (-2) = 3 + 2 = 5$.",
            },
            {
              kind: "numeric",
              q: "A lift starts at floor 3, goes down 5 floors, then up 2. Which floor is it on? (Use negatives for basements.)",
              answer: 0,
              explain: "$3 - 5 + 2 = 0$: the ground floor.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "fractions-decimals",
      title: "Fractions & Decimals",
      icon: "🍕",
      description: "Parts of a whole: equivalent fractions, fraction arithmetic and decimals.",
      lessons: [
        {
          slug: "understanding-fractions",
          title: "Understanding Fractions",
          summary: "What a fraction means, equivalent fractions, simplest form and comparing fractions.",
          minutes: 14,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "You and three friends order one pizza cut into 8 slices. You eat 3. What part of the pizza did you eat? That is the fraction $\\tfrac{3}{8}$.",
            },
            {
              type: "text",
              md: "In $\\tfrac{a}{b}$ the **denominator** $b$ says how many equal parts the whole is split into, and the **numerator** $a$ says how many of those parts we take.",
            },
            {
              type: "widget",
              widget: "fraction",
              props: { numerator: 3, denominator: 8 },
              caption: "Change the numerator and denominator and watch the shaded part.",
            },
            {
              type: "heading",
              text: "Equivalent fractions",
            },
            {
              type: "text",
              md: "Multiplying or dividing the top and bottom by the same non-zero number gives an **equivalent** fraction. It is the same amount, just cut differently.",
            },
            {
              type: "formula",
              tex: "\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}",
              caption: "Same amount of pizza, smaller slices.",
            },
            {
              type: "text",
              md: "A fraction is in **simplest form** when the numerator and denominator have no common factor except 1. Divide both by their HCF: $\\tfrac{18}{24} = \\tfrac{18 \\div 6}{24 \\div 6} = \\tfrac{3}{4}$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Fill the gap: $\\tfrac{2}{5} = \\tfrac{?}{20}$",
                  answer: 8,
                  explain: "$5 \\times 4 = 20$, so multiply the top by 4 too: $2 \\times 4 = 8$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Comparing fractions",
            },
            {
              type: "list",
              items: [
                "**Same denominator:** the bigger numerator wins. $\\tfrac{5}{9} > \\tfrac{2}{9}$",
                "**Same numerator:** the *smaller* denominator wins (bigger slices). $\\tfrac{3}{7} > \\tfrac{3}{8}$",
                "**Otherwise:** rewrite both with a common denominator (the LCM). $\\tfrac{3}{4} = \\tfrac{9}{12}$ and $\\tfrac{2}{3} = \\tfrac{8}{12}$, so $\\tfrac{3}{4} > \\tfrac{2}{3}$.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Music uses fractions everywhere: a half note lasts $\\tfrac{1}{2}$ of a whole note, a quarter note $\\tfrac{1}{4}$. Two quarter notes fill the same time as one half note because $\\tfrac{2}{4} = \\tfrac{1}{2}$.",
            },
            {
              type: "keypoints",
              items: [
                "Denominator = number of equal parts; numerator = parts taken.",
                "Equivalent fractions: multiply/divide top and bottom by the same number.",
                "Simplest form: divide by the HCF.",
                "Compare using a common denominator.",
              ],
            },
          ],
          flashcards: [
            { front: "Numerator", back: "The top number: how many parts are taken." },
            { front: "Denominator", back: "The bottom number: how many equal parts make the whole." },
            { front: "Simplify $\\tfrac{12}{16}$", back: "$\\tfrac{3}{4}$ (divide both by 4)." },
            { front: "How do you compare $\\tfrac{3}{5}$ and $\\tfrac{2}{3}$?", back: "Use denominator 15: $\\tfrac{9}{15} < \\tfrac{10}{15}$, so $\\tfrac{2}{3}$ is bigger." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is $\\tfrac{18}{24}$ in simplest form?",
              options: ["$\\tfrac{9}{12}$", "$\\tfrac{3}{4}$", "$\\tfrac{6}{8}$", "$\\tfrac{2}{3}$"],
              answer: 1,
              explain: "The HCF of 18 and 24 is 6: $18 \\div 6 = 3$, $24 \\div 6 = 4$.",
            },
            {
              kind: "multi",
              q: "Which fractions are equivalent to $\\tfrac{1}{2}$?",
              options: ["$\\tfrac{4}{8}$", "$\\tfrac{3}{5}$", "$\\tfrac{7}{14}$", "$\\tfrac{10}{20}$"],
              answers: [0, 2, 3],
              explain: "In each correct one the denominator is exactly double the numerator.",
            },
            {
              kind: "truefalse",
              q: "$\\tfrac{3}{7}$ is greater than $\\tfrac{3}{8}$.",
              answer: true,
              explain: "Same numerator, and sevenths are bigger slices than eighths.",
            },
            {
              kind: "order",
              q: "Arrange from smallest to largest.",
              items: ["1/4", "1/3", "1/2", "2/3"],
              explain: "With denominator 12 they are 3/12, 4/12, 6/12 and 8/12.",
            },
          ],
        },
        {
          slug: "fraction-operations",
          title: "Adding, Multiplying & Dividing Fractions",
          summary: "Common denominators, multiplying across, and dividing with the reciprocal.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A cake recipe needs $\\tfrac{3}{4}$ cup of sugar, but you want to bake only half the cake. How much sugar? To scale recipes, share pizzas and split bills, you need fraction arithmetic.",
            },
            {
              type: "heading",
              text: "Adding and subtracting",
            },
            {
              type: "text",
              md: "You can only add pieces of the same size, so first rewrite the fractions with a **common denominator**, then add the numerators.",
            },
            {
              type: "formula",
              tex: "\\frac{2}{3} + \\frac{1}{4} = \\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}",
            },
            {
              type: "callout",
              tone: "warning",
              title: "Classic mistake",
              md: "$\\tfrac{1}{2} + \\tfrac{1}{3}$ is **not** $\\tfrac{2}{5}$. Never add the denominators. The right answer is $\\tfrac{3}{6} + \\tfrac{2}{6} = \\tfrac{5}{6}$.",
            },
            {
              type: "heading",
              text: "Multiplying",
            },
            {
              type: "text",
              md: "Multiply top by top and bottom by bottom, then simplify. The word **“of”** means multiply: $\\tfrac{1}{2}$ of $\\tfrac{3}{4}$ cup $= \\tfrac{1}{2} \\times \\tfrac{3}{4} = \\tfrac{3}{8}$ cup.",
            },
            {
              type: "formula",
              tex: "\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}",
            },
            {
              type: "heading",
              text: "Dividing",
            },
            {
              type: "text",
              md: "To divide by a fraction, multiply by its **reciprocal** (flip it upside down).",
            },
            {
              type: "formula",
              tex: "\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}",
              caption: "“Keep, change, flip.”",
            },
            {
              type: "heading",
              text: "Worked example: mixed numbers",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Find $2\\tfrac{1}{2} \\times 1\\tfrac{1}{3}$.",
                "Convert to improper fractions: $2\\tfrac{1}{2} = \\tfrac{5}{2}$ and $1\\tfrac{1}{3} = \\tfrac{4}{3}$.",
                "Multiply: $\\tfrac{5}{2} \\times \\tfrac{4}{3} = \\tfrac{20}{6}$.",
                "Simplify: $\\tfrac{20}{6} = \\tfrac{10}{3} = 3\\tfrac{1}{3}$.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "$\\tfrac{5}{6} \\div \\tfrac{10}{3} = ?$",
                  options: ["$\\tfrac{1}{4}$", "$\\tfrac{25}{9}$", "$\\tfrac{50}{18}$", "$4$"],
                  answer: 0,
                  explain: "$\\tfrac{5}{6} \\times \\tfrac{3}{10} = \\tfrac{15}{60} = \\tfrac{1}{4}$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "A 3-metre ribbon is cut into pieces $\\tfrac{3}{4}$ m long. How many pieces? $3 \\div \\tfrac{3}{4} = 3 \\times \\tfrac{4}{3} = 4$ pieces.",
            },
            {
              type: "keypoints",
              items: [
                "Add/subtract: common denominator first.",
                "Multiply: across the top, across the bottom.",
                "Divide: multiply by the reciprocal.",
                "Convert mixed numbers to improper fractions before multiplying or dividing.",
              ],
            },
          ],
          flashcards: [
            { front: "Reciprocal of $\\tfrac{4}{7}$", back: "$\\tfrac{7}{4}$" },
            { front: "What does “of” mean in fractions?", back: "Multiply. $\\tfrac{1}{3}$ of 12 $= \\tfrac{1}{3} \\times 12 = 4$." },
            { front: "$\\tfrac{1}{2} + \\tfrac{1}{3}$", back: "$\\tfrac{5}{6}$" },
            { front: "Convert $3\\tfrac{2}{5}$ to an improper fraction", back: "$\\tfrac{17}{5}$ (3 × 5 + 2 = 17)." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "$\\tfrac{1}{2} + \\tfrac{1}{3} = ?$",
              options: ["$\\tfrac{2}{5}$", "$\\tfrac{5}{6}$", "$\\tfrac{1}{6}$", "$\\tfrac{2}{6}$"],
              answer: 1,
              explain: "$\\tfrac{3}{6} + \\tfrac{2}{6} = \\tfrac{5}{6}$.",
            },
            {
              kind: "numeric",
              q: "What is $\\tfrac{3}{5}$ of 40?",
              answer: 24,
              explain: "$40 \\div 5 = 8$, and $8 \\times 3 = 24$.",
            },
            {
              kind: "mcq",
              q: "$\\tfrac{3}{4} \\div \\tfrac{3}{8} = ?$",
              options: ["$\\tfrac{9}{32}$", "$\\tfrac{1}{2}$", "$2$", "$\\tfrac{3}{2}$"],
              answer: 2,
              explain: "$\\tfrac{3}{4} \\times \\tfrac{8}{3} = \\tfrac{24}{12} = 2$.",
            },
            {
              kind: "fill",
              q: "To divide by a fraction, multiply by its ___.",
              answer: ["reciprocal", "inverse", "multiplicative inverse"],
              explain: "Flip the second fraction and multiply.",
            },
            {
              kind: "truefalse",
              q: "$\\tfrac{2}{3} \\times \\tfrac{3}{2} = 1$",
              answer: true,
              explain: "A number times its reciprocal is always 1.",
            },
          ],
        },
        {
          slug: "decimals",
          title: "Decimals",
          summary: "Place value after the point, converting fractions to decimals, and decimal arithmetic.",
          minutes: 14,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "In a 100 m sprint, the gold and silver medals can be split by **0.01 seconds**. Decimals let us measure finer than whole numbers allow.",
            },
            {
              type: "heading",
              text: "Place value",
            },
            {
              type: "table",
              headers: ["Tens", "Ones", ".", "Tenths", "Hundredths", "Thousandths"],
              rows: [["4", "7", ".", "3", "0", "5"]],
            },
            {
              type: "text",
              md: "So $47.305 = 40 + 7 + \\tfrac{3}{10} + \\tfrac{0}{100} + \\tfrac{5}{1000}$.",
            },
            {
              type: "heading",
              text: "Fractions ↔ decimals",
            },
            {
              type: "list",
              items: [
                "**Fraction → decimal:** divide the numerator by the denominator. $\\tfrac{3}{8} = 3 \\div 8 = 0.375$",
                "**Decimal → fraction:** write over a power of 10 and simplify. $0.25 = \\tfrac{25}{100} = \\tfrac{1}{4}$",
                "Some fractions **recur** forever: $\\tfrac{1}{3} = 0.333\\ldots = 0.\\overline{3}$",
              ],
            },
            {
              type: "widget",
              widget: "fraction",
              props: { numerator: 1, denominator: 4 },
              caption: "One quarter is 0.25: twenty-five hundredths of the bar.",
            },
            {
              type: "activity",
              activity: {
                kind: "match",
                prompt: "Match each fraction to its decimal.",
                pairs: [
                  ["$\\tfrac{1}{2}$", "$0.5$"],
                  ["$\\tfrac{1}{4}$", "$0.25$"],
                  ["$\\tfrac{3}{4}$", "$0.75$"],
                  ["$\\tfrac{1}{5}$", "$0.2$"],
                  ["$\\tfrac{3}{8}$", "$0.375$"],
                  ["$\\tfrac{1}{3}$", "$0.\\overline{3}$"],
                ],
                explain: "Divide the numerator by the denominator. Most of these stop, but $\\tfrac{1}{3}$ gives $0.333\\ldots$, a **recurring decimal**.",
              },
            },
            {
              type: "heading",
              text: "Calculating with decimals",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "**Add/subtract:** line up the decimal points. $2.7 + 0.85 = 2.70 + 0.85 = 3.55$",
                "**Multiply:** ignore the points, multiply, then put back as many decimal places as the two numbers have in total. $0.6 \\times 0.4$: $6 \\times 4 = 24$, two places → $0.24$.",
                "**Divide:** shift both points right until the divisor is whole. $4.5 \\div 0.15 = 450 \\div 15 = 30$.",
              ],
            },
            {
              type: "example",
              title: "Shopping with decimals",
              problem: "Riya buys 2.5 kg of tomatoes at ₹36.40 per kg. How much does she pay?",
              steps: [
                "Cost = $2.5 \\times 36.40$. Drop the zero at the end: $36.40 = 36.4$.",
                "Ignore the points and multiply: $25 \\times 364 = 9100$.",
                "Decimal places: $2.5$ has 1 and $36.4$ has 1, so 2 in total: $91.00$.",
                "Sense check: $2.5 \\times 36$ is about $90$. ✓",
              ],
              answer: "She pays ₹91.00.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "$1.2 \\times 0.3 = ?$",
                  answer: 0.36,
                  tolerance: 0.001,
                  explain: "$12 \\times 3 = 36$ with two decimal places in total → $0.36$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Prices are decimals: three notebooks at ₹24.50 each cost $3 \\times 24.50 =$ ₹73.50. Fuel pumps show litres to two or three decimal places.",
            },
            {
              type: "mistake",
              wrong: "$0.305$ is bigger than $0.35$, because 305 is bigger than 35.",
              right: "$0.305 < 0.35$. Compare place by place from the left: both have 3 tenths, but $0.35$ has 5 hundredths and $0.305$ has 0.",
              why: "With whole numbers, more digits means a bigger number. After the decimal point that rule fails: write both with the same number of places ($0.305$ and $0.350$) and the answer is clear.",
            },
            {
              type: "keypoints",
              items: [
                "Each place to the right is 10 times smaller.",
                "Line up the points to add or subtract.",
                "Count decimal places to multiply.",
                "Make the divisor whole to divide.",
              ],
            },
          ],
          flashcards: [
            { front: "$\\tfrac{3}{8}$ as a decimal", back: "$0.375$" },
            { front: "$0.6$ as a fraction", back: "$\\tfrac{6}{10} = \\tfrac{3}{5}$" },
            { front: "What does $0.\\overline{6}$ mean?", back: "0.666…, the 6 repeats forever. It equals $\\tfrac{2}{3}$." },
            { front: "How do you multiply decimals?", back: "Multiply as whole numbers, then place the point using the total number of decimal places." },
            { front: "Which is bigger, $0.305$ or $0.35$?", back: "$0.35$ (= $0.350$). More digits does not mean bigger." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "$2.7 + 0.85 = ?$",
              answer: 3.55,
              tolerance: 0.001,
              explain: "Line up the points: $2.70 + 0.85 = 3.55$.",
            },
            {
              kind: "mcq",
              q: "Which fraction equals $0.25$?",
              options: ["$\\tfrac{1}{25}$", "$\\tfrac{2}{5}$", "$\\tfrac{1}{4}$", "$\\tfrac{25}{10}$"],
              answer: 2,
              explain: "$0.25 = \\tfrac{25}{100} = \\tfrac{1}{4}$.",
            },
            {
              kind: "order",
              q: "Arrange from smallest to largest.",
              items: ["0.09", "0.3", "0.305", "0.35"],
              explain: "Compare tenths first, then hundredths: 0.090, 0.300, 0.305, 0.350.",
            },
            {
              kind: "numeric",
              q: "$4.5 \\div 0.15 = ?$",
              answer: 30,
              explain: "Multiply both by 100: $450 \\div 15 = 30$.",
              difficulty: 2,
            },
            {
              kind: "truefalse",
              q: "$\\tfrac{1}{3}$ written as a decimal never ends.",
              answer: true,
              explain: "$1 \\div 3 = 0.333\\ldots$, a recurring decimal.",
            },
            {
              kind: "mcq",
              q: "Which is the greatest?",
              options: ["$0.68$", "$0.7$", "$0.685$", "$0.07$"],
              answer: 1,
              explain: "Compare tenths first: $0.7$ has 7 tenths, the others have 6 or 0. Picking $0.685$ because it has the most digits is the common trap.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "ratio-percent",
      title: "Ratio, Proportion & Percentages",
      icon: "⚖️",
      description: "Comparing quantities, scaling up and down, and the everyday maths of percentages.",
      lessons: [
        {
          slug: "ratio-and-proportion",
          title: "Ratio & Proportion",
          summary: "Writing and simplifying ratios, sharing in a ratio, proportions and the unitary method.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Lemonade tastes right with 1 part juice to 4 parts water. Make a giant jug and you must keep that same **ratio**, or it tastes wrong. Ratios are how we keep things in balance as they grow.",
            },
            {
              type: "text",
              md: "A **ratio** $a : b$ compares two quantities of the same kind. Like fractions, ratios can be simplified by dividing both parts by their HCF: $24 : 36 = 2 : 3$. Order matters: $2 : 3$ is not the same as $3 : 2$.",
            },
            {
              type: "heading",
              text: "Sharing in a ratio",
            },
            {
              type: "example",
              title: "Sharing in a ratio",
              problem: "Share ₹600 between Asha and Ben in the ratio $2 : 3$.",
              steps: [
                "Total parts: $2 + 3 = 5$.",
                "One part: $600 \\div 5 =$ ₹120.",
                "Asha gets $2 \\times 120 =$ ₹240, Ben gets $3 \\times 120 =$ ₹360.",
                "Check: $240 + 360 = 600$ ✓",
              ],
              answer: "Asha ₹240, Ben ₹360.",
            },
            {
              type: "mistake",
              wrong: "The ratio of 50 paise to ₹2 is $50 : 2 = 25 : 1$.",
              right: "First write both in the **same unit**: ₹2 = 200 paise, so the ratio is $50 : 200 = 1 : 4$.",
              why: "The numbers 50 and 2 are right there, so it is tempting to use them. But a ratio compares quantities of the same kind. 50 paise is actually much **less** than ₹2, and $25 : 1$ says the opposite.",
            },
            {
              type: "heading",
              text: "Proportion",
            },
            {
              type: "text",
              md: "Two ratios that are equal form a **proportion**. Cross-multiplying gives a quick test and a way to find a missing value:",
            },
            {
              type: "formula",
              tex: "a : b = c : d \\iff \\frac{a}{b} = \\frac{c}{d} \\iff ad = bc",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Cross-multiply. Are the two ratios in proportion?",
                groups: ["In proportion", "Not in proportion"],
                items: [
                  { text: "$2 : 3$ and $8 : 12$", group: 0, hint: "$2 \\times 12 = 24$ and $3 \\times 8 = 24$." },
                  { text: "$3 : 5$ and $9 : 15$", group: 0, hint: "$3 \\times 15 = 45$ and $5 \\times 9 = 45$." },
                  { text: "$4 : 6$ and $10 : 15$", group: 0, hint: "$4 \\times 15 = 60$ and $6 \\times 10 = 60$." },
                  { text: "$2 : 3$ and $3 : 2$", group: 1, hint: "$2 \\times 2 = 4$ but $3 \\times 3 = 9$. Order matters." },
                  { text: "$1 : 4$ and $4 : 8$", group: 1, hint: "$1 \\times 8 = 8$ but $4 \\times 4 = 16$." },
                  { text: "$5 : 7$ and $7 : 9$", group: 1, hint: "Adding 2 to both parts does not keep the ratio: $45 \\neq 49$." },
                ],
                explain: "Two ratios are in **proportion** when the cross products are equal ($ad = bc$). Multiplying both parts by the same number keeps the ratio; adding the same number does not.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Find $x$ if $3 : 4 = x : 20$.",
                  answer: 15,
                  explain: "$4x = 3 \\times 20 = 60$, so $x = 15$.",
                },
              ],
            },
            {
              type: "heading",
              text: "The unitary method",
            },
            {
              type: "text",
              md: "Find the value of **one** unit first, then scale. If 5 pens cost ₹60, one pen costs $60 \\div 5 =$ ₹12, so 8 pens cost $8 \\times 12 =$ ₹96.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Maps use ratio scales. On a $1 : 50\\,000$ map, 1 cm stands for 50 000 cm = 500 m. So 4 cm on the map is 2 km on the ground.",
            },
            {
              type: "keypoints",
              items: [
                "Ratio compares same-kind quantities; order matters.",
                "Simplify by dividing by the HCF.",
                "Sharing: total parts → value of one part → multiply.",
                "Proportion: $a:b = c:d$ means $ad = bc$.",
              ],
            },
          ],
          flashcards: [
            { front: "Simplify $15 : 25$", back: "$3 : 5$" },
            { front: "What is a proportion?", back: "A statement that two ratios are equal, e.g. $2 : 3 = 8 : 12$." },
            { front: "Unitary method", back: "Find the value of one unit, then multiply by the number of units needed." },
            { front: "Map scale 1 : 100 000 — what does 1 cm show?", back: "100 000 cm = 1 km." },
            { front: "What must you do before writing a ratio of two quantities?", back: "Put them in the same unit, e.g. ₹2 : 50 paise = 200 : 50 = 4 : 1." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Simplify $24 : 36$.",
              options: ["$4 : 6$", "$2 : 3$", "$12 : 18$", "$3 : 2$"],
              answer: 1,
              explain: "Divide both by the HCF, 12.",
            },
            {
              kind: "numeric",
              q: "45 sweets are shared in the ratio $4 : 5$. How many are in the larger share?",
              answer: 25,
              explain: "9 parts, so one part is 5. The larger share is $5 \\times 5 = 25$.",
            },
            {
              kind: "truefalse",
              q: "The ratio $2 : 3$ means the same as $3 : 2$.",
              answer: false,
              explain: "Order matters: 2 boys to 3 girls is not the same as 3 boys to 2 girls.",
            },
            {
              kind: "numeric",
              q: "On a map with scale $1 : 50\\,000$, two towns are 4 cm apart. How far apart are they really, in km?",
              answer: 2,
              unit: "km",
              explain: "$4 \\times 50\\,000 = 200\\,000$ cm $= 2000$ m $= 2$ km.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "The ratio of 50 paise to ₹2 is:",
              options: ["$25 : 1$", "$1 : 4$", "$50 : 2$", "$4 : 1$"],
              answer: 1,
              explain: "₹2 = 200 paise, so $50 : 200 = 1 : 4$. Using 50 and 2 directly mixes units.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "7 kg of rice costs ₹371. What do 4 kg cost (in ₹)?",
              answer: 212,
              unit: "₹",
              explain: "Unitary method: 1 kg costs $371 \\div 7 =$ ₹53, so 4 kg cost $4 \\times 53 =$ ₹212.",
            },
          ],
        },
        {
          slug: "percentages",
          title: "Percentages",
          summary: "Converting percentages, finding a percentage of an amount, increase/decrease, profit, loss and discount.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "“30% off!” shouts the shop sign. “Battery at 15%,” warns your phone. Percentages are everywhere because they make comparing easy: everything is measured out of 100.",
            },
            {
              type: "text",
              md: "**Per cent** means *per hundred*: $35\\% = \\tfrac{35}{100} = 0.35$. To turn a fraction into a percentage, multiply by 100: $\\tfrac{3}{5} \\times 100 = 60\\%$.",
            },
            {
              type: "heading",
              text: "Percentage of an amount",
            },
            {
              type: "text",
              md: "Change the percentage to a decimal and multiply: $15\\%$ of $240 = 0.15 \\times 240 = 36$.",
            },
            {
              type: "heading",
              text: "Percentage change",
            },
            {
              type: "formula",
              tex: "\\text{Percentage change} = \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%",
            },
            {
              type: "example",
              title: "Percentage increase",
              problem: "A bicycle's price goes from ₹800 to ₹920. Find the percentage increase.",
              steps: [
                "Change: $920 - 800 =$ ₹120.",
                "Divide by the **original** price: $\\tfrac{120}{800} = 0.15$.",
                "Multiply by 100: $0.15 \\times 100 = 15$.",
              ],
              answer: "A $15\\%$ increase.",
            },
            {
              type: "activity",
              activity: {
                kind: "match",
                prompt: "Match each change to its one-step multiplier.",
                pairs: [
                  ["Increase by 12%", "$\\times 1.12$"],
                  ["Add 5% GST", "$\\times 1.05$"],
                  ["Decrease by 25%", "$\\times 0.75$"],
                  ["20% discount", "$\\times 0.8$"],
                  ["Decrease by 5%", "$\\times 0.95$"],
                  ["Increase by 100%", "$\\times 2$"],
                ],
                explain: "An increase of $x\\%$ multiplies by $1 + \\tfrac{x}{100}$; a decrease of $x\\%$ multiplies by $1 - \\tfrac{x}{100}$. A 100% increase doubles the amount.",
              },
            },
            {
              type: "heading",
              text: "Profit, loss and discount",
            },
            {
              type: "table",
              headers: ["Idea", "Formula"],
              rows: [
                ["Profit", "SP − CP (when SP > CP)"],
                ["Profit %", "$\\tfrac{\\text{Profit}}{\\text{CP}} \\times 100$"],
                ["Loss %", "$\\tfrac{\\text{Loss}}{\\text{CP}} \\times 100$"],
                ["Discount", "Marked price − Selling price"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A jacket marked ₹1500 has a 20% discount. What do you pay?",
                  answer: 1200,
                  unit: "₹",
                  explain: "20% of 1500 is 300, so you pay $1500 - 300 = 1200$. (Or $0.8 \\times 1500$.)",
                },
              ],
            },
            {
              type: "mistake",
              wrong: "A 10% rise followed by a 10% fall brings the price back to where it started.",
              right: "It ends lower: ₹100 → ₹110 → ₹99. Overall, $1.1 \\times 0.9 = 0.99$, a 1% fall.",
              why: "\"Up 10, down 10\" sounds like it cancels. But each percentage is taken of a **different** amount: the fall is 10% of ₹110 (₹11), which is more than the rise of 10% of ₹100 (₹10).",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Restaurants add GST as a percentage: a ₹400 meal with 5% GST costs $400 \\times 1.05 =$ ₹420. Multiplying by $1.05$ adds 5% in one step.",
            },
            {
              type: "keypoints",
              items: [
                "Per cent = out of 100.",
                "x% of A = (x ÷ 100) × A.",
                "Percentage change always divides by the original value.",
                "Profit and loss percentages are based on the cost price.",
              ],
            },
          ],
          flashcards: [
            { front: "Write $\\tfrac{7}{20}$ as a percentage", back: "$35\\%$" },
            { front: "Multiplier for a 12% increase", back: "$1.12$" },
            { front: "Multiplier for a 25% decrease", back: "$0.75$" },
            { front: "Profit % formula", back: "$\\tfrac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100$" },
            { front: "Percentage change: divide by…", back: "The **original** value, never the new one." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is 35% of 80?",
              answer: 28,
              explain: "$0.35 \\times 80 = 28$.",
            },
            {
              kind: "mcq",
              q: "$\\tfrac{3}{5}$ as a percentage is…",
              options: ["35%", "53%", "60%", "30%"],
              answer: 2,
              explain: "$\\tfrac{3}{5} \\times 100 = 60$.",
            },
            {
              kind: "numeric",
              q: "A plant grows from 50 cm to 65 cm. What is the percentage increase?",
              answer: 30,
              unit: "%",
              explain: "$\\tfrac{15}{50} \\times 100 = 30\\%$.",
            },
            {
              kind: "truefalse",
              q: "Increasing a price by 10% and then decreasing the new price by 10% returns it to the original.",
              answer: false,
              explain: "$1.1 \\times 0.9 = 0.99$, so you end 1% below the start.",
            },
            {
              kind: "numeric",
              q: "A shopkeeper buys a toy for ₹400 and sells it for ₹500. What is the profit percentage?",
              answer: 25,
              unit: "%",
              explain: "Profit ₹100 on a cost of ₹400: $\\tfrac{100}{400} \\times 100 = 25\\%$.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "A phone's price falls from ₹500 to ₹400. The percentage decrease is:",
              options: ["25%", "20%", "100%", "80%"],
              answer: 1,
              explain: "Fall ₹100 divided by the **original** ₹500 gives 20%. Dividing by the new price (₹400) gives the wrong 25%.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "algebra-basics",
      title: "Algebra Basics",
      icon: "🧮",
      description: "Letters that stand for numbers: building expressions and solving linear equations.",
      lessons: [
        {
          slug: "algebraic-expressions",
          title: "Algebraic Expressions",
          summary: "Variables, terms, coefficients, like terms, substitution and expanding brackets.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A taxi charges ₹50 to start plus ₹12 per km. For 3 km you pay $50 + 12 \\times 3$; for 10 km, $50 + 12 \\times 10$. Instead of writing a new sum for every trip, write one rule: $50 + 12d$, where $d$ is the distance. That is algebra.",
            },
            {
              type: "heading",
              text: "The vocabulary",
            },
            {
              type: "table",
              headers: ["Word", "Meaning", "In $7x^2 - 4x + 9$"],
              rows: [
                ["Variable", "A letter standing for a number", "$x$"],
                ["Term", "A part separated by + or −", "$7x^2$, $-4x$, $9$"],
                ["Coefficient", "The number multiplying a variable", "$7$ and $-4$"],
                ["Constant", "A term with no variable", "$9$"],
              ],
            },
            {
              type: "heading",
              text: "Like terms",
            },
            {
              type: "text",
              md: "**Like terms** have exactly the same variable part, so they can be combined. $3x$ and $-x$ are like terms; $3x$ and $3x^2$ are not.",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Simplify $3x + 5y - x + 2y$.",
                "Group like terms: $(3x - x) + (5y + 2y)$.",
                "Combine: $2x + 7y$.",
              ],
            },
            {
              type: "heading",
              text: "Substitution",
            },
            {
              type: "text",
              md: "Replace each letter with its value, then follow the order of operations. If $a = 4$: $2a^2 - 3a = 2(16) - 12 = 20$.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "The taxi rule is $50 + 12d$. What is the fare for $d = 7$ km?",
                  answer: 134,
                  unit: "₹",
                  explain: "$50 + 12 \\times 7 = 50 + 84 = 134$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Expanding brackets",
            },
            {
              type: "formula",
              tex: "a(b + c) = ab + ac \\qquad 3(2x - 5) = 6x - 15",
              caption: "The distributive law: multiply everything inside by the outside term.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Spreadsheets are algebra in disguise. A cell formula like `=B2*12+50` is the expression $12d + 50$ with $d$ stored in cell B2.",
            },
            {
              type: "keypoints",
              items: [
                "Variables stand for numbers that can change.",
                "Only like terms can be added or subtracted.",
                "Substitute, then use the order of operations.",
                "Expand brackets by multiplying every term inside.",
              ],
            },
          ],
          flashcards: [
            { front: "Coefficient", back: "The number in front of a variable, e.g. 5 in $5y$." },
            { front: "Like terms", back: "Terms with identical variable parts, e.g. $4ab$ and $-ab$." },
            { front: "Expand $4(x + 3)$", back: "$4x + 12$" },
            { front: "Constant term", back: "A term with no variable, e.g. 9 in $2x + 9$." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What is the coefficient of $x$ in $7x^2 - 4x + 9$?",
              options: ["$7$", "$4$", "$-4$", "$9$"],
              answer: 2,
              explain: "The $x$ term is $-4x$, so its coefficient is $-4$ (the sign belongs to it).",
            },
            {
              kind: "numeric",
              q: "Find the value of $5p - 3$ when $p = 6$.",
              answer: 27,
              explain: "$5 \\times 6 - 3 = 30 - 3 = 27$.",
            },
            {
              kind: "mcq",
              q: "Simplify $4m + 3n - m + n$.",
              options: ["$3m + 4n$", "$5m + 4n$", "$7mn$", "$3m + 3n$"],
              answer: 0,
              explain: "$4m - m = 3m$ and $3n + n = 4n$.",
            },
            {
              kind: "truefalse",
              q: "$3x$ and $3x^2$ are like terms.",
              answer: false,
              explain: "The variable parts differ ($x$ vs $x^2$), so they cannot be combined.",
            },
            {
              kind: "fill",
              q: "In $8y + 5$, the number 5 is called the ___.",
              answer: ["constant", "constant term"],
              explain: "It has no variable attached, so it never changes.",
            },
          ],
        },
        {
          slug: "linear-equations",
          title: "Solving Linear Equations",
          summary: "The balance idea, inverse operations, brackets on both sides and word problems.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "I think of a number, multiply it by 3 and add 7. I get 22. What was my number? You can probably guess 5, but algebra gives a method that works even when guessing is hopeless.",
            },
            {
              type: "illustration",
              emoji: "⚖️",
              caption: "An equation is a balance: whatever you do to one side, do to the other.",
            },
            {
              type: "heading",
              text: "Undo with inverse operations",
            },
            {
              type: "example",
              title: "Two inverse steps",
              problem: "Solve $3x + 7 = 22$.",
              steps: [
                "Subtract 7 from both sides: $3x = 15$.",
                "Divide both sides by 3: $x = 5$.",
                "Check: $3(5) + 7 = 22$ ✓",
              ],
              answer: "$x = 5$.",
            },
            {
              type: "mistake",
              wrong: "$3x + 7 = 22$, so I move the 7 across: $3x = 22 + 7 = 29$.",
              right: "Subtract 7 from **both** sides: $3x = 22 - 7 = 15$. A term that moves across the $=$ sign changes its sign (**transposing**).",
              why: "\"Move it to the other side\" is a handy shortcut, but it hides the real step. You are undoing $+7$ on both sides of the balance, and the undo of adding is subtracting.",
            },
            {
              type: "heading",
              text: "Variables on both sides",
            },
            {
              type: "example",
              title: "Brackets and variables on both sides",
              problem: "Solve $5(x - 2) = 2x + 11$.",
              steps: [
                "Expand: $5x - 10 = 2x + 11$.",
                "Subtract $2x$ from both sides: $3x - 10 = 11$.",
                "Add 10: $3x = 21$, so $x = 7$.",
                "Check: $5(7 - 2) = 25$ and $2(7) + 11 = 25$ ✓",
              ],
              answer: "$x = 7$.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Substitute $x = 4$. Is it a solution?",
                groups: ["Yes, x = 4 works", "No, it does not"],
                items: [
                  { text: "$2x + 1 = 9$", group: 0, hint: "$2(4) + 1 = 9$ ✓" },
                  { text: "$3x - 5 = 7$", group: 0, hint: "$3(4) - 5 = 7$ ✓" },
                  { text: "$\\tfrac{x}{2} + 3 = 5$", group: 0, hint: "$4 \\div 2 + 3 = 5$ ✓" },
                  { text: "$4x + 2 = 14$", group: 1, hint: "$4(4) + 2 = 18$, not 14. The solution is $x = 3$." },
                  { text: "$2(x - 1) = 8$", group: 1, hint: "$2(4 - 1) = 6$, not 8. The solution is $x = 5$." },
                  { text: "$x + 4 = 0$", group: 1, hint: "$4 + 4 = 8$, not 0. The solution is $x = -4$." },
                ],
                explain: "A **solution** is a value that makes both sides equal. Substituting back is how you check any answer.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Solve $\\tfrac{x}{3} + 2 = 8$.",
                  answer: 18,
                  explain: "Subtract 2: $\\tfrac{x}{3} = 6$. Multiply by 3: $x = 18$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Word problems",
            },
            {
              type: "text",
              md: "Let a letter stand for the unknown, translate the words into an equation, solve, then answer in words.\n\n*The sum of two consecutive numbers is 63.* Let the numbers be $n$ and $n + 1$. Then $2n + 1 = 63$, so $n = 31$. The numbers are **31 and 32**.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "A phone plan costs ₹199 plus ₹2 per extra GB. Your bill is ₹245. Solving $199 + 2g = 245$ gives $g = 23$ extra GB used.",
            },
            {
              type: "keypoints",
              items: [
                "Keep the equation balanced: same operation on both sides.",
                "Undo + and − first, then × and ÷.",
                "Collect variables on one side, numbers on the other.",
                "Always check by substituting back.",
              ],
            },
          ],
          flashcards: [
            { front: "What is a linear equation?", back: "An equation where the variable has power 1, e.g. $2x + 3 = 11$." },
            { front: "Inverse of “add 7”", back: "Subtract 7." },
            { front: "Solve $2x = 18$", back: "$x = 9$" },
            { front: "How do you check a solution?", back: "Substitute it back into the original equation; both sides should match." },
            { front: "What happens to a term when it is transposed?", back: "It changes sign: $+7$ on one side becomes $-7$ on the other." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Solve $4x - 9 = 27$.",
              answer: 9,
              explain: "Add 9: $4x = 36$, so $x = 9$.",
            },
            {
              kind: "mcq",
              q: "Solve $2(y + 3) = y + 10$.",
              options: ["$y = 2$", "$y = 4$", "$y = 7$", "$y = 13$"],
              answer: 1,
              explain: "$2y + 6 = y + 10 \\Rightarrow y = 4$.",
            },
            {
              kind: "order",
              q: "Put the steps for solving $2x + 5 = 17$ in order.",
              items: ["Subtract 5 from both sides: 2x = 12", "Divide both sides by 2: x = 6", "Check: 2(6) + 5 = 17"],
              explain: "Undo the addition first, then the multiplication, then check.",
            },
            {
              kind: "numeric",
              q: "A father is 3 times as old as his son. Together their ages add to 48. How old is the son?",
              answer: 12,
              unit: "years",
              explain: "$s + 3s = 48 \\Rightarrow 4s = 48 \\Rightarrow s = 12$.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "Which step correctly follows from $5x - 3 = 12$?",
              options: ["$5x = 9$", "$5x = 15$", "$x - 3 = \\tfrac{12}{5}$", "$5x = -15$"],
              answer: 1,
              explain: "Add 3 to both sides: $5x = 15$. Getting $5x = 12 - 3 = 9$ forgets to change the sign of the transposed term.",
            },
            {
              kind: "numeric",
              q: "A rectangle's length is twice its breadth and its perimeter is 54 cm. Find the breadth.",
              answer: 9,
              unit: "cm",
              explain: "Let breadth $= b$, length $= 2b$. $2(2b + b) = 54 \\Rightarrow 6b = 54 \\Rightarrow b = 9$ cm.",
              difficulty: 2,
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------------ */
    {
      slug: "geometry-data",
      title: "Geometry & Data Handling",
      icon: "📐",
      description: "Angles and triangles, area and perimeter, and making sense of data.",
      lessons: [
        {
          slug: "angles-and-triangles",
          title: "Angles & Triangles",
          summary: "Angle types and pairs, parallel lines, the triangle angle sum and Pythagoras.",
          minutes: 18,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Snooker players, architects and skateboarders all live by angles. A ramp at the wrong angle is either boring or dangerous. Let's learn the rules angles always obey.",
            },
            {
              type: "table",
              headers: ["Angle type", "Size"],
              rows: [
                ["Acute", "less than 90°"],
                ["Right", "exactly 90°"],
                ["Obtuse", "between 90° and 180°"],
                ["Straight", "exactly 180°"],
                ["Reflex", "between 180° and 360°"],
              ],
            },
            {
              type: "heading",
              text: "Angle pairs",
            },
            {
              type: "list",
              items: [
                "**Complementary** angles add to 90°. **Supplementary** angles add to 180°.",
                "Angles on a straight line add to 180°; angles around a point add to 360°.",
                "**Vertically opposite** angles (made by two crossing lines) are equal.",
                "When a line crosses two **parallel** lines, corresponding angles are equal and alternate angles are equal.",
              ],
            },
            {
              type: "heading",
              text: "The triangle angle sum",
            },
            {
              type: "widget",
              widget: "triangle",
              caption: "Drag any vertex. The three angles change, but their total stays 180°.",
            },
            {
              type: "formula",
              tex: "\\angle A + \\angle B + \\angle C = 180^\\circ",
            },
            {
              type: "text",
              md: "An **exterior angle** of a triangle equals the sum of the two interior opposite angles. If the interior angles are 40° and 65°, the exterior angle at the third corner is $40^\\circ + 65^\\circ = 105^\\circ$.",
            },
            {
              type: "activity",
              activity: {
                kind: "match",
                prompt: "Match each description to the angle it gives.",
                pairs: [
                  ["Complement of 35°", "55°"],
                  ["Supplement of 35°", "145°"],
                  ["Vertically opposite to 35°", "35°"],
                  ["Third angle of a triangle with 35° and 100°", "45°"],
                  ["Exterior angle when the interior opposite angles are 35° and 60°", "95°"],
                ],
                explain: "**Complementary** means a total of 90°, **supplementary** a total of 180°. Vertically opposite angles are equal, a triangle's angles total 180°, and an exterior angle equals the two interior opposite angles added.",
              },
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Two angles of a triangle are 48° and 77°. Find the third.",
                  answer: 55,
                  unit: "°",
                  explain: "$180 - 48 - 77 = 55$.",
                },
              ],
            },
            {
              type: "heading",
              text: "Pythagoras' theorem",
            },
            {
              type: "formula",
              tex: "a^2 + b^2 = c^2",
              caption: "In a right triangle, c is the hypotenuse (the side opposite the right angle).",
            },
            {
              type: "example",
              title: "Ladder against a wall",
              problem: "A ladder reaches 8 m up a wall with its foot 6 m from the wall. How long is it?",
              steps: [
                "The wall and the ground meet at a right angle, so the ladder is the **hypotenuse** $c$.",
                "$c^2 = 6^2 + 8^2 = 36 + 64 = 100$.",
                "$c = \\sqrt{100} = 10$.",
              ],
              answer: "The ladder is 10 m long.",
            },
            {
              type: "mistake",
              wrong: "The hypotenuse is 13 cm and one side is 5 cm, so the other side is $\\sqrt{13^2 + 5^2} = \\sqrt{194}$ cm.",
              right: "When you know the hypotenuse, **subtract**: other side $= \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm.",
              why: "\"Square and add\" is the first thing learners memorise. But $a^2 + b^2 = c^2$ only adds the two **shorter** sides. A shorter side can never come out longer than the hypotenuse, and $\\sqrt{194} \\approx 13.9$ is longer.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "Builders check that a corner is square with the **3-4-5 rule**: mark 3 m along one wall and 4 m along the other. If the diagonal is exactly 5 m, the corner is 90°.",
            },
            {
              type: "keypoints",
              items: [
                "Complementary: 90°. Supplementary: 180°.",
                "Vertically opposite angles are equal.",
                "Triangle angles add to 180°.",
                "Exterior angle = sum of interior opposite angles.",
                "Right triangle: $a^2 + b^2 = c^2$.",
              ],
            },
          ],
          flashcards: [
            { front: "Supplementary angles", back: "Two angles that add up to 180°." },
            { front: "Complementary angles", back: "Two angles that add up to 90°." },
            { front: "Sum of angles in a triangle", back: "180°" },
            { front: "Exterior angle theorem", back: "An exterior angle equals the sum of the two interior opposite angles." },
            { front: "Pythagoras' theorem", back: "$a^2 + b^2 = c^2$, where $c$ is the hypotenuse." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the supplement of 65°?",
              answer: 115,
              unit: "°",
              explain: "$180 - 65 = 115$.",
            },
            {
              kind: "mcq",
              q: "Two interior angles of a triangle are 40° and 65°. What is the exterior angle at the third vertex?",
              options: ["75°", "105°", "115°", "140°"],
              answer: 1,
              explain: "Exterior angle = sum of the interior opposite angles = 105°.",
            },
            {
              kind: "truefalse",
              q: "A triangle can have two obtuse angles.",
              answer: false,
              explain: "Two angles over 90° already add to more than 180°.",
            },
            {
              kind: "multi",
              q: "Which sets could be the three angles of a triangle?",
              options: ["60°, 60°, 60°", "90°, 45°, 45°", "100°, 50°, 40°", "30°, 70°, 80°"],
              answers: [0, 1, 3],
              explain: "100 + 50 + 40 = 190°, which is too much. The others add to exactly 180°.",
            },
            {
              kind: "numeric",
              q: "A right triangle has legs 5 cm and 12 cm. How long is the hypotenuse?",
              answer: 13,
              unit: "cm",
              explain: "$\\sqrt{25 + 144} = \\sqrt{169} = 13$.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "A 13 m ladder reaches 12 m up a wall. How far is its foot from the wall?",
              options: ["5 m", "17.7 m", "25 m", "1 m"],
              answer: 0,
              explain: "The ladder is the hypotenuse: $\\sqrt{13^2 - 12^2} = \\sqrt{25} = 5$ m. Adding the squares (17.7 m) gives a side longer than the ladder.",
              difficulty: 2,
            },
          ],
        },
        {
          slug: "area-and-perimeter",
          title: "Area & Perimeter",
          summary: "Perimeter and area of rectangles, triangles, parallelograms, trapeziums and circles.",
          minutes: 16,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "You're fencing a vegetable garden and buying soil for it. The fence depends on the distance **around** it (perimeter); the soil depends on the space **inside** it (area). Mix them up and you buy the wrong thing.",
            },
            {
              type: "table",
              headers: ["Shape", "Perimeter", "Area"],
              rows: [
                ["Rectangle ($l \\times b$)", "$2(l + b)$", "$l \\times b$"],
                ["Square (side $s$)", "$4s$", "$s^2$"],
                ["Triangle", "sum of sides", "$\\tfrac{1}{2} \\times b \\times h$"],
                ["Parallelogram", "sum of sides", "$b \\times h$"],
                ["Trapezium (parallel sides $a, b$)", "sum of sides", "$\\tfrac{1}{2}(a + b)h$"],
                ["Circle (radius $r$)", "$2\\pi r$", "$\\pi r^2$"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              md: "In every area formula, the **height** is measured at right angles to the base, not along a slanted side.",
            },
            {
              type: "heading",
              text: "Worked examples",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "A garden is 12 m by 8 m. Perimeter $= 2(12 + 8) = 40$ m of fence. Area $= 12 \\times 8 = 96\\ \\text{m}^2$ of soil.",
                "A circular table has radius 7 cm. Using $\\pi \\approx \\tfrac{22}{7}$: circumference $= 2 \\times \\tfrac{22}{7} \\times 7 = 44$ cm.",
                "Its area $= \\tfrac{22}{7} \\times 7 \\times 7 = 154\\ \\text{cm}^2$.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A triangle has base 10 cm and height 6 cm. What is its area?",
                  answer: 30,
                  unit: "cm²",
                  explain: "$\\tfrac{1}{2} \\times 10 \\times 6 = 30$.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Painters price jobs by area. A wall 4 m by 3 m with a 1 m by 2 m door needs paint for $12 - 2 = 10\\ \\text{m}^2$. Subtracting holes is a standard trick.",
            },
            {
              type: "callout",
              tone: "warning",
              md: "Perimeter is in units (m, cm). Area is in **square** units (m², cm²). Leaving off the ² costs marks.",
            },
            {
              type: "keypoints",
              items: [
                "Perimeter = distance around; area = space inside.",
                "Triangle area is half of base × height.",
                "Circle: $C = 2\\pi r$, $A = \\pi r^2$.",
                "Area units are squared.",
              ],
            },
          ],
          flashcards: [
            { front: "Area of a trapezium", back: "$\\tfrac{1}{2}(a + b)h$, where $a$ and $b$ are the parallel sides." },
            { front: "Circumference of a circle", back: "$2\\pi r$ (or $\\pi d$)." },
            { front: "Area of a circle", back: "$\\pi r^2$" },
            { front: "Area of a parallelogram", back: "base × perpendicular height" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is the perimeter of a square with side 9 cm?",
              answer: 36,
              unit: "cm",
              explain: "$4 \\times 9 = 36$.",
            },
            {
              kind: "numeric",
              q: "Using $\\pi = \\tfrac{22}{7}$, find the area of a circle with radius 14 cm.",
              answer: 616,
              unit: "cm²",
              explain: "$\\tfrac{22}{7} \\times 14 \\times 14 = 22 \\times 2 \\times 14 = 616$.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "Which formula gives the area of a trapezium?",
              options: ["$a \\times b \\times h$", "$\\tfrac{1}{2}(a + b)h$", "$(a + b)h$", "$2(a + b)$"],
              answer: 1,
              explain: "Average the parallel sides, then multiply by the height.",
            },
            {
              kind: "truefalse",
              q: "Two rectangles with the same perimeter always have the same area.",
              answer: false,
              explain: "A 1×9 and a 5×5 rectangle both have perimeter 20, but areas 9 and 25.",
            },
          ],
        },
        {
          slug: "data-handling",
          title: "Data Handling",
          summary: "Mean, median, mode and range, plus reading bar graphs and pie charts.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Your cricket team's last five scores were 4, 7, 7, 9 and 13. Is the team improving? What is a “typical” score? Data handling turns lists of numbers into answers.",
            },
            {
              type: "heading",
              text: "Four key measures",
            },
            {
              type: "table",
              headers: ["Measure", "How to find it", "For 4, 7, 7, 9, 13"],
              rows: [
                ["Mean", "Add all values, divide by how many", "$40 \\div 5 = 8$"],
                ["Median", "Middle value when sorted", "$7$"],
                ["Mode", "Most frequent value", "$7$"],
                ["Range", "Largest − smallest", "$13 - 4 = 9$"],
              ],
            },
            {
              type: "formula",
              tex: "\\text{Mean} = \\frac{\\text{sum of values}}{\\text{number of values}}",
            },
            {
              type: "text",
              md: "If there is an **even** number of values, the median is the mean of the two middle ones. For 3, 4, 5, 7, 8, 9 the middle pair is 5 and 7, so the median is 6.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Find the mean of 6, 8, 10, 12, 14.",
                  answer: 10,
                  explain: "Sum is 50, and $50 \\div 5 = 10$.",
                },
              ],
            },
            {
              type: "mistake",
              wrong: "The median of 8, 2, 9, 4, 6 is 9, because 9 is in the middle.",
              right: "Sort first: 2, 4, 6, 8, 9. The middle value is **6**.",
              why: "\"Median\" means middle, so learners pick the middle of the list as it is written. But the median is the middle of the values **in order of size**; an unsorted list can put any value in the middle.",
            },
            {
              type: "heading",
              text: "Pie charts",
            },
            {
              type: "text",
              md: "A pie chart shows parts of a whole. Each slice's angle is its fraction of the total times 360°. If 25% of a class walks to school, that slice is $0.25 \\times 360^\\circ = 90^\\circ$.",
            },
            {
              type: "example",
              title: "Angles for a pie chart",
              problem: "In a class of 40 students, 10 walk to school, 18 come by bus and 12 cycle. Find the angle of each slice of a pie chart.",
              steps: [
                "Walk: $\\tfrac{10}{40} \\times 360^\\circ = 90^\\circ$.",
                "Bus: $\\tfrac{18}{40} \\times 360^\\circ = 162^\\circ$.",
                "Cycle: $\\tfrac{12}{40} \\times 360^\\circ = 108^\\circ$.",
                "Check: $90 + 162 + 108 = 360^\\circ$ ✓",
              ],
              answer: "Walk 90°, bus 162°, cycle 108°.",
            },
            {
              type: "callout",
              tone: "note",
              title: "Choosing a graph",
              md: "Use a **bar graph** to compare separate categories, a **line graph** to show change over time, and a **pie chart** to show how a whole is divided.",
            },
            {
              type: "activity",
              activity: {
                kind: "sort",
                prompt: "Which graph shows this data best?",
                groups: ["Bar graph", "Line graph", "Pie chart"],
                items: [
                  { text: "Number of students who like each sport", group: 0, hint: "Separate categories to compare side by side." },
                  { text: "Medals won by five states at a games meet", group: 0, hint: "Compare separate states." },
                  { text: "Bengaluru's temperature each month of a year", group: 1, hint: "Change over time." },
                  { text: "Your height on each birthday", group: 1, hint: "One quantity changing over time." },
                  { text: "How a family's monthly budget is spent", group: 2, hint: "Parts of one whole budget." },
                  { text: "Share of a farm's land under each crop", group: 2, hint: "Slices of one whole farm." },
                ],
                explain: "Ask what the data is about: separate categories → **bar graph**; change over time → **line graph**; parts of one whole → **pie chart**.",
              },
            },
            {
              type: "callout",
              tone: "fact",
              title: "Real life",
              md: "If one billionaire walks into a café, the *mean* wealth of the customers shoots up but the *median* hardly moves. That's why news reports often quote median income.",
            },
            {
              type: "keypoints",
              items: [
                "Mean = sum ÷ count.",
                "Median = middle of the sorted list.",
                "Mode = most common value.",
                "Range = max − min (measures spread).",
                "Pie slice angle = fraction × 360°.",
              ],
            },
          ],
          flashcards: [
            { front: "Median", back: "The middle value of the data when sorted in order." },
            { front: "Mode", back: "The value that appears most often." },
            { front: "Range", back: "Largest value minus smallest value." },
            { front: "Pie chart angle for 1/3 of the data", back: "$\\tfrac{1}{3} \\times 360^\\circ = 120^\\circ$" },
            { front: "Median of an even number of values", back: "The mean of the two middle values (after sorting)." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Find the median of 3, 9, 4, 7, 5, 8.",
              answer: 6,
              explain: "Sorted: 3, 4, 5, 7, 8, 9. The middle pair is 5 and 7, so the median is 6.",
              difficulty: 2,
            },
            {
              kind: "mcq",
              q: "What is the mode of 2, 3, 3, 5, 5, 5, 6?",
              options: ["3", "4", "5", "6"],
              answer: 2,
              explain: "5 appears three times, more than any other value.",
            },
            {
              kind: "numeric",
              q: "In a pie chart, what angle represents 25% of the data?",
              answer: 90,
              unit: "°",
              explain: "$0.25 \\times 360 = 90$.",
            },
            {
              kind: "truefalse",
              q: "The mean is always one of the values in the data set.",
              answer: false,
              explain: "The mean of 1 and 2 is 1.5, which is not in the data.",
            },
            {
              kind: "mcq",
              q: "What is the median of 8, 2, 9, 4, 6?",
              options: ["9", "6", "5.8", "4"],
              answer: 1,
              explain: "Sorted: 2, 4, 6, 8, 9, so the median is 6. 9 is just the middle of the unsorted list, and 5.8 is the mean.",
              difficulty: 2,
            },
            {
              kind: "numeric",
              q: "Out of 60 students, 20 chose cricket as their favourite sport. What angle shows cricket on a pie chart?",
              answer: 120,
              unit: "°",
              explain: "$\\tfrac{20}{60} \\times 360^\\circ = 120^\\circ$.",
            },
          ],
        },
      ],
    },
  ],
};
