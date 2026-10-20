import type { Subject } from "@/content/types";

export const english: Subject = {
  slug: "english",
  title: "English",
  world: "school",
  icon: "📖",
  colors: ["#f97316", "#ec4899"],
  tagline: "Read sharper, write clearer, speak with confidence.",
  description:
    "Master the toolkit of English: the eight parts of speech, every tense, sentence structure and punctuation, active and passive voice, reported speech, vocabulary-building tricks, and the craft of paragraphs, essays and letters — plus strategies to read any passage with understanding.",
  levels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"],
  stages: ["middle", "secondary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "parts-of-speech",
      title: "Parts of Speech",
      icon: "🧩",
      description: "The eight word families that make up every English sentence.",
      lessons: [
        {
          slug: "nouns-pronouns-adjectives",
          title: "Nouns, Pronouns & Adjectives",
          summary: "Naming words, stand-in words and describing words.",
          minutes: 12,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "Every English word belongs to a 'job family' called a **part of speech**. There are eight: noun, pronoun, adjective, verb, adverb, preposition, conjunction and interjection. Learn their jobs and you can untangle any sentence — let's start with the naming crew.",
            },
            { type: "heading", text: "Nouns — naming words" },
            {
              type: "table",
              headers: ["Type", "What it names", "Examples"],
              rows: [
                ["Common", "General person, place or thing", "city, teacher, river"],
                ["Proper", "A specific name (capital letter!)", "Tokyo, Ms Rao, the Nile"],
                ["Abstract", "Ideas and feelings you cannot touch", "courage, freedom, joy"],
                ["Collective", "A group as one unit", "a flock of birds, a team, a jury"],
                ["Countable / uncountable", "Can or cannot be counted", "three apples / some water"],
              ],
            },
            { type: "heading", text: "Pronouns — stand-ins" },
            {
              type: "text",
              md: "Pronouns replace nouns so we don't repeat ourselves. *Priya lost Priya's bag, so Priya…* becomes *Priya lost **her** bag, so **she**…*",
            },
            {
              type: "table",
              headers: ["Kind", "Examples"],
              rows: [
                ["Personal (subject)", "I, you, he, she, it, we, they"],
                ["Personal (object)", "me, you, him, her, it, us, them"],
                ["Possessive", "mine, yours, his, hers, ours, theirs"],
                ["Reflexive", "myself, yourself, themselves"],
                ["Relative", "who, whom, whose, which, that"],
                ["Demonstrative", "this, that, these, those"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "I or me?",
              md: "Cover the other person's name. *Rahul and (I/me) went home* → *I went home*, so **Rahul and I**. *Give it to Rahul and (I/me)* → *give it to me*, so **Rahul and me**.",
            },
            { type: "heading", text: "Adjectives — describers" },
            {
              type: "text",
              md: "Adjectives describe nouns: a **gigantic** whale, **three** lanterns, **French** bread. When you stack them, English has a natural order: **opinion → size → age → shape → colour → origin → material → purpose**. That's why we say *a lovely little old round red Italian glass vase*, never *a red little lovely vase*.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "Fill in the pronoun: The children hurt ___ while playing. (reflexive)",
                  answer: ["themselves"],
                  explain: "The reflexive pronoun for 'children' (they) is 'themselves'.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Nouns name; proper nouns take capital letters.",
                "Pronouns replace nouns to avoid repetition.",
                "Adjectives describe nouns and follow a natural order when stacked.",
              ],
            },
          ],
          flashcards: [
            { front: "Abstract noun", back: "Names an idea or feeling, e.g. honesty, fear." },
            { front: "Collective noun", back: "Names a group, e.g. a herd, a choir." },
            { front: "Reflexive pronoun", back: "Refers back to the subject: myself, themselves." },
            { front: "Adjective order", back: "Opinion, size, age, shape, colour, origin, material, purpose." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which word is an abstract noun?",
              options: ["Table", "Bravery", "London", "Dog"],
              answer: 1,
              explain: "Bravery is a quality you cannot touch or see.",
            },
            {
              kind: "fill",
              q: "My sister and ___ are going to the fair. (I / me)",
              answer: ["i"],
              explain: "Remove 'My sister and' → 'I am going', so 'I' is correct.",
            },
            {
              kind: "order",
              q: "Put the adjectives in natural order: a ___ ___ ___ bag.",
              items: ["beautiful", "small", "leather"],
              explain: "Opinion (beautiful) → size (small) → material (leather).",
            },
            {
              kind: "fill",
              q: "A ___ of wolves howled at the moon. (collective noun)",
              answer: ["pack"],
              explain: "A group of wolves is called a pack.",
            },
            {
              kind: "truefalse",
              q: "'Whose' is a relative pronoun.",
              answer: true,
              explain: "Whose links a clause to a noun: 'the girl whose bike was stolen'.",
            },
          ],
        },
        {
          slug: "verbs-adverbs-and-connectors",
          title: "Verbs, Adverbs & Connectors",
          summary: "Action words, how-words, and the little words that link everything together.",
          minutes: 13,
          xp: 25,
          blocks: [
            {
              type: "text",
              md: "Try writing a sentence without a verb. *The dog… the ball… the park.* It's a list, not a sentence! **Verbs** are the engine; the other parts of speech steer, connect and add feeling.",
            },
            {
              type: "table",
              headers: ["Part of speech", "Job", "Examples"],
              rows: [
                ["Verb", "Shows action or state of being", "run, think, is, seem"],
                ["Adverb", "Describes a verb, adjective or other adverb (how, when, where, how much)", "quickly, yesterday, here, very"],
                ["Preposition", "Shows the relationship of a noun to something else (often place or time)", "in, on, under, between, after"],
                ["Conjunction", "Joins words or clauses", "and, but, because, although"],
                ["Interjection", "Expresses sudden emotion", "Wow! Oops! Ouch!"],
              ],
            },
            { type: "heading", text: "Kinds of verbs" },
            {
              type: "list",
              items: [
                "**Action verbs** — *jump, write, laugh*.",
                "**Linking verbs** — connect the subject to a description: *She **is** tired. The soup **tastes** salty.*",
                "**Helping (auxiliary) verbs** — *be, have, do* and modals like *can, must, should*: *I **have** finished.*",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "FANBOYS",
              md: "The seven **coordinating conjunctions** spell FANBOYS: **F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o. **Subordinating** conjunctions (because, although, when, if, unless) start a dependent clause.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "In 'She sings *beautifully*', what part of speech is the italic word?",
                  options: ["Adjective", "Adverb", "Verb", "Preposition"],
                  answer: 1,
                  explain: "Beautifully tells us *how* she sings, so it modifies the verb.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Same word, different job",
              md: "A word's part of speech depends on how it's used. *I **run** every day* (verb). *That was a long **run*** (noun). *The cat slept **outside*** (adverb). *We waited **outside** the hall* (preposition).",
            },
            {
              type: "keypoints",
              items: [
                "Every sentence needs a verb.",
                "Adverbs answer how, when, where or to what extent.",
                "Prepositions show position and relationships.",
                "Conjunctions join; interjections exclaim.",
              ],
            },
          ],
          flashcards: [
            { front: "Linking verb", back: "Connects the subject to a description (is, seems, becomes)." },
            { front: "FANBOYS", back: "For, and, nor, but, or, yet, so — coordinating conjunctions." },
            { front: "Preposition", back: "Shows the relationship between a noun and another word (in, on, under)." },
            { front: "Interjection", back: "A word expressing sudden emotion: Wow! Ouch!" },
          ],
          quiz: [
            {
              kind: "fill",
              q: "The cat hid ___ the sofa. (preposition meaning 'below')",
              answer: ["under", "beneath", "underneath", "below"],
              explain: "Under / beneath / underneath show position below something.",
            },
            {
              kind: "mcq",
              q: "Which word is a subordinating conjunction?",
              options: ["And", "But", "Although", "So"],
              answer: 2,
              explain: "Although begins a dependent clause; the others are FANBOYS.",
            },
            {
              kind: "multi",
              q: "Select all the adverbs: 'Yesterday the very tired runner finished slowly.'",
              options: ["Yesterday", "very", "tired", "runner", "slowly"],
              answers: [0, 1, 4],
              explain: "Yesterday (when), very (how much — modifies 'tired'), slowly (how). 'Tired' is an adjective; 'runner' is a noun.",
            },
            {
              kind: "fill",
              q: "I wanted to go, ___ it was raining heavily. (FANBOYS word showing contrast)",
              answer: ["but", "yet"],
              explain: "But or yet show contrast between the two clauses.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "tenses-and-sentences",
      title: "Tenses, Sentences & Punctuation",
      icon: "⏳",
      description: "Talk about any time, build any sentence, and punctuate it perfectly.",
      lessons: [
        {
          slug: "the-twelve-tenses",
          title: "The Twelve Tenses",
          summary: "Three times × four aspects = every way to place an action in time.",
          minutes: 16,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "*I eat. I was eating. I will have eaten.* English uses verbs to time-travel. There are **three times** (past, present, future) and **four aspects** (simple, continuous, perfect, perfect continuous) — giving 12 tenses.",
            },
            {
              type: "table",
              headers: ["", "Past", "Present", "Future"],
              rows: [
                ["Simple", "I played", "I play", "I will play"],
                ["Continuous", "I was playing", "I am playing", "I will be playing"],
                ["Perfect", "I had played", "I have played", "I will have played"],
                ["Perfect continuous", "I had been playing", "I have been playing", "I will have been playing"],
              ],
            },
            {
              type: "table",
              headers: ["Aspect", "Use it for", "Example"],
              rows: [
                ["Simple", "Facts, habits, completed single actions", "Water boils at 100 °C. She walked home."],
                ["Continuous", "Actions in progress", "They are watching a film."],
                ["Perfect", "Actions completed before a point in time", "I have finished my homework."],
                ["Perfect continuous", "Actions that continued up to a point", "He had been waiting for an hour when the bus came."],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Present perfect vs simple past",
              md: "Use **simple past** with a finished time: *I **saw** her **yesterday***. Use **present perfect** when time is unfinished or not stated: *I **have seen** that film*. Never say *I have seen her yesterday*.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "By next June, she ___ (finish) her course. (future perfect)",
                  answer: ["will have finished"],
                  explain: "Future perfect = will have + past participle.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Signal words",
              md: "*Every day, usually* → simple present. *Now, at the moment* → present continuous. *Already, yet, since, for* → present perfect. *Yesterday, ago, last week* → simple past.",
            },
            {
              type: "keypoints",
              items: [
                "12 tenses = 3 times × 4 aspects.",
                "Continuous uses be + -ing; perfect uses have + past participle.",
                "Finished time words (yesterday, ago) go with simple past.",
              ],
            },
          ],
          flashcards: [
            { front: "Present perfect form", back: "has/have + past participle (I have eaten)." },
            { front: "Past continuous form", back: "was/were + -ing (They were singing)." },
            { front: "Future perfect continuous", back: "will have been + -ing (I will have been working)." },
            { front: "Signal words for present perfect", back: "already, yet, since, for, ever, never." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "Look! The baby ___ (sleep). (present continuous)",
              answer: ["is sleeping"],
              explain: "'Look!' signals an action happening now: is + sleeping.",
            },
            {
              kind: "fill",
              q: "When I arrived, the train had already ___ (leave). (past perfect)",
              answer: ["left"],
              explain: "Past perfect: had left — the train left before I arrived.",
            },
            {
              kind: "mcq",
              q: "Which sentence is correct?",
              options: [
                "I have visited Paris last year.",
                "I visited Paris last year.",
                "I am visiting Paris last year.",
                "I had visit Paris last year.",
              ],
              answer: 1,
              explain: "'Last year' is finished time, so use simple past.",
            },
            {
              kind: "order",
              q: "Order these to show events from earliest to latest in: 'By the time we ate, we had been cooking for hours.'",
              items: ["we had been cooking", "we ate"],
              explain: "The past perfect continuous action (cooking) happened before the simple past action (ate).",
            },
            {
              kind: "mcq",
              q: "'She has been learning Spanish for three years.' Which tense is this?",
              options: ["Present perfect", "Present perfect continuous", "Past perfect continuous", "Present continuous"],
              answer: 1,
              explain: "has been + -ing = present perfect continuous.",
            },
          ],
        },
        {
          slug: "sentence-structure",
          title: "Building Strong Sentences",
          summary: "Subjects, predicates, clauses, sentence types and subject–verb agreement.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Great writers vary their sentences like musicians vary rhythm: a short punch. Then a longer, flowing sentence that carries the reader along, building detail as it goes. To do this, you need to know how sentences are built.",
            },
            {
              type: "text",
              md: "Every sentence has a **subject** (who or what) and a **predicate** (what the subject does or is).\n\n**The tired hikers** | *rested by the lake.*",
            },
            { type: "heading", text: "Clauses" },
            {
              type: "list",
              items: [
                "**Independent clause** — makes sense alone: *The bell rang.*",
                "**Dependent clause** — cannot stand alone: *when the bell rang…*",
              ],
            },
            {
              type: "table",
              headers: ["Sentence type", "Recipe", "Example"],
              rows: [
                ["Simple", "One independent clause", "The storm passed."],
                ["Compound", "Two independent clauses + FANBOYS or semicolon", "The storm passed, and the sun came out."],
                ["Complex", "Independent + dependent clause", "After the storm passed, we went outside."],
                ["Compound-complex", "Two independent + at least one dependent", "After the storm passed, the sun came out, and we went outside."],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "'Because she practised daily, Ana won the contest.' What type of sentence is this?",
                  options: ["Simple", "Compound", "Complex", "Compound-complex"],
                  answer: 2,
                  explain: "One dependent clause (Because she practised daily) + one independent clause.",
                },
              ],
            },
            { type: "heading", text: "Subject–verb agreement" },
            {
              type: "list",
              items: [
                "Singular subject → singular verb: *The dog **barks**.*",
                "Plural subject → plural verb: *The dogs **bark**.*",
                "Ignore phrases in between: *The box **of chocolates** **is** on the table.*",
                "*Each, everyone, nobody* are singular: *Everyone **has** a ticket.*",
                "*Neither… nor / either… or* — the verb agrees with the nearer subject: *Neither the teacher nor the students **were** late.*",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Fragments and run-ons",
              md: "**Fragment:** *Because I was late.* (dependent clause alone). **Run-on:** *I was late I missed the bus.* Fix it with a full stop, a semicolon, or a conjunction: *I was late, so I missed the bus.*",
            },
            {
              type: "keypoints",
              items: [
                "Sentences need a subject and a predicate.",
                "Independent clauses stand alone; dependent clauses need help.",
                "Four sentence types: simple, compound, complex, compound-complex.",
                "Verbs must agree with their subjects in number.",
              ],
            },
          ],
          flashcards: [
            { front: "Independent clause", back: "A clause that can stand alone as a sentence." },
            { front: "Complex sentence", back: "One independent clause + at least one dependent clause." },
            { front: "Run-on sentence", back: "Two independent clauses joined without proper punctuation or a conjunction." },
            { front: "Agreement with 'everyone'", back: "Singular verb: Everyone is ready." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "The list of names ___ on the board. (is / are)",
              answer: ["is"],
              explain: "The subject is 'list' (singular); 'of names' is just a phrase.",
            },
            {
              kind: "fill",
              q: "Neither my parents nor my brother ___ coming. (is / are)",
              answer: ["is"],
              explain: "The verb agrees with the nearer subject, 'brother' (singular).",
            },
            {
              kind: "order",
              q: "Arrange the words into a correct complex sentence.",
              items: ["When", "the", "rain", "stopped,", "we", "played", "outside."],
              explain: "Dependent clause first (When the rain stopped,) then independent clause.",
            },
            {
              kind: "mcq",
              q: "Which is a sentence fragment?",
              options: ["She laughed.", "Running down the street.", "Run!", "The sky is blue."],
              answer: 1,
              explain: "It has no subject or main verb, so it cannot stand alone. 'Run!' is a command with an understood subject (you).",
            },
          ],
        },
        {
          slug: "punctuation-power",
          title: "Punctuation Power",
          summary: "Commas, apostrophes, semicolons, colons and quotation marks — used with confidence.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "illustration",
              emoji: "🐼",
              caption: "'Eats, shoots and leaves' vs 'eats shoots and leaves' — one comma turns a panda into an outlaw.",
            },
            {
              type: "text",
              md: "*Let's eat, Grandma!* versus *Let's eat Grandma!* Punctuation saves lives — or at least meanings. Each mark is a traffic signal telling the reader when to pause, stop or pay attention.",
            },
            {
              type: "table",
              headers: ["Mark", "Main uses", "Example"],
              rows: [
                ["Full stop .", "Ends a statement", "The museum opens at nine."],
                ["Comma ,", "Lists; after intro words; before FANBOYS joining clauses; around extra info", "Yes, I'll bring apples, pears and figs."],
                ["Apostrophe '", "Possession; contractions", "Mia's phone; don't"],
                ["Semicolon ;", "Joins two closely related independent clauses", "It was late; the streets were empty."],
                ["Colon :", "Introduces a list, explanation or quote", "Pack three things: water, a map and a torch."],
                ["Quotation marks ' ' or “ ”", "Direct speech; titles of short works", "“Wait for me,” she called."],
                ["Question mark ? / exclamation mark !", "Questions; strong feeling", "Are you ready? Watch out!"],
              ],
            },
            { type: "heading", text: "Apostrophe rules" },
            {
              type: "list",
              items: [
                "Singular owner: add **'s** — *the girl's book* (one girl).",
                "Plural owner ending in s: add **'** — *the girls' books* (many girls).",
                "Irregular plural: add **'s** — *the children's toys*.",
                "**It's** = it is; **its** = belonging to it. *It's raining; the dog wagged its tail.*",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which is correct for toys belonging to several boys?",
                  options: ["The boy's toys", "The boys' toys", "The boys's toys", "The boys toys'"],
                  answer: 1,
                  explain: "Plural noun ending in s → add the apostrophe after the s.",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Comma splice",
              md: "A comma alone cannot join two complete sentences: *I love maths, it is fun* is wrong. Use a semicolon (*I love maths; it is fun*), a full stop, or add a conjunction (*I love maths because it is fun*).",
            },
            {
              type: "keypoints",
              items: [
                "Commas separate list items, intro words and clauses joined by FANBOYS.",
                "Apostrophes show possession or missing letters — never plurals.",
                "Semicolons join related sentences; colons introduce.",
                "Its = possessive; it's = it is.",
              ],
            },
          ],
          flashcards: [
            { front: "Semicolon", back: "Joins two closely related independent clauses." },
            { front: "Colon", back: "Introduces a list, explanation or example." },
            { front: "its vs it's", back: "its = belonging to it; it's = it is / it has." },
            { front: "Comma splice", back: "The error of joining two sentences with only a comma." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "The cat licked ___ paw. (its / it's)",
              answer: ["its"],
              explain: "Possessive — the paw belongs to the cat.",
            },
            {
              kind: "fill",
              q: "The ___ playground was repainted. (children / children's / childrens')",
              answer: ["children's"],
              explain: "'Children' is an irregular plural, so add 's.",
            },
            {
              kind: "mcq",
              q: "Which sentence uses a semicolon correctly?",
              options: [
                "I like; pizza and pasta.",
                "She studied hard; she passed easily.",
                "Because it rained; we stayed in.",
                "We need; eggs, milk and bread.",
              ],
              answer: 1,
              explain: "Both sides are complete, related sentences.",
            },
            {
              kind: "truefalse",
              q: "Apostrophes are used to make ordinary plurals, like 'apple's for sale'.",
              answer: false,
              explain: "Plurals need no apostrophe: 'apples for sale'.",
            },
            {
              kind: "fill",
              q: "Bring the following___ a pen, a ruler and a calculator. (punctuation mark)",
              answer: [":", "colon"],
              explain: "A colon introduces the list.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "voice-and-speech",
      title: "Voice & Reported Speech",
      icon: "🔄",
      description: "Switch between active and passive voice, and between direct and indirect speech.",
      lessons: [
        {
          slug: "active-and-passive-voice",
          title: "Active & Passive Voice",
          summary: "Who did it, or what was done? Learn to flip sentences between the two voices.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "*The chef burnt the toast.* vs *The toast was burnt (by the chef).* Same event, different spotlight. **Active voice** spotlights the doer. **Passive voice** spotlights the thing that the action happened to.",
            },
            {
              type: "formula",
              tex: "\\text{Passive} = \\text{object} + \\textbf{be} + \\text{past participle} \\; (+ \\text{by agent})",
            },
            { type: "heading", text: "Three steps to convert" },
            {
              type: "list",
              ordered: true,
              items: [
                "Move the **object** to the front as the new subject.",
                "Use the correct form of **be** in the **same tense** as the original verb, followed by the past participle.",
                "Add **by + the doer** (optional if the doer is unknown or unimportant).",
              ],
            },
            {
              type: "table",
              headers: ["Tense", "Active", "Passive"],
              rows: [
                ["Simple present", "Ravi writes a letter.", "A letter **is written** by Ravi."],
                ["Present continuous", "Ravi is writing a letter.", "A letter **is being written** by Ravi."],
                ["Simple past", "Ravi wrote a letter.", "A letter **was written** by Ravi."],
                ["Present perfect", "Ravi has written a letter.", "A letter **has been written** by Ravi."],
                ["Simple future", "Ravi will write a letter.", "A letter **will be written** by Ravi."],
                ["Modal", "Ravi must write a letter.", "A letter **must be written** by Ravi."],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "Active: The wind broke the window. Passive: The window ___ by the wind.",
                  answer: ["was broken"],
                  explain: "Simple past → was + past participle (broken).",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "When passive is better",
              md: "Use passive when the doer is unknown (*My bike was stolen*), obvious (*He was arrested*), or less important than the result (*The vaccine was tested on 30,000 volunteers*). Otherwise, active voice is usually clearer and livelier.",
            },
            {
              type: "callout",
              tone: "note",
              title: "No object, no passive",
              md: "Only verbs with an object (transitive verbs) can become passive. *She sleeps* has no object, so it has no passive form.",
            },
            {
              type: "keypoints",
              items: [
                "Active: doer + verb + object. Passive: object + be + past participle (+ by doer).",
                "Keep the same tense when converting.",
                "Use passive when the doer is unknown or unimportant.",
              ],
            },
          ],
          flashcards: [
            { front: "Active voice", back: "The subject performs the action: The dog chased the cat." },
            { front: "Passive voice", back: "The subject receives the action: The cat was chased by the dog." },
            { front: "Passive of present continuous", back: "is/are being + past participle." },
            { front: "Why can't 'She arrived' be passive?", back: "'Arrive' is intransitive — it has no object." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "Active: They are building a bridge. Passive: A bridge ___ ___ ___. (three words)",
              answer: ["is being built"],
              explain: "Present continuous passive: is being + built.",
            },
            {
              kind: "fill",
              q: "Active: Someone has eaten the cake. Passive: The cake ___.",
              answer: ["has been eaten"],
              explain: "Present perfect passive: has been + past participle. 'By someone' can be dropped.",
            },
            {
              kind: "mcq",
              q: "Which sentence is in the passive voice?",
              options: [
                "The students painted the mural.",
                "The mural was painted by the students.",
                "The students are painting.",
                "The students will paint the mural.",
              ],
              answer: 1,
              explain: "The subject (mural) receives the action, with was + past participle.",
            },
            {
              kind: "order",
              q: "Arrange into a passive sentence.",
              items: ["The", "results", "will", "be", "announced", "tomorrow."],
              explain: "Future passive: will be + past participle.",
            },
            {
              kind: "truefalse",
              q: "'The baby slept peacefully' can be changed into the passive voice.",
              answer: false,
              explain: "'Sleep' is intransitive here — there is no object to become the subject.",
            },
          ],
        },
        {
          slug: "direct-and-indirect-speech",
          title: "Direct & Indirect Speech",
          summary: "Report what someone said by shifting tenses, pronouns and time words.",
          minutes: 16,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "**Direct speech** quotes the exact words: *Meera said, “I am hungry.”* **Indirect (reported) speech** tells us what was said, without quotation marks: *Meera said that she was hungry.* Notice three things changed — the tense, the pronoun and the punctuation.",
            },
            { type: "heading", text: "Rule 1: Backshift the tense (when the reporting verb is past)" },
            {
              type: "table",
              headers: ["Direct", "Indirect"],
              rows: [
                ["Simple present (“I **play**”)", "Simple past (he **played**)"],
                ["Present continuous (“I **am playing**”)", "Past continuous (he **was playing**)"],
                ["Simple past (“I **played**”)", "Past perfect (he **had played**)"],
                ["Present perfect (“I **have played**”)", "Past perfect (he **had played**)"],
                ["will", "would"],
                ["can / may", "could / might"],
              ],
            },
            { type: "heading", text: "Rule 2: Change pronouns and time/place words" },
            {
              type: "table",
              headers: ["Direct", "Indirect"],
              rows: [
                ["now", "then"],
                ["today", "that day"],
                ["tomorrow", "the next day / the following day"],
                ["yesterday", "the day before / the previous day"],
                ["here", "there"],
                ["this / these", "that / those"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "Direct: Tom said, “I will call you tomorrow.” Indirect: Tom said that he ___ call me the next day.",
                  answer: ["would"],
                  explain: "will → would after a past reporting verb.",
                },
              ],
            },
            { type: "heading", text: "Questions, commands and requests" },
            {
              type: "list",
              items: [
                "**Yes/no questions** → use *if/whether* and normal word order: *“Are you ready?” she asked* → *She asked if I was ready.*",
                "**Wh- questions** → keep the question word, normal word order: *“Where do you live?”* → *He asked where I lived.*",
                "**Commands** → *told/ordered + to + verb*: *“Sit down.”* → *The teacher told us to sit down.*",
                "**Requests** → *requested/asked + to*: *“Please help me.”* → *She asked me to help her.*",
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Universal truths don't change",
              md: "If the statement is always true, keep the present tense: *The teacher said, “The Earth revolves around the Sun”* → *The teacher said that the Earth **revolves** around the Sun.*",
            },
            {
              type: "keypoints",
              items: [
                "Remove quotation marks and usually add 'that'.",
                "Backshift tenses when the reporting verb is in the past.",
                "Change pronouns and time/place words to fit the new viewpoint.",
                "Questions use if/whether or the wh-word with statement word order; commands use 'to + verb'.",
              ],
            },
          ],
          flashcards: [
            { front: "Indirect form of 'can'", back: "could" },
            { front: "'tomorrow' in reported speech", back: "the next day / the following day" },
            { front: "Reporting a yes/no question", back: "Use if or whether: She asked if I was ready." },
            { front: "Reporting a command", back: "told/ordered + object + to + verb." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "Direct: “I am reading,” said Lily. Indirect: Lily said that she ___ reading.",
              answer: ["was"],
              explain: "am reading → was reading.",
            },
            {
              kind: "fill",
              q: "Direct: He asked, “Do you like football?” Indirect: He asked ___ I liked football.",
              answer: ["if", "whether"],
              explain: "Yes/no questions are reported with if or whether.",
            },
            {
              kind: "mcq",
              q: "Choose the correct indirect speech: The coach said, “Run faster!”",
              options: [
                "The coach said that run faster.",
                "The coach told us to run faster.",
                "The coach told us that we run faster.",
                "The coach asked if we ran faster.",
              ],
              answer: 1,
              explain: "Commands become told + object + to + verb.",
            },
            {
              kind: "order",
              q: "Arrange into correct reported speech.",
              items: ["She", "asked", "me", "where", "I", "had", "been."],
              explain: "Wh-question, statement word order, and backshift: have been → had been.",
            },
            {
              kind: "fill",
              q: "Direct: “I saw it yesterday,” said Arjun. Indirect: Arjun said that he had seen it the ___ before.",
              answer: ["day"],
              explain: "yesterday → the day before (or the previous day).",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "vocabulary-building",
      title: "Vocabulary Building",
      icon: "🗝️",
      description: "Unlock thousands of words with roots, prefixes and suffixes, and use them precisely.",
      lessons: [
        {
          slug: "roots-prefixes-suffixes",
          title: "Roots, Prefixes & Suffixes",
          summary: "Break words into parts and decode meanings you've never seen before.",
          minutes: 14,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "You've probably never seen the word *unbreakability*, but you can work it out: **un-** (not) + **break** + **-able** (can be) + **-ity** (state of). Most long English words are built like LEGO from Greek and Latin pieces.",
            },
            {
              type: "table",
              headers: ["Prefix", "Meaning", "Examples"],
              rows: [
                ["un-, in-, im-, dis-", "not / opposite", "unhappy, invisible, impossible, dislike"],
                ["re-", "again", "rewrite, replay"],
                ["pre-", "before", "preview, prehistoric"],
                ["mis-", "wrongly", "misspell, misunderstand"],
                ["sub-", "under", "submarine, subway"],
                ["inter-", "between", "international, interact"],
                ["trans-", "across", "transport, transatlantic"],
              ],
            },
            {
              type: "table",
              headers: ["Root", "Meaning", "Examples"],
              rows: [
                ["bio", "life", "biology, biography"],
                ["graph / scrib", "write", "autograph, describe"],
                ["tele", "far", "telephone, telescope"],
                ["port", "carry", "portable, export"],
                ["spect / vis", "see", "spectator, vision"],
                ["aud", "hear", "audience, audible"],
                ["chron", "time", "chronological, synchronise"],
              ],
            },
            {
              type: "table",
              headers: ["Suffix", "Turns word into…", "Examples"],
              rows: [
                ["-ness, -ity, -ment, -tion", "noun", "kindness, ability, movement, creation"],
                ["-ful, -less, -ous, -able", "adjective", "hopeful, careless, famous, readable"],
                ["-ly", "adverb", "quickly, honestly"],
                ["-ise / -ize, -en, -ify", "verb", "modernise, widen, simplify"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Using roots, what is a 'chronometer' most likely to be?",
                  options: ["A device for measuring time", "A tool for drawing", "A type of telescope", "A hearing aid"],
                  answer: 0,
                  explain: "chron = time, meter = measure.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Build a word web",
              md: "When you learn a root, list 5 words that use it. *Port*: portable, transport, import, export, porter. Connections make words stick far better than lists.",
            },
            {
              type: "keypoints",
              items: [
                "Prefixes change meaning; suffixes often change the part of speech.",
                "Roots carry the core meaning.",
                "Decoding word parts helps you guess unfamiliar words.",
              ],
            },
          ],
          flashcards: [
            { front: "Prefix 'trans-'", back: "Across (transport, translate)." },
            { front: "Root 'aud'", back: "Hear (audio, audience)." },
            { front: "Suffix '-less'", back: "Without (fearless, endless) — forms adjectives." },
            { front: "Root 'graph'", back: "Write (paragraph, photograph)." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "Add a prefix meaning 'not': ___possible",
              answer: ["im", "impossible"],
              explain: "im- is used before p, b and m: impossible.",
            },
            {
              kind: "fill",
              q: "Turn the adjective 'happy' into a noun: happi___",
              answer: ["ness", "happiness"],
              explain: "-ness turns adjectives into nouns.",
            },
            {
              kind: "mcq",
              q: "What does 'subterranean' most likely mean?",
              options: ["Above the clouds", "Under the ground", "Across the sea", "Before history"],
              answer: 1,
              explain: "sub = under, terra = earth/ground.",
            },
            {
              kind: "order",
              q: "Build the word meaning 'the quality of not being able to be seen'.",
              items: ["in", "vis", "ib", "ility"],
              explain: "in + vis + ib + ility = invisibility.",
            },
          ],
        },
        {
          slug: "word-power-and-context",
          title: "Word Power: Synonyms, Idioms & Context Clues",
          summary: "Choose the precise word, avoid homophone traps and guess meanings from context.",
          minutes: 14,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "*The food was good.* Meh. *The curry was fragrant and fiery.* Now we can taste it! A rich vocabulary helps you say **exactly** what you mean.",
            },
            { type: "heading", text: "Synonyms, antonyms and shades of meaning" },
            {
              type: "text",
              md: "**Synonyms** have similar meanings; **antonyms** are opposites. But synonyms are rarely identical — they carry different **shades** (connotations). *Slim*, *thin*, *skinny* and *scrawny* all mean 'not fat' but range from positive to negative.",
            },
            {
              type: "table",
              headers: ["Plain word", "Stronger options"],
              rows: [
                ["big", "vast, enormous, colossal, towering"],
                ["said", "whispered, declared, muttered, insisted"],
                ["walk", "stroll, march, trudge, stride"],
                ["happy", "delighted, cheerful, elated, content"],
              ],
            },
            { type: "heading", text: "Homophone traps" },
            {
              type: "table",
              headers: ["Words", "Meaning"],
              rows: [
                ["their / there / they're", "belonging to them / that place / they are"],
                ["your / you're", "belonging to you / you are"],
                ["affect / effect", "verb: to influence / noun: a result"],
                ["principal / principle", "head of school or main / a rule or belief"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "___ going to love this film! (Your / You're)",
                  answer: ["you're"],
                  explain: "You're = you are.",
                },
              ],
            },
            { type: "heading", text: "Idioms" },
            {
              type: "list",
              items: [
                "**Break the ice** — start a conversation in an awkward situation.",
                "**Once in a blue moon** — very rarely.",
                "**Hit the books** — study hard.",
                "**A piece of cake** — very easy.",
                "**Under the weather** — feeling ill.",
              ],
            },
            { type: "heading", text: "Context clues" },
            {
              type: "text",
              md: "Meet an unknown word? The sentence often gives hints:\n\n- **Definition:** *The **arid**, or extremely dry, desert…*\n- **Contrast:** *Unlike his **gregarious** sister, Sam was shy.* (so gregarious = sociable)\n- **Example:** *She loves **legumes** such as lentils, beans and peas.*",
            },
            {
              type: "keypoints",
              items: [
                "Pick precise words with the right connotation.",
                "Watch out for homophones: there/their/they're, your/you're, affect/effect.",
                "Idioms mean more than their literal words.",
                "Use definition, contrast and example clues to decode new words.",
              ],
            },
          ],
          flashcards: [
            { front: "Connotation", back: "The feeling or association a word carries beyond its dictionary meaning." },
            { front: "affect vs effect", back: "affect = verb (to influence); effect = noun (a result)." },
            { front: "Once in a blue moon", back: "Very rarely." },
            { front: "Contrast clue", back: "A clue where the unknown word is set against its opposite (unlike, however)." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "The students left ___ bags in the hall. (their / there / they're)",
              answer: ["their"],
              explain: "Their shows possession.",
            },
            {
              kind: "fill",
              q: "Lack of sleep can ___ your concentration. (affect / effect)",
              answer: ["affect"],
              explain: "Here we need a verb meaning 'influence'.",
            },
            {
              kind: "mcq",
              q: "'Unlike the noisy city, the village was tranquil.' What does 'tranquil' mean?",
              options: ["Crowded", "Calm and quiet", "Dangerous", "Modern"],
              answer: 1,
              explain: "The contrast with 'noisy' signals that tranquil means calm.",
            },
            {
              kind: "order",
              q: "Order these from mildest to most intense.",
              items: ["warm", "hot", "scorching"],
              explain: "Each word expresses a higher degree of heat.",
            },
            {
              kind: "mcq",
              q: "If a test was 'a piece of cake', it was…",
              options: ["Delicious", "Very easy", "Very long", "Unfair"],
              answer: 1,
              explain: "The idiom means something is easy.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "writing-and-reading",
      title: "Writing & Reading Skills",
      icon: "✍️",
      description: "Craft paragraphs, essays and letters, and read any passage with understanding.",
      lessons: [
        {
          slug: "paragraphs-and-essays",
          title: "Paragraphs & Essays",
          summary: "The PEEL paragraph and the five-paragraph essay — a reliable blueprint for clear writing.",
          minutes: 18,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A paragraph is like a sandwich: a clear top slice (the main idea), tasty fillings (details), and a bottom slice that holds it together. Get paragraphs right and essays become simply stacks of good sandwiches.",
            },
            { type: "heading", text: "The PEEL paragraph" },
            {
              type: "table",
              headers: ["Step", "Purpose", "Example (topic: school uniforms)"],
              rows: [
                ["**P**oint", "Topic sentence stating your main idea", "School uniforms help students focus on learning."],
                ["**E**vidence", "Facts, examples or quotes", "Many schools report fewer arguments about clothing."],
                ["**E**xplain", "How the evidence supports the point", "Without fashion pressure, attention shifts to lessons."],
                ["**L**ink", "Connect back to the question or next paragraph", "Therefore, uniforms can create a calmer classroom."],
              ],
            },
            { type: "heading", text: "Essay structure" },
            {
              type: "list",
              ordered: true,
              items: [
                "**Introduction** — hook the reader, give context, and end with a clear **thesis statement** (your main argument).",
                "**Body paragraphs (usually 3)** — each one PEEL paragraph supporting the thesis.",
                "**Conclusion** — restate the thesis in fresh words, summarise key points, and end with a final thought. No new arguments!",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Hooks that work",
              md: "Open with a surprising fact (*An octopus has three hearts and blue blood*), a question, a short anecdote, or a vivid image. Avoid 'In this essay I will…'.",
            },
            {
              type: "table",
              headers: ["Purpose", "Useful linking words"],
              rows: [
                ["Adding", "furthermore, moreover, in addition"],
                ["Contrasting", "however, on the other hand, nevertheless"],
                ["Cause/effect", "therefore, as a result, consequently"],
                ["Concluding", "in conclusion, overall, ultimately"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "order",
                  q: "Put the PEEL steps in order.",
                  items: ["Point", "Evidence", "Explain", "Link"],
                  explain: "State the point, back it up, explain it, then link back.",
                },
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Plan for 5 minutes",
              md: "In exams, spend a few minutes jotting your thesis and three supporting points. A planned essay is almost always clearer than a rushed one.",
            },
            {
              type: "keypoints",
              items: [
                "PEEL: Point, Evidence, Explain, Link.",
                "Introduction ends with a thesis statement.",
                "Each body paragraph covers one main idea.",
                "Conclusions summarise — no new arguments.",
              ],
            },
          ],
          flashcards: [
            { front: "Thesis statement", back: "A sentence stating the essay's main argument, usually at the end of the introduction." },
            { front: "Topic sentence", back: "The first sentence of a paragraph stating its main idea." },
            { front: "PEEL", back: "Point, Evidence, Explain, Link." },
            { front: "Linking words for contrast", back: "however, nevertheless, on the other hand." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the parts of a five-paragraph essay.",
              items: ["Introduction with thesis", "Body paragraph 1", "Body paragraph 2", "Body paragraph 3", "Conclusion"],
              explain: "Intro, three body paragraphs, conclusion.",
            },
            {
              kind: "mcq",
              q: "Where does the thesis statement usually appear?",
              options: ["The first word of the essay", "At the end of the introduction", "In the middle of the conclusion", "In every paragraph"],
              answer: 1,
              explain: "It closes the introduction, setting up the body paragraphs.",
            },
            {
              kind: "fill",
              q: "Plastic harms marine life. ___, many countries have banned single-use bags. (cause/effect linker)",
              answer: ["therefore", "as a result", "consequently", "thus"],
              explain: "A cause/effect connector shows the ban is a result of the harm.",
            },
            {
              kind: "truefalse",
              q: "A conclusion is the best place to introduce a brand-new argument.",
              answer: false,
              explain: "Conclusions should summarise and reflect, not open new arguments.",
            },
          ],
        },
        {
          slug: "letter-writing",
          title: "Formal & Informal Letters",
          summary: "Write letters and emails with the right format, tone and purpose.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A text to your best friend and an email to a company manager both share news — but you'd never write them the same way. Choosing the right **register** (level of formality) is a life skill.",
            },
            {
              type: "table",
              headers: ["Feature", "Informal letter", "Formal letter"],
              rows: [
                ["Audience", "Friends, family", "Officials, organisations, editors"],
                ["Greeting", "Dear Sam, / Hi Sam,", "Dear Sir or Madam, / Dear Ms Khan,"],
                ["Tone", "Chatty, personal; contractions fine", "Polite, concise, no slang or contractions"],
                ["Closing", "Love, / Take care, / Best wishes,", "Yours faithfully (name unknown) / Yours sincerely (name known)"],
              ],
            },
            { type: "heading", text: "Formal letter layout" },
            {
              type: "list",
              ordered: true,
              items: [
                "Sender's address (top) and date.",
                "Recipient's name, title and address.",
                "Salutation: *Dear Mr Patel,*",
                "**Subject line**: *Subject: Request for a street light on Park Road*",
                "Opening paragraph — state the purpose clearly.",
                "Body — details, reasons, evidence.",
                "Closing paragraph — what action you want, and thanks.",
                "Sign-off (*Yours sincerely*), signature and full name.",
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Faithfully vs sincerely",
              md: "**Dear Sir/Madam** → **Yours faithfully**. **Dear Mr Patel** → **Yours sincerely**. (In US style, 'Sincerely' is used for both.)",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which line is best for a formal complaint letter?",
                  options: [
                    "Hey, your product is total rubbish!",
                    "I am writing to express my dissatisfaction with a recent purchase.",
                    "Gonna need a refund ASAP.",
                    "LOL, the box arrived broken.",
                  ],
                  answer: 1,
                  explain: "Formal letters are polite, clear and free of slang.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Emails count too",
              md: "Formal emails follow the same rules: a clear subject line, a polite greeting, short focused paragraphs and a professional sign-off like *Kind regards*.",
            },
            {
              type: "keypoints",
              items: [
                "Match register to the reader.",
                "Formal letters include addresses, date, subject line and a polite closing.",
                "Yours faithfully for unknown names; yours sincerely for known names.",
                "State your purpose in the first paragraph.",
              ],
            },
          ],
          flashcards: [
            { front: "Register", back: "The level of formality in language." },
            { front: "Dear Sir or Madam → closing?", back: "Yours faithfully." },
            { front: "Dear Ms Lee → closing?", back: "Yours sincerely." },
            { front: "Subject line", back: "A short line in a formal letter stating its topic." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order these parts of a formal letter.",
              items: ["Sender's address and date", "Recipient's address", "Salutation", "Subject line", "Body paragraphs", "Yours sincerely and name"],
              explain: "Addresses and date, salutation, subject, body, sign-off.",
            },
            {
              kind: "fill",
              q: "A letter beginning 'Dear Sir or Madam' should end 'Yours ___'.",
              answer: ["faithfully"],
              explain: "Use faithfully when you don't know the recipient's name.",
            },
            {
              kind: "multi",
              q: "Which features suit an informal letter?",
              options: ["Contractions like 'I'm'", "A subject line", "Personal news and jokes", "'Yours faithfully'"],
              answers: [0, 2],
              explain: "Subject lines and 'Yours faithfully' are formal features.",
            },
            {
              kind: "truefalse",
              q: "A formal letter should state its purpose in the opening paragraph.",
              answer: true,
              explain: "Busy readers need to know right away why you are writing.",
            },
          ],
        },
        {
          slug: "reading-comprehension",
          title: "Reading Comprehension Strategies",
          summary: "Skim, scan, infer and summarise — techniques to understand any passage.",
          minutes: 16,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Have you ever read a whole page and then realised you remember nothing? That's passive reading. **Active readers** question, predict and connect as they go — and they understand far more in the same time.",
            },
            { type: "heading", text: "Before, during, after" },
            {
              type: "table",
              headers: ["Stage", "Strategy", "What you do"],
              rows: [
                ["Before", "Preview & predict", "Read the title, headings and questions. Guess what the text is about."],
                ["During", "Skim", "Read quickly for the general idea (first and last sentences of paragraphs)."],
                ["During", "Scan", "Hunt for specific details like names, dates or numbers."],
                ["During", "Annotate", "Underline key ideas; note unknown words."],
                ["After", "Summarise", "State the main idea in one or two sentences, in your own words."],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "You need to find the year a bridge was built in a long article. Which strategy fits best?",
                  options: ["Skimming", "Scanning", "Predicting", "Summarising"],
                  answer: 1,
                  explain: "Scanning searches for a specific detail.",
                },
              ],
            },
            { type: "heading", text: "Literal vs inferential questions" },
            {
              type: "text",
              md: "**Literal** answers are stated directly in the text. **Inferential** answers need you to read between the lines, combining clues with what you know.\n\n*Text:* “Zara slammed the door, threw her bag on the floor and stomped upstairs.”\n\n- Literal: *What did Zara throw?* → her bag.\n- Inferential: *How was Zara feeling?* → angry or upset (the text never says so, but the actions show it).",
            },
            {
              type: "callout",
              tone: "exam",
              title: "Answer with evidence",
              md: "For inference questions, use the formula **claim + quote + explanation**: *Zara is angry because she 'slammed the door', which shows frustration.*",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Main idea vs details",
              md: "The main idea is what the whole passage is about. Details support it. Ask: *If I had to tweet this passage in one line, what would I say?*",
            },
            {
              type: "keypoints",
              items: [
                "Preview and predict before reading.",
                "Skim for gist; scan for specifics.",
                "Literal answers are stated; inferential answers are implied.",
                "Support answers with evidence from the text.",
              ],
            },
          ],
          flashcards: [
            { front: "Skimming", back: "Reading quickly to get the general idea." },
            { front: "Scanning", back: "Searching quickly for a specific piece of information." },
            { front: "Inference", back: "A conclusion drawn from clues in the text plus your own knowledge." },
            { front: "Summary", back: "A short restatement of the main ideas in your own words." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the active reading steps.",
              items: ["Preview the title and headings", "Skim for the main idea", "Read closely and annotate", "Summarise in your own words"],
              explain: "Preview, skim, read closely, then summarise.",
            },
            {
              kind: "mcq",
              q: "'The streets were wet and people were closing umbrellas.' What can you infer?",
              options: ["It is snowing", "It has just stopped raining", "It is a sunny morning", "There is a festival"],
              answer: 1,
              explain: "Wet streets plus closing umbrellas suggest the rain has just ended.",
            },
            {
              kind: "fill",
              q: "Reading quickly to find a specific date is called ___.",
              answer: ["scanning"],
              explain: "Scanning targets specific details.",
            },
            {
              kind: "truefalse",
              q: "An inferential answer is always stated word-for-word in the passage.",
              answer: false,
              explain: "That describes a literal answer. Inferences are implied.",
            },
          ],
        },
      ],
    },
  ],
};
