import type { Subject } from "@/content/types";

export const shapesColors: Subject = {
  slug: "shapes-colors",
  title: "Shapes & Colours",
  world: "kids",
  icon: "🎨",
  colors: ["#A18CD1", "#FBC2EB"],
  tagline: "Circles, cubes, rainbows and patterns with Questy! 🦉",
  description:
    "Spot flat shapes and solid shapes all around you, mix paint colours to make new ones, build patterns and learn words like big, small, on, under and next to.",
  levels: ["Ages 3–6"],
  stages: ["preprimary", "primary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "flat-shapes",
      title: "Flat Shapes",
      icon: "🔺",
      description: "Circles, squares, triangles and friends.",
      lessons: [
        {
          slug: "circles-and-squares",
          title: "Circles and Squares",
          summary: "Round shapes and boxy shapes.",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "⚪🟥", caption: "One is round. One has corners!" },
            {
              type: "text",
              md: "A **circle** is round. 🔵 It has **no corners** and **no straight sides**.\n\nA **square** has **4 sides**. All the sides are the **same** length. 🟦",
            },
            {
              type: "table",
              headers: ["Shape", "Sides", "Corners", "Find it!"],
              rows: [
                ["⚪ Circle", "0 straight", "0", "🍪 cookie, 🕐 clock"],
                ["🟥 Square", "4 (all the same)", "4", "🧇 waffle, window 🪟"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Trace it ✍️",
              md: "Draw a circle in the air with your finger. Round and round! Now draw a square: across, down, across, up.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which one is a **circle**?",
                  options: ["🟩", "⚪", "🔺"],
                  answer: 1,
                  explain: "⚪ is round — a circle!",
                },
              ],
            },
            { type: "keypoints", items: ["Circle = round, no corners.", "Square = 4 equal sides, 4 corners.", "Shapes are everywhere!"] },
          ],
          flashcards: [
            { front: "⚪", back: "**Circle** — round and round!" },
            { front: "🟦", back: "**Square** — 4 same sides!" },
            { front: "🍪", back: "A cookie is a **circle**." },
            { front: "How many corners does a square have?", back: "**4** corners" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many sides does a square have?",
              answer: 4,
              explain: "A square has **4** sides, all the same.",
            },
            {
              kind: "truefalse",
              q: "A circle has corners.",
              answer: false,
              explain: "A circle is round. It has **no** corners!",
            },
            {
              kind: "mcq",
              q: "Which is shaped like a circle?",
              options: ["🍕 pizza (whole)", "📦 box", "📐 ruler"],
              answer: 0,
              explain: "A whole pizza is round like a circle! 🍕",
            },
          ],
        },
        {
          slug: "triangles-and-rectangles",
          title: "Triangles and Rectangles",
          summary: "Three sides, four sides — and more!",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🔺🚪", caption: "A triangle and a rectangle door!" },
            {
              type: "text",
              md: "A **triangle** has **3 sides** and **3 corners**. 🔺\n\nA **rectangle** has **4 sides**. Two are long. Two are short. 🚪",
            },
            {
              type: "table",
              headers: ["Shape", "Sides", "Find it!"],
              rows: [
                ["🔺 Triangle", "3", "🍕 pizza slice, ⛺ tent"],
                ["▬ Rectangle", "4", "🚪 door, 📱 phone"],
                ["⬠ Pentagon", "5", "🏠 house side"],
                ["⬡ Hexagon", "6", "🐝 honeycomb"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Bees build honeycomb out of **hexagons** — shapes with **6 sides**! 🐝🍯",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which looks like a **triangle**?",
                  options: ["🚪", "⛺", "🍪"],
                  answer: 1,
                  explain: "A tent ⛺ is a triangle shape!",
                },
              ],
            },
            { type: "keypoints", items: ["Triangle = 3 sides.", "Rectangle = 4 sides (2 long, 2 short).", "Hexagon = 6 sides."] },
          ],
          flashcards: [
            { front: "🔺", back: "**Triangle** — 3 sides" },
            { front: "🚪", back: "**Rectangle** — 2 long, 2 short sides" },
            { front: "🐝🍯", back: "**Hexagon** — 6 sides" },
            { front: "⬠", back: "**Pentagon** — 5 sides" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many sides does a triangle have?",
              answer: 3,
              explain: "Tri means three. A triangle has **3** sides.",
            },
            {
              kind: "mcq",
              q: "A door 🚪 is shaped like a...",
              options: ["circle", "triangle", "rectangle"],
              answer: 2,
              explain: "Doors are tall **rectangles**.",
            },
            {
              kind: "mcq",
              q: "Which shape has **6** sides?",
              options: ["Hexagon", "Square", "Triangle"],
              answer: 0,
              explain: "A **hexagon** has 6 sides, like honeycomb! 🐝",
            },
            {
              kind: "order",
              q: "Order from fewest sides to most sides.",
              items: ["Triangle", "Square", "Pentagon", "Hexagon"],
              explain: "3, 4, 5, 6 sides! 🎉",
            },
          ],
        },
        {
          slug: "shape-hunt",
          title: "Shape Hunt!",
          summary: "Find shapes hiding in your home.",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🔍🏠", caption: "Let's go on a shape hunt!" },
            {
              type: "text",
              md: "Shapes hide **everywhere**! 👀\n\nLook around your room. What can you find?",
            },
            {
              type: "table",
              headers: ["Thing", "Shape"],
              rows: [
                ["🕐 clock", "circle"],
                ["📺 TV", "rectangle"],
                ["🧀 cheese slice", "triangle"],
                ["🎲 dice side", "square"],
                ["🥚 egg", "oval"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Oval, not circle! 🥚",
              md: "An **oval** is like a stretched circle. Eggs are ovals!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A TV 📺 is shaped like a...",
                  options: ["circle", "rectangle", "triangle"],
                  answer: 1,
                  explain: "Most TVs are **rectangles**!",
                },
              ],
            },
            { type: "keypoints", items: ["Look closely to spot shapes.", "An oval is a stretched circle.", "Be a shape detective! 🕵️"] },
          ],
          flashcards: [
            { front: "🥚", back: "**Oval**" },
            { front: "🕐", back: "**Circle**" },
            { front: "🧀", back: "**Triangle**" },
            { front: "🎲 (one side)", back: "**Square**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "An egg 🥚 is shaped like an...",
              options: ["oval", "square", "triangle"],
              answer: 0,
              explain: "An egg is an **oval** — a stretched circle.",
            },
            {
              kind: "mcq",
              q: "Which thing is a **circle**?",
              options: ["🚪 door", "🍩 donut", "📕 book"],
              answer: 1,
              explain: "A donut is round! 🍩",
            },
            {
              kind: "truefalse",
              q: "The side of a dice 🎲 is a square.",
              answer: true,
              explain: "Yes! Each side of a dice is a **square**.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "solid-shapes",
      title: "Solid Shapes",
      icon: "🧊",
      description: "3D shapes you can hold, roll and stack.",
      lessons: [
        {
          slug: "meet-solid-shapes",
          title: "Meet Solid Shapes",
          summary: "Cubes, spheres, cones and cylinders!",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🎲⚽🍦🥫", caption: "Cube, sphere, cone and cylinder!" },
            {
              type: "text",
              md: "Some shapes are **solid**. You can pick them up! ✋\n\nWe call them **3D shapes**.",
            },
            {
              type: "table",
              headers: ["Shape", "Looks like", "Example"],
              rows: [
                ["**Cube**", "a box with all square sides", "🎲 dice, 🧊 ice cube"],
                ["**Sphere**", "a round ball", "⚽ ball, 🌍 globe"],
                ["**Cone**", "a party hat", "🍦 ice-cream cone, 🥳 hat"],
                ["**Cylinder**", "a can", "🥫 can, 🕯️ candle"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A ball ⚽ is a...",
                  options: ["cube", "sphere", "cone"],
                  answer: 1,
                  explain: "A ball is a **sphere** — round all over!",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Our Earth 🌍 is shaped (almost) like a giant **sphere**!",
            },
            { type: "keypoints", items: ["Solid shapes are 3D.", "Cube 🎲, sphere ⚽, cone 🍦, cylinder 🥫.", "You can hold them!"] },
          ],
          flashcards: [
            { front: "🎲", back: "**Cube**" },
            { front: "⚽", back: "**Sphere**" },
            { front: "🍦", back: "**Cone**" },
            { front: "🥫", back: "**Cylinder**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A can of beans 🥫 is a...",
              options: ["cylinder", "cube", "sphere"],
              answer: 0,
              explain: "A can is a **cylinder**.",
            },
            {
              kind: "mcq",
              q: "Which is a **cone**?",
              options: ["🎲", "🍦", "🌍"],
              answer: 1,
              explain: "An ice-cream cone 🍦 is a cone!",
            },
            {
              kind: "truefalse",
              q: "A dice 🎲 is a cube.",
              answer: true,
              explain: "Yes! A dice is a **cube** with 6 square faces.",
            },
            {
              kind: "fill",
              q: "A ball is a s___ (shape name)",
              answer: ["phere", "sphere"],
              explain: "A ball is a **sphere**! ⚽",
            },
          ],
        },
        {
          slug: "roll-stack-slide",
          title: "Roll, Stack or Slide?",
          summary: "What can each solid shape do?",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🛝⚽📦", caption: "Will it roll down the slide?" },
            {
              type: "text",
              md: "Some shapes **roll**. 🎳\n\nSome shapes **stack**. 🧱\n\nSome shapes **slide**. 🛝",
            },
            {
              type: "table",
              headers: ["Shape", "Roll?", "Stack?"],
              rows: [
                ["⚽ Sphere", "✅ Yes", "❌ No"],
                ["🎲 Cube", "❌ No", "✅ Yes"],
                ["🥫 Cylinder", "✅ Yes (on its side)", "✅ Yes (standing up)"],
                ["🍦 Cone", "✅ Yes, in a circle", "❌ Not well"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "The secret 🤫",
              md: "**Curved** parts roll. **Flat** parts stack and slide!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which one can roll **and** stack?",
                  options: ["⚽ sphere", "🥫 cylinder", "🎲 cube"],
                  answer: 1,
                  explain: "A cylinder has curved sides to roll and flat ends to stack!",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "A cube has **6** flat faces, **12** edges and **8** corners! 🎲",
            },
          ],
          flashcards: [
            { front: "⚽ Roll or stack?", back: "**Roll!**" },
            { front: "🎲 Roll or stack?", back: "**Stack!**" },
            { front: "🥫 Roll or stack?", back: "**Both!**" },
            { front: "How many faces on a cube?", back: "**6** faces" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "A sphere can roll.",
              answer: true,
              explain: "A sphere is round all over, so it rolls! ⚽",
            },
            {
              kind: "truefalse",
              q: "A cube rolls easily.",
              answer: false,
              explain: "A cube has flat faces. It slides and stacks, but doesn't roll.",
            },
            {
              kind: "numeric",
              q: "How many faces does a cube have? 🎲",
              answer: 6,
              explain: "Like a dice: 1, 2, 3, 4, 5, 6 — **6** faces!",
            },
            {
              kind: "mcq",
              q: "Which is best for building a tall tower?",
              options: ["⚽⚽⚽", "📦📦📦", "🍦🍦🍦"],
              answer: 1,
              explain: "Boxes have flat faces. They stack well! 📦",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "colours",
      title: "Colours",
      icon: "🌈",
      description: "Name the colours of the rainbow and mix new ones.",
      lessons: [
        {
          slug: "rainbow-colours",
          title: "Rainbow Colours",
          summary: "Red, orange, yellow, green, blue... and more!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🌈", caption: "A rainbow has 7 colours!" },
            {
              type: "text",
              md: "After rain, the sun can make a **rainbow**! ☀️🌧️\n\nIt has **7** colours, always in the same order.",
            },
            {
              type: "list",
              ordered: true,
              items: ["🔴 Red", "🟠 Orange", "🟡 Yellow", "🟢 Green", "🔵 Blue", "🟣 Indigo (dark blue-purple)", "💜 Violet"],
            },
            {
              type: "table",
              headers: ["Colour", "Things"],
              rows: [
                ["🔴 Red", "🍓 strawberry, 🍎 apple"],
                ["🟡 Yellow", "🍌 banana, 🌻 sunflower"],
                ["🟢 Green", "🐸 frog, 🥦 broccoli"],
                ["🔵 Blue", "🐳 whale, 💧 water"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What colour is a banana? 🍌",
                  options: ["🔴 Red", "🟡 Yellow", "🔵 Blue"],
                  answer: 1,
                  explain: "Bananas are **yellow**! 🍌",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "You can only see a rainbow when the sun is **behind** you! ☀️🧍🌈",
            },
          ],
          flashcards: [
            { front: "🍓", back: "**Red**" },
            { front: "🥦", back: "**Green**" },
            { front: "🍊", back: "**Orange**" },
            { front: "🌈 How many colours?", back: "**7** colours" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What colour is a frog 🐸?",
              options: ["Green", "Pink", "Black"],
              answer: 0,
              explain: "This frog is **green**! 🐸",
            },
            {
              kind: "numeric",
              q: "How many colours are in a rainbow? 🌈",
              answer: 7,
              explain: "Red, orange, yellow, green, blue, indigo, violet — **7**!",
            },
            {
              kind: "order",
              q: "Put the first 4 rainbow colours in order.",
              items: ["Red", "Orange", "Yellow", "Green"],
              explain: "Red, orange, yellow, green... then blue, indigo, violet! 🌈",
            },
            {
              kind: "truefalse",
              q: "The first colour of a rainbow is red.",
              answer: true,
              explain: "Yes! Red is on the outside of the rainbow.",
            },
          ],
        },
        {
          slug: "mixing-colours",
          title: "Mixing Colours",
          summary: "Mix two colours to make a brand-new one!",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🖌️🎨", caption: "Let's be painters!" },
            {
              type: "text",
              md: "Three paint colours are **primary** colours:\n\n🔴 **Red**, 🟡 **Yellow**, 🔵 **Blue**\n\nMix two together to make a **new** colour! ✨",
            },
            {
              type: "table",
              headers: ["Mix", "Makes"],
              rows: [
                ["🔴 Red + 🟡 Yellow", "🟠 **Orange**"],
                ["🟡 Yellow + 🔵 Blue", "🟢 **Green**"],
                ["🔵 Blue + 🔴 Red", "🟣 **Purple**"],
              ],
            },
            {
              type: "widget",
              widget: "color-mix",
              caption: "Mix the paints and see what you get! 🎨",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "🟡 + 🔵 = ?",
                  options: ["🟠", "🟢", "🟣"],
                  answer: 1,
                  explain: "Yellow and blue make **green**! 🟢",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Lighter and darker 🌗",
              md: "Add **white** to make a colour lighter. Red + white = **pink**! 🩷\n\nAdd **black** to make it darker.",
            },
            { type: "keypoints", items: ["Primary colours: red, yellow, blue.", "Mix two to make orange, green or purple.", "White makes colours lighter."] },
          ],
          flashcards: [
            { front: "🔴 + 🟡", back: "🟠 **Orange**" },
            { front: "🟡 + 🔵", back: "🟢 **Green**" },
            { front: "🔵 + 🔴", back: "🟣 **Purple**" },
            { front: "🔴 + ⚪", back: "🩷 **Pink**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "🔴 Red + 🟡 Yellow = ?",
              options: ["🟠 Orange", "🟢 Green", "🟣 Purple"],
              answer: 0,
              explain: "Red and yellow make **orange**! 🍊",
            },
            {
              kind: "mcq",
              q: "🔵 Blue + 🔴 Red = ?",
              options: ["🟢 Green", "🟣 Purple", "🟤 Brown"],
              answer: 1,
              explain: "Blue and red make **purple**! 🍇",
            },
            {
              kind: "multi",
              q: "Tap the **primary** colours.",
              options: ["🔴 Red", "🟢 Green", "🟡 Yellow", "🔵 Blue"],
              answers: [0, 2, 3],
              explain: "Red, yellow and blue are primary. Green is a mix!",
            },
            {
              kind: "truefalse",
              q: "Adding white makes a colour darker.",
              answer: false,
              explain: "White makes it **lighter**. Black makes it darker.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "patterns-and-positions",
      title: "Patterns, Sizes & Places",
      icon: "🧩",
      description: "Repeat patterns, compare sizes and say where things are.",
      lessons: [
        {
          slug: "pattern-power",
          title: "Pattern Power",
          summary: "What comes next? Find the repeat!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🔴🔵🔴🔵🔴❓", caption: "What comes next?" },
            {
              type: "text",
              md: "A **pattern** repeats again and again. 🔁\n\n🍎🍌🍎🍌🍎🍌\n\nApple, banana, apple, banana!",
            },
            {
              type: "table",
              headers: ["Pattern", "Next"],
              rows: [
                ["🔴🔵🔴🔵🔴", "🔵"],
                ["⭐⭐🌙⭐⭐🌙⭐⭐", "🌙"],
                ["🐶🐱🐭🐶🐱", "🐭"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Clap it out 👏",
              md: "Say the pattern out loud. Clap on each one. You'll hear the repeat!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What comes next? 🟢🟡🟢🟡🟢 ___",
                  options: ["🟢", "🟡", "🔴"],
                  answer: 1,
                  explain: "Green, yellow, green, yellow... **yellow**! 🟡",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Zebras 🦓 and tigers 🐯 have stripy **patterns** on their fur!",
            },
          ],
          flashcards: [
            { front: "🔺⚪🔺⚪ ...", back: "Next: **🔺**" },
            { front: "🌞🌙🌞🌙 ...", back: "Next: **🌞**" },
            { front: "What is a pattern?", back: "Something that **repeats**! 🔁" },
            { front: "🦓", back: "Stripes are a **pattern**!" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What comes next? 🍎🍌🍎🍌 ___",
              options: ["🍎", "🍌", "🍇"],
              answer: 0,
              explain: "Apple, banana, apple, banana, **apple**!",
            },
            {
              kind: "mcq",
              q: "What comes next? 🐶🐱🐭🐶🐱 ___",
              options: ["🐶", "🐱", "🐭"],
              answer: 2,
              explain: "Dog, cat, mouse — repeat! Next is **🐭**.",
            },
            {
              kind: "mcq",
              q: "What comes next? ⭐⭐🌙⭐⭐ ___",
              options: ["⭐", "🌙"],
              answer: 1,
              explain: "Star, star, moon! Next is **🌙**.",
            },
          ],
        },
        {
          slug: "big-and-small",
          title: "Big and Small",
          summary: "Tall, short, long, heavy — compare sizes!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🦒🐁", caption: "A giraffe is tall. A mouse is short!" },
            {
              type: "text",
              md: "Let's **compare**! ⚖️\n\nAn elephant 🐘 is **big**. An ant 🐜 is **small**.",
            },
            {
              type: "table",
              headers: ["Word", "Opposite", "Example"],
              rows: [
                ["**Big**", "Small", "🐘 big, 🐜 small"],
                ["**Tall**", "Short", "🦒 tall, 🐁 short"],
                ["**Long**", "Short", "🐍 long snake, 🐛 short worm"],
                ["**Heavy**", "Light", "🪨 heavy rock, 🪶 light feather"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which is **heavier**?",
                  options: ["🪶 feather", "🪨 rock"],
                  answer: 1,
                  explain: "A rock is **heavy**. A feather is light!",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "The **blue whale** 🐳 is the biggest animal that has ever lived!",
            },
            { type: "keypoints", items: ["Big ↔ small.", "Tall ↔ short.", "Heavy ↔ light."] },
          ],
          flashcards: [
            { front: "🐘 vs 🐜", back: "🐘 is **big**, 🐜 is **small**" },
            { front: "🦒", back: "So **tall**!" },
            { front: "🪶", back: "So **light**!" },
            { front: "Opposite of heavy", back: "**Light**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which is the **tallest**?",
              options: ["🐁", "🦒", "🐈"],
              answer: 1,
              explain: "The giraffe 🦒 is the tallest!",
            },
            {
              kind: "mcq",
              q: "What is the opposite of **big**?",
              options: ["tall", "small", "heavy"],
              answer: 1,
              explain: "Big and **small** are opposites.",
            },
            {
              kind: "order",
              q: "Order from smallest to biggest.",
              items: ["🐜 ant", "🐭 mouse", "🐕 dog", "🐘 elephant"],
              explain: "Ant, mouse, dog, elephant — tiny to huge! 🐘",
            },
            {
              kind: "truefalse",
              q: "A feather is heavier than a rock.",
              answer: false,
              explain: "A rock is much heavier. Feathers are light! 🪶",
            },
          ],
        },
        {
          slug: "where-is-it",
          title: "Where Is It?",
          summary: "On, under, in, next to, in front, behind.",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🐱📦", caption: "Is the cat in the box or on the box?" },
            {
              type: "text",
              md: "Position words tell us **where** things are. 📍",
            },
            {
              type: "table",
              headers: ["Word", "Example"],
              rows: [
                ["**On**", "The cup is *on* the table. ☕"],
                ["**Under**", "The cat is *under* the bed. 🐱🛏️"],
                ["**In**", "The fish is *in* the bowl. 🐠"],
                ["**Next to**", "The bear sits *next to* the doll. 🧸🪆"],
                ["**Behind**", "The sun is *behind* the cloud. ⛅"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Play Simon Says! 🙋",
              md: "Put a toy **on** your head. Now **under** your chair. Now **next to** your foot!",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "⛅ The sun is ___ the cloud.",
                  options: ["behind", "on", "in"],
                  answer: 0,
                  explain: "The sun peeks from **behind** the cloud!",
                },
              ],
            },
            { type: "keypoints", items: ["On ⬆️, under ⬇️, in 📦.", "Next to ↔️ means beside.", "Behind means at the back."] },
          ],
          flashcards: [
            { front: "🐠 in the bowl", back: "**In**" },
            { front: "☕ on the table", back: "**On**" },
            { front: "🐱 under the bed", back: "**Under**" },
            { front: "Opposite of on top", back: "**Under**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "The goldfish lives ___ its bowl. 🐠",
              options: ["in", "on", "behind"],
              answer: 0,
              explain: "The goldfish swims **in** the bowl!",
            },
            {
              kind: "mcq",
              q: "Hat goes ___ your head. 🎩",
              options: ["under", "on", "behind"],
              answer: 1,
              explain: "A hat goes **on** your head!",
            },
            {
              kind: "truefalse",
              q: "*Under* is the opposite of *on top*.",
              answer: true,
              explain: "Yes! On top is up high, under is down below.",
            },
          ],
        },
      ],
    },
  ],
};
