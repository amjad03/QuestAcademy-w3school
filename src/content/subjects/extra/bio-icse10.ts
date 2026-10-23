import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "biology-school";

export const topics: Topic[] = [
  /* ------------------------------------------------------------ */
  /* Cell Cycle and Cell Division                                  */
  /* ------------------------------------------------------------ */
  {
    slug: "icse-cell-cycle-and-cell-division",
    title: "Cell Cycle and Cell Division",
    icon: "🔀",
    description: "Chromosome structure, the phases of the cell cycle, the stages of mitosis and meiosis, and how the two divisions differ.",
    lessons: [
      {
        slug: "cell-cycle-and-mitosis",
        title: "The Cell Cycle & Mitosis",
        summary: "Interphase, the four stages of mitosis and how plant and animal cells split their cytoplasm.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🧅", caption: "Onion root tips are the classic place to watch mitosis under a microscope." },
          {
            type: "text",
            md: "You grew from a single cell — the zygote — into trillions of cells. A cut on your finger heals in a few days. Both depend on **cell division**. The sequence of events from one division to the next is the **cell cycle**.",
          },
          { type: "heading", text: "Chromosomes: the packages of DNA" },
          {
            type: "text",
            md: "In a non-dividing nucleus, DNA is spread out as fine threads called **chromatin**. Before division it coils and condenses into **chromosomes**. After DNA is copied, each chromosome has two identical **sister chromatids** joined at the **centromere**. Segments of DNA on chromosomes that code for traits are **genes**. Human body cells have **46 chromosomes (23 pairs)**; onion (*Allium cepa*) cells have **16**.",
          },
          { type: "heading", text: "Phases of the cell cycle" },
          {
            type: "table",
            headers: ["Phase", "What happens"],
            rows: [
              ["**G₁ (Gap 1)**", "Cell grows; makes proteins and organelles"],
              ["**S (Synthesis)**", "DNA replicates — each chromosome now has two chromatids"],
              ["**G₂ (Gap 2)**", "Cell prepares for division; makes proteins for spindle"],
              ["**M phase**", "Mitosis (nuclear division, karyokinesis) + cytokinesis (division of cytoplasm)"],
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Interphase is not a 'resting' phase",
            md: "G₁, S and G₂ together form **interphase**, which takes up most of the cell cycle. The cell is very active — it is growing and copying its DNA — even though no division is visible.",
          },
          { type: "heading", text: "The four stages of mitosis" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Prophase** — chromatin condenses into visible chromosomes, each with two chromatids; nuclear membrane and nucleolus start to disappear; spindle fibres begin to form (from centrioles in animal cells).",
              "**Metaphase** — chromosomes line up at the **equator** (metaphase plate); spindle fibres attach to centromeres. Chromosomes are clearest and easiest to count now.",
              "**Anaphase** — centromeres split; sister chromatids are pulled to **opposite poles**.",
              "**Telophase** — chromosomes reach the poles and uncoil; nuclear membrane and nucleolus reappear; two nuclei form.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In which stage of mitosis do chromosomes line up at the equator of the cell?",
                options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
                answer: 1,
                explain: "Metaphase — the chromosomes form the metaphase plate.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Cytokinesis", "Animal cell", "Plant cell"],
            rows: [
              ["Method", "**Cleavage furrow** — membrane pinches in from outside", "**Cell plate** forms from the centre outward"],
              ["Spindle origin", "Centrioles present", "No centrioles (spindle still forms)"],
            ],
          },
          {
            type: "text",
            md: "**Worked example — counting chromosomes in a human cell.**\n\n| Stage | Chromosomes | Chromatids |\n|---|---|---|\n| G₁ | 46 | 46 |\n| After S / G₂ | 46 | 92 |\n| Metaphase | 46 | 92 |\n| Anaphase (whole cell) | 92 | 92 |\n| Each daughter cell | 46 | 46 |\n\nAt anaphase each separated chromatid counts as an independent chromosome, so the cell briefly holds 92.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Mitosis produces **two daughter cells identical** to the parent, each with the **same number of chromosomes** (2n → 2n). It occurs in **somatic (body) cells** — growth, repair and asexual reproduction. Do not say it makes gametes.",
          },
          {
            type: "keypoints",
            items: [
              "Cell cycle = interphase (G₁, S, G₂) + M phase.",
              "DNA replicates in the S phase.",
              "Mitosis: prophase → metaphase → anaphase → telophase.",
              "Animal cells divide by furrowing; plant cells by a cell plate.",
              "Mitosis keeps the chromosome number constant (2n → 2n).",
            ],
          },
        ],
        flashcards: [
          { front: "Centromere", back: "Point where two sister chromatids are joined; spindle fibres attach here." },
          { front: "S phase", back: "Phase of interphase in which DNA replicates." },
          { front: "Metaphase", back: "Chromosomes line up at the equator; best stage to count them." },
          { front: "Cell plate", back: "Structure that divides the cytoplasm in plant cells during cytokinesis." },
          { front: "Chromosome number in onion", back: "16 (2n)." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the stages of mitosis in the correct order.",
            items: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            explain: "PMAT: prophase, metaphase, anaphase, telophase.",
          },
          {
            kind: "mcq",
            q: "Sister chromatids separate and move to opposite poles during:",
            options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            answer: 2,
            explain: "Centromeres split in anaphase.",
          },
          {
            kind: "numeric",
            q: "A human cell in G₂ phase has 46 chromosomes. How many chromatids does it contain?",
            answer: 92,
            tolerance: 0,
            unit: "chromatids",
            explain: "After S phase each chromosome has two chromatids: 46 × 2 = 92.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Plant cells divide their cytoplasm by forming a cleavage furrow.",
            answer: false,
            explain: "Plant cells form a cell plate; animal cells form a furrow.",
          },
          {
            kind: "fill",
            q: "The nuclear membrane and nucleolus reappear during ___.",
            answer: ["telophase"],
            explain: "Telophase reverses the events of prophase.",
          },
        ],
      },
      {
        slug: "meiosis-and-comparison",
        title: "Meiosis & Mitosis vs Meiosis",
        summary: "How meiosis halves the chromosome number, why crossing over creates variation, and a point-by-point comparison with mitosis.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🎲", caption: "Meiosis shuffles chromosomes — that's why siblings look different." },
          {
            type: "text",
            md: "If a human egg (46 chromosomes) fused with a human sperm (46), the baby would have 92 — and double again every generation! Nature avoids this with **meiosis**, a **reduction division** that halves the chromosome number when gametes are made.",
          },
          { type: "heading", text: "Meiosis in two rounds" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Meiosis I (reduction division):** homologous chromosomes pair up (**synapsis**) in prophase I and exchange segments (**crossing over**). In anaphase I the **homologous chromosomes** separate (chromatids stay together). Result: two cells, each with **n** chromosomes.",
              "**Meiosis II (like mitosis):** sister chromatids separate in each of the two cells.",
              "Final result: **four haploid (n) cells**, all genetically different.",
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Where does meiosis happen?",
            md: "In **reproductive cells**: in the testes and ovaries of animals, and in the anthers and ovules of flowering plants. It produces **gametes** (or spores in plants).",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A cell with 2n = 16 chromosomes undergoes meiosis. How many chromosomes are present in each resulting cell?",
                answer: 8,
                tolerance: 0,
                unit: "chromosomes",
                explain: "Meiosis halves the number: 16 ÷ 2 = 8 (n).",
              },
            ],
          },
          { type: "heading", text: "Mitosis vs meiosis" },
          {
            type: "table",
            headers: ["Feature", "Mitosis", "Meiosis"],
            rows: [
              ["Where", "Somatic (body) cells", "Reproductive (germ) cells"],
              ["Number of divisions", "One", "Two (meiosis I and II)"],
              ["Daughter cells", "Two", "Four"],
              ["Chromosome number", "Same as parent (2n → 2n)", "Halved (2n → n)"],
              ["Pairing & crossing over", "Absent", "Present in prophase I"],
              ["Genetic make-up", "Identical to parent", "Different from parent and each other"],
              ["Purpose", "Growth, repair, asexual reproduction", "Gamete formation; variation"],
            ],
          },
          {
            type: "text",
            md: "**Worked example — tracking one cell.** A human germ cell in the testis (46 chromosomes) undergoes meiosis:\n\n1. After meiosis I → **2 cells × 23 chromosomes** (each chromosome still has 2 chromatids).\n2. After meiosis II → **4 cells × 23 chromosomes** (single chromatids).\n3. Each becomes a sperm. When one sperm (23) fertilises an egg (23), the zygote has **46** — the number is restored.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "The **reduction** in chromosome number happens in **meiosis I**, not meiosis II. Meiosis II only separates sister chromatids, just like mitosis. Also remember: **crossing over** occurs between **non-sister chromatids of homologous chromosomes** in prophase I.",
          },
          { type: "heading", text: "Why meiosis matters" },
          {
            type: "list",
            items: [
              "Keeps the chromosome number **constant across generations**.",
              "Creates **variation** through crossing over and random assortment — the raw material for evolution.",
              "Variation helps populations survive changing environments.",
            ],
          },
          {
            type: "keypoints",
            items: [
              "Meiosis = two divisions → four haploid cells.",
              "Homologous chromosomes pair and cross over in prophase I.",
              "Reduction happens in meiosis I.",
              "Mitosis keeps cells identical; meiosis creates variation.",
            ],
          },
        ],
        flashcards: [
          { front: "Meiosis", back: "Reduction division producing four haploid cells; forms gametes." },
          { front: "Synapsis", back: "Pairing of homologous chromosomes during prophase I." },
          { front: "Crossing over", back: "Exchange of segments between non-sister chromatids of homologous chromosomes; creates variation." },
          { front: "Haploid (n)", back: "Having one set of chromosomes, e.g. human gametes with 23." },
          { front: "Where meiosis occurs in flowering plants", back: "Anthers and ovules." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "How many daughter cells are formed at the end of meiosis?",
            options: ["One", "Two", "Four", "Eight"],
            answer: 2,
            explain: "Two divisions give four cells.",
          },
          {
            kind: "truefalse",
            q: "Crossing over takes place during mitosis.",
            answer: false,
            explain: "Crossing over occurs in prophase I of meiosis.",
          },
          {
            kind: "mcq",
            q: "In which division does the chromosome number get halved?",
            options: ["Mitosis", "Meiosis I", "Meiosis II", "Cytokinesis"],
            answer: 1,
            explain: "Homologous chromosomes separate in meiosis I.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "A human sperm contains ___ chromosomes.",
            answer: ["23", "twenty three", "twenty-three"],
            explain: "Gametes are haploid: 46 ÷ 2 = 23.",
          },
          {
            kind: "numeric",
            q: "A dog's body cell has 78 chromosomes. How many chromosomes are present in its egg cell?",
            answer: 39,
            tolerance: 0,
            unit: "chromosomes",
            explain: "Gametes are haploid: 78 ÷ 2 = 39.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Absorption by Roots                                           */
  /* ------------------------------------------------------------ */
  {
    slug: "icse-absorption-by-roots",
    title: "Absorption by Roots",
    icon: "🌱",
    description: "Root hairs, imbibition, diffusion and osmosis, turgor and plasmolysis, active transport, and how water climbs from root to leaf.",
    lessons: [
      {
        slug: "root-hairs-and-osmosis",
        title: "Root Hairs, Imbibition & Osmosis",
        summary: "How root hairs are built for absorption, and the physical processes — imbibition, diffusion, osmosis — that move water.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🪴", caption: "A single rye plant can have billions of root hairs — a huge absorbing surface." },
          {
            type: "text",
            md: "Plants take in water and minerals through their roots, mainly through tiny outgrowths called **root hairs** in the zone just behind the root tip. Each root hair is an extension of a single **epidermal cell**.",
          },
          { type: "heading", text: "Root hairs: built for absorption" },
          {
            type: "list",
            items: [
              "Very **large number** → huge surface area.",
              "**Thin cell wall**, freely permeable to water and minerals.",
              "**Cell membrane** is selectively (semi-) permeable.",
              "A large **vacuole** with cell sap more concentrated than soil water → water enters by osmosis.",
              "Long and slender, they grow between soil particles and stick to them.",
            ],
          },
          { type: "heading", text: "Imbibition" },
          {
            type: "text",
            md: "**Imbibition** is the absorption of water by solid particles of a substance (hydrophilic colloids) **without forming a solution**. It is why dry seeds swell when soaked, and why **wooden doors and windows swell and jam in the monsoon**. Root hair cell walls first imbibe water.",
          },
          { type: "heading", text: "Diffusion and osmosis" },
          {
            type: "table",
            headers: ["", "Diffusion", "Osmosis"],
            rows: [
              ["What moves", "Any substance (solid, liquid or gas particles)", "Only water (solvent)"],
              ["Membrane needed?", "No", "Yes — semi-permeable"],
              ["Direction", "Higher to lower concentration of the substance", "From dilute solution (more water) to concentrated solution (less water)"],
              ["Example", "Smell of agarbatti spreading in a room", "Water entering root hair from soil"],
            ],
          },
          {
            type: "text",
            md: "**Endosmosis** = water entering a cell (cell placed in a dilute / hypotonic solution). **Exosmosis** = water leaving a cell (cell placed in a concentrated / hypertonic solution). The pressure that would be needed to prevent water entering a solution across a semi-permeable membrane is its **osmotic pressure**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Dry raisins placed in water swell up. This is mainly due to:",
                options: ["Exosmosis", "Endosmosis", "Transpiration", "Active transport"],
                answer: 1,
                explain: "Raisin cells have concentrated sap, so water enters them — endosmosis.",
              },
            ],
          },
          { type: "heading", text: "Turgor and plasmolysis" },
          {
            type: "text",
            md: "When water enters, the vacuole swells and the cytoplasm presses against the wall — **turgor pressure**; the wall presses back with equal **wall pressure**. A cell in this state is **turgid**, which keeps leaves and young stems firm.\n\nIf a cell loses water, the protoplasm shrinks away from the cell wall — **plasmolysis**. If the plasmolysed cell is put back in water and recovers, it is **deplasmolysis**. Wilting of plants on a hot May afternoon in Delhi is due to loss of turgor.",
          },
          {
            type: "text",
            md: "**Worked example — the potato osmoscope.**\n\n1. Peel a large potato, cut a flat base and scoop out a cavity.\n2. Fill the cavity halfway with **concentrated sugar solution**; mark the level with a pin.\n3. Stand the potato in a dish of **pure water**.\n4. After a few hours the level in the cavity **rises**.\n5. Reason: potato cells act as a semi-permeable membrane; water moves by **endosmosis** from the dish (dilute) into the sugar solution (concentrated).\n\n*Control:* a boiled potato shows no rise — boiling kills cells, so membranes are no longer semi-permeable.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Over-fertilising a field or watering plants with salty water makes the soil solution **hypertonic**; water leaves root hairs by **exosmosis** and the plants wilt. Students often write 'endosmosis' here. Also remember: the **cell wall** is fully permeable; it is the **cell membrane** that is semi-permeable.",
          },
          {
            type: "keypoints",
            items: [
              "Root hairs are single-celled outgrowths of epidermal cells.",
              "Imbibition: absorption of water by solids without forming a solution.",
              "Osmosis: movement of water across a semi-permeable membrane from dilute to concentrated solution.",
              "Turgid cells keep plants firm; plasmolysis is shrinkage of protoplasm from the wall.",
            ],
          },
        ],
        flashcards: [
          { front: "Imbibition", back: "Absorption of water by solid hydrophilic particles without forming a solution (e.g. swelling of seeds, wood)." },
          { front: "Osmosis", back: "Movement of water across a semi-permeable membrane from a dilute to a concentrated solution." },
          { front: "Plasmolysis", back: "Shrinkage of protoplasm away from the cell wall due to exosmosis." },
          { front: "Turgor pressure", back: "Pressure of cell contents on the cell wall when a cell is full of water." },
          { front: "Deplasmolysis", back: "Recovery of a plasmolysed cell when placed back in water." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which part of a root hair cell is semi-permeable?",
            options: ["Cell wall", "Cell membrane", "Vacuole", "Nucleus"],
            answer: 1,
            explain: "The cell wall is freely permeable; the plasma membrane is selectively permeable.",
          },
          {
            kind: "truefalse",
            q: "Swelling of wooden doors in the rainy season is an example of imbibition.",
            answer: true,
            explain: "Wood absorbs water without forming a solution.",
          },
          {
            kind: "fill",
            q: "Shrinkage of the protoplasm away from the cell wall due to loss of water is called ___.",
            answer: ["plasmolysis"],
            explain: "Plasmolysis follows exosmosis in a hypertonic solution.",
          },
          {
            kind: "mcq",
            q: "In the potato osmoscope experiment, why does a boiled potato show no rise in level?",
            options: ["Boiling removes the sugar", "Boiled cells are dead and their membranes are not semi-permeable", "Boiled potato absorbs all the water", "Boiling increases osmotic pressure"],
            answer: 1,
            explain: "Osmosis needs a living semi-permeable membrane.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Plants wilt when excess chemical fertiliser is added to the soil because:",
            options: ["Endosmosis occurs in root hairs", "Exosmosis occurs from root hairs", "Roots stop respiring", "Transpiration stops"],
            answer: 1,
            explain: "The soil solution becomes hypertonic, so water leaves root cells.",
          },
        ],
      },
      {
        slug: "water-pathway-and-ascent-of-sap",
        title: "Pathway of Water & Ascent of Sap",
        summary: "Follow water from soil to xylem, see how minerals enter by active transport, and understand root pressure and transpiration pull.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "A coconut palm in Kerala may be 25 m tall, yet water reaches its topmost leaves every day — without any pump. Let's trace the journey.",
          },
          { type: "heading", text: "From soil to xylem" },
          {
            type: "list",
            ordered: true,
            items: [
              "Soil water enters the **root hair** by osmosis (cell sap is more concentrated).",
              "The root hair's sap becomes more dilute than the next **cortex** cell, so water moves on, cell to cell.",
              "Water crosses the **endodermis** and **pericycle**.",
              "It enters the **xylem** vessels of the root.",
              "Xylem carries water up the stem to the leaves.",
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Concentration gradient",
            md: "Water always moves **towards the more concentrated sap**. The sap gets progressively more concentrated from the root hair → cortex → xylem, keeping water moving inward.",
          },
          { type: "heading", text: "Minerals: active transport" },
          {
            type: "text",
            md: "Minerals are absorbed as **ions** (e.g. NO₃⁻, K⁺, PO₄³⁻). Often the ion concentration inside root cells is already **higher** than in the soil, so ions must be moved **against the concentration gradient** using **energy (ATP) from respiration** — this is **active transport**. That is why waterlogged soil (low oxygen → less respiration) reduces mineral uptake.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Mineral ions are often absorbed by root cells against a concentration gradient. This process is:",
                options: ["Osmosis", "Diffusion", "Active transport", "Imbibition"],
                answer: 2,
                explain: "Moving substances against a gradient needs energy — active transport.",
              },
            ],
          },
          { type: "heading", text: "Ascent of sap" },
          {
            type: "table",
            headers: ["Force", "How it works", "Importance"],
            rows: [
              ["**Root pressure**", "Water accumulates in root xylem, building pressure that pushes it upward", "Small; can lift water only a few metres; seen as **bleeding** from cut stems"],
              ["**Transpiration pull**", "Evaporation from leaves pulls a continuous water column up the xylem", "Main force in tall trees"],
              ["**Cohesion & adhesion**", "Water molecules stick to each other (cohesion) and to xylem walls (adhesion)", "Keep the column unbroken"],
              ["**Capillarity**", "Rise of water in narrow tubes", "Minor role"],
            ],
          },
          {
            type: "text",
            md: "**Worked example — demonstrating root pressure.**\n\n1. Cut the stem of a well-watered potted plant (e.g. balsam) a few cm above the soil.\n2. Fix a glass tube to the stump with rubber tubing and add a little water; mark the level.\n3. After a few hours, the water level in the tube **rises**.\n4. Conclusion: the root pushes water up — **root pressure**. The oozing of sap from a cut stem is called **bleeding**.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Root pressure alone **cannot** explain water reaching the top of tall trees; the main force is **transpiration pull** with cohesion of water molecules. Also, water travels up in **xylem**, not phloem — phloem carries food.",
          },
          {
            type: "illustration",
            emoji: "🌴",
            caption: "Soil → root hair → cortex → endodermis → pericycle → xylem → stem → leaf → air.",
          },
          {
            type: "keypoints",
            items: [
              "Water moves root hair → cortex → endodermis → pericycle → xylem.",
              "Minerals enter as ions, often by active transport using ATP.",
              "Root pressure pushes; transpiration pull pulls (the main force).",
              "Cohesion and adhesion keep the xylem water column continuous.",
            ],
          },
        ],
        flashcards: [
          { front: "Active transport", back: "Movement of ions against the concentration gradient using energy from respiration." },
          { front: "Root pressure", back: "Pressure built up in root xylem that pushes water upward; seen as bleeding." },
          { front: "Transpiration pull", back: "Suction created by evaporation from leaves that pulls water up the xylem." },
          { front: "Ascent of sap", back: "Upward movement of water and minerals through the xylem." },
          { front: "Cohesion", back: "Attraction between water molecules that keeps the water column unbroken." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the path of water from soil to root xylem.",
            items: ["Root hair", "Cortex", "Endodermis", "Pericycle", "Xylem"],
            explain: "Water passes inward through these layers to reach xylem.",
          },
          {
            kind: "mcq",
            q: "The main force responsible for ascent of sap in tall trees is:",
            options: ["Root pressure", "Capillarity", "Transpiration pull", "Imbibition"],
            answer: 2,
            explain: "Transpiration pull with cohesion lifts water to great heights.",
          },
          {
            kind: "truefalse",
            q: "Waterlogged soil reduces mineral absorption because roots get less oxygen for respiration.",
            answer: true,
            explain: "Active transport needs ATP from aerobic respiration.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The oozing of sap from the cut end of a stem due to root pressure is called ___.",
            answer: ["bleeding"],
            explain: "Bleeding demonstrates root pressure.",
          },
          {
            kind: "mcq",
            q: "Water and minerals travel upward in the plant through:",
            options: ["Phloem", "Xylem", "Cortex", "Pith"],
            answer: 1,
            explain: "Xylem conducts water and minerals; phloem conducts food.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Transpiration                                                 */
  /* ------------------------------------------------------------ */
  {
    slug: "icse-transpiration",
    title: "Transpiration",
    icon: "💧",
    description: "Types of transpiration, how stomata open and close, factors affecting the rate, classic experiments, significance, and guttation.",
    lessons: [
      {
        slug: "transpiration-types-and-stomata",
        title: "Types of Transpiration & Stomata",
        summary: "Stomatal, cuticular and lenticular transpiration, the mechanism of stomatal opening, and the factors that change the rate.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🍃", caption: "A large mango tree can lose hundreds of litres of water to the air on a hot summer day." },
          {
            type: "text",
            md: "Of all the water a plant absorbs, only about **1–2%** is used in photosynthesis and other processes. Most of the rest is lost as **water vapour** from the aerial parts — **transpiration**.",
          },
          {
            type: "table",
            headers: ["Type", "Through", "Share of water loss"],
            rows: [
              ["**Stomatal**", "Stomata, mostly on leaves", "About 80–90% (the major route)"],
              ["**Cuticular**", "Cuticle (waxy layer) of leaves and stems", "Small; more in plants with thin cuticle"],
              ["**Lenticular**", "Lenticels — small openings in the bark of woody stems", "Very small"],
            ],
          },
          { type: "heading", text: "Structure of a stoma" },
          {
            type: "text",
            md: "Each **stoma** is a tiny pore bounded by two **kidney-shaped guard cells** (dumb-bell shaped in grasses). Guard cells have **chloroplasts** and their **inner walls (facing the pore) are thicker** and less elastic than the outer walls. In dicot leaves, stomata are usually more numerous on the **lower surface**.",
          },
          { type: "heading", text: "How stomata open and close" },
          {
            type: "list",
            ordered: true,
            items: [
              "In **light**, guard cells actively take up **potassium ions (K⁺)** from neighbouring cells.",
              "Their sap becomes more concentrated, so water enters them by **endosmosis**.",
              "Guard cells become **turgid**; the thin outer walls stretch more than the thick inner walls, so the cells bow outward.",
              "The **pore opens**.",
              "In darkness or water shortage, K⁺ leaves, water follows by exosmosis, guard cells become **flaccid** and the pore **closes**.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Stomata open when guard cells:",
                options: ["Lose water and become flaccid", "Gain water and become turgid", "Lose potassium ions", "Lose chloroplasts"],
                answer: 1,
                explain: "Turgid guard cells bow outward, opening the pore.",
              },
            ],
          },
          { type: "heading", text: "Factors affecting the rate of transpiration" },
          {
            type: "table",
            headers: ["Factor", "Effect on rate", "Reason"],
            rows: [
              ["Light ↑", "Increases", "Stomata open; leaf warms"],
              ["Temperature ↑", "Increases", "Faster evaporation; air holds more vapour"],
              ["Humidity ↑", "**Decreases**", "Smaller vapour gradient between leaf and air"],
              ["Wind ↑", "Increases", "Removes humid air near the leaf"],
              ["Soil water ↓", "Decreases", "Stomata close; less water available"],
              ["Atmospheric pressure ↓ (hills)", "Increases", "Faster evaporation"],
            ],
          },
          {
            type: "text",
            md: "**Worked comparison.** Washing hung out on a hot, dry, windy afternoon in Jaipur dries fast; on a humid, still monsoon day in Mumbai it stays damp. Plants behave the same: transpiration is **highest on hot, dry, sunny, windy days** and **lowest on cool, humid, still nights**. Internal factors also matter — leaf area, number and position of stomata, and thickness of cuticle.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "High **humidity decreases** transpiration — a very common mistake is to say it increases it. Also, most transpiration is **stomatal**, not cuticular. Guard cells are the **only epidermal cells with chloroplasts**.",
          },
          {
            type: "keypoints",
            items: [
              "Transpiration = loss of water vapour from aerial parts; mostly through stomata.",
              "Guard cells have thick inner walls and chloroplasts.",
              "K⁺ uptake → endosmosis → turgid guard cells → stoma opens.",
              "Light, temperature and wind raise the rate; humidity lowers it.",
            ],
          },
        ],
        flashcards: [
          { front: "Transpiration", back: "Loss of water as vapour from the aerial parts of a plant." },
          { front: "Lenticels", back: "Small openings in the bark of woody stems; allow lenticular transpiration." },
          { front: "Guard cells", back: "Kidney-shaped cells around a stoma; have chloroplasts and thick inner walls." },
          { front: "Role of K⁺ in stomata", back: "Uptake by guard cells draws in water by osmosis, opening the stoma." },
          { front: "Effect of humidity", back: "High humidity lowers the rate of transpiration." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The largest share of water loss in transpiration occurs through:",
            options: ["Cuticle", "Lenticels", "Stomata", "Hydathodes"],
            answer: 2,
            explain: "Stomatal transpiration accounts for roughly 80–90%.",
          },
          {
            kind: "truefalse",
            q: "Transpiration increases when the air is very humid.",
            answer: false,
            explain: "Humid air reduces the vapour gradient, lowering the rate.",
          },
          {
            kind: "fill",
            q: "Guard cells take up ___ ions in light, which draws water in by osmosis.",
            answer: ["potassium", "K+", "K"],
            explain: "K⁺ accumulation makes guard cell sap concentrated.",
          },
          {
            kind: "order",
            q: "Arrange the events that lead to opening of a stoma.",
            items: ["Light falls on the leaf", "Guard cells take up K⁺ ions", "Water enters guard cells by endosmosis", "Guard cells become turgid and bow outward"],
            explain: "Light → K⁺ uptake → water in → turgid guard cells → pore opens.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Why does the stoma open when guard cells become turgid?",
            options: ["The inner walls are thinner and stretch more", "The outer walls are thinner and stretch more", "Chloroplasts push the walls apart", "The cuticle dissolves"],
            answer: 1,
            explain: "The thin outer walls stretch more than the thick inner walls, so the cells curve and the pore widens.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "transpiration-experiments-and-significance",
        title: "Experiments, Significance & Guttation",
        summary: "Cobalt chloride paper, bell-jar and potometer experiments, why transpiration is a 'necessary evil', and how guttation differs.",
        minutes: 16,
        xp: 40,
        blocks: [
          { type: "heading", text: "Classic experiments" },
          {
            type: "table",
            headers: ["Experiment", "Set-up", "Observation & conclusion"],
            rows: [
              ["**Bell-jar**", "Potted plant covered with a bell jar; pot and soil wrapped in polythene", "Water droplets on inside of jar → plant gives out water vapour"],
              ["**Cobalt chloride paper**", "Dry blue CoCl₂ paper clipped to both surfaces of a leaf", "Paper on **lower surface turns pink faster** → more stomata on lower surface of dicot leaves"],
              ["**Four-leaf (vaseline) experiment**", "Four leaves: (A) no vaseline, (B) upper surface coated, (C) lower surface coated, (D) both coated", "Wilting fastest: A > B > C > D (D stays fresh longest)"],
              ["**Ganong's potometer**", "Leafy shoot in a water-filled tube with an air bubble in a graduated capillary", "Bubble moves towards the shoot → measures rate of water uptake (≈ transpiration)"],
            ],
          },
          {
            type: "text",
            md: "**Worked example — reading a potometer.** In a potometer, the air bubble moves **6 cm in 12 minutes** in still air, and **6 cm in 4 minutes** when a fan is switched on.\n\n- Still air: rate = 6 ÷ 12 = **0.5 cm/min**.\n- With fan: rate = 6 ÷ 4 = **1.5 cm/min**.\n- Wind made the rate **3 times** faster, because it carries away the humid air around the leaves.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "A potted plant (with soil covered) weighed 500 g at 9 a.m. and 476 g at 3 p.m. What was the average rate of water loss in grams per hour?",
                answer: 4,
                tolerance: 0,
                unit: "g/h",
                explain: "Loss = 500 − 476 = 24 g over 6 hours → 24 ÷ 6 = 4 g/h.",
              },
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Potometer limitation",
            md: "A potometer actually measures the rate of **water absorption** by the shoot, not transpiration directly. The two are nearly equal because about 98% of absorbed water is transpired.",
          },
          { type: "heading", text: "Significance — a 'necessary evil'" },
          {
            type: "list",
            items: [
              "**Cooling** — evaporation removes heat from leaves in hot weather.",
              "**Ascent of sap** — creates transpiration pull that lifts water and minerals.",
              "**Distribution of minerals** throughout the plant.",
              "**Evil** side: excessive loss on hot days causes **wilting** and can kill the plant if water isn't replaced.",
            ],
          },
          {
            type: "text",
            md: "**Adaptations to reduce transpiration:** sunken stomata, thick cuticle, hairs on leaves, fewer stomata, leaves reduced to **spines** (cactus), leaf rolling in grasses, and shedding of leaves in dry seasons (deciduous trees). Many Rajasthan desert plants show these features.",
          },
          { type: "heading", text: "Guttation" },
          {
            type: "text",
            md: "On cool, humid mornings, you may see water drops along the edges of grass blades or *Colocasia* (arbi) leaves. This is **guttation** — loss of water in **liquid form** through **hydathodes** at the leaf margins, due to **root pressure** when transpiration is low.",
          },
          {
            type: "table",
            headers: ["", "Transpiration", "Guttation"],
            rows: [
              ["Form of water", "Vapour", "Liquid droplets"],
              ["Through", "Stomata, cuticle, lenticels", "Hydathodes at leaf margins"],
              ["When", "Mostly by day", "Night / early morning, high humidity"],
              ["Water", "Pure water vapour", "Contains dissolved salts and sugars"],
              ["Caused by", "Evaporation", "Root pressure"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Do not confuse **guttation** with **dew** (water vapour condensing from air) or with **bleeding** (sap oozing from a cut stem). In the cobalt chloride test, the paper changes from **blue (dry) to pink (moist)** — not the reverse.",
          },
          {
            type: "keypoints",
            items: [
              "CoCl₂ paper turns blue → pink; lower surface of dicot leaf turns pink faster.",
              "Potometer measures water uptake, which approximates transpiration.",
              "Transpiration cools leaves, drives ascent of sap and spreads minerals.",
              "Guttation: liquid water through hydathodes, driven by root pressure.",
            ],
          },
        ],
        flashcards: [
          { front: "Cobalt chloride paper", back: "Blue when dry, turns pink when moist; used to show transpiration." },
          { front: "Ganong's potometer", back: "Measures rate of water uptake by a leafy shoot (≈ rate of transpiration)." },
          { front: "Guttation", back: "Loss of water as liquid droplets through hydathodes, due to root pressure." },
          { front: "Hydathodes", back: "Water pores at leaf margins through which guttation occurs." },
          { front: "Why transpiration is a 'necessary evil'", back: "It cools and drives ascent of sap, but excessive loss causes wilting." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "In the four-leaf vaseline experiment, which leaf wilts LAST?",
            options: ["Uncoated leaf", "Upper surface coated", "Lower surface coated", "Both surfaces coated"],
            answer: 3,
            explain: "With both surfaces coated, almost no water can escape.",
          },
          {
            kind: "truefalse",
            q: "Guttation occurs through stomata.",
            answer: false,
            explain: "Guttation occurs through hydathodes at leaf margins.",
          },
          {
            kind: "numeric",
            q: "A potometer bubble moves 9 cm in 6 minutes. What is the rate of water uptake in cm per minute?",
            answer: 1.5,
            tolerance: 0.01,
            unit: "cm/min",
            explain: "9 ÷ 6 = 1.5 cm/min.",
          },
          {
            kind: "fill",
            q: "Dry cobalt chloride paper is blue; on absorbing moisture it turns ___.",
            answer: ["pink"],
            explain: "Blue → pink indicates water.",
          },
          {
            kind: "mcq",
            q: "Which adaptation helps desert plants reduce transpiration?",
            options: ["Broad thin leaves", "Many stomata on upper surface", "Leaves modified into spines", "Thin cuticle"],
            answer: 2,
            explain: "Spines (as in cactus) greatly reduce surface area for water loss.",
          },
          {
            kind: "mcq",
            q: "Guttation is caused mainly by:",
            options: ["Transpiration pull", "Root pressure", "Capillarity", "Imbibition"],
            answer: 1,
            explain: "When transpiration is low, root pressure pushes liquid water out of hydathodes.",
            difficulty: 2,
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Chemical Coordination in Plants                               */
  /* ------------------------------------------------------------ */
  {
    slug: "icse-chemical-coordination-in-plants",
    title: "Chemical Coordination in Plants",
    icon: "🌻",
    description: "Tropic and nastic movements, experiments on phototropism and geotropism, and the five plant hormones — auxins, gibberellins, cytokinins, ethylene and abscisic acid.",
    lessons: [
      {
        slug: "tropic-movements",
        title: "Tropic Movements in Plants",
        summary: "Phototropism, geotropism, hydrotropism, thigmotropism and chemotropism, with classic experiments.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🌞", caption: "A money plant on a windowsill always leans towards the window." },
          {
            type: "text",
            md: "Plants have no nerves or muscles, yet they respond to light, gravity, water and touch. These responses are mostly **slow growth movements** controlled by **plant hormones (phytohormones)**.",
          },
          { type: "heading", text: "Tropic vs nastic movements" },
          {
            type: "text",
            md: "A **tropism** is a **directional** growth movement of a plant part in response to an external stimulus. Growth **towards** the stimulus is **positive**; **away** from it is **negative**. A **nastic movement** is non-directional — e.g. the leaves of *Mimosa pudica* (touch-me-not / chhui-mui) folding when touched.",
          },
          {
            type: "table",
            headers: ["Tropism", "Stimulus", "Example"],
            rows: [
              ["**Phototropism**", "Light", "Shoots positively phototropic; roots negatively phototropic"],
              ["**Geotropism (gravitropism)**", "Gravity", "Roots positively geotropic; shoots negatively geotropic"],
              ["**Hydrotropism**", "Water", "Roots grow towards moisture"],
              ["**Thigmotropism**", "Touch / contact", "Tendrils of pea and cucumber coil around supports"],
              ["**Chemotropism**", "Chemicals", "Pollen tube grows towards the ovule"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The growth of a pollen tube towards the ovule is an example of:",
                options: ["Phototropism", "Chemotropism", "Hydrotropism", "Thigmotropism"],
                answer: 1,
                explain: "The pollen tube responds to chemicals secreted by the ovule.",
              },
            ],
          },
          { type: "heading", text: "Classic experiments" },
          {
            type: "text",
            md: "**Worked example 1 — phototropism.** Place a potted seedling in a box with a single hole on one side. After a few days the shoot **bends towards the hole**. Rotate the pot 180° and the shoot gradually bends back towards the light.\n\n**Worked example 2 — geotropism with a clinostat.** Lay a potted seedling horizontally. After a day, the root bends **downward** and the shoot bends **upward**. Now mount another horizontal seedling on a **clinostat**, which rotates it slowly; gravity acts on all sides equally, so root and shoot continue to grow **horizontally**. This proves gravity caused the bending.",
          },
          {
            type: "text",
            md: "**Hydrotropism experiment:** sow seeds in a sieve filled with moist sawdust and hang it at an angle. Roots first grow down through the sieve (geotropism), then **bend back** towards the moist sawdust — showing hydrotropism can override geotropism.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "A **root** is **positively geotropic** and **negatively phototropic**; a **shoot** is **negatively geotropic** and **positively phototropic**. Swapping these is the most common error. The bending of a sunflower head is a growth response, whereas folding of *Mimosa* leaves is a **nastic** (turgor) movement, not a tropism.",
          },
          {
            type: "keypoints",
            items: [
              "Tropisms are directional growth responses; nastic movements are non-directional.",
              "Shoots: +phototropic, −geotropic. Roots: +geotropic, +hydrotropic.",
              "Tendrils show thigmotropism; pollen tubes show chemotropism.",
              "A clinostat cancels the one-sided effect of gravity.",
            ],
          },
        ],
        flashcards: [
          { front: "Tropism", back: "Directional growth movement of a plant part in response to an external stimulus." },
          { front: "Geotropism of roots", back: "Positive — roots grow towards gravity." },
          { front: "Thigmotropism", back: "Growth response to touch, e.g. coiling of tendrils." },
          { front: "Clinostat", back: "Device that slowly rotates a plant, cancelling the one-sided effect of gravity." },
          { front: "Mimosa pudica leaf folding", back: "A nastic (seismonastic) movement, not a tropism." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Roots growing downward into soil show:",
            options: ["Negative geotropism", "Positive geotropism", "Positive phototropism", "Thigmotropism"],
            answer: 1,
            explain: "Roots grow towards gravity.",
          },
          {
            kind: "truefalse",
            q: "Coiling of a tendril around a support is an example of thigmotropism.",
            answer: true,
            explain: "It is a growth response to contact.",
          },
          {
            kind: "fill",
            q: "The apparatus used to cancel the effect of gravity on a growing seedling is called a ___.",
            answer: ["clinostat", "klinostat"],
            explain: "A clinostat rotates the plant slowly.",
          },
          {
            kind: "mcq",
            q: "In the sieve experiment, roots grow out through the sieve and then bend back towards the moist sawdust. This shows:",
            options: ["Phototropism", "Hydrotropism", "Chemotropism", "Nastic movement"],
            answer: 1,
            explain: "Roots bend towards moisture — positive hydrotropism.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Which of these is a nastic movement rather than a tropism?",
            options: ["Shoot bending towards light", "Pollen tube growing to ovule", "Mimosa leaves folding on touch", "Root growing towards water"],
            answer: 2,
            explain: "Mimosa leaf folding is non-directional and caused by turgor changes.",
          },
        ],
      },
      {
        slug: "plant-hormones",
        title: "Plant Hormones (Phytohormones)",
        summary: "How auxins cause bending, and the roles of gibberellins, cytokinins, ethylene and abscisic acid — with uses in Indian farming.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "**Phytohormones** are chemicals produced in small amounts in one part of a plant and transported to other parts, where they regulate growth and development. There are five main groups — four mainly promote growth, and one mainly inhibits it.",
          },
          { type: "heading", text: "Auxins and phototropism" },
          {
            type: "text",
            md: "**Auxins** (e.g. indole-3-acetic acid, IAA) are made at the **shoot tip** and promote **cell elongation**.\n\n**Worked process — why a shoot bends towards light:**\n1. Light falls on one side of the shoot tip.\n2. Auxin moves to the **shaded side**.\n3. Cells on the shaded side **elongate more**.\n4. The shoot bends **towards the light**.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Went's experiment",
            md: "F. W. **Went** cut off oat (*Avena*) coleoptile tips and placed them on **agar blocks**. When such an agar block was placed **on one side** of a decapitated coleoptile, the coleoptile **bent away from that side** — even in darkness. This proved a chemical (auxin) diffused from the tip and caused growth. Earlier, Charles Darwin and his son had shown the tip senses light.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "A shoot bends towards light because auxin:",
                options: ["Collects on the lit side and speeds growth there", "Collects on the shaded side and speeds elongation there", "Is destroyed by darkness", "Inhibits growth on the shaded side"],
                answer: 1,
                explain: "More auxin on the shaded side → more elongation there → bending towards light.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Hormone", "Main effects", "Practical use"],
            rows: [
              ["**Auxins**", "Cell elongation; **apical dominance**; root initiation; parthenocarpy (seedless fruit)", "Rooting of stem cuttings; synthetic auxin 2,4-D as a **weedicide** for broad-leaved weeds"],
              ["**Gibberellins**", "Stem elongation; **bolting** in rosette plants; break seed dormancy; make dwarf plants tall", "Increase grape size; first discovered from the 'foolish seedling' disease of rice caused by fungus *Gibberella fujikuroi*"],
              ["**Cytokinins**", "Promote **cell division**; delay leaf **senescence** (ageing); break dormancy", "Keep cut flowers and leafy vegetables fresh longer"],
              ["**Ethylene**", "A **gaseous** hormone; promotes **fruit ripening**; leaf and flower fall", "Ripening of mangoes and bananas in storage"],
              ["**Abscisic acid (ABA)**", "**Growth inhibitor**; closes stomata during water stress; induces dormancy of seeds and buds; promotes leaf fall", "Called the **stress hormone**"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Apical dominance in your garden",
            md: "The growing tip produces auxin that suppresses side buds. Pinch off the tip of a tulsi or chrysanthemum plant and side branches grow — the plant becomes bushier. Gardeners making hedges use this every day.",
          },
          {
            type: "text",
            md: "**Worked comparison — growth promoters vs inhibitor.** Auxins, gibberellins and cytokinins *promote* growth (elongation, bolting, division). Ethylene mainly drives ripening and abscission. **ABA works against** them: it closes stomata and keeps seeds dormant until conditions are right — for example, keeping seeds from germinating in the dry months before the monsoon arrives.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Ethylene is the **only gaseous** plant hormone. **Cytokinins** (not auxins) delay ageing of leaves. **Gibberellins** (not auxins) cause bolting. And ABA is an **inhibitor**, often confused with auxin because both start with 'A'.",
          },
          {
            type: "keypoints",
            items: [
              "Auxins: cell elongation, apical dominance, rooting; cause phototropic bending.",
              "Gibberellins: stem elongation and bolting; discovered from Gibberella fujikuroi.",
              "Cytokinins: cell division, delay senescence.",
              "Ethylene: gaseous; fruit ripening.",
              "Abscisic acid: stress hormone; closes stomata; dormancy.",
            ],
          },
        ],
        flashcards: [
          { front: "Auxin", back: "Hormone made at shoot tip; promotes cell elongation and apical dominance." },
          { front: "Gibberellin", back: "Causes stem elongation and bolting; first found from *Gibberella fujikuroi*." },
          { front: "Cytokinin", back: "Promotes cell division; delays leaf senescence." },
          { front: "Ethylene", back: "Gaseous hormone that ripens fruits." },
          { front: "Abscisic acid", back: "Growth inhibitor / stress hormone; closes stomata, induces dormancy." },
          { front: "Apical dominance", back: "Suppression of lateral buds by auxin from the apical bud." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which plant hormone is a gas?",
            options: ["Auxin", "Cytokinin", "Ethylene", "Gibberellin"],
            answer: 2,
            explain: "Ethylene is gaseous and promotes fruit ripening.",
          },
          {
            kind: "mcq",
            q: "The hormone that closes stomata during water shortage is:",
            options: ["Auxin", "Abscisic acid", "Gibberellin", "Cytokinin"],
            answer: 1,
            explain: "ABA, the stress hormone, triggers stomatal closure.",
          },
          {
            kind: "truefalse",
            q: "Removing the apical bud of a plant encourages growth of lateral buds.",
            answer: true,
            explain: "Removing the source of auxin removes apical dominance.",
          },
          {
            kind: "fill",
            q: "Gibberellins were first discovered from a fungus that causes 'foolish seedling' disease in ___.",
            answer: ["rice", "paddy"],
            explain: "*Gibberella fujikuroi* made rice seedlings grow abnormally tall.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange the events that cause a shoot to bend towards light.",
            items: ["Light falls on one side of the shoot tip", "Auxin moves to the shaded side", "Cells on the shaded side elongate more", "Shoot bends towards light"],
            explain: "Unequal auxin distribution → unequal elongation → bending.",
          },
          {
            kind: "mcq",
            q: "Which hormone delays the yellowing (senescence) of leaves?",
            options: ["Ethylene", "Abscisic acid", "Cytokinin", "Auxin"],
            answer: 2,
            explain: "Cytokinins delay senescence.",
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------ */
  /* Excretory System                                              */
  /* ------------------------------------------------------------ */
  {
    slug: "icse-excretory-system",
    title: "Excretory System",
    icon: "🫘",
    description: "Excretory organs, structure of the kidney and nephron, how urine forms by ultrafiltration, reabsorption and secretion, osmoregulation and dialysis.",
    lessons: [
      {
        slug: "kidney-and-nephron-structure",
        title: "Kidneys & the Nephron",
        summary: "Excretory products and organs, the human urinary system, the internal structure of a kidney and the parts of a nephron.",
        minutes: 15,
        xp: 40,
        blocks: [
          { type: "illustration", emoji: "🫘", caption: "Each kidney is bean-shaped, about 10 cm long, and sits on either side of the backbone." },
          {
            type: "text",
            md: "Cells constantly produce wastes. **Excretion** is the removal of **metabolic nitrogenous wastes** and other harmful substances from the body. (Removing undigested food — egestion — is *not* excretion, as that food never entered the cells.)",
          },
          {
            type: "table",
            headers: ["Excretory organ", "Waste removed"],
            rows: [
              ["**Kidneys**", "Urea, excess water and salts (as urine)"],
              ["**Skin**", "Water, salts, a little urea (as sweat)"],
              ["**Lungs**", "Carbon dioxide and water vapour"],
              ["**Liver**", "Makes urea from excess amino acids; excretes bile pigments (from broken-down haemoglobin)"],
            ],
          },
          { type: "heading", text: "The urinary system" },
          {
            type: "list",
            ordered: true,
            items: [
              "**Two kidneys** filter blood and make urine.",
              "**Two ureters** carry urine to the bladder by peristalsis.",
              "The **urinary bladder** stores urine.",
              "The **urethra** carries urine out of the body (controlled by sphincter muscles).",
            ],
          },
          { type: "heading", text: "Inside the kidney" },
          {
            type: "text",
            md: "A section of the kidney shows an outer dark **cortex**, an inner **medulla** with cone-shaped **renal pyramids**, and a funnel-shaped **pelvis** that leads into the ureter. Each kidney contains about **one million nephrons** (uriniferous tubules) — the functional units.",
          },
          {
            type: "table",
            headers: ["Part of the nephron", "Location", "Feature"],
            rows: [
              ["**Bowman's capsule**", "Cortex", "Double-walled cup enclosing the glomerulus"],
              ["**Glomerulus**", "Cortex", "Knot of capillaries; site of filtration"],
              ["**Proximal convoluted tubule (PCT)**", "Cortex", "Coiled; most reabsorption"],
              ["**Loop of Henle**", "Medulla", "U-shaped; concentrates urine"],
              ["**Distal convoluted tubule (DCT)**", "Cortex", "Coiled; secretion and fine adjustment"],
              ["**Collecting duct**", "Medulla → pelvis", "Collects urine from many nephrons"],
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Blood supply",
            md: "Blood enters the glomerulus through the **afferent arteriole** and leaves through the **efferent arteriole**. The afferent arteriole is **wider** than the efferent one, which builds up **high pressure** in the glomerulus — the driving force for filtration.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "The functional unit of the kidney is the:",
                options: ["Neuron", "Nephron", "Alveolus", "Ureter"],
                answer: 1,
                explain: "Each kidney has about a million nephrons.",
              },
            ],
          },
          {
            type: "text",
            md: "**Worked comparison — renal artery vs renal vein.** Blood in the **renal artery** carries oxygen and **more urea**; blood in the **renal vein** has **the least urea** of any blood vessel in the body, because the kidney has removed it. (It is deoxygenated, as kidney cells used the oxygen.)",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Ureter vs urethra: **ureters** (two) go from kidneys to bladder; the **urethra** (one) goes from bladder to outside. And the **liver** makes urea but does **not** excrete it — kidneys do. The blood vessel with the least urea is the **renal vein**.",
          },
          {
            type: "keypoints",
            items: [
              "Excretion removes metabolic wastes; egestion is not excretion.",
              "Kidneys → ureters → bladder → urethra.",
              "Kidney: cortex, medulla (renal pyramids), pelvis.",
              "Nephron: Bowman's capsule + glomerulus, PCT, loop of Henle, DCT, collecting duct.",
              "Afferent arteriole is wider than efferent → high glomerular pressure.",
            ],
          },
        ],
        flashcards: [
          { front: "Excretion", back: "Removal of metabolic (mainly nitrogenous) wastes from the body." },
          { front: "Nephron", back: "Structural and functional unit of the kidney (~1 million per kidney)." },
          { front: "Glomerulus", back: "Bunch of capillaries inside Bowman's capsule; site of ultrafiltration." },
          { front: "Ureter vs urethra", back: "Ureter: kidney → bladder. Urethra: bladder → outside." },
          { front: "Blood vessel with least urea", back: "Renal vein." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the path of urine in the body.",
            items: ["Kidney", "Ureter", "Urinary bladder", "Urethra"],
            explain: "Urine forms in kidneys, passes down ureters, is stored in the bladder, and exits through the urethra.",
          },
          {
            kind: "mcq",
            q: "Which part of the nephron lies in the medulla?",
            options: ["Bowman's capsule", "PCT", "Loop of Henle", "Glomerulus"],
            answer: 2,
            explain: "The loop of Henle dips into the medulla.",
          },
          {
            kind: "truefalse",
            q: "The efferent arteriole is wider than the afferent arteriole.",
            answer: false,
            explain: "The afferent arteriole is wider, creating high pressure in the glomerulus.",
          },
          {
            kind: "fill",
            q: "The double-walled cup that surrounds the glomerulus is called ___ capsule.",
            answer: ["Bowman's", "Bowmans", "Bowman"],
            explain: "Bowman's capsule collects the glomerular filtrate.",
          },
          {
            kind: "mcq",
            q: "Which organ converts excess amino acids into urea?",
            options: ["Kidney", "Liver", "Lungs", "Skin"],
            answer: 1,
            explain: "The liver makes urea by deamination; the kidneys excrete it.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "urine-formation-and-osmoregulation",
        title: "Urine Formation & Osmoregulation",
        summary: "Ultrafiltration, selective reabsorption and tubular secretion, the role of ADH, composition of urine, and dialysis.",
        minutes: 16,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Every day your kidneys filter the whole blood volume many times over, yet you pass only about 1.5 litres of urine. How? Urine is made in **three steps** inside each nephron.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Ultrafiltration** (glomerulus → Bowman's capsule): high pressure forces water, glucose, amino acids, salts and urea out of the blood. **Blood cells and large proteins stay behind.** The liquid is the **glomerular filtrate**.",
              "**Selective reabsorption** (mainly PCT): useful substances — **all glucose and amino acids**, most water and many salts — are taken back into the surrounding capillaries.",
              "**Tubular secretion** (mainly DCT): extra wastes such as **potassium and hydrogen ions**, creatinine and certain drugs are secreted from blood into the tubule.",
            ],
          },
          { type: "formula", tex: "125\\ \\text{mL/min} \\times 60 \\times 24 = 180\\,000\\ \\text{mL} = 180\\ \\text{L/day}", caption: "Glomerular filtration in a healthy adult" },
          {
            type: "text",
            md: "**Worked example — how much is reabsorbed?** About **180 L** of filtrate forms each day, but only about **1.5 L** of urine is passed.\n\n- Reabsorbed = 180 − 1.5 = **178.5 L**.\n- Percentage reabsorbed = 178.5 ÷ 180 × 100 ≈ **99%**.\n\nSo nearly all the filtered water returns to the blood.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is normally absent from glomerular filtrate?",
                options: ["Glucose", "Urea", "Plasma proteins", "Salts"],
                answer: 2,
                explain: "Large protein molecules and blood cells cannot pass through the filter.",
              },
            ],
          },
          {
            type: "table",
            headers: ["Substance", "Blood plasma", "Glomerular filtrate", "Urine"],
            rows: [
              ["Proteins", "Present", "Absent", "Absent"],
              ["Glucose", "Present", "Present", "**Absent** (all reabsorbed)"],
              ["Urea", "Low", "Low", "**High** (concentrated)"],
              ["Water", "Present", "Present", "About 95% of urine"],
            ],
          },
          { type: "heading", text: "Osmoregulation and ADH" },
          {
            type: "text",
            md: "Kidneys also keep the body's water and salt balance — **osmoregulation**. **Antidiuretic hormone (ADH, vasopressin)**, released from the **posterior pituitary**, makes the DCT and collecting duct reabsorb **more water**.\n\n- Hot day in Chennai, lots of sweating → less water in blood → **more ADH** → **small volume of concentrated urine**.\n- Drinking lots of water → **less ADH** → **large volume of dilute urine**.\n\nLack of ADH causes **diabetes insipidus** — large volumes of dilute urine. Glucose in urine, however, is a sign of **diabetes mellitus**.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "When kidneys fail",
            md: "In **haemodialysis**, the patient's blood flows through tubes of a semi-permeable membrane bathed in dialysing fluid; urea and excess salts diffuse out. A long-term option is a **kidney transplant** from a matching donor — a healthy person can live normally with one kidney.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "ICSE trap",
            md: "Normal urine contains **no glucose and no proteins**. Glucose is filtered but **completely reabsorbed** in the PCT — so 'glucose is not filtered' is wrong. Also, urine colour comes from the pigment **urochrome**, and **ADH increases** water reabsorption (anti-diuresis = less urine).",
          },
          {
            type: "keypoints",
            items: [
              "Urine forms by ultrafiltration, selective reabsorption and tubular secretion.",
              "About 180 L filtrate/day → about 1.5 L urine; ~99% reabsorbed.",
              "Glucose and amino acids are completely reabsorbed in the PCT.",
              "ADH from posterior pituitary increases water reabsorption.",
              "Dialysis or transplant treats kidney failure.",
            ],
          },
        ],
        flashcards: [
          { front: "Ultrafiltration", back: "Filtration of blood under high pressure from glomerulus into Bowman's capsule." },
          { front: "Selective reabsorption", back: "Return of useful substances (glucose, amino acids, water, salts) to blood, mainly in the PCT." },
          { front: "Tubular secretion", back: "Active transfer of wastes (K⁺, H⁺, creatinine, drugs) from blood into the tubule." },
          { front: "ADH", back: "Antidiuretic hormone (vasopressin) from posterior pituitary; increases water reabsorption." },
          { front: "Urochrome", back: "Pigment that gives urine its yellow colour." },
        ],
        quiz: [
          {
            kind: "order",
            q: "Arrange the steps of urine formation in order.",
            items: ["Ultrafiltration", "Selective reabsorption", "Tubular secretion"],
            explain: "Filtration in the glomerulus → reabsorption in PCT → secretion in DCT.",
          },
          {
            kind: "numeric",
            q: "If the glomerular filtration rate is 125 mL per minute, how many litres of filtrate are formed in 24 hours?",
            answer: 180,
            tolerance: 0,
            unit: "L",
            explain: "125 × 60 × 24 = 1,80,000 mL = 180 L.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "On a hot day with heavy sweating, the amount of ADH in blood:",
            options: ["Decreases, producing more urine", "Increases, producing less, concentrated urine", "Stays the same", "Drops to zero"],
            answer: 1,
            explain: "More ADH → more water reabsorbed → less, concentrated urine.",
          },
          {
            kind: "truefalse",
            q: "Glucose is present in the glomerular filtrate but absent in normal urine.",
            answer: true,
            explain: "It is filtered but completely reabsorbed in the PCT.",
          },
          {
            kind: "fill",
            q: "Deficiency of ADH causes diabetes ___, in which large amounts of dilute urine are passed.",
            answer: ["insipidus"],
            explain: "Diabetes insipidus results from lack of ADH.",
          },
          {
            kind: "mcq",
            q: "In haemodialysis, urea is removed from blood by:",
            options: ["Active transport", "Diffusion through a semi-permeable membrane", "Filtration under pressure in the glomerulus", "Osmosis of urea"],
            answer: 1,
            explain: "Urea diffuses from blood into the dialysing fluid across the membrane.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "Cell Cycle and Cell Division": "icse-cell-cycle-and-cell-division",
  "Absorption by Roots": "icse-absorption-by-roots",
  "Transpiration": "icse-transpiration",
  "Chemical Coordination in Plants": "icse-chemical-coordination-in-plants",
  "Excretory System": "icse-excretory-system",
};
