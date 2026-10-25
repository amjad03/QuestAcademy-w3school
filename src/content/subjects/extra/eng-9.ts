import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "english";
/** Syllabus family: chapter titles below are matched against `eng` rows in src/content/syllabus/. */
export const family = "eng";

/* ------------------------------------------------------------------ */
/* 1. Descriptive Paragraph (CBSE Class 9)                              */
/* ------------------------------------------------------------------ */
const descriptiveParagraph: Topic = {
  slug: "c9-descriptive-paragraph",
  title: "Descriptive Paragraph",
  icon: "🖼️",
  description: "Describe a person, place, object or event in about 100–120 words so the reader can see, hear and feel it.",
  lessons: [
    {
      slug: "describing-with-the-five-senses",
      title: "Painting a Picture with Words",
      summary: "What a descriptive paragraph is, how to plan it from a picture or verbal cue, and how sense details and a clear order earn marks.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🖼️",
          caption: "Your friend missed the school annual day. Can you make them feel as if they were sitting in the hall? That is descriptive writing.",
        },
        {
          type: "text",
          md: "A **descriptive paragraph** is a short piece that describes **one** person, place, object, event or situation in detail. Its aim is to make the reader *picture* it, not just know about it.\n\nIn the **CBSE Class 9** paper you get a **cue**: a picture (a **visual cue**) or a few words or notes (a **verbal cue**). You write one paragraph of about **100–120 words**. Always check the word limit printed in your question paper.",
        },
        {
          type: "table",
          headers: ["You describe…", "Things to include", "Useful words"],
          rows: [
            ["**A person**", "Looks, clothes, voice, habits, nature, why they matter to you", "cheerful, wrinkled, soft-spoken, patient"],
            ["**A place**", "Where it is, what you see from near to far, sounds, smells, the mood", "crowded, peaceful, lush, narrow, glittering"],
            ["**An object**", "Size, shape, colour, material, use, its story", "smooth, ancient, brass, tiny, sturdy"],
            ["**An event**", "When and where, the people, what happened in order, your feelings", "festive, thrilling, deafening, unforgettable"],
          ],
        },
        {
          type: "text",
          md: "The secret of good description is **sense details**: what you can **see, hear, smell, taste and touch**. Compare 'The market was nice' with 'The air smelt of fresh coriander and frying samosas'. The second one lets the reader *experience* the market.\n\nThis is called **showing, not telling**. Telling gives a label (nice, beautiful, sad). Showing gives the details that make the reader feel it.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Read the cue** and decide what you are describing: a person, place, object or event.",
            "**Jot 6–8 details** quickly, covering at least three senses.",
            "**Pick an order**: for a place, near to far or left to right (**spatial order**); for an event, beginning to end (**time order**); for a person, looks first, then nature.",
            "**Write**: an opening sentence that names the subject, the details joined with linkers, and a closing sentence with your feeling or impression.",
            "**Check** tense, spelling and the word count.",
          ],
        },
        {
          type: "example",
          title: "From a visual cue to a paragraph",
          problem: "Look at the picture of a weekly vegetable market. Describe the scene in about 100–120 words.",
          steps: [
            "Subject: a **place** at a particular time, so use the **present tense** and spatial order (stalls → people → sounds and smells → end of the day).",
            "Details by sense: *see* red tomatoes, green spinach; *hear* sellers shouting prices; *smell* coriander, wet earth, samosas; *touch* buyers pressing tomatoes.",
            "Opening: name the place and time. Closing: your feeling about it.",
            "Join with linkers: *while, by ten o'clock, for me*.",
          ],
          answer: "The Sunday vegetable market near our colony comes alive at seven in the morning. Long rows of carts are piled with shiny red tomatoes, dark green spinach and bright orange carrots, still wet from washing. Sellers shout their prices over one another: 'Forty rupees a kilo! Fresh, fresh!' The air smells of coriander, damp earth and samosas frying at a corner stall. Women gently press the tomatoes to test them, while old men bargain hard over every rupee. Children tug at their parents' hands and point at heaps of guavas. By ten o'clock the crowd thins, and only crushed leaves remain on the ground. For me, this noisy, colourful market is the most cheerful part of the week. (about 120 words)",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which sentence **shows** rather than **tells**?",
              options: [
                "The garden was very beautiful.",
                "Yellow marigolds swayed beside a bench wet with morning dew.",
                "I liked the garden a lot.",
                "It was the best garden ever.",
              ],
              answer: 1,
              explain: "Only option 2 gives details the reader can picture (colour, movement, the wet bench). The others just give a label or an opinion.",
              difficulty: 2,
              hint: "Look for the sentence you can draw.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "A descriptive paragraph is a story: I should write what happened first, then next, then how it ended.",
          right: "Describe one subject in rich detail. Even for an event, the focus is on what it looked, sounded and felt like, not on a plot with a problem and a twist.",
          why: "Stories and descriptions both use details, so they feel alike. But a story is judged on its plot, while a description is judged on how clearly the reader can picture the subject. A long chain of 'then… then…' leaves little room for detail.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Is the sentence telling or showing?",
            groups: ["Telling (a label)", "Showing (sense details)"],
            items: [
              { text: "My grandmother is very kind.", group: 0, hint: "'Kind' is a label. What does she do that is kind?" },
              { text: "My grandmother keeps a tin of laddoos for every child who visits.", group: 1, hint: "You can picture the tin and the laddoos." },
              { text: "The beach was lovely.", group: 0, hint: "'Lovely' tells us the writer's opinion only." },
              { text: "Warm sand slipped between my toes as the waves hissed back.", group: 1, hint: "Touch and sound details." },
              { text: "The classroom was noisy.", group: 0, hint: "What exactly made the noise?" },
              { text: "Desks scraped, and thirty voices argued about the cricket match.", group: 1, hint: "You can hear it." },
            ],
            explain: "**Telling** sentences give a label (kind, lovely, noisy). **Showing** sentences give the details that make the reader reach that label on their own.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "How CBSE marks it",
          md: "Examiners look at **content** (relevant, vivid details from the cue), **organisation** (a clear order, an opening and a closing) and **language** (correct grammar, spelling and a good range of words).\n\nFrequent errors: ignoring part of the picture, mixing past and present tense, writing 200 words or 50 words, and filling the paragraph with 'very nice' and 'very beautiful'. No title or format is needed unless the question asks.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "order",
              q: "Put the steps for writing a descriptive paragraph in order.",
              items: ["Read the cue and identify the subject", "Jot down sense details", "Choose an order for the details", "Write opening, details and closing", "Check tense, spelling and word count"],
              explain: "Planning (cue → details → order) before writing keeps the paragraph organised and within the limit.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Describe **one** person, place, object or event in about 100–120 words (CBSE Class 9).",
            "Use details for at least three senses: **show, don't tell**.",
            "Follow a clear order: spatial for places, time order for events.",
            "Open by naming the subject; close with your impression or feeling.",
            "Keep one tense: present for a scene as it is, past for something that happened.",
          ],
        },
      ],
      flashcards: [
        { front: "Descriptive paragraph", back: "One paragraph that describes a single person, place, object or event in vivid detail." },
        { front: "Visual cue vs verbal cue", back: "A visual cue is a picture; a verbal cue is a few words or notes given in the question." },
        { front: "Show, don't tell", back: "Give details the reader can see, hear or feel instead of labels like 'nice' or 'beautiful'." },
        { front: "Spatial order", back: "Describing a place in an order of space: near to far, left to right or top to bottom." },
        { front: "The five senses", back: "Sight, sound, smell, taste and touch: the sources of descriptive detail." },
        { front: "Closing sentence of a description", back: "Gives your overall feeling or impression of the subject." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the usual word limit for the CBSE Class 9 descriptive paragraph?",
          options: ["30–50 words", "100–120 words", "250–300 words", "There is no limit"],
          answer: 1,
          explain: "The CBSE Class 9 descriptive paragraph is about **100–120 words**. Always confirm the limit given in your paper.",
        },
        {
          kind: "multi",
          q: "Which details appeal to a sense other than sight?",
          options: ["The hiss of the pressure cooker", "The smell of wet soil", "A tall, white building", "The rough bark of the tree"],
          answers: [0, 1, 3],
          explain: "Hiss = sound, smell of soil = smell, rough bark = touch. 'Tall, white building' is a sight detail.",
        },
        {
          kind: "truefalse",
          q: "A descriptive paragraph should have a twist ending, like a story.",
          answer: false,
          explain: "A twist belongs to a story. A description ends with the writer's overall impression of the subject.",
        },
        {
          kind: "fill",
          q: "Describing a room from the door to the far window follows ___ order.",
          answer: ["spatial", "space"],
          explain: "Moving through space (near to far) is **spatial order**.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which sentence would make the weakest opening for 'A Rainy Day in My Town'?",
          options: [
            "Dark clouds rolled over our town just after lunch on Tuesday.",
            "The first drops of the monsoon drummed on the tin roofs of our lane.",
            "Rain is a weather condition in which water falls from clouds.",
            "By noon, the sky over our town had turned the colour of ash.",
          ],
          answer: 2,
          explain: "Option 3 is a dictionary definition. It gives no picture of *your* town on *that* day, so it is a weak start for a description.",
          difficulty: 2,
          hint: "Which one sounds like a science textbook?",
        },
        {
          kind: "mcq",
          q: "A student writes: 'The fair was very nice. The rides were very nice. The food was also very nice.' What is the main problem?",
          options: ["Wrong tense", "Telling with the same label instead of showing details", "Too many senses", "It is too long"],
          answer: 1,
          explain: "Repeating 'very nice' tells the reader nothing they can picture. Replace each label with a real detail.",
        },
        {
          kind: "multi",
          q: "Which are frequent errors that lose marks?",
          options: ["Ignoring part of the visual cue", "Switching between past and present tense", "Ending with your impression", "Writing far beyond the word limit"],
          answers: [0, 1, 3],
          explain: "Ending with your impression is good practice. The other three are common reasons for losing marks.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 2. Story Writing (CBSE Class 9)                                      */
/* ------------------------------------------------------------------ */
const storyWriting: Topic = {
  slug: "c9-story-writing",
  title: "Story Writing",
  icon: "📖",
  description: "Build a short story from a given opening line, title or cues: characters, setting, a problem, a climax and an ending.",
  lessons: [
    {
      slug: "writing-a-story-from-a-cue",
      title: "Writing a Story from a Cue",
      summary: "The parts of a short story, how to grow a plot from a given line or title, and the habits that win and lose marks.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🔦",
          caption: "'The lights went out just as Riya reached the last page of her notes.' What happens next? One line can start a whole story.",
        },
        {
          type: "text",
          md: "In the **CBSE Class 9** paper you may be asked to write a **short story** from a **cue**: an opening line, a title, an ending line or a few outline points. The story is usually about **150–200 words**; check the limit printed in your paper.\n\nA short story has a few **characters** (the people or animals in it), a **setting** (where and when it happens) and a **plot** (the chain of events).",
        },
        {
          type: "table",
          headers: ["Part of the plot", "What it does", "In about 180 words"],
          rows: [
            ["**Beginning**", "Introduces the main character and the setting; uses the given line if there is one", "2–3 sentences"],
            ["**Problem** (conflict)", "Something goes wrong or a challenge appears", "2–3 sentences"],
            ["**Rising action**", "The character tries to deal with it; tension builds", "3–4 sentences"],
            ["**Climax**", "The turning point, the most exciting moment", "1–2 sentences"],
            ["**Ending** (resolution)", "The problem is solved or the character learns something", "2–3 sentences"],
          ],
        },
        {
          type: "text",
          md: "A few habits make a story strong:\n\n- Write in the **past tense** and stay in it.\n- Choose **first person** ('I') or **third person** ('she', 'Arjun') and do not switch.\n- Use one or two short lines of **dialogue** to bring a character alive.\n- Use time linkers: *at first, suddenly, a moment later, after a while, finally*.\n- Give a **title** if the question does not give one. It should hint at the story without giving the end away.",
        },
        {
          type: "example",
          title: "From an opening line to a full story",
          problem: "Write a story in about 150–200 words that begins: 'The lights went out just as Riya reached the last page of her notes.' Give it a suitable title.",
          steps: [
            "**Beginning**: use the line exactly. Add the setting: the night before her Science exam.",
            "**Problem**: no light, phone battery dead, two chapters left.",
            "**Rising action and climax**: an elderly neighbour brings his only lantern; later she sees his flat is dark.",
            "**Ending**: she does well, thanks him, and learns a lesson. Title: 'The Borrowed Light'.",
          ],
          answer: "**The Borrowed Light**\n\nThe lights went out just as Riya reached the last page of her notes. Her Science exam was the next morning, and she still had two chapters to revise. She reached for her phone, but its battery was dead. Panic rose in her chest. Then came a soft knock at the door. It was Mr Sharma, the old man who lived alone downstairs, holding a brass lantern. 'I hear you reading aloud every evening,' he said with a smile. 'I thought you might need this.' Riya thanked him and studied by its warm, flickering light until midnight. As she went to bed, she noticed that his window was completely dark. He had given her his only lantern. The next day Riya wrote her paper with confidence. On the way home she bought a box of sweets and a packet of candles for Mr Sharma. That evening they sat on the steps together, sharing sweets and stories, as the colony lights came back on. Riya had learnt that small kindnesses shine the brightest. (about 170 words)",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In the model story, what is the **climax**?",
              options: [
                "Riya's exam is the next morning.",
                "Riya realises Mr Sharma gave away his only lantern.",
                "Riya buys candles on the way home.",
                "The colony lights come back on.",
              ],
              answer: 1,
              explain: "The turning point is the moment Riya sees the dark window and understands his sacrifice. Everything after that is the ending.",
              difficulty: 2,
              hint: "Find the moment that changes how Riya feels.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "I can change the given opening line a little, and if I run out of ideas I can end with 'Then I woke up. It was all a dream.'",
          right: "Copy the given line **word for word** in the right place. End with a real resolution that grows out of the events.",
          why: "Changing the cue makes it look as if you did not follow the instruction, and examiners can cut content marks for it. The 'it was a dream' ending feels like a safe way out, but it cancels the whole plot and tells the examiner the story was not planned.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the story events in the correct order.",
            items: [
              "Arjun's team reached the inter-school football final.",
              "Their goalkeeper fell ill on the morning of the match.",
              "Arjun, who had never kept goal, offered to take his place.",
              "In the last minute he dived and saved a penalty.",
              "The team won, and Arjun learnt to say yes to new challenges.",
            ],
            explain: "Beginning (the final) → problem (keeper ill) → rising action (Arjun steps in) → climax (the save) → ending (victory and lesson).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "How CBSE marks it",
          md: "Marks are given for **content** (a story that uses the cue and makes sense), **organisation** (a clear beginning, middle and end) and **language** (correct grammar and tense, varied words, smooth linkers).\n\nFrequent errors: not using the given line, switching between 'I' and 'he', drifting into the present tense, a story with no problem, and running far past the word limit. Spend 3–4 minutes planning the five plot points before you write.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "A good title should give away the ending of the story.",
              answer: false,
              explain: "A title should make the reader curious. 'The Borrowed Light' hints at the story without telling what happens.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Story = characters + setting + plot (beginning, problem, rising action, climax, ending).",
            "Use the given cue exactly; about 150–200 words in CBSE Class 9.",
            "Past tense and one point of view all the way through.",
            "A little dialogue and time linkers make the story lively.",
            "End with a real resolution, never 'it was all a dream'.",
          ],
        },
      ],
      flashcards: [
        { front: "Plot", back: "The chain of events in a story: beginning, problem, rising action, climax, ending." },
        { front: "Setting", back: "Where and when the story takes place." },
        { front: "Conflict", back: "The problem or challenge that the main character faces." },
        { front: "Climax", back: "The turning point, the most exciting moment of the story." },
        { front: "Resolution", back: "The ending, where the problem is solved or a lesson is learnt." },
        { front: "Point of view", back: "Who tells the story: first person ('I') or third person ('she', 'he', a name)." },
        { front: "Time linkers", back: "Words that move a story along: at first, suddenly, a moment later, finally." },
      ],
      quiz: [
        {
          kind: "order",
          q: "Arrange the parts of a plot in order.",
          items: ["Beginning", "Problem", "Rising action", "Climax", "Ending"],
          explain: "A story introduces, complicates, builds tension, turns, and then resolves.",
        },
        {
          kind: "mcq",
          q: "The question gives the opening line. Where should it appear?",
          options: ["Anywhere in the story", "As the first sentence, word for word", "Only in the title", "It can be skipped if the story is good"],
          answer: 1,
          explain: "A given opening line must be the **first sentence**, copied exactly.",
        },
        {
          kind: "mcq",
          q: "Which sentence breaks the point of view of a story told by 'I'?",
          options: [
            "I ran towards the gate.",
            "My heart was pounding.",
            "She ran towards the gate and her heart was pounding, though I was the one running.",
            "I could hear footsteps behind me.",
          ],
          answer: 2,
          explain: "It mixes 'she' and 'I' for the same person. Choose one point of view and keep it.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The turning point, or most exciting moment, of a story is called the ___.",
          answer: ["climax"],
          explain: "The **climax** is the high point; the ending comes after it.",
        },
        {
          kind: "truefalse",
          q: "Stories are normally written in the past tense.",
          answer: true,
          explain: "Narratives use the past tense (ran, said, saw). Switching to the present midway is a common error.",
        },
        {
          kind: "multi",
          q: "Which make a story stronger?",
          options: ["A clear problem for the main character", "One or two lines of dialogue", "Ending with 'it was all a dream'", "Time linkers such as 'suddenly' and 'finally'"],
          answers: [0, 1, 3],
          explain: "A problem drives the plot, dialogue adds life, and linkers keep the sequence clear. The dream ending cancels the plot.",
        },
        {
          kind: "mcq",
          q: "Which is the best title for a story about a girl who finds a lost puppy and returns it to its owner?",
          options: ["A Story", "The Girl Returned the Puppy to Its Owner", "A Wet Nose at the Door", "Dogs Are Animals"],
          answer: 2,
          explain: "Option 3 is short and makes the reader curious. Option 2 gives the whole ending away, option 1 is empty and option 4 is off the point.",
          difficulty: 2,
          hint: "A title should hint, not tell.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [descriptiveParagraph, storyWriting];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Descriptive Paragraph": "c9-descriptive-paragraph",
  "9:Story Writing": "c9-story-writing",
};
