import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "hindi";
/** Syllabus family: chapter titles below are matched against `hin` rows in src/content/syllabus/. */
export const family = "hin";

/* ------------------------------------------------------------------ */
/* 1. पद परिचय                                                          */
/* ------------------------------------------------------------------ */
const padParichay: Topic = {
  slug: "pad-parichay",
  title: "Pad Parichay (पद परिचय)",
  icon: "🔍",
  description: "Describe every word of a sentence: its kind, gender, number, case and its link to other words.",
  lessons: [
    {
      slug: "pad-parichay-basics",
      title: "पद परिचय: Introducing Each Word",
      summary: "What a पद is, the five kinds of पद, and the exact order in which to describe a noun, pronoun, adjective, verb and adverb.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🪪",
          caption: "Your ID card tells your name, class, section and roll number. पद परिचय is an ID card for a word in a sentence.",
        },
        {
          type: "text",
          md: "A word alone in a dictionary is a **शब्द** (word). When the same word is used in a sentence, it becomes a **पद** (word in a sentence). For example, 'राम' is a शब्द. In 'राम ने पत्र लिखा। (Ram wrote a letter.)', 'राम' is a पद.\n\n**पद परिचय** (grammatical description of a word) means telling everything about a पद: what kind of word it is, its gender, number, case, and how it is linked to the other words of the sentence.",
        },
        {
          type: "table",
          headers: ["Kind of पद", "What to write in पद परिचय (in this order)"],
          rows: [
            ["**संज्ञा** (noun)", "भेद (type), लिंग (gender), वचन (number), कारक (case), relation with the verb"],
            ["**सर्वनाम** (pronoun)", "भेद, पुरुष (person), लिंग, वचन, कारक, relation with the verb"],
            ["**विशेषण** (adjective)", "भेद, लिंग, वचन, **विशेष्य** (the noun it describes)"],
            ["**क्रिया** (verb)", "भेद (सकर्मक / अकर्मक), लिंग, वचन, पुरुष, काल (tense), वाच्य (voice), its कर्ता / कर्म"],
            ["**अव्यय** (indeclinable word)", "भेद (e.g. क्रियाविशेषण), and the word it is linked to"],
          ],
        },
        {
          type: "list",
          items: [
            "**संज्ञा के भेद:** व्यक्तिवाचक (proper: गंगा, दिल्ली), जातिवाचक (common: नदी, शहर), भाववाचक (abstract: बचपन, ईमानदारी). Some books also list द्रव्यवाचक (material: सोना, दूध) and समूहवाचक (collective: सेना, कक्षा).",
            "**सर्वनाम के भेद:** पुरुषवाचक (मैं, तुम, वह), निश्चयवाचक (यह, वह), अनिश्चयवाचक (कोई, कुछ), संबंधवाचक (जो, सो), प्रश्नवाचक (कौन, क्या), निजवाचक (आप, स्वयं, खुद).",
            "**विशेषण के भेद:** गुणवाचक (quality: अच्छा, लाल), संख्यावाचक (number: चार, पहला), परिमाणवाचक (quantity: दो किलो, थोड़ा), सार्वनामिक (pronoun used as adjective: यह किताब, वह लड़का).",
            "**क्रियाविशेषण के भेद:** कालवाचक (when: कल, अभी), स्थानवाचक (where: ऊपर, यहाँ), रीतिवाचक (how: धीरे, तेज़), परिमाणवाचक (how much: बहुत, कम).",
          ],
        },
        {
          type: "example",
          title: "Full पद परिचय of one sentence",
          problem: "Write the पद परिचय of each word: 'मोहन ने बाज़ार से ताज़े फल खरीदे। (Mohan bought fresh fruits from the market.)'",
          steps: [
            "**मोहन** — व्यक्तिवाचक संज्ञा, पुल्लिंग, एकवचन, कर्ता कारक, 'खरीदे' क्रिया का कर्ता। (A person's name, so proper noun; he does the action, so कर्ता.)",
            "**बाज़ार से** — जातिवाचक संज्ञा, पुल्लिंग, एकवचन, अपादान कारक। ('से' here shows 'from', i.e. separation.)",
            "**ताज़े** — गुणवाचक विशेषण, पुल्लिंग, बहुवचन, 'फल' विशेष्य का विशेषण। (It tells the quality of the fruits.)",
            "**फल** — जातिवाचक संज्ञा, पुल्लिंग, बहुवचन, कर्म कारक। (The thing bought, so कर्म.)",
            "**खरीदे** — सकर्मक क्रिया, पुल्लिंग, बहुवचन, भूतकाल, कर्तृवाच्य; कर्ता 'मोहन', कर्म 'फल'। (It has an object, so सकर्मक. Because of 'ने', it agrees with 'फल'.)",
          ],
          answer: "Each पद is described in the fixed order: kind → type → gender → number → case / tense → relation.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In 'घोड़ा तेज़ दौड़ता है। (The horse runs fast.)', what is 'तेज़'?",
              options: ["गुणवाचक विशेषण", "रीतिवाचक क्रियाविशेषण", "भाववाचक संज्ञा", "कालवाचक क्रियाविशेषण"],
              answer: 1,
              explain: "'तेज़' tells **how** the horse runs. It describes the verb 'दौड़ता है', so it is a रीतिवाचक क्रियाविशेषण, not an adjective.",
              difficulty: 2,
              hint: "Ask: does it describe a noun or the action?",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "पद परिचय of 'फल' is just 'संज्ञा'.",
          right: "जातिवाचक संज्ञा, पुल्लिंग, बहुवचन, कर्म कारक — every part is needed.",
          why: "Writing only the kind of word feels enough because it is the first thing we notice. But examiners give marks for each part (type, gender, number, case, relation), so a one-word answer loses most of the marks.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which type of संज्ञा is each word?",
            groups: ["व्यक्तिवाचक (proper)", "जातिवाचक (common)", "भाववाचक (abstract)"],
            items: [
              { text: "गंगा (the Ganga)", group: 0, hint: "It is the name of one particular river." },
              { text: "नदी (river)", group: 1, hint: "It names every river, not one special river." },
              { text: "बचपन (childhood)", group: 2, hint: "You cannot touch it; it is a state or feeling." },
              { text: "बेंगलुरु (Bengaluru)", group: 0, hint: "The name of one particular city." },
              { text: "लड़का (boy)", group: 1, hint: "It names a whole class of people." },
              { text: "मिठास (sweetness)", group: 2, hint: "A quality, which you can only feel." },
            ],
            explain: "One particular person, place or thing → **व्यक्तिवाचक**. A whole class → **जातिवाचक**. A quality, feeling or state → **भाववाचक**.",
          },
        },
        {
          type: "table",
          headers: ["पद", "पद परिचय (sentence: 'वह रोज़ सुबह दौड़ता है।' He runs every morning.)"],
          rows: [
            ["वह", "पुरुषवाचक सर्वनाम (अन्य पुरुष), पुल्लिंग, एकवचन, कर्ता कारक, 'दौड़ता है' क्रिया का कर्ता"],
            ["रोज़ सुबह", "कालवाचक क्रियाविशेषण, 'दौड़ता है' क्रिया का समय बताता है"],
            ["दौड़ता है", "अकर्मक क्रिया, पुल्लिंग, एकवचन, अन्य पुरुष, वर्तमान काल, कर्तृवाच्य; कर्ता 'वह'"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "How marks are given",
          md: "In the exam only the **underlined** words are asked. Each part carries marks, so write all parts in the fixed order, separated by commas. Find the gender of 'वह / मैं / तुम' from the verb: 'वह दौड़ता है' → पुल्लिंग, 'वह दौड़ती है' → स्त्रीलिंग.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "In 'यह किताब मेरी है', the word 'यह' comes before a noun, so it is a ___ विशेषण.",
              answer: ["सार्वनामिक", "sarvanamik", "pronominal"],
              explain: "A pronoun used before a noun works as an adjective. It is called a **सार्वनामिक विशेषण**.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "A शब्द used in a sentence is a **पद**.",
            "पद परिचय gives kind, type, gender, number, case (or tense) and relation.",
            "विशेषण describes a noun (its **विशेष्य**); क्रियाविशेषण describes a verb.",
            "Find the gender of a pronoun from the verb form.",
          ],
        },
      ],
      flashcards: [
        { front: "शब्द and पद", back: "A word alone is a शब्द; the same word used in a sentence is a पद." },
        { front: "Three main types of संज्ञा", back: "व्यक्तिवाचक (proper), जातिवाचक (common), भाववाचक (abstract)." },
        { front: "Six types of सर्वनाम", back: "पुरुषवाचक, निश्चयवाचक, अनिश्चयवाचक, संबंधवाचक, प्रश्नवाचक, निजवाचक." },
        { front: "Four types of विशेषण", back: "गुणवाचक, संख्यावाचक, परिमाणवाचक, सार्वनामिक." },
        { front: "विशेष्य", back: "The noun that an adjective describes. In 'लाल गुलाब', 'गुलाब' is the विशेष्य." },
        { front: "सकर्मक vs अकर्मक क्रिया", back: "सकर्मक has an object (वह फल खाता है); अकर्मक has no object (वह सोता है)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "'ईमानदारी (honesty)' is which type of संज्ञा?",
          options: ["व्यक्तिवाचक", "जातिवाचक", "भाववाचक", "समूहवाचक"],
          answer: 2,
          explain: "Honesty is a quality you cannot touch, so it is a **भाववाचक संज्ञा**.",
        },
        {
          kind: "mcq",
          q: "In 'मेरे पास चार किताबें हैं। (I have four books.)', 'चार' is:",
          options: ["परिमाणवाचक विशेषण", "संख्यावाचक विशेषण", "गुणवाचक विशेषण", "सार्वनामिक विशेषण"],
          answer: 1,
          explain: "Books can be counted, and 'चार' gives their number, so it is a **संख्यावाचक विशेषण**. परिमाणवाचक is for things that are measured (दो लीटर दूध).",
        },
        {
          kind: "fill",
          q: "'मैं, तुम, वह' are ___ सर्वनाम.",
          answer: ["पुरुषवाचक", "purushvachak", "personal"],
          explain: "They show the speaker, the listener and the person spoken about, so they are **पुरुषवाचक सर्वनाम**.",
        },
        {
          kind: "truefalse",
          q: "In the पद परिचय of a noun, we also write its relation with the verb (e.g. 'खाया' क्रिया का कर्ता).",
          answer: true,
          explain: "The relation with other words is the last part of a noun's पद परिचय.",
        },
        {
          kind: "multi",
          q: "Which of these are written in the पद परिचय of a क्रिया?",
          options: ["सकर्मक / अकर्मक", "काल (tense)", "वाच्य (voice)", "विशेष्य"],
          answers: [0, 1, 2],
          explain: "A verb's पद परिचय has its type, gender, number, person, tense and voice. विशेष्य belongs to an adjective.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put the parts of a noun's पद परिचय in the correct order.",
          items: ["भेद (type)", "लिंग (gender)", "वचन (number)", "कारक (case)", "क्रिया से संबंध (relation)"],
          explain: "Type → gender → number → case → relation. Following this order makes checking easy.",
        },
        {
          kind: "mcq",
          q: "In 'बच्चे ऊपर खेल रहे हैं। (The children are playing upstairs.)', 'ऊपर' is:",
          options: ["कालवाचक क्रियाविशेषण", "स्थानवाचक क्रियाविशेषण", "रीतिवाचक क्रियाविशेषण", "गुणवाचक विशेषण"],
          answer: 1,
          explain: "'ऊपर' tells **where** they play, so it is a स्थानवाचक क्रियाविशेषण.",
          difficulty: 2,
          hint: "Ask the question 'कहाँ?' (where?).",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. रचना के आधार पर वाक्य भेद                                          */
/* ------------------------------------------------------------------ */
const vakyaBhed: Topic = {
  slug: "vakya-bhed-rachna",
  title: "Sentence Types (रचना के आधार पर वाक्य भेद)",
  icon: "🧱",
  description: "Simple, compound and complex sentences in Hindi, and how to change one into another.",
  lessons: [
    {
      slug: "saral-sanyukt-mishra",
      title: "सरल, संयुक्त और मिश्र वाक्य",
      summary: "How to spot a simple, compound or complex sentence from its clauses and joining words, and how to convert between them.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🧱",
          caption: "One brick, two bricks side by side, or one big brick holding up a small one: that is how Hindi sentences are built.",
        },
        {
          type: "text",
          md: "A sentence is built from **उपवाक्य** (clauses). A clause is a group of words that has its own verb.\n\nBy their structure, or **रचना** (construction), Hindi sentences are of three kinds: **सरल वाक्य** (simple sentence), **संयुक्त वाक्य** (compound sentence) and **मिश्र वाक्य** (complex sentence).",
        },
        {
          type: "table",
          headers: ["Type", "Structure", "Example"],
          rows: [
            ["**सरल वाक्य**", "only one main verb (one उद्देश्य, one विधेय)", "मीना पढ़कर सो गई। (Meena slept after studying.)"],
            ["**संयुक्त वाक्य**", "two or more **प्रधान** (independent) clauses joined by और, तथा, एवं, या, अथवा, परंतु, लेकिन, किंतु, इसलिए, अतः", "मीना ने पढ़ाई की और सो गई। (Meena studied and slept.)"],
            ["**मिश्र वाक्य**", "one प्रधान उपवाक्य + one or more **आश्रित** (dependent) clauses joined by कि, जो, जब…तब, यदि…तो, क्योंकि, ताकि, जैसे…वैसे", "जब मीना ने पढ़ाई कर ली, तब वह सो गई। (When Meena had finished studying, she slept.)"],
          ],
        },
        {
          type: "text",
          md: "In a सरल वाक्य, other actions appear only as 'कर' forms (पढ़कर), or with words like 'के कारण', 'के बाद', 'के लिए'. They are not full clauses.\n\nIn a मिश्र वाक्य the आश्रित उपवाक्य cannot stand alone. It is of three kinds: **संज्ञा उपवाक्य** (starts with कि: 'उसने कहा **कि वह आएगा**'), **विशेषण उपवाक्य** (starts with जो / जिसने: 'वह लड़का **जो कल आया था**, मेरा भाई है') and **क्रियाविशेषण उपवाक्य** (starts with जब, जहाँ, यदि, क्योंकि: '**जब बारिश हुई**, तब हम घर पर थे').",
        },
        {
          type: "example",
          title: "Changing one sentence into three forms",
          problem: "Write in all three forms: 'बारिश के कारण मैच रद्द हो गया। (The match was cancelled because of rain.)'",
          steps: [
            "Find the two ideas: (1) बारिश हुई (it rained), (2) मैच रद्द हो गया (the match was cancelled).",
            "**सरल** (already given): one main verb 'रद्द हो गया'; 'बारिश के कारण' is only a phrase.",
            "**संयुक्त**: make both ideas full clauses and join with 'इसलिए': 'बारिश हुई, इसलिए मैच रद्द हो गया।'",
            "**मिश्र**: make one idea depend on the other with 'क्योंकि': 'मैच रद्द हो गया क्योंकि बारिश हुई।'",
          ],
          answer: "सरल: बारिश के कारण मैच रद्द हो गया। संयुक्त: बारिश हुई, इसलिए मैच रद्द हो गया। मिश्र: मैच रद्द हो गया क्योंकि बारिश हुई।",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'जो मेहनत करता है, वह सफल होता है। (One who works hard succeeds.)' is a:",
              options: ["सरल वाक्य", "संयुक्त वाक्य", "मिश्र वाक्य", "प्रश्नवाचक वाक्य"],
              answer: 2,
              explain: "'जो मेहनत करता है' depends on 'वह सफल होता है'. A main clause plus a dependent clause makes a **मिश्र वाक्य**.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "A long sentence is संयुक्त and a short one is सरल. 'क्योंकि' and 'इसलिए' are the same, so both make संयुक्त वाक्य.",
          right: "Length does not matter; count the clauses. 'इसलिए' joins two equal clauses (संयुक्त), but 'क्योंकि' starts a dependent clause (मिश्र).",
          why: "Both words talk about reasons, so they feel alike. But the clause after 'क्योंकि' only gives a reason for the main clause and cannot stand alone, so the sentence is मिश्र.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each sentence by its रचना.",
            groups: ["सरल", "संयुक्त", "मिश्र"],
            items: [
              { text: "सूरज निकलते ही पक्षी चहचहाने लगे।", group: 0, hint: "Only one main verb: 'चहचहाने लगे'. 'निकलते ही' is not a full clause." },
              { text: "वह बाज़ार गया और सब्ज़ी ले आया।", group: 1, hint: "Two equal clauses joined by 'और'." },
              { text: "मैं जानता हूँ कि तुम सच बोल रहे हो।", group: 2, hint: "'कि' starts a dependent (संज्ञा) clause." },
              { text: "तुम चाय लोगे या कॉफ़ी पियोगे?", group: 1, hint: "'या' joins two equal clauses." },
              { text: "यदि तुम समय पर आओगे तो बस मिल जाएगी।", group: 2, hint: "'यदि…तो' makes one clause depend on the other." },
              { text: "थका हुआ किसान पेड़ के नीचे सो गया।", group: 0, hint: "Only one verb: 'सो गया'." },
            ],
            explain: "Count the full clauses and look at the joining word: no joining word and one verb → **सरल**; और / या / इसलिए / परंतु → **संयुक्त**; कि / जो / जब / यदि / क्योंकि → **मिश्र**.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you convert a sentence, keep the **meaning and tense the same**. A frequent error is to change the tense ('हुई' → 'होगी') or to drop a part of the meaning. Also, do not use both 'क्योंकि' and 'और' together; one joining word is enough.",
        },
        {
          type: "keypoints",
          items: [
            "**सरल**: one main verb. **संयुक्त**: two or more equal clauses. **मिश्र**: one main + dependent clause(s).",
            "संयुक्त joiners: और, तथा, या, अथवा, परंतु, लेकिन, किंतु, इसलिए, अतः.",
            "मिश्र joiners: कि, जो, जब…तब, यदि…तो, क्योंकि, ताकि, जैसे…वैसे.",
            "Dependent clauses are संज्ञा, विशेषण or क्रियाविशेषण उपवाक्य.",
          ],
        },
      ],
      flashcards: [
        { front: "उपवाक्य", back: "A part of a sentence that has its own verb (a clause)." },
        { front: "सरल वाक्य", back: "A sentence with only one main verb. Example: मीना पढ़कर सो गई।" },
        { front: "संयुक्त वाक्य", back: "Two or more independent clauses joined by और, या, परंतु, इसलिए, etc." },
        { front: "मिश्र वाक्य", back: "One main clause + one or more dependent clauses joined by कि, जो, जब, यदि, क्योंकि, etc." },
        { front: "संज्ञा उपवाक्य", back: "A dependent clause that works like a noun; usually starts with 'कि'." },
        { front: "विशेषण उपवाक्य", back: "A dependent clause that describes a noun; starts with जो, जिसने, जिसका, etc." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "'वह बीमार था, इसलिए स्कूल नहीं आया। (He was ill, so he did not come to school.)' is a:",
          options: ["सरल वाक्य", "संयुक्त वाक्य", "मिश्र वाक्य", "आज्ञावाचक वाक्य"],
          answer: 1,
          explain: "Two equal clauses joined by 'इसलिए' make a **संयुक्त वाक्य**.",
        },
        {
          kind: "truefalse",
          q: "A sentence joined with 'क्योंकि' is a मिश्र वाक्य.",
          answer: true,
          explain: "The clause after 'क्योंकि' is a dependent (क्रियाविशेषण) clause, so the sentence is मिश्र.",
        },
        {
          kind: "multi",
          q: "Which words join clauses in a संयुक्त वाक्य?",
          options: ["और", "परंतु", "कि", "या", "जो"],
          answers: [0, 1, 3],
          explain: "और, परंतु, या join equal clauses. 'कि' and 'जो' start dependent clauses of a मिश्र वाक्य.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Choose the मिश्र form of 'सूरज निकलने पर अँधेरा दूर हुआ। (On sunrise, darkness went away.)'",
          options: [
            "जब सूरज निकला, तब अँधेरा दूर हुआ।",
            "सूरज निकला और अँधेरा दूर हुआ।",
            "सूरज निकलकर अँधेरा दूर हुआ।",
            "जब सूरज निकलेगा, तब अँधेरा दूर होगा।",
          ],
          answer: 0,
          explain: "'जब…तब' makes a dependent time clause, and the tense stays past. Option 2 is संयुक्त; option 4 changes the tense.",
          difficulty: 2,
          hint: "Keep the same tense, and look for a dependent-clause joiner.",
        },
        {
          kind: "mcq",
          q: "In 'मैंने देखा कि बाहर बारिश हो रही है', the clause 'कि बाहर बारिश हो रही है' is a:",
          options: ["संज्ञा उपवाक्य", "विशेषण उपवाक्य", "क्रियाविशेषण उपवाक्य", "प्रधान उपवाक्य"],
          answer: 0,
          explain: "It answers 'क्या देखा?' (what did I see?), so it works like a noun: **संज्ञा उपवाक्य**.",
          difficulty: 3,
          hint: "A clause starting with 'कि' after verbs like कहा, देखा, सोचा is usually a noun clause.",
        },
        {
          kind: "fill",
          q: "A सरल वाक्य has only one main ___ (Hindi word for verb).",
          answer: ["क्रिया", "kriya"],
          explain: "One main **क्रिया** (verb) means one clause, so the sentence is सरल.",
        },
        {
          kind: "mcq",
          q: "'वह लड़का जो कल आया था, मेरा भाई है।' The dependent clause here is a:",
          options: ["संज्ञा उपवाक्य", "विशेषण उपवाक्य", "क्रियाविशेषण उपवाक्य", "संयुक्त उपवाक्य"],
          answer: 1,
          explain: "'जो कल आया था' tells which boy, so it describes a noun: **विशेषण उपवाक्य**.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. वाच्य                                                             */
/* ------------------------------------------------------------------ */
const vachya: Topic = {
  slug: "vachya",
  title: "Voice (वाच्य)",
  icon: "🔄",
  description: "कर्तृवाच्य, कर्मवाच्य and भाववाच्य: how to identify them and change one into another.",
  lessons: [
    {
      slug: "vachya-teen-bhed",
      title: "कर्तृवाच्य, कर्मवाच्य और भाववाच्य",
      summary: "The three voices of Hindi, how the verb follows the doer, the object or neither, and step-by-step voice change.",
      minutes: 17,
      xp: 42,
      blocks: [
        {
          type: "illustration",
          emoji: "🎯",
          caption: "Who is the hero of the sentence: the doer, the thing done, or just the action? The answer gives you the वाच्य.",
        },
        {
          type: "text",
          md: "**वाच्य** (voice) is the form of the verb that shows what is most important in the sentence: the doer (**कर्ता**), the object (**कर्म**) or the action itself (**भाव**).\n\nThe easy test: see whose gender and number the verb follows, and see if the कर्ता has 'से' or 'के द्वारा' after it.",
        },
        {
          type: "table",
          headers: ["वाच्य", "What is important", "Signs", "Example"],
          rows: [
            ["**कर्तृवाच्य** (active voice)", "कर्ता", "कर्ता without 'से / द्वारा'; verb in normal form", "रीता गीत गाती है। (Rita sings a song.)"],
            ["**कर्मवाच्य** (passive voice)", "कर्म", "कर्ता + से / के द्वारा; verb = past form + जाना; verb follows कर्म; only सकर्मक verbs", "रीता द्वारा गीत गाया जाता है। (A song is sung by Rita.)"],
            ["**भाववाच्य** (impersonal voice)", "भाव (the action)", "कर्ता + से; **अकर्मक** verb; verb always पुल्लिंग, एकवचन, अन्य पुरुष; often with 'नहीं' to show inability", "रीता से चला नहीं जाता। (Rita is unable to walk.)"],
          ],
        },
        {
          type: "example",
          title: "कर्तृवाच्य → कर्मवाच्य",
          problem: "Change into कर्मवाच्य: 'माँ ने रोटियाँ बनाईं। (Mother made rotis.)'",
          steps: [
            "Find the parts: कर्ता 'माँ', कर्म 'रोटियाँ' (स्त्रीलिंग, बहुवचन), verb 'बनाईं' (भूतकाल).",
            "Remove 'ने' and put 'द्वारा' (or 'से') after the कर्ता: 'माँ द्वारा'.",
            "Put the verb in its past form and add 'जाना' in the same tense: बनाई + गईं.",
            "Make the verb agree with the कर्म 'रोटियाँ' (स्त्रीलिंग, बहुवचन): 'बनाई गईं'.",
          ],
          answer: "माँ द्वारा रोटियाँ बनाई गईं। (Rotis were made by mother.)",
        },
        {
          type: "example",
          title: "कर्तृवाच्य → भाववाच्य",
          problem: "Change into भाववाच्य: 'दादी जी चल नहीं सकतीं। (Grandmother cannot walk.)'",
          steps: [
            "The verb 'चलना' is अकर्मक (no object), so the sentence can go into भाववाच्य.",
            "Put 'से' after the कर्ता: 'दादी जी से'.",
            "Change the verb to past form + जाना, and keep it **पुल्लिंग, एकवचन**: 'चला नहीं जाता'.",
          ],
          answer: "दादी जी से चला नहीं जाता। (Grandmother is unable to walk.) Note: 'चला', not 'चली', even though दादी जी is female.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'पुलिस द्वारा चोर पकड़ा गया। (The thief was caught by the police.)' is in:",
              options: ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "None of these"],
              answer: 1,
              explain: "कर्ता 'पुलिस' has 'द्वारा', the verb is सकर्मक and agrees with the कर्म 'चोर'. So it is **कर्मवाच्य**.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "'सीमा ने कविता लिखी' is कर्मवाच्य, because the verb 'लिखी' agrees with 'कविता' (the कर्म).",
          right: "It is **कर्तृवाच्य**. With 'ने' in the past tense, the verb follows the कर्म, but the sentence is still active.",
          why: "In Hindi, 'ने' makes the verb agree with the object, which looks like कर्मवाच्य. The real sign of कर्मवाच्य is 'से / द्वारा' after the कर्ता and the 'जाना' form of the verb (लिखी गई).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which वाच्य is each sentence in?",
            groups: ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य"],
            items: [
              { text: "किसान खेत जोतता है।", group: 0, hint: "कर्ता has no 'से / द्वारा'; normal verb." },
              { text: "मोहन ने कहानी सुनाई।", group: 0, hint: "'ने' is not 'द्वारा'. There is no 'जाना' form, so it is active." },
              { text: "माली द्वारा पौधे सींचे गए।", group: 1, hint: "'द्वारा' + सकर्मक verb + 'गए' agreeing with 'पौधे'." },
              { text: "मुझसे यह पत्र नहीं लिखा गया।", group: 1, hint: "There is an object, 'पत्र', and the verb agrees with it." },
              { text: "दादी जी से चला नहीं जाता।", group: 2, hint: "'चलना' has no object; verb is पुल्लिंग एकवचन." },
              { text: "आओ, अब सोया जाए।", group: 2, hint: "Only the action 'सोना' is important; no object." },
            ],
            explain: "Look for 'से / द्वारा' and the 'जाना' form. With a कर्म present → **कर्मवाच्य**; with no कर्म (अकर्मक verb) → **भाववाच्य**; otherwise → **कर्तृवाच्य**.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you change the voice, **do not change the tense**. 'लिखता है' (present) becomes 'लिखा जाता है', 'लिखा' (past) becomes 'लिखा गया', 'लिखेगा' (future) becomes 'लिखा जाएगा'. A wrong tense or a wrong gender of the verb usually loses the full mark.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "In कर्मवाच्य, we put ___ or 'के द्वारा' after the कर्ता.",
              answer: ["से", "se"],
              explain: "The कर्ता takes 'से' or 'के द्वारा' (e.g. 'राम से', 'राम द्वारा').",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "**कर्तृवाच्य**: the doer is important. **कर्मवाच्य**: the object is important. **भाववाच्य**: the action is important.",
            "कर्मवाच्य needs a सकर्मक verb; भाववाच्य needs an अकर्मक verb.",
            "In भाववाच्य the verb is always पुल्लिंग, एकवचन, अन्य पुरुष.",
            "'ने' alone does not make a sentence कर्मवाच्य.",
          ],
        },
      ],
      flashcards: [
        { front: "वाच्य", back: "The verb form that shows whether the कर्ता, the कर्म or the भाव (action) is important." },
        { front: "कर्तृवाच्य example", back: "राम पत्र लिखता है। (Ram writes a letter.)" },
        { front: "कर्मवाच्य example", back: "राम द्वारा पत्र लिखा जाता है। (A letter is written by Ram.)" },
        { front: "भाववाच्य example", back: "मुझसे सोया नहीं जाता। (I am unable to sleep.)" },
        { front: "Verb form in भाववाच्य", back: "Always पुल्लिंग, एकवचन, अन्य पुरुष (e.g. 'चला जाता है')." },
        { front: "Which verbs can go into कर्मवाच्य?", back: "Only सकर्मक verbs (verbs that have an object)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "'मुझसे उठा नहीं जाता। (I am unable to get up.)' is in:",
          options: ["कर्तृवाच्य", "कर्मवाच्य", "भाववाच्य", "None of these"],
          answer: 2,
          explain: "'उठना' has no object and the verb is पुल्लिंग एकवचन with 'से' after the कर्ता: **भाववाच्य**.",
        },
        {
          kind: "truefalse",
          q: "'सीमा ने कविता लिखी' is in कर्मवाच्य because the verb agrees with the कर्म.",
          answer: false,
          explain: "It is कर्तृवाच्य. 'ने' makes the verb follow the कर्म, but there is no 'से / द्वारा' and no 'जाना' form.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Change into भाववाच्य: 'पक्षी उड़ नहीं सका। (The bird could not fly.)'",
          options: ["पक्षी से उड़ा नहीं गया।", "पक्षी द्वारा उड़ नहीं सका।", "पक्षी ने उड़ा नहीं गया।", "पक्षी से उड़ी नहीं गई।"],
          answer: 0,
          explain: "कर्ता + से, verb in past form + जाना, पुल्लिंग एकवचन, past tense kept: 'पक्षी से उड़ा नहीं गया।'",
          difficulty: 2,
          hint: "The verb in भाववाच्य is always पुल्लिंग, एकवचन.",
        },
        {
          kind: "mcq",
          q: "Change into कर्मवाच्य: 'छात्र परीक्षा देंगे। (The students will take the exam.)'",
          options: ["छात्रों द्वारा परीक्षा दी जाएगी।", "छात्रों द्वारा परीक्षा दी गई।", "छात्रों ने परीक्षा दी।", "छात्रों से परीक्षा दिया जाएगा।"],
          answer: 0,
          explain: "Future tense stays future ('जाएगी'), and the verb follows 'परीक्षा' (स्त्रीलिंग): 'दी जाएगी'.",
          difficulty: 3,
          hint: "Keep the tense; match the verb with परीक्षा, which is स्त्रीलिंग.",
        },
        {
          kind: "fill",
          q: "भाववाच्य is made only from ___ verbs (verbs with no object).",
          answer: ["अकर्मक", "akarmak", "intransitive"],
          explain: "With no कर्म, the action itself becomes important, so **अकर्मक** verbs form भाववाच्य.",
        },
        {
          kind: "order",
          q: "Put the steps of changing कर्तृवाच्य into कर्मवाच्य in order.",
          items: [
            "Find the कर्ता, कर्म and tense",
            "Add 'से / द्वारा' after the कर्ता (remove 'ने')",
            "Change the verb to past form + 'जाना' in the same tense",
            "Make the verb agree with the कर्म",
          ],
          explain: "Identify first, then mark the कर्ता, then build the verb, then check agreement.",
        },
        {
          kind: "multi",
          q: "Which sentences are in कर्मवाच्य?",
          options: ["लता द्वारा गाना गाया गया।", "बच्चों से हँसा नहीं गया।", "मुझसे खाना नहीं खाया जाता।", "मैंने खाना खाया।"],
          answers: [0, 2],
          explain: "Options 1 and 3 have an object (गाना, खाना) with the 'जाना' form. Option 2 has no object (भाववाच्य); option 4 is कर्तृवाच्य.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. समास                                                              */
/* ------------------------------------------------------------------ */
const samas: Topic = {
  slug: "samas",
  title: "Compound Words (समास)",
  icon: "🔗",
  description: "The six kinds of समास, समास-विग्रह, and how to tell कर्मधारय, द्विगु and बहुव्रीहि apart.",
  lessons: [
    {
      slug: "samas-chhah-bhed",
      title: "समास के छह भेद",
      summary: "What समास and समास-विग्रह are, the six kinds of समास with examples, and the tricky कर्मधारय–बहुव्रीहि difference.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🚂",
          caption: "'रसोई के लिए घर' is long. 'रसोईघर' says the same thing in one word. That short word is a समास.",
        },
        {
          type: "text",
          md: "**समास** (compounding) means joining two or more words into one short word, and dropping the small words between them (like का, के लिए, और).\n\nThe new word is the **समस्त पद** (compound word). Breaking it back into its parts with the dropped words is **समास-विग्रह** (expanding the compound). The first part is the **पूर्वपद** and the second part is the **उत्तरपद**.\n\nExample: रसोईघर (समस्त पद) → रसोई के लिए घर (समास-विग्रह).",
        },
        {
          type: "table",
          headers: ["समास", "Which part is main", "Examples (समस्त पद → विग्रह)"],
          rows: [
            ["**अव्ययीभाव**", "पूर्वपद, which is an अव्यय; the whole word works as an अव्यय", "यथाशक्ति → शक्ति के अनुसार; प्रतिदिन → हर दिन; आजन्म → जन्म से लेकर; भरपेट → पेट भरकर"],
            ["**तत्पुरुष**", "उत्तरपद; a कारक sign is dropped", "राजपुत्र → राजा का पुत्र; रसोईघर → रसोई के लिए घर; देशनिकाला → देश से निकाला; जलमग्न → जल में मग्न"],
            ["**कर्मधारय**", "उत्तरपद; one part describes the other (विशेषण–विशेष्य) or is compared to it (उपमान–उपमेय)", "नीलकमल → नीला है जो कमल; महात्मा → महान है जो आत्मा; चंद्रमुख → चंद्र के समान मुख"],
            ["**द्विगु**", "उत्तरपद; पूर्वपद is a number; shows a group", "त्रिलोक → तीन लोकों का समूह; चौराहा → चार राहों का समूह; सप्ताह → सात दिनों का समूह"],
            ["**द्वंद्व**", "both parts; 'और / या' is dropped", "माता-पिता → माता और पिता; रात-दिन → रात और दिन; भला-बुरा → भला या बुरा"],
            ["**बहुव्रीहि**", "neither part; the word points to a third person or thing", "लंबोदर → लंबा है उदर जिसका, अर्थात् गणेश; दशानन → दस हैं आनन जिसके, अर्थात् रावण"],
          ],
        },
        {
          type: "text",
          md: "**तत्पुरुष** is named after the कारक sign that is dropped: कर्म (स्वर्गप्राप्त → स्वर्ग को प्राप्त), करण (तुलसीकृत → तुलसी द्वारा कृत), संप्रदान (रसोईघर), अपादान (देशनिकाला), संबंध (राजपुत्र), अधिकरण (जलमग्न).",
        },
        {
          type: "example",
          title: "Finding the समास step by step",
          problem: "Write the समास-विग्रह and name the समास: 'नीलकंठ'.",
          steps: [
            "Split the word: नील (blue) + कंठ (throat).",
            "If it simply means 'a blue throat': नीला है जो कंठ. नीला describes कंठ, so it is **कर्मधारय**.",
            "If it means a person who has a blue throat: नीला है कंठ जिसका, अर्थात् शिव. The word points to a third person, so it is **बहुव्रीहि**.",
            "In the exam, the meaning in the sentence (or the विग्रह asked for) decides the answer.",
          ],
          answer: "नीला है जो कंठ → कर्मधारय; नीला है कंठ जिसका (शिव) → बहुव्रीहि.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'चौराहा' (crossroads) belongs to which समास?",
              options: ["द्वंद्व", "द्विगु", "कर्मधारय", "अव्ययीभाव"],
              answer: 1,
              explain: "पूर्वपद 'चौ' (चार) is a number and the word means a group of four roads: **द्विगु**.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Every word that starts with a number is द्विगु, so 'दशानन' (Ravan) and 'चतुर्भुज' (Vishnu) are द्विगु.",
          right: "If the word names a particular person or thing (दस हैं आनन जिसके, अर्थात् रावण), it is **बहुव्रीहि**. It is द्विगु only when it shows a group, like 'सप्ताह'.",
          why: "The number at the start pulls you to द्विगु. But in बहुव्रीहि neither part is main; the meaning goes to a third person. Always ask: does the word mean a group, or a particular someone?",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each समस्त पद with its समास.",
            pairs: [
              ["यथाशक्ति", "अव्ययीभाव"],
              ["राजपुत्र", "तत्पुरुष"],
              ["महात्मा", "कर्मधारय"],
              ["त्रिलोक", "द्विगु"],
              ["दाल-रोटी", "द्वंद्व"],
              ["लंबोदर", "बहुव्रीहि"],
            ],
            explain: "यथा + शक्ति (अव्यय first) → अव्ययीभाव; राजा **का** पुत्र → तत्पुरुष; महान है जो आत्मा → कर्मधारय; तीन लोकों का समूह → द्विगु; दाल **और** रोटी → द्वंद्व; लंबा है उदर जिसका (गणेश) → बहुव्रीहि.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Questions ask for (a) the विग्रह of a समस्त पद, or (b) the समस्त पद from a विग्रह, and the name of the समास. Write the विग्रह fully. For बहुव्रीहि, always add the person or thing meant (अर्थात् गणेश). Leaving it out is the most common reason for losing the mark.",
        },
        {
          type: "keypoints",
          items: [
            "समस्त पद = the short compound word; समास-विग्रह = its expanded form.",
            "अव्ययीभाव: अव्यय first. तत्पुरुष: कारक sign dropped. कर्मधारय: describing or comparing.",
            "द्विगु: number + group. द्वंद्व: 'और / या' dropped. बहुव्रीहि: points to a third.",
            "The same word can be कर्मधारय or बहुव्रीहि; the meaning decides.",
          ],
        },
      ],
      flashcards: [
        { front: "समास", back: "Joining two or more words into one short word by dropping the linking words." },
        { front: "समास-विग्रह", back: "Breaking a compound word into its parts with the linking words. रसोईघर → रसोई के लिए घर." },
        { front: "अव्ययीभाव समास", back: "First part is an अव्यय and the whole word acts as an अव्यय: प्रतिदिन, यथाशक्ति, आजन्म." },
        { front: "द्विगु समास", back: "First part is a number and the word shows a group: त्रिलोक, सप्ताह, चौराहा." },
        { front: "द्वंद्व समास", back: "Both parts are main, joined by और / या: माता-पिता, रात-दिन." },
        { front: "बहुव्रीहि समास", back: "Neither part is main; it points to a third: दशानन (रावण), लंबोदर (गणेश)." },
        { front: "कर्मधारय समास", back: "Adjective + noun or comparison: नीलकमल, महात्मा, चंद्रमुख." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The समास-विग्रह of 'देशनिकाला' is:",
          options: ["देश का निकाला", "देश से निकाला", "देश में निकाला", "देश और निकाला"],
          answer: 1,
          explain: "Sent out **from** the country: 'से' (अपादान) is dropped, so it is अपादान तत्पुरुष.",
        },
        {
          kind: "mcq",
          q: "'माता-पिता' belongs to which समास?",
          options: ["तत्पुरुष", "द्विगु", "द्वंद्व", "बहुव्रीहि"],
          answer: 2,
          explain: "माता **और** पिता: both parts are equal, so it is **द्वंद्व**.",
        },
        {
          kind: "truefalse",
          q: "In बहुव्रीहि समास, the उत्तरपद is the main part.",
          answer: false,
          explain: "In बहुव्रीहि, neither part is main. The word points to a third person or thing.",
        },
        {
          kind: "fill",
          q: "'सात दिनों का समूह' makes the समस्त पद ___.",
          answer: ["सप्ताह", "saptah"],
          explain: "सप्त (seven) + अह (day) = सप्ताह. It is द्विगु समास.",
        },
        {
          kind: "mcq",
          q: "'दशानन' (meaning Ravan) belongs to which समास?",
          options: ["द्विगु", "बहुव्रीहि", "कर्मधारय", "तत्पुरुष"],
          answer: 1,
          explain: "दस हैं आनन जिसके, अर्थात् रावण. It points to a particular person, so **बहुव्रीहि**, not द्विगु.",
          difficulty: 2,
          hint: "Does it mean a group of ten faces, or one person?",
        },
        {
          kind: "multi",
          q: "Which of these are अव्ययीभाव समास?",
          options: ["प्रतिदिन", "भरपेट", "नीलकमल", "आजन्म", "राजमहल"],
          answers: [0, 1, 3],
          explain: "प्रति, भर, आ are अव्यय and the words work as अव्यय. नीलकमल is कर्मधारय; राजमहल (राजा का महल) is तत्पुरुष.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "'चंद्रमुख' (a face like the moon) is:",
          options: ["कर्मधारय", "द्वंद्व", "द्विगु", "अव्ययीभाव"],
          answer: 0,
          explain: "चंद्र के समान मुख: the face is compared to the moon (उपमान–उपमेय), so it is **कर्मधारय**.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. संधि                                                              */
/* ------------------------------------------------------------------ */
const sandhi: Topic = {
  slug: "sandhi",
  title: "Sandhi (संधि)",
  icon: "🧩",
  description: "स्वर, व्यंजन and विसर्ग संधि: how sounds join, with संधि-विच्छेद.",
  lessons: [
    {
      slug: "sandhi-swar-vyanjan-visarg",
      title: "स्वर, व्यंजन और विसर्ग संधि",
      summary: "What संधि is, the five kinds of स्वर संधि, common व्यंजन and विसर्ग संधि words, and how to split a word (संधि-विच्छेद).",
      minutes: 17,
      xp: 42,
      blocks: [
        {
          type: "illustration",
          emoji: "🎶",
          caption: "Say 'विद्या आलय' fast and it becomes 'विद्यालय'. The two sounds melt into one.",
        },
        {
          type: "text",
          md: "**संधि** (joining of sounds) happens when the last sound of one word and the first sound of the next word meet and change. Splitting the joined word back is **संधि-विच्छेद**.\n\nExample: विद्या + आलय = विद्यालय (school). Here आ + आ = आ.\n\nThere are three kinds: **स्वर संधि** (vowel + vowel), **व्यंजन संधि** (a consonant meets a vowel or consonant) and **विसर्ग संधि** (विसर्ग ':' meets a vowel or consonant).",
        },
        {
          type: "table",
          headers: ["स्वर संधि", "Rule", "Examples"],
          rows: [
            ["**दीर्घ**", "two similar vowels → long vowel (अ/आ + अ/आ = आ; इ/ई + इ/ई = ई; उ/ऊ + उ/ऊ = ऊ)", "विद्या + आलय = विद्यालय; रवि + इंद्र = रवींद्र; हिम + आलय = हिमालय"],
            ["**गुण**", "अ/आ + इ/ई = ए; अ/आ + उ/ऊ = ओ; अ/आ + ऋ = अर्", "देव + इंद्र = देवेंद्र; महा + उत्सव = महोत्सव; महा + ऋषि = महर्षि"],
            ["**वृद्धि**", "अ/आ + ए/ऐ = ऐ; अ/आ + ओ/औ = औ", "सदा + एव = सदैव; वन + औषधि = वनौषधि"],
            ["**यण**", "इ/ई + another vowel → य; उ/ऊ + another vowel → व", "इति + आदि = इत्यादि; सु + आगत = स्वागत"],
            ["**अयादि**", "ए → अय्, ऐ → आय्, ओ → अव्, औ → आव् before a vowel", "ने + अन = नयन; नै + अक = नायक; पो + अन = पवन; पौ + अक = पावक"],
          ],
        },
        {
          type: "table",
          headers: ["Kind", "Examples (संधि-विच्छेद → word)"],
          rows: [
            ["**व्यंजन संधि**", "जगत् + ईश = जगदीश; सत् + जन = सज्जन; उत् + ज्वल = उज्ज्वल; दिक् + गज = दिग्गज; सम् + तोष = संतोष"],
            ["**विसर्ग संधि**", "मनः + योग = मनोयोग; मनः + रंजन = मनोरंजन; निः + चय = निश्चय; निः + धन = निर्धन; दुः + उपयोग = दुरुपयोग; नमः + ते = नमस्ते"],
          ],
        },
        {
          type: "example",
          title: "Doing संधि-विच्छेद",
          problem: "Split 'महोत्सव' (great festival) and name the संधि.",
          steps: [
            "Look at the joining sound: 'हो' in महोत्सव. A 'ओ' in the middle often comes from अ/आ + उ/ऊ.",
            "Find two real words: 'महा' (great) + 'उत्सव' (festival).",
            "Check the rule: आ + उ = ओ. This is a गुण rule.",
          ],
          answer: "महोत्सव = महा + उत्सव, गुण स्वर संधि.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'सदैव' (always) = सदा + एव. Which संधि is it?",
              options: ["दीर्घ", "गुण", "वृद्धि", "यण"],
              answer: 2,
              explain: "आ + ए = ऐ. That is a **वृद्धि** rule.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "संधि and समास are the same: both join two words.",
          right: "**संधि** joins **sounds** (letters change at the meeting point). **समास** joins **words** by dropping linking words like का, और, के लिए.",
          why: "Both make one word from two, so they look alike. But in विद्यालय the sounds आ + आ merge (संधि), while in रसोईघर no sound changes; only 'के लिए' is dropped (समास).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which kind of संधि made each word?",
            groups: ["स्वर संधि", "व्यंजन संधि", "विसर्ग संधि"],
            items: [
              { text: "हिमालय (हिम + आलय)", group: 0, hint: "अ + आ, two vowels meet." },
              { text: "स्वागत (सु + आगत)", group: 0, hint: "उ + आ = व; a vowel meets a vowel (यण)." },
              { text: "जगदीश (जगत् + ईश)", group: 1, hint: "The consonant त् changes to द्." },
              { text: "सज्जन (सत् + जन)", group: 1, hint: "त् + ज = ज्ज, consonants meet." },
              { text: "निश्चय (निः + चय)", group: 2, hint: "The विसर्ग changes to श्." },
              { text: "मनोरंजन (मनः + रंजन)", group: 2, hint: "The विसर्ग ':' changes to ओ." },
            ],
            explain: "Look at the first word's last sound: a vowel → **स्वर**, a consonant with halant (त्, क्, म्) → **व्यंजन**, a विसर्ग (ः) → **विसर्ग** संधि.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In संधि-विच्छेद, both parts must be **real words** with the correct spelling: 'रवि + इंद्र', not 'रव + ईंद्र'. Write the halant (्) where needed (जगत्, सत्, उत्) and the विसर्ग (ः) in निः, मनः, दुः. Missing these signs is a common error.",
        },
        {
          type: "keypoints",
          items: [
            "**संधि** joins sounds; **संधि-विच्छेद** splits them.",
            "स्वर संधि has five kinds: दीर्घ, गुण, वृद्धि, यण, अयादि.",
            "व्यंजन संधि: a consonant changes (जगदीश, सज्जन). विसर्ग संधि: the ':' changes (मनोरंजन, निश्चय).",
            "संधि ≠ समास: संधि changes sounds, समास drops words.",
          ],
        },
      ],
      flashcards: [
        { front: "संधि", back: "The change in sounds when two sounds meet: विद्या + आलय = विद्यालय." },
        { front: "दीर्घ संधि", back: "Two similar vowels become one long vowel: रवि + इंद्र = रवींद्र." },
        { front: "गुण संधि", back: "अ/आ + इ = ए, अ/आ + उ = ओ, अ/आ + ऋ = अर्: देवेंद्र, महोत्सव, महर्षि." },
        { front: "वृद्धि संधि", back: "अ/आ + ए/ऐ = ऐ; अ/आ + ओ/औ = औ: सदैव, वनौषधि." },
        { front: "यण संधि", back: "इ + another vowel = य; उ + another vowel = व: इत्यादि, स्वागत." },
        { front: "अयादि संधि", back: "ए→अय्, ऐ→आय्, ओ→अव्, औ→आव्: नयन, नायक, पवन, पावक." },
        { front: "विसर्ग संधि examples", back: "मनोयोग, निश्चय, निर्धन, दुरुपयोग, नमस्ते." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The संधि-विच्छेद of 'देवेंद्र' is:",
          options: ["देव + इंद्र", "देवे + इंद्र", "देव + एंद्र", "दे + वेंद्र"],
          answer: 0,
          explain: "अ + इ = ए (गुण संधि): देव + इंद्र = देवेंद्र.",
        },
        {
          kind: "mcq",
          q: "'इत्यादि' (etcetera) is an example of:",
          options: ["दीर्घ संधि", "गुण संधि", "यण संधि", "अयादि संधि"],
          answer: 2,
          explain: "इति + आदि: इ + आ = या, so it is **यण संधि**.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "निः + धन = ___ (poor).",
          answer: ["निर्धन", "nirdhan"],
          explain: "The विसर्ग changes to र् before 'ध': निर्धन (विसर्ग संधि).",
        },
        {
          kind: "truefalse",
          q: "'उज्ज्वल' (bright) is formed by व्यंजन संधि: उत् + ज्वल.",
          answer: true,
          explain: "त् + ज becomes ज्ज. A consonant changes, so it is **व्यंजन संधि**.",
        },
        {
          kind: "mcq",
          q: "'नयन' (eye) = ने + अन. Which संधि is it?",
          options: ["गुण", "वृद्धि", "अयादि", "दीर्घ"],
          answer: 2,
          explain: "ए before a vowel becomes अय्: ने + अन = नयन. This is **अयादि संधि**.",
          difficulty: 2,
          hint: "ए changed into 'अय्'.",
        },
        {
          kind: "multi",
          q: "Which words are made by विसर्ग संधि?",
          options: ["मनोयोग", "दुरुपयोग", "सज्जन", "नमस्ते", "महर्षि"],
          answers: [0, 1, 3],
          explain: "मनः + योग, दुः + उपयोग, नमः + ते all have a विसर्ग. सज्जन is व्यंजन संधि; महर्षि (महा + ऋषि) is गुण संधि.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "'रसोईघर' and 'विद्यालय': which one is a संधि?",
          options: ["रसोईघर", "विद्यालय", "Both", "Neither"],
          answer: 1,
          explain: "In विद्यालय, आ + आ = आ (sounds change): संधि. रसोईघर only drops 'के लिए': समास.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 6. मुहावरे और लोकोक्तियाँ                                               */
/* ------------------------------------------------------------------ */
const muhavare: Topic = {
  slug: "muhavare-lokoktiyan",
  title: "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)",
  icon: "💬",
  description: "Common Hindi idioms and proverbs, their meanings, and how to use them correctly in sentences.",
  lessons: [
    {
      slug: "muhavare-lokoktiyan-prayog",
      title: "मुहावरे और लोकोक्तियाँ: Meaning and Use",
      summary: "The difference between a मुहावरा and a लोकोक्ति, common examples with meanings, and how to use them in a sentence.",
      minutes: 15,
      xp: 38,
      blocks: [
        {
          type: "illustration",
          emoji: "🌙",
          caption: "'तुम तो ईद का चाँद हो गए!' Your friend does not mean you became the moon. He means you are rarely seen.",
        },
        {
          type: "text",
          md: "A **मुहावरा** (idiom) is a group of words whose meaning is different from the meaning of its words. It is **not a full sentence**. It fits inside a sentence and changes its form with tense, gender and number: 'नौ दो ग्यारह होना' → 'चोर नौ दो ग्यारह हो गया।' (The thief ran away.)\n\nA **लोकोक्ति** (proverb) is a complete saying that carries a lesson from life. It stands on its own and its words **do not change**: 'अधजल गगरी छलकत जाए।'",
        },
        {
          type: "table",
          headers: ["मुहावरा", "अर्थ (meaning)"],
          rows: [
            ["आँख का तारा होना", "बहुत प्यारा होना (to be very dear)"],
            ["नौ दो ग्यारह होना", "भाग जाना (to run away)"],
            ["ईद का चाँद होना", "बहुत दिनों बाद दिखाई देना (to be seen rarely)"],
            ["दाँतों तले उँगली दबाना", "हैरान होना (to be amazed)"],
            ["हाथ-पाँव फूल जाना", "घबरा जाना (to panic)"],
            ["आसमान सिर पर उठाना", "बहुत शोर करना (to make a lot of noise)"],
            ["कमर कसना", "किसी काम के लिए तैयार होना (to get ready for a task)"],
            ["लोहा मानना", "किसी की श्रेष्ठता स्वीकार करना (to accept someone's superiority)"],
          ],
        },
        {
          type: "table",
          headers: ["लोकोक्ति", "अर्थ (meaning)"],
          rows: [
            ["अधजल गगरी छलकत जाए", "कम ज्ञान वाला अधिक दिखावा करता है (a person with little knowledge shows off more)"],
            ["नाच न जाने आँगन टेढ़ा", "अपनी कमी का दोष दूसरों पर डालना (to blame others for one's own lack of skill)"],
            ["अब पछताए होत क्या जब चिड़िया चुग गई खेत", "समय निकल जाने पर पछताना बेकार है (regret is useless after the chance is lost)"],
            ["ऊँट के मुँह में ज़ीरा", "ज़रूरत से बहुत कम (far too little for the need)"],
            ["दूर के ढोल सुहावने", "दूर की चीज़ें अच्छी लगती हैं (things far away seem pleasant)"],
          ],
        },
        {
          type: "example",
          title: "Using a मुहावरा in a sentence",
          problem: "Use 'दाँतों तले उँगली दबाना' in a sentence that makes its meaning clear.",
          steps: [
            "Know the meaning: हैरान होना (to be amazed).",
            "Think of a situation that is truly amazing: a small girl solving a hard puzzle.",
            "Fit the idiom into the sentence and change its form for tense and number: 'दबा ली'.",
          ],
          answer: "छह साल की प्रिया को कठिन पहेली हल करते देखकर सब ने दाँतों तले उँगली दबा ली। (Seeing six-year-old Priya solve a hard puzzle, everyone was amazed.)",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The meaning of 'हाथ-पाँव फूल जाना' is:",
              options: ["मोटा हो जाना", "घबरा जाना", "बहुत मेहनत करना", "चोट लग जाना"],
              answer: 1,
              explain: "It does not mean the hands and feet swell. It means **घबरा जाना** (to panic).",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "To use a मुहावरा in a sentence, writing 'उसका हाथ-पाँव फूल गया' or 'राम ईद का चाँद है' is enough.",
          right: "The sentence must **show the meaning** through its situation: 'परीक्षा-भवन में प्रश्न-पत्र देखते ही रवि के हाथ-पाँव फूल गए।' (Ravi panicked as soon as he saw the question paper.)",
          why: "A sentence with no situation could also be read word for word, so the examiner cannot tell whether you know the meaning. Give a reason or situation that makes the meaning clear.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each मुहावरा with its meaning.",
            pairs: [
              ["आँख का तारा होना", "बहुत प्यारा होना"],
              ["नौ दो ग्यारह होना", "भाग जाना"],
              ["ईद का चाँद होना", "बहुत दिनों बाद दिखाई देना"],
              ["आसमान सिर पर उठाना", "बहुत शोर करना"],
              ["कमर कसना", "तैयार होना"],
              ["लोहा मानना", "श्रेष्ठता स्वीकार करना"],
            ],
            explain: "A मुहावरा's meaning is not the meaning of its words. 'नौ दो ग्यारह' has nothing to do with counting; it means running away.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "CBSE usually asks you to **use the मुहावरा in a sentence** or to fill in the right मुहावरा. Change the verb part to fit the sentence (होना → हो गया, हो गई) but keep the main words unchanged: write 'आँख का तारा', not 'आँख का सितारा'.",
        },
        {
          type: "keypoints",
          items: [
            "**मुहावरा**: a phrase, used inside a sentence; its verb part changes.",
            "**लोकोक्ति**: a complete saying with a lesson; its words do not change.",
            "Never use a मुहावरा in its word-for-word meaning.",
            "A good sentence shows the meaning through a situation.",
          ],
        },
      ],
      flashcards: [
        { front: "मुहावरा", back: "A phrase with a special meaning, used inside a sentence; it changes form with tense." },
        { front: "लोकोक्ति", back: "A complete popular saying with a lesson; its words do not change." },
        { front: "नौ दो ग्यारह होना", back: "भाग जाना (to run away)." },
        { front: "दाँतों तले उँगली दबाना", back: "हैरान होना (to be amazed)." },
        { front: "नाच न जाने आँगन टेढ़ा", back: "Blaming others for one's own lack of skill." },
        { front: "ऊँट के मुँह में ज़ीरा", back: "Far too little for the need." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is a लोकोक्ति, not a मुहावरा?",
          options: ["कमर कसना", "लोहा मानना", "अधजल गगरी छलकत जाए", "आँख का तारा होना"],
          answer: 2,
          explain: "It is a complete saying with a lesson and does not change form, so it is a **लोकोक्ति**. The others end in a verb (कसना, मानना, होना) and fit inside sentences.",
        },
        {
          kind: "truefalse",
          q: "The words of a लोकोक्ति change with tense and gender, just like a मुहावरा.",
          answer: false,
          explain: "A लोकोक्ति is a fixed saying. Only the verb part of a मुहावरा changes.",
        },
        {
          kind: "fill",
          q: "मोहल्ले के बच्चों ने क्रिकेट जीतने की खुशी में आसमान सिर पर ___ लिया। (Fill the right form of 'उठाना'.)",
          answer: ["उठा"],
          explain: "'आसमान सिर पर उठा लिया' (made a lot of noise). The verb changes to past tense: उठा लिया.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "'सचिन की बल्लेबाज़ी का पूरी दुनिया ने ___।' Choose the right मुहावरा.",
          options: ["लोहा माना", "कमर कसी", "हाथ-पाँव फूल गए", "नौ दो ग्यारह हुई"],
          answer: 0,
          explain: "'लोहा मानना' = to accept someone's superiority. The whole world accepted his batting skill.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "'अब पछताए होत क्या जब चिड़िया चुग गई खेत' fits which situation best?",
          options: [
            "A student who did not study all year feels sorry after failing.",
            "A child who is very dear to his parents.",
            "A thief who runs away from the police.",
            "A person who shows off with little knowledge.",
          ],
          answer: 0,
          explain: "The proverb means regret is useless after the chance is gone, exactly the student's case.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which meanings are correct?",
          options: ["ईद का चाँद होना = बहुत दिनों बाद दिखाई देना", "कमर कसना = कमर में दर्द होना", "हाथ-पाँव फूल जाना = घबरा जाना", "नौ दो ग्यारह होना = हिसाब लगाना"],
          answers: [0, 2],
          explain: "कमर कसना means to get ready; नौ दो ग्यारह होना means to run away. The wrong options take the word-for-word meaning.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 7. शब्द-भंडार                                                         */
/* ------------------------------------------------------------------ */
const shabdBhandar: Topic = {
  slug: "shabd-bhandar",
  title: "Vocabulary: Synonyms, Antonyms and One-word Substitutes",
  icon: "📚",
  description: "पर्यायवाची, विलोम and अनेक शब्दों के लिए एक शब्द, with the most-asked words.",
  lessons: [
    {
      slug: "paryayvachi-vilom-ek-shabd",
      title: "पर्यायवाची, विलोम और एक शब्द",
      summary: "Common synonyms, antonyms and one-word substitutes in Hindi, and the traps in look-alike words.",
      minutes: 15,
      xp: 38,
      blocks: [
        {
          type: "illustration",
          emoji: "☀️",
          caption: "सूरज, रवि, दिनकर, भानु: four names, one sun. Knowing many words makes your Hindi rich.",
        },
        {
          type: "text",
          md: "**पर्यायवाची शब्द** (synonyms) are words with the same or nearly the same meaning: पानी, जल, नीर (water).\n\n**विलोम शब्द** (antonyms) are words with the opposite meaning: सुख × दुःख (happiness × sorrow).\n\n**अनेक शब्दों के लिए एक शब्द** (one-word substitute) is one word that replaces a long phrase: 'जिसके माता-पिता न हों' → **अनाथ** (orphan).",
        },
        {
          type: "table",
          headers: ["शब्द", "पर्यायवाची (synonyms)"],
          rows: [
            ["पानी (water)", "जल, नीर, वारि, अंबु"],
            ["सूर्य (sun)", "रवि, दिनकर, भानु, सूरज"],
            ["आकाश (sky)", "गगन, नभ, अंबर, आसमान"],
            ["पृथ्वी (earth)", "धरा, भूमि, वसुधा, धरती"],
            ["फूल (flower)", "पुष्प, सुमन, कुसुम"],
            ["पेड़ (tree)", "वृक्ष, तरु, विटप"],
            ["घर (house)", "गृह, सदन, भवन, निकेतन"],
          ],
        },
        {
          type: "table",
          headers: ["शब्द", "विलोम (antonym)", "शब्द", "विलोम (antonym)"],
          rows: [
            ["आदि (beginning)", "अंत", "उदय (rise)", "अस्त"],
            ["आस्तिक (believer)", "नास्तिक", "प्राचीन (ancient)", "नवीन / आधुनिक"],
            ["उन्नति (progress)", "अवनति", "आयात (import)", "निर्यात"],
            ["मान (respect)", "अपमान", "सजीव (living)", "निर्जीव"],
            ["स्वदेश (own country)", "विदेश", "कठिन (difficult)", "सरल"],
          ],
        },
        {
          type: "table",
          headers: ["अनेक शब्द (phrase)", "एक शब्द"],
          rows: [
            ["जो ईश्वर में विश्वास रखता हो (one who believes in God)", "आस्तिक"],
            ["जिसका कोई आकार न हो (without shape)", "निराकार"],
            ["जो कभी न मरे (one who never dies)", "अमर"],
            ["जो पढ़ना-लिखना न जानता हो (one who cannot read or write)", "निरक्षर"],
            ["जो सब कुछ जानता हो (one who knows everything)", "सर्वज्ञ"],
            ["जो कम बोलता हो (one who speaks little)", "मितभाषी"],
            ["सप्ताह में एक बार होने वाला (once a week)", "साप्ताहिक"],
            ["जो देखने योग्य हो (worth seeing)", "दर्शनीय"],
          ],
        },
        {
          type: "example",
          title: "Finding the right one-word substitute",
          problem: "Give one word for: 'जिसकी कोई सीमा न हो' (that which has no limit).",
          steps: [
            "Find the key idea: सीमा (limit).",
            "'न हो' (not having) is often shown by the prefix 'अ-' or 'नि-'.",
            "अ + सीम = असीम (limitless). Check it in a sentence: 'माँ का प्यार असीम होता है।' (A mother's love is limitless.)",
          ],
          answer: "असीम",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which word is NOT a synonym of 'आकाश' (sky)?",
              options: ["गगन", "नभ", "अंबु", "अंबर"],
              answer: 2,
              explain: "**अंबु** means water. **अंबर** means sky. The two look alike, which is why they are often confused.",
              difficulty: 2,
              hint: "One word here means water.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "You can make any विलोम by adding 'अ-': उन्नति → अउन्नति, आयात → अआयात.",
          right: "Many विलोम are fixed words that must be learnt: उन्नति × **अवनति**, आयात × **निर्यात**, मान × **अपमान**.",
          why: "Some pairs do use 'अ-' (सफल × असफल), so learners apply it everywhere. But Hindi also uses अव-, निर्-, अप-, नि- and fully different words (उदय × अस्त).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which word does each synonym belong to?",
            groups: ["पानी (water)", "सूर्य (sun)", "आकाश (sky)"],
            items: [
              { text: "नीर", group: 0, hint: "नीर means water." },
              { text: "वारि", group: 0, hint: "वारि means water." },
              { text: "अंबु", group: 0, hint: "Careful: अंबु is water, अंबर is sky." },
              { text: "दिनकर", group: 1, hint: "दिन + कर: the one who makes the day." },
              { text: "भानु", group: 1, hint: "भानु is a name of the sun." },
              { text: "रवि", group: 1, hint: "रविवार is the sun's day (Sunday)." },
              { text: "नभ", group: 2, hint: "नभ means sky." },
              { text: "अंबर", group: 2, hint: "अंबर is the sky; अंबु is water." },
            ],
            explain: "Learn synonyms in groups. Watch look-alikes such as **अंबु** (water) and **अंबर** (sky).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Write the **spelling** correctly; a wrong मात्रा loses the mark (निरक्षर, not 'निर्अक्षर'; दर्शनीय, not 'दर्शनिय'). When two synonyms are asked, give two different words, not the word itself.",
        },
        {
          type: "keypoints",
          items: [
            "**पर्यायवाची**: same meaning. **विलोम**: opposite meaning.",
            "**अनेक शब्दों के लिए एक शब्द** replaces a phrase with one word.",
            "Learn fixed विलोम pairs; do not just add 'अ-'.",
            "Watch look-alikes: अंबु (water) and अंबर (sky).",
          ],
        },
      ],
      flashcards: [
        { front: "पर्यायवाची of पानी", back: "जल, नीर, वारि, अंबु." },
        { front: "पर्यायवाची of फूल", back: "पुष्प, सुमन, कुसुम." },
        { front: "विलोम of उन्नति", back: "अवनति." },
        { front: "विलोम of आयात", back: "निर्यात." },
        { front: "जो सब कुछ जानता हो", back: "सर्वज्ञ." },
        { front: "जिसका कोई आकार न हो", back: "निराकार." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The विलोम of 'उदय' (rise) is:",
          options: ["अनुदय", "अस्त", "उन्नति", "प्रकाश"],
          answer: 1,
          explain: "The sun rises (उदय) and sets (**अस्त**). 'अनुदय' is a made-up form.",
        },
        {
          kind: "fill",
          q: "One word for 'जो कभी न मरे' is ___.",
          answer: ["अमर", "amar"],
          explain: "अ (not) + मर (die) = **अमर** (immortal).",
        },
        {
          kind: "mcq",
          q: "One word for 'जो पढ़ना-लिखना न जानता हो':",
          options: ["साक्षर", "निरक्षर", "निराकार", "मितभाषी"],
          answer: 1,
          explain: "**निरक्षर** means one who cannot read or write. साक्षर is its opposite.",
        },
        {
          kind: "multi",
          q: "Which are synonyms of 'पृथ्वी' (earth)?",
          options: ["धरा", "वसुधा", "गगन", "भूमि", "तरु"],
          answers: [0, 1, 3],
          explain: "धरा, वसुधा, भूमि mean earth. गगन is sky; तरु is tree.",
        },
        {
          kind: "truefalse",
          q: "The विलोम of 'मान' (respect) is 'अपमान'.",
          answer: true,
          explain: "मान × अपमान (respect × insult).",
        },
        {
          kind: "mcq",
          q: "Choose the correct pair of विलोम.",
          options: ["आस्तिक × अनास्तिक", "प्राचीन × नवीन", "सजीव × असजीव", "आदि × अनादि"],
          answer: 1,
          explain: "प्राचीन × नवीन is correct. The right pairs for the others are आस्तिक × नास्तिक, सजीव × निर्जीव, आदि × अंत.",
          difficulty: 2,
          hint: "Beware of pairs made only by adding 'अ-' or 'अन-'.",
        },
        {
          kind: "fill",
          q: "One word for 'सप्ताह में एक बार होने वाला' is ___.",
          answer: ["साप्ताहिक", "saptahik"],
          explain: "सप्ताह (week) + इक = **साप्ताहिक** (weekly). Note the long 'सा'.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 8. लिंग, वचन, कारक                                                    */
/* ------------------------------------------------------------------ */
const lingVachanKarak: Topic = {
  slug: "ling-vachan-karak",
  title: "Gender, Number and Case (लिंग, वचन, कारक)",
  icon: "⚖️",
  description: "Masculine and feminine words, singular and plural forms, and the eight कारक with their signs.",
  lessons: [
    {
      slug: "ling-vachan-karak-basics",
      title: "लिंग, वचन और कारक",
      summary: "How to find and change gender and number of Hindi nouns, and how to use the eight कारक and their विभक्ति signs.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🍵",
          caption: "Is it 'चाय अच्छा है' or 'चाय अच्छी है'? In Hindi even tea has a gender (it is स्त्रीलिंग).",
        },
        {
          type: "text",
          md: "**लिंग** (gender): Hindi has only two genders, **पुल्लिंग** (masculine) and **स्त्रीलिंग** (feminine). Every noun, even a thing, is one of them. The easy test: put 'अच्छा / अच्छी' or a verb with it. 'दही अच्छा है' → पुल्लिंग; 'किताब अच्छी है' → स्त्रीलिंग.\n\nWords that learners often get wrong: **पुल्लिंग** — पानी, दही, मोती, घी, हाथी; **स्त्रीलिंग** — चाय, किताब, बात, दाल, आग.",
        },
        {
          type: "table",
          headers: ["पुल्लिंग", "स्त्रीलिंग", "पुल्लिंग", "स्त्रीलिंग"],
          rows: [
            ["लड़का", "लड़की", "लेखक", "लेखिका"],
            ["शेर", "शेरनी", "धोबी", "धोबिन"],
            ["युवक", "युवती", "कवि", "कवयित्री"],
            ["विद्वान", "विदुषी", "बूढ़ा", "बुढ़िया"],
          ],
        },
        {
          type: "text",
          md: "**वचन** (number): **एकवचन** (singular) and **बहुवचन** (plural). Rules for making the plural:\n\n• पुल्लिंग ending in 'आ': लड़का → लड़के, कमरा → कमरे. Other पुल्लिंग words do not change: घर → घर, बालक → बालक.\n\n• स्त्रीलिंग ending in 'अ': बात → बातें, किताब → किताबें. Ending in 'इ / ई': नदी → नदियाँ, तिथि → तिथियाँ. Ending in 'या': चिड़िया → चिड़ियाँ. Ending in 'आ' or 'उ / ऊ': माता → माताएँ, वस्तु → वस्तुएँ, बहू → बहुएँ.",
        },
        {
          type: "table",
          headers: ["कारक (case)", "विभक्ति (sign)", "Example"],
          rows: [
            ["**कर्ता** (doer)", "ने / no sign", "**सीता ने** खाना खाया।"],
            ["**कर्म** (object)", "को / no sign", "माँ ने **बच्चे को** बुलाया।"],
            ["**करण** (instrument, means)", "से, के द्वारा", "वह **कलम से** लिखता है।"],
            ["**संप्रदान** (for whom, to whom given)", "को, के लिए", "उसने **गरीबों को** कपड़े दिए।"],
            ["**अपादान** (separation, from)", "से (अलग होना)", "**पेड़ से** पत्ता गिरा।"],
            ["**संबंध** (relation)", "का, के, की; रा, रे, री", "यह **राम की** किताब है।"],
            ["**अधिकरण** (place, on / in)", "में, पर", "किताब **मेज़ पर** है।"],
            ["**संबोधन** (calling)", "हे!, अरे!, ओ!", "**अरे बच्चो!** इधर आओ।"],
          ],
        },
        {
          type: "example",
          title: "करण or अपादान? Both use 'से'",
          problem: "Name the कारक of the underlined words: (a) 'मैंने **चाकू से** सेब काटा।' (b) 'गंगा **हिमालय से** निकलती है।'",
          steps: [
            "Ask: does 'से' show the **tool or means** of the action, or **separation** (moving away from)?",
            "(a) The knife is the tool used to cut, so it is **करण कारक**.",
            "(b) The river comes out **from** the Himalayas, moving away from it, so it is **अपादान कारक**.",
          ],
          answer: "(a) करण कारक (b) अपादान कारक",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which sentence is correct?",
              options: ["पानी ठंडी है।", "पानी ठंडा है।", "पानी ठंडे हैं।", "पानी ठंडियाँ है।"],
              answer: 1,
              explain: "'पानी' is **पुल्लिंग** and एकवचन, so 'ठंडा है'. Words ending in 'ई' are not always feminine.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Every word ending in 'ई' is स्त्रीलिंग, so 'पानी ठंडी है' and 'दही खट्टी है'.",
          right: "पानी, दही, मोती, घी, हाथी are **पुल्लिंग**: 'पानी ठंडा है', 'दही खट्टा है'.",
          why: "Many feminine words end in 'ई' (लड़की, नदी), so the rule seems true. But it has many exceptions, and in Kannada and English, things like water or tea are not masculine or feminine, so learners must learn these words one by one.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does 'से' show करण or अपादान here?",
            groups: ["करण (tool / means)", "अपादान (from / separation)"],
            items: [
              { text: "वह कलम से लिखता है।", group: 0, hint: "The pen is the tool for writing." },
              { text: "बच्चे बस से स्कूल जाते हैं।", group: 0, hint: "The bus is the means of going." },
              { text: "मैंने चाकू से सेब काटा।", group: 0, hint: "The knife is the tool." },
              { text: "पेड़ से आम गिरा।", group: 1, hint: "The mango falls away from the tree." },
              { text: "चूहा बिल से बाहर आया।", group: 1, hint: "The rat moves out from the hole." },
              { text: "गंगा हिमालय से निकलती है।", group: 1, hint: "The river comes out from the mountains." },
              { text: "बच्चा कुत्ते से डरता है।", group: 1, hint: "With 'डरना' (to fear), 'से' is treated as अपादान." },
            ],
            explain: "'से' + tool or means → **करण**. 'से' + moving away, coming out, or fear → **अपादान**.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you change the number of a word in a sentence, change the verb and adjective too: 'मेरा कमरा बड़ा है' → 'मेरे कमरे बड़े हैं'. Changing only the noun is the most common error. Also, 'को' can be कर्म or संप्रदान: if something is **given** to someone, it is संप्रदान.",
        },
        {
          type: "keypoints",
          items: [
            "Hindi has two genders: **पुल्लिंग** and **स्त्रीलिंग**; test with अच्छा / अच्छी.",
            "पानी, दही, मोती, घी are पुल्लिंग; चाय, किताब, बात, आग are स्त्रीलिंग.",
            "There are eight **कारक**; their signs are called **विभक्ति**.",
            "से: करण (tool) or अपादान (separation). को: कर्म or संप्रदान (to whom given).",
          ],
        },
      ],
      flashcards: [
        { front: "Two genders in Hindi", back: "पुल्लिंग (masculine) and स्त्रीलिंग (feminine)." },
        { front: "स्त्रीलिंग of कवि", back: "कवयित्री (not 'कवियत्री')." },
        { front: "बहुवचन of नदी", back: "नदियाँ." },
        { front: "बहुवचन of बहू", back: "बहुएँ." },
        { front: "करण कारक", back: "Shows the tool or means; sign से / के द्वारा: 'कलम से लिखा'." },
        { front: "अपादान कारक", back: "Shows separation; sign से: 'पेड़ से पत्ता गिरा'." },
        { front: "संप्रदान कारक", back: "For whom or to whom given; sign को / के लिए: 'गरीबों को कपड़े दिए'." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which word is पुल्लिंग?",
          options: ["चाय", "दही", "किताब", "बात"],
          answer: 1,
          explain: "'दही' is पुल्लिंग ('दही खट्टा है'). The others are स्त्रीलिंग.",
        },
        {
          kind: "fill",
          q: "The बहुवचन of 'चिड़िया' is ___.",
          answer: ["चिड़ियाँ", "चिड़ियां"],
          explain: "Feminine words ending in 'या' take 'याँ': चिड़िया → **चिड़ियाँ**.",
        },
        {
          kind: "mcq",
          q: "In 'माँ ने बच्चे के लिए खिलौना खरीदा', 'बच्चे के लिए' is in which कारक?",
          options: ["कर्म", "करण", "संप्रदान", "संबंध"],
          answer: 2,
          explain: "'के लिए' (for) is the sign of **संप्रदान कारक**.",
        },
        {
          kind: "truefalse",
          q: "In 'पेड़ से पत्ता गिरा', 'पेड़ से' is करण कारक.",
          answer: false,
          explain: "The leaf moves away from the tree, so it is **अपादान**, not करण.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Change into बहुवचन: 'मेरा कमरा बड़ा है।'",
          options: ["मेरा कमरे बड़ा हैं।", "मेरे कमरे बड़े हैं।", "मेरे कमरा बड़े है।", "मेरी कमरे बड़ी हैं।"],
          answer: 1,
          explain: "The noun, the adjective, the pronoun and the verb all change: मेरे कमरे बड़े हैं।",
          difficulty: 2,
          hint: "Change every word that agrees with the noun.",
        },
        {
          kind: "multi",
          q: "Which are signs (विभक्ति) of संबंध कारक?",
          options: ["का", "की", "में", "रा", "से"],
          answers: [0, 1, 3],
          explain: "का, के, की and रा, रे, री (मेरा, तुम्हारा) show संबंध. 'में' is अधिकरण; 'से' is करण / अपादान.",
        },
        {
          kind: "mcq",
          q: "The स्त्रीलिंग of 'विद्वान' (scholar) is:",
          options: ["विद्वानी", "विदुषी", "विद्वाना", "विद्वानिन"],
          answer: 1,
          explain: "विद्वान → **विदुषी**. It is an irregular form you must learn.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 9. काल                                                               */
/* ------------------------------------------------------------------ */
const kaal: Topic = {
  slug: "kaal",
  title: "Tenses (काल)",
  icon: "⏳",
  description: "भूतकाल, वर्तमान काल and भविष्यत् काल with their kinds, verb agreement and the use of 'ने'.",
  lessons: [
    {
      slug: "kaal-bhed",
      title: "काल और उसके भेद",
      summary: "The three tenses of Hindi and their kinds, how the verb agrees with gender and number, and when to use 'ने'.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🕰️",
          caption: "मैंने खाना खाया, मैं खाना खा रहा हूँ, मैं खाना खाऊँगा: yesterday, now, tomorrow.",
        },
        {
          type: "text",
          md: "**काल** (tense) is the form of the verb that shows the **time** of an action. Hindi has three tenses: **भूतकाल** (past), **वर्तमान काल** (present) and **भविष्यत् काल** (future).\n\nIn Hindi the verb also changes with the **gender and number** of the subject: 'लड़का खेलता है', 'लड़की खेलती है', 'लड़के खेलते हैं'.",
        },
        {
          type: "table",
          headers: ["काल", "भेद (kind)", "Example"],
          rows: [
            ["**वर्तमान**", "सामान्य (simple)", "वह पढ़ता है। (He reads.)"],
            ["", "अपूर्ण / तात्कालिक (continuous)", "वह पढ़ रहा है। (He is reading.)"],
            ["", "संदिग्ध (doubtful)", "वह पढ़ता होगा। (He must be reading.)"],
            ["**भूत**", "सामान्य (simple past)", "वह आया। (He came.)"],
            ["", "आसन्न (just completed)", "वह आया है। (He has come.)"],
            ["", "पूर्ण (completed long ago)", "वह आया था। (He had come.)"],
            ["", "अपूर्ण (continuous)", "वह आ रहा था। (He was coming.)"],
            ["", "संदिग्ध (doubtful)", "वह आया होगा। (He must have come.)"],
            ["", "हेतुहेतुमद् (conditional)", "यदि वह आता तो मैं जाता। (If he had come, I would have gone.)"],
            ["**भविष्यत्**", "सामान्य (simple future)", "वह जाएगा। (He will go.)"],
            ["", "संभाव्य (possible)", "शायद वह जाए। (Perhaps he may go.)"],
          ],
        },
        {
          type: "text",
          md: "**'ने' in the past tense**: with a **सकर्मक** verb (one that has an object) in past forms such as सामान्य, आसन्न and पूर्ण भूत, the कर्ता takes 'ने'. Then the verb agrees with the **object**, not the doer: 'राम ने रोटी खाई।' (रोटी is स्त्रीलिंग). With an **अकर्मक** verb (no object) there is no 'ने': 'राम घर गया।'",
        },
        {
          type: "example",
          title: "Changing the tense",
          problem: "Change into सामान्य भूतकाल: 'सीमा पत्र लिखती है। (Seema writes a letter.)'",
          steps: [
            "The verb 'लिखना' is सकर्मक (object: पत्र), so in the simple past the कर्ता takes 'ने': 'सीमा ने'.",
            "Now the verb agrees with 'पत्र' (पुल्लिंग, एकवचन), not with सीमा.",
            "So the verb is 'लिखा', not 'लिखी'.",
          ],
          answer: "सीमा ने पत्र लिखा। (Seema wrote a letter.)",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'वह पढ़ता होगा' is in which tense?",
              options: ["संदिग्ध भूतकाल", "संदिग्ध वर्तमान काल", "सामान्य भविष्यत् काल", "अपूर्ण भूतकाल"],
              answer: 1,
              explain: "'पढ़ता होगा' guesses about **now** (he must be reading), so it is **संदिग्ध वर्तमान**. 'पढ़ा होगा' would be संदिग्ध भूत.",
              difficulty: 3,
              hint: "'होगा' does not always mean future.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Use 'ने' with every past-tense verb: 'राम ने घर गया', 'बच्चों ने सोया'.",
          right: "'ने' is used only with **सकर्मक** verbs in the past: 'राम घर गया', 'बच्चे सो गए', but 'राम ने खाना खाया'.",
          why: "Learners see 'ने' in many past sentences and use it everywhere. Verbs like जाना, आना, सोना, हँसना are अकर्मक (no object), so they never take 'ने'.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each sentence by its काल.",
            groups: ["भूतकाल", "वर्तमान काल", "भविष्यत् काल"],
            items: [
              { text: "वह कल आया था।", group: 0, hint: "'आया था' = पूर्ण भूत." },
              { text: "मैंने खाना खा लिया है।", group: 0, hint: "'खा लिया है' is आसन्न भूत: the action is complete, even though 'है' is used." },
              { text: "बच्चे मैदान में खेल रहे हैं।", group: 1, hint: "'खेल रहे हैं' = happening now." },
              { text: "माँ रसोई में खाना बनाती होंगी।", group: 1, hint: "'बनाती होंगी' guesses about now: संदिग्ध वर्तमान." },
              { text: "हम कल मैसूरु जाएँगे।", group: 2, hint: "'जाएँगे' = will go." },
              { text: "शायद आज बारिश हो।", group: 2, hint: "'हो' with 'शायद' shows a possibility: संभाव्य भविष्यत्." },
            ],
            explain: "Do not judge by 'है' or 'होगा' alone. 'खा लिया है' is past (आसन्न भूत); 'बनाती होंगी' is present (संदिग्ध वर्तमान). Look at the main verb form.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In 'change the tense' questions, keep the subject and object the same and change only the verb (and add or remove 'ने' if needed). Check the verb's gender: 'लड़की ने गाना गाया' (agrees with गाना), not 'गाई'.",
        },
        {
          type: "keypoints",
          items: [
            "Three tenses: **भूत**, **वर्तमान**, **भविष्यत्**.",
            "The verb changes with gender and number: खेलता / खेलती / खेलते.",
            "'ने' only with सकर्मक verbs in the past; then the verb follows the object.",
            "'पढ़ता होगा' = संदिग्ध वर्तमान; 'आया है' = आसन्न भूत.",
          ],
        },
      ],
      flashcards: [
        { front: "काल", back: "The verb form that shows the time of an action." },
        { front: "आसन्न भूत", back: "An action just completed: 'वह आया है'." },
        { front: "पूर्ण भूत", back: "An action completed long ago: 'वह आया था'." },
        { front: "संदिग्ध वर्तमान", back: "A doubt about something happening now: 'वह पढ़ता होगा'." },
        { front: "हेतुहेतुमद् भूत", back: "One action depends on another in the past: 'यदि वह आता तो मैं जाता'." },
        { front: "When is 'ने' used?", back: "With सकर्मक verbs in the past tense; then the verb agrees with the object." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "'वह आ रहा था' is in:",
          options: ["अपूर्ण वर्तमान", "अपूर्ण भूत", "पूर्ण भूत", "संदिग्ध भूत"],
          answer: 1,
          explain: "'रहा था' shows an action going on in the past: **अपूर्ण भूत**.",
        },
        {
          kind: "mcq",
          q: "Choose the correct sentence.",
          options: ["राम ने घर गया।", "राम घर गया।", "राम ने घर गई।", "राम घर गई।"],
          answer: 1,
          explain: "'जाना' is अकर्मक, so no 'ने'; राम is पुल्लिंग, so 'गया'.",
        },
        {
          kind: "fill",
          q: "Change into सामान्य भूत: 'लड़की गाना गाती है।' → 'लड़की ने गाना ___।'",
          answer: ["गाया"],
          explain: "With 'ने' the verb agrees with 'गाना' (पुल्लिंग), so it is **गाया**, not 'गाई'.",
          difficulty: 3,
          hint: "After 'ने', look at the object's gender.",
        },
        {
          kind: "truefalse",
          q: "'मैंने खाना खा लिया है' is in वर्तमान काल because it has 'है'.",
          answer: false,
          explain: "It shows a completed action (आसन्न भूत). 'है' here does not make it present tense.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Change into भविष्यत् काल: 'बच्चे पार्क में खेलते हैं।'",
          options: ["बच्चे पार्क में खेलेंगे।", "बच्चे पार्क में खेले।", "बच्चे पार्क में खेलेगा।", "बच्चों ने पार्क में खेला।"],
          answer: 0,
          explain: "बच्चे is बहुवचन, so the future form is 'खेलेंगे'.",
        },
        {
          kind: "order",
          q: "Arrange from past to future.",
          items: ["मैं कल बाज़ार गया था।", "मैं अभी बाज़ार जा रहा हूँ।", "मैं कल फिर बाज़ार जाऊँगा।"],
          explain: "गया था (पूर्ण भूत) → जा रहा हूँ (अपूर्ण वर्तमान) → जाऊँगा (सामान्य भविष्यत्).",
        },
        {
          kind: "multi",
          q: "Which sentences need 'ने' in the past tense?",
          options: ["सीता ___ पत्र लिखा।", "मोहन ___ हँसा।", "हम ___ फ़िल्म देखी।", "बच्चे ___ सो गए।"],
          answers: [0, 2],
          explain: "लिखना and देखना are सकर्मक (they have objects: पत्र, फ़िल्म). हँसना and सोना are अकर्मक, so they take no 'ने'.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 10. वाक्य शुद्धि                                                       */
/* ------------------------------------------------------------------ */
const vakyaShuddhi: Topic = {
  slug: "vakya-shuddhi",
  title: "Correcting Sentences (वाक्य शुद्धि)",
  icon: "✏️",
  description: "Find and correct errors of gender, number, case sign, verb agreement, word order, repetition and spelling.",
  lessons: [
    {
      slug: "vakya-shuddhi-galtiyan",
      title: "वाक्य शुद्धि: Finding and Fixing Errors",
      summary: "The seven common kinds of errors in Hindi sentences, a checklist for finding them, and the most-asked spelling corrections.",
      minutes: 15,
      xp: 38,
      blocks: [
        {
          type: "illustration",
          emoji: "🩺",
          caption: "A doctor checks your heart, lungs and pulse one by one. Check a sentence the same way, one part at a time.",
        },
        {
          type: "text",
          md: "**वाक्य शुद्धि** (correcting sentences) means finding the mistake in a sentence and writing it correctly. An **अशुद्ध** (incorrect) sentence becomes **शुद्ध** (correct).\n\nMost errors belong to a few kinds. If you check them one by one, you will find the error quickly.",
        },
        {
          type: "table",
          headers: ["Kind of error", "अशुद्ध (wrong)", "शुद्ध (correct)"],
          rows: [
            ["**लिंग** (gender)", "मेरा माताजी आई है।", "मेरी माताजी आई हैं। (respect needs plural verb)"],
            ["**वचन** (number)", "मुझे पाँच रुपया दो।", "मुझे पाँच रुपए दो।"],
            ["**कारक / परसर्ग** (case sign)", "हमने यह काम करना है।", "हमें यह काम करना है।"],
            ["**क्रिया** ('ने' rule)", "राम ने घर गया।", "राम घर गया।"],
            ["**शब्द-क्रम** (word order)", "उसने मुझे एक फूलों की माला दी।", "उसने मुझे फूलों की एक माला दी।"],
            ["**पुनरुक्ति** (repetition)", "वह प्रातःकाल के समय घूमने जाता है।", "वह प्रातःकाल घूमने जाता है। (प्रातःकाल already means 'morning time')"],
            ["**वर्तनी** (spelling)", "परिक्षा, आर्शीवाद, उज्वल", "परीक्षा, आशीर्वाद, उज्ज्वल"],
          ],
        },
        {
          type: "example",
          title: "Correcting with a checklist",
          problem: "Correct the sentence: 'लड़की ने पत्र लिखी।' (The girl wrote a letter.)",
          steps: [
            "Check the verb type: 'लिखना' is सकर्मक and the sentence is in the past, so 'ने' is correct.",
            "With 'ने', the verb agrees with the object 'पत्र'.",
            "'पत्र' is पुल्लिंग, एकवचन, so the verb must be 'लिखा', not 'लिखी'.",
          ],
          answer: "लड़की ने पत्र लिखा।",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Choose the correct (शुद्ध) sentence.",
              options: ["मैं आपका दर्शन करने आया हूँ।", "मैं आपके दर्शन करने आया हूँ।", "मैं आपकी दर्शन करने आया हूँ।", "मैंने आपके दर्शन करने आया हूँ।"],
              answer: 1,
              explain: "'दर्शन' is always used in the plural: 'आपके दर्शन'. 'आया' is अकर्मक, so no 'ने'.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Find one error and stop. 'मेरा माताजी आई है' → 'मेरी माताजी आई है'.",
          right: "Check every part. The full correction is 'मेरी माताजी आई **हैं**', because elders are shown respect with a plural verb.",
          why: "Once one error is found, the sentence looks fixed. But board sentences sometimes hide a second agreement error, so read the corrected sentence again from start to end.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the sentence शुद्ध (correct) or अशुद्ध (wrong)?",
            groups: ["शुद्ध", "अशुद्ध"],
            items: [
              { text: "राम घर गया।", group: 0, hint: "'जाना' is अकर्मक, so no 'ने'. Correct." },
              { text: "सीता ने गाना गाया।", group: 0, hint: "With 'ने' the verb follows 'गाना' (पुल्लिंग). Correct." },
              { text: "हमें कल स्कूल जाना है।", group: 0, hint: "'हमें … जाना है' is the correct form." },
              { text: "बच्चों ने सो गए।", group: 1, hint: "'सोना' is अकर्मक: 'बच्चे सो गए।'" },
              { text: "मेरे को भूख लगी है।", group: 1, hint: "Correct form: 'मुझे भूख लगी है।'" },
              { text: "यह किताब बहुत अच्छा है।", group: 1, hint: "'किताब' is स्त्रीलिंग: 'अच्छी है'." },
            ],
            explain: "The most common errors are the 'ने' rule, wrong pronoun forms (मेरे को → मुझे, हमने करना है → हमें करना है) and gender agreement.",
          },
        },
        {
          type: "list",
          items: [
            "Common spelling corrections (अशुद्ध → शुद्ध):",
            "परिक्षा → **परीक्षा** (exam)",
            "आर्शीवाद → **आशीर्वाद** (blessing)",
            "उज्वल → **उज्ज्वल** (bright)",
            "कवियत्री → **कवयित्री** (poetess)",
            "अध्यन → **अध्ययन** (study)",
            "प्रिक्षण / परिक्षण → **परीक्षण** (test)",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Write the **full corrected sentence**, not just the corrected word. Do not change the meaning or add new words. Underlining the corrected part is a good habit, but the whole sentence must be correct to get the mark.",
        },
        {
          type: "keypoints",
          items: [
            "Check in order: लिंग, वचन, कारक चिह्न, क्रिया, शब्द-क्रम, पुनरुक्ति, वर्तनी.",
            "Elders take a plural verb out of respect: 'माताजी आई हैं'.",
            "'मुझे' not 'मेरे को'; 'हमें करना है' not 'हमने करना है'.",
            "Write the full corrected sentence without changing its meaning.",
          ],
        },
      ],
      flashcards: [
        { front: "वाक्य शुद्धि", back: "Finding the error in a sentence and writing it correctly." },
        { front: "मेरे को भूख लगी है", back: "Wrong. Correct: मुझे भूख लगी है।" },
        { front: "हमने यह काम करना है", back: "Wrong. Correct: हमें यह काम करना है।" },
        { front: "Correct spelling: परिक्षा / परीक्षा", back: "परीक्षा." },
        { front: "Correct spelling: आर्शीवाद / आशीर्वाद", back: "आशीर्वाद." },
        { front: "पुनरुक्ति दोष", back: "Using two words with the same meaning together, like 'प्रातःकाल के समय'." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Choose the शुद्ध sentence.",
          options: ["मुझे पाँच रुपया दो।", "मुझे पाँच रुपए दो।", "मेरे को पाँच रुपए दो।", "मुझको पाँच रुपया दो।"],
          answer: 1,
          explain: "Five is more than one, so 'रुपए' (plural). 'मेरे को' is wrong; use 'मुझे'.",
        },
        {
          kind: "fill",
          q: "Correct the spelling: 'उज्वल' → ___.",
          answer: ["उज्ज्वल"],
          explain: "उत् + ज्वल = **उज्ज्वल**, with a double 'ज'.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "'हमने कल दिल्ली जाना है' is a correct sentence.",
          answer: false,
          explain: "With 'जाना है' (have to go), the subject takes 'को': 'हमें कल दिल्ली जाना है।'",
        },
        {
          kind: "mcq",
          q: "'उसने मुझे एक फूलों की माला दी।' The error here is of:",
          options: ["लिंग", "वचन", "शब्द-क्रम (word order)", "वर्तनी"],
          answer: 2,
          explain: "'एक' belongs with 'माला', not 'फूलों': 'फूलों की एक माला'. The words are in the wrong order.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Choose the correct spelling.",
          options: ["कवियत्री", "कवयित्री", "कवियित्री", "कवइत्री"],
          answer: 1,
          explain: "The feminine of कवि is **कवयित्री**. 'कवियत्री' is a very common wrong spelling.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which sentences are अशुद्ध?",
          options: ["बच्चों ने सो गए।", "राम घर गया।", "यह किताब अच्छा है।", "सीता ने गाना गाया।"],
          answers: [0, 2],
          explain: "'बच्चों ने सो गए' → 'बच्चे सो गए'; 'किताब अच्छा' → 'किताब अच्छी'. The other two are correct.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 11. पत्र लेखन                                                         */
/* ------------------------------------------------------------------ */
const patraLekhan: Topic = {
  slug: "patra-lekhan",
  title: "Letter Writing (पत्र लेखन)",
  icon: "✉️",
  description: "Formal (औपचारिक) and informal (अनौपचारिक) letters: format, language and model letters.",
  lessons: [
    {
      slug: "aupcharik-anaupcharik-patra",
      title: "औपचारिक और अनौपचारिक पत्र",
      summary: "The parts of formal and informal letters in the exam format, the right greetings and endings, and two model letters.",
      minutes: 18,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "📮",
          caption: "A letter to your grandmother and a letter to your principal do not sound the same. The format changes with the reader.",
        },
        {
          type: "text",
          md: "**औपचारिक पत्र** (formal letter) is written to people we know only through work: a principal, an editor, an officer. It is short, polite and to the point. An application to the principal is called a **प्रार्थना-पत्र** (application).\n\n**अनौपचारिक पत्र** (informal letter) is written to family and friends. It is personal and warm, and can share feelings.",
        },
        {
          type: "table",
          headers: ["Part", "औपचारिक पत्र", "अनौपचारिक पत्र"],
          rows: [
            ["Start", "परीक्षा भवन (or sender's address), दिनांक", "sender's address, दिनांक"],
            ["Receiver", "सेवा में, + post and address (प्रधानाचार्य जी, … विद्यालय, …)", "not written"],
            ["**विषय** (subject)", "must be written, in one line", "not written"],
            ["**संबोधन** (greeting)", "महोदय / महोदया (Sir / Madam)", "पूज्य पिताजी, आदरणीय दादी जी (elders); प्रिय मित्र, प्रिय अनुज (equals, younger)"],
            ["**अभिवादन** (wishes)", "not written", "सादर प्रणाम / सादर चरण-स्पर्श (elders); सप्रेम नमस्ते, शुभाशीष (others)"],
            ["Body", "सविनय निवेदन है कि … ; अतः … ; धन्यवाद सहित", "news, feelings, advice; message for the family"],
            ["Ending", "भवदीय / भवदीया, or आपका आज्ञाकारी शिष्य; name (क.ख.ग.)", "आपका प्रिय पुत्र, तुम्हारा मित्र; name"],
          ],
        },
        {
          type: "example",
          title: "Model formal letter (प्रार्थना-पत्र)",
          problem: "Write a letter to your principal asking for the school library to stay open on Saturdays before the board exams.",
          steps: [
            "परीक्षा भवन,\nबेंगलुरु।\nदिनांक: 15 जुलाई 20XX",
            "सेवा में,\nप्रधानाचार्या जी,\nसरस्वती विद्या मंदिर,\nबेंगलुरु।\n\nविषय: शनिवार को पुस्तकालय खुला रखने हेतु प्रार्थना-पत्र।",
            "महोदया,\nसविनय निवेदन है कि मैं आपके विद्यालय की कक्षा दसवीं 'ब' का छात्र हूँ। हमारी बोर्ड परीक्षाएँ निकट हैं। सप्ताह के दिनों में कक्षाओं के कारण हमें पुस्तकालय में पढ़ने का समय नहीं मिलता और शनिवार को पुस्तकालय बंद रहता है।\nअतः आपसे प्रार्थना है कि परीक्षा तक शनिवार को सुबह 9 बजे से दोपहर 1 बजे तक पुस्तकालय खुला रखने की कृपा करें। इससे सभी छात्रों को लाभ होगा।\nधन्यवाद सहित।",
            "आपका आज्ञाकारी शिष्य,\nक.ख.ग.\nकक्षा दसवीं 'ब'",
          ],
          answer: "Meaning in brief: the student says the board exams are near, there is no time to use the library on weekdays, and requests that it stay open on Saturdays from 9 a.m. to 1 p.m. until the exams.",
        },
        {
          type: "example",
          title: "Model informal letter (अनौपचारिक पत्र)",
          problem: "Write a letter to your friend congratulating him on winning the first prize in a district-level running race.",
          steps: [
            "12, गांधी नगर,\nमैसूरु।\nदिनांक: 20 अगस्त 20XX",
            "प्रिय मित्र अमन,\nसप्रेम नमस्ते।",
            "कल ही तुम्हारा पत्र मिला। यह जानकर बहुत खुशी हुई कि तुमने ज़िला-स्तर की दौड़ प्रतियोगिता में प्रथम पुरस्कार जीता है। मुझे पता है कि तुम रोज़ सुबह पाँच बजे उठकर अभ्यास करते थे। यह उसी मेहनत का फल है। मेरी ओर से ढेर सारी बधाई! आशा है कि तुम राज्य-स्तर पर भी ऐसी ही सफलता पाओगे। चाचा जी और चाची जी को मेरा प्रणाम कहना।",
            "तुम्हारा प्रिय मित्र,\nक.ख.ग.",
          ],
          answer: "Meaning in brief: the writer is happy to hear that Aman won first prize, praises his daily practice, wishes him success at the state level and sends respects to his parents.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which greeting (संबोधन) is right in a letter to the principal?",
              options: ["प्रिय प्रधानाचार्य जी", "पूज्य पिताजी", "महोदय", "सप्रेम नमस्ते"],
              answer: 2,
              explain: "Formal letters use **महोदय / महोदया**. 'प्रिय' is for friends and younger people.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Write 'प्रिय महोदय' and add 'सादर प्रणाम' at the start of a formal letter, to be extra polite.",
          right: "A formal letter starts with only '**महोदय / महोदया**,' and then 'सविनय निवेदन है कि…'. No अभिवादन is written.",
          why: "Students mix the two formats because both are polite letters. But 'प्रिय' and 'सादर प्रणाम' are personal words used for family, so in a formal letter they are counted as a format error.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the parts of a formal letter in order.",
            items: [
              "परीक्षा भवन और दिनांक",
              "सेवा में, (पद और पता)",
              "विषय",
              "महोदय / महोदया",
              "मुख्य भाग (सविनय निवेदन है कि…)",
              "भवदीय / आपका आज्ञाकारी शिष्य, क.ख.ग.",
            ],
            explain: "Address and date → receiver → subject → greeting → body → ending and name. The **विषय** always comes before the greeting.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "How marks are given",
          md: "Marks are given separately for the **format** (start and end), the **content** and the **language**. Never write your real name or address; use 'परीक्षा भवन' and 'क.ख.ग.'. Stay within the word limit given in the question, and keep the subject line short.",
        },
        {
          type: "keypoints",
          items: [
            "**औपचारिक पत्र**: परीक्षा भवन, दिनांक, सेवा में, विषय, महोदय, body, भवदीय, name.",
            "**अनौपचारिक पत्र**: address, date, संबोधन + अभिवादन, body, ending, name; no विषय.",
            "Elders: पूज्य / आदरणीय + सादर प्रणाम. Friends / younger: प्रिय + सप्रेम नमस्ते / शुभाशीष.",
            "Formal body: सविनय निवेदन है कि … अतः … धन्यवाद सहित।",
          ],
        },
      ],
      flashcards: [
        { front: "औपचारिक पत्र", back: "A formal letter to an official, principal, editor, etc." },
        { front: "अनौपचारिक पत्र", back: "An informal letter to family or friends." },
        { front: "भवदीय", back: "'Yours faithfully': the ending of a formal letter (भवदीया for a woman)." },
        { front: "Greeting for a letter to an elder", back: "पूज्य / आदरणीय …, followed by सादर प्रणाम।" },
        { front: "Opening line of a formal letter", back: "सविनय निवेदन है कि … (With respect, I request that …)" },
        { front: "What replaces your name in the exam?", back: "क.ख.ग. (and 'परीक्षा भवन' in place of your address)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which part is written in a formal letter but NOT in an informal letter?",
          options: ["दिनांक", "विषय", "संबोधन", "name of the writer"],
          answer: 1,
          explain: "The **विषय** (subject) line belongs only to formal letters.",
        },
        {
          kind: "truefalse",
          q: "'सादर प्रणाम' is the right अभिवादन in a letter to your grandfather.",
          answer: true,
          explain: "For elders we write 'सादर प्रणाम' or 'सादर चरण-स्पर्श'.",
        },
        {
          kind: "fill",
          q: "A formal letter usually ends with '___' (Yours faithfully), followed by the name.",
          answer: ["भवदीय", "भवदीया", "bhavdiya"],
          explain: "**भवदीय** (भवदीया for a woman) is the standard formal ending.",
        },
        {
          kind: "order",
          q: "Put the parts of an informal letter in order.",
          items: ["Sender's address and date", "संबोधन (प्रिय मित्र)", "अभिवादन (सप्रेम नमस्ते)", "Body of the letter", "तुम्हारा मित्र, क.ख.ग."],
          explain: "Address and date → greeting → wishes → body → ending and name.",
        },
        {
          kind: "mcq",
          q: "Which opening line suits a letter to a newspaper editor?",
          options: [
            "सविनय निवेदन है कि मैं आपके लोकप्रिय समाचार-पत्र के माध्यम से…",
            "आशा है कि तुम सब कुशल से होगे…",
            "कल तुम्हारा पत्र मिला, बहुत खुशी हुई…",
            "माँ को मेरा प्रणाम कहना…",
          ],
          answer: 0,
          explain: "A formal letter begins with 'सविनय निवेदन है कि…'. The other lines belong to informal letters.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are mistakes in a formal letter to the principal?",
          options: ["Writing 'प्रिय महोदय'", "Writing a विषय line", "Writing 'सप्रेम नमस्ते' after the greeting", "Ending with 'आपका आज्ञाकारी शिष्य'"],
          answers: [0, 2],
          explain: "'प्रिय' and 'सप्रेम नमस्ते' are for informal letters. A विषय line and 'आपका आज्ञाकारी शिष्य' are correct.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 12. अनुच्छेद और निबंध लेखन                                              */
/* ------------------------------------------------------------------ */
const anuchhed: Topic = {
  slug: "anuchhed-nibandh",
  title: "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)",
  icon: "📝",
  description: "Plan and write a paragraph or essay in Hindi using the given hint points.",
  lessons: [
    {
      slug: "anuchhed-nibandh-lekhan",
      title: "अनुच्छेद और निबंध कैसे लिखें",
      summary: "The difference between a paragraph and an essay, how to use संकेत-बिंदु, a model paragraph, and useful linking words.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🌳",
          caption: "Roots, trunk, branches: a good essay has a beginning, a middle and an end that hold together.",
        },
        {
          type: "text",
          md: "An **अनुच्छेद** (paragraph) is a short piece on one topic, written as **one single paragraph**. The question usually gives **संकेत-बिंदु** (hint points) that you must cover.\n\nA **निबंध** (essay) is longer and has several paragraphs: **भूमिका** (introduction), **विस्तार** (main body, one paragraph per idea) and **उपसंहार** (conclusion).",
        },
        {
          type: "table",
          headers: ["", "अनुच्छेद", "निबंध"],
          rows: [
            ["Length", "short; as given in the question", "longer; as given in the question"],
            ["Paragraphs", "one", "several (भूमिका, विस्तार, उपसंहार)"],
            ["Title", "write the given title", "write the title; sub-headings may be used"],
            ["Hints", "cover every संकेत-बिंदु in order", "use the points as the main ideas"],
          ],
        },
        {
          type: "example",
          title: "Model अनुच्छेद",
          problem: "Write a paragraph on 'पेड़ लगाओ, जीवन बचाओ' (Plant trees, save life). संकेत-बिंदु: पेड़ों का महत्त्व, पेड़ कटने से हानि, हमारा कर्तव्य.",
          steps: [
            "Plan: one or two sentences for each hint, in the given order, then one closing line.",
            "**पेड़ लगाओ, जीवन बचाओ**\nपेड़ हमारे सच्चे मित्र हैं। वे हमें साँस लेने के लिए ऑक्सीजन, खाने के लिए फल और रहने के लिए छाया देते हैं। पेड़ वर्षा लाने में भी सहायता करते हैं और मिट्टी को बहने से रोकते हैं।",
            "आज सड़कें और इमारतें बनाने के लिए बहुत से पेड़ काटे जा रहे हैं। इससे गर्मी बढ़ रही है, वर्षा कम हो रही है और हवा दूषित हो रही है। पशु-पक्षियों के घर भी उजड़ रहे हैं।",
            "इसलिए हम सबका कर्तव्य है कि हम हर वर्ष कम से कम एक पेड़ लगाएँ और उसकी देखभाल करें। जन्मदिन जैसे अवसरों पर पौधा उपहार में दिया जा सकता है। याद रखिए, पेड़ बचेंगे तो हम बचेंगे।",
          ],
          answer: "Meaning in brief: trees give oxygen, fruit, shade and rain, and hold the soil; cutting them raises heat, lowers rain and pollutes air; so everyone should plant and care for at least one tree a year. (Written as one paragraph in the exam.)",
        },
        {
          type: "list",
          items: [
            "To begin: **आज के युग में…** (in today's age…), **यह सच है कि…** (it is true that…)",
            "To add: **इसके अतिरिक्त** (besides this), **साथ ही** (along with this)",
            "To contrast: **परंतु** (but), **दूसरी ओर** (on the other hand)",
            "To show result: **इसलिए** (therefore), **फलस्वरूप** (as a result)",
            "To conclude: **अंत में हम कह सकते हैं कि…** (finally we can say that…)",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "An अनुच्छेद is written in one single paragraph.",
              answer: true,
              explain: "That is the main difference from a निबंध, which has several paragraphs.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Write everything you know about the topic; the संकेत-बिंदु are only suggestions.",
          right: "Cover **every** संकेत-बिंदु, in the given order, and stay within the word limit.",
          why: "Writing more seems to show more knowledge. But marks are given for covering the hints, for linked ideas and for language. Going off the hints or far over the limit loses marks.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the steps of writing a निबंध in order.",
            items: [
              "Read the title and the संकेत-बिंदु",
              "Make a short plan (रूपरेखा)",
              "Write the भूमिका (introduction)",
              "Write the विस्तार (main body)",
              "Write the उपसंहार (conclusion)",
              "Read again and correct spelling and मात्राएँ",
            ],
            explain: "Planning first saves time and keeps ideas in order. The last check catches spelling and agreement errors.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Use simple, correct sentences. Ten correct sentences score better than twenty sentences full of mistakes. Begin with an interesting line and end with a message or hope. Avoid writing the same idea twice.",
        },
        {
          type: "keypoints",
          items: [
            "**अनुच्छेद**: one paragraph, all संकेत-बिंदु covered, within the word limit.",
            "**निबंध**: भूमिका, विस्तार, उपसंहार.",
            "Plan first (रूपरेखा); use linking words like इसके अतिरिक्त, परंतु, इसलिए.",
            "End with a short message or conclusion.",
          ],
        },
      ],
      flashcards: [
        { front: "अनुच्छेद", back: "A short piece on one topic written as a single paragraph." },
        { front: "संकेत-बिंदु", back: "Hint points given in the question that must be covered." },
        { front: "भूमिका", back: "The introduction of an essay." },
        { front: "उपसंहार", back: "The conclusion of an essay." },
        { front: "रूपरेखा", back: "A short plan or outline made before writing." },
        { front: "Linking word for result", back: "इसलिए / फलस्वरूप (therefore / as a result)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The last part of a निबंध is called:",
          options: ["भूमिका", "विस्तार", "उपसंहार", "शीर्षक"],
          answer: 2,
          explain: "**उपसंहार** is the conclusion. भूमिका is the introduction.",
        },
        {
          kind: "fill",
          q: "The hint points given with an अनुच्छेद are called ___.",
          answer: ["संकेत-बिंदु", "संकेत बिंदु", "sanket bindu"],
          explain: "**संकेत-बिंदु** guide what to write, and each one must be covered.",
        },
        {
          kind: "truefalse",
          q: "In an अनुच्छेद you may skip a संकेत-बिंदु if you do not like it.",
          answer: false,
          explain: "Every hint must be covered; missing one loses content marks.",
        },
        {
          kind: "mcq",
          q: "Which linking word shows contrast?",
          options: ["इसलिए", "परंतु", "इसके अतिरिक्त", "फलस्वरूप"],
          answer: 1,
          explain: "**परंतु** (but) shows contrast. इसलिए and फलस्वरूप show result; इसके अतिरिक्त adds a point.",
        },
        {
          kind: "order",
          q: "Arrange the parts of a निबंध.",
          items: ["शीर्षक (title)", "भूमिका", "विस्तार", "उपसंहार"],
          explain: "Title → introduction → body → conclusion.",
        },
        {
          kind: "multi",
          q: "Which habits help you score well in अनुच्छेद लेखन?",
          options: ["Covering every संकेत-बिंदु", "Writing far beyond the word limit", "Using simple, correct sentences", "Repeating the same idea to fill space"],
          answers: [0, 2],
          explain: "Cover the hints and write correctly. Going far over the limit and repeating ideas lose marks.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 13. सूचना, विज्ञापन, संदेश और ई-मेल                                      */
/* ------------------------------------------------------------------ */
const soochna: Topic = {
  slug: "soochna-vigyapan-sandesh-email",
  title: "Notice, Advertisement, Message and E-mail Writing",
  icon: "📢",
  description: "Short writing tasks: सूचना, विज्ञापन, संदेश and ई-मेल with formats and models.",
  lessons: [
    {
      slug: "soochna-vigyapan-sandesh-email-lekhan",
      title: "सूचना, विज्ञापन, संदेश और ई-मेल",
      summary: "The format and features of a notice, an advertisement, a message and an e-mail, with a model of each.",
      minutes: 17,
      xp: 42,
      blocks: [
        {
          type: "illustration",
          emoji: "📌",
          caption: "A notice on the school board, a poster for a shop, a birthday wish, an e-mail: four short pieces, four formats.",
        },
        {
          type: "text",
          md: "These are short, practical writing tasks. Each has its own format.\n\n• **सूचना** (notice): gives information to a group of people (what, when, where, who).\n• **विज्ञापन** (advertisement): makes people want a product or service.\n• **संदेश** (message): a short wish or piece of news for a person on an occasion.\n• **ई-मेल** (e-mail): a letter sent through the internet.",
        },
        {
          type: "table",
          headers: ["Task", "Must have"],
          rows: [
            ["**सूचना**", "a box; name of the institution; the word 'सूचना'; दिनांक; a heading; body (क्या, कब, कहाँ, किसके लिए); name and post of the person giving it"],
            ["**विज्ञापन**", "a box; a catchy नारा (slogan); product or service name; features; offer / discount; address or phone number"],
            ["**संदेश**", "a box; the word 'संदेश'; दिनांक and समय; संबोधन; short message; sender's name"],
            ["**ई-मेल**", "प्रति (To) address; विषय (subject); संबोधन; body; समापन and name"],
          ],
        },
        {
          type: "example",
          title: "Model सूचना",
          problem: "As the cultural secretary of your school, write a notice about the Independence Day celebration.",
          steps: [
            "सरस्वती विद्या मंदिर, मैसूरु\nसूचना\nदिनांक: 5 अगस्त 20XX",
            "**स्वतंत्रता दिवस समारोह**\nसभी छात्रों को सूचित किया जाता है कि 15 अगस्त को सुबह 8 बजे विद्यालय के मैदान में स्वतंत्रता दिवस समारोह मनाया जाएगा। सभी छात्र स्कूल की पोशाक में समय पर पहुँचें।",
            "क.ख.ग.\nसांस्कृतिक सचिव",
          ],
          answer: "Meaning in brief: all students are told that the Independence Day function will be held in the school ground at 8 a.m. on 15 August, and they must come on time in uniform.",
        },
        {
          type: "example",
          title: "Model विज्ञापन and ई-मेल",
          problem: "(a) Write a short advertisement for a cycle shop. (b) Write an e-mail to your class teacher asking for leave for two days.",
          steps: [
            "(a) **'चलाओ साइकिल, रहो फ़िट!'**\nमहावीर साइकिल स्टोर, हुबली — मज़बूत, हल्की और सुंदर साइकिलें। स्कूली छात्रों को 10% छूट! संपर्क: 98XXXXXXXX (Ride a cycle, stay fit! Strong, light cycles; 10% off for students.)",
            "(b) प्रति: classteacher@xyzschool.in\nविषय: दो दिन के अवकाश हेतु",
            "आदरणीय महोदया,\nमुझे कल रात से तेज़ बुखार है। डॉक्टर ने दो दिन आराम करने की सलाह दी है। मुझे 10 और 11 सितंबर का अवकाश देने की कृपा करें।\nधन्यवाद।\nआपका आज्ञाकारी शिष्य,\nक.ख.ग., कक्षा दसवीं 'अ' (I have high fever; the doctor advised two days' rest; please grant leave for 10 and 11 September.)",
          ],
          answer: "The advertisement catches attention with a slogan and gives an offer and a contact. The e-mail has a प्रति line, a विषय, a polite greeting, a short body and an ending.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which part is a must in a विज्ञापन but not in a सूचना?",
              options: ["दिनांक", "A catchy slogan (नारा)", "Name of the institution", "Heading"],
              answer: 1,
              explain: "A **नारा** (slogan) is meant to attract buyers, which is the job of an advertisement.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "A सूचना is a short letter, so start with 'सेवा में' and end with 'भवदीय'.",
          right: "A सूचना has no greeting or ending. It has the institution name, 'सूचना', date, heading, body, and the issuer's name and post.",
          why: "Both a letter and a notice give information, so students mix the formats. But a notice speaks to a whole group at once, not to one person, so letter phrases are wrong here.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which writing task does each feature belong to?",
            groups: ["सूचना", "विज्ञापन", "ई-मेल"],
            items: [
              { text: "'सूचना' शब्द और संस्था का नाम सबसे ऊपर", group: 0, hint: "A notice begins with the institution and the word सूचना." },
              { text: "नीचे जारी करने वाले का नाम और पद", group: 0, hint: "The person who gives a notice signs with name and post." },
              { text: "आकर्षक नारा (catchy slogan)", group: 1, hint: "A slogan is used to attract buyers." },
              { text: "छूट या ऑफ़र की जानकारी", group: 1, hint: "Discounts make people want to buy." },
              { text: "प्रति (To) में पता", group: 2, hint: "Only an e-mail needs the receiver's e-mail address." },
              { text: "CC / BCC", group: 2, hint: "Copies to other people are sent only in an e-mail." },
            ],
            explain: "Each task has its own must-have parts. Learn them as a checklist, because format marks are given for them.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Draw a **box** around a सूचना, विज्ञापन and संदेश. Keep within the word limit given in the question. In a सूचना, always answer **what, when, where and for whom**; missing the date or time is the most common error.",
        },
        {
          type: "keypoints",
          items: [
            "**सूचना**: institution, 'सूचना', date, heading, body, name and post.",
            "**विज्ञापन**: slogan, product, features, offer, contact.",
            "**संदेश**: 'संदेश', date and time, greeting, short message, name.",
            "**ई-मेल**: प्रति, विषय, greeting, body, ending.",
          ],
        },
      ],
      flashcards: [
        { front: "सूचना", back: "A notice that gives information to a group: what, when, where and for whom." },
        { front: "विज्ञापन", back: "An advertisement that attracts people to a product or service." },
        { front: "नारा", back: "A short, catchy slogan used in an advertisement." },
        { front: "संदेश", back: "A short message or wish for a person on an occasion." },
        { front: "Parts of an ई-मेल", back: "प्रति (To), विषय (subject), greeting, body, ending and name." },
        { front: "Who signs a school notice?", back: "The person giving it, with name and post (e.g. क.ख.ग., सांस्कृतिक सचिव)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is NOT part of a सूचना?",
          options: ["संस्था का नाम", "दिनांक", "सेवा में", "जारी करने वाले का पद"],
          answer: 2,
          explain: "'सेवा में' belongs to a formal letter, not to a notice.",
        },
        {
          kind: "truefalse",
          q: "A सूचना, a विज्ञापन and a संदेश are usually written inside a box.",
          answer: true,
          explain: "The box is part of the expected exam format for these tasks.",
        },
        {
          kind: "fill",
          q: "In an e-mail, the subject is written after the word ___.",
          answer: ["विषय", "vishay", "subject"],
          explain: "The **विषय** line tells the reader what the e-mail is about.",
        },
        {
          kind: "multi",
          q: "Which questions must a good सूचना answer?",
          options: ["क्या (what)", "कब (when)", "कहाँ (where)", "कितने का (at what price)"],
          answers: [0, 1, 2],
          explain: "A notice gives what, when, where and for whom. Price belongs to an advertisement.",
        },
        {
          kind: "mcq",
          q: "Which line suits a संदेश on a friend's birthday?",
          options: [
            "जन्मदिन की हार्दिक शुभकामनाएँ! तुम सदा खुश रहो।",
            "सभी छात्रों को सूचित किया जाता है कि…",
            "स्टॉक सीमित है, आज ही खरीदें!",
            "सविनय निवेदन है कि…",
          ],
          answer: 0,
          explain: "A संदेश is a short, warm wish. The other lines belong to a notice, an advertisement and a letter.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put the parts of an e-mail in order.",
          items: ["प्रति (To)", "विषय", "संबोधन", "मुख्य भाग", "समापन और नाम"],
          explain: "Address → subject → greeting → body → ending.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 14. अपठित गद्यांश                                                      */
/* ------------------------------------------------------------------ */
const apathit: Topic = {
  slug: "apathit-gadyansh",
  title: "Unseen Passage (अपठित गद्यांश)",
  icon: "📖",
  description: "Read an unseen Hindi passage and answer questions, find the main idea and give a title.",
  lessons: [
    {
      slug: "apathit-gadyansh-hal",
      title: "अपठित गद्यांश कैसे हल करें",
      summary: "A step-by-step method to read an unseen passage, answer in your own words, choose a title and answer grammar questions from it.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🕵️",
          caption: "Be a detective: every answer is hidden in the passage. Your job is to find it, not to invent it.",
        },
        {
          type: "text",
          md: "An **अपठित गद्यांश** (unseen prose passage) is a passage you have not read before. You read it and answer questions about it. The questions test whether you understood the **मूल भाव** (main idea), the facts, and the meaning of words.\n\nQuestions may be short-answer or multiple-choice, and often include one asking for a **शीर्षक** (title).",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Read the questions first, so you know what to look for.",
            "Read the passage carefully, twice if needed. Underline key lines.",
            "Find the line that answers each question.",
            "Write the answer in **your own simple words**, in full sentences.",
            "For the title, choose a short phrase that covers the **whole** passage.",
          ],
        },
        {
          type: "example",
          title: "Solving a passage",
          problem: "Read the passage and answer:\n\nपानी हमारे जीवन का आधार है। पृथ्वी पर पानी तो बहुत है, पर पीने लायक मीठा पानी बहुत कम है। फिर भी लोग रोज़ बहुत-सा पानी व्यर्थ बहा देते हैं। नल खुला छोड़ देना और गाड़ी धोने में पाइप का प्रयोग करना ऐसी ही आदतें हैं। छत पर गिरने वाले वर्षा के पानी को टंकी या ज़मीन में पहुँचाना 'वर्षा-जल संचयन' कहलाता है। इससे भूमिगत जल का स्तर बढ़ता है। पानी बचाना केवल सरकार का नहीं, हम सबका कर्तव्य है।\n\n(1) What is 'वर्षा-जल संचयन'? (2) Give a suitable title. (3) Give the विलोम of 'व्यर्थ'.",
          steps: [
            "Gist: water is precious, drinkable water is scarce, we waste it, rainwater harvesting helps, and saving water is everyone's duty.",
            "(1) Find the line with the term: 'छत पर गिरने वाले वर्षा के पानी को टंकी या ज़मीन में पहुँचाना'. Answer in your own words: वर्षा के पानी को इकट्ठा करके टंकी या ज़मीन में पहुँचाना वर्षा-जल संचयन है।",
            "(2) The whole passage is about saving water, so the title: 'जल संरक्षण' or 'पानी बचाओ'. 'वर्षा-जल संचयन' is too narrow; it is only one part.",
            "(3) व्यर्थ (useless, wasted) × **सार्थक** (useful).",
          ],
          answer: "(1) Collecting rainwater from roofs and sending it into a tank or the ground. (2) जल संरक्षण. (3) सार्थक.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "From the passage above: what happens because of वर्षा-जल संचयन?",
              options: ["बाढ़ आती है", "भूमिगत जल का स्तर बढ़ता है", "नल खुले रहते हैं", "मीठा पानी खारा हो जाता है"],
              answer: 1,
              explain: "The passage says: 'इससे भूमिगत जल का स्तर बढ़ता है' (the groundwater level rises).",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Answer from what you already know about the topic, or copy a whole paragraph from the passage.",
          right: "Answer **only from the passage**, in your own short sentences, using just the lines that answer the question.",
          why: "Your own knowledge may be true but not what the passage says, so it gets no marks. Copying long lines shows the examiner that you did not pick out the exact answer.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which is the best title for the passage above?",
            emoji: "🏷️",
            options: ["वर्षा-जल संचयन", "जल संरक्षण", "गाड़ी धोना", "सरकार के कार्य"],
            answer: 1,
            trap: 0,
            explain: "'वर्षा-जल संचयन' appears in the passage, so it feels right, but it is only one part. The title must cover the whole passage: saving water, **जल संरक्षण**.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Read every MCQ option before choosing; two options may look right, but only one matches the passage exactly. Watch for words like 'केवल' (only), 'नहीं' (not) and 'सबसे' (most), which change the meaning. Keep the title short, two to four words.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "In the passage above, the word ___ means 'useless, wasted' (its विलोम is सार्थक).",
              answer: ["व्यर्थ", "vyarth"],
              explain: "'लोग रोज़ बहुत-सा पानी **व्यर्थ** बहा देते हैं' — व्यर्थ means wasted.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Read the questions first, then the passage.",
            "Answer only from the passage, in your own words.",
            "The **शीर्षक** must cover the whole passage, not one part.",
            "Grammar questions (विलोम, पर्यायवाची, समास) use words from the passage.",
          ],
        },
      ],
      flashcards: [
        { front: "अपठित गद्यांश", back: "An unseen prose passage that you read and answer questions on." },
        { front: "मूल भाव", back: "The main idea of a passage." },
        { front: "शीर्षक", back: "The title; it should be short and cover the whole passage." },
        { front: "First step in an unseen passage", back: "Read the questions first, then the passage." },
        { front: "विलोम of व्यर्थ", back: "सार्थक." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A good शीर्षक for a passage should be:",
          options: ["the first line of the passage", "short and cover the whole passage", "a long sentence", "about one small detail"],
          answer: 1,
          explain: "A title is short and covers the **whole** main idea.",
        },
        {
          kind: "truefalse",
          q: "In an unseen passage, you should answer from your own knowledge if it is more correct.",
          answer: false,
          explain: "Answers must come from the passage. Outside facts get no marks.",
        },
        {
          kind: "mcq",
          q: "Passage line: 'पानी बचाना केवल सरकार का नहीं, हम सबका कर्तव्य है।' Whose duty is it to save water?",
          options: ["केवल सरकार का", "हम सबका", "केवल किसानों का", "किसी का नहीं"],
          answer: 1,
          explain: "'केवल सरकार का नहीं' means 'not only the government's'. It is **everyone's** duty. The trap is reading only 'केवल सरकार का'.",
          difficulty: 2,
          hint: "Read the word 'नहीं' carefully.",
        },
        {
          kind: "fill",
          q: "The main idea of a passage is called its मूल ___.",
          answer: ["भाव", "bhav"],
          explain: "**मूल भाव** = main idea.",
        },
        {
          kind: "order",
          q: "Put the steps for solving an unseen passage in order.",
          items: ["Read the questions", "Read the passage carefully", "Find the lines with the answers", "Write answers in your own words"],
          explain: "Knowing the questions first makes reading faster and focused.",
        },
        {
          kind: "multi",
          q: "From the passage in this lesson, which are wasteful habits?",
          options: ["नल खुला छोड़ देना", "गाड़ी धोने में पाइप का प्रयोग", "वर्षा-जल संचयन", "पानी बचाना"],
          answers: [0, 1],
          explain: "The passage names leaving the tap open and using a pipe to wash cars. The other two are good practices.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [
  padParichay,
  vakyaBhed,
  vachya,
  samas,
  sandhi,
  muhavare,
  shabdBhandar,
  lingVachanKarak,
  kaal,
  vakyaShuddhi,
  patraLekhan,
  anuchhed,
  soochna,
  apathit,
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "Pad Parichay (पद परिचय)": "pad-parichay",
  "Sentence Types (रचना के आधार पर वाक्य भेद)": "vakya-bhed-rachna",
  "Voice (वाच्य)": "vachya",
  "Compound Words (समास)": "samas",
  "Sandhi (संधि)": "sandhi",
  "Idioms and Proverbs (मुहावरे और लोकोक्तियाँ)": "muhavare-lokoktiyan",
  "Vocabulary: Synonyms, Antonyms and One-word Substitutes": "shabd-bhandar",
  "Gender, Number and Case (लिंग, वचन, कारक)": "ling-vachan-karak",
  "Tenses (काल)": "kaal",
  "Correcting Sentences (वाक्य शुद्धि)": "vakya-shuddhi",
  "Letter Writing (पत्र लेखन)": "patra-lekhan",
  "Paragraph and Essay Writing (अनुच्छेद और निबंध लेखन)": "anuchhed-nibandh",
  "Notice, Advertisement, Message and E-mail Writing": "soochna-vigyapan-sandesh-email",
  "Unseen Passage (अपठित गद्यांश)": "apathit-gadyansh",
};
