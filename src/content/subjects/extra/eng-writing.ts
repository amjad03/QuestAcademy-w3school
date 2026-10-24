import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "english";
/** Syllabus family: chapter titles below are matched against `eng` rows in src/content/syllabus/. */
export const family = "eng";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* 1. Editing and Omission (CBSE)                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-editing-omission",
    title: "Editing and Omission",
    icon: "🔍",
    description: "Find the one error in each line, or the one missing word, and correct it in the board format.",
    lessons: [
      {
        slug: "editing-and-omission-errors",
        title: "Spot the Error, Find the Missing Word",
        summary: "How to edit a short passage line by line: the usual error types, the answer format, and how to find an omitted word.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "📝",
            caption: "Before you send a message to your class group, you read it once more and fix 'there' to 'their'. That quick check is editing.",
          },
          {
            type: "text",
            md: "In an **editing** task you get a short passage. Each line (or each marked sentence) has **one error**. You must find the wrong word and write the correct word.\n\nIn an **omission** task, one word has been **left out** of each line. You must find where the gap is and supply the missing word.\n\nThe errors are almost always from the grammar you already know: tenses, subject–verb agreement, articles, prepositions, pronouns and determiners.",
          },
          {
            type: "table",
            headers: ["Error type", "Wrong", "Correct"],
            rows: [
              ["**Tense** (time of the action)", "Yesterday she *go* to the market.", "Yesterday she **went** to the market."],
              ["**Subject–verb agreement** (verb must match its subject)", "There *was* many stalls.", "There **were** many stalls."],
              ["**Article** (a, an, the)", "He is *a* honest man.", "He is **an** honest man."],
              ["**Preposition** (in, on, at, for...)", "She is good *in* maths.", "She is good **at** maths."],
              ["**Pronoun / possessive**", "They lost *there* bags.", "They lost **their** bags."],
              ["**Determiner** (much, many, few, little...)", "I have *much* friends.", "I have **many** friends."],
            ],
          },
          {
            type: "example",
            title: "Editing a passage",
            problem: "Each line has one error. Write the incorrect word and the correction.\n\n(a) Last Sunday, Meena go to the flower show at Lalbagh.\n(b) She was amazed to see an model of a temple made of roses.\n(c) There was many stalls selling plants and seeds.\n(d) Her brother bought a money plant for there balcony.",
            steps: [
              "Line (a): 'Last Sunday' tells us the action is in the past, so the verb must be in the past tense: **go → went**.",
              "Line (b): 'model' begins with a consonant sound, so it takes **a**, not 'an': **an → a**.",
              "Line (c): the subject 'many stalls' is plural, so the verb must be plural: **was → were**.",
              "Line (d): the balcony belongs to them, so we need the possessive **their**, not the place word 'there': **there → their**.",
            ],
            answer: "(a) go → went  (b) an → a  (c) was → were  (d) there → their",
          },
          {
            type: "callout",
            tone: "exam",
            title: "How CBSE marks editing",
            md: "Each correct answer earns its mark only when you write **the exact incorrect word and its correction**, in the format the question asks for (usually 'incorrect — correct' in a table or against the line number).\n\nDo not rewrite the whole sentence, do not overwrite letters, and do not 'correct' a word that was already right. If the question is in MCQ form, read every option in the sentence before you choose.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Find the error: 'Each of the boys have a library card.'",
                options: ["Each → All", "have → has", "a → the", "card → cards"],
                answer: 1,
                explain: "The subject is **each** (one at a time), which is singular, so the verb is **has**. 'of the boys' does not change the subject.",
              },
            ],
          },
          { type: "heading", text: "Omission: the missing word" },
          {
            type: "text",
            md: "Read the line aloud in your head. The place where it 'trips' is usually the gap. The missing word is very often a **preposition**, an **article**, a **helping verb** (is, has, was) or a **pronoun**.\n\nIn the answer, write the **word before** the gap, the **missing word**, and the **word after** the gap, so the examiner can see exactly where it goes.",
          },
          {
            type: "example",
            title: "Finding an omitted word",
            problem: "One word is missing in each line. Write the word before, the missing word and the word after.\n\n(a) My grandmother lives a small village near Mysuru.\n(b) Every summer we visit her and stay two weeks.\n(c) She tells us stories the old days.",
            steps: [
              "(a) 'lives a small village' trips: a place needs a preposition. **lives — in — a**.",
              "(b) 'stay two weeks' is a length of time, which takes **for**: **stay — for — two**.",
              "(c) 'stories the old days' needs a word for 'on the subject of': **stories — about — the** (**of** is also accepted).",
            ],
            answer: "(a) lives — in — a  (b) stay — for — two  (c) stories — about/of — the",
          },
          {
            type: "mistake",
            wrong: "If a sentence looks a little odd, I can change two or three words to make it sound better.",
            right: "Change only **one** word per line (or add only one word for omission), and keep the writer's meaning.",
            why: "The task tests whether you can find the single planted error. Extra changes look like guessing, may create new errors, and the examiner checks only the planted word.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "What kind of error is in each sentence?",
              groups: ["Tense", "Subject–verb agreement", "Preposition"],
              items: [
                { text: "She has finished her homework yesterday.", group: 0, hint: "'Yesterday' is a finished past time, so use the simple past: 'finished'." },
                { text: "The news are very good today.", group: 1, hint: "'News' is singular: 'The news is'." },
                { text: "We reached to the station late.", group: 2, hint: "'Reach' takes no 'to': 'We reached the station'." },
                { text: "Neither Ravi nor his friends was ready.", group: 1, hint: "With 'neither...nor', the verb agrees with the nearer subject, 'friends': 'were'." },
                { text: "I am living here since 2019.", group: 0, hint: "For an action that started in the past and continues, use the present perfect continuous: 'have been living'." },
                { text: "He is angry on his brother.", group: 2, hint: "We are angry **with** a person." },
              ],
              explain: "Ask three quick questions for every line: Is the **time** right? Does the **verb match the subject**? Is the **small word** (article or preposition) right?",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "One word is missing: 'The train was late because the heavy rain.' The missing word is ___ (after 'because').",
                answer: ["of"],
                explain: "'because' joins a clause; before a noun phrase like 'the heavy rain' we need **because of**.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Editing: one error per line. Omission: one missing word per line.",
              "Check tense, subject–verb agreement, articles, prepositions, pronouns and determiners.",
              "Write the incorrect word and correction exactly in the format asked.",
              "For omission, show the word before and after the gap.",
              "Change only one word; never change the meaning.",
            ],
          },
        ],
        flashcards: [
          { front: "Editing task", back: "Find the one wrong word in each line and write it with its correction." },
          { front: "Omission task", back: "Find where one word has been left out and supply it, with the word before and after the gap." },
          { front: "a or an?", back: "Decided by the first **sound**: an hour, an honest man, a university, a one-rupee coin." },
          { front: "Each / every + verb", back: "Always singular: 'Each of the girls **has** a bag.'" },
          { front: "Most common missing words", back: "Prepositions, articles, helping verbs (is, has, was) and pronouns." },
          { front: "Neither...nor / either...or", back: "The verb agrees with the subject nearer to it: 'Neither the teacher nor the students **were** late.'" },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Find the correction: 'She is one of the best player in the team.'",
            options: ["is → are", "best → better", "player → players", "in → of"],
            answer: 2,
            explain: "'One of the...' is always followed by a plural noun: **one of the best players**.",
          },
          {
            kind: "mcq",
            q: "Which line has an error in the article?",
            options: ["He waited for an hour.", "She is a European.", "It was an unique idea.", "He is an MLA."],
            answer: 2,
            explain: "'Unique' begins with a 'yoo' (consonant) sound, so it is **a unique idea**. 'An hour' and 'an MLA' begin with vowel sounds, and 'a European' with a 'yoo' sound.",
            difficulty: 2,
            hint: "Say each word aloud. Listen to the first sound, not the first letter.",
          },
          {
            kind: "fill",
            q: "Correct the error: 'He did not came to school today.' did not ___",
            answer: ["come"],
            explain: "After **did / did not**, we use the base form of the verb: **did not come**.",
          },
          {
            kind: "truefalse",
            q: "In an editing task, it is a good idea to rewrite the whole sentence with all improvements.",
            answer: false,
            explain: "Write only the incorrect word and its correction in the given format. Extra changes waste time and can cost marks.",
          },
          {
            kind: "multi",
            q: "Which sentences are correct?",
            options: ["The furniture in this room is new.", "Mathematics are my favourite subject.", "Ten kilometres is a long walk.", "The police has arrived."],
            answers: [0, 2],
            explain: "'Furniture' is uncountable (singular); 'Ten kilometres' is one distance (singular). 'Mathematics' **is**; 'the police' is plural: **have arrived**.",
            difficulty: 3,
            hint: "Some nouns look plural but are singular, and one looks singular but is plural.",
          },
          {
            kind: "fill",
            q: "One word is missing: 'My father is fond reading old novels.' The missing word is ___.",
            answer: ["of"],
            explain: "The fixed phrase is **fond of**: 'fond — of — reading'.",
          },
          {
            kind: "order",
            q: "Put the steps for an editing task in a good order.",
            items: [
              "Read the whole passage once for meaning",
              "Check each line for tense and subject–verb agreement",
              "Check the small words: articles, prepositions, pronouns",
              "Write the incorrect word and correction in the given format",
            ],
            explain: "Read for meaning first, then check the big things (verbs), then the small words, and finally write neatly in the asked format.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. Transformation of Sentences (ICSE)                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-transformation-of-sentences",
    title: "Transformation of Sentences",
    icon: "🔄",
    description: "Rewrite a sentence in a new pattern (No sooner, Hardly, too...to, Unless, Not only) without changing its meaning.",
    lessons: [
      {
        slug: "rewriting-without-changing-meaning",
        title: "Rewriting Without Changing the Meaning",
        summary: "The common ICSE transformation patterns, the word pairs they need, and how to check that your meaning stayed the same.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "You can say the same thing in many ways. 'As soon as the bell rang, the children ran out' and 'No sooner had the bell rung than the children ran out' mean the same.\n\nIn **transformation of sentences**, the question gives a sentence and a starting word or an instruction. You rewrite the sentence in that new pattern **without changing its meaning**.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "The ICSE instruction",
            md: "ICSE (Paper 1, the grammar question) usually says: *Rewrite the following sentences according to the instructions given after each. Make other changes that may be necessary, but do not change the meaning of each sentence.*\n\nEach sentence is marked right or wrong as a whole. A wrong tense, a missing word of a pair (such as 'than'), or a spelling error usually costs that sentence's mark, so check every word.",
          },
          {
            type: "table",
            headers: ["Pattern", "Original", "Transformed"],
            rows: [
              ["As soon as → **No sooner...than**", "As soon as he reached home, it began to rain.", "No sooner had he reached home than it began to rain."],
              ["As soon as → **Hardly / Scarcely...when**", "As soon as she sat down, the phone rang.", "Hardly had she sat down when the phone rang."],
              ["**too...to** → **so...that...not**", "The tea is too hot to drink.", "The tea is so hot that it cannot be drunk. / ...that we cannot drink it."],
              ["If...not → **Unless**", "If you do not hurry, you will miss the bus.", "Unless you hurry, you will miss the bus."],
              ["Although → **In spite of / Despite**", "Although it was raining, the match went on.", "In spite of the rain, the match went on."],
              ["Superlative → **Comparative / Positive**", "Mount Everest is the highest peak in the world.", "Mount Everest is higher than any other peak in the world. / No other peak in the world is as high as Mount Everest."],
              ["Begin with **Never / Seldom** (inversion)", "I have never seen such a big crowd.", "Never have I seen such a big crowd."],
              ["**Not only...but also**", "She sings and she dances too.", "She not only sings but also dances. / Not only does she sing but she also dances."],
            ],
          },
          {
            type: "example",
            title: "Building a 'No sooner' sentence",
            problem: "Begin: *No sooner...*\n\nAs soon as the guests arrived, the lights went out.",
            steps: [
              "Find the two actions: the guests arrived (first), the lights went out (second).",
              "'No sooner' is negative, so the helping verb comes **before** the subject (inversion): **No sooner had the guests arrived**.",
              "Use the **past perfect** (had + past participle) for the first action: 'had arrived', not 'did arrive'.",
              "Join with **than** (never 'when' or 'then') and keep the second action in the simple past: **than the lights went out**.",
              "Check: same two actions, same order, same meaning.",
            ],
            answer: "No sooner had the guests arrived than the lights went out.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Rewrite using 'Unless': 'If you do not water the plant, it will die.'",
                options: [
                  "Unless you do not water the plant, it will die.",
                  "Unless you water the plant, it will die.",
                  "Unless you water the plant, it will not die.",
                  "Unless the plant dies, you will water it.",
                ],
                answer: 1,
                explain: "**Unless** already means 'if not'. Adding 'not' again creates a double negative and reverses the meaning.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "No sooner did he reached the station when the train left.",
            right: "No sooner **had** he **reached** the station **than** the train left.",
            why: "Students mix two patterns. **No sooner** pairs with **than**; **Hardly / Scarcely** pair with **when**. After 'did' the verb is the base form, so 'did reached' is wrong anyway; the standard form uses the past perfect 'had reached'.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each opening to its partner word.",
              pairs: [
                ["No sooner...", "...than"],
                ["Hardly...", "...when"],
                ["Not only...", "...but also"],
                ["Neither...", "...nor"],
                ["So (hot)...", "...that"],
              ],
              explain: "These pairs never change. If your sentence starts with one half, the other half must appear, or the transformation is marked wrong.",
            },
          },
          {
            type: "text",
            md: "**Three checks before you move on:**\n\n1. Is the **tense** the same as in the original (unless the pattern needs a change, like 'had arrived')?\n2. Did you keep **every piece of information**: names, numbers, places?\n3. Does the new sentence say **exactly the same thing**, not the opposite?",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "Complete: 'He is too weak to walk.' → 'He is so weak that he ___ walk.'",
                answer: ["cannot", "can not", "can't"],
                explain: "'too...to' has a negative meaning, so 'so...that' needs **not**: **cannot**. In the past it would be 'could not'.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Keep the meaning, tense and all the facts of the original.",
              "No sooner...than; Hardly/Scarcely...when; Not only...but also; Neither...nor.",
              "Negative openers (No sooner, Hardly, Never, Seldom) need inversion: 'had he', 'have I'.",
              "Unless = if not. Never write 'Unless...not'.",
              "too...to becomes so...that...not (cannot / could not).",
            ],
          },
        ],
        flashcards: [
          { front: "No sooner pairs with...", back: "**than**: 'No sooner had she left than it rained.'" },
          { front: "Hardly / Scarcely pair with...", back: "**when**: 'Hardly had we started when the car broke down.'" },
          { front: "What does 'Unless' mean?", back: "If...not. So 'Unless you study' = 'If you do not study'." },
          { front: "too...to → ?", back: "so...that...not: 'too tired to work' → 'so tired that he could not work'." },
          { front: "Inversion", back: "Putting the helping verb before the subject after a negative opener: 'Never **have I** seen...'" },
          { front: "Despite / In spite of", back: "Followed by a noun or -ing form, not a full clause: 'Despite the rain', 'In spite of being ill'." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Begin with 'Hardly': 'As soon as I opened the door, the cat ran in.'",
            options: [
              "Hardly I opened the door when the cat ran in.",
              "Hardly had I opened the door than the cat ran in.",
              "Hardly had I opened the door when the cat ran in.",
              "Hardly did I opened the door when the cat ran in.",
            ],
            answer: 2,
            explain: "Hardly needs inversion (**had I opened**) and pairs with **when**.",
          },
          {
            kind: "mcq",
            q: "Use 'Despite': 'Although he was ill, he wrote the exam.'",
            options: [
              "Despite he was ill, he wrote the exam.",
              "Despite of his illness, he wrote the exam.",
              "Despite being ill, he wrote the exam.",
              "Despite he being ill, he wrote the exam.",
            ],
            answer: 2,
            explain: "**Despite** is followed by a noun or an -ing form, and never by 'of'. 'Despite being ill' (or 'Despite his illness') is correct.",
            difficulty: 2,
            hint: "'In spite of' has 'of'; 'despite' does not.",
          },
          {
            kind: "fill",
            q: "Use the comparative: 'The Ganga is the longest river in India.' → 'The Ganga is longer than ___ other river in India.'",
            answer: ["any"],
            explain: "Superlative → comparative: **longer than any other river**. Without 'other', Ganga would be compared with itself.",
          },
          {
            kind: "truefalse",
            q: "'Unless you do not practise, you will not improve' correctly means 'If you do not practise, you will not improve.'",
            answer: false,
            explain: "Unless already contains 'not'. The correct form is 'Unless you practise, you will not improve.'",
          },
          {
            kind: "mcq",
            q: "Begin with 'Never': 'I have never tasted such sweet mangoes.'",
            options: [
              "Never I have tasted such sweet mangoes.",
              "Never have I tasted such sweet mangoes.",
              "Never had I tasted such sweet mangoes.",
              "Never I tasted such sweet mangoes.",
            ],
            answer: 1,
            explain: "Inversion with the same tense: 'have I tasted'. Changing to 'had' changes the tense.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which sentences mean the same as 'She is too short to reach the shelf'?",
            options: [
              "She is so short that she cannot reach the shelf.",
              "She is not tall enough to reach the shelf.",
              "She is so short that she can reach the shelf.",
              "She is short enough to reach the shelf.",
            ],
            answers: [0, 1],
            explain: "Both 'so...that...cannot' and 'not tall enough to' keep the negative meaning of 'too...to'.",
            difficulty: 3,
            hint: "'too...to' means she can NOT reach it.",
          },
          {
            kind: "order",
            q: "Arrange to form a correct sentence.",
            items: ["No sooner", "had the teacher entered", "than", "the class fell silent."],
            explain: "No sooner + had + subject + past participle + than + simple past.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. Joining Sentences + Linkers and Connectors                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-joining-and-linkers",
    title: "Joining Sentences, Linkers and Connectors",
    icon: "🔗",
    description: "Join short sentences into one, and use linkers to show addition, contrast, cause and result.",
    lessons: [
      {
        slug: "joining-sentences-and-linkers",
        title: "Joining Sentences with Linkers",
        summary: "Join two or three short sentences without 'and', 'but' or 'so', and choose the right linker for the meaning.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "'I met a girl. She plays the veena. She lives next door.' Three short sentences sound jerky. 'I met a girl **who** lives next door and plays the veena' flows better.\n\n**Linkers** (also called **connectors** or **conjunctions**) are words that join ideas and show how they are related: adding, contrasting, giving a reason, or showing a result.",
          },
          {
            type: "table",
            headers: ["Job", "Linkers", "Example"],
            rows: [
              ["**Addition** (one more idea)", "and, also, moreover, besides, in addition, not only...but also", "The park is clean. **Moreover**, it is safe."],
              ["**Contrast** (opposite idea)", "but, yet, although, though, however, on the other hand, whereas", "**Although** it was late, he kept reading."],
              ["**Reason** (why)", "because, since, as, because of", "We stayed in **because** it was raining."],
              ["**Result** (what happened)", "so, therefore, hence, as a result, so...that", "He missed the bus; **therefore**, he walked."],
              ["**Time / sequence**", "when, while, before, after, as soon as, first, then, finally", "**As soon as** the bell rang, we left."],
              ["**Condition**", "if, unless, provided that", "**Unless** you hurry, you will be late."],
            ],
          },
          {
            type: "text",
            md: "**Ways to join without 'and', 'but' or 'so'** (ICSE often forbids these three):\n\n- **Relative pronoun**: who, which, whose, where. 'This is the boy. His bicycle was stolen.' → 'This is the boy **whose** bicycle was stolen.'\n- **Participle**: 'She finished her work. She went out.' → '**Having finished** her work, she went out.'\n- **Subordinate linker**: although, because, when, if, unless, so...that, too...to.\n- **Correlative pair**: not only...but also, either...or, neither...nor.",
          },
          {
            type: "example",
            title: "Joining three sentences",
            problem: "Join into one sentence without using 'and', 'but' or 'so':\n\nThe old man was very tired. He had walked ten kilometres. He sat down under a banyan tree.",
            steps: [
              "Decide the main action: he **sat down** under a banyan tree. This stays as the main clause.",
              "The walking happened first. Use a perfect participle for it: **Having walked ten kilometres**.",
              "'Very tired' describes the man. Fold it into the noun phrase as an adjective (**the tired old man**) or use a **who** clause.",
              "Put it together and check that all three facts are there: tired, walked ten km, sat under a banyan tree.",
            ],
            answer: "Having walked ten kilometres, the tired old man sat down under a banyan tree.\n\nOr: The old man, who was very tired after walking ten kilometres, sat down under a banyan tree.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Join: 'This is the house. Tagore stayed here.'",
                options: [
                  "This is the house which Tagore stayed.",
                  "This is the house where Tagore stayed.",
                  "This is the house who Tagore stayed.",
                  "This is the house whose Tagore stayed.",
                ],
                answer: 1,
                explain: "'here' means 'in this place', so use **where** (or 'in which'). 'which' alone would need 'in': 'the house in which Tagore stayed'.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Although it was raining, but we went for the picnic.",
            right: "**Although** it was raining, we went for the picnic. (Or: It was raining, **but** we went.)",
            why: "In many Indian languages two linkers are used together (like 'though...but'), so it feels natural. In English, **although** and **but** both show contrast; use only one. The same goes for 'because...so'.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "What job does each linker do?",
              groups: ["Addition", "Contrast", "Result"],
              items: [
                { text: "moreover", group: 0, hint: "It adds another point in the same direction." },
                { text: "however", group: 1, hint: "It introduces an idea that goes against the first." },
                { text: "therefore", group: 2, hint: "It tells you what follows from the first idea." },
                { text: "in addition", group: 0, hint: "It means 'also', 'as well'." },
                { text: "on the other hand", group: 1, hint: "It shows the other side." },
                { text: "as a result", group: 2, hint: "It shows the effect." },
                { text: "nevertheless", group: 1, hint: "It means 'even so' or 'in spite of that'." },
              ],
              explain: "Before choosing a linker, ask what the second idea does to the first: does it **add**, **oppose**, or **follow** from it?",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips",
            md: "**ICSE** joining questions often say *without using and, but or so*. Using one of them earns no mark, even if the sentence is correct.\n\n**Karnataka SSLC** linker questions give a sentence with a blank or two sentences to combine; read both ideas and pick the linker that fits the meaning, not the one that 'sounds nice'.\n\nPunctuate sentence linkers correctly: 'It was late; **however,** we continued.' or 'It was late. **However,** we continued.'",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "Join with a correlative pair: 'Raju did not come. His sister did not come either.' → ___ Raju nor his sister came.",
                answer: ["Neither"],
                explain: "Two negatives joined: **Neither...nor**. The verb 'came' is already positive because 'neither' carries the negative.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Linkers show addition, contrast, reason, result, time or condition.",
              "Join without and/but/so using who/which/whose/where, participles, or although/because/when.",
              "Use one linker for one link: never 'although...but' or 'because...so'.",
              "Keep every fact from all the short sentences in your joined sentence.",
            ],
          },
        ],
        flashcards: [
          { front: "Linker / connector", back: "A word or phrase that joins ideas and shows how they are related (and, although, therefore...)." },
          { front: "whose", back: "Relative pronoun showing possession: 'the girl **whose** kite flew highest'." },
          { front: "Perfect participle", back: "Having + past participle, for the earlier of two actions: 'Having eaten, he slept.'" },
          { front: "however vs but", back: "'but' joins inside one sentence. 'however' usually starts a new sentence or follows a semicolon, with a comma after it." },
          { front: "because vs because of", back: "'because' + clause (because it rained); 'because of' + noun (because of the rain)." },
          { front: "Contrast linkers", back: "but, yet, although, though, however, whereas, on the other hand, nevertheless." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Choose the linker: 'He studied hard; ___, he passed with distinction.'",
            options: ["however", "therefore", "although", "unless"],
            answer: 1,
            explain: "Passing is the **result** of studying hard, so **therefore**.",
          },
          {
            kind: "mcq",
            q: "Join without and/but/so: 'Priya is my cousin. Her father is a pilot.'",
            options: [
              "Priya, who father is a pilot, is my cousin.",
              "Priya, whose father is a pilot, is my cousin.",
              "Priya, which father is a pilot, is my cousin.",
              "Priya is my cousin, her father is a pilot.",
            ],
            answer: 1,
            explain: "'Her father' shows possession, so use **whose**. The last option joins two sentences with only a comma (a comma splice).",
          },
          {
            kind: "truefalse",
            q: "'Because he was ill, so he stayed at home' is a correct sentence.",
            answer: false,
            explain: "Use only one linker: 'Because he was ill, he stayed at home' or 'He was ill, so he stayed at home.'",
          },
          {
            kind: "fill",
            q: "Join using a participle: 'She locked the door. She left for work.' → ___ the door, she left for work.",
            answer: ["Having locked", "Locking"],
            explain: "**Having locked** shows that locking happened first. 'Locking the door, she left' is also accepted for two actions close together.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which linkers show contrast?",
            options: ["whereas", "moreover", "yet", "hence", "though"],
            answers: [0, 2, 4],
            explain: "**whereas, yet, though** show contrast. 'moreover' adds; 'hence' shows result.",
          },
          {
            kind: "mcq",
            q: "Join: 'The box was very heavy. I could not lift it.' (use too...to)",
            options: [
              "The box was too heavy for me to lift.",
              "The box was too heavy for me to lift it.",
              "The box was too heavy that I could not lift it.",
              "The box was so heavy to lift.",
            ],
            answer: 0,
            explain: "With too...to, the object is not repeated: **too heavy for me to lift** ('it' is not needed). 'too...that' is wrong.",
            difficulty: 3,
            hint: "After 'to lift', the box is already the thing lifted.",
          },
          {
            kind: "order",
            q: "Arrange to form one joined sentence.",
            items: ["The farmer", "whose crops were damaged", "applied for help", "from the government."],
            explain: "Subject + relative clause (whose crops were damaged) + main verb + rest: 'The farmer whose crops were damaged applied for help from the government.'",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 4. Letter writing: formal (CBSE, ICSE, KSEAB) and informal           */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-letter-writing",
    title: "Letter Writing (Formal and Informal)",
    icon: "✉️",
    description: "The exact layout of formal and informal letters, with full model letters and the marking points.",
    lessons: [
      {
        slug: "formal-letter",
        title: "The Formal Letter",
        summary: "The CBSE formal-letter layout part by part, a full model letter to the editor, and how marks are given for format, content and language.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "A **formal letter** is written to someone you know only through their job: a principal, an editor, a company, a municipal officer. You write to **complain**, **request**, **enquire**, **order** something, or share your view in a **letter to the editor**.\n\nThe tone is polite, clear and to the point. No slang, no short forms like 'pls' or 'u', and no emotional exaggeration.",
          },
          {
            type: "table",
            headers: ["Part", "What to write", "Example"],
            rows: [
              ["1. **Sender's address**", "Your address (as given in the question), top left", "14 Gandhi Road, Rajajinagar, Bengaluru 560010"],
              ["2. **Date**", "Below the address; write the month in words", "12 July 2025"],
              ["3. **Receiver's address**", "Designation first, then the office and place", "The Editor, The Morning Chronicle, Bengaluru"],
              ["4. **Subject**", "One line saying what the letter is about", "Subject: Waterlogging on roads after rain"],
              ["5. **Salutation**", "Formal greeting", "Sir/Madam  or  Dear Sir/Madam"],
              ["6. **Body**", "Introduction (purpose) → details → request / action wanted", "three short paragraphs"],
              ["7. **Complimentary close**", "Formal closing", "Yours faithfully / Yours sincerely"],
              ["8. **Name** (and designation if any)", "The name given in the question", "Aruna Rao"],
            ],
          },
          {
            type: "example",
            title: "Model letter to the editor (CBSE, about 120 words)",
            problem: "You are Aruna Rao of 14 Gandhi Road, Rajajinagar, Bengaluru. Every time it rains, roads in your area are flooded. Write a letter to the editor of *The Morning Chronicle* drawing the attention of the authorities to the problem.",
            steps: [
              "Plan the three paragraphs: (1) purpose of writing, (2) the problem and its effects, (3) what you want done.",
              "Write the address, date and receiver's address, each line on its own, all on the left (block format).",
              "Write a short, specific subject line. Then 'Sir/Madam'.",
              "Write the body in 100–120 words, then close with 'Yours faithfully' and your name.",
            ],
            answer: "14 Gandhi Road\nRajajinagar\nBengaluru 560010\n\n12 July 2025\n\nThe Editor\nThe Morning Chronicle\nMG Road\nBengaluru 560001\n\nSubject: Waterlogging on roads after every rain\n\nSir/Madam\n\nThrough the columns of your esteemed newspaper, I wish to draw the attention of the civic authorities to the waterlogging that Rajajinagar faces after every spell of rain.\n\nThe drains along 4th Main Road are blocked with plastic waste and silt. Even a short shower leaves knee-deep water on the road. Schoolchildren have to wade through dirty water, two-wheelers break down and shops get flooded. The stagnant water also breeds mosquitoes, and several cases of dengue have been reported in our area.\n\nI request the authorities to clean the drains before the monsoon gets heavier, penalise those who dump waste into them and repair the damaged road. Prompt action will save residents a great deal of hardship.\n\nYours faithfully\nAruna Rao",
          },
          {
            type: "callout",
            tone: "exam",
            title: "How the marks are given",
            md: "**CBSE** gives the formal letter **5 marks** with a limit of about **100–120 words**. Marks are split between **format** (about 1 mark: addresses, date, subject, salutation, close), **content** (all the points in the question, with relevant detail), **organisation** (clear paragraphs in a logical order) and **accuracy** (grammar, spelling, punctuation and fluency). Check the latest CBSE marking scheme for the exact split.\n\n**ICSE** (10 marks) and **Karnataka SSLC** mark the same things: correct layout, coverage of the points, logical paragraphs and correct language. A perfect body with a wrong layout still loses marks.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "order",
                q: "Put the parts of a formal letter in order.",
                items: ["Sender's address", "Date", "Receiver's address", "Subject", "Salutation", "Body", "Complimentary close", "Name"],
                explain: "Address → date → receiver → subject → salutation → body → close → name. This is the CBSE order.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "I always end a formal letter with 'Yours sincerely' because it sounds the most polite.",
            right: "Begin 'Sir/Madam' or 'Dear Sir/Madam' → close with **Yours faithfully**. Begin with the person's name ('Dear Mr Sharma') → close with **Yours sincerely**.",
            why: "Both are polite, but they belong to different openings. 'Faithfully' goes with an unnamed reader; 'sincerely' goes with a named one. Also write 'Yours' with no apostrophe ('Your's' is wrong) and put nothing like 'lovingly' in a formal letter.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "The letter begins 'Dear Sir/Madam'. How should it end?",
              emoji: "✒️",
              options: ["Yours faithfully", "Yours sincerely", "Your's faithfully", "Yours lovingly"],
              answer: 0,
              trap: 1,
              explain: "An unnamed reader (Sir/Madam) takes **Yours faithfully**. 'Yours sincerely' is for a named reader. 'Your's' has a wrong apostrophe, and 'lovingly' is only for family and friends.",
            },
          },
          {
            type: "list",
            items: [
              "**Letter of complaint**: what went wrong, when, its effect, and the action you want (repair, refund, replacement).",
              "**Letter of enquiry**: who you are, what you want to know (fees, dates, timings), a polite request for a reply.",
              "**Letter of order**: the items, quantity and specifications (best in a short list), delivery date, mode of payment.",
              "**Letter to the editor**: 'Through the columns of your newspaper...', the issue, its effects, suggestions.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the best subject line for a letter complaining about a faulty mixer-grinder?",
                options: [
                  "Subject: Letter",
                  "Subject: Complaint regarding a defective mixer-grinder (Invoice No. 4521)",
                  "Subject: I am very, very angry with your company",
                  "Subject: Mixer",
                ],
                answer: 1,
                explain: "A good subject line is short, specific and calm. It tells the reader exactly what the letter is about.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "CBSE order: sender's address, date, receiver's address, subject, salutation, body, complimentary close, name.",
              "Body = purpose → details → request. Keep to the word limit.",
              "Sir/Madam → Yours faithfully; Dear Mr/Ms + name → Yours sincerely.",
              "Marks go to format, content, organisation and accuracy; layout errors cost marks even if the content is good.",
            ],
          },
        ],
        flashcards: [
          { front: "Parts of a CBSE formal letter", back: "Sender's address, date, receiver's address, subject, salutation, body, complimentary close, name." },
          { front: "Yours faithfully", back: "Used when the salutation is 'Sir/Madam' (reader not named)." },
          { front: "Yours sincerely", back: "Used when you address the reader by name: 'Dear Ms Iyer'." },
          { front: "Opening line of a letter to the editor", back: "'Through the columns of your esteemed newspaper, I wish to draw the attention of...'" },
          { front: "CBSE formal letter: marks and words", back: "5 marks; about 100–120 words." },
          { front: "Three paragraphs of the body", back: "Purpose of writing → details of the issue → what you request." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In a CBSE formal letter, what comes immediately after the receiver's address?",
            options: ["Date", "Salutation", "Subject", "Body"],
            answer: 2,
            explain: "The order is ... receiver's address → **subject** → salutation.",
          },
          {
            kind: "mcq",
            q: "You write to 'The Principal' and begin 'Sir/Madam'. The best close is:",
            options: ["Yours sincerely", "Yours faithfully", "Your's obediently", "Your loving student"],
            answer: 1,
            explain: "An unnamed formal reader takes **Yours faithfully**. 'Your's' is a spelling error and 'loving' is informal.",
          },
          {
            kind: "truefalse",
            q: "Short forms like 'pls' and 'thx' are fine in a formal letter if you are short of words.",
            answer: false,
            explain: "Formal letters use full, standard words. Short forms are marked as errors of tone and accuracy.",
          },
          {
            kind: "multi",
            q: "Which belong in a letter of order?",
            options: ["Quantity of each item", "Delivery date", "Mode of payment", "News about your family"],
            answers: [0, 1, 2],
            explain: "A letter of order states what, how many, by when and how you will pay. Personal news belongs in an informal letter.",
          },
          {
            kind: "fill",
            q: "A letter to 'Dear Mr Banerjee' should end with 'Yours ___'.",
            answer: ["sincerely"],
            explain: "A named reader takes **Yours sincerely**.",
          },
          {
            kind: "mcq",
            q: "Which body plan is best for a complaint letter?",
            options: [
              "Greeting → family news → complaint",
              "Problem and details → action wanted → purpose",
              "Purpose of writing → details of the problem and its effect → action requested",
              "Only one long paragraph",
            ],
            answer: 2,
            explain: "State why you are writing, give the details, then say clearly what you want done.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "In a CBSE formal letter, a correct body can still lose marks if the format is wrong.",
            answer: true,
            explain: "Format carries its own mark, separate from content and language.",
          },
        ],
      },
      {
        slug: "informal-letter",
        title: "The Informal Letter",
        summary: "The informal-letter layout used by ICSE and Karnataka SSLC, a full model letter to a friend, and the tone that earns marks.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "An **informal letter** goes to someone you know well: a friend, a cousin, a grandparent. You might describe an event, give advice, congratulate, thank, or share news.\n\nThe tone is warm and natural, like talking. But it is still an exam answer: full sentences, correct grammar and clear paragraphs.",
          },
          {
            type: "table",
            headers: ["Part", "Informal letter", "Formal letter (compare)"],
            rows: [
              ["Sender's address", "Yes, top left", "Yes"],
              ["Date", "Yes", "Yes"],
              ["Receiver's address", "**No**", "Yes"],
              ["Subject line", "**No**", "Yes"],
              ["Salutation", "Dear Riya, / Dear Grandpa,", "Sir/Madam / Dear Mr Rao"],
              ["Body", "Friendly opening → main news → warm ending", "Purpose → details → request"],
              ["Close", "Your loving friend / Yours affectionately / With love", "Yours faithfully / Yours sincerely"],
              ["Name", "First name only", "Full name"],
            ],
          },
          {
            type: "example",
            title: "Model informal letter (ICSE / Karnataka style)",
            problem: "Write a letter to your friend Kiran describing a school trip you went on recently.",
            steps: [
              "Address and date at the top; 'Dear Kiran,' with no receiver's address and no subject.",
              "Opening paragraph: a warm greeting and why you are writing.",
              "Middle paragraphs: the main news with details: where, what you saw, what you felt.",
              "Closing paragraph: ask about the friend, send regards, close with 'Your loving friend' and your first name.",
            ],
            answer: "22 Vidyanagar\nHubballi 580021\n\n5 November 2025\n\nDear Kiran,\n\nI hope you and your family are well. I have so much to tell you about our school trip to Hampi last week that I could not wait to write.\n\nForty of us travelled by bus with three teachers. Hampi was once the capital of the Vijayanagara Empire, and the ruins spread over a huge area beside the Tungabhadra river. We began at the Virupaksha Temple, where a temple elephant blessed us by touching our heads with its trunk! The stone chariot at the Vittala Temple was even more beautiful than its picture on our fifty-rupee note.\n\nIn the evening we climbed a hill to watch the sunset. The rocks turned orange and gold, and nobody spoke for a while. I took many photographs, which I will show you when we meet.\n\nHow are your preparations for the board exams going? Do write soon and tell me your news. Please give my regards to your parents.\n\nYour loving friend,\nAnanya",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Scoring the informal letter",
            md: "Examiners look for: the **correct layout** (no subject, no receiver's address in an informal letter), **content** that covers every point in the question, **organisation** into an opening, middle and closing paragraph, and **accuracy** of grammar, spelling and punctuation.\n\nA common loss of marks is a letter that only describes the event and never opens or closes warmly. Another is mixing formats: writing a subject line, or closing 'Yours faithfully' to a friend.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "multi",
                q: "Which parts should NOT appear in an informal letter to your cousin?",
                options: ["Subject line", "Date", "Receiver's address", "Salutation 'Dear Neha,'"],
                answers: [0, 2],
                explain: "An informal letter has the sender's address, date, salutation, body, close and name. It has **no** subject line and **no** receiver's address.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "An informal letter can be written like a chat message: 'hiii!! hw r u? trip was awsm.'",
            right: "Informal means **friendly**, not careless: 'Hi Kiran! How are you? The trip was wonderful.'",
            why: "The friendly tone comes from warm words, questions and personal details, not from short forms or spelling mistakes. Accuracy is still marked in every letter.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Formal letter or informal letter?",
              groups: ["Formal", "Informal"],
              items: [
                { text: "Yours faithfully", group: 0, hint: "Used for an unnamed formal reader." },
                { text: "Your loving friend", group: 1, hint: "Shows a close relationship." },
                { text: "Subject: Request for a bonafide certificate", group: 0, hint: "Only formal letters have a subject line." },
                { text: "I can't wait to see you at Diwali!", group: 1, hint: "Personal and emotional: friendly tone." },
                { text: "I request you to kindly look into the matter.", group: 0, hint: "Polite request to an official." },
                { text: "Dear Grandma,", group: 1, hint: "A family member, addressed warmly." },
              ],
              explain: "The reader decides the format. An official reader gets a subject line and a formal close; a friend or relative gets a warm tone and a loving close.",
            },
          },
          {
            type: "table",
            headers: ["Purpose", "Useful phrases"],
            rows: [
              ["Opening", "I hope this letter finds you in the best of health. / It was lovely to get your letter."],
              ["Sharing news", "Guess what happened last week! / I must tell you about..."],
              ["Giving advice", "If I were you, I would... / Why don't you try...?"],
              ["Closing", "Do write back soon. / Please give my regards to Uncle and Aunty. / I miss you all."],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the best opening sentence for a letter to a friend?",
                options: [
                  "I am writing to inform you about the trip.",
                  "Through this letter I wish to draw your attention to my trip.",
                  "I hope you are doing well. Guess what? I have exciting news about our trip!",
                  "Respected Sir, I want to tell you about the trip.",
                ],
                answer: 2,
                explain: "A warm greeting and a lively lead-in suit a friend. The others are formal.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Informal layout: sender's address, date, 'Dear + name,', body, loving close, first name.",
              "No subject line and no receiver's address.",
              "Opening (greeting) → main news → warm ending with a question or regards.",
              "Friendly tone, but correct grammar and spelling.",
            ],
          },
        ],
        flashcards: [
          { front: "Parts of an informal letter", back: "Sender's address, date, salutation (Dear + name), body, complimentary close, first name." },
          { front: "Closes for an informal letter", back: "Your loving friend, Yours affectionately, With love, Your loving son/daughter." },
          { front: "What does an informal letter leave out?", back: "The receiver's address and the subject line." },
          { front: "Three paragraphs of an informal letter", back: "Warm opening → main news or advice → closing with a question and regards." },
          { front: "Informal ≠ careless", back: "No chat short forms; grammar and spelling are still marked." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which close suits a letter to your grandfather?",
            options: ["Yours faithfully", "Yours sincerely", "Your loving grandson", "Yours obediently"],
            answer: 2,
            explain: "A family letter ends warmly: **Your loving grandson**.",
          },
          {
            kind: "truefalse",
            q: "An informal letter should have a subject line so the reader knows the topic.",
            answer: false,
            explain: "Subject lines belong only in formal letters (and e-mails).",
          },
          {
            kind: "order",
            q: "Arrange the parts of an informal letter.",
            items: ["Sender's address", "Date", "Dear Kiran,", "Body", "Your loving friend,", "Ananya"],
            explain: "Address → date → salutation → body → close → first name.",
          },
          {
            kind: "mcq",
            q: "Which sentence has the right tone for an informal letter?",
            options: [
              "Kindly acknowledge receipt of this letter.",
              "I would be grateful if you could look into the matter.",
              "You must come home for the holidays, we'll have so much fun!",
              "I request you to take necessary action.",
            ],
            answer: 2,
            explain: "Warm and personal suits an informal letter. The others are formal phrases.",
          },
          {
            kind: "fill",
            q: "The salutation of an informal letter is usually 'Dear' followed by the person's ___.",
            answer: ["name", "first name"],
            explain: "For example, 'Dear Kiran,' or 'Dear Grandma,'.",
          },
          {
            kind: "multi",
            q: "Which would lose marks in an ICSE informal letter?",
            options: ["Closing with 'Yours faithfully'", "Writing 'hw r u'", "Asking about your friend's family", "Adding a subject line"],
            answers: [0, 1, 3],
            explain: "A formal close, chat spelling and a subject line are format or accuracy errors. Asking about the family is a good warm ending.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 5. Analytical Paragraph (CBSE)                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-analytical-paragraph",
    title: "Analytical Paragraph",
    icon: "📊",
    description: "Turn a chart, graph or table into a clear paragraph that describes and compares the data.",
    lessons: [
      {
        slug: "describing-data-in-a-paragraph",
        title: "Describing a Chart in 120 Words",
        summary: "How to read a chart, pick the main trends, use the language of change and write a CBSE analytical paragraph.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "An **analytical paragraph** describes information shown in a **chart, graph or table**. You do not give your opinion on the topic. You tell the reader what the data shows: the **main trends**, the **highest and lowest** figures, and the **comparisons**.\n\nCBSE gives this task **5 marks**, with a limit of about **100–120 words**.",
          },
          {
            type: "table",
            headers: ["Part", "What it does", "Useful phrases"],
            rows: [
              ["**Introduction** (1–2 sentences)", "Says what the chart shows, for whom, and for which period", "The bar graph illustrates... / The data compares..."],
              ["**Body** (3–5 sentences)", "Main trends with key figures; compares groups", "rose sharply, fell steadily, doubled, remained stable, while, whereas"],
              ["**Conclusion** (1 sentence)", "Sums up the overall pattern", "Overall, it is clear that... / On the whole..."],
            ],
          },
          {
            type: "table",
            headers: ["Mode of travel", "2015 (%)", "2025 (%)"],
            rows: [
              ["Walking", "30", "15"],
              ["Bicycle", "25", "10"],
              ["School bus", "20", "30"],
              ["Private car / two-wheeler", "25", "45"],
            ],
          },
          {
            type: "example",
            title: "Model analytical paragraph",
            problem: "The table above shows how students of a school in Pune travelled to school in 2015 and in 2025 (an imaginary survey). Write an analytical paragraph in 100–120 words.",
            steps: [
              "Introduction: name the data (how students travel), the place (a Pune school) and the years (2015 and 2025).",
              "Find the biggest change: private vehicles grew from 25% to 45%, the largest share in 2025.",
              "Group the other changes: walking halved (30% → 15%) and cycling fell (25% → 10%), while the bus rose (20% → 30%).",
              "Conclude with the overall trend: a shift from active travel to motorised travel.",
            ],
            answer: "The table compares the modes of travel used by students of a Pune school to reach school in 2015 and 2025.\n\nThe most striking change is in the use of private cars and two-wheelers, which rose from 25% to 45% and became the most common mode in 2025. The school bus also gained popularity, increasing from 20% to 30%. On the other hand, walking, which was the most popular mode in 2015 at 30%, halved to just 15%. Cycling saw a similar decline, falling from 25% to only 10%.\n\nOverall, the data shows a clear shift over the decade from walking and cycling towards motorised transport, with private vehicles now carrying nearly half the students.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "How CBSE marks the analytical paragraph",
            md: "Marks are given for **content** (correct figures, the main trends and comparisons, nothing invented), **organisation** (introduction → analysis → conclusion, linked with words like 'while' and 'on the other hand') and **accuracy** (grammar, spelling, the correct tense). Check the latest CBSE marking scheme for the exact split.\n\nFrequent errors: copying every number with no comparison, giving personal opinions, and writing a title or a bullet list. Write **one** connected paragraph (you may break it into short paragraphs as shown) and stay near the word limit.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Using the table: by how many percentage points did the use of private vehicles rise from 2015 to 2025?",
                answer: 20,
                unit: "percentage points",
                explain: "45 − 25 = **20 percentage points**.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Walking fell because parents are scared of traffic, and I think this is very bad for health.",
            right: "Walking fell from 30% to 15%, halving over the decade.",
            why: "The chart gives numbers, not reasons or opinions. An analytical paragraph reports and compares what the data shows. Reasons may be mentioned only if the question gives them.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each change to the best phrase.",
              pairs: [
                ["20 → 40", "doubled"],
                ["30 → 15", "halved"],
                ["50 → 51", "remained almost stable"],
                ["10 → 60", "rose sharply"],
                ["40 → 35 → 30 → 25", "declined steadily"],
              ],
              explain: "Choose words that show **how much** and **how fast** a figure changed, not just 'increased' or 'decreased' every time.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the best introduction for an analytical paragraph?",
                options: [
                  "In my opinion, students should walk to school.",
                  "The table compares how students of a Pune school travelled to school in 2015 and 2025.",
                  "Walking 30, bicycle 25, bus 20, car 25.",
                  "Title: Travel Habits",
                ],
                answer: 1,
                explain: "A good introduction says **what** the data is about, **who**, and **when**, in one clear sentence.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Introduction (what, who, when) → main trends and comparisons → overall conclusion.",
              "Quote the key figures; do not list every number.",
              "No opinions or invented reasons.",
              "Use the language of change: rose, fell, doubled, halved, remained stable, whereas.",
              "CBSE: 5 marks, about 100–120 words.",
            ],
          },
        ],
        flashcards: [
          { front: "Analytical paragraph", back: "A paragraph that describes and compares information given in a chart, graph or table." },
          { front: "Three parts", back: "Introduction (what the data shows) → body (trends and comparisons) → conclusion (overall pattern)." },
          { front: "Words for a rise", back: "increased, rose, grew, climbed, doubled, rose sharply / gradually." },
          { front: "Words for a fall", back: "decreased, fell, dropped, declined, halved, fell sharply / steadily." },
          { front: "Words for comparison", back: "while, whereas, on the other hand, compared with, in contrast." },
          { front: "Biggest mistake", back: "Adding personal opinions or reasons not given in the data." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In the lesson table, which mode was the most popular in 2015 but not in 2025?",
            options: ["Walking", "Bicycle", "School bus", "Private vehicle"],
            answer: 0,
            explain: "Walking led in 2015 with 30%. By 2025 it had halved to 15%, and private vehicles (45%) had become the most popular mode.",
            difficulty: 2,
            hint: "Find the largest number in the 2015 column first.",
          },
          {
            kind: "truefalse",
            q: "An analytical paragraph should end with your opinion on the topic.",
            answer: false,
            explain: "It ends with a summary of the overall trend shown by the data, not a personal opinion.",
          },
          {
            kind: "numeric",
            q: "In the lesson table, what percentage of students used the school bus or a private vehicle in 2025?",
            answer: 75,
            unit: "%",
            explain: "30 + 45 = **75%**.",
          },
          {
            kind: "fill",
            q: "A figure that goes from 12 to 24 has ___.",
            answer: ["doubled"],
            explain: "24 is twice 12, so it **doubled**.",
          },
          {
            kind: "order",
            q: "Arrange the parts of an analytical paragraph.",
            items: [
              "Say what the chart shows and the period",
              "Describe the biggest change with figures",
              "Compare the other groups",
              "Sum up the overall trend",
            ],
            explain: "Introduce → biggest trend → comparisons → conclusion.",
          },
          {
            kind: "multi",
            q: "Which sentences suit an analytical paragraph?",
            options: [
              "Sales rose steadily from ₹2 lakh in 2021 to ₹5 lakh in 2024.",
              "I feel the company must be very happy.",
              "Rural sales doubled, whereas urban sales remained stable.",
              "Overall, the data shows strong growth in rural markets.",
            ],
            answers: [0, 2, 3],
            explain: "Data-based description and comparison are correct. Guessing feelings is an opinion, not analysis.",
          },
          {
            kind: "mcq",
            q: "What is the CBSE word limit for the analytical paragraph?",
            options: ["About 50 words", "About 100–120 words", "About 200–250 words", "No limit"],
            answer: 1,
            explain: "CBSE asks for about **100–120 words**.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 6. Paragraph Writing (Karnataka SSLC)                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-paragraph-writing",
    title: "Paragraph Writing",
    icon: "🧱",
    description: "Build a paragraph from given points: topic sentence, supporting sentences and a concluding sentence.",
    lessons: [
      {
        slug: "building-a-paragraph-from-points",
        title: "Building a Paragraph from Points",
        summary: "How to expand given hints into one well-joined paragraph with a clear topic sentence and ending.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "A **paragraph** is a group of sentences about **one main idea**. In the Karnataka SSLC paper you are often given a topic and a few **hints** (key words), and you must expand them into a paragraph.\n\nA good paragraph has three parts: a **topic sentence**, **supporting sentences**, and a **concluding sentence**.",
          },
          {
            type: "table",
            headers: ["Part", "Job", "Example (topic: trees)"],
            rows: [
              ["**Topic sentence**", "States the main idea in one clear sentence", "Trees are among our best friends."],
              ["**Supporting sentences**", "Explain the idea with reasons, facts and examples, one hint at a time", "They give us shade, fruit and oxygen..."],
              ["**Concluding sentence**", "Rounds off the idea; often a message", "So we must plant and protect trees."],
            ],
          },
          {
            type: "text",
            md: "Two qualities make a paragraph read well:\n\n- **Unity**: every sentence is about the main idea. No side stories.\n- **Coherence**: the sentences follow a logical order and are joined with linkers like *also, besides, for example, moreover, therefore*.",
          },
          {
            type: "example",
            title: "Expanding hints into a paragraph",
            problem: "Write a paragraph on 'Trees: Our Best Friends' using these hints: shade – fruit and wood – oxygen – rain – home for birds – our duty.",
            steps: [
              "Write a topic sentence that covers all the hints: trees help us in many ways.",
              "Turn each hint into one or two sentences, in the given order.",
              "Join the sentences with linkers (also, besides, moreover) so they do not sound like a list.",
              "End with a concluding sentence based on the last hint, 'our duty'.",
            ],
            answer: "Trees are among the best friends of human beings. On a hot summer afternoon, a large tree gives cool shade to people, cattle and travellers. Trees also give us fruit to eat and wood for furniture and fuel. Besides, they take in carbon dioxide and release the oxygen that every living being needs. Forests help to bring rain and stop the soil from being washed away. Moreover, trees are home to many birds, squirrels and insects. Since trees do so much for us, it is our duty to plant more of them and to protect the ones we already have.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Scoring tips",
            md: "Examiners check whether you have **used all the hints**, kept **one main idea**, written in **complete, correct sentences**, and stayed near the word limit given in the question.\n\nWrite **one** paragraph, not a list of points. Do not leave out any hint, and do not copy the hints with dashes as your answer.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is the best topic sentence for a paragraph on 'The Value of Games'?",
                options: [
                  "I play cricket every evening with my friends.",
                  "Games are as important as books for a student's growth.",
                  "Virat Kohli is a famous cricketer.",
                  "Games, games, games.",
                ],
                answer: 1,
                explain: "A topic sentence states the **main idea** of the whole paragraph. The others are details or are off the topic.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "I should write each hint as a separate sentence: 'Trees give shade. Trees give fruit. Trees give oxygen.'",
            right: "Join the ideas with linkers and vary the sentences: 'Trees give shade **and** fruit. **Besides**, they release oxygen.'",
            why: "Repeating the same short pattern sounds like a list, not a paragraph. Marks for coherence come from linking ideas so that they flow.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Arrange the sentences into a paragraph.",
              items: [
                "Libraries are treasure houses of knowledge.",
                "They hold books on every subject, from science to stories.",
                "Students who cannot buy costly books can read them free of cost.",
                "Moreover, a quiet library helps us concentrate.",
                "Every town should therefore have a good public library.",
              ],
              explain: "Topic sentence first, then supporting details joined by linkers ('Moreover'), and a concluding sentence ('therefore') at the end.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "In a paragraph about 'Benefits of Yoga', the sentence 'My uncle bought a new car last week' breaks unity.",
                answer: true,
                explain: "It has nothing to do with yoga, so it breaks the **unity** of the paragraph.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "One paragraph = one main idea.",
              "Topic sentence → supporting sentences → concluding sentence.",
              "Use every hint, in a sensible order.",
              "Unity (stay on topic) and coherence (link ideas) earn marks.",
            ],
          },
        ],
        flashcards: [
          { front: "Topic sentence", back: "The sentence that states the main idea of the paragraph, usually the first." },
          { front: "Supporting sentences", back: "Sentences that explain the main idea with reasons, facts or examples." },
          { front: "Concluding sentence", back: "The last sentence; it sums up or gives a message." },
          { front: "Unity", back: "Every sentence in the paragraph is about the one main idea." },
          { front: "Coherence", back: "Sentences follow a logical order and are joined smoothly with linkers." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which sentence would make the best ending for a paragraph on saving water?",
            options: [
              "Water boils at 100 °C.",
              "If each of us saves a little water every day, we can protect it for the future.",
              "My friend lives near a lake.",
              "Water is in rivers.",
            ],
            answer: 1,
            explain: "A concluding sentence sums up the idea and often gives a message.",
          },
          {
            kind: "truefalse",
            q: "You may leave out one or two hints if you write the others well.",
            answer: false,
            explain: "Every hint must be used; leaving one out loses content marks.",
          },
          {
            kind: "multi",
            q: "Which make a paragraph coherent?",
            options: ["Linkers such as 'moreover' and 'therefore'", "A logical order of ideas", "Repeating the same sentence pattern", "Jumping between topics"],
            answers: [0, 1],
            explain: "Coherence comes from logical order and smooth linking.",
          },
          {
            kind: "fill",
            q: "The sentence that states the main idea of a paragraph is called the ___ sentence.",
            answer: ["topic"],
            explain: "The **topic sentence** states the main idea.",
          },
          {
            kind: "order",
            q: "Arrange the parts of a paragraph.",
            items: ["Topic sentence", "Supporting sentences", "Concluding sentence"],
            explain: "Main idea first, then the support, then the ending.",
          },
          {
            kind: "mcq",
            q: "Which sentence does NOT belong in a paragraph on 'The Uses of a Computer'?",
            options: [
              "Computers help doctors keep patient records.",
              "Students use computers to learn online.",
              "My favourite colour is blue.",
              "Banks use computers for quick transactions.",
            ],
            answer: 2,
            explain: "It is off the topic and breaks unity.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 7. Composition (ICSE)                                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-composition",
    title: "Composition (Essay Writing)",
    icon: "🖋️",
    description: "Plan and write an ICSE composition: narrative, descriptive, argumentative and picture-based.",
    lessons: [
      {
        slug: "planning-and-writing-a-composition",
        title: "Planning and Writing a Composition",
        summary: "The kinds of ICSE composition, a five-minute plan, a full model descriptive composition and what examiners reward.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "In the **ICSE** English Language paper, the first question asks for a **composition** of about **300–350 words** on one topic from a choice. It carries **20 marks**, the most for any single answer, so planning matters.\n\nThe topics usually include different kinds of writing. Choose the kind you write best, not the topic that looks easiest.",
          },
          {
            type: "table",
            headers: ["Kind", "What it asks", "Key skill"],
            rows: [
              ["**Narrative**", "Tell a story or an experience", "Clear sequence, a turning point, a satisfying end"],
              ["**Descriptive**", "Describe a place, person or scene", "Details for the five senses; a clear viewpoint"],
              ["**Argumentative / discursive**", "Give your view, or both sides, on an issue", "Reasons, examples, a balanced conclusion"],
              ["**Picture composition**", "Write anything suggested by a given picture", "A clear link to the picture"],
              ["**Short story**", "Write a story that begins or ends with a given line", "Use the given line exactly, as instructed"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Choose** (1 minute): pick the topic you have the most ideas for.",
              "**Brainstorm** (2 minutes): jot down 8–10 ideas, words and details.",
              "**Outline** (2 minutes): introduction → 3 body paragraphs → conclusion.",
              "**Write** (about 25 minutes): one idea per paragraph; vary sentence length.",
              "**Revise** (3 minutes): check tense, spelling, punctuation and that you answered the exact topic.",
            ],
          },
          {
            type: "example",
            title: "Model descriptive composition (about 320 words)",
            problem: "Describe a busy railway station at night.",
            steps: [
              "Plan the viewpoint: I am waiting for a late train with my father.",
              "Introduction: arrival at the station and the first impression.",
              "Body: (1) sights and sounds on the platform, (2) smells, (3) people and their small stories.",
              "Conclusion: the train arrives; a thought about the station that never sleeps.",
            ],
            answer: "It was nearly eleven at night when my father and I reached Vijayawada Junction. Our train to Chennai was running two hours late, so we found a bench on Platform 4 and settled down to wait. I had expected the station to be quiet at that hour. I could not have been more wrong.\n\nThe platform glowed under long rows of white tube lights. Moths circled them in restless clouds. A goods train rumbled slowly past on the far track, its wagons rattling like a giant's chain. Above us, the yellow display board kept changing, and every few minutes a calm voice announced arrivals and delays in Telugu, Hindi and English.\n\nThe smells were as busy as the sights. A tea seller walked by with a steel kettle, calling 'Chai, chai, garam chai!', and the sweet smell of cardamom followed him. From the food stall came the sharp scent of mirchi bajji frying in hot oil. Somewhere, a bundle of jasmine flowers lay in a basket, and its fragrance drifted over everything.\n\nThe people were the most interesting part of the scene. A family of five slept on a spread-out bedsheet, their suitcases arranged around them like a fort. A young soldier sat alone, reading a letter again and again. Two porters in red shirts argued cheerfully about cricket while they waited for the next train. A small boy pressed his nose to the window of a stationary coach, waving at anyone who looked his way. Near the stairs, a woman sold peanuts in paper cones, counting coins by the light of a mobile phone. Everyone was waiting for something, yet each person seemed to be in a small world of their own.\n\nAt last, just after one o'clock, a bright headlight appeared in the darkness and our train slid in with a long sigh of its brakes. As we climbed aboard, I looked back at the crowded platform. The night had ended for us, but for the station it would never really end.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "What ICSE examiners reward",
            md: "Marks are given for **content** (relevance to the exact topic, interesting and original ideas), **organisation** (a clear beginning, middle and end, with linked paragraphs), and **expression and accuracy** (vocabulary, sentence variety, grammar, spelling and punctuation).\n\nThe most common way to lose marks is **going off the topic**: writing a general essay on 'railways' when the topic asks you to describe a station at night. Stay close to the 300–350 word range; much shorter answers lack content.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The topic is: 'Write a story that ends with: ...and that was the last time I ever told a lie.' What must you do?",
                options: [
                  "Begin with that line",
                  "End with that exact line",
                  "Write an essay about why lying is bad",
                  "Use the line anywhere in the story",
                ],
                answer: 1,
                explain: "When the question gives an ending line, the story must **end with that line**, word for word.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "I should use as many difficult words and idioms as I can to impress the examiner.",
            right: "Use clear, correct English with a few well-chosen descriptive words and varied sentences.",
            why: "Long words used wrongly or idioms forced into every line make writing harder to read and add errors. Examiners reward accuracy and vivid detail, not a dictionary list.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which kind of composition is each topic?",
              groups: ["Narrative", "Descriptive", "Argumentative"],
              items: [
                { text: "The day I got lost in a crowded fair", group: 0, hint: "It tells what happened: a story." },
                { text: "A village market on a Sunday morning", group: 1, hint: "It asks you to paint a scene." },
                { text: "Mobile phones should be banned in schools. Do you agree?", group: 2, hint: "It asks for your view with reasons." },
                { text: "Your grandmother's kitchen", group: 1, hint: "A place to describe with the senses." },
                { text: "An adventure during a power cut", group: 0, hint: "Events in a sequence." },
                { text: "Online classes are better than classroom teaching. Discuss.", group: 2, hint: "An issue with two sides." },
              ],
              explain: "Narratives tell **what happened**, descriptions show **what it was like**, and argumentative essays explain **what you think and why**.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "In the model composition, each body paragraph deals with one main idea: sights and sounds, then smells, then people.",
                answer: true,
                explain: "One idea per paragraph keeps the composition organised and easy to follow, which earns organisation marks.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "ICSE composition: about 300–350 words, 20 marks.",
              "Plan for five minutes: choose, brainstorm, outline.",
              "Introduction → 3 body paragraphs (one idea each) → conclusion.",
              "Stay on the exact topic; use given lines exactly.",
              "Clear, accurate English with vivid details beats difficult words.",
            ],
          },
        ],
        flashcards: [
          { front: "ICSE composition length and marks", back: "About 300–350 words; 20 marks." },
          { front: "Narrative composition", back: "Tells a story or experience in a clear sequence." },
          { front: "Descriptive composition", back: "Describes a place, person or scene using details for the senses." },
          { front: "Argumentative composition", back: "Gives a view on an issue with reasons and examples, and a clear conclusion." },
          { front: "Five-minute plan", back: "Choose → brainstorm → outline (intro, 3 body paragraphs, conclusion)." },
          { front: "Most common way to lose marks", back: "Going off the exact topic." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which detail best suits a descriptive composition on 'A Monsoon Morning'?",
            options: [
              "The monsoon arrives in Kerala around the start of June.",
              "Raindrops drummed on the tin roof and the air smelt of wet earth.",
              "Monsoons are caused by winds.",
              "I like rain.",
            ],
            answer: 1,
            explain: "Descriptive writing uses sense details (sound, smell). The others are facts or a flat opinion.",
          },
          {
            kind: "truefalse",
            q: "For an argumentative topic, you may present both sides but must give a clear conclusion.",
            answer: true,
            explain: "A discursive answer can weigh both sides, but it should end with a clear view or balanced judgement.",
          },
          {
            kind: "order",
            q: "Arrange the planning steps.",
            items: ["Choose the topic", "Brainstorm ideas", "Make an outline", "Write the composition", "Revise for errors"],
            explain: "Choose → brainstorm → outline → write → revise.",
          },
          {
            kind: "multi",
            q: "Which help a composition score well?",
            options: ["Staying on the exact topic", "Paragraphs with one idea each", "Forcing an idiom into every sentence", "Varied sentence lengths"],
            answers: [0, 1, 3],
            explain: "Relevance, organisation and varied, accurate sentences score. Forced idioms often add errors.",
          },
          {
            kind: "fill",
            q: "ICSE asks for a composition of about 300–___ words.",
            answer: ["350"],
            explain: "The range is about **300–350 words**.",
          },
          {
            kind: "mcq",
            q: "A picture composition should:",
            options: [
              "Describe only the colours in the picture",
              "Have a clear link to the picture, as a story, description or discussion",
              "Ignore the picture and write on any topic",
              "Be a list of objects seen",
            ],
            answer: 1,
            explain: "You may write a story, description or discussion, but it must clearly connect to the picture.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 8. Notice and E-mail Writing (ICSE)                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-notice-and-email",
    title: "Notice and E-mail Writing",
    icon: "📌",
    description: "The ICSE notice and e-mail formats, with model answers on the same situation.",
    lessons: [
      {
        slug: "notice-and-email-formats",
        title: "Writing a Notice and an E-mail",
        summary: "Layouts for a school notice and a formal e-mail, word limits, and a pair of model answers.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A **notice** is a short public announcement put up on a notice board, so that many people get the same information at once. An **e-mail** is a message sent electronically to one person or a few people.\n\nIn **ICSE**, the notice and the e-mail usually come as a pair on the **same situation**. Each is marked separately, and each is short, often **about 50 words** in the body. Follow the limit given in the question.",
          },
          {
            type: "table",
            headers: ["Notice layout", "What to write"],
            rows: [
              ["Name of the institution", "GREEN VALLEY SCHOOL, MYSURU"],
              ["The word NOTICE", "In capitals, centred"],
              ["Date", "3 July 2025"],
              ["Heading", "A short title in capitals: what the notice is about"],
              ["Body", "**What, when, where, who** can take part, and **how / whom to contact**"],
              ["Name and designation", "Of the person issuing the notice"],
            ],
          },
          {
            type: "table",
            headers: ["E-mail layout", "What to write"],
            rows: [
              ["**To**", "The receiver's e-mail address"],
              ["**Cc / Bcc** (optional)", "Others who should get a copy"],
              ["**Subject**", "A short, clear line about the purpose"],
              ["**Salutation**", "Dear Sir/Madam, / Dear Mr Kumar,"],
              ["**Body**", "Purpose → details → request or next step, in short paragraphs"],
              ["**Closing and name**", "Regards, / Yours sincerely, + name and designation"],
            ],
          },
          {
            type: "example",
            title: "Model notice and e-mail on the same situation",
            problem: "You are Rohan Gowda, Secretary of the Eco Club of Green Valley School, Mysuru. (a) Write a notice inviting students to a tree plantation drive for Van Mahotsav. (b) Write an e-mail to a nursery ordering saplings for the drive.",
            steps: [
              "List the facts both pieces need: event, date, time, place, who, what to bring, contact.",
              "Notice: school name, NOTICE, date, heading, a body that answers what/when/where/who/how, then your name and designation.",
              "E-mail: To, Subject, salutation, a body with the order details (items, quantity, delivery date, payment), closing and name.",
              "Count the words in each body and cut extra words.",
            ],
            answer: "GREEN VALLEY SCHOOL, MYSURU\nNOTICE\n3 July 2025\n\nVAN MAHOTSAV: TREE PLANTATION DRIVE\n\nThe Eco Club will hold a tree plantation drive on 10 July 2025, from 8 a.m. to 10 a.m., on the school playground. Students of Classes 8 to 10 who wish to take part should give their names to the undersigned by 7 July. Bring a water bottle.\n\nRohan Gowda\nSecretary, Eco Club\n\n----------\n\nTo: greenleafnursery@example.com\nSubject: Order for 50 saplings for Van Mahotsav\n\nDear Sir/Madam,\n\nOur school Eco Club wishes to order 50 saplings (20 neem, 20 jamun and 10 gulmohar) for a plantation drive on 10 July. Kindly deliver them to the school gate by 9 July and send the bill to this e-mail address. Payment will be made on delivery.\n\nRegards,\nRohan Gowda\nSecretary, Eco Club, Green Valley School, Mysuru",
          },
          {
            type: "callout",
            tone: "exam",
            title: "How ICSE marks notices and e-mails",
            md: "Marks go to the **format** (every part of the layout in the right place), the **content** (all the details the situation needs: date, time, venue, contact) and **accuracy and brevity** of language.\n\nCommon errors: a notice with no date or no issuer's name, a missing subject line in the e-mail, a body that goes far over the word limit, and writing the e-mail as a long letter with addresses.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "multi",
                q: "Which details must a notice about an event include?",
                options: ["Date and time of the event", "Venue", "Whom to contact", "Your opinion of the event"],
                answers: [0, 1, 2],
                explain: "A notice answers **what, when, where, who and how**. Opinions do not belong in a notice.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "An e-mail does not need a subject line, because the reader will open it anyway.",
            right: "Every formal e-mail needs a short, specific **Subject** line.",
            why: "The subject line tells the reader what the mail is about before opening it, and it is part of the format the examiner checks.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which heading is best for a notice about a blood donation camp?",
                options: ["NOTICE", "BLOOD DONATION CAMP", "Dear Students", "Please read this carefully"],
                answer: 1,
                explain: "The heading names the event in a few words, in capitals. 'NOTICE' is a separate line above it, and notices have no salutation.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does it belong in a notice or an e-mail?",
              groups: ["Notice", "E-mail"],
              items: [
                { text: "The word NOTICE at the top", group: 0, hint: "It labels the announcement on a board." },
                { text: "To: principal@example.com", group: 1, hint: "An address line is used only in e-mails." },
                { text: "Name of the school at the top", group: 0, hint: "The institution issuing the announcement." },
                { text: "Subject: Request for leave", group: 1, hint: "E-mails always have a subject line." },
                { text: "Cc: classteacher@example.com", group: 1, hint: "Cc sends a copy to another reader." },
                { text: "Heading in capitals, like 'INTER-HOUSE QUIZ'", group: 0, hint: "Notices have a bold title." },
              ],
              explain: "A notice speaks to many people from a board, so it has the institution, NOTICE, date and heading. An e-mail goes to named addresses, so it has To, Cc and Subject.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Notice: institution, NOTICE, date, heading, body (what, when, where, who, how), name and designation.",
              "E-mail: To, (Cc/Bcc), Subject, salutation, body, closing, name.",
              "ICSE often sets both on the same situation; keep the facts consistent.",
              "Keep to the word limit; be brief and complete.",
            ],
          },
        ],
        flashcards: [
          { front: "Notice", back: "A short public announcement displayed on a notice board." },
          { front: "Five questions a notice answers", back: "What, when, where, who (can take part) and how (whom to contact)." },
          { front: "Parts of an e-mail", back: "To, Cc/Bcc (optional), Subject, salutation, body, closing, name." },
          { front: "Cc", back: "Carbon copy: sends a copy of the e-mail to another person, visible to all." },
          { front: "Bcc", back: "Blind carbon copy: sends a copy without the other readers seeing that address." },
          { front: "Who signs a notice?", back: "The person issuing it, with name and designation (e.g. Secretary, Eco Club)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What comes right after the word NOTICE in the ICSE layout?",
            options: ["The body", "The date", "The issuer's name", "The subject line"],
            answer: 1,
            explain: "Institution → NOTICE → **date** → heading → body → name and designation.",
          },
          {
            kind: "truefalse",
            q: "A notice should be written in the first person, like a letter: 'Dear students, I am happy to tell you...'",
            answer: false,
            explain: "Notices are short and impersonal: 'The Eco Club will hold...'. They do not have a salutation.",
          },
          {
            kind: "fill",
            q: "The e-mail field that sends a copy without other readers seeing it is called ___.",
            answer: ["Bcc", "blind carbon copy"],
            explain: "**Bcc** (blind carbon copy) hides that address from the other readers.",
          },
          {
            kind: "order",
            q: "Arrange the parts of a notice.",
            items: ["Name of the institution", "NOTICE", "Date", "Heading", "Body", "Name and designation"],
            explain: "This is the standard ICSE notice layout.",
          },
          {
            kind: "mcq",
            q: "Which is the best subject line for an e-mail ordering books for the school library?",
            options: ["Subject: Hi", "Subject: Order of 30 Class 10 reference books", "Subject: Urgent!!!", "Subject: Books books books"],
            answer: 1,
            explain: "A subject line should be short and say exactly what the mail is about.",
          },
          {
            kind: "multi",
            q: "Which are common errors in ICSE notice and e-mail answers?",
            options: ["No date on the notice", "No subject in the e-mail", "Going far beyond the word limit", "Giving the venue and time"],
            answers: [0, 1, 2],
            explain: "Missing date, missing subject and over-long bodies lose marks. Venue and time are needed details.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 9. Dialogue Completion (Karnataka SSLC)                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-dialogue-completion",
    title: "Dialogue Completion",
    icon: "💬",
    description: "Fill the missing lines of a conversation so that it makes sense and sounds natural.",
    lessons: [
      {
        slug: "completing-a-dialogue",
        title: "Completing a Dialogue",
        summary: "Use the line before and after each gap to write a reply or question that fits the meaning, tense and tone.",
        minutes: 13,
        xp: 35,
        blocks: [
          {
            type: "illustration",
            emoji: "📞",
            caption: "When you hear only one side of a phone call ('Yes... at six... no, near the temple'), you can still guess the questions. Dialogue completion uses the same skill.",
          },
          {
            type: "text",
            md: "In **dialogue completion**, you get a conversation between two people with some lines missing. You must write the missing lines so the whole conversation makes sense.\n\nThe secret is that **the answer is hidden in the next line**. If the next speaker says 'It starts at ten', the missing line was probably a question about the time.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Read the **whole** dialogue first to know who is speaking, where, and why.",
              "For each gap, read the line **before** and the line **after**.",
              "If the next line is an answer, write a **question** (with a question mark). If the next line is a question, write a **statement** or answer.",
              "Match the **tense**, the **names and facts**, and the **tone** (polite to a teacher, friendly to a friend).",
              "Write a complete sentence, then read the whole dialogue again.",
            ],
          },
          {
            type: "example",
            title: "Filling the gaps",
            problem: "Complete the dialogue between Sneha and the school librarian.\n\nSneha: Good morning, ma'am. (a) ___\nLibrarian: Yes, you can borrow two books at a time.\nSneha: (b) ___\nLibrarian: You must return them within fourteen days.\nSneha: What happens if I return them late?\nLibrarian: (c) ___\nSneha: I will be careful. Thank you, ma'am.",
            steps: [
              "(a) The librarian answers 'Yes, you can borrow two books', so Sneha asked whether she can borrow books. Polite tone: 'May I...?'",
              "(b) The answer is about a time limit, so the question must be 'When / within how many days must I return them?'",
              "(c) Sneha asked about returning late. The librarian must give a consequence, and Sneha replies 'I will be careful', so it is a small penalty.",
              "Read again: tense (present / future), tone (polite), facts (two books, fourteen days) all match.",
            ],
            answer: "(a) May I borrow some books from the library?\n(b) How long can I keep them? / When should I return them?\n(c) You will have to pay a small fine of one rupee for every day you are late.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Scoring tips",
            md: "Marks are given when the line **fits the meaning** of what comes before and after and is **grammatically correct**. A line that is correct English but does not connect to the next speaker earns nothing.\n\nWatch the punctuation: a question needs a **question mark**. Keep each line short, about one sentence.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Ravi: ___\nMother: It's in the top drawer of your cupboard.\nWhat did Ravi most likely say?",
                options: ["I am going out.", "Where is my geometry box?", "The cupboard is new.", "When is dinner?"],
                answer: 1,
                explain: "The mother answers with a **place**, so Ravi asked **where** something was.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "I only need to look at the line before the gap.",
            right: "Look at the lines **before and after** the gap; the line after usually tells you exactly what was said.",
            why: "Many lines could follow the previous line, but only one kind fits the reply that comes next. Ignoring it is the most common reason for a 'correct but wrong' answer.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Next line: ‘It’s two hundred and ten rupees.’ Which fits?",
              emoji: "🗨️",
              options: [
                "Customer: I want a ticket.",
                "Customer: How much is a ticket to Mangaluru?",
                "Customer: Mangaluru is a nice city.",
              ],
              answer: 1,
              trap: 0,
              explain: "The next line is 'Clerk: It's two hundred and ten rupees.' The clerk gives a **price**, so the customer must have asked 'How much...?'. 'I want a ticket' is close, but the clerk would then ask 'Where to?'",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "If the next speaker asks a question, the missing line is usually a statement or an answer.",
                answer: true,
                explain: "A question usually follows a statement, and an answer follows a question. Use this pattern to choose the type of line.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Read the whole dialogue first.",
              "The line after the gap is your best clue.",
              "Answer next → write a question (with ?). Question next → write a statement.",
              "Match tense, facts and tone; write one complete sentence.",
            ],
          },
        ],
        flashcards: [
          { front: "Best clue in dialogue completion", back: "The line that comes right after the gap." },
          { front: "Next line gives a place", back: "The missing line probably asked 'Where...?'" },
          { front: "Next line gives a time", back: "The missing line probably asked 'When / What time...?'" },
          { front: "Next line gives a price", back: "The missing line probably asked 'How much...?'" },
          { front: "Tone", back: "Polite with elders and officials ('May I...?'), friendly with friends." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Teacher: ___\nStudent: Sorry, ma'am. I missed the bus.\nWhat did the teacher say?",
            options: ["Where do you live?", "Why are you late today?", "Did you finish your lunch?", "Sit down."],
            answer: 1,
            explain: "The student gives a **reason** and apologises, so the teacher asked **why** he was late.",
          },
          {
            kind: "mcq",
            q: "Anu: Shall we go to the park this evening?\nBen: ___\nAnu: Then let's go tomorrow.",
            options: [
              "Yes, let's go at five.",
              "Sorry, I have a dance class this evening.",
              "The park is near my house.",
              "I went yesterday too.",
            ],
            answer: 1,
            explain: "Anu's next line 'Then let's go tomorrow' shows Ben **could not** go this evening.",
            difficulty: 2,
            hint: "What would make Anu suggest another day?",
          },
          {
            kind: "truefalse",
            q: "A grammatically correct line that does not connect to the next speaker still gets full marks.",
            answer: false,
            explain: "The line must fit the conversation. Correct grammar alone is not enough.",
          },
          {
            kind: "fill",
            q: "Doctor: How ___ have you had this fever?\nPatient: For three days.",
            answer: ["long"],
            explain: "'For three days' answers **How long**.",
          },
          {
            kind: "order",
            q: "Arrange the steps for dialogue completion.",
            items: [
              "Read the whole dialogue",
              "Look at the lines before and after the gap",
              "Decide if the line is a question or a statement",
              "Write it with the right tense and punctuation",
            ],
            explain: "Understand the whole, use both neighbouring lines, decide the line type, then write carefully.",
          },
          {
            kind: "multi",
            q: "Which must your missing line match?",
            options: ["The tense of the conversation", "The facts already given", "The tone of the speakers", "The length of the longest line"],
            answers: [0, 1, 2],
            explain: "Tense, facts and tone must fit. Length does not matter as long as the line is complete.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 10. Reading Comprehension (CBSE, ICSE, KSEAB)                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "c10-reading-comprehension",
    title: "Reading Comprehension",
    icon: "📖",
    description: "Strategies for unseen passages: skimming, scanning, word meaning from context, inference and answering in your own words.",
    lessons: [
      {
        slug: "unseen-passage-strategies",
        title: "Cracking an Unseen Passage",
        summary: "A step-by-step method for unseen passages, the main question types, and practice on an original passage.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Every board tests **reading comprehension** with an **unseen passage**: a text you have not read before, followed by questions. CBSE uses factual and discursive passages with objective and short-answer questions; ICSE asks vocabulary questions, short answers in your own words and a short summary; Karnataka SSLC asks short-answer and objective questions.\n\nThe good news: the answers are in the passage. You only need a method to find them.",
          },
          {
            type: "table",
            headers: ["Strategy", "What you do", "When it helps"],
            rows: [
              ["**Skimming**", "Read quickly for the general idea of each paragraph", "Title, main idea, writer's purpose"],
              ["**Scanning**", "Look quickly for a key word, name or number", "Factual questions"],
              ["**Context clues**", "Use the words around an unknown word to guess its meaning", "Vocabulary questions"],
              ["**Inference**", "Work out what the writer suggests but does not say directly", "'Why do you think...?' questions"],
            ],
          },
          { type: "heading", text: "Practice passage" },
          {
            type: "text",
            md: "**(1)** When Lalitha was twelve, her grandmother showed her a clay pot full of seeds. ‘These are older than your father,’ she said. Every year, she kept back a handful of grain from her harvest of red rice, dried it in the sun and stored it for the next sowing.\n\n**(2)** Most farmers in their village had stopped doing this. They bought fresh packets of seed from the market each season, because the new varieties gave a bigger harvest. Slowly, the old varieties were vanishing. Some of them could survive a dry year or grow in salty soil, but no one remembered where to find them.\n\n**(3)** Lalitha decided to act. With two friends, she went from house to house, asking elderly farmers for any seeds they still kept. In six months, they collected forty-two varieties of rice, millet and pulses. They labelled each jar with the name of the plant, the family who gave it and the season in which it should be sown.\n\n**(4)** The ‘seed library’ now sits in a corner of the village school. A farmer may borrow a cupful of seeds but must return twice as much after the harvest. In this way the collection grows every year, and the knowledge of the old farmers lives on.",
          },
          {
            type: "example",
            title: "Answering an inference question",
            problem: "From paragraph 2, why might the loss of the old varieties be a problem for farmers in the future?",
            steps: [
              "The question asks 'why might', so the answer is an **inference**, not a copied line.",
              "Scan paragraph 2 for what was special about the old seeds: they 'could survive a dry year or grow in salty soil'.",
              "Think: what happens if those seeds disappear? Farmers lose crops that can survive drought and poor soil.",
              "Write the answer in your own words, in one or two complete sentences.",
            ],
            answer: "Some old varieties could grow in dry years or in salty soil. If they disappear, farmers will have no crops to fall back on when there is a drought or the soil is poor.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Why had most farmers stopped saving seeds? (paragraph 2)",
                options: [
                  "Their grandmothers had told them not to.",
                  "New varieties from the market gave a bigger harvest.",
                  "The old seeds were too expensive.",
                  "The school took all the seeds.",
                ],
                answer: 1,
                explain: "Paragraph 2: they bought fresh packets 'because the new varieties gave a bigger harvest'. This is a **factual** question; scan for 'because'.",
              },
              {
                kind: "fill",
                q: "Find a word in paragraph 2 that means 'disappearing': ___",
                answer: ["vanishing"],
                explain: "'the old varieties were **vanishing**' — they were slowly disappearing.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "When a question says 'in your own words', I can copy the whole sentence from the passage.",
            right: "Pick out the idea from the passage and **rephrase** it in simple words of your own.",
            why: "Lifting long lines shows you found the place but not that you understood it. ICSE in particular deducts for copying when own words are asked. Short key words like names may be kept.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tips for comprehension",
            md: "**Read the questions first**, then the passage, so you know what to look for. Answer in **complete sentences** unless the question asks for a word or phrase. For vocabulary questions, give a word of the **same part of speech** as the one in the passage ('vanishing' → 'disappearing', not 'disappear').\n\nFor **MCQs** (CBSE), check every option against the passage; the wrong options often use words from the passage in a changed meaning. For an ICSE **summary**, keep to the word limit and use your own sentences.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "What kind of question is each one?",
              groups: ["Factual (find it)", "Inference (work it out)", "Vocabulary"],
              items: [
                { text: "How many varieties did they collect?", group: 0, hint: "The number is written in paragraph 3." },
                { text: "What does the word 'labelled' mean here?", group: 2, hint: "It asks for a word meaning." },
                { text: "Why do you think the grandmother called the seeds 'older than your father'?", group: 1, hint: "The passage does not say why; you work it out." },
                { text: "Where is the seed library kept?", group: 0, hint: "Paragraph 4 says it directly." },
                { text: "What kind of person is Lalitha?", group: 1, hint: "You judge from her actions." },
                { text: "Give a word from paragraph 4 that means 'take on loan'.", group: 2, hint: "Look for 'borrow'." },
              ],
              explain: "Factual answers are written in the passage; inference answers come from clues in it; vocabulary answers need the meaning in context.",
            },
          },
          {
            type: "keypoints",
            items: [
              "Read the questions first, then skim the passage, then scan for answers.",
              "Factual: find it. Inference: work it out from clues. Vocabulary: use context.",
              "Answer in complete sentences and in your own words when asked.",
              "Match the part of speech in vocabulary answers.",
              "Check every MCQ option against the passage.",
            ],
          },
        ],
        flashcards: [
          { front: "Skimming", back: "Reading quickly to get the general idea." },
          { front: "Scanning", back: "Looking quickly for a particular word, name or number." },
          { front: "Inference", back: "A conclusion you draw from clues in the passage when it is not stated directly." },
          { front: "Context clues", back: "Words and sentences around an unknown word that help you guess its meaning." },
          { front: "Vocabulary answer rule", back: "Give a word of the same part of speech and tense as the passage word." },
          { front: "'In your own words'", back: "Rephrase the idea; do not copy whole lines." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "How many varieties of seeds did Lalitha and her friends collect in six months?",
            answer: 42,
            explain: "Paragraph 3: 'forty-two varieties of rice, millet and pulses'.",
          },
          {
            kind: "mcq",
            q: "Why must a farmer return twice as many seeds as he borrows?",
            options: [
              "To pay a fine for borrowing",
              "So that the collection grows every year",
              "Because the school needs food",
              "Because the seeds are expensive",
            ],
            answer: 1,
            explain: "Paragraph 4: 'In this way the collection grows every year.'",
          },
          {
            kind: "mcq",
            q: "Which is the most suitable title for the passage?",
            options: ["Market Seeds", "A Grandmother's Pot", "The Seed Library", "Rice and Millet"],
            answer: 2,
            explain: "A title should cover the **whole** passage. 'A Grandmother's Pot' fits only paragraph 1.",
            difficulty: 2,
            hint: "Which title covers all four paragraphs?",
          },
          {
            kind: "truefalse",
            q: "According to the passage, the old varieties gave a bigger harvest than the new ones.",
            answer: false,
            explain: "The **new** varieties gave a bigger harvest; the old ones were valuable because some could survive drought or salty soil.",
          },
          {
            kind: "multi",
            q: "What did Lalitha and her friends write on each jar?",
            options: ["The name of the plant", "The family who gave it", "The season for sowing", "The price of the seeds"],
            answers: [0, 1, 2],
            explain: "Paragraph 3 lists three things: plant name, the family who gave it and the sowing season. No price is mentioned.",
          },
          {
            kind: "fill",
            q: "From paragraph 1, the grandmother dried the grain in the ___ before storing it.",
            answer: ["sun"],
            explain: "'dried it in the **sun** and stored it for the next sowing'.",
          },
          {
            kind: "order",
            q: "Arrange a good method for an unseen passage.",
            items: ["Read the questions", "Skim the passage for the main idea", "Scan for each answer", "Write answers in complete sentences", "Check answers against the passage"],
            explain: "Questions first, then skim, scan, write and check.",
          },
          {
            kind: "mcq",
            q: "What can we infer about Lalitha from paragraph 3?",
            options: [
              "She was lazy and waited for others to act.",
              "She cared about the problem and took action to solve it.",
              "She wanted to sell the seeds for profit.",
              "She disliked her grandmother's ideas.",
            ],
            answer: 1,
            explain: "'Lalitha decided to act' and went house to house: she was concerned and determined. Nothing suggests profit.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "Editing and Omission": "c10-editing-omission",
  "Transformation of Sentences": "c10-transformation-of-sentences",
  "Joining Sentences": "c10-joining-and-linkers",
  "Linkers and Connectors": "c10-joining-and-linkers",
  "Formal Letter Writing": "c10-letter-writing",
  "Letter Writing (Formal and Informal)": "c10-letter-writing",
  "Analytical Paragraph": "c10-analytical-paragraph",
  "Paragraph Writing": "c10-paragraph-writing",
  "Composition (Essay Writing)": "c10-composition",
  "Notice and E-mail Writing": "c10-notice-and-email",
  "Dialogue Completion": "c10-dialogue-completion",
  "Reading Comprehension": "c10-reading-comprehension",
  "Comprehension": "c10-reading-comprehension",
};
