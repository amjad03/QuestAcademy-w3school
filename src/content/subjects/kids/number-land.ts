import type { Subject } from "@/content/types";

export const numberLand: Subject = {
  slug: "number-land",
  title: "Number Land",
  world: "kids",
  icon: "🔢",
  colors: ["#43E97B", "#38F9D7"],
  tagline: "Count, compare, add and hop with Questy! 🦉",
  description:
    "Welcome to Number Land! Count up to 20, find out which group has more, add and take away, hop along the number line and skip count by 2s, 5s and 10s.",
  levels: ["Ages 4–7"],
  stages: ["preprimary", "primary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "counting",
      title: "Let's Count!",
      icon: "🍎",
      description: "Count objects from 1 all the way to 20.",
      lessons: [
        {
          slug: "count-to-10",
          title: "Count to 10",
          summary: "One, two, three... all the way to ten!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🖐️🖐️", caption: "Ten fingers — perfect for counting!" },
            {
              type: "text",
              md: "Let's count with Questy! 🦉\n\nTouch each thing **once**. Say one number for each.",
            },
            {
              type: "table",
              headers: ["Number", "Word", "Picture"],
              rows: [
                ["**1**", "one", "🍎"],
                ["**2**", "two", "🍎🍎"],
                ["**3**", "three", "🍎🍎🍎"],
                ["**4**", "four", "🍎🍎🍎🍎"],
                ["**5**", "five", "🍎🍎🍎🍎🍎"],
                ["**6**", "six", "🍎🍎🍎🍎🍎🍎"],
                ["**7**", "seven", "🍎🍎🍎🍎🍎🍎🍎"],
                ["**8**", "eight", "🍎🍎🍎🍎🍎🍎🍎🍎"],
                ["**9**", "nine", "🍎🍎🍎🍎🍎🍎🍎🍎🍎"],
                ["**10**", "ten", "🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎"],
              ],
            },
            {
              type: "widget",
              widget: "count-objects",
              props: { emoji: "🐞", max: 10 },
              caption: "Tap each ladybug to count it! 🐞",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Counting trick 👆",
              md: "Point at each thing as you count. Then you won't count anything twice!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "How many stars? ⭐⭐⭐⭐",
                  answer: 4,
                  explain: "1, 2, 3, **4** stars! ⭐",
                },
              ],
            },
            { type: "keypoints", items: ["Touch each thing once.", "The last number you say is how many!", "You have 10 fingers. 🖐️🖐️"] },
          ],
          flashcards: [
            { front: "🐶🐶🐶", back: "**3** dogs!" },
            { front: "🌟🌟🌟🌟🌟", back: "**5** stars!" },
            { front: "🐟🐟🐟🐟🐟🐟🐟", back: "**7** fish!" },
            { front: "🖐️🖐️", back: "**10** fingers!" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which group has **3** apples?",
              options: ["🍎🍎", "🍎🍎🍎", "🍎🍎🍎🍎"],
              answer: 1,
              explain: "1, 2, **3**! 🍎🍎🍎",
            },
            {
              kind: "numeric",
              q: "How many ducks? 🦆🦆🦆🦆🦆🦆",
              answer: 6,
              explain: "Count them: 1, 2, 3, 4, 5, **6**! 🦆",
            },
            {
              kind: "order",
              q: "Put the numbers in counting order.",
              items: ["1", "2", "3", "4", "5"],
              explain: "1, 2, 3, 4, 5 — once I caught a fish alive! 🐟",
            },
            {
              kind: "mcq",
              q: "What number comes after **9**?",
              options: ["8", "10", "7"],
              answer: 1,
              explain: "9 then **10**! 🎉",
            },
          ],
        },
        {
          slug: "count-to-20",
          title: "Count to 20",
          summary: "Keep going past ten — all the way to twenty!",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🖐️🖐️🦶🦶", caption: "10 fingers + 10 toes = 20!" },
            {
              type: "text",
              md: "After **10** we keep going!\n\n**11** eleven, **12** twelve, **13** thirteen...\n\nAll the way to **20** twenty! 🎉",
            },
            {
              type: "table",
              headers: ["Number", "Word", "Ten and..."],
              rows: [
                ["**11**", "eleven", "10 and 1"],
                ["**12**", "twelve", "10 and 2"],
                ["**13**", "thirteen", "10 and 3"],
                ["**15**", "fifteen", "10 and 5"],
                ["**18**", "eighteen", "10 and 8"],
                ["**20**", "twenty", "10 and 10"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Teen secret 🤫",
              md: "Every **teen** number is **ten and a bit more**. 14 is ten and 4!",
            },
            {
              type: "widget",
              widget: "count-objects",
              props: { emoji: "🫧", max: 20 },
              caption: "Pop the bubbles and count to 20! 🫧",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What number comes after **15**?",
                  options: ["14", "16", "17"],
                  answer: 1,
                  explain: "15, **16**! 🎈",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Spiders have **8** legs. So 2 spiders have **16** legs! 🕷️🕷️",
            },
          ],
          flashcards: [
            { front: "11", back: "eleven — 10 and 1" },
            { front: "14", back: "fourteen — 10 and 4" },
            { front: "17", back: "seventeen — 10 and 7" },
            { front: "20", back: "twenty — 10 and 10 🎉" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What comes after **19**?",
              options: ["18", "20", "21"],
              answer: 1,
              explain: "19 then **20**!",
            },
            {
              kind: "numeric",
              q: "10 and 3 more makes...",
              answer: 13,
              explain: "Ten and three is **13** — thirteen!",
            },
            {
              kind: "order",
              q: "Put these in counting order.",
              items: ["11", "12", "13", "14", "15"],
              explain: "11, 12, 13, 14, 15. Super! ⭐",
            },
            {
              kind: "truefalse",
              q: "Fourteen is ten and four.",
              answer: true,
              explain: "Yes! 14 = 10 and 4.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "more-or-less",
      title: "More or Less?",
      icon: "⚖️",
      description: "Compare groups and numbers. Which is bigger?",
      lessons: [
        {
          slug: "more-fewer-same",
          title: "More, Fewer, Same",
          summary: "Look at two groups. Which has more?",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🍪🍪🍪 vs 🍪", caption: "Which plate would you pick? 😋" },
            {
              type: "text",
              md: "Look at two groups.\n\nThe group with **more** has the bigger number.\n\nThe group with **fewer** has the smaller number.",
            },
            {
              type: "table",
              headers: ["Group A", "Group B", "Which has more?"],
              rows: [
                ["🐸🐸🐸🐸", "🐸🐸", "**A** (4 is more than 2)"],
                ["🍓", "🍓🍓🍓", "**B** (3 is more than 1)"],
                ["🎈🎈", "🎈🎈", "**Same!** (2 and 2)"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Line them up! 📏",
              md: "Put the two groups in rows side by side. The longer row has **more**.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which has **more**?",
                  options: ["🐱🐱", "🐱🐱🐱🐱🐱"],
                  answer: 1,
                  explain: "5 cats is more than 2 cats! 🐱",
                },
              ],
            },
            { type: "keypoints", items: ["**More** = bigger number.", "**Fewer** = smaller number.", "**Same** = equal!"] },
          ],
          flashcards: [
            { front: "🍎🍎🍎 or 🍎?", back: "🍎🍎🍎 has **more**!" },
            { front: "🚗 or 🚗🚗🚗🚗?", back: "🚗 has **fewer**!" },
            { front: "⭐⭐ and ⭐⭐", back: "The **same**!" },
            { front: "More or fewer: 7 or 3?", back: "**7** is more!" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which has **fewer**?",
              options: ["🐝🐝🐝🐝", "🐝"],
              answer: 1,
              explain: "1 bee is fewer than 4 bees. 🐝",
            },
            {
              kind: "mcq",
              q: "Which has **more**?",
              options: ["🍩🍩🍩", "🍩🍩", "🍩"],
              answer: 0,
              explain: "3 donuts is the most! 🍩",
            },
            {
              kind: "truefalse",
              q: "🌼🌼🌼 and 🌼🌼🌼 are the same.",
              answer: true,
              explain: "3 and 3 — the **same**!",
            },
            {
              kind: "mcq",
              q: "Which number is **more**: 6 or 9?",
              options: ["6", "9"],
              answer: 1,
              explain: "**9** is more than 6.",
            },
          ],
        },
        {
          slug: "one-more-one-less",
          title: "One More, One Less",
          summary: "Add one or take one away. What happens?",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🐣➕🐣", caption: "One more chick hatched!" },
            {
              type: "text",
              md: "**One more** means the next number up. ⬆️\n\n**One less** means the number before. ⬇️",
            },
            {
              type: "table",
              headers: ["Number", "One less", "One more"],
              rows: [
                ["**5**", "4", "6"],
                ["**8**", "7", "9"],
                ["**12**", "11", "13"],
                ["**19**", "18", "20"],
              ],
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: 0, max: 20 },
              caption: "Hop 1 forward for one more. Hop 1 back for one less! 🐸",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "What is **one more** than 7?",
                  answer: 8,
                  explain: "7, then **8**!",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Your age goes up by **one more** every birthday! 🎂",
            },
          ],
          flashcards: [
            { front: "One more than 3", back: "**4**" },
            { front: "One less than 10", back: "**9**" },
            { front: "One more than 14", back: "**15**" },
            { front: "One less than 1", back: "**0** — nothing left!" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "What is **one less** than 6?",
              answer: 5,
              explain: "One step back from 6 is **5**.",
            },
            {
              kind: "mcq",
              q: "You have 🎈🎈🎈. You get one more. How many now?",
              options: ["2", "3", "4"],
              answer: 2,
              explain: "3 and one more is **4**! 🎈",
            },
            {
              kind: "numeric",
              q: "What is **one more** than 19?",
              answer: 20,
              explain: "19, then **20**!",
            },
            {
              kind: "truefalse",
              q: "One less than 10 is 11.",
              answer: false,
              explain: "One less than 10 is **9**. 11 is one *more*.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "add-and-subtract",
      title: "Add and Take Away",
      icon: "➕",
      description: "Put groups together and take some away, up to 20.",
      lessons: [
        {
          slug: "adding-up-to-10",
          title: "Adding Up to 10",
          summary: "Put two groups together to find how many.",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🐥🐥 ➕ 🐥 = 🐥🐥🐥", caption: "2 chicks and 1 more makes 3!" },
            {
              type: "text",
              md: "**Adding** means putting things **together**. 🤝\n\nThe sign is **+** (plus).\n\nThe answer comes after **=** (equals).",
            },
            {
              type: "table",
              headers: ["Pictures", "Sum"],
              rows: [
                ["🍎🍎 + 🍎", "2 + 1 = **3**"],
                ["🐟🐟🐟 + 🐟🐟", "3 + 2 = **5**"],
                ["⭐⭐⭐⭐ + ⭐⭐⭐⭐", "4 + 4 = **8**"],
                ["🎈🎈🎈🎈🎈 + 🎈🎈🎈🎈🎈", "5 + 5 = **10**"],
              ],
            },
            {
              type: "widget",
              widget: "count-objects",
              props: { emoji: "🍓", max: 10 },
              caption: "Tap 3 berries, then 4 more. How many in all? 🍓",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Count on! 👆",
              md: "Start with the **bigger** number. Then count up.\n\n5 + 2 → say **5**... then **6, 7**!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "🐶🐶 + 🐶🐶🐶 = ?",
                  answer: 5,
                  explain: "2 + 3 = **5** puppies! 🐶",
                },
              ],
            },
            { type: "keypoints", items: ["**+** means add.", "**=** means equals.", "Count on from the bigger number."] },
          ],
          flashcards: [
            { front: "1 + 1", back: "**2** 👀" },
            { front: "2 + 2", back: "**4** 🚗 (car wheels!)" },
            { front: "3 + 3", back: "**6**" },
            { front: "5 + 5", back: "**10** 🖐️🖐️" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "🍌🍌 + 🍌🍌 = ?",
              options: ["🍌🍌🍌", "🍌🍌🍌🍌", "🍌🍌🍌🍌🍌"],
              answer: 1,
              explain: "2 + 2 = **4** bananas!",
            },
            { kind: "numeric", q: "4 + 3 = ?", answer: 7, explain: "Start at 4, count on: 5, 6, **7**." },
            { kind: "numeric", q: "6 + 2 = ?", answer: 8, explain: "Start at 6: 7, **8**!" },
            {
              kind: "truefalse",
              q: "5 + 5 = 10",
              answer: true,
              explain: "Yes! Five fingers and five fingers is **10**. 🖐️🖐️",
            },
          ],
        },
        {
          slug: "taking-away",
          title: "Taking Away",
          summary: "Some go away. How many are left?",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🍪🍪🍪🍪🍪 ➖ 😋", caption: "5 cookies... I ate 2! How many left?" },
            {
              type: "text",
              md: "**Taking away** means some things go. 👋\n\nThe sign is **−** (minus).\n\n5 − 2 = **3** cookies left! 🍪",
            },
            {
              type: "table",
              headers: ["Story", "Sum"],
              rows: [
                ["4 birds. 1 flies away. 🐦", "4 − 1 = **3**"],
                ["6 balloons. 2 pop! 🎈", "6 − 2 = **4**"],
                ["10 ducks. 5 swim off. 🦆", "10 − 5 = **5**"],
              ],
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: 0, max: 10 },
              caption: "Start at 6. Hop back 2. Where do you land? 🐸",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Count back 👇",
              md: "For 7 − 2, start at **7** and count back: **6, 5**. Answer: 5!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "8 − 1 = ?",
                  answer: 7,
                  explain: "One less than 8 is **7**.",
                },
              ],
            },
            { type: "keypoints", items: ["**−** means take away.", "Count back to find what's left.", "Taking away makes the number smaller."] },
          ],
          flashcards: [
            { front: "3 − 1", back: "**2**" },
            { front: "5 − 5", back: "**0** — all gone! 🫙" },
            { front: "9 − 3", back: "**6**" },
            { front: "10 − 2", back: "**8**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "🐟🐟🐟 — one swims away. How many left?",
              options: ["🐟", "🐟🐟", "🐟🐟🐟"],
              answer: 1,
              explain: "3 − 1 = **2** fish.",
            },
            { kind: "numeric", q: "7 − 3 = ?", answer: 4, explain: "Start at 7, count back 3: 6, 5, **4**." },
            { kind: "numeric", q: "10 − 4 = ?", answer: 6, explain: "Count back from 10: 9, 8, 7, **6**." },
            {
              kind: "truefalse",
              q: "Taking away makes the number bigger.",
              answer: false,
              explain: "Taking away makes it **smaller**!",
            },
          ],
        },
        {
          slug: "adding-to-20",
          title: "Adding to 20",
          summary: "Bigger sums using the magic of ten!",
          minutes: 6,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🔟➕🔢", caption: "Ten is your best friend!" },
            {
              type: "text",
              md: "Adding **10** is easy!\n\n10 + 3 = **13**\n\n10 + 7 = **17**\n\nJust put a 1 in front! ✨",
            },
            {
              type: "table",
              headers: ["Sum", "Answer"],
              rows: [
                ["10 + 4", "**14**"],
                ["10 + 9", "**19**"],
                ["9 + 3", "**12**"],
                ["8 + 8", "**16**"],
                ["12 − 2", "**10**"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Make a ten! 🔟",
              md: "For **9 + 3**: take 1 from the 3 to make 9 into 10.\n\nNow it's **10 + 2 = 12**! 🎉",
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: 0, max: 20 },
              caption: "Start at 9 and hop 3 forward! 🐸",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "10 + 6 = ?",
                  answer: 16,
                  explain: "Ten and six is **16**!",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Doubles are handy! 6 + 6 = **12**, like a box of 12 eggs. 🥚",
            },
          ],
          flashcards: [
            { front: "10 + 5", back: "**15**" },
            { front: "9 + 2", back: "**11** (make a ten!)" },
            { front: "7 + 7", back: "**14**" },
            { front: "20 − 10", back: "**10**" },
          ],
          quiz: [
            { kind: "numeric", q: "10 + 8 = ?", answer: 18, explain: "Ten and eight is **18**." },
            { kind: "numeric", q: "9 + 4 = ?", answer: 13, explain: "Make a ten: 10 + 3 = **13**." },
            {
              kind: "mcq",
              q: "Which sum makes **20**?",
              options: ["10 + 5", "10 + 10", "15 + 1"],
              answer: 1,
              explain: "10 + 10 = **20**! 🖐️🖐️🦶🦶",
            },
            { kind: "numeric", q: "15 − 5 = ?", answer: 10, explain: "Count back 5 from 15 to land on **10**." },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "hop-and-skip",
      title: "Hop and Skip",
      icon: "🐸",
      description: "Hop along the number line and skip count.",
      lessons: [
        {
          slug: "number-line-hops",
          title: "Number Line Hops",
          summary: "A number line is a road for numbers!",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🐸➡️", caption: "Freddie the frog loves to hop!" },
            {
              type: "text",
              md: "A **number line** puts numbers in a row. 🛣️\n\n0 — 1 — 2 — 3 — 4 — 5 ...\n\nHop **forward** ➡️ to add.\n\nHop **back** ⬅️ to take away.",
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: 0, max: 10 },
              caption: "Start at 2. Hop 3 forward. Where are you? 🐸",
            },
            {
              type: "table",
              headers: ["Start", "Hops", "Land on"],
              rows: [
                ["2", "3 forward ➡️", "**5**"],
                ["6", "2 back ⬅️", "**4**"],
                ["0", "7 forward ➡️", "**7**"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Start at 4. Hop 2 forward. Where do you land?",
                  answer: 6,
                  explain: "4 → 5 → **6**! 🐸",
                },
              ],
            },
            { type: "keypoints", items: ["Numbers sit in order on the line.", "Forward = add ➕", "Back = take away ➖"] },
          ],
          flashcards: [
            { front: "Hop forward ➡️", back: "means **add** ➕" },
            { front: "Hop back ⬅️", back: "means **take away** ➖" },
            { front: "Start 3, hop 1 forward", back: "**4**" },
            { front: "Start 8, hop 3 back", back: "**5**" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Start at 5. Hop 3 forward. 🐸",
              answer: 8,
              explain: "5 → 6 → 7 → **8**.",
            },
            {
              kind: "numeric",
              q: "Start at 9. Hop 4 back. 🐸",
              answer: 5,
              explain: "9 → 8 → 7 → 6 → **5**.",
            },
            {
              kind: "mcq",
              q: "Which number sits **between** 6 and 8?",
              options: ["5", "7", "9"],
              answer: 1,
              explain: "6, **7**, 8!",
            },
            {
              kind: "truefalse",
              q: "Hopping back on a number line means adding.",
              answer: false,
              explain: "Hopping back means **taking away**.",
            },
          ],
        },
        {
          slug: "skip-counting",
          title: "Skip Counting",
          summary: "Count by 2s, 5s and 10s — super fast!",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🦘", caption: "Kanga skips over numbers. Boing!" },
            {
              type: "text",
              md: "Skip counting means **jumping** over numbers. 🦘\n\nIt is a super-fast way to count!",
            },
            {
              type: "table",
              headers: ["Skip by", "Count", "Think of..."],
              rows: [
                ["**2s**", "2, 4, 6, 8, 10", "🧦 pairs of socks"],
                ["**5s**", "5, 10, 15, 20", "🖐️ fingers on hands"],
                ["**10s**", "10, 20, 30, 40, 50", "🔟 bundles of ten"],
              ],
            },
            {
              type: "widget",
              widget: "number-line",
              props: { min: 0, max: 20 },
              caption: "Hop by 2s: 0, 2, 4, 6... 🐸",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Count by 2s: 2, 4, 6, ___",
                  options: ["7", "8", "9"],
                  answer: 1,
                  explain: "2, 4, 6, **8**! 🧦",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Counting by **2s** is how we count pairs of eyes 👀, shoes 👟 and socks 🧦!",
            },
          ],
          flashcards: [
            { front: "👀👀👀 (3 pairs)", back: "2, 4, **6** eyes" },
            { front: "🖐️🖐️🖐️", back: "5, 10, **15** fingers" },
            { front: "Count by 10s", back: "10, 20, 30, 40, 50..." },
            { front: "Count by 2s", back: "2, 4, 6, 8, 10..." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Count by 5s: 5, 10, ___",
              options: ["11", "15", "20"],
              answer: 1,
              explain: "5, 10, **15**! 🖐️",
            },
            {
              kind: "order",
              q: "Put these in order counting by 10s.",
              items: ["10", "20", "30", "40"],
              explain: "10, 20, 30, 40 — boing boing! 🦘",
            },
            {
              kind: "numeric",
              q: "4 pairs of socks 🧦. How many socks? (count by 2s)",
              answer: 8,
              explain: "2, 4, 6, **8** socks!",
            },
            {
              kind: "truefalse",
              q: "Counting by 2s goes 2, 4, 6, 8.",
              answer: true,
              explain: "Yes! Skip one each time.",
            },
          ],
        },
      ],
    },
  ],
};
