import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "social-science";
/** Syllabus family: chapter titles below are matched against `soc` rows in src/content/syllabus/. */
export const family = "soc";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  /* 1. Location and physical divisions                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-location-physical-divisions",
    title: "Karnataka: Location and Physical Divisions",
    icon: "🗺️",
    description: "Where Karnataka lies, its size, neighbours and districts, and its three natural regions: coast, Malnad and Maidan.",
    lessons: [
      {
        slug: "ka9-location-size-neighbours",
        title: "Where Karnataka Lies",
        summary: "Latitude and longitude extent, area, neighbouring states, formation of the state and its districts.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "illustration",
            emoji: "📍",
            caption: "A bus from Bidar in the far north to Chamarajanagar in the far south travels the whole length of Karnataka. It takes most of a day.",
          },
          {
            type: "text",
            md: "Karnataka lies in the southern part of the Indian peninsula, on the **Deccan Plateau**. It is fully north of the equator and fully east of the Prime Meridian, so it is in the northern and eastern hemispheres.\n\nWe give the position of a place using **latitude** (distance north or south of the equator, in degrees) and **longitude** (distance east or west of the Prime Meridian). The space a state covers between its first and last lines is called its **latitudinal extent** and **longitudinal extent**.",
          },
          {
            type: "table",
            headers: ["Feature", "Karnataka"],
            rows: [
              ["Latitudinal extent", "11°31′ N to 18°45′ N"],
              ["Longitudinal extent", "74°12′ E to 78°40′ E"],
              ["Area", "1,91,791 sq km (about 5.8% of India's area)"],
              ["Rank by area", "6th largest state of India"],
              ["Length of coastline", "about 320 km, on the Arabian Sea"],
              ["Capital", "Bengaluru"],
            ],
          },
          {
            type: "text",
            md: "All of Karnataka lies south of the **Tropic of Cancer** (23½° N). So the whole state is in the **tropical zone**, where the sun is high and it is warm for most of the year.\n\nThe state is longer from north to south (about 750 km) than from east to west (about 400 km).",
          },
          {
            type: "example",
            title: "Working out the extent",
            problem: "Using the table, find Karnataka's latitudinal extent and longitudinal extent in degrees and minutes.",
            steps: [
              "Latitude: subtract the southern limit from the northern limit: 18°45′ − 11°31′.",
              "Minutes first: 45′ − 31′ = 14′. Degrees: 18° − 11° = 7°. So the latitudinal extent is 7°14′.",
              "Longitude: 78°40′ − 74°12′. Minutes: 40′ − 12′ = 28′. Degrees: 78° − 74° = 4°.",
              "So the longitudinal extent is 4°28′. The bigger north–south spread matches the state's long shape.",
            ],
            answer: "Latitudinal extent 7°14′; longitudinal extent 4°28′.",
          },
          {
            type: "heading",
            text: "Neighbours and formation",
          },
          {
            type: "text",
            md: "Karnataka touches six states and the sea. **Maharashtra** is to the north, **Goa** to the north-west, **Telangana** to the north-east, **Andhra Pradesh** to the east, **Tamil Nadu** to the south-east and **Kerala** to the south-west. The **Arabian Sea** lies on the west.\n\nAfter the **States Reorganisation** on **1 November 1956**, Kannada-speaking areas were joined to form the enlarged **Mysore State**. It was renamed **Karnataka** on **1 November 1973**. We celebrate 1 November as **Kannada Rajyotsava**.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each neighbour to its direction from Karnataka.",
              pairs: [
                ["Maharashtra", "North"],
                ["Goa", "North-west"],
                ["Andhra Pradesh", "East"],
                ["Tamil Nadu", "South-east"],
                ["Kerala", "South-west"],
                ["Arabian Sea", "West"],
              ],
              explain: "Picture the map: the sea is on the west, Maharashtra across the whole north, Goa in the top-left corner, Kerala in the bottom-left and Tamil Nadu in the bottom-right.",
            },
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which body of water lies along Karnataka's coast?",
                options: ["Bay of Bengal", "Arabian Sea", "Indian Ocean only", "Gulf of Mannar"],
                answer: 1,
                explain: "Karnataka's coast is on the west, so it faces the **Arabian Sea**. The Bay of Bengal is on India's east side.",
              },
            ],
          },
          {
            type: "text",
            md: "For running the government, the state is divided into **districts**. Karnataka now has **31 districts**; the newest, **Vijayanagara**, was carved out of Ballari district in 2021. The districts are grouped into four **revenue divisions**: **Bengaluru, Mysuru, Belagavi and Kalaburagi**.",
          },
          {
            type: "mistake",
            wrong: "Karnataka got its name and its present shape in 1973.",
            right: "The enlarged state was formed on 1 November 1956 as Mysore State; only the name changed to Karnataka on 1 November 1973.",
            why: "Because the name Karnataka is from 1973, students think the state itself began then. The borders were drawn in 1956 when Kannada-speaking regions were united.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Location questions are short-answer marks. Write both extents with the **N** and **E** letters and the minute sign. Older printed books say **30 districts**; if your textbook edition says 30, it was printed before Vijayanagara was formed, so mention that 31 is the current number.",
          },
          {
            type: "keypoints",
            items: [
              "Karnataka: 11°31′ N–18°45′ N and 74°12′ E–78°40′ E; fully in the tropical zone.",
              "Area 1,91,791 sq km, the 6th largest state; coastline about 320 km on the Arabian Sea.",
              "Neighbours: Maharashtra, Goa, Telangana, Andhra Pradesh, Tamil Nadu, Kerala.",
              "Formed 1 November 1956 as Mysore State; renamed Karnataka on 1 November 1973.",
              "31 districts in 4 revenue divisions: Bengaluru, Mysuru, Belagavi, Kalaburagi.",
            ],
          },
        ],
        flashcards: [
          { front: "Latitudinal extent of Karnataka", back: "11°31′ N to 18°45′ N." },
          { front: "Longitudinal extent of Karnataka", back: "74°12′ E to 78°40′ E." },
          { front: "Area of Karnataka", back: "1,91,791 sq km, the 6th largest state of India." },
          { front: "When was Mysore State renamed Karnataka?", back: "1 November 1973. The state itself was formed on 1 November 1956." },
          { front: "Four revenue divisions", back: "Bengaluru, Mysuru, Belagavi and Kalaburagi." },
          { front: "Newest district", back: "Vijayanagara (2021), carved out of Ballari. Karnataka now has 31 districts." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which state lies to the north-west of Karnataka?",
            options: ["Kerala", "Goa", "Telangana", "Tamil Nadu"],
            answer: 1,
            explain: "Goa is in the north-west corner. Kerala is south-west, Telangana north-east and Tamil Nadu south-east.",
          },
          {
            kind: "truefalse",
            q: "Part of Karnataka lies north of the Tropic of Cancer.",
            answer: false,
            explain: "Karnataka's northern limit is 18°45′ N, well south of the Tropic of Cancer at 23½° N. The whole state is tropical.",
          },
          {
            kind: "fill",
            q: "The present state was formed as Mysore State on 1 November ___.",
            answer: ["1956"],
            explain: "The States Reorganisation of 1956 united the Kannada-speaking regions.",
          },
          {
            kind: "multi",
            q: "Which of these are revenue divisions of Karnataka?",
            options: ["Belagavi", "Mangaluru", "Kalaburagi", "Mysuru", "Hubballi"],
            answers: [0, 2, 3],
            explain: "The four revenue divisions are Bengaluru, Mysuru, Belagavi and Kalaburagi. Mangaluru and Hubballi are big cities but not division headquarters.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "What is the longitudinal extent of Karnataka?",
            options: ["7°14′", "4°28′", "3°14′", "5°28′"],
            answer: 1,
            explain: "78°40′ − 74°12′ = 4°28′. 7°14′ is the latitudinal extent, a common mix-up.",
            difficulty: 2,
            hint: "Subtract 74°12′ from 78°40′.",
          },
          {
            kind: "order",
            q: "Put these in order of time, earliest first.",
            items: ["Mysore State formed after States Reorganisation", "State renamed Karnataka", "Vijayanagara district formed"],
            explain: "1956, then 1973, then 2021.",
          },
          {
            kind: "truefalse",
            q: "Karnataka is longer from north to south than from east to west.",
            answer: true,
            explain: "It is about 750 km north–south and about 400 km east–west.",
          },
        ],
      },
      {
        slug: "ka9-coast-malnad-maidan",
        title: "Coast, Malnad and Maidan",
        summary: "The three physical divisions of Karnataka, the Western Ghats, peaks and passes, and the northern and southern Maidan.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "⛰️",
            caption: "Drive from Mangaluru to Chikkamagaluru: flat coconut groves, then steep wet forest, then rolling open land. You crossed all three regions of Karnataka.",
          },
          {
            type: "text",
            md: "By **relief** (the height and shape of the land) Karnataka has three **physical divisions**: the **Coastal Plains** (Karavali), the **Malnad** (the hilly Western Ghats) and the **Maidan** (the open plateau).\n\nThe word *Malnad* means hill country and *Maidan* means open, level land.",
          },
          {
            type: "table",
            headers: ["Division", "Where", "Land", "Main districts"],
            rows: [
              ["**Coastal Plains**", "between the Western Ghats and the Arabian Sea", "narrow, low and flat; many short rivers with estuaries", "Dakshina Kannada, Udupi, Uttara Kannada"],
              ["**Malnad**", "the Western Ghats (Sahyadri) and their slopes", "high, steep hills; deep valleys; dense forest; very heavy rain", "Kodagu, Chikkamagaluru, Shivamogga, parts of Hassan, Uttara Kannada, Belagavi"],
              ["**Maidan**", "east of the Malnad, the largest division", "plateau of low hills and wide plains; drier", "most other districts"],
            ],
          },
          {
            type: "text",
            md: "The **Western Ghats** run north to south, parallel to the coast. Their highest point in Karnataka is **Mullayanagiri** in the **Baba Budan hills** of Chikkamagaluru district. Other well-known peaks are **Kudremukh**, **Kodachadri** and **Tadiandamol** (the highest peak of Kodagu).\n\nA **ghat** or **pass** is a low gap in the hills that roads and railways use. Important passes are **Agumbe**, **Charmadi**, **Shiradi** and **Sampaje**; they link the coast with the plateau.",
          },
          {
            type: "heading",
            text: "Northern and Southern Maidan",
          },
          {
            type: "table",
            headers: ["", "Northern Maidan", "Southern Maidan"],
            rows: [
              ["Rocks", "**Deccan lava** (basalt)", "old **granite** and **gneiss**"],
              ["Height", "lower", "higher; Bengaluru stands at about 900 m"],
              ["Soil", "black soil", "red soil"],
              ["Look", "wide, flat, treeless plains", "rolling land with rocky hills and many tanks"],
              ["River basin", "mostly the Krishna", "mostly the Kaveri"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which division is the largest in area?",
                options: ["Coastal Plains", "Malnad", "Maidan", "All are equal"],
                answer: 2,
                explain: "The **Maidan** (plateau) covers most of the state. The coast is a narrow strip and the Malnad a hilly belt.",
              },
            ],
          },
          {
            type: "example",
            title: "Placing a district",
            problem: "A district has steep hills, coffee estates, very heavy rain and thick forest. Which physical division is it in, and name one such district.",
            steps: [
              "Steep hills and thick forest rule out the flat coast and the open Maidan.",
              "Very heavy rain falls on the Western Ghats, which face the monsoon winds.",
              "Coffee grows on shaded hill slopes of the Western Ghats.",
            ],
            answer: "The Malnad region, for example Kodagu or Chikkamagaluru.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Which physical division does each clue belong to?",
              groups: ["Coastal Plains", "Malnad", "Maidan"],
              items: [
                { text: "Estuaries of short rivers", group: 0, hint: "Rivers meet the sea here." },
                { text: "Mullayanagiri peak", group: 1, hint: "It is the highest point of the Western Ghats in Karnataka." },
                { text: "Black soil on Deccan lava", group: 2, hint: "This is the northern plateau." },
                { text: "Agumbe pass", group: 1, hint: "Passes cut through the Ghats." },
                { text: "Many tanks among rocky granite hills", group: 2, hint: "Think of Kolar and Tumakuru." },
                { text: "Udupi's beaches", group: 0, hint: "Beaches are by the sea." },
              ],
              explain: "Coast = low, flat, by the sea. Malnad = the Ghats with peaks and passes. Maidan = the plateau, black-soil north and granite-and-tank south.",
            },
          },
          {
            type: "mistake",
            wrong: "The Western Ghats run east to west across Karnataka, splitting the north from the south.",
            right: "The Western Ghats run north to south, parallel to the west coast, separating the coast from the plateau.",
            why: "On the map the Ghats look like a thick band, and students remember it as a dividing wall. It divides **west from east**, not north from south.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'Describe the physical divisions of Karnataka' give all three names (with Kannada names Karavali, Malnad, Maidan), one feature each, and split the Maidan into northern and southern. A small labelled sketch map earns marks.",
          },
          {
            type: "keypoints",
            items: [
              "Three physical divisions: Coastal Plains, Malnad and Maidan.",
              "Western Ghats run north–south; Mullayanagiri is the highest peak in Karnataka.",
              "Passes like Agumbe, Charmadi, Shiradi and Sampaje link coast and plateau.",
              "Northern Maidan: lava rock, black soil, lower. Southern Maidan: granite, red soil, higher, many tanks.",
            ],
          },
        ],
        flashcards: [
          { front: "Three physical divisions of Karnataka", back: "Coastal Plains (Karavali), Malnad (Western Ghats) and Maidan (plateau)." },
          { front: "Highest peak in Karnataka", back: "Mullayanagiri, in the Baba Budan hills, Chikkamagaluru district." },
          { front: "Highest peak of Kodagu", back: "Tadiandamol." },
          { front: "What is a ghat (pass)?", back: "A low gap in the hills used by roads and railways, e.g. Agumbe, Charmadi, Shiradi, Sampaje." },
          { front: "Rock of the Northern Maidan", back: "Deccan lava (basalt), which weathers into black soil." },
          { front: "Rock of the Southern Maidan", back: "Granite and gneiss, which weather into red soil." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In which district is Mullayanagiri?",
            options: ["Kodagu", "Chikkamagaluru", "Shivamogga", "Udupi"],
            answer: 1,
            explain: "Mullayanagiri is in the Baba Budan hills of Chikkamagaluru. Kodagu's highest peak is Tadiandamol.",
          },
          {
            kind: "truefalse",
            q: "The Southern Maidan is generally higher than the Northern Maidan.",
            answer: true,
            explain: "The southern plateau of granite stands higher; Bengaluru is about 900 m above sea level.",
          },
          {
            kind: "fill",
            q: "The Kannada name for the coastal region is ___.",
            answer: ["Karavali"],
            explain: "Karavali means the coastal belt.",
          },
          {
            kind: "multi",
            q: "Which of these are passes in the Western Ghats of Karnataka?",
            options: ["Agumbe", "Shiradi", "Nandi", "Charmadi", "Hampi"],
            answers: [0, 1, 3],
            explain: "Agumbe, Shiradi and Charmadi are passes. Nandi is a hill near Bengaluru and Hampi is a heritage site.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "The Northern Maidan has black soil because:",
            options: ["it gets the most rain", "it is made of Deccan lava rock", "rivers bring silt from the sea", "it has granite rocks"],
            answer: 1,
            explain: "Black soil forms from weathered **basalt** (Deccan lava). Granite gives red soil, which is found in the south.",
            difficulty: 2,
            hint: "Soil colour comes from the parent rock.",
          },
          {
            kind: "order",
            q: "Order the regions you cross going from the Arabian Sea eastwards to Kolar.",
            items: ["Coastal Plains", "Malnad", "Maidan"],
            explain: "From the sea you cross the coastal strip, climb the Ghats (Malnad) and come down on to the plateau (Maidan).",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. Climate, soils and natural vegetation                           */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-climate-soils-vegetation",
    title: "Climate, Soils and Natural Vegetation of Karnataka",
    icon: "🌦️",
    description: "Karnataka's four seasons and rainfall pattern, its main soils, and its forests and wildlife.",
    lessons: [
      {
        slug: "ka9-climate-seasons-rainfall",
        title: "Seasons and Rainfall",
        summary: "Tropical monsoon climate, the four seasons, why the coast is wet and the plateau dry, Agumbe and rain shadow.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "🌧️",
            caption: "In July a student in Agumbe needs a raincoat every day, while a student in Chitradurga may see only light showers.",
          },
          {
            type: "text",
            md: "**Climate** is the usual weather of a place over many years. Karnataka has a **tropical monsoon climate**: hot for most of the year, with most rain coming from the **monsoon winds**.\n\nThe climate is not the same everywhere. Height, distance from the sea and the Western Ghats all make a difference.",
          },
          {
            type: "table",
            headers: ["Season", "Months", "What happens"],
            rows: [
              ["**Summer**", "March to May", "hottest in the north (Kalaburagi, Raichur, Ballari); some pre-monsoon showers"],
              ["**Rainy season** (south-west monsoon)", "June to September", "most of the year's rain; very heavy on the coast and Malnad"],
              ["**Retreating monsoon** (north-east monsoon)", "October to November", "rain mainly in the southern Maidan; cyclones from the Bay of Bengal sometimes"],
              ["**Winter**", "December to February", "cool, dry, clear skies"],
            ],
          },
          {
            type: "text",
            md: "Pre-monsoon showers in April–May help mango orchards and are called **mango showers**. In Kodagu and Chikkamagaluru the same showers make coffee plants flower, so they are called **coffee blossom showers**.",
          },
          {
            type: "heading",
            text: "Why the coast is wet and the plateau dry",
          },
          {
            type: "text",
            md: "The **south-west monsoon** winds blow in from the Arabian Sea full of moisture. They hit the Western Ghats and are forced to rise. Rising air cools, and the moisture falls as heavy rain on the windward (western) side. This is **relief rainfall** (orographic rainfall).\n\nBy the time the winds cross the Ghats, they have lost most of their moisture. The land to the east gets little rain. This dry side is called the **rain-shadow area**. That is why much of the Maidan is dry.\n\n**Agumbe** in Shivamogga district gets the highest rainfall in Karnataka. Parts of Chitradurga district get the lowest.",
          },
          {
            type: "example",
            title: "Reading rainfall like a geographer",
            problem: "Mangaluru gets far more rain in July than Ballari. Explain why, step by step.",
            steps: [
              "In July the south-west monsoon blows from the Arabian Sea towards the land.",
              "Mangaluru is on the coast, right where the moist winds arrive, just before the Ghats.",
              "The winds rise over the Ghats and drop most of their moisture on the western side.",
              "Ballari lies far east in the rain-shadow of the Ghats, so the winds reaching it are dry.",
            ],
            answer: "Mangaluru is on the windward side and gets relief rain; Ballari is in the rain-shadow area.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "fill",
                q: "The place with the highest rainfall in Karnataka is ___ in Shivamogga district.",
                answer: ["Agumbe"],
                explain: "Agumbe, high in the Western Ghats, catches the monsoon winds first.",
              },
            ],
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Why is Bengaluru cooler than Raichur in April?",
              emoji: "🌡️",
              options: ["It is close to the sea", "It stands higher above sea level", "It gets snow in winter", "It is north of Raichur"],
              answer: 1,
              trap: 0,
              explain: "Bengaluru is about 900 m above sea level, and air gets cooler with height. It is far from the sea, and it is actually south of Raichur.",
            },
          },
          {
            type: "mistake",
            wrong: "The Western Ghats get heavy rain, so the whole of Karnataka gets heavy rain.",
            right: "Only the windward western slopes and the coast get heavy rain; the plateau east of the Ghats lies in the rain shadow and is dry.",
            why: "Students remember that Karnataka has the wettest place in South India and assume the whole state is wet. The Ghats block the moist winds, so the Maidan stays dry and suffers droughts.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked to name the seasons, give **all four with months**. The retreating monsoon is a separate season; many students skip it and lose a mark. For 'why is the Maidan dry', use the words **windward side** and **rain shadow**.",
          },
          {
            type: "keypoints",
            items: [
              "Karnataka has a tropical monsoon climate with four seasons.",
              "Summer Mar–May, south-west monsoon Jun–Sep, retreating monsoon Oct–Nov, winter Dec–Feb.",
              "The Western Ghats cause relief rain on their western side and a rain shadow on the east.",
              "Agumbe gets the most rain; parts of Chitradurga get the least.",
              "Height keeps Bengaluru and the southern plateau pleasant.",
            ],
          },
        ],
        flashcards: [
          { front: "Climate type of Karnataka", back: "Tropical monsoon climate." },
          { front: "Four seasons", back: "Summer (Mar–May), rainy/south-west monsoon (Jun–Sep), retreating monsoon (Oct–Nov), winter (Dec–Feb)." },
          { front: "Relief (orographic) rainfall", back: "Rain caused when moist winds are forced to rise over mountains and cool." },
          { front: "Rain-shadow area", back: "The dry land on the side of a mountain away from the rain-bearing wind." },
          { front: "Coffee blossom showers", back: "Pre-monsoon showers in Kodagu and Chikkamagaluru that make coffee plants flower." },
          { front: "Wettest place in Karnataka", back: "Agumbe, Shivamogga district." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which season brings most of Karnataka's rain?",
            options: ["Summer", "South-west monsoon", "Retreating monsoon", "Winter"],
            answer: 1,
            explain: "The south-west monsoon (June–September) brings most of the rain.",
          },
          {
            kind: "mcq",
            q: "The southern Maidan (Bengaluru, Kolar) gets useful rain in October–November from:",
            options: ["the south-west monsoon", "the retreating (north-east) monsoon", "western disturbances", "sea breeze"],
            answer: 1,
            explain: "The retreating monsoon winds blow from the Bay of Bengal side and give rain to the south-eastern plateau.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The eastern side of the Western Ghats lies in a rain-shadow area.",
            answer: true,
            explain: "Winds lose most of their moisture on the western slopes, so the east is drier.",
          },
          {
            kind: "order",
            q: "Put the seasons in order, starting from March.",
            items: ["Summer", "South-west monsoon", "Retreating monsoon", "Winter"],
            explain: "March–May, June–September, October–November, December–February.",
          },
          {
            kind: "fill",
            q: "Pre-monsoon showers that help mango orchards are called ___ showers.",
            answer: ["mango"],
            explain: "They fall in April–May, before the monsoon.",
          },
          {
            kind: "multi",
            q: "Which of these help explain why Mangaluru is wetter than Chitradurga?",
            options: ["Mangaluru is on the windward side of the Ghats", "Chitradurga is in the rain shadow", "Chitradurga is higher than the Ghats", "Monsoon winds come from the Arabian Sea"],
            answers: [0, 1, 3],
            explain: "Moist Arabian Sea winds drop their rain on the windward coast and slopes; Chitradurga lies in the rain shadow. Chitradurga is not higher than the Ghats.",
            difficulty: 3,
            hint: "Think about where the wind comes from and what it meets first.",
          },
          {
            kind: "truefalse",
            q: "Bengaluru has a pleasant climate mainly because it is near the sea.",
            answer: false,
            explain: "Bengaluru is far from the sea. Its height (about 900 m) keeps it cool.",
          },
        ],
      },
      {
        slug: "ka9-soils-forests-wildlife",
        title: "Soils, Forests and Wildlife",
        summary: "Red, black, laterite and alluvial soils, soil erosion and conservation, forest types, sandalwood and protected areas.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "**Soil** is the thin top layer of the earth in which plants grow. It forms when rocks break down slowly (**weathering**) and mix with dead plants and animals (**humus**). The **parent rock** and the **climate** decide what soil forms.",
          },
          {
            type: "table",
            headers: ["Soil", "Where in Karnataka", "How it forms / features", "Crops"],
            rows: [
              ["**Red soil**", "most widespread; southern and eastern Maidan (Bengaluru, Kolar, Tumakuru, Mysuru, Chitradurga)", "from granite and gneiss; red because of iron oxide; low in humus", "ragi, groundnut, pulses, millets"],
              ["**Black soil**", "northern Maidan (Vijayapura, Bagalkote, Kalaburagi, Dharwad, Belagavi, Raichur)", "from Deccan lava; holds water well; cracks when dry", "cotton, jowar, sugarcane, wheat, sunflower"],
              ["**Laterite soil**", "Malnad and coastal belt; also the Bidar plateau", "heavy rain washes away (leaches) nutrients; red, hard", "coffee, arecanut, cashew, coconut"],
              ["**Alluvial soil**", "narrow strips on the coast and river valleys", "deposited by rivers; fertile", "rice, coconut, vegetables"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which soil covers the largest area of Karnataka?",
                options: ["Black soil", "Red soil", "Alluvial soil", "Laterite soil"],
                answer: 1,
                explain: "Red soil, formed from the old granite rocks of the plateau, is the most widespread.",
              },
            ],
          },
          {
            type: "text",
            md: "**Soil erosion** is the washing or blowing away of the top soil by rain, rivers and wind. Cutting forests, overgrazing and wrong ploughing make it worse.\n\n**Soil conservation** means protecting soil: planting trees (**afforestation**), building **bunds** and **check dams**, **contour ploughing** (ploughing along the slope, not up and down) and **terrace farming** on hill slopes.",
          },
          {
            type: "heading",
            text: "Natural vegetation",
          },
          {
            type: "text",
            md: "**Natural vegetation** is the plant life that grows on its own, without people planting it. In Karnataka its type depends mostly on rainfall.",
          },
          {
            type: "table",
            headers: ["Forest type", "Where", "Trees"],
            rows: [
              ["**Evergreen**", "the wettest western slopes of the Ghats", "tall, dense trees that stay green all year: rosewood, ebony, wild jack"],
              ["**Deciduous** (moist and dry)", "eastern slopes of the Ghats and wetter parts of the Maidan", "trees shed leaves in the dry season: teak, sandalwood, honne, matti, bamboo"],
              ["**Scrub and thorn**", "driest parts of the Maidan", "short thorny bushes and babul"],
              ["**Shola forests and grasslands**", "high hilltops such as Kudremukh", "patches of short forest in valleys among grassland"],
            ],
          },
          {
            type: "text",
            md: "Karnataka is famous for **sandalwood** (*shrigandha*), used to make sandal oil, soap and carvings. It grows in the dry deciduous forests.\n\nTo protect wildlife, the state has **national parks** such as **Bandipur**, **Nagarahole**, **Kudremukh**, **Bannerghatta** and **Anshi**, and sanctuaries such as **Ranganathittu** (birds), **Dandeli** and **Biligiri Ranganathaswamy Temple (BRT)**.",
          },
          {
            type: "example",
            title: "Matching soil, rock and crop",
            problem: "A farmer near Vijayapura grows cotton without much irrigation. Explain how the soil helps him.",
            steps: [
              "Vijayapura is in the northern Maidan, which is made of Deccan lava.",
              "Lava weathers into black soil.",
              "Black soil holds moisture for a long time, so the crop gets water even in a dry spell.",
              "Cotton grows well in this moisture-holding soil, which is why it is also called black cotton soil.",
            ],
            answer: "The black soil, formed from lava, stores moisture and suits cotton.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each soil to the crop it suits best.",
              pairs: [
                ["Black soil", "Cotton"],
                ["Red soil", "Ragi"],
                ["Laterite soil", "Coffee"],
                ["Alluvial soil", "Rice"],
              ],
              explain: "Moisture-holding black soil suits cotton; light red soil suits hardy ragi; laterite on rainy hill slopes suits plantation crops; fertile river and coastal alluvium suits rice.",
            },
          },
          {
            type: "mistake",
            wrong: "Red soil is formed from lava and black soil from granite.",
            right: "Black soil comes from Deccan lava (basalt); red soil comes from granite and gneiss.",
            why: "Lava is pictured as red-hot, so students link it with red soil. But cooled basalt is dark, and it weathers into dark soil. Red colour comes from iron oxide in granite soils.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In 'name the soils and their regions' questions, write the soil, one region and one crop for each. Keep national parks (Bandipur, Nagarahole) and bird sanctuaries (Ranganathittu) in separate lists; mixing them up is a frequent error.",
          },
          {
            type: "keypoints",
            items: [
              "Red soil is the most widespread; black soil is in the north; laterite in the Malnad and coast; alluvial in narrow strips.",
              "Parent rock decides soil: lava gives black, granite gives red.",
              "Soil is saved by afforestation, bunds, check dams, contour ploughing and terracing.",
              "Forests: evergreen on the wet Ghats, deciduous inland, scrub in the driest parts, shola on high hilltops.",
              "Karnataka is famous for sandalwood; Bandipur and Nagarahole are well-known national parks.",
            ],
          },
        ],
        flashcards: [
          { front: "Most widespread soil of Karnataka", back: "Red soil, formed from granite and gneiss." },
          { front: "Why black soil suits cotton", back: "It holds moisture for long, so the crop survives dry spells." },
          { front: "Leaching", back: "Heavy rain washing nutrients down out of the soil; it produces laterite soil." },
          { front: "Contour ploughing", back: "Ploughing along the slope of a hill so that water does not rush down and carry soil away." },
          { front: "Evergreen forests", back: "Dense forests of the wettest Western Ghat slopes; trees stay green all year." },
          { front: "Ranganathittu", back: "A bird sanctuary on the Kaveri in Mandya district." },
          { front: "Shola forests", back: "Patches of short forest in valleys among grasslands on high hilltops, e.g. Kudremukh." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Laterite soil forms mainly because of:",
            options: ["very low rainfall", "heavy rainfall that leaches nutrients", "river deposits", "volcanic lava"],
            answer: 1,
            explain: "Heavy rain washes away soluble nutrients, leaving iron- and aluminium-rich laterite.",
          },
          {
            kind: "truefalse",
            q: "Sandalwood grows mainly in the evergreen forests of the wettest Ghat slopes.",
            answer: false,
            explain: "Sandalwood grows in the drier deciduous forests, not the wettest evergreen ones.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are methods of soil conservation?",
            options: ["Contour ploughing", "Overgrazing", "Terrace farming", "Building check dams", "Cutting forests"],
            answers: [0, 2, 3],
            explain: "Overgrazing and cutting forests cause soil erosion; the other three prevent it.",
          },
          {
            kind: "fill",
            q: "Black soil is formed from the weathering of Deccan ___ rock.",
            answer: ["lava", "basalt"],
            explain: "Deccan lava (basalt) covers the northern Maidan.",
          },
          {
            kind: "mcq",
            q: "Which of these is a national park in Karnataka?",
            options: ["Ranganathittu", "Bandipur", "Jog", "Agumbe"],
            answer: 1,
            explain: "Bandipur is a national park. Ranganathittu is a bird sanctuary, Jog a waterfall and Agumbe a rainy village.",
          },
          {
            kind: "mcq",
            q: "A district in Karnataka with red soil, granite hills and many tanks is most likely:",
            options: ["Kolar", "Vijayapura", "Udupi", "Kalaburagi"],
            answer: 0,
            explain: "Kolar is in the southern Maidan, with red soil on granite. Vijayapura and Kalaburagi have black soil; Udupi is coastal.",
            difficulty: 2,
            hint: "Granite and tanks belong to the southern plateau.",
          },
          {
            kind: "order",
            q: "Order the forest types from the wettest to the driest area.",
            items: ["Evergreen forest", "Deciduous forest", "Scrub and thorn forest"],
            explain: "Forests become less dense as rainfall falls: evergreen, then deciduous, then scrub.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. Water resources                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-water-resources",
    title: "Water Resources of Karnataka",
    icon: "🏞️",
    description: "East- and west-flowing rivers of Karnataka, irrigation by canals, wells and tanks, and the major river valley projects.",
    lessons: [
      {
        slug: "ka9-rivers-of-karnataka",
        title: "Rivers of Karnataka",
        summary: "East-flowing and west-flowing rivers, the Krishna and Kaveri systems, Sharavathi and Jog Falls.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "💧",
            caption: "A drop of rain falling on Talakaveri in Kodagu may travel all the way across the plateau to the Bay of Bengal. A drop falling a few kilometres west may reach the Arabian Sea in a day.",
          },
          {
            type: "text",
            md: "The **Western Ghats** are the main **water divide** (watershed) of Karnataka: a line of high land from which rivers flow away on two sides.\n\nRivers that rise on the Ghats and flow east across the plateau to the **Bay of Bengal** are **east-flowing rivers**. Rivers that rush down the western slopes to the **Arabian Sea** are **west-flowing rivers**.",
          },
          {
            type: "table",
            headers: ["", "East-flowing rivers", "West-flowing rivers"],
            rows: [
              ["Examples", "Krishna, Kaveri, Uttara Pinakini (Pennar), Dakshina Pinakini, Palar", "Sharavathi, Kali, Netravati, Gangavali (Bedti), Aghanashini"],
              ["Length", "long; they cross the whole plateau", "short; the coast is close to the Ghats"],
              ["Speed", "slow over gentle plateau slopes", "fast, with waterfalls, down steep slopes"],
              ["Main use", "irrigation over wide plains", "hydro-electric power"],
              ["Mouth", "Bay of Bengal (outside Karnataka)", "Arabian Sea (in Karnataka)"],
            ],
          },
          {
            type: "heading",
            text: "The two great river systems",
          },
          {
            type: "text",
            md: "The **Krishna** rises at **Mahabaleshwar** in Maharashtra and enters Karnataka in Belagavi district. It is about 1,400 km long. Its main tributaries in Karnataka are the **Ghataprabha**, **Malaprabha**, **Bhima** and **Tungabhadra**. The Tunga and the Bhadra join at **Koodli** near Shivamogga to form the Tungabhadra.\n\nThe **Kaveri** rises at **Talakaveri** in the **Brahmagiri hills** of Kodagu. Its tributaries include the **Harangi**, **Hemavathi**, **Lakshmanatirtha**, **Kabini**, **Shimsha** and **Arkavathi**. It forms the river islands of **Srirangapatna** and **Shivanasamudra**, where it drops in the **Gaganachukki** and **Bharachukki** falls. It then enters Tamil Nadu and reaches the Bay of Bengal.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Where does the Kaveri rise?",
                options: ["Mahabaleshwar", "Talakaveri in Kodagu", "Koodli near Shivamogga", "Agumbe"],
                answer: 1,
                explain: "The Kaveri rises at Talakaveri in the Brahmagiri hills. Mahabaleshwar is the source of the Krishna, and Koodli is where the Tunga and Bhadra meet.",
              },
            ],
          },
          {
            type: "text",
            md: "Among the west-flowing rivers, the **Sharavathi** is the best known. On its way to the sea at Honnavar it plunges over the edge of the Ghats at **Jog Falls** in four streams called **Raja, Rani, Roarer and Rocket**. The **Kali** reaches the sea near **Karwar**, and the **Netravati** near **Mangaluru**.",
          },
          {
            type: "example",
            title: "Classifying a river",
            problem: "The Kabini rises in Wayanad (Kerala) and joins the Kaveri in Karnataka. Is it an east-flowing or a west-flowing river? Explain.",
            steps: [
              "A tributary belongs to the system of the river it joins.",
              "The Kabini joins the Kaveri.",
              "The Kaveri flows east across the plateau to the Bay of Bengal.",
            ],
            answer: "The Kabini is part of the east-flowing Kaveri system, so its water ends up in the Bay of Bengal.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Sort each river by the sea its water reaches.",
              groups: ["Bay of Bengal", "Arabian Sea"],
              items: [
                { text: "Tungabhadra", group: 0, hint: "It joins the Krishna." },
                { text: "Sharavathi", group: 1, hint: "It forms Jog Falls on its way to Honnavar." },
                { text: "Hemavathi", group: 0, hint: "It is a tributary of the Kaveri." },
                { text: "Netravati", group: 1, hint: "It meets the sea at Mangaluru." },
                { text: "Kali", group: 1, hint: "Its mouth is near Karwar." },
                { text: "Ghataprabha", group: 0, hint: "It joins the Krishna." },
              ],
              explain: "Tributaries of the Krishna and Kaveri all end in the Bay of Bengal. Short rivers that fall down the Ghats to the coast end in the Arabian Sea.",
            },
          },
          {
            type: "mistake",
            wrong: "The Tungabhadra flows into the Arabian Sea because it starts in the Western Ghats.",
            right: "The Tungabhadra starts in the Ghats but flows east and joins the Krishna, which reaches the Bay of Bengal.",
            why: "Almost all rivers of Karnataka start in the Western Ghats, so the starting point does not tell you the sea. Follow the direction of flow, or the river it joins.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "In a 'differences' question, give at least three points in a two-column table (direction, length, speed, use, sea). Spell the source names exactly: **Talakaveri**, **Mahabaleshwar**, **Koodli**.",
          },
          {
            type: "keypoints",
            items: [
              "The Western Ghats divide east-flowing rivers (to the Bay of Bengal) from west-flowing rivers (to the Arabian Sea).",
              "Krishna: rises at Mahabaleshwar; tributaries Ghataprabha, Malaprabha, Bhima, Tungabhadra.",
              "Kaveri: rises at Talakaveri, Kodagu; tributaries include Harangi, Hemavathi, Kabini, Shimsha, Arkavathi.",
              "Tunga + Bhadra meet at Koodli to form the Tungabhadra.",
              "West-flowing rivers are short and fast; the Sharavathi forms Jog Falls.",
            ],
          },
        ],
        flashcards: [
          { front: "Water divide of Karnataka", back: "The Western Ghats. Rivers flow east to the Bay of Bengal or west to the Arabian Sea from them." },
          { front: "Source of the Krishna", back: "Mahabaleshwar, Maharashtra." },
          { front: "Source of the Kaveri", back: "Talakaveri, Brahmagiri hills, Kodagu." },
          { front: "Where is the Tungabhadra formed?", back: "At Koodli near Shivamogga, where the Tunga and the Bhadra join." },
          { front: "Jog Falls", back: "On the Sharavathi river; its four streams are Raja, Rani, Roarer and Rocket." },
          { front: "Gaganachukki and Bharachukki", back: "Waterfalls of the Kaveri at Shivanasamudra." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these is a west-flowing river?",
            options: ["Bhima", "Kabini", "Netravati", "Malaprabha"],
            answer: 2,
            explain: "The Netravati reaches the Arabian Sea at Mangaluru. The other three are tributaries of east-flowing rivers.",
          },
          {
            kind: "fill",
            q: "Jog Falls is formed by the river ___.",
            answer: ["Sharavathi", "Sharavati"],
            explain: "The Sharavathi drops over the edge of the Ghats at Jog.",
          },
          {
            kind: "truefalse",
            q: "West-flowing rivers of Karnataka are mainly used for hydro-electric power rather than large-scale irrigation.",
            answer: true,
            explain: "They are short and fast with steep falls, which suits power; the coast has little flat land to irrigate.",
          },
          {
            kind: "multi",
            q: "Which are tributaries of the Krishna?",
            options: ["Ghataprabha", "Hemavathi", "Bhima", "Tungabhadra", "Arkavathi"],
            answers: [0, 2, 3],
            explain: "Ghataprabha, Bhima and Tungabhadra join the Krishna. Hemavathi and Arkavathi are Kaveri tributaries.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "East-flowing rivers are longer than west-flowing ones because:",
            options: ["they get more rain", "the Bay of Bengal is far away across the plateau", "they start in Maharashtra", "they flow faster"],
            answer: 1,
            explain: "The Ghats are close to the west coast, so west-flowing rivers have a short way to go. East-flowing rivers cross the whole plateau.",
            difficulty: 2,
            hint: "Look at where the Ghats are compared with each sea.",
          },
          {
            kind: "order",
            q: "Order these points along the Kaveri, from source to sea.",
            items: ["Talakaveri", "Srirangapatna", "Shivanasamudra", "Bay of Bengal"],
            explain: "The river rises in Kodagu, passes Srirangapatna near Mysuru, falls at Shivanasamudra and then flows through Tamil Nadu to the sea.",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "ka9-irrigation-river-projects",
        title: "Irrigation and River Valley Projects",
        summary: "Canals, wells and tanks; multipurpose projects such as KRS, Tungabhadra, Upper Krishna and Sharavathi; saving water.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Most of the Maidan gets too little rain, and the rain does not come every month. So farmers need **irrigation**: supplying water to crops by artificial means.\n\nKarnataka uses three main sources of irrigation: **canals**, **wells and tube wells**, and **tanks**.",
          },
          {
            type: "table",
            headers: ["Source", "How it works", "Where it is common"],
            rows: [
              ["**Canals**", "water is taken from a dam or river along long channels", "Krishna, Tungabhadra and Kaveri basins (e.g. Mandya, Raichur)"],
              ["**Wells and tube wells**", "groundwater is lifted with pumps", "almost everywhere; most important in dry districts"],
              ["**Tanks**", "rainwater is stored behind an earth bund", "southern Maidan (Kolar, Tumakuru, Chikkaballapur, Bengaluru)"],
            ],
          },
          {
            type: "text",
            md: "Tanks suit the southern Maidan because its hard granite rock does not soak up water and the rolling land has natural hollows. Many tanks were built by old kingdoms and village communities.",
          },
          {
            type: "heading",
            text: "Multipurpose river valley projects",
          },
          {
            type: "text",
            md: "A **multipurpose river valley project** is a dam built across a river to serve many purposes at once: **irrigation**, **hydro-electricity**, **drinking water**, **flood control**, **fishing** and **tourism**.",
          },
          {
            type: "table",
            headers: ["Project", "River", "Notes"],
            rows: [
              ["**Krishnaraja Sagar (KRS)**", "Kaveri", "near Mysuru; built under Sir M. Visvesvaraya; Brindavan Gardens; irrigates Mandya"],
              ["**Tungabhadra Project**", "Tungabhadra", "dam near Hosapete; shared with Andhra Pradesh and Telangana"],
              ["**Upper Krishna Project**", "Krishna", "Almatti (Lal Bahadur Shastri Sagar) and Narayanapura (Basava Sagar) dams"],
              ["**Ghataprabha Project**", "Ghataprabha", "Hidkal dam, Belagavi district"],
              ["**Malaprabha Project**", "Malaprabha", "Renuka Sagar dam near Saundatti"],
              ["**Sharavathi Project**", "Sharavathi", "Linganamakki dam; mainly power"],
              ["**Kali Project**", "Kali", "Supa dam; mainly power"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "On which river is the Krishnaraja Sagar dam?",
                options: ["Krishna", "Kaveri", "Tungabhadra", "Sharavathi"],
                answer: 1,
                explain: "Despite its name, KRS is on the **Kaveri**. It is named after the Mysuru king Krishnaraja Wodeyar IV.",
              },
            ],
          },
          {
            type: "example",
            title: "Why a canal and not a tank?",
            problem: "Raichur district grows rice with canal water, while Kolar depends on tanks and borewells. Give reasons.",
            steps: [
              "Raichur lies in the Krishna–Tungabhadra basin with big dams upstream, so long canals can carry their water to its fields.",
              "Its plains are wide and gently sloping, which makes canal building easy.",
              "Kolar has no big river; its granite land has hollows that collect rainwater, so tanks were built.",
              "When tanks fail in dry years, Kolar farmers draw groundwater from borewells.",
            ],
            answer: "Canals need a large river and dam; Kolar has none, so it uses tanks and wells.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each dam or project to its river.",
              pairs: [
                ["Krishnaraja Sagar", "Kaveri"],
                ["Almatti", "Krishna"],
                ["Linganamakki", "Sharavathi"],
                ["Hidkal", "Ghataprabha"],
                ["Supa", "Kali"],
              ],
              explain: "Learn them as river–dam pairs. The name KRS does not tell you the river: it is on the Kaveri, while Almatti is on the Krishna.",
            },
          },
          {
            type: "mistake",
            wrong: "A dam is only for storing water for farms.",
            right: "A multipurpose project also gives electricity, drinking water, flood control, fishing and tourism.",
            why: "The farm canals are what people see most. But a dam like KRS supplies drinking water to Bengaluru and Mysuru, and the Sharavathi dams exist mainly for power.",
          },
          {
            type: "text",
            md: "Rivers cross state borders, so states share their water. Karnataka has had long disputes over the **Kaveri** (with Tamil Nadu, Kerala and Puducherry), the **Krishna** (with Maharashtra, Andhra Pradesh and Telangana) and the **Mahadayi** (with Goa). Water is limited, so **rainwater harvesting**, drip and sprinkler irrigation and reviving old tanks are important.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "If asked for the 'objectives of multipurpose projects', list at least four uses. In 'name the river' questions, a frequent error is writing *Krishna* for KRS; check the river every time.",
          },
          {
            type: "keypoints",
            items: [
              "Three sources of irrigation: canals, wells and tube wells, and tanks.",
              "Tanks are typical of the southern Maidan; canals of the big river basins.",
              "Multipurpose projects serve irrigation, power, drinking water, flood control, fishing and tourism.",
              "KRS is on the Kaveri; Almatti and Narayanapura on the Krishna; Linganamakki on the Sharavathi.",
              "Saving water: rainwater harvesting, drip irrigation, reviving tanks.",
            ],
          },
        ],
        flashcards: [
          { front: "Irrigation", back: "Supplying water to crops by artificial means such as canals, wells and tanks." },
          { front: "Why tanks in the southern Maidan?", back: "Hard granite rock holds water on the surface and the rolling land has natural hollows." },
          { front: "Multipurpose river valley project", back: "A dam serving irrigation, power, drinking water, flood control, fishing and tourism." },
          { front: "KRS dam", back: "Krishnaraja Sagar on the Kaveri near Mysuru, built under Sir M. Visvesvaraya." },
          { front: "Upper Krishna Project dams", back: "Almatti (Lal Bahadur Shastri Sagar) and Narayanapura (Basava Sagar)." },
          { front: "Tungabhadra dam", back: "Near Hosapete; a joint project with Andhra Pradesh and Telangana." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Tank irrigation is most common in:",
            options: ["the coastal plains", "the southern Maidan", "the Malnad", "the Krishna delta"],
            answer: 1,
            explain: "Kolar, Tumakuru, Chikkaballapur and Bengaluru districts have thousands of tanks.",
          },
          {
            kind: "multi",
            q: "Which of these are purposes of a multipurpose project?",
            options: ["Irrigation", "Hydro-electricity", "Flood control", "Mining iron ore", "Drinking water"],
            answers: [0, 1, 2, 4],
            explain: "Mining has nothing to do with a dam. All the others are standard purposes.",
          },
          {
            kind: "fill",
            q: "The Almatti dam on the Krishna is also called Lal Bahadur ___ Sagar.",
            answer: ["Shastri"],
            explain: "It is part of the Upper Krishna Project.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "The Linganamakki dam is built mainly to produce hydro-electricity.",
            answer: true,
            explain: "It stores Sharavathi water for the power stations near Jog.",
          },
          {
            kind: "mcq",
            q: "Karnataka has a water dispute with Goa over the river:",
            options: ["Kaveri", "Krishna", "Mahadayi", "Tungabhadra"],
            answer: 2,
            explain: "The Mahadayi (Mandovi) flows from Karnataka into Goa. The Kaveri dispute is with Tamil Nadu and others.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which engineer is linked with building the KRS dam?",
            options: ["Sir C. V. Raman", "Sir M. Visvesvaraya", "Homi Bhabha", "Kempegowda"],
            answer: 1,
            explain: "Sir M. Visvesvaraya, the great engineer and Dewan of Mysore, planned the KRS dam.",
          },
          {
            kind: "truefalse",
            q: "Canal irrigation is easy in hilly areas like Kodagu.",
            answer: false,
            explain: "Canals need gently sloping plains. Steep hills make canals hard to build.",
            difficulty: 2,
            hint: "Think about how water moves along a channel.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 4. Land use and agriculture                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-land-use-agriculture",
    title: "Land Use and Agriculture in Karnataka",
    icon: "🌾",
    description: "How Karnataka's land is used, farming seasons and types, the main food, commercial and plantation crops, and sericulture.",
    lessons: [
      {
        slug: "ka9-land-use-farming",
        title: "Land Use and Farming in Karnataka",
        summary: "Land use categories, net and gross sown area, crop seasons, dry and irrigated farming, and farmers' problems.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "illustration",
            emoji: "🧑‍🌾",
            caption: "A village map shows fields, a forest patch, a grazing ground, houses and a tank. Each piece of land has a use.",
          },
          {
            type: "text",
            md: "**Land use** means the way land is used: for forests, farming, grazing, houses, roads and so on. Land is limited, so how we use it matters.\n\nThe government records land use in these main groups: **forest land**, **land not available for cultivation** (barren land, and land under buildings, roads, water), **other uncultivated land** (pastures, tree groves, cultivable waste land), **fallow land** (land left without crops for a while) and **net sown area**.",
          },
          {
            type: "text",
            md: "The **net sown area** is the land actually sown with crops at least once in a year. If a field is sown twice in one year, it is counted twice in the **gross cropped area**.",
          },
          {
            type: "formula",
            tex: "\\text{Gross cropped area} = \\text{Net sown area} + \\text{Area sown more than once}",
            caption: "Farming is more intense where irrigation lets farmers grow two or three crops a year.",
          },
          {
            type: "example",
            title: "Net and gross sown area",
            problem: "A village has 500 hectares of net sown area. With canal water, 200 hectares of it are sown a second time in the rabi season. What is the gross cropped area?",
            steps: [
              "Net sown area = 500 ha (every field sown at least once).",
              "Area sown more than once = 200 ha.",
              "Gross cropped area = 500 + 200.",
            ],
            answer: "700 hectares.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "Net sown area is 800 ha and gross cropped area is 1,100 ha. How many hectares were sown more than once?",
                answer: 300,
                unit: "ha",
                explain: "Area sown more than once = 1,100 − 800 = 300 ha.",
              },
            ],
          },
          {
            type: "heading",
            text: "Crop seasons and types of farming",
          },
          {
            type: "table",
            headers: ["Season", "Months", "Examples in Karnataka"],
            rows: [
              ["**Kharif**", "June to October (with the south-west monsoon)", "rice, ragi, maize, tur, groundnut, cotton"],
              ["**Rabi**", "October to March", "rabi jowar, wheat, Bengal gram, sunflower"],
              ["**Summer**", "March to June (with irrigation)", "vegetables, groundnut, watermelon"],
            ],
          },
          {
            type: "text",
            md: "Most farmland in Karnataka is **rain-fed**: it depends only on rain. This is called **dry farming**, and it grows hardy crops like ragi, jowar and pulses. Where canals or wells give water, farmers practise **irrigated farming** and grow rice, sugarcane and vegetables.\n\nFarmers face problems: uncertain monsoon and droughts, small and scattered land holdings, soil erosion, debt and low prices. Help comes from irrigation, **watershed development**, crop insurance, better seeds and regulated markets (**APMC**).",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Is each crop usually kharif or rabi in Karnataka?",
              groups: ["Kharif", "Rabi"],
              items: [
                { text: "Rice in the monsoon", group: 0, hint: "It needs plenty of monsoon rain." },
                { text: "Bengal gram", group: 1, hint: "It grows on stored soil moisture in the cool season." },
                { text: "Ragi", group: 0, hint: "It is sown when the monsoon rains start." },
                { text: "Wheat", group: 1, hint: "It needs cool weather." },
                { text: "Cotton", group: 0, hint: "It is sown in June–July." },
                { text: "Rabi jowar of north Karnataka", group: 1, hint: "The name tells you." },
              ],
              explain: "Kharif crops are sown at the start of the monsoon; rabi crops are sown after it, in the cool dry months, often on moisture stored in black soil.",
            },
          },
          {
            type: "mistake",
            wrong: "Net sown area and gross cropped area are the same thing.",
            right: "Net sown area counts each field once; gross cropped area counts a field again for every extra crop in the year.",
            why: "Both measure sown land, so the words sound alike. The difference shows how much double cropping happens, which depends on irrigation.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'problems of agriculture', write four separate points, each with one line of explanation. Mention **dependence on the monsoon** first; it is the point examiners expect.",
          },
          {
            type: "keypoints",
            items: [
              "Land use groups: forest, not available for cultivation, other uncultivated, fallow, net sown area.",
              "Gross cropped area = net sown area + area sown more than once.",
              "Kharif (Jun–Oct), rabi (Oct–Mar) and summer crops.",
              "Most farming is rain-fed dry farming; irrigation allows two or more crops.",
            ],
          },
        ],
        flashcards: [
          { front: "Land use", back: "The way land is used: forest, farming, pasture, buildings, roads and so on." },
          { front: "Net sown area", back: "Land sown with crops at least once in a year, each field counted once." },
          { front: "Gross cropped area", back: "Net sown area plus area sown more than once in the year." },
          { front: "Fallow land", back: "Farmland left uncultivated for a time so that it regains fertility." },
          { front: "Dry farming", back: "Farming that depends only on rainfall, growing hardy crops like ragi and jowar." },
          { front: "Kharif and rabi", back: "Kharif: June–October with the monsoon. Rabi: October–March, the cool dry season." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Land left without crops for a year or two to regain fertility is called:",
            options: ["barren land", "fallow land", "pasture", "net sown area"],
            answer: 1,
            explain: "Fallow land is farmland rested for a while. Barren land cannot be farmed at all.",
          },
          {
            kind: "numeric",
            q: "A taluk has 40,000 ha net sown area and 12,000 ha sown more than once. What is its gross cropped area (in ha)?",
            answer: 52000,
            unit: "ha",
            explain: "40,000 + 12,000 = 52,000 ha.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Most of Karnataka's farmland is irrigated.",
            answer: false,
            explain: "Most farmland is rain-fed. That is why droughts hit farmers hard.",
          },
          {
            kind: "fill",
            q: "Crops sown with the onset of the south-west monsoon are called ___ crops.",
            answer: ["kharif"],
            explain: "Kharif crops are sown in June–July and harvested around October.",
          },
          {
            kind: "multi",
            q: "Which are problems faced by Karnataka's farmers?",
            options: ["Uncertain monsoon", "Small land holdings", "Too much flat land", "Soil erosion", "Debt"],
            answers: [0, 1, 3, 4],
            explain: "Flat land is not a problem. The rest are the usual problems listed in the textbook.",
          },
          {
            kind: "order",
            q: "Order the seasons as they come in a farming year, starting in June.",
            items: ["Kharif", "Rabi", "Summer"],
            explain: "Kharif with the monsoon, rabi in the cool months, summer crops with irrigation before the next monsoon.",
          },
        ],
      },
      {
        slug: "ka9-crops-of-karnataka",
        title: "Crops of Karnataka",
        summary: "Food crops, commercial and plantation crops, horticulture and sericulture, and where each is grown.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Crops are grouped by their use. **Food crops** are grown mainly to eat. **Commercial crops** (cash crops) are grown mainly to sell, often as raw material for industries. **Plantation crops** are commercial crops grown on large estates, usually on hill slopes.",
          },
          {
            type: "table",
            headers: ["Crop", "Type", "Main areas"],
            rows: [
              ["**Rice**", "food", "coast, Malnad and canal areas (Mandya, Raichur, Davanagere, Shivamogga)"],
              ["**Ragi**", "food", "southern Maidan (Tumakuru, Hassan, Mandya, Bengaluru Rural); Karnataka is India's top ragi producer"],
              ["**Jowar**", "food", "northern Maidan (Vijayapura, Kalaburagi, Belagavi)"],
              ["**Maize**", "food / fodder", "Davanagere, Haveri, Belagavi"],
              ["**Tur** (red gram)", "pulse", "Kalaburagi and Bidar"],
              ["**Sugarcane**", "commercial", "Belagavi, Bagalkote, Mandya"],
              ["**Cotton**", "commercial", "black-soil districts: Dharwad, Haveri, Raichur, Ballari"],
              ["**Coffee**", "plantation", "Kodagu, Chikkamagaluru, Hassan; Karnataka produces most of India's coffee"],
              ["**Arecanut**", "plantation", "Shivamogga, Dakshina Kannada, Davanagere, Chitradurga"],
            ],
          },
          {
            type: "text",
            md: "Coffee came to India through Karnataka. Tradition says **Baba Budan** brought seeds from Yemen and planted them in the hills of Chikkamagaluru, now called the **Baba Budan hills**. Coffee needs a warm, wet climate, shade and well-drained hill slopes, which the Malnad provides.\n\nOther crops include groundnut, sunflower, coconut (Tumakuru, Hassan and the coast), pepper and cardamom (Malnad), and tobacco (Mysuru district).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which district is best known for coffee?",
                options: ["Raichur", "Kodagu", "Vijayapura", "Kolar"],
                answer: 1,
                explain: "Kodagu, with Chikkamagaluru and Hassan, is the coffee land of Karnataka. The others are too dry and flat.",
              },
            ],
          },
          {
            type: "heading",
            text: "Horticulture and sericulture",
          },
          {
            type: "text",
            md: "**Horticulture** is growing fruits, vegetables and flowers. Kolar is known for mangoes, Vijayapura for grapes, Bagalkote and Chitradurga for pomegranates, and Bengaluru for flowers.\n\n**Sericulture** is rearing silkworms to produce silk. Silkworms feed on **mulberry** leaves and spin **cocoons**, from which silk thread is reeled. Karnataka is India's leading producer of mulberry silk. Ramanagara, Kolar, Chikkaballapur, Mandya and Mysuru are the main areas, and Ramanagara has a big cocoon market.",
          },
          {
            type: "example",
            title: "Explaining a crop's location",
            problem: "Why is jowar grown widely in Vijayapura while rice is grown in Udupi?",
            steps: [
              "Vijayapura is in the dry northern Maidan with low rainfall.",
              "Jowar is a hardy crop that needs little water, and black soil keeps moisture for it.",
              "Udupi is on the coast with very heavy monsoon rain.",
              "Rice needs a lot of water, even standing water in the fields, so it suits Udupi.",
            ],
            answer: "Each crop matches the rainfall: hardy jowar in dry Vijayapura, water-loving rice in rainy Udupi.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each product to the area best known for it.",
              pairs: [
                ["Coffee", "Kodagu"],
                ["Silk cocoons", "Ramanagara"],
                ["Tur dal", "Kalaburagi"],
                ["Mangoes", "Kolar"],
                ["Grapes", "Vijayapura"],
              ],
              explain: "Plantation crops grow in the wet Malnad; silk, mangoes and ragi in the southern Maidan; pulses, grapes and jowar in the drier north.",
            },
          },
          {
            type: "mistake",
            wrong: "Sericulture means growing mulberry trees for fruit.",
            right: "Sericulture is rearing silkworms to get silk; mulberry is grown only as food for the silkworms.",
            why: "Mulberry fields are what you see in a silk village, so students think the crop is the product. The real product is the cocoon and the silk reeled from it.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When asked for the 'conditions needed' for a crop, give **temperature, rainfall, soil and slope**, and then name two districts. For coffee add **shade** and **well-drained slopes**.",
          },
          {
            type: "keypoints",
            items: [
              "Food crops: rice, ragi, jowar, maize, pulses. Karnataka leads India in ragi.",
              "Commercial crops: sugarcane, cotton, groundnut, sunflower, tobacco.",
              "Plantation crops: coffee (Karnataka leads India), arecanut, coconut, pepper, cardamom.",
              "Sericulture is rearing silkworms on mulberry; Karnataka leads India in mulberry silk.",
            ],
          },
        ],
        flashcards: [
          { front: "Commercial crop", back: "A crop grown mainly for sale, often as industrial raw material, e.g. cotton, sugarcane." },
          { front: "Plantation crop", back: "A commercial crop grown on large estates on hill slopes, e.g. coffee, arecanut." },
          { front: "India's leading producer of coffee", back: "Karnataka: Kodagu, Chikkamagaluru and Hassan." },
          { front: "Baba Budan", back: "Said to have brought coffee seeds from Yemen and planted them in the Chikkamagaluru hills." },
          { front: "Sericulture", back: "Rearing silkworms on mulberry leaves to produce silk." },
          { front: "Horticulture", back: "Growing fruits, vegetables and flowers." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Karnataka is India's leading producer of which food crop?",
            options: ["Wheat", "Ragi", "Rice", "Bajra"],
            answer: 1,
            explain: "Karnataka grows more ragi than any other state, mostly in the southern Maidan.",
          },
          {
            kind: "truefalse",
            q: "Coffee grows best on flat, dry plains with no shade.",
            answer: false,
            explain: "Coffee needs warm wet hill slopes with good drainage and shade trees, as in Kodagu.",
          },
          {
            kind: "multi",
            q: "Which of these are plantation crops?",
            options: ["Coffee", "Jowar", "Arecanut", "Tur", "Pepper"],
            answers: [0, 2, 4],
            explain: "Coffee, arecanut and pepper grow on estates in the Malnad. Jowar and tur are food crops of the plains.",
          },
          {
            kind: "fill",
            q: "Silkworms feed on the leaves of the ___ plant.",
            answer: ["mulberry"],
            explain: "That is why Karnataka's silk is called mulberry silk.",
          },
          {
            kind: "mcq",
            q: "Cotton is grown mostly in which part of Karnataka?",
            options: ["Coastal plains", "Malnad", "Black-soil districts of the north", "Kodagu"],
            answer: 2,
            explain: "Cotton needs the moisture-holding black soil of Dharwad, Haveri, Raichur and Ballari.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which town is known for its large silk cocoon market?",
            options: ["Ramanagara", "Udupi", "Bidar", "Madikeri"],
            answer: 0,
            explain: "Ramanagara town, near Bengaluru, is the centre of the cocoon trade. (In 2025 Ramanagara district was renamed Bengaluru South district; the town keeps its name.)",
          },
          {
            kind: "truefalse",
            q: "Sugarcane is a commercial crop that needs plenty of water.",
            answer: true,
            explain: "Sugarcane grows in irrigated areas like Mandya and Belagavi and supplies sugar mills.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 5. Minerals, power and industries                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-minerals-power-industries",
    title: "Minerals, Power and Industries of Karnataka",
    icon: "🏭",
    description: "Karnataka's minerals, its hydel, thermal, nuclear and renewable power, and its major industries and industrial centres.",
    lessons: [
      {
        slug: "ka9-minerals-and-power",
        title: "Minerals and Power Resources",
        summary: "Iron ore, manganese, gold, bauxite and limestone; hydel, thermal, nuclear, wind and solar power in Karnataka.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "illustration",
            emoji: "⛏️",
            caption: "The red dust on the roads around Sandur and Hosapete comes from iron ore, one of Karnataka's richest minerals.",
          },
          {
            type: "text",
            md: "A **mineral** is a natural substance with a definite make-up, found in rocks. **Metallic minerals** contain metal (iron, gold, manganese); **non-metallic minerals** do not (limestone, mica).\n\nKarnataka is rich in metallic minerals because much of it is made of very old **Dharwar rocks**, named after Dharwad. These rocks hold iron, manganese and gold.",
          },
          {
            type: "table",
            headers: ["Mineral", "Main areas", "Used for"],
            rows: [
              ["**Iron ore**", "Ballari–Hosapete–Sandur belt; Baba Budan hills (Chikkamagaluru)", "iron and steel"],
              ["**Manganese**", "Sandur, Shivamogga, Chitradurga", "making steel hard"],
              ["**Gold**", "Hutti (Raichur district); Kolar Gold Fields (closed in 2001)", "jewellery, reserves, electronics"],
              ["**Bauxite**", "Belagavi", "aluminium"],
              ["**Limestone**", "Kalaburagi, Bagalkote, Vijayapura", "cement"],
              ["**Chromite**", "Hassan, Mysuru", "stainless steel"],
            ],
          },
          {
            type: "text",
            md: "Karnataka produces most of India's gold, now mainly from the **Hutti Gold Mines** in Raichur district. Iron ore was also mined at **Kudremukh**, but mining there was stopped in 2005 to protect the forests and rivers of the Western Ghats.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which mine is the main source of gold in Karnataka today?",
                options: ["Kolar Gold Fields", "Hutti", "Kudremukh", "Sandur"],
                answer: 1,
                explain: "Kolar Gold Fields closed in 2001. Hutti in Raichur district is the working gold mine. Kudremukh and Sandur are iron-ore areas.",
              },
            ],
          },
          {
            type: "heading",
            text: "Power resources",
          },
          {
            type: "text",
            md: "Power is grouped into **conventional sources** (coal, water, nuclear fuel) and **non-conventional** or **renewable sources** (sun, wind, biomass), which do not run out.",
          },
          {
            type: "table",
            headers: ["Type", "Examples in Karnataka"],
            rows: [
              ["**Hydro-electric (hydel)**", "Shivanasamudra on the Kaveri (1902, one of the first in Asia); Sharavathi projects near Jog (Mahatma Gandhi power station, Linganamakki); Kali project (Nagjhari, Supa)"],
              ["**Thermal** (coal)", "Raichur Thermal Power Station (Shaktinagar), Ballari (Kudatini), Yermarus (Raichur)"],
              ["**Nuclear**", "Kaiga Generating Station, Uttara Kannada"],
              ["**Wind**", "Chitradurga, Gadag and other windy plateau areas"],
              ["**Solar**", "Pavagada Solar Park in Tumakuru district, one of the largest in the world"],
            ],
          },
          {
            type: "example",
            title: "Why thermal plants are at Raichur",
            problem: "Karnataka has no coal mines, yet its biggest thermal power plant is at Raichur. Suggest reasons.",
            steps: [
              "A thermal plant burns coal and needs huge amounts of water for cooling.",
              "Raichur is on the Krishna, so water is available.",
              "It lies in the north-east, nearer to the coalfields of Telangana and other states, so coal comes by rail more cheaply.",
              "Northern Karnataka has few hydel sites, so a plant there spreads power supply across the state.",
            ],
            answer: "Water from the Krishna, nearness to coal by rail, and the need for power in the north.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Conventional or non-conventional source of power?",
              groups: ["Conventional", "Non-conventional"],
              items: [
                { text: "Raichur thermal plant", group: 0, hint: "It burns coal, which will run out." },
                { text: "Pavagada solar park", group: 1, hint: "Sunlight never runs out." },
                { text: "Kaiga nuclear plant", group: 0, hint: "Uranium fuel is a limited, conventional source." },
                { text: "Wind farms of Chitradurga", group: 1, hint: "Wind is renewable." },
                { text: "Sharavathi hydel station", group: 0, hint: "Big dams are counted as conventional in the textbook." },
                { text: "Biogas plant in a village", group: 1, hint: "It uses cow dung and waste." },
              ],
              explain: "Coal, nuclear fuel and big hydel projects are conventional sources. Sun, wind and biogas are non-conventional and renewable.",
            },
          },
          {
            type: "mistake",
            wrong: "Kolar Gold Fields is still India's main gold mine.",
            right: "Kolar Gold Fields closed in 2001; gold now comes mainly from Hutti in Raichur district.",
            why: "Old books and stories made KGF famous, so it is the first name students remember. Always check whether a mine is still working.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "On the outline map, mark **Kaiga**, **Raichur**, **Shivanasamudra** and **Jog** correctly; these are frequent map questions. Write 'Hutti, Raichur district' rather than just 'Raichur' for gold.",
          },
          {
            type: "keypoints",
            items: [
              "Old Dharwar rocks make Karnataka rich in iron ore, manganese and gold.",
              "Iron ore: Ballari–Hosapete–Sandur; gold: Hutti; bauxite: Belagavi; limestone: Kalaburagi.",
              "Hydel: Shivanasamudra (1902), Sharavathi, Kali. Thermal: Raichur, Ballari. Nuclear: Kaiga.",
              "Renewables are growing: wind in Chitradurga and Gadag, solar at Pavagada.",
            ],
          },
        ],
        flashcards: [
          { front: "Why is Karnataka rich in metallic minerals?", back: "Much of it is made of old Dharwar rocks, which contain iron, manganese and gold." },
          { front: "Main iron-ore belt", back: "Ballari–Hosapete–Sandur." },
          { front: "Working gold mine of Karnataka", back: "Hutti, Raichur district. Kolar Gold Fields closed in 2001." },
          { front: "Shivanasamudra", back: "Hydel power station on the Kaveri, started in 1902, one of the first in Asia." },
          { front: "Nuclear power in Karnataka", back: "Kaiga Generating Station, Uttara Kannada district." },
          { front: "Pavagada", back: "A huge solar park in Tumakuru district." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Limestone from Kalaburagi and Bagalkote is mainly used to make:",
            options: ["steel", "cement", "aluminium", "glass bangles"],
            answer: 1,
            explain: "Limestone is the main raw material for cement.",
          },
          {
            kind: "fill",
            q: "The Kaiga nuclear power station is in ___ district.",
            answer: ["Uttara Kannada"],
            explain: "Kaiga is near Karwar in Uttara Kannada.",
          },
          {
            kind: "truefalse",
            q: "Iron-ore mining at Kudremukh was stopped to protect the Western Ghats.",
            answer: true,
            explain: "Mining ended in 2005 because it was damaging the forest and the Bhadra river.",
          },
          {
            kind: "multi",
            q: "Which are renewable (non-conventional) sources of power?",
            options: ["Solar", "Coal", "Wind", "Biogas", "Uranium"],
            answers: [0, 2, 3],
            explain: "Sun, wind and biogas renew themselves. Coal and uranium are limited.",
          },
          {
            kind: "mcq",
            q: "Bauxite, the ore of aluminium, is mined mainly in:",
            options: ["Belagavi", "Kolar", "Udupi", "Mandya"],
            answer: 0,
            explain: "Belagavi district has bauxite deposits.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Why are most hydel stations in the Malnad region?",
            options: ["It has coal", "Fast rivers fall steeply down the Ghats with heavy rain", "It has the most people", "It is flat"],
            answer: 1,
            explain: "Heavy rain and steep falls give fast-flowing water, which turns turbines well.",
            difficulty: 2,
            hint: "Hydel power needs falling water.",
          },
          {
            kind: "order",
            q: "Order these by the year they came into the story, earliest first.",
            items: ["Shivanasamudra hydel station starts", "Kolar Gold Fields closes", "Kudremukh iron-ore mining stops"],
            explain: "1902, then 2001, then 2005.",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "ka9-industries-of-karnataka",
        title: "Industries of Karnataka",
        summary: "Factors of location, agro-based, forest-based and mineral-based industries, and engineering and IT in Bengaluru.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "An **industry** turns raw materials into more useful goods: cotton into cloth, cane into sugar, ore into steel. This is called **manufacturing**.\n\nAn industry grows where it can get **raw materials**, **power**, **water**, **transport**, **labour**, **capital** and a **market**. These are the **factors of location**.",
          },
          {
            type: "table",
            headers: ["Type", "Raw material from", "Examples in Karnataka"],
            rows: [
              ["**Agro-based**", "farms", "cotton textiles (Davanagere, Ballari, Hubballi, Mysuru), sugar (Mandya, Belagavi, Bagalkote), silk (Mysuru)"],
              ["**Forest-based**", "forests", "paper (Bhadravati, Dandeli), sandalwood oil (Mysuru, Shivamogga) and sandal soap (Bengaluru)"],
              ["**Mineral-based**", "mines", "iron and steel (Bhadravati, Toranagallu), cement (Kalaburagi, Bagalkote)"],
              ["**Engineering and knowledge-based**", "skills and parts", "aircraft, electronics, machines and software (Bengaluru)"],
            ],
          },
          {
            type: "text",
            md: "**Davanagere** has so many cotton mills that it is called the **Manchester of Karnataka**. **Mysuru silk** is famous across India.\n\nThe **Mysore Iron Works** was started at **Bhadravati** in **1923**, with the support of **Sir M. Visvesvaraya**; it later became the **Visvesvaraya Iron and Steel Plant**. Today the biggest steel plant in the state is the private **JSW Steel** plant at **Toranagallu** in Ballari district.",
          },
          {
            type: "example",
            title: "Factors of location: Bhadravati",
            problem: "Explain why an iron and steel plant was set up at Bhadravati.",
            steps: [
              "Raw material: iron ore from the nearby Baba Budan hills (Kemmangundi).",
              "Fuel: charcoal from the Malnad forests at first, later hydel power from the Ghats.",
              "Water: the Bhadra river flows past the town.",
              "Limestone, needed in steel-making, was available nearby, and a railway line linked the town to markets.",
            ],
            answer: "Ore, fuel, water, limestone and transport were all close at hand.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which city is called the 'Manchester of Karnataka'?",
                options: ["Mysuru", "Davanagere", "Hubballi", "Mangaluru"],
                answer: 1,
                explain: "Davanagere is famous for its cotton textile mills, like Manchester in England.",
              },
            ],
          },
          {
            type: "text",
            md: "**Bengaluru** is India's leading centre for **information technology** (IT) and is called the **Silicon Valley of India**. It also has big public-sector units such as **HAL** (Hindustan Aeronautics Limited, aircraft), **BEL** (electronics), **BEML** (earth-moving machines) and **BHEL** (electrical equipment), and many **biotechnology** firms.\n\nOn the coast, **Mangaluru** has a petroleum refinery (**MRPL**) and fertiliser and chemical plants that use the port.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each place to the industry it is known for.",
              pairs: [
                ["Davanagere", "Cotton textiles"],
                ["Mandya", "Sugar"],
                ["Dandeli", "Paper"],
                ["Toranagallu", "Steel"],
                ["Bengaluru", "Aircraft and software"],
                ["Shahabad", "Cement"],
              ],
              explain: "Agro-based mills sit near farms (cotton, cane), paper mills near forests, steel near iron ore, cement near limestone, and high-tech industry where skilled workers and capital gather.",
            },
          },
          {
            type: "mistake",
            wrong: "Industries are set up only where the raw material is found.",
            right: "Raw material is one factor; power, water, transport, labour, capital and market also decide location.",
            why: "Steel and cement plants do sit near mines, so students make it a rule. But Bengaluru's IT and aircraft industries need skilled people and capital, not mines.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For a 'factors of location' answer, write the factor as a heading word (**raw material, power, water, transport, labour, market, capital**) followed by one example from Karnataka. Five such points usually earn full marks.",
          },
          {
            type: "keypoints",
            items: [
              "Factors of location: raw material, power, water, transport, labour, capital, market.",
              "Agro-based: cotton (Davanagere), sugar (Mandya), silk (Mysuru).",
              "Forest-based: paper (Bhadravati, Dandeli), sandalwood products.",
              "Mineral-based: iron and steel (Bhadravati 1923, Toranagallu), cement (Kalaburagi, Bagalkote).",
              "Bengaluru: IT, aircraft (HAL), electronics, biotechnology; the Silicon Valley of India.",
            ],
          },
        ],
        flashcards: [
          { front: "Factors of location of industry", back: "Raw material, power, water, transport, labour, capital and market." },
          { front: "Manchester of Karnataka", back: "Davanagere, known for cotton textile mills." },
          { front: "Mysore Iron Works", back: "Started at Bhadravati in 1923 with Sir M. Visvesvaraya's support; later the Visvesvaraya Iron and Steel Plant." },
          { front: "Largest steel plant in Karnataka today", back: "JSW Steel at Toranagallu, Ballari district." },
          { front: "Silicon Valley of India", back: "Bengaluru, the leading IT centre." },
          { front: "HAL", back: "Hindustan Aeronautics Limited, Bengaluru: makes aircraft and helicopters." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "A paper mill is a:",
            options: ["mineral-based industry", "forest-based industry", "agro-based industry", "marine-based industry"],
            answer: 1,
            explain: "Paper is made from wood pulp and bamboo, which come from forests.",
          },
          {
            kind: "truefalse",
            q: "Sugar mills are usually built near sugarcane fields.",
            answer: true,
            explain: "Cane is heavy and loses sugar quickly after cutting, so mills are built close to the fields, as in Mandya and Belagavi.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The Mysore Iron Works at Bhadravati was started in the year ___.",
            answer: ["1923"],
            explain: "It was planned with the support of Sir M. Visvesvaraya.",
          },
          {
            kind: "multi",
            q: "Which of these are agro-based industries?",
            options: ["Cotton textiles", "Cement", "Sugar", "Silk weaving", "Iron and steel"],
            answers: [0, 2, 3],
            explain: "Cotton, sugar and silk get raw material from farms. Cement and steel are mineral-based.",
          },
          {
            kind: "mcq",
            q: "Why is Bengaluru a big IT centre?",
            options: ["It has iron-ore mines", "It has skilled workers, colleges, research institutions and capital", "It is a seaport", "It grows coffee"],
            answer: 1,
            explain: "IT needs educated people and investment, not raw materials from mines or farms.",
            difficulty: 2,
            hint: "What does a software company need most?",
          },
          {
            kind: "mcq",
            q: "Which industry is located at Mangaluru because of the port?",
            options: ["Petroleum refinery", "Silk weaving", "Sandalwood carving", "Coffee curing only"],
            answer: 0,
            explain: "Crude oil comes by ship, so the MRPL refinery is near the New Mangalore Port.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 6. Transport, communication and tourism                            */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-transport-communication-tourism",
    title: "Transport, Communication and Tourism in Karnataka",
    icon: "🚆",
    description: "Roads, railways, ports and airports of Karnataka, means of communication, and its heritage, natural and religious tourist places.",
    lessons: [
      {
        slug: "ka9-transport-and-communication",
        title: "Transport and Communication",
        summary: "Types of roads, railways, the New Mangalore Port, airports, and personal and mass communication.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "**Transport** moves people and goods from one place to another. **Communication** moves messages and information. Both are called the **lifelines** of the economy because farms, mines and factories depend on them.\n\nKarnataka has four kinds of transport: **road**, **rail**, **water** and **air**.",
          },
          {
            type: "table",
            headers: ["Type of road", "Built and kept up by", "Links"],
            rows: [
              ["**National Highways**", "the Central Government", "important cities of different states"],
              ["**State Highways**", "the State Government", "district headquarters with the capital and each other"],
              ["**District roads**", "the district administration (Zilla Panchayat / PWD)", "taluks and towns within a district"],
              ["**Village roads**", "panchayats and rural schemes", "villages to towns and main roads"],
            ],
          },
          {
            type: "text",
            md: "Important National Highways are **NH 48** (Bengaluru–Tumakuru–Chitradurga–Davanagere–Hubballi–Belagavi), **NH 66** along the coast (Mangaluru–Udupi–Karwar) and **NH 44** (Bengaluru towards Hyderabad).\n\n**Railways** carry heavy goods and many passengers cheaply over long distances. The **South Western Railway** zone has its headquarters at **Hubballi**. The **Konkan Railway** runs along the coast through Udupi and Karwar. Bengaluru has a metro rail, **Namma Metro**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Who builds and maintains National Highways?",
                options: ["Gram panchayat", "Zilla panchayat", "State Government", "Central Government"],
                answer: 3,
                explain: "National Highways are the Central Government's responsibility. State Highways are the State Government's.",
              },
            ],
          },
          {
            type: "text",
            md: "**Water transport**: the **New Mangalore Port** at Panambur is Karnataka's only **major port**. It exports iron ore, coffee and cashew and imports crude oil and LPG. **Karwar** and smaller ports such as **Belekeri**, **Honnavar**, **Bhatkal** and **Malpe** are **minor ports**.\n\n**Air transport** is fastest. **Kempegowda International Airport** at Devanahalli near Bengaluru and **Mangaluru International Airport** connect Karnataka with the world. Hubballi, Belagavi, Mysuru, Kalaburagi and other cities have domestic airports.",
          },
          {
            type: "example",
            title: "Choosing the right transport",
            problem: "A Ballari mine wants to send 50,000 tonnes of iron ore to another country. Which means of transport should it use?",
            steps: [
              "The load is very heavy and bulky, so air transport is far too costly.",
              "Trucks on roads would need thousands of trips; rail carries bulk goods more cheaply over land.",
              "To cross the sea, ships are the cheapest way to move bulk cargo.",
            ],
            answer: "Rail from Ballari to a port (such as New Mangalore or Goa), then a ship.",
          },
          {
            type: "heading",
            text: "Communication",
          },
          {
            type: "text",
            md: "**Personal communication** is between people: letters (post), telephone, mobile phones and e-mail. **Mass communication** reaches many people at once: newspapers, radio, television and the internet.\n\nKarnataka plays a big role in communication technology. The headquarters of **ISRO** (Indian Space Research Organisation) is in Bengaluru, and its **Master Control Facility**, which controls communication satellites, is at **Hassan**.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Personal or mass communication?",
              groups: ["Personal", "Mass"],
              items: [
                { text: "A letter to your grandmother", group: 0, hint: "It goes to one person." },
                { text: "A Kannada news channel", group: 1, hint: "Lakhs of people watch it at once." },
                { text: "A phone call to a friend", group: 0, hint: "One person talks to another." },
                { text: "A daily newspaper", group: 1, hint: "The same news reaches many readers." },
                { text: "A radio programme from Dharwad station", group: 1, hint: "Anyone with a radio can hear it." },
              ],
              explain: "Personal communication is one person to another. Mass communication sends the same message to a large audience.",
            },
          },
          {
            type: "mistake",
            wrong: "Karnataka has many major ports, such as Karwar, Malpe and Bhatkal.",
            right: "New Mangalore is Karnataka's only major port; Karwar, Malpe, Bhatkal and the others are minor ports.",
            why: "Every coastal town with a harbour gets called a port, so students list them all as major. 'Major port' is a special status for big ports run under the Central Government.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "When comparing transport, give one advantage of each: roads reach villages (door-to-door), rail is cheap for bulk goods, ships are cheapest for overseas bulk cargo, air is fastest. Remember **Hubballi** as the South Western Railway headquarters; it is often asked.",
          },
          {
            type: "keypoints",
            items: [
              "Roads: National Highways (Centre), State Highways (State), district and village roads.",
              "South Western Railway headquarters: Hubballi; Konkan Railway runs along the coast.",
              "New Mangalore Port is the only major port; Karwar and others are minor ports.",
              "Kempegowda (Bengaluru) and Mangaluru are international airports.",
              "ISRO HQ is in Bengaluru; its Master Control Facility is at Hassan.",
            ],
          },
        ],
        flashcards: [
          { front: "Why are transport and communication called lifelines?", back: "Farming, mining, industry and trade all depend on moving goods, people and messages." },
          { front: "Headquarters of South Western Railway", back: "Hubballi." },
          { front: "Karnataka's only major port", back: "New Mangalore Port, at Panambur." },
          { front: "International airports of Karnataka", back: "Kempegowda International Airport (Bengaluru) and Mangaluru International Airport." },
          { front: "Mass communication", back: "Means that reach many people at once: newspapers, radio, TV, internet." },
          { front: "ISRO's Master Control Facility", back: "At Hassan; it controls India's communication satellites." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which highway runs along Karnataka's coast?",
            options: ["NH 44", "NH 48", "NH 66", "NH 75"],
            answer: 2,
            explain: "NH 66 runs along the west coast through Mangaluru, Udupi and Karwar.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Air transport is the cheapest way to send iron ore abroad.",
            answer: false,
            explain: "Air is the fastest but costliest. Bulk ore goes by rail and ship.",
          },
          {
            kind: "fill",
            q: "The headquarters of the South Western Railway is at ___.",
            answer: ["Hubballi", "Hubli"],
            explain: "Hubballi in Dharwad district is the zone's headquarters.",
          },
          {
            kind: "multi",
            q: "Which are forms of mass communication?",
            options: ["Television", "Personal letter", "Newspaper", "Radio", "A phone call"],
            answers: [0, 2, 3],
            explain: "TV, newspapers and radio reach many people at once. Letters and phone calls are personal.",
          },
          {
            kind: "mcq",
            q: "Which is a major port of Karnataka?",
            options: ["Karwar", "Malpe", "New Mangalore", "Bhatkal"],
            answer: 2,
            explain: "New Mangalore is the only major port; the others are minor ports.",
          },
          {
            kind: "order",
            q: "Order these road types from the widest network level to the most local.",
            items: ["National Highway", "State Highway", "District road", "Village road"],
            explain: "National Highways link states, State Highways link districts, district roads link taluks, village roads link villages.",
          },
        ],
      },
      {
        slug: "ka9-tourism-in-karnataka",
        title: "Tourism in Karnataka",
        summary: "Types of tourist places, World Heritage Sites, hill stations, waterfalls, beaches and wildlife, and the importance of tourism.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "illustration",
            emoji: "🏛️",
            caption: "In one week a visitor can see the ruins of Hampi, the cave temples of Badami, the beaches of Gokarna and the coffee hills of Kodagu. Karnataka's tourism slogan is 'One State, Many Worlds'.",
          },
          {
            type: "text",
            md: "**Tourism** is travelling for pleasure, learning or pilgrimage. It is an **industry** too: it creates jobs for guides, drivers, hotel workers and craftspeople, and brings in money.\n\nKarnataka's tourist places can be grouped as **historical (heritage)**, **religious**, **natural** and **cultural**.",
          },
          {
            type: "table",
            headers: ["UNESCO World Heritage Site in Karnataka", "District", "Year listed"],
            rows: [
              ["Group of Monuments at **Hampi** (Vijayanagara capital)", "Vijayanagara", "1986"],
              ["Group of Monuments at **Pattadakal** (Chalukya temples)", "Bagalkote", "1987"],
              ["**Western Ghats** (natural site, shared with other states)", "several Malnad districts", "2012"],
              ["Sacred Ensembles of the **Hoysalas**: Belur, Halebidu, Somanathapura", "Hassan and Mysuru", "2023"],
            ],
          },
          {
            type: "text",
            md: "Other famous **historical** places: the cave temples of **Badami**, the early temples of **Aihole**, the **Gol Gumbaz** at Vijayapura (the tomb of Muhammad Adil Shah), the forts of **Bidar** and **Chitradurga**, **Srirangapatna** and the **Mysuru Palace**.\n\n**Religious** places: **Shravanabelagola** (the giant statue of Gommateshwara, Bahubali), Udupi, Dharmasthala, Sringeri, Kollur, Gokarna and Melukote.",
          },
          {
            type: "table",
            headers: ["Natural attraction", "Examples"],
            rows: [
              ["Hill stations", "Nandi Hills, Kemmannugundi, Madikeri (Kodagu), Biligiri Rangana Hills"],
              ["Waterfalls", "Jog (Sharavathi), Gaganachukki and Bharachukki (Kaveri), Gokak (Ghataprabha), Abbey (Kodagu), Unchalli (Aghanashini)"],
              ["Beaches", "Karwar, Gokarna, Murudeshwar, Malpe, Panambur"],
              ["Wildlife", "Bandipur, Nagarahole, Dandeli, Ranganathittu"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is a World Heritage Site in Karnataka?",
                options: ["Gol Gumbaz", "Pattadakal", "Jog Falls", "Mysuru Palace"],
                answer: 1,
                explain: "Pattadakal was listed in 1987. Gol Gumbaz, Jog and Mysuru Palace are famous but not World Heritage Sites.",
              },
            ],
          },
          {
            type: "example",
            title: "Planning a heritage trip",
            problem: "Plan a two-day trip to see Chalukya temples. Which three places would you visit and why do they go together?",
            steps: [
              "The Chalukyas of Badami built temples in the Malaprabha valley.",
              "Badami has rock-cut cave temples; Aihole has some of the earliest temples; Pattadakal has the grand temples listed by UNESCO.",
              "All three are in Bagalkote district, close to one another, so they fit into a short trip.",
            ],
            answer: "Badami, Aihole and Pattadakal, all in Bagalkote district.",
          },
          {
            type: "activity",
            activity: {
              kind: "match",
              prompt: "Match each place to what it is famous for.",
              pairs: [
                ["Hampi", "Ruins of the Vijayanagara capital"],
                ["Shravanabelagola", "Statue of Gommateshwara"],
                ["Vijayapura", "Gol Gumbaz"],
                ["Belur", "Hoysala temple"],
                ["Jog", "Waterfall on the Sharavathi"],
              ],
              explain: "Learn each place with one 'famous for' fact; examiners often ask 'Where is…?' or 'What is … famous for?'.",
            },
          },
          {
            type: "mistake",
            wrong: "Tourism only helps hotel owners in big cities.",
            right: "Tourism gives jobs and income to guides, drivers, shopkeepers, artisans and villagers near tourist places, and helps protect heritage.",
            why: "Hotels are the most visible part of tourism. But a visitor to Hampi also pays for a guide, an auto, food and handicrafts from local people.",
          },
          {
            type: "text",
            md: "Too many visitors can also cause problems: litter, plastic, damage to monuments and disturbance to wildlife. **Responsible tourism** and **eco-tourism** mean enjoying places without harming them.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "For 'importance of tourism' give at least four points: **employment**, **foreign exchange**, **growth of handicrafts and local business**, **cultural exchange**, **protection of heritage**. Spell place names in their current official form: Vijayapura, Kalaburagi, Belagavi.",
          },
          {
            type: "keypoints",
            items: [
              "Tourism is an industry: it creates jobs and brings income.",
              "Tourist places: historical, religious, natural and cultural.",
              "World Heritage Sites: Hampi (1986), Pattadakal (1987), Western Ghats (2012), Hoysala temples (2023).",
              "Natural attractions include Jog Falls, Kodagu, Nandi Hills, beaches and wildlife parks.",
              "Responsible tourism protects monuments and nature.",
            ],
          },
        ],
        flashcards: [
          { front: "Karnataka's tourism slogan", back: "'One State, Many Worlds'." },
          { front: "Hampi", back: "Ruins of the Vijayanagara capital; World Heritage Site since 1986." },
          { front: "Pattadakal", back: "Chalukya temples in Bagalkote district; World Heritage Site since 1987." },
          { front: "Hoysala World Heritage Site (2023)", back: "Temples of Belur, Halebidu and Somanathapura." },
          { front: "Gol Gumbaz", back: "The tomb of Muhammad Adil Shah at Vijayapura." },
          { front: "Eco-tourism", back: "Visiting natural places in a way that protects nature and helps local people." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In which district are Badami, Aihole and Pattadakal?",
            options: ["Vijayapura", "Bagalkote", "Ballari", "Hassan"],
            answer: 1,
            explain: "All three Chalukya centres are in Bagalkote district.",
          },
          {
            kind: "order",
            q: "Order these World Heritage listings by year, earliest first.",
            items: ["Hampi", "Pattadakal", "Western Ghats", "Hoysala temples"],
            explain: "1986, 1987, 2012, 2023.",
            difficulty: 3,
          },
          {
            kind: "truefalse",
            q: "Shravanabelagola is famous for the statue of Gommateshwara (Bahubali).",
            answer: true,
            explain: "The huge monolithic statue stands on a hill at Shravanabelagola in Hassan district.",
          },
          {
            kind: "multi",
            q: "Which of these are waterfalls in Karnataka?",
            options: ["Jog", "Gokak", "Murudeshwar", "Abbey", "Nandi"],
            answers: [0, 1, 3],
            explain: "Jog, Gokak and Abbey are waterfalls. Murudeshwar is a temple town by the sea, and Nandi a hill.",
          },
          {
            kind: "fill",
            q: "The temples of Belur and Halebidu were built by the ___ kings.",
            answer: ["Hoysala", "Hoysalas"],
            explain: "They are part of the Sacred Ensembles of the Hoysalas World Heritage Site.",
          },
          {
            kind: "mcq",
            q: "Which is NOT a benefit of tourism?",
            options: ["Jobs for guides and drivers", "Sale of local handicrafts", "Litter and damage to monuments", "Foreign exchange"],
            answer: 2,
            explain: "Litter and damage are problems caused by careless tourism, not benefits.",
            difficulty: 2,
            hint: "Look for the harmful effect.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 7. Population                                                      */
  /* ------------------------------------------------------------------ */
  {
    slug: "ka9-population",
    title: "Population of Karnataka",
    icon: "👥",
    description: "Size, growth, density and distribution of Karnataka's people, and sex ratio, literacy and urbanisation, using the 2011 Census.",
    lessons: [
      {
        slug: "ka9-population-size-density",
        title: "Size, Growth and Distribution",
        summary: "The census, Karnataka's population in 2011, growth rate, density and why some districts are crowded and others not.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A **census** is the official count of all the people of a country, with details about them. India holds a census every ten years. The latest complete figures are from the **2011 Census**. The next census was delayed from 2021; until its results are published, textbooks and exams use the 2011 figures.",
          },
          {
            type: "table",
            headers: ["Census 2011", "Karnataka"],
            rows: [
              ["Total population", "6,10,95,297 (about 6.1 crore)"],
              ["Share of India's population", "about 5%"],
              ["Growth, 2001 to 2011", "15.6% (India: 17.7%)"],
              ["Density", "319 persons per sq km (India: 382)"],
            ],
          },
          {
            type: "text",
            md: "**Population growth rate** is the change in population over a period, given as a percentage of the earlier population. **Density of population** is the number of people living in one square kilometre on average.",
          },
          {
            type: "formula",
            tex: "\\text{Density} = \\frac{\\text{Total population}}{\\text{Area in sq km}}",
            caption: "Density tells us how crowded a place is, not how many people live there in total.",
          },
          {
            type: "example",
            title: "Finding density",
            problem: "Karnataka's population in 2011 was 6,10,95,297 and its area is 1,91,791 sq km. Find the density.",
            steps: [
              "Density = population ÷ area.",
              "6,10,95,297 ÷ 1,91,791 ≈ 318.6.",
              "Round to the nearest whole person.",
            ],
            answer: "About 319 persons per sq km.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A district has 20,00,000 people and an area of 5,000 sq km. What is its density (persons per sq km)?",
                answer: 400,
                unit: "persons per sq km",
                explain: "20,00,000 ÷ 5,000 = 400 persons per sq km.",
              },
            ],
          },
          {
            type: "heading",
            text: "Uneven distribution",
          },
          {
            type: "text",
            md: "People are not spread evenly. In 2011 (when the state had 30 districts), **Bengaluru Urban** had the most people (about 96 lakh) and the highest density (over 4,000 per sq km). **Kodagu** had the fewest people (about 5.5 lakh) and the lowest density.\n\nPlaces are **densely populated** where there are jobs in cities and industries, fertile irrigated land (Mandya, Mysuru) or a busy coast. They are **sparsely populated** where the land is hilly and forested (Kodagu, Uttara Kannada, Chikkamagaluru) or dry and less fertile.",
          },
          {
            type: "activity",
            activity: {
              kind: "sort",
              prompt: "Does each factor make an area crowded or thinly peopled?",
              groups: ["Dense population", "Sparse population"],
              items: [
                { text: "Many IT and factory jobs", group: 0, hint: "People move to where work is." },
                { text: "Steep forested hills", group: 1, hint: "Hard to farm and build on." },
                { text: "Canal-irrigated fertile plains", group: 0, hint: "Good farms feed many people." },
                { text: "Low rainfall and poor soil", group: 1, hint: "Farming is difficult." },
                { text: "Good roads, railways and hospitals", group: 0, hint: "Services attract people." },
              ],
              explain: "Population follows opportunity: jobs, water, fertile land and services draw people; hills, forests and dry land have fewer.",
            },
          },
          {
            type: "mistake",
            wrong: "A district with a big population must have a high density.",
            right: "Density depends on both population and area; a large district can have many people but a low density.",
            why: "Students compare only the population numbers. Belagavi, for example, had a large population in 2011 but also a very large area, so its density was far lower than Bengaluru Urban's.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Always write **which census** a figure comes from (\"Census 2011\") and give density with its unit, **persons per sq km**. Numbers without a year or unit lose marks.",
          },
          {
            type: "keypoints",
            items: [
              "The census counts the population every ten years; 2011 is the latest complete census.",
              "Karnataka 2011: 6,10,95,297 people, about 5% of India; growth 15.6% in 2001–11.",
              "Density = population ÷ area; Karnataka's was 319 per sq km in 2011.",
              "Bengaluru Urban was the most populous and densest district; Kodagu the least.",
              "Jobs, water and fertile land attract people; hills, forests and dry land have fewer.",
            ],
          },
        ],
        flashcards: [
          { front: "Census", back: "The official count of all the people of a country, held in India every ten years." },
          { front: "Population of Karnataka (Census 2011)", back: "6,10,95,297 (about 6.1 crore)." },
          { front: "Density of population", back: "Average number of people per sq km = population ÷ area. Karnataka 2011: 319." },
          { front: "Decadal growth of Karnataka, 2001–2011", back: "15.6% (India: 17.7%)." },
          { front: "Most populous district (2011)", back: "Bengaluru Urban, about 96 lakh people." },
          { front: "Least populous district (2011)", back: "Kodagu, about 5.5 lakh people." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "What was the density of population of Karnataka in 2011?",
            options: ["382 per sq km", "319 per sq km", "973 per sq km", "75 per sq km"],
            answer: 1,
            explain: "319 persons per sq km. 382 is India's density, and 973 is Karnataka's sex ratio, a common mix-up.",
          },
          {
            kind: "numeric",
            q: "A town's population grew from 50,000 to 60,000 in ten years. What is the growth rate (in %)?",
            answer: 20,
            unit: "%",
            explain: "Increase = 10,000. Growth rate = 10,000 ÷ 50,000 × 100 = 20%.",
            difficulty: 2,
            hint: "Divide the increase by the earlier population.",
          },
          {
            kind: "truefalse",
            q: "Kodagu is thinly populated mainly because it is hilly and forested.",
            answer: true,
            explain: "Steep hills and forests leave less land for farms, towns and roads.",
          },
          {
            kind: "fill",
            q: "In India a census is held every ___ years.",
            answer: ["ten", "10"],
            explain: "Censuses were held in 1951, 1961 … 2011; the next one was delayed from 2021.",
          },
          {
            kind: "multi",
            q: "Which factors help make Bengaluru Urban densely populated?",
            options: ["Many jobs in IT and industry", "Thick evergreen forests", "Good transport and services", "Educational institutions"],
            answers: [0, 2, 3],
            explain: "Jobs, transport, services and colleges attract people. Forests would reduce population.",
          },
          {
            kind: "mcq",
            q: "Karnataka's share of India's population in 2011 was about:",
            options: ["1%", "5%", "15%", "25%"],
            answer: 1,
            explain: "About 6.1 crore out of about 121 crore, roughly 5%.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "ka9-population-composition",
        title: "Sex Ratio, Literacy and Urbanisation",
        summary: "Composition of population: sex ratio, literacy rate, rural and urban population, and population as a resource.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "**Population composition** describes what the population is made of: how many males and females, how many can read and write, how many live in villages or towns, and so on.",
          },
          {
            type: "text",
            md: "**Sex ratio** is the number of **females per 1,000 males**. **Literacy rate** is the percentage of people aged 7 and above who can read and write with understanding. **Urbanisation** is the growth in the share of people living in towns and cities.",
          },
          {
            type: "table",
            headers: ["Census 2011", "Karnataka", "India"],
            rows: [
              ["Sex ratio (females per 1,000 males)", "973", "943"],
              ["Literacy rate", "75.36%", "about 74%"],
              ["Male literacy / female literacy", "about 82% / about 68%", "about 82% / about 65%"],
              ["Urban population", "about 39%", "about 31%"],
            ],
          },
          {
            type: "example",
            title: "Working out a sex ratio",
            problem: "A village has 2,000 males and 1,900 females. Find its sex ratio and compare it with Karnataka's.",
            steps: [
              "Sex ratio = (females ÷ males) × 1,000.",
              "= (1,900 ÷ 2,000) × 1,000 = 0.95 × 1,000.",
              "= 950 females per 1,000 males.",
              "Karnataka's ratio in 2011 was 973, so this village has fewer females per 1,000 males than the state average.",
            ],
            answer: "950 females per 1,000 males, lower than the state's 973.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Sex ratio in India is measured as:",
                options: ["males per 1,000 females", "females per 1,000 males", "females per 100 people", "children per 1,000 adults"],
                answer: 1,
                explain: "In India, sex ratio means females per 1,000 males.",
              },
              {
                kind: "numeric",
                q: "A town has 10,000 males and 9,700 females. What is its sex ratio?",
                answer: 970,
                explain: "(9,700 ÷ 10,000) × 1,000 = 970.",
                difficulty: 2,
              },
            ],
          },
          {
            type: "text",
            md: "District differences in 2011 were large. **Udupi** had the highest sex ratio (more females than males) and **Bengaluru Urban** the lowest, because many men move to the city for work. **Dakshina Kannada** had the highest literacy and **Yadgir** the lowest.\n\nAbout 61% of the people still lived in villages in 2011, but towns are growing fast, led by Bengaluru. Rapid urban growth brings traffic, slums, water shortage and pollution.",
          },
          {
            type: "activity",
            activity: {
              kind: "reveal",
              prompt: "Why does Bengaluru Urban have a low sex ratio?",
              emoji: "🏙️",
              options: ["More girls are born in villages", "Many men migrate to the city alone for jobs", "Women do not like cities", "The census missed women"],
              answer: 1,
              trap: 0,
              explain: "Migrant workers, often men who leave families in their home villages, raise the number of males in the city and lower its sex ratio.",
            },
          },
          {
            type: "mistake",
            wrong: "A sex ratio of 973 means there are 973 females in the state.",
            right: "It means 973 females for every 1,000 males.",
            why: "The number looks like a count, so students read it as one. A ratio compares two groups; it is not a total.",
          },
          {
            type: "text",
            md: "People are not only a burden. When they are healthy, educated and skilled, they become **human resources** who produce goods and services. That is why education, health care and skill training matter so much for Karnataka's growth.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "Board tip",
            md: "Write the definition and the 2011 figure together: \"Sex ratio is the number of females per 1,000 males; Karnataka's was 973 in 2011.\" Mixing up Karnataka's figure with India's (943) is the most frequent error.",
          },
          {
            type: "keypoints",
            items: [
              "Sex ratio = females per 1,000 males; Karnataka 973 in 2011 (India 943).",
              "Literacy rate in 2011: 75.36%, with female literacy well below male literacy.",
              "About 39% of Karnataka's people lived in towns in 2011.",
              "Udupi: highest sex ratio; Bengaluru Urban: lowest. Dakshina Kannada: highest literacy; Yadgir: lowest.",
              "Educated, healthy, skilled people are human resources.",
            ],
          },
        ],
        flashcards: [
          { front: "Sex ratio", back: "Number of females per 1,000 males. Karnataka 2011: 973." },
          { front: "Literacy rate", back: "Percentage of people aged 7+ who can read and write with understanding. Karnataka 2011: 75.36%." },
          { front: "Urbanisation", back: "Growth in the share of people living in towns and cities." },
          { front: "Highest literacy district (2011)", back: "Dakshina Kannada. Lowest: Yadgir." },
          { front: "Highest sex ratio district (2011)", back: "Udupi. Lowest: Bengaluru Urban." },
          { front: "Human resources", back: "People who, through education, health and skills, produce goods and services." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Karnataka's literacy rate in 2011 was:",
            options: ["61.1%", "75.36%", "82.5%", "97.3%"],
            answer: 1,
            explain: "75.36%. About 82% is the male literacy rate, a common mix-up.",
          },
          {
            kind: "truefalse",
            q: "Karnataka's sex ratio in 2011 was higher than India's.",
            answer: true,
            explain: "973 for Karnataka against 943 for India.",
          },
          {
            kind: "fill",
            q: "Literacy rate is counted for people aged ___ years and above.",
            answer: ["7", "seven"],
            explain: "The census counts literacy from age 7.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which district had the highest literacy rate in Karnataka in 2011?",
            options: ["Bengaluru Urban", "Dakshina Kannada", "Yadgir", "Mysuru"],
            answer: 1,
            explain: "Dakshina Kannada was highest, just ahead of Bengaluru Urban. Yadgir was lowest.",
            difficulty: 2,
          },
          {
            kind: "multi",
            q: "Which are problems of rapid urbanisation?",
            options: ["Traffic jams", "Slums", "More fertile soil", "Water shortage", "Pollution"],
            answers: [0, 1, 3, 4],
            explain: "Fast city growth strains roads, housing, water and air. It does not improve soil.",
          },
          {
            kind: "numeric",
            q: "A taluk has 50,000 males and 51,000 females. What is its sex ratio?",
            answer: 1020,
            explain: "(51,000 ÷ 50,000) × 1,000 = 1,020 females per 1,000 males.",
            difficulty: 2,
            hint: "Females ÷ males × 1,000.",
          },
          {
            kind: "truefalse",
            q: "In 2011 most of Karnataka's people lived in towns and cities.",
            answer: false,
            explain: "About 61% lived in villages; about 39% were urban.",
          },
        ],
      },
    ],
  },
];

/** Class 9 chapter title ("9:<exact title>") → topic slug(s) that teach it. */
export const links: Record<string, string | string[]> = {
  "9:Karnataka: Location and Physical Divisions": "ka9-location-physical-divisions",
  "9:Climate, Soils and Natural Vegetation of Karnataka": "ka9-climate-soils-vegetation",
  "9:Water Resources of Karnataka": "ka9-water-resources",
  "9:Land Use and Agriculture in Karnataka": "ka9-land-use-agriculture",
  "9:Minerals, Power and Industries of Karnataka": "ka9-minerals-power-industries",
  "9:Transport, Communication and Tourism in Karnataka": "ka9-transport-communication-tourism",
  "9:Population of Karnataka": "ka9-population",
};
