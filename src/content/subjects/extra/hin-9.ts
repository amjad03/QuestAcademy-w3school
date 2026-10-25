import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "hindi";
/** Syllabus family: chapter titles below are matched against `hin` rows in src/content/syllabus/. */
export const family = "hin";

/* ------------------------------------------------------------------ */
/* 1. उपसर्ग और प्रत्यय                                                  */
/* ------------------------------------------------------------------ */
const upsargPratyay: Topic = {
  slug: "c9-upsarg-pratyay",
  title: "Prefixes and Suffixes (उपसर्ग और प्रत्यय)",
  icon: "🧩",
  description: "How word-parts added before (उपसर्ग) or after (प्रत्यय) a word make new Hindi words with new meanings.",
  lessons: [
    {
      slug: "upsarg-shabd-ke-aage",
      title: "उपसर्ग: Word-parts at the Front",
      summary: "What an उपसर्ग is, the common संस्कृत, हिंदी and उर्दू-फ़ारसी उपसर्ग, and how to split a word into उपसर्ग + मूल शब्द.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🧩",
          caption: "हार (defeat) → प्रहार (attack), आहार (food), विहार (a stroll), उपहार (gift). One small piece at the front, and the meaning changes completely.",
        },
        {
          type: "text",
          md: "An **उपसर्ग** (prefix) is a **शब्दांश** (word-part) that is joined to the **front** of a word to make a new word. The word it joins is called the **मूल शब्द** (root word).\n\nAn उपसर्ग usually cannot stand alone in a sentence; it has meaning only when joined to a word. It may change the meaning, make it stronger, or make it opposite. For example, 'मान (respect)' becomes 'अपमान (insult)' with 'अप', and 'सम्मान (honour)' with 'सम्'.",
        },
        {
          type: "table",
          headers: ["संस्कृत (तत्सम) उपसर्ग", "Meaning", "Examples"],
          rows: [
            ["**अति**", "excess, beyond", "अतिरिक्त (extra), अतिवृष्टि (too much rain)"],
            ["**अधि**", "over, chief", "अधिकार (right), अधिपति (ruler)"],
            ["**अनु**", "after, following", "अनुज (younger brother), अनुशासन (discipline)"],
            ["**अप**", "bad, opposite", "अपमान (insult), अपयश (bad name)"],
            ["**अभि**", "towards, near", "अभिमान (pride), अभियान (campaign)"],
            ["**अव**", "down, bad", "अवगुण (fault), अवनति (decline)"],
            ["**आ**", "up to, till", "आजीवन (lifelong), आगमन (arrival)"],
            ["**उप**", "near, minor", "उपकार (favour), उपनगर (suburb)"],
            ["**दुर्**", "bad, difficult", "दुर्गुण (vice), दुर्घटना (accident)"],
            ["**निर्**", "without", "निर्धन (poor), निर्भय (fearless)"],
            ["**परि**", "around, complete", "परिक्रमा (going round), परिश्रम (hard work)"],
            ["**प्र**", "forward, more", "प्रगति (progress), प्रबल (strong)"],
            ["**प्रति**", "each, against", "प्रतिदिन (every day), प्रतिकूल (unfavourable)"],
            ["**वि**", "special, apart", "विदेश (foreign land), वियोग (separation)"],
            ["**सम्**", "well, together", "सम्मान (honour), संगम (meeting point)"],
            ["**सु**", "good, easy", "सुपुत्र (good son), सुगंध (fragrance)"],
          ],
        },
        {
          type: "table",
          headers: ["Kind", "उपसर्ग (meaning)", "Examples"],
          rows: [
            ["**हिंदी उपसर्ग**", "अन (not), अध (half), उन (one less), भर (full), नि (without), क (bad), स (good)", "अनपढ़, अनजान, अधपका, उनतीस, भरपेट, निडर, कपूत, सपूत"],
            ["**उर्दू-फ़ारसी (आगत) उपसर्ग**", "बे (without), ना (not), बद (bad), ला (without), ग़ैर (not), कम (less), हम (same)", "बेईमान, बेघर, नासमझ, बदनाम, लापरवाह, ग़ैरहाज़िर, कमज़ोर, हमउम्र"],
          ],
        },
        {
          type: "example",
          title: "Splitting words into उपसर्ग + मूल शब्द",
          problem: "Separate the उपसर्ग and मूल शब्द: अपमान, निर्धन, प्रतिदिन, अनपढ़, बेईमान.",
          steps: [
            "Find a known उपसर्ग at the very front of each word.",
            "What is left must be a real word with its own meaning: मान, धन, दिन, पढ़, ईमान.",
            "Write the answer in the form उपसर्ग + मूल शब्द.",
          ],
          answer: "अप + मान, निर् + धन, प्रति + दिन, अन + पढ़, बे + ईमान.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which उपसर्ग is in 'अवगुण (fault)'?",
              options: ["अ", "अव", "अवगु", "गुण"],
              answer: 1,
              explain: "अव + गुण = अवगुण. 'गुण' is the मूल शब्द; 'अव' is the उपसर्ग meaning 'bad'.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "In 'अत्यधिक' the उपसर्ग is 'अत्य', and in 'स्वागत' it is 'स्व'.",
          right: "अत्यधिक = **अति** + अधिक; स्वागत = **सु** + आगत. The उपसर्ग changed its shape because of **संधि**.",
          why: "We cut the word where it looks easy to cut. But when an उपसर्ग ending in a vowel meets a word starting with a vowel, संधि changes the letters (इ + अ → य, उ + आ → वा). 'अत्य' and 'स्व' (in this sense) are not उपसर्ग at all, so always write the original उपसर्ग.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort the words by the kind of उपसर्ग.",
            groups: ["संस्कृत (तत्सम)", "हिंदी", "उर्दू-फ़ारसी"],
            items: [
              { text: "परिश्रम (hard work)", group: 0, hint: "परि is one of the संस्कृत उपसर्ग." },
              { text: "अनपढ़ (illiterate)", group: 1, hint: "अन + पढ़: a हिंदी उपसर्ग on a हिंदी word." },
              { text: "बेघर (homeless)", group: 2, hint: "बे means 'without' and comes from फ़ारसी." },
              { text: "दुर्घटना (accident)", group: 0, hint: "दुर् is a संस्कृत उपसर्ग." },
              { text: "भरपेट (a full stomach)", group: 1, hint: "भर means 'full' in हिंदी." },
              { text: "नासमझ (foolish)", group: 2, hint: "ना means 'not' and comes from फ़ारसी." },
            ],
            explain: "तत्सम words take **संस्कृत उपसर्ग** (प्र, परि, दुर्, वि…); everyday हिंदी words take **हिंदी उपसर्ग** (अन, भर, अध…); words from Urdu-Persian take **आगत उपसर्ग** (बे, ना, बद, ग़ैर…).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "CBSE, ICSE and Karnataka papers ask you to **separate** the उपसर्ग from the word, or to **make** a new word with a given उपसर्ग. Write the answer as 'उपसर्ग + मूल शब्द', e.g. 'प्र + गति'. If only the उपसर्ग is asked, do not also split off a प्रत्यय.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "निर् + भय = ___",
              answer: ["निर्भय"],
              explain: "'निर्' means 'without', so निर्भय means 'fearless'.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "**उपसर्ग** = a word-part joined to the **front** of a मूल शब्द.",
            "It can change, strengthen or reverse the meaning: मान → अपमान, सम्मान.",
            "Three groups: संस्कृत (प्र, वि, सु…), हिंदी (अन, अध, भर…), उर्दू-फ़ारसी (बे, ना, बद…).",
            "Because of संधि, the उपसर्ग may change shape: अति + अधिक = अत्यधिक.",
          ],
        },
      ],
      flashcards: [
        { front: "उपसर्ग", back: "A word-part joined to the front of a word to make a new word (prefix)." },
        { front: "मूल शब्द", back: "The root word to which an उपसर्ग or प्रत्यय is joined." },
        { front: "हार + four उपसर्ग", back: "प्रहार (attack), आहार (food), विहार (stroll), उपहार (gift)." },
        { front: "निर्", back: "Means 'without': निर्धन, निर्भय, निर्दोष." },
        { front: "बे", back: "उर्दू-फ़ारसी उपसर्ग meaning 'without': बेघर, बेईमान, बेचैन." },
        { front: "स्वागत", back: "सु + आगत (the उपसर्ग is सु; संधि changes it to स्व)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which word has the उपसर्ग 'प्रति'?",
          options: ["प्रगति", "प्रतिदिन", "परिवार", "अपमान"],
          answer: 1,
          explain: "प्रति + दिन = प्रतिदिन. प्रगति has 'प्र', परिवार has 'परि' and अपमान has 'अप'.",
        },
        {
          kind: "fill",
          q: "सम् + मान = ___",
          answer: ["सम्मान"],
          explain: "सम् + मान = **सम्मान** (honour).",
        },
        {
          kind: "truefalse",
          q: "'बदनाम' has a हिंदी उपसर्ग.",
          answer: false,
          explain: "'बद' (bad) is an **उर्दू-फ़ारसी** उपसर्ग.",
        },
        {
          kind: "multi",
          q: "Which words have the उपसर्ग 'अन' (हिंदी)?",
          options: ["अनपढ़", "अनजान", "अनुज", "अनबन"],
          answers: [0, 1, 3],
          explain: "अन + पढ़, अन + जान, अन + बन. 'अनुज' has the संस्कृत उपसर्ग **अनु** (अनु + ज).",
          difficulty: 2,
          hint: "Check whether the उपसर्ग is अन or अनु.",
        },
        {
          kind: "mcq",
          q: "What is the उपसर्ग in 'अत्यधिक'?",
          options: ["अत्य", "अति", "अधि", "अत्"],
          answer: 1,
          explain: "अति + अधिक = अत्यधिक. संधि changes इ + अ into 'य'.",
          difficulty: 3,
          hint: "Think of संधि: which उपसर्ग ends in 'इ'?",
        },
        {
          kind: "mcq",
          q: "'उनतीस (twenty-nine)' is made with the उपसर्ग 'उन'. What does 'उन' mean?",
          options: ["one more", "one less", "half", "full"],
          answer: 1,
          explain: "'उन' means 'one less': उनतीस = one less than तीस (thirty).",
        },
        {
          kind: "mcq",
          q: "Which pair is correctly split?",
          options: ["दुर्गुण = दु + र्गुण", "निर्धन = नि + र्धन", "सुपुत्र = सु + पुत्र", "उपकार = उपक + आर"],
          answer: 2,
          explain: "सु + पुत्र = सुपुत्र. The others should be दुर् + गुण, निर् + धन and उप + कार.",
        },
      ],
    },
    {
      slug: "pratyay-shabd-ke-peeche",
      title: "प्रत्यय: Word-parts at the End",
      summary: "What a प्रत्यय is, the difference between कृत् and तद्धित प्रत्यय, how the root changes, and words with both उपसर्ग and प्रत्यय.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🍬",
          caption: "मीठा (sweet) + आस = मिठास (sweetness). बच्चा (child) + पन = बचपन (childhood). The new piece comes at the end.",
        },
        {
          type: "text",
          md: "A **प्रत्यय** (suffix) is a word-part joined to the **end** of a word or a verb root to make a new word. Like an उपसर्ग, it has no use on its own.\n\nThere are two kinds:\n\n- **कृत् प्रत्यय** are joined to a **धातु** (verb root), such as पढ़, लिख, सज, तैर. The words made are called **कृदंत**.\n- **तद्धित प्रत्यय** are joined to a **संज्ञा, सर्वनाम या विशेषण** (noun, pronoun or adjective). The words made are called **तद्धितांत**.",
        },
        {
          type: "table",
          headers: ["कृत् प्रत्यय", "Joined to the verb root", "New word"],
          rows: [
            ["**आई**", "पढ़ (read), लड़ (fight)", "पढ़ाई (studies), लड़ाई (fight)"],
            ["**आवट**", "लिख (write), सज (decorate)", "लिखावट (handwriting), सजावट (decoration)"],
            ["**आहट**", "घबरा (panic)", "घबराहट (nervousness)"],
            ["**आक**", "तैर (swim)", "तैराक (swimmer)"],
            ["**आऊ**", "टिक (last), बिक (sell)", "टिकाऊ (durable), बिकाऊ (for sale)"],
            ["**ऊ**", "झाड़ (sweep)", "झाड़ू (broom)"],
            ["**न**", "बेल (roll)", "बेलन (rolling pin)"],
          ],
        },
        {
          type: "table",
          headers: ["तद्धित प्रत्यय", "Joined to", "New word"],
          rows: [
            ["**ता**", "मानव, सुंदर, मित्र", "मानवता, सुंदरता, मित्रता"],
            ["**पन**", "बच्चा, अपना", "बचपन, अपनापन"],
            ["**आस**", "मीठा, खट्टा", "मिठास, खटास"],
            ["**वान / मान**", "धन, गुण / बुद्धि, शक्ति", "धनवान, गुणवान / बुद्धिमान, शक्तिमान"],
            ["**इक**", "समाज, धर्म, इतिहास, दिन", "सामाजिक, धार्मिक, ऐतिहासिक, दैनिक"],
            ["**ईय**", "भारत, राष्ट्र", "भारतीय, राष्ट्रीय"],
            ["**दार / वाला**", "दुकान, ईमान / दूध", "दुकानदार, ईमानदार / दूधवाला"],
            ["**ईला / ईन / लु**", "रंग, चमक / नमक / दया", "रंगीला, चमकीला / नमकीन / दयालु"],
          ],
        },
        {
          type: "text",
          md: "Notice that the **मूल शब्द** often changes a little when a प्रत्यय joins it. With **इक**, the first vowel of the word grows: समाज → सामाजिक (स → सा), इतिहास → ऐतिहासिक (इ → ऐ), दिन → दैनिक (दि → दै). With **आस** and **पन**, a long vowel may become short: मीठा → मिठास, बच्चा → बचपन.\n\nSome words have **both**: an उपसर्ग in front and a प्रत्यय at the end. बे + ईमान + ई = बेईमानी; प्र + गति + शील = प्रगतिशील; सु + गंध + इत = सुगंधित.",
        },
        {
          type: "example",
          title: "Finding the मूल शब्द and the प्रत्यय",
          problem: "Separate the मूल शब्द and प्रत्यय: मिठास, सामाजिक, लिखावट, दयालु.",
          steps: [
            "Find a known प्रत्यय at the end: आस, इक, आवट, लु.",
            "Write the मूल शब्द in its **original dictionary form**, not the changed form inside the new word: मिठ- → मीठा, सामाज- → समाज.",
            "Decide the kind: लिख is a verb root, so 'आवट' is कृत्; the others join nouns or adjectives, so they are तद्धित.",
          ],
          answer: "मीठा + आस, समाज + इक, लिख + आवट (कृत्), दया + लु.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In 'तैराक (swimmer)', what is the प्रत्यय and its kind?",
              options: ["आक, कृत्", "आक, तद्धित", "राक, कृत्", "क, तद्धित"],
              answer: 0,
              explain: "तैर (swim) is a verb root, and तैर + आक = तैराक. A प्रत्यय joined to a verb root is **कृत्**.",
              difficulty: 2,
            },
          ],
        },
        {
          type: "mistake",
          wrong: "मिठास = मिठ + आस, and सामाजिक = सामाज + इक.",
          right: "मिठास = **मीठा** + आस; सामाजिक = **समाज** + इक.",
          why: "We copy the part we can see inside the new word. But 'मिठ' and 'सामाज' are not real words. The मूल शब्द must be written as it appears in the dictionary; the प्रत्यय is what changed it.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the प्रत्यय कृत् or तद्धित?",
            groups: ["कृत् (joined to a verb root)", "तद्धित (joined to a noun / adjective)"],
            items: [
              { text: "पढ़ाई", group: 0, hint: "पढ़ (read) is a verb root." },
              { text: "अच्छाई", group: 1, hint: "अच्छा (good) is an adjective, so here 'आई' is तद्धित." },
              { text: "सजावट", group: 0, hint: "सज (decorate) is a verb root." },
              { text: "बचपन", group: 1, hint: "बच्चा is a noun." },
              { text: "घबराहट", group: 0, hint: "घबरा (panic) is a verb root." },
              { text: "धनवान", group: 1, hint: "धन (wealth) is a noun." },
              { text: "झाड़ू", group: 0, hint: "झाड़ (sweep) is a verb root." },
              { text: "भारतीय", group: 1, hint: "भारत is a noun." },
            ],
            explain: "Decide by the **मूल शब्द**, not by the प्रत्यय: the same 'आई' is कृत् in पढ़ाई (verb root) but तद्धित in अच्छाई (adjective).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Questions ask you to **separate** मूल शब्द and प्रत्यय, or to **make** words with a given प्रत्यय (e.g. 'इक' से दो शब्द बनाइए). Write the root in its full form (मीठा, not मिठ) and spell the new word correctly (ऐतिहासिक, not इतिहासिक).",
        },
        {
          type: "keypoints",
          items: [
            "**प्रत्यय** = a word-part joined to the **end** of a word or verb root.",
            "**कृत्** → joined to a verb root (पढ़ाई, लिखावट); **तद्धित** → joined to a noun, pronoun or adjective (मिठास, सामाजिक).",
            "The root may change: समाज → सामाजिक, मीठा → मिठास. Always write the original root.",
            "A word can have both: बे + ईमान + ई = बेईमानी.",
          ],
        },
      ],
      flashcards: [
        { front: "प्रत्यय", back: "A word-part joined to the end of a word or verb root (suffix)." },
        { front: "कृत् प्रत्यय", back: "Joined to a verb root (धातु): पढ़ + आई = पढ़ाई, लिख + आवट = लिखावट." },
        { front: "तद्धित प्रत्यय", back: "Joined to a noun, pronoun or adjective: मानव + ता = मानवता." },
        { front: "इक प्रत्यय", back: "Makes adjectives and lengthens the first vowel: समाज → सामाजिक, दिन → दैनिक." },
        { front: "मिठास", back: "मीठा + आस (तद्धित)." },
        { front: "बेईमानी", back: "बे (उपसर्ग) + ईमान (मूल शब्द) + ई (प्रत्यय)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which word is made with a कृत् प्रत्यय?",
          options: ["सुंदरता", "लिखावट", "धार्मिक", "दयालु"],
          answer: 1,
          explain: "लिख (write) is a verb root: लिख + आवट. The others are made from nouns or adjectives (तद्धित).",
        },
        {
          kind: "fill",
          q: "इतिहास + इक = ___",
          answer: ["ऐतिहासिक"],
          explain: "With 'इक', the first vowel 'इ' grows to 'ऐ': **ऐतिहासिक**.",
          difficulty: 2,
          hint: "The first vowel changes.",
        },
        {
          kind: "truefalse",
          q: "In 'बचपन', the मूल शब्द is 'बच'.",
          answer: false,
          explain: "The मूल शब्द is **बच्चा**; बच्चा + पन = बचपन.",
        },
        {
          kind: "mcq",
          q: "Which प्रत्यय is in 'राष्ट्रीय'?",
          options: ["ईय", "य", "त्रीय", "इक"],
          answer: 0,
          explain: "राष्ट्र + ईय = राष्ट्रीय.",
        },
        {
          kind: "multi",
          q: "Which words have the तद्धित प्रत्यय 'ता'?",
          options: ["मित्रता", "मानवता", "चलता", "सुंदरता"],
          answers: [0, 1, 3],
          explain: "मित्र, मानव and सुंदर are a noun, noun and adjective. In 'चलता', 'ता' is joined to the verb root चल, so there it is a कृत् प्रत्यय, not तद्धित.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the parts of 'प्रगतिशील' in order.",
          items: ["प्र (उपसर्ग)", "गति (मूल शब्द)", "शील (प्रत्यय)"],
          explain: "उपसर्ग comes first, then the मूल शब्द, and the प्रत्यय comes last.",
        },
        {
          kind: "mcq",
          q: "'दुकानदार' is दुकान + ___ .",
          options: ["आर", "दार", "दा", "नदार"],
          answer: 1,
          explain: "दुकान + दार = दुकानदार (shopkeeper). The same प्रत्यय gives ईमानदार.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. अनुस्वार, अनुनासिक और नुक्ता                                        */
/* ------------------------------------------------------------------ */
const anusvarNukta: Topic = {
  slug: "c9-anusvar-anunasik-nukta",
  title: "Anusvara, Anunasika and Nukta (अनुस्वार, अनुनासिक और नुक्ता)",
  icon: "🔵",
  description: "Where to put the dot (ं), the moon-dot (ँ) and the dot below (़), and how one small mark changes a word's meaning.",
  lessons: [
    {
      slug: "anusvar-aur-anunasik",
      title: "अनुस्वार (ं) और अनुनासिक (ँ)",
      summary: "The difference between the nasal consonant (अनुस्वार) and the nasal vowel (अनुनासिक), the पंचम वर्ण rule, and when ँ is written as ं.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🦢",
          caption: "हंस (swan) and हँस (laugh) look almost the same. One has a dot, the other a moon with a dot, and the meaning is totally different.",
        },
        {
          type: "text",
          md: "Hindi has two nasal marks written above a letter.\n\n**अनुस्वार (ं)**, the dot, stands for a **nasal consonant** (ङ, ञ, ण, न, म). The sound goes out mainly through the nose and closes the syllable: गंगा, ठंडा, संत.\n\n**अनुनासिक (ँ)**, the **चंद्रबिंदु** (moon-dot), shows that the **vowel itself** is said through the mouth and nose together. No extra consonant is added: चाँद, आँख, हँसी, गाँव.",
        },
        {
          type: "table",
          headers: ["वर्ग", "पंचम वर्ण (nasal letter)", "With अनुस्वार", "Full form"],
          rows: [
            ["क वर्ग", "ङ", "गंगा, पंखा", "गङ्गा, पङ्खा"],
            ["च वर्ग", "ञ", "चंचल, पंजाब", "चञ्चल, पञ्जाब"],
            ["ट वर्ग", "ण", "ठंडा, घंटा", "ठण्डा, घण्टा"],
            ["त वर्ग", "न", "संत, हिंदी", "सन्त, हिन्दी"],
            ["प वर्ग", "म", "कंबल, संपूर्ण", "कम्बल, सम्पूर्ण"],
          ],
        },
        {
          type: "list",
          items: [
            "**Rule 1:** When a पंचम वर्ण comes before a letter of **its own वर्ग**, standard Hindi writes it as अनुस्वार (ं): हिंदी, गंगा, कंबल.",
            "**Rule 2:** When the nasal letter is **doubled** or comes before a letter of **another** वर्ग, write it in full: सम्मान, अन्न, उन्नति, जन्म, निम्न (not संमान, अंन).",
            "**Rule 3:** Before य, र, ल, व, श, ष, स, ह, only अनुस्वार is used: संयम, संरक्षण, संवाद, संसार, सिंह.",
            "**Rule 4 (अनुनासिक):** When a मात्रा rises above the line (ि, ी, े, ै, ो, ौ), there is no room for ँ, so it is written as ं: नहीं, मैं, में, हैं, क्यों, गेंद.",
          ],
        },
        {
          type: "table",
          headers: ["Without the nasal", "With the nasal"],
          rows: [
            ["पूछ (ask)", "पूँछ (tail)"],
            ["आधी (half)", "आँधी (storm)"],
            ["सास (mother-in-law)", "साँस (breath)"],
            ["गोद (lap)", "गोंद (gum, glue)"],
          ],
        },
        {
          type: "example",
          title: "Choosing the right mark",
          problem: "Write correctly and name the mark: (1) पङ्खा (2) चाद (moon) (3) नहीँ (4) संमान.",
          steps: [
            "(1) ङ comes before ख, a letter of its own क वर्ग, so write अनुस्वार: **पंखा**.",
            "(2) The 'आ' sound is nasal, no consonant is added, so it needs अनुनासिक: **चाँद**.",
            "(3) The ी मात्रा goes above the line, so ँ is written as ं: **नहीं** (still अनुनासिक in sound).",
            "(4) म is doubled (म + म), so write it in full: **सम्मान**.",
          ],
          answer: "पंखा (अनुस्वार), चाँद (अनुनासिक), नहीं (अनुनासिक written as ं), सम्मान (full म्, no dot).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which word has अनुनासिक?",
              options: ["गंगा", "संत", "आँख", "ठंडा"],
              answer: 2,
              explain: "In आँख the vowel 'आ' itself is nasal. गंगा, संत and ठंडा use अनुस्वार for ङ, न and ण.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "'नहीं', 'मैं' and 'में' have a dot, so they have अनुस्वार.",
          right: "They have **अनुनासिक**. The ँ is written as ं only because the मात्रा (ी, ै, े) already sits above the line.",
          why: "We judge by the shape of the mark. But the sound decides: in नहीं no consonant like न or म is added; only the vowel is nasal. Rule 4 is a writing convention, not a change of sound.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "अनुस्वार or अनुनासिक? Go by the sound.",
            groups: ["अनुस्वार (nasal consonant)", "अनुनासिक (nasal vowel)"],
            items: [
              { text: "गंगा", group: 0, hint: "The dot stands for ङ: गङ्गा." },
              { text: "चाँद", group: 1, hint: "Only the vowel 'आ' is nasal." },
              { text: "पंखा", group: 0, hint: "The dot stands for ङ: पङ्खा." },
              { text: "हँसी", group: 1, hint: "Moon-dot: the vowel is nasal." },
              { text: "मैं", group: 1, hint: "The ै मात्रा is above the line, so ँ is written as ं. The sound is still a nasal vowel." },
              { text: "संसार", group: 0, hint: "Before स, the nasal consonant is written as अनुस्वार." },
            ],
            explain: "अनुस्वार adds a nasal **consonant** (गङ्गा); अनुनासिक makes the **vowel** nasal (चाँद). Words like मैं, नहीं look like अनुस्वार but sound अनुनासिक.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip (CBSE Hindi B)",
          md: "You may be asked to put the correct mark in given words, or to write words with अनुस्वार / अनुनासिक. Write ँ clearly (moon + dot) and do not write it over ि, ी, े, ै, ो, ौ. Frequent errors: 'हिन्दी' and 'हिंदी' are both seen, but the standard form taught today is **हिंदी**; and 'सम्मान' must never become 'संमान'.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "हंस means 'swan'; ___ means 'laugh'.",
              answer: ["हँस", "हँसना"],
              explain: "The अनुनासिक (ँ) in **हँस** changes the word from 'swan' to 'laugh'.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "**अनुस्वार (ं)** = a nasal consonant (ङ, ञ, ण, न, म): गंगा, संत, कंबल.",
            "**अनुनासिक (ँ)** = a nasal vowel: चाँद, आँख, गाँव.",
            "Doubled or mixed nasals are written in full: सम्मान, अन्न, जन्म.",
            "ँ becomes ं when a मात्रा is above the line: नहीं, मैं, में.",
            "The mark can change the meaning: हंस / हँस, पूछ / पूँछ.",
          ],
        },
      ],
      flashcards: [
        { front: "अनुस्वार", back: "The dot (ं) that stands for a nasal consonant ङ, ञ, ण, न or म: गंगा, ठंडा." },
        { front: "अनुनासिक", back: "The moon-dot (ँ, चंद्रबिंदु): the vowel is said through mouth and nose: चाँद." },
        { front: "पंचम वर्ण", back: "The fifth (nasal) letter of each वर्ग: ङ, ञ, ण, न, म." },
        { front: "Why is नहीं written with ं?", back: "The ी मात्रा is above the line, so ँ is written as ं; the sound is still अनुनासिक." },
        { front: "हंस / हँस", back: "हंस = swan; हँस = laugh." },
        { front: "सम्मान, not संमान", back: "When म is doubled, it is written in full." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the full form of 'कंबल'?",
          options: ["कन्बल", "कम्बल", "कङ्बल", "कण्बल"],
          answer: 1,
          explain: "ब is in the प वर्ग, whose पंचम वर्ण is म: **कम्बल**.",
          difficulty: 2,
          hint: "Which वर्ग does ब belong to?",
        },
        {
          kind: "truefalse",
          q: "In 'गाँव', the ँ shows a nasal vowel.",
          answer: true,
          explain: "The vowel 'आ' is said through the nose; that is अनुनासिक.",
        },
        {
          kind: "mcq",
          q: "Which spelling is correct?",
          options: ["संमान", "सम्मान", "समान्न", "सँमान"],
          answer: 1,
          explain: "सम् + मान: म is doubled, so it is written in full as **सम्मान**.",
        },
        {
          kind: "multi",
          q: "Which words are अनुनासिक even though they are written with ं?",
          options: ["नहीं", "में", "संत", "हैं"],
          answers: [0, 1, 3],
          explain: "नहीं, में, हैं have nasal vowels with a मात्रा above the line. संत has a real अनुस्वार (सन्त).",
          difficulty: 3,
          hint: "Look for a मात्रा above the line.",
        },
        {
          kind: "mcq",
          q: "'आँधी' means storm. What does 'आधी' mean?",
          options: ["storm", "half", "blind", "rain"],
          answer: 1,
          explain: "Without the अनुनासिक, आधी means 'half'.",
        },
        {
          kind: "fill",
          q: "ट वर्ग का पंचम वर्ण ___ है।",
          answer: ["ण"],
          explain: "ट, ठ, ड, ढ, **ण**: the fifth letter is ण, as in ठंडा (ठण्डा).",
        },
        {
          kind: "mcq",
          q: "Before 'स' in संसार, which form is used?",
          options: ["Full न्", "Full म्", "अनुस्वार (ं)", "अनुनासिक (ँ)"],
          answer: 2,
          explain: "Before य, र, ल, व, श, ष, स, ह only **अनुस्वार** is written: संसार, संवाद, सिंह.",
        },
      ],
    },
    {
      slug: "nukta-ka-prayog",
      title: "नुक्ता (़): The Dot Below",
      summary: "Which sounds take a नुक्ता, why only words from Arabic, Persian and English use it, how it changes meaning, and how it differs from ड़ and ढ़.",
      minutes: 13,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🤫",
          caption: "राज (rule, kingdom) and राज़ (secret). A tiny dot under ज keeps a secret from becoming a kingdom.",
        },
        {
          type: "text",
          md: "A **नुक्ता** (़) is the small dot written **below** a letter. It shows a sound that came into Hindi with words from **अरबी-फ़ारसी** (Arabic-Persian) and, for ज़ and फ़, from **अंग्रेज़ी** (English) too. Such words are called **आगत शब्द** (borrowed words).\n\nThe five नुक्ता letters are **क़, ख़, ग़, ज़, फ़**. The sound is made further back in the throat (क़, ख़, ग़) or with air through the teeth or lips (ज़ = 'z', फ़ = 'f').",
        },
        {
          type: "table",
          headers: ["Letter", "Sound", "Examples"],
          rows: [
            ["**क़**", "deep 'q' from the throat", "क़लम (pen), क़िला (fort), क़ानून (law)"],
            ["**ख़**", "rough 'kh' like clearing the throat", "ख़त (letter), ख़बर (news), ख़ुश (happy)"],
            ["**ग़**", "soft gargling 'gh'", "ग़लत (wrong), ग़रीब (poor), बाग़ (garden)"],
            ["**ज़**", "'z' as in zoo", "ज़मीन (land), बाज़ार (market), सज़ा (punishment)"],
            ["**फ़**", "'f' as in fan", "फ़ायदा (benefit), सफ़र (journey), दफ़्तर (office)"],
          ],
        },
        {
          type: "table",
          headers: ["Without नुक्ता", "With नुक्ता"],
          rows: [
            ["राज (rule, kingdom)", "राज़ (secret)"],
            ["जरा (old age)", "ज़रा (a little)"],
            ["सजा (decorated)", "सज़ा (punishment)"],
            ["खाना (food)", "ख़ाना (compartment, place)"],
            ["फन (a snake's hood)", "फ़न (art, skill)"],
          ],
        },
        {
          type: "text",
          md: "**ड़** and **ढ़** also have a dot, but they are not नुक्ता sounds from other languages. They are Hindi's own **उत्क्षिप्त व्यंजन** (flapped consonants), made by flicking the tongue: सड़क, पेड़, पढ़ना, बढ़ई.\n\nThey never begin a word: we write **ड**र, **ड**ाक, **ढ**ोल at the start, but स**ड़**क, प**ढ़**ना in the middle or at the end.",
        },
        {
          type: "example",
          title: "Putting the नुक्ता where it belongs",
          problem: "Rewrite with the correct नुक्ता: 'राजू ने बाजार से नई कलम खरीदी।' (Raju bought a new pen from the market.)",
          steps: [
            "Find the borrowed words: बाजार (Persian), कलम (Arabic), खरीदी (from Persian ख़रीद).",
            "Add the right dot: बाज़ार (ज़ = z), क़लम (क़), ख़रीदी (ख़).",
            "Leave the Hindi words as they are: राजू, ने, से, नई.",
          ],
          answer: "राजू ने बाज़ार से नई क़लम ख़रीदी।",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which word should be written with a नुक्ता?",
              options: ["जल (water)", "फल (fruit)", "जमीन (land)", "कमल (lotus)"],
              answer: 2,
              explain: "'ज़मीन' is a Persian word with the 'z' sound. जल, फल and कमल are तत्सम words, which never take a नुक्ता.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Every ज and फ in Hindi gets a नुक्ता, so I write ज़ल, फ़ल, ज़ीवन.",
          right: "Only borrowed (आगत) words with a 'z' or 'f' sound take it: ज़मीन, फ़ायदा. **तत्सम** and तद्भव words never do: जल, फल, जीवन.",
          why: "Students learn that the dot is 'correct Hindi' and start using it everywhere. But the dot shows a different sound, so putting it on जल or फल is a spelling error, just like leaving it off सज़ा changes the meaning.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does the word need a नुक्ता?",
            groups: ["Needs नुक्ता", "No नुक्ता"],
            items: [
              { text: "बाजार (market)", group: 0, hint: "A Persian word with a 'z' sound: बाज़ार." },
              { text: "जीवन (life)", group: 1, hint: "A तत्सम word: no नुक्ता." },
              { text: "फायदा (benefit)", group: 0, hint: "An Arabic word with an 'f' sound: फ़ायदा." },
              { text: "फल (fruit)", group: 1, hint: "A तत्सम word: no नुक्ता." },
              { text: "कानून (law)", group: 0, hint: "An Arabic word: क़ानून." },
              { text: "कमल (lotus)", group: 1, hint: "A तत्सम word: no नुक्ता." },
            ],
            explain: "Ask where the word comes from. Arabic-Persian (and some English) words take नुक्ता; Sanskrit and native Hindi words do not.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip (CBSE Hindi B)",
          md: "You may be asked to put the नुक्ता in given words (e.g. ज़रूरी, ग़लत, क़िला). Place the dot **under** the letter, not beside it. Do not add it to ड़ / ढ़ questions by mistake: those are a separate topic (उत्क्षिप्त व्यंजन).",
        },
        {
          type: "keypoints",
          items: [
            "**नुक्ता (़)** marks borrowed sounds: क़, ख़, ग़, ज़, फ़.",
            "Only आगत words from Arabic, Persian (and English for ज़, फ़) take it.",
            "It can change meaning: राज / राज़, सजा / सज़ा, जरा / ज़रा.",
            "ड़ and ढ़ are Hindi's own flapped sounds; they never begin a word.",
          ],
        },
      ],
      flashcards: [
        { front: "नुक्ता", back: "The dot (़) below a letter that marks a borrowed sound: क़, ख़, ग़, ज़, फ़." },
        { front: "आगत शब्द", back: "Words borrowed from other languages, such as Arabic, Persian or English." },
        { front: "सजा / सज़ा", back: "सजा = decorated; सज़ा = punishment." },
        { front: "जरा / ज़रा", back: "जरा = old age; ज़रा = a little." },
        { front: "उत्क्षिप्त व्यंजन", back: "ड़ and ढ़: Hindi's flapped sounds; they never start a word (सड़क, पढ़ना)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which set lists only नुक्ता letters?",
          options: ["क़, ख़, ग़, ज़, फ़", "ड़, ढ़, क़, ज़", "क, ख, ग, ज, फ", "ङ, ञ, ण, न, म"],
          answer: 0,
          explain: "क़, ख़, ग़, ज़, फ़ are the नुक्ता letters. ड़ and ढ़ are उत्क्षिप्त व्यंजन, and the last set is the पंचम वर्ण.",
        },
        {
          kind: "truefalse",
          q: "'फल (fruit)' should be written as 'फ़ल'.",
          answer: false,
          explain: "फल is a तत्सम word; तत्सम words never take a नुक्ता.",
        },
        {
          kind: "mcq",
          q: "'उसे ___ मिली।' (He got a punishment.) Choose the right word.",
          options: ["सजा", "सज़ा", "सज्जा", "सजी"],
          answer: 1,
          explain: "'Punishment' is **सज़ा** (with नुक्ता). 'सजा' means 'decorated'.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "राज means 'rule'; ___ means 'secret'.",
          answer: ["राज़"],
          explain: "With a नुक्ता, **राज़** means 'secret'.",
        },
        {
          kind: "multi",
          q: "Which words need a नुक्ता?",
          options: ["गलत (wrong)", "गगन (sky)", "दफ्तर (office)", "जरूरी (necessary)"],
          answers: [0, 2, 3],
          explain: "ग़लत, दफ़्तर, ज़रूरी are borrowed words. गगन is तत्सम, so no नुक्ता.",
          difficulty: 2,
          hint: "Which word is pure Sanskrit?",
        },
        {
          kind: "truefalse",
          q: "A Hindi word can begin with ड़.",
          answer: false,
          explain: "ड़ and ढ़ never come at the start of a word; we write ड / ढ there (डर, ढोल).",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. अर्थ के आधार पर वाक्य भेद                                           */
/* ------------------------------------------------------------------ */
const arthVakya: Topic = {
  slug: "c9-arth-vakya-bhed",
  title: "Sentence Types by Meaning (अर्थ के आधार पर वाक्य भेद)",
  icon: "💬",
  description: "The eight kinds of Hindi sentences by meaning, from statements and questions to wishes, doubts and conditions, and how to change one into another.",
  lessons: [
    {
      slug: "arth-ke-aadhar-par-aath-bhed",
      title: "आठ प्रकार के वाक्य",
      summary: "How to spot विधानवाचक, निषेधवाचक, प्रश्नवाचक, आज्ञावाचक, विस्मयादिबोधक, इच्छावाचक, संदेहवाचक and संकेतवाचक sentences, and how to convert them.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🌧️",
          caption: "बारिश हो रही है। क्या बारिश हो रही है? अरे! बारिश हो रही है! शायद बारिश हो रही है। Same words, four different meanings.",
        },
        {
          type: "text",
          md: "Earlier you sorted sentences by their **रचना** (structure): सरल, संयुक्त, मिश्र. Now we sort them by their **अर्थ** (meaning): what the speaker wants to do with the sentence. Is it a statement, a question, an order, a wish or a doubt?\n\nBy meaning, Hindi has **आठ** (eight) kinds of sentences.",
        },
        {
          type: "table",
          headers: ["Type", "What it does", "Example", "Clue"],
          rows: [
            ["**विधानवाचक**", "states a fact (statement)", "मैं रोज़ स्कूल जाता हूँ। (I go to school daily.)", "ends with ।"],
            ["**निषेधवाचक**", "says 'no' (negative)", "मैं आज स्कूल नहीं जाऊँगा। (I will not go today.)", "नहीं, न"],
            ["**प्रश्नवाचक**", "asks a question", "क्या तुमने खाना खाया? (Did you eat?)", "क्या, कौन, कब, कहाँ, क्यों, कैसे; ends with ?"],
            ["**आज्ञावाचक**", "gives an order or a request", "दरवाज़ा बंद करो। कृपया बैठिए। (Close the door. Please sit.)", "verb in order / request form"],
            ["**विस्मयादिबोधक**", "shows surprise, joy, sorrow", "वाह! कितना सुंदर दृश्य है! (Wow! What a lovely view!)", "वाह, अरे, ओह, हाय; ends with !"],
            ["**इच्छावाचक**", "a wish or a blessing", "आपकी यात्रा शुभ हो। (Have a good journey.)", "हो, करे; काश, भगवान"],
            ["**संदेहवाचक**", "doubt or possibility", "शायद आज बारिश होगी। (Perhaps it will rain today.)", "शायद, संभवतः; 'होगा / होगी'"],
            ["**संकेतवाचक**", "one thing depends on another (condition)", "यदि तुम मेहनत करोगे तो सफल होगे। (If you work hard, you will succeed.)", "यदि…तो, अगर…तो"],
          ],
        },
        {
          type: "example",
          title: "One sentence, many types",
          problem: "Change 'राधा गाना गाती है। (Radha sings.)' into निषेधवाचक, प्रश्नवाचक, आज्ञावाचक, इच्छावाचक, संदेहवाचक and संकेतवाचक.",
          steps: [
            "**निषेधवाचक**: add नहीं before the verb: राधा गाना नहीं गाती।",
            "**प्रश्नवाचक**: start with क्या and end with ?: क्या राधा गाना गाती है?",
            "**आज्ञावाचक**: speak to her and use the order form: राधा, गाना गाओ।",
            "**इच्छावाचक**: use the wish form: राधा गाना गाए। / काश, राधा गाना गाती!",
            "**संदेहवाचक**: add शायद: शायद राधा गाना गाती है।",
            "**संकेतवाचक**: add a condition with यदि…तो: यदि राधा गाना गाएगी तो सब खुश होंगे।",
          ],
          answer: "Only the form of the verb, a key word (नहीं, क्या, शायद, यदि…तो) and the end mark change. The basic idea stays the same.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "'भगवान तुम्हें लंबी उम्र दे। (May God give you a long life.)' is:",
              options: ["आज्ञावाचक", "इच्छावाचक", "विधानवाचक", "संदेहवाचक"],
              answer: 1,
              explain: "It is a blessing, a wish for someone. So it is **इच्छावाचक**.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "'क्या तुम कल नहीं आओगे?' has 'नहीं', so it is निषेधवाचक. 'कृपया पानी दीजिए।' is a polite wish, so it is इच्छावाचक.",
          right: "The first is **प्रश्नवाचक**: it asks a question. The second is **आज्ञावाचक**: a request is a polite order.",
          why: "We grab one word (नहीं, कृपया) and decide from it. But the type depends on the **main purpose** of the whole sentence. A question with 'नहीं' is still a question, and asking someone to do something, however politely, is आज्ञा.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each sentence with its type.",
            pairs: [
              ["अरे! तुम कब आए?", "विस्मयादिबोधक"],
              ["वह शायद घर पहुँच गया होगा।", "संदेहवाचक"],
              ["अगर बस मिली तो मैं समय पर पहुँचूँगा।", "संकेतवाचक"],
              ["कृपया बैठिए।", "आज्ञावाचक"],
              ["दिल्ली भारत की राजधानी है।", "विधानवाचक"],
              ["तुम सदा सुखी रहो।", "इच्छावाचक"],
            ],
            explain: "Look at the purpose: surprise (अरे!), doubt (शायद, होगा), condition (अगर…तो), a polite request (still आज्ञा), fact, and blessing.",
          },
        },
        {
          type: "text",
          md: "Do not mix up the two ways of sorting. 'यदि तुम पढ़ोगे तो पास होगे।' is **संकेतवाचक** by meaning and **मिश्र वाक्य** by रचना. Both answers are right, but only for the question that is asked.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip (CBSE Hindi B)",
          md: "Questions say 'अर्थ के आधार पर वाक्य का भेद लिखिए' or 'निर्देशानुसार वाक्य बदलिए'. When you change a sentence, keep the **tense and meaning** the same, and change the **end mark** too: ? for प्रश्नवाचक, ! for विस्मयादिबोधक. Many students lose the mark only because they forget the ? or !.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "'शायद' and 'संभवतः' are clue words for a ___ वाक्य.",
              answer: ["संदेहवाचक", "sandehvachak"],
              explain: "They show doubt or possibility, so the sentence is **संदेहवाचक**.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "By meaning there are **8** types: विधान, निषेध, प्रश्न, आज्ञा, विस्मयादिबोधक, इच्छा, संदेह, संकेत.",
            "Decide by the **main purpose** of the sentence, not by one word.",
            "Requests (कृपया…) are आज्ञावाचक; questions with नहीं are प्रश्नवाचक.",
            "When converting, keep the tense and change the end mark (। ? !).",
          ],
        },
      ],
      flashcards: [
        { front: "विधानवाचक वाक्य", back: "A plain statement of fact: सूरज पूर्व में उगता है।" },
        { front: "निषेधवाचक वाक्य", back: "A sentence that denies or says no, using नहीं or न: मैं वहाँ नहीं गया।" },
        { front: "आज्ञावाचक वाक्य", back: "An order or request: बैठो। कृपया बैठिए।" },
        { front: "इच्छावाचक वाक्य", back: "A wish or blessing: आपका दिन शुभ हो।" },
        { front: "संदेहवाचक वाक्य", back: "Doubt or possibility: शायद वह आ गया होगा।" },
        { front: "संकेतवाचक वाक्य", back: "A condition: यदि वर्षा होगी तो फ़सल अच्छी होगी।" },
        { front: "विस्मयादिबोधक वाक्य", back: "Surprise, joy or sorrow, with वाह / अरे / हाय and !" },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "'वाह! तुमने तो कमाल कर दिया!' is:",
          options: ["विधानवाचक", "विस्मयादिबोधक", "इच्छावाचक", "प्रश्नवाचक"],
          answer: 1,
          explain: "'वाह!' shows joy and surprise, so it is **विस्मयादिबोधक**.",
        },
        {
          kind: "mcq",
          q: "Change to निषेधवाचक: 'माँ खाना बना रही है।'",
          options: ["क्या माँ खाना बना रही है?", "माँ खाना नहीं बना रही है।", "माँ, खाना बनाओ।", "शायद माँ खाना बना रही है।"],
          answer: 1,
          explain: "Adding **नहीं** before the verb makes it निषेधवाचक. The others are प्रश्न, आज्ञा and संदेह.",
        },
        {
          kind: "truefalse",
          q: "'कृपया शांत रहिए।' is an इच्छावाचक वाक्य.",
          answer: false,
          explain: "It asks someone to do something, so it is **आज्ञावाचक** (a polite order).",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which sentences are प्रश्नवाचक?",
          options: ["तुम कहाँ रहते हो?", "क्या तुम नहीं खेलोगे?", "पता नहीं वह कहाँ गया।", "वह कब आएगा?"],
          answers: [0, 1, 3],
          explain: "Sentence 3 has 'कहाँ' but only states that the speaker does not know; it is not asking anyone, so it is not प्रश्नवाचक.",
          difficulty: 3,
          hint: "Is a question actually being asked?",
        },
        {
          kind: "fill",
          q: "'यदि…तो' and 'अगर…तो' are clue words for a ___ वाक्य.",
          answer: ["संकेतवाचक", "संकेतार्थक", "sanketvachak"],
          explain: "They show a condition, so the sentence is **संकेतवाचक**.",
        },
        {
          kind: "mcq",
          q: "'वह परीक्षा में उत्तीर्ण हो गया होगा।' is:",
          options: ["विधानवाचक", "संदेहवाचक", "संकेतवाचक", "इच्छावाचक"],
          answer: 1,
          explain: "The verb form 'हो गया होगा' shows the speaker is not sure, so it is **संदेहवाचक**, even without 'शायद'.",
          difficulty: 2,
          hint: "Look at the verb ending 'होगा'.",
        },
        {
          kind: "mcq",
          q: "How many kinds of sentences are there by meaning (अर्थ के आधार पर)?",
          options: ["तीन", "पाँच", "आठ", "दस"],
          answer: 2,
          explain: "There are **आठ** (eight). तीन is the number by रचना (सरल, संयुक्त, मिश्र).",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4. विराम चिह्न                                                        */
/* ------------------------------------------------------------------ */
const viramChihn: Topic = {
  slug: "c9-viram-chihn",
  title: "Punctuation (विराम चिह्न)",
  icon: "❗",
  description: "The Hindi punctuation marks, from पूर्ण विराम (।) to उद्धरण चिह्न, and how a misplaced comma can change the meaning.",
  lessons: [
    {
      slug: "viram-chihn-prayog",
      title: "विराम चिह्नों का सही प्रयोग",
      summary: "The names, shapes and uses of the main Hindi punctuation marks, with practice in punctuating a short passage.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "✋",
          caption: "'रोको, मत जाने दो।' (Stop him, don't let him go.) 'रोको मत, जाने दो।' (Don't stop him, let him go.) One comma moved, and the order is reversed.",
        },
        {
          type: "text",
          md: "**विराम** means 'a pause' or 'a rest'. **विराम चिह्न** (punctuation marks) show where to pause while reading and what kind of sentence it is. Without them, writing becomes confusing, and sometimes the meaning changes.\n\nHindi uses most of the marks used in English, with one big difference: a statement ends with the **पूर्ण विराम (।)**, a standing line, not with a dot.",
        },
        {
          type: "table",
          headers: ["Mark", "Name", "Use", "Example"],
          rows: [
            ["**।**", "पूर्ण विराम", "end of a statement or order", "राम घर गया।"],
            ["**,**", "अल्प विराम", "short pause; between items in a list; after a name we call", "राम, श्याम और मोहन आए। बेटा, यहाँ आओ।"],
            ["**;**", "अर्ध विराम", "a pause longer than , but shorter than ।, between linked clauses", "सूरज ढल गया; पक्षी घोंसलों में लौटने लगे।"],
            ["**?**", "प्रश्नवाचक चिह्न", "end of a question", "तुम कहाँ जा रहे हो?"],
            ["**!**", "विस्मयादिबोधक चिह्न", "after surprise, joy, sorrow, a call", "वाह! क्या बात है!"],
            ["**-**", "योजक चिह्न", "joins pair words and repeated words", "माता-पिता, दिन-रात, धीरे-धीरे"],
            ["**—**", "निर्देशक चिह्न", "a longer dash before an explanation or a speaker's words", "अध्यापक ने कहा — कल छुट्टी रहेगी।"],
            ["**“ ” / ‘ ’**", "उद्धरण चिह्न (दोहरा / इकहरा)", "someone's exact words / titles and special words", "माँ ने कहा, “जल्दी आना।” ‘गोदान’ प्रेमचंद का उपन्यास है।"],
            ["**( )**", "कोष्ठक", "extra information or meaning", "अध्यापक (शिक्षक) कक्षा में आए।"],
            ["**॰**", "लाघव चिह्न", "after a short form (abbreviation)", "डॉ॰ (डॉक्टर)"],
          ],
        },
        {
          type: "text",
          md: "Notice the **योजक चिह्न** (-) is short and joins words with no space: सुख-दुख. The **निर्देशक चिह्न** (—) is longer and stands between words to point to what comes next.\n\nThe **उद्धरण चिह्न** “ ” closes after the end mark of the quoted words: “मैं आ रहा हूँ।”",
        },
        {
          type: "example",
          title: "Punctuating a passage",
          problem: "Put in the correct विराम चिह्न: माँ ने कहा बेटा जल्दी उठो स्कूल का समय हो गया है रोहन बोला अरे आज तो रविवार है",
          steps: [
            "Find the speakers: माँ and रोहन. Their exact words go inside “ ”, with a , after 'कहा' and 'बोला'.",
            "'बेटा' is a call to someone, so put a , after it: “बेटा, जल्दी उठो।”",
            "Two statements in माँ's words, so two पूर्ण विराम: …उठो। …हो गया है।",
            "'अरे' shows surprise, so put ! after it, and end the statement with ।",
          ],
          answer: "माँ ने कहा, “बेटा, जल्दी उठो। स्कूल का समय हो गया है।” रोहन बोला, “अरे! आज तो रविवार है।”",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which mark joins 'सुख' and 'दुख' in 'सुख___दुख'?",
              options: ["अल्प विराम (,)", "योजक चिह्न (-)", "निर्देशक चिह्न (—)", "अर्ध विराम (;)"],
              answer: 1,
              explain: "Pair words are joined with the short **योजक चिह्न**: सुख-दुख.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Every Hindi sentence ends with पूर्ण विराम, so I write: 'तुम कब आओगे।' and 'वाह। कितना सुंदर।'",
          right: "Only statements and orders end with ।. A question ends with ? (तुम कब आओगे?) and a feeling with ! (वाह! कितना सुंदर!).",
          why: "Students learn 'Hindi uses ।' and apply it everywhere. But the end mark must match the type of sentence; the board counts a missing ? or ! as an error.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each mark with its name.",
            pairs: [
              ["।", "पूर्ण विराम"],
              [",", "अल्प विराम"],
              [";", "अर्ध विराम"],
              ["-", "योजक चिह्न"],
              ["“ ”", "उद्धरण चिह्न"],
              ["( )", "कोष्ठक"],
            ],
            explain: "पूर्ण = full stop, अल्प = small pause, अर्ध = half pause, योजक = joiner, उद्धरण = quotation, कोष्ठक = brackets.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip (CBSE Hindi B)",
          md: "You may get a short passage or a few sentences without marks and be asked to punctuate them. Each correct mark earns credit, so read the passage aloud in your head: pause → , ; question → ? ; feeling → ! ; someone's exact words → “ ”. Write the ।, not an English dot.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The mark । is called ___ विराम.",
              answer: ["पूर्ण"],
              explain: "। is the **पूर्ण विराम** (full stop) of Hindi.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Statements and orders end with **। (पूर्ण विराम)**, questions with **?**, feelings with **!**.",
            "**अल्प विराम (,)** separates list items and follows a name we call.",
            "**योजक (-)** joins pair words; **निर्देशक (—)** points to what follows.",
            "**उद्धरण चिह्न “ ”** enclose someone's exact words.",
            "A misplaced comma can change the meaning: 'रोको, मत जाने दो' / 'रोको मत, जाने दो'.",
          ],
        },
      ],
      flashcards: [
        { front: "पूर्ण विराम", back: "। : ends a statement or an order." },
        { front: "अल्प विराम", back: ", : a short pause; separates items in a list." },
        { front: "अर्ध विराम", back: "; : a pause longer than a comma, between linked clauses." },
        { front: "योजक चिह्न", back: "- : joins pair words (माता-पिता) and repeated words (धीरे-धीरे)." },
        { front: "निर्देशक चिह्न", back: "— : a long dash that points to an explanation or someone's words." },
        { front: "उद्धरण चिह्न", back: "“ ” for exact words; ‘ ’ for titles and special words." },
        { front: "लाघव चिह्न", back: "॰ : written after a short form, as in डॉ॰." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which sentence is punctuated correctly?",
          options: ["क्या तुमने गृहकार्य किया।", "क्या तुमने गृहकार्य किया?", "क्या तुमने गृहकार्य किया!", "क्या, तुमने गृहकार्य किया।"],
          answer: 1,
          explain: "It is a question, so it must end with **?**.",
        },
        {
          kind: "mcq",
          q: "What does 'रोको मत, जाने दो।' mean?",
          options: ["Stop him, don't let him go.", "Don't stop him, let him go.", "Stop and go.", "Don't go."],
          answer: 1,
          explain: "The comma after 'मत' makes it 'don't stop him'. With 'रोको, मत जाने दो' the meaning reverses.",
          difficulty: 2,
          hint: "Read up to the comma first.",
        },
        {
          kind: "truefalse",
          q: "In 'धीरे-धीरे', the mark used is the निर्देशक चिह्न.",
          answer: false,
          explain: "Repeated words are joined with the short **योजक चिह्न** (-).",
        },
        {
          kind: "multi",
          q: "Where should an अल्प विराम (,) go?",
          options: ["Between items in a list: आम, केला और सेब", "After a name we call: राहुल, इधर आओ।", "At the end of a question", "Before someone's exact words: उसने कहा, “…”"],
          answers: [0, 1, 3],
          explain: "A question ends with ?, not a comma. The other three are correct uses of अल्प विराम.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "'वाह' shows joy, so it is followed by the ___ चिह्न (!).",
          answer: ["विस्मयादिबोधक"],
          explain: "'वाह' shows joy, so it takes the **विस्मयादिबोधक चिह्न (!)**.",
        },
        {
          kind: "mcq",
          q: "Which mark is used for the short form 'डॉ॰'?",
          options: ["लाघव चिह्न", "कोष्ठक", "अर्ध विराम", "उद्धरण चिह्न"],
          answer: 0,
          explain: "The small circle ॰ after a short form is the **लाघव चिह्न**.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. संवाद लेखन                                                         */
/* ------------------------------------------------------------------ */
const samvadLekhan: Topic = {
  slug: "c9-samvad-lekhan",
  title: "Dialogue Writing (संवाद लेखन)",
  icon: "🗣️",
  description: "Write a short, natural conversation in Hindi between two or more people on a given situation, in the correct format.",
  lessons: [
    {
      slug: "samvad-lekhan-format",
      title: "संवाद कैसे लिखें",
      summary: "The format of a Hindi dialogue, the qualities of a good संवाद, a model on saving water, and the errors that cost marks.",
      minutes: 14,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🗣️",
          caption: "You and your friend argue about the cricket match every morning at the bus stop. Write that down, and you have a संवाद.",
        },
        {
          type: "text",
          md: "A **संवाद** (dialogue) is a conversation between two or more people. In **संवाद लेखन** you write that conversation on a given situation, such as two friends talking about exams, or a customer and a shopkeeper.\n\nIn the **CBSE Hindi B** paper you write a short dialogue within the word limit given in the question. Read the limit carefully and count roughly as you write.",
        },
        {
          type: "list",
          items: [
            "Write the **speaker's name**, then a **colon (:)**, then the words: 'राहुल : …'.",
            "Start a **new line** for each new speaker.",
            "Do **not** use उद्धरण चिह्न (“ ”); the format already shows who is speaking.",
            "Put actions or feelings in **कोष्ठक**: 'माँ : (मुस्कुराते हुए) अच्छा, जाओ।'",
            "Use the right end marks: ।, ? and !",
          ],
        },
        {
          type: "table",
          headers: ["Quality", "What it means"],
          rows: [
            ["**स्वाभाविक** (natural)", "Short sentences, the way people really talk"],
            ["**पात्र के अनुसार भाषा** (fits the speaker)", "'आप' and respectful forms for elders and teachers; friendly 'तुम' for friends"],
            ["**विषय पर केंद्रित** (on topic)", "Every line moves the conversation on the given situation"],
            ["**आरंभ, मध्य, अंत** (shape)", "A greeting or opening, the main talk, and a clear ending or decision"],
          ],
        },
        {
          type: "example",
          title: "A model संवाद",
          problem: "Write a dialogue between two friends, अमन and सारा, about saving water.",
          steps: [
            "**Opening**: a greeting and the trigger: सारा saw a running tap.",
            "**Middle**: why saving water matters and two practical ideas.",
            "**Ending**: they decide to act. Keep each line short and natural; add one feeling in कोष्ठक.",
          ],
          answer: "अमन : नमस्ते सारा! इतनी परेशान क्यों हो?\n\nसारा : स्कूल के नल से सुबह से पानी बह रहा है। किसी ने बंद ही नहीं किया।\n\nअमन : (हैरानी से) अरे! इतनी गर्मी में पानी की इतनी बर्बादी!\n\nसारा : हाँ, हमारे शहर में पहले ही पानी की कमी है।\n\nअमन : चलो, अभी प्रधानाचार्य जी को बताते हैं और नल ठीक करवाते हैं।\n\nसारा : और कल प्रार्थना सभा में सबसे पानी बचाने की अपील भी करेंगे।\n\nअमन : बहुत अच्छा विचार है। चलो, चलें!",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which line follows the correct संवाद format?",
              options: [
                "राहुल ने कहा कि वह कल आएगा।",
                "राहुल : मैं कल आऊँगा।",
                "“मैं कल आऊँगा” — राहुल",
                "राहुल मैं कल आऊँगा",
              ],
              answer: 1,
              explain: "Name, colon, then the words: **राहुल : मैं कल आऊँगा।** Option 1 is a report, not a dialogue.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "I can write: 'माँ ने बेटे से कहा कि वह पढ़ाई करे। बेटे ने कहा कि वह बाद में पढ़ेगा।'",
          right: "Write the people's own words: 'माँ : बेटा, अब पढ़ाई कर लो। / बेटा : माँ, बस दस मिनट में बैठता हूँ।'",
          why: "Telling what people said (with 'ने कहा कि') feels like a dialogue because it contains talk. But it is narration. A संवाद must give each speaker's exact words in the name-colon format; reported speech loses the format marks.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange the dialogue lines in a natural order.",
            items: [
              "ग्राहक : भैया, ये सेब कैसे दिए?",
              "दुकानदार : एक सौ बीस रुपये किलो, बहन जी।",
              "ग्राहक : बहुत महँगे हैं! कुछ कम कीजिए।",
              "दुकानदार : ठीक है, आपके लिए सौ रुपये किलो।",
              "ग्राहक : अच्छा, एक किलो तौल दीजिए।",
            ],
            explain: "A question about the price, the answer, bargaining, an offer, and the decision: a clear start, middle and end.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip (CBSE Hindi B)",
          md: "Marks go to **format** (name : words), **content** on the given situation, and **language** (correct, natural Hindi with correct विराम चिह्न). Frequent errors: writing in reported speech, using 'तू' or 'तुम' for a teacher or elder, going far beyond the word limit, and ending the conversation suddenly with no conclusion.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "In a संवाद, a student talking to the principal should say 'आप' and use respectful forms such as 'जी'.",
              answer: true,
              explain: "Language must fit the speaker and listener. Respectful forms are needed for elders and teachers.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Format: **वक्ता का नाम : संवाद**, a new line for each speaker, no “ ”.",
            "Actions and feelings go in कोष्ठक: (हँसते हुए).",
            "Short, natural lines that fit the speaker and stay on the topic.",
            "Give the dialogue a beginning, a middle and a clear ending.",
          ],
        },
      ],
      flashcards: [
        { front: "संवाद", back: "A conversation between two or more people." },
        { front: "संवाद format", back: "Speaker's name, a colon, then the words: 'सीमा : आज मौसम अच्छा है।'" },
        { front: "कोष्ठक in a संवाद", back: "Shows actions or feelings: 'पिता जी : (गुस्से में) इतनी देर क्यों हुई?'" },
        { front: "पात्र के अनुसार भाषा", back: "Language that suits the speaker: respectful 'आप' for elders, friendly 'तुम' for friends." },
        { front: "Three parts of a संवाद", back: "आरंभ (opening), मध्य (main talk), अंत (conclusion or decision)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What separates the speaker's name from the words in a Hindi संवाद?",
          options: ["उद्धरण चिह्न (“ ”)", "कोलन (:)", "पूर्ण विराम (।)", "योजक चिह्न (-)"],
          answer: 1,
          explain: "The usual format is **name : words**, with a colon.",
        },
        {
          kind: "truefalse",
          q: "Each speaker's words should be inside उद्धरण चिह्न in a संवाद.",
          answer: false,
          explain: "The name-colon format already shows the speaker, so quotation marks are not used.",
        },
        {
          kind: "mcq",
          q: "Which line suits a student speaking to a teacher?",
          options: ["तू मेरी कॉपी देख ले।", "सर, क्या आप मेरी कॉपी देख लेंगे?", "ए, मेरी कॉपी देखो।", "कॉपी देखो जल्दी!"],
          answer: 1,
          explain: "A polite request with 'आप' fits a teacher. The others are rude or too casual.",
        },
        {
          kind: "multi",
          q: "Which are qualities of a good संवाद?",
          options: ["Short, natural sentences", "Language that suits each speaker", "Long paragraphs for each speaker", "A clear ending"],
          answers: [0, 1, 3],
          explain: "Long speeches make a dialogue unnatural. Keep lines short.",
        },
        {
          kind: "fill",
          q: "Actions and feelings such as (हँसते हुए) are written inside ___ .",
          answer: ["कोष्ठक", "brackets", "( )"],
          explain: "They go in **कोष्ठक** ( ) so the reader knows they are not spoken.",
        },
        {
          kind: "order",
          q: "Put the stages of planning a संवाद in order.",
          items: ["Read the situation and decide the speakers", "Plan an opening", "Plan the main points of the talk", "Plan a clear ending", "Check the word limit and विराम चिह्न"],
          explain: "Know who is speaking and why, plan start, middle and end, then check length and punctuation.",
        },
        {
          kind: "mcq",
          q: "'माँ ने कहा कि बाहर बारिश हो रही है।' Why is this wrong as a line of संवाद?",
          options: ["It is too short", "It is reported speech, not the speaker's own words", "It has no question mark", "It uses 'माँ'"],
          answer: 1,
          explain: "A संवाद needs exact words: 'माँ : बाहर बारिश हो रही है।'",
          difficulty: 2,
        },
      ],
    },
  ],
};

export const topics: Topic[] = [upsargPratyay, anusvarNukta, arthVakya, viramChihn, samvadLekhan];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Prefixes and Suffixes (उपसर्ग और प्रत्यय)": "c9-upsarg-pratyay",
  "9:Anusvara, Anunasika and Nukta (अनुस्वार, अनुनासिक और नुक्ता)": "c9-anusvar-anunasik-nukta",
  "9:Sentence Types by Meaning (अर्थ के आधार पर वाक्य भेद)": "c9-arth-vakya-bhed",
  "9:Punctuation (विराम चिह्न)": "c9-viram-chihn",
  "9:Dialogue Writing (संवाद लेखन)": "c9-samvad-lekhan",
};
