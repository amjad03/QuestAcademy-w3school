import type { Topic } from "@/content/types";

/** Course these chapters belong to. */
export const course = "biology-senior";

export const topics: Topic[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "living-world",
    title: "The Living World",
    icon: "🌍",
    description: "What it means to be alive, how organisms are named, and the taxonomic hierarchy used to classify them.",
    lessons: [
      {
        slug: "what-is-living",
        title: "What Is Living?",
        summary: "Growth, reproduction, metabolism, cellular organisation and consciousness: which features truly define life, and the scale of biodiversity.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "A mango tree, a mosquito and a bacterium in curd look nothing alike, yet we call all three living. A crystal of salt can grow and a mule cannot reproduce. So what exactly separates the living from the non-living? Biologists look for features that are **defining**: present in every living thing and absent in every non-living thing.",
          },
          {
            type: "table",
            headers: ["Feature", "Defining?", "Why"],
            rows: [
              ["Growth", "No", "Non-living mountains, sand mounds and crystals grow by accumulation from outside. Living things grow from **inside**, by cell division."],
              ["Reproduction", "No", "Mules, worker bees and infertile couples do not reproduce but are alive."],
              ["Metabolism", "**Yes**", "Every living body runs thousands of chemical reactions; no non-living object does. Isolated reactions in a test tube are not 'alive'."],
              ["Cellular organisation", "**Yes**", "All living organisms are made of cells; properties of life emerge from this organisation."],
              ["Consciousness (response to stimuli)", "**Yes**", "All organisms sense and respond to their environment: light, temperature, water, other organisms."],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Self-consciousness",
            md: "Humans are the only organisms known to be aware of themselves. This raises hard questions: a patient in a coma, kept alive by machines, shows no self-awareness yet is alive.",
          },
          {
            type: "heading",
            text: "Growth and reproduction, carefully",
          },
          {
            type: "list",
            items: [
              "In multicellular organisms, growth is by **cell division**. Plants grow throughout life; animals stop growing at a certain age, though cell division continues to replace lost cells.",
              "In unicellular organisms (bacteria, Amoeba), **growth and reproduction are the same event**: the cell divides into two.",
              "Many organisms reproduce asexually: fungi by spores, *Hydra* and yeast by budding, *Planaria* by regeneration of fragments.",
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: is it a defining feature?",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Claim: \"A salt crystal in a saturated solution grows, so growth defines life.\"",
              "Test it against the rule: a defining feature must have **no exceptions** on either side.",
              "Non-living exception exists (the crystal grows), so growth fails.",
              "Repeat for metabolism: no non-living object metabolises; every organism does. Metabolism **passes**.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which of these is a defining property of living organisms?",
                options: ["Growth", "Reproduction", "Metabolism", "Increase in mass"],
                answer: 2,
                explain: "Growth and reproduction both have exceptions; metabolism is found in all living and no non-living things.",
              },
            ],
          },
          {
            type: "heading",
            text: "How many kinds of living things?",
          },
          {
            type: "text",
            md: "About **1.7–1.8 million species** have been described so far, and many more await discovery, especially insects and microbes. This variety is **biodiversity**. India, with only about 2.4% of the world's land, holds roughly 8% of its recorded species: the Western Ghats and the North-East are hotspots.",
          },
          {
            type: "illustration",
            emoji: "🦋",
            caption: "Insects make up more than half of all described animal species.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "\"Reproduction is a defining feature of life.\" **False.** It is a characteristic, but not a defining one, because of sterile organisms. Also note: in unicellular organisms growth and reproduction are **synonymous**.",
          },
          {
            type: "keypoints",
            items: [
              "Defining properties: metabolism, cellular organisation and consciousness.",
              "Growth and reproduction are characteristics, but not defining ones.",
              "Living things grow from inside by cell division; non-living things by accumulation.",
              "About 1.7–1.8 million species are described; India is megadiverse.",
            ],
          },
        ],
        flashcards: [
          { front: "Three defining features of life", back: "Metabolism, cellular organisation, consciousness (response to stimuli)." },
          { front: "Why is reproduction not a defining feature?", back: "Mules, worker bees and sterile individuals are alive but cannot reproduce." },
          { front: "Growth in unicellular organisms", back: "Synonymous with reproduction: the cell divides into two." },
          { front: "Number of described species", back: "About 1.7–1.8 million." },
          { front: "Biodiversity", back: "The number and types of organisms present on Earth (or in a region)." },
        ],
        quiz: [
          {
            kind: "truefalse",
            q: "Growth cannot be taken as a defining property of living organisms.",
            answer: true,
            explain: "Non-living things such as crystals and mountains also increase in size.",
          },
          {
            kind: "mcq",
            q: "Which organism grows throughout its life?",
            options: ["Human", "Dog", "Banyan tree", "Sparrow"],
            answer: 2,
            explain: "Plants show indeterminate growth; most animals stop growing at a certain age.",
          },
          {
            kind: "fill",
            q: "The sum total of all chemical reactions occurring in a body is called ___.",
            answer: ["metabolism"],
            explain: "Metabolism is a defining feature of life.",
          },
          {
            kind: "mcq",
            q: "Which is the only organism known to be self-conscious?",
            options: ["Chimpanzee", "Dolphin", "Human", "Elephant"],
            answer: 2,
            explain: "NCERT: human beings are the only organisms aware of themselves.",
          },
          {
            kind: "mcq",
            q: "In which of these are growth and reproduction the same process?",
            options: ["Hydra", "Amoeba", "Planaria", "Yeast budding"],
            answer: 1,
            explain: "In Amoeba, binary fission increases cell number: growth and reproduction coincide.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "nomenclature-and-taxonomy",
        title: "Nomenclature and Taxonomy",
        summary: "Why scientific names are needed, the rules of binomial nomenclature, and the processes of taxonomy and systematics.",
        minutes: 14,
        xp: 35,
        blocks: [
          {
            type: "text",
            md: "The same fruit is *aam* in Hindi, *mamidi* in Telugu and *mango* in English. To a scientist in Brazil or Japan, none of these may mean anything. Biologists therefore give every organism one **scientific name** that is understood worldwide. Naming organisms correctly is **nomenclature**, and it is only possible after the organism has been **identified**.",
          },
          {
            type: "heading",
            text: "Binomial nomenclature",
          },
          {
            type: "text",
            md: "Proposed by **Carolus Linnaeus**, the system gives every organism a two-part name: the **genus** (generic name) followed by the **specific epithet**. Plants follow the International Code for Botanical Nomenclature (ICBN); animals the International Code of Zoological Nomenclature (ICZN).",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Names are in **Latin** (or Latinised), whatever their origin.",
              "The genus begins with a **capital** letter; the specific epithet with a **small** letter.",
              "Printed names are in *italics*; handwritten names are **underlined separately** (genus and epithet each).",
              "The author's name may follow in abbreviated form, in roman type: *Mangifera indica* Linn.",
            ],
          },
          {
            type: "heading",
            text: "Worked example: correcting a name",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A student writes: *mangifera Indica*.",
              "Rule 2: genus capitalised → *Mangifera*; epithet small → *indica*.",
              "Rule 3: italicised in print, or each word underlined by hand.",
              "Correct: ***Mangifera indica*** (Linn.). Similarly, wheat is *Triticum aestivum*, potato *Solanum tuberosum*, brinjal *Solanum melongena*, lion *Panthera leo*.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which scientific name is written correctly?",
                options: ["Homo Sapiens", "homo sapiens", "*Homo sapiens*", "*HOMO sapiens*"],
                answer: 2,
                explain: "Genus capitalised, epithet lower case, both italicised.",
              },
            ],
          },
          {
            type: "heading",
            text: "Taxonomy and systematics",
          },
          {
            type: "table",
            headers: ["Process", "What it means"],
            rows: [
              ["Characterisation", "Studying external and internal structure, cells, development, ecology"],
              ["Identification", "Finding the correct name of an organism"],
              ["Nomenclature", "Applying the correct scientific name"],
              ["Classification", "Grouping organisms into convenient categories (taxa) based on easily observable characters"],
            ],
          },
          {
            type: "text",
            md: "These four together make up **taxonomy**. **Systematics** (from Latin *systema*, 'systematic arrangement', the word Linnaeus used in *Systema Naturae*) goes further: it also studies the **evolutionary relationships** between organisms.",
          },
          {
            type: "illustration",
            emoji: "🥭",
            caption: "Mangifera indica: 'the mango-bearer of India'. Many epithets record where an organism was first described.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "The author abbreviation (e.g. *L.* or *Linn.*) is **not italicised**. Also, systematics is *broader* than taxonomy because it includes phylogeny; examiners swap these. 'Taxon' means a group at **any** rank, not just species.",
          },
          {
            type: "keypoints",
            items: [
              "Scientific names are universal; binomial nomenclature was given by Linnaeus.",
              "Genus capitalised, epithet small, both italicised or separately underlined.",
              "Taxonomy = characterisation, identification, nomenclature, classification.",
              "Systematics adds evolutionary relationships.",
            ],
          },
        ],
        flashcards: [
          { front: "Binomial nomenclature", back: "Two-word scientific naming (genus + specific epithet), by Carolus Linnaeus." },
          { front: "ICBN", back: "International Code for Botanical Nomenclature: rules for naming plants." },
          { front: "Taxon", back: "A unit or group of classification at any rank (e.g. Mammalia, Hominidae)." },
          { front: "Systematics", back: "Study of diversity of organisms and their evolutionary relationships." },
          { front: "Scientific name of brinjal", back: "*Solanum melongena*." },
        ],
        quiz: [
          {
            kind: "truefalse",
            q: "In a handwritten scientific name, the genus and specific epithet are underlined separately.",
            answer: true,
            explain: "This marks their Latin origin when italics are not possible.",
          },
          {
            kind: "mcq",
            q: "In *Mangifera indica* Linn., 'Linn.' indicates:",
            options: ["the genus", "the family", "the scientist who first described the species", "the place of origin"],
            answer: 2,
            explain: "It is the abbreviated author name, Linnaeus.",
          },
          {
            kind: "fill",
            q: "The word 'systematics' comes from the Latin word ___.",
            answer: ["systema"],
            explain: "*Systema* means systematic arrangement.",
          },
          {
            kind: "order",
            q: "Arrange the basic processes of taxonomy in the order in which they are carried out.",
            items: ["Characterisation", "Identification", "Nomenclature", "Classification"],
            explain: "An organism must be studied and identified before it can be named and placed in a group.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Potato and brinjal share the same:",
            options: ["species", "genus", "specific epithet", "author"],
            answer: 1,
            explain: "Both are in genus *Solanum*: *S. tuberosum* and *S. melongena*.",
          },
        ],
      },
      {
        slug: "taxonomic-hierarchy",
        title: "Taxonomic Categories and Aids",
        summary: "The hierarchy from species to kingdom, worked placements of human, housefly, mango and wheat, and taxonomic aids such as herbaria and keys.",
        minutes: 16,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Classification is a step-by-step process. Each step is a **category** (rank), and all categories together form the **taxonomic hierarchy**. As we go up from species to kingdom, the number of **common characters decreases** and the number of organisms included **increases**.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Species:** a group of individuals with fundamental similarities that can interbreed. *Panthera leo* and *Panthera tigris* are two species.",
              "**Genus:** related species, e.g. *Panthera* (lion, tiger, leopard).",
              "**Family:** related genera, e.g. Felidae (*Panthera* + *Felis*); Solanaceae (*Solanum*, *Petunia*, *Datura*).",
              "**Order:** related families, e.g. Carnivora (Felidae + Canidae); Polymoniales.",
              "**Class:** related orders, e.g. Mammalia (Primata + Carnivora …).",
              "**Phylum** (animals) / **Division** (plants): e.g. Chordata.",
              "**Kingdom:** e.g. Animalia, Plantae.",
            ],
          },
          {
            type: "heading",
            text: "Worked example: placing four organisms",
          },
          {
            type: "table",
            headers: ["Common name", "Species", "Genus", "Family", "Order", "Class", "Phylum / Division"],
            rows: [
              ["Man", "*sapiens*", "*Homo*", "Hominidae", "Primata", "Mammalia", "Chordata"],
              ["Housefly", "*domestica*", "*Musca*", "Muscidae", "Diptera", "Insecta", "Arthropoda"],
              ["Mango", "*indica*", "*Mangifera*", "Anacardiaceae", "Sapindales", "Dicotyledonae", "Angiospermae"],
              ["Wheat", "*aestivum*", "*Triticum*", "Poaceae", "Poales", "Monocotyledonae", "Angiospermae"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "order",
                q: "Arrange the categories from the lowest (most specific) to the highest.",
                items: ["Species", "Genus", "Family", "Order", "Class", "Phylum", "Kingdom"],
                explain: "Species → genus → family → order → class → phylum/division → kingdom.",
              },
            ],
          },
          {
            type: "heading",
            text: "Taxonomic aids",
          },
          {
            type: "table",
            headers: ["Aid", "What it is", "Indian / world example"],
            rows: [
              ["Herbarium", "Dried, pressed plant specimens on sheets with labels (name, date, place, collector)", "Central National Herbarium, Howrah"],
              ["Botanical garden", "Living plants grown for identification and reference", "Indian Botanical Garden, Howrah; NBRI, Lucknow; Royal Botanic Gardens, Kew"],
              ["Museum", "Preserved plants and animals (in jars, stuffed, skeletons) and insect boxes", "Natural history museums in universities"],
              ["Zoological park", "Wild animals kept in protected surroundings like their habitats", "Nehru Zoological Park, Hyderabad"],
              ["Key", "Analytical tool based on contrasting characters in pairs (couplets); each statement is a lead", "Separate keys for each taxonomic rank"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "How a key works",
            md: "A couplet gives two opposite choices, e.g. *1a. Leaves needle-like … go to 2; 1b. Leaves broad … go to 5.* You accept one lead and reject the other, step by step, until a name is reached.",
          },
          {
            type: "illustration",
            emoji: "🗂️",
            caption: "A herbarium sheet is a quick reference that also serves as a store-house of information for future taxonomic studies.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Moving **up** the hierarchy, common characters **decrease**. Students reverse this. Also, mango and wheat are in the same **division** (Angiospermae) but different **classes**; man and housefly share only the **kingdom**.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Housefly belongs to the order:",
                options: ["Diptera", "Muscidae", "Insecta", "Primata"],
                answer: 0,
                explain: "Musca → Muscidae (family) → Diptera (order) → Insecta (class).",
              },
            ],
          },
          {
            type: "keypoints",
            items: [
              "Hierarchy: species, genus, family, order, class, phylum/division, kingdom.",
              "Higher categories include more organisms with fewer shared characters.",
              "Taxonomic aids: herbaria, botanical gardens, museums, zoos and keys.",
              "A key uses couplets of contrasting characters (leads).",
            ],
          },
        ],
        flashcards: [
          { front: "Family of man", back: "Hominidae (order Primata, class Mammalia)." },
          { front: "Family of wheat", back: "Poaceae (order Poales)." },
          { front: "Herbarium", back: "A collection of dried, pressed and preserved plant specimens on labelled sheets." },
          { front: "Taxonomic key", back: "An identification tool based on pairs of contrasting characters called couplets." },
          { front: "Where is the Indian Botanical Garden?", back: "Howrah, West Bengal." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which category has the maximum number of common characters among its members?",
            options: ["Kingdom", "Class", "Genus", "Species"],
            answer: 3,
            explain: "Members of a species share the most characters; the number falls as we go up.",
          },
          {
            kind: "mcq",
            q: "Mango belongs to the family:",
            options: ["Poaceae", "Anacardiaceae", "Solanaceae", "Muscidae"],
            answer: 1,
            explain: "*Mangifera indica*, family Anacardiaceae, order Sapindales.",
          },
          {
            kind: "fill",
            q: "Each statement in a taxonomic key is called a ___.",
            answer: ["lead"],
            explain: "Two contrasting leads make a couplet.",
            difficulty: 2,
          },
          {
            kind: "truefalse",
            q: "Felidae and Canidae are placed together in the order Carnivora.",
            answer: true,
            explain: "Cats and dogs are separate families of the same order.",
          },
          {
            kind: "mcq",
            q: "The equivalent of 'phylum' in plant classification is:",
            options: ["Class", "Division", "Order", "Family"],
            answer: 1,
            explain: "Botanists use 'division' for the rank between class and kingdom.",
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "biological-classification",
    title: "Biological Classification",
    icon: "🦠",
    description: "From two kingdoms to Whittaker's five; Monera, Protista and Fungi in detail; viruses, viroids, prions and lichens.",
    lessons: [
      {
        slug: "five-kingdoms-and-monera",
        title: "Five Kingdoms and Kingdom Monera",
        summary: "History of classification, Whittaker's five-kingdom system and its criteria, and the archaebacteria, eubacteria and mycoplasma.",
        minutes: 17,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "**Aristotle** classified plants into trees, shrubs and herbs, and animals into those with and without red blood. **Linnaeus** used two kingdoms, Plantae and Animalia. That left awkward cases: bacteria and fungi went into 'plants', and unicellular *Euglena* (both photosynthetic and motile) fitted nowhere. In 1969 **R.H. Whittaker** proposed **five kingdoms**.",
          },
          {
            type: "list",
            items: [
              "Criteria used: **cell structure**, **body organisation**, **mode of nutrition**, **reproduction** and **phylogenetic relationships**.",
            ],
          },
          {
            type: "table",
            headers: ["Character", "Monera", "Protista", "Fungi", "Plantae", "Animalia"],
            rows: [
              ["Cell type", "Prokaryotic", "Eukaryotic", "Eukaryotic", "Eukaryotic", "Eukaryotic"],
              ["Cell wall", "Non-cellulosic (polysaccharide + amino acid)", "Present in some", "Present (chitin)", "Present (cellulose)", "Absent"],
              ["Nuclear membrane", "Absent", "Present", "Present", "Present", "Present"],
              ["Body organisation", "Cellular", "Cellular", "Multicellular / loose tissue", "Tissue / organ", "Tissue / organ / organ system"],
              ["Nutrition", "Autotrophic or heterotrophic", "Autotrophic or heterotrophic", "Heterotrophic (saprophytic / parasitic)", "Autotrophic (photosynthetic)", "Heterotrophic (holozoic etc.)"],
            ],
          },
          {
            type: "heading",
            text: "Kingdom Monera: bacteria",
          },
          {
            type: "text",
            md: "Bacteria are the most abundant micro-organisms and live almost everywhere: hot springs, deserts, snow, deep oceans, inside other organisms. By shape they are **coccus** (spherical), **bacillus** (rod), **vibrio** (comma) and **spirillum** (spiral). They show the greatest metabolic diversity of any group.",
          },
          {
            type: "table",
            headers: ["Group", "Key features", "Examples / roles"],
            rows: [
              ["Archaebacteria", "Live in extreme habitats; **different cell wall structure** helps them survive", "Halophiles (salty areas), thermoacidophiles (hot springs), **methanogens** in the guts of cows and buffaloes, producing methane (biogas)"],
              ["Eubacteria: cyanobacteria", "Photosynthetic autotrophs with chlorophyll *a*; unicellular, colonial or filamentous; some have **heterocysts** that fix nitrogen", "*Nostoc*, *Anabaena*; form **blooms** in polluted water"],
              ["Eubacteria: chemosynthetic", "Oxidise inorganic substances (nitrates, nitrites, ammonia) for energy", "Recycle N, P, Fe, S"],
              ["Eubacteria: heterotrophic", "Most abundant; decomposers", "Curd from milk, antibiotics, N₂-fixation in legumes; diseases like cholera, typhoid, tetanus, citrus canker"],
              ["Mycoplasma", "**No cell wall**; smallest living cells; can survive without oxygen", "Pathogenic in animals and plants"],
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: archaebacteria vs eubacteria",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Habitat: archaebacteria in extremes (salt pans of Rann of Kutch, hot springs of Manikaran); eubacteria everywhere.",
              "Cell wall: archaebacteria have a chemically different wall (no peptidoglycan); eubacteria have a rigid peptidoglycan wall.",
              "Role: methanogens make biogas from cattle dung; eubacteria include photosynthetic, chemosynthetic and decomposer forms.",
              "Both are prokaryotes and reproduce mainly by **fission**; under unfavourable conditions they form **spores**.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Methanogens that produce biogas belong to:",
                options: ["Cyanobacteria", "Archaebacteria", "Mycoplasma", "Chemosynthetic eubacteria"],
                answer: 1,
                explain: "Methanogens are archaebacteria found in the rumen of cattle.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Whittaker's Monera wall is **non-cellulosic**. Fungi have **chitin**, not cellulose. And **Mycoplasma** has no cell wall at all, which is why penicillin (which blocks wall synthesis) does not affect it.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Sexual reproduction in bacteria",
            md: "Bacteria do not form gametes, but they can exchange DNA in a primitive sexual process (for example, conjugation).",
          },
          {
            type: "keypoints",
            items: [
              "Whittaker (1969): Monera, Protista, Fungi, Plantae, Animalia.",
              "Criteria: cell structure, body organisation, nutrition, reproduction, phylogeny.",
              "Archaebacteria: extreme habitats, different cell wall; methanogens make biogas.",
              "Cyanobacteria fix N₂ in heterocysts; Mycoplasma lacks a cell wall.",
            ],
          },
        ],
        flashcards: [
          { front: "Who proposed the five-kingdom classification?", back: "R.H. Whittaker, in 1969." },
          { front: "Heterocyst", back: "A specialised cell in cyanobacteria such as Nostoc and Anabaena that fixes atmospheric nitrogen." },
          { front: "Four bacterial shapes", back: "Coccus (sphere), bacillus (rod), vibrio (comma), spirillum (spiral)." },
          { front: "Mycoplasma", back: "Smallest known living cells; no cell wall; can survive without oxygen." },
          { front: "Methanogens live in", back: "The guts (rumen) of ruminants such as cows and buffaloes." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which kingdom contains only prokaryotes?",
            options: ["Protista", "Monera", "Fungi", "Plantae"],
            answer: 1,
            explain: "Monera includes all bacteria; all other kingdoms are eukaryotic.",
          },
          {
            kind: "truefalse",
            q: "Mycoplasma has a rigid cell wall made of peptidoglycan.",
            answer: false,
            explain: "Mycoplasma has no cell wall.",
          },
          {
            kind: "fill",
            q: "Comma-shaped bacteria are called ___.",
            answer: ["vibrio", "vibrios", "vibrium"],
            explain: "E.g. *Vibrio cholerae*.",
          },
          {
            kind: "mcq",
            q: "Which of these is NOT a criterion used by Whittaker?",
            options: ["Cell structure", "Mode of nutrition", "Phylogenetic relationships", "Number of chromosomes"],
            answer: 3,
            explain: "Whittaker used cell structure, body organisation, nutrition, reproduction and phylogeny.",
          },
          {
            kind: "mcq",
            q: "Halophiles, thermoacidophiles and methanogens are all:",
            options: ["eubacteria", "archaebacteria", "cyanobacteria", "protists"],
            answer: 1,
            explain: "These three are the main groups of archaebacteria.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "protista-and-fungi",
        title: "Kingdoms Protista and Fungi",
        summary: "Chrysophytes, dinoflagellates, euglenoids, slime moulds and protozoans; the structure of fungi and the four fungal classes.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "**Protista** is a meeting point: all single-celled eukaryotes, with links to plants, animals and fungi. They have a well-defined nucleus and membrane-bound organelles; some bear flagella or cilia. They reproduce asexually and sexually, by cell fusion and zygote formation.",
          },
          {
            type: "table",
            headers: ["Group", "Key features", "Examples"],
            rows: [
              ["Chrysophytes", "Diatoms and desmids; walls of **silica** in two overlapping halves; chief 'producers' of oceans; deposits form **diatomaceous earth**", "Diatoms, desmids (golden algae)"],
              ["Dinoflagellates", "Mostly marine, photosynthetic; stiff cellulose plates; **two flagella** (one longitudinal, one transverse); red forms cause **red tides**", "*Gonyaulax*"],
              ["Euglenoids", "Fresh water; **pellicle** (protein-rich, flexible) instead of cell wall; two flagella; photosynthetic in light, heterotrophic in darkness", "*Euglena*"],
              ["Slime moulds", "Saprophytic; aggregate into a **plasmodium** under good conditions; spores with true walls, very resistant", "–"],
              ["Protozoans", "Heterotrophs (predators or parasites); thought to be primitive relatives of animals", "See the four groups below"],
            ],
          },
          {
            type: "list",
            items: [
              "**Amoeboid:** pseudopodia; *Amoeba*; *Entamoeba* (parasitic) causes amoebic dysentery. Marine forms have silica shells.",
              "**Flagellated:** free-living or parasitic; *Trypanosoma* causes **sleeping sickness**.",
              "**Ciliated:** many cilia; a gullet opening outside; *Paramoecium*.",
              "**Sporozoans:** infectious spore stage; *Plasmodium* causes **malaria**.",
            ],
          },
          {
            type: "heading",
            text: "Kingdom Fungi",
          },
          {
            type: "text",
            md: "Fungi are heterotrophic: mostly **saprophytes** on dead matter, some **parasites** (e.g. *Puccinia* on wheat), some in symbiosis as **lichens** and **mycorrhiza**. Except unicellular yeast, they are made of long threads called **hyphae**; the network is a **mycelium**. Hyphae with many nuclei in continuous cytoplasm are **coenocytic**. Cell walls are of **chitin** and polysaccharides.",
          },
          {
            type: "table",
            headers: ["Class", "Mycelium", "Asexual spores", "Sexual spores", "Examples"],
            rows: [
              ["Phycomycetes", "Aseptate, coenocytic", "Zoospores (motile) or aplanospores (non-motile), endogenous in sporangium", "Zygospore", "*Mucor*, *Rhizopus* (bread mould), *Albugo* (on mustard)"],
              ["Ascomycetes (sac fungi)", "Septate, branched; yeast unicellular", "Conidia, exogenous on conidiophores", "Ascospores, endogenous in asci within ascocarps", "*Penicillium*, *Aspergillus*, *Claviceps*, *Neurospora*; morels and truffles are edible"],
              ["Basidiomycetes (club fungi)", "Septate, branched", "Generally absent; vegetative by fragmentation", "Basidiospores, exogenous on basidia in basidiocarps", "*Agaricus* (mushroom), *Ustilago* (smut), *Puccinia* (rust)"],
              ["Deuteromycetes (imperfect fungi)", "Septate, branched", "Conidia only", "Unknown", "*Alternaria*, *Colletotrichum*, *Trichoderma*"],
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: sexual cycle in fungi",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Plasmogamy:** fusion of protoplasm of two motile or non-motile gametes.",
              "**Karyogamy:** fusion of the two nuclei.",
              "**Meiosis** in the zygote gives haploid spores.",
              "In ascomycetes and basidiomycetes a **dikaryotic** phase (n + n, two nuclei per cell) comes between plasmogamy and karyogamy; the fruiting bodies (ascocarp, basidiocarp) form in this phase.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which fungus belongs to the Deuteromycetes?",
                options: ["Rhizopus", "Neurospora", "Agaricus", "Trichoderma"],
                answer: 3,
                explain: "*Trichoderma* has no known sexual stage. *Neurospora* is an ascomycete; *Agaricus* a basidiomycete; *Rhizopus* a phycomycete.",
              },
              {
                kind: "fill",
                q: "Instead of a cell wall, Euglena has a protein-rich layer called the ___.",
                answer: ["pellicle"],
                explain: "The pellicle keeps the body flexible.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "*Neurospora* (used in genetics) is an **ascomycete**, not a phycomycete. Basidiomycetes have **no sex organs**: plasmogamy happens by fusion of two vegetative cells of different strains. Deuteromycetes are reclassified once their sexual stage is discovered.",
          },
          {
            type: "illustration",
            emoji: "🍄",
            caption: "Button mushroom (Agaricus), grown in Himachal and Haryana farms, is the fruiting body (basidiocarp) of a basidiomycete.",
          },
          {
            type: "keypoints",
            items: [
              "Protista: unicellular eukaryotes; chrysophytes, dinoflagellates, euglenoids, slime moulds, protozoans.",
              "Diatom walls are silica; dinoflagellates cause red tides; Euglena has a pellicle.",
              "Fungi: chitin walls, hyphae and mycelium; heterotrophic.",
              "Four classes: phycomycetes, ascomycetes, basidiomycetes, deuteromycetes.",
            ],
          },
        ],
        flashcards: [
          { front: "Diatomaceous earth", back: "Deposits of silica cell walls of diatoms, used in polishing and filtration of oils and syrups." },
          { front: "Red tide", back: "Sea water turned red by rapidly multiplying red dinoflagellates such as Gonyaulax." },
          { front: "Causal organism of sleeping sickness", back: "Trypanosoma (a flagellated protozoan)." },
          { front: "Coenocytic hypha", back: "A hypha without septa, with many nuclei in continuous cytoplasm." },
          { front: "Dikaryon", back: "A cell with two nuclei (n + n), found between plasmogamy and karyogamy in ascomycetes and basidiomycetes." },
          { front: "Imperfect fungi", back: "Deuteromycetes: only asexual (conidia) stage known." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Malaria is caused by a protozoan belonging to:",
            options: ["Amoeboid protozoans", "Flagellated protozoans", "Ciliated protozoans", "Sporozoans"],
            answer: 3,
            explain: "*Plasmodium* is a sporozoan.",
          },
          {
            kind: "truefalse",
            q: "Ascospores are produced exogenously on basidia.",
            answer: false,
            explain: "Ascospores are endogenous in asci; basidiospores are exogenous on basidia.",
          },
          {
            kind: "mcq",
            q: "Albugo, the parasitic fungus on mustard, belongs to:",
            options: ["Phycomycetes", "Ascomycetes", "Basidiomycetes", "Deuteromycetes"],
            answer: 0,
            explain: "*Albugo* is a phycomycete.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "The cell walls of diatoms are made of ___.",
            answer: ["silica"],
            explain: "Silica walls are practically indestructible.",
          },
          {
            kind: "order",
            q: "Arrange the steps of the fungal sexual cycle.",
            items: ["Plasmogamy", "Dikaryotic phase", "Karyogamy", "Meiosis"],
            explain: "In ascomycetes and basidiomycetes, plasmogamy leads to a dikaryon, then karyogamy and meiosis give haploid spores.",
            difficulty: 3,
          },
          {
            kind: "mcq",
            q: "Which pair is correctly matched?",
            options: ["Ustilago: rust", "Puccinia: smut", "Claviceps: ascomycete", "Agaricus: phycomycete"],
            answer: 2,
            explain: "*Claviceps* is an ascomycete. *Ustilago* causes smut; *Puccinia* rust; *Agaricus* is a basidiomycete.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "viruses-viroids-lichens",
        title: "Plantae, Animalia, Viruses, Viroids, Prions and Lichens",
        summary: "How Whittaker defined the plant and animal kingdoms, and the acellular entities and symbioses that fall outside the five kingdoms.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "**Plantae** contains eukaryotic, chlorophyll-bearing organisms: algae, bryophytes, pteridophytes, gymnosperms and angiosperms. A few are partly heterotrophic: insectivorous **bladderwort** and **Venus flytrap**, and the parasite *Cuscuta*. **Animalia** contains heterotrophic, multicellular eukaryotes without cell walls that feed holozoically and store food as glycogen or fat. These two kingdoms get their own chapters.",
          },
          {
            type: "heading",
            text: "Viruses",
          },
          {
            type: "list",
            items: [
              "**D.J. Ivanowsky** (1892) found that tobacco mosaic disease was caused by agents smaller than bacteria.",
              "**M.W. Beijerinck** (1898) called the infectious fluid *contagium vivum fluidum*.",
              "**W.M. Stanley** (1935) showed viruses can be crystallised; the crystals are mostly protein.",
              "Viruses are **inert outside** a host cell and become active only inside one: obligate parasites.",
              "A virus = **nucleoprotein**: genetic material (RNA or DNA, never both) inside a protein coat, the **capsid**, made of **capsomeres**.",
              "Plant viruses usually have single-stranded RNA; animal viruses ss or ds RNA or ds DNA; bacteriophages usually ds DNA.",
              "Diseases: mumps, smallpox, herpes, influenza and AIDS in humans; mosaic, leaf rolling and curling, vein clearing, dwarfing in plants.",
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: virus, viroid and prion",
          },
          {
            type: "table",
            headers: ["", "Virus", "Viroid", "Prion"],
            rows: [
              ["Made of", "Nucleic acid + protein coat", "Free RNA only, no protein coat", "Abnormally folded protein only"],
              ["Discovered", "Ivanowsky, 1892", "T.O. Diener, 1971", "–"],
              ["Size of genome", "Larger", "Low molecular weight RNA", "No nucleic acid"],
              ["Disease example", "TMV, influenza, AIDS", "Potato spindle tuber disease", "Mad cow disease (BSE) in cattle; Creutzfeldt–Jakob disease (CJD) in humans"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Potato spindle tuber disease is caused by:",
                options: ["a virus", "a viroid", "a prion", "a bacterium"],
                answer: 1,
                explain: "Diener discovered viroids, free RNA without a protein coat, as its cause.",
              },
            ],
          },
          {
            type: "heading",
            text: "Lichens",
          },
          {
            type: "text",
            md: "Lichens are **symbiotic associations** of algae and fungi. The algal partner (**phycobiont**) makes food; the fungal partner (**mycobiont**) gives shelter and absorbs water and minerals. Their association is so close that a lichen looks like a single organism. Lichens are excellent **pollution indicators**: they do not grow in polluted areas, so their absence on trees in a city signals poor air.",
          },
          {
            type: "illustration",
            emoji: "🪨",
            caption: "Lichens on bare rock are among the first colonisers in ecological succession, slowly breaking rock into soil.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Viruses contain **either** DNA **or** RNA, never both. Viruses, viroids, prions and lichens are **not** placed in Whittaker's five kingdoms. Also, *contagium vivum fluidum* is Beijerinck's term, not Ivanowsky's.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Not alive, not dead",
            md: "If 'living' means metabolism, viruses fail outside a cell. If it means reproducing and evolving, they pass. This is why biologists call them a borderline case.",
          },
          {
            type: "keypoints",
            items: [
              "Plantae: chlorophyll-bearing eukaryotes; Animalia: heterotrophic, wall-less multicellular eukaryotes.",
              "Viruses are nucleoproteins; obligate parasites; DNA or RNA inside a capsid.",
              "Viroids are free RNA (Diener, 1971); prions are misfolded proteins (BSE, CJD).",
              "Lichens = alga (phycobiont) + fungus (mycobiont); sensitive to pollution.",
            ],
          },
        ],
        flashcards: [
          { front: "Contagium vivum fluidum", back: "'Infectious living fluid': Beijerinck's name for the agent of tobacco mosaic disease." },
          { front: "Capsid", back: "The protein coat of a virus, made of subunits called capsomeres." },
          { front: "Viroid", back: "An infectious agent of free, low molecular weight RNA without a protein coat (Diener, 1971)." },
          { front: "Prion diseases", back: "BSE (mad cow disease) in cattle and Creutzfeldt–Jakob disease in humans." },
          { front: "Phycobiont and mycobiont", back: "The algal and fungal partners of a lichen." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Who first crystallised a virus and showed the crystals are mostly protein?",
            options: ["Ivanowsky", "Beijerinck", "Stanley", "Diener"],
            answer: 2,
            explain: "W.M. Stanley, 1935.",
          },
          {
            kind: "truefalse",
            q: "Bacteriophages usually contain double-stranded DNA.",
            answer: true,
            explain: "Most bacteriophages are ds DNA viruses.",
          },
          {
            kind: "fill",
            q: "Lichens do not grow in polluted areas, so they are good ___ indicators.",
            answer: ["pollution", "air pollution"],
            explain: "They are sensitive to SO₂ and other pollutants.",
          },
          {
            kind: "mcq",
            q: "Which plant is insectivorous?",
            options: ["Cuscuta", "Bladderwort", "Mango", "Wheat"],
            answer: 1,
            explain: "Bladderwort (and Venus flytrap) trap insects; Cuscuta is a parasite.",
          },
          {
            kind: "mcq",
            q: "An infectious agent made only of protein is a:",
            options: ["viroid", "virus", "prion", "plasmid"],
            answer: 2,
            explain: "Prions are abnormally folded proteins.",
            difficulty: 2,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "plant-kingdom",
    title: "Plant Kingdom",
    icon: "🌿",
    description: "Algae, bryophytes, pteridophytes, gymnosperms and angiosperms, and the plant life cycles that link them.",
    lessons: [
      {
        slug: "algae",
        title: "Classification Systems and Algae",
        summary: "Artificial, natural and phylogenetic systems; the features, reproduction and uses of algae, and the three algal classes compared.",
        minutes: 17,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "Early systems, like **Linnaeus'** based on the androecium, were **artificial**: they used a few superficial characters and gave equal weight to vegetative and sexual characters. **Natural** systems (e.g. **Bentham and Hooker**) used many characters, including internal anatomy and chemistry. **Phylogenetic** systems are based on evolutionary relationships. Modern taxonomists also use **numerical taxonomy** (all characters given equal weight, computer-processed), **cytotaxonomy** (chromosome number, structure) and **chemotaxonomy** (chemical constituents).",
          },
          {
            type: "heading",
            text: "Algae",
          },
          {
            type: "text",
            md: "Algae are chlorophyll-bearing, simple, **thalloid**, autotrophic and largely aquatic. They range from colonial *Volvox* and filamentous *Ulothrix* and *Spirogyra* to giant marine kelps. Some live on moist stones, soil and wood, or with fungi (lichens) and animals (on the sloth bear).",
          },
          {
            type: "table",
            headers: ["Reproduction", "How", "Examples"],
            rows: [
              ["Vegetative", "Fragmentation: each fragment grows into a thallus", "Spirogyra"],
              ["Asexual", "Spores, commonly flagellated **zoospores**", "Chlamydomonas, Ulothrix"],
              ["Sexual: isogamous", "Gametes similar in size (flagellated or not)", "Chlamydomonas (some species), Spirogyra (non-flagellated)"],
              ["Sexual: anisogamous", "Gametes dissimilar in size", "Some Chlamydomonas species"],
              ["Sexual: oogamous", "Large non-motile female gamete + small motile male gamete", "Volvox, Fucus"],
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: the three classes",
          },
          {
            type: "table",
            headers: ["Feature", "Chlorophyceae (green)", "Phaeophyceae (brown)", "Rhodophyceae (red)"],
            rows: [
              ["Pigments", "Chl *a*, *b*", "Chl *a*, *c*, fucoxanthin", "Chl *a*, *d*, phycoerythrin"],
              ["Stored food", "Starch", "Mannitol, laminarin", "Floridean starch"],
              ["Cell wall", "Cellulose", "Cellulose + algin", "Cellulose, pectin, polysulphate esters"],
              ["Flagella", "2–8, equal, apical", "2, unequal, lateral", "Absent"],
              ["Habitat", "Fresh, brackish, salt water", "Mostly marine", "Mostly marine, warmer areas; also at great depths"],
              ["Examples", "Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara", "Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus", "Polysiphonia, Porphyra, Gracilaria, Gelidium"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Floridean starch is the stored food of:",
                options: ["Chlorophyceae", "Phaeophyceae", "Rhodophyceae", "Cyanobacteria"],
                answer: 2,
                explain: "Red algae store floridean starch, similar to amylopectin and glycogen.",
              },
            ],
          },
          {
            type: "list",
            items: [
              "Algae carry out at least **half** of all CO₂ fixation on Earth by photosynthesis.",
              "**Agar** (for microbe culture, ice-creams, jellies) comes from *Gelidium* and *Gracilaria*.",
              "**Algin** comes from brown algae; **carrageen** from red algae; both are hydrocolloids.",
              "*Chlorella*, rich in protein, is a food supplement even for space travellers. *Porphyra*, *Laminaria* and *Sargassum* are eaten.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Brown algae have a body differentiated into **holdfast, stipe and frond** (leaf-like). Red algae get their colour from **r-phycoerythrin** and can live at great depths where little light reaches. *Fucus* is oogamous; *Spirogyra* is isogamous with non-flagellated gametes.",
          },
          {
            type: "keypoints",
            items: [
              "Artificial → natural → phylogenetic systems; plus numerical, cyto- and chemotaxonomy.",
              "Algae are thalloid autotrophs reproducing vegetatively, asexually and sexually.",
              "Green: chl a, b, starch; brown: fucoxanthin, laminarin, mannitol; red: phycoerythrin, floridean starch.",
              "Agar from Gelidium and Gracilaria; Chlorella as a protein supplement.",
            ],
          },
        ],
        flashcards: [
          { front: "Artificial system of classification", back: "Based on a few superficial morphological characters, e.g. Linnaeus' system based on the androecium." },
          { front: "Source of agar", back: "Red algae Gelidium and Gracilaria." },
          { front: "Pigment that colours brown algae", back: "Fucoxanthin." },
          { front: "Oogamy", back: "Fusion of a large, non-motile female gamete with a smaller motile male gamete, e.g. Volvox, Fucus." },
          { front: "Parts of a brown alga's body", back: "Holdfast, stipe and frond." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which algal class lacks flagellated cells?",
            options: ["Chlorophyceae", "Phaeophyceae", "Rhodophyceae", "All have flagella"],
            answer: 2,
            explain: "Red algae have no flagella.",
          },
          {
            kind: "truefalse",
            q: "Mannitol and laminarin are stored foods of brown algae.",
            answer: true,
            explain: "Phaeophyceae store complex carbohydrates as laminarin or mannitol.",
          },
          {
            kind: "fill",
            q: "Classification based on chemical constituents of the plant is called ___.",
            answer: ["chemotaxonomy"],
            explain: "Cytotaxonomy uses chromosomes; numerical taxonomy uses all characters with computers.",
          },
          {
            kind: "mcq",
            q: "Which alga is used as a protein-rich food supplement by space travellers?",
            options: ["Spirogyra", "Chlorella", "Fucus", "Polysiphonia"],
            answer: 1,
            explain: "*Chlorella* is unicellular and rich in protein.",
          },
          {
            kind: "mcq",
            q: "Which pair is correctly matched?",
            options: ["Laminaria: red alga", "Porphyra: green alga", "Ectocarpus: brown alga", "Gracilaria: brown alga"],
            answer: 2,
            explain: "*Ectocarpus* is a brown alga. *Laminaria* is brown; *Porphyra* and *Gracilaria* are red.",
            difficulty: 2,
          },
        ],
      },
      {
        slug: "bryophytes-and-pteridophytes",
        title: "Bryophytes and Pteridophytes",
        summary: "The amphibians of the plant kingdom and the first vascular land plants: their life cycles, classes and the step towards seeds.",
        minutes: 18,
        xp: 45,
        blocks: [
          {
            type: "text",
            md: "**Bryophytes** (liverworts and mosses) live on land but need water for sexual reproduction, so they are called the **amphibians of the plant kingdom**. Their main plant body is the **haploid gametophyte**; it may be thalloid or have stem-like and leaf-like parts, and is anchored by **rhizoids**. They have no true roots, stems, leaves or vascular tissue.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Male sex organ **antheridium** releases biflagellate **antherozoids**; female sex organ **archegonium** (flask-shaped) holds one egg.",
              "Antherozoids swim in water to the archegonium; fusion gives a diploid **zygote**.",
              "Zygote → multicellular **sporophyte** (foot, seta, capsule), which stays attached to and nourished by the gametophyte.",
              "**Meiosis** in the capsule produces haploid spores, which germinate into new gametophytes.",
            ],
          },
          {
            type: "table",
            headers: ["", "Liverworts", "Mosses"],
            rows: [
              ["Body", "Thalloid, dorsiventral, flat (Marchantia)", "Protonema (creeping, filamentous) then leafy stage with spirally arranged leaves"],
              ["Asexual reproduction", "Fragmentation; **gemmae** in gemma cups", "Fragmentation and budding of secondary protonema"],
              ["Sporophyte", "Simple", "More elaborate; spores dispersed by elaborate mechanism"],
              ["Examples", "Marchantia", "Funaria, Polytrichum, Sphagnum"],
            ],
          },
          {
            type: "callout",
            tone: "fact",
            title: "Why mosses matter",
            md: "*Sphagnum* forms **peat**, used as fuel and as packing for living material because of its water-holding capacity. Mosses and lichens are among the first plants to colonise bare rock, and mats of moss reduce soil erosion during heavy rain.",
          },
          {
            type: "heading",
            text: "Pteridophytes",
          },
          {
            type: "text",
            md: "Pteridophytes (horsetails and ferns) are the **first terrestrial plants with vascular tissues**, xylem and phloem. The main plant body is the **diploid sporophyte**, with true roots, stems and leaves. Leaves are small (**microphylls**, *Selaginella*) or large (**macrophylls**, ferns). Sporangia are borne on leaf-like **sporophylls**, sometimes grouped into **strobili** or cones (*Selaginella*, *Equisetum*).",
          },
          {
            type: "list",
            items: [
              "Spores germinate into a small, free-living, photosynthetic, thalloid gametophyte: the **prothallus**. It needs cool, damp, shady places, which limits where pteridophytes grow.",
              "Water is still needed for antherozoids to reach the archegonia.",
              "Most are **homosporous** (one kind of spore). *Selaginella* and *Salvinia* are **heterosporous**: large megaspores and small microspores give female and male gametophytes.",
              "Female gametophytes retained on the parent sporophyte for some time are a **precursor to the seed habit**.",
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: classes of pteridophytes",
          },
          {
            type: "table",
            headers: ["Class", "Example"],
            rows: [
              ["Psilopsida", "Psilotum"],
              ["Lycopsida", "Selaginella, Lycopodium"],
              ["Sphenopsida", "Equisetum"],
              ["Pteropsida", "Dryopteris, Pteris, Adiantum"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In bryophytes, the dominant, independent phase of the life cycle is the:",
                options: ["diploid sporophyte", "haploid gametophyte", "protonema only", "capsule"],
                answer: 1,
                explain: "The gametophyte is the main plant; the sporophyte depends on it.",
              },
              {
                kind: "fill",
                q: "The gametophyte of a pteridophyte is called the ___.",
                answer: ["prothallus"],
                explain: "A small, free-living, photosynthetic thalloid structure.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "In bryophytes the gametophyte is dominant; in pteridophytes the **sporophyte** is dominant. Don't mix them. *Equisetum* is Sphenopsida, not Lycopsida. And heterospory in *Selaginella* and *Salvinia* is the **first step towards seeds**, a favourite one-liner.",
          },
          {
            type: "keypoints",
            items: [
              "Bryophytes: amphibians of the plant kingdom; gametophyte dominant; sporophyte attached.",
              "Liverworts reproduce by gemmae; mosses have protonema and leafy stages.",
              "Pteridophytes: first vascular land plants; sporophyte dominant; prothallus gametophyte.",
              "Heterospory (Selaginella, Salvinia) is a precursor to the seed habit.",
            ],
          },
        ],
        flashcards: [
          { front: "Amphibians of the plant kingdom", back: "Bryophytes: they live on land but need water for fertilisation." },
          { front: "Gemmae", back: "Green, multicellular asexual buds of liverworts, formed in gemma cups." },
          { front: "Protonema", back: "The first, creeping, green, branched filamentous stage of the moss gametophyte." },
          { front: "Peat", back: "Partly decayed Sphagnum moss; used as fuel and for packing." },
          { front: "Heterosporous pteridophytes", back: "Selaginella and Salvinia." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The first terrestrial plants to possess vascular tissues were:",
            options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Algae"],
            answer: 1,
            explain: "Pteridophytes have xylem and phloem; bryophytes do not.",
          },
          {
            kind: "truefalse",
            q: "In mosses, the sporophyte is independent of the gametophyte.",
            answer: false,
            explain: "The bryophyte sporophyte is attached to and nourished by the gametophyte.",
          },
          {
            kind: "mcq",
            q: "Which is a liverwort?",
            options: ["Funaria", "Sphagnum", "Marchantia", "Polytrichum"],
            answer: 2,
            explain: "*Marchantia* is a liverwort; the others are mosses.",
          },
          {
            kind: "order",
            q: "Arrange the stages of a moss life cycle beginning with the spore.",
            items: ["Spore", "Protonema", "Leafy gametophyte", "Zygote", "Sporophyte (capsule)"],
            explain: "Spore → protonema → leafy stage (bears sex organs) → zygote → sporophyte, whose capsule makes spores by meiosis.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Equisetum belongs to the class:",
            options: ["Psilopsida", "Lycopsida", "Sphenopsida", "Pteropsida"],
            answer: 2,
            explain: "Horsetails are Sphenopsida.",
          },
          {
            kind: "numeric",
            q: "A moss leaf cell has 10 chromosomes. How many chromosomes are in a cell of its capsule wall?",
            answer: 20,
            explain: "The leafy plant is the haploid gametophyte (n = 10); the capsule is part of the diploid sporophyte (2n = 20).",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "seed-plants-and-life-cycles",
        title: "Gymnosperms, Angiosperms and Plant Life Cycles",
        summary: "Naked and enclosed seeds, the embryo sac and double fertilisation, and haplontic, diplontic and haplo-diplontic life cycles.",
        minutes: 19,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "**Gymnosperms** (*gymnos* = naked, *sperma* = seed) have ovules that are **not enclosed** in an ovary wall, before or after fertilisation; their seeds are naked. They range from small shrubs to the giant redwood *Sequoia*, one of the tallest trees.",
          },
          {
            type: "list",
            items: [
              "Roots are tap roots. *Pinus* roots have fungal associations (**mycorrhiza**); *Cycas* has small specialised **coralloid roots** with N₂-fixing cyanobacteria.",
              "Stem unbranched (*Cycas*) or branched (*Pinus*, *Cedrus*). Leaves simple or compound; needle-like in conifers with a thick cuticle and sunken stomata to reduce water loss.",
              "They are **heterosporous**: microsporophylls form male cones (strobili), megasporophylls form female cones.",
              "Male gametophyte (pollen grain) is carried by **air**; pollen tube carries male gametes to the archegonia in the ovule. The ovule becomes the seed.",
            ],
          },
          {
            type: "heading",
            text: "Angiosperms",
          },
          {
            type: "text",
            md: "In angiosperms the pollen grains and ovules develop in **flowers**, and the seeds are enclosed in **fruits**. They are divided into **dicotyledons** and **monocotyledons**. They range from tiny *Wolffia* to tall *Eucalyptus* (over 100 m).",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Anther → pollen grains (male gametophyte); ovary → ovules.",
              "In the ovule, a megaspore mother cell undergoes meiosis; one megaspore develops into the **embryo sac** (female gametophyte).",
              "The embryo sac is **7-celled and 8-nucleate**: an egg apparatus (1 egg + 2 synergids), 3 antipodals and 2 polar nuclei (which fuse into a diploid secondary nucleus).",
              "Pollen tube releases **two male gametes**: one fuses with the egg (**syngamy** → zygote, 2n); the other fuses with the two polar nuclei (**triple fusion** → primary endosperm nucleus, 3n).",
              "This **double fertilisation** is unique to angiosperms. The zygote becomes the embryo; the PEN the endosperm; ovules become seeds and the ovary the fruit. Synergids and antipodals degenerate.",
            ],
          },
          {
            type: "heading",
            text: "Worked example: counting chromosomes",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A rice leaf cell has 24 chromosomes (2n = 24), so n = 12.",
              "Egg, synergids, antipodals, male gametes: haploid → **12** each.",
              "Zygote and embryo: 2n → **24**.",
              "Endosperm: 3n → 3 × 12 = **36**.",
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "numeric",
                q: "The meiocyte of a plant has 2n = 16. How many chromosomes are in its endosperm cell?",
                answer: 24,
                explain: "n = 8, endosperm is triploid: 3 × 8 = 24.",
              },
            ],
          },
          {
            type: "heading",
            text: "Plant life cycles",
          },
          {
            type: "table",
            headers: ["Pattern", "Dominant phase", "Examples"],
            rows: [
              ["Haplontic", "Haploid gametophyte; sporophyte is only the zygote (meiosis in zygote)", "Volvox, Spirogyra, some Chlamydomonas"],
              ["Diplontic", "Diploid sporophyte; gametophyte reduced to a few cells", "All seed plants (gymnosperms, angiosperms); Fucus among algae"],
              ["Haplo-diplontic", "Both phases multicellular", "Bryophytes (gametophyte dominant), pteridophytes (sporophyte dominant); Ectocarpus, Polysiphonia, kelps"],
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "*Fucus* is **diplontic**, though it is an alga. Endosperm is formed **before** fertilisation (haploid) in gymnosperms but **after** it (triploid) in angiosperms. Questions often hide this difference in one word.",
          },
          {
            type: "illustration",
            emoji: "🌲",
            caption: "Deodar (Cedrus deodara) forests of the Himalaya are gymnosperms: seeds lie naked on the scales of the female cone.",
          },
          {
            type: "keypoints",
            items: [
              "Gymnosperms: naked ovules and seeds; heterosporous; wind pollination; coralloid roots in Cycas.",
              "Angiosperms: seeds inside fruits; embryo sac is 7-celled, 8-nucleate.",
              "Double fertilisation = syngamy (2n zygote) + triple fusion (3n PEN).",
              "Life cycles: haplontic, diplontic and haplo-diplontic.",
            ],
          },
        ],
        flashcards: [
          { front: "Coralloid roots", back: "Specialised roots of Cycas associated with N₂-fixing cyanobacteria." },
          { front: "Triple fusion", back: "Fusion of a male gamete with two polar nuclei (or the secondary nucleus) to form the 3n primary endosperm nucleus." },
          { front: "Egg apparatus", back: "One egg cell and two synergids at the micropylar end of the embryo sac." },
          { front: "Smallest angiosperm", back: "Wolffia." },
          { front: "Haplo-diplontic life cycle", back: "Both haploid and diploid phases multicellular, e.g. bryophytes, pteridophytes, Ectocarpus." },
          { front: "Ploidy of gymnosperm endosperm", back: "Haploid (n): it is female gametophyte tissue formed before fertilisation." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Double fertilisation is a characteristic of:",
            options: ["Gymnosperms", "Pteridophytes", "Angiosperms", "Bryophytes"],
            answer: 2,
            explain: "Only angiosperms show syngamy plus triple fusion.",
          },
          {
            kind: "numeric",
            q: "How many nuclei are present in a mature angiosperm embryo sac before the polar nuclei fuse?",
            answer: 8,
            explain: "7 cells, 8 nuclei: 3 egg apparatus, 3 antipodals, 2 polar nuclei in the central cell.",
          },
          {
            kind: "truefalse",
            q: "In gymnosperms the ovules are enclosed in an ovary.",
            answer: false,
            explain: "Gymnosperm ovules are naked; the ovary is an angiosperm feature.",
          },
          {
            kind: "mcq",
            q: "Which has a haplontic life cycle?",
            options: ["Fucus", "Spirogyra", "Polysiphonia", "Pinus"],
            answer: 1,
            explain: "*Spirogyra* is haplontic. *Fucus* and *Pinus* are diplontic; *Polysiphonia* is haplo-diplontic.",
            difficulty: 2,
          },
          {
            kind: "fill",
            q: "Fungal association with the roots of Pinus is called ___.",
            answer: ["mycorrhiza", "mycorrhizae"],
            explain: "Mycorrhiza helps absorb water and minerals.",
          },
          {
            kind: "numeric",
            q: "If the endosperm of a plant has 27 chromosomes, how many chromosomes does its leaf cell have?",
            answer: 18,
            explain: "3n = 27 → n = 9 → leaf (2n) = 18.",
            difficulty: 3,
          },
        ],
      },
    ],
  },
  /* ------------------------------------------------------------------ */
  {
    slug: "animal-kingdom",
    title: "Animal Kingdom",
    icon: "🐾",
    description: "The basis of animal classification, the non-chordate phyla from Porifera to Hemichordata, and the chordate classes.",
    lessons: [
      {
        slug: "basis-of-classification",
        title: "Basis of Animal Classification",
        summary: "Levels of organisation, symmetry, germ layers, coelom, segmentation and notochord, used to sort animals into phyla.",
        minutes: 15,
        xp: 40,
        blocks: [
          {
            type: "text",
            md: "Over a million animal species have been described. To sort them, zoologists use a few **fundamental features** common to many groups: how cells are organised, body symmetry, number of germ layers, type of body cavity, segmentation and presence of a notochord.",
          },
          {
            type: "table",
            headers: ["Level of organisation", "Meaning", "Group"],
            rows: [
              ["Cellular", "Cells arranged as loose aggregates", "Sponges (Porifera)"],
              ["Tissue", "Cells doing the same function form tissues", "Coelenterates, ctenophores"],
              ["Organ", "Tissues grouped into organs", "Platyhelminthes"],
              ["Organ system", "Organs grouped into systems", "Annelids, arthropods, molluscs, echinoderms, chordates"],
            ],
          },
          {
            type: "list",
            items: [
              "**Digestive system:** incomplete (single opening, mouth and anus together) in Platyhelminthes; complete (mouth and anus separate) in most others.",
              "**Circulation:** open (blood bathes tissues in sinuses, e.g. arthropods, most molluscs) or closed (blood in vessels, e.g. annelids, chordates).",
            ],
          },
          {
            type: "heading",
            text: "Symmetry and germ layers",
          },
          {
            type: "list",
            items: [
              "**Asymmetrical:** no plane divides the body into equal halves (most sponges).",
              "**Radial:** any plane through the central axis divides into equal halves (coelenterates, ctenophores, **adult** echinoderms).",
              "**Bilateral:** only one plane gives equal left and right halves (annelids, arthropods, chordates).",
              "**Diploblastic:** ectoderm and endoderm with an undifferentiated **mesoglea** between (coelenterates). **Triploblastic:** a third layer, mesoderm (Platyhelminthes to chordates).",
            ],
          },
          {
            type: "heading",
            text: "Coelom",
          },
          {
            type: "table",
            headers: ["Type", "Body cavity", "Phyla"],
            rows: [
              ["Acoelomate", "None", "Platyhelminthes"],
              ["Pseudocoelomate", "Cavity not lined by mesoderm; mesoderm in scattered pouches", "Aschelminthes"],
              ["Coelomate", "True coelom lined by mesoderm", "Annelida, Mollusca, Arthropoda, Echinodermata, Hemichordata, Chordata"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Roundworms (Aschelminthes) are:",
                options: ["acoelomate", "pseudocoelomate", "coelomate", "diploblastic"],
                answer: 1,
                explain: "Their body cavity is not lined by mesoderm.",
              },
            ],
          },
          {
            type: "heading",
            text: "Worked example: placing an unknown animal",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "An animal is found in a Kerala paddy field: triploblastic, bilateral, with a true coelom.",
              "Its body is divided externally and internally into repeated segments (**metameric segmentation**). No notochord.",
              "Triploblastic + coelomate + metameric + no jointed legs → phylum **Annelida**. It is an earthworm (*Pheretima*).",
              "Had it a **notochord** (a mesodermal rod on the dorsal side during development), it would be a chordate instead.",
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Echinoderms are **radially symmetrical as adults** but their **larvae are bilateral**. Sponges are at the **cellular** level, not tissue level. And ctenophores, like coelenterates, are **diploblastic** with tissue-level organisation.",
          },
          {
            type: "keypoints",
            items: [
              "Levels: cellular (sponges), tissue (cnidarians), organ (flatworms), organ system (rest).",
              "Symmetry: asymmetrical, radial or bilateral.",
              "Diploblastic (cnidarians, ctenophores) vs triploblastic (flatworms onwards).",
              "Acoelomate (flatworms), pseudocoelomate (roundworms), coelomate (annelids onwards).",
            ],
          },
        ],
        flashcards: [
          { front: "Mesoglea", back: "Undifferentiated layer between ectoderm and endoderm in diploblastic animals." },
          { front: "Pseudocoelom", back: "Body cavity not lined by mesoderm; mesoderm present as scattered pouches. Found in Aschelminthes." },
          { front: "Metameric segmentation", back: "Serial repetition of body segments externally and internally, e.g. earthworm." },
          { front: "Notochord", back: "A mesodermally derived rod-like structure on the dorsal side during embryonic development of chordates." },
          { front: "Open circulatory system", back: "Blood pumped out of the heart bathes cells and tissues directly in sinuses, e.g. arthropods." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which phylum shows organ-level organisation?",
            options: ["Porifera", "Coelenterata", "Platyhelminthes", "Annelida"],
            answer: 2,
            explain: "Flatworms have organs; annelids and above have organ systems.",
          },
          {
            kind: "truefalse",
            q: "Adult echinoderms are bilaterally symmetrical.",
            answer: false,
            explain: "Adults are radial; their larvae are bilateral.",
          },
          {
            kind: "fill",
            q: "Animals in which the body cavity is lined by mesoderm are called ___.",
            answer: ["coelomates", "coelomate", "eucoelomates"],
            explain: "They have a true coelom.",
          },
          {
            kind: "mcq",
            q: "Which pair are both diploblastic?",
            options: ["Sponges and flatworms", "Coelenterates and ctenophores", "Annelids and arthropods", "Flatworms and roundworms"],
            answer: 1,
            explain: "Cnidarians and ctenophores have two germ layers with mesoglea between.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange the levels of organisation from simplest to most complex.",
            items: ["Cellular", "Tissue", "Organ", "Organ system"],
            explain: "Sponges → cnidarians → flatworms → annelids onwards.",
          },
        ],
      },
      {
        slug: "non-chordates",
        title: "Non-chordate Phyla",
        summary: "Distinguishing features and examples of Porifera, Coelenterata, Ctenophora, Platyhelminthes, Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata and Hemichordata.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Animals without a notochord are **non-chordates**. NCERT describes ten such phyla. For NEET, each phylum is best remembered by **one hallmark feature** plus **two or three examples** with their common names.",
          },
          {
            type: "table",
            headers: ["Phylum", "Hallmark", "Examples"],
            rows: [
              ["Porifera (sponges)", "Water canal system: water enters via **ostia** into the **spongocoel**, exits via **osculum**; **choanocytes** (collar cells) line it; spicules / spongin fibres", "*Sycon* (Scypha), *Spongilla* (fresh-water sponge), *Euspongia* (bath sponge)"],
              ["Coelenterata (Cnidaria)", "**Cnidoblasts** (stinging cells) on tentacles; gastrovascular cavity; polyp and medusa forms; **metagenesis** in *Obelia*", "*Physalia* (Portuguese man-of-war), *Adamsia* (sea anemone), *Pennatula* (sea-pen), *Gorgonia* (sea-fan), *Meandrina* (brain coral)"],
              ["Ctenophora (sea walnuts, comb jellies)", "Eight external rows of ciliated **comb plates** for locomotion; **bioluminescence**", "*Pleurobrachia*, *Ctenoplana*"],
              ["Platyhelminthes (flatworms)", "Dorsoventrally flattened; **flame cells** for excretion; hooks and suckers in parasites", "*Taenia* (tapeworm), *Fasciola* (liver fluke); *Planaria* has high regeneration"],
              ["Aschelminthes (roundworms)", "Circular in cross-section; pseudocoelomate; **dioecious** (females longer than males)", "*Ascaris* (roundworm), *Wuchereria* (filarial worm), *Ancylostoma* (hookworm)"],
              ["Annelida", "Metameric segmentation; **nephridia**; closed circulation; parapodia in *Nereis*", "*Nereis*, *Pheretima* (earthworm), *Hirudinaria* (blood-sucking leech)"],
              ["Arthropoda", "**Largest phylum** (over two-thirds of named species); chitinous exoskeleton; jointed appendages; Malpighian tubules; open circulation", "*Apis* (honey bee), *Bombyx* (silkworm), *Laccifer* (lac insect), *Anopheles*, *Culex*, *Aedes* (mosquitoes), *Locusta*, *Limulus* (king crab, living fossil)"],
              ["Mollusca", "Second largest; soft body with calcareous shell; **mantle**; file-like rasping **radula**", "*Pila* (apple snail), *Pinctada* (pearl oyster), *Sepia* (cuttlefish), *Loligo* (squid), *Octopus* (devil fish), *Aplysia* (sea-hare), *Dentalium* (tusk shell), *Chaetopleura* (chiton)"],
              ["Echinodermata", "Spiny skin; calcareous ossicles as endoskeleton; **water vascular system**; all marine", "*Asterias* (star fish), *Echinus* (sea urchin), *Antedon* (sea lily), *Cucumaria* (sea cucumber), *Ophiura* (brittle star)"],
              ["Hemichordata", "Worm-like, marine; body of **proboscis, collar and trunk**; **stomochord** (not a true notochord)", "*Balanoglossus*, *Saccoglossus*"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Flame cells, used in excretion and osmoregulation, are found in:",
                options: ["Annelida", "Platyhelminthes", "Aschelminthes", "Mollusca"],
                answer: 1,
                explain: "Flame cells are the excretory structures of flatworms.",
              },
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: coelenterates vs ctenophores",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Both are radially symmetrical, diploblastic and at the tissue level.",
              "Coelenterates capture prey with **cnidoblasts**; ctenophores have no stinging cells and move by **comb plates**.",
              "Coelenterates often show polyp–medusa alternation (metagenesis); ctenophores do not.",
              "Ctenophores are well known for bioluminescence; reproduction is only sexual, with indirect development.",
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "A memory hook",
            md: "**Arthropod** = 'jointed foot'. **Echinoderm** = 'spiny skin'. **Coelenterate** = 'hollow gut'. **Ctenophore** = 'comb-bearer'. Translating the Greek often gives the hallmark.",
          },
          {
            type: "illustration",
            emoji: "🦂",
            caption: "Scorpions, prawns, centipedes and mosquitoes all belong to Arthropoda: jointed legs and a chitin exoskeleton.",
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "Which animal is a living fossil?",
                options: ["Limulus", "Locusta", "Laccifer", "Loligo"],
                answer: 0,
                explain: "*Limulus*, the king crab, has changed little over millions of years.",
              },
            ],
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "Hemichordata was once a sub-phylum of Chordata but is now a **separate non-chordate phylum**: the stomochord is not a true notochord. *Sepia* is a cuttlefish (mollusc), not a fish; *Asterias* is a 'star fish' but an echinoderm. Common names mislead.",
          },
          {
            type: "callout",
            tone: "fact",
            title: "Insects and Indian health",
            md: "*Anopheles* spreads malaria, *Culex* filariasis (with *Wuchereria*) and *Aedes* dengue and chikungunya. Every monsoon, municipal drives across Indian cities target their breeding sites.",
          },
          {
            type: "keypoints",
            items: [
              "Porifera: canal system and choanocytes. Coelenterata: cnidoblasts, metagenesis.",
              "Ctenophora: comb plates. Platyhelminthes: flame cells. Aschelminthes: pseudocoelom.",
              "Annelida: metameres, nephridia. Arthropoda: jointed appendages, largest phylum.",
              "Mollusca: mantle, radula. Echinodermata: water vascular system. Hemichordata: stomochord.",
            ],
          },
        ],
        flashcards: [
          { front: "Choanocytes", back: "Collar cells that line the spongocoel and canals of sponges." },
          { front: "Metagenesis", back: "Alternation of polyp (asexual) and medusa (sexual) generations, e.g. Obelia." },
          { front: "Radula", back: "File-like rasping organ for feeding in the mouth of molluscs." },
          { front: "Water vascular system", back: "Echinoderm system for locomotion, food capture, transport and respiration." },
          { front: "Pinctada", back: "Pearl oyster (Mollusca)." },
          { front: "Wuchereria", back: "Filarial worm (Aschelminthes), causes elephantiasis." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "The largest phylum of the animal kingdom is:",
            options: ["Mollusca", "Chordata", "Arthropoda", "Annelida"],
            answer: 2,
            explain: "Arthropods include over two-thirds of all named species.",
          },
          {
            kind: "truefalse",
            q: "Comb plates of ctenophores help in locomotion.",
            answer: true,
            explain: "Eight external rows of ciliated comb plates propel the animal.",
          },
          {
            kind: "fill",
            q: "In sponges, water leaves the spongocoel through the ___.",
            answer: ["osculum"],
            explain: "Water enters via ostia and exits via the osculum.",
          },
          {
            kind: "mcq",
            q: "Which pair is correctly matched?",
            options: ["Physalia: sea-fan", "Antedon: sea lily", "Aplysia: tusk shell", "Pennatula: brain coral"],
            answer: 1,
            explain: "*Antedon* is the sea lily. *Physalia* is Portuguese man-of-war; *Aplysia* sea-hare; *Pennatula* sea-pen.",
            difficulty: 2,
          },
          {
            kind: "mcq",
            q: "Malpighian tubules are excretory organs of:",
            options: ["Annelids", "Arthropods", "Molluscs", "Echinoderms"],
            answer: 1,
            explain: "Insects and other arthropods excrete through Malpighian tubules.",
          },
          {
            kind: "mcq",
            q: "Balanoglossus is placed in Hemichordata because it has:",
            options: ["a true notochord", "a stomochord", "a water vascular system", "jointed appendages"],
            answer: 1,
            explain: "Its stomochord is notochord-like but not a true notochord.",
            difficulty: 3,
          },
        ],
      },
      {
        slug: "chordates",
        title: "Phylum Chordata",
        summary: "The four chordate features, protochordates, and the vertebrate classes from Cyclostomata to Mammalia with their key examples.",
        minutes: 20,
        xp: 50,
        blocks: [
          {
            type: "text",
            md: "Chordates share four features at some stage of life: (1) a **notochord**, (2) a **dorsal, hollow, single nerve cord**, (3) **paired pharyngeal gill slits** and (4) a **post-anal tail**. Non-chordates have a solid, double, ventral nerve cord and no notochord.",
          },
          {
            type: "table",
            headers: ["Subphylum", "Notochord", "Examples"],
            rows: [
              ["Urochordata (Tunicata)", "Only in the **larval tail**", "*Ascidia*, *Salpa*, *Doliolum*"],
              ["Cephalochordata", "From head to tail, **throughout life**", "*Branchiostoma* (Amphioxus, lancelet)"],
              ["Vertebrata", "Embryonic; replaced by a **vertebral column** in adults", "Fish to mammals"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "One-liner",
            md: "**All vertebrates are chordates, but all chordates are not vertebrates.** Urochordates and cephalochordates (the protochordates) have no backbone.",
          },
          {
            type: "heading",
            text: "Vertebrate classes",
          },
          {
            type: "table",
            headers: ["Class", "Key features", "Examples"],
            rows: [
              ["Cyclostomata", "Jawless, circular sucking mouth; 6–15 pairs of gill slits; ectoparasites on fish; migrate to fresh water to spawn and die", "*Petromyzon* (lamprey), *Myxine* (hagfish)"],
              ["Chondrichthyes", "Cartilaginous endoskeleton; **placoid scales**; no air bladder (must swim to avoid sinking); claspers in males; internal fertilisation", "*Scoliodon* (dogfish), *Pristis* (sawfish), *Carcharodon* (great white shark), *Trygon* (sting ray), *Torpedo* (electric ray)"],
              ["Osteichthyes", "Bony endoskeleton; 4 pairs of gills covered by an **operculum**; **air bladder**; cycloid / ctenoid scales; external fertilisation mostly", "*Exocoetus* (flying fish), *Hippocampus* (sea horse), *Labeo* (rohu), *Catla*, *Clarias* (magur), *Betta* (fighting fish), *Pterophyllum* (angel fish)"],
              ["Amphibia", "Live on land and in water; moist skin, no scales; tympanum; **cloaca**; 3-chambered heart; cold-blooded", "*Bufo* (toad), *Rana* (frog), *Hyla* (tree frog), *Salamandra*, *Ichthyophis* (limbless)"],
              ["Reptilia", "Dry cornified skin with scales or scutes; 3-chambered heart (4 in crocodiles); cold-blooded; shed skin as scales", "*Chelone* (turtle), *Testudo* (tortoise), *Chameleon*, *Calotes* (garden lizard), *Crocodilus*, *Alligator*, *Hemidactylus* (wall lizard); poisonous snakes *Naja* (cobra), *Bungarus* (krait), *Vipera*"],
              ["Aves", "Feathers; beak; forelimbs as wings; **pneumatic** bones; crop and gizzard; 4-chambered heart; warm-blooded; oviparous", "*Corvus* (crow), *Columba* (pigeon), *Psittacula* (parrot), *Struthio* (ostrich), *Pavo* (peacock), *Aptenodytes* (penguin), *Neophron* (vulture)"],
              ["Mammalia", "**Mammary glands**; hair; external ears (pinnae); heterodont teeth; 4-chambered heart; warm-blooded; mostly viviparous", "*Ornithorhynchus* (platypus, oviparous), *Macropus* (kangaroo), *Pteropus* (flying fox), *Camelus*, *Macaca* (monkey), *Rattus*, *Canis*, *Felis*, *Elephas*, *Equus*, *Delphinus* (dolphin), *Balaenoptera* (blue whale), *Panthera tigris* (tiger), *Panthera leo* (lion)"],
            ],
          },
          {
            type: "checkpoint",
            questions: [
              {
                kind: "mcq",
                q: "In which subphylum is the notochord present only in the larval tail?",
                options: ["Cephalochordata", "Urochordata", "Vertebrata", "Hemichordata"],
                answer: 1,
                explain: "Tunicates such as *Ascidia* lose the notochord after metamorphosis.",
              },
            ],
          },
          {
            type: "heading",
            text: "Worked comparison: two kinds of fish",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Skeleton: shark (*Scoliodon*) cartilaginous; rohu (*Labeo*) bony.",
              "Gills: shark's gill slits are separate and **uncovered**; rohu's 4 pairs are covered by an **operculum**.",
              "Buoyancy: shark has **no air bladder** and must keep swimming; rohu has an air bladder.",
              "Scales and fertilisation: shark has placoid scales and internal fertilisation (males have claspers); rohu has cycloid scales and external fertilisation.",
            ],
          },
          {
            type: "illustration",
            emoji: "🦚",
            caption: "India's national bird, the peacock (Pavo cristatus), and national animal, the tiger (Panthera tigris), are both vertebrates of different classes: Aves and Mammalia.",
          },
          {
            type: "callout",
            tone: "exam",
            title: "NEET trap",
            md: "*Torpedo* has **electric organs**; *Trygon* has a **poison sting**. Crocodiles have a **4-chambered** heart though they are reptiles. *Ornithorhynchus* is an egg-laying mammal. Flying fox (*Pteropus*) is a mammal, flying fish (*Exocoetus*) a bony fish, and *Hippocampus* (sea horse) is a fish, not a horse.",
          },
          {
            type: "keypoints",
            items: [
              "Chordate features: notochord, dorsal hollow nerve cord, pharyngeal gill slits, post-anal tail.",
              "Protochordates: Urochordata (larval notochord) and Cephalochordata (lifelong).",
              "Fish: cartilaginous (placoid scales, no air bladder) vs bony (operculum, air bladder).",
              "Amphibians and reptiles are cold-blooded; birds and mammals warm-blooded with 4-chambered hearts.",
            ],
          },
        ],
        flashcards: [
          { front: "Four chordate features", back: "Notochord, dorsal hollow nerve cord, paired pharyngeal gill slits, post-anal tail." },
          { front: "Amphioxus", back: "Branchiostoma, a cephalochordate with a notochord throughout life." },
          { front: "Placoid scales", back: "Tooth-like scales of cartilaginous fish such as sharks." },
          { front: "Pneumatic bones", back: "Hollow bones with air cavities, found in birds." },
          { front: "Egg-laying mammal", back: "Ornithorhynchus (duck-billed platypus)." },
          { front: "Limbless amphibian", back: "Ichthyophis." },
        ],
        quiz: [
          {
            kind: "mcq",
            q: "Which of these has a cartilaginous endoskeleton?",
            options: ["Labeo", "Catla", "Scoliodon", "Hippocampus"],
            answer: 2,
            explain: "*Scoliodon* (dogfish) is a shark, class Chondrichthyes.",
          },
          {
            kind: "truefalse",
            q: "Reptiles other than crocodiles have a three-chambered heart.",
            answer: true,
            explain: "Most reptiles have a 3-chambered heart; crocodiles have 4 chambers.",
          },
          {
            kind: "fill",
            q: "The gills of bony fish are covered by a flap called the ___.",
            answer: ["operculum"],
            explain: "Cartilaginous fish lack an operculum.",
          },
          {
            kind: "mcq",
            q: "Which animal is NOT a mammal?",
            options: ["Pteropus", "Delphinus", "Exocoetus", "Macropus"],
            answer: 2,
            explain: "*Exocoetus* is the flying fish (Osteichthyes). Flying fox, dolphin and kangaroo are mammals.",
            difficulty: 2,
          },
          {
            kind: "order",
            q: "Arrange these vertebrate classes in the order NCERT describes them.",
            items: ["Cyclostomata", "Chondrichthyes", "Osteichthyes", "Amphibia", "Reptilia", "Aves", "Mammalia"],
            explain: "Jawless forms first, then cartilaginous and bony fish, amphibians, reptiles, birds and mammals.",
          },
          {
            kind: "mcq",
            q: "Which is a poisonous snake?",
            options: ["Hemidactylus", "Calotes", "Bungarus", "Chelone"],
            answer: 2,
            explain: "*Bungarus* is the krait. *Hemidactylus* and *Calotes* are lizards; *Chelone* a turtle.",
          },
        ],
      },
    ],
  },
];

/** Syllabus chapter title (and its synonyms) → topic slug in `topics`. */
export const links: Record<string, string> = {
  "The Living World": "living-world",
  "Diversity in Living World": "living-world",
  "Diversity of Living Organisms": "living-world",
  "Biological Classification": "biological-classification",
  "Plant Kingdom": "plant-kingdom",
  "Animal Kingdom": "animal-kingdom",
};
