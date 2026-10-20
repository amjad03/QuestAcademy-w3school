import type { Subject } from "@/content/types";

export const biologySchool: Subject = {
  slug: "biology-school",
  title: "Biology",
  world: "school",
  icon: "🧬",
  colors: ["#16a34a", "#0ea5e9"],
  tagline: "Explore life — from a single cell to a whole planet.",
  description:
    "Journey through the living world: tour the cell's tiny machines, follow food and air through the human body, watch plants turn sunlight into sugar, crack the code of heredity, and see how every living thing is connected in ecosystems.",
  levels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"],
  stages: ["middle", "secondary"],
  topics: [
    /* ------------------------------------------------------------ */
    {
      slug: "the-cell",
      title: "The Cell",
      icon: "🔬",
      description: "The basic unit of life — its organelles, the differences between plant and animal cells, and how substances move in and out.",
      lessons: [
        {
          slug: "cell-the-unit-of-life",
          title: "The Cell: Unit of Life",
          summary: "Meet cell theory and tour the organelles inside an animal cell.",
          minutes: 16,
          xp: 35,
          blocks: [
            { type: "illustration", emoji: "🔬", caption: "In 1665 Robert Hooke peered at cork and saw tiny boxes he called 'cells'." },
            {
              type: "text",
              md: "Your body contains around **37 trillion cells** — more than the number of stars in our galaxy. Each one is a busy factory with its own power station, control room and delivery service. Let's step inside.",
            },
            { type: "heading", text: "Cell theory" },
            {
              type: "list",
              ordered: true,
              items: [
                "All living things are made of one or more cells.",
                "The cell is the basic unit of structure and function in living things.",
                "All cells come from pre-existing cells.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Who figured it out?",
              md: "Matthias Schleiden (plants, 1838) and Theodor Schwann (animals, 1839) proposed that all living things are made of cells. Rudolf Virchow added in 1855 that every cell comes from another cell.",
            },
            {
              type: "widget",
              widget: "cell-explorer",
              props: { kind: "animal" },
              caption: "Click each organelle in this animal cell to learn its job.",
            },
            {
              type: "table",
              headers: ["Organelle", "Job", "Factory analogy"],
              rows: [
                ["Nucleus", "Holds DNA and controls the cell", "Head office"],
                ["Cell membrane", "Controls what enters and leaves", "Security gate"],
                ["Cytoplasm", "Jelly-like fluid where reactions happen", "Factory floor"],
                ["Mitochondria", "Release energy by respiration", "Power station"],
                ["Ribosomes", "Make proteins", "Assembly line"],
                ["Endoplasmic reticulum", "Transport network; rough ER carries ribosomes", "Conveyor belts"],
                ["Golgi apparatus", "Packages and ships proteins", "Post office"],
                ["Lysosomes", "Break down waste and worn-out parts", "Recycling crew"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Muscle cells need lots of energy. Which organelle would you expect them to have plenty of?",
                  options: ["Lysosomes", "Mitochondria", "Golgi apparatus", "Vacuoles"],
                  answer: 1,
                  explain: "Mitochondria carry out aerobic respiration, releasing energy.",
                },
              ],
            },
            { type: "heading", text: "Prokaryotes vs eukaryotes" },
            {
              type: "text",
              md: "**Prokaryotic** cells (bacteria) are small and simple, with no true nucleus — their DNA floats in the cytoplasm. **Eukaryotic** cells (plants, animals, fungi) have a nucleus wrapped in a membrane and many membrane-bound organelles.",
            },
            {
              type: "keypoints",
              items: [
                "All living things are made of cells, and cells come from cells.",
                "Each organelle has a specific job.",
                "Mitochondria release energy; ribosomes make proteins; the nucleus stores DNA.",
                "Prokaryotes lack a nucleus; eukaryotes have one.",
              ],
            },
          ],
          flashcards: [
            { front: "Mitochondria", back: "The 'powerhouse' — releases energy from glucose by aerobic respiration." },
            { front: "Ribosome", back: "Site of protein synthesis." },
            { front: "Prokaryotic cell", back: "A cell without a true nucleus, e.g. a bacterium." },
            { front: "Who first named cells?", back: "Robert Hooke, in 1665, looking at cork." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which structure controls what enters and leaves the cell?",
              options: ["Nucleus", "Cell membrane", "Ribosome", "Cytoplasm"],
              answer: 1,
              explain: "The cell membrane is selectively permeable.",
            },
            {
              kind: "truefalse",
              q: "Bacteria are eukaryotic organisms.",
              answer: false,
              explain: "Bacteria are prokaryotes — they have no membrane-bound nucleus.",
            },
            {
              kind: "fill",
              q: "The organelle that packages and sends out proteins is the ___ apparatus.",
              answer: ["golgi"],
              explain: "The Golgi apparatus works like a post office.",
            },
            {
              kind: "multi",
              q: "Which statements belong to cell theory?",
              options: [
                "All living things are made of cells",
                "Cells can arise from non-living matter",
                "The cell is the basic unit of life",
                "All cells come from pre-existing cells",
              ],
              answers: [0, 2, 3],
              explain: "Cell theory says cells only come from other cells, not from non-living matter.",
            },
          ],
        },
        {
          slug: "plant-cells-and-transport",
          title: "Plant Cells & Moving Materials",
          summary: "Spot what makes plant cells special and learn how diffusion and osmosis move substances.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "Why does a wilted lettuce leaf go crisp again when you drop it in cold water? The answer lies in the special features of plant cells — and a process called **osmosis**.",
            },
            {
              type: "widget",
              widget: "cell-explorer",
              props: { kind: "plant" },
              caption: "Explore a plant cell. Look for the cell wall, chloroplasts and large vacuole.",
            },
            {
              type: "table",
              headers: ["Feature", "Plant cell", "Animal cell"],
              rows: [
                ["Cell wall (cellulose)", "✅ Yes", "❌ No"],
                ["Chloroplasts", "✅ Yes (in green parts)", "❌ No"],
                ["Vacuole", "One large, permanent central vacuole", "Small, temporary vacuoles (if any)"],
                ["Shape", "Usually fixed, box-like", "Usually rounded, flexible"],
                ["Nucleus, membrane, mitochondria", "✅ Yes", "✅ Yes"],
              ],
            },
            {
              type: "callout",
              tone: "note",
              title: "Chloroplasts",
              md: "Chloroplasts contain the green pigment **chlorophyll**, which captures light energy for photosynthesis. Root cells live underground, so they have no chloroplasts.",
            },
            { type: "heading", text: "Diffusion" },
            {
              type: "text",
              md: "**Diffusion** is the net movement of particles from a region of **higher concentration** to **lower concentration**. When someone sprays perfume in a corner, you soon smell it across the room. Oxygen diffuses into cells and carbon dioxide diffuses out the same way.",
            },
            { type: "heading", text: "Osmosis" },
            {
              type: "text",
              md: "**Osmosis** is the diffusion of **water** across a partially permeable membrane, from a dilute solution (lots of water) to a concentrated solution (less water).\n\n- Plant cell in pure water → water enters, vacuole swells, cell becomes **turgid** (firm). The cell wall stops it bursting.\n- Plant cell in salty water → water leaves, cell becomes **flaccid** and the membrane may pull away from the wall (**plasmolysis**).",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Why don't plant cells burst when placed in pure water?",
                  options: ["They have no vacuole", "The cell wall resists the pressure", "Water cannot enter plant cells", "Chloroplasts absorb the water"],
                  answer: 1,
                  explain: "The rigid cellulose wall pushes back, keeping the swollen cell intact.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Real life",
              md: "Salting slugs, pickling vegetables and preserving fruit in sugar syrup all draw water out of cells by osmosis.",
            },
            {
              type: "keypoints",
              items: [
                "Plant cells have a cell wall, chloroplasts and a large vacuole.",
                "Diffusion: particles spread from high to low concentration.",
                "Osmosis: water moves across a membrane toward the more concentrated solution.",
                "Turgid cells keep plants upright.",
              ],
            },
          ],
          flashcards: [
            { front: "Cell wall is made of…", back: "Cellulose." },
            { front: "Diffusion", back: "Net movement of particles from high to low concentration." },
            { front: "Osmosis", back: "Movement of water across a partially permeable membrane from dilute to concentrated solution." },
            { front: "Turgid", back: "A plant cell swollen and firm with water." },
            { front: "Plasmolysis", back: "When a plant cell loses water and its membrane pulls away from the cell wall." },
          ],
          quiz: [
            {
              kind: "multi",
              q: "Which structures are found in plant cells but NOT animal cells?",
              options: ["Cell wall", "Mitochondria", "Chloroplasts", "Large permanent vacuole", "Nucleus"],
              answers: [0, 2, 3],
              explain: "Both cell types have mitochondria and a nucleus.",
            },
            {
              kind: "truefalse",
              q: "Osmosis is the movement of salt molecules across a membrane.",
              answer: false,
              explain: "Osmosis refers specifically to the movement of water.",
            },
            {
              kind: "mcq",
              q: "A potato slice is left in very salty water. What happens?",
              options: ["It gains water and becomes firmer", "It loses water and becomes floppy", "Nothing changes", "It makes chlorophyll"],
              answer: 1,
              explain: "Water leaves the cells by osmosis into the more concentrated salt solution.",
            },
            {
              kind: "fill",
              q: "The green pigment in chloroplasts is called ___.",
              answer: ["chlorophyll"],
              explain: "Chlorophyll absorbs light energy, mainly red and blue light.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "human-body-systems",
      title: "Tissues & Human Body Systems",
      icon: "🫀",
      description: "How cells build tissues, organs and systems — and how we digest food, breathe and pump blood.",
      lessons: [
        {
          slug: "tissues-and-digestion",
          title: "Tissues & the Digestive System",
          summary: "From cells to organ systems, then follow a sandwich on its 9-metre journey.",
          minutes: 18,
          xp: 40,
          blocks: [
            {
              type: "text",
              md: "A single cell can't run a marathon or digest a pizza. Bodies solve this by **teamwork**: similar cells join to form tissues, tissues build organs, and organs work together in systems.",
            },
            {
              type: "formula",
              tex: "\\text{cell} \\rightarrow \\text{tissue} \\rightarrow \\text{organ} \\rightarrow \\text{organ system} \\rightarrow \\text{organism}",
              caption: "Levels of organisation",
            },
            {
              type: "table",
              headers: ["Animal tissue", "Job", "Example"],
              rows: [
                ["Epithelial", "Covers and protects surfaces", "Skin, lining of the gut"],
                ["Muscular", "Contracts to cause movement", "Biceps, heart wall"],
                ["Nervous", "Carries electrical messages", "Brain, nerves"],
                ["Connective", "Supports and connects", "Bone, blood, tendons"],
              ],
            },
            { type: "heading", text: "The digestive journey" },
            { type: "illustration", emoji: "🥪➡️👄➡️🫃", caption: "Digestion breaks big food molecules into small ones the blood can absorb." },
            {
              type: "table",
              headers: ["Stop", "What happens"],
              rows: [
                ["Mouth", "Teeth chew (mechanical); saliva's amylase starts breaking starch into sugar"],
                ["Oesophagus", "Muscle waves called **peristalsis** push food to the stomach"],
                ["Stomach", "Churns food; hydrochloric acid kills germs; pepsin begins protein digestion"],
                ["Small intestine", "Bile (from liver) breaks fat into droplets; pancreatic enzymes finish digestion; villi absorb nutrients"],
                ["Large intestine", "Absorbs water; forms faeces"],
                ["Rectum & anus", "Stores and removes waste (egestion)"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Super surface",
              md: "The small intestine is about 6–7 m long and lined with millions of finger-like **villi**. Together they give a huge surface area so nutrients are absorbed quickly into the blood.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "order",
                  q: "Put the organs in the order food passes through them.",
                  items: ["Mouth", "Oesophagus", "Stomach", "Small intestine", "Large intestine"],
                  explain: "Food travels mouth → oesophagus → stomach → small intestine → large intestine.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Enzyme", "Breaks down", "Into"],
              rows: [
                ["Amylase", "Starch", "Sugars (maltose, then glucose)"],
                ["Protease (e.g. pepsin)", "Proteins", "Amino acids"],
                ["Lipase", "Fats", "Fatty acids and glycerol"],
              ],
            },
            {
              type: "keypoints",
              items: [
                "Cells → tissues → organs → organ systems → organism.",
                "Digestion is mechanical (chewing, churning) and chemical (enzymes).",
                "Most digestion and absorption happen in the small intestine.",
                "The large intestine reabsorbs water.",
              ],
            },
          ],
          flashcards: [
            { front: "Tissue", back: "A group of similar cells working together for a function." },
            { front: "Peristalsis", back: "Wave-like muscle contractions that push food through the gut." },
            { front: "Villi", back: "Finger-like projections in the small intestine that increase surface area for absorption." },
            { front: "Bile", back: "Made by the liver, stored in the gallbladder; emulsifies fats." },
            { front: "Lipase digests…", back: "Fats into fatty acids and glycerol." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Where does the chemical digestion of starch begin?",
              options: ["Stomach", "Mouth", "Small intestine", "Large intestine"],
              answer: 1,
              explain: "Salivary amylase in the mouth starts breaking down starch.",
            },
            {
              kind: "fill",
              q: "Protein is broken down into ___ acids.",
              answer: ["amino"],
              explain: "Proteases split proteins into amino acids.",
            },
            {
              kind: "truefalse",
              q: "The large intestine is where most nutrients are absorbed.",
              answer: false,
              explain: "Most absorption happens in the small intestine; the large intestine mainly absorbs water.",
            },
            {
              kind: "order",
              q: "Order the levels of organisation from smallest to largest.",
              items: ["Cell", "Tissue", "Organ", "Organ system", "Organism"],
              explain: "Each level is built from the one before it.",
            },
          ],
        },
        {
          slug: "respiratory-system",
          title: "The Respiratory System",
          summary: "How your lungs swap oxygen for carbon dioxide around 20,000 times a day.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "illustration", emoji: "🫁", caption: "Your lungs hold hundreds of millions of tiny air sacs." },
            {
              type: "text",
              md: "Hold your breath and within a minute your body is begging for air. Every cell needs oxygen to release energy, and must get rid of carbon dioxide. The **respiratory system** handles this swap.",
            },
            { type: "heading", text: "The air's path" },
            {
              type: "list",
              ordered: true,
              items: [
                "**Nose/mouth** — air is warmed, moistened and filtered by hairs and mucus.",
                "**Pharynx and larynx** — the throat and voice box.",
                "**Trachea** (windpipe) — held open by C-shaped rings of cartilage.",
                "**Bronchi** — two branches, one to each lung.",
                "**Bronchioles** — ever-smaller tubes.",
                "**Alveoli** — tiny air sacs where gas exchange happens.",
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Gas exchange",
              md: "Each alveolus has walls just one cell thick and is wrapped in capillaries. Oxygen diffuses into the blood; carbon dioxide diffuses out. Spread flat, the alveoli would cover about 70 square metres — roughly the floor of a classroom!",
            },
            { type: "heading", text: "Breathing in and out" },
            {
              type: "table",
              headers: ["", "Inhaling", "Exhaling"],
              rows: [
                ["Diaphragm", "Contracts and flattens (moves down)", "Relaxes and domes up"],
                ["Rib muscles", "Contract, ribs move up and out", "Relax, ribs move down and in"],
                ["Chest volume", "Increases", "Decreases"],
                ["Pressure in lungs", "Falls — air rushes in", "Rises — air is pushed out"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "truefalse",
                  q: "When you breathe in, your diaphragm contracts and moves downward.",
                  answer: true,
                  explain: "Contracting flattens the diaphragm, enlarging the chest cavity.",
                },
              ],
            },
            {
              type: "table",
              headers: ["Gas", "Inhaled air", "Exhaled air"],
              rows: [
                ["Oxygen", "about 21%", "about 16%"],
                ["Carbon dioxide", "about 0.04%", "about 4%"],
                ["Water vapour", "Variable", "Saturated"],
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Smoking",
              md: "Tobacco smoke coats airways with tar, paralyses the tiny hairs (cilia) that sweep out mucus, damages alveoli, and greatly raises the risk of lung cancer and heart disease.",
            },
            {
              type: "keypoints",
              items: [
                "Air path: nose → trachea → bronchi → bronchioles → alveoli.",
                "Gas exchange happens by diffusion in the alveoli.",
                "Breathing (ventilation) is driven by the diaphragm and rib muscles.",
                "Breathing is not the same as respiration — respiration is the chemical release of energy in cells.",
              ],
            },
          ],
          flashcards: [
            { front: "Alveoli", back: "Tiny air sacs in the lungs where oxygen and carbon dioxide are exchanged." },
            { front: "Trachea", back: "The windpipe, supported by rings of cartilage." },
            { front: "Diaphragm", back: "A dome-shaped muscle below the lungs; contracts to cause inhalation." },
            { front: "Breathing vs respiration", back: "Breathing moves air; respiration releases energy from glucose in cells." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the path of air into the lungs.",
              items: ["Nose", "Trachea", "Bronchi", "Bronchioles", "Alveoli"],
              explain: "Air moves from large tubes to ever-smaller ones, ending at the alveoli.",
            },
            {
              kind: "mcq",
              q: "Why are alveoli walls only one cell thick?",
              options: ["To store more air", "To make diffusion distance short", "To produce mucus", "To make them stronger"],
              answer: 1,
              explain: "A thin wall means gases have only a short distance to diffuse.",
            },
            {
              kind: "numeric",
              q: "Roughly what percentage of exhaled air is carbon dioxide?",
              answer: 4,
              tolerance: 1,
              unit: "%",
              explain: "Exhaled air is about 4% CO₂, up from 0.04% in inhaled air.",
            },
            {
              kind: "fill",
              q: "When you exhale, the volume of your chest ___.",
              answer: ["decreases", "gets smaller", "reduces"],
              explain: "The diaphragm relaxes and ribs move in, shrinking the chest and pushing air out.",
            },
          ],
        },
        {
          slug: "circulatory-system",
          title: "The Circulatory System",
          summary: "Your heart, blood vessels and blood — a delivery network that never takes a day off.",
          minutes: 17,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "Your heart beats about **100,000 times a day** without you ever asking it to. Each beat pushes blood through a network of vessels so long that, laid end to end, it could wrap around Earth more than twice.",
            },
            { type: "heading", text: "The heart" },
            {
              type: "text",
              md: "The human heart has **four chambers**: two upper **atria** receive blood, two lower **ventricles** pump it out. **Valves** stop blood flowing backwards — the 'lub-dub' sound is valves snapping shut.\n\n- **Right side** pumps deoxygenated blood to the lungs.\n- **Left side** pumps oxygenated blood to the whole body, so its wall is thicker and more muscular.",
            },
            {
              type: "callout",
              tone: "exam",
              title: "Double circulation",
              md: "Blood passes through the heart **twice** per complete loop: heart → lungs → heart (pulmonary circuit), then heart → body → heart (systemic circuit).",
            },
            { type: "heading", text: "Blood vessels" },
            {
              type: "table",
              headers: ["Vessel", "Direction", "Features"],
              rows: [
                ["Arteries", "Away from the heart", "Thick, elastic walls; high pressure"],
                ["Veins", "Back to the heart", "Thinner walls, valves, low pressure"],
                ["Capillaries", "Link arteries to veins", "Walls one cell thick for exchange of materials"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which chamber has the thickest muscular wall?",
                  options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
                  answer: 3,
                  explain: "The left ventricle must pump blood all around the body.",
                },
              ],
            },
            { type: "heading", text: "What's in blood?" },
            {
              type: "table",
              headers: ["Component", "Job"],
              rows: [
                ["Plasma (about 55%)", "Yellowish liquid carrying nutrients, hormones, CO₂ and waste"],
                ["Red blood cells", "Carry oxygen using haemoglobin; no nucleus, so more room"],
                ["White blood cells", "Fight infection by engulfing germs or making antibodies"],
                ["Platelets", "Cell fragments that help blood clot"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "Exception alert",
              md: "The **pulmonary artery** carries deoxygenated blood (to the lungs) and the **pulmonary vein** carries oxygenated blood (back to the heart). Arteries and veins are defined by direction, not by oxygen.",
            },
            {
              type: "keypoints",
              items: [
                "The heart has 4 chambers and valves to keep blood flowing one way.",
                "Humans have a double circulation.",
                "Arteries carry blood away, veins return it, capillaries exchange materials.",
                "Blood = plasma + red cells + white cells + platelets.",
              ],
            },
          ],
          flashcards: [
            { front: "Atria", back: "The two upper chambers of the heart that receive blood." },
            { front: "Ventricles", back: "The two lower chambers that pump blood out of the heart." },
            { front: "Haemoglobin", back: "Iron-containing protein in red blood cells that carries oxygen." },
            { front: "Platelets", back: "Cell fragments that help blood clot." },
            { front: "Capillaries", back: "Tiny vessels, one cell thick, where substances are exchanged with tissues." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which vessels carry blood away from the heart?",
              options: ["Veins", "Arteries", "Capillaries", "Lymph vessels"],
              answer: 1,
              explain: "Arteries carry blood away from the heart under high pressure.",
            },
            {
              kind: "truefalse",
              q: "The pulmonary vein carries oxygen-rich blood.",
              answer: true,
              explain: "It brings freshly oxygenated blood from the lungs to the left atrium.",
            },
            {
              kind: "numeric",
              q: "How many chambers does the human heart have?",
              answer: 4,
              explain: "Two atria and two ventricles.",
            },
            {
              kind: "multi",
              q: "Which features help veins return blood to the heart?",
              options: ["Valves", "Thick elastic walls", "Squeezing by nearby muscles", "Walls one cell thick"],
              answers: [0, 2],
              explain: "Valves prevent backflow, and moving skeletal muscles squeeze veins. Thick walls belong to arteries; one-cell walls to capillaries.",
            },
            {
              kind: "fill",
              q: "Cells that fight infection are ___ blood cells.",
              answer: ["white"],
              explain: "White blood cells defend the body against germs.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "plants-and-photosynthesis",
      title: "Plants & Photosynthesis",
      icon: "🌱",
      description: "How plants make food from light, and how water and sugars travel through them.",
      lessons: [
        {
          slug: "photosynthesis",
          title: "Photosynthesis: Food from Light",
          summary: "The reaction that feeds almost every food chain and fills the air with oxygen.",
          minutes: 16,
          xp: 35,
          blocks: [
            { type: "illustration", emoji: "☀️🌿", caption: "Leaves are solar-powered sugar factories." },
            {
              type: "text",
              md: "A huge oak tree weighs many tonnes — yet the soil around it barely shrinks. In the 1600s Jan van Helmont puzzled over this. The answer surprised everyone: most of a plant's mass comes from **carbon dioxide in the air**, captured by **photosynthesis**.",
            },
            {
              type: "formula",
              tex: "6CO_2 + 6H_2O \\xrightarrow[\\text{chlorophyll}]{\\text{light}} C_6H_{12}O_6 + 6O_2",
              caption: "carbon dioxide + water → glucose + oxygen",
            },
            { type: "heading", text: "The ingredients" },
            {
              type: "list",
              items: [
                "**Carbon dioxide** enters through tiny pores called **stomata**, mostly on the underside of leaves.",
                "**Water** is absorbed by roots and carried up in xylem.",
                "**Light energy** is trapped by chlorophyll in chloroplasts.",
              ],
            },
            {
              type: "text",
              md: "The glucose made is used for respiration, turned into **starch** for storage, into **cellulose** for cell walls, or combined with minerals (like nitrates) to make proteins.",
            },
            { type: "heading", text: "Leaf design" },
            {
              type: "table",
              headers: ["Feature", "How it helps"],
              rows: [
                ["Broad, flat shape", "Large surface area to catch light"],
                ["Thin", "Short distance for gases to diffuse"],
                ["Palisade cells packed with chloroplasts", "Absorb lots of light near the top surface"],
                ["Stomata with guard cells", "Open and close to let CO₂ in and O₂ out"],
                ["Veins (xylem & phloem)", "Bring water in and carry sugars away"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Where in a leaf cell does photosynthesis take place?",
                  options: ["Nucleus", "Mitochondria", "Chloroplasts", "Vacuole"],
                  answer: 2,
                  explain: "Chloroplasts contain chlorophyll, which absorbs light energy.",
                },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "Classroom test for starch",
              md: "Boil a leaf to kill it, soak it in warm ethanol to remove chlorophyll, then add **iodine**. Parts that photosynthesised turn **blue-black**, showing starch.",
            },
            {
              type: "text",
              md: "**Limiting factors** — the rate of photosynthesis is held back by whichever is in shortest supply: light intensity, CO₂ concentration or temperature. That's why greenhouse growers add extra CO₂ and lamps.",
            },
            {
              type: "keypoints",
              items: [
                "Photosynthesis: CO₂ + water → glucose + oxygen, using light and chlorophyll.",
                "It happens in chloroplasts, mainly in palisade cells.",
                "Glucose can become starch, cellulose or protein.",
                "Light, CO₂ and temperature can limit the rate.",
              ],
            },
          ],
          flashcards: [
            { front: "Word equation for photosynthesis", back: "Carbon dioxide + water → glucose + oxygen (light, chlorophyll)." },
            { front: "Stomata", back: "Pores in the leaf surface that allow gas exchange; opened and closed by guard cells." },
            { front: "Iodine test", back: "Turns blue-black in the presence of starch." },
            { front: "Limiting factor", back: "The factor in shortest supply that restricts the rate of a process." },
          ],
          quiz: [
            {
              kind: "multi",
              q: "Which are raw materials for photosynthesis?",
              options: ["Carbon dioxide", "Oxygen", "Water", "Glucose"],
              answers: [0, 2],
              explain: "CO₂ and water are used; glucose and oxygen are produced.",
            },
            {
              kind: "fill",
              q: "Plants store excess glucose as ___.",
              answer: ["starch"],
              explain: "Starch is insoluble, so it is a compact way to store energy.",
            },
            {
              kind: "truefalse",
              q: "A variegated (green and white) leaf will only show starch in its green parts.",
              answer: true,
              explain: "White areas lack chlorophyll, so they cannot photosynthesise.",
            },
            {
              kind: "numeric",
              q: "In the balanced equation, how many molecules of oxygen are made per glucose molecule?",
              answer: 6,
              explain: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
            },
          ],
        },
        {
          slug: "plant-transport-and-respiration",
          title: "Transport & Respiration in Plants",
          summary: "Xylem, phloem, transpiration — and why plants respire day and night.",
          minutes: 14,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "A giant redwood can lift water more than 100 metres from its roots to its top leaves — with no heart and no pump. How? Through two clever plumbing systems and the pull of evaporation.",
            },
            {
              type: "table",
              headers: ["Tissue", "Carries", "Direction", "Notes"],
              rows: [
                ["Xylem", "Water and minerals", "Upward only (roots → leaves)", "Dead, hollow cells strengthened with lignin"],
                ["Phloem", "Sugars (sucrose) and amino acids", "Up and down", "Living cells; movement called **translocation**"],
              ],
            },
            { type: "heading", text: "Transpiration" },
            {
              type: "text",
              md: "**Transpiration** is the loss of water vapour from leaves, mostly through stomata. As water evaporates, it pulls a continuous column of water up the xylem — like sucking through a very long straw. This is called the **transpiration stream**.",
            },
            {
              type: "table",
              headers: ["Condition", "Effect on transpiration"],
              rows: [
                ["Higher temperature", "Faster"],
                ["Windy", "Faster (moist air blown away)"],
                ["Humid", "Slower"],
                ["Bright light", "Faster (stomata open wider)"],
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "On which day would washing on a line — and a plant — lose water fastest?",
                  options: ["Cold, still and humid", "Warm, windy and dry", "Cold and rainy", "Dark and humid"],
                  answer: 1,
                  explain: "Warmth, wind and dry air all speed up evaporation.",
                },
              ],
            },
            { type: "heading", text: "Plants respire too" },
            {
              type: "formula",
              tex: "C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy}",
              caption: "Aerobic respiration — happens in all living cells, all the time",
            },
            {
              type: "callout",
              tone: "note",
              title: "Day vs night",
              md: "In bright light, photosynthesis is faster than respiration, so plants take in CO₂ overall. At night there's no photosynthesis — plants only respire, so they give out CO₂.",
            },
            {
              type: "keypoints",
              items: [
                "Xylem carries water and minerals upward; phloem carries sugars both ways.",
                "Transpiration pulls water up the plant.",
                "Heat, wind, light and dry air increase transpiration.",
                "Plants respire continuously, day and night.",
              ],
            },
          ],
          flashcards: [
            { front: "Xylem", back: "Tissue carrying water and minerals up from the roots." },
            { front: "Phloem", back: "Tissue carrying dissolved sugars around the plant (translocation)." },
            { front: "Transpiration", back: "Evaporation of water from leaves, mainly through stomata." },
            { front: "Do plants respire at night?", back: "Yes — respiration happens all the time; only photosynthesis stops in darkness." },
          ],
          quiz: [
            {
              kind: "mcq",
              q: "Which tissue carries sugars from leaves to roots?",
              options: ["Xylem", "Phloem", "Epidermis", "Cuticle"],
              answer: 1,
              explain: "Phloem transports sugars by translocation.",
            },
            {
              kind: "truefalse",
              q: "Humid air speeds up transpiration.",
              answer: false,
              explain: "Humid air already holds lots of water vapour, so evaporation slows down.",
            },
            {
              kind: "fill",
              q: "The movement of sugars through phloem is called ___.",
              answer: ["translocation"],
              explain: "Translocation moves food to where it is needed or stored.",
            },
            {
              kind: "mcq",
              q: "Respiration and photosynthesis are…",
              options: ["The same process", "Roughly opposite processes", "Both only in animals", "Both only in daylight"],
              answer: 1,
              explain: "Photosynthesis makes glucose and O₂ from CO₂ and water; respiration does the reverse to release energy.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "heredity-and-genetics",
      title: "Heredity & Genetics",
      icon: "🧬",
      description: "DNA, genes and chromosomes — and how traits are passed from parents to children.",
      lessons: [
        {
          slug: "dna-genes-chromosomes",
          title: "DNA, Genes & Chromosomes",
          summary: "Unpack the instruction manual tucked inside nearly every one of your cells.",
          minutes: 15,
          xp: 30,
          blocks: [
            {
              type: "text",
              md: "If you uncoiled all the DNA in just one of your cells, it would stretch about **2 metres**. Somehow it folds into a nucleus far too small to see. And it holds the complete instructions to build you.",
            },
            {
              type: "table",
              headers: ["Term", "Meaning"],
              rows: [
                ["DNA", "A long molecule shaped like a twisted ladder (double helix) that stores genetic information"],
                ["Gene", "A section of DNA that codes for a particular protein, influencing a trait"],
                ["Chromosome", "A tightly coiled package of DNA and protein"],
                ["Allele", "A different version of the same gene (e.g. for brown or blue eyes)"],
                ["Genome", "All the genetic material of an organism"],
              ],
            },
            {
              type: "callout",
              tone: "fact",
              title: "The ladder's rungs",
              md: "DNA's rungs are pairs of bases: **A pairs with T**, and **C pairs with G**. The order of bases is the code. The double helix structure was described in 1953 by James Watson and Francis Crick, using X-ray images made by Rosalind Franklin.",
            },
            { type: "heading", text: "Human chromosomes" },
            {
              type: "text",
              md: "Human body cells have **46 chromosomes in 23 pairs** — one of each pair from each parent. Sex cells (sperm and egg) carry just **23**, so when they join at fertilisation the baby has 46 again.\n\nThe 23rd pair are the **sex chromosomes**: XX in females, XY in males. The egg always carries X; the sperm carries X or Y, so the sperm determines the baby's sex.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "fill",
                  q: "In DNA, the base C always pairs with ___.",
                  answer: ["g", "guanine"],
                  explain: "C (cytosine) pairs with G (guanine); A pairs with T.",
                },
              ],
            },
            { type: "heading", text: "Variation" },
            {
              type: "text",
              md: "Differences between individuals come from **genes** (eye colour, blood group), the **environment** (scars, language, a suntan), or **both** (height, weight — genes set a range, diet and health decide where you land).",
            },
            {
              type: "keypoints",
              items: [
                "DNA is a double helix; its base sequence is the genetic code.",
                "Genes are sections of DNA; alleles are versions of a gene.",
                "Humans have 23 pairs of chromosomes; gametes have 23 single chromosomes.",
                "Variation can be genetic, environmental, or both.",
              ],
            },
          ],
          flashcards: [
            { front: "Gene", back: "A section of DNA that codes for a protein." },
            { front: "Allele", back: "One of the different forms of a gene." },
            { front: "Number of chromosomes in a human body cell", back: "46 (23 pairs)." },
            { front: "Base pairing rules", back: "A–T and C–G." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "How many chromosomes are in a human egg cell?",
              answer: 23,
              explain: "Gametes have half the usual number so fertilisation restores 46.",
            },
            {
              kind: "mcq",
              q: "Which combination of sex chromosomes does a typical male have?",
              options: ["XX", "XY", "YY", "X only"],
              answer: 1,
              explain: "Males are XY; females are XX.",
            },
            {
              kind: "order",
              q: "Order from largest to smallest.",
              items: ["Chromosome", "Gene", "Base pair"],
              explain: "A chromosome contains many genes; each gene is a sequence of many base pairs.",
            },
            {
              kind: "mcq",
              q: "Which trait is mainly caused by the environment?",
              options: ["Blood group", "Natural eye colour", "A scar on your knee", "Natural hair colour"],
              answer: 2,
              explain: "Scars are acquired during life, not inherited.",
            },
          ],
        },
        {
          slug: "mendel-and-inheritance",
          title: "Mendel & Inheritance",
          summary: "Dominant and recessive alleles, Punnett squares and the famous 3:1 ratio.",
          minutes: 18,
          xp: 40,
          blocks: [
            { type: "illustration", emoji: "🫛", caption: "Gregor Mendel bred thousands of pea plants in a monastery garden." },
            {
              type: "text",
              md: "In the 1860s, a monk named **Gregor Mendel** crossed tall pea plants with short ones. All the offspring were tall! But when he crossed those offspring with each other, short plants reappeared — about 1 in every 4. He had discovered the basic rules of heredity.",
            },
            { type: "heading", text: "Key words" },
            {
              type: "list",
              items: [
                "**Dominant** allele — shows its effect even if only one copy is present (written with a capital letter, **T**).",
                "**Recessive** allele — only shows when two copies are present (lowercase, **t**).",
                "**Genotype** — the alleles an organism has (TT, Tt or tt).",
                "**Phenotype** — the trait you can observe (tall or short).",
                "**Homozygous** — two identical alleles (TT or tt). **Heterozygous** — two different alleles (Tt).",
              ],
            },
            { type: "heading", text: "Punnett square: Tt × Tt" },
            {
              type: "table",
              headers: ["", "T", "t"],
              rows: [
                ["**T**", "TT (tall)", "Tt (tall)"],
                ["**t**", "Tt (tall)", "tt (short)"],
              ],
            },
            {
              type: "text",
              md: "Result: 1 TT : 2 Tt : 1 tt. Since T is dominant, 3 of every 4 offspring are tall — the **3 : 1 phenotype ratio** Mendel observed. The probability of a short plant is $\\frac{1}{4}$ = 25%.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "A plant with genotype Tt is crossed with tt. What fraction of offspring will be short?",
                  options: ["0", "1/4", "1/2", "3/4"],
                  answer: 2,
                  explain: "Possible offspring: Tt, Tt, tt, tt — half are tt (short).",
                },
              ],
            },
            {
              type: "callout",
              tone: "exam",
              title: "Ratios are probabilities",
              md: "A 3 : 1 ratio does not guarantee that 4 children will include exactly 1 with the recessive trait. Each offspring is an independent chance, like a fresh coin toss.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Genetics in medicine",
              md: "Some conditions, like cystic fibrosis, are caused by recessive alleles. Two healthy carrier parents (Ff × Ff) have a 1 in 4 chance with each pregnancy of a child who has the condition.",
            },
            {
              type: "keypoints",
              items: [
                "Each parent passes on one allele for each gene.",
                "Dominant alleles mask recessive ones.",
                "Genotype = alleles; phenotype = visible trait.",
                "Tt × Tt gives a 3 : 1 ratio of dominant to recessive phenotype.",
              ],
            },
          ],
          flashcards: [
            { front: "Dominant allele", back: "Expressed even if only one copy is present." },
            { front: "Recessive allele", back: "Expressed only when two copies are present." },
            { front: "Genotype vs phenotype", back: "Genotype = the alleles (e.g. Tt); phenotype = the observable trait (e.g. tall)." },
            { front: "Heterozygous", back: "Having two different alleles for a gene (e.g. Tt)." },
            { front: "Phenotype ratio of Tt × Tt", back: "3 dominant : 1 recessive." },
          ],
          quiz: [
            {
              kind: "numeric",
              q: "Two heterozygous tall plants (Tt × Tt) produce 400 seeds. About how many will grow into short plants?",
              answer: 100,
              tolerance: 0,
              explain: "1/4 of offspring are tt: 400 ÷ 4 = 100.",
            },
            {
              kind: "truefalse",
              q: "An organism with genotype TT is heterozygous.",
              answer: false,
              explain: "TT has two identical alleles, so it is homozygous.",
            },
            {
              kind: "mcq",
              q: "Brown eyes (B) are dominant over blue (b). Which genotype gives blue eyes?",
              options: ["BB", "Bb", "bb", "bB"],
              answer: 2,
              explain: "A recessive trait appears only with two recessive alleles.",
            },
            {
              kind: "fill",
              q: "The observable characteristics of an organism are called its ___.",
              answer: ["phenotype"],
              explain: "Phenotype is what you can see or measure.",
            },
          ],
        },
      ],
    },
    /* ------------------------------------------------------------ */
    {
      slug: "ecosystems-and-environment",
      title: "Ecosystems & Environment",
      icon: "🌍",
      description: "Food webs, energy flow, nutrient cycles and how humans affect the living world.",
      lessons: [
        {
          slug: "food-chains-and-energy",
          title: "Food Chains, Webs & Energy Flow",
          summary: "Who eats whom, and why there are far fewer lions than gazelles.",
          minutes: 15,
          xp: 30,
          blocks: [
            { type: "illustration", emoji: "🌾➡️🐛➡️🐦➡️🦅", caption: "Energy passes along a food chain." },
            {
              type: "text",
              md: "An **ecosystem** is a community of living things interacting with each other and their non-living surroundings — a pond, a forest, even a rotting log. Every ecosystem runs on energy that starts with the Sun.",
            },
            {
              type: "table",
              headers: ["Role", "What it does", "Example"],
              rows: [
                ["Producer", "Makes its own food by photosynthesis", "Grass, algae, trees"],
                ["Primary consumer", "Eats producers (herbivore)", "Rabbit, caterpillar"],
                ["Secondary consumer", "Eats primary consumers", "Frog, small bird"],
                ["Tertiary consumer", "Eats secondary consumers", "Hawk, snake"],
                ["Decomposer", "Breaks down dead matter, recycling nutrients", "Fungi, bacteria"],
              ],
            },
            {
              type: "text",
              md: "Real ecosystems are tangled **food webs** — many interlinked food chains. If one species disappears, the effect ripples through the web.",
            },
            { type: "heading", text: "The 10% rule" },
            {
              type: "text",
              md: "Only about **10%** of the energy at one level passes to the next. The rest is used for movement, lost as heat in respiration, or never eaten (bones, roots, faeces). So if grass captures 10,000 kJ, rabbits get about 1,000 kJ, foxes about 100 kJ.",
            },
            {
              type: "callout",
              tone: "note",
              title: "Why food chains are short",
              md: "With 90% lost at each step, after 4–5 levels there isn't enough energy left to support another population of predators.",
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "numeric",
                  q: "Producers capture 20,000 kJ. Using the 10% rule, how much energy reaches secondary consumers?",
                  answer: 200,
                  unit: "kJ",
                  explain: "20,000 → 2,000 (primary) → 200 (secondary).",
                },
              ],
            },
            {
              type: "callout",
              tone: "warning",
              title: "Biomagnification",
              md: "Some pesticides (like DDT) are not broken down. They build up in fat and become more concentrated at each level, harming top predators such as eagles.",
            },
            {
              type: "keypoints",
              items: [
                "Ecosystems include living (biotic) and non-living (abiotic) parts.",
                "Energy flows from producers to consumers; decomposers recycle nutrients.",
                "Only about 10% of energy passes to the next trophic level.",
                "Food webs show interconnected food chains.",
              ],
            },
          ],
          flashcards: [
            { front: "Producer", back: "An organism that makes its own food, usually by photosynthesis." },
            { front: "Decomposer", back: "An organism (fungus or bacterium) that breaks down dead material." },
            { front: "10% rule", back: "About 10% of energy passes from one trophic level to the next." },
            { front: "Biomagnification", back: "Increasing concentration of a toxic substance at higher trophic levels." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Arrange this food chain correctly.",
              items: ["Algae", "Water flea", "Small fish", "Heron"],
              explain: "Algae (producer) → water flea → small fish → heron.",
            },
            {
              kind: "mcq",
              q: "Where does most energy 'lost' between trophic levels go?",
              options: ["Stored in the soil", "Released as heat through respiration", "Turned into sunlight", "Passed to producers"],
              answer: 1,
              explain: "Organisms use energy to live, and much of it ends up as heat.",
            },
            {
              kind: "truefalse",
              q: "Without decomposers, nutrients would stay locked in dead organisms.",
              answer: true,
              explain: "Decomposers return minerals to the soil for producers to reuse.",
            },
            {
              kind: "multi",
              q: "Which are abiotic (non-living) factors?",
              options: ["Temperature", "Rainfall", "Predators", "Soil pH", "Disease"],
              answers: [0, 1, 3],
              explain: "Predators and disease are biotic — they involve living things.",
            },
          ],
        },
        {
          slug: "cycles-and-human-impact",
          title: "Nature's Cycles & Human Impact",
          summary: "The carbon and water cycles, and how our choices affect biodiversity and climate.",
          minutes: 16,
          xp: 35,
          blocks: [
            {
              type: "text",
              md: "The carbon atoms in your body may once have been part of a dinosaur, a volcano's gas, or an ancient fern. Matter on Earth is constantly **recycled**. Energy flows through, but atoms go round and round.",
            },
            { type: "heading", text: "The carbon cycle" },
            {
              type: "list",
              items: [
                "**Photosynthesis** removes CO₂ from the air.",
                "**Respiration** by plants, animals and decomposers returns CO₂.",
                "**Feeding** passes carbon along food chains.",
                "**Decomposition** releases carbon from dead matter.",
                "**Combustion** of fossil fuels and wood releases stored carbon as CO₂.",
              ],
            },
            { type: "heading", text: "The water cycle" },
            {
              type: "list",
              ordered: true,
              items: [
                "**Evaporation** from oceans and lakes, plus **transpiration** from plants.",
                "**Condensation** of water vapour into clouds.",
                "**Precipitation** as rain, snow or hail.",
                "**Collection** in rivers, lakes, oceans and groundwater.",
              ],
            },
            {
              type: "checkpoint",
              questions: [
                {
                  kind: "mcq",
                  q: "Which process removes carbon dioxide from the atmosphere?",
                  options: ["Respiration", "Combustion", "Photosynthesis", "Decomposition"],
                  answer: 2,
                  explain: "Plants and algae absorb CO₂ to make glucose.",
                },
              ],
            },
            { type: "heading", text: "Human impact" },
            {
              type: "table",
              headers: ["Issue", "Cause", "Effect"],
              rows: [
                ["Climate change", "Burning fossil fuels, deforestation increase greenhouse gases", "Rising temperatures, melting ice, extreme weather"],
                ["Habitat loss", "Farming, cities, logging", "Loss of species and biodiversity"],
                ["Pollution", "Plastics, sewage, fertiliser run-off", "Harm to wildlife; algal blooms in water"],
                ["Overfishing", "Catching fish faster than they reproduce", "Collapse of fish populations"],
              ],
            },
            {
              type: "callout",
              tone: "tip",
              title: "What helps",
              md: "Protected areas, replanting forests, renewable energy, sustainable fishing quotas and reducing waste all help ecosystems recover. Small habits — saving energy, choosing reusable bottles — add up across billions of people.",
            },
            {
              type: "callout",
              tone: "fact",
              title: "Biodiversity matters",
              md: "Biodiversity is the variety of life in an area. Diverse ecosystems are more stable, and nature provides services like pollination, clean water and medicines (aspirin's ancestor came from willow bark).",
            },
            {
              type: "keypoints",
              items: [
                "Carbon is recycled by photosynthesis, respiration, decomposition and combustion.",
                "The water cycle: evaporation, condensation, precipitation, collection.",
                "Burning fossil fuels and deforestation raise CO₂ levels, driving climate change.",
                "Conservation and sustainable choices protect biodiversity.",
              ],
            },
          ],
          flashcards: [
            { front: "Biodiversity", back: "The variety of living species in an area." },
            { front: "Greenhouse gases", back: "Gases such as CO₂ and methane that trap heat in the atmosphere." },
            { front: "Transpiration's role in the water cycle", back: "Plants release water vapour into the air from their leaves." },
            { front: "Combustion in the carbon cycle", back: "Burning fuels releases stored carbon as CO₂." },
          ],
          quiz: [
            {
              kind: "order",
              q: "Order the stages of the water cycle starting from the ocean.",
              items: ["Evaporation", "Condensation", "Precipitation", "Collection"],
              explain: "Water evaporates, condenses into clouds, falls as precipitation and collects again.",
            },
            {
              kind: "multi",
              q: "Which processes release CO₂ into the air?",
              options: ["Respiration", "Photosynthesis", "Burning coal", "Decomposition"],
              answers: [0, 2, 3],
              explain: "Photosynthesis absorbs CO₂; the others release it.",
            },
            {
              kind: "truefalse",
              q: "Cutting down forests can increase atmospheric CO₂.",
              answer: true,
              explain: "Fewer trees absorb less CO₂, and burning or decaying wood releases it.",
            },
            {
              kind: "fill",
              q: "The variety of living things in an area is called ___.",
              answer: ["biodiversity"],
              explain: "Biodiversity includes the number of species and the genetic variety within them.",
            },
          ],
        },
      ],
    },
  ],
};
