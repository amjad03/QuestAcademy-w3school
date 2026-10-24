import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "kannada";
/** Syllabus family: chapter titles below are matched against `kan` rows in src/content/syllabus/. */
export const family = "kan";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "kannada-sandhi",
    title: "Sandhi (ಸಂಧಿ)",
    icon: "🔗",
    description: "How two Kannada words join into one: Kannada sandhi (ಲೋಪ, ಆಗಮ, ಆದೇಶ) and Sanskrit sandhi (ಸವರ್ಣದೀರ್ಘ, ಗುಣ, ವೃದ್ಧಿ, ಯಣ್, ಜಶ್ತ್ವ, ಶ್ಚುತ್ವ, ಅನುನಾಸಿಕ).",
    lessons: [
      {
        slug: "kannada-sandhi-lopa-agama-adesha",
        title: "Kannada Sandhi: ಲೋಪ, ಆಗಮ, ಆದೇಶ",
        summary: "What sandhi is, and the three Kannada sandhis: a vowel drops (ಲೋಪ), a letter is added (ಆಗಮ), or a letter is replaced (ಆದೇಶ).",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🔗",
            caption: "When we speak fast, two words stick together: ಊರು + ಅಲ್ಲಿ becomes ಊರಲ್ಲಿ (ooralli — in the town).",
          },
          {
            type: "text",
            md: "When two sounds meet and join without a gap, the joining is called **ಸಂಧಿ** (sandhi — joining). The word on the left is the **ಪೂರ್ವಪದ** (first word) and the word on the right is the **ಉತ್ತರಪದ** (second word).\n\nIn Class 10 you learn two families. **ಕನ್ನಡ ಸಂಧಿ** (Kannada sandhi) is used when at least one of the two words is a Kannada word. **ಸಂಸ್ಕೃತ ಸಂಧಿ** (Sanskrit sandhi) is used when *both* words are Sanskrit words.\n\nThere are three Kannada sandhis: **ಲೋಪ ಸಂಧಿ**, **ಆಗಮ ಸಂಧಿ** and **ಆದೇಶ ಸಂಧಿ**.",
          },
          {
            type: "table",
            headers: ["Sandhi", "What happens", "Examples"],
            rows: [
              ["**ಲೋಪ ಸಂಧಿ** (dropping)", "A vowel meets a vowel. The last vowel of the first word drops, and the meaning stays clear.", "ಊರು + ಅಲ್ಲಿ = ಊರಲ್ಲಿ (in the town); ಮಾತು + ಇಲ್ಲ = ಮಾತಿಲ್ಲ (no words); ಬೇರೆ + ಒಬ್ಬ = ಬೇರೊಬ್ಬ (another person)"],
              ["**ಆಗಮ ಸಂಧಿ** (adding)", "A vowel meets a vowel, but dropping would spoil the meaning. So a new letter ಯ or ವ is added.", "ಮನೆ + ಅನ್ನು = ಮನೆಯನ್ನು (the house); ಗುರು + ಅನ್ನು = ಗುರುವನ್ನು (the teacher)"],
              ["**ಆದೇಶ ಸಂಧಿ** (replacing)", "The first letter ಕ, ತ or ಪ of the second word is replaced by ಗ, ದ or ಬ.", "ಮಳೆ + ಕಾಲ = ಮಳೆಗಾಲ (rainy season); ಹುಲಿ + ತೊಗಲು = ಹುಲಿದೊಗಲು (tiger skin); ಕಣ್ + ಪನಿ = ಕಂಬನಿ (tears)"],
            ],
          },
          {
            type: "heading",
            text: "ಆಗಮ ಸಂಧಿ: ಯ or ವ?",
          },
          {
            type: "list",
            items: [
              "**ಯಕಾರಾಗಮ** (ಯ is added): when the first word ends in ಆ, ಇ, ಈ, ಎ, ಏ or ಐ. Examples: ಮನೆ + ಅಲ್ಲಿ = ಮನೆಯಲ್ಲಿ (in the house); ಕೈ + ಅನ್ನು = ಕೈಯನ್ನು (the hand); ಗಿರಿ + ಅನ್ನು = ಗಿರಿಯನ್ನು (the hill); ಮಳೆ + ಇಂದ = ಮಳೆಯಿಂದ (because of rain).",
              "**ವಕಾರಾಗಮ** (ವ is added): when the first word ends in ಉ, ಊ, ಋ or ಓ. Examples: ಗುರು + ಅನ್ನು = ಗುರುವನ್ನು; ಹೂ + ಅನ್ನು = ಹೂವನ್ನು (the flower); ಮಗು + ಅನ್ನು = ಮಗುವನ್ನು (the child); ಪಿತೃ + ಅನ್ನು = ಪಿತೃವನ್ನು (the father).",
            ],
          },
          {
            type: "example",
            title: "Name the sandhi",
            problem: "Split ಮನೆಯಲ್ಲಿ (maneyalli — in the house) and name the sandhi.",
            steps: [
              "Find the two parts: ಮನೆ (house) + ಅಲ್ಲಿ (in).",
              "A vowel meets a vowel: ಮನೆ ends in ಎ, and ಅಲ್ಲಿ starts with ಅ.",
              "Try dropping the ಎ: we get ಮನಲ್ಲಿ, which has no meaning. So ಲೋಪ is not possible.",
              "A new letter ಯ has come in: ಮನೆ + ಯ್ + ಅಲ್ಲಿ = ಮನೆಯಲ್ಲಿ.",
            ],
            answer: "ಮನೆ + ಅಲ್ಲಿ = ಮನೆಯಲ್ಲಿ — **ಯಕಾರಾಗಮ ಸಂಧಿ** (ಆಗಮ ಸಂಧಿ).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "ಹಣ್ಣು + ಅನ್ನು = ಹಣ್ಣನ್ನು (the fruit). Which sandhi is this?",
                options: ["ಲೋಪ ಸಂಧಿ", "ಯಕಾರಾಗಮ ಸಂಧಿ", "ವಕಾರಾಗಮ ಸಂಧಿ", "ಆದೇಶ ಸಂಧಿ"],
                answer: 0,
                explain: "The ಉ at the end of ಹಣ್ಣು drops and the meaning is still clear. No new letter is added, so it is **ಲೋಪ ಸಂಧಿ**.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "ಗುರುವನ್ನು is ಲೋಪ ಸಂಧಿ, because ಗುರು ends in ಉ just like ಊರು.",
            right: "ಗುರುವನ್ನು is **ವಕಾರಾಗಮ ಸಂಧಿ**: ಗುರು + ಅನ್ನು = ಗುರುವನ್ನು.",
            why: "Both words end in ಉ, so it feels the same. But if the ಉ of ಗುರು dropped, we would get ಗುರನ್ನು, which is wrong. A ವ is added, so it is ಆಗಮ. Always check: did a letter drop, or did a new letter come in?",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which Kannada sandhi is each word?",
              groups: ["ಲೋಪ ಸಂಧಿ", "ಆಗಮ ಸಂಧಿ", "ಆದೇಶ ಸಂಧಿ"],
              items: [
                { text: "ಊರಲ್ಲಿ (ಊರು + ಅಲ್ಲಿ)", group: 0, hint: "The ಉ of ಊರು drops. Nothing is added." },
                { text: "ಮಳೆಗಾಲ (ಮಳೆ + ಕಾಲ)", group: 2, hint: "ಕ has changed to ಗ." },
                { text: "ಕೈಯನ್ನು (ಕೈ + ಅನ್ನು)", group: 1, hint: "A ಯ has come in between." },
                { text: "ಮಾತಿಲ್ಲ (ಮಾತು + ಇಲ್ಲ)", group: 0, hint: "The ಉ of ಮಾತು drops." },
                { text: "ಹೂವನ್ನು (ಹೂ + ಅನ್ನು)", group: 1, hint: "A ವ has come in between." },
                { text: "ಹುಲಿದೊಗಲು (ಹುಲಿ + ತೊಗಲು)", group: 2, hint: "ತ has changed to ದ." },
              ],
              explain: "Ask three questions. Did a vowel drop? → **ಲೋಪ**. Did ಯ or ವ come in? → **ಆಗಮ**. Did ಕ/ತ/ಪ become ಗ/ದ/ಬ? → **ಆದೇಶ**.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC exam tip",
            md: "Sandhi questions are usually 1 mark: you split the word **and** name the sandhi. Write it like this: ಮಳೆಗಾಲ = ಮಳೆ + ಕಾಲ — ಆದೇಶ ಸಂಧಿ. If you give only the name without the split, you may lose the mark. In ಆಗಮ, say which letter came: ಯಕಾರಾಗಮ or ವಕಾರಾಗಮ.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "In ಆದೇಶ ಸಂಧಿ, the letter ಪ at the start of the second word becomes ___ .",
                answer: ["ಬ"],
                explain: "ಕ → ಗ, ತ → ದ, ಪ → ಬ. Example: ಕಣ್ + ಪನಿ = ಕಂಬನಿ.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "**ಸಂಧಿ** = joining of two sounds without a gap. ಪೂರ್ವಪದ + ಉತ್ತರಪದ.",
              "**ಲೋಪ**: the last vowel of the first word drops (ಊರು + ಅಲ್ಲಿ = ಊರಲ್ಲಿ).",
              "**ಆಗಮ**: ಯ comes after ಆ/ಇ/ಈ/ಎ/ಏ/ಐ; ವ comes after ಉ/ಊ/ಋ/ಓ (ಮನೆಯನ್ನು, ಗುರುವನ್ನು).",
              "**ಆದೇಶ**: ಕ, ತ, ಪ of the second word become ಗ, ದ, ಬ (ಮಳೆಗಾಲ).",
            ],
          },
        ],
        flashcards: [
          { front: "ಸಂಧಿ (sandhi)", back: "The joining of two sounds when two words come together without a pause." },
          { front: "ಲೋಪ ಸಂಧಿ", back: "Vowel + vowel: the last vowel of the first word drops. ಊರು + ಅಲ್ಲಿ = ಊರಲ್ಲಿ." },
          { front: "ಯಕಾರಾಗಮ ಸಂಧಿ", back: "ಯ is added after ಆ, ಇ, ಈ, ಎ, ಏ, ಐ. ಮನೆ + ಅನ್ನು = ಮನೆಯನ್ನು." },
          { front: "ವಕಾರಾಗಮ ಸಂಧಿ", back: "ವ is added after ಉ, ಊ, ಋ, ಓ. ಗುರು + ಅನ್ನು = ಗುರುವನ್ನು." },
          { front: "ಆದೇಶ ಸಂಧಿ", back: "ಕ, ತ, ಪ at the start of the second word become ಗ, ದ, ಬ. ಮಳೆ + ಕಾಲ = ಮಳೆಗಾಲ." },
          { front: "When do we use Kannada sandhi?", back: "When at least one of the two words is a Kannada word." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "ಬೆಟ್ಟ + ತಾವರೆ = ಬೆಟ್ಟದಾವರೆ (a kind of lotus). Name the sandhi.",
            options: ["ಲೋಪ ಸಂಧಿ", "ಆಗಮ ಸಂಧಿ", "ಆದೇಶ ಸಂಧಿ", "ಗುಣ ಸಂಧಿ"],
            answer: 2,
            explain: "ತ of ತಾವರೆ has become ದ. That is **ಆದೇಶ ಸಂಧಿ**. ಗುಣ is a Sanskrit sandhi of vowels.",
          },
          {
            kind: "mcq",
            q: "Which word is an example of ವಕಾರಾಗಮ ಸಂಧಿ?",
            options: ["ಮನೆಯಲ್ಲಿ", "ಮಗುವನ್ನು", "ಊರಲ್ಲಿ", "ಮಳೆಗಾಲ"],
            answer: 1,
            explain: "ಮಗು + ಅನ್ನು = ಮಗುವನ್ನು: a ವ is added. ಮನೆಯಲ್ಲಿ is ಯಕಾರಾಗಮ, ಊರಲ್ಲಿ is ಲೋಪ, ಮಳೆಗಾಲ is ಆದೇಶ.",
          },
          {
            kind: "truefalse",
            q: "In ಆಗಮ ಸಂಧಿ, a letter is dropped.",
            answer: false,
            explain: "ಆಗಮ means *coming in*: a new letter (ಯ or ವ) is added. Dropping is ಲೋಪ.",
          },
          {
            kind: "fill",
            q: "ಬೇರೆ + ಒಬ್ಬ = ___ (another person).",
            answer: ["ಬೇರೊಬ್ಬ"],
            explain: "The ಎ of ಬೇರೆ drops: ಬೇರೊಬ್ಬ. This is ಲೋಪ ಸಂಧಿ.",
          },
          {
            kind: "multi",
            q: "Which words show ಯಕಾರಾಗಮ ಸಂಧಿ? (choose all)",
            options: ["ಕೈಯನ್ನು", "ಗಿರಿಯನ್ನು", "ಹೂವನ್ನು", "ಮನೆಯಿಂದ"],
            answers: [0, 1, 3],
            explain: "ಕೈ, ಗಿರಿ and ಮನೆ end in ಐ, ಇ and ಎ, so ಯ is added. ಹೂ ends in ಊ, so ಹೂವನ್ನು takes ವ.",
            difficulty: 2,
            hint: "Look at the last vowel of the first word.",
          },
          {
            kind: "mcq",
            q: "Why is ಮನೆ + ಅನ್ನು not ಲೋಪ ಸಂಧಿ?",
            options: [
              "Because ಮನೆ is a Sanskrit word",
              "Because dropping ಎ gives ಮನನ್ನು, which has no meaning",
              "Because ಅನ್ನು starts with a consonant",
              "Because ಕ changes to ಗ",
            ],
            answer: 1,
            explain: "ಲೋಪ happens only when the meaning stays clear. ಮನನ್ನು is wrong, so ಯ is added: ಮನೆಯನ್ನು.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Put the steps for naming a Kannada sandhi in order.",
            items: [
              "Split the word into ಪೂರ್ವಪದ and ಉತ್ತರಪದ",
              "See which letters meet at the joint",
              "Check: dropped, added or replaced?",
              "Write the split and the sandhi name",
            ],
            explain: "Split first, look at the joint, decide ಲೋಪ / ಆಗಮ / ಆದೇಶ, then write both the split and the name.",
          },
        ],
      },
      {
        slug: "sanskrit-sandhi",
        title: "Sanskrit Sandhi: Vowel and Consonant Sandhis",
        summary: "The four vowel sandhis (ಸವರ್ಣದೀರ್ಘ, ಗುಣ, ವೃದ್ಧಿ, ಯಣ್) and three consonant sandhis (ಜಶ್ತ್ವ, ಶ್ಚುತ್ವ, ಅನುನಾಸಿಕ) used when both words are Sanskrit.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Many Kannada words come from Sanskrit: ದೇವಾಲಯ (temple), ಸೂರ್ಯೋದಯ (sunrise), ವಿದ್ಯಾಭ್ಯಾಸ (education). When *both* parts are Sanskrit words, we use **ಸಂಸ್ಕೃತ ಸಂಧಿ** (Sanskrit sandhi).\n\nSanskrit sandhi has two groups. **ಸ್ವರ ಸಂಧಿ** (vowel sandhi) happens when a vowel meets a vowel. **ವ್ಯಂಜನ ಸಂಧಿ** (consonant sandhi) happens when a consonant is at the joint.",
          },
          {
            type: "heading",
            text: "ಸ್ವರ ಸಂಧಿ (vowel sandhi)",
          },
          {
            type: "table",
            headers: ["Sandhi", "Rule", "Examples"],
            rows: [
              ["**ಸವರ್ಣದೀರ್ಘ** (same vowel → long vowel)", "Two vowels of the same kind meet (ಅ/ಆ + ಅ/ಆ, ಇ/ಈ + ಇ/ಈ, ಉ/ಊ + ಉ/ಊ). They become one long vowel ಆ, ಈ or ಊ.", "ದೇವ + ಆಲಯ = ದೇವಾಲಯ; ವಿದ್ಯಾ + ಅಭ್ಯಾಸ = ವಿದ್ಯಾಭ್ಯಾಸ; ರವಿ + ಇಂದ್ರ = ರವೀಂದ್ರ; ಗುರು + ಉಪದೇಶ = ಗುರೂಪದೇಶ"],
              ["**ಗುಣ**", "ಅ/ಆ + ಇ/ಈ → ಏ; ಅ/ಆ + ಉ/ಊ → ಓ; ಅ/ಆ + ಋ → ಅರ್", "ದೇವ + ಇಂದ್ರ = ದೇವೇಂದ್ರ; ಗಣ + ಈಶ = ಗಣೇಶ; ಸೂರ್ಯ + ಉದಯ = ಸೂರ್ಯೋದಯ; ಮಹಾ + ಋಷಿ = ಮಹರ್ಷಿ"],
              ["**ವೃದ್ಧಿ**", "ಅ/ಆ + ಏ/ಐ → ಐ; ಅ/ಆ + ಓ/ಔ → ಔ", "ಏಕ + ಏಕ = ಏಕೈಕ (the only one); ಜನ + ಐಕ್ಯ = ಜನೈಕ್ಯ (unity of people); ವನ + ಓಷಧಿ = ವನೌಷಧಿ (forest herbs)"],
              ["**ಯಣ್**", "ಇ/ಈ, ಉ/ಊ, ಋ meet a *different* vowel. They change to ಯ್, ವ್, ರ್.", "ಅತಿ + ಅಂತ = ಅತ್ಯಂತ (very); ಇತಿ + ಆದಿ = ಇತ್ಯಾದಿ (and so on); ಮನು + ಅಂತರ = ಮನ್ವಂತರ; ಪಿತೃ + ಆರ್ಜಿತ = ಪಿತ್ರಾರ್ಜಿತ (got from father)"],
            ],
          },
          {
            type: "heading",
            text: "ವ್ಯಂಜನ ಸಂಧಿ (consonant sandhi)",
          },
          {
            type: "table",
            headers: ["Sandhi", "Rule", "Examples"],
            rows: [
              ["**ಜಶ್ತ್ವ**", "The hard consonants ಕ, ಚ, ಟ, ತ, ಪ at the end of the first word become the soft ಗ, ಜ, ಡ, ದ, ಬ (before a vowel or a soft consonant).", "ವಾಕ್ + ಈಶ = ವಾಗೀಶ; ದಿಕ್ + ಅಂತ = ದಿಗಂತ (horizon); ಷಟ್ + ಆನನ = ಷಡಾನನ; ಸತ್ + ಆನಂದ = ಸದಾನಂದ"],
              ["**ಶ್ಚುತ್ವ**", "ಸ or a ತ-group letter meets ಶ or a ಚ-group letter. It becomes ಶ or a ಚ-group letter.", "ಮನಸ್ + ಶುದ್ಧಿ = ಮನಶ್ಶುದ್ಧಿ; ಸತ್ + ಚರಿತ್ರೆ = ಸಚ್ಚರಿತ್ರೆ (good character); ಶರತ್ + ಚಂದ್ರ = ಶರಚ್ಚಂದ್ರ; ಜಗತ್ + ಜ್ಯೋತಿ = ಜಗಜ್ಜ್ಯೋತಿ"],
              ["**ಅನುನಾಸಿಕ**", "A group consonant meets a nasal (ಙ, ಞ, ಣ, ನ, ಮ). It becomes the nasal of its own group.", "ವಾಕ್ + ಮಯ = ವಾಙ್ಮಯ (literature); ಷಟ್ + ಮುಖ = ಷಣ್ಮುಖ; ಚಿತ್ + ಮಯ = ಚಿನ್ಮಯ; ಜಗತ್ + ನಾಥ = ಜಗನ್ನಾಥ"],
            ],
          },
          {
            type: "example",
            title: "Split and name",
            problem: "Split ಸೂರ್ಯೋದಯ (sooryodaya — sunrise) and name the sandhi.",
            steps: [
              "Both parts are Sanskrit: ಸೂರ್ಯ (sun) + ಉದಯ (rising). So it is a Sanskrit sandhi.",
              "At the joint, ಅ (end of ಸೂರ್ಯ) meets ಉ (start of ಉದಯ). They are different vowels, so it is not ಸವರ್ಣದೀರ್ಘ.",
              "ಅ + ಉ has become ಓ. The rule ಅ + ಉ → ಓ is ಗುಣ ಸಂಧಿ.",
            ],
            answer: "ಸೂರ್ಯ + ಉದಯ = ಸೂರ್ಯೋದಯ — **ಗುಣ ಸಂಧಿ**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "ಹಿಮ + ಆಲಯ = ಹಿಮಾಲಯ. Which sandhi?",
                options: ["ಗುಣ", "ಸವರ್ಣದೀರ್ಘ", "ವೃದ್ಧಿ", "ಯಣ್"],
                answer: 1,
                explain: "ಅ + ಆ are the same kind of vowel; they become one long ಆ. That is **ಸವರ್ಣದೀರ್ಘ**.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "ದೇವಾಲಯ is ಲೋಪ ಸಂಧಿ, because the ಅ of ದೇವ has disappeared.",
            right: "ದೇವಾಲಯ is **ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ**: ದೇವ + ಆಲಯ, ಅ + ಆ = ಆ.",
            why: "It looks like a vowel has dropped. But ದೇವ and ಆಲಯ are both Sanskrit words, so we must use a Sanskrit sandhi. ಲೋಪ is a Kannada sandhi. The two similar vowels joined into one long vowel.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each word by its vowel sandhi.",
              groups: ["ಸವರ್ಣದೀರ್ಘ", "ಗುಣ", "ಯಣ್"],
              items: [
                { text: "ವಿದ್ಯಾಭ್ಯಾಸ", group: 0, hint: "ವಿದ್ಯಾ + ಅಭ್ಯಾಸ: ಆ + ಅ = ಆ." },
                { text: "ದೇವೇಂದ್ರ", group: 1, hint: "ದೇವ + ಇಂದ್ರ: ಅ + ಇ = ಏ." },
                { text: "ಅತ್ಯಂತ", group: 2, hint: "ಅತಿ + ಅಂತ: ಇ became ಯ್." },
                { text: "ರವೀಂದ್ರ", group: 0, hint: "ರವಿ + ಇಂದ್ರ: ಇ + ಇ = ಈ." },
                { text: "ಮಹರ್ಷಿ", group: 1, hint: "ಮಹಾ + ಋಷಿ: ಆ + ಋ = ಅರ್." },
                { text: "ಇತ್ಯಾದಿ", group: 2, hint: "ಇತಿ + ಆದಿ: ಇ became ಯ್." },
              ],
              explain: "Same vowels → one long vowel (**ಸವರ್ಣದೀರ್ಘ**). ಅ/ಆ with ಇ, ಉ, ಋ → ಏ, ಓ, ಅರ್ (**ಗುಣ**). ಇ, ಉ, ಋ before a different vowel → ಯ್, ವ್, ರ್ (**ಯಣ್**).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC exam tip",
            md: "Students often mix up **ಗುಣ** and **ವೃದ್ಧಿ**. Remember: ಗುಣ gives ಏ or ಓ; ವೃದ್ಧಿ gives the bigger vowels ಐ or ಔ. ವನೌಷಧಿ has ಔ, so it is ವೃದ್ಧಿ, not ಗುಣ. Also, in a multiple choice question, a Kannada sandhi name (ಲೋಪ, ಆಗಮ, ಆದೇಶ) is usually wrong for a word made of two Sanskrit words.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "ಷಟ್ + ಮುಖ = ___ (Shanmukha). This is ಅನುನಾಸಿಕ ಸಂಧಿ.",
                answer: ["ಷಣ್ಮುಖ"],
                explain: "ಟ meets the nasal ಮ and becomes ಣ, the nasal of the ಟ group: ಷಣ್ಮುಖ.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Sanskrit sandhi is used when **both** words are Sanskrit.",
              "Vowel sandhis: **ಸವರ್ಣದೀರ್ಘ** (ದೇವಾಲಯ), **ಗುಣ** (ಸೂರ್ಯೋದಯ), **ವೃದ್ಧಿ** (ಏಕೈಕ), **ಯಣ್** (ಅತ್ಯಂತ).",
              "Consonant sandhis: **ಜಶ್ತ್ವ** (ವಾಗೀಶ), **ಶ್ಚುತ್ವ** (ಮನಶ್ಶುದ್ಧಿ), **ಅನುನಾಸಿಕ** (ವಾಙ್ಮಯ).",
              "ಗುಣ → ಏ, ಓ, ಅರ್. ವೃದ್ಧಿ → ಐ, ಔ.",
            ],
          },
        ],
        flashcards: [
          { front: "ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ", back: "Two vowels of the same kind join into one long vowel. ದೇವ + ಆಲಯ = ದೇವಾಲಯ." },
          { front: "ಗುಣ ಸಂಧಿ", back: "ಅ/ಆ + ಇ/ಈ = ಏ; ಅ/ಆ + ಉ/ಊ = ಓ; ಅ/ಆ + ಋ = ಅರ್. ಸೂರ್ಯ + ಉದಯ = ಸೂರ್ಯೋದಯ." },
          { front: "ವೃದ್ಧಿ ಸಂಧಿ", back: "ಅ/ಆ + ಏ/ಐ = ಐ; ಅ/ಆ + ಓ/ಔ = ಔ. ಏಕ + ಏಕ = ಏಕೈಕ." },
          { front: "ಯಣ್ ಸಂಧಿ", back: "ಇ, ಉ, ಋ before a different vowel become ಯ್, ವ್, ರ್. ಇತಿ + ಆದಿ = ಇತ್ಯಾದಿ." },
          { front: "ಜಶ್ತ್ವ ಸಂಧಿ", back: "ಕ ಚ ಟ ತ ಪ → ಗ ಜ ಡ ದ ಬ. ದಿಕ್ + ಅಂತ = ದಿಗಂತ." },
          { front: "ಶ್ಚುತ್ವ ಸಂಧಿ", back: "ಸ / ತ-group meets ಶ / ಚ-group and becomes ಶ / ಚ-group. ಮನಸ್ + ಶುದ್ಧಿ = ಮನಶ್ಶುದ್ಧಿ." },
          { front: "ಅನುನಾಸಿಕ ಸಂಧಿ", back: "A consonant before a nasal becomes the nasal of its group. ಜಗತ್ + ನಾಥ = ಜಗನ್ನಾಥ." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "ವನ + ಓಷಧಿ = ವನೌಷಧಿ. Name the sandhi.",
            options: ["ಗುಣ", "ವೃದ್ಧಿ", "ಸವರ್ಣದೀರ್ಘ", "ಲೋಪ"],
            answer: 1,
            explain: "ಅ + ಓ has become ಔ. That is **ವೃದ್ಧಿ**. ಗುಣ would give only ಓ.",
          },
          {
            kind: "mcq",
            q: "Split ಸದಾನಂದ (sadaananda) and name the sandhi.",
            options: ["ಸದಾ + ಆನಂದ — ಸವರ್ಣದೀರ್ಘ", "ಸತ್ + ಆನಂದ — ಜಶ್ತ್ವ", "ಸತ್ + ಆನಂದ — ಶ್ಚುತ್ವ", "ಸದ + ಆನಂದ — ಗುಣ"],
            answer: 1,
            explain: "ಸತ್ (good) + ಆನಂದ (joy): ತ has become the soft ದ. That is **ಜಶ್ತ್ವ ಸಂಧಿ**.",
            difficulty: 2,
            hint: "Which hard consonant becomes ದ?",
          },
          {
            kind: "fill",
            q: "ಗುರು + ಉಪದೇಶ = ___ (ಸವರ್ಣದೀರ್ಘ ಸಂಧಿ).",
            answer: ["ಗುರೂಪದೇಶ"],
            explain: "ಉ + ಉ = ಊ, so ಗುರೂಪದೇಶ.",
          },
          {
            kind: "truefalse",
            q: "ಅತ್ಯಂತ (ಅತಿ + ಅಂತ) is an example of ಯಣ್ ಸಂಧಿ.",
            answer: true,
            explain: "The ಇ of ಅತಿ meets a different vowel ಅ and becomes ಯ್: ಅತ್ಯಂತ.",
          },
          {
            kind: "mcq",
            q: "ಸತ್ + ಚರಿತ್ರೆ = ಸಚ್ಚರಿತ್ರೆ. Name the sandhi.",
            options: ["ಜಶ್ತ್ವ", "ಅನುನಾಸಿಕ", "ಶ್ಚುತ್ವ", "ಆದೇಶ"],
            answer: 2,
            explain: "ತ meets ಚ and becomes ಚ. A ತ-group letter turning into a ಚ-group letter is **ಶ್ಚುತ್ವ**.",
          },
          {
            kind: "multi",
            q: "Which of these are ವ್ಯಂಜನ ಸಂಧಿ (consonant sandhi)? (choose all)",
            options: ["ಜಶ್ತ್ವ", "ಯಣ್", "ಅನುನಾಸಿಕ", "ಶ್ಚುತ್ವ"],
            answers: [0, 2, 3],
            explain: "ಜಶ್ತ್ವ, ಶ್ಚುತ್ವ and ಅನುನಾಸಿಕ are consonant sandhis. ಯಣ್ is a vowel sandhi.",
          },
          {
            kind: "mcq",
            q: "ಗಣ + ಈಶ = ?",
            options: ["ಗಣೀಶ", "ಗಣೇಶ", "ಗಣೈಶ", "ಗಣ್ಯೀಶ"],
            answer: 1,
            explain: "ಅ + ಈ = ಏ (ಗುಣ ಸಂಧಿ), so ಗಣೇಶ.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "ವಾಕ್ + ಮಯ = ವಾಙ್ಮಯ. Why does ಕ become ಙ?",
            options: [
              "Because ಙ is the nasal of the ಕ group and the next letter ಮ is a nasal",
              "Because ಕ always becomes ಙ",
              "Because a vowel follows",
              "Because both words are Kannada",
            ],
            answer: 0,
            explain: "In **ಅನುನಾಸಿಕ ಸಂಧಿ** the consonant before a nasal becomes the nasal of its own group: ಕ → ಙ.",
            difficulty: 3,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "kannada-samasa",
    title: "Samasa (ಸಮಾಸ)",
    icon: "🧩",
    description: "Joining words into one compound word: ತತ್ಪುರುಷ, ಕರ್ಮಧಾರಯ, ದ್ವಿಗು, ಅಂಶಿ, ದ್ವಂದ್ವ, ಬಹುವ್ರೀಹಿ, ಕ್ರಿಯಾ and ಗಮಕ ಸಮಾಸ.",
    lessons: [
      {
        slug: "samasa-tatpurusha-karmadharaya-dvigu-amshi",
        title: "Samasa 1: ತತ್ಪುರುಷ, ಕರ್ಮಧಾರಯ, ದ್ವಿಗು, ಅಂಶಿ",
        summary: "What a ಸಮಾಸ is, how to write its ವಿಗ್ರಹ ವಾಕ್ಯ, and four types: ತತ್ಪುರುಷ, ಕರ್ಮಧಾರಯ, ದ್ವಿಗು and ಅಂಶಿ.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🏰",
            caption: "ಅರಸನ ಮನೆ (arasana mane — the king's house) becomes one word: ಅರಮನೆ (aramane — palace).",
          },
          {
            type: "text",
            md: "Sometimes two or more words join to make one word, and the case suffix between them (like ಅ in ಅರಸನ) drops. This joining of *meanings* is called **ಸಮಾಸ** (samasa — compound word).\n\nThe joined word is the **ಸಮಸ್ತ ಪದ** (compound word). When we break it back into words with their suffixes, that sentence is the **ವಿಗ್ರಹ ವಾಕ್ಯ** (vigraha vakya — the split-up meaning).\n\n**ಸಂಧಿ vs ಸಮಾಸ:** sandhi joins *sounds* (letters at the joint). Samasa joins *words and meanings*. One word can show both: in ಮರಗಾಲು, the words join (samasa) and ಕ becomes ಗ (ಆದೇಶ sandhi).",
          },
          {
            type: "table",
            headers: ["Samasa", "How to spot it", "ವಿಗ್ರಹ ವಾಕ್ಯ = ಸಮಸ್ತ ಪದ"],
            rows: [
              ["**ತತ್ಪುರುಷ**", "The meaning of the **second** word is the main one. The first word had a case suffix (often ಅ — 'of').", "ಅರಸನ + ಮನೆ = ಅರಮನೆ (palace); ಮರದ + ಕಾಲು = ಮರಗಾಲು (wooden leg); ಕಣ್ಣಿನ + ನೀರು = ಕಣ್ಣೀರು (tears); ತಲೆಯ + ನೋವು = ತಲೆನೋವು (headache)"],
              ["**ಕರ್ಮಧಾರಯ**", "The first word is an **adjective** (ವಿಶೇಷಣ — describing word), the second is a noun.", "ಕೆಂಪು + ತಾವರೆ = ಕೆಂದಾವರೆ (red lotus); ಹಿರಿದು + ಮರ = ಹೆಮ್ಮರ (big tree); ಹೊಸದು + ಕನ್ನಡ = ಹೊಸಗನ್ನಡ (new Kannada); ಹಿರಿದು + ಬಾಗಿಲು = ಹೆಬ್ಬಾಗಿಲು (main door)"],
              ["**ದ್ವಿಗು**", "The first word is a **number** (ಸಂಖ್ಯೆ).", "ಎರಡು + ಮಡಿ = ಇಮ್ಮಡಿ (double); ಮೂರು + ಮಡಿ = ಮುಮ್ಮಡಿ (three times); ಎರಡು + ಕೆಲ = ಇಕ್ಕೆಲ (both sides)"],
              ["**ಅಂಶಿ**", "One word is a **part** (ಅಂಶ) of the other, the whole (ಅಂಶಿ). The part word comes first.", "ಕೈಯ + ಮುಂದು = ಮುಂಗೈ (forearm); ತಲೆಯ + ಮುಂದು = ಮುಂದಲೆ (front of the head); ಕೈಯ + ಅಡಿ = ಅಂಗೈ (palm); ಬೆರಳಿನ + ತುದಿ = ತುದಿಬೆರಳು (fingertip)"],
            ],
          },
          {
            type: "example",
            title: "Write the vigraha and name the samasa",
            problem: "Write the ವಿಗ್ರಹ ವಾಕ್ಯ of ಕೆಂದಾವರೆ (kendaavare) and name the samasa.",
            steps: [
              "Find the two parts: ಕೆಂ (from ಕೆಂಪು — red) + ದಾವರೆ (from ತಾವರೆ — lotus).",
              "Ask: what is the first word? ಕೆಂಪು tells us *what kind* of lotus. It is an adjective (ವಿಶೇಷಣ).",
              "The second word ತಾವರೆ is a noun. Adjective + noun = **ಕರ್ಮಧಾರಯ**.",
              "Write it as: ಕೆಂಪು + ತಾವರೆ = ಕೆಂದಾವರೆ.",
            ],
            answer: "ಕೆಂಪಾದ ತಾವರೆ (the lotus that is red) → ಕೆಂಪು + ತಾವರೆ = ಕೆಂದಾವರೆ — **ಕರ್ಮಧಾರಯ ಸಮಾಸ**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "ಇಮ್ಮಡಿ (immadi — double) = ಎರಡು + ಮಡಿ. Which samasa?",
                options: ["ತತ್ಪುರುಷ", "ಕರ್ಮಧಾರಯ", "ದ್ವಿಗು", "ಅಂಶಿ"],
                answer: 2,
                explain: "The first word ಎರಡು is a number, so it is **ದ್ವಿಗು**.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "ಹೆಮ್ಮರ is ತತ್ಪುರುಷ, because the second word ಮರ is the main word.",
            right: "ಹೆಮ್ಮರ (ಹಿರಿದು + ಮರ) is **ಕರ್ಮಧಾರಯ**, because the first word is an adjective.",
            why: "In both ತತ್ಪುರುಷ and ಕರ್ಮಧಾರಯ the second word is the main one, so they look alike. Look at the first word: if it *describes* (big, red, new), it is ಕರ್ಮಧಾರಯ. If it has an 'of' meaning (ಅರಸನ — of the king), it is ತತ್ಪುರುಷ.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which samasa is each word?",
              groups: ["ತತ್ಪುರುಷ", "ಕರ್ಮಧಾರಯ", "ದ್ವಿಗು"],
              items: [
                { text: "ಅರಮನೆ", group: 0, hint: "ಅರಸನ + ಮನೆ: the king's house." },
                { text: "ಹೆಬ್ಬಾಗಿಲು", group: 1, hint: "ಹಿರಿದು + ಬಾಗಿಲು: 'big' describes the door." },
                { text: "ಮುಮ್ಮಡಿ", group: 2, hint: "ಮೂರು + ಮಡಿ: starts with a number." },
                { text: "ಕಣ್ಣೀರು", group: 0, hint: "ಕಣ್ಣಿನ + ನೀರು: water of the eye." },
                { text: "ಹೊಸಗನ್ನಡ", group: 1, hint: "ಹೊಸದು + ಕನ್ನಡ: 'new' describes Kannada." },
                { text: "ಇಕ್ಕೆಲ", group: 2, hint: "ಎರಡು + ಕೆಲ: starts with a number." },
              ],
              explain: "First word with 'of' (ಅ, ಇನ) → **ತತ್ಪುರುಷ**. First word an adjective → **ಕರ್ಮಧಾರಯ**. First word a number → **ದ್ವಿಗು**.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC exam tip",
            md: "For a samasa question, write the **ವಿಗ್ರಹ ವಾಕ್ಯ** with the case suffixes, then the samasa name: ಅರಮನೆ = ಅರಸನ + ಮನೆ — ತತ್ಪುರುಷ ಸಮಾಸ. A frequent error is to write only ಅರಸ + ಮನೆ without the suffix ಅ (ಅರಸನ). Do not confuse the sandhi name with the samasa name.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "ಕೈಯ + ಅಡಿ = ___ (palm). This is ಅಂಶಿ ಸಮಾಸ.",
                answer: ["ಅಂಗೈ"],
                explain: "The underside (ಅಡಿ) is a part of the hand (ಕೈ): ಅಂಗೈ.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "**ಸಮಾಸ** joins words and meanings; **ಸಂಧಿ** joins sounds.",
              "**ವಿಗ್ರಹ ವಾಕ್ಯ** breaks a compound back into words with suffixes.",
              "**ತತ್ಪುರುಷ**: second word main, first has 'of' (ಅರಮನೆ). **ಕರ್ಮಧಾರಯ**: adjective + noun (ಕೆಂದಾವರೆ).",
              "**ದ್ವಿಗು**: first word a number (ಇಮ್ಮಡಿ). **ಅಂಶಿ**: part + whole (ಮುಂಗೈ).",
            ],
          },
        ],
        flashcards: [
          { front: "ಸಮಾಸ", back: "Two or more words join into one word and the case suffix between them drops." },
          { front: "ವಿಗ್ರಹ ವಾಕ್ಯ", back: "The compound broken back into words with suffixes, e.g. ಅರಸನ + ಮನೆ." },
          { front: "ತತ್ಪುರುಷ ಸಮಾಸ", back: "Second word's meaning is main. ಮರದ + ಕಾಲು = ಮರಗಾಲು." },
          { front: "ಕರ್ಮಧಾರಯ ಸಮಾಸ", back: "Adjective + noun. ಹಿರಿದು + ಮರ = ಹೆಮ್ಮರ." },
          { front: "ದ್ವಿಗು ಸಮಾಸ", back: "First word is a number. ಎರಡು + ಮಡಿ = ಇಮ್ಮಡಿ." },
          { front: "ಅಂಶಿ ಸಮಾಸ", back: "A part and its whole. ತಲೆಯ + ಮುಂದು = ಮುಂದಲೆ." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "ತಲೆನೋವು (headache) is which samasa?",
            options: ["ತತ್ಪುರುಷ", "ದ್ವಿಗು", "ಕರ್ಮಧಾರಯ", "ಅಂಶಿ"],
            answer: 0,
            explain: "ತಲೆಯ + ನೋವು: pain *of* the head. The second word is main → **ತತ್ಪುರುಷ**.",
          },
          {
            kind: "mcq",
            q: "Which is the correct ವಿಗ್ರಹ ವಾಕ್ಯ of ಅರಮನೆ?",
            options: ["ಅರ + ಮನೆ", "ಅರಸ + ಮನೆ", "ಅರಸನ + ಮನೆ", "ಅರಸನು + ಮನೆ"],
            answer: 2,
            explain: "The vigraha keeps the case suffix: ಅರಸನ (of the king) + ಮನೆ.",
            difficulty: 2,
            hint: "The vigraha shows the 'of' suffix.",
          },
          {
            kind: "truefalse",
            q: "In ದ್ವಿಗು ಸಮಾಸ, the first word is a number.",
            answer: true,
            explain: "ದ್ವಿಗು compounds start with a number: ಇಮ್ಮಡಿ, ಮುಮ್ಮಡಿ, ಇಕ್ಕೆಲ.",
          },
          {
            kind: "fill",
            q: "ಹಿರಿದು + ಮರ = ___ (ಕರ್ಮಧಾರಯ ಸಮಾಸ).",
            answer: ["ಹೆಮ್ಮರ"],
            explain: "ಹಿರಿದು (big) + ಮರ (tree) = ಹೆಮ್ಮರ (a huge tree).",
          },
          {
            kind: "mcq",
            q: "ಮುಂಗೈ (forearm) is ಅಂಶಿ ಸಮಾಸ because:",
            options: [
              "the first word is a number",
              "the front (ಮುಂದು) is a part of the hand (ಕೈ)",
              "both words are equally important",
              "the first word is an adjective",
            ],
            answer: 1,
            explain: "In **ಅಂಶಿ** one word is a part of the other: the front part of the hand.",
          },
          {
            kind: "multi",
            q: "Which words are ಕರ್ಮಧಾರಯ ಸಮಾಸ? (choose all)",
            options: ["ಕೆಂದಾವರೆ", "ಹೆಬ್ಬಾಗಿಲು", "ಕಣ್ಣೀರು", "ಹೊಸಗನ್ನಡ"],
            answers: [0, 1, 3],
            explain: "ಕೆಂಪು, ಹಿರಿದು and ಹೊಸದು are adjectives. ಕಣ್ಣೀರು (ಕಣ್ಣಿನ + ನೀರು) is ತತ್ಪುರುಷ.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "ಸಂಧಿ and ಸಮಾಸ are the same thing.",
            answer: false,
            explain: "ಸಂಧಿ is about sounds joining at the joint. ಸಮಾಸ is about words and meanings joining. One word can show both.",
          },
        ],
      },
      {
        slug: "samasa-dvandva-bahuvrihi-kriya-gamaka",
        title: "Samasa 2: ದ್ವಂದ್ವ, ಬಹುವ್ರೀಹಿ, ಕ್ರಿಯಾ, ಗಮಕ",
        summary: "Four more samasas: all words equal (ದ್ವಂದ್ವ), a third meaning (ಬಹುವ್ರೀಹಿ), noun + verb (ಕ್ರಿಯಾ) and pronoun or verb-form + noun (ಗಮಕ).",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "In the last lesson, the second word was usually the main one. Now we meet samasas where the main meaning is somewhere else.\n\nIn **ದ್ವಂದ್ವ**, *all* words are equally important. In **ಬಹುವ್ರೀಹಿ**, *none* of the words is the main meaning: the compound points to a third person or thing.",
          },
          {
            type: "table",
            headers: ["Samasa", "How to spot it", "ವಿಗ್ರಹ ವಾಕ್ಯ = ಸಮಸ್ತ ಪದ"],
            rows: [
              ["**ದ್ವಂದ್ವ**", "All words are equal. The vigraha joins them with ಊ / ಉ ('and'). The compound is usually plural.", "ಗಿಡವೂ + ಮರವೂ = ಗಿಡಮರಗಳು (plants and trees); ತಂದೆಯೂ + ತಾಯಿಯೂ = ತಂದೆತಾಯಿಗಳು (parents); ಕೆರೆಯೂ + ಕಟ್ಟೆಯೂ + ಬಾವಿಯೂ = ಕೆರೆಕಟ್ಟೆಬಾವಿಗಳು; ಹಗಲೂ + ಇರುಳೂ = ಹಗಲಿರುಳು (day and night)"],
              ["**ಬಹುವ್ರೀಹಿ**", "The words together point to a **third** person or thing. The vigraha ends with ಯಾವನೋ ಅವನು / ಯಾವಳೋ ಅವಳು / ಯಾವುದೋ ಅದು.", "ಮೂರು ಕಣ್ಣುಳ್ಳವನು ಯಾವನೋ ಅವನು = ಮುಕ್ಕಣ್ಣ (Shiva); ಚಕ್ರವು ಪಾಣಿಯಲ್ಲಿ ಯಾವನಿಗೋ ಅವನು = ಚಕ್ರಪಾಣಿ (Vishnu); ಹಣೆಯಲ್ಲಿ ಕಣ್ಣುಳ್ಳವನು ಯಾವನೋ ಅವನು = ಹಣೆಗಣ್ಣ (Shiva)"],
              ["**ಕ್ರಿಯಾ**", "The first word is a noun (usually with ಅನ್ನು), the second is a **verb** (ಕ್ರಿಯಾಪದ).", "ಕೈಯನ್ನು + ಮುಗಿ = ಕೈಮುಗಿ (fold hands); ಕಣ್ಣನ್ನು + ತೆರೆ = ಕಣ್ದೆರೆ (open eyes); ತಲೆಯನ್ನು + ಬಾಗು = ತಲೆಬಾಗು (bow the head); ಮೈಯನ್ನು + ಮರೆ = ಮೈಮರೆ (forget oneself)"],
              ["**ಗಮಕ**", "The first word is a pronoun (ಸರ್ವನಾಮ) or a verb-form (ಕೃದಂತ), the second is a noun.", "ಅವನು + ಹುಡುಗ = ಆ ಹುಡುಗ (that boy); ಮಾಡಿದುದು + ಅಡಿಗೆ = ಮಾಡಿದಡಿಗೆ (cooked food); ಸುಟ್ಟುದು + ಇಟ್ಟಿಗೆ = ಸುಟ್ಟಿಟ್ಟಿಗೆ (baked brick)"],
            ],
          },
          {
            type: "example",
            title: "Is it ದ್ವಿಗು or ಬಹುವ್ರೀಹಿ?",
            problem: "ಮುಕ್ಕಣ್ಣ (mukkanna) starts with a number, ಮೂರು (three). Is it ದ್ವಿಗು or ಬಹುವ್ರೀಹಿ?",
            steps: [
              "Ask: does the word mean 'three eyes'? No. It means *the one who has three eyes*, that is, Lord Shiva.",
              "So the meaning is not 'three' and not 'eyes'. It points to a third person.",
              "When a compound points to someone else, it is **ಬಹುವ್ರೀಹಿ**. Write the vigraha with ಯಾವನೋ ಅವನು.",
            ],
            answer: "ಮೂರು ಕಣ್ಣುಳ್ಳವನು ಯಾವನೋ ಅವನು = ಮುಕ್ಕಣ್ಣ — **ಬಹುವ್ರೀಹಿ ಸಮಾಸ**. (ಮುಕ್ಕಣ್ಣು, meaning just 'three eyes', would be ದ್ವಿಗು.)",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "ತಂದೆತಾಯಿಗಳು (parents). Which samasa?",
                options: ["ತತ್ಪುರುಷ", "ದ್ವಂದ್ವ", "ಬಹುವ್ರೀಹಿ", "ಕ್ರಿಯಾ"],
                answer: 1,
                explain: "ತಂದೆಯೂ ತಾಯಿಯೂ: both words are equally important. That is **ದ್ವಂದ್ವ**.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "ಚಕ್ರಪಾಣಿ is ತತ್ಪುರುಷ, because it means 'the hand of the wheel'.",
            right: "ಚಕ್ರಪಾಣಿ is **ಬಹುವ್ರೀಹಿ**: it means the one who has a discus (ಚಕ್ರ) in his hand (ಪಾಣಿ) — Vishnu.",
            why: "Students translate the two words and stop. Always ask: who or what is the word talking about? If the answer is a third person (Vishnu, Shiva), it is ಬಹುವ್ರೀಹಿ.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which samasa is each word?",
              groups: ["ದ್ವಂದ್ವ", "ಬಹುವ್ರೀಹಿ", "ಕ್ರಿಯಾ"],
              items: [
                { text: "ಗಿಡಮರಗಳು", group: 0, hint: "ಗಿಡವೂ ಮರವೂ: both equal." },
                { text: "ಹಣೆಗಣ್ಣ", group: 1, hint: "The one with an eye on the forehead: Shiva." },
                { text: "ಕೈಮುಗಿ", group: 2, hint: "ಕೈಯನ್ನು ಮುಗಿ: noun + verb." },
                { text: "ಹಗಲಿರುಳು", group: 0, hint: "ಹಗಲೂ ಇರುಳೂ: day and night, both equal." },
                { text: "ಚಕ್ರಪಾಣಿ", group: 1, hint: "Points to Vishnu, a third person." },
                { text: "ತಲೆಬಾಗು", group: 2, hint: "ತಲೆಯನ್ನು ಬಾಗು: the second word is a verb." },
              ],
              explain: "'And' between equal words → **ದ್ವಂದ್ವ**. Points to a third person → **ಬಹುವ್ರೀಹಿ**. Ends in a verb → **ಕ್ರಿಯಾ**.",
            },
          },
          {
            type: "table",
            headers: ["Which word is main?", "Samasa"],
            rows: [
              ["Second word", "ತತ್ಪುರುಷ, ಕರ್ಮಧಾರಯ, ದ್ವಿಗು"],
              ["First word (the part)", "ಅಂಶಿ"],
              ["All words equally", "ದ್ವಂದ್ವ"],
              ["None — a third person or thing", "ಬಹುವ್ರೀಹಿ"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC exam tip",
            md: "A ಬಹುವ್ರೀಹಿ answer gets full marks only if the vigraha ends with **ಯಾವನೋ ಅವನು** (or ಯಾವಳೋ ಅವಳು / ಯಾವುದೋ ಅದು). For ದ್ವಂದ್ವ, show the 'and' with ಊ: ಗಿಡವೂ ಮರವೂ.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "ಕಣ್ಣನ್ನು + ತೆರೆ = ___ (ಕ್ರಿಯಾ ಸಮಾಸ).",
                answer: ["ಕಣ್ದೆರೆ"],
                explain: "ಕಣ್ಣನ್ನು ತೆರೆ = ಕಣ್ದೆರೆ (open the eyes). ತ becomes ದ by ಆದೇಶ sandhi too.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "**ದ್ವಂದ್ವ**: all words equal, joined by ಊ ('and') — ಗಿಡಮರಗಳು.",
              "**ಬಹುವ್ರೀಹಿ**: points to a third person or thing — ಮುಕ್ಕಣ್ಣ, ಚಕ್ರಪಾಣಿ. Vigraha ends with ಯಾವನೋ ಅವನು.",
              "**ಕ್ರಿಯಾ**: noun + verb — ಕೈಮುಗಿ, ತಲೆಬಾಗು.",
              "**ಗಮಕ**: pronoun or verb-form + noun — ಆ ಹುಡುಗ, ಮಾಡಿದಡಿಗೆ.",
            ],
          },
        ],
        flashcards: [
          { front: "ದ್ವಂದ್ವ ಸಮಾಸ", back: "All words are equally important. ತಂದೆಯೂ ತಾಯಿಯೂ = ತಂದೆತಾಯಿಗಳು." },
          { front: "ಬಹುವ್ರೀಹಿ ಸಮಾಸ", back: "The compound points to a third person or thing. ಮೂರು ಕಣ್ಣುಳ್ಳವನು ಯಾವನೋ ಅವನು = ಮುಕ್ಕಣ್ಣ." },
          { front: "ಕ್ರಿಯಾ ಸಮಾಸ", back: "A noun joins a verb. ಕೈಯನ್ನು + ಮುಗಿ = ಕೈಮುಗಿ." },
          { front: "ಗಮಕ ಸಮಾಸ", back: "A pronoun or verb-form joins a noun. ಮಾಡಿದುದು + ಅಡಿಗೆ = ಮಾಡಿದಡಿಗೆ." },
          { front: "ಮುಕ್ಕಣ್ಣ vs ಮುಕ್ಕಣ್ಣು", back: "ಮುಕ್ಕಣ್ಣ (Shiva, the three-eyed one) is ಬಹುವ್ರೀಹಿ; ಮುಕ್ಕಣ್ಣು (three eyes) is ದ್ವಿಗು." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "ಹಗಲಿರುಳು (day and night) is which samasa?",
            options: ["ದ್ವಿಗು", "ದ್ವಂದ್ವ", "ಬಹುವ್ರೀಹಿ", "ಕರ್ಮಧಾರಯ"],
            answer: 1,
            explain: "ಹಗಲೂ ಇರುಳೂ: two equal words joined by 'and' → **ದ್ವಂದ್ವ**.",
          },
          {
            kind: "mcq",
            q: "Which vigraha is correct for a ಬಹುವ್ರೀಹಿ compound?",
            options: [
              "ಮೂರು + ಕಣ್ಣು = ಮುಕ್ಕಣ್ಣ",
              "ಮೂರು ಕಣ್ಣುಳ್ಳವನು ಯಾವನೋ ಅವನು = ಮುಕ್ಕಣ್ಣ",
              "ಮೂರರ + ಕಣ್ಣು = ಮುಕ್ಕಣ್ಣ",
              "ಮೂರೂ ಕಣ್ಣೂ = ಮುಕ್ಕಣ್ಣ",
            ],
            answer: 1,
            explain: "A ಬಹುವ್ರೀಹಿ vigraha shows the third person: ...ಯಾವನೋ ಅವನು.",
            difficulty: 2,
            hint: "Who is the word about?",
          },
          {
            kind: "truefalse",
            q: "In ಕ್ರಿಯಾ ಸಮಾಸ, the second word is a verb.",
            answer: true,
            explain: "ಕೈಮುಗಿ, ಕಣ್ದೆರೆ, ತಲೆಬಾಗು: each ends in a verb.",
          },
          {
            kind: "fill",
            q: "ಗಿಡವೂ + ಮರವೂ = ___ (ದ್ವಂದ್ವ ಸಮಾಸ).",
            answer: ["ಗಿಡಮರಗಳು"],
            explain: "Equal words joined; the compound becomes plural: ಗಿಡಮರಗಳು.",
          },
          {
            kind: "mcq",
            q: "ಮಾಡಿದಡಿಗೆ (cooked food) is which samasa?",
            options: ["ಗಮಕ", "ಕ್ರಿಯಾ", "ದ್ವಂದ್ವ", "ಅಂಶಿ"],
            answer: 0,
            explain: "ಮಾಡಿದುದು (a verb-form, ಕೃದಂತ) + ಅಡಿಗೆ (noun) → **ಗಮಕ**. It is not ಕ್ರಿಯಾ, because the second word is a noun, not a verb.",
            difficulty: 3,
            hint: "Is the second word a verb or a noun?",
          },
          {
            kind: "multi",
            q: "In which samasas is the second word the main meaning? (choose all)",
            options: ["ತತ್ಪುರುಷ", "ಕರ್ಮಧಾರಯ", "ದ್ವಂದ್ವ", "ಬಹುವ್ರೀಹಿ"],
            answers: [0, 1],
            explain: "In ತತ್ಪುರುಷ and ಕರ್ಮಧಾರಯ the second word is main. In ದ್ವಂದ್ವ all are equal; in ಬಹುವ್ರೀಹಿ the meaning is a third thing.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "ಕೈಮುಗಿ is ಕ್ರಿಯಾ ಸಮಾಸ. Its vigraha is:",
            options: ["ಕೈಯ + ಮುಗಿ", "ಕೈಯನ್ನು + ಮುಗಿ", "ಕೈಯೂ + ಮುಗಿಯೂ", "ಕೈಯಿಂದ + ಮುಗಿ"],
            answer: 1,
            explain: "The noun takes ಅನ್ನು (object): ಕೈಯನ್ನು ಮುಗಿ — fold the hands.",
          },
        ],
      },
    ],
  },
];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  "Sandhi (ಸಂಧಿ)": "kannada-sandhi",
};
