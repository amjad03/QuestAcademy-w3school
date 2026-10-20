import type { Subject } from "@/content/types";

export const socialStudies: Subject = {
  slug: "social-studies",
  title: "Social Studies",
  world: "school",
  icon: "🗺️",
  colors: ["#d97706", "#0d9488"],
  tagline: "Understand the world — its places, its past and how it works.",
  description:
    "Travel across continents and climates, read maps like an explorer, walk through the great ancient civilisations, trace how industry and two world wars shaped modern life, learn how democracies and constitutions protect rights, and discover the economics behind prices, money and banks.",
  levels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
  stages: ["middle", "secondary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "world-geography",
      title: "World Geography",
      icon: "🌏",
      description: "Continents and oceans, maps and coordinates, and the climates that shape how people live.",
      lessons: [
        {
          slug: "continents-and-oceans",
          title: "Continents & Oceans",
          summary: "A whirlwind tour of Earth's seven continents and five oceans.",
          minutes: 13,
          xp: 25,
          blocks: [
            { type: "illustration", emoji: "🌍🌎🌏", caption: "Earth from three sides — mostly blue!" },
            {
              type: "text",
              md: "Seen from space, Earth is a blue marble: about **71%** of its surface is covered by water. The land is split into seven large masses called **continents**, and the water into five connected **oceans**.",
            },
            {
              type: "table",
              headers: ["Continent", "Rank by area", "Did you know?"],
              rows: [
                ["Asia", "1 (largest)", "Home to about 60% of the world's people and Mount Everest (8,849 m)"],
                ["Africa", "2", "Has the most countries (54) and the vast Sahara Desert"],
                ["North America", "3", "Includes Greenland, the world's largest island"],
                ["South America", "4", "The Amazon rainforest and river carry the most water of any river"],
                ["Antarctica", "5", "Coldest, windiest, driest continent; no permanent residents"],
                ["Europe", "6", "Densely populated, with many countries in a small area"],
                ["Australia / Oceania", "7 (smallest)", "Australia is both a country and a continent"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Remember the order",
              md: "Largest to smallest: **A**sia, **A**frica, **N**orth America, **S**outh America, **A**ntarctica, **E**urope, **A**ustralia.",
            },
            { type: "heading", text: "The five oceans" },
            {
              type: "list",
              ordered: true,
              items: [
                "**Pacific** — largest and deepest; bigger than all the land on Earth combined.",
                "**Atlantic** — separates the Americas from Europe and Africa.",
                "**Indian** — the warmest ocean.",
                "**Southern** — surrounds Antarctica.",
                "**Arctic** — smallest and shallowest; much of it is covered by sea ice.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which ocean is the largest?",
                  options: ["Atlantic", "Indian", "Pacific", "Arctic"],
                  answer: 2,
                  explain: "The Pacific covers about a third of Earth's surface.",
                },
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Moving continents",
              md: "About 300 million years ago the continents were joined in one supercontinent, **Pangaea**. Tectonic plates still move them a few centimetres a year — roughly as fast as your fingernails grow.",
            },
            {
              type: "keypoints",
              items: [
                "About 71% of Earth's surface is water.",
                "7 continents: Asia is largest, Australia smallest.",
                "5 oceans: Pacific is largest, Arctic smallest.",
                "Continents drift slowly on tectonic plates.",
              ],
            },
          ],
          flashcards: [
            { front: "Largest continent", back: "Asia." },
            { front: "Smallest ocean", back: "The Arctic Ocean." },
            { front: "Pangaea", back: "The supercontinent that existed about 300 million years ago." },
            { front: "Continent with the most countries", back: "Africa (54)." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order these continents from largest to smallest.",
              items: ["Asia", "Africa", "South America", "Europe", "Australia"],
              explain: "Asia > Africa > South America > Europe > Australia (North America and Antarctica omitted).",
            },
            {
              kind: "numeric",
              q: "How many continents are there in the common seven-continent model?",
              answer: 7,
              explain: "Asia, Africa, North America, South America, Antarctica, Europe, Australia/Oceania.",
            },
            {
              kind: "mcq",
              q: "Which continent has no permanent human residents?",
              options: ["Australia", "Antarctica", "Europe", "South America"],
              answer: 1,
              explain: "Only scientists and support staff live in Antarctica, on temporary stays.",
            },
            {
              kind: "fill",
              q: "The ocean that surrounds Antarctica is the ___ Ocean.",
              answer: ["southern"],
              explain: "The Southern Ocean encircles Antarctica.",
            },
          ],
        },
        {
          slug: "maps-and-coordinates",
          title: "Reading Maps & Coordinates",
          summary: "Latitude, longitude, map scale, legends and why every flat map is a little bit wrong.",
          minutes: 16,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Before GPS, sailors crossed oceans with just a map, a compass and the stars. Even today, every location app works using the same invisible grid that explorers used: **latitude and longitude**.",
            },
            { type: "heading", text: "Parts of a map" },
            {
              type: "table",
              headers: ["Element", "What it tells you"],
              rows: [
                ["Title", "What the map shows"],
                ["Compass rose", "Directions: N, S, E, W"],
                ["Legend / key", "What the symbols and colours mean"],
                ["Scale", "How map distance relates to real distance (e.g. 1 cm = 10 km)"],
                ["Grid / coordinates", "Helps locate exact places"],
              ],
            },
            { type: "heading", text: "The global grid" },
            {
              type: "list",
              items: [
                "**Latitude** lines run east–west and measure distance **north or south** of the **Equator (0°)**, up to 90° at the poles.",
                "**Longitude** lines run north–south and measure distance **east or west** of the **Prime Meridian (0°)**, which passes through Greenwich, London, up to 180°.",
                "A location is written as latitude first, then longitude: Cairo is about **30° N, 31° E**.",
              ],
            },
            {
              type: "table",
              headers: ["Special latitude", "Approx. degrees"],
              rows: [
                ["Arctic Circle", "66.5° N"],
                ["Tropic of Cancer", "23.5° N"],
                ["Equator", "0°"],
                ["Tropic of Capricorn", "23.5° S"],
                ["Antarctic Circle", "66.5° S"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "On a map, 1 cm = 5 km. Two towns are 7 cm apart. How far apart are they in reality?",
                  answer: 35,
                  unit: "km",
                  explain: "7 × 5 = 35 km.",
                },
              ],
            },
            { type: "heading", text: "Time zones" },
            {
              type: "text",
              md: "Earth spins 360° in 24 hours, which is **15° per hour**. So, roughly, every 15° of longitude east adds one hour to the clock. If it is noon at Greenwich (0°), it is about 1 p.m. at 15° E and 11 a.m. at 15° W.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Every flat map distorts",
              md: "You can't flatten a sphere without stretching it. The popular **Mercator projection** keeps directions accurate for navigation but hugely enlarges areas near the poles — Greenland looks as big as Africa, yet Africa is about **14 times larger**.",
            },
            {
              type: "keypoints",
              items: [
                "Maps need a title, compass, legend and scale.",
                "Latitude measures north–south from the Equator; longitude measures east–west from the Prime Meridian.",
                "15° of longitude ≈ 1 hour of time difference.",
                "All flat maps distort shape, area or distance.",
              ],
            },
          ],
          flashcards: [
            { front: "Latitude", back: "Distance north or south of the Equator, in degrees (0°–90°)." },
            { front: "Longitude", back: "Distance east or west of the Prime Meridian, in degrees (0°–180°)." },
            { front: "Prime Meridian", back: "0° longitude, passing through Greenwich, London." },
            { front: "Map legend", back: "Explains what symbols and colours on the map mean." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which line of latitude is 0°?",
              options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Arctic Circle"],
              answer: 2,
              explain: "The Equator divides Earth into the Northern and Southern Hemispheres.",
            },
            {
              kind: "numeric",
              q: "It is 12:00 at Greenwich (0°). Approximately what hour is it at 45° E? (24-hour clock)",
              answer: 15,
              explain: "45 ÷ 15 = 3 hours ahead → 15:00.",
            },
            {
              kind: "truefalse",
              q: "On a Mercator map, Greenland appears much larger than it really is.",
              answer: true,
              explain: "Mercator stretches areas near the poles.",
            },
            {
              kind: "fill",
              q: "The part of a map that explains its symbols is the legend, or ___.",
              answer: ["key"],
              explain: "Legend and key mean the same thing.",
            },
          ],
        },
        {
          slug: "climate-zones",
          title: "Weather, Climate & Climate Zones",
          summary: "Why some places are steamy rainforests and others frozen deserts.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "**Weather** is what you get today — sunny, rainy, windy. **Climate** is what you expect — the average weather over about 30 years. As the saying goes, *climate is your wardrobe; weather is what you wear today.*",
            },
            { type: "heading", text: "What controls climate?" },
            {
              type: "list",
              items: [
                "**Latitude** — near the Equator the Sun's rays hit more directly, so it is hotter.",
                "**Altitude** — temperature drops by about 6.5 °C for every 1,000 m you climb. That's why Mount Kilimanjaro has snow despite being near the Equator.",
                "**Distance from the sea** — oceans heat and cool slowly, so coastal places have milder climates than inland ones.",
                "**Ocean currents** — the warm North Atlantic Drift keeps the UK milder than places at the same latitude in Canada.",
                "**Prevailing winds and mountains** — moist winds rise over mountains and drop rain on one side, leaving a dry 'rain shadow' on the other.",
              ],
            },
            {
              type: "table",
              headers: ["Climate zone", "Features", "Example places"],
              rows: [
                ["Tropical", "Hot all year; heavy rain (rainforest) or wet & dry seasons (savanna)", "Amazon Basin, Congo, Southeast Asia"],
                ["Dry (arid)", "Very little rain; big daily temperature swings", "Sahara, Arabian Desert, Atacama"],
                ["Temperate", "Mild summers and cool winters; rain spread across the year", "UK, New Zealand, eastern China"],
                ["Continental", "Hot summers, very cold winters", "Central Russia, Canada's interior"],
                ["Polar", "Freezing most of the year", "Antarctica, Greenland, northern Siberia"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "A town at sea level is 25 °C. Roughly how warm is a mountain peak 2,000 m above it?",
                  answer: 12,
                  tolerance: 1,
                  unit: "°C",
                  explain: "2 × 6.5 = 13 °C cooler, so about 12 °C.",
                },
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Monsoons",
              md: "In South Asia, summer winds blowing in from the warm Indian Ocean bring months of heavy rain — the **monsoon**. Farmers depend on it, but too much can cause floods.",
            },
            {
              type: "callout",
              tone: "warning",
              title: "A changing climate",
              md: "Scientific records show the global average temperature has risen about 1.1–1.2 °C since the late 1800s, mainly due to greenhouse gases from human activities. This is shifting rainfall patterns and raising sea levels.",
            },
            {
              type: "keypoints",
              items: [
                "Weather is short-term; climate is the long-term average.",
                "Latitude, altitude, distance from sea, currents and winds shape climate.",
                "Main zones: tropical, dry, temperate, continental, polar.",
              ],
            },
          ],
          flashcards: [
            { front: "Weather vs climate", back: "Weather = day-to-day conditions; climate = average conditions over ~30 years." },
            { front: "Rain shadow", back: "A dry area on the sheltered side of a mountain range." },
            { front: "Temperature drop with altitude", back: "About 6.5 °C per 1,000 m." },
            { front: "Monsoon", back: "A seasonal wind shift bringing heavy rains, especially in South Asia." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "'It's raining in Mumbai today' describes…",
              options: ["Climate", "Weather", "Latitude", "A projection"],
              answer: 1,
              explain: "It is a short-term condition — weather.",
            },
            {
              kind: "multi",
              q: "Which factors make a place colder?",
              options: ["Higher altitude", "Higher latitude", "A warm ocean current nearby", "Being far inland in winter"],
              answers: [0, 1, 3],
              explain: "Warm currents make places milder; the others lower temperatures (inland areas get colder winters).",
            },
            {
              kind: "truefalse",
              q: "Coastal cities usually have a smaller range between summer and winter temperatures than inland cities.",
              answer: true,
              explain: "Water heats and cools slowly, moderating coastal temperatures.",
            },
            {
              kind: "fill",
              q: "The Sahara is an example of a ___ climate zone.",
              answer: ["dry", "arid", "desert", "hot desert"],
              explain: "It receives very little rainfall.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "ancient-civilisations",
      title: "Ancient Civilisations",
      icon: "🏛️",
      description: "The river valley societies, Greece and Rome — and the ideas they handed down to us.",
      lessons: [
        {
          slug: "river-valley-civilisations",
          title: "River Valley Civilisations",
          summary: "Mesopotamia, Egypt, the Indus Valley and ancient China — why the first cities grew beside rivers.",
          minutes: 17,
          xp: 35,
          blocks: [
            { type: "illustration", emoji: "🏺", caption: "Pottery, writing and cities began along great rivers." },
            {
              type: "text",
              md: "About 12,000 years ago, people began farming instead of only hunting and gathering. Rivers offered water, fertile soil after floods and easy transport. Farming produced **surplus** food, so not everyone had to farm — some became priests, potters, traders and rulers. Cities were born.",
            },
            {
              type: "table",
              headers: ["Civilisation", "River(s)", "Approx. peak", "Famous for"],
              rows: [
                ["Mesopotamia (Sumer, Babylon)", "Tigris & Euphrates", "from c. 3500 BCE", "Cuneiform writing, the wheel, Hammurabi's law code"],
                ["Ancient Egypt", "Nile", "c. 3100–30 BCE", "Hieroglyphs, pyramids, papyrus, a 365-day calendar"],
                ["Indus Valley (Harappan)", "Indus", "c. 2600–1900 BCE", "Planned grid cities, covered drains, standard weights"],
                ["Ancient China (Shang)", "Huang He (Yellow River)", "c. 1600–1046 BCE", "Oracle bones, bronze casting, early Chinese writing"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Mohenjo-daro's plumbing",
              md: "Indus cities like Mohenjo-daro and Harappa had brick houses with bathrooms connected to covered street drains — sanitation more advanced than many cities thousands of years later. Their script has still **not been deciphered**.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Why did early civilisations develop near rivers?",
                  options: [
                    "Rivers kept enemies away completely",
                    "Rivers provided water, fertile soil and transport",
                    "There were no animals near rivers",
                    "Rivers had gold everywhere",
                  ],
                  answer: 1,
                  explain: "Fertile floodplains and reliable water made farming surpluses possible.",
                },
              ],
            },
            { type: "heading", text: "What makes a 'civilisation'?" },
            {
              type: "list",
              items: [
                "Cities with organised governments.",
                "Specialised jobs and social classes.",
                "Writing or record-keeping.",
                "Monumental buildings (temples, ziggurats, pyramids).",
                "Trade networks and shared beliefs.",
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Hammurabi's Code",
              md: "Around 1754 BCE, King Hammurabi of Babylon had 282 laws carved on a stone pillar so everyone could see the rules. It is one of the earliest written law codes — and introduced the idea that laws should be public.",
            },
            {
              type: "keypoints",
              items: [
                "Farming surpluses allowed cities and specialised jobs.",
                "Four great river valley civilisations: Mesopotamia, Egypt, Indus, China.",
                "Writing systems: cuneiform, hieroglyphs, the Indus script, Chinese characters.",
                "Their inventions — writing, laws, calendars — still shape our world.",
              ],
            },
          ],
          flashcards: [
            { front: "Cuneiform", back: "Wedge-shaped writing of Mesopotamia, pressed into clay tablets." },
            { front: "Mesopotamia means…", back: "'Land between the rivers' — the Tigris and Euphrates." },
            { front: "Harappa and Mohenjo-daro", back: "Major cities of the Indus Valley civilisation." },
            { front: "Surplus", back: "Extra food beyond what farmers need, allowing others to do different jobs." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which civilisation grew along the Nile?",
              options: ["Sumer", "Ancient Egypt", "Shang China", "Harappan"],
              answer: 1,
              explain: "Egypt depended on the Nile's yearly floods.",
            },
            {
              kind: "fill",
              q: "Hammurabi ruled the city of ___ and created a famous law code.",
              answer: ["babylon"],
              explain: "Hammurabi was king of Babylon in Mesopotamia.",
            },
            {
              kind: "truefalse",
              q: "Historians can now fully read the Indus Valley script.",
              answer: false,
              explain: "The Indus script remains undeciphered.",
            },
            {
              kind: "order",
              q: "Order these developments as they happened.",
              items: ["Hunting and gathering", "Farming begins", "Food surplus", "Cities and specialised jobs"],
              explain: "Farming led to surpluses, which allowed cities to grow.",
            },
          ],
        },
        {
          slug: "greece-and-rome",
          title: "Ancient Greece & Rome",
          summary: "Democracy, philosophy, the Olympics, Roman law, roads and an empire that spanned three continents.",
          minutes: 17,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Have you ever voted for a class representative, watched the Olympics, or seen a building with tall columns? You're borrowing from ancient Greece and Rome — civilisations that flourished more than 2,000 years ago around the Mediterranean Sea.",
            },
            { type: "heading", text: "Ancient Greece" },
            {
              type: "list",
              items: [
                "Greece was a collection of independent **city-states** (*poleis*) like Athens and Sparta.",
                "Around **508 BCE**, Athens developed an early form of **democracy**: male citizens voted directly on laws. Women, enslaved people and foreigners were excluded.",
                "The first recorded **Olympic Games** were held at Olympia in **776 BCE**.",
                "Philosophers **Socrates, Plato and Aristotle** asked deep questions about ethics, knowledge and government.",
                "Alexander the Great (356–323 BCE) spread Greek culture from Egypt to India's borders.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "In Athenian democracy, every adult living in Athens could vote.",
                  answer: false,
                  explain: "Only free adult male citizens could vote.",
                },
              ],
            },
            { type: "heading", text: "Ancient Rome" },
            {
              type: "table",
              headers: ["Period", "Dates", "Key features"],
              rows: [
                ["Kingdom", "753–509 BCE (traditional)", "Ruled by kings"],
                ["Republic", "509–27 BCE", "Elected officials and a Senate; written laws (Twelve Tables)"],
                ["Empire", "27 BCE onward", "Augustus became the first emperor; Western Empire fell in 476 CE"],
              ],
            },
            {
              type: "list",
              items: [
                "**Engineering:** roads (over 80,000 km of paved roads), aqueducts, concrete, arches and domes.",
                "**Law:** ideas like 'innocent until proven guilty' influenced modern legal systems.",
                "**Language:** Latin is the ancestor of Spanish, French, Italian, Portuguese and Romanian, and gave English many words.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "The Eastern Empire lived on",
              md: "When the Western Roman Empire fell in 476 CE, the Eastern (Byzantine) Empire, centred on Constantinople, continued for nearly another thousand years until 1453.",
            },
            {
              type: "keypoints",
              items: [
                "Greece: city-states, early democracy, philosophy, the Olympics.",
                "Rome: republic then empire; law, engineering and Latin.",
                "Both shaped modern government, architecture and language.",
              ],
            },
          ],
          flashcards: [
            { front: "Polis", back: "A Greek city-state, such as Athens or Sparta." },
            { front: "First recorded Olympic Games", back: "776 BCE at Olympia." },
            { front: "Roman Republic", back: "509–27 BCE; ruled by elected officials and a Senate." },
            { front: "First Roman emperor", back: "Augustus (from 27 BCE)." },
            { front: "Fall of the Western Roman Empire", back: "476 CE." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order these events chronologically.",
              items: ["First recorded Olympic Games", "Athenian democracy begins", "Augustus becomes emperor", "Western Roman Empire falls"],
              explain: "776 BCE → c. 508 BCE → 27 BCE → 476 CE.",
            },
            {
              kind: "mcq",
              q: "Which modern language comes mainly from Latin?",
              options: ["German", "Italian", "Mandarin", "Arabic"],
              answer: 1,
              explain: "Italian is a Romance language descended from Latin.",
            },
            {
              kind: "fill",
              q: "Roman structures that carried water to cities were called ___.",
              answer: ["aqueducts", "aqueduct"],
              explain: "Aqueducts used gentle slopes to carry water many kilometres.",
            },
            {
              kind: "mcq",
              q: "Who was a famous Greek philosopher and student of Plato?",
              options: ["Julius Caesar", "Aristotle", "Hammurabi", "Augustus"],
              answer: 1,
              explain: "Aristotle studied under Plato and later tutored Alexander the Great.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "the-modern-world",
      title: "The Modern World",
      icon: "🏭",
      description: "The Industrial Revolution and the two world wars that reshaped the 20th century.",
      lessons: [
        {
          slug: "industrial-revolution",
          title: "The Industrial Revolution",
          summary: "Steam, factories and railways — how machines transformed work and daily life from the 1760s.",
          minutes: 16,
          xp: 35,
          blocks: [
            { type: "illustration", emoji: "🚂🏭", caption: "Steam power changed how goods were made and moved." },
            {
              type: "text",
              md: "In 1750 most people lived in villages, made cloth by hand and travelled no faster than a horse. A century later, steam trains crossed countries in hours and giant mills produced cloth by the mile. This rapid change, starting in **Britain around 1760**, is called the **Industrial Revolution**.",
            },
            { type: "heading", text: "Why Britain first?" },
            {
              type: "list",
              items: [
                "Plenty of **coal** and **iron ore**.",
                "Money from trade and colonies to invest.",
                "Rivers and canals for transport.",
                "A growing population needing goods — and providing workers.",
              ],
            },
            {
              type: "table",
              headers: ["Invention", "Inventor & date", "Impact"],
              rows: [
                ["Spinning jenny", "James Hargreaves, c. 1764", "One worker could spin many threads at once"],
                ["Improved steam engine", "James Watt, patented 1769", "Efficient power for factories, mines and later trains"],
                ["Power loom", "Edmund Cartwright, 1785", "Mechanised weaving"],
                ["Steam locomotive 'Rocket'", "George & Robert Stephenson, 1829", "Fast, reliable rail travel"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which energy source powered most early factories and trains?",
                  options: ["Electricity", "Steam from burning coal", "Solar panels", "Oil"],
                  answer: 1,
                  explain: "Coal heated water to produce steam that drove engines.",
                },
              ],
            },
            { type: "heading", text: "Two sides of progress" },
            {
              type: "table",
              headers: ["Benefits", "Costs"],
              rows: [
                ["Cheaper goods for more people", "Long hours (12–14 a day) in dangerous factories"],
                ["Faster transport and communication", "Child labour in mills and mines"],
                ["New jobs and growing cities", "Crowded, polluted slums and disease"],
                ["Eventually, higher living standards", "Smoke and pollution from burning coal"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Reform followed",
              md: "Workers formed **trade unions**, and governments passed laws such as Britain's Factory Acts, which limited children's working hours. Industrialisation then spread to Europe, the USA, Japan and beyond.",
            },
            {
              type: "keypoints",
              items: [
                "Began in Britain around 1760, powered by coal and steam.",
                "Key inventions: spinning jenny, Watt's steam engine, power loom, railways.",
                "Brought urbanisation and cheaper goods but also harsh working conditions.",
                "Led to reforms, trade unions and the spread of industry worldwide.",
              ],
            },
          ],
          flashcards: [
            { front: "Industrial Revolution", back: "The shift from hand production to machines and factories, beginning in Britain c. 1760." },
            { front: "James Watt", back: "Improved the steam engine (patent 1769)." },
            { front: "Urbanisation", back: "The growth of towns and cities as people move from the countryside." },
            { front: "Factory Acts", back: "British laws that limited working hours and improved factory conditions, especially for children." },
          ],
          quiz: [
            {
              kind: "fill",
              q: "The Industrial Revolution began in ___ around 1760.",
              answer: ["britain", "great britain", "england", "the uk", "uk"],
              explain: "Britain had coal, capital, transport and workers.",
            },
            {
              kind: "order",
              q: "Order these inventions by date.",
              items: ["Spinning jenny", "Watt's steam engine patent", "Power loom", "Stephenson's Rocket"],
              explain: "c. 1764 → 1769 → 1785 → 1829.",
            },
            {
              kind: "multi",
              q: "Which were negative effects of early industrialisation?",
              options: ["Child labour", "Polluted, crowded cities", "Cheaper clothing", "Dangerous working conditions"],
              answers: [0, 1, 3],
              explain: "Cheaper clothing was a benefit.",
            },
            {
              kind: "truefalse",
              q: "Trade unions were formed to help workers bargain for better pay and conditions.",
              answer: true,
              explain: "Workers organised together to improve wages, hours and safety.",
            },
          ],
        },
        {
          slug: "the-world-wars",
          title: "The Two World Wars",
          summary: "Causes, key events and consequences of the conflicts of 1914–1918 and 1939–1945.",
          minutes: 20,
          xp: 45,
          blocks: [
            {
              type: "text",
              md: "In the first half of the 20th century, two global wars caused immense suffering and reshaped borders, governments and international cooperation. Historians study them to understand how conflicts start — and how to prevent them.",
            },
            { type: "heading", text: "World War I (1914–1918)" },
            {
              type: "text",
              md: "Historians often summarise the long-term causes as **MAIN**: **M**ilitarism (an arms race), **A**lliances (rival blocs of countries), **I**mperialism (competition for colonies) and **N**ationalism (intense national pride and rivalry).\n\nThe trigger came on **28 June 1914**, when Archduke Franz Ferdinand of Austria-Hungary was assassinated in Sarajevo. Alliance commitments quickly pulled the major powers into war.",
            },
            {
              type: "table",
              headers: ["Allied Powers", "Central Powers"],
              rows: [
                ["France, Britain (and its empire), Russia, Italy (from 1915), USA (from 1917) and others", "Germany, Austria-Hungary, the Ottoman Empire, Bulgaria"],
              ],
            },
            {
              type: "text",
              md: "Much of the fighting on the Western Front took place in **trenches**, where new weapons — machine guns, artillery, poison gas — made advances costly. Around **15–20 million** people, soldiers and civilians, died. The war ended with an armistice on **11 November 1918**; the **Treaty of Versailles (1919)** placed heavy penalties on Germany, and the **League of Nations** was created to keep peace.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What event triggered World War I?",
                  options: [
                    "The bombing of Pearl Harbor",
                    "The assassination of Archduke Franz Ferdinand",
                    "The invasion of Poland",
                    "The signing of the Treaty of Versailles",
                  ],
                  answer: 1,
                  explain: "His assassination in Sarajevo in June 1914 set off a chain of declarations of war.",
                },
              ],
            },
            { type: "heading", text: "World War II (1939–1945)" },
            {
              type: "list",
              items: [
                "**Causes:** resentment over the Treaty of Versailles, the Great Depression, the rise of aggressive dictatorships (Nazi Germany under Adolf Hitler, Fascist Italy, militarist Japan), and the failure of the League of Nations and appeasement to stop expansion.",
                "**Start:** Germany invaded Poland on **1 September 1939**; Britain and France declared war.",
                "**Sides:** the Allies (including Britain, France, the Soviet Union from 1941, the USA from December 1941, and China) against the Axis (Germany, Italy, Japan).",
                "**Turning points:** the Battle of Stalingrad (1942–43), D-Day landings in Normandy (June 1944), and Pacific battles such as Midway (1942).",
                "**End:** Germany surrendered in **May 1945**. After the USA dropped atomic bombs on Hiroshima and Nagasaki in August, Japan surrendered on **2 September 1945**.",
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "The Holocaust",
              md: "The Nazi regime carried out the systematic, state-sponsored murder of **six million Jews**, along with millions of others including Roma, disabled people, Poles, Soviet prisoners and political opponents. Remembering it helps us recognise and oppose prejudice and hatred.",
            },
            { type: "heading", text: "Consequences" },
            {
              type: "list",
              items: [
                "An estimated **70–85 million** deaths — the deadliest conflict in history.",
                "The **United Nations** was founded in **October 1945** to promote peace and cooperation.",
                "The Universal Declaration of Human Rights followed in 1948.",
                "The USA and USSR emerged as superpowers, leading to the Cold War.",
                "Many colonies in Asia and Africa gained independence in the following decades.",
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Thinking like a historian",
              md: "Use multiple sources — letters, newspapers, official records — and ask who created each one and why. Wars are remembered differently in different countries, so comparing perspectives gives a fuller picture.",
            },
            {
              type: "keypoints",
              items: [
                "WWI (1914–18): MAIN causes; triggered by an assassination; trench warfare; Treaty of Versailles.",
                "WWII (1939–45): began with the invasion of Poland; Allies vs Axis; ended in 1945.",
                "The Holocaust was a genocide of six million Jews and millions of others.",
                "The UN was created in 1945 to prevent future world wars.",
              ],
            },
          ],
          flashcards: [
            { front: "MAIN causes of WWI", back: "Militarism, Alliances, Imperialism, Nationalism." },
            { front: "Treaty of Versailles", back: "1919 peace treaty ending WWI, imposing heavy terms on Germany." },
            { front: "Start of WWII in Europe", back: "Germany invaded Poland on 1 September 1939." },
            { front: "United Nations founded", back: "October 1945." },
            { front: "Axis powers", back: "Germany, Italy and Japan." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Put these events in chronological order.",
              items: [
                "Assassination of Franz Ferdinand",
                "Treaty of Versailles",
                "Germany invades Poland",
                "D-Day landings",
                "United Nations founded",
              ],
              explain: "1914 → 1919 → 1939 → 1944 → 1945.",
            },
            {
              kind: "mcq",
              q: "Which organisation was created after WWI to keep the peace?",
              options: ["United Nations", "League of Nations", "NATO", "European Union"],
              answer: 1,
              explain: "The League of Nations was set up in 1920; the UN replaced it after WWII.",
            },
            {
              kind: "fill",
              q: "In WWI, the 'A' in MAIN stands for ___.",
              answer: ["alliances", "alliance"],
              explain: "Alliances drew many countries into the conflict.",
            },
            {
              kind: "truefalse",
              q: "The USA joined World War II after the attack on Pearl Harbor in December 1941.",
              answer: true,
              explain: "Japan attacked Pearl Harbor on 7 December 1941; the USA declared war the next day.",
            },
            {
              kind: "numeric",
              q: "In what year did World War II end?",
              answer: 1945,
              explain: "Germany surrendered in May and Japan in September 1945.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "civics",
      title: "Civics & Government",
      icon: "⚖️",
      description: "How democracies work, what constitutions do, and the rights and duties of citizens.",
      lessons: [
        {
          slug: "democracy-and-government",
          title: "Democracy & How Governments Work",
          summary: "Types of government, the three branches, and why separation of powers matters.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "illustration", emoji: "🗳️", caption: "In a democracy, power comes from the people." },
            {
              type: "text",
              md: "Imagine your class has to decide on a trip. One person could decide alone, a small group could choose, or everyone could vote. These are, in miniature, the main ways societies are governed.",
            },
            {
              type: "table",
              headers: ["Type", "Who holds power"],
              rows: [
                ["Democracy", "The people, directly or through elected representatives"],
                ["Monarchy", "A king or queen (absolute, or constitutional with limited powers)"],
                ["Dictatorship", "One person or party, without free elections"],
                ["Oligarchy", "A small, powerful group"],
              ],
            },
            { type: "heading", text: "Kinds of democracy" },
            {
              type: "list",
              items: [
                "**Direct democracy** — citizens vote on laws themselves (ancient Athens; referendums today).",
                "**Representative democracy** — citizens elect representatives to make laws on their behalf. Most democracies work this way.",
              ],
            },
            { type: "heading", text: "Three branches of government" },
            {
              type: "table",
              headers: ["Branch", "Job", "Typical body"],
              rows: [
                ["Legislature", "Makes laws", "Parliament, Congress, Assembly"],
                ["Executive", "Carries out laws and runs the country", "President or Prime Minister and ministers"],
                ["Judiciary", "Interprets laws and settles disputes", "Courts, Supreme Court"],
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Separation of powers",
              md: "Splitting power among three branches, each able to check the others, prevents any single person or group from becoming too powerful. Courts, for example, can strike down laws that break the constitution.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which branch of government decides whether a law is constitutional?",
                  options: ["Legislature", "Executive", "Judiciary", "The media"],
                  answer: 2,
                  explain: "Courts interpret laws and the constitution.",
                },
              ],
            },
            { type: "heading", text: "Features of a healthy democracy" },
            {
              type: "list",
              items: [
                "Free and fair elections held regularly.",
                "**Universal adult suffrage** — every adult citizen can vote.",
                "**Rule of law** — everyone, including leaders, must obey the law.",
                "Free press and freedom of expression.",
                "Protection of minority rights.",
              ],
            },
            {
              type: "keypoints",
              items: [
                "Democracy means power rests with the people.",
                "Most democracies are representative.",
                "Legislature makes laws, executive implements them, judiciary interprets them.",
                "Separation of powers and the rule of law prevent abuse of power.",
              ],
            },
          ],
          flashcards: [
            { front: "Representative democracy", back: "Citizens elect officials to make laws on their behalf." },
            { front: "Legislature", back: "The branch that makes laws." },
            { front: "Rule of law", back: "The principle that everyone, including leaders, is subject to the law." },
            { front: "Universal adult suffrage", back: "The right of all adult citizens to vote." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "A country where citizens vote directly on a new law in a referendum is using…",
              options: ["Direct democracy", "Dictatorship", "Oligarchy", "Absolute monarchy"],
              answer: 0,
              explain: "In a referendum, citizens decide the issue directly.",
            },
            {
              kind: "fill",
              q: "The ___ branch of government carries out and enforces laws.",
              answer: ["executive"],
              explain: "The executive includes the head of government and ministers.",
            },
            {
              kind: "truefalse",
              q: "Under the rule of law, a prime minister can ignore laws they disagree with.",
              answer: false,
              explain: "The rule of law applies equally to everyone, including leaders.",
            },
            {
              kind: "multi",
              q: "Which are features of a democracy?",
              options: ["Free and fair elections", "A free press", "One party banning all others", "Independent courts"],
              answers: [0, 1, 3],
              explain: "Banning rival parties is a feature of authoritarian rule.",
            },
          ],
        },
        {
          slug: "constitutions-and-rights",
          title: "Constitutions, Rights & Responsibilities",
          summary: "The rulebook of a nation, the rights it guarantees and the duties citizens share.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A sports league needs a rulebook that even the referee must follow. A country's **constitution** is its supreme rulebook: it sets up the government, limits its powers and protects citizens' rights. Ordinary laws that clash with it can be struck down.",
            },
            { type: "heading", text: "What a constitution does" },
            {
              type: "list",
              items: [
                "Describes how the government is organised and chosen.",
                "Divides power between branches and, in **federal** systems, between national and state governments.",
                "Lists the **fundamental rights** of citizens.",
                "Explains how the constitution itself can be **amended**.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Famous constitutions",
              md: "The **US Constitution** (1787) is the oldest written national constitution still in use. **India's Constitution**, which came into force on 26 January 1950, is the longest written constitution of any country. The **UK** has no single written document; its constitution is spread across laws, court rulings and conventions.",
            },
            { type: "heading", text: "Rights" },
            {
              type: "table",
              headers: ["Right", "Example"],
              rows: [
                ["Equality", "Equal treatment before the law, regardless of religion, gender, race or caste"],
                ["Freedom of expression", "Speaking, writing and peacefully protesting"],
                ["Freedom of religion", "Following any faith, or none"],
                ["Right to education", "Access to schooling for children"],
                ["Right to a fair trial", "Being presumed innocent until proven guilty, with a lawyer"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Universal Declaration of Human Rights",
              md: "Adopted by the UN General Assembly on **10 December 1948**, its 30 articles set a common standard of rights for all people everywhere. 10 December is now celebrated as **Human Rights Day**.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "Rights are usually unlimited — for example, free speech protects threats of violence.",
                  answer: false,
                  explain: "Rights have reasonable limits so that they don't harm the rights and safety of others.",
                },
              ],
            },
            { type: "heading", text: "Responsibilities" },
            {
              type: "list",
              items: [
                "Obeying laws and paying taxes.",
                "Voting and staying informed.",
                "Respecting others' rights and differences.",
                "Protecting public property and the environment.",
              ],
            },
            {
              type: "keypoints",
              items: [
                "A constitution is a country's supreme law.",
                "It organises government, limits power and protects rights.",
                "The UDHR (1948) sets universal human rights standards.",
                "Rights come with responsibilities.",
              ],
            },
          ],
          flashcards: [
            { front: "Constitution", back: "The supreme law that sets out how a country is governed and protects rights." },
            { front: "Amendment", back: "A formal change to a constitution." },
            { front: "UDHR adopted", back: "10 December 1948 by the UN General Assembly." },
            { front: "Federal system", back: "Power is shared between a national government and state/provincial governments." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "What happens to an ordinary law that conflicts with the constitution?",
              options: ["It overrides the constitution", "Courts can strike it down", "It becomes an amendment", "Nothing"],
              answer: 1,
              explain: "The constitution is supreme, so conflicting laws can be declared invalid.",
            },
            {
              kind: "numeric",
              q: "How many articles does the Universal Declaration of Human Rights have?",
              answer: 30,
              explain: "The UDHR has 30 articles.",
            },
            {
              kind: "fill",
              q: "A formal change made to a constitution is called an ___.",
              answer: ["amendment"],
              explain: "Constitutions describe their own amendment process.",
            },
            {
              kind: "multi",
              q: "Which are citizens' responsibilities?",
              options: ["Obeying the law", "Paying taxes", "Respecting others' rights", "Ignoring elections"],
              answers: [0, 1, 2],
              explain: "Participating in elections is part of active citizenship.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "economics-basics",
      title: "Economics Basics",
      icon: "💰",
      description: "Scarcity and choice, supply and demand, and how money and banks work.",
      lessons: [
        {
          slug: "supply-and-demand",
          title: "Scarcity, Supply & Demand",
          summary: "Why concert tickets sell out and strawberries are cheap in summer.",
          minutes: 17,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "You have ₹500 (or $10) and two things you want: a book and a movie ticket. You can't afford both. This is the central problem of economics — **scarcity**: our wants are unlimited, but resources (money, time, materials) are limited. So we must **choose**.",
            },
            {
              type: "callout",
              tone: "note",
              title: "Opportunity cost",
              md: "The value of the next-best option you give up. If you choose the book, the movie is your opportunity cost.",
            },
            { type: "heading", text: "Demand" },
            {
              type: "text",
              md: "**Demand** is how much of something buyers are willing and able to buy at different prices. The **law of demand**: as price **rises**, quantity demanded **falls** (and vice versa). That's why sales attract crowds.",
            },
            { type: "heading", text: "Supply" },
            {
              type: "text",
              md: "**Supply** is how much producers are willing to sell at different prices. The **law of supply**: as price **rises**, quantity supplied **rises** — higher prices make selling more profitable.",
            },
            {
              type: "widget",
              widget: "supply-demand",
              caption: "Shift the curves and watch the equilibrium price and quantity move.",
            },
            {
              type: "text",
              md: "Where the curves cross is the **equilibrium**: the price at which the amount buyers want equals the amount sellers offer. If the price is above equilibrium, there's a **surplus** (unsold goods); below it, a **shortage** (queues and sell-outs).",
            },
            {
              type: "table",
              headers: ["Event", "Curve that shifts", "Effect on price"],
              rows: [
                ["A new phone becomes trendy", "Demand shifts right", "Price rises"],
                ["A bumper mango harvest", "Supply shifts right", "Price falls"],
                ["A frost destroys coffee crops", "Supply shifts left", "Price rises"],
                ["A health scare about a snack", "Demand shifts left", "Price falls"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A drought ruins much of the wheat crop. What happens to the price of wheat?",
                  options: ["It falls", "It rises", "It stays the same", "It becomes zero"],
                  answer: 1,
                  explain: "Supply falls (shifts left), so the equilibrium price rises.",
                },
              ],
            },
            {
              type: "keypoints",
              items: [
                "Scarcity forces choices; opportunity cost is the next-best option given up.",
                "Law of demand: higher price → lower quantity demanded.",
                "Law of supply: higher price → higher quantity supplied.",
                "Equilibrium is where supply meets demand.",
              ],
            },
          ],
          flashcards: [
            { front: "Scarcity", back: "Limited resources compared with unlimited wants." },
            { front: "Opportunity cost", back: "The value of the next-best alternative you give up." },
            { front: "Law of demand", back: "As price rises, quantity demanded falls." },
            { front: "Equilibrium price", back: "The price where quantity supplied equals quantity demanded." },
            { front: "Shortage", back: "When quantity demanded exceeds quantity supplied, usually because price is below equilibrium." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "If the price of a product is set above equilibrium, what results?",
              options: ["A shortage", "A surplus", "Higher demand", "No change"],
              answer: 1,
              explain: "Sellers offer more than buyers want, so goods go unsold.",
            },
            {
              kind: "truefalse",
              q: "According to the law of supply, producers offer more when prices rise.",
              answer: true,
              explain: "Higher prices increase potential profit, encouraging more production.",
            },
            {
              kind: "fill",
              q: "Choosing to study instead of watching TV means TV is your opportunity ___.",
              answer: ["cost"],
              explain: "Opportunity cost is the next-best option you give up.",
            },
            {
              kind: "multi",
              q: "Which events would raise the price of umbrellas?",
              options: ["A very rainy season", "A factory fire cuts umbrella production", "A new cheap umbrella factory opens", "A long drought"],
              answers: [0, 1],
              explain: "More rain raises demand; a factory fire cuts supply. A new factory increases supply and a drought lowers demand, both lowering prices.",
            },
          ],
        },
        {
          slug: "money-and-banking",
          title: "Money & Banking",
          summary: "From barter to bank accounts — what money does, how banks work, and the magic of compound interest.",
          minutes: 17,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "Imagine you have apples and want shoes. Under **barter**, you'd need to find a shoemaker who wants apples *right now* — a **double coincidence of wants**. Money solves this problem: everyone accepts it, so trade becomes easy.",
            },
            { type: "heading", text: "Functions of money" },
            {
              type: "table",
              headers: ["Function", "Meaning"],
              rows: [
                ["Medium of exchange", "Accepted in payment for goods and services"],
                ["Unit of account", "Measures value — we compare prices in money"],
                ["Store of value", "Can be saved and used later"],
                ["Standard of deferred payment", "Lets us settle debts in the future"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Money through history",
              md: "People have used shells, salt, cattle and metal coins as money. Lydia (in modern Turkey) minted some of the earliest coins around 600 BCE, and China used paper money over 1,000 years ago. Today most money is digital — numbers in bank accounts.",
            },
            { type: "heading", text: "How banks work" },
            {
              type: "list",
              items: [
                "Banks accept **deposits** and pay savers **interest**.",
                "They lend money as **loans** and charge borrowers a higher interest rate.",
                "The difference between the two rates helps banks earn profit.",
                "A **central bank** (e.g. the Reserve Bank of India, the US Federal Reserve) issues currency, regulates banks and sets key interest rates to control **inflation** — the general rise in prices over time.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "What problem of barter does money solve?",
                  options: ["Inflation", "The double coincidence of wants", "Taxation", "Scarcity"],
                  answer: 1,
                  explain: "With money, you no longer need to find someone who wants exactly what you have.",
                },
              ],
            },
            { type: "heading", text: "Simple vs compound interest" },
            {
              type: "formula",
              tex: "SI = \\dfrac{P \\times R \\times T}{100}",
              caption: "Simple interest: P = principal, R = rate (% per year), T = years",
            },
            {
              type: "formula",
              tex: "A = P\\left(1 + \\dfrac{R}{100}\\right)^{T}",
              caption: "Compound interest: interest is earned on interest too",
            },
            {
              type: "text",
              md: "Save 1,000 at 10% a year for 2 years:\n\n- **Simple:** interest = 1,000 × 10 × 2 / 100 = **200**, total 1,200.\n- **Compound:** 1,000 × 1.1 × 1.1 = **1,210**.\n\nThe extra 10 is interest earned on the first year's interest. Over decades, this snowball gets enormous.",
            },
            {
              type: "widget",
              widget: "compound-interest",
              caption: "Change the rate and years to watch compound growth take off.",
            },
            {
              type: "callout",
              tone: "tip",
              title: "Rule of 72",
              md: "Divide 72 by the annual interest rate to estimate how many years it takes money to double. At 8%, about 72 ÷ 8 = **9 years**. The same snowball works against you with debt — so borrow carefully!",
            },
            {
              type: "keypoints",
              items: [
                "Money is a medium of exchange, unit of account, store of value and standard of deferred payment.",
                "Banks pay interest on deposits and charge interest on loans.",
                "Central banks issue currency and manage inflation.",
                "Compound interest grows faster than simple interest.",
              ],
            },
          ],
          flashcards: [
            { front: "Barter", back: "Trading goods directly for other goods without money." },
            { front: "Inflation", back: "A general rise in prices over time, reducing money's purchasing power." },
            { front: "Central bank", back: "Issues currency, regulates banks and sets key interest rates." },
            { front: "Compound interest", back: "Interest calculated on the principal plus previously earned interest." },
            { front: "Rule of 72", back: "Years to double ≈ 72 ÷ interest rate." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Find the simple interest on 5,000 at 4% per year for 3 years.",
              answer: 600,
              explain: "SI = 5,000 × 4 × 3 / 100 = 600.",
            },
            {
              kind: "numeric",
              q: "2,000 is invested at 10% compound interest per year. What is the total after 2 years?",
              answer: 2420,
              explain: "2,000 × 1.1² = 2,000 × 1.21 = 2,420.",
            },
            {
              kind: "mcq",
              q: "Which function of money lets you compare the value of a bicycle and a phone?",
              options: ["Store of value", "Unit of account", "Medium of exchange", "Standard of deferred payment"],
              answer: 1,
              explain: "Prices in a common unit let us compare values.",
            },
            {
              kind: "numeric",
              q: "Using the Rule of 72, about how many years does money take to double at 6% interest?",
              answer: 12,
              explain: "72 ÷ 6 = 12 years.",
            },
            {
              kind: "truefalse",
              q: "Banks usually charge borrowers a lower interest rate than they pay savers.",
              answer: false,
              explain: "Banks charge more on loans than they pay on deposits; the gap is a source of profit.",
            },
          ],
        },
      ],
    },
  ],
};
