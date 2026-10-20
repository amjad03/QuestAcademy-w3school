import type { Subject } from "@/content/types";

export const mathMagic: Subject = {
  slug: "math-magic",
  title: "Math Magic",
  world: "kids",
  icon: "🪄",
  colors: ["#F7971E", "#FFD200"],
  tagline: "Times tables, fractions, clocks and coins — it's magic! 🦉",
  description:
    "Questy's maths spell book for Grades 3–5: multiplication tricks, fair sharing with division, pizza fractions, telling the time, counting money and measuring everything around you.",
  levels: ["Grade 3", "Grade 4", "Grade 5"],
  stages: ["primary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "multiplication",
      title: "Multiplication Magic",
      icon: "✖️",
      description: "Equal groups, times tables and speedy tricks.",
      lessons: [
        {
          slug: "equal-groups",
          title: "Equal Groups",
          summary: "Multiplying is fast adding of equal groups.",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🧺🍎🍎🍎 🧺🍎🍎🍎 🧺🍎🍎🍎 🧺🍎🍎🍎", caption: "4 baskets with 3 apples each!" },
            {
              type: "text",
              md: "Questy has **4 baskets**. Each has **3 apples**. 🍎\n\nWe could add: 3 + 3 + 3 + 3 = 12.\n\nOr use magic: **4 × 3 = 12**! ✨",
            },
            {
              type: "callout",
              tone: "note",
              title: "Say it like this",
              md: "**4 × 3** means *4 groups of 3*. The sign **×** is called *times*.",
            },
            {
              type: "table",
              headers: ["Groups", "Adding", "Multiplying"],
              rows: [
                ["🐞🐞 🐞🐞 🐞🐞", "2 + 2 + 2", "3 × 2 = **6**"],
                ["🚗 wheels on 5 cars", "4 + 4 + 4 + 4 + 4", "5 × 4 = **20**"],
                ["🕷️ legs on 2 spiders", "8 + 8", "2 × 8 = **16**"],
              ],
            },
            {
              type: "widget",
              widget: "count-objects",
              props: { emoji: "🍪", max: 20 },
              caption: "Make 3 rows of 4 cookies. How many in all? 🍪",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Flip it! 🔄",
              md: "**3 × 4** and **4 × 3** give the same answer: **12**. Order doesn't matter!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "6 bikes 🚲. Each bike has 2 wheels. How many wheels?",
                  answer: 12,
                  explain: "6 × 2 = **12** wheels.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "4 × 3", back: "4 groups of 3 = **12**" },
            { front: "5 × 2", back: "**10**" },
            { front: "Is 3 × 7 the same as 7 × 3?", back: "**Yes!** Both are 21 🔄" },
            { front: "×", back: "the **times** sign" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which means the same as 3 + 3 + 3 + 3 + 3?",
              options: ["3 × 5", "3 + 5", "5 − 3"],
              answer: 0,
              explain: "Five groups of 3 is **5 × 3** (or 3 × 5) = 15.",
            },
            {
              kind: "numeric",
              q: "3 spiders 🕷️ each have 8 legs. How many legs?",
              answer: 24,
              explain: "3 × 8 = **24** legs!",
            },
            {
              kind: "truefalse",
              q: "2 × 9 gives the same answer as 9 × 2.",
              answer: true,
              explain: "Both are **18**. You can flip a multiplication!",
            },
            {
              kind: "numeric",
              q: "4 × 5 = ?",
              answer: 20,
              explain: "5, 10, 15, **20**!",
            },
          ],
        },
        {
          slug: "times-table-tricks",
          title: "Times Table Tricks",
          summary: "Secret shortcuts for the 2, 5, 9 and 10 tables.",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🎩🐇", caption: "Pull answers out of a hat — with tricks!" },
            { type: "text", md: "Some tables have **secret tricks**. 🤫 Let's learn them!" },
            {
              type: "table",
              headers: ["Table", "Trick", "Example"],
              rows: [
                ["**× 2**", "Double the number", "7 × 2 = 7 + 7 = **14**"],
                ["**× 5**", "Answers end in 0 or 5", "5 × 6 = **30**"],
                ["**× 10**", "Add a 0 on the end", "8 × 10 = **80**"],
                ["**× 4**", "Double, then double again", "6 × 4 → 12 → **24**"],
              ],
            },
            {
              type: "heading",
              text: "The 9s finger trick 🖐️🖐️",
            },
            {
              type: "list",
              ordered: true,
              items: [
                "Hold up all 10 fingers.",
                "For **9 × 3**, fold down your **3rd** finger.",
                "Fingers on the left = tens: **2**.",
                "Fingers on the right = ones: **7**.",
                "So 9 × 3 = **27**! 🎉",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "In the 9 times table, the digits always add up to 9: 18 (1+8), 27 (2+7), 36 (3+6)... ✨",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Use the 10s trick: 7 × 10 = ?",
                  answer: 70,
                  explain: "Add a zero: **70**!",
                },
              ],
            },
          ],
          flashcards: [
            { front: "9 × 4", back: "**36** (3 + 6 = 9 ✨)" },
            { front: "6 × 5", back: "**30** (ends in 0!)" },
            { front: "12 × 10", back: "**120** (add a 0)" },
            { front: "8 × 2", back: "**16** (double 8)" },
            { front: "7 × 4", back: "**28** (double 7 = 14, double again = 28)" },
          ],
          quiz: [
            { kind: "numeric", q: "9 × 6 = ?", answer: 54, explain: "Fold the 6th finger: 5 left, 4 right → **54**." },
            {
              kind: "mcq",
              q: "Which could be an answer in the 5 times table?",
              options: ["23", "35", "41"],
              answer: 1,
              explain: "5s answers end in 0 or 5. **35** = 5 × 7.",
            },
            { kind: "numeric", q: "3 × 4 = ? (double, then double again)", answer: 12, explain: "3 → 6 → **12**." },
            {
              kind: "truefalse",
              q: "9 × 8 = 72",
              answer: true,
              explain: "Yes! And 7 + 2 = 9. ✨",
            },
            {
              kind: "order",
              q: "Put the 9 times table answers in order.",
              items: ["9", "18", "27", "36", "45"],
              explain: "9, 18, 27, 36, 45 — the tens go up, the ones go down!",
            },
          ],
        },
        {
          slug: "bigger-multiplying",
          title: "Multiplying Bigger Numbers",
          summary: "Split big numbers into tens and ones.",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🧩", caption: "Break it into pieces, then put it back together!" },
            {
              type: "text",
              md: "How do we do **14 × 3**? 🤔\n\nSplit 14 into **10** and **4**. Multiply each part!",
            },
            {
              type: "table",
              headers: ["Step", "Work"],
              rows: [
                ["Split", "14 = 10 + 4"],
                ["Tens", "10 × 3 = **30**"],
                ["Ones", "4 × 3 = **12**"],
                ["Add", "30 + 12 = **42** 🎉"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Check it! ✅",
              md: "Estimate first. 14 is close to 15, and 15 × 3 = 45. So 42 makes sense!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "12 × 4 = ? (split into 10 and 2)",
                  answer: 48,
                  explain: "10 × 4 = 40, 2 × 4 = 8, 40 + 8 = **48**.",
                },
              ],
            },
            { type: "keypoints", items: ["Split the big number into tens and ones.", "Multiply each part.", "Add the parts together."] },
          ],
          flashcards: [
            { front: "13 × 2", back: "20 + 6 = **26**" },
            { front: "15 × 3", back: "30 + 15 = **45**" },
            { front: "21 × 4", back: "80 + 4 = **84**" },
            { front: "Splitting trick", back: "Tens × number, ones × number, then **add**" },
          ],
          quiz: [
            { kind: "numeric", q: "16 × 2 = ?", answer: 32, explain: "20 + 12 = **32**." },
            { kind: "numeric", q: "23 × 3 = ?", answer: 69, explain: "60 + 9 = **69**." },
            {
              kind: "mcq",
              q: "To work out 17 × 5, which split helps?",
              options: ["10 × 5 and 7 × 5", "17 + 5", "1 × 5 and 7 × 5"],
              answer: 0,
              explain: "50 + 35 = **85**.",
            },
            {
              kind: "truefalse",
              q: "11 × 6 = 66",
              answer: true,
              explain: "60 + 6 = **66**. ✅",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "division",
      title: "Sharing & Division",
      icon: "➗",
      description: "Share fairly and find what's left over.",
      lessons: [
        {
          slug: "sharing-equally",
          title: "Sharing Equally",
          summary: "Division means fair shares for everyone.",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🍬🍬🍬🍬🍬🍬 ➗ 👧👦", caption: "6 sweets shared by 2 friends." },
            {
              type: "text",
              md: "**Division** means sharing **fairly**. Everyone gets the same! ⚖️\n\n6 sweets ÷ 2 friends = **3** each. 🍬",
            },
            {
              type: "callout",
              tone: "note",
              title: "Times tables help!",
              md: "Division is multiplication backwards. 🔙\n\nIf **3 × 4 = 12**, then **12 ÷ 4 = 3** and **12 ÷ 3 = 4**.",
            },
            {
              type: "table",
              headers: ["Share", "Each gets", "Because"],
              rows: [
                ["10 🍓 ÷ 5 friends", "**2**", "5 × 2 = 10"],
                ["15 🖍️ ÷ 3 kids", "**5**", "3 × 5 = 15"],
                ["24 🍪 ÷ 6 plates", "**4**", "6 × 4 = 24"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "20 ÷ 4 = ?",
                  answer: 5,
                  explain: "4 × **5** = 20, so 20 ÷ 4 = **5**.",
                },
              ],
            },
            { type: "keypoints", items: ["÷ means share equally.", "Use times tables backwards.", "Everyone gets the same amount."] },
          ],
          flashcards: [
            { front: "12 ÷ 3", back: "**4**" },
            { front: "18 ÷ 2", back: "**9**" },
            { front: "30 ÷ 5", back: "**6**" },
            { front: "÷", back: "the **divide** sign — share fairly!" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "8 cupcakes 🧁 shared by 4 kids. How many each?",
              answer: 2,
              explain: "8 ÷ 4 = **2** cupcakes each.",
            },
            { kind: "numeric", q: "27 ÷ 3 = ?", answer: 9, explain: "3 × 9 = 27, so the answer is **9**." },
            {
              kind: "mcq",
              q: "Which fact helps you solve 35 ÷ 7?",
              options: ["7 × 5 = 35", "7 + 5 = 12", "35 − 7 = 28"],
              answer: 0,
              explain: "7 × 5 = 35, so 35 ÷ 7 = **5**.",
            },
            {
              kind: "truefalse",
              q: "40 ÷ 10 = 4",
              answer: true,
              explain: "10 × 4 = 40. ✅",
            },
          ],
        },
        {
          slug: "leftovers",
          title: "Leftovers (Remainders)",
          summary: "Sometimes things don't share out perfectly.",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🍪🍪🍪🍪🍪🍪🍪 ➗ 👧👦👶", caption: "7 cookies for 3 friends... uh oh!" },
            {
              type: "text",
              md: "Share **7** cookies between **3** friends.\n\nEach friend gets **2**. That uses 6 cookies.\n\n**1** cookie is left over! That's the **remainder**. 🍪",
            },
            {
              type: "formula",
              tex: "7 \\div 3 = 2 \\text{ r } 1",
              caption: "2 each, remainder 1",
            },
            {
              type: "table",
              headers: ["Problem", "Answer"],
              rows: [
                ["13 ÷ 4", "3 r 1 (4 × 3 = 12, 1 left)"],
                ["17 ÷ 5", "3 r 2 (5 × 3 = 15, 2 left)"],
                ["20 ÷ 6", "3 r 2 (6 × 3 = 18, 2 left)"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Too big? ⚠️",
              md: "The remainder must always be **smaller** than the number you divide by. If not, everyone can have one more!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "11 ÷ 2 = ?",
                  options: ["5 r 1", "4 r 3", "6 r 1"],
                  answer: 0,
                  explain: "2 × 5 = 10, with **1** left over.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "9 ÷ 2", back: "**4 r 1**" },
            { front: "14 ÷ 3", back: "**4 r 2**" },
            { front: "Remainder", back: "What's **left over** after sharing" },
            { front: "22 ÷ 5", back: "**4 r 2**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "10 ÷ 3 = ?",
              options: ["3 r 1", "2 r 4", "3 r 0"],
              answer: 0,
              explain: "3 × 3 = 9, with **1** left: 3 r 1.",
            },
            {
              kind: "numeric",
              q: "What is the remainder when 19 is divided by 4?",
              answer: 3,
              explain: "4 × 4 = 16, and 19 − 16 = **3**.",
            },
            {
              kind: "truefalse",
              q: "16 ÷ 4 has a remainder.",
              answer: false,
              explain: "4 × 4 = 16 exactly. Remainder **0**!",
            },
            {
              kind: "numeric",
              q: "25 children. 6 per car 🚗. How many cars are full?",
              answer: 4,
              explain: "25 ÷ 6 = 4 r 1. So **4** full cars (and 1 child needs another car!).",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "fractions",
      title: "Pizza Fractions",
      icon: "🍕",
      description: "Halves, quarters and parts of a whole.",
      lessons: [
        {
          slug: "what-is-a-fraction",
          title: "What Is a Fraction?",
          summary: "A fraction is an equal part of a whole.",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🍕", caption: "Cut a pizza into equal slices!" },
            {
              type: "text",
              md: "Cut a pizza into **4 equal** slices. Eat **1**. 😋\n\nYou ate **one quarter**: $\\frac{1}{4}$",
            },
            {
              type: "table",
              headers: ["Part", "Name", "Means"],
              rows: [
                ["**Top** number", "numerator", "how many parts you **have**"],
                ["**Bottom** number", "denominator", "how many **equal** parts in all"],
              ],
            },
            {
              type: "widget",
              widget: "fraction",
              props: { numerator: 1, denominator: 4 },
              caption: "Change the slices and see the fraction! 🍕",
            },
            {
              type: "table",
              headers: ["Fraction", "Name", "Example"],
              rows: [
                ["$\\frac{1}{2}$", "one half", "half a sandwich 🥪"],
                ["$\\frac{1}{3}$", "one third", "1 of 3 slices of cake 🍰"],
                ["$\\frac{3}{4}$", "three quarters", "3 of 4 pizza slices 🍕"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Equal parts only! ⚠️",
              md: "If the slices are different sizes, they are **not** fractions. Fair is fair!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A cake has 3 equal slices. You eat 2. What fraction did you eat?",
                  options: ["$\\frac{1}{3}$", "$\\frac{2}{3}$", "$\\frac{3}{2}$"],
                  answer: 1,
                  explain: "2 slices out of 3 = $\\frac{2}{3}$.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "$\\frac{1}{2}$", back: "one **half**" },
            { front: "$\\frac{1}{4}$", back: "one **quarter**" },
            { front: "Numerator", back: "the **top** number" },
            { front: "Denominator", back: "the **bottom** number — total equal parts" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A pizza has 8 equal slices. 3 are eaten. What fraction is eaten?",
              options: ["$\\frac{3}{8}$", "$\\frac{5}{8}$", "$\\frac{8}{3}$"],
              answer: 0,
              explain: "3 out of 8 = $\\frac{3}{8}$.",
            },
            {
              kind: "numeric",
              q: "In $\\frac{5}{6}$, what is the denominator?",
              answer: 6,
              explain: "The bottom number, **6**, is the denominator.",
            },
            {
              kind: "truefalse",
              q: "A half means 1 of 2 equal parts.",
              answer: true,
              explain: "Yes! $\\frac{1}{2}$ = 1 of 2 equal parts.",
            },
            {
              kind: "mcq",
              q: "Which picture shows **one half** coloured?",
              options: ["🟧⬜", "🟧⬜⬜", "🟧🟧🟧⬜"],
              answer: 0,
              explain: "1 of 2 equal squares is coloured: $\\frac{1}{2}$.",
            },
          ],
        },
        {
          slug: "comparing-fractions",
          title: "Bigger or Smaller Fractions",
          summary: "Compare fractions and find matching ones.",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🍫", caption: "Would you rather have 1/2 or 1/4 of the chocolate?" },
            {
              type: "text",
              md: "Share a chocolate bar with **1** friend: you get $\\frac{1}{2}$.\n\nShare with **3** friends: you get $\\frac{1}{4}$.\n\nMore sharing = **smaller** pieces! 😮",
            },
            {
              type: "keypoints",
              items: [
                "**Same top number:** bigger bottom = smaller piece. $\\frac{1}{2} > \\frac{1}{4}$",
                "**Same bottom number:** bigger top = more pieces. $\\frac{3}{5} > \\frac{2}{5}$",
              ],
            },
            {
              type: "widget",
              widget: "fraction",
              props: { numerator: 2, denominator: 4 },
              caption: "Is 2/4 the same as 1/2? Try it! 🍕",
            },
            {
              type: "heading",
              text: "Matching fractions 👯",
            },
            {
              type: "text",
              md: "Some fractions look different but are the **same amount**!\n\n$\\frac{1}{2} = \\frac{2}{4} = \\frac{4}{8}$",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Matching trick ✨",
              md: "Multiply the top **and** bottom by the same number. $\\frac{1}{3}$ → ×2 → $\\frac{2}{6}$",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which is bigger?",
                  options: ["$\\frac{1}{3}$", "$\\frac{1}{6}$"],
                  answer: 0,
                  explain: "Thirds are bigger pieces than sixths!",
                },
              ],
            },
          ],
          flashcards: [
            { front: "$\\frac{1}{2}$ or $\\frac{1}{8}$?", back: "$\\frac{1}{2}$ is bigger!" },
            { front: "$\\frac{2}{4}$", back: "Same as $\\frac{1}{2}$" },
            { front: "$\\frac{4}{5}$ or $\\frac{2}{5}$?", back: "$\\frac{4}{5}$ is bigger!" },
            { front: "$\\frac{1}{3}$ = $\\frac{?}{6}$", back: "**2** → $\\frac{2}{6}$" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which is the **biggest**?",
              options: ["$\\frac{1}{10}$", "$\\frac{1}{4}$", "$\\frac{1}{2}$"],
              answer: 2,
              explain: "Fewer pieces = bigger pieces. $\\frac{1}{2}$ wins!",
            },
            {
              kind: "truefalse",
              q: "$\\frac{2}{4}$ is the same as $\\frac{1}{2}$.",
              answer: true,
              explain: "2 of 4 slices is half the pizza! 🍕",
            },
            {
              kind: "mcq",
              q: "Which is bigger: $\\frac{3}{8}$ or $\\frac{5}{8}$?",
              options: ["$\\frac{3}{8}$", "$\\frac{5}{8}$"],
              answer: 1,
              explain: "Same size pieces, and 5 is more than 3.",
            },
            {
              kind: "numeric",
              q: "$\\frac{1}{2} = \\frac{?}{10}$",
              answer: 5,
              explain: "Multiply top and bottom by 5: $\\frac{5}{10}$.",
            },
            {
              kind: "order",
              q: "Order from smallest to biggest.",
              items: ["1/8", "1/4", "1/2"],
              explain: "Eighths are smallest, halves are biggest!",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "time-money-measure",
      title: "Time, Money & Measuring",
      icon: "⏰",
      description: "Read clocks, count coins and measure things.",
      lessons: [
        {
          slug: "telling-time",
          title: "Telling the Time",
          summary: "O'clock, half past, quarter past and more.",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🕒", caption: "Tick tock! What time is it?" },
            {
              type: "text",
              md: "A clock has **two hands**. ⏰\n\nThe **short** hand shows the **hour**.\n\nThe **long** hand shows the **minutes**.",
            },
            {
              type: "table",
              headers: ["Long hand points to", "We say", "Example"],
              rows: [
                ["12", "**o'clock**", "3:00 — three o'clock"],
                ["3", "**quarter past**", "3:15"],
                ["6", "**half past**", "3:30"],
                ["9", "**quarter to** (the next hour)", "3:45 = quarter to 4"],
              ],
            },
            {
              type: "widget",
              widget: "clock",
              caption: "Drag the hands to show half past 7! 🕢",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Count by 5s 🖐️",
              md: "Each number on the clock is **5 minutes** for the long hand. The 4 means 20 minutes!",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "There are **60** minutes in an hour and **24** hours in a day! 🌞🌙",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "The short hand is on 8. The long hand is on 12. What time is it?",
                  options: ["12 o'clock", "8 o'clock", "half past 8"],
                  answer: 1,
                  explain: "Long hand on 12 = o'clock. It's **8 o'clock**!",
                },
              ],
            },
          ],
          flashcards: [
            { front: "Short hand", back: "shows the **hour**" },
            { front: "Long hand", back: "shows the **minutes**" },
            { front: "Half past", back: "**30** minutes past" },
            { front: "Quarter past", back: "**15** minutes past" },
            { front: "Minutes in an hour", back: "**60**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What time is 4:30?",
              options: ["quarter past 4", "half past 4", "quarter to 4"],
              answer: 1,
              explain: "30 minutes past is **half past**.",
            },
            {
              kind: "numeric",
              q: "The long hand points to 5. How many minutes past the hour?",
              answer: 25,
              explain: "Count by 5s: 5, 10, 15, 20, **25**.",
              unit: "minutes",
            },
            {
              kind: "numeric",
              q: "How many hours are in one day?",
              answer: 24,
              explain: "A day has **24** hours.",
            },
            {
              kind: "truefalse",
              q: "Quarter to 6 is the same as 5:45.",
              answer: true,
              explain: "15 minutes before 6 o'clock is **5:45**.",
            },
          ],
        },
        {
          slug: "counting-money",
          title: "Counting Money",
          summary: "Add up coins and notes, and work out change.",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🪙💵🛒", caption: "Let's go shopping with Questy!" },
            {
              type: "text",
              md: "Money comes in **coins** 🪙 and **notes** 💵.\n\nIn many countries, **100** small units make **1** big unit:",
            },
            {
              type: "table",
              headers: ["Country money", "Small", "Big"],
              rows: [
                ["Dollars 🇺🇸", "100 cents", "= 1 dollar"],
                ["Rupees 🇮🇳", "100 paise", "= 1 rupee"],
                ["Pounds 🇬🇧", "100 pence", "= 1 pound"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Count the big ones first 💡",
              md: "Coins: **10 + 10 + 5 + 2 + 1**. Start big: 10, 20, 25, 27, **28**!",
            },
            {
              type: "heading",
              text: "Getting change 🧾",
            },
            {
              type: "text",
              md: "A toy costs **7**. You pay with **10**.\n\nChange = 10 − 7 = **3** back! 🪙🪙🪙",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "You have coins worth 5, 5 and 2. How much in total?",
                  answer: 12,
                  explain: "5 + 5 + 2 = **12**.",
                },
              ],
            },
          ],
          flashcards: [
            { front: "100 cents", back: "= **1 dollar** 💵" },
            { front: "100 paise", back: "= **1 rupee**" },
            { front: "Change", back: "Money paid − price" },
            { front: "Pay 20 for a 15 book", back: "Change: **5**" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "A pencil costs 6. You pay 10. How much change?",
              answer: 4,
              explain: "10 − 6 = **4**.",
            },
            {
              kind: "numeric",
              q: "Add the coins: 10 + 5 + 5 + 1",
              answer: 21,
              explain: "10, 15, 20, **21**.",
            },
            {
              kind: "mcq",
              q: "How many cents make 1 dollar?",
              options: ["10", "50", "100"],
              answer: 2,
              explain: "**100** cents = 1 dollar.",
            },
            {
              kind: "numeric",
              q: "An apple costs 25 cents. How much do 3 apples cost?",
              answer: 75,
              unit: "cents",
              explain: "25 + 25 + 25 = **75** cents.",
            },
          ],
        },
        {
          slug: "measuring",
          title: "Measuring Things",
          summary: "Length, weight and how much a jug holds.",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "📏⚖️🥛", caption: "How long? How heavy? How much?" },
            {
              type: "text",
              md: "We measure to find out **how long**, **how heavy** or **how much** something holds. 🔍",
            },
            {
              type: "table",
              headers: ["What", "Units", "Remember"],
              rows: [
                ["📏 Length", "centimetres (cm), metres (m), kilometres (km)", "100 cm = 1 m, 1000 m = 1 km"],
                ["⚖️ Weight (mass)", "grams (g), kilograms (kg)", "1000 g = 1 kg"],
                ["🥛 Capacity", "millilitres (mL), litres (L)", "1000 mL = 1 L"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Body guesses 🖐️",
              md: "A fingertip is about **1 cm** wide. A big step is about **1 m** long. A bag of sugar is about **1 kg**.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which unit would you use to measure a pencil? ✏️",
                  options: ["kilometres", "centimetres", "litres"],
                  answer: 1,
                  explain: "A pencil is short — use **centimetres**.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "A blue whale can be about **30 metres** long — longer than two school buses in a row! 🐳🚌🚌",
            },
          ],
          flashcards: [
            { front: "100 cm", back: "= **1 m**" },
            { front: "1000 g", back: "= **1 kg**" },
            { front: "1000 mL", back: "= **1 L**" },
            { front: "📏 Ruler", back: "measures **length**" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many centimetres are in 2 metres?",
              answer: 200,
              unit: "cm",
              explain: "1 m = 100 cm, so 2 m = **200** cm.",
            },
            {
              kind: "mcq",
              q: "Which would you measure in **litres**?",
              options: ["🛁 water in a bath", "🐜 an ant's length", "🍎 an apple's weight"],
              answer: 0,
              explain: "Litres measure how much liquid something holds. 🛁",
            },
            {
              kind: "numeric",
              q: "3 kg = ? g",
              answer: 3000,
              unit: "g",
              explain: "1 kg = 1000 g, so 3 kg = **3000** g.",
            },
            {
              kind: "mcq",
              q: "Which is the heaviest?",
              options: ["🪶 a feather", "🐘 an elephant", "📘 a book"],
              answer: 1,
              explain: "An elephant weighs thousands of kilograms! 🐘",
            },
          ],
        },
      ],
    },
  ],
};
