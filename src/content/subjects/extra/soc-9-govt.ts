import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* ICSE Civics: Our Constitution                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-our-constitution",
    title: "Our Constitution",
    icon: "📜",
    description: "What a constitution is, how the Constituent Assembly made ours, and what the Preamble promises.",
    lessons: [
      {
        slug: "c9-making-of-constitution",
        title: "Making of the Constitution",
        summary: "The meaning of a constitution, the Constituent Assembly, the Drafting Committee and the key dates from 1946 to 1950.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🏏",
            caption: "Before a cricket match starts, both teams agree on the rules. A country also needs a rule book that everyone, even the government, must follow.",
          },
          {
            type: "text",
            md: "A **constitution** is the basic law of a country. It says how the government is formed, what powers each part of it has, and what rights the people have. Every other law must agree with it.\n\nIndia's Constitution is the **supreme law** of the land. If Parliament or a state passes a law that goes against it, the courts can strike that law down.",
          },
          {
            type: "text",
            md: "Our Constitution was written by the **Constituent Assembly**, a body set up in 1946 under the **Cabinet Mission Plan**. Its members were not chosen directly by the people. They were elected by the members of the provincial legislative assemblies, so the election was **indirect**. Princely states sent their own representatives.\n\nThe Assembly first had 389 members. After the Partition in 1947, the members from areas that went to Pakistan left, and the number came down to 299.",
          },
          {
            type: "table",
            headers: ["Date", "Event"],
            rows: [
              ["9 December 1946", "First meeting of the Constituent Assembly; Dr Sachchidananda Sinha is the temporary chairman"],
              ["11 December 1946", "Dr Rajendra Prasad elected **President** of the Assembly"],
              ["13 December 1946", "Jawaharlal Nehru moves the **Objectives Resolution** (adopted on 22 January 1947)"],
              ["29 August 1947", "**Drafting Committee** set up with Dr B. R. Ambedkar as chairman"],
              ["26 November 1949", "Constitution **adopted** (now observed as Constitution Day)"],
              ["26 January 1950", "Constitution **comes into force**; India becomes a Republic"],
            ],
          },
          {
            type: "text",
            md: "The **Objectives Resolution** set out the goals the Constitution should reach: a free, sovereign republic, with justice, liberty and equality for all. These ideas later became the **Preamble**.\n\nThe **Drafting Committee** had seven members. It prepared the draft text, which the whole Assembly then debated clause by clause. Dr Ambedkar guided the draft through these debates, so he is called the chief architect of the Constitution. The whole task took nearly three years (2 years, 11 months and 18 days).",
          },
          {
            type: "example",
            title: "Reading a date question",
            problem: "The Constitution was ready on 26 November 1949. Why was it brought into force only on 26 January 1950?",
            steps: [
              "Ask what was special about 26 January before 1950.",
              "At its Lahore session (December 1929) the Congress adopted **Purna Swaraj** (complete independence) as its goal.",
              "On 26 January 1930 Indians across the country took a pledge for Purna Swaraj, and the day was then marked every year.",
              "Bringing the Constitution into force on this day honoured that pledge.",
            ],
            answer: "26 January was chosen to honour the Purna Swaraj pledge of 26 January 1930. It is now celebrated as Republic Day.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who was the chairman of the Drafting Committee?",
                options: ["Dr Rajendra Prasad", "Dr B. R. Ambedkar", "Jawaharlal Nehru", "Dr Sachchidananda Sinha"],
                answer: 1,
                explain: "Dr Ambedkar chaired the Drafting Committee. Dr Rajendra Prasad was the President of the whole Constituent Assembly.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Dr B. R. Ambedkar was the President of the Constituent Assembly.",
            right: "Dr **Rajendra Prasad** was the President of the Constituent Assembly. Dr **Ambedkar** was the chairman of its **Drafting Committee**.",
            why: "Ambedkar is so closely linked with the Constitution that students give him every post. But the Assembly (the whole body) and the Drafting Committee (a small group inside it) were two different things with two different heads.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put these events in the order they happened.",
              items: [
                "Cabinet Mission Plan proposes a Constituent Assembly",
                "Constituent Assembly meets for the first time",
                "Objectives Resolution is moved",
                "Drafting Committee is set up",
                "Constitution is adopted",
                "Constitution comes into force",
              ],
              explain: "1946 plan → 9 Dec 1946 first meeting → 13 Dec 1946 Objectives Resolution → 29 Aug 1947 Drafting Committee → 26 Nov 1949 adopted → 26 Jan 1950 in force.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Do not mix up **adopted** (26 November 1949) and **came into force** (26 January 1950). Many students lose a mark by writing one for the other. In a 'Give reason' question on 26 January, always mention the **Purna Swaraj** pledge of 1930.",
          },
          {
            type: "keypoints",
            items: [
              "A constitution is the supreme, basic law of a country.",
              "The Constituent Assembly was indirectly elected under the Cabinet Mission Plan, 1946.",
              "President of the Assembly: Dr Rajendra Prasad. Chairman of the Drafting Committee: Dr B. R. Ambedkar.",
              "Adopted on 26 November 1949; came into force on 26 January 1950.",
            ],
          },
        ],
        flashcards: [
          { front: "Constitution", back: "The basic and supreme law of a country that sets up the government, divides its powers and lists the rights of the people." },
          { front: "Under which plan was the Constituent Assembly formed?", back: "The Cabinet Mission Plan of 1946." },
          { front: "First meeting of the Constituent Assembly", back: "9 December 1946, with Dr Sachchidananda Sinha as temporary chairman." },
          { front: "Objectives Resolution", back: "Moved by Jawaharlal Nehru on 13 December 1946; it set out the goals of the Constitution and became the basis of the Preamble." },
          { front: "Chairman of the Drafting Committee", back: "Dr B. R. Ambedkar." },
          { front: "Why 26 January 1950?", back: "To honour the Purna Swaraj pledge taken on 26 January 1930." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "How were most members of the Constituent Assembly chosen?",
            options: ["Directly by all adult citizens", "By the members of the provincial legislative assemblies", "Nominated by the British Viceroy", "By the Indian National Congress alone"],
            answer: 1,
            explain: "The Assembly was indirectly elected by the provincial legislatures under the Cabinet Mission Plan. Princely states sent their own representatives.",
          },
          {
            kind: "fill",
            q: "The Constitution of India was adopted on 26 ___ 1949.",
            answer: ["November", "Nov"],
            explain: "It was adopted on 26 November 1949 and came into force on 26 January 1950.",
          },
          {
            kind: "truefalse",
            q: "The Constituent Assembly had 389 members throughout its work.",
            answer: false,
            explain: "It began with 389 members. After Partition, the number came down to 299.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange these dates in the correct order.",
            items: ["9 December 1946", "13 December 1946", "29 August 1947", "26 November 1949", "26 January 1950"],
            explain: "First meeting → Objectives Resolution → Drafting Committee → adoption → coming into force.",
          },
          {
            kind: "mcq",
            q: "Who moved the Objectives Resolution in the Constituent Assembly?",
            options: ["Sardar Patel", "Dr Rajendra Prasad", "Jawaharlal Nehru", "Dr B. R. Ambedkar"],
            answer: 2,
            explain: "Nehru moved it on 13 December 1946. It was adopted on 22 January 1947.",
          },
          {
            kind: "multi",
            q: "Which statements about 26 January are correct? Choose all that apply.",
            options: ["The Constitution came into force on 26 January 1950", "The Constitution was adopted on 26 January 1950", "A Purna Swaraj pledge was taken on 26 January 1930", "It is celebrated as Republic Day"],
            answers: [0, 2, 3],
            explain: "The Constitution was adopted on 26 November 1949, not in January. It came into force on 26 January 1950 to honour the 1930 pledge.",
            difficulty: 2,
            hint: "Separate 'adopted' from 'came into force'.",
          },
        ],
      },
      {
        slug: "c9-preamble",
        title: "The Preamble",
        summary: "The key words of the Preamble: sovereign, socialist, secular, democratic, republic, and the ideals of justice, liberty, equality and fraternity.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A good book often has a short introduction that tells you what the book is about. The **Preamble** is the introduction to our Constitution. It tells us **where the Constitution gets its power** (from the people), **what kind of country** India is, and **what goals** it wants to reach.",
          },
          {
            type: "text",
            md: "The Preamble begins with the words **\"We, the people of India\"**. This means the power of the Constitution comes from the people, not from a king or a foreign ruler.\n\nIt was amended once, by the **42nd Amendment (1976)**, which added the words **socialist**, **secular** and **integrity**.",
          },
          {
            type: "table",
            headers: ["Word", "Meaning in simple words"],
            rows: [
              ["**Sovereign**", "India makes its own decisions on internal and external matters; no outside power controls it."],
              ["**Socialist**", "The state works to reduce inequality of wealth and income and to give everyone a fair chance."],
              ["**Secular**", "The state has no official religion and treats all religions equally."],
              ["**Democratic**", "The government is elected by the people and answers to them."],
              ["**Republic**", "The head of the state (the President) is elected, not a hereditary king or queen."],
            ],
          },
          {
            type: "text",
            md: "The Preamble then lists four ideals for every citizen:\n\n**Justice** (social, economic and political), **Liberty** (of thought, expression, belief, faith and worship), **Equality** (of status and of opportunity) and **Fraternity** (a sense of brotherhood that protects the **dignity of the individual** and the **unity and integrity of the Nation**).",
          },
          {
            type: "example",
            title: "Linking a situation to an ideal",
            problem: "A village in Odisha opens its temple to all castes after years of keeping some people out. Which ideal of the Preamble does this support?",
            steps: [
              "Find the problem: some people were treated as lower because of their caste.",
              "Ask which ideal deals with being treated with equal respect in society: **equality of status**.",
              "It also supports **social justice** and **fraternity**, because it removes a caste barrier.",
            ],
            answer: "Mainly **equality of status**, and with it social justice and fraternity.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which word in the Preamble means that the head of state is elected?",
                options: ["Sovereign", "Republic", "Secular", "Socialist"],
                answer: 1,
                explain: "In a republic the head of state is elected. India's President is elected indirectly for five years.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "'Democratic' and 'republic' mean the same thing, so one of them is extra.",
            right: "**Democratic** is about how the *government* is chosen (by the people). **Republic** is about the *head of state* (elected, not hereditary).",
            why: "Both words point to elections, so they seem the same. But the United Kingdom is a democracy with a hereditary king, so it is not a republic. India is both.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each Preamble word to what it shows.",
              pairs: [
                ["Sovereign", "No foreign power controls India"],
                ["Secular", "No official state religion"],
                ["Republic", "Head of state is elected"],
                ["Fraternity", "A feeling of brotherhood among citizens"],
                ["Liberty", "Freedom of thought and expression"],
              ],
              explain: "Each word answers a different question: who controls India, how religion is treated, who heads the state, and how citizens relate to one another.",
            },
          },
          {
            type: "callout",
            tone: "fact",
            title: "Is the Preamble part of the Constitution?",
            md: "Yes. In the **Kesavananda Bharati case (1973)** the Supreme Court held that the Preamble is part of the Constitution. However, a court cannot be asked to enforce the Preamble by itself.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to 'explain' a Preamble word, give the meaning **and** one example from India (for example: 'Secular: India has no state religion, so a person of any faith can become President'). A bare meaning often gets only half the marks.",
          },
          {
            type: "keypoints",
            items: [
              "The Preamble is the introduction to the Constitution; its power comes from 'We, the people of India'.",
              "India is a Sovereign, Socialist, Secular, Democratic Republic.",
              "Its ideals are Justice, Liberty, Equality and Fraternity.",
              "The 42nd Amendment (1976) added 'socialist', 'secular' and 'integrity'.",
            ],
          },
        ],
        flashcards: [
          { front: "Preamble", back: "The introduction to the Constitution, stating its source of power, the nature of the state and its goals." },
          { front: "Source of authority of the Constitution", back: "The people of India ('We, the people of India')." },
          { front: "Words added by the 42nd Amendment, 1976", back: "Socialist, secular and integrity." },
          { front: "Republic", back: "A state whose head is elected, not hereditary." },
          { front: "Three kinds of justice in the Preamble", back: "Social, economic and political." },
          { front: "Kesavananda Bharati case (1973)", back: "The Supreme Court held that the Preamble is a part of the Constitution." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The words 'socialist' and 'secular' were added to the Preamble by the:",
            options: ["1st Amendment", "42nd Amendment", "44th Amendment", "73rd Amendment"],
            answer: 1,
            explain: "The 42nd Amendment of 1976 added 'socialist', 'secular' and 'integrity'.",
          },
          {
            kind: "truefalse",
            q: "India is not a republic because it is a member of the Commonwealth.",
            answer: false,
            explain: "India is a republic because its head of state, the President, is elected. Membership of the Commonwealth does not change this.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The Preamble begins with the words 'We, the ___ of India'.",
            answer: ["people"],
            explain: "This shows that the Constitution draws its authority from the people.",
          },
          {
            kind: "multi",
            q: "Which kinds of liberty does the Preamble name? Choose all that apply.",
            options: ["Thought", "Expression", "Worship", "Property"],
            answers: [0, 1, 2],
            explain: "The Preamble names liberty of thought, expression, belief, faith and worship. Property is not listed.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "'Equality of opportunity' best means:",
            options: ["Everyone gets the same salary", "Everyone gets a fair chance in jobs and education", "Everyone must follow the same religion", "Only the educated can vote"],
            answer: 1,
            explain: "Equality of opportunity means no one is kept out of jobs or education because of caste, religion, sex or birthplace.",
          },
          {
            kind: "mcq",
            q: "Fraternity in the Preamble is meant to assure the dignity of the individual and:",
            options: ["the wealth of the state", "the unity and integrity of the Nation", "the power of Parliament", "the rights of the states"],
            answer: 1,
            explain: "Fraternity assures the dignity of the individual and the unity and integrity of the Nation.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ICSE Civics: Salient Features of the Constitution                   */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-salient-features",
    title: "Salient Features of the Constitution",
    icon: "🏛️",
    description: "Written and flexible-rigid, federal with a strong Centre, parliamentary, plus rights, duties and directive principles.",
    lessons: [
      {
        slug: "c9-features-of-constitution",
        title: "Key Features of the Constitution",
        summary: "A written and detailed constitution, partly rigid and partly flexible, federal with a strong Centre, parliamentary, secular, with single citizenship and universal adult franchise.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Every constitution has its own 'personality'. Some are short, some long; some are very hard to change, some easy. The special qualities of our Constitution are called its **salient features**.",
          },
          {
            type: "table",
            headers: ["Feature", "What it means"],
            rows: [
              ["**Written and detailed**", "All rules are in one written document. When it began it had 395 Articles, 22 Parts and 8 Schedules; it has grown since. It is among the longest constitutions in the world."],
              ["**Partly rigid, partly flexible**", "Some parts can be changed by a simple majority in Parliament; others need a special majority; a few also need approval by half the states (**Article 368**)."],
              ["**Federal with a strong Centre**", "Power is divided between the Union and the states, but the Union is stronger (single Constitution, emergency powers, Governors appointed by the President)."],
              ["**Parliamentary form**", "The real power lies with the Prime Minister and Council of Ministers, who are answerable to the Lok Sabha. The President is the nominal head."],
              ["**Single citizenship**", "Every Indian is a citizen of India only, not of a state."],
              ["**Universal adult franchise**", "Every citizen aged 18 or above can vote, whatever their caste, religion, sex, wealth or education."],
              ["**Secular state**", "No state religion; all religions are equal before the state."],
              ["**Independent judiciary**", "Courts are free from control of the government and can strike down laws that go against the Constitution."],
            ],
          },
          {
            type: "heading",
            text: "Three ways to amend",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Simple majority** of Parliament: for example, forming a new state or changing a state's name or boundary.",
              "**Special majority** of Parliament (a majority of total membership and two-thirds of members present and voting in each House): for most changes, such as Fundamental Rights.",
              "**Special majority plus ratification by at least half the state legislatures**: for changes to the federal structure, such as the election of the President.",
            ],
          },
          {
            type: "example",
            title: "Spotting a unitary feature",
            problem: "India is called 'federal with a unitary bias'. Use one feature to show the 'unitary bias'.",
            steps: [
              "Recall what 'federal' means: power shared between the Centre and the states.",
              "Recall what 'unitary' means: power concentrated at the Centre.",
              "Find a feature that gives the Centre extra power: during a national **emergency**, the Union can make laws on state subjects.",
              "Add one more for full marks: **Governors** are appointed by the President, and India has a **single Constitution** and **single citizenship**.",
            ],
            answer: "Emergency powers of the Union (with Governors appointed by the President and single citizenship) show the unitary bias.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which Article of the Constitution deals with the procedure of amendment?",
                options: ["Article 32", "Article 51A", "Article 324", "Article 368"],
                answer: 3,
                explain: "Article 368 lays down how the Constitution can be amended.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In India, the President runs the government, just like in the USA.",
            right: "India has a **parliamentary** system. The President is the **nominal** head; the **Prime Minister and Council of Ministers** hold real power and answer to the Lok Sabha.",
            why: "The President signs every law and is called the head of state, so it looks as if they rule. But the President acts on the advice of the Council of Ministers. The USA has a presidential system, which is different.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each feature federal or unitary?",
              groups: ["Federal feature", "Unitary feature"],
              items: [
                { text: "Division of subjects into Union, State and Concurrent Lists", group: 0, hint: "Power is shared between two levels." },
                { text: "Single citizenship", group: 1, hint: "There is no separate state citizenship, which keeps power central." },
                { text: "Governors appointed by the President", group: 1, hint: "The Centre picks the head of each state." },
                { text: "A written constitution supreme over both levels", group: 0, hint: "Both the Centre and states must obey it." },
                { text: "Union can make laws on state subjects during an emergency", group: 1, hint: "The Centre gains power over state matters." },
                { text: "Independent judiciary to settle Centre–state disputes", group: 0, hint: "An umpire is needed when power is shared." },
              ],
              explain: "India mixes both: power is divided (federal), but the Centre is stronger (unitary). That is why it is called 'federal with a unitary bias'.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'partly rigid and partly flexible', always name the **three methods** of amendment with one example each. Writing only 'it can be amended easily' earns no marks.",
          },
          {
            type: "keypoints",
            items: [
              "Our Constitution is written, detailed and among the longest in the world.",
              "It is partly rigid and partly flexible; amendments follow Article 368.",
              "It is federal with a strong Centre, and has a parliamentary form of government.",
              "Single citizenship, universal adult franchise (18+), secularism and an independent judiciary are other key features.",
            ],
          },
        ],
        flashcards: [
          { front: "Salient features", back: "The special or main qualities of the Constitution." },
          { front: "Article 368", back: "The Article that lays down the procedure for amending the Constitution." },
          { front: "Special majority", back: "A majority of the total membership of a House and two-thirds of members present and voting." },
          { front: "Single citizenship", back: "Indians are citizens only of India, not of a state." },
          { front: "Universal adult franchise", back: "Every citizen aged 18 or more has the right to vote, without any discrimination." },
          { front: "Nominal head in India", back: "The President; real executive power lies with the Prime Minister and Council of Ministers." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Why is the Indian Constitution called 'partly rigid and partly flexible'?",
            options: ["Only the President can amend it", "Some parts need a simple majority, others a special majority and state approval", "It can never be amended", "It is amended only by a referendum"],
            answer: 1,
            explain: "Different parts need different methods under Article 368, from a simple majority to a special majority plus ratification by half the states.",
          },
          {
            kind: "truefalse",
            q: "An Indian citizen living in Karnataka holds both Indian citizenship and Karnataka citizenship.",
            answer: false,
            explain: "India has single citizenship. There is no separate state citizenship.",
          },
          {
            kind: "fill",
            q: "The minimum age for voting in India is ___ years.",
            answer: ["18", "eighteen"],
            explain: "Under universal adult franchise every citizen aged 18 or above can vote.",
          },
          {
            kind: "multi",
            q: "Which of these show the 'unitary bias' of the Indian federation? Choose all that apply.",
            options: ["Single citizenship", "Governors appointed by the President", "Emergency powers of the Union", "Separate state constitutions for every state"],
            answers: [0, 1, 2],
            explain: "India does not give each state its own constitution; one Constitution covers the Union and all states. The other three strengthen the Centre.",
            difficulty: 2,
            hint: "Look for features that give extra power to the Centre.",
          },
          {
            kind: "mcq",
            q: "Changing the method of electing the President needs:",
            options: ["A simple majority of Parliament", "An order of the President", "A special majority of Parliament plus ratification by half the states", "A decision of the Supreme Court"],
            answer: 2,
            explain: "Because it affects the federal structure, it needs a special majority and ratification by at least half the state legislatures.",
            difficulty: 3,
            hint: "The states take part in electing the President.",
          },
          {
            kind: "mcq",
            q: "In India's parliamentary system, the Council of Ministers is collectively responsible to the:",
            options: ["President", "Rajya Sabha", "Lok Sabha", "Supreme Court"],
            answer: 2,
            explain: "The Council of Ministers stays in office only while it has the support of the Lok Sabha.",
          },
        ],
      },
      {
        slug: "c9-rights-duties-dpsp",
        title: "Rights, Duties and Directive Principles",
        summary: "The six Fundamental Rights, the right to constitutional remedies, the Directive Principles of State Policy and the eleven Fundamental Duties.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Imagine a shop owner refuses to sell you milk because of your caste. Or the police lock you up without telling you why. The Constitution protects you from such things through **Fundamental Rights**. It also asks you to do certain things for the country through **Fundamental Duties**, and asks the government to work towards a fair society through the **Directive Principles**.",
          },
          {
            type: "text",
            md: "**Fundamental Rights** are in **Part III** of the Constitution. They are **justiciable**: if a right is violated, you can go to court to get it enforced. There are six of them today.",
          },
          {
            type: "table",
            headers: ["Fundamental Right", "Articles", "Example"],
            rows: [
              ["Right to Equality", "14–18", "Equal protection of law; untouchability is abolished"],
              ["Right to Freedom", "19–22", "Freedom of speech; protection of life and personal liberty; free education for ages 6–14 (Article 21A)"],
              ["Right against Exploitation", "23–24", "No forced labour; no child below 14 in factories, mines or hazardous work"],
              ["Right to Freedom of Religion", "25–28", "Freedom to profess, practise and spread one's religion"],
              ["Cultural and Educational Rights", "29–30", "Minorities can set up and run their own educational institutions"],
              ["Right to Constitutional Remedies", "32", "The right to move the Supreme Court if a Fundamental Right is violated"],
            ],
          },
          {
            type: "text",
            md: "The **Right to Property** was once a Fundamental Right. The **44th Amendment (1978)** removed it from Part III; it is now only a legal right.\n\n**Directive Principles of State Policy** (Part IV, Articles 36–51) are guidelines for the government, such as giving equal pay for equal work to men and women, organising village panchayats and protecting the environment. They are **non-justiciable**: no court can force the government to follow them, but they are 'fundamental in the governance of the country'.\n\n**Fundamental Duties** (**Article 51A**, Part IVA) were added by the **42nd Amendment (1976)**. There were ten; the **86th Amendment (2002)** added an eleventh: parents and guardians must provide opportunities for education to their children aged 6 to 14.",
          },
          {
            type: "example",
            title: "Right, duty or directive?",
            problem: "Classify: (a) Meena is denied a government job because she is a woman. (b) The state starts a scheme to give equal pay to men and women farm workers. (c) Students clean up litter near a heritage monument.",
            steps: [
              "(a) Denial of a public job because of sex is unequal treatment, so it breaks the **Right to Equality** (Article 16). Meena can go to court.",
              "(b) A government policy goal that no court can order is a **Directive Principle** (equal pay for equal work).",
              "(c) Protecting the heritage of our culture is a citizen's **Fundamental Duty** under Article 51A.",
            ],
            answer: "(a) Fundamental Right, (b) Directive Principle, (c) Fundamental Duty.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "A citizen can go to court to force the government to follow a Directive Principle.",
                answer: false,
                explain: "Directive Principles are non-justiciable. Only Fundamental Rights can be enforced in court.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The Right to Property is one of the seven Fundamental Rights.",
            right: "There are **six** Fundamental Rights now. The Right to Property was removed by the **44th Amendment (1978)** and is now a legal right (Article 300A).",
            why: "Older books listed seven rights including property, and the number still circulates. Remember six, and note that the Right to Constitutional Remedies is the one that protects all the others.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort: Fundamental Right, Directive Principle or Fundamental Duty?",
              groups: ["Fundamental Right", "Directive Principle", "Fundamental Duty"],
              items: [
                { text: "Freedom of speech and expression", group: 0, hint: "Part III, enforceable in court." },
                { text: "Abolition of untouchability", group: 0, hint: "It is part of the Right to Equality." },
                { text: "Organise village panchayats", group: 1, hint: "A goal for the government in Part IV." },
                { text: "Equal pay for equal work for men and women", group: 1, hint: "A policy goal no court can order." },
                { text: "Respect the National Flag and National Anthem", group: 2, hint: "Something every citizen should do (Article 51A)." },
                { text: "Value and preserve the rich heritage of our composite culture", group: 2, hint: "Something every citizen should do (Article 51A)." },
              ],
              explain: "Rights protect *you* and are enforced by courts. Directive Principles guide the *government*. Duties are what *citizens* owe the nation.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Dr Ambedkar called **Article 32** (Right to Constitutional Remedies) the 'heart and soul' of the Constitution. This is a frequent one-mark question. A frequent error is writing Article 21 instead of 32.",
          },
          {
            type: "keypoints",
            items: [
              "Six Fundamental Rights (Part III) are justiciable; Article 32 lets you move the Supreme Court.",
              "Right to Property was removed from Fundamental Rights by the 44th Amendment (1978).",
              "Directive Principles (Part IV) guide the state but are non-justiciable.",
              "Fundamental Duties (Article 51A) were added in 1976; there are now eleven.",
            ],
          },
        ],
        flashcards: [
          { front: "Justiciable", back: "Can be enforced by a court of law. Fundamental Rights are justiciable." },
          { front: "Number of Fundamental Rights today", back: "Six." },
          { front: "Heart and soul of the Constitution (Ambedkar)", back: "Article 32, the Right to Constitutional Remedies." },
          { front: "Directive Principles of State Policy", back: "Guidelines in Part IV for the government to build a welfare state; not enforceable in court." },
          { front: "Article 51A", back: "Lists the Fundamental Duties of citizens." },
          { front: "11th Fundamental Duty", back: "Parents or guardians must provide opportunities for education to children aged 6–14 (added 2002)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Fundamental Duties were added to the Constitution by the:",
            options: ["42nd Amendment, 1976", "44th Amendment, 1978", "73rd Amendment, 1992", "86th Amendment, 2002"],
            answer: 0,
            explain: "The 42nd Amendment added ten duties in Article 51A. The 86th Amendment added the eleventh.",
          },
          {
            kind: "mcq",
            q: "A ten-year-old is made to work in a firecracker factory. Which Fundamental Right is violated?",
            options: ["Right to Equality", "Right to Freedom of Religion", "Right against Exploitation", "Cultural and Educational Rights"],
            answer: 2,
            explain: "Article 24 bans employing children below 14 in factories, mines and hazardous work.",
          },
          {
            kind: "fill",
            q: "Fundamental Rights are listed in Part ___ of the Constitution.",
            answer: ["III", "3", "three"],
            explain: "Part III contains Fundamental Rights; Part IV contains the Directive Principles.",
          },
          {
            kind: "truefalse",
            q: "The Right to Property is no longer a Fundamental Right.",
            answer: true,
            explain: "The 44th Amendment (1978) removed it from Part III. It is now a legal right under Article 300A.",
          },
          {
            kind: "multi",
            q: "Which of these are Fundamental Duties? Choose all that apply.",
            options: ["Respect the Constitution, the National Flag and the National Anthem", "Develop a scientific temper", "Vote in every election", "Protect public property"],
            answers: [0, 1, 3],
            explain: "Voting is a right, not one of the listed Fundamental Duties. The other three are in Article 51A.",
            difficulty: 2,
            hint: "One option is a right that many people think is a duty.",
          },
          {
            kind: "mcq",
            q: "Which statement about Directive Principles is correct?",
            options: ["They can be enforced by any court", "They are guidelines for the government and cannot be enforced in court", "They were added in 1976", "They are duties of citizens"],
            answer: 1,
            explain: "Directive Principles were in the original Constitution, guide the state and are non-justiciable.",
          },
          {
            kind: "mcq",
            q: "Free and compulsory education for children aged 6 to 14 is a Fundamental Right under:",
            options: ["Article 14", "Article 21A", "Article 32", "Article 51A"],
            answer: 1,
            explain: "Article 21A was added by the 86th Amendment (2002).",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ICSE Civics: Elections                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-elections",
    title: "Elections",
    icon: "🗳️",
    description: "Why we hold elections, who can vote and stand, types of elections, the Election Commission and each step of polling.",
    lessons: [
      {
        slug: "c9-elections-basics",
        title: "Elections and Universal Adult Franchise",
        summary: "Representative democracy, direct and indirect elections, general, mid-term and by-elections, constituencies and reserved seats.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "☝️",
            caption: "An inked finger is a familiar sight after polling day, from Ladakh to Kanyakumari.",
          },
          {
            type: "text",
            md: "India has more than 140 crore people. They cannot all sit together and make laws. So they choose a few people to make decisions for them. This is **representative democracy**, and the way we choose these people is an **election**.\n\nAll the people who have the right to vote are together called the **electorate**. The area from which one representative is elected is a **constituency**.",
          },
          {
            type: "text",
            md: "**Universal adult franchise** means every citizen aged **18 years** or more can vote, whatever their caste, religion, sex, wealth or education. The voting age was lowered from 21 to 18 by the **61st Amendment (1988)**.\n\nA person cannot vote if they are not a citizen, or are declared of unsound mind by a court, or are disqualified by law (for example, for some election offences).",
          },
          {
            type: "table",
            headers: ["Type of election", "Meaning", "Example"],
            rows: [
              ["**Direct election**", "Voters elect the representative themselves", "Lok Sabha, State Legislative Assembly, panchayats"],
              ["**Indirect election**", "Elected representatives elect someone", "President, Vice-President, Rajya Sabha members"],
              ["**General election**", "Elections to all seats of a House at the end of its term", "Lok Sabha every five years"],
              ["**Mid-term election**", "Elections to all seats held before the full term ends, because the House was dissolved early", "Lok Sabha dissolved after two years"],
              ["**By-election**", "Election to one seat that fell vacant because of death or resignation of a member", "One assembly seat after a member resigns"],
            ],
          },
          {
            type: "text",
            md: "**Reserved constituencies** make sure that **Scheduled Castes (SC)** and **Scheduled Tribes (ST)** are fairly represented. In such a seat, only an SC (or ST) candidate can stand, but **all voters** of the area vote.\n\nThe **106th Amendment (2023)** provides for reserving one-third of seats in the Lok Sabha and state assemblies for women. It will come into effect only after the next census and delimitation.",
          },
          {
            type: "example",
            title: "Naming the type of election",
            problem: "A member of the Karnataka Legislative Assembly from one constituency passes away. Six months later, voters of that constituency elect a new member. What kind of election is this, and is it direct or indirect?",
            steps: [
              "Only one seat fell vacant, not the whole House, so it is not a general or mid-term election.",
              "An election to fill a single vacant seat is a **by-election**.",
              "The voters of the constituency choose the member themselves, so it is a **direct** election.",
            ],
            answer: "A direct by-election.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Members of the Rajya Sabha are chosen by:",
                options: ["Direct election by all voters", "The elected members of the State Legislative Assemblies", "Nomination by the Prime Minister", "The Lok Sabha"],
                answer: 1,
                explain: "Rajya Sabha members (except 12 nominated by the President) are elected indirectly by elected MLAs.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "In a reserved constituency, only SC (or ST) people are allowed to vote.",
            right: "In a reserved constituency only SC (or ST) **candidates** can contest, but **every registered voter** of that area votes.",
            why: "The word 'reserved' sounds like the whole election is for one group. The reservation is only on who can be a candidate. Every voter keeps the right to vote.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Direct or indirect election?",
              groups: ["Direct", "Indirect"],
              items: [
                { text: "Member of the Lok Sabha", group: 0, hint: "Voters of the constituency choose the MP." },
                { text: "President of India", group: 1, hint: "Elected by an electoral college of MPs and MLAs." },
                { text: "Member of a Gram Panchayat", group: 0, hint: "Village voters elect members themselves." },
                { text: "Member of the Rajya Sabha", group: 1, hint: "Elected by MLAs." },
                { text: "Vice-President of India", group: 1, hint: "Elected by members of both Houses of Parliament." },
                { text: "Member of the State Legislative Assembly (MLA)", group: 0, hint: "Voters of the constituency choose the MLA." },
              ],
              explain: "If ordinary voters mark the ballot for the person, it is direct. If elected representatives do the choosing, it is indirect.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Students often confuse a **mid-term** election with a **by-election**. Mid-term = all seats, House dissolved early. By-election = one seat, one vacancy. Write the reason for the vacancy to get the full mark.",
          },
          {
            type: "keypoints",
            items: [
              "Elections let the people choose representatives in a representative democracy.",
              "Universal adult franchise: every citizen aged 18+ can vote (age lowered by the 61st Amendment, 1988).",
              "Elections may be direct or indirect; general, mid-term or by-elections.",
              "Reserved seats limit who can contest, not who can vote.",
            ],
          },
        ],
        flashcards: [
          { front: "Electorate", back: "All the people who have the right to vote." },
          { front: "Constituency", back: "An area whose voters elect one representative." },
          { front: "By-election", back: "An election to fill a single seat that has fallen vacant due to death or resignation." },
          { front: "Mid-term election", back: "Election to all seats when a House is dissolved before completing its term." },
          { front: "61st Amendment (1988)", back: "Lowered the voting age from 21 to 18." },
          { front: "Reserved constituency", back: "A seat where only an SC or ST candidate can contest, while all voters of the area vote." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The President of India is elected:",
            options: ["Directly by the people", "Indirectly by an electoral college", "By the Lok Sabha alone", "By the Supreme Court"],
            answer: 1,
            explain: "The electoral college has the elected members of both Houses of Parliament and of the Legislative Assemblies of the states (and of Delhi and Puducherry).",
          },
          {
            kind: "truefalse",
            q: "A by-election is held when the Lok Sabha is dissolved before completing five years.",
            answer: false,
            explain: "That is a mid-term election. A by-election fills one vacant seat.",
          },
          {
            kind: "fill",
            q: "An area that elects one representative is called a ___.",
            answer: ["constituency"],
            explain: "India is divided into constituencies for Lok Sabha and assembly elections.",
          },
          {
            kind: "mcq",
            q: "Which Amendment lowered the voting age from 21 to 18?",
            options: ["42nd", "44th", "61st", "73rd"],
            answer: 2,
            explain: "The 61st Amendment Act, 1988 lowered the voting age to 18.",
          },
          {
            kind: "multi",
            q: "Which of these are chosen by indirect election? Choose all that apply.",
            options: ["President", "Vice-President", "Member of Lok Sabha", "Member of Rajya Sabha"],
            answers: [0, 1, 3],
            explain: "Members of the Lok Sabha are elected directly by voters.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "In a constituency reserved for Scheduled Tribes:",
            options: ["Only ST voters can vote", "Only ST candidates can contest, and all voters vote", "No election is held", "Only women can contest"],
            answer: 1,
            explain: "Reservation decides who may contest. All registered voters of the constituency vote.",
          },
        ],
      },
      {
        slug: "c9-election-commission",
        title: "The Election Commission and the Election Process",
        summary: "The Election Commission under Article 324, its composition and functions, and the steps from electoral rolls to the declaration of results.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "In a football match the referee must be fair to both teams. In elections, the 'referee' is the **Election Commission of India (ECI)**. It must be fair to every party, including the party in power.",
          },
          {
            type: "text",
            md: "The Election Commission is set up under **Article 324** of the Constitution. It was formed on **25 January 1950**, which is why 25 January is now **National Voters' Day**.\n\nIt has a **Chief Election Commissioner (CEC)** and, at present, two other **Election Commissioners**. They are appointed by the **President**. (Since a 2023 law, the President appoints them on the recommendation of a selection committee headed by the Prime Minister.) They hold office for **six years or until the age of 65**, whichever comes first.\n\nThe CEC can be removed only in the same way as a judge of the Supreme Court. This protects the CEC from pressure by the government.",
          },
          {
            type: "list",
            items: [
              "Prepares and updates the **electoral rolls** (voters' lists).",
              "Conducts elections to **Parliament**, the **State Legislatures**, and the offices of **President** and **Vice-President**.",
              "Fixes the **election schedule**: dates of notification, nomination, polling and counting.",
              "**Recognises political parties** and allots **election symbols**.",
              "Enforces the **Model Code of Conduct** for parties and candidates.",
              "Appoints and directs election staff, and can order a **re-poll** if polling was unfair.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Who runs local elections?",
            md: "Elections to panchayats and municipalities are **not** run by the Election Commission of India. They are run by each state's **State Election Commission**, set up under the 73rd and 74th Amendments.",
          },
          {
            type: "heading",
            text: "Steps of an election",
          },
          {
            type: "table",
            headers: ["Step", "What happens"],
            rows: [
              ["1. Electoral rolls", "The list of voters is updated; each voter gets an Electors Photo Identity Card (EPIC)."],
              ["2. Notification", "The schedule is announced; the Model Code of Conduct starts."],
              ["3. Nomination", "Candidates file papers and pay a **security deposit** (₹25,000 for Lok Sabha; ₹12,500 for SC/ST candidates). Minimum age: 25 for Lok Sabha and Assembly."],
              ["4. Scrutiny and withdrawal", "Papers are checked; candidates may withdraw by a set date."],
              ["5. Campaign", "Parties release **manifestos** and hold rallies; campaigning stops **48 hours** before polling ends."],
              ["6. Polling", "Voters vote in secret on **EVMs** with a **VVPAT** slip; the finger is marked with indelible ink. **NOTA** lets a voter reject all candidates."],
              ["7. Counting and result", "Votes are counted; the candidate with the most votes wins (**first-past-the-post**)."],
            ],
          },
          {
            type: "example",
            title: "Who wins the seat?",
            problem: "In a Lok Sabha seat, A gets 4,10,000 votes, B gets 3,90,000, C gets 1,50,000 and NOTA gets 50,000. Who wins? Does A need more than half the votes?",
            steps: [
              "Total valid votes for candidates = 4,10,000 + 3,90,000 + 1,50,000 = 9,50,000.",
              "India uses **first-past-the-post**: the candidate with the highest number of votes wins.",
              "A has the highest number (4,10,000). A does not need more than half of the votes.",
              "NOTA votes do not change the result; the candidate with the most votes still wins.",
            ],
            answer: "A wins, even though A got less than half of all votes.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "The Election Commission of India conducts Gram Panchayat elections in Karnataka.",
                answer: false,
                explain: "Panchayat and municipal elections are conducted by the State Election Commission.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "If NOTA gets the highest number of votes, the election is cancelled and held again.",
            right: "Under the present rules, **NOTA** only records that a voter rejected all candidates. The candidate with the most votes still wins.",
            why: "NOTA feels like a 'reject' button, so people assume it has power to cancel. It was introduced in 2013 to let voters express dissent in secret, not to change the result.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Arrange the steps of an election in order.",
              items: [
                "Electoral rolls are updated",
                "Election schedule is notified",
                "Candidates file nominations",
                "Scrutiny and withdrawal of nominations",
                "Election campaign",
                "Polling, then counting of votes",
              ],
              explain: "The voters' list comes first, then notification, nomination, scrutiny, campaign, and finally polling and counting.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked for 'functions of the Election Commission', write at least four with a short line each. A frequent error is listing 'conducts panchayat elections', which belongs to the State Election Commission.",
          },
          {
            type: "keypoints",
            items: [
              "The Election Commission (Article 324) is an independent body; the CEC is removed only like a Supreme Court judge.",
              "It prepares electoral rolls, fixes schedules, recognises parties, allots symbols and enforces the Model Code of Conduct.",
              "Steps: rolls → notification → nomination → scrutiny → campaign → polling → counting.",
              "India uses first-past-the-post; panchayat and municipal polls are run by State Election Commissions.",
            ],
          },
        ],
        flashcards: [
          { front: "Article 324", back: "Sets up the Election Commission and gives it control of elections." },
          { front: "Term of the Chief Election Commissioner", back: "Six years or until the age of 65, whichever is earlier." },
          { front: "Model Code of Conduct", back: "Rules for parties and candidates during elections, enforced by the Election Commission." },
          { front: "NOTA", back: "'None of the Above': an option on the EVM to reject all candidates (since 2013)." },
          { front: "First-past-the-post", back: "The candidate with the most votes wins, even without a majority of votes." },
          { front: "National Voters' Day", back: "25 January, the day the Election Commission was formed in 1950." },
          { front: "Who conducts panchayat elections?", back: "The State Election Commission." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The Chief Election Commissioner can be removed from office:",
            options: ["By the Prime Minister at any time", "In the same way as a judge of the Supreme Court", "By the President on the advice of the Cabinet", "By the Lok Sabha alone"],
            answer: 1,
            explain: "This difficult removal process keeps the CEC independent of the government.",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT a function of the Election Commission of India?",
            options: ["Preparing electoral rolls", "Allotting symbols to parties", "Conducting municipal elections", "Conducting the election of the President"],
            answer: 2,
            explain: "Municipal and panchayat elections are conducted by State Election Commissions.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Campaigning must stop ___ hours before the close of polling.",
            answer: ["48", "forty-eight", "forty eight"],
            explain: "The 48-hour silence period gives voters time to think without pressure.",
          },
          {
            kind: "order",
            q: "Put these election steps in order.",
            items: ["Notification", "Filing of nominations", "Scrutiny of nominations", "Polling", "Counting of votes"],
            explain: "A candidate's papers are checked after filing and before the campaign and polling.",
          },
          {
            kind: "truefalse",
            q: "In India a candidate must get more than 50% of the votes to win a Lok Sabha seat.",
            answer: false,
            explain: "Under first-past-the-post, the candidate with the highest number of votes wins.",
          },
          {
            kind: "numeric",
            q: "What is the minimum age (in years) to contest an election to the Lok Sabha?",
            answer: 25,
            unit: "years",
            explain: "It is 25 for the Lok Sabha and State Assemblies, and 30 for the Rajya Sabha.",
          },
          {
            kind: "multi",
            q: "Which steps help keep voting free and fair? Choose all that apply.",
            options: ["Secret ballot on EVMs", "Indelible ink on the finger", "VVPAT slips", "Voters telling officials whom they voted for"],
            answers: [0, 1, 2],
            explain: "Voting is secret. Ink stops double voting, and VVPAT lets the voter check the vote.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ICSE Civics: Local Self-Government: Rural; Karnataka: Local Self-Government */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-local-govt-rural",
    title: "Local Self-Government: Rural",
    icon: "🏡",
    description: "Panchayati Raj, the 73rd Amendment, the Gram Sabha and the three tiers from village to district, with Karnataka's Grama, Taluk and Zilla Panchayats.",
    lessons: [
      {
        slug: "c9-panchayati-raj-73rd",
        title: "Panchayati Raj and the 73rd Amendment",
        summary: "What local self-government is, how Panchayati Raj began, and what the 73rd Amendment (1992) made compulsory.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🚰",
            caption: "The handpump in a village has broken. Should the villagers wait for an order from Delhi or Bengaluru, or fix it themselves?",
          },
          {
            type: "text",
            md: "Problems like a broken handpump, a dark street or a blocked drain are best solved by the people who live there. When local people run local affairs through bodies they elect, it is called **local self-government**.\n\nIn villages this system is called **Panchayati Raj**. Mahatma Gandhi dreamt of **Gram Swaraj** (self-rule by villages). The Constitution's Directive Principles (**Article 40**) also ask the state to organise village panchayats.",
          },
          {
            type: "text",
            md: "In 1957 the **Balwant Rai Mehta Committee** suggested a **three-tier** system: at the village, block and district levels. Rajasthan was the first to start it, at **Nagaur on 2 October 1959**.\n\nBut for many years, panchayats were weak. Elections were not held on time, they had little money, and women and weaker sections had few seats. To fix this, Parliament passed the **73rd Constitutional Amendment Act, 1992**. It came into force on **24 April 1993**, now marked as **National Panchayati Raj Day**. It added **Part IX** and the **Eleventh Schedule** (29 subjects) to the Constitution.",
          },
          {
            type: "table",
            headers: ["Provision of the 73rd Amendment", "What it means"],
            rows: [
              ["**Three tiers**", "Village, intermediate (block) and district levels. A state with a population of 20 lakh or less need not have the middle tier."],
              ["**Gram Sabha**", "All persons registered as voters in the village area. It is the base of the system."],
              ["**Direct elections**", "Members at all three levels are elected directly by the people."],
              ["**Term**", "Five years. If a panchayat is dissolved early, a new one must be elected within six months."],
              ["**Reservation for SC and ST**", "Seats in proportion to their share of the population."],
              ["**Reservation for women**", "Not less than **one-third** of seats (including among SC/ST seats) and of chairperson posts. Reservation for backward classes is left to the states."],
              ["**State Election Commission**", "Conducts panchayat elections."],
              ["**State Finance Commission**", "Set up every five years to review the finances of panchayats."],
            ],
          },
          {
            type: "example",
            title: "Working out women's seats",
            problem: "A Zila Parishad has 45 elected seats. Under the 73rd Amendment, what is the smallest number of seats that must be reserved for women?",
            steps: [
              "The rule is 'not less than one-third' of the seats.",
              "One-third of 45 = 45 ÷ 3 = 15.",
              "This count includes women's seats inside the SC and ST reserved seats.",
              "A state may reserve more. Many states, including Karnataka, reserve half the seats for women.",
            ],
            answer: "At least 15 seats must be reserved for women.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who are the members of the Gram Sabha?",
                options: ["Only the elected panchs", "All persons registered as voters in the village area", "All the people of the village, including children", "Only the Sarpanch and the Secretary"],
                answer: 1,
                explain: "Every adult whose name is on the voters' list of the village area is a member of the Gram Sabha.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The Gram Sabha and the Gram Panchayat are the same body.",
            right: "The **Gram Sabha** is the whole body of village voters. The **Gram Panchayat** is the smaller body of members they elect, which does the day-to-day work.",
            why: "The names sound alike and both work for the village. Think of the Gram Sabha as the 'general body' and the Gram Panchayat as its 'working committee', which answers to it.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each term to its meaning.",
              pairs: [
                ["73rd Amendment", "Gave constitutional status to panchayats"],
                ["Eleventh Schedule", "List of 29 subjects for panchayats"],
                ["State Election Commission", "Conducts panchayat elections"],
                ["State Finance Commission", "Reviews the money and taxes of panchayats"],
                ["Balwant Rai Mehta Committee", "Suggested a three-tier system in 1957"],
              ],
              explain: "The 1957 committee gave the idea; the 1992 Amendment made it compulsory and gave panchayats their own commissions and list of subjects.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Remember the pair: **73rd Amendment → rural (Part IX, 11th Schedule, 29 subjects)** and **74th Amendment → urban (Part IXA, 12th Schedule, 18 subjects)**. Swapping them is one of the most common errors in this chapter.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "If a Gram Panchayat is dissolved early, within how many months must a new one be elected?",
                answer: 6,
                unit: "months",
                explain: "The 73rd Amendment requires elections within six months of dissolution.",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Local self-government means local people run local affairs through elected bodies.",
              "Panchayati Raj began at Nagaur, Rajasthan, on 2 October 1959, after the Balwant Rai Mehta Committee (1957).",
              "The 73rd Amendment (1992, in force 24 April 1993) made a three-tier system, regular five-year elections and reservations compulsory.",
              "At least one-third of seats and chairperson posts are reserved for women; SC/ST seats follow population.",
            ],
          },
        ],
        flashcards: [
          { front: "Local self-government", back: "Management of local affairs by bodies elected by local people." },
          { front: "Balwant Rai Mehta Committee", back: "Set up in 1957; recommended three-tier Panchayati Raj." },
          { front: "Where and when did Panchayati Raj begin?", back: "Nagaur, Rajasthan, on 2 October 1959." },
          { front: "73rd Amendment", back: "Passed in 1992, in force 24 April 1993; gave constitutional status to panchayats (Part IX, Eleventh Schedule)." },
          { front: "Gram Sabha", back: "All persons registered as voters in the village area." },
          { front: "Women's reservation in panchayats (Constitution)", back: "Not less than one-third of seats and of chairperson posts." },
          { front: "National Panchayati Raj Day", back: "24 April." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The 73rd Amendment deals with:",
            options: ["Municipalities", "Panchayats", "Fundamental Duties", "The Election Commission"],
            answer: 1,
            explain: "The 73rd is for panchayats (rural); the 74th is for municipalities (urban).",
          },
          {
            kind: "truefalse",
            q: "Every state must have all three tiers of panchayats, however small its population.",
            answer: false,
            explain: "A state with a population of 20 lakh or less need not have the intermediate (block) tier.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The Eleventh Schedule lists ___ subjects for panchayats.",
            answer: ["29", "twenty-nine", "twenty nine"],
            explain: "The Eleventh Schedule has 29 subjects, such as drinking water, minor irrigation and primary education.",
          },
          {
            kind: "mcq",
            q: "Who conducts elections to panchayats?",
            options: ["Election Commission of India", "State Election Commission", "District Collector", "Gram Sabha"],
            answer: 1,
            explain: "The 73rd Amendment gave this task to the State Election Commission of each state.",
          },
          {
            kind: "numeric",
            q: "A Gram Panchayat has 18 seats. What is the minimum number of seats reserved for women under the 73rd Amendment?",
            answer: 6,
            explain: "Not less than one-third: 18 ÷ 3 = 6.",
          },
          {
            kind: "multi",
            q: "Which of these did the 73rd Amendment make compulsory? Choose all that apply.",
            options: ["Elections every five years", "One-third seats for women", "Reservation for SC and ST in proportion to population", "Reservation for backward classes in every state"],
            answers: [0, 1, 2],
            explain: "Reservation for backward classes was left to each state to decide.",
            difficulty: 2,
            hint: "One item was left to the states.",
          },
          {
            kind: "order",
            q: "Arrange these in order of time.",
            items: ["Balwant Rai Mehta Committee report", "Panchayati Raj begins at Nagaur", "73rd Amendment Act passed", "73rd Amendment comes into force"],
            explain: "1957 → 1959 → 1992 → 24 April 1993.",
          },
        ],
      },
      {
        slug: "c9-panchayat-three-tiers",
        title: "Gram Panchayat, Panchayat Samiti and Zila Parishad",
        summary: "The three tiers of rural local government, their heads, officials, functions and income, with Karnataka's Grama, Taluk and Zilla Panchayats.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Think of a ladder with three steps. The lowest step is the village, the middle step is the block, and the top step is the district. Each step has its own elected body, and each higher body helps and guides the ones below it.",
          },
          {
            type: "table",
            headers: ["Level", "Body", "Elected head", "Main official"],
            rows: [
              ["Village", "**Gram Panchayat**", "**Sarpanch** (with an Up-Sarpanch)", "Panchayat Secretary"],
              ["Block", "**Panchayat Samiti**", "Chairperson (often called Pradhan)", "**Block Development Officer (BDO)**"],
              ["District", "**Zila Parishad**", "Chairperson (often called Zila Pramukh)", "**Chief Executive Officer (CEO)**"],
            ],
          },
          {
            type: "text",
            md: "The **Gram Panchayat** is elected by the voters of one village or a group of small villages. Its members are often called **panchs**. In some states the Sarpanch is elected directly by the voters; in others the members elect the Sarpanch from among themselves.\n\nThe **Panchayat Samiti** links the Gram Panchayats of a block. The **Zila Parishad** plans for the whole district and supervises the Samitis. MPs and MLAs of the area may also be members of the higher tiers, as the state law decides.",
          },
          {
            type: "table",
            headers: ["Body", "Some functions"],
            rows: [
              ["Gram Panchayat", "Drinking water, village roads, street lights, drains and sanitation, registering births and deaths, carrying out schemes such as MGNREGA"],
              ["Panchayat Samiti", "Brings together the plans of Gram Panchayats; runs block-level work in farming, health, schools and welfare schemes"],
              ["Zila Parishad", "Prepares district plans, supervises Panchayat Samitis, distributes government funds, advises the state government"],
            ],
          },
          {
            type: "text",
            md: "**Where does the money come from?** Gram Panchayats collect taxes on houses and land, fees from markets and fairs, and small fines. Most of the money, however, comes as **grants** from the state and Union governments.\n\nSome states also have **Nyaya Panchayats**, which settle small civil and criminal disputes in a village. They can impose small fines but cannot send anyone to prison.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Karnataka: Grama, Taluk and Zilla Panchayat",
            md: "In Karnataka the three tiers are the **Grama Panchayat**, the **Taluk Panchayat** and the **Zilla Panchayat**, under the **Karnataka Panchayat Raj Act, 1993** (renamed the Karnataka Gram Swaraj and Panchayat Raj Act in 2015). Each is headed by an elected **Adhyaksha** (President) and **Upadhyaksha** (Vice-President), chosen by the members. The officials are the **Panchayat Development Officer (PDO)** at the Grama Panchayat, the **Executive Officer** at the Taluk Panchayat and the **Chief Executive Officer** at the Zilla Panchayat. Karnataka reserves **50%** of seats for women, more than the one-third the Constitution requires. Karnataka was also among the first states to hold elections to a strong panchayat system, with **Mandal Panchayats** in 1987.",
          },
          {
            type: "example",
            title: "Which body should act?",
            problem: "In a village near Mandya, (a) the street lights on the main road are not working, and (b) the district needs a plan to repair rural roads linking several taluks. Which body handles each?",
            steps: [
              "(a) Street lights inside one village are a village-level civic need, so the **Grama Panchayat** handles it. Villagers can also raise it in the **Gram Sabha**.",
              "(b) A plan that covers several taluks is a district-level task, so the **Zilla Panchayat** prepares it.",
              "The **Taluk Panchayat** in between would help coordinate the work across its Grama Panchayats.",
            ],
            answer: "(a) Grama Panchayat; (b) Zilla Panchayat, with the Taluk Panchayat coordinating.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The Block Development Officer works with the:",
                options: ["Gram Panchayat", "Panchayat Samiti", "Zila Parishad", "Gram Sabha"],
                answer: 1,
                explain: "The BDO is the main official at the block level, working with the Panchayat Samiti.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The Zila Parishad is the most important tier because it is at the top, so the Gram Sabha has no real power.",
            right: "The **Gram Sabha** is the foundation of Panchayati Raj. It discusses the panchayat's plans and accounts and can question its members.",
            why: "In a ladder, the top looks most powerful. But Panchayati Raj is built from the bottom up: the Gram Sabha is where every adult villager takes part directly.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which tier usually does this?",
              groups: ["Gram Panchayat", "Panchayat Samiti", "Zila Parishad"],
              items: [
                { text: "Repair a village well", group: 0, hint: "A need inside one village." },
                { text: "Register a birth in the village", group: 0, hint: "Done at the village level." },
                { text: "Combine the plans of all Gram Panchayats in a block", group: 1, hint: "The middle tier links the villages of a block." },
                { text: "Run block-level farming and health programmes", group: 1, hint: "The BDO's office handles this." },
                { text: "Prepare a development plan for the whole district", group: 2, hint: "The top tier plans for the district." },
                { text: "Supervise the Panchayat Samitis", group: 2, hint: "Only the top tier guides the middle one." },
              ],
              explain: "Small, local needs stay with the Gram Panchayat; coordination of a block goes to the Samiti; district planning and supervision go to the Zila Parishad.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'composition' questions, write who the members are, who heads the body, and the main official (Secretary, BDO or CEO). Karnataka papers expect the Kannada-state names: **Grama Panchayat, Taluk Panchayat, Zilla Panchayat** and **PDO / EO / CEO**.",
          },
          {
            type: "keypoints",
            items: [
              "Three tiers: Gram Panchayat (village), Panchayat Samiti (block), Zila Parishad (district).",
              "Heads: Sarpanch, Chairperson (Pradhan), Chairperson (Zila Pramukh); officials: Secretary, BDO, CEO.",
              "Income: local taxes and fees, but mostly grants from the state and the Union.",
              "Karnataka: Grama, Taluk and Zilla Panchayats, each with an Adhyaksha; 50% seats for women.",
            ],
          },
        ],
        flashcards: [
          { front: "Head of a Gram Panchayat", back: "The Sarpanch (in Karnataka, the Adhyaksha)." },
          { front: "Block Development Officer (BDO)", back: "The main government official at the Panchayat Samiti (block) level." },
          { front: "Chief official of a Zila Parishad", back: "The Chief Executive Officer (CEO)." },
          { front: "Karnataka's three tiers", back: "Grama Panchayat, Taluk Panchayat and Zilla Panchayat." },
          { front: "PDO", back: "Panchayat Development Officer, the official of a Grama Panchayat in Karnataka." },
          { front: "Nyaya Panchayat", back: "A village body in some states that settles small disputes; it can fine but cannot imprison." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In Karnataka, the middle tier of Panchayati Raj is called the:",
            options: ["Mandal Panchayat", "Taluk Panchayat", "Zilla Panchayat", "Nagar Panchayat"],
            answer: 1,
            explain: "Karnataka's tiers are Grama, Taluk and Zilla Panchayat. A Nagar Panchayat is an urban body.",
          },
          {
            kind: "order",
            q: "Arrange the bodies from the lowest level to the highest.",
            items: ["Gram Sabha", "Gram Panchayat", "Panchayat Samiti", "Zila Parishad"],
            explain: "The Gram Sabha of all voters elects the Gram Panchayat; above it are the block and district tiers.",
          },
          {
            kind: "truefalse",
            q: "A Nyaya Panchayat can send a person to prison.",
            answer: false,
            explain: "Nyaya Panchayats can impose small fines only.",
          },
          {
            kind: "fill",
            q: "The chief official of a Zila Parishad (Zilla Panchayat) is the Chief ___ Officer.",
            answer: ["Executive"],
            explain: "The CEO is usually a senior officer appointed by the state government.",
          },
          {
            kind: "mcq",
            q: "What is the main source of money for most Gram Panchayats?",
            options: ["Income tax", "Grants from the state and Union governments", "Customs duty", "Fines from Nyaya Panchayats"],
            answer: 1,
            explain: "Local taxes and fees are small; grants from higher governments make up most of the income.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are functions of a Gram Panchayat? Choose all that apply.",
            options: ["Supplying drinking water", "Maintaining village roads", "Street lighting", "Preparing the district plan"],
            answers: [0, 1, 2],
            explain: "The district plan is prepared by the Zila Parishad.",
          },
          {
            kind: "mcq",
            q: "What share of seats in panchayats does Karnataka reserve for women?",
            options: ["One-fourth", "One-third", "One-half", "Two-thirds"],
            answer: 2,
            explain: "The Constitution requires at least one-third; Karnataka reserves 50%.",
            difficulty: 2,
            hint: "Karnataka gives more than the constitutional minimum.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ICSE Civics: Local Self-Government: Urban                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-local-govt-urban",
    title: "Local Self-Government: Urban",
    icon: "🏙️",
    description: "The 74th Amendment, Nagar Panchayats, Municipal Councils and Municipal Corporations, the Mayor and the Commissioner.",
    lessons: [
      {
        slug: "c9-urban-bodies-74th",
        title: "Urban Local Bodies and the 74th Amendment",
        summary: "Three kinds of urban local bodies, how a Municipal Corporation is organised, and its functions and income.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🗑️",
            caption: "Who collects the garbage, fixes potholes and supplies water in Mysuru, Pune or Guwahati? The city's own elected body.",
          },
          {
            type: "text",
            md: "Towns and cities have their own local self-government, called **urban local bodies** or **municipalities**. India's oldest is the **Madras Municipal Corporation**, set up in **1688**.\n\nThe **74th Constitutional Amendment Act, 1992** gave these bodies constitutional status. It came into force on **1 June 1993**, added **Part IXA** and the **Twelfth Schedule** (18 subjects, such as town planning, water supply and slum improvement).",
          },
          {
            type: "table",
            headers: ["Body", "For which area", "Elected head", "Main official"],
            rows: [
              ["**Nagar Panchayat**", "An area changing from rural to urban", "Chairperson / President", "Executive Officer"],
              ["**Municipal Council** (Municipality)", "A smaller urban area (town)", "Chairperson / President", "Executive Officer (Chief Officer)"],
              ["**Municipal Corporation**", "A larger urban area (big city)", "**Mayor** (with a Deputy Mayor)", "**Municipal Commissioner**"],
            ],
          },
          {
            type: "text",
            md: "A city is divided into **wards**. The voters of each ward elect a **councillor** (also called a corporator). The councillors together form the general body, which makes decisions and passes the budget. In many states they elect the **Mayor** from among themselves.\n\nThe **Municipal Commissioner** is usually an IAS officer **appointed by the state government**. The Commissioner is the **chief executive** who carries out the decisions and runs the offices day to day.\n\nThe 74th Amendment rules match the 73rd: a **five-year term**, seats for **SC/ST** by population, **not less than one-third** seats for **women**, elections by the **State Election Commission**, and a **State Finance Commission**. Cities with a population of **3 lakh or more** must also have **ward committees**.",
          },
          {
            type: "table",
            headers: ["Obligatory (must do)", "Discretionary (may do if funds allow)"],
            rows: [
              ["Water supply and drainage", "Parks and gardens"],
              ["Cleaning streets and removing garbage", "Libraries and museums"],
              ["Street lighting and roads", "Public transport such as city buses"],
              ["Registration of births and deaths", "Housing for low-income groups"],
              ["Hospitals, vaccination and fire services", "Fairs, exhibitions and sports grounds"],
            ],
          },
          {
            type: "text",
            md: "**Income** comes from **property tax** (the biggest local source), water charges, trade licence fees, building permit fees and advertisement tax, along with **grants** from the state and Union governments.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Karnataka note",
            md: "Karnataka has four kinds of urban local bodies: **City Corporations** (Mahanagara Palike, for example Mysuru, Hubballi-Dharwad and Mangaluru), **City Municipal Councils (CMC)**, **Town Municipal Councils (TMC)** and **Town Panchayats** (Pattana Panchayat). Bengaluru has its own special arrangements for city government under a separate state law.",
          },
          {
            type: "example",
            title: "Choosing the right urban body",
            problem: "A large village on a highway is fast turning into a town, with shops and small factories. Which urban body suits it, and who would head it?",
            steps: [
              "It is no longer fully rural but not yet a city: it is an area **in transition** from rural to urban.",
              "The 74th Amendment gives such areas a **Nagar Panchayat**.",
              "Its elected members choose a **Chairperson** (President); an Executive Officer handles the office work.",
              "If it grows into a big city later, it may become a **Municipal Council** and then a **Municipal Corporation**.",
            ],
            answer: "A Nagar Panchayat, headed by an elected Chairperson.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who is the chief executive of a Municipal Corporation?",
                options: ["Mayor", "Municipal Commissioner", "Deputy Mayor", "Chief Minister"],
                answer: 1,
                explain: "The Mayor is the elected head; the Commissioner, appointed by the state government, runs the administration.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The Mayor runs the day-to-day work of the city corporation.",
            right: "In most states the **Mayor** is the elected, mostly ceremonial head who chairs meetings. The **Municipal Commissioner** is the **chief executive** who runs the administration.",
            why: "The Mayor is the best-known face of the city, so people think the Mayor runs everything. In most states the real executive power rests with the Commissioner, appointed by the state government.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Obligatory or discretionary function?",
              groups: ["Obligatory", "Discretionary"],
              items: [
                { text: "Supplying drinking water", group: 0, hint: "A city cannot live without it." },
                { text: "Registering births and deaths", group: 0, hint: "A basic duty required by law." },
                { text: "Running a fire brigade", group: 0, hint: "Public safety cannot wait for spare funds." },
                { text: "Building a public library", group: 1, hint: "Useful, but done if money allows." },
                { text: "Laying out a park", group: 1, hint: "Nice to have, not basic." },
                { text: "Holding an exhibition", group: 1, hint: "An optional activity." },
              ],
              explain: "Obligatory functions are basic needs for health, safety and records. Discretionary functions improve city life when money is available.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to 'distinguish' the Mayor and the Commissioner, give three points: how chosen (elected by councillors vs appointed by the state government), role (head vs chief executive) and term. A frequent error is calling the Mayor an IAS officer.",
          },
          {
            type: "keypoints",
            items: [
              "The 74th Amendment (1992, in force 1 June 1993) gave urban local bodies constitutional status (Part IXA, 12th Schedule, 18 subjects).",
              "Three bodies: Nagar Panchayat, Municipal Council and Municipal Corporation.",
              "Mayor = elected head; Municipal Commissioner = chief executive appointed by the state.",
              "Main local income: property tax; most funds still come as grants.",
            ],
          },
        ],
        flashcards: [
          { front: "74th Amendment", back: "Passed in 1992, in force 1 June 1993; gave constitutional status to urban local bodies (Part IXA, Twelfth Schedule)." },
          { front: "Twelfth Schedule", back: "Lists 18 subjects for municipalities." },
          { front: "Nagar Panchayat", back: "Urban body for an area in transition from rural to urban." },
          { front: "Municipal Commissioner", back: "Chief executive of a Municipal Corporation, appointed by the state government." },
          { front: "Ward committees", back: "Required in cities with a population of 3 lakh or more." },
          { front: "Oldest Municipal Corporation in India", back: "Madras (now Chennai), set up in 1688." },
          { front: "Biggest local source of municipal income", back: "Property tax." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A Municipal Corporation is set up for:",
            options: ["A village", "An area in transition from rural to urban", "A smaller town", "A large city"],
            answer: 3,
            explain: "Large cities have corporations, smaller towns have councils, and transitional areas have Nagar Panchayats.",
          },
          {
            kind: "fill",
            q: "The Twelfth Schedule lists ___ subjects for urban local bodies.",
            answer: ["18", "eighteen"],
            explain: "The Eleventh Schedule (panchayats) has 29; the Twelfth (municipalities) has 18.",
          },
          {
            kind: "truefalse",
            q: "The Municipal Commissioner is elected by the voters of the city.",
            answer: false,
            explain: "The Commissioner is appointed by the state government; councillors are elected by voters.",
          },
          {
            kind: "mcq",
            q: "Which of these is a discretionary function of a municipality?",
            options: ["Water supply", "Street cleaning", "Building a museum", "Registering deaths"],
            answer: 2,
            explain: "A museum is useful but optional, so it is discretionary.",
          },
          {
            kind: "multi",
            q: "Which of these are rules common to the 73rd and 74th Amendments? Choose all that apply.",
            options: ["Five-year term", "Not less than one-third seats for women", "Elections by the State Election Commission", "The head is always an IAS officer"],
            answers: [0, 1, 2],
            explain: "Heads of local bodies are elected representatives, not IAS officers.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange the urban bodies from the smallest kind of area to the largest.",
            items: ["Nagar Panchayat", "Municipal Council", "Municipal Corporation"],
            explain: "Transitional area → smaller urban area → larger urban area.",
          },
          {
            kind: "mcq",
            q: "Ward committees are compulsory in cities with a population of at least:",
            options: ["1 lakh", "3 lakh", "10 lakh", "20 lakh"],
            answer: 1,
            explain: "The 74th Amendment requires ward committees where the population is 3 lakh or more. The 20 lakh figure belongs to the panchayat tier rule.",
            difficulty: 3,
            hint: "Do not mix it up with the 20 lakh rule for panchayats.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Karnataka Sociology: Socialisation                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-socialisation",
    title: "Socialisation",
    icon: "👪",
    description: "How a baby becomes a member of society: meaning, stages and agencies of socialisation.",
    lessons: [
      {
        slug: "c9-socialisation-agencies",
        title: "Socialisation and Its Agencies",
        summary: "The meaning and importance of socialisation, primary and secondary socialisation, and the family, school, peer group, religion and mass media as agencies.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A newborn baby cannot speak, does not know how to greet elders and has no idea what Ugadi or Eid is. By the age of ten, the same child speaks a language, follows rules at home and in school, and joins in festivals. How did this change happen?",
          },
          {
            type: "text",
            md: "**Socialisation** is the process by which a person learns the language, behaviour, values and customs (the **norms** and **culture**) of their society and becomes a social being.\n\nIt is a **lifelong** process. It starts at birth, but it does not stop when we grow up. A new employee learning office rules, or a bride learning the ways of a new family, is also being socialised.",
          },
          {
            type: "text",
            md: "Sociologists show how important socialisation is through cases of children who grew up away from human contact. A well-known case is **Kamala and Amala**, two girls found living with wolves near Midnapore in Bengal in **1920**. They walked on all fours, could not speak and ate like animals. This shows that human behaviour is **learnt** in society; it does not come automatically with birth.",
          },
          {
            type: "table",
            headers: ["Type", "When", "Main agencies"],
            rows: [
              ["**Primary socialisation**", "Early childhood", "Family"],
              ["**Secondary socialisation**", "Later childhood, youth and adult life", "School, peer group, workplace, mass media"],
            ],
          },
          {
            type: "heading",
            text: "Agencies of socialisation",
          },
          {
            type: "list",
            items: [
              "**Family**: the first and most important agency. Children learn language, manners, love and their first values here.",
              "**School**: teaches knowledge, discipline, punctuality and how to work with others.",
              "**Peer group**: friends of the same age. Children learn cooperation, sharing and sometimes new fashions and habits.",
              "**Neighbourhood**: teaches how to live with people outside the family.",
              "**Religion**: teaches moral values, rituals and ideas of right and wrong.",
              "**Mass media**: TV, newspapers, films and the internet shape ideas, language and lifestyle.",
            ],
          },
          {
            type: "example",
            title: "Tracing the agencies",
            problem: "Ravi, a Class 9 student in Hassan, (a) touches the feet of his grandparents, (b) stands in a queue for the school bus, and (c) picks up a new slang word from a web series. Which agency taught each?",
            steps: [
              "(a) Respect for elders through a family custom is learnt at home: the **family**.",
              "(b) Waiting in a line and following rules is taught at **school**.",
              "(c) A new word picked up from a show comes from the **mass media** (and often spreads through the **peer group**).",
            ],
            answer: "(a) Family, (b) school, (c) mass media, often with the peer group.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which is called the primary agency of socialisation?",
                options: ["School", "Family", "Mass media", "Workplace"],
                answer: 1,
                explain: "The family is the first and most important agency; early (primary) socialisation happens there.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Socialisation ends when a child grows up and finishes school.",
            right: "Socialisation is a **lifelong** process. Adults keep learning new roles: as workers, parents, citizens or retired people.",
            why: "Most visible learning happens in childhood, so it seems to stop there. But every new role in life brings new norms to learn.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Predict: what happens to a child raised without people?",
              emoji: "🐺",
              options: [
                "The child will still speak and behave like other children, because it is natural",
                "The child will not learn human speech and behaviour without people",
              ],
              answer: 1,
              trap: 0,
              explain: "Cases like Kamala and Amala show that language and human ways of living are **learnt** through contact with people. Being born human is not enough; socialisation makes us social beings.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'Explain the agencies of socialisation', write each agency as a heading with one line on **what** it teaches. Answers that only list the names usually lose marks. Begin with the family and call it the primary agency.",
          },
          {
            type: "keypoints",
            items: [
              "Socialisation is the lifelong process of learning the norms and culture of society.",
              "Primary socialisation happens in early childhood, mainly in the family; secondary socialisation happens later.",
              "Agencies: family, school, peer group, neighbourhood, religion and mass media.",
              "Children raised without people, like Kamala and Amala, show that human behaviour is learnt.",
            ],
          },
        ],
        flashcards: [
          { front: "Socialisation", back: "The lifelong process by which a person learns the norms, values and culture of society and becomes a social being." },
          { front: "Primary agency of socialisation", back: "The family." },
          { front: "Peer group", back: "A group of friends of about the same age and status." },
          { front: "Primary socialisation", back: "Learning in early childhood, mainly within the family." },
          { front: "Secondary socialisation", back: "Learning later in life through school, peer groups, work and mass media." },
          { front: "Kamala and Amala", back: "Two girls found living with wolves near Midnapore in 1920; they show that human behaviour is learnt." },
        ],
        quiz: [
          {
            kind: "truefalse",
            q: "Socialisation is a lifelong process.",
            answer: true,
            explain: "It begins at birth and continues as we take on new roles throughout life.",
          },
          {
            kind: "mcq",
            q: "Learning cooperation and sharing while playing with friends is socialisation through the:",
            options: ["Family", "Peer group", "Religion", "State"],
            answer: 1,
            explain: "Friends of the same age form the peer group.",
          },
          {
            kind: "fill",
            q: "The first and most important agency of socialisation is the ___.",
            answer: ["family"],
            explain: "Early, primary socialisation takes place in the family.",
          },
          {
            kind: "multi",
            q: "Which of these are agencies of secondary socialisation? Choose all that apply.",
            options: ["School", "Workplace", "Mass media", "Family in early childhood"],
            answers: [0, 1, 2],
            explain: "The family in early childhood is the main agency of primary socialisation.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What does the case of Kamala and Amala show?",
            options: ["Children learn best from television", "Human behaviour is learnt through living with people", "Wolves can be trained to live with humans", "Language comes naturally at birth"],
            answer: 1,
            explain: "Without human contact they did not learn speech or human habits.",
          },
          {
            kind: "mcq",
            q: "A new bank employee learns how to dress and speak at work. This is an example of:",
            options: ["Primary socialisation", "Secondary socialisation", "No socialisation, because adults are fully socialised", "Heredity"],
            answer: 1,
            explain: "Learning new norms at the workplace in adult life is secondary socialisation.",
            difficulty: 2,
            hint: "Think about when it happens and which agency is involved.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Karnataka Sociology: Community and Social Groups                    */
  /* ------------------------------------------------------------------ */
  {
    slug: "c9-community-social-groups",
    title: "Community and Social Groups",
    icon: "🤝",
    description: "What makes a community, how a social group differs from a crowd, and primary, secondary, in- and out-groups.",
    lessons: [
      {
        slug: "c9-community-and-groups",
        title: "Community and Social Groups",
        summary: "Elements of a community, rural, urban and tribal communities, community and association, and the classification of social groups.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Think of all the people waiting at a bus stop in Hubballi. They are close together, but they do not know one another and will leave in different buses. Now think of your family, your class, or your village. These people know one another, share something, and feel they belong together. Sociology studies this difference.",
          },
          {
            type: "text",
            md: "A **community** is a group of people living in a **definite area** who share a **common life** and have a strong **we-feeling** (also called **community sentiment**). A village, a town or a tribe living in a forest area are examples.\n\nIts main elements are: a group of people, a definite **locality**, **community sentiment**, and a **common life** (shared customs, language, festivals). Communities grow naturally; nobody 'joins' a village by filling a form.",
          },
          {
            type: "table",
            headers: ["Community", "Main features", "Example"],
            rows: [
              ["**Rural community**", "Small, close relations, farming as the main work, strong traditions", "A village in Mandya district"],
              ["**Urban community**", "Large, many kinds of work, more formal relations, fast change", "Bengaluru or Mysuru city"],
              ["**Tribal community**", "Lives in forests or hills, own dialect and customs, strong kinship ties", "Soliga people of the Biligiri Rangana hills"],
            ],
          },
          {
            type: "text",
            md: "An **association** is different. It is a group **formed on purpose** to meet a **specific aim**, with rules and voluntary membership, like a trade union, a cricket club or a cooperative society. A community covers the whole of life; an association covers one interest.\n\nA **social group** is two or more people who **interact** with one another, share common interests and have a **sense of belonging**. People at a bus stop are only an **aggregate** (a collection), not a social group.",
          },
          {
            type: "table",
            headers: ["Primary group", "Secondary group"],
            rows: [
              ["Small in size", "Large in size"],
              ["Face-to-face, close and personal relations", "Formal and impersonal relations"],
              ["Lasts long, often for life", "May be short or long; members join and leave"],
              ["Family, play group, close neighbours", "Political party, company, trade union"],
            ],
          },
          {
            type: "text",
            md: "The terms **primary group** and secondary group come from the work of the American sociologist **Charles Horton Cooley**, who called primary groups the 'nursery of human nature'.\n\n**W. G. Sumner** divided groups into the **in-group** (the group a person feels 'we' about, such as 'our school team') and the **out-group** (the group seen as 'they', such as the rival school's team).",
          },
          {
            type: "example",
            title: "Group or not?",
            problem: "Classify: (a) Neha's family, (b) the crowd watching a street magic show, (c) the Karnataka State Road Transport Corporation employees' union.",
            steps: [
              "(a) A family is small, face-to-face and lasting: a **primary group**.",
              "(b) The crowd gathers by chance, with no lasting relations or sense of belonging: an **aggregate**, not a social group.",
              "(c) A union is large, formal and formed for a specific aim: a **secondary group**, and also an **association**.",
            ],
            answer: "(a) Primary group, (b) not a social group (an aggregate), (c) secondary group and association.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The 'we-feeling' among members of a community is called:",
                options: ["Association", "Community sentiment", "Aggregate", "Out-group"],
                answer: 1,
                explain: "Community sentiment is the feeling of belonging together that marks a community.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Any number of people at one place, such as passengers in a train, is a social group.",
            right: "A **social group** needs **interaction**, common interests and a **sense of belonging**. A chance gathering is only an **aggregate** or a crowd.",
            why: "In everyday speech we call any set of people a 'group'. In sociology the word is narrower: being near each other is not enough; members must relate to one another.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Primary group or secondary group?",
              groups: ["Primary group", "Secondary group"],
              items: [
                { text: "Family", group: 0, hint: "Small, close and lifelong." },
                { text: "Childhood play group", group: 0, hint: "Face-to-face friends." },
                { text: "Close neighbours in a village", group: 0, hint: "Personal, daily contact." },
                { text: "A political party", group: 1, hint: "Large and formal, with a specific aim." },
                { text: "A software company with 5,000 workers", group: 1, hint: "Members are linked by work rules, not close ties." },
                { text: "A trade union", group: 1, hint: "Formed for a purpose, with formal membership." },
              ],
              explain: "Primary groups are small and personal and shape our early character. Secondary groups are large, formal and formed for specific aims.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "'Distinguish between primary and secondary groups' is a common question. Write it as a table with at least four points (size, type of relations, duration, examples). Name **Cooley** for primary groups and **Sumner** for in-group and out-group.",
          },
          {
            type: "keypoints",
            items: [
              "A community has people, a definite locality, community sentiment and a common life.",
              "Communities may be rural, urban or tribal; an association is formed for a specific aim.",
              "A social group needs interaction and a sense of belonging; an aggregate does not.",
              "Primary (Cooley) vs secondary groups; in-group vs out-group (Sumner).",
            ],
          },
        ],
        flashcards: [
          { front: "Community", back: "A group of people living in a definite area, sharing a common life and a we-feeling." },
          { front: "Community sentiment", back: "The we-feeling or sense of belonging among members of a community." },
          { front: "Association", back: "A group formed deliberately for a specific aim, with rules and voluntary membership." },
          { front: "Social group", back: "Two or more people who interact, share interests and feel they belong together." },
          { front: "Primary group (Cooley)", back: "A small, face-to-face, intimate and lasting group, such as the family." },
          { front: "In-group and out-group", back: "Sumner's terms for 'we' (our group) and 'they' (other groups)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who introduced the concept of the primary group?",
            options: ["W. G. Sumner", "Charles Horton Cooley", "Mahatma Gandhi", "B. R. Ambedkar"],
            answer: 1,
            explain: "Cooley described primary groups; Sumner gave the terms in-group and out-group.",
          },
          {
            kind: "truefalse",
            q: "Passengers waiting at a railway platform form a social group.",
            answer: false,
            explain: "They are an aggregate: there is no lasting interaction or sense of belonging.",
          },
          {
            kind: "fill",
            q: "A group formed for a specific purpose, like a cricket club, is called an ___.",
            answer: ["association"],
            explain: "Associations are deliberately formed for specific aims; communities grow naturally.",
          },
          {
            kind: "multi",
            q: "Which are elements of a community? Choose all that apply.",
            options: ["A definite locality", "Community sentiment", "A common life", "A written membership form"],
            answers: [0, 1, 2],
            explain: "Communities grow naturally; membership forms belong to associations.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Students of your school cheering 'our team' against a rival school show the idea of:",
            options: ["Aggregate", "In-group", "Secondary socialisation", "Tribal community"],
            answer: 1,
            explain: "'Our team' is the in-group; the rival school's team is the out-group.",
          },
          {
            kind: "mcq",
            q: "Which of these is a feature of a secondary group?",
            options: ["Small size", "Face-to-face intimate relations", "Formal and impersonal relations", "Lasts for life by birth"],
            answer: 2,
            explain: "Secondary groups are large and formal; the other features describe primary groups.",
            difficulty: 2,
            hint: "Think of a large company or a political party.",
          },
        ],
      },
    ],
  },
];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Our Constitution": "c9-our-constitution",
  "9:Salient Features of the Constitution": "c9-salient-features",
  "9:Elections": "c9-elections",
  "9:Local Self-Government: Rural": "c9-local-govt-rural",
  "9:Local Self-Government: Urban": "c9-local-govt-urban",
  "9:Local Self-Government": ["c9-local-govt-rural", "c9-local-govt-urban"],
  "9:Socialisation": "c9-socialisation",
  "9:Community and Social Groups": "c9-community-social-groups",
};
