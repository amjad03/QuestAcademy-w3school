import type { Topic } from "@/content/types";

/** String.raw keeps TeX backslashes intact. */
const t = String.raw;

/** Course these chapters belong to. */
export const course = "biology-senior";
/** Syllabus family: chapter titles below are matched against `bio` rows in src/content/syllabus/. */
export const family = "bio";

/** Standard assertion–reason options used in NEET-style questions. */
const AR = [
  "Both A and R are true, and R is the correct explanation of A",
  "Both A and R are true, but R is not the correct explanation of A",
  "A is true, but R is false",
  "A is false, but R is true",
];

/* ------------------------------------------------------------------ */
/* Sexual Reproduction in Flowering Plants                             */
/* ------------------------------------------------------------------ */
const flowering: Topic = {
  slug: "c12-sexual-reproduction-flowering-plants",
  title: "Sexual Reproduction in Flowering Plants",
  icon: "🌺",
  description:
    "The flower, microsporogenesis and the pollen grain, megasporogenesis and the embryo sac, pollination, double fertilisation, endosperm, embryo, seed, fruit, apomixis and polyembryony.",
  lessons: [
    /* ---------------- Lesson 1: stamen and pollen ---------------- */
    {
      slug: "c12-stamen-microsporogenesis-pollen",
      title: "The Stamen, Microsporogenesis and the Pollen Grain",
      summary:
        "Structure of the anther and its wall layers, how microspore mother cells form pollen by meiosis, and the structure of a mature pollen grain.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "🌼",
          caption:
            "Long before a marigold or mustard flower opens, its parts have already decided which cells will become male and female gametes.",
        },
        {
          type: "text",
          md: "A flower is the site of sexual reproduction in angiosperms. Many hormonal and structural changes start **pre-fertilisation events**: the floral primordium forms, and inside it the **androecium** (whorl of stamens, the male organ) and the **gynoecium** (the pistil, the female organ) develop.\n\nA **stamen** has a long, slender stalk called the **filament** and a terminal, usually **bilobed** anther. The proximal end of the filament is attached to the thalamus or the petal. A typical angiosperm anther is **bilobed** and each lobe has two thecae, so it is **dithecous**. A groove often runs lengthwise between the thecae.",
        },
        {
          type: "text",
          md: "In transverse section the anther is **tetragonal** (four-sided) and has **four microsporangia**, two in each lobe, at the corners. The microsporangia develop further and become **pollen sacs**, which are packed with pollen grains.",
        },
        {
          type: "heading",
          text: "The wall of a microsporangium",
        },
        {
          type: "table",
          headers: ["Layer (outside → inside)", "What it does"],
          rows: [
            ["Epidermis", "Outer protective layer"],
            ["Endothecium", "Protection; helps in dehiscence of the anther to release pollen"],
            ["Middle layers (2–3)", "Protection; help in dehiscence"],
            ["Tapetum (innermost)", "**Nourishes** the developing pollen grains. Its cells have dense cytoplasm and generally more than one nucleus"],
          ],
        },
        {
          type: "text",
          md: "In a young anther the centre of each microsporangium is filled with compactly arranged, homogeneous cells called **sporogenous tissue**. Each cell of this tissue is a potential **pollen mother cell (PMC)** or **microspore mother cell** (2n). It divides by **meiosis** to form a cluster of four haploid cells called a **microspore tetrad**. This process is **microsporogenesis**.\n\nAs the anther matures and dehydrates, the microspores separate from each other and develop into **pollen grains**. Inside each microsporangium, thousands of pollen grains form and are released when the anther **dehisces**.",
        },
        {
          type: "formula",
          tex: t`\underbrace{\text{PMC}}_{2n} \xrightarrow{\text{meiosis}} \underbrace{\text{microspore tetrad}}_{4 \times n} \xrightarrow{\text{mitosis}} \underbrace{\text{vegetative cell} + \text{generative cell}}_{\text{2-celled pollen}} `,
          caption: "One meiosis gives four pollen grains. One more mitosis (of the generative cell) gives two male gametes.",
        },
        {
          type: "heading",
          text: "Structure of the pollen grain",
        },
        {
          type: "list",
          items: [
            "Pollen grains are generally **spherical**, about 25–50 micrometres across, with a two-layered wall.",
            "The hard outer **exine** is made of **sporopollenin**, one of the most resistant organic materials known. It withstands high temperature, strong acids and alkali, and no enzyme is known that degrades it. That is why pollen survives as fossils.",
            "**Germ pores** are apertures on the exine where sporopollenin is absent; the pollen tube comes out through one of them.",
            "The inner **intine** is thin and continuous, made of **cellulose and pectin**.",
            "A mature pollen grain has two cells. The **vegetative cell** is bigger, has abundant food reserve and a large, irregular nucleus. The **generative cell** is small, spindle-shaped, with dense cytoplasm and a nucleus, and floats in the cytoplasm of the vegetative cell.",
            "In over **60%** of angiosperms, pollen is shed at this **2-celled** stage. In the rest, the generative cell divides by mitosis first and the pollen is shed at the **3-celled** stage (one vegetative cell + two male gametes).",
          ],
        },
        {
          type: "example",
          title: "Counting meioses for pollen",
          problem: "A sunflower head needs 2,000 pollen grains to be produced in one anther. How many microspore mother cells must undergo meiosis?",
          steps: [
            "Each microspore mother cell gives one microspore tetrad by one meiosis.",
            "One tetrad = 4 microspores, and each microspore becomes one pollen grain.",
            "Number of PMCs = 2,000 ÷ 4 = 500.",
          ],
          answer: "500 microspore mother cells (500 meiotic divisions).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which layer of the anther wall nourishes the developing pollen grains?",
              options: ["Endothecium", "Epidermis", "Tapetum", "Middle layer"],
              answer: 2,
              explain: "The innermost layer, the tapetum, nourishes the pollen. Its cells have dense cytoplasm and usually more than one nucleus.",
            },
            {
              kind: "fill",
              q: "The exine of the pollen grain is made of ___, which no known enzyme can degrade.",
              answer: ["sporopollenin"],
              explain: "Sporopollenin is highly resistant to heat, acids and alkali, so pollen is well preserved as fossils.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The generative cell is the larger cell of the pollen grain because it makes the gametes.",
          right: "The vegetative cell is the larger cell. The generative cell is small, spindle-shaped and floats inside the vegetative cell's cytoplasm.",
          why: "Students link 'important job' with 'big cell'. The vegetative cell is big because it stores food and later forms the pollen tube; the generative cell only needs to divide once to give two male gametes.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Put the anther wall layers in order, from outside to inside.",
            items: ["Epidermis", "Endothecium", "Middle layers", "Tapetum", "Sporogenous tissue"],
            explain: "The three outer layers protect the anther and help it split open. The tapetum lines the pollen sac and feeds the sporogenous tissue, which forms the pollen.",
          },
        },
        {
          type: "callout",
          tone: "fact",
          title: "Pollen and people",
          md: "Pollen of many species causes allergies and bronchial problems. **Parthenium** (carrot grass), which came into India as a contaminant with imported wheat, is a common cause. Pollen is also sold as food supplement tablets.\n\n**Viability**: rice and wheat pollen lose viability within about **30 minutes** of release; pollen of some members of Rosaceae, Leguminosae and Solanaceae stays viable for **months**. Pollen can be stored for years in **liquid nitrogen at −196 °C** in pollen banks for crop breeding.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "The labelled TS of a mature anther and the 2-celled pollen grain are frequent 2–3 mark diagrams. Label all four wall layers, the sporogenous tissue/pollen and the connective. Write 'sporopollenin' and 'germ pore' clearly; spelling mistakes cost marks.",
        },
        {
          type: "keypoints",
          items: [
            "Anther: bilobed, dithecous, tetragonal, with four microsporangia.",
            "Wall layers: epidermis, endothecium, middle layers, tapetum (nourishing).",
            "Microsporogenesis: PMC (2n) → meiosis → microspore tetrad → pollen grains.",
            "Exine = sporopollenin with germ pores; intine = cellulose + pectin.",
            "Pollen is shed 2-celled in over 60% of angiosperms, 3-celled in the rest.",
          ],
        },
      ],
      flashcards: [
        { front: "Why is an angiosperm anther called dithecous?", back: "Each of its two lobes has two thecae." },
        { front: "Microsporogenesis", back: "Formation of microspores from a pollen mother cell by meiosis." },
        { front: "Function of the tapetum", back: "Nourishes the developing pollen grains." },
        { front: "Sporopollenin", back: "Material of the exine; resists heat, strong acids and alkali; no known enzyme degrades it." },
        { front: "Germ pore", back: "Region of the exine where sporopollenin is absent; the pollen tube emerges here." },
        { front: "Intine", back: "Thin, continuous inner wall of pollen, made of cellulose and pectin." },
        { front: "Contents of a 2-celled pollen grain", back: "A large vegetative cell and a small, spindle-shaped generative cell." },
        { front: "How is pollen stored for breeding?", back: "In liquid nitrogen at −196 °C (cryopreservation) in pollen banks." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "How many microsporangia are present in a typical angiosperm anther?",
          options: ["Two", "Four", "Eight", "One"],
          answer: 1,
          explain: "The anther is bilobed and each lobe has two microsporangia, giving four in all.",
        },
        {
          kind: "mcq",
          q: "The pollen mother cell is:",
          options: ["Haploid and divides by mitosis", "Diploid and divides by meiosis", "Haploid and divides by meiosis", "Triploid and divides by mitosis"],
          answer: 1,
          explain: "The PMC is a diploid cell of the sporogenous tissue; meiosis reduces it to four haploid microspores.",
        },
        {
          kind: "truefalse",
          q: "Germ pores are regions where the intine is absent.",
          answer: false,
          explain: "Germ pores are where **sporopollenin (exine)** is absent. The intine is continuous and grows out as the pollen tube.",
        },
        {
          kind: "numeric",
          q: "How many pollen grains are formed from 75 microspore mother cells?",
          answer: 300,
          explain: "Each PMC gives a tetrad of 4 microspores: 75 × 4 = 300 pollen grains.",
        },
        {
          kind: "mcq",
          q: "Pollen grains of which pair lose viability within about 30 minutes of release?",
          options: ["Rice and wheat", "Pea and gram", "Tomato and potato", "Rose and apple"],
          answer: 0,
          explain: "Rice and wheat pollen lose viability in about 30 minutes; some Rosaceae, Leguminosae and Solanaceae pollen stays viable for months.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about the vegetative cell of a pollen grain are correct?",
          options: ["It is larger than the generative cell", "It has abundant food reserve", "It has a large, irregularly shaped nucleus", "It divides to form two male gametes"],
          answers: [0, 1, 2],
          explain: "It is the generative cell that divides by mitosis to form two male gametes.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "Carrot grass, a common source of pollen allergy, is the weed ___.",
          answer: ["Parthenium"],
          explain: "Parthenium came into India as a contaminant with imported wheat and is now widespread.",
        },
        {
          kind: "order",
          q: "Arrange the events in microsporogenesis and pollen development in sequence.",
          items: ["Sporogenous tissue forms in the microsporangium", "Pollen mother cell undergoes meiosis", "Microspore tetrad is formed", "Microspores separate as the anther dehydrates", "Pollen grain is released on dehiscence"],
          explain: "Sporogenous tissue → PMC meiosis → tetrad → separation → release.",
        },
      ],
    },

    /* ---------------- Lesson 2: pistil and embryo sac ---------------- */
    {
      slug: "c12-pistil-ovule-embryo-sac",
      title: "The Pistil, Ovule and Embryo Sac",
      summary:
        "Parts of the pistil and the ovule, megasporogenesis, and how a functional megaspore builds the 8-nucleate, 7-celled embryo sac.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🥚",
          caption: "Each ovule in a pea pod hides a microscopic embryo sac: seven cells that decide whether a seed will form.",
        },
        {
          type: "text",
          md: "The **gynoecium** is the female reproductive part. It may have one pistil (**monocarpellary**) or more than one. When there are several pistils they may be fused (**syncarpous**, e.g. *Papaver*) or free (**apocarpous**, e.g. *Michelia*).\n\nEach pistil has three parts: the **stigma** (landing platform for pollen), the **style** (elongated slender part below the stigma) and the swollen basal **ovary**. Inside the ovary is the **ovarian cavity (locule)**. The **placenta** lies inside the cavity, and from it arise the **megasporangia**, commonly called **ovules**. The number of ovules may be one (wheat, paddy, mango) or many (papaya, watermelon, orchids).",
        },
        {
          type: "heading",
          text: "Parts of an ovule",
        },
        {
          type: "table",
          headers: ["Part", "Description"],
          rows: [
            ["Funicle", "Stalk that attaches the ovule to the placenta"],
            ["Hilum", "Junction where the body of the ovule fuses with the funicle"],
            ["Integuments", "One or two protective envelopes around the ovule"],
            ["Micropyle", "Small opening at the tip, where integuments are absent"],
            ["Chalaza", "Basal part, opposite the micropylar end"],
            ["Nucellus", "Mass of cells inside the integuments, with abundant food reserve; holds the embryo sac"],
          ],
        },
        {
          type: "text",
          md: "**Megasporogenesis** is the formation of megaspores from the **megaspore mother cell (MMC)**. Ovules generally differentiate a single MMC in the **micropylar region** of the nucellus. It is a large cell with dense cytoplasm and a prominent nucleus. The MMC divides by **meiosis** to form **four megaspores**.\n\nIn most flowering plants, **one** megaspore is functional and the other three degenerate. Only the functional megaspore develops into the female gametophyte (**embryo sac**). Because the embryo sac comes from a single megaspore, this is called **monosporic** development.",
        },
        {
          type: "heading",
          text: "From one megaspore to seven cells",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The nucleus of the functional megaspore divides by **mitosis**; the two nuclei move to opposite poles (**2-nucleate** embryo sac).",
            "Each nucleus divides by mitosis again (**4-nucleate**), and once more (**8-nucleate**). These are **free nuclear** divisions: nuclei divide but no cell walls form yet.",
            "After the 8-nucleate stage, cell walls are laid down. Six of the eight nuclei are surrounded by walls and organised into cells.",
            "The remaining two nuclei, the **polar nuclei**, sit below the egg apparatus in the large **central cell**.",
          ],
        },
        {
          type: "table",
          headers: ["End of the embryo sac", "Cells", "Notes"],
          rows: [
            ["Micropylar end", "**Egg apparatus**: 2 synergids + 1 egg cell", "Synergids have the **filiform apparatus** (cellular thickenings at the micropylar tip) that guides the pollen tube"],
            ["Chalazal end", "3 **antipodal** cells", "Lie opposite the egg apparatus"],
            ["Centre", "1 large **central cell** with 2 polar nuclei", "Forms the primary endosperm cell after triple fusion"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{Typical embryo sac} = 8 \text{ nuclei},\; 7 \text{ cells} \quad (3 + 3 + 1)`,
          caption: "Three mitoses after one meiosis: 1 → 2 → 4 → 8 nuclei. All cells of the embryo sac are haploid; the central cell has two haploid polar nuclei.",
        },
        {
          type: "example",
          title: "Counting divisions for seeds",
          problem: "How many meiotic divisions are needed to produce 40 seeds in a plant (each seed from one ovule)?",
          steps: [
            "Each seed needs one embryo sac, and each embryo sac comes from one MMC by one meiosis: 40 meioses on the female side.",
            "Each seed also needs one pollen grain (two male gametes from one pollen tube). One PMC meiosis gives 4 pollen grains, so 40 ÷ 4 = 10 meioses on the male side.",
            "Total = 40 + 10 = 50.",
          ],
          answer: "50 meiotic divisions (40 MMC + 10 PMC).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The filiform apparatus is present in the:",
              options: ["Antipodal cells", "Egg cell", "Synergids", "Central cell"],
              answer: 2,
              explain: "Filiform apparatus is a set of thickenings at the micropylar tip of each synergid; it guides the pollen tube.",
            },
            {
              kind: "numeric",
              q: "How many mitotic divisions occur in the functional megaspore nucleus to form a typical 8-nucleate embryo sac?",
              answer: 3,
              explain: "1 → 2 → 4 → 8 needs three successive mitotic divisions.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The embryo sac has 8 cells because it has 8 nuclei.",
          right: "It has 8 nuclei but only 7 cells: 3 antipodals, 2 synergids, 1 egg and 1 central cell holding 2 polar nuclei.",
          why: "Students count nuclei as cells. The two polar nuclei share one large central cell, so the typical embryo sac is 8-nucleate and 7-celled.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Where is each cell found in the embryo sac?",
            groups: ["Micropylar end", "Chalazal end", "Centre"],
            items: [
              { text: "Egg cell", group: 0, hint: "It is part of the egg apparatus near the micropyle." },
              { text: "Synergids", group: 0, hint: "They flank the egg and carry the filiform apparatus." },
              { text: "Antipodal cells", group: 1, hint: "'Anti' means opposite: opposite the egg apparatus." },
              { text: "Polar nuclei", group: 2, hint: "They sit in the large central cell." },
              { text: "Filiform apparatus", group: 0, hint: "It guides the pollen tube that enters through the micropyle." },
            ],
            explain: "Egg apparatus (egg + 2 synergids) faces the micropyle, antipodals face the chalaza, and the central cell with 2 polar nuclei fills the middle.",
          },
        },
        {
          type: "callout",
          tone: "note",
          title: "ISC board note",
          md: "ISC also asks the **types of ovules** by the position of the micropyle relative to the funicle: **orthotropous** (straight, micropyle in line with funicle, e.g. *Polygonum*), **anatropous** (inverted, micropyle close to the funicle; most common in angiosperms), **campylotropous** (curved body, e.g. pea family), **amphitropous** and **circinotropous** (e.g. *Opuntia*). CBSE and Karnataka PUC (NCERT) do not ask these.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Draw the embryo sac with the micropylar end at the bottom, as in NCERT. Label micropyle, synergids, filiform apparatus, egg, polar nuclei, central cell, antipodals and chalazal end. Mention '8-nucleate, 7-celled' in words; examiners give a mark for it.",
        },
        {
          type: "keypoints",
          items: [
            "Pistil = stigma + style + ovary; ovules arise from the placenta.",
            "Ovule: funicle, hilum, integuments, micropyle, chalaza, nucellus.",
            "MMC (2n) in the micropylar nucellus → meiosis → 4 megaspores, 1 functional (monosporic).",
            "Three free-nuclear mitoses → 8 nuclei → 7 cells.",
            "Synergids with filiform apparatus guide the pollen tube.",
          ],
        },
      ],
      flashcards: [
        { front: "Megasporangium", back: "The ovule." },
        { front: "Hilum", back: "Junction between the ovule body and the funicle." },
        { front: "Nucellus", back: "Food-rich tissue inside the integuments that holds the embryo sac; diploid." },
        { front: "Monosporic development", back: "Embryo sac formed from a single functional megaspore." },
        { front: "Egg apparatus", back: "Two synergids and one egg cell at the micropylar end." },
        { front: "Filiform apparatus", back: "Thickenings at the micropylar tip of synergids that guide the pollen tube." },
        { front: "Typical angiosperm embryo sac", back: "8-nucleate and 7-celled (Polygonum type)." },
        { front: "Where is the MMC formed?", back: "In the micropylar region of the nucellus." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which of these has an ovary with a single ovule?",
          options: ["Papaya", "Watermelon", "Mango", "Orchid"],
          answer: 2,
          explain: "Wheat, paddy and mango have one ovule per ovary; papaya, watermelon and orchids have many.",
        },
        {
          kind: "mcq",
          q: "Ploidy of the nucellus, megaspore and antipodal cells respectively is:",
          options: ["2n, n, n", "n, n, n", "2n, 2n, n", "2n, n, 2n"],
          answer: 0,
          explain: "The nucellus is sporophytic tissue (2n). The megaspore and all embryo sac cells are haploid (n).",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In most flowering plants all four megaspores develop into embryo sacs.",
          answer: false,
          explain: "Only one megaspore is functional; the other three degenerate.",
        },
        {
          kind: "numeric",
          q: "How many meiotic divisions are needed to form 100 seeds?",
          answer: 125,
          explain: "100 MMC meioses (one embryo sac per seed) + 100 ÷ 4 = 25 PMC meioses (one pollen grain per seed) = 125.",
          difficulty: 2,
          hint: "Count female and male meioses separately. One PMC gives four pollen grains.",
        },
        {
          kind: "fill",
          q: "The basal part of the ovule, opposite the micropyle, is the ___.",
          answer: ["chalaza"],
          explain: "The chalaza is the basal end; the antipodal cells of the embryo sac face it.",
        },
        {
          kind: "mcq",
          q: "Gynoecium with several free pistils, as in Michelia, is called:",
          options: ["Syncarpous", "Apocarpous", "Monocarpellary", "Multilocular"],
          answer: 1,
          explain: "Free pistils = apocarpous (Michelia); fused pistils = syncarpous (Papaver).",
        },
        {
          kind: "order",
          q: "Arrange the stages of embryo sac development in order.",
          items: ["Megaspore mother cell", "Four megaspores", "Functional megaspore", "2-nucleate embryo sac", "8-nucleate embryo sac", "7-celled embryo sac"],
          explain: "MMC → meiosis → 4 megaspores → 1 functional → three mitoses (2, 4, 8 nuclei) → walls form → 7 cells.",
        },
        {
          kind: "multi",
          q: "Which cells of the embryo sac are found at the micropylar end?",
          options: ["Egg", "Synergids", "Antipodals", "Central cell"],
          answers: [0, 1],
          explain: "The egg apparatus (egg + two synergids) is micropylar; antipodals are chalazal.",
        },
      ],
    },

    /* ---------------- Lesson 3: pollination ---------------- */
    {
      slug: "c12-pollination-outbreeding",
      title: "Pollination, Outbreeding Devices and Pollen–Pistil Interaction",
      summary:
        "Kinds of pollination, wind, water and animal agents, devices that prevent self-pollination, pollen–pistil interaction and artificial hybridisation.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "illustration",
          emoji: "🐝",
          caption: "A honeybee visiting a mustard field in Punjab carries pollen from flower to flower, and plant to plant.",
        },
        {
          type: "text",
          md: "**Pollination** is the transfer of pollen grains from the anther to the stigma of a pistil. Both male and female gametes are non-motile, so plants depend on external agents.\n\nThere are three kinds, depending on where the pollen comes from:",
        },
        {
          type: "table",
          headers: ["Kind", "Pollen comes from", "Needs an agent?", "Genetically"],
          rows: [
            ["**Autogamy**", "Anther of the same flower", "No (if anther and stigma lie close)", "Self"],
            ["**Geitonogamy**", "Another flower of the same plant", "Yes", "Like autogamy (same plant)"],
            ["**Xenogamy**", "Flower of a different plant", "Yes", "Genetically different pollen; true cross-pollination"],
          ],
        },
        {
          type: "text",
          md: "**Chasmogamous** flowers have exposed anthers and stigma. **Cleistogamous** flowers never open, so they are **invariably autogamous** and give **assured seed set** even without pollinators. *Viola* (common pansy), *Oxalis* and *Commelina* produce both kinds of flowers.\n\nGeitonogamy is **functionally** cross-pollination (an agent is involved) but **genetically** similar to autogamy, because the pollen comes from the same plant.",
        },
        {
          type: "heading",
          text: "Agents of pollination",
        },
        {
          type: "table",
          headers: ["Agent", "Flower features", "Examples"],
          rows: [
            ["Wind", "Light, non-sticky pollen; well-exposed stamens; large, often feathery stigma; often a single ovule per ovary; numerous flowers packed in an inflorescence", "Grasses; maize (the tassels of the corn cob are the stigma and style)"],
            ["Water", "Pollen protected from wetting by a mucilaginous covering", "*Vallisneria*, *Hydrilla* (fresh water); *Zostera* (marine seagrass)"],
            ["Insects", "Large, colourful, fragrant, nectar-rich; small flowers clustered into an inflorescence; sticky pollen; foul odour for flies and beetles", "Bees (dominant), butterflies, moths, flies, beetles, wasps, ants"],
            ["Other animals", "Rewards such as nectar and pollen", "Sunbirds and hummingbirds, bats, primates (lemurs), arboreal rodents, reptiles (gecko, garden lizard)"],
          ],
        },
        {
          type: "text",
          md: "In *Vallisneria* the female flower reaches the water surface on a long stalk; male flowers or pollen are released onto the surface and drift to it. In seagrasses the female flowers stay **submerged**, and long, ribbon-like pollen grains are carried passively inside the water. Most aquatic plants with flowers above water, such as **water hyacinth** and **water lily**, are pollinated by insects or wind, not water.\n\nSome plants give a **safe place to lay eggs** as the reward. *Amorphophallus* has a very tall flower (about 6 feet). In ***Yucca***, a moth species and the plant cannot complete their life cycles without each other: the moth lays eggs in the locule of the ovary and pollinates the flower, and the larvae feed on the developing seeds. Many insects that take pollen or nectar without pollinating are **pollen/nectar robbers**.",
        },
        {
          type: "heading",
          text: "Outbreeding devices",
        },
        {
          type: "list",
          items: [
            "Pollen release and stigma receptivity are **not synchronised** (one happens before the other).",
            "Anther and stigma are placed at **different positions**, so pollen cannot reach the stigma of the same flower.",
            "**Self-incompatibility**: a genetic mechanism by which pollen from the same flower or plant cannot germinate or grow a tube in the pistil.",
            "**Unisexual flowers**. In **monoecious** plants (castor, maize) both male and female flowers are on the same plant: autogamy is prevented but **geitonogamy is not**. In **dioecious** plants (papaya) male and female flowers are on different plants: both autogamy and geitonogamy are prevented.",
          ],
        },
        {
          type: "text",
          md: "**Pollen–pistil interaction** is the set of events from pollen landing on the stigma to the pollen tube entering the ovule. The pistil recognises compatible pollen through chemical components of the pollen and the pistil. Compatible pollen germinates and grows a **pollen tube** through a germ pore; the tube grows through the stigma and style and enters the ovule through the **micropyle**, then enters one **synergid** through the **filiform apparatus**. If the pollen was shed 2-celled, the generative cell divides into **two male gametes** while the tube grows in the stigma.\n\n**Artificial hybridisation** in crop improvement ensures only the desired pollen reaches the stigma. In a bisexual flower the anthers are removed before they dehisce (**emasculation**) and the flower is covered with a butter-paper bag (**bagging**). When the stigma becomes receptive, the desired pollen is dusted on it and the flower is **rebagged**. For a plant with unisexual flowers, the female flower bud is bagged before it opens; no emasculation is needed.",
        },
        {
          type: "example",
          title: "Reading a flower",
          problem: "A plant has small, green flowers in a crowded inflorescence, long feathery stigmas, exposed stamens and one ovule per ovary. Its pollen is light and dry. Identify the likely pollinating agent and give two reasons.",
          steps: [
            "No bright colour, no scent and no nectar mentioned, so the flower does not need to attract animals.",
            "Feathery stigma and exposed stamens help release and trap airborne pollen.",
            "Light, non-sticky pollen, a single ovule per ovary and many flowers per inflorescence are classic wind-pollination traits.",
          ],
          answer: "Wind (anemophily), as in grasses and maize.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which outbreeding device prevents both autogamy and geitonogamy?",
              options: ["Monoecy", "Dioecy", "Cleistogamy", "Chasmogamy"],
              answer: 1,
              explain: "In dioecious plants (papaya) male and female flowers are on different plants, so pollen must come from another plant.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Geitonogamy is cross-pollination, so it gives genetic variation like xenogamy.",
          right: "Geitonogamy needs an agent, so it is functionally cross-pollination, but the pollen comes from the same plant, so it is genetically the same as autogamy.",
          why: "The pollen travels between two flowers, which looks like crossing. But both flowers carry the same genotype, so no new gene combinations come in.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Which agent pollinates each plant?",
            groups: ["Wind", "Water", "Insects or other animals"],
            items: [
              { text: "Maize", group: 0, hint: "Its tassels hang out to catch airborne pollen." },
              { text: "Vallisneria", group: 1, hint: "Its female flower floats on the surface on a long stalk." },
              { text: "Zostera", group: 1, hint: "A marine seagrass with ribbon-like pollen." },
              { text: "Water lily", group: 2, hint: "Its flower stands above water and attracts insects." },
              { text: "Yucca", group: 2, hint: "It has a famous partnership with a moth." },
              { text: "Grasses", group: 0, hint: "Tiny green flowers, light pollen, feathery stigmas." },
            ],
            explain: "Water pollination is limited to about 30 genera, mostly monocots. Many aquatic plants such as water lily and water hyacinth are still pollinated by insects or wind.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Autogamy (same flower), geitonogamy (same plant, another flower), xenogamy (another plant).",
            "Cleistogamous flowers are always autogamous; Viola, Oxalis, Commelina have both types.",
            "Wind: light pollen, feathery stigma, single ovule; water: Vallisneria, Hydrilla, Zostera.",
            "Monoecy prevents autogamy only; dioecy prevents both autogamy and geitonogamy.",
            "Artificial hybridisation: emasculation, bagging, dusting pollen, rebagging.",
          ],
        },
      ],
      flashcards: [
        { front: "Geitonogamy", back: "Pollen from another flower of the same plant; needs an agent; genetically like autogamy." },
        { front: "Xenogamy", back: "Pollen from a flower of a different plant; brings genetically different pollen." },
        { front: "Cleistogamous flower", back: "A flower that never opens; invariably autogamous; assured seed set." },
        { front: "Plants with both chasmogamous and cleistogamous flowers", back: "Viola (pansy), Oxalis, Commelina." },
        { front: "Self-incompatibility", back: "Genetic block that stops pollen of the same flower or plant from germinating or growing in the pistil." },
        { front: "Emasculation", back: "Removing anthers from a bisexual flower bud before they dehisce." },
        { front: "Yucca and its moth", back: "Moth lays eggs in the ovary locule and pollinates the flower; larvae feed on developing seeds." },
        { front: "Pollen robbers", back: "Floral visitors that take pollen or nectar without pollinating." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Cleistogamous flowers are:",
          options: ["Always xenogamous", "Always autogamous", "Always geitonogamous", "Always wind-pollinated"],
          answer: 1,
          explain: "They never open, so only pollen from the same flower can reach the stigma.",
        },
        {
          kind: "mcq",
          q: "Which plant is monoecious?",
          options: ["Papaya", "Date palm", "Castor", "Mulberry"],
          answer: 2,
          explain: "Castor and maize bear both male and female flowers on the same plant. Papaya is the NCERT example of dioecy.",
        },
        {
          kind: "truefalse",
          q: "Water hyacinth is pollinated by water.",
          answer: false,
          explain: "Water hyacinth and water lily flowers emerge above water and are pollinated by insects or wind.",
        },
        {
          kind: "multi",
          q: "Which are features of wind-pollinated flowers?",
          options: ["Light, non-sticky pollen", "Large feathery stigma", "Strong scent and nectar", "Often a single ovule in each ovary"],
          answers: [0, 1, 3],
          explain: "Scent and nectar are rewards for animals; wind-pollinated flowers do not need them.",
        },
        {
          kind: "mcq",
          q: "In artificial hybridisation of a plant with unisexual flowers, which step is NOT needed?",
          options: ["Bagging the female bud", "Dusting the desired pollen", "Emasculation", "Rebagging"],
          answer: 2,
          explain: "A female flower has no anthers, so there is nothing to emasculate.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The pollen tube enters a synergid through the ___ apparatus.",
          answer: ["filiform"],
          explain: "The filiform apparatus at the micropylar tip of the synergid guides the pollen tube in.",
        },
        {
          kind: "order",
          q: "Arrange the steps of artificial hybridisation in a bisexual flower.",
          items: ["Emasculation of the bud", "Bagging with butter paper", "Dusting desired pollen on the receptive stigma", "Rebagging"],
          explain: "The bag keeps unwanted pollen out before and after the chosen pollen is applied.",
        },
        {
          kind: "mcq",
          q: "In seagrasses such as Zostera, pollination happens:",
          options: ["On the water surface", "Below the water surface, with long ribbon-like pollen", "By wind above the water", "By aquatic insects"],
          answer: 1,
          explain: "The female flowers stay submerged and long ribbon-like pollen grains are carried passively inside the water.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Lesson 4: fertilisation to seed ---------------- */
    {
      slug: "c12-double-fertilisation-seed",
      title: "Double Fertilisation, Endosperm, Embryo, Seed and Fruit",
      summary:
        "Syngamy and triple fusion, endosperm and embryo development, the seed and fruit, apomixis and polyembryony.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "illustration",
          emoji: "🥥",
          caption: "Tender coconut water and the white kernel are the same tissue at two stages: endosperm.",
        },
        {
          type: "text",
          md: "After entering a synergid, the pollen tube releases its **two male gametes** into the cytoplasm of the synergid. One male gamete moves towards the egg and fuses with its nucleus: this is **syngamy**, and it forms the diploid **zygote**. The other male gamete moves to the two polar nuclei in the central cell and fuses with them to form the triploid **primary endosperm nucleus (PEN)**. Because three haploid nuclei fuse, this is **triple fusion**.\n\nSince two kinds of fusion happen in one embryo sac, the whole event is called **double fertilisation**, a feature unique to flowering plants. The central cell becomes the **primary endosperm cell (PEC)** and develops into the endosperm; the zygote develops into the embryo.",
        },
        {
          type: "formula",
          tex: t`\underbrace{n}_{\text{male gamete}} + \underbrace{n}_{\text{egg}} \rightarrow \underbrace{2n}_{\text{zygote}} \qquad \underbrace{n}_{\text{male gamete}} + \underbrace{n + n}_{\text{polar nuclei}} \rightarrow \underbrace{3n}_{\text{PEN}}`,
          caption: "Syngamy (left) and triple fusion (right) together make double fertilisation.",
        },
        {
          type: "heading",
          text: "Endosperm",
        },
        {
          type: "text",
          md: "Endosperm development **precedes** embryo development, so that food is ready for the young embryo. The PEC divides repeatedly to form triploid **endosperm** tissue filled with reserve food.\n\nIn the commonest type, **free-nuclear endosperm**, the PEN divides many times without cell walls; walls form later from the periphery inward. The **coconut water** of a tender coconut is free-nuclear endosperm (thousands of nuclei), and the surrounding **white kernel** is cellular endosperm.\n\nThe endosperm may be fully used up by the developing embryo before the seed matures (pea, groundnut, beans: **non-albuminous** seeds), or may persist in the mature seed (castor, wheat, maize, barley, coconut: **albuminous** seeds). In some seeds such as **black pepper** and **beet**, remnants of the nucellus persist; this residual nucellus is the **perisperm**.",
        },
        {
          type: "text",
          md: "**The embryo** develops at the **micropylar end**, where the zygote lies. Most zygotes divide only after some endosperm has formed. The zygote gives rise to the **proembryo**, then the **globular**, **heart-shaped** and finally the mature embryo.\n\nA **dicot embryo** has an embryonal axis and **two cotyledons**. The part above the cotyledons is the **epicotyl**, ending in the **plumule** (stem tip). The part below is the **hypocotyl**, ending in the **radicle** (root tip), which is covered by a root cap.\n\nA **monocot (grass) embryo** has **one cotyledon**, the **scutellum**, placed laterally. The radicle and root cap at the lower end are enclosed in a sheath, the **coleorhiza**. The plumule and a few leaf primordia at the upper end are enclosed in a hollow foliar structure, the **coleoptile**.",
        },
        {
          type: "table",
          headers: ["Ovule part", "After fertilisation becomes", "Ploidy"],
          rows: [
            ["Egg + male gamete (zygote)", "Embryo", "2n"],
            ["Central cell (PEN)", "Endosperm", "3n"],
            ["Integuments", "Seed coat (testa and tegmen)", "2n (maternal)"],
            ["Micropyle", "Small pore in the seed coat (entry of O₂ and water in germination)", "–"],
            ["Nucellus", "Usually used up; persists as perisperm in black pepper, beet", "2n"],
            ["Ovule", "Seed", "–"],
            ["Ovary wall", "Pericarp (fruit wall)", "2n"],
            ["Ovary", "Fruit", "–"],
          ],
        },
        {
          type: "text",
          md: "As the seed matures its water content falls to about **10–15% moisture by mass**, metabolic activity slows, and the embryo may enter **dormancy**. Under favourable moisture and oxygen, the seed germinates. Seeds of an Arctic lupine (*Lupinus arcticus*) germinated after an estimated **10,000 years** of dormancy, and a **2000-year-old** date palm seed (*Phoenix dactylifera*) from King Herod's palace near the Dead Sea also germinated.\n\nMost fruits develop only from the ovary (**true fruits**). In apple, strawberry and cashew the **thalamus** also contributes, so they are **false fruits**. **Parthenocarpic** fruits such as banana develop without fertilisation and are seedless; parthenocarpy can be induced with growth hormones.",
        },
        {
          type: "callout",
          tone: "fact",
          title: "Apomixis and polyembryony",
          md: "**Apomixis** is the formation of seeds **without fertilisation**; it is a form of asexual reproduction that mimics sexual reproduction. It is found in some species of **Asteraceae** and grasses. In some species a diploid egg cell forms without reduction division and develops into the embryo without fertilisation. In others, such as many *Citrus* and mango varieties, some **nucellar cells** around the embryo sac divide, protrude into it and develop into embryos. A seed may then contain many embryos: **polyembryony**.\n\nApomictic embryos are genetically identical to the parent. If **hybrid** varieties could be made apomictic, farmers could keep sowing the seed every year without losing the hybrid characters, instead of buying new hybrid seed each season.",
        },
        {
          type: "example",
          title: "Ploidy check",
          problem: "In a plant with 2n = 24, how many chromosomes are present in (a) the endosperm, (b) the embryo, (c) a synergid and (d) a nucellar embryo of Citrus-like polyembryony?",
          steps: [
            "n = 24 ÷ 2 = 12.",
            "(a) Endosperm is 3n = 36.",
            "(b) The zygotic embryo is 2n = 24.",
            "(c) A synergid is a cell of the embryo sac, so n = 12.",
            "(d) A nucellar embryo comes from a diploid nucellus cell without fertilisation, so 2n = 24.",
          ],
          answer: "Endosperm 36, embryo 24, synergid 12, nucellar embryo 24.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which of these seeds is non-albuminous?",
              options: ["Castor", "Wheat", "Groundnut", "Coconut"],
              answer: 2,
              explain: "In pea, groundnut and beans the endosperm is fully consumed before the seed matures.",
            },
            {
              kind: "fill",
              q: "In the grass embryo the single shield-shaped cotyledon is called the ___.",
              answer: ["scutellum"],
              explain: "The scutellum lies laterally on the embryonal axis.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Triple fusion means three male gametes fuse with the egg.",
          right: "Triple fusion is the fusion of ONE male gamete with the TWO polar nuclei in the central cell, giving the 3n primary endosperm nucleus.",
          why: "The word 'triple' counts three nuclei, not three gametes. Each pollen tube carries only two male gametes: one for syngamy, one for triple fusion.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each ovule part with what it becomes.",
            pairs: [
              ["Zygote", "Embryo"],
              ["Primary endosperm cell", "Endosperm"],
              ["Integuments", "Seed coat"],
              ["Ovary wall", "Pericarp"],
              ["Residual nucellus", "Perisperm"],
            ],
            explain: "Ovule → seed and ovary → fruit. The seed coat and pericarp are maternal (2n) tissues.",
          },
        },
        {
          type: "callout",
          tone: "note",
          title: "ISC board note",
          md: "ISC also asks the **three types of endosperm**: **nuclear** (free-nuclear first, e.g. coconut, maize), **cellular** (a wall forms after every division, e.g. *Petunia*, *Datura*) and **helobial** (intermediate; first division gives two unequal cells, common in monocots of the order Helobiales). NCERT discusses only the free-nuclear type.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "For 'What is double fertilisation?' (3 marks) write both fusions with their products and ploidy, and say where they occur (egg apparatus, central cell). Labelled dicot and monocot embryos are common 3-mark diagrams: do not forget coleoptile and coleorhiza.",
        },
        {
          type: "keypoints",
          items: [
            "Syngamy: male gamete + egg → 2n zygote. Triple fusion: male gamete + 2 polar nuclei → 3n PEN.",
            "Endosperm forms before the embryo; coconut water is free-nuclear endosperm.",
            "Non-albuminous: pea, groundnut, beans; albuminous: castor, wheat, maize, coconut; perisperm in black pepper, beet.",
            "Ovule → seed, ovary → fruit; false fruits (apple, strawberry, cashew) include thalamus.",
            "Apomixis gives seeds without fertilisation; nucellar polyembryony in Citrus and mango.",
          ],
        },
      ],
      flashcards: [
        { front: "Syngamy", back: "Fusion of one male gamete with the egg to form the diploid zygote." },
        { front: "Triple fusion", back: "Fusion of the second male gamete with two polar nuclei to form the triploid PEN." },
        { front: "Coconut water", back: "Free-nuclear endosperm; the white kernel is cellular endosperm." },
        { front: "Perisperm", back: "Persistent remnant of the nucellus in some seeds, e.g. black pepper and beet." },
        { front: "Coleoptile and coleorhiza", back: "Coleoptile sheathes the plumule; coleorhiza sheathes the radicle and root cap (monocot embryo)." },
        { front: "False fruit", back: "Fruit in which the thalamus also contributes, e.g. apple, strawberry, cashew." },
        { front: "Parthenocarpy", back: "Fruit formation without fertilisation, giving seedless fruit, e.g. banana." },
        { front: "Apomixis", back: "Production of seeds without fertilisation; seen in some Asteraceae and grasses." },
        { front: "Polyembryony", back: "More than one embryo in a seed, e.g. nucellar embryos in Citrus and mango." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "The primary endosperm nucleus is formed by the fusion of:",
          options: ["Egg and male gamete", "Two polar nuclei and one male gamete", "Synergid and male gamete", "Two male gametes and the egg"],
          answer: 1,
          explain: "Triple fusion involves the two polar nuclei of the central cell and the second male gamete.",
        },
        {
          kind: "mcq",
          q: "Perisperm is the persistent:",
          options: ["Endosperm", "Nucellus", "Integument", "Antipodal tissue"],
          answer: 1,
          explain: "Perisperm is residual nucellus; it is diploid, unlike the triploid endosperm.",
        },
        {
          kind: "numeric",
          q: "If the root cells of a plant have 18 chromosomes, how many chromosomes are present in a cell of its endosperm?",
          answer: 27,
          explain: "Root cells are 2n = 18, so n = 9 and endosperm (3n) = 27.",
          difficulty: 2,
        },
        {
          kind: "truefalse",
          q: "In most angiosperms the zygote divides before the primary endosperm cell.",
          answer: false,
          explain: "Endosperm development precedes embryo development; most zygotes divide only after some endosperm has formed.",
        },
        {
          kind: "multi",
          q: "Which are false fruits?",
          options: ["Apple", "Strawberry", "Cashew", "Mango"],
          answers: [0, 1, 2],
          explain: "In apple, strawberry and cashew the thalamus contributes to the fruit; mango develops from the ovary alone.",
        },
        {
          kind: "mcq",
          q: "In Citrus, extra embryos in a seed usually arise from:",
          options: ["Synergids after fertilisation", "Antipodal cells", "Nucellar cells", "Endosperm cells"],
          answer: 2,
          explain: "Nucellar cells around the embryo sac divide, protrude into it and form embryos (nucellar polyembryony).",
        },
        {
          kind: "fill",
          q: "Mature seeds generally have ___ to 15% moisture by mass.",
          answer: ["10"],
          explain: "Seeds dry to about 10–15% moisture, slowing metabolism and allowing dormancy.",
        },
        {
          kind: "mcq",
          q: "The epicotyl of a dicot embryo ends in the:",
          options: ["Radicle", "Plumule", "Root cap", "Scutellum"],
          answer: 1,
          explain: "Epicotyl (above cotyledons) ends in the plumule; hypocotyl (below) ends in the radicle.",
        },
      ],
    },

    /* ---------------- Exam edge ---------------- */
    {
      slug: "c12-flowering-exam-edge",
      title: "Exam edge: Sexual Reproduction in Flowering Plants",
      summary:
        "What NEET and KCET ask from this chapter: ploidy and counting questions, NCERT lines, assertion–reason reasoning and the classic traps.",
      minutes: 25,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually asks 3–4 questions from this chapter, almost all from NCERT lines: wall layers of the anther, pollen viability, embryo sac cells, outbreeding devices, examples (Vallisneria, Yucca, Viola), endosperm types, apomixis. Statement-based and assertion–reason questions are common. **KCET** asks direct NCERT facts and simple counting (meiosis, ploidy).\n\nThe two skills that win marks: knowing **ploidy of every structure** and **counting divisions** quickly.",
        },
        {
          type: "table",
          headers: ["Structure", "Ploidy", "Remember"],
          rows: [
            ["Nucellus, integuments, MMC, PMC, tapetum", "2n", "Sporophytic tissue of the parent"],
            ["Megaspore, microspore, egg, synergids, antipodals, each polar nucleus, vegetative and generative cells, male gametes", "n", "Gametophytic"],
            ["Zygote, embryo, nucellar embryo, perisperm, seed coat, pericarp", "2n", "Seed coat and pericarp are maternal"],
            ["PEN, endosperm", "3n", "Two maternal + one paternal set"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{Meioses for } N \text{ seeds} = N_{(\text{MMC})} + \frac{N}{4}_{(\text{PMC})} = \frac{5N}{4}`,
          caption: "Safe when each seed comes from one ovule fertilised by one pollen grain and one megaspore is functional. Mitoses in the embryo sac = 3 per ovule.",
        },
        {
          type: "list",
          items: [
            "NCERT line: the tapetum cells have **dense cytoplasm and generally more than one nucleus**.",
            "NCERT line: in **over 60%** of angiosperms pollen is shed at the 2-celled stage.",
            "NCERT line: **sporopollenin** is one of the most resistant organic materials known.",
            "NCERT line: the 8-nucleate embryo sac is **7-celled**; synergids have the **filiform apparatus**.",
            "NCERT line: geitonogamy is functionally cross-pollination but genetically similar to autogamy.",
            "NCERT line: in *Vallisneria* the female flower reaches the surface by a **long stalk**.",
          ],
        },
        {
          type: "example",
          title: "NEET level: counting nuclei",
          problem: "How many nuclei take part in double fertilisation in one embryo sac, and how many male gametes are used?",
          steps: [
            "Syngamy: 1 male gamete nucleus + 1 egg nucleus = 2 nuclei.",
            "Triple fusion: 1 male gamete nucleus + 2 polar nuclei = 3 nuclei.",
            "Total = 5 nuclei, of which 2 are male gametes.",
          ],
          answer: "5 nuclei in all; 2 male gametes.",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Cleistogamous flowers produce assured seed set even in the absence of pollinators. R: In cleistogamous flowers, anthers and stigma lie close to each other and the flower does not open.",
          steps: [
            "Check A: true. NCERT states cleistogamous flowers give assured seed set.",
            "Check R: true. The flower never opens and anthers dehisce near the stigma.",
            "Does R explain A? Yes, because closed flowers self-pollinate without any agent, which is why seed set is assured.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Statement analysis",
          problem: "Which statement is wrong? (i) Monoecy prevents autogamy and geitonogamy. (ii) Tapetum is the innermost wall layer of the microsporangium. (iii) Pea seeds are non-albuminous. (iv) Coconut water is free-nuclear endosperm.",
          steps: [
            "(i) Monoecious plants have male and female flowers on the same plant; pollen from a male flower can reach a female flower of the same plant (geitonogamy). So (i) is wrong.",
            "(ii), (iii) and (iv) are NCERT facts.",
          ],
          answer: "Statement (i) is wrong: monoecy prevents autogamy but not geitonogamy.",
        },
        {
          type: "example",
          title: "Harder: chromosomes across tissues",
          problem: "A plant's leaf cells have 16 chromosomes. A seed of this plant contains one zygotic embryo and two nucellar embryos in albuminous endosperm. What is the total number of chromosomes in one cell each of the zygotic embryo, both nucellar embryos, the endosperm and the seed coat?",
          steps: [
            "2n = 16, so n = 8.",
            "Zygotic embryo = 2n = 16; each nucellar embryo (from diploid nucellus) = 16, so two give 32.",
            "Endosperm = 3n = 24; seed coat (from integuments) = 2n = 16.",
            "Sum = 16 + 32 + 24 + 16 = 88.",
          ],
          answer: "88 chromosomes in total.",
        },
        {
          type: "mistake",
          wrong: "Nucellar embryos are haploid because they arise without fertilisation.",
          right: "Nucellar embryos are diploid because the nucellus is diploid sporophytic tissue.",
          why: "'No fertilisation' makes students think 'no doubling'. But fertilisation is not needed when the starting cell is already 2n; only an unfertilised egg would be haploid.",
        },
        {
          type: "mistake",
          wrong: "A typical embryo sac is formed by three meiotic divisions.",
          right: "It needs one meiosis (MMC → 4 megaspores) and three mitoses (1 → 2 → 4 → 8 nuclei).",
          why: "Students remember 'three divisions' but forget which kind. Inside the gametophyte all divisions are mitotic because the megaspore is already haploid.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which structure is triploid?",
            emoji: "🧬",
            options: ["Perisperm", "Endosperm", "Nucellus", "Antipodal cell"],
            answer: 1,
            trap: 0,
            explain: "Perisperm sounds like endosperm but is the leftover nucellus, which is 2n. Only the endosperm (from the PEN) is 3n.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Pollen grains are well preserved as fossils. R: The exine contains sporopollenin, which no enzyme is known to degrade.",
              options: AR,
              answer: 0,
              explain: "Both are NCERT facts and the resistance of sporopollenin is exactly why pollen fossilises well.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Learn the ploidy table; 3n only for PEN and endosperm.",
            "Meioses for N seeds = N + N/4. Embryo sac = 1 meiosis + 3 mitoses.",
            "Monoecy blocks autogamy only; dioecy blocks both.",
            "Perisperm (2n) is not endosperm (3n); nucellar embryos are 2n.",
          ],
        },
      ],
      flashcards: [
        { front: "Nuclei involved in double fertilisation", back: "Five: two male gametes, one egg, two polar nuclei." },
        { front: "Meioses for N seeds", back: "N (MMC) + N/4 (PMC)." },
        { front: "Ploidy of seed coat and pericarp", back: "2n, maternal tissue." },
        { front: "Ploidy of perisperm", back: "2n (residual nucellus)." },
        { front: "Wall layer whose cells are often multinucleate", back: "Tapetum." },
        { front: "Outbreeding device that blocks geitonogamy too", back: "Dioecy (e.g. papaya)." },
        { front: "Mitoses in forming a 7-celled embryo sac", back: "Three free-nuclear mitoses." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A: Geitonogamy is genetically similar to autogamy. R: In geitonogamy pollen grains come from the same plant.",
          options: AR,
          answer: 0,
          explain: "Both flowers belong to the same plant and share its genotype, which explains why geitonogamy is genetically like autogamy.",
        },
        {
          kind: "mcq",
          q: "A: Endosperm in coconut is free-nuclear in the tender stage. R: Coconut seeds are non-albuminous.",
          options: AR,
          answer: 2,
          explain: "A is true (coconut water). R is false: coconut is albuminous, since the endosperm persists.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many meiotic divisions are required to produce 200 seeds?",
          answer: 250,
          explain: "200 (MMC) + 200 ÷ 4 = 50 (PMC) = 250.",
          difficulty: 2,
          hint: "N + N/4.",
        },
        {
          kind: "numeric",
          q: "In a plant with 2n = 20, how many chromosomes are present in total in one antipodal cell, one synergid and the primary endosperm nucleus?",
          answer: 50,
          explain: "Antipodal n = 10, synergid n = 10, PEN 3n = 30: 10 + 10 + 30 = 50.",
          difficulty: 3,
        },
        {
          kind: "multi",
          q: "Which statements are correct as per NCERT?",
          options: [
            "Pollen of some members of Rosaceae stays viable for months",
            "Yucca moth larvae feed on developing seeds",
            "Viola produces only cleistogamous flowers",
            "Zostera is pollinated below the water surface",
          ],
          answers: [0, 1, 3],
          explain: "Viola produces both chasmogamous and cleistogamous flowers.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which pair is correctly matched?",
          options: ["Perisperm – 3n", "Scutellum – dicot cotyledon", "Filiform apparatus – synergid", "Coleorhiza – sheath over plumule"],
          answer: 2,
          explain: "Perisperm is 2n; scutellum is the monocot cotyledon; coleorhiza sheathes the radicle (coleoptile sheathes the plumule).",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A: Hybrid seeds must be bought by farmers every year. R: Plants raised from hybrid seed segregate and do not keep the hybrid characters.",
          options: AR,
          answer: 0,
          explain: "Segregation in the next generation is why hybrid seed is produced every year; apomixis in hybrids would solve this.",
          difficulty: 3,
          hint: "Think of what happens when an F1 hybrid is self-pollinated.",
        },
        {
          kind: "mcq",
          q: "The total number of cells and nuclei in a mature 3-celled pollen grain respectively are:",
          options: ["3 and 3", "2 and 3", "3 and 2", "2 and 2"],
          answer: 0,
          explain: "One vegetative cell and two male gametes (cells), each with one nucleus: 3 cells, 3 nuclei.",
          difficulty: 3,
          hint: "The male gametes are formed by division of the generative cell.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Human Reproduction                                                  */
/* ------------------------------------------------------------------ */
const human: Topic = {
  slug: "c12-human-reproduction",
  title: "Human Reproduction",
  icon: "👶",
  description:
    "Male and female reproductive systems, spermatogenesis and oogenesis, the menstrual cycle and its hormones, fertilisation, implantation, pregnancy, embryonic development, parturition and lactation.",
  lessons: [
    /* ---------------- Lesson 1: reproductive systems ---------------- */
    {
      slug: "c12-male-female-reproductive-systems",
      title: "The Male and Female Reproductive Systems",
      summary:
        "Testes, seminiferous tubules, accessory ducts and glands; ovaries, oviducts, uterus wall, external genitalia and mammary glands.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "Humans are **sexually reproducing** and **viviparous** (they give birth to young ones). The reproductive events are: **gametogenesis** (formation of sperm and ova), **insemination** (transfer of sperm into the female genital tract), **fertilisation** (fusion of sperm and ovum to form the zygote), **cleavage** and **blastocyst** formation, **implantation**, **gestation** (embryonic development) and **parturition** (delivery).\n\nReproductive events begin at **puberty**. There are marked differences between men and women: in women, formation of ova stops around **50 years** of age, while sperm formation continues in old age.",
        },
        {
          type: "heading",
          text: "Male reproductive system",
        },
        {
          type: "text",
          md: "The male system lies in the pelvis and has a pair of **testes**, accessory ducts, glands and external genitalia. The testes sit outside the abdominal cavity in a pouch called the **scrotum**, which keeps them about **2–2.5 °C lower** than the internal body temperature, as needed for spermatogenesis. Each adult testis is oval, about **4–5 cm long and 2–3 cm wide**, and covered by a dense coat.\n\nEach testis has about **250 compartments** called **testicular lobules**. Each lobule holds **one to three** highly coiled **seminiferous tubules**, where sperm are made. Each tubule is lined by two kinds of cells: **male germ cells (spermatogonia)**, which form sperm by meiosis, and **Sertoli cells**, which **nourish** the germ cells. The regions outside the tubules, the **interstitial spaces**, contain small blood vessels and **Leydig (interstitial) cells**, which synthesise and secrete testicular hormones called **androgens**. Other immunocompetent cells are also present.",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "**Rete testis**: network of tubules receiving sperm from the seminiferous tubules.",
            "**Vasa efferentia**: carry sperm out of the testis.",
            "**Epididymis**: coiled tube along the posterior surface of each testis; stores sperm.",
            "**Vas deferens**: ascends to the abdomen and loops over the urinary bladder. It receives a duct from the seminal vesicle and opens into the urethra as the **ejaculatory duct**.",
            "**Urethra**: arises from the urinary bladder, runs through the penis and opens outside at the **urethral meatus**.",
          ],
        },
        {
          type: "text",
          md: "The **penis** is the external genitalia, made of special tissue that helps in erection for insemination. Its enlarged end, the **glans penis**, is covered by a loose fold of skin, the **foreskin**.\n\nThe **accessory glands** are a pair of **seminal vesicles**, one **prostate** and a pair of **bulbourethral glands**. Their secretions make up the **seminal plasma**, rich in **fructose, calcium and certain enzymes**. The bulbourethral secretions also help **lubricate** the penis.",
        },
        {
          type: "heading",
          text: "Female reproductive system",
        },
        {
          type: "text",
          md: "The female system has a pair of **ovaries**, a pair of **oviducts**, the **uterus**, **cervix**, **vagina** and external genitalia in the pelvic region, plus a pair of **mammary glands**.\n\nEach **ovary** is about **2–4 cm** long, connected to the pelvic wall and uterus by ligaments. It is covered by a thin epithelium enclosing the **ovarian stroma**, which has an outer **cortex** and an inner **medulla**. Ovaries produce the female gamete (ovum) and ovarian hormones.\n\nEach **oviduct (fallopian tube)** is about **10–12 cm** long. From the ovary inward: the funnel-shaped **infundibulum** with finger-like **fimbriae** that collect the ovum after ovulation, the wider **ampulla**, and the narrow **isthmus**, which joins the uterus.",
        },
        {
          type: "table",
          headers: ["Uterine wall layer", "Tissue", "Role"],
          rows: [
            ["**Perimetrium**", "Thin outer membrane", "Covering"],
            ["**Myometrium**", "Thick layer of smooth muscle", "Strong contractions during delivery"],
            ["**Endometrium**", "Inner glandular layer", "Undergoes cyclical changes in the menstrual cycle; site of implantation"],
          ],
        },
        {
          type: "text",
          md: "The **uterus (womb)** is single, shaped like an inverted pear and supported by ligaments. It opens into the vagina through the narrow **cervix**. The cavity of the cervix (**cervical canal**) together with the vagina forms the **birth canal**.\n\nThe **external genitalia** are the **mons pubis** (cushion of fatty tissue with pubic hair), **labia majora**, **labia minora**, **hymen** (a membrane partially covering the vaginal opening) and the **clitoris** (a tiny finger-like structure above the urethral opening). The hymen can tear during a sudden fall or jolt, while inserting a tampon, or in sports such as horse-riding or cycling, and in some women it persists even after coitus. Its presence or absence is **not a reliable indicator** of virginity or sexual experience.",
        },
        {
          type: "callout",
          tone: "fact",
          title: "Mammary glands",
          md: "A functional mammary gland is a feature of all female mammals. Glandular tissue in each breast is divided into **15–20 mammary lobes** containing clusters of **alveoli**, which secrete milk. Milk flows: **alveoli → mammary tubules → mammary duct → mammary ampulla → lactiferous duct** (which opens at the nipple). The amount of fat decides the size of the breast.",
        },
        {
          type: "example",
          title: "Tracing the path of sperm",
          problem: "A sperm cell is formed in a seminiferous tubule. List the structures it passes through until it leaves the body, and name the glands that add secretions on the way.",
          steps: [
            "Seminiferous tubule → rete testis → vasa efferentia → epididymis (storage).",
            "Epididymis → vas deferens, which loops over the bladder.",
            "The seminal vesicle duct joins the vas deferens to form the ejaculatory duct; the prostate and bulbourethral glands add their secretions near the urethra.",
            "Ejaculatory duct → urethra → urethral meatus.",
          ],
          answer: "Seminiferous tubule, rete testis, vasa efferentia, epididymis, vas deferens, ejaculatory duct, urethra, urethral meatus. Seminal vesicles, prostate and bulbourethral glands add seminal plasma.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Androgens are secreted by:",
              options: ["Sertoli cells", "Leydig cells", "Spermatogonia", "Epididymis"],
              answer: 1,
              explain: "Leydig (interstitial) cells in the spaces between tubules make androgens. Sertoli cells nourish germ cells.",
            },
            {
              kind: "fill",
              q: "The smooth-muscle layer of the uterus that contracts strongly during delivery is the ___.",
              answer: ["myometrium"],
              explain: "Myometrium is the thick middle layer of smooth muscle.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Sertoli cells produce testosterone.",
          right: "Leydig cells, in the interstitial spaces outside the seminiferous tubules, produce androgens. Sertoli cells, inside the tubules, nourish the developing germ cells.",
          why: "Both cell types are in the testis and both start with a scientist's name, so they are easily swapped. Link 'L' with 'lies outside the tubule' and 'S' with 'supports sperm'.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the parts of the oviduct from the ovary to the uterus.",
            items: ["Fimbriae", "Infundibulum", "Ampulla", "Isthmus", "Uterus"],
            explain: "Fimbriae on the funnel-shaped infundibulum catch the ovum; it then moves into the wide ampulla and the narrow isthmus before the uterus.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "The labelled diagrams of the male system, the female system and a sectional view of the seminiferous tubule carry 3–5 marks. In the tubule, label spermatogonia, primary and secondary spermatocytes, spermatids, sperm, Sertoli cells and Leydig cells in the interstitial space.",
        },
        {
          type: "keypoints",
          items: [
            "Scrotum keeps testes 2–2.5 °C below body temperature.",
            "About 250 lobules per testis; 1–3 seminiferous tubules per lobule.",
            "Sertoli cells nourish; Leydig cells secrete androgens.",
            "Duct path: rete testis → vasa efferentia → epididymis → vas deferens → ejaculatory duct → urethra.",
            "Uterus wall: perimetrium, myometrium, endometrium; oviduct: infundibulum, ampulla, isthmus.",
          ],
        },
      ],
      flashcards: [
        { front: "Why is the scrotum outside the abdomen?", back: "To keep the testes 2–2.5 °C below body temperature for spermatogenesis." },
        { front: "Sertoli cells", back: "Cells lining seminiferous tubules that nourish the male germ cells." },
        { front: "Leydig cells", back: "Interstitial cells that synthesise and secrete androgens." },
        { front: "Seminal plasma is rich in", back: "Fructose, calcium and certain enzymes." },
        { front: "Function of bulbourethral secretion", back: "Lubrication of the penis." },
        { front: "Birth canal", back: "Cervical canal + vagina." },
        { front: "Parts of the oviduct", back: "Infundibulum (with fimbriae), ampulla, isthmus." },
        { front: "Milk flow path", back: "Alveoli → mammary tubules → mammary duct → mammary ampulla → lactiferous duct." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Each testicular lobule contains:",
          options: ["One to three seminiferous tubules", "About 250 seminiferous tubules", "Only Leydig cells", "One epididymis"],
          answer: 0,
          explain: "A testis has about 250 lobules, each with one to three highly coiled seminiferous tubules.",
        },
        {
          kind: "mcq",
          q: "The vas deferens opens into the urethra as the:",
          options: ["Rete testis", "Ejaculatory duct", "Vasa efferentia", "Urethral meatus"],
          answer: 1,
          explain: "After receiving the duct from the seminal vesicle, it opens into the urethra as the ejaculatory duct.",
        },
        {
          kind: "truefalse",
          q: "The presence of an intact hymen is a reliable indicator of virginity.",
          answer: false,
          explain: "The hymen can tear from a fall, tampon use or sports, and may persist after coitus; it is not a reliable indicator.",
        },
        {
          kind: "multi",
          q: "Which are accessory glands of the male reproductive system?",
          options: ["Seminal vesicles", "Prostate", "Bulbourethral glands", "Epididymis"],
          answers: [0, 1, 2],
          explain: "The epididymis is an accessory duct, not a gland.",
        },
        {
          kind: "order",
          q: "Arrange the male accessory ducts in the order sperm pass through them.",
          items: ["Rete testis", "Vasa efferentia", "Epididymis", "Vas deferens"],
          explain: "Rete testis → vasa efferentia → epididymis → vas deferens.",
        },
        {
          kind: "mcq",
          q: "The layer of the uterus that shows cyclical changes during the menstrual cycle is:",
          options: ["Perimetrium", "Myometrium", "Endometrium", "Cervix"],
          answer: 2,
          explain: "The glandular endometrium regenerates, thickens and sheds every cycle.",
        },
        {
          kind: "numeric",
          q: "About how many testicular lobules does each human testis have?",
          answer: 250,
          tolerance: 10,
          explain: "NCERT: each testis has about 250 compartments called testicular lobules, each with one to three seminiferous tubules.",
        },
        {
          kind: "fill",
          q: "Each breast has 15–20 mammary lobes containing clusters of cells called ___, which secrete milk.",
          answer: ["alveoli"],
          explain: "Alveoli open into mammary tubules.",
        },
      ],
    },

    /* ---------------- Lesson 2: gametogenesis ---------------- */
    {
      slug: "c12-spermatogenesis-oogenesis",
      title: "Gametogenesis: Spermatogenesis and Oogenesis",
      summary:
        "How sperm and ova are made, the hormones controlling spermatogenesis, the structure of a sperm and the stages of follicle development.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "**Gametogenesis** is the formation of haploid gametes from diploid germ cells. In males it is **spermatogenesis** (in the testes); in females it is **oogenesis** (in the ovaries). Human somatic cells and germ cells have **46 chromosomes (2n)**; gametes have **23 (n)**.",
        },
        {
          type: "heading",
          text: "Spermatogenesis",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Spermatogenesis starts at **puberty**. **Spermatogonia** (2n = 46) on the inside wall of the seminiferous tubules multiply by **mitosis**.",
            "Some spermatogonia, now called **primary spermatocytes** (2n), undergo **meiosis I**, giving two equal haploid **secondary spermatocytes** (n = 23 chromosomes each).",
            "Secondary spermatocytes undergo **meiosis II**, giving four equal haploid **spermatids**.",
            "Spermatids change into **spermatozoa (sperm)**: this is **spermiogenesis**.",
            "Sperm heads stay embedded in Sertoli cells and are finally released from the seminiferous tubules: this is **spermiation**.",
          ],
        },
        {
          type: "table",
          headers: ["Hormone", "Source", "Acts on", "Effect"],
          rows: [
            ["GnRH", "Hypothalamus (rises markedly at puberty)", "Anterior pituitary", "Stimulates secretion of LH and FSH"],
            ["LH", "Anterior pituitary", "Leydig cells", "Stimulates synthesis and secretion of androgens, which stimulate spermatogenesis"],
            ["FSH", "Anterior pituitary", "Sertoli cells", "Stimulates secretion of factors that help spermiogenesis"],
          ],
        },
        {
          type: "text",
          md: "**Structure of a sperm.** A sperm is a microscopic structure with a **head, neck, middle piece and tail**, enveloped by a plasma membrane. The head has an elongated **haploid nucleus**, and its anterior part is covered by a cap-like **acrosome** filled with enzymes that help fertilisation. The **middle piece** has numerous **mitochondria**, which produce energy for the movement of the **tail**.\n\nA man ejaculates about **200–300 million** sperm in one coitus. For normal fertility, at least **60%** should have normal shape and size, and at least **40%** should show vigorous motility. Sperm + seminal plasma = **semen**.",
        },
        {
          type: "heading",
          text: "Oogenesis",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Oogenesis begins during **embryonic development**: a couple of million **oogonia** form in each fetal ovary. **No more oogonia are formed or added after birth.**",
            "Oogonia start dividing, enter **prophase I of meiosis** and are **arrested** there. They are now **primary oocytes**.",
            "Each primary oocyte is surrounded by a layer of **granulosa cells**: a **primary follicle**. Many follicles degenerate from birth to puberty, so only **60,000–80,000** primary follicles remain in each ovary at puberty.",
            "Primary follicles gain more layers of granulosa and a new **theca**: **secondary follicles**.",
            "A fluid-filled cavity, the **antrum**, appears: **tertiary follicle**. The theca forms an inner **theca interna** and outer **theca externa**.",
            "Inside the tertiary follicle the primary oocyte grows and **completes meiosis I** by an **unequal division**: a large haploid **secondary oocyte** and a tiny **first polar body**. The secondary oocyte keeps the bulk of the nutrient-rich cytoplasm.",
            "The tertiary follicle becomes the mature **Graafian follicle**. The secondary oocyte forms a new membrane, the **zona pellucida**.",
            "The Graafian follicle ruptures to release the secondary oocyte (ovum) from the ovary: **ovulation**. Meiosis II is completed only if a sperm enters, giving the ovum and a **second polar body**.",
          ],
        },
        {
          type: "table",
          headers: ["Feature", "Spermatogenesis", "Oogenesis"],
          rows: [
            ["Begins", "At puberty", "Before birth (fetal ovary)"],
            ["Products of one primary cell", "4 functional sperm", "1 ovum + polar bodies"],
            ["Meiosis I division", "Equal", "Unequal (first polar body)"],
            ["Meiosis II", "Completed in the testis", "Completed only after sperm entry"],
            ["Continues", "Into old age", "Stops at menopause (about 50 years)"],
          ],
        },
        {
          type: "example",
          title: "Counting gametes",
          problem: "(a) How many sperm are formed from 30 primary spermatocytes? (b) How many ova from 30 primary oocytes? (c) How many sperm from 30 spermatids?",
          steps: [
            "(a) Each primary spermatocyte gives 2 secondary spermatocytes, each giving 2 spermatids → 4 sperm. 30 × 4 = 120.",
            "(b) Each primary oocyte gives only 1 ovum (the rest are polar bodies). 30 × 1 = 30.",
            "(c) A spermatid only changes shape (spermiogenesis); it does not divide. 30 spermatids → 30 sperm.",
          ],
          answer: "(a) 120 sperm, (b) 30 ova, (c) 30 sperm.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "At which stage is the primary oocyte arrested until puberty?",
              options: ["Metaphase II", "Prophase I", "Anaphase I", "Interphase"],
              answer: 1,
              explain: "Oogonia enter prophase I of meiosis and are temporarily arrested there as primary oocytes.",
            },
            {
              kind: "numeric",
              q: "How many chromosomes are present in a human secondary spermatocyte?",
              answer: 23,
              explain: "Meiosis I halves the chromosome number: 46 → 23.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The ovum released at ovulation is a mature ovum that has completed meiosis.",
          right: "At ovulation a secondary oocyte is released. It completes meiosis II only after a sperm enters it.",
          why: "We call it the 'ovum' for convenience, so it sounds finished. In fact meiosis II is triggered by sperm entry, and only then is the second polar body released.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Order the stages of follicle development.",
            items: ["Primary follicle", "Secondary follicle", "Tertiary follicle with antrum", "Graafian follicle", "Ovulation", "Corpus luteum"],
            explain: "Granulosa layers and theca are added, then the antrum forms, the follicle matures, ruptures at ovulation, and its remains form the corpus luteum.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Spermatogonia (2n) → primary spermatocyte → 2 secondary spermatocytes (n) → 4 spermatids → sperm.",
            "LH → Leydig cells → androgens; FSH → Sertoli cells → spermiogenesis factors.",
            "Oogonia form only before birth; primary oocytes arrest in prophase I.",
            "Primary → secondary → tertiary (antrum) → Graafian follicle; secondary oocyte released at ovulation.",
            "Sperm entry triggers meiosis II and the second polar body.",
          ],
        },
      ],
      flashcards: [
        { front: "Spermiogenesis", back: "Transformation of spermatids into spermatozoa." },
        { front: "Spermiation", back: "Release of sperm from the seminiferous tubules." },
        { front: "Role of LH in males", back: "Acts on Leydig cells to stimulate androgen synthesis and secretion." },
        { front: "Role of FSH in males", back: "Acts on Sertoli cells to secrete factors that help spermiogenesis." },
        { front: "Acrosome", back: "Cap over the sperm head filled with enzymes that help fertilisation." },
        { front: "Primary follicles left at puberty", back: "About 60,000–80,000 in each ovary." },
        { front: "Antrum", back: "Fluid-filled cavity that marks the tertiary follicle." },
        { front: "Zona pellucida", back: "New membrane formed by the secondary oocyte in the Graafian follicle." },
        { front: "Normal fertility criteria", back: "At least 60% sperm of normal shape and size; at least 40% with vigorous motility." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which division in spermatogenesis produces the secondary spermatocytes?",
          options: ["Mitosis of spermatogonia", "Meiosis I of primary spermatocytes", "Meiosis II of secondary spermatocytes", "Spermiogenesis"],
          answer: 1,
          explain: "Meiosis I of the primary spermatocyte gives two haploid secondary spermatocytes.",
        },
        {
          kind: "mcq",
          q: "Mitochondria in a sperm are located in the:",
          options: ["Head", "Acrosome", "Middle piece", "Tail tip"],
          answer: 2,
          explain: "The middle piece has numerous mitochondria that supply energy for tail movement.",
        },
        {
          kind: "numeric",
          q: "How many sperm are formed from 64 secondary spermatocytes?",
          answer: 128,
          explain: "Each secondary spermatocyte undergoes meiosis II to give 2 spermatids → 2 sperm. 64 × 2 = 128.",
          difficulty: 2,
          hint: "Secondary spermatocytes have already finished meiosis I.",
        },
        {
          kind: "truefalse",
          q: "New oogonia are added to the ovary throughout a woman's reproductive life.",
          answer: false,
          explain: "No oogonia are formed or added after birth.",
        },
        {
          kind: "mcq",
          q: "The first polar body is formed:",
          options: ["At birth, inside the primary follicle", "When the primary oocyte completes meiosis I in the tertiary follicle", "When the sperm enters the oocyte", "During menstruation"],
          answer: 1,
          explain: "The primary oocyte in the tertiary follicle completes meiosis I unequally, giving the secondary oocyte and the first polar body.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements about oogenesis are correct?",
          options: ["The meiotic divisions are unequal", "It starts before birth", "One primary oocyte gives four ova", "Meiosis II is completed after sperm entry"],
          answers: [0, 1, 3],
          explain: "One primary oocyte gives only one ovum; the other products are polar bodies.",
        },
        {
          kind: "order",
          q: "Arrange the stages of spermatogenesis.",
          items: ["Spermatogonium", "Primary spermatocyte", "Secondary spermatocyte", "Spermatid", "Spermatozoon"],
          explain: "Mitosis, meiosis I, meiosis II, then spermiogenesis.",
        },
        {
          kind: "fill",
          q: "The hypothalamic hormone whose rise at puberty starts spermatogenesis is ___.",
          answer: ["GnRH", "gonadotropin releasing hormone", "gonadotrophin releasing hormone"],
          explain: "GnRH stimulates the anterior pituitary to release LH and FSH.",
        },
      ],
    },

    /* ---------------- Lesson 3: menstrual cycle ---------------- */
    {
      slug: "c12-menstrual-cycle-hormones",
      title: "The Menstrual Cycle and its Hormones",
      summary:
        "Menarche and menopause, the four phases of the cycle, and how GnRH, FSH, LH, estrogen and progesterone change through it.",
      minutes: 20,
      xp: 50,
      blocks: [
        {
          type: "illustration",
          emoji: "📅",
          caption: "A calendar with day 1 circled: the cycle is counted from the first day of menstrual flow.",
        },
        {
          type: "text",
          md: "The reproductive cycle of female primates (monkeys, apes, humans) is the **menstrual cycle**. The first menstruation at puberty is **menarche**. In human females, menstruation repeats at an average interval of about **28/29 days**, and the events from one menstruation to the next make up one menstrual cycle. One ovum is usually released (**ovulation**) in the middle of each cycle.\n\nThe cycle stops at about **50 years** of age: **menopause**. Cyclic menstruation is an indicator of normal reproductive phase.",
        },
        {
          type: "table",
          headers: ["Phase (typical days)", "Pituitary", "Ovary", "Uterus (endometrium)"],
          rows: [
            ["**Menstrual** (days 1–5; lasts 3–5 days)", "LH and FSH low", "No functional corpus luteum; estrogen and progesterone low", "Endometrial lining and its blood vessels break down; flow out through the vagina"],
            ["**Follicular / proliferative** (about days 5–13)", "FSH and LH rise gradually", "Primary follicles grow into a Graafian follicle; growing follicles secrete **estrogen**", "Endometrium regenerates by proliferation"],
            ["**Ovulatory** (about day 14)", "**LH surge**; LH and FSH both peak", "Graafian follicle ruptures; secondary oocyte released", "Thick, well developed"],
            ["**Luteal / secretory** (about days 15–28)", "LH and FSH fall", "Remains of the Graafian follicle form the **corpus luteum**, which secretes large amounts of **progesterone**", "Progesterone maintains the endometrium, ready for implantation"],
          ],
        },
        {
          type: "text",
          md: "The changes in the ovary and uterus are controlled by **pituitary and ovarian hormones**. **GnRH** from the hypothalamus stimulates the anterior pituitary to release **FSH** and **LH**. During the follicular phase both gonadotropins rise gradually, stimulating follicle development and estrogen secretion. In the middle of the cycle both reach a peak; the rapid secretion of LH, the **LH surge**, induces rupture of the Graafian follicle and so **ovulation**.\n\nIf fertilisation does not happen, the **corpus luteum degenerates**, progesterone falls, and the endometrium disintegrates: a new menstrual flow starts. If fertilisation and implantation do happen, the corpus luteum is maintained, the endometrium stays, and **menstruation stops** during pregnancy.",
        },
        {
          type: "formula",
          tex: t`\text{GnRH} \rightarrow \text{FSH, LH} \rightarrow \text{follicle} + \text{estrogen} \xrightarrow{\text{LH surge (day 14)}} \text{ovulation} \rightarrow \text{corpus luteum} \rightarrow \text{progesterone}`,
          caption: "The hormone sequence of one cycle. Falling progesterone (when the corpus luteum degenerates) triggers menstruation.",
        },
        {
          type: "example",
          title: "Applying the cycle",
          problem: "Meera has a regular 28-day cycle. Her last period started on 1 March. (a) On about which date will she ovulate? (b) Which hormone peaks just before that? (c) If no fertilisation occurs, why does her next period start around 29 March?",
          steps: [
            "Day 1 = 1 March, so day 14 ≈ 14 March: ovulation.",
            "Ovulation is induced by the LH surge (FSH also peaks).",
            "After ovulation, the corpus luteum secretes progesterone. Without fertilisation it degenerates; progesterone falls and the endometrium breaks down about 14 days later, around day 29 = 29 March (day 1 of the next cycle).",
          ],
          answer: "(a) About 14 March, (b) LH (the LH surge), (c) the corpus luteum degenerates, progesterone falls and the endometrium sheds.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which hormone maintains the endometrium in the luteal phase?",
              options: ["FSH", "LH", "Progesterone", "Oxytocin"],
              answer: 2,
              explain: "The corpus luteum secretes large amounts of progesterone, essential for maintaining the endometrium.",
            },
            {
              kind: "truefalse",
              q: "Menstruation occurs only if the released ovum is not fertilised.",
              answer: true,
              explain: "Without fertilisation the corpus luteum degenerates; this leads to breakdown of the endometrium.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Ovulation is caused by a sudden rise in progesterone.",
          right: "Ovulation is induced by the LH surge in the middle of the cycle. Progesterone rises after ovulation, from the corpus luteum.",
          why: "Students remember that progesterone is the 'pregnancy hormone' and assume it controls every event. The order is LH surge → ovulation → corpus luteum → progesterone.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each phase with its key event.",
            pairs: [
              ["Menstrual phase", "Endometrium breaks down"],
              ["Follicular phase", "Graafian follicle develops; estrogen rises"],
              ["Ovulatory phase", "LH surge ruptures the follicle"],
              ["Luteal phase", "Corpus luteum secretes progesterone"],
            ],
            explain: "Each phase is named after what happens in the ovary or uterus: follicle growth, ovulation, corpus luteum (luteal), or menstrual flow.",
          },
        },
        {
          type: "callout",
          tone: "note",
          title: "Lack of menstruation",
          md: "Absence of menstruation may indicate **pregnancy**. It may also be caused by other underlying factors such as **stress** or **poor health**. During the first few months after delivery, intense breastfeeding also delays the return of the cycle (used as a natural contraceptive method; see Reproductive Health).",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "The diagram of menstrual cycle events (pituitary hormones, ovarian hormones, follicle stages and endometrial thickness against days 1–28) is a frequent 5-mark question. Show LH and FSH peaking at day 14, estrogen peaking just before, and progesterone high in days 15–28.",
        },
        {
          type: "keypoints",
          items: [
            "Menarche = first menstruation; menopause ≈ 50 years; cycle ≈ 28/29 days.",
            "Menstrual (3–5 days), follicular/proliferative, ovulatory (day 14), luteal/secretory phases.",
            "FSH and LH rise in the follicular phase; LH surge → ovulation.",
            "Corpus luteum → progesterone → endometrium maintained.",
            "No fertilisation → corpus luteum degenerates → menstruation.",
          ],
        },
      ],
      flashcards: [
        { front: "Menarche", back: "The first menstruation at puberty." },
        { front: "Menopause", back: "End of menstrual cycles, at about 50 years of age." },
        { front: "LH surge", back: "Rapid mid-cycle rise in LH that ruptures the Graafian follicle (ovulation)." },
        { front: "Hormone secreted by growing follicles", back: "Estrogen." },
        { front: "Corpus luteum", back: "Remains of the ruptured Graafian follicle; secretes progesterone." },
        { front: "Proliferative phase is another name for", back: "The follicular phase (endometrium regenerates)." },
        { front: "Secretory phase is another name for", back: "The luteal phase." },
        { front: "What causes menstrual flow to start?", back: "Degeneration of the corpus luteum and fall in progesterone when there is no fertilisation." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "In a 28-day cycle, ovulation generally occurs on about:",
          options: ["Day 5", "Day 14", "Day 21", "Day 28"],
          answer: 1,
          explain: "LH and FSH peak in the middle of the cycle, about day 14.",
        },
        {
          kind: "mcq",
          q: "Which phase of the cycle is also called the proliferative phase?",
          options: ["Menstrual", "Follicular", "Luteal", "Secretory"],
          answer: 1,
          explain: "In the follicular phase the endometrium regenerates by proliferation.",
        },
        {
          kind: "multi",
          q: "Which hormones reach their peak in the middle of the menstrual cycle?",
          options: ["LH", "FSH", "Progesterone", "hCG"],
          answers: [0, 1],
          explain: "Both gonadotropins peak mid-cycle. Progesterone peaks in the luteal phase; hCG is made only in pregnancy.",
        },
        {
          kind: "truefalse",
          q: "The menstrual phase lasts for 3–5 days.",
          answer: true,
          explain: "NCERT gives 3–5 days for menstrual flow.",
        },
        {
          kind: "mcq",
          q: "Removal of the corpus luteum in the luteal phase would most likely cause:",
          options: ["Immediate ovulation", "Early breakdown of the endometrium", "Rise in progesterone", "Thickening of the endometrium"],
          answer: 1,
          explain: "Without the corpus luteum, progesterone falls and the endometrium cannot be maintained.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A woman has a regular 28-day cycle. If menstruation begins on day 1, on which day of the cycle is the LH surge expected?",
          answer: 14,
          explain: "The mid-cycle LH surge occurs about day 14 of a 28-day cycle.",
        },
        {
          kind: "fill",
          q: "The reproductive cycle in female primates is called the ___ cycle.",
          answer: ["menstrual"],
          explain: "Non-primate mammals have an oestrous cycle instead.",
        },
        {
          kind: "order",
          q: "Arrange the events of one cycle in order, starting with day 1.",
          items: ["Menstrual flow", "Follicle growth and estrogen rise", "LH surge", "Ovulation", "Corpus luteum secretes progesterone"],
          explain: "Menstruation → follicular phase → LH surge → ovulation → luteal phase.",
        },
      ],
    },

    /* ---------------- Lesson 4: fertilisation to lactation ---------------- */
    {
      slug: "c12-fertilisation-pregnancy-parturition",
      title: "Fertilisation, Implantation, Pregnancy, Parturition and Lactation",
      summary:
        "Where and how fertilisation happens, sex determination, cleavage, blastocyst and implantation, the placenta and its hormones, fetal development month by month, birth and breastfeeding.",
      minutes: 25,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "During coitus, semen is released by the penis into the vagina: **insemination**. Motile sperm swim through the cervix, enter the uterus and reach the **ampullary region** of the fallopian tube. The ovum released by the ovary is also carried to the ampullary region. Fertilisation can happen only if the ovum and sperm reach the ampullary region **at the same time**. That is why not all copulations lead to fertilisation and pregnancy.\n\nThe fusion of a sperm with an ovum is **fertilisation**. A sperm contacts the **zona pellucida** of the ovum and induces changes in the membrane that **block the entry of additional sperm**, so only one sperm fertilises the ovum. Secretions of the **acrosome** help the sperm enter the cytoplasm of the ovum through the zona pellucida and plasma membrane. Sperm entry induces the **completion of meiosis II** of the secondary oocyte, forming a haploid ovum (ootid) and a second polar body. The haploid nucleus of the sperm and that of the ovum fuse to form the diploid **zygote**.",
        },
        {
          type: "table",
          headers: ["Parent", "Gametes produced", "Result"],
          rows: [
            ["Mother (XX)", "All ova carry X", "–"],
            ["Father (XY)", "50% sperm carry X, 50% carry Y", "–"],
            ["X sperm + X ovum", "–", "XX zygote: female"],
            ["Y sperm + X ovum", "–", "XY zygote: male"],
          ],
        },
        {
          type: "callout",
          tone: "fact",
          title: "Sex is decided by the sperm",
          md: "The sex of the baby is decided at fertilisation by whether an X- or Y-bearing sperm fuses with the ovum, so it is the **father's** gamete that determines sex. The probability of a boy or a girl at each pregnancy is **50%**.",
        },
        {
          type: "heading",
          text: "Cleavage and implantation",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "The zygote divides by **mitosis** (**cleavage**) as it moves through the **isthmus** towards the uterus, forming 2, 4, 8, 16 daughter cells called **blastomeres**.",
            "The embryo with **8 to 16 blastomeres** is a **morula**.",
            "The morula keeps dividing and becomes a **blastocyst** as it moves further into the uterus.",
            "In the blastocyst the blastomeres form an outer layer, the **trophoblast**, and an inner group attached to it, the **inner cell mass**.",
            "The trophoblast attaches to the **endometrium**; the inner cell mass gets differentiated as the embryo.",
            "Uterine cells divide rapidly and cover the blastocyst, which becomes embedded in the endometrium: **implantation**. This leads to pregnancy.",
          ],
        },
        {
          type: "text",
          md: "**Placenta.** After implantation, finger-like projections called **chorionic villi** appear on the trophoblast, surrounded by uterine tissue and maternal blood. The chorionic villi and uterine tissue **interdigitate** to form a structural and functional unit between the embryo (fetus) and the mother: the **placenta**. It supplies oxygen and nutrients to the embryo and removes carbon dioxide and wastes. It is connected to the embryo by the **umbilical cord**.\n\nThe placenta also acts as an **endocrine tissue**, producing **hCG** (human chorionic gonadotropin), **hPL** (human placental lactogen), estrogens and progestogens. In late pregnancy the **ovary** secretes **relaxin**. **hCG, hPL and relaxin are produced only during pregnancy.** Levels of other hormones such as estrogens, progestogens, cortisol, prolactin and thyroxine also rise several fold in the mother's blood; these support fetal growth, maternal metabolic changes and maintenance of pregnancy.",
        },
        {
          type: "text",
          md: "**Embryonic development.** Immediately after implantation, the inner cell mass differentiates into three **germ layers**: outer **ectoderm**, middle **mesoderm** and inner **endoderm**. All tissues and organs form from these. The inner cell mass contains **stem cells**, which can give rise to all tissues and organs. Human pregnancy lasts about **9 months**.",
        },
        {
          type: "table",
          headers: ["Time", "Development"],
          rows: [
            ["End of 1st month", "Heart forms; the first sign of a growing fetus can be noticed by listening to the heart sound with a stethoscope"],
            ["End of 2nd month", "Limbs and digits develop"],
            ["End of 12 weeks (1st trimester)", "Most major organ systems formed; limbs and external genital organs well developed"],
            ["5th month", "First movements of the fetus; hair appears on the head"],
            ["End of 24 weeks (2nd trimester)", "Body covered with fine hair; eyelids separate; eyelashes form"],
            ["End of 9 months", "Fetus fully developed and ready for delivery"],
          ],
        },
        {
          type: "text",
          md: "**Parturition** (birth) happens through vigorous contraction of the uterus at the end of pregnancy. It is induced by a complex **neuroendocrine mechanism**. Signals from the fully developed fetus and the placenta induce mild uterine contractions, called the **fetal ejection reflex**. This triggers the release of **oxytocin** from the maternal pituitary. Oxytocin acts on the uterine muscle and causes stronger contractions, which in turn stimulate further secretion of oxytocin. The stimulus–contraction cycle continues, giving stronger and stronger contractions until the baby is expelled through the birth canal. Soon after, the placenta is also expelled.\n\n**Lactation.** The mammary glands differentiate during pregnancy and start producing milk towards the end of pregnancy. The milk produced in the first few days after birth is **colostrum**, which contains several **antibodies** essential to develop resistance in the newborn. Breastfeeding in the initial period of infant growth is recommended by doctors for bringing up a healthy baby.",
        },
        {
          type: "example",
          title: "Timing a pregnancy event",
          problem: "A doctor hears the fetal heartbeat for the first time with a stethoscope and notes that limbs and digits have not yet formed. Approximately how old is the pregnancy, and what has already happened in the uterus?",
          steps: [
            "The heart forms by the end of the first month; its sound is the first sign of a growing fetus.",
            "Limbs and digits develop by the end of the second month, so the pregnancy is between one and two months.",
            "Before this, the blastocyst implanted in the endometrium, the placenta formed from chorionic villi and uterine tissue, and the inner cell mass formed the three germ layers.",
          ],
          answer: "About one month (end of the first month); implantation, placenta formation and germ-layer formation have already occurred.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "The embryo with 8–16 blastomeres is called the:",
              options: ["Blastocyst", "Morula", "Gastrula", "Trophoblast"],
              answer: 1,
              explain: "8–16 blastomeres = morula; further division gives the blastocyst.",
            },
            {
              kind: "multi",
              q: "Which hormones are produced only during pregnancy?",
              options: ["hCG", "hPL", "Relaxin", "Prolactin"],
              answers: [0, 1, 2],
              explain: "hCG, hPL and relaxin are pregnancy-specific. Prolactin is present outside pregnancy too; its level rises in pregnancy.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "The inner cell mass attaches to the endometrium during implantation.",
          right: "The outer trophoblast layer attaches to the endometrium. The inner cell mass becomes the embryo.",
          why: "Students think the part that becomes the baby must hold on to the mother. In fact the trophoblast does the attaching and later forms the chorionic villi of the placenta.",
        },
        {
          type: "activity",
          activity: {
            kind: "order",
            prompt: "Arrange the events from fertilisation to birth.",
            items: ["Fertilisation in the ampullary region", "Cleavage and morula", "Blastocyst formation", "Implantation", "Placenta and germ layers form", "Parturition"],
            explain: "The zygote cleaves while moving down the tube, implants as a blastocyst, then the placenta and germ layers form, and birth follows after about nine months.",
          },
        },
        {
          type: "keypoints",
          items: [
            "Fertilisation occurs in the ampullary region; the zona pellucida blocks polyspermy.",
            "Sperm entry completes meiosis II; the father's X or Y sperm decides sex.",
            "Zygote → morula (8–16 blastomeres) → blastocyst (trophoblast + inner cell mass) → implantation.",
            "Placenta = chorionic villi + uterine tissue; hCG, hPL, relaxin only in pregnancy.",
            "Fetal ejection reflex → oxytocin → stronger contractions → birth; colostrum carries antibodies.",
          ],
        },
      ],
      flashcards: [
        { front: "Site of fertilisation", back: "Ampullary region of the fallopian tube." },
        { front: "What blocks polyspermy?", back: "Changes in the zona pellucida membrane induced by the first sperm." },
        { front: "Morula", back: "Embryo with 8–16 blastomeres." },
        { front: "Trophoblast", back: "Outer layer of the blastocyst; attaches to the endometrium." },
        { front: "Inner cell mass", back: "Cells of the blastocyst that form the embryo; contain stem cells." },
        { front: "Hormones made only in pregnancy", back: "hCG, hPL and relaxin." },
        { front: "Fetal ejection reflex", back: "Mild uterine contractions triggered by signals from the mature fetus and placenta; triggers oxytocin release." },
        { front: "Colostrum", back: "First milk after birth, rich in antibodies." },
        { front: "First fetal movements", back: "Usually during the fifth month of pregnancy." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which structure produces relaxin in late pregnancy?",
          options: ["Placenta", "Ovary", "Pituitary", "Uterus"],
          answer: 1,
          explain: "NCERT: in the later phase of pregnancy the ovary secretes relaxin.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Chorionic villi develop from the:",
          options: ["Inner cell mass", "Trophoblast", "Endoderm", "Myometrium"],
          answer: 1,
          explain: "Finger-like chorionic villi appear on the trophoblast after implantation.",
        },
        {
          kind: "truefalse",
          q: "Sperm entry into the secondary oocyte induces completion of its second meiotic division.",
          answer: true,
          explain: "Meiosis II finishes only after sperm entry, giving the ovum and the second polar body.",
        },
        {
          kind: "mcq",
          q: "By the end of the first trimester:",
          options: ["Only the heart has formed", "Most major organ systems are formed", "Eyelashes form", "The body is covered with fine hair"],
          answer: 1,
          explain: "By 12 weeks most major organ systems are formed and limbs and external genitalia are well developed.",
        },
        {
          kind: "numeric",
          q: "A couple has two daughters. What is the probability (in %) that their third child will be a boy?",
          answer: 50,
          unit: "%",
          explain: "Each fertilisation is independent; half the sperm carry Y, so the chance is 50%.",
        },
        {
          kind: "fill",
          q: "The hormone released from the maternal pituitary that causes strong uterine contractions during parturition is ___.",
          answer: ["oxytocin"],
          explain: "Oxytocin is released in response to the fetal ejection reflex.",
        },
        {
          kind: "order",
          q: "Arrange the stages of early development.",
          items: ["Zygote", "2-celled embryo", "Morula", "Blastocyst"],
          explain: "Cleavage gives blastomeres; 8–16 cells = morula; then blastocyst.",
        },
        {
          kind: "mcq",
          q: "Why is breastfeeding with colostrum recommended for a newborn?",
          options: ["It is rich in fat only", "It contains antibodies that help develop resistance", "It contains hCG", "It prevents jaundice"],
          answer: 1,
          explain: "Colostrum has several antibodies essential for the newborn's resistance.",
        },
      ],
    },

    /* ---------------- Exam edge ---------------- */
    {
      slug: "c12-human-reproduction-exam-edge",
      title: "Exam edge: Human Reproduction",
      summary:
        "NEET and KCET favourites: gametogenesis counting, the menstrual hormone table, the order of developmental events, NCERT numbers and assertion–reason reasoning.",
      minutes: 25,
      xp: 60,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** usually asks 3–5 questions from Human Reproduction: cells of the testis, the duct order, oogenesis stages and arrests, menstrual cycle hormones, site of fertilisation, morula/blastocyst, placental hormones, and the month-by-month development table. **KCET** asks direct NCERT numbers (250 lobules, 60,000–80,000 follicles, 200–300 million sperm). Many questions are 'match the column' and 'how many statements are correct'.",
        },
        {
          type: "table",
          headers: ["Hormone", "Source", "Peak / high in", "Main role"],
          rows: [
            ["GnRH", "Hypothalamus", "Puberty onwards", "Releases FSH and LH"],
            ["FSH", "Anterior pituitary", "Rises in follicular phase; peaks mid-cycle", "Follicle growth (female); Sertoli cells (male)"],
            ["LH", "Anterior pituitary", "**Surge** at day 14", "Ovulation; corpus luteum; Leydig cells (male)"],
            ["Estrogen", "Growing follicles", "Late follicular phase", "Endometrial proliferation"],
            ["Progesterone", "Corpus luteum (later placenta)", "Luteal phase", "Maintains endometrium"],
            ["hCG, hPL", "Placenta", "Pregnancy only", "Maintain pregnancy; maternal metabolism"],
            ["Relaxin", "Ovary", "Late pregnancy only", "Supports birth"],
            ["Oxytocin", "Maternal pituitary", "Parturition, lactation", "Uterine contractions; milk ejection"],
          ],
        },
        {
          type: "formula",
          tex: t`1 \text{ primary spermatocyte} \rightarrow 4 \text{ sperm} \qquad 1 \text{ primary oocyte} \rightarrow 1 \text{ ovum} + \text{polar bodies}`,
          caption: "Count from the stage named: 1 secondary spermatocyte → 2 sperm; 1 spermatid → 1 sperm; 1 secondary oocyte → 1 ovum.",
        },
        {
          type: "list",
          items: [
            "NCERT number: about **250** testicular lobules; **1–3** seminiferous tubules per lobule.",
            "NCERT number: testis **4–5 cm** × **2–3 cm**; ovary **2–4 cm**; oviduct **10–12 cm**.",
            "NCERT number: **200–300 million** sperm per ejaculate; **60%** normal shape, **40%** vigorous motility.",
            "NCERT number: **60,000–80,000** primary follicles per ovary at puberty; **15–20** mammary lobes.",
            "NCERT line: hCG, hPL and relaxin are produced **only during pregnancy**.",
            "NCERT line: the first sign of the growing fetus is the **heart sound** (end of 1st month).",
          ],
        },
        {
          type: "example",
          title: "NEET level: counting",
          problem: "How many sperm and ova are formed from 100 primary spermatocytes and 100 primary oocytes respectively, and how many polar bodies in total (assume the first polar body does not divide and every oocyte is fertilised)?",
          steps: [
            "Sperm: 100 × 4 = 400.",
            "Ova: 100 × 1 = 100.",
            "Each primary oocyte gives the first polar body at meiosis I and the second polar body after sperm entry: 2 per oocyte if the first does not divide.",
            "Polar bodies = 100 × 2 = 200.",
          ],
          answer: "400 sperm, 100 ova and 200 polar bodies.",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: The testes are located outside the abdominal cavity in the scrotum. R: The scrotum maintains the temperature of the testes 2–2.5 °C lower than the internal body temperature, which is necessary for spermatogenesis.",
          steps: [
            "A is true (NCERT).",
            "R is true (NCERT).",
            "R gives the reason for the location: spermatogenesis needs a lower temperature, so R explains A.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Statement analysis",
          problem: "How many statements are correct? (i) Oogonia are formed during fetal life. (ii) The secondary oocyte is released at ovulation. (iii) The corpus luteum secretes large amounts of estrogen and maintains the endometrium. (iv) The morula has 8–16 blastomeres.",
          steps: [
            "(i) True: oogonia form in the fetal ovary; none are added after birth.",
            "(ii) True.",
            "(iii) False: the corpus luteum secretes large amounts of progesterone, which maintains the endometrium.",
            "(iv) True.",
          ],
          answer: "Three statements, (i), (ii) and (iv), are correct.",
        },
        {
          type: "example",
          title: "Harder: hormone reasoning",
          problem: "A drug blocks the mid-cycle LH surge in a woman with a 28-day cycle, while FSH and estrogen follow their usual follicular pattern. Predict (a) ovulation, (b) corpus luteum formation, (c) progesterone in days 15–28.",
          steps: [
            "(a) The LH surge is what induces rupture of the Graafian follicle, so ovulation will not occur.",
            "(b) The corpus luteum forms from the remains of a ruptured follicle; no rupture, so no corpus luteum.",
            "(c) Without the corpus luteum there is no large progesterone secretion in the luteal phase; progesterone stays low.",
          ],
          answer: "No ovulation, no corpus luteum, and low progesterone. This is the basis of the anovulatory action of contraceptive pills.",
        },
        {
          type: "mistake",
          wrong: "Fertilisation takes place in the uterus, where implantation happens.",
          right: "Fertilisation takes place in the ampullary region of the fallopian tube. Cleavage occurs as the zygote moves through the isthmus; implantation of the blastocyst happens in the uterus.",
          why: "The uterus is where the baby grows, so students assume everything starts there. The ovum is caught by the fimbriae and meets the sperm in the ampulla.",
        },
        {
          type: "mistake",
          wrong: "hCG is secreted by the ovary, and prolactin is a pregnancy-only hormone.",
          right: "hCG and hPL are secreted by the placenta and relaxin by the ovary; these three are pregnancy-only. Prolactin, estrogen, progesterone, cortisol and thyroxine only increase during pregnancy.",
          why: "NEET often mixes the source and the 'only in pregnancy' list. Learn them as two separate facts.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "How many sperm do 20 spermatids give?",
            emoji: "🔬",
            options: ["20", "40", "80", "10"],
            answer: 0,
            trap: 2,
            explain: "Spermatids do not divide; spermiogenesis only changes their shape. So 20 spermatids give 20 sperm. 80 would be the answer for 20 primary spermatocytes.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Menstruation occurs only if the released ovum is not fertilised. R: In the absence of fertilisation the corpus luteum degenerates, causing disintegration of the endometrium.",
              options: AR,
              answer: 0,
              explain: "Both are NCERT statements and R gives the mechanism for A.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Count from the named stage: 1 primary spermatocyte → 4 sperm; 1 spermatid → 1 sperm.",
            "LH surge → ovulation; progesterone comes from the corpus luteum.",
            "Pregnancy-only: hCG, hPL (placenta), relaxin (ovary).",
            "Fertilisation in the ampulla; implantation of the blastocyst in the endometrium.",
          ],
        },
      ],
      flashcards: [
        { front: "Sperm from 1 secondary spermatocyte", back: "Two." },
        { front: "Ova from 1 primary oocyte", back: "One (plus polar bodies)." },
        { front: "Source of relaxin", back: "Ovary, in late pregnancy." },
        { front: "Source of hCG and hPL", back: "Placenta." },
        { front: "Hormone causing ovulation", back: "LH (the LH surge)." },
        { front: "Primary follicles per ovary at puberty", back: "60,000–80,000." },
        { front: "Sperm per ejaculate", back: "200–300 million." },
        { front: "Gives first sign of a growing fetus", back: "Heart sound (end of first month)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A: The secondary oocyte remains arrested until a sperm enters it. R: Sperm entry induces completion of the second meiotic division.",
          options: AR,
          answer: 0,
          explain: "The secondary oocyte is arrested in meiosis II; sperm entry triggers its completion, so R explains A.",
        },
        {
          kind: "mcq",
          q: "A: Sertoli cells are called nurse cells. R: Sertoli cells secrete androgens under the influence of LH.",
          options: AR,
          answer: 2,
          explain: "A is true (they nourish germ cells). R is false: Leydig cells secrete androgens under LH; Sertoli cells respond to FSH.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "How many sperm are formed from 50 primary spermatocytes and 50 secondary spermatocytes together?",
          answer: 300,
          explain: "50 × 4 = 200 and 50 × 2 = 100; total 300.",
          difficulty: 2,
          hint: "Secondary spermatocytes have only meiosis II left.",
        },
        {
          kind: "mcq",
          q: "Match: (a) end of 2nd month (b) 5th month (c) end of 24 weeks (d) end of 12 weeks — with (i) eyelids separate (ii) limbs and digits (iii) most organ systems formed (iv) first movements.",
          options: ["a-ii, b-iv, c-i, d-iii", "a-iii, b-iv, c-i, d-ii", "a-ii, b-i, c-iv, d-iii", "a-iv, b-ii, c-iii, d-i"],
          answer: 0,
          explain: "Limbs and digits by month 2; first movements in month 5; eyelids separate by 24 weeks; organ systems by 12 weeks.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements are correct?",
          options: [
            "Spermatogenesis is initiated by an increase in GnRH at puberty",
            "The trophoblast forms the embryo proper",
            "Colostrum contains antibodies",
            "Seminal plasma is rich in fructose and calcium",
          ],
          answers: [0, 2, 3],
          explain: "The inner cell mass, not the trophoblast, forms the embryo.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Which sequence of hormones correctly matches the menstrual cycle from day 1 to day 28?",
          options: [
            "Estrogen peak → LH surge → progesterone rise",
            "Progesterone rise → LH surge → estrogen peak",
            "LH surge → estrogen peak → progesterone rise",
            "hCG rise → estrogen peak → LH surge",
          ],
          answer: 0,
          explain: "Growing follicles raise estrogen first; then the LH surge causes ovulation; then the corpus luteum raises progesterone.",
          difficulty: 3,
          hint: "Ovulation sits between follicle growth and corpus luteum formation.",
        },
        {
          kind: "numeric",
          q: "A semen sample has 250 million sperm. What is the minimum number (in millions) that must be of normal shape and size for normal fertility?",
          answer: 150,
          unit: "million",
          explain: "At least 60% must be normal: 0.6 × 250 = 150 million.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "If a fertilised ovum fails to implant, which change follows first?",
          options: ["hCG rises", "Corpus luteum degenerates", "Relaxin is secreted", "Oxytocin surges"],
          answer: 1,
          explain: "Without implantation no hCG is made to rescue the corpus luteum, so it degenerates and progesterone falls.",
          difficulty: 3,
          hint: "Which hormone signal from the embryo normally keeps the corpus luteum alive?",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Reproductive Health                                                 */
/* ------------------------------------------------------------------ */
const health: Topic = {
  slug: "c12-reproductive-health",
  title: "Reproductive Health",
  icon: "🩺",
  description:
    "Reproductive health and the strategies to improve it, population stabilisation and birth control, contraceptive methods, medical termination of pregnancy, sexually transmitted infections, infertility and assisted reproductive technologies.",
  lessons: [
    /* ---------------- Lesson 1: health, population, contraception ---------------- */
    {
      slug: "c12-reproductive-health-contraception",
      title: "Reproductive Health, Population Stabilisation and Contraception",
      summary:
        "What reproductive health means, India's programmes, reasons for population growth, the ideal contraceptive and every NCERT method of birth control with how it works.",
      minutes: 24,
      xp: 60,
      blocks: [
        {
          type: "text",
          md: "According to the **World Health Organisation (WHO)**, **reproductive health** means a total well-being in all aspects of reproduction: **physical, emotional, behavioural and social**. A society with people whose reproductive organs are physically and functionally normal, and who interact normally in all sex-related aspects, is reproductively healthy.\n\nIndia was among the first countries in the world to start action plans at the national level for total reproductive health. **Family planning** programmes began in **1951**. Improved programmes covering wider reproduction-related areas are now called **Reproductive and Child Health Care (RCH)** programmes.",
        },
        {
          type: "list",
          items: [
            "Creating **awareness** about reproduction-related aspects through audio-visual and print media, with help from governmental and non-governmental agencies; parents, teachers and close relatives also have a role.",
            "**Sex education in schools**, so that young people get correct information and myths and misconceptions are removed.",
            "Educating people, especially fertile couples and those in marriageable age groups, about **birth control** options, care of pregnant mothers, post-natal care of mother and child, the importance of breastfeeding, and **equal opportunities for the male and female child**.",
            "A **statutory ban on amniocentesis for sex determination**, to legally check female foeticide; and massive **child immunisation**.",
            "**Research** on reproduction-related areas, e.g. **Saheli**, a new oral contraceptive for females developed at the **Central Drug Research Institute (CDRI), Lucknow**.",
          ],
        },
        {
          type: "callout",
          tone: "note",
          title: "Amniocentesis",
          md: "**Amniocentesis** is a foetal test based on the chromosomal pattern in the **amniotic fluid** around the developing embryo. It can detect genetic disorders, but because it also reveals the sex of the foetus it was misused for sex determination; hence the statutory ban for that purpose.",
        },
        {
          type: "heading",
          text: "Population stabilisation",
        },
        {
          type: "text",
          md: "Better health facilities and living conditions caused a **population explosion**. The world population was about **2 billion in 1900**, about **6 billion by 2000** and **7.2 billion in 2011**. India's population was about **350 million at Independence**, came close to the billion mark by 2000 and crossed **1.2 billion in May 2011**.\n\nThe probable reasons are a rapid **decline in the death rate**, in the **maternal mortality rate (MMR)** and **infant mortality rate (IMR)**, and an increase in the number of people of **reproducible age**. Even though the 2011 census showed a growth rate below 2% (20 per 1000 per year), the absolute increase is huge. Steps taken: motivating smaller families with contraceptive methods, slogans such as **'Hum Do Hamare Do'**, and raising the **marriageable age to 18 years for females and 21 years for males**, with incentives for small families.",
        },
        {
          type: "text",
          md: "An **ideal contraceptive** should be **user-friendly**, easily available, effective and **reversible**, with **no or least side-effects**, and it should not interfere with sexual drive, desire or the sexual act.",
        },
        {
          type: "table",
          headers: ["Method", "Examples", "How it works"],
          rows: [
            ["**Natural**", "Periodic abstinence (avoid coitus on days 10–17, the fertile period); withdrawal (coitus interruptus); **lactational amenorrhea**", "Avoid meeting of ovum and sperm. Lactational amenorrhea: during intense breastfeeding ovulation and the cycle do not occur; effective only up to a **maximum of 6 months** after parturition. No side-effects, but high chance of failure"],
            ["**Barrier**", "Condoms (male, e.g. 'Nirodh'; female); diaphragms, cervical caps, vaults", "Physically stop sperm meeting the ovum. Condoms of thin rubber/latex also protect from STIs and AIDS. Diaphragms, caps and vaults cover the cervix and are **reusable**; spermicidal creams, jellies and foams are used with them"],
            ["**IUDs**", "Non-medicated (Lippes loop); copper-releasing (CuT, Cu7, Multiload 375); hormone-releasing (Progestasert, LNG-20)", "Increase **phagocytosis of sperm** in the uterus; **Cu ions suppress sperm motility** and fertilising capacity; hormone-releasing IUDs make the uterus unsuitable for implantation and the cervix hostile to sperm. Inserted by doctors or trained nurses; ideal for **spacing** children; widely accepted in India"],
            ["**Oral pills**", "Progestogen or progestogen–estrogen combinations; **Saheli** (non-steroidal, once a week)", "Inhibit **ovulation** and **implantation**, and alter cervical mucus to prevent or slow sperm entry. Taken daily for **21 days**, starting preferably within the first five days of the cycle, then a 7-day gap (when menstruation occurs)"],
            ["**Injections / implants**", "Progestogen alone or with estrogen, under the skin", "Same action as pills, but effective for much longer"],
            ["**Emergency**", "Progestogens, progestogen–estrogen combination, or an IUD within **72 hours** of coitus", "Used after rape or casual unprotected intercourse to avoid possible pregnancy"],
            ["**Surgical (sterilisation)**", "**Vasectomy** (male): small part of vas deferens removed or tied through a small incision on the scrotum. **Tubectomy** (female): small part of the fallopian tube removed or tied through a small incision in the abdomen or through the vagina", "Block gamete transport. Highly effective, but **reversibility is very poor**; a terminal method"],
          ],
        },
        {
          type: "example",
          title: "Choosing a method",
          problem: "Priya and Arjun, a young couple in Bengaluru, have a one-year-old child. They want to wait at least three years before a second child, do not want daily pills, and want a reversible, highly effective method. Which NCERT method suits them best, and how does it act?",
          steps: [
            "Natural methods have a high failure rate, so they are not ideal.",
            "Sterilisation is nearly irreversible, so it does not suit a couple planning another child.",
            "An IUD is inserted once, works for years, is reversible on removal and is ideal for spacing children.",
            "A copper-releasing IUD such as CuT: copper ions suppress sperm motility and fertilising capacity, and the IUD increases phagocytosis of sperm in the uterus.",
          ],
          answer: "A copper-releasing IUD (e.g. CuT or Multiload 375), ideal for spacing children.",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Saheli, the once-a-week oral pill, was developed at:",
              options: ["AIIMS, New Delhi", "CDRI, Lucknow", "ICMR, Pune", "IARI, New Delhi"],
              answer: 1,
              explain: "Saheli is a non-steroidal preparation developed by scientists at the Central Drug Research Institute, Lucknow.",
            },
            {
              kind: "numeric",
              q: "Emergency contraceptives are effective if used within how many hours of coitus?",
              answer: 72,
              unit: "hours",
              explain: "Progestogens, progestogen–estrogen combinations or IUDs within 72 hours of coitus are very effective emergency contraceptives.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "Lactational amenorrhea is a reliable contraceptive for as long as the mother breastfeeds.",
          right: "It works only while breastfeeding is intense and full, and only up to a maximum of six months after delivery.",
          why: "Mothers often notice their periods have not returned and assume they cannot conceive. Ovulation can return before the first period, so the method fails easily beyond six months or with reduced feeding.",
        },
        {
          type: "activity",
          activity: {
            kind: "sort",
            prompt: "Sort each contraceptive by type.",
            groups: ["Barrier", "IUD", "Oral pill / surgical"],
            items: [
              { text: "Cervical cap", group: 0, hint: "It covers the cervix during coitus." },
              { text: "Nirodh", group: 0, hint: "A brand of male condom." },
              { text: "Multiload 375", group: 1, hint: "A copper-releasing device placed in the uterus." },
              { text: "LNG-20", group: 1, hint: "A hormone-releasing device placed in the uterus." },
              { text: "Saheli", group: 2, hint: "A once-a-week pill." },
              { text: "Tubectomy", group: 2, hint: "The fallopian tube is cut or tied." },
            ],
            explain: "LNG-20 and Progestasert release hormones but are still IUDs, because they are devices placed in the uterus.",
          },
        },
        {
          type: "callout",
          tone: "exam",
          title: "Board tip",
          md: "Questions on contraception usually ask for one example of each type and its mode of action. Always pair the name with the action: 'CuT – Cu ions suppress sperm motility'; 'pills – inhibit ovulation and implantation'. Add one line on side-effects (nausea, abdominal pain, breakthrough bleeding, irregular menstrual bleeding or even breast cancer for some methods) when asked why contraception is not a regular requirement.",
        },
        {
          type: "keypoints",
          items: [
            "Reproductive health = physical, emotional, behavioural and social well-being in reproduction (WHO).",
            "Family planning began in 1951; now the RCH programmes.",
            "Population rise: falling death rate, MMR and IMR; more people of reproducible age.",
            "Methods: natural, barrier, IUDs, pills/injections/implants, emergency (72 h), sterilisation.",
            "Lactational amenorrhea: up to 6 months only; sterilisation: poor reversibility.",
          ],
        },
      ],
      flashcards: [
        { front: "Reproductive health (WHO)", back: "Total well-being in all aspects of reproduction: physical, emotional, behavioural and social." },
        { front: "Year India began family planning", back: "1951." },
        { front: "Marriageable age in India", back: "18 years for females, 21 years for males." },
        { front: "Copper-releasing IUDs", back: "CuT, Cu7, Multiload 375." },
        { front: "Hormone-releasing IUDs", back: "Progestasert, LNG-20." },
        { front: "Non-medicated IUD", back: "Lippes loop." },
        { front: "How oral pills act", back: "Inhibit ovulation and implantation; alter cervical mucus to stop or slow sperm." },
        { front: "Vasectomy", back: "A small part of the vas deferens is removed or tied through a small incision on the scrotum." },
        { front: "Periodic abstinence period", back: "Days 10 to 17 of the menstrual cycle (fertile period)." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which contraceptive also protects against sexually transmitted infections?",
          options: ["CuT", "Oral pill", "Condom", "Tubectomy"],
          answer: 2,
          explain: "Condoms prevent contact with body fluids, so they also protect against STIs and AIDS.",
        },
        {
          kind: "mcq",
          q: "Copper ions released from a CuT:",
          options: ["Inhibit ovulation", "Suppress sperm motility and fertilising capacity", "Make the cervix hostile only", "Block the fallopian tubes"],
          answer: 1,
          explain: "Cu ions suppress sperm motility and their fertilising capacity.",
        },
        {
          kind: "truefalse",
          q: "Diaphragms, cervical caps and vaults are reusable.",
          answer: true,
          explain: "These rubber barriers are inserted to cover the cervix and can be reused.",
        },
        {
          kind: "numeric",
          q: "A woman uses periodic abstinence and avoids coitus from day 10 to day 17 of her cycle, both days included. For how many days does she abstain?",
          answer: 8,
          unit: "days",
          explain: "Days 10, 11, 12, 13, 14, 15, 16, 17 = 8 days.",
        },
        {
          kind: "multi",
          q: "Which are probable reasons for the population explosion according to NCERT?",
          options: ["Decline in MMR", "Decline in IMR", "Increase in the number of people of reproducible age", "Rise in the death rate"],
          answers: [0, 1, 2],
          explain: "A rapid decline in death rate, MMR and IMR and more people of reproducible age are the reasons.",
        },
        {
          kind: "mcq",
          q: "Hormone-releasing IUDs act mainly by:",
          options: ["Releasing copper ions", "Making the uterus unsuitable for implantation and the cervix hostile to sperm", "Killing sperm by phagocytosis only", "Blocking the vas deferens"],
          answer: 1,
          explain: "Progestasert and LNG-20 release hormones that act on the uterus and cervix.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "The statutory ban on ___ for sex determination aims to check female foeticide.",
          answer: ["amniocentesis"],
          explain: "Amniocentesis reveals the chromosomal pattern of the foetus, including its sex.",
        },
        {
          kind: "mcq",
          q: "Which feature of sterilisation makes it unsuitable for couples who may want another child?",
          options: ["Low effectiveness", "Very poor reversibility", "Needs daily use", "High cost of hormones"],
          answer: 1,
          explain: "Vasectomy and tubectomy are highly effective but their reversibility is very poor.",
        },
      ],
    },

    /* ---------------- Lesson 2: MTP, STIs, infertility ---------------- */
    {
      slug: "c12-mtp-sti-infertility-art",
      title: "MTP, Sexually Transmitted Infections, Infertility and ART",
      summary:
        "Medical termination of pregnancy and the law, common STIs and their prevention, causes of infertility and assisted reproductive technologies: IVF–ET, ZIFT, IUT, GIFT, ICSI, AI and IUI.",
      minutes: 22,
      xp: 55,
      blocks: [
        {
          type: "text",
          md: "**Medical termination of pregnancy (MTP)**, or induced abortion, is the intentional or voluntary termination of pregnancy before full term. Nearly **45 to 50 million** MTPs are performed in a year all over the world, which accounts for about **one-fifth** of all conceived pregnancies.\n\nMTP is used to get rid of unwanted pregnancies due to casual unprotected intercourse or failure of contraception, and when continuing the pregnancy could be harmful or even fatal to the mother or the foetus or both. MTPs are **relatively safe in the first trimester** (up to 12 weeks). Second-trimester abortions are much riskier.",
        },
        {
          type: "callout",
          tone: "note",
          title: "The law in India (as given in NCERT)",
          md: "India **legalised MTP in 1971** with strict conditions to avoid misuse. Under the **MTP (Amendment) Act, 2017** described in NCERT, a pregnancy may be terminated on certain grounds within the **first 12 weeks** on the opinion of **one** registered medical practitioner; between **12 and 24 weeks**, **two** registered medical practitioners must agree, in good faith, that the grounds exist. The grounds are a risk to the life or grave injury to the physical or mental health of the woman, or a substantial risk that the child would be born with serious abnormalities. The aim is to reduce illegal abortions and the resulting maternal deaths and illness.\n\nThe Act was amended again in 2021. For board and NEET answers, write what NCERT states.",
        },
        {
          type: "text",
          md: "MTP is a matter of debate on emotional, ethical, religious and social grounds. A major worry is its **misuse for female foeticide** after illegal sex determination. Another dangerous trend is illegal abortion by unqualified quacks, which is unsafe and can be fatal.",
        },
        {
          type: "heading",
          text: "Sexually transmitted infections (STIs)",
        },
        {
          type: "text",
          md: "Diseases or infections transmitted through sexual intercourse are called **sexually transmitted infections (STIs)**, also **venereal diseases (VD)** or **reproductive tract infections (RTI)**. Common ones are **gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B and HIV** (which causes AIDS).\n\nExcept **hepatitis-B, genital herpes and HIV**, the others are **completely curable** if detected early and treated properly. **Hepatitis-B and HIV** are also transmitted by sharing injection needles or surgical instruments with infected persons, by transfusion of infected blood, and from an infected mother to the foetus.",
        },
        {
          type: "list",
          items: [
            "Early symptoms are minor: itching, fluid discharge, slight pain, swellings in the genital region. Infected females are often **asymptomatic**, so the infection may go undetected for long.",
            "Late complications: **pelvic inflammatory disease (PID)**, abortions, still births, **ectopic pregnancies**, infertility, and even cancer of the reproductive tract.",
            "Incidence is very high in the **15–24 years** age group.",
            "Prevention: avoid sex with an unknown partner or multiple partners; always use **condoms** during coitus; in case of doubt, consult a qualified doctor early for diagnosis and complete treatment.",
          ],
        },
        {
          type: "heading",
          text: "Infertility and assisted reproductive technologies",
        },
        {
          type: "text",
          md: "A large number of couples are **infertile**: unable to produce children in spite of unprotected sexual cohabitation. The reasons may be physical, congenital, diseases, drugs, immunological or even psychological. In India the female is often blamed, but the problem very often lies with the **male partner**. Specialised infertility clinics diagnose and correct some disorders and use special techniques called **assisted reproductive technologies (ART)**.",
        },
        {
          type: "table",
          headers: ["Technique", "What is done"],
          rows: [
            ["**IVF–ET** (test tube baby)", "In vitro fertilisation (outside the body, in conditions like those inside) followed by **embryo transfer**. Ova from the wife or a donor and sperm from the husband or a donor are fused in the laboratory"],
            ["**ZIFT**", "Zygote intra fallopian transfer: the zygote or early embryo with **up to 8 blastomeres** is transferred into the **fallopian tube**"],
            ["**IUT**", "Intra uterine transfer: an embryo with **more than 8 blastomeres** is transferred into the **uterus**"],
            ["**GIFT**", "Gamete intra fallopian transfer: an **ovum from a donor** is transferred into the fallopian tube of a female who cannot produce ova but can provide a suitable environment for fertilisation and development"],
            ["**ICSI**", "Intra cytoplasmic sperm injection: a sperm is **directly injected into the ovum** in the laboratory to form an embryo"],
            ["**AI / IUI**", "Artificial insemination: semen from the husband or a healthy donor is introduced into the **vagina** or into the **uterus** (**intra-uterine insemination, IUI**). Used when the male cannot inseminate or has a very low sperm count"],
          ],
        },
        {
          type: "text",
          md: "Embryos formed by **in vivo** fertilisation (fusion of gametes inside the female) can also be used for such transfer to help females who cannot conceive. ART needs very high precision handling by specialists and is expensive, so it is available in only a few centres in India. Emotional, religious and social factors also limit its use. **Legal adoption** of orphaned and destitute children is one of the best methods for couples looking for parenthood.",
        },
        {
          type: "example",
          title: "Choosing an ART technique",
          problem: "Sunita's ovaries do not produce ova, but her fallopian tubes and uterus are healthy. Her husband has a normal sperm count. Which technique places a donor's ovum where fertilisation can occur naturally inside Sunita's body?",
          steps: [
            "She cannot provide ova, so a donor ovum is needed.",
            "Her tubes and uterus can support fertilisation and development, so fertilisation can occur inside her body.",
            "The technique that transfers a donor ovum into the fallopian tube of such a female is GIFT.",
          ],
          answer: "GIFT (gamete intra fallopian transfer).",
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "Which STIs are NOT completely curable?",
              options: ["Gonorrhoea, syphilis, chlamydiasis", "Hepatitis-B, genital herpes, HIV", "Trichomoniasis, genital warts, syphilis", "Chlamydiasis, gonorrhoea, hepatitis-B"],
              answer: 1,
              explain: "NCERT lists hepatitis-B, genital herpes and HIV as the ones not completely curable.",
            },
          ],
        },
        {
          type: "mistake",
          wrong: "In ZIFT the embryo is placed in the uterus, and in IUT it is placed in the fallopian tube.",
          right: "ZIFT puts a zygote or early embryo (up to 8 blastomeres) into the fallopian tube. IUT puts an embryo with more than 8 blastomeres into the uterus.",
          why: "Read the names: Z-I-F-T = Zygote Intra Fallopian Transfer; I-U-T = Intra Uterine Transfer. The embryo goes where it would naturally be at that stage: early in the tube, later in the uterus.",
        },
        {
          type: "activity",
          activity: {
            kind: "match",
            prompt: "Match each technique with what it does.",
            pairs: [
              ["ZIFT", "Embryo up to 8 blastomeres into the fallopian tube"],
              ["IUT", "Embryo with more than 8 blastomeres into the uterus"],
              ["GIFT", "Donor ovum into the fallopian tube"],
              ["ICSI", "Sperm injected directly into the ovum"],
              ["IUI", "Semen introduced into the uterus"],
            ],
            explain: "Each acronym spells out what is moved and where it goes: Zygote, Gamete, Sperm (cytoplasmic injection), Insemination.",
          },
        },
        {
          type: "keypoints",
          items: [
            "MTP legalised in India in 1971; safe mainly in the first trimester (12 weeks).",
            "45–50 million MTPs per year worldwide, about one-fifth of pregnancies.",
            "STIs: gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV; highest in 15–24 years.",
            "Not completely curable: hepatitis-B, genital herpes, HIV.",
            "ZIFT (≤ 8 blastomeres, tube), IUT (> 8, uterus), GIFT (donor ovum, tube), ICSI, AI/IUI.",
          ],
        },
      ],
      flashcards: [
        { front: "MTP", back: "Medical termination of pregnancy: intentional termination before full term." },
        { front: "Year MTP was legalised in India", back: "1971." },
        { front: "Safest period for MTP", back: "First trimester (up to 12 weeks)." },
        { front: "STIs transmitted also by needles and blood", back: "Hepatitis-B and HIV." },
        { front: "Complications of untreated STIs", back: "PID, abortions, still births, ectopic pregnancy, infertility, reproductive tract cancer." },
        { front: "ZIFT", back: "Zygote or embryo with up to 8 blastomeres transferred into the fallopian tube." },
        { front: "IUT", back: "Embryo with more than 8 blastomeres transferred into the uterus." },
        { front: "GIFT", back: "Donor ovum transferred into the fallopian tube of a female who cannot produce ova." },
        { front: "ICSI", back: "Sperm injected directly into the ovum in the laboratory." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "Which age group shows the highest incidence of STIs?",
          options: ["5–14 years", "15–24 years", "30–40 years", "Above 50 years"],
          answer: 1,
          explain: "NCERT: incidence of STIs is very high among persons in the 15–24 years age group.",
        },
        {
          kind: "numeric",
          q: "If 45 million MTPs are one-fifth of all conceived pregnancies in a year, how many pregnancies (in millions) are conceived in that year?",
          answer: 225,
          unit: "million",
          explain: "45 × 5 = 225 million.",
        },
        {
          kind: "mcq",
          q: "A man has a very low sperm count. Which simple ART technique is suitable?",
          options: ["GIFT", "Artificial insemination / IUI", "Tubectomy", "Amniocentesis"],
          answer: 1,
          explain: "AI or IUI is used when the male cannot inseminate or has a very low sperm count.",
        },
        {
          kind: "truefalse",
          q: "Infected females with an STI are often asymptomatic.",
          answer: true,
          explain: "Early symptoms are minor and females may show none, so infection often goes undetected.",
        },
        {
          kind: "multi",
          q: "Which are sexually transmitted infections?",
          options: ["Trichomoniasis", "Chlamydiasis", "Genital warts", "Typhoid"],
          answers: [0, 1, 2],
          explain: "Typhoid spreads through contaminated food and water, not sexually.",
        },
        {
          kind: "mcq",
          q: "Ectopic pregnancy, a complication of untreated STIs, means:",
          options: ["Implantation outside the uterus, e.g. in the fallopian tube", "Twin pregnancy", "Pregnancy beyond 9 months", "Pregnancy without fertilisation"],
          answer: 0,
          explain: "In an ectopic pregnancy the embryo implants outside the uterus, often in a scarred fallopian tube.",
          difficulty: 2,
        },
        {
          kind: "fill",
          q: "In ___, a single sperm is injected directly into the cytoplasm of an ovum.",
          answer: ["ICSI", "intra cytoplasmic sperm injection", "intracytoplasmic sperm injection"],
          explain: "ICSI = intra cytoplasmic sperm injection.",
        },
        {
          kind: "mcq",
          q: "According to the MTP law as described in NCERT, a pregnancy of 16 weeks may be terminated on permitted grounds if:",
          options: ["One registered medical practitioner agrees", "Two registered medical practitioners agree", "The woman alone decides", "It cannot be terminated at all"],
          answer: 1,
          explain: "Between 12 and 24 weeks, two registered medical practitioners must form the opinion in good faith that the grounds exist.",
          difficulty: 2,
        },
      ],
    },

    /* ---------------- Exam edge ---------------- */
    {
      slug: "c12-reproductive-health-exam-edge",
      title: "Exam edge: Reproductive Health",
      summary:
        "NEET and KCET favourites: contraceptive examples with mode of action, the ART acronyms, STI lists, NCERT numbers and assertion–reason practice.",
      minutes: 20,
      xp: 50,
      track: "exam",
      blocks: [
        {
          type: "text",
          md: "**NEET** asks 1–3 questions from this chapter, mostly match-the-column on contraceptives and ART, plus statement questions on STIs and MTP. **KCET** asks direct facts: Saheli and CDRI, 1951, 72 hours, 6 months, the IUD examples. The questions are easy if each name is linked with its mode of action.",
        },
        {
          type: "table",
          headers: ["Method", "Main action (one line)"],
          rows: [
            ["Periodic abstinence", "Avoid coitus on days 10–17"],
            ["Lactational amenorrhea", "No ovulation during intense breastfeeding; up to 6 months"],
            ["Condom, diaphragm, cap, vault", "Barrier to sperm"],
            ["Lippes loop", "Non-medicated IUD; increases phagocytosis of sperm"],
            ["CuT, Cu7, Multiload 375", "Cu ions suppress sperm motility and fertilising capacity"],
            ["Progestasert, LNG-20", "Uterus unsuitable for implantation; cervix hostile to sperm"],
            ["Pills (21 days), Saheli (weekly)", "Inhibit ovulation and implantation; alter cervical mucus"],
            ["Vasectomy / tubectomy", "Block transport of gametes; very poor reversibility"],
          ],
        },
        {
          type: "formula",
          tex: t`\text{ZIFT: } \le 8 \text{ blastomeres} \rightarrow \text{fallopian tube} \qquad \text{IUT: } > 8 \text{ blastomeres} \rightarrow \text{uterus}`,
          caption: "The one numerical cut-off NEET tests in ART. GIFT moves a gamete (donor ovum), not an embryo.",
        },
        {
          type: "list",
          items: [
            "NCERT line: India started family planning in **1951**.",
            "NCERT line: Saheli is **non-steroidal**, taken **once a week**, from **CDRI, Lucknow**.",
            "NCERT line: emergency contraception within **72 hours**.",
            "NCERT line: lactational amenorrhea effective only up to a **maximum of six months** after parturition.",
            "NCERT line: MTPs are relatively safe in the **first trimester**; about **45–50 million** per year worldwide.",
            "NCERT line: except **hepatitis-B, genital herpes and HIV**, STIs are completely curable if treated early.",
          ],
        },
        {
          type: "example",
          title: "NEET level: match the column",
          problem: "Match: (a) Multiload 375 (b) LNG-20 (c) Lippes loop (d) Saheli — with (i) hormone-releasing IUD (ii) non-medicated IUD (iii) copper-releasing IUD (iv) oral pill.",
          steps: [
            "Multiload 375 releases copper: (a)-(iii).",
            "LNG-20 releases levonorgestrel, a hormone: (b)-(i).",
            "Lippes loop has no drug: (c)-(ii).",
            "Saheli is a weekly oral pill: (d)-(iv).",
          ],
          answer: "a-iii, b-i, c-ii, d-iv.",
        },
        {
          type: "example",
          title: "Assertion–reason reasoning",
          problem: "A: Copper-releasing IUDs are effective contraceptives. R: Copper ions released suppress sperm motility and the fertilising capacity of sperm.",
          steps: [
            "A is true: CuT and Multiload are widely used and effective.",
            "R is true: this is the NCERT mode of action.",
            "R directly explains why the device prevents fertilisation.",
          ],
          answer: "Both A and R are true, and R is the correct explanation of A.",
        },
        {
          type: "example",
          title: "Harder: two-step reasoning",
          problem: "A: Oral contraceptive pills are taken for 21 days followed by a 7-day gap. R: Pills inhibit ovulation and implantation. Decide the relation, and explain what happens in the 7-day gap.",
          steps: [
            "A is true: NCERT gives the 21-day course started within the first five days of the cycle, then a 7-day gap.",
            "R is true: that is how pills act.",
            "But R does not explain why there is a 7-day gap. The gap allows menstruation to occur (the hormones are withdrawn and the endometrium sheds).",
          ],
          answer: "Both A and R are true, but R is not the correct explanation of A. In the 7-day gap menstruation occurs.",
        },
        {
          type: "mistake",
          wrong: "LNG-20 is a hormonal pill, so it cannot be an IUD.",
          right: "LNG-20 and Progestasert are hormone-releasing IUDs: devices placed in the uterus that release hormones.",
          why: "Students sort by 'hormone' and forget the device. In a match question, an IUD is any device inserted into the uterus, whatever it releases.",
        },
        {
          type: "mistake",
          wrong: "In GIFT, the zygote is transferred into the fallopian tube.",
          right: "In GIFT a gamete (a donor ovum) is transferred; the zygote is transferred in ZIFT.",
          why: "Both acronyms end in IFT (intra fallopian transfer). The first letter tells you what moves: G = gamete, Z = zygote.",
        },
        {
          type: "activity",
          activity: {
            kind: "reveal",
            prompt: "Which contraceptive gives protection against STIs as well?",
            emoji: "🛡️",
            options: ["Copper-T", "Condom", "Oral pill", "Vasectomy"],
            answer: 1,
            trap: 3,
            explain: "Only barrier methods like condoms stop contact with body fluids. Vasectomy blocks sperm but not infections carried in semen.",
          },
        },
        {
          type: "checkpoint",
          questions: [
            {
              kind: "mcq",
              q: "A: Sterilisation is advised as a terminal method to prevent further pregnancies. R: Reversibility of surgical methods is very poor.",
              options: AR,
              answer: 0,
              explain: "Because reversibility is very poor, sterilisation is meant for those who want no more children.",
            },
          ],
        },
        {
          type: "keypoints",
          items: [
            "Pair every contraceptive name with its mode of action.",
            "ZIFT ≤ 8 blastomeres (tube); IUT > 8 (uterus); GIFT moves a donor ovum.",
            "Non-curable STIs: hepatitis-B, genital herpes, HIV.",
            "Key numbers: 1951, 72 h, 6 months, 21 + 7 days, 15–24 years, 45–50 million.",
          ],
        },
      ],
      flashcards: [
        { front: "Saheli", back: "Non-steroidal, once-a-week oral contraceptive from CDRI, Lucknow." },
        { front: "Lippes loop", back: "Non-medicated IUD." },
        { front: "LNG-20", back: "Hormone-releasing IUD." },
        { front: "Emergency contraception window", back: "Within 72 hours of coitus." },
        { front: "Cut-off between ZIFT and IUT", back: "8 blastomeres." },
        { front: "STIs not completely curable", back: "Hepatitis-B, genital herpes, HIV." },
        { front: "Pill schedule", back: "Daily for 21 days, then a 7-day gap during which menstruation occurs." },
      ],
      quiz: [
        {
          kind: "mcq",
          q: "A: Lactational amenorrhea is a natural method of contraception. R: Ovulation and the menstrual cycle do not occur during the period of intense lactation.",
          options: AR,
          answer: 0,
          explain: "Both NCERT statements; R is the reason the method works (up to six months).",
        },
        {
          kind: "mcq",
          q: "A: Hepatitis-B can spread through sharing injection needles. R: Hepatitis-B is completely curable if detected early.",
          options: AR,
          answer: 2,
          explain: "A is true. R is false: hepatitis-B is one of the three STIs that are not completely curable.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "Match: (a) ZIFT (b) IUT (c) GIFT (d) ICSI — with (i) donor ovum into tube (ii) sperm into ovum (iii) up to 8 blastomeres into tube (iv) more than 8 blastomeres into uterus.",
          options: ["a-iii, b-iv, c-i, d-ii", "a-iv, b-iii, c-i, d-ii", "a-iii, b-iv, c-ii, d-i", "a-i, b-iv, c-iii, d-ii"],
          answer: 0,
          explain: "ZIFT = early embryo to tube; IUT = later embryo to uterus; GIFT = gamete to tube; ICSI = sperm injection.",
          difficulty: 2,
        },
        {
          kind: "multi",
          q: "Which statements are correct as per NCERT?",
          options: [
            "Hormone-releasing IUDs make the cervix hostile to sperm",
            "Vasectomy is done through a small incision on the scrotum",
            "Barrier methods include the CuT",
            "Diaphragms are reusable",
          ],
          answers: [0, 1, 3],
          explain: "CuT is an IUD, not a barrier method.",
          difficulty: 2,
        },
        {
          kind: "numeric",
          q: "A woman starts her oral pill course on day 3 of her cycle and takes one pill daily for the full course. On which day of the cycle does she take her last pill of that course?",
          answer: 23,
          explain: "21 pills starting on day 3: day 3 + 20 = day 23.",
          difficulty: 3,
          hint: "The first pill is taken on day 3, so add 20, not 21.",
        },
        {
          kind: "mcq",
          q: "Which is NOT a feature of an ideal contraceptive?",
          options: ["Reversible", "User-friendly", "Interferes with sexual drive", "Least side-effects"],
          answer: 2,
          explain: "An ideal contraceptive should not interfere with sexual drive, desire or the sexual act.",
        },
        {
          kind: "mcq",
          q: "Which pair is wrongly matched?",
          options: ["Tubectomy – fallopian tube", "Multiload 375 – copper", "Progestasert – non-medicated IUD", "Nirodh – male condom"],
          answer: 2,
          explain: "Progestasert is a hormone-releasing IUD; Lippes loop is the non-medicated one.",
          difficulty: 2,
        },
        {
          kind: "mcq",
          q: "A couple's infertility is due to the woman's blocked fallopian tubes; both produce healthy gametes. Which technique fits best?",
          options: ["GIFT", "IVF followed by IUT", "Artificial insemination", "ZIFT into the blocked tube"],
          answer: 1,
          explain: "Gametes cannot meet in blocked tubes, and transfer into the tube (GIFT, ZIFT) is not useful. Fertilise in vitro and transfer the embryo into the uterus.",
          difficulty: 3,
          hint: "Which ART methods bypass the fallopian tube entirely?",
        },
      ],
    },
  ],
};

export const topics: Topic[] = [flowering, human, health];

/** Class 12 chapter title ("12:<exact title>") → topic slug(s), or full lesson ids, that teach it. */
export const links: Record<string, string | string[]> = {
  "12:Sexual Reproduction in Flowering Plants": "c12-sexual-reproduction-flowering-plants",
  "12:Human Reproduction": "c12-human-reproduction",
  "12:Reproductive Health": "c12-reproductive-health",
  "12:Reproduction": ["c12-sexual-reproduction-flowering-plants", "c12-human-reproduction", "c12-reproductive-health"],
};
