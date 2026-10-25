import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

/* ------------------------------------------------------------------ */
/* CBSE History: Forest Society and Colonialism                        */
/* ------------------------------------------------------------------ */
const forestSociety: Topic = {
  slug: "c9-forest-society-colonialism",
  title: "Forest Society and Colonialism",
  icon: "🌳",
  description: "How colonial rule cut down forests, made new forest laws, changed forest people's lives and led to revolts in Bastar and Java.",
  lessons: [
    {
      slug: "c9-why-forests-disappeared",
      title: "Why Forests Disappeared: Colonial Forestry",
      summary: "Deforestation under British rule: farmland, railway sleepers, ships and plantations, and the rise of scientific forestry and the forest acts.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🚂",
          caption: "Every kilometre of a 19th-century railway line rested on hundreds of wooden sleepers. Where did all that wood come from?",
        },
        {
          type: "text",
          md: "Forests give us far more than timber. Forest people collect fruit, roots, leaves for plates, bamboo, gum, honey, medicines and fodder for cattle. For them a forest is a home, a shop and a pharmacy.\n\nThe loss of forests is called **deforestation**. It did not begin with the British, but it became much faster under colonial rule. In this chapter you will see why.",
        },
        {
          type: "table",
          headers: ["Reason", "What happened"],
          rows: [
            ["**Land for cultivation**", "The British saw forests as unproductive land. They pushed the growing of commercial crops such as jute, sugar, wheat and cotton to feed Europe's people and factories. Forests were cleared to make farms, which also meant more land revenue."],
            ["**Ship building**", "By the early 19th century, oak forests in England were running out. The Royal Navy needed strong timber, so search parties were sent to India and large amounts of timber were shipped out."],
            ["**Railways**", "From the 1850s railways spread across India. Engines burnt wood as fuel and each line needed thousands of wooden **sleepers** (the cross-pieces that hold the rails). Forests around the tracks vanished fast."],
            ["**Plantations**", "Large areas of natural forest were cleared for **tea, coffee and rubber plantations** to meet Europe's demand. The government gave this land cheaply to European planters."],
          ],
        },
        {
          type: "example",
          title: "Reading a cause-and-effect chain",
          problem: "Explain how the spread of railways led to deforestation in India. (3 marks)",
          steps: [
            "State the need: railways were essential for colonial trade and for moving troops.",
            "State the demand for wood: engines ran on firewood and every mile of track needed many wooden sleepers.",
            "State the result: the government gave contracts to people to supply wood, and they cut trees freely, so forests around the tracks quickly disappeared.",
          ],
          answer: "Railways needed wood as fuel and as sleepers; contractors cut trees without limit to supply them, so forests near railway lines were cleared rapidly.",
        },
        {
          type: "heading",
          text: "The rise of commercial forestry",
        },
        {
          type: "text",
          md: "The British worried that careless cutting would leave no timber for the future. They called in a German expert, **Dietrich Brandis**, who became the first **Inspector General of Forests** in India.\n\nBrandis said forests must be managed by a trained service and protected by law. So the **Indian Forest Service** was set up in **1864**, and the **Indian Forest Act** was passed in **1865**. The **Imperial Forest Research Institute** was set up at **Dehradun** in **1906**.",
        },
        {
          type: "text",
          md: "The system taught there was called **scientific forestry**. Natural forests with many kinds of trees were cut down. In their place, one type of tree was planted in straight rows. This is a **plantation**. Officials measured the area, counted trees, and planned how much to cut each year and what to replant.",
        },
        {
          type: "table",
          headers: ["Forest Act of 1878 made three kinds of forest", "What villagers could do"],
          rows: [
            ["**Reserved forests**", "The best forests. Villagers could take nothing from them, not even for their own use."],
            ["**Protected forests**", "Some use was allowed, but under many rules."],
            ["**Village forests**", "Villagers could take wood and other produce from these."],
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Timeline of the Forest Act",
          md: "The Act of **1865** was amended twice: in **1878** and again in **1927**. The 1878 amendment created the three categories above.",
        },
        {
          type: "mistake",
          wrong: "Scientific forestry protected forests, so it was good for the environment and for villagers.",
          right: "Scientific forestry replaced mixed natural forests with single-species plantations grown for timber, and it took away villagers' rights to use the forest.",
          why: "The word \"scientific\" sounds good. But the aim was to supply the colonial state with timber. Many plants that villagers needed for fuel, fodder and food were removed, and their daily use of the forest was made a crime.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who was the first Inspector General of Forests in India?",
              options: ["Dietrich Brandis", "Lord Dalhousie", "Gunda Dhur", "Surontiko Samin"],
              answer: 0,
              explain: "Dietrich Brandis, a German expert, set up the forest service and laws. Gunda Dhur led the Bastar revolt, and Samin led a movement in Java.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these forest events in time order.",
            items: [
              "Indian Forest Service set up (1864)",
              "Indian Forest Act passed (1865)",
              "Act amended: reserved, protected and village forests (1878)",
              "Imperial Forest Research Institute at Dehradun (1906)",
              "Act amended again (1927)",
            ],
            explain: "The service came first (1864), then the law (1865). The law was tightened in 1878, the research institute followed in 1906, and the last amendment came in 1927.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In a \"causes of deforestation\" answer, write each cause as a separate point with one line of explanation. Students often write \"railways\" alone and lose the mark: say *why* railways needed wood (fuel and sleepers).",
        },
        {
          type: "keypoints",
          items: [
            "Colonial deforestation had four big causes: cultivation of commercial crops, ship building, railways and plantations.",
            "Dietrich Brandis was the first Inspector General of Forests; the Indian Forest Service began in 1864 and the Forest Act in 1865.",
            "The 1878 Act divided forests into reserved, protected and village forests; it was amended again in 1927.",
            "Scientific forestry replaced natural mixed forests with single-species plantations for timber.",
          ],
        },
      ],
      flashcards: [
        { front: "Deforestation", back: "The disappearance or clearing of forests." },
        { front: "Sleepers", back: "Wooden planks laid across railway tracks to hold the rails in place." },
        { front: "Dietrich Brandis", back: "German expert; first Inspector General of Forests in India." },
        { front: "Scientific forestry", back: "A system where natural forests are cut and replaced by one type of tree planted in rows, managed by forest officials." },
        { front: "Three categories under the 1878 Forest Act", back: "Reserved, protected and village forests." },
        { front: "Imperial Forest Research Institute", back: "Set up at Dehradun in 1906 to teach scientific forestry." },
      ],
      quiz: [
        {
          kind: "multi",
          q: "Which of these were causes of deforestation in colonial India? (Choose all.)",
          options: ["Railway expansion", "Tea and coffee plantations", "Demand for timber for ships", "Expansion of cultivation for commercial crops"],
          answers: [0, 1, 2, 3],
          explain: "All four were major causes named in the chapter.",
        },
        {
          kind: "mcq",
          q: "In which forests could villagers take NOTHING, not even for their own use?",
          options: ["Village forests", "Protected forests", "Reserved forests", "Sacred groves"],
          answer: 2,
          explain: "Reserved forests were the best timber forests, closed to all villager use.",
        },
        {
          kind: "fill",
          q: "The Indian Forest Act was first passed in the year ___.",
          answer: ["1865"],
          explain: "1864 was the Forest Service; 1865 was the Act.",
          hint: "It came one year after the Forest Service.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Under scientific forestry, natural forests with many types of trees were replaced by rows of a single type of tree.",
          answer: true,
          explain: "These single-species rows are called plantations.",
        },
        {
          kind: "mcq",
          q: "Why did the British look to Indian forests for ship timber in the early 19th century?",
          options: ["Indian teak was cheaper than iron", "Oak forests in England were disappearing", "Ships in India were made only of bamboo", "The Royal Navy had moved to India"],
          answer: 1,
          explain: "With England's oak forests running out, the Royal Navy needed timber from the colonies.",
        },
        {
          kind: "order",
          q: "Arrange in order: steps of scientific forestry.",
          items: ["Natural mixed forest is cut down", "One type of tree is planted in straight rows", "Officials plan how much to cut each year", "Trees are cut and the area is replanted"],
          explain: "The natural forest goes first, a plantation replaces it, and then cutting and replanting are planned year by year.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Why were railways a cause of forest loss?",
          options: ["Trains set forests on fire", "They needed wood for fuel and for sleepers", "Railway workers lived in forests", "Railways carried forest people away"],
          answer: 1,
          explain: "Engines burnt wood and each line needed many wooden sleepers.",
        },
      ],
    },
    {
      slug: "c9-forest-people-and-revolts",
      title: "Forest People, Bastar and Java",
      summary: "How the new laws hit shifting cultivators, hunters and traders, the Bastar revolt of 1910, and forest changes in Dutch-ruled Java.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Picture a village at the edge of a forest. Yesterday people took dry wood, grazed cattle and picked fruit there. Today a forest guard says all of this is **stealing**. That is what the forest laws did to millions of people.",
        },
        {
          type: "list",
          items: [
            "**Shifting cultivators.** In **shifting cultivation** (also called **swidden agriculture**), parts of a forest are cut and burnt in turn. Seeds are sown in the ash after the first rains, and the plot is left to grow back after a year or two. The British banned it: it made timber planning hard and could cause forest fires. Many communities were forced to move.",
            "**Hunters.** Forest people who hunted for food were stopped, but hunting of big animals as a **sport** by British officers and Indian rulers was encouraged. Tigers and wolves were called dangerous and rewards were given for killing them.",
            "**Nomads and traders.** Grazing was restricted. Trade in forest products was handed to big European companies, and some pastoral and forest communities were labelled **criminal tribes**.",
            "**Plantation workers.** Many forest people were recruited, often against their will, to work on tea plantations in Assam for low wages.",
          ],
        },
        {
          type: "table",
          headers: ["Region", "Local names for shifting cultivation"],
          rows: [
            ["South-east Asia", "lading"],
            ["Central America", "milpa"],
            ["Africa", "chitemene or tavy"],
            ["Sri Lanka", "chena"],
            ["India", "dhya, penda, bewar, nevad, jhum, podu, khandad, kumri"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "The colonial government banned all hunting, including hunting by British officers.",
              answer: false,
              explain: "Only forest people's hunting was banned. Hunting big game as a sport was encouraged and even rewarded.",
            },
          ],
        },
        {
          type: "heading",
          text: "The Bastar revolt of 1910",
        },
        {
          type: "text",
          md: "**Bastar** is in the south of today's **Chhattisgarh**. Its people, such as the **Maria and Muria Gonds, Dhurwas, Bhatras and Halbas**, believed each village's land was given by the Earth and they made offerings to the forest spirits.\n\nIn **1905** the colonial government proposed to **reserve two-thirds of the forest**, stop shifting cultivation and stop hunting and the collection of forest produce. Villages were allowed to stay inside reserved forests only if they worked free for the forest department. People also suffered from famines and high land rents.",
        },
        {
          type: "text",
          md: "The **Dhurwas** of the **Kanger forest** acted first. In **1910**, branches of mango, a lump of earth, chillies and arrows were passed from village to village as a call to revolt. **Gunda Dhur**, from the village of **Nethanar**, is remembered as a key leader. Markets were looted and the houses of officials and traders were burnt. The British sent troops and crushed the revolt within about three months, but **work on reservation was suspended** and the reserved area was reduced to roughly half of what was planned before 1910.",
        },
        {
          type: "example",
          title: "Answering a \"why did people revolt\" question",
          problem: "Why did the people of Bastar rise in revolt in 1910?",
          steps: [
            "Name the trigger: the 1905 plan to reserve two-thirds of the forest.",
            "Name what they lost: shifting cultivation, hunting and collection of forest produce were stopped.",
            "Add the hardship: forced free labour for the forest department, high rents and famine years.",
            "Close with the result: the Dhurwas of Kanger forest began the revolt, led by Gunda Dhur.",
          ],
          answer: "Forest reservation, bans on their traditional livelihoods, forced labour and high rents drove the Bastar people to revolt in 1910.",
        },
        {
          type: "text",
          md: "**Java**, now in **Indonesia**, was ruled by the **Dutch**. Like the British, they made forest laws in the 19th century, banned shifting cultivation and wanted timber for ships and railway sleepers.\n\nThe **Kalangs** of Java were skilled forest cutters. The Dutch also used a system called **blandongdiensten**: some villages were excused from rent if they gave free labour and buffaloes to cut and carry timber.\n\nAround **1890**, **Surontiko Samin** of **Randublatung** village began to question state ownership of forests. He argued that the state had not created the wind, water, earth and wood, so it could not own them. His followers, the **Saminists**, protested by lying down on their land when the Dutch came to survey it, and by refusing to pay taxes or do forced labour.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Board note",
          md: "Some rationalised NCERT printings shorten the Java section. Check your copy. If it is there, learn Samin and blandongdiensten; if it is not, focus on India and Bastar.",
        },
        {
          type: "mistake",
          wrong: "The British banned shifting cultivation because it was always bad for the soil.",
          right: "The British banned it mainly because burning and moving plots made it hard to grow timber for railways and to plan forest use; it also made it hard to collect taxes.",
          why: "Shifting cultivation leaves land to recover, so the soil gets time to regain fertility. The ban served the colonial government's timber and revenue needs more than the environment.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each name to what it stands for.",
            pairs: [
              ["Gunda Dhur", "Leader of the Bastar revolt"],
              ["Kanger forest", "Where the Dhurwas began the 1910 revolt"],
              ["Surontiko Samin", "Questioned state ownership of Java's forests"],
              ["Blandongdiensten", "Free labour and buffaloes in return for no rent"],
              ["Jhum", "An Indian name for shifting cultivation"],
            ],
            explain: "Two stories run side by side: Bastar in India (Gunda Dhur, Kanger forest) and Java under the Dutch (Samin, blandongdiensten).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "A frequent error is to write \"Bastar is in Madhya Pradesh\". Today Bastar is in **Chhattisgarh**. Also remember the year of the revolt: **1910** (the reservation plan was **1905**).",
        },
        {
          type: "keypoints",
          items: [
            "Forest laws hurt shifting cultivators, hunters, nomads and traders; many were pushed into plantation work.",
            "Shifting (swidden) cultivation has many local names, e.g. jhum and podu in India, milpa in Central America, chena in Sri Lanka.",
            "The 1905 plan to reserve two-thirds of Bastar's forest led to the 1910 revolt, begun by the Dhurwas of Kanger forest; Gunda Dhur was a leader.",
            "In Dutch Java, the Kalangs were forest cutters; Surontiko Samin's movement questioned state ownership of forests.",
          ],
        },
      ],
      flashcards: [
        { front: "Shifting (swidden) cultivation", back: "Cutting and burning a forest plot, sowing in the ash, then moving on so the plot regrows." },
        { front: "Bastar today is in which state?", back: "Chhattisgarh." },
        { front: "Year of the Bastar revolt", back: "1910 (the reservation plan came in 1905)." },
        { front: "Gunda Dhur", back: "From Nethanar village; a key leader of the 1910 Bastar revolt." },
        { front: "Saminists", back: "Followers of Surontiko Samin in Java, who said the state could not own the forest." },
        { front: "Blandongdiensten", back: "Dutch system in Java: villages excused from rent in return for free labour and buffaloes for timber work." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which community began the Bastar revolt in the Kanger forest?",
          options: ["Kalangs", "Dhurwas", "Maasai", "Saminists"],
          answer: 1,
          explain: "The Dhurwas of the Kanger forest acted first in 1910. Kalangs and Saminists were in Java; the Maasai are in East Africa.",
        },
        {
          kind: "fill",
          q: "In 1905 the colonial government proposed to reserve ___ of the forests of Bastar.",
          answer: ["two-thirds", "two thirds", "2/3"],
          explain: "The plan was to reserve two-thirds of the forest.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Jhum and podu are Indian names for shifting cultivation.",
          answer: true,
          explain: "Other Indian names include dhya, penda, bewar, nevad, khandad and kumri.",
        },
        {
          kind: "mcq",
          q: "Java was ruled by which colonial power?",
          options: ["The British", "The French", "The Dutch", "The Portuguese"],
          answer: 2,
          explain: "Java (Indonesia) was a Dutch colony.",
        },
        {
          kind: "multi",
          q: "Which of these happened to forest people under the colonial forest laws? (Choose all.)",
          options: ["Shifting cultivation was banned", "Collecting firewood from reserved forests became illegal", "Sport hunting by officials was banned", "Some communities were labelled criminal tribes"],
          answers: [0, 1, 3],
          explain: "Sport hunting was encouraged, not banned. The other three were real effects of the laws.",
          hint: "Think about who was allowed to hunt.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put the Bastar events in order.",
          items: ["Plan to reserve two-thirds of the forest (1905)", "Mango branches, earth, chillies and arrows passed between villages", "Markets looted and officials' houses burnt (1910)", "British troops crush the revolt", "Work on reservation suspended"],
          explain: "Plan, call to revolt, revolt, repression, and finally a partial win: reservation was suspended and reduced.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "What was the main argument of Surontiko Samin?",
          options: ["Forests should be sold to the Dutch", "The state did not create wind, water, earth and wood, so it could not own them", "Shifting cultivation should be banned", "Villagers should work free for the forest department"],
          answer: 1,
          explain: "Samin questioned the state's claim to own the forest.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CBSE History: Pastoralists in the Modern World                      */
/* ------------------------------------------------------------------ */
const pastoralists: Topic = {
  slug: "c9-pastoralists-modern-world",
  title: "Pastoralists in the Modern World",
  icon: "🐑",
  description: "Nomadic herders of the mountains, plateaus and deserts of India, how colonial laws changed their lives, and the Maasai of East Africa.",
  lessons: [
    {
      slug: "c9-pastoral-nomads-of-india",
      title: "Pastoral Nomads and Their Movements",
      summary: "Who pastoralists are, and how the Gujjar Bakarwals, Gaddis, Dhangars, Gollas, Kurumas, Kurubas, Banjaras and Raikas move with the seasons.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🏔️",
          caption: "Every spring, long lines of sheep and goats climb from the low hills of Jammu towards cool mountain meadows.",
        },
        {
          type: "text",
          md: "A **pastoralist** is a person whose main work is rearing animals such as sheep, goats, cattle or camels. **Nomads** are people who do not live in one place but move from area to area to earn a living. **Pastoral nomads** move with their herds in search of grass and water.\n\nTheir movement is not random. It follows the seasons, and it is carefully planned so that no pasture is overgrazed.",
        },
        {
          type: "heading",
          text: "In the mountains",
        },
        {
          type: "table",
          headers: ["Community", "Where", "Winter", "Summer"],
          rows: [
            ["**Gujjar Bakarwals** (goat and sheep herders)", "Jammu and Kashmir", "Low hills of the **Siwalik** range, dry scrub forests", "High meadows across the **Pir Panjal** passes into the Kashmir valley"],
            ["**Gaddi** shepherds", "Himachal Pradesh", "Low hills of the Siwaliks", "**Lahul and Spiti**, and higher meadows"],
            ["**Gujjar** cattle herders", "Garhwal and Kumaon", "Dry forests of the **bhabar**", "High meadows called **bugyals**"],
          ],
        },
        {
          type: "text",
          md: "A group of Bakarwal households moving together is called a **kafila**. Other mountain herders with a similar cycle include the **Bhotiyas, Sherpas and Kinnauris**. This yearly move between summer and winter pastures is called **seasonal movement**, and it lets each pasture recover before the herds return.",
        },
        {
          type: "heading",
          text: "On the plateaus, plains and deserts",
        },
        {
          type: "list",
          items: [
            "**Dhangars** of **Maharashtra** stay on the dry central plateau during the monsoon. After the monsoon they move west to the **Konkan**, where **Kokani** peasants welcome them: the flocks manure the fields after the kharif harvest and the Dhangars get rice in return.",
            "**Gollas** (cattle herders) and **Kurumas and Kurubas** (sheep and goat herders) live in **Karnataka and Andhra Pradesh**. They move to the coast in the dry season and return to the dry plateau when the rains come. Many also weave blankets or trade.",
            "**Banjaras** travel widely across Uttar Pradesh, Punjab, Rajasthan, Madhya Pradesh and Maharashtra. They sell plough cattle and other goods to villagers in return for grain and fodder.",
            "**Raikas** of the deserts of **Rajasthan** combine farming with herding. In the monsoon they stay in their home villages; when the pastures dry up they move. One group, the **Maru (desert) Raikas**, herds camels; others rear sheep and goats.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Where do the Gaddi shepherds spend the summer?",
              options: ["The Konkan coast", "Lahul and Spiti", "The Siwalik hills", "The bhabar forests"],
              answer: 1,
              explain: "Gaddis winter in the Siwaliks and move up to Lahul and Spiti in summer.",
            },
          ],
        },
        {
          type: "example",
          title: "Explaining why nomads move",
          problem: "Why do the Gujjar Bakarwals move from the Siwalik hills to the Kashmir valley each year?",
          steps: [
            "Winter: the high mountains are covered in snow, so the herds stay in the low Siwalik hills where there is scrub to graze.",
            "Spring: by April the low-hill pastures are used up and the snow in the mountains starts to melt.",
            "Summer: the high meadows turn green with fresh grass, so the kafila crosses the Pir Panjal passes into the valley.",
            "Autumn: snow returns in September, so they come back down.",
          ],
          answer: "They follow the grass with the seasons: low hills in winter, high meadows in summer. This also gives each pasture time to recover.",
        },
        {
          type: "mistake",
          wrong: "Nomads wander aimlessly because they have no home.",
          right: "Pastoral nomads follow fixed, well-planned seasonal routes and often have links with farmers along the way.",
          why: "The word \"nomad\" sounds like \"wanderer\". In fact their routes are decided by the seasons, by rainfall and by deals with farmers, as with the Dhangars and the Kokani peasants.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each community to its region.",
            pairs: [
              ["Gujjar Bakarwals", "Jammu and Kashmir"],
              ["Gaddis", "Himachal Pradesh"],
              ["Dhangars", "Maharashtra"],
              ["Kurumas and Kurubas", "Karnataka and Andhra Pradesh"],
              ["Raikas", "Rajasthan"],
            ],
            explain: "Mountain herders are in the north (J&K, Himachal); the Dhangars, Kurumas and Kurubas are on the Deccan plateau; the Raikas are in the Thar desert.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn the **local words**: kafila (Bakarwal group), bugyal (high meadow in Garhwal), bhabar (dry forest below the Garhwal–Kumaon hills). One-mark questions often ask for them, and spelling matters.",
        },
        {
          type: "keypoints",
          items: [
            "Pastoral nomads move with their herds in a planned seasonal cycle.",
            "Mountain herders: Gujjar Bakarwals (J&K), Gaddis (Himachal), Gujjars of Garhwal and Kumaon (bugyals).",
            "Plateau and plains: Dhangars (Maharashtra), Gollas, Kurumas and Kurubas (Karnataka, Andhra), Banjaras.",
            "Desert: Raikas of Rajasthan; the Maru Raikas herd camels.",
            "Seasonal movement lets pastures recover and links herders with farmers.",
          ],
        },
      ],
      flashcards: [
        { front: "Pastoralist", back: "A person whose main occupation is rearing animals such as sheep, goats, cattle or camels." },
        { front: "Kafila", back: "A group of Gujjar Bakarwal households travelling together." },
        { front: "Bugyal", back: "A vast high-altitude meadow in the Garhwal hills, used for summer grazing." },
        { front: "Bhabar", back: "Dry forested area below the foothills of Garhwal and Kumaon." },
        { front: "Dhangars and Kokani peasants", back: "Dhangar flocks manure Konkan fields after the kharif harvest; the Dhangars get rice in return." },
        { front: "Maru Raikas", back: "Desert Raikas of Rajasthan who herd camels." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Bugyals are found in:",
          options: ["the Thar desert", "the high mountains of eastern Garhwal", "the Konkan coast", "the Deccan plateau"],
          answer: 1,
          explain: "Bugyals are high meadows above about 12,000 feet in Garhwal, used by Gujjar cattle herders in summer.",
        },
        {
          kind: "fill",
          q: "A group of Gujjar Bakarwal households moving together is called a ___.",
          answer: ["kafila"],
          explain: "Several households travel together as a kafila.",
        },
        {
          kind: "truefalse",
          q: "The Dhangars stay on the central plateau of Maharashtra during the monsoon.",
          answer: true,
          explain: "The plateau gets little rain, so it has enough grass in the monsoon; afterwards they move to the Konkan.",
        },
        {
          kind: "mcq",
          q: "Which community combines herding with farming in the Rajasthan desert?",
          options: ["Gaddis", "Raikas", "Bakarwals", "Bhotiyas"],
          answer: 1,
          explain: "The Raikas farm in the monsoon and move with their herds when pastures dry up.",
        },
        {
          kind: "multi",
          q: "Which of these are mountain pastoral communities? (Choose all.)",
          options: ["Bhotiyas", "Sherpas", "Kinnauris", "Dhangars"],
          answers: [0, 1, 2],
          explain: "The Dhangars are plateau herders of Maharashtra.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put the Gujjar Bakarwal year in order, starting in winter.",
          items: ["Winter in the low Siwalik hills", "Start the climb in late April", "Cross the Pir Panjal passes", "Summer in the high meadows of Kashmir", "Return down in September"],
          explain: "Low hills in winter, a spring climb over the passes, summer in the valley meadows, and back in autumn.",
          difficulty: 2,
          hint: "They go up as the snow melts.",
        },
      ],
    },
    {
      slug: "c9-colonial-rule-and-pastoral-life",
      title: "Colonial Rule and Pastoral Life",
      summary: "Waste land rules, forest acts, the Criminal Tribes Act and grazing tax; how herders coped; and the Maasai of East Africa.",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "Imagine your family has used the same grazing route for 200 years. Then a new rule fences off half of it, a second rule taxes every animal, and a third rule calls your whole community criminals. This is what happened to many pastoralists under colonial rule.",
        },
        {
          type: "table",
          headers: ["Change", "What it did", "Effect on herders"],
          rows: [
            ["**Waste Land Rules** (from the mid-19th century)", "Uncultivated land was seen as 'waste'. It was taken over and given to chosen people to farm.", "Most of this land was actually grazing land. Pastures shrank."],
            ["**Forest Acts**", "Some forests were 'reserved' (no entry); in 'protected' forests grazing needed a permit for fixed times.", "Herders lost forests that gave fodder; their movement was tightly controlled."],
            ["**Criminal Tribes Act, 1871**", "Many communities of craftsmen, traders and pastoralists were labelled 'criminal by nature and birth'.", "They had to live in notified village settlements and could not move without a permit; the police watched them."],
            ["**Grazing tax** (from the mid-19th century)", "A tax on every animal grazed on the pastures.", "The tax rate rose quickly; herders had to show a pass to enter a grazing tract."],
          ],
        },
        {
          type: "text",
          md: "Why did the British do this? They wanted all land to produce **revenue** and crops like cotton, jute, wheat and indigo. They also distrusted people who moved around, since mobile people were hard to count, tax and control.",
        },
        {
          type: "mistake",
          wrong: "The colonial 'waste lands' were empty land that nobody used.",
          right: "Most so-called waste land was grazing land used every year by pastoralists.",
          why: "To British officials, land that was not farmed did not earn revenue, so they called it waste. For herders it was their pasture, so taking it destroyed their livelihood.",
        },
        {
          type: "heading",
          text: "How pastoralists coped",
        },
        {
          type: "list",
          items: [
            "They **reduced** the number of animals in their herds.",
            "They found **new pastures**. After **1947**, the camel and sheep herding Raikas could no longer go into **Sindh** (now in Pakistan), so they moved to **Haryana**, where animals graze on harvested fields and manure them.",
            "Some richer herders **bought land** and settled as farmers or traders.",
            "Poorer herders borrowed money, lost their animals and became labourers.",
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The Criminal Tribes Act was passed in:",
              options: ["1857", "1865", "1871", "1947"],
              answer: 2,
              explain: "It was passed in 1871. (1865 was the first Forest Act.)",
            },
          ],
        },
        {
          type: "heading",
          text: "Pastoralism in Africa: the Maasai",
        },
        {
          type: "text",
          md: "Over half the world's pastoral population lives in **Africa**. The **Maasai** live mainly in **Kenya and Tanzania**. Their name comes from *Maa*, and *Maasai* means \"my people\".\n\nIn **1885**, European powers drew a border that cut **Maasailand** in half between British Kenya and German Tanganyika. Over time the Maasai lost about **60 per cent** of their pre-colonial land. The best grazing land was given to white settlers, turned into farms, or made into **game reserves** such as the **Maasai Mara** and **Samburu** in Kenya and the **Serengeti National Park** in Tanzania, where herders could not enter.",
        },
        {
          type: "text",
          md: "Colonial rule also changed Maasai society. The British appointed **chiefs** for the Maasai sub-groups. Many chiefs had a steady income, bought land and got rich, while poorer herders became labourers. The young warriors, called **murran**, could no longer raid or defend their herds as before, so their old role faded.",
        },
        {
          type: "example",
          title: "Comparing two cases",
          problem: "Give one way in which the experience of the Maasai was similar to that of Indian pastoralists under colonial rule.",
          steps: [
            "Pick one colonial policy that appears in both stories: loss of grazing land.",
            "Indian case: waste land rules and forest acts took pastures away.",
            "Maasai case: border-drawing, white settlement and game reserves took about 60% of their land.",
            "Link them: in both places, herders lost pastures and their movement was restricted.",
          ],
          answer: "In both India and East Africa, colonial rulers took grazing land (for farms, forests or reserves) and restricted herders' movement.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Did pastoralism die out under colonial rule?",
            emoji: "🐪",
            options: ["Yes, all pastoralists became farmers", "No, they adapted: new routes, smaller herds, new work"],
            answer: 1,
            trap: 0,
            explain: "Pastoralists did not simply vanish. They changed routes (like the Raikas moving to Haryana), cut their herds, mixed herding with farming or trade, and still demand rights over pastures today.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For \"how did colonial rule affect pastoralists\", write the **four laws** as separate points and add one effect for each. Many students describe only the forest acts and lose marks.",
        },
        {
          type: "keypoints",
          items: [
            "Waste Land Rules, Forest Acts, the Criminal Tribes Act (1871) and grazing tax all hit pastoralists.",
            "Herders coped by cutting herds, finding new pastures (Raikas to Haryana after 1947), settling or becoming labourers.",
            "The Maasai of Kenya and Tanzania lost about 60% of their land; Maasailand was split by the 1885 border.",
            "Game reserves such as Maasai Mara and Serengeti were closed to herders.",
          ],
        },
      ],
      flashcards: [
        { front: "Waste Land Rules", back: "Colonial rules that took 'uncultivated' land, mostly pastures, and gave it to chosen people to farm." },
        { front: "Criminal Tribes Act, 1871", back: "Labelled many trader, craft and pastoral communities 'criminal', forcing them to live in fixed settlements." },
        { front: "Grazing tax", back: "Tax paid on each animal grazed; herders needed a pass to enter a grazing tract." },
        { front: "Maasai", back: "Pastoralists of Kenya and Tanzania; the name means 'my people'." },
        { front: "Murran", back: "Young Maasai warriors who once defended herds and led raids." },
        { front: "Where did the Raikas go after 1947?", back: "To Haryana, since they could no longer graze in Sindh." },
      ],
      quiz: [
        {
          kind: "multi",
          q: "Which colonial measures hurt pastoralists in India? (Choose all.)",
          options: ["Waste Land Rules", "Grazing tax", "Criminal Tribes Act", "Forest Acts"],
          answers: [0, 1, 2, 3],
          explain: "All four reduced pastures, raised costs or restricted movement.",
        },
        {
          kind: "mcq",
          q: "What happened to the 'waste land' taken over by the colonial state?",
          options: ["It was left empty", "It was given to chosen people to cultivate", "It became railway land", "It was returned to pastoralists"],
          answer: 1,
          explain: "Waste land was handed out to be farmed so it would pay land revenue.",
        },
        {
          kind: "truefalse",
          q: "The Serengeti National Park is in Kenya.",
          answer: false,
          explain: "The Serengeti is in Tanzania. Maasai Mara and Samburu are in Kenya.",
          difficulty: 2,
          hint: "Two countries share Maasailand.",
        },
        {
          kind: "fill",
          q: "Under colonial rule the Maasai lost about ___ per cent of their pre-colonial land.",
          answer: ["60", "sixty"],
          explain: "About 60 per cent of their land was taken.",
        },
        {
          kind: "mcq",
          q: "Why did the British distrust nomadic people?",
          options: ["They were too rich", "Mobile people were hard to count, tax and control", "They refused to keep animals", "They lived only in cities"],
          answer: 1,
          explain: "Colonial officials wanted settled people who could be identified, taxed and controlled.",
        },
        {
          kind: "mcq",
          q: "Which year did a border split Maasailand between British Kenya and German Tanganyika?",
          options: ["1857", "1885", "1919", "1947"],
          answer: 1,
          explain: "The border was drawn in 1885.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put these in time order.",
          items: ["Criminal Tribes Act (1871)", "Maasailand split by a border (1885)", "Indian independence closes the route to Sindh (1947)"],
          explain: "1871, then 1885, then 1947.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CBSE Economics: The Story of Village Palampur                       */
/* ------------------------------------------------------------------ */
const palampur: Topic = {
  slug: "c9-story-of-village-palampur",
  title: "The Story of Village Palampur",
  icon: "🌾",
  description: "Production in an imaginary village: factors of production, farming methods, the Green Revolution, and non-farm work.",
  lessons: [
    {
      slug: "c9-factors-of-production-farming",
      title: "Factors of Production and Farming",
      summary: "The four factors of production, multiple cropping, the Green Revolution, distribution of land, and the problems of farming in Palampur.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "**Palampur** is an imaginary village used by NCERT to explain how goods and services are produced. It has about **450 families**, good roads, electricity, schools and a health centre. Farming is the main activity, but some people also do dairy, small manufacturing, shopkeeping and transport.\n\nThe aim of production is to make goods and services that people want. For that we need four things, called the **factors of production**.",
        },
        {
          type: "table",
          headers: ["Factor", "Meaning", "Palampur example"],
          rows: [
            ["**Land**", "Land and other natural resources such as water, forests and minerals.", "The fields where wheat and jowar grow."],
            ["**Labour**", "People who do the work, from farm hands to skilled workers.", "Farm labourers who plough and harvest."],
            ["**Physical capital**", "Inputs needed at every stage of production. It has two parts (below).", "Tubewells, tractors, seeds, fertilisers."],
            ["**Human capital**", "Knowledge and enterprise to put land, labour and physical capital together.", "A farmer who decides what to grow and sells in Raiganj."],
          ],
        },
        {
          type: "table",
          headers: ["Fixed capital", "Working capital"],
          rows: [
            ["Tools, machines and buildings used **over many years**.", "Raw materials and money used up **in one round** of production."],
            ["Tractor, tubewell, farmer's plough, generator, building of a factory", "Seeds, fertilisers, pesticides, cash to pay wages"],
          ],
        },
        {
          type: "mistake",
          wrong: "Seeds and fertilisers are fixed capital because a farmer needs them every year.",
          right: "Seeds and fertilisers are working capital, because they are used up in one round of production.",
          why: "Needing something every year is not the test. The test is whether it lasts: a tractor works for many seasons (fixed), but a bag of fertiliser is gone after one crop (working).",
        },
        {
          type: "heading",
          text: "Growing more from the same land",
        },
        {
          type: "text",
          md: "Land under cultivation is practically **fixed**. To grow more, farmers can do two things.\n\n**Multiple cropping** means growing more than one crop on the same piece of land in a year. In Palampur farmers grow **jowar and bajra** in the rainy (**kharif**) season, **potato** between October and December, and **wheat** in winter (**rabi**). Some land also grows **sugarcane**, harvested once a year. This is possible because of **irrigation**: electricity reached Palampur early and electric **tubewells** water the fields.\n\n**Modern farming methods** raise the **yield**, the crop produced on a given piece of land in one season.",
        },
        {
          type: "text",
          md: "In the late 1960s the **Green Revolution** brought **HYV (high-yielding variety)** seeds of wheat and rice to Indian farmers. HYV seeds give much more grain per plant, but they need plenty of water, chemical fertilisers and pesticides. Farmers in **Punjab, Haryana and western Uttar Pradesh** were among the first to use them.",
        },
        {
          type: "example",
          title: "Using yield numbers",
          problem: "With traditional seeds a farmer gets about 1,300 kg of wheat per hectare. With HYV seeds she gets about 3,200 kg per hectare. On 2 hectares, how much more wheat does she get with HYV seeds?",
          steps: [
            "Extra yield per hectare = 3,200 − 1,300 = 1,900 kg.",
            "For 2 hectares = 1,900 × 2 = 3,800 kg.",
            "Remember the cost side: HYV needs more water, fertiliser and pesticide, so working capital rises.",
          ],
          answer: "About 3,800 kg more wheat, but at a higher cost of inputs.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these is working capital for a farmer?",
              options: ["Tractor", "Tubewell", "Fertiliser", "Cattle shed"],
              answer: 2,
              explain: "Fertiliser is used up in one round of production. The others last many years.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Group of families in Palampur", "Number", "Land"],
          rows: [
            ["Landless, mostly dalit families", "150", "None"],
            ["Small farmers", "240", "Less than 2 hectares each"],
            ["Medium and large farmers", "60", "More than 2 hectares; a few over 10 hectares"],
          ],
        },
        {
          type: "text",
          md: "So land is **unequally distributed**. Landless people work as **farm labourers** on others' fields. They are paid daily or for a task, often below the minimum wage fixed by the government, and work may not be available all year.\n\nModern farming has also **overused natural resources**. Too much chemical fertiliser has reduced **soil fertility** in places, and tubewells have caused the **groundwater** level to fall. Land, once damaged, is very hard to restore.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Fixed capital or working capital?",
            groups: ["Fixed capital", "Working capital"],
            items: [
              { text: "Tractor", group: 0, hint: "It works for many seasons." },
              { text: "HYV seeds", group: 1, hint: "Sown once and used up." },
              { text: "Tubewell", group: 0, hint: "Dug once, used for years." },
              { text: "Pesticide", group: 1, hint: "Sprayed and gone." },
              { text: "Cash for wages", group: 1, hint: "Spent in this crop season." },
              { text: "Sugarcane crushing machine", group: 0, hint: "A machine lasts for years." },
            ],
            explain: "Ask: does it last many rounds of production (fixed) or is it used up in one round (working)?",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When asked to \"name the factors of production\", write all **four**: land, labour, physical capital and human capital (some books also say \"knowledge and enterprise\" for the fourth). Students often stop at three.",
        },
        {
          type: "keypoints",
          items: [
            "Four factors of production: land, labour, physical capital (fixed and working) and human capital.",
            "Land is fixed, so output rises through multiple cropping and higher yields.",
            "The Green Revolution of the late 1960s used HYV seeds, irrigation, fertilisers and pesticides.",
            "In Palampur 150 families are landless, 240 small farmers have under 2 ha, and 60 have more than 2 ha.",
            "Overuse of fertilisers and groundwater threatens future farming.",
          ],
        },
      ],
      flashcards: [
        { front: "Factors of production", back: "Land, labour, physical capital and human capital." },
        { front: "Fixed capital", back: "Tools, machines and buildings used over many years, e.g. a tractor." },
        { front: "Working capital", back: "Raw materials and money used up in one round of production, e.g. seeds, cash." },
        { front: "Multiple cropping", back: "Growing more than one crop on the same land in a year." },
        { front: "Yield", back: "Crop produced on a given piece of land during a single season." },
        { front: "HYV seeds", back: "High-yielding variety seeds brought by the Green Revolution; they need lots of water, fertiliser and pesticide." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "What is the most common way to increase production on the same land?",
          options: ["Buying more land", "Multiple cropping", "Leaving land fallow", "Moving to a city"],
          answer: 1,
          explain: "Since land is fixed, farmers grow more than one crop a year on it.",
        },
        {
          kind: "numeric",
          q: "Palampur has 450 families: 150 are landless and 240 are small farmers. How many families are medium and large farmers?",
          answer: 60,
          explain: "450 − 150 − 240 = 60.",
        },
        {
          kind: "truefalse",
          q: "Human capital means the money a farmer borrows to buy seeds.",
          answer: false,
          explain: "Borrowed money for seeds is working capital. Human capital is knowledge and enterprise.",
          difficulty: 2,
          hint: "\"Human\" points to people's skills.",
        },
        {
          kind: "fill",
          q: "The crop grown in Palampur in winter (rabi season) is ___.",
          answer: ["wheat"],
          explain: "Jowar and bajra are kharif crops; potato is grown between October and December; wheat is the winter crop.",
        },
        {
          kind: "multi",
          q: "Which are problems caused by modern farming methods? (Choose all.)",
          options: ["Falling groundwater levels", "Loss of soil fertility", "Higher yields", "Overuse of chemical fertilisers"],
          answers: [0, 1, 3],
          explain: "Higher yields are a benefit, not a problem.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order Palampur's crops through the year, starting with the monsoon.",
          items: ["Jowar and bajra (kharif, rainy season)", "Potato (October to December)", "Wheat (winter, rabi)"],
          explain: "Kharif in the rains, potato in between, wheat in winter.",
        },
        {
          kind: "mcq",
          q: "Which states were among the first to use the Green Revolution methods?",
          options: ["Kerala, Tamil Nadu and Karnataka", "Punjab, Haryana and western Uttar Pradesh", "Assam, Bihar and Odisha", "Gujarat, Rajasthan and Goa"],
          answer: 1,
          explain: "Farmers in Punjab, Haryana and western UP were among the first to adopt HYV seeds.",
        },
      ],
    },
    {
      slug: "c9-non-farm-activities-palampur",
      title: "Non-farm Activities in Palampur",
      summary: "Farm labour, the surplus, and non-farm work: dairy, small-scale manufacturing, shopkeeping and transport.",
      minutes: 13,
      xp: 35,
      blocks: [
        {
          type: "text",
          md: "Not everyone in Palampur farms. Only about **25 per cent** of the people working in Palampur are in **non-farm activities**, but these jobs matter because land is limited and farm work is seasonal.",
        },
        {
          type: "heading",
          text: "Where does the money for new work come from?",
        },
        {
          type: "text",
          md: "After a harvest, a farmer keeps some grain for the family and sells the rest. The part sold in the market is the **surplus**.\n\nLarge farmers with a surplus can **save** money. They use it to lend to small farmers, buy more working capital, or start non-farm work such as a shop or a transport business. Small farmers usually have little or no surplus, so they **borrow**, often from large farmers or moneylenders at high interest.",
        },
        {
          type: "table",
          headers: ["Non-farm activity", "What it looks like in Palampur"],
          rows: [
            ["**Dairy**", "Families feed buffaloes with grass, jowar and bajra; milk is sold at a collection and chilling centre in the nearby town of **Raiganj**, then sent to cities."],
            ["**Small-scale manufacturing**", "Done at home or in fields with simple methods and family labour, e.g. a sugarcane crushing machine making **jaggery** (gur) for sale."],
            ["**Shopkeeping**", "Small shops sell rice, wheat, sugar, tea, soap and stationery bought in wholesale markets in town; some families run small eating places."],
            ["**Transport**", "Rickshaw-wallahs, tonga-wallahs, jeep, tractor and truck drivers carry people and goods to Raiganj and other towns."],
          ],
        },
        {
          type: "example",
          title: "Tracing a surplus",
          problem: "A large farmer sells his extra wheat. Show how this can create non-farm work in the village.",
          steps: [
            "He sells the surplus wheat in the market and earns money.",
            "He saves part of it in a bank or keeps it as cash.",
            "Later he buys a second-hand tractor or a small truck.",
            "He carries other farmers' crops to the town for a fee: a new transport business.",
          ],
          answer: "Surplus becomes savings, savings buy physical capital, and that capital starts a non-farm activity.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "Most people working in Palampur are engaged in non-farm activities.",
              answer: false,
              explain: "Only about 25 per cent work in non-farm activities; farming is the main activity.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Small farmers in Palampur use their own savings to buy seeds and fertilisers.",
          right: "Most small farmers have no surplus to save, so they borrow money, often at high interest, for working capital.",
          why: "It is easy to assume every farmer saves. But a small plot gives little or no surplus after the family eats, so borrowing is common and debt is a burden.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Farm or non-farm activity?",
            groups: ["Farm activity", "Non-farm activity"],
            items: [
              { text: "Harvesting wheat", group: 0, hint: "Work in the field on a crop." },
              { text: "Running a grocery shop", group: 1, hint: "Selling goods, not growing them." },
              { text: "Making jaggery to sell", group: 1, hint: "It is manufacturing from a crop." },
              { text: "Sowing jowar", group: 0, hint: "Crop growing." },
              { text: "Driving a tonga to Raiganj", group: 1, hint: "This is transport." },
              { text: "Irrigating a potato field", group: 0, hint: "Field work on a crop." },
            ],
            explain: "Growing crops is farm work. Turning crops into goods (jaggery), selling goods and carrying people or goods are non-farm activities.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "If asked how non-farm activities can grow in villages, give **two** points: access to **loans at low interest**, and **markets** (good roads and transport to towns) where the goods can be sold.",
        },
        {
          type: "keypoints",
          items: [
            "About 25% of Palampur's workers do non-farm work.",
            "The surplus is the part of the harvest sold in the market; large farmers save it and invest it.",
            "Non-farm activities: dairy, small-scale manufacturing, shopkeeping and transport.",
            "Non-farm work grows with cheap credit, good roads and access to markets.",
          ],
        },
      ],
      flashcards: [
        { front: "Surplus", back: "The part of the farm produce that is sold in the market." },
        { front: "Share of Palampur's workers in non-farm activities", back: "About 25 per cent." },
        { front: "Small-scale manufacturing", back: "Production with simple methods, at home or in fields, mostly with family labour." },
        { front: "Where is Palampur's milk sold?", back: "At the collection and chilling centre in Raiganj." },
        { front: "Two needs for non-farm work to grow", back: "Loans at low interest and access to markets." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which is a non-farm activity?",
          options: ["Ploughing", "Weeding", "Running a computer centre", "Harvesting"],
          answer: 2,
          explain: "A computer centre is a service. The other three are field work.",
        },
        {
          kind: "fill",
          q: "The part of the harvest that a farmer sells in the market is called the ___.",
          answer: ["surplus", "marketable surplus"],
          explain: "Surplus = output minus what the family keeps.",
        },
        {
          kind: "truefalse",
          q: "Small-scale manufacturing in Palampur uses simple methods and mainly family labour.",
          answer: true,
          explain: "Unlike big factories, it is done at home or in fields with family members.",
        },
        {
          kind: "mcq",
          q: "Why do small farmers usually borrow for working capital?",
          options: ["They prefer debt", "They have little or no surplus to save", "Banks force them", "They own too much land"],
          answer: 1,
          explain: "A small plot gives little surplus after the family's needs.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order the steps by which a surplus becomes a non-farm business.",
          items: ["Sell surplus crop", "Save the earnings", "Buy physical capital such as a truck", "Earn by carrying goods to town"],
          explain: "Surplus → savings → capital → new activity.",
        },
        {
          kind: "multi",
          q: "Which help non-farm activities grow in a village? (Choose all.)",
          options: ["Loans at low interest", "Good roads to towns", "Access to markets", "Higher land rents"],
          answers: [0, 1, 2],
          explain: "Higher rents would hurt, not help.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CBSE Economics: People as Resource (shared with Karnataka)          */
/* ------------------------------------------------------------------ */
const peopleAsResource: Topic = {
  slug: "c9-people-as-resource",
  title: "People as Resource",
  icon: "🧑‍🏫",
  description: "Population as an asset: human capital, economic activities, education, health and unemployment.",
  lessons: [
    {
      slug: "c9-human-capital-economic-activities",
      title: "Human Capital and Economic Activities",
      summary: "What 'people as resource' means, how investment in people creates human capital, and market and non-market activities in the three sectors.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🎓",
          caption: "Two cousins from the same village: one finished school and a computer course, the other left school at 10. Ten years later their incomes are very different.",
        },
        {
          type: "text",
          md: "**People as resource** is a way of looking at a country's working people in terms of their skills and abilities. A large population is not only a burden; it can be an **asset** if people are healthy, educated and skilled.\n\nWhen money is spent on **education, training and medical care**, the stock of skill and productive knowledge in people grows. This stock is called **human capital**, and the spending is called **investment in human capital**.",
        },
        {
          type: "text",
          md: "Human capital is in a way **superior** to land and physical capital, because educated and skilled people can make better use of land and machines. Countries like **Japan** have few natural resources, yet they became rich by investing in people, especially in education and health.",
        },
        {
          type: "example",
          title: "Reading the Sakal and Vilas story",
          problem: "Sakal studied, took a computer course and got a good job. Vilas, who was often ill and could not study, sells fish and earns little. What does this show?",
          steps: [
            "Find the investment: Sakal's education and training raised his skills.",
            "Find the return: his skills earned him a higher income and he added more to the economy.",
            "Contrast with Vilas: without education and good health, his earnings stayed low.",
            "Connect to the country: investment in people raises their productivity and the nation's output.",
          ],
          answer: "Investment in education and health turns a person into human capital, raising both their income and the nation's output.",
        },
        {
          type: "heading",
          text: "Economic activities",
        },
        {
          type: "text",
          md: "Activities that add value to the national income are **economic activities**. They are of two kinds.\n\n**Market activities** are done for pay or profit, e.g. a nurse paid by a hospital, or a farmer selling rice.\n\n**Non-market activities** are production for **self-consumption**, e.g. a family growing vegetables only to eat, or processing their own grain.",
        },
        {
          type: "table",
          headers: ["Sector", "What it includes", "Examples"],
          rows: [
            ["**Primary**", "Activities that use nature directly", "Agriculture, forestry, animal husbandry, fishing, poultry farming, mining and quarrying"],
            ["**Secondary**", "Manufacturing: turning raw material into goods", "Making cloth, sugar, steel; construction"],
            ["**Tertiary**", "Services that support the other sectors and people", "Trade, transport, communication, banking, education, health, tourism, insurance"],
          ],
        },
        {
          type: "mistake",
          wrong: "A mother cooking and caring for her family at home is doing an economic activity, so it is counted in national income.",
          right: "Household work done for one's own family is not paid, so it is not counted in national income, even though it is valuable work.",
          why: "Economic activities that are counted are those for pay, profit or self-produced goods. Services women give their own households are not recorded, which is why women's work is often under-valued.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A teacher working in a school and a bank clerk both belong to which sector?",
              options: ["Primary", "Secondary", "Tertiary", "None of these"],
              answer: 2,
              explain: "Teaching and banking are services, so they are tertiary activities.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which sector does each activity belong to?",
            groups: ["Primary", "Secondary", "Tertiary"],
            items: [
              { text: "Fishing off the Kerala coast", group: 0, hint: "It takes from nature directly." },
              { text: "Making sugar from cane", group: 1, hint: "Raw material becomes a new good." },
              { text: "Driving a bus", group: 2, hint: "Transport is a service." },
              { text: "Mining iron ore in Ballari", group: 0, hint: "Mining is extraction from nature." },
              { text: "Building a house", group: 1, hint: "Construction counts as secondary." },
              { text: "Working in a hospital", group: 2, hint: "Health is a service." },
            ],
            explain: "Primary takes from nature, secondary changes it into goods (including construction), and tertiary provides services.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Define human capital as \"the **stock of skill and productive knowledge embodied in people**\". Write the three things it comes from: **education, training and medical care**. Leaving out health is a common slip.",
        },
        {
          type: "keypoints",
          items: [
            "People are an asset when they are educated, trained and healthy.",
            "Human capital is the stock of skill and productive knowledge in people; it grows through investment in education, training and health.",
            "Market activities are for pay or profit; non-market activities are production for self-consumption.",
            "Primary, secondary and tertiary sectors cover all economic activities.",
            "Household work done for one's own family is not counted in national income.",
          ],
        },
      ],
      flashcards: [
        { front: "People as resource", back: "Seeing a country's working people in terms of their productive skills and abilities." },
        { front: "Human capital", back: "The stock of skill and productive knowledge embodied in people." },
        { front: "Market activities", back: "Activities done for pay or profit." },
        { front: "Non-market activities", back: "Production for self-consumption." },
        { front: "Tertiary sector", back: "Services such as trade, transport, banking, education and health." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is NOT a way of investing in human capital?",
          options: ["Education", "Medical care", "Training", "Buying a tractor"],
          answer: 3,
          explain: "A tractor is physical capital. Education, training and health build human capital.",
        },
        {
          kind: "truefalse",
          q: "Construction is part of the secondary sector.",
          answer: true,
          explain: "Construction, like manufacturing, makes new goods from materials.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Production for one's own use is called ___ activity.",
          answer: ["non-market", "non market"],
          explain: "It is not sold, so it is a non-market activity.",
        },
        {
          kind: "multi",
          q: "Which are primary sector activities? (Choose all.)",
          options: ["Poultry farming", "Quarrying", "Banking", "Forestry"],
          answers: [0, 1, 3],
          explain: "Banking is a service (tertiary).",
        },
        {
          kind: "mcq",
          q: "Why is human capital called superior to land and physical capital?",
          options: ["It never needs money", "Skilled people can use land and machines better", "It is always free", "It is found only in rich countries"],
          answer: 1,
          explain: "Knowledge and skill make the other factors more productive.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A woman sells vegetables she grows. Another grows vegetables only for her family. The first is a ___ activity, the second is a ___ activity.",
          options: ["market; non-market", "non-market; market", "market; market", "non-market; non-market"],
          answer: 0,
          explain: "Selling for income is a market activity; growing only for one's own use is non-market.",
        },
      ],
    },
    {
      slug: "c9-education-health-unemployment",
      title: "Education, Health and Unemployment",
      summary: "Literacy and schooling schemes, health indicators, and the kinds of unemployment found in India.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Education and health are the two biggest investments in people. A healthy, literate worker produces more, earns more and can learn new skills.",
        },
        {
          type: "heading",
          text: "Quality of population: education",
        },
        {
          type: "text",
          md: "The **literacy rate** is the share of people aged 7 and above who can read and write with understanding. According to **Census 2011**, India's literacy rate was about **74 per cent** (about 82 per cent for males and 65 per cent for females). Literacy is higher in **Kerala** and lower in some states like **Bihar**.\n\n**Sarva Shiksha Abhiyan** was a scheme to provide **elementary education to all children aged 6 to 14**. The **mid-day meal** scheme gives a cooked meal in schools to encourage attendance and improve nutrition.",
        },
        {
          type: "heading",
          text: "Quality of population: health",
        },
        {
          type: "text",
          md: "Health is measured using indicators like **life expectancy**, the **infant mortality rate (IMR)** and the **birth rate** and **death rate**.\n\n**Infant mortality rate** is the number of children who die before the age of one year, per 1,000 live births. **Birth rate** is the number of babies born per 1,000 people in a year; **death rate** is the number of people who die per 1,000 people in a year. India has built a large network of primary health centres and hospitals, and IMR and death rates have fallen sharply since 1951.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "Infant mortality rate is the number of children dying before age one per ___ live births.",
              answer: ["1000", "1,000", "thousand", "one thousand"],
              explain: "IMR is counted per 1,000 live births.",
            },
          ],
        },
        {
          type: "heading",
          text: "Unemployment",
        },
        {
          type: "text",
          md: "**Unemployment** exists when people who are **willing to work at the going wages cannot find jobs**. Only people aged **15 to 59** are counted in the workforce; children, the old and people unable to work are not counted as unemployed.",
        },
        {
          type: "table",
          headers: ["Type", "What it means", "Where"],
          rows: [
            ["**Seasonal unemployment**", "People find work only in some months, e.g. sowing and harvest time.", "Rural areas"],
            ["**Disguised unemployment**", "More people work on a job than needed; some can be removed and output does not fall. Each appears employed.", "Rural areas, family farms"],
            ["**Educated unemployment**", "Graduates and post-graduates cannot find suitable jobs.", "Urban areas"],
          ],
        },
        {
          type: "example",
          title: "Spotting disguised unemployment",
          problem: "A family farm needs 5 people. Eight family members work on it. Output stays the same if 3 of them leave. What kind of unemployment is this?",
          steps: [
            "Count the extra workers: 8 − 5 = 3.",
            "Check output: removing the 3 does not reduce production.",
            "So those 3 add nothing extra, even though they look busy.",
          ],
          answer: "This is disguised unemployment: 3 people appear employed but their work adds nothing to output.",
        },
        {
          type: "mistake",
          wrong: "A 70-year-old grandparent who is not working is unemployed.",
          right: "Unemployment counts only people of working age (15–59) who want work at the going wage and cannot find it.",
          why: "Not working and being unemployed are different. The old, the young and those not seeking work are outside the workforce, so they are not unemployed.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each case to its type of unemployment.",
            pairs: [
              ["A farm worker idle after the harvest until the next sowing", "Seasonal"],
              ["Six brothers doing the work of three on a small farm", "Disguised"],
              ["An engineering graduate who cannot find a job", "Educated"],
            ],
            explain: "Seasonal is about time of year, disguised about too many people on one job, and educated about qualified people without suitable work.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When explaining **disguised unemployment**, always add the test: \"if some workers are removed, **output does not fall**\". Answers without this line usually lose a mark.",
        },
        {
          type: "keypoints",
          items: [
            "Literacy (Census 2011) was about 74%: around 82% male and 65% female.",
            "Sarva Shiksha Abhiyan aims at elementary education for all children aged 6–14; the mid-day meal scheme supports attendance.",
            "Health indicators include life expectancy, infant mortality rate, birth rate and death rate.",
            "Unemployment: people aged 15–59 willing to work at going wages who cannot find work.",
            "Types: seasonal and disguised (rural), educated (urban).",
          ],
        },
      ],
      flashcards: [
        { front: "Literacy rate (Census 2011)", back: "About 74% (male about 82%, female about 65%)." },
        { front: "Sarva Shiksha Abhiyan", back: "Scheme for elementary education for all children aged 6–14." },
        { front: "Infant mortality rate", back: "Deaths of children under one year per 1,000 live births." },
        { front: "Disguised unemployment", back: "More people work than needed; removing some does not reduce output." },
        { front: "Seasonal unemployment", back: "Work is available only during some months of the year." },
        { front: "Workforce age group", back: "15 to 59 years." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Disguised unemployment is mostly found in:",
          options: ["Big factories", "Family-run farms in villages", "Software companies", "Government offices only"],
          answer: 1,
          explain: "On family farms, many relatives share work that fewer people could do.",
        },
        {
          kind: "truefalse",
          q: "Educated unemployment is a common problem in urban areas.",
          answer: true,
          explain: "Many matriculates, graduates and post-graduates in towns cannot find suitable jobs.",
        },
        {
          kind: "numeric",
          q: "Census 2011 put India's literacy rate at about how many per cent? (Nearest whole number.)",
          answer: 74,
          tolerance: 1,
          unit: "%",
          explain: "About 74 per cent.",
        },
        {
          kind: "fill",
          q: "The scheme for elementary education for all children aged 6 to 14 is called Sarva ___ Abhiyan.",
          answer: ["Shiksha"],
          explain: "Sarva Shiksha Abhiyan means 'education for all' campaign.",
        },
        {
          kind: "mcq",
          q: "Which person is counted as unemployed?",
          options: ["A 10-year-old student", "A 30-year-old who wants work at the going wage but finds none", "A retired 65-year-old", "A homemaker who does not seek paid work"],
          answer: 1,
          explain: "Only working-age people seeking work at the going wage are unemployed.",
          difficulty: 2,
          hint: "Check age and willingness to work.",
        },
        {
          kind: "multi",
          q: "Which are indicators of the health of a population? (Choose all.)",
          options: ["Life expectancy", "Infant mortality rate", "Death rate", "Literacy rate"],
          answers: [0, 1, 2],
          explain: "Literacy rate measures education, not health.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CBSE Economics: Poverty as a Challenge                              */
/* ------------------------------------------------------------------ */
const poverty: Topic = {
  slug: "c9-poverty-as-a-challenge",
  title: "Poverty as a Challenge",
  icon: "🏚️",
  description: "What poverty means, how the poverty line is drawn, trends and vulnerable groups, causes, and India's anti-poverty schemes.",
  lessons: [
    {
      slug: "c9-poverty-line-and-trends",
      title: "Measuring Poverty: The Poverty Line",
      summary: "Faces of poverty, social exclusion and vulnerability, the poverty line, trends since 1993 and the groups and states most affected.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Poverty is more than a low income. A poor family may go hungry, live in a leaking hut, have no clean water, send children to work instead of school, and be unable to afford a doctor.\n\nSocial scientists look at poverty through many indicators. Two important ideas are **social exclusion** and **vulnerability**.",
        },
        {
          type: "list",
          items: [
            "**Social exclusion**: poor people are kept out of facilities, benefits and opportunities that others enjoy, for example because of caste.",
            "**Vulnerability**: the greater chance of some groups (such as backward castes, widows, physically challenged people) becoming or staying poor, and having fewer ways to cope with a bad event like a flood or illness.",
          ],
        },
        {
          type: "heading",
          text: "The poverty line",
        },
        {
          type: "text",
          md: "The **poverty line** is the minimum level of income or spending needed to meet basic needs. A person below it is counted as poor.\n\nIn India, the line was first based on food: the minimum need was taken as **2,400 calories** per person per day in **rural** areas and **2,100 calories** in **urban** areas. Rural people need more calories because they do more physical work. The line also includes basic clothing, footwear, fuel, education and medical needs.\n\nFor **2011–12**, the poverty line was set at **₹816 per person per month in rural areas** and **₹1,000 in urban areas**. Surveys for these estimates were carried out by the **National Sample Survey Office (NSSO)**.",
        },
        {
          type: "example",
          title: "Is this family poor?",
          problem: "A rural family of 5 earns ₹3,800 a month (2011–12). Is it below the poverty line?",
          steps: [
            "Rural poverty line for 2011–12 = ₹816 per person per month.",
            "For 5 people: 5 × 816 = ₹4,080 per month.",
            "Compare: ₹3,800 is less than ₹4,080.",
          ],
          answer: "Yes. The family earns less than ₹4,080, so it is below the poverty line.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "An urban family of 4 in 2011–12. What is its poverty line income per month in ₹?",
              answer: 4000,
              unit: "₹",
              explain: "4 × ₹1,000 = ₹4,000.",
            },
          ],
        },
        {
          type: "heading",
          text: "Trends and who is poor",
        },
        {
          type: "table",
          headers: ["Year", "Poverty ratio (% of people)", "Number of poor (million)"],
          rows: [
            ["1993–94", "45.3", "403.7"],
            ["2004–05", "37.2", "407.1"],
            ["2011–12", "21.9", "269.8"],
          ],
        },
        {
          type: "text",
          md: "The poverty ratio fell steadily, and between 2004–05 and 2011–12 the number of poor fell sharply.\n\nThe groups most **vulnerable** to poverty are **Scheduled Castes and Scheduled Tribe households**, **rural agricultural labourers** and **urban casual labourers**. Within poor families, women, elderly people and girl children often suffer most.\n\nPoverty also differs across **states**. **Bihar and Odisha** remained the two poorest states. Other states cut poverty a lot: **Punjab and Haryana** through high agricultural growth, **Kerala** through investment in people, **West Bengal** through land reforms, and **Andhra Pradesh and Tamil Nadu** through public distribution of food grains.",
        },
        {
          type: "mistake",
          wrong: "The number of poor and the poverty ratio always move together.",
          right: "The ratio is the share of poor people; the number is the count. Between 1993–94 and 2004–05 the ratio fell but the number of poor rose slightly because the population grew.",
          why: "A smaller share of a bigger population can still be more people. Read the table column by column before answering.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Why is the rural calorie norm higher than the urban one?",
            emoji: "🍚",
            options: ["Food is cheaper in villages", "Rural people do more physical work", "Urban people eat more", "The government likes villages"],
            answer: 1,
            trap: 0,
            explain: "The calorie need depends on the work people do. Farm and manual work in villages uses more energy, so the rural norm is 2,400 calories against 2,100 for urban areas.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Learn both calorie figures and both rupee figures. A very common error is swapping them: **rural 2,400 cal / ₹816**, **urban 2,100 cal / ₹1,000** (2011–12).",
        },
        {
          type: "keypoints",
          items: [
            "Poverty includes hunger, poor housing, lack of health care, schooling and clean water.",
            "Social exclusion and vulnerability are wider ways of seeing poverty.",
            "Calorie norm: 2,400 rural, 2,100 urban; 2011–12 poverty line: ₹816 rural, ₹1,000 urban per person per month.",
            "Poverty ratio fell from 45.3% (1993–94) to 21.9% (2011–12).",
            "SC and ST households, rural agricultural labourers and urban casual labourers are most vulnerable; Bihar and Odisha were the poorest states.",
          ],
        },
      ],
      flashcards: [
        { front: "Poverty line", back: "The minimum income or spending needed to meet basic needs." },
        { front: "Calorie norms for the poverty line", back: "2,400 per day (rural), 2,100 per day (urban)." },
        { front: "Poverty line 2011–12", back: "₹816 per person per month (rural), ₹1,000 (urban)." },
        { front: "Social exclusion", back: "Being kept out of facilities, benefits and opportunities that others enjoy." },
        { front: "Vulnerability", back: "Greater chance of becoming or staying poor, with fewer ways to cope with shocks." },
        { front: "Poverty ratio 2011–12", back: "21.9 per cent." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The calorie requirement used for the rural poverty line is:",
          options: ["2,100 per day", "2,400 per day", "1,800 per day", "3,000 per day"],
          answer: 1,
          explain: "Rural: 2,400; urban: 2,100.",
        },
        {
          kind: "fill",
          q: "Poverty estimates in India are based on surveys by the National Sample Survey ___ (NSSO).",
          answer: ["Office", "Organisation", "Organization"],
          explain: "The NSSO carries out the large surveys used for poverty estimates.",
        },
        {
          kind: "truefalse",
          q: "Between 1993–94 and 2004–05, the number of poor people in India rose slightly even though the poverty ratio fell.",
          answer: true,
          explain: "403.7 million rose to 407.1 million while the ratio fell from 45.3% to 37.2%.",
          difficulty: 3,
          hint: "Compare both columns of the table.",
        },
        {
          kind: "multi",
          q: "Which groups are most vulnerable to poverty? (Choose all.)",
          options: ["Scheduled Tribe households", "Urban casual labourers", "Rural agricultural labourers", "Large landowners"],
          answers: [0, 1, 2],
          explain: "Large landowners are not a vulnerable group.",
        },
        {
          kind: "mcq",
          q: "Which two states remained the poorest in 2011–12?",
          options: ["Kerala and Punjab", "Bihar and Odisha", "Gujarat and Tamil Nadu", "Goa and Himachal Pradesh"],
          answer: 1,
          explain: "Bihar and Odisha had the highest poverty ratios.",
        },
        {
          kind: "numeric",
          q: "A rural family of 3 in 2011–12. What is its poverty line income per month in ₹?",
          answer: 2448,
          unit: "₹",
          explain: "3 × ₹816 = ₹2,448.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange the poverty ratios from highest to lowest.",
          items: ["1993–94: 45.3%", "2004–05: 37.2%", "2011–12: 21.9%"],
          explain: "Poverty has fallen over time.",
        },
      ],
    },
    {
      slug: "c9-causes-and-anti-poverty-measures",
      title: "Causes of Poverty and Anti-poverty Measures",
      summary: "Why poverty exists in India, global poverty, and the government's strategy: growth plus targeted schemes such as MGNREGA.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "heading",
          text: "Why are so many people poor?",
        },
        {
          type: "list",
          items: [
            "**Colonial rule**: British policies ruined traditional handicrafts and discouraged industry, leaving a low level of economic development.",
            "**Low growth with high population growth**: for decades the economy grew slowly while population grew fast, so income per person stayed low.",
            "**Few jobs**: industry and services did not create enough jobs, and many people crowded into farming or low-paid city work.",
            "**Unequal land**: land reforms were not fully carried out, so many rural people remained landless.",
            "**Social customs and debt**: spending on festivals and ceremonies pushed poor families into debt, and borrowing kept them poor.",
          ],
        },
        {
          type: "heading",
          text: "The government's two-part strategy",
        },
        {
          type: "text",
          md: "The government fights poverty in two ways. First, **promotion of economic growth**: a growing economy creates jobs and money for health and education. Second, **targeted anti-poverty programmes** that reach poor people directly.",
        },
        {
          type: "table",
          headers: ["Programme", "Year", "What it does"],
          rows: [
            ["**Prime Minister Rozgar Yojana (PMRY)**", "1993", "Self-employment for educated unemployed youth in small towns and villages."],
            ["**Rural Employment Generation Programme (REGP)**", "1995", "Self-employment in rural areas and small towns."],
            ["**Swarnajayanti Gram Swarozgar Yojana (SGSY)**", "1999", "Helps poor families rise above the poverty line through self-help groups, bank credit and subsidy."],
            ["**Pradhan Mantri Gramodaya Yojana (PMGY)**", "2000", "Funds to states for basic services: health, primary education, drinking water, housing, electrification."],
            ["**Antyodaya Anna Yojana (AAY)**", "2000", "Highly subsidised food grains for the poorest families."],
            ["**Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)**", "2005", "At least **100 days** of assured wage work a year to every rural household; one-third of the jobs are for women."],
          ],
        },
        {
          type: "example",
          title: "Evaluating a scheme",
          problem: "How does MGNREGA reduce rural poverty? Give two points.",
          steps: [
            "Income: a household gets at least 100 days of paid work a year, so it has a minimum income.",
            "Assets: the work builds village assets like ponds, roads and soil conservation.",
            "Safety net: if work is not given within 15 days, the person can get an unemployment allowance.",
          ],
          answer: "It guarantees 100 days of paid work (a minimum income) and creates useful village assets; an allowance is due if no work is offered.",
        },
        {
          type: "mistake",
          wrong: "Economic growth alone will remove poverty, so special schemes are not needed.",
          right: "Growth helps, but its benefits do not reach every poor person automatically; targeted schemes are needed for those left behind.",
          why: "Growth creates jobs mostly for people with skills and assets. The landless, the sick and the unskilled may gain little, which is why schemes like MGNREGA and AAY exist.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "How many days of wage work does MGNREGA assure each rural household per year?",
              options: ["50", "100", "150", "365"],
              answer: 1,
              explain: "At least 100 days.",
            },
          ],
        },
        {
          type: "text",
          md: "**Global poverty**: The **World Bank** measures extreme poverty as living on less than **1.90 US dollars a day** (at 2011 prices, in the NCERT book). Poverty fell sharply in **China** and **South-east Asia** because of rapid growth and investment in people. **Sub-Saharan Africa** still has very high poverty. The **Sustainable Development Goals** of the United Nations aim to **end poverty of all types by 2030**.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put these schemes in the order they began.",
            items: ["PMRY (1993)", "REGP (1995)", "SGSY (1999)", "Antyodaya Anna Yojana (2000)", "MGNREGA (2005)"],
            explain: "From PMRY in 1993 to MGNREGA in 2005, schemes shifted from self-employment towards a legal right to work.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Write scheme names in full the first time, e.g. \"Mahatma Gandhi National Rural Employment Guarantee Act, 2005\". Only abbreviations may cost marks.",
        },
        {
          type: "keypoints",
          items: [
            "Causes: colonial past, slow growth with fast population growth, few jobs, unequal land, social customs and debt.",
            "Strategy: promote growth and run targeted anti-poverty programmes.",
            "Key schemes: PMRY 1993, REGP 1995, SGSY 1999, PMGY 2000, AAY 2000, MGNREGA 2005.",
            "MGNREGA assures 100 days of work per rural household per year; one-third of jobs for women.",
            "The SDGs aim to end poverty of all types by 2030.",
          ],
        },
      ],
      flashcards: [
        { front: "MGNREGA", back: "2005 Act assuring at least 100 days of wage work a year to every rural household." },
        { front: "Antyodaya Anna Yojana", back: "2000 scheme giving highly subsidised food grains to the poorest families." },
        { front: "PMRY", back: "Prime Minister Rozgar Yojana (1993): self-employment for educated unemployed youth." },
        { front: "Two parts of India's anti-poverty strategy", back: "Promote economic growth; run targeted anti-poverty programmes." },
        { front: "SDG target for poverty", back: "End poverty of all types by 2030." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which scheme gives self-employment opportunities to educated unemployed youth?",
          options: ["MGNREGA", "PMRY", "AAY", "PMGY"],
          answer: 1,
          explain: "PMRY (1993) targets educated unemployed youth.",
        },
        {
          kind: "truefalse",
          q: "Under MGNREGA, one-third of the jobs are meant for women.",
          answer: true,
          explain: "The Act reserves one-third of jobs for women.",
        },
        {
          kind: "fill",
          q: "MGNREGA was passed in the year ___.",
          answer: ["2005"],
          explain: "It was passed in 2005.",
        },
        {
          kind: "multi",
          q: "Which are causes of poverty in India? (Choose all.)",
          options: ["Ruin of handicrafts under colonial rule", "High population growth", "Unequal distribution of land", "Too many factories in villages"],
          answers: [0, 1, 2],
          explain: "Lack of industry, not too many factories, is the problem.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which region still has very high poverty according to global data?",
          options: ["China", "South-east Asia", "Sub-Saharan Africa", "Western Europe"],
          answer: 2,
          explain: "Poverty fell in China and South-east Asia but remains high in Sub-Saharan Africa.",
        },
        {
          kind: "mcq",
          q: "A student says, \"If GDP grows fast, every poor family will escape poverty.\" What is wrong?",
          options: ["Nothing; this is correct", "Growth does not reach everyone; targeted schemes are also needed", "Growth always increases poverty", "Poverty has nothing to do with income"],
          answer: 1,
          explain: "Growth helps, but people without skills or assets may be left behind.",
          difficulty: 2,
          hint: "Think of the government's two-part strategy.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* CBSE Economics: Food Security in India                              */
/* ------------------------------------------------------------------ */
const foodSecurity: Topic = {
  slug: "c9-food-security-in-india",
  title: "Food Security in India",
  icon: "🍚",
  description: "What food security means, who is food insecure, the buffer stock, the Public Distribution System and the role of cooperatives.",
  lessons: [
    {
      slug: "c9-meaning-of-food-security",
      title: "What Food Security Means",
      summary: "Availability, accessibility and affordability; the Bengal famine; chronic and seasonal hunger; who is food insecure; and self-sufficiency since the Green Revolution.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🌧️",
          caption: "A drought hits a district. Grain prices jump, and daily-wage families who were just getting by start skipping meals.",
        },
        {
          type: "text",
          md: "**Food security** means that **all people at all times** have enough food of acceptable quality to lead an active and healthy life. It has three parts.",
        },
        {
          type: "table",
          headers: ["Dimension", "Meaning"],
          rows: [
            ["**Availability**", "Enough food is produced in the country, imported, or kept in government stores."],
            ["**Accessibility**", "Food is within reach of every person."],
            ["**Affordability**", "A person has enough money to buy sufficient, safe and nutritious food."],
          ],
        },
        {
          type: "text",
          md: "Food security is most at risk during a disaster such as a **drought, flood, earthquake or tsunami**. Crops fail, food becomes scarce, and **prices rise**. If the shortage lasts long and is widespread, it can turn into a **famine**: widespread deaths from starvation and from diseases caused by contaminated water and weak bodies.\n\nThe most terrible famine in India was the **Bengal Famine of 1943**, in which about **30 lakh people** died.",
        },
        {
          type: "heading",
          text: "Hunger: chronic and seasonal",
        },
        {
          type: "table",
          headers: ["Chronic hunger", "Seasonal hunger"],
          rows: [
            ["Diet is **always** too little in quantity or quality.", "Hunger comes in **some months** only."],
            ["Caused by very low income, all year round.", "Caused by the cycle of growing and harvesting crops (in villages) or casual work drying up, e.g. during the rains (in towns)."],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A family has enough money but the village shop has no grain because roads are cut off. Which dimension of food security is missing?",
              options: ["Availability in the country", "Accessibility", "Affordability", "None"],
              answer: 1,
              explain: "Food exists and the family can pay, but it is not within their reach: accessibility is missing.",
            },
          ],
        },
        {
          type: "text",
          md: "**Who is food insecure?** In rural areas: **landless families**, **traditional artisans**, **petty self-employed workers** and **beggars**. In urban areas: families of **ill-paid** workers and **casual labourers**. **SC, ST and some OBC** households with little land, people hit by disasters, and **pregnant and nursing mothers and children under five** are at high risk. Large parts of **Uttar Pradesh (east and south-east), Bihar, Jharkhand, Odisha, West Bengal, Chhattisgarh** and parts of **Madhya Pradesh and Maharashtra** have many food-insecure people.",
        },
        {
          type: "example",
          title: "Reading a hunger case",
          problem: "Ramu works on farms during sowing and harvest, and has no work for about four months a year. His family eats less in those months. What kind of hunger is this, and why?",
          steps: [
            "Look at the pattern: food is short only in some months.",
            "Find the cause: his work depends on the farming season.",
            "Name it: this pattern is seasonal hunger, not chronic hunger.",
          ],
          answer: "Seasonal hunger, because it is linked to the farming cycle and comes only when work is not available.",
        },
        {
          type: "text",
          md: "After independence, India aimed at **self-sufficiency in food grains**. The **Green Revolution** in the late 1960s, especially for **wheat** (and later rice), raised production. **Punjab and Haryana** saw the biggest rise in wheat output. Since the 1970s India has avoided famine, even in bad years.",
        },
        {
          type: "mistake",
          wrong: "India grows enough food grain, so every Indian is food secure.",
          right: "Enough food at the national level does not mean every person can reach it or afford it.",
          why: "Availability is only one of three dimensions. A landless labourer may not be able to buy food even when the godowns are full.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Chronic or seasonal hunger?",
            groups: ["Chronic hunger", "Seasonal hunger"],
            items: [
              { text: "A beggar who never gets enough food", group: 0, hint: "It lasts all year." },
              { text: "A farm worker with no work after the harvest", group: 1, hint: "Linked to the crop cycle." },
              { text: "A rickshaw puller who loses work in the rainy season", group: 1, hint: "Only some months." },
              { text: "A very poor family that eats one thin meal a day all year", group: 0, hint: "Always too little." },
            ],
            explain: "Chronic hunger lasts all year because income is always too low. Seasonal hunger comes and goes with the farming or work cycle.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When asked \"What is food security?\", write the definition **and** the three dimensions (availability, accessibility, affordability). Writing only one dimension gets part marks.",
        },
        {
          type: "keypoints",
          items: [
            "Food security = availability, accessibility and affordability of food for all at all times.",
            "Disasters cut production and raise prices; a long, widespread shortage becomes a famine. The Bengal Famine of 1943 killed about 30 lakh people.",
            "Chronic hunger is constant; seasonal hunger comes with the crop or work cycle.",
            "Landless labourers, artisans, casual workers, SC/ST households, mothers and young children are most food insecure.",
            "The Green Revolution made India self-sufficient in food grains.",
          ],
        },
      ],
      flashcards: [
        { front: "Food security", back: "Availability, accessibility and affordability of enough nutritious food for all people at all times." },
        { front: "Bengal Famine", back: "1943; about 30 lakh people died." },
        { front: "Chronic hunger", back: "Diet always inadequate in quantity or quality, due to very low income." },
        { front: "Seasonal hunger", back: "Hunger in some months, linked to farming cycles or seasonal work." },
        { front: "Affordability", back: "Having enough money to buy sufficient, safe and nutritious food." },
      ],
      quiz: [
        {
          kind: "multi",
          q: "Which are dimensions of food security? (Choose all.)",
          options: ["Availability", "Accessibility", "Affordability", "Advertisement"],
          answers: [0, 1, 2],
          explain: "The three A's: availability, accessibility and affordability.",
        },
        {
          kind: "fill",
          q: "The Bengal Famine took place in the year ___.",
          answer: ["1943"],
          explain: "1943, during the Second World War.",
        },
        {
          kind: "truefalse",
          q: "Seasonal hunger is more common in villages because of the seasonal nature of farming.",
          answer: true,
          explain: "Farm work and food supply depend on sowing and harvest seasons.",
        },
        {
          kind: "mcq",
          q: "Which group is NOT usually among the most food insecure?",
          options: ["Landless labourers", "Traditional artisans", "Large landowners", "Urban casual labourers"],
          answer: 2,
          explain: "Large landowners grow and store food and have savings.",
        },
        {
          kind: "mcq",
          q: "Which crop gained most from the Green Revolution at first?",
          options: ["Wheat", "Cotton", "Tea", "Jute"],
          answer: 0,
          explain: "The Green Revolution began with HYV wheat.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Order the chain from disaster to famine.",
          items: ["A drought hits", "Crop production falls", "Food becomes scarce and prices rise", "The poor cannot buy food", "Widespread starvation: famine"],
          explain: "A disaster cuts output, prices rise, the poor lose access, and a long widespread shortage becomes famine.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-buffer-stock-and-pds",
      title: "Buffer Stock, PDS and Cooperatives",
      summary: "How the FCI builds a buffer stock at MSP, how ration shops and ration cards work, the National Food Security Act 2013, and cooperatives like Amul and Mother Dairy.",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "text",
          md: "The government's food security system has two parts: a **buffer stock** of grain, and the **Public Distribution System (PDS)** that delivers it to the poor.",
        },
        {
          type: "text",
          md: "A **buffer stock** is the stock of food grains, mainly **wheat and rice**, bought by the government through the **Food Corporation of India (FCI)**.\n\nThe FCI buys grain from farmers in states with a surplus at a **minimum support price (MSP)**, announced **before the sowing season** so farmers are encouraged to grow more. The grain is stored in granaries.\n\nIt is then given to poorer sections at a price lower than the market price, called the **issue price**. The stock also helps during disasters and in years of shortage.",
        },
        {
          type: "heading",
          text: "The Public Distribution System",
        },
        {
          type: "text",
          md: "Food bought by the FCI is distributed through government-regulated **ration shops**, also called **fair price shops**, which sell food grains, sugar and kerosene at prices lower than the market. This system is the **PDS**. Any family with a **ration card** can buy a fixed amount each month.\n\nRationing in India began in the **1940s**, against the backdrop of the **Bengal famine**.",
        },
        {
          type: "table",
          headers: ["Ration card", "For whom"],
          rows: [
            ["**Antyodaya card**", "The poorest of the poor"],
            ["**BPL card**", "Families below the poverty line"],
            ["**APL card**", "All others (above the poverty line)"],
          ],
        },
        {
          type: "table",
          headers: ["Scheme", "Year", "Key point"],
          rows: [
            ["**Revamped PDS (RPDS)**", "1992", "Aimed at far-flung and backward blocks."],
            ["**Targeted PDS (TPDS)**", "1997", "Different prices for poor and non-poor."],
            ["**Antyodaya Anna Yojana (AAY)**", "December 2000", "Poorest families get grain at a very low price."],
            ["**Annapurna Scheme (APS)**", "2000", "Free food grain for indigent (very poor) senior citizens."],
            ["**National Food Security Act (NFSA)**", "2013", "Legal right to subsidised food grain for **75%** of the rural and **50%** of the urban population."],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The price at which the FCI buys grain from farmers is called the:",
              options: ["Issue price", "Minimum support price", "Market price", "Ration price"],
              answer: 1,
              explain: "The FCI buys at the MSP. The issue price is the lower price at which grain is sold to the poor.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The issue price and the minimum support price are the same thing.",
          right: "MSP is the price paid **to farmers** when the government buys grain. The issue price is the lower price at which grain is **sold to the poor** through ration shops.",
          why: "Both are government prices for the same grain, so they get mixed up. Remember: MSP flows in (buying), issue price flows out (selling).",
        },
        {
          type: "heading",
          text: "Problems and cooperatives",
        },
        {
          type: "text",
          md: "The PDS has problems. Granaries are sometimes **overflowing** while many people stay hungry, and some grain rots or is eaten by rats. Ration shop dealers may sell grain in the open market, sell poor-quality grain or open irregularly. MSP has encouraged farmers to grow more **wheat and rice** in place of other crops, and heavy irrigation for rice has harmed the environment in some states.\n\n**Cooperatives** also help with food security. In **Tamil Nadu**, a large share of fair price shops are run by cooperatives. **Mother Dairy** in **Delhi** sells milk and vegetables at controlled prices. **Amul** in **Gujarat** made the White Revolution in milk possible. The **Academy of Development Science (ADS)** in **Maharashtra** helped NGOs set up **grain banks** in different regions.",
        },
        {
          type: "example",
          title: "Following the grain",
          problem: "Trace a sack of wheat from a farmer in Punjab to a poor family in Bihar.",
          steps: [
            "The government announces the MSP before sowing; the farmer grows wheat.",
            "After harvest, the FCI buys the wheat at the MSP.",
            "The wheat is stored in FCI granaries as part of the buffer stock.",
            "It is sent to a fair price shop in Bihar.",
            "A family with a ration card buys it at the lower issue price.",
          ],
          answer: "MSP purchase → FCI storage (buffer stock) → ration shop → sale at issue price under the PDS.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the steps of the food security system in order.",
            items: ["MSP announced before sowing", "FCI buys grain from farmers", "Grain stored in granaries", "Grain sent to ration shops", "Card holders buy at the issue price"],
            explain: "The system moves from farmer to granary to ration shop. MSP is the buying price; the issue price is the selling price.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Know the **NFSA 2013** coverage exactly: **75% rural, 50% urban**. Students often write 50% and 75% the wrong way round.",
        },
        {
          type: "keypoints",
          items: [
            "Buffer stock: wheat and rice bought by the FCI at the MSP and stored.",
            "PDS: grain sold through ration (fair price) shops at the issue price to ration card holders.",
            "Ration cards: Antyodaya (poorest), BPL and APL.",
            "Schemes: RPDS 1992, TPDS 1997, AAY and Annapurna 2000, NFSA 2013 (75% rural, 50% urban).",
            "Cooperatives such as Mother Dairy (Delhi), Amul (Gujarat) and grain banks by ADS (Maharashtra) support food security.",
          ],
        },
      ],
      flashcards: [
        { front: "Buffer stock", back: "Stock of wheat and rice procured by the government through the FCI." },
        { front: "Minimum support price (MSP)", back: "Pre-announced price at which the government buys grain from farmers." },
        { front: "Issue price", back: "The lower price at which grain is sold to the poor through ration shops." },
        { front: "PDS", back: "Public Distribution System: distribution of food grains through ration shops." },
        { front: "NFSA 2013 coverage", back: "75% of the rural and 50% of the urban population." },
        { front: "Annapurna Scheme", back: "2000 scheme: free food grain for indigent senior citizens." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which organisation buys and stores food grain for the buffer stock?",
          options: ["Reserve Bank of India", "Food Corporation of India", "NABARD", "NITI Aayog"],
          answer: 1,
          explain: "The FCI procures and stores wheat and rice.",
        },
        {
          kind: "fill",
          q: "Government-regulated ration shops are also called ___ price shops.",
          answer: ["fair"],
          explain: "They are called fair price shops.",
        },
        {
          kind: "truefalse",
          q: "The Antyodaya Anna Yojana was launched in December 2000.",
          answer: true,
          explain: "AAY began in December 2000 for the poorest families.",
        },
        {
          kind: "multi",
          q: "Which are problems of the PDS? (Choose all.)",
          options: ["Overflowing granaries while people go hungry", "Dealers diverting grain to the open market", "Poor-quality grain at some shops", "Grain sold above the market price to the poor"],
          answers: [0, 1, 2],
          explain: "PDS grain is sold below the market price, not above it.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which cooperative is linked with the White Revolution in Gujarat?",
          options: ["Mother Dairy", "Amul", "ADS", "FCI"],
          answer: 1,
          explain: "Amul in Gujarat led the White Revolution in milk.",
        },
        {
          kind: "mcq",
          q: "Under the NFSA 2013, what share of the urban population is covered?",
          options: ["25%", "50%", "75%", "100%"],
          answer: 1,
          explain: "50% urban and 75% rural.",
          difficulty: 2,
          hint: "Villages get the bigger share.",
        },
        {
          kind: "order",
          q: "Put these schemes in time order.",
          items: ["Revamped PDS (1992)", "Targeted PDS (1997)", "Antyodaya Anna Yojana (2000)", "National Food Security Act (2013)"],
          explain: "1992, 1997, 2000, 2013.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Karnataka Economics: Meaning and Concepts of Economics              */
/* ------------------------------------------------------------------ */
const meaningOfEconomics: Topic = {
  slug: "c9-ka-meaning-concepts-economics",
  title: "Meaning and Concepts of Economics",
  icon: "📘",
  description: "Where the word economics comes from, the main definitions (Adam Smith, Marshall, Robbins), micro and macro economics, and basic terms.",
  lessons: [
    {
      slug: "c9-ka-definitions-of-economics",
      title: "Definitions and Basic Concepts of Economics",
      summary: "Origin of the word, wealth, welfare, scarcity and growth definitions, micro and macro economics, and terms like wants, goods, utility, value, price and wealth.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🪙",
          caption: "You have ₹100 of pocket money and want a book, a cricket ball and a film ticket. You cannot have all three. That choice is where economics begins.",
        },
        {
          type: "text",
          md: "The word **economics** comes from the Greek word **oikonomia**: *oikos* means **household** and *nomos* means **management** or law. So at first economics meant **household management**.\n\nIn India, **Kautilya's Arthashastra**, written over 2,000 years ago, already discussed wealth, taxes, trade and how a state should manage its economy.",
        },
        {
          type: "heading",
          text: "Four famous definitions",
        },
        {
          type: "table",
          headers: ["Definition", "Economist and book", "Main idea"],
          rows: [
            ["**Wealth definition**", "**Adam Smith**, *The Wealth of Nations* (**1776**)", "Economics is the **science of wealth**: how a nation produces and grows its wealth. Smith is called the **Father of Economics**."],
            ["**Welfare definition**", "**Alfred Marshall**, *Principles of Economics* (**1890**)", "Economics studies mankind in the ordinary business of life, focusing on the material things needed for **well-being (welfare)**."],
            ["**Scarcity definition**", "**Lionel Robbins** (**1932**)", "Economics studies human behaviour as a relationship between **unlimited ends (wants)** and **scarce means** that have **alternative uses**."],
            ["**Growth definition**", "**Paul Samuelson**", "Economics studies how people and society **choose** to use scarce resources to produce goods **over time** and distribute them."],
          ],
        },
        {
          type: "example",
          title: "Applying Robbins' definition",
          problem: "A farmer in Mandya has 2 acres. She can grow sugarcane or ragi, but not both on the same land at once. Show the three parts of the scarcity definition.",
          steps: [
            "**Unlimited wants (ends)**: she wants income, food for the family, and money for her children's school.",
            "**Scarce means**: she has only 2 acres, limited water and limited money.",
            "**Alternative uses**: the same land can grow sugarcane or ragi.",
            "So she must **choose**. Studying such choices is economics in Robbins' sense.",
          ],
          answer: "Wants are many, land is limited and can be used in different ways, so she must make a choice: that is the scarcity problem.",
        },
        {
          type: "mistake",
          wrong: "Economics is only about money.",
          right: "Economics is about how people use scarce resources (land, time, labour, money) to satisfy their wants, and about human welfare.",
          why: "Money appears everywhere in economics, so it seems to be the subject. But Marshall and Robbins showed that the real subject is human behaviour and choice; money is just one tool.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who is called the Father of Economics?",
              options: ["Alfred Marshall", "Adam Smith", "Lionel Robbins", "Kautilya"],
              answer: 1,
              explain: "Adam Smith, author of The Wealth of Nations (1776).",
            },
          ],
        },
        {
          type: "heading",
          text: "Micro and macro economics",
        },
        {
          type: "table",
          headers: ["Micro economics", "Macro economics"],
          rows: [
            ["Studies **individual units**: one consumer, one firm, one industry.", "Studies the **economy as a whole**."],
            ["Price of a single good, demand of one family, output of one factory.", "National income, total employment, general price level, inflation."],
            ["Like looking at one tree.", "Like looking at the whole forest."],
          ],
        },
        {
          type: "text",
          md: "The terms *micro* and *macro* economics were first used by the Norwegian economist **Ragnar Frisch** in **1933**. *Micro* comes from the Greek for small and *macro* from the Greek for large.",
        },
        {
          type: "list",
          items: [
            "**Wants**: human desires for goods and services. They are **unlimited** and keep coming back.",
            "**Goods**: things that satisfy wants. **Free goods** (air, sunlight) are plentiful and have no price; **economic goods** (rice, a bicycle) are scarce and have a price. **Consumer goods** satisfy wants directly; **capital (producer) goods** help produce other goods.",
            "**Utility**: the **want-satisfying power** of a good. Water has utility for a thirsty person.",
            "**Value**: *value in use* is the utility of a good; *value in exchange* is what it can be exchanged for.",
            "**Price**: value in exchange expressed in **money**.",
            "**Wealth**: in economics, goods that have **utility, scarcity and transferability** (ownership can be passed on).",
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each definition to its economist.",
            pairs: [
              ["Science of wealth", "Adam Smith"],
              ["Material welfare of mankind", "Alfred Marshall"],
              ["Unlimited ends and scarce means with alternative uses", "Lionel Robbins"],
              ["Choice over time and growth", "Paul Samuelson"],
            ],
            explain: "Smith: wealth (1776). Marshall: welfare (1890). Robbins: scarcity (1932). Samuelson: growth.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For a definition question, give the **economist's name, the book or year, and the key words** (wealth / welfare / scarcity and choice). Answers that give only the idea without the name often lose a mark.",
        },
        {
          type: "keypoints",
          items: [
            "Economics comes from the Greek oikonomia: household management.",
            "Adam Smith (1776): wealth; Marshall (1890): welfare; Robbins (1932): scarcity; Samuelson: growth.",
            "Micro economics studies individual units; macro economics studies the whole economy (terms from Ragnar Frisch, 1933).",
            "Key terms: wants, goods (free and economic), utility, value, price and wealth.",
          ],
        },
      ],
      flashcards: [
        { front: "Oikonomia", back: "Greek for household management: oikos (house) + nomos (management)." },
        { front: "Father of Economics", back: "Adam Smith, The Wealth of Nations, 1776." },
        { front: "Robbins' scarcity definition", back: "Human behaviour as a relationship between ends and scarce means with alternative uses." },
        { front: "Micro economics", back: "Study of individual units such as a consumer, a firm or the price of one good." },
        { front: "Macro economics", back: "Study of the economy as a whole: national income, employment, price level." },
        { front: "Utility", back: "The want-satisfying power of a good or service." },
        { front: "Free goods vs economic goods", back: "Free goods are plentiful and have no price (air); economic goods are scarce and have a price (rice)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The welfare definition of economics was given by:",
          options: ["Adam Smith", "Alfred Marshall", "Lionel Robbins", "Ragnar Frisch"],
          answer: 1,
          explain: "Marshall's Principles of Economics (1890) gave the welfare definition.",
        },
        {
          kind: "fill",
          q: "Adam Smith's famous book, The Wealth of Nations, was published in ___.",
          answer: ["1776"],
          explain: "It was published in 1776.",
        },
        {
          kind: "truefalse",
          q: "The study of national income is part of micro economics.",
          answer: false,
          explain: "National income covers the whole economy, so it is macro economics.",
          difficulty: 2,
          hint: "Is it one unit or the whole economy?",
        },
        {
          kind: "mcq",
          q: "Which of these is a free good?",
          options: ["Rice", "Sunlight", "A bicycle", "Electricity"],
          answer: 1,
          explain: "Sunlight is plentiful and has no price. Electricity is produced and paid for.",
        },
        {
          kind: "order",
          q: "Put the definitions in the order they were given.",
          items: ["Wealth definition (Adam Smith)", "Welfare definition (Alfred Marshall)", "Scarcity definition (Lionel Robbins)"],
          explain: "1776, 1890, 1932.",
        },
        {
          kind: "multi",
          q: "Which are features of wealth in economics? (Choose all.)",
          options: ["Utility", "Scarcity", "Transferability", "Being free of cost"],
          answers: [0, 1, 2],
          explain: "Free goods are not wealth because they are not scarce.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Price is:",
          options: ["Value in use", "Value in exchange expressed in money", "The utility of a good", "The cost of producing a good"],
          answer: 1,
          explain: "Price is value in exchange measured in money.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Karnataka Economics: Natural and Human Resources                    */
/* ------------------------------------------------------------------ */
const naturalResources: Topic = {
  slug: "c9-ka-natural-resources",
  title: "Natural Resources",
  icon: "⛰️",
  description: "What natural resources are, how they are classified, their role in the economy, and why they must be conserved.",
  lessons: [
    {
      slug: "c9-ka-natural-resources-conservation",
      title: "Natural Resources and Their Conservation",
      summary: "Meaning and types of natural resources, their importance for economic development, problems of overuse, and conservation and sustainable development.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Think of what built your house: sand and stone from the earth, cement made from limestone, steel made from iron ore, wood from trees. All of these come from nature.\n\n**Natural resources** are things found in nature that people use to meet their needs, such as **land, water, forests, minerals, soil and energy sources**. They are gifts of nature; people do not make them, but people decide how to use them.",
        },
        {
          type: "table",
          headers: ["Basis", "Type", "Examples"],
          rows: [
            ["Can it be replaced?", "**Renewable**: replaced naturally or can be regrown", "Sunlight, wind, water, forests, fish"],
            ["", "**Non-renewable**: limited stock, takes millions of years to form", "Coal, petroleum, natural gas, iron ore, gold"],
            ["Is it living?", "**Biotic**: from living things", "Forests, animals, fish"],
            ["", "**Abiotic**: non-living", "Soil, rocks, minerals, water"],
          ],
        },
        {
          type: "heading",
          text: "Why natural resources matter for the economy",
        },
        {
          type: "list",
          items: [
            "**Agriculture** depends on land, soil and water.",
            "**Industries** need raw materials (iron ore for steel, cotton for cloth) and energy (coal, water power).",
            "**Energy**: rivers give hydroelectric power; coal and gas give thermal power; sunlight and wind give clean energy.",
            "**Jobs and income**: mining, fishing and forestry employ many people.",
          ],
        },
        {
          type: "text",
          md: "Karnataka gives good examples. **Iron ore** is mined in districts such as **Ballari** and **Chitradurga**. Gold is mined at **Hutti** in **Raichur** district. The **Sharavathi** river in Shivamogga district powers a major hydroelectric project near **Jog Falls**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these is a non-renewable resource?",
              options: ["Solar energy", "Forests", "Petroleum", "Wind"],
              answer: 2,
              explain: "Petroleum took millions of years to form and its stock is limited.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Renewable resources like water and forests can never run out, so we can use them as much as we like.",
          right: "Renewable resources can renew, but only if we use them more slowly than they recover; otherwise they too can be exhausted or spoilt.",
          why: "\"Renewable\" sounds like \"endless\". But if trees are cut faster than they grow, or groundwater is pumped faster than rain refills it, the resource is lost locally.",
        },
        {
          type: "heading",
          text: "Conservation and sustainable development",
        },
        {
          type: "text",
          md: "Rapid population growth, careless mining, deforestation and pollution are using up resources fast. **Conservation** means using resources carefully and wisely, so that they last.\n\n**Sustainable development** is development that **meets the needs of the present without harming the ability of future generations to meet their own needs**. This idea was made popular by the **Brundtland Commission Report** of **1987**.",
        },
        {
          type: "example",
          title: "Planning a conservation answer",
          problem: "Suggest three ways to conserve water in a village.",
          steps: [
            "Catch rain where it falls: **rainwater harvesting** from rooftops into tanks or wells.",
            "Use less for each crop: **drip and sprinkler irrigation** instead of flooding fields.",
            "Repair and desilt old **village tanks (kere)** so they store more water.",
          ],
          answer: "Rainwater harvesting, drip or sprinkler irrigation, and restoring village tanks.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Renewable or non-renewable?",
            groups: ["Renewable", "Non-renewable"],
            items: [
              { text: "Wind", group: 0, hint: "It keeps blowing." },
              { text: "Coal", group: 1, hint: "Formed over millions of years." },
              { text: "Forests", group: 0, hint: "Trees can be regrown." },
              { text: "Iron ore", group: 1, hint: "A mineral with a limited stock." },
              { text: "Solar energy", group: 0, hint: "The sun shines every day." },
              { text: "Natural gas", group: 1, hint: "A fossil fuel." },
            ],
            explain: "Renewable resources are replaced by nature in a short time. Minerals and fossil fuels take millions of years to form, so they are non-renewable.",
          },
        },
        {
          type: "callout",
          tone: "note",
          title: "Human resources",
          md: "The second half of this chapter, **human resources**, is covered in the **People as Resource** lessons: human capital, education, health and unemployment. Study them next.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "When you define sustainable development, include **both** halves: the needs of the **present** and of **future generations**. Writing only \"using resources carefully\" is incomplete.",
        },
        {
          type: "keypoints",
          items: [
            "Natural resources are gifts of nature such as land, water, forests, minerals and energy.",
            "Renewable vs non-renewable; biotic vs abiotic.",
            "They support farming, industry, energy and jobs; e.g. Ballari iron ore, Hutti gold, Sharavathi hydro power.",
            "Conservation means wise use; sustainable development meets present needs without harming future generations (Brundtland Report, 1987).",
          ],
        },
      ],
      flashcards: [
        { front: "Natural resources", back: "Things found in nature that people use, e.g. land, water, forests, minerals." },
        { front: "Renewable resource", back: "One replaced naturally in a short time, e.g. sunlight, wind, forests." },
        { front: "Non-renewable resource", back: "One with a limited stock that takes millions of years to form, e.g. coal, petroleum." },
        { front: "Sustainable development", back: "Meeting present needs without harming future generations' ability to meet theirs." },
        { front: "Hutti", back: "Gold mines in Raichur district, Karnataka." },
        { front: "Brundtland Report", back: "1987 report that popularised the idea of sustainable development." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which pair is correctly matched?",
          options: ["Coal: renewable", "Forests: biotic", "Wind: non-renewable", "Soil: biotic"],
          answer: 1,
          explain: "Forests come from living things, so they are biotic. Coal is non-renewable, wind is renewable, soil is abiotic.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Gold is mined at ___ in Raichur district of Karnataka.",
          answer: ["Hutti"],
          explain: "The Hutti gold mines are in Raichur district.",
        },
        {
          kind: "truefalse",
          q: "Renewable resources can be exhausted if they are used faster than they are replaced.",
          answer: true,
          explain: "For example, cutting trees faster than they grow destroys a forest.",
        },
        {
          kind: "multi",
          q: "Which are ways of conserving natural resources? (Choose all.)",
          options: ["Rainwater harvesting", "Using solar energy", "Afforestation", "Burning more coal"],
          answers: [0, 1, 2],
          explain: "Burning more coal uses up a non-renewable resource.",
        },
        {
          kind: "mcq",
          q: "Sustainable development means:",
          options: ["Using all resources now", "Meeting present needs without harming future generations", "Stopping all development", "Using only non-renewable resources"],
          answer: 1,
          explain: "It balances the needs of today and tomorrow.",
        },
        {
          kind: "mcq",
          q: "Which Karnataka river powers a major hydroelectric project near Jog Falls?",
          options: ["Kaveri", "Sharavathi", "Tungabhadra", "Krishna"],
          answer: 1,
          explain: "Jog Falls is on the Sharavathi river.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Karnataka Business Studies: Business and Its Types                  */
/* ------------------------------------------------------------------ */
const businessTypes: Topic = {
  slug: "c9-ka-business-and-its-types",
  title: "Business and Its Types",
  icon: "🏪",
  description: "Economic activities, the meaning and features of business, industry and commerce, kinds of trade, and forms of business organisation.",
  lessons: [
    {
      slug: "c9-ka-business-industry-commerce",
      title: "Business, Industry and Commerce",
      summary: "Business, profession and employment; features of business; types of industry; commerce as trade plus aids to trade; and internal and external trade.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "Walk down a market street in Hubballi. A shopkeeper sells clothes, a doctor treats patients, and a clerk works in an office for a salary. All three earn money, but they do three different kinds of **economic activity**.",
        },
        {
          type: "table",
          headers: ["Activity", "What it is", "Earns", "Example"],
          rows: [
            ["**Business**", "Regular production or buying and selling of goods and services to earn profit", "**Profit**", "A shopkeeper, a factory owner"],
            ["**Profession**", "Giving specialised services that need special training and a qualification", "**Fee**", "A doctor, a lawyer, a chartered accountant"],
            ["**Employment**", "Working for another person or firm under a contract", "**Salary or wages**", "A bank clerk, a factory worker"],
          ],
        },
        {
          type: "text",
          md: "**Features of business**: it deals in **goods and services**; there is **buying and selling** or exchange; it is done **regularly**, not once; its main aim is **profit**; and it always carries **risk**, because the future is uncertain.",
        },
        {
          type: "mistake",
          wrong: "Selling your old bicycle once to a friend is a business.",
          right: "It is not a business, because a single sale is not a regular activity.",
          why: "Business needs regular dealings for profit. A one-time sale of a personal item has an exchange but lacks regularity, so it is not business.",
        },
        {
          type: "heading",
          text: "Business = industry + commerce",
        },
        {
          type: "table",
          headers: ["Type of industry", "Meaning", "Examples"],
          rows: [
            ["**Extractive**", "Takes products from nature", "Mining, fishing, lumbering"],
            ["**Genetic**", "Breeds and rears plants and animals for sale", "Nurseries, poultry, dairy, fish hatcheries"],
            ["**Manufacturing**", "Turns raw materials into finished goods", "Sugar, steel, cloth, silk saris"],
            ["**Construction**", "Builds structures", "Roads, bridges, buildings, dams"],
            ["**Service**", "Provides services", "Hotels, transport, hospitals"],
          ],
        },
        {
          type: "text",
          md: "**Commerce** covers all activities that bring goods from the producer to the consumer. Commerce = **trade + aids to trade**.\n\n**Trade** is buying and selling. **Aids to trade** are services that remove the hindrances in trade: **transport** (place), **warehousing** (time), **banking** (finance), **insurance** (risk), **advertising** (information) and **communication**.",
        },
        {
          type: "table",
          headers: ["Internal (home) trade", "External (foreign) trade"],
          rows: [
            ["Within one country", "Between countries"],
            ["**Wholesale trade**: buying in large quantities from producers and selling to retailers", "**Import trade**: buying goods from another country"],
            ["**Retail trade**: selling in small quantities to consumers", "**Export trade**: selling goods to another country"],
            ["", "**Entrepot trade**: importing goods to re-export them to another country"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which aid to trade removes the hindrance of risk?",
              options: ["Transport", "Insurance", "Warehousing", "Advertising"],
              answer: 1,
              explain: "Insurance covers loss from fire, theft or accidents. Transport removes place, warehousing removes time, advertising removes lack of information.",
            },
          ],
        },
        {
          type: "example",
          title: "Following a product",
          problem: "Trace a Mysuru silk sari from the weaver to a buyer in Delhi. Name the business activities involved.",
          steps: [
            "Rearing silkworms: **genetic industry**.",
            "Weaving the sari: **manufacturing industry**.",
            "A wholesaler buys many saris: **wholesale trade**; they are stored in a godown: **warehousing**.",
            "They go by truck or train: **transport**, insured against damage: **insurance**.",
            "A Delhi shop sells one sari to a customer: **retail trade**.",
          ],
          answer: "Industry makes the sari; commerce (trade plus transport, warehousing and insurance) brings it to the buyer.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each aid to trade to the hindrance it removes.",
            pairs: [
              ["Transport", "Place: producer and buyer are far apart"],
              ["Warehousing", "Time: goods are made before they are needed"],
              ["Banking", "Finance: shortage of money"],
              ["Insurance", "Risk: loss by fire, theft or accident"],
              ["Advertising", "Information: buyers do not know about the goods"],
            ],
            explain: "Each aid to trade solves one problem that would stop goods reaching consumers.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Write the formula **Commerce = Trade + Aids to trade** and then list the aids. Students often list trade as one of the aids, which is wrong.",
        },
        {
          type: "keypoints",
          items: [
            "Economic activities: business (profit), profession (fee), employment (salary).",
            "Business features: goods and services, exchange, regularity, profit motive, risk.",
            "Industry types: extractive, genetic, manufacturing, construction, service.",
            "Commerce = trade + aids to trade (transport, warehousing, banking, insurance, advertising, communication).",
            "Internal trade: wholesale and retail; external trade: import, export and entrepot.",
          ],
        },
      ],
      flashcards: [
        { front: "Business", back: "Regular production or buying and selling of goods and services for profit." },
        { front: "Profession", back: "Specialised service needing special training; earns a fee." },
        { front: "Commerce", back: "Trade plus aids to trade." },
        { front: "Genetic industry", back: "Breeding and rearing plants and animals for sale, e.g. poultry, nurseries." },
        { front: "Entrepot trade", back: "Importing goods in order to re-export them to another country." },
        { front: "Retail trade", back: "Selling goods in small quantities to consumers." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A doctor treating patients for a fee is engaged in:",
          options: ["Business", "Profession", "Employment", "Trade"],
          answer: 1,
          explain: "Specialised services needing a qualification, paid by a fee, make a profession.",
        },
        {
          kind: "fill",
          q: "Commerce = trade + ___ to trade.",
          answer: ["aids", "aid"],
          explain: "Commerce is trade plus aids to trade.",
        },
        {
          kind: "truefalse",
          q: "Mining is an example of genetic industry.",
          answer: false,
          explain: "Mining takes minerals from nature, so it is extractive industry.",
          difficulty: 2,
          hint: "Is anything being bred or reared?",
        },
        {
          kind: "multi",
          q: "Which are aids to trade? (Choose all.)",
          options: ["Banking", "Insurance", "Warehousing", "Retail trade"],
          answers: [0, 1, 2],
          explain: "Retail trade is a part of trade itself, not an aid to it.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "India imports goods and then sends them on to Nepal. This is:",
          options: ["Import trade", "Export trade", "Entrepot trade", "Retail trade"],
          answer: 2,
          explain: "Importing in order to re-export is entrepot trade.",
        },
        {
          kind: "order",
          q: "Order the journey of goods from producer to consumer.",
          items: ["Manufacturer makes goods", "Wholesaler buys in bulk", "Retailer buys smaller lots", "Consumer buys one item"],
          explain: "Goods move from producer to wholesaler to retailer to consumer.",
        },
      ],
    },
    {
      slug: "c9-ka-forms-of-business-organisation",
      title: "Forms of Business Organisation",
      summary: "Sole proprietorship, partnership, joint Hindu family business, cooperative society and joint stock company: features, merits and limits.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "text",
          md: "A business can be owned by one person, by a few friends, by a family, by a group of members, or by thousands of shareholders. The way ownership and control are arranged is called the **form of business organisation**.",
        },
        {
          type: "table",
          headers: ["Form", "Owned by", "Liability", "Example"],
          rows: [
            ["**Sole proprietorship**", "One person who owns, manages and takes all profit and risk", "**Unlimited**", "A tea stall, a small kirana shop"],
            ["**Partnership**", "Two or more persons who share profit by agreement (Indian Partnership Act, **1932**)", "Unlimited (for ordinary partners)", "A firm of two chartered accountants"],
            ["**Joint Hindu family business**", "Members of a Hindu Undivided Family; managed by the eldest member, the **Karta**", "Karta unlimited; others limited to their share", "A family jewellery shop run over generations"],
            ["**Cooperative society**", "Members who join voluntarily for mutual help; one member, one vote", "Limited", "A milk producers' cooperative, a cooperative bank"],
            ["**Joint stock company**", "Shareholders; managed by a board of directors; registered under the **Companies Act**", "**Limited** to the value of shares", "A large steel or software company"],
          ],
        },
        {
          type: "text",
          md: "**Unlimited liability** means that if the business cannot pay its debts, the owner's **personal property** (house, savings) can be used to pay them. **Limited liability** means a shareholder can lose at most the money put into the shares.\n\nA company is a **separate legal entity**: it can own property and be sued in its own name, and it continues even if shareholders change. This is called **perpetual succession**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Who manages a joint Hindu family business?",
              options: ["The youngest member", "The Karta", "A board of directors", "Elected members"],
              answer: 1,
              explain: "The eldest member, called the Karta, manages it.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "In a company, if the business fails, shareholders must sell their houses to pay its debts.",
          right: "Shareholders of a company have limited liability: they lose at most the value of their shares.",
          why: "This mix-up comes from sole proprietorships and partnerships, where liability is unlimited. A company is a separate legal person, so its debts are its own.",
        },
        {
          type: "example",
          title: "Choosing a form",
          problem: "Three situations: (a) Asha wants to open a small tailoring shop alone. (b) 200 dairy farmers in a village want to sell milk together. (c) A group wants to raise crores of rupees from the public for a cement factory. Which form suits each?",
          steps: [
            "(a) Small capital, one owner, quick decisions: **sole proprietorship**.",
            "(b) Many members, mutual help, one vote each: **cooperative society**.",
            "(c) Huge capital from many people, limited liability: **public joint stock company**.",
          ],
          answer: "(a) Sole proprietorship; (b) cooperative society; (c) joint stock company.",
        },
        {
          type: "list",
          items: [
            "**Sole proprietorship**: easy to start, quick decisions, secrecy; but limited capital and unlimited liability.",
            "**Partnership**: more capital and skills than one person; but unlimited liability and possible disputes between partners.",
            "**Cooperative society**: motto \"each for all and all for each\"; service, not profit, is the main aim; but limited capital.",
            "**Joint stock company**: large capital, limited liability, long life; but many legal formalities and less secrecy.",
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Unlimited or limited liability?",
            groups: ["Unlimited liability", "Limited liability"],
            items: [
              { text: "Sole proprietor", group: 0, hint: "Personal property is at risk." },
              { text: "Ordinary partner", group: 0, hint: "Partners can be made to pay the firm's debts." },
              { text: "Company shareholder", group: 1, hint: "Loses only the share value." },
              { text: "Cooperative member", group: 1, hint: "Members' liability is usually limited." },
              { text: "Karta of a Hindu family business", group: 0, hint: "The manager's liability has no limit." },
            ],
            explain: "Sole proprietors, ordinary partners and the Karta have unlimited liability. Company shareholders and cooperative members have limited liability.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "In a \"distinguish between\" question (e.g. sole proprietorship vs company), write answers in a **two-column table** with points on ownership, liability, capital and life. Examiners award a mark for each matched pair.",
        },
        {
          type: "keypoints",
          items: [
            "Five forms: sole proprietorship, partnership, joint Hindu family business, cooperative society, joint stock company.",
            "Unlimited liability: sole proprietor, ordinary partners, Karta. Limited: company shareholders, cooperative members.",
            "Partnership is governed by the Indian Partnership Act, 1932; companies by the Companies Act.",
            "A company is a separate legal entity with perpetual succession.",
            "Cooperatives aim at service: each for all and all for each.",
          ],
        },
      ],
      flashcards: [
        { front: "Sole proprietorship", back: "Business owned and run by one person, who takes all profit and risk." },
        { front: "Unlimited liability", back: "Owner's personal property can be used to pay business debts." },
        { front: "Karta", back: "The eldest member who manages a joint Hindu family business." },
        { front: "Cooperative motto", back: "Each for all and all for each." },
        { front: "Perpetual succession", back: "A company continues to exist even if its shareholders change or die." },
        { front: "Indian Partnership Act", back: "1932." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which form of business raises the largest capital from the public?",
          options: ["Sole proprietorship", "Partnership", "Joint stock company", "Joint Hindu family business"],
          answer: 2,
          explain: "A public company sells shares to thousands of people.",
        },
        {
          kind: "truefalse",
          q: "A cooperative society follows the principle of one member, one vote.",
          answer: true,
          explain: "Every member has one vote, however many shares they hold.",
        },
        {
          kind: "fill",
          q: "Partnership in India is governed by the Indian Partnership Act of ___.",
          answer: ["1932"],
          explain: "The Act was passed in 1932.",
        },
        {
          kind: "mcq",
          q: "A shareholder bought shares worth ₹10,000. The company fails with huge debts. The most she can lose is:",
          options: ["Nothing", "₹10,000", "Her house", "All the company's debts"],
          answer: 1,
          explain: "Limited liability: she loses at most the value of her shares.",
          difficulty: 2,
          hint: "Think limited liability.",
        },
        {
          kind: "multi",
          q: "Which are merits of a sole proprietorship? (Choose all.)",
          options: ["Easy to start", "Quick decisions", "Secrecy of business", "Limited liability"],
          answers: [0, 1, 2],
          explain: "A sole proprietor has unlimited, not limited, liability.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which feature of a company means it continues even after its owners change?",
          options: ["Unlimited liability", "Perpetual succession", "Secrecy", "One member, one vote"],
          answer: 1,
          explain: "Perpetual succession: the company's life does not depend on its members.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Karnataka Business Studies: Banks and Their Services                */
/* ------------------------------------------------------------------ */
const banks: Topic = {
  slug: "c9-ka-banks-and-their-services",
  title: "Banks and Their Services",
  icon: "🏦",
  description: "What a bank is, the kinds of banks in India, the primary and secondary functions of banks, and modern banking services.",
  lessons: [
    {
      slug: "c9-ka-types-and-functions-of-banks",
      title: "Types and Functions of Banks",
      summary: "Meaning of a bank, the RBI and other types of banks, nationalisation, primary and secondary functions, and modern services such as ATMs, NEFT, RTGS and UPI.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🏦",
          caption: "Your grandmother kept savings in a tin box; today a mobile phone can send money across India in seconds. Banks made that journey possible.",
        },
        {
          type: "text",
          md: "A **bank** is a financial institution that **accepts deposits** from the public and **lends money** to those who need it. The word is often traced to the Italian *banco*, a bench on which early money-lenders did business.\n\nThe **Banking Regulation Act, 1949** describes banking as accepting deposits of money from the public for lending or investment, which are repayable on demand or otherwise and can be withdrawn by cheque, draft or order.",
        },
        {
          type: "table",
          headers: ["Type of bank", "Role", "Example"],
          rows: [
            ["**Central bank**", "The 'bank of banks': issues currency notes, controls credit, banker to the government", "**Reserve Bank of India** (set up on 1 April **1935**, nationalised in **1949**, headquarters in Mumbai)"],
            ["**Commercial banks**", "Accept deposits from the public and give loans for business and personal needs", "State Bank of India, Canara Bank, private banks"],
            ["**Cooperative banks**", "Owned by members; give cheap credit mainly to farmers and small traders", "District central cooperative banks"],
            ["**Regional Rural Banks (RRBs)**", "Credit to small farmers, artisans and labourers in villages (started in **1975**)", "Karnataka Gramin Bank"],
            ["**Development banks**", "Long-term finance for agriculture, industry or trade", "NABARD (1982), SIDBI, EXIM Bank"],
          ],
        },
        {
          type: "text",
          md: "In **1969**, the Government of India **nationalised 14 major commercial banks**, and **6 more in 1980**. The aim was to take banking to villages and give loans to farmers and small businesses, not just to big industry. The **State Bank of India** was formed in **1955** from the Imperial Bank of India.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which is India's central bank?",
              options: ["State Bank of India", "Reserve Bank of India", "NABARD", "Canara Bank"],
              answer: 1,
              explain: "The RBI is the central bank. SBI is the largest commercial bank.",
            },
          ],
        },
        {
          type: "heading",
          text: "Functions of a commercial bank",
        },
        {
          type: "table",
          headers: ["Primary functions", "Secondary functions"],
          rows: [
            ["**Accepting deposits**: savings, current, fixed and recurring deposit accounts", "**Agency services**: collecting cheques, paying bills and insurance premiums, buying and selling shares for customers"],
            ["**Lending money**: loans, cash credit, overdraft, discounting bills of exchange", "**General utility services**: safe deposit lockers, demand drafts, ATM, debit and credit cards"],
          ],
        },
        {
          type: "list",
          items: [
            "**Savings account**: for individuals to save; earns interest; limited withdrawals.",
            "**Current account**: for businesses; many transactions a day; usually no interest; overdraft can be allowed.",
            "**Fixed deposit**: money kept for a fixed period; higher interest; cannot be withdrawn freely before maturity.",
            "**Recurring deposit**: a fixed sum deposited every month for a fixed period.",
          ],
        },
        {
          type: "example",
          title: "Matching an account to a need",
          problem: "(a) A shopkeeper deposits and withdraws money many times a day. (b) A clerk wants to save ₹1,000 every month for 3 years. (c) A retired teacher wants the highest interest on ₹2 lakh for 5 years. Which account suits each?",
          steps: [
            "(a) Many daily transactions → **current account**.",
            "(b) Same sum every month for a fixed period → **recurring deposit**.",
            "(c) Lump sum, fixed period, higher interest → **fixed deposit**.",
          ],
          answer: "(a) Current account; (b) recurring deposit; (c) fixed deposit.",
        },
        {
          type: "mistake",
          wrong: "A bank keeps all the money we deposit locked in its strong room.",
          right: "A bank keeps only a small part of deposits as cash and lends most of it to borrowers, earning interest.",
          why: "We can withdraw whenever we want, so it feels as if the money is just stored. In fact, not everyone withdraws at once, so banks lend most deposits; the interest they charge borrowers is higher than what they pay depositors.",
        },
        {
          type: "text",
          md: "**Modern banking services** make banking faster: **ATMs**, **internet banking**, **mobile banking**, **NEFT** (National Electronic Funds Transfer), **RTGS** (Real Time Gross Settlement, for large sums) and **UPI** (Unified Payments Interface, launched in **2016**), which lets you pay instantly using a phone.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Primary or secondary function of a bank?",
            groups: ["Primary function", "Secondary function"],
            items: [
              { text: "Accepting fixed deposits", group: 0, hint: "Taking deposits is a core job." },
              { text: "Giving a home loan", group: 0, hint: "Lending is a core job." },
              { text: "Renting out a safe deposit locker", group: 1, hint: "A general utility service." },
              { text: "Paying a customer's electricity bill", group: 1, hint: "An agency service." },
              { text: "Allowing an overdraft", group: 0, hint: "This is a form of lending." },
              { text: "Issuing a demand draft", group: 1, hint: "A utility service." },
            ],
            explain: "Accepting deposits and lending are primary functions. Agency services and general utility services are secondary functions.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Remember the two primary functions as **\"Accept and Lend\"**. A common error is listing lockers or ATMs as primary functions: they are **secondary (general utility)** services.",
        },
        {
          type: "keypoints",
          items: [
            "A bank accepts deposits and lends money; banking is defined in the Banking Regulation Act, 1949.",
            "Types: central bank (RBI, 1935), commercial, cooperative, regional rural (1975) and development banks (e.g. NABARD, 1982).",
            "14 banks were nationalised in 1969 and 6 more in 1980.",
            "Primary functions: accepting deposits and lending. Secondary: agency and general utility services.",
            "Modern services: ATM, internet and mobile banking, NEFT, RTGS and UPI (2016).",
          ],
        },
      ],
      flashcards: [
        { front: "Bank", back: "A financial institution that accepts deposits and lends money." },
        { front: "Reserve Bank of India", back: "India's central bank; set up in 1935, nationalised in 1949, headquarters in Mumbai." },
        { front: "Bank nationalisation", back: "14 banks in 1969 and 6 more in 1980." },
        { front: "Primary functions of a bank", back: "Accepting deposits and lending money." },
        { front: "Current account", back: "Account for businesses with many daily transactions; usually no interest." },
        { front: "Recurring deposit", back: "A fixed sum deposited every month for a fixed period." },
        { front: "UPI", back: "Unified Payments Interface (2016): instant payments using a mobile phone." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which account is best for a trader with many transactions every day?",
          options: ["Savings account", "Current account", "Fixed deposit", "Recurring deposit"],
          answer: 1,
          explain: "A current account allows unlimited daily transactions.",
        },
        {
          kind: "fill",
          q: "The Reserve Bank of India was set up in the year ___.",
          answer: ["1935"],
          explain: "It began on 1 April 1935 and was nationalised in 1949.",
        },
        {
          kind: "truefalse",
          q: "Providing safe deposit lockers is a primary function of a bank.",
          answer: false,
          explain: "Lockers are a general utility service, a secondary function.",
          difficulty: 2,
          hint: "Primary = accept and lend.",
        },
        {
          kind: "numeric",
          q: "How many commercial banks were nationalised in India in 1969?",
          answer: 14,
          explain: "14 banks in 1969; 6 more in 1980.",
        },
        {
          kind: "multi",
          q: "Which are agency services of a bank? (Choose all.)",
          options: ["Collecting cheques for customers", "Paying insurance premiums for customers", "Buying and selling shares for customers", "Accepting savings deposits"],
          answers: [0, 1, 2],
          explain: "Accepting deposits is a primary function, not an agency service.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Put these banking events in time order.",
          items: ["RBI set up (1935)", "SBI formed (1955)", "14 banks nationalised (1969)", "Regional Rural Banks begin (1975)", "UPI launched (2016)"],
          explain: "1935, 1955, 1969, 1975, 2016.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which bank mainly gives long-term credit for agriculture and rural development?",
          options: ["RBI", "NABARD", "EXIM Bank", "A foreign bank"],
          answer: 1,
          explain: "NABARD (1982) is the apex bank for agriculture and rural development.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [
  forestSociety,
  pastoralists,
  palampur,
  peopleAsResource,
  poverty,
  foodSecurity,
  meaningOfEconomics,
  naturalResources,
  businessTypes,
  banks,
];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Forest Society and Colonialism": "c9-forest-society-colonialism",
  "9:Pastoralists in the Modern World": "c9-pastoralists-modern-world",
  "9:The Story of Village Palampur": "c9-story-of-village-palampur",
  "9:People as Resource": "c9-people-as-resource",
  "9:Poverty as a Challenge": "c9-poverty-as-a-challenge",
  "9:Food Security in India": "c9-food-security-in-india",
  "9:Meaning and Concepts of Economics": "c9-ka-meaning-concepts-economics",
  "9:Natural and Human Resources": ["c9-ka-natural-resources", "c9-people-as-resource"],
  "9:Business and Its Types": "c9-ka-business-and-its-types",
  "9:Banks and Their Services": "c9-ka-banks-and-their-services",
};
