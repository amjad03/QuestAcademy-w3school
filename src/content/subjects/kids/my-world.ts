import type { Subject } from "@/content/types";

export const myWorld: Subject = {
  slug: "my-world",
  title: "My World",
  world: "kids",
  icon: "🌍",
  colors: ["#56CCF2", "#6FCF97"],
  tagline: "Animals, plants, weather and ME — explore with Questy! 🦉",
  description:
    "Discover where animals live, how your amazing body and senses work, how plants grow, what the weather is doing, and the good habits that keep you healthy and safe.",
  levels: ["Ages 3–7"],
  stages: ["preprimary", "primary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "animals",
      title: "Animal Friends",
      icon: "🐾",
      description: "Animal sounds, baby animals and animal homes.",
      lessons: [
        {
          slug: "animal-sounds-and-babies",
          title: "Moo, Baa, Woof!",
          summary: "What do animals say? What are their babies called?",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🐄🐑🐶", caption: "Moo! Baa! Woof! Hello, animal friends!" },
            {
              type: "text",
              md: "Animals talk in their own way! 🗣️\n\nA cow says **moo**. A sheep says **baa**. What does a dog say?",
            },
            {
              type: "table",
              headers: ["Animal", "Says", "Baby is a..."],
              rows: [
                ["🐄 Cow", "Moo!", "calf"],
                ["🐑 Sheep", "Baa!", "lamb"],
                ["🐶 Dog", "Woof!", "puppy"],
                ["🐱 Cat", "Meow!", "kitten"],
                ["🐔 Hen", "Cluck!", "chick 🐥"],
                ["🦆 Duck", "Quack!", "duckling"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Who says **Quack**?",
                  options: ["🐄", "🦆", "🐱"],
                  answer: 1,
                  explain: "The duck says **quack quack**! 🦆",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "A baby frog is called a **tadpole**. It lives in water and has a tail — no legs at first! 🐸",
            },
            { type: "keypoints", items: ["Animals make different sounds.", "Baby cat = kitten, baby dog = puppy.", "Baby sheep = lamb."] },
          ],
          flashcards: [
            { front: "🐄", back: "Cow says **Moo!**" },
            { front: "🐑", back: "Sheep says **Baa!**" },
            { front: "🐱", back: "Cat says **Meow!** Baby: kitten" },
            { front: "🐶", back: "Dog says **Woof!** Baby: puppy" },
            { front: "🐸", back: "Baby frog: **tadpole**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Who says **Moo**?",
              options: ["🐄", "🐑", "🐔"],
              answer: 0,
              explain: "The cow says **moo**! 🐄",
            },
            {
              kind: "mcq",
              q: "A baby cat is a...",
              options: ["puppy", "kitten", "calf"],
              answer: 1,
              explain: "Baby cats are **kittens**. 🐱",
            },
            {
              kind: "truefalse",
              q: "A baby sheep is called a lamb.",
              answer: true,
              explain: "Yes! A baby sheep is a **lamb**. 🐑",
            },
            {
              kind: "mcq",
              q: "A baby hen is a...",
              options: ["🐥 chick", "🐑 lamb", "🐶 puppy"],
              answer: 0,
              explain: "Baby hens are **chicks**! Cheep cheep! 🐥",
            },
          ],
        },
        {
          slug: "animal-homes",
          title: "Animal Homes",
          summary: "Where do animals live?",
          minutes: 5,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🐦🪺", caption: "A bird lives in a cosy nest!" },
            {
              type: "text",
              md: "You live in a home. 🏠 Animals have homes too!\n\nThe place where an animal lives is its **habitat**.",
            },
            {
              type: "table",
              headers: ["Animal", "Home"],
              rows: [
                ["🐦 Bird", "nest 🪺"],
                ["🐝 Bee", "hive"],
                ["🐰 Rabbit", "burrow (a hole underground)"],
                ["🕷️ Spider", "web 🕸️"],
                ["🐟 Fish", "water — ponds, rivers, the sea 🌊"],
                ["🐫 Camel", "hot, sandy desert 🏜️"],
                ["🐻‍❄️ Polar bear", "the icy Arctic 🧊"],
                ["🐒 Monkey", "rainforest trees 🌳"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Where does a bee live? 🐝",
                  options: ["hive", "nest", "web"],
                  answer: 0,
                  explain: "Bees live in a **hive** and make honey! 🍯",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "A camel can go many days without drinking. That's why it can live in the dry desert! 🐫🏜️",
            },
            { type: "keypoints", items: ["An animal's home is its **habitat**.", "Birds → nest, bees → hive.", "Polar bears love the cold! 🧊"] },
          ],
          flashcards: [
            { front: "🐝", back: "lives in a **hive**" },
            { front: "🕷️", back: "lives in a **web**" },
            { front: "🐰", back: "lives in a **burrow**" },
            { front: "🐻‍❄️", back: "lives in the icy **Arctic**" },
            { front: "🐫", back: "lives in the **desert**" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Where does a fish live? 🐟",
              options: ["🌊 water", "🏜️ desert", "🌳 tree"],
              answer: 0,
              explain: "Fish live in **water**!",
            },
            {
              kind: "mcq",
              q: "Who lives in the cold, icy Arctic?",
              options: ["🐫", "🐻‍❄️", "🐒"],
              answer: 1,
              explain: "The **polar bear** has thick fur to keep warm. 🐻‍❄️",
            },
            {
              kind: "truefalse",
              q: "A rabbit lives in a burrow.",
              answer: true,
              explain: "Yes! A burrow is a hole under the ground. 🐰",
            },
            {
              kind: "fill",
              q: "A spider makes a ___ 🕸️",
              answer: ["web"],
              explain: "Spiders spin **webs**!",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "my-body",
      title: "My Body & Me",
      icon: "🧒",
      description: "Body parts, five senses and good habits.",
      lessons: [
        {
          slug: "parts-of-my-body",
          title: "Parts of My Body",
          summary: "Head, shoulders, knees and toes!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🧒", caption: "Head, shoulders, knees and toes!" },
            {
              type: "text",
              md: "Your body is **amazing**! 💪\n\nLet's touch each part as we say it.",
            },
            {
              type: "table",
              headers: ["Part", "What it does"],
              rows: [
                ["👀 Eyes", "help you **see**"],
                ["👂 Ears", "help you **hear**"],
                ["👃 Nose", "helps you **smell** and breathe"],
                ["👄 Mouth", "helps you **eat** and talk"],
                ["✋ Hands", "help you **hold** and touch"],
                ["🦵 Legs", "help you **walk**, run and jump"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What do we use to **hear**?",
                  options: ["👀", "👂", "🦶"],
                  answer: 1,
                  explain: "We hear with our **ears**! 👂",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Your **heart** is about the size of your **fist**. It beats all day and all night! ❤️",
            },
            { type: "keypoints", items: ["Eyes see, ears hear.", "Legs help us move.", "Your heart never stops working! ❤️"] },
          ],
          flashcards: [
            { front: "👀", back: "**Eyes** — for seeing" },
            { front: "👃", back: "**Nose** — for smelling" },
            { front: "✋", back: "**Hand** — 5 fingers!" },
            { front: "❤️", back: "**Heart** — about the size of your fist" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many fingers on one hand? ✋",
              answer: 5,
              explain: "Count them: **5** fingers!",
            },
            {
              kind: "mcq",
              q: "What do we use to **walk**?",
              options: ["👂 ears", "🦵 legs", "👃 nose"],
              answer: 1,
              explain: "Our **legs** help us walk and jump! 🦵",
            },
            {
              kind: "truefalse",
              q: "We see with our eyes.",
              answer: true,
              explain: "Yes! **Eyes** are for seeing. 👀",
            },
          ],
        },
        {
          slug: "five-senses",
          title: "My Five Senses",
          summary: "See, hear, smell, taste and touch!",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "👀👂👃👅✋", caption: "Five senses help us explore!" },
            {
              type: "text",
              md: "You have **5 senses**. They tell you about the world! 🌍",
            },
            {
              type: "table",
              headers: ["Sense", "Body part", "Try it!"],
              rows: [
                ["**Sight**", "👀 eyes", "See a rainbow 🌈"],
                ["**Hearing**", "👂 ears", "Hear a bird sing 🐦"],
                ["**Smell**", "👃 nose", "Smell a flower 🌸"],
                ["**Taste**", "👅 tongue", "Taste a lemon 🍋 — sour!"],
                ["**Touch**", "✋ skin", "Feel a soft teddy 🧸"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which sense tells you a lemon is **sour**? 🍋",
                  options: ["Hearing", "Taste", "Sight"],
                  answer: 1,
                  explain: "Your **tongue** tastes sour, sweet and salty! 👅",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Your nose helps you taste! Food tastes less strong when you have a blocked nose. 🤧",
            },
            { type: "keypoints", items: ["We have **5** senses.", "Sight, hearing, smell, taste, touch.", "Skin is for touch!"] },
          ],
          flashcards: [
            { front: "👅", back: "**Taste** — sweet, sour, salty!" },
            { front: "✋", back: "**Touch** — soft, rough, hot, cold" },
            { front: "👂", back: "**Hearing** — loud and quiet" },
            { front: "How many senses?", back: "**5** senses!" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many senses do we have?",
              answer: 5,
              explain: "Sight, hearing, smell, taste and touch — **5**!",
            },
            {
              kind: "mcq",
              q: "You smell a flower 🌸 with your...",
              options: ["👃 nose", "👂 ear", "✋ hand"],
              answer: 0,
              explain: "We smell with our **nose**!",
            },
            {
              kind: "mcq",
              q: "Which sense helps you feel a soft teddy? 🧸",
              options: ["Taste", "Touch", "Hearing"],
              answer: 1,
              explain: "Your skin feels things — that's **touch**!",
            },
            {
              kind: "truefalse",
              q: "We taste with our ears.",
              answer: false,
              explain: "We taste with our **tongue**! 👅",
            },
          ],
        },
        {
          slug: "healthy-and-safe",
          title: "Healthy and Safe",
          summary: "Good habits keep us strong and safe.",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🧼🪥🥦😴", caption: "Wash, brush, eat well and sleep!" },
            {
              type: "text",
              md: "Good **habits** help your body stay healthy! 💪",
            },
            {
              type: "list",
              items: [
                "🧼 **Wash your hands** with soap — before eating and after the toilet.",
                "🪥 **Brush your teeth** in the morning and at bedtime.",
                "🥦 **Eat** fruit and vegetables.",
                "💧 **Drink** water.",
                "🏃 **Play** and move every day.",
                "😴 **Sleep** well at night.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Hand-washing song 🎵",
              md: "Scrub your hands while you sing *Happy Birthday* **two times**. That's about 20 seconds!",
            },
            {
              type: "heading",
              text: "Stay safe! 🦺",
            },
            {
              type: "list",
              items: [
                "🚦 Cross the road with a grown-up. **Stop, look and listen!**",
                "🔥 Never touch hot things like a stove or a fire.",
                "💊 Don't eat medicine unless a grown-up gives it to you.",
                "🚗 Wear your seat belt in the car.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "When should you wash your hands?",
                  options: ["🍽️ Before eating", "Never", "Only on birthdays"],
                  answer: 0,
                  explain: "Wash your hands **before eating** to wash germs away! 🧼",
                },
              ],
            },
          ],
          flashcards: [
            { front: "🧼", back: "Wash hands for about **20 seconds**!" },
            { front: "🪥", back: "Brush teeth **morning and night**" },
            { front: "🚦", back: "**Stop, look and listen** before crossing" },
            { front: "🥦🍎", back: "Fruit and veggies keep you strong!" },
          ],
          quiz: [
            {
              kind: "truefalse",
              q: "We should brush our teeth at bedtime.",
              answer: true,
              explain: "Yes! Brush in the morning **and** at bedtime. 🪥",
            },
            {
              kind: "mcq",
              q: "Which snack is the healthiest?",
              options: ["🍭 lollipop", "🍎 apple", "🍩 donut"],
              answer: 1,
              explain: "An **apple** is full of good stuff! 🍎",
            },
            {
              kind: "order",
              q: "Put the road-safety steps in order.",
              items: ["Stop 🛑", "Look 👀", "Listen 👂", "Cross with a grown-up 🚶"],
              explain: "Stop, look, listen — then cross safely with a grown-up!",
            },
            {
              kind: "truefalse",
              q: "It is okay to touch a hot stove.",
              answer: false,
              explain: "No! Hot things can burn you. 🔥",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "plants",
      title: "Growing Plants",
      icon: "🌱",
      description: "Parts of a plant and what plants need to grow.",
      lessons: [
        {
          slug: "parts-of-a-plant",
          title: "Parts of a Plant",
          summary: "Roots, stem, leaves and flower!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "🌻", caption: "Hello, Sunny the sunflower!" },
            {
              type: "text",
              md: "A plant has **parts**, just like you! 🌿",
            },
            {
              type: "table",
              headers: ["Part", "Its job"],
              rows: [
                ["**Roots** 🟫", "hold the plant in the soil and drink water"],
                ["**Stem** 🌿", "holds the plant up and carries water"],
                ["**Leaves** 🍃", "use sunlight to make food"],
                ["**Flower** 🌸", "makes seeds for new plants"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which part drinks water from the soil?",
                  options: ["Roots", "Flower", "Leaves"],
                  answer: 0,
                  explain: "The **roots** soak up water! 💧",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "A **carrot** 🥕 is a root! When you eat a carrot, you eat a plant's root.",
            },
            { type: "keypoints", items: ["Roots drink water.", "Stems hold the plant up.", "Leaves make food from sunlight."] },
          ],
          flashcards: [
            { front: "🥕", back: "A carrot is a **root**!" },
            { front: "🍃", back: "**Leaves** make food from sunlight" },
            { front: "🌸", back: "**Flowers** make seeds" },
            { front: "🌿", back: "The **stem** holds the plant up" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which part holds the plant up?",
              options: ["Stem", "Seed", "Root"],
              answer: 0,
              explain: "The **stem** stands tall and holds the plant up.",
            },
            {
              kind: "truefalse",
              q: "Leaves use sunlight to make food.",
              answer: true,
              explain: "Yes! Leaves are the plant's kitchen. 🍃☀️",
            },
            {
              kind: "order",
              q: "Order the parts from bottom to top.",
              items: ["Roots", "Stem", "Leaves", "Flower"],
              explain: "Roots under the soil, then stem, leaves and the flower on top! 🌻",
            },
          ],
        },
        {
          slug: "how-plants-grow",
          title: "From Seed to Plant",
          summary: "What does a seed need to grow?",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🌰➡️🌱➡️🌳", caption: "A tiny seed can grow into a big tree!" },
            {
              type: "text",
              md: "Every plant starts as a little **seed**. 🌰\n\nGive it what it needs, and it will grow!",
            },
            {
              type: "list",
              items: ["💧 **Water**", "☀️ **Sunlight**", "🌬️ **Air**", "🟫 **Soil** (most plants)"],
            },
            {
              type: "list",
              ordered: true,
              items: ["Plant the seed in soil. 🌰", "Water it. 💧", "A tiny shoot pops up! 🌱", "It grows leaves. 🌿", "It grows a flower! 🌷"],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which one does a plant need to grow?",
                  options: ["☀️ sunlight", "🍫 chocolate", "📺 TV"],
                  answer: 0,
                  explain: "Plants need **sunlight**, water and air! ☀️",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Grow a bean! 🫘",
              md: "Put a bean on wet cotton wool in a cup. Keep it by a window. Watch it sprout in a few days!",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Some trees live for **thousands** of years! 🌳",
            },
          ],
          flashcards: [
            { front: "🌰", back: "A **seed** — where a plant starts" },
            { front: "🌱", back: "A **shoot** — a baby plant" },
            { front: "What do plants need?", back: "💧 water, ☀️ sun, 🌬️ air" },
            { front: "🌳", back: "A seed can grow into a **tree**!" },
          ],
          quiz: [
            {
              kind: "order",
              q: "How does a plant grow? Put it in order.",
              items: ["🌰 seed", "🌱 shoot", "🌿 leaves", "🌷 flower"],
              explain: "Seed, shoot, leaves, flower! 🌷",
            },
            {
              kind: "multi",
              q: "Tap **everything** a plant needs.",
              options: ["💧 water", "☀️ sunlight", "🧸 toys", "🌬️ air"],
              answers: [0, 1, 3],
              explain: "Water, sunlight and air! Plants don't need toys. 😄",
            },
            {
              kind: "truefalse",
              q: "A plant can grow in a dark cupboard forever.",
              answer: false,
              explain: "Plants need **sunlight** to make food. ☀️",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "weather-and-seasons",
      title: "Weather & Seasons",
      icon: "⛅",
      description: "Sunny, rainy, windy — and the four seasons.",
      lessons: [
        {
          slug: "whats-the-weather",
          title: "What's the Weather?",
          summary: "Sunny, rainy, cloudy, windy and snowy!",
          minutes: 4,
          xp: 15,
          blocks: [
            { type: "illustration", emoji: "☀️🌧️❄️", caption: "What is the weather today?" },
            {
              type: "text",
              md: "Look out of the window! 🪟\n\nIs it sunny? Is it rainy? That's the **weather**.",
            },
            {
              type: "table",
              headers: ["Weather", "What to wear"],
              rows: [
                ["☀️ Sunny", "🧢 hat and sun cream"],
                ["🌧️ Rainy", "☂️ umbrella and 🥾 boots"],
                ["❄️ Snowy", "🧣 scarf, 🧤 gloves, warm coat"],
                ["💨 Windy", "🧥 a jacket — hold on to your hat!"],
                ["☁️ Cloudy", "a jumper, just in case"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "It is raining. What do you take? 🌧️",
                  options: ["☂️", "🕶️", "🩴"],
                  answer: 0,
                  explain: "An **umbrella** keeps you dry! ☂️",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "Every **snowflake** has **6** points — and no two look exactly the same! ❄️",
            },
            { type: "keypoints", items: ["Weather changes every day.", "Dress for the weather!", "Snowflakes have 6 points."] },
          ],
          flashcards: [
            { front: "☀️", back: "**Sunny** — wear a hat!" },
            { front: "🌧️", back: "**Rainy** — take an umbrella!" },
            { front: "❄️", back: "**Snowy** — wear gloves!" },
            { front: "💨", back: "**Windy** — great for kites! 🪁" },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which weather is best for flying a kite? 🪁",
              options: ["💨 windy", "❄️ snowy", "🌫️ foggy"],
              answer: 0,
              explain: "Wind lifts the kite up high! 🪁",
            },
            {
              kind: "mcq",
              q: "It's snowing! What do you wear?",
              options: ["🩳 shorts", "🧤 gloves", "👙 swimsuit"],
              answer: 1,
              explain: "**Gloves** keep your hands warm. 🧤",
            },
            {
              kind: "numeric",
              q: "How many points does a snowflake have? ❄️",
              answer: 6,
              explain: "Snowflakes have **6** points!",
            },
          ],
        },
        {
          slug: "four-seasons",
          title: "The Four Seasons",
          summary: "Spring, summer, autumn and winter.",
          minutes: 5,
          xp: 20,
          blocks: [
            { type: "illustration", emoji: "🌷☀️🍂⛄", caption: "Spring, summer, autumn, winter!" },
            {
              type: "text",
              md: "In many places, a year has **4 seasons**. 🗓️\n\nEach one feels different!",
            },
            {
              type: "table",
              headers: ["Season", "What happens"],
              rows: [
                ["🌷 **Spring**", "Flowers bloom, baby animals are born 🐣"],
                ["☀️ **Summer**", "Hot and sunny, long days 🏖️"],
                ["🍂 **Autumn**", "Leaves turn orange and fall 🍁"],
                ["⛄ **Winter**", "Cold, maybe snow! ❄️"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "When do leaves fall off trees? 🍂",
                  options: ["Spring", "Autumn", "Summer"],
                  answer: 1,
                  explain: "In **autumn**, leaves change colour and fall! 🍁",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Around the world 🌍",
              md: "Some hot places have a **rainy season** and a **dry season** instead. Autumn is called **fall** in America!",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Did you know?",
              md: "When it is summer in England, it is winter in Australia! 🇦🇺❄️",
            },
          ],
          flashcards: [
            { front: "🌷", back: "**Spring** — flowers bloom" },
            { front: "☀️🏖️", back: "**Summer** — hot and sunny" },
            { front: "🍂", back: "**Autumn** — leaves fall" },
            { front: "⛄", back: "**Winter** — cold and snowy" },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many seasons are there?",
              answer: 4,
              explain: "Spring, summer, autumn and winter — **4**!",
            },
            {
              kind: "order",
              q: "Put the seasons in order, starting with spring.",
              items: ["Spring 🌷", "Summer ☀️", "Autumn 🍂", "Winter ⛄"],
              explain: "Spring, summer, autumn, winter — then spring again! 🔁",
            },
            {
              kind: "mcq",
              q: "When would you build a snowman? ⛄",
              options: ["Summer", "Winter", "Spring"],
              answer: 1,
              explain: "**Winter** is cold enough for snow! ❄️",
            },
            {
              kind: "truefalse",
              q: "Flowers bloom in spring.",
              answer: true,
              explain: "Yes! Spring is full of flowers. 🌷",
            },
          ],
        },
      ],
    },
  ],
};
