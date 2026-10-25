import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

/* ------------------------------------------------------------------ */
/* Chapter 1: India – Size and Location                                */
/* ------------------------------------------------------------------ */
const sizeLocation: Topic = {
  slug: "c9-india-size-location",
  title: "India – Size and Location",
  icon: "🧭",
  description: "Where India lies on the globe, how big it is, its neighbours and why its location matters.",
  lessons: [
    {
      slug: "c9-india-extent-and-time",
      title: "India's Location, Extent and Standard Time",
      summary: "Latitudes and longitudes of the mainland, area, the Tropic of Cancer, Indian Standard Time and why the Gujarat–Arunachal time gap is two hours.",
      minutes: 15,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🌅",
          caption: "The sun rises over Arunachal Pradesh almost two hours before it rises over the west coast of Gujarat. Yet every clock in India shows the same time.",
        },
        {
          type: "text",
          md: "India lies fully in the **Northern Hemisphere**. It is also fully in the **Eastern Hemisphere**, because all of it lies east of the Prime Meridian (0°).\n\nTo describe where a country is, we use two kinds of imaginary lines. **Latitudes** run east–west and tell how far north or south of the Equator a place is. **Longitudes** (meridians) run north–south and tell how far east or west of the Prime Meridian a place is.",
        },
        {
          type: "table",
          headers: ["Fact", "India (mainland)"],
          rows: [
            ["Latitudinal extent", "8°4'N to 37°6'N"],
            ["Longitudinal extent", "68°7'E to 97°25'E"],
            ["Line that cuts India into two almost equal halves", "**Tropic of Cancer** (23°30'N)"],
            ["Area", "3.28 million sq km, about **2.4%** of the world's land area"],
            ["Rank by area", "**Seventh** largest country in the world"],
            ["Land boundary", "about 15,200 km"],
            ["Coastline (mainland + Andaman and Nicobar + Lakshadweep)", "7,516.6 km"],
          ],
        },
        {
          type: "text",
          md: "South of the mainland lie two island groups: **Andaman and Nicobar Islands** in the Bay of Bengal and **Lakshadweep Islands** in the Arabian Sea. The southern tip of the mainland is **Kanniyakumari**. The southernmost point of the whole Indian Union was **Indira Point** in the Nicobar Islands; it was submerged by the 2004 tsunami.\n\nBoth the latitudinal and the longitudinal extent of the mainland are about **30 degrees**. Yet on a map India looks longer north–south than east–west. This is because the distance between two longitudes shrinks as we move away from the Equator towards the poles, while the distance between two latitudes stays the same.",
        },
        {
          type: "heading",
          text: "Indian Standard Time",
        },
        {
          type: "text",
          md: "The Earth turns 360° in 24 hours, so the sun appears to move 1° of longitude every **4 minutes**. Places in the east see sunrise earlier than places in the west.\n\nTo avoid having different times in different States, India uses one **Standard Meridian**: **82°30'E**, which passes through **Mirzapur** in Uttar Pradesh. The local time along this meridian is **Indian Standard Time (IST)**, and it is used across the whole country. IST is 5 hours 30 minutes ahead of Greenwich Mean Time (82.5° × 4 min = 330 min).",
        },
        {
          type: "example",
          title: "Why the time gap is two hours",
          problem: "Show why the sun rises about two hours earlier in Arunachal Pradesh than in western Gujarat.",
          steps: [
            "Take the longitudinal extent of the mainland: from about 68°E to about 97°E, that is nearly **30°** of longitude.",
            "The sun appears to cross 1° of longitude in 4 minutes.",
            "So 30° × 4 minutes = **120 minutes**.",
            "120 minutes = 2 hours. The eastern end sees sunrise about 2 hours before the western end.",
          ],
          answer: "About 30° of longitude × 4 minutes per degree = 120 minutes, so there is a time lag of about two hours.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The Standard Meridian of India, 82°30'E, passes through:",
              options: ["Mirzapur", "Delhi", "Nagpur", "Prayagraj"],
              answer: 0,
              explain: "The meridian 82°30'E passes through **Mirzapur** in Uttar Pradesh. Students often write Prayagraj (Allahabad), which is close by, or Nagpur, which is near the centre of India — both are wrong in the board exam.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "India is wider from north to south because its latitudinal extent is bigger than its longitudinal extent.",
          right: "Both extents are about 30 degrees. India only *looks* longer north–south because the east–west distance covered by one degree of longitude is smaller away from the Equator.",
          why: "On a map, the length looks bigger so we assume the number of degrees is bigger. But one degree of latitude is always about 111 km, while one degree of longitude gets shorter towards the poles.",
        },
        {
          type: "text",
          md: "**Latitude and day length.** Because India stretches over about 30° of latitude, the length of day and night changes from south to north. Near Kanniyakumari, close to the Equator, day and night differ very little through the year. In Kashmir, far to the north, summer days are much longer than winter days.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each fact to its value.",
            pairs: [
              ["Standard Meridian of India", "82°30'E"],
              ["Tropic of Cancer", "23°30'N"],
              ["Southern limit of the mainland (latitude)", "8°4'N"],
              ["Share of world area", "2.4%"],
              ["India's rank by area", "Seventh"],
            ],
            explain: "These five numbers are asked again and again in the board exam. Notice that both the Standard Meridian and the Tropic of Cancer end in 30' (half a degree).",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work (CBSE)",
          md: "On the outline political map of India you are asked to **locate and label**: all **States with their capitals**, the **Tropic of Cancer** and the **Standard Meridian** (82°30'E). Draw the Tropic of Cancer as a line across the country from Gujarat to Mizoram, and the Standard Meridian as a north–south line through Uttar Pradesh near Mirzapur. Write the name on the line, not floating beside it. Practise the eight States the Tropic of Cancer crosses: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "If the time at 82°30'E is 6:00 a.m., the local time at 97°30'E (15° further east) is ___ a.m.",
              answer: ["7:00", "7", "7.00"],
              explain: "15° × 4 minutes = 60 minutes. Places to the east are ahead, so the local time is 7:00 a.m.",
              difficulty: 2,
              hint: "Each degree is 4 minutes. East is ahead.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Mainland India: 8°4'N–37°6'N and 68°7'E–97°25'E; the Tropic of Cancer cuts it into two nearly equal halves.",
            "Area 3.28 million sq km = 2.4% of world area; seventh largest country.",
            "Both extents are about 30°, giving a time gap of about 2 hours between Gujarat and Arunachal Pradesh.",
            "IST is the local time of 82°30'E (through Mirzapur), 5 h 30 min ahead of GMT.",
            "Latitude affects day length: little change near Kanniyakumari, large change in Kashmir.",
          ],
        },
      ],
      flashcards: [
        { front: "Latitudinal extent of mainland India", back: "8°4'N to 37°6'N." },
        { front: "Longitudinal extent of mainland India", back: "68°7'E to 97°25'E." },
        { front: "Standard Meridian of India", back: "82°30'E, passing through Mirzapur (Uttar Pradesh)." },
        { front: "Why is there a 2-hour time lag across India?", back: "About 30° of longitude × 4 minutes per degree = 120 minutes." },
        { front: "India's area and rank", back: "3.28 million sq km, 2.4% of the world's area; seventh largest country." },
        { front: "Indira Point", back: "Southernmost point of the Indian Union, in the Nicobar Islands; submerged in the 2004 tsunami." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which line of latitude divides India into almost two equal parts?",
          options: ["Equator", "Tropic of Cancer", "Tropic of Capricorn", "Arctic Circle"],
          answer: 1,
          explain: "The **Tropic of Cancer** (23°30'N) passes through the middle of India. The Equator and the Tropic of Capricorn lie south of India.",
        },
        {
          kind: "truefalse",
          q: "India lies entirely in the Northern Hemisphere.",
          answer: true,
          explain: "Even the southern tip of the Nicobar Islands lies north of the Equator.",
        },
        {
          kind: "numeric",
          q: "How many minutes does the sun take to appear to cross 15° of longitude?",
          answer: 60,
          unit: "minutes",
          explain: "1° takes 4 minutes, so 15° takes 15 × 4 = 60 minutes.",
        },
        {
          kind: "fill",
          q: "India's total area is about ___ million square kilometres.",
          answer: ["3.28"],
          explain: "India's area is 3.28 million sq km, about 2.4% of the world's geographical area.",
        },
        {
          kind: "multi",
          q: "Which of these States does the Tropic of Cancer pass through? Select all.",
          options: ["Gujarat", "Maharashtra", "Jharkhand", "Mizoram", "Uttar Pradesh"],
          answers: [0, 2, 3],
          explain: "It crosses Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram. Maharashtra lies south of it and Uttar Pradesh lies north of it.",
          difficulty: 2,
          hint: "Picture a line from the Rann of Kachchh to Mizoram.",
        },
        {
          kind: "mcq",
          q: "Why does the east–west extent of India look smaller than the north–south extent, though both are about 30°?",
          options: [
            "Because India's longitudinal extent is really only 20°",
            "Because the distance between longitudes decreases towards the poles",
            "Because the distance between latitudes decreases towards the poles",
            "Because maps of India are drawn wrongly",
          ],
          answer: 1,
          explain: "Longitudes meet at the poles, so the gap between them shrinks away from the Equator. The gap between latitudes stays about the same.",
          difficulty: 2,
        },
        {
          kind: "order",
          q: "Arrange these places by the time they see sunrise, earliest first.",
          items: ["Arunachal Pradesh", "West Bengal", "Madhya Pradesh", "Gujarat"],
          explain: "The sun rises earlier in the east. Arunachal Pradesh is the easternmost and Gujarat the westernmost of these.",
        },
      ],
    },
    {
      slug: "c9-india-and-the-world",
      title: "India and the World: Neighbours and Position",
      summary: "India's central location in the Indian Ocean, its old land and sea links, and its neighbouring countries.",
      minutes: 13,
      xp: 35,
      blocks: [
        {
          type: "illustration",
          emoji: "🚢",
          caption: "A ship leaving Kochi can sail west towards the Gulf and Africa; a ship leaving Visakhapatnam can sail east towards Southeast Asia.",
        },
        {
          type: "text",
          md: "The Indian landmass sits in the middle of the routes between **West Asia** and **East Asia**. India is a southward extension of the Asian continent.\n\nThe **trans-Indian Ocean routes** connect the countries of Europe in the west and the countries of East Asia. The **Deccan Peninsula** sticks out into the Indian Ocean. This helps India keep close contact with West Asia, Africa and Europe from its **western coast**, and with Southeast and East Asia from its **eastern coast**.",
        },
        {
          type: "callout",
          tone: "fact",
          title: "The Indian Ocean",
          md: "No other country has as long a coastline on the Indian Ocean as India. This is why the ocean is named after India. Since the opening of the **Suez Canal in 1869**, the distance between India and Europe has been reduced by about 7,000 km.",
        },
        {
          type: "heading",
          text: "Old links across the passes and the seas",
        },
        {
          type: "text",
          md: "India's contacts with the world are much older than sea routes. Mountain **passes** in the north gave a path to ancient travellers.\n\nIdeas went out of India along these routes: the ideas of the **Upanishads** and the **Ramayana**, the stories of the **Panchatantra**, and **Indian numerals and the decimal system**. Goods went too: spices and fine cotton cloth called muslin. Ideas also came in: the influence of Greek sculpture, and the styles of domes and minarets from West Asia can be seen in many Indian buildings.",
        },
        {
          type: "mistake",
          wrong: "India came into contact with other countries only after Europeans arrived by sea.",
          right: "India's land routes through the mountain passes are much older than its sea routes. Ideas, goods and travellers moved across them for thousands of years.",
          why: "History lessons often begin with Vasco da Gama, so the sea route feels like the start. But the numerals, the decimal system and the Panchatantra stories spread long before that.",
        },
        {
          type: "heading",
          text: "India's neighbours",
        },
        {
          type: "table",
          headers: ["Direction", "Neighbouring countries"],
          rows: [
            ["North-west", "Pakistan, Afghanistan"],
            ["North", "China (Tibet), Nepal, Bhutan"],
            ["East", "Myanmar, Bangladesh"],
            ["South (across the sea)", "Sri Lanka, Maldives"],
          ],
        },
        {
          type: "text",
          md: "**Sri Lanka** is separated from India by a narrow channel of sea formed by the **Palk Strait** and the **Gulf of Mannar**. The **Maldives** islands lie to the south of the Lakshadweep Islands.\n\nIndia is divided into **28 States and 8 Union Territories** (since 2020). Delhi is the National Capital Territory.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which water bodies separate India from Sri Lanka?",
              options: [
                "Palk Strait and Gulf of Mannar",
                "Gulf of Kachchh and Gulf of Khambhat",
                "Ten Degree Channel and Andaman Sea",
                "Arabian Sea and Lakshadweep Sea",
              ],
              answer: 0,
              explain: "The **Palk Strait** and the **Gulf of Mannar** lie between Tamil Nadu and Sri Lanka. The Gulfs of Kachchh and Khambhat are in Gujarat.",
            },
          ],
        },
        {
          type: "example",
          title: "Writing a 3-mark answer",
          problem: "Question: 'India's central location in the Indian Ocean has helped it.' Explain with three points.",
          steps: [
            "Point 1 — position: India lies between West Asia and East Asia, at the centre of the trans-Indian Ocean routes.",
            "Point 2 — the peninsula: the Deccan Peninsula juts into the ocean, so the west coast faces West Asia, Africa and Europe, and the east coast faces Southeast and East Asia.",
            "Point 3 — coastline: India has the longest coastline on the Indian Ocean, which is why the ocean is named after it.",
            "Keep each point to one or two sentences and underline the key words (central location, peninsula, longest coastline).",
          ],
          answer: "Three clear points: central position on the ocean routes, the peninsula's two coasts facing west and east, and the longest coastline on the Indian Ocean.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each neighbour by its direction from India.",
            groups: ["North / North-west", "East", "South (across the sea)"],
            items: [
              { text: "Nepal", group: 0, hint: "It lies along the Himalayas, north of Bihar and Uttar Pradesh." },
              { text: "Afghanistan", group: 0, hint: "It touches India's far north-west." },
              { text: "Myanmar", group: 1, hint: "It borders Manipur, Nagaland, Mizoram and Arunachal Pradesh." },
              { text: "Bangladesh", group: 1, hint: "It lies east of West Bengal." },
              { text: "Sri Lanka", group: 2, hint: "Across the Palk Strait from Tamil Nadu." },
              { text: "Maldives", group: 2, hint: "South of Lakshadweep." },
              { text: "Bhutan", group: 0, hint: "A Himalayan country between Sikkim and Arunachal Pradesh." },
            ],
            explain: "Land neighbours lie to the north-west, north and east. Sri Lanka and the Maldives are island countries to the south, across the sea.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Questions on location often ask for the neighbours 'in the north-west' or 'across the sea'. Write the direction first, then the names. A common error is to list Sri Lanka as sharing a land border with India — it does not.",
        },
        {
          type: "keypoints",
          items: [
            "India lies at the centre of the trans-Indian Ocean routes between West and East Asia.",
            "The Deccan Peninsula gives India two coasts: one facing west, one facing east.",
            "Land routes through mountain passes are older than sea routes; numerals, the decimal system and the Panchatantra spread out of India.",
            "Neighbours: Pakistan, Afghanistan (NW); China, Nepal, Bhutan (N); Myanmar, Bangladesh (E); Sri Lanka, Maldives (S, across the sea).",
          ],
        },
      ],
      flashcards: [
        { front: "Why is the Indian Ocean named after India?", back: "No other country has as long a coastline on the Indian Ocean as India." },
        { front: "Suez Canal and India", back: "Opened in 1869, it cut the distance between India and Europe by about 7,000 km." },
        { front: "What separates India from Sri Lanka?", back: "The Palk Strait and the Gulf of Mannar." },
        { front: "India's neighbours in the north", back: "China (Tibet), Nepal and Bhutan." },
        { front: "Ideas that spread from India in ancient times", back: "Ideas of the Upanishads and the Ramayana, the Panchatantra stories, Indian numerals and the decimal system." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which neighbour of India is an island country lying south of Lakshadweep?",
          options: ["Sri Lanka", "Maldives", "Myanmar", "Bangladesh"],
          answer: 1,
          explain: "The **Maldives** lie south of Lakshadweep. Sri Lanka lies south-east of Tamil Nadu.",
        },
        {
          kind: "truefalse",
          q: "India's sea routes are older than its land routes with the rest of the world.",
          answer: false,
          explain: "Land routes through the mountain passes are much older than the sea routes.",
        },
        {
          kind: "fill",
          q: "The Suez Canal was opened in the year ___.",
          answer: ["1869"],
          explain: "It opened in 1869 and cut the distance from India to Europe by about 7,000 km.",
        },
        {
          kind: "multi",
          q: "Which of these share a land border with India? Select all.",
          options: ["Bhutan", "Sri Lanka", "Myanmar", "Maldives", "Afghanistan"],
          answers: [0, 2, 4],
          explain: "Bhutan, Myanmar and Afghanistan touch India by land. Sri Lanka and the Maldives are across the sea.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "From which coast does India keep close contact with Southeast and East Asia?",
          options: ["Western coast", "Eastern coast", "Northern border", "Konkan coast"],
          answer: 1,
          explain: "The **eastern coast** faces the Bay of Bengal and Southeast Asia; the western coast faces West Asia, Africa and Europe.",
        },
        {
          kind: "mcq",
          q: "How many States does India have today?",
          options: ["25", "28", "29", "30"],
          answer: 1,
          explain: "India has **28 States** and 8 Union Territories. 29 was the number before Jammu and Kashmir became a Union Territory in 2019.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter 2: Physical Features of India                               */
/* ------------------------------------------------------------------ */
const physical: Topic = {
  slug: "c9-physical-features-india",
  title: "Physical Features of India",
  icon: "🏔️",
  description: "The six physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains and Islands.",
  lessons: [
    {
      slug: "c9-himalayas-and-northern-plains",
      title: "The Himalayas and the Northern Plains",
      summary: "The three parallel ranges of the Himalayas, their regional divisions, and the bhabar, terai, bhangar and khadar of the plains.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🏔️",
          caption: "Drive from Delhi to Kedarnath: flat green fields, then low hills, then high ridges, then snow peaks. You have crossed India's two biggest landforms.",
        },
        {
          type: "text",
          md: "India has six **major physiographic divisions** (physiography means the shape of the land): the **Himalayan Mountains**, the **Northern Plains**, the **Peninsular Plateau**, the **Indian Desert**, the **Coastal Plains** and the **Islands**.\n\nThe **Himalayas** are **young fold mountains**: layers of rock pushed up and bent into folds, quite recently in the Earth's history. They form an arc about **2,400 km** long from the Indus in the west to the Brahmaputra in the east. Their width is about **400 km in Kashmir** and about **150 km in Arunachal Pradesh**.",
        },
        {
          type: "table",
          headers: ["Range", "Other name", "Height / width", "Key features"],
          rows: [
            ["**Great or Inner Himalaya**", "**Himadri**", "average height about 6,000 m", "most continuous range; has the highest peaks; core of granite; always snowbound; many glaciers"],
            ["**Lesser Himalaya**", "**Himachal**", "3,700–4,500 m; average width about 50 km", "**Pir Panjal** (longest and most important range), Dhaula Dhar, Mahabharat; Kashmir, Kangra and Kullu valleys; famous hill stations"],
            ["**Outer Himalaya**", "**Shiwaliks**", "900–1,100 m; width 10–50 km", "made of unconsolidated (loose) sediments brought by rivers; valleys called **duns**"],
          ],
        },
        {
          type: "text",
          md: "**Duns** are long valleys lying between the Himachal and the Shiwaliks. Examples: **Dehra Dun**, Kotli Dun and Patli Dun.\n\nThe Himalayas are also divided from west to east by river valleys:\n\n- **Punjab Himalaya**: between the Indus and the Satluj (also called Kashmir and Himachal Himalaya)\n- **Kumaon Himalaya**: between the Satluj and the Kali\n- **Nepal Himalaya**: between the Kali and the Teesta\n- **Assam Himalaya**: between the Teesta and the Dihang\n\nBeyond the Dihang gorge, the mountains bend south along India's eastern border. These are the **Purvachal** or Eastern Hills: the **Patkai hills, Naga hills, Manipur hills and Mizo hills**, mostly made of strong sandstone.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which range is the longest and most important range of the Himachal (Lesser Himalaya)?",
              options: ["Pir Panjal", "Shiwalik", "Karakoram", "Zaskar"],
              answer: 0,
              explain: "**Pir Panjal** is the longest and most important range of the Himachal. The Shiwaliks are the outer range, and the Karakoram and Zaskar lie to the north.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The Shiwaliks are the highest range because they are the first mountains you see.",
          right: "The Shiwaliks are the lowest and outermost range (900–1,100 m). The **Himadri** is the highest, with an average height of about 6,000 m.",
          why: "From the plains the Shiwaliks block the view, so they look big. Heights rise as you go north: Shiwaliks, then Himachal, then Himadri.",
        },
        {
          type: "heading",
          text: "The Northern Plains",
        },
        {
          type: "text",
          md: "The **Northern Plains** were formed by three river systems — the **Indus, the Ganga and the Brahmaputra** — and their tributaries. Over millions of years they laid down **alluvium** (fine fertile soil carried by rivers) in a huge basin at the foot of the Himalayas.\n\nThe plain covers about **7 lakh sq km**. It is about **2,400 km long** and **240–320 km broad**. It is one of the most thickly populated and most intensively farmed parts of the world.\n\nIt has three parts: the **Punjab Plains** in the west (formed by the Indus and its tributaries; much of it now lies in Pakistan), the **Ganga Plains** between the Ghaggar and the Teesta, and the **Brahmaputra Plain** in Assam in the east. The Punjab Plains have many **doabs** — 'do' means two and 'ab' means water: a doab is land between two rivers.",
        },
        {
          type: "table",
          headers: ["Belt", "Where", "What it is like"],
          rows: [
            ["**Bhabar**", "narrow belt, 8–16 km wide, along the foot of the Shiwaliks", "rivers drop pebbles here; streams disappear into the ground"],
            ["**Terai**", "south of the bhabar", "streams come up again; wet, swampy and marshy; thick forests and much wildlife (now largely cleared for farming)"],
            ["**Bhangar**", "older alluvium, above the flood level", "terrace-like; contains lime nodules called **kankar**"],
            ["**Khadar**", "newer alluvium of the flood plains", "renewed almost every year; very fertile; good for farming"],
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Walk south from the Shiwaliks. Put the belts in order.",
            items: ["Shiwalik foothills", "Bhabar", "Terai", "Plains of bhangar and khadar"],
            explain: "Pebbles fall first in the **bhabar**, where streams vanish. They reappear in the swampy **terai**. Further south lie the alluvial plains of old **bhangar** and new **khadar**.",
          },
        },
        {
          type: "example",
          title: "Telling bhangar from khadar",
          problem: "A farmer's field near a river is flooded every few years and gets a fresh layer of silt. Another field, on higher land, never floods and has hard lumps of lime in the soil. Name the two kinds of land.",
          steps: [
            "Fresh silt each flood means the soil is being renewed: that is **newer alluvium**.",
            "Newer alluvium of the flood plain is called **khadar**.",
            "Higher land, above the flood level, with lime lumps (**kankar**) is **older alluvium**.",
            "Older alluvium is called **bhangar**.",
          ],
          answer: "The flooded field is khadar (new, fertile alluvium); the higher field is bhangar (old alluvium with kankar).",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work (CBSE)",
          md: "**Locate and label** these Himalayan items: the **Karakoram**, the **Zaskar** and the **Shiwalik** ranges, and the peak **K2** (Godwin Austen, 8,611 m, in the Karakoram) and **Kanchenjunga** (8,598 m, in Sikkim). Write ranges along their length; mark peaks with a small triangle and the name beside it. A common error is placing Kanchenjunga in Nepal — mark it on the Sikkim border.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The land between two rivers is called a ___.",
              answer: ["doab"],
              explain: "'Do' means two and 'ab' means water. The Punjab Plains are made of doabs.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Six physiographic divisions: Himalayas, Northern Plains, Peninsular Plateau, Indian Desert, Coastal Plains, Islands.",
            "Himalayas: young fold mountains; three parallel ranges — Himadri (highest), Himachal (Pir Panjal, valleys, hill stations), Shiwaliks (lowest, duns).",
            "River-valley divisions: Punjab, Kumaon, Nepal and Assam Himalaya; Purvachal in the east.",
            "Northern Plains: alluvium from the Indus, Ganga and Brahmaputra; 7 lakh sq km.",
            "Bhabar → terai → bhangar (old, kankar) and khadar (new, fertile).",
          ],
        },
      ],
      flashcards: [
        { front: "Himadri", back: "The Great or Inner Himalaya; average height about 6,000 m; has the highest peaks." },
        { front: "Duns", back: "Long valleys between the Himachal and the Shiwaliks, e.g. Dehra Dun, Kotli Dun, Patli Dun." },
        { front: "Purvachal", back: "The eastern hills beyond the Dihang gorge: Patkai, Naga, Manipur and Mizo hills." },
        { front: "Bhabar", back: "An 8–16 km wide belt of pebbles at the foot of the Shiwaliks where streams disappear." },
        { front: "Terai", back: "Wet, swampy, forested belt south of the bhabar where the streams reappear." },
        { front: "Bhangar vs khadar", back: "Bhangar: older alluvium above flood level, with kankar. Khadar: newer, fertile alluvium of flood plains." },
        { front: "Doab", back: "Land between two rivers (do = two, ab = water)." },
      ],
      quiz: [
        {
          kind: "order",
          q: "Arrange the Himalayan ranges from north to south.",
          items: ["Himadri", "Himachal", "Shiwaliks"],
          explain: "The Great Himalaya (Himadri) is the northernmost; the Shiwaliks are the outermost, closest to the plains.",
        },
        {
          kind: "mcq",
          q: "The Kumaon Himalaya lies between which two rivers?",
          options: ["Indus and Satluj", "Satluj and Kali", "Kali and Teesta", "Teesta and Dihang"],
          answer: 1,
          explain: "Kumaon Himalaya: **Satluj to Kali**. Indus–Satluj is the Punjab Himalaya, Kali–Teesta the Nepal Himalaya and Teesta–Dihang the Assam Himalaya.",
          difficulty: 2,
          hint: "Go west to east: Punjab, Kumaon, Nepal, Assam.",
        },
        {
          kind: "truefalse",
          q: "Bhangar soil is renewed every year by floods.",
          answer: false,
          explain: "That is **khadar**. Bhangar is older alluvium lying above the flood level.",
        },
        {
          kind: "mcq",
          q: "In which belt do streams reappear and create a wet, marshy area?",
          options: ["Bhabar", "Terai", "Bhangar", "Duns"],
          answer: 1,
          explain: "Streams vanish in the bhabar and reappear in the **terai**.",
        },
        {
          kind: "multi",
          q: "Which of these are part of the Purvachal? Select all.",
          options: ["Patkai hills", "Mizo hills", "Pir Panjal", "Naga hills", "Aravali hills"],
          answers: [0, 1, 3],
          explain: "Purvachal: Patkai, Naga, Manipur and Mizo hills. Pir Panjal is in the Himachal and the Aravalis are in the north-west of the peninsula.",
        },
        {
          kind: "fill",
          q: "The Northern Plains are formed mainly of fine river deposits called ___.",
          answer: ["alluvium", "alluvial soil", "alluvial deposits"],
          explain: "The Indus, Ganga and Brahmaputra deposited alluvium in the basin south of the Himalayas.",
        },
        {
          kind: "mcq",
          q: "The Himalayas are about 400 km wide in Kashmir. In Arunachal Pradesh they are about:",
          options: ["150 km wide", "400 km wide", "600 km wide", "50 km wide"],
          answer: 0,
          explain: "The width falls from about 400 km in Kashmir to about 150 km in Arunachal Pradesh.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-plateau-desert-coasts-islands",
      title: "Peninsular Plateau, Desert, Coasts and Islands",
      summary: "The Central Highlands and Deccan Plateau, the Western and Eastern Ghats, the Indian Desert, the coastal plains and the two island groups.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🪨",
          caption: "The rocks of Hampi and the Deccan are among the oldest on Earth — far older than the Himalayas.",
        },
        {
          type: "text",
          md: "The **Peninsular Plateau** is a **tableland** (high, fairly flat land) made of old **crystalline, igneous and metamorphic rocks**. It was formed when the ancient super-continent **Gondwana land** broke up and drifted. It is part of the **oldest landmass** of India.\n\nIt has two broad parts: the **Central Highlands** and the **Deccan Plateau**. The **Narmada** river divides them.",
        },
        {
          type: "table",
          headers: ["", "Central Highlands", "Deccan Plateau"],
          rows: [
            ["Position", "north of the Narmada; covers much of the **Malwa plateau**", "triangle-shaped land south of the Narmada"],
            ["Ranges around it", "**Vindhyan** range on the south side; **Aravalis** on the north-west", "**Satpura** range along its northern base; Mahadev, Kaimur hills and Maikal range to the east"],
            ["Slope", "rivers (Chambal, Sind, Betwa, Ken) flow from south-west to north-east", "higher in the west, slopes gently to the east"],
            ["Eastern parts", "**Bundelkhand** and **Baghelkhand**; the **Chotanagpur plateau** drained by the Damodar", "extends into the north-east as the **Meghalaya** and Karbi-Anglong plateaus (Garo, Khasi, Jaintia hills)"],
          ],
        },
        {
          type: "table",
          headers: ["Feature", "Western Ghats (Sahyadri)", "Eastern Ghats"],
          rows: [
            ["Continuity", "continuous; crossed only through passes like Thal, Bhor and Pal Ghats", "broken by rivers flowing into the Bay of Bengal"],
            ["Height", "higher: average 900–1,600 m; height increases from north to south", "lower: average about 600 m"],
            ["Highest peaks", "**Anai Mudi** (2,695 m) and **Doda Betta** (2,637 m)", "**Mahendragiri** (1,501 m)"],
            ["Effect on rain", "block the rain-bearing winds, so the west side gets heavy rain", "less effect"],
          ],
        },
        {
          type: "text",
          md: "The **Aravali hills** lie on the western and north-western edge of the plateau. They are very old, highly **eroded** (worn down) and broken, and run from Gujarat to Delhi.\n\nA special feature of the Deccan is the **Deccan Trap**: a region of **black soil** formed from lava. It is of **volcanic origin**, so its rocks are igneous.",
        },
        {
          type: "mistake",
          wrong: "The Eastern Ghats are higher than the Western Ghats because the Deccan Plateau slopes east.",
          right: "The **Western Ghats** are higher (900–1,600 m) and continuous. The Eastern Ghats are lower (about 600 m) and broken.",
          why: "The slope is exactly why the west is higher: the plateau is raised at its western edge and tilts down towards the east, so rivers like the Godavari and Krishna flow east.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The highest peak of the Eastern Ghats is:",
              options: ["Anai Mudi", "Mahendragiri", "Doda Betta", "Kanchenjunga"],
              answer: 1,
              explain: "**Mahendragiri** (1,501 m). Anai Mudi and Doda Betta are in the Western Ghats; Kanchenjunga is in the Himalayas.",
            },
          ],
        },
        {
          type: "text",
          md: "The **Indian Desert** lies towards the western edge of the Aravali hills. It is an undulating sandy plain covered with **sand dunes**. It gets less than **150 mm** of rain a year, so it is dry with little plant cover. Streams appear only in the rainy season and then sink into the sand. The **Luni** is the only large river. Crescent-shaped dunes called **barchans** cover large areas.",
        },
        {
          type: "table",
          headers: ["Coast", "Sections (north to south)", "Nature"],
          rows: [
            ["Western coast (between Western Ghats and Arabian Sea)", "**Konkan** (Mumbai–Goa), **Kannad Plain**, **Malabar** coast", "narrow plain"],
            ["Eastern coast (along the Bay of Bengal)", "**Northern Circar**, **Coromandel** coast", "wide and level; big rivers form **deltas** (Mahanadi, Godavari, Krishna, Kaveri)"],
          ],
        },
        {
          type: "text",
          md: "**Chilika Lake** in Odisha, south of the Mahanadi delta, is the largest saltwater lake in India.\n\n**Lakshadweep** lies close to the Malabar coast of Kerala. It is made of small **coral** islands (coral is built from the skeletons of tiny sea animals called polyps). Its area is only **32 sq km**. **Kavaratti** is its headquarters. **Pitti** island, which is uninhabited, has a bird sanctuary.\n\nThe **Andaman and Nicobar Islands** in the Bay of Bengal are bigger, more numerous and more scattered. They are thought to be the raised tops of underwater mountains. They lie close to the Equator, so they have a hot, wet equatorial climate and thick forests.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which coast is wider and has big deltas?",
            emoji: "🌊",
            options: ["The western coast", "The eastern coast"],
            answer: 1,
            trap: 0,
            explain: "The **eastern coast** is wide and level, and the Mahanadi, Godavari, Krishna and Kaveri build deltas there. The western coast is narrow because the Western Ghats come close to the sea.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work (CBSE)",
          md: "**Locate and label**: the **Aravali, Vindhya and Satpura** ranges, the **Western Ghats** and **Eastern Ghats**; the peak **Anai Mudi** (Kerala); the **Deccan Plateau** and **Chotanagpur Plateau**; and the coastal plains **Konkan, Malabar, Coromandel** and **Northern Circar**. Tip: Konkan and Malabar go on the west coast, Coromandel and Northern Circar on the east. Students often swap Coromandel (Tamil Nadu side) and Northern Circar (Andhra–Odisha side).",
        },
        {
          type: "example",
          title: "Comparing two divisions",
          problem: "Write two differences between the Himalayas and the Peninsular Plateau (2 marks).",
          steps: [
            "Pick a point of comparison and say it for both: **age and rock type**. Himalayas — young fold mountains of sedimentary rock; Plateau — very old, of crystalline, igneous and metamorphic rocks.",
            "Second point: **relief**. Himalayas — lofty peaks and deep valleys; Plateau — a tableland with broad, shallow valleys and rounded hills.",
            "Write them in two columns or as pairs, so the examiner sees both sides of each difference.",
          ],
          answer: "1. Himalayas are young fold mountains; the plateau is an old, stable block of hard rocks. 2. Himalayas have high peaks and deep valleys; the plateau is a tableland with rounded hills.",
        },
        {
          type: "keypoints",
          items: [
            "Peninsular Plateau: old tableland from Gondwana land; Central Highlands (north of Narmada) and Deccan Plateau (south of it).",
            "Western Ghats: continuous, higher (Anai Mudi 2,695 m). Eastern Ghats: broken, lower (Mahendragiri 1,501 m).",
            "Indian Desert: west of the Aravalis, under 150 mm rain, barchans, Luni river.",
            "West coast: Konkan, Kannad, Malabar (narrow). East coast: Northern Circar, Coromandel (wide, deltas).",
            "Lakshadweep: coral islands, 32 sq km, Kavaratti. Andaman and Nicobar: raised parts of underwater mountains.",
          ],
        },
      ],
      flashcards: [
        { front: "What divides the Central Highlands from the Deccan Plateau?", back: "The Narmada river." },
        { front: "Highest peak of the Western Ghats", back: "Anai Mudi (2,695 m)." },
        { front: "Highest peak of the Eastern Ghats", back: "Mahendragiri (1,501 m)." },
        { front: "Deccan Trap", back: "Black-soil region of the Deccan Plateau, formed from lava (volcanic origin)." },
        { front: "Barchans", back: "Crescent-shaped sand dunes of the Indian Desert." },
        { front: "Largest saltwater lake in India", back: "Chilika Lake, Odisha." },
        { front: "Capital of Lakshadweep", back: "Kavaratti." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The Peninsular Plateau was formed due to the break-up and drifting of:",
          options: ["Angara land", "Gondwana land", "the Tethys Sea", "the Himalayas"],
          answer: 1,
          explain: "The plateau is a part of the ancient **Gondwana land**.",
        },
        {
          kind: "truefalse",
          q: "The Western Ghats are continuous and can be crossed only through passes.",
          answer: true,
          explain: "Passes such as Thal, Bhor and Pal Ghats cross them. The Eastern Ghats are broken by rivers.",
        },
        {
          kind: "mcq",
          q: "Which is the only large river of the Indian Desert?",
          options: ["Chambal", "Luni", "Sabarmati", "Mahi"],
          answer: 1,
          explain: "The **Luni** is the only large river of the desert. The Chambal flows through the Central Highlands.",
        },
        {
          kind: "order",
          q: "Arrange the sections of the western coastal plain from north to south.",
          items: ["Konkan", "Kannad Plain", "Malabar"],
          explain: "Konkan (Mumbai–Goa) in the north, the Kannad Plain in the middle, and Malabar in the south.",
        },
        {
          kind: "multi",
          q: "Which of these are found on the eastern coast? Select all.",
          options: ["Coromandel coast", "Malabar coast", "Northern Circar", "Chilika Lake", "Konkan coast"],
          answers: [0, 2, 3],
          explain: "Coromandel, Northern Circar and Chilika Lake are on the east. Malabar and Konkan are on the west.",
        },
        {
          kind: "fill",
          q: "Lakshadweep is made of small ___ islands.",
          answer: ["coral"],
          explain: "They are coral islands close to the Malabar coast of Kerala.",
        },
        {
          kind: "mcq",
          q: "The eastward extensions of the Central Highlands are known as:",
          options: ["Bundelkhand and Baghelkhand", "Malwa and Marwar", "Garo and Khasi", "Konkan and Kannad"],
          answer: 0,
          explain: "**Bundelkhand and Baghelkhand** extend east; further east is the Chotanagpur plateau. Garo and Khasi hills belong to the Meghalaya plateau.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter 3: Drainage                                                 */
/* ------------------------------------------------------------------ */
const drainage: Topic = {
  slug: "c9-drainage",
  title: "Drainage",
  icon: "🏞️",
  description: "Drainage basins and patterns, the Himalayan and Peninsular river systems, lakes, and the role of rivers.",
  lessons: [
    {
      slug: "c9-drainage-and-himalayan-rivers",
      title: "Drainage Basics and the Himalayan Rivers",
      summary: "Drainage basin, water divide, drainage patterns, and the Indus, Ganga and Brahmaputra systems.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🌧️",
          caption: "Rain falling on one side of Ambala ends up in the Arabian Sea; rain on the other side reaches the Bay of Bengal.",
        },
        {
          type: "text",
          md: "**Drainage** means the river system of an area. Small streams join to form bigger rivers, and the rivers finally flow into a lake, a sea or an ocean.\n\nThe area drained by one river system is its **drainage basin**. Any high land, such as a mountain or upland, that separates two drainage basins is a **water divide**. For example, **Ambala** lies on the water divide between the Indus and the Ganga systems.",
        },
        {
          type: "table",
          headers: ["Pattern", "Shape", "Where it forms"],
          rows: [
            ["**Dendritic**", "like the branches of a tree", "where the rock is the same everywhere and the slope is gentle (e.g. rivers of the Northern Plains)"],
            ["**Trellis**", "tributaries join the main river at nearly right angles", "where hard and soft rocks lie side by side"],
            ["**Rectangular**", "streams bend at right angles", "on strongly jointed (cracked) rocks"],
            ["**Radial**", "streams flow out in all directions from a centre", "from a central peak or dome (e.g. the Amarkantak range)"],
          ],
        },
        {
          type: "table",
          headers: ["Feature", "Himalayan rivers", "Peninsular rivers"],
          rows: [
            ["Water supply", "**perennial**: water all year, from rain and melting snow", "**seasonal**: depend on rain; flow drops in the dry season"],
            ["Length", "long courses", "shorter and shallower"],
            ["Work", "erode a lot in the mountains; in the plains form **meanders**, **ox-bow lakes** and deltas", "less erosion; many originate in the Western Ghats"],
            ["Examples", "Indus, Ganga, Brahmaputra", "Mahanadi, Godavari, Krishna, Kaveri, Narmada, Tapi"],
          ],
        },
        {
          type: "mistake",
          wrong: "All big rivers of India are perennial because they are big.",
          right: "Size alone does not decide it. Himalayan rivers are perennial because melting snow and glaciers feed them in summer as well as rain. Peninsular rivers depend on rain, so they are seasonal.",
          why: "The Godavari is very large, yet its flow falls sharply in the dry months. What matters is the source of water, not the size.",
        },
        {
          type: "text",
          md: "The **Indus** rises in Tibet near **Lake Mansarowar**. It flows west and enters India in **Ladakh**, forming a picturesque gorge. The Zaskar, Nubra, Shyok and Hunza join it in the Kashmir region.\n\nThe **Satluj, Beas, Ravi, Chenab and Jhelum** join together and enter the Indus near **Mithankot** in Pakistan. The Indus then flows south and reaches the Arabian Sea east of Karachi. Its length is about **2,900 km**.\n\nUnder the **Indus Water Treaty (1960)**, India can use only **20%** of the total water carried by the Indus system. India uses this water for irrigation in Punjab, Haryana and western Rajasthan.",
        },
        {
          type: "text",
          md: "The headwater of the Ganga, the **Bhagirathi**, is fed by the **Gangotri glacier**. It is joined by the **Alaknanda** at **Devprayag** in Uttarakhand. The Ganga enters the plains at **Haridwar**.\n\nHimalayan tributaries: the **Yamuna** (rises from the Yamunotri glacier and joins the Ganga at Prayagraj), and the **Ghaghara, Gandak and Kosi** (rise in the Nepal Himalaya and often flood the plains). Tributaries from the peninsula: the **Chambal, Betwa and Son**.\n\nThe Ganga flows east to **Farakka** in West Bengal, the northernmost point of its delta. There it splits. The **Bhagirathi-Hooghly** flows south to the Bay of Bengal. The main stream enters Bangladesh, is joined by the Brahmaputra and is then called the **Meghna**. The Ganga and the Brahmaputra together form the **Sundarban Delta**, the world's largest and fastest growing delta. The Ganga is over **2,500 km** long.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The Bhagirathi and the Alaknanda meet at:",
              options: ["Haridwar", "Devprayag", "Prayagraj", "Farakka"],
              answer: 1,
              explain: "They meet at **Devprayag** in Uttarakhand to form the Ganga. Haridwar is where it enters the plains, and Prayagraj is where the Yamuna joins.",
            },
          ],
        },
        {
          type: "text",
          md: "The **Brahmaputra** rises in Tibet, east of Lake Mansarowar, very close to the sources of the Indus and the Satluj. It is slightly longer than the Indus, but most of its course lies outside India. In Tibet it flows east, parallel to the Himalayas, and is called the **Tsang Po**. Near **Namcha Barwa** it takes a U-turn and enters **Arunachal Pradesh** through a gorge, where it is called the **Dihang**. The **Dibang** and the **Lohit** join it in Assam.\n\nIn Tibet the river carries little water and silt because the region is cold and dry. In India it passes through areas of heavy rain, so it carries a lot of water and silt. In Assam it forms a **braided channel** (many channels around sand islands) and many riverine islands, such as **Majuli**. It floods often and shifts its course.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each river to the fact about it.",
            pairs: [
              ["Indus", "Enters India in Ladakh"],
              ["Bhagirathi", "Fed by the Gangotri glacier"],
              ["Yamuna", "Joins the Ganga at Prayagraj"],
              ["Brahmaputra", "Called Tsang Po in Tibet"],
              ["Kosi", "Rises in Nepal and floods Bihar"],
            ],
            explain: "Learn each river with one 'tag' place: Ladakh, Gangotri, Prayagraj, Tibet. Board questions often give the tag and ask for the river.",
          },
        },
        {
          type: "example",
          title: "Reasoning question",
          problem: "Why does the Brahmaputra carry much less silt in Tibet than in India?",
          steps: [
            "Find what supplies silt: rain and running water wash soil into a river.",
            "Tibet is a **cold and dry** region, so there is little rain and little erosion.",
            "In India the river passes through areas of **very heavy rainfall** (Arunachal Pradesh, Assam).",
            "Heavy rain brings large amounts of water and silt into the river.",
          ],
          answer: "Because Tibet is cold and dry, while the Indian part of its course gets heavy rainfall that washes in a lot of water and silt.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work (CBSE)",
          md: "Himalayan rivers to **identify** on the map: the **Indus**, the **Ganga** and the **Satluj**. Practise tracing the Ganga from Gangotri through Haridwar, Prayagraj and Varanasi to Farakka, and the Satluj from Tibet through Himachal Pradesh and Punjab. A common error is to draw the Indus flowing into the Bay of Bengal — it flows into the Arabian Sea.",
        },
        {
          type: "keypoints",
          items: [
            "Drainage basin = area drained by one river system; water divide = high land between two basins (Ambala: Indus–Ganga).",
            "Patterns: dendritic, trellis, rectangular, radial.",
            "Himalayan rivers are perennial (rain + snow); Peninsular rivers are seasonal.",
            "Indus: from Tibet, 2,900 km; Indus Water Treaty 1960 lets India use 20%.",
            "Ganga: Bhagirathi + Alaknanda at Devprayag; splits at Farakka; Sundarban Delta with the Brahmaputra. Brahmaputra: Tsang Po → Dihang; braided in Assam; Majuli.",
          ],
        },
      ],
      flashcards: [
        { front: "Drainage basin", back: "The area drained by a single river system." },
        { front: "Water divide", back: "Upland or mountain that separates two drainage basins, e.g. Ambala between the Indus and Ganga." },
        { front: "Dendritic pattern", back: "Tree-branch-like river pattern on uniform rock with gentle slope." },
        { front: "Indus Water Treaty (1960)", back: "India may use only 20% of the total water of the Indus system." },
        { front: "Farakka", back: "Northernmost point of the Ganga delta, where the river splits; the Bhagirathi-Hooghly flows south." },
        { front: "Sundarban Delta", back: "World's largest and fastest growing delta, formed by the Ganga and the Brahmaputra." },
        { front: "Tsang Po and Dihang", back: "Names of the Brahmaputra in Tibet and in Arunachal Pradesh." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A river pattern that looks like the branches of a tree is called:",
          options: ["Trellis", "Radial", "Dendritic", "Rectangular"],
          answer: 2,
          explain: "**Dendritic** comes from the Greek word for tree.",
        },
        {
          kind: "truefalse",
          q: "The Indus enters India in Ladakh.",
          answer: true,
          explain: "It rises near Lake Mansarowar in Tibet and enters India in Ladakh.",
        },
        {
          kind: "order",
          q: "Arrange these places along the Ganga from source to mouth.",
          items: ["Gangotri", "Devprayag", "Haridwar", "Prayagraj", "Farakka"],
          explain: "Gangotri glacier → Devprayag (Alaknanda joins) → Haridwar (plains) → Prayagraj (Yamuna joins) → Farakka (delta begins).",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "Under the Indus Water Treaty, India can use what percentage of the total water of the Indus system?",
          answer: 20,
          unit: "%",
          explain: "India may use **20%**; the treaty was signed in 1960.",
        },
        {
          kind: "multi",
          q: "Which of these are Himalayan tributaries of the Ganga? Select all.",
          options: ["Ghaghara", "Gandak", "Son", "Kosi", "Chambal"],
          answers: [0, 1, 3],
          explain: "The Ghaghara, Gandak and Kosi come from the Nepal Himalaya. The Son and the Chambal come from the peninsular uplands.",
        },
        {
          kind: "fill",
          q: "Majuli is a large riverine island in the river ___.",
          answer: ["Brahmaputra"],
          explain: "Majuli lies in the braided Brahmaputra in Assam.",
        },
        {
          kind: "mcq",
          q: "Why are Himalayan rivers perennial?",
          options: [
            "They are longer than other rivers",
            "They are fed by both rain and melting snow",
            "They flow through the Northern Plains",
            "They form big deltas",
          ],
          answer: 1,
          explain: "Rain and melting snow and glaciers keep them flowing all year. Length or deltas do not make a river perennial.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-peninsular-rivers-and-lakes",
      title: "Peninsular Rivers, Lakes and the Role of Rivers",
      summary: "East-flowing and west-flowing peninsular rivers, the kinds of lakes, and why rivers matter and need protection.",
      minutes: 16,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🌉",
          caption: "Most rivers of the Deccan rise near the west coast but flow all the way across India to the Bay of Bengal.",
        },
        {
          type: "text",
          md: "The main **water divide** of peninsular India is formed by the **Western Ghats**, which run close to the west coast. Most big peninsular rivers — the **Mahanadi, Godavari, Krishna and Kaveri** — flow **east** into the Bay of Bengal and make **deltas** at their mouths.\n\nOnly the **Narmada** and the **Tapi** are long rivers that flow **west** into the Arabian Sea. They make **estuaries** instead of deltas. An **estuary** is a funnel-shaped river mouth where the sea's tides wash the sediment away, so no delta builds up.",
        },
        {
          type: "table",
          headers: ["River", "Rises in", "Flows into", "Notes"],
          rows: [
            ["**Narmada**", "Amarkantak hills, Madhya Pradesh", "Arabian Sea (estuary)", "flows west in a **rift valley** formed by faulting; Marble Rocks and Dhuadhar falls near Jabalpur; basin in MP and Gujarat"],
            ["**Tapi**", "Satpura ranges, Betul district, MP", "Arabian Sea (estuary)", "also in a rift valley, parallel to the Narmada but shorter; basin in MP, Gujarat, Maharashtra"],
            ["**Godavari**", "Western Ghats, Nasik district, Maharashtra", "Bay of Bengal (delta)", "largest peninsular river, about 1,500 km; largest basin; called **Dakshin Ganga**; tributaries Purna, Wardha, Pranhita, Manjra, Wainganga, Penganga"],
            ["**Mahanadi**", "highlands of Chhattisgarh", "Bay of Bengal (delta)", "about 860 km; flows through Odisha"],
            ["**Krishna**", "a spring near Mahabaleshwar", "Bay of Bengal (delta)", "about 1,400 km; tributaries Tungabhadra, Koyna, Ghatprabha, Musi, Bhima"],
            ["**Kaveri**", "Brahmagiri range, Western Ghats", "Bay of Bengal (delta), south of Cuddalore", "about 760 km; tributaries Amravati, Bhavani, Hemavati, Kabini; makes **Sivasamudram**, the second biggest waterfall in India"],
          ],
        },
        {
          type: "mistake",
          wrong: "The Narmada and Tapi make deltas like the Godavari and Krishna.",
          right: "The Narmada and Tapi form **estuaries**. They flow fast through narrow rift valleys and the tides of the Arabian Sea carry their sediment away.",
          why: "We learn 'rivers end in deltas', so it feels true for all. But a delta needs slow water and calm sea to drop silt; the west-flowing rivers do not have that.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which is the largest peninsular river?",
              options: ["Krishna", "Kaveri", "Godavari", "Narmada"],
              answer: 2,
              explain: "The **Godavari** (about 1,500 km) has the largest basin of the peninsular rivers and is called the Dakshin Ganga.",
            },
          ],
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does each river end in the Bay of Bengal or the Arabian Sea?",
            groups: ["Bay of Bengal", "Arabian Sea"],
            items: [
              { text: "Godavari", group: 0, hint: "It rises in Nasik but flows across the Deccan to the east." },
              { text: "Narmada", group: 1, hint: "It flows west through a rift valley." },
              { text: "Kaveri", group: 0, hint: "It reaches the sea in Tamil Nadu, south of Cuddalore." },
              { text: "Tapi", group: 1, hint: "It runs parallel to the Narmada." },
              { text: "Mahanadi", group: 0, hint: "Its delta is in Odisha." },
              { text: "Krishna", group: 0, hint: "It rises near Mahabaleshwar but the Deccan slopes east." },
            ],
            explain: "The Deccan tilts east, so most rivers flow to the **Bay of Bengal**. The Narmada and the Tapi are the big exceptions: they follow rift valleys west to the **Arabian Sea**.",
          },
        },
        {
          type: "heading",
          text: "Lakes",
        },
        {
          type: "text",
          md: "A **lake** is a large body of water surrounded by land. India's lakes form in different ways:\n\n- **Ox-bow lakes**: cut-off loops (meanders) of a river.\n- **Lagoons**: salt-water lakes near the coast, cut off by spits and bars, e.g. **Chilika** and **Pulicat**.\n- **Glacial lakes**: most lakes of the Himalayas, formed by glaciers.\n- **Tectonic lakes**: formed by movements of the Earth's crust. **Wular Lake** in Jammu and Kashmir is one, and it is the **largest freshwater lake** in India.\n- **Inland saltwater lakes** in dry areas, e.g. **Sambhar Lake** in Rajasthan, whose water is used to make salt.\n- **Man-made lakes**: created by dams for hydel power, e.g. Guru Gobind Sagar of the Bhakra Nangal project.\n\nOther well-known lakes include Dal Lake, Bhimtal, Nainital, Loktak and Barapani.",
        },
        {
          type: "heading",
          text: "Rivers in our life",
        },
        {
          type: "text",
          md: "Rivers have always been central to human life. Many early towns grew on river banks. Rivers give water for drinking and **irrigation**, and are used for **navigation** and **hydel power** (electricity from moving water). This is especially important in India, where most people depend on farming.\n\nBut growing towns and industries, and the use of river water for farming, reduce the flow and **pollute** the water. Sewage and factory waste are dumped into rivers. A polluted river cannot clean itself if there is too little water in it. This is why schemes to clean rivers, such as those for the Ganga, are needed.",
        },
        {
          type: "example",
          title: "Using the map to answer",
          problem: "A student must name a lake that is (a) freshwater and tectonic and (b) a coastal lagoon in Andhra Pradesh–Tamil Nadu. How should she decide?",
          steps: [
            "For (a), think of the kinds of lakes: tectonic means formed by crustal movement. The textbook example in Jammu and Kashmir is **Wular**, which is also the largest freshwater lake.",
            "For (b), a lagoon is a coastal salt-water lake. On the east coast the lagoons are Chilika (Odisha) and **Pulicat** (on the Andhra Pradesh–Tamil Nadu border).",
            "Check that each answer fits every word of the question: Wular — freshwater and tectonic; Pulicat — lagoon and in the right States.",
          ],
          answer: "(a) Wular Lake; (b) Pulicat Lake.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work (CBSE)",
          md: "Peninsular rivers to **identify**: the **Narmada, Tapi, Kaveri, Krishna, Godavari** and **Mahanadi**. Lakes to locate: **Wular** (Jammu and Kashmir), **Pulicat** (Andhra Pradesh–Tamil Nadu border), **Sambhar** (Rajasthan) and **Chilika** (Odisha). Tip: the Narmada and Tapi must be drawn reaching the Gulf of Khambhat side of the Arabian Sea; the other four reach the Bay of Bengal.",
        },
        {
          type: "keypoints",
          items: [
            "Western Ghats are the main water divide of the peninsula.",
            "East-flowing rivers (Mahanadi, Godavari, Krishna, Kaveri) make deltas; west-flowing Narmada and Tapi flow in rift valleys and make estuaries.",
            "Godavari: largest peninsular river (Dakshin Ganga). Kaveri: Sivasamudram falls.",
            "Lakes: ox-bow, lagoon (Chilika, Pulicat), glacial, tectonic (Wular, largest freshwater), salt (Sambhar), man-made.",
            "Rivers give water, irrigation, navigation and hydel power, but suffer from pollution and low flow.",
          ],
        },
      ],
      flashcards: [
        { front: "Estuary", back: "A funnel-shaped river mouth where tides carry sediment away, so no delta forms. Narmada and Tapi make estuaries." },
        { front: "Where does the Narmada rise?", back: "Amarkantak hills in Madhya Pradesh." },
        { front: "Dakshin Ganga", back: "The Godavari, the largest peninsular river (about 1,500 km)." },
        { front: "Sivasamudram", back: "The second biggest waterfall in India, made by the Kaveri." },
        { front: "Largest freshwater lake in India", back: "Wular Lake, Jammu and Kashmir (tectonic origin)." },
        { front: "Sambhar Lake", back: "A saltwater lake in Rajasthan; its water is used to make salt." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which river rises from a spring near Mahabaleshwar?",
          options: ["Godavari", "Krishna", "Kaveri", "Tapi"],
          answer: 1,
          explain: "The **Krishna** rises near Mahabaleshwar. The Godavari rises in Nasik district and the Kaveri in the Brahmagiri range.",
        },
        {
          kind: "truefalse",
          q: "The Narmada flows west through a rift valley.",
          answer: true,
          explain: "The rift valley was formed by faulting. The river makes Marble Rocks and Dhuadhar falls near Jabalpur.",
        },
        {
          kind: "fill",
          q: "The Tapi rises in the Satpura ranges in the ___ district of Madhya Pradesh.",
          answer: ["Betul"],
          explain: "The Tapi rises in Betul district and flows west, parallel to the Narmada.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which are tributaries of the Kaveri? Select all.",
          options: ["Kabini", "Bhavani", "Tungabhadra", "Hemavati", "Wainganga"],
          answers: [0, 1, 3],
          explain: "Kabini, Bhavani, Hemavati and Amravati join the Kaveri. Tungabhadra joins the Krishna and Wainganga joins the Godavari.",
          difficulty: 2,
          hint: "Tungabhadra is a Krishna tributary.",
        },
        {
          kind: "mcq",
          q: "Chilika and Pulicat are examples of:",
          options: ["Glacial lakes", "Lagoons", "Ox-bow lakes", "Man-made lakes"],
          answer: 1,
          explain: "They are coastal **lagoons** on the east coast.",
        },
        {
          kind: "order",
          q: "Arrange these peninsular rivers from longest to shortest.",
          items: ["Godavari", "Krishna", "Mahanadi", "Kaveri"],
          explain: "Godavari ~1,500 km, Krishna ~1,400 km, Mahanadi ~860 km, Kaveri ~760 km.",
          difficulty: 3,
          hint: "Godavari is the largest; Kaveri is the shortest of the four.",
        },
        {
          kind: "mcq",
          q: "Why can a heavily polluted river not clean itself in the dry season?",
          options: [
            "Because the water is too cold",
            "Because too much water is taken out, so too little water remains to dilute and carry away waste",
            "Because fish eat the waste",
            "Because the river flows faster",
          ],
          answer: 1,
          explain: "A river cleans itself when there is enough flowing water. Drawing water for farming and towns lowers the flow, so waste builds up.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter 4: Climate                                                  */
/* ------------------------------------------------------------------ */
const climate: Topic = {
  slug: "c9-climate",
  title: "Climate",
  icon: "🌦️",
  description: "Weather and climate, the controls of India's climate, the monsoon mechanism, the four seasons and the spread of rainfall.",
  lessons: [
    {
      slug: "c9-climate-controls-and-monsoon",
      title: "Climatic Controls and the Monsoon Mechanism",
      summary: "Weather vs climate, the six climatic controls, factors affecting India's climate, and how the monsoon works.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "☔",
          caption: "Every June, people in Kerala watch the sky: the first heavy monsoon rains are a sign that the farming year has begun.",
        },
        {
          type: "text",
          md: "**Weather** is the state of the atmosphere over an area at a particular time — today's rain or sun. **Climate** is the total of weather conditions and their variations over a large area for a long time — **more than thirty years**.\n\nThe **elements** of weather and climate are the same: **temperature, atmospheric pressure, wind, humidity and precipitation** (rain, snow and so on).\n\nIndia has a **monsoon type** of climate, found mainly in South and Southeast Asia.",
        },
        {
          type: "callout",
          tone: "fact",
          title: "A country of extremes",
          md: "In summer the temperature can touch **50°C** in parts of the Rajasthan desert, while it may be around 20°C in Pahalgam. On a winter night it can fall to about **minus 45°C** at Drass (now in Ladakh), while Thiruvananthapuram may be at 22°C. Yearly precipitation ranges from **over 400 cm in Meghalaya** to **less than 10 cm in Ladakh and western Rajasthan**.",
        },
        {
          type: "table",
          headers: ["Control", "How it works"],
          rows: [
            ["**Latitude**", "the sun's rays are more direct near the Equator, so air is hotter there and cooler towards the poles"],
            ["**Altitude**", "air gets thinner and cooler as height increases; hills are cooler in summer"],
            ["**Pressure and wind system**", "decides where winds blow from and how much rain they bring"],
            ["**Distance from the sea**", "the sea keeps nearby places mild; far inland, summers and winters are extreme (**continentality**)"],
            ["**Ocean currents**", "warm or cold currents change the temperature of coastal areas, along with onshore winds"],
            ["**Relief**", "high mountains block cold or rain-bearing winds; the side away from the wind stays dry"],
          ],
        },
        {
          type: "text",
          md: "**Latitude.** The Tropic of Cancer passes through the middle of India. The south is in the tropical zone; the north is in the sub-tropical zone. So India has both tropical and sub-tropical features.\n\n**Altitude.** The **Himalayas** (average height about 6,000 m) block the cold winds from Central Asia. So India has milder winters than Central Asia.\n\n**Pressure and winds.** India lies in the zone of **north-easterly winds**. These come from the sub-tropical high-pressure belt of the Northern Hemisphere and blow towards the low pressure near the Equator. They come over land and carry little moisture, so India should have been dry. It is not, because of the unique **monsoon** pattern of pressure and winds.",
        },
        {
          type: "callout",
          tone: "note",
          title: "Coriolis force",
          md: "The **Coriolis force** is an apparent force caused by the Earth's rotation. It turns winds to the **right in the Northern Hemisphere** and to the **left in the Southern Hemisphere** (**Ferrel's Law**). It is why the south-east trade winds turn into the south-west monsoon after crossing the Equator.",
        },
        {
          type: "text",
          md: "The word **monsoon** comes from the Arabic word **'mausim'**, meaning season. It means the **seasonal reversal of wind direction** during a year. The monsoon is felt in the tropical belt roughly between 20°N and 20°S.\n\nIn **winter**, high pressure lies north of the Himalayas. Cold, dry winds blow from there to the low pressure over the oceans in the south. In **summer**, a low-pressure area forms over interior Asia and north-western India. The winds reverse: moist air from the high pressure over the southern Indian Ocean blows north-east, crosses the Equator, turns right and reaches India as the **south-west monsoon**.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Different heating of land and sea**: in summer the land of India heats up and forms low pressure; the seas around have higher pressure.",
            "**Shift of the ITCZ**: the **Inter Tropical Convergence Zone** (a belt of low pressure near the Equator where trade winds meet) moves north over the Ganga plain in summer; this is the **monsoon trough**.",
            "**High pressure east of Madagascar** (about 20°S) over the Indian Ocean pushes winds towards India.",
            "**Heating of the Tibetan plateau** creates strong rising air and low pressure about 9 km above sea level.",
            "**Jet streams**: the westerly jet stream moves north of the Himalayas and a **tropical easterly jet stream** flows over the peninsula in summer.",
          ],
        },
        {
          type: "text",
          md: "Changes in pressure over the southern oceans also affect the monsoon. Normally, when pressure is high over the tropical eastern South Pacific, it is low over the tropical eastern Indian Ocean. Sometimes this flips: this see-saw is the **Southern Oscillation (SO)**. **El Niño** is a warm ocean current that sometimes flows along the coast of Peru in place of the cold Peruvian current; it is linked with the Southern Oscillation and can weaken the Indian monsoon.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The word monsoon comes from the Arabic word ___, meaning season.",
              answer: ["mausim"],
              explain: "Arab traders used 'mausim' for the seasonal winds that helped them sail.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Climate is just the weather of a place, like today's temperature.",
          right: "Weather is the condition at a particular time; climate is the average pattern of weather over a large area for more than thirty years.",
          why: "Both use the same elements, so they sound alike. But one hot day in Shimla does not change Shimla's cool climate.",
        },
        {
          type: "example",
          title: "Explaining with a cause chain",
          problem: "Explain why the south-east trade winds reach India as south-west winds in summer.",
          steps: [
            "Summer heating creates low pressure over north-western India; high pressure lies over the southern Indian Ocean.",
            "So air moves from the southern Indian Ocean towards India: it starts as the **south-east trade winds**.",
            "On crossing the Equator it comes under the **Coriolis force**, which turns winds to the right in the Northern Hemisphere.",
            "Turning right, the winds now blow from the south-west: the **south-west monsoon**.",
          ],
          answer: "Low pressure over India pulls the south-east trades across the Equator; the Coriolis force deflects them to the right, so they arrive as south-west winds.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Why are India's winters milder than Central Asia's?",
            emoji: "🏔️",
            options: [
              "Because India is closer to the Equator only",
              "Because the Himalayas block the cold winds from Central Asia",
              "Because of the El Niño current",
            ],
            answer: 1,
            trap: 0,
            explain: "Latitude helps, but the textbook reason is **relief**: the high Himalayas act as a wall and stop the icy winds of Central Asia from entering India.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Climate = weather over a large area for 30+ years; elements: temperature, pressure, wind, humidity, precipitation.",
            "Six controls: latitude, altitude, pressure and winds, distance from sea, ocean currents, relief.",
            "Himalayas block cold Central Asian winds; India lies in the north-easterly wind zone but the monsoon brings rain.",
            "Monsoon = seasonal reversal of winds; mechanism: land–sea heating, ITCZ shift, high pressure near Madagascar, Tibetan plateau heating, jet streams.",
            "Coriolis force deflects winds right in the Northern Hemisphere; El Niño can weaken the monsoon.",
          ],
        },
      ],
      flashcards: [
        { front: "Climate", back: "The sum of weather conditions and variations over a large area for a long time (more than 30 years)." },
        { front: "Six climatic controls", back: "Latitude, altitude, pressure and wind system, distance from the sea, ocean currents, relief." },
        { front: "Monsoon", back: "Seasonal reversal in the direction of winds during a year; from Arabic 'mausim' (season)." },
        { front: "ITCZ", back: "Inter Tropical Convergence Zone: a low-pressure belt near the Equator where trade winds converge; shifts over the Ganga plain in summer." },
        { front: "Coriolis force", back: "Apparent force from the Earth's rotation; deflects winds right in the Northern Hemisphere, left in the Southern (Ferrel's Law)." },
        { front: "El Niño", back: "A warm current that sometimes replaces the cold current off Peru; linked to the Southern Oscillation; can weaken India's monsoon." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these is NOT an element of weather?",
          options: ["Humidity", "Precipitation", "Latitude", "Atmospheric pressure"],
          answer: 2,
          explain: "**Latitude** is a control (a cause) of climate, not an element. Students often mix up elements and controls.",
          difficulty: 2,
          hint: "Elements are things you measure in the air.",
        },
        {
          kind: "truefalse",
          q: "The Coriolis force deflects winds to the left in the Northern Hemisphere.",
          answer: false,
          explain: "It deflects them to the **right** in the Northern Hemisphere and to the left in the Southern Hemisphere.",
        },
        {
          kind: "multi",
          q: "Which of these help cause the Indian monsoon? Select all.",
          options: [
            "Unequal heating of land and sea",
            "Northward shift of the ITCZ in summer",
            "Heating of the Tibetan plateau",
            "Cold winds from Central Asia",
            "Tropical easterly jet stream over the peninsula",
          ],
          answers: [0, 1, 2, 4],
          explain: "Cold Central Asian winds are blocked by the Himalayas and are not part of the monsoon mechanism.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Places far from the sea have very hot summers and very cold winters. This is called:",
          options: ["Continentality", "Monsoon", "Coriolis effect", "El Niño"],
          answer: 0,
          explain: "**Continentality**: without the moderating effect of the sea, temperatures become extreme.",
        },
        {
          kind: "fill",
          q: "Climate is studied over a period of more than ___ years.",
          answer: ["30", "thirty"],
          explain: "NCERT defines climate using weather over more than thirty years.",
        },
        {
          kind: "mcq",
          q: "Which place may receive over 400 cm of rainfall in a year?",
          options: ["Western Rajasthan", "Ladakh", "Meghalaya", "Delhi"],
          answer: 2,
          explain: "**Meghalaya** gets over 400 cm; Ladakh and western Rajasthan get less than 10 cm.",
        },
        {
          kind: "order",
          q: "Put the steps in order to explain the south-west monsoon.",
          items: [
            "Land of India heats up and forms low pressure",
            "South-east trade winds blow towards India from the southern Indian Ocean",
            "Winds cross the Equator",
            "Coriolis force turns them right; they blow as south-west winds",
          ],
          explain: "Pressure difference first, then the south-east trades move, cross the Equator, and are deflected to become the south-west monsoon.",
          difficulty: 2,
        },
      ],
    },
    {
      slug: "c9-seasons-and-rainfall",
      title: "Seasons of India and Distribution of Rainfall",
      summary: "Onset and withdrawal of the monsoon, the four seasons, where rain falls most and least, and the monsoon as a unifying bond.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🥭",
          caption: "Short showers in Kerala and Karnataka just before the monsoon help mangoes ripen early. People call them mango showers.",
        },
        {
          type: "text",
          md: "The monsoon reaches the southern tip of the peninsula by the **first week of June**. It splits into two branches: the **Arabian Sea branch** and the **Bay of Bengal branch**. The Arabian Sea branch reaches **Mumbai about ten days later**, around 10 June. The Bay of Bengal branch reaches **Assam in the first week of June**. The two branches merge over the north-western Ganga plains. By **mid-July** the monsoon covers the whole country.\n\nThe **sudden onset** of heavy rain at the start is called the **'burst'** of the monsoon. The monsoon also has **'breaks'**: wet spells alternate with dry spells. It lasts about **100–120 days**, from early June to mid-September.\n\n**Withdrawal** is gradual. It begins in the north-western States by early September, leaves the northern peninsula by mid-October, and leaves the rest of the country by early December.",
        },
        {
          type: "heading",
          text: "The four seasons",
        },
        {
          type: "table",
          headers: ["Season", "Months", "Main features"],
          rows: [
            ["**Cold weather season** (winter)", "mid-November to February", "December and January are coldest in the north; temperature falls from south to north; dry **north-east trade winds**; Tamil Nadu coast gets rain because these winds come from the sea there; **western cyclonic disturbances** bring rain to the north-west plains (good for **rabi** crops) and snow to the hills"],
            ["**Hot weather season** (summer)", "March to May", "heat belt moves north with the sun; about 38°C on the Deccan in March, 45°C in the north-west in May; **loo** (hot, dry, gusty day winds) in the north; dust storms; **kaal baisakhi** evening thunderstorms in West Bengal; **mango showers** in Kerala and Karnataka"],
            ["**Advancing monsoon** (rainy season)", "June to September", "south-west monsoon winds; windward side of the Western Ghats gets over 250 cm; north-east gets the most rain; **Mawsynram** gets the highest average rainfall in the world; rain in the Ganga valley falls from east to west"],
            ["**Retreating monsoon** (post-monsoon / transition)", "October to November", "monsoon trough weakens; clear skies; **'October heat'** — hot and humid; low pressure moves to the Bay of Bengal by early November; **cyclones** hit the east coast; most rain of the **Coromandel coast** comes now"],
          ],
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The hot, dry, gusty winds that blow during summer days over north and north-west India are called:",
              options: ["Mango showers", "Kaal baisakhi", "Loo", "Western disturbances"],
              answer: 2,
              explain: "The **loo** blows during the day in May–June. Kaal baisakhi are evening thunderstorms in West Bengal; mango showers are pre-monsoon rain in the south.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Tamil Nadu gets most of its rain from the south-west monsoon, like Kerala.",
          right: "The Tamil Nadu (Coromandel) coast gets most of its rain in **October–November**, from the retreating monsoon, cyclonic depressions from the Bay of Bengal and the north-east winds.",
          why: "Most of India gets rain in June–September, so we assume the same for Tamil Nadu. But it lies in the **rain shadow** of the Western Ghats for the south-west winds.",
        },
        {
          type: "table",
          headers: ["Rainfall", "Areas"],
          rows: [
            ["Over 400 cm a year", "parts of the **western coast** and the **north-east**"],
            ["Less than 60 cm", "**western Rajasthan** and nearby parts of Gujarat, Haryana and Punjab"],
            ["Low rainfall", "interior of the **Deccan plateau** and east of the Sahyadris (rain shadow), and Leh in Ladakh"],
            ["Moderate", "most of the rest of the country"],
          ],
        },
        {
          type: "text",
          md: "The monsoon is **uncertain**: some years it brings floods, other years drought. Rain may come late or stop early. This makes farming risky for millions of farmers.\n\nYet the monsoon is also a **unifying bond** for India. The Himalayas protect the whole subcontinent from cold winds, and the seasonal rhythm of the monsoon is shared by the whole country. India's landscape, its plants and animals, its farming calendar and even its festivals revolve around the monsoon. Everyone, from north to south and east to west, waits for it each year.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which season does each feature belong to?",
            groups: ["Cold weather", "Hot weather", "Retreating monsoon"],
            items: [
              { text: "Western cyclonic disturbances help rabi crops", group: 0, hint: "Rabi crops are sown in winter." },
              { text: "Loo blows in the afternoon", group: 1, hint: "These are summer winds of the north." },
              { text: "Kaal baisakhi in West Bengal", group: 1, hint: "Evening thunderstorms before the monsoon." },
              { text: "October heat", group: 2, hint: "The name gives the month." },
              { text: "Cyclones strike the Godavari–Krishna deltas", group: 2, hint: "Low pressure shifts to the Bay of Bengal in November." },
              { text: "Frost in the northern plains", group: 0, hint: "Nights are coldest in December–January." },
            ],
            explain: "Tie each feature to its month: winter (Dec–Jan) brings frost and western disturbances; summer (Mar–May) brings loo and kaal baisakhi; Oct–Nov brings October heat and east-coast cyclones.",
          },
        },
        {
          type: "example",
          title: "Reading a climate fact",
          problem: "Why does the Ganga valley get less rain as we go from east to west?",
          steps: [
            "Identify the wind: in the rainy season the **Bay of Bengal branch** of the monsoon moves up the Ganga valley from the east.",
            "As the winds move west, they keep dropping rain, so they carry less and less moisture.",
            "So places in the east (West Bengal, Bihar) get more rain than places in the west (western Uttar Pradesh, Haryana).",
          ],
          answer: "The monsoon winds come from the Bay of Bengal in the east and lose moisture as they travel west, so rainfall decreases from east to west.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work and board tips",
          md: "On a rainfall map, practise identifying the areas with **over 400 cm** (west coast, north-east, including Mawsynram in Meghalaya) and the areas with **under 20 cm** (western Rajasthan, Ladakh). Check the current CBSE map list for your year, as the climate items are sometimes changed. In answers, students often write 'Cherrapunji' for the highest average rainfall — the textbook names **Mawsynram**.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "truefalse",
              q: "The monsoon withdraws from the whole country in one week.",
              answer: false,
              explain: "Withdrawal is gradual: from early September in the north-west to early December in the far south.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Onset: southern tip by early June; Arabian Sea and Bay of Bengal branches; whole country by mid-July. 'Burst' and 'breaks'.",
            "Seasons: cold weather (mid-Nov–Feb), hot weather (Mar–May), advancing monsoon (Jun–Sep), retreating monsoon (Oct–Nov).",
            "Loo, kaal baisakhi and mango showers are summer features; October heat and east-coast cyclones are post-monsoon.",
            "Over 400 cm: west coast and north-east (Mawsynram); under 60 cm: western Rajasthan and nearby areas.",
            "The monsoon is uncertain, yet it is a unifying bond for the whole country.",
          ],
        },
      ],
      flashcards: [
        { front: "Burst of the monsoon", back: "The sudden onset of heavy rain at the start of the monsoon." },
        { front: "Mango showers", back: "Pre-monsoon showers in Kerala and Karnataka that help mangoes ripen early." },
        { front: "Kaal baisakhi", back: "Dreaded evening thunderstorms in West Bengal in the hot season." },
        { front: "Loo", back: "Strong, hot, dry, gusty winds that blow during summer days over north and north-west India." },
        { front: "October heat", back: "Hot, humid, oppressive weather in October after the monsoon withdraws." },
        { front: "Place with the highest average rainfall in the world", back: "Mawsynram, in the Khasi hills of Meghalaya." },
        { front: "Western cyclonic disturbances", back: "Winter weather systems from the Mediterranean region that bring rain to the north-west plains and snow to the hills; helpful for rabi crops." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which branch of the monsoon reaches Mumbai around 10 June?",
          options: ["Bay of Bengal branch", "Arabian Sea branch", "North-east monsoon", "Western disturbance"],
          answer: 1,
          explain: "The **Arabian Sea branch** reaches Mumbai about ten days after reaching Kerala.",
        },
        {
          kind: "order",
          q: "Arrange India's seasons in order, starting from winter.",
          items: ["Cold weather season", "Hot weather season", "Advancing monsoon", "Retreating monsoon"],
          explain: "Mid-Nov–Feb, Mar–May, Jun–Sep, Oct–Nov.",
        },
        {
          kind: "multi",
          q: "Which of these are features of the hot weather season? Select all.",
          options: ["Loo", "Mango showers", "Western cyclonic disturbances", "Kaal baisakhi", "October heat"],
          answers: [0, 1, 3],
          explain: "Western disturbances belong to winter; October heat belongs to the retreating monsoon.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "The Coromandel coast gets most of its rainfall from the south-west monsoon.",
          answer: false,
          explain: "It gets most of its rain in October–November from cyclonic depressions and the retreating monsoon.",
          difficulty: 2,
          hint: "Think of the rain shadow of the Western Ghats.",
        },
        {
          kind: "fill",
          q: "The monsoon lasts about 100 to ___ days.",
          answer: ["120"],
          explain: "From early June to mid-September: about 100–120 days.",
        },
        {
          kind: "mcq",
          q: "Why do the western cyclonic disturbances matter to farmers of Punjab and Haryana?",
          options: [
            "They bring winter rain that helps rabi crops",
            "They bring the summer monsoon",
            "They cause the loo",
            "They bring cyclones to the east coast",
          ],
          answer: 0,
          explain: "The small amount of winter rain they bring is very useful for **rabi** crops such as wheat.",
        },
        {
          kind: "mcq",
          q: "Why is the monsoon called a unifying bond?",
          options: [
            "Because it brings the same amount of rain everywhere",
            "Because the whole country shares its seasonal rhythm, and farming, life and festivals revolve around it",
            "Because it starts in Delhi",
            "Because it never fails",
          ],
          answer: 1,
          explain: "Rain is very uneven, but every region depends on and waits for the monsoon. That shared rhythm unites the country.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter 5: Natural Vegetation and Wildlife                          */
/* ------------------------------------------------------------------ */
const vegetation: Topic = {
  slug: "c9-natural-vegetation-wildlife",
  title: "Natural Vegetation and Wildlife",
  icon: "🌳",
  description: "India's biodiversity, the five main types of vegetation, its wildlife and how we protect them.",
  lessons: [
    {
      slug: "c9-types-of-vegetation",
      title: "Types of Natural Vegetation",
      summary: "What natural vegetation is, and the tropical evergreen, tropical deciduous, thorn, montane and mangrove forests.",
      minutes: 17,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "🌴",
          caption: "Silent Valley in Kerala stays green all year. A teak forest in Madhya Pradesh turns bare in summer. Same country, very different forests.",
        },
        {
          type: "text",
          md: "India is one of the twelve **mega bio-diversity** countries of the world. With about **47,000 plant species**, it is tenth in the world and fourth in Asia in plant diversity. It also has about **90,000 species of animals**.\n\n**Natural vegetation** is a plant community that has grown naturally, without human help, and has been left undisturbed for a long time. This is also called **virgin vegetation**. Plants that are originally Indian are **endemic** or indigenous; those that came from outside India are **exotic**.\n\n**Flora** means the plants of a region; **fauna** means its animals.",
        },
        {
          type: "text",
          md: "Which forest grows where depends mainly on **rainfall** and **temperature**, and also on height above sea level. Learn the five types with their rainfall — that is the key to this chapter.",
        },
        {
          type: "table",
          headers: ["Type", "Rainfall", "Where", "Trees", "Animals"],
          rows: [
            ["**Tropical evergreen** (rain forests)", "over 200 cm, short dry season", "western slopes of the Western Ghats, hills of the north-east, Andaman and Nicobar Islands", "ebony, mahogany, rosewood, rubber, cinchona; up to 60 m tall; no fixed time to shed leaves, so always green", "elephants, monkeys, lemur, deer; one-horned rhinoceros (Assam, West Bengal)"],
            ["**Tropical deciduous** (monsoon forests) — moist", "200–100 cm", "north-east along the Himalayan foothills, eastern slopes of the Western Ghats, Odisha", "teak, bamboo, sal, shisham, sandalwood, khair, kusum, arjun, mulberry", "lion, tiger, pig, deer, elephant"],
            ["**Tropical deciduous** — dry", "100–70 cm", "rainier parts of the peninsular plateau, plains of Bihar and Uttar Pradesh", "teak, sal, peepal, neem; open stretches", "lizards, snakes, tortoises, birds"],
            ["**Tropical thorn forests and scrubs**", "less than 70 cm", "north-west: semi-arid parts of Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Uttar Pradesh, Haryana", "acacias, palms, euphorbias, cacti; deep roots; small, thick leaves to cut water loss", "rats, mice, rabbits, fox, wolf, tiger, lion, wild ass, horses, camels"],
            ["**Montane forests**", "changes with height", "Himalayas and high hills of south and north-east India", "1,000–2,000 m: oak, chestnut; 1,500–3,000 m: pine, deodar, silver fir, spruce, cedar; above 3,600 m: alpine — silver fir, junipers, pines, birches; then mosses and lichens (tundra)", "Kashmir stag, spotted deer, wild sheep, yak, snow leopard, red panda, bear"],
            ["**Mangrove forests** (tidal)", "coastal, flooded by tides", "deltas of the Ganga, Mahanadi, Krishna, Godavari, Kaveri", "**sundari** trees (hard, durable timber), palm, coconut, keora, agar", "Royal Bengal tiger, turtles, crocodiles, gharials, snakes"],
          ],
        },
        {
          type: "text",
          md: "**Tropical deciduous** forests are the most widespread forests of India. They shed their leaves for about **six to eight weeks** in the dry summer to save water.\n\nIn the **alpine** zone the land is often covered with **alpine grasslands**. Nomadic tribes such as the **Gujjars and Bakarwals** take their animals there to graze.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which are the most widespread forests of India?",
              options: ["Tropical evergreen", "Tropical deciduous", "Mangrove", "Montane"],
              answer: 1,
              explain: "**Tropical deciduous** (monsoon) forests cover the largest area, in places with 70–200 cm of rain.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Evergreen forests are called evergreen because their trees never shed leaves.",
          right: "Evergreen trees do shed leaves, but at different times. There is no single season when all of them shed, so the forest looks green all year.",
          why: "The name makes it sound as if leaves never fall. The difference from deciduous forests is the timing: deciduous trees all shed together in the dry season.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which forest type does each tree belong to?",
            groups: ["Tropical evergreen", "Tropical deciduous", "Mangrove"],
            items: [
              { text: "Ebony", group: 0, hint: "A rain-forest tree of very wet areas." },
              { text: "Sal", group: 1, hint: "A monsoon-forest tree that sheds leaves in summer." },
              { text: "Sundari", group: 2, hint: "The Sundarbans are named after it." },
              { text: "Rosewood", group: 0, hint: "Grows where rain is over 200 cm." },
              { text: "Teak", group: 1, hint: "Common in both moist and dry deciduous forests." },
              { text: "Keora", group: 2, hint: "Grows in tidal deltas." },
            ],
            explain: "Ebony, mahogany and rosewood belong to rain forests; teak, sal and shisham to monsoon forests; sundari and keora to tidal mangroves.",
          },
        },
        {
          type: "example",
          title: "Using rainfall to identify a forest",
          problem: "A region gets about 50 cm of rain a year. Its plants have long roots and small, thick leaves. Name the vegetation and give one reason for the leaf shape.",
          steps: [
            "Check the rainfall bands: over 200 cm evergreen; 200–70 cm deciduous; under 70 cm thorn.",
            "50 cm is less than 70 cm, so it is **tropical thorn forest and scrub**.",
            "Long roots reach deep for water; small, thick leaves lose less water by evaporation.",
          ],
          answer: "Tropical thorn forests and scrubs; the small, thick leaves reduce water loss in the dry climate.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work and board tips",
          md: "Practise **identifying** the five vegetation types on the map: tropical evergreen (Western Ghats, north-east, Andaman and Nicobar), tropical deciduous (most of the peninsula and the north-east foothills), thorn (north-west), montane (Himalayas) and mangrove (east-coast deltas, especially the Sundarbans). Check the current CBSE map list, as vegetation items are not asked every year. In answers, always quote the **rainfall range** — examiners give a mark for it.",
        },
        {
          type: "keypoints",
          items: [
            "India: one of 12 mega bio-diversity countries; about 47,000 plant and 90,000 animal species.",
            "Natural (virgin) vegetation grows without human help; endemic vs exotic plants.",
            "Evergreen (>200 cm), deciduous (200–70 cm; most widespread), thorn (<70 cm).",
            "Montane forests change with height: broad-leaf → conifers → alpine → tundra.",
            "Mangroves grow in tidal deltas; sundari trees in the Ganga–Brahmaputra delta.",
          ],
        },
      ],
      flashcards: [
        { front: "Natural (virgin) vegetation", back: "A plant community that has grown naturally without human help and has been left undisturbed for a long time." },
        { front: "Endemic vs exotic plants", back: "Endemic (indigenous) plants are originally Indian; exotic plants came from outside India." },
        { front: "Rainfall for tropical evergreen forests", back: "Over 200 cm with a short dry season." },
        { front: "Moist vs dry deciduous rainfall", back: "Moist: 200–100 cm. Dry: 100–70 cm." },
        { front: "Trees of thorn forests", back: "Acacias, palms, euphorbias and cacti." },
        { front: "Sundari tree", back: "A mangrove tree of the Ganga–Brahmaputra delta that gives hard, durable timber." },
        { front: "Gujjars and Bakarwals", back: "Nomadic tribes who graze their animals on alpine grasslands." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Teak, sal and sandalwood are trees of which forest?",
          options: ["Tropical evergreen", "Tropical deciduous", "Thorn", "Mangrove"],
          answer: 1,
          explain: "They are typical of **tropical deciduous** (monsoon) forests.",
        },
        {
          kind: "truefalse",
          q: "Tropical thorn forests grow in areas with less than 70 cm of rainfall.",
          answer: true,
          explain: "They are found in the semi-arid north-west of India.",
        },
        {
          kind: "order",
          q: "Arrange the forest types from wettest to driest.",
          items: ["Tropical evergreen", "Moist deciduous", "Dry deciduous", "Thorn forest"],
          explain: ">200 cm, 200–100 cm, 100–70 cm, <70 cm.",
        },
        {
          kind: "fill",
          q: "Deciduous trees shed their leaves for about six to ___ weeks in the dry summer.",
          answer: ["eight", "8"],
          explain: "They shed leaves for six to eight weeks to save water.",
        },
        {
          kind: "multi",
          q: "Where are tropical evergreen forests found? Select all.",
          options: [
            "Western slopes of the Western Ghats",
            "Hills of the north-east",
            "Andaman and Nicobar Islands",
            "Western Rajasthan",
            "Plains of Bihar",
          ],
          answers: [0, 1, 2],
          explain: "These are the very wet areas. Western Rajasthan has thorn forest and the Bihar plains have dry deciduous forest.",
        },
        {
          kind: "mcq",
          q: "At heights above about 3,600 m in the Himalayas, which vegetation is found?",
          options: ["Mangrove", "Tropical evergreen", "Alpine", "Thorn"],
          answer: 2,
          explain: "Above about 3,600 m, temperate forests give way to **alpine** vegetation, then mosses and lichens.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Why do thorn-forest plants have small, thick leaves?",
          options: [
            "To catch more sunlight",
            "To reduce loss of water by evaporation",
            "To grow taller",
            "To shed leaves faster",
          ],
          answer: 1,
          explain: "Less leaf surface means less water lost in a dry climate.",
        },
      ],
    },
    {
      slug: "c9-wildlife-and-conservation",
      title: "Wildlife of India and Its Protection",
      summary: "Where India's important animals live, why wildlife is in danger, and the steps taken to protect it.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🐅",
          caption: "India is the only country in the world that has both tigers and lions in the wild.",
        },
        {
          type: "text",
          md: "India's forests, grasslands, deserts, rivers and coasts are home to a huge variety of animals. Each animal lives where it finds the right food, water and shelter — its **habitat**.",
        },
        {
          type: "table",
          headers: ["Animal", "Where it lives"],
          rows: [
            ["**Elephants**", "hot, wet forests of Assam, Karnataka and Kerala"],
            ["**One-horned rhinoceros**", "swampy and marshy lands of Assam and West Bengal"],
            ["**Wild ass**", "Rann of Kachchh"],
            ["**Camels**", "Thar desert"],
            ["**Asiatic lion**", "**Gir forest** in Gujarat — its only natural home"],
            ["**Tiger**", "forests of Madhya Pradesh, the **Sundarbans** of West Bengal and the Himalayan region"],
            ["**Yak, bharal (blue sheep), kiang (Tibetan wild ass), snow leopard, red panda**", "cold, high Himalaya, e.g. Ladakh"],
            ["**Gharial, crocodiles, turtles**", "rivers, lakes and coastal areas"],
          ],
        },
        {
          type: "text",
          md: "India also has the Indian bison, the **nilgai** (blue bull), the chousingha (four-horned antelope), gazelles and many kinds of deer and monkeys. Birds include peacocks, pheasants, ducks, parakeets, cranes and pigeons. The **peacock** is our national bird and the **tiger** our national animal.",
        },
        {
          type: "mistake",
          wrong: "Lions are found in many forests of India, just like tigers.",
          right: "The Asiatic lion lives in the wild only in the **Gir forest** of Gujarat. Tigers are spread across many States.",
          why: "Lions appear on the national emblem and in many stories, so students assume they are common. In fact they survive in only one region, which makes them very vulnerable.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "In which area are wild asses found?",
              options: ["Thar desert", "Rann of Kachchh", "Sundarbans", "Gir forest"],
              answer: 1,
              explain: "The **wild ass** lives in the Rann of Kachchh; camels are typical of the Thar desert.",
            },
          ],
        },
        {
          type: "heading",
          text: "Why wildlife is in danger",
        },
        {
          type: "list",
          items: [
            "**Cutting forests** for farms, towns, roads and mines destroys habitats.",
            "**Hunting and poaching** for skins, tusks, horns and feathers.",
            "**Pollution** of air, water and soil by chemicals and waste.",
            "**Forest fires**, and too much grazing by cattle.",
          ],
        },
        {
          type: "text",
          md: "Plants and animals depend on each other and on their surroundings. Together they form an **ecosystem**. Humans are part of it too: we need forests for wood, medicines, clean air, soil and water. When one part is damaged, the rest suffers.\n\nTo protect wildlife, the government has set up **national parks**, **wildlife sanctuaries** and **biosphere reserves**, passed the **Wildlife (Protection) Act, 1972**, and started special projects such as **Project Tiger (1973)** to save endangered animals. Ordinary people help too: not buying animal products, planting trees and saving water.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each animal to its home.",
            pairs: [
              ["Asiatic lion", "Gir forest, Gujarat"],
              ["One-horned rhinoceros", "Marshes of Assam"],
              ["Royal Bengal tiger", "Sundarbans"],
              ["Wild ass", "Rann of Kachchh"],
              ["Yak", "Ladakh"],
            ],
            explain: "Each animal is tied to a habitat that suits it: dry teak-and-scrub forest for the lion, marshes for the rhino, tidal mangroves for the tiger, salt desert for the wild ass, cold heights for the yak.",
          },
        },
        {
          type: "example",
          title: "A 3-mark answer on conservation",
          problem: "Suggest three steps to protect wildlife in India.",
          steps: [
            "Start with a government step: create **protected areas** — national parks, wildlife sanctuaries and biosphere reserves.",
            "Add a law: enforce the **Wildlife (Protection) Act, 1972** to stop hunting and trade in animal parts.",
            "Add a people's step: plant trees, avoid products made from animals, and spread awareness.",
            "Write each as a full sentence starting with a verb: 'Create…', 'Enforce…', 'Plant…'.",
          ],
          answer: "Create protected areas; enforce the anti-poaching law; involve people through tree planting and awareness.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "If a question asks where an animal lives, give the **habitat type and the place** ('swampy lands of Assam'), not just the State. A frequent error is writing 'Sundarbans' for the lion or 'Gir' for the tiger.",
        },
        {
          type: "keypoints",
          items: [
            "Elephants: Assam, Karnataka, Kerala. Rhino: marshes of Assam and West Bengal. Wild ass: Rann of Kachchh. Camel: Thar.",
            "Asiatic lion: only in the Gir forest; tigers: Madhya Pradesh, Sundarbans, Himalayas.",
            "High Himalaya: yak, bharal, kiang, snow leopard, red panda.",
            "Threats: forest loss, poaching, pollution, fires.",
            "Protection: national parks, sanctuaries, biosphere reserves, Wildlife (Protection) Act 1972, Project Tiger 1973.",
          ],
        },
      ],
      flashcards: [
        { front: "Only natural home of the Asiatic lion", back: "Gir forest, Gujarat." },
        { front: "Habitat of the one-horned rhinoceros", back: "Swampy and marshy lands of Assam and West Bengal." },
        { front: "Kiang", back: "Tibetan wild ass, found in the high Himalaya (Ladakh)." },
        { front: "Ecosystem", back: "Plants, animals and their surroundings, all depending on each other." },
        { front: "Project Tiger", back: "Launched in 1973 to save the tiger." },
        { front: "Wildlife (Protection) Act", back: "Passed in 1972 to protect wild animals and stop hunting and trade in animal parts." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "India is the only country with both:",
          options: ["Tigers and lions", "Elephants and rhinos", "Yaks and camels", "Crocodiles and gharials"],
          answer: 0,
          explain: "India has wild **tigers and lions** — no other country has both.",
        },
        {
          kind: "truefalse",
          q: "Elephants are found in the hot, wet forests of Assam, Karnataka and Kerala.",
          answer: true,
          explain: "These are the main elephant regions named in the textbook.",
        },
        {
          kind: "fill",
          q: "Project Tiger was launched in the year ___.",
          answer: ["1973"],
          explain: "It began in 1973 to protect India's tigers.",
        },
        {
          kind: "multi",
          q: "Which animals live in the cold, high Himalaya? Select all.",
          options: ["Yak", "Snow leopard", "Wild ass of Kachchh", "Bharal", "Gharial"],
          answers: [0, 1, 3],
          explain: "The yak, snow leopard and bharal (blue sheep) live in the cold heights. The wild ass lives in Kachchh and the gharial in rivers.",
        },
        {
          kind: "mcq",
          q: "Which is NOT a reason for the decline of wildlife?",
          options: ["Poaching", "Cutting forests", "Setting up national parks", "Pollution"],
          answer: 2,
          explain: "**National parks** protect wildlife; the others harm it.",
        },
        {
          kind: "mcq",
          q: "Royal Bengal tigers are especially associated with which vegetation type?",
          options: ["Thorn forest", "Mangrove forest", "Alpine grassland", "Dry deciduous forest"],
          answer: 1,
          explain: "They live in the **mangrove** forests of the Sundarbans in the Ganga–Brahmaputra delta.",
          difficulty: 2,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Chapter 6: Population                                               */
/* ------------------------------------------------------------------ */
const population: Topic = {
  slug: "c9-population",
  title: "Population",
  icon: "👨‍👩‍👧‍👦",
  description: "India's population size and distribution, density, growth, the processes of change and population composition (Census 2011).",
  lessons: [
    {
      slug: "c9-population-size-distribution",
      title: "Population Size, Distribution and Density",
      summary: "How many people India has, how they are spread across the States, and what population density means.",
      minutes: 14,
      xp: 40,
      blocks: [
        {
          type: "illustration",
          emoji: "🏙️",
          caption: "A train compartment in Patna is packed while a village in Arunachal Pradesh may have only a few houses for miles. Both are India.",
        },
        {
          type: "text",
          md: "People are the most important resource of a country: they make and use all other resources. India counts its people every ten years in the **Census**. The last complete Census was held in **2011**, and the figures in this lesson come from it.\n\nIn 2011 India's population was **1,210.6 million** — about **17.5%** of the world's people. Yet India has only **2.4%** of the world's area. That tells us how crowded India is.",
        },
        {
          type: "table",
          headers: ["Fact (Census 2011)", "Value"],
          rows: [
            ["Most populous State", "**Uttar Pradesh**, about 199 million (about 16% of India)"],
            ["Least populous State", "**Sikkim**, about 0.6 million"],
            ["Least populous UT", "**Lakshadweep**, 64,429 people"],
            ["Largest State by area", "**Rajasthan**, but only 5.5% of the population"],
            ["About half of India's people live in", "Uttar Pradesh, Maharashtra, Bihar, West Bengal and Andhra Pradesh"],
          ],
        },
        {
          type: "heading",
          text: "Population density",
        },
        {
          type: "text",
          md: "**Population density** is the number of people per unit area — usually **persons per square kilometre**. It tells us how many people would live on each square kilometre if they were spread out evenly.\n\nIndia's density in 2011 was **382 persons per sq km**. It ranged from **1,102 in Bihar** (highest among States) to only **17 in Arunachal Pradesh** (lowest).",
        },
        {
          type: "formula",
          tex: "\\text{Population density} = \\frac{\\text{Total population}}{\\text{Total area (sq km)}}",
          caption: "Always write the unit: persons per sq km.",
        },
        {
          type: "example",
          title: "Calculating density",
          problem: "A district has a population of 24,00,000 and an area of 4,000 sq km. Find its density and compare it with India's average.",
          steps: [
            "Write the formula: density = population ÷ area.",
            "Substitute: 24,00,000 ÷ 4,000.",
            "24,00,000 ÷ 4,000 = 600 persons per sq km.",
            "India's average (2011) was 382, so this district is more crowded than average.",
          ],
          answer: "600 persons per sq km — higher than India's average of 382.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "numeric",
              q: "A State has 50 lakh people and an area of 25,000 sq km. What is its density (persons per sq km)?",
              answer: 200,
              unit: "persons per sq km",
              explain: "50 lakh = 50,00,000. 50,00,000 ÷ 25,000 = 200.",
              difficulty: 2,
              hint: "1 lakh = 1,00,000.",
            },
          ],
        },
        {
          type: "table",
          headers: ["Density", "Areas", "Why"],
          rows: [
            ["Low (under 250)", "hilly, dry or forested States: e.g. Arunachal Pradesh, parts of Rajasthan, Jammu and Kashmir", "rugged land, poor soil, extreme climate"],
            ["Moderate (250–500)", "e.g. Assam and most peninsular States", "hilly or plateau land, moderate rain, less fertile soil"],
            ["High (over 500)", "the Northern Plains (e.g. Uttar Pradesh, Bihar, West Bengal) and Kerala", "flat land, fertile soil, plenty of rain"],
          ],
        },
        {
          type: "mistake",
          wrong: "The State with the most people must also have the highest density.",
          right: "Uttar Pradesh has the most people, but **Bihar** has the highest density (1,102). Density depends on both population and area.",
          why: "Big numbers feel crowded. But Uttar Pradesh is also large in area, so its people are spread over more land than Bihar's.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Rajasthan is India's largest State. Is it also very crowded?",
            emoji: "🏜️",
            options: ["Yes — big States have the most people", "No — it has only 5.5% of the people and low density"],
            answer: 1,
            trap: 0,
            explain: "Large area does not mean large population. Rajasthan's dry land supports fewer people, so its share is only 5.5% and its density is low.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Map work (CBSE)",
          md: "On the outline map of India you may be asked to **locate and label** the State with the **highest population density** (**Bihar**) and the State with the **lowest population density** (**Arunachal Pradesh**). Shade the State lightly and write its name inside. Do not mark Uttar Pradesh as the highest-density State — that is the most common error.",
        },
        {
          type: "keypoints",
          items: [
            "Census 2011: 1,210.6 million people = 17.5% of world population on 2.4% of world area.",
            "Uttar Pradesh is most populous; Sikkim least populous State; Lakshadweep least populous UT.",
            "Density = population ÷ area; India 382 per sq km (2011).",
            "Highest density: Bihar (1,102); lowest: Arunachal Pradesh (17).",
            "Plains with fertile soil and good rain are densely settled; hills, deserts and forests are thinly settled.",
          ],
        },
      ],
      flashcards: [
        { front: "India's population in 2011", back: "1,210.6 million, about 17.5% of the world's population." },
        { front: "Population density", back: "Number of persons per unit area, usually per sq km." },
        { front: "India's density (2011)", back: "382 persons per sq km." },
        { front: "Highest and lowest density States (2011)", back: "Highest: Bihar (1,102). Lowest: Arunachal Pradesh (17)." },
        { front: "Most and least populous States (2011)", back: "Most: Uttar Pradesh (about 199 million). Least: Sikkim (about 0.6 million)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which State had the highest population density in 2011?",
          options: ["Uttar Pradesh", "Bihar", "West Bengal", "Kerala"],
          answer: 1,
          explain: "**Bihar** had 1,102 persons per sq km. Uttar Pradesh had the largest population, not the highest density.",
        },
        {
          kind: "truefalse",
          q: "India has 17.5% of the world's population but only 2.4% of the world's area.",
          answer: true,
          explain: "That is why India is one of the most densely populated countries.",
        },
        {
          kind: "numeric",
          q: "A town has 90,000 people living on 30 sq km. What is its density?",
          answer: 3000,
          unit: "persons per sq km",
          explain: "90,000 ÷ 30 = 3,000 persons per sq km.",
        },
        {
          kind: "fill",
          q: "The least populous State of India in 2011 was ___.",
          answer: ["Sikkim"],
          explain: "Sikkim had about 0.6 million people. Lakshadweep is the least populous Union Territory.",
        },
        {
          kind: "multi",
          q: "Which factors lead to high population density? Select all.",
          options: ["Flat land", "Fertile soil", "Rugged mountains", "Plenty of rainfall", "Very dry climate"],
          answers: [0, 1, 3],
          explain: "People settle where farming is easy: flat land, fertile soil and good rain. Rugged or very dry areas are thinly populated.",
        },
        {
          kind: "order",
          q: "Arrange these by population density in 2011, highest first.",
          items: ["Bihar", "India (average)", "Arunachal Pradesh"],
          explain: "Bihar 1,102 > India 382 > Arunachal Pradesh 17.",
        },
      ],
    },
    {
      slug: "c9-population-growth-and-composition",
      title: "Population Growth, Change and Composition",
      summary: "Absolute increase and growth rate, birth rate, death rate and migration, and the age, sex and literacy make-up of India's people.",
      minutes: 16,
      xp: 45,
      blocks: [
        {
          type: "illustration",
          emoji: "📈",
          caption: "Your grandparents' India (1951) had about 361 million people. By 2011 it had more than three times as many.",
        },
        {
          type: "text",
          md: "**Population growth** is the change in the number of people in a country during a period. It can be described in two ways:\n\n- **Absolute increase**: the actual number of people added. It is found by subtracting the earlier population from the later one.\n- **Rate of growth** (growth rate): the increase expressed as a **percentage per year**.\n\nIndia's population grew from about **361 million in 1951** to **1,210.6 million in 2011**. Between 2001 and 2011 about **182 million** people were added. The growth rate rose steadily until 1981 and has been falling since then; it was about **1.64% per year** in 2001–2011.",
        },
        {
          type: "mistake",
          wrong: "The growth rate is falling, so India's population has stopped growing fast.",
          right: "The **rate** is falling, but because the base population is huge, the **absolute increase** is still very large — about 182 million people in one decade.",
          why: "A small percentage of a very big number is still a big number. 1.64% of over a billion people is many millions every year.",
        },
        {
          type: "example",
          title: "Absolute increase",
          problem: "India's population was 1,028.7 million in 2001 and 1,210.6 million in 2011. Find the absolute increase.",
          steps: [
            "Absolute increase = later population − earlier population.",
            "= 1,210.6 − 1,028.7 million.",
            "= 181.9 million, which is about 182 million.",
          ],
          answer: "About 182 million people were added between 2001 and 2011.",
        },
        {
          type: "heading",
          text: "Processes of population change",
        },
        {
          type: "table",
          headers: ["Process", "Meaning"],
          rows: [
            ["**Birth rate**", "number of live births per thousand persons in a year"],
            ["**Death rate**", "number of deaths per thousand persons in a year"],
            ["**Migration**", "movement of people across regions. **Internal** migration is within the country; **international** migration is between countries"],
          ],
        },
        {
          type: "text",
          md: "In India, birth rates have always been high. Death rates fell quickly after independence because of better health care and food supply. The big gap between birth and death rates was the main cause of fast growth.\n\nInternal migration does not change the total population of India, but it changes where people live. Most migration is from **rural to urban** areas. **Push factors** in villages — poverty, unemployment — drive people out; **pull factors** in cities — jobs, better living conditions — draw them in. In 2011, India had **53 million-plus cities** (cities with over ten lakh people).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "fill",
              q: "The number of live births per thousand persons in a year is called the ___.",
              answer: ["birth rate"],
              explain: "Birth rate is counted per thousand persons per year; death rate is counted the same way for deaths.",
            },
          ],
        },
        {
          type: "heading",
          text: "Population composition",
        },
        {
          type: "text",
          md: "**Age composition** is the number of people in different age groups:\n\n- **Children** (generally below 15 years): they depend on others for food, clothing and education.\n- **Working age** (15–59 years): they are economically productive.\n- **Aged** (above 59 years): many depend on others.\n\n**Sex ratio** is the number of **females per 1,000 males**. In 2011 India's sex ratio was about **943** (the early Census figure printed in some books is 940). **Kerala** had the highest sex ratio among States, **1,084**.\n\nA **literate** person, in the Census, is someone aged **7 years and above** who can read and write with understanding in any language. India's literacy rate in 2011 was about **74%**, with a gap between males (about 82%) and females (about 65%).",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Does each one make the population grow or shrink?",
            groups: ["Increases population", "Decreases population"],
            items: [
              { text: "Births", group: 0, hint: "Each birth adds a person." },
              { text: "Deaths", group: 1, hint: "Each death removes a person." },
              { text: "People moving into India from abroad", group: 0, hint: "Immigration adds people to the country." },
              { text: "People moving out of India to live abroad", group: 1, hint: "Emigration removes people from the country." },
            ],
            explain: "Births and immigration add people; deaths and emigration remove them. Moving from a village to a city inside India changes neither total.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Definitions carry marks: write '**per thousand persons in a year**' for birth and death rates and '**females per thousand males**' for sex ratio. Leaving out 'per thousand' or 'in a year' costs the mark. Note: some rationalised NCERT editions shorten the composition part of this chapter — check your syllabus, but these definitions are useful in any case.",
        },
        {
          type: "keypoints",
          items: [
            "Absolute increase = later population − earlier; growth rate = % change per year.",
            "1951: about 361 million; 2011: 1,210.6 million; about 182 million added in 2001–2011; growth rate falling since 1981.",
            "Three processes: birth rate, death rate, migration (internal and international).",
            "Rural-to-urban migration is driven by push and pull factors; 53 million-plus cities in 2011.",
            "Composition: age groups, sex ratio (females per 1,000 males; Kerala highest), literacy (age 7+).",
          ],
        },
      ],
      flashcards: [
        { front: "Absolute increase", back: "The actual number of people added in a period: later population minus earlier population." },
        { front: "Growth rate", back: "The increase in population expressed as a percentage per year." },
        { front: "Birth rate", back: "Number of live births per thousand persons in a year." },
        { front: "Death rate", back: "Number of deaths per thousand persons in a year." },
        { front: "Sex ratio", back: "Number of females per 1,000 males." },
        { front: "Who counts as literate in the Census?", back: "A person aged 7 or above who can read and write with understanding in any language." },
        { front: "Push and pull factors", back: "Push: poverty, unemployment in villages. Pull: jobs and better living in cities." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these does NOT change the total population of India?",
          options: ["Births", "Deaths", "Migration from Bihar to Delhi", "Emigration to the USA"],
          answer: 2,
          explain: "**Internal migration** only changes where people live inside India, not the total.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "Since 1981, the growth rate of India's population has been falling.",
          answer: true,
          explain: "The rate peaked around 1981 and has declined since, though the absolute increase is still large.",
        },
        {
          kind: "numeric",
          q: "If a country's population grew from 800 million to 950 million in ten years, what is the absolute increase (in million)?",
          answer: 150,
          unit: "million",
          explain: "950 − 800 = 150 million.",
        },
        {
          kind: "fill",
          q: "Sex ratio is the number of females per ___ males.",
          answer: ["1000", "1,000", "thousand"],
          explain: "It is always counted per 1,000 males.",
        },
        {
          kind: "multi",
          q: "Which are 'pull' factors that draw people to cities? Select all.",
          options: ["More jobs", "Poverty in villages", "Better living conditions", "Unemployment in villages", "Better schools and hospitals"],
          answers: [0, 2, 4],
          explain: "Poverty and unemployment in villages are **push** factors; jobs, better living and services in cities are **pull** factors.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which State had the highest sex ratio in 2011?",
          options: ["Haryana", "Kerala", "Punjab", "Uttar Pradesh"],
          answer: 1,
          explain: "**Kerala** had 1,084 females per 1,000 males.",
        },
        {
          kind: "order",
          q: "Arrange the age groups from youngest to oldest.",
          items: ["Children (below 15)", "Working age (15–59)", "Aged (above 59)"],
          explain: "Children, then working-age adults, then the aged.",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [sizeLocation, physical, drainage, climate, vegetation, population];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:India – Size and Location": "c9-india-size-location",
  "9:Physical Features of India": "c9-physical-features-india",
  "9:Drainage": "c9-drainage",
  "9:Climate": "c9-climate",
  "9:Natural Vegetation and Wildlife": "c9-natural-vegetation-wildlife",
  "9:Population": "c9-population",
};
