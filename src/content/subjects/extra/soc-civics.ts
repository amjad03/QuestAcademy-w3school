import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

/* ================================================================== */
/* CBSE: Democratic Politics II                                        */
/* ================================================================== */

const cbse: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "power-sharing",
    title: "Power Sharing",
    icon: "🤝",
    description: "Belgium and Sri Lanka, why power is shared, and the four forms of power sharing.",
    lessons: [
      {
        slug: "belgium-sri-lanka-forms",
        title: "Belgium, Sri Lanka and the Forms of Power Sharing",
        summary: "Two countries that made opposite choices, the prudential and moral reasons for sharing power, and its four forms.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🍰",
            caption: "Think of a class monitor who decides everything alone, and a class where every row has a say. Which class is calmer?",
          },
          {
            type: "text",
            md: "In a democracy, power is not kept in one pair of hands. It is spread among different organs, levels and groups. This is called **power sharing**.\n\nThe chapter compares two countries. Both had more than one language group. One shared power and stayed united. The other did not share power and fell into conflict.",
          },
          {
            type: "table",
            headers: ["", "Belgium", "Sri Lanka"],
            rows: [
              ["Main groups", "Dutch speakers 59% (Flemish region), French speakers 40% (Wallonia), German speakers 1%", "Sinhala speakers 74%, Tamil speakers 18%"],
              ["The tricky part", "In Brussels, the capital, 80% speak French and 20% speak Dutch", "Tamils are a minority in the country but live mostly in the north and east"],
              ["What the government did", "Amended the constitution four times between 1970 and 1993 to share power", "Followed **majoritarianism**: the 1956 Act made Sinhala the only official language"],
              ["Result", "Unity was kept; tensions were handled peacefully", "Distrust grew and turned into a long civil war"],
            ],
          },
          {
            type: "text",
            md: "**Majoritarianism** means the belief that the majority community should rule the country in whatever way it wants, without caring about the needs of the minority.\n\nBelgium's model gave equal numbers of Dutch- and French-speaking ministers in the central government, gave real powers to state governments, gave Brussels a separate government with equal representation, and set up a **community government** elected by people of one language group.",
          },
          {
            type: "heading",
            text: "Why share power?",
          },
          {
            type: "list",
            items: [
              "**Prudential reason** (based on careful calculation of gains and losses): power sharing reduces conflict between social groups and so keeps the country stable.",
              "**Moral reason** (valuable in itself): people have a right to be consulted about how they are governed. Sharing power is the very spirit of democracy.",
            ],
          },
          {
            type: "heading",
            text: "Four forms of power sharing",
          },
          {
            type: "table",
            headers: ["Form", "Who shares", "Example"],
            rows: [
              ["Horizontal", "Organs at the same level: legislature, executive, judiciary", "Courts can check laws made by Parliament (**checks and balances**)"],
              ["Vertical", "Governments at different levels", "Union government, state governments, panchayats and municipalities"],
              ["Among social groups", "Religious and linguistic groups, weaker sections", "Community government in Belgium; reserved seats for SC, ST and women in India"],
              ["Among parties and pressure groups", "Political parties, alliances, interest groups", "Coalition governments; traders' or farmers' groups influencing decisions"],
            ],
          },
          {
            type: "example",
            title: "Reading a case",
            problem: "A newspaper says: \"In a country, judges are appointed by the executive, but they can strike down laws that go against the constitution.\" Which form of power sharing is this?",
            steps: [
              "Ask: who is sharing power? Here it is the executive and the judiciary.",
              "Both are organs of the same (national) government, so they sit at the same level.",
              "Power shared among organs at the same level is horizontal power sharing.",
              "Each organ checks the others, so this is also a system of checks and balances.",
            ],
            answer: "Horizontal power sharing, a system of checks and balances.",
          },
          {
            type: "mistake",
            wrong: "Power sharing weakens a country, because many people can block a decision.",
            right: "Power sharing makes a country more stable, because every group feels it has a stake in the system.",
            why: "It feels right because one ruler can decide fast. But Sri Lanka shows that ignoring a large group breeds distrust and conflict, while Belgium shows that sharing power can hold a divided country together.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which act of the Sri Lankan government showed majoritarianism?",
                options: ["Giving Brussels a separate government", "The 1956 Act that made Sinhala the only official language", "Setting up a community government", "Giving Tamil equal status with Sinhala"],
                answer: 1,
                explain: "The 1956 Act recognised only Sinhala as the official language, ignoring the Tamil-speaking minority.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each case into its form of power sharing.",
              groups: ["Horizontal", "Vertical", "Among social groups"],
              items: [
                { text: "The Supreme Court checks a law passed by Parliament", group: 0, hint: "Two organs at the same level." },
                { text: "A state government runs the police", group: 1, hint: "Power divided between levels of government." },
                { text: "A gram panchayat decides on a village well", group: 1, hint: "Local government is a third level." },
                { text: "Seats reserved for women in local bodies", group: 2, hint: "A social group gets a fair share." },
                { text: "Belgium's community government", group: 2, hint: "Elected by people of one language group." },
                { text: "Parliament can remove the executive by a vote", group: 0, hint: "Legislature checks executive." },
              ],
              explain: "Ask who shares power. Organs at one level → **horizontal**. Different levels → **vertical**. Communities or weaker sections → **among social groups**.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "A 5-mark question often asks for the forms of power sharing. Name each form, say who shares power, and give one Indian example for each. Answers that only list the names lose marks.",
          },
          {
            type: "keypoints",
            items: [
              "Belgium shared power and stayed united; Sri Lanka chose majoritarianism and faced civil war.",
              "Prudential reason: power sharing reduces conflict. Moral reason: it is the spirit of democracy.",
              "Four forms: horizontal, vertical, among social groups, among parties and pressure groups.",
              "Horizontal sharing creates checks and balances among legislature, executive and judiciary.",
            ],
          },
        ],
        flashcards: [
          { front: "Majoritarianism", back: "The belief that the majority community should rule as it wishes, ignoring the needs of minorities." },
          { front: "Community government (Belgium)", back: "A government elected by people of one language community; it decides cultural, educational and language matters." },
          { front: "Prudential reason for power sharing", back: "It reduces conflict between social groups and so ensures political stability." },
          { front: "Moral reason for power sharing", back: "Citizens have a right to be consulted on how they are governed; it is the spirit of democracy." },
          { front: "Checks and balances", back: "Each organ of government checks the others, so no organ gets unlimited power." },
          { front: "Vertical power sharing", back: "Sharing power among governments at different levels: Union, state and local." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In Brussels, the capital of Belgium, the majority of people speak:",
            options: ["Dutch", "French", "German", "Flemish only"],
            answer: 1,
            explain: "About 80% of people in Brussels speak French, though Dutch speakers are the majority in Belgium as a whole.",
          },
          {
            kind: "truefalse",
            q: "Belgium amended its constitution four times between 1970 and 1993.",
            answer: true,
            explain: "These amendments created the Belgian model of power sharing.",
          },
          {
            kind: "fill",
            q: "Power shared between the legislature, executive and judiciary is called ___ power sharing.",
            answer: ["horizontal"],
            explain: "These organs are at the same level, so the sharing is horizontal.",
          },
          {
            kind: "multi",
            q: "Which of these are examples of power sharing among social groups?",
            options: ["Reserved constituencies for SC and ST", "Community government in Belgium", "Division of subjects between Union and states", "Courts reviewing laws"],
            answers: [0, 1],
            explain: "Reservations and community government give social groups a share. Union–state division is vertical; judicial review is horizontal.",
            difficulty: 2,
            hint: "Look for a group of people, not a level or organ of government.",
          },
          {
            kind: "mcq",
            q: "\"Power sharing reduces the possibility of conflict between social groups.\" This is a:",
            options: ["Moral reason", "Prudential reason", "Legal reason", "Religious reason"],
            answer: 1,
            explain: "It is based on calculating gains (stability) and losses (conflict), so it is prudential.",
            difficulty: 2,
            hint: "Prudent means careful and practical.",
          },
          {
            kind: "truefalse",
            q: "In Sri Lanka, the Tamil-speaking population is the majority in the country as a whole.",
            answer: false,
            explain: "Sinhala speakers are about 74%. Tamil speakers are about 18%, concentrated in the north and east.",
          },
          {
            kind: "mcq",
            q: "Coalition governments are an example of power sharing among:",
            options: ["Organs of government", "Levels of government", "Political parties", "Language groups"],
            answer: 2,
            explain: "In a coalition, two or more parties share power.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "federalism",
    title: "Federalism",
    icon: "🏛️",
    description: "Features of federations, how India is federal, the three lists and decentralisation.",
    lessons: [
      {
        slug: "federalism-in-india",
        title: "Federalism in India",
        summary: "What makes a country federal, the Union, State and Concurrent Lists, language policy and the 1992 local government reform.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🏘️",
            caption: "Your street light is fixed by the municipality, your school is run by the state, and your passport is issued by the Union. Three levels, one country.",
          },
          {
            type: "text",
            md: "**Federalism** is a system of government in which power is divided between a central authority and its various constituent units, such as states or provinces.\n\nIn a **unitary system**, there is only one level of government, or the lower levels are under the central government and get their powers from it.\n\nA federation has the following key features.",
          },
          {
            type: "list",
            items: [
              "There are two or more levels (tiers) of government.",
              "Each level governs the same citizens but has its own **jurisdiction** (area of authority) in law-making, taxation and administration.",
              "The jurisdiction of each level is written in the constitution, so the existence and authority of each level is guaranteed.",
              "Fundamental provisions of the constitution cannot be changed by one level alone; both levels must agree.",
              "Courts act as an umpire if levels disagree about their powers.",
              "Sources of revenue for each level are clearly specified.",
              "It has two aims: to protect the unity of the country and to respect regional diversity.",
            ],
          },
          {
            type: "table",
            headers: ["Coming together federation", "Holding together federation"],
            rows: [
              ["Independent states come together to form a bigger unit", "A large country divides power between the centre and states"],
              ["States usually have equal power and are strong", "The centre tends to be more powerful than the states"],
              ["USA, Switzerland, Australia", "India, Spain, Belgium"],
            ],
          },
          {
            type: "table",
            headers: ["List", "Who makes laws", "Examples"],
            rows: [
              ["**Union List**", "Union government only", "Defence, foreign affairs, banking, communications, currency"],
              ["**State List**", "State governments", "Police, trade and commerce within the state, agriculture, irrigation"],
              ["**Concurrent List**", "Both; if laws clash, the Union law prevails", "Education, forest, trade unions, marriage, adoption, succession"],
              ["**Residuary subjects**", "Union government", "Subjects not in any list, e.g. computer software"],
            ],
          },
          {
            type: "example",
            title: "Which list?",
            problem: "A state wants to make a law on adoption, and Parliament has already passed a law on adoption. The two laws differ. Which law will prevail?",
            steps: [
              "Find the subject: adoption.",
              "Adoption is in the Concurrent List, so both the Union and the states can make laws on it.",
              "Rule for the Concurrent List: if a state law conflicts with a Union law, the Union law prevails.",
            ],
            answer: "The law made by Parliament (the Union law) prevails.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "\"Computer software\" was not in any list when the Constitution was made. Who can make laws on it?",
                options: ["State governments", "Union government", "Both, equally", "Only the Supreme Court"],
                answer: 1,
                explain: "Subjects outside all three lists are residuary subjects, and the Union government legislates on them.",
              },
            ],
          },
          {
            type: "text",
            md: "**How federalism is practised:** many states were created on the basis of language (linguistic states), which made the country more united, not less. India has no national language; Hindi is the official language of the Union, and the Constitution recognises 22 languages as **Scheduled Languages**. Centre–state relations have also changed: since 1990, the rise of regional parties and coalition governments at the centre has given states more say.",
          },
          {
            type: "text",
            md: "**Decentralisation** means taking power away from the central and state governments and giving it to local government. The big step came with the **constitutional amendment of 1992**, which made local government more powerful and effective:\n\nRegular elections to local bodies became compulsory. Seats are reserved for SC, ST and OBC. At least **one-third** of all positions are reserved for women. Each state has a **State Election Commission** to hold these elections. States must share some powers and revenue with local bodies.",
          },
          {
            type: "table",
            headers: ["Rural", "Urban"],
            rows: [
              ["Gram panchayat (with the **gram sabha**, all voters of the village, overseeing it)", "Municipality in towns"],
              ["Panchayat samiti (block or mandal level)", "Municipal corporation in big cities"],
              ["Zilla parishad (district level)", "Headed by a chairperson (municipality) or **mayor** (corporation)"],
            ],
          },
          {
            type: "mistake",
            wrong: "In India, states get their powers from the Union government, so the Union can take them back whenever it likes.",
            right: "States get their powers from the Constitution. The Union cannot change the basic division of power on its own.",
            why: "It feels right because the Union is strong in a holding together federation. But the three lists are in the Constitution, and changing the power-sharing arrangement needs Parliament's approval by a two-thirds majority and, for many provisions, the agreement of at least half the states.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Put each subject in the right list.",
              groups: ["Union List", "State List", "Concurrent List"],
              items: [
                { text: "Defence", group: 0, hint: "Protecting the whole country is a national matter." },
                { text: "Currency", group: 0, hint: "One country, one currency." },
                { text: "Police", group: 1, hint: "Law and order is run by states." },
                { text: "Irrigation", group: 1, hint: "It depends on local rivers and fields." },
                { text: "Education", group: 2, hint: "Both levels can make laws." },
                { text: "Marriage", group: 2, hint: "Shared with adoption and succession." },
              ],
              explain: "National matters go to the **Union List**, local matters to the **State List**, and shared concerns to the **Concurrent List**, where the Union law prevails in a clash.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked \"How is India a federal country?\", match the features to India: three-fold distribution of powers, constitution as supreme, amendment needs both levels, courts as umpire, and the 1992 amendment adding a third tier. Many students write only the three lists and lose marks.",
          },
          {
            type: "keypoints",
            items: [
              "Federalism divides power between a central authority and constituent units; each level's powers are guaranteed by the constitution.",
              "India is a holding together federation.",
              "Union, State and Concurrent Lists; residuary subjects go to the Union.",
              "The 1992 amendment made local government a real third tier, with one-third positions reserved for women.",
            ],
          },
        ],
        flashcards: [
          { front: "Federalism", back: "A system in which power is divided between a central authority and constituent units such as states." },
          { front: "Holding together federation", back: "A large country divides power between the centre and its states, e.g. India, Spain, Belgium." },
          { front: "Coming together federation", back: "Independent states join to form a bigger unit, e.g. USA, Switzerland, Australia." },
          { front: "Residuary subjects", back: "Subjects not in any of the three lists. The Union government makes laws on them." },
          { front: "Gram sabha", back: "All the voters of a village. It meets to approve the panchayat's budget and review its work." },
          { front: "Decentralisation", back: "Taking power from the central and state governments and giving it to local government." },
          { front: "State Election Commission", back: "An independent body in each state that conducts panchayat and municipal elections." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a subject in the State List?",
            options: ["Banking", "Foreign affairs", "Agriculture", "Communications"],
            answer: 2,
            explain: "Agriculture is a State List subject. The others are in the Union List.",
          },
          {
            kind: "truefalse",
            q: "India is an example of a coming together federation.",
            answer: false,
            explain: "India is a holding together federation: a large country shared power between the centre and the states.",
          },
          {
            kind: "fill",
            q: "At least one-___ of all positions in local government bodies are reserved for women.",
            answer: ["third"],
            explain: "The 1992 constitutional amendment reserved at least one-third of positions for women.",
          },
          {
            kind: "multi",
            q: "Which of these are features of federalism?",
            options: ["Two or more levels of government", "Courts act as umpire in disputes over powers", "One level can change the constitution's basic provisions alone", "Sources of revenue of each level are specified"],
            answers: [0, 1, 3],
            explain: "In a federation, fundamental provisions cannot be changed by one level alone.",
            difficulty: 2,
            hint: "One option describes a unitary system.",
          },
          {
            kind: "order",
            q: "Arrange the levels of rural local government from village to district.",
            items: ["Gram panchayat", "Panchayat samiti", "Zilla parishad"],
            explain: "The gram panchayat is at the village, the panchayat samiti at block level and the zilla parishad at district level.",
          },
          {
            kind: "mcq",
            q: "If a Union law and a state law on education conflict, then:",
            options: ["The state law prevails", "The Union law prevails", "Both are cancelled", "The governor decides"],
            answer: 1,
            explain: "Education is in the Concurrent List, where the Union law prevails in a conflict.",
            difficulty: 2,
            hint: "Which list has education?",
          },
          {
            kind: "fill",
            q: "The head of a municipal corporation is called the ___.",
            answer: ["mayor"],
            explain: "A municipal corporation's political head is the mayor.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "gender-religion-caste",
    title: "Gender, Religion and Caste",
    icon: "⚖️",
    description: "How social differences shape politics, and how democracy can handle them fairly.",
    lessons: [
      {
        slug: "social-divisions-in-politics",
        title: "Gender, Religion and Caste in Politics",
        summary: "The sexual division of labour, women's representation, communalism and secularism, and caste in politics.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🏠",
            caption: "At home, who cooks, cleans and looks after younger children? Is that work paid? Is it counted?",
          },
          {
            type: "text",
            md: "Every society has differences of gender, religion and caste. These differences are not bad in themselves. The question for democracy is how they are expressed in politics: fairly, or in a way that harms some groups.",
          },
          {
            type: "text",
            md: "The **sexual division of labour** is a system in which work inside the home is done by women, or organised by them through domestic helpers, while men do most work outside the home. It is based on social expectations, not on biology.\n\nWomen's movements, known as **feminist movements**, demanded equal rights for women in voting, education, jobs and political office. **Patriarchy** means a system that values men more and gives them power over women.\n\nIn India, women still lag behind men in literacy, pay and representation. At least one-third of seats in panchayats and municipalities are reserved for women. In 2023, Parliament passed a constitutional amendment to reserve one-third of seats in the Lok Sabha and state assemblies for women; it will take effect after the next census and delimitation.",
          },
          {
            type: "text",
            md: "Religion and politics can mix in healthy ways: for example, people can raise their concerns as members of a religious community, and governments can act to stop discrimination. The problem begins with **communalism**: the belief that people of one religion form one community with the same interests, and that followers of different religions cannot live as equal citizens. It can take forms from everyday prejudice to the political domination of one religion, and in its worst form, communal violence.",
          },
          {
            type: "list",
            items: [
              "India has **no official religion** (unlike Sri Lanka, which gives Buddhism a special place, or Pakistan, Islam).",
              "The Constitution gives all individuals and communities freedom to profess, practise and propagate any religion, or none.",
              "It prohibits discrimination on grounds of religion.",
              "It allows the state to intervene in religious matters to ensure equality, for example by banning untouchability.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Secular state",
            md: "These provisions make India a **secular state**: the state treats all religions equally and keeps no religion as its own.",
          },
          {
            type: "text",
            md: "The caste system was a hierarchy in which some groups were treated as superior and others as inferior. Its worst form was **untouchability**, which the Constitution abolished. Thanks to reformers such as Jotiba Phule, Gandhiji, B.R. Ambedkar and Periyar, and to education, urbanisation and economic change, the old hierarchy has weakened, though caste-based inequality still exists.\n\nCaste can affect politics: parties may choose candidates by caste, or appeal to caste feelings. But no constituency has only one caste, and voters also judge parties on work and policies. Politics also affects caste: caste groups join together, and groups once left out now demand their share of power.",
          },
          {
            type: "example",
            title: "Is this communal?",
            problem: "Decide whether each is communal politics: (a) A community group asks the government for a school in its area. (b) A leader says only members of his religion are true citizens.",
            steps: [
              "Test: does it treat followers of other religions as unequal, or claim one religion should dominate?",
              "(a) It asks for a public service and does not attack any group's equal rights. Not communal.",
              "(b) It says citizens of other religions are less equal. This is communalism.",
            ],
            answer: "(a) is a fair democratic demand; (b) is communal politics.",
          },
          {
            type: "mistake",
            wrong: "A secular state means a state that is against religion.",
            right: "A secular state has no official religion and treats all religions equally, while protecting everyone's freedom of religion.",
            why: "The word sounds like \"anti-religion\". But Indian secularism protects religious freedom; it only stops the state from favouring one religion and allows it to act against discrimination.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "The sexual division of labour is based on biology: women are naturally unable to do work outside the home.",
                answer: false,
                explain: "It is based on social expectations and stereotypes, not on biology.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Which feature makes India a secular state?",
              emoji: "🕊️",
              options: ["The state bans all religious festivals", "There is no official religion and all religions are treated equally", "Only the majority religion gets state support", "Religion cannot be discussed in public"],
              answer: 1,
              trap: 0,
              explain: "Secularism in India is about **equal treatment**, not banning religion. Citizens can follow any faith or none.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For \"forms of communalism\" (a common 3–5 mark question), write: everyday beliefs and prejudices, a majority community's push for political dominance, political mobilisation on religious lines, and communal violence. Then add how the Constitution makes India secular.",
          },
          {
            type: "keypoints",
            items: [
              "The sexual division of labour is social, not natural; feminist movements fought for equal rights.",
              "One-third of local body seats are reserved for women.",
              "Communalism treats religion as the main basis of political community; India is a secular state with no official religion.",
              "Caste affects politics, and politics changes caste; caste alone does not decide elections.",
            ],
          },
        ],
        flashcards: [
          { front: "Sexual division of labour", back: "Work inside the home is done or organised by women and outside work by men, by social custom, not biology." },
          { front: "Feminist movement", back: "A movement working for equal rights and opportunities for women and men." },
          { front: "Patriarchy", back: "A system that values men more and gives them power over women." },
          { front: "Communalism", back: "The belief that religion is the main basis of social community and that followers of different religions cannot be equal citizens." },
          { front: "Secular state", back: "A state with no official religion that treats all religions equally." },
          { front: "Untouchability", back: "The worst practice of the caste system, abolished by the Constitution of India." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is NOT a provision that makes India secular?",
            options: ["No official religion", "Freedom to profess any religion", "A special status for the majority religion", "Ban on discrimination based on religion"],
            answer: 2,
            explain: "India gives no religion a special status; that would go against secularism.",
          },
          {
            kind: "truefalse",
            q: "Caste alone decides the result of elections in India.",
            answer: false,
            explain: "No constituency has a single caste, and voters also judge parties on performance and policies.",
          },
          {
            kind: "fill",
            q: "A system that values men more and gives them power over women is called ___.",
            answer: ["patriarchy"],
            explain: "Patriarchy literally means rule by the father.",
          },
          {
            kind: "multi",
            q: "Which are forms of communalism in politics?",
            options: ["Religious prejudice and stereotypes in everyday beliefs", "A majority community seeking political domination", "Political mobilisation on religious lines", "Citizens voting for a party because of its school policy"],
            answers: [0, 1, 2],
            explain: "Voting on policy is ordinary democratic choice, not communalism.",
            difficulty: 2,
            hint: "One option has nothing to do with religion.",
          },
          {
            kind: "mcq",
            q: "Seats reserved for women in panchayats and municipalities are at least:",
            options: ["One-fourth", "One-third", "One-half", "Two-thirds"],
            answer: 1,
            explain: "The 1992 amendment reserved at least one-third of positions for women.",
          },
          {
            kind: "truefalse",
            q: "The Constitution allows the state to intervene in religious matters to ensure equality within religious communities.",
            answer: true,
            explain: "For example, it bans untouchability.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "political-parties",
    title: "Political Parties",
    icon: "🗳️",
    description: "What parties are, their functions, party systems, recognition and reforms.",
    lessons: [
      {
        slug: "parties-functions-challenges",
        title: "Parties: Functions, Systems and Challenges",
        summary: "Why we need parties, one-, two- and multi-party systems, how parties are recognised, and how to reform them.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🗳️",
            caption: "Imagine an election where every candidate is independent, with no party, no common promises and no team. Who would form the government?",
          },
          {
            type: "text",
            md: "A **political party** is a group of people who come together to contest elections and hold power in the government. They agree on some policies and programmes for society, with a view to promote the collective good.\n\nA party has three components: the **leaders**, the **active members** and the **followers**.",
          },
          {
            type: "heading",
            text: "Functions of political parties",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Contest elections and put up candidates.",
              "Put forward different policies and programmes for voters to choose from.",
              "Play a decisive role in making laws in the legislature.",
              "Form and run governments.",
              "Play the role of **opposition** when they lose: criticise the government and voice different views.",
              "Shape public opinion by raising issues.",
              "Give people access to government machinery and welfare schemes.",
            ],
          },
          {
            type: "table",
            headers: ["Party system", "Meaning", "Example"],
            rows: [
              ["One-party", "Only one party is allowed to control and run the government", "China"],
              ["Two-party", "Power usually changes between two main parties", "USA, United Kingdom"],
              ["Multiparty", "Several parties compete; often an **alliance** or **coalition** forms the government", "India"],
            ],
          },
          {
            type: "text",
            md: "Every party must register with the **Election Commission**. Larger parties are given a unique **symbol** and some facilities, and are called recognised parties.\n\nA **state party**: secures at least **6%** of the total votes in an election to the Legislative Assembly of a state and wins at least **two seats**.\n\nA **national party**: secures at least **6%** of the total votes in Lok Sabha elections or Assembly elections in **four states** and wins at least **four seats** in the Lok Sabha.",
          },
          {
            type: "example",
            title: "Apply the rule",
            problem: "Party P won 7% of the votes and 3 seats in one state's Assembly election, and nothing elsewhere. Which kind of recognition can it get?",
            steps: [
              "State party test: at least 6% of votes in a state Assembly election and at least 2 seats. P has 7% and 3 seats, so it passes.",
              "National party test: 6% of votes in four states (or in the Lok Sabha) and at least 4 Lok Sabha seats. P has contested in only one state and has no Lok Sabha seats, so it fails.",
            ],
            answer: "Party P can be recognised as a state party, not a national party.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "India has a multiparty system mainly because:",
                options: ["The Constitution allows only three parties", "Its social and geographical diversity is large", "The Election Commission chooses the parties", "Voting is compulsory"],
                answer: 1,
                explain: "A large, diverse country like India cannot easily be represented by just two parties.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Challenge", "One reform step"],
            rows: [
              ["Lack of **internal democracy**: power in a few top leaders", "Election Commission order: parties must hold organisational elections and file income tax returns"],
              ["**Dynastic succession**: top posts go to family members", "Proposed laws to regulate internal affairs of parties"],
              ["Growing role of **money and muscle power**", "Supreme Court order: candidates must file an affidavit giving their property and criminal cases"],
              ["Lack of meaningful choice between parties", "Pressure from people, media and movements"],
              ["**Defection**: changing party after being elected", "**Anti-defection law**: the Constitution was amended so a legislator who changes party loses the seat"],
            ],
          },
          {
            type: "mistake",
            wrong: "The opposition party is useless because it does not run the government.",
            right: "The opposition is a key part of democracy: it questions the government, exposes weaknesses and keeps the ruling party accountable.",
            why: "It feels as if only the winner matters. But without an opposition, the government's mistakes would go unchecked; holding power to account is one of a party's main functions.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each challenge to the reform that tackles it.",
              pairs: [
                ["Defection after election", "Anti-defection law"],
                ["Criminal background of candidates", "Affidavit on property and criminal cases"],
                ["No internal elections", "Organisational elections ordered by Election Commission"],
              ],
              explain: "Each reform targets one challenge. The anti-defection law came by amending the Constitution; the affidavit rule came from a Supreme Court order.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Questions on reforms often ask \"suggest some reforms\". Name the step, who took it (Parliament, Supreme Court or Election Commission) and what it does. Students often mix up who issued the affidavit order: it was the Supreme Court.",
          },
          {
            type: "keypoints",
            items: [
              "A party has leaders, active members and followers; it contests elections to hold power.",
              "Party systems: one-party (China), two-party (USA, UK), multiparty (India).",
              "State party: 6% votes + 2 Assembly seats. National party: 6% votes in four states or Lok Sabha + 4 Lok Sabha seats.",
              "Challenges: internal democracy, dynasty, money and muscle power, lack of choice. Reforms: anti-defection law, affidavits, EC orders.",
            ],
          },
        ],
        flashcards: [
          { front: "Political party", back: "A group of people who come together to contest elections and hold power, agreeing on policies for the collective good." },
          { front: "Three components of a party", back: "Leaders, active members, followers." },
          { front: "Coalition government", back: "A government formed when two or more parties join together to share power." },
          { front: "Defection", back: "Changing party allegiance from the party on whose ticket one was elected." },
          { front: "Affidavit", back: "A signed document stating facts, here a candidate's property and criminal cases; ordered by the Supreme Court." },
          { front: "Who recognises political parties?", back: "The Election Commission of India." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which country is an example of a one-party system?",
            options: ["India", "United Kingdom", "China", "USA"],
            answer: 2,
            explain: "In China, only the Communist Party is allowed to rule.",
          },
          {
            kind: "fill",
            q: "Recognised parties are given a unique election ___ by the Election Commission.",
            answer: ["symbol"],
            explain: "Only the official candidates of a recognised party can use its symbol.",
          },
          {
            kind: "truefalse",
            q: "To be a state party, a party must win at least 6% of the votes in a state Assembly election and at least two seats.",
            answer: true,
            explain: "This is the condition given in the textbook.",
          },
          {
            kind: "multi",
            q: "Which are functions of political parties?",
            options: ["Contesting elections", "Making laws in the legislature", "Acting as opposition", "Appointing Supreme Court judges"],
            answers: [0, 1, 2],
            explain: "Judges are appointed by the President, not by parties.",
            difficulty: 2,
            hint: "One option is done by a constitutional authority.",
          },
          {
            kind: "mcq",
            q: "The order that candidates must file an affidavit about their property and criminal cases was given by:",
            options: ["The Election Commission", "The Supreme Court", "The President", "The Lok Sabha Speaker"],
            answer: 1,
            explain: "The Supreme Court passed this order to reduce the influence of money and criminals.",
            difficulty: 2,
            hint: "It came from a court.",
          },
          {
            kind: "truefalse",
            q: "Under the anti-defection law, a legislator who changes party after the election can lose the seat.",
            answer: true,
            explain: "The Constitution was amended to stop elected members from switching parties.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "outcomes-of-democracy",
    title: "Outcomes of Democracy",
    icon: "📊",
    description: "How to judge democracy: accountability, development, equality, diversity and dignity.",
    lessons: [
      {
        slug: "assessing-democracy",
        title: "Assessing Democracy's Outcomes",
        summary: "What we can and cannot expect from democracy, and how it does on government, economy, society and dignity.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "illustration",
            emoji: "🧾",
            caption: "Your school holds a vote for a new rule. It takes a week, but everyone knows why the rule was made. Is slower but open better than fast but secret?",
          },
          {
            type: "text",
            md: "Democracy is not a magic wand that solves every problem. It creates the conditions for good outcomes; citizens must use them. The chapter judges democracy on five outcomes.",
          },
          {
            type: "table",
            headers: ["Outcome", "How democracy does"],
            rows: [
              ["**Accountable, responsive and legitimate government**", "Strong. Decisions follow rules and procedures; citizens can check them (**transparency**). A democratic government is the people's own government, so it is **legitimate**."],
              ["**Economic growth and development**", "Mixed. Dictatorships have had a slightly higher growth rate, but the difference is small; development depends on many factors."],
              ["**Reduction of inequality and poverty**", "Weak so far. Political equality (one vote each) has not removed economic inequality."],
              ["**Accommodation of social diversity**", "Good when the majority works with minorities and rule by majority does not become rule by one community."],
              ["**Dignity and freedom of citizens**", "Strongest. Democracy promotes the dignity of every person; struggles of women and disadvantaged castes have gained strength."],
            ],
          },
          {
            type: "text",
            md: "**Transparency** means every citizen has the right and the means to examine how a decision was taken. In India, the **Right to Information Act, 2005** helps citizens ask the government for information.\n\n**Legitimacy** means the people accept the government as rightful. Democracy may be slow, but it is legitimate because it is chosen by the people.",
          },
          {
            type: "mistake",
            wrong: "Democracy has failed because it is slow and poverty still exists.",
            right: "Democracy is better at accountability, legitimacy and dignity; its record on growth and inequality is mixed, and citizens must keep pushing for results.",
            why: "We expect democracy to solve everything at once. But slow decisions often come from taking everyone into account, and the textbook shows dictatorships do not clearly do better on development.",
          },
          {
            type: "example",
            title: "Judging an outcome",
            problem: "In a democracy, decisions take longer than in a dictatorship. Give one reason this is not necessarily a weakness.",
            steps: [
              "Ask why democratic decisions take longer: they follow procedures and involve debate and consultation.",
              "This makes decisions more acceptable to the people and more effective in practice.",
              "So the extra time buys legitimacy and better-quality decisions.",
            ],
            answer: "Democratic decisions take longer because they are based on discussion, but this makes them more acceptable and effective.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In which outcome does democracy clearly do better than other forms of government?",
                options: ["Faster economic growth", "Removing all poverty", "Respecting the dignity and freedom of citizens", "Ending all inequality"],
                answer: 2,
                explain: "Dignity and freedom of the individual is where democracy is clearly superior.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "How does democracy do on each outcome, as per the textbook?",
              groups: ["Strong record", "Mixed or weak record"],
              items: [
                { text: "Accountable and legitimate government", group: 0, hint: "Citizens choose and check the government." },
                { text: "Dignity and freedom of citizens", group: 0, hint: "Democracy's strongest point." },
                { text: "Economic growth", group: 1, hint: "Dictatorships grew slightly faster, but not by much." },
                { text: "Reduction of economic inequality", group: 1, hint: "Political equality has not removed it." },
                { text: "Transparency in decisions", group: 0, hint: "Citizens can check how decisions are made." },
              ],
              explain: "Democracy is strongest on **accountability, legitimacy and dignity**. On **growth and inequality**, results are mixed; they depend on policies and citizens' pressure.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In \"Is democracy better than dictatorship?\" questions, give a balanced answer: two strengths (accountability, dignity) and one honest limitation (inequality). One-sided answers often lose a mark.",
          },
          {
            type: "callout",
            tone: "note",
            md: "A good test of democracy: the complaints people make about it are themselves a sign of its success. People can complain only because they have the freedom to do so.",
          },
          {
            type: "keypoints",
            items: [
              "Democracy produces accountable, responsive and legitimate government.",
              "Its record on growth is close to dictatorships; on inequality and poverty it is weak.",
              "It handles social diversity when majority and minority work together.",
              "It is best at promoting dignity and freedom of the individual.",
            ],
          },
        ],
        flashcards: [
          { front: "Transparency", back: "Citizens' right and means to examine the process by which a decision was taken." },
          { front: "Legitimate government", back: "A government accepted by the people as rightful, because it is chosen by them." },
          { front: "Right to Information Act", back: "Passed in 2005; lets citizens ask for information about government work." },
          { front: "Democracy's strongest outcome", back: "Dignity and freedom of the individual." },
          { front: "Democracy and economic growth", back: "Dictatorships had slightly higher growth, but democracy cannot be called a failure on that ground." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The Right to Information Act was passed in India in:",
            options: ["1992", "2000", "2005", "2010"],
            answer: 2,
            explain: "The RTI Act, 2005 strengthens transparency.",
          },
          {
            kind: "truefalse",
            q: "Democracy guarantees that economic inequality disappears.",
            answer: false,
            explain: "Political equality has not removed economic inequality in many democracies.",
          },
          {
            kind: "fill",
            q: "A government that people accept as rightful is called a ___ government.",
            answer: ["legitimate"],
            explain: "Democratic government is legitimate because people choose it.",
          },
          {
            kind: "multi",
            q: "Which outcomes does the textbook say democracy does well on?",
            options: ["Accountable government", "Dignity of women", "Much faster growth than dictatorships", "Accommodation of social diversity"],
            answers: [0, 1, 3],
            explain: "Democracies have not grown much faster than dictatorships.",
            difficulty: 2,
            hint: "One option overstates the growth record.",
          },
          {
            kind: "mcq",
            q: "Why are decisions in a democracy often slower?",
            options: ["Officials are lazy", "Decisions follow deliberation and procedures", "Courts must approve every decision", "Elections happen every year"],
            answer: 1,
            explain: "Debate and procedure take time but make decisions acceptable.",
          },
          {
            kind: "truefalse",
            q: "Rule by majority in a democracy should not mean rule by one religious or ethnic community.",
            answer: true,
            explain: "Different people can form a majority on different issues; this is how democracy accommodates diversity.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
];

/* ================================================================== */
/* ICSE: Civics                                                        */
/* ================================================================== */

const icse: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "union-parliament",
    title: "The Union Parliament",
    icon: "🏛️",
    description: "Lok Sabha and Rajya Sabha: composition, terms, presiding officers and powers.",
    lessons: [
      {
        slug: "lok-sabha-rajya-sabha",
        title: "Lok Sabha and Rajya Sabha: Composition",
        summary: "How the two Houses are formed, qualifications, terms, quorum and presiding officers.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🗳️",
            caption: "When you vote in a general election, you choose one member of the Lok Sabha. But nobody in your family votes directly for the Rajya Sabha. Why?",
          },
          {
            type: "text",
            md: "Under **Article 79**, the Parliament of India consists of the **President** and two Houses: the **Rajya Sabha** (Council of States) and the **Lok Sabha** (House of the People).\n\nA legislature with two Houses is called **bicameral**. The Lok Sabha is the lower, popular House; the Rajya Sabha is the upper House that represents the states.",
          },
          {
            type: "table",
            headers: ["Point", "Lok Sabha", "Rajya Sabha"],
            rows: [
              ["Article", "Article 81", "Article 80"],
              ["Maximum strength", "550 elected: up to 530 from states and up to 20 from Union Territories", "250: up to 238 representatives of states and UTs + 12 nominated by the President"],
              ["Present strength", "543 elected members", "245 members"],
              ["How chosen", "Directly by voters through **universal adult franchise** (age 18 and above), one member per constituency", "Indirectly by the elected members of State Legislative Assemblies, by **proportional representation by single transferable vote**"],
              ["Minimum age", "25 years", "30 years"],
              ["Term", "5 years, unless dissolved earlier", "Permanent body; never dissolved. Each member serves 6 years; one-third retire every second year"],
              ["Presiding officer", "**Speaker**, elected by the members", "**Chairman**: the Vice-President of India (ex-officio)"],
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Nominated members",
            md: "The 12 nominated members of the Rajya Sabha have special knowledge or practical experience in **literature, science, art and social service**.\n\nEarlier, the President could also nominate two members of the Anglo-Indian community to the Lok Sabha. This provision ended in 2020 after the 104th Constitutional Amendment.",
          },
          {
            type: "heading",
            text: "Qualifications for membership",
          },
          {
            type: "list",
            items: [
              "Must be a **citizen of India**.",
              "Must be at least **25 years** old for the Lok Sabha and **30 years** for the Rajya Sabha.",
              "Must have other qualifications laid down by Parliament (for example, be registered as a voter).",
              "Must not hold an **office of profit** under the government, be of unsound mind declared by a court, or be an undischarged insolvent.",
            ],
          },
          {
            type: "text",
            md: "The Lok Sabha's term is five years. The President can dissolve it earlier on the advice of the Prime Minister. During a **National Emergency**, Parliament can extend its term by law, one year at a time, but not beyond six months after the Emergency ends.\n\nThe gap between two **sessions** cannot be more than **six months** (Article 85). Usually there are three sessions: Budget, Monsoon and Winter.\n\n**Quorum** is the minimum number of members who must be present for a House to meet. For each House it is **one-tenth** of its total membership.",
          },
          {
            type: "example",
            title: "Working out a quorum",
            problem: "A House has 245 members. What is the smallest number that must be present for the House to do business?",
            steps: [
              "Quorum = one-tenth of the total membership.",
              "245 ÷ 10 = 24.5.",
              "Members cannot be counted in halves, so round up: 25 members.",
            ],
            answer: "25 members must be present.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who elects the members of the Rajya Sabha?",
                options: ["All voters of the state", "Elected members of the State Legislative Assemblies", "Members of the Lok Sabha", "The Governor of each state"],
                answer: 1,
                explain: "They are elected indirectly by elected MLAs, using proportional representation by single transferable vote.",
              },
            ],
          },
          {
            type: "text",
            md: "**The Speaker** is elected by the Lok Sabha from among its members. The Speaker presides over the House, keeps order, interprets the rules, decides whether a bill is a **Money Bill** (this decision is final), presides over a **joint sitting** of both Houses, and has a **casting vote** in case of a tie. A Deputy Speaker presides in the Speaker's absence.",
          },
          {
            type: "mistake",
            wrong: "The Rajya Sabha is dissolved every six years, like the Lok Sabha is dissolved every five years.",
            right: "The Rajya Sabha is a permanent body and is never dissolved. Each member has a six-year term, and one-third of members retire every two years.",
            why: "Students mix up the term of a member (six years) with the life of the House. Because only one-third retire at a time, the Rajya Sabha always continues.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Lok Sabha or Rajya Sabha?",
              groups: ["Lok Sabha", "Rajya Sabha"],
              items: [
                { text: "Minimum age 25 years", group: 0, hint: "The popular House has the lower age limit." },
                { text: "Minimum age 30 years", group: 1, hint: "The upper House has the higher age limit." },
                { text: "Presided over by the Vice-President", group: 1, hint: "The Vice-President is ex-officio Chairman." },
                { text: "Members directly elected by voters", group: 0, hint: "You vote for this House in a general election." },
                { text: "Never dissolved", group: 1, hint: "One-third retire every two years." },
                { text: "Presided over by the Speaker", group: 0, hint: "The Speaker is elected from its members." },
              ],
              explain: "The **Lok Sabha** is directly elected, needs age 25 and has the Speaker. The **Rajya Sabha** is indirectly elected, needs age 30, is permanent and is chaired by the Vice-President.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "When asked for the composition of the Lok Sabha, write the maximum (550 elected: 530 from states, 20 from UTs) and that members are directly elected. For the Rajya Sabha, write 250 maximum with 12 nominated, and the method of election. Older books give 552 (550 elected + 2 nominated Anglo-Indians); since the nominated seats ended in 2020, write 550 and mention the change if your textbook uses 552.",
          },
          {
            type: "keypoints",
            items: [
              "Parliament = President + Rajya Sabha + Lok Sabha (Article 79).",
              "Lok Sabha: up to 550 elected (Art. 81), age 25, term 5 years, presided by the Speaker.",
              "Rajya Sabha: up to 250 incl. 12 nominated (Art. 80), age 30, permanent, chaired by the Vice-President.",
              "Quorum is one-tenth of total membership; the gap between sessions cannot exceed six months.",
            ],
          },
        ],
        flashcards: [
          { front: "Article 79", back: "Parliament consists of the President and two Houses: Rajya Sabha and Lok Sabha." },
          { front: "Maximum strength of Lok Sabha (Art. 81)", back: "550 elected members: up to 530 from states and up to 20 from Union Territories." },
          { front: "Maximum strength of Rajya Sabha (Art. 80)", back: "250: up to 238 representatives of states and UTs + 12 nominated by the President." },
          { front: "Quorum", back: "One-tenth of the total membership of the House." },
          { front: "Chairman of the Rajya Sabha", back: "The Vice-President of India, ex-officio." },
          { front: "Casting vote", back: "The vote the presiding officer may use only when there is a tie." },
          { front: "Office of profit", back: "A paid post under the government; holding it disqualifies a person from being an MP." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The minimum age to become a member of the Rajya Sabha is:",
            options: ["21 years", "25 years", "30 years", "35 years"],
            answer: 2,
            explain: "It is 30 for the Rajya Sabha and 25 for the Lok Sabha. 35 is for the President.",
          },
          {
            kind: "numeric",
            q: "How many members can the President nominate to the Rajya Sabha?",
            answer: 12,
            explain: "Twelve members with special knowledge of literature, science, art and social service.",
          },
          {
            kind: "truefalse",
            q: "The Speaker of the Lok Sabha decides whether a bill is a Money Bill, and this decision is final.",
            answer: true,
            explain: "The Speaker's certificate on a Money Bill cannot be questioned.",
          },
          {
            kind: "fill",
            q: "The Rajya Sabha is a ___ body, as it is never dissolved.",
            answer: ["permanent", "continuous"],
            explain: "One-third of members retire every second year, so the House continues.",
          },
          {
            kind: "mcq",
            q: "During a National Emergency, the term of the Lok Sabha can be extended by:",
            options: ["Two years at a time", "One year at a time", "Six months at a time", "It can never be extended"],
            answer: 1,
            explain: "One year at a time, and not beyond six months after the Emergency ends.",
            difficulty: 2,
            hint: "The extension is made by a law of Parliament.",
          },
          {
            kind: "multi",
            q: "Which disqualify a person from being a Member of Parliament?",
            options: ["Holding an office of profit under the government", "Being declared of unsound mind by a court", "Being an undischarged insolvent", "Being a farmer"],
            answers: [0, 1, 2],
            explain: "Any profession like farming is allowed; the other three are disqualifications.",
            difficulty: 2,
          },
          {
            kind: "numeric",
            q: "The maximum gap allowed between two sessions of Parliament is how many months?",
            answer: 6,
            unit: "months",
            explain: "Article 85 says the gap must not exceed six months.",
          },
        ],
      },
      {
        slug: "parliament-powers-law-making",
        title: "Powers of Parliament and Law-Making",
        summary: "How bills become laws, Money Bills, joint sittings, control over the executive, and special powers of each House.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "📜",
            caption: "Every law you obey, from traffic fines to the right to education, began as a bill debated in Parliament.",
          },
          {
            type: "text",
            md: "Parliament is the supreme law-making body of the Union. It also controls the government's money, keeps the executive answerable, amends the Constitution and takes part in elections and removals of high officials.",
          },
          {
            type: "heading",
            text: "How an ordinary bill becomes a law",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**First reading**: the bill is introduced in either House.",
              "**Second reading**: general discussion; the bill may go to a committee; it is then considered clause by clause.",
              "**Third reading**: the House votes on the bill as a whole.",
              "The bill goes to the **other House**, which follows the same stages.",
              "**President's assent**: the bill becomes an Act. The President may return an ordinary bill once for reconsideration, but must sign if it is passed again.",
            ],
          },
          {
            type: "text",
            md: "If the two Houses disagree on an ordinary bill, the President may call a **joint sitting** (Article 108), presided over by the Speaker. The Lok Sabha usually wins because it has more members.\n\nA **Money Bill** (Article 110) deals with taxes, borrowing and spending. It can be introduced **only in the Lok Sabha**, and only with the President's recommendation. The Rajya Sabha must return it within **14 days**, with or without recommendations; the Lok Sabha may accept or reject them. There is no joint sitting on a Money Bill.",
          },
          {
            type: "example",
            title: "What happens next?",
            problem: "The Lok Sabha passes a Money Bill. The Rajya Sabha does nothing for 14 days. What is the status of the bill?",
            steps: [
              "Rule: the Rajya Sabha must return a Money Bill within 14 days.",
              "If it does not, the bill is deemed to have been passed by both Houses in the form the Lok Sabha passed it.",
              "It then goes to the President for assent; the President cannot return a Money Bill for reconsideration.",
            ],
            answer: "The bill is deemed passed by both Houses and goes to the President for assent.",
          },
          {
            type: "heading",
            text: "Other powers",
          },
          {
            type: "table",
            headers: ["Power", "What it means"],
            rows: [
              ["Financial", "Passes the Budget (Annual Financial Statement); no tax can be levied without a law of Parliament"],
              ["Control over executive", "**Question Hour** (first hour of a sitting), **Zero Hour**, adjournment motion, **no-confidence motion** (only in the Lok Sabha)"],
              ["Amending the Constitution", "Under **Article 368**, by a special majority; some changes also need approval by half the states"],
              ["Electoral", "Elected MPs (with elected MLAs) elect the President; all MPs elect the Vice-President"],
              ["Judicial", "Impeachment of the President; removal of judges of the Supreme Court and High Courts"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A joint sitting of the two Houses is presided over by:",
                options: ["The President", "The Vice-President", "The Speaker of the Lok Sabha", "The Prime Minister"],
                answer: 2,
                explain: "Article 108: the Speaker presides over a joint sitting.",
              },
              {
                kind: "truefalse",
                q: "A Money Bill can be introduced in the Rajya Sabha.",
                answer: false,
                explain: "A Money Bill can be introduced only in the Lok Sabha.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Special powers of the Lok Sabha", "Special powers of the Rajya Sabha"],
            rows: [
              ["Money Bills start only here", "**Article 249**: by a two-thirds resolution, lets Parliament make a law on a State List subject in the national interest"],
              ["The Council of Ministers is collectively responsible to it", "**Article 312**: by a two-thirds resolution, lets Parliament create a new All India Service"],
              ["Only it can pass a no-confidence motion", "A resolution to remove the Vice-President can start only here"],
            ],
          },
          {
            type: "mistake",
            wrong: "The Rajya Sabha can reject a Money Bill.",
            right: "The Rajya Sabha can only delay a Money Bill for up to 14 days and make recommendations; the Lok Sabha has the final say.",
            why: "Both Houses are equal for ordinary bills, so students assume the same for money. But control over money belongs to the directly elected House.",
          },
          {
            type: "activity",
            activity: {
              kind: "order",
              prompt: "Put the stages of an ordinary bill in order.",
              items: ["Introduced in one House (first reading)", "Discussion and committee stage (second reading)", "Vote on the whole bill (third reading)", "Passed by the other House", "President's assent"],
              explain: "Each House takes the bill through three readings. Only after both Houses pass it does it go to the President.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "Questions often ask for two ways Parliament controls the executive. Name the device and explain it: for example, \"Question Hour: members ask ministers questions about their departments\" and \"No-confidence motion: if passed in the Lok Sabha, the whole Council of Ministers must resign\".",
          },
          {
            type: "keypoints",
            items: [
              "An ordinary bill passes three readings in each House, then gets the President's assent.",
              "Disagreement on an ordinary bill → joint sitting (Art. 108), presided by the Speaker.",
              "Money Bill (Art. 110): only in Lok Sabha; Rajya Sabha can delay 14 days at most.",
              "Rajya Sabha's special powers: Art. 249 and Art. 312; Lok Sabha controls the Council of Ministers.",
            ],
          },
        ],
        flashcards: [
          { front: "Money Bill", back: "A bill on taxes, borrowing or spending (Art. 110); introduced only in the Lok Sabha." },
          { front: "Joint sitting", back: "A meeting of both Houses called by the President to settle a deadlock on an ordinary bill (Art. 108)." },
          { front: "Question Hour", back: "The first hour of a sitting, when members ask ministers questions." },
          { front: "No-confidence motion", back: "A motion in the Lok Sabha that, if passed, forces the whole Council of Ministers to resign." },
          { front: "Article 249", back: "Rajya Sabha, by a two-thirds majority, can allow Parliament to legislate on a State List subject in the national interest." },
          { front: "Article 368", back: "The procedure for amending the Constitution." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "For how many days can the Rajya Sabha hold a Money Bill?",
            options: ["7 days", "14 days", "30 days", "6 months"],
            answer: 1,
            explain: "It must return the bill within 14 days.",
          },
          {
            kind: "order",
            q: "Arrange the stages of a bill in the House where it starts.",
            items: ["First reading", "Second reading", "Third reading"],
            explain: "Introduction, then discussion and committee stage, then the final vote.",
          },
          {
            kind: "truefalse",
            q: "A no-confidence motion can be moved only in the Lok Sabha.",
            answer: true,
            explain: "The Council of Ministers is responsible only to the Lok Sabha.",
          },
          {
            kind: "fill",
            q: "The first hour of a sitting of Parliament is called ___ Hour.",
            answer: ["Question"],
            explain: "During Question Hour, ministers answer members' questions.",
          },
          {
            kind: "multi",
            q: "Which are special powers of the Rajya Sabha?",
            options: ["Allowing Parliament to make law on a State List subject (Art. 249)", "Allowing creation of a new All India Service (Art. 312)", "Introducing Money Bills", "Passing a no-confidence motion"],
            answers: [0, 1],
            explain: "Money Bills and no-confidence motions belong to the Lok Sabha.",
            difficulty: 2,
            hint: "Think of powers linked to the states and the services.",
          },
          {
            kind: "mcq",
            q: "If the President returns an ordinary bill and Parliament passes it again, the President:",
            options: ["Can return it again", "Must give assent", "Can refer it to the Supreme Court and refuse", "Can call a referendum"],
            answer: 1,
            explain: "The President can return an ordinary bill only once.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "president-vice-president",
    title: "The Union Executive: President and Vice-President",
    icon: "🎖️",
    description: "Election, qualifications, term, removal and powers of the President and Vice-President.",
    lessons: [
      {
        slug: "president-and-vice-president",
        title: "The President and the Vice-President",
        summary: "How the President is elected and removed, the powers of the office, and the role of the Vice-President.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🇮🇳",
            caption: "On Republic Day, the President takes the salute at Kartavya Path. Every law, every appointment of a judge and every army command runs in the President's name.",
          },
          {
            type: "text",
            md: "**Article 52** says there shall be a President of India. The President is the **head of the State** and the first citizen of India. All executive power of the Union is vested in the President (Article 53), but in practice it is used on the advice of the Council of Ministers headed by the Prime Minister. So the President is the **nominal** (formal) head, while the Prime Minister is the **real** head of the government.",
          },
          {
            type: "text",
            md: "The President is elected **indirectly** by an **electoral college** made up of:\n\nthe **elected** members of both Houses of Parliament, and the **elected** members of the Legislative Assemblies of the states (including the National Capital Territory of Delhi and Puducherry).\n\nNominated members do not vote. Voting is by **proportional representation by means of the single transferable vote**, through a **secret ballot**. Disputes about the election are decided by the Supreme Court.",
          },
          {
            type: "table",
            headers: ["Point", "President", "Vice-President"],
            rows: [
              ["Article for election", "Articles 54, 55", "Article 66"],
              ["Electoral college", "Elected MPs of both Houses + elected MLAs of states, Delhi and Puducherry", "All members (elected and nominated) of both Houses of Parliament"],
              ["Minimum age", "35 years", "35 years"],
              ["Other qualification", "Qualified to be a Lok Sabha member", "Qualified to be a Rajya Sabha member"],
              ["Term", "5 years; can be re-elected", "5 years; can be re-elected"],
              ["Removal", "**Impeachment** (Article 61) for violation of the Constitution", "Resolution of the Rajya Sabha passed by a majority of all its members, agreed to by the Lok Sabha (14 days' notice)"],
            ],
          },
          {
            type: "heading",
            text: "Impeachment of the President",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "The only ground is **violation of the Constitution**.",
              "The charge can start in either House, through a notice signed by at least one-fourth of its members, after 14 days' notice to the President.",
              "The House must pass the resolution by a majority of **two-thirds of its total membership**.",
              "The other House investigates the charge; the President can defend himself or herself.",
              "If the second House also passes it by two-thirds of its total membership, the President is removed.",
            ],
          },
          {
            type: "table",
            headers: ["Type of power", "Examples"],
            rows: [
              ["Executive", "Appoints the Prime Minister and, on the PM's advice, other ministers; appoints Governors, judges of the Supreme Court and High Courts, the Attorney General, the Comptroller and Auditor General and the Chief Election Commissioner"],
              ["Legislative", "Summons and prorogues Parliament, dissolves the Lok Sabha, addresses Parliament, gives assent to bills, nominates 12 members to the Rajya Sabha, issues **ordinances** when Parliament is not in session (Article 123)"],
              ["Financial", "Money Bills need the President's recommendation; the Budget is laid before Parliament in the President's name; controls the Contingency Fund of India"],
              ["Judicial", "Can grant pardon or reduce a sentence, including a death sentence (Article 72)"],
              ["Military and diplomatic", "Supreme Commander of the armed forces; receives and appoints ambassadors"],
              ["Emergency", "National Emergency (Art. 352), President's Rule in a state (Art. 356), Financial Emergency (Art. 360)"],
            ],
          },
          {
            type: "example",
            title: "Using the right power",
            problem: "Parliament is not in session, and the government needs a new rule urgently. What can the President do, and how long does it last?",
            steps: [
              "Identify the power: law-making when Parliament is not sitting is the **ordinance** power (Article 123).",
              "The President issues it on the advice of the Council of Ministers.",
              "An ordinance has the same force as a law, but it must be approved by Parliament within **six weeks** of Parliament reassembling, or it lapses.",
            ],
            answer: "The President can issue an ordinance; it lapses six weeks after Parliament reassembles unless Parliament approves it.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is NOT part of the electoral college for the President?",
                options: ["Elected members of the Lok Sabha", "Elected members of the Rajya Sabha", "Elected members of State Legislative Assemblies", "Nominated members of the Rajya Sabha"],
                answer: 3,
                explain: "Nominated members do not vote in the President's election.",
              },
            ],
          },
          {
            type: "text",
            md: "**The Vice-President** (Article 63) is the **ex-officio Chairman of the Rajya Sabha** (Article 64). If the President's office falls vacant through death, resignation or removal, the Vice-President acts as President until a new President is elected. A new election must be held within **six months** of the vacancy.",
          },
          {
            type: "mistake",
            wrong: "The people of India elect the President directly, just like they elect MPs.",
            right: "The President is elected indirectly by an electoral college of elected MPs and elected MLAs.",
            why: "The President is the most famous office, so people assume a direct vote. The makers of the Constitution chose an indirect election so that the President stays a formal head and the elected government stays the real executive.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each Article to its subject.",
              pairs: [
                ["Article 52", "There shall be a President of India"],
                ["Article 61", "Impeachment of the President"],
                ["Article 72", "Power to grant pardon"],
                ["Article 123", "Power to issue ordinances"],
                ["Article 352", "National Emergency"],
              ],
              explain: "These five Articles are the most asked. Link each number to one key word: office, impeachment, pardon, ordinance, emergency.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "In election questions, always write the word **elected** before \"members\": the electoral college has elected MPs and elected MLAs only. Many students lose the mark by writing \"all members of Parliament\", which is true only for the Vice-President.",
          },
          {
            type: "keypoints",
            items: [
              "The President is the nominal head; real power lies with the Council of Ministers.",
              "Elected by an electoral college of elected MPs and elected MLAs (Arts 54–55), by single transferable vote and secret ballot.",
              "Age 35, term 5 years; removed only by impeachment for violation of the Constitution (Art. 61).",
              "The Vice-President is elected by all MPs, chairs the Rajya Sabha and acts as President during a vacancy.",
            ],
          },
        ],
        flashcards: [
          { front: "Electoral college for the President", back: "Elected members of both Houses of Parliament and elected members of State Legislative Assemblies (incl. Delhi and Puducherry)." },
          { front: "Ground for impeachment", back: "Violation of the Constitution (Article 61)." },
          { front: "Ordinance", back: "A temporary law issued by the President when Parliament is not in session (Art. 123); lapses six weeks after Parliament reassembles unless approved." },
          { front: "Article 72", back: "The President's power to grant pardons and reduce sentences." },
          { front: "Electoral college for the Vice-President", back: "All members, elected and nominated, of both Houses of Parliament (Art. 66)." },
          { front: "Three emergencies", back: "National (Art. 352), State/President's Rule (Art. 356), Financial (Art. 360)." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "What is the minimum age to be elected President of India?",
            answer: 35,
            unit: "years",
            explain: "Article 58 sets the minimum age at 35 years.",
          },
          {
            kind: "mcq",
            q: "The Vice-President of India is ex-officio Chairman of:",
            options: ["The Lok Sabha", "The Rajya Sabha", "The Union Cabinet", "The Supreme Court collegium"],
            answer: 1,
            explain: "Article 64 makes the Vice-President the Chairman of the Rajya Sabha.",
          },
          {
            kind: "truefalse",
            q: "Nominated members of Parliament take part in the election of the Vice-President.",
            answer: true,
            explain: "All MPs, elected and nominated, vote for the Vice-President. They do not vote for the President.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The President can be removed from office by the process of ___.",
            answer: ["impeachment"],
            explain: "Impeachment under Article 61 needs a two-thirds majority of the total membership of each House.",
          },
          {
            kind: "order",
            q: "Arrange the steps of impeachment of the President.",
            items: ["Notice signed by one-fourth of members of a House", "That House passes the charge by two-thirds of total membership", "The other House investigates the charge", "The other House passes it by two-thirds of total membership"],
            explain: "Both Houses must pass the charge by a two-thirds majority of their total membership.",
            difficulty: 3,
            hint: "One House accuses, the other investigates.",
          },
          {
            kind: "multi",
            q: "Which appointments are made by the President?",
            options: ["Governors of states", "Judges of the Supreme Court", "Chief Election Commissioner", "Members of State Legislative Assemblies"],
            answers: [0, 1, 2],
            explain: "MLAs are elected by voters, not appointed.",
          },
          {
            kind: "mcq",
            q: "If the President's office falls vacant, a new election must be held within:",
            options: ["One month", "Three months", "Six months", "One year"],
            answer: 2,
            explain: "Article 62 requires the election within six months; meanwhile the Vice-President acts as President.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "prime-minister-council-of-ministers",
    title: "The Union Executive: Prime Minister and Council of Ministers",
    icon: "👥",
    description: "Appointment and powers of the Prime Minister, kinds of ministers, the Cabinet and collective responsibility.",
    lessons: [
      {
        slug: "pm-and-council-of-ministers",
        title: "The Prime Minister and the Council of Ministers",
        summary: "How the PM is appointed, the three ranks of ministers, the Cabinet, and collective and individual responsibility.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🧭",
            caption: "A ship has an owner whose name is painted on the side, and a captain who actually steers. In India's government, who is who?",
          },
          {
            type: "text",
            md: "**Article 74** says there shall be a **Council of Ministers** with the **Prime Minister** at its head to aid and advise the President. The President must act on this advice. This makes the Prime Minister the **real executive** head of the government.\n\nIndia follows the **parliamentary system**: the executive is drawn from Parliament and is answerable to it.",
          },
          {
            type: "list",
            items: [
              "The President appoints the **leader of the majority party** (or coalition) in the Lok Sabha as Prime Minister. When no party has a clear majority, the President uses discretion to invite the person most likely to win a vote of confidence.",
              "Other ministers are appointed by the President **on the advice of the Prime Minister**.",
              "A minister must be a member of either House. A non-member can be appointed but must become a member within **six months**, or must leave office.",
              "The total number of ministers, including the PM, cannot exceed **15% of the total members of the Lok Sabha** (91st Amendment, 2003).",
              "The PM has no fixed term: the PM stays in office as long as he or she has the support of a majority in the Lok Sabha.",
            ],
          },
          {
            type: "table",
            headers: ["Rank", "Role"],
            rows: [
              ["**Cabinet Ministers**", "Senior ministers in charge of major departments such as Home, Defence, Finance, External Affairs; they form the Cabinet"],
              ["**Ministers of State**", "May hold independent charge of a smaller ministry or assist a Cabinet Minister"],
              ["**Deputy Ministers**", "Assist Cabinet Ministers and Ministers of State in their work"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Council of Ministers vs Cabinet",
            md: "The **Council of Ministers** is the larger body of all three ranks. The **Cabinet** is a smaller inner group of Cabinet Ministers, led by the PM. The Cabinet takes the main policy decisions; the whole Council rarely meets together.",
          },
          {
            type: "text",
            md: "**Collective responsibility** (Article 75(3)): the Council of Ministers is collectively responsible to the **Lok Sabha**. Ministers \"swim and sink together\": once the Cabinet decides, every minister must support it in public. If the Lok Sabha passes a **no-confidence motion**, the whole Council must resign.\n\n**Individual responsibility** (Article 75(2)): ministers hold office during the pleasure of the President. In practice, the PM can ask a minister to resign, and the President removes a minister on the PM's advice.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "If the Prime Minister resigns, the whole Council of Ministers stands dissolved.",
                answer: true,
                explain: "The PM is the head of the Council, so the Council ends with the PM's resignation or death.",
              },
            ],
          },
          {
            type: "heading",
            text: "Powers and position of the Prime Minister",
          },
          {
            type: "list",
            items: [
              "Forms the Council of Ministers and allocates portfolios (departments); can reshuffle or drop ministers.",
              "Chairs Cabinet meetings and coordinates the work of all ministries.",
              "Acts as the link between the President and the Council of Ministers; must tell the President about Cabinet decisions (Article 78).",
              "Leader of the House (when a Lok Sabha member); advises the President to summon, prorogue or dissolve the Lok Sabha.",
              "Chief spokesperson of the government at home and abroad.",
            ],
          },
          {
            type: "example",
            title: "Applying collective responsibility",
            problem: "A Cabinet Minister disagrees with a Cabinet decision and criticises it in a public speech. What does collective responsibility require?",
            steps: [
              "Rule: once the Cabinet decides, all ministers must stand by the decision in public.",
              "A minister may argue inside the Cabinet, but not oppose the decision outside it.",
              "So the minister must either support the decision publicly or resign.",
            ],
            answer: "The minister must support the decision or resign from the Council of Ministers.",
          },
          {
            type: "mistake",
            wrong: "The Council of Ministers is responsible to both Houses of Parliament.",
            right: "The Council of Ministers is collectively responsible only to the Lok Sabha.",
            why: "Ministers do answer questions in both Houses, so it seems they are responsible to both. But only the directly elected Lok Sabha can remove the government by a no-confidence motion.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Who really runs the Union government day to day?",
              emoji: "🏛️",
              options: ["The President", "The Prime Minister and Council of Ministers", "The Speaker", "The Chief Justice of India"],
              answer: 1,
              trap: 0,
              explain: "The President is the **nominal** head; the **Prime Minister and Council of Ministers** are the real executive, because the President acts on their advice (Article 74).",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "When explaining collective responsibility, give its meaning and its consequence (a no-confidence motion forces the whole Council to resign). Mention that it is to the Lok Sabha. Leaving out the House is a frequent half-mark loss.",
          },
          {
            type: "keypoints",
            items: [
              "Article 74: Council of Ministers headed by the PM aids and advises the President.",
              "Article 75: PM appointed by the President; other ministers on PM's advice; size limit 15% of Lok Sabha.",
              "Three ranks: Cabinet Ministers, Ministers of State, Deputy Ministers; the Cabinet is the inner core.",
              "Collectively responsible to the Lok Sabha; ministers individually serve at the President's pleasure.",
            ],
          },
        ],
        flashcards: [
          { front: "Article 74", back: "A Council of Ministers headed by the PM to aid and advise the President." },
          { front: "Collective responsibility", back: "The Council of Ministers is answerable as one team to the Lok Sabha; it resigns together if it loses the House's confidence." },
          { front: "Limit on number of ministers", back: "Not more than 15% of the total members of the Lok Sabha, including the PM (91st Amendment, 2003)." },
          { front: "Non-member as minister", back: "Must become a member of either House within six months." },
          { front: "Cabinet", back: "The inner group of senior Cabinet Ministers that takes major decisions, headed by the PM." },
          { front: "Article 78", back: "Duty of the PM to inform the President of Cabinet decisions." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Other ministers of the Union are appointed by the President:",
            options: ["On the advice of the Speaker", "On the advice of the Prime Minister", "On the advice of the Chief Justice", "At the President's own choice"],
            answer: 1,
            explain: "Article 75(1): ministers are appointed on the advice of the Prime Minister.",
          },
          {
            kind: "numeric",
            q: "Within how many months must a non-member minister become a member of Parliament?",
            answer: 6,
            unit: "months",
            explain: "Otherwise he or she ceases to be a minister.",
          },
          {
            kind: "truefalse",
            q: "The Prime Minister has a fixed term of five years that cannot be cut short.",
            answer: false,
            explain: "The PM stays in office only as long as he or she has majority support in the Lok Sabha.",
          },
          {
            kind: "fill",
            q: "The Council of Ministers is collectively responsible to the ___.",
            answer: ["Lok Sabha", "House of the People"],
            explain: "Article 75(3).",
          },
          {
            kind: "order",
            q: "Arrange the ranks of ministers from highest to lowest.",
            items: ["Cabinet Minister", "Minister of State", "Deputy Minister"],
            explain: "Cabinet Ministers head major ministries; Ministers of State and Deputy Ministers assist.",
          },
          {
            kind: "multi",
            q: "Which are powers of the Prime Minister?",
            options: ["Allocating portfolios among ministers", "Chairing Cabinet meetings", "Advising the President on dissolving the Lok Sabha", "Removing Supreme Court judges on his or her own"],
            answers: [0, 1, 2],
            explain: "Judges can be removed only through an address by both Houses of Parliament.",
            difficulty: 2,
            hint: "One option needs Parliament, not the PM.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "supreme-court",
    title: "The Judiciary: Supreme Court",
    icon: "⚖️",
    description: "Composition, appointment, independence and jurisdiction of the Supreme Court of India.",
    lessons: [
      {
        slug: "supreme-court-of-india",
        title: "The Supreme Court of India",
        summary: "Who the judges are, how they are appointed and removed, how their independence is protected, and the Court's jurisdiction.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "⚖️",
            caption: "If a state and the Union government quarrel over a river's water, who decides? If a citizen's fundamental right is taken away, where can she go straight away?",
          },
          {
            type: "text",
            md: "India has a single, **integrated judiciary**: the Supreme Court at the top, High Courts in the states, and subordinate courts below them. The Supreme Court, set up under **Article 124**, is the highest court of appeal and the **guardian of the Constitution**. Its seat is in **New Delhi** (Article 130).",
          },
          {
            type: "table",
            headers: ["Point", "Supreme Court judges"],
            rows: [
              ["Composition", "A Chief Justice of India and other judges; Parliament fixes the number. At present, 34 judges in all (the Chief Justice and 33 others)"],
              ["Appointed by", "The President, after consultation with judges of the Supreme Court and High Courts; the Chief Justice of India is always consulted for other judges. In practice, a **collegium** of the CJI and the four senior-most judges recommends names"],
              ["Qualifications", "Citizen of India, and either a High Court judge for at least 5 years, or an advocate of a High Court for at least 10 years, or a distinguished jurist in the opinion of the President"],
              ["Retirement", "At the age of **65 years**"],
              ["Removal", "Only on grounds of **proved misbehaviour or incapacity**, by an order of the President after each House passes an address by a majority of its total membership and two-thirds of members present and voting, in the same session"],
            ],
          },
          {
            type: "heading",
            text: "How independence is protected",
          },
          {
            type: "list",
            items: [
              "Judges have **security of tenure**: they can be removed only by the difficult process above.",
              "Their salaries and allowances are charged on the **Consolidated Fund of India**, so Parliament does not vote on them, and they cannot be reduced after appointment except during a **Financial Emergency**.",
              "The conduct of a judge cannot be discussed in Parliament, except when a motion for removal is being considered.",
              "After retirement, a Supreme Court judge cannot practise law in any court in India.",
              "The Court can punish anyone for **contempt** of court, since it is a court of record (Article 129).",
            ],
          },
          {
            type: "heading",
            text: "Jurisdiction (powers) of the Supreme Court",
          },
          {
            type: "table",
            headers: ["Jurisdiction", "Meaning", "Article"],
            rows: [
              ["**Original**", "Cases that start directly in the Supreme Court: disputes between the Union and one or more states, or between states", "131"],
              ["**Writ**", "Any person can go straight to the Court to enforce fundamental rights, through writs like habeas corpus, mandamus, prohibition, certiorari and quo warranto", "32"],
              ["**Appellate**", "Hears appeals from High Courts in constitutional, civil and criminal cases; can also grant **special leave to appeal**", "132–134, 136"],
              ["**Advisory**", "The President may ask for the Court's opinion on a question of law or fact; the advice is not binding", "143"],
              ["**Court of record**", "Its judgments are recorded and used as precedents; it can punish for contempt", "129"],
              ["**Review**", "Can review its own judgments", "137"],
            ],
          },
          {
            type: "text",
            md: "**Judicial review** is the power of the court to examine laws passed by Parliament or state legislatures, and orders of the executive, and to declare them **void** if they go against the Constitution.",
          },
          {
            type: "example",
            title: "Which jurisdiction?",
            problem: "Two states disagree over a boundary and the case is filed directly in the Supreme Court. Which jurisdiction does the Court use?",
            steps: [
              "Ask: did the case start in this court, or come on appeal from a lower court? It started here.",
              "A case starting in the Supreme Court is under its original jurisdiction.",
              "Disputes between states (or between the Union and states) fall under Article 131.",
            ],
            answer: "Original jurisdiction, under Article 131.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A citizen whose fundamental right has been violated goes directly to the Supreme Court. Under which Article?",
                options: ["Article 131", "Article 32", "Article 143", "Article 136"],
                answer: 1,
                explain: "Article 32 gives the right to move the Supreme Court for enforcing fundamental rights.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "The President must follow the Supreme Court's advice given under Article 143.",
            right: "Advice under Article 143 is not binding on the President.",
            why: "Because Supreme Court judgments bind all courts, students think its advice also binds. Advisory opinions are only opinions; the Court may even decline to give one.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each case to the jurisdiction used.",
              pairs: [
                ["Dispute between the Union and a state", "Original"],
                ["Appeal against a High Court judgment", "Appellate"],
                ["President asks for an opinion on a law", "Advisory"],
                ["Person wrongly detained seeks release", "Writ"],
              ],
              explain: "Ask where the case starts and who brings it. A wrongful detention is answered by the writ of **habeas corpus** under Article 32.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "For \"two ways the independence of judges is ensured\", write two clear points, such as \"salaries charged on the Consolidated Fund of India\" and \"removal only by a special majority of both Houses\". Writing \"judges are independent\" alone gets no marks.",
          },
          {
            type: "keypoints",
            items: [
              "Article 124: Supreme Court of the CJI and other judges; judges appointed by the President, retire at 65.",
              "Removal only for proved misbehaviour or incapacity, by special majority in both Houses.",
              "Jurisdiction: original (131), writ (32), appellate (132–134, 136), advisory (143), court of record (129).",
              "Judicial review lets the Court strike down unconstitutional laws.",
            ],
          },
        ],
        flashcards: [
          { front: "Retirement age of Supreme Court judges", back: "65 years." },
          { front: "Original jurisdiction (Art. 131)", back: "Disputes between the Union and states or among states start directly in the Supreme Court." },
          { front: "Advisory jurisdiction (Art. 143)", back: "The President may seek the Court's opinion; it is not binding." },
          { front: "Court of record", back: "A court whose judgments are kept as records and precedents and which can punish for contempt (Art. 129)." },
          { front: "Judicial review", back: "The power of courts to declare a law or order void if it violates the Constitution." },
          { front: "Habeas corpus", back: "A writ ordering that a detained person be produced before the court, to check if the detention is lawful." },
        ],
        quiz: [
          {
            kind: "numeric",
            q: "At what age do Supreme Court judges retire?",
            answer: 65,
            unit: "years",
            explain: "High Court judges retire at 62.",
          },
          {
            kind: "mcq",
            q: "To become a Supreme Court judge, a person who is an advocate must have practised in a High Court for at least:",
            options: ["5 years", "7 years", "10 years", "15 years"],
            answer: 2,
            explain: "10 years as a High Court advocate, or 5 years as a High Court judge.",
            difficulty: 2,
            hint: "The 5-year rule is for those who were already judges.",
          },
          {
            kind: "truefalse",
            q: "The salaries of Supreme Court judges are voted on every year by Parliament.",
            answer: false,
            explain: "They are charged on the Consolidated Fund of India and are not put to vote.",
          },
          {
            kind: "fill",
            q: "The power of the Supreme Court to declare a law unconstitutional is called judicial ___.",
            answer: ["review"],
            explain: "Judicial review makes the Court the guardian of the Constitution.",
          },
          {
            kind: "multi",
            q: "Which are writs the Supreme Court can issue?",
            options: ["Habeas corpus", "Mandamus", "Quo warranto", "Ordinance"],
            answers: [0, 1, 2],
            explain: "An ordinance is a temporary law issued by the President, not a writ.",
          },
          {
            kind: "mcq",
            q: "Which jurisdiction allows the Supreme Court to hear appeals from High Courts?",
            options: ["Original", "Appellate", "Advisory", "Revisory only"],
            answer: 1,
            explain: "Appellate jurisdiction covers constitutional, civil and criminal appeals.",
          },
          {
            kind: "truefalse",
            q: "A retired Supreme Court judge cannot practise law in any court in India.",
            answer: true,
            explain: "This keeps judges free from future temptations while in office.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "high-courts-subordinate-courts",
    title: "High Courts and Subordinate Courts",
    icon: "🏢",
    description: "High Courts, district and lower courts, revenue courts and Lok Adalats.",
    lessons: [
      {
        slug: "high-courts-and-lower-courts",
        title: "High Courts, Subordinate Courts and Lok Adalats",
        summary: "Appointment and powers of High Court judges, the ladder of civil, criminal and revenue courts, and Lok Adalats.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "illustration",
            emoji: "🪜",
            caption: "A land dispute in a village of Mandya first goes to a local court. If one side is unhappy, the case can climb up, step by step, towards the High Court of Karnataka.",
          },
          {
            type: "text",
            md: "Under **Article 214**, there is a **High Court** for each state. Parliament may also set up a **common High Court** for two or more states (Article 231). The High Court is the highest court in the state and controls all courts below it.",
          },
          {
            type: "table",
            headers: ["Point", "High Court judges", "Supreme Court judges (for comparison)"],
            rows: [
              ["Appointed by", "The President, after consulting the Chief Justice of India, the Governor of the state and (for other judges) the Chief Justice of that High Court", "The President, after consulting judges; CJI consulted"],
              ["Qualifications", "Citizen; held a judicial office in India for 10 years, or an advocate of a High Court for 10 years", "HC judge 5 years, or HC advocate 10 years, or distinguished jurist"],
              ["Retirement", "**62 years**", "65 years"],
              ["Removal", "Same as a Supreme Court judge: address by both Houses of Parliament by special majority", "Same procedure"],
              ["After retirement", "Can practise only in the Supreme Court and in other High Courts", "Cannot practise in any court in India"],
            ],
          },
          {
            type: "heading",
            text: "Jurisdiction of a High Court",
          },
          {
            type: "list",
            items: [
              "**Original**: issues writs under **Article 226** for fundamental rights and also for other legal rights, so its writ power is wider than the Supreme Court's under Article 32; hears election petitions about elections to Parliament and the state legislature.",
              "**Appellate**: hears civil and criminal appeals from subordinate courts. A death sentence given by a Sessions Court must be confirmed by the High Court before it is carried out.",
              "**Supervisory** (Article 227): supervises all courts and tribunals in its area, except military tribunals.",
              "**Control over subordinate courts** (Article 235): postings, promotions and leave of district judges and lower judicial officers.",
              "**Court of record** (Article 215): can punish for contempt of itself.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "High Court judges retire at the age of:",
                options: ["60", "62", "65", "70"],
                answer: 1,
                explain: "High Court judges retire at 62; Supreme Court judges at 65.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Civil side", "Criminal side", "Revenue side"],
            rows: [
              ["Court of the **District Judge**", "**Court of Session** (Sessions Judge)", "Board of Revenue"],
              ["Courts of Civil Judges (Sub-Judges)", "Court of the Chief Judicial Magistrate", "Court of the Commissioner"],
              ["Courts of Munsiffs / Civil Judges (Junior Division)", "Courts of Judicial Magistrates", "Courts of the Collector and Tehsildar"],
            ],
          },
          {
            type: "text",
            md: "The **District Judge** is appointed by the **Governor** in consultation with the High Court (Article 233); an advocate needs at least **7 years** of practice. The same judge is called the District Judge when hearing civil cases and the **Sessions Judge** when hearing criminal cases. A Sessions Court can give any punishment allowed by law, including a death sentence, which needs the High Court's confirmation. **Revenue courts** deal with land records, land revenue and rent.",
          },
          {
            type: "text",
            md: "A **Lok Adalat** (People's Court) settles disputes by **compromise and conciliation**, with the consent of both sides. The **Legal Services Authorities Act, 1987** gave Lok Adalats legal status.\n\nAdvantages: no court fee (any fee already paid is refunded), simple and informal procedure, quick decisions, and the award is **final and binding**: there is no appeal against it. Typical cases: motor accident claims, family disputes, bank loan recovery, electricity and water bills.",
          },
          {
            type: "example",
            title: "Which court?",
            problem: "A farmer disagrees with the land revenue fixed for his field. A trader in the same district has a contract dispute worth a large sum. Where does each case begin?",
            steps: [
              "Land revenue is a revenue matter, so the farmer goes to a revenue court such as the Tehsildar or Collector.",
              "A contract dispute is a civil matter, so the trader goes to a civil court. Larger claims go to higher civil courts, up to the District Judge.",
              "Appeals from both can climb to higher courts in the same line.",
            ],
            answer: "The farmer goes to a revenue court; the trader goes to a civil court.",
          },
          {
            type: "mistake",
            wrong: "A Lok Adalat's decision can be challenged in a higher court, like any other court's decision.",
            right: "A Lok Adalat's award is final and binding; there is no appeal against it.",
            why: "Every other court on the ladder allows appeals, so students assume the same. But a Lok Adalat works only when both sides agree to the settlement, so there is nothing left to appeal against.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Civil, criminal or revenue court?",
              groups: ["Civil", "Criminal", "Revenue"],
              items: [
                { text: "Dispute over a rent agreement", group: 0, hint: "A private dispute about property or money." },
                { text: "Theft case", group: 1, hint: "A crime punished by the state." },
                { text: "Court of Session", group: 1, hint: "The Sessions Judge hears serious crimes." },
                { text: "Correction of land records", group: 2, hint: "Land records are handled by revenue officers." },
                { text: "Court of the Munsiff", group: 0, hint: "The lowest civil court." },
                { text: "Tehsildar's court", group: 2, hint: "Land revenue at the taluk level." },
              ],
              explain: "**Civil** courts settle private disputes about rights, property and money. **Criminal** courts deal with offences. **Revenue** courts deal with land revenue and land records.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE tip",
            md: "In comparison questions, write the High Court's figures beside the Supreme Court's: retirement 62 vs 65, advocate experience 10 years for both. The most common slip is giving 65 for High Court judges.",
          },
          {
            type: "keypoints",
            items: [
              "Article 214: a High Court for each state; Article 231: common High Court for two or more states.",
              "HC judges: appointed by the President, retire at 62, removed like SC judges.",
              "HC jurisdiction: original and writ (Art. 226), appellate, supervisory (Art. 227), control over lower courts (Art. 235).",
              "Lok Adalats settle cases by compromise; no fee, no appeal; given legal status by the 1987 Act.",
            ],
          },
        ],
        flashcards: [
          { front: "Retirement age of High Court judges", back: "62 years." },
          { front: "Article 226", back: "The High Court's power to issue writs for fundamental rights and for other legal purposes." },
          { front: "Article 227", back: "The High Court's power of superintendence over courts and tribunals in its area (except military tribunals)." },
          { front: "Who appoints a District Judge?", back: "The Governor of the state, in consultation with the High Court (Article 233)." },
          { front: "Lok Adalat", back: "A people's court that settles disputes by mutual compromise; its award is final with no appeal." },
          { front: "District Judge vs Sessions Judge", back: "The same judge: District Judge for civil cases, Sessions Judge for criminal cases." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A common High Court for two or more states can be set up under:",
            options: ["Article 214", "Article 226", "Article 231", "Article 235"],
            answer: 2,
            explain: "Article 231 allows Parliament to set up a common High Court.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The writ jurisdiction of a High Court is wider than that of the Supreme Court.",
            answer: true,
            explain: "Under Article 226, a High Court can issue writs for fundamental rights and for other legal rights; Article 32 covers only fundamental rights.",
            difficulty: 3,
            hint: "Compare \"fundamental rights\" with \"any other purpose\".",
          },
          {
            kind: "fill",
            q: "Lok Adalats were given legal status by the Legal Services Authorities Act of ___.",
            answer: ["1987"],
            explain: "The Act came into force later, but it was passed in 1987.",
          },
          {
            kind: "mcq",
            q: "A death sentence passed by a Sessions Court must be confirmed by:",
            options: ["The District Collector", "The High Court", "The Governor", "The Lok Adalat"],
            answer: 1,
            explain: "No death sentence can be carried out without the High Court's confirmation.",
          },
          {
            kind: "order",
            q: "Arrange the criminal courts from the lowest to the highest.",
            items: ["Court of a Judicial Magistrate", "Court of Session", "High Court", "Supreme Court"],
            explain: "Cases and appeals climb the ladder from the magistrates to the Supreme Court.",
          },
          {
            kind: "multi",
            q: "Which are advantages of Lok Adalats?",
            options: ["No court fee", "Quick settlement", "Award is final and binding", "Unlimited rounds of appeal"],
            answers: [0, 1, 2],
            explain: "There is no appeal against a Lok Adalat's award.",
          },
        ],
      },
    ],
  },
];

/* ================================================================== */
/* Karnataka SSLC: Political Science                                   */
/* ================================================================== */

const kaPolitics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "problems-of-india-solutions",
    title: "Problems of India and their Solutions",
    icon: "🧩",
    description: "Unemployment, corruption, communalism, terrorism, regionalism and illiteracy, and how to tackle them.",
    lessons: [
      {
        slug: "major-problems-and-solutions",
        title: "Major Problems of India and their Solutions",
        summary: "What each major national problem means, why it harms the country, and the laws and steps that address it.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🧩",
            caption: "A young graduate in Kalaburagi cannot find a job, a family pays a bribe for a certificate, and a rumour sets two communities against each other. Each is a separate problem, but all slow the nation down.",
          },
          {
            type: "text",
            md: "India has made great progress since 1947, but some problems still stand in the way of development and unity. For each problem we need to know three things: **what it is**, **why it is harmful**, and **how it can be solved**.",
          },
          {
            type: "table",
            headers: ["Problem", "Meaning", "Main solutions"],
            rows: [
              ["**Unemployment**", "People who are able and willing to work do not find work", "Skill training, self-employment, small industries, rural employment schemes such as MGNREGA (2005), better vocational education"],
              ["**Corruption**", "Misuse of public office for private gain, such as bribery", "Lokpal and Lokayuktas Act (2013), Karnataka Lokayukta (1984), Right to Information Act (2005), e-governance, strong public opinion"],
              ["**Communalism**", "Using religion to divide people and seek political gain", "Secular values, education, strict action against those who spread hatred, inter-faith harmony"],
              ["**Terrorism**", "Use of violence and fear against people to achieve political aims", "Strong laws, intelligence and security forces, the National Investigation Agency, international cooperation"],
              ["**Regionalism**", "Putting the interests of one's own region above the nation", "Balanced regional development, respect for all languages and cultures, fair sharing of resources"],
              ["**Illiteracy**", "Inability to read and write with understanding", "Right to Education (Article 21A); free and compulsory education for children aged 6 to 14; adult literacy programmes"],
            ],
          },
          {
            type: "text",
            md: "**Regional imbalance** means some regions develop faster than others. In Karnataka, the **Dr. D.M. Nanjundappa Committee** studied backward taluks and recommended special development plans (report, 2002). **Article 371J**, added in 2012, gives special provisions for the Hyderabad-Karnataka region (now called Kalyana Karnataka), such as reservation in education and jobs for local people.",
          },
          {
            type: "example",
            title: "Building a solution answer",
            problem: "Suggest three ways to reduce corruption in public offices.",
            steps: [
              "Start with a meaning: corruption is misuse of public office for private gain.",
              "Point 1 (law): strengthen the Lokpal at the Union and Lokayukta in states to investigate complaints.",
              "Point 2 (transparency): use the Right to Information Act and online services, so fewer face-to-face dealings are needed.",
              "Point 3 (citizens): build public awareness and refuse to pay or take bribes.",
            ],
            answer: "Strong anti-corruption bodies (Lokpal, Lokayukta), transparency through RTI and e-governance, and active, honest citizens.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which law guarantees free and compulsory education to children aged 6 to 14?",
                options: ["Lokpal Act", "Right to Education under Article 21A", "Right to Information Act", "MGNREGA"],
                answer: 1,
                explain: "Article 21A and the Right of Children to Free and Compulsory Education Act, 2009 make elementary education a right.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Only the government can solve these problems; ordinary citizens have no role.",
            right: "Laws and schemes help, but problems like corruption and communalism end only when citizens refuse to take part in them and build social harmony.",
            why: "It feels as though big problems need big governments. But a bribe needs a giver, and a rumour needs people to spread it; citizens' choices matter as much as laws.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each problem to a step that tackles it.",
              pairs: [
                ["Corruption", "Lokayukta"],
                ["Unemployment", "Skill training and rural job schemes"],
                ["Illiteracy", "Right to Education"],
                ["Communalism", "Secular values and inter-faith harmony"],
                ["Regional imbalance", "Special plans for backward taluks"],
              ],
              explain: "Each problem needs its own remedy. In Karnataka, the **Lokayukta** checks corruption and the Nanjundappa Committee's plans target backward taluks.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "For a 3- or 4-mark \"suggest measures\" question, write one line of meaning first, then numbered measures. Examiners give marks per valid point, so four clear points beat one long paragraph.",
          },
          {
            type: "callout",
            tone: "note",
            md: "These problems are linked. Unemployment can push young people towards crime or extremism; illiteracy makes people easier to mislead with rumours. Solving one helps solve the others.",
          },
          {
            type: "keypoints",
            items: [
              "Major problems: unemployment, corruption, communalism, terrorism, regionalism, illiteracy.",
              "Anti-corruption: Lokpal (2013), Karnataka Lokayukta (1984), RTI (2005).",
              "Education is a fundamental right for children aged 6 to 14 (Article 21A).",
              "Regional imbalance in Karnataka: Nanjundappa Committee; Article 371J for Kalyana Karnataka.",
            ],
          },
        ],
        flashcards: [
          { front: "Unemployment", back: "A situation where people who are able and willing to work cannot find work." },
          { front: "Corruption", back: "Misuse of public office or power for private gain." },
          { front: "Lokayukta", back: "A state-level anti-corruption body; Karnataka's was set up under the Karnataka Lokayukta Act, 1984." },
          { front: "Regionalism", back: "Giving more importance to one's own region than to the nation as a whole." },
          { front: "Article 21A", back: "The right to free and compulsory education for children aged 6 to 14." },
          { front: "Nanjundappa Committee", back: "A Karnataka committee on regional imbalances that identified backward taluks (report 2002)." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The Lokpal and Lokayuktas Act was passed in:",
            options: ["1984", "2005", "2013", "2009"],
            answer: 2,
            explain: "1984 is the Karnataka Lokayukta Act; 2005 is RTI; 2009 is the RTE Act.",
            difficulty: 2,
            hint: "It is the most recent of these laws.",
          },
          {
            kind: "truefalse",
            q: "Communalism means using religion to divide people for political gain.",
            answer: true,
            explain: "It sets communities against each other and harms national unity.",
          },
          {
            kind: "fill",
            q: "Putting the interests of one's own region above the nation is called ___.",
            answer: ["regionalism"],
            explain: "Love for one's region is natural; regionalism becomes a problem when it goes against national interest.",
          },
          {
            kind: "multi",
            q: "Which steps help reduce unemployment?",
            options: ["Skill development and vocational training", "Encouraging small and cottage industries", "Rural employment schemes", "Closing schools"],
            answers: [0, 1, 2],
            explain: "Closing schools would worsen illiteracy and unemployment.",
          },
          {
            kind: "mcq",
            q: "Article 371J gives special provisions to which region of Karnataka?",
            options: ["Coastal Karnataka", "Malnad", "Hyderabad-Karnataka (Kalyana Karnataka)", "Old Mysore"],
            answer: 2,
            explain: "It was added in 2012 for the Hyderabad-Karnataka region.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The Right to Information Act helps fight corruption by making government work more transparent.",
            answer: true,
            explain: "Citizens can ask for records, which makes hidden wrongdoing harder.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "indias-foreign-policy",
    title: "India's Foreign Policy",
    icon: "🌐",
    description: "Aims and principles of India's foreign policy: Panchasheela, non-alignment, anti-colonialism and disarmament.",
    lessons: [
      {
        slug: "foreign-policy-principles",
        title: "Principles of India's Foreign Policy",
        summary: "What foreign policy is, Nehru's role, Panchasheela, the Non-Aligned Movement and India's other guiding principles.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🌐",
            caption: "A family decides how to behave with its neighbours: friendly, fair, not interfering. A country does the same through its foreign policy.",
          },
          {
            type: "text",
            md: "**Foreign policy** is the set of principles and goals a country follows in its relations with other countries. Its aim is to protect the **national interest**: security, development and the welfare of the people.\n\n**Jawaharlal Nehru**, India's first Prime Minister, is called the **architect of India's foreign policy**. The Constitution also guides it: **Article 51** (a Directive Principle) asks the state to promote international peace and security and to settle disputes by peaceful means.",
          },
          {
            type: "heading",
            text: "Panchasheela (1954)",
          },
          {
            type: "text",
            md: "The **Panchasheela**, or five principles of peaceful co-existence, were agreed between India and China in 1954, by Nehru and the Chinese Premier Zhou Enlai.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Mutual respect for each other's territorial integrity and sovereignty.",
              "Mutual non-aggression.",
              "Mutual non-interference in each other's internal affairs.",
              "Equality and mutual benefit.",
              "Peaceful co-existence.",
            ],
          },
          {
            type: "heading",
            text: "Non-alignment",
          },
          {
            type: "text",
            md: "After the Second World War, the world split into two power blocs: one led by the **USA** and one led by the **USSR**. This rivalry is called the **Cold War**. **Non-alignment** means not joining either military bloc and deciding each issue on its merits. It is not the same as staying neutral or silent.\n\nThe **Non-Aligned Movement (NAM)** was founded by Nehru (India), Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia) and Nkrumah (Ghana). Its first summit was held in **Belgrade in 1961**.",
          },
          {
            type: "table",
            headers: ["Other principle", "What it means for India"],
            rows: [
              ["Opposition to colonialism and imperialism", "Supported freedom struggles of colonised countries in Asia and Africa"],
              ["Opposition to racial discrimination", "Opposed apartheid in South Africa"],
              ["Disarmament", "Wants the world to reduce and finally destroy weapons of mass destruction"],
              ["Faith in the United Nations", "A founding member of the UN in 1945; sends troops for UN peacekeeping"],
              ["Peaceful settlement of disputes", "Prefers talks and agreements over war"],
            ],
          },
          {
            type: "example",
            title: "Spot the principle",
            problem: "During the Cold War, India accepted help from both the USA and the USSR but joined neither of their military alliances. Which principle is this?",
            steps: [
              "Note the key fact: India did not join either bloc's military alliance.",
              "It still kept friendly ties and judged issues by itself.",
              "This is exactly the idea of non-alignment.",
            ],
            answer: "Non-alignment.",
          },
          {
            type: "mistake",
            wrong: "Non-alignment means India stayed neutral and did not take a stand on world issues.",
            right: "Non-alignment means not joining military blocs, while actively taking a stand on each issue on its own merits.",
            why: "Neutral and non-aligned sound alike. But India spoke strongly against colonialism, apartheid and the arms race; it simply refused to follow either superpower blindly.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The first summit of the Non-Aligned Movement was held in:",
                options: ["New Delhi, 1955", "Belgrade, 1961", "Bandung, 1965", "Cairo, 1947"],
                answer: 1,
                explain: "The first NAM summit was in Belgrade, Yugoslavia, in 1961.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is it one of the five Panchasheela principles?",
              groups: ["Panchasheela principle", "Not in Panchasheela"],
              items: [
                { text: "Mutual non-aggression", group: 0, hint: "Neither side attacks the other." },
                { text: "Peaceful co-existence", group: 0, hint: "Living side by side in peace." },
                { text: "Equality and mutual benefit", group: 0, hint: "Fair dealings that help both sides." },
                { text: "Joining a military alliance", group: 1, hint: "This goes against India's policy." },
                { text: "Non-interference in internal affairs", group: 0, hint: "Not meddling in another country's matters." },
                { text: "Building more nuclear weapons", group: 1, hint: "India supports disarmament." },
              ],
              explain: "The five principles are respect for territorial integrity and sovereignty, **non-aggression**, **non-interference**, **equality and mutual benefit**, and **peaceful co-existence**.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "Listing all five Panchasheela principles is a common 2- or 3-mark question. Learn them in order; a frequent error is adding \"non-alignment\" as one of the five.",
          },
          {
            type: "keypoints",
            items: [
              "Foreign policy protects national interest; Nehru is its architect; Article 51 guides it.",
              "Panchasheela (1954, India–China): five principles of peaceful co-existence.",
              "Non-alignment: not joining Cold War blocs; NAM's first summit was in Belgrade, 1961.",
              "Other principles: anti-colonialism, anti-racism, disarmament, faith in the UN, peaceful settlement.",
            ],
          },
        ],
        flashcards: [
          { front: "Foreign policy", back: "The principles and goals a country follows in its relations with other countries." },
          { front: "Architect of India's foreign policy", back: "Jawaharlal Nehru." },
          { front: "Panchasheela", back: "Five principles of peaceful co-existence agreed between India and China in 1954." },
          { front: "Non-alignment", back: "Not joining either Cold War military bloc and judging each issue on its merits." },
          { front: "Founders of NAM", back: "Nehru (India), Tito (Yugoslavia), Nasser (Egypt), Sukarno (Indonesia), Nkrumah (Ghana)." },
          { front: "Article 51", back: "Directive Principle asking the state to promote international peace and security." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Panchasheela was signed between India and:",
            options: ["Pakistan", "China", "USSR", "Nepal"],
            answer: 1,
            explain: "It was agreed between India and China in 1954.",
          },
          {
            kind: "truefalse",
            q: "Non-alignment means India refused to take any stand on international issues.",
            answer: false,
            explain: "India took clear stands on issues such as colonialism and apartheid; it only refused to join military blocs.",
          },
          {
            kind: "fill",
            q: "The rivalry between the USA-led bloc and the USSR-led bloc after the Second World War is called the ___ War.",
            answer: ["Cold"],
            explain: "It was called cold because the two superpowers did not fight each other directly.",
          },
          {
            kind: "multi",
            q: "Who were among the founders of the Non-Aligned Movement?",
            options: ["Jawaharlal Nehru", "Josip Broz Tito", "Gamal Abdel Nasser", "Winston Churchill"],
            answers: [0, 1, 2],
            explain: "Churchill was the British Prime Minister and had no role in NAM.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which Article of the Constitution asks India to promote international peace and security?",
            options: ["Article 21", "Article 32", "Article 51", "Article 356"],
            answer: 2,
            explain: "Article 51 is a Directive Principle of State Policy.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "India is a founding member of the United Nations.",
            answer: true,
            explain: "India signed the UN Charter in 1945.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "india-relations-other-countries",
    title: "India's Relationship with Other Countries",
    icon: "🤝",
    description: "India's relations with neighbours, the USA and Russia, and the role of SAARC.",
    lessons: [
      {
        slug: "india-and-the-world",
        title: "India and Its Neighbours and Partners",
        summary: "Key agreements and issues in India's relations with Pakistan, China, Nepal, Bangladesh, Sri Lanka, the USA and Russia.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🗺️",
            caption: "India shares land borders with seven countries and sea neighbours like Sri Lanka and the Maldives. Good neighbours mean safer borders and more trade.",
          },
          {
            type: "text",
            md: "India's relations with other countries rest on the principles of its foreign policy: peace, friendship and mutual benefit. Some relations have been warm, some have seen conflict, and many have changed over time. We look at the key events with each country.",
          },
          {
            type: "table",
            headers: ["Country", "Key events and agreements"],
            rows: [
              ["**Pakistan**", "Dispute over Kashmir since 1947; wars in 1947–48, 1965 and 1971; Kargil conflict in 1999; **Tashkent Agreement** (1966) and **Simla Agreement** (1972) to settle issues peacefully; terrorism remains a major concern"],
              ["**China**", "Panchasheela (1954); war in 1962; boundary dispute still unsettled; today a large trading partner"],
              ["**Nepal**", "Treaty of Peace and Friendship (1950); open border; close cultural ties"],
              ["**Bangladesh**", "India helped in its liberation in 1971; Ganga water-sharing treaty (1996); Land Boundary Agreement (2015) settled the exchange of enclaves"],
              ["**Sri Lanka**", "India–Sri Lanka Accord (1987) on the Tamil issue; trade and fishing links"],
              ["**USA**", "Differences during the Cold War; closer ties later; civil nuclear agreement (2008); cooperation in trade, technology and defence"],
              ["**Russia** (earlier USSR)", "Treaty of Peace, Friendship and Cooperation (1971); long-standing partner in defence, space and energy"],
            ],
          },
          {
            type: "heading",
            text: "SAARC",
          },
          {
            type: "text",
            md: "The **South Asian Association for Regional Cooperation (SAARC)** was set up in **1985** at **Dhaka**. Its members are India, Pakistan, Bangladesh, Nepal, Bhutan, Sri Lanka, the Maldives and Afghanistan (which joined in 2007). Its secretariat is at **Kathmandu**. It aims to promote welfare, economic growth and cultural cooperation in South Asia.",
          },
          {
            type: "example",
            title: "Reading a timeline",
            problem: "Put these India–Pakistan events in order and say what links the second and fourth: 1965 war, Tashkent Agreement, 1971 war, Simla Agreement.",
            steps: [
              "1965: war between India and Pakistan.",
              "1966: Tashkent Agreement, signed after the 1965 war.",
              "1971: war, which led to the creation of Bangladesh.",
              "1972: Simla Agreement, signed after the 1971 war.",
              "Both agreements came after a war and committed the two countries to settle disputes peacefully.",
            ],
            answer: "1965 war → Tashkent (1966) → 1971 war → Simla (1972). Both agreements aimed at peaceful settlement after a war.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "India signed the Treaty of Peace, Friendship and Cooperation in 1971 with:",
                options: ["USA", "USSR", "China", "Nepal"],
                answer: 1,
                explain: "The 1971 Indo-Soviet treaty strengthened India's ties with the USSR.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "SAARC was founded in New Delhi and has its headquarters there.",
            right: "SAARC was founded in Dhaka in 1985, and its secretariat is in Kathmandu.",
            why: "Because India is the largest member, students assume the headquarters is in India. The members chose Kathmandu to keep the body balanced.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each agreement to the country.",
              pairs: [
                ["Simla Agreement, 1972", "Pakistan"],
                ["Panchasheela, 1954", "China"],
                ["Treaty of Peace and Friendship, 1950", "Nepal"],
                ["Land Boundary Agreement, 2015", "Bangladesh"],
                ["Accord on the Tamil issue, 1987", "Sri Lanka"],
              ],
              explain: "Linking each year to a country is a quick way to revise. Notice that most agreements aim at peaceful settlement, as India's foreign policy requires.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "When writing about India's relations with a country, give both sides: one area of cooperation and one area of difference. Answers that list only problems or only friendship usually get partial marks.",
          },
          {
            type: "keypoints",
            items: [
              "Pakistan: Kashmir dispute, wars, Tashkent (1966) and Simla (1972) agreements.",
              "China: Panchasheela (1954), 1962 war, border dispute, large trade.",
              "Bangladesh liberated in 1971 with India's help; Nepal treaty 1950; Sri Lanka accord 1987.",
              "USA and Russia are major partners; SAARC (1985, Dhaka) promotes South Asian cooperation.",
            ],
          },
        ],
        flashcards: [
          { front: "Simla Agreement", back: "Signed between India and Pakistan in 1972, after the 1971 war, to settle disputes bilaterally and peacefully." },
          { front: "Tashkent Agreement", back: "Signed between India and Pakistan in 1966 after the 1965 war." },
          { front: "SAARC", back: "South Asian Association for Regional Cooperation, set up in 1985 at Dhaka; secretariat at Kathmandu." },
          { front: "India–USSR treaty", back: "Treaty of Peace, Friendship and Cooperation, 1971." },
          { front: "India–China war", back: "1962." },
          { front: "Members of SAARC", back: "India, Pakistan, Bangladesh, Nepal, Bhutan, Sri Lanka, Maldives, Afghanistan." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The Simla Agreement was signed in:",
            options: ["1966", "1971", "1972", "1999"],
            answer: 2,
            explain: "1966 was Tashkent; 1971 was the war; 1999 was Kargil.",
            difficulty: 2,
            hint: "It came the year after the 1971 war.",
          },
          {
            kind: "numeric",
            q: "How many member countries does SAARC have?",
            answer: 8,
            explain: "Seven founding members plus Afghanistan, which joined in 2007.",
          },
          {
            kind: "truefalse",
            q: "India helped in the liberation of Bangladesh in 1971.",
            answer: true,
            explain: "Bangladesh became independent after the 1971 war.",
          },
          {
            kind: "fill",
            q: "The secretariat of SAARC is located at ___.",
            answer: ["Kathmandu"],
            explain: "Kathmandu is the capital of Nepal.",
          },
          {
            kind: "order",
            q: "Arrange these events in chronological order.",
            items: ["Panchasheela agreement", "India–China war", "Tashkent Agreement", "Simla Agreement"],
            explain: "1954, 1962, 1966, 1972.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The Land Boundary Agreement that settled the exchange of enclaves was signed with:",
            options: ["Nepal", "Bangladesh", "Sri Lanka", "Bhutan"],
            answer: 1,
            explain: "India and Bangladesh completed the exchange of enclaves under the 2015 agreement.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "global-problems-indias-role",
    title: "Global Problems and India's Role",
    icon: "🌍",
    description: "Human rights, apartheid, the arms race, terrorism and economic inequality, and how India responds.",
    lessons: [
      {
        slug: "global-problems",
        title: "Global Problems and India's Role",
        summary: "The major problems facing the world today and the stand India has taken on each.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🌍",
            caption: "Some problems do not stop at borders: a terror attack, a nuclear threat or a hungry nation affects everyone on the planet.",
          },
          {
            type: "text",
            md: "**Global problems** are problems that affect many countries and cannot be solved by one country alone. They need cooperation through bodies like the **United Nations**. India, true to its foreign policy, has worked for peace, justice and equality on each of them.",
          },
          {
            type: "table",
            headers: ["Global problem", "What it means", "India's role"],
            rows: [
              ["**Violation of human rights**", "Denial of basic rights such as life, liberty, equality and dignity", "Supports the **Universal Declaration of Human Rights** (10 December 1948); set up the **National Human Rights Commission** in 1993"],
              ["**Apartheid**", "A policy of racial segregation and discrimination followed by the white minority government in South Africa", "Raised the issue at the UN in 1946, cut trade ties with South Africa, supported Nelson Mandela's struggle"],
              ["**Arms race**", "Countries competing to build more and deadlier weapons, including nuclear weapons", "Supports complete **disarmament**; follows a policy of **no first use** of nuclear weapons"],
              ["**Terrorism**", "Use of violence to spread fear for political aims", "Proposed a **Comprehensive Convention on International Terrorism** at the UN in 1996; works with other nations against terror"],
              ["**Economic inequality**", "A wide gap between rich developed nations and poor developing nations", "Leads developing countries in demanding fair trade and a just world economic order"],
            ],
          },
          {
            type: "text",
            md: "**Disarmament** means reducing and finally removing weapons, especially weapons of mass destruction. India did not sign the **Nuclear Non-Proliferation Treaty (NPT, 1968)** or the **Comprehensive Test Ban Treaty (CTBT, 1996)**, because it considers them **discriminatory**: they let a few countries keep nuclear weapons while barring others. India conducted nuclear tests at **Pokhran** in 1974 and 1998, but stands for the complete elimination of nuclear weapons by all.",
          },
          {
            type: "example",
            title: "Explaining a stand",
            problem: "India supports disarmament but did not sign the NPT. Is this a contradiction?",
            steps: [
              "State India's aim: complete disarmament for all countries.",
              "State what the NPT does: it allows five nuclear powers to keep weapons and stops others from getting them.",
              "India sees this as unequal: it limits some countries but does not make the nuclear powers give up their weapons.",
              "So India's refusal comes from its demand for equal and complete disarmament.",
            ],
            answer: "Not a contradiction: India rejects the NPT as discriminatory and demands disarmament by every country.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The Universal Declaration of Human Rights was adopted on:",
                options: ["15 August 1947", "26 January 1950", "10 December 1948", "24 October 1945"],
                answer: 2,
                explain: "10 December is observed as Human Rights Day. 24 October 1945 is when the UN came into existence.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "India refused to sign the NPT because it is against disarmament.",
            right: "India supports complete disarmament; it did not sign the NPT because it treats nuclear and non-nuclear countries unequally.",
            why: "Not signing a disarmament treaty looks like opposing disarmament. India's objection is to the unequal terms, not to the goal.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which global problem does each item relate to?",
              groups: ["Human rights and racism", "Arms race and terrorism"],
              items: [
                { text: "Apartheid in South Africa", group: 0, hint: "Discrimination based on race." },
                { text: "National Human Rights Commission", group: 0, hint: "Protects basic rights in India." },
                { text: "Nuclear Non-Proliferation Treaty", group: 1, hint: "A treaty about weapons." },
                { text: "No first use policy", group: 1, hint: "India's nuclear weapons policy." },
                { text: "Universal Declaration of 1948", group: 0, hint: "Adopted by the UN on 10 December." },
                { text: "Comprehensive Convention on International Terrorism", group: 1, hint: "India's proposal at the UN in 1996." },
              ],
              explain: "Human rights and **racism** concern how people are treated; the **arms race** and **terrorism** concern weapons and violence. India acts on both fronts through the UN.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "For \"India's role\" questions, mention one action India took (not just an opinion). For apartheid, \"India raised the issue at the UN in 1946 and cut trade ties\" earns marks; \"India was against apartheid\" alone is too vague.",
          },
          {
            type: "keypoints",
            items: [
              "Global problems need international cooperation through the UN.",
              "Human rights: UDHR 10 December 1948; NHRC in India set up in 1993.",
              "India opposed apartheid from 1946; Nelson Mandela became South Africa's President in 1994.",
              "India supports complete disarmament but rejects the NPT and CTBT as discriminatory.",
            ],
          },
        ],
        flashcards: [
          { front: "Apartheid", back: "Racial segregation and discrimination by the white minority government of South Africa." },
          { front: "Human Rights Day", back: "10 December, the day the UDHR was adopted in 1948." },
          { front: "NHRC", back: "National Human Rights Commission of India, set up in 1993." },
          { front: "Disarmament", back: "Reducing and finally eliminating weapons, especially weapons of mass destruction." },
          { front: "Why India did not sign the NPT", back: "It considers the treaty discriminatory, as it lets five nuclear powers keep weapons." },
          { front: "Arms race", back: "Competition among countries to build more and deadlier weapons." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The National Human Rights Commission of India was set up in:",
            options: ["1948", "1976", "1993", "2005"],
            answer: 2,
            explain: "It was set up under the Protection of Human Rights Act, 1993.",
          },
          {
            kind: "truefalse",
            q: "India has signed the Comprehensive Test Ban Treaty.",
            answer: false,
            explain: "India did not sign the CTBT, considering it discriminatory.",
          },
          {
            kind: "fill",
            q: "The policy of racial segregation in South Africa was called ___.",
            answer: ["apartheid"],
            explain: "It ended in the early 1990s; Nelson Mandela became President in 1994.",
          },
          {
            kind: "multi",
            q: "Which describe India's stand on nuclear weapons?",
            options: ["Supports complete disarmament", "Follows no first use", "Considers the NPT discriminatory", "Wants only some countries to keep weapons"],
            answers: [0, 1, 2],
            explain: "India wants disarmament by all, not a world where only some keep weapons.",
            difficulty: 2,
            hint: "One option describes the NPT itself, which India opposes.",
          },
          {
            kind: "mcq",
            q: "India's nuclear tests were conducted at:",
            options: ["Sriharikota", "Pokhran", "Thumba", "Kalpakkam"],
            answer: 1,
            explain: "Pokhran is in Rajasthan. Sriharikota and Thumba are space launch sites.",
          },
          {
            kind: "truefalse",
            q: "Economic inequality between developed and developing nations is a global problem.",
            answer: true,
            explain: "India works with other developing nations for fairer trade and a just economic order.",
          },
        ],
      },
    ],
  },
];

/* ================================================================== */
/* Karnataka SSLC: Sociology                                           */
/* ================================================================== */

const kaSociology: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "social-stratification",
    title: "Social Stratification",
    icon: "🪜",
    description: "Caste, class, race and gender as bases of inequality, untouchability, and steps towards equality.",
    lessons: [
      {
        slug: "stratification-caste-class",
        title: "Social Stratification, Caste and Class",
        summary: "What stratification is, how caste and class differ, why untouchability is a crime, and how society moves towards equality.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🪨",
            caption: "Look at the layers in a rock cut beside a ghat road. Sociologists use the same idea, strata or layers, to describe how some groups in society are placed above others.",
          },
          {
            type: "text",
            md: "**Social stratification** is the division of society into groups that are arranged one above another, based on things like wealth, power, prestige or birth. It creates **social inequality**: some groups get more opportunities and respect than others.\n\nThe main bases of stratification are **caste**, **class**, **race** and **gender**.",
          },
          {
            type: "table",
            headers: ["Caste", "Class"],
            rows: [
              ["Membership is by **birth**", "Membership depends mainly on **income, wealth and occupation**"],
              ["A **closed** system: hard to change one's caste", "An **open** system: a person can move up or down"],
              ["Traditionally linked to marriage within the group (**endogamy**) and fixed occupations", "No rules on marriage or occupation"],
              ["Social mobility is very limited", "**Social mobility** (moving from one level to another) is possible through education and work"],
            ],
          },
          {
            type: "text",
            md: "**Untouchability** was the most inhuman practice of the caste system. People of certain groups were denied entry to temples, schools, wells and public places, and were treated as \"impure\". It denied them dignity and equality.",
          },
          {
            type: "heading",
            text: "Steps towards equality",
          },
          {
            type: "list",
            items: [
              "**Article 17** of the Constitution abolishes untouchability and makes its practice in any form an offence.",
              "The **Untouchability (Offences) Act, 1955**, renamed the **Protection of Civil Rights Act** in 1976, punishes the practice.",
              "The **Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989** protects these groups from violence and humiliation.",
              "**Reservation** in education, jobs and legislatures helps groups denied opportunities for centuries.",
              "Reformers such as **Basavanna** (12th-century Karnataka), Jyotiba Phule, Narayana Guru, Mahatma Gandhi and **Dr. B.R. Ambedkar** fought caste discrimination.",
            ],
          },
          {
            type: "example",
            title: "Caste or class?",
            problem: "Ravi's father was a daily-wage worker. Ravi studied hard, became an engineer and now earns well. Has his caste changed, or his class?",
            steps: [
              "Caste is decided by birth and does not change with income.",
              "Class depends on income, wealth and occupation.",
              "Ravi's income and occupation have changed, so his class position has moved up.",
              "This upward movement is called social mobility.",
            ],
            answer: "His class has changed (upward social mobility); caste is fixed by birth.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which Article of the Constitution abolishes untouchability?",
                options: ["Article 14", "Article 17", "Article 21", "Article 32"],
                answer: 1,
                explain: "Article 17 abolishes untouchability and forbids its practice in any form.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Stratification is just natural difference: people are simply different in height, talent or looks.",
            right: "Stratification is a social ranking of groups that gives unequal rewards, power and respect; it is made by society, not by nature.",
            why: "Natural differences exist between individuals. But stratification ranks whole groups and passes this ranking on to the next generation, which is why it is a social issue that society can change.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each a feature of caste or of class?",
              groups: ["Caste", "Class"],
              items: [
                { text: "Decided by birth", group: 0, hint: "You cannot choose it." },
                { text: "Based on income and occupation", group: 1, hint: "It can change with a new job." },
                { text: "Closed system", group: 0, hint: "Movement between groups is very hard." },
                { text: "Open system", group: 1, hint: "People can move up or down." },
                { text: "Traditionally marriage within the group", group: 0, hint: "Endogamy." },
                { text: "Mobility through education", group: 1, hint: "A degree can lead to a better-paid job." },
              ],
              explain: "**Caste** is ascribed by birth and closed; **class** is achieved through income and work and is open, allowing social mobility.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "\"Differentiate between caste and class\" usually carries 3–4 marks. Write points in pairs (birth vs income, closed vs open, limited vs possible mobility). Pairs are easier for the examiner to mark than two separate paragraphs.",
          },
          {
            type: "keypoints",
            items: [
              "Social stratification ranks groups in layers based on wealth, power, prestige or birth.",
              "Main bases: caste, class, race and gender.",
              "Caste is by birth and closed; class depends on income and is open.",
              "Untouchability is abolished by Article 17 and punished by law; reservation and reform movements promote equality.",
            ],
          },
        ],
        flashcards: [
          { front: "Social stratification", back: "Division of society into groups ranked one above another, based on wealth, power, prestige or birth." },
          { front: "Social mobility", back: "Movement of a person or group from one social level to another." },
          { front: "Endogamy", back: "The custom of marrying within one's own group." },
          { front: "Article 17", back: "Abolishes untouchability and makes its practice an offence." },
          { front: "Protection of Civil Rights Act", back: "The 1955 Untouchability (Offences) Act, renamed in 1976." },
          { front: "Basavanna", back: "12th-century reformer of Karnataka who opposed caste discrimination." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is an open system of stratification?",
            options: ["Caste", "Class", "Race", "Untouchability"],
            answer: 1,
            explain: "Class allows movement up or down through education, work and income.",
          },
          {
            kind: "truefalse",
            q: "The practice of untouchability in any form is an offence under the Constitution.",
            answer: true,
            explain: "Article 17 abolishes it.",
          },
          {
            kind: "fill",
            q: "Moving from one social level to another is called social ___.",
            answer: ["mobility"],
            explain: "It is much easier in a class system than in the caste system.",
          },
          {
            kind: "multi",
            q: "Which are bases of social stratification?",
            options: ["Caste", "Class", "Gender", "Height"],
            answers: [0, 1, 2],
            explain: "Height is a natural difference between individuals, not a social ranking of groups.",
            difficulty: 2,
            hint: "Look for ranks created by society.",
          },
          {
            kind: "mcq",
            q: "The SC and ST (Prevention of Atrocities) Act was passed in:",
            options: ["1955", "1976", "1989", "2005"],
            answer: 2,
            explain: "1955 and 1976 relate to the Protection of Civil Rights Act.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "A person's caste changes when he gets a better job.",
            answer: false,
            explain: "Caste is ascribed by birth; a better job changes class position, not caste.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "labour",
    title: "Labour",
    icon: "🛠️",
    description: "Division of labour, gender and work, organised and unorganised sectors, and labour rights.",
    lessons: [
      {
        slug: "labour-and-society",
        title: "Labour, Division of Labour and Work Sectors",
        summary: "What labour is, division of labour, unpaid and gender-based work, and how organised and unorganised workers differ.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🧺",
            caption: "In a Mysuru silk unit, one person reels the thread, another dyes it and a third weaves. Each does one part, and together they make a saree.",
          },
          {
            type: "text",
            md: "**Labour** means physical or mental effort used to produce goods and services. Farmers, teachers, nurses, coolies, software engineers and homemakers all labour.\n\n**Division of labour** means dividing work into parts and giving each part to a different person or group. It increases efficiency and skill. The sociologist **Emile Durkheim** wrote about how division of labour holds modern society together, because people depend on each other.",
          },
          {
            type: "heading",
            text: "Labour and gender",
          },
          {
            type: "text",
            md: "In many homes, cooking, cleaning and caring for children and the elderly are done mostly by women. This is **unpaid labour**: it is real work, but it earns no wage and is often not counted. Women also face **wage discrimination**: being paid less than men for the same work.\n\nThe Constitution asks the state to ensure **equal pay for equal work** for men and women (**Article 39(d)**, a Directive Principle). The **Equal Remuneration Act, 1976** put this into law; its provisions are now part of the Code on Wages, 2019.",
          },
          {
            type: "table",
            headers: ["Organised sector", "Unorganised sector"],
            rows: [
              ["Registered with the government; follows labour laws", "Mostly unregistered; laws are often not followed"],
              ["Fixed working hours and regular salary", "Irregular work and wages"],
              ["Job security and benefits such as provident fund, pension, paid leave", "Little or no job security or social security"],
              ["Examples: government offices, banks, large factories", "Examples: agricultural labourers, construction workers, street vendors, domestic workers"],
            ],
          },
          {
            type: "text",
            md: "Most Indian workers are in the **unorganised sector**. **Landless agricultural labourers**, who own no land and work on others' fields for wages, are among the poorest. Many workers **migrate** from villages to cities for work, often facing poor housing and no security.",
          },
          {
            type: "example",
            title: "Which sector?",
            problem: "Lakshmi works as a mason's helper at a building site in Bengaluru. She is paid daily, gets no leave and has no provident fund. Which sector does she work in, and what problems does she face?",
            steps: [
              "Check the signs: daily pay, no leave, no provident fund, no written contract.",
              "These are features of the unorganised sector.",
              "Her problems: irregular income, no job security, no social security, and possibly lower pay than male workers.",
            ],
            answer: "She works in the unorganised sector and lacks job security, social security and fair, regular wages.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "truefalse",
                q: "Housework done by a homemaker is labour, even though it is unpaid.",
                answer: true,
                explain: "It is effort that produces services for the family; it is simply not paid or counted in income.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Only work that earns money counts as labour.",
            right: "Labour includes all physical and mental effort that produces goods or services, paid or unpaid.",
            why: "We usually measure work by wages, so unpaid work seems invisible. But cooking, caring and household farming keep families and the economy running.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Organised or unorganised sector?",
              groups: ["Organised", "Unorganised"],
              items: [
                { text: "Bank clerk with a pension", group: 0, hint: "Regular salary and benefits." },
                { text: "Street vendor", group: 1, hint: "No fixed income or employer." },
                { text: "Teacher in a government school", group: 0, hint: "Registered employer, fixed salary." },
                { text: "Landless agricultural labourer", group: 1, hint: "Daily wages, seasonal work." },
                { text: "Domestic worker", group: 1, hint: "Usually no contract or benefits." },
                { text: "Worker in a registered factory with provident fund", group: 0, hint: "Labour laws apply." },
              ],
              explain: "The **organised sector** gives regular pay, fixed hours and social security. The **unorganised sector** lacks them, and most Indian workers are in it.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "In \"distinguish between organised and unorganised labour\", give at least three paired points with one example each. Students often give only examples; the examiner looks for features first.",
          },
          {
            type: "keypoints",
            items: [
              "Labour is physical or mental effort that produces goods and services, paid or unpaid.",
              "Division of labour increases efficiency and makes people depend on each other.",
              "Women do much unpaid work and face wage discrimination; Article 39(d) calls for equal pay for equal work.",
              "Organised workers have security and benefits; unorganised workers, the majority, largely do not.",
            ],
          },
        ],
        flashcards: [
          { front: "Labour", back: "Physical or mental effort used to produce goods and services." },
          { front: "Division of labour", back: "Splitting work into parts done by different people, which raises efficiency." },
          { front: "Unpaid labour", back: "Work, such as housework and care, that earns no wage." },
          { front: "Wage discrimination", back: "Paying different wages for the same work, for example to women and men." },
          { front: "Unorganised sector", back: "Small, mostly unregistered units with irregular work and little social security." },
          { front: "Article 39(d)", back: "Directive Principle: equal pay for equal work for both men and women." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which worker belongs to the organised sector?",
            options: ["A construction labourer", "A railway employee", "A street vendor", "A domestic worker"],
            answer: 1,
            explain: "Railway employees have regular salaries, fixed hours and benefits.",
          },
          {
            kind: "truefalse",
            q: "Most workers in India are employed in the organised sector.",
            answer: false,
            explain: "Most Indian workers are in the unorganised sector.",
          },
          {
            kind: "fill",
            q: "Equal pay for equal work for men and women is a Directive Principle under Article ___.",
            answer: ["39(d)", "39 (d)", "39d", "39"],
            explain: "Article 39(d) of the Constitution.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are features of the unorganised sector?",
            options: ["Irregular wages", "No job security", "Provident fund and pension", "Little or no social security"],
            answers: [0, 1, 3],
            explain: "Provident fund and pension are features of the organised sector.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Workers who own no land and work on others' fields for wages are called:",
            options: ["Tenants", "Landlords", "Landless agricultural labourers", "Industrial workers"],
            answer: 2,
            explain: "They are among the poorest groups in rural India.",
          },
          {
            kind: "truefalse",
            q: "Division of labour makes members of society depend on each other.",
            answer: true,
            explain: "Each person does one kind of work and relies on others for the rest.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "collective-behaviour-protests",
    title: "Collective Behaviour and Protests",
    icon: "📢",
    description: "Crowds and mobs, and social movements: environmental, farmers', workers' and women's movements.",
    lessons: [
      {
        slug: "collective-behaviour-movements",
        title: "Collective Behaviour and Social Movements",
        summary: "How groups act together, the difference between a crowd and a mob, and major protest movements such as Chipko and Appiko.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🌳",
            caption: "In 1983, villagers near Sirsi hugged trees to stop them being cut. A small act by a group of people became a movement known across India.",
          },
          {
            type: "text",
            md: "**Collective behaviour** means the actions of a large number of people together, usually spontaneous and short-lived, not guided by fixed rules. A sudden rush at a festival, cheering at a cricket match or panic after a rumour are examples.\n\nA **crowd** is a temporary gathering of people in one place with a common focus, such as people watching a procession. A **mob** is an emotional crowd that acts with a common aim, often violently. **Rumours** (unverified stories) can turn a crowd into a mob, so checking facts matters.",
          },
          {
            type: "text",
            md: "A **protest** is a public expression of objection. When protests become organised and continue over time for a shared goal, they form a **social movement**. Movements have leaders, ideas and a plan, and they aim to bring about (or resist) social change.",
          },
          {
            type: "table",
            headers: ["Movement", "Where and when", "What it was about"],
            rows: [
              ["**Chipko movement**", "Himalayan region of present-day Uttarakhand, from 1973", "Villagers, many of them women, hugged trees to stop felling; associated with Chandi Prasad Bhatt and Sunderlal Bahuguna"],
              ["**Appiko movement**", "Salkani village, Sirsi, Uttara Kannada district, Karnataka, 1983", "\"Appiko\" means \"to hug\" in Kannada; protected Western Ghats forests; led by Pandurang Hegde"],
              ["**Narmada Bachao Andolan**", "Narmada valley, from the 1980s", "Against large dams that displaced people; Medha Patkar and Baba Amte"],
              ["**Silent Valley movement**", "Kerala, 1970s–80s", "Saved a rainforest from a hydroelectric project; Silent Valley became a National Park in 1984"],
            ],
          },
          {
            type: "list",
            items: [
              "**Farmers' movements**: in Karnataka, the **Karnataka Rajya Raitha Sangha**, led by Prof. M.D. Nanjundaswamy, fought for fair prices and farmers' rights from 1980.",
              "**Workers' (labour) movement**: trade unions demand fair wages, safe conditions and fixed hours; the All India Trade Union Congress was founded in 1920.",
              "**Women's movement**: struggles against dowry, violence and discrimination, and for equal rights.",
              "**Dalit movement**: struggles for dignity, equality and an end to caste discrimination.",
            ],
          },
          {
            type: "example",
            title: "Crowd, mob or movement?",
            problem: "Classify: (a) people gathered to watch a Dasara procession in Mysuru; (b) a group that, after hearing a rumour, damages a shop; (c) villagers who for years run campaigns, petitions and peaceful protests to save a forest.",
            steps: [
              "(a) A temporary gathering with a common focus, no violent aim: a crowd.",
              "(b) Emotional, acting together with an aim, violent: a mob.",
              "(c) Organised, continuing over time, with a clear goal of change: a social movement.",
            ],
            answer: "(a) crowd, (b) mob, (c) social movement.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The Appiko movement began in which district of Karnataka?",
                options: ["Mysuru", "Uttara Kannada", "Kodagu", "Ballari"],
                answer: 1,
                explain: "It began at Salkani village in Sirsi taluk, Uttara Kannada district, in 1983.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Every protest is a social movement.",
            right: "A single protest is a short event; it becomes a social movement only when it is organised, continues over time and pursues a shared goal of change.",
            why: "Protests are the most visible part of movements, so the two seem the same. But a movement also has leaders, ideas, organisation and continuity.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each movement to its leader or place.",
              pairs: [
                ["Appiko movement", "Pandurang Hegde"],
                ["Narmada Bachao Andolan", "Medha Patkar"],
                ["Karnataka Rajya Raitha Sangha", "M.D. Nanjundaswamy"],
                ["Chipko movement", "Sunderlal Bahuguna"],
              ],
              explain: "Appiko was inspired by Chipko and carried the idea of hugging trees to the Western Ghats of Karnataka.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "For environmental movements, write the place, the year, the leader and the aim. \"Appiko: Salkani, Uttara Kannada, 1983, Pandurang Hegde, protecting Western Ghats forests\" earns full marks; many students confuse Appiko with Chipko.",
          },
          {
            type: "keypoints",
            items: [
              "Collective behaviour is spontaneous group action; a crowd is a temporary gathering, a mob is an emotional and often violent crowd.",
              "Organised, lasting protests for a common goal are social movements.",
              "Environmental: Chipko (1973), Appiko (1983, Karnataka), Narmada Bachao Andolan, Silent Valley.",
              "Farmers', workers', women's and Dalit movements fight for rights and equality.",
            ],
          },
        ],
        flashcards: [
          { front: "Collective behaviour", back: "Spontaneous, short-lived actions of many people together, not guided by fixed rules." },
          { front: "Crowd", back: "A temporary gathering of people in one place with a common focus." },
          { front: "Mob", back: "An emotional crowd acting together with a common aim, often violently." },
          { front: "Social movement", back: "An organised, continuing effort by a group to bring about or resist social change." },
          { front: "Appiko movement", back: "Started in 1983 at Salkani, Sirsi (Uttara Kannada); villagers hugged trees to save forests; led by Pandurang Hegde." },
          { front: "Chipko movement", back: "Started in 1973 in the Himalayan region of present-day Uttarakhand to stop tree felling." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The word \"Appiko\" in Kannada means:",
            options: ["To protest", "To hug", "To plant", "To march"],
            answer: 1,
            explain: "Villagers hugged trees to stop them being cut.",
          },
          {
            kind: "truefalse",
            q: "A mob is usually calm and has no common aim.",
            answer: false,
            explain: "A mob is emotional and acts together with a common aim, often violently.",
          },
          {
            kind: "fill",
            q: "The Chipko movement began in the year ___.",
            answer: ["1973"],
            explain: "It started in the Himalayan region of present-day Uttarakhand.",
          },
          {
            kind: "order",
            q: "Arrange these in chronological order.",
            items: ["Founding of AITUC", "Start of the Chipko movement", "Start of the Appiko movement"],
            explain: "1920, 1973, 1983.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are environmental movements?",
            options: ["Chipko", "Appiko", "Narmada Bachao Andolan", "All India Trade Union Congress"],
            answers: [0, 1, 2],
            explain: "AITUC is a workers' organisation, part of the labour movement.",
          },
          {
            kind: "mcq",
            q: "Which body led farmers' struggles in Karnataka under Prof. M.D. Nanjundaswamy?",
            options: ["Karnataka Rajya Raitha Sangha", "Narmada Bachao Andolan", "AITUC", "Chipko Samiti"],
            answer: 0,
            explain: "The Karnataka Rajya Raitha Sangha fought for farmers' rights.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "social-challenges",
    title: "Social Challenges",
    icon: "🛡️",
    description: "Child labour, child marriage, female foeticide and trafficking, and the laws that fight them.",
    lessons: [
      {
        slug: "child-labour-marriage-foeticide",
        title: "Child Labour, Child Marriage and Female Foeticide",
        summary: "Why these practices harm society, what the Constitution and laws say, and what citizens can do.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🎒",
            caption: "Two 12-year-olds: one goes to school, the other washes dishes at a roadside hotel. One social challenge is making sure every child has the first life.",
          },
          {
            type: "text",
            md: "**Social challenges** are harmful practices that deny people, often children and women, their rights and dignity. They hold back the whole society. Three major ones are **child labour**, **child marriage** and **female foeticide**.",
          },
          {
            type: "table",
            headers: ["Challenge", "Meaning", "Law and protection"],
            rows: [
              ["**Child labour**", "Children made to work in ways that harm their health, education and childhood", "**Article 24**: no child below 14 in factories, mines or hazardous work. Child Labour (Prohibition and Regulation) Act, 1986, amended in 2016 to ban employing children below 14 in all occupations and adolescents (14–18) in hazardous ones"],
              ["**Child marriage**", "Marriage below the legal age", "**Prohibition of Child Marriage Act, 2006**: minimum age 18 for girls and 21 for boys"],
              ["**Female foeticide**", "Killing a female foetus because of a preference for sons", "**PCPNDT Act, 1994**: bans sex-determination tests and sex selection"],
              ["**Human trafficking**", "Buying and selling of people, often for forced labour", "**Article 23**: prohibits trafficking in human beings and forced labour"],
            ],
          },
          {
            type: "text",
            md: "**Causes** include poverty, illiteracy, old customs, the dowry system and preference for sons. **Effects** include loss of education, poor health, early pregnancy and danger to the mother and child, and a falling number of girls compared with boys (an imbalanced **sex ratio**).\n\n**Article 21A** makes free and compulsory education a fundamental right for children aged 6 to 14, which helps keep children in school and out of work.",
          },
          {
            type: "example",
            title: "From problem to action",
            problem: "A 15-year-old girl in your neighbourhood is about to be married. What does the law say, and what can be done?",
            steps: [
              "The legal minimum age of marriage for girls is 18 (Prohibition of Child Marriage Act, 2006), so this is a child marriage.",
              "It harms her education and health and is an offence.",
              "A citizen can inform the Childline helpline (1098), the police or the Child Marriage Prohibition Officer.",
              "Awareness in the family and community helps prevent it in the first place.",
            ],
            answer: "It is illegal; it should be reported to Childline (1098), the police or the officer concerned, along with awareness efforts.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Under the Prohibition of Child Marriage Act, 2006, the minimum age of marriage for boys is:",
                options: ["18 years", "19 years", "21 years", "25 years"],
                answer: 2,
                explain: "It is 21 for boys and 18 for girls.",
              },
            ],
          },
          {
            type: "mistake",
            wrong: "Child labour is fine if the child is helping to feed a poor family.",
            right: "Child labour harms a child's health and education and keeps the family poor in the next generation; the solution is support for the family and schooling for the child.",
            why: "It feels kind to let a child earn. But a child who misses school earns less as an adult, so poverty continues. Laws, free education and welfare schemes aim to break this cycle.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each challenge to the law or provision against it.",
              pairs: [
                ["Child marriage", "Prohibition of Child Marriage Act, 2006"],
                ["Female foeticide", "PCPNDT Act, 1994"],
                ["Child labour in hazardous work", "Article 24"],
                ["Human trafficking", "Article 23"],
                ["Children out of school", "Article 21A"],
              ],
              explain: "The Constitution sets the principle (Articles 21A, 23, 24) and laws such as the 2006 and 1994 Acts put it into practice.",
            },
          },
          {
            type: "callout",
            tone: "exam",
            title: "SSLC tip",
            md: "For a \"measures to eradicate\" question, mix three kinds of points: legal (name the Act), educational (awareness, free schooling) and economic (support to poor families). Answers with only legal points rarely get full marks.",
          },
          {
            type: "keypoints",
            items: [
              "Child labour: Article 24; the 1986 Act (amended 2016) bans employing children below 14.",
              "Child marriage: minimum age 18 for girls and 21 for boys (2006 Act).",
              "Female foeticide: the PCPNDT Act, 1994 bans sex-selection tests.",
              "Article 23 bans trafficking; Article 21A guarantees education for ages 6–14.",
            ],
          },
        ],
        flashcards: [
          { front: "Child labour", back: "Work that deprives children of childhood, education and health." },
          { front: "Article 24", back: "No child below 14 shall be employed in factories, mines or hazardous work." },
          { front: "Legal age of marriage", back: "18 for girls and 21 for boys (Prohibition of Child Marriage Act, 2006)." },
          { front: "Female foeticide", back: "Killing a female foetus because of son preference; sex-selection tests are banned by the PCPNDT Act, 1994." },
          { front: "Article 23", back: "Prohibits trafficking in human beings and forced labour." },
          { front: "Childline", back: "The helpline 1098 for children in need of care and protection." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which Article bans employing children below 14 in factories and mines?",
            options: ["Article 17", "Article 21A", "Article 23", "Article 24"],
            answer: 3,
            explain: "Article 24. Article 23 bans trafficking; 21A is the right to education; 17 abolishes untouchability.",
            difficulty: 2,
            hint: "It comes right after the Article on trafficking.",
          },
          {
            kind: "numeric",
            q: "What is the minimum legal age of marriage for girls in India?",
            answer: 18,
            unit: "years",
            explain: "Under the Prohibition of Child Marriage Act, 2006.",
          },
          {
            kind: "truefalse",
            q: "Sex-determination tests to choose the sex of a child are banned in India.",
            answer: true,
            explain: "The PCPNDT Act, 1994 bans them.",
          },
          {
            kind: "fill",
            q: "Killing a female foetus because of a preference for sons is called female ___.",
            answer: ["foeticide", "feticide"],
            explain: "It leads to an imbalanced sex ratio.",
          },
          {
            kind: "multi",
            q: "Which are causes of child labour?",
            options: ["Poverty", "Illiteracy of parents", "Free and compulsory education", "Lack of awareness"],
            answers: [0, 1, 3],
            explain: "Free and compulsory education is a remedy, not a cause.",
            difficulty: 2,
            hint: "One option is a solution.",
          },
          {
            kind: "mcq",
            q: "The Child Labour Act was amended in 2016 to ban the employment of children below 14 in:",
            options: ["Only mines", "Only factories", "All occupations", "Only hotels"],
            answer: 2,
            explain: "The 2016 amendment extended the ban to all occupations, with narrow exceptions such as helping in a family enterprise after school.",
            difficulty: 3,
          },
        ],
      },
    ],
  },
];

export const topics: Topic[] = [...cbse, ...icse, ...kaPolitics, ...kaSociology];

/** Exact syllabus chapter title → topic slug. */
export const links: Record<string, string> = {
  // CBSE: Democratic Politics II
  "Power Sharing": "power-sharing",
  "Federalism": "federalism",
  "Gender, Religion and Caste": "gender-religion-caste",
  "Political Parties": "political-parties",
  "Outcomes of Democracy": "outcomes-of-democracy",
  // ICSE: Civics
  "The Union Parliament": "union-parliament",
  "The Union Executive: President and Vice-President": "president-vice-president",
  "The Union Executive: Prime Minister and Council of Ministers": "prime-minister-council-of-ministers",
  "The Judiciary: Supreme Court": "supreme-court",
  "High Courts and Subordinate Courts": "high-courts-subordinate-courts",
  // Karnataka SSLC: Political Science
  "Problems of India and their Solutions": "problems-of-india-solutions",
  "India's Foreign Policy": "indias-foreign-policy",
  "India's Relationship with Other Countries": "india-relations-other-countries",
  "Global Problems and India's Role": "global-problems-indias-role",
  // Karnataka SSLC: Sociology
  "Social Stratification": "social-stratification",
  "Labour": "labour",
  "Collective Behaviour and Protests": "collective-behaviour-protests",
  "Social Challenges": "social-challenges",
};
